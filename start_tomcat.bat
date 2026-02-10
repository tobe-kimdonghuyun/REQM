@echo off
REM start_tomcat.bat - Start Tomcat in the current CMD/Terminal (no new window)
REM Update the paths below if your Tomcat or JDK are installed elsewhere.

setlocal
set "CATALINA_HOME=D:\git_prj\REQM\apache-tomcat-11.0.18"
set "JAVA_HOME=C:\microsoft-jdk-21.0.9-windows-x64\jdk-21.0.9+10"
set "PATH=%JAVA_HOME%\bin;%PATH%"

REM Try to use UTF-8 output in the terminal
chcp 65001 >nul

echo Starting Tomcat server in this terminal...
"%CATALINA_HOME%\bin\catalina.bat" run

endlocal
exit /b %ERRORLEVEL%
