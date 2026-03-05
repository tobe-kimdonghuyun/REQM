(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleExcel");
            this.set_titletext("엑셀  EXPORT/IMPORT");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","229","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Excel import/export");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","100",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","40","372","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","12","214","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtId\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtId","74","12","140","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","214","12","202","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtName\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","214","12","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","276","12","140","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("[@staSearchTitle01]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","728","40","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","divSearch:24",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"divCmmnBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","140","342","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"131","491","48","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_flexgrow("0");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","339","0","162","48",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.set_flexgrow("0");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate","188","0","168","48",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("업로드템플릿다운");
            obj.set_cssclass("btn_WF_TempSave");
            obj.set_flexgrow("0");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","78","0","145","48",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.set_flexgrow("0");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdList","0","320",null,"416","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" text=\"bind:SAMPLE_NM\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:SAMPLE_DESC\" edittype=\"text\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("0");
                p.Panel02.set_horizontalgap("24");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("16");
                p.Panel02.move("40","40","372","48",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_flexgrow("0");
                p.Panel01.move("0","12","214","48",null,null);

                p.staSearchTitle00.set_taborder("2");
                p.staSearchTitle00.set_text("아이디");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.move("0","12","74","48",null,null);

                p.edtId.set_taborder("3");
                p.edtId.set_accessibilitylabel("[@staSearchTitle00]");
                p.edtId.move("74","12","140","48",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_flexgrow("0");
                p.Panel00.move("214","12","202","48",null,null);

                p.staSearchTitle01.set_taborder("5");
                p.staSearchTitle01.set_text("성명");
                p.staSearchTitle01.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle01.move("214","12","74","48",null,null);

                p.edtName.set_taborder("6");
                p.edtName.set_accessibilitylabel("[@staSearchTitle01]");
                p.edtName.move("276","12","140","48",null,null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.set_flexgrow("0");
                p.btnSearch.move("728","40","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSearch.set_flexgrow("1");

                p.Panel01.set_flexgrow("1");

                p.Panel00.set_flexgrow("1");

                p.edtId.set_flexgrow("1");
                p.edtId.move("74","12","200","48",null,null);

                p.edtName.set_flexgrow("1");
                p.edtName.move("276","12","200","48",null,null);

                p.Panel02.move("40","40","400","112",null,null);

                p.staSearchTitle01.move("214","12","74","48",null,null);

                p.staSearchTitle00.move("0","12","74","48",null,null);
            	}
            );
            obj.set_spacing("24px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnExcelDown.set_taborder("0");
                p.btnExcelDown.set_text("엑셀다운로드");
                p.btnExcelDown.set_cssclass("btn_WF_ExcelDown");
                p.btnExcelDown.set_flexgrow("0");
                p.btnExcelDown.move("339","0","162","48",null,null);

                p.btnExcelTemplate.set_taborder("1");
                p.btnExcelTemplate.set_text("업로드템플릿다운");
                p.btnExcelTemplate.set_cssclass("btn_WF_TempSave");
                p.btnExcelTemplate.set_flexgrow("0");
                p.btnExcelTemplate.move("188","0","168","48",null,null);

                p.btnExcelUp.set_taborder("2");
                p.btnExcelUp.set_text("엑셀업로드");
                p.btnExcelUp.set_cssclass("btn_WF_ExcelUp");
                p.btnExcelUp.set_flexgrow("0");
                p.btnExcelUp.move("78","0","145","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("end");
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCmmnBtn.form
            obj = new Layout("Layout0","",0,0,this.divCmmnBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnExcelUp.set_flexgrow("1");

                p.btnExcelTemplate.set_flexgrow("1");

                p.btnExcelDown.set_flexgrow("1");
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            this.divCmmnBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,736,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("엑셀  EXPORT/IMPORT");

                p.Static00.set_taborder("0");
                p.Static00.set_text("엑셀");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","70","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Excel import/export");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","229","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.move("0","100",null,"128","0",null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("0","divSearch:24",null,"48","0",null);

                p.staTitle.set_taborder("5");
                p.staTitle.set_text("사용자 정보");
                p.staTitle.set_cssclass("sta_WF_H4_pc");
                p.staTitle.set_flexgrow("1");
                p.staTitle.set_accessibilityrole("heading4");
                p.staTitle.move("0","140","342","48",null,null);

                p.divCmmnBtn.set_taborder("6");
                p.divCmmnBtn.set_text("");
                p.divCmmnBtn.set_flexgrow("0");
                p.divCmmnBtn.set_accessibilityenable("false");
                p.divCmmnBtn.move(null,"131","491","48","0",null);

                p.grdList.set_taborder("7");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_tabstop("false");
                p.grdList.move("0","320",null,"416","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small,Desktop_screen",480,940,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","104",null,"224","0",null);

                p.Panel00.move("0","divSearch:24",null,"160","0",null);

                p.divCmmnBtn.set_flexgrow("1");
                p.divCmmnBtn.set_fittocontents("height");
                p.divCmmnBtn.move(null,"131","480","104","0",null);

                p.grdList.move("0","Panel00:20",null,"408","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtId","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtName","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleExcel.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleExcel.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/30			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj,e); //필수함수

        	// 공통버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();
        };

        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	var nDataType = this.dsList.getRowType(nRow);
        	if( nDataType == 2){
        		//추가된 로우는 그냥 삭제
        		this.dsList.deleteRow(nRow);
        	}else{
        		this.gfnAlert("confirm.before.delete");//삭제하시겠습니까?
        	}
        };

        this.cfnSave = function ()
        {
        	if(!this.gfnDsIsUpdated(this.dsList)){
        		this.gfnAlert("msg.save.nochange");//변경된 데이터가 없습니다.
        		return;
        	}

        	var rtnValid = this.fnValidation(this.dsList);
        	if(rtnValid){
        		this.gfnAlert("confirm.save");//저장하시겠습니까?
        	}
        };

        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	this.fnSearchCondInit();
        	this.fnInit();
        };

        this.cfnExcelDown = function ()
        {
        	var sSubTitle = "아이디 : ";
        	if(this.gfnIsNull(this.divSearch.form.edtId.value)) sSubTitle += "전체 ";
        	else  sSubTitle += this.divSearch.form.edtId.value +" ";
        	sSubTitle += " 이름 : ";
        	if(this.gfnIsNull(this.divSearch.form.edtName.value)) sSubTitle += "전체 ";
        	else  sSubTitle += this.divSearch.form.edtName.value +" ";

        	this.gfnExcelExport(this.grdList, "sampleExcel", "sampleExcelExportImport", "EXCEL2007","",sSubTitle, true, "");
        };

        this.cfnExcelUp = function ()
        {
        	this.gfnExcelImport("dsList", "sampleExcel", "A4", "fnExcelImportCallback", "sampleExcel", "EXCEL2007", "A3:D3", this.grdList);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "searchSampleList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        this.fnSave = function ()
        {
        	var strSvcId 	= "saveSample";
        	var strSvcUrl 	= "saveSample.do";
        	var inData 		= "inDs=dsList:U";
        	var outData 	= "";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "searchSampleList":
        			break;
        		case "saveSample":
        			this.fnSearch();
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if(sMsgId=="confirm.before.save"){
        		if(sRtn){
        			this.fnSave();
        		}else{
        			return;
        		}
        	}else if(sMsgId=="confirm.before.delete"){
        		if(sRtn){
        			this.dsList.deleteRow(this.dsList.rowposition);
        		}else{
        			return;
        		}
        	}
        };

        //excel import callback
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	if(sImportId == "sampleExcel"){
        		//import시 전체 데이터 normal로 넘어오므로 status update및 서버단에서
        		//mergeinto로 처리하기 위한 임의 데이터 삽입
        		this.dsList.addColumn("_STATUS_","STRING");
        		for( var i=0; i<this.dsList.getRowCount(); i++){
        			this.dsList.setColumn(i, "_STATUS_", "EXCEL");
        		}
        		this.cfnSave();
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsList.clearData();
        };

        this.fnSearchCondInit = function ()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        };

        this.fnValidation = function ()
        {
        	//TODO..
        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 조회 버튼 클릭
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 조회 트랜잭션 호출
        	this.cfnSearch();
        };

        /**
         * @description 엑셀 업로드 버튼 클릭
        */
        this.divCmmnBtn_btnExcelUp_onclick = function(obj,e)
        {
        	// Excel Import 공통함수 호출
        	this.gfnExcelImport("dsList", "sampleExcel", "A4", "fnExcelImportCallback", "sampleExcel", "EXCEL2007", "A3:D3", this.grdList);
        };

        /**
         * @description 엑셀 다운로드 버튼 클릭
        */
        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle.text + " 리스트";

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, "sampleExcel", "sampleExcelExportImport", "EXCEL2007","",sSubTitle, true, "");
        };

        /**
         * @description 업로드 템플릿 다운로드 버튼 클릭
        */
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "엑셀샘플_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtn_btnExcelTemplate_onclick,this);
            this.divCmmnBtn.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
        };
        this.loadIncludeScript("sampleExcel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
