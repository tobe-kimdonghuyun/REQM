const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, json } = format;

// 1) 콘솔에 예쁘게 출력할 형식 정의
const consoleFormat = combine(
  colorize(), // info는 초록, error는 빨강 같은 색
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp, stack }) => {
    // 에러면 stack 우선 사용
    return `[${timestamp}] ${level}: ${stack || message}`;
  })
);

// 2) 파일에 저장할 형식 정의 (JSON 형태: 나중에 분석/검색 쉬움)
const fileFormat = combine(
  timestamp(),
  json() // { "level": "info", "message": "...", "timestamp": "..." }
);

// 3) logger 생성
const logger = createLogger({
  level: "info", // 최소 저장 레벨 (debug < info < warn < error). 운영은 보통 info
  transports: [
    // 콘솔용 (사람이 눈으로 보는 용)
    new transports.Console({
      format: consoleFormat,
    }),

    // info 이상 로그를 남길 파일
    new transports.File({
      filename: "logs/app.log",
      level: "info",
      format: fileFormat,
      maxsize: 5 * 1024 * 1024, // 5MB 넘으면 롤링 (파일 쪼갬)
      maxFiles: 5,              // 오래된 로그는 자동 삭제 (5개까지만 유지)
    }),

    // error만 따로 모아두는 파일
    new transports.File({
      filename: "logs/error.log",
      level: "error",
      format: fileFormat,
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
    }),
  ],
});

// 4) 무 uncaught exception / unhandled rejection도 파일로 남기기
logger.exceptions.handle(
  new transports.File({
    filename: "logs/exceptions.log",
    format: fileFormat,
  })
);

logger.rejections.handle(
  new transports.File({
    filename: "logs/rejections.log",
    format: fileFormat,
  })
);

module.exports = logger;
