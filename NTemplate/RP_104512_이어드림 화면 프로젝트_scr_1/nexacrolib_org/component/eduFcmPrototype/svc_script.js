/**
 * @fileoverview Transaction 공통처리 함수
 * 내부적으로 사용하는 라이브러리이며 업무에서 직접호출 하지 않는다
 * @version 1.0   버전
 */

/**
 * 변수 선언부
 * @param 없음
 * @return 없음
 */
var prForm = nexacro.Form.prototype;

prForm.svcvCallback = "_svcfCallback";					// Transaction CallBack 함수 정의
// this.svcvCmbcallback = "_svcfCmbcallback";		// Combo Transaction CallBack 함수 정의
prForm.svcvBizErrDelim = "#"; //transaction biz error delimiter


prForm.svcfGetServerUrl = function(){
	var gvurl = nexacro.getApplication().gv_ServerUrl == ""
			  || nexacro.getApplication().gv_ServerUrl == null
			  || nexacro.getApplication().gv_ServerUrl == undefined ? "localhost:8080" : nexacro.getApplication().gv_ServerUrl;
			  
	return gvurl;
};


 
/**
 * (공통만 사용)
 * 컴포넌트를 현재 컨텍스트에서 검색한다
 * @param  qualifiedComponentName : String - 컴포넌트명
 * @return 검색된 컴포넌트
 * @example var edt_stdent = this.svcfFindComponentInThisContext("edt_student");
 */
prForm.svcfFindComponentInThisContext = function(qualifiedComponentName){
	if(! qualifiedComponentName) return null;
	
	if(! qualifiedComponentName instanceof String){
		throw "문자열만 가능";
	}
	
	var component = this;
	var splited = qualifiedComponentName.split(".");
	for(var i in splited){
		var componentName = splited[i];
		component = this.svcfFindComponent(component, componentName);
	}  
	 
	return component;
};


/**
 * (공통만 사용)
 * 컴포넌트를 parent 안에서 검색한다
 * @param  parent : 컨테이너 컴포넌트
 * @param  findForComponentName : 찾을대상 컴포넌트명
 * @return 검색된 컴포넌트
 * @example var edt_stdent = this.svcfFindComponent(parent, findForComponentName);
 */
prForm.svcfFindComponent = function(parent, findForComponentName){
	if(parent.all){
		return parent.all[findForComponentName];
	}else if(parent.form){
		return parent.form.all[findForComponentName];
	}else{
		return null;
	} 
};

/**
 * (공통만 사용)
 * 컴포넌트를 parent 안에서 검색하고 
 * 못찾으면 현재 컨텍스트에서 검색한다
 * @param  parent : 컨테이너 컴포넌트
 * @param  findForComponentName : 찾을대상 컴포넌트명
 * @return 검색된 컴포넌트
 * @example var edt_stdent = this.svcfSearchComponent(parent, findForComponentName);
 */
prForm.svcfSearchComponent = function(parent, findForComponentName){
	var finded = this.svcfFindComponent(parent, findForComponentName);
	if(finded) return finded;
	
	if(finded){
		return svcfFindComponentInThisContext(findForComponentName);
	}	
};

/**
 * (공통만 사용)
 * 현재 컨텍스트에서 함수를 검색한다
 * @param  funcName : 함수명
 * @param  isThrowWhenNotFoundFunction : 찾지 못하면 오류를 발생할지 여부
 * @return 검색된 함수객체
 * @example 
 */
prForm.svcfFindFunctionInThisContext = function(funcName, isThrowWhenNotFoundFunction){
	var funcObject = this[funcName];
	
	if((typeof this[funcName]) == "function"){
		return funcObject;
	}else{
		if(isThrowWhenNotFoundFunction == true){
			alert("함수가 없습니다 : " + funcName);
			return null;
		}else{
			return null;
		}
	}
};

/**
 * (공통만 사용)
 * Null에 해당하는 값 체크.
 * @param  sValue - Null 확인 값
 * @return  true/false
 * @example  svcfIsNull(sValue);
 */
prForm.svcfIsNull = function(sValue)
{
	if( new String(sValue).valueOf() == "undefined")
		return true;
	if( sValue == null )
		return true;
	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
		return true;
	if( sValue.length == 0 )
		return true;
	return false;
};

/**
* Service 처리(일반 Service 호출에 적용).
* @param svcid 			- Transaction을 구분하기 위한 ID
* @param surl 			- Transaction을 요청할 주소
* @param inds 			- Input DatasetList
* @param outds 		- Output DatasetList
* @param args 			- Argument (key=value 쌍으로 구성)
* @param callback 	- Transaction 수행 후 결과 Return Fuctnion
* @param svctp			- Transaction Type 정의(Status 정보 표현:CRUD)
* @param strmsg		- 사용자 정의 Message 처리
* @param asynctp 	- 동기/비동기 설정(Default:true)
* @param bintp 		- Binary 처리 여부(Default:false)
* @param comtp 		- Data 압축 여부(Default:false)
* @return  CallBack Function에서 처리
* @example  svcfTransaction(svcid, surl, inds, outds, args, callback, svctp, asynctp, bintp, comtp)
*/
prForm.svcfTransaction = function(svcid, surl, inds, outds, args, callback, svctp, strmsg, asynctp, bintp, comtp)
{
//	if(this.smfGetCache("SYSTEM", "enableService") == "false"){
//		this.trace("서비스사용이 비활성화 되어 서버와 통신 할 수 없습니다");
//		throw "서비스사용이 비활성화 되어 서버와 통신 할 수 없습니다";
//	}
	if (this.svcfIsNull(svcid)) return false;
 	if (this.svcfIsNull(surl)) return false;
 	if (this.svcfIsNull(args)) args = "";
 	if (this.svcfIsNull(callback)) return false;

 	var svc_info = svcid;
 	var svcType, binType, comType;
 	var strMsg;

 	if (this.svcfIsNull(svcType)) svcType = "R";

 	svc_info += "|" + callback;
 	svc_info += "|" + svctp;
 	svc_info += "|" + strmsg;
	svc_info += "|" + this.smfTodayTime("S");

 	if (this.svcfIsNull(asynctp)) asynctp = true;
 	if (this.svcfIsNull(bintp)) binType = false;
 	if (this.svcfIsNull(comtp)) comType = false;

 	//trace(svc_info);
//  	if (! svcfIsNull(svctp) )
// 		application.mainframe.statustext = "조회 중.....";

	switch( svcType ) {
		case "C" :
			strMsg = "등록중입니다..";
			break;

		case "R" :
			strMsg = "조회중입니다..";
			break;

		case "U" :
			strMsg = "수정중입니다..";
			break;

		case "D" :
			strMsg = "삭제중입니다..";
			break;

		case "S" :
			strMsg = "저장중입니다..";
			break;
	}
	nexacro.getApplication().mainframe.set_statustext(strMsg);
	//var s_url = nexacro.replaceAll(surl,"svc_neis::",nexacro.getApplication().gv_dataprefix+this.svcfGetServerUrl());//surl.replace("svc_neis::","svc_neis::"+this.svcfGetServerUrl());
	//var s_url = "baseUrl::" + surl;
	var s_url = surl;
	if((s_url.indexOf("::")<0)
	 //&&(s_url.indexOf("://")<0)
	 )
	{
		s_url = "baseUrl::" + surl;
	}
	
// 	// 테스트를 위해
// 	if(svcid=="list")
// 	{
// 		if(this.dsEvlprList)
// 		{
// 			trace("$$$  svcfTransaction : this.dsEvlprList.rowcount=" + this.dsEvlprList.rowcount);
// 		}
// 	}
	
	this.trace(this.format("transaction {0}, url:{1}, inDatasets:{2}, outDatasets:{3}", [svcid, s_url, inds, outds]).replace("_dsBusinessMessage=businessMessage", ""));
	if(surl == "uds_ueu_dd00_012.do" || surl == "uds_ueu_dd00_603.do"){
		//대입전형 전용 transaction정의 xml방식에서 -> ssv방식 적용
		this.transaction(svc_info, s_url, inds, outds, args, this.svcvCallback, asynctp, 2, nexacro.getApplication().gv_compress);
	}else{
		this.transaction(svc_info, s_url, inds, outds, args, this.svcvCallback, asynctp, nexacro.getApplication().gv_bintp,nexacro.getApplication().gv_compress);
	}
	
};

/**
 * (공통만 사용)
 */
prForm.svcfSplitedMessage = function(sMessage, nSize){
	sMessage = this.smfStr(sMessage);
	var sResult = "";
	var sMsg = "";
	while((sMsg = this.smfStr(sMessage.substring(0, nSize))) != ""){
		sResult += sMsg + "\n";
		sMessage = sMessage.substr(nSize);
	}

	return sResult;
};

/**
 * (공통만 사용)
 */
prForm._svcfCallback = function(svcid, errcd, errmsg) {
    var arr = svcid.split("|");
	
	//서비스 오류 인터셉터
	if(errcd == -1 && (typeof this.fnServerErrorInterceptor) == 'function'){
		if(this.fnServerErrorInterceptor(arr[0], errcd, errmsg)) return;
	}
	
	var callbackNameInThisContext = arr[1];
	var callbackFunction = this[callbackNameInThisContext]; 

    var arrMsg = [];

// 테스트를 위해
// 	if(arr[0]=="list")
// 	{
// 		if(this.dsEvlprList)
// 		{
// 			trace("$$$  prForm._svcfCallback : this.dsEvlprList.rowcount=" + this.dsEvlprList.rowcount);
// 		}
// 	}


    this.svcfCheckSessionAfterServiceCallback(svcid, errcd, errmsg);

    try{
		// 로그남기는 것은 에러 무시
		var arrSvcId = svcid.split("|");
		
		// 에러나도 예외처리를 생략할 서비스아이디
		var arrExceptErrorSvcId = [
		                              "insertMenuHstr"   // 화면로그등록		
                             	  ];  
		if(!arrExceptErrorSvcId.includes(arrSvcId[0]))
		{
			if (errcd == -1) {
				nexacro.getApplication().mainframe.set_statustext("");    
				// -1 msg.alt.gps.otl.0002^사용여부에 사용으로 된 데이타가 두 개이상 존재합니다.
				// 2023.04.05 형식의 변경
				arrMsg = errmsg.split("|");
				strMsg =  arrMsg[1] + "\n" + "[" +  arrMsg[0] + "]";				
				//strMsg =  nexacro.replaceAll(errmsg,"\\n","\n");
				
				var originCallbackFunction = callbackFunction;
				callbackFunction = function(){
					this.smfLiteralAlert(strMsg.trim(), function(){
						originCallbackFunction.call(this, arr[0], errcd, errmsg);
					});
				};
			}
			else if (errcd == -100) {
				nexacro.getApplication().mainframe.set_statustext("");    
				// -1 msg.alt.gps.otl.0002^사용여부에 사용으로 된 데이타가 두 개이상 존재합니다.
				// 2023.04.05 형식의 변경
				//arrMsg = errmsg.split("|");
				//strMsg =  arrMsg[1] + "\n" + "[" +  arrMsg[0] + "]";
				strMsg =  nexacro.replaceAll(errmsg,"\\n","\n");
				
				var originCallbackFunction = callbackFunction;
				callbackFunction = function(){
					this.smfLiteralAlert(strMsg.trim(), function(){
						originCallbackFunction.call(this, arr[0], errcd, errmsg);
					});
				};
			}
		}else{
			errcd = 0;
			errmsg = "SUCCESS";
		}
		
        callbackFunction.call(this, arr[0], errcd, errmsg);
    }
	catch(e)
	{
		this.trace("_svcfCallback callback처리시 에러가 발생했습니다. : " + e);
	}
	finally{
        // ESC키로인해 중단된 경우 처리
        if(nexacro.getApplication().gv_EscKey == true){
            nexacro.getApplication().gv_EscKey = "";
        }

        nexacro.getApplication().gv_MsgCode = "";
        nexacro.getApplication().gv_MsgValue = "";
    }
};


// this._originsvcfCallback = function(svcid, errcd, errmsg) {
//     var arr = svcid.split("|");
//     var realSvcID = arr[0];
//     var realCallBack = arr[1];
//     var realSvcTP = arr[2];
//     var realMsg = arr[3];
// 
//     var arrMsg;
//     var strMsg;
// 
// 	var arrDBMsg;
// 	var arrErr;
// 
//     this.svcfCheckSessionAfterServiceCallback(svcid, errcd, errmsg);
// 
//     if (errcd == -1) {
//         nexacro.getApplication().mainframe.set_statustext("");
// 
// 
//         //alert("Transaction Error :: " + errcd + " - " + errmsg);
//         // -1 msg.alt.gps.otl.0002^사용여부에 사용으로 된 데이타가 두 개이상 존재합니다.
// 
//         arrMsg = errmsg.split("^");
// 
// 		strMsg =  arrMsg[1] + "\n";
// 		if(this.smfIsNull(arrMsg[0]) || arrMsg[0] == "null"){
// 		
// 		}else{
// 			strMsg += "[" + arrMsg[0]+ "]";
// 		}
// 
// 		if(nexacro.getApplication().gv_EscKey == true){
// 			//Esc Key에 의한 중단일 경우
// 			nexacro.getApplication().gv_EscKey = "";
// 		}else if(strMsg.indexOf("SQLSTATE=") > -1 ) {//DB의 중복에러메시지
// 			var nStart = strMsg.indexOf("SQLSTATE=");
// 			var sSqlState = strMsg.substring(nStart, strMsg.indexOf(",", nStart));
// 
// 			if(sSqlState == "SQLSTATE=23505"){
// 			this.alert_opacity("데이터 중복이 발생하였습니다.\n");
// 			}else if(sSqlState == "SQLSTATE=23502"){
// 			this.alert_opacity("필수항목 중 누락된 항목이 있습니다.\n");
// 			}else {
// 				arrDBMsg = strMsg.split("[");
// 				arrErr = strMsg.split(",");
// 				strMsg = arrDBMsg[0] + "\n";
// 
// 				// 2012.06.15(주정호) - 메시지 중 테이블명이 나오는 부분 제외하기 위하여 arrErr.length를 3으로 조정
// 				//for (var i=1; i<arrErr.length; i++) {
// 				for (var i=1; i<3; i++) {
// 
// 					if (i == 1) {
// 
// 						strMsg += "[";
// 
// 						// 2012.06.19(주정호) - 'SQLCODE=' 이전의 DB2 ERR 이라는 문구를 제외 하기 위한 처리 삽입
// 						var nSqlCode = arrErr[i].indexOf("SQLCODE=");
// 						if ( nSqlCode >= 0 ) {
// 							strMsg += " " + arrErr[i].substring(nSqlCode, arrErr[i].length);
// 						} else {
// 							strMsg += arrErr[i];
// 						}
// 
// 						continue;
// 					}
// 
// 					if (i == arrErr.length -1) strMsg += arrErr[i];
// 					else strMsg += arrErr[i] + " ]\n";
// 				}
// 
// 				//메시지 첫글자가 업무에러구분자면 alert을 띄우지 않는다.
// 				if((""+arrMsg[1]).charAt(0) != this.svcvBizErrDelim){
// 					strMsg += "\n\n해당 오류가 지속적으로 발생할 경우\n";
// 					strMsg += "오른쪽 상단의 [질의등록]을 통하여 질의를 등록해 주시기 바랍니다.";
// 				this.alert_opacity(strMsg, "시스템 오류 메시지", "error");
// 				}
// 			}
// 
// 		} else if(nexacro.getApplication().gv_MsgCode < 0 && nexacro.getApplication().length > 0) {
// 
// 			// 서버 통신이 끈겼을경우 처리
// 			if (nexacro.getApplication().gv_MsgCode == -2147418085) {
// 				if(nexacro.getApplication().gv_MsgValue.indexOf(".xp") > 0 || nexacro.getApplication().gv_MsgValue.indexOf(".do") > 0){
// 					//alert("시도 서버연결중 연결에 실패하였습니다.\n인터넷 연결 또는 시도 서버 연결을 확인하세요\n"+gv_MsgValue);
// 					//trace("시도 서버연결중 연결에 실패하였습니다.\n인터넷 연결 또는 시도 서버 연결을 확인하세요\n"+gv_MsgValue);
// 				}
// 			}else{
// 				// alert 인자 추가로 alert 스타일 변경(임시 주석)
// 				//alert("서비스 처리에서 오류가 발생하였습니다.\n["+gv_MsgCode+"]\n"+gv_MsgValue, "시스템 오류 메시지", "error");
// 			this.alert_opacity("서비스 처리에서 오류가 발생하였습니다.\n["+nexacro.getApplication().gv_MsgCode+"]\n"+nexacro.getApplication().gv_MsgValue);
// 			}
// 
// 		} else {
// 
// 			//메시지 첫글자가 업무에러구분자면 alert을 띄우지 않는다.
// 			if((""+arrMsg[1]).charAt(0) != this.svcvBizErrDelim) {
// 
//                 if(arrMsg[0] == "err.alt.alc.cor.0099") {
// 					this.svcfDisableService();
// 				this.alert_opacity(strMsg);
//                 this.alert_opacity("프로그램을 종료합니다.");
//                 	nexacro.getApplication().exit();
//                     return;
//                 } else if(arrMsg[0].indexOf("err.alt.alc.cor.0999") > -1 || arrMsg[0] == "err.alt.alc.cor.0999") {
// 					this.svcfDisableService();
// 
// 					strMsg = strMsg + "\n\n세션이 종료되어 나이스 업무창을 닫습니다.\n다시 나이스를 접속해 주시기 바랍니다.";
// 				this.alert_opacity(strMsg);
//                     nexacro.getApplication().exit();
//                     return;
//                 }else{
// 
//                 	if( arrMsg[0] == "err.alt.alc.cor.0001" || arrMsg[0] == "err.alt.alc.cor.0002" || arrMsg[0] == "err.alt.alc.cor.0003" ||
// 						arrMsg[0] == "err.alt.alc.cor.0011" || arrMsg[0] == "err.alt.alc.cor.0012" || arrMsg[0] == "err.alt.alc.cor.0021" ||
// 						arrMsg[0] == "err.alt.alc.cor.0022" || arrMsg[0] == "err.alt.alc.cor.0031" || arrMsg[0] == "err.alt.alc.cor.0051" ||
// 						arrMsg[0] == "err.alt.alc.cor.0041" || arrMsg[0] == "err.alt.alc.cor.0042" || arrMsg[0] == "err.alt.alc.cor.0001" ||
// 						arrMsg[0] == "err.alt.alc.cor.0061" || arrMsg[0] == "err.alt.alc.cor.0096" || arrMsg[0] == "err.alt.alc.cor.0097")
// 					{
// 						strMsg += "\n\n해당 오류가 지속적으로 발생할 경우\n";
// 						strMsg += "오른쪽 상단의 [질의등록]을 통하여 질의를 등록해 주시기 바랍니다.";
// 					this.alert_opacity(strMsg, "시스템 오류 메시지", "error");
// 
// 					} else {
// 						this.smfAlert(strMsg);
// 					}
// 				}
// 			}else{
// 				eval(arr[1] + "(arr[0], errcd, errmsg)");
// 				return;
// 			}
// 		}
// 		nexacro.getApplication().gv_MsgCode = "";
// 		nexacro.getApplication().gv_MsgValue = "";
//     } else {
//         if ( ! this.svcfIsNull(realMsg) ) {
//            this.alert_opacity(realMsg);
//         }
// 
//         switch( realSvcTP ) {
//             case "C" :
//                 strMsg = "자료 등록을 완료하였습니다.";
//                 break;
// 
//             case "R" :
//                 strMsg = "조회가 완료되었습니다.";
//                 break;
// 
//             case "U" :
//                 strMsg = "자료 수정을 완료하였습니다.";
//                 break;
// 
//             case "D" :
//                 strMsg = "자료 삭제를 완료하였습니다.";
//                 break;
// 
//             case "S" :
//                 strMsg = "자료 저장을 완료하였습니다.";
//                 break;
//         }
//         //trace("출력 메세지: "+strMsg+" ====>"+svcfIsNull(strMsg));
// 		if (this.svcfIsNull(strMsg)==false) {
// 			nexacro.getApplication().mainframe.set_statustext(strMsg);
//         } else {
// 			nexacro.getApplication().mainframe.set_statustext("");
//         }
//     }
// 
// //      if (! svcfIsNull(realSvcTP) )
// //      application.mainframe.statustext = "조회 완료..";
// 
// 	var callbackFunction = this[arr[1]]; 
// 	callbackFunction.call(this, arr[0], errcd, errmsg);
// };

/**
 * (공통만 사용)
 */
prForm.svcfEnableService = function(){
	this.smfSetCache("SYSTEM", "enableService", "true");
};
/**
 * (공통만 사용)
 */
prForm.svcfDisableService = function(){
	this.smfSetCache("SYSTEM", "enableService", "false");
};

/**
 * (공통만 사용)
 */
prForm.svcfCheckSessionAfterServiceCallback = function(svcid, errcd, errmsg){
	try{
		if ( this.smfIsQuickView() == "N" )
		{
			if(this.isNotNil(nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divTop)){
				if(this.isNotNil(nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divTop.form)){
					nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divTop.form.fnCheckSessionWhenAfterServiceCallback(svcid, errcd, errmsg, this); //서비스가 호출된 form을 넘긴다.
				}
			}
		}
	}catch(e){
		this.trace(e);
	}
};



// /**
//  * (공통만 사용)
// * Service 처리(기준 정보 처리 시 적용-Combo,List 등).
// * @param svcid 			- Transaction을 구분하기 위한 ID
// * @param surl 			- Transaction을 요청할 주소
// * @param inds 			- Input DatasetList
// * @param outds 		- Output DatasetList
// * @param args 			- Argument (key=value 쌍으로 구성)
// * @param callback 	- Transaction 수행 후 결과 Return Fuctnion
// * @param svctp			- Data 추가 여부 및 정보 설정
// * @param asynctp 	- 동기/비동기 설정(Default:true)
// * @param bintp 		- Binary 처리 여부(Default:false)
// * @param comtp 		- Data 압축 여부(Default:false)
// * @return  CallBack Function에서 처리
// * @example  svcfComboTransaction(svcid, surl, inds, outds, args, callback, svctp, asynctp, bintp, comtp)
// */
// this.svcfComboTransaction = function(svcid, surl, inds, outds, args, callback, svctp, asynctp, bintp, comtp)
// {
//  	if (this.svcfIsNull(svcid)) return false;
//  	if (this.svcfIsNull(surl)) return false;
//  	if (this.svcfIsNull(args)) return false;
//  	if (this.svcfIsNull(callback)) return false;
// 
//  	var svc_info = svcid;
//  	var asyncType, binType, comType;
// 
//  	var arrOutDS = outds.split("=");
// 
//  	svc_info += "|" + callback;
//  	svc_info += "|" + svctp;
//  	svc_info += "|" + arrOutDS[0];
// 
//  	if (this.svcfIsNull(asynctp)) asyncType = true;
//  	if (this.svcfIsNull(bintp)) binType = false;
//  	if (this.svcfIsNull(comtp)) comType = false;
// 
// 	var s_url = nexacro.replaceAll(surl,"svc_neis::",nexacro.getApplication().gv_dataprefix+this.svcfGetServerUrl());//surl.replace("svc_neis::","svc_neis::"+this.svcfGetServerUrl());
// 	this.trace("svc_script s_url : >>>>>>>>> " + s_url);
// 
// 	transaction(svc_info, s_url, inds, outds, args, this.svcvCmbcallback,asyncType,nexacro.getApplication().gv_bintp);
// };

// /**
//  * (공통만 사용)
//  * Service 호출 후 CallBack Function.
//  * @param svcid		- Transaction을 구분하기 위한 ID
//  * @param errcd 	- Error Code
//  * @param errmsg	- Error Message
//  * @return  N/A
//  * @example  _svcfCmbcallback(svcid, errcd, errmsg)
// */
// this._svcfCmbcallback = function(svcid, errcd, errmsg) {
//   //trace(svcid + " :: " + errcd + " : :" + errmsg);
// 
// 	if (errcd != 0) {
// 		// alert 인자 추가로 alert 스타일 변경(임시 주석)
// 		//alert("Transaction Error :: " + errcd + " - " + errmsg, "시스템 오류 메시지", "error");
// 	this.alert_opacity("Transaction Error :: " + errcd + " - " + errmsg);
// 	}
// 
//  	var arr = svcid.split("|");
//  	var realSvcID = arr[0];
//  	var realCallBack = arr[1];
// 	var realSvcTP = arr[2];
// 	var realDS = arr[3];
// 
// 	var arrColInfo = arr[2].split("@");
// 	var curRow = 0;
// 
// 	if ( ! this.svcfIsNull(arrColInfo) ) {
// 
// 		if (arrColInfo[4] == "TOP") {
// 			this.svcfFindComponentInThisContext(realDS).insertRow(curRow);
// 		} else if (arrColInfo[4] == "BOTTOM"){
// 			curRow = this.svcfFindComponentInThisContext(realDS).addRow();
// 		}
// 
// 		this.svcfFindComponentInThisContext(realDS).setColumn(curRow, arrColInfo[0], arrColInfo[1]);
// 		this.svcfFindComponentInThisContext(realDS).setColumn(curRow, arrColInfo[2], arrColInfo[3]);
// 	}
// 
// 	var callbackFunctionName = arr[1];
// 	var func = this.smfFindFunctionInThisContext(callbackFunctionName, true);
// 	func.call(this, arr[0], errcd, errmsg);
// };

/**
 * (공통만 사용)
 * Validation 체크.
 * @param  vObj		- Validation Check 대상(Division Object)
 * @return  true/false
 * @example  svcfGetValidateCompList(vObj)
 */
prForm.svcfGetValidateCompList = function(vObj)
{
	var container = vObj;
	var arrayCompList = new Array();
	var propType;
	arrayCompList = this.svcfSortByTabOrder(vObj);

	for (var i = 0; i < arrayCompList.length; i++) {
		this.svcfTrimTextIfComponentIsTextArea(arrayCompList[i]);

		if(this.smfIsNull(arrayCompList[i].validate)) continue;
		
		// requiredValidation은 visible, enable에 관계없이
		// 유효성검사를 수행한다
		if(arrayCompList[i].requiredValidation != "true"){
			// Visible = false인 경우 예외 처리
			if(arrayCompList[i].visible == false) continue;
			if(arrayCompList[i].enable == false) continue;
		}

		propType = "value";

		if(arrayCompList[i] instanceof nexacro.Calendar) propType = "text";
		var arrValid = arrayCompList[i].validate;

		if (this._svcfGetValidItem(container, arrayCompList[i], arrValid, propType) == false) {
			var cObj = arrayCompList[i];
			return false;
		}
	}

	return true;
};


/**
 * (공통만 사용)
 * TextArea의 값을 trim한다.
 *
 * @see
 */
prForm.svcfTrimTextIfComponentIsTextArea = function(textarea){
	if(!(textarea instanceof nexacro.TextArea)) return;
	if(textarea.readonly == true) return;
	if(textarea.visible != true) return;
	if(textarea.enable != true) return;

	var textareaValue = this.smfStr(textarea.value);
	var trimedValue = nexacro.trim(textareaValue);

	//trim한 결과와 같지 않은 경우만 변경한다.
	if(textareaValue == trimedValue) return;

	try{
		var oBindItem = this.smfBindItemByComponent(textarea);
		var bindedDataset = this.smfFindComponentInThisContext(oBindItem.datasetid);
		if(bindedDataset == null || bindedDataset == undefined){
			textarea.set_value(trimedValue);
			return;
		}

		// ROW가 insert나 update된 데이터만 trim처리한다.
		var rowtype = bindedDataset.getRowType(bindedDataset.rowposition);
		if(rowtype == Dataset.ROWTYPE_INSERT || rowtype == Dataset.ROWTYPE_UPDATE){
			textarea.set_value(trimedValue);
			return;
		}
	}catch(e){
		this.trace(e + " " + e.message);
	}
};

/**
 * (공통만 사용)
 * Composite 컴포넌트 내의 Component들을 taborder 순으로 정렬하여 리턴한다.
 *
 * @param  oComposite : Composite 컴포넌트(div, tab, tabpage)
 * @return object Array
 * @see
 */
prForm.svcfSortByTabOrder = function(oComposite){
    var aryUnsorted = [];
	this._svcfTravelComponents(oComposite, function(comp, nLvl, owner){
        if(comp.taborder == undefined) return;
        if(nLvl == 1){
            owner._sort = 1;
        }

        comp._sort = (owner._sort) + ((comp.taborder+1) / Math.pow(10, nLvl));
        aryUnsorted.push(comp);
	});

    this._svcfSortArray(aryUnsorted, function(a, b){
        return a._sort > b._sort;
    });

    return aryUnsorted;
};


/**
 * (공통만 사용)
 */
prForm._svcfGetComponents = function(containerComponent){
	if(this.isNil(containerComponent)) return [];
	
	if(containerComponent.components) {
		return containerComponent.components;
	} else if(containerComponent.form && containerComponent.form.components) {
		return containerComponent.form.components;
	} else {
		throw "오류";
		return [];
	}
};

/**
 * (공통만 사용)
 * oOwner에 해당하는 Component를 재귀적으로 호출한다.
 *
 * @param  oOwner : Composite 컴포넌트(form, div, tab, tabpage)
 * @param  fncCallback : 재귀적으로 호출하는 function
 * @param  nLvl : component depth
 * @return object array
 * @see
 */
prForm._svcfTravelComponents = function(oOwner, fncCallback, nLvl){
	if(nLvl == undefined) nLvl = 1;

	var comps = this._svcfGetComponents(oOwner);

	for(var i=0,size=comps.length; i<size; i++){
		var oComp = comps[i];
		fncCallback(oComp, nLvl, oOwner);

		if(oComp instanceof nexacro.Div){
		   this._svcfTravelComponents(oComp, fncCallback, nLvl+1);
		}else if(oComp instanceof nexacro.Tab){
			this._svcfTravelComponents(oComp, fncCallback, nLvl+1);
		}else if(oComp instanceof nexacro.Tabpage){
		   this._svcfTravelComponents(oComp, fncCallback, nLvl+1);
		}
	}
};

/**
 * (공통만 사용)
 * a에 해당하는 component들을 fncCompare 순으로 Sort 한다.
 *
 * @param  a : Component Array
 * @param  fncCompare : 정렬기준
 * @return object array
 * @see
 */
prForm._svcfSortArray = function(a, fncCompare){
    for (var i = 1; i < a.length; i++) {
        var j = i;
        var tmp = a[i];

        while ((j > 0) && fncCompare(a[j - 1], tmp)) {
            a[j] = a[j - 1];
            j--;
        }

        a[j] = tmp;
    }
};

/**
 * (공통만 사용)
 * Validation 체크 목적의 컴포넌트 value를 얻는다
 * @param  component		- 체크 대상 Object
 * @param  strVal 	- Check 항목(","로 구분)
 * @param  strProp	- Object 속성 확인(value/text)
 * @return  N/A
 * @example  _svcfGetValidItem(component, strVal, strProp)
 */
prForm._svcfGetComponentValue = function(component) {
	var componentValue = "";

	
	if(component instanceof nexacro.ImageViewer){
        componentValue = component.image;
	} else if(component instanceof nexacro.CheckBox){
		if(component.value == true || component.value == "true"){
			componentValue = "true";
		}else if(this.isNotNil(component.truevalue) && component.truevalue == component.value){
			componentValue = component.truevalue;
		}
	} else if(component instanceof nexacro.Calendar){
		componentValue = this.smfReplace(component.text, ".", "").trim();
    }else if ("value" in component) {
		componentValue = component.value;
    }else if ("text" in component) {
		componentValue = this.smfReplace(component.text, "-", "");
		componentValue = this.smfReplace(componentValue, ".", "");
	}else{
		this.trace("알수 없는 컴포넌트 value : " + component.name + " " + component);
		componentValue = "";
	}
	
	return componentValue;
};

/**
 * (공통만 사용)
 * Validation 체크 Component 추출.
 * @param  component		- 체크 대상 Object
 * @param  strVal 	- Check 항목(","로 구분)
 * @param  strProp	- Object 속성 확인(value/text)
 * @return  N/A
 * @example  _svcfGetValidItem(component, strVal, strProp)
 */
prForm._svcfGetValidItem = function(container, component, strVal, strProp) {
	var arrValid = strVal.split(",");
	//trace("check >>>> " + strVal + " :: " + arrValid);
	// if(arrValid.length < 2) return;

	var labelText = this.smfGetLabelOf(component);
	
	var arrItem = arrValid[0].split(":");
	var strItem = arrItem[1];

	var componentValue = this._svcfGetComponentValue(component);

	//2013.03.05 문호상 추가
	if(component instanceof nexacro.Edit){
		// Edit컴포넌트에 엔터값이 들어가는것을 막음
		if(this.smfStr(componentValue).indexOf("\n") != -1){
			var invalidEditValueMessage = labelText + " 항목에 엔터값이 포함되어있습니다.\n□와 같이 보이는 특수문자를 제거하세요\n아래아한글,엑셀 또는 다른 프로그램에서 붙여넣기 한 경우에 □값이 포함될 수 있습니다";
			this.smfLiteralAlert(invalidEditValueMessage);
			component.setFocus();
			throw invalidEditValueMessage;
		}
	}
	if(component instanceof nexacro.Edit || component instanceof nexacro.TextArea){
		if(! this._svcfIsValidCharacters(componentValue)){
			var invalidEditValueMessage = labelText + " 항목에 입력불가능한 문자가 포함되어있습니다.\n" + String.fromCharCode(56194) + "와 같이 보이는 특수문자를 제거하세요\n아래아한글,엑셀 또는 다른 프로그램에서 붙여넣기 한 경우에 " + String.fromCharCode(56194) + " 값이 포함될 수 있습니다";
			this.smfLiteralAlert(invalidEditValueMessage);
			component.setFocus();
			throw invalidEditValueMessage;
		}
	}
	
	// required가 포함되어있지 않고 빈값이면 건너띔
	var rulesetExpression = strVal;
	
	var ruleMap = this.smfRuleExpressionToMap(rulesetExpression);
	
	var hasGroupRequired = rulesetExpression.indexOf("grouprequired") != -1;
	if(hasGroupRequired == false){
		if(rulesetExpression.indexOf("required") == -1 || rulesetExpression.indexOf("required:false") != -1){
			if (this.isNil(componentValue)) {
				return true;
			}
		}
	}

	for (var j=0; j<arrValid.length; j++) {
		var ruleExpression = arrValid[j];
		var ruleName = ruleExpression.split(":")[0];
		
		if(this._svcfIsIgnoreRule(ruleName)) continue;
		var rtnVal = this._svcfProcValidationChk(container, componentValue, ruleExpression, labelText, component);

		if(rtnVal == "title") continue;
		
		if(rtnVal == "SKIP") {
			return true;
		} else if (rtnVal != true) {
			// alert 인자 추가로 alert 스타일 변경(임시 주석)
			//alert(rtnVal, "시스템 오류 메시지", "error");
			
			// 포커스 컴포넌트
			if(this.smfHasRule(ruleMap, "focus")){
				var focusRule = this.smfGetRule(ruleMap, "focus");
				var focuedPropertyName = focusRule.params[0];
				var bindinfo = this.smfBindItemByComponent(component);
				var propertyBindInfo = this.smfBindItemByDatasetColumnName(bindinfo.datasetid, focuedPropertyName);
				var focusComponent = this.smfFastFindComponent(this, propertyBindInfo.compid);
				if(this.isNotNil(focusComponent)){
					focusComponent.setFocus();
				}
			}else{
				component.setFocus();
			}
			
			var message = this._svcfGetInvalidMessage(rtnVal, ruleName, ruleMap);
			this.smfLiteralAlert(message);
			//break;
			return false;
		}
	}

	return true;
};


/**
 * (공통만 사용) 유효성검사 메시지를 얻는다
 * propertymessage, fullymessage가 지정되어있다면 그 메시지를 리턴한다
 * vld_script smfGetRuleMapperList 참조
 */
prForm._svcfGetInvalidMessage = function(message, ruleName, ruleMap){
	var resultMessage = "";
	// vld_script smfGetRuleMapperList참조
	// propertymessage = 프로퍼티에 대한 메시지를 지정한다. 어떤 룰이 invalid가 발생해도 이 메시지가 표시된다	
	if("propertymessage" in ruleMap){
		resultMessage = this.smfUnescapeValidationExpression(this.smfStr(ruleMap.propertymessage));
	}else if(("fullymessage_" + ruleName) in ruleMap){ 
		// 룰에 대한 전체 메시지를 지정한다
		// vld_script smfGetRule 참조
		var rule = this.smfGetRule(ruleMap, "fullymessage_" + ruleName);

		// vld_script 참조 converters["for-fully-message"] = function(rule){
		var fullyMessage = rule.params[0];
		resultMessage = this.smfUnescapeValidationExpression(fullyMessage);
	}
	
	if(this.isNotNil(resultMessage)){
		return resultMessage;
	}else{
		return message;
	}
};


/**
 * (공통만 사용) 검증 무시하는 rule인지 여부
 */
prForm._svcfIsIgnoreRule = function(ruleName){
	if(ruleName.indexOf("fullymessage") == 0) return true;
	if(ruleName.indexOf("propertymessage") == 0) return true;
	
	return false;
};

prForm._svcfGetLabelWithPostPosition = function(label, postPositionOflastConsonant, postpositionOfAVowel){
	// 받침이 있는 낱말의 조사
	postPositionOflastConsonant = postPositionOflastConsonant || "은";
	// 받침이 없는 낱말의 조사
	postpositionOfAVowel = postpositionOfAVowel || "는";
	
	return this.smfGetWordWithPostPosition(label, postPositionOflastConsonant, postpositionOfAVowel);
};

/**
 * (공통만 사용)
 * Check 항목에 대한 Object의 Value 확인.
 * @param propertyValue	- Validation 체크 Value
 * @param rulesetExpression 		- Validation 항목
 * @param labelText	- Message 출력용 Object Name
 * @return  true/strin(Message)
 * @example  _svcfProcValidationChk(propertyValue, rulesetExpression, labelText)
 */
prForm._svcfProcValidationChk = function(container, propertyValue, rulesetExpression, labelText, component) {
	var rtnVal = true;
	var strMsg = "";
	var arrValid = rulesetExpression.split(":");
	var strCompareTitle;

	var ruleName = arrValid[0];
	switch( ruleName ) {
		case "title" :
			rtnVal = "title";
			return rtnVal;

		case "required" :
			if (this.smfIsNull(this.smfTrim(propertyValue))) {
				if (arrValid[1] == "false") {
					rtnVal = "SKIP";
				} else {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 필수입니다";
				}
			} 
			break;
		
		case "grouprequired":
			// arrValid
			var propertyNames = arrValid.join(",");
			// grouprequired,name,genrCode -> name,genrCode
			propertyNames = propertyNames.substring("grouprequired".length+1);
			var aryPropertyName = propertyNames.split(",");
			
			// 
			var bindinfo = this.smfBindItemByComponent(component);
			var dataset = this.lookup(bindinfo.datasetid);
			
			if(this.isNil(dataset)){
				var invalidMessage = this.format("1 grouprequired를 쓰려면 지정된 프로퍼티에 바인드되어있는 컴포넌트들은 Dataset과 바인딩 되어 있어야 합니다", [this.smfGetQualifiedName(component)]);
				this.trace(invalidMessage);
			}

			var isNullAll = true;
			for(var idx in aryPropertyName){
				var propName = aryPropertyName[idx];
				
				var propertyBindInfo = this.smfBindItemByDatasetColumnName(bindinfo.datasetid, propName);
				
				if(this.isNil(propertyBindInfo)){
					var invalidMessage = this.format("2 grouprequired에 나열된 프로퍼티({0} in {1})의 데이터셋({2}에서 바인드정보를 찾을 수 없습니다", [propName, propertyNames, dataset.name]);
					this.trace(invalidMessage);
					continue;
				}

				var componentNamedPropertyName = this.smfFastFindComponent(this, propertyBindInfo.compid);
				if(this.isNil(componentNamedPropertyName)){ 
					var invalidMessage = this.format("3 grouprequired에 나열된 프로퍼티({0} in {1})의 바인드정보({2})를 찾았지만 연결된 컴포넌트가 null입니다", [propName, propertyNames, propertyBindInfo.compid, propertyBindInfo.compid]);
					this.trace(invalidMessage);

					continue;
				}
				
				var eachComponentValue = this._svcfGetComponentValue(componentNamedPropertyName);
				if(! this.smfIsNull(eachComponentValue)){
					isNullAll = false;
					break;
				}
			}
			
			if (isNullAll == true) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 필수입니다";
			}else{
				rtnVal = "SKIP";
			}
			break;
			

		case "trim" :
			propertyValue = this.smfStr(propertyValue).trim();
			break;


		case "digits" : // 0-9 0포함 양수
			var maxlength = parseInt(arrValid[1]);
			if (this.smfIsNum(propertyValue) && propertyValue.indexOf(".") == -1 && propertyValue.indexOf("-") == -1){
				if(this.smfIsNum(arrValid[1])){
					if(this.smfStr(propertyValue).length <= maxlength){
						return true;
					}
				}else{
					return true;
				}
			}
			 
			
			if(propertyValue.indexOf("-") != -1){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소 0부터 입력하세요";
			}else if(propertyValue.indexOf(".") != -1){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 소수점은 입력할 수 없습니다";
			}else if(this.smfIsNum(maxlength) && this.smfStr(propertyValue).length > maxlength){
				rtnVal = this.format(this._svcfGetLabelWithPostPosition(labelText) + " 최대 {0}자리까지 입력하세요", [maxlength]);
			}else{
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
			}
			
			break;

		case "smallinteger" : // 2byte
		case "integer" : // 4byte
		case "biginteger" : // 8byte
			if(ruleName == "smallinteger"){
				var min = parseInt("-32_768".replace(/_/g, ""));
				var max = parseInt("32_767".replace(/_/g, ""));
			}else if(ruleName == "integer"){
				var min = parseInt("-2_147_483_648".replace(/_/g, ""));
				var max = parseInt("2_147_483_647".replace(/_/g, ""));
			}else{
				var min = parseInt("-9_223_372_036_854_775_808".replace(/_/g, ""));
				var max = parseInt("9_223_372_036_854_775_807".replace(/_/g, ""));
			}
			
			if (propertyValue.search(/^(-)?([0-9]+)$/) == 0){
				if(min <= Number(propertyValue) && Number(propertyValue) <= max){
					break;
				}else{ 
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 범위를 벗어난 입력입니다";
				}
			}else{
				if(propertyValue.indexOf(".") != -1){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 소수점은 입력할 수 없습니다";
				}else{
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
				}			
			}
			
			break;

		case "number" : //숫자
			if (this.smfIsNum(propertyValue)) return true;
			
			rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
			break;
		case "decimal" :
			if(this.smfIsNum(propertyValue)){
				var expectedMaxDigitLength = parseInt(arrValid[1]); //
				var expectedMaxDecimalLength = parseInt(arrValid[2]);
				var isExistDot = propertyValue.indexOf(".");
				// 음수인 경우 -가 길이로 포함되기 때문에 숫자로 변환하여 다시 문자로 변환하여 길이를 얻는다
				var actualMaxDigitLength = (Math.abs(propertyValue.split(".")[0])+"").length; 
				var actualMaxDecimalLength = (Math.abs(this.nvl(propertyValue.split(".")[1], 0))+"").length;
			
				if(expectedMaxDigitLength < actualMaxDigitLength){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + this.format("최대 {0}자리까지 입력할 수 있습니다", [arrValid[1]]);
				}else if(expectedMaxDecimalLength < actualMaxDecimalLength){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + "  " + this.format("소수점 자리는 {0}자리까지 입력할 수 있습니다", [arrValid[2]]);
				}else {
					return true;
				}
			}else{
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자로 입력해야 합니다";
// 				if(expectedMaxDecimalLength < actualMaxDecimalLength){
// 				}else{
// 					return true;
// 				}
			}
			break;
		case "date":
			if (!this.isNil(propertyValue)) {
				if (!this.smfIsDate(propertyValue)) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 날짜 형식만 입력 가능합니다";
				}
			}
			break;

		case "dateym" :
			if (!this.smfIsNull(this.smfTrim(propertyValue, ""))) {
				if (!this.smfIsDate(propertyValue + "01")) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 년월 형식만 입력 가능합니다";
				}
			}
			break;

		// 외국인등록번호
		case "frn" :
			if (! this.smfIsForeignNo(propertyValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;
		case "rrn" :
		case "jumin" :
			if (! this.smfIsRsrNo(propertyValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;

		case "rrnold" :
			if (! this.smfIsRsrNoOld(propertyValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;

		// 사용안함
		case "rrnbefore" :
			if (! this.smfIsRsrNo(propertyValue+"1111111")) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;
		// 사용안함
		case "rrnafter" :
			if (! this.smfIsRsrNo("991111"+propertyValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;
		
		case "max" :
			if (parseInt(propertyValue) > parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최대값은 " + arrValid[1] + "입니다.";
			}
			break;

		case "min" :
			if (parseInt(propertyValue) < parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소값은 " + arrValid[1] + "입니다.";
			} 
			break;
		case "fixedlength":
			if (this.smfStr(propertyValue).length == parseInt(arrValid[1])) return true;
		
			rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + arrValid[1] + "자리로 입력하세요";
		break;

		case "maxlength" :
			if (propertyValue.length > parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최대 " + arrValid[1] + "자리입니다";
			}
			break;

		case "minlength" :
			if (propertyValue.length < parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소 " + arrValid[1] + "자리입니다";
			}
			break;

		case "maxlengthB" :
			if (this.smfLenB(propertyValue) > parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최대 " + arrValid[1] + "자리입니다.\n(한글 3Byte, 영문/숫자 1Byte)";
			}
			break;

		case "minlengthB" :
			if (this.smfLenB(propertyValue) < parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소 " + arrValid[1] + "자리입니다.\n(한글 3Byte, 영문/숫자 1Byte)";
			}
			break;

		case "equallen" :
			if (propertyValue.length != parseInt(arrValid[1])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 길이는 " + arrValid[1] + "입니다.";
			}
			break;

// 		case "comparemax" :
// 			var otherComponent = this.svcfSearchComponent(container, arrValid[1]);
// 			if (parseInt(this.smfReplace(propertyValue, "-", "")) < parseInt(otherComponent.value)) {
// 				var otherComponentLabel = this.smfGetLabelOf(otherComponent);
// 				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherComponentLabel + " 보다 작습니다.";
// 			}
// 			break;

		case "comparemax" :
		case "comparemin" :
			var otherComponentNameOrColumnName = arrValid[1];
			var other = this.smfSearchComponentForValidate(container, component, otherComponentNameOrColumnName);
			
			
			
			if(other.value){
				var isValidCompare = true;
				
				if(ruleName == "comparemin"){
					isValidCompare = parseFloat(this.smfReplace(propertyValue, "-", "")) <=  parseFloat(other.value);
				}else if(ruleName == "comparemax"){
					isValidCompare = parseFloat(this.smfReplace(propertyValue, "-", "")) >=  parseFloat(other.value);
				}
				
			
				if ( ! isValidCompare ) {
					var otherComponentLabel = "";
					if(other.component){
						otherComponentLabel = this.smfGetLabelOf(other.component);
					}
					// 적당한 레이블이 없으면 text를 표현한다
					if(! otherComponentLabel){
						otherComponentLabel = other.text;
					}
					
				
					if(ruleName == "comparemin"){
						rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherComponentLabel + " 보다 큽니다";
					}else if(ruleName == "comparemax"){
						rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherComponentLabel + " 보다 작습니다";
					}
				}
			}
			break;

		case "equalto" :
			var otherComponentNameOrColumnName = arrValid[1];
			var other = this.smfSearchComponentForValidate(container, component, otherComponentNameOrColumnName);
			
			var otherComponentLabel = "";
			if(other.component){
				otherComponentLabel = this.smfGetLabelOf(other.component);
			}
			// 적당한 레이블이 없으면 text를 표현한다
			if(! otherComponentLabel){
				otherComponentLabel = other.text;
			}
			
			
			if (propertyValue != other.value) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherComponentLabel + "와(과) 동일해야 합니다";
			}
			break;

		case "range" :
			if (parseInt(propertyValue) < parseInt(arrValid[1]) || parseInt(propertyValue) > parseInt(arrValid[2])) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + arrValid[1] + " ~ " + arrValid[2] + " 사이의 값입니다.";
			}
			break;

		case "zipcd":
		case "zipcode":
			if(this.smfStr(propertyValue).length != 5){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + " 5자리로 입력해야 합니다.";
			}
			break;

 		case "function" :
			var func = this.svcfFindFunctionInThisContext(arrValid[1], true);
			rtnVal = func.call(this, component);
			break;

		case "bizno" : //사업자등록번호
			if(! this.smfIsBizno(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "corpno" : // 법인번호
			if(! this.smfIsCorpRegNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "mobileno" : // 모바일번호
			if(! this.smfIsMobileNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "phoneno" : // 전화번호
			if(! this.smfIsPhoneNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;
 
		case "email" : // 이메일
			if(! this.smfIsEmail(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "uon" : // 사용여부(Y/N)
			if(this.notIn(propertyValue, ["Y", "N"])){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;			
 
		case "boolean" : // 사용여부(Y/N)
			if(this.notIn(propertyValue+"", ["1", "0"])){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;			

		case "between": // from,to			
			var val = parseFloat(propertyValue);
			var fromValue = parseFloat(arrValid[1]);
			var toValue = parseFloat(arrValid[2]);
			
			if (! this.between(val, fromValue, toValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + fromValue + " ~ " + toValue + " 사이 값으로 입력해야 합니다";
			}
			break;
			
		case "comparebetween": // from,to
			var otherComponentNameOrColumnName = arrValid[1];
			var other = this.smfSearchComponentForValidate(container, component, otherComponentNameOrColumnName);
		
			var fromComponent = this.svcfSearchComponent(container, arrValid[1]);
			var toComponent = this.svcfSearchComponent(container, arrValid[2]);
			
			var val = parseFloat(propertyValue);
			var fromValue = parseFloat(fromComponent.value);
			var toValue = parseFloat(toComponent.value);
			
			if (! this.between(val, fromValue, toValue)) {
				var fromComponentLabel = this.smfGetLabelOf(fromComponent);
				var toComponentLabel = this.smfGetLabelOf(toComponent);
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + fromValue + " ~ " + toValue + " 사이 값으로 입력해야 합니다";
			}
			break;

		case "focus": // from,to
			rtnVal = "SKIP";
			break;
 		default :
 			rtnVal = "Validation 구분이 명확하지 않습니다.\n" + arrValid;
			break;
	} 

	return rtnVal;
};

/**
 * (공통만 사용)
 * Check 항목에 대한 Object의 Value 확인.
 * @param grid				- Validation 체크 대상 Grid
 * @param dsValid	- Validation 체크
 * @return  true/false
 * @example  svcfDsValidCheck(grid, dsValid)
 */
prForm.svcfDsValidCheck = function(grid, dsValid) {
	var datasetOfGrid;
	if(grid instanceof nexacro.Dataset){
		datasetOfGrid = grid;
	} else {
		datasetOfGrid = this.smfFindComponentInThisContext(grid.binddataset);
	}

	var nRowCnt = datasetOfGrid.getRowCount();
	var nColCnt = datasetOfGrid.getColCount();
	var invalidResult = {};

	for (var i=0;i<nRowCnt;i++) {
		for (var j=0;j<nColCnt;j++) {
			//trace(j+"해당값: "+datasetOfGrid.getColumn(i,j));
			//Row Type이 insert(2), update(4)일 경우에만
			if (datasetOfGrid.getRowType(i) == 2 || datasetOfGrid.getRowType(i) == 4) {
				//필수입력항목이면
				var columnName 	= datasetOfGrid.getColID(j);
				var validateExpression = this.getValidateExpressionOfGrid(columnName, datasetOfGrid.getRowType(i), dsValid);
				var rtnVal = this._svcfItemCheck(i,j,grid,datasetOfGrid, dsValid, invalidResult);
				
				

				if (rtnVal != true) {
					var bindCellIndex = grid.getBindCellIndex("Body",datasetOfGrid.getColID(j));
					var rowIndex = i;
					var showGridFocus = this.smfStr(dsValid.getColumn(0,j)).indexOf("focus") == -1;
					
					var ruleName = invalidResult.ruleName;
					var ruleMap = this.smfRuleExpressionToMap(validateExpression);
					var message = this._svcfGetInvalidMessage(rtnVal, ruleName, ruleMap);
					
					this.smfLiteralAlert(message, function(){
						if (showGridFocus == true) {
							grid.setFocus();
							grid.setCellPos(bindCellIndex);
							datasetOfGrid.set_rowposition(rowIndex);
							grid.showEditor(true);
						} else {
							var ruleMap = this.smfRuleExpressionToMap(this.smfStr(dsValid.getColumn(0,j)));
							var focusRule = this.smfGetRule(ruleMap, "focus");
							var focusPropertyName = focusRule.params[0];
							var focusComponent = this.smfFastFindComponent(this, focusPropertyName);
							if(this.isNotNil(focusComponent)){
								focusComponent.setFocus();
							}else{
								// 프로퍼티명을 이용하여 그리드에 바인드되어있는 
								// 셀을 찾아서 focus를 set한다
								var bodyCellCount = grid.getCellCount("body");
								for (var x=0,sizex=bodyCellCount; x<sizex; x++){
									var xColumnName = grid.getCellProperty("body", x, "text");
									xColumnName = this.smfStr(xColumnName).split(":")[1];
									
									if(xColumnName == focusPropertyName){
										showGridFocus = true;
										grid.setFocus();
										grid.setCellPos(x);
										datasetOfGrid.set_rowposition(rowIndex);
										grid.showEditor(true);
										break;
									}
								}
							}
						}
					}, 
					// 내부용 internalCallback
					function(){
						if(showGridFocus){
							// callback에서 showEditor를 처리하면
							// 팝업이 닫히기 전에 호출되기 때문에
							// showEditor가 제대로 처리되지 않는다
							// 따라서 popup이 닫힌후에 호출되는 internalCallback을 이용하여
							// showEditor를 수행한다
							grid.showEditor(true);
						}
					});

					return false;
				}
			}

		}
	}
	
	return true;
};


/**
 * (공통만 사용)
 * rowType에 따른 validateExpression을 얻는다
 * @param  columnName - validation을 검증할 컬럼명
 * @param rowType - RowType
 * @param dsValid	- Check Info Dataset
 * @return  String(validateExpression)
 */
prForm.getValidateExpressionOfGrid = function(columnName, rowType, dsValid){
	if(dsValid.rowcount == 1){
		return this.smfStr(dsValid.getColumn(0, columnName));
	}else{
		var expression = "";
		
		if(Dataset.ROWTYPE_INSERT == rowType){
			expression = this.smfStr(dsValid.getColumn(0, columnName));
		}else if(Dataset.ROWTYPE_UPDATE == rowType){
			// 표현식이 = 로되어있으면
			// insert와 같은 값을 사용한다
			expression = this.smfStr(dsValid.getColumn(1, columnName));
			if(expression == "="){
				expression = this.smfStr(dsValid.getColumn(0, columnName));
			}
		}
		
		return expression;
	}
};

/**
 * (공통만 사용)
 * Check 항목에 대한 Object의 Value 확인. 
 * @param  rowPosition				- Check Dataset의 Row Position
 * @param columnIndex 			- Check Dataset의 Row Column
 * @param grid			- Check 대상 Grid Object
 * @param datasetOfGrid				- Grid Binding Dataset
 * @param dsValid	- Check Info Dataset
 * @return  true/string(Message)
 * @example  _svcfItemCheck(rowPosition, columnIndex, grid, datasetOfGrid, dsValid)
 */
prForm._svcfItemCheck = function(rowPosition, columnIndex, grid, datasetOfGrid, dsValid, invalidResult) {
    var columnName 	= datasetOfGrid.getColID(columnIndex);
	var validateExpression = this.getValidateExpressionOfGrid(columnName, datasetOfGrid.getRowType(rowPosition), dsValid);
	
	if (this.smfIsNull(validateExpression)) {
		return true;
	}
	
	var ruleMap = this.smfRuleExpressionToMap(validateExpression);
	var rulesets = validateExpression.split(",");
	var value = datasetOfGrid.getColumn(rowPosition, columnIndex);
	var columnName = datasetOfGrid.getColumnInfo(columnIndex).name;
	var labelText = this.smfGetLabelOfGridColumn(grid, datasetOfGrid, validateExpression, columnName);
	
	// required가 포함되어있지 않고 빈값이면 건너띔
	var hasGroupRequired = validateExpression.indexOf("grouprequired") != -1;
	if(hasGroupRequired == false){
		if(validateExpression.indexOf("required") == -1 || validateExpression.indexOf("required:false") != -1){
			if (this.isNil(value)) {
				return true;
			}
		}			
	}


	//trace("value : "+ value);
	for (var k=0;k<rulesets.length;k++) {
		//trace("item value : "+rulesets[k]);
		
		var ruleExpression = rulesets[k];

		var rtnVal = this._svcfItemValueCheck(rowPosition, ruleExpression, value, labelText, datasetOfGrid, columnIndex, grid, dsValid);
		if ( rtnVal == true ) {
			//trace("***************************");
			continue;
		} else if (rtnVal == "SKIP") {
			if (this.smfIsNull(value)) {
				return true;
			} else {
				continue;
			}

		} else {
			var ruleName = ruleExpression.split(":")[0];
			invalidResult.ruleName = ruleName;
			
			return rtnVal;
		}

	}//end for

	return true;
};
/**
 * (공통만 사용)
 * 입력할 수 없는 문자인지 확인, 아래아한글에서 입력하는 홑따옴표와 감싸는 문자 -> ����이상해���� 를 입력불가하게 막는다.
 * @param  s - 확인할 문자열
 * @return  boolean
 * @example  _svcfIsValidCharacters("dd??")
 */
prForm._svcfIsValidCharacters = function(s){
	s = this.smfStr(s);
	var invalidCharList = [];
	invalidCharList.push(String.fromCharCode(56194, 56400));
	invalidCharList.push(String.fromCharCode(56194, 56401));
	invalidCharList.push(String.fromCharCode(56194));

 	for(var i=0,size=invalidCharList.length; i<size; i++){
 		var invalidChar = invalidCharList[i];

 		if(s.indexOf(invalidChar) != -1){
			return false;
 		}
 	}

 	return true;
};



/**
 * (공통만 사용)
 * Check 항목에 대한 Object의 ruleExpression 확인.
 * @param rowIndex			- Check Dataset의 Row Position
 * @param ruleExpression 		- Validation Check 항목
 * @param propertyValue	- 체크 대상 Vlaue
 * @param datasetOfGrid			- Grid Binding Dataset
 * @return  true/strin(Message)
 * @example  _svcfItemValueCheck(rowIndex, ruleExpression, propertyValue, ds)
 */
prForm._svcfItemValueCheck = function(rowIndex, ruleExpression, propertyValue, labelText, datasetOfGrid, columnIndex, grid, dsValid) {
	var rtnVal = true;
	var splitedRule = ruleExpression.split(":");
	if(! splitedRule[1]) splitedRule[1] = "true";

	//trace("option :: "+splitedRule[0]);

	// SaveConfirm의 2번째 파라메터에 그리드를 입력해야하는데 Dataset을 입력한 경우
	// objGrd가 Dataset이다 만약 Dataset이면 검증을 해줄수 없음..
	if(grid instanceof nexacro.Grid){
		var nCellIndex = grid.getBindCellIndex("Body",datasetOfGrid.getColID(columnIndex));
		var sCellEdittype = this.smfStr(grid.getCellProperty("body", nCellIndex, "edittype"));

		// 기존에 조회한 값과 수정,등록한 값이 다를 경우
		if(datasetOfGrid.getRowType(rowIndex) == Dataset.ROWTYPE_INSERT ||  (datasetOfGrid.getColumn(rowIndex, columnIndex) != datasetOfGrid.getOrgColumn(rowIndex, columnIndex))){  // 기존에 저장되어있는 값은 검증해주지 않는다
			if(sCellEdittype.indexOf("textarea") == -1 && sCellEdittype.indexOf("text") != -1){//edittype이 text면서,
				//엔터값이 들어있으면 alert
				if(this.smfStr(propertyValue).indexOf("\n") != -1){
					var invalidEditValueMessage = labelText + " 항목에 엔터값이 포함되어있습니다.\n□와 같이 보이는 특수문자를 제거하세요\n아래아한글,엑셀 또는 다른 프로그램에서 붙여넣기 한 경우에 □값이 포함될 수 있습니다";
					return invalidEditValueMessage;
				}
			}

			if(sCellEdittype.indexOf("normal") != -1 || sCellEdittype.indexOf("textarea") != -1 || sCellEdittype.indexOf("text") != -1){//edittype이 text면서,
				if(! this._svcfIsValidCharacters(this.smfStr(propertyValue))){
					var invalidEditValueMessage = labelText + " 항목에 입력불가능한 문자가 포함되어있습니다.\n" + String.fromCharCode(56194) + "와 같이 보이는 특수문자를 제거하세요\n아래아한글,엑셀 또는 다른 프로그램에서 붙여넣기 한 경우에 " + String.fromCharCode(56194) + " 값이 포함될 수 있습니다";
					return invalidEditValueMessage;
				}
			}
		}
 
	}

	var ruleName = splitedRule[0];
	if(this._svcfIsIgnoreRule(ruleName)) return true;
	
	switch (splitedRule[0]) {
		case "title":
			// labelText = splitedRule[1];
		    break;
		case "required":
			//필수입력항목 여부
			if (splitedRule[1] == "true") {
				if (this.smfIsNull(this.smfTrim(propertyValue))) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 필수입니다";
				}
			} else {
				return "SKIP";
			}
		break;
		
		case "grouprequired":
			// arrValid
			var propertyNames = splitedRule.join(",");
			// grouprequired,name,genrCode -> name,genrCode
			propertyNames = propertyNames.substring("grouprequired".length+1);
			var aryPropertyName = propertyNames.split(",");
			
			var isNullAll = true;
			for(var idx in aryPropertyName){
				var propName = aryPropertyName[idx];
				
				var eachComponentValue = datasetOfGrid.getColumn(rowIndex, propName);
				if(! this.smfIsNull(eachComponentValue)){
					isNullAll = false;
					break;
				}
			}
			
			if (isNullAll == true) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 필수입니다";
			}else{
				rtnVal = "SKIP";
			}
			break;
		case "fixedlength":
			if (this.smfStr(propertyValue).length == parseInt(splitedRule[1])) return true;
		
			rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + splitedRule[1] + "자리로 입력하세요";
		break;
		case "maxlength":
			if (!this.smfIsNull(propertyValue)) {
				if (propertyValue.length > parseInt(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최대 "+splitedRule[1]+"자리입니다";
				}
			}
		break;
		case "minlength":
			if (!this.smfIsNull(propertyValue)) {
				if (propertyValue.length < parseInt(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소 "+splitedRule[1]+"자리입니다";
				}
			}
		break;

		case "maxlengthB" :
			if (!this.smfIsNull(propertyValue)) {
				if (this.smfLenB(propertyValue) > parseInt(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 최대 " + splitedRule[1] + "자리입니다.\n(한글 3Byte, 영문/숫자 1Byte)";
				}
			}
			break;

		case "minlengthB" :
			if (!this.smfIsNull(propertyValue)) {
				if (this.smfLenB(propertyValue) < parseInt(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 최소 " + splitedRule[1] + "자리입니다.\n(한글 3Byte, 영문/숫자 1Byte)";
				}
			}
			break;

		case "min":
			if (!this.smfIsNull(propertyValue)) {
				if (parseFloat(propertyValue) < parseFloat(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 최소값은 " + splitedRule[1] + "입니다.";
				}
			}
		break;
		case "max":
			if (!this.smfIsNull(propertyValue)) {
				if (parseFloat(propertyValue) > parseFloat(splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 최대값은 " + splitedRule[1] + "입니다.";
				}
			}
		break;

		case "digits" : // 0-9 0포함 양수
			var maxlength = parseInt(splitedRule[1]);
			if (this.smfIsNum(propertyValue) && propertyValue.indexOf(".") == -1 && propertyValue.indexOf("-") == -1){
				if(this.smfIsNum(splitedRule[1])){
					if(this.smfStr(propertyValue).length <= maxlength){
						return true;
					}
				}else{
					return true;
				}
			}
			 
			if(propertyValue.indexOf("-") != -1){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 최소 0부터 입력하세요";
			}else if(propertyValue.indexOf(".") != -1){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 소수점은 입력할 수 없습니다";
			}else if(this.smfIsNum(maxlength) && this.smfStr(propertyValue).length > maxlength){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + this.format(" 최대 {0}자리까지 입력하세요", [maxlength]);
			}else{
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
			}
			break;

		case "smallinteger" : // 2byte
		case "integer" : //4byte
		case "biginteger" : //8byte
			if(ruleName == "smallinteger"){
				var min = parseInt("-32_768".replace(/_/g, ""));
				var max = parseInt("32_767".replace(/_/g, ""));
			}else if(ruleName == "integer"){
				var min = parseInt("-2_147_483_648".replace(/_/g, ""));
				var max = parseInt("2_147_483_647".replace(/_/g, ""));
			}else{
				var min = parseInt("-9_223_372_036_854_775_808".replace(/_/g, ""));
				var max = parseInt("9_223_372_036_854_775_807".replace(/_/g, ""));
			}
			
			
			if (propertyValue.search(/^(-)?([0-9]+)$/) == 0){
				if(min <= Number(propertyValue) && Number(propertyValue) <= max){
					break;
				}else{ 
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 범위를 벗어난 입력입니다";
				}
			}else{
				if(propertyValue.indexOf(".") != -1){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 소수점은 입력할 수 없습니다";
				}else{
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
				}			
			}
			break;

		case "number" : //숫자
			if (this.smfIsNum(propertyValue)) return true;
			
			rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자만 입력 가능합니다";
			break;
			
		case "declimit" : // 소수점 최대 자리수
			if (!this.smfIsNull(propertyValue)) {
				var isExistDot = propertyValue.indexOf(".");
				if (isExistDot == -1) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 소수점은 최대 "+splitedRule[1]+"자리입니다";
				} else {
					var decLen = propertyValue.substr(isExistDot+1,propertyValue.length);
					if (decLen.length != parseInt(splitedRule[1])) {
						rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 소수점은 최대 "+splitedRule[1]+"자리입니다";
					}
				}
			}
			break;

		case "decimal" :
			if(this.smfIsNum(propertyValue)){ 
				var expectedMaxDigitLength = parseInt(splitedRule[1]); //
				var expectedMaxDecimalLength = parseInt(splitedRule[2]);
				var isExistDot = propertyValue.indexOf(".");
				var actualMaxDigitLength = propertyValue.split(".")[0].length;
				var actualMaxDecimalLength = this.nvl(propertyValue.split(".")[1], 0).length;
			
				if(expectedMaxDigitLength < actualMaxDigitLength){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + this.format(" 범위를 벗어났습니다\n(숫자{0}, 소수{1} 자리수 허용)", [splitedRule[1], splitedRule[2]]);
					// rtnVal = labelText + " 항목은 " + this.format("최대 {0}자리까지 입력할 수 있습니다", [splitedRule[1], splitedRule[2]]);
				}else if(expectedMaxDecimalLength < actualMaxDecimalLength){
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + this.format(" 범위를 벗어났습니다\n(숫자{0}, 소수{1} 자리수 허용)", [splitedRule[1], splitedRule[2]]);
					// rtnVal = labelText + " 항목은 " + this.format("소수점 자리는 {0}자리까지 입력할 수 있습니다", [splitedRule[2]]);
				}else {
					return true;
				}
			}else{
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 숫자로 입력해야 합니다";
			}
			break;

		case "date":
			if (!this.smfIsNull(propertyValue)) {
				if (!this.smfIsDate(propertyValue)) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 항목은 날짜 형식만 입력 가능합니다"
				}
			}
			break;
			
		case "dateym" :
			if (!this.smfIsNull(this.smfTrim(propertyValue, ""))) {
				if (!this.smfIsDate(propertyValue + "01")) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
				}
			}
			break;
			
		case "comparemax":
			if (!this.smfIsNull(propertyValue)) {
				var otherColumnName = splitedRule[1];
				if (parseFloat(propertyValue) < parseFloat(datasetOfGrid.getColumn(rowIndex, otherColumnName))) {
					var otherColumnLabel = splitedRule[2];
					if(this.isNil(otherColumnLabel)){
						otherColumnLabel = this.smfGetLabelOfGridColumn(grid, datasetOfGrid, dsValid.getColumn(0, otherColumnName), otherColumnName);
					}
					
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherColumnLabel + " 보다 작습니다.";
				}
			}
		break;
		case "comparemin" :
			if (!this.smfIsNull(propertyValue)) {
				var otherColumnName = splitedRule[1];
				if (parseFloat(propertyValue) > parseFloat(datasetOfGrid.getColumn(rowIndex, otherColumnName))) {
					var otherColumnLabel = splitedRule[2];
					if(this.isNil(otherColumnLabel)){
						otherColumnLabel = this.smfGetLabelOfGridColumn(grid, datasetOfGrid, dsValid.getColumn(0, otherColumnName), otherColumnName);
					}
				
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + otherColumnLabel + " 보다 큽니다.";
				}
			}
		break;

		case "equalto" :
			if (!this.smfIsNull(propertyValue)) {
				if (parseInt(propertyValue) != parseInt(datasetOfGrid.getColumn(rowIndex, splitedRule[1]))) {
					var otherColumnName = splitedRule[1];
					var otherColumnLabel = splitedRule[2];
					if(this.isNil(otherColumnLabel)){
						otherColumnLabel = this.smfGetLabelOfGridColumn(grid, datasetOfGrid, dsValid.getColumn(0, otherColumnName), otherColumnName);
					}
				
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "이", "가") + " " + this._svcfGetLabelWithPostPosition(otherColumnLabel, "과", "와") + " 틀립니다.";
				}
			}
		break;

		case "range" :
			if (!this.smfIsNull(propertyValue)) {
				if (parseInt(propertyValue) < parseInt(splitedRule[1]) || parseInt(propertyValue) > parseInt(splitedRule[2])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + splitedRule[1] + " ~ " + splitedRule[2] + " 사이로 입력하세요";
				}
			}
		break;
		case "code" :
			if (!this.smfIsNull(propertyValue)) {
				for (var i=1;i<splitedRule.length;i++) {
					if (parseInt(propertyValue) == parseInt(splitedRule[i])) {
						return true;
					}
				}
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + nexacro.replaceAll(ruleExpression,"code:","")+" 사이의 값이 아닙니다.";
			}
		break;
		
		// 외국인등록번호
		case "frn" :
			if (!this.smfIsNull(propertyValue)) {
				if (! this.smfIsForeignNo(propertyValue)) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다.";
				}
			}
			break;
		
		case "rrn" :
		case "jumin" :
			if (!this.smfIsNull(propertyValue)) {
				if (! this.smfIsRsrNo(propertyValue)) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다.";
				}
			}
		break;

		case "rrnold" :
			if (!this.smfIsNull(propertyValue)) {
				if (! this.smfIsRsrNoOld(propertyValue)) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다.";
				}
			}
		break;
		
		// 사용안함
		case "rrnbefore" :
			if (! this.smfIsRsrNo(propertyValue+"1111111")) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;
		// 사용안함
		case "rrnafter" :
			if (! this.smfIsRsrNo("991111"+propertyValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다"; 
			}
			break;
		

		case "zipcd":
		case "zipcode" :
			if(this.smfStr(propertyValue).length != 5){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + "5자리로 입력해야 합니다.";
			}
			break;


		case "function" : 
			var func = this.svcfFindFunctionInThisContext(splitedRule[1], true);
			// 2022.12.22 - 파라미터 에러 수정
			//rtnVal = func.call(this, grid, rowIndex, columnIndex, ds);			
			rtnVal = func.call(this, grid, rowIndex, columnIndex, datasetOfGrid);			
			
			break;

		case "equallen" :
			if (!this.smfIsNull(propertyValue)) {
				if (propertyValue.length != parseInt( splitedRule[1])) {
					rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " 길이는 " + splitedRule[1] + "자리로 구성되어야 합니다.";
				}
			}
			break;
			
		case "bizno" : //사업자등록번호
			if(! this.smfIsBizno(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "corpno" : // 법인번호
			if(! this.smfIsCorpRegNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			
		case "mobileno" : // 모바일번호
			if(! this.smfIsMobileNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "phoneno" : // 전화번호
			if(! this.smfIsPhoneNo(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "email" : // 이메일
			if(! this.smfIsEmail(propertyValue)){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;			

		case "uon" : // 사용여부(Y/N)
			if(this.notIn(propertyValue, ["Y", "N"])){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;			

		case "boolean" : // 사용여부(true/false)
			if(this.notIn(propertyValue+"", ["1", "0"])){
				rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			}
			break;

		case "between": // from,to
			var fromColumnName = splitedRule[1];
			var toColumnName = splitedRule[2];
			var val = Number(propertyValue);

			var fromValue = Number(datasetOfGrid.getColumn(rowIndex, fromColumnName));
			var toValue = Number(datasetOfGrid.getColumn(rowIndex, toColumnName));
			
			// 컬럼이 없으면 값으로 취급
			if(this.isNil(fromValue) || isNaN(fromValue)) fromValue = Number(fromColumnName);
			if(this.isNil(toValue) || isNaN(toValue)) toValue = Number(toColumnName);
			
			if (! this.between(val, fromValue, toValue)) {
				rtnVal = this._svcfGetLabelWithPostPosition(labelText) + " " + fromValue + " ~ " + toValue + " 사이로 입력해야 합니다";
			}
			break;

			
		case "dateym": // 
			if(this.smfIsDate(propertyValue + "01")){
				return true;
			}

			rtnVal = this._svcfGetLabelWithPostPosition(labelText, "의", "의") + " 형식이 잘못되었습니다";
			break;

			
		case "focus":
			return true;
			break;
			
 		default:
 			rtnVal = "Validation 구분이 명확하지 않습니다\n" + splitedRule[0];
			return rtnVal;
			break; 
	}//end switch
	return rtnVal;
};
