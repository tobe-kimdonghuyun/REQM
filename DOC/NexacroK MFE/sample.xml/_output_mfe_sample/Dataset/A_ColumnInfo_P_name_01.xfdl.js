(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnInfo_P_name_01_v2");
            this.set_titletext("ColumnInfo_P_name_01_v2");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data6", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "그룹코드","size" : "256","type" : "INT"},{"id" : "부서코드","size" : "256","type" : "STRING"},{"id" : "이름","size" : "256","type" : "STRING"},{"id" : "연봉","prop" : "","size" : "256","sumtext" : "1","type" : "INT"},{"id" : "비고","prop" : "","size" : "256","sumtext" : "","type" : "STRING"}]},"Rows" : [{"그룹코드" : "111","이름" : "원빈","연봉" : "4000","비고" : "","부서코드" : "111a"},{"그룹코드" : "112","이름" : "장동건","연봉" : "5000","비고" : "","부서코드" : "112a"},{"그룹코드" : "111","이름" : "현빈","연봉" : "6000","비고" : "","부서코드" : "111b"},{"그룹코드" : "113","이름" : "이병헌","연봉" : "7000","비고" : "","부서코드" : "113a"},{"그룹코드" : "114","이름" : "이나영","연봉" : "8000","비고" : "","부서코드" : "114c"},{"그룹코드" : "114","이름" : "김태희","연봉" : "9000","비고" : "","부서코드" : "114c"},{"그룹코드" : "112","이름" : "비","연봉" : "10000","비고" : "","부서코드" : "112b"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","297","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[ColumnInfo_P_name_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Combo_menu","93","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("◀Dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","368","298","74",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","364","63","27",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","4","68","302","212",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data6");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"연봉\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:그룹코드\"/><Cell col=\"1\" text=\"bind:부서코드\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:연봉\"/><Cell col=\"4\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Embedded Test");
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
            this._addPreloadList("data","","ds_data6");
        };
        
        // User Script
        this.addIncludeScript("A_ColumnInfo_P_name_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_ColumnInfo_P_name_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_ColumnInfo_P_name_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : ColumnInfo name Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2019.03.27  김형철   최초 작성
        *     2020.05.21  김동열   set_name으로 변경되는 문제 해소. DEV_HOLD 해제
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data6;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "ColumnInfo name Property Test",
        	//-------------- beign user defined section
        	userdata : {
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

        tc1.task['name'] = function() {
        	var result = [];

        	for(var i=0; i<this.dataset.colinfos.length; i++)
        	{
        		this.dataset.colinfos[i].set_name("Column"+i);

        		result.push(this.dataset.colinfos[i].name);
        	}

        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };

        tc1.validator ['tc1_vd1'] = {
        	description: "name set 하고 get 후 Columnid 확인",
        	autoTaskFlow : ["name"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_NONE,
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var rtn;

        		switch(taskName) {
        		case "name":
        			rtn = tc1.task['name'].call(this);
        			tc1.userdata.result.push(rtn);
        			break;
        		}

        		return tc1.userdata.result;
        	},
        	check: function (resultValue) {
        		var expectedValue = ["그룹코드","부서코드","이름","연봉","비고"];
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
        	tcList : [tc1],
        	deny : [],
        	allow : [],
        	adjustTcInfo : function() {}
        };

        /***********************************************************************
        * 04 : 화면 로드 시 작업, gfnInit는 필수
        ***********************************************************************/
        this.ColumnInfo_P_name_01_v2_onload = function(obj,e)
        {
           tapi.systemDebugOn();
           tapi.debugOn();

           tapi.init(tcInfo, this);

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
           var runner = tapi.getRunner();
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
            this.addEventHandler("onload",this.ColumnInfo_P_name_01_v2_onload,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_ColumnInfo_P_name_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
