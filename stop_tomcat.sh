#!/usr/bin/env bash
# stop_tomcat.sh - Stop Tomcat from current shell (WSL/Git-Bash/Unix)

CATALINA_HOME="/mnt/d/git_prj/REQM/apache-tomcat-11.0.18"
export CATALINA_HOME

JAVA_HOME="/mnt/c/Program Files/Java/jdk-21"
export JAVA_HOME

echo "Stopping Tomcat server..."

if [ -x "$CATALINA_HOME/bin/catalina.sh" ]; then
  exec "$CATALINA_HOME/bin/catalina.sh" stop
else
  echo "catalina.sh not found or not executable. Trying Windows shutdown.bat via cmd.exe..."
  cmd.exe /c "\"$CATALINA_HOME\\bin\\shutdown.bat\""
fi
