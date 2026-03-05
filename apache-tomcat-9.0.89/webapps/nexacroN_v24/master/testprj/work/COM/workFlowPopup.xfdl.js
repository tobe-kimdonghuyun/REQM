(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1385,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobSeCd1", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"DATE\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobSeCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"DATE\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobSeCd3", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"DATE\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobSeCd4", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobPrcsPrgrsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"nextStepJobPrcsPrgrsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"DATE\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25.00","20","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","20","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","701.00","19","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업무처리단계");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelTaskPrcsStepSeCd","sta00_00_00:92.00","29","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList1","25.00","63","325",null,null,"50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJobSeCd1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"2\" text=\"작업구분\"/><Cell row=\"1\" col=\"2\" text=\"구분코드\"/><Cell row=\"1\" col=\"3\" text=\"구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:jobSeCd\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:jobSeCdNm\" displaytype=\"text\" tooltiptext=\"bind:jobSeCdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList2","grdList1:13.00","63","325",null,null,"50",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJobSeCd2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"2\" text=\"작업공종\"/><Cell row=\"1\" col=\"2\" text=\"구분코드\"/><Cell row=\"1\" col=\"3\" text=\"구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:jobTycoSeCd\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:jobTycoSeCdNm\" displaytype=\"text\" tooltiptext=\"bind:jobTycoSeCdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList3","grdList2:13.00","63","325",null,null,"50",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJobSeCd3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"2\" text=\"업무처리단계\"/><Cell row=\"1\" col=\"2\" text=\"구분코드\"/><Cell row=\"1\" col=\"3\" text=\"구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:taskPrcsStepSeCd\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:taskPrcsStepSeCdNm\" displaytype=\"text\" tooltiptext=\"bind:taskPrcsStepSeCdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","grdList3:13.00","19","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작업처리진행");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","grdList1:13.00","19","161","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작업공종");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList4","grdList3:13.00","63",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsJobSeCd4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"NO\"/><Cell col=\"2\" colspan=\"2\" text=\"작업처리진행\"/><Cell row=\"1\" col=\"2\" text=\"구분코드\"/><Cell row=\"1\" col=\"3\" text=\"구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:jobPrcsPrgrsSeCd\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:jobPrcsPrgrsSeCdNm\" displaytype=\"text\" tooltiptext=\"bind:jobPrcsPrgrsSeCdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelJobSeCd","sta00:92.00","29","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelJobTycoSeCd","sta00_00_00_00:92.00","29","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelJobPrcsPrgrsSeCd","sta00_00:92.00","29","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1385,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div01.form.edt05_01","value","ds_get","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.edt05_01_00","value","ds_get","menuOdr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.rdo00_00","value","ds_get","menuVisibleYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("workFlowPopup.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp17_1.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        // 조회
        this.cfnSearch = function () {
        	var outData     = "dsJobSeCd1=dsJobSeCd";
        	var strSvcUrl   = "workFlow/workFlowPopList1.do";
        	this.fnSearch(strSvcUrl, outData);
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 조회
        this.fnSearch = function (strSvcUrl, outData) {

        	var strSvcId    = "search";
        	var inData      = "dsSearch=dsSearch";
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
        this.fnSave = function (inData) {
        	var strSvcId    = "save";
        	var strSvcUrl   = "workFlow/workFlowSave.do";
        	var outData     = "";
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

        			break;

        		case "save" :
        			this.gfnAlertMsg("msg", "삭제되었습니다.", "");
        			break;
        		default :
        			break;
        	}
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "delete_confirm") {

        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
         this.fnDelete = function (vBtnNm) {

        	if(vBtnNm == "btnDelJobSeCd"){
        		const nExtRow = this.dsJobSeCd1.extractRows("chk == " + 1);
        		this.dsJobSeCd1.deleteMultiRows(nExtRow);
        		var inData = "dsJobSeCd=dsJobSeCd1:U";
        	}else if(vBtnNm == "btnDelJobTycoSeCd"){
        		const nExtRow = this.dsJobSeCd2.extractRows("chk == " + 1);
        		this.dsJobSeCd2.deleteMultiRows(nExtRow);
        		var inData = "dsJobSeCd=dsJobSeCd2:U";
        	}else if(vBtnNm == "btnDelTaskPrcsStepSeCd"){
        		const nExtRow = this.dsJobSeCd3.extractRows("chk == " + 1);
        		this.dsJobSeCd3.deleteMultiRows(nExtRow);
        		var inData = "dsJobSeCd=dsJobSeCd3:U";
        	}else if(vBtnNm == "btnDelJobPrcsPrgrsSeCd"){
        		const nExtRow = this.dsJobSeCd4.extractRows("chk == " + 1);
        		this.dsJobSeCd4.deleteMultiRows(nExtRow);
        		var inData = "dsJobSeCd=dsJobSeCd4:U";
        	}

        	this.fnSave(inData);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        this.dsJobSeCd1_onrowposchanged = function(obj,e)
        {
        	var vObjNm = obj.name;

        	if(vObjNm == "dsJobSeCd1"){
        		this.dsJobSeCd2.clearData();
        		this.dsJobSeCd3.clearData();
        		this.dsJobSeCd4.clearData();
        		var nRow = e.newrow;
        		var strSvcUrl   = "workFlow/workFlowPopList2.do";
        		var outData     = "dsJobSeCd2=dsJobSeCd";
        		var vJobSeCd = this.dsJobSeCd1.getColumn(nRow,"jobSeCd");
        		this.dsSearch.setColumn(0,"jobSeCd",vJobSeCd);
        		this.dsSearch.setColumn(0,"jobTycoSeCd","");
        		this.dsSearch.setColumn(0,"taskPrcsStepSeCd","");
        	}else if(vObjNm == "dsJobSeCd2"){
        		this.dsJobSeCd3.clearData();
        		this.dsJobSeCd4.clearData();
        		var nRow = e.newrow;
        		var nRow1 = this.dsJobSeCd1.rowposition;
        		var strSvcUrl   = "workFlow/workFlowPopList3.do";
        		var outData     = "dsJobSeCd3=dsJobSeCd";
        		var vJobSeCd = this.dsJobSeCd1.getColumn(nRow1,"jobSeCd");
        		var vJobTycoSeCd = this.dsJobSeCd2.getColumn(nRow,"jobTycoSeCd");
        		this.dsSearch.setColumn(0,"jobSeCd",vJobSeCd);
        		this.dsSearch.setColumn(0,"jobTycoSeCd",vJobTycoSeCd);
        		this.dsSearch.setColumn(0,"taskPrcsStepSeCd","");

        	}else if(vObjNm == "dsJobSeCd3"){
        		this.dsJobSeCd4.clearData();
        		var nRow = e.newrow;
        		var nRow1 = this.dsJobSeCd1.rowposition;
        		var nRow2 = this.dsJobSeCd2.rowposition;
        		var strSvcUrl   = "workFlow/workFlowPopList4.do";
        		var outData     = "dsJobSeCd4=dsJobSeCd";
        		var vJobSeCd = this.dsJobSeCd1.getColumn(nRow1,"jobSeCd");
        		var vJobTycoSeCd = this.dsJobSeCd2.getColumn(nRow2,"jobTycoSeCd");
        		var vTaskPrcsStepSeCd = this.dsJobSeCd3.getColumn(nRow,"taskPrcsStepSeCd");
        		this.dsSearch.setColumn(0,"jobSeCd",vJobSeCd);
        		this.dsSearch.setColumn(0,"jobTycoSeCd",vJobTycoSeCd);
        		this.dsSearch.setColumn(0,"taskPrcsStepSeCd",vTaskPrcsStepSeCd);
        	}

        	this.fnSearch(strSvcUrl, outData);
        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	var vBtnNm = obj.name;
        	if(vBtnNm == "btnDelJobSeCd"){
        		const nFindRow = this.dsJobSeCd1.findRow("chk", 1);
        		if (nFindRow == -1) {
        			this.gfnAlertMsg("msg", "선택된 정보가 존재하지 않습니다.", "");
        			return;
        		}
        	}else if(vBtnNm == "btnDelJobTycoSeCd"){
        		const nFindRow = this.dsJobSeCd2.findRow("chk", 1);
        		if (nFindRow == -1) {
        			this.gfnAlertMsg("msg", "선택된 정보가 존재하지 않습니다.", "");
        			return;
        		}
        	}else if(vBtnNm == "btnDelTaskPrcsStepSeCd"){
        		const nFindRow = this.dsJobSeCd3.findRow("chk", 1);
        		if (nFindRow == -1) {
        			this.gfnAlertMsg("msg", "선택된 정보가 존재하지 않습니다.", "");
        			return;
        		}
        	}else if(vBtnNm == "btnDelJobPrcsPrgrsSeCd"){
        		const nFindRow = this.dsJobSeCd4.findRow("chk", 1);
        		if (nFindRow == -1) {
        			this.gfnAlertMsg("msg", "선택된 정보가 존재하지 않습니다.", "");
        			return;
        		}
        	}


        	if(vBtnNm == "btnDelJobPrcsPrgrsSeCd"){
        		var vMsg = "삭제하시겠습니까?";
        	}else{
        		var vMsg = "하위항목 전체 삭제 됩니다.\n 삭제 하시겠습니까?";
        	}

        	this.gfnConfirmMsg("delete_confirm", vMsg,
        				function(id, val) {
        					var oRtn = JSON.parse(val);
        						if(oRtn.result == "Y") {
        							this.fnDelete(vBtnNm);
        						}
        		                    },["확인", "취소"], ["Y", "N"]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.sta00_00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnDelTaskPrcsStepSeCd.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.sta00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta00_00_00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnDelJobSeCd.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btnDelJobTycoSeCd.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btnDelJobPrcsPrgrsSeCd.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.dsJobSeCd1.addEventHandler("onrowposchanged",this.dsJobSeCd1_onrowposchanged,this);
            this.dsJobSeCd2.addEventHandler("onrowposchanged",this.dsJobSeCd1_onrowposchanged,this);
            this.dsJobSeCd3.addEventHandler("onrowposchanged",this.dsJobSeCd1_onrowposchanged,this);
            this.dsJobSeCd4.addEventHandler("onrowposchanged",this.dsJobSeCd1_onrowposchanged,this);
        };
        this.loadIncludeScript("workFlowPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
