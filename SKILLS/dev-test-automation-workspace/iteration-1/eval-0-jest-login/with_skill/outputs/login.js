/**
 * login.js
 * 이메일/비밀번호를 받아 유효하면 토큰을 반환하고, 실패하면 에러를 던지는 로그인 함수
 */

// 실제 환경에서는 DB 또는 외부 서비스를 사용합니다.
// 여기서는 테스트 가능한 구조로 의존성을 주입합니다.

const DEFAULT_USERS = [
  { email: 'user@example.com', password: 'secret123' },
  { email: 'admin@example.com', password: 'admin456' },
];

/**
 * 이메일 형식 유효성 검사
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 토큰 생성 (실제 환경에서는 JWT 등을 사용)
 * @param {string} email
 * @returns {string}
 */
function generateToken(email) {
  return `token_${Buffer.from(email).toString('base64')}_${Date.now()}`;
}

/**
 * 로그인 함수
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 * @param {{ findUser?: Function, createToken?: Function }} [deps] - 의존성 주입 (테스트용)
 * @returns {Promise<{ token: string, email: string }>} 인증 토큰 객체
 * @throws {Error} 유효하지 않은 입력 또는 인증 실패 시
 */
async function login(email, password, deps = {}) {
  const findUser = deps.findUser || ((e, p) => DEFAULT_USERS.find(u => u.email === e && u.password === p));
  const createToken = deps.createToken || generateToken;

  // 입력 유효성 검사
  if (!email || !password) {
    throw new Error('이메일과 비밀번호를 모두 입력해주세요.');
  }

  if (!isValidEmail(email)) {
    throw new Error('올바른 이메일 형식이 아닙니다.');
  }

  if (typeof password !== 'string' || password.length < 6) {
    throw new Error('비밀번호는 6자 이상이어야 합니다.');
  }

  // 사용자 인증
  const user = await findUser(email, password);

  if (!user) {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  // 토큰 생성 및 반환
  const token = await createToken(email);
  return { token, email };
}

module.exports = { login, isValidEmail, generateToken };
