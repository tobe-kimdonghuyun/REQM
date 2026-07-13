(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_saveXML_01_v2");
            this.set_titletext("TA_Dataset_M_saveXML_01_v2");
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
            obj.set_text("[Dataset_M_saveJSON_478828_01]");
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

            obj = new nexacro.TextArea("txt_result","8","380","298","154",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","61","645","149",null,null,null,null,null,null,this);
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

            obj = new nexacro.Grid("Grid01","5","240","297","116",null,null,null,null,null,null,this);
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
        this.addIncludeScript("A_Dataset_M_saveJSON_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_saveJSON_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_saveJSON_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset saveJSON Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2021.07.13  함경곤   최초 작성
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
        	description: "Dataset saveXML Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		result : [],			//task 리턴값
        		jsonData : "",			//saveXML 저장 용
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

        tc1.task['saveJSON'] = function(strID, strSaveType) {
        	var result = [];
        	var rtnsaveJSON;
        	if (strSaveType == "addconstcolumn")
        		this.dataset.addConstColumn("ConstD",undefined,"STRING",45);


        	if(strID == "생략" && strSaveType == "생략")
        		rtnsaveJSON = this.dataset.saveJSON();
        	else if(strSaveType == "생략")
        		rtnsaveJSON = this.dataset.saveJSON(strID);
        	else
        		rtnsaveJSON = this.dataset.saveJSON(strID, strSaveType);
        	//if (strSaveType == "addconstcolumn")
        	//	trace(rtnsaveJSON);
        	rtnsaveJSON = nexacro.base64Encode(rtnsaveJSON);

        	tc1.userdata.jsonData = this.dataset.saveJSON(strID, strSaveType);

        	result.push(rtnsaveJSON);

        	return result;
        };

        tc1.task['loadJSON'] = function() {
        	this.dataset1.loadJSON(tc1.userdata.jsonData);
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
        	description: "saveJSON(strID, strSaveType) 수행",
        	autoTaskFlow : ["saveJSON", "loadJSON", "rowcount", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strID, ev : 리턴값(리턴값에 반각스페이스를 포함하고 있어 base64Encode로 변환 후 검증), rowcount, getCellText
        				{vc: [[tapi.VBT_EXCEPTION,"생략"],[tapi.VBT_EXCEPTION,"생략"]], ev: ["ewoJImlkIjogImRzX2RhdGExIiwKCSJDb2x1bW5JbmZvIiA6Cgl7CgkJIkNvbnN0Q29sdW1uIjoKCQlbCgkJCXsiaWQiOiJDb25zdEEiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkEifSwKCQkJeyJpZCI6IkNvbnN0QiIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQiJ9LAoJCQl7ImlkIjoiQ29uc3RDIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJDIn0KCQldLAoJCSJDb2x1bW4iOgoJCVsKCQkJeyAiaWQiOiJjb2xBIiwgInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjI1NiIgfSwKCQkJeyAiaWQiOiJjb2xCIiwgInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjI1NiIgfSwKCQkJeyAiaWQiOiJjb2xDIiwgInR5cGUiOiJJTlQiLCAic2l6ZSI6IjI1NiIgfSwKCQkJeyAiaWQiOiJjb2xEIiwgInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjI1NiIgfQoJCV0KCX0sCgkiUm93cyI6CglbCgkJewoJCSAiY29sQSI6IuuzgOqyvSIsICJjb2xCIjoi7KO87J247Z2sIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6Iuu5hOydtCIKCQl9LAoJCXsKCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCSAiY29sQSI6IjMiLCAiY29sQiI6IuydtOygleu5iCIsICJjb2xDIjoiMzAwIiwgImNvbEQiOiLtlITtirgiCgkJfSwKCQl7CgkJICJjb2xBIjoiNCIsICJjb2xCIjoi6rmA7ISg7KO8IiwgImNvbEMiOiI0MDAiLCAiY29sRCI6Iuu5hOydtCIKCQl9LAoJCXsKCQkKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_EXCEPTION,"생략"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"n"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"N"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"normal"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"Normal"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"u"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"U"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"update"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"Update"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"a"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"A"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"all"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"All"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"v"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"V"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"view"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"View"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"N"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMiIsICJjb2xCIjoi6rOg7KSA7JiBIiwgImNvbEMiOiIyMDAiLCAiY29sRCI6IuyGjOyYpCIKCQl9LAoJCXsKCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCSAiY29sQSI6IjQiLCAiY29sQiI6Iuq5gOyEoOyjvCIsICJjb2xDIjoiNDAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCgkJfQoJXQp9",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"U"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",2,"변경",""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"A"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkJIl9Sb3dUeXBlXyI6IkQiLCAiY29sQSI6IjEiLCAiY29sQiI6IuycoOuPmeq3nCIsICJjb2xDIjoiMTAwIiwgImNvbEQiOiLtiKzsmrAiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJVIiwgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJCSJfUm93VHlwZV8iOiJPIiwgImNvbEEiOiIxIiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkgImNvbEEiOiIyIiwgImNvbEIiOiLqs6DspIDsmIEiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi7IaM7JikIgoJCX0sCgkJewoJCQkgImNvbEEiOiIzIiwgImNvbEIiOiLsnbTsoJXruYgiLCAiY29sQyI6IjMwMCIsICJjb2xEIjoi7ZSE7Yq4IgoJCX0sCgkJewoJCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQkiX1Jvd1R5cGVfIjoiSSIKCQl9CgldCn0=",5,"변경",2,3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"V"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9CgkJXSwKCQkiQ29sdW1uIjoKCQlbCgkJCXsgImlkIjoiY29sQSIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQiIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sQyIsICJ0eXBlIjoiSU5UIiwgInNpemUiOiIyNTYiIH0sCgkJCXsgImlkIjoiY29sRCIsICJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIyNTYiIH0KCQldCgl9LAoJIlJvd3MiOgoJWwoJCXsKCQkgImNvbEEiOiLrs4Dqsr0iLCAiY29sQiI6IuyjvOyduO2drCIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLruYTsnbQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMyIsICJjb2xCIjoi7J207KCV67mIIiwgImNvbEMiOiIzMDAiLCAiY29sRCI6Iu2UhO2KuCIKCQl9LAoJCXsKCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQoJCX0KCV0KfQ==",4,"변경",3,4,""]},
        				{vc: [[tapi.VBT_NORMAL,"Dataset02"],[tapi.VBT_NORMAL,"addconstcolumn"]], ev: ["ewoJImlkIjogIkRhdGFzZXQwMiIsCgkiQ29sdW1uSW5mbyIgOgoJewoJCSJDb25zdENvbHVtbiI6CgkJWwoJCQl7ImlkIjoiQ29uc3RBIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiMzAiLCAidmFsdWUiOiJBIn0sCgkJCXsiaWQiOiJDb25zdEIiLCJ0eXBlIjoiU1RSSU5HIiwgInNpemUiOiIzMCIsICJ2YWx1ZSI6IkIifSwKCQkJeyJpZCI6IkNvbnN0QyIsInR5cGUiOiJTVFJJTkciLCAic2l6ZSI6IjMwIiwgInZhbHVlIjoiQyJ9LAoJCQl7ImlkIjoiQ29uc3REIiwidHlwZSI6IlNUUklORyIsICJzaXplIjoiNDUifQoJCV0sCgkJIkNvbHVtbiI6CgkJWwoJCQl7ICJpZCI6ImNvbEEiLCAidHlwZSI6IlNUUklORyIsICJzaXplIjoiMjU2IiB9LAoJCQl7ICJpZCI6ImNvbEIiLCAidHlwZSI6IlNUUklORyIsICJzaXplIjoiMjU2IiB9LAoJCQl7ICJpZCI6ImNvbEMiLCAidHlwZSI6IklOVCIsICJzaXplIjoiMjU2IiB9LAoJCQl7ICJpZCI6ImNvbEQiLCAidHlwZSI6IlNUUklORyIsICJzaXplIjoiMjU2IiB9CgkJXQoJfSwKCSJSb3dzIjoKCVsKCQl7CgkJICJjb2xBIjoi67OA6rK9IiwgImNvbEIiOiLso7zsnbjtnawiLCAiY29sQyI6IjIwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCSAiY29sQSI6IjIiLCAiY29sQiI6IuqzoOykgOyYgSIsICJjb2xDIjoiMjAwIiwgImNvbEQiOiLshozsmKQiCgkJfSwKCQl7CgkJICJjb2xBIjoiMyIsICJjb2xCIjoi7J207KCV67mIIiwgImNvbEMiOiIzMDAiLCAiY29sRCI6Iu2UhO2KuCIKCQl9LAoJCXsKCQkgImNvbEEiOiI0IiwgImNvbEIiOiLquYDshKDso7wiLCAiY29sQyI6IjQwMCIsICJjb2xEIjoi67mE7J20IgoJCX0sCgkJewoJCQoJCX0KCV0KfQ==",5,"변경",2,3,4,""]},
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
        		case "saveJSON":
        			rtn = tc1.task['saveJSON'].call(this, strID, strSaveType);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "loadJSON":
        			tc1.task['loadJSON'].call(this);
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
        this.TA_Dataset_M_saveXML_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_saveXML_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_saveJSON_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
