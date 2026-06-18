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

## 2. 테스트 작성 원칙 (AAA 패턴)

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

## 3. JavaScript 테스트 예시

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

## 4. HTML / DOM 테스트 예시

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

---

## 5. Jest 환경 설정

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js'],
};
```

```bash
npm install --save-dev jest @testing-library/dom jest-environment-jsdom
npm install --save-dev jest-axe axe-core
npm install --save-dev identity-obj-proxy
```

---

## 6. 설정 파일 표준 템플릿

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

## 7. E2E 테스트 (Playwright)

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
npx playwright test
npx playwright test --ui
npx playwright codegen <URL>
```

---

## 8. 자주 쓰는 명령어 모음

```bash
# Jest
npm test
npm test -- --watch
npm test -- --coverage
npm test -- --testPathPattern=auth

# pytest
pytest
pytest -v
pytest tests/test_auth.py
pytest -k "test_login"
pytest --cov=app

# Gradle (Kotlin)
./gradlew test
./gradlew test --tests "*.UserServiceTest"
./gradlew jacocoTestReport
```

---

## 9. 코드 커버리지 기준 (권장)

| 레벨 | 라인 커버리지 | 설명 |
|------|-------------|------|
| 최소 | 60% | 핵심 로직만 테스트 |
| 권장 | 80% | 대부분의 팀 표준 |
| 엄격 | 90%+ | 금융/의료 등 고신뢰 시스템 |
