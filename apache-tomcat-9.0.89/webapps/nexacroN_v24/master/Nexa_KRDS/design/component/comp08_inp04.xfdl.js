(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("inp04");
            this.set_titletext("파일 업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 업로드");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","143","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("File upload");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 업로드는 하나 이상의 디바이스의 로컬 파일을 선택하고 첨부하는 데 사용하는 입력 컴포넌트이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","Static00_02:100",null,"1045","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_FileBox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","40","40","314","36",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","40","92","314","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("컨텐츠 영역");
            obj.set_cssclass("sta_WF_Para17RG");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","40","142",null,"181","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_FiledragBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","388","40","100%","29",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요.");
            obj.set_cssclass("sta_WF_Para19R");
            obj.set_fittocontents("height");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","644","107","100","48",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","40","Div00:24","89","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("<fc v=\"#0B50D0\">3개</fc> / 10개");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Div00:24","124","32","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("전체 파일 삭제");
            obj.set_cssclass("btn_WF_Moreborder");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","Div00:80",null,"636","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_spacing("0px 0px 40px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","0","100%","140",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("pnl_WF_FileError");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01","16","18","100%","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","438","75%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
            obj.set_fittocontents("height");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","40","438","220","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("true");
            obj.set_accessibilitylabel("작업중");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            obj.set_accessibilitylabel("완료");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("false");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("false");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div01","61","638","100%","64",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            this.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10","10","100%","140",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","16","18","100%","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","40","438","75%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
            obj.set_fittocontents("height");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02_00","40","438","220","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            obj.set_accessibilitylabel("작업중");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            obj.set_accessibilitylabel("완료");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("true");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div01.form.Div02_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("true");
            this.Div01.form.Div02_00.addChild(obj.name, obj);

            obj = new Div("Div01_00","61","638","100%","64",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div01.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            this.Div01.form.Div01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10","166","100%","140",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj.set_tabstop("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","16","18","100%","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","40","438","75%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
            obj.set_fittocontents("height");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02_00_00","40","438","220","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_fittocontents("width");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            obj.set_accessibilitylabel("작업중");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("false");
            obj.set_accessibilitylabel("완료");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("false");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("false");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","61","638","100%","64",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div01.form.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            obj.set_visible("false");
            this.Div01.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10","322","100%","140",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("pnl_WF_File");
            obj.set_spacing("16px 16px 16px 16px");
            obj.set_flexmainaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_type("vertical");
            obj.set_verticalgap("12");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00_00_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","16","18","100%","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div02_00_00_00\"/></Contents>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","40","438","75%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
            obj.set_fittocontents("height");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02_00_00_00","40","438","220","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("Div02");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"0","62","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.Div01.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fit");
            obj.set_visible("false");
            obj.set_accessibilitylabel("작업중");
            this.Div01.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00",null,"0","32","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
            obj.set_cssclass("img_WF_Trans");
            obj.set_stretch("fixaspectratio");
            obj.set_visible("true");
            obj.set_accessibilitylabel("완료");
            this.Div01.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"0","103","32","103",null,null,null,null,null,this.Div01.form.Div02_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_DownloadR");
            obj.set_visible("false");
            this.Div01.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"0","96","32","0",null,null,null,null,null,this.Div01.form.Div02_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("바로보기");
            obj.set_cssclass("btn_WF_MoreL");
            obj.set_visible("false");
            this.Div01.form.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00_00","61","638","100%","64",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_inforbox");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","12","100%",null,null,"0",null,null,null,null,this.Div01.form.Div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
            obj.set_cssclass("sta_WF_Error");
            obj.set_visible("false");
            this.Div01.form.Div01_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요.");
                p.Static00.set_cssclass("sta_WF_Para19R");
                p.Static00.set_fittocontents("height");
                p.Static00.move("388","40","100%","29",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("파일선택");
                p.Button00.set_cssclass("btn_WF_Crud01");
                p.Button00.move("644","107","100","48",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_flexmainaxisalign("center");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_flexmainaxisalign("center");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div02.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_visible("false");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("true");
                p.ImageViewer00.set_accessibilitylabel("작업중");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.set_accessibilitylabel("완료");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("false");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("false");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Error");
                p.Static00.move("0","12","100%",null,null,"0");
            	}
            );
            this.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div02_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_visible("false");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.set_accessibilitylabel("작업중");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.set_accessibilitylabel("완료");
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
            this.Div01.form.Div02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div02_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("등록 가능한 파일 용량을 초과하였습니다. \r\n20MB 미만의 파일만 등록할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Error");
                p.Static00.move("0","12","100%",null,null,"0");
            	}
            );
            this.Div01.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div02_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_02.set_taborder("0");
                p.Button00_02.set_text("삭제");
                p.Button00_02.set_cssclass("btn_WF_Delete");
                p.Button00_02.set_fittocontents("width");
                p.Button00_02.move(null,"0","62","32","0",null);

                p.ImageViewer00.set_taborder("1");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_WF_SpinnerTran.gif\')");
                p.ImageViewer00.set_cssclass("img_WF_Trans");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_visible("false");
                p.ImageViewer00.set_accessibilitylabel("작업중");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("false");
                p.ImageViewer00_00.set_accessibilitylabel("완료");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("false");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("false");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div02_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div02_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div01_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00_00.form,
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
            this.Div01.form.Div01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div01_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.Div01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div02_00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00_00_00.form,
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
                p.ImageViewer00.set_accessibilitylabel("작업중");
                p.ImageViewer00.move(null,"0","32","32","0",null);

                p.ImageViewer00_00.set_taborder("2");
                p.ImageViewer00_00.set_image("url(\'theme::NexaKRDS/images/img_WF_Complete.png\')");
                p.ImageViewer00_00.set_cssclass("img_WF_Trans");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_visible("true");
                p.ImageViewer00_00.set_accessibilitylabel("완료");
                p.ImageViewer00_00.move(null,"0","32","32","0",null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_text("다운로드");
                p.Button00_02_00_00.set_cssclass("btn_WF_DownloadR");
                p.Button00_02_00_00.set_visible("false");
                p.Button00_02_00_00.move(null,"0","103","32","103",null);

                p.Button00_02_00.set_taborder("4");
                p.Button00_02_00.set_text("바로보기");
                p.Button00_02_00.set_cssclass("btn_WF_MoreL");
                p.Button00_02_00.set_visible("false");
                p.Button00_02_00.move(null,"0","96","32","0",null);
            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div02_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div02_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.Div01.form.Div02_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div01_00_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div01_00_00_00.form,
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
            this.Div01.form.Div01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div01_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.Div01_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("타이틀영역");
                p.Static02.set_cssclass("sta_WF_H4_pc");
                p.Static02.set_accessibilityrole("heading2");
                p.Static02.move("40","40","314","36",null,null);

                p.Static02_00.set_taborder("1");
                p.Static02_00.set_text("컨텐츠 영역");
                p.Static02_00.set_cssclass("sta_WF_Para17RG");
                p.Static02_00.move("40","92","314","26",null,null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_FiledragBg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("40","142",null,"181","40",null);

                p.Static02_01.set_taborder("3");
                p.Static02_01.set_text("<fc v=\"#0B50D0\">3개</fc> / 10개");
                p.Static02_01.set_cssclass("sta_WF_Txt17B");
                p.Static02_01.set_usedecorate("true");
                p.Static02_01.move("40","Div00:24","89","32",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_text("전체 파일 삭제");
                p.Button01.set_cssclass("btn_WF_Moreborder");
                p.Button01.set_fittocontents("width");
                p.Button01.move(null,"Div00:24","124","32","40",null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_spacing("0px 0px 40px 0px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("40","Div00:80",null,"636","40",null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_cssclass("pnl_WF_FileError");
                p.Panel00.set_spacing("16px 16px 16px 16px");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("12");
                p.Panel00.move("40","0","100%","140",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("16","18","100%","32",null,null);

                p.Static00_02.set_taborder("8");
                p.Static00_02.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
                p.Static00_02.set_fittocontents("height");
                p.Static00_02.move("40","438","75%","26",null,null);

                p.Div02.set_taborder("9");
                p.Div02.set_text("Div02");
                p.Div02.set_visible("true");
                p.Div02.set_accessibilityenable("false");
                p.Div02.set_tabstop("false");
                p.Div02.move("40","438","220","32",null,null);

                p.Div01.set_taborder("10");
                p.Div01.set_text("Div01");
                p.Div01.set_cssclass("div_WF_inforbox");
                p.Div01.set_accessibilityenable("false");
                p.Div01.set_tabstop("false");
                p.Div01.move("61","638","100%","64",null,null);

                p.Panel00_00.set_taborder("11");
                p.Panel00_00.set_cssclass("pnl_WF_File");
                p.Panel00_00.set_spacing("16px 16px 16px 16px");
                p.Panel00_00.set_flexmainaxisalign("start");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("12");
                p.Panel00_00.move("10","10","100%","140",null,null);

                p.Panel01_00.set_taborder("12");
                p.Panel01_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("16","18","100%","32",null,null);

                p.Static00_02_00.set_taborder("13");
                p.Static00_02_00.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
                p.Static00_02_00.set_fittocontents("height");
                p.Static00_02_00.move("40","438","75%","26",null,null);

                p.Div02_00.set_taborder("14");
                p.Div02_00.set_text("Div02");
                p.Div02_00.set_visible("true");
                p.Div02_00.set_accessibilityenable("false");
                p.Div02_00.set_tabstop("false");
                p.Div02_00.move("40","438","220","32",null,null);

                p.Div01_00.set_taborder("15");
                p.Div01_00.set_text("Div01");
                p.Div01_00.set_cssclass("div_WF_inforbox");
                p.Div01_00.set_visible("false");
                p.Div01_00.set_accessibilityenable("false");
                p.Div01_00.set_tabstop("false");
                p.Div01_00.move("61","638","100%","64",null,null);

                p.Panel00_00_00.set_taborder("16");
                p.Panel00_00_00.set_cssclass("pnl_WF_File");
                p.Panel00_00_00.set_spacing("16px 16px 16px 16px");
                p.Panel00_00_00.set_flexmainaxisalign("start");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_verticalgap("12");
                p.Panel00_00_00.set_tabstop("false");
                p.Panel00_00_00.move("10","166","100%","140",null,null);

                p.Panel01_00_00.set_taborder("17");
                p.Panel01_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("16","18","100%","32",null,null);

                p.Static00_02_00_00.set_taborder("18");
                p.Static00_02_00_00.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
                p.Static00_02_00_00.set_fittocontents("height");
                p.Static00_02_00_00.move("40","438","75%","26",null,null);

                p.Div02_00_00.set_taborder("19");
                p.Div02_00_00.set_text("Div02");
                p.Div02_00_00.set_visible("true");
                p.Div02_00_00.set_accessibilityenable("false");
                p.Div02_00_00.set_tabstop("false");
                p.Div02_00_00.move("40","438","220","32",null,null);

                p.Div01_00_00.set_taborder("20");
                p.Div01_00_00.set_text("Div01");
                p.Div01_00_00.set_cssclass("div_WF_inforbox");
                p.Div01_00_00.set_visible("false");
                p.Div01_00_00.set_accessibilityenable("false");
                p.Div01_00_00.set_tabstop("false");
                p.Div01_00_00.move("61","638","100%","64",null,null);

                p.Panel00_00_00_00.set_taborder("21");
                p.Panel00_00_00_00.set_cssclass("pnl_WF_File");
                p.Panel00_00_00_00.set_spacing("16px 16px 16px 16px");
                p.Panel00_00_00_00.set_flexmainaxisalign("start");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_verticalgap("12");
                p.Panel00_00_00_00.move("10","322","100%","140",null,null);

                p.Panel01_00_00_00.set_taborder("22");
                p.Panel01_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel01_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00.move("16","18","100%","32",null,null);

                p.Static00_02_00_00_00.set_taborder("23");
                p.Static00_02_00_00_00.set_text("전입신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]");
                p.Static00_02_00_00_00.set_fittocontents("height");
                p.Static00_02_00_00_00.move("40","438","75%","26",null,null);

                p.Div02_00_00_00.set_taborder("24");
                p.Div02_00_00_00.set_text("Div02");
                p.Div02_00_00_00.set_visible("true");
                p.Div02_00_00_00.set_accessibilityenable("false");
                p.Div02_00_00_00.set_tabstop("false");
                p.Div02_00_00_00.move("40","438","220","32",null,null);

                p.Div01_00_00_00.set_taborder("25");
                p.Div01_00_00_00.set_text("Div01");
                p.Div01_00_00_00.set_cssclass("div_WF_inforbox");
                p.Div01_00_00_00.set_visible("false");
                p.Div01_00_00_00.set_accessibilityenable("false");
                p.Div01_00_00_00.set_tabstop("false");
                p.Div01_00_00_00.move("61","638","100%","64",null,null);
            	}
            );
            obj.set_type("default");
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_02.move("40","438","80%","78",null,null);

                p.Panel01.move("16","18","100%","78",null,null);

                p.Panel00.set_flexgrow("1");
                p.Panel00.move("40","0","100%","360",null,null);

                p.Div02.move("40","438","80","32",null,null);

                p.Panel01_00.set_flexmainaxisalign("start");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.move("16","18","100%","74",null,null);

                p.Panel01_00_00.move("16","18","100%","74",null,null);

                p.Div02_00.move("40","438","100%","32",null,null);

                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("10","10","100%","120",null,null);

                p.Static00_02_00.move("40","438","100%","26",null,null);

                p.Div02_00_00.move("40","438","80","32",null,null);

                p.Div02_00_00_00.move("40","438","80","32",null,null);

                p.Panel01_00_00_00.move("16","18","100%","74",null,null);

                p.Static00_02_00_00.move("40","438","75%","74",null,null);

                p.Static00_02_00_00_00.move("40","438","75%","74",null,null);
            	}
            );
            obj.set_type("default");
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1350,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일 업로드");

                p.staH2.set_taborder("0");
                p.staH2.set_text("파일 업로드");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","190","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("File upload");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","143","60",null,null);

                p.Static00_02.set_taborder("3");
                p.Static00_02.set_text("파일 업로드는 하나 이상의 디바이스의 로컬 파일을 선택하고 첨부하는 데 사용하는 입력 컴포넌트이다.");
                p.Static00_02.set_cssclass("sta_WF_Descript");
                p.Static00_02.set_fittocontents("height");
                p.Static00_02.move("0","85",null,"74","0",null);

                p.Div01.set_taborder("4");
                p.Div01.set_text("Div01");
                p.Div01.set_cssclass("div_WF_FileBox");
                p.Div01.set_fittocontents("height");
                p.Div01.set_accessibilityenable("false");
                p.Div01.set_tabstop("false");
                p.Div01.move("0","Static00_02:100",null,"1045","40",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.move("0","Static00_02:100",null,"1045","0",null);

                p.Static00_02.move("0","85",null,"100","0",null);
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
        this.registerScript("comp08_inp04.xfdl", function() {

        this.inp04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.inp04_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp08_inp04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
