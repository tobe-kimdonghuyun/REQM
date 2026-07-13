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
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "가가","Column2" : "1111"},{"Column0" : "2","Column1" : "나나","Column2" : "2222"},{"Column0" : "3","Column1" : "다다","Column2" : "3333"},{"Column0" : "4","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "5","Column1" : "마마","Column2" : "5555"},{"Column0" : "6","Column1" : "바바","Column2" : "6666"},{"Column0" : "7","Column1" : "사사","Column2" : "7777"},{"Column0" : "8","Column1" : "아아","Column2" : "8888"},{"Column0" : "9","Column1" : "자자","Column2" : "9999"},{"Column0" : "10","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "11","Column1" : "마마","Column2" : "5555"},{"Column0" : "12","Column1" : "바바","Column2" : "6666"},{"Column0" : "13","Column1" : "사사","Column2" : "7777"},{"Column0" : "14","Column1" : "아아","Column2" : "8888"},{"Column0" : "15","Column1" : "자자","Column2" : "9999"},{"Column0" : "16","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "17","Column1" : "마마","Column2" : "5555"},{"Column0" : "18","Column1" : "바바","Column2" : "6666"},{"Column0" : "19","Column1" : "사사","Column2" : "7777"},{"Column0" : "20","Column1" : "아아","Column2" : "8888"},{"Column0" : "21","Column1" : "자자","Column2" : "9999"},{"Column0" : "22","Column1" : "차차","Column2" : "10000"},{"Column0" : "23","Column1" : "마마","Column2" : "5555"},{"Column0" : "24","Column1" : "바바","Column2" : "6666"},{"Column0" : "25","Column1" : "사사","Column2" : "7777"},{"Column0" : "26","Column1" : "아아","Column2" : "8888"},{"Column0" : "27","Column1" : "자자","Column2" : "9999"},{"Column0" : "28","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "29","Column1" : "마마","Column2" : "5555"},{"Column0" : "30","Column1" : "마마","Column2" : "5555"},{"Column0" : "31","Column1" : "바바","Column2" : "6666"},{"Column0" : "32","Column1" : "사사","Column2" : "7777"},{"Column0" : "33","Column1" : "아아","Column2" : "8888"},{"Column0" : "34","Column1" : "자자","Column2" : "9999"},{"Column0" : "35","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "36","Column1" : "마마","Column2" : "5555"},{"Column0" : "37","Column1" : "바바","Column2" : "6666"},{"Column0" : "38","Column1" : "사사","Column2" : "7777"},{"Column0" : "39","Column1" : "아아","Column2" : "8888"},{"Column0" : "40","Column1" : "자자","Column2" : "9999"},{"Column0" : "41","Column1" : "차차","Column2" : "10000"},{"Column0" : "42","Column1" : "바바","Column2" : "6666"},{"Column0" : "43","Column1" : "사사","Column2" : "7777"},{"Column0" : "44","Column1" : "아아","Column2" : "8888"},{"Column0" : "45","Column1" : "자자","Column2" : "9999"},{"Column0" : "46","Column1" : "차차","Column2" : "10000"},{"Column0" : "47"},{"Column0" : "48"},{"Column0" : "49"},{"Column0" : "50"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Div("div00","42","18","328","145",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrollpropagation("false");
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","85","11","235","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("2");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","138","181","63","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("3");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","38","82","278","89",null,null,null,null,null,null,this.div00.form);
            obj.set_background("aliceblue");
            obj.set_taborder("2");
            obj.set_text("div00_1");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","34","22",null,"50","46",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("4");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_01","10","11","63","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("1");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","452","343","238","177",null,null,null,null,null,null,this);
            obj.set_background("burlywood");
            obj.getSetter("formscrollpropagation").set("false");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","125","148","120","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            obj.set_visible("false");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","31","83","150","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("ds00");
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_text("cbo00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","509","250","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("trackPopup PopupDiv");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","509","94","123","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("visible = false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","509","146","123","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("visible = true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","640","95","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","42","363","156","202",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrollpropagation("false");
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","85","11",null,"37","6",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("5");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","138","181","63","37",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("6");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","38","82",null,"89","5",null,null,null,null,null,this.div00_00.form);
            obj.set_background("aliceblue");
            obj.set_taborder("2");
            obj.set_text("div00_2");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","34","22",null,"50","46",null,null,null,null,null,this.div00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("7");
            this.div00_00.form.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_01","40","173","380","102",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrollpropagation("false");
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","85","11","235","37",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("0");
            obj.set_text("2");
            this.div00_01.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","138","181","63","37",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("1");
            obj.set_text("3");
            this.div00_01.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","38","82","278","89",null,null,null,null,null,null,this.div00_01.form);
            obj.set_background("aliceblue");
            obj.set_taborder("2");
            obj.set_text("div00_1");
            this.div00_01.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","34","22",null,"50","46",null,null,null,null,null,this.div00_01.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("4");
            this.div00_01.form.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_01","10","11","63","37",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("3");
            obj.set_text("1");
            this.div00_01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("default");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form.div00.form,function(p){});
            this.div00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_01.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_01.form.div00.form,function(p){});
            this.div00_01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_01.form
            obj = new nexacro.Layout("default","",0,0,this.div00_01.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("div_fluid.xfdl", function(nexacro, system, trace, environment, application) {


        this.changeScrollType = function(newvalue)
        {
        	let len = this.components.length;
        	for (let i =0; i< len; i++)
        	{

        		if (this.components[i] instanceof nexacro.Div)
        		{
        			trace("this.components[i]: "+ this.components[i].name + " old:" + this.components[i].formscrolltype + " new:" + newvalue);
        			this.components[i].formscrolltype = newvalue;
        		}
        		else if (this.components[i].onmousewheel)
        		{
        			if (!(this.components[i] instanceof nexacro.Combo) && !(this.components[i] instanceof nexacro.MultiCombo) &&   !(this.components[i] instanceof nexacro.DateRangePicker) && !(this.components[i] instanceof nexacro.PopupDateRangePicker))
        			{
        				trace("this.components[i]: "+ this.components[i].name + " old:" + this.components[i].scrolltype + " new:" + newvalue);
        				this.components[i].scrolltype = newvalue;
        			}
        		}
        	}
        };


        this.changeScrollBarType = function(newvalue)
        {
        	let len = this.components.length;
        	for (let i =0; i< len; i++)
        	{
        		if (this.components[i] instanceof nexacro.Div)
        		{
        		   trace("this.components[i]: "+ this.components[i].name + " old:" + this.components[i].formscrollbartype + " new:" + newvalue);
        			this.components[i].formscrollbartype = newvalue;
        		}
        		else if (this.components[i].onmousewheel)
        		{
        			if (!(this.components[i] instanceof nexacro.Combo) && !(this.components[i] instanceof nexacro.MultiCombo) &&   !(this.components[i] instanceof nexacro.DateRangePicker) && !(this.components[i] instanceof nexacro.PopupDateRangePicker))
        			{
        				trace("this.components[i]: "+ this.components[i].name + " old:" + this.components[i].scrollbartype + " new:" + newvalue);
        				this.components[i].scrollbartype = newvalue;
        			}
        		}
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        this.PopupDiv00.trackPopup(100,100);
        	//alert(window._log);
        	//window._log = "";
        };

        this.Button01_onclick = function(obj,e)
        {

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
        this.div00.form.addEventHandler("onmousewheel", this.comp_onevent, this);
        this.PopupDiv00.form.addEventHandler("onmousewheel", this.comp_onevent, this);
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
        	//if (this.chklogscroll.value && e.eventid.indexOf("scroll") >= 0)
        		trace(e.eventid +  " name:" + obj.name + " type:" +obj._type_name + " e.pos:" + e.pos + " e.type:"+ e.type);

        //	if (this.chklogwheel.value && e.eventid.indexOf("wheel") >= 0)
        		trace(e.eventid +  " name:" + obj.name + " type:" +obj._type_name + " e.amount:" + e.amount + " e.fromobject.name:"+e.fromobject.name);
        return;
        	if ((e.fromobject == obj && this.chkprevent.value) || (e.fromobject != obj && this.chkprevent_p.value))
        		e.preventDefault();

        	if (e.fromobject == obj && this.chkreturn.value)
        		return this.chkreturn.value;
        	else if (e.fromobject != obj && this.chkreturn_p.value)
        		return this.chkreturn_p.value;

        };


        this.btn00_onclick = function(obj,e)
        {
        	this.PopupDateRangePicker00.trackPopup("start", 100, 100);
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	let len = this.components.length;
        	for (let i =0; i< len; i++)
        	{
        	this.components[i].visible = true;
        	}

        	//this.resetScroll();
        };

        this.btn000_onclick = function(obj,e)
        {
        	let len = this.components.length;
        	for (let i =0; i< len; i++)
        	{
        	this.components[i].visible = false;
        	}

        	this.btn00_00.visible = true;
        	//this.resetScroll();
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.div00.visible = !this.div00.visible;
        	//this.div00_00.visible = !this.div00_00.visible;
        };

        this.div00_btn00_onsize = function(obj,e)
        {
        	trace("1onsize:" + obj.parent.parent.name +"."+ obj.parent.name + "." + obj.name + " text:"+ obj.text );

        };

        this.div00_btn00_00_onsize = function(obj,e)
        {
        	trace("2onsize:" + obj.parent.parent.name +"."+ obj.parent.name + "." + obj.name + " text:"+ obj.text  );
        };

        this.div00_div00_onsize = function(obj,e)
        {
        	trace("div00_div00_onsize:" + obj.parent.name +"."+ obj.parent.name + "." + obj.name + " text:"+ obj.text );
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onhscroll",this.comp_onevent,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.addEventHandler("onvscroll",this.comp_onevent,this);
            this.div00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.div00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.div00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.div00.form.btn00.addEventHandler("onsize",this.div00_btn00_onsize,this);
            this.div00.form.btn00_00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00.form.div00.addEventHandler("onsize",this.div00_div00_onsize,this);
            this.div00.form.div00.form.btn00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00.form.btn00_01.addEventHandler("onsize",this.div00_btn00_onsize,this);
            this.PopupDiv00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn000_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.div00_00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.div00_00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.div00_00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.div00_00.form.btn00.addEventHandler("onsize",this.div00_btn00_onsize,this);
            this.div00_00.form.btn00_00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00_00.form.div00.addEventHandler("onsize",this.div00_div00_onsize,this);
            this.div00_00.form.div00.form.btn00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00_01.addEventHandler("onhscroll",this.comp_onevent,this);
            this.div00_01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.div00_01.addEventHandler("onvscroll",this.comp_onevent,this);
            this.div00_01.form.btn00.addEventHandler("onsize",this.div00_btn00_onsize,this);
            this.div00_01.form.btn00_00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00_01.form.div00.addEventHandler("onsize",this.div00_div00_onsize,this);
            this.div00_01.form.div00.form.btn00.addEventHandler("onsize",this.div00_btn00_00_onsize,this);
            this.div00_01.form.btn00_01.addEventHandler("onsize",this.div00_btn00_onsize,this);
        };

        this.loadIncludeScript("div_fluid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
