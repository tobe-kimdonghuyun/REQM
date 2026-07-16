(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_M_setContents_01_v2");
            this.set_titletext("TA_Dataset_M_setContents_01_v2");
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
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","235","3","69","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[48105]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","85","1","75","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","70","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","347","298","95",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","164","2","29","29",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","196","2","29","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","314","140","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","5","37","295","193",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"ConstC\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:colA\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:colB\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:colC\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:colD\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:ConstA\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:ConstB\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:ConstC\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Check\"/><Cell col=\"1\" text=\"colA\"/><Cell col=\"2\" text=\"colB\"/><Cell col=\"3\" text=\"colC\"/><Cell col=\"4\" text=\"colD\"/><Cell col=\"5\" text=\"ConstA\"/><Cell col=\"6\" text=\"ConstB\"/><Cell col=\"7\" text=\"ConstC\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" text=\"bind:colA\"/><Cell col=\"2\" text=\"bind:colB\"/><Cell col=\"3\" text=\"bind:colC\"/><Cell col=\"4\" text=\"bind:colD\"/><Cell col=\"5\" text=\"bind:ConstA\"/><Cell col=\"6\" text=\"bind:ConstB\"/><Cell col=\"7\" text=\"bind:ConstC\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_M_setContents_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_M_setContents_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_M_setContents_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset setContents Method
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.26  김형철   최초 작성
        *     2020.05.22  김동열   DEV_HOLD 제거. getCellText 매개변수값 수정.
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.grid = this.Grid00;
        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset setContents Method Test",
        	//-------------- beign user defined section
        	userdata : {
        		strCont :'<ColumnInfo>'
        				   + '  <ConstColumn id="ConstA" type="STRING" size="30" value="A"/>'
        				   + '   <ConstColumn id="ConstB" type="STRING" size="30" value="B"/>'
        				   + '   <ConstColumn id="ConstC" type="STRING" size="30" value="C"/>'
        				   + '   <Column id="Check" type="STRING" size="256"/>'
        				   + '   <Column id="colA" type="STRING" size="256"/>'
        				   + '   <Column id="colB" type="STRING" size="256"/>'
        				   + '  <Column id="colC" type="INT" size="256"/>'
        				   + '   <Column id="colD" type="STRING" size="256"/>'
        				   + ' </ColumnInfo>'
        				   + ' <Rows>'
        				   + '   <Row>'
        				   + '     <Col id="colB">유동규</Col>'
        				   + '     <Col id="colA">1</Col>'
        				   + '     <Col id="colC">100</Col>'
        				   + '     <Col id="colD">투우</Col>'
        				   + '     <Col id="Check">1</Col>'
        				   + '   </Row>'
        				   + '   <Row>'
        				   + '     <Col id="colB">주인희</Col>'
        				   + '     <Col id="colA">1</Col>'
        				   + '     <Col id="colC">200</Col>'
        				   + '     <Col id="colD">비이</Col>'
        				   + '     <Col id="Check">0</Col>'
        				   + '   </Row>'
        				   + '   <Row>'
        				   + '     <Col id="colB">고준영</Col>'
        				   + '     <Col id="colA">2</Col>'
        				   + '     <Col id="colC">200</Col>'
        				   + '     <Col id="colD">소오</Col>'
        				   + '     <Col id="Check">1</Col>'
        				   + '   </Row>'
        				   + '   <Row>'
        				   + '     <Col id="colB">이정빈</Col>'
        				   + '     <Col id="colA">3</Col>'
        				   + '     <Col id="colC">300</Col>'
        				   + '     <Col id="colD">프트</Col>'
        				   + '     <Col id="Check">1</Col>'
        				   + '   </Row>'
        				   + '   <Row>'
        				   + '     <Col id="colA">4</Col>'
        				   + '     <Col id="colB">김선주</Col>'
        				   + '     <Col id="colC">400</Col>'
        				   + '    <Col id="colD">비이</Col>'
        				   + '     <Col id="Check">0</Col>'
        				   + '   </Row>'
        				   + ' </Rows>',
        		result : [],			//task 리턴값
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

        tc1.task['setContents'] = function(strCont) {
        	var result = [];
        	var rtnsetContents = this.dataset.setContents(strCont);

        	this.grid.createFormat();

        	var getrowCount = this.dataset.rowcount;
        	var getcolCount = this.dataset.colcount;

        	result.push(rtnsetContents);
        	result.push(getrowCount);
        	result.push(getcolCount);

        	return result;
        };

        tc1.task['getCellText'] = function(){
        	var result = [];

        	for(var i=0;i<this.dataset.rowcount;i++)
        		result.push(this.grid.getCellText(i, 2));

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "setContents(strCont) 수행",
        	autoTaskFlow : ["setContents", "getCellText"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        				//vc : strCont, ev : 리턴값, rowcount, colcount, getCellText
        			    {vc: [[tapi.VBT_NORMAL,tc1.userdata.strCont]],   ev: [true,5,8,"유동규","주인희","고준영","이정빈","김선주"]},
        			]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var strCont = vdAdt.getValue(0);

        		switch(taskName) {
        		case "setContents":
        			var rtn = tc1.task['setContents'].call(this, strCont);
        			tc1.userdata.result.push(rtn);
        			break;
        		case "getCellText":
        			var rtn = tc1.task['getCellText'].call(this);
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
        this.TA_Dataset_M_setContents_01_v2_onload = function(obj,e)
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
            this.addEventHandler("onload",this.TA_Dataset_M_setContents_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_M_setContents_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
