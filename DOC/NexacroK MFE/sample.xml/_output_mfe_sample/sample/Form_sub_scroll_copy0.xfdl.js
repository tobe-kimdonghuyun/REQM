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
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "가가","Column2" : "1111"},{"Column0" : "2","Column1" : "나나","Column2" : "2222"},{"Column0" : "3","Column1" : "다다","Column2" : "3333"},{"Column0" : "4","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "5","Column1" : "마마","Column2" : "5555"},{"Column0" : "6","Column1" : "바바","Column2" : "6666"},{"Column0" : "7","Column1" : "사사","Column2" : "7777"},{"Column0" : "8","Column1" : "아아","Column2" : "8888"},{"Column0" : "9","Column1" : "자자","Column2" : "9999"},{"Column0" : "4","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "5","Column1" : "마마","Column2" : "5555"},{"Column0" : "6","Column1" : "바바","Column2" : "6666"},{"Column0" : "7","Column1" : "사사","Column2" : "7777"},{"Column0" : "8","Column1" : "아아","Column2" : "8888"},{"Column0" : "9","Column1" : "자자","Column2" : "9999"},{"Column0" : "4","Column1" : "라라마마마마라라마마마마라라마마","Column2" : "4444"},{"Column0" : "5","Column1" : "마마","Column2" : "5555"},{"Column0" : "6","Column1" : "바바","Column2" : "6666"},{"Column0" : "7","Column1" : "사사","Column2" : "7777"},{"Column0" : "8","Column1" : "아아","Column2" : "8888"},{"Column0" : "9","Column1" : "자자","Column2" : "9999"},{"Column0" : "10","Column1" : "차차","Column2" : "10000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button01_00_00","42","1207","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00","39","1522","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00_00","47","1937","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","35","92","185","156",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_innerdataset("ds00");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo01","233","92","221","48",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displaynulltext("콤보");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds00");
            obj.set_taborder("4");
            obj.set_type("search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","476","91","135","149",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("가가\n나나\n다다\n마마라라마마ㅋ마마라라마마ㅋ마마라라마마ㅋ\n마마\n바바\n사사\n아아\n자자\n마마\n바바\n사사\n아아\n자자\n차차");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","34","258","186","149",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("lst00","233","259","227","148",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"92\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/><Cell height=\"24\" id=\"Cell04\" left=\"10\" text=\"Column2\" top=\"63\" width=\"120\"/><Cell height=\"24\" id=\"Cell05\" left=\"135\" text=\"bind:Column2\" top=\"63\" width=\"180\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateRangePicker("DateRangePicker00","764","89","246","318",null,null,null,null,null,null,this);
            obj.set_direction("vertical");
            obj.set_headlinesize("10 50");
            obj.set_taborder("8");
            obj.set_type("single");
            obj.set_useheadline("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("FileUpload00","477","259","243","121",null,null,null,null,null,null,this);
            obj.set_itemcount("10");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.MultiCombo("MultiCombo00","233","148","220","50",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displaynulltext("멀티콤보");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds00");
            obj.set_taborder("10");
            obj.set_type("search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","30","428","190","262",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_taborder("11");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","209","124","63","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","216","255","63","37",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.MultiLineTextField("MultiLineTextField00","233","421","250","140",null,null,null,null,null,null,this);
            obj.set_labeltext("MultiLineTextField00");
            obj.set_taborder("12");
            obj.set_value("가가\n나나\n다다\n마마라라마마ㅋ마마라라마마ㅋ마마라라마마ㅋ\n마마\n바바\n사사\n아아\n자자\n마마\n바바\n사사\n아아\n자자\n차차");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","500","429","226","137",null,null,null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","186","76","63","33",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chkreturn","38","27","167","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("return true");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chkprevent","196","27","167","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("preventdefault");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklogwheel","347","27","167","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("log wheel");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chklogscroll","507","27","167","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("log scroll");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chkreturn_p","38","50","167","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("return true(parent)");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chkprevent_p","196","50","167","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("preventdefault(parent)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00","811","461","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","501","577","238","177",null,null,null,null,null,null,this);
            obj.set_background("burlywood");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","125","148","120","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","31","83","150","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_displayrowcount("8");
            obj.set_innerdataset("ds00");
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","804","578","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_sub_scroll_copy0.xfdl", function(nexacro, system, trace, environment, application) {

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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onhscroll",this.comp_onevent,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.addEventHandler("onvscroll",this.comp_onevent,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00_00_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.lsb00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.lsb00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lsb00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.cbo01.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.txa00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.txa00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.txa00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.grd00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.grd00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.grd00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.lst00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.lst00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.DateRangePicker00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.FileUpload00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.MultiCombo00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.div00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.div00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.div00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.MultiLineTextField00.addEventHandler("onhscroll",this.comp_onevent,this);
            this.MultiLineTextField00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.MultiLineTextField00.addEventHandler("onvscroll",this.comp_onevent,this);
            this.tab00.Tabpage1.addEventHandler("onhscroll",this.comp_onevent,this);
            this.tab00.Tabpage1.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.tab00.Tabpage1.addEventHandler("onvscroll",this.comp_onevent,this);
            this.PopupDiv00.addEventHandler("onmousewheel",this.comp_onevent,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_sub_scroll_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
