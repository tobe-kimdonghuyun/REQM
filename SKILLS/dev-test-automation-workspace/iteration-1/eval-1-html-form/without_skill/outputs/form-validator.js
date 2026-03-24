/**
 * form-validator.js
 * HTML 폼 이메일 입력값 검증 모듈
 */

/**
 * 이메일 입력값을 검증하고 적절한 오류 메시지를 반환합니다.
 *
 * @param {string} value - 검증할 이메일 입력값
 * @returns {{ valid: boolean, message: string | null }}
 *   valid: 검증 통과 여부
 *   message: 오류 메시지 (유효한 경우 null)
 */
function validateEmail(value) {
  // 빈 값 검사 (null, undefined, 공백 문자열 포함)
  if (value === null || value === undefined || String(value).trim() === '') {
    return { valid: false, message: '필수 항목입니다' };
  }

  // 이메일 형식 검사
  // RFC 5322 기반의 실용적인 이메일 정규식
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(value).trim())) {
    return { valid: false, message: '올바른 이메일을 입력하세요' };
  }

  return { valid: true, message: null };
}

/**
 * HTML 폼 제출 이벤트 핸들러
 * 폼 요소에 연결하여 사용합니다.
 *
 * @param {Event} event - 폼 submit 이벤트
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.querySelector('[name="email"]');
  const errorElement = form.querySelector('[data-error="email"]');

  if (!emailInput) {
    console.warn('이메일 입력 필드를 찾을 수 없습니다.');
    return;
  }

  const result = validateEmail(emailInput.value);

  if (errorElement) {
    errorElement.textContent = result.message || '';
    errorElement.style.display = result.valid ? 'none' : 'block';
  }

  if (result.valid) {
    console.log('폼 검증 통과:', emailInput.value);
    // 실제 제출 로직을 여기에 추가
  }

  return result;
}

// CommonJS / Node.js 환경에서 내보내기
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateEmail, handleFormSubmit };
}
