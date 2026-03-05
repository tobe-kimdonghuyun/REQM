/**
*  Mobile 프로젝트 Library
*  @FileName 	Resize.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023/10/30
*  @Desction   
************** 소스 수정 이력 ***********************************************
* Date					Modifier					Description
*******************************************************************************
* 2023/10/30			TOBESOFT					최초생성
*******************************************************************************
*/

var pForm  = nexacro.Form.prototype;

/**
* @class 폼 사이즈 재조정
* @param {Form} objForm - 리사이즈 적용할 form 	
* @param {boolean} bReset - resetScroll 미사용 여부	
* @param {Number} nPadding - 폼 하단 패딩값
* @return N/A
*/
pForm.gfnResizeComp = function(objForm, bReset, nPadding)
{
	if (!bReset)
	{
		objForm.resetScroll();	//arrangement 좌표를 적용하고 싶은경우 resetScroll부터 시작
	}

	if (this.gfnIsNull(nPadding)) 		nPadding = 40;
    
    var objApp  = nexacro.getApplication();
	var nHeight = 0;
    

		nHeight = this.gfnParentResizeComp(objForm);
		// QuikView 일때 처리
		if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
		{
			if (objForm.parent instanceof nexacro.ChildFrame) return;
		}
		else 
		{				
			if (objForm.parent instanceof nexacro.ChildFrame) return;
			
			if (objForm == objApp.gvBase.divMain.form)
			{
				var nTmpHeight = this.gfnParentResizeComp(objForm.div00.form);
				if(nTmpHeight <= (objApp.mainframe.height-55))
				{
					nTmpHeight = objApp.mainframe.height-55;
					nPadding = 0;
				}
				objForm.div00.set_height(nTmpHeight + nPadding);
				objForm.resetScroll();
				return;
			}			
			
			//컴포넌트 배치문제로 인해 div 길이가 과도하게 작아질 경우 메인프레임 크기에 맞추기.
			//55는 frmPopup의 divTitle 높이.
			//크기가 작으므로 nPadding 더해줄 필요 없어 nPadding = 0 으로 설정.
			if (nHeight <= (objApp.mainframe.height - 55))
			{
				nHeight = objApp.mainframe.height - 55;
				nPadding = 0;
			}
		
			if (objForm == objApp.gvBase.divCenter.form.divWork.form) //스크롤이 생기지 않게 사이즈를 늘려야 하는 화면
			{
				objForm.parent.set_height(nHeight + nPadding);	
				objForm.parent.parent.resetScroll();
				return; 
			}

			if (!this.gfnIsNull(objApp.gvPopup) && objForm == objApp.gvPopup.divWork.form.divWork2.form)
			{	
				objForm.parent.set_height(nHeight);
				objForm.parent.parent.resetScroll();
				return;
			}

		}
}

/**
* @class 최하위에 위치한 컴포넌트의 bottom값
* @param {Form} objForm - 폼	
* @return {Number} - bottom값	
*/
pForm.gfnParentResizeComp = function(objForm)
{
	var nMaxBottom = 0;

	for (var i = 0; i < objForm.components.length; i++) 
	{
		if (objForm.components[i].visible) 
		{
			if (nMaxBottom < objForm.components[i].getOffsetBottom())
			{
				nMaxBottom = objForm.components[i].getOffsetBottom();
			}	
		}
	}
	return nMaxBottom;
}

/**
* @class Grid 에 스크롤이 생기지 않도록 hegith조정
* @param {Grid} objGrd - 컬럼명	
* @param {Number} nSetRowCnt - 레코드수
* @return N/A
*/
pForm.gfnSetGrdResize = function(objGrd, nSetRowCnt)
{
	var nRowNum = nSetRowCnt;
	var nArgLen = arguments.length;

	if (nSetRowCnt < 1) 
	{
		nSetRowCnt = 1;
		if( nArgLen > 2 ) 
		{
			nSetRowCnt = parseInt(this.gfnNvl(arguments[2],"10"));
		}
	}
	
	var nHeadCellCnt = objGrd.getCellCount("head");
	if (nHeadCellCnt == 0)
		var nHeadEndRow = 0;
	else
		var nHeadEndRow = objGrd.getCellProperty("head", nHeadCellCnt-1, "row")+1;
	
	var nBodyCellCnt = objGrd.getCellCount("body");
	var nBodyStaRow = objGrd.getCellProperty("body", 0, "row")+nHeadEndRow;
	var nBodyEndRow = objGrd.getCellProperty("body", nBodyCellCnt-1, "row")+nHeadEndRow;
	
	var nGrdBodyRow = 0;
	for (var i=nBodyStaRow; i<= nBodyEndRow; i++)
	{
		nGrdBodyRow += objGrd.getFormatRowSize(i);
	}

	var nGrdHeadRow = objGrd.getRealRowFullSize("head");
	var nGrdSummRow = objGrd.getRealRowFullSize("summary");
	var nGrdTotSize = nGrdHeadRow + (nGrdBodyRow * nSetRowCnt) + nGrdSummRow;
	var nCompBorderSize = 4; 	//해당 그리드 컴포넌트의 Border(TOP+BOTTOM) 값
 	var nScrollSize =  0;  		//가로 스크롤바의 Height size

	if (objGrd.scrollbars != undefined) 
	{
		if (objGrd.autofittype == "col")
		{
			nScrollSize = 0;
		}
		else if (objGrd.scrollbars == "fixedvert" || objGrd.scrollbars == "autovert" || objGrd.scrollbars == "none")
		{
			nScrollSize = 0;
		}
		else if(objGrd.hscrollbar.visible == false)
		{
			nScrollSize = 0;
		}
	}

	var nHeight = nGrdTotSize+nCompBorderSize+nScrollSize;
	var objOriHeight = objGrd.getOffsetHeight();
	objGrd.set_height(nHeight);
}

/**
* @class ListView에 스크롤이 생기지 않도록 hegith조정
* @param {ListView} objLst - 컬럼명	
* @return N/A
*/
pForm.gfnSetLstResize = function(objLst)
{
	var nRowNum = objLst.getBindDataset().rowcount;
	var nArgLen = arguments.length;
	
	if (nRowNum < 1) 
	{
		nRowNum = 1;
		if( nArgLen > 2 ) 
		{
			nRowNum = parseInt(this.gfnNvl(arguments[2],"10"));
		}
	}
	//ListView의 총 Height
	var nTotalHeight;
	//Body부분 row당 각 Height
	var nBodyHeight			= objLst.getBandProperty("body", "height");
	//Detail부분 row당 각 Height
	var nDetailHeight		= objLst.getBandProperty("detail", "height");
	
	nTotalHeight = nBodyHeight * nRowNum;
	
	//Detail 각 height 정의된 경우
	if(!this.gfnIsNull(nDetailHeight))
	{
		
		var totalDetailHeight;
		
		//expandstatus가 true인 경우 detail height를 total height에 추가
		for(var i=0; i<nRowNum; i++)
		{
			if(objLst.getBandExpandStatus(i))
			{
				totalDetailHeight += nDetailHeight;
			}
		}
		nTotalHeight += totalDetailHeight;
	}
	
	var nCompBorderSize = 0; 	//해당 그리드 컴포넌트의 Border(TOP+BOTTOM) 값
 	var nScrollSize =  0;  		//가로 스크롤바의 Height size

	var nObjLstOrgHeight = objLst.getOffsetHeight();
	
	objLst.set_height(nTotalHeight);
	this.gfnResizeComp(this, true);
}
