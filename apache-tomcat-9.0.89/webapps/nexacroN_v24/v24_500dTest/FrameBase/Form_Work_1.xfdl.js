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
            obj = new Button("Button00","78.00","28","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","76","72","500","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("음성출력.\r\n1. 동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n2. 남산 위에 저 소나무 철갑을 두른 듯\r\n바람 서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n3. 가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n4. 이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner","475","45","350","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("FrameBase::mainImage.xfdl");
            obj.set_accessibilityenable("false");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","714","246","54","54",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("멈춤");
            obj.set_text("멈춤");
            obj.set_cssclass("btn_MF_pause");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","352",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            obj.set_background("black");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","68","382","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("timer 시작");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","68","460","258","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("음성출력.\r\n1. 동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n2. 남산 위에 저 소나무 철갑을 두른 듯\r\n바람 서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n3. 가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n4. 이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","334","380","404","194",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("텍스트입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","784","524","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("멈춤");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","662",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static01");
            obj.set_background("black");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","66","690","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("timer 시작");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","66","768","258","100",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("음성출력.\r\n1. 동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n2. 남산 위에 저 소나무 철갑을 두른 듯\r\n바람 서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n3. 가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n4. 이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","376","728","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("버튼1");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","477","728","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("버튼2");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","578","728","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("버튼3");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","679","728","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("버튼4");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","780","728","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("버튼5");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","916","798","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("멈춤");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","932",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Static01");
            obj.set_background("black");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","66","960","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("timer 시작");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","66","1038","258","100",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("음성출력.\r\n1. 동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n2. 남산 위에 저 소나무 철갑을 두른 듯\r\n바람 서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n3. 가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세\r\n4. 이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려 강산\r\n대한 사람 대한으로 길이 보전하세");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","376","996","80","68",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("버튼이동");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_00","916","1068","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("멈춤");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","1172",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Static01");
            obj.set_background("black");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBanner
            obj = new Layout("default","",0,0,this.divBanner.form,function(p){});
            this.divBanner.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::mainImage.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Work_1.xfdl", function() {

        this.divMain_Button00_01_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_MF_pause"){
        		obj.parent.divBanner.form.set_PageStop();
        	}else{
        	    obj.parent.divBanner.form.set_PageNext();
        	}
        };





        this.Form_Work_ontimer = function(obj,e)
        {
        	if (e.timerid == 1)
        	{
        		this.TextArea00.value += "텍스트 입력 \n";
        	}
        	else if (e.timerid == 2)
        	{
        		var target = this.components["btn" + this.fvBtnId];
        		target.visible = true;

        		this.fvBtnId++;
        		if(this.fvBtnId == 6)
        		{
        			this.killTimer(2);

        			this.fvBtnId = 1;
        		}
        	}
        	else if (e.timerid == 3)
        	{
        		var nleft = this.btnMove.getOffsetLeft() + 10;
        		this.btnMove.move(nleft, 996);
        	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.setTimer(1, 3000);
        };


        this.Button02_onclick = function(obj,e)
        {
        	this.killTimer(1);
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.btn1.visible = false;
        	this.btn2.visible = false;
        	this.btn3.visible = false;
        	this.btn4.visible = false;
        	this.btn5.visible = false;

        	this.fvBtnId = 1;

        	this.setTimer(2, 3000);
        };

        this.Button05_onclick = function(obj,e)
        {
        	this.killTimer(2);
        };

        this.Button04_00_onclick = function(obj,e)
        {
        	this.setTimer(3, 3000);
        };

        this.Button05_00_onclick = function(obj,e)
        {
        	this.killTimer(3);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
            this.Button00_01.addEventHandler("onclick",this.divMain_Button00_01_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button04_00.addEventHandler("onclick",this.Button04_00_onclick,this);
            this.Button05_00.addEventHandler("onclick",this.Button05_00_onclick,this);
        };
        this.loadIncludeScript("Form_Work_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
