(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","71","45","379","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스페이스로 라디오 아이템 선택되지 않음.");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","78","180","402","62",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","78","298","402","62",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","531","37","501","367",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.fvDiv = 1;

        this.Button00_onclick = function(obj,e)
        {
        	this.Div01.visible = false;
        	this.Div02.visible = false;
        	this.Div03.visible = false;
        	this.Div04.visible = false;
        	this.Div05.visible = false;
        	this.Div06.visible = false;

        	this.fvDiv = 1;
        	this.setTimer(1, 2000);
        };


        this.Button05_00_onclick = function(obj,e)
        {
        	this.killTimer(1);
        };


        this.Form_Work_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		var target = this.components["Div0" + this.fvDiv];
        		target.visible = true;

        		this.fvDiv++;

        		if(this.fvDiv == 7)
        		{
        			this.killTimer(1);

        			this.fvDiv = 1;
        		}
        	}
        };

        this.Radio00_onkeyup = function(obj,e)
        {
        	this.TextArea00.insertText("Radio00_onlbuttonup \n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.Radio00.addEventHandler("onkeyup",this.Radio00_onkeyup,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
