(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("test");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "chk","type" : "INT","size" : "256"}]},"Rows" : [{"Column0" : "1","Column1" : "가나다","Column2" : "ABC","chk" : "0"},{"Column0" : "2","Column1" : "라마사","Column2" : "DEF","chk" : "1"},{"Column0" : "3","Column1" : "아자차","Column2" : "GHI","chk" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "0","Column1" : "한글"},{"Column0" : "1","Column1" : "한글한글"},{"Column0" : "2","Column1" : "한글한글한글한글"},{"Column0" : "3","Column1" : "한글한글한글한글한글한글한글한글"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05_00","0","0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("테스트");
            obj.set_cssclass("sta_WF_H2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Static05_00:48",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("실행 후 결과 표시");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","0","150","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("this.gfnRound(\"10.56\", 1)");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","408","150","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","508","158","38","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("==>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR00","548","150","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","0","214","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("this.gfnGetDate(\"date\")");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnGetDate(\"date\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","408","214","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","508","214","38","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("==>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR01","548","214","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","0","278","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("this.gfnGetDate(\"day\", true)");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnGetDate(\"day\", true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","408","278","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","508","278","38","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("==>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR02","548","278","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt03","0","342","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("this.gfnGetDate(\"time\", true)");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnGetDate(\"time\", true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","408","342","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","508","342","38","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("==>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR03","548","342","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt04","0","406","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("this.gfnGetDate(\"milli\", true)");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnGetDate(\"milli\", true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","408","406","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","508","406","38","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("==>");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR04","548","406","260","48",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_text("this.gfnRound(\"10.56\", 1)");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","508","158","378","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtR00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","150","490","48",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00\"/><PanelItem id=\"PanelItem01\" componentid=\"btn00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static00:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","508","214","378","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtR01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","214","490","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt01\"/><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","0","278","490","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt02\"/><PanelItem id=\"PanelItem01\" componentid=\"btn02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","508","278","378","48",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtR02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel02:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","0","342","490","48",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt03\"/><PanelItem id=\"PanelItem01\" componentid=\"btn03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","508","342","378","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"edtR03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel03:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","0","406","496","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt04\"/><PanelItem id=\"PanelItem01\" componentid=\"btn04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","508","406","384","48",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"edtR04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Panel04:16",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","Panel05:48","200","43",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("bind 동적 추가");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Edit("edt05","0","Static06:16","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddBind","edt05:8","Static06:16","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("bind 추가");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","edt05:48","200","43",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("콤보 사이즈 계산");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","0","Static06_00:16","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_popupsize("500 500");
            obj.set_text("한글");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","cbo00:8","Static06_00:16","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("btn05");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("btnVar","0","cbo00:48","358","48",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("form에 var 로 선언된 변수의 문제점");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	test.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/30
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fv_sVal = 'a';
        var sVal = 'a';

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
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
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

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.general", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.general", ["추가버튼2입니다."]);
        	return;
        };
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
        this.btn_onclick = function(obj,e)
        {
        	var sName = obj.id.substr(3,2);
        	var sVal = this.components["edt"+sName].value;
        	var sFunc = 'return ' + sVal + ';';
        	var func = new Function(sFunc);
        	var rtnVal = func.call(this);

        	this.components["edtR"+sName].set_value("");
        	this.components["edtR"+sName].set_value(rtnVal);
        };

        this.edt_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sName = obj.id.substr(3,2);
        		var sVal = this.components["edt"+sName].value;
        		var sFunc = 'return ' + sVal + ';';
        		var func = new Function(sFunc);
        		var rtnVal = func.call(this);

        		this.components["edtR"+sName].set_value("");
        		this.components["edtR"+sName].set_value(rtnVal);
        	}
        };

        this.btnVar_onclick = function(obj,e)
        {
        	trace("this.fv_sVal : " + this.fv_sVal);	// a

        	trace("이전 sVal : " + sVal);	// undefined 로 function load시 선언된 지역변수로 초기화 됨
        	var sVal = 'b';
        	trace("이후 sVal : " + sVal);	// b
        };

        this.btnAddBind_onclick = function(obj,e)
        {
        	var objBind = new nexacro.BindItem;
        	objBind.init("item01", "edt05", "value", "dsList", "Column1");
        	this.addChild("item01", objBind);
        	objBind.bind();
        };

        this.btn05_onclick = function(obj,e)
        {
        	// 해당 콤보 사이즈 계산
        	var arrLength = this.gfnGetTextSize(this.cbo00.text);
        	var nMaxLength = 150;
        	if (arrLength[0] > nMaxLength) nMaxLength = arrLength[0]+35;
        	this.cbo00.set_width(nMaxLength);
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edt00.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.btn00.addEventHandler("onclick",this.btn_onclick,this);
            this.edt01.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.btn01.addEventHandler("onclick",this.btn_onclick,this);
            this.edt02.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.btn02.addEventHandler("onclick",this.btn_onclick,this);
            this.edt03.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.btn03.addEventHandler("onclick",this.btn_onclick,this);
            this.edt04.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.btn04.addEventHandler("onclick",this.btn_onclick,this);
            this.btnAddBind.addEventHandler("onclick",this.btnAddBind_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btnVar.addEventHandler("onclick",this.btnVar_onclick,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
