@echo off
REM start_tomcat.bat - Start Tomcat in the current CMD/Terminal (no new window)
REM Update the paths below if your Tomcat or JDK are installed elsewhere.

setlocal
set "CATALINA_HOME=%~dp0..\apache-tomcat-9.0.89"
REM ===== 자바 경로 설정 (시스템 변수 기반 명시적 설정) =====
set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"
set "JRE_HOME=C:\java-1.8.0-openjdk-1.8.0.332-1.b09.ojdkbuild.windows.x86_64\jre"

set "PATH=%JAVA_HOME%\bin;%PATH%"

REM Try to use UTF-8 output in the terminal
chcp 65001 >nul

echo Starting Tomcat server in this terminal...
"%CATALINA_HOME%\bin\catalina.bat" run

endlocal
exit /b %ERRORLEVEL%
