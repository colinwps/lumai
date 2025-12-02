from fastapi import FastAPI
from app.api.auth import login

app = FastAPI(title="LumAI API")

app.include_router(login.router, prefix="/api/auth", tags=["auth"])

@app.get("/")
async def root():
    return {"message": "Welcome to LumAI API"}
