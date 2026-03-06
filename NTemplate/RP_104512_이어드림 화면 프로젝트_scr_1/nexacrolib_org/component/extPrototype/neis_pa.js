/**
*  나이스 대국민 공통
*  @FileName 	neis_pa.js 
*  @Creator 	consulting
*  @CreateDate 	2022.05.18
*  @Desction   	대국민 공통
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2022.05.18     	consulting 	                최초 생성 
*******************************************************************************
*/
var prForm = nexacro.Form.prototype;

/************************************************************************************************
* 나이스 대국민 공통 기능
************************************************************************************************/

/**
 * @class  alphabet character code.
 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
*/
prForm._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
prForm.fv_isMobile = false;
prForm.fv_device = "pc";
prForm.fv_DIV_MARGIN = 15;
//prForm.fv_DIV_MARGIN = 2;
//@KBR fv_FORM_MARGIN :: divWork divmargin속성 초기값
prForm.fv_FORM_MARGIN = 90;

prForm.topInfo = [];
prForm.DownAmount = -120;
prForm.UpAmount = 120;
prForm.nStep = 0;
prForm.Aniduration = 600;
prForm.easing = "easeoutquad";
//대국민 포탈 메인 공지사항 갯수 체크
prForm.maxNoticeStep = 10;

prForm.nWidth = 299;

prForm.MMenuTop = 96;
/**
 * class Dataset에 설정된 정합성체크 RuleSet을 Clear한다.
 * @param {Dataset} obj - 데이터셋 Object
 * @return N/A
 */  
prForm.smfGetFormParams = function()
{
	return this.getOwnerFrame().form.fv_workPageParams;
};

/**
 * UniqueID를 구한다
 * @param {String} prefix - prefix
 * @param {String} separator - 구분자
 * @return N/A
 */  
prForm.smfGetUniqueId = function(prefix, separator)
{
	if ( this.smfIsNull(prefix) ) prefix = "";
	if ( this.smfIsNull(separator) ) {
		separator = 45;
	} else {
		separator = separator.charCodeAt(0);
	}
	
	var pThis = this,
		charcode = this._ALPHA_CHAR_CODES,
		math = Math;
	var seq = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;
	
	while (seq < 8) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3) 
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4) 
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"
	
	var tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8) 
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
};

/**
 * 시스템코드를 가져온다(대국민은 "PA")
 * @return N/A
 */ 
prForm.smfGetSystemGb = function()
{
	return nexacro.getEnvironmentVariable("ev_systemGb");
};

/**
 * 서브시스템코드를 가져온다(대국민포털은 "PAS")
 * @return N/A
 */ 
prForm.smfGetSubSystemGb = function()
{
	return nexacro.getEnvironmentVariable("ev_subSystemGb");
};

/**
 * 서브시스템코드를 세팅한다.
 * @param {String} sSubSysGb - 서브시스템코드
 * @return N/A
 */  
prForm.smfSetSubSystemGb = function(sSubSysGb)
{
	nexacro.setEnvironmentVariable("ev_subSystemGb",sSubSysGb);
};

/**
 * 서브시스템Detail코드를 가져온다(검정고시인 경우 210:원서접수)
 * @return N/A
 */ 
prForm.smfGetSubSystemDetailGb = function()
{
	return nexacro.getEnvironmentVariable("ev_subSystemDetailGb");
};

/**
 * 서브시스템Detail코드를 세팅한다.
 * @param {String} sSubSysGb - 서브시스템Detail코드
 * @return N/A
 */  
prForm.smfSetSubSystemDetailGb = function(sSubSysGb)
{
	nexacro.setEnvironmentVariable("ev_subSystemDetailGb",sSubSysGb);
}


/**
 * 세션데이터셋의 값을 가져온다
 * @return N/A
 */ 
prForm.smfGetSessionValue = function(sSessionId)
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,sSessionId),"");
	
	return sValue;

	//return nexacro.getEnvironmentVariable("ev_cddcCode");
};

/**
 * 세션데이터셋에 값을 세팅한다
 * @return N/A
 */ 
prForm.smfSetSessionValue = function(sSessionId,sSessionValue)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,sSessionId,sSessionValue);	

	//return nexacro.getEnvironmentVariable("ev_cddcCode");
};

/**
 * 세션데이터셋에 값을 세팅한다
 * @return N/A
 */ 
prForm.smfClearSessionDataset = function()
{
	var objApp = nexacro.getApplication();
	var objGds = objApp.gdsSession;
	
	// 현재 있는 값을 삭제한다.
	objGds.set_enableevent(false);
	
	for(var i=0;i<objGds.colcount;i++)
	{
		objGds.setColumn(0,i,"");
	}
	
	objGds.set_enableevent(true);
	//return nexacro.getEnvironmentVariable("ev_cddcCode");
};

/**
 * 세션데이터셋에 값을 세팅한다
 * @return N/A
 */ 
prForm.smfSetSessionDataset = function(objDataset)
{
	var objApp = nexacro.getApplication();
	var objGds = objApp.gdsSession;
	
	// 현재 있는 값을 삭제한다.
	objGds.set_enableevent(false);
	
	for(var i=0;i<objGds.colcount;i++)
	{
		objGds.setColumn(0,i,"");
	}

	// 
	for(var j=0;j<objDataset.colcount;j++)
	{
		var sColId    = objDataset.getColID(j);
		var sColValue = objDataset.getColumn(0,sColId);
		objGds.setColumn(0,sColId,sColValue);
	}
	
	
	objGds.set_enableevent(true);
	//return nexacro.getEnvironmentVariable("ev_cddcCode");
};

/**
 * 선택한 시도교육청코드를 가져온다.
 * @return N/A
 */ 
prForm.smfGetCddcCode = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"cddcCd"),"");
	
	return sValue;

	//return nexacro.getEnvironmentVariable("ev_cddcCode");
};

/**
 * 선택한 시도교육청코드를 세팅한다
 * @param {String} sCddcCode - 선택한 시도교육청코드
 * @return N/A
 */  
prForm.smfSetCddcCode = function(sCddcCode)
{
	//nexacro.setEnvironmentVariable("ev_cddcCode",sCddcCode);
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"cddcCd",sCddcCode);	
};

/**
 * 로그인한 유저 성명을 가져온다.
 * @return N/A
 */ 
prForm.smfGetKornFlnm = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"kornFlnm"),"");
	
	return sValue;
};

/**
 * 로그인한 유저 성명을 세팅한다
 * @param {String} sKornFlnm - 로그인한 유저 성명
 * @return N/A
 */  
prForm.smfSetKornFlnm = function(sKornFlnm)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"kornFlnm",sKornFlnm);
};

/**
 * 로그인한 유저 휴대폰번호를 가져온다.
 * @return N/A
 */ 
prForm.smfGetMblTelno = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"mblTelno"),"");
	
	return sValue;
};

/**
 * 로그인한 유저 휴대폰번호를 세팅한다
 * @param {String} sMblTelno - 로그인한 유저 휴대폰번호
 * @return N/A
 */  
prForm.smfSetMblTelno = function(sMblTelno)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"mblTelno",sMblTelno);
};

/**
 * 로그인한 유저 주민등록번호를 가져온다.
 * @return N/A
 */ 
prForm.smfGetTrprRrno = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"trprRrno"),"");
	
	return sValue;
};

/**
 * 로그인한 유저 주민등록번호를 세팅한다
 * @param {String} sTrprRrno - 로그인한 유저 주민등록번호
 * @return N/A
 */  
prForm.smfSetTrprRrno = function(sTrprRrno)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"trprRrno",sTrprRrno);
};

/**
 * 로그인한 유저 성별을 가져온다.
 * @return N/A
 */ 
prForm.smfGetSxdsScCd = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"sxdsScCd"),"");
	
	return sValue;
};

/**
 * 로그인한 유저 성별을 세팅한다
 * @param {String} sSxdsScCd - 로그인한 유저 성별
 * @return N/A
 */  
prForm.smfSetSxdsScCd = function(sSxdsScCd)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"sxdsScCd",sSxdsScCd);
};

/**
 * 로그인한사용자ID를 가져온다.
 * @return N/A
 */ 
prForm.smfGetUserId = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"userId"),"");
	
	return sValue;
};

/**
 * 로그인한 사용자ID를 세팅한다
 * @param {String} sUserId - 로그인한 사용자ID
 * @return N/A
 */  
prForm.smfSetUserId = function(sUserId)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"userId",sUserId);
};

/**
 * 로그인한사용자이메일주소를 가져온다.
 * @return N/A
 */ 
prForm.smfGetEmail = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"emlAddr"),"");
	
	return sValue;
};

/**
 * 로그인한 사용자이메일주소를 세팅한다
 * @param {String} sEmail - 로그인한 사용자이메일주소
 * @return N/A
 */  
prForm.smfSetEmail = function(sEmail)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"emlAddr",sEmail);
};

/**
 * 로그인한사용자 생년월일를 가져온다.
 * @return N/A
 */ 
prForm.smfGetBRdt = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"bRdt"),"");
	
	return sValue;
}

/**
 * 로그인한 사용자 생년월일를 세팅한다
 * @param {String} sBRdt - 로그인한 사용자 생년월일
 * @return N/A
 */  
prForm.smfSetBRdt = function(sBRdt)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"bRdt",sBRdt);
};

/**
 * 로그인한사용자 설립자한글성명을 가져온다.
 * @return N/A
 */ 
prForm.smfGetFunrKornFlnm = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"funrKornFlnm"),"");
	
	return sValue;
}

/**
 * 로그인한 사용자 설립자한글성명을 세팅한다
 * @param {String} sFunrKornFlnm - 로그인한 사용자 설립자한글성명
 * @return N/A
 */  
prForm.smfSetFunrKornFlnm = function(sFunrKornFlnm)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"funrKornFlnm",sFunrKornFlnm);
};

/**
 * 로그인한사용자 설립자주민등록번호을 가져온다.
 * @return N/A
 */ 
prForm.smfGetFunrRrno = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"funrRrno"),"");
	
	return sValue;
}

/**
 * 로그인한 사용자 설립자주민등록번호을 세팅한다
 * @param {String} sFunrRrno - 로그인한 사용자 설립자주민등록번호
 * @return N/A
 */  
prForm.smfSetFunrRrno = function(sFunrRrno)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"funrRrno",sFunrRrno);
};

/**
 * 로그인한사용자 사업자등록번호을 가져온다.
 * @return N/A
 */ 
prForm.smfGetBrno = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"brno"),"");
	
	return sValue;
}

/**
 * 로그인한 사용자 사업자등록번호을 세팅한다
 * @param {String} sBrno - 로그인한 사용자 사업자등록번호
 * @return N/A
 */  
prForm.smfSetBrno = function(sBrno)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"brno",sBrno);
};

/**
 * 로그인한사용자 대학조직코드을 가져온다.
 * @return N/A
 */ 
prForm.smfGetUvstOrgCd = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"uvstOrgCd"),"");
	
	return sValue;
};

/**
 * 로그인한사용자 대학조직코드을 세팅한다
 * @param {String} sUvstOrgCd - 로그인한 사용자 대학조직코드
 * @return N/A
 */  
prForm.smfSetUvstOrgCd = function(sUvstOrgCd)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"uvstOrgCd",sUvstOrgCd);
};

/**
 * 교무시스템구분코드을 가져온다.
 * @return N/A
 */ 
prForm.smfGetScaSysScCd = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"scaSysScCd"),"");
	
	return sValue;
}

/**
 * 교무시스템구분코드을 세팅한다
 * @param {String} sScaSysScCd - 교무시스템구분코드
 * @return N/A
 */  
prForm.smfSetScaSysScCd = function(sScaSysScCd)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"scaSysScCd",sScaSysScCd);
};

/**
 * 임용시험구분코드을 가져온다.
 * @return N/A
 */ 
prForm.smfGetAppoExamScCd = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"appoExamScCd"),"");
	
	return sValue;
}

/**
 * 임용시험구분코드을 세팅한다
 * @param {String} sScaSysScCd - 임용시험구분코드
 * @return N/A
 */  
prForm.smfSetAppoExamScCd = function(sAppoExamScCd)
{
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"appoExamScCd",sAppoExamScCd);
};

/**
 * [모바일] 더보기
 * @param {Obj} scope  - 그리드 지시자
 * @param {Obj} objGrd - 그리드 
 * @param {Obj} objappendDs - 추가 데이터셋
 * @return N/A
 */  
prForm.smfDataAppend = function(scope,objGrd,objappendDs)
{	
	if ( !scope )  scope = objGrd.parent;
	
	objGrd.befH = this._smfappendHeight(objGrd);
	var objDummyDs = objappendDs;
	scope.objects[objGrd.binddataset].objGrd = objGrd;
	scope.objects[objGrd.binddataset].scope = scope;
	if ( objDummyDs ){
		
		if ( objGrd.binddataset ){
			scope.objects[objGrd.binddataset].appendData(objDummyDs);
			objGrd.updateToDataset();
			this.smfGrdResetHeight(objGrd);
		}	
	}
};

/**
 * [모바일] divWork 영역 늘리기
 * @param {Obj} Dataset - 데이터셋 
 * @param {Obj} e       - 이벤트 정보
 * @return N/A
 */  
prForm.smfGrdResetHeight = function( objGrd )
{
	var grdH = this._smfappendHeight(objGrd);
	objGrd.setOffsetHeight(grdH);

/*	
	objGrd.parent.resetScroll();

	//그리드 addChild 폼 과 divWork 사이 Div 존재 할 경우는 미 적용됨.
	
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;
	var parentH;
	
	//divWork
	parentH = this._smfGetMaxBottomPos(objGrd.parent);
		
	nexacroFrame.divAll.form.divWork.setOffsetHeight(parentH);
	nexacroFrame.divAll.form.divWork.form.resetScroll();
	
	//divWork 부모 늘리기
	this._smfFrameResetScroll(parentH);
*/	
};

/**
 * [모바일] 더보기  그리드 , form , frmMain height 늘리기 ( FrameMain )
 * @param {Obj} Dataset - 데이터셋 
 * @param {Obj} e       - 이벤트 정보
 * @return N/A
 */  
prForm._smfFrameResetScroll = function(parentH)
{
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	
	
	var divAllH = parentH + 
					nexacroFrame.divAll.form.divHead.getOffsetHeight()  + 	
					nexacroFrame.divAll.form.divGrade.getOffsetHeight() + 
					nexacroFrame.divAll.form.divBottom.getOffsetHeight();

	nexacroFrame.divAll.setOffsetHeight(divAllH);
	nexacroFrame.divAll.form.resetScroll();	
	nexacroFrame.resetScroll();
}
/**
 * [모바일] 모바일 체크
 * @param : N/A
 * @return true | false
 */ 
prForm.smfIsMobile = function()
{
	if ( nexacro.getEnvironmentVariable("ev_isMobile") == "Y" || nexacro.getEnvironmentVariable("ev_isMobile") == "M"){
		return true;
	}
	return false;
};

/**
 * [모바일] 공통 개발자용 함수(업무 개발자 수정 금지!)
 * @param : N/A
 * @return true / false
 */ 
prForm.__isMobile = function()
{
	if (system.navigatorname.indexOf("nexacro")  < 0) 	
	//if (system.navigatorname != "nexacro") 
	{
		var arrPhone = ['samsug-', 'sch-', 'shw-', 'sph-','sgh-','lg-', 'canu', 'iphone','nokia'
				, 'blackberry', 'lgtelecom', 'natebrowser', 'sonyericsson', 'mobile', 'android', 'ipad'];
		for(i = 0 ; i < arrPhone.length; i++ )
		{
			if(navigator.userAgent.toLowerCase().indexOf(arrPhone[i]) > -1)
			{
				this.fv_isMobile = true;
				this.fv_device = "mobile";
			}
		}
		
		//tablet 여부 확인
		if(this.fv_isMobile)	//모바일이면 tablet 체크 시작
		{
			if(navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || 
				(navigator.userAgent.toLowerCase().indexOf('android') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') == -1))
			{
				this.fv_isMobile = false;
				this.fv_device = "tablet";
			}
			//갤럭시 탭만ㅇ르 위한 리다이렉트. mobile이라는 단어가 안들어오면 지워도 됨.
			var galaxyTabModel =  new Array('shw-');
			for(i =0; i < galaxyTabModel.length; i++)
			{
				if(navigator.userAgent.toLowerCase().indexOf(galaxyTabModel[i]) > -1)
				{
					this.fv_isMobile = false;
					this.fv_device = "tablet";
				}
			}
		}
	}
	
	//nexacro._isMobile();	
	return this.fv_isMobile;
};

/**
 * 그리드 데이터 높이(H) 
 * @param {Obj} 그리드 - 데이터셋 
 * @param {Obj} e       - 이벤트 정보
 * 보더 마진 : 3px
 * @return N/A
 */  
prForm._smfappendHeight = function(objGrd)
{
	return this.gfnNvl(objGrd.getRealRowFullSize("body"),0) 
	+ this.gfnNvl(objGrd.getRealRowFullSize("head"),0) 
	+ this.gfnNvl(objGrd.getRealRowFullSize("summary"),0) 
	+ 3;
};

/**
 * @class 입력값을 체크하여 Null인경우 지정한 값을 리턴 <br>
 * @param {String} inVal
 * @param {String} nullVal	- Null인경우 대치값
 * @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값
 */
prForm.gfnNvl = function(inVal, nullVal)
{
	if(inVal == null) {
		inVal = nullVal;
	}
	return inVal;
};

/**
 * 지정된 form의 최소bottom을 구한다
 * @param {Obj} objForm       - form object
 * @return {Number}    최대 bottom값
 */  
prForm._smfGetMaxBottomPos = function(objForm)
{
	if ( !objForm.parent.visible ) return;
	//  Form안의 component의 리스트를 구한다.
	var objComponents = objForm.components;

	var nMaxBottom=0;
	var nBottom = 0;
	for(var i=0;i<objComponents.length;i++)
	{
		// 각 Component오브젝트를 구한다.
		var objComponent = objComponents[i];

		if ( !objComponent.visible ) continue;

		// 계산에 제외되는 항목
		if ( objComponent.exceptResetScroll=="Y" ) continue;

		// 해당 Component에 getOffsetBottom()함수가 있는 경우만 작업
		if(objComponent.getOffsetBottom)
		{
			// Bottom을 구한다.
			nBottom = objComponent.getOffsetBottom();

			// 최대 Bottom값보다 큰 경우 최대값을 업데이트한다.
			if(nBottom>nMaxBottom)
			{
				nMaxBottom = nBottom;
			}
		}
	}
	if ( this.smfIsQuickView() == "N" )
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	

	// 최대 Bottom값을 반환한다.
	return nMaxBottom;
};

/**
 * 지정된 form 에서 부터 상위 메뉴 화면 resetScroll
 * @param {Obj} scope  - form object
 * @return N/A
 * @description test::sampleTest04,sampleTest07.xfdl 모바일,pc 버전에 의해 맞춘 스크립트.
 */  
prForm.smfResetScroll = function(scope)
{
	// div 깊이에 따라 resetScroll이 안먹히는 현상 해결용(임시?)
	var nDeepCnt = this._smfGetDivPathCount(scope);
	//trace("★★ smfResetScroll()  nDeepCnt="+nDeepCnt);
	
	// 최소 한번은 실행하도록 함.
	if(nDeepCnt<=0)
	{
		this.__smfResetScroll(scope);
	}
	
	//divWork 영역 setOffsetHeight() & resetScroll 
	for(i=0;i<nDeepCnt;i++)
	{
		this.__smfResetScroll(scope);
	}
		
	if ( this.smfIsQuickView() == "N" )
	{
		//워크 영역 & 올 영역 반영
		var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	
		var nMaxHeight = this._smfGetMaxBottomPos(nexacroFrame.divAll.form.divWork.form) + this.fv_DIV_MARGIN;
					
		//nexacroFrame.divAll.form.divWork.setOffsetHeight(nMaxHeight);
		
		//divWork 부모 늘리기
		//this._smfFrameResetScroll(nMaxHeight);
	}
};

// divWork로 부터 현재div가지의 div갯수를 확인 한다.
prForm._smfGetDivPathCount = function(scope)
{
	var obj = scope;
	var nDeepCnt = 0;
	while(obj)
	{
		if( obj.toString() == '[object Form]' )
		{
			nDeepCnt++;
		}
		
		if(obj.name=="divAll")
		{
			break;
		}
		
		obj = obj.parent;
	}
	
	return nDeepCnt;
};

/**
 * 지정된 form 에서 부터 상위 메뉴 화면 __smfResetScroll
 * @param {Obj} scope  - form object
 * @return N/A
 */
prForm.__smfResetScroll = function(scope)
{
	var obj = scope;
	// 부모를 따라가며, 높이 조절 및 resetScroll()을 실행한다.(divAll가지만 한다.)
	while( obj )
	{
		if( obj.toString() == '[object Form]' )
		{
			// visible이 true인경우만, (무조건 true일째만 호출될 것 같지만, 혹시나 해서)
			if(obj.visible)
			{	
				// form의 가장 마지막 object(visible=true인것만)의 bottom 값 에 여유 여백을 줌
				var nMargin = obj.fv_DIV_MARGIN;
				if(obj.parent.divmargin)
				{
					nMargin = parseInt(obj.parent.divmargin);
				}
				
				var nMaxHeight = obj._smfGetMaxBottomPos(obj) + nMargin; 
				//trace(obj.name+":  __smfResetScroll : " + nMaxHeight , nMargin);
				if(obj.parent instanceof nexacro.Tabpage)
				{
					var nTabButtonHeight = obj.parent.parent.tabpages[obj.parent.parent.tabindex].getOffsetTop();
					obj.parent.parent.setOffsetHeight(nMaxHeight+nTabButtonHeight);   // object(Tab) 자체에 줌
				}
				else
				{
					obj.parent.setOffsetHeight(nMaxHeight);   // object(Div) 자체에 줌
				}
				obj.resetScroll();
			}
			
		}
		// divWork까지만 작업을 한다.		
		//trace("__smfResetScroll : id="+obj.id+",name="+obj.name);
		if ( obj.name == "divWork")
		{
			obj.parent.resetScroll();		
			break;
		}
		
		obj = obj.parent;
	}
};

prForm.smfIsQuickView = function()
{
	return nexacro.getEnvironmentVariable("ev_quikView");
};


/**
 * 등록된 법인코드를 가져온다.
 * @return 
 */ 
prForm.smfGetCorpCd = function()
{
	var objApp = nexacro.getApplication();
	var sValue = this.smfNvl(objApp.gdsSession.getColumn(0,"corpCd"),"");
	
	return sValue;
};

/**
 * 선택한 법인코드를 세팅한다
 * @param {String} sCorpCode - 선택한 법인코드
 * @return N/A
 */  
prForm.smfSetCorpCd = function(sCorpCode)
{
	//nexacro.setEnvironmentVariable("ev_cddcCode",sCddcCode);
	var objApp = nexacro.getApplication();
	objApp.gdsSession.setColumn(0,"corpCd",sCorpCode);	
};

/**
 * 리포트를 표시한다.
 * @param {Object} objForm - 호출한 부모Form object
 * @param {String} sType - 리포트표시형태(embbeded:내부DIV, popup:팝업으로 표시)
 * @param {Object} objOption - 리포트를 표시하기 위한 설정정보(json)
 * @param {Object} objSubParam - sType=embedded일 경우 해당 div object , popup일 경우 callback함수(object)
 * @return N/A
 */  
prForm.smfReportView = function(objForm,sType,objOption,objSubParam)
{
	if(sType=="embedded")
	{
		objSubParam._objForm = objForm;
		
		if(objSubParam.form.fvBrowserLoaded)
		{
			objSubParam.form.fnSetOzData(objOption);
		}
		else
		{
			objSubParam.form.optionReport = objOption;
		}
	}
	else if(sType=="popup")
	{
		//alert("기능미구현");
		
		// 팝업을 동작에 필요한 파라메터 지정
		var popupParams = {
			callback: objSubParam, // 콜백함수 지정
			sender: objForm, // sender 지정

			// 팝업 전달 파라메터 지정
			params: {
				// 처리타입 지정(필수)
				procType: "none",  // "none","search","insert","update","delete"
				// 파라메터 전달
				reportOption: objOption,
			},
		};

		var nPopupWidth;
		var nPopupHeight;
		if(objOption.popupWidth) nPopupWidth = objOption.popupWidth;
		if(objOption.popupHeight) nPopupHeight = objOption.popupHeight;
		
		// 모달팝업 실행
		this.smfDialog("_auto", "comm::comm_reportPopup.xfdl", popupParams,null,null,nPopupWidth,nPopupHeight);
	}
};

// (임시코딩) saveJSON에 대한 버그 수정 - 엔진 업그레이드시 제거 예정
nexacro.Dataset.prototype.saveJSON = function(_a, _b, _c, _d, _e, _f) {
	if (!_c) {
		_c = 0;
	}
	var _g = (_a ? _a : this.id);
	var _h = "N";
	switch (_b) {
	case "A":
	case "a":
	case "all":
	case "All":
		_h = "A";
		break;
	case "U":
	case "u":
	case "update":
	case "Update":
		_h = "U";
		break;
	case "N":
	case "n":
	case "normal":
	case "Normal":
		_h = "N";
		break;
	case "V":
	case "v":
	case "view":
	case "View":
		_h = "V";
		break;
	}
	this._setSaveProp(_d, _e, _f);
	var _i = "";
	var _j = [];
	this.__writeJSONData(_j, "{", _c++);
	this.__writeJSONData(_j, "\"id\": \"" + _g + "\",", _c);
	var _k = this._constVars;
	var _l = this.colinfos;
	if (_k.length + _l.length) {
		this.__writeJSONData(_j, "\"ColumnInfo\" :", _c);
		this.__writeJSONData(_j, "{", _c++);
		if (_k.length) {
			this.__writeJSONData(_j, "\"ConstColumn\":", _c);
			this.__writeJSONData(_j, "[", _c++);
			function __saveJSON_constcol_loopFn(_q) {
				var _r = _k[_q];
				var _s = this._constVars.get_id(_q);
				var _t = _r.value;
				var _u = _r.ntype;
				var _v = _r.size;
				var _w = "";
				if (_u != null && _u != 9) {
					_w += "\"type\":\"" + _r.type + "\"";
				}
				if (_v > 0) {
					_w += ", \"size\":\"" + _v + "\"";
				}
				_t = this._convertValueBySaveProp(_t);
				_i = "";
				if (_q < _k.length - 1) {
					_i = ",";
				}
				if (_t != null) {
					this.__writeJSONData(_j, "{\"id\":\"" + _s + "\"," + _w + ", \"value\":\"" + _t + "\"}" + _i, _c);
				} else {
					this.__writeJSONData(_j, "{\"id\":\"" + _s + "\"," + _w + "}" + _i, _c);
				}
			}
			nexacro.__forLoop(this, 0, _k.length, __saveJSON_constcol_loopFn);
			this.__writeJSONData(_j, "],", --_c);
		}
		this.__writeJSONData(_j, "\"Column\":", _c);
		this.__writeJSONData(_j, "[", _c++);
		function __saveJSON_colinfo_loopFn(_q) {
			var _r = _l[_q];
			var _s = _r.id;
			var _t = _r.ntype == 9 ? "STRING" : _r.type ? _r.type : nexacro.DataUtils.toTypeName(_r.ntype);
			var _u = _r.ntype == 9 ? nexacro.DataUtils._default_sizes[1] : _r.size;
			var _v = _r.prop;
			_i = "";
			if (_q < _l.length - 1) {
				_i = ",";
			}
			if (_v == "NONE" || _v == null || (typeof _v) == "number" || _v == "") {
				this.__writeJSONData(_j, "{ \"id\":\"" + _s + "\", \"type\":\"" + _t + "\", \"size\":\"" + _u + "\" }" + _i, _c);
			} else {
				var _w = _r.sumtext;
				if (_w) {
					this.__writeJSONData(_j, "{ \"id\":\"" + _s + "\", \"type\":\"" + _t + "\", \"size\":\"" + _u + "\", \"prop\":\"" + _v + "\", \"sumtext\":\"" + _w + "\" }" + _i, _c);
				} else {
					this.__writeJSONData(_j, "{ \"id\":\"" + _s + "\", \"type\":\"" + _t + "\", \"size\":\"" + _u + "\", \"prop\":\"" + _v + "\" }" + _i, _c);
				}
			}
		}
		nexacro.__forLoop(this, 0, _l.length, __saveJSON_colinfo_loopFn);
		this.__writeJSONData(_j, "]", --_c);
		this.__writeJSONData(_j, "},", --_c);
	}
	var _m = this._viewRecords;
	var _n = this._rawRecords;
	var _o = this._deletedRecords;
	if (_n.length + _o.length) {
		var _p = false;
		this.__writeJSONData(_j, "\"Rows\":", _c);
		this.__writeJSONData(_j, "[", _c++);
		if (_o.length > 0 && (_h == "A" || _h == "U")) {
			function __saveJSON_delrows_loopFn(_q) {
				var _r = this.__getParsedRow(_o[_q]);
				if (_r._rtype & 15) {
					this.__writeJSONCrudRow(_j, _r, _c);
					if (_q < _o.length - 1) {
						this.__addStringJSONData(_j, ",");
					}
					_p = true;
				}
			}
			nexacro.__forLoop(this, 0, _o.length, __saveJSON_delrows_loopFn);
		}
		if (_h == "A") {
			if (_p && _n.length > 0) {
				this.__addStringJSONData(_j, ",");
			}
			function __saveJSON_allrow_loopFn(_q) {
				var _r = this.__getParsedRow(_n[_q]);
				if (_r._rtype & 15) {
					this.__writeJSONCrudRow(_j, _r, _c);
					if (_q < _n.length - 1) {
						this.__addStringJSONData(_j, ",");
					}
				}
			}
			nexacro.__forLoop(this, 0, _n.length, __saveJSON_allrow_loopFn);
		} else if (_h == "U") {
			if (_p && _n.length > 0) {
				this.__addStringJSONData(_j, ",");
			}
			function __saveJSON_updaterow_loopFn(_q) {
				var _r = this.__getParsedRow(_n[_q]);
				if (_r._rtype & 14) {
					this.__writeJSONCrudRow(_j, _r, _c);
					if (_q < _n.length - 1) {
						this.__addStringJSONData(_j, ",");
					}
				}
			}
			nexacro.__forLoop(this, 0, _n.length, __saveJSON_updaterow_loopFn);
		} else if (_h == "V") {
			if (_p && _m.length > 0) {
				this.__addStringJSONData(_j, ",");
			}
			function __saveJSON_viewrow_loopFn(_q) {
				_i = "";
				var _r = this.__getParsedRow(_m[_q]);
				if (_q < _m.length - 1) {
					_i = ",";
				}
				this.__writeJSONData(_j, "{", _c);
				this.__writeJSONNormalRow(_j, _r, _c);
				this.__writeJSONData(_j, "}" + _i, _c);
			}
			nexacro.__forLoop(this, 0, _m.length, __saveJSON_viewrow_loopFn);
		} else {
			if (_p && _n.length > 0) {
				this.__addStringJSONData(_j, ",");
			}
			function __saveJSON_normalrow_loopFn(_q) {
				var _r = this.__getParsedRow(_n[_q]);
				if (_r._rtype & 7) {
					this.__writeJSONCrudRow(_j, _r, _c);
					if (_q < _n.length - 1) {
						this.__addStringJSONData(_j, ",");
					}
				} else if (false) {
					_i = "";
					if (_q < _n.length - 1) {
						_i = ",";
					}
					this.__writeJSONData(_j, "{", _c);
					this.__writeJSONNormalRow(_j, _r, _c);
					this.__writeJSONData(_j, "}" + _i, _c);
				}
			}
			nexacro.__forLoop(this, 0, _n.length, __saveJSON_normalrow_loopFn);
		}
		this.__writeJSONData(_j, "]", --_c);
	}
	else
	{
		_j[_j.length-1] = _j[_j.length-1].substr(_j[_j.length-1].length-1,1)==","?(_j[_j.length-1].substr(0,_j[_j.length-1].length-1)):(_j[_j.length-1]);
	}
	this.__writeJSONData(_j, "}", --_c);
	return _j.join("\n");
};

/**
 * QuickMenu Div의 Url을 세팅한다.
 * @return N/A
 */ 
prForm.smfSetQuickMenuUrl = function(sUrl)
{
	if ( nexacro.getEnvironmentVariable("ev_quikView") == "Y" )
	{
		return;
	}
	
	var objMainFrame = this.getOwnerFrame();
	var objQuickMenuDiv = objMainFrame.form.divAll.form.divQuickMenu;
	
	objQuickMenuDiv.set_url(sUrl);
};

/**
 * TopMenu의 타시스템링크Div의 Url을 세팅한다.
 * @return N/A
 */ 
prForm.smfSetTopMenuLinkUrl = function(sUrl)
{
	if ( nexacro.getEnvironmentVariable("ev_quikView") == "Y" )
	{
		return;
	}
	
	var objMainFrame = this.getOwnerFrame();
	var objQuickMenuDiv = objMainFrame.form.divTop;
	
	objQuickMenuDiv.set_url();
};
	
/**
 * 교육청명을 가져온다.
 * @return N/A
 */ 
prForm.smfGetCddcName = function(sCddcCd)
{
	var objApp = nexacro.getApplication();
	
	if(this.smfIsNull(sCddcCd))
	{
		sCddcCd = this.smfGetCddcCode();
	}
	var sCddcName = objApp.gdsCddcList.lookup("cddcCd",sCddcCd,"cddcNm");
	return sCddcName;	
};
	
/**
 * oOwner에 해당하는 Component를 재귀적으로 호출한다.
 *
 * @param  oOwner : Composite 컴포넌트(form, div, tab, tabpage)
 * @param  fncCallback : 재귀적으로 호출하는 function
 * @param  nLvl : component depth
 * @return object array
 * @see
 */
prForm.svcfTravelComponents = function(oOwner, fncCallback, nLvl){
	prForm._svcfTravelComponents(oOwner, fncCallback, nLvl);
};

/**
 * extCommonApi오브젝트를 생성한다.
 *
 * @return object extCommonApi오브젝트
 * @see
 */
prForm.smfCreateExtCommonAPI = function()
{
	var sIsWow64 = this.smfNvl(nexacro.getEnvironmentVariable("ev_isWOW64"),"N");  // 32bit / 64bit여부(newLauncher.html로 부터 받음)
	var sModuleFileName = "ExtCommonV_N_32.dll";
	
	// 전용브라우저를 무조건 32비트를 사용하도록 되어 있어 extCommonApi도 32비트만을 사용하도록 수정
	//if(sIsWow64=="Y") sModuleFileName = "ExtCommonV_N_64.dll";
	
	var sModulePath = system.convertRealPath("%APPDATA%");
	sModulePath += "dll\\"+sModuleFileName;
	//trace("smfCreateExtCommonAPI : sIsWow64="+sIsWow64 +" , sModulePath=["+sModulePath+"]");
	return nexacro._addExtensionModule(sModulePath);
};

/**
 **** 수직스크롤이동시 페이지표시하는 동적버튼 생성하지 않음 ***
 * 마우스 휠 위 또는 아래 이벤트 발생처리
 * 메인 화면에서 처리
 * frameMainP에서 이벤트 처리 하지 않음 
 * @return 
 * @see
 */
prForm.smfMainOnMouseWheel = function(obj,e)
{
	if ( nexacro.getEnvironmentVariable("ev_isMobile") == "Y" )
	{
		return;
	}

	this.smfCreatePageSelector();


	if ( e.amount == this.DownAmount )
	{
		this.nStep = this.nStep + 1;
		if ( this.nStep == this.topInfo.length )
		{
			this.nStep = this.nStep - 1;
		}
		//trace("@ this.nStep UP : " + this.nStep);
		this._smfAnimationDiv("UP");
		
	}else if ( e.amount == this.UpAmount )
	{
		if ( this.nStep == -1 ) return;
		this.nStep = this.nStep - 1;
		if ( this.nStep < 0 )
		{
			this.nStep = 0;
		}
		//trace("＠ this.nStep DOWN : " + this.nStep);
		this._smfAnimationDiv("DOWN");
	}
};

/**
 **** 스크롤 위,아래로 이동시 페이지 표시하는 버튼 사용 안함 ****
 * 스크롤을 마우스로 위 또는 아래로 이동시킬때 이벤트 발생처리
 * 메인 화면에서 처리
 * frameMainP에서 이벤트 처리 
 * @return 
 * @see
 */
prForm.smfMainOnvscroll = function(pvStep) {
	this.nStep = pvStep;
	this._smfsetPageSelector(this.nStep);
};

/**
 * 메인 서브 페이지 이동 상태 표시
 * @return object extCommonApi오브젝트
 * @see
 */
prForm.smfCreatePageSelector = function()
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"] ) return false;

	var nRightFix  = 150;
	var nWidth     = 28;
	var nHeight    = 28 * this.topInfo.length;
	this.fv_nRight = 150;
	this.fv_appFrameMain  = nexacro.getApplication().mainframe.VFrameSet.frameMain;
	this.fvPageTop = (this.fv_appFrameMain.form.divAll.getOffsetHeight() - nHeight ) / 2;
	
	var pageSelector = new Div();	
	pageSelector.init("pageSelector",null,this.fvPageTop,nWidth,nHeight,nRightFix);	
	this.fv_appFrameMain.form.addChild(pageSelector.name, pageSelector);
	//pageSelector.set_background("blue");
	pageSelector.show();

	this.firstTop = 10;
	var nHeight = 24;	
	var nWidth = 16;
	this.fv_nRight = 0;
	this.fvLeftMargin = 7;
	for(var i=0;i<this.topInfo.length; i++)
	{
		var objBtn = new Button();
		objBtn.init("page"+i,this.fvLeftMargin,this.firstTop,nWidth,nHeight);
		this.fvLastLeft += nWidth;
		this.firstTop += nHeight;
		
		this.fv_appFrameMain.form["pageSelector"].form.addChild(objBtn.name, objBtn);
		objBtn.set_cssclass("btn_main_sub_step");
		objBtn.set_accessibilitylabel("메인화면"+(i+1)+"번째 블럭 이동");
		objBtn.menuid = "page"+i;

		//마우스 오버 툴팁
		if (!this.smfIsNull(this.topInfo[i])) {
			if(this.topInfo[i].userToolTipText){
				objBtn.userToolTipText = this.topInfo[i].userToolTipText;
			}		
		
			// 2022.11.17 this.getOwnerFrame().form.divAll.form.divBottom 에 대한 버튼 처리 visible = false;
			//if ( i == (this.topInfo.length-1) )
			if ( this.topInfo[i].id == "divBottom" )
			{
				objBtn.set_visible(false);
				return;
			}
			//objBtn.set_cssclass("TF_menu");
			objBtn.setEventHandler("onclick", this.smfLinkPageOnclick, this);
			objBtn.setEventHandler("onmouseenter", this.smfbtnOnmouseenter, this);
			objBtn.setEventHandler("onmouseleave", this.smfbtnOnmouseleave, this);		
			objBtn.set_visible(true);
			objBtn.show();
		}
	}
	return true;
};

/**
 * 마우스 휠 이벤트 페이지 이동
 * @return object extCommonApi오브젝트
 * @see
 */
prForm._smfAnimationDiv = function(pDirect)
{	
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"] )
	{
		var objToolTip = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageToolTip");
		if (objToolTip) objToolTip.destroy();
		objToolTip = null;
	}

	//trace(" this.nStep : " + this.nStep +  " getOffsetWidth : " + this.topInfo[this.nStep].getOffsetWidth() );	
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	
	if ( pDirect == "UP" )
	{
		if ( this["Animation"] ) 
		{
			// Remove Object form Parent
			var objAniItem = this["Animation"].removeTarget("AniItem");
			//var objAniItemSub = this["Animation"].removeTarget("AniItemSub");			
			
			var objAni = this.removeChild("Animation");
			
			if (objAniItem ) objAniItem.destroy();
			//if (objAniItemSub ) objAniItemSub.destroy();
			if (objAni ) objAni.destroy();
			objAniItem = null;
			objAni = null;		
		}

		 // Create Object  
		objAni = new nexacro.Animation("Animation", this);  

		// Add Object to Parent Form  
		this.addChild( "Animation", objAni );

		// Set Object 
		objAni.set_duration( this.Aniduration );
		objAni.set_easing(this.easing);
		objAni.setEventHandler("onbegin",function(obj,e){
		}, this);

		objAni.setEventHandler("oncomplete",function(obj,e){
			this._smfsetTopMode();
			this._smfsetPageSelector(this.nStep);
		}, this);

		//bottom일 경우
		if ( this.nStep > this.topInfo.length -1 ) 
		{
			return;
		}
		
		if (!this.smfIsNull(this.topInfo[this.nStep])) {
			var targetTop = 0;
			if ( this.nStep != 0 )
			{
				targetTop = this.topInfo[this.nStep].getOffsetTop() - 100;
			}else
			{
				targetTop = this.topInfo[this.nStep].getOffsetTop() + 100;			
			}
			objAni.addTarget( "AniItem",nexacroFrame.divAll.form.vscrollbar, "pos:" + targetTop );

			// Play Object
			objAni.play();
		}
		
	}else if(pDirect == "DOWN")
	{
		if ( this["Animation"] ) 
		{
			// Remove Object form Parent
			var objAniItem = this["Animation"].removeTarget("AniItem");
			var objAniItemSub = this["Animation"].removeTarget("AniItemSub");			
			
			var objAni = this.removeChild("Animation");
			
			
			 
			// Destroy Object
			if ( objAniItem ) objAniItem.destroy();
			if ( objAniItemSub )objAniItemSub.destroy();
			if ( objAni )objAni.destroy();
			objAniItem = null;
			objAniItemSub = null;			
			objAni = null;				
		}
		 // Create Object  
		objAni = new nexacro.Animation("Animation", this);  

		// Add Object to Parent Form  
		this.addChild( "Animation", objAni );

		// Set Object 
		objAni.set_duration(this.Aniduration);
		objAni.set_easing(this.easing);
		objAni.setEventHandler("onbegin",function(obj,e){
		}, this);

		objAni.setEventHandler("oncomplete",function(obj,e){	
			this._smfsetTopMode();
			this._smfsetPageSelector(this.nStep);		
		}, this);
		
		if ( this.nStep < 0 )
		{
			return;		
		}	

		if (!this.smfIsNull(this.topInfo[this.nStep])) {
			var targetTop = 0;
			if ( this.nStep != 0 )
			{
				targetTop = this.topInfo[this.nStep].getOffsetTop() - 100;
			}else
			{
				targetTop = this.topInfo[this.nStep].getOffsetTop() + 100;			
			}		

			// Add Item to Object
			objAni.addTarget( "AniItem",nexacroFrame.divAll.form.vscrollbar, "pos:" + this.topInfo[this.nStep].getOffsetTop() );

			// Play Object
			objAni.play();
		}
	}
};

//페이지 선택
prForm._smfsetPageSelector = function(pIdx)
{	
	if (nexacro.getApplication().mainframe.VFrameSet.frameMain.form.isValidObject("pageSelector") ) {
		var pageSelector = nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"].form;
		for(var i=0;i<pageSelector.components.length;i++)
		{
			pageSelector.components[i].set_cssclass("btn_main_sub_step");
			pageSelector.components[i].set_accessibilitylabel("메인화면"+(i+1)+"번째 블럭 이동");
		}
		nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"].form["page"+pIdx].set_cssclass("btn_main_sub_step_S");
		nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"].form["page"+pIdx].set_accessibilitylabel("선택된 메인화면"+(pIdx+1)+"번째 블럭");
		
		if ( this.nStep == 0 )
		{
			var objpageSelector = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageSelector");
			objpageSelector.destroy();
			objpageSelector = null;	
			return;
		}else
		{
			//TopSiteMap 삭제
			this._smfDestroyTopSitemap();	
		}
	}
};

//PageSelector Lin
prForm._smfAnimationDivDirect = function(pStep)
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"] )
	{
		var objToolTip = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageToolTip");
		if (objToolTip) objToolTip.destroy();
		objToolTip = null;
	}
	this.smfCreatePageSelector();
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	

	if ( this["Animation"] ) 
	{
		// Remove Object form Parent
		var objAniItem = this["Animation"].removeTarget("AniItem");
		var objAniItemSub = this["Animation"].removeTarget("AniItemSub");			
		
		var objAni = this.removeChild("Animation");
		
		
		 
		// Destroy Object
		if (objAniItem) objAniItem.destroy();
		if (objAniItemSub) objAniItemSub.destroy();
		if (objAni )objAni.destroy();
		objAniItem = null;
		objAniItemSub = null;		
		objAni = null;		
	}
	 // Create Object  
	objAni = new nexacro.Animation("Animation", this);  

	// Add Object to Parent Form  
	this.addChild( "Animation", objAni );

	// Set Object 
	objAni.set_duration( this.Aniduration );
	objAni.set_easing(this.easing);
	objAni.setEventHandler("onbegin",function(obj,e){
	}, this);

	objAni.setEventHandler("oncomplete",function(obj,e){
			this._smfsetTopMode();	
			this._smfsetPageSelector(this.nStep);	
	}, this);
	//trace(" pStep : " + pStep);
	this.nStep = nexacro.toNumber(pStep);

	var targetTop = 0;
	if ( this.nStep != 0 )
	{
		targetTop = this.topInfo[this.nStep].getOffsetTop() - 100;
	}else
	{
		targetTop = this.topInfo[this.nStep].getOffsetTop() + 100;			
	}	
	// Add Item to Object
	objAni.addTarget( "AniItem",nexacroFrame.divAll.form.vscrollbar, "pos:" + this.topInfo[pStep].getOffsetTop() );
	// Play Object
	objAni.play();

};

/**
 *  frameTop css 모드 변경
 * @return object extCommonApi오브젝트
 * @see
 */
prForm._smfsetTopMode = function()
{
	if ( this.nStep > 0 )
	{
		this.getOwnerFrame().form.divTop.form.fnTopMode("W");
	}else
	{
		this.getOwnerFrame().form.divTop.form.fnTopMode("B");		
	}		
};

/**
 *  pageSelector 툴팁
 * @return object extCommonApi오브젝트
 * @see
 */
prForm.smfsetToolTip = function(pText)
{
	//trace(" pText : " + pText);
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"].set_text(pText);
};

/*
//메인 서브 페이지 스크롤 움직여서 이동함.(top)
prForm.smfLinkPageOnclick = function(obj,e)
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"] )
	{
		var objToolTip = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageToolTip");
		if (objToolTip) objToolTip.destroy();
		objToolTip = null;
	};
	
	var nexacroFrame = nexacro.getApplication().mainframe.VFrameSet.frameMain.form;	
	var VscrollPos = nexacroFrame.divAll.form.vscrollbar.pos;

	var objpPageSelector = nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"];
	
	var pageIndx  =  obj.name.substr(4,1);
	this._smfAnimationDivDirect(pageIndx);
};
*/

//페이지 이동 버튼 마우스 진입 이벤트
prForm.smfbtnOnmouseenter = function(obj,e)
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"] )
	{
		var objToolTip = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageToolTip");
		if (objToolTip) objToolTip.destroy();
		objToolTip = null;
	}
	var objpPageSelector = nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"];
	
	var nWidth = 180;
	var nHeight = 31;
	this.fv_nRight = 150;
	var nTop = objpPageSelector.getOffsetTop() + ( nexacro.toNumber(obj.name.substr(4,1)) * 28 );
	
	var pageToolTip = new Static();	
	
	pageToolTip.init("pageToolTip",null,nTop,nWidth,nHeight,180);	
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form.addChild(pageToolTip.name, pageToolTip);
	pageToolTip.set_cssclass("sta_main_sub_teg");
	
	pageToolTip.set_wordWrap("char");
	pageToolTip.set_verticalAlign("middle");
	pageToolTip.show();	
	
	if ( obj.userToolTipText )
	{
		this.smfsetToolTip(obj.userToolTipText);
	}else
	{
		this.smfsetToolTip( obj.name );	
	}

};

//페이지 이동 버튼 마우스 아웃 이벤트
prForm.smfbtnOnmouseleave = function(obj,e)
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageToolTip"] )
	{
		var objToolTip = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageToolTip");
		if (objToolTip) objToolTip.destroy();
		objToolTip = null;
	}
};
//메인 포탈 페이지 종료 전 이벤트
prForm.smfOnbeforeClose = function()
{
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"] )
	{
		//nexacro.getApplication().mainframe.VFrameSet.frameMain.form["pageSelector"].destroy();
		var pageSelector = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("pageSelector");
		if(pageSelector) pageSelector.destroy();
		pageSelector = null;
	}		
};

//설문조사 조회
prForm.smfSurvayAnimationDiv = function(objDiv)
{
	var divTabPage1 = new Div();
	var nWidth = 299 * 6;
	divTabPage1.init("divTabPage1",0,288,nWidth,310);
	// Add Object to Parent Form 
	objDiv.form.addChild("divTabPage1", divTabPage1);
	divTabPage1.set_initvalueid("ivDivAccessibilityOn");
	divTabPage1.set_formscrollbartype("none none");
	divTabPage1.show();
	
	var nLeft = 11;
	
	for( var c = 0; c < 6 ;c++)
	{
		var divSurvey = new Div();
		divSurvey.init("divSurvey"+c,nLeft,10,280,280);

		// Add Object to Parent Form  
		divTabPage1.form.addChild("divSurvey"+c, divSurvey);
		
		divSurvey.set_cssclass("div_main_sub4_survey");
		divSurvey.set_initvalueid("ivDivAccessibilityOn");
		//divTabPage.set_background("red");	
		// Show Object  
		divSurvey.show();
		
		// Create Object  
		var objStatic = new Static(); 
		objStatic.init("staPart",28,24,90, 30);
		
		// Add Object to Parent Form  
		divSurvey.form.addChild("staPart", objStatic);
		//objStatic.set_accessibilityenable(true);
		objStatic.set_initvalueid("ivStcAccessibilityOn");	
		
		objStatic.set_wordWrap("char");
		objStatic.set_verticalAlign("middle");

		//objStatic.set_cssclass("font14B,color2b72");
		objStatic.set_text("설문조사");
		objStatic.show();
		
		// Create Object  
		var btnTitle = new Button();
		btnTitle.init("btnTitle",20,54,238,35);
		
		// Add Object to Parent Form  
		divSurvey.form.addChild("btnTitle", btnTitle);
		//objStatic.set_accessibilityenable(true);
		btnTitle.set_initvalueid("ivBtnAccessibilityLink");	

		btnTitle.set_cssclass("btn_main_sub4_title");
		btnTitle.set_text("나이스메뉴 변경사항 안내" + c);
		btnTitle.show();		

		// Create Object  
		var mskTitle = new MaskEdit();
		mskTitle.init("mskTitle",20,220,107,30);
		
		// Add Object to Parent Form  
		divSurvey.form.addChild("mskTitle", mskTitle);
		//objStatic.set_accessibilityenable(true);
		mskTitle.set_initvalueid("ivMskReadOnly");	

		mskTitle.set_cssclass("msk_main_sub4_date");
		mskTitle.set_format("####-##-##");
		mskTitle.set_type("string");
		mskTitle.set_value("20220805");		
		mskTitle.show();	
		
		nLeft = nLeft + 299;
	}

	//var divTabPage2 = new Div();
	//divTabPage2.init("divTabPage2",0,288,null,310,0,null);
	// Add Object to Parent Form 
	//objDiv.form.addChild("divTabPage2", divTabPage2);
	//divTabPage2.set_initvalueid("ivDivAccessibilityOn");
	//divTabPage2.set_formscrollbartype("none none");
	//divTabPage2.show();		
};

//
prForm.smfSurvayBtnNext = function(pContainer)
{
	var objTab = pContainer.form.divTabPage1;
	if ( (pContainer.form.getOffsetRight() - pContainer.form.divTabPage1.getOffsetRight()) > 0 ) return;
	pContainer.form.divTabPage1.move(objTab.getOffsetLeft() - prForm.nWidth,
	objTab.getOffsetTop(),objTab.getOffsetWidth(),objTab.getOffsetHeight());
};

//
prForm.smfSurvayBtnPrev = function(pContainer)
{
	var objTab = pContainer.form.divTabPage1;
	if ( pContainer.form.divTabPage1.getOffsetLeft() == 0 ) return;
	pContainer.form.divTabPage1.move(objTab.getOffsetLeft() + prForm.nWidth,
	objTab.getOffsetTop(),objTab.getOffsetWidth(),objTab.getOffsetHeight());
};

/**
 * @class  NoticeAll 용 팝업
 * pPopInfo.callbackFunc : 콜백 함수
*/
prForm.smfDivPop = function(pPopInfo,pisCheck){
	
	pisCheck = this.smfNvl(pisCheck,true);

	// [오늘 다시보지 않기]체크 상태에 따라 팝업 보이기 처리
	if (pisCheck)
	{
		var isPopUp = this._smfIsNotice();
		if ( !isPopUp ) return;
	}

	var objDiv = new Div();
	// 기존 팝업(div)이 존재하면 remove 하고 다시 생성한다.
	if ( pPopInfo.pScope ) {
		if (pPopInfo.pScope.isValidObject(pPopInfo.id)) {
			objDiv = pPopInfo.pScope.removeChild(pPopInfo.id);
			objDiv.destroy();
		}
	}else {
		if (this.getOwnerFrame().form.isValidObject(pPopInfo.id)) {
			objDiv = this.getOwnerFrame().form.removeChild(pPopInfo.id);
			objDiv.destroy();
			objDiv = null;
		}
	}

	
	objDiv = new Div();	
	if ( pisCheck )
	{
		objDiv.init(pPopInfo.id, 0, 0, null, null,0,0);
	}else
	{
		objDiv.init(pPopInfo.id, 0, this.MMenuTop, null, null,0,0);		
	}
	
	// Add Object to Parent Form 
	if ( pPopInfo.pScope )
	{
		pPopInfo.pScope.addChild(pPopInfo.id, objDiv);
	}else
	{
		this.getOwnerFrame().form.addChild(pPopInfo.id, objDiv);
	}	
	
	// Show Object  
	objDiv.show(); 
	objDiv.pPopInfo = pPopInfo;
	objDiv.set_async(false);
	objDiv.set_url(pPopInfo.pUrl);
	objDiv.set_background("rgba(0,0,0,0.40)");
	objDiv.set_initvalueid("ivDivAccessibilityOn");
	objDiv.form.set_scrollbartype("default default");

	//컴포넌트의 z-index 조절
	var elem = objDiv.getElement();
	if(elem)
	{
		elem.setElementZIndex(1);
	}
	objDiv.setFocus();
	
	objDiv.form.addEventHandler("onbeforeclose",function(){
		if ( pPopInfo.callbackScope )
		{
			pPopInfo.callbackScope.lookupFunc(pPopInfo.callbackFunc).call(pPopInfo.id);			
		}
	}, pPopInfo.callbackScope );
	objDiv.form.resetScroll();
};

prForm.smfClose = function( pObj ){
	var PopInfo = this.parent.pPopInfo;
	if ( PopInfo.callbackScope )
	{
		PopInfo.callbackScope.lookupFunc(PopInfo.callbackFunc).call( pObj );			
	}
	if ( PopInfo.pScope )
	{
		var objDiv = PopInfo.pScope.removeChild(PopInfo.id); 
		objDiv.destroy();
		objDiv = null;
	} else 
	{
		var objDiv = this.getOwnerFrame().form.removeChild(PopInfo.id); 
		objDiv.destroy();
		objDiv = null;		
	}
};

prForm.smfSetTracerInput = function(sServiceId,oOption)
{
	// 값이 없으면 디폴트값을 세팅
	var sHost     = this.smfNvl(oOption.domainUrl  , "172.16.12.89"         );  // 작업할 Form(callback함수가 있는 form. 예,this)
	var sPort     = this.smfNvl(oOption.domainPort , "8180"                     );  // 도메인URL       (예, www.neis.go.kr)
	var sClientIp = this.smfNvl(oOption.clientIp   , "10.200.111.25"          );  // 도메인Port      (예, 80)
	var sLoginId  = this.smfNvl(oOption.clientIp   , "10.200.111.25"          );  // 클라이언트IP   (예, 172.10.10.10)
	var sPageUrl  = this.smfNvl(oOption.targetUrl  , "test:sampleTracer.xfdl"      );  // 이동할 화면URL (예, "sampleTracer.xfdl") 
	
	// TRACER서버에 전달한다.
	//this.WC_CheckWaitCnt(sHost,sClientIp,sPort,sLoginId,sPageUrl,oOption.callback);
	this.WC_CheckWaitCnt(sHost, sClientIp, sPort, sLoginId, "sampleTracer", null, sPageUrl);
};

prForm.smfSetTracerOutput = function(sServiceId,oOption)
{
	// 값이 없으면 디폴트값을 세팅
	var sHost     = this.smfNvl(oOption.domainUrl  , "172.16.12.89"          ); // 작업할 Form(callback함수가 있는 form. 예,this)
	var sPort     = this.smfNvl(oOption.domainPort , "8180"                      ); // 도메인URL       (예, www.neis.go.kr)
	var sClientIp = this.smfNvl(oOption.clientIp   , "10.200.111.25"           ); // 도메인Port      (예, 80)
	var sLoginId  = this.smfNvl(oOption.clientIp   , "10.200.111.25"           ); // 클라이언트IP   (예, 172.10.10.10)
	var sPageUrl  = this.smfNvl(oOption.targetUrl  , "test::sampleTracer.xfdl" ); // 이동할 화면URL (예, "sampleTracer.xfdl") 

	// TRACER서버에 전달한다.
	//this.WC_FinishWait(sHost,sClientIp,sPort,sLoginId,sPageUrl,oOption.callback);
	this.WC_FinishWait(sHost, sClientIp, sPort, sLoginId, "sampleTracer", null, sPageUrl);
};


prForm._smfGetTracerServerInfo = function()
{
	var sServerIp       = "172.16.12.89";
	var sServerPort     = "8180";
	var sServerProtocol = "http";
	var sCookieDomain   = "172.16.12.89";
	
	// 서버의 종류에 따라 아이피와 포트를 세팅
	
	// 리턴할 데이터를 생성한다.
	var oServerInfo = {"ip":sServerIp , "port":sServerPort , "protocol":sServerProtocol , "cookie_domain":sCookieDomain};
	
	// 값을 리턴한다.
	return oServerInfo;
};

// 파일업로드시 받은 CustomValue의 값에서 원하는 값을 추출한다.
prForm.smfUploadInfoFileSn = function(sCustomerInfo,nIndex)
{
	return sCustomerInfo.split(",")[nIndex];	
};

// 메인 페이지를 보여주기 위한 정보를 표시한다.
// objMainForminfo : Json(퀵메뉴사용여부,퀵메뉴URL,상단 공지사항밴드 사용여부,Top메뉴링크사용여부,Top메뉴링크URL(타이틀,width포함))
prForm.smfSetMainPageInfo = function(objMainForminfo)
{
/*
objMainForminfo = {
                      quickmenu : {
									  use : "Y"                      //
									, url : "frame::/sqa/xxx.xfdl"   //
								  }
                    , toplink : {
									  use   : "Y",                                //
									, link  : [                                   // 링크정보(배열)
									           { 
											       title : "원서접수"            //
  									             , width : 150                    // 링크버튼의 넓이
												 , url   : "frame::/sqa/xxx.xfdl" // 링크하여 이동할 화면의 URL
												}
											   ]
								  }
                    , noticeband : {
									  use   : "Y"                 //
									, serviceurl : "/xxxxx.do"    //  
								   }
				  }
*/
	
};


/*
prForm._writeFile = function(imgBlob)
{
	writeFile(imgBlob);
			async function writeFile(imgBlob)
			{
				const newHandle = await window.showSaveFilePicker();
				
				const writableStream = await newHandle.createWritable();
				
				await writableStream.write(imgBlob);
				
				await writableStream.close();
			
			}
}
*/

//***************************************************
//  Excel export/Import - 시작
//***************************************************

prForm.smfExcelExport = function(objOption)
{
	if(objOption.exporttype=="select")
	{
			// 팝업을 동작에 필요한 파라메터 지정
			var popupParams = {
				callback: this._smfExcelExportPopupCallback, // 콜백함수 지정
				sender: this, // sender 지정

				// 팝업 전달 파라메터 지정
				params: {
					// 처리타입 지정(필수)
					procType: "none",  // "none","search","insert","update","delete"
					// 파라메터 전달
					option : objOption
				},
			};

			// 모달팝업 실행
			this.smfDialog("_auto", "comm::comm_selectExportType.xfdl", popupParams);
	}
	else
	{
		this._smfExcelExport(objOption)
	}
}

prForm._smfExcelExportPopupCallback = function (e,sender)
{
	if(e.result)
	{
		var objOption = e.option;
		this._smfExcelExport(objOption);
	}
}


prForm._smfExcelExport = function(objOption)
{

	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	
	var svcUrl = "baseUrl::/XExportImport";
	this.objExport = null
	this.objExport = new ExcelExportObject();
	this.objExport.set_exporturl(svcUrl);

	//this.objExport.set_commdataformat("xml");
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
	this.objExport.addEventHandler("onsuccess", this.smfExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.smfExportOnerror, this);	



	var sExportType = this.smfNvl(objOption.exporttype,nexacro.ExportTypes.EXCEL2007);
	this.setWaitCursor(true);
	
	var sFileName  = objOption.filename;
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거

	var bMulti = objOption.multiExport || false;
	var nExportCount = 1;
	if(bMulti)
	{
		nExportCount = objOption.exportInfo.length;
	}
	
	
	var objGrid ,sSheetName;
	for(var i=0;i<nExportCount;i++)
	{
		if(bMulti)
		{
			objGrid    = objOption.exportInfo[i].objGrid;
			sSheetName = objOption.exportInfo[i].sheetname;
			sStartCell = objOption.exportInfo[i].startcell || 'A1';
		}
		else
		{
			objGrid    = objOption.objGrid;
			sSheetName = objOption.sheetname;
			sStartCell = objOption.startcell || 'A1';
		}
		
		sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
		
		//sheetName nullcheck
		sSheetName = this.smfIsNull(sSheetName) ? "sheet1" : sSheetName;
		//sheetName 30이상일경우 기본시트명
		if( String(sSheetName).length > 30 ){
			sSheetName =  "sheet1";
		}

		
		// 주어진 그리드의 clone을 생성
		var sCloneGridId = objGrid.id+"_export_"+i;
		var objCloneGrid = this[sCloneGridId];
		
		// 그리드 클론이 없는 경우
		if(!objCloneGrid)
		{
			objCloneGrid = new Grid();
			objCloneGrid.init(sCloneGridId,objGrid.getOffsetLeft(),objGrid.getOffsetTop(),objGrid.getOffsetWidth(),objGrid.getOffsetHeight());
			this.addChild(sCloneGridId,objCloneGrid);
			objCloneGrid.show();
		}
		objCloneGrid.set_visible(false);
		objCloneGrid.set_formats("<formats>"+objGrid.getCurFormatString()+"</formats>");
		objCloneGrid.set_binddataset(objGrid.binddataset);
		objCloneGrid.set_cssclass("excel");
		
		// 그리드의 옵션처리(필요시)
		//objCloneGrid.setCellProperty("body",0,"font",'13px/normal "Malgun Gothic,Arial"');
		//objCloneGrid.setCellProperty("body",0,"background",'red');
		
		
		//var objGrid_excel = objGrid;
		var objGrid_excel = objCloneGrid;
		
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!"+sStartCell,"allband","allrecord");
	}	
	
	this.objExport.set_exportfilename(sFileName);	
	this.objExport.set_exporttype( sExportType );
	var result = this.objExport.exportData();
};

/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
prForm.smfExportOnsuccess = function(obj, e)
{
	this.setWaitCursor(false);
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
prForm.smfExportOnerror = function(obj,  e)
{
	this.alert("Excel Export Error!!");
	this.setWaitCursor(false);
};


/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.smfExcelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
prForm.smfExcelImport = function(objOption)
{
	var sDataset  = objOption.datasetname ;  // sDataset - dataset	
	var sSheet    = objOption.sheetname   ;  // [sSheet]	- sheet name
	var sBody     = objOption.startcell   ;  // [sBody] - body 영역지정	
	var sCallback = objOption.callback    ;  // [sCallback] - callback 함수	
	var sImportId = objOption.importId    ;  // [sImportId] - import id(callback호출시 필수)
	var objForm   = objOption.objForm     ;  // [objForm] - form object(callback호출시 필수)

	this.setWaitCursor(true);    	
	
	if(this.smfIsNull(sSheet)) sSheet = "sheet1";
	if(this.smfIsNull(sBody)) sBody = "A2";
	
	var svcUrl = "baseUrl::/XImport";
	
	var objImport;	
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = sDataset;

	if (!this.smfIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	if(objOption.filefilter)
	{
		objImport.set_filefilter(objOption.filefilter);
	}
	else
	{
		var sFilterStr = "";
		sFilterStr += "엑셀 Files(*.xlsx)|*.xls;*.xlsx|";
		sFilterStr += "한셀 Files(*.cell)|*.cell|";
		sFilterStr += "CSV Files(*.csv)|*.csv|";
		sFilterStr += "ALL Files(*.*)|*.*|";
	
		objImport.set_filefilter(sFilterStr );
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = sDataset+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.smfImportOnsuccess, this);
	objImport.addEventHandler("onerror", this.smfImportOnerror, this);	
	var sParam = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
 	var sParam2 = "[" + sOutDsName + "=outDs]";
 	
	objImport.importData("", sParam, sParam2);						
	objImport = null;	
	
	this.setWaitCursor(false);
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
prForm.smfImportOnsuccess = function(obj,  e)
{
	this.setWaitCursor(false);
	
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;

	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	// 파일이름을 구한다. 
	var sFilename = "";
	var sFileUrl = e.url;  // "65486434345464/my.xls" 또는 "/65486434345464/my.xls"
	
	var nFindLastIdx = sFileUrl.lastIndexOf("/");
	if(nFindLastIdx>-1)
	{
		sFilename = sFileUrl.substr(nFindLastIdx+1);
	}
	
	// 지정된 데이터셋에 import한 데이터를 세팅
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);

	//화면의 callback 함수 호출
	if (!this.smfIsNull(sCallback)) {
		var bResult = true;
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId,bResult,sFilename);
	}
};

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
prForm.smfImportOnerror = function(obj,  e)
{
	this.setWaitCursor(false);	
	
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	
	this.alert(e.errormsg);
	//화면의 callback 함수 호출
	if (!this.smfIsNull(sCallback)) {
		var bResult = false;
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId,bResult);
	}
};
//***************************************************
//  Excel export/Import - 끝
//***************************************************

/**
 * @class  NoticeAll 용 팝업 체크 (오늘 다시 보기 체크)
*/
prForm._smfIsNotice = function()
{
	var sSubSys = this.smfGetSubSystemGb();
	var sProfileId = "chkToday_" + sSubSys;
	
	var sToday = nexacro.getPrivateProfile(sProfileId);
	
	var today = this.smfToday();  // YYYYMMDD
	if ( sToday == today )
	{
		return false;
	}
	return true;
};

/**
 * @class  서비스 바로가기 
 * @type 	: "open" | "redirect" | "link"
 * @param 	: param.domain(로컬/개발/운영별 확인 필요함),param.menuId
 * @param	: {String} btnText - 메뉴Text
*/
prForm.smfSetServiceLink = function(pageUrl,type,param, menuText)
{
	//현재 준비중인 메뉴들(추후에 삭제)
	if(pageUrl == "http://csvy.dev.neisurvey.go.kr/")
	{
		this.smfAlert("서비스 준비중입니다");
		return;
	}
	
	
	if ( this.smfIsNull( type ) )
	{
		type = "open";
	}
	
	if ( type == "open" ) 
	{
		if ( !this.smfIsMobile() ) {
			//메인 모드에서 메뉴 조회 모드로 전환.
			this.smfChangeDiv("W");
		}

		var sUrl = pageUrl;
		if(!this.smfIsNull(sUrl))
		{
			var params = {};
			if(!this.smfIsNull(param)){
				params = param;
			}
			
			this.smfSetWorkPage(sUrl, params, null, menuText);
		}		
	}else if( type == "link"  )
	{
		if ( param.options )
		{
			window.open(pageUrl,"",param.options);
		}else
		{
			var strUrl = pageUrl;
			var strMenuId = "";
			var locationSearch = "";
			
			//게시물을 새창으로 여는 경우 menuId, pafrBbsId 필요
			if(this.smfIsNull(pageUrl)){
				strUrl = this._smfGoNexacro(param.server,param.subSys);
			}
			if ( param.menuId ){
				strMenuId = param.menuId;
				locationSearch = "&menuType=" + param.menuId;
			}
			if ( param.pafrBbsId )
			locationSearch += "___" + param.pafrBbsId;
			
			//학부모서비스 알림창 관련(추후 삭제)
			if(strUrl == "HAK")
			{
				return;
			}
			
			
			//브라우저 새탭에서 해당화면 오픈
			if(strUrl.indexOf("?")>-1)
			{
				window.open( strUrl + "&" + locationSearch, strMenuId);
			}
			else
			{
				if(!this.smfIsNull(locationSearch))
				{
					strUrl  += "?" + locationSearch	
				}
				
			
				window.open( strUrl , strMenuId);
			}
		}

	}else
	{
		window.location.href = pageUrl;
	}
};

prForm._smfGoNexacro = function(sServer,sSubSys){

	//현재 사용하지 않는 메뉴들 메시지 처리
	if(sSubSys == "ONE")
	{
		//this.smfAlert("4세대 나이스 전환을 위해 교육비원클릭신청시스템 서비스가 일시 중단됩니다. \n 이용에 불편을 드려 죄송합니다. \n보다 편리한 서비스를 제공할 수 있도록 노력하겠습니다. \n\n서비스 중단 기간 \n23.6.21.(수) 6:00 ~ 6.30(금) 9:00");
		var popupParams = {
				callback: this._smfExcelExportPopupCallback, // 콜백함수 지정
				sender: this, // sender 지정
				titlebar: false, // 타이틀바 표시 안함
				
				// 팝업 전달 파라메터 지정
				params: {
					// 처리타입 지정(필수)
					procType: "none",  // "none","search","insert","update","delete"
				},
			};

		// 모달팝업 실행
		this.smfDialog("_auto", "pa_pas_mms_pc::pas_mmspc00_p02.xfdl", popupParams);
		
		return;
	}else if(sSubSys == "HAK")
	{
		
		var popupParams = {
				callback: this._smfExcelExportPopupCallback, // 콜백함수 지정
				sender: this, // sender 지정
				titlebar: false, // 타이틀바 표시 안함
				
				// 팝업 전달 파라메터 지정
				params: {
					// 처리타입 지정(필수)
					procType: "none",  // "none","search","insert","update","delete"
				},
			};

	// 모달팝업 실행
	this.smfDialog("_auto", "pa_pas_mms_pc::pas_mmspc00_p01.xfdl", popupParams);
	
	return "HAK";
	}

// 임시용(URL중첩때문)	
	var objServerInfo = 
	{
			 "local" : {  // 로컬
							  "PAS": "http://localhost:8080/nxuiPortal/index.html"+ "?subsys=" + sSubSys   // 대국민포털   		
							, "UDS": "http://localhost:8080/nxuiUds/install/nexaN_WS/newLauncher.html"     // 대입전형			
							, "UDA": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 대입전형자료온라인생성신청-대입전형자료(학교생활기록부)
							, "SQA": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 검정고시
							, "ORE": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 온라인채용
							, "HES": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 학원민원
							, "BDM": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 비영리법인민원
							, "PAR": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 학부모서비스
							, "EDS": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 교육설문
							, "AFS": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(외부강사)
							, "ECC": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(돌봄인력서비스)
							, "IBM": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(교과용도서)
							, "SEM": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(학교환경관리)
							, "PHE": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(체육)
							, "SML": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(급식)
							, "SPR": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 업무지원(교육복지)     
							, "EWS": "http://localhost:8080/nxui/index.html"      + "?subsys=" + sSubSys   // 교육복지원클릭  
							, "SCR": "http://localhost:8080//nxuiScr/index.html"      + "?subsys=" + sSubSys // 소통서비스     
					   }
			,"dev"   : {  // 개발
							  "PAS": "http://dev.neis.go.kr/nxuiPortal/index.html"        // 대국민포털      
							, "UDS": "http://dev.admission.neis.go.kr/install/nexaN_WS/newLauncher.html"    // 대입전형
							, "UDA": "http://dev.apply.neis.go.kr/nxui/index.html"        // 대입전형자료온라인생성신청-대입전형자료(학교생활기록부)
							, "SQA": "http://dev.kged.go.kr/nxui/index.html"              // 검정고시
							, "ORE": "http://dev.edurecruit.go.kr/nxui/index.html"        // 온라인채용
							, "HES": "http://dev.hakwon.neis.go.kr/nxui/index.html"       // 학원민원
							, "BDM": "http://dev.nonprofit.neis.go.kr/nxui/index.html"    // 비영리법인민원
							, "PAR": "http://parent.dev.neis.kr"    					  // 학부모서비스
							, "EDS": "http://dev.eduro.go.kr/nxui/index.html"             // 교육설문
							, "AFS": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(외부강사)
							, "ECC": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(돌봄인력서비스)
							, "IBM": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(교과용도서)
							, "SEM": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(학교환경관리)
							, "PHE": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(체육)
							, "SML": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(급식)
							, "SPR": "http://dev.cowork.neis.go.kr/nxui/index.html"       // 업무지원(교육복지)        
							, "EWS": "http://dev.oneclick.neis.go.kr/nxui/index.html"     // 교육복지원클릭     
							, "SCR": "http://dev.eardream.neis.go.kr/nxuiScr/index.html"     // 소통서비스     
					   }
			,"test"  : {  // 시험
							  "PAS": "http://tst.neis.go.kr/nxuiPortal/index.html"        // 대국민포털      
							, "UDS": "http://tst.admission.neis.go.kr/install/nexaN_WS/newLauncher.html"    // 대입전형
							, "UDA": "http://tst.apply.neis.go.kr/nxui/index.html"        // 대입전형자료온라인생성신청-대입전형자료(학교생활기록부)
							, "SQA": "http://tst.kged.go.kr/nxui/index.html"              // 검정고시
							, "ORE": "http://tst.edurecruit.go.kr/nxui/index.html"        // 온라인채용
							, "HES": "http://tst.hakwon.neis.go.kr/nxui/index.html"       // 학원민원
							, "BDM": "http://tst.nonprofit.neis.go.kr/nxui/index.html"    // 비영리법인민원
							, "PAR": "http://parent.tst.neis.kr"  					      // 학부모서비스
							, "EDS": "http://tst.eduro.go.kr/nxui/index.html"             // 교육설문
							, "AFS": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(외부강사)
							, "ECC": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(돌봄인력서비스)
							, "IBM": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(교과용도서)
							, "SEM": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(학교환경관리)
							, "PHE": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(체육)
							, "SML": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(급식)
							, "SPR": "http://tst.cowork.neis.go.kr/nxui/index.html"       // 업무지원(교육복지)        
							, "EWS": "http://tst.oneclick.neis.go.kr/nxui/index.html"     // 교육복지원클릭     
							, "SCR": "http://tst.eardream.neis.go.kr/nxuiScr/index.html"     // 소통서비스     
					   }
			,"prod"  : {  // 운영
							  "PAS": "https://www.neis.go.kr"        // 대국민포털      
							, "UDS": "https://admission.neis.go.kr/install/nexaN_WS/newLauncher.html"        // 대입전형
							, "UDA": "https://apply.neis.go.kr"            // 대입전형자료온라인생성신청-대입전형자료(학교생활기록부)
							, "SQA": "https://kged.go.kr"                  // 검정고시
							, "ORE": "https://edurecruit.go.kr"            // 온라인채용
							, "HES": "https://hakwon.neis.go.kr"           // 학원민원
							, "BDM": "https://nonprofit.neis.go.kr"        // 비영리법인민원
							, "PAR": "https://parents.neis.go.kr"             		      // 학부모서비스
							, "EDS": "https://www.eduro.go.kr"             // 교육설문
							, "AFS": "https://cowork.neis.go.kr"           // 업무지원(외부강사)
							, "ECC": "https://cowork.neis.go.kr"           // 업무지원(돌봄인력서비스)
							, "IBM": "https://cowork.neis.go.kr"           // 업무지원(교과용도서)
							, "SEM": "https://cowork.neis.go.kr"           // 업무지원(학교환경관리)
							, "PHE": "https://cowork.neis.go.kr"           // 업무지원(체육)
							, "SML": "https://cowork.neis.go.kr"           // 업무지원(급식)
							, "SPR": "https://cowork.neis.go.kr"           // 업무지원(교육복지)        
							, "EWS": "https://oneclick.neis.go.kr"         // 교육복지원클릭       
							, "SCR": "https://eardream.neis.go.kr"     // 소통서비스     
					   }
	};

	
	var objUrl =  objServerInfo[sServer];
	var sUrl = objUrl[sSubSys];

	// 필요한 경우 http/https 를 맞추어 줌
	if("undefined" != typeof window)  // html5 web browser
	{
		sUrl = sUrl.replace("http:",window.location.protocol);
	}

    return sUrl;
};

prForm.smfCloseMenu = function()
{
	if( this.getOwnerFrame().form.divAll.form["commpop_menu"] ) 
	{
		var objDel = this.getOwnerFrame().form.divAll.form.removeChild("commpop_menu");
		objDel.destroy();
		objDel = null;
		return;
	}	
};

prForm.smfSiteMap = function()
{
	// Create Object  
	var objDiv = new Div();  
	objDiv.init("commSitemap", 0, 0, null, null,0,0);

	 
	// Add Object to Parent Form  
	this.getOwnerFrame().form.addChild("commSitemap", objDiv); 
	 
	// Show Object  
	objDiv.show(); 
	
	objDiv.set_url("frame::pas/commSitemap.xfdl");	
};

/**
 * @class 우측 상단 사이트 맵 & 이용문의 버튼 추가 
 * @type : "open" | "redirect" 
*/
prForm.smfCreateTopSiteMap = function()
{
	if ( this.getOwnerFrame().form.divTop.right == 0 )
		this.getOwnerFrame().form.divTop.set_right(17); //divAll VScroll 넓이 17px
			
	if ( this.smfIsMobile() ) return; // PC 버전 생성(모바일 제외)
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["commNoticeAll"] ) return; //공지 팝업일 경우 제외
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["TopSiteMap"] ) return;

	// Top영역 minwidth보다 작을경우 메인의 가로스크롤 이동시에는 제외
	if (this.getOwnerFrame().form.divTop.form.divTopB.minwidth > this.getOwnerFrame().form.divTop.getOffsetWidth() &&
	    parseInt(this.getOwnerFrame().form.divAll.form.getHScrollPos(),0) <= parseInt(this.getOwnerFrame().form.divTop.form.getHScrollPos(),10) )
	{
		return;	
	}
	
	
	var nRightFix  = 17;
	var nWidth     = 84;
	var nHeight    = 313;
	this.fv_nRight = 150;

	var TopSiteMap = new Div();	
	TopSiteMap.init("TopSiteMap",null,100,nWidth,nHeight,nRightFix);	
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form.addChild(TopSiteMap.name, TopSiteMap );

	TopSiteMap.set_cssclass("div_Top_subGroup");
	TopSiteMap.show();
	
	var objBtn = new Button();
	objBtn.init("TopSiteMapBtn",26,12,33,106);	
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form["TopSiteMap"].form.addChild(objBtn.name, objBtn);
	objBtn.set_cssclass("btn_Top_vertcalTxt_W");
	objBtn.set_text("공\n지\n사\n항");
	objBtn._menuId = "3010";
	objBtn.setEventHandler("onclick", function(obj,e){
		
		var sUrl = "";
		sUrl = this.getOwnerFrame().form.divTop.form.dsMenu.lookup("menuId",obj._menuId,"menuUrlAddr");
		this.smfSetServiceLink(sUrl,"open",{});
		
	}, this);
	objBtn.set_visible(true);
	objBtn.show();	
	
	var objStc = new Static();
	objStc.init("TopSiteMapStc",0,null,null,183,0,0);	
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form["TopSiteMap"].form.addChild(objStc.name, objStc);
	objStc.set_initvalueid("ivStcAccessibilityOff");
	objStc.set_cssclass("sta_Top_vertcalTxt01");
	objStc.set_text("서\n비\n스");
	objStc.set_visible(true);
	objStc.show();
	
	var objBtn = new Button();
	objBtn.init("TopSiteMapStcBtn",23,132,39,176);	
	nexacro.getApplication().mainframe.VFrameSet.frameMain.form["TopSiteMap"].form.addChild(objBtn.name, objBtn);
	objBtn.set_initvalueid("ivBtnAccessibilityOn");
	objBtn.set_accessibilitylabel("원격지원서비스");
	objBtn.set_cssclass("btn_Top_vertcalTxt_B");
	objBtn.set_text("원\n격\n지\n원");
	objBtn.set_visible(true);
	objBtn.show();
	
	objBtn.setEventHandler("onclick", function(obj,e){
		// 개발 없다고 함.
		var sUrl = "http://as.neis.go.kr/new_neis/"; 
		var param = {};
		param.options = "width=600,height=600,scrollbars=yes";
		this.smfSetServiceLink(sUrl,"link",param);		
	}, this);	
};

//TopSiteMap 삭제
prForm._smfDestroyTopSitemap = function()
{	
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["commNoticeAll"] ) return;
	
	if ( nexacro.getApplication().mainframe.VFrameSet.frameMain.form["TopSiteMap"] )
	{
		var objTopSiteMap = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.removeChild("TopSiteMap");
		objTopSiteMap.destroy();
		objTopSiteMap = null;
	}
};

/**
 * @class  로그인여부 <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return {boolean} 로그인여부(true:로그인이후,false:로그인이전)
 * @example
 */
prForm.smfIsLogin = function()
{	
	var sIsLogin = nexacro.getEnvironmentVariable("ev_isLogin");
	
	return (sIsLogin=="Y"?true:false);
};

/**
 * @class  로그인여부를 세팅 <br>
 * @param {boolean} true:로그인이후,false:로그인이전	
 * @return N/A
 * @example
 */
prForm.smfSetLoginState = function(sValue)
{	
	var bLogin = (sValue==true)?"Y":"N";
	nexacro.setEnvironmentVariable("ev_isLogin",bLogin);
};

/**
 * @class  긴 문장을 component에 맞게 ...을 붙인다
 * @param {object} obj 길이를 조정할 컴포넌트(주로 Edit)	
 * @param {String} sLongText 긴 문장	
 * @return {String} 변경된 문장
 * @example
 */
prForm.smfDispLongText = function(obj,sLongText,sFont)
{
	var wordspace = obj._getCurrentStyleInheritValue("wordSpacing");
	var letterspace = obj._getCurrentStyleInheritValue("letterSpacing");
	var padding = obj._getCurrentStyleInheritValue("padding");
	//var objFont = this.smfIsNull(sFont)?sFont:obj._getCurrentStyleInheritValue("font", this._status);
	var objFont = this.smfIsNull(sFont)?obj._getCurrentStyleInheritValue("font", this._status):sFont;
	
	var nObjWidth = obj.getOffsetWidth();
	var textHeightB = nexacro.getTextSize(sLongText,objFont,true,nObjWidth,"char",wordspace,letterspace);
	
	//trace(textHeightB.nx,textHeightB.ny);
	
	var nPaddingTotal = 10; // 10은 여유분
	
	if(padding)
	{
		nPaddingTotal += (padding.left + padding.right); 
	}
	var nMaxTextWidth = nObjWidth - nPaddingTotal; 
	//trace("nMaxTextWidth="+nMaxTextWidth);
	if(textHeightB.nx>=nMaxTextWidth)
	{
		var sTextTemp = "";
		for(var i=0;i<sLongText.length;i++)
		{
			sTextTemp += sLongText.charAt(i);
			var nTextWidth = nexacro.getTextSize(sTextTemp+"...",objFont,true,nObjWidth,"char",wordspace,letterspace).nx;
			//trace("sTextTemp=["+sTextTemp+"..."+"] - "+nTextWidth);
			if(nTextWidth>=nMaxTextWidth)
			{
				return sTextTemp+"...";
				
			}
		}
	}else
	{
		return sLongText; 
	}
};

/**
 * @class  긴 문장을 component에 맞게 ...을 붙인다(그리드용)
 * @param {object} obj 길이를 조정할 컴포넌트(Grid)
 * @param {Number} nCell 대상 cell Index
 * @param {Number} nRow 대상 row Index
 * @param {String} sLongText 긴 문장
 * @return {String} 변경된 문장
 * @example
 */
prForm.smfDispLongTextGrid = function(obj,nCell,nRow,sLongText,sFont,nPadding)
{
	var selected = true;
	
	if(this.smfIsNull(nPadding)) 
	{
		nPadding = this.smfIsMobile()?40:20;
	}
	nPadding +=10;  // 여유있게 
	
	var objFont = this.smfNvl(sFont,obj._getCurrentStyleInheritValue("font", this._status));
	var wordspace = obj._getCurrentStyleInheritValue("wordSpacing");
	var letterspace = obj._getCurrentStyleInheritValue("letterSpacing");

	var objRect = obj.getCellRect(nRow,nCell);
	var nObjWidth = objRect.width;
	var nMaxTextWidth = nObjWidth-nPadding;
	
	var textHeightB = nexacro.getTextSize(sLongText,objFont,true,nObjWidth,"char",wordspace,letterspace);
	var nTextWidthB = parseInt(textHeightB.nx,10);


	//모바일-물리픽셀은 논리픽셀보다 2배의 밀도를 가진다.
	if(nTextWidthB>=nMaxTextWidth)
	{
		var tailText = nexacro.getTextSize("...",objFont);	
		nMaxTextWidth = nMaxTextWidth-tailText.nx;	//"..."를 뺀 width

		var sTextTemp = "";
		for (var i=0;i<sLongText.length;i++)
		{
			sTextTemp += sLongText.charAt(i);
			var nTextWidth = nexacro.getTextSize(sTextTemp,objFont,true,nObjWidth,"char",wordspace,letterspace).nx;
			
			if (nTextWidth>=nMaxTextWidth)
			{
				//trace("sTextTemp=["+sTextTemp+"..."+"] - "+nTextWidth, nMaxTextWidth);

				return sTextTemp.substr(0,sTextTemp.length)+"...";
				//return sTextTemp.substr(0,sTextTemp.length-1)+"...";
			}else {
				if (i==sLongText.length-1){
					return sTextTemp;
				}
			}
		}
	}else
	{
		return sLongText; 
	}
};

prForm.smfDispLongTextGridDecorate = function(comp,row,currow,longTextCol,objFont,nPadding)
{
	var sLongText = longTextCol;
	if(longTextCol.indexOf("<font color=") >= 0) 
	{
		sLongText = nexacro.replaceAll(sLongText,"<font color=red>","");
		sLongText = nexacro.replaceAll(sLongText,"</font>","");
		sLongText = this.smfDispLongTextGrid(comp,row,currow,sLongText, objFont, nPadding)
		
		sLongText = this._smfConvDecoText(sLongText,longTextCol);
		
	}
	else
	{
		sLongText = this.smfDispLongTextGrid(comp,row,currow,longTextCol, objFont, nPadding)
	}
	
	return sLongText;
};

prForm._smfConvDecoText = function(sLongText,longTextCol)
{
	// ... 로 끝나지 않은 것은 전체문자이므로, 원본 데이터를 그대로 반환
	if(sLongText.substr(sLongText.length-3,3) == "...")
	{
		var sConvText = "";
		
		var nCopyMaxLen = sLongText.length-3;
		var nCurOrgPos = 0;    // 원본텍스트의 현재위치
		var nCurCopyPos = 0;   // Copy할 문자의 현재위치
		var bTagStarted=false;
		while(nCurCopyPos<nCopyMaxLen)
		{
			var sChar = longTextCol[nCurOrgPos];
			if(sChar=="<")
			{  // tag를 만난 경우
				if(longTextCol.substr(nCurOrgPos,16)=="<font color=red>")
				{  // tag의 시작점
					sConvText += "<font color=red>"; 
					nCurOrgPos += 16;
					bTagStarted=true;
				}
				else if(longTextCol.substr(nCurOrgPos,7)=="</font>")
				{  // tag의 종료점
					sConvText += "</font>"; 
					nCurOrgPos += 7;
					bTagStarted=false;
				}
			}
			else
			{   // tag이외문자
					sConvText += sChar; 
					nCurOrgPos += 1;
					nCurCopyPos += 1;
			}

		}
		
		// tag의 시작점과 중간점 사이에서 copy가 끝난 경우 마지막에 tag종료를 시킴
		if(bTagStarted)
		{
			sConvText += "</font>"; 
			bTagStarted = false;
		}
		
		// 마지막에 ...을 추가
		sConvText += "..."; 
		return sConvText; 
	}
	else
	{
		return longTextCol; 
	}
	
}


/**
 * @class  이미지를 표시하기 위한 URL을 엉는다.
 * @param {String} sFileRefrnId 파일아이디	
 * @param {String} sFileId 파일SEQ
 * @return {String} 이미지 URL
 * @example
 */
prForm.smfGetImageUrl = function(sFileRefrnId,sFileId)
{
	var objEnv  = nexacro.getEnvironment();
	var objBaseSrv = objEnv.services["baseUrl"];
	var sBaseUrl = objBaseSrv.url;
	
	var sUrl = sBaseUrl + "/cm_cmc_file_imgview_nx.do?id=" + encodeURIComponent(sFileRefrnId) + "&seq=" + sFileId;
	
	return sUrl;
};

/**
 * @class reqMenu 삭제
 * @example
 */
prForm.smfRemoveMenuId = function()
{
	var divTop = nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divTop.form;
	if ( divTop.reqMenu )
	{
		delete divTop.reqMenu;
	}
};

/**
 * @class 메인 모드(B) || 메뉴 조회 모드(W) 체크	
 * @example
 */
prForm._smfIsTopDivMode = function(pMode)
{
	if( pMode == "W")
	{
		//return this.getOwnerFrame().form.divTop.form.divTopW.visible;
	}else if ( pMode == "B" )
	{
		return this.getOwnerFrame().form.divTop.form.divTopB.visible;
	}
	
	return false;
};

/**
 * @class 메인 모드에서 메뉴 조회 모드로 전환.	
 * @example
 */
prForm.smfChangeDiv = function(pMode)
{
	if(this._smfIsTopDivMode(pMode)) return;

	var ndivAllWTop        = 100;
	var ndivHeadWLeft      = 360;
	var ndivHeadWWidth     = 1200;	
	var ndivWorkWLeft      = 360;
	var ndivWorkWWidth     = 1200;
	var ndivTopWRight      = 0;

//trace(  this.getOwnerFrame().form.divTop.form.getVScrollPos() );
//trace(  this.getOwnerFrame().form.divAll.form._getHScrollBarSize() );

	if ( pMode == "W")
	{
		nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divAll.form.vscrollbar.set_pos(0);	
		this.getOwnerFrame().form.divTop.form.fnTopMode("W");
		
		//메인 모드에서 메뉴 조회 모드로 전환.
		if ( this.smfIsMobile() ) {
			this.getOwnerFrame().form.divAll.setOffsetTop(0);
			this.getOwnerFrame().form.divAll.form.divHead.setOffsetLeft(0);
			this.getOwnerFrame().form.divAll.form.divWork.setOffsetLeft(0);
			this.getOwnerFrame().form.divTop.set_right(ndivTopWRight);		
		}else {
			var nLeft,nWidth;
			var nMaxWidth = 1200;
			var nAllWidth = this.width;	// 전체 form의 사이즈

			// 중앙정렬을 위해 divAll에 스크롤 사이즈만큼 빼준다.
			var nTopW = parseInt(this.getOwnerFrame().form.divTop.form.width,10);
			var nAllW = parseInt(this.getOwnerFrame().form.divAll.form.width,10);
			if (nAllW==nTopW) {
				nAllWidth = nAllWidth - this._getHScrollBarSize();
			}

			if(nAllWidth >= nMaxWidth)	//1280 사용
			{
				nLeft = parseInt((nAllWidth - nMaxWidth) / 2);
				if(nLeft < 0) nLeft = 40;
				
				nWidth = nMaxWidth;	
			}else
			{
				nLeft = 40;
				nWidth = nAllWidth;
			}

			this.getOwnerFrame().form.divAll.setOffsetTop(ndivAllWTop);
			this.getOwnerFrame().form.divAll.form.divHead.setOffsetLeft(nLeft);	//ndivHeadWLeft
			this.getOwnerFrame().form.divAll.form.divHead.setOffsetWidth(ndivHeadWWidth);
			this.getOwnerFrame().form.divAll.form.divWork.setOffsetLeft(nLeft);	//ndivWorkWLeft
			this.getOwnerFrame().form.divAll.form.divWork.setOffsetWidth(nWidth);//ndivWorkWWidth
			this.getOwnerFrame().form.divTop.set_right(ndivTopWRight);
		}

		return;
	}else if ( pMode == "B" )
	{
		//nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divAll.form.vscrollbar.set_pos(0);		
		this.getOwnerFrame().form.divAll.setOffsetTop(0);
		this.getOwnerFrame().form.divAll.form.divWork.setOffsetWidth(this.width);
		this.getOwnerFrame().form.divAll.form.divWork.setOffsetLeft(0);

		//this.getOwnerFrame().form.frameMain_onload(); 	@RHS - 2022.12.02  주석
		this.getOwnerFrame().form.fnFormInit();
		
		this.getOwnerFrame().form.divTop.form.fnTopMode("B");
		//this._smfAnimationDivDirect(0);			
		return;
	}
};

/**
 * @class 금융인증서로그인을 실행한다.	
 * @example
 */
prForm.smfExecFinAuth = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm           = objParam.objForm;
	var sRrNo             = this.smfNvl(objParam.rrno,"");
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
            rrno     : sRrNo
		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_login_financeAuth.xfdl", popupParams);
	
};

/**
 * @class 행안부디지털원패스 로그인을 실행한다.	
 * @example
 */
prForm.smfExecMoisDOAuth = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
			loginInfo : objParam.loginInfo
		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_login_onepass.xfdl", popupParams);	
};

/**
 * @class 교육부디지털원패스 로그인을 실행한다.	
 * @example
 */
prForm.smfExecEduDOAuth = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
			loginInfo : objParam.loginInfo

		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_login_eduDO.xfdl", popupParams);
	
};

/**
 * @class 간편인증 로그인을 실행한다.	
 * @example
 */
prForm.smfExecSimpleAuth = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
			openType : objParam.openType,
			actionType : objParam.actionType
		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_login_simpleAuth.xfdl", popupParams);	
	
};

/**
 * @class 가운데정렬을 위해 화면에의되는 Div의 가로사이즈(기준1200px)
 * @example
 */
prForm.smfGetOpenOptions = function(formWidth, maxWidth)
{
	var nAllWidth = formWidth - this._getHScrollBarSize();  // 전체 form의 사이즈
	var nMaxWidth = (!this.smfIsNull(maxWidth))?maxWidth:1200;	//1200 or 600
	var nLeft,nWidth;

	if(nAllWidth >= nMaxWidth)	//1280 사용
	{
		nLeft = parseInt((nAllWidth - nMaxWidth) / 2);
		if(nLeft < 0) nLeft = 40;
		
		nWidth = nMaxWidth;	
	}else
	{
		nLeft = 40;
		nWidth = nAllWidth;
	}

	var aPosInfo = {left:nLeft, width:nWidth};

	return aPosInfo;
};

/**
 * @class 결제연동(KCP)을 실행한다.	
 * @example
 */
prForm.smfExecPayKCP = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
		    order_info : objParam.order_info   //  주문정보
		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_pay_kcp.xfdl", popupParams);
	
}

/**
 * @class 결제연동(KgINI)을 실행한다.(modal)		
 * @example
 */
prForm.smfExecPayKGINI = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
		    order_info : objParam.order_info   //  주문정보
		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_pay_kgini.xfdl", popupParams);
	
}	

/**
 * @class 결제연동(KgINI)을 실행한다.(modaless)	
 * @example
 */
prForm.smfExecPayKGINIOpen = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
		    order_info : objParam.order_info   //  주문정보
		}
	};

	// 모달팝업 실행
	//this.smfDialog("_auto", "comm::comp_pay_kgini.xfdl", popupParams);

	// 모달팝업 실행
	this.smfOpen("_auto", "comm::comp_pay_kgini.xfdl", popupParams);
	
}

/**
 * @class 로그인(공동인증서)를 실행한다.	
 * @example
 */
prForm.smfExecNpkiAuth = function(objParam)
{
	var objFuncCallback   = objParam.popupcallback;
	var objForm = objParam.objForm;
	// 팝업을 동작에 필요한 파라메터 지정
	var popupParams = {
		callback: objFuncCallback, // 콜백함수 지정
		sender: objForm, // sender 지정
		titlebar:false,  // 타이틀바를 표시하지 않는다.
		// 팝업 전달 파라메터 지정
		params: {
			// 처리타입 지정(필수)
			procType : "none",  // "none","search","insert","update","delete"
			loginInfo : objParam.loginInfo

		}
	};

	// 모달팝업 실행
	this.smfDialog("_auto", "comm::comp_login_npki.xfdl", popupParams);
	
};

/**
 * @class 현재 동작하는 서버를 구한다.	
 * @example
 */
prForm.smfGetRunMode = function()
{
	return nexacro.getEnvironmentVariable("ev_runMode");
};

/**
 * @class BaseUrl을 구한다.(http://localhost:8080) -Runtime사용 때문에 만듬.	
 * @example
 */
prForm.smfGetBaseUrl = function()
{
	var sBaseUrl = "";
	
	if(system.navigatorname.indexOf("nexacro")>-1)
	{
		//xadl의 url을 구한다
		var sXadlUrl = nexacro.getApplication().xadl;
		var nFindIdx = sXadlUrl.indexOf("nxui");
		
		//trace("====>>>> sXadlUrl="+sXadlUrl);
		if(nFindIdx>-1)
		{
			if(sXadlUrl.indexOf("file://")>-1)
			{
				sBaseUrl = "http://localhost:8080"
			}
			else
			{
				//var nFindIdx2 = sXadlUrl.indexOf("/",nFindIdx);
				sBaseUrl = sXadlUrl.substr(0,nFindIdx);				
			}
		}
			
	}
	else
	{
		sBaseUrl = window.location.protocol + "//" + window.location.host;
	}
	
	return sBaseUrl;
};

/**
 * @class 이미지크롭 공통팝업을 표시한다.	
 * @example
 */
prForm.smfImgCropPopup = function(objParam,sPopupId)
{
	// vkq
	sPopupId=sPopupId||"popupImageCrop";
	
	objParam.procType="none";
	var popupParams = {
		callback: this.fnPopupCallback, // 콜백함수 지정
		sender: objParam.senderObj, // sender 지정

		// 팝업 전달 파라메터 지정
		params: objParam,
	};	
	this.smfDialog(sPopupId,"comm::comp_ImgCrop.xfdl",popupParams);
}

/**
 * @class image로 부터 Base64이미지를 가져온다.(Base864로 세팅한 경우만)	
 * @param {object} objImage 대상 이미지 콤포넌트
 * @example
 */
prForm.smfGetBase64ImageData = function(objImage)
{
	var sUrl = objImage.image;
}


/**
 * @class 타시스템에서 넘어온 파라미터 값을 구한다.	
 * @example
 */
prForm.smfGetProjectParams = function()
{
	var sSubSystemGb = this.smfGetSubSystemGb();
	var objParams = {};
	
	//  특별화면 이동 처리를 한다.
	if(sSubSystemGb=="EDS")       // 교육설문   
	{
		var sEdsType = nexacro.getEnvironmentVariable("ev_param_edstype" );		// 교육설문종류
		var sEdsData = nexacro.getEnvironmentVariable("ev_param_edsdata" );     // 교육설문데이터
		var sEdsStartMode = nexacro.getEnvironmentVariable("ev_edsStartMode" );     // 교육설문 시작모드 (""/"mom"/"survey"/"human")
		
		objParams = {
						edstype : sEdsType  // 교육설문종류
					,	edsdata : sEdsData  // 교육설문데이터
					,   edsstartmode : sEdsStartMode   // 교육설문 시작모드 (""/"mom"/"survey"/"human")
					}
		
		
	}
	else if(sSubSystemGb=="PAR")  // 유치원
	{
		var sUserVrId  = nexacro.getEnvironmentVariable("ev_param_userVrId"  );		// 사용자 가상ID
		var sStuDtclNo = nexacro.getEnvironmentVariable("ev_param_stuDtclNo" );     // 자녀 고유 번호
		var sScrnId    = nexacro.getEnvironmentVariable("ev_param_scrnId"    );     // 호출될 화면 ID
		var sScrnType  = nexacro.getEnvironmentVariable("ev_param_scrnType"  );     // 업무단화면구분여부("Y":업무화면,"N":화면관리화면)
		
		objParams = {
						userVrId  : sUserVrId   // 사용자 가상ID
					,	stuDtclNo : sStuDtclNo  // 자녀 고유 번호
					,	scrnId    : sScrnId     // 호출될 화면 ID
					,	scrnType  : sScrnType   // 업무단화면구분여부("Y":업무화면,"N":화면관리화면)
					}
	}
	
	return objParams
}

/**
 * @class 지정된 Form안에 있는 에디터관련 copm에 samelabelcss를 "false"로 세팅(온라인채용전용)	
 * @param {object} objForm 대상 콤포넌트
 * @example
 */
prForm.smfSetUserProperty_samelabelcss = function(objForm)
{
	var objComps = objForm.components;
	
	for(var i=0;i<objComps.length;i++)
	{
		objComp = objComps[i];
		if(  (objComp instanceof nexacro.Div)
		  || (objComp instanceof nexacro.PopupDiv)
		  )
		{
			this.smfSetUserProperty_samelabelcss(objComp.form);
		}
		else if(objComp instanceof nexacro.Tab)
		{
			for(var j=0;j<objComp.tabpages.length;j++)
			{
				this.smfSetUserProperty_samelabelcss(objComp.tabpages[j].form);
			}
		}
		else if(  (objComp instanceof nexacro.Edit)
		       || (objComp instanceof nexacro.Combo) 
		       || (objComp instanceof nexacro.TextArea) 
		       || (objComp instanceof nexacro.MaskEdit) 
		       || (objComp instanceof nexacro.Radio) 
		       || (objComp instanceof nexacro.CheckBox) 
		       || (objComp instanceof nexacro.Spin) 
		       || (objComp instanceof nexacro.Calendar) 
		       || (objComp instanceof nexacro.ImageViewer) 
		       )
		{
			objComp.samelabelcss = false;
		}
		
	}
	
}

prForm.smfLoginProc = function(objCallForm,objOption)
{
	/*
		objOption = {
					   callbabck : this.fnLoginCallback            // [선택] 지정된 함수를 call(redirectFormId가 세팅되어 있는 경우 호출하지 않음)
		             }
	*/

	// (주의) 이 함수는 팝업에서는 사용불가
	if(!objOption) objOption = {};
	objOption._objForm = objCallForm;
	
	var objTopFrame = this.getOwnerFrame().form.divTop;
	
	if(objTopFrame)
	{
		objTopFrame.form._login_option = objOption;
		objTopFrame.form.fnLoginAfter();
	}
}


prForm.smfLogoutProc = function(objCallForm,objOption)
{
	/*
		objOption = {
					   callbabck : this.fnLogoutCallback           // [선택] 지정된 함수를 call(redirectFormId가 세팅되어 있는 경우 호출하지 않음)
					 , redirectFormId : "xxx::xxx.xfdl"            // [선택] 지정없으면 메인화면으로 이동(서브시스템별로 다를 수 있음)
					 , redirectParam : {"xx1":"yy1","xx2":"yy2"}   // [선택] 넘길 파라미터가 있는 경우(this.smfGetFormParams()로 가져올 수 있음)
		             }
	*/
	if(!objOption) objOption = {};
	objOption._objForm = objCallForm;
	
	// (주의) 이 함수는 팝업에서는 사용불가
	var objTopFrame = this.getOwnerFrame().form.divTop;
	
	if(objTopFrame)
	{	
		objTopFrame.form._logout_option = objOption;
		objTopFrame.fnLogout();
	}
}


//***************************************************
// 가상키보드 - 시작
//***************************************************
/**
*  RaonKey 가상키 적용
* @param obj - 대상 Edit Component (필수)
*/
prForm.smfInitTranskey = function(objOption)
{
	//기본값 셋팅
	var nMaxLength =  this.smfNvl(objOption.maxLength, 8);
	var sKbdType =   this.smfNvl(objOption.kbdType, "qwerty");
	var e2eflag = { "enc" : "on", "maxLength" : nMaxLength, "kbdType" : sKbdType};
	var bShow = this.smfNvl(objOption.bshow, false);
	
	if(objOption.dataType)
	{
		e2eflag.dataType = objOption.dataType;
	}
	
	// 모바일인 경우 
	if(this.smfIsMobile())
	{
		objOption.target.e2e = e2eflag;
	}
 
	//가상키 적용
	this.raon_ApplyTransKey(objOption.target, objOption.targetKey, bShow, e2eflag);
}


/**
* 대상 컴포넌트의 마우스입력 선택유무 체크
* @param obj - 대상 Edit Component (필수)
* @return   선택 - transkey /  미선택 - e2e
*/
prForm.smfGetValueTranskey = function(obj)
{
	return this.raon_GetTranskeyValue(obj);
}


/**
*  RaonKey  E2E 및 가상키보안 적용된 암호화값을 읽어 Transaction parameter로 return
* @param arrObj - 대상 Edit Component Array (필수)
*/
prForm.smfGetEncDataTranskey = function(arrObj)
{
	//var arrComp = [arrObj];
	var sVal    = this.raon_GetEncData(arrObj);
	return sVal
}

/** 
* RaonKey 가상키 초기화
* @param obj - 대상 Edit Component (필수)
* this.raon_ClearTranskey(obj) 
**/
prForm.smfClearTranskey = function(obj)
{
	this.raon_ClearTranskey(obj);
}

/** 
* smfGetEncDataTranskey에서 return받은 parameter 데이터셋에 담기
* @param objDs - 대상 Dataset (필수)
* @param arrObj - 대상 Obj (필수)
* @param sVal - value (필수)
**/
prForm.smfConvRaonDataToDs = function(objDs, arrObj, sVal)
{
	//objDs가 없으면 return
	objDs.set_enableevent(false);
	objDs.clearData();
	
	var objParams ={};
	var arrParams = sVal.split(" ");
	for(var j=0;j<arrParams.length;j++)
	{
		var arrParam = arrParams[j].split("=");
		objParams[arrParam[0]] = arrParam[1];		
	}
	
	//obj배열만큼 반복
	for(var i=0; i<arrObj.length; i++) {
		var nRow = objDs.addRow();
		
		
		var objId = arrObj[i].name;
		
		for(var k=0;k<objDs.colcount;k++)
		{
			var sColNm = objDs.getColID(k);
			var sKeyName = objId+"_" + sColNm;
			var sData = nexacro.stripQuote(objParams[sKeyName]);
			objDs.setColumn(nRow,sColNm,sData);
		}
	}
	objDs.set_enableevent(true);
}



//***************************************************
//  가상키보드 - 종료
//***************************************************

/** 
* 입력한 값의 바이트수를 구한다.
* @param sValue - 대상 문자
* nLength = smfGetByteLength(sText); 
**/
prForm.smfGetByteLength = function(sValue)
{
	var nLength=0;
	
	if(!this.smfIsNull(sValue))
	{
		// UTF-8인 경우 문자의 바이트를 계산
		// 2048(2^11)로나누었을때 몫이 있으면 2048보다 큰 유니코드이므로 3바이트,
		// 128(2^7)로나누었을때 몫이 있으면 128보다 큰 유니코드이므로 2바이트,
		// 나머지 경우는 1바이트	
		for(var i=0;i<sValue.length;i++)
		{
			var charA=sValue.charCodeAt(i);
			nLength += (charA>>11)?3:(charA>>7?2:1);
		}
	}
	
	return nLength;		
}

/** 
* HTTP timeout을 변경한다.
* @param nTimeout - 설정할 HttpTimeout(단위:초)
* this.smfSetHttpTimeOut(300); 
**/
prForm.smfSetHttpTimeOut = function(nTimeout)
{
	var objEnv = nexacro.getEnvironment();

	//  기존의 default httptimeout을 보관해 둔다.
	var sDefaultTimeout = nexacro.getEnvironmentVariable("ev_defaulthttptimeout");
	if(this.smfIsNull(sDefaultTimeout))
	{
		nexacro.setEnvironmentVariable("ev_defaulthttptimeout",objEnv.httptimeout+"");
	}
	objEnv.set_httptimeout( nTimeout );  
}

/** 
* HTTP timeout의 원래 값으로 되돌린다(일반적으로 60초)
* this.smfSetDefaultHttpTimeOut(); 
**/
prForm.smfSetDefaultHttpTimeOut = function()
{
	var nTimeOut = 60;  // 60초
	
	var sDefaultTimeout = nexacro.getEnvironmentVariable("ev_defaulthttptimeout");
	if(this.smfIsNull(sDefaultTimeout))
	{
		nTimeOut = parseInt(sDefaultTimeout);
	}
	
	this.smfSetHttpTimeOut(nTimeOut );  
}


/** 
* 지정된 그리드의 Row까지 스크롤 시킨다.
* @param objGrid - 대상이 되는 그리드 오브젝트
* @param nRow - 대상 Row
* this.smfSetGridScroll(this.grdMain,9); 
**/
prForm.smfSetGridScroll = function(objGrid,nRow)
{
	//var nRow  = 9;
	//var nCell = 0;
	//var objGrid = this.grd00;
	
	// row의 위치를 옮긴다.
	var objDs = objGrid.getBindDataset();
	if(objDs)
	{
		objDs.set_rowposition(nRow);
	}
	
	// 스크롤을 한다.
	var nCurScrollPos = objGrid.getVScrollPos();
	trace("nCurScrollPos="+nCurScrollPos);
	
	this._smfGetGridCellPosForScroll(objGrid,nRow);
	
	// Focus를 이동한다.
	objGrid.setFocus();
}

/** 
* 지정된 그리드의 divAll의 Top을 구해 스크롤 시킨다.
* @param objGrid - 대상이 되는 그리드 오브젝트
* @param nRow - 대상 Row
* this.smfSetGridScroll(this.grdMain,9); 
**/
prForm._smfGetGridCellPosForScroll = function(objGrid,nRow)
{
	var nCell = 0;
	var nGridCellTop = 0;
	
	var objRect = objGrid.getCellRect(nRow,nCell);
	nGridCellTop = objRect.top;
	
	objTarget = objGrid;
	while(true)
	{
		if(objTarget instanceof nexacro.Div)
		{
			nGridCellTop += objTarget.getOffsetTop();
		}
		if(objTarget.id == "divWork") break;
		if(objTarget.id == "mainframe") break;
		
		objTarget = objTarget.parent;
	}
	
	var bQuickView = nexacro.getEnvironmentVariable("ev_quikView"); 
	
	if(bQuickView == "Y")
	{
		nexacro.getApplication().mainframe.scrollTo(0,nGridCellTop);
	}
	else
	{
		nexacro.getApplication().mainframe.VFrameSet.frameMain.form.divAll.scrollTo(0,nGridCellTop);
	}
}

/** 
* 공지사항 팝업의 [오늘 다시보지않기]에 대한 세팅을 한다.
* @param sChk - 오늘보여주기여부 ("1":오늘안보여주기 , "0": 오늘보여주기)
* this.smfSetNoticePopupToday(this.chkToday.value); 
**/
prForm.smfSetNoticePopupToday = function(sChk)
{
	var sSubSys = this.smfGetSubSystemGb();
	var sProfileId = "chkToday_" + sSubSys;
	//오늘 다시 보지 않기
	if ( sChk == "1")
	{
		var sChkToday = this.smfToday();
		nexacro.setPrivateProfile(sProfileId,sChkToday);
	}else
	{
		nexacro.setPrivateProfile(sProfileId,"");
	}
}

/** 
* 공지사항 팝업의 [오늘 다시보지않기]에 대한 세팅을 한다.
* @param sChk - 오늘보여주기여부 ("1":오늘안보여주기 , "0": 오늘보여주기)
* this.smfSetNoticePopupToday(this.chkToday.value); 
**/
prForm.smfGetSubSysDetailGbName = function(sSubsysDetailGb)
{
	var sSubsysDetailGbName = "";
	
	// 온라인 채용의 경우 한자리로 넘어올 수 있음
	sSubsysDetailGb = this.smfLPad(sSubsysDetailGb,"0",3);
	
	switch(sSubsysDetailGb)
	{
		case "001" : sSubsysDetailGbName="유·초등교원";break;  // 온라인채용(유·초등교원)
		case "002" : sSubsysDetailGbName="중등교원";break;  // 온라인채용(중등교원)
		case "003" : sSubsysDetailGbName="지방공무원";break;  // 온라인채용(지방공무원)
		case "004" : sSubsysDetailGbName="교육공무직";break;  // 온라인채용(교육공무직)
		case "005" : sSubsysDetailGbName="계약제교원인력풀";break;  // 온라인채용(계약제교원인력풀)
		case "101" : sSubsysDetailGbName="온라인원서접수";break;  // 검정고시(온라인원서접수)
		case "102" : sSubsysDetailGbName="대입전형자료제출";break;  // 검정고시(대입전형자료제출)
		case "201" : sSubsysDetailGbName="";break;  // 대입전형(학생부)
		case "103" : sSubsysDetailGbName="";break;  // 대입전형(검정고시)
	}
	
	return sSubsysDetailGbName;
}

// 이전의 history가 존재하는지 여부
prForm.smfIsHistory = function(objForm)
{
	if(MyHistory)
	{
		var hash = MyHistory.getLocationHash();		
		if ( hash )
		{
			return true;
		}
	}
	
	return false;
}