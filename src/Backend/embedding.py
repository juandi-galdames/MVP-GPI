#!/usr/bin/env python
# pdf_faiss_index.py
# ---------------------------------------------------------
# Construye un índice FAISS desde un PDF y lo persiste
#
# pip install pypdf sentence-transformers faiss-cpu \
#             langchain-text-splitters python-dotenv
# ---------------------------------------------------------

import os, pickle
import faiss, numpy as np, torch
from dotenv import load_dotenv
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
from langchain_text_splitters import RecursiveCharacterTextSplitter




load_dotenv()  # ← si luego usarás tu OPENAI_API_KEY en algún RAG

# 1 ─ Leer PDF y trocear
pdf_path = "ley_tratamiento_datos.pdf"
reader   = PdfReader(pdf_path)

splitter  = RecursiveCharacterTextSplitter(chunk_size=1024, chunk_overlap=128)
chunks    = []
metadatas = []

for page_num, page in enumerate(reader.pages, start=1):
    for chunk in splitter.split_text(page.extract_text() or ""):
        chunks.append(chunk)
        metadatas.append({"page": page_num})

print(f"PDF: {len(reader.pages)} páginas → {len(chunks)} chunks")

# 2 ─ Embeddings (GPU si existe)
device = "cuda" if torch.cuda.is_available() else "cpu"
model  = SentenceTransformer("all-mpnet-base-v2", device=device)

embeddings = model.encode(
    chunks,
    batch_size=64,
    show_progress_bar=True,
    convert_to_numpy=True,
)
print("Embeddings shape:", embeddings.shape)

# 3 ─ Índice FAISS
d     = embeddings.shape[1]
index = faiss.IndexFlatL2(d)
index.add(embeddings)
print("FAISS index size:", index.ntotal)

# 4 ─ Guardar todo lo necesario
faiss.write_index(index,          "ley_datos_faiss.bin")
np.save          ("ley_datos_embeddings.npy", embeddings)
with open("ley_datos_metadatas.pkl", "wb") as f:
    pickle.dump(metadatas, f)
with open("ley_datos_chunks.pkl",   "wb") as f:   # ← NUEVO
    pickle.dump(chunks, f)

print("Índice, embeddings, metadatos y chunks guardados ✅")

# 5 ─ Test rápido
if __name__ == "__main__":
    q_emb = model.encode(["¿Cuál es el objetivo principal de la ley?"], convert_to_numpy=True)
    D, I  = index.search(q_emb, 3)
    for r, idx in enumerate(I[0]):
        print(f"\n→ Match {r+1} (dist {D[0][r]:.4f}) pág.{metadatas[idx]['page']}")
        print(chunks[idx][:200].replace('\n', ' '), "…")
