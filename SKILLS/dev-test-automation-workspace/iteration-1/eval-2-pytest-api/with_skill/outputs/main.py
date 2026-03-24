from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# 인메모리 사용자 데이터
USERS_DB: dict[int, dict] = {
    1: {"id": 1, "name": "홍길동", "email": "hong@example.com"},
    2: {"id": 2, "name": "김철수", "email": "kim@example.com"},
    3: {"id": 3, "name": "이영희", "email": "lee@example.com"},
}


class User(BaseModel):
    id: int
    name: str
    email: str


@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    """사용자 ID로 사용자 정보를 조회합니다.

    - 존재하는 ID: 사용자 정보 반환 (200 OK)
    - 존재하지 않는 ID: 404 Not Found 반환
    """
    user = USERS_DB.get(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
