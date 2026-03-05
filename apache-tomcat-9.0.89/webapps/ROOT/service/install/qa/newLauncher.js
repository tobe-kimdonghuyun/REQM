//--------------------------------------------------------------------------------------------------------------
// 런처 서비스의 경우 local 통신을 하게 되며 런처 서비스 모듈의 설치 여부는 최초 통신의 성공 여부를 통해 통신이 실패 할 경우 모듈 설치를 진행
// 런처 서비스는 Window OS(XP SP3 이상) 의 services 항목에 추가 되어 구동 되기 때문에 Window services 에 정상 등록 되지 않을 경우 사용이 불가능 할 수 있으며
// 런처 서비스에서 사용하고 있는 port 를 혹시라도 PC 에서 사용을 막는 작업을 할 경우 사용 제한이 생길 수 있습니다.
//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//런처 서비스 및 엔진 정보 설정
//--------------------------------------------------------------------------------------------------------------

/***** 엔진 및 런처 정보 *****/
//런처 서비스 버전 정보
var strLauncherVersion = "1,1,0,46";

//런처 서비스 설치 파일명
var strLauncherFileName = "TPLSvc_Setup.exe";

//런처 서비스 웹소켓 방식 사용 여부 true:사용, false:사용안함(https통신)
var bWebsocketUse = true;

//엔진 버전 정보
var strVersion = "21.0.0.1649";

//window32bit 엔진 key
var strEnginesetupkey32 = "{6FBC1E87-EE47-4479-A72F-17D1D6C426E5}";

//window64bit 엔진 key
var strEnginesetupkey64 = "{70CA322E-BF32-42AB-BBDB-EA26174969AB}";

//기본 엔진 Key 정보
var strEnginesetupkey = strEnginesetupkey32;

//window 32bit 엔진 파일명
var strEngineFileName32 = "NexacroN_SetupRuntime_x86.exe";

//window 64bit 엔진 파일명
var strEngineFileName64 = "NexacroN_SetupRuntime_x64.exe";

//기본 엔진 파일명
var strEngineFileName = strEngineFileName32;

//Window 64Bit 여부 확인
var sAgent = navigator.userAgent.toLowerCase();
//var b64bitUse = (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1);
var b64bitUse = (sAgent.indexOf("win64") != -1 || sAgent.indexOf("x64") != -1);
var osCheck = navigator.userAgent;

//Window 64Bit 엔진을 사용할 경우 예외처리
if(b64bitUse)
{
    //64bit 엔진 key
    strEnginesetupkey = strEnginesetupkey64;

	//window 64bit 엔진 파일명
	strEngineFileName = strEngineFileName64;

    //32bit 만 사용을 하기 위해서는 32bit 엔진키 & 엔진 파일명을 삽입
    //strEnginesetupkey = strEnginesetupkey32;
	//strEngineFileName = strEngineFileName32;
}

/***** 서버 경로 *****/
//웹 서비스 Root 경로
var strServerPath = window.location.protocol + "//" + window.location.host + "/";

//런처 서비스 및 엔진 파일 경로
var strNexaFilePath = "./engine";

//이미지 및 아이콘 파일 경로
var strLoadingimage = strServerPath + "service/install/images/loading_img.gif";
var strSplashimage = strServerPath + "service/install/images/splash_img.gif";
var strWallpapericon = strServerPath + "service/install/images/seegene_icon_Q256_0119.ico";
var strSetupResourcePath = strServerPath+ "service/install/qa/engine";
var bSetupResource = true;

/***** 프로젝트 속성 정보 *****/
//project key value
var strKey = "차세대LIS_qa";

//프로젝트 부트스트랩(start.json) 파일 경로
var strBjson = strServerPath + "start.json";

//Component 경로 (%USERAPPLOCAL% = C:\Users\[UserName]\AppData\Local)
var strComponentPath = "%USERAPPLOCAL%\\TOBESOFT\\Nexacro N\\21\\Component\\SeegeneLIS\\";

//프로젝트 단일실행 여부 true : 단일실행, false : 다중실행
var bOnlyone = false;

//바로가기 생성여부 true : 아이콘 생성, false : 생성하지 않음
var bMakeShortcut = true;

//바로가기 위치 지정 "startmenu"/ "startup" / "programs" / "desktop" 중 택일함
//startmenu : 시작메뉴, startup : 모든 프로그램에 시작 프로그램, programs : 모든 프로그램, desktop : 바탕화면
var strWallpaperposition = "desktop";

//브라우저 쿠키 정보 Environment Cookie 변수 사용여부 true: 사용, false : 사용안함
var bAddWebInfo = true;

//처리 완료 확인 true : 처리 완료 후 실행, false : 바로 실행 (destory 실행)
var bEndClose = true;

/***** 디버그 모드 사용여부 (loglevel debug, error ) *****/
//true:사용 (html 페이지 내 표시), false: 사용안함
var jsonDebugMode = {debug:true,loglevel:"debug"};

/***** 런처 서비스에서 사용할 프로토콜 및 포트 정보 *****/
//get protocol string --> 'https:' or 'http:'
var strProtocol = window.location.protocol;

//-p옵션을 통해 넣었던 포트번호가 있으면 그 번호를 넣어야 함 : 없을 경우 -1
var nSetPort = -1;

//openport가 실패할 경우 시도할 처음 port 번호
var nOpenPort = -1;

//nSetPort 혹은 쿠키값으로 먼저 port 찾을때 false 설정;
var bFindport = false;

//연결 가능한 port를 찾을때 시작
var nMinPort = 0;

//연결 가능한 port를 찾을때 최대 범위
var nMaxPort = 0;

if(bWebsocketUse)
{
	if(strProtocol == "http:")
	{
		//ws(http) 사용시 사용되는 port (7970~7981)
		strProtocol = "ws:";

		nMinPort = 7970;
		nMaxPort = 7981;
    }
    else if(strProtocol == "https:")
    {
		//ssl이 적용된 - wss(https) 사용시 사용되는 port (7982~7992)
		strProtocol = "wss:";

		nMinPort = 7982;
		nMaxPort = 7992;
    }
}
else
{
    if(strProtocol == "http:")
    {
		// http 사용시 사용되는 port (7895~7935)
		nMinPort = 7895;
		nMaxPort = 7935;
    }
    else if(strProtocol == "https:")
    {
		//https 사용시 사용되는 port (7936~7966)
		nMinPort = 7936;
		nMaxPort = 7966;
    }
}

/***** 런처 서비스 호출 정보(변경불가) *****/
//https 를 사용 할 경우 https://127.0.0.1 로 변경
var strOpenUrl = strProtocol + "//127.0.0.1";

//런처 서비스 경로
var strOpenUrlAddPath = "/launcher/nexacro";

/***** 글로벌 변수 전달 정보 *****/
//get 방식으로 Parameter 전달 받은 값을 Application.Variable에 전달하는 방식 예제
//Environment.Variable
var strEnVariable = "en_val:ev=evTest";

//av는 Application.Variable
var strApVariable = "app_val:av=avTest";

//Environment.CookieVariable
var strEnCookie = "en_cookie:ec=evCookie";

//변수명:av=값,변수명:ev=값,변수명:ec=값
var strGlobalvalue = strEnVariable + "," + strApVariable + "," + strEnCookie;

//--------------------------------------------------------------------------------------------------------------
//브라우저 onload, onerror 이벤트 처리
//--------------------------------------------------------------------------------------------------------------

//표준 브라우저 firefox, IE9, 파이어폭스, 오페라, 사파리, 크롬 전용
if (window.addEventListener)
{
	window.addEventListener("load", function()
		{
			//웹소켓 방식 초기화
			if(bWebsocketUse)
			{
				fnInitLauncherServiceForWebSocket();
			}
			//HTTP/HTTPS 방식 초기화
			else
			{
				fnInitLauncherServiceForHTTP();
			}
		}
	);

	window.addEventListener("error", function()
			{
				if(bWebsocketUse)
				{
					websocket_onerror();
				}
				else
				{
					http_onerror();
				}
		}
	);
}
//IE8 이하 및 오페라
else if (window.attachEvent)
{
	window.attachEvent("onload", function()
		{
			//웹소켓 방식 초기화
			if(bWebsocketUse)
			{
				fnInitLauncherServiceForWebSocket();
			}
			//HTTP/HTTPS 방식 초기화
			else
			{
				fnInitLauncherServiceForHTTP();
			}
		}
	);
	window.attachEvent("onerror", function()
		{
			if(bWebsocketUse)
			{
				websocket_onerror();
			}
			else
			{
				http_onerror();
			}
		}
	);
}

//Nexacro Object
var objNexacro = {};

//WebSocket Object
var objWebSocket;

//--------------------------------------------------------------------------------------------------------------
//현재 진행상태에 대한 메시지 처리
//--------------------------------------------------------------------------------------------------------------

//HTML페이지에 상태 변경 함수 호출
function fnIstalledMsg(str,msg,url)
{
	if(typeof(fnNexaCallBack) == "function")
	{
        fnNexaCallBack(str,msg,url);
	}
}

//런처 서비스 파일 설치 및 업데이트 여부 알림
function fnDownloadLauncher(strType)
{
	var strMsg = "설치 되지 않았습니다.";
	if(strType=="update")
	{
        strMsg="업데이트 되었습니다.";
	}

	var strContents = "TPLSvc가 " +strMsg+ " TPLSvc를 다운로드 후 설치를 진행해 주시기 바랍니다.";

	fnIstalledMsg("TPLDownloadNewLauncher",strContents);
}

//엔진 파일 설치 여부 알림
function fnDownloadEngine()
{
	var strContents = "Engine이 설치되지 않았습니다. 다운로드 후 설치를 진행해 주시기 바랍니다.";

	var strDownloadPath = strNexaFilePath + "/" + strEngineFileName;

	fnIstalledMsg("EngineDownload",strContents, strDownloadPath);
}

//처리 완료 메시지 출력
function fnCloseMessage()
{
	if(!bEndClose)
	{
        return;
	}

	var strContents = "처리가 완료되었습니다.";

	fnIstalledMsg("close",strContents);

	//웹소켓 방식일 경우 웹소켓 Close 처리
	if(bWebsocketUse)
	{
		fnCloseWebSocket();
	}

	 //배포 페이지 닫기 : window.close() 는 크롬 브라우저 제약사항으로 사용할 수 없습니다.
	 //window.open("about:blank", "_self").close();
}

//--------------------------------------------------------------------------------------------------------------
//Debug mode 사용을 위한 처리
//--------------------------------------------------------------------------------------------------------------

//Debug mode를 위한 trace function 정의
function trace()
{
	var msg = "";
	if (jsonDebugMode.debug)
	{
        var domText = document.getElementById('debugTextBox');
        if (domText)
        {
			domText.style.display = "block";
			msg += arguments[0];
			for (var i = 1, len = arguments.length; i < len; i++)
			{
				msg += ", " + arguments[i];
			}
			domText.value += msg + "\n";
			console.log(msg);
        }
	}
}

//--------------------------------------------------------------------------------------------------------------
//데이터 통신 송수신 처리
//--------------------------------------------------------------------------------------------------------------

//데이터 송신 처리 함수
function fnSendData(bOpenPost)
{
	var jsonData;
	jsonData = JSON.stringify(objNexacro);

	//웹소켓 방식 사용시
	if(bWebsocketUse)
	{
		if( objWebSocket != null)
		{
			objWebSocket.send(jsonData);
		}
		else
		{
			trace("[ERROR]It can not create WebSocket or MozWebSocket");
			return null;
		}
	}
	//HTTP/HTTPS 사용시
	else
	{
		var __ajax = fnInitHttpRequest();

		//cache 방지용
		var nTimeStamp = "/" + new Date().getTime();
		var sSendUrl = strOpenUrl + ":" + nOpenPort + strOpenUrlAddPath + nTimeStamp;

		if (window.XDomainRequest)
		{
			if (bOpenPost)
			{
				__ajax.open("POST", sSendUrl, "true");
				__ajax.send(jsonData);
			}
			else
			{
				__ajax.open("GET", sSendUrl + "?" + jsonData, "true");
				__ajax.send();
			}
		}else if (window.XMLHttpRequest)
		{
			if (bOpenPost)
			{
				__ajax.open("POST", sSendUrl);
				__ajax.send(jsonData);
			}
			else
			{
				__ajax.open("GET", sSendUrl);
				__ajax.send();
			}
		}
		__ajax = null;
	}
}

//fnSendData 호출 후 Callback 처리 함수
//런처 서비스 Action을 실행한 결과값을 받아 후속 처리
function fnCallBackSendData()
{
	//리턴 받은 결과가 있을 경우
	if(objNexacro.action)
	{
		var strAction = objNexacro.action;

		//create Action 호출시
		if(strAction == "create")
		{
			if(!bWebsocketUse)
			{
				fnSetCookie("tplsvcopenport", nOpenPort, 14);
			}

			if(objNexacro.result == "success")
			{
				objNexacro.action = 'check';
				objNexacro.value = { "getlauncherversion": {} };
				fnSendData(true);
			}
		}
		//check Action 호출시
		else if(strAction == "check")
		{
			var strLocLauncherVer = objNexacro.value["getlauncherversion"].productversion;

			var nUpdateCheck = fnCompareVersion(strLauncherVersion, strLocLauncherVer, ',', null);
			if (nUpdateCheck == 1) //-1 실패
			{
				fnDownloadLauncher("update");
			}
			else
			{
				fnIstalledMsg("newlanucher");
				objNexacro.action = "method";
				objNexacro.value = { "getengineversion": { "param": [strEnginesetupkey], "result": null } };
				fnSendData(true);
			}
		}
		//setproperty Action 호출시
		else if(strAction == "setproperty")
		{
			if(typeof(bMakeShortcut) == undefined)
			{
				// 단축아이콘 생성
				fnSetActionMethod('makeshortcut');
				fnSendData(true);
				return;
			}
			else if(bMakeShortcut === true)
			{
				// 단축아이콘 생성
				fnSetActionMethod('makeshortcut');
				fnSendData(true);
				return;
			}
			else if(typeof(bAddWebInfo) !== undefined && bAddWebInfo === true)
			{
				// 브라우저 쿠키 사용
				fnSetActionMethod('addWebInfo');
				fnSendData(true);
				return;
			}
			else
			{
				// nexacro 실행
				fnSetActionMethod('launch');
				fnSendData(true);

				fnGetActionEvent('error');
			}
		}
		//method Action 호출시
		else if(strAction == "method")
		{
			if(objNexacro.result == "success")
			{
				//바로가기 아이콘 생성
				if(objNexacro.value.makeshortcut)
				{
					if(typeof(bAddWebInfo) !== undefined && bAddWebInfo === true)
					{
						//현재 브라우저 쿠키 자동으로 Environment Cookie 변수에추가
						fnSetActionMethod('addWebInfo');
						fnSendData(true);
					}
					else
					{
						// nexacro 실행
						fnSetActionMethod('launch');
						fnSendData(true);

						fnGetActionEvent('error');
					}
				}
				//바로가기 아이콘이 존재하는지 확인
				else if(objNexacro.value.isexistshortcut)
				{
				}
				//앱 실행 시 사용되는 자원을 다운로드
				else if(objNexacro.value.download)
				{
				}
				//현재 브라우저의 쿠키 정보를 자동으로 추가
				else if(objNexacro.value.addWebInfo)
				{
					// nexacro 실행
					fnSetActionMethod('launch');
					fnSendData(true);

					fnGetActionEvent('error');
				}
				//시스템에 설치된 엔진키에 해당하는 엔진 설치 버전을 가져옴
				else if(objNexacro.value.getengineversion)
				{
					var strRtnEngineVer = objNexacro.value.getengineversion.result;
					trace("★ Nexacro Engine :: Request install version=" + strVersion +  " / Installed version=" + strRtnEngineVer);

					var nUpdateCheck = fnCompareVersion(strVersion, strRtnEngineVer, '.', null);
					if (nUpdateCheck == 1 || isNaN(nUpdateCheck))
					{
						fnSetActionProperty('setproperty');
						fnSendData(true);
						fnSetActionMethod('downloadresource');
						fnSendData(true);
						fnDownloadEngine();
					}
					else
					{
						fnIstalledMsg("nexacro");

						// nexacro 구동을 위한 기본 속성 설정
						fnSetActionProperty('setproperty');
						fnSendData(true);

						// 단축아이콘 생성
						fnSetActionMethod('makeshortcut');

						// nexacro 실행
						fnSetActionMethod('launch');
					}
				}
				//바로가기 아이콘 삭제
				else if(objNexacro.value.deleteshortcut)
				{
				}
				//넥사크로 엔진을 NRE로 실행
				else if(objNexacro.value.launch == true || objNexacro.value.launch == "ok")
				{
					setTimeout( function() { fnSetActionDestroy(); }, 1000);
				}
			}
			else
			{
				trace("[ERROR]Action : method");

				if(bWebsocketUse)
				{
					websocket_onerror();
				}
				else
				{
					http_onerror();
				}
			}
		}
		//destroy Action 호출시
		else if(strAction == "destroy")
		{
			fnCloseMessage();
		}
		else if(strAction == "event")
		{
			if(objNexacro.result == "success")
			{
				var nErrorCode = objNexacro.value.error.code;
				var nErrorMsg = objNexacro.value.error.message;

				//alert(nErrorMsg);
			}
		}
	}
	//리턴받은 결과값이 없을 경우 에러처리
	else
	{
		if(bWebsocketUse)
		{
			return websocket_onerror();
		}
		else
		{
			return http_onerror();
		}
	}
}

//런처 서비스 버전이 업데이터 여부 확인 함수
function fnCompareVersion(v1, v2, splitter, options)
{
	var lexicographical = options && options.lexicographical,
	zeroExtend = options && options.zeroExtend,
	v1parts = v1.split(splitter),
	v2parts = v2.split(splitter);

	function isValidPart(x)
	{
		return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
	}

	if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart))
	{
        return NaN;
	}

	if(zeroExtend)
	{
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
	}

	if(!lexicographical)
	{
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
	}

	for(var i = 0; i < v1parts.length; ++i)
	{
		if(v2parts.length == i)
		{
			return 1;
		}

		if(v1parts[i] == v2parts[i])
		{
			continue;
		}
		else if(v1parts[i] > v2parts[i])
		{
			return 1;
		}
		else
		{
			return -1;
		}
    }

    if(v1parts.length != v2parts.length)
    {
		return -1;
    }

    return 0;
}

//쿠키 설정 함수
function fnSetCookie(strName, strValue, nExpireDays)
{
	var dtTodayDate = new Date();
	dtTodayDate.setDate(dtTodayDate.getDate() + nExpireDays);
	document.cookie = strName + '=' + escape(strValue) + '; path=/; expires=' + dtTodayDate.toGMTString() + ';';
}

//쿠키 정보 가져오기 함수
function fnGetCookie(strName)
{
	var strNameOfCookie = strName + '=';
	var x = 0;
	var nEndOfCookie;

	while (x <= document.cookie.length)
	{
		var y = (x + strNameOfCookie.length);

		if (document.cookie.substring(x, y) == strNameOfCookie)
		{
			if ((nEndOfCookie = document.cookie.indexOf(';', y)) == -1)
			{
				nEndOfCookie = document.cookie.length;
			}

			return unescape(document.cookie.substring(y, nEndOfCookie));
		}

		x = document.cookie.indexOf(' ', x) + 1;

		if (x == 0)
		{
			break;
		}
	}

	return '';
}

//Action 호출 결과값을 정상여부 확인 함수
//정상일 경우 ojbNexacro에 설정
function fnCheckResultData(strResult)
{
	if (strResult.length <= 0)
	{
		return false;
	}

	try
	{
		var objResult = JSON.parse(strResult);

		if (objResult.result == "success" && objResult.id.length > 0)
		{
			objNexacro = objResult;
			return true;
		}
		else
		{
			trace("[ERROR]fnCheckResultData error msg : " + objResult.result);
			return false;
		}
	}
	catch (e)
	{
		trace("[ERROR]fnCheckResultData error msg : " + e.message);
		return false;
	}
}

//--------------------------------------------------------------------------------------------------------------
//런처 서비스 Action 정의
//--------------------------------------------------------------------------------------------------------------

//Property Action 정보 설정 함수
function fnSetActionCreate()
{
	//필수 세팅
	objNexacro.platform = 'nexacro';

	//필수 세팅
	objNexacro.action = 'create';
}

//Property Action 정보 설정 함수
function fnSetActionProperty(strAction)
{
	if (strAction == 'setproperty')
	{
		//property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
		objNexacro.action = 'setproperty';

		objNexacro.value = {
				"key": strKey,
				"bjson": strBjson,
				"splashimage": strSplashimage,
				"componentpath": strComponentPath,
				"splashmessage": 'none',
				"loadingimage": strLoadingimage,
				"globalvalue": strGlobalvalue,
				"onlyone": bOnlyone,
				"enginesetupkey": strEnginesetupkey,
                "setupresource": bSetupResource,
				"version": "21",
				"screenid" : ""
			};
	}
	else if (strAction == 'getproperty')
	{
		objNexacro.action = 'getproperty';

		//property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
		objNexacro.value = {
			"key": "",
			"bjson": "",
			"splashimage": "",
			"loadingimage": "",
			"globalvalue": "",
			"onlyone": bOnlyone,
			"enginesetupkey": ""
		};
	}
	else
	{
		return;
	}
}

//Method Action 정보 설정 함수
function fnSetActionMethod(strMethod)
{
	objNexacro.action = 'method';

	if(strMethod == 'makeshortcut')
	{
		//method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
		objNexacro.value =
		{
			"makeshortcut": {
				"param": [strKey, strWallpapericon, "", strWallpaperposition, false]
			}
		};
	}
	else if(strMethod == 'launch')
	{
		//method 실행 ==> action = 'method' value = {"method명" :  };
		objNexacro.value = {
			"launch": true
		};
	}
	else if(strMethod == 'isexistshortcut')
	{
		//method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
		objNexacro.value = {
			"isexistshortcut": {
				"param": [strKey, "startmenu", true],
				"result": null
			}
		};
	}
	else if(strMethod == 'download')
	{
		//method 실행 ==> action = 'method' value = {"method명" : };
		objNexacro.value = {
			"download": null
		};
	}
	else if(strMethod == 'addWebInfo')
	{
		//method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
		objNexacro.value = {
			"addWebInfo": {
				"param": [window.document.cookie]
			}
		};
	}
	else if (strMethod == 'downloadresource')
	{
		objNexacro.value = {
			"downloadresource": {
				"param": [strSetupResourcePath]  //SetupResource.zip 존재하는 경로
			}
		};
	}
	else if(strMethod == 'getengineversion')
	{
		//method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
		objNexacro.value = {
			"getengineversion": {
				"param": [strEnginesetupkey],
				"result": null
			}
		};
	}
	else if(strMethod == 'deleteshortcut')
	{
		//method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
		objNexacro.value = {
			"deleteshortcut": {
				"param": [strKey, "startmenu", true],
				"result": null
			}
		};
	}
	else
	{
		return;
	}
}

//Event Action 정보 설정 함수
function fnGetActionEvent(strAction)
{
	objNexacro.action = 'event';
	if (strAction == 'error')
	{
		//get event info  ==> action = 'event' value = {"event명" : {...}};
		objNexacro.value = {
			"error": {
				"code": 0,
				"message": ""
			}
		};

	}
	else
	{
		return;
	}

	fnSendData(true);
}

//Destroy Action 정보 설정 함수
function fnSetActionDestroy()
{
	//종료 ==> 종료는 생략할 수 있으나 런처 서비스에서 관련 정보를 일정 시간 동안 가지고 있지 않게 하려면 호출해야 함;
	objNexacro.action = 'destroy';

	fnSendData(true);
}

//--------------------------------------------------------------------------------------------------------------
//HTTP/HTTPS 방식으로 런처 서비스를 구성하는 경우
//--------------------------------------------------------------------------------------------------------------

//호출 포트설정 및 Create Action 호출 함수
function fnInitLauncherServiceForHTTP()
{
	fnSetActionCreate();

	if (nSetPort > 0)
	{
		nOpenPort = nSetPort;

		trace("[INFO]fnInitLauncherServiceForHTTP tpl_Connect Port 0 : " + nOpenPort);
	}
	else
	{
		nOpenPort = parseInt(fnGetCookie("tplsvcopenport"), 10) | 0;

		trace("[INFO]fnInitLauncherServiceForHTTP tpl_Connect Port 1 : " + nOpenPort);
	}

	if(nOpenPort > 0)
	{
		bFindport = false;

		trace("[INFO]fnInitLauncherServiceForHTTP tpl_Connect Port 2 : " + nOpenPort);
	}
	else
	{
		bFindport = true;
		nOpenPort = nMinPort;

		trace("[INFO]fnInitLauncherServiceForHTTP tpl_Connect Port 3 : " + nOpenPort);
	}

	fnSendData(true);
}

//Ajax 오브젝트 생성 함수
function fnInitHttpRequest()
{
	var xhrObj = {};
	var __ajax;

	if (window.XDomainRequest)
	{
		__ajax = new XDomainRequest();
		__ajax.onload = http_onload(__ajax);
		__ajax.onerror = http_onerror;
		__ajax.ontimeout = http_ontimeout;

	}
	else if (window.XMLHttpRequest)
	{
		__ajax = new XMLHttpRequest();
		__ajax.onreadystatechange = http_onload(__ajax);

	}else
	{
		trace("[ERROR]It can not create XMLHttpRequest or XDomainRequestx");
		return null;
	}

	return __ajax;
}

//HTTP/HTTPS 방식으로 호출시 결과 수신 함수
function http_onload(__ajax)
{
    return function()
    {
		if(!__ajax)
		{
			trace("[ERROR]http_onload : __ajax error");
			return;
		}

		var ajax_handle = __ajax;

		if(ajax_handle.readyState == 4)
		{
			if(ajax_handle.status == 200)
			{
				var data = ajax_handle.responseText;

				if(fnCheckResultData(data))
				{
					trace("[INFO]http_onload data");
					trace(data);
					trace("");

					fnCallBackSendData();
				}
			}
			else
			{
				return http_onerror();
			}
		}
		else if(ajax_handle.readyState === 0)
		{
			trace("[ERROR]XMLHttpRequest status : " + ajax_handle.status);

			return http_onerror();

		}
		else if(ajax_handle.readyState == undefined)
		{
			// XDomainRequest
			var data = ajax_handle.responseText;

			if(fnCheckResultData(data))
			{
				trace("[INFO]http_onload data");
				trace(data);
				trace("");

				fnCallBackSendData();
			}
			else
			{
				return http_onerror();
			}
		}
	}
}

//HTTP/HTTPS 방식으로 호출 중 타임아웃 발생시 처리 함수
function http_ontimeout()
{
	trace("[ERROR]http_ontimeout");

	return http_onerror();
}

//HTTP/HTTPS 방식으로 호출 중 에러 발생시 처리 함수
function http_onerror()
{
	trace("[ERROR]http_onerror action : " + objNexacro.action + " oepnport : "+nOpenPort);

	if (objNexacro.action == 'create')
	{
		var strIsAttempt = localStorage.getItem("isAttempt");

		if(strIsAttempt==null || strIsAttempt=="error")

		{
			// TPLSvc 파일 다운로드 flag 값
			localStorage.setItem("isAttempt", "ok");
			fnDownloadLauncher();
		}
		else
		{
			if (bFindport == false)
			{
				if (nSetPort > 0)
				{
					nSetPort = 0;
					nOpenPort = parseInt(fnGetCookie("tplsvcopenport"), 10) | 0;

					if (nOpenPort > 0)
					{
						fnSendData(true);
						return;
					}
				}
				nOpenPort = nMinPort;
			}
			else
			{
				nOpenPort++;
			}
			bFindport = true;

			if (nOpenPort <= nMaxPort)
			{
				fnSendData(true);
			}
			else
			{
				localStorage.setItem("isAttempt", "error");

				trace("[ERROR]프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");

				fnIstalledMsg("error","프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
			}
		}
	}
	else
	{
		fnIstalledMsg("error","[ERROR] action : " + objNexacro.action +  "oepnport : "+ nOpenPort);
	}
}

//--------------------------------------------------------------------------------------------------------------
//WebSocket 방식으로 런처 서비스를 구성하는 경우
//--------------------------------------------------------------------------------------------------------------

//WebSocket 생성 및 Create Action 설정 함수
function fnInitLauncherServiceForWebSocket()
{
	fnSetActionCreate();

	//WebSocket Object 생성 전 미리 Port 설정.
	if (nSetPort > 0)
	{
		nOpenPort = nSetPort;

		trace("[INFO]Websocket tpl_Connect Port 0 : " + nOpenPort);
	}
	else
	{
		trace("[INFO]Websocket tpl_Connect Port 1 : " + nOpenPort);
	}

	if (nOpenPort > 0)
	{
		trace("[INFO]Websocket tpl_Connect Port 2 : " + nOpenPort);
	}
	else
	{
		nOpenPort = nMinPort;

		trace("[INFO]Websocket tpl_Connect Port 3 : " + nOpenPort);
	}

	//cache 방지용
	var timestamp = "/" + new Date().getTime();
	var path = strOpenUrl + ":" + nOpenPort + strOpenUrlAddPath + timestamp;

	if ("WebSocket" in window)
	{
		objWebSocket = new WebSocket(path);
	}
	else if ("MozWebSocket" in window)
	{
		objWebSocket = new MozWebSocket(path);
	}

	trace("[INFO]Websocket fnInitLauncherServiceForWebSocket Path : " + path);

	objWebSocket.onopen = function(evt) { websocket_onopen(evt) };
	objWebSocket.onclose = function(evt) { websocket_onclose(evt) };
	objWebSocket.onmessage = function(evt) { websocket_onmessage(evt) };
	objWebSocket.onerror = function(evt) { websocket_onerror(evt) };
}

//웹 소켓 접속 해제 함수
function fnCloseWebSocket()
{
	if(objWebSocket)
	 {
		objWebSocket.close();
		objWebSocket = null;

		//localstorage 삭제
		localStorage.removeItem("isAttempt");
	 }
}

//웹소켓 onOpen 이벤트 발생
function websocket_onopen(evt)
{
	trace("[INFO]WebSocket Connect : Success");
	fnSendData(true);
}

//웹소켓 onClose 이벤트 발생
function websocket_onclose(evt)
{
	fnCloseWebSocket();
	trace("[INFO]WebSocket DisConnect : Success");
}

//웹소켓 onMessage 이벤트 발생
function websocket_onmessage(evt)
{
	var data = evt.data;

	if(fnCheckResultData(data))
	{
		trace("[INFO]Websocket Return onMessage : " + data);
		fnCallBackSendData();
	}
	else
	{
		websocket_onerror();
	}
}

//웹소켓 onError 이벤트 발생
function websocket_onerror(evt)
{
	trace("[ERROR]Websocket onerror action : " + objNexacro.action + " oepnport : "+nOpenPort);

	if (objNexacro.action == 'create')
	{
		var strIsAttempt = localStorage.getItem("isAttempt");

		if(strIsAttempt==null || strIsAttempt=="error")
		{
			localStorage.setItem("isAttempt", "ok"); // TPLSvc 파일 다운로드 flag 값
			fnDownloadLauncher();
		}
		else
		{
			if (nSetPort > 0)
			{
				nSetPort = 0;
			}

			nOpenPort++;

			if (nOpenPort <= nMaxPort)
			{
				trace("[ERROR]Websocket onerror action : " + objNexacro.action + " oepnport : "+nOpenPort);

				objWebSocket = null;
				fnInitLauncherServiceForWebSocket();
				}
			else
			{
				localStorage.setItem("isAttempt", "error");

				trace("[ERROR]프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");

				fnIstalledMsg("error","프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
			}
		}
	}
	else
	{
		fnIstalledMsg("error","[ERROR] action : " + objNexacro.action +  "oepnport : "+ nOpenPort);
	}
}
