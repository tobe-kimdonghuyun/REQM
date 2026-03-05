(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCode");
            this.set_titletext("workFlow");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobSeCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"btnSeq\" type=\"STRING\" size=\"256\"/><Column id=\"cssClass\" type=\"STRING\" size=\"256\"/><Column id=\"exclCnd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrchYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">Y - 사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">N - 미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">선택</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNextJob", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"DATE\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdJobSeCd","0","160",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsJobSeCd");
            obj.set_autoenter("select");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"230\"/><Column size=\"87\"/><Column size=\"150\"/><Column size=\"103\"/><Column size=\"101\"/><Column size=\"144\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"2\" text=\"작업구분\"/><Cell col=\"4\" colspan=\"2\" text=\"작업공종\"/><Cell col=\"6\" colspan=\"2\" text=\"업무처리단계\"/><Cell col=\"8\" colspan=\"2\" text=\"작업처리진행\"/><Cell col=\"10\" colspan=\"4\" text=\"처리구분\"/><Cell col=\"14\" rowspan=\"2\" text=\"비고\"/><Cell col=\"15\" rowspan=\"2\" text=\"버튼순서\"/><Cell col=\"16\" rowspan=\"2\" text=\"CSS\"/><Cell col=\"17\" rowspan=\"2\" text=\"제외조건\"/><Cell col=\"18\" rowspan=\"2\" text=\"등록일자\"/><Cell col=\"19\" rowspan=\"2\" text=\"등록자\"/><Cell row=\"1\" col=\"2\" text=\"구분코드\"/><Cell row=\"1\" col=\"3\" text=\"구분코드명\"/><Cell row=\"1\" col=\"4\" text=\"구분코드\"/><Cell row=\"1\" col=\"5\" text=\"구분코드명\"/><Cell row=\"1\" col=\"6\" text=\"구분코드\"/><Cell row=\"1\" col=\"7\" text=\"구분코드명\"/><Cell row=\"1\" col=\"8\" text=\"구분코드\"/><Cell row=\"1\" col=\"9\" text=\"구분코드명\"/><Cell row=\"1\" col=\"10\" text=\"구분코드\"/><Cell row=\"1\" col=\"11\" text=\"구분코드명\"/><Cell row=\"1\" col=\"12\" text=\"다음단계작업처리&#13;&#10;진행구분\"/><Cell row=\"1\" col=\"13\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:jobSeCd\" editautoselect=\"true\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:jobSeCdNm\" displaytype=\"text\" editautoselect=\"true\" textAlign=\"left\" tooltiptext=\"bind:jobSeCdNm\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:jobTycoSeCd\" editautoselect=\"true\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"5\" text=\"bind:jobTycoSeCdNm\" displaytype=\"text\" editautoselect=\"true\" textAlign=\"left\" tooltiptext=\"bind:jobTycoSeCdNm\" suppress=\"1\"/><Cell col=\"6\" text=\"bind:taskPrcsStepSeCd\" editautoselect=\"true\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"7\" text=\"bind:taskPrcsStepSeCdNm\" displaytype=\"text\" editautoselect=\"true\" textAlign=\"left\" tooltiptext=\"bind:taskPrcsStepSeCdNm\" suppress=\"1\"/><Cell col=\"8\" text=\"bind:jobPrcsPrgrsSeCd\" editautoselect=\"true\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"9\" text=\"bind:jobPrcsPrgrsSeCdNm\" displaytype=\"text\" editautoselect=\"true\" textAlign=\"left\" tooltiptext=\"bind:jobPrcsPrgrsSeCdNm\" suppress=\"1\"/><Cell col=\"10\" text=\"bind:prcsSeCd\" editautoselect=\"true\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcsSeCdNm\" displaytype=\"text\" editautoselect=\"true\" textAlign=\"left\" tooltiptext=\"bind:prcsSeCdNm\"/><Cell col=\"12\" text=\"bind:nextStepJobPrcsPrgrsSeCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsNextJob\" combocodecol=\"jobPrcsPrgrsSeCd\" textAlign=\"center\" tooltiptext=\"bind:nextStepJobPrcsPrgrsSeCd\" combodatacol=\"jobPrcsPrgrsSeCdNm\" combodisplayrowcount=\"5\"/><Cell col=\"13\" text=\"bind:useYn\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGridYn\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"14\" text=\"bind:rmrk\" displaytype=\"editcontrol\" edittype=\"normal\" textAlign=\"left\" tooltiptext=\"bind:rmrk\"/><Cell col=\"15\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:btnSeq\" textAlign=\"center\"/><Cell col=\"16\" edittype=\"normal\" displaytype=\"editcontrol\" text=\"bind:cssClass\"/><Cell col=\"17\" displaytype=\"editcontrol\" text=\"bind:exclCnd\" edittype=\"normal\"/><Cell col=\"18\" text=\"bind:frstRegDt\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" edittype=\"none\"/><Cell col=\"19\" text=\"bind:frstRegId\" displaytype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"112","572","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnWordDwnldExcel","470.00","0","100","27",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("5");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","btnWordDwnldExcel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Combo("cboAdd","227.00","0",null,"28","btnAdd:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divCmmnBtn_form_cboAdd_innerdataset = new nexacro.NormalDataset("divCmmnBtn_form_cboAdd_innerdataset", obj);
            divCmmnBtn_form_cboAdd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">I</Col><Col id=\"datacolumn\">선택행</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">첫번째</Col></Row><Row><Col id=\"codecolumn\">L</Col><Col id=\"datacolumn\">마지막</Col></Row></Rows>");
            obj.set_innerdataset(divCmmnBtn_form_cboAdd_innerdataset);
            obj.set_text("I");
            obj.set_value("선택행");
            obj.set_index("0");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"0","72","28","cboAdd:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("행복사");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDelPop",null,"0","92","28","btnCopy:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_text("구분별삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Small");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divSearch00","0","0",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staJobSeCd","10","12","98","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtJobSeCd","151.00","12","140","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01","308.00","12","96","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("작업공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeCd","425.00","12","140","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_00","598.00","12","126","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_text("업무처리단계");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeCd00","744.00","12","140","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_01","10.00","49","126","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("작업처리진행");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeCd01","151.00","49","140","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_02","308.00","49","106","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_text("처리구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtJobTycoSeCd02","425.00","49","140","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01_03","598.00","49","116","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","744.00","49","131","30",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch00_form_cboUseYn_innerdataset = new nexacro.NormalDataset("divSearch00_form_cboUseYn_innerdataset", obj);
            divSearch00_form_cboUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cboUseYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"45","84","34","10",null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"45","90","34","btnSave:6",null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Search");
            obj.set_text("조회");
            this.divSearch00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch00.form
            obj = new Layout("default","",0,0,this.divSearch00.form,function(p){});
            this.divSearch00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1480,900,this,function(p){});
            obj.set_flexcrossaxisalign("end");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch00.form.edtJobSeCd","value","dsSearch","jobSeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.edtJobTycoSeCd","value","dsSearch","jobTycoSeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch00.form.edtJobTycoSeCd00","value","dsSearch","taskPrcsStepSeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch00.form.cboUseYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch00.form.edtJobTycoSeCd02","value","dsSearch","prcsSeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch00.form.edtJobTycoSeCd01","value","dsSearch","jobPrcsPrgrsSeCdNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("workFlow.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	 // this.divSearch00.form.divSearchBtn.set_right(50);

        	// 초기함수
        	this.fnFormInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function () {
        	this.fnSearch();
        }

        //저장
        this.cfnSave = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsJobSeCd) == false) {
        		this.gfnAlertMsg("msg", "변경 내역이 없습니다.", "");
        		return;
        	} else {
        		var vConfig = this.gfnConfirmMsg("save_confirm", "MSG_001", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 조회
        this.fnSearch = function () {
        	var strSvcId    = "search";
        	var strSvcUrl   = "workFlow/workFlowList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsJobSeCd=dsJobSeCd dsNextJob=dsNextJob";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        // 저장
        this.fnSave = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "workFlow/workFlowSave.do";
        	var inData      = "dsSearch=dsSearch dsJobSeCd=dsJobSeCd:U";
        	var outData     = "dsJobSeCd=dsJobSeCd";;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]

        }

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			this.fnSave();
        		}
        	}else if(sPopupId == "delete_confirm") {
        		if(oRtn.result == "Y") {
        			const nExtRow = this.dsJobSeCd.extractRows("chk == '1' && dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT");
        			//const nExtRow = this.dsJobSeCd.extractRows("chk == " + 1);
        			this.dsJobSeCd.deleteMultiRows(nExtRow);
        			this.fnSave();
        		}
        	}
        };
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
        		case "search":
        			this.dsNextJob.insertRow(0);
        			this.dsNextJob.setColumn(0,"jobPrcsPrgrsSeCd","N/A");
        			this.dsNextJob.setColumn(0,"jobPrcsPrgrsSeCdNm","N/A");
        			break;
        		case "save" :
        			this.gfnAlertMsg("msg", "저장되었습니다.", "");
        			break;
        		default :
        			break;
        	}
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "workFlowDelete")
        	{
        		this.fnSearch();
        	}else if(sPopupId == "css"){
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var sNote = objRtn.rVal;

        		this.dsJobSeCd.setColumn(this.dsJobSeCd.rowposition,"cssClass",sNote);
        	}else if(sPopupId == "exclCnd"){
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		var sNote = objRtn.rVal;

        		this.dsJobSeCd.setColumn(this.dsJobSeCd.rowposition,"exclCnd",sNote);
        	}


        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 화면 초기화
        this.fnFormInit = function () {
        	// 그리드의 상태를 처리한다. [ 그리드의 "다음단계작업처리진행구분" 전 컬럼까지] => 신규 (행추가) 상태의 데이터만 활성화 시킨다.
        	const arrIgnorCol = ["chk", "nextStepJobPrcsPrgrsSeCd", "useYn", "rmrk", "regYmd", "rgtr", "btnSeq", "cssClass", "exclCnd"];
        	var vDateColIdx = this.grdJobSeCd.getBindCellIndex("body", "frstRegDt");
        	for (let i=0; i<this.grdJobSeCd.getCellCount("body"); i++) {
        		const sText = this.gfnNvl(this.grdJobSeCd.getCellProperty("body", i, "text"), "").replace("bind:", "");
        		// 제외컬럼이거나 expr 사용중인 컬럼 continue;
        		if (arrIgnorCol.includes(sText) || sText.indexOf("expr:") == 0) continue;

        		if(i == vDateColIdx){
        			this.grdJobSeCd.setCellProperty("body", i, "displaytype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'editcontrol' : 'date'");
        			this.grdJobSeCd.setCellProperty("body", i, "edittype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'");
        		}else{
        			this.grdJobSeCd.setCellProperty("body", i, "displaytype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'editcontrol' : 'normal'");
        			this.grdJobSeCd.setCellProperty("body", i, "edittype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'");
        		}
        	}
        }

        // 다음단계작업처리 진행구분 필터링
        this.fnNextJobCd = function (nRow) {
        		this.dsNextJob.filter("");


        		var vJobTycoSeCd = this.dsJobSeCd.getColumn(nRow, "jobTycoSeCd");
        		var vJobSeCd = this.dsJobSeCd.getColumn(nRow,"jobSeCd");
        		this.dsNextJob.filter("jobSeCd == '" + vJobSeCd + "' && jobTycoSeCd == '" + vJobTycoSeCd + "' || (jobPrcsPrgrsSeCdNm == 'N/A' && jobTycoSeCd == null)");
        		this.dsNextJob.keystring = "S:jobPrcsPrgrsSeCdNm";


        }

        // // 그리드 내용 복사&붙여넣기
        // this.fnCopyPasteGridCellText = function (obj:nexacro.Grid,e:nexacro.KeyEventInfo) {
        // 	// 복사
        // 	if (e.ctrlKey && e.keycode == 67) {
        // 		const s
        // 	}
        // }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 행복사
        this.divCmmnBtn_btnCopy_onclick = function(obj,e)
        {
        	const nRow = this.dsJobSeCd.rowposition;
        	const nRowType = this.dsJobSeCd.getRowType(this.dsJobSeCd.rowposition);

        	// if (nRowType == Dataset.ROWTYPE_INSERT) return;
        	try {
        		this.dsJobSeCd.set_enableevent(false);
        		var vDateColIdx = this.grdJobSeCd.getBindCellIndex("body", "frstRegDt");
        		var vRegColIdx = this.grdJobSeCd.getBindCellIndex("body", "frstRegId");
        		const nAddRow = this.dsJobSeCd.insertRow(nRow + 1);

        		["jobSeCd", "jobSeCdNm", "jobTycoSeCd", "jobTycoSeCdNm", "taskPrcsStepSeCd", "taskPrcsStepSeCdNm", "jobPrcsPrgrsSeCd", "jobPrcsPrgrsSeCdNm"]
        		.forEach(sColId => this.dsJobSeCd.setColumn(nAddRow, sColId, this.dsJobSeCd.getColumn(nRow, sColId)));
        		var vUserId = this.objApp.gdsUser.getColumn(0,"userId");
        		this.dsJobSeCd.setColumn(nAddRow, "useYn", "Y");
        		this.dsJobSeCd.setColumn(nAddRow, "frstRegId", vUserId);
        		this.dsJobSeCd.setColumn(nAddRow, "frstRegDt", this.gfnGetDate());
        		this.grdJobSeCd.setCellProperty("body", vDateColIdx, "displaytype", "date");
        		this.grdJobSeCd.setCellProperty("body", vDateColIdx, "edittype", "none");
        		this.grdJobSeCd.setCellProperty("body", vRegColIdx, "displaytype", "normal");
        		this.grdJobSeCd.setCellProperty("body", vRegColIdx, "edittype", "none");
        	} finally {
        		this.dsJobSeCd.set_enableevent(true);
        	}
        };

        // 행추가
        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	try {
        		this.dsJobSeCd.set_enableevent(false);
        		var nVal = this.divCmmnBtn.form.cboAdd.value;
        		if(nVal == "I"){
        			var nRow = this.dsJobSeCd.rowposition;
        			var nAddRow = this.dsJobSeCd.insertRow(nRow+1);
        		}else if(nVal == "F"){
        			var nAddRow = this.dsJobSeCd.insertRow(0);
        		}else{
        			var nAddRow = this.dsJobSeCd.addRow();
        		}
        		var vUserId = this.objApp.gdsUser.getColumn(0,"userId");
        		var vDateColIdx = this.grdJobSeCd.getBindCellIndex("body", "frstRegDt");
        		var vRegColIdx = this.grdJobSeCd.getBindCellIndex("body", "frstRegId");
        		this.dsJobSeCd.setColumn(nAddRow, "useYn", "Y");
        		this.dsJobSeCd.setColumn(nAddRow, "frstRegId", vUserId);
        		this.dsJobSeCd.setColumn(nAddRow, "frstRegDt", this.gfnGetDate());
        		this.grdJobSeCd.setCellProperty("body", vDateColIdx, "displaytype", "date");
        		this.grdJobSeCd.setCellProperty("body", vDateColIdx, "edittype", "none");
        		this.grdJobSeCd.setCellProperty("body", vRegColIdx, "displaytype", "normal");
        		this.grdJobSeCd.setCellProperty("body", vRegColIdx, "edittype", "none");

        	} finally {
        		this.dsJobSeCd.set_enableevent(true);
        	}
        };

        // 행삭제
        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	const nFindRow = this.dsJobSeCd.findRow("chk", 1);
        	if (nFindRow == -1) {
        		this.gfnAlertMsg("msg", "선택된 정보가 존재하지 않습니다.", "");
        		return;
        	}

        	var vConfig = this.gfnConfirmMsg("delete_confirm", "삭제하시겠습니까?", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 데이터셋 변경 전
        this.dsJobSeCd_cancolumnchange = function(obj,e)
        {
        	// 코드 별 명칭
        	// 작업구분
        	if (e.columnid == "jobSeCd" || e.columnid == "jobSeCdNm" ) {
        		const sCode = e.columnid == "jobSeCd" ? e.newvalue : obj.getColumn(e.row, "jobSeCd");
        		const sName = e.columnid == "jobSeCdNm" ? e.newvalue : obj.getColumn(e.row, "jobSeCdNm");
        		if (fnChkDupInfo.call(this, "jobSeCd", sCode, "jobSeCdNm", sName, "작업구분") > -1) {return false;}
        	}

        	// 작업공종
        	else if (e.columnid == "jobTycoSeCd" || e.columnid == "jobTycoSeCdNm" ) {
        		const sCode = e.columnid == "jobTycoSeCd" ? e.newvalue : obj.getColumn(e.row, "jobTycoSeCd");
        		const sName = e.columnid == "jobTycoSeCdNm" ? e.newvalue : obj.getColumn(e.row, "jobTycoSeCdNm");
        		if (fnChkDupInfo.call(this, "jobTycoSeCd", sCode, "jobTycoSeCdNm", sName, "작업공종") > -1) {return false;}
        	}

        	// 업무처리단계
        	else if (e.columnid == "taskPrcsStepSeCd" || e.columnid == "taskPrcsStepSeCdNm" ) {
        		const sCode = e.columnid == "taskPrcsStepSeCd" ? e.newvalue : obj.getColumn(e.row, "taskPrcsStepSeCd");
        		const sName = e.columnid == "taskPrcsStepSeCdNm" ? e.newvalue : obj.getColumn(e.row, "taskPrcsStepSeCdNm");
        		if (fnChkDupInfo.call(this, "taskPrcsStepSeCd", sCode, "taskPrcsStepSeCdNm", sName, "업무처리단계") > -1) {return false;}
        	}

        	// 작업처리진행
        	else if (e.columnid == "jobPrcsPrgrsSeCd" || e.columnid == "jobPrcsPrgrsSeCdaNm" ) {
        		const sCode = e.columnid == "jobPrcsPrgrsSeCd" ? e.newvalue : obj.getColumn(e.row, "jobPrcsPrgrsSeCd");
        		const sName = e.columnid == "jobPrcsPrgrsSeCdaNm" ? e.newvalue : obj.getColumn(e.row, "jobPrcsPrgrsSeCdaNm");
        		if (fnChkDupInfo.call(this, "jobPrcsPrgrsSeCd", sCode, "jobPrcsPrgrsSeCdaNm", sName, "작업처리진행") > -1) {return false;}
        	}

        	// 처리구분
        	else if (e.columnid == "prcsSeCd" || e.columnid == "prcsSeCdNm" ) {
        		const sCode = e.columnid == "prcsSeCd" ? e.newvalue : obj.getColumn(e.row, "prcsSeCd");
        		const sName = e.columnid == "prcsSeCdNm" ? e.newvalue : obj.getColumn(e.row, "prcsSeCdNm");
        		if (fnChkDupInfo.call(this, "prcsSeCd", sCode, "prcsSeCdNm", sName, "처리") > -1) {return false;}
        	}

        	// 작업구분, 작업공증, 업무처리단계, 작업처리진행, 처리구분 (데이터 중복체크)
        	if (["jobSeCd", "jobTycoSeCd", "taskPrcsStepSeCd", "jobPrcsPrgrsSeCd", "prcsSeCd"].includes(e.columnid)) {
        		const sJobSeCd = e.columnid == "jobSeCd" ? e.newvalue : obj.getColumn(e.row, "jobSeCd");
        		const sJobTycoSeCd = e.columnid == "jobTycoSeCd" ? e.newvalue : obj.getColumn(e.row, "jobTycoSeCd");
        		const sTaskPrcsStepSeCd = e.columnid == "taskPrcsStepSeCd" ? e.newvalue : obj.getColumn(e.row, "taskPrcsStepSeCd");
        		const sJobPrcsPrgrsSeCd = e.columnid == "jobPrcsPrgrsSeCd" ? e.newvalue : obj.getColumn(e.row, "jobPrcsPrgrsSeCd");
        		const sPrcsSeCd = e.columnid == "prcsSeCd" ? e.newvalue : obj.getColumn(e.row, "prcsSeCd");

        		// 중복 체크
        		const nFindRow = this.dsJobSeCd.findRowExpr(`jobSeCd == '${sJobSeCd}'
		                                          && jobTycoSeCd == '${sJobTycoSeCd}'
        												  && taskPrcsStepSeCd == '${sTaskPrcsStepSeCd}'
        		                                          && jobPrcsPrgrsSeCd == '${sJobPrcsPrgrsSeCd}'
        												  && prcsSeCd == '${sPrcsSeCd}'`);

		if (nFindRow == -1) return;

        		this.gfnAlertMsg("msg", "중복된 정보가 존재합니다.", "");
        		return false;
        	}

        	// 입력데이터 validation
        	function fnChkDupInfo (sCode, sCodeVal, sName, sNameVal, sType) {
        		// 빈값이 있으면 입력중이므로 중복체크하지 않는다.
        		if (this.gfnIsNull(sCodeVal) || this.gfnIsNull(sNameVal)) return -1;
        		const nFindRow = obj.findRowExpr(`${obj.rowposition} != currow && ${sCode} == '${sCodeVal}' && ${sName} != '${sNameVal}' && !dataset.parent.gfnIsNull(${sName})`);

        		if (nFindRow > -1) {
        			alert(`동일 ${sType}구분코드에 다르게 입력된 ${sType}구분코드명이 존재합니다.`);
        			return nFindRow;
        		}
        	}
        };


        // 데이터셋 변경 후
        this.dsJobSeCd_oncolumnchanged = function(obj,e)
        {
        	// 작업구분
        	if (e.columnid == "jobSeCd") {
        		["jobSeCdNm", "jobTycoSeCd", "jobTycoSeCdNm", "taskPrcsStepSeCd", "taskPrcsStepSeCdNm", "jobPrcsPrgrsSeCd", "jobPrcsPrgrsSeCdNm", "prcsSeCd", "prcsSeCdNm", "nextStepJobPrcsPrgrsSeCd"]
        		.forEach(sColId => obj.setColumn(e.row, sColId, ""));
        		const nFindRow = obj.findRowExpr(`jobSeCd == '${e.newvalue}' && !dataset.parent.gfnIsNull(jobSeCdNm)`);
        		obj.setColumn(e.row, "jobSeCdNm", obj.getColumn(nFindRow, "jobSeCdNm"));
        	}

         	// 작업공종
         	else if (e.columnid == "jobTycoSeCd") {
        		["jobTycoSeCdNm", "taskPrcsStepSeCd", "taskPrcsStepSeCdNm", "jobPrcsPrgrsSeCd", "jobPrcsPrgrsSeCdNm", "prcsSeCd", "prcsSeCdNm", "nextStepJobPrcsPrgrsSeCd"]
        		.forEach(sColId => obj.setColumn(e.row, sColId, ""));
         		const nFindRow = obj.findRowExpr(`jobTycoSeCd == '${e.newvalue}' && !dataset.parent.gfnIsNull(jobTycoSeCdNm)`);
        		obj.setColumn(e.row, "jobTycoSeCdNm", obj.getColumn(nFindRow, "jobTycoSeCdNm"));
         	}

        	// 업무처리단계
         	else if (e.columnid == "taskPrcsStepSeCd") {
        		["taskPrcsStepSeCdNm", "jobPrcsPrgrsSeCd", "jobPrcsPrgrsSeCdNm", "prcsSeCd", "prcsSeCdNm", "nextStepJobPrcsPrgrsSeCd"]
        		.forEach(sColId => obj.setColumn(e.row, sColId, ""));
         		const nFindRow = obj.findRowExpr(`taskPrcsStepSeCd == '${e.newvalue}' && !dataset.parent.gfnIsNull(taskPrcsStepSeCdNm)`);
        		obj.setColumn(e.row, "taskPrcsStepSeCdNm", obj.getColumn(nFindRow, "taskPrcsStepSeCdNm"));
         	}

         	// 작업처리진행
         	else if (e.columnid == "jobPrcsPrgrsSeCd") {
        		["jobPrcsPrgrsSeCdNm", "prcsSeCd", "prcsSeCdNm", "nextStepJobPrcsPrgrsSeCd"]
        		.forEach(sColId => obj.setColumn(e.row, sColId, ""));
         		const nFindRow = obj.findRowExpr(`jobPrcsPrgrsSeCd == '${e.newvalue}' && !dataset.parent.gfnIsNull(jobPrcsPrgrsSeCdNm)`);
        		obj.setColumn(e.row, "jobPrcsPrgrsSeCdNm", obj.getColumn(nFindRow, "jobPrcsPrgrsSeCdNm"));
         	}

        	// 처리구분
         	else if (e.columnid == "prcsSeCd") {
        		obj.setColumn(e.row, "prcsSeCdNm", "");
        		obj.setColumn(e.row, "nextStepJobPrcsPrgrsSeCd", "");
         		const nFindRow = obj.findRowExpr(`prcsSeCd == '${e.newvalue}' && !dataset.parent.gfnIsNull(prcsSeCdNm)`);
        		obj.setColumn(e.row, "prcsSeCdNm", obj.getColumn(nFindRow, "prcsSeCdNm"));
         	}

        	// 다음단계작업처리진행구분 필터링
        	if (["jobTycoSeCd", "jobPrcsPrgrsSeCd", "jobPrcsPrgrsSeCdNm"].includes(e.columnid)) {
        		//this.fnNextJobCd(e.row);
        	}
        };

        // 데이터셋 row 변경 후
        this.dsJobSeCd_onrowposchanged = function(obj,e)
        {
        	// 다음단계작업처리진행구분 필터링
        	const sJobTycoSeCd = this.dsJobSeCd.getColumn(e.newrow, "jobTycoSeCd");
        	const sOldJobTycoSeCd = this.dsJobSeCd.getColumn(e.oldrow, "jobTycoSeCd");
        	const sJobPrcsPrgrsSeCd = this.dsJobSeCd.getColumn(e.newrow, "jobPrcsPrgrsSeCd");
        	const sOldJobPrcsPrgrsSeCd = this.dsJobSeCd.getColumn(e.oldrow, "jobPrcsPrgrsSeCd");

        	// 작업공종이 같은경우 처리하지 않는다.
        	if (sJobTycoSeCd == sOldJobTycoSeCd && sJobPrcsPrgrsSeCd == sOldJobPrcsPrgrsSeCd) return;
        };

        this.grdJobSeCd_onkeydown = function(obj,e)
        {
        	// 복사 && 붙여넣기
        	// this.fnCopyPasteGridCellText(obj, e);
        };

        // 삭제팝업오픈
        this.divCmmnBtn_btnDelPop_onclick = function(obj,e)
        {
        	const sTitle = "작업구분별 삭제팝업";
        	const oArg   = {};
        	const oOption = {
        		  popuptype : "modal"
        		, autosize : false
        		, title : sTitle
        		, resize : false
        		, titlebar : true};
        	const sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("workFlowDelete", "work::COM/workFlowPopup.xfdl", oArg, sPopupCallBack, oOption);
        };


        this.divSearch00_edtJobSeCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearch();
        	}
        };

        this.grdJobSeCd_oncellclick = function(obj,e)
        {
        	var vCssClassColIdx = this.grdJobSeCd.getBindCellIndex("body", "cssClass");
        	var vExclCndColIdx = this.grdJobSeCd.getBindCellIndex("body", "exclCnd");

        	if(e.col == 12)
        	{
        		this.fnNextJobCd(e.row);
        		obj.dropdownCombo();
        	}else if(e.col == vCssClassColIdx){
        		var vCss = this.dsJobSeCd.getColumn(e.row,"cssClass");

        		var sTitle = "Note";
        		var objArg   = {
        			"textMemo" : vCss
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 780
        			, height: 400			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("css", "work::COM/workFlowNote.xfdl", objArg, sPopupCallBack, objOption);
        	}else if(e.col == vExclCndColIdx){
        		var vExclCnd = this.dsJobSeCd.getColumn(e.row,"exclCnd");

        		var sTitle = "Note";
        		var objArg   = {
        			"textMemo" : vExclCnd
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, width: 780
        			, height: 400			//width,height 지정하지 않음 popup form size적용
        			, autosize: false
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("exclCnd", "work::COM/workFlowNote.xfdl", objArg, sPopupCallBack, objOption);
        	}


        };


        this.tabMain_tpgWord_divForm_divGrd_btnWordDwnldExcel_onclick = function(obj,e)
        {
        	this.exportObj = new ExcelExportObject();
        	var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grdJobSeCd, "Sheet1!A1");
        	this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
        	this.exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.grdJobSeCd.addEventHandler("onkeydown",this.grdJobSeCd_onkeydown,this);
            this.grdJobSeCd.addEventHandler("oncellclick",this.grdJobSeCd_oncellclick,this);
            this.divCmmnBtn.form.btnWordDwnldExcel.addEventHandler("onclick",this.tabMain_tpgWord_divForm_divGrd_btnWordDwnldExcel_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divCmmnBtn.form.btnCopy.addEventHandler("onclick",this.divCmmnBtn_btnCopy_onclick,this);
            this.divCmmnBtn.form.btnDelPop.addEventHandler("onclick",this.divCmmnBtn_btnDelPop_onclick,this);
            this.divSearch00.form.edtJobSeCd.addEventHandler("onkeyup",this.divSearch00_edtJobSeCd_onkeyup,this);
            this.divSearch00.form.edtJobTycoSeCd.addEventHandler("onkeyup",this.divSearch00_edtJobSeCd_onkeyup,this);
            this.divSearch00.form.edtJobTycoSeCd00.addEventHandler("onkeyup",this.divSearch00_edtJobSeCd_onkeyup,this);
            this.divSearch00.form.edtJobTycoSeCd01.addEventHandler("onkeyup",this.divSearch00_edtJobSeCd_onkeyup,this);
            this.divSearch00.form.edtJobTycoSeCd02.addEventHandler("onkeyup",this.divSearch00_edtJobSeCd_onkeyup,this);
            this.divSearch00.form.btnSave.addEventHandler("onclick",this.cfnSave,this);
            this.divSearch00.form.btnSearch.addEventHandler("onclick",this.cfnSearch,this);
            this.dsJobSeCd.addEventHandler("oncolumnchanged",this.dsJobSeCd_oncolumnchanged,this);
            this.dsJobSeCd.addEventHandler("onrowposchanged",this.dsJobSeCd_onrowposchanged,this);
            this.dsJobSeCd.addEventHandler("cancolumnchange",this.dsJobSeCd_cancolumnchange,this);
        };
        this.loadIncludeScript("workFlow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
