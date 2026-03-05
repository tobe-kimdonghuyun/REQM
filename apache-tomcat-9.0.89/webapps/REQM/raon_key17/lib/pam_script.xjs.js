//XJS=pam_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  나이스 - 대국민
        *  @MenuPath    대국민 업무메인화면요 공통함수
        *  @FileName 	pam_script.xjs
        *  @Creator 	정인혁
        *  @CreateDate 	2022.9.27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier            Description
        *******************************************************************************
        *  2022.9.27     	정인혁 	        최초 생성
        *******************************************************************************
        */

        // 내부의 항목을 보관
        this._divTopNotice=null;
        this._divBottomNotice=null;
        this._divTelInfo=null;
        this._objMainPageInfo={};

        /**
         * 메인페이지를 구성하기 위한 정보를 받아 화면을 구성한다.
         * @param  parent : 컨테이너 컴포넌트
         * @param  findForComponentName : 찾을대상 컴포넌트명
         * @return 검색된 컴포넌트
         * @example var edt_stdent = this.svcfFindComponent(parent, findForComponentName);
         */
        this.pamfSetMainPageInfo = function(objMainForminfo)
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
        	this._objMainPageInfo = objMainForminfo;

        	var objDivAllForm = this.getOwnerFrame().form.divAll.form;
        	var objDivTopForm = this.getOwnerFrame().form.divTop.form;
        	var objDivNotice = this.getOwnerFrame().form.divNotice;

        	// wildmode여부 세팅(divWork에 세팅)
        	var sWildMode = this.smfNvl(objMainForminfo.wildmode,"N");
        	objDivAllForm.divWork.wildmode = sWildMode;


        	// QuickMenu를 표시한다.
        	objDivAllForm.divQuickMenu.set_visible(false);  // 일단 안보이게 한다.
        	objDivAllForm.divQuickMenu.useYn =  "N";
        	if(objMainForminfo.quickmenu && objMainForminfo.quickmenu.use)
        	{
        		if(objMainForminfo.quickmenu.use=="Y")
        		{
        			var nAllWidth = this.getOwnerFrame().width - this._getHScrollBarSize();  // 전체 form의 사이즈
        			var nWidth = 1600;
        			//@KBR 화면width 1600이하일 때 visible false
        			if(nAllWidth >= nWidth ) objDivAllForm.divQuickMenu.set_visible(true);
        			else				  	 objDivAllForm.divQuickMenu.set_visible(false);
        			objDivAllForm.divQuickMenu.useYn =  "Y";
        			objDivAllForm.divQuickMenu.set_url(objMainForminfo.quickmenu.url);
        		}
        	}

        	// toplink를 표시한다.
        	/*
        	objDivTopForm.divQuickMenu.set_visible(false);  // 일단 안보이게 한다.
        	if(objMainForminfo.quickmenu && objMainForminfo.quickmenu.use)
        	{
        		if(objMainForminfo.quickmenu.use=="Y")
        		{
        			objDivAllForm.divQuickMenu.set_visible(true);
        			objDivAllForm.divQuickMenu.set_url(objMainForminfo.quickmenu.url);
        		}
        	}
        	*/

        	// Notice를 표시한다.
        	objDivNotice.set_visible(false);  // 일단 안보이게 한다.
        	objDivNotice.setOffsetHeight(0);  // 일단 안보이게 한다.
        	if(objMainForminfo.noticeband && objMainForminfo.noticeband.use)
        	{
        		if(objMainForminfo.noticeband.use=="Y")
        		{
        			objDivNotice.set_visible(true);
        			objDivNotice.setOffsetHeight(objDivNotice._Orgheight);  // 일단 안보이게 한다.
        			objDivNotice._serviceurl = objMainForminfo.noticeband.serviceurl;
        		}
        	}

        	// divTopNotice를 세팅한다.
        	if(objMainForminfo.divTopNotice)
        	{
        		this.pamfSetTopNotice(objMainForminfo.divTopNotice);
        	}


        	// divTopNotice를 세팅한다.
        	if(objMainForminfo.divBottomNotice)
        	{
        		this.pamfSetBottomNotice(objMainForminfo.divBottomNotice);
        	}

        	// divAll에 있는 배경이미지를 업무별로 세팅한다.
        	var sSubSysCd = this.smfGetSubSystemGb();
        	var sCssclass = "";

        	// 이미지를 세팅한다.
        	this.getOwnerFrame().form.fnSetBgImage();

        	// resetScroll을 한다.
        	var nMargin = this.fv_DIV_MARGIN;
        	if(this.parent.divmargin)
        	{
        		nMargin = parseInt(this.parent.divmargin);
        	}


        	var nMaxHeight = this._smfGetMaxBottomPos(this) + nMargin;
        	this.parent.setOffsetHeight(nMaxHeight);
        	this.resetScroll();                       // divWork
        	this.parent.parent.resetScroll();  // divAll
        	this.parent.parent.parent.parent.resetScroll();  // frameMain

        }

        //==================================================================
        //   divTopNotice Setting - start
        //==================================================================
        this.pamfSetTopNotice = function (objTopNoticeInfo)
        {
        	var objDiv = objTopNoticeInfo.objdiv;
        	var objDs  = objTopNoticeInfo.objds;

        	var objStaCddcNm      = objDiv.form["staCddcNm"    ]; // 교육청명
        	var objBtnListLink    = objDiv.form["btnListLink"  ]; // 상세화면이동
        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공고타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeInfo  = objDiv.form["staNoticeInfo"]; // 접수기간
        	var objBtnLink00      = objDiv.form["btnLink00"    ]; // 공고화면링크버튼0
        	var objBtnLink01      = objDiv.form["btnLink01"    ]; // 공고화면링크버튼1
        	var objBtnLink02      = objDiv.form["btnLink02"    ]; // 공고화면링크버튼2
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공고이동 페이징

        	// 데이터셋을 세팅
        	objDiv._objDs = objDs;
        	objDiv._listredirecturl = objTopNoticeInfo.listredirecturl;


        	if(objBtnListLink)
        	{
        		objBtnListLink.addEventHandler("onclick",this.divTopNotice_btnListLink_onclick,this);
        	}

        	if(objBtnPre)
        	{
        		objBtnPre.addEventHandler("onclick",this.divTopNotice_btnPre_onclick,this);
        		objBtnPre.set_visible(false);
        	}

        	if(objBtnNext)
        	{
        		objBtnNext.addEventHandler("onclick",this.divTopNotice_btnNext_onclick,this);
        		objBtnNext.set_visible(false);
        	}

        	if(objBtnLink00)
        	{
        		objBtnLink00.addEventHandler("onclick",this.divTopNotice_btnLink_onclick,this);
        		objBtnLink00.set_visible(false);
        	}

        	if(objBtnLink01)
        	{
        		objBtnLink01.addEventHandler("onclick",this.divTopNotice_btnLink_onclick,this);
        		objBtnLink01.set_visible(false);
        	}

        	if(objBtnLink02)
        	{
        		objBtnLink02.addEventHandler("onclick",this.divTopNotice_btnLink_onclick,this);
        		objBtnLink02.set_visible(false);
        	}

        	this.pamfRefreshTopNotice(objDiv);

        }

        this.pamfRefreshTopNotice = function(objDiv)
        {
        	var objDs = objDiv._objDs;

        	var objStaCddcNm      = objDiv.form["staCddcNm"    ]; // 교육청명
        	var objBtnListLink    = objDiv.form["btnListLink"  ]; // 상세화면이동
        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공고타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeInfo  = objDiv.form["staNoticeInfo"]; // 접수기간
        	var objBtnLink00      = objDiv.form["btnLink00"    ]; // 공고화면링크버튼0
        	var objBtnLink01      = objDiv.form["btnLink01"    ]; // 공고화면링크버튼1
        	var objBtnLink02      = objDiv.form["btnLink02"    ]; // 공고화면링크버튼2
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공고이동 페이징

        	// 현재 idx를 하나줄인다.
        	objDiv._curIdx = -1;

        	if(objBtnListLink   ) objBtnListLink.set_visible(false);
        	if(objStaNoticeText ) objStaNoticeText.set_visible(false);
        	if(objBtnPre        ) objBtnPre.set_visible(false);
        	if(objBtnNext       ) objBtnNext.set_visible(false);
        	if(objStaNoticeInfo ) objStaNoticeInfo.set_visible(false);
        	if(objBtnLink00     ) objBtnLink00.set_visible(false);
        	if(objBtnLink01     ) objBtnLink01.set_visible(false);
        	if(objBtnLink02     ) objBtnLink02.set_visible(false);
        	if(objDivPage       ) objDivPage.set_visible(false);

        	if(objDs.rowcount == 0) return;

        	// 현재 idx를 하나줄인다.
        	objDiv._curIdx = 0;

        	if(objBtnListLink   ) objBtnListLink.set_visible(true);
        	if(objStaNoticeText )
        	{
        		var sTitle = objDs.getColumn(0,"ntcMteTitlNm");
        		objStaNoticeText.set_visible(true);
        		objStaNoticeText.set_text(sTitle);
        	}
        	//if(objBtnPre        ) objBtnPre.set_visible(true);
        	if((objBtnNext      )&&(objDs.rowcount > 1)) objBtnNext.set_visible(true);
        	if(objStaNoticeInfo )
        	{
        		var sBeginYmd = objDs.getColumn(0,"itnRcptBgngYmd");
        		var sEndYmd   = objDs.getColumn(0,"itnRcptEndYmd" );
        		objStaNoticeInfo.set_visible(true);
        		objStaNoticeInfo.set_text(this.pamfGetDispDateFromTo(sBeginYmd,sEndYmd));
        	}
        	if(objBtnLink00     ) objBtnLink00.set_visible(true);
        	if(objBtnLink01     ) objBtnLink01.set_visible(true);
        	if(objBtnLink02     ) objBtnLink02.set_visible(true);
        	if(objDivPage       )
        	{
        		var i;

        		var objDivPageComps = objDivPage.form.components;
        		for(i=0;i<objDivPageComps.length;i++ )
        		{
        			var objDivPageComp = objDivPageComps[i];
        			var objPageLinkBtn = objDivPage.form[sPageLinkBtnId];
        			if(objDivPageComp.id.indexOf("btnPageLink")==0)
        			{
        				objDivPageComp.set_visible(false);
        				if(objDivPageComp.findEventHandler("onclick",this.divTopNotice_divPage_btnNotice_onclick,this) < 0)
        				{
        					objDivPageComp.addEventHandler("onclick",this.divTopNotice_divPage_btnNotice_onclick,this);
        				}
        				objDivPageComp._rowNo = i;
        			}
        		}


        		var nStartLeft = 14;
        		var nLeft = nStartLeft;
        		var nTop = 0;
        		var nWidth = 16;
        		var nHeight = 24;
        		var nGap = 1;

        		//@KBR cssclass
        		var normalCssClass =  this.isNil(objDivPage.normalcssclass)? "btn_WF_Page02" : objDivPage.normalcssclass;
        		var selCssClass = 	  this.isNil(objDivPage.selectcssclass)? "btn_WF_PageS02" : objDivPage.selectcssclass;

        		// 공고사항하단의 PageLink 버튼을 생성한다.
        		for(i=0;i<objDs.rowcount;i++)
        		{
        			var sPageLinkBtnId = "btnPageLink"+i;
        			var objPageLinkBtn = objDivPage.form[sPageLinkBtnId];
        			if(!objPageLinkBtn)
        			{
        				nLeft = nStartLeft + ((nWidth+nGap)*i);
        				objPageLinkBtn = new Button(sPageLinkBtnId,nLeft,nTop,nWidth,nHeight);
        				objPageLinkBtn._rowNo = i;
        				objPageLinkBtn.set_initvalueid("ivBtnAccessibilityButton");

        				objPageLinkBtn.addEventHandler("onclick",this.divTopNotice_divPage_btnNotice_onclick,this);

        			}

        			sCssClass = (i==0)?  selCssClass : normalCssClass;
        			objPageLinkBtn.set_cssclass(sCssClass);
        			objPageLinkBtn.set_visible(true);
        		}

        		objDivPage.setOffsetWidth(nStartLeft + ((nWidth+nGap)*objDs.rowcount));

        		// 데이터가 있으면 보이게 한다.
        		objDivPage.set_visible(true);
        	}

        	// 값을 세팅한다.


        }


        this._pamfMoveContentsTopNotice =function(objDiv,nOldIdx,nNewIdx)
        {
        	var objDs = objDiv._objDs;

        	var objStaCddcNm      = objDiv.form["staCddcNm"    ]; // 교육청명
        	var objBtnListLink    = objDiv.form["btnListLink"  ]; // 상세화면이동
        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공고타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeInfo  = objDiv.form["staNoticeInfo"]; // 접수기간
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공고이동 페이징


        	if(objStaNoticeText)
        	{
        		var sTitle = objDs.getColumn(nNewIdx,"ntcMteTitlNm");
        		objStaNoticeText.set_text(sTitle);
        	}
        	if(objStaNoticeInfo)
        	{
        		var sBeginYmd = objDs.getColumn(nNewIdx,"itnRcptBgngYmd");
        		var sEndYmd = objDs.getColumn(nNewIdx,"itnRcptEndYmd");
        		objStaNoticeInfo.set_text(this.pamfGetDispDateFromTo(sBeginYmd,sEndYmd));
        	}

        	if(objBtnPre)
        	{
        		if(objDiv._curIdx==0) objBtnPre.set_visible(false);
        		else objBtnPre.set_visible(true);
        	}
        	if(objBtnNext)
        	{
        		if(objDiv._curIdx==(objDs.rowcount-1)) objBtnNext.set_visible(false)
        		else objBtnNext.set_visible(true);
        	}

        	//@KBR cssclass
        	var normalCssClass =  this.isNil(objDivPage.normalcssclass)? "btn_WF_Page02" : objDivPage.normalcssclass;
        	var selCssClass = 	  this.isNil(objDivPage.selectcssclass)? "btn_WF_PageS02" : objDivPage.selectcssclass;

        	if(objDivPage)
        	{
        		objDivPage.form["btnPageLink"+nOldIdx].set_cssclass( normalCssClass );
        		objDivPage.form["btnPageLink"+nNewIdx].set_cssclass( selCssClass );
        	}
        }

        this.pamfGetDispDateFromTo = function(sBeginYmd,sEndYmd)
        {
        	var sDispDate = "";
        	if( sBeginYmd instanceof nexacro.Date)
        	{
        		sBeginYmd = this.smfMakeDate(sBeginYmd.getYear(), sBeginYmd.getMonth()+1, sBeginYmd.getDate())
        	}
        	if( sEndYmd instanceof nexacro.Date)
        	{
        		sEndYmd = this.smfMakeDate(sEndYmd.getYear(), sEndYmd.getMonth()+1, sEndYmd.getDate())
        	}

        	if(sBeginYmd.length==8)
        	{
        		sDispDate += sBeginYmd.substr(0,4) + "." + sBeginYmd.substr(4,2) + "." +sBeginYmd.substr(6,2);
        	}
        	if(sEndYmd.length==8)
        	{
        		sDispDate +=  " ~";
        		sDispDate += sEndYmd.substr(0,4) + "." + sEndYmd.substr(4,2) + "." +sEndYmd.substr(6,2);
        	}

        	return sDispDate;
        }

        this.divTopNotice_btnListLink_onclick = function(obj,e)
        {
        	// 다른 화면으로 이동한다.
        	var objParams = {};
        	var sUrl = obj._redirectUrl || "pa_sqa_noi_bi::sqa_noibi01_m00.xfdl";

        	this.smfSetWorkPage(sUrl, objParams);
        };

        this.divTopNotice_btnPre_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var nOldIdx = objDiv._curIdx;
        	objDiv._curIdx--;
        	var nNewIdx = objDiv._curIdx;

        	this._pamfMoveContentsTopNotice(objDiv,nOldIdx,nNewIdx);
        };

        this.divTopNotice_btnNext_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var nOldIdx = objDiv._curIdx;
        	objDiv._curIdx++;
        	var nNewIdx = objDiv._curIdx;

        	this._pamfMoveContentsTopNotice(objDiv,nOldIdx,nNewIdx);
        };

        this.divTopNotice_staNoticeText_onclick = function(obj,e)
        {

        };

        this.divTopNotice_btnLink_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var objParams = {};
        	var sUrl = obj.redirecturl;

        	var nRow = objDiv._curIdx;
        	for(var i=0;i<objDs.colcount;i++)
        	{
        		var sColId = objDs.getColID(i);
        		var sColVal = objDs.getColumn(nRow,sColId);

        		objParams[sColId]=sColVal;
        	}


        	this.smfSetWorkPage(sUrl, objParams);



        };

        this.divTopNotice_divPage_btnNotice_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;
        	var nOldIdx = objDiv._curIdx;
        	var nNewIdx = obj._rowNo;

        	objDiv._curIdx = nNewIdx;
        	this._pamfMoveContentsTopNotice(objDiv,nOldIdx,nNewIdx);
        };


        this.pamfDivTopNoticeAddData = function(objDiv,objDs)
        {
        	objDiv._objDataset = objDs;


        }

        //==================================================================
        //   divTopNotice Setting - End
        //==================================================================


        //==================================================================
        //   divBottomNotice Setting - Start
        //==================================================================
        this.pamfSetBottomNotice = function (objBottomNoticeInfo)
        {
        	var objDiv = objBottomNoticeInfo.objdiv;
        	var objDs  = objBottomNoticeInfo.objds;

        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공지타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeDate  = objDiv.form["staNoticeDate"]; // 공지등록일
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공지이동 페이징

        	// 데이터셋을 세팅
        	objDiv._objDs = objDs;
        	objDiv._listredirecturl = objBottomNoticeInfo.listredirecturl;

        	if(objBtnPre)
        	{
        		objBtnPre.addEventHandler("onclick",this.divBottomNotice_btnPre_onclick,this);
        		objBtnPre.set_visible(false);
        	}

        	if(objBtnNext)
        	{
        		objBtnNext.addEventHandler("onclick",this.divBottomNotice_btnNext_onclick,this);
        		objBtnNext.set_visible(false);
        	}

        	if(objStaNoticeText)
        	{
        		objStaNoticeText.addEventHandler("onclick",this.divBottomNotice_staNoticeText_onclick,this);
        		objStaNoticeText.set_visible(false);
        	}

        	this.pamfRefreshBottomNotice(objDiv);

        }

        this.pamfRefreshBottomNotice = function(objDiv)
        {
        	var objDs = objDiv._objDs;

        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공지타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeDate  = objDiv.form["staNoticeDate"]; // 공지등록일
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공지이동 페이징

        	// 현재 idx를 하나줄인다.
        	objDiv._curIdx = -1;

        	if(objStaNoticeText ) objStaNoticeText.set_visible(false);
        	if(objBtnPre        ) objBtnPre.set_visible(false);
        	if(objBtnNext       ) objBtnNext.set_visible(false);
        	if(objStaNoticeDate ) objStaNoticeDate.set_visible(false);
        	if(objDivPage       ) objDivPage.set_visible(false);

        	if(objDs.rowcount == 0) return;

        	// 현재 idx를 하나줄인다.
        	objDiv._curIdx = 0;

        	if(objStaNoticeText )
        	{
        		var sTitle = objDs.getColumn(0,"ntcMteTitlNm");
        		objStaNoticeText.set_visible(true);
        		objStaNoticeText.set_text(sTitle);
        	}
        	//if(objBtnPre        ) objBtnPre.set_visible(true);
        	if((objBtnNext      )&&(objDs.rowcount > 1)) objBtnNext.set_visible(true);
        	if(objStaNoticeDate )
        	{
        		var sBeginYmd = objDs.getColumn(0,"aplcnBgngYmd");
        		var sEndYmd   = "";
        		objStaNoticeDate.set_visible(true);
        		objStaNoticeDate.set_text(this.pamfGetDispDateFromTo(sBeginYmd,sEndYmd));
        	}
        	if(objDivPage       )
        	{
        		var i;

        		var objDivPageComps = objDivPage.form.components;
        		for(i=0;i<objDivPageComps.length;i++ )
        		{
        			var objDivPageComp = objDivPageComps[i];
        			var objPageLinkBtn = objDivPage.form[sPageLinkBtnId];
        			if(objDivPageComp.id.indexOf("btnPageLink")==0)
        			{
        				objDivPageComp.set_visible(false);
        				if(objDivPageComp.findEventHandler("onclick",this.divBottomNotice_divPage_btnNotice_onclick,this) < 0)
        				{
        					objDivPageComp.addEventHandler("onclick",this.divBottomNotice_divPage_btnNotice_onclick,this);
        				}
        				objDivPageComp._rowNo = i;
        			}
        		}


        		var nGapRight = 10;
        		var nLeft = 0;
        		var nTop = 0;
        		var nWidth = 16;
        		var nHeight = 24;
        		var nGap = 1;

        		//objDivPage.setOffsetWidth(nGapRight + ((nWidth+nGap)*objDs.rowcount));


        		// 공고사항하단의 PageLink 버튼을 생성한다.
        		for(i=0;i<objDs.rowcount;i++)
        		{
        			var sPageLinkBtnId = "btnPageLink"+i;
        			var objPageLinkBtn = objDivPage.form[sPageLinkBtnId];

        			nLeft = nGapRight + ((nWidth+nGap)*(objDs.rowcount-i));
        			trace("i="+i+",nLeft="+nLeft);
        			if(!objPageLinkBtn)
        			{
        				objPageLinkBtn = new Button(sPageLinkBtnId,nLeft,nTop,nWidth,nHeight);
        				objPageLinkBtn._rowNo = i;
        				objPageLinkBtn.set_initvalueid("ivBtnAccessibilityButton");

        				objPageLinkBtn.addEventHandler("onclick",this.divBottomNotice_divPage_btnNotice_onclick,this);

        			}
        			else
        			{
        				objPageLinkBtn.getOffsetLeft(nLeft);
        			}

        			sCssClass = (i==0)?"btn_WF_PageS02":"btn_WF_Page03";
        			objPageLinkBtn.set_cssclass(sCssClass);
        			objPageLinkBtn.set_visible(true);
        		}


        		objDivPage.form.resetScroll();
        		// 데이터가 있으면 보이게 한다.
        		objDivPage.set_visible(true);


        	}

        	// 값을 세팅한다.


        }

        this._pamfMoveContentsBottomNotice =function(objDiv,nOldIdx,nNewIdx)
        {
        	var objDs = objDiv._objDs;

        	var objStaNoticeText  = objDiv.form["staNoticeText"]; // 공지타이틀
        	var objBtnPre         = objDiv.form["btnPre"       ]; // 앞으로이동
        	var objBtnNext        = objDiv.form["btnNext"      ]; // 뒤로이동
        	var objStaNoticeDate  = objDiv.form["staNoticeDate"]; // 공지등록일
        	var objDivPage	      = objDiv.form["divPage"      ]; // 공지이동 페이징


        	if(objStaNoticeText)
        	{
        		var sTitle = objDs.getColumn(nNewIdx,"ntcMteTitlNm");
        		objStaNoticeText.set_text(sTitle);
        	}
        	if(objStaNoticeDate)
        	{
        		var sBeginYmd = objDs.getColumn(nNewIdx,"aplcnBgngYmd");
        		var sEndYmd = "";
        		objStaNoticeDate.set_text(this.pamfGetDispDateFromTo(sBeginYmd,sEndYmd));
        	}

        	if(objBtnPre)
        	{
        		if(objDiv._curIdx==0) objBtnPre.set_visible(false);
        		else objBtnPre.set_visible(true);
        	}
        	if(objBtnNext)
        	{
        		if(objDiv._curIdx==(objDs.rowcount-1)) objBtnNext.set_visible(false)
        		else objBtnNext.set_visible(true);
        	}
        	/*
        	if(objDivPage)
        	{
        		objDivPage.form["btnPageLink"+nOldIdx].set_cssclass("btn_WF_Page02" );
        		objDivPage.form["btnPageLink"+nNewIdx].set_cssclass("btn_WF_PageS02");
        	}
        	*/
        }

        this.divBottomNotice_btnPre_onclick = function(obj,e)
        {

        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var nOldIdx = objDiv._curIdx;
        	objDiv._curIdx--;
        	var nNewIdx = objDiv._curIdx;

        	this._pamfMoveContentsBottomNotice(objDiv,nOldIdx,nNewIdx);

        };

        this.divBottomNotice_btnNext_onclick = function(obj,e)
        {

        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var nOldIdx = objDiv._curIdx;
        	objDiv._curIdx++;
        	var nNewIdx = objDiv._curIdx;

        	this._pamfMoveContentsBottomNotice(objDiv,nOldIdx,nNewIdx);

        };

        this.divBottomNotice_divPage_btnNotice_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;
        	var nOldIdx = objDiv._curIdx;
        	var nNewIdx = obj._rowNo;

        	objDiv._curIdx = nNewIdx;
        	this._pamfMoveContentsBottomNotice(objDiv,nOldIdx,nNewIdx);
        };


        this.divBottomNotice_staNoticeText_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent;
        	var objDs = objDiv._objDs;

        	var objParams = {};
        	var sUrl = objDiv._listredirecturl;

        	var nRow = objDiv._curIdx;
        	for(var i=0;i<objDs.colcount;i++)
        	{
        		var sColId = objDs.getColID(i);
        		var sColVal = objDs.getColumn(nRow,sColId);

        		objParams[sColId]=sColVal;
        	}


        	this.smfSetWorkPage(sUrl, objParams);
        };
        //==================================================================
        //   divBottomNotice Setting - End
        //==================================================================

        //==================================================================
        //   divRedirect Setting - Start
        //==================================================================
        this.pamfRediectOtherSys = function(sSubSys,sdetailSubSys)
        {
        	var sSelVal1 = sdetailSubSys;  // 서브시스템
        	var sSelVal2 = (sdetailSubSys=="101"?"원서접수":(sdetailSubSys=="102"?"대입전형자료제출":""));  // 서브시스템명
        	var sSelVal3 = this.smfGetCddcCode() ;  // 교육청코드
        	var sSelVal4 = this.smfGetCddcName();  // 교육청코드명

        	if(this.smfGetSubSystemGb()!=sSubSys)
        	{
        		this.smfSetSubSystemGb(sSubSys);
        	}

        	var objTopForm = this.getOwnerFrame().form.divTop.form;

        	objTopForm.fnSetPrivateProfile("CDDC_INFO",sSelVal1,sSelVal3,sSelVal4);

        	// 교육청 변경 처리를 한다.
        	objTopForm.fnChangeCddc(sSelVal1,sSelVal2,sSelVal3,sSelVal4);

        	objTopForm.divDispArea.form.resetScroll();
        	objTopForm.resetScroll();
        }
        //==================================================================
        //   divRedirect Setting - End
        //==================================================================

        this.pamfGetSqaLinkform = function()
        {
        	return this.getOwnerFrame().form.divTop.form.divDispArea.form.divSQALink.form;

        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
