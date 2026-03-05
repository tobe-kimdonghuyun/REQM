(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern09");
            this.set_titletext("첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","210","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Input Form");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("첨부파일은 게시물, 본문 등에 제공되는 다운로드 가능한 콘텐츠를 의미한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:85",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구조");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_00:24",null,"512","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","39","39",null,"432","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","39",null,"38","39",null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("제출서류");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","Static02_00:24",null,"137","39",null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01\"/></Contents>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","16","18","100%","32",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00_00_00\"/></Contents>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","40","438","460","26",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("사회보장급여 신청(변경)서 [hwp, 328KB]");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00_00_00","40","438","220","32",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("true");
            this.Div00.form.Div02.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("true");
            this.Div00.form.Div02.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01","61","638","100%","64",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div00.form.Div02.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","39","Panel00:16",null,"137","39",null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00\"/></Contents>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","16","18","100%","32",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00_00_00_00\"/></Contents>");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","438","460","26",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("금융정보 등(금융ㆍ신용ㆍ보험정보) 제공 동의서 [hwp, 17KB]");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00_00_00_00","40","438","220","32",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("true");
            this.Div00.form.Div02.form.Div02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div00.form.Div02.form.Div02_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("true");
            this.Div00.form.Div02.form.Div02_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00","61","638","100%","64",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div00.form.Div02.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            obj.set_visible("false");
            this.Div00.form.Div02.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","39","391","120","39",null,null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("11");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","39","Div02:0","120","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div02.form.Div02_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.set_visible("false");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("true");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("true");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div02_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div02_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div02.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Error");
                p.Static00.set_visible("false");
                p.Static00.move("0","12","100%",null,null,"0");
            	}
            );
            this.Div00.form.Div02.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div02.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div02.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div02.form.Div02_00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div02_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.set_visible("false");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("true");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("true");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div02_00_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div02_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div02_00_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div02_00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div00.form.Div02.form.Div02_00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div02.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Error");
                p.Static00.set_visible("false");
                p.Static00.move("0","12","100%",null,null,"0");
            	}
            );
            this.Div00.form.Div02.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            	}
            );
            this.Div00.form.Div02.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div02.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("제출서류");
                p.Static02_00.set_cssclass("sta_WF_H4_pc");
                p.Static02_00.set_accessibilityrole("heading4");
                p.Static02_00.move("39","39",null,"38","39",null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_cssclass("pnl_WF_File");
                p.Panel00.set_spacing("16px 16px 16px 16px");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("12");
                p.Panel00.move("39","Static02_00:24",null,"137","39",null);

                p.Panel01_00_00_00.set_taborder("2");
                p.Panel01_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00.set_verticalgap("16");
                p.Panel01_00_00_00.move("16","18","100%","32",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("사회보장급여 신청(변경)서 [hwp, 328KB]");
                p.Static00.set_fittocontents("height");
                p.Static00.set_flexgrow("1");
                p.Static00.move("40","438","460","26",null,null);

                p.Div02_00_00_00.set_taborder("4");
                p.Div02_00_00_00.set_text("Div02");
                p.Div02_00_00_00.set_visible("true");
                p.Div02_00_00_00.set_flexgrow("1");
                p.Div02_00_00_00.set_accessibilityenable("false");
                p.Div02_00_00_00.move("40","438","220","32",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_cssclass("div_WF_inforbox");
                p.Div01.set_visible("false");
                p.Div01.set_accessibilityenable("false");
                p.Div01.set_tabstop("false");
                p.Div01.move("61","638","100%","64",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_cssclass("pnl_WF_File");
                p.Panel00_00.set_spacing("16px 16px 16px 16px");
                p.Panel00_00.set_flexmainaxisalign("start");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("12");
                p.Panel00_00.move("39","Panel00:16",null,"137","39",null);

                p.Panel01_00_00_00_00.set_taborder("7");
                p.Panel01_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00_00.set_verticalgap("16");
                p.Panel01_00_00_00_00.move("16","18","100%","32",null,null);

                p.Static00_00.set_taborder("8");
                p.Static00_00.set_text("금융정보 등(금융ㆍ신용ㆍ보험정보) 제공 동의서 [hwp, 17KB]");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.set_flexgrow("1");
                p.Static00_00.move("40","438","460","26",null,null);

                p.Div02_00_00_00_00.set_taborder("9");
                p.Div02_00_00_00_00.set_text("Div02");
                p.Div02_00_00_00_00.set_visible("true");
                p.Div02_00_00_00_00.set_flexgrow("1");
                p.Div02_00_00_00_00.set_accessibilityenable("false");
                p.Div02_00_00_00_00.move("40","438","220","32",null,null);

                p.Div01_00.set_taborder("10");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_cssclass("div_WF_inforbox");
                p.Div01_00.set_visible("false");
                p.Div01_00.set_accessibilityenable("false");
                p.Div01_00.set_tabstop("false");
                p.Div01_00.move("61","638","100%","64",null,null);

                p.Static02.set_taborder("11");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","391","120","39",null,null);
            	}
            );
            this.Div00.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.move("23","39",null,"38","23",null);

                p.Panel00.set_spacing("23px 23px 23px 23px");
                p.Panel00.move("23","Static02_00:24",null,"187","23",null);

                p.Panel00_00.set_spacing("23px 23px 23px 23px");
                p.Panel00_00.move("23","Panel00:10",null,"233","23",null);

                p.Static00_00.move("40","438","460","52",null,null);

                p.Panel01_00_00_00_00.move("16","18","100%","99",null,null);

                p.Div01_00.move("61","638","100%","65",null,null);

                p.Panel01_00_00_00.move("16","18","100%","74",null,null);

                p.Static02.move("39","531","120","23",null,null);
            	}
            );
            this.Div00.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div02.set_taborder("0");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Detailbox");
                p.Div02.set_fittocontents("height");
                p.Div02.set_tabstop("false");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("39","39",null,"432","39",null);

                p.Static02.set_taborder("12");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","Div02:0","120","39",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div02.move("15","15",null,"556","15",null);

                p.Static02.move("39","Div02:0","120","15",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,910,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("첨부파일");

                p.staH2.set_taborder("0");
                p.staH2.set_text("첨부파일");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","140","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Input Form");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","210","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("첨부파일은 게시물, 본문 등에 제공되는 다운로드 가능한 콘텐츠를 의미한다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"74","0",null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("구조");
                p.Static00_00.set_cssclass("sta_WF_H3_pc");
                p.Static00_00.set_accessibilityrole("heading3");
                p.Static00_00.move("0","Static00:85",null,"60","0",null);

                p.Div00.set_taborder("5");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("0","Static00_00:24",null,"512","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,980,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("Div00");
                p.Div00.move("0","Static00_00:24",null,"588","0",null);

                p.Static00_00.move("0","Static00:80","300","60",null,null);

                p.Static00.move("0","85",null,"100","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern09.xfdl", function() {

        this.pattern09_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern09_onload,this);
        };
        this.loadIncludeScript("pattern09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
