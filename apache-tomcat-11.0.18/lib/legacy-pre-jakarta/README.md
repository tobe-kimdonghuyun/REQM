# Legacy pre-Jakarta jars

이 폴더는 Tomcat 11(Jakarta EE) 환경에서 충돌 가능성이 있는 기존 XAPI jar를 분리 보관하기 위한 백업 위치입니다.

이관된 jar 목록:
- nexacro-xapi-1.0.1.jar
- nexacro-xapi-java-1.0.0.jar
- nexacro17-xapi-1.1.4.jar

Tomcat 실행 classpath(`lib/*.jar`)에는 `nexacro-xapi-java-jakarta-main-2.0.4.jar`만 남겨 Jakarta 패키지 기반으로 동작하도록 구성했습니다.
