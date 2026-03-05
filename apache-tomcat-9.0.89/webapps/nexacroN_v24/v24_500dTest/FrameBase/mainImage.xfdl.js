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
                this._setFormPosition(350,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBanner01","412","14","350","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner02","878","14","350","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner03","1405","12","350","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div03");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBanner01
            obj = new Layout("default","",0,0,this.divBanner01.form,function(p){});
            this.divBanner01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBanner02
            obj = new Layout("default","",0,0,this.divBanner02.form,function(p){});
            this.divBanner02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBanner03
            obj = new Layout("default","",0,0,this.divBanner03.form,function(p){});
            this.divBanner03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",350,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mainImage.xfdl", function() {

        this.AryProd = new Array("01", "02", "03");		//배너 DIV의 배열.
        this.rollCount = 0;
        this.MainImage = this.divBanner01;				//첫번째로 보여줄 배너
        this.SubImage = this.divBanner02;				//두번째로 보여줄 배너

        this.Main_Image_onload = function (obj, e)
        {
        	for (var i = 0; i < this.AryProd.length; i++) {
        		var sTarget = this.components["divBanner" + this.AryProd[i]];
        		sTarget.visible = false;
        	}

        	this.MainImage.set_left(0);
        	this.MainImage.set_top(0);
        	this.MainImage.set_visible(true);

        	this.setTimer(1, 3000);
        };

        this.set_roll = function ()
        {
        	var subProd;
        	var mainProd = this.AryProd[this.rollCount];
        	if ((this.rollCount + 1) == this.AryProd.length)
        	{
        		subProd = this.AryProd[0];
        	}
        	else
        	{
        		subProd = this.AryProd[this.rollCount + 1];
        	}

        	this.MainImage = this.components["divBanner" + mainProd];
        	this.SubImage = this.components["divBanner" + subProd];

        	this.setTimer(0, 15);
        };

        this.Main_Image_ontimer = function (obj, e)
        {
        	if (e.timerid == 0)
        	{
        		// 이미지 다음 페이지
        		if (this.SubImage.getOffsetLeft() == 0 && this.SubImage.getOffsetTop() == 0)
        		{
        			this.killTimer(0);
        			if (this.rollCount ==  this.AryProd.length - 1)
        			{
        				this.rollCount = 0;
        			}
        			else
        			{
        				this.rollCount++;
        			}
        		}
        		else
        		{
        			for(var i = 0; i < this.AryProd.length; i++)
        			{
        				var sTarget = this.components["divBanner" + this.AryProd[i]];
        				sTarget.visible = false;
        			}

        			this.SubImage.set_visible(true);
        			var nX = this.MainImage.left - 50;
        			var nX_1 = nX + 1009;
        			if (nX_1 <= 0)
        			{
        				nX_1 = 0;
        			}
        			this.MainImage.move(nX, 0, 350, 200);
        			this.SubImage.move(nX_1, 0, 350, 200);
        		}
        	}
        	else if (e.timerid == 1)
        	{
        		// 이미지 재생
        		this.set_roll();
        	}
        };

        // 다음 이미지로 이동
        this.set_PageNext = function ()
        {
        	this.parent.parent.parent.form.Button00_01.set_cssclass("btn_MF_pause");
        	this.parent.parent.parent.form.Button00_01.set_accessibilitylabel("멈춤");

        	this.set_roll();
        	this.killTimer(1);
        	this.setTimer(1, 5000);
        };


        // 이미지 멈춤
        this.set_PageStop = function ()
        {
        	this.parent.parent.parent.form.Button00_01.set_cssclass("btn_MF_play");
        	this.parent.parent.parent.form.Button00_01.set_accessibilitylabel("재생");

        	this.killTimer(1);
        };
        // 이미지 재생
        this.set_PagePlay = function ()
        {
        	this.killTimer(1);
        	this.setTimer(1, 5000);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Main_Image_ontimer,this);
            this.addEventHandler("onload",this.Main_Image_onload,this);
        };
        this.loadIncludeScript("mainImage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
