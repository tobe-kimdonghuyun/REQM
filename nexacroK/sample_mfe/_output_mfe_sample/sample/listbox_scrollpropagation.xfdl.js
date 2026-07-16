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
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "가가","Column1" : "가가","Column2" : "1111"},{"Column0" : "나나","Column1" : "나나","Column2" : "2222"},{"Column0" : "다다","Column1" : "다다","Column2" : "3333"},{"Column0" : "라라마마마마라라마마마마라라마마","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "라라마마마마라라마마마마라라마마","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "라라마마마마라라마마마마라라마마","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "차차","Column1" : "차차","Column2" : "10000"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "라라마마마마라라마마마마라라마마","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "라라마마마마라라마마마마라라마마","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "마마","Column1" : "마마","Column2" : "5555"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "차차","Column1" : "차차","Column2" : "10000"},{"Column0" : "바바","Column1" : "바바","Column2" : "6666"},{"Column0" : "사사","Column1" : "사사","Column2" : "7777"},{"Column0" : "아아","Column1" : "아아","Column2" : "8888"},{"Column0" : "자자","Column1" : "자자","Column2" : "9999"},{"Column0" : "차차","Column1" : "차차","Column2" : "10000"},{"Column0" : "47"},{"Column0" : "48"},{"Column0" : "49"},{"Column0" : "50"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.ListBox("lsb00","35","92","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("both");
            obj.set_scrolltype("both");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00","35","252","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("both");
            obj.set_scrolltype("both");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_00","35","412","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("both");
            obj.set_scrolltype("both");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_01","35","574","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("both");
            obj.set_scrolltype("both");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_01","225","92","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("none");
            obj.set_scrolltype("both");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_01_00","225","574","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("none");
            obj.set_scrolltype("both");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_02","225","252","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("none");
            obj.set_scrolltype("both");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_00_00","225","412","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("none");
            obj.set_scrolltype("both");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_02","418","92","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("vertical");
            obj.set_scrolltype("both");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_01_01","418","574","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("vertical");
            obj.set_scrolltype("both");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_03","418","252","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("vertical");
            obj.set_scrolltype("both");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_00_01","418","412","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("vertical");
            obj.set_scrolltype("both");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_03","613","94","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("horizontal");
            obj.set_scrolltype("both");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_01_02","613","576","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("horizontal");
            obj.set_scrolltype("both");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_04","613","254","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("horizontal");
            obj.set_scrolltype("both");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_00_00_02","613","414","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrollpropagation("horizontal");
            obj.set_scrolltype("both");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","618","52","172","33",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("scrollpropagation = \"horizontal\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00_00","418","49","172","33",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("scrollpropagation = \"vertical\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00_00_00","228","54","172","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("scrollpropagation = \"none\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00_00_00_00","34","54","172","33",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("scrollpropagation = \"both\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00_04","815","94","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_scrolltype("both");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            // Layout Functions
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
        this.registerScript("listbox_scrollpropagation.xfdl", function(nexacro, system, trace, environment, application) {


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
            this.lsb00_00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_01.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_01.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_01.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_01.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_01_00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_01_00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_01_00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_02.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_02.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_02.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_00_00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_00_00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_00_00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_02.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_02.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_02.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_01_01.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_01_01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_01_01.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_03.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_03.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_03.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_00_01.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_00_01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_00_01.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_03.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_03.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_03.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_01_02.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_01_02.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_01_02.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_04.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_04.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_04.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_00_00_02.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_00_00_02.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_00_00_02.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lsb00_04.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00_04.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00_04.addEventHandler("onvscroll",this.comp_onevent,this);
        };

        this.loadIncludeScript("listbox_scrollpropagation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
