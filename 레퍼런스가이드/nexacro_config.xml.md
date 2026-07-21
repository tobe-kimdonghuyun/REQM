# 341.nexacro_config.xml

# 341.1개요

```
nexacro_config.xml 파일은 NRE 환경에서 사용할 실행옵션을 설정하는 파일입니다.
앱을 실행하는 운영체제 환경에 따라 설정할 수 있는 옵션에 차이가 있을 수 있습니다.
```

# 341.2파일 생성 및 경로

운영체제별 기본 파일 경로는 아래와 같습니다.

```
Windows : %USERAPP%\Config\[Key]\nexacro_config.xml
Android : \res\xml\nexacro_config.xml
iOS/iPadOS : {asset}/data/nexacro_config.xml
macOS : {asset(project)}/data/nexacro_config.xml
```

```
- App Builder를 사용해 Android, iOS/iPadOS, macOS NRE 앱 빌드하는 경우에는 App Builder 설정에 따라 자동으로 nexacro_config.xml 파일을 생성하고 적용됩니다.
- Xcode, Android Studio에서 직접 프로젝트를 생성하는 경우에는 nexacro_config.xml 파일을 직접 추가해주어야 합니다.
- Windows NRE는 -NC 실행옵션으로 파일 위치를 지정한 경우만 적용됩니다.
```

# 341.3파일구조

> 아래 표에서 운영체제 NRE는 약어로 표시합니다.
>
> **W**(Windows NRE), **A**(Android NRE), **I**(iOS/iPad NRE), **M**(macOS NRE)

| group | name | W | A | I | M | Description |
| --- | --- | --- | --- | --- | --- | --- |
| nexacro-config | os | O | O | O | O | 운영체제별 관리를 위한 속성  "windows" | "Android" | "osx"  os 속성 항목은 생략할 수 있습니다. |
| application | style | X | O | X | X | 앱 업데이트 UI 스타일  "old" | "default" |
| dialog-position | X | O | O | X | 앱 업데이트 진행정보를 표시할 팝업 출력 위치  "top" | "center" | "bottom" (기본값: "center") |
| file-logging | X | O | O | O | 로딩 에러 정보 파일 저장 여부  "true" | "false" (기본값: "true") |
| quiet | X | O | O | O | 앱 실행 다이얼로그 표시 여부  "true" | "false" |
| loglevel | O | X | X | O | 로그 출력 수준  "fatal" | "error" | "warn" | "info" | "debug" (기본값: "debug")  - environment.loglevel 속성값보다 우선순위 높음 |
| tracemode | O | X | X | O | 로그 파일 생성 방식  "none" | "new" | "append" (기본값: "none")  - environment.tracemode 속성값보다 우선운위 높음 |
| traceduration | O | X | X | O | 로그 파일을 일별로 생성하는 옵션  "-1" | nDate (기본값 -1)  - 사용자가 지정한 filepath 명 뒤에 \_yyyymmdd.log 추가하여 일별로 로그파일 생성  - environment.traceduration 속성값보다 우선운위 높음 |
| updator | force | X | O | O | X | start\_[OS].json 정보에 업데이트 파일이 있을 때 팝업창 표시 없이 강제 업데이트 처리 여부  "true" | "false" |
| cancelable | X | O | O | X | 업데이트 팝업창이 표시될 때 취소버튼 표시 여부  "true" | "false" |
| errormsg | X | O | O | X | 초기 로딩 중 구동에 실패할 시 에러정보 팝업창을 표할 지 여부  "true" | "false" |
| quiet | X | O | O | X | 업데이트 팝업창 표시 없이 업데이트 처리 여부  "true" | "false"  - "true"로 설정하더라도 진행율은 표시됨 |
| failpass | X | O | O | X | 업데이트 오류를 무시할지 여부  "true" | "false" |
| notification | enable | X | O | O | X | 알림 기능 사용 여부  "true" | "false" |
| handler | X | O | O | X | 알림 수신 시 처리할 핸들러를 구현한 클래스  (기본값)  - Android: com.nexacro.notification.DefaultHandler  - iOS/iPad: DefaultNotificationManagerHandler |
| xpush-server | request-missing-message | X | O | O | X | X-PUSH 서버 사용 시 수신하지 못한 신뢰성 메시지 자동 요청 여부  "true" | "false" |
| log | filepath | O | X | X | O | 로그를 기록할 파일 위치, 파일명을 포함하여 지정  (기본값)  - Windows: %USERAPP%/  - macOS: %USERAPP%/Log/ |
| filesize | O | X | X | O | 로그를 기록할 파일의 최대 크기  기본값: 204,800 바이트(byte)  기본값보다 작은 값을 설정한 경우에는 기본값이 적용됩니다. |
| backupfilecount | O | X | X | O | 로그를 기록할 파일의 최대 개수  기본값: 1  - 로그 파일 크기가 filesize로 설정한 값보다 커지는 경우 백업 파일로 남길 수 있는 파일 개수 |
