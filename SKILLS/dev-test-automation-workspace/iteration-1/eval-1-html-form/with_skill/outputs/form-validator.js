/**
 * form-validator.js
 * HTML 폼 이메일 입력값 검증 모듈
 */

/**
 * 이메일 입력값을 검증하고 오류 메시지를 반환합니다.
 * @param {string} email - 검증할 이메일 값
 * @returns {string|null} 오류 메시지 문자열, 유효하면 null
 */
function validateEmail(email) {
  if (email === null || email === undefined || email.trim() === '') {
    return '필수 항목입니다';
  }

  // 이메일 형식 정규식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return '올바른 이메일을 입력하세요';
  }

  return null;
}

/**
 * DOM 폼에서 이메일 유효성을 검사하고 에러 메시지를 표시합니다.
 * @param {HTMLFormElement} form - 검증할 폼 요소
 * @returns {boolean} 유효하면 true, 아니면 false
 */
function validateEmailForm(form) {
  const emailInput = form.querySelector('#email');
  const errorSpan = form.querySelector('#error');

  if (!emailInput || !errorSpan) {
    return false;
  }

  const errorMessage = validateEmail(emailInput.value);

  if (errorMessage) {
    errorSpan.textContent = errorMessage;
    errorSpan.style.display = 'inline';
    return false;
  }

  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
  return true;
}

/**
 * 폼 submit 이벤트에 검증 핸들러를 등록합니다.
 * @param {HTMLFormElement} form - 이벤트를 등록할 폼 요소
 */
function initEmailFormValidation(form) {
  form.addEventListener('submit', function (event) {
    const isValid = validateEmailForm(form);
    if (!isValid) {
      event.preventDefault();
    }
  });
}

module.exports = { validateEmail, validateEmailForm, initEmailFormValidation };
