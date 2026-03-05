//XJS=x-agent.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //----------- 전역 변수 ------------//
        this.CmpName = "XA_ExtCommon";
        this.isConnected = false;
        //xagent license url
        this.webRootUrl = nexacro.getApplication().webRootUrl;
        this.xagent_license_url_http = this.webRootUrl + "X-Agent/license_xagent.xml"; //"http://localhost:8080/NEXACRO-BMT/X-Agent/license_xagent.xml";//http://localhost:8080/NEXACRO-BMT/5000label_combo.html
        this.xagent_license_url_https = this.webRootUrl + "X-Agent/license_xagent.xml"; //"https://tech.tobesoft.com:8443/N24_XAgent_Demo_2.0/license_xagent.xml";
        //xagent update url
        this.xagent_update_url_http = ""//"http://tech.tobesoft.com:8080/N24_XAgent_Demo_2.0/modules/";
        this.xagent_update_url_https = ""//"https://tech.tobesoft.com:8443/N24_XAgent_Demo_2.0/modules/";
        //===== project 명칭 ===============
        this.projectName = "nexacro.xagent.moduleSample";
        //----------- 전역 변수 end --------//


        /************************************************************************
         * [new nexacro.XAgent()] 동적으로 생성 시 아래 코드 활성화 하세요.
        ************************************************************************/
        this._xAgent_connect = function()
        {
        	var navigatorFullName = system.navigatorfullname;

        	if (( navigatorFullName === "Nexacro N Engine (x86)") || ( navigatorFullName === "Nexacro N Engine (x64)"))
        	{
        		//WebSocket object 는 Nexcro N 부터 사용가능.
        		alert("Nexacro WRE(Web Runtime Environment Browser: Chrome, FireFox, MS Edge, Opera) 및 NRE(Nexacro Runtime Environment Version: 24.0.0.200 / 2024.2.27.1 부터)에서 사용 가능 합니다.");
        		//return;
        	}

        	if(!this["XAgent00"])
        	{
        		//----------------------------------------------------------------
        		// 생성
        		//----------------------------------------------------------------
        		this.addChild("XAgent00", new nexacro.XAgent())
        		//통신 설정
        		//XAgent 의 설정 구조체 입니다.
        		//----------------------------------------------------------------//
        		//xagent 2.0부터 connect 시 프로젝트 json 파일 생성
        		if(nexacro.getApplication().xadl.toLowerCase().indexOf("https://")>=0)
        		{
        			this.XAgent00.set_port(49031);
        			this.XAgent00.set_protocol("wss");
        			this.XAgent00.set_project(this.projectName);
        			this.XAgent00.set_license(this.xagent_license_url_https);
        			this.XAgent00.set_updateurl(this.xagent_update_url_https);
        		}
        		else
        		{
        			this.XAgent00.set_port(49020);
        			this.XAgent00.set_protocol("ws");
        			this.XAgent00.set_project(this.projectName);
        			this.XAgent00.set_license(this.xagent_license_url_http);
        			this.XAgent00.set_updateurl(this.xagent_update_url_http);
        		}

        		this.XAgent00.addEventHandler( "onerror", this.XAgent00_onerror , this );
        		this.XAgent00.addEventHandler( "onsuccess", this.XAgent00_onsuccess , this );


        	}
        	else
        	{
        		alert("XAgent00 컴포넌트가 이미 생성되어 있습니다.");
        	}

        	/*
        	 *	X-Agent Connect
        	 */

        	this.XAgent00.connect();
        };

        /*
         *	파일쓰기
         */
        this._xAgent_writeFile = function(sFileName, sText)
        {
        	var moduleName = this.CmpName;
        	var funName = "_writeFile";

        	var arg1 = sFileName;
        	var arg2 = sText;
        	var arg3 = "utf-8";
        	var arg4 = "1";	//arg4 (integer) : write 시 덮어쓰기 혹은 이어쓰기 선택 ( 0 : default, 덮어쓰기 / 1 : 이어쓰기 )

        	if(this.gfn_isNull(arg1))
        	{
        		alert("write 할 파일명을 입력하세요.");
        		return;
        	}
        	if(this.gfn_isNull(arg2)) arg2 = "";
        	if(this.gfn_isNull(arg3)) arg3 = "";

        	var arg4_toNum = nexacro.toNumber(arg4);
        	if(arg4_toNum < 0) { arg4_toNum = 0; }
        	//JSON Array Object

        	var paramArrayValue = [arg1, arg2, arg3, arg4_toNum];
        	var paramObj = { "parameters": {"ArrayVal": paramArrayValue}};

        	this.XAgent00.execute(moduleName, funName, paramObj);
        };

        /*
         *	파일읽기
         */
        this._xAgent_readFile = function(sFileName)
        {
        	var moduleName = this.CmpName;
        	var funName = "_readFile";

        	var arg1 = sFileName;
        	var arg2 = 0;	//arg2 (integer) : read 할 파일이 바이너리 파일인지 여부 : (0 : defalut : 텍스트 파일 / 1: 바이너리 파일)

        	if(this.gfn_isNull(arg1))
        	{
        		alert("read 할 파일 경로를 입력하세요.");
        		return;
        	}

        	if(this.gfn_isNull(arg2)) arg2 = "0";

        	var arg2_toNum = nexacro.toNumber(arg2);

        	//JSON Array Object
        	var paramArrayValue = [arg1, arg2_toNum];
        	var paramObj = { "parameters": {"ArrayVal": paramArrayValue}};

        	this.XAgent00.execute(moduleName, funName, paramObj);
        };


        /*
         *	디렉토리 체크
         */
        this._xAgent_checkDirectory = function(filePath, bForce)
        {
        	var moduleName = this.CmpName;
        	var funName = "_checkDirectory";

        	var arrFilePath = filePath.split('\\');
        	var length 		= arrFilePath.length;

        	if(arrFilePath[length-1].indexOf('.')) {
        		arrFilePath.pop();
        	}
        	filePath = arrFilePath.join('\\')

        	var arg1 = filePath;
        	var arg2 = bForce ? 1 : 0;	//arg2 (integer) : 해당 폴더가 존재하지 않을 시, 생성 여부 : (0 : default, 생성하지 않음 / 1 : 생성)

        	if(this.gfn_isNull(arg1))
        	{
        		alert("폴더 경로를 입력하세요.");
        		return;
        	}

        	if(this.gfn_isNull(arg2)) arg2 = "0";

        	var arg2_toNum = nexacro.toNumber(arg2);

        	//JSON Array Object
        	var paramArrayValue = [arg1, arg2_toNum];
        	var paramObj = { "parameters": {"ArrayVal": paramArrayValue}};

        	this.XAgent00.execute(moduleName, funName, paramObj);
        };









        /************************************************************************
         * X-Agent Events ....
         ************************************************************************/
        this.XAgent00_onerror = function (obj, e)
        {
        	let text = "";
        	text += "\n ****** XAgent00_onerror ****** \n";
        	text += "onerror eventid : " + e.eventid + "\n";
        	text += "onerror errorcode : " + e.errorcode + "\n";
        	text += "onerror errormsg : " + e.errormsg + "\n";
        	text += "onerror data : " + e.data + "\n";

        	if (typeof e.data == 'object')
        	{
        		text += "onerror data string: " + JSON.stringify(e.data) + "\n";
        	}

        	text += "\n";
        	///////////////////////
        	alert(text);
        	//////////////////////
        };

        this.XAgent00_onsuccess = function (obj, e)
        {
        	this.LogOut("\n ****** XAgent00_onsuccess ****** \n");
        	this.LogOut("onsuccess eventid : " + e.eventid);
        	this.LogOut("onsuccess statusmessage : " + e.statusmessage);
        	this.LogOut("onsuccess reason : " + e.reason);
        	this.LogOut("onsuccess modulename : " + e.modulename);
        	this.LogOut("onsuccess modulefunc : " + e.modulefunc); //xagent 2.0부터 추가됨
        	this.LogOut("onsuccess param : " + e.param);

        	if (typeof e.param == 'object')
        	{
        		this.LogOut("onsuccess param string: " + JSON.stringify(e.param));
        	}

        	this.LogOut("\n");
        	////////////////////////////

        	///////////////////////////
        	if( e.reason == "connect" )
        	{
        		/*
        		Recv Data Json Format
        		{
        		  "response": {
        			"connect": {
        			  "module": "XAgent",
        			  "func": "connect",
        			  "uid": "1727328021819_82_b5",
        			  "version": "2.0.100.0",
        			  "result": [0, "object_xagent_success_connect"],
        			  "param": "2.0.100.0"
        			}
        		  }
        		}

        		*/
        		this.LogOut("\n ****** CONNECT onsuccess ****** \n");
        		this.LogOut("제어판에 등록되어진 XAgent Version: [ " + e.param + " ] 입니다.");

        		var XAgentServerVersion = nexacro.replaceAll(e.param, ".", "");
        		var nVer = nexacro.toNumber(XAgentServerVersion);
        		this.LogOut("Number Format XAgent Version: [ " + nVer + " ] 입니다.");
        		this.isConnected = true;

        		this.XAgentConnect_onsuccess ? this.XAgentConnect_onsuccess(obj, e) : null;
        	}
        	else if( e.reason == "disconnect")
        	{
        		this.isConnected = false;
        	}
        	//else if( e.reason == "project" )
        	else if( e.reason == "configure" ) //xagent 2.0부터 변경됨
        	{
        		/*
        		Recv Data Json Format
        		{
        		  "response": {
        			"configure": {
        			  "module": "XAgent",
        			  "func": "configure",
        			  "uid": "1727328040429_96_bd",
        			  "result": [0, "object_xagent_success_configure"]
        			}
        		  }
        		}
        		*/
        		this.LogOut("\n ****** Project 설정 onsuccess ****** \n");
        	}
        	else if( e.reason == "version" )
        	{
        	/*
        	Recv Data Json Format
        	{
        	  {
        		  "response": {
        			"version": {
        			  "module": "XAgent",
        			  "func": "version",
        			  "uid": "1727328047621_f5_bc",
        			  "result": [0, "object_xagent_success_version"],
        			  "param": {
        				"server": "2.0.100.0",
        				"modules": [
        				  {
        					"name": "XA_ExtCommon",
        					"version": "2024.4.19.1",
        					"project": "nexacro.xagent.moduleSample",
        					"description": "XAgent ExtCommon module DLL"
        				  }
        				]
        			  }
        			}
        		  }
        		}
        	*/

        		var aryVerinfo = e.param;
        		var serverInfo = aryVerinfo.server;
        		var objModuleInfo = aryVerinfo.modules;

        		this.LogOut("\n ****** 버전 정보 확인 onsuccess ****** \n");
        		this.LogOut("XAgent Ver: " + serverInfo);

        		var nlen = objModuleInfo.length;

        		for (var npos=0; npos < nlen; npos++)
        		{
        			var oModuleinfo = objModuleInfo[npos];
        			this.LogOut("Module Nmae " + oModuleinfo.name  );
        			this.LogOut("Module Verson: " + oModuleinfo.version) ;
        			this.LogOut("Module Project: " + oModuleinfo.project) ;
        			this.LogOut("Module description: " + oModuleinfo.description) ;

        			var CmpVer = nexacro.replaceAll(oModuleinfo.version, ".", "");
        			var nVer = nexacro.toNumber(CmpVer);
        			this.LogOut("Number Format Component DLL Version: [ " + nVer + " ] 입니다.");
        		}
        	}
        	else if( e.reason == "update-module" )
        	{
        		/*
        		Recv Data Json Format
        		{
        		  "response": {
        			"update-module": {
        			  "module": "XAgent",
        			  "func": "update-module",
        			  "uid": "1727328044645_0c_8e",
        			  "result": [0, "object_xagent_success_module_update"],
        			  "param": {
        				"update-module": [
        				  {
        					"name": "XA_ExtCommon",
        					"version": "2024.4.19.1",
        					"project": "nexacro.xagent.moduleSample"
        				  }
        				]
        			  }
        			}
        		  }
        		}
        		*/

        		this.LogOut("update-module 성공입니다.");

        		this.LogOut("module name : " + e.param["update-module"][0].name);
        		this.LogOut("module version : " + e.param["update-module"][0].version);
        		this.LogOut("module project : " + e.param["update-module"][0].project);
        	}
        	else if (e.reason == "execute")
        	{

        		//2024.2.28 임시 처리.. 컴포넌트 호출 했던 함수를 알 수 없음. 그리고, 사용자 콜백함수도 지정할 수 없음.
        		// 임시로 모듈 이름에 호출했던 함수 명 지정.
        		//modulename = _jsondata.module; 원본.
        		var sFunc = e.modulefunc;
        		//alert(sFunc);

        		//param
        		var paramObj = e.param; //Array
        		if (paramObj != null)
        		{
        			//this.LogOut("★★★★★★★★★ paramObj : " + JSON.stringify(paramObj));
        			//paramObj[0] <<< xagent command id.
        			//paramObj[1] <<< 컴포넌트에서 리턴 받은 데이터.
        			var objRetValue = paramObj[1]; //object JSON
        			this.LogOut("★★★called function : <" + sFunc + "> ★★★");
        			this.LogOut("★★★[status]★★★ \n" + objRetValue.status );	//integer
        			this.LogOut("★★★[message]★★★ \n" + objRetValue.message );	//string
         			this.LogOut("★★★[ReturnValue]★★★ \n" + objRetValue.ReturnValue); //array
        			this.LogOut("\n");

        			var errCode = objRetValue.status;
        			var errMsg	= objRetValue.message;
        			var returnData = objRetValue.ReturnValue;

        			this.lg_call_res("★★★함수명 : [ " + sFunc + " ]★★★");

        			if(sFunc == "_windowSendMSG")
        			{
        				//-----------------------------------------------------
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.
        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0]
        				// 핸들 : 0 보다 크면 성공, -1 이면 실패.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        				}
        				else
        				{
        					//Return Data : 1개.
        					//-- SendMessage 한 해당 프로세스 핸들.
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("프로세스 핸들 : " + returnData[0]);
        				}
        			}
        			else if(sFunc == "_checkDirectory")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패.
        				//returnData[1] 존재 여부를 확인하였던 경로.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("폴더가 존재하지 않음");
        					this.lg_call_res("확인 경로 :" + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("폴더가 존재함");
        					this.lg_call_res("확인 경로 : " + returnData[1]);



        				}
        			}
        			else if(sFunc == "_executeProcess")
        			{
        				//-----------------------------------------------------
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.
        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패.
        				//returnData[1] 실행 하였던 경로 및 프로세스명.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 message : " + errMsg);
        					this.lg_call_res("프로세스 실행 실패");
        					this.lg_call_res("실행했던 경로 및 프로세스명 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("프로세스 실행 성공");
        					this.lg_call_res("실행했던 경로 및 프로세스명 : " + returnData[1]);
        				}
        			}
        			else if(sFunc == "_readFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (4개)
        				//returnData[0] : 1이면 성공, -1이면 실패
        				//returnData[1] : 입력했던 경로.
        				//returnData[2] : 성공 시 read 데이터 , 함수 호출 실패 시 에러메시지
        				//returnData[3] : 바이너리 데이터 여부 : 0 : 텍스트 데이터 , 1 : 바이너리 데이터 (Base64 encode)
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("파일 읽기 실패");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        					this.lg_call_res("에러 메시지 : " + returnData[2]);
        					this.lg_call_res("바이너리 파일 여부 (0 : 텍스트 파일 / 1 :바이너리 파일) : " + returnData[3]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공" + errCode);
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("파일 읽기 성공");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]) ;
        					//this.LogOut("Success _readFile Data : ");
        					var datasize = returnData[2].length;

        					this.lg_call_res("바이너리 파일 여부 (0 : 텍스트 파일 / 1 :바이너리 파일) : " + returnData[3]);
        					var isBinary = returnData[3];

        					if(isBinary > 0)
        					{
        						this.lg_call_res("---- binary data ----");
        						this.lg_call_res("binary data는 출력 창에 표시하지 않음. 파일 포멧에 따라 처리");
        						this.lg_call_res("시연 페이지에서는 이미지 파일을 read 했다고 가정하며, 이미지 뷰어에 표시함");

        						//image file
        // 						this.ImageViewer00.image = returnData[2]; //base64 encoded data to image
        // 						this.ImageViewer00.stretch = 'fit';
        					}
        					else
        					{
        						this.lg_call_res("---- text data ----");
        						if( datasize > (10240*2))
        						{
        							this.lg_call_res("Data Size가 너무커서 출려 창에는 표시 하지 않음");
        							this.lg_call_res("TextArea 에 출력 할 경우, 메모리가 증가로 인해, [Out Of Memory] 발생");
        							this.lg_call_res("Recv Data Size: " + returnData[2].length);

        							var svd = returnData[2];
        							var output = svd.substring(datasize-10, datasize);
        							this.lg_call_res("확인용으로 뒤에서 10자리만 출력 : " + output);

        						}
        						else
        						{
        							this.lg_call_res("Data : " + returnData[2]);
        							this.XAgentReadFile_onsuccess ? this.XAgentReadFile_onsuccess(returnData[0], returnData[1], returnData[2], returnData[3]) : null;
        						}
        					}
        				}
        			}
        			else if(sFunc == "_writeFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패.
        				//returnData[1] 입력 확인하였던 경로.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("파일 쓰기 실패");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);

        					this._xAgent_checkDirectory(returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					this.lg_call_res("파일 쓰기 성공 " + returnData[0]);
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        				}
        			}
        			else if(sFunc == "_deleteFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 입력 확인하였던 경로.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("파일 삭제 실패");
        					this.lg_call_res("입력했던 경로 :" + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					this.lg_call_res("파일 삭제 성공");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        				}
        			}
        			else if(sFunc == "_existFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 입력 확인하였던 경로.
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("파일 없음");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					this.lg_call_res("파일 있음");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        				}
        			}
        			else if(sFunc == "_findProcessInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 프로세스정보 [array][array] (11개)
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("프로세스 정보 확인 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("프로세스 정보 확인 성공");

        					this.lg_call_res("찾은 프로세스 갯수 : " + returnData[1].length);
        					for( var nMainInx=0; nMainInx < returnData[1].length; nMainInx++)
        					{
        						var szInfo = returnData[1][nMainInx];
        						this.lg_call_res("***********************************************");
        						//[0] : process id
        						this.lg_call_res("Process ID: " + szInfo[0]);

        						//[1] : process id For Windows Handle
        						this.lg_call_res("Process ID For Windows Handle : " + szInfo[1]);
        						//[2] : process path
        						this.lg_call_res("Process Path : " + szInfo[2]);
        						//[3] : process Windows Title Name
        						this.lg_call_res("Process Windows Title Name : " + szInfo[3]);
        						//=================================================//
        						//[4] : process 파일 속성(설명)
        						this.lg_call_res("Process File Dec: " + szInfo[4]);
        						//[5] : process 파일 속성(버전)
        						this.lg_call_res("Process File Version : " + szInfo[5]);
        						//[6] : process 파일 속성(interalname)
        						this.lg_call_res("Process Interalname : " + szInfo[6]);
        						//[7] : process 파일 속성(회사명)
        						this.lg_call_res("Process Company Name : " + szInfo[7]);
        						//[8] : process 파일 속성(Copyright)
        						this.lg_call_res("Process Copyright : " + szInfo[8]);
        						//[9] : process 파일 속성(orignal file name)
        						this.lg_call_res("Process orignal file name : " + szInfo[9]);
        						//[10] : process 파일 속성(product name)
        						this.lg_call_res("Process product name : " + szInfo[10]);
        						//[11] : process 파일 속성(product version)
        						this.lg_call_res("Process product version : " + szInfo[11]);
        						//=================================================//
        					}
        				}
        			}
        			else if(sFunc == "_getFileList")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] : 성공 시 1, 실패 시 -1
        				//returnData[1] : 성공 : 검색되어진 파일 or 폴더 (array) / 실패 : 입력했던 경로 (string)
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("파일 또는 폴더를 찾을 수 없음");
        					this.lg_call_res("입력했던 경로 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("파일 또는 폴더를 찾음");
        					this.lg_call_res("찾은 FileList 갯수 : " + returnData[1].length);
        					for( var nMainInx=0; nMainInx < returnData[1].length; nMainInx++)
        					{
        						this.lg_call_res("찾은 파일 혹은 폴더명["+nMainInx+"] : " + returnData[1][nMainInx]);
        					}
        				}
        			}
        			else if(sFunc == "_getInternetConnectedState")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] : 성공 시 1, 실패 시 -1
        				//returnData[1] : 메시지

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("인터넷 연결되어 있지 않음");
        					this.lg_call_res("메시지 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("인터넷 연결된 상태 : " + retValueMsg);
        					}
        					else
        					{
        						this.lg_call_res("인터넷 연결되지 않은 상태 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_getSystemDir")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] : 성공 시 1, 실패 시 -1
        				//returnData[1] : 리턴된 경로

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("경로 확인 실패");
        					this.lg_call_res("리턴된 경로 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("리턴된 경로 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_getAdapterInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 어뎁터 정보 (array)(array) (7개)
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("어뎁터 정보 획득 실패");

        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var objInfo = returnData;
        					var retValue = objInfo[0];

        					var retAdpObj = objInfo[1];

        					this.lg_call_res("찾은 어뎁터 개수 : " +retAdpObj.length);

        					if( retValue )
        					{
        						for( var nMainInx=0; nMainInx < retAdpObj.length; nMainInx++)
        						{
        							var Adpinfo = retAdpObj[nMainInx];
        							this.lg_call_res("***********************************************");
        							//[0] : naem
        							this.lg_call_res("Adp Name: " + Adpinfo.name);
        							//[1] : dec
        							this.lg_call_res("Adp dec : " + Adpinfo.dec);
        							//[2] : type
        							this.lg_call_res("Adp type : " + Adpinfo.type);
        							//[3] : gateway
        							this.lg_call_res("Adp gateway : " + Adpinfo.gateway);
        							//=================================================//
        							//[4] : ip
        							this.lg_call_res("Adp Ip: " + Adpinfo.ip);
        							//[5] : mask
        							this.lg_call_res("Adp Mask : " + Adpinfo.mask);
        							//[6] : mac
        							this.lg_call_res("Adp mac : " + Adpinfo.mac);
        							//=================================================//
        						}
        					}
        					else
        					{
        						this.lg_call_res("어뎁터 정보를 찾지 못했습니다.");
        					}
        				}
        			}
        			else if(sFunc == "_delDirectoryAll")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 삭제된 경로

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("삭제 실패");
        					this.lg_call_res("입력한 경로 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("삭제 성공");
        						this.lg_call_res("삭제된 경로 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_reNameFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 변경하려 한 파일명

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("파일명 변경 실패");
        					this.lg_call_res("변경하려 한 파일명 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("파일명 변경 성공");
        						this.lg_call_res("변경하려고 한 파일명 :" + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_copyFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 복사하려 한 파일명

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("파일 복사 실패");
        					this.lg_call_res("복사하려 한 파일명 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("파일 복사 성공");
        						this.lg_call_res("복사하려고 한 파일명 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_moveFile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 이동하려 한 파일명

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("파일 이동 실패");
        					this.lg_call_res("이동하려 한 파일명 : " + returnData[1]);
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("파일 이동 성공");
        						this.lg_call_res("이동하려 한 파일명 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_getFindWindows")
        			{
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("윈도우 핸들 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("윈도우 핸들 획득 성공");
        						this.lg_call_res("윈도우 핸들 :  " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_setRegValue")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("레지스트리 경로에 값 지정 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];

        					if(retValue)
        					{
        						this.lg_call_res("레지스트리 경로에 값 지정 성공 : " + retValue);
        					}
        					else
        					{
        						this.lg_call_res("레지스트리 경로에 값 지정 실패 : " + retValue);
        					}
        				}
        			}
        			else if(sFunc == "_getRegValue")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 취득한 값
        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("레지스트리 경로의 값 획득 실패");

        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];
        					var retValueMsg = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("레지스트리 경로의 값 획득 성공 : " + retValueMsg);
        					}
        					else
        					{
        						this.lg_call_res("레지스트리 경로의 값 획득 실패 : " + retValueMsg);
        					}
        				}
        			}
        			else if(sFunc == "_killProcessById")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("프로세스 종료 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];

        					if(retValue)
        					{
        						this.lg_call_res("프로세스 종료 성공");
        					}
        				}
        			}
        			else if(sFunc == "_killProcessAll")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("프로세스 종료 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retValue = returnData[0];

        					if(retValue)
        					{
        						this.lg_call_res("프로세스 종료 성공");
        					}
        				}
        			}
        			else if(sFunc == "_FileDialogEx")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 이 1 이면 성공, -1 이면 실패
        				//returnData[1] 선택되어진 파일 경로 (array)(string)

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("선택한 파일 없음");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var retLen = returnData[1].length;
        					if(retLen > 0)
        					{
        						for(var inx in returnData[1] )
        						{
        							this.lg_call_res("선택된 파일 경로[" + inx +"] : " + returnData[1][inx]);
        						}
        					}
        				}
        			}
        			else if(sFunc == "_getHostName")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 취득한 pc 이름, 실패 시 empty

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("pc name 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var szHostName = returnData[0];

        					this.lg_call_res("pc name 획득 성공");
        					this.lg_call_res("pc name 값 : " + szHostName);
        				}
        			}
        			else if(sFunc == "_getUserName")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 취득한 pc 계정명, 실패 시 empty

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);

        					this.lg_call_res("pc 계정명 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);

        					var szHostName = returnData[0];

        					this.lg_call_res("pc 계정명 획득 성공");
        					this.lg_call_res("pc 계정명 값 : " + szHostName);
        				}
        			}
        			else if(sFunc == "_setInternetSetCookie")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 1, 실패 시 -1

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("쿠키 정보 설정 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("쿠키 정보 설정 성공");
        				}
        			}
        			else if(sFunc == "_getInstallProg")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] ProgID 또는 CLSID가 설치되어 있다면 1, 설치되어 있지 않다면 -1

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("ProgID 또는 CLSID가 설치되어 있지 않음");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("ProgID 또는 CLSID가 설치되어 있음");
        				}
        			}
        			else if(sFunc == "_getComPortList")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] 성공 시 connect 되지 않았고, 사용 가능한 COM port 리스트, 실패 시 empty

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("connect 되지 않았고, 사용 가능한 COM port 리스트 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("connect 되지 않았고, 사용 가능한 COM port 리스트 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						for(var i = 0; i < retValue.length; i++)
        						{
        							this.lg_call_res("COM port ["+(i+1)+"] : " + retValue[i]);
        						}
        					}
        				}
        			}
        			else if(sFunc == "_getFileInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 파일 정보, 각 항목 중에서 획득하지 못한 정보는 empty, 실패 시 모든 항목 empty
        				/*
        				확인 가능한 파일 정보 (Type : string)
        					[1].desc : 파일 설명
        					[1].version : 파일 버전
        					[1].internalName : 파일 internal name
        					[1].companyName : 파일 회사명
        					[1].copyright : 파일 copyright
        					[1].originalFileName : 파일 original file name
        					[1].productName : 파일 product name
        					[1].productVersion : 파일 product version
        					[1].fileSize : 파일 크기 (단위 : byte)
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("파일 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("파일 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("------------- file info --------------");
        						this.lg_call_res("file Description : " + retValue.desc);
        						this.lg_call_res("file version : " + retValue.version);
        						this.lg_call_res("file internal name : " + retValue.internalName);
        						this.lg_call_res("file company name : " + retValue.companyName);
        						this.lg_call_res("file copyright : " + retValue.copyright);
        						this.lg_call_res("file original file name : " + retValue.originalFileName);
        						this.lg_call_res("file product name : " + retValue.productName);
        						this.lg_call_res("file product version : " + retValue.productVersion);
        						this.lg_call_res("file Size : " + retValue.fileSize + "[byte]");
        					}
        				}
        			}
        			else if(sFunc == "_getPrimaryHDDSerial")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 해당 물리디스크 정보, 실패 시 empty
        				/*
        				확인 가능한 물리디스크 정보 (Type : string) : 각 항목 중에서 확인되지 않은 정보는 “Fail”로 반환됨
        					[1].serialNo : 하드디스크 시리얼 번호
        					[1].productId : 제품 아이디
        					[1].revision : 제품 버전 정보
        					[1].vendorId : 벤더사 아이디
        					[1].busType : 연결 방식 [SCSI, ATAPI, ATA, IEEE1394, BusTypeSsa, BusTypeFibre, USB, RAID, iSCSI, SerialATA, SD, MMC, Not Found ] 중 하나.
        					[1].removableMedia : 제거 가능 여부 (“true” or “false”)
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("물리 하드디스크 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("물리 하드디스크 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("------------- hdd info --------------");
        						this.lg_call_res("hdd Serial Number : " + retValue.serialNo);
        						this.lg_call_res("hdd product id : " + retValue.productId);
        						this.lg_call_res("hdd product version info : " + retValue.revision);
        						this.lg_call_res("hdd vendor id : " + retValue.vendorId);
        						this.lg_call_res("hdd Bustype : " + retValue.busType);
        						this.lg_call_res("hdd RemovableMedia : " + retValue.removableMedia);
        					}
        				}
        			}
        			else if(sFunc == "_getGlobalMemoryStatusEx")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 메모리 상태, 실패 시 empty
        				/*
        				성공 시 확인 가능한 메모리 상태 정보 (Type : integer)
        					[1].TotalPhys : 시스템에 설치된 물리 메모리의 총 바이트 수를 나타낸다. (물론 정확한 값보다 조금 낮다. 이유는 부팅 과정에서 논페이지 풀을 위한 저장소를 일부 예약해 두는데, 이 메모리는 커널에 의해서도 가용 메모리로 고려되지 않는 메모리다. ) (단위 : KB)
        					[1].AvailPhys : 할당 가능한 물리적 메모리의 전체 크기를 가리킨다. (단위 : KB)
        					[1].TotalPageFile : 하드 디스크상에 존재하는 페이징 파일이 수용할 수 있는 최대 바이트 수를 나타낸다. (단위 : KB)
        					[1].AvailPageFile : 현재까지 커밋 되지 않은 ( 실질적 으로 이용 가능한) 페이징 파일 크기를 가리킨다. (단위 : KB)
        					[1].TotalVirtual : 각 프로세스 주소 공간 내의 전체 메모리 크기를 나타낸다. (단위 : KB)
        					[1].AvailVirtual : 이 값은 각 프로세스 주소 공간의 사용 가능한 메모리크기를 나타낸다. (단위 : KB)
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("pc 메모리 상태 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("pc 메모리 상태 획득 성공");
        					var retValue = returnData[1];
        					if(retValue)
        					{
        						this.lg_call_res("------------- memory info --------------");
        						this.lg_call_res("Total Physical Memory : " + retValue.TotalPhys + "KB");
        						this.lg_call_res("Free Physical Memory : " + retValue.AvailPhys + "KB");
        						this.lg_call_res("Total Virtual Memory (Physical + Page Files size) : " + retValue.TotalPageFile + "KB");
        						this.lg_call_res("Virtual Memory : " + retValue.AvailPageFile + "KB");
        						this.lg_call_res("Total Addr. Space (Current Process) : " + retValue.TotalVirtual + "KB");
        						this.lg_call_res("Free Addr. Space (Current Process) : " + retValue.AvailVirtual + "KB");
        					}
        				}
        			}
        			else if(sFunc == "_getDesktopWorkArea")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 메인 화면의 작업 영역 정보 , 실패 시 empty
        				/*
        				확인 가능한 메인 화면 작업 영역 정보 (Type : integer)
        					[1].left : 메인 화면 작업 영역 left 좌표
        					[1].top : 메인 화면 작업 영역 top 좌표
        					[1].right : 메인 화면 작업 영역 right 좌표
        					[1].bottom : 메인 화면 작업 영역 bottom 좌표
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("메인 화면의 작업 영역 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("메인 화면의 작업 영역 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("------------- Work Area info --------------");
        						this.lg_call_res("작업 영역 left : " + retValue.left);
        						this.lg_call_res("작업 영역 top : " + retValue.top);
        						this.lg_call_res("작업 영역 right : " + retValue.right);
        						this.lg_call_res("작업 영역 bottom : " + retValue.bottom);
        					}
        				}
        			}
        			else if(sFunc == "_getTraySizeInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 상태 표시줄 영역과 트레이 영역 정보, 실패 시 empty

        				/*
        				확인 가능한 상태 표시줄 영역과 트레이 영역 정보 (Type : integer)
        					[1].barLeft : 상태 표시줄 영역 left 좌표
        					[1].barTop : 상태 표시줄 영역 top 좌표
        					[1].barRight : 상태 표시줄 영역 right 좌표
        					[1].barBottom : 상태 표시줄 영역 bottom 좌표
        					[1].trayLeft : 트레이 영역 left 좌표
        					[1].trayTop : 트레이 영역 top 좌표
        					[1].trayRight : 트레이 영역 right 좌표
        					[1].trayBottom : 트레이 영역 bottom 좌표
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("상태 표시줄 영역과 트레이 영역 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("상태 표시줄 영역과 트레이 영역 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("------------- 상태 표시줄 및 트레이 영역 info --------------");
        						this.lg_call_res("상태 표시줄 영역 left : " + retValue.barLeft);
        						this.lg_call_res("상태 표시줄 영역 top : " + retValue.barTop);
        						this.lg_call_res("상태 표시줄 영역 right : " + retValue.barRight);
        						this.lg_call_res("상태 표시줄 영역 bottom : " + retValue.barBottom);
        						this.lg_call_res("트레이 영역 left : " + retValue.trayLeft);
        						this.lg_call_res("트레이 영역 top : " + retValue.trayTop);
        						this.lg_call_res("트레이 영역 right : " + retValue.trayRight);
        						this.lg_call_res("트레이 영역 bottom : " + retValue.trayBottom);
        					}
        				}
        			}
        			else if(sFunc == "_getDriveInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (array) 성공 시 현재 PC의 드라이버 정보 array, 실패 시 empty
        				//               데이터 형식 : 드라이버명 | 드라이버 타입

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("현재 pc의 드라이버 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("현재 pc의 드라이버 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						var nlen = retValue.length;
        						var i;
        						this.lg_call_res("------------- Drive info --------------");
        						for(i = 0; i < nlen; i++)
        						{
        							this.lg_call_res(retValue[i]);
        						}
        					}
        				}
        			}
        			else if(sFunc == "_getFileDateInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (json object) 성공 시 파일 정보, 실패 시 empty
        				/*
        				확인 가능한 파일 정보 (Type : string)
        					[1].create : 만든 날짜 (년,월,일,시분초)
        					[1].access : 수정 날짜 (년,월,일,시분초)
        					[1].write : 저장 날짜 (년,월,일,시분초)
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("파일 정보 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("파일 정보 획득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						this.lg_call_res("------------- 파일 생성/수정/저장 날짜 info --------------");
        						this.lg_call_res("만든 날짜 : " + retValue.create);
        						this.lg_call_res("수정 날짜 : " + retValue.access);
        						this.lg_call_res("저장 날짜 : " + retValue.write);
        					}
        				}
        			}
        			else if(sFunc == "_setSecuritySite")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 1, 실패 시 -1 , 실패 원인은 errMsg 참조

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("신뢰할 수 있는 사이트 등록 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("신뢰할 수 있는 사이트 등록 성공");
        				}
        			}
        			else if(sFunc == "_writeUProfile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 1, 실패 시 -1 , 실패 원인은 errMsg 참조

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("ini 파일 write 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("ini 파일 write 성공");
        				}
        			}
        			else if(sFunc == "_readUProfile")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] 성공 시 획득한 key 값, 실패 시 empty

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("ini 파일 key 값 획득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("ini 파일 key 값 획득 성공");
        					this.lg_call_res("획득한 key 값 : " +  returnData[1]);
        				}
        			}
        			else if(sFunc == "_createDirectory")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (1개)
        				//returnData[0] 성공 시 1, 실패 시 -1

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("특정 경로에 폴더 생성 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("특정 경로에 폴더 생성 성공");
        				}
        			}
        			else if(sFunc == "_getMonitorInfo")
        			{
        				//Return Data.
        				//errcode 	 [Typte : Integer]: 함수 호출 성공여부. ( 0 보다 작으면 실패 )
        				//errMsg 	 [Typte : String ]: 함수 호출 메시지.

        				//returnData [Typte : Array  ]: 리턴 데이터. (2개)
        				//returnData[0] 성공 시 1, 실패 시 -1
        				//returnData[1] (array) 성공 시 모니터 정보 array, 실패 시 empty
        				/*
        				array에 포함된 정보 설명
        					[1][0] (Type : integer) : 모니터 개수
        					[1][1] (Type : json object) : 가상 모니터 영역 정보
        					※ 확인 가능한 가상 모니터 영역 정보
        					[1][1].left : 가상 모니터 left 좌표
        					[1][1].top : 가상 모니터 top좌표
        					[1][1].right : 가상 모니터 right 좌표
        					[1][1].bottom : 가상 모니터 bottom 좌표
        					[1][2] (Type : json array) : 모니터 영역 정보, json array 에는 n대의 모니터 각각의 정보가 json object 로 포함됨. 정보 확인 방법은 syntax 참조
        					※ 확인 가능한 모니터 영역 정보
        					[1][2].left : 모니터 left 좌표
        					[1][2].top : 모니터 top 좌표
        					[1][2].right : 모니터 right 좌표
        					[1][2].bottom : 모니터 bottom 좌표
        					[1][2].isPrimary : 주 모니터 여부 : 1이면 주 모니터, 0 이면 sub 모니터
        				*/

        				if(errCode < 0)
        				{
        					this.lg_call_res("함수 호출 실패");
        					this.lg_call_res("함수 호출 실패 messgae : " + errMsg);
        					this.lg_call_res("현재 PC의 모니터 정보 취득 실패");
        				}
        				else
        				{
        					this.lg_call_res("함수 호출 성공");
        					this.lg_call_res("함수 호출 성공 messgae : " + errMsg);
        					this.lg_call_res("현재 PC의 모니터 정보 취득 성공");

        					var retValue = returnData[1];

        					if(retValue)
        					{
        						var count = retValue[0];
        						this.lg_call_res("-------------- monitor info --------------");
        						this.lg_call_res("모니터 대수 : " + count);
        						this.lg_call_res("-------------- 가상 모니터 영역 --------------");
        						this.lg_call_res("가상 모니터 left : " + retValue[1].left);
        						this.lg_call_res("가상 모니터 top : " + retValue[1].top);
        						this.lg_call_res("가상 모니터 right : " + retValue[1].right);
        						this.lg_call_res("가상 모니터 bottom : " + retValue[1].bottom);
        						this.lg_call_res("-------------- 각 모니터 좌표 --------------");

        						var k = 1;
        						for(var i = 2; i < count + 2; i++)
        						{
        							this.lg_call_res("----------"+k+"번째 모니터 정보 ------------");
        							this.lg_call_res(k+"번째 모니터 left : " + retValue[i].left);
        							this.lg_call_res(k+"번째 모니터 top : " + retValue[i].top);
        							this.lg_call_res(k+"번째 모니터 right : " + retValue[i].right);
        							this.lg_call_res(k+"번째 모니터 bottom : " + retValue[i].bottom);
        							this.lg_call_res(k+"번째 모니터 주 모니터 여부 : " + retValue[i].isPrimary);
        							k++;
        						}
        					}
        				}
        			}
        			else
        			{
        				this.lg_call_res("함수를 찾을 수 없습니다.");
        				this.lg_call_res("함수명 : " + sFunc );
        				this.lg_call_res("실패 code : " + errCode);
        				this.lg_call_res("실패 messgae : " + errMsg);

        				for(var i=0;i<returnData.length;i++)
        				{
        					this.lg_call_res("실패 Return Data : " + returnData[i]);
        				}
        			}
        		}
        		else
        		{
        			//함수 호출 실패. 에러 코드.
        			if(errCode == -111)
        			{
        				this.LogOut("Fail Error Module Name : " +  modulename);
        				this.LogOut("Fail Error function Name : " + sFunc );
        				this.LogOut("Fail Error code : " + errCode);
        				this.LogOut("Fail Error messgae : " + errMsg);
        				this.LogOut("Fail Return Data : " + returnData);
        			}
        			else
        			{
        				this.LogOut("Fail Error Module Name : " +  modulename);
        				this.LogOut("Service ID : " + sFunc );
        				this.LogOut("Fail Error code : " + errCode);
        				this.LogOut("Fail Error messgae : " + errMsg);

        				for(var i=0;i<returnData.length;i++)
        				{
        					this.LogOut("Fail Return Data : " + returnData[i]);
        				}
        			}
        		} //if (paramObj != null) else
        	} //  if (e.reason == "execute")
        };

        this.LogOut = function (outdata)
        {
        // 	this.txt_LogOut.insertText(outdata + "\n");
        // 	var s = this.txt_LogOut.vscrollbar.max;
        // 	this.txt_LogOut.vscrollbar.set_pos(s);

        //	console.log(outdata);
        }

        this.lg_call_res = function(data)
        {
        // 	this.tx_call_result.insertText(data + "\n");
        // 	var ss = this.tx_call_result.vscrollbar.max;
        // 	this.tx_call_result.vscrollbar.set_pos(ss);

        //	console.log(data)
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
