(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern01");
            this.set_titletext("개인 식별 정보 입력");
            this.set_cssclass("sta_WF_Infor13N");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","312","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인 식별 정보 입력");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("PII");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("개인 식별 정보는 사용자 본인을 포함하여 특정한 개인의 신원을 밝히거나 개인/단체에 대한 기본 정보 확인에 사용되는 모든 정보를 의미한다. 사용자에게 개인 식별 정보의 입력을 요청하기 전에 해당 정보를 반드시 수집해야 하는지 다시 한 번 점검하고 사용자에게 입력이 필요한 이유를 명확하게 설명하는 것이 좋다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","Static00:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_01:24","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_02:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","260","24","280","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","84","15.5","280","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이름을 입력해주세요");
            obj.set_cssclass("sta_WF_infor13");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField00_00","84","Static00_01:8","280","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_labelposition("outside");
            obj.set_usetrailingbutton("true");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_contentheight("48");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","76",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"TextField00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","Div00:80","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","0","Static00_03:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaCal","260","24","280","29",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static01","84","15.5","280","20",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("생년월일 8자리를 입력해주세요");
            obj.set_cssclass("sta_WF_infor13");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","521","157","280","48",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("2");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_displaynulltext("YYYY.MM.DD");
            obj.set_accessibilitylabel("생년월일");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","76",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/></Contents>");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static00_04","0","Div00_01:80","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_02","0","Static00_04:24",null,"231","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaGender","260","24","280","29",null,null,null,null,null,null,this.Div00_02.form);
            obj.set_taborder("0");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00_02.addChild(obj.name, obj);

            obj = new Radio("Radio00","524","127","280","138",null,null,null,null,null,null,this.Div00_02.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("성별");
            var Div00_02_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_02_form_Radio00_innerdataset", obj);
            Div00_02_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "남성"},{"codecolumn" : "1","datacolumn" : "여성"},{"codecolumn" : "2","datacolumn" : "선택 안 함"}]});
            obj.set_innerdataset(Div00_02_form_Radio00_innerdataset);
            this.Div00_02.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","138",null,null,null,null,null,null,this.Div00_02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Radio00\"/></Contents>");
            this.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static00_05","0","Div00_02:80","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_03","0","Static00_05:24",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaPhone","260","24","280","29",null,null,null,null,null,null,this.Div00_03.form);
            obj.set_taborder("0");
            obj.set_text("휴대전화 번호");
            obj.set_cssclass("sta_WF_Txt19B");
            this.Div00_03.addChild(obj.name, obj);

            obj = new Static("Static01","84","15.5","280","20",null,null,null,null,null,null,this.Div00_03.form);
            obj.set_taborder("1");
            obj.set_text("휴대전화 번호 11자리를 입력해주세요");
            obj.set_cssclass("sta_WF_infor13");
            this.Div00_03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","479","139","280","48",null,null,null,null,null,null,this.Div00_03.form);
            obj.set_taborder("2");
            obj.set_value("01012345678");
            obj.set_cssclass("msk_WF_Phone");
            obj.set_type("string");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_accessibilitylabel("휴대전화 번호");
            this.Div00_03.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","76",null,null,null,null,null,null,this.Div00_03.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00\"/></Contents>");
            this.Div00_03.addChild(obj.name, obj);

            obj = new Static("Static00_06","0","Div00_03:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("예시");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_07","0","Static00_06:40","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","Static00_07:24",null,"275","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaName","39","39",null,"23","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","39","StaName:8",null,"48","39",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("이름");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","39","Edit00:8",null,"26","39",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","39","0","361","26",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다. 관련");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Infor13N");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","39","0","39","26",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Link13");
            obj.set_fittocontents("width");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","39","0","79","26",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("을 참고하세요.");
            obj.set_cssclass("sta_WF_Infor13");
            obj.set_fittocontents("width");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaGender","39","Div02:23",null,"23","39",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","39","StaGender:9","304","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_accessibilitylabel("성별");
            var Div03_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div03_form_Radio00_00_innerdataset", obj);
            Div03_form_Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "남성"},{"codecolumn" : "1","datacolumn" : "여성"},{"codecolumn" : "2","datacolumn" : "선택 안 함"}]});
            obj.set_innerdataset(Div03_form_Radio00_00_innerdataset);
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","39","Radio00_00:0","110","39",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("이름");
                p.Static00.set_cssclass("sta_WF_Txt19B");
                p.Static00.move("260","24","280","29",null,null);

                p.Static00_01.set_taborder("1");
                p.Static00_01.set_text("이름을 입력해주세요");
                p.Static00_01.set_cssclass("sta_WF_infor13");
                p.Static00_01.move("84","15.5","280","22",null,null);

                p.TextField00_00.set_taborder("2");
                p.TextField00_00.set_labelposition("outside");
                p.TextField00_00.set_usetrailingbutton("true");
                p.TextField00_00.set_helpertext("메시지를 입력해주세요");
                p.TextField00_00.set_contentheight("48");
                p.TextField00_00.move("84","Static00_01:8","280","48",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("84","47","280","76",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 40px 40px 40px");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 40px 40px 40px");
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaCal.set_taborder("0");
                p.StaCal.set_text("생년월일");
                p.StaCal.set_cssclass("sta_WF_Txt19B");
                p.StaCal.move("260","24","280","29",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("생년월일 8자리를 입력해주세요");
                p.Static01.set_cssclass("sta_WF_infor13");
                p.Static01.move("84","15.5","280","20",null,null);

                p.Calendar00.set_taborder("2");
                p.Calendar00.set_editformat("yyyy.MM.dd");
                p.Calendar00.set_dateformat("yyyy.MM.dd ddd");
                p.Calendar00.set_displaynulltext("YYYY.MM.DD");
                p.Calendar00.set_accessibilitylabel("생년월일");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.set_usetrailingday("true");
                p.Calendar00.move("521","157","280","48",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("84","47","280","76",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_02.form
            obj = new Layout("default","",0,0,this.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaGender.set_taborder("0");
                p.StaGender.set_text("성별");
                p.StaGender.set_cssclass("sta_WF_Txt19B");
                p.StaGender.move("260","24","280","29",null,null);

                p.Radio00.set_taborder("1");
                p.Radio00.set_innerdataset(Div00_02_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_accessibilitylabel("성별");
                p.Radio00.move("524","127","280","138",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("84","47","280","138",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_02.form
            obj = new Layout("Layout0","",0,0,this.Div00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_03.form
            obj = new Layout("default","",0,0,this.Div00_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaPhone.set_taborder("0");
                p.StaPhone.set_text("휴대전화 번호");
                p.StaPhone.set_cssclass("sta_WF_Txt19B");
                p.StaPhone.move("260","24","280","29",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("휴대전화 번호 11자리를 입력해주세요");
                p.Static01.set_cssclass("sta_WF_infor13");
                p.Static01.move("84","15.5","280","20",null,null);

                p.MaskEdit00.set_taborder("2");
                p.MaskEdit00.set_value("01012345678");
                p.MaskEdit00.set_cssclass("msk_WF_Phone");
                p.MaskEdit00.set_type("string");
                p.MaskEdit00.set_format("@@@-@@@@-@@@@");
                p.MaskEdit00.set_accessibilitylabel("휴대전화 번호");
                p.MaskEdit00.move("479","139","280","48",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("84","47","280","76",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_03.form
            obj = new Layout("Layout0","",0,0,this.Div00_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00_03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form.Div02.form
            obj = new Layout("default","",0,0,this.Div03.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("개명한 경우 회원 정보에서 이름을 변경한 후 신청 가능합니다. 관련");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_Infor13N");
                p.Static00.move("39","0","361","26",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("도움말");
                p.Button00.set_cssclass("btn_WF_Link13");
                p.Button00.set_fittocontents("width");
                p.Button00.move("39","0","39","26",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_text("을 참고하세요.");
                p.Static01.set_cssclass("sta_WF_Infor13");
                p.Static01.set_fittocontents("width");
                p.Static01.move("39","0","79","26",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.Div03.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div03.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.Div03.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaName.set_taborder("0");
                p.StaName.set_text("이름");
                p.StaName.set_cssclass("sta_WF_Lable15R");
                p.StaName.move("39","39",null,"23","0",null);

                p.Edit00.set_taborder("1");
                p.Edit00.set_accessibilitylabel("이름");
                p.Edit00.move("39","StaName:8",null,"48","39",null);

                p.Div02.set_taborder("2");
                p.Div02.set_text("Div02");
                p.Div02.set_fittocontents("height");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("39","Edit00:8",null,"26","39",null);

                p.StaGender.set_taborder("3");
                p.StaGender.set_text("성별");
                p.StaGender.set_cssclass("sta_WF_Lable15R");
                p.StaGender.move("39","Div02:23",null,"23","39",null);

                p.Radio00_00.set_taborder("4");
                p.Radio00_00.set_innerdataset(Div03_form_Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_direction("vertical");
                p.Radio00_00.set_accessibilitylabel("성별");
                p.Radio00_00.move("39","StaGender:9","304","26",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_accessibilityenable("false");
                p.Static00.move("39","Radio00_00:0","110","39",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_spacing("");
            obj.set_flexwrap("nowrap");
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div02.move("23","Edit00:8",null,"39","23",null);

                p.StaName.move("23","39",null,"23","23",null);

                p.Edit00.move("23","StaName:8",null,"48","23",null);

                p.StaGender.move("23","Div02:23",null,"23","23",null);

                p.Radio00_00.move("23","StaGender:9","304","26",null,null);
            	}
            );
            obj.set_type("default");
            obj.set_spacing("");
            obj.set_flexwrap("nowrap");
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,2330,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("개인 식별 정보 입력");
                p.set_cssclass("sta_WF_Infor13N");

                p.staH2.set_taborder("0");
                p.staH2.set_text("개인 식별 정보 입력");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.set_fittocontents("width");
                p.staH2.move("0","0","312","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","19","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("PII");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","50","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("개인 식별 정보는 사용자 본인을 포함하여 특정한 개인의 신원을 밝히거나 개인/단체에 대한 기본 정보 확인에 사용되는 모든 정보를 의미한다. 사용자에게 개인 식별 정보의 입력을 요청하기 전에 해당 정보를 반드시 수집해야 하는지 다시 한 번 점검하고 사용자에게 입력이 필요한 이유를 명확하게 설명하는 것이 좋다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_01.set_taborder("4");
                p.Static00_01.set_text("유형");
                p.Static00_01.set_cssclass("sta_WF_H2_pc");
                p.Static00_01.set_accessibilityrole("heading3");
                p.Static00_01.move("0","Static00:80","300","60",null,null);

                p.Static00_02.set_taborder("5");
                p.Static00_02.set_text("이름");
                p.Static00_02.set_cssclass("sta_WF_H4_pc");
                p.Static00_02.set_accessibilityrole("heading4");
                p.Static00_02.move("0","Static00_01:24","300","32",null,null);

                p.Div00.set_taborder("6");
                p.Div00.set_cssclass("div_GUIDE_SubBg");
                p.Div00.set_text("Div00");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","Static00_02:24",null,"200","0",null);

                p.Static00_03.set_taborder("7");
                p.Static00_03.set_text("생년월일");
                p.Static00_03.set_cssclass("sta_WF_H4_pc");
                p.Static00_03.set_accessibilityrole("heading4");
                p.Static00_03.move("0","Div00:80","300","32",null,null);

                p.Div00_01.set_taborder("8");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_cssclass("div_GUIDE_SubBg");
                p.Div00_01.set_accessibilityenable("false");
                p.Div00_01.move("0","Static00_03:24",null,"200","0",null);

                p.Static00_04.set_taborder("9");
                p.Static00_04.set_text("성별");
                p.Static00_04.set_cssclass("sta_WF_H4_pc");
                p.Static00_04.set_accessibilityrole("heading4");
                p.Static00_04.move("0","Div00_01:80","300","32",null,null);

                p.Div00_02.set_taborder("10");
                p.Div00_02.set_text("Div00");
                p.Div00_02.set_cssclass("div_GUIDE_SubBg");
                p.Div00_02.set_accessibilityenable("false");
                p.Div00_02.move("0","Static00_04:24",null,"231","0",null);

                p.Static00_05.set_taborder("11");
                p.Static00_05.set_text("전화번호");
                p.Static00_05.set_cssclass("sta_WF_H4_pc");
                p.Static00_05.set_accessibilityrole("heading5");
                p.Static00_05.move("0","Div00_02:80","300","32",null,null);

                p.Div00_03.set_taborder("12");
                p.Div00_03.set_text("Div00");
                p.Div00_03.set_cssclass("div_GUIDE_SubBg");
                p.Div00_03.set_accessibilityenable("false");
                p.Div00_03.move("0","Static00_05:24",null,"200","0",null);

                p.Static00_06.set_taborder("13");
                p.Static00_06.set_text("예시");
                p.Static00_06.set_cssclass("sta_WF_ParaH3_pc");
                p.Static00_06.set_accessibilityrole("heading4");
                p.Static00_06.move("0","Div00_03:80","300","60",null,null);

                p.Static00_07.set_taborder("14");
                p.Static00_07.set_text("기본");
                p.Static00_07.set_cssclass("sta_WF_H4_pc");
                p.Static00_07.set_accessibilityrole("heading5");
                p.Static00_07.move("0","Static00_06:40","300","38",null,null);

                p.Div03.set_taborder("15");
                p.Div03.set_cssclass("div_WF_Detailbox");
                p.Div03.set_text("");
                p.Div03.set_fittocontents("height");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("0","Static00_07:24",null,"275","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,2330,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","85",null,"204","0",null);

                p.Div03.move("0","Static00_07:24",null,"291","0",null);
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
        this.registerScript("pattern01.xfdl", function() {

        this.pattern01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern01_onload,this);
            this.Static00_06.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
            this.Static00_07.addEventHandler("onclick",this.Static00_00_00_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("pattern01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
