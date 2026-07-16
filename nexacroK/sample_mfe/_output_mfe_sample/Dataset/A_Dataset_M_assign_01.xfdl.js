(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_assign_01_v2");
            this.set_titletext("TA_Dataset_M_assign_01_v2");
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


            obj = new nexacro.Dataset("ds_data3", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "a"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "b"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "c"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"}]},"Rows" : [{"colA" : "1","colB" : "a"},{"colA" : "2","colB" : "b"},{"colA" : "3","colB" : "c"},{"colA" : "4","colB" : "d"},{"colA" : "5","colB" : "e"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data2", this);
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
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("[Dataset_M_assign_48115_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","336","298","106",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","280","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","82","151","86",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","10","248","81","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("objDataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_objDataset","94","245","98","27",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_value("ds_data3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_assign","196","245","108","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_text("assign()");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","164","82","140","84",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data3");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colA\"/><Cell col=\"1\" text=\"colB\"/><Cell col=\"2\" text=\"ConstA\"/><Cell col=\"3\" text=\"ConstB\"/><Cell col=\"4\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell subsumtext=\"test\" text=\"bind:colA\"/><Cell col=\"1\" subsumtext=\"test\" text=\"bind:colB\"/><Cell col=\"2\" subsumtext=\"test\" text=\"bind:ConstA\"/><Cell col=\"3\" subsumtext=\"test\" text=\"bind:ConstB\"/><Cell col=\"4\" subsumtext=\"test\" text=\"bind:ConstC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","26","59","81","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","194","59","81","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("objDataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_keystring","93","208","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("G:-colA");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt_filterstr","93","176","110","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_value("colA == \"1\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","10","211","94","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("keystring");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","10","179","86","21",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("filterstr");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_filterstr","217","176","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_filterstr","265","176","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_set_keystring","217","208","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_keystring","265","208","35","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","12","278","103","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("canrowposchange\r\nReturn Type :");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rd_return","124","279","109","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_rowcount("1");
            obj.set_taborder("22");
            var rd_return_innerdataset = new nexacro.NormalDataset("rd_return_innerdataset", obj);
            rd_return_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "true"},{"codecolumn" : "2","datacolumn" : "false"}]});
            obj.set_innerdataset(rd_return_innerdataset);
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get_rowposition","8","309","108","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_text("rowposition get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_reload","128","309","76","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_M_assign_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_assign_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_assign_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset assign Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.02.22  김형철   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset1 = this.ds_data1;
        this.dataset2 = this.ds_data2;
        this.dataset3 = this.ds_data3;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset assign Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		eventReturnValue : "", 	//canrowposchange 리턴값 설정
        		eventChkList1 : [],		//onrowsetchanged 확인용
        		eventChkList2 : [],		//canrowposchange 확인용
        		eventChkList3 : [],		//onrowposchanged 확인용
        		eventChkList4 : [],		//onvaluechanged 확인용
        		result : [],			//task 리턴값
        	},
        	//--------------  end  user defined section
        	initialize: function() {
        		this.dataset1.addEventHandler("onrowsetchanged", this.ds_data1_onrowsetchanged, this);
        		this.dataset1.addEventHandler("canrowposchange", this.ds_data1_canrowposchange, this);
        		this.dataset1.addEventHandler("onrowposchanged", this.ds_data1_onrowposchanged, this);
        		this.dataset1.addEventHandler("onvaluechanged", this.ds_data1_onvaluechanged, this);
        	},
        	checker : {},
        	validator : {},
        	task : {},
        	finalize : function() {
        	}
        };

        tc1.task['returnValue'] = function(bCanrowposchange) {

        	if(bCanrowposchange == true)
        		tc1.userdata.eventReturnValue = "true";
        	else if(bCanrowposchange == false)
        		tc1.userdata.eventReturnValue = "false";
        	else
        		tc1.userdata.eventReturnValue = "";
        };

        tc1.task['assign'] = function(objDataset) {
         	// 대기 상태 시작
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.beginWait(5000, tapi.CF_NEXTSTEP);

        	var result = [];

        	var rtnassign = this.dataset1.assign(objDataset);

        	this.grid.createFormat();

        	var getrowCount = this.dataset1.rowcount;
        	var getcolCount = this.dataset1.colcount;

        	result.push(rtnassign);
        	result.push(getrowCount);
        	result.push(getcolCount);

        	return result;
        };

        tc1.task['getCellText'] = function(){
        	var result = [];

        	for(var i=0; i<5; i++)
        	{
        		result.push(this.grid.getCellText(0, i));
        	}

        	return result;
        }

        tc1.task['eventChk'] = function() {
        	var result = [];

        	result.push(tc1.userdata.eventChkList1);
        	result.push(tc1.userdata.eventChkList2);
        	result.push(tc1.userdata.eventChkList3);
        	result.push(tc1.userdata.eventChkList4);

        	return result;
        };

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "canrowposchange 리턴값 별 assign() 수행",
        	autoTaskFlow : ["returnValue", "assign", "eventChk", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : bCancolumnchange, objDataset, ev : 리턴값, rowcount, colcount, 이벤트정보, getCellText
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,this.dataset3]],  ev: [5,5,5,"onrowsetchanged",10,"canrowposchange","onrowposchanged","onvaluechanged",1,"a","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,false], [tapi.VBT_NORMAL,this.dataset3]],  ev: [5,5,5,"onrowsetchanged",10,"canrowposchange","","",1,"a","a","b","c"]},
        				{vc: [[tapi.VBT_EXCEPTION,"생략"], [tapi.VBT_NORMAL,this.dataset3]],  ev: [5,5,5,"onrowsetchanged",10,"canrowposchange","onrowposchanged","onvaluechanged",1,"a","a","b","c"]},
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_EXCEPTION,this.test]],  ev: [-1,5,7,"","","","",1,"유동규",100,"투우","A"]},
        				//filter 후
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,this.dataset3]],  ev: [5,5,5,"onrowsetchanged",10,"canrowposchange","onrowposchanged","onvaluechanged",1,"a","a","b","c"]},
        				//grouping 후
        				{vc: [[tapi.VBT_NORMAL,true], [tapi.VBT_NORMAL,this.dataset3]],  ev: [5,5,5,"onrowsetchanged",10,"canrowposchange","onrowposchanged","onvaluechanged",1,"a","a","b","c"]},
        		]
        	},
        	prepare: function () {
        		var vdAdt = tapi.getVdAdaptor();

        		if(vdAdt.getIndexVC() == 4)
        			this.dataset3.set_filterstr("colA == '2'");
        		if(vdAdt.getIndexVC() == 5)
        			this.dataset3.set_keystring("G:-colA");
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();

        		var rtn;
        		var bCanrowposchange = vdAdt.getValue(0);
        		var objDataset = vdAdt.getValue(1);

        		switch(taskName) {
        		case "returnValue":
        			tc1.task['returnValue'].call(this, bCanrowposchange);
        			break;
        		case "assign":
        			rtn = tc1.task['assign'].call(this, objDataset);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "eventChk":
        			rtn = tc1.task['eventChk'].call(this);
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
        		//초기 상태로 돌리기
        		this.dataset1.assign(this.ds_data2);
        		this.grid.set_binddataset("ds_data1");
        		this.grid.createFormat();

        		tc1.userdata.eventReturnValue = "";
        		tc1.userdata.eventChkList1 = [];
        		tc1.userdata.eventChkList2 = [];
        		tc1.userdata.eventChkList3 = [];
        		tc1.userdata.eventChkList4 = [];
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
        this.TA_Dataset_M_assign_01_v2_onload = function(obj,e)
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
        * onrowsetchanged
        ***********************************************************************/
        this.ds_data1_onrowsetchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList1.push(e.eventid);
        	tc1.userdata.eventChkList1.push(e.reason);
        };
        /***********************************************************************
        * canrowposchange
        ***********************************************************************/
        this.ds_data1_canrowposchange = function(obj,e)
        {
        	tc1.userdata.eventChkList2.push(e.eventid);

        	if(tc1.userdata.eventReturnValue == "false")
        	{
        		//대기상태 해제
        // 		var vdAdt = tapi.getVdAdaptor();
        // 		vdAdt.releaseWait();

        		return false;
        	}
        	else if(tc1.userdata.eventReturnValue == "true")
        	{
        		return true;
        	}
        	else
        	{
        		return;
        	}
        };
        /***********************************************************************
        * onrowposchanged
        ***********************************************************************/
        this.ds_data1_onrowposchanged = function(obj,e)
        {
        	tc1.userdata.eventChkList3.push(e.eventid);
        };
        /***********************************************************************
        * onvaluechanged
        ***********************************************************************/
        this.ds_data1_onvaluechanged = function(obj,e)
        {
        	tc1.userdata.eventChkList4.push(e.eventid);

         	//대기상태 해제
        // 	var vdAdt = tapi.getVdAdaptor();
        // 	vdAdt.releaseWait();
        };

        /***********************************************************************
        * 07 : 사용자 정의 함수 선언부
        ***********************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TA_Dataset_M_assign_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_assign.addEventHandler("onclick",this.btn_assign_onclick,this);
            this.btn_set_filterstr.addEventHandler("onclick",this.btn_set_filterstr_onclick,this);
            this.btn_get_filterstr.addEventHandler("onclick",this.btn_get_filterstr_onclick,this);
            this.btn_set_keystring.addEventHandler("onclick",this.btn_set_keystring_onclick,this);
            this.btn_get_keystring.addEventHandler("onclick",this.btn_get_keystring_onclick,this);
            this.btn_get_rowposition.addEventHandler("onclick",this.btn_get_rowposition_onclick,this);
            this.btn_reload.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_data3.addEventHandler("onload",this.ds_data3_onload,this);
        };

        this.loadIncludeScript("A_Dataset_M_assign_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
