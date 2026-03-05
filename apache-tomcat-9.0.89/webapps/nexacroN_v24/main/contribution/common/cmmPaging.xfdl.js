(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPaging");
            this.set_titletext("페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,37);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,37,this,function(p){});
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
        *  @MenuPath    cmm > cmmPaging.xfdl (공통 페이징DIV)
        *  @FileName 	cmmPaging.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.10.19
        *  @Desction    그리드 페이징
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvPageLeft=0; 			// div가운데 위치시키기 위한 left값
        this.fvFnCallback = "";// 조회함수
        this.fvRecords=0;			// 목록수

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(this); //초기화[필수]
        };

        /**
         * @description CommPaging_onsize page size가 변경될때 호출
        */
        this.form_onsize = function(obj,e)
        {
        	//가운데로
        	if (this.fvFnCallback != "") this.fnSetCenter(obj);
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * @description  page초기화
        */
        this.fnInitPage = function()
        {
        	if (this.isValidObject("divPage")) this.removeChild("divPage");
        };

        /**
         * @description  nCreatePage page갯수에 맞게 버튼 생성
        */
        this.fnCreatePage = function(sFnCallback, nTotalCount, nRecords, nPage, nPageCount)
        {
        	this.fvRecords = nRecords;		// 목록수
        	this.fvFnCallback = sFnCallback;	// 조회함수
        	var nTotalPageC; 					// 전체페이지갯수
        	/*전체페이지갯수 계산*/
        	if( Math.floor( nTotalCount % nRecords ) > 0 )
        	{
                nTotalPageC = Math.floor( nTotalCount / nRecords ) + 1;
            }else
            {
                nTotalPageC = Math.floor( nTotalCount / nRecords );
            }
            /*실제 페이지 갯수는 MAX 10개로 조정*/
        	var nPageScaleC = 10;

        	//var nTermBtn = 2;		 //버튼사이
            //var nTerm = 14;   		 //큰버튼과 숫자사이
            //var nTernLastNum = 12; 	 //마지막숫자버튼과 뒤로버튼사이

        	//var nLeft = 3;
        	//var nTop = 0;
            //var nWidth = 21;
            //var nNumWidth = 37;
            //var nHeight = 21;

        	var nTermBtn = 0;
        	var nTerm = 6;
        	var nTernLastNum = 6;

        	var nLeft = 3;
        	var nTop = 0;
        	var nWidth = 19;
        	var nNumWidth = 26;
            var nHeight = 19;


            var objBtnPage;
            var sPageView = this.pageview;

            if (this.gfnIsNull(sPageView)) 	 sPageView = "all";
            if (this.gfnIsNull(nRecords)) 	 nRecords = 50;
            if (this.gfnIsNull(nPage)) 		 nPage = 0;
            if (this.gfnIsNull(nPageScaleC)) nPageScaleC = 10;
            if( nPageScaleC > 10 ) nPageScaleC = 10;

            //DIV 초기화
            if (this.isValidObject("divPage"))
        	{
        		this.divPage.destroy();
        		this.removeChild("divPage");
            }

            this.set_scrollbartype("none");
            nPage = nPage + 1;

        	//현재페이지
            var uint = Math.floor( ( nexacro.toNumber( nPage ) - 1 ) / nexacro.toNumber( nPageScaleC ) );
                uint = ( uint * nPageScaleC ) + 1;
           //다음페이지
            var nextUnit = nexacro.toNumber( uint + nPageScaleC );
        	if( nextUnit > nTotalPageC) nextUnit = nTotalPageC + 1;

        	//div생성
            var objDivPaging = new Div();
        	objDivPaging.init("divPage", 0, 5, 800, 23, null, null);
            this.addChild(objDivPaging.name, objDivPaging);
            objDivPaging.show();
        /*     var objDivPaging = this.divPage;*/
            //컨트롤버튼생성
            if (sPageView == "all" || sPageView == "number")
            {

        		/************************************************************************
        		 * 첫페이지(<<) 버튼생성
        		 ************************************************************************/
        		var objBtnFirst = new Button("btnFirst", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        		//objBtnFirst.set_cssclass("btn_WF_GrdPrev2");
        		objBtnFirst.set_cssclass("btn_WF_PageP");
        		//objBtnFirst.set_text("<<");
        		objBtnFirst.page = 1;
        		objBtnFirst.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnFirst.set_enable(true);

        		// 현재페이지가 '1'이면 비활성화
        		if( nPage == 1 ) objBtnFirst.set_enable(false);
        		objBtnFirst.show();
        		nLeft = nLeft + nWidth + nTermBtn;	//left값 계산


        		/************************************************************************
        		 * 앞으로(<) 버튼생성
        		 ************************************************************************/
        		var objBtnBefore = new Button("btnBefore", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnBefore.name, objBtnBefore);
        		//objBtnBefore.set_cssclass("btn_WF_GrdPrev");
        		objBtnBefore.set_cssclass("btn_WF_PageL");
        		//objBtnBefore.set_text("<");
        		objBtnBefore.page = nPage - 1;
        		objBtnBefore.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnBefore.set_enable(true);
        		// 현재페이지가 '1'이면 비활성화
        		if( nPage == 1) objBtnBefore.set_enable(false);
        		nLeft = nLeft + nWidth + nTerm;	//left값 계산
        		objBtnBefore.show();

        		/************************************************************************
        		 *페이징[1 2 3 4 5 6 7 8 9 10] 버튼생성
        		 ************************************************************************/
        		for(var i=uint; i<nextUnit; i++ )
        		{
        			if(i > nTotalPageC ) break; //페이지갯수만큼만 생성

        			objBtnPage = new Button("btnPage"+i,  nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnPage.name, objBtnPage);
        			//objBtnPage.set_cssclass("btn_WF_GrdPage");
        			objBtnPage.set_cssclass("btn_WF_Page");
        			objBtnPage.set_text(i);
        			objBtnPage.page = i;
        			objBtnPage.addEventHandler("onclick", this.fnMovePage, this);

        			//if(i == nPage) objBtnPage.set_cssclass("btn_WF_GrdPageS"); //누름표시
        			if(i == nPage) objBtnPage.set_cssclass("btn_WF_PageS");
        			objBtnPage.show();

        			nLeft = nLeft + nNumWidth + nTermBtn; //left값 계산
        		}
        		nLeft = nLeft + nTernLastNum;//left값 계산
        		/************************************************************************
        		 * 뒤로(>) 버튼생성
        		 ************************************************************************/
        		var objBtnNext = new Button("btnNext", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnNext.name, objBtnNext);
        		//objBtnNext.set_cssclass("btn_WF_GrdNext");
        		objBtnNext.set_cssclass("btn_WF_PageR");
        		//objBtnNext.set_text(">");
        		objBtnNext.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnNext.set_enable(true);
        		objBtnNext.page = nPage +1;
        		//현재페이지가 전체페이지갯수만큼이면 비활성화
        		if( nPage >= nTotalPageC) objBtnNext.set_enable(false);
        		objBtnNext.show();
        		nLeft = nLeft + nWidth + nTermBtn; //left값 계산

        		/************************************************************************
        		 * 마지막페이지(>>) 버튼생성
        		 ************************************************************************/
        		var objBtnEnd = new Button("btnEnd", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnEnd.name, objBtnEnd);
        		//objBtnEnd.set_cssclass("btn_WF_GrdNext2");
        		objBtnEnd.set_cssclass("btn_WF_PageN");
        		//objBtnEnd.set_text(">>");
        		objBtnEnd.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnEnd.page = nTotalPageC;
        		//현재페이지가 전체페이지갯수만큼이면 비활성화
        		if( nPage >= nTotalPageC) objBtnEnd.set_enable(false);
        		objBtnEnd.show();
        		nLeft = nLeft + nWidth ;	//left값 계산
        	}

        	//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        	objDivPaging.set_width(nLeft + 6);

        	//가운데로
        	this.fvPageLeft = ((800 - nLeft) / 2);
        	this.fnSetCenter(this);
        };

        /**
         * @description  page이동함수
        */
        this.fnMovePage = function(obj)
        {
        	var nPage = nexacro.toNumber(obj.page)-1; 						//누른페이지
        	var nRecordOffset = nPage * nexacro.toNumber(this.fvRecords);	//시작데이터rownum계산
        	//callback함수호출
        	this.lookupFunc(this.fvFnCallback).call(nPage,nRecordOffset);
        };

        /**
         * @description  pagingDiv가 가운데오도록
        */
        this.fnSetCenter = function(obj)
        {
        	var orgLeft = this.fvPageLeft;
        	var orgWidth = 800;
        	var diffWidth = nexacro.toNumber(obj.getOffsetWidth()) - orgWidth;

         	this.divPage.move((parseFloat(orgLeft) + parseFloat(diffWidth/2)),5);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("cmmPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
