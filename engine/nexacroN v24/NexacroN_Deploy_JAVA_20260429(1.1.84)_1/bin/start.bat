@echo off

if not "%JAVA_HOME%" == "" goto java_home_checked
	echo environment variable JAVA_HOME is not defined.
	goto end
:java_home_checked

set JAVA="%JAVA_HOME%\bin\java.exe"
set JAVA_OPTS="-Dlog4j.configurationFile=..\log4j2.xml"
set CLASSPATH="..\libs\*"
set STARTUP_CLASS=com.nexacro.build.cli.Main

echo %JAVA% %JAVA_OPTS% -classpath %CLASSPATH% %STARTUP_CLASS% %*
%JAVA% %JAVA_OPTS% -classpath %CLASSPATH% %STARTUP_CLASS% %*
goto end

:end
endlocal

pause