(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacroportal");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "nexacaportal00"},{"Column0" : "nexacaportal01"},{"Column0" : "nexacaportal02"},{"Column0" : "nexacaportal03"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.NexacroPortal("nexacaportal00","40","32","430","248",null,null,null,null,null,null,this);
            obj.set_appkey("WWWW");
            obj.set_apppath("http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample");
            obj.set_formurl("Contents::contents_Form1.xfdl");
            obj.set_taborder("0");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("nexacaportal01","40","290","430","248",null,null,null,null,null,null,this);
            obj.set_appkey("WWWW");
            obj.set_apppath("http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample");
            obj.set_taborder("1");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("ckautomount","831","253","150","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("automount");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("ckmount","950","253","150","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("mountforapplyvalue");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextField("txtapppath","835","63","250","60",null,null,null,null,null,null,this);
            obj.set_labelfloatingfixed("true");
            obj.set_labeltext("apppath");
            obj.set_taborder("3");
            obj.set_value("http://172.10.12.23:8080/nexacro/XP17_Master/Nexacro_K1");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextField("txtappkey","835","123","250","60",null,null,null,null,null,null,this);
            obj.set_labelfloatingfixed("true");
            obj.set_labeltext("appkey");
            obj.set_taborder("4");
            obj.set_value("KKKK");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextField("txtformurl","835","183","250","60",null,null,null,null,null,null,this);
            obj.set_labelfloatingfixed("true");
            obj.set_labeltext("formurl");
            obj.set_taborder("5");
            obj.set_value("Contents::contents_Tab.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","1095","79","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set_apppath");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00","1096","137","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("set_appkey");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00","1096","199","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("set_formurl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00","1096","251","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("mount");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00_00_00_00","1096","300","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("unmount");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("createnexacroportal","1096","349","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("new ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("clearnvalue","1096","400","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("value clear ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("resetvalue","1096","450","141","44",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("value reset ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbportal","836","32","215","31",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("11");
            obj.set_text("nexacaportal00");
            obj.set_value("nexacaportal00");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("nexacaportal02","475","290","430","248",null,null,null,null,null,null,this);
            obj.set_appkey("WWWW");
            obj.set_apppath("http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample");
            obj.set_formurl("Contents::contents_Div.xfdl");
            obj.set_taborder("11");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.NexacroPortal("nexacaportal03","475","600","430","248",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.getSetter("text").set("Button00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacroportal - 복사본.xfdl", function(nexacro, system, trace, environment, application) {




        this.nexacroportal_onload = function(obj,e)
        {
        	trace("nexacroportal_onload");
        };

        this.apppath_onclick = function(obj,e)
        {
        	this[this.cbportal.value].apppath = this.txtapppath.value;
        };

        this.appkey_onclick = function(obj,e)
        {
        	this[this.cbportal.value].appkey = this.txtappkey.value;
        };

        this.formurl_onclick = function(obj,e)
        {
        	this[this.cbportal.value].formurl = this.txtformurl.value;
        };

        this.mount_onclick = function(obj,e)
        {
          if (this.ckmount.value)
          {
            if (this.txtformurl.value && this.txtappkey.value && this.txtapppath.value)
              this[this.cbportal.value].mount(this.txtformurl.value, this.txtappkey.value, this.txtapppath.value);
            else if (this.txtformurl.value && this.txtappkey.value)
              this[this.cbportal.value].mount(this.txtformurl.value, this.txtappkey.value);
            else if (this.txtformurl.value)
              this[this.cbportal.value].mount(this.txtformurl.value);
            else
              this[this.cbportal.value].mount();
          }
          else
        	  this[this.cbportal.value].mount();
        };

        this.unmount_onclick = function(obj,e)
        {
        	this[this.cbportal.value].unmount();
        };

        this.ckautomount_onchanged = function(obj,e)
        {
        	this[this.cbportal.value].automount = this.ckautomount.value;
        };

        this.create_onclick = function(obj,e)
        {
        	var portal = new nexacro.NexacroPortal();
        	if (this.txtapppath.value)
        		portal.apppath = this.txtapppath.value;
        	if (this.txtappkey.value)
        		portal.appkey = this.txtappkey.value;
        	if (this.txtformurl.value)
        		portal.formurl = this.txtformurl.value;
        	portal.automount = this.ckautomount.value;

        	this.addChild("nexaportal"+ Math.random(), portal);
        	portal.show();
        };

        this.clear_onclick = function(obj,e)
        {
        	this.txtapppath.value = "";
        	this.txtappkey.value = "";
        	this.txtformurl.value = "";
        };

        this.resetvalue_onclick = function(obj,e)
        {
        	this.txtapppath.value = "http://172.10.12.23:8080/nexacro/XP17_Master/Nexacro_K1";
        	this.txtappkey.value = "KKKK";
        	this.txtformurl.value = "Contents::contents_Tab.xfdl";
        };

        this.nexacroportal00_onmount = function(obj,e)
        {
        	trace("nexacroportal00_onmount" + e.appkey);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nexacroportal_onload,this);
            this.nexacaportal00.addEventHandler("onmount",this.nexacroportal00_onmount,this);
            this.ckautomount.addEventHandler("onchanged",this.ckautomount_onchanged,this);
            this.Button01.addEventHandler("onclick",this.apppath_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.appkey_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.formurl_onclick,this);
            this.Button01_00_00_00.addEventHandler("onclick",this.mount_onclick,this);
            this.Button01_00_00_00_00.addEventHandler("onclick",this.unmount_onclick,this);
            this.createnexacroportal.addEventHandler("onclick",this.create_onclick,this);
            this.clearnvalue.addEventHandler("onclick",this.clear_onclick,this);
            this.resetvalue.addEventHandler("onclick",this.resetvalue_onclick,this);
        };

        this.loadIncludeScript("nexacroportal - 복사본.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
