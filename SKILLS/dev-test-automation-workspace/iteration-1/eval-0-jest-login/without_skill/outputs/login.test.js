// login.test.js
const { login, userRepository, tokenUtils, passwordUtils } = require('./login');

// 외부 의존성 모킹
jest.mock('./login', () => {
  const actual = jest.requireActual('./login');
  return {
    ...actual,
  };
});

describe('login() 함수 단위 테스트', () => {
  // 각 테스트 전에 mock 초기화
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ─────────────────────────────────────────────
  // 성공 케이스
  // ─────────────────────────────────────────────
  describe('성공 케이스', () => {
    test('유효한 이메일과 비밀번호로 로그인하면 토큰과 사용자 정보를 반환한다', async () => {
      const result = await login('user@example.com', 'correctpassword');

      expect(result).toHaveProperty('token');
      expect(result).toHaveProperty('user');
      expect(typeof result.token).toBe('string');
      expect(result.token.length).toBeGreaterThan(0);
    });

    test('반환된 사용자 정보에 id, email, name이 포함된다', async () => {
      const result = await login('user@example.com', 'correctpassword');

      expect(result.user).toEqual({
        id: 1,
        email: 'user@example.com',
        name: '홍길동',
      });
    });

    test('반환된 사용자 정보에 비밀번호가 포함되지 않는다', async () => {
      const result = await login('user@example.com', 'correctpassword');

      expect(result.user).not.toHaveProperty('password');
    });

    test('다른 유효한 계정으로도 로그인이 성공한다', async () => {
      const result = await login('admin@example.com', 'adminpass123');

      expect(result).toHaveProperty('token');
      expect(result.user.email).toBe('admin@example.com');
      expect(result.user.name).toBe('관리자');
    });
  });

  // ─────────────────────────────────────────────
  // 입력값 유효성 검사 실패 케이스
  // ─────────────────────────────────────────────
  describe('입력값 유효성 검사 실패', () => {
    test('이메일이 없으면 에러를 던진다', async () => {
      await expect(login('', 'password123')).rejects.toThrow('이메일은 필수 입력값입니다.');
    });

    test('이메일이 null이면 에러를 던진다', async () => {
      await expect(login(null, 'password123')).rejects.toThrow('이메일은 필수 입력값입니다.');
    });

    test('이메일이 undefined이면 에러를 던진다', async () => {
      await expect(login(undefined, 'password123')).rejects.toThrow('이메일은 필수 입력값입니다.');
    });

    test('비밀번호가 없으면 에러를 던진다', async () => {
      await expect(login('user@example.com', '')).rejects.toThrow('비밀번호는 필수 입력값입니다.');
    });

    test('비밀번호가 null이면 에러를 던진다', async () => {
      await expect(login('user@example.com', null)).rejects.toThrow('비밀번호는 필수 입력값입니다.');
    });

    test('유효하지 않은 이메일 형식이면 에러를 던진다', async () => {
      await expect(login('invalid-email', 'password123')).rejects.toThrow('유효하지 않은 이메일 형식입니다.');
    });

    test('@가 없는 이메일 형식이면 에러를 던진다', async () => {
      await expect(login('notanemail.com', 'password123')).rejects.toThrow('유효하지 않은 이메일 형식입니다.');
    });

    test('비밀번호가 6자 미만이면 에러를 던진다', async () => {
      await expect(login('user@example.com', '12345')).rejects.toThrow('비밀번호는 최소 6자 이상이어야 합니다.');
    });
  });

  // ─────────────────────────────────────────────
  // 인증 실패 케이스
  // ─────────────────────────────────────────────
  describe('인증 실패', () => {
    test('존재하지 않는 이메일로 로그인하면 에러를 던진다', async () => {
      await expect(login('notexist@example.com', 'password123')).rejects.toThrow(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
    });

    test('이메일은 맞지만 비밀번호가 틀리면 에러를 던진다', async () => {
      await expect(login('user@example.com', 'wrongpassword')).rejects.toThrow(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
    });

    test('존재하지 않는 계정과 잘못된 비밀번호 모두 동일한 에러 메시지를 반환한다 (보안)', async () => {
      const errorForNoUser = await login('notexist@example.com', 'password123').catch((e) => e.message);
      const errorForWrongPw = await login('user@example.com', 'wrongpassword').catch((e) => e.message);

      // 보안상 사용자 존재 여부를 노출하지 않기 위해 동일한 메시지 사용
      expect(errorForNoUser).toBe(errorForWrongPw);
    });
  });

  // ─────────────────────────────────────────────
  // Mock을 사용한 의존성 격리 테스트
  // ─────────────────────────────────────────────
  describe('의존성 모킹을 통한 격리 테스트', () => {
    test('userRepository.findByEmail이 호출된다', async () => {
      const findByEmailSpy = jest.spyOn(userRepository, 'findByEmail');

      await login('user@example.com', 'correctpassword');

      expect(findByEmailSpy).toHaveBeenCalledTimes(1);
      expect(findByEmailSpy).toHaveBeenCalledWith('user@example.com');
    });

    test('tokenUtils.generateToken이 로그인 성공 시 호출된다', async () => {
      const generateTokenSpy = jest.spyOn(tokenUtils, 'generateToken');

      await login('user@example.com', 'correctpassword');

      expect(generateTokenSpy).toHaveBeenCalledTimes(1);
      expect(generateTokenSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          userId: 1,
          email: 'user@example.com',
        })
      );
    });

    test('userRepository가 null을 반환하면 토큰 생성 없이 에러를 던진다', async () => {
      jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);
      const generateTokenSpy = jest.spyOn(tokenUtils, 'generateToken');

      await expect(login('ghost@example.com', 'password123')).rejects.toThrow(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
      expect(generateTokenSpy).not.toHaveBeenCalled();
    });

    test('passwordUtils.verify가 false를 반환하면 에러를 던진다', async () => {
      jest.spyOn(passwordUtils, 'verify').mockResolvedValueOnce(false);

      await expect(login('user@example.com', 'correctpassword')).rejects.toThrow(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
    });

    test('tokenUtils.generateToken이 반환한 값이 result.token에 담긴다', async () => {
      const fakeToken = 'fake-token-abc123';
      jest.spyOn(tokenUtils, 'generateToken').mockReturnValueOnce(fakeToken);

      const result = await login('user@example.com', 'correctpassword');

      expect(result.token).toBe(fakeToken);
    });

    test('userRepository.findByEmail이 에러를 던지면 login도 에러를 전파한다', async () => {
      jest.spyOn(userRepository, 'findByEmail').mockRejectedValueOnce(new Error('DB 연결 오류'));

      await expect(login('user@example.com', 'correctpassword')).rejects.toThrow('DB 연결 오류');
    });
  });

  // ─────────────────────────────────────────────
  // 엣지 케이스
  // ─────────────────────────────────────────────
  describe('엣지 케이스', () => {
    test('이메일에 공백이 포함된 경우 유효하지 않은 형식으로 처리한다', async () => {
      await expect(login('user @example.com', 'password123')).rejects.toThrow(
        '유효하지 않은 이메일 형식입니다.'
      );
    });

    test('정확히 6자인 비밀번호는 유효성 검사를 통과한다', async () => {
      // 6자 비밀번호로 등록된 사용자가 있다고 가정
      jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce({
        id: 3,
        email: 'test@example.com',
        password: 'abcdef',
        name: '테스트',
      });
      jest.spyOn(passwordUtils, 'verify').mockResolvedValueOnce(true);
      jest.spyOn(tokenUtils, 'generateToken').mockReturnValueOnce('token-xyz');

      const result = await login('test@example.com', 'abcdef');

      expect(result).toHaveProperty('token');
    });

    test('login 함수는 Promise를 반환한다', () => {
      const result = login('user@example.com', 'correctpassword');
      expect(result).toBeInstanceOf(Promise);
      // Promise 정리 (unhandled rejection 방지)
      return result.catch(() => {});
    });
  });
});
