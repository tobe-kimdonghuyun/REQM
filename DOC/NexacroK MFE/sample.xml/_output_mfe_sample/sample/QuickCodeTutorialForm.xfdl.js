(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_SingleDetail");
            this.set_titletext("Sing Detail Sample");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(600,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("svcQuickCodeTutorial_tutorial_SearchEmployee", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "company","size" : "80","type" : "BLOB"},{"id" : "department","size" : "80","type" : "BLOB"},{"id" : "name","size" : "80","type" : "STRING"}]},"Rows" : [{"company" : "","department" : "","name" : ""}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("svcQuickCodeTutorial_tutorial_DetailEmployee", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "company","size" : "80","type" : "BLOB"},{"id" : "department","size" : "80","type" : "BLOB"},{"id" : "name","size" : "80","type" : "STRING"},{"id" : "position","size" : "80","type" : "STRING"},{"id" : "phone","size" : "80","type" : "STRING"},{"id" : "address","size" : "256","type" : "STRING"}]},"Rows" : [{"company" : "","department" : "","name" : "","position" : "","phone" : "","address" : ""}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.TutorialQueryAction("TutorialQueryAction00", this);
            obj.getSetter("serviceid").set("svcSearchEmployee");
            obj.getSetter("serviceurl").set("http://localhost:8080/");
            obj.getSetter("targetview").set("view_master");
            this.addChild(obj.name, obj);


            obj = new nexacro.TutorialAlertAction("TutorialAlertAction00", this);
            obj.getSetter("message").set("THIS IS ALERT");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.View("view_search","0","0","600","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("view_search");
            obj.set_viewdataset("svcQuickCodeTutorial_tutorial_SearchEmployee");
            obj.set_viewtype("FreeForm");
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_company", this.view_search.form);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "code","size" : "80","type" : "STRING"},{"id" : "data","size" : "256","type" : "STRING"}]},"Rows" : [{"code" : "nexa","data" : "nexa"},{"code" : "tobesoft","data" : "tobesoft"}]});
            this.view_search.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds_department", this.view_search.form);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "code","size" : "80","type" : "STRING"},{"id" : "data","size" : "256","type" : "STRING"}]},"Rows" : [{"code" : "Abroad","data" : "Abroad"},{"code" : "Management","data" : "Management"},{"code" : "Marketing","data" : "Marketing"},{"code" : "R&D","data" : "R&D"},{"code" : "UI/UX","data" : "UI/UX"},{"code" : "QA","data" : "QA"}]});
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Static("stcompany","10","10","80","20",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Company");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Combo("cmbcompany","100","10","130","20",null,null,null,null,null,null,this.view_search.form);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_company");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Static("stdepartment","250","10","80","20",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Department");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Combo("cmbdepartment","340","10","130","20",null,null,null,null,null,null,this.view_search.form);
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_department");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Static("stname","10","40","80","20",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Name");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtname","100","40","130","20",null,null,null,null,null,null,this.view_search.form);
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearch",null,"10","100",null,"10","10",null,null,null,null,this.view_search.form);
            obj.set_text("Search");
            this.view_search.addChild(obj.name, obj);

            obj = new nexacro.View("view_master","0","100","600","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("view_master");
            obj.set_viewdataset("svcQuickCodeTutorial_tutorial_DetailEmployee");
            obj.set_viewtype("GridView");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdMaster","0","0",null,null,"0","0",null,null,null,null,this.view_master.form);
            obj.set_binddataset("svcQuickCodeTutorial_tutorial_DetailEmployee");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"body\" size=\"80\"/><Column band=\"body\" size=\"80\"/><Column band=\"body\" size=\"80\"/><Column band=\"body\" size=\"80\"/><Column band=\"body\" size=\"80\"/><Column band=\"body\" size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" displaytype=\"text\" edittype=\"none\" id=\"cell_company\" row=\"0\" text=\"Company\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" id=\"cell_department\" row=\"0\" text=\"Department\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" id=\"cell_name\" row=\"0\" text=\"Name\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" id=\"cell_position\" row=\"0\" text=\"Position\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" id=\"cell_phone\" row=\"0\" text=\"Phone\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" id=\"cell_address\" row=\"0\" text=\"Address\"/></Band><Band id=\"body\"><Cell col=\"0\" displaytype=\"text\" edittype=\"none\" id=\"cell_company\" row=\"0\" text=\"bind:company\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" id=\"cell_department\" row=\"0\" text=\"bind:department\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" id=\"cell_name\" row=\"0\" text=\"bind:name\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" id=\"cell_position\" row=\"0\" text=\"bind:position\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" id=\"cell_phone\" row=\"0\" text=\"bind:phone\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" id=\"cell_address\" row=\"0\" text=\"bind:address\"/></Band></Format></Formats>");
            this.view_master.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.view_search.form
            obj = new nexacro.Layout("default","",0,0,this.view_search.form,function(p){});
            this.view_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.view_master.form
            obj = new nexacro.Layout("default","",0,0,this.view_master.form,function(p){});
            this.view_master.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",600,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("cmbcompany_viewdataset","cmbcompany","value","svcQuickCodeTutorial_tutorial_SearchEmployee","company");
            this.view_search.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("cmbdepartment_viewdataset","cmbdepartment","value","svcQuickCodeTutorial_tutorial_SearchEmployee","department");
            this.view_search.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("edtname_viewdataset","edtname","value","svcQuickCodeTutorial_tutorial_SearchEmployee","name");
            this.view_search.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information
            this._setTriggerInfo([
            {
                "condition":"",
                "targetaction":"TutorialQueryAction00",
                "triggerobj":"btnSearch",
                "triggertype":"Click",
                "triggerview":"view_search"
            },
            {
                "condition":"",
                "targetaction":"TutorialAlertAction00",
                "triggerobj":"TutorialQueryAction00",
                "triggertype":"Action Success",
                "triggerview":"sample_SingleDetail"
            }
            ]);
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("QuickCodeTutorialForm.xfdl", function(nexacro, system, trace, environment, application) {

        this.view_search_btnSearch_onclick = function(obj,e)
        {
        	alert("aa");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.view_search.form.btnSearch.addEventHandler("onclick",this.view_search_btnSearch_onclick,this);
        };

        this.loadIncludeScript("QuickCodeTutorialForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
