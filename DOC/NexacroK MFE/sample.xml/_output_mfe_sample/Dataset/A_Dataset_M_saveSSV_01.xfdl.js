(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_saveSSV_01_v2");
            this.set_titletext("TA_Dataset_M_saveSSV_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colD","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "유동규","colA" : "1","colC" : "100","colD" : "투우"},{"colB" : "주인희","colA" : "1","colC" : "200","colD" : "비이"},{"colB" : "고준영","colA" : "2","colC" : "200","colD" : "소오"},{"colB" : "이정빈","colA" : "3","colC" : "300","colD" : "프트"},{"colA" : "4","colB" : "김선주","colC" : "400","colD" : "비이"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data2", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_M_saveSSV_478828_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","288","298","154",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","295","84",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"bind:colB\"/><Cell col=\"2\" text=\"colC\"/><Cell col=\"3\" text=\"colD\"/><Cell col=\"4\" text=\"ConstA\"/><Cell col=\"5\" text=\"ConstB\"/><Cell col=\"6\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell edittype=\"text\" subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"2\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colC\"/><Cell col=\"3\" edittype=\"text\" subsumtext=\"test\" text=\"bind:colD\"/><Cell col=\"4\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"5\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"6\" edittype=\"text\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","237","11","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","6","163","297","116",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_saveSSV_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_saveSSV_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_saveSSV_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset saveSSV Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.22  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.dataset1 = this.ds_data2;
        this.grid = this.Grid00;
        this.grid1 = this.Grid01;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset saveSSV Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		ssvData : "",			//saveSSV 저장 용
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['saveSSV'] = function(strID, strSaveType) {
        	var result = [];
        	var rtnsaveSSV;

        	if(strID == "생략" && strSaveType == "생략")
        		rtnsaveSSV = this.dataset.saveSSV();
        	else if(strSaveType == "생략")
        		rtnsaveSSV = this.dataset.saveSSV(strID);
        	else
        		rtnsaveSSV = this.dataset.saveSSV(strID, strSaveType);

        	rtnsaveSSV = nexacro.base64Encode(rtnsaveSSV);

        	tc1.userdata.ssvData = this.dataset.saveSSV(strID, strSaveType);

        	result.push(rtnsaveSSV);

        	return result;
        };

        tc1.task['loadSSV'] = function() {
        	this.dataset1.loadSSV(tc1.userdata.ssvData);
        	this.grid1.set_binddataset(this.dataset1);
        	this.grid1.createFormat();
        }

        tc1.task['rowcount'] = function() {
        	var result = [];
        	getRowCount = this.dataset1.rowcount;
        	result.push(getRowCount);

        	return result;
        }

        tc1.task['getCellText'] = function() {
        	var result = [];

        	for(var i=0; i<this.dataset1.rowcount; i++)
        		result.push(this.grid1.getCellText(i,0));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "saveSSV(strID, strSaveType) 수행",
        	autoTaskFlow : ["saveSSV", "loadSSV", "rowcount", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strID, ev : 리턴값(리턴값에 반각스페이스를 포함하고 있어 base64Encode로 변환 후 검증), rowcount, getCellText
        				{vc: [[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]], ev: ["RGF0YXNldDpkc19kYXRhMR5fQ29uc3RfH0NvbnN0QTpTVFJJTkcoMzApPUEfQ29uc3RCOlNUUklORygzMCk9Qh9Db25zdEM6U1RSSU5HKDMwKT1DHl9Sb3dUeXBlXx9jb2xBOlNUUklORygyNTYpH2NvbEI6U1RSSU5HKDI1NikfY29sQzpJTlQoMjU2KR9jb2xEOlNUUklORygyNTYpHk4f67OA6rK9H+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20Hk4fAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_EXCEPTION,"생략"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"n"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"N"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"normal"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"Normal"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"u"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20HkkfAx8DHwMfAx4e",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"U"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20HkkfAx8DHwMfAx4e",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"update"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20HkkfAx8DHwMfAx4e",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"Update"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20HkkfAx8DHwMfAx4e",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"a"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20HkkfAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"A"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20HkkfAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"all"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20HkkfAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"All"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20HkkfAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"v"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"V"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"view"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"View"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"N"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzIf6rOg7KSA7JiBHzIwMB/shozsmKQeTh8zH+ydtOygleu5iB8zMDAf7ZSE7Yq4Hk4fNB/quYDshKDso7wfNDAwH+u5hOydtB5OHwMfAx8DHwMeHg==",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"U"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20HkkfAx8DHwMfAx4e",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"A"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5EHzEf7Jyg64+Z6recHzEwMB/tiKzsmrAeVR/rs4Dqsr0f7KO87J247Z2sHzIwMB/ruYTsnbQeTx8xH+yjvOyduO2drB8yMDAf67mE7J20Hk4fMh/qs6DspIDsmIEfMjAwH+yGjOyYpB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20HkkfAx8DHwMfAx4e",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"V"]], ev: ["RGF0YXNldDpEYXRhc2V0MDIeX0NvbnN0Xx9Db25zdEE6U1RSSU5HKDMwKT1BH0NvbnN0QjpTVFJJTkcoMzApPUIfQ29uc3RDOlNUUklORygzMCk9Qx5fUm93VHlwZV8fY29sQTpTVFJJTkcoMjU2KR9jb2xCOlNUUklORygyNTYpH2NvbEM6SU5UKDI1NikfY29sRDpTVFJJTkcoMjU2KR5OH+uzgOqyvR/so7zsnbjtnawfMjAwH+u5hOydtB5OHzMf7J207KCV67mIHzMwMB/tlITtirgeTh80H+q5gOyEoOyjvB80MDAf67mE7J20Hk4fAx8DHwMfAx4e",4,"변경",3,4,""]},

        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 0)
        		{
        			//insert
        			this.dataset.addRow();
        			//update
        			this.dataset.setColumn(1,0,"변경");
        			//delete
        			this.dataset.deleteRow(0);
        		}
        		if(vdAdt.getIndexVC() == 18)
        		{
        			this.dataset.set_filterstr("colA != 2");
        		}
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strID = vdAdt.getValue(0);
        		var strSaveType = vdAdt.getValue(1);
        		var rtn;

        		switch(taskName) {
        		case "saveSSV":
        			rtn = tc1.task['saveSSV'].call(this, strID, strSaveType);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "loadSSV":
        			tc1.task['loadSSV'].call(this);
        			break;
        		case "rowcount":
        			rtn = tc1.task['rowcount'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			rtn = tc1.task['getCellText'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue, expectedValue) {
        		var chk = tc1.checker['equal'].call(this, resultValue, expectedValue);
        		return chk;
        	},
        	teardown: function () {
        		tc1.userdata.result = [];
        	}
        };

        /***********************************************************************
        * 03 : 생성된 Test Case
        ***********************************************************************/
        var tcInfo = {
        	// tcInfo.tcList : 모든 browser에서 실행할 tc 목록
        	tcList : [tc1],
        	// tcInfo.deny : 특정 browser에서 제외할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	deny : [
        			  //{ tc: tc3, browser: ['IE'] },
        	],
        	// tcInfo.allow : 특정 browser에서 추가할 tc 목록(browser : 'nexacro'/'IE'/'Chrome'/'Gecko'/'Safari')
        	allow : [
        			 //{ tc: tc2, browser: ['nexacro'] },
        	],
        	// tcInfo.adjustTcInfo : browser 버전 및 os 환경에 따른 실행 여부를 결정할 tc 목록
           adjustTcInfo : function() {
        	}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.TA_Dataset_M_saveSSV_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
          	//LogViewer 미팝업용
        	var runner = tapi.getRunner();

        	if (runner.isTestMode() == false){
         		var logger = new tapi.ConsoleLogger();
         		runner.setLogger(logger);
        	}
        };

        /***********************************************************************
        * 05 : Runner API, Application Runner 띄우지 않고 실행하기 위함
        ***********************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	// Runner 획득
           var runner = tapi.getRunner();
           //------------ 선택 작업 Begin ------------------------------
           // 메시지를 log로 기록할 수준 지정
        	// log level = [ FATAL | ERROR | WARN | INFO | DEBUG | TRACE | TRACE2 ]
        	//runner.setLogLevel(tapi. INFO);
           //------------ 선택 작업 End ------------------------------
           runner.executeTest();
        };

        /***********************************************************************
        * 06 : 이벤트 선언부
        ***********************************************************************/

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_saveSSV_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_saveSSV_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
