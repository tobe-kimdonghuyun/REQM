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
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "ConstColumn0","size" : "30","type" : "STRING","value" : "expr:Column0+Column1"},{"id" : "ConstColumn1","size" : "30","type" : "STRING","value" : "Column1"}],"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "가가"},{"Column0" : "2","Column1" : "나나"},{"Column0" : "3","Column1" : "다다"},{"Column0" : "4","Column1" : "라라"},{"Column0" : "5","Column1" : "마마"},{"Column0" : "6","Column1" : "바바"},{"Column0" : "7","Column1" : "사사"},{"Column0" : "8","Column1" : "아아"},{"Column0" : "9","Column1" : "자자"},{"Column0" : "10","Column1" : "차차"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb01","53","32","254","58",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("select form object");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00_00","517","20","313","187",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("scrollbartype");
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00","332","20","174","187",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("scrolltype");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","332","224","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("set scrolltype");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo_scrolltype","359","54","138","143",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("1");
            var rdo_scrolltype_innerdataset = new nexacro.NormalDataset("rdo_scrolltype_innerdataset", obj);
            rdo_scrolltype_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "both","datacolumn" : "both"},{"codecolumn" : "vertical","datacolumn" : "vertical"},{"codecolumn" : "horizontal","datacolumn" : "horizontal"}]});
            obj.set_innerdataset(rdo_scrolltype_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00_00_00","527","40","140","160",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Hscroll");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo_scrollbartype_h","532","53","138","143",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("2");
            var rdo_scrollbartype_h_innerdataset = new nexacro.NormalDataset("rdo_scrollbartype_h_innerdataset", obj);
            rdo_scrollbartype_h_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "default","datacolumn" : "default"},{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "fixed","datacolumn" : "fixed"},{"codecolumn" : "auto","datacolumn" : "auto"},{"codecolumn" : "indicator","datacolumn" : "indicator"},{"codecolumn" : "autoindicator","datacolumn" : "autoindicator"}]});
            obj.set_innerdataset(rdo_scrollbartype_h_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00_00_00_00","670","40","140","160",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Vscroll");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo_scrollbartype_v","682","53","138","143",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("5");
            var rdo_scrollbartype_v_innerdataset = new nexacro.NormalDataset("rdo_scrollbartype_v_innerdataset", obj);
            rdo_scrollbartype_v_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "default","datacolumn" : "default"},{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "fixed","datacolumn" : "fixed"},{"codecolumn" : "auto","datacolumn" : "auto"},{"codecolumn" : "indicator","datacolumn" : "indicator"},{"codecolumn" : "autoindicator","datacolumn" : "autoindicator"}]});
            obj.set_innerdataset(rdo_scrollbartype_v_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","57","50","245","37",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("ds00");
            obj.set_taborder("8");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","55","160","252","220",null,null,null,null,null,null,this);
            obj.set_background("antiquewhite");
            obj.set_taborder("9");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","25","26","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","184","107","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","35","226","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","527","224","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("set scrollbartype");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk00","55","100","252","45",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("wheel_bubble");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00","63","1580","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Button01----111");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00","60","1895","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00_00","68","2310","1002","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button01----2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div01","8","400","1252","870",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_fittocontents("both");
            obj.set_taborder("16");
            obj.set_text("div01");
            obj.set_url("sample::Form_sub_scroll.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","998","203","262","220",null,null,null,null,null,null,this);
            obj.set_background("antiquewhite");
            obj.set_taborder("17");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","25","26","120","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","184","107","120","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","26","173","120","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("btn02");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.GroupBox("grb00_01","839","19","174","187",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("scrollpropagation");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo_scrollpropagation","857","44","138","143",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("19");
            var rdo_scrollpropagation_innerdataset = new nexacro.NormalDataset("rdo_scrollpropagation_innerdataset", obj);
            rdo_scrollpropagation_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "both","datacolumn" : "both"},{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "vertical","datacolumn" : "vertical"},{"codecolumn" : "horizontal","datacolumn" : "horizontal"}]});
            obj.set_innerdataset(rdo_scrollpropagation_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00_00","839","220","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("set scrollpropagation");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new nexacro.Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::Form_sub_scroll.xfdl");
        };
        
        // User Script
        this.registerScript("Form_scroll.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {

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

        	this.div01.form.changeScrollType(this.rdo_scrolltype.value);

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

        	this.div01.form.changeScrollBarType(this.rdo_scrollbartype_h.value + " " +  this.rdo_scrollbartype_v.value);
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

        this.comp_onmousewheel = function(obj,e)
        {
        	trace("mousewheel name:" + obj.name + " type:" +obj._type_name + " e.amount:" + e.amount );
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	let scrollobj ;
        	if (this.cbo00.value == "form")
        		scrollobj = this;
        	else
        		scrollobj = this[this.cbo00.value]? this[this.cbo00.value].form : this;
        	if (scrollobj)
        	{
        		scrollobj.scrollpropagation = this.rdo_scrollpropagation.value;
        	}

        	this.div01.form.changeScrollPropagation(this.rdo_scrollpropagation.value );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.comp_onmousewheel,this);
            this.btn00.addEventHandler("onclick",this.scrolltype_onclick,this);
            this.div00.addEventHandler("onmousewheel",this.comp_onmousewheel,this);
            this.btn00_00.addEventHandler("onclick",this.scrollbartype_onclick,this);
            this.chk00.addEventHandler("onclick",this.chk00_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00_00_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.div00_00.addEventHandler("onmousewheel",this.div00_onmousewheel,this);
            this.div00_00.form.btn00.addEventHandler("onclick",this.Div00_div00_00_btn00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
        };

        this.loadIncludeScript("Form_scroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
