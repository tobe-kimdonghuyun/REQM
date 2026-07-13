(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("event");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,829);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "나무","Column1" : "0"},{"Column0" : "소나무","Column1" : "1"},{"Column0" : "나무","Column1" : "0"},{"Column0" : "나무","Column1" : "0"},{"Column0" : "소나무","Column1" : "1"},{"Column0" : "나무","Column1" : "0"},{"Column0" : "소나무","Column1" : "1"},{"Column0" : "소나무","Column1" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "나무","Column1" : "0"},{"Column0" : "소나무","Column1" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","19","41","117","38",null,null,null,null,null,null,this);
            obj.set_icon("url(\'theme::blue/images/btn_TF_Close_O.png\')");
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","149","41","111","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00","20","109","232","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","28","208","311","160",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_cellmovingtype("col");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"57\"/><Column size=\"57\"/><Column size=\"63\"/><Column size=\"48\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column0\"/><Cell col=\"3\" text=\"Column0\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:Column0\"/><Cell col=\"1\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodataset=\"ds01\" displaytype=\"combocontrol\" edittype=\"date\" text=\"bind:Column0\"/><Cell col=\"2\" combocodecol=\"Column0\" combodatacol=\"Column1\" combodataset=\"ds01\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column0\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"combo\" text=\"bind:Column0\"/><Cell col=\"4\" edittype=\"date\" expandshow=\"show\"/><Cell col=\"5\" displaytype=\"imagecontrol\" edittype=\"none\" expandshow=\"hide\" text=\"theme://images/btn_expand.png\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","389","27","165","44",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("6");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","659","27","85","87",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("8");
            var lsb00_innerdataset = new nexacro.NormalDataset("lsb00_innerdataset", obj);
            lsb00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(lsb00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Spin("spn00","387","79","167","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","289","132","167","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","33","387","125","39",null,null,null,null,null,null,this);
            obj.set_background("aliceblue");
            obj.set_taborder("9");
            obj.set_text("sta00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo00","564","27","85","87",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("7");
            var rdo00_innerdataset = new nexacro.NormalDataset("rdo00_innerdataset", obj);
            rdo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(rdo00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk00","469","132","95","42",null,null,null,null,null,null,this);
            obj.set_background("aliceblue");
            obj.set_readonly("false");
            obj.set_taborder("10");
            obj.set_text("chk00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Menu("mnu00","353","208","260","40",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_taborder("11");
            obj.set_userdatacolumn("userdatacolumn");
            var mnu00_innerdataset = new nexacro.NormalDataset("mnu00_innerdataset", obj);
            mnu00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "captioncolumn","size" : "256"},{"id" : "checkboxcolumn","size" : "256"},{"id" : "enablecolumn","size" : "256"},{"id" : "hotkeycolumn","size" : "256"},{"id" : "iconcolumn","size" : "256"},{"id" : "idcolumn","size" : "256"},{"id" : "levelcolumn","size" : "256"},{"id" : "userdatacolumn","size" : "256"}]},"Rows" : [{"captioncolumn" : "Menu1","levelcolumn" : "0"},{"captioncolumn" : "Menu2","levelcolumn" : "0"},{"captioncolumn" : "Menu3","levelcolumn" : "1"},{"captioncolumn" : "Menu4","levelcolumn" : "0"},{"captioncolumn" : "Menu5","levelcolumn" : "1"}]});
            obj.set_innerdataset(mnu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","353","263","256","104",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_tabindex("0");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            obj.set_url("sample::event_sub.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00","169","387","172","75",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("grb00");
            this.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("img00","362","387","118","68",null,null,null,null,null,null,this);
            obj.set_image("url(\'theme::blue/images/btn_TF_Close_O.png\')");
            obj.set_taborder("14");
            obj.set_text("img00");
            this.addChild(obj.name, obj);

            obj = new nexacro.ProgressBar("pgb00","499","387","225","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("pgb00");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("lst00","629","208","250","154",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_taborder("16");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"34\" id=\"body\" width=\"100%\"><Cell edittype=\"text\" height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell edittype=\"text\" height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBoxSet("CheckBoxSet00","754","27","95","87",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_taborder("17");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.TextField("TextField00","31","484","130","55",null,null,null,null,null,null,this);
            obj.set_labeltext("TextField00");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new nexacro.MultiLineTextField("MultiLineTextField00","175","484","162","55",null,null,null,null,null,null,this);
            obj.set_labeltext("MultiLineTextField00");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateField("DateField00","348","484","121","55",null,null,null,null,null,null,this);
            obj.set_labeltext("DateField00");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateRangePicker("DateRangePicker00","31","558","303","271",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new nexacro.MultiCombo("MultiCombo00","859","27","117","44",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("22");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel00","356","562","164","169",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem componentid=\"btn02\" id=\"PanelItem00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","356","738","82","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("FileUpload00","356","737","169","167",null,null,null,null,null,null,this);
            obj.set_border("1px solid  black");
            obj.set_itemcount("2");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileDownload("FileDownload00","480","484","98","55",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Sketch("Sketch00","740","387","205","146",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Sketch00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00_00","898","205","311","160",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_binddataset("ds00");
            obj.set_taborder("28");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"48\"/><Column size=\"60\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:Column1\" treelevel=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" displaytype=\"imagecontrol\" edittype=\"none\" expandshow=\"hide\" text=\"theme://images/btn_expand.png\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","39","829","203","87",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk_onlbuttonup_preventdefault","21","4","219","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("onlbuttonup - preventDefault ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00_00","18","156","232","39",null,null,null,null,null,null,this);
            obj.set_popuptype("normal");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01_00","269","41","111","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("strEnableTouch","737","539","103","26",null,null,null,null,null,null,this);
            obj.set_background("chartreuse");
            obj.set_taborder("33");
            obj.set_text("ShowWindowLog");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta01","596","539","105","26",null,null,null,null,null,null,this);
            obj.set_background("aliceblue");
            obj.set_taborder("34");
            obj.set_text("LogClear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","955","387","163","146",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","110","137","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.TextArea("StaticLog","532","566","748","263",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("36");
            obj.set_textAlign("left");
            obj.getSetter("verticalAlign").set("top");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","270","89","112","33",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,829,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::event_sub.xfdl");
        };
        
        // User Script
        this.registerScript("event.xfdl", function(nexacro, system, trace, environment, application) {

        this._isdragged = false;
        window._log="";

        this.StaticLog.value ="";
        this.tracedata = function(obj,e)
        {
        	if (e.eventid == "oncontextmenu") alert("context");
        	if (e.eventid !="onmousemove" && e.eventid !="ontouchmove")
        		window._log += obj.name  + " :"+ e.eventid +"\n";

        	//if (!e.eventid.includes("onmouse") && !e.eventid.includes("ontouch"))
        	//	this.StaticLog.value += `obj.name:${obj.name} ${obj._type_name} ----> e.eventid:${e.eventid} e.button:${e.button} e.clickitem:${e.clickitem} e.clientx:${e.clientx} e.clienty:${e.clienty} e.canvasx:${e.canvasx} e.canvasy:${e.canvasy} \n` ;

        	//if (!e.eventid.includes("onmouse") && !e.eventid.includes("ontouch"))
        		trace ( " obj.name:"+ obj.name + "("+ obj._type_name+ ") e.eventid:" + e.eventid + " e.button:" + e.button + " e.clickitem:"+ e.clickitem + " e.clientx:"+ e.clientx + " e.clienty:"+ e.clienty + " e.canvasx:"+ e.canvasx + " e.canvasy:"+e.canvasy ) ;

        	if (this.chk_onlbuttonup_preventdefault.value && e.eventid == "onlbuttonup")
        	{
        		e.preventDefault();
        	}

        	if (this._isdragged == true && e.eventid =="ondrop")
        	{
        		this._isdragged = false;
        		return true;
        	}

        	if (obj.name == "btn00" && e.eventid =="ondrag")
        	{
        		this._isdragged = true;
        		return true;
        	}


        };



        this.edt00_oneditclick = function(obj,e)
        {

        };

        this.btn03_onclick = function(obj,e)
        {
        	this.chk00.set_value(true);
        };

        this.event_onload = function(obj,e)
        {
        	this.strEnableTouch.text = "enabletouchevent: "+nexacro.getEnvironment().enabletouchevent ;
        };

        this.btn01_00_ondblclick = function(obj,e)
        {
        	alert("btn01_00_ondblclick");
        };

        this.strEnableTouch_onclick = function(obj,e)
        {
        	alert(window._log );
        };

        this.sta01_onclick = function(obj,e)
        {
        	window._log="";
        	this.StaticLog.value ="";
        	//var elems = document.getElementsByName("viewport");
        	//if (elems)
        	//	alert(elems[0].content);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.tracedata,this);
            this.addEventHandler("onload",this.event_onload,this);
            this.btn00.addEventHandler("onclick",this.tracedata,this);
            this.btn00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.btn00.addEventHandler("ondblclick",this.tracedata,this);
            this.btn00.addEventHandler("ondrag",this.tracedata,this);
            this.btn00.addEventHandler("ondragenter",this.tracedata,this);
            this.btn00.addEventHandler("ondragleave",this.tracedata,this);
            this.btn00.addEventHandler("ondragmove",this.tracedata,this);
            this.btn00.addEventHandler("ondrop",this.tracedata,this);
            this.btn00.addEventHandler("onkillfocus",this.tracedata,this);
            this.btn00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.btn00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.btn00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.btn00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.btn00.addEventHandler("onsetfocus",this.tracedata,this);
            this.btn00.addEventHandler("ontouchend",this.tracedata,this);
            this.btn00.addEventHandler("ontouchmove",this.tracedata,this);
            this.btn00.addEventHandler("ontouchstart",this.tracedata,this);
            this.btn01.addEventHandler("onclick",this.tracedata,this);
            this.btn01.addEventHandler("oncontextmenu",this.tracedata,this);
            this.btn01.addEventHandler("ondblclick",this.tracedata,this);
            this.btn01.addEventHandler("ondrag",this.tracedata,this);
            this.btn01.addEventHandler("ondragenter",this.tracedata,this);
            this.btn01.addEventHandler("ondragleave",this.tracedata,this);
            this.btn01.addEventHandler("ondragmove",this.tracedata,this);
            this.btn01.addEventHandler("ondrop",this.tracedata,this);
            this.btn01.addEventHandler("onkillfocus",this.tracedata,this);
            this.btn01.addEventHandler("onlbuttondown",this.tracedata,this);
            this.btn01.addEventHandler("onlbuttonup",this.tracedata,this);
            this.btn01.addEventHandler("onmousemove",this.tracedata,this);
            this.btn01.addEventHandler("onrbuttondown",this.tracedata,this);
            this.btn01.addEventHandler("onrbuttonup",this.tracedata,this);
            this.btn01.addEventHandler("onsetfocus",this.tracedata,this);
            this.btn01.addEventHandler("ontouchend",this.tracedata,this);
            this.btn01.addEventHandler("ontouchmove",this.tracedata,this);
            this.btn01.addEventHandler("ontouchstart",this.tracedata,this);
            this.cal00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.cal00.addEventHandler("ondayclick",this.tracedata,this);
            this.cal00.addEventHandler("ondrag",this.tracedata,this);
            this.cal00.addEventHandler("ondragenter",this.tracedata,this);
            this.cal00.addEventHandler("ondragleave",this.tracedata,this);
            this.cal00.addEventHandler("ondragmove",this.tracedata,this);
            this.cal00.addEventHandler("ondrop",this.tracedata,this);
            this.cal00.addEventHandler("ondropdown",this.tracedata,this);
            this.cal00.addEventHandler("onkillfocus",this.tracedata,this);
            this.cal00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.cal00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.cal00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.cal00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.cal00.addEventHandler("onsetfocus",this.tracedata,this);
            this.cal00.addEventHandler("ontouchend",this.tracedata,this);
            this.cal00.addEventHandler("ontouchmove",this.tracedata,this);
            this.cal00.addEventHandler("ontouchstart",this.tracedata,this);
            this.grd00.addEventHandler("oncellclick",this.tracedata,this);
            this.grd00.addEventHandler("oncelldblclick",this.tracedata,this);
            this.grd00.addEventHandler("onclick",this.tracedata,this);
            this.grd00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.grd00.addEventHandler("ondrag",this.tracedata,this);
            this.grd00.addEventHandler("ondragenter",this.tracedata,this);
            this.grd00.addEventHandler("ondragleave",this.tracedata,this);
            this.grd00.addEventHandler("ondragmove",this.tracedata,this);
            this.grd00.addEventHandler("ondrop",this.tracedata,this);
            this.grd00.addEventHandler("ondropdown",this.tracedata,this);
            this.grd00.addEventHandler("onenterdown",this.tracedata,this);
            this.grd00.addEventHandler("onheadclick",this.tracedata,this);
            this.grd00.addEventHandler("onkillfocus",this.tracedata,this);
            this.grd00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.grd00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.grd00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.grd00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.grd00.addEventHandler("onselectchanged",this.tracedata,this);
            this.grd00.addEventHandler("onsetfocus",this.tracedata,this);
            this.grd00.addEventHandler("ontouchend",this.tracedata,this);
            this.grd00.addEventHandler("ontouchmove",this.tracedata,this);
            this.grd00.addEventHandler("ontouchstart",this.tracedata,this);
            this.cbo00.addEventHandler("canitemchange",this.tracedata,this);
            this.cbo00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.cbo00.addEventHandler("ondrag",this.tracedata,this);
            this.cbo00.addEventHandler("ondragenter",this.tracedata,this);
            this.cbo00.addEventHandler("ondragleave",this.tracedata,this);
            this.cbo00.addEventHandler("ondragmove",this.tracedata,this);
            this.cbo00.addEventHandler("ondrop",this.tracedata,this);
            this.cbo00.addEventHandler("ondropdown",this.tracedata,this);
            this.cbo00.addEventHandler("onitemchanged",this.tracedata,this);
            this.cbo00.addEventHandler("onitemclick",this.tracedata,this);
            this.cbo00.addEventHandler("onkillfocus",this.tracedata,this);
            this.cbo00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.cbo00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.cbo00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.cbo00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.cbo00.addEventHandler("onsetfocus",this.tracedata,this);
            this.cbo00.addEventHandler("ontouchend",this.tracedata,this);
            this.cbo00.addEventHandler("ontouchmove",this.tracedata,this);
            this.cbo00.addEventHandler("ontouchstart",this.tracedata,this);
            this.lsb00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.lsb00.addEventHandler("ondrag",this.tracedata,this);
            this.lsb00.addEventHandler("ondragenter",this.tracedata,this);
            this.lsb00.addEventHandler("ondragleave",this.tracedata,this);
            this.lsb00.addEventHandler("ondragmove",this.tracedata,this);
            this.lsb00.addEventHandler("ondrop",this.tracedata,this);
            this.lsb00.addEventHandler("onitemchanged",this.tracedata,this);
            this.lsb00.addEventHandler("onitemclick",this.tracedata,this);
            this.lsb00.addEventHandler("onkillfocus",this.tracedata,this);
            this.lsb00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.lsb00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.lsb00.addEventHandler("onsetfocus",this.tracedata,this);
            this.lsb00.addEventHandler("ontouchend",this.tracedata,this);
            this.lsb00.addEventHandler("ontouchmove",this.tracedata,this);
            this.lsb00.addEventHandler("ontouchstart",this.tracedata,this);
            this.spn00.addEventHandler("onchanged",this.tracedata,this);
            this.spn00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.spn00.addEventHandler("ondrag",this.tracedata,this);
            this.spn00.addEventHandler("ondragenter",this.tracedata,this);
            this.spn00.addEventHandler("ondragleave",this.tracedata,this);
            this.spn00.addEventHandler("ondragmove",this.tracedata,this);
            this.spn00.addEventHandler("ondrop",this.tracedata,this);
            this.spn00.addEventHandler("onkillfocus",this.tracedata,this);
            this.spn00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.spn00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.spn00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.spn00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.spn00.addEventHandler("onsetfocus",this.tracedata,this);
            this.spn00.addEventHandler("onspin",this.tracedata,this);
            this.spn00.addEventHandler("ontouchend",this.tracedata,this);
            this.spn00.addEventHandler("ontouchmove",this.tracedata,this);
            this.spn00.addEventHandler("ontouchstart",this.tracedata,this);
            this.edt00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.edt00.addEventHandler("ondrag",this.tracedata,this);
            this.edt00.addEventHandler("ondragenter",this.tracedata,this);
            this.edt00.addEventHandler("ondragleave",this.tracedata,this);
            this.edt00.addEventHandler("ondragmove",this.tracedata,this);
            this.edt00.addEventHandler("ondrop",this.tracedata,this);
            this.edt00.addEventHandler("oneditclick",this.tracedata,this);
            this.edt00.addEventHandler("onkillfocus",this.tracedata,this);
            this.edt00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.edt00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.edt00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.edt00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.edt00.addEventHandler("onsetfocus",this.tracedata,this);
            this.edt00.addEventHandler("ontouchend",this.tracedata,this);
            this.edt00.addEventHandler("ontouchmove",this.tracedata,this);
            this.edt00.addEventHandler("ontouchstart",this.tracedata,this);
            this.sta00.addEventHandler("onclick",this.tracedata,this);
            this.sta00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.sta00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.sta00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.sta00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.sta00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.sta00.addEventHandler("ontouchend",this.tracedata,this);
            this.sta00.addEventHandler("ontouchmove",this.tracedata,this);
            this.sta00.addEventHandler("ontouchstart",this.tracedata,this);
            this.rdo00.addEventHandler("canitemchange",this.tracedata,this);
            this.rdo00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.rdo00.addEventHandler("ondrag",this.tracedata,this);
            this.rdo00.addEventHandler("ondragenter",this.tracedata,this);
            this.rdo00.addEventHandler("ondragleave",this.tracedata,this);
            this.rdo00.addEventHandler("ondragmove",this.tracedata,this);
            this.rdo00.addEventHandler("ondrop",this.tracedata,this);
            this.rdo00.addEventHandler("onitemchanged",this.tracedata,this);
            this.rdo00.addEventHandler("onitemclick",this.tracedata,this);
            this.rdo00.addEventHandler("onkillfocus",this.tracedata,this);
            this.rdo00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.rdo00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.rdo00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.rdo00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.rdo00.addEventHandler("onsetfocus",this.tracedata,this);
            this.rdo00.addEventHandler("ontouchend",this.tracedata,this);
            this.rdo00.addEventHandler("ontouchmove",this.tracedata,this);
            this.rdo00.addEventHandler("ontouchstart",this.tracedata,this);
            this.chk00.addEventHandler("onchanged",this.tracedata,this);
            this.chk00.addEventHandler("onclick",this.tracedata,this);
            this.chk00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.chk00.addEventHandler("ondrag",this.tracedata,this);
            this.chk00.addEventHandler("ondragenter",this.tracedata,this);
            this.chk00.addEventHandler("ondragleave",this.tracedata,this);
            this.chk00.addEventHandler("ondragmove",this.tracedata,this);
            this.chk00.addEventHandler("ondrop",this.tracedata,this);
            this.chk00.addEventHandler("onkillfocus",this.tracedata,this);
            this.chk00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.chk00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.chk00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.chk00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.chk00.addEventHandler("onsetfocus",this.tracedata,this);
            this.chk00.addEventHandler("ontouchend",this.tracedata,this);
            this.chk00.addEventHandler("ontouchmove",this.tracedata,this);
            this.chk00.addEventHandler("ontouchstart",this.tracedata,this);
            this.mnu00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.mnu00.addEventHandler("ondrag",this.tracedata,this);
            this.mnu00.addEventHandler("ondragenter",this.tracedata,this);
            this.mnu00.addEventHandler("ondragleave",this.tracedata,this);
            this.mnu00.addEventHandler("ondragmove",this.tracedata,this);
            this.mnu00.addEventHandler("ondrop",this.tracedata,this);
            this.mnu00.addEventHandler("onkillfocus",this.tracedata,this);
            this.mnu00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.mnu00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.mnu00.addEventHandler("onmenuclick",this.tracedata,this);
            this.mnu00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.mnu00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.mnu00.addEventHandler("onsetfocus",this.tracedata,this);
            this.mnu00.addEventHandler("ontouchend",this.tracedata,this);
            this.mnu00.addEventHandler("ontouchmove",this.tracedata,this);
            this.mnu00.addEventHandler("ontouchstart",this.tracedata,this);
            this.tab00.addEventHandler("onchanged",this.tracedata,this);
            this.tab00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.tab00.addEventHandler("ondrag",this.tracedata,this);
            this.tab00.addEventHandler("ondragenter",this.tracedata,this);
            this.tab00.addEventHandler("ondragleave",this.tracedata,this);
            this.tab00.addEventHandler("ondragmove",this.tracedata,this);
            this.tab00.addEventHandler("ondrop",this.tracedata,this);
            this.tab00.addEventHandler("onextrabuttonclick",this.tracedata,this);
            this.tab00.addEventHandler("onkillfocus",this.tracedata,this);
            this.tab00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.tab00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.tab00.addEventHandler("onmouseenter",this.tracedata,this);
            this.tab00.addEventHandler("onmouseleave",this.tracedata,this);
            this.tab00.addEventHandler("onmousemove",this.tracedata,this);
            this.tab00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.tab00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.tab00.addEventHandler("onsetfocus",this.tracedata,this);
            this.tab00.addEventHandler("ontouchend",this.tracedata,this);
            this.tab00.addEventHandler("ontouchmove",this.tracedata,this);
            this.tab00.addEventHandler("ontouchstart",this.tracedata,this);
            this.tab00.Tabpage1.addEventHandler("ontouchend",this.tracedata,this);
            this.tab00.Tabpage1.addEventHandler("ontouchmove",this.tracedata,this);
            this.tab00.Tabpage1.addEventHandler("ontouchstart",this.tracedata,this);
            this.tab00.Tabpage2.addEventHandler("ontouchend",this.tracedata,this);
            this.tab00.Tabpage2.addEventHandler("ontouchmove",this.tracedata,this);
            this.tab00.Tabpage2.addEventHandler("ontouchstart",this.tracedata,this);
            this.grb00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.grb00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.grb00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.grb00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.grb00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.grb00.addEventHandler("ontouchend",this.tracedata,this);
            this.grb00.addEventHandler("ontouchmove",this.tracedata,this);
            this.grb00.addEventHandler("ontouchstart",this.tracedata,this);
            this.img00.addEventHandler("onclick",this.tracedata,this);
            this.img00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.img00.addEventHandler("ondrag",this.tracedata,this);
            this.img00.addEventHandler("ondragenter",this.tracedata,this);
            this.img00.addEventHandler("ondragleave",this.tracedata,this);
            this.img00.addEventHandler("ondragmove",this.tracedata,this);
            this.img00.addEventHandler("ondrop",this.tracedata,this);
            this.img00.addEventHandler("onkillfocus",this.tracedata,this);
            this.img00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.img00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.img00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.img00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.img00.addEventHandler("onsetfocus",this.tracedata,this);
            this.img00.addEventHandler("ontouchend",this.tracedata,this);
            this.img00.addEventHandler("ontouchmove",this.tracedata,this);
            this.img00.addEventHandler("ontouchstart",this.tracedata,this);
            this.pgb00.addEventHandler("onclick",this.tracedata,this);
            this.pgb00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.pgb00.addEventHandler("ondrag",this.tracedata,this);
            this.pgb00.addEventHandler("ondragenter",this.tracedata,this);
            this.pgb00.addEventHandler("ondragleave",this.tracedata,this);
            this.pgb00.addEventHandler("ondragmove",this.tracedata,this);
            this.pgb00.addEventHandler("ondrop",this.tracedata,this);
            this.pgb00.addEventHandler("onkillfocus",this.tracedata,this);
            this.pgb00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.pgb00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.pgb00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.pgb00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.pgb00.addEventHandler("onsetfocus",this.tracedata,this);
            this.pgb00.addEventHandler("ontouchend",this.tracedata,this);
            this.pgb00.addEventHandler("ontouchmove",this.tracedata,this);
            this.pgb00.addEventHandler("ontouchstart",this.tracedata,this);
            this.lst00.addEventHandler("onbandclick",this.tracedata,this);
            this.lst00.addEventHandler("onbandexpandclick",this.tracedata,this);
            this.lst00.addEventHandler("oncellclick",this.tracedata,this);
            this.lst00.addEventHandler("oncellexpandclick",this.tracedata,this);
            this.lst00.addEventHandler("onclick",this.tracedata,this);
            this.lst00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.lst00.addEventHandler("ondrag",this.tracedata,this);
            this.lst00.addEventHandler("ondragenter",this.tracedata,this);
            this.lst00.addEventHandler("ondragleave",this.tracedata,this);
            this.lst00.addEventHandler("ondragmove",this.tracedata,this);
            this.lst00.addEventHandler("ondrop",this.tracedata,this);
            this.lst00.addEventHandler("ondropdown",this.tracedata,this);
            this.lst00.addEventHandler("onenterdown",this.tracedata,this);
            this.lst00.addEventHandler("onkillfocus",this.tracedata,this);
            this.lst00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.lst00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.lst00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.lst00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.lst00.addEventHandler("onselectchanged",this.tracedata,this);
            this.lst00.addEventHandler("onsetfocus",this.tracedata,this);
            this.lst00.addEventHandler("ontouchend",this.tracedata,this);
            this.lst00.addEventHandler("ontouchmove",this.tracedata,this);
            this.lst00.addEventHandler("ontouchstart",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ondrag",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ondragenter",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ondragleave",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ondragmove",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ondrop",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onitemchanged",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onitemclick",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onkillfocus",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("onsetfocus",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ontouchend",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ontouchmove",this.tracedata,this);
            this.CheckBoxSet00.addEventHandler("ontouchstart",this.tracedata,this);
            this.TextField00.addEventHandler("onchanged",this.tracedata,this);
            this.TextField00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.TextField00.addEventHandler("ondrag",this.tracedata,this);
            this.TextField00.addEventHandler("ondragenter",this.tracedata,this);
            this.TextField00.addEventHandler("ondragleave",this.tracedata,this);
            this.TextField00.addEventHandler("ondragmove",this.tracedata,this);
            this.TextField00.addEventHandler("ondrop",this.tracedata,this);
            this.TextField00.addEventHandler("onkillfocus",this.tracedata,this);
            this.TextField00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.TextField00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.TextField00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.TextField00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.TextField00.addEventHandler("onsetfocus",this.tracedata,this);
            this.TextField00.addEventHandler("ontouchend",this.tracedata,this);
            this.TextField00.addEventHandler("ontouchmove",this.tracedata,this);
            this.TextField00.addEventHandler("ontouchstart",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onchanged",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ondrag",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ondragenter",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ondragleave",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ondragmove",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ondrop",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onkillfocus",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("onsetfocus",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ontouchend",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ontouchmove",this.tracedata,this);
            this.MultiLineTextField00.addEventHandler("ontouchstart",this.tracedata,this);
            this.DateField00.addEventHandler("onchanged",this.tracedata,this);
            this.DateField00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.DateField00.addEventHandler("ondayclick",this.tracedata,this);
            this.DateField00.addEventHandler("ondrag",this.tracedata,this);
            this.DateField00.addEventHandler("ondragenter",this.tracedata,this);
            this.DateField00.addEventHandler("ondragleave",this.tracedata,this);
            this.DateField00.addEventHandler("ondragmove",this.tracedata,this);
            this.DateField00.addEventHandler("ondrop",this.tracedata,this);
            this.DateField00.addEventHandler("ondropdown",this.tracedata,this);
            this.DateField00.addEventHandler("onkillfocus",this.tracedata,this);
            this.DateField00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.DateField00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.DateField00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.DateField00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.DateField00.addEventHandler("onsetfocus",this.tracedata,this);
            this.DateField00.addEventHandler("ontouchend",this.tracedata,this);
            this.DateField00.addEventHandler("ontouchmove",this.tracedata,this);
            this.DateField00.addEventHandler("ontouchstart",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onchanged",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondayclick",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondrag",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondragenter",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondragleave",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondragmove",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ondrop",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onkillfocus",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("onsetfocus",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ontouchend",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ontouchmove",this.tracedata,this);
            this.DateRangePicker00.addEventHandler("ontouchstart",this.tracedata,this);
            this.MultiCombo00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ondrag",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ondragenter",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ondragleave",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ondragmove",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ondrop",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onitemchanged",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onitemclick",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onkillfocus",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.MultiCombo00.addEventHandler("onsetfocus",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ontouchend",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ontouchmove",this.tracedata,this);
            this.MultiCombo00.addEventHandler("ontouchstart",this.tracedata,this);
            this.Panel00.addEventHandler("onclick",this.tracedata,this);
            this.Panel00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.Panel00.addEventHandler("ondrag",this.tracedata,this);
            this.Panel00.addEventHandler("ondragenter",this.tracedata,this);
            this.Panel00.addEventHandler("ondragleave",this.tracedata,this);
            this.Panel00.addEventHandler("ondragmove",this.tracedata,this);
            this.Panel00.addEventHandler("ondrop",this.tracedata,this);
            this.Panel00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.Panel00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.Panel00.addEventHandler("ontouchend",this.tracedata,this);
            this.Panel00.addEventHandler("ontouchmove",this.tracedata,this);
            this.Panel00.addEventHandler("ontouchstart",this.tracedata,this);
            this.btn02.addEventHandler("onclick",this.tracedata,this);
            this.btn02.addEventHandler("oncontextmenu",this.tracedata,this);
            this.btn02.addEventHandler("onkillfocus",this.tracedata,this);
            this.btn02.addEventHandler("onlbuttondown",this.tracedata,this);
            this.btn02.addEventHandler("onlbuttonup",this.tracedata,this);
            this.btn02.addEventHandler("onrbuttondown",this.tracedata,this);
            this.btn02.addEventHandler("onrbuttonup",this.tracedata,this);
            this.btn02.addEventHandler("onsetfocus",this.tracedata,this);
            this.btn02.addEventHandler("ontouchend",this.tracedata,this);
            this.btn02.addEventHandler("ontouchmove",this.tracedata,this);
            this.btn02.addEventHandler("ontouchstart",this.tracedata,this);
            this.FileUpload00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.FileUpload00.addEventHandler("onfindclick",this.tracedata,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.tracedata,this);
            this.FileUpload00.addEventHandler("onitemclick",this.tracedata,this);
            this.FileUpload00.addEventHandler("onkillfocus",this.tracedata,this);
            this.FileUpload00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.FileUpload00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.FileUpload00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.FileUpload00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.FileUpload00.addEventHandler("onsetfocus",this.tracedata,this);
            this.FileUpload00.addEventHandler("ontouchend",this.tracedata,this);
            this.FileUpload00.addEventHandler("ontouchmove",this.tracedata,this);
            this.FileUpload00.addEventHandler("ontouchstart",this.tracedata,this);
            this.FileDownload00.addEventHandler("onclick",this.tracedata,this);
            this.FileDownload00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.FileDownload00.addEventHandler("onkillfocus",this.tracedata,this);
            this.FileDownload00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.FileDownload00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.FileDownload00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.FileDownload00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.FileDownload00.addEventHandler("onsetfocus",this.tracedata,this);
            this.FileDownload00.addEventHandler("ontouchend",this.tracedata,this);
            this.FileDownload00.addEventHandler("ontouchmove",this.tracedata,this);
            this.FileDownload00.addEventHandler("ontouchstart",this.tracedata,this);
            this.Sketch00.addEventHandler("onclick",this.tracedata,this);
            this.Sketch00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.Sketch00.addEventHandler("ondrag",this.tracedata,this);
            this.Sketch00.addEventHandler("ondragenter",this.tracedata,this);
            this.Sketch00.addEventHandler("ondragleave",this.tracedata,this);
            this.Sketch00.addEventHandler("ondragmove",this.tracedata,this);
            this.Sketch00.addEventHandler("ondrop",this.tracedata,this);
            this.Sketch00.addEventHandler("onkillfocus",this.tracedata,this);
            this.Sketch00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.Sketch00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.Sketch00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.Sketch00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.Sketch00.addEventHandler("onsetfocus",this.tracedata,this);
            this.Sketch00.addEventHandler("ontouchend",this.tracedata,this);
            this.Sketch00.addEventHandler("ontouchmove",this.tracedata,this);
            this.Sketch00.addEventHandler("ontouchstart",this.tracedata,this);
            this.grd00_00.addEventHandler("oncellclick",this.tracedata,this);
            this.grd00_00.addEventHandler("oncelldblclick",this.tracedata,this);
            this.grd00_00.addEventHandler("onclick",this.tracedata,this);
            this.grd00_00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.grd00_00.addEventHandler("ondrag",this.tracedata,this);
            this.grd00_00.addEventHandler("ondragenter",this.tracedata,this);
            this.grd00_00.addEventHandler("ondragleave",this.tracedata,this);
            this.grd00_00.addEventHandler("ondragmove",this.tracedata,this);
            this.grd00_00.addEventHandler("ondrop",this.tracedata,this);
            this.grd00_00.addEventHandler("onenterdown",this.tracedata,this);
            this.grd00_00.addEventHandler("onheadclick",this.tracedata,this);
            this.grd00_00.addEventHandler("onkillfocus",this.tracedata,this);
            this.grd00_00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.grd00_00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.grd00_00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.grd00_00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.grd00_00.addEventHandler("onselectchanged",this.tracedata,this);
            this.grd00_00.addEventHandler("onsetfocus",this.tracedata,this);
            this.grd00_00.addEventHandler("ontouchend",this.tracedata,this);
            this.grd00_00.addEventHandler("ontouchmove",this.tracedata,this);
            this.grd00_00.addEventHandler("ontouchstart",this.tracedata,this);
            this.txa00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.txa00.addEventHandler("ondrag",this.tracedata,this);
            this.txa00.addEventHandler("ondragenter",this.tracedata,this);
            this.txa00.addEventHandler("ondragleave",this.tracedata,this);
            this.txa00.addEventHandler("ondragmove",this.tracedata,this);
            this.txa00.addEventHandler("ondrop",this.tracedata,this);
            this.txa00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.txa00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.txa00.addEventHandler("ontouchend",this.tracedata,this);
            this.txa00.addEventHandler("ontouchmove",this.tracedata,this);
            this.txa00.addEventHandler("ontouchstart",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("oncontextmenu",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("onrbuttondown",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("onrbuttonup",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("ontouchend",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("ontouchmove",this.tracedata,this);
            this.chk_onlbuttonup_preventdefault.addEventHandler("ontouchstart",this.tracedata,this);
            this.cal00_00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.cal00_00.addEventHandler("ondayclick",this.tracedata,this);
            this.cal00_00.addEventHandler("ondrag",this.tracedata,this);
            this.cal00_00.addEventHandler("ondragenter",this.tracedata,this);
            this.cal00_00.addEventHandler("ondragleave",this.tracedata,this);
            this.cal00_00.addEventHandler("ondragmove",this.tracedata,this);
            this.cal00_00.addEventHandler("ondrop",this.tracedata,this);
            this.cal00_00.addEventHandler("ondropdown",this.tracedata,this);
            this.cal00_00.addEventHandler("onkillfocus",this.tracedata,this);
            this.cal00_00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.cal00_00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.cal00_00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.cal00_00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.cal00_00.addEventHandler("onsetfocus",this.tracedata,this);
            this.cal00_00.addEventHandler("ontouchend",this.tracedata,this);
            this.cal00_00.addEventHandler("ontouchmove",this.tracedata,this);
            this.cal00_00.addEventHandler("ontouchstart",this.tracedata,this);
            this.btn01_00.addEventHandler("onclick",this.tracedata,this);
            this.btn01_00.addEventHandler("oncontextmenu",this.tracedata,this);
            this.btn01_00.addEventHandler("ondblclick",this.btn01_00_ondblclick,this);
            this.btn01_00.addEventHandler("ondrag",this.tracedata,this);
            this.btn01_00.addEventHandler("ondragenter",this.tracedata,this);
            this.btn01_00.addEventHandler("ondragleave",this.tracedata,this);
            this.btn01_00.addEventHandler("ondragmove",this.tracedata,this);
            this.btn01_00.addEventHandler("ondrop",this.tracedata,this);
            this.btn01_00.addEventHandler("onkillfocus",this.tracedata,this);
            this.btn01_00.addEventHandler("onlbuttondown",this.tracedata,this);
            this.btn01_00.addEventHandler("onlbuttonup",this.tracedata,this);
            this.btn01_00.addEventHandler("onmousemove",this.tracedata,this);
            this.btn01_00.addEventHandler("onrbuttondown",this.tracedata,this);
            this.btn01_00.addEventHandler("onrbuttonup",this.tracedata,this);
            this.btn01_00.addEventHandler("onsetfocus",this.tracedata,this);
            this.btn01_00.addEventHandler("ontouchend",this.tracedata,this);
            this.btn01_00.addEventHandler("ontouchmove",this.tracedata,this);
            this.btn01_00.addEventHandler("ontouchstart",this.tracedata,this);
            this.strEnableTouch.addEventHandler("onclick",this.strEnableTouch_onclick,this);
            this.strEnableTouch.addEventHandler("ontouchend",this.tracedata,this);
            this.strEnableTouch.addEventHandler("ontouchmove",this.tracedata,this);
            this.strEnableTouch.addEventHandler("ontouchstart",this.tracedata,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01.addEventHandler("ontouchend",this.tracedata,this);
            this.sta01.addEventHandler("ontouchmove",this.tracedata,this);
            this.sta01.addEventHandler("ontouchstart",this.tracedata,this);
            this.div00.addEventHandler("onclick",this.tracedata,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };

        this.loadIncludeScript("event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
