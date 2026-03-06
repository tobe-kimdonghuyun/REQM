validator exe 번들 입니다. 

cli spec 이나 세부옵션은 이후 변경 되거나 할 수 있으니 사내 테스트용으로만 활용하시기 바랍니다.



사용법 



powershell 기준 설명



1. config 디렉토리 내에 validator-cli.exe를 실행(실행위치 상관없음, 반드시 해당위치 아니어도 됨)

2. 실행 시 첨부된 이미지 처럼 @로 실행옵션 메니페스트를 작성해서 동작시키는 것이 손쉬우므로

config/command 에 vaildate 와 report 명령을 각각 사용



3. nexacrolib는 validate 파일내에 --library 옵션을 교체하여 사용하는데, 첨부된 sample lib처럼 objectinfo에 a11yprop 을 넣어야 함



4. validate 실행 후   runValidate done. 메시지가 뜨면 CTRL+C 로 프로세스 종료

5. report 실행 후 내장 웹서버 실행되면서 링크된 url을 선택하면 레포트 결과 확인



** 명령 (이후 spec이 변경될 수 있음)



validate 명령



validate
.\validator-cli.exe "@C:/NTemplate\config/command/validate.args" 명령어 실행 
run

--library D:/NTemplate/nexacrolib (라이브러리 경로)

--project D:/NTemplate/projectTemplate/application/basic/DesktopMDI/DesktopMDI.xprj (프로젝트)

--project D:/NTemplate/projectTemplate/application/basic/Mobile/Mobile.xprj (프로젝트)

--project D:/NTemplate/CS-HOMEPAGE/CS-Homepage_nexa_N.xprj (프로젝트)

--project D:/NTemplate/nexacroNAccessbility_v24/accessbility_v24.xprj (프로젝트)

--project D:/NTemplate/KRDS/Nexa_KRDS.xprj (프로젝트)

-e D:/NTemplate/config/plugin.cjs (반드시 cjs로, 첨부된 plugin.cjs 확인)

-c D:/NTemplate/config/validate.config.json (rule json)

-o D:/NTemplate/result (validate 결과 위치(json) - report에서 지정해야 하므로 틀리게 작성하면 안됨

-w project_template.json (워크스페이스 파일명) - report에서 지정해야 하므로 틀리게 작성하면 안됨



report 명령

.\validator-cli.exe "@C:/NTemplate\config/command/report.args" 명령어 실행 

validate

report

-o D:/NTemplate/result (validate 결과 위치)

-w project_template.json (워크스페이스 파일명) 

--report D:/NTemplate/report (레포트 결과 (html)) 위치



첨부된 command 경로의 파일처럼 미리 cli 메니페스트 파일을 작성하시고 사용하시는게 간편합니다.



감사합니다.

