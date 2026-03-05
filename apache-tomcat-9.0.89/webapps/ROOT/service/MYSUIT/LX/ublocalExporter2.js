var Version = "20240322_01";
var reqestMaxCount = 4; // 멀티 요청 처리 가능 횟수
var useConsoleLog = false;
var LangMessageType = "ko";
var defaultInfo = { // initWebSocket 호출시 url port version에 대한 기본값
    url : 'ws://127.0.0.1', // wss 는 기술적 문제때문에 정식 사용 제약사항이 있음
    port : 37000, // 웹소켓 포트
    versionInfo : '2.0', // 2.0 : 신규 LX에 대한 버전 관리를 위한 정보
    useConsoleLog : false // 자바스크립트 로그 결과 확인용 flag (기본값 false)
};
var LangType = function(lang) {
    LangMessageType = lang;
};

class webSocketInfo {
    // 멀티 요청을 관리하기 위한 웹소켓 관련 구조체 
    constructor(){
        this.webSoketObject = undefined; // 웹소켓
        this.queue = undefined; // 멀티폼 리스트
        this.message = undefined; // 웹소켓 메시지
        this.SuccessCallback = undefined; // 성공(Callback)
        this.FailCallback = undefined; // 실패(Callback)
        this.isQueueStarted = false; // 멀티폼 건별 호출시 타이머 구동을 위한 flag
        this.callTimer = 1000 * 1, // 타이머 간격 (*N 초)
        this.timerId = null, // 타이머 ID
		this.id = null,			 // websocketInfo id
        this.ParamObject = ''; // 전달 받은 파라미터 객체
        this.WSocketParamArray = undefined;
        this.WSocketParamArrayIndex = undefined;
        this.isPrintCancel = false;
    }
}
var multiWebSockets = {};

var UBLocalExporter = {

    // 업체에 배포하지 않은 경우 로그를 디버깅하기 위한 목적으로 사용
    DebugMessage : function(message){
        if(useConsoleLog) console.log(message);
    },
    // 웹소켓 연결 성공
    ConnectionCallbackSuccess : function(callbackFt){
        if(typeof(callbackFt) != 'undefined'){
            this.DebugMessage('요청시작.');
            var wsObj = callbackFt;
            if(wsObj.queue.getLength() > 0) wsObj.isQueueStarted = true; // call dequeue
        }
    },
    // 웹소켓 연결 실패
    ConnectionCallbackFail : function(callbackFt){
        this.DebugMessage('....> LocalExporter 재구동 요청.');
        var param = {};
        param.SERVER_URL_PATH = window.location.origin;
        param.EXPORT_TYPE = 'MONITOR'; 
        param.OPTION = 'RESTART';
        var urlStr = 'ws://127.0.0.1:57000/Echo';
        this.sendLocalUtil(param,urlStr,callbackFt);
    },
    sendLocalUtil : function(_param,websoketUrlStr,callbackFt){
        _param.COMMAND = 'PRINTUTIL';

        var ws = new WebSocket(websoketUrlStr);
        ws.onopen = function(event){
            ws.send(JSON.stringify(_param));
            ws.onmessage = function(event){
                callbackFt(convertCallbackResult(event.data));
                setTimeout(() => {
                    ws.close();
                }, 5000);
            };
        }
    },
    getWebSocketId : function()
    {	
        const now = new Date();
        let _timeStr = now.getDate() + "_" + now.getHours() + "_" + now.getMinutes() + "_" + now.getSeconds() + "_"  + now.getMilliseconds();
        
        return _timeStr;
    },
    // 최초 출력요청 도입부
    SendLocalPrintMulti : function(request,callBackSuccess,callBackFail,connInfo){
        // UBLocalExporter 배포 버전
        this.DebugMessage("UBLocalExporterVersion : " + Version);
         
        // 웹소켓 구동 관련 구현을 분리하여 처리
        if(typeof(connInfo) == 'undefined') {
            this.initWebSocket(defaultInfo, request, callBackSuccess, callBackFail ); // default  
            this.DebugMessage("webSocketModuleVersion : " + defaultInfo.versionInfo);
        } 
        else {
            this.initWebSocket(connInfo, request, callBackSuccess,callBackFail ); // user define
            this.DebugMessage("webSocketModuleVersion : " + connInfo.versionInfo);
        }
    },
    initWebSocket : function(connInfo, requestInfo, callBackSuccess, callBackFail){
    
        var websoketUrlStr = '';
        var url = connInfo.url;
        var port = connInfo.port;
        var versionInfo = connInfo.versionInfo;
        useConsoleLog = defaultInfo.useConsoleLog;
        
        if(versionInfo == '1.0') websoketUrlStr = url + ':' + port + '/';
        else websoketUrlStr = url + ':' + port + '/' + '?ScriptVersion=' + versionInfo;
        
        var objItem = UBLocalExporter;

        // 성공콜백/ 실패콜백/ 웹소켓URL
        var ws = function(websoketUrlStr, aCallBackSuccess, aCallBackFail){    
            try{
                var ws = new WebSocket(websoketUrlStr);  
            }catch(e){
                aCallBackFail(e);
            }
            ws.binaryType = 'blob';
            ws.onopen = function(){
    
                // 최대 요청 N(4)개까지만 허용
                if(Object.keys(multiWebSockets).length < reqestMaxCount){
                    const wsObj = new webSocketInfo();
                    wsObj.webSoketObject = ws;
                    wsObj.queue = new Queue();
                    wsObj.id = objItem.getWebSocketId();
                    wsObj.SuccessCallback = aCallBackSuccess;
                    wsObj.FailCallback = aCallBackFail;
                    
                    connectionFialCallbackObj = wsObj;
    
                    ws.onmessage = function(evt){
                        var result = convertCallbackResult(evt.data);
                        //objItem.DebugMessage(JSON.stringify(result));
    
                        if( wsObj.WSocketCallbackMessageFt != undefined )
                        {
                            wsObj.WSocketCallbackMessageFt.call(result);			
                        }
                        
                        if( wsObj.SuccessCallback != undefined && result.RESULT_TYPE =="SUCCESS" )
                        {
                            wsObj.SuccessCallback.call(this, result);
                        }
                        else if(  wsObj.FailCallback != undefined && result.RESULT_TYPE =="FAIL" )
                        {
                            wsObj.FailCallback.call( this, result );
                        }

                        onMessageCallback(result.RESULT_CODE,result.RESULT_TYPE,result.RESULT_MESSAGE,wsObj, result);

                    };
                    
                    // paramArrayTestCode
                    if(typeof(requestInfo) != 'undefined'){
                        if(!Array.isArray(requestInfo)){
                            wsObj.queue.enqueue(requestInfo);
                        }
                        else {
                            for(var i = 0; i < requestInfo.length; i++){
                                wsObj.queue.enqueue(requestInfo[i]);
                            }
                        }
                    }

                    if(wsObj.queue.getLength() > 0)
                    {
                        wsObj.ParamObject = wsObj.queue.dequeue();
                        objItem.SendLocalExporterRequest(wsObj, websoketUrlStr);
                    }
                    else
                    {
                        // websocekt 연결을 종료 후 객체파괴
                        wsObj.webSoketObject.close();
                        delete wsObj;
                        objItem.DebugMessage('웹소켓 관리 객체파괴.');
                    }
                }
                else {
                    alert('요청가능 횟수를 초과하였습니다.');
                }
            };
            
            ws.onerror = function(){
                objItem.ConnectionCallbackFail(aCallBackFail);
            };
            ws.close = function(){
                objItem.DebugMessage('웹소켓 통신 종료.');
            };

        }(websoketUrlStr, callBackSuccess, callBackFail);
    },
    // 출력요청 (출력/SaveAs/util)
    SendLocalExporterRequest : function(wsObj, wsUrlStr){
    
        this.DebugMessage('출력 요청 : ' + wsObj.id);
        this.DebugMessage(wsObj.ParamObject);
    
        var param = wsObj.ParamObject;

        //필수 파라미터 체크
        var requiredParam = checkRequiredParam(param);
        if(requiredParam.length > 0) {
            var retMsg = getMessages("ubistorm.viewer.wsUserScript.checkRequiredParameters") + "\n : " + requiredParam.join(", ");
            alert(retMsg, );
            this.DebugMessage(retMsg);
            PrintJobEnd(wsObj, true);
            return;
        }

        //파라미터 포맷 체크
        param = convertParamFormat(param);

        //타입별 요청 처리 시작
        if(param.EXPORT_TYPE == 'LOCAL_PRINT#') {
            SendMessageToLocalExporter(param, wsObj);
        } 
        else if( param.EXPORT_TYPE == 'SAVE_AS' ) {
            var chkPossibleSave;
            if(param.hasOwnProperty("UB_EXPORT_FILE_TYPE")) {
                chkPossibleSave = IsSaveAsCommnad(param.UB_EXPORT_FILE_TYPE);
            }
            else if(param.hasOwnProperty("UB_FORMLIST_INFO")) {
                var ubFormListInfo = JSON.parse(decodeURIComponent(param.UB_FORMLIST_INFO));
                chkPossibleSave = ubFormListInfo.every(function(element) {
                    if(element.hasOwnProperty("UB_EXPORT_FILE_TYPE")) {
                        return IsSaveAsCommnad(element.UB_EXPORT_FILE_TYPE);
                    }
                });
            }

            if(chkPossibleSave) {
                SendMessageToLocalExporter(param, wsObj);
            }
            else {
                var retMsg = getMessages("ubistorm.viewer.wsUserScript.invalidParameter"); //파라미터 정보가 올바르지 않습니다.
                alert(retMsg);
                this.DebugMessage(retMsg);
                PrintJobEnd(wsObj, true);
            }
        }
        else if (param.EXPORT_TYPE.endsWith("STATUS")) {
            this.sendLocalUtil(wsObj.ParamObject, wsUrlStr, wsObj.SuccessCallback);
        }
        else {
            var retMsg = getMessages("ubistorm.viewer.wsUserScript.invalidParameter"); //파라미터 정보가 올바르지 않습니다.
            alert(retMsg);
            this.DebugMessage(retMsg);
            PrintJobEnd(wsObj, true);
        }
        
        function checkRequiredParam(_params, _arr) {
            var chkParams = [];
            var requiredParam = _arr ? _arr : [];

            var exportType = _params.hasOwnProperty("COMMAND_TYPE") ? _params.COMMAND_TYPE : 
                                _params.hasOwnProperty("PDF_EXPORT_TYPE") ? _params.PDF_EXPORT_TYPE : 
                                _params.hasOwnProperty("EXPORT_TYPE") ? _params.EXPORT_TYPE : undefined;

            if (!_params.hasOwnProperty("SERVER_URL_PATH")) {
                requiredParam.push("SERVER_URL_PATH");
            }

            if (exportType == undefined) {
                requiredParam.push("COMMAND_TYPE");
            }
            else if (exportType == "LOCAL_PRINT#" || exportType == "SAVE_AS") {

                if (!_params.hasOwnProperty("UB_FORMLIST_INFO")) {
                    requiredParam.push("UB_FORMLIST_INFO");
                }
                else {
                    chkParams.push("projectName<&>PROJECT_NAME", "formName<&>FORM_MAME");
                    if (exportType =="SAVE_AS" && !_params.hasOwnProperty("UB_EXPORT_FILE_TYPE")) {
                            chkParams.push("UB_EXPORT_FILE_TYPE");
                    } 

                    var ubFormListInfo = JSON.parse(decodeURIComponent(_params.UB_FORMLIST_INFO));
                    
                    chkParams.forEach( function(chkP) {
                        var checkList = chkP.split("<&>");
                        
                        ubFormListInfo.forEach(function(param) {
                            var isContains = checkList.some(function(c) {
                                return param.hasOwnProperty(c);
                            });
                            if (isContains == false && requiredParam.indexOf(checkList[0]) == -1) // requiredParam 담을 때 값이 중복되지 않도록 함
                                requiredParam.push(checkList[0]);
                        });
                    });
                }
            }         
            
            return requiredParam;
        };
        function convertParamFormat(param) {

            //통신구간에 사용하는 파라미터 명칭으로 컨버팅
            if ( !param.hasOwnProperty("PROJECT_NAME")
                    && (param.hasOwnProperty("projectName") && param["projectName"] != undefined && !param.hasOwnProperty("PROJECT_NAME")) ) {
                param.PROJECT_NAME = param["projectName"];
                delete param["projectName"];
            }
            if ( !param.hasOwnProperty("FORM_NAME")
                    && (param.hasOwnProperty("formName") && param["formName"] != undefined) ) {
                param.FORM_NAME = param["formName"];
                delete param["formName"];
            }
            if (!param.hasOwnProperty("EXPORT_TYPE")
                    && ((param.hasOwnProperty("COMMAND_TYPE") && param["COMMAND_TYPE"] != undefined) || (param.hasOwnProperty("PDF_EXPORT_TYPE") && param["PDF_EXPORT_TYPE"] != undefined) )) {
                
                if (param.hasOwnProperty("COMMAND_TYPE")) {
                    param.EXPORT_TYPE = param["COMMAND_TYPE"];
                    delete param["COMMAND_TYPE"];   
                }
                else if (param.hasOwnProperty("PDF_EXPORT_TYPE")) {
                    param.EXPORT_TYPE = param["PDF_EXPORT_TYPE"];
                    delete param["PDF_EXPORT_TYPE"];
                }
            }
            //기본값 처리
            if (param.EXPORT_TYPE == "") {
                param.EXPORT_TYPE = "LOCAL_PRINT#";
            }
            else if (param.EXPORT_TYPE.endsWith("_STATUS")) {
                param.EXPORT_TYPE = param.EXPORT_TYPE.startsWith("CHECK_") ? param.EXPORT_TYPE : "CHECK_" + param.EXPORT_TYPE;
            }                
        
            
            //param에 REQ_PARAMS가 없으면, sysOptionList에 없는 속성을 서식 parameter로 간주
            if ( !param.EXPORT_TYPE.endsWith("_STATUS") && !param.hasOwnProperty("REQ_PARAMS") ) {
                var sysOptionList = new Object();
                sysOptionList = ["REQ_PARAMS", "SERVER_URL_PATH", "PROJECT_NAME","EXPORT_TYPE","START_PAGE","END_PAGE","parameter",
                "PAGE_COPIES","PAGE_COLLATE","PAGE_DUPLEX","EXPORT_PRINTER_NAME","SHOW_PRINTER_DIALOG","CHECK_PRINTABLE","COMMAND_TYPE",
                "LAST_PRINT_SETTING","MULTI_FORM_TYPE","UB_FORMLIST_INFO","PAGE_FIT","PAGE_LABEL_FIT","PAGE_LANDSCAPE","UB_EXPORT_FILE_TYPE",
                "PAGE_SIZE","PAGE_MARGIN","PAGE_SCALE","PAGE_ROTATION","PAGE_MOVE_X","PAGE_MOVE_Y","PAGE_GRAYSCALE","TEXT_DRAWSTRING","UB_LABEL_USE_SVG","USE_SERVER_RENDERING",
                "UB_BARCODE_TYPE","UB_BARCODE_RENDERING_TYPE","UB_BARCODE_SVG_BLACK_WIDTH_RATIO","UB_EXPORT_FILE_NAME","UB_EXPORT_FILE_PATH","PDF_READER_OPEN","UB_OPENER"];
                param.REQ_PARAMS = new Object();
                for (var el in param){
                    if (sysOptionList.indexOf(el) == -1){
                        param.REQ_PARAMS[el] = param[el];
                        delete param[el];
                    }
                }
            }
            return param;
        };
        function IsSaveAsCommnad(fileType){
            var isSaveAs = false;
            var saveAsCommands = ['PDF','XLS','XLSX','DOC','DOCX','PPT','PPTX','TXT','TEXT','PNG','GIF','JPG','TIF','TIFF'];
            isSaveAs = saveAsCommands.some(function(element) {
                return fileType == element;
            });
            return isSaveAs;
        };
        function SendMessageToLocalExporter(param,wsObj){
            var paramData = param.hasOwnProperty("REQ_PARAMS") ? getParameter(param.REQ_PARAMS) : null;
            if(paramData != null){
                try {
                    var encodeUri = paramData.hasOwnProperty("encodeUri") ? paramData.encodeUri.parameter : "false";
                    var encParam = encodeUri=="true" ? JSON.stringify(paramData) : encodeURIComponent(JSON.stringify(paramData));
                    delete param["REQ_PARAMS"]; // delete REQ_PARAMS item;
                    wsObj.WSocketParamArray = chunkString(encParam, 1024*50);//윈도우 네트워크 프로그램에서 1회당 한번에 보낼 수 있는 안전한 크기는 65536바이트(64kb)
                    wsObj.WSocketParamArrayIndex = 0;
                }
                catch(err) {
                    alert(getMessages("ubistorm.viewer.wsUserScript.failedGetRequestParameter") + err.message);
                    return;
                }
            }
            wsObj.ParamObject = param; // 파리미터 동기화
            startProcess(param, wsObj.webSoketObject, wsObj.WSocketParamArray, wsObj.WSocketParamArrayIndex);
        };
        function startProcess(param,webSocket,WSocketParamArray,WSocketParamArrayIndex) {
            var sendParams = {};
            if(param != null) {
                sendParams.COMMAND 	= "SEND_PARAMS";
                sendParams.UBPARAMS_ARRAY_LENGTH = WSocketParamArray.length; 
                sendParams.UBPARAMS_ARRAY_INDEX = WSocketParamArrayIndex++; 
                sendParams.UBPARAMS_ARRAY_DATA = WSocketParamArray[sendParams.UBPARAMS_ARRAY_INDEX];
            }
            webSocket.send(JSON.stringify(sendParams));
        };
        function getParameter (obj){
            var returnData = {};
            for (var key in obj) {
                var tmpData = obj[key];
                if ((typeof tmpData) == "string")
                    tmpData = tmpData.replace(/\%/g, '%25').replace(/\+/g, '%2B').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
                returnData[key] = {desc:"", type:"string", parameter:tmpData};
            }
            return returnData;
        };
        function chunkString(str, length) {
            return str.match(new RegExp('.{1,' + length + '}', 'g'));
        };
        
    }
};



var onMessageCallback = function(RESULT_CODE,RESULT_TYPE,RESULT_MESSAGE,wsObj, result ){
    if(RESULT_TYPE == 'SUCCESS'){
        switch(RESULT_CODE)
        {
            case "10101": //SEND_PARAMS
                callbackSENDPARAMS(RESULT_MESSAGE,wsObj);
                break;
            case "10102": //SEND_PARAMS_END
                callbackSENDPARAMSEND(RESULT_MESSAGE,wsObj);
                break;
            case "10201": // GET_SERVER_URL
                callbackOPEN(RESULT_MESSAGE,wsObj);
                break;					
                case "10602": // PRINT_JOB_END
                if(!wsObj.isPrintCancel){
                    PrintJobEnd(wsObj);
                }
                break;
                case "10802": // PRINT_JOB_CANCEL
                callbackPRINTCANCEL(result,wsObj);
                break;		
            case "CHECK_PROCESS_END":
                callbackMONITOREND(result,wsObj);
                break;
        }
    } 
    
    function callbackSENDPARAMS(result,wsObj) {
        if( result ) {
            var webSocket = wsObj.webSoketObject;
            var sendParams = {};
            sendParams.COMMAND 	= "SEND_PARAMS";	
            sendParams.UBPARAMS_ARRAY_LENGTH = wsObj.WSocketParamArray.length; 
            sendParams.UBPARAMS_ARRAY_INDEX = wsObj.WSocketParamArrayIndex++; 
            sendParams.UBPARAMS_ARRAY_DATA = wsObj.WSocketParamArray[sendParams.UBPARAMS_ARRAY_INDEX];
            webSocket.send(JSON.stringify(sendParams));
        }
    };
    function callbackSENDPARAMSEND(result,wsObj) {
        var getParam = wsObj.ParamObject;
        var webSocket = wsObj.webSoketObject;
        if( result ) {
            var sendParams = {};
            sendParams.COMMAND 	= "GET_SERVER_URL";
            sendParams.SERVER_URL 	= getParam.SERVER_URL_PATH;
            sendParams.PROJECT_NAME = getParam.PROJECT_NAME;
            sendParams.FORM_ID = getParam.FORM_NAME;
            sendParams.FILE_NAME = getParam.FILE_NAME;
            sendParams.CALL_NO = getParam.CALL_NO;
            sendParams.IS_UBPARAMS_ENCODED = "NO";
            sendParams.UB_FORMLIST_INFO = getParam.hasOwnProperty("UB_FORMLIST_INFO") ? getParam.UB_FORMLIST_INFO : "";		
            sendParams.UB_PRINT_FORMLIST = getParam.hasOwnProperty("UB_PRINT_FORMLIST") ? getParam.UB_PRINT_FORMLIST : "";		
            sendParams.UB_OPENER = getParam.hasOwnProperty("UB_OPENER") ? getParam.UB_OPENER : "";
            sendParams.USE_SERVER_RENDERING = getParam.hasOwnProperty("USE_SERVER_RENDERING") ? getParam.USE_SERVER_RENDERING : "";
            sendParams.UB_MULTI_LIST_TYPE = getParam.hasOwnProperty("UB_MULTI_LIST_TYPE") ? getParam.UB_MULTI_LIST_TYPE : "";
            sendParams.MULTI_FORM_TYPE = getParam.hasOwnProperty("MULTI_FORM_TYPE") ? getParam.MULTI_FORM_TYPE : "";
            webSocket.send(JSON.stringify(sendParams));
        }
    };
    function callbackOPEN(result,wsObj) { 	
        var getParam = wsObj.ParamObject;
        var webSocket = wsObj.webSoketObject;
        if( result ) {
            var sendParams = {};
            sendParams.PROJECT_NAME = getParam.PROJECT_NAME;
            sendParams.FORM_ID = getParam.FORM_NAME;
            sendParams.FILE_NAME = getParam.FILE_NAME;	
            sendParams.UB_OPENER = getParam.hasOwnProperty("UBOpener") ? getParam.UBOpener : "";
            var sendParamsData = getParam.hasOwnProperty("REQsendParamsS") ? this.getParameter(getParam.REQsendParamsS) : null;
            if(wsObj.WSocketParamArray == null && sendParamsData != null) {
                var encParam = encodeURIComponent(JSON.stringify(sendParamsData));
                sendParams.UBPARAMS = encParam;
                sendParams.IS_UBPARAMS_ENCODED = "NO";
                delete getParam["REQ_PARAMS"];
            }
            else if(wsObj.WSocketParamArray != null) {
                sendParams.IS_UBPARAMS_ENCODED = "NO";
            }
            //Page 범위 가져오기
            var exportType = getParam.hasOwnProperty("EXPORT_TYPE") ?  getParam.EXPORT_TYPE : "LOCAL_PRINT#";
            var _startP = 0;
            var _lastP  = 0;
            _startP = parseInt(getParam.hasOwnProperty("START_PAGE") ? getParam.START_PAGE : "0");
            _lastP = parseInt(getParam.hasOwnProperty("END_PAGE") ? getParam.END_PAGE :  "0");
            sendParams.EXPORT_PRINTER_NAME = getParam.hasOwnProperty("EXPORT_PRINTER_NAME") ? getParam.EXPORT_PRINTER_NAME : "";
            sendParams.SHOW_PRINTER_DIALOG = getParam.hasOwnProperty("SHOW_PRINTER_DIALOG") ? getParam.SHOW_PRINTER_DIALOG : "false";
            sendParams.PAGE_MARGIN = getParam.hasOwnProperty("PAGE_MARGIN") ? getParam.PAGE_MARGIN: "";
            sendParams.PAGE_LANDSCAPE = getParam.hasOwnProperty("PAGE_LANDSCAPE") ? getParam.PAGE_LANDSCAPE : "";
            sendParams.PAGE_FIT = getParam.hasOwnProperty("PAGE_FIT") ? getParam.PAGE_FIT : "";
            sendParams.PAGE_LABEL_FIT = getParam.hasOwnProperty("PAGE_LABEL_FIT") ? getParam.PAGE_LABEL_FIT : "";
            sendParams.PAGE_COPIES = getParam.hasOwnProperty("PAGE_COPIES") ? getParam.PAGE_COPIES : "-1";
            sendParams.PAGE_DUPLEX = getParam.hasOwnProperty("PAGE_DUPLEX") ? getParam.PAGE_DUPLEX : "";
            sendParams.PAGE_GRAYSCALE = getParam.hasOwnProperty("PAGE_GRAYSCALE") ? getParam.PAGE_GRAYSCALE : "";
            sendParams.CHECK_PRINTABLE = getParam.hasOwnProperty("CHECK_PRINTABLE") ? getParam.CHECK_PRINTABLE : "";
            sendParams.PAGE_SCALE = getParam.hasOwnProperty("PAGE_SCALE") ? getParam.PAGE_SCALE : "";
            // PAGE_SIZE 정합성 2번 검사(WSocketParam 과 UB_FORMLIST_INFO)
            sendParams.PAGE_SIZE = getParam.hasOwnProperty("PAGE_SIZE") ? getParam.PAGE_SIZE : "";
            // UB_FORMLIST_INFO
            // var sendMessage = validationPageSize(this,getParam);
            // if(sendMessage != undefined) {
            //     sendMessage;
            //     return;
            // }
            sendParams.UB_EXPORT_FILE_TYPE = getParam.hasOwnProperty("UB_EXPORT_FILE_TYPE") ? getParam.UB_EXPORT_FILE_TYPE : "";
            sendParams.UB_EXPORT_FILE_NAME = getParam.hasOwnProperty("UB_EXPORT_FILE_NAME") ? getParam.UB_EXPORT_FILE_NAME : "";
            sendParams.UB_EXPORT_FILE_PATH = getParam.hasOwnProperty("UB_EXPORT_FILE_PATH") ? getParam.UB_EXPORT_FILE_PATH : "";
            sendParams.PAGE_ROTATION = getParam.hasOwnProperty("PAGE_ROTATION") ? getParam.PAGE_ROTATION : "";
            sendParams.PAGE_COLLATE = getParam.hasOwnProperty("PAGE_COLLATE") ? getParam.PAGE_COLLATE : "";
            sendParams.LAST_PRINT_SETTING = getParam.hasOwnProperty("LAST_PRINT_SETTING") ? getParam.LAST_PRINT_SETTING : "";
            sendParams.PAGE_MOVE_X = getParam.hasOwnProperty("PAGE_MOVE_X") ? getParam.PAGE_MOVE_X : "";
            sendParams.PAGE_MOVE_Y = getParam.hasOwnProperty("PAGE_MOVE_Y") ? getParam.PAGE_MOVE_Y : "";
            sendParams.UB_LABEL_USE_SVG = getParam.hasOwnProperty("UB_LABEL_USE_SVG") ? getParam.UB_LABEL_USE_SVG : "";
            sendParams.UB_BARCODE_TYPE = getParam.hasOwnProperty("UB_BARCODE_TYPE") ? getParam.UB_BARCODE_TYPE : "";
            sendParams.UB_BARCODE_RENDERING_TYPE = getParam.hasOwnProperty("UB_BARCODE_RENDERING_TYPE") ? getParam.UB_BARCODE_RENDERING_TYPE : "";
            sendParams.UB_BARCODE_SVG_BLACK_WIDTH_RATIO = getParam.hasOwnProperty("UB_BARCODE_SVG_BLACK_WIDTH_RATIO") ? getParam.UB_BARCODE_SVG_BLACK_WIDTH_RATIO : ""
            sendParams.UB_MULTI_LIST_TYPE = getParam.hasOwnProperty("UB_MULTI_LIST_TYPE") ? getParam.UB_MULTI_LIST_TYPE : "";
            sendParams.MULTI_FORM_TYPE = getParam.hasOwnProperty("MULTI_FORM_TYPE") ? getParam.MULTI_FORM_TYPE : "";
            sendParams.VALIDATION_KEY = getParam.hasOwnProperty("VALIDATION_KEY") ? getParam.VALIDATION_KEY : "";
            sendParams.TEXT_DRAWSTRING = getParam.hasOwnProperty("TEXT_DRAWSTRING") ? getParam.TEXT_DRAWSTRING : "";
            sendParams.COMMAND 	= "PRINT_JOB_START";	
            sendParams.EXPORT_TYPE = exportType;
            var pageRangeGubun = "0";
            if(_startP > 0 && _lastP > 0) {
                if( _startP > _lastP ){
                    var decData = JSON.parse('{"port":"' + this.WSocketPort + '","type":"","command":"","code":"","message":""}');
                    decData.type = "FAIL";
                    decData.command = "ERROR";
                    decData.code = "90009";
                    decData.message = this.getMessages("ubistorm.viewer.wsUserScript.pageRangeError");
                    callbackFailFt(decData);
                    return;
                }
                pageRangeGubun = "2";
            }
            sendParams.PAGE_RANGE_GUBUN = pageRangeGubun;
            sendParams.START_PAGE 	= String(_startP);
            sendParams.END_PAGE 	= String(_lastP);
            sendParams.DIVIDE_PAGE_COUNT = getParam.hasOwnProperty("DIVIDE_PAGE_COUNT") ? getParam.DIVIDE_PAGE_COUNT : "200";	// 매번 호출시 받아올 페이지 수
            webSocket.send(JSON.stringify(sendParams));
        }
    }; 
    function callbackPRINTCANCEL(result,wsObj) {
        wsObj.queue.clear();
        wsObj.isPrintCancel = true;
        wsObj.isQueueStarted = false; 
        wsObj.webSoketObject.close(); 
        delete wsObj;
    };
};
var convertCallbackResult = function(message){
    var _callbackResult = new Object();
    if(typeof(message) == 'string' && message.startsWith('{') && message.endsWith('}')){
        message = JSON.parse(message); 
    }
    if(message.hasOwnProperty('code')){
        _callbackResult.RESULT_CODE = message.command;
        if(_callbackResult.RESULT_CODE == "SPOOL_END"){
            _callbackResult = new Object();	
        }
        else if (_callbackResult.RESULT_CODE == "PRINT_STATUS_SUCCESS") {
            _callbackResult.RESULT_CODE = message.code;
            var tempData = new Object();
            tempData.code = message.code;
            tempData.message = message.data;
            message.data = JSON.stringify(tempData);
        }
        else {
            _callbackResult.RESULT_CODE = message.code;
            if (_callbackResult.RESULT_CODE == "90001") {

            }
        }
    }
    if(message.hasOwnProperty('type')){
        if(Object.keys(_callbackResult).length !== 0) {
            _callbackResult.RESULT_TYPE = message.type;
        }
    }
    if(message.hasOwnProperty('message')){
        if(Object.keys(_callbackResult).length !== 0) {
            _callbackResult.RESULT_MESSAGE = message.message;
        }
    }
    if(message.hasOwnProperty('RESULT_KEY')){
        _callbackResult.RESULT_KEY = message.RESULT_KEY;
    }
    
    if(message.hasOwnProperty('VALIDATION_KEY')){
        _callbackResult.VALIDATION_KEY = message.VALIDATION_KEY;
    }

    if(message.hasOwnProperty('data')){
        if(Object.keys(_callbackResult).length !== 0) {
            if(message.data != null){
                var tempData = JSON.parse(message.data);
                _callbackResult.RESULT_KEY = tempData.key;
                if(_callbackResult.RESULT_KEY == undefined) delete _callbackResult.RESULT_KEY;
                
                delete tempData.key;
                _callbackResult.RESULT_DATA = { CODE : tempData.code, MESSAGE : tempData.message };
            }
        }
    }
    return _callbackResult;
}

var validationPageSize = function(_wsModule, _webSocketParm){
    // _webSocketParm = params
    var sendMessage; // this
    var errorReturn = false;
    
    if(_webSocketParm.hasOwnProperty('UB_FORMLIST_INFO')){
        sendMessage = _wsModule;
        var ubFormListInfo = JSON.parse(decodeURIComponent(_webSocketParm.UB_FORMLIST_INFO));
        ubFormListInfo.map(function(element){
            if(!errorReturn){
                // 페이지 사이즈 라는 파라미터가 존재한다는 전제 조건
                if(element.hasOwnProperty("PAGE_SIZE")){
                    var pageSizeParam = element["PAGE_SIZE"];
                    if(pageSizeParam.startsWith("{")){
                        var pageSizeType = JSON.parse(pageSizeParam);
                        // 페이지 사이즈 정보 관련 키가 하나도 존재하지 않음
                        if(!pageSizeType.hasOwnProperty("paperName") && !pageSizeType.hasOwnProperty("registeredSize") && !pageSizeType.hasOwnProperty("inputSize")){
                            var extraMessage = sendMessage.getMessages("ubistorm.viewer.wsUserScript.invalidParameter");
                            sendMessage = returnInvalidPageSize(pageSizeParam,sendMessage,extraMessage);
                            errorReturn = true;
                        } else {
                            // 키이름 존재 시 값에 대한 정합성 체크
                            var keyName;
                            Object.keys(pageSizeType).map(function(element){
                                keyName = element;
                            });
                            switch(keyName){
                                // 공백 문자열 체크
                                case 'paperName':
                                    if(invalidKeyValueTest("string",pageSizeType[keyName])){ //true 면 실패
                                        sendMessage = returnInvalidPageSize(pageSizeParam,sendMessage);
                                        errorReturn = true;
                                    }
                                    break;
                                // true OR false 체크	
                                case 'registeredSize':
                                    if(invalidKeyValueTest("boolean",pageSizeType[keyName])){ // true면 실패
                                        sendMessage = returnInvalidPageSize(pageSizeParam,sendMessage);
                                        errorReturn = true;
                                    }
                                    break;
                                // 키 & 값 체크	
                                case 'inputSize':
                                    if(invalidKeyValueTest("keyValueParam",pageSizeType[keyName])){ // true면 실패
                                        sendMessage = returnInvalidPageSize(pageSizeParam,sendMessage,extraMessage);
                                        errorReturn = true;
                                    }
                                    break;													
                            }
                        }
                    } else { // 페이지 사이즈 정보에 대한 key Value 없이 들어오는 정보
                        var extraMessage = sendMessage.getMessages("ubistorm.viewer.wsUserScript.invalidParameter");
                        sendMessage = returnInvalidPageSize(pageSizeParam,sendMessage,extraMessage);
                        errorReturn = true;
                    }
                }
            }
        });
    }
    //WSocketParam
    if(_webSocketParm.PAGE_SIZE != undefined && _webSocketParm.PAGE_SIZE.startsWith("{")){
        // 페이지 사이즈 라는 파라미터가 존재한다는 전제 조건
        sendMessage = _wsModule;
        var webSocketPageSizeParam = JSON.parse(_webSocketParm.PAGE_SIZE);
        if(!webSocketPageSizeParam.hasOwnProperty("paperName") && !webSocketPageSizeParam.hasOwnProperty("registeredSize") && !webSocketPageSizeParam.hasOwnProperty("inputSize")){
            var extraMessage = sendMessage.getMessages("ubistorm.viewer.wsUserScript.invalidParameter");
            sendMessage = returnInvalidPageSize(_webSocketParm.PAGE_SIZE,sendMessage,extraMessage);
            errorReturn = true;
        } else {
            // 키이름 존재 시 값에 대한 정합성 체크
            var keyName;
            console.log(webSocketPageSizeParam);
            Object.keys(webSocketPageSizeParam).map(function(element){
                keyName = element;
            });
            switch(keyName){
                // 공백 문자열 체크
                case 'paperName':
                    if(invalidKeyValueTest("string",webSocketPageSizeParam[keyName])){ //true 면 실패
                        sendMessage = returnInvalidPageSize(JSON.stringify(webSocketPageSizeParam),sendMessage);
                        errorReturn = true;
                    }
                    break;
                // true OR false 체크	
                case 'registeredSize':
                    if(invalidKeyValueTest("boolean",webSocketPageSizeParam[keyName])){ // true면 실패
                        sendMessage = returnInvalidPageSize(JSON.stringify(webSocketPageSizeParam),sendMessage);
                        errorReturn = true;
                    }
                    break;
                // 키 & 값 체크	
                case 'inputSize':
                    if(invalidKeyValueTest("keyValueParam",webSocketPageSizeParam[keyName])){ // true면 실패
                        sendMessage = returnInvalidPageSize(JSON.stringify(webSocketPageSizeParam),sendMessage,extraMessage);
                        errorReturn = true;
                    }
                    break;													
            }
        }
    } else {// 페이지 사이즈 정보에 대한 key Value 형태를 무시하고 들어오는 경우에 대한 처리
        if(typeof _webSocketParm.PAGE_SIZE != 'undefined'){
            var extraMessage = sendMessage.getMessages("ubistorm.viewer.wsUserScript.invalidParameter");
            sendMessage = returnInvalidPageSize(_webSocketParm.PAGE_SIZE,sendMessage,extraMessage);
            errorReturn = true;
        }
    }

    if(errorReturn){
        return sendMessage;
    } 
    else{
        return;
    }
};

var PrintJobEnd = function(wsObj, forceEnd) {
    if (forceEnd || wsObj.queue.getLength() == 0 ) {
        UBLocalExporter.DebugMessage('최종 출력작업 완료. 웹소켓 관리 객체파괴'); // printJobEnd 시점에 종료이지만 테스트 코드로 작성
        wsObj.webSoketObject.close(); 
        delete wsObj;
    }
    else { //if (wsObj.queue.getLength() > 0)
        UBLocalExporter.DebugMessage('출력작업 완료. 다음 출력 요청.'); // printJobEnd 시점에 종료이지만 테스트 코드로 작성
        wsObj.isQueueStarted = true; // call dequeue
        wsObj.ParamObject = wsObj.queue.dequeue();
        UBLocalExporter.SendLocalExporterRequest(wsObj);
    }    
};

var getMessages = function(result, type) {
    // LocalExporter 메시지 리턴 함수
    var itemInfo = {
        en : {
            "ubistorm.viewer.wsUserScript.checkRequiredParameters" : "Please%20check%20your%20required%20parameters.",
            "ubistorm.viewer.wsUserScript.failedGetRequestParameter" : "Failed%20to%20get%20request%20parameters.",
            "ubistorm.viewer.wsUserScript.failedSendMessage" : "Failed%20to%20send%20message.",
            "ubistorm.viewer.wsUserScript.enterMessage" : "You%20must%20enter%20a%20message%20to%20be%20sent.",
            "ubistorm.viewer.wsUserScript.connectionIsNotReady" : "WSocket%20connection%20is%20not%20ready!%20Please%20refresh%20your%20webbrowser",
            "ubistorm.viewer.wsUserScript.connectionIsNotOpen" : "WSocket%20connection%20is%20not%20opened.%20Please%20refresh%20your%20webbrowser.",
            "ubistorm.viewer.wsUserScript.isNotSupportWebsocket" : "Your%20browser%20does%20not%20support%20the%20WebSocket%20API.",
            "ubistorm.viewer.wsUserScript.checkLaunchLocalexporter" : "Did%20UBLocalExporter%20launch%3F%20If%20not%2C%20please%20install%20it.",
            "ubistorm.viewer.wsUserScript.exceptionOccurs" : "Exception%20occurs%20for%20the%20websocket%20server%20at%20%3A",
            "ubistorm.viewer.wsUserScript.pageRangeError" : "Page%20range%20error.",
            "ubistorm.viewer.wsUserScript.undefinedRequestParametersArray" : "Request%20the%20array%20of%20parameters%20is%20not%20defined.",
            "ubistorm.viewer.wsUserScript.failedTargetPrintOffLine" : "Target%20printer%20is%20offline.",
            "ubistorm.viewer.wsUserScript.failedTargetPrintSetupFile" : "WSocket+connection+is+not+ready!+Please+check+your+UBLocalExporter+process.",
            "ubistorm.viewer.wsUserScript.printStatus" : "No+other+operations+can+be+performed+while+the+operation+is+in+progress.",
            "ubistorm.viewer.wsUserScript.systemError" : "System+exception+occurred.+Please+contact+your+administrator.",
            "ubistorm.viewer.wsUserScript.restartSuccess" : "UBLocalExporter+program+restart+has+been+completed.",
            "ubistorm.viewer.wsUserScript.invalidParameter" : "Invalid%2520Parameter",
            "ubistorm.viewer.wsUserScript.pageInfoError" :"Invalid%20PageSizeInfo"
        },
        ko : {
            "ubistorm.viewer.wsUserScript.checkRequiredParameters" : "%ED%95%84%EC%88%98%20%ED%8C%8C%EB%9D%BC%EB%A9%94%ED%84%B0%EB%A5%BC%20%EC%A0%90%EA%B2%80%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.failedGetRequestParameter" : "%EC%9A%94%EC%B2%AD%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EA%B0%92%EC%9D%84%20%EC%96%BB%EB%8A%94%EB%8D%B0%20%EC%8B%A4%ED%8C%A8%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.failedSendMessage" : "%EB%A9%94%EC%8B%9C%EC%A7%80%20%EC%A0%84%EC%86%A1%EC%97%90%20%EC%8B%A4%ED%8C%A8%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.enterMessage" : "%EC%A0%84%EC%86%A1%ED%95%A0%20%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC%20%EC%9E%85%EB%A0%A5%ED%95%98%EC%84%B8%EC%9A%94.",
            "ubistorm.viewer.wsUserScript.connectionIsNotReady" : "%EC%9B%B9%EC%86%8C%EC%BC%93%EC%9D%B4%20%EC%A4%80%EB%B9%84%EB%90%98%EC%A7%80%20%EC%95%8A%EC%95%98%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%A5%BC%20%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%ED%95%98%EC%8B%9C%EA%B8%B0%20%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.connectionIsNotOpen" : "%EC%9B%B9%EC%86%8C%EC%BC%93%EC%9D%B4%20%EC%97%B0%EA%B2%B0%EB%90%98%EC%A7%80%20%EC%95%8A%EC%95%98%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%A5%BC%20%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%ED%95%98%EC%8B%9C%EA%B8%B0%20%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.isNotSupportWebsocket" : "%ED%98%84%20%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%8A%94%20%EC%9B%B9%EC%86%8C%EC%BC%93%20API%EB%A5%BC%20%EC%A7%80%EC%9B%90%ED%95%98%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.checkLaunchLocalexporter" : "UBLocalExporter%EA%B0%80%20%EC%84%A4%EC%B9%98%EB%90%98%EC%A7%80%20%EC%95%8A%EC%95%98%EA%B1%B0%EB%82%98%20%EC%8B%9C%EC%9E%91%EB%90%98%EC%A7%80%20%EC%95%8A%EC%95%98%EC%9D%84%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%84%A4%EC%B9%98%ED%99%95%EC%9D%B8%20%ED%9B%84%20%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.exceptionOccurs" : "%EB%8B%A4%EC%9D%8C%20%EC%A3%BC%EC%86%8C%EC%9D%98%20%EC%9B%B9%EC%86%8C%EC%BC%93%20%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C%20%EC%98%88%EC%99%B8%EA%B0%80%20%EB%B0%9C%EC%83%9D%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4%20%3A",
            "ubistorm.viewer.wsUserScript.pageRangeError" : "%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%B2%94%EC%9C%84%20%EC%98%A4%EB%A5%98.",
            "ubistorm.viewer.wsUserScript.undefinedRequestParametersArray" : "%EC%9A%94%EC%B2%AD%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%20%EB%B0%B0%EC%97%B4%EC%9D%B4%20%EC%A0%95%EC%9D%98%EB%90%98%EC%A7%80%20%EC%95%8A%EC%95%98%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.failedTargetPrintOffLine" : "%EB%8C%80%EC%83%81%20%ED%94%84%EB%A6%B0%ED%84%B0%EB%8A%94%20%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8%20%EC%83%81%ED%83%9C%20%EC%9E%85%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.failedTargetPrintSetupFile" : "UBLocalExporter%eb%a5%bc+%eb%8b%a4%ec%8b%9c+%ec%8b%9c%ec%9e%91%ed%95%98%ec%8b%9c%ea%b8%b0+%eb%b0%94%eb%9e%8d%eb%8b%88%eb%8b%a4.",
            "ubistorm.viewer.wsUserScript.printStatus" : "%ec%9e%91%ec%97%85+%ec%a7%84%ed%96%89%ec%a4%91%ec%97%90%eb%8a%94+%eb%8b%a4%eb%a5%b8+%ec%9e%91%ec%97%85%ec%9d%84+%ed%95%a0+%ec%88%98+%ec%97%86%ec%8a%b5%eb%8b%88%eb%8b%a4.",
            "ubistorm.viewer.wsUserScript.systemError" : "%ec%8b%9c%ec%8a%a4%ed%85%9c%ec%97%90%ec%84%9c+%ec%98%88%ec%99%b8%ea%b0%80+%eb%b0%9c%ec%83%9d%ed%95%98%ec%98%80%ec%8a%b5%eb%8b%88%eb%8b%a4.+%ea%b4%80%eb%a6%ac%ec%9e%90%ec%97%90%ea%b2%8c+%eb%ac%b8%ec%9d%98+%eb%b0%94%eb%9e%8d%eb%8b%88%eb%8b%a4.",
            "ubistorm.viewer.wsUserScript.restartSuccess" : "UBLocalExporter%2B%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%9D%B4%2B%EC%9E%AC%EA%B5%AC%EB%8F%99%2B%EC%84%B1%EA%B3%B5%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.invalidParameter" :"%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%20%EC%A0%95%EB%B3%B4%EA%B0%80%20%EC%98%AC%EB%B0%94%EB%A5%B4%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.",
            "ubistorm.viewer.wsUserScript.pageInfoError" :"%EC%9E%98%EB%AA%BB%EB%90%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%82%AC%EC%9D%B4%EC%A6%88%20%EC%A0%95%EB%B3%B4%20%EC%9E%85%EB%8B%88%EB%8B%A4."
        }
    };
    result = result.replace("[","").replace("]","");
    if (type == undefined){
        type = this.LangMessageType;
    }
    if (itemInfo[type][result] != undefined){
        result = decodeURIComponent(itemInfo[type][result]);
    }
    return result;
};