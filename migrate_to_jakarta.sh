#!/usr/bin/env bash
# migrate_to_jakarta.sh
# 1) Performs text replacement of javax.* -> jakarta.* in webapp static files (JSP, HTML, XML, Java sources)
# 2) If a Tomcat migration tool JAR is present at tools/tomcat-migration.jar it will run it to transform JARs/WARs

set -euo pipefail
ROOT_DIR="$(dirname "${BASH_SOURCE[0]}")/apache-tomcat-11.0.18"
WEBAPP="$ROOT_DIR/webapps/ROOT"
TOOLS_DIR="$(dirname "${BASH_SOURCE[0]}")/tools"
MIG_JAR="$TOOLS_DIR/tomcat-migration.jar"

echo "Migrating webapp files (javax.* -> jakarta.*) in $WEBAPP"
find "$WEBAPP" -type f \( -name "*.jsp" -o -name "*.html" -o -name "*.xml" -o -name "*.java" -o -name "*.tag" \) -print0 \
  | xargs -0 -n1 sed -i.bak 's/javax\./jakarta./g'

if [ -f "$MIG_JAR" ]; then
  echo "Found migration jar: $MIG_JAR"
  echo "Running migration tool to transform JARs/WARs (requires java)"
  java -jar "$MIG_JAR" --transform --source "$WEBAPP" --target "$WEBAPP-jakarta"
  echo "Migration tool finished. Check $WEBAPP-jakarta"
else
  echo "Migration jar not found at $MIG_JAR"
  echo "Download the Apache Tomcat Migration Tool and place it at: $MIG_JAR"
  echo "Example Maven Central URL: https://repo1.maven.org/maven2/org/apache/tomcat/tomcat-migration-tool/0.4.5/tomcat-migration-tool-0.4.5.jar"
fi

echo "Done"
