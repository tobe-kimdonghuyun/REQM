/**
 * @fileoverview 공통유틸리티 함수
 * sm_script와 utl_script 통합예정
 * @author
 * @version 1.0   버전
 */
var prForm = nexacro.Form.prototype;

/** 
 * 변수 선언부
 * @param 없음
 * @return 없음
 */
prForm.smvAscMark  =" ▲";		// Asc Mark
prForm.smvDescMark =" ▼";		// Desc Mark 

/**
 * 사용자지원URL
 * - 개발 URL = http://helpsys.dvm.go.kr
 * - 검수 URL = http://helpsys.acm.go.kr
 * - 운영 URL = http://help.neis.go.kr
 */

//첨부파일 관련 변수 선언
prForm.vFile;					//VirtualFile
prForm.FileDialog0;			//FileDialog
prForm.HttpObject0;			//HttpObject
prForm.strFileDir 		= "";	//file directory
prForm.strAddFilenm 	= "";	//add file name

//FusionChart 관련 변수 선언

//prForm.gv_chartPath	= nexacro.getApplication().gv_ServerUrl ;//+ "/deploy/fusionchart/";

prForm.httpobject_isrunning 	= false; 		//파일다운로드 진행여부
prForm.smvFileUploadReasonCode = 0; 			//파일다운로드 진행여부
prForm.smvFileUploadReasonMessage = ""; 		//파일다운로드 진행여부
prForm.dateobj; 								//시각계산용 date object

// if (gv_ServerUrl == "localhost:8080") {
// 	gv_dataprefix = "svc_neis::";	//service prefix (암호화적용시-EncData::, 미적용시:svc_neis::)
// }

/**
 * (공통만 사용)
 * Form Load 시 공통 기능 처리.
 * Form의 onload Event에 필히 기술.
 * @param : obj - Object(Form)
 * @return : N/A
 * @example : smfFrmLoadsetEnv(obj);
 */
prForm.smfFrmLoadsetEnv = function(obj, nX, nY) {

// 	this.btn_help.onclick.setHandler(smfCallHelp);
// 	this.btn_reply.onclick.setHandler(smfCallReply);
// 	this.btn_qna.onclick.setHandler(smfCallQna);
// 	this.btn_pal.onclick.setHandler(smfCallPal);
/*	img_title.tooltiptext = obj.titletext;*/

	//Object 선언
	this.vFile 		= new VirtualFile;
	this.FileDialog0 = new FileDialog;

  	this.smfLoadMessage();	// Message 처리
// // 	smfTranLogin(); // Log-in 처리

	if (nexacro.getApplication().gv_mdiFlag == "false") {

		nexacro.getApplication().gv_ServerUrl = "localhost:8080";
		this.trace("local gv_ServerUrl : === > " + nexacro.getApplication().gv_ServerUrl);

		//// this.smfLoadMessageFromBackend();	// Message 처리
		//// this.smfTranLogin(); // Log-in 처리

		nX = 831;
		nY = 553;

	} else {
		//SDI인 경우(NEIS_UES, NEIS_PORTAL)에는 리사이즈 실행되면 안됨.
		try {
			if(this.smfIsNull(nX)) nX = nexacro.getApplication().gv_initWidth;
			if(this.smfIsNull(nY)) nY = nexacro.getApplication().gv_initHeight;

			//lib::rsz_script.xjs 용 리사이즈 함수
			//this.lf_setResize(obj, nX, nY);
		} catch (e) {
			trace("------------- > gv_initWidth not exist!");
		}
	}


	if (this.smfIsNull(obj.pv_menuId) == false) {
		var strNowTime = this.smfTodayTime();
		//this.stc_time.text = strNowTime.substring(0,4)+"년"+strNowTime.substring(4,6)+"월"+strNowTime.substring(6,8)+"일 "+strNowTime.substring(8,10)+"시"+strNowTime.substring(10,12)+"분";
		this.stc_time.set_text(strNowTime.substring(0,4)+"."+strNowTime.substring(4,6)+"."+strNowTime.substring(6,8)+". "+strNowTime.substring(8,10)+":"+strNowTime.substring(10,12));
		this.stc_time.set_text(" (" + this.smfGetWasMachineName() + ")");
		//application.mainframe.titletext = gv_appMainTitle + " / " + this.stc_time.text;

		// 캡처시 시간이 표시되지 않도록
		if(this.smfIsLocalMode() || this.smfIsDevMode() || this.smfIsExamineMode()){
			this.stc_time.set_visible(false);
		}
	}
};

/**
 * (공통만 사용)
 * Div URL 링크돈 Form Load 시 공통 기능 처리.
 * Div URL 링크돈 Form의 onload Event에 필히 기술.
 * @param : obj - Object(Form)
 * @return : N/A
 * @example : smfDivLoadsetEnv(obj);
 */
prForm.smfDivLoadsetEnv = function(obj, nX, nY) {

	if(obj instanceof Tabpage) {
		nX = obj.parent.getOffsetWidth();
		nY = obj.parent.getOffsetHeight() - 26;	// 26 : Tab Button Height
	} else {
		nX = obj.getOffsetWidth();
		nY = obj.getOffsetHeight();
	}

// // 	if (gv_mdiFlag == "false") {
// //
// // 		if(smfIsNull(nX)) nX = obj.position.width;
// // 		if(smfIsNull(nY)) nY = obj.position.height;
// // // 		nX = 831;
// // // 		nY = 553;
// //
// // 	} else {
// // 		if(smfIsNull(nX)) nX = gv_initWidth;
// // 		if(smfIsNull(nY)) nY = gv_initHeight;
// // 	}

	//lib::rsz_script.xjs 용 리사이즈 함수
	//this.lf_setResize(obj, nX, nY);
};

/**
 * (공통만 사용)
 * 임시 Log-in 처리
 * @param : 없음
 * @return : N/A
 * @example : smfTranLogin();
 */
prForm.smfTranLogin = function() {
	this.transaction("login",
	nexacro.getApplication().gv_dataprefix+nexacro.getApplication().gv_ServerUrl+"/login.jsp",
		"",
		"",
		"",
		"fnTransCallback", false, nexacro.getApplication().gv_bintp);

	//trace("call Transaction >>>>> " + JSESSIONID);
};

/**
 * (공통만 사용)
 * Popup Load 시 공통 기능 처리.
 * Form의 onload Event에 필히 기술.
 * @param : obj - Object(Form)
 * @return : N/A
 * @example : smfPopupLoadsetEnv(obj);
 */
prForm.smfPopupLoadsetEnv = function(obj, nX, nY) {
	if (nexacro.getApplication().gv_mdiFlag == "false") return;
	if(this.isNil(this.opener)) return;

// 	if (this.opener.pv_frmAuth == 1) {
// 		//trace(" opener auth:: "+opener.pv_frmAuth);
// 		//dialog WebSafer 적용
// 		//trace(" dialog handle::: "+opener.getOwnerFrame().Popup_Dialog.getHandle());
// 		/* [X-LOG] 함수(LoadImageSafer)를 찾을 수 없습니다.*/ this.opener.MaWebSAFER.LoadImageSafer(this.opener.getOwnerFrame().Popup_Dialog.getEventHandler(), false);
// 	}
};

/**
 * (공통만 사용)
 * 초등학교의 단위화면의 Main 
 * @param : winKey - Window ID
 * @return : N/A
 * @example : smfElsFrmClose(winKey);
 */
prForm.smfElsFrmClose = function(winKey) {
	if (nexacro.getApplication().gv_mdiFlag != "false") {
		nexacro.getApplication().gv_AppBottomPath.form.fnDeleteTabpage(winKey);
		var iRow = nexacro.getApplication().gds_openwininfo.findRow("winid", winKey);
		nexacro.getApplication().gds_openwininfo.deleteRow(iRow);
	}
};

/**
 * (공통만 사용) 
 * 초등학교의 단위화면의 Main의 Title, Path, 의견달기, 도움말 비활성화
 * @param : N/A
 * @return : N/A
 * @example : smfElsFrmClose(winKey);
 */
prForm.smfElsFrmEnv = function() {
	this.btn_help.set_visible(false);
	this.main_title.set_visible(false);
	this.btn_reply.set_visible(false);
	this.btn_qna.set_visible(false);
	this.btn_faq.set_visible(false);
	this.btn_pal.set_visible(false);
	this.btn_onlineContents.set_visible(false);
	this.btn_phone.set_visible(false); // 연락처
	this.stc_time.setOffsetTop(38);
	this.stc_time.sendToBack();
};

/**
 * (공통만 사용) 
 * Popup 화면의 도움말 공통 처리.
 * @param : popID - Popup Window ID
 * @return : N/A
 * @example : smfHelpPopup(winID);
 */
prForm.smfHelpPopup = function(popID) {
	this.alert_opacity(popID);
};

prForm.smfChange_opacity = function( per ){
	var frame = this.getOwnerFrame();
	while( frame != null  ){
		frame.set_opacity(per);
		frame = frame.getOwnerFrame();
	}
};


/**
* Alert(공통 Message) 처리
* @param : msgId	- Message ID (gds_message:Global Dataset)
* @param : args 	- 치환문자열(Array)
* @return : N/A
* @example : smfAlert("err.slc.cm.0002")
*/
// prForm.smfAlert = function(msgid, args) {
// 
// 
// 	var msgTemp;
// 	var charChk = this.smfPos(msgid, "^");
// 
// 	if (charChk > 0) {
// 		msgTemp = msgid.split("^");
// 		//alert_opacity(msgTemp[1] + "\n\n" + msgTemp[0]);
// 		this.alert_opacity(msgTemp[1]);
// 
// 	} else {
// 
// 		var findRow = nexacro.getApplication().gds_message.findRow( "msgId", msgid );
// 
// 		if (findRow < 0) {
// 			return false;
// 		}
// 
// 		if (this.smfIsNull(args)) {
// 			this.alert_opacity(nexacro.getApplication().gds_message.getColumn(findRow, "msg"));
// 		} else {
// 			var arglen = args.length;
// 			var strmsg = nexacro.getApplication().gds_message.getColumn(findRow, "msg");
// 			var arrmsg = strmsg.split("{");
// 
// 			msgTemp = arrmsg[0];
// 
// 			for (var i=0; i<arglen; i++) {
// 				msgTemp += this.smfReplace(arrmsg[i+1], i+"}", args[i]);
// 			}
// 
// 			this.alert(msgTemp);
// 		}
// 	}
// };


/**
* Confirm(공통 Message) 처리
* @param : msgId	- Message ID (gds_message:Global Dataset)
* @param : args 	- 치환문자열(Array)
* @return : true/false
* @example : smfConfirm("err.slc.cm.0002")
*/
// prForm.smfConfirm = function(msgid, args) {
// 
// 	//return confirm_opacity(msgid);
// 
// 	var rtnVal;
// 	var findRow = nexacro.getApplication().gds_message.findRow( "msgId", msgid );
// 
// 	if (findRow < 0) {
// 		return false;
// 	}
// 
// 	if (this.smfIsNull(args)) {
// 		return this.confirm_opacity(nexacro.getApplication().gds_message.getColumn(findRow, "msg"));
// 	} else {
// 		var arglen = args.length;
// 		var strmsg = nexacro.getApplication().gds_message.getColumn(findRow, "msg");
// 		var arrmsg = strmsg.split("{");
// 
// 		var msgTemp = arrmsg[0];
// 
// 		for (var i=0; i<arglen; i++) {
// 			msgTemp += this.smfReplace(arrmsg[i+1], i+"}", args[i]);
// 		}
// 
// 		return this.confirm(msgTemp);
// 	}
// };


/**
* Dataset의 Message Id에 대한 Text를 가져옴
* @param : msgId	- Message ID (gds_message:Global Dataset)
* @param : args 	- 치환문자열(Array)
* @return : string(Message), Not Exist : false
* @example : smfGetMessage("err.slc.cm.0002")
*/
prForm.smfGetMessage = function(messageId) {
	this.astfAssertParamValueIsStringType(messageId, "messageId");

	var messageArguments = [];
	var args = this.smfGetMessage.arguments;
	
	if(this.astfIsArrayType(args[1])){
		messageArguments = args[1];
	}else{
		for(var i=1,size=this.smfGetMessage.arguments.length; i<size; i++){
			messageArguments.push(args[i]);
		}
	}
	
	var findRow = nexacro.getApplication().gdsMessage.findRow( "messageId", messageId );

	if (findRow < 0) {	
		var message = "해당 메세지가 없습니다!\n메시지ID=" + messageId + "";
// 		message += "\n"
// 		message += "\n기능공통의 사과의말씀";
// 		message += "\n    죄송합니다 메시지관리가 뒤늦게 추가되어 함수가변경되었습니다";
// 		message += "\n    메시지를 이용하여 사용하세요 -> this.smfAlert('CM006', ['아이디']); // 아이디은(는) 필수 입력입니다.";
// 		message += "\n    아니면 this.LiteralAlert을 사용하세요 -> this.LiteralAlert('아이디는 필수 입력입니다');";
// 		message += "\n";
		this.alert(message);
		throw message;
		return message;
	}

	if (this.smfIsNull(messageArguments)) {
		return nexacro.getApplication().gdsMessage.getColumn(findRow, "messageCn");
	} else {
		var arglen = messageArguments.length;
		var strmsg = nexacro.getApplication().gdsMessage.getColumn(findRow, "messageCn");
		var arrmsg = strmsg.split("{");

		var msgTemp = arrmsg[0];

		for (var i=0; i<arglen; i++) {
			msgTemp += this.smfReplace(arrmsg[i+1], i+"}", messageArguments[i]);
		}

		return msgTemp;
	}
};

/**
* 페이지 처리 기능.
* @param : objPage 		- Object(Page 처리Composite Component)
* @param : totRowCnt 	- 전체 건수
* @param : strFn 		- 페이지 선택 시 호출 함수 정의
* @param : displayPage 	- 페이지당 보여줄 Data 건수
* @param : pgViewSize 	- 보여줄 페이지 수(default:10)
* @return : N/A
* @example : smfSetPageProc(div_PG, 10, 10, 145, "fn_search");
*/
prForm.smfSetPageProc = function(objPage, totRowCnt, strFn, displayPage, pgViewSize) {
	objPage.fnInit(totRowCnt, strFn, displayPage, pgViewSize);
};

/**
* Modal 오픈된 팝업에서 해당 id를 갖는 PopupFrame 을 리턴한다.
* @param : {String} sFrameId - 찾으려는 popup ID
* @return {Object} PopupFrame Object
*/
prForm.smfGetPopupFrame = function(sFrameId)
{
	var arrPopFrame = nexacro.getPopupFrames();
	return arrPopFrame[sFrameId];
};

/** 
 * 모바일- 가로,세로회전시 팝업화면 이동
 * @param : {object} oPopForm - 팝업 Object
 * @param : {Number} nW - width 설정사이즈
 * @param : {Number} nH - Height 설정사이즈
 * @param : {object} oEv - event 정보
 * @return  N/A
*/
prForm.smfMovePopupFrame = function(oPopForm, nW, nH,oEv)
{
	var srcInfo = this.smfCurScreenInfo();
	var srcInfoW = srcInfo[0];
	var srcInfoH = srcInfo[1];
	var nWidth = oPopForm.orgPopWidth;
	var nHeight = oPopForm.orgPopHeight;	
	//trace("  화면 Height : "+srcInfoH , nHeight , srcInfoW , nWidth );


	if (srcInfoH < nHeight){
		nHeight = parseInt(srcInfoH *0.9, 10);
	}
	if (String(oEv.orientation) =="portrait") {
		if (!this.smfIsNull(nH)) nHeight = nH;
	}

	if (srcInfoW < nWidth){
		nWidth = parseInt(srcInfoW *0.9, 10);
	}
	if (String(oEv.orientation) =="landscape") {
		if (!this.smfIsNull(nW)) nWidth = nW;
	}	
	
	var nLeft = parseInt((srcInfoW - nWidth)/2);
	var nTop = parseInt((srcInfoH - nHeight)/2);
	//trace( "nWidth >> "+ nWidth , "  nHeight >> "+ nHeight, nW, nH);

	oPopForm.move(nLeft,nTop,nWidth,nHeight);
};

/**
 * 팝업에서 opener로부터 전달받은 파라메터를 얻는다
 * @see : this.pv_params = this.smfGetPopupParams();
*/
prForm.smfGetPopupParams = function() {
	var ownerFrameThatOwnedPopup = this.getOwnerFrame();
	var args = ownerFrameThatOwnedPopup.args;
	if(this.isNil(args)) ownerFrameThatOwnedPopup.args = {};
	var pv_params = ownerFrameThatOwnedPopup.args.pv_params;
	if(this.isNil(pv_params)) pv_params = {};
	
	return pv_params;
};

/**
 * opener에서 응답을 전달한다
 * opener에 callback함수를 지정하였다면
 * callback이 호출된다
 
 * @param : responseParams - callback에 전달할 파라메터
 * @see : this.smfSendResponseToOpener({value: "myvalue"});
*/
prForm.smfSendResponseToOpener = function(responseParams){
	if(this.isNil(responseParams)) responseParams = {};
	this.astfAssertParamValueIsObjectType(responseParams, "responseParams");

	// 팝업에서 호출되는 함수이므로
	// this는 팝업이다 opener가 아님
	var ownerFrameThatOwnedPopup = this.getOwnerFrame();

	if(this.smfIsFunc(ownerFrameThatOwnedPopup.args.callback)){
		var context = ownerFrameThatOwnedPopup.args.context;
		var callback = ownerFrameThatOwnedPopup.args.callback;
		var sender = ownerFrameThatOwnedPopup.args.sender;

		callback.call(context, responseParams, sender);
	}
};

/**
 * (공통만 사용)
 * popup파라메터중 protoType값을 검사한다
 * @param : popupParams
 */
prForm.smfCheckPopupPrototypeValue = function(popupParams){
	// 팝업타입을 검사
	this.astfAssertParamValueIsStringType(popupParams.params.procType, "popupParams.params.procType");
	
	// none - 해당없음
	// search - 조회
	// insert - 등록
	// update - 수정
	// delete - 삭제
	// save - 저장
	// execute - 처리
	// notice - 알림
	this.astfAssertParamRangeValue(
		popupParams.params.procType, 
		"popupParams.params.procType",
		["none", "search", "insert", "update", "delete", "save", "execute", "notice"]
	);
};


/**
 * 팝업 제목 변경
 * @param : titleText - 변경할 팝업타이틀 변경
 */
prForm.smfUpdatePopupTitle = function(titleText) {
	this.astfAssertParamValueIsStringType(titleText, "titleText");

	if(this.main_title){
		this.main_title.set_text(titleText);
	}else if(this.sta_main){
		this.sta_main.set_text(titleText);
	}
	
	this.getOwnerFrame().set_titletext(titleText);
};

/**
 * Modal Dialog 오픈시 현재 화면의 사이즈(width, height)를 리턴한다.
 * 모바일인 경우 가로로 회전시 현재화면 사이즈보다 작게 오픈하기 위해 화면 사이즈를 리턴해준다.
 * @param : ofCx	- width 차감 사이즈
 * @param : ofCy 	- height 차감 사이즈
 * @example 
*/
prForm.smfCurScreenInfo = function(ofCx, ofCy){
	var srcInfo = new Array();
//  	srcInfo[0] = parseInt(this.getOwnerFrame().width,10);
//  	srcInfo[1] = parseInt(this.getOwnerFrame().height,10);
//  
//  	if(!this.smfIsNull(ofCx)) {
//  		srcInfo[0] = parseInt(this.getOwnerFrame().width,10) -ofCx;
//  	}
//  
//  	if(!this.smfIsNull(ofCy)) {
//  		srcInfo[1] = parseInt(this.getOwnerFrame().height,10) -ofCy;
//  	}
	
	var objFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain;
	
	srcInfo[0] = parseInt(objFrame.width,10);
	srcInfo[1] = parseInt(objFrame.height,10);

	if(!this.smfIsNull(ofCx)) {
		srcInfo[0] = parseInt(objFrame.width,10) -ofCx;
	}

	if(!this.smfIsNull(ofCy)) {
		srcInfo[1] = parseInt(objFrame.height,10) -ofCy;
	}

	return srcInfo;
};

/**
* Modal Dialog 처리
* @param : popupId		- Dialog의 ID
* @param : popupUrl 	- Popup 화면 URL
* @param : popupParams 	- Dialog Form으로 전달될 Argument
* @param : nLeft 		- Dialog의 Left Position
* @param : nTop 		- Dialog의 Top Position
* @param : nWidth 		- Dialog 창의 Width
* @param : nHeight		- Dialog 창의 Height
* @param : sStyle 		- Dialog 기본 유형
* @param : sProp 		- Chile Frame의 모든 Property를 설정
* @return : void
* @example : smfDialog("test", "TEST::frm_type01_popup.xfdl", {});
*/
prForm.smfDialog = function(popupId, popupUrl, popupParams, nLeft, nTop, nWidth, nHeight) {

	this.astfAssertParamValueIsStringType(popupId, "popupId");
	this.astfAssertParamValueIsStringType(popupUrl, "popupUrl");
	this.astfAssertParamValueIsObjectType(popupParams, "popupParams");
	this.astfAssertParamValueIsObjectType(popupParams.params, "popupParams.params");
	
	if("_auto" == popupId){
		popupId = popupUrl;
	}
	
	// 콜백이 없음을 표시하면 확인하지 않는다
	if(popupParams.noCallback == true){
		popupParams.callback = null;
	}else{
		this.astfAssertParamValueIsFunctionType(popupParams.callback, "popupParams.callback");
	}

	// 팝업타입을 검사
	this.smfCheckPopupPrototypeValue(popupParams);
	
	
	var ownerFrame = this.getOwnerFrame();
	
	var params = popupParams.params;
	
	if(this.isNotNil(popupParams.params)){
		if("sender" in popupParams.params) this.smfDevException("params.sender 값은 예약어입니다. 다른 이름을 사용하세요");
		if("popupFrame" in popupParams.params) this.smfDevException("params.popupFrame 값은 예약어입니다. 다른 이름을 사용하세요");
	}
	
	params.sender = popupParams.sender;
	
	// 화면호출로그용
	params._url = popupUrl;
	
	var objParams = { 
		args: {
			// 콜백처리를 위한 값
			context: this,
			callback: popupParams.callback,
			sender: popupParams.sender,
			popupFrame: null, // 팝업의 ChildFrame
			internalCallback :  popupParams.internalCallback,
			// 화면에서 사용하는 파라메터
			pv_params : params, //smfGetPopupParams 에서 사용
		}		
	};
	

	popupUrl = this.smfTrim(popupUrl);

	/*학교생활기록부 접근권한 인증체제 개선 사업 - 2차인증*/
	var pgeIdArr = this.smfTrim(popupUrl).split("::");
	var authPgeid = nexacro.replaceAll(pgeIdArr[1],".xfdl","");
	var secAuthResult = true;//this.sauf_authorization(authPgeid);	//pgeid 넘겨줌
	if(!secAuthResult) return; //인증 결과에 따른 화면 오픈 설정

	if(this.smfIsNull(nexacro.getApplication().popupFrameList)){
		nexacro.getApplication().popupFrameList = {};
	}

	if(popupParams["pv_ignoreSetCurrentPopupFrame"] != true){
		nexacro.getApplication().popupFrameList[popupUrl] = newChild;
	}
	
	var internalCallbackFunction = function(popupId, returnArgFromPopup){
		delete nexacro.getApplication().popupFrameList[popupUrl];

		// 제대로 정리 안된 팝업 목록을 제거해준다.
		for(var i=nexacro.getApplication().popupFrameList.length; i>=0; i--){
			try{
				nexacro.getApplication().popupFrameList[i].form.name;
			}catch(e){
				try{
					delete nexacro.getApplication().popupFrameList[i];
				}catch(e){
					this.trace(e);
				}
			}
		}

		nexacro.getApplication().currentPopupFrame = null;
	};
	
	
	var callbackFunction = function(popupId, returnArgFromPopup){
		internalCallbackFunction(popupId, returnArgFromPopup);
		
		// 내부처리용 internalCallback호출
		if(this.smfIsFunc(popupParams.internalCallback)){
			popupParams.internalCallback.call(this);
		}
	};
	
	var objDialogOption = {};
	if(nWidth) {
		objDialogOption["width"] = nWidth;
	}
	if(nHeight)	{
		objDialogOption["height"] = nHeight;
	}
	if ( !this.smfIsNull(nTop) ) objDialogOption["top"] = nTop;
	if ( !this.smfIsNull(nLeft) ) objDialogOption["left"] = nLeft;

	//타이틀바 제거
	if (!popupParams.titlebar) {
		objDialogOption["titlebar"] = popupParams.titlebar;
	}
	if (popupParams.callback) {
		objDialogOption["popuptype"] = popupParams.popuptype;
	}

	var newChild = this._smfNewChildFrame(popupId, popupUrl, objParams, objDialogOption);
	
	// 모바일 화면 전환시 오픈된 팝업의 원래 사이즈를 갖는다.
	//var srcInfo = this.smfCurScreenInfo();
	
	if(nWidth)  newChild.orgPopWidth = nWidth;
	//else   		newChild.orgPopWidth = parseInt(srcInfo[0],10);
	if(nHeight) newChild.orgPopHeight = nHeight;
	//else 		newChild.orgPopHeight = parseInt(srcInfo[1],10);

	if(nTop)  newChild.orgPopTop = nTop;
	if(nLeft)  newChild.orgPopLeft = nLeft;

	newChild.showModal(popupId, ownerFrame, objParams, this, callbackFunction);
}; 

/**
* (공통만 사용)
* Modeless Open 처리
* @param : popupId			- Modeless의 ID
* @param : popupUrl 		- Popup 화면 URL
* @param : popupParam 		- Modeless Form으로 전달될 Argument
* @param : nLeft 		- Modeless의 Left Position
* @param : nTop 		- Modeless의 Top Position
* @param : nWidth 	- Modeless 창의 Width
* @param : nHeight	- Modeless 창의 Height
* @param : sStyle 	- Modeless 기본 유형
* @param : sProp 		- Chile Frame의 모든 Property를 설정
* @return : Child Frame Object
* @example : smfOpen("test", "TEST::frm_type01_popup.xfdl", "");
*/
prForm.smfOpen = function(popupId, popupUrl, popupParams, nLeft, nTop, nWidth, nHeight, sStyle, sProp)
{
	this.astfAssertParamValueIsStringType(popupId, "popupId");
	this.astfAssertParamValueIsStringType(popupUrl, "popupUrl");
	this.astfAssertParamValueIsObjectType(popupParams, "popupParams");
	this.astfAssertParamValueIsObjectType(popupParams.params, "popupParams.params");
	
	// 콜백이 없음을 표시하면 확인하지 않는다
	if(popupParams.noCallback == true){
		popupParams.callback = null;
	}else{
		this.astfAssertParamValueIsFunctionType(popupParams.callback, "popupParams.callback");
	}

	// 팝업타입을 검사
	this.smfCheckPopupPrototypeValue(popupParams);
	
	var ownerFrame = this.getOwnerFrame();
	
	var params = popupParams.params;
	
	if(this.isNotNil(popupParams.params)){
		if("sender" in popupParams.params) this.smfDevException("params.sender 값은 예약어입니다. 다른 이름을 사용하세요");
		if("popupFrame" in popupParams.params) this.smfDevException("params.popupFrame 값은 예약어입니다. 다른 이름을 사용하세요");
	}
	
	params.sender = popupParams.sender;
	
	// 화면호출로그용
	params._url = popupUrl;	
	
	var objParams = {
		args: {
			// 콜백처리를 위한 값
			context: this,
			callback: popupParams.callback,
			sender: popupParams.sender,
			popupFrame: null, // 팝업의 ChildFrame
		
			// 화면에서 사용하는 파라메터
			pv_params : params, //smfGetPopupParams 에서 사용
		}		
	};

	var openerFrame = this.getOwnerFrame();

	/*학교생활기록부 접근권한 인증체제 개선 사업 - 2차인증*/
	var pgeIdArr = this.smfTrim(popupUrl).split("::");
	var authPgeid = nexacro.replaceAll(pgeIdArr[1],".xfdl","");
	var secAuthResult = true;//this.sauf_authorization(authPgeid);	//pgeid 넘겨줌
	if(!secAuthResult) return; //인증 결과에 따른 화면 오픈 설정

	var popupOptions = this._smfNewChildFrame(popupId, popupUrl, objParams, {
		 "popuptype": "modeless" //  
	});
	
	// 이미 열린 팝업이 있음
	if(popupOptions.aleadyPopuped == true) return;
	nexacro.open(popupId, popupUrl, openerFrame, objParams, popupOptions.openStyle, popupOptions.left, popupOptions.top, popupOptions.width, popupOptions.height, this);
};

/**
* (공통만 사용)
* Modal/Modeless Popuu 처리
* @param : sID			- Popup Form의 ID
* @param : sURL 		- Popup Form  URL
* @param : sArg 		- Popup Form으로 전달될 Argument
* @param : nLeft 		- Popup Form Left Position
* @param : nTop 		- Popup Form Top Position
* @param : nWidth 	- Popup Form Width
* @param : nHeight	- Popup Form Height
* @param : sStyle 	- Popup Form 기본 유형
* @param : sProp 		- Chile Frame의 모든 Property를 설정
* @return : Child Frame Object
* @example : _smfNewChildFrame("test", "TEST::frm_type01_popup.xfdl", "");
*/
prForm._smfNewChildFrame = function(sPopupId, sUrl, oArg, options){
    var objApp = nexacro.getApplication();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var bShowTitle = true;	
	var bShowStatus = false;	
	var sPopupType = "modal";
	var bLayered = false;
	var nOpacity = 100;
	var bAutoSize = false;
	var bResizable = false;
	var sTitleText = "";

	for (var key in options) {
       if (options.hasOwnProperty(key)) {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(options[key], 10);
					break;
				case "left":
					nLeft = parseInt(options[key], 10);
					break;
				case "width":
					nWidth = parseInt(options[key], 10);
					break;
				case "height":
					nHeight = parseInt(options[key], 10);
					break;
				case "popuptype":
					sPopupType = options[key];
					break;
				case "layered":
					bLayered = options[key];
					break;
				case "opacity":
					nOpacity =options[key];
					break;
				case "autosize":
					bAutoSize = options[key];
					break;
				case "titlebar":
					if (""+options[key] == "false")	bShowTitle = false;		
					break;
				case "title":					
					sTitleText = options[key];	
					break;					
			}	
        }
    }

	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1){		
		sOpenalign = "center middle";
	if (system.navigatorname.indexOf("nexacro")  > -1) 	{
		//if (system.navigatorname == "nexacro") {
			// 메인프레임과 크기가 돌일하면
			// 단독 실행으로 가정한다 
			if(objApp.mainframe.width == this.getOwnerFrame().width) {
				var curX = objApp.mainframe.left;
				var curY = objApp.mainframe.top;
			}else{
				var curX = objApp.mainframe.left;
				var curY = objApp.mainframe.top;
			}
		}else{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft   =  curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;		
	}else{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1){
	    bAutoSize = true;
	}
	
	var objParentFrame = this.getOwnerFrame();
    if(sPopupType == "modeless"){
        var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize="+bAutoSize+" titletext="+sTitleText;
		var arrPopFrame = nexacro.getPopupFrames();
		sOpenStyle= "";
		
		// 생성된 팝업중 동일 ID가 있는 팝업을 확인하고
		// 있으면 그 팝업에 포커스를 셋		
		if (arrPopFrame[sPopupId]) {
			// arrPopFrame[sPopupId].set_titlebarheight(34); 
			
			if (system.navigatorname == "nexacro") {
				arrPopFrame[sPopupId].setFocus();
			} else {	
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}

			return {
				// 이미 열려있는 팝업이 있음
				aleadyPopuped: true,
			};
		}else {
			// 없으면 생성필요
			return {
				aleadyPopuped: false,

				openStyle: sOpenStyle,
				left: nLeft, 
				top: nTop, 
				width: nWidth, 
				hegith: nHeight,
			};
		}
    }
	else if(sPopupType == "modalsync")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		if(!this.isNil(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_dragmovetype("none");	//all
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
		// system.showModalSync(newChild, objParentFrame, oArg);	
	}
	else if(sPopupType == "modalwindow")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		if(!this.isNil(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_dragmovetype("all");	//none
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);    	//titlebar는 안보임
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    		//resizable 안됨
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
// 		var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
//         return rtn;
	}	
    else
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		if(!this.isNil(sTitleText)){ newChild.set_titletext(sTitleText); }
		newChild.set_dragmovetype("all");	//none
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle); 		//titlebar는 안보임
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_autosize(bAutoSize);
		if( this.smfIsMobile() )	newChild.set_titlebarheight(66);
		else		newChild.set_titlebarheight(46);
		newChild.set_resizable(bResizable);    		//resizable 안됨
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
		
		
// 		newChild.showModal(sPopupId, objParentFrame, oArg, this, function(pId, pVariable){
// 			try{
// 				if(pVariable != null && pVariable != undefined){
// 					this[sPopupCallback].call(this, pId, pVariable);
// 				}else if(this.all['_retDataset'] != null){
// 					this[sPopupCallback].call(this, pId, this._retDataset);
// 				}else if(this.getOwnerFrame()._retValue != undefined && this.getOwnerFrame()._retValue != null){
// 					this[sPopupCallback].call(this, pId, this.getOwnerFrame()._retValue);
// 					this.getOwnerFrame()._retValue = null;
// 				}
// 			}catch(e){}
// 		});
    }
	
	return newChild;
};

/**
* 조건에 따른 Value 처리
* @param : 함수의 Arguments에서 확인
* @return : value
* @example : decode(strVal, "test", true, false);
*/
prForm.decode = function()
{
	var varRtnValue = null;

	var arrArgument = this.decode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;

	if((arrArgument.length % 2) == 0) {
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	} else {
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for(var i = 1; i < nCount; i+=2) {
		if(varValue == arrArgument[i]) {
			varRtnValue = arrArgument[i+1];
			i = nCount;
		}
 }

	if(varRtnValue == null && bIsDefault) {
		varRtnValue = arrArgument[arrArgument.length-1];
	}

	return varRtnValue;
};

/**
* 조건에 따른 Value 처리
* @param : 함수의 Arguments에서 확인
* @return : value
* @example : iif(strVal=="test", true, false);
*/
prForm.iif = function()
{
	var varRtnValue = null;
	var arrArgument = this.iif.arguments;

	if(arrArgument[0]) {
		return arrArgument[1];
	} else {
		return arrArgument[2];
	}
};

/**
* Null에 해당하는 값 체크.
* @param : sValue - Null 확인 밗
* @return : true/false
* @example : smfIsNull(sValue);
*/
prForm.smfIsNull = function(sValue)
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
* 문자열에서 주어진 부분 문자열의 위치를 검색
* @param : sOrg 	- 검색대상 문자열
* @param : sFind 	- 검색할 문자열
* @param : nStart 	- 검색 시작 위치
* @return : Integer(문자열의 위치)
* @example : smfPos(strText, "Find", [0]);		[]는 Optional을 표현.
*/
prForm.smfPos = function(sOrg, sFind, nStart)
{
	if( this.smfIsNull(sOrg) || this.smfIsNull(sFind) )		return -1;
	if( this.smfIsNull(nStart) )		nStart = 0;

	return sOrg.indexOf(sFind, nStart);
};

/**
* 문자열에서 주어진 부분 문자열의 위치를 검색
* @param : sOrg 	- 가운데 부문을 얻어올 원본 문자열
* @param : sStart - 얻어올 문자열의 첫 Index
* @param : sEnd 	- 얻어올 문자열의 마지막 Idnex
* @param : nStart - 검색 시작 위치
* @return : string
* @example : smfMid(strText, 2, 4, [nStart]);
*/
prForm.smfMid = function(sOrg, sStart, sEnd, nStart)
{
	var pos_start, pos_end, ret_str;

	if( this.smfIsNull(sOrg) )		return "";
	if( this.smfIsNull(sStart) )	sStart = "";
	if( this.smfIsNull(sEnd) )		sEnd = "";
	if( this.smfIsNull(nStart) )	nStart = 0;

	if( sStart == "" )
		pos_start = nStart;
	else
	{
		pos_start = this.smfPos(sOrg, sStart, nStart);
		if( pos_start < 0 )	return "";
	}
	if( sEnd == "" )
		pos_end = sOrg.length;
	else
	{
		pos_end = this.smfPos(sOrg, sEnd, pos_start+sStart.length, nStart);
		if( pos_end < 0 )	return "";
	}

	return sOrg.substring(pos_start+sStart.length, pos_end);
};

/**
* 문자열의 일부분을 다른 문자열로 치환
* @param : sOrg 	- 가운데 부문을 얻어올 원본 문자열
* @param : sRepFrom - 치환대상 문자열
* @param : sRepTo 	- 치환될 문자열
* @return : string
* @example : smfReplace( sOrg, " ", "" );
*/
prForm.smfReplace = function( sOrg, sRepFrom, sRepTo )
{
	var pos, nStart=0, sRet="";

	sOrg = this.smfStr(sOrg);

	if( this.smfIsNull(sOrg) )			return "";
	if( this.smfIsNull(sRepFrom) )		return sOrg;
	//if( smfIsNull(sRepTo) )		return sOrg;

	while(1)
	{
		pos = this.smfPos( sOrg, sRepFrom, nStart );
		if( pos < 0 )
		{
			sRet += sOrg.substr( nStart );
			break;
		}
		else
		{
			sRet += sOrg.substr( nStart, pos - nStart);
			sRet += sRepTo;
			nStart = pos+sRepFrom.length;
		}
	}
	return sRet;
};

/**
* 문자열의 좌측 공백을 제거
* @param : sOrg 		- 좌측 공백문자 제거 대상 문자열
* @param : [sTrim] 	- 제거대상 문자열(default:" ")
* @return : string
* @example : smfLTrim( sOrg, " ");
*/
prForm.smfLtrim = function(sOrg, sTrim)
{
	var chk, pos;

	sOrg = this.smfStr(sOrg);

	if( this.smfIsNull(sOrg) )		return "";
	if( this.smfIsNull(sTrim) )		sTrim = " ";

	for( pos = 0 ; pos < sOrg.length ; pos+=sTrim.length )
	{
		if( sOrg.substr( pos, sTrim.length ) != sTrim )
			break;
	}

	return sOrg.substr(pos);
};

/**
* 문자열의 우측 공백을 제거
* @param : sOrg 		- 우측 공백문자 제거 대상 문자열
* @param : [sTrim] 	- 치환대상 문자열
* @return : string
* @example : smfRTrim( sOrg, " ");
*/
prForm.smfRtrim = function(sOrg, sTrim)
{
	var pos, nStart;

	sOrg = this.smfStr(sOrg);

	if( this.smfIsNull(sOrg) )		return "";
	if( this.smfIsNull(sTrim) )		sTrim = " ";

	for( pos = sOrg.length-sTrim.length ; pos >= 0 ; pos -= sTrim.length )
	{
		if( sOrg.substr( pos, sTrim.length ) != sTrim )
			break;
	}

	return sOrg.substr(0, pos+sTrim.length);
};

/**
* 문자열의 좌우측 공백을 제거
* @param : sOrg 		- 좌측 공백문자 제거 대상 문자열
* @param : [sTrim] 	- 제거대상 문자열(default:" ")
* @return : string
* @example : smfTrim( sOrg, " ");
*/
prForm.smfTrim = function(sOrg, sTrim) {
	var rtnVal = "";
	if (this.smfIsNull(sTrim)) sTrim = " ";
	rtnVal = this.smfRtrim(sOrg, sTrim);
	rtnVal = this.smfLtrim(rtnVal, sTrim);

	return rtnVal;
};

/**
* 문자열이 지정된 길이가 되도록 왼쪽을 채우는 함수
* @param : sOrg 	- 원본 문자열
* @param : sPad 	- 왼쪽에 채울 문자
* @param : nCnt 	- 출력될 문자열의 길이
* @return : string
* @example : smfLPad("2", "0", 2);
*/
prForm.smfLPad = function(sOrg, sPad, nCnt)
{
	return this.lpad(sOrg, sPad, nCnt);
};

/**
* 문자열이 지정된 길이가 되도록 오른쪽을 채우는 함수
* @param : sOrg 	- 원본 문자열
* @param : sPad 	- 오늘쪽에 채울 문자
* @param : nCnt 	- 출력될 문자열의 길이
* @return : string
* @example : smfRPad("2", "0", 2);
*/
prForm.smfRPad = function(sOrg, sPad, nCnt)
{
	return this.rpad(sOrg, sPad, nCnt);
};

/**
* 문자열의 오른쪼 부분을 지정한 길이만큼 가져오는 함수
* @param : sOrg 	- 원본 문자열
* @param : nSize 	- 얻어올 크기
* @return : string
* @example : smfRight(sOrg, 2);
*/
prForm.smfRight = function(sOrg, nSize)
{
	if( this.smfIsNull(sOrg) || this.smfIsNull(nSize) )		return "";

	if( sOrg.length < nSize )
		return sOrg;
	else
		return sOrg.substr(sOrg.length-nSize, nSize);
};

/**
* 문자열의 문자 개수 가져옴
* @param : sOrg 	- 원본 문자열
* @param : sCnt 	- Count 대상 문자
* @return : Integer
* @example : smfCount(sOrg, 2);
*/
prForm.smfCount = function(sOrg, sCnt)
{
	var i, sRet="";
	var nCnt = 0;

	if( this.smfIsNull(sOrg) || this.smfIsNull(sCnt) )		return -1;

	for( i = 0 ; i < sOrg.length ; i += sCnt.length )
	{
		if( sOrg.substr(i, sCnt.length) == sCnt )
			nCnt++;
	}

	return nCnt;
};

/**
* 문자열의 전체 길이 계산(한글,한자:2 / 나머지 1)
* @param : sVal 	- 입력받은 문자열
* @return : Integer
* @example : smfLenB(sVal);
*/
prForm.smfLenB = function(sVal)
{
	var len = 0;

	if( this.smfIsNull(sVal) ) 	return -1;

    for (i=0; i<sVal.length; i++)
    {
			if (sVal.charCodeAt(i) > 127)
				len += 3;
			else
				len += 1;
    }
	return len;
};

/**
* 숫자형식 여부 확인
* @param : sNum 	- 숫자형식 확인 대상 문자열
* @return : true/false
* @example : smfIsNum(sNum);
*/
prForm.smfIsNum = function(sNum)
{
	sNum = ""+sNum;
	var floatNumer = parseFloat(sNum);
	var result = !isNaN(parseFloat(sNum)) && (floatNumer+"").length == sNum.length;
	return result;
// 	
// 	var c;
// 	var point_cnt=0;
// 	var ret=true;
// 
// 	if( this.smfIsNull(sNum) )		return false;
// 
// 	for( i = 0 ; i < sNum.length ; i++ )
// 	{
// 		c = sNum.charAt(i);
// 		if( i == 0 && ( c == "+" || c == "-" ) );
// 		else if( c >= "0" && c <= "9" );
// 		else if( c == "." )
// 		{
// 			point_cnt++;
// 			if( point_cnt > 1 )
// 			{
// 				ret = false;
// 				break;
// 			}
// 		}
// 		else
// 		{
// 			ret = false;
// 			break;
// 		}
// 	}
// 
// 	return ret;
};

/**
* 숫자에 천단위 "," 적용
* @param : sNum 	- 숫자형식 확인 대상 문자열
* @return : string
* @example : smfSetComma(sNum);
*/
prForm.smfSetComma = function(sNum)
{
	if( this.smfIsNull(sNum) )	return "";

	var ppos, sDigit, nEnd, nStart=0, sRet="";
	sNum = String(sNum).replace(",","");
	
	if( sNum.charAt(0) == "+" || sNum.charAt(0) == "-" )
	{
		sRet += sNum.charAt(0);
		nStart = 1;
	}

	ppos = this.smfPos(sNum, ".", nStart);
	if( ppos < 0 )
		nEnd = sNum.length;
	else
		nEnd = ppos;
	sDigit = sNum.substr(nStart, nEnd-nStart);
	
	for(var pos=0; pos < sDigit.length; pos++)
	{
		if( pos != 0 && (sDigit.length-pos)%3 == 0 )
			sRet += ",";

		sRet += sDigit.charAt(pos);
	}
	sRet += sNum.substr(nEnd);

	return sRet;
};

/**
* 해당월의 마지막 날짜
* @param : sDate 	- yyyyMMdd 형태의 날짜
* @return : integer
* @example : smfLastDateNum("20100501");
*/
prForm.smfLastDateNum = function(sDate)
{
	var nMonth, nLastDate;

	if( this.smfIsNull(sDate) )		return -1;

	nMonth = parseInt(sDate.substr(4,2), 10);
	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
		nLastDate = 31;
	else if( nMonth == 2 )
	{
		if( this.smfIsLeapYear(sDate) == true )
			nLastDate = 29;
		else
			nLastDate = 28;
	}
	else
		nLastDate = 30;

	return nLastDate;
};

/**
* 윤년여부 확인
* @param : sDate 	- yyyyMMdd형태의 날짜
* @return : true/false
* @example : smfIsLeapYear("20100501");
*/
prForm.smfIsLeapYear = function(sDate)
{
	var ret;
	var nY;

	if( this.smfIsNull(sDate) )		return false;

	nY = parseInt(sDate.substring(0,4), 10);

	if ((nY % 4) == 0)
	{
		if ((nY % 100) != 0 || (nY % 400) == 0)
			ret = true;
		else
		ret = false;
	}
	else
		ret = false;

	return ret;
};

/**
* 해당월의 마지막 날짜를 yyyyMMdd 형태로 출력
* @param : sDate 	- yyyyMMdd형태의 날짜
* @return : string(date:yyyyMMdd)
* @example : smfLastDateNum("20100501");
*/
prForm.smfLastDate = function(sDate)
{
	if( this.smfIsNull(sDate) )		return "";

	var nLastDate = this.smfLastDateNum(sDate);

	return sDate.substr(0,6) + nLastDate.toString();
};

/**
* 날짜 형시 여부 체크
* @param : sDate 	- yyyyMMdd형태의 날짜
* @return : true/false
* @example : smfLastDateNum("20100501");
*/
prForm.smfIsDate = function(sDate)
{
	if( this.smfIsNull(sDate) )		return false;

	if( sDate.length != 8 )
		return false;

	if( this.smfIsNum(sDate) != true )
		return false;

	//20110809 문호상추가
	if(sDate.substring(0, 1) == '0') return false; 
	//20110809 문호상추가끝

	var nMonth  = parseInt(sDate.substring(4,6), 10);
	var nDate  = parseInt(sDate.substring(6,8), 10);

	if( nMonth < 1 || nMonth > 12 )
		return false;

	if( nDate < 1 || nDate > this.smfLastDateNum(sDate) )
		return false;

	return true;
};

/**
* 입력된 날짜에 지정된 인수 만큼의 날짜를 증감
* @param : sDate 		- yyyyMMdd형태의 날짜
*					 nOffset 	- 일 증감
* @return : string(date)
* @example : smfAddDate("20100501", 5);
*/
prForm.smfAddDate = function(sDate, nOffset)
{
	if( this.smfIsNull(sDate) || this.smfIsNull(nOffset) )	return "";

    var nYear = parseInt(sDate.substr(0, 4));
    var nMonth = parseInt(sDate.substr(4, 2));
    var nDate = parseInt(sDate.substr(6, 2)) + nOffset;

    return this.smfMakeDate(nYear, nMonth, nDate);
};

/**
* 입력된 날짜에 지정된 인수 만큼의 월 증감
* @param : sDate 		- yyyyMMdd형태의 날짜
* @param : nOffset 	- 월 증감
* @return : string(date)
* @example : smfAddMonth("20100501", 5);
*/
prForm.smfAddMonth = function(sDate, nOffset)
{
	if( this.smfIsNull(sDate) || this.smfIsNull(nOffset) )		return "";

	var nYear = parseInt(sDate.substr(0, 4));
	var nMonth = parseInt(sDate.substr(4, 2))+nOffset;
	var nDate = parseInt(sDate.substr(6, 2));
	var nLastDate, sRet;

	sRet = this.smfMakeDate(nYear, nMonth, 1);
	nLastDate = this.smfLastDateNum(sRet);
	sRet = sRet.substr(0,6);

	if( nDate > nLastDate )
		sRet += this.smfRight("00" + nLastDate.toString(), 2);
	else
		sRet += this.smfRight("00" + nDate.toString(), 2);

	return sRet;
};

/**
* yyyyMMdd 형태의 문자열 날짜 출력
* @param : nYear 	- Year : 년도
* @param : nYear 	- Month : 월
* @param : nYear 	- Date : 일
* @return : string(date)
* @example : smfMakeDate("2010", "05", "01");
*/
prForm.smfMakeDate = function(nYear, nMonth, nDate)
{
	if( this.smfIsNull(nYear) || this.smfIsNull(nMonth) || this.smfIsNull(nDate) )	return "";

	var objDate = new Date(nYear, nMonth-1, nDate);

	var sYear   = objDate.getFullYear().toString();
	var sMonth  = this.smfRight("0" + (objDate.getMonth() + 1), 2);
	var sDate   = this.smfRight("0" + objDate.getDate(), 2);

	return sYear + sMonth + sDate;
};

/**
* 현재 날짜 출력(Local)
* @param : N/A
* @return : string(date)
* @example : smfToday();
*/
prForm.smfToday = function()
{
	var sToday = null;
 	//var sToday = nexacro.getApplication().gdsTime.getColumn(0,"currentDate");
	if (this.smfIsNull(sToday)) {
		sToday = "";
		var objDate = new Date();
		sToday  = objDate.getFullYear().toString();
		sToday += this.smfRight("0" + (objDate.getMonth() + 1), 2);
		sToday += this.smfRight("0" + objDate.getDate(), 2);
	}
 	return sToday;


};

/**
* 현재 날짜 + 시간 출력(Local)
* @param : N/A
* @return : string(date:yyyyMMddhhmiss)
* @example : smfTodayTime("2010", "05", "01");
*/
prForm.smfTodayTime = function(bMode)
{
	var sToday = null;
	//var sToday = nexacro.getApplication().gdsTime.getColumn(0,"currentDateTime");
	if (this.smfIsNull(sToday)) {
		var objDate = new Date();
		sToday  = objDate.getFullYear().toString();
		sToday += this.smfRight("0" + (objDate.getMonth() + 1), 2);
		sToday += this.smfRight("0" + objDate.getDate(), 2);
		sToday += this.smfRight("0" + objDate.getHours(), 2);
		sToday += this.smfRight("0" + objDate.getMinutes(), 2);
		sToday += this.smfRight("0" + objDate.getSeconds(), 2);
		if (bMode == "S") {
			sToday += objDate.getMilliseconds();
		}
	}
	return sToday;

};

/**
* 두 일자간의 날짜 계산
* @param : sStartDate	- yyyyMMdd 형태의 From 일자
*		   sEndDate 	- yyyyMMdd 형태의 To 일자
* @return : integer
* @example : smfDiffDate("20091002", "2010051");
*/
prForm.smfDiffDate = function(sStartDate, sEndDate)
{
	if( this.smfIsNull(sStartDate) || this.smfIsNull(sEndDate) )	return NaN;

	var vFromDate = new Date(parseInt(sEndDate.substring(0,4), 10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
	var vToDate = new Date(parseInt(sStartDate.substring(0,4), 10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));

	return parseInt((vFromDate - vToDate)/(1000*60*60*24));
};

/**
* 두 월간의 월 계산
* @param : sStartDate	- yyyyMMdd 형태의 From 일자
* @param : sEndDate 	- yyyyMMdd 형태의 To 일자
* @return : integer
* @example : smfDiffMonth("20091002", "2010051");
*/
prForm.smfDiffMonth = function(sStartDate, sEndDate)
{
	var nStartMon, nEndMon;

	if( this.smfIsNull(sStartDate) || this.smfIsNull(sEndDate) )	return NaN;

	nStartMon = parseInt(sStartDate.substr(0,4), 10)*12 + parseInt(sStartDate.substr(4,2), 10);
	nEndMon = parseInt(sEndDate.substr(0,4), 10)*12 + parseInt(sEndDate.substr(4,2), 10);

	return (nEndMon - nStartMon);
};


/**
* 개정전 주민번호 확인
* @param : sValue	 - 입력된 주민등록번호
* @return : true/false
* @example : smfIsRsrNo(sValue);
*/
prForm.smfIsRsrNo = function(sValue){
	var rrn = this.smfStr(sValue);
	if(rrn == null) {
		return false;
	}
	
	if (rrn.length != 13)
		return false; // 주민등록번호 자리수가 맞는가를 확인
	
	
	// 앞자리가 날짜 형태인지 검증한다
	var leftRrn = rrn.substring(0, 6);
	if(! this.smfIsDate("20" + leftRrn)) {
		return false;
	}
	
	
	// 성별
	var chr6 = rrn.charAt(6);
	if(!(chr6 == '1' || chr6 == '2' || chr6 == '3' || chr6 == '4' || chr6 == '5' || chr6 == '6'|| chr6 == '7' || chr6 == '8')){
		return false;
	}

	// 숫자인지 검증
	var rightRrn = rrn.substring(6);
	for(var i=0,size=rightRrn.length; i<size; i++) {
		var num = parseInt(rightRrn.charAt(i));
		if(isNaN(num)) return false;
	}
	
	return true;
};

/**
* 개정전 주민번호 확인
* @param : sJuminNo	 - 입력된 주민등록번호
* @return : true/false
* @example : smfIsRsrNoOld(sValue);
*/
prForm.smfIsRsrNoOld = function(sJuminNo){
	var birthYear = this.smfGetBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	var birthMonth = sJuminNo.substr(2, 2)-1;
	var birthDate = sJuminNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	}else{
		return true;
	}
};

/**
 * 주민번호 뒷 첫번째 자리로 년대를 return 한다. 
 * @param {String} sJuminNo	생년 월일 또는 주민 번호
 * @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 */
prForm.smfGetBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	var vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
 * 법인 등록번호 확인
 * @param {String} sValue : 법인 등록 번호
 * @return {String} - sValue가 법인등록번호 형식에 맞는 경우 = true
 *                  - sValue가 법인등록번호 형식에 맞지 않는 경우 = false
 */
prForm.smfIsCorpRegNo = function(sValue)
{
    if (sValue.length != 13){
        return false;
    }

    var arr_regno  = sValue.split("");
    var arr_wt   = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
    var iSum_regno  = 0;
    var iCheck_digit = 0;

    for (i = 0; i < 12; i++){
		iSum_regno +=  nexacro.toNumber(arr_regno[i]) * nexacro.toNumber(arr_wt[i]);
    }

    iCheck_digit = 10 - (iSum_regno % 10);
    iCheck_digit = iCheck_digit % 10;

    if (iCheck_digit != arr_regno[12]){
        return false;
    }
    return true;
};

/**
 * 모바일번호인지 확인
 * @param {String} sValue : 번호
 * @return {boolean} true/false
 */
prForm.smfIsMobileNo = function(sValue) {
	sValue = this.smfStr(sValue);

	if(sValue.match(/^(0[1678][016789])-(\d{3,4})-(\d{4})$/)){
		return true;
	}else{
		return false;
	}
};

/**
 * 전화번호인지 확인
 * 모바일, 지역전화번호, 인터넷전화번호를 검증한다
 * @param    sValue : 번호
 * @return
**/
prForm.smfIsPhoneNo = function(sValue) {
	sValue = this.smfStr(sValue);

	//((010)-(\d{4})-(\d{4}))
	if(this.smfIsMobileNo(sValue)){	
		return true;
	}

	if(sValue.match(/^((0[1678][16789])-(\d{3,4})-(\d{4}))|((\d{2,3})-(\d{3,4})-(\d{3,4}))$/)){
		return true;
	}else{
		return false;
	}
};

/**
 * 이메일 확인
 * @param {String} sValue : 이메일
 * @return
**/
prForm.smfIsEmail = function(sValue) {
	sValue = this.smfStr(sValue);
	// sss@f.  를 체크못하는 것을 수정
	//if(sValue.match(/^(\w+)(@)(\w+)(\.)(.*)$/)){
	if(sValue.match(/\S+@\S+\.\S+/)){
		return true;
	}else{
		return false;
	}
};

/**
* 외국인번호 확인
* @param : sValue    - 입력된 외국인등록번호
* @return {Boolean} true/false
* @example : smfIsForeignNo(sValue);
*/
prForm.smfIsForeignNo = function(sValue)
{
    var sum = 0;	
    var odd = 0;
	var buf = [];

    if (sValue.length != 13) {
        return false;
    }

    buf = Array(13);
    for (i = 0; i < 13; i++) buf[i] = parseInt(sValue.charAt(i));

    if (buf[6] != 5 && buf[6] != 6 && buf[6] != 7 && buf[6] != 8) {
        return false;
    }

    odd = buf[7] * 10 + buf[8];

    if (odd % 2 != 0) {
      return false;
    }

    for (i = 0, sum = 0; i < 12; i++) {
        sum += buf[i] * ((i % 8) +2);
    }

    sum = (11 - (sum % 11)) % 10 + 2;

	// 10보다 큰경우 뒷자리만
	sum = sum % 10;
	
    if (sum != buf[12]) {
        return false;
    } else {
        return true;
    }
};

/**
* 선택된 Grid Column에 대한 Sort 처리
* @param : grdObj					- Sorting 처리 Grid Object
* @param nCell					- Sort 적용 Column
* @param [resetCol]		- Sort 해제 시 기준 Column 정보
* @param [strAscMark]	- Asc Mark(표현문자:Default-▲)
* @param [strDescMark]	- Desc Mark(표현문자:Default-▼)
* @return : N/A
* @example : smfProcGrdSort(grdObj, nCell, "col1,col2", "↑", "↓");
*/
prForm.smfProcGrdSort = function(grdObj, nCell, resetCol, strAscMark, strDescMark) {
	var curObj = grdObj.id;

	if (! this.smfIsNull(strAscMark)) this.smvAscMark  =" " + strAscMark;		// Asc Mark
	if (! this.smfIsNull(strDescMark)) this.smvDescMark = " " + strDescMark;	// Desc Mark

	// 단일 Column Sort 처리 시
	this._smfGridDataSort(grdObj, nCell, resetCol);
};

/**
* (공통만 사용)
* Column Sort 처리
* @param : grdObj	- Sorting 처리 Grid Object
* @param nCell		- Sort 적용 Column
* @param [resetCol]	- Sort 해제 시 기준 Column 정보
* @return : N/A
* @example : _smfGridDataSort(grdObj, nCell, resetCol);
*/
prForm._smfGridDataSort = function(grdObj, nCell, resetCol) {
	// Grid Bind Dataset 추출
	var dsObj = new Object();
	dsObj = this.objects[grdObj.binddataset];

	var strHeadText;				// Head Text + SortMark
	var sortCol;   					// 선택된 Head의 Column Index
	var sortSpan;    				// 선택된 Head의 ColSpan 정보
	var splitCol;					// Grid body Column의 text의 colid 추출 : ex)bind:Col1 - split처리(":")
	var sortColumns = "";  	// Grid Sort 대상 Column
	var rowDepth;

	var headCnt = grdObj.getCellCount("head");    // Grid Head Cell Count
	var bodyCnt = grdObj.getCellCount("body");    // Grid Body Cell Count

	var sortRow = grdObj.getCellProperty("head",nCell,"row");

	for (var iHead=0; iHead<headCnt; iHead++) {
		rowDepth = grdObj.getCellProperty("head", iHead, "row");
		if ( (nCell == iHead) && (sortRow == rowDepth) ) break;
	}

	sortCol = grdObj.getCellProperty("head", iHead, "col");

	var bodyRow = this._smfGrdBodyDepth(grdObj);

	for (var iBody=0; iBody<bodyCnt; iBody++) {
		if (bodyRow > 0) {
			if ( (sortCol == grdObj.getCellProperty("body", iBody, "col")) &&
				 (sortRow == grdObj.getCellProperty("body", iBody, "row")) ) break;
		} else {
			if (sortCol == grdObj.getCellProperty("body", iBody, "col")) break;
		}
	}

	//checkbox 일경우 제외
	  if (grdObj.getCellProperty("head",nCell,"displaytype") == "checkbox" ||
		   grdObj.getCellProperty("head",nCell,"edittype") == "checkbox") return;

		//expr일 경우 sort제외
		splitCol = grdObj.getCellProperty("body", iBody, "text").split(":");
	  if (splitCol[0] == "expr") return;
	  splitCol ="";

	// Grid Head의 해당 Column이 Asc(▲) 인 경우
	if (grdObj.getCellProperty("head", nCell, "text").indexOf(this.smvAscMark) > -1) {
		if (grdObj.getCellProperty("head", nCell, "colspan") > 1) {
			sortSpan = grdObj.getCellProperty("head", iHead, "colspan");

			for (var ii=0; ii<bodyCnt; ii++) {
				if ( (grdObj.getCellProperty("body", ii, "col") >= sortCol) &&
					grdObj.getCellProperty("body", ii, "col") < (Math.abs(sortCol) + Math.abs(sortSpan) ) ) {

					if (grdObj.getCellProperty("body", ii, "text").length > 0) {
						splitCol = grdObj.getCellProperty("body", ii, "text").split(":");
						sortColumns += "-" + splitCol[1];
					}
				}
			}
		} else {
			splitCol = grdObj.getCellProperty("body", iBody, "text").split(":");
			sortColumns += "-" + splitCol[1];
		}

		strHeadText = grdObj.getCellProperty("head",nCell,"text");
		strHeadText = nexacro.replaceAll(strHeadText,this.smvAscMark, this.smvDescMark);

	// Grid Head의 해당 Column이 Desc(▼) 인 경우
	} else if (grdObj.getCellProperty("head", nCell, "text").indexOf(this.smvDescMark) > -1) {
		var sortIdx = 0;

		// Sort Mark 제거 시 해당 Grid의 Column Index에 대해서 Sort 처리(Max 3 Column)
		if (resetCol == null || resetCol == "") {
			for (var ii=0; ii<bodyCnt; ii++) {
				if (grdObj.getCellProperty("body", ii, "text").length > 1) {
					splitCol = grdObj.getCellProperty("body", ii, "text").split(":");
					if(splitCol[0] != "expr"){
					   sortColumns += "+" + splitCol[1];
					   sortIdx++;
					}

				}
				if (sortIdx == 3) break;
			}

		// Reset Column이 정의된 경우
		} else {
			sortColumns = this._smfDefaultSortCols(resetCol);	// Sort Column이 정의된 경우(매개변수)
		}

		strHeadText = grdObj.getCellProperty("head", nCell, "text");
		strHeadText = nexacro.replaceAll(strHeadText,this.smvDescMark, "");

	// 초기값인 경우(Sort 미 적용) 시
	} else {
		if (grdObj.getCellProperty("head",nCell,"colspan") > 1) {
			sortSpan = grdObj.getCellProperty("head", iHead, "colspan");

			for (var ii=0; ii<bodyCnt; ii++) {
				if ( (grdObj.getCellProperty("body", ii, "col") >= sortCol) &&
					grdObj.getCellProperty("body", ii, "col") < (Math.abs(sortCol) + Math.abs(sortSpan) ) ){

					if (grdObj.getCellProperty("body", ii, "text").length > 0) {
						splitCol = grdObj.getCellProperty("body", ii, "text").split(":");
						sortColumns += "+" + splitCol[1];
					}
				}
			}

		} else {
			splitCol = grdObj.getCellProperty("body", iBody, "text").split(":");
			sortColumns += "+" + splitCol[1];
		}

		strHeadText = grdObj.getCellProperty("head", nCell, "text");
		strHeadText = strHeadText + this.smvAscMark;
	}

	// 해당 Column에 대한 Sort 처리
	if (sortColumns == "reset") dsObj.reset();
	else dsObj.set_keystring("S:" + sortColumns);

	// Grid의 Row Position 설정(Sort 처리 시 Row Position 변경)
	dsObj.set_rowposition(0);

	// 선택 Head의 Text 변경 (Sort Mark 적용)
	grdObj.setCellProperty("head", nCell, "text", strHeadText);

	// Selected Column을 제외한 Sort Mark 제거
	this._smfClearSortMark(grdObj, nCell);
};

/**
* (공통만 사용)
* Seleted Column을 제외한 Sort Mark 제거
* @param : grdObj	- Sorting 처리 Grid Object
* @param nCell	- Sort 적용 Column
* @return : N/A
* @example : _smfClearSortMark(grdObj, nCell)
*/
prForm._smfClearSortMark = function(grdObj, nCell) {
	var nColCnt = grdObj.getCellCount("head");
	var sRepText;

	for(var ii=0; ii<nColCnt; ii++) {
		if (nCell != null && nCell == ii) continue;	// 선택한 Cell을 제외하고 처리
		if (grdObj.getCellProperty("head",ii,"displaytype") == "checkbox" ||
         grdObj.getCellProperty("head",ii,"edittype") == "checkbox") continue;

		sRepText = nexacro.replaceAll(nexacro.replaceAll(grdObj.getCellProperty("head",ii,"text"),this.smvAscMark,""),this.smvDescMark, "");
		grdObj.setCellProperty("head",ii,"text", sRepText);
	}

	//var dsObj = grdObj.binddataset;
	//eval(dsObj).keystring = "";
};

/**
* (공통만 사용)
* Sort Mark 제거 시 기본 Sort Column 정의(ResetColumn)
* @param : ResetColumn	- Sorting 처리 Grid Object
* @return : Sort Column(String)
* @example : _smfDefaultSortCols(resetCol)
*/
prForm._smfDefaultSortCols = function(resetCol) {
	var rtnVal = "";
	var arrSortCol = resetCol.split(",");
	var sortLen = arrSortCol.length;

	for (i=0; i<sortLen; i++) {
		if (arrSortCol[i].length < 1) continue;
		rtnVal += "+" + arrSortCol[i];
	}

	return rtnVal;
};

/**
* (공통만 사용)
* Grid Head(band)의 Row Depth 계산
* @param : GridObject	- Sorting 처리 Grid Object
* @return : Head(band) Row Depth(Number)
* @example : _smfGrdBodyDepth(grdObj)
*/
prForm._smfGrdBodyDepth = function(grdObj) {
	var rtnVal = 0;
	var rowDepth = 0;

	var bodyCnt = grdObj.getCellCount("body");    // Grid Body Cell Count

	for (var i=0; i<bodyCnt; i++) {
		rowDepth = grdObj.getCellProperty("body",i,"row");
		if (rowDepth > rtnVal) rtnVal = rowDepth;
	}

	return rtnVal;
};

/**
* Sort Mark 제거(초기화상태로 되돌리고자 할때)
* @param : grdObj	- Sorting 처리 Grid Object
* @return : N/A
* @example : smfClearSort(grdObj)
*/
prForm.smfClearSort = function(grdObj) {
	var nColCnt = grdObj.getCellCount("head");
	var sRepText;

	for(var ii=0; ii<nColCnt; ii++) {
		sRepText = this.smfStr(grdObj.getCellProperty("head",ii,"text")).replace(this.smvAscMark,"").replace(this.smvDescMark, "");
		grdObj.setCellProperty("head",ii,"text", sRepText);
	}

	var dsObj = grdObj.binddataset;
	this.smfFindComponentInThisContext(dsObj).set_keystring("");
};

/**
* Grid 체크박스를 이용한 전체선택/해제
* @param : obj	- Grid Object
* @param e		- Event Info
* @return : N/A
* @example : smfSetGridCheckAll(obj, e)
*/
prForm.smfSetGridCheckAll = function(obj, e)
{
	var idxCol;
	var strText = "전체선택";

	if (e.cell == undefined) idxCol = e;
	else idxCol = e.cell;

	var celltype = obj.getCellProperty("head", idxCol, "displaytype");
	var smvIsGridCheckAll = obj.getCellText(-1, idxCol);

	if (celltype.toUpperCase() != "CHECKBOX" && celltype.toUpperCase() != "CHECKBOXCONTROL") {
		return;
	}
	var dsObj = this.smfFindComponentInThisContext(obj.binddataset);
	var v_Colid = nexacro.replaceAll(obj.getCellProperty("body", e.col, "text"),"bind:", "");

	if (smvIsGridCheckAll == 1) {
		smvIsGridCheckAll = 0;
		strText = "전체해제";
	} else {
		smvIsGridCheckAll = 1;
	}
	dsObj.set_enableevent(false);
	for (var i=0; i<dsObj.getRowCount(); i++) {
		dsObj.setColumn(i, v_Colid, smvIsGridCheckAll);
	}
	obj.setCellProperty( "Head", idxCol, "expr", smvIsGridCheckAll);
	dsObj.set_enableevent(true);

	this.webfSetAccessMsg(strText);
};

/**
* Grid에서 선택한 Row를 지정한 데이타셋으로 복사
* @param : obj	- Grid Object
* @param dsObj		- 복사할 대상 데이타셋 object
* @return : N/A
* @example : smfGridMultiSelectCopyRow(grd_leftList, dsRightList, "name")
*/
prForm.smfGridMultiSelectCopyRow = function(obj, dsObj, strColNm) {
	var nCrow 				= 0;
	var nCnt 				= 0;
	//Grid Binddataset
	var strGrdDsNm 			= obj.binddataset;
	var arrSelectedstartRow = obj.selectstartrow;
	var arrselectendrow 	= obj.selectendrow;

	nCnt = arrSelectedstartRow.length;

	if (nCnt > 1) {
		for (var i=0;i<nCnt;i++) {
			nCrow = parseInt(arrSelectedstartRow[i]);
			var strFindKey = this.smfFindComponentInThisContext(strGrdDsNm).getColumn(nCrow,strColNm);
			//데이타 중복이 아닌경우
			if (dsObj.findRow(strColNm, strFindKey) == -1) {
				//왼쪽 리스트에 선택한 값을 오른쪽 리스트로 이동
				var nRow = dsObj.addRow();
				dsObj.copyRow(nRow, this.smfFindComponentInThisContext(strGrdDsNm),nCrow);
			}
		}
	} else {
		if (arrSelectedstartRow < 0) return;
		for (var i=arrSelectedstartRow;i<=arrselectendrow;i++) {
			var strFindKey = this.smfFindComponentInThisContext(strGrdDsNm).getColumn(i,strColNm);
			//데이타 중복이 아닌경우
			if (dsObj.findRow(strColNm, strFindKey) == -1) {
				//왼쪽 리스트에 선택한 값을 오른쪽 리스트로 이동
				var nRow = dsObj.addRow();
				dsObj.copyRow(nRow, this.smfFindComponentInThisContext(strGrdDsNm),i);
			}
		}
	}
};

/**
* Grid에서 선택한 Row를 삭제
* @param : obj	- Grid Object
* @return : N/A
* @example : smfGridMultiSelectDelRow(grd_rightList)
*/
prForm.smfGridMultiSelectDelRow = function(obj) {
	var nCrow 				= 0;
	var nCnt 				= 0;
	//Grid Binddataset
	var strGrdDsNm 			= obj.binddataset;
	var arrSelectedstartRow = obj.selectstartrow;
	var arrselectendrow 	= obj.selectendrow;

	nCnt = arrSelectedstartRow.length;

	if (nCnt > 1) {

		var arr1 = new Array(nCnt);
		for (var i=0;i<arr1.length;i++) {
			arr1[i] = arrSelectedstartRow[i];
		}
		arr1.sort();
		arr1.reverse();

		for (var i=0;i<nCnt;i++) {
			nCrow = parseInt(arr1[i]);
			//오른쪽 리스트에 선택한 값을 리스트에서 삭제
			this.smfFindComponentInThisContext(strGrdDsNm).deleteRow(nCrow);
		}
	} else {
		for (var i=arrselectendrow;i>=arrSelectedstartRow;i--) {
			//arrSelectedstartRow 값이 변하는 관계로 return 처리
			if (arrSelectedstartRow < 0) return;
			//오른쪽 리스트에 선택한 값을 리스트에서 삭제
			this.smfFindComponentInThisContext(strGrdDsNm).deleteRow(i);
		}
	}
	obj.set_selecttype("row");
	obj.set_selecttype("multiarea");
	var ds = this.smfFindComponentInThisContext(strGrdDsNm);
	for(var i=0; i<ds.getRowCount(); i++){
		/* [X-LOG] selectRow은 지원되지 않는 메서드입니다.*/ ds.selectRow(i, false);
	}
};

/**
* (사용안함)
*/
prForm.smfGetParamsInUserSupport = function(){
	var argumentsOnMenuPage = this.getOwnerFrame().arguments;
	var pgeClsfId = this.smfStr(argumentsOnMenuPage.pv_pgeClsfId);

	var lclasSkllCode = "";
	var mlsfcSkllCode = "";

	//메뉴가 아닌 나의메뉴에서 실행시는 pageid로 중,소분류를 얻어야 한다
	if(this.isNotNil(pgeClsfId)){
		lclasSkllCode = this.smfStr(pgeClsfId.split("_")[2]).toUpperCase();
		mlsfcSkllCode = this.smfStr(pgeClsfId.split("_")[3]).toUpperCase();
	}else{
		var formUrl = this.getOwnerFrame().formurl;
		if(formUrl.indexOf("::") != -1){
			//webbase
			formUrl = formUrl.substring(formUrl.lastIndexOf("::") + 2, formUrl.length-5);
		}else{
			//local
			formUrl = formUrl.substring(formUrl.lastIndexOf("/") + 1, formUrl.length-5);
		}
		//bcm_cfmrt01_m00
		//0123456789
		lclasSkllCode = this.smfStr(formUrl.substring(4, 7)).toUpperCase();
		mlsfcSkllCode = this.smfStr(formUrl.substring(7, 9)).toUpperCase();
	}


	//대분류,중분류,소분류
	var urlWithParams = format("&searchSsubbSys={0}"
					+"&searchLclasSkllCode={1}"
	                +"&searchMlsfcSkllCode={2}"
	                +"&searchSsubbSysCode={3}", [argumentsOnMenuPage.pv_ssubbSysCode, lclasSkllCode, mlsfcSkllCode, argumentsOnMenuPage.pv_ssubbSysCode]);

	return urlWithParams;
};

// @RHS 23.02.08 주석처리 - smfInit() 에서 사용하지만 호출되는 부분 모두 주석처리함
// /**
// * (사용안함)
// * 도움말 팝업창 호출
// * @param : obj	- Button Object
// * @param   e - ClickEventInfo
// * @return : N/A
// * @example : smfCallHelp()
// */
// prForm.smfCallHelp = function()
// {
// 	this.smfSetSsoKey();
// 	/* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다.*/
// 	var strUrl = "http://"+nexacro.getApplication().gv_ServerUrl+"/popup_help.jsp?"+"pgeid="+pv_fileNm+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID;
// 	//application.trace("error","smfCallHelp: "+strUrl);
// 	//var strHeader = "Content-Type: application/x-www-form-urlencoded\r\n";
// 	    //strHeader += "Cookie : SP_SESSIONID="+gv_ssoSessionValue+" _KWE_PTL_IDP_session="+"qwer1234sdfg"+"; domain=112.136.170.16; \n";
// 	//var objBuffer = new Buffer;
// 	//objBuffer.appendText("pgeid="+pv_fileNm+"&SP_SESSIONID="+gv_ssoSessionValue+"&_KWE_PTL_IDP_session="+"qwer1234sdfg");  //값을 넘겨줘야 하는 경우
// 	//objBuffer.appendText("pgeid="+pv_fileNm+"&SESSIONKEY1="+SESSIONKEY1+"&SESSIONVAL1="+SESSIONVAL1+"&SESSIONKEY2="+SESSIONKEY2+"&SESSIONVAL2="+SESSIONVAL2+"&SSO_IDP_ID="+SSO_IDP_ID);
// 	//trace(pv_fileNm+"help popup:"+strUrl);
// 	//atx_cookie.Navigate2("about:blank","wikiViewerPopup");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("about:blank");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. 
// 	   [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("javascript:window.open('"+strUrl+"','wikiViewerPopup','width=820,height=750,toolbar=no, directories=no, status=no, menubar=no, scrollbars=yes')");
// 	//atx_cookie.Navigate2(strUrl,null,"_New",objBuffer.data,strHeader);
// 	//var rtn_val = smfDialog("Popup_Help", "comm::comp_helpFrm.xfdl", "");
//     //alert_opacity(st_title.text + " 의 도움말 ");
// };
// 
// /**
// * (사용안함)
// * FAQ 팝업창 호출 (2011.11.22)
// * @param : obj	- Button Object
// * @param   e - ClickEventInfo
// * @return : N/A
// * @example : smfCallFaq()
// */
// prForm.smfCallFaq = function()
// {
// 	this.smfSetSsoKey();
// 	/* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(pv_pgeClsfId)가 있는지 확인이 필요합니다.*/
// 	var strUrl = "http://"+nexacro.getApplication().gv_ServerUrl+"/popup_faq.jsp?pageUrl=" + this.smfGetHelpNeisUrl() + "/usc_cmt_fq00_007.do"+"&pgeid="+pv_fileNm+"&pgeClsfId="+pv_pgeClsfId+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID;
// 	if(this.smfIsLocalMode() == true) /* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(pv_pgeClsfId)가 있는지 확인이 필요합니다.*/ 
// 		strUrl = this.smfGetHelpNeisUrl() + "/usc_cmt_fq00_007.do"+"?pgeid="+pv_fileNm+"&pgeClsfId="+pv_pgeClsfId+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID+this.smfGetParamsInUserSupport();
// 
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("about:blank");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("javascript:window.open('"+strUrl+"','faqPopup','width=850,height=680,resizable=yes,status=0,menubar=0,toolbar=no,location=no,scrollbars=yes')");
// };
// 
// /**
// * (사용안함)
// * QNA 팝업창 호출
// * @param : obj	- Button Object
// * @param   e - ClickEventInfo
// * @return : N/A
// * @example : smfCallQna()
// */
// prForm.smfCallQna = function()
// {
// 	this.smfSetSsoKey();
// 	
// 	//var rtn_val = smfDialog("Popup_Qna", "comm::comp_qna.xfdl", "");http://help.neis.go.kr/sqc_qur_qn00_006.do
// 	/* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(pv_pgeClsfId)가 있는지 확인이 필요합니다.*
// 	/var strUrl = "http://"+nexacro.getApplication().gv_ServerUrl+"/popup_qna.jsp?pageUrl=" + this.smfGetHelpNeisUrl() + "/sqc_qur_qn00_006.do"+"&pgeid="+pv_fileNm+"&pgeClsfId="+pv_pgeClsfId+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID;
// 	this.trace("smfCallQna: "+strUrl);
// 	//var strHeader = "Content-Type: application/x-www-form-urlencoded\r\n";
// 	//var objBuffer = new Buffer;
// 	//objBuffer.appendText("pageUrl=http://112.136.170.16:5012/sqc_qur_qn00_006.do");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("about:blank");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("javascript:window.open('"+strUrl+"','qnaPopup','width=1000,height=680,resizable=no,status=0,menubar=0,toolbar=no,location=no,scrollbars=yes')");
// 
// };
// 
// /**
// * (사용안함)
// * 절차서 팝업창 호출
// * @param : obj	- Button Object
// * @param   e - ClickEventInfo
// * @return : N/A
// * @example : smfCallPal()
// */
// prForm.smfCallPal = function() {
// 	this.smfPmmActiveX();
// 	this.smfSetSsoKey();
// 	var strSccd = nexacro.getApplication().gds_userinfo.getColumn(0,"conctAtptScCode");//PAGE_ID=pv_fileNm&SD_CODE=strSccd
// 
// 	var strUrl = "http://"+nexacro.getApplication().gv_ServerUrl+"/popup_pmm.jsp?"+"SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2;
// 	this.trace("smfCallPal: "+strUrl);
// 	//width=1000,height=680,resizable=no,status=0,menubar=0,toolbar=no,location=no,scrollbars=yes
// 	//atx_cookie.Navigate("about:blank");
// 	//atx_cookie.Navigate("javascript:window.open('"+strUrl+"','palPopup','width=1000,height=680,resizable=no,status=0,menubar=0,toolbar=no,location=no,scrollbars=yes')");
// 
// 	var strHeader = "Content-Type: application/x-www-form-urlencoded\r\n";
// 	/* [X-LOG] Buffer 객체를 지원하지 않습니다.*/
// 	var objBuffer = new Buffer;
// 	/* [X-LOG] appendText은 지원되지 않는 메서드입니다. [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다.*/ 
// 	objBuffer.appendText("PAGE_ID="+pv_fileNm+"&SD_CODE="+strSccd);
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_pmm)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate2)를 찾을 수 없습니다. [X-LOG] data은 지원되지 않는 속성입니다.*/ 
// 	div_atx.atx_pmm.Navigate2(strUrl,"","_self",objBuffer.data,strHeader);
// };

/**
* (사용안함)
* 온라인컨텐츠(동영상) 연결  팝업창 호출
* @param : obj	- Button Object
* @param   e - ClickEventInfo
* @return : N/A
* @example : smfCallOnlineContentsMove()
*/
// prForm.smfCallOnlineContentsMove = function() {
// 
// 	this.smfSetSsoKey();
// 
// 	/* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(pv_pgeClsfId)가 있는지 확인이 필요합니다.*/
// 	var strUrl = "http://"+nexacro.getApplication().gv_ServerUrl+"/popup_onl.jsp?pageUrl=" + this.smfGetHelpNeisUrl() + "/usc_cmt_oc00_009.do"+"&pgeid="+pv_fileNm+"&pgeClsfId="+pv_pgeClsfId+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID;
// 	if(this.smfIsLocalMode() == true) /* [X-LOG] 변수(pv_fileNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(pv_pgeClsfId)가 있는지 확인이 필요합니다.*/ 
// 	strUrl = this.smfGetHelpNeisUrl() + "/usc_cmt_oc00_009.do"+"?pgeid="+pv_fileNm+"&pgeClsfId="+pv_pgeClsfId+"&SESSIONKEY1="+nexacro.getApplication().SESSIONKEY1+"&SESSIONVAL1="+nexacro.getApplication().SESSIONVAL1+"&SESSIONKEY2="+nexacro.getApplication().SESSIONKEY2+"&SESSIONVAL2="+nexacro.getApplication().SESSIONVAL2+"&SSO_IDP_ID="+nexacro.getApplication().SSO_IDP_ID+this.smfGetParamsInUserSupport();
// 
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("about:blank");
// 	/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_cookie)가 있는지 확인이 필요합니다. [X-LOG] 함수(Navigate)를 찾을 수 없습니다.*/ 
// 	div_atx.atx_cookie.Navigate("javascript:window.open('"+strUrl+"','onlPopup','width=850,height=680,resizable=yes,status=0,menubar=0,toolbar=no,location=no,scrollbars=yes')");
// };

/**
* (사용안함)
* 댓글달기 팝업창 호출
* @param : obj	- Button Object
* @param   e - ClickEventInfo
* @return : N/A
* @example : smfCallReply()
*/
// prForm.smfCallReply = function(obj,  e)
// {
// 	var rtn_val = this.smfDialog("Popup_Reply", "comm::comp_reply.xfdl", "");
// };

/**

/**
* Grid에서 선택한 Row를 지정한 데이타셋으로 복사
* @param : obj	- Grid Object
* @param dsObj		- 복사할 대상 데이타셋 object
* @return : N/A
* @example : smfGridCheckedMoveRow(grd_leftList, dsRightList, "name", "chk_col")
*/
prForm.smfGridCheckedMoveRow = function(obj, dsObj, strColNm, strChkColNm) {
	var nCrow 	= 0;
	var nCnt 	= 0;
	//Grid Binddataset
	var strGrdDsNm 			= obj.binddataset;
	 nCnt = this.smfFindComponentInThisContext(strGrdDsNm).getRowCount();
	for (var i=0;i<nCnt;i++) {
		if ( this.smfFindComponentInThisContext(strGrdDsNm).getColumn(i,strChkColNm) == "1") {
			nCrow = i;
			var strFindKey = this.smfFindComponentInThisContext(strGrdDsNm).getColumn(nCrow,strColNm);
			//데이타 중복이 아닌경우
			if (dsObj.findRow(strColNm, strFindKey) == -1) {
				//왼쪽 리스트에 선택한 값을 오른쪽 리스트로 이동
				var nRow = dsObj.addRow();
				 dsObj.copyRow(nRow,this.smfFindComponentInThisContext(strGrdDsNm),nCrow);
			}
		}
	}
	// Dataset의 Row 삭제 시 해당 RowPosition을 위해 뒤에서 부터 삭제
	for ( i=this.smfFindComponentInThisContext(strGrdDsNm).rowcount -1; i>=0; i--) {
		//trace(" *** " + eval(strGrdDsNm).getColumn(i, strChkColNm));
		if ( this.smfFindComponentInThisContext(strGrdDsNm).getColumn(i, strChkColNm)=="1")  eval(strGrdDsNm).deleteRow(i);
	}
};

/**
* Grid에서 선택한 Row를 제외한 Row들의 값을 원래의값으로 복구
* @param : dsObj	- Grid BindDataset Object
* @param column	- 체크컬럼명
* @return : N/A
* @example : smfDsSelUpdatedRow(ds_list, "chk_col")
*/
prForm.smfDsSelUpdatedRow = function(dsobj,strColNm) {
	var nRowCnt = dsobj.getRowCount();
	var nColCnt = dsobj.getColCount();
	for (var i=0;i<nRowCnt;i++) {
		var strChk = dsobj.getColumn(i,strColNm);
		for (var j=0;j<nColCnt;j++) {
			if (strChk != "1") {
				if (dsobj.getOrgColumn(i,j) != dsobj.getColumn(i,j)) {
					dsobj.setColumn(i,j,dsobj.getOrgColumn(i,j));
				}
			}
		}
	}
	//추가된 Row삭제처리
	for (var i=nRowCnt;i>=0;i--) {
		if (dsobj.getRowType(i) == 2) {
			dsobj.deleteRow(i);
		}
	}
};

/**
* Dataset의 변경(Update) 여부 확인
* @param : dsObj	- Dataset Object
* @return : true/false
* @example : smfIsUpdate(ds_list)
*/
prForm.smfIsUpdate = function(dsObj) {
	if (dsObj.getRowCount() < 1 ) return false;

	for (var i=0; i<dsObj.getRowCount(); i++) {
		//trace(i + " :: " + dsObj.getRowType());
		if (dsObj.getRowType(i) != 1) {
			return true;
			break;
		}
	}

	return false;
};

/**
* Grid에서 선택한 Row를 지정한 데이타셋으로 이동
* @param : obj	- Grid Object
* @param dsObj		- 복사할 대상 데이타셋 object
* @return : N/A
* @example : smfGridMultiSelectMoveRow(grd_leftList, dsRightList, "name")
*/
prForm.smfGridMultiSelectMoveRow = function(obj, dsObj, strColNm) {
	var nCrow 				= 0;
	var nCnt 				= 0;
	//Grid Binddataset
	var strGrdDsNm 			= obj.binddataset;
	var arrSelectedstartRow = obj.selectstartrow;
	var arrselectendrow 	= obj.selectendrow;

	nCnt = arrSelectedstartRow.length;
	if (nCnt > 1) {
		for (var i=0;i<nCnt;i++) {
			for (var j=parseInt(arrSelectedstartRow[i]);j<=parseInt(arrselectendrow[i]);j++) {
				nCrow = j;//parseInt(arrSelectedstartRow[i]);
				var strFindKey = this.smfFindComponentInThisContext(strGrdDsNm).getColumn(nCrow,strColNm);
				//데이타 중복이 아닌경우
				if (dsObj.findRow(strColNm, strFindKey) == -1) {
					//왼쪽 리스트에 선택한 값을 오른쪽 리스트로 이동
					var nRow = dsObj.addRow();
					dsObj.copyRow(nRow,this.smfFindComponentInThisContext(strGrdDsNm),nCrow);
				}
			}
		}
		//이동한 Row삭제
		var nTrow;
		for (var k=0;k<dsObj.getRowCount();k++) {
			nTrow = this.smfFindComponentInThisContext(strGrdDsNm).findRow(strColNm, dsObj.getColumn(k,strColNm));
			this.smfFindComponentInThisContext(strGrdDsNm).deleteRow(nTrow);
		}
	} else {
		if (arrSelectedstartRow < 0) return;

		for (var i=arrSelectedstartRow;i<=arrselectendrow;i++) {
			var strFindKey = this.smfFindComponentInThisContext(strGrdDsNm).getColumn(i,strColNm);
			//데이타 중복이 아닌경우
			if (dsObj.findRow(strColNm, strFindKey) == -1) {
				//왼쪽 리스트에 선택한 값을 오른쪽 리스트로 이동
				var nRow = dsObj.addRow();
				dsObj.copyRow(nRow, this.smfFindComponentInThisContext(strGrdDsNm),i);
			}
		}
		//이동한 Row삭제
		var nTrow;
		for (var k=0;k<dsObj.getRowCount();k++) {
			nTrow = this.smfFindComponentInThisContext(strGrdDsNm).findRow(strColNm, dsObj.getColumn(k,strColNm));
			this.smfFindComponentInThisContext(strGrdDsNm).deleteRow(nTrow);
		}

	}
	obj.set_selecttype("row");
	obj.set_selecttype("multirow");
	for(var i=0; i<this.smfFindComponentInThisContext(strGrdDsNm).getRowCount(); i++){
		/* [X-LOG] selectRow은 지원되지 않는 메서드입니다.*/ 
		this.smfFindComponentInThisContext(strGrdDsNm).selectRow(i, false);
	}
};


/**
* Object의 type을 문자열로 얻어온다.
* @param : oObj - type을 얻어올 Object
* @return : string
* @example : smfGetObjType(oObj)
*/
prForm.smfGetObjType = function(oObj)
{
	var sType;

	if( this.smfIsNull(oObj) )		return "";

	sType = oObj.toString().valueOf().substr(1,6);
	if( sType.toLowerCase() == "object" )
		return this.smfMid(oObj.toString().valueOf(), " ", "]");

	return "";
};

/**
* Check 대상 Value가 Null일 경우 지정된 값으로 대체
* @param : sVal	- Null Check 대상 Value
* @param sRepVal	- Null일 경우 대체 Value
* @return : N/A
* @example : smfNvl(sVal, sRepVal)
*/
prForm.smfNvl = function(sVal, sRepVal)
{
    if (this.smfIsNull(sVal)) return sRepVal;
    else return sVal;
};

/**
* (사용안함)
* 파일을 추가한다. 대화상자를 통해 파일을 선택하고
* 리스트를 표시한다.
* @param : dsObj	- 첨부파일 리스트 테이타셋
* @param sRepVal	- Null일 경우 대체 Value
* @return : N/A
* @example : smfFileAttach(dsObj, strAtchFileNm, strFileCoursNm)
*/
prForm.smfFileAttach = function(dsObj, strAtchFileNm, strFileCoursNm,nFileCnt) {
	//file 관련 Object 선언
	/* [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ this.vFile 		= new VirtualFile;
	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ this.FileDialog0 = new FileDialog;
	this.HttpObject0 = new HttpObject;
	/* [X-LOG] timeout은 지원되지 않는 속성입니다.*/ this.HttpObject0.timeout = 300;
	//HttpObject 이벤트 지정
	this.HttpObject0.setEventHandler('onstatus',this.smfHttpObject_onstatus, this);
	this.HttpObject0.setEventHandler('onload',this.smfHttpObject_onload, this);

	//fnAddcolumn();//체크 컬럼 추가
	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/
	var vFileList = this.FileDialog0.open("FileOpen", FileDialog.MULTILOAD, "%MYDOCUMENT%");

	if(!vFileList) {
		 return;			//선택된 file 없을경우 처리
	}

	//파일첨부 최대갯수 제한
	if (this.smfIsNull(nFileCnt)) { nFileCnt = 0; }
	if (nFileCnt > 0 && vFileList.length > nFileCnt) {
		this.alert_opacity("한번에 첨부할 수 있는 파일갯수는 ["+nFileCnt+"]개입니다.\n현재 첨부된 파일 "+vFileList.length+"개");
		return;
	}

	var nRow;

	for (var i=0;i<vFileList.length;i++) {
		nRow = dsObj.addRow();
		dsObj.setColumn(nRow,strAtchFileNm,vFileList[i].filename);
		dsObj.setColumn(nRow,strFileCoursNm,vFileList[i].path);

		//파일사이즈 구하기
		/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ 
		vFileList[i].open(VirtualFile.openRead);
		/* [X-LOG] getFileSize은 지원되지 않는 메서드입니다.*/var nFsize = vFileList[i].getFileSize();
		dsObj.setColumn(nRow,"atchFileMg",nFsize);	//파일 사이즈
		this.trace("file size : "+nFsize);

		//파일확장자
		var nPos = vFileList[i].filename.lastIndexOf(".");
		var strMg = vFileList[i].filename.substr(nPos+1);
		//trace(strMg);
		if (this.smfIsNull(strMg) == false) {
			dsObj.setColumn(nRow,"fileExtsnNm",strMg);	//파일 확장자
		}
	}
};

/**
* (사용안함)
* 파일을 서버에 업로드한다.(Sync방식)
* @param : dsObj	- 첨부파일 리스트 테이타셋
* @return : N/A
* @example : smfFileUpload(dsObj, strUrl, strAtchFileNm, strFileCoursNm)
*/
prForm.smfFileUpload = function(dsObj, strServerUrl, strAtchFileNm, strFileCoursNm) {

	if (dsObj.getRowCount() == 0) return true;
	var strUrl = strServerUrl + this.strFileDir;
	var strFilename = "";
	var bSuccess = "";
	var strFileUuid = "";
	var isSuccessedUploadFile = false;
	var nRow;
	var nTotCnt = dsObj.getRowCount();
	this.strAddFilenm = "";	//초기화
	var isCompleted;
	for (var i=0;i<nTotCnt;i++) {
		//addfiles 골라내기
		/* [X-LOG] 변수(isCompleted)가 있는지 확인이 필요합니다.*/ isCompleted = false;
		if (dsObj.getRowType(i) == 2) {

			strFilename =  dsObj.getColumn(i,strFileCoursNm) + dsObj.getColumn(i,strAtchFileNm);
			/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ 
			bSuccess = this.vFile.open(strFilename, VirtualFile.openRead | VirtualFile.openText );
			if (bSuccess) {
				//파일 업로드
				/* [X-LOG] upload은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ 
				isSuccessedUploadFile = this.HttpObject0.upload(strUrl, FileDialog.LOAD, this.vFile, false);

				// 업로드 리렉토리 + 파일 UUID(36자리) 형태로 메시지를 넘겨 받음
				// 뒤의 36자리를 잘라내어 UUID로 저장함
				strFileUuid = this.smfRight(this.strFileDir, 36);
				this.strFileDir = this.smfReplace(this.strFileDir, strFileUuid, "");

				// strAddfilenm에 UUID,파일이름,... 형태로 저장한 후 화면에서 hiddenUploadedFiles 값에 담아
				// 서비스에 전달함
				this.strAddFilenm += strFileUuid;
				this.strAddFilenm += ",";
				this.strAddFilenm += dsObj.getColumn(i,strAtchFileNm);
				if (i < (nTotCnt-1)) {
					this.strAddFilenm += ",";
				}
				strUrl = strServerUrl + this.strFileDir;
			}
		}

	}

	if( isSuccessedUploadFile != true || this.smvFileUploadReasonCode != "0"){
		return false;
	}

	return true;
};

/**
* (사용안함)
* 서버에서 선택한 파일을 다운로드 한다.
* @param : obj	- Grid Object
* @param e - event
* @param strServerUrl - 다운로드 url
* @param  strAtchFileNm - 첨부파일명 컬럼
* @return : N/A
* @example : smfFileDown(obj, e, strServerUrl, strAtchFileNm)
*/
prForm.smfFileDown = function(obj, e, strServerUrl, strAtchFileNm, subSysCd) {
	if (this.httpobject_isrunning) {
		this.alert_opacity("다운로드 진행중입니다!\n잠시 후 다시 시도해주세요.");
		return;
	}


	var dsObj = this.smfFindComponentInThisContext(obj.binddataset);
	var strFileId = dsObj.getColumn(dsObj.rowposition,"fileId");
	var strFileRefrnId = dsObj.getColumn(dsObj.rowposition,"fileRefrnId");

	var params = [];
	params["pv_filename"] = dsObj.getColumn(dsObj.rowposition,strAtchFileNm);
	params["pv_fileUrl"] = strServerUrl + "?fileRefrnId="+strFileRefrnId+"&fileId="+strFileId+"&subSysCd="+this.smfStr(subSysCd);

	return this.smfDialog("CPOP::cpop_fileDownload", "CPOP::cpop_fileDownload.xfdl", params);


	//file 관련 Object 선언
	/* [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ this.vFile 		= new VirtualFile;
	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ this.FileDialog0 = new FileDialog;
	this.HttpObject0 = new HttpObject;
	/* [X-LOG] timeout은 지원되지 않는 속성입니다.*/ this.HttpObject0.timeout = 300;
	//HttpObject 이벤트 지정
	this.HttpObject0.setEventHandler('onstatus',this.smfHttpObject_onstatus, this);
	this.HttpObject0.setEventHandler('onload',this.smfHttpObject_onload, this);

	var dsObj = obj.binddataset;
	var strDownFilenm = this.smfFindComponentInThisContext(dsObj).getColumn(e.row,strAtchFileNm);
	var strFileId = this.smfFindComponentInThisContext(dsObj).getColumn(e.row,"fileId");
	var strFileRefrnId = this.smfFindComponentInThisContext(dsObj).getColumn(e.row,"fileRefrnId");
	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/
	var vFile_down = this.FileDialog0.open("file download",FileDialog.SAVE,"%MYDOCUMENT%",strDownFilenm);

	subSysCd = this.smfStr(subSysCd);
	var strUrl = strServerUrl + "?fileRefrnId="+strFileRefrnId+"&fileId="+strFileId+"&subSysCd="+subSysCd;
	if (vFile_down)
	{
		this.httpobject_isrunning = true;
		/* [X-LOG] download은 지원되지 않는 메서드입니다.*/
		var rtn = this.HttpObject0.download(strUrl , vFile_down, true);
	}

	vFile_down.close();
};

/**
* (사용안함)
* 웹서버의 파일을 다운로드 한다.
* @param strServerUrl - 다운로드 url
* @param  strAtchFileNm - 첨부파일명 컬럼
* @return : N/A
* @example : smfFileDown(strServerUrl, strAtchFileNm)
*/
prForm.smfWebFileDown = function(strServerUrl, strAtchFileNm) {
	if (this.httpobject_isrunning) {
		this.alert_opacity("다운로드 진행중입니다!\n잠시 후 다시 시도해주세요.");
		return;
	}
	//file 관련 Object 선언
	/* [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ this.vFile 		= new VirtualFile;
	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ this.FileDialog0 = new FileDialog;
	this.HttpObject0 = new HttpObject;
	/* [X-LOG] timeout은 지원되지 않는 속성입니다.*/ this.HttpObject0.timeout = 300;
	//HttpObject 이벤트 지정
	this.HttpObject0.setEventHandler('onstatus',this.smfHttpObject_onstatus, this);
	this.HttpObject0.setEventHandler('onload',this.smfHttpObject_onload, this);

	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/
	var vFile_down = this.FileDialog0.open("file download",FileDialog.SAVE,"%MYDOCUMENT%",strAtchFileNm);

	var strUrl = strServerUrl;
	if (vFile_down)
	{
		this.httpobject_isrunning = true;
		/* [X-LOG] download은 지원되지 않는 메서드입니다.*/
		var rtn = this.HttpObject0.download(strUrl , vFile_down, true);
	}

	vFile_down.close();
};


/**
* (사용안함)
* 파일을 삭제한다.
* @param : dsObj	- 첨부파일 리스트 테이타셋
* @param chkColnm - 체크컬럼명
* @param dsDelObj - 삭제된 파일용 데이타셋
* @return : N/A
* @example : smfFileDel(dsObj, chkColnm, dsDelObj)
*/
prForm.smfFileDel = function(dsObj, chkColnm, dsDelObj) {
	//체크되어있는 데이타만 처리
	//dsDelObj.clearData();
	var nRow;
	for (var i=dsObj.getRowCount();i>=0;i--) {
		if (dsObj.getColumn(i,chkColnm) == "1") {
			nRow = dsDelObj.addRow();
			dsDelObj.copyRow(nRow,dsObj,i);
			dsObj.deleteRow(i);
		}
	}

	//trace(dsDelObj.saveXML());
};


/**
* (사용안함)
* HTTPOBJECT 파일업로드/다운로드 완료 이벤트
* @param : obj	- httpObject
* @param e - event
* @return : N/A
* @example :
*/
prForm.smfHttpObject_onload = function(obj, e)
{
	this.trace("return code: "+e.errorcode+"    return folder::"+e.errormsg);
	this.smvFileUploadReasonCode = e.errorcode;
	this.smvFileUploadReasonMessage = e.errormsg;
	this.httpobject_isrunning = false;
	if (e.errorcode == 0) {
		if (e.errormsg != "Success") {
			this.strFileDir = e.errormsg;
		}

		return;
	}

	if(e.errorcode == -100){
		//바이러스
		this.alert_opacity(e.errormsg);
	}else if(e.errorcode == -200){
		//경로에 들어갈수 없는 문자열포함
		//바이러스
		this.alert_opacity(e.errormsg);
	}else{//알수 없는 에러
		this.alert_opacity("첨부파일을 업로드하는데 오류가 발생했습니다\n" + this.smvFileUploadReasonMessage);
	}

	//에러가 발생했으니 중단시킨다.
	throw e.errormsg;
};

/**
* (사용안함)
* gds_userinfo(사용자 정보)의 정보 처리
* @param : strKey	- User 정보 항목(string)
* @return : string(Value)
* @example :
*/
prForm.smfGetSession = function(strKey)
{
	alert('사용안함 this.smfGetSession' + smfPrintStackTrace());
	
	var bInvalidKey = false;
	var sInvalidKeyId = "";
	var sValidKeyId = "";
	//임시 작업
	if(strKey == "userid"){
		bInvalidKey = true;
		sInvalidKeyId = strKey;
		sValidKeyId = "usrid";
		strKey = "usrid";
	}else if(strKey == "userName"){
		bInvalidKey = true;
		sInvalidKeyId = strKey;
		sValidKeyId = "userNm";
		strKey = "userNm";
	}


	if(bInvalidKey && (this.smfIsLocalMode() || this.smfIsDevMode())){
// 		var sMessage = format("세션값 {0}는 폐기됐습니다. 2010년 12월31일까지 smfGetSession('{1}')로 변경하세요.\n"
// 		                     +"이 메시지는 검수서버에서는 나타나지 않습니다.", [sInvalidKeyId, sValidKeyId]);
// 		alert_opacity(sMessage);
	}

	// 기존 소스 로직을 최대한 유지 하기 위해서 "key" column을 먼저 체크함
	// 2011.12.08. 이상준 수정
	// 2011.12.14. 주정호 수정 - 변경 소스로인하여 업무에 문제가 발생하여 원본소스로 원복함.

/* 2011.12.08. 이상준 수정
	if (gds_userinfo.getColumnInfo("key") == null) {
		if(gds_userinfo.getColumnInfo(strKey) == null || gds_userinfo.getColumn(0, strKey) == "undefined"){
			return false;
		}else{
			return gds_userinfo.getColumn(0, strKey);
		}
	}
	else {
		var findRow = gds_userinfo.findRow( "key", strKey );
		if (findRow == -1) {
			if(gds_userinfo.getColumnInfo(strKey) == null || gds_userinfo.getColumn(0, strKey) == "undefined"){
				return false;
			}else{
				return gds_userinfo.getColumn(0, strKey);
			}
		} else {
			return gds_userinfo.getColumn(findRow, "value");
		}
	} 
*/

	// [2014년도나이스웹접근성확대·적용사업단] 웹접근성 적용 (이영우C, 2014.12.15)
	//gds_userinfo에 key라는 column이 없어서 Warning이 계속 발생함
	var findRow = nexacro.getApplication().gds_userinfo.findRow( "key", strKey );
	if (findRow == -1) { 
		if(nexacro.getApplication().gds_userinfo.getColumn(0, strKey) == "undefined"){
			return false;
		}else{
			return nexacro.getApplication().gds_userinfo.getColumn(0, strKey);
		}
	} else {
		return nexacro.getApplication().gds_userinfo.getColumn(findRow, "value");
	}
};

/**
 * default_typedef.xml에 정의된 service url정보를 가져온다.
 * @param  argPrefix as String
 * @return String
 * @see
 */
prForm.smfGetSvcUrl = function(argPrefix)
{
    var arrServices = nexacro.getEnvironment().services;
    var bFindRtn = false;
    for (var i = 0; i < arrServices.length; i++) {
        if (arrServices[i].prefixid == argPrefix) {
            bFindRtn = true;
            break;
        }
    }
    if (bFindRtn) {
        return arrServices[i].url;
    } else {
        return undefined;
    }
};

/**
 * Global에 정의된 Cache항목의 Key 값 설정
 * @param  strBiz : 단위업무 코드
 * @param  strKey : Cache 처리 시 Key
 * @param  strVal : Key에 대한 Value
 * @return N/A
 * @see
 */
prForm.smfSetCache = function(strBiz, strKey, strVal) {
	if (this.smfIsNull(strBiz)) return false;
	if (this.smfIsNull(strKey)) return false;
	//if (smfIsNull(strVal)) return false;

	var fStr = "bizid=='" + strBiz + "' && key=='" + strKey + "' && type=='C'";
	var findRow = nexacro.getApplication().gds_cache.findRowExpr(fStr);
	var iRowPos;
	if (findRow < 0) {
		iRowPos = nexacro.getApplication().gds_cache.addRow();
		nexacro.getApplication().gds_cache.setColumn(iRowPos, "bizid", strBiz);
		nexacro.getApplication().gds_cache.setColumn(iRowPos, "key", strKey);
		nexacro.getApplication().gds_cache.setColumn(iRowPos, "value", strVal);
		nexacro.getApplication().gds_cache.setColumn(iRowPos, "type", "C");
	} else {
		nexacro.getApplication().gds_cache.setColumn(findRow, "value", strVal);
	}
};

/**
 * Global에 정의된 Cache 항목의 Key을 가져옴
 * @param  strBiz : 단위업무 코드
 * @param  strKey : Cache 처리 시 Key
 * @return N/A
 * @see
 */
prForm.smfGetCache = function(strBiz, strKey) {
	if (this.smfIsNull(strBiz)) return false;
	if (this.smfIsNull(strKey)) return false;

	var fStr = "bizid=='" + strBiz + "' && key=='" + strKey + "' && type=='C'";
	var findRow = nexacro.getApplication().gds_cache.findRowExpr(fStr);

	if (findRow < 0) {
		return "";
	} else {
		return nexacro.getApplication().gds_cache.getColumn(findRow, "value");
	}
};

/**
 * Global에 정의된 Cache 항목의 Key을 가져오고 삭제함.
 * @param  strBiz : 단위업무 코드
 * @param  strKey : Cache 처리 시 Key
 * @return N/A
 * @see
 */
prForm.smfGetCacheAndRemove = function(strBiz, strKey) {
	var resultValue = this.smfGetCache(strBiz, strKey);

	var fStr = "bizid=='" + strBiz + "' && key=='" + strKey + "' && type=='C'";
	var nFindRow = nexacro.getApplication().gds_cache.findRowExpr(fStr);
	if(nFindRow != -1){
		nexacro.getApplication().gds_cache.deleteRow(nFindRow);
	}

	return resultValue;
};

/**
 * 업무단의 Session 항목 정의
 * @param  dsObj : 단위업무 Session Dataset(Object)
 * @param  strBiz : 단위업무 코드
 * @param  strKey : Dataset의 Code Column 명(string)
 * @param  strVal : Dataset의 value Column 명(string)
 * @return N/A
 * @see
 */
prForm.smfSetBizSession = function(dsObj, strBiz, strKey, strVal) {

	if (dsObj.getRowCount() < 1) return false;
	if (this.smfIsNull(strBiz)) return false;
	if (this.smfIsNull(strKey)) return false;
	if (this.smfIsNull(strVal)) return false;

	var iRow;

	for (var i=0; i<dsObj.getRowCount(); i++) {
		iRow = nexacro.getApplication().gds_cache.addRow();
		nexacro.getApplication().gds_cache.setColumn(iRow, "bizid", strBiz);
		nexacro.getApplication().gds_cache.setColumn(iRow, "key", dsObj.getColumn(i, strKey));
		nexacro.getApplication().gds_cache.setColumn(iRow, "value", dsObj.getColumn(i, strVal));
		nexacro.getApplication().gds_cache.setColumn(iRow, "type", "S");
	}

	return true;
};

/**
 * 업무단의 Session 항목 가져옴
 * @param  strBiz : 단위업무 코드
 * @param  strKey : Session Key
 * @return N/A
 * @see
 */
prForm.smfGetBizSession = function(strBiz, strKey) {
	if (this.smfIsNull(strBiz)) return false;
	if (this.smfIsNull(strKey)) return false;

	var fStr = "bizid=='" + strBiz + "' && key=='" + strKey + "' && type=='S'";
	var findRow = nexacro.getApplication().gds_cache.findRowExpr(fStr);

	if (findRow < 0) {
		return false;
	} else {
		return nexacro.getApplication().gds_cache.getColumn(findRow, "value");
	}
};


/**
 * (사용안함)
 * FusionChart Object를 생성한다.
 * @param  chartNm		- Chart Object name
 * @return 없음
 * @example smfFusionChart(atx_chart1,cbo_type1.value,strXml)
 */
// prForm.smfFusionChart = function(objChart,nLeft,nTop,nRight,nBottom) {
// 	alert('사용안함 smfFusionChart');
// 	var _objAry = objChart.split(".");
// 	if(_objAry.length > 1){
// 		/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/var _prefixObj = eval(objChart.substr(0,objChart.length - (_objAry[_objAry.length-1].length + 1)));
// 
// 		if (!_prefixObj.isValidObject(_objAry[_objAry.length-1])) {
// 			this.alert_opacity("FusionChart object가 존재하지 않습니다.");
// 			return;
// 		}
// 	}else{
// 
// 		if (!this.isValidObject(objChart)) {
// 			this.alert_opacity("FusionChart object가 존재하지 않습니다.");
// 			return;
// 		}
// 	}
// 	/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다. [X-LOG] progid은 지원되지 않는 속성입니다.*/ eval(objChart).progid 		= "{D27CDB6E-AE6D-11CF-96B8-444553540000}";
// 	/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ eval(objChart).set_codebase("http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab");
// 	/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ eval(objChart).init(objChart);//,nLeft,nTop,nRight,nBottom
// 	/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ eval(objChart).show();
// };

/**
 * Form ID를 넘기면 MenuId를 return..
 * @param  strFormID
 * @return MenuId
 * @example smfMainFormIdOpen(this.name, "key1=abcd,key2=1234")
 */
prForm.smfMainFormIdOpen = function(strFromId,strArg) {
	var sMenuId=nexacro.getApplication().gds_menuinfo.lookup("pgeid",strFromId,"menuId");
	if(this.smfIsNull(sMenuId)){
		this.alert_opacity("메뉴아이디가 존재하지않습니다.");
		return;
	}else{
		this.sysf_chkOpenMenu(sMenuId, strArg, true);
	}
};

/**
 * 메인화면에서 다른 메인화면을 호출한다.
 * @param  strMenuId		- MenuID값
 * @return 없음
 * @example smfMainFormOpen("NA10010", "key1=abcd,key2=1234")
 */
prForm.smfMainFormOpen = function(strMenuId, strArg) {
	this.sysf_chkOpenMenu(strMenuId, strArg, true);
};

/**
 * 메인화면을 닫는다.(화면에서 필요시 사용)
 * @param  obj		- 실행중인 화면Object
 *         obj		- 실행중인 화면menuid
 * @return 없음
 * @example smfMainFormClose(obj)
 * @example smfMainFormClose("NA10010")
 * @example smfMainFormClose("NA10010,NA10020")
 */
prForm.smfMainFormClose = function(obj) {
	var strMenuId;
	var sFrmID = obj.pv_winKey;
	if (nexacro.getApplication().gv_mdiFlag == false && sFrmID == undefined) {
		//quick view가 아니고 argument가 form object인 경우
		this.sysf_tabOnClose(sFrmID);
	} else {
		var arrStr = new Array();
		arrStr = obj.split(",");
		for (var i=0;i<arrStr.length;i++) {
			strMenuId = arrStr[i];
			//mdi form control key 찾기
			var winKey = nexacro.getApplication().gds_openwininfo.lookup("menuid", strMenuId,"winid");
			if (winKey == undefined) {
				this.trace("해당화면을 찾을 수 없습니다.");
				return;
			}
			//화면 닫기
			this.sysf_tabOnClose(winKey);
		}

	}
};

/**
 * 날짜,시간, 포멧을 넣으면 해당되는 포멧으로 반환한다(java의 SimpleDateFormat과 비슷함)
 * ex1) var date = '20100729090134';
 *     date.dateFormat("yyyy년MM월dd일 hh시mm분ss초"); => 2010년07월29일 09시01분34초
 * ex2) var date = '20100729';
 *     date.dateFormat("yyyy.MM.dd"); => 2010.07.29
 *
 * @param format 포멧( 'a' 옵션을 넣으면 오전,오후구분, 없으면 24시간표시)
 */
Number.prototype.dateFormat = function(format) {
	return this.toString().dateFormat(format);
};

/**
 * 날짜,시간, 포멧을 넣으면 해당되는 포멧으로 반환한다(java의 SimpleDateFormat과 비슷함)
 * ex1) var date = '20100729090134';
 *     date.dateFormat("yyyy년MM월dd일 hh시mm분ss초"); => 2010년07월29일 09시01분34초
 * ex2) var date = '20100729';
 *     date.dateFormat("yyyy.MM.dd"); => 2010.07.29
 *
 * @param format 포멧( 'a' 옵션을 넣으면 오전,오후구분, 없으면 24시간표시)
 */
String.prototype.dateFormat = function(format) {
    if(this == '' || this.length < 8) return 'Error String for format';
    if(format == null || format == undefined) return 'Error Date format';

    var date = this.length == 8 || this.length > 8 ? this.substring(0, 8) : '';

    var time = this.length == 14 ? this.substring(8, 14) : '';

    if(date != null || date != undefined){
        date = date.replace(/[\s\-\/]/g, "");

        if(date.length == 8) {
            format = format.replace(/yyyy/g, date.substring(0, 4));
            format = format.replace(/MM/g, date.substring(4, 6));
            format = format.replace(/dd/g, date.substring(6, 8));
        }else if(date.length == 6) {
            format = format.replace(/yyyy/g, date.substring(0, 2));
            format = format.replace(/MM/g, date.substring(2, 4));
            format = format.replace(/dd/g, date.substring(4, 6));
        }
    }

    if(time != null || time != undefined) {
        time = time.replace(/[\s\-\/]/g, "");

        if(time.length >= 4) {

            //만약 오전,오후 format check( 'a' 옵션)
            var hour = nexacro.toNumber(format.substring(0, 2));

            if(format.match(/a/g) != null) {
                if(hour > 12) {
                    format = format.replace(/a/g, "오후");
                    hour = hour - 12;
                } else {
                    format = format.replace(/a/g, "오전");
                }
                format = format.replace(/hh/g, hour+"");
            }else {
                format = format.replace(/hh/g, time.substring(0, 2));
            }
            format = format.replace(/mm/g, time.substring(2, 4));
        }

         if(time.length == 6) {
            format = format.replace(/ss/g, time.substring(4, 6));
        }
    }
    return format;
};

/**
 * 문자열이 지정된 길이가 되도록 왼쪽을 채우는 함수
 * ex1) var str = '1';
 *     str.lpad("0", 2); => 01
 * ex2) var str = '11';
 *     str.lpad("0", 2); => 11
 *
 * @param padValue 채울값
 * @param padLength 채울길이
 */
Number.prototype.lpad = function(padValue, padLength) {
	return this.toString().lpad(padValue, padLength);
};

/**
 * 문자열이 지정된 길이가 되도록 왼쪽을 채우는 함수
 * ex1) var str = '1';
 *     str.lpad("0", 2); => 01
 * ex2) var str = '11';
 *     str.lpad("0", 2); => 11
 *
 * @param padValue 채울값
 * @param padLength 채울길이
 */
String.prototype.lpad = function(padValue, padLength) {
	var retValue = "";

    if(this == '' || this == undefined) return 'Error String for lpad';
    if(padLength == null || padLength == undefined) return 'Error length lpad';

	retValue = this + "";

	for(var i=0 ; i < padLength ; i++ ){
		if(retValue.length < padLength){
			retValue = padValue + retValue;
		}
	}
	return retValue;
};

/**
 * form이 속해있는 시스템코드, 코드명을 구할때 사용한다.
 * @param  objNm : 파일명 또는 form ID
 * @param  gbn : 구분 ( NM / CD )
 * @return 시스템코드명 배열
 * @example smfSysGbnNm("mis_sdlca00_m00", "NM") -> 교무업무,중,학생생활,자격증및인증취득상황, mis_sdlca00_m00
 * @example smfSysGbnNm("mis_sdlca00_m00", "CD") -> SW,MIS,SDL,CA,mis_sdlca00_m00
 */
prForm.smfSysGbnNm = function(objNm,gbn) {
    var arrSysNm = new Array();
    if(gbn == "NM"){
        arrSysNm[0]  = nexacro.getApplication().gdsSubSys.lookup("cd",objNm.substr(0,3).toUpperCase(),"upNm");
        arrSysNm[1]  = nexacro.getApplication().gdsSubSys.lookup("cd",objNm.substr(0,3).toUpperCase(),"nm");
        nexacro.getApplication().gdsBigGbn.filter("upCd=='"+objNm.substr(0,3).toUpperCase()+"'");
        arrSysNm[2]  = nexacro.getApplication().gdsBigGbn.lookup("cd",objNm.substr(4,3).toUpperCase(),"nm");
        nexacro.getApplication().gdsMidGbn.filter("subCd=='"+objNm.substr(0,3).toUpperCase()+"' && upCd=='"+objNm.substr(4,3).toUpperCase()+"'" );
        arrSysNm[3]  = nexacro.getApplication().gdsMidGbn.lookup("cd",objNm.substr(7,2).toUpperCase(),"nm");
        arrSysNm[4]  = objNm;
    }else if(gbn == "CD"){
        arrSysNm[0]  = nexacro.getApplication().gdsSubSys.lookup("cd",objNm.substr(0,3).toUpperCase(),"upCd");
        arrSysNm[1]  = objNm.substr(0,3).toUpperCase();
        arrSysNm[2]  = objNm.substr(4,3).toUpperCase();
        arrSysNm[3]  = objNm.substr(7,2).toUpperCase();
        arrSysNm[4]  = objNm;
    }

    return arrSysNm;
};

/**
 * 첨부파일의 사이즈를 구한다.
 * @param  filenm : 파일경로
 * @param  strUnit : 구분(K,M,G,B)
 * @return 파일사이즈
 * @example smfGetFileSize("c:\Documents and Settings\neon\My Documents\1234.xls") -> Kbyte사이즈
 * @example smfGetFileSize("c:\Documents and Settings\neon\My Documents\1234.xls", "M") -> Mbyte사이즈
 */
prForm.smfGetFileSize = function(filenm, strUnit) {
	if (this.smfIsNull(strUnit)) {
		strUnit = "K";
	}

	//Object 선언
	/* [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ this.vFile 		= new VirtualFile;

	/* [X-LOG] 변수(bSuccess)가 있는지 확인이 필요합니다. [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ bSuccess = this.vFile.open(filenm, VirtualFile.openRead | VirtualFile.openText );
	/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다. [X-LOG] getFileSize은 지원되지 않는 메서드입니다.*/ nFileSize =  this.vFile.getFileSize();
	switch (strUnit) {
		case "B":	//byte
			/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다. [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize = nFileSize;
		break;
		case "K":	//Kilo byte
			/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다. [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize = Math.round(nFileSize / 1024,1);
		break;
		case "M":	//Mega byte
			/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize = Math.round((/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize / 1024)/1024,1);
		break;
		case "G":	//Giga byte
			/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize = Math.round(((/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize / 1024)/1024)/1024,1);
		break;
		default:	//Kilo byte
			/* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다. [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize = Math.round(nFileSize / 1024,1);
		break;
	}
	return /* [X-LOG] 변수(nFileSize)가 있는지 확인이 필요합니다.*/ nFileSize;
};

/**
 * 년월달력 팝업디비젼을 동적으로 생성한다.
 * @param  oobj: Calendar
 * @param  e: MouseEventInfo
 * @return 년월로 구성된 문자열
 * @example smfMakeCalMonthPopdiv -> 달력컴포넌트 이벤트에서 직접 호출
 */
prForm.smfMonthCalendar = function(obj, e) {
	if (e.fromreferenceobject != "[object ButtonControl]") return;

	var nLeft 			= system.clientToScreenX(obj,0);
	var nTop 			= system.clientToScreenY(obj,0) + (obj.getOffsetBottom() - obj.getOffsetTop());
	var objParentForm 	= this.getOwnerFrame();
	var sta_year;

	/////////////////////////////////////////////////
	var objL = obj.getOffsetLeft();
	var objT = obj.getOffsetBottom();

	//모니터 해상도
	var monitorX = system.getScreenWidth();
	var monitorY = system.getScreenHeight();
	/////////////////////////////////////////////////

	if(this["popdiv_calMonth"]){
		this.removeChild("popdiv_calMonth");
	}
	
	
	var nPopupWidth  = this.smfIsMobile()?500:173;
	var nPopupHeight = this.smfIsMobile()?510:184;
	
	// Create Object
	var objPopupDiv 	= new PopupDiv();
	objPopupDiv.init("popdiv_calMonth", 0, 0, nPopupWidth, nPopupHeight);

	// Add Object to Parent Form
	this.addChild("popdiv_calMonth", objPopupDiv);
	objPopupDiv.async = false;
	objPopupDiv.set_url("comm::comp_calMonth.xfdl");
	objPopupDiv.form.set_refComponent(obj);
	// Show Object
	objPopupDiv.show();

	if (!this.smfIsNull(obj.value)) {
		this.popdiv_calMonth.form.divMonth.form.staTitle.set_text(obj.getYear());
		// todo eval("popdiv_calMonth.img_month" + obj.getMonth()).set_image("theme://images\\cal_num" + obj.getMonth() + "R.png");
	} else {
		//현재일자 가져와서 세팅
		var strToday  = this.smfToday(); 
		this.popdiv_calMonth.form.divMonth.form.staTitle.set_text(strToday.substr(0,4)); 
		var nMonth = parseInt(strToday.substr(4,2));
		var strImgNm = "theme://images\\cal_num" + nMonth.toString() + "R.png";
	}

	//팝업위치 조정(모니터 우측으로 넘어가지 않도록 처리)
	if ((nLeft+objPopupDiv.getOffsetWidth()) > monitorX) {
		nLeft = monitorX - objPopupDiv.getOffsetWidth();
	}
	//팝업위치 조정(모니터 아래로 넘어가지 않도록 처리)
	if ((nTop+objPopupDiv.getOffsetHeight()) > monitorY) {
		nTop = nTop - objPopupDiv.getOffsetHeight() - (obj.getOffsetBottom()-obj.getOffsetTop());
	}
	var rtnvalue = this.popdiv_calMonth.trackPopupByComponent(obj, -1, obj.height-1, nPopupWidth, nPopupHeight);


// 	// Remove Object form Parent Form
// 		this.removeChild("popdiv_calMonth");
// 
// 		// Destroy Object
// 		objPopupDiv.destroy();
// 		objPopupDiv = null;
// 		//value binding
// 		if (!this.smfIsNull(rtnvalue)) {
// 			obj.set_value(rtnvalue);
// 		}
// 		//calendar popwindow hide
// 		//obj.dropdown();
};

/////////////////////////////////////////////////////////////////////////////////////////////
// Batch File Upload / Download
// 최원 선임님 요청
/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (사용안함)
 */
prForm.smfBatchFileUpload = function(dsObj, strAtchFileNm, strFileCoursNm){
	var strServerUrl = "http://" + nexacro.getApplication().gv_ServerUrl + "/alc_cor_fl01_004.xp?fileDir=";
	//var strServerUrl = "svc_neis::" + gv_ServerUrl + "/alc_cor_fl01_004.xp?fileDir=";
	return this.smfFileUpload(dsObj, strServerUrl, strAtchFileNm, strFileCoursNm);
};

/**
* CSV 파일업로드/다운로드 완료 이벤트
* @param : obj	- httpObject
* @param e - event
* @return : N/A
* @example :
*/
prForm.smfBatchFileDown_complete = function(obj, e)
{
	this.trace("return code: "+e.errorcode+"    return folder::"+e.errormsg);
};

/**
 * (사용안함)
 * 배치 실행 로그를 조회하는 기능
 * @param : jobId - batch Job ID
 * @param : uuidParam - 배치 실행시 발생시키는 uuid
 * @return : dsBatchResult - 배치 실행정보를 담고 있는 Dataset
 * @example : smfSrchBatchResiult("exampleFiletoFileBatch",
 */
prForm.smfSrchBatchResult = function(stringVal, jobName, callback){
	var dsInBatchMonitoring = "";
	var dsOutBatchMonitoring = "";

    //조회용 Dataset 생성
    if (this.sysf_isNull(this.objects["_dsInBatchMonitoring"])) {
		dsInBatchMonitoring = new Dataset;
		dsInBatchMonitoring.set_name("_dsInBatchMonitoring");
		this.addChild(dsInBatchMonitoring.name, dsInBatchMonitoring);
		dsInBatchMonitoring.addColumn("stringVal", "STRING", 255);
		dsInBatchMonitoring.addColumn("jobName", "STRING", 255);

    } else {
		dsInBatchMonitoring = this.objects["_dsInBatchMonitoring"];
		dsInBatchMonitoring.clearData();
    }

	dsInBatchMonitoring.addRow();
	dsInBatchMonitoring.setColumn(0, 0, stringVal);
	dsInBatchMonitoring.setColumn(0, 1, jobName);

	//trace("stringVal = " + stringVal + " jobName = " + jobName);
	//trace(dsInBatchMonitoring.getRowCount());
	//조회용 Dataset 생성 종료

	//배치 실행 상태 검색 결과 Dataset 생성 시작
    if (this.sysf_isNull(this.objects["_dsOutBatchMonitoring"])) {
		dsOutBatchMonitoring = new Dataset;
		dsOutBatchMonitoring.set_name("_dsOutBatchMonitoring");
		this.addChild(dsOutBatchMonitoring.name, dsOutBatchMonitoring);
		dsOutBatchMonitoring.addColumn("jobInstanceId", "BIGDECIMAL", 19);
		dsOutBatchMonitoring.addColumn("jobExecutionId", "BIGDECIMAL", 19);
		dsOutBatchMonitoring.addColumn("version", "BIGDECIMAL", 19);
		dsOutBatchMonitoring.addColumn("createTime", "STRING", 26);
		dsOutBatchMonitoring.addColumn("startTime", "STRING", 26);
		dsOutBatchMonitoring.addColumn("endTime", "STRING", 26);
		dsOutBatchMonitoring.addColumn("status", "STRING", 10);
		dsOutBatchMonitoring.addColumn("exitCode", "STRING", 100);
		dsOutBatchMonitoring.addColumn("exitMessage", "STRING", 6000);
		dsOutBatchMonitoring.addColumn("lastUpdated", "STRING", 26);
    } else {
		dsOutBatchMonitoring = this.objects["_dsOutBatchMonitoring"];
		dsOutBatchMonitoring.clearData();
    }

	var gv_url = this.svcfGetServerUrl();

	var asynctp = false;
	var stri = "srchBatchResult";
	var url = nexacro.getApplication().gv_dataprefix+this.svcfGetServerUrl()+"/srch_batch_result.xp";
	var cond = "dsBatchMonitoringSVO=_dsInBatchMonitoring";
	var rslt = "_dsOutBatchMonitoring=dsBatchMonitoringSVO_batchStatus";
	var target = "svcId='edusys.sc.alc.bat.mo.svc.BatchMonitoringSVC' voId='edusys.sc.alc.bat.mo.svc.BatchMonitoringSVO' method='selectBatchStatus'";
	this.transaction(stri,
                url,
	            cond,
				rslt,
				target,
				callback, asynctp, nexacro.getApplication().gv_bintp);

};

/**
 * (사용안함)
 * 배치 어플리케이션을 으로 생성된 CSV 파일을 다운로드 한다.
 * @param  fileId : 배치로 생성된 파일의 정보가 저장되어 있는 임시 테이블의 PK
 * @param  ext : 다운받을 파일의 기본 확장자, 입력되지 않을경우 .csv 로 저장한다.
 * @param  defLoc : 파일 Dialog가 실행되는 기본 위치
 * @param  defFileName : 파일 Dialog가 실행될때 저장파일명의 default로 뜰 이름
 * @return true/false(파일 다운 성공여부, 다이얼로그를 닫으면 false를 리턴)
 * @example smfBatchDownload('down', 'CSV|*.csv|', 'c:\\', 'downFile.csv')
 */
// prForm.smfBatchFileDownload = function(fileId, ext, defLoc, defFileName) {
// 	//파라미터 null 체크
// 	if(this.smfIsNull(fileId)){
// 		this.alert_opacity("fileId가 null 입니다.");
// 		return;
// 	}
// 	//업무에서 기본 디렉토리를 넣지 않은 경우 내문서 폴더를 기본으로 연다.
// 	if(this.smfIsNull(defLoc)){
// 		defLoc = "%MYDOCUMENT%";
// 	}
// 
// 	//fileDialog에서 사용될 확장자가 입력되었는지 확인
// 	if(this.smfIsNull(ext)){
// 		ext = "CSV|*.csv|";
// 	}
// 
// 	//fileDialog에서 사용될 defFileName이 입력되었는지 확인
// 	if(this.smfIsNull(defFileName)){
// 		defFileName = "";
// 	}
// 
// 	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ this.FileDialog0 = new FileDialog();
// 	/* [X-LOG] filter은 지원되지 않는 속성입니다.*/ this.FileDialog0.set_filter(ext); //확장자 설정
// 	//var _vFile = FileDialog0.open("배치용 파일 다운로드", FileDialog.SAVE, defLoc, "");
// 	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var _vFile = this.FileDialog0.open("배치용 파일 다운로드", FileDialog.SAVE, defLoc, defFileName);
// 
// 	var _rtn = false;
// 
// 	if(_vFile != null){ //Dialog에서 파일을 선택한 경우에만 다음 로직을 실행
// 		this.HttpObject0 = new HttpObject();
// 		this.HttpObject0.setEventHandler('onload',this.smfBatchFileDown_complete, this);
// 		//_rtn = HttpObject0.download("svc_neis::" + gv_ServerUrl + "/alc_cor_fl01_003.xp?fileId="+ fileId, _vFile, true);
// 		/* [X-LOG] download은 지원되지 않는 메서드입니다.*/ _rtn = this.HttpObject0.download("http://" + nexacro.getApplication().gv_ServerUrl + "/alc_cor_fl01_003.xp?fileId="+ fileId, _vFile, true);
// 
// 		 _vFile.close();
// 	 }
// 	 return _rtn;
// };

/**
 * (사용안함)
* 파일을 추가한다. 대화상자를 통해 파일을 선택하고
* 리스트를 표시한다.
* @param : dsObj	- 첨부파일 리스트 테이타셋
* @param sRepVal	- Null일 경우 대체 Value
* @return : N/A
* @example : smfBatchFileAttach(dsObj, strAtchFileNm, strFileCoursNm)
*/
prForm.smfBatchFileAttach = function(dsObj, strAtchFileNm, strFileCoursNm, ext) {
	//file 관련 Object 선언
	/* [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ this.vFile 		= new VirtualFile;
	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ this.FileDialog0 = new FileDialog;
	this.HttpObject0 = new HttpObject;
	/* [X-LOG] timeout은 지원되지 않는 속성입니다.*/ this.HttpObject0.timeout = 300;
	//HttpObject 이벤트 지정
	this.HttpObject0.setEventHandler('onstatus',this.smfHttpObject_onstatus, this);
	this.HttpObject0.setEventHandler('onload',this.smfHttpObject_onload, this);

	//fileDialog에서 사용될 확장자가 입력되었는지 확인
	if(this.smfIsNull(ext)){
		ext = "CSV|*.csv|";
	}

	//fnAddcolumn();//체크 컬럼 추가
	/* [X-LOG] filter은 지원되지 않는 속성입니다.*/ this.FileDialog0.set_filter(ext); //확장자 설정
	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var vFileList = this.FileDialog0.open("FileOpen", FileDialog.LOAD, "%MYDOCUMENT%");

	if(!vFileList) {
		 return;			//선택된 file 없을경우 처리
	}

	//기존에 들어가 있는 파일 정보를 Clear 처리
	dsObj.clearData();

	var nRow;
	nRow = dsObj.addRow();
	dsObj.setColumn(nRow,strAtchFileNm,vFileList.filename);
	dsObj.setColumn(nRow,strFileCoursNm,vFileList.path);
	return true;
};

/**
 * (사용안함)
 * 파일을 서버에 업로드한다.(Sync방식) - 배치에서 사용
 * @param : dsObj	- 첨부파일 리스트 테이타셋
 * @return : N/A
 * @example : smfFileUploadBatch(dsObj, strAtchFileNm, strFileCoursNm)
 */
prForm.smfFileUploadBatch = function(dsObj,  strAtchFileNm, strFileCoursNm) {
	var strServerUrl = "http://" + nexacro.getApplication().gv_ServerUrl + "/alc_cor_fl01_004.xp?fileDir=";
	if (dsObj.getRowCount() == 0) return true;
	var strUrl = strServerUrl + this.strFileDir;
	var strFilename = "";
	var bSuccess = "";
	var rtn;
	var nRow;
	var nTotCnt = dsObj.getRowCount();
	this.strAddFilenm = "";	//초기화
	for (var i=0;i<nTotCnt;i++) {

		strFilename =  dsObj.getColumn(i,strFileCoursNm) + dsObj.getColumn(i,strAtchFileNm);
		/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다. [X-LOG] VirtualFile 객체를 지원하지 않습니다.*/ bSuccess = this.vFile.open(strFilename, VirtualFile.openRead | VirtualFile.openText );
		this.strAddFilenm += dsObj.getColumn(i,strAtchFileNm);
		if (i < (nTotCnt-1)) {
			this.strAddFilenm += ",";
		}
		//파일 업로드
		/* [X-LOG] upload은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/ rtn = this.HttpObject0.upload(strUrl, FileDialog.LOAD, this.vFile, false);
		// 업로드 리렉토리 + 파일 UUID(36자리) 형태로 메시지를 넘겨 받음
		// 뒤의 36자리를 잘라내어 UUID로 저장함
		/* [X-LOG] 변수(strFileUuid)가 있는지 확인이 필요합니다.*/ strFileUuid = this.smfRight(this.strFileDir, 36);
		/* [X-LOG] 변수(strFileUuid)가 있는지 확인이 필요합니다.*/ this.strFileDir = this.smfReplace(this.strFileDir, strFileUuid, "");

		// strAddfilenm에 UUID,파일이름,... 형태로 저장한 후 화면에서 hiddenUploadedFiles 값에 담아
		// 서비스에 전달함
		/* [X-LOG] 변수(strFileUuid)가 있는지 확인이 필요합니다.*/ this.strAddFilenm += strFileUuid;
		this.strAddFilenm += ",";
		this.strAddFilenm += dsObj.getColumn(i,strAtchFileNm);
		if (i < (nTotCnt-1)) {
			this.strAddFilenm += ",";
		}
		strUrl = strServerUrl + this.strFileDir;

	}
	if (rtn == true) {
		return true;
	} else {
		return rtn;
	}

};

/**
* 사업자 등록번호를 체크하는 함수
* @param : strBizNo	- 사업자번호 (10자리)
* @return : true/false
* @example : smfIsBizno("1234567890");
*/
prForm.smfIsBizno = function(strBizNo){
	if (this.smfIsNull(strBizNo)) return false;

	var as_Biz_no = strBizNo;
	var isNum = true;
	var I_TEMP_SUM = 0 ;
	var I_TEMP = 0;
	var S_TEMP;
	var I_CHK_DIGIT = 0;

	as_Biz_no = nexacro.replaceAll(as_Biz_no,"-","");

	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(0,1),10) ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(1,2),10) * 3 ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(2,3),10) * 7 ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(3,4),10) ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(4,5),10) * 3 ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(5,6),10) * 7 ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(6,7),10) ;
	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(7,8),10) * 3 ;
	I_TEMP = parseInt(as_Biz_no.substring(8,9),10)*5,'00';
	if (I_TEMP < 10) {
		S_TEMP = '0' + String(I_TEMP);
	} else {
		S_TEMP = String(I_TEMP);
	}

	I_TEMP_SUM = I_TEMP_SUM + parseInt(S_TEMP.substring(0,1)) + parseInt(S_TEMP.substring(1,2)) ;
	I_CHK_DIGIT= (10-(I_TEMP_SUM%10))%10 ;
	if (as_Biz_no.substring(9,10) != String(I_CHK_DIGIT)) return false;
	return true ;
};

/**
 * (사용안함)
 * 처리하는 동안 대기메세지 처리하는 함수
 * @param : bFlag: Boolean, objForm: 해당 폼
 * @return : 없음
 * @example : smfWaitImage(true,this);
 */
prForm.smfWaitImage = function(bFlag, objForm, strMsg) {
	var MyFrame = this.getOwnerFrame();
	if (bFlag) {
		var nLeft = (MyFrame.getOffsetWidth() / 2) - 200;
		var nTop = (MyFrame.getOffsetHeight() / 2) - 45;
		var nRight = nLeft + 400;
		var nBottom = nTop + 90;
		var objDiv;
		try {
			MyFrame.form.div_waitImage.visible;
			this.trace("check");
			/* [X-LOG] 변수(div_waitImage)가 있는지 확인이 필요합니다.*/ objDiv = div_waitImage;
		} catch(e) {
			this.trace("not exist");
			objDiv = new Div("div_waitImage", nLeft, nTop, nRight, nBottom);
			MyFrame.form.addChild("div_waitImage", objDiv);
		}
// 		if (!isValidObject("div_waitImage")) {
// 			objDiv = new Div("div_waitImage", nLeft, nTop, nRight, nBottom);
// 			MyFrame.form.addChild("div_waitImage", objDiv);
// 		} else {
// 			objDiv = div_waitImage;
// 		}
		if (this.smfIsNull(strMsg)) {
			objDiv.set_text("처리중입니다. 잠시 기다려주세요");
		} else {
			objDiv.set_text(strMsg);
		}
			objDiv.set_cssclass("div_top_menuBG");
			objDiv.show();

		objDiv.set_visible(bFlag);
		MyFrame.form.setTimer(1001, 100);
	} else {
		MyFrame.form.div_waitImage.set_visible(bFlag);
		MyFrame.form.killTimer(1001);
	}
};


/**
* Grid Combo 선택 시 Dropdown을 호출
* @param : obj - Grid Component(필수)
* @param : e - Grid Click Event Info
* @param : bForce - Grid autoenter 가 none일때에도 강제로 적용할지 여부
* @return : 없음
* @example : smfGetSysTime();
*/
prForm.smfDropdownComboGridClick = function(obj, e, bForce)
{
	// 현재 선택된 Cell의 Edit Type을 얻어온다.
	var strEditType	= obj.getCurEditType();

	// 현재 선택된 Cell의 Edit 가 Combo 면...
	if (strEditType == "combo") {
		if ((obj.autoenter == "none" || this.smfIsNull(obj.autoenter)) && bForce == true) {
			obj.showEditor(true);
		}
		obj.dropdownCombo();
	}
};

/**
* 사용자의 브라우저명을 리턴한다
* @return : Stirng 사용자 브라우저
* @example : this.smfGetUserBrowserName();
*/
prForm.smfGetUserBrowserName = function(){
	return system.navigatorname;
}

/**
 * 사용 : sm_script.js - smfIsPortal() 
 * 상위 폼
 */
prForm.smfGetTopForm = function(){
	var formUrl = '';
	try{
		formUrl = nexacro.getApplication().gv_AppTopPath.form;
	}catch(e){
		formUrl = '';
	}
	return formUrl;
};

/**
* 사용자의 OS를 리턴한다
* @return : Stirng 사용자 OS
* @example : this.smfGetUserOs();
*/
prForm.smfGetUserOs = function(){
	return system.osversion;
};

/**
* 화면전환
* @param : menuUrl - page 경로
* @param : params - 새로열릴 페이지 parameter
* @param : bHideHeaderArea - divHeader영역을 숨길지 여부(true:비표시,false(default):표시)
* @param : {String} btnText - 메뉴Text
* @return : 없음
* @example : var menuUrl = "test::sample01.xfdl"; 
*			 var params = {};
*			 this.smfSetWorkPage(menuUrl, params);
*/
prForm.smfSetWorkPage = function(menuUrl, params, bHideHeaderArea, menuText, hisTime)
{
	if ( nexacro.getEnvironmentVariable("ev_quikView") == "Y" )
	{
		trace("★★★ 퀵뷰( quickView ) 모드 에서 참조 오류(frame::frameMain.xfdl fnSetWorkpage() ) 발생합니다. ");
		trace(" 만약 퀵뷰에서 실행 시, frameMain에서 제공하는 기능 미테스트로 상이한 결과가 나올수 있으니, ");		
		trace("Launch Project(ctrl + F5 ) 후 테스트 바랍니다. ★★★");
		return;
	}

	if (this.smfIsNull(menuUrl)) return;	
	if (menuUrl.indexOf(".xfdl") == -1) menuUrl = menuUrl + ".xfdl";

	this.getOwnerFrame().form.fnSetWorkpage(menuUrl, params, bHideHeaderArea, menuText, hisTime);
};










/**
* (사용안함)
* Excel File을 Dataset Import
* @param : objGrd	- Excel File의 표현할 Grid Object
* @return : N/A
* @example : 5-(objGrd,intUseColInfo, intExp,intDecimal,intStartRow,numcheck,skipcol)
*/
// prForm.smfImportExcel = function(objGrd,intUseColInfo, intExp,intDecimal,intStartRow,numcheck,skipcol) {
// 	this.smfCheckInstalledSpreadSheet();
// 
// 	if (this.smfIsNull(intUseColInfo)) intUseColInfo = 1;
// 	if (this.smfIsNull(intExp)) intExp = null;
// 	if (this.smfIsNull(intDecimal)) intDecimal = 0;
// 	if (this.smfIsNull(intStartRow)) intStartRow = 1;
// 	if (this.smfIsNull(numcheck)) numcheck = 0;
// 	if (this.smfIsNull(skipcol)) skipcol = null;
// 
// //	trace('import >>>>>>>>>>>>>>>>>>');
// 
// 	var strDs = objGrd.binddataset;
// 	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var fdlg  = new FileDialog;
// 	//trace("[ 폴더경로 ]" + system.convertRealPath("%MYDOCUMENT%"));
// 	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var vFile 			= fdlg.open("FileSave", FileDialog.LOAD);
// 	if (this.smfIsNull(vFile)) return false;
// 	if (vFile == -1) return false;
// 	//trace("path :: " + vFile.fullpath);
// 	/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extComapi 			= new ExtCommon();
// 	//excelImportByIndex(strExcelFilename, intSheetIndex, strTargetDatasetID, [intUseColInfo, intExp,intDecimal,intStartRow,numcheck,skiprow])
// 	/* [X-LOG] fullpath은 지원되지 않는 속성입니다.*/var strExcelFilename 	= vFile.fullpath;//system.convertRealPath("%MYDOCUMENT%")+"excel_import001.xls";
// 	var intSheetIndex 		= 0;
// 	var strTargetDatasetID 	= strDs;//"dsXls";
// 
// //	trace('import >>>>>>>>>>>>>>>>>>');
// 
// 	//trace(strExcelFilename);
// 	this.smfImgProc(true, "업로드처리중입니다. 잠시 기다려주세요!");
// // 	if (strExcelFilename.indexOf("csv")>0) {
// // 		trace("csv file일 경우");
// // 		extComapi.csv2Ds(strExcelFilename,strTargetDatasetID,true,"Column0,Column1,Column2,Column3,Column4,Column5");
// // 	} else {
// 
// 	var spreadSheetAppName = this.smfGetAppNameInstalledSpreadSheet();
// 	if(spreadSheetAppName == "excel"){
// 		/* [X-LOG] excelImportByIndex은 지원되지 않는 메서드입니다.*/ extComapi.excelImportByIndex(strExcelFilename, intSheetIndex, strTargetDatasetID,intUseColInfo, intExp,intDecimal,intStartRow,numcheck,skipcol);// , 1, 1, 1, 2, 1, 2
// 	}else if(spreadSheetAppName == "hancell"){
// 		/* [X-LOG] hancellImportByIndex은 지원되지 않는 메서드입니다.*/ extComapi.hancellImportByIndex(strExcelFilename, intSheetIndex, strTargetDatasetID,intUseColInfo, intExp,intDecimal,intStartRow,numcheck,skipcol);// , 1, 1, 1, 2, 1, 2
// 	}
// /*	}*/
// 	this.smfImgProc(false);
// 	return true;
// };
/**
* (사용안함)
* Grid의 내용을 Excel로 실행
* @param : objGrd	- Excel Export 대상 Grid Object
* @return : N/A
* @example : smfXlstoExe(objGrd)
*/
// prForm.smfExeXls = function(objGrd, bMode) {
// 	var spreadSheetAppName = this.smfGetAppNameInstalledSpreadSheet();
// 	var spreadSheetExportor = this.smfGetSpreadSheetExportor(spreadSheetAppName);
// 	spreadSheetExportor.grid = objGrd;
// 	spreadSheetExportor.sheetName = "Sheet0";
// 	spreadSheetExportor.set_filename("");
// 	spreadSheetExportor.export();
// };
// prForm.smfOnexport = function(obj,e) {
// 	//trace(e.recordindex);
// };
/**
* (사용안함)
* Grid의 내용을 Excel 파일로 저장
* @param : objGrd		- Excel Export 대상 Grid Object
* @param : strXlsNm		- 저장할 Excel 파일명
* @param : strSheetNm	- 저장할 Excel sheet명
* @param : strRunYn		- 저장후 실행할지 여부
* @return : N/A
* @example : smfExportExcel(grd_export,"sample_xls.xls","메뉴");
*/
// prForm.smfExportExcel = function(objGrd, strXlsNm, strSheetNm, strRunYn) {
// 	var objExport 				= new ExportObject();
// 	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var fdlg = new FileDialog;
// 	var strGbn = "";
// 	var multiSheet =false;//2016.11.08 JSF - 다중 Grid의 내용을 Excel 파일(다중Sheet)로 저장
// 	if (this.smfIsNull(strXlsNm)) {
// 		strXlsNm = "";
// 	}
// 
// 	//2016.11.08 JSF - 다중 Grid의 내용을 Excel 파일(다중Sheet)로 저장[[
// 	if((objGrd instanceof Array) || (strSheetNm instanceof Array) ){
// 		if(!(objGrd instanceof Array) || !(strSheetNm instanceof Array) ){
// 			this.smfDevException("파라메터objGrd와strSheetNm는 모두 Array이어야 합니다");
// 			return false;
// 		}
// 		if( objGrd.length != strSheetNm.length){
// 			this.smfDevException("파라메터objGrd와strSheetNm는 동일Sized의 Array이어야 합니다");
// 			return false;
// 		}
// 		if (strXlsNm.indexOf(".CSV") > 0 || strXlsNm.indexOf(".csv") > 0)
// 		{
// 			this.smfDevException("다중Sheet 는 xls파일만 가능합니다");
// 			return false;
// 		}
// 		var renderingCellPosition = "A0";
// 		multiSheet = true;
// 	}
// 	else
// 	//2016.11.08 JSF ]]
// 	{
// 		if (this.smfIsNull(strSheetNm)) {
// 			strSheetNm = "sheet1!A0";
// 		} else {
// 			strSheetNm += "!A0";
// 		}
// 		if(strSheetNm.indexOf("!") != -1){
// 			var renderingCellPosition = strSheetNm.substr(strSheetNm.indexOf("!"));
// 			strSheetNm = strSheetNm.substring(0, strSheetNm.indexOf("!"));
// 		}else{
// 			var renderingCellPosition = "A0";
// 		}
// 	}
// 	if (this.smfIsNull(strRunYn)) {
// 		strRunYn = "noactive";
// 	} else {
// 		strRunYn = "active";
// 	}
// 
// 	var spreadSheetAppName = this.smfGetAppNameInstalledSpreadSheet();
// 	var spreadSheetFileExt = this.smfGetSpreadSheetFileExt(spreadSheetAppName);
// 	/* [X-LOG] filter은 지원되지 않는 속성입니다.*/ fdlg.set_filter(this.smfFileDialogExtFilter(spreadSheetAppName));
// 
// 	if (strXlsNm.indexOf(".CSV") > 0 || strXlsNm.indexOf(".csv") > 0) {
// 		/* [X-LOG] filter은 지원되지 않는 속성입니다.*/ fdlg.set_filter("CSV (쉼표로 분리)(*.csv)|*.csv");
// 		strGbn = "csv";
// 	}
// 
// 	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var vFile = fdlg.open("FileSave", FileDialog.SAVE, "%MYDOCUMENT%", strXlsNm);
// 	if (this.smfIsNull(vFile)) return false;
// 	if (vFile == -1) return false;
// 
// 	/* [X-LOG] fullpath은 지원되지 않는 속성입니다.*/var strFullpath = vFile.fullpath;
// 
// 	if (strGbn == "csv") {
// 		strFullpath = "%MYDOCUMENT%" + vFile.filename.substring(0,vFile.filename.indexOf(".")) + ".xls";
// 		strFullpath = system.convertRealPath(strFullpath);
// 	}
// 
// // 	if(strFullpath.lastIndexOf(".") == -1){
// // 		strFullpath += ".xls";
// // 	}
// 	if(multiSheet != true)//2016.11.08 JSF - 다중 Grid의 내용을 Excel 파일(다중Sheet)로 저장
// 	{
// 		var cellCount = objGrd.getCellCount('Head');
// 		for(var i=0, n=cellCount ; i < cellCount ; i++){
// 			objGrd.setCellProperty('Head', i, 'background', '#efefef');
// 			objGrd.setCellProperty('Head', i, 'background2', '#efefef');
// 		}
// 	}
// 
//     var spreadSheetExportor = this.smfGetSpreadSheetExportor(spreadSheetAppName);
//     spreadSheetExportor.grid = objGrd;
//     spreadSheetExportor.sheetName = strSheetNm;
//     /* [X-LOG] fullpath은 지원되지 않는 속성입니다.*/ spreadSheetExportor.set_filename(vFile.fullpath);
//     spreadSheetExportor.renderingCellPosition = renderingCellPosition;
// 	if (strGbn == "csv") {
// 		spreadSheetExportor.exportAsCsv();
// 	}else{
// 		spreadSheetExportor.export();
// 	}
// 
// 	return true;
// 
// // 	if (strGbn == "csv") {
// // 		var extComapi = new ExtCommon();
// // 		if(spreadSheetAppName == "excel"){
// // 			var rtnVal = extComapi.excelSaveAs(strFullpath,vFile.fullpath,"csv");
// // 		}else if(spreadSheetAppName == "hancell"){
// // 			var	resultOfHancellGetSheetList = extComapi.hancellGetSheetList(strFullpath);
// // 			var rtnVal = extComapi.hancellSaveAs(strFullpath,vFile.fullpath,"csv");
// // 		}
// //
// // 		if (rtnVal == 0) {
// // 			var rtnSucc = VirtualFile.delete(strFullpath);
// // 			trace("삭제 여부:"+rtnSucc);
// // 		} else {
// // 			alert_opacity("CSV파일저장에 실패했습니다.\n다시 시도해 주세요.");
// // 			return false;
// // 		}
// // 	}
// //
// //     for(var i=0, n=cellCount ; i < cellCount ; i++){
// //         objGrd.setCellProperty('Head', i, 'background', '');
// //         objGrd.setCellProperty('Head', i, 'background2', '');
// //     }
// //
// // 	return true;
// };

/**
* (사용안함)
* 스프레드시트 export 객체를 생성한다
* @param : spreadSheetName - 스프레드시트 어플리케이션 명(excel/hancell/noInstallAnything)
* @return : exportor object
* @example : smfGetSpreadSheetExportor("excel");
*/
// prForm.smfGetSpreadSheetExportor = function(spreadSheetAppName){
// 	var form = this;
// 	var exportor = {
// 		//사용자 편집가능
//  		grid : null,
//  		sheetName : "Sheet1",
//  		renderingCellPosition : "A1",
//  		filename : "",
//  		exportsavemode : "save",
//  		exportactivemode : "active", //파일을 export후 파일을 열지 (active/noactive)
//  		exportopenmode : "overwrite",
// 
//  		//사용자 편집 불가
//  		spreadSheetAppName : spreadSheetAppName,
//  		isExportAsCsv : false,
//  		csvFilename : "",
//  		exportObject : null,
//  		checkCanExportCsv : function(){
// 			if(this.spreadSheetAppName == "noInstallAnything"){
// 				var filename = (this.filename + "").toUpperCase();
// 				var fileExt = filename.substr(filename.lastIndexOf("."));
// 				if(fileExt == ".CSV"){
// 					form.alert_opacity("엑셀이나 한셀이 설치되지 않은 경우 csv파일로 파일을 내려받을 수 없습니다");
// 					throw "엑셀이나 한셀이 설치되지 않은 경우 csv파일로 파일을 내려받을 수 없습니다";
// 					return false;
// 				}
// 			}
//  		},
//  		execute : null
// 	};
// 
// 	if(spreadSheetAppName == "excel"){
// 		exportor.spreadSheetAppName = spreadSheetAppName;
// 
// 		exportor.export = function(){
// 			this.checkCanExportCsv();
// 			this.exportObject = new ExportObject();
// 			/* [X-LOG] 변수(ExportTypes)가 있는지 확인이 필요합니다.*/ this.exportObject.set_exporttype(ExportTypes.EXCEL);
// 			if(this.isNotNil(this.filename)){
// 				this.exportObject.set_exportfilename(this.filename);
// 				this.exportObject.set_exportsavemode("save");
// 			}
// 
// 
// 			this.exportObject.set_exportfilename(this.filename);
// 			this.exportObject.set_exportactivemode(this.exportactivemode);
// 			this.exportObject.set_exporteventtype("itemrecord");
// 			this.exportObject.set_exportuitype("exportprogress");
// 			this.exportObject.set_exportmessageprocess("%d Record, %d Total");
// 			//2016.11.08 JSF [[
// 			if((this.grid instanceof Array) &&(this.sheetName instanceof Array)){//다중 Sheet
// 				this.exportObject.set_activepagename(this.sheetName[0]);
// 				for(var i=0,size=this.grid.length; i<size; i++){
// 					this.exportObject.addExportItem(ExportItemTypes.GRID, this.grid[i], this.sheetName[i]+ "!" + this.renderingCellPosition);
// 				}
// 			}
// 			else //단일 Sheet
// 			{
// 				this.exportObject.set_activepagename(this.sheetName);
// 				this.exportObject.addExportItem(ExportItemTypes.GRID, this.grid, this.sheetName+ "!" + this.renderingCellPosition);
// 			}
// 			//2016.11.08 JSF ]]
// 			this.exportObject.export();
// 		};
// 
// 		exportor.exportAsCsv = function(){
// 			this.isExportAsCsv = true;
// 
// 			this.set_exportsavemode("save");
// 			this.set_exportactivemode("noactive");
// 			this.csvFilename = this.filename;
// 			this.set_filename(this.filename.substring(0, this.filename.lastIndexOf(".")) + ".xls");
// 			this.export();
// 
// 			/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extComapi = new ExtCommon();
// 			/* [X-LOG] excelSaveAs은 지원되지 않는 메서드입니다.*/var rtnVal = extComapi.excelSaveAs(this.filename,this.csvFilename,"csv");
// 			if (rtnVal == 0) {
// 				/* [X-LOG] VirtualFile 객체를 지원하지 않습니다. [X-LOG] delete은 지원되지 않는 메서드입니다.*/var rtnSucc = VirtualFile.remove(this.filename);
// 				this.trace("삭제 여부:"+rtnSucc);
// 			} else {
// 				this.alert_opacity("CSV파일저장에 실패했습니다.\n다시 시도해 주세요.");
// 				return false;
// 			}
// 		};
// 	}else if(spreadSheetAppName == "hancell"){
// 		exportor.export = function(){
// 			this.checkCanExportCsv();
// 			/* [X-LOG] ExportObjectHancel 객체를 지원하지 않습니다.*/ this.exportObject = new ExportObjectHancel();
// 			/* [X-LOG] 변수(ExportTypesHancel)가 있는지 확인이 필요합니다. [X-LOG] 변수(HANCEL)가 있는지 확인이 필요합니다.*/ this.exportObject.set_exporttype(ExportTypesHancel.HANCEL);
// 
// 			if(this.isNil(this.filename)){
// 				/* [X-LOG] toFormatString은 지원되지 않는 메서드입니다.*/ this.set_filename(system.convertRealPath("%DOCUMENT%")+"export_" + (new Date()).toFormatString("%Y.%m.%d_%H.%M.%S") + ".cell");
// 				this.set_exportsavemode("save");
// 				this.set_exportactivemode("active");
// 				this.set_exportopenmode("overwrite");
// 			}
// 
// 			this.exportObject.set_exportfilename(this.filename);
// 			this.exportObject.set_exportsavemode(this.exportsavemode);
// 			this.exportObject.set_exportactivemode(this.exportactivemode);
// 			this.exportObject.set_exportopenmode(this.exportopenmode);
// 			this.exportObject.set_exporteventtype("itemrecord");
// 			this.exportObject.set_exportuitype("exportprogress");
// 			this.exportObject.set_exportmessageprocess("%d Record, %d Total");
// 			//2016.11.08 JSF [[
// 			if((this.grid instanceof Array) &&(this.sheetName instanceof Array)){//다중 Sheet
// 				this.exportObject.set_activepagename(this.sheetName[0]);
// 				for(var i=0,size=this.grid.length; i<size; i++){
// 					/* [X-LOG] 변수(ExportItemTypesHancel)가 있는지 확인이 필요합니다.*/ this.exportObject.addExportItem(ExportItemTypesHancel.GRID, this.grid[i], this.sheetName[i]+ "!" + this.renderingCellPosition);
// 				}
// 			}
// 			else //단일 Sheet
// 			{
// 				this.exportObject.set_activepagename(this.sheetName);
// 				/* [X-LOG] 변수(ExportItemTypesHancel)가 있는지 확인이 필요합니다.*/ this.exportObject.addExportItem(ExportItemTypesHancel.GRID, this.grid, this.sheetName + "!" + this.renderingCellPosition);
// 			}
// 			//2016.11.08 JSF ]]
// 			this.exportObject.export();
// 	 		/* [X-LOG] 변수(ExportItemTypesHancel)가 있는지 확인이 필요합니다.*/ this.exportObject.clearExportItems( ExportItemTypesHancel.GRID );
// 		}
// 
// 		exportor.exportAsCsv = function(){
// 			this.isExportAsCsv = true;
// 
// 			this.set_exportsavemode("save");
// 			this.set_exportactivemode("noactive");
// 			this.set_exportopenmode("overwrite");
// 			this.csvFilename = this.filename;
// 			this.set_filename(this.filename.substring(0, this.filename.lastIndexOf(".")) + ".cell");
// 			this.export();
// 
// 
// 			/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extComapi = new ExtCommon();
// 			/* [X-LOG] hancellGetSheetList은 지원되지 않는 메서드입니다.*/var	resultOfHancellGetSheetList = extComapi.hancellGetSheetList(this.filename);
// 			var rtnVal = extComapi.hancellSaveAs(this.filename,this.csvFilename,"csv");
// 			if (rtnVal == 0) {
// 				/* [X-LOG] VirtualFile 객체를 지원하지 않습니다. [X-LOG] delete은 지원되지 않는 메서드입니다.*/var rtnSucc = VirtualFile.remove(this.filename);
// 				this.trace("삭제 여부:"+rtnSucc);
// 			} else {
// 				this.alert_opacity("CSV파일저장에 실패했습니다.\n다시 시도해 주세요.");
// 				return false;
// 			}
// 		};
// 	}else if(spreadSheetAppName == "noInstallAnything"){
// 		exportor.export = function(){
// 			if(this.isNil(this.filename)){
// 				/* [X-LOG] toFormatString은 지원되지 않는 메서드입니다.*/ this.set_filename(system.convertRealPath("%DOCUMENT%")+"export_" + (new Date()).toFormatString("%Y.%m.%d_%H.%M.%S") + ".xls");
// 			}
// 
// 			/* [X-LOG] ExportObjectLibEx 객체를 지원하지 않습니다.*/ this.exportObject = new ExportObjectLibEx();
// 			/* [X-LOG] 변수(ExportTypesLibEx)가 있는지 확인이 필요합니다. [X-LOG] 변수(LIBXL)가 있는지 확인이 필요합니다.*/ this.exportObject.set_exporttype(ExportTypesLibEx.LIBXL);
// 			this.exportObject.set_exportuitype("exportprogress");
// 			/* [X-LOG] 변수(ExportItemTypesLibEx)가 있는지 확인이 필요합니다.*/ this.exportObject.clearExportItems(ExportItemTypesLibEx.GRID);
// 			var nRenderToRowByZeroBaseIndex = 0;
// 			var nRenderToColByZeroBaseIndex  = 0;
// 			this.exportObject.addExportItem(this.grid, this.sheetName, nRenderToRowByZeroBaseIndex, nRenderToColByZeroBaseIndex, false);
// 			this.exportObject.set_exportmessageprocess("%d 출력중.%d/%d");
// 			this.exportObject.export(this.filename,0,true,3);
// 
// 			if(this.exportactivemode != "noactive"){
// 				system.execShell(this.filename);
// 			}
// 		}
// 
// 		exportor.exportAsCsv = function(){
// 			this.checkCanExportCsv();
// 		};
// 	}
// 
// 	return exportor;
// };
/**
* (사용안함)
* 설치되어있는 스프레드시트 어플리케이션명을 얻는다.
* @return : excel/hancel
* @example : alert_opacity(smfGetAppNameInstalledSpreadSheet());
*/
// prForm.smfGetAppNameInstalledSpreadSheet = function(){
// 
// 	if(this.isNotNil(nexacro.getApplication().installedSpreadSheetAppName)) return nexacro.getApplication().installedSpreadSheetAppName;
// 
// 	nexacro.getApplication().installedSpreadSheetAppName = "noInstallAnything";
// 
// 	//로컬,개발,검수는 한셀이 우선순위
// 	if(this.smfIsLocalMode() || this.smfIsDevMode() || this.smfIsExamineMode()){
// 		try{
// 			//엑셀 없이 한셀이 설치 되어 있을 경우
// 			var hancellInstance = this.smfGetCommonActiveX().createObject("HCell.Application.1");
// 			/* [X-LOG] quit은 지원되지 않는 메서드입니다.*/ hancellInstance.quit();
// 			nexacro.getApplication().installedSpreadSheetAppName = "hancell";
// 			return "hancell";
// 		}catch(e){
// 			try{
// 				try{
// 					//엑셀설치되어 있을 경우
// 					/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extCommon = new ExtCommon();
// 					/* [X-LOG] regGetValue은 지원되지 않는 메서드입니다.*/var arrExcelVer = extCommon.regGetValue("HKEY_CLASSES_ROOT", "Excel.Application\\CurVer", "", "S").split(".");
// 					if(arrExcelVer.length != 0){
// 						nexacro.getApplication().installedSpreadSheetAppName = "excel";
// 						return "excel";
// 					}
// 				}catch(e){
// 					this.trace("엑셀버전확인하는데 오류>" + e);
// 				}
// 
// 				//엑셀설치되어 있을 경우//
// //				var excelInstance = smfGetCommonActiveX().createObject("Excel.Application");
// //				excelInstance.close;
// //				application.installedSpreadSheetAppName = "excel";
// 			}catch(/* [X-LOG] 변수(e1)가 있는지 확인이 필요합니다.*/ e1){
// 				return "noInstallAnything";
// 			}
// 		}
// 
// 		return nexacro.getApplication().installedSpreadSheetAppName;
// 	}
// 
// 
// 	//운영은 엑셀이 우선순위
// 	try{
// 		try{
// 			//엑셀설치되어 있을 경우
// 			/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extCommon = new ExtCommon();
// 			/* [X-LOG] regGetValue은 지원되지 않는 메서드입니다.*/var arrExcelVer = extCommon.regGetValue("HKEY_CLASSES_ROOT", "Excel.Application\\CurVer", "", "S").split(".");
// 			if(arrExcelVer.length != 0){
// 				nexacro.getApplication().installedSpreadSheetAppName = "excel";
// 				return "excel";
// 			}
// 		}catch(e){
// 			this.trace("엑셀버전확인하는데 오류>" + e);
// 		}
// 
// //		var excelInstance = smfGetCommonActiveX().createObject("Excel.Application");
// //		excelInstance.close;
// //		application.installedSpreadSheetAppName = "excel";
// 	}catch(e){
// 		try{
// 			//엑셀 없이 한셀이 설치 되어 있을 경우
// 			var hancellInstance = this.smfGetCommonActiveX().createObject("HCell.Application.1");
// 			/* [X-LOG] quit은 지원되지 않는 메서드입니다.*/ hancellInstance.quit();
// 			nexacro.getApplication().installedSpreadSheetAppName = "hancell";
// 			return "hancell";
// 		}catch(/* [X-LOG] 변수(e1)가 있는지 확인이 필요합니다.*/ e1){
// 			return "noInstallAnything";
// 		}
// 	}
// 
// 	try{
// 		//엑셀 없이 한셀이 설치 되어 있을 경우
// 		var hancellInstance = this.smfGetCommonActiveX().createObject("HCell.Application.1");
// 		/* [X-LOG] quit은 지원되지 않는 메서드입니다.*/ hancellInstance.quit();
// 		nexacro.getApplication().installedSpreadSheetAppName = "hancell";
// 	}catch(/* [X-LOG] 변수(e1)가 있는지 확인이 필요합니다.*/ e1){
// 		return "noInstallAnything";
// 	}
// 
// 	return nexacro.getApplication().installedSpreadSheetAppName;
// };
/**
* (사용안함)
* 스프레드시트의 확장자 얻는다.
* @return : xls/cell
*/
// prForm.smfGetSpreadSheetFileExt = function(spreadSheetAppName){
// 	if(spreadSheetAppName == "hancell"){
// 		return "cell";
// 	}else{
// 		return "xls";
// 	}
// };

/**
* (사용안함)
* 스프레드시트의 확장자 얻는다.
* @return : xls/cell
*/
// prForm.smfFileDialogExtFilter = function(spreadSheetAppName){
// 	if("hancell" == spreadSheetAppName){
// 		return "Worksheet Files (*.xls;*.xlsx;*.cell;)|*.xls;*.xlsx;*.cell;";
// 	}else if("noInstallAnything" == spreadSheetAppName){
// 		return "Worksheet Files (*.xls;)|*.xls;";
// 	}else{
// 		return "Worksheet Files (*.xls;*.xlsx)|*.xls;*.xlsx";
// 	}
// };
/**
* Grid Data를 Excel Export 처리
* @param : obj:Grid							- Object(Grid)
* @param : ExpObj:ExportObject	- Object(Export Object)
* @param : sSheetName						- Sheet 명(default:"Sheet1")
* @return : Child Frame Object
* @example : smfGridExportExcel(objGrd, expObj, sSheet);
*/
// prForm.smfGridExportExcel = function(obj, ExpObj, sSheetName)
// {
// 	if( this.smfIsNull(obj)	)	return false;
// 
// 	var spreadSheetAppName = this.smfGetAppNameInstalledSpreadSheet();
// 	var spreadSheetExportor = this.smfGetSpreadSheetExportor(spreadSheetAppName);
// 	spreadSheetExportor.grid = obj;
// 	spreadSheetExportor.sheetName = this.nvl(sSheetName, "Sheet1");
// 	spreadSheetExportor.set_filename("");
// 	spreadSheetExportor.export();
// 
// 	return true;
// };
/**
* (사용안함)
* Control에 들어가는 Text에 대해 Control의 width를 구하는 처리
* @param : obj				- text가 표시되는 해당 컴포넌트
* @param  sText			- 표시될 text
* @param  nFontSize	- 폰트 크기
* @return : Control의 width
* @example : var objControl.position.width = smfGetTextSize(objControl, sText, 9);
*/
// prForm.smfGetTextSize = function(obj, sText, nFontSize)
// {
// 	/* [X-LOG] canvas은 지원되지 않는 속성입니다. [X-LOG] getPainter은 지원되지 않는 메서드입니다.*/
// 	var objPainter = obj.canvas.getPainter();
// 	/* [X-LOG] Font 객체를 지원하지 않습니다.*/
// 	var objFont = new Font;
// 	objFont.size = nFontSize;
// 	/* [X-LOG] getTextSize은 지원되지 않는 메서드입니다.*/var objSize = objPainter.getTextSize(sText, objFont);
// 	return objSize.cx;
// };
/**
* (사용안함)
* TXT File을 Dataset Import하는 함수
* @param : objGrd		- Grid Object
* @param : seperator	- 구분자
* @param : strColInfo	- 컬럼정보(옵션)
* @param : headyn		- 첫번째 레코드가 헤드정보인지 여부(옵션)
* @return : true
* @example : smfImportTxt(objGrd,seperator,strColInfo,headyn)
*/
// prForm.smfImportTxt = function(objGrd,seperator,strColInfo,headyn) {
// 	if (this.smfIsNull(objGrd)) {
// 		this.alert_opacity("Import 대상 그리드를 지정하세요!");
// 		return;
// 	}
// 
// 	if (this.smfIsNull(seperator)) seperator = ",";
// 	if (this.smfIsNull(strColInfo)) strColInfo = null;
// 	if (this.smfIsNull(headyn)) headyn = "";
// 
// 	var strDs = objGrd.binddataset;
// 	/* [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var fdlg  = new FileDialog;
// 	/* [X-LOG] open은 지원되지 않는 메서드입니다. [X-LOG] FileDialog 객체를 지원하지 않습니다.*/var vFile 			= fdlg.open("FileSave", FileDialog.LOAD);
// 	if (this.smfIsNull(vFile)) return false;
// 	if (vFile == -1) return false;
// 	/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extComapi 			= new ExtCommon();
// 	/* [X-LOG] fullpath은 지원되지 않는 속성입니다.*/var strFilename 		= vFile.fullpath;
// 	var strTargetDatasetID 	= strDs;
// 	this.smfImgProc(true, "업로드처리중입니다. 잠시 기다려주세요!");
// 	/* [X-LOG] txt2Ds은 지원되지 않는 메서드입니다.*/ extComapi.txt2Ds(strFilename, strDs, headyn, seperator, strColInfo);
// 	this.smfImgProc(false);
// 	return true;
// };
/**
* (사용안함)
* Dataset을 RD 출력 CSV로 전환
* @param : argDs	- CSV 전환 Dataset Object
*						arg1	- Master, Detail간의 Key
* @return : String(RD용 CSV Format)
* @example : smfDstoCsv("dsMast,dsDtl1,dsDtl2", "EmployeeID:EmpID,OrderDate:ordDate");
*/
// prForm.smfDstoCsv = function(argDs, arg1) {
// 	var arrDs 		= argDs.split(",");
// 	var arrArg1;
// 
// 	if (this.smfIsNull(arg1)) {
// 		arrArg1 = "";
// 	} else {
// 		arrArg1 	= arg1.split(",");
// 	}
// 	var strDsCont 	= "";
// 
// 	if (arrArg1.length > 1) {
// 		var nRowCnt = this.smfFindComponentInThisContext(arrDs[0]).getRowCount();
// 		var nColCnt = this.smfFindComponentInThisContext(arrDs[0]).getColCount();
// 
// 		for (var j = 0;j<nRowCnt;j++) {
// 			for (var k = 0;k<nColCnt;k++) {
// 				strDsCont +=  this.smfFindComponentInThisContext(arrDs[0]).getColumn(j,k);
// 				strDsCont += "#$!";
// 			}
// 			strDsCont += "\r\n";
// 
// 			for (var i=1;i<arrDs.length;i++) {
// 				var arrArg2 	= arrArg1[i-1].split(":");
// 				var strFnm 		= this.smfFindComponentInThisContext(arrDs[0]).getColumn(j,arrArg2[0]);
// 				var nSubRowCnt 	= this.smfFindComponentInThisContext(arrDs[i]).getRowCount();
// 				var nSubColCnt 	= this.smfFindComponentInThisContext(arrDs[i]).getColCount();
// 
// 				for (var m=0;m<nSubRowCnt;m++) {
// 					//두번째 Detail Dataset 맨처음일 경우(EOR문자 삽입)
// 					if (i > 1 && m== 0) {
// 						strDsCont += "//EOR//";
// 						strDsCont += "\r\n";
// 					}
// 					if (strFnm == this.smfFindComponentInThisContext(arrDs[i]).getColumn(m,arrArg2[1])) {
// 						for (var n=0;n<nSubColCnt;n++) {
// 							strDsCont +=  this.smfFindComponentInThisContext(arrDs[i]).getColumn(m,n);
// 							strDsCont += "^";
// 							//행마다 개행문자 삽입
// 							if (n == (nSubColCnt-1)) {
// 								strDsCont += "\r\n";
// 							}//end if
// 						}//end for
// 					}//end if
// 				}//end for
// 			}//end for
// 
// 			strDsCont += "//EOR//";
// 			strDsCont += "\r\n";
// 		}
// 
// 	} else {
// 		for (var i=0;i<arrDs.length;i++) {
// 			var nRowCnt = this.smfFindComponentInThisContext(arrDs[i]).getRowCount();
// 			var nColCnt =  this.smfFindComponentInThisContext(arrDs[i]).getColCount();
// 
// 			for (var j = 0;j<nRowCnt;j++) {
// 				for (var k = 0;k<nColCnt;k++) {
// 					strDsCont +=  this.smfFindComponentInThisContext(arrDs[i]).getColumn(j,k);
// 					strDsCont += "#$!";
// 				}
// 				strDsCont += "\r\n";
// 			}
// 			//데이타셋이 여러개일경우 구분자추가
// 			if (arrDs.length > 1) {
// 				strDsCont += "//EOR//";
// 				strDsCont += "\r\n";
// 			}
// 		}
// 	}
// 	//trace(strDsCont);
// 	return strDsCont;
// };
/**
* (사용안함)
* Grid/Excel간 Copy & Paste
* @param : obj	- Grid Object
* @param e		- Event Info
* @return : N/A
* @example : smfGrdCopy_Paste(obj, e)
*/
// prForm.smfGrdCopy_paste = function(obj, e) {
// 
// 	if(e.ctrlkey){
// 		if(e.keycode == 67){
// 			//Grid Binddataset
// 			var strGrdDsNm = obj.binddataset;
// 			var v_clip = "";
// 			var strSeperate = "	";
// 			for (var i=obj.selectstartrow;i<=obj.selectendrow;i++) {
// 				for (var j=obj.selectstartcol;j<=obj.selectendcol;j++) {
// 					if (j < obj.selectendcol) {
// 						v_clip += obj.getCellValue(i,j) + strSeperate;
// 					} else {
// 						v_clip += obj.getCellValue(i,j);
// 					}
// 				}
// 				if (i < obj.selectendrow) {
// 					v_clip += "\r\n";
// 				}
// 			}
// 			v_clip += "\r\n";
// 			system.clearClipboard();
// 			system.setClipboard("CF_TEXT",v_clip);
// 		}else if(e.keycode == 86){
// 			var bAddrow = true;
// 			if (!this.smfIsNull(this.smfGrdCopy_paste.arguments[2])) {
// 				bAddrow = this.smfGrdCopy_paste.arguments[2];
// 			}
// 			//Grid Binddataset
// 			var strGrdDsNm = obj.binddataset;
// 			//cell count
// 			var nGrdCellCnt = obj.getCellCount("body");
// 			//cell position
// 			var nGrdCellPos = obj.getCellPos();
// 			//row position
// 			var nRowPos = this.smfFindComponentInThisContext(strGrdDsNm).rowposition;
// 			//arrText2 index
// 			var k = 0;
// 			//Dataset rowcount
// 			var nDsRowCnt = this.smfFindComponentInThisContext(strGrdDsNm).getRowCount();
// 
// 
// 			var t_clip = system.getClipboard("CF_UNICODETEXT");
// 			var strText = new String(t_clip);
// 			var arrText = new Array();
// 			var arrText2 = new Array();
// 			arrText = strText.split("\r\n");
// 			if (nDsRowCnt < (arrText.length + nRowPos -1)) {
// 				if (bAddrow) {
// 
// 				} else {
// 					return false;
// 				}
// 			}
// 			//복사한 Row만큼
// 			for (var i=0;i<arrText.length;i++) {
// 				if (this.smfIsNull(arrText[i])) {
// 					return;
// 				}
// 				arrText2 = arrText[i].split("	");
// 
// 				//기존 dataset갯수보다 많은 경우
// 				if ( nDsRowCnt <= nRowPos) {
// 					var nAddrow = this.smfFindComponentInThisContext(strGrdDsNm).addRow();
// 				}
// 
// 				var nLoopCnt = (nGrdCellPos + arrText2.length);
// 				if (nLoopCnt > nGrdCellCnt) {
// 					nLoopCnt = nGrdCellCnt;
// 				}
// 				//Dataset setcolumn
// 				for (var j=nGrdCellPos;j<nLoopCnt;j++) {
// 					obj.setCellPos(j);
// 					obj.showEditor(true);
// 					/* [X-LOG] setEditText은 지원되지 않는 메서드입니다.*/ obj.setEditText(arrText2[k]);
// 					k++;
// 					obj.showEditor(false);
// 				}
// 				nRowPos++;
// 				this.smfFindComponentInThisContext(strGrdDsNm).set_rowposition(nRowPos);
// 				k = 0;
// 			}
// 			return true;
// 		}
// 	}
// };







/**
* (사용안함)
* 스프레드시트 export 객체를 생성한다
* @param : spreadSheetName - 스프레드시트 어플리케이션 명(excel/hancell/noInstallAnything)
* @return : exportor object
* @example : smfGetSpreadSheetExportor("excel");
*/
// prForm.smfCheckInstalledSpreadSheet = function(){
// 	var spreadSheetAppName = this.smfGetAppNameInstalledSpreadSheet();
// 	if(spreadSheetAppName == "noInstallAnything"){
// 		this.alert_opacity("엑셀이나 한셀이 설치되지 않은 경우 엑셀파일 올리기 기능을 사용할 수 없습니다.");
// 		throw "엑셀이나 한셀이 설치되지 않은 경우 엑셀파일 올리기 기능을 사용할 수 없습니다.";
// 	}
// };

/**
 * (사용안함) 
 * alert 메시지 처리
 * @param : msg 메시지
 * @return : void
 * @example : this.alert_opacity("저장되었습니다");
 */
// prForm.alert_opacity = function(msg){
// 	this.alert(msg);
// };

// /**
//  * alert 메시지 처리
//  * @param : msg 메시지
//  * @return : void
//  * @example : this.alert("저장되었습니다");
//  */
// this.alert = function(msg){
// 	msg = this.smfStr(msg);
// 	this.smfChange_opacity(70);
// 	msg = nexacro.replaceAll(msg,"\\n", "\n");
// 	this.alert(msg);
// 	this.smfChange_opacity(100);
// };

/**
 * (사용안함)
 * @param : msg
 * @return : boolean
 * @example : this.confirm_opacity("저장하시겠습니까?");
 */
// prForm.confirm_opacity = function(msg){
// 	msg = this.smfStr(msg);
// 
// 	var ret;
// 	this.smfChange_opacity(70);
// 	msg = nexacro.replaceAll(msg,"\\n", "\n");
// 	ret =this.confirm(msg);
// 	this.smfChange_opacity(100);
// 	return ret;
// };

// /**
//  * @param : msg
//  * @return : boolean
//  * @example : this.confirm("저장하시겠습니까?");
//  */
// this.confirm = function(msg){
// 	msg = this.smfStr(msg);
// 
// 	var ret;
// 	this.smfChange_opacity(70);
// 	msg = nexacro.replaceAll(msg,"\\n", "\n");
// 	alert(confirm);
// 	ret = confirm(msg);
// 	this.smfChange_opacity(100);
// 	return ret;
// };

/**
 * (사용안함)
 * PC의 날짜와 시각을 설정한다.
 * @param  strTime		- 년월일을 포함한 문자열(yyyyMMddhhmmss)
 * @return 없음
 * @example smfSetTime("20100803100200")
 */
// prForm.smfSetTime = function(strTime) {
// 	alert('사용안함 this.smfSetTime');
// 	/* [X-LOG] ExtCommon 객체를 지원하지 않습니다.*/var extComapi = new ExtCommon();
// 	extComapi.setTime(strTime);
// };

/**
 * (사용안함)
 * @param : bFlag: Boolean
 * @param : strMsg: Boolean
 * @return : 없음
 * @example : smfImgProc(true,this);
 */
// prForm.smfImgProc = function(bFlag, strMsg) {
// 	var MyFrame = this.getOwnerFrame();
// 	var thisForm = MyFrame.form;
// 	if (bFlag) {
// 		var nLeft = (MyFrame.getOffsetWidth() / 2) - 200;
// 		var nTop = (MyFrame.getOffsetHeight() / 2) - 45;
// 		var nRight = nLeft + 400;
// 		var nBottom = nTop + 90;
// 		var objDiv;
// 		if (this.isNil(thisForm.div_ImgProc)) {
// 			objDiv = new Div("div_ImgProc", nLeft, nTop, nRight, nBottom);
// 			MyFrame.form.addChild("div_ImgProc", objDiv);
// 			objDiv.set_color("#252525ff"); // 검정색
// 		} else {
// 			/* [X-LOG] 변수(div_ImgProc)가 있는지 확인이 필요합니다.*/ objDiv = div_ImgProc;
// 		}
// 		if (this.smfIsNull(strMsg)) {
// 			objDiv.set_text("처리중입니다. 잠시 기다려주세요");
// 		} else {
// 			objDiv.set_text(strMsg);
// 		}
// 			//objDiv.class 				= "div_top_menuBG";
// 			objDiv.show();
// 
// 		objDiv.set_visible(bFlag);
// 
// 	} else {
// 		if(this.isNotNil(thisForm.div_ImgProc)){
// 			thisForm.div_ImgProc.set_visible(bFlag);
// 		}
// 	}
// };
/**
 * (사용안함)
* 세션값 전역변수에 설정
* @param : 없음
* @return : 없음
* @example : smfSetSsoKey();
*/
prForm.smfSetSsoKey = function() {
	var strVar = "";
	for(var i=0,size=nexacro.getApplication().all.length; i<size; i++){
		var obj = nexacro.getApplication().all[i];
		if("Variant" != this.smfGetObjType(obj)) continue;
		strVar = obj.name.toUpperCase();
		//trace("globalvars: "+obj.name);
		if (strVar.indexOf("SP_SESSION") >=0 ) {
			nexacro.getApplication().SESSIONKEY1 = obj.name;
			/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ 
			nexacro.getApplication().SESSIONVAL1 = eval(obj.name);
		} else if (strVar.indexOf("IDP_SESSION") >=0 ) {
			nexacro.getApplication().SESSIONKEY2 = obj.name;
			/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ 
			nexacro.getApplication().SESSIONVAL2 = eval(obj.name);
		}
	}
};
/**
 * (사용안함)
* 기안문상신 화면 호출
* @param : strMenuId: 기안문상신 메뉴아이디, bMode: 팝업여부
* @return : 없음
* @example : smfSangsin("m_00000000");
*/
// prForm.smfSangsin = function(strMenuId, bMode) {
// 	if (this.smfIsNull(strMenuId)) {
// 		this.alert_opacity("파라메터(메뉴아이디)가 없습니다.");
// 		return;
// 	}
// 	var dsObj = nexacro.getApplication().gds_menuinfo;
// 	var strPgeid = dsObj.lookup("menuId",strMenuId,"pgeid");
// 	//trace("page id : "+strPgeid);
// 
// 	try {
// 		if (strPgeid == undefined) {
// 			//gds_menuinfo에서 찾지 못하는 경우 나의메뉴에서 찾아서 실행.
// 			this.trace("1***** "+nexacro.getApplication().gv_AppMenuPath.form.ds_menuOther.findRow("menuId",strMenuId));
// 			if (nexacro.getApplication().gv_AppMenuPath.form.ds_menuOther.findRow("menuId",strMenuId) == -1) {
// 				this.alert_opacity("기안문상신 화면을 찾을 수 없습니다.");
// 				return;
// 			} else {
// 				dsObj = nexacro.getApplication().gv_AppMenuPath.form.ds_menuOther;
// 			}
// 
// 		}
// 
// 		if (bMode == true) {
// 			var strpgeCoursNm = dsObj.lookup("menuId",strMenuId,"pgeCoursNm");
// 			strPgeid = dsObj.lookup("menuId",strMenuId,"pgeid");
// 			var strUrl = strpgeCoursNm +"::"+ strPgeid+".xfdl";
// 			this.trace("smfSangsin popup ===> "+strUrl);
// 			var nPopLeft 	= system.clientToScreenX(nexacro.getApplication().gv_AppTopPath.form.stc_usrInfo,-10);
// 			var nPopTop 	= system.clientToScreenY(nexacro.getApplication().gv_AppTopPath.form.stc_usrInfo,60);
// 			var nWidth 		= 831;
// 			var nHeight		= 553;
// 
// 			return this.smfDialog(strPgeid, strUrl, "", nPopLeft, nPopTop, nWidth, nHeight, "");
// 		} else {
// 			this.sysf_chkOpenMenu(strMenuId, true);
// 		}
// 
// 	} catch(e) {
// 		//IE 임베드인 경우 프레임정보가 없으므로 예외처리함.
// 		if (bMode == true) {
// 			var strUrl = "cm.bcm.cfm.rt::bcm_cfmrt00_m00.xfdl";
// 			this.trace("smfSangsin popup IE Embeded ===> "+strUrl);
// 			var nPopLeft 	= -1;
// 			var nPopTop 	= -1;
// 			var nWidth 		= -1;
// 			var nHeight		= -1;
// 
// 			return this.smfDialog("bcm_cfmrt00_m00", strUrl, "", nPopLeft, nPopTop, nWidth, nHeight, "");
// 		}
// 	}
// };
/**
 * (사용안함)
* 상신 화면 조회함수 호출
* @param : strMenuId: 상신화면 메뉴아이디
* @return : 없음
* @example : smfSangsinRetrive("m_00000000");
*/
// prForm.smfSangsinRetrive = function(strMenuId) {
// 	if (this.smfIsNull(strMenuId)) {
// 		this.alert_opacity("파라메터(메뉴아이디)가 없습니다.");
// 		return;
// 	}
// 
// 	var winKey = nexacro.getApplication().gds_openwininfo.lookup("menuid", strMenuId,"winid");
// 	if (winKey == undefined) {
// 		this.alert_opacity("해당화면을 찾을 수 없습니다.");
// 		return;
// 	}
// 
// 	nexacro.getApplication().gv_AppFramePath.frames(winKey).form.fnRetrive();
// };

/**
* (사용안함)
* 서버의 현재일을 가져온다.
* @param : 없음
* @return : 년월일(yyyymmdd)
* @example : smfGetSysToday();
*/
// prForm.smfGetSysToday = function(bSync) {
// 	if (this.smfIsNull(bSync)) bSync = false;
// 
// 	this.svcfTransaction("selectSysDate",
// 		nexacro.getApplication().gv_dataprefix+nexacro.getApplication().gv_ServerUrl+"/cmc_cmm_ut99_S00.xp",
// 		"dsCmcCmmUt99S00SVO=dsTime",
// 		"dsTime=dsCmcCmmUt99S00SVO_currentDateList",
// 		"",
// 		"fnTransCallback", "R", "", bSync,nexacro.getApplication().gv_bintp, nexacro.getApplication().gv_compress);
// };

/**
 * (사용안함)
* 서버의 현재일을 가져온다.
* @param : 없음
* @return : 년월일시분초(yyyymmddhhmmss)
* @example : smfGetSysTime();
*/
// prForm.smfGetSysTime = function(bSync) {
// 	if (this.smfIsNull(bSync)) bSync = false;
// 
// 	this.svcfTransaction("selectSysDateTime",
// 		nexacro.getApplication().gv_dataprefix+nexacro.getApplication().gv_ServerUrl+"/cmc_cmm_ut99_S01.xp",
// 		"dsCmcCmmUt99S00SVO=dsTime",
// 		"dsTime=dsCmcCmmUt99S00SVO_currentDateTimeList",
// 		"",
// 		"fnTransCallback", "R", "", bSync,nexacro.getApplication().gv_bintp, nexacro.getApplication().gv_compress);
// 
// };

/**
 * (사용안함)
* 서버의 시간을 기준으로 시각 계산
* @param : 없음
* @return : 년월일시분초(yyyymmddhhmmss)
* @example : smfGetSysTime();
*/
// prForm.smfSettime = function() {
// 	this.dateobj.addSeconds(1);
// 	/* [X-LOG] toFormatString은 지원되지 않는 메서드입니다.*/var strTimeNow = this.dateobj.toFormatString("%Y%m%d%H%M%S");
// 	nexacro.getApplication().gdsTime.setColumn(0,"currentDateTime",strTimeNow);
// };

/**
 * (사용안함)
 * left 메뉴 폼
 */
// prForm.smfGetMenuForm = function(){
// 	return nexacro.getApplication().gv_AppMenuPath.form;
// };

/**
 * (사용안함)
 * 하단 폼
 */
// prForm.smfGetBottomForm = function(){
// 	return nexacro.getApplication().gv_AppBottomPath.form;
//};

/**
 * (사용안함)
 * 
 */
// prForm.smfGetCommonActiveX = function(){
// 	return this.smfGetTopForm().acx_common;
// };

/**
 * (사용안함)
 * 
 */
// prForm.smfSetFinKeyInfo = function(code, value){
// 	var row = nexacro.getApplication().gds_finkeyinfo.findRow("finKey", code);
// 
// 	//이미 있음
// 	if( row > -1 ){
// 		nexacro.getApplication().gds_finkeyinfo.setColumn(row, "finKey", code);
// 		nexacro.getApplication().gds_finkeyinfo.setColumn(row, "finKeyValue", value);
// 	}else{
// 		var newrow =nexacro.getApplication().gds_finkeyinfo.addRow();
// 		nexacro.getApplication().gds_finkeyinfo.setColumn(newrow, "finKey", code);
// 		nexacro.getApplication().gds_finkeyinfo.setColumn(newrow, "finKeyValue", value);
// 
// 	}
// };


/**
 * (사용안함)
 * 2차인증 메뉴 검증 호출
 */
// prForm.smfAuthorization = function(pgeId){
// 	var result = this.sauf_authorization(pgeId);
// 	return result;
// };

/**
 * (사용안함)
 * 영재학교 메뉴 검증 호출
 */
// prForm.smfGisAuthorization = function(pgeId){
// 	var result = this.gisf_authorization(pgeId);
// 	return result;
// };

/*
 * (사용안함)
* PMM ActiveX
* @param  없음
* @return  없음
*/
// prForm.smfPmmActiveX = function()
// {
// 	try {
// 		//trace("try");
// 		/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_pmm)가 있는지 확인이 필요합니다.*/ div_atx.atx_pmm.set_visible(true);
// 	} catch(e) {
// 		//trace("catch");
// 		/* [X-LOG] ActiveX 객체를 지원하지 않습니다.*/var objActiveX = new Plugin();
// 		/* [X-LOG] progid은 지원되지 않는 속성입니다.*/ objActiveX.progid = "{8856F961-340A-11D0-A96B-00C04FD705A2}";
// 		objActiveX.init("atx_pmm", 100, 100, 101, 101);
// 		/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다.*/ div_atx.addChild("atx_pmm", objActiveX);
// 
// 		/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_pmm)가 있는지 확인이 필요합니다.*/ div_atx.atx_pmm.show();
// 		/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_pmm)가 있는지 확인이 필요합니다.*/ div_atx.atx_pmm.set_visible(true);
// 		/* [X-LOG] 변수(div_atx)가 있는지 확인이 필요합니다. [X-LOG] 변수(atx_pmm)가 있는지 확인이 필요합니다. [X-LOG] popupstyle은 지원되지 않는 속성입니다.*/ div_atx.atx_pmm.popupstyle = true;
// 		this.trace("atx_pmm Enabled");
// 	}
// 
// };