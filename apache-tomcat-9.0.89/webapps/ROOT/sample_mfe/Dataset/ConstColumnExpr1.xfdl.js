(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ConstColumnExpr");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstColumn0","label" : "라벨1","size" : "30","type" : "STRING","usera" : "aaaa","userb" : "bbb","value" : "expr:Column0"},{"id" : "ConstColumn1","size" : "30","type" : "STRING","userc" : "cccc","value" : "expr:Column1"},{"id" : "ConstColumn2","label" : "라벨2","size" : "30","type" : "STRING","value" : "expr:currow"},{"id" : "ConstColumn3","size" : "30","type" : "STRING","value" : "1111"},{"id" : "ConstColumn4","size" : "30","type" : "STRING","value" : "expr:ConstColumn0"},{"id" : "ConstColumn5","size" : "30","type" : "STRING","value" : "expr:Column0+ConstColumn5"},{"id" : "ConstColumn6","size" : "30","type" : "STRING","value" : "expr:ConstColumn6"},{"id" : "ConstColumn7","size" : "30","type" : "STRING","value" : "expr:ConstColumn8"},{"id" : "ConstColumn8","size" : "30","type" : "STRING","value" : "expr:ConstColumn7"},{"id" : "ConstColumn9","size" : "30","type" : "STRING","value" : "expr:Column0+Column1"},{"id" : "ConstColumn10","size" : "30","type" : "STRING","value" : "expr:Column0 == \"이순신\""},{"id" : "ConstColumn11","size" : "30","type" : "STRING","value" : "expr:Column0 == \"이순신\" ? -1 : Column1"}],"Column" : [{"id" : "Column0","label" : "이름","prop" : "TEXT","size" : "256","sumtext" : "AAAA","type" : "STRING","user" : "TEST"},{"id" : "Column1","labe11" : "aaaa","label" : "나이","size" : "256","type" : "INT"},{"id" : "Column2","labe11" : "aaaa","labe12" : "bbbb","label" : "개수","prop" : "COUNT","size" : "256","type" : "INT"}]},"Rows" : [{"Column0" : "이순신","Column1" : "10"},{"Column0" : "강감찬","Column1" : "20"},{"Column0" : "홍길동","Column1" : "30"},{"Column1" : "40","Column0" : "고구마"},{"Column0" : "이순신","Column1" : "50"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","17","259","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            obj.set_tooltiptext("bind ConstColumn4(expr:ConstColumn0)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","18","321","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            obj.set_tooltiptext("bind ConstColumn1(expr:Column1)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","17","388","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            obj.set_tooltiptext("bind ConstColumn2(expr:currow)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","385","258","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("addConstColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00_00","17","451","101","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn00");
            obj.set_tooltiptext("bind ConstColumn5(expr:Column0+ConstColumn5)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","516","410","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00","385","409","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("saveJSON");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00","648","411","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("saveSSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","385","321","143","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("getOrgColumn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","9","17","221","213",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_taborder("9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03_00","135","371","143","46",null,null,null,null,null,null,this);
            obj.set_expr("comp.parent.ds00.rowposition");
            obj.set_taborder("10");
            obj.set_text("getOrgColumn");
            obj.set_tooltiptext("use exp property");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn05","137","431","140","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn05");
            obj.set_tooltiptext("bind ConstColumn9 (expr:Column0+Column1)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00_00","240","17","1060","213",null,null,null,null,null,null,this);
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds00");
            obj.set_cellsizingtype("col");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"91\"/><Column size=\"71\"/><Column size=\"77\"/><Column size=\"75\"/><Column size=\"72\"/><Column size=\"58\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"73\"/><Column size=\"71\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ConstColumn2\"/><Cell col=\"1\" text=\"ConstColumn0\"/><Cell col=\"2\" text=\"ConstColumn1\"/><Cell col=\"3\" text=\"ConstColumn3\"/><Cell col=\"4\" text=\"ConstColumn4\"/><Cell col=\"5\" text=\"ConstColumn5\"/><Cell col=\"6\" text=\"ConstColumn6\"/><Cell col=\"7\" text=\"ConstColumn7\"/><Cell col=\"8\" text=\"ConstColumn8\"/><Cell col=\"9\" text=\"Column0\"/><Cell col=\"10\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstColumn2\"/><Cell col=\"1\" text=\"bind:ConstColumn0\"/><Cell col=\"2\" text=\"bind:ConstColumn1\"/><Cell col=\"3\" text=\"bind:ConstColumn3\"/><Cell col=\"4\" text=\"bind:ConstColumn4\"/><Cell col=\"5\" text=\"bind:ConstColumn5\"/><Cell col=\"6\" text=\"bind:ConstColumn6\"/><Cell col=\"7\" text=\"bind:ConstColumn7\"/><Cell col=\"8\" text=\"bind:ConstColumn8\"/><Cell col=\"9\" text=\"bind:Column0\"/><Cell col=\"10\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00_00","386","466","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("copyData");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02_00_00_00_00","387","516","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("FindRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07","515","516","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("FindRowAs");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00","387","562","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getCaseAvg");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00_00","644","560","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getCaseCount");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00_00_00","771","559","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("getCaseMin");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_00_00_00_00","900","559","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("getCaseSum");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07_02","513","560","123","42",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("getCaseMax");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","medium,large,desktop,mobile",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","btn00","text","ds00","ConstColumn4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","btn00_00","text","ds00","ConstColumn1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","btn00_00_00","text","ds00","ConstColumn2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","btn00_00_00_00","text","ds00","ConstColumn5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","btn03_00","text","ds00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","btn05","text","ds00","ConstColumn9");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ConstColumnExpr1.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	this.ds00.addConstColumn("NConst0", "expr:Column0*2");
        };

        this.btn02_onclick = function(obj,e)
        {
        	trace(this.ds00.saveXML());
        };

        this.btn03_onclick = function(obj,e)
        {
        	trace(this.ds00.saveJSON());
        };

        this.btn04_onclick = function(obj,e)
        {
        	trace(this.ds00.saveSSV());
        };

        this.btn05_onclick = function(obj,e)
        {
        	trace("getOrgColumn:"+ this.ds00.getOrgColumn(this.ds00.rowposition, "ConstColumn0"))
        	trace("getColumn:"+ this.ds00.getColumn(this.ds00.rowposition, "ConstColumn0"))

        	trace("getOrgColumn:"+ this.ds00.getOrgColumn(this.ds00.rowposition, "ConstColumn9"))
        	trace("getColumn:"+ this.ds00.getColumn(this.ds00.rowposition, "ConstColumn9"))
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.ds01.copyData(this.ds00);
        	var strds01 = this.ds01.saveXML("test");
        	var strds00 = this.ds00.saveXML("test");
        	if (strds01 == strds00) trace("success copyData" + strds01);
        	else trace("fail copyData");
        };

        this.btn07_onclick = function(obj,e)
        {

        	var rowidx = this.ds00.findRow("ConstColumn0", "고구마") ;
        	if (rowidx == 3) trace(" ds00.findRow(\"ConstColumn0\", \"고구마\") success")
        	else trace("ds00.findRow(\"ConstColumn0\", \"고구마\") fail");

        	rowidx = this.ds00.findRow("ConstColumn9", "홍길동30") ;
        	if (rowidx == 2) trace(" ds00.findRow(\"ConstColumn9\", \"홍길동30\") success")
        	else trace("ds00.findRow(\"ConstColumn9\", \"홍길동30\") fail");

        };

        this.btn08_onclick = function(obj,e)
        {
        	var rowidx = this.ds00.findRowAs("ConstColumn0", "구마") ;
        	if (rowidx == 3) trace(" ds00.findRowAs(\"ConstColumn0\", \"구마\") success")
        	else trace("ds00.findRowAs(\"ConstColumn0\", \"구마\") fail");

        	rowidx = this.ds00.findRowAs("ConstColumn9", "홍길동3") ;
        	if (rowidx == 2) trace(" ds00.findRowAs(\"ConstColumn9\", \"홍길동3\") success")
        	else trace("ds00.findRowAs(\"ConstColumn9\", \"홍길동30\") fail");

        };

        this.btn09_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseAvg("ConstColumn10", "Column1") ;
        	trace(" ds00.getCaseAvg(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getAvg("ConstColumn10") ;
        	trace(" ds00.getAvg(\"ConstColumn10\") = " +  avg);
        };

        this.btn10_onclick = function(obj,e)
        {
        	var cnt = this.ds00.getCaseCount("ConstColumn10");
        	trace(" ds00.getCaseCount(\"ConstColumn10\") = " +  cnt);

        };

        this.btn11_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseMin("ConstColumn10", "Column1");
        	trace(" ds00.getCaseMin(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getMin("ConstColumn2");
        	trace(" ds00.getMin(\"ConstColumn2\") = " +  avg);
        };

        this.btn12_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseSum("ConstColumn10", "Column1");
        	trace(" ds00.getCaseSum(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getSum("ConstColumn2");
        	trace(" ds00.getSum(\"ConstColumn10\") = " +  avg);
        };

        this.btn13_onclick = function(obj,e)
        {
        	var avg = this.ds00.getCaseMax("ConstColumn10", "Column1");
        	trace(" ds00.getCaseMax(\"ConstColumn10\", \"Column1\") = " +  avg);

        	avg = this.ds00.getMax("ConstColumn2");
        	trace(" ds00.getMax(\"ConstColumn2\") = " +  avg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn02_00_00.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn03_00.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn02_00_00_00.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn02_00_00_00_00.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn07_00.addEventHandler("onclick",this.btn09_onclick,this);
            this.btn07_00_00.addEventHandler("onclick",this.btn10_onclick,this);
            this.btn07_00_00_00.addEventHandler("onclick",this.btn11_onclick,this);
            this.btn07_00_00_00_00.addEventHandler("onclick",this.btn12_onclick,this);
            this.btn07_02.addEventHandler("onclick",this.btn13_onclick,this);
        };

        this.loadIncludeScript("ConstColumnExpr1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
