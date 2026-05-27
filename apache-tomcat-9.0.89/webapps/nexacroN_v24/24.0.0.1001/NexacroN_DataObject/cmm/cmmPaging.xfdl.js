(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_paging");
            this.set_titletext("페이징");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(511,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_page","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("stc_no7","333","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no8","stc_no7:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("9");
            obj.set_visible("false");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no9","stc_no8:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_next",null,"4","46","40","4",null,null,null,null,null,this.div_page.form);
            obj.set_visible("false");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageN");
            obj.set_text("");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_prev","4","4","46","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_visible("false");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PageP");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no0","stc_prev:10","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("1");
            obj.set_visible("false");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no1","stc_no0:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no2","stc_no1:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("3");
            obj.set_visible("false");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no3","stc_no2:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no4","stc_no3:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no5","stc_no4:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("6");
            obj.set_visible("false");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("stc_no6","stc_no5:-1","4","40","40",null,null,null,null,null,null,this.div_page.form);
            obj.set_text("7");
            obj.set_visible("false");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Page");
            this.div_page.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_page.form
            obj = new Layout("default","",414,24,this.div_page.form,function(p){});
            this.div_page.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",511,48,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPaging.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        sample > CRUD단일
        *  @FileName 		cmmPaging.xfdl
        *  @Creator 		consulting
        *  @CreateDate 		2022.11.17
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.11.17     		consulting 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_iStartPageNo = 0; //전체 페이지 순서
        this.fv_iUnitSelRowNo = 10; //한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo = 1; //Server호출시 시작할 row no
        this.fv_iMaxPageNum = 10; //화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowTotal = 0;
        this.fv_iCntPageNum = 0; //화면에 노출되는 번호 갯수
        this.fv_currentPage = 1; //현재 페이지

        this.fv_pageWidth;

        this.nPage = "1"; //선택 페이지
        this.nPageSize = "10"; //그리드 노출 글수
        this.nPageTotal = "0"; //전체 글수
        this.vPageFunc = ""; //본화면 조회함수명

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/

        this.init = function (nPage, nPageSize, nPageTotal, vPageFunc)
        {
        	this.nPage = nPage; //선택 페이지
        	this.nPageSize = nPageSize; //그리드 노출 글수
        	this.nPageTotal = nPageTotal; //전체 글수
        	this.vPageFunc = vPageFunc; //본화면 조회함수명

        	this.fv_currentPage = nPage; //현재 페이지
        	this.fn_pagingSize();
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fn_pagingSize = function (obj, e)
        {
        //  	var nStartW = parseInt(this.div_page.form.stc_first.getOffsetLeft());
        //  	var nEndW = parseInt(this.div_page.form.stc_end.getOffsetRight());
        	var nStartW = parseInt(this.div_page.form.stc_prev.getOffsetLeft());
         	var nEndW = parseInt(this.div_page.form.stc_next.getOffsetRight());
         	var nTermW = nEndW - nStartW;

        	this.div_page.set_left(parseInt(this.getOffsetWidth() / 2) - parseInt(nTermW / 2));
        	//this.div_page.set_left(parseInt(this.getOffsetWidth() / 2));
        };

        this.fn_check = function ()
        {
        	var rslt = 'Y';
        	if (rslt == 'Y' && this.nPage == '')
        	{
        		this.alert('소스에 page 값이 없습니다.');
        		rslt = 'N';
        	}

        	if (rslt == 'Y' && this.nPageSize == '')
        	{
        		this.alert('소스에 page_size 값이 없습니다.');
        		rslt = 'N';
        	}

        	if (rslt == 'Y' && this.nPageTotal == undefined || this.nPageTotal == 'undefined')
        	{
        		this.alert('소스에 page_total 가 존재하지 않습니다.');
        		rslt = 'N';
        	}

        	if (rslt == 'Y')
        	{
        		this.fv_iStartSelRowNo = this.nPage;
        		this.fv_iUnitSelRowNo = this.nPageSize;
        		this.fv_iServerRowTotal = this.nPageTotal;
        	}
        	return rslt;
        };

        /**
        * @description  페이징 구현
        */
        this.fn_paging = function ()
        {
        	if (this.fn_check() == 'N')
        	{
        		return false;
        	}

        	this.fn_setPageNo();
        	this.fn_setStyle();
        	this.fn_pagingSize();
        };

        /**
        * @description  인텍스 클릭
        */
        this.div_page_stc_no_onclick = function (obj, e)
        {
        	var iNo = new Number(obj.text);

        	this.fv_currentPage = iNo;
        	this.nPage = iNo;
        	this.fn_setStyle();
        	if(this.vPageFunc){
        		this.lookupFunc(this.vPageFunc).call(this.nPage);
        	}
        };

        /**
        * @description  First 버튼
        */
        this.div_page_stc_first_onclick = function (obj, e)
        {
        	if (this.fv_currentPage != 1)
        	{
        		this.fv_iStartPageNo = 0;
        		this.fv_currentPage = 1;
        		this.nPage = 1;
        		if(this.vPageFunc){
        			this.lookupFunc(this.vPageFunc).call(this.nPage);
        		}

        		this.fn_setPageNo();
        		this.fn_setStyle();
        		this.fn_pagingSize();
        	}
        };

        /**
        * @description  Prev 버튼
        */
        this.div_page_stc_prev_onclick = function (obj, e)
        {
        	if (this.fv_currentPage - 1 > 0)
        	{
        		if (this.fv_currentPage - 1 <= parseInt(this.fv_iStartPageNo))
        		{
        			this.fv_iStartPageNo = parseInt(this.fv_iStartPageNo) - parseInt(this.fv_iMaxPageNum);
        		}
        		this.fv_currentPage = this.fv_currentPage - 1;
        		this.nPage = this.fv_currentPage;

        		if(this.vPageFunc){
        			this.lookupFunc(this.vPageFunc).call(this.nPage);
        		}

        		this.fn_setPageNo();
        		this.fn_setStyle();
        		this.fn_pagingSize();
        	}
        };

        /**
        * @description  Next 버튼
        */
        this.div_page_stc_next_onclick = function (obj, e)
        {
        	if ((this.fv_currentPage) * this.fv_iUnitSelRowNo < this.nPageTotal)
        	{
        		if (this.fv_currentPage + 1 > parseInt(this.fv_iStartPageNo) + parseInt(this.fv_iMaxPageNum))
        		{
        			this.fv_iStartPageNo = parseInt(this.fv_iStartPageNo) + parseInt(this.fv_iMaxPageNum);
        		}

        		if (this.fv_currentPage == 0)
        		{
        			this.fv_currentPage = this.fv_currentPage + 2;
        			this.nPage = this.fv_currentPage;
        		}
        		else
        		{
        			this.fv_currentPage = this.fv_currentPage + 1;
        			this.nPage = this.fv_currentPage;
        		}

        		if(this.vPageFunc){
        			this.lookupFunc(this.vPageFunc).call(this.nPage);
        		}

        		this.fn_setPageNo();
        		this.fn_setStyle();
        		this.fn_pagingSize();
        	}
        };

        /**
        * @description  End 버튼
        */
        this.div_page_stc_end_onclick = function (obj, e)
        {
        	if (this.fv_currentPage != parseInt((this.fv_iServerRowTotal - 1) / this.fv_iUnitSelRowNo) + 1)
        	{
        		this.fv_iStartPageNo = Math.floor(this.fv_iServerRowTotal / (this.fv_iUnitSelRowNo * this.fv_iMaxPageNum)) * this.fv_iMaxPageNum;
        		this.fv_currentPage = parseInt((this.fv_iServerRowTotal - 1) / this.fv_iUnitSelRowNo) + 1;
        		this.nPage = parseInt((this.fv_iServerRowTotal - 1) / this.fv_iUnitSelRowNo) + 1;
        		if (this.fv_iStartPageNo == this.parent.nPage)
        		{
        			this.fv_iStartPageNo = this.fv_iStartPageNo - this.fv_iMaxPageNum;
        		}
        		if(this.vPageFunc){
        			this.lookupFunc(this.vPageFunc).call(this.nPage);
        		}
        		this.fn_setPageNo();
        		this.fn_setStyle();
        		this.fn_pagingSize();
        	}
        };

        /**
        * @description  Page번호 Setting
        */
        this.fn_setPageNo = function ()
        {
        	this.fv_iCntPageNum = 0;
        	var sPage = this.fv_iStartPageNo;

        	// Prev 버튼 처리
        	//this.div_page.form.stc_first.set_visible(true);
        	this.div_page.form.stc_prev.set_visible(true);

        	// Next 버튼 처리
        	this.div_page.form.stc_next.set_visible(true);
        	//this.div_page.form.stc_end.set_visible(true);

        	var nMaxNum = 0;

        	if (parseInt(this.nPageTotal) % parseInt(this.fv_iUnitSelRowNo) == 0)
        	{
        		nMaxNum = parseInt(parseInt(this.nPageTotal) / parseInt(this.fv_iUnitSelRowNo));
        	}
        	else
        	{
        		nMaxNum = parseInt((parseInt(this.nPageTotal) / parseInt(this.fv_iUnitSelRowNo))) + 1;
        	}

        	if (parseInt(nMaxNum - sPage) > 10)
        	{
        		nMaxNum = 10;
        	}
        	else
        	{
        		nMaxNum = parseInt(nMaxNum - sPage);
        	}

        	if (this.nPageTotal == 0)
        	{
        		// 데이터가 없을때 예외처리
        		nMaxNum = 1;
        	}

        	for (var ii = 0; ii < 10; ii++)
        	{
        		this.div_page.form.components["stc_no" + ii].set_visible(false);
        		//trace("stc_no" + ii + " = false");
        	}

        	// 인덱스 번호 처리
        	for (var i = 0; i < nMaxNum; i++)
        	{
        		this.div_page.form.components["stc_no" + i].set_visible(true);
        		this.div_page.form.components["stc_no" + i].set_text(sPage + i + 1);

        		if (this.fv_iServerRowTotal <= parseInt((sPage * this.fv_iUnitSelRowNo) + (this.fv_iUnitSelRowNo * i)))
        		{
        			this.div_page.form.components["stc_no" + i].set_visible(false);
        		}
        		else
        		{
        			this.div_page.form.components["stc_no" + i].set_visible(true);
        			this.fv_iCntPageNum++;
        		}
        		if (i == nMaxNum - 1)
        		{
        			this.div_page.form.stc_next.set_left(parseInt(this.div_page.form.components["stc_no" + i].left) + 35);
        			//this.div_page.form.stc_end.set_left(parseInt(this.div_page.form.stc_next.left) + 30);
        		}

        		//trace("stc_no" + i + " = "+this.div_page.form.components["stc_no" + i].visible);
        	}

        	if (this.nPageTotal == 0)
        	{
        		// 데이터가 없을때 예외처리
        		this.div_page.form.components["stc_no" + 0].set_visible(true);
        	}
        };

        /**
        * @description Style조정
        */
        this.fn_setStyle = function ()
        {
        	var sPage = this.fv_iStartPageNo;

        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		if ((parseInt(sPage) + 1 + i) == this.nPage){
        			this.div_page.form.components["stc_no" + i].set_cssclass("btn_WF_PageS");
        		}else{
        			this.div_page.form.components["stc_no" + i].set_cssclass("btn_WF_Page");
        		}
        	}
        };

        /**
        * @description 페이지당row, 전체row 재설정
        */
        this.fn_resetPaging = function (nPageSize, nPageTotal)
        {
        	this.nPageSize = nPageSize;
        	this.nPageTotal = nPageTotal;
        	this.fn_paging();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.init,this);
            this.addEventHandler("onsize",this.fn_pagingSize,this);
            this.div_page.form.stc_no7.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no8.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no9.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_next.addEventHandler("onclick",this.div_page_stc_next_onclick,this);
            this.div_page.form.stc_prev.addEventHandler("onclick",this.div_page_stc_prev_onclick,this);
            this.div_page.form.stc_no0.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no1.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no2.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no3.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no4.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no5.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
            this.div_page.form.stc_no6.addEventHandler("onclick",this.div_page_stc_no_onclick,this);
        };
        this.loadIncludeScript("cmmPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
