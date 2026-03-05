(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTransaction");
            this.set_titletext("트랜잭션 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "undefined","size" : "0"},{"id" : "SAMPLE_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_DEPT_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_DESC","type" : "string","size" : "32"},{"id" : "SAMPLE_FILE_ID","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("트랜잭션");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","149","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Transaction");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","144",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","40","67%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","40","240","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","24","24","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","74","24","200","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","314","40","240","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","Edit00_00:24","24","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","62","24","200","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("[@staSearchTitle01]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","744","24","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","0","divSearch:24",null,"610","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Detailbox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","40","divSearch:58","342","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","40","staTitle:24",null,"482","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filterNew,sort");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"290\"/><Column size=\"217\"/><Column size=\"229\"/><Column size=\"414\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"59\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SAMPLE_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SAMPLE_DESC\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
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
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_flexmainaxisalign("start");
                p.Panel02.move("40","40","67%","48",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexgrow("0");
                p.Panel00.move("40","40","240","48",null,null);

                p.staSearchTitle00.set_taborder("2");
                p.staSearchTitle00.set_text("아이디");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.move("24","24","74","48",null,null);

                p.Edit00_00.set_taborder("3");
                p.Edit00_00.set_accessibilitylabel("[@staSearchTitle00]");
                p.Edit00_00.move("74","24","200","48",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_flexgrow("0");
                p.Panel01.move("314","40","240","48",null,null);

                p.staSearchTitle01.set_taborder("5");
                p.staSearchTitle01.set_text("성명");
                p.staSearchTitle01.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle01.move("Edit00_00:24","24","74","48",null,null);

                p.Edit00.set_taborder("6");
                p.Edit00.set_accessibilitylabel("[@staSearchTitle01]");
                p.Edit00.move("62","24","200","48",null,null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.move("744","24","120","48",null,null);
            	}
            );
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_flexcrossaxisalign("center");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSearchTitle01.move("24","96","74","48",null,null);

                p.Edit00.move("70.75","96","100%","48",null,null);

                p.Panel00.set_flexgrow("1");

                p.Panel01.set_flexgrow("1");

                p.Edit00_00.move("74","24","100%","48",null,null);

                p.Panel02.move("40","40","400","112",null,null);

                p.btnSearch.set_flexgrow("1");
                p.btnSearch.move("744","24","120","48",null,null);
            	}
            );
            obj.set_spacing("24px 24px 24px 24px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_flexcrossaxisalign("center");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,950,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("트랜잭션 샘플");

                p.staH2.set_taborder("0");
                p.staH2.set_text("트랜잭션");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","140","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Transaction");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","149","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.move("0","144",null,"128","0",null);

                p.Static00.set_taborder("4");
                p.Static00.set_cssclass("sta_WF_Detailbox");
                p.Static00.set_text("");
                p.Static00.move("0","divSearch:24",null,"610","0",null);

                p.staTitle.set_taborder("5");
                p.staTitle.set_text("사용자 정보 조회");
                p.staTitle.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle.set_accessibilityrole("heading4");
                p.staTitle.move("40","divSearch:58","342","36",null,null);

                p.grdList.set_taborder("6");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autoenter("select");
                p.grdList.set_cellsizingtype("col");
                p.grdList.getSetter("uFunction").set("filterNew,sort");
                p.grdList.set_autofittype("col");
                p.grdList.move("40","staTitle:24",null,"482","40",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1034,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.set_text("");
                p.divSearch.move("0","144",null,"224","0",null);

                p.staTitle.move("23","426","342","36",null,null);

                p.grdList.move("23","staTitle:24",null,"494","23",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Edit00","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTransaction.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleTransaction.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/25
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/25			TOBESOFT					최초생성
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

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if( nRow<0 ) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnValidation()) {
        		// 서버 중복 체크
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        //조회
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "searchSampleList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        //저장
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
        			this.gfnClearUserFunction(this.grdList);
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
        	if(sMsgId=="save"){
        		if(sRtn){
        			this.fnSave();
        		}else{
        			return;
        		}
        	}else if( sMsgId=="validId"){
        		this.dsList.setColumn(this.dsList.rowposition, "SAMPLE_ID", "");
        		this.grdList.setCellPos(0);
        		this.grdList.showEditor(true);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체크
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "SAMPLE_ID"	   , "아이디"	, "required");
        	this.gfnSetValidation(this.dsList, "SAMPLE_NM"  , "이름"		, "required");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdList, "U") == false) return false;

        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼클릭
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //ID중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="SAMPLE_ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsList.findRow("SAMPLE_ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 아이디"],"validId","fnMsgCallback");
        			return;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("sampleTransaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
