@echo off
REM migrate_to_jakarta.bat
REM 1) Performs text replacement of javax.* -> jakarta.* in webapp static files (JSP, HTML, XML, Java sources)
REM 2) If a Tomcat migration tool JAR is present at tools/tomcat-migration.jar it will run it to transform JARs/WARs

setlocal enabledelayedexpansion
set "ROOT_DIR=%~dp0apache-tomcat-11.0.18"
set "WEBAPP=%ROOT_DIR%\webapps\ROOT"
set "TOOLS_DIR=%~dp0tools"
set "MIG_JAR=%TOOLS_DIR%\tomcat-migration.jar"

echo Migrating webapp files (javax.* -> jakarta.*) in %WEBAPP%
for /R "%WEBAPP%" %%F in (*.jsp *.html *.xml *.java *.tag) do (
  set "file=%%~fF"
  powershell -NoProfile -Command "(Get-Content -Raw -Encoding UTF8 -LiteralPath '!file!') -replace 'javax\\.','jakarta.' | Set-Content -Encoding UTF8 -LiteralPath '!file!'"
)

if exist "%MIG_JAR%" (
  echo Found migration jar: %MIG_JAR%
  echo Running migration tool to transform JARs/WARs (may require internet to download dependencies)
  java -jar "%MIG_JAR%" --transform --source "%WEBAPP%" --target "%WEBAPP%-jakarta"
  echo Migration tool finished. Check %WEBAPP%-jakarta
) else (
  echo Migration jar not found at %MIG_JAR%
  echo You can download the Apache Tomcat Migration Tool and place it at %MIG_JAR%
  echo Tool URL (example): https://repo1.maven.org/maven2/org/apache/tomcat/tomcat-migration-tool/0.4.5/tomcat-migration-tool-0.4.5.jar
)

endlocal
exit /b 0
