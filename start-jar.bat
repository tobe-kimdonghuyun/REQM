@echo off

if not "%JAVA_HOME%" == "" goto java_home_checked
	echo environment variable JAVA_HOME is not defined.
	goto end
:java_home_checked

set JAVA="%JAVA_HOME%\bin\java.exe"
set JAVA_OPTS="-Dlog4j.configurationFile=.\log4j2.xml"
set LIB="NexacroN_Deploy_JAVA.jar"

echo %JAVA% %JAVA_OPTS% -jar %LIB% %*
%JAVA% %JAVA_OPTS% -jar %LIB% %*
goto end

:end
endlocal

pause