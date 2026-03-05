(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDivSpin");
            this.set_titletext("divSpin 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","13","17","100","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("투명도");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","120","20","229","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_url("FrameBase::sampleDivSpinInner.xfdl");
            obj.getSetter("udisplaynulltext").set("");
            obj.getSetter("ucirculation").set("false");
            obj.getSetter("uincrement").set("1");
            obj.getSetter("umax").set("100");
            obj.getSetter("umin").set("0");
            obj.getSetter("udisplaycomma").set("false");
            obj.getSetter("uunit").set("");
            obj.set_border("1px solid gray");
            obj.getSetter("ualign").set("right");
            obj.getSetter("uvalue").set("0");
            obj.getSetter("utext").set("");
            obj.getSetter("editaccessibilityenable").set("");
            obj.getSetter("editaccessibilitylabel").set("간접");
            obj.getSetter("editaccessibilitydescription").set("");
            obj.getSetter("increaseaccessibilityenable").set("");
            obj.getSetter("increaseaccessibilitylabel").set("투명도올리기");
            obj.getSetter("decreaseaccessibilitydescription").set("");
            obj.getSetter("decreaseaccessibilityenable").set("");
            obj.getSetter("decreaseaccessibilitylabel").set("투명도내리기");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","395","18","210","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","636","18","214","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSpin","0","0",null,null,"64","8",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("직접");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnIncrease",null,"0","50","43.10%","14",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("▲");
            obj.set_border("0px none");
            obj.set_accessibilitydescription("올리기");
            obj.set_accessibilitylabel("투명도");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnDecrease",null,"25","50",null,"14","8",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("▼");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("투명도");
            obj.set_accessibilitydescription("내리기");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","10","85","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_accessibilitylabel("투투");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","244","85","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("setValue");
            obj.getSetter("uTest").set("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_01","400","90","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_00_01_innerdataset = new nexacro.NormalDataset("rdo00_00_01_innerdataset", obj);
            rdo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_01_innerdataset);
            obj.set_text("true");
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_01","rdo00_00_01:-1","90","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("set editaccessibilityenable");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02","400","rdo00_00_01:10","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03","edt00_02:-1","btn00_01_00_01:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set editaccessibilitylabel");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_00","699","btn00_03:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("set editaccessibilitydescription");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","400","edt00_02:10","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_01_00","400","edt00_02_00:20","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_00_01_00_innerdataset = new nexacro.NormalDataset("rdo00_00_01_00_innerdataset", obj);
            rdo00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_01_00_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_01_00","rdo00_00_01_00:-1","btn00_03_00:20","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("set increaseaccessibilityenable");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_01","400","rdo00_00_01_00:10","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_01","edt00_02_01:-1","btn00_01_00_01_00:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("set increaseaccessibilitylabel");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_00_00","699","btn00_03_01:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("set increaseaccessibilitydescription");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","400","edt00_02_01:10","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_01_00_00","400","edt00_02_00_00:20","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_00_01_00_00_innerdataset = new nexacro.NormalDataset("rdo00_00_01_00_00_innerdataset", obj);
            rdo00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_01_00_00_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_01_00_00","rdo00_00_01_00_00:-1","btn00_03_00_00:20","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("set decreaseaccessibilityenable");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_01_00","704","btn00_01_00_01_00_00:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("set decreaseaccessibilitylabel");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_00_00_00","704","btn00_03_01_00:10","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("set decreaseaccessibilitydescription");
            obj.getSetter("uTest").set("");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","405","590","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_02_01_00","405","rdo00_00_01_00_00:10","300","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","10","edt00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","edt00_00_00:-1","btn00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("get Value");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","10","edt00_00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","edt00_00_00_00:-1","btn00_00_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("getText");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","10","edt00_00_00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_01","edt00_00_00_01:-1","btn00_00_00_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("this.div00.uvalue");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","10","edt00_00_00_01:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","edt00_00_00_00_00:-1","btn00_00_00_01:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("this.div00.utext");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","10","edt00_00_00_00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_inputtype("number");
            obj.set_value("100");
            obj.set_text("100");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02_00_00","edt00_01_00_00:-1","btn00_00_00_00_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("set  increment");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","10","edt00_01_00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_inputtype("number");
            obj.set_value("10000");
            obj.set_text("10000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_01","10","edt00_01_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_inputtype("number");
            obj.set_value("0");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02","edt00_01:-1","505","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("set min");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02_00","edt00_01_00:-1","btn00_02_00_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("set max");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10","edt00_01:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("%");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","edt00_00:-1","btn00_02:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("change unit");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","10","edt00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_innerdataset = new nexacro.NormalDataset("rdo00_innerdataset", obj);
            rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","10","rdo00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_00_innerdataset = new nexacro.NormalDataset("rdo00_00_innerdataset", obj);
            rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_innerdataset);
            obj.set_text("false");
            obj.set_value("false");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01","rdo00:-1","btn00_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("set circulation");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","rdo00_00:-1","btn00_01:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("set displaycomma");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00","10","rdo00_00:10","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_00_00_innerdataset = new nexacro.NormalDataset("rdo00_00_00_innerdataset", obj);
            rdo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">left</Col><Col id=\"datacolumn\">left</Col></Row><Row><Col id=\"codecolumn\">center</Col><Col id=\"datacolumn\">center</Col></Row><Row><Col id=\"codecolumn\">right</Col><Col id=\"datacolumn\">right</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_00_innerdataset);
            obj.set_text("right");
            obj.set_value("right");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_00","rdo00_00_00:-1","btn00_01_00:10","105","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("set textAlign");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,920,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::sampleDivSpinInner.xfdl");
        };
        
        // User Script
        this.registerScript("sampleDivSpin.xfdl", function() {


        this.btn00_onclick = function(obj,e)
        {
        	this.div00.form.setValue(this.edt00.value);
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.div00.form.unit(this.edt00_00.value);
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	this.edt00_00_00.value =  this.div00.form.getValue();
        };

        this.btn00_00_00_00_onclick = function(obj,e)
        {
        	this.edt00_00_00_00.value =  this.div00.form.getText();
        };

        this.btn00_01_onclick = function(obj,e)
        {
        	this.div00.form.circulation( this.rdo00.value);
        };

        this.btn00_01_00_onclick = function(obj,e)
        {
        	this.div00.form.displaycomma( this.rdo00_00.value);
        };

        this.btn00_00_00_01_onclick = function(obj,e)
        {
        	this.edt00_00_00_01.value =  this.div00.uvalue;
        };

        this.btn00_00_00_00_00_onclick = function(obj,e)
        {
        	this.edt00_00_00_00_00.value =  this.div00.utext;
        };

        this.btn00_02_00_00_onclick = function(obj,e)
        {
        	this.div00.form.increment(this.edt00_01_00_00.value);
        };

        this.btn00_02_00_onclick = function(obj,e)
        {
        	this.div00.form.max(this.edt00_01_00.value);
        };

        this.btn00_02_onclick = function(obj,e)
        {
        	this.div00.form.min(this.edt00_01.value);
        };

        this.btn00_01_00_00_onclick = function(obj,e)
        {
        	this.div00.form.align(this.rdo00_00_00.value);
        };

        this.btn00_01_00_01_onclick = function(obj,e)
        {
        	this.div00.form.editaccessibilityenable(this.rdo00_00_01.value);
        };

        this.btn00_03_onclick = function(obj,e)
        {
        	this.div00.form.editaccessibilitylabel(this.edt00_02.value);
        };

        this.btn00_03_00_onclick = function(obj,e)
        {
        	this.div00.form.editaccessibilitydescription(this.edt00_02_00.value);
        };

        this.btn00_01_00_01_00_onclick = function(obj,e)
        {
        	this.div00.form.increaseaccessibilityenable(this.rdo00_00_01_00.value);
        };

        this.btn00_03_01_onclick = function(obj,e)
        {
        	this.div00.form.increaseaccessibilitylabel(this.edt00_02_01.value);
        };

        this.btn00_03_00_00_onclick = function(obj,e)
        {
        	this.div00.form.increaseaccessibilitydescription(this.edt00_02_00_00.value);
        };

        this.btn00_01_00_01_00_00_onclick = function(obj,e)
        {
        	this.div00.form.decreaseaccessibilityenable(this.rdo00_00_01_00_00.value);
        };

        this.btn00_03_01_00_onclick = function(obj,e)
        {
        	this.div00.form.decreaseaccessibilitylabel(this.edt00_02_01_00.value);
        };

        this.btn00_03_00_00_00_onclick = function(obj,e)
        {
        	this.div00.form.decreaseaccessibilitydescription(this.edt00_02_00_00_00.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_01_00_01.addEventHandler("onclick",this.btn00_01_00_01_onclick,this);
            this.btn00_03.addEventHandler("onclick",this.btn00_03_onclick,this);
            this.btn00_03_00.addEventHandler("onclick",this.btn00_03_00_onclick,this);
            this.btn00_01_00_01_00.addEventHandler("onclick",this.btn00_01_00_01_00_onclick,this);
            this.btn00_03_01.addEventHandler("onclick",this.btn00_03_01_onclick,this);
            this.btn00_03_00_00.addEventHandler("onclick",this.btn00_03_00_00_onclick,this);
            this.btn00_01_00_01_00_00.addEventHandler("onclick",this.btn00_01_00_01_00_00_onclick,this);
            this.btn00_03_01_00.addEventHandler("onclick",this.btn00_03_01_00_onclick,this);
            this.btn00_03_00_00_00.addEventHandler("onclick",this.btn00_03_00_00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_onclick,this);
            this.btn00_00_00_01.addEventHandler("onclick",this.btn00_00_00_01_onclick,this);
            this.btn00_00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_00_onclick,this);
            this.btn00_02_00_00.addEventHandler("onclick",this.btn00_02_00_00_onclick,this);
            this.btn00_02.addEventHandler("onclick",this.btn00_02_onclick,this);
            this.btn00_02_00.addEventHandler("onclick",this.btn00_02_00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_01.addEventHandler("onclick",this.btn00_01_onclick,this);
            this.btn00_01_00.addEventHandler("onclick",this.btn00_01_00_onclick,this);
            this.btn00_01_00_00.addEventHandler("onclick",this.btn00_01_00_00_onclick,this);
        };
        this.loadIncludeScript("sampleDivSpin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
