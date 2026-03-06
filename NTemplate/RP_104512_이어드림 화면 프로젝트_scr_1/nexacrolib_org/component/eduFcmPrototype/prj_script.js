/**
 * @fileoverview 프로젝트별 환경설정을 관리한다
 * 
 * @author 문호상
 * @version 1.0  버전
 */

var prForm = nexacro.Form.prototype; 

/**
 * 화면로그를 쌓기 위한 정보를 세팅한다.
 * 
 * @param  obj
 */
prForm._smfGetFormLogInfo = function(sMenuId)
{
	//this.objApp.gv_menuColumns.menuId
	var objResult = {menu0:"",menu1:"",menu2:"",pafrSysClfCd:"",pafrSysSubCd:""};
	
	if(!this.smfIsNull(sMenuId))
	{
		var arrMenuId = [];	
		var objMenuDs = this.getOwnerFrame().form.divTop.form.dsMenu;
		
		// 메뉴아이디를 구한다
		// 레벨이 0일 때까지 찾음
		while(!this.smfIsNull(sMenuId))
		{
			var nFindRow = objMenuDs.findRowNF("menuId",sMenuId); 
			
			if(nFindRow>-1)
			{
				var sLvl          = objMenuDs.getColumnNF(nFindRow,"lvl"         );
				var sMenuId       = objMenuDs.getColumnNF(nFindRow,"menuId"      );
				var sMenuNm       = objMenuDs.getColumnNF(nFindRow,"menuNm"      );
				var sParentMenuId = objMenuDs.getColumnNF(nFindRow,"parentMenuId");
				
				objResult["menu"+sLvl] = sMenuNm;
				if(sLvl=="0")
				{
					break;
				}
				
				sMenuId = sParentMenuId;
				
			}
			else
			{
				break;
			}
		}
	}
	
	objResult.pafrSysClfCd = this.smfNvl(this.smfGetSubSystemGb()      ,""   );
	objResult.pafrSysSubCd = this.smfNvl(this.smfGetSubSystemDetailGb(),"000");
	
	return objResult;
}

/**
 * this.smfInitForm 호출된 이후에 발생한다
 * 
 * @param  obj
 */
prForm.smfAfterInitForm = function(obj){
	// 
	// 페이지 변경 시 마다 Focus 위치 초기화
	if((this.getOwnerFrame().form.divTop) && (this.getOwnerFrame().form.divTop.form["btnFirstFocus"]))
	{
		this.getOwnerFrame().form.divTop.form.btnFirstFocus.setFocus();
	}

	// 화면로그를 서버에 전송 -  quickview일때는 넣지 않음
	if ( this.smfIsQuickView() == "N" )
	{
		obj._params = obj.smfGetFormParams();
		var sMenuId = obj._params.menu;
		var sUrl    = obj.parent.url;
		var objResult = obj._smfGetFormLogInfo(sMenuId);
		var sCddcCd = this.smfGetCddcCode(); 

		
		// 디지털원패스는 생략
		if((objResult.pafrSysClfCd=="PTL")   // 디지털원패스 포털
		   ||(objResult.pafrSysClfCd=="ADM")   // 디지털원패스 관리자
		   ||(objResult.pafrSysClfCd==""))     // 디지털원패스
		{
			return;
		}
		
		if(this.smfIsNull(objResult.menu0))
		{
			objResult.menu0 = obj.titletext;
		}
		// 화면호출로그를 서버로 전송한다.		
		var objParam = {     pafrSysClfCd  : objResult.pafrSysClfCd    // 대국민시스템분류코드("PAS")
						   , pafrSysSubCd  : objResult.pafrSysSubCd    // 대국민시스템서브코드("000" )
						   , cddcCd        : sCddcCd                   // 시도교육청
						   , menu1Lvl      : objResult.menu0           // 메뉴1레벨("2000")
						   , menu2Lvl      : objResult.menu1           // 메뉴2레벨("2001")
						   , menuUrlAddr   : sUrl                      // 메뉴URL주소("test::test01.xfdl" )
			   };	
		obj.smfSendScreenLog(objParam);
	}
};

/**
 * this.smfInitPopup 호출된 이후에 발생한다
 * 
 * @param  obj
 */
prForm.smfAfterInitPopup = function(obj){
 	obj._params = obj.smfGetPopupParams();
	var sMenuId = "";
	var sUrl    = obj._params._url;
	var objResult = obj._smfGetFormLogInfo(sMenuId);
	
	// 디지털원패스는 생략
	if(   (objResult.pafrSysClfCd=="PTL")   // 디지털원패스 포털
	   || (objResult.pafrSysClfCd=="ADM")   // 디지털원패스 관리자
	   || (objResult.pafrSysClfCd==""   )   // 디지털원패스
	  )
	{
		return;
	}
	
	// 예외 팝업의 종류를 지정
	var arrExceptFormUrl = [
	                         "comm::comm_alert.xfdl"      //  Alert화면
						 ,   "comm::comm_confirm.xfdl"    //  Confirm화면
	                     ];
						 
	if(arrExceptFormUrl.includes(sUrl))
	{
		return;
	}	
	
	if(this.smfIsNull(objResult.menu0))
	{
		objResult.menu0 = obj.titletext;
	}
	// 화면호출로그를 서버로 전송한다.		
	var objParam = {     pafrSysClfCd  : objResult.pafrSysClfCd    // 대국민시스템분류코드("PAS")
					   , pafrSysSubCd  : objResult.pafrSysSubCd    // 대국민시스템서브코드("000" )
					   , menu1Lvl      : objResult.menu0           // 메뉴1레벨("2000")
					   , menu2Lvl      : objResult.menu1           // 메뉴2레벨("2001")
					   , menuUrlAddr   : sUrl                      // 메뉴URL주소("test::test01.xfdl" )
		   };	
	obj.smfSendScreenLog(objParam);
};

/**
 * this.smfInitDiv 호출된 이후에 발생한다
 * 
 * @param  obj
 */
prForm.smfAfterInitDiv = function(obj){

};

// 환경설정
prForm.smvConfigurations = {
	// 폼 onload에서 오류가 발생할때 이벤트 핸들러
	formOnloadServiceErrorHandler: function(form, event){
		// onload에서 서버통신 오류가 발생하면
		// 해당 폼을 사용할수 있도록 한다
		// 모든 컴포넌트의 이벤트를 비활성화 하여
		// 오류가 발생한 화면을 사용하지 못하도록 한다
// 		form.smfTravelComponents(form, function (component, fnc, nLvl){
// 			component.set_enableevent(false);
// 			// component.set_enable(false);
// 		});
		// form.set_enableevent(false);	
	},

	// rule에 의해 컴포넌트의 css를 갱신 여부
	updateComponentCssByRules: true,


	// 필수 레이블에 *을 붙일지 여부
	addRequiredLabelToAsterisk: true,
	
	// 데이터셋 레이블 
	// 그리드의 rowType에 따라 표시되는 레이블을 설정한다
	// sm_script.smfRenderGridSeqCell에서 활용
	datasetRowTypeLabels: {
		2: "등록", // 2 = Dataset.ROWTYPE_INSERT
		4: "수정", // 4 = Dataset.ROWTYPE_UPDATE
		8: "삭제", // 8 = Dataset.ROWTYPE_DELETE
	}
};

// 표준 체크 여부
prForm.smvCheckStandards  = {
	// 컴포넌트 접두어 체크여부
	componentNameOfPrefix: true,
	
	// 컴포넌트 명명규칙 체크여부
	componenNamingRule: false,
	
	// 로컬함수 명명규칙
	localFunctionNamingRule: true,
};

prForm.smfInitCssOfComponents = function(){
	if(this.smvCsses) return this.smvCsses;

	var csses = {};	
	this.smvCsses = csses;
	
	// 모든 컴포넌트의 기본css, 필수일때css를 입력한다
	for(var componentTypeName in this.smvPrefixOfComponents){
		csses[componentTypeName] = {
			"normal": "",
			"required": "essential"
		};
	}

	// 에디트+검색버튼
	csses["Edit.Watch"] = {
		"normal": "edi_WF_Search",
		"required": "edi_WF_SearchEssential"
	};

	// Static 레이블경우
	// 레이블인 경우 top과 아닌경우로 나뉜다......

	// Top이 붙어있는 레이블의 css set
	csses["sta.label.top"] = {
		"normal": "sta_WF_Input01Top",
		"required": "sta_WF_EssentialTop"
	};

	// Top이 안붙어있는 레이블의 css set
	csses["sta.label.normal"] = {
		"normal": "sta_WF_Input01",
		"required": "sta_WF_Essential"
	};	
	
	//@KBR  조회 영역 레이블의 css set (border 없음)
	csses["sta.label.search"] = {
		"normal": "sta_WF_Searchtxt01",
		"required": "sta_WF_Essential01"		
	}
	
	return csses;
};


/**
 * 컴포넌트의 css 집합을 얻는다
 *
 */
prForm.smfGetComponentCssSet = function(component){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	
	var componentTypeName = this.smfGetComponentTypeName(component);
	
	var csses = this.smfInitCssOfComponents();
	
	// 검색 에디트
	if(component.cssclass == "edi_WF_Search" || component.cssclass == "edi_WF_SearchEssential"){
		return csses["Edit.Watch"];
	}
	
	// 레이블 컴포넌트는 아래를 사용
	if(component instanceof nexacro.Static){
		// Top가 있는 Static은 상단에 붙어있는 Label이다
		var cssClassExpression = this.smfStr(component.cssclass);
		if(cssClassExpression.indexOf("Top") != -1){
			var cssSetOfComponent = csses["sta.label.top"];
		}else{
		
			//@KBR 조회 영역에 사용되는 css 구분을 위해 if 조건절 추가.
			if(component.cssclass == "sta_WF_Searchtxt01" || component.cssclass == "sta_WF_Essential01"){
				var cssSetOfComponent = csses["sta.label.search"];
			}else{
				var cssSetOfComponent = csses["sta.label.normal"];
			}			
		}
		
		return cssSetOfComponent;
	}
	
	// 그 외 일반적인 컴포넌트의 css set 리턴
	return csses[componentTypeName];
};


/**
 * 값이 array대상 값에 포함되는지 확인한다
 * @return : boolean
 */
prForm.smfGetCdcValueUrl = function(){
	return "";
};


prForm.smfGetCssClass = function(component){	
	this.astfAssertParamValueIsInputComponentType(component, "component");
	
	return component.cssclass;
};

prForm.smfSetCssClass = function(component, cssclass){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsStringType(cssclass, "cssclass");
	component.set_cssclass(cssclass);
};



prForm.smfGetEnable = function(component){	
	this.astfAssertParamValueIsInputComponentType(component, "component");
	return component.enable;
};

prForm.smfSetEnable = function(component, enabled){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsBooleanType(enabled, "enabled");
	component.set_enable(enabled);
};


/**
 * 컴포넌트의 readonly 설정
 */
prForm.smfGetReadonly = function(component){	
	this.astfAssertParamValueIsInputComponentType(component, "component");
	return component.readonly;
};

/**
 * 컴포넌트의 readonly 설정
 */
prForm.smfSetReadonly = function(component, readonly){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsBooleanType(readonly, "readonly");
	component.set_enable(readonly);
};

/**
 * 컴포넌트의 visible 얻는다
 */
prForm.smfGetVisible = function(component){	
	this.astfAssertParamValueIsInputComponentType(component, "component");
	return component.visible;
};

/**
 * 컴포넌트의 visible 설정
 */
prForm.smfSetVisible = function(enabled, component){
	this.astfAssertParamValueIsBooleanType(enabled, "enabled");
	this.astfAssertParamValueIsInputComponentType(component, "component");
	component.set_visible(enabled);
};


/**
 * 컴포넌트의 css가 필수로 설정되어있는지 여부를 얻는다
 */
prForm.smfGetRequiredCss = function(component){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	
	var cssSetOfComponent = this.smfGetComponentCssSet(component);	
	var cssClssList = this.smfExpressionToList(component.cssclass, ",");
	
	return cssClssList.indexOf(cssSetOfComponent['required']) != -1;
};


/**
 * 컴포넌트의 필수(true/false)여부를 css를 설정한다
 */
prForm.smfSetRequiredCss = function(component, isRequired){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsBooleanType(isRequired, "isRequired");

	
	// string -> array
	var cssClssList = this.smfExpressionToList(component.cssclass, ",");

	// 컴포넌트 타입에 해당하는 css 셋을 얻는다
	var cssSetOfComponent = this.smfGetComponentCssSet(component);	
		
	var requiredClassName = cssSetOfComponent['required'];
	var normalClassName = cssSetOfComponent['normal'];
	
	if(isRequired){
		// normal 제거
		this.smfRemoveElementFromList(normalClassName, cssClssList);
		// required 추가
		this.smfInsertElementToList(requiredClassName, cssClssList);
	}else{
		// normal 추가
		this.smfRemoveElementFromList(requiredClassName, cssClssList);
		// required 제거
		this.smfInsertElementToList(normalClassName, cssClssList);
	}

	// cssclass 재설정
	var cssClassNames = this.smfListToExpression(cssClssList, ",");
	component.set_cssclass(cssClassNames);
};


/**
 * 컴포넌트의 필수(true/false)여부를 얻는다
 */
prForm.smfGetRequired = function(component){
	return this.smfGetRequiredCss(component);
};


/**
 * 컴포넌트의 필수(true/false)여부를 css를 설정한다
 */
prForm.smfSetRequired = function(component, isRequired){
	if(! this.smvConfigurations.updateComponentCssByRules) return;
	
	// updatecssbyrules속성이 "false"로 지정되어있으면 
	// css를 갱신하지 않는다
	if(component.updatecssbyrules == "false") return;

	this.smfSetRequiredCss(component, isRequired);	
	
	// 컴포넌트에 samelabelcss가 false로 지정되어있으면
	// 레이블에 css를 동기화 하지 않는다
	if((component.samelabelcss == false)||(component.samelabelcss == "false")) return;
	//if( component.samelabelcss == false) return;
	
	var labelComponent = this.smfGetLabelComponentOf(component);
	if(labelComponent){
		// css 갱신
		this.smfSetRequiredCss(labelComponent, isRequired);	
		// 레이블 컴포넌트에 *을 붙인다
		this.smfSetMarkLabelComponentWithAsterisk(labelComponent, isRequired);
	}
};




/**
 * 공통코드조회
 *
 * @param  serviceId : callback함수에서 받을 서비스명
 * @param  aryDataset : 공통코드로 넘길 Array 데이터셋
 * @return void
 * @see    smfCodeList('code', [dsSchulCrseScCode, dsSchulFaScCode, dsSchulGrgdScCode, dsSchulKndScCode]);
 */
prForm.smfCodeList = function(serviceId, aryDataset){
	////////////////////////검증//////////////////////////////
	if(this.isNil(serviceId)){
		this.smfDevException("serviceId를 입력하세요.");
		return false;
	}
	serviceId = this.smfStr(serviceId);
	if(serviceId.indexOf("code") != 0){
		this.smfDevException("serviceId를 'code'로 시작하세요.\n예)code, code01, code02...");
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
			if(this.notIn(sConstId, ["FirstCode", "ClfCdValue", "FilterExpr", "UnyCdGrpId", "BfrClfCdValue", 
			  "UserDfnCd1Value", "UserDfnCd2Value", "UserDfnCd3Value", "UserDfnCd4Value", "UserDfnCd5Value", 
			  "UpClfCdValue", "UpUnyCdValue", ])){
				sMessage += this.format("{0}.ConstColumns[{1}]({2}) 항목은 잘못된이름입니다.\n", [ds.name, n, sConstId]);
			}
		}
		if(this.isNil(ds.getConstColumn("ClfCdValue"))){
			sMessage += this.format("{0}.ClfCdValue는 분류코드값을 입력하세요.\n", [ds.name]);
		}

		if("" != sMessage){
			this.smfDevException(sMessage);
			return false;
		}
	}

	////////////////////////검증끝//////////////////////////////
	
	var fullurl = this.smfStr(this.smfMenuForm(this).getOwnerFrame().formurl);
	fullurl = fullurl.substring(0, fullurl.lastIndexOf("."));
	
	var formName = this.name;
	
	// local에서 실행
	//if(this.smfContainsStr(fullurl, "/")){
	//	formName = fullurl.substring(fullurl.lastIndexOf("/")+1);
	//}else{
	//	formName = fullurl.substring(fullurl.lastIndexOf(".")+1);
	//}
	
	var _dsCodeList = this.smfGetOrCreateDataset('_dsCodeList');
	_dsCodeList.clear();
	_dsCodeList.addColumn("pgeId", "string");
	_dsCodeList.addColumn("clfCdValue", "string");
	_dsCodeList.addColumn("unyCdGrpId", "string");
	_dsCodeList.addColumn("bfrClfCdValue", "string");
	_dsCodeList.addColumn("userDfnCd1Value", "string");
	_dsCodeList.addColumn("userDfnCd2Value", "string");
	_dsCodeList.addColumn("userDfnCd3Value", "string");
	_dsCodeList.addColumn("userDfnCd4Value", "string");
	_dsCodeList.addColumn("userDfnCd5Value", "string");
	_dsCodeList.addColumn("upClfCdValue", "string");
	_dsCodeList.addColumn("upUnyCdValue", "string");
	
	// 전송할 input을 생성한다.
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		
		var pgeId = formName;
		var clfCdValue = ds.getConstColumn("ClfCdValue");
		var unyCdGrpId = ds.getConstColumn("UnyCdGrpId");
		var bfrClfCdValue = ds.getConstColumn("BfrClfCdValue");
		var userDfnCd1Value = ds.getConstColumn("UserDfnCd1Value");
		var userDfnCd2Value = ds.getConstColumn("UserDfnCd2Value");
		var userDfnCd3Value = ds.getConstColumn("UserDfnCd3Value");
		var userDfnCd4Value = ds.getConstColumn("UserDfnCd4Value");
		var userDfnCd5Value = ds.getConstColumn("UserDfnCd5Value");
		var upClfCdValue = ds.getConstColumn("UpClfCdValue");
		var upUnyCdValue = ds.getConstColumn("UpUnyCdValue");
		
		var nRow = _dsCodeList.addRow();
		_dsCodeList.setColumn(nRow, "pgeId", pgeId);
		_dsCodeList.setColumn(nRow, "clfCdValue", clfCdValue);
		_dsCodeList.setColumn(nRow, "unyCdGrpId", unyCdGrpId);
		_dsCodeList.setColumn(nRow, "bfrClfCdValue", bfrClfCdValue);
		_dsCodeList.setColumn(nRow, "userDfnCd1Value", userDfnCd1Value);
		_dsCodeList.setColumn(nRow, "userDfnCd2Value", userDfnCd2Value);
		_dsCodeList.setColumn(nRow, "userDfnCd3Value", userDfnCd3Value);
		_dsCodeList.setColumn(nRow, "userDfnCd4Value", userDfnCd4Value);
		_dsCodeList.setColumn(nRow, "userDfnCd5Value", userDfnCd5Value);
		_dsCodeList.setColumn(nRow, "upClfCdValue", upClfCdValue);
		_dsCodeList.setColumn(nRow, "upUnyCdValue", upUnyCdValue);
	}
	
// 	
// 	for(var i=0,size=aryDataset.length; i<size; i++){
// 		var ds = aryDataset[i];
// 
// 		//clsfCode 값 세팅
// 		var sClsfCode = this.smfStr(ds.getConstColumn("clsfCode"));
// 		if(sClsfCode.indexOf("eval:") == 0){
// 			sClsfCode = this.myeval(sClsfCode.substr(5, 999));
// 		}
// 		_dsCodeList.setColumn(0, "clsfCode"+(i), sClsfCode);
// 
// 		//userDfnSet 값 세팅
// 		var sUserDfnSet = this.smfStr(ds.getConstColumn("userDfnSet"));
// 		if(sUserDfnSet.indexOf("eval:") == 0){
// 			sUserDfnSet = this.myeval(sUserDfnSet.substr(5, 999));
// 		}
// 		_dsCodeList.setColumn(0, "userDfnSet"+(i), sUserDfnSet);
// 	}

	if(this.dsService.findRow("id", serviceId) > -1){
		var nDeleteRow = this.dsService.findRow("id", serviceId);
		this.dsService.deleteRow(nDeleteRow);
	}

	//dsService에 설정
	var nSrvRow = this.dsService.addRow();
	var sOutDatasets = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		sOutDatasets += ds.name + "="+"clfCd"+i+ " ";
	}

	var sBindingCtrls = "";
	for(var i=0,size=aryDataset.length; i<size; i++){
		var ds = aryDataset[i];
		if(this.isNil(ds.getConstColumn("FirstCode"))) continue;
		sBindingCtrls += " " + ds.name + "=" + ds.getConstColumn("FirstCode");
	}

	return this.smfDynService(serviceId, {
			url: "/tmp_tmp_tm00_000.do",
			inDatasets: "clfCdList=" + _dsCodeList.name,
			outDatasets: sOutDatasets,
			bindingControls: nexacro.trim(sBindingCtrls)
		})
		;
};




/**
 * (공통만 사용)
 * transaction 메세지
 * @param : 없음
 * @return : N/A
 * @example : smfLoadMessage();
 */
prForm.smfLoadMessage = function() {
	//return;
	if(nexacro.getApplication().gdsMessage.rowcount != 0) return;

	
	var _dsBackendMessage = this.smfGetOrCreateDataset("_dsBackendMessage");
	_dsBackendMessage.addColumn("messageId");
	_dsBackendMessage.addColumn("messageCn");
	_dsBackendMessage.useclientlayout = true;

	return this.smfDynService("listBackendMessage", {
			url: "/edu/intelliframe/core/web/getMessageInitAll.do",
			inDatasets: "",
			outDatasets: "_dsBackendMessage=messages",
			bindingControls: "",
		})
		.run()
		.callback(function(callbackParams){
			try{
				if(callbackParams.errors){
					alert("/edu/intelliframe/core/web/getMessageInitAll.do 를 서버에서 찾을 수 없다면\n"
						 +"해당 프로젝트의(edu.neis.cm, ga, sw등..) pom.xml에 edu.intelliframe.core 2.0.4으로 (2022.06.14 기준 혹은 그 이상) 설정되어있는지 확인하시기 바랍니다\n\n"
						 +"pom.xml\n"
						 +"		<!-- 지능형 4세대 프레임워크 -->\n"
						 +"	    <dependency>\n"
						 +"		  <groupId>edu</groupId>\n"
						 +"		  <artifactId>edu.intelliframe.core</artifactId>\n"
						 +"		  <version>2.0.4-SNAPSHOT</version>\n"
						 +"		</dependency>\n"
					);
					return;
				}
			
			
				nexacro.getApplication().gdsMessage.assign(this._dsBackendMessage);			
			}catch(e){
				this.trace(e);
			}finally{
				try{
					//this.removeChild(_dsBackendMessage.name);
					//_dsBackendMessage.destroy();
				}catch(e2){
					this.trace(e2);
				}
			}
		})
		;
};
