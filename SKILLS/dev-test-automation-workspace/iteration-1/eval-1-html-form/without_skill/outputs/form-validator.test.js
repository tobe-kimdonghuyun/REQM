/**
 * form-validator.test.js
 * form-validator.js 의 validateEmail 함수에 대한 단위 테스트
 *
 * 실행 방법:
 *   npm install --save-dev jest
 *   npx jest form-validator.test.js
 */

const { validateEmail } = require('./form-validator');

// ─────────────────────────────────────────────
// 1. 빈 값 검증 — "필수 항목입니다"
// ─────────────────────────────────────────────
describe('빈 값 입력 시 "필수 항목입니다" 메시지 반환', () => {
  test('빈 문자열("")이면 valid=false, message="필수 항목입니다"', () => {
    const result = validateEmail('');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('필수 항목입니다');
  });

  test('공백만 있는 문자열("   ")이면 valid=false, message="필수 항목입니다"', () => {
    const result = validateEmail('   ');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('필수 항목입니다');
  });

  test('null이면 valid=false, message="필수 항목입니다"', () => {
    const result = validateEmail(null);
    expect(result.valid).toBe(false);
    expect(result.message).toBe('필수 항목입니다');
  });

  test('undefined이면 valid=false, message="필수 항목입니다"', () => {
    const result = validateEmail(undefined);
    expect(result.valid).toBe(false);
    expect(result.message).toBe('필수 항목입니다');
  });
});

// ─────────────────────────────────────────────
// 2. 잘못된 이메일 형식 — "올바른 이메일을 입력하세요"
// ─────────────────────────────────────────────
describe('잘못된 이메일 형식 시 "올바른 이메일을 입력하세요" 메시지 반환', () => {
  test('@가 없으면 invalid', () => {
    const result = validateEmail('userexample.com');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('도메인에 .이 없으면 invalid', () => {
    const result = validateEmail('user@example');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('@만 있는 경우 invalid', () => {
    const result = validateEmail('@');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('@ 앞 로컬 파트가 없으면 invalid', () => {
    const result = validateEmail('@example.com');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('공백이 포함된 이메일은 invalid', () => {
    const result = validateEmail('user @example.com');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('도메인 부분이 .으로 끝나면 invalid', () => {
    const result = validateEmail('user@example.');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });

  test('@가 두 개 이상이면 invalid', () => {
    const result = validateEmail('user@@example.com');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('올바른 이메일을 입력하세요');
  });
});

// ─────────────────────────────────────────────
// 3. 올바른 이메일 형식 — valid=true, message=null
// ─────────────────────────────────────────────
describe('올바른 이메일 형식 시 valid=true, message=null 반환', () => {
  test('기본 이메일 형식 "user@example.com"', () => {
    const result = validateEmail('user@example.com');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });

  test('서브도메인 포함 "user@mail.example.com"', () => {
    const result = validateEmail('user@mail.example.com');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });

  test('+(플러스) 포함 로컬 파트 "user+tag@example.com"', () => {
    const result = validateEmail('user+tag@example.com');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });

  test('숫자 포함 "user123@example456.org"', () => {
    const result = validateEmail('user123@example456.org');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });

  test('대문자 포함 "User@Example.COM"', () => {
    const result = validateEmail('User@Example.COM');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });

  test('한국 도메인 "user@example.co.kr"', () => {
    const result = validateEmail('user@example.co.kr');
    expect(result.valid).toBe(true);
    expect(result.message).toBeNull();
  });
});

// ─────────────────────────────────────────────
// 4. 반환 객체 구조 확인
// ─────────────────────────────────────────────
describe('반환 값 구조 확인', () => {
  test('valid와 message 키를 항상 포함해야 한다', () => {
    const result = validateEmail('test@example.com');
    expect(result).toHaveProperty('valid');
    expect(result).toHaveProperty('message');
  });

  test('valid는 boolean 타입이어야 한다', () => {
    const valid = validateEmail('test@example.com');
    const invalid = validateEmail('');
    expect(typeof valid.valid).toBe('boolean');
    expect(typeof invalid.valid).toBe('boolean');
  });

  test('유효한 이메일의 message는 null이어야 한다', () => {
    const result = validateEmail('test@example.com');
    expect(result.message).toBeNull();
  });
});
