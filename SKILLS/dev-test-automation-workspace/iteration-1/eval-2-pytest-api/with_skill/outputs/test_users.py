"""
pytest로 작성한 GET /users/{id} 엔드포인트 테스트

테스트 실행 방법:
    pip install fastapi httpx pytest
    pytest test_users.py -v

커버리지 포함 실행:
    pytest test_users.py -v --cov=main --cov-report=term-missing
"""

import pytest
from fastapi.testclient import TestClient

from main import app, USERS_DB

# ---------------------------------------------------------------------------
# 픽스처
# ---------------------------------------------------------------------------

@pytest.fixture
def client():
    """FastAPI TestClient 픽스처 - 각 테스트마다 새 클라이언트를 제공합니다."""
    with TestClient(app) as c:
        yield c


# ---------------------------------------------------------------------------
# 정상 케이스 - 존재하는 ID 조회
# ---------------------------------------------------------------------------

class TestGetUserSuccess:
    """존재하는 사용자 ID에 대한 테스트 그룹"""

    def test_get_existing_user_returns_200(self, client):
        """존재하는 ID로 조회하면 200 OK를 반환한다."""
        # Arrange
        user_id = 1

        # Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert response.status_code == 200

    def test_get_existing_user_returns_correct_id(self, client):
        """존재하는 ID로 조회하면 해당 사용자의 id 필드가 일치한다."""
        # Arrange
        user_id = 1

        # Act
        response = client.get(f"/users/{user_id}")
        data = response.json()

        # Assert
        assert data["id"] == user_id

    def test_get_existing_user_returns_name_and_email(self, client):
        """존재하는 ID로 조회하면 name, email 필드가 포함된다."""
        # Arrange
        user_id = 1

        # Act
        response = client.get(f"/users/{user_id}")
        data = response.json()

        # Assert
        assert "name" in data
        assert "email" in data

    def test_get_existing_user_returns_correct_data(self, client):
        """존재하는 ID로 조회하면 DB에 저장된 정확한 사용자 정보를 반환한다."""
        # Arrange
        user_id = 2
        expected = USERS_DB[user_id]

        # Act
        response = client.get(f"/users/{user_id}")
        data = response.json()

        # Assert
        assert data["id"] == expected["id"]
        assert data["name"] == expected["name"]
        assert data["email"] == expected["email"]

    @pytest.mark.parametrize("user_id", [1, 2, 3])
    def test_get_all_existing_users(self, client, user_id):
        """DB에 존재하는 모든 사용자 ID에 대해 200 OK를 반환한다."""
        # Arrange / Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert response.status_code == 200
        assert response.json()["id"] == user_id


# ---------------------------------------------------------------------------
# 오류 케이스 - 존재하지 않는 ID 조회
# ---------------------------------------------------------------------------

class TestGetUserNotFound:
    """존재하지 않는 사용자 ID에 대한 테스트 그룹"""

    def test_get_nonexistent_user_returns_404(self, client):
        """존재하지 않는 ID로 조회하면 404 Not Found를 반환한다."""
        # Arrange
        user_id = 9999

        # Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert response.status_code == 404

    def test_get_nonexistent_user_returns_detail_message(self, client):
        """404 응답에는 오류 상세 메시지(detail 필드)가 포함된다."""
        # Arrange
        user_id = 9999

        # Act
        response = client.get(f"/users/{user_id}")
        data = response.json()

        # Assert
        assert "detail" in data
        assert data["detail"] == "User not found"

    @pytest.mark.parametrize("user_id", [0, -1, 99999])
    def test_get_various_nonexistent_user_ids_returns_404(self, client, user_id):
        """다양한 존재하지 않는 ID에 대해 모두 404를 반환한다."""
        # Arrange / Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert response.status_code == 404


# ---------------------------------------------------------------------------
# 경계값 / 추가 케이스
# ---------------------------------------------------------------------------

class TestGetUserEdgeCases:
    """경계값 및 추가 시나리오 테스트 그룹"""

    def test_get_user_response_is_json(self, client):
        """정상 응답은 Content-Type이 application/json이다."""
        # Arrange
        user_id = 1

        # Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert "application/json" in response.headers["content-type"]

    def test_get_user_404_response_is_json(self, client):
        """404 응답도 Content-Type이 application/json이다."""
        # Arrange
        user_id = 9999

        # Act
        response = client.get(f"/users/{user_id}")

        # Assert
        assert "application/json" in response.headers["content-type"]

    def test_get_user_response_schema(self, client):
        """정상 응답은 id(int), name(str), email(str) 스키마를 준수한다."""
        # Arrange
        user_id = 1

        # Act
        response = client.get(f"/users/{user_id}")
        data = response.json()

        # Assert
        assert isinstance(data["id"], int)
        assert isinstance(data["name"], str)
        assert isinstance(data["email"], str)
