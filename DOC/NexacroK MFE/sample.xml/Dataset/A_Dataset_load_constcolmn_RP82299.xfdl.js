(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsA", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstColumn0","size" : "30","type" : "STRING"},{"id" : "ConstColumn1","size" : "30","type" : "STRING","value" : ""},{"id" : "ConstColumn2","size" : "30","type" : "STRING","value" : "가나다"},{"id" : "ConstColumn3","size" : "30","type" : "INT"},{"id" : "ConstColumn4","size" : "30","type" : "INT","value" : ""}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsB", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","248","72","244","81",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("save");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","250","160","244","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("load");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo00","10","75","210","165",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("2");
            var rdo00_innerdataset = new nexacro.NormalDataset("rdo00_innerdataset", obj);
            rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "xml"},{"codecolumn" : "1","datacolumn" : "ssv"},{"codecolumn" : "2","datacolumn" : "csv"}]});
            obj.set_innerdataset(rdo00_innerdataset);
            obj.set_text("xml");
            obj.set_value("0");
            obj.set_index("0");
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
        this.addIncludeScript("A_Dataset_load_constcolmn_RP82299.xfdl","lib::libCommon.xjs");
        this.registerScript("A_Dataset_load_constcolmn_RP82299.xfdl", function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
        var tapi = this.gfnGetTestAPI();
        var tc1  = {
        	description: "ConstColumn",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "loadXML",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "loadXML"]
            },
        	initialize: function() {
        	this.dsA.addConstColumn("TEST");
        	this.dsA.addConstColumn("TEST1", "");
        	},
        	validator : {},
        	finalize : function() {}
        };

        tc1.validator ['tc1_v1'] = {
        	description: "const value == undefined : save & load(XML)",
        	prepare: function () {},
        	run: function () {
        		this.rdo00.set_value("0");
        		var savedata = this.fn_save();
        		var loaddata = this.fn_load(savedata);
        		return (savedata  == loaddata)
        },
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, true);
        	},
        	teardown: function () {}
        };

        var tc2  = {
        	description: "ConstColumn",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "loadSSV",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "loadSSV"]
            },
        	initialize: function() {},
        	validator : {},
        	finalize : function() {}
        };

        tc2.validator ['tc2_v1'] = {
        	description: "const value == undefined : save & load(SSV)",
        	prepare: function () {},
        	run: function () {
        		this.rdo00.set_value("1");
        		var savedata = this.fn_save();
        		var loaddata = this.fn_load(savedata);
        		return (savedata  == loaddata)
        },
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, true);
        	},
        	teardown: function () {}
        };

        var tc3  = {
        	description: "ConstColumn",
        	initialize: function() {},
        	validator : {},
        	finalize : function() {}
        };

        tc3.validator ['tc3_v1'] = {
        	description: "const value == undefined : save & load(CSV)",
            metadata : {
        			 objectId : "nexacro.Dataset",        // 객체 식별자 : typedef의 object id(개별)
        			 featureType: tapi.FT_METHOD,     		// object metainfo의 속성 종류
        			 elementName : "loadCSV",        // 요소 이름 : [ object metainfo의 속성 이름 | undefined ]
        			 keyword : ["Dataset", "loadCSV"]
            },
        	prepare: function () {},
        	run: function () {
        	this.rdo00.set_value("2");
        		var savedata = this.fn_save();
        		var loaddata = this.fn_load(savedata);
        		return (savedata  == loaddata)
        },
        	check: function  (rtn) {
        		return nexacro.test.checkEqual(this, rtn, true);
        	},
        	teardown: function () {}
        };


        this.tcList = [tc1,tc2,tc3];

        this.testForm_onload = function(obj,e)
        {
        	//테스트 러너에 전달
        	 this.gfnInit(this.tcList, this);
        };

        this.fn_save = function(obj,e)
        {
        	var savetype = this.rdo00.text;
        	if (savetype == "xml")
        		return this.dsA.saveXML("A");
        	else if (savetype == "ssv")
        		return this.dsA.saveSSV("A");
        	else if (savetype == "csv")
        		return this.dsA.saveCSV("A");
        };

        this.fn_load = function(data)
        {
        	var savetype = this.rdo00.text;
        	if (savetype == "xml")
        	{
        		this.dsB.loadXML(data);
        		return this.dsB.saveXML("A");
        	}
        	else if (savetype == "ssv")
        	{
        		this.dsB.loadSSV(data);
        		return this.dsB.saveSSV("A");
        	}
        	else if (savetype == "csv")
        	{
        		this.dsB.loadCSV(data);
        		return this.dsB.saveCSV("A");
        	}

        };

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.fn_save());
        };

        this.Button01_onclick = function(obj,e)
        {
        	var data = this.fn_save();
        	trace(this.fn_load(data));
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testForm_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("A_Dataset_load_constcolmn_RP82299.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
