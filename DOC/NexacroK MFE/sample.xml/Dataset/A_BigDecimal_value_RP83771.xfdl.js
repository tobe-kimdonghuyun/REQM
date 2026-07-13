(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_BigDecimal_value_RP83771");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "value","size" : "256","type" : "STRING"},{"id" : "tc","size" : "256","type" : "STRING"}]},"Rows" : [{"value" : "0.65","tc" : "1"},{"value" : "0.650","tc" : "1"},{"value" : "0.65000","tc" : "1"},{"value" : "10000","tc" : "2"},{"value" : "100E+2","tc" : "2"},{"value" : "0.100E+5","tc" : "2"},{"value" : "-0.65","tc" : "3"},{"value" : "-0.650","tc" : "3"},{"value" : "-0.65000","tc" : "3"},{"value" : "-10000","tc" : "4"},{"value" : "-100E+2","tc" : "4"},{"value" : "-0.100E+5","tc" : "4"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","227","30","107","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","21","30","178","140",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt00","33","195","366","103",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_BigDecimal_value_RP83771.xfdl","lib::libCommon.xjs");
        this.registerScript("A_BigDecimal_value_RP83771.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        /***********************************************************************
        * 01 : Test Case, validator 선언부
        ***********************************************************************/
        /***********************************************************************
        * Test Case 생성
        ***********************************************************************/
        var tc  = {

        	// tc 설명
        	description: "BigDecimal value 정합성 Test",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "getColumn",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "getColumn"]
            },
        	//  테스트케이스 시작 전 해야할 일
        	initialize: function(){
        	},

        	// validator 구조체(객체 안의 객체)
        	validator : {
        	// 여기에 뭐 쓰시면 안되요
        	},

        	// 테스트케이스 종료 후 해야할 일
        	finalize : function()
        	{
        		this.ds00.clearData();
        	}
        };

        /***********************************************************************
        * Test Case 유효성 검사1
        ***********************************************************************/
        // tc객체의 validator객체에 임의의 key(tc_vc1)를 생성하고 거기에 객체를 넣는 구조
        tc.validator ['tc_vc1'] = {

            // 유효성 검사 설명
        	description: "소수점이하 '0'으로 끝나는 값",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        	},

        	// 실행
        	run: function () {
        		var rtn = this._check(1);
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {

        	}
        };

        tc.validator ['tc_vc2'] = {

            // 유효성 검사 설명
        	description: "'0'으로 끝나는 값의 지수표기",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        	},

        	// 실행
        	run: function () {
        		var rtn = this._check(2);
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {

        	}
        };

        tc.validator ['tc_vc3'] = {

            // 유효성 검사 설명
        	description: "소수점이하 '0'으로 끝나는 값(음수)",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        	},

        	// 실행
        	run: function () {
        		var rtn = this._check(3);
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {

        	}
        };

        tc.validator ['tc_vc4'] = {

            // 유효성 검사 설명
        	description: "'0'으로 끝나는 값의 지수표기(음수)",

        	// 수행전 준비에 해야할 일
        	prepare: function (){
        	},

        	// 실행
        	run: function () {
        		var rtn = this._check(4);
        		return rtn;
        	},

        	// 기대값 검사
        	check: function  (resultValue) {
        		return nexacro.test.checkEqual(this, resultValue, true);
        	},

        	// 유효성 확인 후 해야 할일
        	teardown: function () {

        	}
        };

        this.tcList = [tc]; // 생성한 tc 목록 할당, 꼭 TC 생성부 아래 선언해야함

        this._check = function(casenum)
        {
        	this.ds00.filter("tc=='" + casenum + "'");
        	var len = this.ds00.rowcount;

        	var val_arr = [];
        	var val;
        	for(var i = 0; i < len; i++)
        	{
        		val = this.ds00.getColumn(i,"value");
        		trace(val);
        		val_arr.push(new nexacro.Decimal(val));
        	}

        	var val1,val2;
        	val1 = val_arr.pop();
        	while(val_arr.length)
        	{
        		val2 = val_arr.pop();
        		if (!val1.isEqual(val2))
        		{
        			return false;
        		}

        	}

        	return true;
        };

        this.btn00_onclick = function(obj,e)
        {
        		this.txt00.set_value("start test\n");

        		var ret = this._check(1);
        		if (!ret) this.txt00.set_value(this.txt00.value + "case 1 > error\n");

        		var ret = this._check(2);
        		if (!ret) this.txt00.set_value(this.txt00.value + "case 2 > error\n");

        		var ret = this._check(3);
        		if (!ret) this.txt00.set_value(this.txt00.value + "case 3 > error\n");

        		var ret = this._check(4);
        		if (!ret) this.txt00.set_value(this.txt00.value + "case 4 > error\n");

        		this.txt00.set_value(this.txt00.value + "end test\n");

        };

        this.A_BigDecimal_value_RP83771_onload = function(obj,e)
        {
        	this.gfnInit(this.tcList, this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_BigDecimal_value_RP83771_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.grd00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_BigDecimal_value_RP83771.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
