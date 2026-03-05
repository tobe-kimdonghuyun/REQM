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
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCount","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#3683e2\'>0</fc> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Dot");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCnt",null,"0","72",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("페이지당 목록 건수 설정");
            var cboCnt_innerdataset = new nexacro.NormalDataset("cboCnt_innerdataset", obj);
            cboCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row></Rows>");
            obj.set_innerdataset(cboCnt_innerdataset);
            obj.set_text("30");
            obj.set_value("30");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle",null,"0","56","23","cboCnt:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("페이지당");
            obj.set_accessibilitylabel("페이지당 목록 건수");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,24,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPaging_devpack.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmPaging.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/11
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/11			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvPageLeft   = 0; 	// div가운데 위치시키기 위한 left값
        this.fvFnCallback = "";	// 조회함수
        this.fvRecords    = 10;	// 목록수
        this.fvPage       = 1;
        this.fvObjGrid;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.form_onsize = function(obj,e)
        {
        	//가운데로
        	if (this.fvFnCallback != "") this.fnSetCenter(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description  page초기화
        */
        this.fnInitPage = function()
        {
        	if (this.isValidObject("divPage")) {
        		var obj = this.removeChild("divPage");
        		obj.destroy();
        		obj = null;
        	}
        };


        /**
         * @class page 갯수에 맞게 버튼 생성<br>
         * @param {Grid} objGrid - 페이지와 연결된 Grid (순번 표시)
         * @param {String} sFnCallback - 페이지 선택시 실행될 callBack 함수명
         * @param {Number} nPage - 페이지 수
         * @param {Number} [nRecords] - 페이지 당 건수
         * @param {Number} [nTotalRecords] - 전체 건수
         * @return N/A
         */
        this.fnCreatePage = function(objGrid, sFnCallback, nPage, nRecords, nTotalRecords)
        {
        	this.fvFnCallback = sFnCallback;	// callBack 함수명

        	// 페이지 당 건수 설정
        	nRecords = this.cboCnt.value;
        	this.fvRecords = nRecords;

        	//Grid
        	if(!this.gfnIsNull(objGrid)){
        		var objDs = objGrid.getBindDataset();
        		this.fvObjGrid = objGrid;
        		this.fvObjGrid.uPage = nPage;

        		//건수 설정
        		this.fvObjGrid.uPageSize = nRecords;
        	}else{
        	//Grid가 아닐 경우
        		var objDs = this.parent.parent.dsList;
        	}

        	var nTotalCount = nTotalRecords;
        	var nRowCount = objDs.rowcount;

        	// 총 페이지 건수 표시
        	var sText = "조회 <fc v='#25649e'>"+  nRowCount + "</fc> 건 / 총 <fc v='#25649e'>" + nTotalCount + "</fc> 건" ;
        	this.staCount.set_text(sText);


        	// 총 건수가 0이면 페이징 삭제
        	if (nTotalCount == 0) {
        		// DIV 초기화
        		if (this.isValidObject("divPage")) {
        			var obj = this.removeChild("divPage");
        			obj.destroy();
        			obj = null;
        		}
        		this.set_scrollbartype("none");
        		return;
        	}

        	// 전체 페이지 갯수 계산
        	var nTotalPageC;
        	if (Math.floor( nTotalCount % nRecords ) > 0) {
                nTotalPageC = Math.floor( nTotalCount / nRecords ) + 1;
            }
        	else {
                nTotalPageC = Math.floor( nTotalCount / nRecords );
            }

            // 실제 페이지 갯수는 MAX 10개로 조정
        	var nPageScaleC  = 10;
        	var nTermBtn     = 0;		// 버튼사이
            var nTerm        = 6;   	// 큰버튼과 숫자사이
            var nTernLastNum = 6; 	    // 마지막숫자버튼과 뒤로버튼사이

        	var nLeft     = 3;
        	var nTop      = 0;
            var nWidth    = 19;
            var nNumWidth = 26;
            var nHeight   = 19;

            var objBtnPage;
            var sPageView = this.pageview;

            if (this.gfnIsNull(sPageView)) 	 sPageView = "all";
            if (this.gfnIsNull(nRecords)) 	 nRecords = 50;
            if (this.gfnIsNull(nPage)) 		 nPage = 1;
            if (this.gfnIsNull(nPageScaleC)) nPageScaleC = 10;
            if( nPageScaleC > 10 ) nPageScaleC = 10;

            // DIV 초기화
            if (this.isValidObject("divPage")) {
        		var obj = this.removeChild("divPage");
        		obj.destroy();
        		obj = null;
            }
            this.set_scrollbartype("none");

        	// 현재페이지
            var uint = Math.floor( ( nexacro.toNumber( nPage ) - 1 ) / nexacro.toNumber( nPageScaleC ) );
                uint = ( uint * nPageScaleC ) + 1;

           // 다음페이지
            var nextUnit = nexacro.toNumber( uint + nPageScaleC );
        	if( nextUnit > nTotalPageC) nextUnit = nTotalPageC + 1;

        	// div생성
            var objDivPaging = new Div();
        	objDivPaging.init("divPage", 0, 0, 800, null, null, 0);
            this.addChild(objDivPaging.name, objDivPaging);

        	objDivPaging.form.set_scrolltype("none");
        	objDivPaging.show();

            // 컨트롤버튼생성
            if (sPageView == "all" || sPageView == "number")
            {
        		/************************************************************************
        		 * 첫페이지(<<) 버튼생성
        		 ************************************************************************/
        		var objBtnFirst = new Button("btnFirst", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        		objBtnFirst.set_cssclass("btn_WF_PageP");
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
        		objBtnBefore.set_cssclass("btn_WF_PageL");
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
        		var oFocusBtn = null;
        		for(var i=uint; i<nextUnit; i++ )
        		{
        			if(i > nTotalPageC ) break; //페이지갯수 만큼만 생성

        			objBtnPage = new Button("btnPage"+i,  nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnPage.name, objBtnPage);
        			objBtnPage.set_cssclass("btn_WF_Page");
        			objBtnPage.set_text(i);
        			objBtnPage.page = i;
        			objBtnPage.addEventHandler("onclick", this.fnMovePage, this);

        			//누름표시
        			if (i == nPage){
        				objBtnPage.set_cssclass("btn_WF_PageS");
        				oFocusBtn = objBtnPage;
        			}
        			objBtnPage.show();

        			nLeft = nLeft + nNumWidth + nTermBtn; //left값 계산
        		}
        		nLeft = nLeft + nTernLastNum;//left값 계산

        		/************************************************************************
        		 * 다음(>) 버튼생성
        		 ************************************************************************/
        		var objBtnNext = new Button("btnNext", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnNext.name, objBtnNext);
        		objBtnNext.set_cssclass("btn_WF_PageR");
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
        		objBtnEnd.set_cssclass("btn_WF_PageN");
        		objBtnEnd.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnEnd.page = nTotalPageC;
        		//현재페이지가 전체페이지갯수만큼이면 비활성화
        		if( nPage == nTotalPageC) objBtnEnd.set_enable(false);
        		objBtnEnd.show();
        		nLeft = nLeft + nWidth ;	//left값 계산
        	}

        	//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        	objDivPaging.set_width(nLeft + 6);

        	//가운데로
        	this.fvPageLeft = ((800 - nLeft) / 2);
        	this.fnSetCenter(this);

        	oFocusBtn.setFocus();
        };

        /**
         * @description  page 이동 함수
        */
        this.fnMovePage = function(obj)
        {
        	var nPage   = nexacro.toNumber(obj.page); 					// 누른 페이지
        	var nRowNum = (nPage-1) * nexacro.toNumber(this.fvRecords);	// 시작 데이터rownum계산
        	if(!this.gfnIsNull(this.fvObjGrid))    this.fvObjGrid.uPage = nPage;

        	// callback함수호출
        	this.lookupFunc(this.fvFnCallback).call(nPage, this.fvRecords);
        };


        /**
         * @description  pagingDiv가 가운데 오도록 이동
        */
        this.fnSetCenter = function(obj)
        {
            // DIV가 있을때만
            if (this.isValidObject("divPage")) {
        		var orgLeft = this.fvPageLeft;
        		var orgWidth = 800;
        		var diffWidth = nexacro.toNumber(obj.getOffsetWidth()) - orgWidth;
        		this.divPage.move((parseFloat(orgLeft) + parseFloat(diffWidth/2)),5);
            }
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description  페이지당 건수 변경
        */
        this.cboCnt_onitemchanged = function(obj,e)
        {
        	var nPage   = 0;
        	var nRowNum = 0;

        	if(!this.gfnIsNull(this.fvObjGrid))    this.fvObjGrid.uPage = 1;

        	// callback함수호출
        	this.lookupFunc(this.fvFnCallback).call(1, e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.cboCnt.addEventHandler("onitemchanged",this.cboCnt_onitemchanged,this);
        };
        this.loadIncludeScript("cmmPaging_devpack.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
