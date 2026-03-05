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
                this._setFormPosition(888,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staCount","0","106",null,null,"0","-106",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCnt",null,"106","96",null,"0","-106",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("페이지당 목록 건수 설정");
            obj.set_visible("false");
            var cboCnt_innerdataset = new nexacro.NormalDataset("cboCnt_innerdataset", obj);
            cboCnt_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "10","datacolumn" : "10"},{"codecolumn" : "20","datacolumn" : "20"},{"codecolumn" : "30","datacolumn" : "30"},{"codecolumn" : "50","datacolumn" : "50"},{"codecolumn" : "100","datacolumn" : "100"},{"codecolumn" : "200","datacolumn" : "200"},{"codecolumn" : "500","datacolumn" : "500"}]});
            obj.set_innerdataset(cboCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle",null,"106","68",null,"cboCnt:8","-106",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("페이지당");
            obj.set_accessibilitylabel("페이지당 목록 건수");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","10","56",null,"40","-10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div06");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01","70","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_00","118","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_01","166","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_02","214","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_03","262","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_04","310","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_05","358","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_06","406","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07","454","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","502","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("true");
            obj.set_accessibilitylabel("줄임");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07_01","550","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button00_00","598","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("이전");
                p.Button00.set_cssclass("btn_WF_PgPrev");
                p.Button00.set_visible("true");
                p.Button00.move("0","0","62","40",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("1");
                p.Button01.set_cssclass("btn_WF_PgNumS");
                p.Button01.set_visible("true");
                p.Button01.move("70","0","40","40",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_text("2");
                p.Button01_00.set_cssclass("btn_WF_PgNum");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("118","0","40","40",null,null);

                p.Button01_01.set_taborder("3");
                p.Button01_01.set_text("3");
                p.Button01_01.set_cssclass("btn_WF_PgNum");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("166","0","40","40",null,null);

                p.Button01_02.set_taborder("4");
                p.Button01_02.set_text("4");
                p.Button01_02.set_cssclass("btn_WF_PgNum");
                p.Button01_02.set_visible("true");
                p.Button01_02.move("214","0","40","40",null,null);

                p.Button01_03.set_taborder("5");
                p.Button01_03.set_text("5");
                p.Button01_03.set_cssclass("btn_WF_PgNum");
                p.Button01_03.set_visible("true");
                p.Button01_03.move("262","0","40","40",null,null);

                p.Button01_04.set_taborder("6");
                p.Button01_04.set_text("6");
                p.Button01_04.set_cssclass("btn_WF_PgNum");
                p.Button01_04.set_visible("true");
                p.Button01_04.move("310","0","40","40",null,null);

                p.Button01_05.set_taborder("7");
                p.Button01_05.set_text("7");
                p.Button01_05.set_cssclass("btn_WF_PgNum");
                p.Button01_05.set_visible("true");
                p.Button01_05.move("358","0","40","40",null,null);

                p.Button01_06.set_taborder("8");
                p.Button01_06.set_text("8");
                p.Button01_06.set_cssclass("btn_WF_PgNum");
                p.Button01_06.set_visible("true");
                p.Button01_06.move("406","0","40","40",null,null);

                p.Button01_07.set_taborder("9");
                p.Button01_07.set_text("9");
                p.Button01_07.set_cssclass("btn_WF_PgNum");
                p.Button01_07.set_visible("true");
                p.Button01_07.move("454","0","40","40",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_cssclass("sta_WF_Ellipsis");
                p.Static00.set_visible("true");
                p.Static00.set_accessibilitylabel("줄임");
                p.Static00.move("502","0","40","40",null,null);

                p.Button01_07_01.set_taborder("11");
                p.Button01_07_01.set_text("99");
                p.Button01_07_01.set_cssclass("btn_WF_PgNum");
                p.Button01_07_01.set_visible("true");
                p.Button01_07_01.move("550","0","40","40",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("다음");
                p.Button00_00.set_cssclass("btn_WF_PgNext");
                p.Button00_00.set_visible("true");
                p.Button00_00.move("598","0","62","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01_07.set_visible("false");

                p.Button01_06.set_visible("false");

                p.Button01_05.set_visible("false");

                p.Button01_04.set_visible("false");

                p.Button01_03.set_visible("false");
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            this.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",888,40,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("페이징");
                p.set_scrolltype("none");
                p.set_scrollbartype("none none");

                p.staCount.set_taborder("0");
                p.staCount.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.staCount.set_usedecorate("true");
                p.staCount.set_cssclass("sta_WF_Dot");
                p.staCount.set_visible("false");
                p.staCount.move("0","106",null,null,"0","-106");

                p.cboCnt.set_taborder("1");
                p.cboCnt.set_innerdataset(cboCnt_innerdataset);
                p.cboCnt.set_codecolumn("codecolumn");
                p.cboCnt.set_datacolumn("datacolumn");
                p.cboCnt.set_accessibilitylabel("페이지당 목록 건수 설정");
                p.cboCnt.set_visible("false");
                p.cboCnt.set_text("10");
                p.cboCnt.set_value("10");
                p.cboCnt.set_index("0");
                p.cboCnt.move(null,"106","96",null,"0","-106");

                p.staTitle.set_taborder("2");
                p.staTitle.set_text("페이지당");
                p.staTitle.set_accessibilitylabel("페이지당 목록 건수");
                p.staTitle.set_cssclass("sta_WF_Dot");
                p.staTitle.set_fittocontents("width");
                p.staTitle.set_visible("false");
                p.staTitle.move(null,"106","68",null,"cboCnt:8","-106");

                p.Div06.set_taborder("3");
                p.Div06.set_text("Div06");
                p.Div06.move("10","56",null,"40","-10",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",480,40,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
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
        *  devPro
        *  @FileName 	cmmPaging.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/11
        *  @Description
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
        	if(this.gfnIsNull(nRecords))
        		nRecords = this.fvRecords;

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

        	// 총 건수가 0이면 페이징 삭제
        // 	if (nTotalCount == 0) {
        // 		// DIV 초기화
        // 		if (this.isValidObject("divPage")) {
        // 			var obj = this.removeChild("divPage");
        // 			obj.destroy();
        // 			obj = null;
        // 		}
        // 		this.set_scrollbartype("none");
        // 		return;
        // 	}

        	// 전체 페이지 갯수 계산
        	var nTotalPageC;
        	if (Math.floor( nTotalCount % nRecords ) > 0) {
                nTotalPageC = Math.floor( nTotalCount / nRecords ) + 1;
            }
        	else {
                nTotalPageC = Math.floor( nTotalCount / nRecords );
            }
        	//trace("nTotalPageC : " + nTotalPageC);
            // 실제 페이지 갯수는 MAX 10개로 조정
        	var nPageScaleC  = 7;
        	var nTermBtn     = 8;		// 버튼사이
            var nTerm        = 8;   	// 큰버튼과 숫자사이
            var nTernLastNum = 0; 	    // 마지막숫자버튼과 뒤로버튼사이

        	var nLeft     = 3;
        	var nTop      = 0;
            var nWidth    = 62;
            var nNumWidth = 40;
            var nHeight   = 40;

            var objBtnPage;
            var sPageView = this.pageview;

            if (this.gfnIsNull(sPageView)) 	 sPageView = "all";
            if (this.gfnIsNull(nRecords)) 	 nRecords = 50;
            if (this.gfnIsNull(nPage)) 		 nPage = 1;
            if (this.gfnIsNull(nPageScaleC)) nPageScaleC = 7;
           // if( nPageScaleC > 9 ) nPageScaleC = 9;

            // DIV 초기화
            if (this.isValidObject("divPage")) {
        		var obj = this.removeChild("divPage");
        		obj.destroy();
        		obj = null;
            }
            this.set_scrollbartype("none");
        	trace("nPage : " + nPage + " : " + Math.floor(nPageScaleC/2));
        	// 현재페이지, 다음페이지
            if(nPage <= Math.floor(nPageScaleC/2)) {
        		var uint = 1;
        		var nextUnit = nPageScaleC + 1;
        		trace("uint1 : " + uint + " : " + nextUnit);
        	} else if(nPage > nTotalPageC - Math.floor(nPageScaleC/2)) {
        		var uint = nTotalPageC - nPageScaleC + 1;
        		if(uint < 1) uint = 1;
        		var nextUnit = nTotalPageC + 1;
        		trace("uint2 : " + uint + " : " + nextUnit);
        	} else {
        	    var uint = nPage - Math.floor(nPageScaleC/2);
        		var nextUnit = nPage + Math.floor(nPageScaleC/2) + 1;
        		if( nextUnit > nTotalPageC) nextUnit = nTotalPageC + 1;
        		trace("uint3 : " + uint + " : " + nextUnit);
        	}

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
        		 * 앞으로(<) 버튼생성
        		 ************************************************************************/
        		var objBtnBefore = new Button("btnBefore", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnBefore.name, objBtnBefore);
        		objBtnBefore.set_cssclass("btn_WF_PgPrev");
        		objBtnBefore.text = "이전";
        		objBtnBefore.page = nPage - 1;
        		objBtnBefore.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnBefore.set_enable(true);
        		// 현재페이지가 '1'이면 비활성화
        		if( nPage == 1) objBtnBefore.set_enable(false);
        		nLeft = nLeft + nWidth + nTermBtn;	//left값 계산
        		objBtnBefore.show();

        		if( uint >= 2) {
        			/************************************************************************
        			 * 첫페이지 버튼생성
        			 ************************************************************************/
        			var objBtnFirst = new Button("btnFirst", nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        			objBtnFirst.set_cssclass("btn_WF_PgNum");
        			objBtnFirst.text = "1";
        			objBtnFirst.page = 1;
        			objBtnFirst.addEventHandler("onclick", this.fnMovePage, this);
        			objBtnFirst.set_enable(true);
        			// 현재페이지가 '1'이면 비활성화
        			if( nPage == 1 ) objBtnFirst.visible = false;
        			objBtnFirst.show();
        			nLeft = nLeft + nNumWidth + nTermBtn;	//left값 계산
        		}

        		if( uint >= 3) {
        			/************************************************************************
        			 * 첫페이지 버튼생성
        			 ************************************************************************/
        			var objStaFirst = new Static("staFirst", nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objStaFirst.name, objStaFirst);
        			objStaFirst.set_cssclass("sta_WF_ellipsis");
        			nLeft = nLeft + nNumWidth + nTermBtn;	//left값 계산
        			objStaFirst.show();
        		}

        		/************************************************************************
        		 *페이징[1 2 3 4 5 6 7 8 9 10] 버튼생성
        		 ************************************************************************/
        		var oFocusBtn = null;
        		for(var i=uint; i<nextUnit; i++ )
        		{
        			if(i > nTotalPageC ) break; //페이지갯수 만큼만 생성

        			objBtnPage = new Button("btnPage"+i,  nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnPage.name, objBtnPage);
        			objBtnPage.set_cssclass("btn_WF_PgNum");
        			objBtnPage.set_text(i);
        			objBtnPage.page = i;
        			objBtnPage.addEventHandler("onclick", this.fnMovePage, this);

        			//누름표시
        			if (i == nPage){
        				objBtnPage.set_cssclass("btn_WF_PgNumS");
        				oFocusBtn = objBtnPage;
        			}
        			objBtnPage.show();

        			nLeft = nLeft + nNumWidth + nTermBtn; //left값 계산
        		}
        		nLeft = nLeft + nTernLastNum;//left값 계산

        		if( nextUnit < nTotalPageC) {
        			/************************************************************************
        			 * 마지막페이지... 버튼생성
        			 ************************************************************************/
        			var objStaEnd = new Static("staEnd", nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objStaEnd.name, objStaEnd);
        			objStaEnd.set_cssclass("sta_WF_ellipsis");
        			nLeft = nLeft + nNumWidth + nTermBtn;	//left값 계산
        			objStaEnd.show();
        		}

        		if( nextUnit <= nTotalPageC) {
        			/************************************************************************
        			 * 마지막페이지 버튼생성
        			 ************************************************************************/
        			var objBtnEnd = new Button("btnEnd", nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnEnd.name, objBtnEnd);
        			objBtnEnd.set_cssclass("btn_WF_PgNum");
        			objBtnEnd.set_text(nTotalPageC);
        			objBtnEnd.addEventHandler("onclick", this.fnMovePage, this);
        			objBtnEnd.page = nTotalPageC;
        			objBtnEnd.show();
        			nLeft = nLeft + nNumWidth + nTermBtn;	//left값 계산
        		}

        		/************************************************************************
        		 * 다음(>) 버튼생성
        		 ************************************************************************/
        		var objBtnNext = new Button("btnNext", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnNext.name, objBtnNext);
        		objBtnNext.set_cssclass("btn_WF_PgNext");
        		objBtnNext.text = "다음";
        		objBtnNext.addEventHandler("onclick", this.fnMovePage, this);
        		objBtnNext.set_enable(true);
        		objBtnNext.page = nPage +1;

        		//현재페이지가 전체페이지갯수만큼이면 비활성화
        		if( nPage >= nTotalPageC) objBtnNext.set_enable(false);
        		objBtnNext.show();
        		nLeft = nLeft + nWidth; //left값 계산

        	}

        	//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        	objDivPaging.set_width(nLeft);

        	//가운데로
        	this.fvPageLeft = ((800 - nLeft) / 2);
        	this.fnSetCenter(this);

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

        	if(!this.gfnIsNull(this.fvFnCallback))
        	{
        		this.lookupFunc(this.fvFnCallback).call(1, e.postvalue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.cboCnt.addEventHandler("onitemchanged",this.cboCnt_onitemchanged,this);
        };
        this.loadIncludeScript("cmmPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
