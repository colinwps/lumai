from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "LumAI API"
    API_V1_STR: str = "/api"
    
    # Database
    DATABASE_URL: str = "mysql+aiomysql://user:password@localhost/lumai_db"

    # JWT
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_CHANGE_ME"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"

settings = Settings()
