(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00");
            this.set_titletext("신청정보(보호구역)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLableReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">T1입주자지원센터</Col></Row><Row><Col id=\"cdNm\">T2입주자지원센터</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","680",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem05\" componentid=\"pan05_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","103.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","147.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","628","0","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1320","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","300","119",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"calScrtyDgadsCmdtyUseBgngYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("보안위해물품 사용종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseEndYmd","0.00","44","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Panel("pan06_00","427.00","0","300","119",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"calScrtyDgadsCmdtyUseEndYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","1320","Panel03:0","100.00%","130",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사용목적(구체적으로 기재)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new TextArea("taScrtyDgadsCmdtyUsePrpsCn","0.00","31","100%","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","0","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"taScrtyDgadsCmdtyUsePrpsCn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1320","pan00:0","100.00%","120",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("보호구역위해물품 관리번호출력물 수령지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownSample","245.00","-3","197","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("보호위해물품 관리대장 샘플 ");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0.00","44","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"rdoPrtcZoneDgadsCmdtyMngNoOtptRcplSeCd\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDownSample\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0.00","70","100%","71",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("보호구역 위해물품 스티커 출력 방법 변경 안내\r\n신청완료일 기준 2020.10.07 이전 완료건은 신청자가 직접출력, 2020.10.07 이후 완료건은 입주자지원센터(T1/T2) 출력 수령\r\n보호구역 위해물품 스티커는 신청자(주관사 소속 직원의 경우 사용승인서를 출력하여 가져올 경우 대리 수령가능) 가 수령 하실 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0.00","142","100%","57",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("T1/T2 입주자지원센터 운영시간 : 평일 09:00~18:00(토/일/공휴일 휴무) [T1 : 032-743-3800~1, T2 : 032-743-3802~3]");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","1320","pan02:0","100.00%","211",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","0.00","0","60.94%","46",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("사용업체 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoUseBzentySmYn","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdoUseBzentySmYn_innerdataset = new nexacro.NormalDataset("rdoUseBzentySmYn_innerdataset", obj);
            rdoUseBzentySmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(rdoUseBzentySmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","30.00","10","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoUseBzentySmYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","1320","pan02_00:0","100.00%","97",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calScrtyDgadsCmdtyUseBgngYmd","0.00","41","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("보안위해물품 사용시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0.00","0","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용일이 30일이 안될경우 작업신고서(7일)를 통해 신청하시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0.00","84","100%","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사용시작일로부터 최대 5년까지");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoPrtcZoneDgadsCmdtyMngNoOtptRcplSeCd","0","-1","410","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("dsLableReceipt");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calScrtyDgadsCmdtyUseBgngYmd","value","dsAply","scrtyDgadsCmdtyUseBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calScrtyDgadsCmdtyUseEndYmd","value","dsAply","scrtyDgadsCmdtyUseEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","taScrtyDgadsCmdtyUsePrpsCn","value","dsAply","scrtyDgadsCmdtyUsePrpsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdoUseBzentySmYn","value","dsAply","useBzentySmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdoPrtcZoneDgadsCmdtyMngNoOtptRcplSeCd","value","dsAply","prtcZoneDgadsCmdtyMngNoOtptRcplSeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_02.xfdl", function() {
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

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{


        		case "search": //조회

        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)
        			this.fvJobTycoSeNm = this.cfnGvbkAplySeNm();

        			// 자식화면 함수를 호출한다.
        			for (let i=1; i<=this.tabStep.getTabpageCount(); i++) {
        				this["divForm0" + i].form.fnInit();
        			};

        			break;
        		default :
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsLableReceipt:"LABELRECEIPT" });
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //보호구역 위해물품 관리대장 샘플
        this.btnDownSample_onclick = function(obj,e)
        {
        	trace("보호구역 위해물품 관리대장 샘플_실제 샘플파일로 업로드 필요");
        	this.gfnNormalDownload("CST011M00", "sample01");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDownSample.addEventHandler("onclick",this.btnDownSample_onclick,this);
        };
        this.loadIncludeScript("CST011M00_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
