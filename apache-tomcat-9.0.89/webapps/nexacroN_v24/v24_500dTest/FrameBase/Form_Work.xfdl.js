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
            obj = new Static("Static00_01_00_00","66","118","258","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("음성출력.\r\n1. 동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n2. 남산 위에 저 소나무 철갑을 두른 듯\r\n바람 서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n3. 가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n4. 이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","56","32","149","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","379","40","93","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_00","916","148","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("멈춤");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","938","409","291","161",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","58","280","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01 (false)");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","372","280","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div02 (false)");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","725","280","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div03 (false)");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","58","508","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div04 (true)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","372","508","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div05 (true)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","725","508","226","184",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div06 (true)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","654","40","284","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">a</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">b</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">c</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            this.Div06.form.addLayout(obj.name, obj);

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
        		this.Edit00.value= this.getFocus().text;

        		this.fvDiv++;

        		if(this.fvDiv == 7)
        		{
        			this.killTimer(1);

        			this.fvDiv = 1;
        		}
        	}
        };

        this.Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button05_00.addEventHandler("onclick",this.Button05_00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
