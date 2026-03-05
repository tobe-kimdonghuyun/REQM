(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "01","name" : "백설기"},{"code" : "02","name" : "백설기11"},{"code" : "03","name" : "백설기22"},{"code" : "04","name" : "백설기33"},{"code" : "05","name" : "백설기44"},{"code" : "06","name" : "백설기55"},{"code" : "07","name" : "백설기66"},{"code" : "08","name" : "백설기77"},{"code" : "09","name" : "백설기88"},{"code" : "10","name" : "백설기99"},{"code" : "11","name" : "백설기10"},{"code" : "12","name" : "백설기11"},{"code" : "13","name" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "01","name" : "백설기"},{"code" : "02","name" : "백설기11"},{"code" : "03","name" : "백설기22"},{"code" : "04","name" : "백설기33"},{"code" : "05","name" : "백설기44"},{"code" : "06","name" : "백설기55"},{"code" : "07","name" : "백설기66"},{"code" : "08","name" : "백설기77"},{"code" : "09","name" : "백설기88"},{"code" : "10","name" : "백설기99"},{"code" : "11","name" : "백설기10"},{"code" : "12","name" : "백설기11"},{"code" : "13","name" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "01","name" : "백설기"},{"code" : "02","name" : "백설기11"},{"code" : "03","name" : "백설기22"},{"code" : "04","name" : "백설기33"},{"code" : "05","name" : "백설기44"},{"code" : "06","name" : "백설기55"},{"code" : "07","name" : "백설기66"},{"code" : "08","name" : "백설기77"},{"code" : "09","name" : "백설기88"},{"code" : "10","name" : "백설기99"},{"code" : "11","name" : "백설기10"},{"code" : "12","name" : "백설기11"},{"code" : "13","name" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "01","name" : "백설기"},{"code" : "02","name" : "백설기11"},{"code" : "03","name" : "백설기22"},{"code" : "04","name" : "백설기33"},{"code" : "05","name" : "백설기44"},{"code" : "06","name" : "백설기55"},{"code" : "07","name" : "백설기66"},{"code" : "08","name" : "백설기77"},{"code" : "09","name" : "백설기88"},{"code" : "10","name" : "백설기99"},{"code" : "11","name" : "백설기10"},{"code" : "12","name" : "백설기11"},{"code" : "13","name" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "01","name" : "백설기"},{"code" : "02","name" : "백설기11"},{"code" : "03","name" : "백설기22"},{"code" : "04","name" : "백설기33"},{"code" : "05","name" : "백설기44"},{"code" : "06","name" : "백설기55"},{"code" : "07","name" : "백설기66"},{"code" : "08","name" : "백설기77"},{"code" : "09","name" : "백설기88"},{"code" : "10","name" : "백설기99"},{"code" : "11","name" : "백설기10"},{"code" : "12","name" : "백설기11"},{"code" : "13","name" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,"64","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_GUIDE_TitBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","150","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("멀티 콤보");
            obj.set_cssclass("sta_WF_H1_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","319","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","Div01:80",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("- 멀티콤보 사용 방법\n1. div를 생성한다.\n2. 생성한 div에 common::cmmMultiCombo.xfdl 을 연결한다.\n3. div에 user properties를 세팅한다.\n - uAll : 초기에 전체선택 여부 true/false ( default : false ) / 해당 프로퍼티 사용시 꼭 데이터 로딩 후 setDataset 진행\n - uAllDisplay : 전체 선택 시 보여질 Text  ( default : \"\")\n - uDisplayrowcount : 한번에 보여질 로우의 갯수 ( default : 10 )\n - uWidth : 콤보창의 width ( default : combo div 의 width)\n4. onload 이후/콤보데이터 로딩 이후  div내부 함수 setDataset()함수를 호출하여 innerdataset을 세팅한다.\n\n- 호출 할 수 있는 함수 \n - this.div.form.setRequired(); // 필수설정\n - this.div.form.setReadOnly();//리드온리설정\n - this.div.form.fnInit(); //멀티콤보 초기화\n - this.div.form.setValue(); //멀티콤보 value세팅\n - this.div.form.getValue(); //멀티콤보의 선택된 value가져오기\n - this.div.form.getText(); //멀티콤보의 선택된 value의 text 가져오기\n    ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","txaGuide:24","192","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1) 기본 멀티 콤보");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault","0","Static01:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("");
            obj.getSetter("uWidth").set("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault00","divMultiComboDefault:30","Static01:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("");
            obj.getSetter("uWidth").set("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault01","divMultiComboDefault00:30","Static01:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault02","divMultiComboDefault01:30","Static01:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("5");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboDefault03","divMultiComboDefault02:30","Static01:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("5");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("300");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDefaultMCboSetValue","Static01:16","txaGuide:20","111","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","divMultiComboDefault:40","305","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2) 데이터 조회 후 멀티 콤보");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboSrchData","0","Static01_00:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("");
            obj.getSetter("uWidth").set("");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboSrchData00","divMultiComboSrchData:30","Static01_00:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("");
            obj.getSetter("uWidth").set("");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboSrchData01","divMultiComboSrchData00:30","Static01_00:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboSrchData02","divMultiComboSrchData01:30","Static01_00:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("5");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMultiComboSrchData03","divMultiComboSrchData02:30","Static01_00:5","180","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div00");
            obj.set_url("common::cmmMultiCombo.xfdl");
            obj.getSetter("uAll").set("true");
            obj.getSetter("uDisplayrowcount").set("5");
            obj.getSetter("uAllDisplay").set("전체선택완료");
            obj.getSetter("uWidth").set("300");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","divMultiComboSrchData:40","290","43",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3) Callback Function ");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaRtn","0","Static01_00_00:5",null,null,"20","0",null,null,"180",null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","721","888","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divMultiComboDefault\"/><PanelItem id=\"PanelItem01\" componentid=\"divMultiComboDefault00\"/><PanelItem id=\"PanelItem02\" componentid=\"divMultiComboDefault01\"/><PanelItem id=\"PanelItem03\" componentid=\"divMultiComboDefault02\"/><PanelItem id=\"PanelItem04\" componentid=\"divMultiComboDefault03\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault
            obj = new Layout("default","",0,0,this.divMultiComboDefault.form,function(p){});
            this.divMultiComboDefault.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault00
            obj = new Layout("default","",0,0,this.divMultiComboDefault00.form,function(p){});
            this.divMultiComboDefault00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault01
            obj = new Layout("default","",0,0,this.divMultiComboDefault01.form,function(p){});
            this.divMultiComboDefault01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault02
            obj = new Layout("default","",0,0,this.divMultiComboDefault02.form,function(p){});
            this.divMultiComboDefault02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboDefault03
            obj = new Layout("default","",0,0,this.divMultiComboDefault03.form,function(p){});
            this.divMultiComboDefault03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboSrchData
            obj = new Layout("default","",0,0,this.divMultiComboSrchData.form,function(p){});
            this.divMultiComboSrchData.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboSrchData00
            obj = new Layout("default","",0,0,this.divMultiComboSrchData00.form,function(p){});
            this.divMultiComboSrchData00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboSrchData01
            obj = new Layout("default","",0,0,this.divMultiComboSrchData01.form,function(p){});
            this.divMultiComboSrchData01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboSrchData02
            obj = new Layout("default","",0,0,this.divMultiComboSrchData02.form,function(p){});
            this.divMultiComboSrchData02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultiComboSrchData03
            obj = new Layout("default","",0,0,this.divMultiComboSrchData03.form,function(p){});
            this.divMultiComboSrchData03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",888,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmMultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("sampleMultiCombo.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleMultiCombo.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/03			TOBESOFT					최초생성
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

        	// 데이터가 지정되어있는경우
        	// onload 에서 setDataset해도 무관
        	// 데이터를 조회해와야 할 경우 데이터조회 후  setData
        	this.divMultiComboDefault.form.setDataset(this.dsTest, "code", "name" ,"코드,값", "fnComboCallback");
        	this.divMultiComboDefault00.form.setDataset(this.dsTest00, "code", "name" ,"chk,코드,값", "fnComboCallback");
        	this.divMultiComboDefault01.form.setDataset(this.dsTest01, "code", "name" ,"chk,코드,이름", "fnComboCallback");
        	this.divMultiComboDefault02.form.setDataset(this.dsTest02, "code", "name" ,"chk,코드,이름", "fnComboCallback");
        	this.divMultiComboDefault03.form.setDataset(this.dsTest03, "code", "name" ,"chk,코드,이름", "fnComboCallback");

        	//data search
        	this.fnSearch()
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

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
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchSampleList":
        			this.fnSetMulticombo();
        			break;
        		default: break;
        	}
        };

        this.fnComboCallback = function (sDivId, sRtnValue, sRtnText)
        {
        	var oDiv = this.components[sDivId];
        	var sTxaValue = this.txaRtn.value;
        	if(this.gfnIsNull(sTxaValue)) sTxaValue ="";

        	var sRtnValue = "callback value : sDivId : " + sDivId + " | sRtnValue : " + sRtnValue + " | sRtnText :" +  sRtnText + "\n";
        		sRtnValue += "sDivId : " + sDivId + " | getValue : " + oDiv.form.getValue() + " | getText() : " + oDiv.form.getText()+ "\n";

        	this.txaRtn.set_value(sTxaValue+sRtnValue);
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetMulticombo = function ()
        {
        	this.dsList00.copyData(this.dsList);
        	this.dsList01.copyData(this.dsList);
        	this.dsList02.copyData(this.dsList);
        	this.dsList03.copyData(this.dsList);

        	//멀티콤보의 데이터셋을 조회해와야 할 경우 꼭 조회 후 setData
        	this.divMultiComboSrchData.form.setDataset(this.dsList, "SAMPLE_ID", "SAMPLE_NM" ,"아이디,이름", "fnComboCallback");
        	this.divMultiComboSrchData00.form.setDataset(this.dsList00, "SAMPLE_ID", "SAMPLE_NM" ,"chk,아이디,값", "fnComboCallback");
        	this.divMultiComboSrchData01.form.setDataset(this.dsList01, "SAMPLE_ID", "SAMPLE_NM" ,"chk,아이디,이름", "fnComboCallback");
        	this.divMultiComboSrchData02.form.setDataset(this.dsList02, "SAMPLE_ID", "SAMPLE_NM" ,"chk,아이디,이름", "fnComboCallback");
        	this.divMultiComboSrchData03.form.setDataset(this.dsList03, "SAMPLE_ID", "SAMPLE_NM" ,"chk,아이디,이름", "fnComboCallback");

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnDefaultMCboSetValue_onclick = function(obj,e)
        {
        	this.divMultiComboDefault.form.setValue("05");
        	this.divMultiComboDefault00.form.setValue("07,08");
        	this.divMultiComboDefault01.form.setValue("10,09");
        	this.divMultiComboDefault02.form.setValue("05,06");
        	this.divMultiComboDefault03.form.setValue("05,06");

        	this.divMultiComboSrchData.form.setValue("mjjeon");
        	this.divMultiComboSrchData00.form.setValue("joy8888,bsoojeong");
        	this.divMultiComboSrchData01.form.setValue("firstep,h2p76");
        	this.divMultiComboSrchData02.form.setValue("kimyk,jspark");
        	this.divMultiComboSrchData03.form.setValue("ryoung,skbaek");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.btnDefaultMCboSetValue.addEventHandler("onclick",this.btnDefaultMCboSetValue_onclick,this);
        };
        this.loadIncludeScript("sampleMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
