#소개 
Nexacro K 개발 브랜치

# 브랜치 구조
NexacroK Repo  
   │  
   ├─master  
   │  ├─build  
   │  ├─dist  
   │  ├─examples  
   │  ├─ext-modules
   │  ├─nexacro-k-examples (nexacro-k 신규기능 samples)    
   │  ├─nexacrolib  
   │  ├─platforms  
   │  ├─test  
   │  └─tools  
   ├─main (master 브랜치에서 동료 검토 확정 내용 유입[정기/Pre-Patch 요건])  
   ├─Release (main 브랜치에 있는 전체 소스 유입)  
   ├─Pre-Patch (main 브랜치에서 선택적 소스 유입 )  
   ├─Build Branch  
   │  ├─Build Script (정기 배포 build, Pre-Patch 배포 빌드, Daily 테스트 빌드 script 관리)  
   │  └─Deploy Script (정기 배포 build, Pre-Patch 배포 빌드, Daily 테스트 빌드 전/후 관련 파일에 대한 deploy 관리)  
   └─Testing Branch  
      └─Build Script (Release, Pre-Patch, Daily 자동화 테스트 관리)  
   
# How to build
## VSCODE에서 Node 개발환경 설정
1. Node & NPM 설치
  - Node.js 20.0.0 버전 이상 설치 (https://nodejs.org/)
    node 버전 확인 명령어: node -v
    npm 버전 확인 명령어:  npm -v
2. Terminal에서 의존성 패키지 설치
  - WORK900>npm install

## Build Deploy-Java
### java & maven 설치
0. 'VSCODE에서 Node 개발환경 설정' 단계가 완료되어 있어야 함.
1. java가 설치되어 있지 않을 경우
  - java 설치 & JAVA_HOME 설정
2. apache maven 설치 (https://maven.apache.org/)
  - java가 설치되어 있지 않으면 java 설치할 것.
3. 시스템 환경변수 등록 (필요시 재시작)
  - MAVEN_HOME = apache-maven\ ** 경로까지 지정
  - path += apache-maven\bin

### vscode에 maven 빌드환경 설정
1. Maven for java extension 설치
  - recomandation: Extension Pack for Java extension으로 한방 설치
2. vscode configure
  - Menu > File > Preferences > settings (Ctrl+,)
    'java.home' 검색 --> java home 설정 확인.
  - 'maven' 검색 --> Maven > Executable: Path 설정확인

### vscode에서 Build Deploy-Java (개발용)
1. WORK900 Workspace를 열고
2. Run Build Task
  - Menu > Terminal > Run Build Task (Ctrl+Shift+B) --> 팔레트에서 'npm: build:dev' 선택
    WORK900/dist/deploy 폴더에 jar 파일 생성됨.

### vscode에서 Build Deploy-Java (배포용)
1. WORK900 Workspace를 열고
3. Run Build Task
  - Termainal 에서 'WORK900> npm run build:prod -- --revision x.x.xx' 실행
    WORK900/tools/deploy/nexacro-distribution/target 폴더에 jar & zip 파일 생성됨.

## Build Windows NRE
1. MSBuild 설치
   - VisualStudio 2019 또는 2022 설치
2. vcpkg 구성
   - Windows NRE가 사용하는 오픈소스 라이브러리는 vcpkg로 관리합니다.
   - 빌드 방법 참조 (`/platforms/windows/README.md`)
   - Windows NRE를 처음 빌드하는 경우 옵션(`--with-vcpkg` 및 `--vcpkg`)을 설정합니다.
   - vcpkg를 서브모듈로 관리하도록 개선할 계획이며 현재는 직접 설치해야 함.
3. nuget 구성
   - Edge2 WebView2는 `nuget`으로 관리됩니다.
   - Windows NRE를 처음 빌드하는 경우 옵션(`--with-nuget`)을 설정합니다.  
4. npm 이용
   - 빌드
     ```bash
     npm run build:windows.debug -- --with-vcpkg --vcpkg D:\opt\microsoft\vcpkg\
     npm run build:windows.releasedebug
     npm run build:windows.release
     ```
   - 빌드 및 실행
     ```bash
     npm run build:windows.run -- -K myapp -S http://.../start.json
     ```
   - `--` 는 powershell 환경에서는 동작하지 않습니다.
5. 옵션

    | 옵션 | 설명 |
    | :--- | :--- |
    | `--configuration <Debug\|Release\|ReleaseDebug>` | 빌드 구성 선택 (기본값: Release)
    | `--platform <x64\|x86>` | 빌드 플랫폼 선택 (기본값: x64)
    | `--msbuild <path>` | MSBuild 경로 직접 지정
    | `--vcpkg <path>` | vcpkg 경로 직접 지정 (기본: VCPKG_ROOT 환경변수)
    | `--with-vcpkg` | vcpkg install 실행 (기본: 건너뜀)
    | `--with-nuget` | NuGet restore 실행 (기본: 건너뜀)
    | `--run [args...]` | 빌드 완료 후 Nexacro.exe 실행 <br>--run 이후의 모든 값은 Nexacro.exe에 전달됨 <br>예) --run -k myapp -s "http://..." -scr Desktop_screen -wd 1280 -ht 800
    | `--clean` | 이전 빌드 결과를 삭제하고 다시 빌드
    | `-h, --help` | 도움말 표시

## Build Android NRE
1. Android SDK 설치 및 환경변수 (`ANDROID_HOME`) 설정
   - Android SDK는 `sdkmanager`를 이용하거나 Android Studio를 설치
   - SDK 경로를 환경변수 (`ANDROID_HOME`) 에 설정 (또는 `--sdk-path` 옵션으로 설정)
2. npm 이용
   - 빌드
     ```bash
     npm run build:android.debug -- --sdk-path "/opt/android-sdk"
     npm run build:android.release
     ```
   - 빌드 및 에뮬레이터 실행
     ```bash
     npm run build:android.run
     ```
   - `--` 는 powershell 환경에서는 동작하지 않습니다.
3. VSCode 디버깅
   - VSCode 확장 설치 `Microsoft Edge Tools for VS Code`
   - 에뮬레이터 실행 (`build:android.run`) 후 VSCode의 `실행 및 디버그`에서 `Android NRE (WebView)` 선택
4. 옵션

    | 옵션 | 설명 |
    | :--- | :--- |
    | `--configuration <Debug\|Release>` | 빌드 구성 선택 (기본값: Release) |
    | `--build-root <path>` | 출력 디렉터리 지정 (기본값: platforms/android/build) |
    | `--sdk-path <path>` | Android SDK 경로 직접 지정 |
    | `--bootstrap-url <url>` | MainActivity에 주입할 Bootstrap URL (projectURL은 파일명을 제거한 값으로 자동 설정) |
    | `--run-emulator` | 빌드 완료 후 에뮬레이터에 APK 설치 및 앱 실행 |
    | `--avd <name>` | 실행할 AVD 이름 (생략 시 첫 번째 AVD 사용) |
    | `--logcat` | 앱 실행 후 해당 앱의 logcat 출력 (Ctrl+C 로 종료) |
    | `--inspect [port]` | 앱 실행 후 WebView 디버그 포트 포워딩 (기본값: 9222) |
    | `--clean` | 이전 빌드 결과를 삭제하고 다시 빌드 |
    | `-h, --help` | 도움말 표시 |

## Build iOS NRE
1. Xcode 설치 및 CocoaPods 설치
   - Xcode 및 Command Line Tools 설치
   - CocoaPods 설치 (macOS 기본 `ruby`가 버전이 낮은 경우 `brew` 등을 이용하여 `ruby` 설치)
2. npm 이용
   - 빌드
     ```bash
     npm run build:ios.debug
     npm run build:ios.release
     ```
   - 빌드 및 시뮬레이터 실행
     ```bash
     npm run build:ios.run -- --skip-frameworks --logcat
     ```
   - `--` 는 powershell 환경에서는 동작하지 않습니다.
3. 옵션

    | 옵션 | 설명 |
    | :--- | :--- |
    | `--configuration <Debug\|Release>` | 빌드 구성 선택 (기본값: Release) |
    | `--build-root <path>` | 출력 디렉터리 지정 (기본값: platforms/ios/build) |
    | `--bootstrap-url <url>` | ViewController에 주입할 Bootstrap URL (projectURL은 파일명을 제거한 값으로 자동 설정) |
    | `--run-simulator` | 빌드 완료 후 시뮬레이터에 앱 설치 및 실행 |
    | `--simulator <name\|udid>` | 실행할 시뮬레이터 이름 또는 UDID (생략 시 부팅된 시뮬레이터 사용) |
    | `--logcat` | 앱 실행 후 로그 스트림 출력 (Ctrl+C 로 종료) |
    | `--skip-frameworks` | XCFramework 빌드를 건너뜀 (--run-simulator 와 함께 사용) |
    | `--clean` | 이전 빌드 결과를 삭제하고 다시 빌드 |
    | `-h, --help` | 도움말 표시 |

# How to use
## Generate Nexacro Project 
1. Terminal을 사용하여 Generate
  - 'WORK900> npm run generate -- --project <path> --output <path>'
    ** 명령 작성 시 -- --project 에서 -- 도 포함입니다.(node.js 옵션 지시자)
    ** java pack 설치 후 extension.json에 불필요한 extension은 disable 시킴 
       - ("unwantedRecommendations")- 원 java project의 프로젝트 관리 대상 파일을 변경하는 이슈 확인
       - extensions.json에 disable 처리 추가 
    자세한 명령어 사용법은 'npm run generate' 명령을 실행하면 출력됨.

# Nexacro K Project 개발환경 설정
- Nexacro K 툴 퉁합 전까지는 Nexacro N용 Studio + 수동 Generate 환경 필요
- 위의 'vscode에서 Build Deploy-Java (개발용)' 단계를 수행하면 두 개의 CLI 유틸리티가 전역적으로 설치됨.
  - nexacro-init: npm run 명령으로 Nexacro Generate 및 개발서버를 실행아기 위한 package.json을 생성하는 유틸리티 
    (자세한 명령어는 nexacro-init --help 실행)
  - nexacro-gen: Java 버전 Nexacro Generator를 CLI로 실행하는 유틸리티
    (자세한 명령어는 nexacro-gen --help 실행)
  - 만약, Build Deploy-Java가 완료되었는데 nexacro-init 명령이 설치되지 않았으면
    'WORK900' 폴더에서 'npm link' 명령을 호출하세요.
    WORK900> npm link
- 사용방법:
  1. 넥사크로 프로젝트 폴더에 package.json 파일 생성
    예) 'my-project'라는 넥사크로 프로젝트가 있을 때
      > nexacro-init my-project --output-root wwwroot
  2. npm 명령을 사용하여 넥사크로 프로젝트 Generate
      > cd my-project
      > npm run build
  3. npm 명령을 사용하여 개발서버 실행
      > cd my-project
      > npm run dev

# nexacrolib 단위테스트
- nexacrolib 단위테스트는 jest와 jsdomㅡ 을 이용하여 테스트를 수행한다.
- 테스트케이스는 \nexacrolib\tests 폴더에 'test.js' 파일로 작성한다.
- 테스트를 작성할 때, 필요한 nexacro 모듈을 require()구문을 이용하여 추가한 후 작성할 수 있다.
  ``` javascript
    require("@nexacro/framework");
    require("@nexacro/compbase");
    require("@nexacro/comcomp");

    // 테스트코드 작성
    describe("This is a test suite", () {
      test("This is a test case", () => {
        expect(1).toEqual(1);
      });
    });
  ```
- 컴포넌트 테스트를 위해서는, Form 환경을 생성해야 한다. (tests\component\buttons\button.test.js 참고)
  ``` javascript
    // event observer 설치 및 application & form 생성
    beforeAll(() => {
      environment().observe().form();
    });

    test("This is a component test case", () => {
      const btn = form.components["btn00"];
      //...
    });
  ```
- test 실행
  - 전체 테스트 수행
    WORKSPACE-ROOT> npm run test
  - 테스트 스크립트 디버깅
    1. 'Run and Debug'(Ctrl+Shift+D) 창에서 'Debug Jest (All Tests)' 또는 'Debug Jest (Current File)' 선택
    2. "Start Debugging (F5)" 버튼 (U+25B7) --> '1'의 Debug Jest가 선택되어 있으면, 코드 에디터에서 'F5'만 누르면 디버그 실행됨.
  - 테스트 디버깅 등에 유용한 test 함수
    - test.only: 테스트를 실행할 때 'only()'함수만 실행한다. 디버깅 때 유용.
      syntax: test.only(title, () => { // test code });
    - test.skip: 해당 함수를 제외하고 테스트를 수행한다.
      syntax: test.skip(title, () => { // test code });
    - test.fix: 환경변수 'SKIP_FAILING_TEST'에 따라, SKIP하거나 수행한다. (npm run test:skip 명령어로 skip 실행할 수 있다.)
      syntax: test.fix(title, () => { // test code });
    - 나머지는 jest matcher와 함수 참고.
  - 특정 파일만 테스트를 수행할 때,
    - npm run test xxx.test.js와 같이 명령어 뒤에 파일을 지정하면, 지정한 파일만 수행한다. 이 때 경로는 생략 가능하다.

