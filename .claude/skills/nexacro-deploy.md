---
name: nexacro-deploy
description: nexacroN 프로젝트 빌드 및 배포 스킬. "배포해줘", "빌드해줘", "Tomcat 실행", "nexacroN 배포 설정", "deploy_config", "run_Build", "run_Deploy", "JSON 배포", "nexacroK 실행", "xprj", "xadl", "xfdl 배포", "서버 배포 구조", "MIME 타입", "UTF-8", "인코딩", "xapi 라이브러리" 등을 언급할 때 이 스킬을 사용하세요.
---

# nexacroN 배포 스킬

이 스킬은 nexacroN v21/v24/nexacroK 프로젝트의 빌드·배포 전 과정을 안내합니다.

---

## 1. 배포 스크립트 구조 (tools/)

```
tools/
├── run_Build&deploy.bat       — 빌드 + 배포 (가장 많이 사용)
├── run_Deploy.bat             — 배포만 (빌드 없이)
├── run_JSON_Build&deploy.bat  — JSON 모드 빌드 + 배포
├── run_JSON_Deploy.bat        — JSON 모드 배포만
├── run_JSON_nexacroK.bat      — nexacroK JSON 실행
├── run_TEXT_nexacroK.bat      — nexacroK TEXT 실행
├── start_tomcat.bat           — Tomcat 시작
├── stop_tomcat.bat            — Tomcat 중지
├── Validate.bat               — 유효성 검사
├── Validate_wt.bat            — 유효성 검사 (worktree)
└── git_push.bat               — Git push
```

---

## 2. 배포 설정 파일 (deploy_config.json)

```json
{
  "ProjectPath": "프로젝트 .xprj 파일 절대경로",
  "OutputPath": "빌드 결과물 출력 경로 (Tomcat webapps 하위 권장)",
  "NexacroLibPath": "nexacrolib 폴더 절대경로",
  "GenerateRule": "generate 규칙 폴더 절대경로"
}
```

### 설정 시 주의사항
- `ProjectPath`: `.xprj` 파일의 **절대경로** 사용
- `OutputPath`: Tomcat `webapps/` 하위 폴더로 지정하면 자동 서빙
- `NexacroLibPath`: 버전별로 경로가 다름 (v21 / v24 구분)
- 경로에 **한글 포함 금지** (배포 오류 원인)

---

## 3. nexacroK 실행 설정 (run_nexacroK_config.json)

```json
{
  "NexacroExePath": "Nexacro.exe 절대경로",
  "Key": "프로젝트 키 이름",
  "ServiceUrl": "http://서버IP:포트/앱경로/start.json",
  "DebugId": "디버그 ID (임의값)"
}
```

---

## 4. 표준 배포 절차

### 일반 배포 (nexacroN v21/v24)
```
1. stop_tomcat.bat 실행  →  Tomcat 중지
2. run_Build&deploy.bat 실행  →  빌드 + 배포
3. start_tomcat.bat 실행  →  Tomcat 시작
4. 브라우저에서 배포 URL 확인
```

### 빠른 배포 (소스만 변경, 라이브러리 변경 없음)
```
1. run_Deploy.bat 실행  →  배포만 (빌드 생략)
2. Tomcat 재시작 불필요 (핫 디플로이)
```

### JSON 모드 배포
```
1. run_JSON_Build&deploy.bat 실행
2. start.json 응답 확인
```

---

## 5. Tomcat 제어

```bash
# 시작
tools/start_tomcat.bat

# 중지
tools/stop_tomcat.bat

# 포트 확인 (기본 8080)
# apache-tomcat-9.0.89/conf/server.xml 에서 Connector port 확인
```

### Tomcat 로그 위치
```
apache-tomcat-9.0.89/logs/catalina.out   — 메인 로그
apache-tomcat-9.0.89/logs/localhost.log  — 앱 로그
```

---

## 6. NexacroN_Deploy_JAVA.jar 직접 실행

```bash
java -jar NexacroN_Deploy_JAVA.jar \
  -config deploy_config.json \
  -mode build   # build | deploy | build+deploy
```

---

## 7. 배포 후 검증

```bash
# 유효성 검사
tools/Validate.bat

# 응답 확인 (nexacroK)
curl http://서버IP:포트/앱경로/start.json
```

---

## 8. 자주 발생하는 오류

| 오류 | 원인 | 해결 |
|------|------|------|
| `ProjectPath not found` | xprj 경로 오류 | deploy_config.json 경로 재확인 |
| `NexacroLib missing` | lib 경로 불일치 | NexacroLibPath 절대경로 확인 |
| 배포 후 화면 안 뜸 | Tomcat 미시작 | start_tomcat.bat 실행 |
| 한글 깨짐 | 인코딩 문제 | server.xml URIEncoding="UTF-8" 확인 |
| 포트 충돌 | 8080 이미 사용 중 | stop_tomcat.bat → 프로세스 종료 후 재시작 |

---

## 9. 프로젝트 파일 확장자 역할

| 확장자 | 역할 |
|--------|------|
| `.xprj` | 프로젝트 파일 — 전체 구조 정의 |
| `.xadl` | Application Definition — 앱 진입점, 전역 Dataset, 글로벌 설정 |
| `.xfdl` | Form Definition — 화면 단위 UI + 스크립트 혼합 |
| `.xjs` | 외부 공통 스크립트 모듈 |
| `.xtheme` | 테마/스타일 정의 |
| `.xmodule` | 재사용 가능한 복합 컴포넌트 패키지 |

**빌드 실행 흐름:**
```
launch.html → nexacro.js 로드 → application.xadl 초기화 → startup Form 표시
```

---

## 10. 서버 배포 파일 구조

```
WebRoot/
├── launch.html              — 앱 로더 진입점
├── index.html               — 웹 진입점
├── start.json               — nexacroK 실행 설정
├── nexacro/                 — nexacro 런타임 라이브러리
├── FrameBase/               — 공통 프레임 화면 (.xfdl → .js)
└── _resource_/
    └── _theme_/             — 테마 CSS + 이미지
```

---

## 11. 서버 필수 설정

### Tomcat — 인코딩 설정 (catalina.bat)
```bat
set "JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=UTF8"
```

### Tomcat — URIEncoding (server.xml)
```xml
<Connector port="8080" protocol="HTTP/1.1"
           URIEncoding="UTF-8"
           connectionTimeout="20000" redirectPort="8443" />
```

### Excel MIME 타입 (web.xml)
```xml
<mime-mapping>
  <extension>xlsx</extension>
  <mime-type>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</mime-type>
</mime-mapping>
<mime-mapping>
  <extension>xls</extension>
  <mime-type>application/vnd.ms-excel</mime-type>
</mime-mapping>
```

### JSP 서비스 — 인코딩 선언 필수
```jsp
<%@ page contentType="text/xml; charset=UTF-8" %>
```

---

## 12. xapi 라이브러리 배포

서버 서비스(JSP/Servlet)에서 PlatformData 통신 시 아래 JAR이 WEB-INF/lib에 있어야 한다.

```
WEB-INF/lib/
├── nexacro-xapi-java-x.x.x.jar   — 넥사크로 xapi 라이브러리
├── nexacro_server_license.xml     — 라이선스 파일 (jar와 같은 위치)
├── commons-logging-x.x.x.jar     — xapi 내부 로깅
└── json-simple-x.x.x.jar         — xapi 내부 사용
```

> `nexacro_server_license.xml` 파일이 없으면 서버 서비스가 정상 작동하지 않는다.

---

## 13. log4j2 설정 (log4j2.xml)

```xml
<!-- 로그 레벨: TRACE > DEBUG > INFO > WARN > ERROR -->
<Loggers>
  <Root level="INFO">
    <AppenderRef ref="Console"/>
    <AppenderRef ref="File"/>
  </Root>
</Loggers>
```
- 개발 환경: `level="DEBUG"`
- 운영 환경: `level="WARN"` 이상 권장
