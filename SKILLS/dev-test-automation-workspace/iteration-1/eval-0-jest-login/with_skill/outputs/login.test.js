/**
 * login.test.js
 * login() 함수 단위 테스트 - Jest
 *
 * 테스트 구조: AAA 패턴 (Arrange → Act → Assert)
 * - 성공 케이스: 유효한 이메일/비밀번호 → 토큰 반환
 * - 실패 케이스: 다양한 입력 오류 → 에러 throw
 */

const { login, isValidEmail } = require('./login');

// ─────────────────────────────────────────────
// 공통 Mock 의존성
// ─────────────────────────────────────────────

/**
 * 성공하는 findUser Mock: 항상 사용자 객체 반환
 */
const mockFindUserSuccess = jest.fn().mockResolvedValue({
  email: 'user@example.com',
  password: 'secret123',
});

/**
 * 실패하는 findUser Mock: 항상 null 반환 (사용자 없음)
 */
const mockFindUserFail = jest.fn().mockResolvedValue(null);

/**
 * 토큰 생성 Mock: 고정된 토큰 문자열 반환
 */
const mockCreateToken = jest.fn().mockResolvedValue('mocked_token_abc123');

beforeEach(() => {
  jest.clearAllMocks();
});

// ─────────────────────────────────────────────
// 성공 케이스
// ─────────────────────────────────────────────

describe('login() - 성공 케이스', () => {
  test('유효한 이메일과 비밀번호로 로그인하면 토큰을 반환한다', async () => {
    // Arrange
    const email = 'user@example.com';
    const password = 'secret123';
    const deps = { findUser: mockFindUserSuccess, createToken: mockCreateToken };

    // Act
    const result = await login(email, password, deps);

    // Assert
    expect(result).toHaveProperty('token', 'mocked_token_abc123');
    expect(result).toHaveProperty('email', 'user@example.com');
  });

  test('반환된 결과에 token과 email 필드가 모두 존재한다', async () => {
    // Arrange
    const deps = { findUser: mockFindUserSuccess, createToken: mockCreateToken };

    // Act
    const result = await login('user@example.com', 'secret123', deps);

    // Assert
    expect(result).toMatchObject({
      token: expect.any(String),
      email: expect.any(String),
    });
  });

  test('로그인 성공 시 findUser가 올바른 인자로 호출된다', async () => {
    // Arrange
    const email = 'user@example.com';
    const password = 'secret123';
    const deps = { findUser: mockFindUserSuccess, createToken: mockCreateToken };

    // Act
    await login(email, password, deps);

    // Assert
    expect(mockFindUserSuccess).toHaveBeenCalledTimes(1);
    expect(mockFindUserSuccess).toHaveBeenCalledWith(email, password);
  });

  test('로그인 성공 시 createToken이 이메일을 인자로 호출된다', async () => {
    // Arrange
    const email = 'user@example.com';
    const deps = { findUser: mockFindUserSuccess, createToken: mockCreateToken };

    // Act
    await login(email, 'secret123', deps);

    // Assert
    expect(mockCreateToken).toHaveBeenCalledWith(email);
  });
});

// ─────────────────────────────────────────────
// 실패 케이스 - 입력 유효성 검사
// ─────────────────────────────────────────────

describe('login() - 입력 유효성 검사 실패', () => {
  test('이메일이 없으면 에러를 던진다', async () => {
    // Arrange
    const email = '';
    const password = 'secret123';

    // Act & Assert
    await expect(login(email, password)).rejects.toThrow(
      '이메일과 비밀번호를 모두 입력해주세요.'
    );
  });

  test('비밀번호가 없으면 에러를 던진다', async () => {
    // Arrange
    const email = 'user@example.com';
    const password = '';

    // Act & Assert
    await expect(login(email, password)).rejects.toThrow(
      '이메일과 비밀번호를 모두 입력해주세요.'
    );
  });

  test('이메일과 비밀번호가 모두 없으면 에러를 던진다', async () => {
    // Arrange & Act & Assert
    await expect(login('', '')).rejects.toThrow(
      '이메일과 비밀번호를 모두 입력해주세요.'
    );
  });

  test('이메일 형식이 올바르지 않으면 에러를 던진다', async () => {
    // Arrange
    const invalidEmail = 'not-an-email';
    const password = 'secret123';

    // Act & Assert
    await expect(login(invalidEmail, password)).rejects.toThrow(
      '올바른 이메일 형식이 아닙니다.'
    );
  });

  test('@가 없는 이메일은 에러를 던진다', async () => {
    // Arrange
    const invalidEmail = 'userdomain.com';

    // Act & Assert
    await expect(login(invalidEmail, 'secret123')).rejects.toThrow(
      '올바른 이메일 형식이 아닙니다.'
    );
  });

  test('비밀번호가 6자 미만이면 에러를 던진다', async () => {
    // Arrange
    const email = 'user@example.com';
    const shortPassword = '12345'; // 5자

    // Act & Assert
    await expect(login(email, shortPassword)).rejects.toThrow(
      '비밀번호는 6자 이상이어야 합니다.'
    );
  });
});

// ─────────────────────────────────────────────
// 실패 케이스 - 인증 실패
// ─────────────────────────────────────────────

describe('login() - 인증 실패', () => {
  test('존재하지 않는 사용자면 에러를 던진다', async () => {
    // Arrange
    const email = 'unknown@example.com';
    const password = 'wrongpass';
    const deps = { findUser: mockFindUserFail, createToken: mockCreateToken };

    // Act & Assert
    await expect(login(email, password, deps)).rejects.toThrow(
      '이메일 또는 비밀번호가 올바르지 않습니다.'
    );
  });

  test('비밀번호가 틀리면 에러를 던진다', async () => {
    // Arrange
    const email = 'user@example.com';
    const wrongPassword = 'wrongpassword';
    const deps = { findUser: mockFindUserFail, createToken: mockCreateToken };

    // Act & Assert
    await expect(login(email, wrongPassword, deps)).rejects.toThrow(
      '이메일 또는 비밀번호가 올바르지 않습니다.'
    );
  });

  test('인증 실패 시 토큰이 생성되지 않는다', async () => {
    // Arrange
    const deps = { findUser: mockFindUserFail, createToken: mockCreateToken };

    // Act
    try {
      await login('user@example.com', 'wrongpass', deps);
    } catch {
      // 에러 무시
    }

    // Assert - createToken이 호출되지 않아야 함
    expect(mockCreateToken).not.toHaveBeenCalled();
  });

  test('인증 실패 시 반환된 에러는 Error 인스턴스다', async () => {
    // Arrange
    const deps = { findUser: mockFindUserFail, createToken: mockCreateToken };

    // Act & Assert
    await expect(login('user@example.com', 'wrongpass', deps)).rejects.toBeInstanceOf(Error);
  });
});

// ─────────────────────────────────────────────
// isValidEmail() 유틸 함수 테스트
// ─────────────────────────────────────────────

describe('isValidEmail() - 이메일 유효성 검사', () => {
  test.each([
    ['user@example.com', true],
    ['admin@test.co.kr', true],
    ['a+b@domain.org', true],
  ])('유효한 이메일 "%s"는 true를 반환한다', (email, expected) => {
    expect(isValidEmail(email)).toBe(expected);
  });

  test.each([
    ['not-an-email', false],
    ['@domain.com', false],
    ['user@', false],
    ['userdomain.com', false],
    ['', false],
  ])('유효하지 않은 이메일 "%s"는 false를 반환한다', (email, expected) => {
    expect(isValidEmail(email)).toBe(expected);
  });
});
