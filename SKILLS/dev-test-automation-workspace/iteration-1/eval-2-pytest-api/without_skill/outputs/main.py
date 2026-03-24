from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

# In-memory user store for demonstration
USERS_DB: dict[int, User] = {
    1: User(id=1, name="Alice", email="alice@example.com"),
    2: User(id=2, name="Bob", email="bob@example.com"),
    3: User(id=3, name="Charlie", email="charlie@example.com"),
}


@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    """
    Retrieve a user by ID.
    Returns the user if found, or 404 if not found.
    """
    user = USERS_DB.get(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail=f"User with id {user_id} not found")
    return user
