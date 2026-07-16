(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_scrollbartype("fixed fixed");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "DATE"}]},"Rows" : [{"Column0" : "1","Column1" : "가가","Column2" : "20180327041520"},{"Column0" : "2","Column1" : "나나","Column2" : "2222"},{"Column0" : "3","Column1" : "다다","Column2" : "3333"},{"Column0" : "4","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "5","Column1" : "마마","Column2" : "5555"},{"Column0" : "6","Column1" : "바바","Column2" : "6666"},{"Column0" : "7","Column1" : "사사","Column2" : "7777"},{"Column0" : "8","Column1" : "아아","Column2" : "8888"},{"Column0" : "9","Column1" : "자자","Column2" : "9999"},{"Column0" : "10","Column1" : "차차","Column2" : "10000"},{"Column0" : "11","Column1" : "가가","Column2" : "1111"},{"Column0" : "12","Column1" : "나나","Column2" : "2222"},{"Column0" : "13","Column1" : "다다","Column2" : "3333"},{"Column0" : "14","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "15","Column1" : "마마","Column2" : "5555"},{"Column0" : "16","Column1" : "바바","Column2" : "6666"},{"Column0" : "17","Column1" : "사사","Column2" : "7777"},{"Column0" : "18","Column1" : "아아","Column2" : "8888"},{"Column0" : "19","Column1" : "자자","Column2" : "9999"},{"Column0" : "20","Column1" : "차차","Column2" : "10000"},{"Column0" : "21","Column1" : "가가","Column2" : "1111"},{"Column0" : "22","Column1" : "나나","Column2" : "2222"},{"Column0" : "23","Column1" : "다다","Column2" : "3333"},{"Column0" : "24","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "25","Column1" : "마마","Column2" : "5555"},{"Column0" : "26","Column1" : "바바","Column2" : "6666"},{"Column0" : "27","Column1" : "사사","Column2" : "7777"},{"Column0" : "28","Column1" : "아아","Column2" : "8888"},{"Column0" : "29","Column1" : "자자","Column2" : "9999"},{"Column0" : "30","Column1" : "차차","Column2" : "10000"},{"Column0" : "31"},{"Column0" : "32"},{"Column0" : "33"},{"Column0" : "34"},{"Column0" : "35"},{"Column0" : "36"},{"Column0" : "37"},{"Column0" : "38"},{"Column0" : "39"},{"Column0" : "40"},{"Column0" : "41"},{"Column0" : "42"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.ListBox("lsb00","30","20","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","285","18","238","177",null,null,null,null,null,null,this);
            obj.set_background("burlywood");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","125","148","120","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","31","83","150","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("ds00");
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","545","28","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","45","218","150","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("ds00");
            obj.set_taborder("2");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00_00","545","88","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","256","250","237","148",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","159","88","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","613","324","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateRangePicker("DateRangePicker00","759","17","246","318",null,null,null,null,null,null,this);
            obj.set_direction("vertical");
            obj.set_headlinesize("10 50");
            obj.set_taborder("8");
            obj.set_type("single");
            obj.set_useheadline("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","55","272","330","106",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00","55","398","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Menu("mnu00","63","480","685","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","cal00","value","ds00","Column2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("listbox_scroll.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        this.PopupDiv00.trackPopup(100,100, 250, 150);
        	//alert(window._log);
        	//window._log = "";
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup(100,100, 500, 500);
        };

        this.trlog = function(obj,e)
        {
        	if (e.eventid !="onmousemove" && e.eventid !="ontouchmove")
        		window._log += "\n" + obj.name  + " :"+ e.eventid +"\n";
        };

        var count = 0;
        this.div00_onmousewheel = function(obj,e)
        {
        trace("mousewheel:" + obj.name  + " count :"+ count ++);
        	//return obj._wheel_bubble;
        };

        this.Form_Work_onload = function(obj,e)
        {

        /*
        	let row = this.ds00.addRow();
        	this.ds00.setColumn(row, 0, "form");

        	let len = this.components.length
        	for(let i = 0; i<len ;i++)
        	{
        	if (this.components[i]._type_name == "Div")
        		{
        		let row = this.ds00.addRow();
        		this.ds00.setColumn(row, 0, this.components[i].id);
        		}
        	}
        	*/

        };



        this.scrolltype_onclick = function(obj,e)
        {
        	let scrollobj ;
        	if (this.cbo00.value == "form")
        		scrollobj = this;
        	else
        		scrollobj = this[this.cbo00.value]? this[this.cbo00.value].form : this;
        	if (scrollobj)
        	{
        		scrollobj.scrolltype = this.rdo_scrolltype.value;
        	}
        };

        this.scrollbartype_onclick = function(obj,e)
        {
        	let scrollobj ;
        	if (this.cbo00.value == "form")
        		scrollobj = this;
        	else
        		scrollobj = this[this.cbo00.value]? this[this.cbo00.value].form : this;
        	if (scrollobj)
        	{
        		scrollobj.scrollbartype = this.rdo_scrollbartype_h.value + " " +  this.rdo_scrollbartype_v.value;
        	}
        };

        this.chk00_onclick = function(obj,e)
        {
        	if (this.cbo00.value == "form")
        		scrollobj = this;
        	else
        		scrollobj = this[this.cbo00.value]? this[this.cbo00.value].form : this;

        	scrollobj._wheel_bubble = this.chk00.value;
        	scrollobj.addEventHandler("onmousewheel", this.div00_onmousewheel, this);
        };






        this.Div00_div00_00_btn00_onclick = function(obj,e)
        {
        	this.Div00.move(this.Div00.left+ this.Div00.width, this.Div00.top+ this.Div00.height);
        };

        this.comp_onevent = function(obj,e)
        {
        return;
        	if (this.chklogscroll.value && e.eventid.indexOf("scroll") >= 0)
        		trace(e.eventid +  " name:" + obj.name + " type:" +obj._type_name + " e.pos:" + e.pos + " e.type:"+ e.type);

        	if (this.chklogwheel.value && e.eventid.indexOf("wheel") >= 0)
        		trace(e.eventid +  " name:" + obj.name + " type:" +obj._type_name + " e.amount:" + e.amount + " e.fromobject.name:"+e.fromobject.name);

        	if ((e.fromobject == obj && this.chkprevent.value) || (e.fromobject != obj && this.chkprevent_p.value))
        		e.preventDefault();

        	if (e.fromobject == obj && this.chkreturn.value)
        		return this.chkreturn.value;
        	else if (e.fromobject != obj && this.chkreturn_p.value)
        		return this.chkreturn_p.value;

        };


        this.btn00_onclick = function(obj,e)
        {
        	this.div00.visible = true;
        };

        this.cal00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onhscroll",this.comp_onevent,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.PopupDiv00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.DateRangePicker00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.cal00.addEventHandler("onchanged",this.cal00_onchanged,this);
        };

        this.loadIncludeScript("listbox_scroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
