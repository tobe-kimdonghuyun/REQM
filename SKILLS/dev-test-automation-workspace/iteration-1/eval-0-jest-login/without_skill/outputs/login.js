// login.js
// 사용자 데이터베이스를 시뮬레이션하는 모의 저장소
const userRepository = {
  findByEmail: async (email) => {
    // 실제 환경에서는 DB 조회
    const users = {
      'user@example.com': {
        id: 1,
        email: 'user@example.com',
        // 실제 환경에서는 bcrypt 해시된 비밀번호
        password: 'correctpassword',
        name: '홍길동',
      },
      'admin@example.com': {
        id: 2,
        email: 'admin@example.com',
        password: 'adminpass123',
        name: '관리자',
      },
    };
    return users[email] || null;
  },
};

// 토큰 생성 유틸리티 (실제 환경에서는 jsonwebtoken 사용)
const tokenUtils = {
  generateToken: (payload) => {
    // 실제 환경에서는 jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    return `mock-jwt-token.${base64Payload}.signature`;
  },
};

// 비밀번호 검증 유틸리티 (실제 환경에서는 bcrypt.compare 사용)
const passwordUtils = {
  verify: async (plainPassword, storedPassword) => {
    return plainPassword === storedPassword;
  },
};

/**
 * 사용자 로그인 함수
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 * @returns {Promise<{ token: string, user: { id: number, email: string, name: string } }>}
 * @throws {Error} 유효하지 않은 입력이거나 인증 실패 시 에러를 던짐
 */
async function login(email, password) {
  // 입력값 유효성 검사
  if (!email || typeof email !== 'string') {
    throw new Error('이메일은 필수 입력값입니다.');
  }

  if (!password || typeof password !== 'string') {
    throw new Error('비밀번호는 필수 입력값입니다.');
  }

  // 이메일 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('유효하지 않은 이메일 형식입니다.');
  }

  // 비밀번호 최소 길이 검사
  if (password.length < 6) {
    throw new Error('비밀번호는 최소 6자 이상이어야 합니다.');
  }

  // 사용자 조회
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  // 비밀번호 검증
  const isPasswordValid = await passwordUtils.verify(password, user.password);
  if (!isPasswordValid) {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  // 토큰 생성
  const token = tokenUtils.generateToken({
    userId: user.id,
    email: user.email,
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  };
}

module.exports = {
  login,
  userRepository,
  tokenUtils,
  passwordUtils,
};
