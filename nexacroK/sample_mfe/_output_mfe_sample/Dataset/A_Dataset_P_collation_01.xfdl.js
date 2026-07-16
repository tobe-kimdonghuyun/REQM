(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TA_Dataset_P_colcount_01_v2");
            this.set_titletext("TA_Dataset_P_colcount_01_v2");
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
            obj.set_updatecontrol("false");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstA","size" : "30","type" : "STRING","value" : "A"},{"id" : "ConstB","size" : "30","type" : "STRING","value" : "B"},{"id" : "ConstC","size" : "30","type" : "STRING","value" : "C"}],"Column" : [{"id" : "colA","size" : "256","type" : "STRING"},{"id" : "colB","size" : "256","type" : "STRING"},{"id" : "colC","size" : "256","type" : "INT"},{"id" : "colD","size" : "256","type" : "STRING"}]},"Rows" : [{"colB" : "유동규","colA" : "1","colC" : "100","colD" : "투우"},{"colB" : "주인희","colA" : "1","colC" : "200","colD" : "비이"},{"colB" : "고준영","colA" : "2","colC" : "200","colD" : "소오"},{"colB" : "이정빈","colA" : "3","colC" : "300","colD" : "프트"},{"colA" : "4","colB" : "김선주","colC" : "400","colD" : "비이"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_data01", this);
            obj.set_keystring("S:result1");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "localecompare","size" : "256","type" : "STRING"},{"id" : "result1","size" : "256","type" : "STRING"},{"id" : "result2","size" : "256","type" : "STRING"},{"id" : "pass","size" : "256","type" : "STRING"},{"id" : "expect","size" : "256","type" : "STRING"}]},"Rows" : [{"localecompare" : "","result1" : "가","result2" : "1"},{"localecompare" : "","result1" : "A","result2" : "1"},{"localecompare" : "","result1" : "b","result2" : "1"},{"result1" : "C","result2" : "가"},{"result1" : "!","result2" : "C"},{"result1" : "8","result2" : "1"},{"result1" : "山","result2" : "2"},{"result1" : "♥","result2" : "3"},{"result1" : "￦","result2" : "3"},{"result1" : "€","result2" : "1"},{"result1" : "￥","result2" : "2"},{"result1" : "ä","result2" : "3"},{"result1" : "aå","result2" : "4"},{"result1" : "à","result2" : "나"},{"result1" : "ă","result2" : "山"},{"result1" : "ā","result2" : "1"},{"result1" : "ad","result2" : "2"},{"result1" : "af","result2" : "3"},{"result1" : "á","result2" : "ㄱ"},{"result1" : "a"},{"result1" : "a-d"},{"result1" : "10"},{"result1" : "2"},{"result1" : "a d"},{"result1" : "â"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","314","4","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Embedded Test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_text("[Dataset_P_collation_01]");
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

            obj = new nexacro.Grid("grd00","5","62","412","297",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data01");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"localecompare\"/><Cell col=\"1\" text=\"result1\"/><Cell col=\"2\" text=\"result2\"/><Cell col=\"3\" text=\"pass\"/><Cell col=\"4\" text=\"expect\"/></Band><Band id=\"body\"><Cell text=\"bind:localecompare\"/><Cell col=\"1\" text=\"bind:result1\"/><Cell col=\"2\" text=\"bind:result2\"/><Cell col=\"3\" text=\"bind:pass\"/><Cell col=\"4\" text=\"bind:expect\"/></Band></Format></Formats>");
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
        this.addIncludeScript("A_Dataset_P_collation_01.xfdl","lib::libCommon.xjs");
        this.addIncludeScript("A_Dataset_P_collation_01.xfdl","libevent::event.util.xjs");
        this.registerScript("A_Dataset_P_collation_01.xfdl", function(nexacro, system, trace, environment, application) {
        /***********************************************************************
        * 설명      : Dataset collation Property
        ***********************************************************************
        *     수정일     작성자   내용
        ***********************************************************************
        *     2021.03.29  함경곤   최초 작성
        ***********************************************************************
        */

        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        var tapi = this.gfnLoadTestAPI(0.71);
        //this.dev_status = tapi.DEV_HOLD;

        /***********************************************************************
        * 01: Form 변수 선언부
        ***********************************************************************/
        this.dataset = this.ds_data1;
        this.grid = this.Grid00;

        /***********************************************************************
        * 02 : Test Case, Validator, Validation Case 선언부
        ***********************************************************************/
        var tc1  = {
        	description: "Dataset collation Property Test",
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

        tc1.task['collation'] = function(collation) {
        	var result = [];
        	var ds = this.ds_data01;
        	if (collation == "currentlocale")
        		this.set_locale("ko_KR");
        	ds.set_collation(collation);
        	//ds.set_keystring("S:result1");
        	for (var i=0,len = ds.getRowCount();i<len;i++)
        	{
        		result.push(ds.getColumn(i,1));
        	}
        	return result;
        }

        tc1.checker['equal'] = function(alResultValues, alExpectedValues) {
        	var chk = true;
        	var chk = tapi.checkEqual(this, alResultValues, alExpectedValues);

        	return chk;
        };


        tc1.validator ['tc1_vd1'] = {
        	description: "set_collation",
        	autoTaskFlow : ["collation"],
        	vcinfo : {
        		argType : tapi.VCT_ARG_LIST,
        		args : [
        			//vc : colVal, ev : colcount
        			//none
        			/* none *///"!,10,2,8,A,C,a,a d,a-d,ad,af,aå,b,à,á,â,ä,ā,ă,€,♥,山,가,￥,￦"
        			/* ko-KR *///"!,♥,￥,￦,€,10,2,8,가,山,a,A,á,à,ă,â,ä,ā,a d,a-d,aå,ad,af,b,C", //curentlocale
        			/* zh-Hans-CN *///"!,♥,￥,￦,€,10,2,8,山,ā,á,à,a,A,ă,â,ä,a d,a-d,aå,ad,af,b,C,가"
        			{vc: [[tapi.VBT_NORMAL,"none"]],  	ev: ["!,10,2,8,A,C,a,a d,a-d,ad,af,aå,b,à,á,â,ä,ā,ă,€,♥,山,가,￥,￦"]},
        			{vc: [[tapi.VBT_NORMAL,"currentlocale"]],  ev: ["!,♥,￥,￦,€,10,2,8,가,山,a,A,á,à,ă,â,ä,ā,a d,a-d,aå,ad,af,b,C"]},
        			{vc: [[tapi.VBT_NORMAL,"zh-Hans-CN"]],  ev: ["!,♥,￥,￦,€,10,2,8,山,ā,á,à,a,A,ă,â,ä,a d,a-d,aå,ad,af,b,C,가"]},
        		]
        	},
        	prepare: function () {
        	},
        	run: function () {
        		var vdAdt = tapi.getVdAdaptor();
        		var taskName = vdAdt.getTaskFlowName();
        		var collation = vdAdt.getValue(0);
        		var rtn;

        		switch(taskName) {
        		case "collation":
        			rtn = tc1.task['collation'].call(this, collation);
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
        			  { tc: tc1, browser: ['IE'] },
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
        this.TA_Dataset_P_colcount_01_v2_onload = function(obj,e)
        {
           // debug mode : log level에서 지정한 모든 메시지 제공
           tapi.systemDebugOn();          // Runner를 debug mode로 실행
           tapi.debugOn();                  // 응용을 debug mode로 실행
           // Runner Load
           tapi.init(tcInfo, this);
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
        	//runner.setLogLevel(tapi.TRACE);
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
            this.addEventHandler("onload",this.TA_Dataset_P_colcount_01_v2_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn_Combo_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_P_collation_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
