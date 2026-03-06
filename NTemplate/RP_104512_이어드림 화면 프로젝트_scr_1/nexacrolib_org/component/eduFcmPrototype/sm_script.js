/*
 * @fileoverview sm_script
 * @author 문호상
 * @version 0.6 버전
 */


var prForm = nexacro.Form.prototype;

// 메시지 접두어
prForm.smvPrefixesOfServiceId = {
			// "listValidation": "화면초기로드", 
			"validate": "내용검증", 
			"check": "조건확인", 
			"insert": "등록", 
			"select": "조회(단건)", 
			"list": "조회(멀티건)", 
			"update": "수정", 
			"delete": "삭제", 
			"save": "등록/수정", 
			"execute": "수행처리(배치, 일괄처리, 복잡한 처리수행 시)", 
			"preview": "보고서 조회", 
			"print": "보고서 출력", 
			"code": "코드조회"
		};


// 컴포넌트 접두어		
prForm.smvPrefixOfComponents = {
	"Div" : "div",
	"Button" : "btn",
	"PopupDiv" : "pdv",
	"Combo" : "cbo",
	"CheckBox" : "chk",
	"ListBox" : "lst",
	"FileDialog" : "fdg", 
	"ImportObject" : "ximp",
	"ListView" : "lvw",
	"Plugin" : "plgn",
	"Edit" : "edt",
	"MaskEdit" : "msk",
	"TextArea" : "txt",
	"Menu" : "mnu",
	"Tab" : "tab",
	"TabPage" : "tpg",
	"ImageViewer" : "img",
	"Radio" : "rdo",
	"Calendar" : "cal",
	"Static" : "sta",
	"Grid" : "grd",
	"Spin" : "spn",
	"PopupMenu" : "pmn",
	"GroupBox" : "grp",
	"ProgressBar" : "pgb",
	"Dataset" : "ds",
	"FileDownload" : "fdl",
	"FileUpload" : "ful",
	"RaonkUpload" : "RaonkUpload",
	"WebBrowser" : "wb"
};		

prForm.smvActiveLoggingAtptOfCdcList = {A00 : "Y" ,  // 총괄
                                      B10 : "Y" ,  // 서울
                                      J10 : "Y" ,  // 경기
                                      K10 : "Y" ,  // 강원
                                      E10 : "Y" ,  // 인천

                                      N10 : "Y" ,  // 충남
                                      M10 : "Y" ,  // 충북
                                      R10 : "Y" ,
                                      D10 : "Y" ,
                                      G10 : "Y" ,

                                      F10 : "Y" ,
                                      P10 : "Y" ,
                                      Q10 : "Y" ,
                                      S10 : "Y" ,
                                      H10 : "Y" ,

                                      I10 : "Y" ,  // 세종
                                      V10 : "N" ,  // 재외한국인

                                      C10 : "Y" ,
                                      T10 : "Y" }; // 로그를 활성/비활성화 여부(Y/N)

prForm.smvAtptDomainNameList = {
	A00 : "moe" ,  // 총괄
    B10 : "sen" ,  // 서울
    J10 : "goe" ,  // 경기
    K10 : "gwe" ,  // 강원
    E10 : "ice" ,  // 인천

    N10 : "cne" ,  // 충남
    M10 : "cbe" ,  // 충북
    R10 : "gbe" ,
    D10 : "dge" ,
    G10 : "dje" ,

    F10 : "gen" ,
    P10 : "jbe" ,
    Q10 : "jne" ,
    S10 : "gne" ,
    H10 : "use" ,

    I10 : "sje" ,  // 세종
    V10 : "oke" ,  // 재외한국인

    C10 : "pen" ,
    T10 : "jje"
}


prForm.myeval = function(expr){
	this.trace("expr = " + expr);
	return eval(expr);
}

prForm.smfEvil = function(expr){
	return eval(expr);
}

prForm.smfFastFindComponent = function(context, qualifiedComponentName){
	return context.smfEvil.call(context, 'this.' + qualifiedComponentName);
}

prForm.smfFindComponentInThisContext = function(qualifiedComponentName){
	if(! qualifiedComponentName) return null;

	if(! qualifiedComponentName instanceof String){
		trace("typeof qualifiedComponentName = " + (typeof qualifiedComponentName));
		throw "문자열만 가능";
	} 
	
	var component = this;
	var splited = qualifiedComponentName.split(".");
	for(var i in splited){
		var componentName = splited[i];
		component = this.smfFindComponent(component, componentName);
	}  
	 
	return component;
};


prForm.smfSearchComponent = function(parent, findForComponentName){
	var finded = this.smfFindComponent(parent, findForComponentName);
	if(finded) return finded;
	
	if(finded){
		return smfFindComponentInThisContext(findForComponentName);
	}	
};


prForm.smfFindFunctionInThisContext = function(funcName, isThrowWhenNotFoundFunction){
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

prForm.smfFindComponent = function(parent, findForComponentName){
	this.astfAssertParamValueIsObjectType(parent, 'parent');
	this.astfAssertParamValueIsStringType(findForComponentName, 'findForComponentName');
	
	if(this.isNil(parent)){
		return this[findForComponentName];
	}else if(parent.all){
		return parent.all[findForComponentName];
	}else if(parent.form){
		return parent.form.all[findForComponentName];
	}else{
		return null;
	}
};

/**
 * localhost에서 실행한건지 아닌지
 *
 * @param boolean
 * @return void
 */
prForm.smfIsLocalMode = function(){
	try{
		if(this.smfContainsStr(this.svcfGetServerUrl(), "localhost") || this.smfContainsStr(this.svcfGetServerUrl(), "neis.sgadvk")){
			return true;
		}else{
			return false;
		}

		return -1 != this.smfStr(this.svcfGetServerUrl()).indexOf("localhost");
	}catch(e){
		return false;
	}
};


/**
 * 개발WAS에서 실행한건지 아닌지
 *
 * @param boolean
 * @return void
 */
prForm.smfIsDevMode = function(){
	try{
		if(this.smfContainsStr(this.svcfGetServerUrl(), "112.136.170.16") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.tsk.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.dvm.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.dvs.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.dvk.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "neis.sgadvk.go.kr")){
			return true;
		}else{
			return false;
		}
	}catch(e){
		return false;
	}
};

/**
 * 검수WAS에서 실행한건지 아닌지
 *
 * @param boolean
 * @return void
 */
prForm.smfIsExamineMode = function(){
	try{
		if(this.smfContainsStr(this.svcfGetServerUrl(), "112.136.170.18") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.acm.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.acs.go.kr") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "eis.ack.go.kr")){
			return true;
		}else{
			return false;
		}
	}catch(e){
		return false;
	}
};

/**
 * 교육용WAS에서 실행한건지 아닌지
 *
 * @param boolean
 * @return void
 */
prForm.smfIsEduMode = function(){
	try{
		if(this.smfContainsStr(nexacro.getApplication().gv_login_flg, "ESV") ||
		   this.smfContainsStr(this.svcfGetServerUrl(), "training.neis.go.kr")){
			return true;
		}else{
			return false;
		}
	}catch(e){
		return false;
	}
};

/**
 * 제품환경인지 아닌지(시도교육청)
 *
 * @param boolean
 * @return void
 */
prForm.smfIsProductMode = function(){
	return this.smfIsLocalMode() == false &&
	       this.smfIsDevMode () == false &&
	       this.smfIsEduMode() == false &&
	       this.smfIsExamineMode() == false;
};


prForm.smfDevException = function(sMessage, startCaller){
	this.trace("이 메시지는 개발에러 메시지입니다(" + this.name + ")\n\n" + sMessage);
	this.astfThrowDevException("이 메시지는 개발에러 메시지입니다(" + this.name + ")\n\n" + sMessage, startCaller); 
};

prForm.smfAlertInvalidConfig = function(sMessage){
	this.smfDevException(sMessage);
}; 

/**
 * trace message
 *
 * @param sMessage
 * @return void
 */
prForm.trace = function(sMessage){
	try{
		sMessage = "(" + this.smfFuncName(arguments.callee.caller) + " in " + this.name + ") " + sMessage
	}catch(e){
		trace("처리중 에러가발생했습니다.");
	}
    nexacro.getApplication().trace(sMessage);

    if(this.frmFormSpy){
        try{
            this.frmFormSpy.tab.tabLog.taLog.set_value(sMessage + "\n");
        }catch(e){
			trace("처리중 에러가발생했습니다.");
        }
    }
};

/**
 * 디버깅용으로 호출하는 alert
 * 업무용은 smfAlert을 이용한다
 */
prForm.alert = function(message){
	var functionName = this.smfFuncName(arguments.callee.caller);
	if(arguments.callee.caller.caller){
		functionName += ", " + this.smfFuncName(arguments.callee.caller.caller);
	}
	
	
	alert(message 
	   + "\n\n" 
	   + "==== callstack ====\n"
	   + this.astfGetCallerFunctionNameList(true).join("\n"));
};


/**
 * 해당폼에서 smfInitForm, smfInitPopup, smfInitDiv를 호출하지 않았을경우
 * 발생하는 에러
 */
prForm.smfDoNotCalledInitMethodWhoDeveloper = function(){
	this.smfDevException(this.name + ".onload에서 smfInit* 함수가 호출되지 않았습니다.\n호출 하기 바랍니다.\nfrom .. smfDoNotCalledInitMethodWhoDeveloper");
};

/**
 * _dsGridList를 리턴한다.
 */
prForm.smfGetGridListThatHasDataset = function(){
	if(this.isNil(this._dsGridList)){
		//smfDoNotCalledInitMethodWhoDeveloper();
		return;
	}

	return this._dsGridList;
};


 
/**
 * (사용안함)
 * 업무절차창에 탭 클릭이벤트 전달
 * 
 * @return void
 */
prForm.fnNotifyTabEvent = function(obj, e)
{
  nexacro.getApplication().gv_AppEtcPath.form.fnNotifyTabEvent(obj, e);
};

/**
 * (사용안함)
 * 업무절차창에 버튼 클릭이벤트 전달
 *
 * @return void
 */
prForm.fnNotifyBtnEvent = function(obj,  e)
{
  nexacro.getApplication().gv_AppEtcPath.form.fnNotifyBtnEvent(obj, e);
};

/**
 * Form이 로드되면 호출하는 함수 
 *
 * @param  frm     호출한 객체
 * @return void
 */
prForm.smfInitForm = function(frm){
	// this.smfDefenceProxyInjection("form", frm._orgurl);
	if(this.isNotNil(this.opener)){
		this.smfDevException("smfInitForm함수는 메뉴화면인 경우 호출하고, 팝업에서는 smfInitPopup 함수를 호출하세요");
	}

	//onload callback함수가 있으면 호출
	if(this.smfOwnerComponent(frm).smfHasFunc != undefined){
		this.smfOwnerComponent(frm).smfDoBeforeLoadComponent(frm);
	}

	//@KBR
	//divWork에 UserProperty divmargin에 초기값 셋팅(44px)
	if (nexacro.getEnvironmentVariable("ev_subSystemGb") !="PAS") {
		if(this.parent.name != "frameMain"){
			//this.parent -> divwork 
			this.parent.divmargin = this.fv_FORM_MARGIN;
			
			//교육설문 divmargin = 0
			if(nexacro.getEnvironmentVariable("ev_subSystemGb") == "EDS"){
				this.parent.divmargin = "0";
			}
		}
	}

	this.smvInitedForm = true;
	try{
		this.smfFrmLoadsetEnv(frm);
	}finally{
		try{
			this.smfInit(frm);
		} catch(e)
		{
			trace("처리중 에러가발생했습니다.");
		}finally{
			// this.smfCloseFormOthers(frm);
		}
	}

	//달력 컴포넌트에 공휴일 일정 추가
	this.smfLoadGdsCal();
	
	// 화면의 divWork를 일반 형태(일반사이즈)로 변경을한다.
	
	if(this.getOwnerFrame().form.divAll)
	{
		var objDiv = this.getOwnerFrame().form.divAll.form.divWork;
		if(objDiv)
		{
			if(objDiv.wildmode)
			{
				objDiv.wildmode = null;
			}
		}
	}

	this.smfAfterInitForm(frm);
};


prForm.smfIsPortal = function(){
	return this.isNotNil(nexacro.getApplication().gv_ssoSessionValue) || this.isNil(this.smfGetTopForm());
};

prForm.smfMenuForm = function(oForm){
	var menuForm = this.smfForceMainForm(oForm);
	
	for(var i=0; i<10; i++){
		if(menuForm.opener != null){
			menuForm = this.smfForceMainForm(menuForm.opener);
		}else{
			break;
		}
	}

	return menuForm;
};


/**
 * Popup이 로드되면 호출하는 함수
 *
 * @param  frm     호출한 객체
 * @return void
 */
prForm.smfInitPopup = function(frm){
	// this.smfDefenceProxyInjection("popup", frm._orgurl);
	if(this.isNil(this.opener)){
		this.smfDevException("smfInitPopup함수는 팝업인 경우만 호출하세요");
	}

	this.smvInitedForm = true;


	//onload callback함수가 있으면 호출
	if(this.smfOwnerComponent(frm).smfHasFunc != undefined){
		this.smfOwnerComponent(frm).smfDoBeforeLoadComponent(frm);
	}

	try{
		this.smfPopupLoadsetEnv(frm);
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		var oSt_title = frm.all['st_title'];
		if(oSt_title == null) oSt_title = frm.all['sta_title'];
		if(oSt_title == null) oSt_title = frm.all['main_title'];

		if(oSt_title != null){
			oSt_title.set_text(frm.titletext);
		}

		// opener가 있으면 팝업
		if(this.opener){
			this.getOwnerFrame().set_titletext(frm.titletext);
		}

		// 웹접근성 - 팝업의 타이틀을 읽기 위해 생성된 Static
		if (!this.smfIsNull(frm.all["staPopupTitleAss"])) {
			frm.all["staPopupTitleAss"].set_width(0);
			frm.all["staPopupTitleAss"].set_height(0);
			if (this.smfIsNull(oSt_title)) 
				frm["staPopupTitleAss"].set_text(frm.titletext);
			else 
				frm["staPopupTitleAss"].set_text(oSt_title);
		}		

		this.smfInit(frm);
	}

	// 본인인증
	//smfAuthorization(frm);
	
	
	//@KBR 모바일 팝업 사이즈 조절을 위해 셋팅
	if(this.smfIsMobile()){
		var nWidth = frm.width;
		var nHeight = frm.height;
		frm.getOwnerFrame().orgFormWidth = nWidth;
		frm.getOwnerFrame().orgFormHeight = nHeight;

		
		//@KBR 팝업이 화면 사이즈보다 클 경우 현재 해상도에 맞춰서 사이즈 조절
		var srcInfo = this.smfCurScreenInfo();
		var srcWidth = parseInt(srcInfo[0],10);
		var srcHeight = parseInt(srcInfo[1],10);
		
		var nPopTop = 0; 		
		var nTops =  parseInt((srcHeight - nHeight) / 2) + nHeight; 
		//가로전환시 화면높이가 더 크면
		if (srcHeight <= nTops) {
			frm.setOffsetHeight(srcHeight);
			frm.setOffsetTop(nPopTop);				
	
			frm.resetScroll();			
		}	
	}	
	
	this.smfAfterInitPopup(frm);
};

/**
 * URL로 연결된 Div나 Tabpage 초기화함수
 *
 * @param  frm     호출한 객체
 * @return void
 */
prForm.smfInitDiv = function(frm){
    // this.smfDefenceProxyInjection("div", frm._orgurl);
	
	if(this.parent == nexacro.Form){
		this.smfDevException("smfInitDiv함수는 include되는 DIV, TabPage에 사용하세요");
	}	

	this.smvInitedForm = true;


	//onload callback함수가 있으면 호출
	if(this.smfOwnerComponent(frm).smfHasFunc != undefined){
		this.smfOwnerComponent(frm).smfDoBeforeLoadComponent(frm);
	}

    try{
        this.smfDivLoadsetEnv(frm);
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		try{
			this.smfInit(frm);
			//onload callback함수가 있으면 호출
			if(this.smfOwnerComponent(frm).smfHasFunc != undefined){
				this.smfOwnerComponent(frm).smfDoLoadComponent(frm);
			}
		}finally{
			// this.smfCloseFormOthers(frm);
		}
    }

	this.smfAfterInitDiv(frm);
};

prForm.smfDoBeforeLoadComponent = function(obj){
	try{
		if(this.smfOwnerComponent(obj).smfHasFunc != undefined){
			if(this.smfOwnerComponent(obj).smfHasFunc("fnDoBeforeLoadComponent")){
				this.smfOwnerComponent(obj).fnDoBeforeLoadComponent(obj);
			}
		}
	}catch(e){
		this.trace(e);
	}
};

prForm.smfDoLoadComponent = function(obj){
// 	if(smvResize == true){
// 		smfEndResize(this);
// 	}

	if(this.smfOwnerComponent(obj).smfHasFunc != undefined){
		if(this.smfOwnerComponent(obj).smfHasFunc("fnDoLoadComponent")){
			this.smfOwnerComponent(obj).fnDoLoadComponent(obj);
		}
	}
};

/**
 * 팝업을 안보이게
 *
 * @return void
 */
prForm.smfHidePopup = function(){
	this._nOldX = this.getOwnerFrame().getOffsetLeft();
	this.getOwnerFrame().setOffsetLeft(-10000);
};

/**
 * 팝업을 보이게
 *
 * @param  frm     호출한 객체
 * @return void
 */
prForm.smfShowPopup = function(){
	this.getOwnerFrame().setOffsetLeft(this._nOldX);
};

/**
 * (공통만사용)로드되면 호출하는 함수
 *
 * @param  frm  form
 * @return void
 * @see
 */
prForm.smfInit = function(frm){

	// 폼디버거연결
    frm.addEventHandler('onclick' ,function (obj, e){
		if(e.ctrlkey && e.shiftkey && e.altkey ){
			this.smfOpen("FormSpy" + Math.random() + Math.random() + Math.random(), "comm::form_spy.xfdl", {
				noCallback: true,
				params: {
					procType: "none",
				},
			});
		}
    }, this);
	

    var oSt_title = frm.all['st_title'];
    if(oSt_title == null){
		oSt_title = frm.all['sta_title'];
    }
    if(oSt_title == null){
		oSt_title = frm.all['main_title'];
    }
	if(oSt_title == null){
		oSt_title = frm.all['sta_main'];
	}
	if(oSt_title == null){
		oSt_title = frm.all['staMain'];
	}
	


    if(oSt_title != null){
		oSt_title.set_cursor("hand");
		oSt_title.addEventHandler('onclick' ,function (obj, e){
			if(getKeyState('alt', e) && getKeyState('shift', e) && getKeyState('ctrl', e) ){
				this.smfOpen("FormSpy" + Math.random() + Math.random() + Math.random(), "comm::form_spy.xfdl", {
					noCallback: true,
					params: {
						procType: "none",
					},
				});
			}else if(getKeyState(0x10) && getKeyState(0x11) && getKeyState(0x12) && getKeyState(0x32)){
				this.smfCallHelp(null, null);
			}else if(getKeyState(0x10) && getKeyState(0x11) && getKeyState(0x12) && getKeyState(0x33)){
				this.smfCallQna(null, null);
			}else if(getKeyState(0x10) && getKeyState(0x11) && getKeyState(0x12) && getKeyState(0x34)){
				this.smfCallPal(null, null);
			}else if(getKeyState(0x10) && getKeyState(0x11) && getKeyState(0x12)){
			}else{
				if(!this.smfIsProductMode() && ! this.smfIsEduMode()) {
					if(getKeyState(0x12)){
						

					}else{

						var sUrl =this.getOwnerFrame().formurl;
						var sPathAndUrl = sUrl.substring(0, sUrl.length-5);
						sUrl = sPathAndUrl.substr(sPathAndUrl.indexOf("::") + 2 );
						this.smfCopyToClipboard(this.format("{0}\n({1})", [oSt_title.text,  sUrl.toUpperCase()]));
						this.alert(this.format("화면아이디가 클립보드로 복사되었습니다\n\n{0}\n{1}", [sPathAndUrl, sUrl.toUpperCase() + "\t" + oSt_title.text]));
					}
				}else{
					if(getKeyState(0x02)){
						this.alert(this.smfGetWasMachineName());
					}
				}
			}
		}, this);

		//디비에 있는 값으로 타이틀을 설정한다.
		if(this.isNotNil(this.pv_frmTitle)){
			oSt_title.set_text(this.pv_frmTitle);
		}
    }

    this.smfCreateVariable();
	this.smfCacheFunctionList();

    try{
        var dummy = this.fnTransCallback;
    }catch(e){
		this.smfAlertInvalidConfig('콜백함수 fnTransCallback(svcid, errcd, errmsg)를 반드시 정의하세요');
    }

	this.smfUpdateComponentToStandardSetting();
    this.smfUpdateServiceDataset();
	this.smfCreateGridDataset(); //Grid를 담고 있는 데이터셋을 생성.
	this.smfResetGridConfig();

	this.smfValidatesService();
    // this.smfRegisterHandlers(frm);

    //키보드보안 설정
    this.smfAttachKeyboardSecurityEventOnSetFocus(frm);
	
	// vld_script
	if(this.smfFormOnloadValidate) this.smfFormOnloadValidate(frm);

    //ime모드변경
    // this.smfReplaceAllImeMode(frm);

    //local에서만 돌아가게..
    if(this.smfIsLocalMode()){
        this.smfValidStandard(this);
    }

//     //tabHisPrimary를 가지고 있으면
//     if(this.isNotNil(this.components["tabPrimary"]) ||
//        this.isNotNil(this.components["tabHisPrimary"]) ||
//        this.isNotNil(this.components["tabMisPrimary"]) ||
//        this.isNotNil(this.components["tabElsPrimary"]) ||
//        this.isNotNil(this.components["tabSpsPrimary"])){
// 		this.smvIsTabpagedMainForm = true;
// 		frm.addEventHandler('onbeforeclose' ,this.smfTabpagedMainFormClose, this);
//     }
//     //tabpage로 관리되는 subform인지
//     if(this.parent instanceof nexacro.Tab && this.In(this.parent.name, ["tabHisPrimary", "tabMisPrimary", "tabElsPrimary", "tabSpsPrimary"])){
// 		this.smvIsTabpagedSubForm = true;
//     }

	/*
	// @RHS 23.02.08 주석처리
	var form = this;
	try{
		if(! this.smfIsPopup() && !this.smfIsPortal()){
			if(this == this.smfMenuForm(this)){
				//this.setZoom(nexacro.getApplication().gv_AppTopPath.form.fv_topScale);
			}
		}
		// smfSyncZoomPopupForm(frm);
	}catch(e){
		throw e;
	}
	*/


	/*
	// @RHS 23.02.15 주석처리함 - edu.imsi.web 에서만 사용..
	try{
		if(!this.smfIsProductMode() && this.smfIsLocalMode()){
			if(nexacro.getApplication().showOnFormLoad == true){
				if(this.smfMenuForm(frm) == frm || this.smfIsPopup()){
					this.smfOpen("FormSpy" + Math.random() + Math.random() + Math.random(), "comm::FormSpy.xfdl");
				}
			}
		}
	}catch(e){}
	*/
};

prForm.smfGetWasMachineName = function(){
	if(this.smfIsLocalMode()) return "local";
	//wasNumber,containerNumber
	try{
		return this.smfStr(nexacro.getCookieVariable("JSESSIONID")).substr(nexacro.getCookieVariable("JSESSIONID").indexOf(".")).match(/\d+/g);
	}catch(e){
		return;
	}
};

/**
 * (공통만사용)
 * 컴포넌트타입을 리턴한다
 *
 */
prForm.smfGetComponentTypeName = function(component){
	this.astfAssertParamValueIsInputComponentType(component);
	
	return component._type_name;
};

/**
 * (공통만사용)
 * 컴포넌트가 접두어가 올바른지 확인
 *
 */
prForm.isValidPrefixOf = function(component){
	if(this.isNil(component.name)) return true;
	var prefixOfComponent = this.smvPrefixOfComponents[component._type_name];
	var componentName = component.name;
	
	var prefix = componentName.substring(0, prefixOfComponent.length + 1);
	
	// 컴포넌트명칭의 앞자리가 접두어랑 동일하고
	// 접두어 바로 뒷자리가 _가 아니면서 
	// 대문자이면 정상
	if(this.smfContainsStr(componentName, prefixOfComponent)){
		if(componentName.charAt(prefixOfComponent.length) == componentName.charAt(prefixOfComponent.length).toUpperCase()){
			if(componentName.charAt(prefixOfComponent.length) != "_"){
				return true;
			}
		}	
	}
	trace(componentName + " = " + this.smfContainsStr(componentName, prefixOfComponent) + ", " + componentName.charAt(prefixOfComponent.length+1));
	return false;
};

/**
 * (공통만사용)
 * 컴포넌트 명칭의 뒷자리의 넘버링을 얻는다
 * 예) this.smfSuffixNumberSequenceComponent(this.edtName) -> ""
 *     this.smfSuffixNumberSequenceComponent(this.edtName1) -> 1
 *     this.smfSuffixNumberSequenceComponent(this.edtPno123) -> "123"
 */
prForm.smfSuffixNumberSequenceComponent = function(component){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	
	return this.smfSuffixNumberSequence(component.name);
};

/**
 * (공통만사용)
 * name의 뒷자리의 넘버링을 얻는다
 * 예) this.smfSuffixNumberSequence("edtName") -> ""
 *     this.smfSuffixNumberSequence("edtName1") -> 1
 *     this.smfSuffixNumberSequence("edtPno123") -> "123"
 */
prForm.smfSuffixNumberSequence = function(name){
	name = this.smfStr(name);
	
	var matchResult = name.match(/(\d+)$/);
	if(! matchResult){
		return "";
	}
	
	var suffix = this.smfStr( matchResult[0] );
	
	return suffix;
};


/**
 * (공통만사용)
 * 컴포넌트의 올바른 명칭을 얻는다
 *
 */
prForm.getValidComponentName = function(prefixOfComponent, componentName){
	componentName = this.smfStr(componentName);
	
	// div_search -> search로 변경
	if(this.smfContainsText(componentName, prefixOfComponent)){
		componentName = componentName.substring(prefixOfComponent.length);
		if(componentName.charAt(0) == "_") componentName = componentName.substring(1);
	}

	var resultComponentName = prefixOfComponent;
	var splited = componentName.split("_");
	for(var i in splited){
		var part = splited[i];
		resultComponentName += part.substring(0, 1).toUpperCase() + part.substring(1);
	}
	
	return resultComponentName;
};


/**
 * (공통만사용)
 *
 * @return void
 * @see
 */
prForm.smfValidStandard = function(form){
    var jErrors = {};
    var sMessages = "\n";
	
	
    form.smfTravelComponents(form, function (oComp, fnc, nLvl){
		if(this.isNil(oComp.name)) return;

        var bInvalidDesign = false;
        var bInvalidProperty = false;

 
        var sMessage = "";
        var sComponentName = form.smfFullId(oComp);
        var sComponentType = (oComp+"").substr(7);//[object Edit]
		var sComponentType = (oComp+"").replace("[object ", "").replace("]", "");
        sComponentType = nexacro.trim(sComponentType.substring(0, sComponentType.length-1));
		var prefixOfComponent = this.smvPrefixOfComponents[oComp._type_name];

        if(oComp instanceof nexacro.Calendar){
            if(form.smfStr(oComp.dateformat).indexOf(".") == -1){
                bInvalidProperty = true;
                sMessage += form.format("Calendar {0}의 속성 {1}의 구분자 표준은 [.]입니다.\n", [sComponentName, 'dateformat']);
            }
            if(form.smfStr(oComp.editformat).indexOf(".") == -1){
                bInvalidProperty = true;
                sMessage += form.format("Calendar {0}의 속성 {1}의 구분자 표준은 [.]입니다.\n", [sComponentName, 'editformat']);
            }
        }else if(oComp instanceof nexacro.Button || oComp instanceof nexacro.Div || oComp instanceof nexacro.Grid){
			if(! this.isValidPrefixOf(oComp)){
                bInvalidProperty = true;
                sMessage += this.format("접두어 변경 : {0} -> {1}", [oComp.name, this.getValidComponentName(this.smvPrefixOfComponents[oComp._type_name], oComp.name)]);
			} 
        }else if(oComp instanceof nexacro.Static){
            if(! form.isNil(oComp.validate)){
                bInvalidProperty = true;
                sMessage += form.format("{0} {1}의 Static컴포넌트는 validate 속성을 가질 수 없습니다.\n", [sComponentType, sComponentName, 'validate']);
            }
        }else if(oComp instanceof nexacro.Edit || oComp instanceof nexacro.TextArea){
//             if(oComp.maxlength > 0){
//                 if(oComp.lengthunit != "utf8"){
//                     bInvalidProperty = true;
//                     sMessage += form.format("{0} {1}의 속성 {2}의 표준은 utf-8입니다.\n", [sComponentType, sComponentName, 'lengthunit']);
//                 }
//             }
        }
	if(oComp instanceof nexacro.Grid){
            for(var i=0,size=oComp.getCellCount("body"); i<size; i++){
                var displaytype = form.smfStr(oComp.getCellProperty("body", i, "displaytype"));
                if(displaytype.indexOf("date") != -1){
                    var calendardateformat = form.smfStr(oComp.getCellProperty("body", i, "calendardateformat"));
                    var calendareditformat = form.smfStr(oComp.getCellProperty("body", i, "calendareditformat"));
					 
                    if(calendardateformat.indexOf(".") == -1 || calendareditformat.indexOf(".") == -1){
                        bInvalidProperty = true;
                        var sCellText = i;
                        try{
                            oComp.setCellProperty("head", i, "background", "fuchsia");
                            oComp.setCellProperty("body", i, "background2", "fuchsia");
                            sCellText = oComp.getCellProperty("head", i, "text") + form.format(" {0}/{1}번 cell", [i+1, size]);
                        }catch(e){
							trace("처리중 에러가발생했습니다.");							
						}
                        sMessage += form.format("Grid {0}의 Body Band의 날짜타입 Cell[{1}] calendardateformat과 calendareditformat 속성 표준은 [.]입니다.\n", [sComponentName, sCellText]);
                    }
                }
            }
        }

        if(bInvalidDesign || bInvalidProperty){
            if(bInvalidDesign) oComp.set_background("fuchsia");
            if(bInvalidProperty) oComp.set_background("fuchsia");

            sMessage += "\n";
            jErrors[sComponentName] = sMessage;

            oComp.set_tooltiptext(nexacro.replaceAll(sMessage,"\n", "\r\n"));
			this.smfSetInvalidStandardComponent(oComp, nexacro.replaceAll(sMessage,"\n", "\r\n"));
        }

        sMessages += sMessage;
    });

	this.smfValidStandardToComponent(form);
	
	// 데이터셋 명명규칙 검증
	for(var i in this.objects){
		if(!(this.objects[i] instanceof nexacro.Dataset)) continue;
		
		var component = this.objects[i];
		if(this.isNil(component)) continue;
		
		if(component.name.charAt(0) == '_') continue;
		
		var prefixOfComponent = this.smvPrefixOfComponents["Dataset"];
		

		if(! this.isValidPrefixOf(component)){ 
			var exampleName = this.getValidComponentName(prefixOfComponent, component.name);
			var invalidMessage = this.format("접두어 변경 : Dataset {0} -> {1}\n", [component.name, prefixOfComponent + component.name.substring(0, 1).toUpperCase() + component.name.substring(1)]);
			sMessages += invalidMessage;
		}
	}

	if(! this.isNil(nexacro.trim(sMessages))){
        this.smfDevException("!!표준에 맞지 않은 디자인이나 설정들이 있습니다.\n로그를 확인하고 수정하세요\n* 컴포넌트 속성이 표준에 안맞는 경우 표시했습니다.\n* 이 메시지는 개발시에만 나옵니다.(테스트 서버나 검수서버에선 이 메시지가 나오지 않습니다.)\n\n" + sMessages);
    }	
	
	
	this.smfValidStandardLocalFunctions(form);
};



/**
	공통만 사용
	로컬함수 명명규칙 검증
*/
prForm.smfValidStandardLocalFunctions = function(form){
	if(! this.smvCheckStandards.localFunctionNamingRule) return;
	var invalidFunctionNames = [];
	for(var i in form){
		var propertyValue = form[i];
		
		if(i.indexOf("lfn") == 0 || i.indexOf("_lfn") == 0){
			invalidFunctionNames.push(i);
			continue;
		}
		
		if(i.indexOf("fn") != 0) continue;
		if(! isFunction(propertyValue)) continue;
		
		
		var functionName = i;
		var functionOfForm = propertyValue;
		
		var underbar = functionName.lastIndexOf("_");
		if(underbar != -1){
			// 함수의 마지막명칭이 _이면 제외
			if(functionName.length == underbar+1) continue;
			
			
			
			var partOfFunctionName = functionName.substring(underbar);
			
			// 이벤트 함수는 제외
			if(partOfFunctionName.toLowerCase().indexOf("_on") == 0){
				continue;
			}
			invalidFunctionNames.push(functionName);
		}
	}
	
	if(invalidFunctionNames.length == 0){
		this.smfValidDetectUseNonStandardFunctions(form);
		return;
	}
	
	

	
	var message = "!!로컬함수명칭을 표준에 맞도록 명명하세요\n\n" 
	            + "\n로컬 함수명명규칙 : fn으로 시작하고 카멜표시법 사용"
				+ "\n예) fnSave, fnSearch, fnExecute..."
				+ "\n아래는 invalid 함수목록\n=====================\n"
	            + invalidFunctionNames.join("\n")
				+ "\n=====================";
	this.smfDevException(message);
};

/**
	공통만 사용
	gfn또는 _gfn으로 시작하는 함수사용금지 검증
*/
prForm.smfValidDetectUseNonStandardFunctions = function(form){
	var invalidFunctionNames = [];
	for(var i in form){
		var propertyValue = form[i];
		
		if(i.indexOf("lfn") == 0){
			invalidFunctionNames.push(i);
			continue;
		}
		
		if(i.indexOf("gfn") == 0) continue;
		if(i.indexOf("_gfn") == 0) continue;
		if(i.indexOf("_") == 0) continue;
		
		// 내 자신은 제외
		if(i.indexOf("smfValidDetectUseNonStandardFunctions") == 0) continue;
		
		
		var functionName = i;
		var functionObject = propertyValue;
		var functionScript = functionObject + "";
		var functionScriptArray = functionScript.split("\n");
		
		for(var n in functionScriptArray){
			var functionLine = functionScriptArray[n];
			
			// gfn함수를 사용하면..
			if(functionLine.indexOf("gfn") != -1){
				invalidFunctionNames.push(form.name + " " +functionName + " 사용처 -----> " + functionLine.trim());
			}
		}
	}

	if(invalidFunctionNames.length == 0){
		return;
	}
	
	var message = "gfn또는 _gfn으로 시작하는 함수는 비표준입니다\n" 
	            + "사용하시면 안됩니다\n"
	            + "죄송하지만 주석처리된 gfn또는 _gfn으로 포함하는 코드도 제거하셔야 합니다\n\n\n"
				+ ""
				+ "\n아래는 invalid 함수목록\n=====================\n"
	            + invalidFunctionNames.join("\n")
				+ "\n====================="
	            + "\n\n감사합니다\n"
			;
	this.smfDevException(message);
};

/**
 * (공통만사용) 
 * 표준에 맞지 않은 컴포넌트 ui처
 *
 * @return void
 * @see
 */
prForm.smfSetInvalidStandardComponent = function(component, invalidMessage){
	if(this.isNil(component.smvMessage)) component.smvMessage = "";
	component.smvMessage = component.smvMessage + "\n" + invalidMessage;
	component.smvMessage = component.smvMessage.trim();

	if(component.set_displaynulltext) component.set_displaynulltext(component.smvMessage);
	if(component.set_background) component.set_background("fuchsia");
	if(component.set_tooltiptext) component.set_tooltiptext(component.smvMessage);
	if(component.set_enable) component.set_enable(true);
	if(component.set_visible) component.set_visible(true);
	
	if(component.set_border) component.set_border("2px solid fuchsia");
	
	component.addEventHandler("onmouseenter", function(e){
		// this.smfCopyToClipboard(invalidMessage);
		trace(component.smvMessage);
	}, this);
};


/**
 * (공통만사용) 
 * 컴포넌트의 접두어와 명명규칙 확인
 *
 * @return void
 * @see
 */
prForm.smfValidStandardToComponent = function(form){
    // 접두어 불일치
	var prefixMessages = [];
    // 명명규칙 불일치
    var namingMessages = [];
	
	for(var i=0,size=this.binds.length; i<size; i++){
		var bindItem = this.binds[i];
		var compid = bindItem.compid;
		var columnid = bindItem.columnid;
		
		if(this.isNil(bindItem.columnid)) continue;
		if(this.isNil(bindItem.compid)) continue;
		
		if(bindItem.propid != "value") continue;
		var component = null;
		try{			
			component = form.smfFastFindComponent(form, compid);
		}catch(e){
			// 컴포넌트가 없음
			continue;
		}
		if(this.isNil(component)) continue;
		if(this.isNil(component.name)) continue;
		
		var prefixOfComponent = this.smvPrefixOfComponents[component._type_name];
		if(this.isNil(prefixOfComponent)) continue;
		
		var componentName = component.name;
		
		
		
		// 접두어 불일치
		if(this.smvCheckStandards.componentNameOfPrefix){
			if(! this.isValidPrefixOf(component)){ 
				var exampleName = this.getValidComponentName(prefixOfComponent, component.name);
				var invalidMessage = this.format("접두어 변경 : {0} -> {1}", [compid, prefixOfComponent + columnid.substring(0, 1).toUpperCase() + columnid.substring(1)]);
				prefixMessages.push(invalidMessage); 
				this.smfSetInvalidStandardComponent(component, invalidMessage);
			}
		}
		
		
		
		
		// 명명규칙 불일치 검증
		if(this.smvCheckStandards.componenNamingRule){
			var nameForNamingRule = componentName.substring(prefixOfComponent.length);// + 1); //cmb_myname -> myname
			nameForNamingRule = nameForNamingRule.charAt(0).toLowerCase() + nameForNamingRule.substring(1);

			var lowerColumnid = columnid.charAt(0).toLowerCase() + columnid.substring(1);
			if(nameForNamingRule != lowerColumnid){
				var exampleName = prefixOfComponent + columnid.charAt(0).toUpperCase() + columnid.substring(1);
				var invalidMessage = this.format("명명규칙 변경, 바인드된 컬럼명과 컴포넌트명을 일치시켜야 합니다 : {0} -> {1}, {1}1, {1}2 등..", [compid, exampleName]);
				namingMessages.push(invalidMessage);
				this.smfSetInvalidStandardComponent(component, invalidMessage);
			} 
		}
	}
	
	if(prefixMessages.length != 0 || namingMessages.length != 0){
		var message = "";
		message += 	prefixMessages.join("\n") + "\n";
		message += 	namingMessages.join("\n");
		trace(message);
        this.smfDevException("! 표준에 컴포넌트 접두어 및 명명규칙이 있습니다.\n"
		                     +"로그를 확인하고 수정하세요\n"
							 +"* 컴포넌트 속성이 표준에 안맞는 경우 표시했습니다.\n"
							 +"* 이 메시지는 개발시에만 나옵니다.(테스트 서버나 검수서버에선 이 메시지가 나오지 않습니다.)\n\n"
							 +message);
	}
};


prForm.smfUpdateComponentToStandardSetting = function(){

	this.smfTravelComponents(this, function(component){
		//Combo 설정
		
		
		if(component instanceof nexacro.Combo){		
			var oneditclickHandler = ""+component.getEventHandler('oneditclick', 0);
			// 파라메터에 _sm_inner_가 포함되어있으면 
			// 이미 등록된 이벤트로 판단한다
			if(oneditclickHandler.indexOf("_sm_inner_") != -1) return;
			component.insertEventHandler('oneditclick', 0, function(obj, e, _sm_inner_){ 
				obj.dropdown();
			}, this);
			
			if(component.type == "dropdown"){
				//2022.10.21 TOBESOFT 공통 일괄 처리 막음
				//component.set_type("filterlike");
			}			
			return;
		}
		
		if(component instanceof nexacro.CheckBox){
			if(this.isNotNil(component.truevalue)){
				if(this.isNil(component.falsevalue)){
					// checkbox의 falsevalue를 디자인시점에서 ""으로 변경할 방법이 없다
					// 디자인시점에서 truevalue를 설정하였는데 falsevalue는 emptystring으로 지정하면 
					// 실행시점에서는 check후 uncheck하면  false값으로 인지한다
					// 이는 오동작으로 판단하였으며 이런 동작을 조정하기 위해 아래 코드를 삽입한다
					
					// truevalue가 지정되어있고 falsevalue가 지정되지 않았으면
					// falsevalue를 ""으로 설정한다
					component.falsevalue = "";
				}
			}
			return;
		}
		if(component instanceof nexacro.Calendar){
			component.set_innerdataset("gdsCal");
			component.set_datecolumn("date");
			component.set_textcolorcolumn("color");
			
			// 년월 마스크를 가지면 이벤트를 바인딩한다
			if(component.editformat == "yyyy.MM" || component.editformat == "yyyy.MM."){
				//trace("component.editformat : " + component.editformat );
				this.smfBindYearMonthComponent(component);
			}
			
			return;
		}
		
	}, true);
};

/**
 * (공통만사용)
 *
 * @return void
 * @see
 */
prForm.smfUpdateServiceDataset = function(){
    if(null == this.objects["dsService"]) return;

	if(this.smvUpdateServiceDataset == false || this.isNil(this.smvUpdateServiceDataset)) {
		this.smvUpdateServiceDataset = true;
		if(this.dsService.getColumnInfo("state")   == null) this.dsService.addColumn('state','string');
		if(this.dsService.getColumnInfo("reason")   == null) this.dsService.addColumn('reason','string');
		if(this.dsService.getColumnInfo("message")   == null) this.dsService.addColumn('message','string');
		if(this.dsService.getColumnInfo("innerCallback")   == null) this.dsService.addColumn('innerCallback','string');
		if(this.dsService.getColumnInfo("executeDate")     == null) this.dsService.addColumn('executeDate','string');
		if(this.dsService.getColumnInfo("executeCount")    == null) this.dsService.addColumn('executeCount','string');
		if(this.dsService.getColumnInfo("group")           == null) this.dsService.addColumn('group','string');
		if(this.dsService.getColumnInfo("params")          == null) this.dsService.addColumn('params','string');
		if(this.dsService.getColumnInfo("package")         == null) this.dsService.addColumn('package','string');
		if(this.dsService.getColumnInfo("service")         == null) this.dsService.addColumn('service','string');
		if(this.dsService.getColumnInfo("vo")              == null) this.dsService.addColumn('vo','string');
		if(this.dsService.getColumnInfo("method")          == null) this.dsService.addColumn('method','string');
		if(this.dsService.getColumnInfo("bizMessage")      == null) this.dsService.addColumn('bizMessage','string');

		// 서비스타입
		if(this.dsService.getColumnInfo("confirmType")      == null) this.dsService.addColumn('confirmType','string');

		// save, delete 시 inDatasets의 서버 전송 옵션(:A, :U, :D)을 변경할지 여부
		if(this.dsService.getColumnInfo("keepInDatasetOptions")      == null) this.dsService.addColumn('keepInDatasetOptions','string');
	
		if(this.dsService.getColumnInfo("containerNameOfInputComponents")      == null) this.dsService.addColumn('containerNameOfInputComponents','string');
    }

	// 데이터셋(inDatasets, outDatasets)의 단축명칭을 정식명칭으로 변경한다
	try{
		this.smfUpdateAllNormalizeDatasetNames(this.dsService);
	}catch(e){
		this.trace("this.smfUpdateAllNormalizeDatasetNames 호출하는데 오류가 발생하였습니다 : " + e);
	}
};

prForm.smfGetComponents = function(containerComponent){
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
 * oOwner에 해당하는 Component를 재귀적으로 호출한다.
 *
 * @param  oOwner : Composite 컴포넌트(form, div, tab, tabpage)
 * @param  fncCallback : 재귀적으로 호출하는 function
 * @param  nLvl : component depth
 * @return void
 * @see    smfTravelComponents(oOwner, fncCallback, bIgnoreUrl

 */
prForm.smfTravelComponents = function (oOwner, fncCallback, bIgnoreUrl, nLvl){
	if (oOwner == null || oOwner == undefined) {
		oOwner = this;
	}

	if (nLvl == undefined){
		nLvl = 1;
	}

	if (bIgnoreUrl == undefined){
		bIgnoreUrl = true;
	}

	var self = this;
	var comps = this.smfGetComponents(oOwner);
	for (var i=0, size=comps.length ; i < size ; i++) {
		var oComp = comps[i];
		var bContinue = fncCallback.call(self, oComp, nLvl, oOwner);
		if (bContinue == false){
			break;
		}

		if (oComp instanceof nexacro.Div){
			// url이 걸린 Div는 무시
			if (bIgnoreUrl == true && !this.isNil(oComp.url)){
				continue;
			} 
			self.smfTravelComponents.call(self, oComp, fncCallback, bIgnoreUrl, nLvl + 1);
		}else if (oComp instanceof nexacro.Calendar){
			// Calendar Component 처리 (이영우C, 2014.12.15)
			oComp.autoselect = true;
		}else if (oComp instanceof nexacro.Tab){
			for(var n=0,sizen=oComp.tabpages.length; n<sizen; n++){
				var tabPage = oComp.tabpages[n];
				self.smfTravelComponents.call(self, tabPage, fncCallback, bIgnoreUrl, nLvl + 1);
			}
		}else if (oComp instanceof nexacro.Tabpage){
			// url이 걸린 Div는 무시
			if (bIgnoreUrl == true && !this.isNil(oComp.url)){
				continue;
			}
			self.smfTravelComponents.call(self, oComp, fncCallback, bIgnoreUrl, nLvl + 1);
		}
	}
};


/**
 * 폼의 모든 그리드의 설정을 Reset한다.
 * 보통 Tabpage를 다시 그렸을때 사용한다.
 *
 * @return void
 * @see
 */
prForm.smfResetGridConfig = function(){
	this.smfGetGridListThatHasDataset();
    this._dsGridList.clearData();
	this.smfAddGridIdToDataset('', this);
	this.smfInitGrids();
};

/**
 * (공통만사용)Form에 정의된 Grid를 Dataset에 담는 Dataset을 생성
 *
 * @param  frm : Formponent depth
 * @return void
 * @see
 */
prForm.smfCreateGridDataset = function(){
	var ds = this.smfGetOrCreateDataset('_dsGridList');
	ds.addColumn('gridName', 'String', 255);
};

/**
 * (공통만사용)Form에 정의된 Grid를 Dataset에 담기
 *
 * @param  void
 * @return void
 * @see
 */
prForm.smfAddGridIdToDataset = function(oOwnerName, oOwner){
	if(! oOwner.all){
		return;
	}
	
    this.smfTravelComponents(oOwner, function (oComp, fnc, nLvl){
		if(! (oComp instanceof nexacro.Grid)) return;
		
		var grid = oComp;
		
		
		
		var nRow = this._dsGridList.addRow();
		var gridQualifiedName = this.smfGetQualifiedName(grid);
		this._dsGridList.setColumn(nRow, 'gridName', gridQualifiedName);
	}, true);
};

/**
 * (공통만사용)데이터셋에 공통 이벤트를 추가한다.
 *
 * @param  void
 * @return void
 * @see
 */
prForm.smfRegistDatasetCanRowPosChangedList = function(frm){
	var form = frm;
	for(var i=0,size=this.dsNotifySubject.rowcount; i<size; i++){
		var sType = form.dsNotifySubject.getColumn(i, 'type');
		var sUsed = form.dsNotifySubject.getColumn(i, 'used');

		if(sUsed != "true") continue;
		if(sType != "rowChange" && sType != "masterDetail") continue;
		var ds = this.smfFindComponentInThisContext(form.dsNotifySubject.getColumn(i, 'param01'));

		if(ds.canrowposchange && ds.canrowposchange.length != 0){
			var sMessage = this.format("데이터셋({0})에 이미 canrowposchange이벤트가 지정되어있습니다.\r\n"
								 +"dsNotifySubject의 {1}/{2}행 {3}기능을 이용하려면\r\n데이터셋({0}) canrowposchange이벤트를 제거하세요",
								 [ds.name, i+1, form.dsNotifySubject.rowcount, sType]);
			this.trace(sMessage);
			continue;
		}

		switch(sType){
			case "rowChange":
				if(ds.canrowposchange && ds.canrowposchange.length == 0){
					ds.addEventHandler('canrowposchange' ,this.smfValidateDatasetCanRowPosChanged, this);
				}
				break;
			case "masterDetail":
				if(ds.canrowposchange && ds.canrowposchange.length == 0){
					ds.addEventHandler('canrowposchange' ,this.smfValidateDatasetCanRowPosChanged, this);
				}
				break;
		}
	}
};

/**
 * 데이터셋이 변경되었는지
 *
 * @param  Dataset
 * @param  bWithoutChk _chk를 제외할건지
 * @return boolean
 * @see    smfIsUpdate(ds); // true / false
 */
prForm.smfIsUpdate = function(ds, bWithoutCheck, options){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	if(this.isNotNil(bWithoutCheck)) this.astfAssertParamValueIsBooleanType(bWithoutCheck, "bWithoutCheck");
	if(this.isNotNil(options)){
		options.rowIndex = -1;
	}else{
		options = {
			rowIndex: -1,
		};
	}
	
	var sWithoutColumnName = "_chk";
	if(bWithoutCheck == true) sWithoutColumnName = "__not exist column name__";
	if(ds.getDeletedRowCount() > 0 ) return true;
	
	for(var i=0,size=ds.getRowCount(); i<size; i++){
		var rowtype =  ds.getRowType(i);
		switch(ds.getRowType(i)){
			case Dataset.ROWTYPE_INSERT:{
				options.rowIndex = i;
				return true;
			}
			case Dataset.ROWTYPE_UPDATE:
				if(this.smfIsUpdateRow(ds, i, sWithoutColumnName)){
					options.rowIndex = i;
					return true;
				}
				break;
		}
	}

	return false;
};

prForm.smfIsUpdateList = function(aryDataset){
	for(var i=0,size=aryDataset.length; i<size; i++){
		if(this.smfIsUpdate(aryDataset[i])) return true;
	}

	return false;
};

/**
 * (공통만사용)순번셀에 insert, update 구별
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfRenderGridSeqCell = function(ds, sType, nCurRow, nRowType, isPagenation){
	var displayRow = nCurRow + 1;
	var _pageRow = ds.getColumn(nCurRow, "_pageRow");
	if(! (_pageRow == null || _pageRow == undefined)){
		displayRow = parseInt(_pageRow) + 1;// ds.getColumn(nCurRow, "_pageRow");
	}
	
	var insertLable = this.smvConfigurations.datasetRowTypeLabels[2];
	var updateLable = this.smvConfigurations.datasetRowTypeLabels[4];
	var deleteLable = this.smvConfigurations.datasetRowTypeLabels[8];
	
	switch(sType){
		case "text":
			switch(nRowType){
				case Dataset.ROWTYPE_INSERT: return insertLable;
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, nCurRow)){
						return updateLable;
					}else{
						return displayRow;
					}
				case Dataset.ROWTYPE_DELETE:
						return deleteLable;
				default: return displayRow;
			}
		// background : expr를 사용할 수 없음 다른 대안이 필요함
		case "background":
		case "background2":
			switch(nRowType){
				case Dataset.ROWTYPE_INSERT: 
					return "#fad0fd"; 
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, nCurRow)){
						return "#d6e4fa";
					}else{
						return "";
					}


				default: return "";
			}
	}

	return "";
};

/**
 * (공통만사용)State셀에 insert, update 구별
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfRenderGridStateCell = function(ds, sType, nCurRow, nRowType){
	var insertLable = this.smvConfigurations.datasetRowTypeLabels[2];
	var updateLable = this.smvConfigurations.datasetRowTypeLabels[4];
	var deleteLable = this.smvConfigurations.datasetRowTypeLabels[8];

	switch(sType){
		case "text":
			switch(nRowType){
				case Dataset.ROWTYPE_INSERT: return insertLable;
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, nCurRow)){
						return updateLable;
					}else{
						return "";
					}
				case Dataset.ROWTYPE_DELETE:
					return deleteLable;
				default: return "";
			}
		case "background":
		case "background2":
			switch(nRowType){
				case Dataset.ROWTYPE_INSERT: return "#fad0fd"; 
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, nCurRow)){
						return "#d6e4fa";
					}else{
						return "";
					}


				default: return "";
			}
	}

	return "";
};

/**
 * (공통만사용)공통에서 사용하기위해 그리드를 세팅작업.
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfInitGrids = function(){
	var ds = this.smfGetGridListThatHasDataset();
	for(var i=0,size=ds.rowcount; i<size; i++){
		var __grd = this.all[ds.getColumn(i, 'gridName')];
		if(! __grd){
			__grd = this.smfFastFindComponent(this, ds.getColumn(i, 'gridName'));
			
		}
		this.smfUpdateGrid(__grd);
	}
};


/**
 * 그리드의 데이터를 삭제한다
 *
 * @param grid
 * @return boolean
 * @see
 */
prForm.smfClearGridData = function(grid){
	this.astfAssertParamIsGridType(grid, "grid");
	
	// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
	this._smfSetNodataTextToGrid(grid,"데이터를 조회하십시오");
	var ds = this.smfFindComponentInThisContext(grid.binddataset);
    if(this.isNotNil(ds)){
		ds.clearData();
    }
};



/**
 * 그리드의 nodatatext를 세팅한다.(exceptNodatatextControl가 있는 경우 무시)
 *
 * @param objGrid
 * @return 없음
 * @see
 */
prForm._smfSetNodataTextToGrid = function(objGrid,sNodataText)
{
	// 만약 GRID가 null이면 처리를 중단한다.
	if(!objGrid) return;
	
	// 예외처리가 되어 있지 않은 경우, nodatatext를 세팅한다.
	if(objGrid.exceptNodatatextControl!="Y")
	{
		objGrid.set_nodatatext(sNodataText);
	}
}


/**
 * 그리드의 기본세팅
 *
 * @param grid
 * @return boolean
 * @see
 */
prForm.smfUpdateGrid = function(grd, bPagenation){
	this.astfAssertParamIsGridType(grd, "grd");

	// 마우스 스크롤 1로 조정(default 3)
//	if(grd.wheelscrollrow == 3){
//		grd.set_wheelscrollrow(1);
//	}
	if(this.isNil(grd.nodatatext)){
		// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
		this._smfSetNodataTextToGrid(grd,"데이터를 조회하십시오");
	}


	if(grd.binddataset){
		// 데이터셋이 바인드되어있지 않으면 중단한다
		var datasetOfGrid = this.smfFindComponentInThisContext(grd.binddataset);
		
		var gridQualifiedName = this.smfGetQualifiedName(grd);
		this.astfAssertParamValueIsDatasetType(datasetOfGrid, gridQualifiedName+".binddataset");
		
	}


	grd.ownerForm = this;

    for(var n=0,size2=grd.getCellCount('body'); n<size2; n++){
        if(this.isNil(grd.binddataset)) return;

        var sText = grd.getCellProperty('body', n, 'text');

		
        if(sText == "expr:currow+1"){
            grd.setCellProperty('body', n, 'text', "expr:comp.ownerForm.smfRenderGridSeqCell(dataset, 'text', currow, dataset.getRowType(currow), " + bPagenation + ")");
			// background : expr를 사용할 수 없음 다른 대안이 필요함
			if(grd._useUserBg!="Y")
			{
				grd.setCellProperty('body', n, 'background', "expr:comp.ownerForm.smfRenderGridSeqCell(dataset, 'background', currow, dataset.getRowType(currow), " + bPagenation + ")");
				grd.setCellProperty('body', n, 'background2', "expr:comp.ownerForm.smfRenderGridSeqCell(dataset, 'background2', currow, dataset.getRowType(currow), " + bPagenation + ")");
			}
        }else if(sText == "expr:'state'"){
            grd.setCellProperty('body', n, 'text', "expr:comp.ownerForm.smfRenderGridStateCell(dataset, 'text', currow, dataset.getRowType(currow), " + bPagenation + ")");
			// background : expr를 사용할 수 없음 다른 대안이 필요함
            grd.setCellProperty('body', n, 'background', "expr:comp.ownerForm.smfRenderGridStateCell(dataset, 'background', currow, dataset.getRowType(currow), " + bPagenation + ")");
            grd.setCellProperty('body', n, 'background2', "expr:comp.ownerForm.smfRenderGridStateCell(dataset, 'background2', currow, dataset.getRowType(currow), " + bPagenation + ")");
        }
    } 
};

/**
 * Grid의 포맷을 변경한다.
 * 포맷이 변경되면 smfUpdateGrid를 호출해줘야한다.
 *
 * @param grid
 * @return boolean
 * @see
 */
prForm.smfUpdateGridFormat = function(grd, sFormatId){
	grd.set_formatid(sFormatId);
	this.smfUpdateGrid(grd);
};

/**
 * Grid의 Dataset을 변경한다.
 * Dataset이 변경되면 smfUpdateGrid를 호출해줘야한다.
 *
 * @param grid
 * @return boolean
 * @see
 */
prForm.smfUpdateGridBindDataset = function(grd, ds){
	grd.set_binddataset(ds);
	this.smfUpdateGrid(grd);
};

/**
 * 서비스ID로 outDataset에 있는 데이터셋을 BindDataset으로 참조하는 모든 그리드를 array로 반환한다.
 *
 * @param  Service ID
 * @return array
 * @see    smfFindGridsByServiceId('select');
 */
prForm.smfFindGridsByServiceId = function(sServiceId, form){
	if(this.isNil(form)) form = this;

	var sOutDatasets = this.smfStr(((/* [X-LOG] 함수(RequestService)를 찾을 수 없습니다.*/ new RequestService(form, sServiceId)).outDatasets));
	var arySplitDataset = sOutDatasets.split(' ');


	var idx = 0;
	var grids = [];
	for(var i=0,size=arySplitDataset.length; i<size; i++){
		var ds = this[arySplitDataset[i].split('=')[0]];
		var aryGrid = this.smfGridListByDataset(ds);
		
		this.smfHandleList(aryGrid, function (index, item){
			grids.push(item);
		});
	}

	return grids;
};

/**
 * Dataset으로 Grid찾기
 *
 * @param  Service ID
 * @return Grid
 * @see    smfGridByDataset(dsMain);
 */
prForm.smfGridByDataset = function(ds){
	this.smfGetGridListThatHasDataset();
	for(var i=0,size=this._dsGridList.getRowCount(); i<size; i++){
		var __grd = this[this._dsGridList.getColumn(i, 'gridName')];
		if(this.isNil(__grd)) continue; //그리드가 동적으로 삭제될수 있다..
		
		var dsOfGrid = this[__grd.binddataset];
		if(ds == dsOfGrid){
			return __grd;
		}
	}
	return null;
};

/**
 * Dataset으로 GridList 찾기
 *
 * @param  ds : Dataset
 * @return array
 * @see    smfGridListByDataset(dsMain);
 */
prForm.smfGridListByDataset = function(ds){
	if(this.isNil(this["_dsGridList"])){
		this.smfCreateGridDataset();
	}

	this.smfGetGridListThatHasDataset();

	var result = [];
	for(var i=0,size=this._dsGridList.getRowCount(); i<size; i++){
		var gridName = this._dsGridList.getColumn(i, 'gridName');
		var __grd = this[gridName];
		if(! __grd){
			__grd = this.smfFastFindComponent(this, gridName);
		}
		
		if(this.isNil(__grd)) continue; //그리드가 동적으로 삭제될수 있다..

		var datasetNameOrObject = __grd.binddataset;
		if(typeof datasetNameOrObject == "string"){
			var dsOfGrid = this.smfFindComponentInThisContext(__grd.binddataset);
		}else{
			var dsOfGrid = datasetNameOrObject;
		}
		if(ds == dsOfGrid){
			result.push(__grd);
		}
	}

	return result;
};

/**
 * Validation을 체크한다.
 *
 * @param  gridOrContainerOrArray : Grid나 (Div or Tabpage)를 넘긴다.
 * @param  dsValid          : Grid를 넘겼을 경우 validate할 Dataset
 * @return boolean
 * @see    smfValidate(div_search); // Div으로 validate check
 *         smfValidate(grdMain, dsValidGrdMain); // Grid로 validate check
 */
prForm.smfValidate = function(gridOrContainerOrArray, dsValid){
	// Grid, Container, Array
	this.astfAssertParamValueIsInTypes([
		this.astfIsParamInstanceofType(gridOrContainerOrArray, nexacro.Grid),
		this.astfIsContainerComponentType(gridOrContainerOrArray),
		this.astfIsArrayType(gridOrContainerOrArray)
	], gridOrContainerOrArray, "gridOrContainerOrArray", "Grid, Array, Container(Div, Tabpage 등..)");
	
   if(this.isNotNil(dsValid)) this.astfAssertParamValueIsDatasetType(dsValid, "dsValid");

   this.smfApplyData();
   var ary = [];

   if(gridOrContainerOrArray instanceof Array){
       ary = gridOrContainerOrArray;
   }else{
       ary[0] = gridOrContainerOrArray;
   }

	this.smfHandleList(ary, function(i, item){
		if(item instanceof nexacro.Dataset){
			var grd = this.smfGridByDataset(item);
			if(this.isNotNil(grd)){
				this.astfThrowDevException(format("smfValidate함수 사용에러\n"
					 +"smfValidate함수의 첫번째 파라메터에는 Dataset을 사용할 수없습니다.\n"
					 +"(혹시 그리드({0})를 사용하는해야 하는지 확인해보세요)\n"
					 +"Grid나 Div, Tab, Tabpage를 사용하세요",
					 [grd.name]));
			}else{
				this.astfThrowDevException("smfValidate함수 사용에러\n"
					 +"smfValidate함수의 첫번째 파라메터에는 Dataset을 사용할 수없습니다.\n"
					 +"Grid나 Div, Tab, Tabpage를 사용하세요");
			}
			return false;
		}
	});


   for(var i=0,size=ary.length; i<size; i++){
       var oValid = ary[i];
       if(oValid instanceof nexacro.Tab){
           //Tab이면 tabpage만큼 검증한다.
           for(var n=0,sizen=oValid.tabpages.length; n<sizen; n++){
               if(! this.svcfGetValidateCompList(oValid.tabpages[n])) return false;
           }
       }else if(oValid instanceof nexacro.Div || oValid instanceof nexacro.Tabpage){
           if(! this.svcfGetValidateCompList(oValid)) return false;
       }else{
           //그리드
		   var grid = oValid;
		   var datasetOfGrid = this.smfFindComponentInThisContext(grid.binddataset);
		   
           if(! this.smfCheckValidDataset(dsValid)) return false;
           if(! this.svcfDsValidCheck(grid, dsValid)) return false; 
       }
   }
   

   return true;
};



/**
 * 그리드 유효성검사를 수행한다
 * (공통만 사용)
 *
 * @param  grid   : Grid나 (Div or Tabpage)를 넘긴다.
 * @param  dsValid           : Grid를 넘겼을 경우 validate할 Dataset
 * @param  options {
				_chkOption: true일경우 _chk를 체크안한다.(_chk가 체크되도 check하지 마라는 alert_opacity 안띄움)
				messagePrefix : 메시지 접두어
           }
 * @return boolean
 */
prForm.smfValidateGridSave = function(grid, dsValid, options){
	this.astfAssertParamIsGridType(grid, "grid");
	this.astfAssertParamValueIsDatasetType(dsValid, "dsValid");
	if(this.isNotNil(options)) this.astfAssertParamValueIsObjectType(options, "options");
	if(this.isNil(options)) options = {};
	
	var messagePrefix = options.messagePrefix;
	var _chkOption = options._chkOption;
	
	if(this.isNotNil(messagePrefix)) this.astfAssertParamValueIsStringType(messagePrefix, "messagePrefix");
	if(_chkOption == undefined || _chkOption == null) _chkOption = false;
	
	if(this.isNil(options.hasNoupdateDatasMessage)) options.hasNoupdateDatasMessage = "변경된 데이터가 없어서 {0}할 수 없습니다.";
	
	if(this.isNil(messagePrefix)) messagePrefix = "저장";
	this.smfApplyData();

	options.isValid = true;

	var ds = this.smfFindComponentInThisContext(grid.binddataset);
	var showMessageToUser = false;
	var checkOptionResult = this.smfValidateCheckOpion(ds, _chkOption, messagePrefix, showMessageToUser);
	if(checkOptionResult.exitFunction){
		options.isValid = false;
		this.smfLiteralAlert(checkOptionResult.message);
		return false; //함수를 빠져나간다.
	}
	var hasUpdate = checkOptionResult.datasetUpdated;

	if(! hasUpdate){
		options.isValid = false;
		this.smfLiteralAlert(this.format(options.hasNoupdateDatasMessage, [messagePrefix]));
		return false;
	}

	if(this.smfValidate(grid, dsValid)){
		return true;
	}else{
		options.isValid = false;
		return false;
	}
};


/**
 * (공통만사용)Validation 체크하는 데이터셋을 체크한다.
 *
 * @param  dsValid valiation 체크하는 데이터셋
 * @return boolean
 * @see
 *
 */
prForm.smfCheckValidDataset = function(dsValid){
    if(this.notIn(dsValid.rowcount, [1, 2])){
        this.smfDevException(this.format("valid dataset 설정에러\n데이터셋 '{0}'는 rowcount가 1건 또는 2건이어야 합니다", [dsValid.name]));
        return false;
    }

    for(var i=0,size=dsValid.colcount-dsValid.getConstCount(); i<size; i++){
        var info = dsValid.getColumnInfo(i);
        if(this.isNil(info)) continue;
        //if(isNil(dsValid.getColumn(i))) continue;

        if(info.type.toUpperCase() != "STRING"){
            this.smfDevException(this.format("valid dataset 설정에러\n데이터셋 '{0}'의 column '{1}'의 타입을 String형으로 변경하세요", [dsValid.name, info.name]));
            return false;
        }
    }

    return true;
};

/**
 * check가 된 항목이 있는지
 *
 * @param  ds : Dataset
 * @return boolean
 * @see    smfValidateToChecke(dsMyData);
 */
prForm.smfValidateToChecke = function(ds, sMessage, showMessageToUser){
	var sCheckColumnName = "_chk";

	var nRow = ds.findRow(sCheckColumnName, '1');
	if(nRow >= 0){
		//ds.rowposition = nRow;
		if(this.isNil(sMessage)) sMessage = "체크된 데이터가 있습니다.\n저장하려면 체크를 해제하세요.";
		
		if(showMessageToUser == true){
			this.alert(sMessage);
		}
		return true;
	}

	return false;
};

prForm.smfValidHasRunService = function(serviceId, options){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	
	if(this.isNil(options)) options = {
		messagePrefix : "조회",
		message: "조회 먼저 수행해야 합니다"
	};
	
	if(this.isNil(options.message)){
		if(this.isNotNil(options.messagePrefix)){
			options.message = options.messagePrefix + " 먼저 수행해야 합니다";
		}
	}
	
	this.astfAssertParamValueObjectFormat(options, "options", {
		messagePrefix: [true, this.astvStringType],
		message: [true, this.astvStringType]		
	});

	if(! this.smfHasBeenService(serviceId)){
		if(this.isNil(message)){
			var messagePrefix = this.smfGetMessagePrefixByServiceId(serviceId);
			var message = this.format("{0} 먼저 수행해야 합니다", [options.messagePrefix])
		}

		this.smfLiteralAlert(message);
		return false;
	}
	
	return true;
};



/**
 * Dataset.addRow하기전 Validation을 체크한다.
 *
 * 2010.07.19 수정 : Grid는 할필요없어서 제거
 * @param  oGridOrComposite : Grid나 (Div or Tabpage)를 넘긴다.
 * @param  dsValid          : Grid를 넘겼을 경우 validate할 Dataset
 * @return boolean
 * @see    smfValidate(div_search); // Div으로 validate check
 * @see    smfValidate(grdMain, dsValidGrdMain); // Grid로 validate check
 */
prForm.smfAddRowValidate = function(ds, oGridOrComposite, dsValid){
	if(ds.rowposition == -1) return true;
	if(ds.rowcount == 0) return true;

	//Row가 수정안되어있으면 Validation 체크를 하지 않는다.
	if(ds.getRowType(ds.rowposition) == Dataset.ROWTYPE_NORMAL ||
	   ds.getRowType(ds.rowposition) == Dataset.ROWTYPE_EMPTY ||
	   ds.getRowType(ds.rowposition) == Dataset.ROWTYPE_GROUP) return true;
	//_chk를 제외한 Row가 수정안되어있으면 Validation 체크를 하지 않는다.
    if(! this.smfIsUpdateRow(ds, ds.rowposition)) return true;

	if(oGridOrComposite instanceof nexacro.Div || oGridOrComposite instanceof nexacro.Tabpage){
		return this.svcfGetValidateCompList(oGridOrComposite);
	}else{
        //그리드에서는 validation체크 하지 않는다.
	}

	return true;
};



/**
 * grid에 로우를 추가한다
 * 조회가 되지 않았으면 추가되지 않고 안내메시지를 출력한다
 * @param  grid : Grid
 * @param  oComposite : Div나 Tabpage
 * @param  serviceId :

 * @return boolean
 * @see    smfAddGridRow(dsMyData, div_manage);
 */
prForm.smfAddGridRow = function(grid, serviceId, message){
	this.astfAssertParamIsGridType(grid, "grid");
	if(this.isNotNil(serviceId)) this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	if(this.isNotNil(message)) this.astfAssertParamValueIsStringType(message, "message");

	var ds = this.smfFindComponentInThisContext(grid.binddataset);

	if(! this.smfCheckPerformedService(serviceId)) return -1;

	var nRow = ds.addRow();
	// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
	this._smfSetNodataTextToGrid(grid,"데이터가 없습니다");
	
	return nRow;
};

/**
 * 서비스가 수행되었는지 확인한다
 * 
 * @param  serviceId : 확인할 serviceId
 * @param  messsage : 안내메시지
 * @return boolean
 * @see    if(! this.smfCheckPerformedService(serviceId)) return -1;
 */
prForm.smfCheckPerformedService = function(serviceId, message){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	if(this.isNotNil(message)) this.astfAssertParamValueIsStringType(message, "message");
	
	if(! this.smfHasBeenService(serviceId)){
		if(this.isNil(message)){
			var messagePrefix = this.smfGetMessagePrefixByServiceId(serviceId);
			message = this.format("{0} 먼저 수행해야 합니다", [messagePrefix]);
		}

		this.smfLiteralAlert(message);
		return false;
	}
	
	return true;
};


/**
 * Validation을 체크후 Dataset.addRow를 추가한다.
 *
 * @param  grid : Grid
 * @param  oComposite : Div나 Tabpage
 * @param  serviceId :

 * @return boolean
 * @see    smfValidAndAddRow(dsMyData, div_manage);
 */
prForm.smfValidAndAddRow = function(grid, container, serviceId, message){
	this.astfAssertParamIsGridType(grid, "grid");
	this.astfAssertParamValueIsContainerComponentType(container, "container");
	if(this.isNotNil(serviceId)) this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	if(this.isNotNil(message)) this.astfAssertParamValueIsStringType(message, "message");

	var ds = this.smfFindComponentInThisContext(grid.binddataset);
	
	if(! this.smfCheckPerformedService(serviceId)) return -1;
	
	if(! this.smfAddRowValidate(ds, container)) return -1; 
	var nRow = ds.addRow();
	var aryGrid = this.smfGridListByDataset(ds);
	this.smfHandleList(aryGrid, function (index, gridOfItem){
		// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
		this._smfSetNodataTextToGrid(gridOfItem,"데이터가 없습니다");
	});

	return nRow;
};

/**
 * ds의 nRow의 Row를 string column을 ""으로 초기화한다.
 *
 * @param  ds : Dataset
 * @param  nRow : Integer
 * @return rowindex
 * @see    smfInitRow(dsMain, dsMain.rowposition);
 */
prForm.smfInitRow = function(ds, nRow){
	for(var i=0,size=ds.colcount-ds.constcount; i<size; i++){
		var info = ds.getColumnInfo(i);
		if(info.type != "STRING") continue;
		if(ds.getColumn(nRow, i) != undefined) continue;
		ds.setColumn(nRow, i, "");
	}
	return nRow;
};

/**
 * ds의 string column을 ""으로 초기화한다.
 *
 * @param  ds : Dataset
 * @return void
 * @see    smfInitRowList(dsMain);
 */
prForm.smfInitRowList = function(ds){
	ds.set_enableevent(false);
	try{
		for(var i=0,size=ds.rowcount; i<size; i++){
			this.smfInitRow(ds, i);
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		ds.set_enableevent(true);
	}
};






/**
 * tab이 변경되기전 데이터가 변경되었으면 confirm을 수행한다
 *
 * @param  obj Tab의 canchange 이벤트의 obj 객체
 * @param  obj Tab의 canchange 이벤트의 e 객체
 * @param  datasetOrAryDataset Dataset이나 Dataset으로 구성된 Array
 * @param  [sMessage] 변경된 데이터가 있을때 보여줄 메시지
 * @return boolean
 * @see    return this.smfChangingTabConfirm(obj, e, this.dsMain); // dsMain이 변경되었으면 Confirm메시지
 */
 prForm.smfChangingTabConfirm = function(obj, e, datasetOrAryDataset, sMessage){
    if(this.isNil(sMessage)) sMessage = "화면에 변경된 값이 저장되지 않았습니다.\n다른 탭을 선택하시겠습니까?";
    var arrayOfDatasets = [];
    if(datasetOrAryDataset instanceof Array){
		this.astfAssertAllOfElementOfArrayType(datasetOrAryDataset, nexacro.Dataset, "Dataset", "datasetOrAryDataset");
        arrayOfDatasets = datasetOrAryDataset;
    }else if(datasetOrAryDataset instanceof nexacro.Dataset){
        arrayOfDatasets[0] = datasetOrAryDataset;
    }
	
	return this.smfChangingTabConfirmWithResetDatas(obj, e, datasetOrAryDataset, [], sMessage);
};



/**
 * tab이 변경되기전 데이터가 변경되었으면 확인을 수행한다
 * confirm이 OK면 smfChangingTabConfirmWithResetDatas에 선언된 데이터셋을 reset한다
 *
 * @param  obj Tab의 canchange 이벤트의 obj 객체
 * @param  obj Tab의 canchange 이벤트의 e 객체
 * @param  datasetOrAryDataset Dataset이나 Dataset으로 구성된 Array
 * @param  datasetOrAryDatasetForResetData Dataset이나 Dataset으로 구성된 Array이며 Confirm OK시 선언된 데이터셋을 reset한다
 * @param  [sMessage] 변경된 데이터가 있을때 보여줄 메시지
 * @return boolean
 * @see    return this.smfChangingTabConfirmWithResetDatas(obj, e, [this.dsMain]); // dsMain이 변경되었으면 Confirm메시지
 */
 prForm.smfChangingTabConfirmWithResetDatas = function(obj, e, datasetOrAryDataset, datasetOrAryDatasetForResetData, sMessage){
    this.smfApplyData();

    if(this.isNil(sMessage)) sMessage = "화면에 변경된 값이 저장되지 않았습니다.\n다른 탭을 선택하시겠습니까?";
    var ary = [];

    if(datasetOrAryDataset instanceof Array){
		this.astfAssertAllOfElementOfArrayType(datasetOrAryDataset, nexacro.Dataset, "datasetOrAryDataset");

		ary = datasetOrAryDataset;
    }else if(datasetOrAryDataset instanceof nexacro.Dataset){
        ary[0] = datasetOrAryDataset;
    }

	if(datasetOrAryDatasetForResetData == null || datasetOrAryDatasetForResetData == undefined){
		datasetOrAryDatasetForResetData = datasetOrAryDataset;
	}

    var rollbackDatasets = [];
    if(datasetOrAryDatasetForResetData instanceof Array){
		this.astfAssertAllOfElementOfArrayType(datasetOrAryDatasetForResetData, nexacro.Dataset, "datasetOrAryDatasetForResetData");

		rollbackDatasets = datasetOrAryDatasetForResetData;
    }else if(datasetOrAryDatasetForResetData instanceof nexacro.Dataset){
        rollbackDatasets[0] = datasetOrAryDatasetForResetData;
    }

	var hasUpdate = false;
    for(var i=0,size=ary.length; i<size; i++){
        if(this.isNil(ary[i])) continue;
		
        if(this.smfIsUpdate(ary[i])){
			hasUpdate = true;
		}
    }
	
	
	// 변경사항이 없으면 탭을 변경할 수 있다
	if(! hasUpdate) return true;
	
	
	// 변경사항이 있으면 confirm을 수행한다
	var confirmer = this.smfConfirmer();
	
	confirmer.message = sMessage;
	confirmer.onOk = function(){
        // 데이터셋 원복
        for(var i in rollbackDatasets){
            var ds = rollbackDatasets[i];
            ds.reset();
        }

		// 이벤트를 해제하여 탭이 변경가능하도록 설정하고
		// tab index를 변경후 복원
		obj.set_enableevent(false);
		try{
			obj.set_tabindex(e.postindex);
		} catch(e)
		{
			trace("처리중 에러가발생했습니다.");
		}finally{
			obj.set_enableevent(true);
		}
	};
	confirmer.run();

	return false;
};


/**
 * tab이 변경되기전 데이터가 변경되었으면 tab을 변경못하게
 *
 * @param  datasetOrAryDataset Dataset이나 Dataset으로 구성된 Array
 * @param  [sMessage] 변경된 데이터가 있을때 보여줄 메시지
 * @return boolean
 * @see    return smfDoNotChangeTabNotice(dsMain); // dsMain이 변경되었으면 Confirm메시지
           return smfDoNotChangeTabNotice([dsMain, dsSub], "변경된 데이터가 있습니다.\n탭을 변경하려면 저장을 하세요"); // dsMain이 변경되었으면 Confirm메시지
 */
prForm.smfDoNotChangeTabNotice = function(obj, e, datasetOrAryDataset, sMessage){
    this.smfApplyData();
    if(this.isNil(sMessage)) sMessage = "화면에 변경된 값이 저장되지 않았습니다.\n다른탭을 선택하려면 저장하세요";
    var ary = [];

    if(datasetOrAryDataset instanceof Array){
        ary = datasetOrAryDataset;
    }else if(datasetOrAryDataset instanceof nexacro.Dataset){
        ary[0] = datasetOrAryDataset;
    }

    for(var i=0,size=ary.length; i<size; i++){
        if(this.isNil(ary[i])) continue;
        if(this.smfIsUpdate(ary[i])){
            this.smfLiteralAlert(sMessage);
            return false;
        }
    }

    return true;
};


/**
 * (공통만사용)
 *
 */
prForm.smfValidateCheckOpion = function(ds, ChkOption, sMessagePrefix, showMessageToUser){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	this.astfAssertParamValueIsStringType(sMessagePrefix, "sMessagePrefix");
	if(this.isNotNil(showMessageToUser)) this.astfAssertParamValueIsBooleanType(showMessageToUser, "showMessageToUser");
	else
		showMessageToUser = true;
    

	var result = {};
	result.datasetUpdated = false;
	result.exitFunction = false;
    result.message = "";

	switch(ChkOption){
		case true: //_chk를 없는 컬럼 취급한다.
			result.datasetUpdated = this.smfIsUpdate(ds, false);
			break;
		case "ignore": //is upated validation을 무시한다.
			result.datasetUpdated = true;
			break;

		case "accept": //_chk를 데이터칼럼으로 취급한다.
			result.datasetUpdated = this.smfIsUpdate(ds, true);
			break;

		case false :
		case "except": //_chk를 체크하면 안되는걸로 취급한다.
            var message = this.format("체크된 데이터가 있습니다.\n{0}하려면 체크를 해제하세요.", [sMessagePrefix]);
			if(this.smfValidateToChecke(ds, message, showMessageToUser)){
                result.message = message;
				result.exitFunction = true;
			}
			result.datasetUpdated = this.smfIsUpdate(ds, true);
			break;

		case "required":
			if(ds.findRow("_chk", "1") == -1){
                result.message = this.format("그리드에 체크된 데이터가 없습니다.\n{0}하려면 데이터를 체크하세요.", [sMessagePrefix]);

                if(showMessageToUser){
                    this.smfLiteralAlert(result.message);
                }
				result.exitFunction = true;
			}
			result.datasetUpdated = true;
			break;
	}

	return result;
};

/**
/**
 * true/false인지 비교
 *
 * @param  jParamOrBoolean : jParam이나 boolean값을 받아서 result를 판단.
 * @return boolean
*/
prForm.smfIsValid = function(jParamOrBoolean){
	if(jParamOrBoolean == true) return true;
	if(jParamOrBoolean == false) return false;
	if(this.isNil(jParamOrBoolean)) return false;
	return jParamOrBoolean._result == true ? true : false;
};

/**
 * (사용안함)
 * 저장하기전 체크한다.
 *
 * @param  serviceId : 호출할 service Id
 * @param  validations._chkOption   : _chk를 어떻게 처리할지 옵션
                                      except : 체크시 에러
                                      ignore : _chk를 없는 컬럼처럼 판단
                                      accept : _chk를 DataColumn으로 판단.
                                      required : 체크를 해야만 저장가능.
           validations.dataset      : 중복체크, 저장할데이터가 있는지 확인할 Dataset( service의 InDatasets에 등록한 Dataset)

           validations.grid         : validation할 Grid
           validations.validDataset : validation할 Dataset (grid를 넘겼을경우만 필요함)
           validations.div          : validation할 div

           messagePrefix            : confirm메시지에서 보여줄 메시지접두어 [default "저장"] 예)"저장", "복사", "일괄저장"
           showSaveNoDataMessage    : 저장할데이터가 없습니다 보여줄지 여부 [default true]
           showConfirmMessage       : confirm_opacity message보일지 여부 [default true]

 * @return confirmResult
 * @see     //validation체크
			var confirmResult = smfSaveConfirmList("save", {
				validations   : [{ "_chkOption" : "except"  , "dataset" : dsMain,      "grid" : Grid00, "validDataset" : dsMainValid}
								,{ "_chkOption" : "required", "dataset" : dsMain02,    "grid" : Grid03, "validDataset" : dsMainValid02}
								,{ "_chkOption" : "ignore"  , "dataset" : dsMainPopup, "grid" : Grid01, "validDataset" : dsMainPopupValid}
								,{ "_chkOption" : "accept"  , "dataset" : dsSub,       "grid" : Grid02, "validDataset" : dsSubValid}
								,{ "_chkOption" : "except"  , "dataset" : dsManage,    "div"  : Div00 }
								,{ "div"  : Div01 } //dataset을 입력하지 않으면 무조건 validation을 체크한다.
								],
				//기타옵션
				messagePrefix : "저장",    //"저장"하시겠습니까? << "저장" prefix [default "저장"]
				showSaveNoDataMessage : true,   //저장할데이터가 없습니다.
				showConfirmMessage : true //confirm_opacity message보일지 여부 [default true]
			});
			if(! smfIsValid(confirmResult)) return;
*/
prForm.smfSaveConfirmList = function(serviceId, jParams){
	return;
	var result = { _result : false };
	// if(! this.smfHasService(serviceId)) return result;
	var aryValidation = ! this.isNil(jParams.validations) ? jParams.validations : [];
	var messagePrefix = ! this.isNil(jParams.messagePrefix) ? jParams.messagePrefix : "저장";
	var showConfirmMessage = jParams.showConfirmMessage != undefined ? jParams.showConfirmMessage : true;
	var showSaveNoDataMessage = jParams.showSaveNoDataMessage != undefined ? jParams.showSaveNoDataMessage : true;

	this.smfAssertExistsServiceId(serviceId)

	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "confirmType", "save");


	////////////////////////////검증//////////////////////////
	var bIllegalArgument = false;
	var sIllegalArgumentMessage = "";

	if(! (aryValidation instanceof Array)){
		sIllegalArgumentMessage += "validations 항목은 Array타입이어야 합니다.\n";
		bIllegalArgument = true;
	}

	if( this.notIn(showConfirmMessage, [true, false])){
		sIllegalArgumentMessage += "showConfirmMessage 항목은 boolean 타입이어야 합니다.(true/false).\n";
		bIllegalArgument = true;
	}

	//validations 확인
	for(var i=0,size=aryValidation.length; i<size; i++){
		var j = aryValidation[i];

		for(var sParamName in j){
			if(this.notIn(sParamName, ["_chkOption", "dataset", "div", "grid", "validDataset"])){
				sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 잘못된 파라메터입니다('{2}').\n", [i+1, size, sParamName]);
				bIllegalArgument = true;
			}
		}

		var div = j.div;
		var grid = j.grid;

		if(this.isNotNil(j.dataset) &&  !(j.dataset instanceof nexacro.Dataset)){
			sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 dataset항목은 Dataset이어야 합니다.\n", [i+1, size]);
			bIllegalArgument = true;
		}

		if(this.isNotNil(j.dataset) && this.notIn(j._chkOption, ["ignore", "accept", "except", "required"])){
			sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 _chkOption항목은 [ignore,accept,except]중 하나여야 합니다.\n", [i+1, size]);
			bIllegalArgument = true;
		}

		if(this.isNil(div) && this.isNil(grid)){
			sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 div 나 grid 항목중 반드시 하나를 입력하세요. \n", [i+1, size]);
			bIllegalArgument = true;
		}else if(! this.isNil(div)){
			if((!(div instanceof nexacro.Div)) && (!(div instanceof nexacro.Tabpage)) ){
				sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 div항목은 div나 Tabpage 이어야합니다. \n", [i+1, size]);
				bIllegalArgument = true;
			}
		}else if(! this.isNil(grid)){
			if(!(grid instanceof nexacro.Grid)){
				sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 grid항목은 grid이어야합니다. \n", [i+1, size]);
				bIllegalArgument = true;
			}

			if(this.isNil(j.validDataset)){
				sIllegalArgumentMessage += this.format("validations항목중 [{0}/{1}]번째 validDataset 항목은 Dataset이어야 합니다.\n", [i+1, size]);
				bIllegalArgument = true;
			}
		}
	}

	if(bIllegalArgument){
		sIllegalArgumentMessage = "개발에러\nsmfSaveConfirmList함수 사용중, 잘못된 파라메터가 존재합니다.\n\n" + sIllegalArgumentMessage;
		this.trace(sIllegalArgumentMessage);
		this.astfThrowDevException(sIllegalArgumentMessage);
		return result;
	}
	//////////////////////////검증완료////////////////////////





	this.smfApplyData();
	var hasUpdate = false;
	for(var i=0,size=aryValidation.length; i<size; i++){
		var j = aryValidation[i];
		var ds = j.dataset;
		var bDatasetUpdated = false;
		var checkOptionResult;
		if(! this.isNil(ds)){
			checkOptionResult = this.smfValidateCheckOpion(ds, j._chkOption, messagePrefix);
			if(checkOptionResult.exitFunction) return result; //함수를 빠져나간다.
			bDatasetUpdated = checkOptionResult.datasetUpdated;
		}

		//변경이 있을때 or Dataset == null validation체크한다.
		var oGridOrDiv;
		if(! this.isNil(j.div)){
			oGridOrDiv = j.div;
		}else{
			oGridOrDiv = j.grid;
		}

		if((oGridOrDiv instanceof nexacro.Grid)){
			if(!this.smfValidate(oGridOrDiv, j.validDataset)) return result;
		}else{
			if(!this.smfValidate(oGridOrDiv)) return result;
		}

		if(! this.isNil(ds)){
			if(this.smfIsDuplicate(ds)) return result;
		}

		hasUpdate = hasUpdate || bDatasetUpdated;
	}


	if(showSaveNoDataMessage == true){
		if(hasUpdate != true){
			this.smfLiteralAlert(this.format("{0}할 데이터가 없습니다.", [messagePrefix]));
			return result;
		}
	}

	if(showConfirmMessage == true){
		if(! this.confirm_opacity(this.format("{0}하시겠습니까?", [messagePrefix]))){
			return result;
		}
	}

	result._result = true;
	return result;
};


/**
 * 서비스에 등록된 데이터셋들의 중복을 검증한다.
 * 기능을 사용하려면 Dataset에 ConstColumn에 keys컬럼을 만들고
 * 키가되는 컬럼아이디를 column1,column2 정의한다.
 *
 * @param  sServiceId : 서비스아이디
 * @return boolean (중복일경우 true)
 * @see    smfIsDuplicateList('save');
 */
prForm.smfIsDuplicateList = function(sServiceId){
	var aryDataset = (new RequestService(this, sServiceId)).toArrayByInDatasets();

	for(var i=0,size=aryDataset.length; i<size; i++){
		if(this.smfIsDuplicate(aryDataset[i])) return true;
	}

	return false;
};

/**
 * 데이터셋의 중복을 검증한다.
 * 기능을 사용하려면 Dataset에 ConstColumn에 keys컬럼을 만들고
 * 키가되는 컬럼아이디를 column1,column2 정의한다.
 * ConstColumn keys 정의 : columnText:"상황일자, 주야과정구분"staffSittnYmd,dghtCrseScCode
 *
 * @param  ds : Dataset
 * @return boolean (중복일경우 true)
 * @see    smfIsDuplicateList('save');
 */
 prForm.smfIsDuplicate = function(ds, options){
	if(this.isNil(options)) options = {
		noticeToUser: true,
	};
    var sKeys = this.smfStr(ds.getConstColumn('keys'));
    if(this.isNil(sKeys)) return false;

    var sColumnMessage = "";
    if(sKeys.indexOf('columnText:"') == 0){
        sColumnMessage = sKeys.substring(sKeys.indexOf('"'), sKeys.lastIndexOf('"')+1);
        sColumnMessage = this.format("\n(항목 : {0})", [sColumnMessage]);
        sKeys = sKeys.substr(sKeys.lastIndexOf('"')+1); 
    }

    var aryKey = sKeys.split(',');

    for(var i=ds.rowcount-1; i>=0; i--){
        if(! this.smfIsUpdateRow(ds, i)) continue;
        var sSearchText = "currow != " + i + " ";
        for(var n=0,size2=aryKey.length; n<size2; n++){
			// dataset.parent = form
            sSearchText += "&& dataset.parent.smfStr(" + aryKey[n] + ") == '" + this.smfStr(ds.getColumn(i, aryKey[n])) + "'";
        }

        var nRow = ds.findRowExpr(sSearchText);
        if(nRow > -1){
            ds.set_rowposition(this.smfSmartPosRow(ds, nRow, i));
            var sMessage = this.format("{1}행과 {2}행이 중복됩니다.{0}\n확인후 다시 시도하세요.",
                                  [sColumnMessage, nRow+1, i+1]);
								  
			options.message = sMessage;
			if(options.noticeToUser){
				this.smfLiteralAlert(sMessage);
			}
            return true;
        }
    }

    return false;
};


/**
 * 두개의 데이터셋의 중복을 검증한다.
 *
 * @param  dsBase : Dataset
 * @param  dsSub  : Dataset
 * @param  aryColumn  : 컬럼리스트
 * @param  sMessage  : 중복시 사용자에게 보여줄 column메시지

 * @return boolean (중복일경우 true)
 * @see    smfIsDuplicateTo(dsMain, dsMainPopup, ["ay","dghtCrseScCode"], "년도, 주야과정구분");
 */
prForm.smfIsDuplicateTo = function(dsBase, dsSub, aryColumn, sMessage){
    var result = {
        isDup : false
       ,message : ""
       ,upRow : -1
       ,downRow : -1
       ,dupRow : -1
    };


    var sColumnMessage = "";
    if(! this.isNil(sMessage)){
        sColumnMessage = "중복된 항목 : '" + sMessage + "'\n";
    }

	for(var i=dsSub.rowcount-1; i>=0; i--){
        if(dsSub.getRowType(i) == Dataset.ROWTYPE_EMPTY ||
           dsSub.getRowType(i) == Dataset.ROWTYPE_NORMAL ||
           dsSub.getRowType(i) == Dataset.ROWTYPE_GROUP ) continue;

		var sSearchText = "1 == 1 ";
		for(var n=0,size2=aryColumn.length; n<size2; n++){
			sSearchText += "&& dataset.parent(" + aryColumn[n] + ") == '" + this.smfStr(dsSub.getColumn(i, aryColumn[n])) + "'";
		}

		var nRow = dsBase.findRowExpr(sSearchText);
		if(nRow > -1){
            result.isDup = true;
			result.dupRow = nRow;
			result.message = this.format("{1}행에 이미 데이터가 있습니다.\n{0}확인후 다시 시도하세요.",
                                  [sColumnMessage, nRow+1, i+1]);
			break;
		}
	}

	return result;
};

/**
 * 데이터셋의 중복을 검증한다.
 *
 * @param  ds : Dataset
 * @param  aryColumn  : 컬럼리스트
 * @return JSON : isDup -> true면 중복 , upRow -> 중복된 상위 로우 downRow -> 중복된 하위 로우 gotoRow -> rowposition을 수정할 로우
 * @see    var jDupResult = smfIsDuplicateColumns(dsMain, ["ay","dghtCrseScCode"]);
           if(jDupResult.isDup){
               dsMain.rowposition = jDupResult.row2;
               alert_opacity("중복발생");
           }
 */
prForm.smfIsDuplicateColumns = function(ds, aryColumn, fncAcceptRow){
    var result = {
        isDup : false
       ,upRow : -1
       ,downRow : -1
       ,dupRow : -1
    };

	for(var i=ds.rowcount-1; i>0; i--){
		if(fncAcceptRow != undefined){
			if(false == fncAcceptRow(i)) continue;
		}

		var sSearchText = "1 == 1 ";
		for(var n=0,size2=aryColumn.length; n<size2; n++){
			sSearchText += "&& dataset.parent.smfStr(" + aryColumn[n] + ") == '" + this.smfStr(ds.getColumn(i, aryColumn[n])) + "'";
		}

		var nRow = ds.findRowExpr(sSearchText, 0, i);
		if(nRow > -1){
            result.isDup = true;
            result.upRow = nRow;
            result.downRow = i;
            result.dupRow = this.smfSmartPosRow(ds, nRow, i);

            break;
		}
	}

	return result;
};

/**
 * (공통만사용)
 *
 * @param  ds : Dataset
 * @param  nUpRow : 위 row
 * @param  nDownRow : 아래 row
 * @return integer 가장 적합한 row를 리턴
 */
prForm.smfSmartPosRow = function(ds, nUpRow, nDownRow){
    var isModifyUpRow = ds.getRowType(nUpRow);
    var isModifyDownRow = ds.getRowType(nDownRow);

    if(isModifyDownRow == Dataset.ROWTYPE_INSERT) return nDownRow;
    if(isModifyUpRow == Dataset.ROWTYPE_INSERT)return nUpRow;

    if(isModifyDownRow == Dataset.ROWTYPE_UPDATE) return nDownRow;
    if(isModifyUpRow == Dataset.ROWTYPE_UPDATE) return nUpRow;

    return nDownRow;
};

/**
 * ds의 nRow로우가 수정됬는지 확인한다.
 * @param  ds Dataset
 * @return boolean (중복일경우 true)
 * @see    smfIsUpdateRow('save');
 */
prForm.smfIsUpdateRow = function(ds, nRow, sCheckColumnName){
	if(this.isNil(sCheckColumnName)) sCheckColumnName = '_chk';

	switch(ds.getRowType(nRow)){
		case Dataset.ROWTYPE_INSERT:
		case Dataset.ROWTYPE_DELETE: return true;

		case Dataset.ROWTYPE_UPDATE:
			for(var i=0,size=ds.getColCount(); i<size; i++){
				var sColumnName = ds.getColID(i);
				if(sColumnName == sCheckColumnName) continue;

				if(this.smfStr(ds.getColumn(nRow, sColumnName)) != this.smfStr(ds.getOrgColumn(nRow, sColumnName))){
					return true;
				}
			}
			return false;

		default: return false;
	}
};

/**
 * (사용안함)
 * Insert된 Row를 delete RowType으로 변경한다.
 * @param  ds Dataset
 * @return boolean (중복일경우 true)
 * @see
 * @deprecated applyChange가 예상대로 동작하지 않아서 사용불가
 */
prForm.smfInsertToDelete = function(ds){
	//사용하지 마세요..ㅠㅠ
	throw "사용안함";
	var aryInsertRow = [];
	var idx = 0;
	for(var i=0,size=ds.rowcount; i<size; i++){
		if(Dataset.ROWTYPE_INSERT == ds.getRowType(i)){
			aryInsertRow[idx++] = i;
		}
	}

	ds.applyChange();
	for(var i=aryInsertRow.length-1; i>=0; i--){
		ds.deleteRow(i);
	}
};

/**
 * 삭제 컨폼2
 * @param  ds : Dataset
 * @return bboolean
 * @see    if(! smfDeleteConfirm2(dsMain)) return;
 */
prForm.smfDeleteConfirm2 = function(ds, fncValidate, bDeleteRows, sMessage){
	this.smfDevException("폐기된 함수 : smfDeleteConfirm\nsmfDeleteFormConfirm 또는 smfDeleteGridConfirm 함수를 사용하세요");
	return;

	this.smfAssertExistsServiceId(serviceId);
	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "confirmType", "save");
	if(this.isNil(sMessage)) sMessage = "삭제하시겠습니까?";

	if(ds.getColumnInfo(0) == null || ds.getColumnInfo(0).name != "_chk"){
		this.smfDevException(this.format("Dataset 표준설정에러({0})\n삭제하려는 Dataset 0번째 컬럼은 반드시 _chk이어야 합니다.", [ds.name]));
		return false;
	}

	if(ds.rowcount == 0){
		this.smfLiteralAlert("삭제할 데이터가 없습니다.");
		return false;
	}

	if(fncValidate != undefined && fncValidate != null){
		if( false == fncValidate(ds) ){
			return false;
		}
	}

	if(this.confirm_opacity(sMessage)){
		if(true == bDeleteRows){
			this.smfDeleteCheckedRows(ds);
		}
	}else{
		return false;
	}

	return true;
};

/**
 * 삭제 컨폼
 * @param  serviceId
 * @param  fncValidate : 사용자 validate함수
 * @param  bDeleteRows : false로 넘기면 row가 delete되지 않는다.
 * @return boolean
 * @see    if(! smfDeleteConfirm("delete")) return;
 *         if(! smfDeleteConfirm("delete", null, false)) return;
 *         if(! smfDeleteConfirm("delete", fnDeleteValid)) return;
 */
prForm.smfDeleteConfirm = function(serviceId, fncValidate, bDeleteRows, sMessage){
	this.smfDevException("폐기된 함수 : smfDeleteConfirm\nsmfDeleteFormConfirm 또는 smfDeleteGridConfirm 함수를 사용하세요");
	return;
	this.smfAssertExistsServiceId(serviceId);
	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "confirmType", "save");


	// if(! this.smfHasService(serviceId)) return false;
	if(this.isNil(sMessage)) sMessage = "삭제하시겠습니까?";

	if(bDeleteRows == undefined || bDeleteRows == null) bDeleteRows = true;
	var sCheckColumnName = '_chk';
	var aryDataset = [];
	aryDataset = (new RequestService(this, serviceId)).toArrayByInDatasets();

	var aryInsertCount = []; //추가된 행의 갯수
	var aryUpdateCount = []; //수정된 행의 갯수

	var aryCheckedCount = []; //check된 갯수
	var aryNormalAndCheckCount = []; //normal행이 체크된갯수
	var aryInsertAndCheckCount = []; //추가행이 체크된갯수
	var aryUpdateAndCheckCount = []; //수정행이 체크된갯수

	for(var n=0,count=aryDataset.length; n<count; n++){
		if(n != 0) continue;//데이터셋 처음것만
		var ds = aryDataset[n];

		if(ds.getColumnInfo(0) == null || ds.getColumnInfo(0).name != "_chk"){
			this.smfDevException(this.format("Dataset 표준설정에러({0})\n삭제하려는 Dataset 0번째 컬럼은 반드시 _chk이어야 합니다.", [ds.name]));
			return false;
		}


		aryInsertCount[n] = 0;
		aryUpdateCount[n] = 0;
		aryCheckedCount[n] = 0;
		aryNormalAndCheckCount[n] = 0;
		aryInsertAndCheckCount[n] = 0;
		aryUpdateAndCheckCount[n] = 0;

		//데이터셋에
		for(var i=ds.getRowCount()-1; i>=0; i--){
			var bChecked = false;
			if("1" == ds.getColumn(i, sCheckColumnName)){
				bChecked = true;
				aryCheckedCount[n]++;
			}

			switch(ds.getRowType(i)){
				case Dataset.ROWTYPE_INSERT:
					aryInsertCount[n]++;
					if(bChecked) aryInsertAndCheckCount[n]++;
					break;
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, i)){
						if(! bChecked) aryUpdateCount[n]++;
						else aryUpdateAndCheckCount[n]++;
					}else{
						if(bChecked) aryNormalAndCheckCount[n]++;
					}
					break;
			 }
		}

// 		alert_opacity(format("aryInsertCount[{0}] = {1}\n"
// 		            +"aryUpdateCount[{0}] = {2}\n"
// 		            +"aryCheckedCount[{0}] = {3}\n"
// 		            +"aryNormalAndCheckCount[{0}] = {4}\n"
// 		            +"aryInsertAndCheckCount[{0}] = {5}\n"
// 		            +"aryUpdateAndCheckCount[{0}] = {6}\n"
// 		            +"rowcount = {7}"
// 		, [n, aryInsertCount[n],
// 		   aryUpdateCount[n],
// 		   aryCheckedCount[n],
// 		   aryNormalAndCheckCount[n],
// 		   aryInsertAndCheckCount[n],
// 		   aryUpdateAndCheckCount[n],
// 		   ds.rowcount
// 		   ]));

		// 삭제될 내역이 없는 경우는 false
		if(aryCheckedCount[n] == 0){
			this.smfLiteralAlert("삭제할 데이터를 체크하세요.");
			return false;
		}
	}

	var bShowDeleteMessage = true;
	var bShowConfirmModify = false;
	var bShowConfirmDelete = false;

	for(var n=0,count=aryDataset.length; n<count; n++){
		//insert한행만 선택해서 삭제하는경우
		if(aryCheckedCount[n] != aryInsertAndCheckCount[n]){
			bShowDeleteMessage = false;
		}

		//insert 또는 update한 행을 check한경우
		if(aryInsertAndCheckCount[n] > 0 || aryUpdateAndCheckCount[n] > 0){
			bShowConfirmModify = true;
		}

		//
		if(aryNormalAndCheckCount[n] > 0 &&( aryInsertCount > 0 || aryUpdateCount > 0)){
			bShowConfirmModify = true;
		}
	}

	if(bShowDeleteMessage){
		for(var n=0,count=aryDataset.length; n<count; n++){
			var ds = aryDataset[n];
			for(var i=ds.getRowCount()-1; i>=0; i--){
				//체크한행과 등록된행을 삭제한다.
				if("1" == ds.getColumn(i, sCheckColumnName)){
					ds.deleteRow(i);
				}
			}
		}

		this.smfLiteralAlert("삭제되었습니다.");
		return false;
	}

	if(fncValidate != undefined && fncValidate != null){
		if( false == fncValidate(aryDataset[0]) ){
			return false;
		}
	}

	if(bShowConfirmModify){
		if(this.confirm_opacity(sMessage + "\r\n등록 또는 수정된 항목은 반영되지 않으며\n삭제처리만 반영됩니다.")){
			for(var n=0,count=aryDataset.length; n<count; n++){
				if(bDeleteRows)this.smfDeleteCheckedRows(aryDataset[n]);

				//등록한 행도 모두 지운다.
				for(i=aryDataset[n].rowcount-1; i>=0; i--){
					if(ds.getRowType(i) == Dataset.ROWTYPE_INSERT)
						ds.deleteRow(i);
				}
			}
			return true;
		}else{
			return false;
		}
	}else{
		if(this.confirm_opacity(sMessage)){
			for(var n=0,count=aryDataset.length; n<count; n++){
				if(bDeleteRows)this.smfDeleteCheckedRows(aryDataset[n]);
			}
			return true;
		}else{
			return false;
		}
	}
};



/**
 * 폼삭제 컨폼
 * @param  serviceId 서비스ID
 * @param  container : 유효성검사를 수행할 인풋들을 담고 있는 Div나 Tabpage
 * @param  messagePrefix : 메시지접두어 (default “삭제”)
 * @param  options : {
			
           }
 * @return boolean
 * @see    if(! smfDeleteFormConfirm("delete", this.div_main)) return;
 *         if(! smfDeleteFormConfirm("delete", this.div_main, "제거하시겠습니까?")) return;
 */
prForm.smfDeleteFormConfirm = function(serviceId, container, messagePrefix, options){
	if(this.isNil(options)) options = {};
	
	var containerOrArrayOfContainer = container;
	
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	if(this.isNotNil(containerOrArrayOfContainer)){
		this.astfAssertParamValueIsInTypes(
			[
				this.astfIsContainerComponentType(containerOrArrayOfContainer),
				this.astfIsAnonymounsFunction(containerOrArrayOfContainer)
			], containerOrArrayOfContainer, 
			"containerOrArrayOfContainer",
			"container, Array<Container>"
		);
	}
	this.astfAssertParamValueIsObjectType(options, "options");
	
	this.smfAssertExistsServiceId(serviceId);
	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "confirmType", "save");
	
	//
	var nRow = this.dsService.findRow("id", serviceId);
	// deleteFormConfirm은 inDatasets의 옵션을 변경하지 않는다
	this.dsService.setColumn(nRow, "keepInDatasetOptions", "Y");
	 
	this.smfAttachReferenceContainerComponentToService(serviceId, containerOrArrayOfContainer);
	
	if(this.isNil(options.message)) options.messagePrefix = "삭제";
	if(this.isNil(options.message)) options.message = "삭제하시겠습니까?";
	
	if(this.isNotNil(messagePrefix)){
		options.messagePrefix = messagePrefix;
	}

	options.message = options.messagePrefix + "하시겠습니까?";
	
	
	if(this.isNotNil(containerOrArrayOfContainer)){
		if(! this.smfValidate(containerOrArrayOfContainer)) return false;		
	}

	if(! this.confirm(options.message)){
		return false;
	}

	return true;
};



/**
 * 삭제 컨폼
 * @param  serviceId
 * @param  fncValidate : 사용자 validate함수
 * @param  bDeleteRows : false로 넘기면 row가 delete되지 않는다.
 * @return boolean
 * @see    if(! smfDeleteGridConfirm("delete")) return;
 *         if(! smfDeleteGridConfirm("delete", null, false)) return;
 *         if(! smfDeleteGridConfirm("delete", this.fnDeleteValid)) return;
 */
prForm.smfDeleteGridConfirm = function(serviceId, grid, fncValidate, bDeleteRows, sMessage){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	this.astfAssertParamIsGridType(grid, "grid");
	
	// if(! this.smfHasService(serviceId)) return false;
	if(this.isNil(sMessage)) sMessage = "삭제하시겠습니까?";
	
	this.smfAssertExistsServiceId(serviceId);
	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "confirmType", "delete");	
  
	if(bDeleteRows == undefined || bDeleteRows == null) bDeleteRows = true;
	var sCheckColumnName = '_chk';
	var aryDataset = (new RequestService(this, serviceId)).toArrayByInDatasets();

	var aryInsertCount = []; //추가된 행의 갯수
	var aryUpdateCount = []; //수정된 행의 갯수

	var aryCheckedCount = []; //check된 갯수
	var aryNormalAndCheckCount = []; //normal행이 체크된갯수
	var aryInsertAndCheckCount = []; //추가행이 체크된갯수
	var aryUpdateAndCheckCount = []; //수정행이 체크된갯수

	for(var n=0,count=aryDataset.length; n<count; n++){
		if(n != 0) continue;//데이터셋 처음것만
		var ds = aryDataset[n];

		if(ds.getColumnInfo(0) == null || ds.getColumnInfo(0).name != "_chk"){
			this.smfDevException(this.format("Dataset 표준설정에러({0})\n삭제하려는 Dataset 0번째 컬럼은 반드시 _chk이어야 합니다.", [ds.name]));
			return false;
		}


		aryInsertCount[n] = 0;
		aryUpdateCount[n] = 0;
		aryCheckedCount[n] = 0;
		aryNormalAndCheckCount[n] = 0;
		aryInsertAndCheckCount[n] = 0;
		aryUpdateAndCheckCount[n] = 0;

		//데이터셋에
		for(var i=ds.getRowCount()-1; i>=0; i--){
			var bChecked = false;
			if("1" == ds.getColumn(i, sCheckColumnName)){
				bChecked = true;
				aryCheckedCount[n]++;
			}

			switch(ds.getRowType(i)){
				case Dataset.ROWTYPE_INSERT:
					aryInsertCount[n]++;
					if(bChecked) aryInsertAndCheckCount[n]++;
					break;
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, i)){
						if(! bChecked) aryUpdateCount[n]++;
						else aryUpdateAndCheckCount[n]++;
					}else{
						if(bChecked) aryNormalAndCheckCount[n]++;
					}
					break;
			 }
		}

// 		alert_opacity(format("aryInsertCount[{0}] = {1}\n"
// 		            +"aryUpdateCount[{0}] = {2}\n"
// 		            +"aryCheckedCount[{0}] = {3}\n"
// 		            +"aryNormalAndCheckCount[{0}] = {4}\n"
// 		            +"aryInsertAndCheckCount[{0}] = {5}\n"
// 		            +"aryUpdateAndCheckCount[{0}] = {6}\n"
// 		            +"rowcount = {7}"
// 		, [n, aryInsertCount[n],
// 		   aryUpdateCount[n],
// 		   aryCheckedCount[n],
// 		   aryNormalAndCheckCount[n],
// 		   aryInsertAndCheckCount[n],
// 		   aryUpdateAndCheckCount[n],
// 		   ds.rowcount
// 		   ]));

		// 삭제될 내역이 없는 경우는 false
		if(aryCheckedCount[n] == 0){
			this.smfLiteralAlert("삭제할 데이터를 체크하세요.");
			return false;
		}
	}

	var bShowDeleteMessage = true;
	var bShowConfirmModify = false;
	var bShowConfirmDelete = false;

	for(var n=0,count=aryDataset.length; n<count; n++){
		//insert한행만 선택해서 삭제하는경우
		if(aryCheckedCount[n] != aryInsertAndCheckCount[n]){
			bShowDeleteMessage = false;
		}

		//insert 또는 update한 행을 check한경우
		if(aryInsertAndCheckCount[n] > 0 || aryUpdateAndCheckCount[n] > 0){
			bShowConfirmModify = true;
		}

		//
		if(aryNormalAndCheckCount[n] > 0 &&( aryInsertCount > 0 || aryUpdateCount > 0)){
			bShowConfirmModify = true;
		}
	}

	if(bShowDeleteMessage){
		for(var n=0,count=aryDataset.length; n<count; n++){
			var ds = aryDataset[n];
			for(var i=ds.getRowCount()-1; i>=0; i--){
				//체크한행과 등록된행을 삭제한다.
				if("1" == ds.getColumn(i, sCheckColumnName)){
					ds.deleteRow(i);
				}
			}
		}

		this.smfLiteralAlert("삭제되었습니다.");
		return false;
	}

	if(fncValidate != undefined && fncValidate != null){
		if( false == fncValidate(aryDataset[0]) ){
			return false;
		}
	}

	if(bShowConfirmModify){
		if(this.confirm_opacity(sMessage + "\r\n등록 또는 수정된 항목은 반영되지 않으며\n삭제처리만 반영됩니다.")){
			for(var n=0,count=aryDataset.length; n<count; n++){
				if(bDeleteRows)this.smfDeleteCheckedRows(aryDataset[n]);

				//등록한 행도 모두 지운다.
				for(i=aryDataset[n].rowcount-1; i>=0; i--){
					if(ds.getRowType(i) == Dataset.ROWTYPE_INSERT)
						ds.deleteRow(i);
				}
			}
			return true;
		}else{
			return false;
		}
	}else{
		if(this.confirm_opacity(sMessage)){
			for(var n=0,count=aryDataset.length; n<count; n++){
				if(bDeleteRows)this.smfDeleteCheckedRows(aryDataset[n]);
			}
			return true;
		}else{
			return false;
		}
	}
};

/**
 * check된 row들을 삭제한다.
 * @param  Dataset
 * @return void
 * @see    smfDeleteCheckedRows(dsHisScrPe0M2SVO_hisscrpe0M2DVOList);
 */
prForm.smfDeleteCheckedRows = function(ds, sCheckColumnName) {
	sCheckColumnName = "_chk";
	//insert된 row 처리하지 않기 위한 로직
	//alert_opacity(ds.GetRowCount()-1);
// 	ds.enableevent = false;
// 	try{
		for(var i=ds.getRowCount()-1; i>=0; i--){
			//RowType이 insert인 row 제거(OrgBuff로 이동 안됨)
			switch(ds.getRowType(i)){
				case Dataset.ROWTYPE_INSERT:
					ds.deleteRow(i);
					break;
			}
		}

		//Normal type으로 변경
		//등록 또는 수정된 로우가 Normal로 변경된다.
		ds.applyChange();

		//체크된 Row 삭제(OrgBuff로 이동)
		this.smfRemoveCheckedRows(ds, sCheckColumnName);
// 	}finally{
// 		ds.enableevent = true;
// 	}
};

/**
 * 그리드 내용 삭제(체크된 row)
 * @param  Dataset
 * @param  check column id
 * @return void
 * @see    smfRemoveCheckedRows(ds, '_chk');
 */
prForm.smfRemoveCheckedRows = function(ds, sCheckColumnName) {
	for(var i=ds.rowcount-1; i>-1; i--) {
		if("1" == ds.getColumn(i, sCheckColumnName)) {
			ds.deleteRow(i);
		}
	}
};

/**
 * (사용안함) 데이터셋의 row가 변경될때 confirm_opacity
 * smfConfirm에서 확인/취소에 따른 처리를 수행할 수없음
 *
 * @param  aryDetailDataset array of Dataset
 * @return boolean
 * @see
 */
prForm.smfValidateMasterDetail = function(aryDetailDataset, sMessage){
	if(this.isNil(sMessage)) sMessage = "수정된 항목이 있습니다.\r\n다른 행을 선택하시겠습니까?";

	for(var i=0,size=aryDetailDataset.length; i<size; i++){
		var ds = aryDetailDataset[i];
		if(this.smfIsUpdate(ds)){
			return true == this.confirm_opacity(sMessage);
		}
	}

	return true;
};

/**
 * 데이터셋의 row가 변경될때 confirm_opacity
 * @param  ds : Dataset
 * @param  e : Event
 * @param  div : validation체크할 div
 * @return boolean
 * @see
 */
prForm.smfValidateRowChange = function(ds, e, div){
	if(e.oldrow >= ds.rowcount) return true;
	if(e.oldrow == -1) return true;
	switch(ds.getRowType(e.oldrow)){
		case Dataset.ROWTYPE_EMPTY: return true;
		case Dataset.ROWTYPE_NORMAL: return true;
		case Dataset.ROWTYPE_GROUP: return true;
	}
 	if(! this.smfIsUpdateRow(ds, e.oldrow)) return true;
 	return this.svcfGetValidateCompList(div);
};


/**
 * text를 formatting한다.
 *
 * @param  sFormat   : 포매팅할 문자열
 * @param  aryParams : 파라메터
 * @return String
 * @see    alert_opacity(Format("{0} x {1} = {2}", [10, 2, 10 * 2])); // 10 x 2 = 20
 */
prForm.format = function(sFormat, aryParams){
	if(this.isNil(aryParams)) aryParams = [];
	
	for(var i=0, size=aryParams.length; i<size; i++){
		sFormat = nexacro.replaceAll(sFormat,"\{" + i + "\}" , aryParams[i]);
	}

	return sFormat;
};

/**
 * text를 formatting한다.
 *
 * @param  formatedText   : 포매팅할 문자열
 * @param  dataset : 데이터셋
 * @param  row : rowindex
 * @return String
 * @see    alert_opacity(dformat("{userNameDecpt}:({jikwi})", dsMain, 0)); // 홍길동:(과장)
 */
prForm.dformat = function(formatedText, dataset, row){
	formatedText = this.smfStr(formatedText);
	var matchedList = formatedText.match(/{\w+}/g);
	if(matchedList == null) return formatedText;

	for(var i=0,size=matchedList.length; i<size; i++){
		//{columnName} -> columnName
		var columnName = matchedList[i].substring(1, matchedList[i].length-1);

		var columnValue = this.smfStr(dataset.getColumn(row, columnName));
		formatedText = nexacro.replaceAll(formatedText,"\{" + columnName + "\}" , columnValue);
	}

	return formatedText;
};


/**
 * nvl를 수행한다
 *
 * @param  value 기준값
 * @param  defaultValue
 * @return String
 * @see    this.nvl(null, 1) // 1
 *         this.nvl(null, "a") // "a"
 */
prForm.nvl = function(value, defaultValue){
	if(this.isNil(value)) return defaultValue;
	return value;
};

/**
 * sSubStr가 sStr에 포함되는지 확인
 *
 * @param  sStr   : 대상문자열
 * @param  sSubStr : 포함되는 문자열
 * @return boolean
 * @see    smfContainsStr('abcd', 'c') //-> true
           smfContainsStr('abcd', 'C') //-> false
 */
prForm.smfContainsStr = function(sStr, sSubStr){
	return -1 != this.smfStr(sStr).indexOf(sSubStr);
};

/**
 * 대소문자구별없이 sSubStr가 sStr에 포함되는지 확인
 *
 * @param  sStr   : 대상문자열
 * @param  sSubStr : 포함되는 문자열
 * @return boolean
 * @see    smfContainsStr('abcd', 'bc') //-> true
           smfContainsStr('abcd', 'BC') //-> true
 */
prForm.smfContainsText = function(text, sSubText){
	return -1 != this.smfStr(text).toLowerCase().indexOf(this.smfStr(sSubText).toLowerCase());
};

/**
 * sStr가 sSubStr으로 시작되는지
 *
 * @param  sSubStr : 시작할 문자열
 * @param  sStr   : 문자열
 * @return boolean
 * @see    smfStartsStr('abcd', 'abcd') //-> true
           smfStartsStr('a', 'abcd') //-> true
           smfStartsStr('b', 'abcd') //-> false
 */
prForm.smfStartsStr = function(sSubStr, sStr){
	return 0 == this.smfStr(sStr).indexOf(sSubStr);
};

/**
 * 대소문자구별없이 sStr가 sSubStr으로 시작되는지
 *
 * @param  sSubStr : 시작할 문자열
 * @param  sStr   : 문자열
 * @return boolean
 * @see    smfStartsStr('abcd', 'abcd') //-> true
           smfStartsStr('ABcD', 'abcd') //-> true
           smfStartsStr('A', 'abcd') //-> true
           smfStartsStr('b', 'abcd') //-> false
 */
prForm.smfStartsText = function(sSubText, sText){
	return 0 == this.smfStr(sText).toLowerCase().indexOf(this.smfStr(sSubText).toLowerCase());
};


/**
 * value가 널인지
 */
prForm.isNil = function(value){
	return value == undefined || value == null || this.smfStr(value) == ""; 
};

/**
 * value가 널이 아닌지
 */
prForm.isNotNil = function(value){
	return ! this.isNil(value);
};

/**
 * (공통만사용)greatest
 *
 */
prForm.greatest = function(aryParams){
	if(aryParams.length == 0) return;

	var result = aryParams[0];
	for(var i=1, size=aryParams.length; i<size; i++){
		if(result < aryParams[i]) result = aryParams[i];
	}
	return result;
};

/**
 * (공통만사용)least
 *
 */
prForm.least = function(aryParams){
	if(aryParams.length == 0) return;

	var result = aryParams[0];
	for(var i=1, size=aryParams.length; i<size; i++){
		if(result > aryParams[i]) result = aryParams[i];
	}
	return result;
};

/**
 * (공통만사용)sValue가 aryInValues에 포함되는지
 *
 * @param  sValue   : 값
 * @param  aryInValues : 파라메터
 * @return boolean
 * @see    alert_opacity(In('1', ['1', '2', '3', '4'])); // 1 (true)
 */
prForm.In = function(sValue, aryInValues){
	for(var i=0, size=aryInValues.length; i<size; i++){
		if(sValue == aryInValues[i]) return true;
	}

	return false;
};

/**
 * (공통만사용)sValue가 aryInValues에 포함 안하는지
 *
 * @param  sValue   : 값
 * @param  aryInValues : 파라메터
 * @return boolean
 * @see    alert_opacity(NotIn('1', ['1', '2', '3', '4'])); // 1 (false)
 */
prForm.notIn = function(sValue, aryInValues){
	return ! this.In(sValue, aryInValues);
};

/**
 * (공통만사용)sValue가 sFrom, sTo에 속하는지
 *
 * @param  sValue - 값
 * @param  sFrom  - from value
 * @param  sTo    - to value
 * @return boolean
 * @see    alert_opacity(NotIn('1', ['1', '2', '3', '4'])); // 1 (false)
 */
prForm.between = function(sValue, sFrom, sTo, bFixiedLength){
	if(bFixiedLength){
	}
	return sValue >= sFrom && sValue <= sTo;
};

/**
 * (공통만사용)
 */
prForm.smfToDatasetObject = function(datasetNameOrObject){
	if(datasetNameOrObject instanceof nexacro.Dataset) return datasetNameOrObject;
	if(datasetNameOrObject instanceof String) return this.smfFindComponentInThisContext(datasetNameOrObject);
	if(typeof datasetNameOrObject == 'string') return this.smfFindComponentInThisContext(datasetNameOrObject);

	return null;
};



/**
 * (공통만사용)
 */
prForm.smfInitBindingControls = function(nRow){
	var self = this;
	var sId = this.dsService.getColumn(nRow, "id");
	var sBinding = this.smfStr(this.dsService.getColumn(nRow, "bindingControls"));
    var jHasSetDataset = {}; //firstcode를 세팅한 데이터셋을 기억해놔서 두번 실행안되도록..

    //constcolumn을 이용하여 firstCode를 세팅한다.
	var aryDataset = (new RequestService(this, sId)).toArrayByOutDatasets();
	for(var i=0,size=aryDataset.length; i<size; i++){
		var bSucc = this.smfSetFirstCode(aryDataset[i]);
		if(bSucc)  jHasSetDataset[aryDataset[i].name] = aryDataset[i]; //firstcode를 세팅한 데이터셋을 기억해놓는다.
	}

	var sId = this.dsService.getColumn(nRow, "id");
	var sBindingControls = this.dsService.getColumn(nRow, "bindingControls");
	var aryBind = this.smfSplit(sBinding, " "); // dsCode=ALL divSearch.cboHakgyo=SEL
	for(var i=0,size=aryBind.length; i<size; i++){
		var sControlOrDatasetName = this.smfSplit(aryBind[i], '=')[0];
		var sOption = this.smfSplit(aryBind[i], '=')[1].trim(); // SEL,ALL,EMP or :SEL,%:ALL
		var sCodeValue = ""; //코드값
		var sDataValue = ""; //

		if(-1 == sOption.indexOf(":")){ //0:SEL, SEL
			sCodeValue = "";
			sDataValue = this.smfStr(sOption);
		}else{
			sCodeValue = this.smfStr(sOption.split(":")[0]);
			sDataValue = this.smfStr(sOption.split(":")[1]);
		}

		var obj = this.all[sControlOrDatasetName];
		if(obj == null){
			obj = this.smfFindComponentInThisContext(sControlOrDatasetName);
		}
		if(obj == null){
			var sMessage = this.format('service에러\n"{0}"서비스의 bindingControls("{1}")항목중\n{2}번째 항목"{3}"은 존재하지 않는 ID입니다.',
								  [sId, sBinding, i+1, sControlOrDatasetName ]);
			this.smfDevException(sMessage);
			return;
		}

		//////codecolumn, datacolumn, dataset을 찾는다.
		var sCodeColumn = "unyCdValue";
		var sDataColumn = "unyCdValueNm";
		var ds = null;
		var controls = [];
		if(obj instanceof nexacro.Dataset){
			ds = obj;
			// 코드/데이커컬럼을 고정
			/*
			if(obj.getColID(0) == "_chk"){
				sCodeColumn = obj.getColID(1);
				sDataColumn = obj.getColID(2);
			}else{
				sCodeColumn = obj.getColID(0);
				sDataColumn = obj.getColID(1);
			}
			*/

			

			//Dataset을 innerdataset으로 사용하는 컴포넌트를 찾는다.
			this.smfTravelComponents(this, function (comp, fncCallback, nLvl){
				if(comp instanceof nexacro.Combo || comp instanceof nexacro.Radio || comp instanceof nexacro.ListBox){
                    var dsInnerDataset = self.smfToDatasetObject(comp.innerdataset);
                    if(dsInnerDataset == null) return;
                    if(ds != dsInnerDataset) return;

                    controls.push(comp);
				}
			});
		}else{
			ds = obj.innerdataset;
			if(ds instanceof String){
				ds = this.myeval(ds);
			}

			if(ds == null){
				this.smfDevException(this.format("{0}.innerdataset({1})의 Dataset ID가 존재하지 않습니다.", [obj.name, obj.innerdataset]));
				return;
			}
			controls[0] = obj;
			sCodeColumn = this.smfStr(obj.codecolumn);
			sDataColumn = this.smfStr(obj.datacolumn);
		}
		//////

		//smfSetFirstCode 안한 데이터셋만 처리하도록
 		if(this.isNotNil(jHasSetDataset[ds.name])) continue;

		///////////필터수행//////////////
		if(! this.isNil(ds.getConstColumn("filterExpr"))){
			ds.set_enableevent(false);
			try{
				var sFilterExpr = ds.getConstColumn("filterExpr");
				ds.filter(sFilterExpr);
			} catch(e)
			{
				trace("처리중 에러가발생했습니다.");
			}finally{
				ds.set_enableevent(true);
			}
		}
		//////////////////////////////////

		switch(sDataValue){
			case "ALL_IF_EXISTS": 
				if(ds.rowcount == 0) break;
			case "ALL":
				var nAddRow = ds.insertRow(0);
				ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
				ds.setColumn(nAddRow, sDataColumn, "- 전체 -");
				break;
			case "SEL_IF_EXISTS":
				if(ds.rowcount == 0) break;
			case "SEL":
				var nAddRow = ds.insertRow(0);
				ds.setColumn(nAddRow, sCodeColumn, new String(sCodeValue));
				ds.setColumn(nAddRow, sDataColumn, "- 선택 -");
				break;
			case "EMP_IF_EXISTS":
				if(ds.rowcount == 0) break;
			case "EMP":
				var nAddRow = ds.insertRow(0);
				ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
				ds.setColumn(nAddRow, sDataColumn, "");
				break;
			default:
				var sMessage = this.format('service에러\n"{0}"서비스의 bindingControls("{1}")항목중\n{2}번째 항목"{3}"은\n(ALL,SEL,EMP)←(전체,선택,비어있게) 중 하나를 선택하십시오.',
									  [sId, sBinding, i+1, sDataValue ]);
				this.smfDevException(sMessage);
				return;

				break;
		}

		//Dataset을 innerdataset으로 사용하는 컴포넌트들의 index 세팅
//		ds.enableevent = false;

		try{
			for(var n=0,size2=controls.length; n<size2; n++){
				if(n != 0) break;
				var control = controls[n];
				//control.enableevent = false;

				var oBindItem = this.smfBindItemByComponent(control);
				if(oBindItem == null){
                    control.set_value(sCodeValue);
				}else{
                    var controlBindDs = this.smfFindComponentInThisContext(oBindItem.datasetid);
                    if(controlBindDs instanceof nexacro.Dataset){
                        if(controlBindDs.rowcount == 0 || controlBindDs.rowposition == -1){
                            control.set_index(0);
                        }else{
                            var binddatasetColumnValue = controlBindDs.getColumn(controlBindDs.rowposition, oBindItem.columnid);
                            var nFindRow = ds.findRow(sCodeColumn, binddatasetColumnValue);
                            if( nFindRow >= 0){
                                binddatasetColumnValue = controlBindDs.getColumn(controlBindDs.rowposition, oBindItem.columnid);
                                control.set_enableredraw(false);
                                control.set_value(undefined);
                                control.set_value(binddatasetColumnValue);
                                control.set_enableredraw(true);
                            }else{
                                control.set_value(sCodeValue);
                            }
                        }
                    }else{
                    }
                }
				//control.enableevent = true;
			}

			ds.applyChange();
		} catch(e)
		{
			trace("처리중 에러가발생했습니다.");
		}finally{
//			ds.enableevent = true;
		}
	}
};

/**
 * (공통만사용)dsService검증
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfValidatesService = function(){

	try{
		var dummy = this.objects['dsService'];
		if(dummy == null) return false;
	}catch(e){
		return false;
	}

	var rtn = true;
	for(var i=0,size=this.dsService.rowcount; i<size; i++){
		var sId = this.dsService.getColumn(i, 'id');
		var sUrl = this.smfStr(this.dsService.getColumn(i, 'url'));
		var oService = new RequestService(this, sId);
		var sMessage = oService.validate();

		if("codes" == sId){
			sMessage += "\nid->codes는 사용할수 없습니다.\n다른이름으로 사용하세요.";
		}
		
		

		if(sMessage != ""){
			var sUrl = "";
			if(this.isNotNil(this.url)){
				sUrl = this.url;
			}else{
				sUrl = this.getOwnerFrame().formurl;
			}
			rtn = false;
			this.smfDevException(this.format(sUrl + " dsService 설정에러\n{0}/{1}행(id='{2}')의 설정에러입니다.\n" + sMessage, [i+1, this.dsService.rowcount, sId]));
		}


		var aryDataset = oService.toArrayByOutDatasets();
		for(var n=0,size2=aryDataset.length; n<size2; n++){
			var ds = aryDataset[n];
			if(ds == null) continue;

			var bChkInvalid = false;

			//그리드로 연결되어있는 데이터셋만 확인.
			var grd = this.smfGridByDataset(ds);
			if(grd != null){
				bChkInvalid = ds.getColID(0) != "_chk";
			}

			var bUseClientLayoutInvalid = ds.useclientlayout != true;
			if(ds.useclientlayout){
				//다이나믹 레이아웃으로 사용하겠다고 선언하면 에러아님
				if(ds.getConstColumn("isDynamicLayout") == "true"){
					bUseClientLayoutInvalid = false;
				}
			}
			var bKeysInvalid = false;
			var sNotExistColumnNames = "";

			var sMessage = "";
			//keys체크
			var sKeys = this.smfStr(ds.getConstColumn('keys'));;
			if(! this.isNil(sKeys)){
                if(sKeys.indexOf('columnText:"') == 0){
                    sKeys = sKeys.substr(sKeys.lastIndexOf('"')+1);
                }

				var idx = 0;
				var aryCol = sKeys.split(',');
				for(var x=0,sizex=aryCol.length; x<sizex; x++){
					if(null == ds.getColumnInfo(aryCol[x])){
						bKeysInvalid = true;
						sNotExistColumnNames += "," + aryCol[x] + "(" + x + ")";
					}
				}
				if(sNotExistColumnNames != "") sNotExistColumnNames = sNotExistColumnNames.substring(1, 999);
			}

			if(bUseClientLayoutInvalid || bKeysInvalid){//bChkInvalid || 제거
				rtn = false;
				var sMessage = this.format("Dataset({0})의 표준설정에러.\n", [ds.name]);
				if(bChkInvalid){
					//sMessage += format("\t그리드({0})에 binddataset으로 연결된 Dataset은 _chk컬럼을 0번째에 추가하셔야 합니다.\n", [grd.name]);
				}
				if(bUseClientLayoutInvalid){
					sMessage += "\tuseclientlayout속성을 true로 설정하셔야 합니다.\n";
				}
				if(bKeysInvalid){
					sMessage += this.format("\tConstColumns의 keys컬럼에서 [{0}]은 없습니다.\n", [sNotExistColumnNames]);
				}
				this.smfDevException(sMessage);
			}
		}
	}
	return rtn;
};

/**
 * 서비스ID의 prefix를 얻는다
 *
 * @param serviceId
 * @return boolean
 * @see
 */
prForm.smfGetServiceIdPrefix = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	
	for(var prefix in this.smvPrefixesOfServiceId){
		if(this.smfStartsStr(prefix, serviceId)){
			return prefix;
		}		
	}
	
	this.smfDevException(this.format("서비스ID {0} 의 prefix를 찾을 수 없습니다", [serviceId]));
	return "";
};
/**
 * 서비스ID를 이용한 메시지 접두어를 얻는다
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfGetMessagePrefixByServiceId = function(serviceId, defaultMessagePrefix){
	if(this.isNil(defaultMessagePrefix)) defaultMessagePrefix = "조회";

	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	this.astfAssertParamValueIsStringType(defaultMessagePrefix, "defaultMessagePrefix");
	
	var messageOfPrefixes = {
			"validate": "검증", 
			"check": "조건확인", 
			"insert": "등록", 
			"select": "조회", 
			"list": "조회", 
			"update": "수정", 
			"delete": "삭제", 
			"save": "저장", 
			"execute": "실행", 
			"preview": "미리보기", 
			"print": "출력", 
			"code": "코드조회"
		};
	 
	var prefix = this.smfGetServiceIdPrefix(serviceId);
	return messageOfPrefixes[prefix];
};

/**
 * (공통만사용)
 * 서비스ID를 이용한 메시지 접두어를 검증한다
 *
 * @param
 * @return boolean
 * @see
 */
prForm.smfValidatePrefixServiceId = function(serviceId, showErrorMessage){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	if(this.isNil(showErrorMessage)) showErrorMessage = true;

	var prefixes = this.smvPrefixesOfServiceId;
	var isvalidPrefix = false;
	for(var prefix in prefixes){
		if(this.smfStartsStr(prefix, serviceId)){
			isvalidPrefix = true;
			break;
		}		
	}

	// 해당하는 접두어가 없음
	if(isvalidPrefix != true){
		var prefixNames = [];
		for(var prefix in prefixes){
			prefixNames.push("  " + prefix + " : " + prefixes[prefix]);
		}
		var prefixMessage = prefixNames.join("\n");
	

		var message = this.format("화면{0}의 dsService의 '{1}'에 id의 접두어가 잘못되어있습니다.\n다음중 하나의 접두어를 사용하세요\n{2}", [this.name, serviceId, prefixMessage]);
		if(showErrorMessage){
			this.smfDevException(message);
		}
		return message;
	}
	
	return "";
};



/**
 * 객체의 프로퍼티목록을 array로 리턴한다
 *
 * @param obj
 * @return array
 * @see
 */
prForm.smfObjectPropertiesToArray = function(obj){
	if(this.isNil(obj)) return [];
	
	var result = [];
	for(var i in obj){
		result[i] = obj[i];
	}
	
	return result;
};


/**
 * (공통만사용) 유효한 서비스ID 여부
 *
 * @param serviceId
 * @return boolean
 * @see
 */
prForm.smfExistsServiceId = function(serviceId){
	if(this.isNil(this.dsService)) return false;
	if(! this.astfIsParamInstanceofType(this.dsService, nexacro.Dataset)) return false;
	
	return this.dsService.findRow("id", serviceId) != -1;
};

/**
 * (공통만사용) 유효한 서비스ID assert
 *
 * @param serviceId
 * @return void
 * @see
 */
prForm.smfAssertExistsServiceId = function(serviceId){
	if(this.smfExistsServiceId(serviceId)) return;
	
	this.smfDevException(this.format("dsService에 등록되지 않은 아이디입니다 : " + serviceId));
};

/**
 * (공통만사용) callback함수가 있는지 assert
 *
 * @return void
 * @see
 */
prForm.smfAssertExistsCallbackFunctionInContext  = function(){
	var callbackFunctionName = "fnTransCallback";
	var callbackFunction = this[callbackFunctionName];
	if(this.smfIsFunc(callbackFunction)) return;

	this.smfDevException("서버통신을 하려면 콜백함수 fnTransCallback(svcid,errcd,errmsg)를 정의해야 합니다");
};

/**
 * (공통만사용)서비스객체
 *
 * @param
 * @return boolean
 * @see
 */
RequestService = function(form, id, jParams){
	RequestService.prototype.evalValue = function(sValue){
		if(sValue == undefined) return "";
		return sValue;

// 		if(0 == sValue.indexOf('eval:')){ //eval
// 			return this.smfEvil(sValue.substring(5, sValue.length));
// 		}
// 
// 		return sValue;
	}

	RequestService.prototype.toArrayByDatasets = function(sInOrOut){
		var nIndex = 0;
		var sDatasets = "";
		if(sInOrOut == "in"){
			nIndex = 1;
			sDatasets = this.inDatasets;
		}else if(sInOrOut == "out"){
			nIndex = 0;
			sDatasets = this.outDatasets;
		}

		sDatasets = this.form.smfStr(sDatasets).trim();

		var arySplitDataset = this.form.smfSplit(sDatasets, " ");
		var aryDs = [];
		for(var i=0,size=arySplitDataset.length; i<size; i++){
			var sDatasetName = arySplitDataset[i].split('=')[nIndex];
			var ds = null;
			if(-1 == sDatasetName.indexOf(":")){
				ds = this.form.objects[sDatasetName];
			}else{
				sDatasetName = sDatasetName.substring(0, sDatasetName.indexOf(":"));
				ds = this.form.objects[sDatasetName];
			}

            aryDs.push(ds);
		}

		return aryDs;
	}

	RequestService.prototype.toArrayByInDatasets = function(){
		return this.toArrayByDatasets('in');
	}

	RequestService.prototype.toArrayByOutDatasets = function(){
		return this.toArrayByDatasets('out');
	}

	RequestService.prototype.hasDataset = function(sDatasetName){
		if(-1 == sDatasetName.indexOf(":")){
			return null != this.form.objects[sDatasetName];
		}else{
			sDatasetName = sDatasetName.substring(0, sDatasetName.indexOf(":"));
			return null != this.form.objects[sDatasetName];
		}

	}

	RequestService.prototype.validate = function(){
		if(this.row == -1){
			return this.form.format("id '{0}'은(는) dsService에 없습니다.", [this.id]);
		}

		if(this.form.smfStr(this.url).indexOf("localhost") >= 0){
			return this.form.format('url->localhost는 사용할수 없습니다.\n"svc_neis::"로 사용하세요.', []);
		}

		if(this.url.indexOf("::") > -1 &&  this.url.indexOf("::/") == -1){
			return this.form.format('url항목에 {0}->"/"가 빠졌습니다.\n{1}로 변경하세요.',
				[this.url, this.url.substring(0, this.url.indexOf("::")+2) + "/" + this.url.substring(this.url.indexOf("::")+2, 999)]);
		}


		var prefixServiceIdMessage = this.form.smfValidatePrefixServiceId(this.id);
		if(this.form.isNotNil(prefixServiceIdMessage)){
			return prefixServiceIdMessage;
		}

 		var sInDatasets = this.form.smfStr(this.form.dsService.getColumn(this.row, "inDatasets")).trim();
 		if(sInDatasets.indexOf("  ") != -1){
			this.form.trace(
			this.form.format("화면{0}의 dsService의 '{1}'에 inDatasets항목에 두개의 공백이 있습니다.\n"
			      +"에러가 날수 있으니 데이터셋간의 공백은 하나만 입력하세요", [this.form.name, this.id]));
 		}
		
 		if( sInDatasets.indexOf("  ") != -1){
 			return this.format('service에러\n{0}/{1}행의 "{2}"서비스의\n{3}항목[{4}]에서 데이터셋간의 구분공백이 두글자이상 입력되어있습니다.\n'
 			             +'공백은 한글자만 사용하세요',
 			             [this.row+1, this.form.dsService.rowcount, this.id, "inDatasets", sInDatasets]);
 		}

		if(sInDatasets != ""){
			var aryDatasetNames = sInDatasets.split(" ");
			for(var i=0,size=aryDatasetNames.length; i<size; i++){
				if(nexacro.trim(aryDatasetNames[i]) == "") continue;
				var aryServerAndLocalDatasetName = this.buildDatasetName(aryDatasetNames[i]).split("=");
				if(! this.hasDataset(aryServerAndLocalDatasetName[1])){
					return this.form.format('service에러\n{0}/{1}행의 "{2}"서비스의\n{3}("{4}")항목({5}번째)의 데이터셋명은 존재하지 않습니다.',
					[this.row+1, this.form.dsService.rowcount, this.id, "inDatasets", sInDatasets, i+1]);
				}
			}
		}

 		var sOutDatasets = this.form.smfStr(this.form.dsService.getColumn(this.row, "outDatasets")).trim();
 		if(sOutDatasets.indexOf("  ") != -1){
			this.form.trace(
			this.form.format("화면{0}의 dsService의 '{1}'에 outDatasets항목에 두개의 공백이 있습니다.\n"
			      +"에러가 날수 있으니 데이터셋간의 공백은 하나만 입력하세요", [this.form.name, this.id]));
 		}
 		if( sOutDatasets.indexOf("  ") != -1){
 			return format('service에러\n{0}/{1}행의 "{2}"서비스의\n{3}항목[{4}]에서 데이터셋간의 구분공백이 두글자이상 입력되어있습니다.\n'
 			             +'공백은 한글자만 사용하세요',
 			             [this.row+1, this.form.dsService.rowcount, this.id, "outDatasets", sOutDatasets]);
 		}
		if(sOutDatasets != ""){
			var aryDatasetNames = sOutDatasets.split(" ");
			for(var i=0,size=aryDatasetNames.length; i<size; i++){
				if(nexacro.trim(aryDatasetNames[i]) == "") continue;
				var aryLocalAndServerDatasetName = this.buildDatasetName(aryDatasetNames[i]).split("=");
				if(! this.hasDataset(aryLocalAndServerDatasetName[0])){
					return this.form.format('service에러\n{0}/{1}행의 "{2}"서비스의\n{3}("{4}")항목({5}번째)의 데이터셋명은 존재하지 않습니다.',
					[this.row+1, this.form.dsService.rowcount, this.id, "outDatasets", sOutDatasets, i+1]);
				}
			}
		}

		return "";
	}
	
	RequestService.prototype.buildDatasetName = function(sSplitedDatasetNames){
		var result = "";
		var aryDatasetNames = this.form.smfSplit(sSplitedDatasetNames, " ");

		for(var i=0,size=aryDatasetNames.length; i<size; i++){
			var sName = aryDatasetNames[i];
			if(-1 == sName.indexOf("=")){
				sName += "=" + sName;
			}
			result += " " + sName;
		}

		return nexacro.trim(result);
	}

	RequestService.prototype.attachUpdateMode = function(sDatasetName){
		// U를 붙여주는 작업은 이제 안함
		return sDatasetName;
// 		
// 		if(this.keepInDatasetOptions == "Y") return sDatasetName;
// 		
// 		if(this.id.indexOf("insert") == 0 ||
// 		   this.id.indexOf("update") == 0 ||
// 		   this.id.indexOf("delete") == 0 ||
// 		   this.id.indexOf("save") == 0 ||
// 		   this.id.indexOf("execute") == 0 ){
// 
// 
// 			if(sDatasetName.indexOf(":") == -1){
// 				sDatasetName += ":U";
// 			}
// 		}
// 
// 		return sDatasetName;
	}  

	RequestService.prototype.assignProperties = function(){
		var i = this.row;
		var ds = this.form.dsService;

		this.group = ds.getColumn(i, 'group');
		this.id = ds.getColumn(i, 'id');
		this.url = this.form.smfStr(this.evalValue(ds.getColumn(i, 'url')));

		this.keepInDatasetOptions = ds.getColumn(i, 'keepInDatasetOptions');


		this.inDatasets = this.attachUpdateMode(this.buildDatasetName(this.evalValue(this.form.smfStr(ds.getColumn(i, 'inDatasets')).trim())));
		this.outDatasets= this.buildDatasetName(this.evalValue(this.form.smfStr(ds.getColumn(i, 'outDatasets')).trim()));
		this.params = this.evalValue(ds.getColumn(i, 'params'));
		this.packageName = this.evalValue(ds.getColumn(i, 'package'));

		if(this.packageName.length > 0 && "." != this.packageName.charAt(this.packageName.length-1)){
			this.packageName += ".";
		}else{
			this.packageName = "";
		}

		this.service = this.evalValue(ds.getColumn(i, 'service'));
		this.vo = this.evalValue(ds.getColumn(i, 'vo'));
		this.method = this.evalValue(ds.getColumn(i, 'method'));
		this.svctp = this.evalValue(ds.getColumn(i, 'svctp'));
		this.callback = ds.getColumn(i, 'callback');
		this.confirmType = ds.getColumn(i, 'confirmType');

		if(this.form.isNil(this.callback)) this.callback = "fnTransCallback";
		if(this.callback != "fnTransCallback"){
			this.callback = "fnTransCallback";
			var sMessage = this.form.format('service에러\n"{0}"서비스의 callback은 "fnTransCallback"이어야 합니다.(표준임)', [this.id]);
			this.form.smfDevException(sMessage);
		}
		this.state = ds.getColumn(i, 'state');
		this.reason = ds.getColumn(i, 'reason');
		this.message = ds.getColumn(i, 'message');

		this.executeDate = this.form.smfStr(ds.getColumn(i, 'executeDate'));
		this.executeCount = parseInt(this.form.nvl(ds.getColumn(i, 'executeCount'), '0'));

		this.bizMessage = ds.getColumn(i, 'bizMessage');   //- 사용자 정의 Message 처리
		this.asynctp = this.form.iif('false'==ds.getColumn(i, 'asynctp'),false, true); //- 동기/비동기 설정(Default:true)
		this.bintp = ds.getColumn(i, 'bintp');     //- Binary 처리 여부(Default:false)
		this.comtp = ds.getColumn(i, 'comtp');     //- Data 압축 여부(Default:false)
		this.netfunnelBizName = this.form.smfStr(ds.getColumn(i, 'netfunnelBizName'));     //netfunnelBizName
		this.netfunnelServerName = this.form.smfStr(ds.getColumn(i, 'netfunnelServerName'));     //netfunnelServerName
	};

	//그리드의 Title중에 _chk인 항목을 uncheck해준다.
 	RequestService.prototype.uncheckGridTitle = function (){
		var aryGrid = this.form.smfFindGridsByServiceId(this.id);
		for(var nGridIndex=0,sizeGrid=aryGrid.length; nGridIndex<sizeGrid; nGridIndex++){
			var grd = aryGrid[nGridIndex];

			grd.set_enableredraw(false);
			//head cellcount과 body cell중 작은count로 loop를 돈다.
			var nCellCount = 0;
			if(grd.getCellCount('head') > grd.getCellCount('body')){
				nCellCount = grd.getCellCount('body');
			}else{
				nCellCount = grd.getCellCount('head');
			}

			for(var i=0,size=nCellCount; i<size; i++){
				var sText = grd.getCellProperty('body', i, 'text');
				if(sText == undefined) continue;

				//body의 컬럼이 _chk 이고 header의 edittype이 checkbox인것만 uncheck한다.
				if(sText.indexOf('bind:_chk') >= 0){
					if(grd.getCellProperty("head", i, "edittype") == "checkbox"){
						grd.setCellProperty('head', i, 'expr', '0');
						break;
					}
				}
			}
			grd.set_enableredraw(true);
		}
 	}


 	RequestService.prototype.execute = function (){
		//로그를 남긴다.
		if(this.form.frmFormSpy){
			this.form.frmFormSpy.fncWriteLog(this.toString());
		}
		this.form.dsService.setColumn(this.row, "state", "ready");
		this.form.dsService.setColumn(this.row, "reason", "");
		this.form.dsService.setColumn(this.row, "message", "");

		var sMessage = this.validate();
		if("" != sMessage){
			this.state = "fail";
			this.reason = "-1";
			this.message = this.form.format("smfService 사용방법 에러\n{0}/{1}서비스(id='{2}')에러\n{3}", [this.row+1, this.form.dsService.rowcount, this.id, sMessage]);
			this.form.dsService.setColumn(this.row, "state", this.state);
			this.form.dsService.setColumn(this.row, "reason", this.reason);
			this.form.dsService.setColumn(this.row, "message", this.message);
			this.form.smfDevException(this.message);
			return false;
		}


		//데이터를 가져오고 있습니다 표시
		var grids = this.form.smfFindGridsByServiceId(this.id);
		for(var i=0,size=grids.length; i<size; i++){
			grids[i].set_enableredraw(false);
			grids[i].set_enableredraw(true);
			if(this.form.isNil(grids[i].binddataset)) continue;
			// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
			this.form._smfSetNodataTextToGrid(grids[i],"데이터를 가져오고 있습니다...");
		}

		this.form.dsService.setColumn(this.row, "executeDate", (new Date()));
		this.executeCount++;
		this.form.dsService.setColumn(this.row, "executeCount", this.executeCount);

// 		/**********************************************************************
// 		 * 메뉴아이디를 서버로 전송하기 위한 데이터셋 생성 -2012.02.08-
// 		 **********************************************************************/
// 		var ds = this.form.dsService;
// 		var _dsPermitMenu = this.form.smfGetOrCreateDataset("_dsPermitMenu");
// 		if(_dsPermitMenu.getColumnInfo("menuId") == null){
// 			_dsPermitMenu.addColumn("pgeId", "string");
// 			_dsPermitMenu.addColumn("menuId", "string");
// 			_dsPermitMenu.addColumn("permtFlag", "string");
// 		}
// 		_dsPermitMenu.clearData();
// 		_dsPermitMenu.addRow();
// 		var mainForm = this.form.smfMenuForm(this.form);
// 		_dsPermitMenu.setColumn(0, "pgeId", this.form.smfFormMenuId(mainForm, "P"));
// 		_dsPermitMenu.setColumn(0, "menuId", this.form.smfFormMenuId(mainForm, "M"));
// 		_dsPermitMenu.setColumn(0, "permtFlag", this.form.smvPermtFlag == "Y" ? "Y" : "N");
// // 		alert_opacity(this.id + " " + name + " " + "permtFlag ===>"+ _dsPermitMenu.getColumn(0, "permtFlag"));
// // 		alert_opacity(this.id + " " + name + " " + "menuId    ===>"+ _dsPermitMenu.getColumn(0, "menuId"));
// // 		alert_opacity(this.id + " " + name + " " + "pgeId    ===>"+ _dsPermitMenu.getColumn(0, "pgeId"));
// 		if(this.form.smfStr(this.inDatasets).indexOf("dsPermitMenu") == -1){
// 			this.inDatasets += " dsPermitMenu=_dsPermitMenu";
// 		}
		 /**********************************************************************/
		
		this.form.smfBeforeBackendValidationProcess();
		
		// 서버 업무 응답 메시지를 추가한다
 		if(this.form.smfStr(this.outDatasets).indexOf("_dsBusinessMessage") == -1){
			var isClearData = true;
			var _dsBusinessMessage = this.form.smfGetOrCreateDataset("_dsBusinessMessage", isClearData, function(ds){
				ds.addColumn("code");
				ds.addColumn("message");
				ds.useclientlayout = true;
			});
			
 			this.outDatasets += " _dsBusinessMessage=businessMessage";
 		}
		
		//this.asynctp
		this.beginNetfunnel();
		this.form.svcfTransaction(
			this.id,
			this.url,
			this.inDatasets,
			this.outDatasets,
			"svcId='" + this.packageName + this.service + "' voId='" + this.packageName + this.vo + "' method='" + this.method + "'",
			'smfRequestServiceDefaultCallback',
			this.curd,
			this.bizMessage,
			this.asynctp,
			this.bintp,
			this.comtp
		);

		if(this.asynctp == true){
			//async일때만 grid에 연결된 데이터셋을 모두 clear
			for(var i=0,size=grids.length; i<size; i++){
				if(this.form.isNil(grids[i].binddataset)) continue;
				var ds = this.form.objects[grids[i].binddataset];
				if(ds == null) ds = this.myeval(grids[i].binddataset);
				if(ds == null) continue;
				ds.clearData();
			}
		}

		/*
		var conctAtptScCode = this.form.smfStr(this.form.smfGetSession("conctAtptScCode"));
		if(this.form.smvActiveLoggingAtptOfCdcList[conctAtptScCode] != "Y"){
			return;
		}
		*/

		//로그를 남길때는 로그를 남기지 않는다. 당연한가..;
		if(this.id.indexOf("log_") != 0){
			this.form.smfServiceLog(this);
		}
 	};

 	RequestService.prototype.hasBeenService = function (exceptError){
        var sReason = this.form.smfStr(this.form.dsService.getColumn(this.row, "reason"));
        if(sReason == "") return false;
		
		if(exceptError == undefined || exceptError == null || exceptError == true){
			if(Number(sReason) <= -1) return false;
		}
		
        return true;
 	};

 	RequestService.prototype.toString = function (){
		return new Date() + "\n\t"
		      +"id =[" + this.id + "]\n\t"
		      +"url =[" + this.url + "]\n\t"
		      +"inDatasets =[" + this.inDatasets + "]\n\t"
		      +"outDatasets=[" + this.outDatasets + "]\n\t"
		      +"params=[" + this.params + "]\n\t"
		      +"package=[" + this.packageName + "]\n\t"
		      +"vo =[" + this.vo + "]\n\t"
		      +"service =[" + this.service + "]\n\t"
		      +"method =[" + this.method + "]\n\t"
		      +"svctp =[" + this.svctp + "]\n\t"
		      +"callback =[" + this.callback + "]\n\t"
		      +"state =[" + this.state + "]\n\t"
		      +"reason =[" + this.reason + "]\n\t"
		      +"message =[" + this.message + "]\n\t"
		      +"bizMessage =[" + this.bizMessage + "]\n\t"
		      +"asynctp =[" + this.asynctp + "]\n\t"
		      +"bintp =[" + this.bintp + "]\n\t"
		      +"comtp =[" + this.comtp + "]\n\t"
		      +"netfunnelBizName =[" + this.netfunnelBizName + "]\n\n"
		      +"netfunnelServerName =[" + this.netfunnelServerName + "]\n\n"
		      ;
 	};

	// beginOnlineStandbySystem
 	RequestService.prototype.beginNetfunnel = function (){
		if(this.form.isNil(this.netfunnelBizName)) return;
		if(! this.form.nfnfIsActiveNetFunnel(this.netfunnelBizName, this.netfunnelServerName)) return;

		var serviceMap = this.form.nfnfGetNetFunnelServiceMap(this.netfunnelServerName);
		if(this.form.isNil(serviceMap)) return;
		if(serviceMap["active"] != true) return;

		this.form.nfnfInitNetFunnel(this.form, this.netfunnelBizName, this.netfunnelServerName);
		return this.form.nfnfBeginNetFunnel(this.form, this.netfunnelServerName);
 	}

	// endOnlineStandbySystem
 	RequestService.prototype.endNetfunnel = function (){
		if(this.form.isNil(this.netfunnelBizName)) return;
		if(! this.form.nfnfIsActiveNetFunnel(this.netfunnelBizName, this.netfunnelServerName)) return;

		var serviceMap = this.form.nfnfGetNetFunnelServiceMap(this.netfunnelServerName);
		if(this.form.isNil(serviceMap)) return;
		if(serviceMap["active"] != true) return;

		this.form.nfnfInitNetFunnel(this.form, this.netfunnelServerName, this.netfunnelServerName);
		this.form.nfnfEndNetFunnel(this.form, this.netfunnelServerName);
 	}


	this.form = form;
	this.id = id;
	this.jParams = form.nvl(jParams, {});
	this.row = this.form.dsService.findRow("id", id);
	if(this.row == -1) return;
	this.form.dsService.setColumn(this.row, "state", "");
	this.assignProperties();
};

/**
 * (공통만사용)dsService 데이터셋의 서버통신데이터셋(in, out) 단축명칭을 정규명칭으로 변경한다
 *
 * @param  serviceDataset : dsService 객체
 * @return void
 */
prForm.smfUpdateAllNormalizeDatasetNames = function(serviceDataset){
	for(var i=0,size=serviceDataset.rowcount; i<size; i++){
		this.smfUpdateNormalizeDatasetNames(serviceDataset, i);
	}
};


/**
 * (공통만사용)dsService 데이터셋의 서버통신데이터셋(in, out) 단축명칭을 정규명칭으로 변경한다
 *
 * @param  serviceDataset : dsService 객체
 * @param  rowIndex : 변경할 데이터셋 rowIndex
 * @return void
 */
prForm.smfUpdateNormalizeDatasetNames = function(serviceDataset, rowIndex){
	var inDatasets = serviceDataset.getColumn(rowIndex, "inDatasets");
	var outDatasets = serviceDataset.getColumn(rowIndex, "outDatasets");
	
	// inDatasets
	var updatedInDatasets = this.smfNormalizeDatasetNames(inDatasets, false, true);
	
	// outDatasets
	var updatedOutDatasets = this.smfNormalizeDatasetNames(outDatasets, true, false);
	
	if(inDatasets != updatedInDatasets){
		serviceDataset.setColumn(rowIndex, "inDatasets", updatedInDatasets);
	}
	
	if(outDatasets != updatedOutDatasets){
		serviceDataset.setColumn(rowIndex, "outDatasets", updatedOutDatasets);
	}
};


/**
 * (공통만사용)dsService 데이터셋의 서버통신데이터셋(in, out) 단축명칭을 정규명칭으로 변경한다
 *
 * @param  shortcutedDatasetNames 단축명칭 데이터셋
 * @param  prefixOfLeftDataset 왼쪽 사이드 데이터셋에 부여할 접두어
 * @param  prefixOfRightDataset 오른쪽 사이드 데이터셋에 부여할 접두어
 * @return void
 */
prForm.smfNormalizeDatasetNames = function(shortcutedDatasetNames, isAttachLeftSidePrefix, isAttachRightSidePrefix){//,  prefixOfLeftDataset, prefixOfRightDataset){
	shortcutedDatasetNames = this.smfStr(shortcutedDatasetNames).trim();
	shortcutedDatasetNames = nexacro.replaceAll(shortcutedDatasetNames, "  ", " ");
	
	
	var prefixOfLeftDataset = isAttachLeftSidePrefix ? "ds" : "";
	var prefixOfRightDataset = isAttachRightSidePrefix ? "ds" : "";


	var result = "";
	var aryDatasetNames = this.smfSplit(shortcutedDatasetNames, " ");

	for(var i=0,size=aryDatasetNames.length; i<size; i++){
		var sName = aryDatasetNames[i];

		var leftName = "";
		var rightName = "";
		// dsSearch:U -> U			
		var attachOption = this.smfStr(sName.split(":")[1]).toUpperCase();
		
		sName = this.smfStr(sName.split(":")[0]);
		
		
		if(-1 == sName.indexOf("=")){
			leftName = sName;
			rightName = sName;
		}else{
 			var splitedDatasetName = sName.split("=");
 			leftName = this.smfStr(splitedDatasetName[0]);
 			rightName = this.smfStr(splitedDatasetName[1]);
		}
		
		if(leftName.indexOf(prefixOfLeftDataset) == -1){
			leftName = prefixOfLeftDataset + leftName.substring(0, 1).toUpperCase() + leftName.substring(1);
		}
		
		if(rightName.indexOf(prefixOfRightDataset) == -1){
			rightName = prefixOfRightDataset + rightName.substring(0, 1).toUpperCase() + rightName.substring(1);
		}
		
		var resultDatasetName = leftName + "=" + rightName;
		if(attachOption != ""){
			resultDatasetName += ":" + attachOption;
		}

		result += " " + resultDatasetName;
	}

	return nexacro.trim(result);
};


/**
 * (공통만사용)server에 로그를 남긴다.
 *
 * @param  oService : RequestService 객체

 * @return void
*/
prForm.smfServiceLog = function(oService){
	return;
	if(/* [X-LOG] 변수(noWriteLog)가 있는지 확인이 필요합니다.*/ oService.jParams.noWriteLog == true) return;
    var form = oService.form;

    var ds = form.smfGetOrCreateDataset("_dsLog");
    var dsIn = form.smfGetOrCreateDataset("_dsLog" + oService.id);
    dsIn.clear();
    dsIn.addColumn("PageId", "STRING");
    dsIn.addColumn("menuId", "STRING");
    dsIn.addColumn("SsubbSysCode", "STRING");
    dsIn.addColumn("serviceId", "STRING");
    dsIn.addColumn("searchXml", "STRING");
    dsIn.addColumn("searchType", "STRING");
    dsIn.addColumn("reportType", "STRING");
    dsIn.addRow();

    var aryInDatasets = oService.toArrayByInDatasets();
    var sSearchXml = "";
    if(this.isNotNil(aryInDatasets) && aryInDatasets.length > 0){
		if(aryInDatasets[0] instanceof nexacro.Dataset){
			sSearchXml = aryInDatasets[0].saveCSV();
		}
    }
    var mainForm = this.smfMenuForm(form);

    dsIn.setColumn(0, "PageId", form.smfFormPageId(form));
    dsIn.setColumn(0, "menuId", this.smfFormMenuId(mainForm, "M"));
    dsIn.setColumn(0, "SsubbSysCode", form.smfSubSysCode());
    dsIn.setColumn(0, "serviceId", oService.url);
    dsIn.setColumn(0, "searchXml", this.smfStr(oService.reportType) + sSearchXml);
    dsIn.setColumn(0, "searchType", oService.svctp);

return;
    var sServiceId = "log_" + oService.id;
    form.smfDService({
         id                 : sServiceId
        ,url                : "svc_neis::/sye_sye_lm00_000.xp"
        ,inDatasets         : "dsSyeSyeLm00M00SVO=" + dsIn.name
        ,outDatasets        : ""
        ,asynctp            : true
        ,callback           : "fnTransCallback"
        ,innerCallback      : ""
        ,bindingControls    : ""
    });
};


prForm.smfHandleLogout = function(form){
    this.smfTravelComponents(form, function (oComp, fnc, nLvl){
		oComp.set_enable(false);
		if(oComp instanceof nexacro.Grid){
			oComp.set_binddataset("");
		}
    });
};

prForm.smfCallerList = function(){
	var c = this.smfCallerList.caller.caller;
	if(this.isNil(c)) return [];
	var result = [];

	while(this.isNotNil(c)){
		result.push(c);

		c = c.caller;
	}


	return result;
};

/**
 * (공통만사용)서비스실행후 호출되는 callback function
 *
 * @param  sId dsService Dataset에 등록한 id
 * @param  nReason 코드
 * @param  sMessage - message
 * @return void
 * @see
 */
prForm.smfRequestServiceDefaultCallback = function(sId, nReason, sMessage){
	var nRow = this.dsService.findRow('id', sId);
	var service = new RequestService(this, sId);
	
	sMessage = this.smfStr(sMessage);

	this.dsService.setColumn(nRow, 'reason', nReason);
	this.dsService.setColumn(nRow, 'message', sMessage);

	try{
		service.endNetfunnel(this);

		if(nReason == -1){
			//실패
			this.dsService.setColumn(nRow, "state", "fail");

			//데이터를 가져오는데 실패했습니다
			var grids = this.smfFindGridsByServiceId(sId);
			for(var i=0,size=grids.length; i<size; i++){
				grids[i].set_enableredraw(false);
				grids[i].set_enableredraw(true);
				if(this.isNil(grids[i].binddataset)) continue;
				if(this.isNil(this[grids[i].binddataset])) continue;

				this[grids[i].binddataset].clearData();
				// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
				this._smfSetNodataTextToGrid(grids[i],"데이터를 가져오는데 실패했습니다");
			}
		}else{
			//성공
			this.dsService.setColumn(nRow, "state", "succ");
			this.smfInitBindingControls(nRow);// bindingControls에 있는 컨트롤들의 세팅
			service.uncheckGridTitle();
			

			//그리드에 데이터가 없습니다.표시
			var grids = this.smfFindGridsByServiceId(sId);
			for(var i=0,size=grids.length; i<size; i++){
				if(this.isNil(grids[i].binddataset)) continue;

				if(this[grids[i].binddataset].rowcount == 0){
					// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
					this._smfSetNodataTextToGrid(grids[i],"조회된 데이터가 없습니다");
				}else{
					// 2023.05.11  nodatatext를 임의로 지정가능하게 변경
					this._smfSetNodataTextToGrid(grids[i],"데이터가 없습니다");
				}

				grids[i].set_enableredraw(false);
				grids[i].set_enableredraw(true);
			} 


			// 서버 유효성검사 후 처리
			this.smfAfterBackendValidationResultMessageProcess(service, sId, nReason, sMessage); 
			this.smfAfterBackendValidationProcess(service, sId, nReason, sMessage);


			//로컬,개발,검수에서만 검증. 조회한 데이터에 개인정보가 있는지
			if(this.smfIsLocalMode() || this.smfIsDevMode() || this.smfIsExamineMode()){
				try{
					var aryOutDatasets = service.toArrayByOutDatasets();
					for(var i=0,size=aryOutDatasets.length; i<size; i++){
						var ds = aryOutDatasets[i];

						this.smfDetectPersonalInformation(ds);
					}
				}catch(e){
					this.trace(e);
					throw e;
				}
			}
		}

	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		try{
			var propertiesOfService = this.smfGetServiceProperties()[sId];
			if(this.isNotNil(propertiesOfService)){
				if(this.smfIsFunc(propertiesOfService.callback)){
					propertiesOfService.callback.call(this, sId, nReason, sMessage);
				}
			}
		} catch(e)
		{
			trace("처리중 에러가발생했습니다.");
		}finally{
			var jParams = this.smfService_prototype_serivces[sId];
			try{
				if(this.dsService){
					//innerCallback함수 호출
					var sInnerCallback = this.dsService.getColumn(nRow, 'innerCallback');
					if(this.isNotNil(sInnerCallback)){
						var expr = this.format(sInnerCallback + "('{0}', '{1}', '{2}', {3}, jParams)", [sId, nReason, sMessage, "service"]);
						eval('this.' + expr );
					}
				}
			} catch(e)
			{
				trace("처리중 에러가발생했습니다.");
			}finally{
				if(this.smfStr(sId).indexOf("log_") != 0){
					//로그남기는 서비스는 콜백을 호출 안시킨다.
					this.fnTransCallback(sId, nReason, sMessage, jParams);
				}else{
					return;
				}
			}
		}
	}
};


prForm.smfBeforeBackendValidationProcess = function(service, serviceId, reason, message){
	if(! this.dsValidationResult) return;
	
	this.dsValidationResult.setColumn(0, "validationResult", "");
};

prForm.smfAfterBackendValidationProcess = function(service, serviceId, reason, message){
	if(! this.dsValidationResult) return;
	
	var validationResult = this.dsValidationResult.getColumn(0, "validationResult");
	this.smfAfterValidationResult(serviceId, reason, message, validationResult);	
};





/**
 * (공통만사용)조회한 데이터에 개인정보가 있는지 검사
 *
 * @param  ds:Dataset      - 검사할 데이터셋
 * @return boolean
 * @see
 */
prForm.smvDetectPersonalInformation = {
};

prForm.smfDetectPersonalInformation = function(ds){
	return;
	if(ds in this.smvDetectPersonalInformation) return;
	this.smvDetectPersonalInformation[ds] = true;

	var grid = this.smfGridByDataset(ds);

	var bDetect = false;
	var columnMessages = [];

	if(grid != null){

		var nRrnBodyCellIndex = -1;
		var columnName = "";
		var needForValidColumns = [];
		var gridCellIndexs = [];

		var nHeadCount = grid.getCellCount("head");
		var nBodyCount = grid.getCellCount("body");

		for(var i=0,size=nBodyCount; i<size; i++){
			var bodyCellText = this.smfStr(grid.getCellProperty("body", i, "text"));
			if(this.smfContainsText(bodyCellText, "bind:") && (this.smfContainsText(bodyCellText, "rrn") || this.smfContainsText(bodyCellText, "jumin"))){
				nRrnBodyCellIndex = i;
				var columnName = bodyCellText.substr(5);
				needForValidColumns.push(columnName);
				gridCellIndexs.push(i);
			}
		}

		if(nRrnBodyCellIndex == -1) return;


		var datasetName = this.smfFullId(grid) + ":" + ds.name;
		for(var i=0,size=Math.min(1000, ds.rowcount); i<size; i++){
			for(var n=0,nsize=needForValidColumns.length; n<nsize; n++){
				var columnName = needForValidColumns[n];

				var value = this.smfStr(ds.getColumn(i, columnName));
				if(value.length == 14){
					value = nexacro.replaceAll(value,"-", "");
				}
				if(value.length != 13) continue;
				if(value != nexacro.toNumber(value)) continue;

				bDetect = true;
 

				grid.setCellProperty("body", gridCellIndexs[n], "background", "cornflowerblue");
				grid.setCellProperty("body", gridCellIndexs[n], "background2", "cornflowerblue");
				columnMessages.push(this.format("그리드[{0}] 컬럼명[{1}]", [datasetName, columnName]));
			}
		}
	}

	var needForValidColumns = [];
	var columnMetas = ds.colinfos;
	for(var i=0,size=columnMetas.length; i<size; i++){
		var cmeta = columnMetas[i];
		//주민번호
		var columnName = this.smfStr(cmeta.name);
		if( this.smfContainsText(columnName, "rrn")){
			needForValidColumns.push(columnName);
		}else if( this.smfContainsText(columnName, "jumin")){
			needForValidColumns.push(columnName);
		}
	}

	var self = this;
	var splitedColumnNames = needForValidColumns.join("\n");
	this.smfTravelComponents(this, function (oComp, fnc, nLvl){
		var binditem = self.smfBindItemByComponent(oComp);
		if(binditem == null) return;

		if(self.smfContainsText(splitedColumnNames, binditem.columnid)){
			var value = self.smfStr(ds.getColumn(ds.rowposition, binditem.columnid));
			if(value.length == 14){
				value = nexacro.replaceAll(value,"-", "");
			}
 			if(value.length != 13) return;
 			if(value != nexacro.toNumber(value)) return;


			var componentName = self.smfFullId(oComp);
			oComp.set_border("3 solid cornflowerblue cornflowerblue");
			/* [X-LOG] 변수(columnMessages)가 있는지 확인이 필요합니다.*/ columnMessages.push(self.format("컴포넌트[{0}] 컬럼명[{1}]", [componentName, binditem.columnid]));
			/* [X-LOG] 변수(bDetect)가 있는지 확인이 필요합니다.*/ bDetect = true;
		}

	});

	if(bDetect == true){
		var message = ("개인정보가 노출된 페이지입니다. 조치하시기 바랍니다.\n");
		self.smfDevException(message + columnMessages.join("\n"));
		return;
	}
};


/**
 * (공통만사용)서비스를 얻어온다.
 *
 * @param  sId      - dsService Dataset에 등록한 id
 * @return boolean
 * @see
 */
prForm.smfHasService = function(sServiceId){
	if(this.objects['dsService'] == null){
		this.smfDevException('dsService Dataset이 없습니다');
		return false;
	}

	var nRow = this.dsService.findRow('id', sServiceId);
	if(nRow == -1){
		this.smfDevException(sServiceId + "는(은) dsService에 등록되지 않은 아이디입니다");
		return false;
	}

	return true;
};

/**
 * 서비스를 호출한다.
 *
 * @param  serviceId - dsService Dataset에 등록한 id
 * @param  options - option
 * @param  bMessage - message를 보일건지.. 사용안함
 * @return boolean
 * @see    smfService('selectCode');
 */
prForm.smfService = function(serviceId, options){
	this.astfAssertParamValueIsStringType(serviceId);
	if(this.isNotNil(options)) this.astfAssertParamValueIsObjectType(options);	
	this.smfAssertExistsServiceId(serviceId);
	this.smfAssertExistsCallbackFunctionInContext();
	
	
// 	if(this.smvActiveService != true){
// 		this.trace("smvActiveService속성이 false입니다. service가 실행되지 않습니다");
// 		throw "smvActiveService속성이 false입니다. service가 실행되지 않습니다";
// 		return;
// 	}
	options = this.nvl(options, {});

	if(serviceId.indexOf("log_") != 0){
		options.focusedComponent = this.getFocus();
	}
	
	if(! this.smfService_prototype_serivces) this.smfService_prototype_serivces = {};
	this.smfService_prototype_serivces[serviceId] = options;
	var srv = new RequestService(this, serviceId, options);
	srv.execute();
};

/**
 * 동적으로 dsService를 생성한다.
 * 
 */
prForm.smfCreateServiceDataset = function(){
	var ds = this.smfGetOrCreateDataset("dsService"); //주의 smfGetOrCreateDataset는 데이터셋의 ClearData함수를 호출하므로 기존의 row가 다없어진다.

	if(ds.getColumnInfo("id")              == null) ds.addColumn("id", "string");
	if(ds.getColumnInfo("url")             == null) ds.addColumn("url", "string");
	if(ds.getColumnInfo("inDatasets")      == null) ds.addColumn("inDatasets", "string");
	if(ds.getColumnInfo("outDatasets")     == null) ds.addColumn("outDatasets", "string");
	if(ds.getColumnInfo("svctp")           == null) ds.addColumn("svctp", "string");
	if(ds.getColumnInfo("callback")        == null) ds.addColumn("callback", "string");
	if(ds.getColumnInfo("bindingControls") == null) ds.addColumn("bindingControls", "string");
	if(ds.getColumnInfo("state")           == null) ds.addColumn("state", "string");
	if(ds.getColumnInfo("reason")          == null) ds.addColumn("reason", "string");
	if(ds.getColumnInfo("message")         == null) ds.addColumn("message", "string");
	if(ds.getColumnInfo("strmsg")          == null) ds.addColumn("strmsg", "string");
	if(ds.getColumnInfo("asynctp")         == null) ds.addColumn("asynctp", "string");
	if(ds.getColumnInfo("bintp")           == null) ds.addColumn("bintp", "string");
	if(ds.getColumnInfo("comtp")           == null) ds.addColumn("comtp", "string");
	if(ds.getColumnInfo("innerCallback")   == null) ds.addColumn('innerCallback','string');
	if(ds.getColumnInfo("executeDate")     == null) ds.addColumn('executeDate','string');
	if(ds.getColumnInfo("executeCount")    == null) ds.addColumn('executeCount','string');
	if(ds.getColumnInfo("group")           == null) ds.addColumn('group','string'); 
	if(ds.getColumnInfo("params")          == null) ds.addColumn('params','string');
	if(ds.getColumnInfo("package")         == null) ds.addColumn('package','string');
	if(ds.getColumnInfo("service")         == null) ds.addColumn('service','string');
	if(ds.getColumnInfo("vo")              == null) ds.addColumn('vo','string');
	if(ds.getColumnInfo("method")          == null) ds.addColumn('method','string');
	if(ds.getColumnInfo("bizMessage")      == null) ds.addColumn('bizMessage','string');

	// confirm타입
	if(ds.getColumnInfo("confirmType")      == null) ds.addColumn('confirmType','string');
	if(ds.getColumnInfo("keepInDatasetOptions")      == null) ds.addColumn('keepInDatasetOptions','string');
	if(ds.getColumnInfo("containerNameOfInputComponents")      == null) ds.addColumn('containerNameOfInputComponents','string');
	return ds;
};


/**
 * 서비스상태를 반환한다.
 *
 * @param  sId      - dsService Dataset에 등록한 id
 * @return String
 * @see    alert_opacity(smfServiceSatate('selectCode')); // ready or succ or fail
 */
prForm.smfServiceSatate = function(sId){
	var nRow = this.dsService.findRow('id', sId);
	return this.dsService.getColumn(nRow, "reason");
};

/**
 * 서비스호출이 성공했는지
 *
 * @param  sId      - dsService Dataset에 등록한 id
 * @return String
 * @see    alert_opacity(smfIsServiceSucc('selectCode')); // true or false
 */
prForm.smfIsServiceSucc = function(sId){
	var sState = this.smfStr(this.smfServiceSatate(sId));
	return this.In(sState, ["1", "0"]);
};

/**
 * 서비스호출이 성공하지 않았는지
 *
 * @param  sId      - dsService Dataset에 등록한 id
 * @return boolean
 * @see    alert_opacity(smfIsNotServiceSucc('selectCode')); // true or false
 */
prForm.smfIsNotServiceSucc = function(sId){
	return ! this.smfIsServiceSucc(sId);
};

/**
 * 서비스호출이 실패했는지
 *
 * @param  sId      - dsService Dataset에 등록한 id
 * @return boolean
 * @see    alert_opacity(smfIsServiceFail('selectCode')); // true or false
 */
prForm.smfIsServiceFail = function(sId){
	return "-1" == this.smfServiceSatate(sId);
};

/**
 * 사용안함
 *
 * @param
 * @return
 * @see
 */
prForm.smfFindRows = function(ds, sColumnName, sColumnValue){
	var idx = 0;
	var aryResult = [];
	for(var i=0,size=ds.rowcount; i<size; i++){
		if(sColumnValue == ds.getColumn(i, sColumnName)){
			aryResult[idx++] = i;
		}
	}

	return aryResult;
};


/**
 * ds에서 aryExpr에 해당하는 row index를 얻는다.
 *
 * @param  ds : Dataset
 * @param  aryExpr : json
 * @return rowindex를 가지고 있는 array
 * @see    smfSearchRows(ds, {hakbun:'10101010', name:'홍길동'});
 */
prForm.smfSearchRows = function(ds, jExpr){
	var idx = 0;
	var aryResult = [];
	for(var i=0,size=ds.rowcount; i<size; i++){
		var b = true;

		for(var sColumn in jExpr){
			sValue = jExpr[sColumn];
			if(sValue != ds.getColumn(i, sColumn)){
				b = false;
				break;
			}
		}

		if(b){
			aryResult[idx++] = i;
		}
	}

	return aryResult;
};

/**
 * 폼을 닫기전 체크한다.
 * datasetOrArrayOfDataset
 *
 * @param  datasetOrdatasetOrArrayOfDataset Dataset이나 Dataset으로 구성된 Array
 * @param  [sMessage] 변경된 데이터가 있을때 보여줄 메시지
 * @return boolean
 * @see    return smfCloseFormConfirm(dsMain); // dsMain이 변경되었으면 Confirm메시지
           return smfCloseFormConfirm([dsMain, dsSub], "변경된 데이터가 있습니다.\n화면을 종료하시겠습니까?"); // dsMain이 변경되었으면 Confirm메시지
 */
prForm.smfCloseFormConfirm = function(datasetOrArrayOfDataset, options){
	if(this.astfIsParamInstanceofType(datasetOrArrayOfDataset, nexacro.Dataset)){
		datasetOrArrayOfDataset = [datasetOrArrayOfDataset];
	}

	for(var i in datasetOrArrayOfDataset){
		this.astfAssertParamValueIsDatasetType(datasetOrArrayOfDataset[i], "datasetOrArrayOfDataset[" + i + "]");
	}

	if(this.isNil(options)) options = {};


	this.smfApplyData();

	options.canClose = true;
	options.message = "";
	options.modifiedDataset = null;
	
	var hasUpdate = false;
	

	for(var i=0,size=datasetOrArrayOfDataset.length; i<size; i++){
		var ds = datasetOrArrayOfDataset[i];

		if(this.smfIsUpdate(ds)){
			hasUpdate = true;
			options.canClose = false;
			options.modifiedDataset = ds;
			options.message = "화면에 변경된 값이 저장되지 않았습니다.\n종료하시겠습니까?";
			break;
		}
	}
	
	// confirm이 나타나지 않도록 하려면 null or undefined 를 리턴해야한다
	if(! hasUpdate) return;


	return options.message;
};

/**
 * like
 *
 * @param  sValue :
 * @param  sLikeValue
 * @return boolean
 * @see    smfIsLike("100", "10")//true
 *         smfIsLike("100", "100")//true
 *         smfIsLike("100", "1000")//false
 */
prForm.smfIsLike = function(sValue, sLikeValue){
	if(sValue == null || sValue == undefined) return false;
	if(sLikeValue == null || sLikeValue == undefined) return false;

	sValue += "";
	sLikeValue += "";

	return 0 == sValue.indexOf(sLikeValue);
};

/**
 * text를 formatting한다.
 *
 * @param  sFormat   - 포매팅할 문자열
 * @param  sFormat   - 포매팅할 문자열
 * @param  aryParams - 파라메터
 * @return String
 * @see    alert_opacity(Format("{0} x {1} = {2}", [10, 2, 10 * 2])); // 10 x 2 = 20
 */
prForm.smfFormat = function(sFormat, aryParams){
	for(var i=0, size=aryParams.length; i<size; i++){
		sFormat = nexacro.replaceAll(sFormat,"\{" + i + "\}" , aryParams[i]);
	}

	return sFormat;
};

/**
 * ds데이터셋의 값을셋팅
 *
 * @param  ds : 데이터셋
 * @param  sColumnName : 변경될 컬럼명
 * @param  sTrueValue  : 조건이 참일경우 세팅할값(값이 undefined면 세팅이 안됨.)
 * @param  sFalseValue : 조건이 거짓일경우 세팅할값(값이 undefined면 세팅이 안됨.)
 * @param  jParam : json 객체
 * @return void
 * @see    smfSetColumnsExpr(dsMyData, '_chk', '1', '0', {DSModifyRow:true, hakbun:'100', kname:'홍길동'});
 *           //dsMyData의 _chk를 1로 하는데 조건은 hakbun이 '100' and kname이 '홍길동'
 *             DSModifyRow는 ds.getRowType을 비교해서 INSERT,UPDATE일때 값을 변경함.
 *             currow는 ds.rowposition과 i가 같으면 true
 */
prForm.smfSetColumnsExpr = function(ds, sColumnName, sTrueValue, sFalseValue, jParam){
	for(var i=0,size=ds.rowcount; i<size; i++){
		var bCondition = true;
		for(var sColID in jParam){
			if(sColID == "DSRowType"){ //DSModifyRow는 ds.getRowType을 비교해서 INSERT,UPDATE일때 값을 변경함.
				var nRowType = ds.getRowType(i);
				var nRowType2 = jParam[sColID];
				bCondition = ( nRowType2 == (nRowType2 | nRowType));
			}else if(sColID == "currow"){ //currow는 ds.rowposition을 비교해서 i와 currow가 같을때 true
				var nCurrow = ds.rowposition;
				bCondition = nCurrow == i;
			}else if(ds.getColumn(i, sColID) != jParam[sColID]){
				bCondition = false;
			}

			if(bCondition == false) break;
		}

		if(bCondition){
			if(sTrueValue != undefined)ds.setColumn(i, sColumnName, sTrueValue);
		}else{
			if(sFalseValue != undefined) ds.setColumn(i, sColumnName, sFalseValue);
		}
	}
};

/**
 * sText를 split한다. sText가 String이 아니면 []넘김
 *
 * @param  sText : split할 text
 * @param  sDelemiter : 구분자
 * @return array
 * @see
 */
prForm.smfSplit = function(sText, sDelemiter){
    sText = this.smfStr(sText);
    if(sText.length == 0) return [];

    return sText.split(sDelemiter);
};


/**
 * sText를 String으로 형변환
 * undefined   -> ""
 * null        -> ""
 * 1           -> "1"
 * ""          -> ""
 * 1.1         -> "1.1"
 * @param  sText
 * @return String
 * @see
 */
prForm.smfStr = function(sText){
	if(sText == undefined) return "";
	if(sText == null) return "";
	if(sText instanceof String) return sText;

	return ""+sText;
};

/**
 * 공통코드조회
 * (사용안함)
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfCodeList('code', [dsSchulCrseScCode, dsSchulFaScCode, dsSchulGrgdScCode, dsSchulKndScCode]);
 */
prForm._smfCodeList = function(sServiceId, aryDataset, bSync){
	bSync = bSync == true;

	////////////////////////검증//////////////////////////////
	if(this.isNil(sServiceId)){
		this.smfDevException("sServiceId를 입력하세요.");
		return false;
	}
	sServiceId = this.smfStr(sServiceId);
	if(sServiceId.indexOf("code") != 0){
		this.smfDevException("sServiceId를 'code'로 시작하세요.\n예)code, code01, code02...");
		return false;
	}

	if(! (aryDataset instanceof Array)){
		this.smfDevException("파라메터aryDataset는 Array이어야 합니다");
		return false;
	}


	if(aryDataset.length > 25){
		this.smfDevException("공통코드갯수가 25개를 넘었습니다.\n25이하로 사용하세요");
		return false;
	}

	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		var sMessage = "";

		if(! (aryDataset[i] instanceof nexacro.Dataset)){
			this.smfDevException(this.format("aryDataset[{0}]번째가 Dataset이어야 합니다.", [i]));
			return false;
		}

		for(var n=0,sizen=ds.getConstCount(); n<sizen; n++){
			var sConstId = ds.getConstColID(n);
			if(this.notIn(sConstId, ["firstCode", "clsfCode", "userDfnSet", "filterExpr"])){
				sMessage += this.format("{0}.ConstColumns[{1}]({2}) 항목은 잘못된이름입니다.\n", [ds.name, n, sConstId]);
			}


			if(sConstId == "clsfCode" && ds.getConstColumn(sConstId).indexOf("eval:") == 0){
				try{
					/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ this.myeval(ds.getConstColumn(sConstId).substr(5, 999));
				}catch(e){
					sMessage += this.format("{0}.ConstColumns[{1}]({2}) eval문({3})에 에러가 있습니다.\n", [ds.name, n, sConstId, ds.getConstColumn(sConstId)]);
				}
			}

			if(sConstId == "userDfnSet" && this.isNil(ds.getConstColumn(sConstId)) == false){
				var sUserDfnSet = this.smfStr(ds.getConstColumn(sConstId));
				if(sUserDfnSet.indexOf("=") == -1 && sUserDfnSet.indexOf("eval:") == -1){
					sMessage += this.format("{0}.ConstColumns[{1}]({2}) 사용에러입니다.\nKEY=VALUE형태로 사용하세요\n"
					                  +"예)USER_DFN_CODE_VALUE01=001 또는 USER_DFN_CODE_VALUE05=KR\n", [ds.name, n, sConstId, ds.getConstColumn(sConstId)]);
				}
			}

			if(sConstId == "userDfnSet" && ds.getConstColumn(sConstId).indexOf("eval:") == 0){
				try{
					/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ this.myeval(ds.getConstColumn(sConstId).substr(5, 999));
				}catch(e){
					sMessage += this.format("{0}.ConstColumns[{1}]({2}) eval문({3})에 에러가 있습니다.\n", [ds.name, n, sConstId, ds.getConstColumn(sConstId)]);
				}
			}
		}

		if("" != sMessage){
			this.smfDevException(sMessage);
			return false;
		}
	}

	////////////////////////검증끝//////////////////////////////
	var _dsCodeList = this.smfGetOrCreateDataset('_dsCodeList');
	_dsCodeList.clear();
	//컬럼들을 생성한다.
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		_dsCodeList.addColumn("clsfCode"+(i), "STRING", 256);
		_dsCodeList.addColumn("userDfnSet"+(i), "STRING", 256);
	}
	_dsCodeList.addRow();
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];

		//clsfCode 값 세팅
		var sClsfCode = this.smfStr(ds.getConstColumn("clsfCode"));
		if(sClsfCode.indexOf("eval:") == 0){
			sClsfCode = this.myeval(sClsfCode.substr(5, 999));
		}
		_dsCodeList.setColumn(0, "clsfCode"+(i), sClsfCode);

		//userDfnSet 값 세팅
		var sUserDfnSet = this.smfStr(ds.getConstColumn("userDfnSet"));
		if(sUserDfnSet.indexOf("eval:") == 0){
			sUserDfnSet = this.myeval(sUserDfnSet.substr(5, 999));
		}
		_dsCodeList.setColumn(0, "userDfnSet"+(i), sUserDfnSet);
	}

	if(this.dsService.findRow("id", sServiceId) > -1){
		var nDeleteRow = this.dsService.findRow("id", sServiceId);
		this.dsService.deleteRow(nDeleteRow);
	}

	//dsService에 설정
	var nSrvRow = this.dsService.addRow();
	var sOutDatasets = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		sOutDatasets += ds.name + "="+"dsSymCdmCc01M00SVO_codeList"+i+ " ";
	}

	var sBindingCtrls = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		if(this.isNil(ds.getConstColumn("firstCode"))) continue;
		sBindingCtrls += " " + ds.name + "=" + ds.getConstColumn("firstCode");
	}

 
	if(this.smvDsServiceAddColumnCheck == false) {
		this.dsService.addColumn('package','string');
		this.dsService.addColumn('service','string');
		this.dsService.addColumn('vo','string');
		this.dsService.addColumn('method','string');
		this.dsService.addColumn('bizMessage','string');
		this.smvDsServiceAddColumnCheck = true;
	}

	this.dsService.setColumn(nSrvRow, "id", sServiceId);
	this.dsService.setColumn(nSrvRow, "inDatasets", "dsSymCdmCc01M00SVO=_dsCodeList");
	this.dsService.setColumn(nSrvRow, "outDatasets", nexacro.trim(sOutDatasets));
//	this.dsService.setColumn(nSrvRow, "package", "edu.cm.sym.cdm.cc.svc");
// 	this.dsService.setColumn(nSrvRow, "vo", "SymCdmCc01M00SVO");
// 	this.dsService.setColumn(nSrvRow, "service", "SymCdmCc01M00SVC");
// 	this.dsService.setColumn(nSrvRow, "method", "listMultiCode");
	this.dsService.setColumn(nSrvRow, "svctp", "");
	this.dsService.setColumn(nSrvRow, "bindingControls", nexacro.trim(sBindingCtrls));
	this.dsService.setColumn(nSrvRow, "bizMessage", "");
	this.dsService.setColumn(nSrvRow, "callback", "fnTransCallback");
	this.dsService.setColumn(nSrvRow, "url", "/sym_cdm_cc00_002.ux");
	this.dsService.setColumn(nSrvRow, "state", "");
	this.dsService.setColumn(nSrvRow, "reason", "");
	this.dsService.setColumn(nSrvRow, "message", "");
	this.dsService.setColumn(nSrvRow, "asynctp", this.iif(bSync, "false", "true"));
	this.dsService.setColumn(nSrvRow, "bintp", "");
	this.dsService.setColumn(nSrvRow, "comtp", "");

	this.smfService(sServiceId);

	return true;
};

/**
 * sSource를 클립보드로
 *
 * @param  sSource : string
 * @return void
 * @see    smfCopyToClipboard("this is string")
 */
prForm.smfCopyToClipboard = function(sSource){
	system.clearClipboard();
	return system.setClipboard("CF_TEXT",sSource);
};

/**
 * combo에 년도를 추가한다.
 *
 * @param  scmb : combo
 * @param  nYear : 기준년도
 * @param  nPlusMinus : nYear +-할 년수의 수
 * @return void
 * @see    smfAddYearToDS(cmb, 2010, 3);
 *         --------결과--------
 *         2013
 *         2012
 *         2011
 *         2010 -- 기준년도
 *         2009
 *         2008
 *         2007
 */
prForm.smfAddYearToDS = function(cmb, nYear, nPlusMinus){
	nYear = parseInt(nYear);
	/* [X-LOG] 변수(nPlus)가 있는지 확인이 필요합니다.*/ nPlus = parseInt(nPlusMinus);

	var ds = cmb.innerdataset;
	if(ds instanceof String){
		ds = this.objects[ds];
	}

	var sCodeColumn = cmb.codecolumn;
	var sDataColumn = cmb.datacolumn;

	ds.clearData();

	for(var i=1; i<=nPlusMinus; i++){
		var nRow = ds.addRow();
		ds.setColumn(nRow, sCodeColumn, nYear+i);
		ds.setColumn(nRow, sDataColumn, nYear+i);
	}

	var nRow = ds.addRow();
	ds.setColumn(nRow, sCodeColumn, nYear);
	ds.setColumn(nRow, sDataColumn, nYear);

	for(var i=1; i<=nPlusMinus; i++){
		var nRow = ds.addRow();
		ds.setColumn(nRow, sCodeColumn, nYear-i);
		ds.setColumn(nRow, sDataColumn, nYear-i);
	}

	cmb.set_value(nYear);
};

/**
 * 사용안함
 * _chk타이틀을 클리하면 checked toggle
 * 다른 컬럼을 선택하면 소팅
 *
 * @param  obj:Grid
 * @param  e:GridClickEventInfo
 * @return void
 * @see
 */
prForm.smfCheckAndSort = function(obj, e, sResetColumns){
	var sColId = obj.getCellProperty("body",e.cell,"text");
	if ("bind:_chk" == sColId){
		this.smfSetGridCheckAll(obj, e);
	}else{
		this.smfProcGrdSort(obj, e.cell, sResetColumns);
	}
};

/**
 * 공통코드를 필터한다.
 *
 * @param  comboArray
 * @return void
 * @see
 */
prForm.smfInitChainFilterBase = function(comboArray) {

    var comboArgs = [[comboArray[0], ""]];

    for(var i=1; i<comboArray.length; i++) {



        comboArgs[i] = [comboArray[i],   " upperCdcValue == " + this.smfFullId(comboArray[i-1]) + ".value "];



    }


    this.smfInitChainFilter(comboArgs, true);



};

/**
 * 코드를 필터한다.
 *
 * @param  aryComboAndOption
 * @param  bSelectFirst : true면 combo.index = 0을 세팅해준다.
 * @return void
 * @see    smfInitChainFilter([[div_manage.cmb_nara, ""]
						        ,[div_manage.cmb_team, " upperClsfCodeValue == div_manage.cmb_nara.value "]
						        ,[div_manage.cmb_player, " naraCodeValue == div_manage.cmb_nara.value && upperClsfCodeValue == div_manage.cmb_team.value "]
			]);

 */
prForm.smfInitChainFilter = function(aryComboAndOption, bSelectFirst){
	if(bSelectFirst == undefined || bSelectFirst == null) bSelectFirst = false;
	var	nCount = 0;

	//초기작업
	var	oPrior = null;
	var	oFirstCombo	= null;
	//linked	list이용
	//master	detail관계를	정의
	for(var i=0,size=aryComboAndOption.length; i<size; i++){
		var obj = aryComboAndOption[i][0];
		obj.filterExpr = aryComboAndOption[i][1];
		obj.onitemchanged.insertHandler(0,	this.smfDoFilterItemChanged);
		obj.chainIndex = i;
		obj.chainCount = size;
		if(i == 0) oFirstCombo = obj;
		if(oPrior != null) oPrior.nextCombo = obj;
		obj.priorCombo = oPrior;
		oPrior = obj;
	}

	//처음 combo를 세팅시킨다.
	if(bSelectFirst){
		oFirstCombo.set_index(0);
		this.smfDoFilterItemChanged(oFirstCombo);
	}else{
		this.smfNextChainFilter(oFirstCombo);
	}
};

/**
 * BindDataset으로 연결된 Dataset.RowPosChange가 발생했을때 호출하는 함수
 *
 * @param  obj : Combo
 * @param  dsBind : Dataset
 * @param  e : DSRowPosChangeEventInfo
 * @return void
 * @see
 */
prForm.smfNextChainFilter = function(obj, dsBind, e){
	//index 0으로
	while(obj.nextCombo	!= null){
		obj = obj.nextCombo;
		obj.innerdataset.filter("currow==0 || " + obj.filterExpr);
	}
};

/**
 * (공통만사용) 필터가	연결된	콤보change	event
 *
 * @param  obj : Combo
 * @param  e  : ComboChangeEvent
 * @param  bIsNotEvent : 이벤트가아닌 함수호출형태로 호출시 true넘김
 * @return void
 * @see
 */
prForm.smfDoFilterItemChanged = function(obj, e, bIsNotEvent){
	if(obj.nextCombo == null) return;
	bIsNotEvent = bIsNotEvent == true;

	var priorObj = obj;
	var	priorDs = obj.innerdataset;
	var	obj = obj.nextCombo;
	var	ds = obj.innerdataset;

	//전체를 선택한 경우 다음 combo가 모두 나오게한다.
	var objFirstCode = this.smfStr(priorDs.getConstColumn("firstCode"));
	if(objFirstCode.indexOf("ALL") != -1 && priorObj.index == 0){
		ds.filter("");
	}else{
		ds.filter("currow==0 || " + obj.filterExpr);
	}

	if(! bIsNotEvent){
		obj.set_index(0);
	}

	//index 0으로
	while(obj.nextCombo	!= null){
		priorObj = obj;
		priorDs = obj.innerdataset;
		obj = obj.nextCombo;
		ds = obj.innerdataset;

		//전체를 선택한 경우 다음 combo가 모두 나오게한다.
		var objFirstCode = this.smfStr(priorDs.getConstColumn("firstCode"));
		if(objFirstCode.indexOf("ALL") != -1 && priorObj.index == 0){
			ds.filter("");
		}else{
			ds.filter("currow==0 || " + obj.filterExpr);
		}

		if(! bIsNotEvent){
			obj.set_index(0);
		}
	}
};

/**
 * 그리드 헤더를 조건을 포함해서 checkbox컬럼을 토글링한다.
 *
 * @param  obj:Grid,
 * @param  e:GridClickEventInfo,
 * @param  fncConditon : function(ds, nRow) return boolean; 형태의 함수
 * @return void
 * @see    smfToggleChkHeader(obj, e, function (ds, nRow){
				if(ds.getColumn(nRow,"frmtnYn" )=="Y" || ds.getColumn(nRow,"estblYn" )=="Y"){
					return false;
				}else{
					return true;
				}
			});
 */
prForm.smfToggleChkHeader = function(obj, e, fncConditon){
	var strText = ""; 
	var celltype = obj.getCellProperty("head",e.cell,"displaytype");
	var utlv_IsGridCheckAll = obj.getCellText(-1,e.cell);

	if (celltype.toUpperCase() != "CHECKBOXCONTROL") {
		return;
	}


	var dsObj = this.smfFindComponentInThisContext(obj.binddataset);
	var bodyCell = e.cell;
	if(this.isNotNil(e.bodyCell)){
		bodyCell = e.bodyCell;
	}

	var v_Colid = nexacro.replaceAll(obj.getCellProperty("body", bodyCell, "text"),"bind:", "");

	if (utlv_IsGridCheckAll == 1) {
		utlv_IsGridCheckAll = 0;
		strText = "전체해제";
	} else {
		utlv_IsGridCheckAll = 1;
		strText = "전체선택";
	}
	dsObj.set_enableevent(false);
	for (var i=0; i<dsObj.getRowCount(); i++) {
		if(this.isNotNil(fncConditon)){
			var bAccept = fncConditon.call(this, dsObj, i);
			if( bAccept != true) continue; 
		}

		dsObj.setColumn(i, v_Colid, utlv_IsGridCheckAll);
	}
	obj.setCellProperty( "head", e.cell, "expr", utlv_IsGridCheckAll);
	dsObj.set_enableevent(true);

	// this.webfSetAccessMsg(strText);
};

/**
 * 함수가 있는지 체크
 *
 * @param  sFuncName : 함수명
 * @return boolean
 * @see    smfHasFunc("test_function");
 */
prForm.smfHasFunc = function(sFuncName){
	// 존재하지 않는 함수 체크
	return (typeof this[sFuncName]) == "function";
};

/**
 * 함수인지
 *
 * @param  sFuncName : 함수명
 * @return boolean
 * @see    smfHasFunc("test_function");
 */
prForm.smfIsFunc = function(maybeFunction){
	if(maybeFunction == undefined || maybeFunction == null) return false;


	// 존재하지 않는 함수 체크
	return (typeof maybeFunction) == "function";
};

/**
 *
 *
 * @param  sFuncName : 함수명
 * @return boolean
 * @see    smfHasFunc("test_function");
 */
prForm.smfBindItemByComponent = function(comp){
	for(var i=0,size=this.binds.length; i<size; i++){
		if(this.binds[i].compid != this.smfFullId(comp)) continue;
		if(this.binds[i].propid != 'value') continue;

		return this.binds[i];
	}

	return null;
};


prForm.smfFilterBindItemFirst = function(predicate){
	for(var i=0,size=this.binds.length; i<size; i++){
		if(predicate(this.binds[i]) == true) return this.binds[i];
	}
	
	return null;
};

prForm.smfFilterBindItems = function(predicate){
	var result = [];
	for(var i=0,size=this.binds.length; i<size; i++){
		if(predicate(this.binds[i]) == true){
			 result.push( this.binds[i] );
		}
	}
	
	return result;
};

/**
 *
 *
 * @param  sFuncName : 함수명
 * @return boolean
 * @see    smfBindItemByDatasetColumnName("test_function");
 */
prForm.smfBindItemByDatasetColumnName = function(datasetName, columnName){
	for(var i=0,size=this.binds.length; i<size; i++){
		if(this.binds[i].datasetid != datasetName) continue;
		if(this.binds[i].columnid != columnName) continue;
		if(this.binds[i].propid != 'value') continue;

		return this.binds[i];
	}

	return null;
};

/**
 *
 *
 * @param  fnc : 함수function(binditem) return boolean;
 * @return binditem or null
 * @see    smfGetBindItem(function (binditem){
           });
 */
prForm.smfGetBindItem = function(fnc){
	for(var i=0,size=this.binds.length; i<size; i++){
		if(fnc(this.binds[i]) == true){
			return this.binds[i];
		}
	}

	return null;
};



/**
 * cmbPivot를 기준으로 combo들을 클리어 한다.
 *
 * @param  cmbPivot 기준이 되는 combo
 * @param  combo와 firstCode >> [cmbDghtCrseScCode, "SEL", cmbMerge, "SEL"]

 * @return void
 * @see    var aryCombo = [cmbDghtCrseScCode, "SEL", cmbMerge, "SEL"];
 *			if(errcd != 0) return;
 *			if(svcid == "code01"){
 *				smfClearCombo(cmbDghtCrseScCode, aryCombo);
 *			}else if(svcid == "code02"){
 *				smfClearCombo(cmbMerge, aryCombo);
 *			}
 */
prForm.smfClearPivotCombo = function(cmbPivot, aryCombo){
    this.smfClearValueChain(cmbPivot, aryCombo);
};


/**
 * (공통만사용)
 */
prForm.smfCompByInnerDataset = function(ds){
    var comp = null;
    //Dataset을 innerdataset으로 사용하는 컴포넌트를 찾는다.
	var self = this;
    this.smfTravelComponents(this, function (obj, nLvl){
        if(!(obj instanceof nexacro.Combo || obj instanceof nexacro.Radio || obj instanceof nexacro.ListBox)) return;
        var dsInnerDataset = self.smfToDatasetObject(obj.innerdataset);
        if(dsInnerDataset == null) return;
        if(ds != dsInnerDataset) return;
        comp = obj;
    });

    return comp;
};

/**
 * (공통만사용)
 */
prForm.smfSetFirstCode = function(ds, sFirstCodeType){
    var sFirstCode = this.nvl(this.smfStr(ds.getConstColumn("firstCode")), this.smfStr(ds.getConstColumn("FirstCode")));
	if(this.isNotNil(sFirstCodeType)) sFirstCode = this.smfStr(sFirstCodeType);

    //필터수행
	var filterExpr = this.nvl(ds.getConstColumn("filterExpr"), ds.getConstColumn("FilterExpr"));
    if(! this.isNil(filterExpr)){
        ds.set_enableevent(false);
        try{
            ds.filter(filterExpr);
		} catch(e)
		{
			trace("처리중 에러가발생했습니다.");
		}finally{
            ds.set_enableevent(true);
        }
    }
    //////////////////////////////////

    if(sFirstCode == "") return false;

    var sCodeValue = ""; //코드값
    var sDataValue = ""; //

    if(-1 == sFirstCode.indexOf(":")){ //0:SEL, SEL
        sCodeValue = "";
        sDataValue = this.smfStr(sFirstCode);
    }else{
        sCodeValue = this.smfStr(sFirstCode.split(":")[0]);
        sDataValue = this.smfStr(sFirstCode.split(":")[1]);
    }

    var sCodeColumn = "";
    var sDataColumn = "";

    var cmb = this.smfCompByInnerDataset(ds); //InnerDataset으로 Component를 얻는다.
    if(cmb == null){
        if(ds.getColID(0) == "_chk"){
            sCodeColumn = ds.getColID(1);
            sDataColumn = ds.getColID(2);
        }else{
            sCodeColumn = ds.getColID(0);
            sDataColumn = ds.getColID(1);
        }
    }else{
        sCodeColumn = cmb.codecolumn;
        sDataColumn = cmb.datacolumn;
    }

	var bMatched = false;
    if(this.In(sDataValue, ["ALL_OR_ADD", "SEL_OR_ADD", "EMP_OR_ADD"])){
		bMatched = true;
		if(ds.rowcount == 0){
			var nAddRow = ds.addRow();
			ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
			ds.setColumn(nAddRow, sDataColumn, "없음");
		}else{
			sDataValue = nexacro.replaceAll(sDataValue,"_OR_ADD", "");
		}
    }


    switch(sDataValue){
		case "ALL_IF_EXISTS":
			bMatched = true;
			if(ds.rowcount == 0) break;
        case "ALL":
			bMatched = true;
			var nAddRow = ds.insertRow(0);
            ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
            ds.setColumn(nAddRow, sDataColumn, "- 전체 -");
            break;


		case "SEL_IF_EXISTS":
			bMatched = true;
			if(ds.rowcount == 0) break;
        case "SEL":
			bMatched = true;
			var nAddRow = ds.insertRow(0);
            ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
            ds.setColumn(nAddRow, sDataColumn, "- 선택 -");
            break;


		case "EMP_IF_EXISTS":
			bMatched = true;
			if(ds.rowcount == 0) break;
        case "EMP":
			bMatched = true;
			var nAddRow = ds.insertRow(0);
            ds.setColumn(nAddRow, sCodeColumn, sCodeValue);
            ds.setColumn(nAddRow, sDataColumn, "");
            break;

		default: break;
    }

    if(bMatched == false) return;

    //콤보가 연결되어있는 데이터셋이면
    //
    if(cmb != null){
		var oBindItem = this.smfBindItemByComponent(cmb);

		if(oBindItem == null){
			cmb.set_value(sCodeValue);
		}else{
			var controlBindDs = this.smfFindComponentInThisContext(oBindItem.datasetid);
			if(controlBindDs instanceof nexacro.Dataset){
				if(controlBindDs.rowcount == 0 || controlBindDs.rowposition == -1){
					cmb.set_index(0);
				}else{
					var binddatasetColumnValue = controlBindDs.getColumn(controlBindDs.rowposition, oBindItem.columnid);
					var nFindRow = ds.findRow(sCodeColumn, binddatasetColumnValue);
					if( nFindRow >= 0){
						binddatasetColumnValue = controlBindDs.getColumn(controlBindDs.rowposition, oBindItem.columnid);
						cmb.set_enableredraw(false);
						cmb.set_value(undefined);
						cmb.set_value(binddatasetColumnValue);
						cmb.set_enableredraw(true);
					}else{
						cmb.set_value(sCodeValue);
					}
				}
			}
		}
	}

    return true;
};

// 개발중 사용불가
prForm.smfDghtCrseScCode = function(id, dsIn, dsDghtCrseScCode, sBindingContorls){
	/* [X-LOG] 변수(dsIn)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsDghtCrseScCode)가 있는지 확인이 필요합니다. [X-LOG] 변수(sBindingContorls)가 있는지 확인이 필요합니다.*/ this.smfDService({
		id              : id
	   ,url             : "svc_default::/his_cdm_cc00_dqm_001.xp"
	   ,inDatasets      : " dsHisCdmCc00M01SVO=" + dsIn.name + ":A"
	   ,outDatasets     : " dsDghtCrseScCode=" + dsDghtCrseScCode.name
	   ,svctp           : "R"
	   ,bindingControls : sBindingContorls
	});
};

prForm.smfCreateVariable = function(){
	var ds = this.smfGetOrCreateDataset("dsSmVariable");
	return ds;
};

prForm.smfCacheFunctionList = function(){
	this.smvFunctions = {};
	
	for(var i in this){
		var value = this[i];

		if("function" == (typeof value)){
			var functionName = i;
			var functionObject = value;
			this.smvFunctions[functionObject] = functionName;
		}
	}
};
/**
 *
 *
 * @param  jParams :
 * @return boolean
 * @see    smfVariableDataset("test_function");
 */
prForm.smfVariableDataset = function(jParams){
	/* [X-LOG] 변수(dsSmVariable)가 있는지 확인이 필요합니다.*/var ds = dsSmVariable;
	ds.clear();
	ds.addColumn("_chk", "STRING", 255);
	ds.addRow();

	for(var id in jParams){
		var sValue = jParams[id];
		ds.addColumn(id, "String", 255);
		ds.setColumn(0, id, sValue);
	}

	return ds;
};

/**
 *
 *
 * @param  ds, nRow
 * @return boolean
 * @see    smfHasFunc("test_function");
 */
prForm.smfCopyRowVariable = function(dsSource, nRow){
	/* [X-LOG] 변수(dsSmVariable)가 있는지 확인이 필요합니다.*/var ds = dsSmVariable;

	ds.clear();
	for(var i=0,size=dsSource.colcount; i<size; i++){
        var sColumnName = dsSource.getColID(i);
        ds.addColumn(sColumnName, "String", 255);
	}

	ds.addRow();
	ds.copyRow(0, dsSource, nRow);
	return ds;
};

/**
 * ds Dataset의 nRow의 로우의 값을 json으로 변환.
 *
 * @param  ds, nRow
 * @return json
 * @see    var row = smfRowToJson(dsResult, dsResult.rowposition);
 *         alert_opacity(row.schulCode); //schulCode는 dsResult가 가지고 있는 column id
 */
prForm.smfRowToJson = function(ds,nRow){
	var result = {};
	for(var i=0,size=ds.colcount; i<size; i++){
		var colinfo = ds.getColumnInfo(i);
		result[colinfo.name] = this.smfStr(ds.getColumn(nRow, colinfo.name));
	}
	return result;
};



/**
 * ds Dataset의 nRow의 로우의 값을 객체로 변환
 *
 * @param  ds - 데이터셋
 * @param  nRow - 객체로 변환할 row index (default ds.rowposition)
 * @return object
 * @see    var row = this.smfRowToObject(dsResult);
 */
prForm.smfRowToObject = function(ds, nRow){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	if(this.isNotNil(nRow)) this.astfAssertParamValueIsNumberType(nRow, "nRow");
	
	if(this.isNil(nRow)) nRow = ds.rowposition;
	
	var result = {};
	for(var i=0,size=ds.colcount; i<size; i++){
		var colinfo = ds.getColumnInfo(i);
		result[colinfo.name] = this.smfStr(ds.getColumn(nRow, colinfo.name));
	}
	return result;
};


/**
 * ds Dataset의 nRow의 로우의 값을 json으로 변환.
 *
 * @param  ds, nRow
 * @return json
 * @see    var row = smfRowToJson(dsResult, dsResult.rowposition);
 *         alert_opacity(row.schulCode); //schulCode는 dsResult가 가지고 있는 column id
 **/
prForm.smfJsonToDataset = function(sDatasetName, json){
	var ds = this.smfGetOrCreateDataset(sDatasetName);
	ds.clear();
	ds.addColumn("_chk", "STRING", 255);
	ds.addRow();

	for(var id in json){
		var sValue = json[id];
		ds.addColumn(id, "String", 255);
		ds.setColumn(0, id, sValue);
	}

	return ds;
};


/**
 * ds Dataset의 nRow의 로우의 값을 json으로 변환.
 *
 * @param  ds, nRow
 * @return json
 * @see    this.smfCreateParamDataset("name", "홍길동", "age", 100)
 **/
prForm.smfCreateParamDataset = function(){
	var size = arguments.length / 2;
	
	var params = {};
	var i = 0;
	while(i<size){
		var key = arguments[i];
		params[key] = arguments[i+1];
		i+= 2;
	}
	
	return this.smfJsonToDataset("_dsParam", params);
};



/**
 * 객체의 full id 를 리턴한다. >> "div_search.cmb_select"
 *
 * @param  obj 콤포넌트
 * @return full id
 * @see    smfFullId(obj);
 */
prForm.smfFullId = function (obj){
	// activex component는 obj.parent가 없음..
	var firstObjNm = obj.name;
	var firstObj = obj;
	var isFormObj = false;
	if (this.smfStr(obj) == "[object ActiveX]"){
		return obj.name;
	}

	var sId = "";
	do {
		if(obj != undefined && this.smfStr(obj.name) != "" && this.smfStr(obj.name) != "form"){	
			isFormObj = (obj instanceof nexacro.Div || obj instanceof nexacro.Form || obj instanceof nexacro.Tabpage);
			sId = ((obj != undefined ? obj.name : "")) + (isFormObj && firstObj != obj ? (sId.lastIndexOf(".form") < 1 ? ".form" : "") : "") + "." + sId;
		}
		obj = obj.parent;
		isFormObj = false;

	} while ( obj != undefined && this.smfStr(obj.parent) != "[object ChildFrame]" );
	return (sId.lastIndexOf(".") == sId.length-1 ? sId.substring(0, sId.length-1) : sId);
};

/**
 * 객체의 full id 를 리턴한다. >> "div_search.form.cmb_select"
 *
 * @param  obj 콤포넌트
 * @return full id
 * @see    this.smfGetQualifiedName(obj);
 */
prForm.smfGetQualifiedName = function(component, context){
	this.astfAssertParamValueIsObjectType(component, 'component');
	if(this.isNil(context)) context = this;
	
	if(component == context) return component.name;

	var names = [];
	names.push(component.name);
	
	var current = component.parent;
	while(context != current && current != null && current != undefined){
		names.push(current.name);
	
		current = current.parent;
	}
	
	var qualifedName = "";
	names = names.reverse();
	for(var i in names){
		qualifedName += names[i] + ".";
	}
	qualifedName = qualifedName.substring(0, qualifedName.length-1);
	return qualifedName;
};

/**
 * form을 리턴한다.
 *
 * @param  obj 콤포넌트
 * @return Form Object
 * @see    smfParentForm(this); //this는 Div or Tab or Tabpage 등등..
 *         Form에서 smfParentForm(this);호출하면 자기자신을 리턴함.

 *         ** 초등학교 참고 **
 *            초등학교는 탭으로 메뉴를 관리하기때문에 Tab id를
 *            "tabElsPrimary"라고 정의해야 원하는 ParentForm을 찾을 수 있다
 *
 */
prForm.smfParentForm = function(obj){
	var aryLinkedParent = [obj];
	var idx = 1;

	if(obj == undefined || obj == null) return this;
	
	
	var ownerFrame = null;
	var formOfOwnerFrame = null;
	if(this.isNotNil(obj.getOwnerFrame())){
		ownerFrame = obj.getOwnerFrame();
		formOfOwnerFrame = ownerFrame.form;
	}
	
	while(formOfOwnerFrame != obj){
		if(obj == null) return formOfOwnerFrame;
		if(obj.name == "tabElsPrimary"){
			return aryLinkedParent[idx-2];
		}
		 
        obj = obj.parent;

		if(this.isNotNil(obj.getOwnerFrame())){
			ownerFrame = obj.getOwnerFrame();
			obj = ownerFrame.form;
		}else{ 
			return formOfOwnerFrame;
		}
 
		aryLinkedParent.push(obj);
        idx++;
    }
    return obj;
};

/**
 * form을 리턴한다.
 *
 * @param  obj 콤포넌트
 * @return Form Object
 * @see    smfForceParentForm(this); //this는 Div or Tab or Tabpage 등등..
 *         Form에서 smfParentForm(this);호출하면 자기자신을 리턴함.
 */
prForm.smfForceParentForm = function(obj){
	var aryLinkedParent = [obj];
	var idx = 1;
    while((obj+"") != "[object Form]"){
        obj = obj.parent;
        aryLinkedParent.push(obj);
        idx++;
    }
    return obj;
};


/**
 * MainForm을 리턴한다.
 *
 * @param  obj 콤포넌트
 * @return Form Object
 * @see    smfForceMainForm(this); //this는 Div or Tab or Tabpage 등등..
 *         MainForm에서 smfParentForm(this);호출하면 자기자신을 리턴함.
 */
prForm.smfForceMainForm = function(obj){
	var nLimitCount = 0;
    while((obj+"") != "[object Form]"){
		obj = obj.parent;
		//무한루프의 두려움
		if(100 <= nLimitCount++) break;
    }

    return obj;
};

/**
 * OwnerComponent를 리턴한다.
 *
 * @param  obj 콤포넌트
 * @return Component
 * @see    smfOwnerComponent(this); //this는 Div or Tab or Tabpage 등등..
 */
prForm.smfOwnerComponent = function(obj){
    while((obj+"") != "[object Form]"){
		obj = obj.parent;
		if(this.isNotNil(obj.url)) return obj;
    }

    return obj;
};

/**
 * pageid을 리턴한다.
 *
 * @param  oForm Form
 * @return pageid
 */
prForm.smfFormPageId = function(oForm){
	var sUrl = oForm.getOwnerFrame().formurl;
	var sDelemiter = "";
	var sDelemiterSize;
	if(-1 != sUrl.lastIndexOf("\\")){
		sDelemiter = "\\";
		sDelemiterSize = 1;
	}else{
		sDelemiter = "::";
		sDelemiterSize = 2;
	}
	sUrl = sUrl.substr(sUrl.lastIndexOf(sDelemiter)+sDelemiterSize);
	return sUrl.substr(0, sUrl.length-5);
};

/**
 * menuid를 리턴한다.
 *
 * @param  oForm Form
 * @return MenuId
 */
prForm.smfFormMenuId = function(oForm, dist){
	var mainForm = null;
	var rtn = "";
	mainForm = this.smfForceMainForm(oForm);
	if(mainForm.opener != null) mainForm = this.smfForceMainForm(mainForm.opener);
	if(mainForm.opener != null) mainForm = this.smfForceMainForm(mainForm.opener);
	if(mainForm.opener != null) mainForm = this.smfForceMainForm(mainForm.opener);
	if(mainForm.opener != null) mainForm = this.smfForceMainForm(mainForm.opener);
	if(mainForm.opener != null) mainForm = this.smfForceMainForm(mainForm.opener);

	if(dist != undefined && dist == "P") {
		rtn = mainForm.pv_sysCode+"."+mainForm.pv_ssubbSysCode+"."+mainForm.pv_pgeid;
	}
	else{
		rtn = mainForm.pv_menuId;
	}
	return this.smfStr(rtn);
};


/**
 * 금액을 format  "123,456,789"
 *
 * @param  sMoney 금액
 * @return format화된 금액 문자열
 * @see    smfFormatMoney(123456789, "원");--> "123,456,789원"
 */
prForm.smfFormatMoney = function(sMoney, sSuffix){
    var sMoney = this.smfStr(sMoney);

    var sNum1;
    var sNum2;
    if(sMoney.indexOf(".") != -1){
        sNum1 = sMoney.substring(0, sMoney.indexOf("."));
        sNum2 = sMoney.substr(sMoney.indexOf("."));
    }else{
        sNum1 = sMoney;
        sNum2 = "";
    }
    var sResult = "";
    var nLen = sNum1.length;

    var nSeq = 0;
    for(var i=sNum1.length-1; i>=1; i--){
        nSeq++;
        sResult = sNum1.charAt(i) + sResult;
        if((nSeq % 3) == 0){
            sResult =  ',' + sResult;
        }
    }
    sResult = sNum1.charAt(i-1) + sResult + sNum2;

    if(sResult != "" && sSuffix != undefined && sSuffix != null && sSuffix != "") sResult += sSuffix;
    return sResult;
};

/**
 * nRow를 Reset한다
 *
 * @param  ds : Dataset
 * @param  nRow : reset할 row
 * @return nRow
 * @see    smfResetRow(dsMain, dsMain.rowposition);
 */
prForm.smfResetRow = function(ds, nRow){
    for(var i=0,size=ds.colcount-ds.getConstCount(); i<size; i++){
        ds.setColumn(nRow, i, ds.getOrgColumn(nRow, i));
    }

    return nRow;
};

/**
 * ds의 모든 row를 리셋한다.
 *
 * @param  ds : Dataset
 * @param  fnc : reest할지의 callback함수 return boolean으로 reset여부를 결정.
 * @return nRow
 * @see    //check 안된 row는 모두 리셋
           smfResetRows(dsMain, function(ds, nRow){
		       return "1" != ds.getColumn(i, "_chk");
           });
 */
prForm.smfResetRows = function(ds, fnc){
	for(var i=0,size=ds.rowcount; i<size; i++){
		if(this.isNotNil(fnc)){
			if(fnc(ds, i) != true) continue;
		}

		this.smfResetRow(ds, i);
	}
};

/**
 * 상위컴포넌트의 값이 변경되면 하위컴포넌트들의 값을 연쇄적으로 Clear한다.
 *
 * @param  obj : Component
 * @param  aryCop : Array로 구성되어있는 연결되어있는 컴포넌트
 * @return nRow
 * @see     function cmb_onitemchanged(obj, e){
                var aryComp = [div_insert.edt_otrSchulCode,
                                div_insert.cmb_OtrSchulDghtCrseCode,
                                div_insert.cmb_OrdScCode,
                                div_insert.cmb_GradeCode,
                                div_insert.cmb_DddepCode,
                                [div_insert.cmb_ClassCode], // []로 감싸면 innerdataset이 clear되지 않는다.
                                div_insert.ta_atnlcStdntNote
                                ];
                //obj의 하위 컴포넌트들을 clear시킨다.
                smfClearValueChain(obj, aryComp);

                if(obj == null) return;

                //indataset 파라메터 생성
                smfVariableDataset({
                    schulCode      : dsMain.getColumn(0, "schulCode")
                   ,ay             : dsMain.getColumn(0, "ay")
                   ,dghtCrseScCode : dsMain.getColumn(0, "otrSchulDghtCrseCode")
                   ,ordScCode      : dsMain.getColumn(0, "otrOrdScCode")
                   ,grade          : dsMain.getColumn(0, "otrGrade")
                   ,dddepCode      : dsMain.getColumn(0, "otrDddepCode")
                });

                switch(obj.name){
                    case "edt_otrSchulCode":
                        swf_DghtCrseScCode('codeDghtCrseScCode', dsSmVariable, dsDghtCrseScCode);
                        break;
                    case "cmb_OtrSchulDghtCrseCode":
                        swf_OrdScCode("codeOrdScCode", dsSmVariable, dsOrdScCode); //계열
                        break;
                    case "cmb_OrdScCode":
                        swf_Grade("codeGrade", dsSmVariable, dsGrade); //학년
                        break;
                    case "cmb_GradeCode":
                        smfDddepCode("codeDddepCode", dsSmVariable, dsDddepCode); //학년
                        break;
                    case "cmb_DddepCode":
                        smfClassCode("codeClassCode", dsSmVariable, dsClassCode); //반
                        break;
                }
            } */
prForm.smfClearValueChain = function(objPivot, aryComponent){
	////////////////////검증시작////////////////////
	var sErrorMessage = "";
	for(var i=0,size=aryComponent.length; i<size; i++){
		var cbm = aryComponent[i];
		if(cbm == null) continue;

		if(cbm instanceof Array){
            cbm = cbm[0];
		}

		if(cbm instanceof nexacro.Combo || cbm instanceof nexacro.Radio){
            var ds = this.smfToDatasetObject(cbm.innerdataset);
            if((! (ds instanceof nexacro.Dataset)) || (ds == undefined) || (ds == null)){
                sErrorMessage += this.format("aryComponent의 {0}/{1}번째 항목은 Combo {2}의 innerdataset의 데이터셋을 잘못됬습니다.\n", [i+1, aryComponent.length, cbm.name]);
            }

            var sFirstCode = this.smfStr(ds.getConstColumn("firstCode"));
            if(this.notIn(sFirstCode, ['SEL', 'ALL', 'EMP', ''])){
                sErrorMessage += this.format("aryComponent의 {0}/{1}번째 항목은 은\n(ALL,SEL,EMP, '')←(전체,선택,비어있게,'') 중 하나를 선택하십시오."
                , [i+1, aryComponent.length]);
            }
		}else{

		}
	}

	if(! this.isNil(sErrorMessage)){
		this.smfDevException("smfClearValueChain설정에러 \n" + sErrorMessage);
		return;
	}

	////////////////////검증종료////////////////////
	var nObjIndex = -1;
	for(var i=0,size=aryComponent.length; i<size; i++){
        var comp = aryComponent[i];
        if(comp instanceof Array) comp = comp[0];
        if(objPivot == comp){
            nObjIndex = i;
            break;
        }
	}

	for(var i=nObjIndex+1,size=aryComponent.length; i<size; i++){
        var comp = aryComponent[i];
        if(comp instanceof Array){
            comp = comp[0];
            comp.set_value("");
        }else if(comp instanceof nexacro.Combo || comp instanceof nexacro.Radio){
            var ds = this.smfToDatasetObject(comp.innerdataset);
            ds.clearData();
            this.smfSetFirstCode(ds, comp);
        }else if(comp instanceof nexacro.Static){
            comp.set_text("");
        }else{
            comp.set_value("");
        }
	}
};

/**
 * fnc함수의 명을 리턴
 *
 * @param  fnc : function
 * @return String
 * @see    var sFuncName = smfFuncName(fnMyFunction);
*/
prForm.smfFuncName = function(fnc){
	if(this.isNil(this.smvFunctions)){
		this.smfCacheFunctionList();
	}

	var functionName = this.smvFunctions[fnc];
	if(this.isNil(functionName)){
		return this.astfGetFunctionNameInContext(fnc);
	}else{
		return functionName;
	}
	return this.astfGetFunctionNameInContext(fnc);
// 
//     if(fnc == undefined || fnc == null) return "";
//     if((typeof fnc) != "function") return "";
// 
//     var sName = fnc.toString().substr(9);
//     var sName = sName.substring(0, sName.indexOf("("));
//     if(this.isNil(sName)){
// 		return "@AnonymouseFunction";
//     }else{
// 		return sName;
//     }
};

/**
 * Grid의 체크박스를 활성화/비활성화 한다.
 *
 * @param  grid : Grid
 * @param  nCell : Grid Cell Index
 * @param  fncRender : 활성화 비활성화 할 callback
 * @return void
 * @see    smfUpdateRednerGridCheckbox(Grid00, 0, fnRenderGridCheckbox);
*/
prForm.smfUpdateRednerGridCheckbox = function(grid, nCell, fncRender){
	this.astfAssertParamIsGridType(grid, 'grid'); 
    var sGridId = this.smfGetQualifiedName(grid);
	var datasetName = "this." + this.smfFindComponentInThisContext(grid.binddataset);


	var fncRendererName = this.smfFuncName(fncRender);
    var sFormat = "expr:comp.ownerForm.smfRednerGridCheckbox(comp.ownerForm, dataset, '{0}', currow, comp.ownerForm." + fncRendererName + ")";

    grid.setCellProperty("body", nCell, "displaytype", this.smfFormat(sFormat, ['displaytype']));
    grid.setCellProperty("body", nCell, "edittype", this.smfFormat(sFormat, ['edittype']));
    //grid.setCellProperty("body", nCell, "controlbackground", this.smfFormat(sFormat, ['controlbackground']));
};

/**
 * (공통만사용)Grid의 체크박스를 하는 function
*/
prForm.smfRednerGridCheckbox = function(context, ds, sPropName, nRow, fncRender){
	
	switch(sPropName){
        case "displaytype": 
			return "checkboxcontrol";

        case "edittype":
			var bChecked = fncRender.call(context, ds, nRow);
            if(bChecked == true){
                return "checkbox";
            }else if(bChecked == false){
                return "";
            }
            break;
        case "controlbackground":
			var bChecked = fncRender.call(context, ds, nRow);
            if(bChecked == true){
                return "";
            }else if(bChecked == false){
                return "#c4c0cdff";
            }
            break;

        case "cursor":
			var bChecked = fncRender.call(context, ds, nRow);
            if(bChecked == true){
                return "";
            }else if(bChecked == false){
                return "arrow";
            }
            break;
    }

    return "";
};

/**
 * 입력중인 값을 데이터셋에 Apply시킨다.
 * 단축키로 저장이나 삭제를 하는 경우 발생하는 데이터 missing assign문제를 해결하기 위한 함수이다.
 * @return void
 * @see
*/
prForm.smfApplyData = function(){
	var mainForm = this.smfForceMainForm(this);
	var focusedComponent = mainForm.getFocus();//현재 포커스를 갖는 컴포넌트를 얻는다.
	if(focusedComponent == null) return;
	//onload에서 smfApplyData를 사용하는 경우(smfSelectConfirm안에 smfApplyData를 사용함) 포커스가 ChildFrame에 있어서 문제가 발생한다.
	if(this.smfStr(focusedComponent) == "[object ChildFrame]") return;
	//activex는 할필요없음.
	if(this.smfStr(focusedComponent) == "[object ActiveX]") return;

	//포커스를 가진 컴포넌트가 있고, 그 컴포넌트가 updateToDataset메소드를 가지고 있으면
	//updateToDataset메소드를 호출시켜서 데이터셋에 입력중이던 값을 강제로 assign한다.
	if(this.isNotNil(focusedComponent)){
		var bindItem = this.smfBindItemByComponent(focusedComponent);
		if(this.isNotNil(bindItem) && this.isNotNil(focusedComponent['updateToDataset'])){
			var bSucc = focusedComponent.updateToDataset();

			if(bSucc == true) return;
		}
	}

    var objEdit = new Edit("_Edit_smfApplyData", -1000, -1000, 1, 1);
    try{
        // Add Object to Parent Form
        this.addChild(objEdit.name, objEdit);

        // Show Object
		//// objEdit.accessibility.set_enable(false);
        objEdit.show();
        //mainForm.updateWindow();
        objEdit.setFocus(); // 포커스를 줘서 입력중이던 값이 강제로 Dataset에 적용되도록 유도.

 		if(this.isNotNil(focusedComponent)){
			//원래 가지고 있는 포커스가 가지고 있는 컴포넌트에 다시 포커스를 준다. 그때
			//kill,setFocus이벤트가 발생하지 않게 enableevent를 비활성화, 웹접근성도 비활성화
			//시킨후 다시 포커스를 준다.
			var bEnableevent = focusedComponent.enableevent;
			//// var bAccessibilityEnable = focusedComponent.accessibility.enable;

			focusedComponent.set_enableevent(false);
			//// focusedComponent.accessibility.set_enable(false);
			try{
				focusedComponent.setFocus();
			} catch(e)
			{
				trace("처리중 에러가발생했습니다.");
			}finally{
				focusedComponent.set_enableevent(bEnableevent);
				//// focusedComponent.accessibility.set_enable(bAccessibilityEnable);
			}
 		}
        // Remove Object form Parent Form
        this.removeChild(objEdit.name);
    }catch(e){
		this.trace("smfApplyData e = " + e + ", " + e.message);
    }finally{
        // Destroy Object
        objEdit.destroy();
    }
};


/**
 * Row를 복사한다
 */
prForm.smfAssignSelectedRow = function(ds, dsSource, rowOfSourceDataset){
	if(this.isNil(rowOfSourceDataset)) rowOfSourceDataset = dsSource.rowposition;
	
	ds.clearData();
	var newRow = ds.addRow();
	ds.copyRow(newRow, dsSource, rowOfSourceDataset);
	return newRow;
};

/**
 * Row를 복사한다.
 *
 * @return boolean
 * @see
*/
prForm.smfCopyRows = function(dsSource, dsDesc, fncCondition){
    for(var i=0,size=dsSource.rowcount; i<size; i++){
        if( true != fncCondition(i)) continue;
        dsDesc.copyRow(dsDesc.addRow(), dsSource, i);
    }
};

/**
 * 체크박스 선택된 Row를 복사한다.
 * @param  dsSource 원본 데이터셋 (필수)
 * @param  dsDesc 결과 데이터셋 (필수)
 * @param  bToNormalRowType  : boolean (default: true)
                               true: rowType을 nomal로 설정한다
							   false: rowType을 dsSource의 rowType으로 설정한다
 * @param  checkedColumnName 선택박스 컬럼명 (default: "_chk")
 * @return Integer
 * @see
*/
prForm.smfCopyCheckedRows = function(dsSource, dsDesc, bToNormalRowType, checkedColumnName){
	bToNormalRowType = this.nvl(bToNormalRowType, true);
	checkedColumnName = this.nvl(checkedColumnName, "_chk");
	
	// rowType 변경 전 원본값 백업(dataset의 updatecontrol 값이 false 일때 rowType 변경 가능)
	var updatecontrol = dsDesc.updatecontrol;
	var copyRowCount = 0;
	
	try{
		// dataset의 updatecontrol 값 변경
		dsDesc.updatecontrol = false;

		for(var i=0,size=dsSource.rowcount; i<size; i++){
			if( dsSource.getColumn(i,checkedColumnName) != 1) continue;
			
			var nNewRow = dsDesc.addRow();
			dsDesc.copyRow(nNewRow, dsSource, i);
			copyRowCount++;
			
			// bToNormalRowType 값이 true 이면 rowtype은 normal,
			// false이면  dsSource 해당 row의 rowType과 동일하게 세팅
			if(bToNormalRowType == true){
				dsDesc.setRowType(i, Dataset.ROWTYPE_NORMAL);
			}else{
				dsDesc.setRowType(nNewRow, dsSource.getRowType(i));
			}
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		// dataset의 updatecontrol 값 복원
		dsDesc.updatecontrol = updatecontrol;
	}
	
	return copyRowCount;
};

/**
 * 해당 서비스가 호출되었는지
 * serviceId : 서비스ID
 * exceptError : 오류난 서비스는 수행완료로 보지 않는다
 * @return boolean
 * @see hasBeenService("selectMain");
*/
prForm.smfHasBeenService = function(serviceId, exceptError){
    return (new RequestService(this, serviceId)).hasBeenService(exceptError);
};

/**
 * sServiceId 의 프로퍼티명
 *
 * @return boolean
 * @see hasBeenService("selectMain");
*/
prForm.smfGetServiceProperty = function(sServiceId, sPropertyName){
    var nRow = this.dsService.findRow('id', sServiceId);
    if(nRow == -1) return "";

    return this.smfStr(this.dsService.getColumn(nRow, sPropertyName));
};

/**
 * sServiceId 의 프로퍼티명
 *
 * @return boolean
 * @see hasBeenService("selectMain");
*/
prForm.smfSetServiceProperty = function(sServiceId, sPropertyName, sValue){
    var nRow = this.dsService.findRow('id', sServiceId);
    if(nRow == -1) return false;

    return this.dsService.setColumn(nRow, sPropertyName, sValue);
};

/**
 * oComposite의 Combo, List, Radio의 index를 0으로 변경한다.(index 가 -1인 것만)
 * service call후 callback에서 사용함.
 *
 * @return void
 * @see smfResetComboIndex(div_manage)
*/
prForm.smfResetComboIndex = function(oComposite){
    for(var i=0,size=oComposite.all.length; i<size; i++){
        var oComponent = oComposite.all[i];

        if(! (oComponent instanceof nexacro.Combo ||
              oComponent instanceof nexacro.List ||
              oComponent instanceof nexacro.Radio)) continue;
        //index
        if(oComponent.index == -1){
            oComponent.set_value("");
        }
    }
};


prForm.smfSortByTabOrder = function(oComposite, fncValid, bIgnoreTravel){
    if(bIgnoreTravel == undefined) bIgnoreTravel = false;
    var aryUnsorted = [];
    var _fncValid = fncValid;

	if(bIgnoreTravel){
		for(var i=0,size=oComposite.all.length; i<size; i++){
			var comp = oComposite.all[i];
			comp._sort = (1) + ((comp.taborder+1) / Math.pow(10, 1));
			aryUnsorted.push(comp);
		}
	}else{
		this.smfTravelComponents(oComposite, function(comp, nLvl, owner){
			if(comp.taborder == undefined) return;
			if(_fncValid != undefined && _fncValid != null){
				if(_fncValid(comp) == false) return;
			}
			if(nLvl == 1){
				owner._sort = 1;
			}

			comp._sort = (owner._sort) + ((comp.taborder+1) / Math.pow(10, nLvl));
			aryUnsorted.push(comp);
		}, bIgnoreTravel);
	}

    this.smfSortArray(aryUnsorted, function(a, b){
        return a._sort > b._sort;
    });

    for(var i=0,size=aryUnsorted.length; i<size; i++){
        aryUnsorted[i]._sort = i+1;
    }

    return aryUnsorted;
};

prForm.smfSortArray = function(a, fncCompare){
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
 * check된 row의 rowtype을 delete로 변경한다.
 *
 * @return void
 * @see smfCheckToDeleteType(dsMain);
*/
prForm.smfSetDatasetRowType = function(ds, nRow, newRowType){ 
	this.astfAssertParamValueIsDatasetType(ds, 'ds');
	if(this.isNil(nRow)) nRow = ds.rowposition;
	this.astfAssertParamValueIsNumberType(nRow, "nRow");
	
	var newRowTypeString = this.smfStr(newRowType).toUpperCase();
	if(newRowTypeString == "NORMAL"){
		newRowType = Dataset.ROWTYPE_NORMAL;
	} else if(newRowTypeString == "INSERT" || newRowTypeString == "I" || newRowTypeString == "C"){
		newRowType = Dataset.ROWTYPE_INSERT;
	}else if(newRowTypeString == "UPDATE" || newRowTypeString == "U"){
		newRowType = Dataset.ROWTYPE_UPDATE;
	}else if(newRowTypeString == "DELETE" || newRowTypeString == "D"){
		newRowType = Dataset.ROWTYPE_DELETE;
	}else {
		this.astfAssertParamRangeValue(newRowType, "newRowType", [Dataset.ROWTYPE_NORMAL, Dataset.ROWTYPE_INSERT, Dataset.ROWTYPE_UPDATE, Dataset.ROWTYPE_DELETE]);
	}
	
	
	var oldupdatecontrol = ds.updatecontrol;
    try{
		ds.set_updatecontrol(false);
		ds.setRowType(nRow, newRowType);
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
        ds.set_updatecontrol(oldupdatecontrol);
    }
};
/**
 * check된 row의 rowtype을 delete로 변경한다.
 *
 * @return void
 * @see smfCheckToDeleteType(dsMain);
*/
prForm.smfCheckToDeleteType = function(ds, columnName, checkedValue){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	columnName = this.nvl(columnName, "_chk");
	checkedValue = this.nvl(checkedValue, "1");
	
    ds.set_updatecontrol(false);
    try{
        for(var i=0,size=ds.rowcount; i<size; i++){
            if(ds.getColumn(i, "_chk") != "1") continue;

            ds.setRowType(i, Dataset.ROWTYPE_DELETE);
        }
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
        ds.set_updatecontrol(true);
    }
};


/**
 * 공통코드를 복사한다.
 * 필요파라메터 : atptOfcdcOrgCode
 *
 * @param  dsSource : source Dataset
 * @param  dsDest   : 대상 Dataset
 * @return void
 * @see    smfCopyCode(dsSourceOfDataset, dsDestOfDataset);
 */
prForm.smfCopyCode = function(dsSource, dsDest){
    dsDest.clearData();

    for(var i=0,size=dsSource.rowcount; i<size; i++){
        dsDest.addRow();
        dsDest.copyRow(i, dsSource, i);
    }

	if(! this.isNil(dsSource.getConstColumn('firstCode'))){
		dsDest.deleteRow(0);
	}

    dsDest.applyChange();
    this.smfSetFirstCode(dsDest);
};

/**
 * 조직콤보
 * 필요파라메터 : atptOfcdcOrgCode
 *
 * @param  sServiceId 서비스아이디
 * @param  dsIn parameter dataset
 * @param  dsOut result dataset
 * @return boolean
 * @see    smfOrgCombo("codeOrg", dsSmVariable, dsOrg);
 */
prForm.smfOrgCombo1 = function(sServiceId, dsIn, dsOut, jOption){
    if(this.isNil(jOption)) jOption = {};
	/* [X-LOG] 변수(sServiceId)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsIn)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsOut)가 있는지 확인이 필요합니다. [X-LOG] 변수(jOption)가 있는지 확인이 필요합니다. [X-LOG] 변수(bindingControls)가 있는지 확인이 필요합니다. [X-LOG] 변수(jOption)가 있는지 확인이 필요합니다. [X-LOG] 변수(asynctp)가 있는지 확인이 필요합니다.*/ this.smfDService({
		 id              : sServiceId
	    ,url             : "svc_neis::/sym_ocm_oc00_001.xp"
	    ,inDatasets      : "dsSymOcmOc00M00SVO=" + dsIn.name
	    ,outDatasets     : dsOut.name + "=dsSymOcmOc00M00SVO_orgList1"
	    ,svctp           : "R"
	    ,bindingControls : jOption.bindingControls
	    ,callback        : "fnTransCallback"
	    ,asynctp         : jOption.asynctp
	});
};

/**
 * 조직콤보
 * 필요파라메터 : atptOfcdcOrgCode
 *
 * @param  sServiceId 서비스아이디
 * @param  dsIn parameter dataset
 * @param  dsOut result dataset
 * @return boolean
 * @see    smfOrgCombo("codeOrdGradeDddep", dsSearch, dsOrdGradeDddep);
 */
prForm.smfOrgCombo2 = function(sServiceId, dsIn, dsOut, jOption){
    if(this.isNil(jOption)) jOption = {};
	/* [X-LOG] 변수(sServiceId)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsIn)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsOut)가 있는지 확인이 필요합니다. [X-LOG] 변수(jOption)가 있는지 확인이 필요합니다. [X-LOG] 변수(bindingControls)가 있는지 확인이 필요합니다. [X-LOG] 변수(jOption)가 있는지 확인이 필요합니다. [X-LOG] 변수(asynctp)가 있는지 확인이 필요합니다.*/ this.smfDService({
		 id              : sServiceId
	    ,url             : "svc_neis::/sym_ocm_oc00_002.xp"
	    ,inDatasets      : "dsSymOcmOc00M00SVO=" + dsIn.name
	    ,outDatasets     : dsOut.name + "=dsSymOcmOc00M00SVO_orgList2"
	    ,svctp           : "R"
	    ,bindingControls : jOption.bindingControls
	    ,asynctp         : jOption.asynctp
	});
};

/**
 * Tree 확장/축소한다.
 *
 * @param  grd : Grid
 * @param  ds : Dataset
 * @param  nRow : Row
 * @param  sCheckColumn : Checkbox로 쓸 컬럼아이디
 * @param  fnc :
 * @return boolean
 * @see    smfOrgCombo("codeOrdGradeDddep", dsSearch, dsOrdGradeDddep);
 */
prForm.smfExpendTree = function(grd, ds, nRow, sCheckColumn, fnc){
    var sSelectedValue = ds.getColumn(nRow, sCheckColumn);

    this.smfHandleTreeChilds(grd, ds, nRow, sCheckColumn, sSelectedValue, fnc);
    this.smfHandleTreeParents(grd, ds, nRow, sCheckColumn, sSelectedValue, fnc);
};

/**
 * Tree Child Handling
 *
 * @param  grd : Grid
 * @param  ds : Dataset
 * @param  nPRow : Parent Row
 * @param  fnc : function
 * @return boolean
 * @see    smfOrgCombo("codeOrdGradeDddep", dsSearch, dsOrdGradeDddep);
 */
prForm.smfHandleTreeChilds = function(grd, ds, nPRow, sCheckColumn, sSelectedValue, fnc){
    if(fnc == undefined) fnc = this.smfDefaultExpendTreeCallback;

	fnc(grd, ds, nPRow, nPRow, sCheckColumn, sSelectedValue);

    for(var i=0,size=grd.getTreeChildCount(nPRow); i<size; i++){
		var nRow = grd.getTreeChildRow(nPRow, i);
		fnc(grd, ds, nPRow, nRow, sCheckColumn, sSelectedValue);
		this.smfHandleTreeChilds(grd, ds, nRow, sCheckColumn, sSelectedValue, fnc);
    }
};

/**
 * Tree Parent Handling
 *
 * @param  grd : Grid
 * @param  ds : Dataset
 * @param  nPRow : Parent Row
 * @param  fnc : function
 * @return boolean
 * @see    smfOrgCombo("codeOrdGradeDddep", dsSearch, dsOrdGradeDddep);
 */
prForm.smfHandleTreeParents = function(grd, ds, nChildRow, sCheckColumn, sSelectedValue, fnc){
    if(fnc == undefined) fnc = this.smfDefaultExpendTreeCallback;

    var sSelectedValue = ds.getColumn(nChildRow, sCheckColumn);
    if(sSelectedValue != "1") return;

    var nParentRow = grd.getTreeParentRow(nChildRow);
    if(nParentRow == -1 ) return;

	fnc(grd, ds, nParentRow, nParentRow, sCheckColumn, sSelectedValue);
	this.smfHandleTreeParents(grd, ds, nParentRow, sCheckColumn, sSelectedValue, fnc);
};

/**
 *
 *
 * @param  grd : Grid
 * @param  ds : Dataset
 * @param  nPRow : Parent Row
 * @param  fnc : function
 * @return boolean
 * @see    smfOrgCombo("codeOrdGradeDddep", dsSearch, dsOrdGradeDddep);
 */
prForm.smfDefaultExpendTreeCallback = function(grd, ds, nPRow, nRow, sCheckColumn, sSelectedValue){
    ds.setColumn(nRow, sCheckColumn, sSelectedValue);
    grd.setTreeStatus(grd.getTreeRow(nRow), "1" == sSelectedValue);
};


/**
 * 학교코드를 넘긴다.
 *
 * @return 학교코드
 * @see
 */
prForm.smfSubSysCode = function(){
	return this.smfGetSession("subSysCd");
};

/**
 * 조회조건 권한타입(system,unit)인지
 *
 * @return string("system", "unit")
 * @see    smfAuthSystemUnitType();
 */
prForm.smfAuthSystemUnitType = function(){
	var ds = this.smfGetOrCreateDataset("_dsAuthReturn");
	return this.smfStr(ds.getColumn(0, "authSystemUnitType"));
};


/**
 * (공통만 사용)
 *
 */
prForm.smfGetOrAddServiceId = function(form, sServiceId){
	var nRow = form.dsService.findRow("id", sServiceId);

	if(nRow == -1){
		nRow = form.dsService.addRow();
	}else{

	}

	return nRow;
};

/**
 * 학교정보를 조회한다.
 *
 * @param  sOrgCode : callback함수에서 받을 서비스명
 * @return json
 * @see    var orginfo = smfOrgInfo('K00000001');
 */
prForm.smfOrgInfo = function(sSchulCode){
alert("사용안함");
return;
	/* [X-LOG] 변수(sSchulCode)가 있는지 확인이 필요합니다.*/var dsIn = this.smfJsonToDataset("_dsIn_smfOrgInfo", {
			schulCode : sSchulCode
		});
	var dsOut = this.smfGetOrCreateDataset("_dsOut_smfOrgInfo");

	/* [X-LOG] 변수(dsIn)가 있는지 확인이 필요합니다. [X-LOG] 변수(dsOut)가 있는지 확인이 필요합니다.*/ this.smfDService({
		 id              : "select_smfOrgInfo"
		,url             : "svc_neis::/sym_aum_sa00_002.xp"
		,inDatasets      : "dsSymAumSa01M00SVO=" + dsIn.name
		,outDatasets     : dsOut.name + "=dsSymAumSa01M00SVO_schulInfoList"
		,svctp           : "R"
		,asynctp         : "false"
		,callback        : "fnTransCallback"
		,innerCallback   : ""
		,bindingControls : ""
	});

	return this.smfRowToJson(dsOut, 0);
};

/**
 * (사용안함)권한 처리에서 사용하는 callback함수
 *
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfAuthCallback('auth', [dsAy, dsOrdScCode, dsClassCode]);
 */
prForm.smfAuthCallback = function(sId, nReason, sMessage, jParams){
    if(nReason == -1 ) return;
	var _dsAuthReturn = this.objects["_dsAuthReturn" + sId];
	if(_dsAuthReturn == null) return;
	/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/var nRow = dsService.findRow('id', sId);
    if(this.isNil(jParams)) jParams = {};
	var service = (/* [X-LOG] 함수(RequestService)를 찾을 수 없습니다.*/ new RequestService(this, sId, jParams));
	var aryInDatasets = service.toArrayByInDatasets();
	var aryOutDatasets = service.toArrayByOutDatasets();

	for(var i=0,size=aryOutDatasets.length; i<size; i++){
		var ds = aryOutDatasets[i];
		var combo = this.smfCompByInnerDataset(ds);
		if(!(combo instanceof nexacro.Combo)) continue;


		//0번째 값으로 세팅한다.
		combo.set_value(ds.getColumn(0, combo.codecolumn));
   }

   //직접권한접근이 허용된 경우
   //년도Combo를 Edit로 변경해준다.
   if("Y" == _dsAuthReturn.getColumn(0, "directAuthYn")){
	   for(var i=0,size=aryOutDatasets.length; i<size; i++){
	   var combo = this.smfCompByInnerDataset(aryOutDatasets[i]);
			var cmbType = aryOutDatasets[i].getConstColumn('cmbType');
			var _check = cmbType.toUpperCase().lastIndexOf('AY');
			if(_check != -1 && combo.visible == true){
				var _edit = new Edit('edit' + cmbType);
				combo.parent.addChild(_edit.name, _edit);
				_edit.position = combo.position;
				_edit.set_value(aryOutDatasets[i].getColumn(0,0));
				_edit.show();
				combo.set_visible(false);
				combo.set_innerdataset(null);
			}
		}
	}

	try{
		//버그로 인해 rowcount가 0인 콤보의 갯수를 새서 0이 한개라도 있으면
		//아래 실행..
		//Combo랑 연결되어있는 비어있는 Dataset갯수 count
		var nEmptyComboCount = 0;
		for(var i=0,size=aryOutDatasets.length; i<size; i++){
			var ds = aryOutDatasets[i];
			var combo = this.smfCompByInnerDataset(ds);
			if(combo == null) continue;
			if(ds.rowcount == 0){
				nEmptyComboCount++;
			}
		}
		//모두있으면 무시
		if(nEmptyComboCount == 0) return;

		var self = this;
		for(var i=0,size=aryOutDatasets.length; i<size; i++){
			if(this.smfStr(aryOutDatasets[i].name).indexOf("Ay") != -1){
				var ds = aryOutDatasets[i];
				var controls = [];
				//ay를 Dataset으로 innerdataset으로 사용하는 Combo를 찾아서
				//itemchange이벤트를 강제로 호출하여
				//다시한번 데이터를 가져온다.
				this.smfTravelComponents(this, function (comp, fncCallback, nLvl){
					//if(nLvl != 1) return;
					if(comp instanceof nexacro.Combo || comp instanceof nexacro.Radio || comp instanceof nexacro.ListBox){
						var dsInnerDataset = self.smfToDatasetObject(comp.innerdataset);
						if(dsInnerDataset == null) return;
						if(ds != dsInnerDataset) return;
						/* [X-LOG] 변수(controls)가 있는지 확인이 필요합니다.*/ controls.push(comp);
					}
				});

				if(controls.length > 0){
					var combo = controls[0];
					if(combo.onitemchanged.length > 0){
						var fncOnitemchanged = combo.getEventHandler('onitemchanged' ,0);
						fncOnitemchanged(combo);
					}
				}
			}
		}
	}catch(e){
		this.trace(' error smfAuthCallback ' + e.message);
	}
};

/**
 * 권한 처리
 * (사용안함)
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfAuthList('auth', [dsAy, dsOrdScCode, dsClassCode]);
 */
prForm.smfAuthList = function(obj, sServiceId, aryDataset, bSync, jParams){
	if(this.isNil(jParams)) jParams = {};
	bSync = bSync == true;

    if(! this['smvBAuthList']) this['smvBAuthList'] = false;

	////////////////////////검증 //////////////////////////////

	sServiceId = this.smfStr(sServiceId);

	//service id는 고정
// 	if(sServiceId.indexOf("auth") != 0){
// 		trace(format("sServiceId '{0}'는 잘못된 아이디입니다.\nauth로 시작해야합니다.", [sServiceId]));
// 		alert_opacity(format("sServiceId '{0}'는 잘못된 아이디입니다.\nauth로 시작해야합니다.", [sServiceId]));
// 		return false;
// 	}

	if(sServiceId.indexOf("authOnload") != 0 && sServiceId.indexOf("authRowChange") != 0){
		this.smfDevException(this.format("sServiceId '{0}'는 잘못된 아이디입니다.\nauthOnload나 authRowChange로 시작해야합니다.", [sServiceId]));
		return false;
	}

	if(! (aryDataset instanceof Array)){
		this.smfDevException("파라메터aryDataset는 Array이어야 합니다");
		return false;
	}

	if(this.isNotNil(jParams.authData)){
		//학년반권한,창재 가 아니면
		//자유학기제 추가 [2015.11.01. yjkang]
		if(this.notIn(jParams.authData, ["gradeClass", "enlgh", "create", "lbrtySem"])){
			this.smfDevException("authData파라메터[" + jParams.authData + "]는 잘못된 값입니다.\ngradeClass(학년반권한)이나 enlgh(계발활동), create(창재), lbrtySem(자유학기)만 가능합니다.");
		}
	}

	//todo 검증 detail
	////////////////////////검증끝//////////////////////////////

	//_dsAuthCodeList Dataset생성
	var _dsAuthCodeList = this.smfGetOrCreateDataset('_dsAuthCodeList' + sServiceId);
	_dsAuthCodeList.clearData();

	//_dsAuthReturn Dataset생성
	var _dsAuthReturn = this.smfGetOrCreateDataset('_dsAuthReturn' + sServiceId);
	_dsAuthReturn.clearData();

	//컬럼생성
	_dsAuthCodeList.addColumn("userId", "STRING",256);
	_dsAuthCodeList.addColumn("sysCode", "STRING",256);
	_dsAuthCodeList.addColumn("subSysCode", "STRING",256); //시스템업무권한용 SubSysCode
	_dsAuthCodeList.addColumn("unitSubSysCode", "STRING",256); // 단위업무권한용 SubSysCode
	_dsAuthCodeList.addColumn("routingSubSysCode", "STRING",256); // DataSouce를 선택할 SubSysCode

	_dsAuthCodeList.addColumn("pageId", "STRING",256);
	_dsAuthCodeList.addColumn("schulCode", "STRING",256);
	_dsAuthCodeList.addColumn("customRefValues", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryComboType", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryComboAuth", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryTenseType", "STRING",256);

	//row 추가
	_dsAuthCodeList.addRow();

	//기본적으로 학년반권한을 탄다.
	if(this.isNil(jParams.authData)){
		jParams.authData = "gradeClass";
	}

	var customRefValues = "";
	for(var sColumnName in jParams){
		customRefValues += this.format("{0}={1},", [sColumnName, this.nvl(jParams[sColumnName], '-')]);
	}
	//customRefValues = customRefValues.substr(1);
	_dsAuthCodeList.setColumn(0,"customRefValues", customRefValues);
	_dsAuthCodeList.setColumn(0,"sysCode", "SW");


	if(this.isNotNil(jParams.pageId)){
		_dsAuthCodeList.setColumn(0,"pageId", jParams.pageId);
	}else{
		_dsAuthCodeList.setColumn(0,"pageId",this.smfFormPageId(this.smfMenuForm(obj)));
	}
	if(this.isNotNil(jParams.userId)){
		_dsAuthCodeList.setColumn(0,"userId", jParams.userId);
	}else{
		_dsAuthCodeList.setColumn(0,"userId", this.smfGetSession("userid"));
	}
	if(this.isNotNil(jParams.routingSubSysCode)){
		_dsAuthCodeList.setColumn(0,"routingSubSysCode", jParams.routingSubSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"routingSubSysCode", this.smfSubSysCode());
	}
	if(this.isNotNil(jParams.subSysCode)){
		_dsAuthCodeList.setColumn(0,"subSysCode", jParams.subSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"subSysCode", this.smfSubSysCode());
	}
	if(this.isNotNil(jParams.unitSubSysCode)){
		_dsAuthCodeList.setColumn(0,"unitSubSysCode", jParams.unitSubSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"unitSubSysCode", _dsAuthCodeList.getColumn(0,"subSysCode"));
	}
	if(this.isNotNil(jParams.schulCode)){
		_dsAuthCodeList.setColumn(0,"schulCode", jParams.schulCode);
	}else{
		_dsAuthCodeList.setColumn(0,"schulCode", this.smfGetSession("insttCode"));
	}

	var  necessaryComboType = "";
	var  necessaryComboAuth = "";
	var  necessaryTenseType = "";


	var sSchulKndScCode = this.nvl(jParams.schulCode, this.smfGetSession("schulKndScCode"));
	var bColCheck = false;
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];

		//년도 데이터셋일때 ayAuthType컬럼이 없으면 강제로 추가해준다.
		if(this.smfStr(ds.getConstColumn("cmbType")).indexOf("Ay") != -1){

			if(bColCheck == false){
				ds.addColumn("ayAuthType", "string", 255);
				bColCheck = true;
			}
		}

		if(this.In(sSchulKndScCode, ["12", "16", "13", "17"]) && ds.getConstColumn("cmbTense") == "ALL"){
			if(this.smfStr(jParams.tenseAll) == "Y"){
				//평생고,중일경우 기본적으로 전체년도를 가져올수 없는데
				//특별한경우 tenseAll == "Y"일경우 전체년도를 가져올수 있도록 허용한다.
			}else{
				//평생고,중은 ALL이 없음
				ds.setConstColumn("cmbTense", "PRESENT");
			}
		}

		necessaryComboType += ds.getConstColumn("cmbType") + ",";
		necessaryComboAuth += (this.isNotNil(ds.getConstColumn("cmbAuth")) ? ds.getConstColumn("cmbAuth") : "YES") + ",";
		necessaryTenseType += (this.isNotNil(ds.getConstColumn("cmbTense")) ? ds.getConstColumn("cmbTense") : "PRESENT") + ",";
	}
	_dsAuthCodeList.setColumn(0,"necessaryComboType",necessaryComboType);
	_dsAuthCodeList.setColumn(0,"necessaryComboAuth",necessaryComboAuth);
	_dsAuthCodeList.setColumn(0,"necessaryTenseType",necessaryTenseType);

	var nSrvRow = this.smfGetOrAddServiceId(this, sServiceId);

	var sOutDatasets = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		sOutDatasets += ds.name + "="+"dsSymAumSa01M00SVO_"+ ds.getConstColumn("cmbType") + "List ";
	}

	var sBindingCtrls = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		if(this.isNil(ds.getConstColumn("firstCode"))) continue;
		sBindingCtrls += " " + ds.name + "=" + ds.getConstColumn("firstCode");
	}
	if(this.smvBAuthList == false) {
		this.dsService.addColumn("package","string");
		this.dsService.addColumn("vo","string");
		this.dsService.addColumn("service","string");
		this.dsService.addColumn("method","string");
		this.smvBAuthList = true;
	}

	this.dsService.setColumn(nSrvRow, "id",sServiceId);
	this.dsService.setColumn(nSrvRow, "inDatasets","dsSymAumSa01M00SVO=_dsAuthCodeList" + sServiceId);
	this.dsService.setColumn(nSrvRow, "outDatasets", nexacro.trim(sOutDatasets) + " _dsAuthReturn" + sServiceId + "=dsSymAumSa01M00SVO");

	this.dsService.setColumn(nSrvRow, "package", "edusys.cm.sym.aum.sa.svc");
	this.dsService.setColumn(nSrvRow, "vo", "SymAumSa01M00SVO");
	this.dsService.setColumn(nSrvRow, "service", "SymAumSa01M00SVC");
	this.dsService.setColumn(nSrvRow, "method", "authorization");
	this.dsService.setColumn(nSrvRow, "svctp", "");
	this.dsService.setColumn(nSrvRow, "bindingControls", nexacro.trim(sBindingCtrls));
	this.dsService.setColumn(nSrvRow, "bizMessage", "");
	this.dsService.setColumn(nSrvRow, "callback", "fnTransCallback");

	//form onload에서만 callback사용
	if(sServiceId.indexOf("authOnload") == 0){
		this.dsService.setColumn(nSrvRow, "innerCallback", "smfAuthCallback");
	}

	this.dsService.setColumn(nSrvRow, "url", "svc_neis::/sym_aum_sa00_001.xp");

	this.dsService.setColumn(nSrvRow, "state", "");
	this.dsService.setColumn(nSrvRow, "reason", "");
	this.dsService.setColumn(nSrvRow, "message", "");
	this.dsService.setColumn(nSrvRow, "asynctp", this.iif(bSync, "false", "true"));
	this.dsService.setColumn(nSrvRow, "bintp", "");
	this.dsService.setColumn(nSrvRow, "comtp", "");

	//dsService를 통해 호출 한다.
	/* [X-LOG] 변수(obj)가 있는지 확인이 필요합니다.*/var jServiceParam = {sender : obj};
	this.smfService(sServiceId, jServiceParam);
};

/**
 * 권한 처리
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfAuthChain('authChain', obj,
							[dsOrgAy,dsOrgOrdScCode,dsOrgGrade,dsOrgClassCode], //전체 콤보순서에 따른 dataset들
							[cmbOrgAy.value,cmbOrgOrdScCode.value,cmbOrgGrade.value,cmbOrgClassCode.value] //데이터셋에 매핑되어 있는 콤보의value
							);

*/
prForm.smfAuthChain = function(sServiceId, obj, aryDataset, aryCmb, bSync, jParams){
	if(this.isNil(jParams)) jParams = {};
	bSync = bSync == true;

	sServiceId = this.smfStr(sServiceId);
	////////////////////////검증 //////////////////////////////
	if(sServiceId.indexOf("auth") != 0){
		this.smfDevException(this.format("sServiceId '{0}'는 잘못된 아이디입니다.\nauth로 시작해야합니다.", [sServiceId]));
		return false;
	}

	if(this.isNil(obj)){
		this.smfDevException("obj를 입력하세요.");
		return false;
	}

	/* aryDataset체크 */
	if(! (aryDataset instanceof Array)){
		this.smfDevException("파라메터aryDataset는 Array이어야 합니다");
		return false;
	}
	/* refValues 체크 */
	if(! (aryCmb instanceof Array)){
		this.smfDevException("파라메터aryCmb는 Array이어야 합니다");
		return false;
	}

	//입력한 애들이 실제 존재하는 데이터 셋들인가
	//aryDataset.
	for(var i=0; i < aryDataset.length; i++){
		if(!(aryDataset[i] instanceof nexacro.Dataset)){
			this.smfDevException(this.format("함수의 3번째 인자 aryDataset[{0}]번째 인자가 Dataset 객체이어야 합니다.",[i]));
			return false;
		}
	}

	if(aryDataset.length != aryCmb.length){
		this.smfDevException("지정한 Dataset과 Combo 값들의의 갯수가 다릅니다.");
		return false;
	}
	if(this.isNotNil(jParams.authData)){
		//학년반권한,창재 가 아니면
		//자유학기제 추가 [2015.11.01.yjkang]
		if(this.notIn(jParams.authData, ["gradeClass", "enlgh", "create", "lbrtySem"])){
			this.smfDevException("authData파라메터[" + jParams.authData + "]는 잘못된 값입니다.\ngradeClass(학년반권한)이나 enlgh(계발활동), create(창재), lbrtySem(자유학기)만 가능합니다.");
		}
	}
	////////////////////////검증끝//////////////////////////////

	//TODO: 페이지에서 정보를 가져오도록 고쳐야 함 + validation 처리


	//현재 콤보의 위치 파악
	var cmbPositionCnt = 0;
	for(var i=0; i < aryDataset.length; i++){
		if((this.smfToDatasetObject(obj.innerdataset).name ==  aryDataset[i].name)){
			cmbPositionCnt = i;
			break;
		}
	}




	//마지막 콤보박스면 서버로 auth요청을 할필요가 없다.
	if(cmbPositionCnt == (aryDataset.length-1)) return;

	/*cmbPositionCnt기준으로 이전 콤보의 값들을 input으로 가져가고
	  cmbPositionCnt기준으로 이후 콤보들이 서비스의 out으로 채워질 대상들이다.*/
	//in
	var refValues = "";
	for(var i=0, size = cmbPositionCnt + 1; i < size; i++){
		var cmbType = aryDataset[i].getConstColumn('cmbType');
		var result = cmbType.toUpperCase().lastIndexOf('AY');
		var combo = this.smfCompByInnerDataset(aryDataset[i]);
		//cmbType이 XXXAy인 경우
		if(combo == null && result != -1){
			/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/var edit = this.myeval('obj.parent.edit'+cmbType + '.value');
			refValues  += aryDataset[i].getConstColumn("cmbType") + "=" + this.nvl(edit, '-') + 	(i==size-1?"":",");
		}else{
			refValues  += (aryDataset[i].getConstColumn("cmbType") + "="+ this.nvl(aryCmb[i], '-')) + (i==size-1?"":",");
		}
	}

	var _dsAuthCodeList = this.smfGetOrCreateDataset("_dsAuthCodeList" + sServiceId);
	_dsAuthCodeList.clear();
	_dsAuthCodeList.addColumn("userId", "STRING",256);
	_dsAuthCodeList.addColumn("sysCode", "STRING",256);
	_dsAuthCodeList.addColumn("subSysCode", "STRING",256); //시스템업무권한용 SubSysCode
	_dsAuthCodeList.addColumn("unitSubSysCode", "STRING",256); // 단위업무권한용 SubSysCode
	_dsAuthCodeList.addColumn("routingSubSysCode", "STRING",256); // DataSouce를 선택할 SubSysCode
	_dsAuthCodeList.addColumn("pageId", "STRING",256);
	_dsAuthCodeList.addColumn("refValues", "STRING",256);
	_dsAuthCodeList.addColumn("schulCode", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryComboType", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryComboAuth", "STRING",256);
	_dsAuthCodeList.addColumn("necessaryTenseType", "STRING",256);
	_dsAuthCodeList.addColumn("customRefValues", "STRING",256);


	//row 추가
	_dsAuthCodeList.addRow();


	var customRefValues = "";

	//년도Dataset에 ayAuthType을 만들어놓으면 ayAuthType을 알수 있다.
	//년도Dataset에 cmbTense를 NO_ITRT나 NO_SCA_ITRT로 했을경우 반드시 ayAuthType컬럼이 있어야 한다.
	if(-1 != this.smfStr(aryDataset[0].getConstColumn('cmbType')).indexOf("Ay")){
		var ayAuthType = this.smfStr(aryDataset[0].lookup("ay", aryCmb[0], "ayAuthType"));
		if(this.isNotNil(ayAuthType)){
			customRefValues += this.format("{0}={1},", ['ayAuthType', ayAuthType]);
		}
	}

	//기본적으로 학년반권한을 탄다.
	if(this.isNil(jParams.authData)){
		jParams.authData = "gradeClass";
	} 

	for(var sColumnName in jParams){
		customRefValues += this.format("{0}={1},", [sColumnName, jParams[sColumnName]]);
	}

	_dsAuthCodeList.setColumn(0,"customRefValues", customRefValues);
	_dsAuthCodeList.setColumn(0,"sysCode","SW");

	if(this.isNotNil(jParams.pageId)){
		_dsAuthCodeList.setColumn(0,"pageId", jParams.pageId);
	}else{
		_dsAuthCodeList.setColumn(0,"pageId",this.smfFormPageId(this.smfMenuForm(obj)));
	}
	if(this.isNotNil(jParams.userId)){
		_dsAuthCodeList.setColumn(0,"userId", jParams.userId);
	}else{
		_dsAuthCodeList.setColumn(0,"userId", this.smfGetSession("userid"));
	}
	if(this.isNotNil(jParams.routingSubSysCode)){
		_dsAuthCodeList.setColumn(0,"routingSubSysCode", jParams.routingSubSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"routingSubSysCode", this.smfSubSysCode());
	}
	if(this.isNotNil(jParams.subSysCode)){
		_dsAuthCodeList.setColumn(0,"subSysCode", jParams.subSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"subSysCode", this.smfSubSysCode());
	}
	if(this.isNotNil(jParams.unitSubSysCode)){
		_dsAuthCodeList.setColumn(0,"unitSubSysCode", jParams.unitSubSysCode);
	}else{
		_dsAuthCodeList.setColumn(0,"unitSubSysCode", _dsAuthCodeList.getColumn(0,"subSysCode"));
	}
	if(this.isNotNil(jParams.schulCode)){
		_dsAuthCodeList.setColumn(0,"schulCode", jParams.schulCode);
	}else{
		_dsAuthCodeList.setColumn(0,"schulCode", this.smfGetSession("insttCode"));
	}
	_dsAuthCodeList.setColumn(0,"refValues",refValues);

	var  necessaryComboType = "";
	var  necessaryComboAuth = "";
	var  necessaryTenseType = "";

	var sSchulKndScCode = this.nvl(jParams.schulCode, this.smfGetSession("schulKndScCode"));
	for(var i=cmbPositionCnt+1, size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];

		if(this.In(sSchulKndScCode, ["12", "16", "13", "17"]) && ds.getConstColumn("cmbTense") == "ALL"){
			//평생고,중은 ALL이 없음
			ds.setConstColumn("cmbTense", "PRESENT");
		}

		necessaryComboType += ds.getConstColumn("cmbType") + (i==size-1?"":",");
		necessaryComboAuth += (this.isNotNil(ds.getConstColumn("cmbAuth")) ? ds.getConstColumn("cmbAuth") : "YES") + (i==size-1?"":",");
		necessaryTenseType += (this.isNotNil(ds.getConstColumn("cmbTense")) ? ds.getConstColumn("cmbTense") : "PRESENT") + (i==size-1?"":",");
	}
	_dsAuthCodeList.setColumn(0,"necessaryComboType",necessaryComboType);
	_dsAuthCodeList.setColumn(0,"necessaryComboAuth",necessaryComboAuth);
	_dsAuthCodeList.setColumn(0,"necessaryTenseType",necessaryTenseType);

	var nSrvRow = this.smfGetOrAddServiceId(this, sServiceId);

	var _dsAuthReturn = this.smfGetOrCreateDataset("_dsAuthReturn" + sServiceId);
	var sOutDatasets = "_dsAuthReturn" + sServiceId + "=dsSymAumSa01M00SVO ";
	for(var i=cmbPositionCnt+1; i<aryDataset.length; i++){
		var ds = aryDataset[i];
		sOutDatasets += ds.name + "="+"dsSymAumSa01M00SVO_"+ ds.getConstColumn("cmbType") + "List ";
	}


	var sBindingCtrls = "";
	for(var i=cmbPositionCnt; i<aryDataset.length; i++){
		if(this.isNil(aryDataset[i].getConstColumn("firstCode"))) continue;
		sBindingCtrls += " " + aryDataset[i].name + "=" + aryDataset[i].getConstColumn("firstCode");
	}

	dsService.setColumn(nSrvRow, "id",sServiceId);
	dsService.setColumn(nSrvRow, "inDatasets","dsSymAumSa01M00SVO=_dsAuthCodeList" + sServiceId);
	dsService.setColumn(nSrvRow, "outDatasets", nexacro.trim(sOutDatasets));

	dsService.setColumn(nSrvRow, "package", "edusys.cm.sym.aum.sa.svc");
	dsService.setColumn(nSrvRow, "vo", "SymAumSa01M00SVO");
	dsService.setColumn(nSrvRow, "service", "SymAumSa01M00SVC");
	dsService.setColumn(nSrvRow, "method", "authorization");
	dsService.setColumn(nSrvRow, "svctp", "");
	dsService.setColumn(nSrvRow, "bindingControls", "");
	dsService.setColumn(nSrvRow, "bizMessage", "");
	dsService.setColumn(nSrvRow, "callback", "fnTransCallback");
	dsService.setColumn(nSrvRow, "innerCallback", "smfAuthCallback");
	dsService.setColumn(nSrvRow, "url", "svc_neis::/sym_aum_sa00_001.xp");

	dsService.setColumn(nSrvRow, "state", "");
	dsService.setColumn(nSrvRow, "reason", "");
	dsService.setColumn(nSrvRow, "message", "");
	dsService.setColumn(nSrvRow, "asynctp", this.iif(bSync, "false", "true"));
	dsService.setColumn(nSrvRow, "bintp", "");
	dsService.setColumn(nSrvRow, "comtp", "");

	//dsService를 통해 호출 한다.
	/* [X-LOG] 변수(obj)가 있는지 확인이 필요합니다.*/var jServiceParam = {sender : obj};
	this.smfService(sServiceId, jServiceParam);
};

/**
 * 실행되어있는 모든 폼에 observe이벤트를 호출
 *
 * @param  sender   이벤트를 발생한 폼
 * @param  sEventId event id
 * @param  jParams  parameter
 * @return void
 * @see    function Button00_onclick(obj:Button,  e:ClickEventInfo)
           {
               smfNotifyEvent(this, "event01", {test1 : dsMain.getColumn(dsMain.rowposition, "test")
                                                ,test2 : dsMain.getColumn(dsMain.rowposition, "test2")});
           }
 *
 */
prForm.smfNotifyEvent = function(sender, sEventId, jParams){
    if(nexacro.getApplication().gv_AppFramePath == null) return;

	for(var i=0,size=nexacro.getApplication().gv_AppFramePath.frames.length; i<size; i++){
        var frame = nexacro.getApplication().gv_AppFramePath.frames[i];
        if(frame == undefined || frame == null ) continue;
        var form = frame.form;
        if(form == null) continue;

        if(form.fnObserve != undefined && form.fnObserve != null){
            form.fnObserve(sender, sEventId, jParams);
        }
	}
};

/**
 * focus를 준다.
 *
 * @param  obj
 * @return void
 *
 */
prForm.smfSetFocus = function(obj){
    var aryParents = [];
    var component = obj;
    do{
        aryParents.push(component);
        component = component.parent;
    }while((component+"") != "[object Form]");


    for(var i=aryParents.length-1; i>=0; i--){
        if(aryParents[i] instanceof nexacro.Tabpage){
            var oTab = aryParents[i+1]; //tab임
            //tabindex를 찾음
            for(var n=0,sizen=oTab.tabpages.length; n<sizen; n++){
                if(oTab.tabpages[n] == aryParents[i]){
                    oTab.set_tabindex(n);
                    break;
                }
            }

            aryParents[i].setFocus();
        }
    }

    obj.setFocus();
};

/**
 * aryObj중 obj를 제외하고 값을 비운다.
 *
 * @param  obj
 * @param  aryObj
 * @return void
 *
 */

prForm.smfClearExcludeValue = function(obj, aryObj){
	for(var i=0,size=aryObj.length; i<size; i++){
		var comp = aryObj[i];
		if(obj != comp){
			comp.set_value("");
		}
	}
};

/**
 * dsA와 dsB의 의 column값을 비교
 *
 * @param  obj
 * @param  aryObj
 * @return json object
 * @exsample//데이터 비교
			if(smfDiffDataset(dsMaster, dsDetail).isDiff){
				alert_opacity("값이 서로 다르다");
				return;
			}
 */

prForm.smfDiffDataset = function(dsA, dsB, jOption){
	if(this.isNil(jOption)) jOption = {};
	//원본으로 비교할지

	if(jOption.isOriginData != false) jOption.isOriginData = true;
	if(this.isNil(jOption.columns)) jOption.columns = [];

	if(jOption.isOriginData == true){
		var _dsDiff = this.smfGetOrCreateDataset('_dsDiff');
		_dsDiff.assign(dsA);
		_dsDiff.clearData();

		//원본데이터를 채워넣는다.
		for(var i=0,size=dsA.rowcount; i<size; i++){
			if(dsA.getRowType(i) == Dataset.ROWTYPE_INSERT) continue;

			var nAddRow = _dsDiff.addRow();
			for(var n=0,sizen=dsA.colcount; n<sizen; n++){
				_dsDiff.setColumn(nAddRow, n, dsA.getOrgColumn(i, n));
			}
		}

		dsA = _dsDiff;
	}

	var result = {};
	result.isDiff = false;
	result.isDiffRowCount = false;
	result.isDiffColCount = false;

	result.isDiffValue = false; //column value가 다른지
	result.diffValue = {}; //다른 column value 정보
	/* [X-LOG] 변수(columnName)가 있는지 확인이 필요합니다.*/ result.diffValue.columnName = "";
	/* [X-LOG] 변수(rowIndex)가 있는지 확인이 필요합니다.*/ result.diffValue.rowIndex   = -1;

	//컬럼 갯수를 비교한다.
	if(dsA.colcount != dsB.colcount){
		result.isDiff = true;
		result.isDiffColCount = true;
		return result;
	}

	//rowcount를 비교한다.
	if(dsA.rowcount != dsB.rowcount){
		result.isDiff = true;
		result.isDiffRowCount = true;
		return result;
	}

	//0개면 전체를 비교
	if(jOption.columns.length == 0){
		for(var n=0,sizen=dsA.colcount; n<sizen; n++){
			var sColumnName = dsA.getColID(n);
			if(sColumnName == "_chk") continue;
			jOption.columns.push(sColumnName);
		}
	}

	//컬럼 데이터를 비교한다.
	for(var i=0,size=dsA.rowcount; i<size; i++){
		for(var n=0,sizen=jOption.columns.length; n<sizen; n++){
			var sColumnName = jOption.columns[n];
			if(dsA.getColumn(i, sColumnName) != dsB.getColumn(i, sColumnName)){
				result.isDiff = true;
				result.isDiffValue = true;
				/* [X-LOG] 변수(columnName)가 있는지 확인이 필요합니다.*/ result.diffValue.columnName = sColumnName;
				/* [X-LOG] 변수(rowIndex)가 있는지 확인이 필요합니다.*/ result.diffValue.rowIndex = i;
				break;
			}
		}
		if(result.isDiffValue == true) break;
	}

	return result;
};


prForm.smfDescComponent = function(obj){
	var sDesc = "";
	var idx = 0;
	var arySortedPropName = [];
	var descriptions = [];
	for(var sPropName in obj){
		arySortedPropName.push(sPropName);
	}

	arySortedPropName = arySortedPropName.sort();
	for(var i=0,size=arySortedPropName.length; i<size; i++){
		var propValue = obj[arySortedPropName[i]];
		if(propValue == undefined) continue;

		if(false && propValue instanceof nexacro.EventObject){
			var sText = "";
			try{
				sText = this.smfDescUserEvent(propValue);
			}catch(e){
				sText = propValue;
			}
			descriptions.push(this.format("{0} = {1}", [arySortedPropName[i], sText]));
		}else{
			descriptions.push(this.format("{0} = {1}", [arySortedPropName[i], propValue]));
		}
	}

	sDesc = descriptions.join("\n");
	if(obj instanceof nexacro.Form){
		sDesc = obj + " " + obj.name + "\n" + sDesc;
	}else if(this.isNotNil(obj.parent)){
		sDesc = obj + " " + this.smfFullId(obj) + "\n" + sDesc;
	}else{
	}
	return sDesc;
};

prForm.smfDescUserEvent = function(event ){
	var descs = [];

	for(var i=0,size=event.length; i<size; i++){
		/* [X-LOG] getHandler은 지원되지 않는 메서드입니다.*/ descs.push("function=" + this.smfFuncName(event.getHandler(i)));
	}

	return descs.join(", ");
};


/**
 * (사용안함)권한 처리에서 사용하는 callback함수
 *
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfAuthList('auth', [dsAy, dsOrdScCode, dsClassCode]);
 */
prForm.smfScoreAuthCallback = function(sId, nReason, sMessage, jParams){
    if(nReason == -1 ) return;
	/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/var nRow = dsService.findRow('id', sId);
	var service = (/* [X-LOG] 함수(RequestService)를 찾을 수 없습니다.*/ new RequestService(this, sId, jParams));
	var aryInDatasets = service.toArrayByInDatasets();
	var aryOutDatasets = service.toArrayByOutDatasets();

	for(var i=0,size=aryOutDatasets.length; i<size; i++){
		var ds = aryOutDatasets[i];
		var combo = this.smfCompByInnerDataset(ds);
		if(!(combo instanceof nexacro.Combo)) continue;


		//0번째 값으로 세팅한다.
		combo.set_value(ds.getColumn(0, combo.codecolumn));
   }

   //직접권한접근이 허용된 경우
   //년도Combo를 Edit로 변경해준다.
   if(/* [X-LOG] 변수(_dsAuthReturn)가 있는지 확인이 필요합니다.*/ "Y" == _dsAuthReturn.getColumn(0, "directAuthYn")){
	   for(var i=0,size=aryOutDatasets.length; i<size; i++){
	   var combo = this.smfCompByInnerDataset(aryOutDatasets[i]);
			var cmbType = aryOutDatasets[i].getConstColumn('cmbType');
			var _check = cmbType.toUpperCase().lastIndexOf('AY');
			if(_check != -1 && combo.visible == true){
				var _edit = new Edit('edit' + cmbType);
				combo.parent.addChild(_edit.name, _edit);
				_edit.position = combo.position;
				_edit.set_value(aryOutDatasets[i].getColumn(0,0));
				_edit.show();
				combo.set_visible(false);
				combo.set_innerdataset(null);
			}
	  }
  }
};

/**
 * (사용안함)성적용 권한 처리
 *
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfScoreAuthList('auth', [dsAy, dsOrdScCode, dsClassCode]);
 */
prForm.smfScoreAuthList = function(obj, sServiceId, aryDataset, bSync){
	bSync = bSync == true;

	////////////////////////검증 //////////////////////////////

	sServiceId = this.smfStr(sServiceId);

	if(sServiceId.indexOf("scoreAuthOnload") != 0 && sServiceId.indexOf("authRowChange") != 0){
		this.smfDevException(this.format("sServiceId '{0}'는 잘못된 아이디입니다.\nauthOnload나 authRowChange로 시작해야합니다.", [sServiceId]));
		return false;
	}

	if(! (aryDataset instanceof Array)){
		this.smfDevException("파라메터aryDataset는 Array이어야 합니다");
		return false;
	}

	//todo 검증 detail
	////////////////////////검증끝//////////////////////////////

	// @example smfSysGbnNm("mis_sdlca00_m00", "NM")
	//페이지에서 가져온 정보를 세팅해준다
	var arrSysNm = new Array();
	//임의의 페이지 id 값을 세팅해줌
	//arrSysNm = smfSysGbnNm("his_edcoh02_m00","CD");
	arrSysNm = this.smfSysGbnNm(this.smfParentForm(this).name,"CD");

	// 소스명에 사용할 서브시스템명
	// 예) His / Mis / Els / Sps
	var _tmp_SysNm = arrSysNm[1].substring(0,1) + arrSysNm[1].substring(1,3).toLowerCase();



	//_dsAuthCodeList Dataset생성
	var _dsAuthCodeList = this.objects['_dsAuthCodeList'];
	if( _dsAuthCodeList  == null){
		_dsAuthCodeList = new Dataset();
		_dsAuthCodeList.set_name("_dsAuthCodeList");
		this.addChild(_dsAuthCodeList.name, _dsAuthCodeList);
	}
	_dsAuthCodeList.clearData();

	//_dsAuthReturn Dataset생성
	var _dsAuthReturn = this.objects['_dsAuthReturn'];
	if( _dsAuthReturn == null){
		_dsAuthReturn = new Dataset();
		_dsAuthReturn.set_name("_dsAuthReturn");
		_dsAuthReturn.set_useclientlayout(true);
		this.addChild(_dsAuthReturn.name, _dsAuthReturn);
	}
	_dsAuthReturn.clearData();

	//컬럼생성
	_dsAuthCodeList.addColumn("sysCode"		, "STRING", 256);
	_dsAuthCodeList.addColumn("subSysCode"	, "STRING", 256);
	_dsAuthCodeList.addColumn("pageId"		, "STRING", 256);

	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		ds.getConstColumn("cmbType");
		_dsAuthCodeList.addColumn("necessaryComboType", "STRING", 256);
		_dsAuthCodeList.addColumn("necessaryTenseType", "STRING", 256);
	}


	//row 추가
	_dsAuthCodeList.addRow();
	_dsAuthCodeList.setColumn(0, "pageId"		, arrSysNm[4]);
	_dsAuthCodeList.setColumn(0, "sysCode"		, "SW");
	_dsAuthCodeList.setColumn(0, "subSysCode"	, this.smfSubSysCode());
	_dsAuthCodeList.setColumn(0, "schulCode"	, this.smfGetSession("insttCode")	);



	var  necessaryComboType = "";
	var  necessaryTenseType = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		necessaryComboType += ds.getConstColumn("cmbType") + ",";
		necessaryTenseType += (this.isNotNil(ds.getConstColumn("cmbTense")) ? ds.getConstColumn("cmbTense") : "PRESENT") + ",";
	}
	_dsAuthCodeList.setColumn(0,"necessaryComboType",necessaryComboType);
	_dsAuthCodeList.setColumn(0,"necessaryTenseType",necessaryTenseType);
	//trace(_dsAuthCodeList.saveXML());
	//dsService에 혹시 같은 아이디가 있으면 삭제 해준다.
	if(/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/ dsService.findRow("id", sServiceId) > -1){
		/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/var nDeleteRow = dsService.findRow("id", sServiceId);
		/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/ dsService.deleteRow(nDeleteRow);
	}

	// dsService를 통해 넘긴다
	/* [X-LOG] 변수(dsService)가 있는지 확인이 필요합니다.*/var nSrvRow = dsService.addRow();

	var sOutDatasets = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		//dataSet 명으로부터 이름을 추출하여 사용함
		var svoReturnListNm = ds.name.substring(2,3).toLowerCase() + ds.name.substring(3, ds.name.length);
		sOutDatasets += ds.name + "="+"ds" + _tmp_SysNm + "ScrEt01M00SVO_"+ svoReturnListNm + "List ";

	}

	var sBindingCtrls = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		if(this.isNil(ds.getConstColumn("firstCode"))) continue; 
		sBindingCtrls += " " + ds.name + "=" + ds.getConstColumn("firstCode");
	}

	this.dsService.setColumn(nSrvRow, "id"				, sServiceId);
	this.dsService.setColumn(nSrvRow, "inDatasets"		, "ds" + _tmp_SysNm + "ScrEt01M00SVO=_dsAuthCodeList");
	this.dsService.setColumn(nSrvRow, "outDatasets"		, nexacro.trim(sOutDatasets) + " _dsAuthReturn=_dsAuthReturn");

	this.dsService.setColumn(nSrvRow, "package"			, "edusys.sw." + _tmp_SysNm.toLowerCase() + ".scr.et.svc");
	this.dsService.setColumn(nSrvRow, "vo"				, _tmp_SysNm + "ScrEt01M00SVO");
	this.dsService.setColumn(nSrvRow, "service"			,  _tmp_SysNm + "ScrEt01M00SVC");
	this.dsService.setColumn(nSrvRow, "method"			, "authorization");
	this.dsService.setColumn(nSrvRow, "svctp"			, "");
	this.dsService.setColumn(nSrvRow, "bindingControls"	, nexacro.trim(sBindingCtrls));
	this.dsService.setColumn(nSrvRow, "bizMessage"		, "");
	this.dsService.setColumn(nSrvRow, "callback"			, "fnTransCallback");

	//form onload에서만 callback사용
	if(sServiceId.indexOf("scoreAuthOnload") == 0){
		this.dsService.setColumn(nSrvRow, "innerCallback", "smfScoreAuthCallback");
	}

	this.dsService.setColumn(nSrvRow, "url", "svc_neis::/" + _tmp_SysNm.toLowerCase() + "_scr_et00_000.xp");

	this.dsService.setColumn(nSrvRow, "state", "");
	this.dsService.setColumn(nSrvRow, "reason", "");
	this.dsService.setColumn(nSrvRow, "message", "");
	this.dsService.setColumn(nSrvRow, "asynctp", this.iif(bSync, "false", "true"));
	this.dsService.setColumn(nSrvRow, "bintp", "");
	this.dsService.setColumn(nSrvRow, "comtp", "");

	//dsService를 통해 호출 한다.
	var jServiceParam = {sender : obj};
	this.smfService(sServiceId, jServiceParam);
};

/**
 * (사용안함) 권한 처리
 * @param  sServiceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @param  bSync      : 비동기로 넘길지 default false
 * @return void
 * @see    smfAuthChain('authChain', obj,
							[dsOrgAy,dsOrgOrdScCode,dsOrgGrade,dsOrgClassCode], //전체 콤보순서에 따른 dataset들
							[cmbOrgAy.value,cmbOrgOrdScCode.value,cmbOrgGrade.value,cmbOrgClassCode.value] //데이터셋에 매핑되어 있는 콤보의value
							);

*/
prForm.smfScoreAuthChain = function(sServiceId, obj, aryDataset, aryCmb){



	var bSync = bSync == true;
	sServiceId = this.smfStr(sServiceId);
	////////////////////////검증 //////////////////////////////
	if(sServiceId.indexOf("scoreAuth") != 0){
		this.smfDevException(this.format("sServiceId '{0}'는 잘못된 아이디입니다.\nscoreAuth로 시작해야합니다.", [sServiceId]));
		return false;
	}

	if(this.isNil(obj)){
		this.smfDevException("obj를 입력하세요.");
		return false;
	}

	/* aryDataset체크 */
	if(! (aryDataset instanceof Array)){
		this.smfDevException("파라메터aryDataset는 Array이어야 합니다");
		return false;
	}
	/* refValues 체크 */
	if(! (aryCmb instanceof Array)){
		this.smfDevException("파라메터aryCmb는 Array이어야 합니다");
		return false;
	}

	//입력한 애들이 실제 존재하는 데이터 셋들인가
	//aryDataset.
	for(var i=0; i < aryDataset.length; i++){
		this.trace("#"+i + ":"+ aryDataset[i].name);
		if(!(aryDataset[i] instanceof nexacro.Dataset)){
			this.smfDevException(this.format("함수의 3번째 인자 aryDataset[{0}]번째 인자가 Dataset 객체이어야 합니다.",[i]));
			return false;
		}
	}

	if(aryDataset.length != aryCmb.length){
		this.smfDevException("지정한 Dataset과 Combo 값들의의 갯수가 다릅니다.");
		return false;
	}
	////////////////////////검증끝//////////////////////////////

	/* [X-LOG] 변수(arrSysNm)가 있는지 확인이 필요합니다.*/ arrSysNm = this.smfSysGbnNm(this.smfParentForm(this).name,"CD");

	// 소스명에 사용할 서브시스템명
	// 예) His / Mis / Els / Sps
	/* [X-LOG] 변수(arrSysNm)가 있는지 확인이 필요합니다. [X-LOG] 변수(arrSysNm)가 있는지 확인이 필요합니다.*/var _tmp_SysNm = arrSysNm[1].substring(0,1) + arrSysNm[1].substring(1,3).toLowerCase();


	//현재 콤보의 위치 파악
	var cmbPositionCnt = 0;
	for(var i=0; i < aryDataset.length; i++){
		if((this.smfToDatasetObject(obj.innerdataset).name ==  aryDataset[i].name)){
			cmbPositionCnt = i;
			break;
		}
	}


	/*cmbPositionCnt기준으로 이전 콤보의 값들을 input으로 가져가고
	  cmbPositionCnt기준으로 이후 콤보들이 서비스의 out으로 채워질 대상들이다.*/
	//in
	var refValues = "";
	for(var i=0, size = cmbPositionCnt + 1; i < size; i++){
		var cmbType = aryDataset[i].getConstColumn('cmbType');
		var result = cmbType.toUpperCase().lastIndexOf('AY');
		var combo = this.smfCompByInnerDataset(aryDataset[i]);
		//cmbType이 XXXAy인 경우
		if(combo == null && result != -1){
			var edit = 'obj.parent.edit'+cmbType + '.value';
			/* [X-LOG] eval은 로직에 맞게 수정하시기 바랍니다.*/ refValues  += aryDataset[i].getConstColumn("cmbType") + "="+ this.myeval(edit) + 	(i==size-1?"":",");
		}else{
			refValues  += aryDataset[i].getConstColumn("cmbType") + "="+aryCmb[i] + 	(i==size-1?"":",");
		}
	}

	this._dsAuthCodeList.clear();
	//컬럼생성
	this._dsAuthCodeList.addColumn("sysCode", "STRING",256);
	this._dsAuthCodeList.addColumn("subSysCode", "STRING",256);
	this._dsAuthCodeList.addColumn("pageId", "STRING",256);
	this._dsAuthCodeList.addColumn("refValues", "STRING",256);
	this._dsAuthCodeList.addColumn("necessaryComboType", "STRING",256);
	this._dsAuthCodeList.addColumn("necessaryTenseType", "STRING",256);


	//row 추가
	this._dsAuthCodeList.addRow();

	this._dsAuthCodeList.setColumn(0,"pageId", arrSysNm[4]);
	this._dsAuthCodeList.setColumn(0,"sysCode", "SW");
	this._dsAuthCodeList.setColumn(0,"subSysCode", this.smfSubSysCode());
	this._dsAuthCodeList.setColumn(0,"schulCode", this.smfGetSession("insttCode"));

	this._dsAuthCodeList.setColumn(0,"refValues",refValues);

	var necessaryComboType = "";
	var necessaryTenseType = "";

	for(var i=cmbPositionCnt+1, size=aryDataset.length; i<size; i++){
		necessaryComboType += aryDataset[i].getConstColumn("cmbType") + (i==size-1?"":",");
		necessaryTenseType += (this.isNotNil(aryDataset[i].getConstColumn("cmbTense")) ? aryDataset[i].getConstColumn("cmbTense") : "PRESENT") + (i==size-1?"":",");
	}
	this._dsAuthCodeList.setColumn(0,"necessaryComboType",necessaryComboType);
	this._dsAuthCodeList.setColumn(0,"necessaryTenseType",necessaryTenseType);

	//dsService에 혹시 같은 아이디가 있으면 삭제 해준다.
	if(this.dsService.findRow("id", sServiceId) > -1){
		var nDeleteRow = this.dsService.findRow("id", sServiceId);
		this.dsService.deleteRow(nDeleteRow);
	}

	// dsService를 통해 넘긴다
	var nSrvRow = this.dsService.addRow();

	var sOutDatasets = "";
	for(var i=cmbPositionCnt+1; i<aryDataset.length; i++){
		var ds = aryDataset[i];
		var svoReturnListNm = ds.name.substring(2,3).toLowerCase() + ds.name.substring(3, ds.name.length);
		sOutDatasets += ds.name + "="+"ds" + _tmp_SysNm + "ScrEt01M00SVO_"+ svoReturnListNm + "List ";

	}


	var sBindingCtrls = "";
	for(var i=cmbPositionCnt; i<aryDataset.length; i++){
		if(this.isNil(aryDataset[i].getConstColumn("firstCode"))) continue;
		sBindingCtrls += " " + aryDataset[i].name + "=" + aryDataset[i].getConstColumn("firstCode");
	}

	this.dsService.setColumn(nSrvRow, "id",sServiceId);
	this.dsService.setColumn(nSrvRow, "inDatasets","ds" + _tmp_SysNm + "ScrEt01M00SVO=_dsAuthCodeList");
	this.dsService.setColumn(nSrvRow, "outDatasets", nexacro.trim(sOutDatasets));

	this.dsService.setColumn(nSrvRow, "package", "edusys.sw." + _tmp_SysNm.toLowerCase() + ".scr.et.svc");
	this.dsService.setColumn(nSrvRow, "vo", _tmp_SysNm + "ScrEt01M00SVO");
	this.dsService.setColumn(nSrvRow, "service", _tmp_SysNm + "ScrEt01M00SVC");
	this.dsService.setColumn(nSrvRow, "method", "authorization");
	this.dsService.setColumn(nSrvRow, "svctp", "");
	this.dsService.setColumn(nSrvRow, "bindingControls", "");
	this.dsService.setColumn(nSrvRow, "bizMessage", "");
	this.dsService.setColumn(nSrvRow, "callback", "fnTransCallback");
	this.dsService.setColumn(nSrvRow, "innerCallback", "smfScoreAuthCallback");
	this.dsService.setColumn(nSrvRow, "url", "svc_neis::/" + _tmp_SysNm.toLowerCase() + "_scr_et00_000.xp");

	this.dsService.setColumn(nSrvRow, "state", "");
	this.dsService.setColumn(nSrvRow, "reason", "");
	this.dsService.setColumn(nSrvRow, "message", "");
	this.dsService.setColumn(nSrvRow, "asynctp", this.iif(bSync, "false", "true"));
	this.dsService.setColumn(nSrvRow, "bintp", "");
	this.dsService.setColumn(nSrvRow, "comtp", "");
	//dsService를 통해 호출 한다.


	//dsService를 통해 호출 한다.
	/* [X-LOG] 변수(obj)가 있는지 확인이 필요합니다.*/var jServiceParam = {sender : obj};
	this.smfService(sServiceId, jServiceParam);
};


/**
 * 등록/수정된 Row를 check해준다
 *
 * @param  ds : Dataset
 * @return void
 * @see
*/
prForm.smfUpdateRowToCheck = function(ds){
	for(var i=0,size=ds.rowcount; i<size; i++){
		if(this.smfIsUpdateRow(ds, i)){
			ds.setColumn(i, "_chk", "0");
		}
	}
};

/**
 * 등록/수정된 Row중, _chk가 1이 아닌 row를 NORMAL로 변경
 *
 * @param  ds : Dataset
 * @return void
 * @see
*/
prForm.smfUnCheckRowToNormalType = function(ds){
    ds.set_updatecontrol(false);
    try{
		for(var i=0,size=ds.rowcount; i<size; i++){
			if(ds.getColumn(i, "_chk") == "1") continue;
			ds.setRowType(i, Dataset.ROWTYPE_NORMAL);
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		ds.set_updatecontrol(true);
	}
};

/**
 * 엔터값을(\n)-> sTo로 변경
 * smfReplaceLineBreak("ab\ncd", "/") --> ab/cd
 * smfReplaceLineBreak("ab\ncd", " ") --> ab cd
 * @param  sText : 바꾸려고하는 String
 * @param  sTo   : 엔터값을 변경하려는 String
 * @return void
 * @see
*/
prForm.smfReplaceLineBreak = function(sText, sTo){
	return this.smfStr(sText).replace("\r\n", "\n").replace("\n", sTo);
};

prForm.smfHandleList = function(list, fnc){
	for(var index in list){
		fnc(index, list[index]);
	}

	return list;
};

prForm.smfHandleDataset = function(ds  , fncHandler){
	if(fncHandler == undefined) return;
	for(var i=0,size=ds.rowcount; i<size; i++){
		fncHandler(ds, i);
	}
};

/**
 * Dataset을 이름으로 찾는다. 없으면 생성.
 * @param  sName : Dataset Name
 * @return Dataset
*/
prForm.smfGetOrCreateDataset = function(sName, bClearData, columnInfoMapFunc){
	if(this.isNil(bClearData)) bClearData = true;
	
	var ds = this.objects[sName];
	if(ds == null){
 		ds = new Dataset();
		ds.set_name(sName);
		this.addChild(ds.name, ds);
	}

	if(bClearData) ds.clearData();
	
	if(columnInfoMapFunc){
		columnInfoMapFunc.call(this, ds);
	}
	return ds;
};

/**
 * Text파일을 Dataset으로 import한다.
 * @param  fileStream : 열려있는 VirtualFile
 * @param  dsDesc     : Dataset
 * @return result
 * @see
*/
prForm.smfFixedTextToDataset = function(fileStream, dsDesc  ){
	var result = {};
	result.isSucc = true;
	result.errorMessage = "";
	result.errorLine = -1;

	var aryDoubleByteColumn = [];
	var nColCount = dsDesc.colcount;

	//
	var nExpectedLength = 0;
	for(var i=0; i<nColCount; i++){
		var colInfo = dsDesc.getColumnInfo(i);
		nExpectedLength += colInfo.size;
	}

	var sLineText = "";
	var nLineCount = 0;
	var nCurrentLine = 0;
	/* [X-LOG] Buffer 객체를 지원하지 않습니다. [X-LOG] read은 지원되지 않는 메서드입니다.*/var bufObj = new Buffer(fileStream.read());
	//trace(fileStream.readLine());
    /* [X-LOG] getText은 지원되지 않는 메서드입니다.*/var x = bufObj.getText(0);
    var y = x.split("\r\n");

    for(var j=0;j<y.length;j++) {
        sLineText = y[j];

        if (this.smfLength(sLineText, 2) == 0) continue;

		nCurrentLine++;

		if(this.smfLength(sLineText, 2) != nExpectedLength){
			result.isSucc = false;
			result.errorLine = nCurrentLine;
			result.errorMessage = this.format("유효하지 않은 데이터가 있습니다.\n {0}줄의 사이즈가 {1}입니다.\n유효한 사이즈인 {2}으로 수정하세요.",
			                             [nCurrentLine, this.smfLength(sLineText, 2), nExpectedLength]);

			return result;
		}
		var nAddedRow = dsDesc.addRow();
		for(var i=0; i<nColCount; i++){
			var colInfo = dsDesc.getColumnInfo(i);
			var sColumnValue = this.smfSubStr(sLineText, 0, colInfo.size);
			dsDesc.setColumn(nAddedRow, i, nexacro.trim(sColumnValue));
			sLineText = sLineText.substr(sColumnValue.length);
		}

		if(((nLineCount++) % 50) == 0){
			/* [X-LOG] redraw은 지원되지 않는 메서드입니다.*/ this.redraw();
			this.form.resetScroll();
		}
	}

	dsDesc.set_rowposition(0);

	return result;
};

/**
 * String의 Length를 구한다.
 * @param  sText : 문자열
 * @param  nDoublebyteSize : (Default : 2) 한글이나 한문의 size로 계산할지
 * @return Integer
*/
prForm.smfLength = function(sText, nDoublebyteSize){
	if(this.isNil(nDoublebyteSize)) nDoublebyteSize = 2;

	if(this.isNil(sText)) return 0;
	sText = this.smfStr(sText);
	var nLength = 0;
    for (var i=0,size=sText.length; i<size; i++){
		if (sText.charCodeAt(i) > 127) nLength += nDoublebyteSize;
		else nLength += 1;
    }
	return nLength;
};

prForm.smfSubStr = function(s, nStart, nSize){
	if(s == undefined || s == null || s == "") return "";
	s = (s + "");

	var nInc = 0;

	for(var i=nStart; i<nSize; i++){
		if(s.charCodeAt(i) > 255){
			nSize -= 1;
		}
		nInc += 1;
	}

	return s.substr(nStart, nInc);
};

/**
 * Button을 Enable/Disable 시킨다.
 * @param  composite : Button을 담고있는 객체(this, Div, Tabpage등)
 * @param  bEnabled  : true/false
 * @param  bInclude  : (Default : false) true/false Div가 있다면 내부까지 포함시킬지
 * @param  fncAccept : (Default : undefined) 비교함수 function(btn){};

 * @example smfEnableButtonList(Div00, true); //Div00내부 버튼 활성화

 * @example smfEnableButtonList(Div00, true, true); //Div00내부 버튼 비활성화및 Div00내부의 Div를 모두 찾아 Button 활성화

 * @example smfEnableButtonList(Div01, false, false, function (btn){
		        return btn.name != "Button00";
	        });
	        //Button00은 제외하고 Div01내부 버튼 활성화
 * @return void
*/
prForm.smfEnableButtonList = function(composite, bEnabled, bInclude, fncAccept){
	if(bInclude != true) bInclude = false;

    this.smfTravelComponents(composite, function (oComp, fnc, nLvl){
		if(bInclude == false){
			if(oComp.parent != composite) return;
		}

		if(!(oComp instanceof nexacro.Button)) return;

		if(fncAccept != undefined){
			if(fncAccept(oComp) != true) return;
		}
		oComp.set_enable(bEnabled);
    });
};


/**
 * 강제로 ds의 nRow의 타입을 normal->update로 변경한다.
 * setRowType이 안될때 사용하는 함수.
 * @param  ds : Dataset
 * @param  nRow : update할 Row.생략시 모든 row
 * @return void
*/
prForm.smfForceUpdateRows = function(ds  , nRow){
	if(null == ds.getColumnInfo("_forceUpdate")){
		var colinfo = new ColumnInfo();
		colinfo.set_type(2); // "STRING"
		colinfo.size = 255;
		ds.addColumnInfo("_forceUpdate",colinfo);
	}

	//nRow를 받으면 nRow만 설정
	if(nRow != undefined){
		var nSeq = this.isNil(ds.getColumn(nRow, "_forceUpdate")) ? 0 : parseInt(ds.getColumn(nRow, "_forceUpdate"));
		ds.setColumn(nRow, "_forceUpdate", nSeq+1);
		return;
	}

	//nRow를 안받으면 전체Row 설정
	for(var i=0,size=ds.rowcount; i<size; i++){
		var nSeq = this.isNil(ds.getColumn(i, "_forceUpdate")) ? 0 : parseInt(ds.getColumn(i, "_forceUpdate"));
		ds.setColumn(i, "_forceUpdate", nSeq+1);
	}
};

/**
 * checkbox를 radio처럼 하나만 check되게
 * @param  ds          : Dataset
 * @param  nCheckedRow : (Default : rowposition) check할 Row
 * @param  sColumnName : (Default : _chk) check할 columnName
 * @param  bCanUncheck : (Default : false) uncheck도 가능..
 * @return checked rowindex
*/
prForm.smfCheckColumnAsRadio = function(ds, nCheckedRow, sColumnName, bCanUncheck){
	if(this.isNil(nCheckedRow)) nCheckedRow = ds.rowposition;
	if(this.isNil(sColumnName)) sColumnName = "_chk";
	if(this.isNil(bCanUncheck)) bCanUncheck = false;

	var bCheckedRowIndex = -1;

	for(var i=0,size=ds.rowcount; i<size; i++){
		if(i == nCheckedRow){
			if(bCanUncheck != true){
				bCheckedRowIndex = i;
				ds.setColumn(i, sColumnName, "1");
			}
		}else{
			ds.setColumn(i, sColumnName, "0");
		}
	}

	return bCheckedRowIndex;
};

/**
 * 눈에보기쉬운 텍스트로 보여준다.
 * @param  sText        : Text
 * @param  nLength      : 보여줄 텍스트의 수
 * @return String
*/
prForm.smfEasyOnEyesText = function(sText, nLength){
	sText = this.smfStr(sText);
	if(sText.length > nLength){
		sText = sText.substring(0, nLength) + "[생략...]";
	}

	return sText;
};

/**
 * 그리드에서 눈에보기쉬운 텍스트로 보여준다.
 * @param  sDatasetName : String
 * @param  nRow         : currow
 * @param  sText        : Text
 * @param  nLength      : 보여줄 텍스트의 수
 * @param  bShowFullTextWhenCurrow : (Default : true) 선택한 Row의 메시지는 다 보여주기

 * @return String
*/
prForm.smfGridEasyOnEyesText = function(sDatasetName, nRow, sText, nLength, bShowFullTextWhenCurrow){
	if(this.isNil(bShowFullTextWhenCurrow)) bShowFullTextWhenCurrow = true;
	var ds = this.smfFindComponentInThisContext(sDatasetName);

	if(bShowFullTextWhenCurrow == true){
		if(ds.rowposition == nRow) return this.smfStr(sText);
	}

	return this.smfEasyOnEyesText(sText, nLength);
};

/**
 * 그리드 선택된셀은 full Text를 아니면 눈에보기쉬운 텍스트로 보여준다.
 * @param  grd          : grid name
 * @param  nCell        : cell
 * @param  nRow         : currow
 * @param  sText        : Text
 * @param  nLength      : 보여줄 텍스트의 수

 * @return String
*/
prForm.smfGridCellText = function(grd, nCell, nRow, sText){
    var ds = this.smfFindComponentInThisContext(grd.binddataset);
    if(ds.rowposition == nRow) return this.smfStr(sText);
    var nLength = parseInt(grd.getRealColSize(nCell) / 18);
    return this.smfStr(this.smfEasyOnEyesText(sText, nLength));
};

/**
 * 그리드 선택된셀은 full Text를 아니면 눈에보기쉬운 텍스트로 보여준다.
 * @param  grd          : grid name
 * @param  nCell        : cell
 * @param  nRow         : currow
 * @param  sText        : Text
 * @param  nLength      : 보여줄 텍스트의 수

 * @return String
*/
prForm.smfGridCellEasyOnEyesText = function(grd, nCell, nRow, sText, nLength){
	if(grd.currentcell != nCell) return this.smfEasyOnEyesText(sText, nLength);
	if(grd.currentrow != nRow) return this.smfEasyOnEyesText(sText, nLength);

	return this.smfStr(sText);
};


/**
 * (팝업만 사용)컴포넌트들의 간격을 왼쪽정렬한다.
 * 중간에 visible false된 컴포넌트들의 간격을 자동으로 조절해준다.
 * @param  aryComp : array of component
 * @param  sAlign : (Default "right") 왼쪽, 오른쪽 정렬
 * @exsample
	Button00.visible = true;
	Button01.visible = false;
	Button02.visible = true;
	smfAlignComponents([Button00, Button01, Button02]); //Button01.visible이 안보이고 그 자리에 Button00이 오게 됨.

 * @return void
*/
prForm.smfLeftAlignComponents = function(aryComp){
	var nSpace = 0;

	if(this.isNil(aryComp[0].nSpace)){
		for(var i=aryComp.length-1; i>=0; i--){
			aryComp[i]._AbsLeftPositionX = aryComp[i].getOffsetLeft();
		}

		nSpace = aryComp[1].getOffsetLeft() - (aryComp[0].getOffsetLeft() + aryComp[0].getOffsetWidth());
		aryComp[0].nSpace = nSpace;
	}else{
		nSpace = aryComp[0].nSpace;
	}

	for(var i=aryComp.length-1; i>=0; i--){
		aryComp[i].setOffsetLeft(aryComp[i]._AbsLeftPositionX);
	}

	var fncMove = function(oPivot){
		for(var i=aryComp.length-1; i>=0; i--){
			if(oPivot == aryComp[i]) return;

			aryComp[i].getOffsetLeft() -= oPivot.getOffsetWidth() + nSpace;
		}
	}

	for(var i=0,size=aryComp.length; i<size; i++){
		var comp = aryComp[i];
		if(! comp.visible){
			fncMove(comp);
		}
	}
};

/**
 * (POPUP만 사용)컴포넌트들의 간격을 오른쪽정렬한다.
 * 중간에 visible false된 컴포넌트들의 간격을 자동으로 조절해준다.
 * @param  aryComp : array of component
 * @param  sAlign : (Default "right") 왼쪽, 오른쪽 정렬
 * @exsample
	Button00.visible = true;
	Button01.visible = false;
	Button02.visible = true;
	smfAlignComponents([Button00, Button01, Button02]); //Button01.visible이 안보이고 그 자리에 Button00이 오게 됨.

 * @return void
*/
prForm.smfRightAlignComponents = function(aryComp){
	var nSpace = 0;

	if(this.isNil(aryComp[0].nSpace)){
		for(var i=0,size=aryComp.length; i<size; i++){
			aryComp[i]._AbsRightPositionX = aryComp[i].getOffsetLeft();
		}

		nSpace = aryComp[1].getOffsetLeft() - (aryComp[0].getOffsetLeft() + aryComp[0].getOffsetWidth());
		aryComp[0].nSpace = nSpace;
	}else{
		nSpace = aryComp[0].nSpace;
	}

	for(var i=0,size=aryComp.length; i<size; i++){
		aryComp[i].setOffsetLeft(aryComp[i]._AbsRightPositionX);
	}

	var fncMove = function(oPivot){
		for(var i=0,size=aryComp.length; i<size; i++){
			if(oPivot == aryComp[i]) return;

			aryComp[i].setOffsetLeft(oPivot.getOffsetWidth() + nSpace);
		}
	}

	for(var i=aryComp.length-1; i>=0; i--){
		var comp = aryComp[i];
		if(! comp.visible){
			fncMove(comp);
		}
	}
};

/**
 * (검증안됨사용안함)resize safe하게 Div나 Tabpage의 url을 변경한다.
 *
 * @param  oDivOrTabpage : div나 tabpage
 * @param  sUrl          : url
 * @param  bClearUrl     : url을 비우고 세팅할지
 * @exsample
	smfLoadDiv(divManage, "sw.com.title:test.xfdl");

 * @return void
*/
prForm.smfLoadDiv = function(oDivOrTabpage, sUrl, bClearUrl){
	this.smfBeginResize(oDivOrTabpage);
	if(bClearUrl){
		oDivOrTabpage.set_url("");
	}

	oDivOrTabpage.set_url(sUrl);
};

/**
 * (검증안됨사용안함)사용자가 호출하는 리사이즈를 위한  초기화작업
 *
 * @return sizes
*/
prForm.smfBeginResize = function(divOrTabpage){
	if(! this.smfBeginResizeprototypeframePosition){
		this.smfBeginResizeprototypeframePosition = {};
	}
	this.smfBeginResizeprototypeframePosition[divOrTabpage] = this.getOwnerFrame().position+"";
	this.getOwnerFrame().setOffsetWidth(831);
	this.getOwnerFrame().setOffsetHeight(553);
};


/**
 * (검증안됨사용안함)사용자가 호출하는 리사이즈를 위한 종료작업
 *
 * @return sizes
*/
prForm.smfEndResize = function(divOrTabpage){
	if(! this.smfBeginResizeprototypeframePosition){
		this.smfBeginResizeprototypeframePosition = {};
	}

	var oldPosition = this.smfBeginResizeprototypeframePosition[divOrTabpage];
	if(oldPosition != undefined || oldPosition != null){
		this.getOwnerFrame().position = oldPosition + "";
	}
};


/**
 * 폼을 강제로 닫는다. cancloseevent 발생안함.
 *
 * @return void
*/
prForm.smfForceCloseForm = function(form){
	try{
		for(var i=form.onbeforeclose.length-1; i>=0; i--){
			var sOnBeforeCloseHandlerName = this.smfFuncName(form.getEventHandler('onbeforeclose' ,i));
			if(sOnBeforeCloseHandlerName != "fnDeleteTabpage"){
				form.removeEventHandler('onbeforeclose' ,i, this);
			}
		}
	}catch(e){
		this.trace(this.format("smfForceCloseForm error [{0}] message [{1}]", [e.message, form.smfFormPageId(form)]));
		form.set_enableevent(false);
	}finally{
		form.close();
	}
};

/**
 * 시스템날짜를 가져온다
 *
 * @return
*/
prForm.smfSysDate = function(){
	
};

/**
 * (사용안함)
 *
 * @return dateString(yyyymmdd)
*/
prForm.smfSysDateTime = function(){

};


/**
 * value가 not null일 경우에만 value를 감싼다.
 *
 * @param  left  : 왼쪽 감쌀 값
 * @param  value : value
 * @param  right : 오른쪽 감쌀 값
 * @exsample     : wrap('(', dsMain.getColumn(dsMain.rowposition, "value") , ')') //dsMain.value가 not null일 경우에만 ( )로 감싸진다.
                   -> value is not null -> "(columnvalue)"
                   -> value is null -> ""

 * @return value
*/
prForm.wrap = function(left, value, right){
	if(this.isNil(value)) return "";

	return this.smfStr(left) + value + this.smfStr(right);
};

/**
 * ds에서 aryColumns 컬럼으로 distinct 한다.
 * 중복 로우는 deleteRow한다
 *
 * @param  ds  : Dataset
 * @param  aryColumns : column array -> ['column1', 'column2']
 * @param  bPermanentDeletes : 영구적삭제. 삭제된 로우를 완전히 제거한다. (deletedRow 히스토리에도 제거)
                               *  distinct로 인한 deleterow이외에 이전에 삭제된 row도 대상이다
 * @exsample   : smfDistinct(dsMain, ['ay', 'sem']);

 * @return value
*/
prForm.smfDistinct = function(ds, aryColumns, bPermanentDeletes){
	bPermanentDeletes = this.nvl(bPermanentDeletes, true);
	

	var enableevent = ds.enableevent;
	ds.set_enableevent(false);
	try{
		
		var context = this;
		var fncColumnValues = function(nCrruentRow){
			var sColumnValues = "";
			for(var y=0,sizen=aryColumns.length; y<sizen; y++){
				sColumnValues += context.smfStr(ds.getColumn(nCrruentRow, aryColumns[y]));
			}
			return sColumnValues;
		}
		

		for(var i=0; i<ds.rowcount-1; i++){
			var sMainColumnValues = fncColumnValues(i);

			for(var n=ds.rowcount-1; n>i; n--){
				var sSubColumnValues = fncColumnValues(n);
				if(sMainColumnValues == sSubColumnValues){
					ds.deleteRow(n);
				}
			}
		}

		// 영구삭제를 위해
		if(bPermanentDeletes == true){
			// row의 rowType 보관한다
			var rowTypes = [];
			for(var i=0; i<ds.rowcount-1; i++){
				rowTypes.push(ds.getRowType(i));
			}
			
			// 삭제된 로우를 모두 제거
			ds.applyChange();			
			var updatecontrol = ds.updatecontrol;
			try{
				ds.set_updatecontrol(false);
				// 보관한 rowType을 복원
				for(var i=0; i<ds.rowcount-1; i++){
					ds.setRowType(i, rowTypes[i]);
				}
			} catch(e)
			{
				trace("처리중 에러가발생했습니다.");
			}finally{
				ds.set_updatecontrol(updatecontrol);
			}
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		ds.set_enableevent(enableevent);
	}
	return ds;
};

/**
 * 컴포넌트의 절대X,Y를 구한다.
 *
 * @param  obj      :
 * @return x,y
*/
prForm.smfAbsXy = function(obj){
	var result = {
		x : 0,
		y : 0
	};
	do{
		result.setOffsetLeft(obj.getOffsetLeft());
		result.setOffsetTop(obj.getOffsetRight());
	}while(obj != this && (obj = obj.parent) != this);

	return result;
};

/**
 * div를 팝업처럼 띄운다.
 *
 * @param  sender      : 트랙팝업을 띄우기위해 클릭된 Button
 * @param  div         : 팝업처럼 띄울 DIV
 * @param  closeButton : 팝업을 닫을 버튼
 * @exsample           : smfTrackPopupDiv(obj, divPopResult, divPopResult.btnClose);
 * @return value
*/
prForm.smfTrackPopupDiv = function(sender, div, closeButton){
	var trackDiv = div;

	var x = 0;
	var y = 0;
	if(this == sender){
		x = (sender.getOffsetWidth() / 2) - (div.getOffsetWidth() / 2);
		y = (sender.getOffsetHeight() / 2) - (div.getOffsetHeight() / 2);
	}else{
		var absXy = this.smfAbsXy(sender);
		x = (absXy.getOffsetLeft() ) + (sender.getOffsetWidth() / 2) ;
		y = (absXy.getOffsetRight() ) + (sender.getOffsetHeight() / 2) ;
	}
	trackDiv.setOffsetLeft(x);
	trackDiv.setOffsetTop(y);

	div.onkillfocus.clear();
	div.addEventHandler('onkillfocus' ,function (obj,e){trackDiv.set_visible(false);
	}, this);

	if(closeButton != null){
		closeButton.onclick.clear();
		closeButton.addEventHandler('onclick' ,function (obj,e){trackDiv.set_visible(false);
		}, this);
	}

	div.set_visible(true);
	div.setFocus();
	div.bringToFront();
};

/**
 * div를 다이얼로그처럼 띄운다.
 *
 * @param  sender      : 트랙다이얼로그를 띄우기위해 클릭된 Button
 * @param  div         : 다이얼로그처럼 띄울 DIV
 * @param  closeButton : 다이얼로그을 닫을 버튼
 * @exsample           : smfTrackDialogDiv(obj, divPopResult, divPopResult.btnClose);
 * @return value
*/
prForm.smfTrackDialogDiv = function(sender, div, closeButton){
	var thisForm = this;
	var trackDiv = div;

	//
	var whiteGuarder = new Div("__smfTrackDialogDiv__" + div.name);
	whiteGuarder.position = thisForm.position+"";
	whiteGuarder.setOffsetRight(9999);
	whiteGuarder.setOffsetBottom(9999);
	thisForm.addChild(whiteGuarder.name, whiteGuarder);
	whiteGuarder.set_background("transparent");
	whiteGuarder.show();

	var x = 0;
	var y = 0;
	if(this == sender){
		x = (sender.getOffsetWidth() / 2) - (div.getOffsetWidth() / 2);
		y = (sender.getOffsetHeight() / 2) - (div.getOffsetHeight() / 2);
	}else{
		var absXy = this.smfAbsXy(sender);
		x = (absXy.getOffsetLeft() ) + (sender.getOffsetWidth() / 2) ;
		y = (absXy.getOffsetRight() ) + (sender.getOffsetHeight() / 2) ;
	}

	trackDiv.setOffsetLeft(x);
	trackDiv.setOffsetTop(y);

	//closeButton.onclick.clear();
	closeButton.addEventHandler('onclick' ,function (obj,e){trackDiv.set_visible(false);whiteGuarder.setOffsetLeft(100000);
		thisForm.removeChild(whiteGuarder.name);
		whiteGuarder.destroy();
		whiteGuarder = null;

		
		thisForm.onbeforeclose.clear();
		for(var i=0,size=thisForm.useronbeforeclose.length; i<size; i++){thisForm.addEventHandler('onbeforeclose' ,thisForm.useronbeforeclose[i], this);
		}

		this.updateWindow();
	}, this);

	//beforeclose이벤트를 저장해놓는다.
	this.useronbeforeclose = [];
	for(var i=0,size=onbeforeclose.length; i<size; i++){
		var eventHanlder = this.getEventHandler('onbeforeclose' ,i);
		this.useronbeforeclose.push(eventHanlder);
	}
	this.onbeforeclose.clear();
	this.addEventHandler('onbeforeclose' ,function (obj, e){
		return false; 
	}, this);

	div.set_visible(true);
	div.setFocus();
	div.bringToFront();
};


/**
 * (사용안함)
 * 타이머이벤트를 발생시킨다.
 *
 * @param  nElapse     : 발생할 시간 1000 : 1초
 * @param  jParams     : 넘길파라메터
 * @param  fncHandler  : 핸들러
 * @exsample           : 	smfHandleTimer(500, {step:1}, function(jParams){
								Button00.text = jParams.step;
								if(jParams.step == 4){
									jParams.finished = true;
									alert_opacity("끝");
								}
								jParams.step++;
							});
 * @return value
*/
prForm.smfHandleTimer = function(nElapse, jParams, fncHandler){
	if(this.isNil(jParams)){
		jParams = {};
	}

	var nTimerID = 0513; //
	this.ontimer.clear();
	this.addEventHandler('ontimer' ,this.smfTimerHandler, this);
	if(! this.smvTimerHandlerprototype){
		this.smvTimerHandlerprototype = {};
	}
	this.smvTimerHandlerprototype.handler = fncHandler;
	this.smvTimerHandlerprototype.jParams = jParams;

	this.setTimer(nTimerID, nElapse);
};

/**
 * (사용안함)
 * (공통만 사용)smfHandleTimer함수의 내부함수
 *
*/
prForm.smfTimerHandler = function(obj, e){
	if(! this.smvTimerHandlerprototype){
		this.smvTimerHandlerprototype = {};
	}

	var jParams = this.smvTimerHandlerprototype.jParams;
	if(jParams.finished == true){
		this.killTimer(e.timerid);
		this.smvTimerHandlerprototype.jParams = {};
		this.smvTimerHandlerprototype.handler = null;
		return;
	}
	this.smvTimerHandlerprototype.handler(jParams);
};

/**
 * 조건에 해당하는 ROW index array를 리턴한다
 *
 * @param  ds : Dataset
 * @param  nRow : Integer
 * @param  aryColumn  : 컬럼리스트

 * @return boolean (중복일경우 true)
 * @see    var aryRows = smfMatchedRows(dsMain, dsMain.rowposition, ["ay","dghtCrseScCode"]);
 */
prForm.smfMatchedRows = function(ds, nRow, aryColumns){
	var result = [];

	//findrow할 expr 생성
	var sSearchText = "1 == 1 ";
	for(var n=0,size2=aryColumn.length; n<size2; n++){
		sSearchText += "&& smfStr(" + aryColumn[n] + ") == '" + this.smfStr(ds.getColumn(nRow, aryColumn[n])) + "'";
	}

	var nFindRow = -1;
	while(true){
		nFindRow = dsBase.findRowExpr(sSearchText, nFindRow+1);
		if(nFindRow == -1) break;

		result.push(nFindRow);
	}

	return result;
};


/**
 * Dataset의 데이터를 csv로 변환한다.
 *
 * @param  ds : Dataset
 * @param  aryColumns : ["column1", "column2", "column3"];
 * @param  VirtualFile

 * @return boolean (중복일경우 true)
 * @see    var file = (new FileDailog).open("타이틀을 입력하세요", FileDialog.SAVE);
 *         smfDatasetToCsv(dsMain, ["schulCode", "stdntPNo", "classCode"], file);
 */
prForm.smfDatasetToCsv = function(ds  , aryColumns, fileStream){
	for(var n=0,sizen=ds.rowcount; n<sizen; n++){
		var lineText = "";
		for(var i=0,size=aryColumsn.length; i<size; i++){
			lineText += "," + this.smfStr(ds.getColumn(n, aryColumsn[i]));
		}
		lineText = lineText.substr(1) + "\n";
		/* [X-LOG] write은 지원되지 않는 메서드입니다.*/ fileStream.write(lineText);

		if((n % 50) == 0) /* [X-LOG] updateWindow은 지원되지 않는 메서드입니다.*/ this.updateWindow();
	}
};

/**
 * 해당폼의 핫키를 보여준다
 *
 * @return void
 * @see    smfToggleDiaplayHotKey()
 */
prForm.smfToggleDiaplayHotKey = function()
{
	var self = this;
	var aryNoHotkeys = [];
	this.smfTravelComponents(this, function (oComp, fnc, nLvl){
			if(!(oComp instanceof nexacro.Button)) return;

			if(this.isNil(oComp.oldtext)){
				oComp.oldtext = oComp.text;
			}

			if(oComp.hotkey == oComp.text){
				oComp.set_text(oComp.oldtext);
			}else{
				if(self.isNil(oComp.hotkey)){
					aryNoHotkeys.push(self.smfFullId(oComp) + ", " + oComp.text);
				}else{
					oComp.set_text(self.nvl(oComp.hotkey, ""));
				}
			}
        }, false
	);

	if(aryNoHotkeys.length > 0){
		this.smfLiteralAlert("핫키없는것들..\n" + aryNoHotkeys.join("\n"));
	}
};

prForm.smfDisplayAccessibility = function(){
	var self = this;
	var aryNoAccessibilities= [];
	var nCount = 0;
	this.smfTravelComponents(this, function (oComp, fnc, nLvl){
			if(oComp instanceof nexacro.Div) return;
			if(oComp instanceof nexacro.Static) return;
			if(oComp instanceof nexacro.Tab) return;

			if(this.isNil(oComp.oldcolor)) oComp.background.color;

			if(oComp.background.color == "yellowgreen"){
				oComp.background.set_color(oComp.oldcolor);
				return;
			}

			if(/* [X-LOG] accessibility은 지원되지 않는 속성입니다.*/ this.isNil(oComp.accessibility)){
				oComp.background.set_color("yellowgreen");

				if(oComp instanceof nexacro.Edit || oComp instanceof nexacro.MaskEdit || oComp instanceof nexacro.TextArea){
					aryNoAccessibilities.push((oComp) + " " + self.smfFullId(oComp));
				}else{
					aryNoAccessibilities.push((oComp) + " " + self.smfFullId(oComp) + ", " + oComp.text);
				}
			}
        }, false
	);

	if(aryNoAccessibilities.length > 0){
		this.trace("웹접근성 속성없는것들은 녹색으로 표시했습니다..\n" + aryNoAccessibilities.join("\n"));
		this.smfLiteralAlert("웹접근성 속성없는것들은 녹색으로 표시했습니다..\n" + aryNoAccessibilities.join("\n"));
	}

	/* [X-LOG] redraw은 지원되지 않는 메서드입니다.*/ this.redraw();
	/* [X-LOG] updateWindow은 지원되지 않는 메서드입니다.*/ this.updateWindow();
};

prForm.smfValidTabOrderParents = function(parentComponent){
	var parents = [];
	this.smfTravelComponents(parentComponent,
		function(oComp, nLvl, oOwner){
			if(oComp instanceof nexacro.Div){
				parents.push(oComp);
			}
		}
		,
		false
	);
};

prForm.smfValidTabOrder = function(parentComponent){
	var prevControl = null;
	var prevX = -99999;
	var prevY = -99999;

	var aryTaborderList = [];
	var arySortedControls = this.smfSortByTabOrder.call(this, parentComponent, null, true);
	for(var i in arySortedControls){
		var control = arySortedControls[i];

		//왼쪽에서 오른쪽으로
		if(i != 0){
			if((control.getOffsetLeft() >= prevX) ||
			   (prevY != -99999 && this.between(prevY, control.getOffsetRight()-10, control.getOffsetRight()+10))){
			}else{
				this.smfLiteralAlert("X:" + this.smfFullId(prevControl) + prevControl.text + " " + prevControl.text + ", " + this.smfFullId(control) + " " + control.text);
			}
		}

// 		//위에서 아래로
// 		if(prevY != -99999 && ! between(prevY, control.position.y-10, control.position.y+10)){
// 			alert_opacity("Y:" + smfFullId(prevControl) + " " + prevControl.text + ", " + smfFullId(control) + " " + control.name);
// 		}

		prevControl = control;
		prevX = control.getOffsetLeft();
		prevY = control.getOffsetRight();
	}

	//탭오더 중복 체크
	for(var i in arySortedControls){
		var control = arySortedControls[i];

		if(aryTaborderList[control.taborder] == undefined){
			aryTaborderList[control.taborder] = [];
		}
		aryTaborderList[control.taborder].push(control);
	}

	var dupTaborderMessages = "";
	for(var i in aryTaborderList){
		if(aryTaborderList[i].length > 1){
			dupTaborderMessages += "\n";
			for(var n in aryTaborderList[i]){
				aryTaborderList[i][n].set_background("coral stretch 5,5");
				dupTaborderMessages += this.smfFullId(aryTaborderList[i][n]) + ":" + aryTaborderList[i][n].text + ",";
			}
		}
	}
	if(dupTaborderMessages != ""){
		this.smfDevException("탭오더가 중복됩니다\n"  + dupTaborderMessages);
	}
};

/**
 * 데이터 단위를 변환한다.
 *
 *
 * @param  size:Number 데이터사이즈
 * @param  fromUnit:String 원본데이터사이즈의 단위
 * @param  toUnit:String 변환할데이터사이즈의 단위

 * @return 변환된 사이즈
 * @see     alert_opacity("byte to kb = " + smfConvertDataSize(1024*1024, "byte", "kb") + "kb"); << 1024kb
 *          alert_opacity("byte to mb = " + smfConvertDataSize(1024*1024, "byte", "mb") + "mb"); << 1mb

			alert_opacity("kb to byte = " + smfConvertDataSize(1024, "kb", "byte") + "byte"); << 1048576byte
			alert_opacity("kb to mb = " + smfConvertDataSize(1024, "kb", "mb") + "mb"); << 1mb

			alert_opacity("mb to byte = " + smfConvertDataSize(1, "mb", "byte") + "byte"); << 1048576byte
			alert_opacity("mb to kb = " + smfConvertDataSize(1, "mb", "kb") + "kb"); << 1024kb

 */
prForm.smfConvertDataSize = function(size,fromUnit,toUnit){
	fromUnit = this.smfStr(fromUnit).toLowerCase();
	if(this.notIn(fromUnit, ["byte", "kb", "mb"])){
		var message = this.format("단위(fromUnit)은 {0},{1},{2}만 사용 가능합니다.", ["byte", "kb", "mb"]);
		this.smfDevException(message);
		return -1;
	}
	toUnit = this.smfStr(toUnit).toLowerCase();
	if(this.notIn(toUnit, ["byte", "kb", "mb"])){
		var message = this.format("단위(toUnit)은 {0},{1},{2}만 사용 가능합니다.", ["byte", "kb", "mb"]);
		this.smfDevException(message);
		return -1;
	}

	if(size == 0) return size;
	if(fromUnit == toUnit) return size;

	var kbSize = 1024;
	var mbSize = 1024;

	switch(fromUnit){
		case "byte":
			if(toUnit == "kb"){
				return size / kbSize;
			}else if(toUnit == "mb"){
				return size / kbSize / mbSize;
			}
			break;

		case "kb":
			if(toUnit == "byte"){
				return size * kbSize;
			}else if(toUnit == "mb"){
				return size / mbSize;
			}
			break;

		case "mb":
			if(toUnit == "byte"){
				return size * kbSize * mbSize;
			}else if(toUnit == "kb"){
				return size * mbSize;
			}
			break;
	}
};

/**
 * lpad를 수행한다
 *
 *
 * @param  text 대상 문자열
 * @param  fill 채울문자
 * @param  count lpad를 수행할 기준 갯수

 * @return 문자열
 * @see     this.lpad("1", "0", 3) // 003
 */
prForm.lpad = function(text,fill,count){
	if(count < 0) return text;

	text = this.smfStr(text);
	for(var i=0,size=count-text.length; i<size; i++){
		text = fill + text;
	}

	return text;
};


/**
 * rpad를 수행한다
 *
 *
 * @param  text 대상 문자열
 * @param  fill 채울문자
 * @param  count rpad를 수행할 기준 갯수

 * @return 문자열
 * @see     this.lpad("1", "0", 3) // 300
 */
prForm.rpad = function(text,fill,count){
	if(count < 0) return text;

	text = this.smfStr(text);
	for(var i=0,size=count-text.length; i<size; i++){
		text = text + fill;
	}

	return text;
};

/**
 * 바이러스체크를 준비
 *
 * @param  filename
 */
prForm.smfPreparedDetectVirus = function(filename){
	return true;
};


/**
 * 바이러스체크
 *
 * @param  filename
 */
prForm.smfExecuteDetectVirus = function(filename){
	return 0;
};


prForm.smfIsPopup = function(){
	var parentForm = this.smfParentForm(this);

	return this.isNotNil(parentForm.opener);
};


/**
 * 키보드보안 이벤트를 설정한다
 *
 * @param  filename
 */
prForm.smfAttachKeyboardSecurityEventOnSetFocus = function(form){
	var self = this;
	//if(smfIsProductMode()) return; //운영에선 아직 실행하지 않음.
	//포탈에서는 frm_top이 없기때문에 못함.

	if(this.smfIsPortal()) return;
	//컴포넌트에 activesecurity=true가 설정된 경우만 이벤트를 설치함.
	this.smfTravelComponents(form, function (component, fnc, nLvl){
		if(component.activesecurity == "false") return;

		var componentmask = self.smfStr(component.format);
		if(component.activesecurity == "true" ||
		   component.password == true ||  //패스워드

		   //주민번호
		   (self.isNotNil(componentmask) && (componentmask == "########-#######" ||
		                                componentmask == "#######{######}"  ||
		                                componentmask == "######'-'#######" ||
		                                componentmask == "######-#"         ||
		                                componentmask == "######-######"    ||
		                                componentmask == "######-#######"   ||
		                                componentmask == "######-#'******'" ||
		                                componentmask == "######-#******"   ||
		                                componentmask == "######-#{######}" ||
		                                componentmask == "######-'*******'" ||
		                                componentmask == "######-*******"   ||
		                                componentmask == "######-@@@@@@@"   ||
		                                componentmask == "######-{#######}" ||
		                                componentmask == "######{#######}"  ||
		                                componentmask == "999999-9'******'" ||
		                                componentmask == "999999-9999999"   ||
		                                componentmask == "@@@@@@ - @@@@@@@" ||
		                                componentmask == "@@@@@@-*******"   ||
		                                componentmask == "@@@@@@-@@@@@@@"   ||
		                                componentmask == "@@@@@@-@@@@@@@ "  ||
		                                componentmask == "@@@@@@-{@@@@@@@}"))
		){
			if(! self.smfIsProductMode()){
// 				/* [X-LOG] width은 지원되지 않는 속성입니다.*/ component.border.width = "1";
// 				component.border.set_style("solid");
// 				/* [X-LOG] color은 지원되지 않는 속성입니다.*/ component.border.color = "darkorchid";
			}

			if(component.findEventHandler('onsetfocus' ,self.smfEnableKeyboardSecurity, this) == -1){
				component.onsetfocus.insertHandler(0, self.smfEnableKeyboardSecurity);
			}
			if(component.findEventHandler('onkillfocus' ,self.smfDisableKeyboardSecurity, this) == -1){
				component.onkillfocus.insertHandler(0, self.smfDisableKeyboardSecurity);
			}
		}
	});
};




/**
 * 현재 컬럼사이즈로 사이즈를 고정한다.
 *
 * @param boolean
 * @return void
 */
prForm.smfFixedColumnSize = function(obj, e){
	var grdEnableevent = this.nvl(obj.enableevent, true);
	obj.set_enableevent(false);
	obj._userdefinecolsize = true;
	try{
		var arySize = [];
		for(var i=0,size=obj.getCellCount("head"); i<size; i++){
			var nSize = obj.getRealColSize(i);
			arySize.push(nSize);
		}

		if(this.isNil(obj._originColumnSize)){
			obj._originColumnSize = arySize;
		}

		obj.set_autosizingtype("");
		obj.set_autofittype("");

		for(var i=0,size=obj.getCellCount("head"); i<size; i++){
			var nSize = arySize[i];
			obj.setRealColSize(i, nSize);
			obj.setCellProperty("head", i, "size", nSize);
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		obj.set_enableevent(grdEnableevent);
	}
};


/**
 * 그리드의 컬럼사이즈를 Cell Text에 알맞게 자동 조절한다
 *
 * @param gridOrForm 그리드나 폼
 * @return void
 */
prForm.smfAutoFitGridColumns = function(grd, e){
	if(grd._userdefinecolsize == true) return;
	var grdEnableevent = this.nvl(grd.enableevent, true);
	grd.set_enableevent(false);
	try{
		if(grd.autosizingtype != "none"){
			grd.set_autosizingtype("");
			grd.set_autofittype("");
		}

		var ds = this.smfFindComponentInThisContext(grd.binddataset);

		var nStartRow = e.pos;
		if(this.isNil(nStartRow)){
			nStartRow = Math.max(0, ds.rowposition);
		}
		var nLastRow = Math.min(ds.rowcount, nStartRow+20);

		for(var i=0,size=grd.getCellCount("head"); i<size; i++){
			var nMaxWidth = grd.getRealColSize(i);

			for(var n=nStartRow,sizen=nLastRow; n<sizen; n++){
				var cellText = this.smfStr(grd.getCellText(n, i));

				// 멀티라인의 경우 가장 긴 라인을 찾는다
				if(cellText.indexOf("\n") != -1){
					var splitedText = cellText.split("\n");
					var maxLengthText = "";
					for(var j=0,sizej=splitedText.length; j<sizej; j++){
						if(maxLengthText.length < this.smfStr(splitedText[j]).length){
							maxLengthText = this.smfStr(splitedText[j]);
						}
					}
					cellText = splitedText;
				}

				var nWidth = this.smfGetTextSize(grd, cellText, grd.getCellProperty("body", i, 'font').size) + 20;
				nMaxWidth = Math.max(nMaxWidth, nWidth);
			}

			if(nMaxWidth > grd.getRealColSize(i)){
				grd.setRealColSize(i, nMaxWidth);
				grd.setCellProperty("head", i, "size", nMaxWidth);
			}
		}
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		grd.set_enableevent(grdEnableevent);
	}
};


/**
 * 그리드의 컬럼 사이즈조절 기본설정을 세팅한다
 *
 * @param gridOrForm 그리드나 폼
 * @return void
 */
prForm.smfDefaultConfigureGridColumnSize = function(gridOrForm){
	var aryGrid = [];
	if(gridOrForm instanceof nexacro.Grid){
		aryGrid.push(gridOrForm);
	}else{
		//form의 모든 그리드를 찾는다.
		this.smfTravelComponents(gridOrForm, function (comp, fncCallback, nLvl){
			if(comp instanceof nexacro.Grid){
				aryGrid.push(comp);
			}
		});
	}
  
	for(var i=0,size=aryGrid.length; i<size; i++){
		var grd = aryGrid[i];
		if(grd._DefaultConfigureGridColumnSize == true) continue;
		grd._DefaultConfigureGridColumnSize = true;


		grd.oncolresized.clear();
		//현재 컬럼사이즈로 길이를 고정
		grd.addEventHandler('oncolresized' ,this.smfFixedColumnSize, this);
 

		for(var n=0,sizen=grd.onvscroll.length; n<sizen; n++){
			var handler = grd.getEventHandler('onvscroll');
			var handlerName = this.smfFuncName(handler);
			if(handlerName == "smfAutoFitGridColumns"){
				return;
			}
		}

		grd.addEventHandler('onvscroll' ,this.smfAutoFitGridColumns, this);
	}
};

prForm.smfPrintStackTrace = function(){
	return this.astfGetCallerFunctionNameList(true);
};

/**
 * 기관의 연간공휴일 일정을 조회, 달력 컴포넌트에 공휴일을 설정한다.
 *
 * @param
 * @return void
 */
prForm.smfLoadGdsCal = function(){
	return;
	if (nexacro.getApplication().gdsCal.rowcount != 0) return;

	//Dataset을 이름으로 찾는다. 없으면 생성
	var dsSyeSyeCm00M00SVO = this.smfGetOrCreateDataset('dsSyeSyeCm00M00SVO');

	if (this.isNil(dsSyeSyeCm00M00SVO.getColumnInfo("insttCode"))) {
		dsSyeSyeCm00M00SVO.addColumn("insttCode", "string");
		dsSyeSyeCm00M00SVO.addColumn("insttFxYr", "string");

		dsSyeSyeCm00M00SVO.addRow();
		var insttCode = this.smfGetSession("conctAtptOrgCode");

		dsSyeSyeCm00M00SVO.setColumn(0, "insttCode", insttCode);
		dsSyeSyeCm00M00SVO.setColumn(0, "insttFxYr", this.smfToday().substring(0, 4));
	}

	var _dsCal = this.smfGetOrCreateDataset('_dsCal');

	//동적서비스를 호출한다.
	this.smfDService({
		id              : "selectDsCal"
	  , url             : "svc_neis::/sye_sye_cm00_002.xp"
	  , inDatasets      : dsSyeSyeCm00M00SVO.name
	  , outDatasets     : _dsCal.name + "=dsSyeSyeCm00M00SVO_selectGdsCalList"
	  , asynctp         : false
	  , innerCallback   : ""
	  , bindingControls : ""
	});

	nexacro.getApplication().gdsCal.appendData(_dsCal, true);
};

/**
 * 내부에서만 사용

 * 환경설정모듈
 */
prForm.smfEnvironment = function(){
	return this.smfGetTopForm().div_compEnviroment;
};



prForm.smfIsEmptyObject = function(jsonObject){
	if(this.isNil(jsonObject)) return true;
	
	for(var i in jsonObject){
		return false;
	}	
	return true;
};



prForm.smfAfterValidationResult = function(svcid, errcd, errmsg, validationResultJsonString){
	if(this.isNil(this.smfStr(validationResultJsonString).trim())) return;
		
	var validationResultObject = JSON.parse(validationResultJsonString);
	
	if(this.smfIsEmptyObject(validationResultObject)) return;
	
	/*
{
  "message" : "5자리로 입력하세요",
  "properties" : { },
  "form" : {
    "fondScCode" : {
      "propertyName" : "fondScCode",
      "ruleName" : "length",
      "arguments" : {
        "minLength" : 5,
        "maxLength" : 100
      },
      "value" : "dddd"
    }
  },

  "list" : { 
	"0": {
		"fondScCode" : {
		  "propertyName" : "fondScCode",
		  "ruleName" : "length",
		  "arguments" : {
			"minLength" : 5,
			"maxLength" : 100
		  },
	},
  }
}
	*/ 
	//메시지가 있으면 우선 메시지 출력
	var message = validationResultObject.message;
	if(this.isNotNil(message)){
		this.smfLiteralAlert(message);
		return;
	}

	if(! this.smfIsEmptyObject(validationResultObject.form)){
		this.smfAfterValidationResultForForm(svcid, errcd, errmsg, validationResultObject.form);
		return;
	}else if(! this.smfIsEmptyObject(validationResultObject.list)){
		this.smfAfterValidationResultForList(svcid, errcd, errmsg, validationResultObject.list);
		return;
	}
};

/**
 * 구분자 레이블인지 확인
 * 날짜 시작/종료 컴포넌트인 경우 ~로 구분자 레이블을 사용하는 경우가 있는데 
 * 이런 레이블인지 검증
 */
prForm.smfIsSeparatorLabelText = function(labelText){
	this.astfAssertParamValueIsStringType(labelText, "labelText");
	
	labelText = labelText.trim();
	
	return labelText == "~" || labelText == "-"|| labelText == "/";
};


/**
 * 컴포넌트의 레이블컴포넌트를 얻는다
 * 검색 순서 : 1. validate 프로퍼티에서 title과 동일한 value를 갖는 Static
                2. 동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
				3. 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
				   해당 후보 Static의 text프로퍼티가 비었으면(isEmpty) 다른 후보를 찾는다
 */
prForm.smfGetLabelComponentOf = function(component){
	this.astfAssertParamValueIsObjectType(component, 'component'); 


	var labelText = "";

	// 1. validate 표현식에서 검색
	var componentValidate = this.smfStr(component.validate);
	// 표현식을 Map(json같은 js 객체)로 변환
	var ruleMap = this.smfRuleExpressionToMap(componentValidate);
	if("title" in ruleMap){
		// 레이블에서 *제거(필수인 경우 *가 붙어있다)
		var titleText = this.smfRemoveAsteriskFromLabelText(this.smfStr(ruleMap["title"]));
		var theStatic = null;
		this.smfTravelComponents(component.parent, function (child, fnc, nLvl){
			if(child instanceof nexacro.Static){
				var staticText = this.smfRemoveAsteriskFromLabelText(child.text);
				
				if(titleText == staticText){
					theStatic = child;
					// travel 중지
					return false;
				}				
			}
		});
		
		if(theStatic != null){
			return theStatic;
		}		
	}
	
	
	//  (신규추가로직) 자시자신의  refstaticcomponent 속성이 component의 name과 일치(동일 container에 소속한 Static 컴포넌트에서만 찾음)	
	var theStatic1 = null;
	if(component.refstaticcomponent)
	{
		theStatic1 = component.parent[component.refstaticcomponent];
		if(theStatic1) return theStatic1;
	}
	
	
	//  동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
	var theStatic = null;
	this.smfTravelComponents(component.parent, function (oComp, fnc, nLvl){
		if(this.isNil(oComp.refinputcomponent)) return;
		if(component.name != oComp.refinputcomponent) return;
		
		// label을 찾음
		theStatic = oComp;
		return false;
	});
	if(theStatic) return theStatic;
	
	
	// 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
	// 현재 컴포넌트의 이전 컴포넌트가 label이라면 그것을 label로 사용한다
	var components = this.smfSortByTabOrder(component.parent);
	for(var i=component.taborder; i>=0; i--){
		var comp = components[i];
		// 컴포넌트를 찾아서
		// 이전 taborder의 컴포넌트를 컴포넌트
		
		if(comp instanceof nexacro.Static){
			labelText = this.smfStr(this.nvl(comp.text, comp.value));
			// 라벨이 비었으면 패스
			if(this.isNil(labelText)) continue;
			// 구분자 레이블도 패스
			if(this.smfIsSeparatorLabelText(labelText)) continue;
			
			return comp;
		}
	}
	
	return null;
};


/**
 * 컴포넌트의 레이블을 얻는다
 * 검색 순서 : 1. validate 프로퍼티에서 title
                2. accessibilitylabel 프로퍼티
                3. 동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
				4. 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
				   해당 후보 Static의 text프로퍼티가 비었으면(isEmpty) 다른 후보를 찾는다
 */
prForm.smfGetLabelOf = function(component){
	this.astfAssertParamValueIsObjectType(component, 'component'); 

	var labelText = "";

	// 1. validate 표현식에서 검색
	if(this.smfContainsStr(component.validate, "title")){
		var rules = this.smfStr(component.validate).split(",");
		for(var i in rules){
			var rule = rules[i];
			if(this.smfStartsStr("title", rule)){
				//title:성명
				labelText = rule.split(":")[1];
				return this.smfRemoveAsteriskFromLabelText(labelText);
			}
		}
	}
	
	// 2. accessibilitylabel 프로퍼티
	if(this.isNotNil(component.accessibilitylabel)){
		labelText = this.smfStr(component.accessibilitylabel);
		return this.smfRemoveAsteriskFromLabelText(labelText);
	}
	
	//  (신규추가로직) 자시자신의  refstaticcomponent 속성이 component의 name과 일치(동일 container에 소속한 Static 컴포넌트에서만 찾음)	
	var theStatic1 = null;
	if(component.refstaticcomponent)
	{
		theStatic1 = component.parent[component.refstaticcomponent];
		// label을 찾음
		if(theStatic1) 
		{
			labelText = this.smfStr(this.nvl(theStatic1.value, theStatic1.text));
			return this.smfRemoveAsteriskFromLabelText(labelText);
		}
	}
	
	//  동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
	this.smfTravelComponents(component.parent, function (oComp, fnc, nLvl){
		if(this.isNil(oComp.refinputcomponent)) return;
		if(component.name != oComp.refinputcomponent) return;
		
		// label을 찾음
		labelText = this.smfStr(this.nvl(oComp.value, oComp.text));
		return false;
	});
	if(this.isNotNil(labelText)) return this.smfRemoveAsteriskFromLabelText(labelText);
	
	
	// 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
	// 현재 컴포넌트의 이전 컴포넌트가 label이라면 그것을 label로 사용한다
	var components = this.smfSortByTabOrder(component.parent);
	for(var i=component.taborder; i>=0; i--){
		var comp = components[i];
		// 컴포넌트를 찾아서
		// 이전 taborder의 컴포넌트를 컴포넌트
		
		if(comp instanceof nexacro.Static){
			labelText = this.smfStr(this.nvl(comp.text, comp.value));
			// 라벨이 비었으면 패스
			if(this.isNil(labelText)) continue;
			// 구분자 레이블도 패스
			if(this.smfIsSeparatorLabelText(labelText)) continue;

			return this.smfRemoveAsteriskFromLabelText(labelText);
		}
	}
	
	return "";
};

/**
 * 애스터리스크(*)를 레이블에서 추가한다
 */
prForm.smfAddAsteriskToLabelText = function(labelText){
	labelText = this.smfRemoveAsteriskFromLabelText(this.smfStr(labelText));
	
	return "*" + labelText;
};


/**
 * 애스터리스크(*)를 레이블에서 제거한다
 */
prForm.smfRemoveAsteriskFromLabelText = function(labelText){
	labelText = this.smfStr(labelText);
	
	if(labelText.charAt(0) == "*"){
		labelText = labelText.substring(1);
	}

	if(labelText.charAt(labelText.length-1) == "*"){
		labelText = labelText.substring(0, labelText.length-1);
	}
	
	return labelText;
};

/**
 * 레이블 컴포넌트의 필수여부에 따른 text를 지정한다
 * 필수명 맨앞에 *을 붙인다
 */
prForm.smfSetMarkLabelComponentWithAsterisk = function(labelComponent, bMark){
	this.astfAssertParamValueIsInputTypeComponentType(labelComponent, nexacro.Static, "labelComponent", "Static");
	this.astfAssertParamValueIsBooleanType(bMark, 'bMark');
	
	// 필수 레이블에 *을 붙일지 여부
	if(this.smvConfigurations.addRequiredLabelToAsterisk != true) return;
	
	var labelText = labelComponent.text;
	if(bMark == true){
		labelComponent.set_text(this.smfAddAsteriskToLabelText(labelText));
	}else{
		labelComponent.set_text(this.smfRemoveAsteriskFromLabelText(labelText));
	}
};



/**
 * 그리드의 columnName의 레이블을 얻는다
 * 검색 순서 : 1. validate 프로퍼티에서 title
                2. accessibilitylabel
                3. columnName을 이용한 grid의 헤더
 */
this.smfGetLabelOfGridColumn = function(grid, datasetOfGrid, validateExpression, columnName){
	this.astfAssertParamIsGridType(grid, 'grid'); 
	this.astfAssertParamValueIsDatasetType(datasetOfGrid, 'datasetOfGrid'); 
	this.astfAssertParamValueIsStringType(validateExpression, 'validateExpression'); 
	this.astfAssertParamValueIsStringType(columnName, 'columnName'); 

	var labelText = "";
	



	// 1. validate 프로퍼티에서 title
	if(this.smfContainsStr(validateExpression, "title")){
		var rules = this.smfStr(validateExpression).split(",");
		for(var i in rules){
			var rule = rules[i];
			if(this.smfStartsStr("title", rule)){
				//title:성명
				labelText = rule.split(":")[1];
				return this.smfRemoveAsteriskFromLabelText(labelText);
			}
		}
	}
	
	// grid column index를 얻는다
	var columnIndex = -1;
    for(var i=0,size=grid.getCellCount("body"); i<size; i++){
        var text = this.smfStr(grid.getCellProperty("body", i, "text"));
        if("bind:" + columnName == text){
            //title:성명
            columnIndex = i;
            break;
        }
    }	


	// 2. accessibilitylabel
	if(columnIndex != -1){
        labelText = grid.getCellProperty("body", columnIndex, "accessibilitylabel");
		if(this.isNotNil(labelText)){
			return this.smfRemoveAsteriskFromLabelText(labelText);
		}
	}
	
	

	// 3. 그리드에서 검색	
    for(var i=0,size=grid.getCellCount("body"); i<size; i++){
        var text = this.smfStr(grid.getCellProperty("body", i, "text"));
        if("bind:" + columnName == text){
            //title:성명
            labelText = grid.getCellProperty("head", i, "text");
            return this.smfRemoveAsteriskFromLabelText(labelText);
        }
    }	
	
	return "";
};

/**
 * 함수명을 얻어온다
 *
 * @param context
 * @param functionObjectOfContext
*/
prForm.smfGetFunctionNameInContext = function(functionObjectOfContext, context){
	this.astfAssertParamValueIsObjectType(functionObjectOfContext, 'functionObjectOfContext');

	if(this.isNil(context)) context = this;
	
	for(var i in this){
		if(this[i] == functionObjectOfContext){
			return i;
		}
	}
	
	return "";
};


/**
 * container에 포함된 모든 컴퍼넌트의 바인딩 정보를 얻어온다
 *
 * @param context
 * @param functionObjectOfContext
*/
prForm.smfGetBindingInfoOf = function(container, propName){
	this.astfAssertParamValueIsObjectType(container, 'container'); 

	var qualifiedContainerName = this.smfGetQualifiedName(container);

	var self = this;
	if(this.isNil(propName)) propName = "value";
	var binds = this.binds;

	var bindings = {};
	for(var i=0,size=this.binds.length; i<size; i++){
		var binditem = this.binds[i];
		if(binditem.propid != propName) continue;
		var compid = binditem.compid;
		if(this.isNil(compid)) continue;

		var component = this.smfEvil('this.' + binditem.compid);
		
		
		var propertyName = binditem.columnid;
		var dataset = this.smfEvil('this.' + binditem.datasetid);
		var component = this.smfEvil('this.' + binditem.compid);
		var columnid = binditem.columnid;

		if(this.isNil(dataset)) continue;
		if(this.isNil(component)) continue;
		
		// 컨테이너 명으로 시작해야 
		// 해당 컨테이너에 포함된 컴포넌트이다
		if(compid.indexOf(qualifiedContainerName) != 0) continue;
		
		
		var item = {
			propertyName : propertyName,
			dataset: dataset,
			columnName: columnid,
			qualifiedComponentName: binditem.compid,
			component : component
		};

		bindings[binditem.compid] = item;
		
	}
	
	var count = 0;
	var resultBinds = {};
	this.smfTravelComponents(this, function (oComp, fnc, nLvl){
		var componentName = self.smfGetQualifiedName(oComp);
		if(componentName in bindings){
			var item = bindings[componentName];
			resultBinds[item.columnName] = item;
			count++;
		}
		
	});
	
	return resultBinds;
};



/**
 * component는 년월 팝업을 띄울수 있도록 이벤트를 연결한다
 * @param component : 년월팝업을 연결할 컴포넌트
 */
prForm.smfBindYearMonthComponent = function(component){
	this.astfAssertParamValueIsObjectType(component, 'component');

	component.addEventHandler('onlbuttonup', this.smfYearMonthLButtonUpEvent, this);	
};

/**
 * (공통만사용)
 * 클릭시 년월팝업 띄우기
 *
 */
prForm.smfYearMonthLButtonUpEvent = function(obj, e){
	this.smfMonthCalendar(obj, e);
};



/**
 * emptyFunction
 *
 * @param  message : 메시지
 * @param  onOk : 확인버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfEmptyFunction = function(){
};



/**
 * 알림 메시지를 출력한다
 *
 * @param  message : 메시지
 * @param  onOk : 확인버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfAlerter = function(messageId, messageArguments, onOk){
	var self = this;
	var alerter = {
		context: self,
		message: '',
		messageId: messageId,
		messageArguments: messageArguments,

		onOk: onOk,
	};
	
	alerter.inneronOk = function(){
		var context = alerter.context;
		if(this.isNil(context)){
			context = self;
		}

		alerter.onOk.call(context);
	};
	alerter.internalCallback = null;
	
	if(this.isNil(alerter.onOk)) alerter.onOk = this.smfEmptyFunction;
	
	alerter.run = function(){
		if(self.isNotNil(alerter.message)){
			var message = alerter.message;
		}else{
			var message = this.smfGetMessage(messageId, messageArguments);
		}
	
		self.smfLiteralAlert(message, alerter.inneronOk, alerter.internalCallback);
	};

	return alerter;
};





/**
 * 확인 메시지를 출력하는 객체를 생성한다
 *
 * @param  message : 메시지
 * @param  onOk : 확인버튼 클릭후 콜백함수
 * @param  onCancel : 취소버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfConfirmer = function(messageId, messageArguments, onOk, onCancel){
	var self = this;
	
	var confirmer = {
		context: self,
		message: '',
		messageId: messageId,
		messageArguments: messageArguments,

		message: '',
		onOk: onOk,
		onCancel: onCancel,
	};
	
	
	confirmer.innerCallback = function(params){
		var context = confirmer.context;
		if(this.isNil(context)){
			context = self;
		}

		if(params.confirmResult == true){
			confirmer.onOk.call(context);
		}else{
			confirmer.onCancel.call(context);
		}
	};

	if(this.isNil(confirmer.onOk)) confirmer.callback = this.smfEmptyFunction;
	if(this.isNil(confirmer.onCancel)) confirmer.onCancel = this.smfEmptyFunction; 
	
	confirmer.run = function(){ 
		if(self.isNotNil(confirmer.message)){
			var message = confirmer.message;
		}else{
			var message = this.smfGetMessage(confirmer.messageId, messageArguments);
		}
	
		self.smfLiteralConfirm(message, confirmer.innerCallback);
	};
	
	return confirmer;
};

/**
 * 알림 메시지를 출력한다
 *
 * @param  message : 메시지
 * @param  callback : 확인버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfLiteralAlert = function(message, callback, cleanupCallback,objOption) {
	if(this.isNil(callback)) callback = function(){};

	var nLeft=null;
	var nTop=null;
	var nWidth=null;
	var nHeight=null;

	// 옵션이 있다면 값을 적용(주로 left,top,width,height)
	if(objOption)
	{
		nLeft   = objOption.left;
		nTop    = objOption.top;
		nWidth  = objOption.width;
		nHeight = objOption.height;
	}
	
	// 2023.07.21 메세지를 가지고 dialogID를 만들때 '' 가 포함되면 표시안되는 문제 해결
	var sMessage = "empty";
	if(message)
	{
		sMessage = message.substr(0,30);
		sMessage = nexacro.base64Encode( sMessage ) ;
	}	
	
	this.smfDialog("comm::comm_alert.xfdl" + new Date() + ":" + Math.random() +  ":" + Math.random() + ":" + sMessage, "comm::comm_alert.xfdl", {
		callback: callback,
		internalCallback: cleanupCallback,
		params: {
			procType: "notice",
			message: message,
		}
	}
	,nLeft,nTop,nWidth,nHeight
	);
};

/**
 * 알림 메시지를 출력한다(교육설문)
 *
 * @param  message : 메시지
 * @param  callback : 확인버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfLiteralAlertEds = function(message, callback, cleanupCallback,objOption) {
	if(this.isNil(callback)) callback = function(){};

	var nLeft=null;
	var nTop=null;
	var nWidth=null;
	var nHeight=null;
	var nAlign=null;

	// 옵션이 있다면 값을 적용(주로 left,top,width,height)
	if(objOption)
	{
		nLeft   = objOption.left;
		nTop    = objOption.top;
		nWidth  = objOption.width;
		nHeight = objOption.height;
		nAlign  = objOption.align;
	}
	
	// 2023.07.21 메세지를 가지고 dialogID를 만들때 '' 가 포함되면 표시안되는 문제 해결
	var sMessage = "empty";
	if(message)
	{
		sMessage = message.substr(0,30);
		sMessage = nexacro.base64Encode( sMessage ) ;
	}		
	
	//trace("comm::comm_alertEds.xfdl" + new Date() + ":" + Math.random() +  ":" + Math.random() + ":" + sMessage);
	this.smfDialog("comm::comm_alertEds.xfdl" + new Date() + ":" + Math.random() +  ":" + Math.random() + ":" + sMessage, "comm::comm_alertEds.xfdl", {
		callback: callback,
		internalCallback: cleanupCallback,
		titlebar:false,
		params: {
			procType: "none",
			message: message,
			align:nAlign
		}
	}
	,nLeft,nTop,nWidth,nHeight
	);
};

prForm.smfParseMessageBoxArguments = function(messageBoxArguments) {
	var result = {
		message: "",
		callback: null,
		cleanupCallback: null,
	};
	
	var messageId = this.smfStr(messageBoxArguments[0]);
	
	// messageId, 
	// CM1001, CM100, CM10001
	if(messageId.match(/^([A-Z]{2})([0-9]{3,5})$/g)){
		// 두번째 파라메터가 메시지 아규먼트인경우
		if(this.astfIsArrayType(messageBoxArguments[1])){
			var messageArguments = messageBoxArguments[1];
			result.message = this.smfGetMessage(messageId, messageArguments);
			result.callback = messageBoxArguments[2];
			result.cleanupCallback = messageBoxArguments[3];
		}else{
			// 
			result.message = this.smfGetMessage(messageId, []);
			result.callback = messageBoxArguments[1];
			result.cleanupCallback = messageBoxArguments[2];
		}
	}else{
		// 리터럴문자열
		result.message = messageId;
		result.callback = messageBoxArguments[1];
		result.cleanupCallback = messageBoxArguments[2];
	}

	return result;
};

/**
 * 알림 메시지를 출력한다
 *
 * @param  messageId : 메시지아이디
 * @param  messageArguments : 메시지 arguments
 * @param  callback : 확인버튼 클릭후 콜백함수
 * @param  cleanupCallback : 내부용 파라메터 사용하지 말것
 * @param  objOption : dialog를 띄울때의 조건(JOSN형태. {left:100,top:100,width:100,height:100} 생략가능)
 * @see this.smfConfirm("CM007", [100], function(){ 
        }); // [조회건수 : 100 건]
 * @return void
 */
prForm.smfAlert = function(messageId, messageArguments, callback, cleanupCallback,objOption) {
	// var message = this.smfGetMessage(messageId, messageArguments);
	var result = this.smfParseMessageBoxArguments(this.smfAlert.arguments);
	
	return this.smfLiteralAlert(result.message, result.callback, result.cleanupCallback,objOption); 
};

/**
 * 알림 메시지를 출력한다(교육설문)
 *
 * @param  messageId : 메시지아이디
 * @param  messageArguments : 메시지 arguments
 * @param  callback : 확인버튼 클릭후 콜백함수
 * @param  cleanupCallback : 내부용 파라메터 사용하지 말것
 * @param  objOption : dialog를 띄울때의 조건(JOSN형태. {left:100,top:100,width:100,height:100} 생략가능)
 * @see this.smfConfirm("CM007", [100], function(){ 
        }); // [조회건수 : 100 건]
 * @return void
 */
prForm.smfAlertEds = function(messageId, messageArguments, callback, cleanupCallback,objOption) {
	// var message = this.smfGetMessage(messageId, messageArguments);
	var result = this.smfParseMessageBoxArguments(this.smfAlertEds.arguments);
	
	return this.smfLiteralAlertEds(result.message, result.callback, result.cleanupCallback,objOption); 
};



/**
 * 확인 메시지를 출력한다
 *
 * @param  message : 메시지
 * @param  callback : 확인 또는 취소 버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfLiteralConfirm = function(message, callback, cleanupCallback,objOption) {
	if(this.isNil(callback)) callback = function(){};

	var nLeft=null;
	var nTop=null;
	var nWidth=null;
	var nHeight=null;

	// 옵션이 있다면 값을 적용(주로 left,top,width,height)
	if(objOption)
	{
		nLeft   = objOption.left;
		nTop    = objOption.top;
		nWidth  = objOption.width;
		nHeight = objOption.height;
	}
	
	// 2023.07.21 메세지를 가지고 dialogID를 만들때 '' 가 포함되면 표시안되는 문제 해결
	var sMessage = "empty";
	if(message)
	{
		sMessage = message.substr(0,30);
		sMessage = nexacro.base64Encode( sMessage ) ;
	}	
	
	this.smfDialog("comm::comm_confirm.xfdl" + new Date() + ":" + Math.random() +  ":" + Math.random() + ":" +sMessage, "comm::comm_confirm.xfdl", {
		callback: callback,
		internalCallback: cleanupCallback,
		params: {
			procType: "notice",
			message: message,
		},
	   }
	,nLeft,nTop,nWidth,nHeight
	);
};

/**
 * 확인 메시지를 출력한다(교육설문)
 *
 * @param  message : 메시지
 * @param  callback : 확인 또는 취소 버튼 클릭후 콜백함수
 * @return void
 */
prForm.smfLiteralConfirmEds = function(message, callback, cleanupCallback,objOption) {
	if(this.isNil(callback)) callback = function(){};

	var nLeft=null;
	var nTop=null;
	var nWidth=null;
	var nHeight=null;

	// 옵션이 있다면 값을 적용(주로 left,top,width,height)
	if(objOption)
	{
		nLeft   = objOption.left;
		nTop    = objOption.top;
		nWidth  = objOption.width;
		nHeight = objOption.height;
	}
	
	// 2023.07.21 메세지를 가지고 dialogID를 만들때 '' 가 포함되면 표시안되는 문제 해결
	var sMessage = "empty";
	if(message)
	{
		sMessage = message.substr(0,30);
		sMessage = nexacro.base64Encode( sMessage ) ;
	}	
	
	this.smfDialog("comm::comm_confirmEds.xfdl" + new Date() + ":" + Math.random() +  ":" + Math.random() + ":" +sMessage, "comm::comm_confirmEds.xfdl", {
		callback: callback,
		internalCallback: cleanupCallback,
		titlebar:false,
		params: {
			procType: "notice",
			message: message,
		},
	   }
	,nLeft,nTop,nWidth,nHeight
	);
};


 /**
 * 확인 메시지를 출력한다
 *
 * @param  messageId : 메시지아이디
 * @param  messageArguments : 메시지 arguments
 * @param  callback : 확인 또는 취소 버튼 클릭후 콜백함수
 * @param  cleanupCallback : 내부용 파라메터 사용하지 말것
 * @param  objOption : dialog를 띄울때의 조건(JOSN형태. {left:100,top:100,width:100,height:100} 생략가능)
 * @see this.smfConfirm("CM003", [], function(confirmParams){
			if(confirmParams.confirmResult){
				alert('수행');
			}
		}); // 저장하시겠습니까?
 * @return void
 */
prForm.smfConfirm = function(messageId, messageArguments, callback, cleanupCallback,objOption) {
	var result = this.smfParseMessageBoxArguments(this.smfConfirm.arguments);
	
	return this.smfLiteralConfirm(result.message, result.callback, result.cleanupCallback,objOption);
};

 /**
 * 확인 메시지를 출력한다(교육설문)
 *
 * @param  messageId : 메시지아이디
 * @param  messageArguments : 메시지 arguments
 * @param  callback : 확인 또는 취소 버튼 클릭후 콜백함수
 * @param  cleanupCallback : 내부용 파라메터 사용하지 말것
 * @param  objOption : dialog를 띄울때의 조건(JOSN형태. {left:100,top:100,width:100,height:100} 생략가능)
 * @see this.smfConfirm("CM003", [], function(confirmParams){
			if(confirmParams.confirmResult){
				alert('수행');
			}
		}); // 저장하시겠습니까?
 * @return void
 */
prForm.smfConfirmEds = function(messageId, messageArguments, callback, cleanupCallback,objOption) {
	var result = this.smfParseMessageBoxArguments(this.smfConfirmEds.arguments);
	
	return this.smfLiteralConfirmEds(result.message, result.callback, result.cleanupCallback,objOption);
};

/**
 * 동적 서비스를 생성한다
 * 업무에서 사용하지 않는다. 업무에서 필요시 smfDynService 사용한다
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfDynService = function(serviceId, serviceProperties){
// 조회만 가능
	this.astfAssertParamValueIsStringType(serviceId);
	this.astfAssertParamValueObjectFormat(serviceProperties, "serviceProperties", {
		url: [true, this.astvStringType],
		inDatasets: [false, this.astvStringType],
		outDatasets: [true, this.astvStringType]
	});

	var dsService = this.dsService;

	if(dsService.findRow("id", serviceId) != -1){
		dsService.deleteRow(dsService.findRow("id", serviceId));
	}

	var nRow = dsService.addRow();			
	dsService.setColumn(nRow, "id", serviceId);
	dsService.setColumn(nRow, "url", this.smfStr(serviceProperties.url).trim());
	dsService.setColumn(nRow, "inDatasets", this.smfStr(serviceProperties.inDatasets).trim());
	dsService.setColumn(nRow, "outDatasets", this.smfStr(serviceProperties.outDatasets).trim());
	dsService.setColumn(nRow, "bindingControls", this.smfStr(serviceProperties.bindingControls).trim());			
	dsService.setColumn(nRow, "asynctp", "true");

	var service = this.smfSearchService(serviceId);
	service.caller = this.smfDynService.caller;
	service.callee = arguments.callee;
	
	return service;
	
// 	
// 	
// 	this.smfAssertExistsServiceId(serviceId);	
// 
// 	var service = this.smfCreateService(serviceId);
// 	service.serviceId(serviceId);
// 	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
// 	service.showConfirm(false);
// 	return service;
};

/**
 * 내부적으로 동작하는 서비스를 생성한다
 * 업무에서 사용하지 않는다. 업무에서 필요시 smfDynService 사용한다
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfCmmService = function(serviceId){
	var service = this.smfSearchService(serviceId);
	service.caller = this.smfCmmService.caller;
	service.callee = arguments.callee;
	
	return service;
};

/**
 * 조회 서비스를 생성한다
 *
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfSearchService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.smfAssertExistsServiceId(serviceId);
	
	this.astfAssertParamRangeValue(this.smfGetServiceIdPrefix(serviceId), "serviceId", ["validate", "check", "select", "list", "preview", "print", "code"]);

	var service = this.smfCreateService(serviceId);
	service.caller = this.smfSearchService.caller;
	service.callee = arguments.callee;
	service.serviceId(serviceId);
	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
	service.showConfirm(false);
	return service;
};

/**
 * 출력 서비스를 생성한다
 * 출력 솔루션 결정후되면 작업
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfPrintService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.smfAssertExistsServiceId(serviceId);
	var service = this.smfSearchService(serviceId);
	service.caller = this.smfPrintService.caller;
	service.callee = arguments.callee;
	return service;
};



/**
 * 실행 서비스를 생성한다
 *
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfExecuteService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.smfAssertExistsServiceId(serviceId);
	
	this.astfAssertParamRangeValue(this.smfGetServiceIdPrefix(serviceId), "serviceId", ["execute"]);

	var service = this.smfCreateService(serviceId);
	service.caller = this.smfSaveService.caller;
	service.callee = arguments.callee;
	service.serviceId(serviceId);
	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
	service.showConfirm(true);
	return service;
};

/**
 * 저장 서비스를 생성한다
 *
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfSaveService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.smfAssertExistsServiceId(serviceId);
	
	this.astfAssertParamRangeValue(this.smfGetServiceIdPrefix(serviceId), "serviceId", ["insert", "update", "save", "execute"]);

	var service = this.smfCreateService(serviceId);
	service.caller = this.smfSaveService.caller;
	service.callee = arguments.callee;
	service.serviceId(serviceId);
	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
	service.showConfirm(true);
	return service;
};


/**
 * 삭제 서비스를 생성한다
 *
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfDeleteService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.smfAssertExistsServiceId(serviceId);
	this.astfAssertParamRangeValue(this.smfGetServiceIdPrefix(serviceId), "serviceId", ["delete", "execute"]);

	var service = this.smfCreateService(serviceId);
	service.caller = this.smfDeleteService.caller;
	service.callee = arguments.callee;
	service.serviceId(serviceId);
	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
	service.showConfirm(true);
	return service;
};




prForm.smfCreateService = function(serviceId) {
	var callerFuncName = this.smfFuncName(this.smfCreateService.caller);
	
	// smfCreateService함수는 단독으로 사용하면 안됨
	if(! this.astfIsRange(callerFuncName, "smfDynService", "smfSearchService", "smfPrintService", "smfSaveService", "smfExecuteService", "smfDeleteService")){
		this.smfDevException("smfCreateService 함수는 사용할 수 없습니다\n다음중 하나를 사용하세요.\n" +  
		 [/*"smfCmmService",  */ "smfDynService", "smfSearchService", "smfPrintService", "smfSaveService", "smfExecuteService", "smfDeleteService"].join(", "));
	}
	

	var context = this;
	var service = {};
	
	// onload 이벤트에서 발생했는지
	service.isRunInOnloadEventContext = this.smfIsOnloadEventInThisFunctionContext();
	
	service.caller = this.smfCreateService.caller;
	service.callee = arguments.callee;
	
	service.properties = {};
	var props = service.properties;
	props.serviceId = serviceId;
	
	// 사용자에게 confirm메시지 표시여부
	props.showConfirmToUser = false;
	
	// confirm 메시지
	props.confirmMessage = "{0} 하시겠습니까?";
	props.confirm = function(next){
		if(props.showConfirmToUser != true){
			next();
			return;
		}		

		var message = props.confirmMessage;
		if(props.modifiedConfirm == true){
			message = props.modifiedDataConfirmMessage + message;
		}

		var confirmer = context.smfConfirmer();
		confirmer.message = message;
		confirmer.onOk = function(){
			props.afterConfirm.call(context);
			next();
		};

		confirmer.onCancel = function(){
		};

		confirmer.run();
	};
	
	// grid 삭제시 사용
	props.afterConfirm = function(){	
	};
	
// 	// 페이징 처리
// 	service.paging = {
// 		enable: false, //페이징처리 수행하지 않음
// 	};
	
	// 
	props.modifiedConfirm = false;
	props.initModifiedDataConfirmMessage = "화면에 변경된 값이 저장되지 않았습니다\n";


	// service가 호출되기전 콜됨
	props.beforeService = function(runService){
		return runService.call(context);
	};

	// serviceCallback이 호출전 실행하는 내부처리용 callback
	props.internalBeforeServiceCallback = function(params, serviceCallback){
		serviceCallback();
	};

	// service callback
	props.serviceCallback = this.smfEmptyFunction;

	// serviceCallback이 호출후 실행하는 내부처리용 callback
	props.internalAfterServiceCallbackList = [];
	props.internalAfterServiceCallback = function(params){
		for(var i in props.internalAfterServiceCallbackList){
			var callback = props.internalAfterServiceCallbackList[i];
			
			callback.call(context, params);
		}
	};
	
	// onload때 서버통신 오류 처리
	if(service.isRunInOnloadEventContext){
		props.internalAfterServiceCallbackList.push(function(callbackParams){
			if(! callbackParams.errors) return;
			
			// prj_script에 선언되어있는
			// onload error 핸들러를 수행한다
			if(! this.smvConfigurations) return;
			if(! this.smvConfigurations.formOnloadServiceErrorHandler) return;
			if(! isFunction(this.smvConfigurations.formOnloadServiceErrorHandler)) return;
			
			try{
				// prj_script smvConfigurations 참조 
				this.smvConfigurations.formOnloadServiceErrorHandler.call(context, context, callbackParams);
			}catch(e){
				context.trace(e);
			}
		});
	}	


	props.currentCommandIndex = 0;
	props.commands = [];
	var commands = props.commands;

	var executeNextCommand = function(){
		if(props.currentCommandIndex < commands.length){
			var command = commands[props.currentCommandIndex];
			props.currentCommandIndex += 1;
			command.call(context, executeNextCommand);
		}
	};

	// 서비스ID설정
	service.serviceId = function(serviceId){
		context.astfAssertParamValueIsStringType(serviceId, "serviceId");
		props.serviceId = serviceId;
		return service;
	};


	// 메시지 접두어
	service.messagePrefix = function(messagePrefix){
		props.messagePrefix = messagePrefix;
		props.confirmMessage = context.format("{0} 하시겠습니까?", [messagePrefix]);
		return service;
	};
	
	service.getMessagePrefix = function(){
		return props.messagePrefix;
	};

	// 중복검사
	service.validateDuplicate = function(params){
		context.astfAssertParamValueIsObjectType(params, params);

		context.astfAssertParamIsGridType(params.grid, "params.grid");
		context.astfAssertParamValueIsArrayType(params.columnNames, "params.columnNames");
		 
		var grid = params.grid;
		var gridText = params.gridText;
		var columnNames = params.columnNames;
		var columnText = params.columnText;
		
		var dataset = context.smfFindComponentInThisContext(grid.binddataset);
		context.astfAssertParamValueIsDatasetType(dataset, "dataset");
	
		var columnLabelText = "";
		if(context.isNil(params.columnText)){
			var columnLabels = [];
			for(var i=0,size=columnNames.length; i<size; i++){
				var columnName = columnNames[i];
				
				for(var n=0,sizen=grid.getCellCount("body"); n<sizen; n++){
					var celltext = context.smfStr(grid.getCellProperty("body", n, "text"));
					celltext = celltext.replace("bind:", "");
					
					if(celltext == columnName){
						var columnLabel = context.smfStr(grid.getCellProperty("head", n, "text"));
						columnLabels.push(columnLabel);
					}				
				}
				
				columnLabelText = context.format('(항목 : "{0}")', [columnLabels.join(", ")]);
			}
		}else{
			columnLabelText = context.format('(항목 : "{0}")', [columnText]);
		}

	
		commands.push(function(next){
			var dupResult = context.smfIsDuplicateColumns(dataset, columnNames, function(nRow){
				return context.smfIsUpdateRow(dataset, nRow);
			});
			
			
			if(dupResult.isDup){
				var message = context.format("{1}행과 {2}행이 중복됩니다.\n{0}\n확인후 다시 시도하세요.", [columnLabelText, dupResult.upRow+1, dupResult.downRow+1]);
				
				if(context.isNotNil(gridText)){
					message = gridText + " 항목의\n" + message;
				}
				dataset.set_rowposition(dupResult.dupRow);
				context.smfLiteralAlert(message);
				return;
			}

			next();
		});

		return service;
	};

	// 데이터셋이 변경됬으면 confirm메시지
	service.confirmIfModifiedDataset = function(dataset){
		context.astfAssertParamValueIsDatasetType(dataset, "dataset");
	
		commands.push(function(next){
			props.modifiedConfirm = false;
			props.modifiedDataConfirmMessage = "";
			
			var options = {};
			if(context.smfIsUpdate(dataset, null, options)){
				
				props.modifiedConfirm = true;
				props.showConfirmToUser	= true;
				if(context.isNil(props.modifiedDataConfirmMessage)){
					props.modifiedDataConfirmMessage = props.initModifiedDataConfirmMessage;
				}
			}

			next();
		});

		return service;		
	};
	
	// 그리드 데이터가 변경됬으면 confirm메시지
	service.confirmIfModifiedGrid = function(gridOrArrayOfGrid){
		if(context.astfIsParamInstanceofType(gridOrArrayOfGrid, nexacro.Grid)){
			gridOrArrayOfGrid = [gridOrArrayOfGrid];
		}else{
			for(var i in gridOrArrayOfGrid){
				context.astfAssertParamValueIsGridType(gridOrArrayOfGrid[i], "gridOrArrayOfGrid[" + i + "]");
			}
		}

		for(var i in gridOrArrayOfGrid){
			var grid = gridOrArrayOfGrid[i];
			if(context.isNotNil(grid.binddataset)){
				var dataset = context.smfFindComponentInThisContext(grid.binddataset);
				service.confirmIfModifiedDataset(dataset);
			}
		}	

		return service;
	};

	/**
	 * 폼 유효성 검사를 수행한다
	 * 
	 * @param  container 컴포넌트를 관리하는 Div나 TabPage
	 * @return void
	 */
	service.validateForm = function(container){
		context.astfAssertParamValueIsContainerComponentType(container, "container");

		commands.push(function(next){	
			if(! context.smfValidate(container)){
				return;
			}

			next();
		});
		
		return service;
	};	
	
// 	// 데이터셋을 이용한 폼 유효성검사
// 	service.validateFormDataset = function(container, dataset){
// 		context.astfAssertParamValueIsContainerComponentType(container, "container");
// 		context.astfAssertParamValueIsDatasetType(dataset, "dataset");	
// 
// 		commands.push(function(next){	
// 			if(! context.smfValidate(container)){
// 				return;
// 			}
// 
// 			next();
// 		});
// 		
// 		return service;
// 	};	
	
	/**
	 * 그리드 유효성검사
	 * 
	 * @param  grid 그리드
	 * @param  dsValid 룰셋을 담고있는 데이터셋
	 * @return void
	 */	
	service.validateGrid = function(grid, dsValid, options){
		if(context.isNil(options)) options = {};
	
		context.astfAssertParamIsGridType(grid, "grid");
		var dataset = context.smfFindComponentInThisContext(grid.binddataset);
		context.astfAssertParamValueIsDatasetType(dataset, "dataset");	

		commands.push(function(next){ 
			// 그리드 삭제 유효성을 수행한다
			if(! context.smfValidateGridSave.call(context, grid, dsValid, options)){
				return;
			}

			next();
		});

		return service;
	};	
	
	// 폼 삭제 유효성검사
	service.validateFormDelete = function(container){
		context.astfAssertParamValueIsContainerComponentType(container, "container");
		
		commands.push(function(next){
			if(! context.smfValidateFormDelete.call(context, props.serviceId, container)) return;
			
			next();
		});
		
		return service; 
	};
	
	// 그리드 삭제 유효성검사
	service.validateGridDelete = function(grid){
		context.astfAssertParamIsGridType(grid, "grid");
		
		commands.push(function(next){
			var options = {
				messagePrefix: props.messagePrefix,
			};
			if(! context.smfValidateGridDelete.call(context, grid, options)){
				return;
			}
			
			// confirm이 필요한경우 confirm 메시지를 설정한다
			
			if(props.showConfirmToUser == true){
				if(options.needConfirm){
					props.confirmMessage = options.confirmMessage;
				}
			}
			
			// confirm이후 row를 삭제한다
			props.afterConfirm = function(){
				options.deleteRows.call(context);
			};

			next();
		});
		return service;
	};
	
	
	// 데이터셋이 변경이 되었는지 확인
	// 변경되지 않았으면 alert메시지를 표시하고 중단한다
	service.requireModifredData = function(datasetOrArrayOfDataset, message) { 
		if(context.astfIsParamInstanceofType(datasetOrArrayOfDataset, nexacro.Dataset)){
			datasetOrArrayOfDataset = [datasetOrArrayOfDataset];
		}else{
			for(var i in datasetOrArrayOfDataset){
				context.astfAssertParamValueIsDatasetType(datasetOrArrayOfDataset[i], "datasetOrArrayOfDataset[" + i + "]");
			}
		}
		
		commands.push(function(next){ 
			var isUpdated = false;
			
			for(var i in datasetOrArrayOfDataset){
				var dataset = datasetOrArrayOfDataset[i];
				
				if(context.smfIsUpdate(dataset) == true){
					isUpdated = true;
					break;
				}
			} 

			if(isUpdated != true){
				if(context.isNil(message)){
					message = context.format("변경된 데이터가 없어서 {0}할 수 없습니다.", [props.messagePrefix]);
					
					context.smfLiteralAlert(message);
				}
				
				return;
			}
			
			next();
		});
		
		return service;
	};

	// 데이터 존재 필수
	service.requireExistsData = function(datasetOrArrayOfDataset, message) { 
		if(context.astfIsParamInstanceofType(datasetOrArrayOfDataset, nexacro.Dataset)){
			datasetOrArrayOfDataset = [datasetOrArrayOfDataset];
		}else{
			for(var i in datasetOrArrayOfDataset){
				context.astfAssertParamValueIsDatasetType(datasetOrArrayOfDataset[i], "datasetOrArrayOfDataset[" + i + "]");
			}
		}
		
		commands.push(function(next){
			var hasRow = false;
			
			for(var i in datasetOrArrayOfDataset){
				var dataset = datasetOrArrayOfDataset[i];
				
				if(dataset.rowcount != 0){
					hasRow = true;
					break;
				}
			} 

			if(hasRow != true){
				if(context.isNil(message)){
					message = context.format("{0}할 데이터가 없습니다.", [props.messagePrefix]);
					
					context.smfLiteralAlert(message);
				}
				
				return;
			}
			
			next();
		});
		
		return service;
	};
	

	// 사용자 정의 메소드 추가
	service.command = function(command){
		commands.push(function(next){
			command.call(context, next);
		});	
		
		return service;
	};
	
	// 사용자에게 confirm메시지를 표시할지 여부
	service.showConfirm = function(showConfirmToUser){
		if(context.isNil(showConfirmToUser)) showConfirmToUser = true;

		props.showConfirmToUser = showConfirmToUser;	
		return service;
	};
	
	service.confirm = function(message){
		if(context.isNil(message)){
			props.confirmMessage = context.format("{0}하시겠습니까?", [props.messagePrefix]);
		}
		props.showConfirmToUser = true;

		return service;
	};
	
	// 서비스가 수행되기전 호출되는 이벤트
	service.beforeService = function(beforeService){
		props.beforeService = beforeService;
		return service;
	};

	/**
	  * 페이징 처리
	  * @grid 그리드컴포넌트
	  * @divPageInfo 페이지컴포넌트
	  * @dsPageInfo 페이지데이터셋
	  * @buttonOrSearchFunction 버튼컴포넌트 또는 조회함수
	  * @event 버튼클릭 이벤트
	  * @return : service
	  */
 	service.paging = function(grid, divPageInfo, dsPageInfo, buttonOrSearchFunction, event){
		for(var i=0; i<50; i++){
			context.trace("smfSearchService.paging 메소드는 사용하지 마세요. paginator를 사용하세요. test/sample_crudGridPage.xfdl 샘플을 참고하세요");
		}

		context.astfAssertParamIsGridType(grid, "grid");
		context.astfAssertParamValueIsContainerComponentType(divPageInfo, "divPageInfo");
		context.astfAssertParamValueIsDatasetType(dsPageInfo, "dsPageInfo");
		
		// context.astfAssertParamInstanceofType(button, "button", nexacro.Button, "Button");

		var initPageIndex = dsPageInfo.getConstColumn("initPageIndex");
		var initPageSize = dsPageInfo.getConstColumn("initPageSize");
		
		if( isFunction(divPageInfo.form.fnGetInitPageSize) ){
			initPageSize = divPageInfo.form.fnGetInitPageSize();
		}

		if(dsPageInfo.rowcount == 0){
			dsPageInfo.addRow();
		}
		if(context.isNil(dsPageInfo.getColumn(0, "pageIndex"))){
			dsPageInfo.setColumn(0, "pageIndex", initPageIndex);
		}

		if(context.isNil(dsPageInfo.getColumn(0, "pageSize"))){
			dsPageInfo.setColumn(0, "pageSize", initPageSize); 
		}

		props.paging = {
			enable: true,
			grid: grid,
			dsPageInfo: dsPageInfo,
			divPageInfo: divPageInfo,			
		}; 
		
		// event.pageIndex가 없으면 검색을 누른 조회이므로
		// dsPageInfo를 초기화한다
		if(context.isNil(event) || context.isNil(event.pageIndex)){
			dsPageInfo.setColumn(0, "pageIndex", 1);
			dsPageInfo.setColumn(0, "pageSize", initPageSize); 
		}


		

		props.internalAfterServiceCallbackList.push(function(callbackParams){
			// comp_page 에서 페이지번호를 클릭하면
			// event에 pageIndex를 추가한다
			// 따라서 event.pageIndex가 없으면
			// 조회버튼을 클릭한 것으로 보고 처음 조회로 판단하여
			// fnInit을 호출한다
			if(context.isNil(event) || context.isNil(event.pageIndex)){
				divPageInfo.form.fnInit(
					grid, 
					dsPageInfo,
					buttonOrSearchFunction,
					context
				);
			}
		});
		
		// 페이징에 맞도록 순번을 표시한다
		props.internalAfterServiceCallbackList.push(function(callbackParams){	
			var datasetOfGrid = this.smfFindComponentInThisContext(grid.binddataset);
			var updatecontrol = datasetOfGrid.updatecontrol;
			datasetOfGrid.updatecontrol = false;
			try{
				if(datasetOfGrid.getColumnInfo("_pageRow") == null) return;
				
				// 서버로부터 받은 _pageRow가 존재하면 아래 코드를 수행하지 않는다. 
				// 서버로부터 받은 _pageRow를 사용한다
				if(datasetOfGrid.rowcount != 0){
					if(context.isNotNil(datasetOfGrid.getColumn(0, "_pageRow"))) return;
				}
				
				var pageIndex = parseInt(props.paging.dsPageInfo.getColumn(0, "pageIndex"));
				var pageSize = parseInt(props.paging.dsPageInfo.getColumn(0, "pageSize"));

				var offset = (pageIndex-1) * pageSize;
				for(var i=0,size=datasetOfGrid.rowcount; i<size; i++){
					datasetOfGrid.setColumn(i, "_pageRow", offset + i);
				}

				var bPagenation = true;
				context.smfUpdateGrid.call(context, grid, bPagenation);
			} catch(e)
			{
				trace("처리중 에러가발생했습니다.");
			}finally{
				datasetOfGrid.updatecontrol = updatecontrol;
			}
		});
		

		
		return service;
	};
	

	/**
	  * 페이징 처리
	  * @grid 그리드컴포넌트(또는 데이터셋 오브젝트)
	  * @divPaginator 페이지컴포넌트
	  * @divPageSummary 페이지컴포넌트
	  * @dsPageInfo 페이지데이터셋
	  * @buttonOrSearchFunction 버튼컴포넌트 또는 조회함수
	  * @event 버튼클릭 이벤트
	  * @return : service
	  */
 	service.paginator = function(grid, divPageInfo, divPageSummary, dsPageInfo, buttonOrSearchFunction, event){
		//context.astfAssertParamIsGridType(grid, "grid");
		context.astfAssertParamValueIsContainerComponentType(divPageInfo, "divPageInfo");
		context.astfAssertParamValueIsContainerComponentType(divPageSummary, "divPageSummary");
		context.astfAssertParamValueIsDatasetType(dsPageInfo, "dsPageInfo");
		
		// context.astfAssertParamInstanceofType(button, "button", nexacro.Button, "Button");

		var initPageIndex = dsPageInfo.getConstColumn("initPageIndex");
		var initPageSize = dsPageInfo.getConstColumn("initPageSize");
		var initIsUsePageInfo = dsPageInfo.getConstColumn("initIsUsePageInfo");
		
		if( isFunction(divPageSummary.form.fnGetInitPageSize) ){
			initPageSize = divPageSummary.form.fnGetInitPageSize();
		}

		if(dsPageInfo.rowcount == 0){
			dsPageInfo.addRow();
		}

		if(context.isNil(dsPageInfo.getColumn(0, "pageIndex"))){
			dsPageInfo.setColumn(0, "pageIndex", initPageIndex);
		}


		if(context.isNil(dsPageInfo.getColumn(0, "pageSize"))){
			dsPageInfo.setColumn(0, "pageSize", initPageSize); 
		}

		props.paging = {
			enable: true,
			grid: grid,
			dsPageInfo: dsPageInfo,
			divPageInfo: divPageInfo,			
			divPageSummary: divPageSummary,			
		}; 
		
		// event.pageIndex가 없으면 검색을 누른 조회이므로
		// dsPageInfo를 초기화한다
		if(context.isNil(event) || context.isNil(event.pageIndex)){
			//if(context.smfIsMobile())
			//{	
				if(grid instanceof nexacro.Grid)
				{
					grid.getBindDataset().clearData();
				}
				else if(grid instanceof nexacro.NormalDataset)
				{   //grid가 데이터셋인 경우 그대로 데이터를 지운다.
					grid.clearData();
				}
			//}
	
			if(context.smfIsNull(initIsUsePageInfo)) // 최초에 한번만 사용하고 이후는 초기화
			{
				dsPageInfo.setColumn(0, "pageIndex", 1);
				dsPageInfo.setColumn(0, "pageSize", initPageSize); 
			}
		}
 
		props.internalAfterServiceCallbackList.push(function(callbackParams){
			// comp_page 에서 페이지번호를 클릭하면
			// event에 pageIndex를 추가한다
			// 따라서 event.pageIndex가 없으면
			// 조회버튼을 클릭한 것으로 보고 처음 조회로 판단하여
			// fnInit을 호출한다
			if (context.isNil(event) || context.isNil(event.pageIndex)) {
				divPageInfo.form.fnInit(
					grid, 
					dsPageInfo,
					divPageSummary,
					buttonOrSearchFunction,
					context
				);
				divPageSummary.form.fnInit(
					grid, 
					dsPageInfo,
					divPageSummary,
					buttonOrSearchFunction,
					context
				);
				
				// 초기화
				dsPageInfo.setConstColumn("initIsUsePageInfo","");
			}
		});
		
		// 페이징에 맞도록 순번을 표시한다
		props.internalAfterServiceCallbackList.push(function(callbackParams){	
			if(grid instanceof nexacro.Grid)
			{
				var datasetOfGrid = this.smfFindComponentInThisContext(grid.binddataset);
				var updatecontrol = datasetOfGrid.updatecontrol;
				datasetOfGrid.updatecontrol = false;
				try{
					if(datasetOfGrid.getColumnInfo("_pageRow") == null) return;
					
					// 서버로부터 받은 _pageRow가 존재하면 아래 코드를 수행하지 않는다. 
					// 서버로부터 받은 _pageRow를 사용한다
					if(datasetOfGrid.rowcount != 0){
						if(context.isNotNil(datasetOfGrid.getColumn(0, "_pageRow"))) return;
					}
					
					var pageIndex = parseInt(props.paging.dsPageInfo.getColumn(0, "pageIndex"));
					var pageSize = parseInt(props.paging.dsPageInfo.getColumn(0, "pageSize"));

					var offset = (pageIndex-1) * pageSize;
					for(var i=0,size=datasetOfGrid.rowcount; i<size; i++){
						datasetOfGrid.setColumn(i, "_pageRow", offset + i);
					}

					var bPagenation = true;
					context.smfUpdateGrid.call(context, grid, bPagenation);
				} catch(e)
				{
					trace("처리중 에러가발생했습니다.");
				}finally{
					datasetOfGrid.updatecontrol = updatecontrol;
				}
			}
		});
		

		
		return service;
	};	
	
	// 서비스 수행
	service.run = function(){
		// 서비스 호출 등록
		commands.push(function(next){
			if(props.showConfirmToUser != true){
				props.afterConfirm();
				
				props.beforeService.call(context, function(){
					context.smfService.call(context, props.serviceId);
					next();
				});
			}else{
				props.confirm.call(context, function(){
					props.beforeService.call(context, function(){
						context.smfService.call(context, props.serviceId);
						next();
					});
				});
			}
		});

		// commands를 순회하여 처리한다
		executeNextCommand();

		return service;
	};
	
	props.serviceCallback = function(svcid, errcd, errmsg, next){
		var params = {
			serviceId: svcid,
			reason: errcd,
			message: context.smfStr(errmsg),
			rawMessage: errmsg,
			errors: -1 >= errcd,
			service: service,
			businessErrors: false,
			business: {
				"errors": false,
				"code": "",
				"message": ""
			},
		};

		// 메시지의 경우 코드와 함께 넘어오는 경우가 있다
		// CM100|메시지 이경우 앞의 코드를 제거하고 메시지를 설정한다
		var delemiterOfMessage = errmsg.indexOf("|");
		if(   delemiterOfMessage == 5 // CM100|messageOfServer
		   || delemiterOfMessage == 6 // CM1000|messageOfServer 
		){
			params.message = errmsg.substring(delemiterOfMessage+1);
		}   
		
		// 유효성검사 실패 오류코드 인지
		var isInvalidationResultMessage = errmsg.indexOf("CM155|{") == 0;
		if(errcd == -100 && !isInvalidationResultMessage){
			// 서버에서 BusinessException 발생하면
			// errcd는 -100으로 넘어오고
			// errmsg는 CM000|메시지 형태로 전달한다
			// 이를 business에 적용한다
			params.business.errors = true;
			params.business.code = errmsg.split("|")[0];
			params.business.message = errmsg.split("|")[1];
		}else{
			// 서버로부터 받은 메시지를 callbackParams에 설정한다
			//  RequestService.prototype.execute 에서 _dsBusinessMessage 설정을 참고
			if(context._dsBusinessMessage){
				var _dsBusinessMessage = context._dsBusinessMessage;
				if(_dsBusinessMessage.rowcount != 0){ 
					params.business.code = context.smfStr(_dsBusinessMessage.getColumn(0, "code"));
					params.business.message = context.smfStr(_dsBusinessMessage.getColumn(0, "message")); 
				}
			}
		}

		props.internalAfterServiceCallback.call(context, params);
		if(params.business.errors == true 
		   && (params.business.code =='ERR98' || params.business.code =='ERR99') //세션관련 오류코드로 사용중
		   && nexacro.getEnvironmentVariable("ev_subSystemGb") == "ORE")
		{
			/* WAS 세션을 자바에서 무효화 시키도
			   WEB 에서는 보관해둔 세션정보가 남아 있어서.....
			*/
			window.location.reload();
		}

		// internalBeforeServiceCallback이 호출되고
		// serviceCallback 호출되고
		// internalAfterServiceCallback이 호출된다			
		
		// serviceCallback은 internalBeforeServiceCallback에 의해 호출되며
		// 상태에 따라 serviceCallback의 호출이 되지 않을 수 있다
	};
	
	// 콜백을 등록해둔다
	context.smfGetServiceProperties()[serviceId] = { 
		callback: props.serviceCallback,
	};	

	// 콜백 수행
	service.callback = function(serviceCallback){
		var userServiceCallback = function(callbackParams){
			serviceCallback.call(context, callbackParams);
		};

		props.internalAfterServiceCallbackList.push(userServiceCallback);

		return service;
	};


	
	return service;
};


prForm.smfGetServiceProperties = function(){
	if(! this.smvService){
		this.smvService = {};
	}
	
	return this.smvService;
};



/**
 * 서비스 실행후 메시지를 얻는다
 *
 * @param  callbackParams
 * @return String 서비스 실행 메시지 
 */
prForm.smfAfterServiceMessage = function(callbackParams){
	if(this.isNil(callbackParams)) callbackParams = arguments.callee.caller.arguments[0];
	var service = callbackParams.service;
	
	var message = this.format("{0} 하였습니다", [service.getMessagePrefix()]);
	return message;
};






/**
 * (공통만사용)
 * 폼 삭제 유효성검사
 * @param  grid
 * @param  options
 * @return void
 */
prForm.smfValidateFormDelete = function(serviceId, container){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	this.astfAssertParamValueIsContainerComponentType(container, "container");

	this.smfAssertExistsServiceId(serviceId, "serviceId");
	var nRow = this.dsService.findRow("id", serviceId);
	this.dsService.setColumn(nRow, "keepInDatasetOptions", "Y");
	
	return this.smfValidate(container);
};

/**
 * (공통만사용)
 * 그리드 삭제 유효성검사
 * @param  grid
 * @param  options
 * @return void
 */
prForm.smfValidateGridDelete = function(grid, options){
	if(this.isNil(options)) options = {
		needConfirm: false,
		confirmMessage: "",
	};
	
	var deleteRows = options.deleteRows;
	var messagePrefix = options.messagePrefix;
	var message = options.message;

	this.astfAssertParamIsGridType(grid, "grid");
	
	// if(! this.smfHasService(serviceId)) return false;
	if(this.isNil(messagePrefix)) messagePrefix = "삭제";
	if(this.isNil(message)) message = this.format("{0}하시겠습니까?", [messagePrefix]);
  
	if(deleteRows == undefined || deleteRows == null) deleteRows = true;
	var sCheckColumnName = '_chk';
	
	var dataset = this.smfFindComponentInThisContext(grid.binddataset);

	var aryInsertCount = []; //추가된 행의 갯수
	var aryUpdateCount = []; //수정된 행의 갯수

	var aryCheckedCount = []; //check된 갯수
	var aryNormalAndCheckCount = []; //normal행이 체크된갯수
	var aryInsertAndCheckCount = []; //추가행이 체크된갯수
	var aryUpdateAndCheckCount = []; //수정행이 체크된갯수

	var aryDataset = [dataset];
	for(var n=0,count=aryDataset.length; n<count; n++){
		if(n != 0) continue;//데이터셋 처음것만
		var ds = aryDataset[n];

		if(ds.getColumnInfo(0) == null || ds.getColumnInfo(0).name != "_chk"){
			this.smfDevException(this.format("Dataset 표준설정에러({0})\n삭제하려는 Dataset 0번째 컬럼은 반드시 _chk이어야 합니다.", [ds.name]));
			return false;
		}


		aryInsertCount[n] = 0;
		aryUpdateCount[n] = 0;
		aryCheckedCount[n] = 0;
		aryNormalAndCheckCount[n] = 0;
		aryInsertAndCheckCount[n] = 0;
		aryUpdateAndCheckCount[n] = 0;

		//데이터셋에
		for(var i=ds.getRowCount()-1; i>=0; i--){
			var bChecked = false;
			if("1" == ds.getColumn(i, sCheckColumnName)){
				bChecked = true;
				aryCheckedCount[n]++;
			}

			switch(ds.getRowType(i)){
				case Dataset.ROWTYPE_INSERT:
					aryInsertCount[n]++;
					if(bChecked) aryInsertAndCheckCount[n]++;
					break;
				case Dataset.ROWTYPE_UPDATE:
					if(this.smfIsUpdateRow(ds, i)){
						if(! bChecked) aryUpdateCount[n]++;
						else aryUpdateAndCheckCount[n]++;
					}else{
						if(bChecked) aryNormalAndCheckCount[n]++;
					}
					break;
			 }
		}

		// 삭제될 내역이 없는 경우는 false
		if(aryCheckedCount[n] == 0){
		
			this.smfLiteralAlert(this.format("{0}할 데이터를 체크하세요", [messagePrefix]));
			return false;
		}
	}

	var bShowDeleteMessage = true;
	var bShowConfirmModify = false;

	for(var n=0,count=aryDataset.length; n<count; n++){
		//insert한행만 선택해서 삭제하는경우
		if(aryCheckedCount[n] != aryInsertAndCheckCount[n]){
			bShowDeleteMessage = false;
		}

		//insert 또는 update한 행을 check한경우
		if(aryInsertAndCheckCount[n] > 0 || aryUpdateAndCheckCount[n] > 0){
			bShowConfirmModify = true;
		}

		//
		if(aryNormalAndCheckCount[n] > 0 &&( aryInsertCount > 0 || aryUpdateCount > 0)){
			bShowConfirmModify = true;
		}
	}

	if(bShowDeleteMessage){
		for(var n=0,count=aryDataset.length; n<count; n++){
			var ds = aryDataset[n];
			for(var i=ds.getRowCount()-1; i>=0; i--){
				//체크한행과 등록된행을 삭제한다.
				if("1" == ds.getColumn(i, sCheckColumnName)){
					ds.deleteRow(i);
				}
			}
		}
	
		this.smfLiteralAlert(this.format("{0}되었습니다.", [messagePrefix]));
		return false;
	} 
	
 
	if(bShowConfirmModify){
		options.needConfirm = true;
		options.confirmMessage = message + this.format("\n등록이나 수정된 데이터는 반영되지 않으며\n{0}처리만 됩니다.", [messagePrefix]);
		options.deleteRows = function(){
			if(deleteRows)this.smfDeleteCheckedRows(dataset);

			//등록한 행도 모두 지운다.
			for(var i=dataset.rowcount-1; i>=0; i--){
				if(dataset.getRowType(i) == Dataset.ROWTYPE_INSERT){
					dataset.deleteRow(i);
				}
			}
		};
		
		return true;
	}else{
		options.confirmMessage = message;
		options.deleteRows = function(){
			if(deleteRows) this.smfDeleteCheckedRows(dataset);
		};
		
		return true;
	}
	
	return true;
};



/**
 * 데이터셋 RowType별 procType을 리턴한다
 *
 * @param  dataset : 데이터셋
 * @param  row : rowindex
 * @return String(insert, update, delete, search)
 */
prForm.smfGetProcTypeByRowType = function(dataset, row, crudProcType){
	this.astfAssertParamValueIsDatasetType(dataset, "dataset");
	if(this.isNil(row)) row = dataset.rowposition;
	this.astfAssertParamValueIsNumberType(row, "row");
	
	//crud
	if(this.isNil(crudProcType)) crudProcType = ["insert", "search", "update", "delete"];
	
	var rowType = dataset.getRowType(row);
	switch(rowType){
		case Dataset.ROWTYPE_INSERT: return crudProcType[0];
		case Dataset.ROWTYPE_UPDATE: return crudProcType[2];
		case Dataset.ROWTYPE_DELETE: return crudProcType[3];
		default: return crudProcType[1];
	}
};



/**
 * context에서 관리하는 dataset목록을 리턴한다
 *
 * @param  context : 컨텍스트(this)
 * @return Array<Dataset>
 */
prForm.smfGetDatasetsFrom = function(context){
	var datasets = [];
	for(var i in context){
		var property = context[i];
		if(property instanceof nexacro.Dataset){
			datasets.push(property);
		}
	}
	
	return datasets;
};





/**
 * 조회조건에서 enter(키보드엔터)키를 누르면 조회버튼 클릭을 수행한다
 *
 * @param  container 조회조건 컨테이너
 * @param  searchButton 조회버튼
 * @return void
 */
prForm.smfBindEnterKeyToSearch = function(container, searchButton){
	this.astfIsContainerComponentType(container, "container");
    this.astfAssertParamInstanceofType(searchButton, "searchButton", nexacro.Button, "Button");
	
	this.smfBindEventToInputs(container, 'onkeyup', 
		function(component){
			if(searchButton == component) return false;
			
			return this.isNotNil(component.setFocus);
		},
 
		function(obj, e){	
			if(e.keycode == 13 && e.ctrlkey == true ){
				searchButton.click();
			}
		}
	);
};

/**
 * container에 소속된 컴포넌트에 event를 일괄 부여한다
 *
 * @param  container 조회조건 컨테이너
 * @param  eventName 이벤트명
 * @param  filter 필터
 * @param  event 이벤트함수
 
 * @param  searchButton 조회버튼
 * @return void
 */

prForm.smfBindEventToInputs = function(container, eventName, filter, event){
	this.smfTravelComponents(container, function (component, fnc, nLvl){
		if(! filter.call(this, component)) return;
		
		component.addEventHandler(eventName, event, this);
	});
};






/**
 * 낱말의 마지막 글자에 받치이 있는지 여부를 얻는다
 * 한글만 사용하며, 영문은 정상 작동하지 않는다
 * @param  word
 * @return boolean
 */
prForm.smfHasLastConsonantIn = function(word){

	var lastChar = word.charAt(word.length - 1);
	// finalChrCode
	if(this.In(lastChar, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])){
		// 마지막이 숫자이면 숫자의 조사를 얻어야 한다
		var numberNames = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
		word = numberNames[parseInt(lastChar)];
	}
	
	
	// ()내용은 제거한다 -> 
	// 년도(2021부터) -> 년도 = 는
	word = word.replace(/(\()(.*)?(\))/g, "");
	var finalChrCode = word.charCodeAt(word.length - 1);

	
	// 0 = 받침 없는, 그 외 받침 있음
	var finalConsonantCode  = (finalChrCode - 44032) % 28;
	
	return finalConsonantCode != 0;
};

/**
 * 낱말의 조사를 얻는다
 *
 * @param  container 조회조건 컨테이너
 * @param  postPositionOflastConsonant 받침이 있는 조사 : 기본 은
 * @param  postpositionOfAVowel 받침이 없는 조사 : 기본 는
 * @return 조사
 */
prForm.smfGetPostPositionOf = function(word, postPositionOflastConsonant, postpositionOfAVowel){
	// 받침이 있는 낱말의 조사
	postPositionOflastConsonant = postPositionOflastConsonant || "은";
	// 받침이 없는 낱말의 조사
	postpositionOfAVowel = postpositionOfAVowel || "는";
	
	if(this.smfHasLastConsonantIn(word)){
		return postPositionOflastConsonant;
	}else{
		return postpositionOfAVowel;
	}
};


/**
 * 낱말(혹은 메시지)에 조사를 추가한다
 *
 * @param  container 조회조건 컨테이너
 * @param  postPositionOflastConsonant 받침이 있는 조사 : 기본 은
 * @param  postpositionOfAVowel 받침이 없는 조사 : 기본 는
 * @return 낱말+조사
 */
prForm.smfGetWordWithPostPosition = function(word, postPositionOflastConsonant, postpositionOfAVowel){
	// 받침이 있는 낱말의 조사
	postPositionOflastConsonant = postPositionOflastConsonant || "은";
	// 받침이 없는 낱말의 조사
	postpositionOfAVowel = postpositionOfAVowel || "는";

	var wordWithPostPosition = word + this.smfGetPostPositionOf(word, postPositionOflastConsonant, postpositionOfAVowel);
	
	return wordWithPostPosition;
};


/**
 * 서비스에 해당하는 컴포넌트를 초기화한다
 * 그리드와 연결된 데이터셋은 clearData를 호출한다
 * 그리드는 nodatatext를 '데이터를 조회하십시오'라고 설정한다
 * 페이징처리 데이터셋은 페이지컴포넌트를 초기하고
 * 페이징처리 데이터셋은 const columnd을 기준으로 데이터를 리셋한다
 * 
 * @param  serviceId
 * @return void
 */
prForm.smfClearDataByService = function(serviceId){
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	var grids = this.smfFindGridsByServiceId(serviceId);	
 

	
	var grids = this.smfFindGridsByServiceId(serviceId);
	for(var i=0,size=grids.length; i<size; i++){
		var grid = grids[i];
		this.smfClearGridData(grid);
		
		// todo : 페이지정보를 클리어해야 한다
		
		if(this.isNil(grid.smfPaging)) continue;
		
		// comp_page의 fnInit참조
		var paging = grid.smfPaging;
		var dsPageInfo = paging.dsPageInfo;
		dsPageInfo.setColumn(0, "pageIndex", dsPageInfo.getConstColumn("initPageIndex"));
		dsPageInfo.setColumn(0, "pageSize", dsPageInfo.getConstColumn("initPageSize"));
		dsPageInfo.setColumn(0, "totalCount", "");
		paging.divPageInfo.fnClear(paging.divPageInfo);
	}
};


/**
 * 첫번째 속성명칭을 얻는다
 * 
 * @param  obj
 * @param  invalid
 * @return void
 */
prForm.smfFirstAttributeNameOfObject = function(obj){
	for(var attributeName in obj){
		return attributeName;
	}
	
	return;
};

/**
 * dsService의 데이터셋 정보를 Array형태로 얻는다
 * 
 * @param  datasetExpression
 */
prForm.smfGetPairDatasets = function(datasetExpression){
	var result = [];
	
	datasetExpression = datasetExpression.replace("  ", " ");
	var splitedInDatasets = datasetExpression.split(" ");
	var splitedInDatasets = datasetExpression.split(" ");
	for(var i in splitedInDatasets){
		// main=dsMain:U
		var frontendAndBackendDatasetName = splitedInDatasets[i];
		var aryDataset = frontendAndBackendDatasetName.split("=");
		var leftDatasetName = aryDataset[0];
		var rightDatasetName = aryDataset[1];
		var rightDatasetOption = ""; // N, U, D
		if(rightDatasetName.indexOf(":") != -1){ 
			rightDatasetName = rightDatasetName.substring(0, rightDatasetName.indexOf(":"));
			rightDatasetOption = rightDatasetName.substring(rightDatasetName.indexOf(":")+1);
		}

		result.push({
			leftDatasetName : leftDatasetName,
			leftDataset: this.lookup(leftDatasetName),

			rightDatasetName : rightDatasetName,
			rightDataset: this.lookup(rightDatasetName),
			rightDatasetOption : rightDatasetOption,
		});
	}
	
	return result;
};



/**
 * Dataset의 rowType 변경없이 데이터셋의 값을 갱신한다
 * 
 * @param  ds 데이터셋
 * @param  fncUpdate 함수
 */
prForm.smfUpdateDatasetWithoutRowTypeChange = function(ds, fncUpdate){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	this.astfAssertParamValueIsFunctionType(fncUpdate, "fncUpdate");

	var updatecontrol = ds.updatecontrol;
	try{
		ds.set_updatecontrol(false);
		fncUpdate.call(this, ds);		
	} catch(e)
	{
		trace("처리중 에러가발생했습니다.");
	}finally{
		ds.set_updatecontrol(updatecontrol);
	}
};

/**
 * Dataset의 rowType 변경없이 데이터셋 row 값을 갱신한다
 * 
 * @param  ds 데이터셋
 * @param  fncUpdate 함수
 */
prForm.smfUpdateDatasetRowWithoutRowTypeChange = function(ds, rowIndex, values){
	this.astfAssertParamValueIsDatasetType(ds, "ds");
	this.astfAssertParamValueIsNumberType(rowIndex, "rowIndex");
	this.astfAssertParamValueIsNumberType(values, "values");
	
	this.smfUpdateDatasetWithoutRowTypeChange(ds, function(){
		for(var columnName in values){
			ds.setColumn(rowIndex, columnName, values[columnName]);
		}
	});
};


/**
 * 포커스를 두는 함수. 주로 alert의 콜백처리시 사용
 * 
 * @param  ds 데이터셋
 * @param  fncUpdate 함수
 */
prForm.smfSetFocusFunction = function(component){
	this.astfAssertParamValueIsInputComponentType(component, "component");

	return function(){
		component.setFocus();
	};
};

/**
 * 현재 function context가 form onload인지 여부 확인
 */
prForm.smfIsOnloadEventInThisFunctionContext = function(){
    var callStackTraceList = this.astfGetCallerList();
    var reversedCallStackTraceList = callStackTraceList.reverse();
	
	for(var i in reversedCallStackTraceList){
		var caler = reversedCallStackTraceList[i];
		if(! caler.arguments) continue;
		
		if(caler.arguments[1] instanceof nexacro.LoadEventInfo){
			return true;
		}
	}
	
	return false;
};

/**
 * [모바일] 모바일 체크
 * @param : N/A
 * @return (N | M) / Y
 */ 
prForm.smfIsMobile = function()
{
	if ( nexacro.getEnvironmentVariable("ev_isMobile") == "Y" || nexacro.getEnvironmentVariable("ev_isMobile") == "M"){
		return true;
	}
	return false;
};



/**
 * {separator}로 구분된 표현식(문자열)을 List(Array)로 변환한다
 */
prForm.smfExpressionToList = function(expression, separator){
	this.astfAssertParamValueIsStringType(expression, "expression");
	this.astfAssertParamValueIsStringType(separator, "separator");

	var result = expression.split(separator);

	var needTrim = expression.indexOf(" ") != -1;
	if(needTrim){
		for(var i in result){
			result[i] = this.smfStr(result[i]).trim();
		}
	}

	return result;
};


/**
 * List(Array)를 표현식으로 변환한다
 */
prForm.smfListToExpression = function(list, separator){
	this.astfAssertParamValueIsArrayType(list, "list");
	return list.join(separator);
};

prForm.smfHasElementOfList = function(element, list){
	return list.indexOf(element) != -1;
};

prForm.smfInsertElementToList = function(element, list, index){
	this.astfAssertParamValueIsArrayType(list, "list");
	if(this.isNil(index)) index = -1;
	
	
	// 이미 있으면 제거한다
	// 제거하고 다시 등록하는 이유는
	// 원하는 index로 등록하기 위해서
	var elementIndex = list.indexOf(element);
	if(elementIndex != -1){
		list.splice(elementIndex, 1);
	}
	
	if(index == -1 || list.length < index){
		list.push(element);
	}else{
		list.splice(index, 0, element);
	}
};

prForm.smfRemoveElementFromList = function(element, list){
	this.astfAssertParamValueIsArrayType(list, "list");
	
	var elementIndex = list.indexOf(element);
	if(elementIndex != -1){
		list.splice(elementIndex, 1);
		return elementIndex;
	}
	return -1;	
};



/**
 * 페이지네이터를 기준으로 페이징처리 에그리거트를 얻는다
 *
 * 접미어 시퀀스를 기준으로 
 * 페이지네이터, 페이지요약, 페이지인포데이터셋 3개를 그룹으로 엮는다
 * 예) divPaginator -> divPaginator, divPageSummary, dsPageInfo
       divPaginator2 -> divPaginator2, divPageSummary2, dsPageInfo2
 */
prForm.smfGetPaginatorAggregateByNamingRule = function(container, suffixSequence){
	this.astfAssertParamValueIsFormOrContainerComponentType(container, "container");
	suffixSequence = this.smfStr(suffixSequence);

	var paginationAggregate = {
		// 페이지정보 데이터셋
		dsPageInfo: null,
		// 페이지 요약 DIV
		pageSummary: null,
		// 페이지네이터 DIV
		paginator: null,
	};
	
	var all = container.all;
	if(! all) all = container.form.all;
	
	var suffix = suffixSequence;//this.smfSuffixNumberSequence(this.name);
	var paginatorName = "divPaginator" + suffix;
	var pageSummaryName = "divPageSummary" + suffix;
	var dsPageInfoName = "dsPageInfo" + suffix;
	
	// 같은 parent에서 찾는다
	paginationAggregate.paginator = all[paginatorName];
	paginationAggregate.pageSummary = all[pageSummaryName];
	
	// 페이지네이터의 Form을 찾는다
	if(container == this){
		var parentForm = this;
	}else{
		var parentForm = this.smfParentForm(this);
	}
	paginationAggregate.dsPageInfo = parentForm.all[dsPageInfoName];
	
	return paginationAggregate;	
};


/**
 * value의 타입을 얻는다
 * 넥사크로 컴포넌트면 넥사크로 컴포넌트명을 리턴한다
 * 그 외는 typeof value를 리턴
 *
 * @param  obj
 * @return string
 */
prForm.smfGetObjectTypeName = function(value){
    if("_type_name" in value && "name" in value && "set_name" in value){
        return value._type_name;
    }else{
        return typeof value;
    }
};


/**
 * 화면호출LOG를 서버로 전송한다
 * @param  obj  전송정보
 */
prForm.smfSendScreenLog = function(objParam)
{

	var sServiceId = "insertMenuHstr";
	// 서비스용 데이터셋을 생성
	var sServiceDsId = "dsService";
	var objServiceDs = this[sServiceDsId];
	if(!objServiceDs)
	{
		// 생성하고 부모에 추가한다.
		objServiceDs = new Dataset(sServiceDsId);
		this.addChild(sServiceDsId,objServiceDs);
	}
	
	// 컬럼을 정의한다.
	if(objServiceDs.getColumnInfo("id"             )   == null) objServiceDs.addColumn("id"               , "string");
	if(objServiceDs.getColumnInfo("inDatasets"     )   == null) objServiceDs.addColumn("inDatasets"       , "string");
	if(objServiceDs.getColumnInfo("outDatasets"    )   == null) objServiceDs.addColumn("outDatasets"      , "string");
	if(objServiceDs.getColumnInfo("url"            )   == null) objServiceDs.addColumn("url"              , "string");
	if(objServiceDs.getColumnInfo("bindingControls")   == null) objServiceDs.addColumn("bindingControls"  , "string");
	if(objServiceDs.getColumnInfo("asynctp"        )   == null) objServiceDs.addColumn("asynctp"          , "string");
	
	// 해당 서비스아이디가 없을 경우
	if(objServiceDs.findRow("id",sServiceId) < 0)
	{
		var nRow1 = objServiceDs.addRow();
		
		objServiceDs.setColumn(nRow1,"id"             ,sServiceId           );
		objServiceDs.setColumn(nRow1,"inDatasets"     ,"dsMain=_dsMain"     );
		objServiceDs.setColumn(nRow1,"outDatasets"    ,""                   );
		objServiceDs.setColumn(nRow1,"url"            ,"pas_mms_sv01_001.do");
		objServiceDs.setColumn(nRow1,"asynctp"        ,"true"               );			
	}
	
	
	// 서비스용 데이터셋을 생성
	var sInDsId = "_dsMain";
	var objInDs = this[sInDsId];
	if(!objInDs)
	{
		// 생성하고 부모에 추가한다.
		objInDs = new Dataset(sInDsId);
		this.addChild(sInDsId,objInDs);
		
		// 컬럼을 정의한다.
		objInDs.addColumn("cntnDvcsClfCd"  , "string");
		objInDs.addColumn("pafrSysClfCd"   , "string");
		objInDs.addColumn("pafrSysSubCd"   , "string");
		objInDs.addColumn("menuUrlAddr"    , "string");
		objInDs.addColumn("cntnBrwsrNm"    , "string");
		objInDs.addColumn("cddcCd"         , "string");
		objInDs.addColumn("menu1Lvl"       , "string");
		objInDs.addColumn("menu2Lvl"       , "string");
		
		objInDs.addRow();
	}
	
	// 데이터셋에 값을 설정
	var nRow = 0;
	var sCntnDvcsClfCd = this.smfIsMobile()?"30":"10";
	var sBrowserName = system.navigatorname;  // "Edge" "Chrome" "nexacro" "IE"
	
	objInDs.setColumn(nRow,"cntnDvcsClfCd",sCntnDvcsClfCd         ); // 접속디바이스분류코드(pc:10, 모바일:30)
	objInDs.setColumn(nRow,"pafrSysClfCd" ,objParam.pafrSysClfCd  ); // 대국민시스템분류코드
	objInDs.setColumn(nRow,"pafrSysSubCd" ,objParam.pafrSysSubCd  ); // 대국민시스템서브코드
	objInDs.setColumn(nRow,"menuUrlAddr"  ,objParam.menuUrlAddr   ); // 메뉴URL주소
	objInDs.setColumn(nRow,"cddcCd"       ,objParam.cddcCd        ); // 시도교육청
	objInDs.setColumn(nRow,"menu1Lvl"     ,objParam.menu1Lvl      ); // 메뉴1레벨
	objInDs.setColumn(nRow,"menu2Lvl"     ,objParam.menu2Lvl      ); // 메뉴2레벨
	objInDs.setColumn(nRow,"cntnBrwsrNm"  ,sBrowserName           ); // 접속브라우저명
	
	// callback용 함수 작성
	var objCallbackFunc = this["fnTransCallback"];
	if(!objCallbackFunc)
	{
		this.fnTransCallback = function(){};
	}
	
	// 서버에 서비스를 요청
	this.smfSaveService(sServiceId)
	.showConfirm(false)
	.run()
	.callback(function(callbackParams){
		if(callbackParams.errors) return;
	});
	
}
/**
 * 로그인LOG를 서버로 전송한다
 * @param  obj  전송정보
 */
prForm.smfSendLoginLog = function(objForm,sLgnTypCd)
{

	var sServiceId = "insertLgnHstr";
	var sInDsId = "_dsMainLogin";
	// 서비스용 데이터셋을 생성
	var sServiceDsId = "dsService";
	var objServiceDs = this[sServiceDsId];
	if(!objServiceDs)
	{
		// 생성하고 부모에 추가한다.
		objServiceDs = new Dataset(sServiceDsId);
		this.addChild(sServiceDsId,objServiceDs);
	}
	
	// 컬럼을 정의한다.
	if(objServiceDs.getColumnInfo("id"             )   == null) objServiceDs.addColumn("id"               , "string");
	if(objServiceDs.getColumnInfo("inDatasets"     )   == null) objServiceDs.addColumn("inDatasets"       , "string");
	if(objServiceDs.getColumnInfo("outDatasets"    )   == null) objServiceDs.addColumn("outDatasets"      , "string");
	if(objServiceDs.getColumnInfo("url"            )   == null) objServiceDs.addColumn("url"              , "string");
	if(objServiceDs.getColumnInfo("bindingControls")   == null) objServiceDs.addColumn("bindingControls"  , "string");
	if(objServiceDs.getColumnInfo("asynctp"        )   == null) objServiceDs.addColumn("asynctp"          , "string");
	
	// 해당 서비스아이디가 없을 경우
	if(objServiceDs.findRow("id",sServiceId) < 0)
	{
		var nRow1 = objServiceDs.addRow();
		
		objServiceDs.setColumn(nRow1,"id"             ,sServiceId           );
		objServiceDs.setColumn(nRow1,"inDatasets"     ,"dsMainCntn=" + sInDsId  );
		objServiceDs.setColumn(nRow1,"outDatasets"    ,""                   );
		objServiceDs.setColumn(nRow1,"url"            ,"pas_mms_sv00_001.do");
		objServiceDs.setColumn(nRow1,"asynctp"        ,"true"               );			
	}
	
	// 서비스용 데이터셋을 생성
	var objInDs = this[sInDsId];
	if(!objInDs)
	{
		// 생성하고 부모에 추가한다.
		objInDs = new Dataset(sInDsId);
		this.addChild(sInDsId,objInDs);
		
		// 컬럼을 정의한다.
		objInDs.addColumn("cntnDvcsClfCd"  , "string"); // 접속디바이스분류코드(pc:10, 모바일:30)
		objInDs.addColumn("pafrSysClfCd"   , "string"); // 대국민시스템분류코드
		objInDs.addColumn("pafrSysSubCd"   , "string"); // 대국민시스템서브코드
		objInDs.addColumn("lgnTypCd"       , "string"); // 로그인 유형코드
		objInDs.addColumn("cddcCd"         , "string"); // 교육청 코드
		
		objInDs.addRow();
	}
	
	// 데이터셋에 값을 설정
	var nRow = 0;
	var sCntnDvcsClfCd = this.smfIsMobile()?"30":"10";
	var sPafrSysClfCd = this.smfNvl(this.smfGetSubSystemGb()      ,""   );
	var sPafrSysSubCd = this.smfNvl(this.smfGetSubSystemDetailGb(),"000");
	var sCddcCd       = this.smfNvl(this.smfGetCddcCode()         ,"Z000000000" );  // Z000000000 : 클라우드 대표코드
	
	objInDs.setColumn(nRow,"cntnDvcsClfCd",sCntnDvcsClfCd         ); // 접속디바이스분류코드(pc:10, 모바일:30)
	objInDs.setColumn(nRow,"pafrSysClfCd" ,sPafrSysClfCd          ); // 대국민시스템분류코드
	objInDs.setColumn(nRow,"pafrSysSubCd" ,sPafrSysSubCd          ); // 대국민시스템서브코드
	objInDs.setColumn(nRow,"lgnTypCd"     ,sLgnTypCd              ); // 로그인 유형코드
	objInDs.setColumn(nRow,"cddcCd"       ,sCddcCd                ); // 교육청 코드
	
	// callback용 함수 작성
	var objCallbackFunc = this["fnTransCallback"];
	if(!objCallbackFunc)
	{
		this.fnTransCallback = function(){};
	}
	
	// 서버에 서비스를 요청
	this.smfSaveService(sServiceId)
	.showConfirm(false)
	.run()
	.callback(function(callbackParams){
		if(callbackParams.errors) return;
	});
	
}