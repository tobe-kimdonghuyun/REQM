(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("도면대출신청(신청정보)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,366);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panTitle","1451","30","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("panForm","0","0","100.00%","420",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","50","100.00%","600",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicChcYn","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("공항공사 담당자 선택 유무");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoArptPbcprtPicChcYn","0","0","24.10%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdoArptPbcprtPicChcYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoArptPbcprtPicChcYn_innerdataset", obj);
            div00_form_rdoArptPbcprtPicChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoArptPbcprtPicChcYn_innerdataset);
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnArptPbcprtPicChc","289","0","163","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("입주자 시설 담당부서 현황");
            obj.set_cssclass("btn_WF_SmallGray");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","41","100%","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnArptPbcprtPicChc\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("도면 신청진행현황 공유 할 공항공사 담당자 유/무 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","77","100%","41",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","300","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicSpvsrId","10","10","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("공항공사 담당자(감독자)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","0","42","100%","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new MultiCombo("mtiArptPicId","10.00","0","90.33%","40",null,null,null,null,null,null,this.div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsWfEmps");
            obj.set_codecolumn("wfeEmpId");
            obj.set_datacolumn("wfeEmpNm");
            obj.set_flexgrow("1");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnArptPbcprtPicSpvsrId","mtiArptPicId:0","0","40","40",null,null,null,null,null,null,this.div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Static("Static02","0","85","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("도면 신청진행현황 공유 할 담당자 확인 후 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00","650.00","0","300","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicSpvsrId\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","48","100.00%","125",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staDstrtnPrnmntDt","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("파기예정일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calDstrtnPrnmntDt","0","50","150","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","94","100%","57",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("파기예정일 도래 시 (준공완료 시)도면보관책임자는 저장해 놓은 원본파일, 카피본 등의 자료 일체를 일괄파기 해야 합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","210","337","100%","77",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_fittocontents("height");
            obj.set_spacing("20px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","0","300","200",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDstrtnPrnmntDt\"/><PanelItem id=\"PanelItem02\" componentid=\"calDstrtnPrnmntDt\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staRgnSeCd","10.00","10","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("지역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoRgnSeCd","0","50","100%","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_rdoRgnSeCd_innerdataset = new nexacro.NormalDataset("div00_form_rdoRgnSeCd_innerdataset", obj);
            div00_form_rdoRgnSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제 1,2터미널지역/기타그외지역</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">화물터미널지역/물류단지</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoRgnSeCd_innerdataset);
            obj.set_text("제 1,2터미널지역/기타그외지역");
            obj.set_value("1");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","114","100%","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_text("일반지역 및 화물터미널 지역이 분리되어 두 지역 도면이 필요할 경우 각 1건씩 따로 신청해 주셔야 합니다.");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","650.00","0","300","200",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staRgnSeCd\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoRgnSeCd\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","0","100.00%","200",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.mtiArptPicId.set_taborder("1");
                p.mtiArptPicId.set_edittype("multitag");
                p.mtiArptPicId.set_innerdataset("dsWfEmps");
                p.mtiArptPicId.set_codecolumn("wfeEmpId");
                p.mtiArptPicId.set_datacolumn("wfeEmpNm");
                p.mtiArptPicId.set_flexgrow("1");
                p.mtiArptPicId.set_value("");
                p.mtiArptPicId.set_index("-1");
                p.mtiArptPicId.move("10.00","0","90.33%","40",null,null);

                p.btnArptPbcprtPicSpvsrId.set_taborder("0");
                p.btnArptPbcprtPicSpvsrId.set_cssclass("btn_WF_EdtSch");
                p.btnArptPbcprtPicSpvsrId.move("mtiArptPicId:0","0","40","40",null,null);
            	}
            );
            this.div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,366,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도면대출신청(신청정보)");

                p.panTitle.set_taborder("2");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("1451","30","100.00%","70",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("1070","0","209","50",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("신청정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.panForm.set_taborder("3");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0","100.00%","420",null,null);

                p.div00.set_taborder("4");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("0","50","100.00%","600",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,600,this,
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
            obj = new BindItem("item0","div00.form.rdoArptPbcprtPicChcYn","value","dsCadMaster","arptPbcprtPicChcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.calDstrtnPrnmntDt","value","dsCadMaster","dstrtnPrnmntDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.rdoRgnSeCd","value","dsCadMaster","rgnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST009M00_02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00_02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			An							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.p = this.parent.parent;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**************************************************************************
         * @name : btnArptPbcprtPicSpvsrId_onclick
         * @description : 담당자 찾기 팝업
         ***************************************************************************/
        this.btnArptPbcprtPicSpvsrId_onclick = function(obj,e)
        {
        	this.p.btnArptPbcprtPicSpvsrId_onclick();
        };


        /**************************************************************************
         * @name : btnArptPbcprtPicChc_onclick
         * @description : 입주자 시설 담당부서 현황 팝업
         ***************************************************************************/
        this.btnArptPbcprtPicChc_onclick = function(obj,e)
        {
        	this.p.btnArptPbcprtPicChc_onclick();
        };

        /************************************************************************
         * @name : rdoArptPbcprtPicChcYn_onitemchanged
         * @description : 공항공사 담당자 선택 유무 Event
         ************************************************************************/
        this.rdoArptPbcprtPicChcYn_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 0)
        	{
        		this.div00.form.pan06_00.visible = true;
        	}else{
        		this.div00.form.pan06_00.visible = false;
        	}
        };

        /**************************************************************************
         * @name : rdoRgnSeCd_canitemchange
         * @description : 지역구분 변경 Event
         ***************************************************************************/
        this.rdoRgnSeCd_canitemchange = function(obj,e)
        {
        	if(e.postvalue == 0)
        	{
        		this.p.dsCadBleCombo.filter("cdId == '' || cdId == 'CADBLD011' || cdId == 'CADBLD012' || cdId == 'CADBLD013'  || cdId == 'CADBLD014'  || cdId == 'CADBLD015' || cdId == 'CADBLD016' || cdId == 'CADBLD017' || cdId == 'CADBLD018' || cdId == 'CADBLD019' || cdId == 'CADBLD020' || cdId == 'CADBLD021'");

        	}else{
        		this.p.dsCadBleCombo.filter("cdId == '' || cdId == 'CADBLD001' || cdId == 'CADBLD002' || cdId == 'CADBLD003'  || cdId == 'CADBLD004'  || cdId == 'CADBLD005' || cdId == 'CADBLD006' || cdId == 'CADBLD007' || cdId == 'CADBLD008' || cdId == 'CADBLD009' || cdId == 'CADBLD010'");
        	}
        	this.p.dsRltwfCadList.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.div00.form.rdoArptPbcprtPicChcYn.addEventHandler("onitemchanged",this.rdoArptPbcprtPicChcYn_onitemchanged,this);
            this.div00.form.btnArptPbcprtPicChc.addEventHandler("onclick",this.btnArptPbcprtPicChc_onclick,this);
            this.div00.form.divEdtPop01.form.btnArptPbcprtPicSpvsrId.addEventHandler("onclick",this.btnArptPbcprtPicSpvsrId_onclick,this);
            this.div00.form.rdoRgnSeCd.addEventHandler("canitemchange",this.rdoRgnSeCd_canitemchange,this);
        };
        this.loadIncludeScript("CST009M00_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
