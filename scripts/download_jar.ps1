$urls = @(
    'https://repo1.maven.org/maven2/org/apache/tomcat/tomcat-migration-tool/0.4.5/tomcat-migration-tool-0.4.5.jar',
    'https://repo1.maven.org/maven2/org/apache/tomcat/tomcat-migration-tool/1.0.0/tomcat-migration-tool-1.0.0.jar',
    'https://repo1.maven.org/maven2/org/apache/tomcat/tomcat-migration-tool/0.3.0/tomcat-migration-tool-0.3.0.jar'
)
$out = 'tools\tomcat-migration.jar'
$foundUrl = $null

foreach ($url in $urls) {
    Write-Output "Trying: $url"
    try {
        $response = Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -ErrorAction Stop
        $foundUrl = $url
        Write-Output "SUCCESS: Downloaded"
        break
    } catch {
        Write-Output "Not found or error"
    }
}

if ($foundUrl) {
    if (Test-Path $out) {
        $size = (Get-Item $out).Length
        Write-Output "JAR saved to $out ($size bytes)"
    }
} else {
    Write-Output "WARNING: All URLs failed. Migration JAR not available."
    Write-Output "You can manually download from: https://repo1.maven.org/maven2/org/apache/tomcat/"
}
