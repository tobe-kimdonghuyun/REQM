---
name: dev-test-automation
description: 개발자를 위한 자동화 테스트 스킬. TypeScript/JavaScript/Python/Kotlin/HTML 프로젝트에서 테스트 작성, 실행, CI/CD 통합을 도와줍니다. 사용자가 "테스트 작성해줘", "테스트 자동화", "Jest/pytest/JUnit 설정", "E2E 테스트", "CI 파이프라인", "코드 커버리지", "HTML 테스트", "DOM 테스트", "JavaScript 테스트" 등을 언급할 때 반드시 이 스킬을 사용하세요. 테스트와 관련된 모든 요청에 적극적으로 활용하세요.
---

# 개발자 자동화 테스트 스킬

이 스킬은 TypeScript / JavaScript / Python / Kotlin / HTML 프로젝트에서 테스트를 작성하고 자동화하는 전 과정을 돕습니다.

---

## 1. 언어별 대표 테스트 프레임워크

### TypeScript / JavaScript
| 도구 | 용도 |
|------|------|
| **Jest** | 단위(Unit) / 통합(Integration) 테스트 |
| **Playwright** | E2E(브라우저 자동화) 테스트 |
| **Cypress** | E2E 테스트 (UI 중심) |
| **Testing Library** | React 컴포넌트 / DOM 테스트 |
| **Vitest** | Vite 기반 프로젝트 단위 테스트 |
| **QUnit** | 순수 JavaScript 단위 테스트 |
| **Jasmine** | BDD 스타일 JavaScript 테스트 |

### HTML / DOM
| 도구 | 용도 |
|------|------|
| **jsdom** | Node 환경에서 DOM 시뮬레이션 |
| **Testing Library (DOM)** | HTML 요소 쿼리 및 이벤트 테스트 |
| **Playwright** | 실제 브라우저 HTML 렌더링 테스트 |
| **HTML Validator (W3C)** | HTML 문법 유효성 검사 |
| **axe-core** | 접근성(A11y) 자동 테스트 |

### Python
| 도구 | 용도 |
|------|------|
| **pytest** | 단위 / 통합 테스트 (표준) |
| **pytest-asyncio** | 비동기 테스트 |
| **httpx / TestClient** | FastAPI 엔드포인트 테스트 |
| **factory_boy** | 테스트 픽스처 생성 |
| **coverage.py** | 코드 커버리지 측정 |

### Kotlin / Java
| 도구 | 용도 |
|------|------|
| **JUnit 5** | 단위 / 통합 테스트 (표준) |
| **MockK** | Kotlin 전용 Mocking |
| **Mockito** | Java/Kotlin Mocking |
| **Spring Boot Test** | Spring 통합 테스트 |
| **Testcontainers** | DB/외부 서비스 통합 테스트 |
| **RestAssured** | REST API 테스트 |

---

## 2. JavaScript 테스트 예시

### 순수 JavaScript 단위 테스트 (Jest)
```javascript
// utils.js
function add(a, b) { return a + b; }
function formatPrice(price) { return `${price.toLocaleString()}원`; }
module.exports = { add, formatPrice };

// utils.test.js
const { add, formatPrice } = require('./utils');

describe('유틸 함수 테스트', () => {
  test('두 숫자를 더한다', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('가격을 한국 형식으로 포맷한다', () => {
    expect(formatPrice(10000)).toBe('10,000원');
  });
});
```

### 비동기 JavaScript 테스트
```javascript
// api.test.js
const { fetchUser } = require('./api');

test('사용자 정보를 가져온다', async () => {
  const user = await fetchUser(1);
  expect(user).toHaveProperty('id', 1);
  expect(user).toHaveProperty('name');
});

// fetch Mocking
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1, name: '홍길동' }),
  })
);
```

### 모듈 Mocking (Jest)
```javascript
jest.mock('./emailService');
const emailService = require('./emailService');

test('회원가입 시 이메일이 발송된다', async () => {
  emailService.send.mockResolvedValue({ success: true });
  await registerUser({ email: 'test@test.com' });
  expect(emailService.send).toHaveBeenCalledWith(
    expect.objectContaining({ to: 'test@test.com' })
  );
});
```

---

## 3. HTML / DOM 테스트 예시

### DOM 요소 테스트 (@testing-library/dom)
```javascript
import { getByText, fireEvent, waitFor } from '@testing-library/dom';

test('버튼 클릭 시 텍스트가 변경된다', async () => {
  document.body.innerHTML = `
    <div>
      <p id="message">초기 메시지</p>
      <button id="btn">변경</button>
    </div>
  `;

  const btn = document.getElementById('btn');
  const msg = document.getElementById('message');

  btn.addEventListener('click', () => {
    msg.textContent = '변경된 메시지';
  });

  fireEvent.click(btn);
  await waitFor(() => {
    expect(msg.textContent).toBe('변경된 메시지');
  });
});
```

### HTML 폼 유효성 테스트
```javascript
test('이메일 형식이 틀리면 에러가 표시된다', () => {
  document.body.innerHTML = `
    <form id="form">
      <input type="email" id="email" required />
      <span id="error" style="display:none">올바른 이메일을 입력하세요</span>
      <button type="submit">제출</button>
    </form>
  `;

  const emailInput = document.getElementById('email');
  const error = document.getElementById('error');

  emailInput.value = 'invalid-email';
  expect(emailInput.validity.valid).toBe(false);
});
```

### 접근성(A11y) 테스트 (axe-core)
```javascript
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('페이지에 접근성 위반이 없다', async () => {
  document.body.innerHTML = `
    <button aria-label="닫기">X</button>
    <img src="logo.png" alt="로고" />
    <nav aria-label="주요 메뉴">...</nav>
  `;
  const results = await axe(document.body);
  expect(results).toHaveNoViolations();
});
```

### HTML 구조 스냅샷 테스트
```javascript
test('카드 컴포넌트 HTML 구조가 유지된다', () => {
  document.body.innerHTML = renderCard({ title: '제목', content: '내용' });
  expect(document.body.innerHTML).toMatchSnapshot();
});
```

---

## 4. Jest 환경 설정 (JavaScript + jsdom)

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',          // DOM API 사용 가능
  setupFilesAfterFramework: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',  // CSS import 무시
  },
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js'],
};
```

```bash
# 설치
npm install --save-dev jest @testing-library/dom jest-environment-jsdom
npm install --save-dev jest-axe axe-core          # 접근성 테스트
npm install --save-dev identity-obj-proxy          # CSS 모킹
```

---

## 6. 테스트 작성 원칙 (AAA 패턴)

모든 테스트는 **Arrange → Act → Assert** 구조로 작성합니다.

```typescript
// Jest 예시
describe('UserService', () => {
  it('사용자를 생성하면 ID가 반환된다', async () => {
    // Arrange (준비)
    const userService = new UserService(mockRepo);
    const dto = { name: '홍길동', email: 'test@test.com' };

    // Act (실행)
    const result = await userService.create(dto);

    // Assert (검증)
    expect(result.id).toBeDefined();
    expect(result.name).toBe('홍길동');
  });
});
```

```python
# pytest 예시
def test_create_user_returns_id(user_service, mock_repo):
    # Arrange
    dto = {"name": "홍길동", "email": "test@test.com"}

    # Act
    result = user_service.create(dto)

    # Assert
    assert result["id"] is not None
    assert result["name"] == "홍길동"
```

```kotlin
// JUnit 5 + MockK 예시
@Test
fun `사용자를 생성하면 ID가 반환된다`() {
    // Arrange
    val dto = CreateUserDto(name = "홍길동", email = "test@test.com")
    every { mockRepo.save(any()) } returns User(id = 1L, name = "홍길동")

    // Act
    val result = userService.create(dto)

    // Assert
    assertThat(result.id).isNotNull()
    assertThat(result.name).isEqualTo("홍길동")
}
```

---

## 7. 설정 파일 표준 템플릿

### Jest (jest.config.ts)
```typescript
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: { lines: 80, functions: 80, branches: 70 },
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};

export default config;
```

### pytest (pyproject.toml)
```toml
[tool.pytest.ini_options]
testpaths = ["tests"]
asyncio_mode = "auto"
addopts = "--cov=app --cov-report=term-missing --cov-fail-under=80"
```

### JUnit 5 (build.gradle.kts)
```kotlin
tasks.test {
    useJUnitPlatform()
    finalizedBy(tasks.jacocoTestReport)
}

tasks.jacocoTestReport {
    reports { xml.required = true }
}
```

---

## 8. E2E 테스트 (Playwright)

```typescript
import { test, expect } from '@playwright/test';

test('로그인 후 대시보드로 이동', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name=email]', 'user@test.com');
  await page.fill('[name=password]', 'password123');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('대시보드');
});
```

```bash
# 실행
npx playwright test
npx playwright test --ui        # UI 모드
npx playwright codegen <URL>    # 자동 코드 생성
```

---

## 9. CI/CD 자동화 (GitHub Actions)

### TypeScript 프로젝트
```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v4
```

### Python 프로젝트
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12' }
      - run: pip install -r requirements-dev.txt
      - run: pytest --cov --cov-report=xml
```

### Kotlin / Spring Boot
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with: { java-version: '21', distribution: 'temurin' }
      - run: ./gradlew test jacocoTestReport
```

---

## 10. 코드 커버리지 기준 (권장)

| 레벨 | 라인 커버리지 | 설명 |
|------|-------------|------|
| 최소 | 60% | 핵심 로직만 테스트 |
| 권장 | 80% | 대부분의 팀 표준 |
| 엄격 | 90%+ | 금융/의료 등 고신뢰 시스템 |

---

## 11. 자주 쓰는 명령어 모음

```bash
# Jest
npm test                         # 전체 테스트
npm test -- --watch              # 감시 모드
npm test -- --coverage           # 커버리지 포함
npm test -- --testPathPattern=auth  # 특정 파일만

# pytest
pytest                           # 전체 테스트
pytest -v                        # 상세 출력
pytest tests/test_auth.py        # 특정 파일
pytest -k "test_login"           # 특정 테스트명
pytest --cov=app                 # 커버리지

# Gradle (Kotlin)
./gradlew test                   # 전체 테스트
./gradlew test --tests "*.UserServiceTest"  # 특정 클래스
./gradlew jacocoTestReport       # 커버리지 리포트
```

---

## 12. Testcontainers (DB 통합 테스트)

실제 DB를 Docker로 띄워서 테스트할 때 사용합니다.

```kotlin
@Testcontainers
@SpringBootTest
class UserRepositoryTest {

    companion object {
        @Container
        val postgres = PostgreSQLContainer("postgres:16")
            .withDatabaseName("testdb")
    }

    @Test
    fun `사용자 저장 후 조회된다`() {
        val saved = userRepository.save(User(name = "홍길동"))
        val found = userRepository.findById(saved.id!!)
        assertThat(found).isPresent
    }
}
```

```python
# pytest + testcontainers-python
from testcontainers.postgres import PostgresContainer

@pytest.fixture(scope="session")
def db():
    with PostgresContainer("postgres:16") as pg:
        yield pg.get_connection_url()
```
