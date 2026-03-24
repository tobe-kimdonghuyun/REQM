/**
 * form-validator.test.js
 * HTML 폼 이메일 입력값 검증 테스트 (Jest + jsdom)
 *
 * 실행 방법:
 *   npm install --save-dev jest jest-environment-jsdom
 *   npx jest form-validator.test.js
 *
 * jest.config.js 또는 package.json에 다음 설정 필요:
 *   { "testEnvironment": "jsdom" }
 */

const {
  validateEmail,
  validateEmailForm,
  initEmailFormValidation,
} = require('./form-validator');

// ─────────────────────────────────────────────
// 1. validateEmail() 순수 함수 단위 테스트
// ─────────────────────────────────────────────
describe('validateEmail() - 순수 함수 단위 테스트', () => {
  // 빈 값 검증
  describe('빈 값 처리', () => {
    test('빈 문자열이면 "필수 항목입니다" 메시지를 반환한다', () => {
      // Arrange
      const email = '';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('필수 항목입니다');
    });

    test('공백만 있는 문자열이면 "필수 항목입니다" 메시지를 반환한다', () => {
      // Arrange
      const email = '   ';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('필수 항목입니다');
    });

    test('null이면 "필수 항목입니다" 메시지를 반환한다', () => {
      // Arrange
      const email = null;

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('필수 항목입니다');
    });

    test('undefined이면 "필수 항목입니다" 메시지를 반환한다', () => {
      // Arrange
      const email = undefined;

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('필수 항목입니다');
    });
  });

  // 잘못된 이메일 형식 검증
  describe('잘못된 이메일 형식 처리', () => {
    test('@가 없는 값이면 "올바른 이메일을 입력하세요" 메시지를 반환한다', () => {
      // Arrange
      const email = 'invalid-email';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('올바른 이메일을 입력하세요');
    });

    test('도메인이 없는 값이면 "올바른 이메일을 입력하세요" 메시지를 반환한다', () => {
      // Arrange
      const email = 'user@';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('올바른 이메일을 입력하세요');
    });

    test('사용자명이 없는 값이면 "올바른 이메일을 입력하세요" 메시지를 반환한다', () => {
      // Arrange
      const email = '@domain.com';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('올바른 이메일을 입력하세요');
    });

    test('최상위 도메인(.com 등)이 없으면 "올바른 이메일을 입력하세요" 메시지를 반환한다', () => {
      // Arrange
      const email = 'user@domain';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('올바른 이메일을 입력하세요');
    });

    test('공백을 포함한 이메일이면 "올바른 이메일을 입력하세요" 메시지를 반환한다', () => {
      // Arrange
      const email = 'user @domain.com';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBe('올바른 이메일을 입력하세요');
    });
  });

  // 유효한 이메일 검증
  describe('유효한 이메일 처리', () => {
    test('올바른 이메일 형식이면 null을 반환한다', () => {
      // Arrange
      const email = 'user@example.com';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBeNull();
    });

    test('서브도메인이 포함된 이메일도 유효하다', () => {
      // Arrange
      const email = 'user@mail.example.co.kr';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBeNull();
    });

    test('특수문자(+, -)가 포함된 이메일도 유효하다', () => {
      // Arrange
      const email = 'user+tag@example.com';

      // Act
      const result = validateEmail(email);

      // Assert
      expect(result).toBeNull();
    });
  });
});

// ─────────────────────────────────────────────
// 2. validateEmailForm() - DOM 통합 테스트
// ─────────────────────────────────────────────
describe('validateEmailForm() - DOM 통합 테스트', () => {
  function createForm(emailValue = '') {
    document.body.innerHTML = `
      <form id="form">
        <input type="text" id="email" value="${emailValue}" />
        <span id="error" style="display:none"></span>
        <button type="submit">제출</button>
      </form>
    `;
    return document.getElementById('form');
  }

  test('빈 값 제출 시 에러 메시지 "필수 항목입니다"가 표시된다', () => {
    // Arrange
    const form = createForm('');

    // Act
    const isValid = validateEmailForm(form);

    // Assert
    expect(isValid).toBe(false);
    const errorSpan = form.querySelector('#error');
    expect(errorSpan.textContent).toBe('필수 항목입니다');
    expect(errorSpan.style.display).toBe('inline');
  });

  test('잘못된 이메일 형식 제출 시 에러 메시지 "올바른 이메일을 입력하세요"가 표시된다', () => {
    // Arrange
    const form = createForm('invalid-email');

    // Act
    const isValid = validateEmailForm(form);

    // Assert
    expect(isValid).toBe(false);
    const errorSpan = form.querySelector('#error');
    expect(errorSpan.textContent).toBe('올바른 이메일을 입력하세요');
    expect(errorSpan.style.display).toBe('inline');
  });

  test('올바른 이메일 제출 시 에러 메시지가 사라지고 true를 반환한다', () => {
    // Arrange
    const form = createForm('user@example.com');

    // Act
    const isValid = validateEmailForm(form);

    // Assert
    expect(isValid).toBe(true);
    const errorSpan = form.querySelector('#error');
    expect(errorSpan.textContent).toBe('');
    expect(errorSpan.style.display).toBe('none');
  });
});

// ─────────────────────────────────────────────
// 3. initEmailFormValidation() - 이벤트 통합 테스트
// ─────────────────────────────────────────────
describe('initEmailFormValidation() - submit 이벤트 통합 테스트', () => {
  function createFormWithHandler(emailValue = '') {
    document.body.innerHTML = `
      <form id="form">
        <input type="text" id="email" value="${emailValue}" />
        <span id="error" style="display:none"></span>
        <button type="submit">제출</button>
      </form>
    `;
    const form = document.getElementById('form');
    initEmailFormValidation(form);
    return form;
  }

  test('빈 값으로 폼 제출 시 submit이 차단되고 에러 메시지가 표시된다', () => {
    // Arrange
    const form = createFormWithHandler('');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });

    // Act
    form.dispatchEvent(submitEvent);

    // Assert
    expect(submitEvent.defaultPrevented).toBe(true);
    const errorSpan = form.querySelector('#error');
    expect(errorSpan.textContent).toBe('필수 항목입니다');
  });

  test('잘못된 이메일 형식으로 폼 제출 시 submit이 차단되고 에러 메시지가 표시된다', () => {
    // Arrange
    const form = createFormWithHandler('not-an-email');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });

    // Act
    form.dispatchEvent(submitEvent);

    // Assert
    expect(submitEvent.defaultPrevented).toBe(true);
    const errorSpan = form.querySelector('#error');
    expect(errorSpan.textContent).toBe('올바른 이메일을 입력하세요');
  });

  test('올바른 이메일로 폼 제출 시 submit이 차단되지 않는다', () => {
    // Arrange
    const form = createFormWithHandler('user@example.com');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });

    // Act
    form.dispatchEvent(submitEvent);

    // Assert
    expect(submitEvent.defaultPrevented).toBe(false);
  });
});
