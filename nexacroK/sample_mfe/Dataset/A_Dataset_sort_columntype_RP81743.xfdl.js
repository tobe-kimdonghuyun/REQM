(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dsadasdas");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1014,538);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1"},{"Column0" : "2"},{"Column0" : "3"},{"Column0" : "4"},{"Column0" : "5"},{"Column0" : "6"},{"Column0" : "7"},{"Column0" : "8"},{"Column0" : "9"},{"Column0" : "10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("Grid00","115","20","290","311",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","474","70","296","63",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("column type : int 로 변경 후  sort(내림차순)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","474","143","296","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("column type : int 로 변경 후  sort(오름차순)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","475","204","294","63",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("column type : stirng 로 변경 후  sort(내림차순)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","476","277","294","63",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("column type : stirng 로 변경 후  sort(오름차순)");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1014,538,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("A_Dataset_sort_columntype_RP81743.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_sort_columntype_RP81743.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        var tc  = {
        	description: "RP81743 Dataset Sort",
            metadata : {
        			 objectId : "nexacro.ColumnInfo",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_PROPERTY,     		// object metainfo의 속성 종류
        			 elementName : "type",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["ColumnInfo", "type", "keystring"]
            },
        	initialize: function() {},
        	validator : {},
        	finalize : function() {}
        };

        tc.validator ['tc_v1'] = {
        	description: "Dataset Sort(ColumnType int로 변경 후 sort내림차순)",
        	prepare: function () {},
        	run: function () {

        		var rtn = this.Button00_onclick();
        		return rtn;
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, "10,9,8,7,6,5,4,3,2,1,");
        	},
        	teardown: function () {}
        };

        tc.validator ['tc_v2'] = {
        	description: "Dataset Sort(ColumnType int로 변경 후 sort오름차순)",
        	prepare: function () {},
        	run: function () {

        		var rtn = this.btn00_onclick();
        		return rtn;
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, "1,2,3,4,5,6,7,8,9,10,");
        	},
        	teardown: function () {}
        };

        tc.validator ['tc_v3'] = {
        	description: "Dataset Sort(ColumnType string로 변경 후 sort내름차순)",
        	prepare: function () {},
        	run: function () {

        		var rtn = this.Button01_onclick();
        		return rtn;
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, "9,8,7,6,5,4,3,2,10,1,");
        	},
        	teardown: function () {}
        };

        tc.validator ['tc_v4'] = {
        	description: "Dataset Sort(ColumnType string로 변경 후 sort오름차순)",
        	prepare: function () {},
        	run: function () {

        		var rtn = this.Button02_onclick();
        		return rtn;
        	},
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, "1,10,2,3,4,5,6,7,8,9,");
        	},
        	teardown: function () {}
        };

        this.tcList = [tc];


        this.testForm_onload = function(obj,e)
        {
        	//테스트 러너에 전달
        	 this.gfnInit(this.tcList, this);
        };

        this.Button00_onclick = function(obj,e)
        {
        	var objColumnInfo = this.Dataset00.getColumnInfo("Column0");
        	objColumnInfo.set_type("INT");
        	trace("getColumnInfo : " + this.Dataset00.getColumnInfo("Column0").type);
        	this.Dataset00.set_keystring("S:-Column0");

        	return this.fn_getDatasetColumn();
        };

        this.fn_getDatasetColumn =function ()
        {
        	var cnt = this.Dataset00.rowcount;
        	var strgetcolumn = "";
        	for (var i = 0; i < cnt; i++)
        	{
        		strgetcolumn += this.Dataset00.getColumn(i, 0);
        		strgetcolumn += ",";
        	}
        	trace(strgetcolumn);
        	return strgetcolumn ;
        }

        this.btn00_onclick = function(obj,e)
        {
            var objColumnInfo = this.Dataset00.getColumnInfo("Column0");
        	objColumnInfo.set_type("INT");
        	trace("getColumnInfo : " + this.Dataset00.getColumnInfo("Column0").type);
        	this.Dataset00.set_keystring("S:Column0");

        	return this.fn_getDatasetColumn();
        };

        this.Button01_onclick = function(obj,e)
        {
        	var objColumnInfo = this.Dataset00.getColumnInfo("Column0");
        	objColumnInfo.set_type("STRING");
        	trace("getColumnInfo : " + this.Dataset00.getColumnInfo("Column0").type);
        	this.Dataset00.set_keystring("S:-Column0");

        	return this.fn_getDatasetColumn();
        };


        this.Button02_onclick = function(obj,e)
        {
        	 var objColumnInfo = this.Dataset00.getColumnInfo("Column0");
        	objColumnInfo.set_type("STRING");
        	trace("getColumnInfo : " + this.Dataset00.getColumnInfo("Column0").type);
        	this.Dataset00.set_keystring("S:Column0");

        	return this.fn_getDatasetColumn();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testForm_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_sort_columntype_RP81743.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
