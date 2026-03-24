import pytest
from fastapi.testclient import TestClient

from main import app, USERS_DB, User

client = TestClient(app)


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

@pytest.fixture(autouse=True)
def reset_users_db():
    """
    Reset the in-memory user store to a known state before each test
    so tests remain independent of each other.
    """
    original = dict(USERS_DB)
    USERS_DB.clear()
    USERS_DB.update({
        1: User(id=1, name="Alice", email="alice@example.com"),
        2: User(id=2, name="Bob", email="bob@example.com"),
        3: User(id=3, name="Charlie", email="charlie@example.com"),
    })
    yield
    USERS_DB.clear()
    USERS_DB.update(original)


# ---------------------------------------------------------------------------
# Happy-path tests — existing IDs
# ---------------------------------------------------------------------------

class TestGetUserFound:
    def test_get_existing_user_returns_200(self):
        response = client.get("/users/1")
        assert response.status_code == 200

    def test_get_existing_user_returns_correct_body(self):
        response = client.get("/users/1")
        data = response.json()
        assert data["id"] == 1
        assert data["name"] == "Alice"
        assert data["email"] == "alice@example.com"

    def test_get_second_user(self):
        response = client.get("/users/2")
        assert response.status_code == 200
        data = response.json()
        assert data["id"] == 2
        assert data["name"] == "Bob"

    def test_get_third_user(self):
        response = client.get("/users/3")
        assert response.status_code == 200
        data = response.json()
        assert data["id"] == 3
        assert data["name"] == "Charlie"

    def test_response_contains_all_required_fields(self):
        """Ensure the response schema includes id, name, and email."""
        response = client.get("/users/1")
        data = response.json()
        assert "id" in data
        assert "name" in data
        assert "email" in data

    def test_response_content_type_is_json(self):
        response = client.get("/users/1")
        assert "application/json" in response.headers["content-type"]


# ---------------------------------------------------------------------------
# Not-found tests — non-existent IDs
# ---------------------------------------------------------------------------

class TestGetUserNotFound:
    def test_get_nonexistent_user_returns_404(self):
        response = client.get("/users/999")
        assert response.status_code == 404

    def test_get_nonexistent_user_error_detail_present(self):
        response = client.get("/users/999")
        data = response.json()
        assert "detail" in data

    def test_get_nonexistent_user_error_message_contains_id(self):
        response = client.get("/users/999")
        data = response.json()
        assert "999" in data["detail"]

    def test_get_zero_id_returns_404(self):
        """ID 0 does not exist in the store."""
        response = client.get("/users/0")
        assert response.status_code == 404

    def test_get_negative_id_returns_404(self):
        """Negative IDs should not exist."""
        response = client.get("/users/-1")
        assert response.status_code == 404

    def test_get_very_large_id_returns_404(self):
        response = client.get("/users/1000000")
        assert response.status_code == 404


# ---------------------------------------------------------------------------
# Edge / boundary tests
# ---------------------------------------------------------------------------

class TestGetUserEdgeCases:
    def test_get_user_after_deletion_returns_404(self):
        """Simulates a deleted user: removing from DB should yield 404."""
        USERS_DB.pop(1)
        response = client.get("/users/1")
        assert response.status_code == 404

    def test_get_newly_added_user_returns_200(self):
        """A user added at runtime should be retrievable."""
        USERS_DB[99] = User(id=99, name="Dave", email="dave@example.com")
        response = client.get("/users/99")
        assert response.status_code == 200
        assert response.json()["name"] == "Dave"

    def test_non_integer_id_returns_422(self):
        """FastAPI path validation should reject non-integer IDs."""
        response = client.get("/users/abc")
        assert response.status_code == 422
