# src/Backend/app.py
import pickle, faiss, numpy as np
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from pathlib import Path

BASE = Path(__file__).parent          # carpeta Backend

# ── artefactos ─────────────────────────────────────────
index     = faiss.read_index(str(BASE / "ley_datos_faiss.bin"))
metadatas = pickle.load(open(BASE / "ley_datos_metadatas.pkl", "rb"))
chunks    = pickle.load(open(BASE / "ley_datos_chunks.pkl",   "rb"))
embedder  = SentenceTransformer("all-mpnet-base-v2")

# ── LLM + prompt ───────────────────────────────────────
llm = ChatOpenAI(model_name="gpt-4o", temperature=0)

TEMPLATE = """Eres LEXIA, un asistente experto en derecho chileno.
Responde en un párrafo claro utilizando solo la información del contexto.
Si no hay contexto suficiente, dilo explícitamente.

❱ Pregunta:
{question}

❱ Contexto relevante:
{context}

✦ Respuesta:"""

prompt = PromptTemplate.from_template(TEMPLATE)

# ── FastAPI ────────────────────────────────────────────
app = FastAPI()
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

class Query(BaseModel):
    question: str
    k: int = 4

@app.post("/ask")
def ask(q: Query):
    # 1. embed + búsqueda
    q_emb = embedder.encode([q.question], convert_to_numpy=True)
    D, I  = index.search(q_emb, q.k)

    # 2. contexto concatenado
    ctx = "\n\n".join(f"(pág.{metadatas[i]['page']}) {chunks[i]}" for i in I[0])

    # 3. invocación del modelo (usa .invoke → devuelve AIMessage)
    prompt_text = prompt.format(question=q.question, context=ctx)
    ai_msg      = llm.invoke(prompt_text)        # <-- clave
    answer      = ai_msg.content

    return {
        "answer": answer,
        "references": [
            {"page": int(metadatas[i]["page"]), "score": float(D[0][r])}
            for r, i in enumerate(I[0])
        ]
    }
