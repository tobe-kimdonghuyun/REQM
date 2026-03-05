(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN0021P01");
            this.set_titletext("갱신대상조회및통보 상세(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pCtrtUpdtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlUsgCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDtlUsgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","20","10","95.00%","160",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","51",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_tabletemplate("1* / 1* / 1*");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SchClose");
            obj.set_visible("true");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","305","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","530","74","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","224","72","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("제1여객터미널");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("5px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBzentyNm","163","80","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","305","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtBzentyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","20","190","95.00%","420",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%","390",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_scrollbartype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"업체명\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"면적(m2)\"/><Cell col=\"4\" text=\"계약시작일자\"/><Cell col=\"5\" text=\"계약종료일자\"/><Cell col=\"6\" text=\"용도\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:bzentyNm\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:bldgCd\" displaytype=\"combotext\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:rmnmNo\"/><Cell col=\"3\" text=\"bind:rntar\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:rentBgngYmd\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:rentEndYmd\"/><Cell col=\"6\" text=\"bind:dtlUsgCd\" displaytype=\"combotext\" cssclass=\"CellEnd\" combodataset=\"dsCboDtlUsgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt","0","0","200","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTnocs\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","331","49","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs","0","49","34","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","0","49","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_tabletemplate("1* / 1* / 1*");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","51",null,null);

                p.panClose.set_taborder("4");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.set_visible("true");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("2");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.set_visible("true");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.pan01.set_taborder("7");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","305","40",null,null);

                p.staLabel01.set_taborder("6");
                p.staLabel01.set_text("건물명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.move("530","74","100","40",null,null);

                p.cboBldgCd.set_taborder("1");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("제1여객터미널");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("224","72","100%","40",null,null);

                p.panSchBtn.set_taborder("5");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.set_spacing("5px");
                p.panSchBtn.move("632","235","100%","45",null,null);

                p.btnSch.set_taborder("3");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","100","40",null,null);

                p.staLabel00.set_taborder("8");
                p.staLabel00.set_text("업체명");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edtBzentyNm.set_taborder("9");
                p.edtBzentyNm.set_flexgrow("1");
                p.edtBzentyNm.set_readonly("true");
                p.edtBzentyNm.move("163","80","100%","40",null,null);

                p.pan00.set_taborder("10");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexgrow("1");
                p.pan00.set_fittocontents("height");
                p.pan00.set_minwidth("");
                p.pan00.move("1694.00","398","305","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.set_scrollbartype("default");
                p.grdList.move("0","44","100.00%","390",null,null);

                p.PanelTtlCnt.set_taborder("4");
                p.PanelTtlCnt.set_fittocontents("none");
                p.PanelTtlCnt.set_spacing("0px 0px 0px 10px");
                p.PanelTtlCnt.move("0","0","200","34",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("none");
                p.staTotal.move("331","49","27","34",null,null);

                p.staTnocs.set_taborder("2");
                p.staTnocs.set_text("0");
                p.staTnocs.set_cssclass("sta_WF_Total");
                p.staTnocs.set_usedecorate("true");
                p.staTnocs.set_fittocontents("none");
                p.staTnocs.set_textAlign("center");
                p.staTnocs.move("0","49","34","34",null,null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("건");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("none");
                p.staTotal01.move("0","49","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("갱신대상조회및통보 상세(팝업)");

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("20","10","95.00%","160",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("20","190","95.00%","420",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSch.form.edtBzentyNm","value","dsSearch","pBzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd.form.staTnocs","text","dsList","cnt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("REN021P01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN021P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN021P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/01
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/01			pys						최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.strFilter = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 목록 조회 트랜젝션
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/rgl/selectUpdtTrgtInqNtfctnDtlList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			// 신청자가 임차희망서 등록한 구분, 건물 필터
        			if (this.strFilter == "") {
        				for (var i=0; i < this.dsList.rowcount; i++) {
        					if (i < this.dsList.rowcount -1) {
        						this.strFilter += "cdId == '"+this.dsList.getColumn(i,"bldgCd")+"' &&  grp2CdId == '" + this.getOwnerFrame().grp2CdId +"' || ";
        					} else {
        						this.strFilter += "cdId == '"+ this.dsList.getColumn(i,"bldgCd")+"' &&  grp2CdId == '" + this.getOwnerFrame().grp2CdId +"' || cdNm == '전체' ";
        					}
        				}

        				this.dsCboBldgCd.filter(this.strFilter);
        			}

        			this.divGrd.form.staTnocs.fittocontents="width";
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드 함수 호출
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"
        					  ,dsCboDtlUsgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_USE'}, opt:'B:cdNm'}"});

        	this.dsSearch.setColumn(0,"pBzentyNm" , this.getOwnerFrame().bzentyNm);
        	this.dsSearch.setColumn(0,"pCtrtUpdtNo" , this.getOwnerFrame().ctrtUpdtNo);

        	// 페이징을 위하여 검색 함수를 실행
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // Enter 입력
        this.form_onkeyup = function(obj,e)
        {
        	var focus = this.getFocus();

        	if (e.keycode == 13 && focus.taborder < 4 ) {
        		this.divSch.form.btnSch.click();
        	}
        };

        // 목록수
        this.divForm_divGrd_div00_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
        };
        this.loadIncludeScript("REN021P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
