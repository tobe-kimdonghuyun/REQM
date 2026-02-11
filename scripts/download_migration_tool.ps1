# Download Tomcat migration tool from multiple sources
$urls = @(
    'https://archive.apache.org/dist/tomcat/tomcat-migration-tool/v1.0.0/tomcat-migration-tool-1.0.0.jar',
    'https://repo.maven.apache.org/maven2/org/apache/tomcat/tomcat-migration-tool/1.0.0/tomcat-migration-tool-1.0.0.jar',
    'https://archive.apache.org/dist/tomcat/tomcat-migration-tool/v0.4.5/tomcat-migration-tool-0.4.5.jar',
    'https://repo.maven.apache.org/maven2/org/apache/tomcat/tomcat-migration-tool/0.4.5/tomcat-migration-tool-0.4.5.jar'
)
$out = 'tools\tomcat-migration.jar'

Write-Output "Attempting to download Tomcat migration tool..."
Write-Output "Target: $out"
Write-Output ""

foreach ($url in $urls) {
    Write-Output "Try: $url"
    try {
        Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $size = (Get-Item $out).Length
        Write-Output "✓ SUCCESS: Downloaded $size bytes"
        Write-Output ""
        Write-Output "JAR file saved at: $out"
        Write-Output ""
        Write-Output "Next step: Run migration"
        Write-Output "  java -jar tools\tomcat-migration.jar --transform --source apache-tomcat-11.0.18\webapps\ROOT-backup-20260210_170525 --target apache-tomcat-11.0.18\webapps\ROOT-jakarta"
        exit 0
    } catch {
        Write-Output "  ✗ Failed: $($_.Exception.Message)"
    }
}

Write-Output ""
Write-Output "WARNING: All download attempts failed."
Write-Output ""
Write-Output "Manual download options:"
Write-Output "  1. Apache Archive: https://archive.apache.org/dist/tomcat/tomcat-migration-tool/"
Write-Output "  2. Maven Repo: https://repo.maven.apache.org/maven2/org/apache/tomcat/tomcat-migration-tool/"
Write-Output ""
Write-Output "After manual download, place JAR at: $out"
