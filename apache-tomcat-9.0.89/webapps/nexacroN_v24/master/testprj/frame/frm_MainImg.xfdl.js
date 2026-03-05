(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_MainImg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(805,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme://images/img_MF_Main03.png\')");
            obj.set_stretch("fit");
            obj.set_border("1px solid #cecece");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_accessibilitylabel("입주자 서비스 플랫폼, 인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의 생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고 처리하는 서비스를 제공합니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4.97%","99",null,"57","19.38%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'#eafa2b\'>입주자</fc> 서비스 플랫폼");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","5.71%","Static00:20","670",null,null,"70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의\r\n생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
            obj.set_cssclass("sta_MF_ImgTxt02");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/img_MF_Main04.png\')");
            obj.set_stretch("fit");
            obj.set_border("1px solid #cecece");
            obj.set_borderRadius("10px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","4.97%","99",null,"57","11%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'#eafa2b\'>입주자</fc> 서비스 플랫폼");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            obj.set_positionstep("1");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","5.71%","Static00_01:20","670",null,null,"70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의\r\n생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
            obj.set_cssclass("sta_MF_ImgTxt02");
            obj.set_usedecorate("true");
            obj.set_positionstep("1");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",805,350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme://images/img_MF_Main03.png\')");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_border("1px solid #cecece");
                p.ImageViewer00.set_borderRadius("10px");
                p.ImageViewer00.set_text("");
                p.ImageViewer00.set_accessibilitylabel("입주자 서비스 플랫폼, 인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의 생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고 처리하는 서비스를 제공합니다.");
                p.ImageViewer00.move("0","0",null,null,"0","0");

                p.Static00.set_taborder("0");
                p.Static00.set_text("<fc v=\'#eafa2b\'>입주자</fc> 서비스 플랫폼");
                p.Static00.set_cssclass("sta_MF_ImgTxt");
                p.Static00.set_usedecorate("true");
                p.Static00.set_fittocontents("height");
                p.Static00.set_wordWrap("char");
                p.Static00.move("4.97%","99",null,"57","19.38%",null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의\r\n생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
                p.Static00_00.set_cssclass("sta_MF_ImgTxt02");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("5.71%","Static00:20","670",null,null,"70");

                p.ImageViewer00_00.set_taborder("3");
                p.ImageViewer00_00.set_image("url(\'theme://images/img_MF_Main04.png\')");
                p.ImageViewer00_00.set_stretch("fit");
                p.ImageViewer00_00.set_border("1px solid #cecece");
                p.ImageViewer00_00.set_borderRadius("10px");
                p.ImageViewer00_00.set_positionstep("1");
                p.ImageViewer00_00.move("0","0",null,null,"0","0");

                p.Static00_01.set_taborder("4");
                p.Static00_01.set_text("<fc v=\'#eafa2b\'>입주자</fc> 서비스 플랫폼");
                p.Static00_01.set_cssclass("sta_MF_ImgTxt");
                p.Static00_01.set_usedecorate("true");
                p.Static00_01.set_positionstep("1");
                p.Static00_01.set_fittocontents("height");
                p.Static00_01.set_wordWrap("char");
                p.Static00_01.move("4.97%","99",null,"57","11%",null);

                p.Static00_00_00.set_taborder("5");
                p.Static00_00_00.set_text("인천국제공항공사의 임대 공간에 입주하여 생활하는 입주자들의\r\n생활 전반에 걸친 서비스를 온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
                p.Static00_00_00.set_cssclass("sta_MF_ImgTxt02");
                p.Static00_00_00.set_usedecorate("true");
                p.Static00_00_00.set_positionstep("1");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.move("5.71%","Static00_01:20","670",null,null,"70");
            	}
            );
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_cssclass("sta_MF_ImgTxtM");
                p.Static00.set_text("<fc v=\'#eafa2b\'>입주자</fc> 서비스 플랫폼");
                p.Static00.set_fittocontents("width");
                p.Static00.move("24","100",null,"35","24",null);

                p.Static00_01.set_cssclass("sta_MF_ImgTxtM");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("24","100",null,"35","24",null);

                p.Static00_00_00.set_cssclass("sta_MF_ImgTxtM02");
                p.Static00_00_00.set_text("인천국제공항공사의 임대 공간에 입주하여\r\n생활하는 입주자들의 생활 전반에 걸친 서비스를 \r\n온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
                p.Static00_00_00.move("24","Static00_01:16",null,null,"24","30");

                p.Static00_00.set_cssclass("sta_MF_ImgTxtM02");
                p.Static00_00.set_text("인천국제공항공사의 임대 공간에 입주하여\r\n생활하는 입주자들의 생활 전반에 걸친 서비스를 \r\n온라인으로 신속하고 정확하게 신청하고\r\n처리하는 서비스를 제공합니다.");
                p.Static00_00.move("24","Static00:16",null,null,"24","30");

                p.ImageViewer00_00.set_stretch("fit");

                p.ImageViewer00.set_imagealign("left middle");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_MainImg.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_00_00_onclick,this);
        };
        this.loadIncludeScript("frm_MainImg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
