var Version = "20231116_01";
var _isWebsocketModuleV2 = false;// webSocketModuleVersion 키가 존재하면 새로운 웹소켓 모듈을 쓰겠다는 의미이고 값은 boolean		
var UBLocalExporter =  {
	callTimer : 1000 * 1,         // 상태 1초
	wsModule : null,             // 소켓 객체
	wsMonitorModule : null,             // --
	queue : null,                   // 큐 객체
	timerId : null,                   // 타임 ID
	isQueueStarted : false,   // 큐 상태값
	dataCallBackSucc : null, // 성공 콜백
	dataCallBackFail : null,    // 실패 콜백
	createCallScript : null,
	isStatus : false,
	isSSL : false,
	versionInfo : "1.0",
	setVersion : function(Version){
		// webSocketModuleVersion를 대체할 수 있게 만든 버전 관리용 함수
		var objItem = UBLocalExporter;
		objItem.versionInfo = Version;
	},
	checkInstall : function(callbackMessageFt)
	{
		var objResult = {type:"SUCCESS", message:""};
		
		console.log("checkInstall : ");
				
		var wsModule1 = new WebSocketModule('57000', false, false, "/Echo");    // Monitor Server를 체크
		
		wsModule1.init(null, 
			function(result)
			{
				// result.command==LAUNCH, result.code==9005인 경우에는 설치가 안되어 있다고 본다.
		        console.log('result.command=' + result.command + ", result.code=" + result.code + ", result.message=" + result.message);

		        objResult.type = "FAIL";
				objResult.message = result.message;
		       
		        if(typeof callbackMessageFt != 'undefined')
		        	callbackMessageFt(objResult);
		        else
		        	alert(objResult.type + "\n" + objResult.message);
		        
		        wsModule1.closeConnection();       
			}, 			
			function(result)
			{
				objResult.type = "SUCCESS";
				objResult.message = "LX가 정상적으로 설치되었습니다.";
				
				if(typeof callbackMessageFt != 'undefined')
		        	callbackMessageFt(objResult);
		        else
		        	alert(objResult.type + "\n" + objResult.message);
				 
				wsModule1.closeConnection();        
			});	          
      
	},	
	initLoad : function(ssl)
	{
		console.log("UBLocalExporterVersion : " + Version);
		console.log("webSocketModuleVersion : " + UBLocalExporter.versionInfo);
		/* ******************************************************************************* *
		 * LocalExporter 초기 설정 함수
		 *  #  인자 1 : 루트 경로
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		// 메시지 타입 생성
		//langModule.init("ko",path); // 한글 : ko, 영어 : en
		
		if(typeof ssl != 'undefined'
			&& (String(ssl) == "true"
			|| String(ssl) == "false"))
		{
//			objItem.isSSL=Boolean(ssl);
			objItem.isSSL=(String(ssl)=="true")?true:false;
			
		}
		
		// LocalExporter 소켓 설정 (LX 재기동후 init호출시 소켓을 재설정할 수 있도록 개선)
		if(objItem.wsModule==null || objItem.wsModule.WSocket==null)
		{
			// 데이터 감시 함수
			objItem.timerId = setInterval(objItem.callQueue, objItem.callTimer);
			
			// 큐 객체 생성
			if (objItem.queue == null)
				objItem.queue = new Queue();
			
			objItem.isSocketStatus = false;
			

			// viewerProperty 가 없더라도 setVersion 함수에 버전번호를 호출하면 viewerVisibleProperty 임시 객체를 생성함
			if(typeof viewerVisibleProperty === 'undefined'){
				viewerVisibleProperty = new Object();
				viewerVisibleProperty.webSocketModuleVersion = objItem.versionInfo;
				if(viewerVisibleProperty.hasOwnProperty("webSocketModuleVersion") && viewerVisibleProperty['webSocketModuleVersion'] == "2.0") _isWebsocketModuleV2 = true;
			}
			
			if(_isWebsocketModuleV2)
			{
				objItem.wsModule = new WebSocketModuleV2('37000',objItem.isSSL, undefined, undefined, objItem.versionInfo);
				console.log("WebSocketModuleV2");
			}
			else 
			{
				objItem.wsModule = new WebSocketModule('37000',objItem.isSSL);
				console.log("WebSocketModule");
			}
			objItem.wsModule.init(null 
				,function()
				{
					// 오류 발생에 대한 리턴
					objItem.isSocketStatus = true;
				}
				, function()
				{
					objItem.isSocketStatus = true;
				}
			);
			objItem.isQueueStarted = false;
		}
	},
	sendLocalPdf : function(_param, callBackSucc, callBackFail)
	{
		/* ******************************************************************************* *
		 * LocalExporter 출력 요청 함수
		 *  #  인자 1 : 파라미터 값
		 *  #  인자 2 : 성공 콜백 함수
		 *  #  인자 3 : 오류 콜백 함수
		 *  ******************************************************************************* */
		var result = false;
		var objItem = UBLocalExporter;
		try
		{
			
			objItem.dataCallBackSucc = callBackSucc;
			
			objItem.dataCallBackFail = callBackFail;
			
			var exportType = _param.hasOwnProperty("EXPORT_TYPE") ? _param.EXPORT_TYPE : _param.hasOwnProperty("PDF_EXPORT_TYPE") ? _param.PDF_EXPORT_TYPE : "LOCAL_PRINT#";
			if(exportType == "LOCAL_PREVIEW")
			{
				if(objItem.isSocketStatus == true)
					objItem.wsModule.sendLocalPdf(_param, objItem.callBackSuccess, objItem.callBackFail);
				else
					setTimeout( function() {
						objItem.wsModule.sendLocalPdf(_param, objItem.callBackSuccess, objItem.callBackFail);
					}, 500);
			}
			else
			{
				objItem.queue.enqueue(_param);
			}
			   
			result = true;
			
		} catch(err) {
			alert('WS Exception:' + err.message);
		}
		return result;
	},
	sendLocalUtil : function(_param, callBackSucc, callBackFail)
	{
		var result = false;
		var objItem = UBLocalExporter;
		try
		{
			_param["util"] = "true";

			if (objItem.wsModule == null)
			{
				objItem.sendDateObj = {
						callType          : true,
						callBackSucc  : callBackSucc,
						callBackFail     : callBackFail,
						param             : _param
				};
			}
			else
			{
				objItem.dataCallBackSucc = callBackSucc;
				
				objItem.dataCallBackFail = callBackFail;
				
				objItem.queue.enqueue(_param);
				
				objItem.isQueueStarted = false;
			}
			
			result = true;
		}
		catch(err)
		{
			alert('WS Exception:' + err.message);
		}		
		
		return result;
	},
	sendLocalPdfAll : function(_arrPrtParams, callBackSucc, callBackFail)
	{
		/* ******************************************************************************* *
		 * LocalExporter 출력 요청 함수
		 *  #  인자 1 : 파라미터 값
		 *  #  인자 2 : 성공 콜백 함수
		 *  #  인자 3 : 오류 콜백 함수
		 *  ******************************************************************************* */
		var result = false;
		var objItem = UBLocalExporter;
		try
		{
			
			objItem.dataCallBackSucc = callBackSucc;
			
			objItem.dataCallBackFail = callBackFail;
			
			if(typeof _arrPrtParams === 'undefined')
			{
				var decData = JSON.parse('{"port":"' + this.WSocketPort + '","type":"FAIL","command":"SAVEEND","message":""}');
				decData.message = 'callbackSAVEEND:Error=' + langModule.trs("ubistorm.viewer.wsUserScript.undefinedRequestParametersArray");
				objItem.callBackFail(decData);
				return;
			}
			
			// webSocketModuleVersion 키가 존재하면 새로운 웹소켓 모듈을 쓰겠다는 의미이고 값은 boolean
			if(_isWebsocketModuleV2)
			{
				_arrPrtParams = objItem.wsModule.reassembly(_arrPrtParams);
				
				if(this.queue===null){   // create a new queue
					objItem.queue = new Queue();
				}
				
				// 이전
				for (var i=0 ; i < _arrPrtParams.length ;  i++) {
					console.log('enque ' + _arrPrtParams[0]);
					objItem.queue.enqueue(_arrPrtParams[i]);
				}
			}
			else{
				objItem.isQueueStarted = true;			
				if(this.queue===null){   // create a new queue
					objItem.queue = new Queue();
				}
				else  // clear queue
				{
					objItem.queue.clear();
				}
				// 이전
				for (var i=0 ; i < _arrPrtParams.length ;  i++) {
					console.log('enque ' + _arrPrtParams[0]);
					objItem.queue.enqueue(_arrPrtParams[i]);
				}	
				
				objItem.isQueueStarted = false;
			}



			
			
		} catch(err) {
			alert('WS Exception:' + err.message);
		}
		return result;
	},
	callBackHistory : null,
	callBackSuccess : function(result)
	{
		/* ******************************************************************************* *
		 * LocalExporter 요청 완료 함수
		 *  #  인자 1 : 요청 완료 정보
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		if(_isWebsocketModuleV2){
			result = objItem.wsModule.convertCallbackResult(result);
			
			// 멀티 출력시 조건 추가
			if (result.RESULT_CODE == "10801")
				objItem.isQueueStarted = false;
			
			objItem.callBackHistory = (objItem.callBackHistory == null ? {} : objItem.callBackHistory);
			
			var isNextCall = true;
			
			if (result["RESULT_CODE"] == "10801")
			{
				if (objItem.callBackHistory["RESULT_CODE"] != undefined && objItem.callBackHistory["RESULT_CODE"] == "10801")
				{
					isNextCall = false;
				}
				else
				{
					objItem.callBackHistory["RESULT_CODE"] = result["RESULT_CODE"];
				}
			}
			if (objItem.dataCallBackSucc != null && objItem.dataCallBackSucc != 'undefined' && isNextCall) objItem.dataCallBackSucc(result);
		}
		else {
			if(objItem.isState(result))
			{
				console.log("callBackSuccess :: result.command ==" + result.command);
			}
			// 멀티 출력시 조건 추가
			if (result.command == "PRINTEND") objItem.isQueueStarted = false;
			objItem.callBackHistory = (objItem.callBackHistory == null ? {} : objItem.callBackHistory);
			
			var isNextCall = true;
			if (result["code"] == "10008")
			{
				if (objItem.callBackHistory["code"] != undefined && objItem.callBackHistory["code"] == "10008")
				{
					isNextCall = false;
				}
				else
				{
					objItem.callBackHistory["code"] = result["code"];
				}
			}
			if (objItem.dataCallBackSucc != null && objItem.dataCallBackSucc != 'undefined' && isNextCall) objItem.dataCallBackSucc(result);
		}

	},
	exeUserCallBack : function(result){
		console.log(result);
	},
	exeCallBack : function()
	{
		/* ******************************************************************************* *
		 * Custom URL scheme 콜백 함수 
		 *  #  인자 1 : 요청 실패 정보
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		//objItem.dataCallBackFail = callBackFail;

		try
		{
			var _param = {};
			_param.SERVER_URL_PATH = (objItem.isSSL ? "https" : "http") + "://127.0.0.1";
			_param.EXPORT_TYPE =  "MONITOR";
			//_param.OPTION   = "CHECK_INSTALL";
			//_param.OPTION   = "CHECK_PROCESS";
			_param.OPTION   = "RESTART";
			
			objItem.wsMonitorModule.sendLocalUtil(_param, 
			function(result)
			{
				if(_isWebsocketModuleV2){
					result = objItem.wsModule.convertCallbackResult(result);
					objItem.dataCallBackSucc(result);
				}
				else {
					if(result.command=="RESTART_END")
					{
						if(result.code == "1")
						{
							// 접속 유무
							objItem.wsModule = new WebSocketModule('37000',objItem.isSSL);
							objItem.wsModule.init(null 
								,function()
								{
									// 오류 발생에 대한 리턴
									objItem.isSocketStatus = true;
									var decData = JSON.parse('{"code":"90001","port":"' + this.WSocketPort + '","type":"FAIL","command":"' + _param.OPTION + '","message":"","url":""}');
									decData.message = 'callbackRESTART:Error=init';
									objItem.exeUserCallBack(decData);
								}
								, function()
								{
									objItem.isSocketStatus = true;
									var decData = JSON.parse('{"code":"10600","port":"' +  objItem.wsMonitorModule.WSocketPort + '","type":"SUCCESS","command":"' + _param.OPTION + '","message":"' + result.message + '","url":""}');
									decData["message"] = objItem.wsModule.getMessages("ubistorm.viewer.wsUserScript.restartSuccess").replaceAll("+"," ");
									objItem.exeUserCallBack(decData);
								}
							);
						}
						else
						{
							var decData = JSON.parse('{"code":"90001","port":"' + this.WSocketPort + '","type":"FAIL","command":"' + _param.OPTION + '","message":"' + result.message + '","url":""}');
							//decData.message = 'callbackRESTART:Error=COMMAND_FAIL';
							objItem.exeUserCallBack(decData);
						}
					}
				}
			},
			function(result)
			{
				if(_isWebsocketModuleV2){
					result = objItem.wsModule.convertCallbackResult(result);
					objItem.dataCallBackFail(result);
				}
				else {
					console.log("Print Util loading Error....");
					var decData = JSON.parse('{"code":"90001","port":"' + this.WSocketPort + '","type":"FAIL","command":"' + _param.OPTION + '","message":"' + result.message + '","url":""}');
					decData["message"] = objItem.wsModule.getMessages("ubistorm.viewer.wsUserScript.systemError").replaceAll("+"," ");
					objItem.exeUserCallBack(decData);
				}
			});
		}
		catch(e)
		{
			console.log("WebSocketModule Loading Error.........!!!");
			console.log("[" + e.message + "]");
			
			var decData = JSON.parse('{"code":"90001","port":"' + this.WSocketPort + '","type":"FAIL","command":"RESTART","message":"","url":""}');
			decData.message = 'callbackRESTART:Error=' + e.message;
			objItem.exeUserCallBack(decData);
		}
		console.log("WebSocketModule Loading.........!!!");
	},
	callBackFail : function(result)
	{
		/* ******************************************************************************* *
		 * LocalExporter 요청 실패 함수
		 *  #  인자 1 : 요청 실패 정보
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		if(_isWebsocketModuleV2){
			result = objItem.wsModule.convertCallbackResult(result);

			if(Object.keys(result).length !== 0){
				if (result.RESULT_CODE == "90001") {
					//objItem.isSocketStatus = false;
				}
				//objItem.isQueueStarted = false;
				if (objItem.dataCallBackFail != null && objItem.dataCallBackFail != 'undefined')
					objItem.dataCallBackFail(result);
			}
		}
		else {
			if (result.code == "90001")
			{
				objItem.isSocketStatus = false;
			}
			objItem.isQueueStarted = false;
			if (objItem.dataCallBackFail != null && objItem.dataCallBackFail != 'undefined') objItem.dataCallBackFail(result);
		}
	},
	isExeCall : function(result)
	{
		/* ******************************************************************************* *
		 * LocalExporter 요청 실패 유무 함수
		 *  #  인자 1 : 요청 실패 정보
		 * result.code == "10017"
		 *  ******************************************************************************* */
		if(_isWebsocketModuleV2){
			if (result.RESULT_CODE == "90001")
			return true;
		return false;
		}
		else {
			if (result.code == "90001")
				return true;
			return false;
		}

	},
	sendCall(callBack)
	{
		this.sendeCall(callBack);
	},
	sendeCall : function(callBack)
	{
		/* ******************************************************************************* *
		 * LocalExporter 요청 실패 함수
		 *  #  인자 1 : 요청 실패 정보
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		try
		{
			objItem.wsMonitorModule = new WebSocketModule('57000', false, false, "/Echo");	// 서비스명추가
			objItem.wsMonitorModule.init(null, null, objItem.exeCallBack);
			
			if ( callBack != null && callBack != "" && callBack != undefined )
				objItem.exeUserCallBack = callBack;
		}
		catch (e)
		{
			console.log(e.message);
		}
	},
	isState : function(result)
	{
		/* ******************************************************************************* *
		 * LocalExporter 요청 완료/실패 함수 상태값 호출 함수
		 *  #  인자 1 : 요청 성공/실패 정보
		 *  ******************************************************************************* */
		return (
					result.command == "PRINTEND" 
				|| result.command == "PDFEND" 
				|| result.command == "EXCELEND" 
				|| result.command == "WORDEND" 
				|| result.command == "PPTEND"
				|| result.command == "HWPEND"
				|| result.command == "TXTEND"
				|| result.command == "CSVEND"
				|| result.command == "TIFFEND"
		);
	},
	callQueue : function()
	{
		/* ******************************************************************************* *
		 * LocalExporter 데이터 큐 호출 함수
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
		if(objItem.isQueueStarted == false && objItem.isSocketStatus)
		{
			var isEmpty = objItem.queue.isEmpty();
			if(!isEmpty)
			{
				objItem.callBackHistory = null;
				
				objItem.isQueueStarted = true;
				
				var item = objItem.queue.dequeue();
				if (item.hasOwnProperty("util"))
				{
					objItem.wsModule.sendLocalUtil(item, objItem.callBackSuccess, objItem.callBackFail);
				}
				else
				{
					objItem.wsModule.sendLocalPdf(item, objItem.callBackSuccess, objItem.callBackFail);
				}
			}	 
		}
	},
	unQueue : function()
	{
		/* ******************************************************************************* *
		 * LocalExporter 데이터 큐 호출 제거 함수
		 *  ******************************************************************************* */
		var objItem = UBLocalExporter;
        clearInterval(objItem.timerId);
	}
};