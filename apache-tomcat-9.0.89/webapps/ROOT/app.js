const logger = require("./logger");

// 일반 정보 로그
logger.info("서버 시작 준비중입니다");

// 변수 포함해서
const port = 4000;
logger.info(`서버를 ${port}번 포트에서 구동합니다.`);

// 경고
logger.warn("외부 API 응답이 느립니다");

// 에러 (에러 객체 그대로 넘기면 stack까지 기록돼요)
try {
  throw new Error("DB 연결 실패");
} catch (err) {
  logger.error("데이터베이스 연결 중 오류 발생", err);
}

// 비동기 함수 안에서도 똑같이 사용 가능
async function loadUser(id) {
  logger.debug(`loadUser 호출됨: id=${id}`); // debug는 level이 info보다 낮아서 기본 설정에선 파일엔 안 감
  return { id, name: "kim" };
}

loadUser(123);
