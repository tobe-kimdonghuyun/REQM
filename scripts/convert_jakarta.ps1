$files = Get-ChildItem -Path 'apache-tomcat-11.0.18\webapps' -Recurse -Include *.jsp,*.html,*.xml,*.java,*.tag -File
foreach ($f in $files) {
    try {
        $p = $f.FullName
        $t = Get-Content -Raw -Encoding UTF8 -LiteralPath $p
        if ($t -match 'javax\.') {
            $t2 = $t -replace 'javax\.', 'jakarta.'
            Set-Content -Encoding UTF8 -LiteralPath $p -Value $t2
            Write-Output "UPDATED:$p"
        }
    } catch {
        Write-Output "SKIP:$p"
    }
}
