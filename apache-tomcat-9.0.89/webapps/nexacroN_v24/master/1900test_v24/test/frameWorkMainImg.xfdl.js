(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MainImg");
            this.set_titletext("메인이미지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Img01");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","27","136","320","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서로가 상호 존중하는");
            obj.set_cssclass("sta_MF_ImgTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","27","188","400","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("sta_MF_Img02");
            obj.set_positionstep("1");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","27","136","330","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상담 시간 예약을 통한");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","27","188","400","55",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>맞춤형 상담 소통</fc></b></fs>");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_Img03");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","27","136","320","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("서면 제출을 통한");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","27","188","400","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>비대면 상담 소통</fc></b></fs>");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1030,394,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메인이미지");

                p.sta01.set_taborder("0");
                p.sta01.set_cssclass("sta_MF_Img01");
                p.sta01.move("0","0",null,null,"0","0");

                p.sta02.set_taborder("1");
                p.sta02.set_text("서로가 상호 존중하는");
                p.sta02.set_cssclass("sta_MF_ImgTxt");
                p.sta02.move("27","136","320","45",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
                p.sta03.set_cssclass("sta_MF_ImgTxt");
                p.sta03.set_usedecorate("true");
                p.sta03.move("27","188","400","55",null,null);

                p.sta11.set_cssclass("sta_MF_Img02");
                p.sta11.set_positionstep("1");
                p.sta11.set_taborder("3");
                p.sta11.move("0","0",null,null,"0","0");

                p.sta12.set_taborder("4");
                p.sta12.set_text("상담 시간 예약을 통한");
                p.sta12.set_cssclass("sta_MF_ImgTxt");
                p.sta12.set_positionstep("1");
                p.sta12.move("27","136","330","45",null,null);

                p.sta13.set_taborder("5");
                p.sta13.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>맞춤형 상담 소통</fc></b></fs>");
                p.sta13.set_cssclass("sta_MF_ImgTxt");
                p.sta13.set_usedecorate("true");
                p.sta13.set_positionstep("1");
                p.sta13.move("27","188","400","55",null,null);

                p.sta21.set_taborder("6");
                p.sta21.set_cssclass("sta_MF_Img03");
                p.sta21.set_positionstep("2");
                p.sta21.move("0","0",null,null,"0","0");

                p.sta22.set_taborder("7");
                p.sta22.set_text("서면 제출을 통한");
                p.sta22.set_cssclass("sta_MF_ImgTxt");
                p.sta22.set_positionstep("2");
                p.sta22.move("27","136","320","45",null,null);

                p.sta23.set_taborder("8");
                p.sta23.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>비대면 상담 소통</fc></b></fs>");
                p.sta23.set_cssclass("sta_MF_ImgTxt");
                p.sta23.set_usedecorate("true");
                p.sta23.set_positionstep("2");
                p.sta23.move("27","188","400","55",null,null);
            	}
            );
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","tabletScr,desktopScr",700,394,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta01.set_taborder("0");
                p.sta01.set_cssclass("sta_MF_Img01T");
                p.sta01.move("0","0",null,null,"0","0");

                p.sta02.set_taborder("1");
                p.sta02.set_text("서로가 상호 존중하는");
                p.sta02.set_cssclass("sta_MF_ImgTxt");
                p.sta02.move("34","84","320","45",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
                p.sta03.set_cssclass("sta_MF_ImgTxt");
                p.sta03.set_usedecorate("true");
                p.sta03.move("34","136","400","55",null,null);

                p.sta11.set_cssclass("sta_MF_Img02T");
                p.sta11.set_positionstep("1");
                p.sta11.set_taborder("3");
                p.sta11.move("0","0",null,null,"0","0");

                p.sta12.set_taborder("4");
                p.sta12.set_text("상담 시간 예약을 통한");
                p.sta12.set_cssclass("sta_MF_ImgTxt");
                p.sta12.set_positionstep("1");
                p.sta12.move("34","84","330","45",null,null);

                p.sta13.set_taborder("5");
                p.sta13.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>맞춤형 상담 소통</fc></b></fs>");
                p.sta13.set_cssclass("sta_MF_ImgTxt");
                p.sta13.set_usedecorate("true");
                p.sta13.set_positionstep("1");
                p.sta13.move("34","136","400","55",null,null);

                p.sta21.set_taborder("6");
                p.sta21.set_cssclass("sta_MF_Img03T");
                p.sta21.set_positionstep("2");
                p.sta21.move("0","0",null,null,"0","0");

                p.sta22.set_taborder("7");
                p.sta22.set_text("서면 제출을 통한");
                p.sta22.set_cssclass("sta_MF_ImgTxt");
                p.sta22.set_positionstep("2");
                p.sta22.move("34","84","320","45",null,null);

                p.sta23.set_taborder("8");
                p.sta23.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>비대면 상담 소통</fc></b></fs>");
                p.sta23.set_cssclass("sta_MF_ImgTxt");
                p.sta23.set_usedecorate("true");
                p.sta23.set_positionstep("2");
                p.sta23.move("34","136","400","55",null,null);
            	}
            );
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr,desktopScr",480,125,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbarsize("0");

                p.sta01.set_taborder("0");
                p.sta01.set_cssclass("sta_MF_Img01M");
                p.sta01.set_fittocontents("none");
                p.sta01.set_accessibilityenable("false");
                p.sta01.move("0","0",null,null,"0","0");

                p.sta02.set_taborder("1");
                p.sta02.set_text("서로가 상호 존중하는");
                p.sta02.set_cssclass("sta_MF_ImgTxtM");
                p.sta02.move("20","38","320","22",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("<b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b>와 <b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b>의 소통");
                p.sta03.set_cssclass("sta_MF_ImgTxtM");
                p.sta03.set_usedecorate("true");
                p.sta03.move("20","70","400","22",null,null);

                p.sta11.set_taborder("3");
                p.sta11.set_positionstep("0");
                p.sta11.set_visible("false");
                p.sta11.move("0","0","0","0",null,null);

                p.sta12.set_taborder("4");
                p.sta12.set_positionstep("0");
                p.sta12.set_visible("false");
                p.sta12.move("0","0","0","0",null,null);

                p.sta13.set_taborder("5");
                p.sta13.set_positionstep("0");
                p.sta13.set_visible("false");
                p.sta13.move("0","0","0","0",null,null);

                p.sta21.set_taborder("6");
                p.sta21.set_positionstep("0");
                p.sta21.set_visible("false");
                p.sta21.move("0","0","0","0",null,null);

                p.sta22.set_taborder("7");
                p.sta22.set_positionstep("0");
                p.sta22.set_visible("false");
                p.sta22.move("0","0","0","0",null,null);

                p.sta23.set_taborder("8");
                p.sta23.set_positionstep("0");
                p.sta23.set_visible("false");
                p.sta23.move("0","0","0","0",null,null);
            	}
            );
            obj.set_stepcount("0");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frameWorkMainImg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
