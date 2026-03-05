(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_guide01");
            this.set_titletext("이용가이드 상시상담");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,5285);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data01", this);
            obj._setContents("<ColumnInfo><Column id=\"제공받는자\" type=\"STRING\" size=\"256\"/><Column id=\"제공목적\" type=\"STRING\" size=\"256\"/><Column id=\"제공항목\" type=\"STRING\" size=\"256\"/><Column id=\"보유이용기간\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"제공받는자\">시도교육청</Col><Col id=\"제공목적\">온라인(서면) 상담 처리</Col><Col id=\"제공항목\">온라인(서면) 상담 내용 및 신청자 정보</Col><Col id=\"보유이용기간\">해당 기관의 지침에 따름</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","12","36",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학부모소통서비스에서는 상시적으로 방문/유선상담을 예약할 수 있습니다.");
            obj.set_cssclass("sta_WF_Txt22M");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:13",null,"215","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GuideInfo");
            obj.set_text("1. 교(직)원의 일정을 확인 한 후 방문상담 또는 유선상담을 예약할 수 있습니다.\r\n2. 최대 3개까지 희망일시를 선택할 수 있습니다.\r\n3. 유선상담의 경우 예약확정 후 신청시 등록한 연락처로 수신받을 수 있습니다.\r\n\r\n단, 아래의 경우는 상시상담 예약 신청 대상이 아닙니다.\r\n· 집중상담주간에는 상시상담 예약을 할 수 없습니다.\r\n· 휴일, 수업시간 등 교(직)원이 상담이 불가능한 시간은 예약을 할 수 없습니다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","12","Static00_00:28",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상시상담예약 절차 안내");
            obj.set_cssclass("sta_WF_Txt22M");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"Static00_00:24","238","40","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상시상담예약신청 안내 영상");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_01:16","22%","270",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"113","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("01");
            obj.set_cssclass("sta_WF_Guide01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","126",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("로그인/자녀 선택");
            obj.set_cssclass("sta_WF_GuideTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","15","Static01:8",null,null,"15","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("자녀가 재학중인 학교를  처리기관으로 자동 지정됨");
            obj.set_cssclass("sta_WF_GuideTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","Div00:0","Static00_01:16","57","260",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GuideArrow");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","Static01:0","Static00_01:16","22%","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"113","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("02");
            obj.set_cssclass("sta_WF_Guide02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","126",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("상시상담 예약");
            obj.set_cssclass("sta_WF_GuideTitle");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","15","Static01:8",null,null,"15","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("상담 제목과 상담내용, 방법\r\n(방문,유선), 교(직)원 및 희망일시 선택 등으로 상담예약 신청");
            obj.set_cssclass("sta_WF_GuideTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","Div00_00:0","Static00_01:16","57","260",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GuideArrow");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","Static01_00:0","Static00_01:16","22%","270",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"113","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("03");
            obj.set_cssclass("sta_WF_Guide03");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","126",null,"32","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("접수/확정");
            obj.set_cssclass("sta_WF_GuideTitle");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","15","Static01:8",null,null,"15","0",null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("상담 교(직)원은 접수, 예약일정 확정 및 통보");
            obj.set_cssclass("sta_WF_GuideTxt");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Div00_00_00:0","Static00_01:16","57","260",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GuideArrow");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","Static01_00_00:0","Static00_01:16",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"113","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("04");
            obj.set_cssclass("sta_WF_Guide04");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","126",null,"32","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("상담진행");
            obj.set_cssclass("sta_WF_GuideTitle");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","15","Static01:8",null,null,"15","0",null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("방문 또는 유선을 통해 상담 진행");
            obj.set_cssclass("sta_WF_GuideTxt");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","0","Div00_00_00_00:34","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("01");
            obj.set_cssclass("sta_WF_Step");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Static03:10","Div00_00_00_00:34",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("로그인/자녀 선택");
            obj.set_cssclass("sta_WF_StepTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","Static03:10","Static02:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_StepTxt");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","Static02_00:32",null,"1024","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","ImageViewer00:34","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("02");
            obj.set_cssclass("sta_WF_Step");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","Static03_00:10","ImageViewer00:34",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("상시상담 예약");
            obj.set_cssclass("sta_WF_StepTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","50","Static02_01:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_StepTxt");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","0","Static02_00_00:32",null,"1024","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","ImageViewer00_00:34","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("03");
            obj.set_cssclass("sta_WF_Step");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","Static03_00_00:10","ImageViewer00_00:34",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("접수/확정");
            obj.set_cssclass("sta_WF_StepTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","50","Static02_01_00:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_StepTxt");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","0","Static02_00_00_00:32",null,"1024","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","ImageViewer00_00_00:34","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("04");
            obj.set_cssclass("sta_WF_Step");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","Static03_00_00_00:10","ImageViewer00_00_00:34",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("상담진행");
            obj.set_cssclass("sta_WF_StepTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","50","Static02_01_00_00:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_StepTxt");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00_00","0","Static02_00_00_00_00:32",null,"1024","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_WF_Guide");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("01");
                p.Static00.set_cssclass("sta_WF_Guide01");
                p.Static00.move("0","0",null,"113","0",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("로그인/자녀 선택");
                p.Static01.set_cssclass("sta_WF_GuideTitle");
                p.Static01.move("0","126",null,"32","0",null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("자녀가 재학중인 학교를  처리기관으로 자동 지정됨");
                p.Static01_00.set_cssclass("sta_WF_GuideTxt");
                p.Static01_00.move("15","Static01:8",null,null,"15","0");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("tablet","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("mobile","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.move("30","Static01:8",null,null,"30","0");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("02");
                p.Static00.set_cssclass("sta_WF_Guide02");
                p.Static00.move("0","0",null,"113","0",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("상시상담 예약");
                p.Static01.set_cssclass("sta_WF_GuideTitle");
                p.Static01.move("0","126",null,"32","0",null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("상담 제목과 상담내용, 방법\r\n(방문,유선), 교(직)원 및 희망일시 선택 등으로 상담예약 신청");
                p.Static01_00.set_cssclass("sta_WF_GuideTxt");
                p.Static01_00.move("15","Static01:8",null,null,"15","0");
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("tablet","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("mobile","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.move("10","Static01:8",null,null,"10","0");
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("03");
                p.Static00.set_cssclass("sta_WF_Guide03");
                p.Static00.move("0","0",null,"113","0",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("접수/확정");
                p.Static01.set_cssclass("sta_WF_GuideTitle");
                p.Static01.move("0","126",null,"32","0",null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("상담 교(직)원은 접수, 예약일정 확정 및 통보");
                p.Static01_00.set_cssclass("sta_WF_GuideTxt");
                p.Static01_00.move("15","Static01:8",null,null,"15","0");
            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00.form
            obj = new Layout("tablet","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00.form
            obj = new Layout("mobile","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.move("30","Static01:8",null,null,"30","0");
            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("04");
                p.Static00.set_cssclass("sta_WF_Guide04");
                p.Static00.move("0","0",null,"113","0",null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("상담진행");
                p.Static01.set_cssclass("sta_WF_GuideTitle");
                p.Static01.move("0","126",null,"32","0",null);

                p.Static01_00.set_taborder("2");
                p.Static01_00.set_text("방문 또는 유선을 통해 상담 진행");
                p.Static01_00.set_cssclass("sta_WF_GuideTxt");
                p.Static01_00.move("15","Static01:8",null,null,"15","0");
            	}
            );
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00_00.form
            obj = new Layout("tablet","",0,0,this.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","0",null,"113","0",null);
            	}
            );
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00_00.form
            obj = new Layout("mobile","",0,0,this.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","0",null,"113","0",null);

                p.Static01_00.move("30","Static01:8",null,null,"30","0");
            	}
            );
            this.Div00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1320,5285,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이용가이드 상시상담");

                p.Static00.set_taborder("0");
                p.Static00.set_text("학부모소통서비스에서는 상시적으로 방문/유선상담을 예약할 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Txt22M");
                p.Static00.set_fittocontents("height");
                p.Static00.move("12","36",null,"32","0",null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_cssclass("sta_WF_GuideInfo");
                p.Static00_00.set_text("1. 교(직)원의 일정을 확인 한 후 방문상담 또는 유선상담을 예약할 수 있습니다.\r\n2. 최대 3개까지 희망일시를 선택할 수 있습니다.\r\n3. 유선상담의 경우 예약확정 후 신청시 등록한 연락처로 수신받을 수 있습니다.\r\n\r\n단, 아래의 경우는 상시상담 예약 신청 대상이 아닙니다.\r\n· 집중상담주간에는 상시상담 예약을 할 수 없습니다.\r\n· 휴일, 수업시간 등 교(직)원이 상담이 불가능한 시간은 예약을 할 수 없습니다.");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("0","Static00:13",null,"215","0",null);

                p.Static00_01.set_taborder("2");
                p.Static00_01.set_text("상시상담예약 절차 안내");
                p.Static00_01.set_cssclass("sta_WF_Txt22M");
                p.Static00_01.move("12","Static00_00:28",null,"32","0",null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("상시상담예약신청 안내 영상");
                p.Button00.set_cssclass("btn_WF_Crud01");
                p.Button00.move(null,"Static00_00:24","238","40","0",null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Guide");
                p.Div00.move("0","Static00_01:16","22%","270",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_cssclass("sta_WF_GuideArrow");
                p.Static01.move("Div00:0","Static00_01:16","57","260",null,null);

                p.Div00_00.set_taborder("6");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_WF_Guide");
                p.Div00_00.move("Static01:0","Static00_01:16","22%","270",null,null);

                p.Static01_00.set_taborder("7");
                p.Static01_00.set_cssclass("sta_WF_GuideArrow");
                p.Static01_00.move("Div00_00:0","Static00_01:16","57","260",null,null);

                p.Div00_00_00.set_taborder("8");
                p.Div00_00_00.set_text("Div00");
                p.Div00_00_00.set_cssclass("div_WF_Guide");
                p.Div00_00_00.move("Static01_00:0","Static00_01:16","22%","270",null,null);

                p.Static01_00_00.set_taborder("9");
                p.Static01_00_00.set_cssclass("sta_WF_GuideArrow");
                p.Static01_00_00.move("Div00_00_00:0","Static00_01:16","57","260",null,null);

                p.Div00_00_00_00.set_taborder("10");
                p.Div00_00_00_00.set_text("Div00");
                p.Div00_00_00_00.set_cssclass("div_WF_Guide");
                p.Div00_00_00_00.move("Static01_00_00:0","Static00_01:16",null,"270","0",null);

                p.Static03.set_taborder("11");
                p.Static03.set_text("01");
                p.Static03.set_cssclass("sta_WF_Step");
                p.Static03.move("0","Div00_00_00_00:34","40","40",null,null);

                p.Static02.set_taborder("12");
                p.Static02.set_text("로그인/자녀 선택");
                p.Static02.set_cssclass("sta_WF_StepTitle");
                p.Static02.move("Static03:10","Div00_00_00_00:34",null,"40","0",null);

                p.Static02_00.set_taborder("13");
                p.Static02_00.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
                p.Static02_00.set_cssclass("sta_WF_StepTxt");
                p.Static02_00.set_fittocontents("height");
                p.Static02_00.move("Static03:10","Static02:8",null,"40","0",null);

                p.ImageViewer00.set_taborder("14");
                p.ImageViewer00.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_cssclass("img_WF_Guide");
                p.ImageViewer00.move("0","Static02_00:32",null,"1024","0",null);

                p.Static03_00.set_taborder("15");
                p.Static03_00.set_text("02");
                p.Static03_00.set_cssclass("sta_WF_Step");
                p.Static03_00.move("0","ImageViewer00:34","40","40",null,null);

                p.Static02_01.set_taborder("16");
                p.Static02_01.set_text("상시상담 예약");
                p.Static02_01.set_cssclass("sta_WF_StepTitle");
                p.Static02_01.move("Static03_00:10","ImageViewer00:34",null,"40","0",null);

                p.Static02_00_00.set_taborder("17");
                p.Static02_00_00.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
                p.Static02_00_00.set_cssclass("sta_WF_StepTxt");
                p.Static02_00_00.set_fittocontents("height");
                p.Static02_00_00.move("50","Static02_01:8",null,"40","0",null);

                p.ImageViewer00_00.set_taborder("18");
                p.ImageViewer00_00.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
                p.ImageViewer00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00.set_cssclass("img_WF_Guide");
                p.ImageViewer00_00.move("0","Static02_00_00:32",null,"1024","0",null);

                p.Static03_00_00.set_taborder("19");
                p.Static03_00_00.set_text("03");
                p.Static03_00_00.set_cssclass("sta_WF_Step");
                p.Static03_00_00.move("0","ImageViewer00_00:34","40","40",null,null);

                p.Static02_01_00.set_taborder("20");
                p.Static02_01_00.set_text("접수/확정");
                p.Static02_01_00.set_cssclass("sta_WF_StepTitle");
                p.Static02_01_00.move("Static03_00_00:10","ImageViewer00_00:34",null,"40","0",null);

                p.Static02_00_00_00.set_taborder("21");
                p.Static02_00_00_00.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
                p.Static02_00_00_00.set_cssclass("sta_WF_StepTxt");
                p.Static02_00_00_00.set_fittocontents("height");
                p.Static02_00_00_00.move("50","Static02_01_00:8",null,"40","0",null);

                p.ImageViewer00_00_00.set_taborder("22");
                p.ImageViewer00_00_00.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
                p.ImageViewer00_00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00_00.set_cssclass("img_WF_Guide");
                p.ImageViewer00_00_00.move("0","Static02_00_00_00:32",null,"1024","0",null);

                p.Static03_00_00_00.set_taborder("23");
                p.Static03_00_00_00.set_text("04");
                p.Static03_00_00_00.set_cssclass("sta_WF_Step");
                p.Static03_00_00_00.move("0","ImageViewer00_00_00:34","40","40",null,null);

                p.Static02_01_00_00.set_taborder("24");
                p.Static02_01_00_00.set_text("상담진행");
                p.Static02_01_00_00.set_cssclass("sta_WF_StepTitle");
                p.Static02_01_00_00.move("Static03_00_00_00:10","ImageViewer00_00_00:34",null,"40","0",null);

                p.Static02_00_00_00_00.set_taborder("25");
                p.Static02_00_00_00_00.set_text("자녀가 재학 중인 학교가 자동으로 처리기관으로 지정됩니다.\r\n별도의 학교 선택 없이 시스템에서 자동 설정되어 상담 신청이 가능합니다.");
                p.Static02_00_00_00_00.set_cssclass("sta_WF_StepTxt");
                p.Static02_00_00_00_00.set_fittocontents("height");
                p.Static02_00_00_00_00.move("50","Static02_01_00_00:8",null,"40","0",null);

                p.ImageViewer00_00_00_00.set_taborder("26");
                p.ImageViewer00_00_00_00.set_image("url(\'theme::neisScr/images/img_WF_Guide01_1.png\')");
                p.ImageViewer00_00_00_00.set_stretch("fixaspectratio");
                p.ImageViewer00_00_00_00.set_cssclass("img_WF_Guide");
                p.ImageViewer00_00_00_00.move("0","Static02_00_00_00_00:32",null,"1024","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",800,4240,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.move("0","Static00:13",null,"215","0",null);

                p.Div00_00_00_00.move("0","Static01_00_00:0",null,"250","0",null);

                p.Static01_00_00.set_cssclass("sta_WF_GuideArrowM");
                p.Static01_00_00.move("0","Div00_00_00:0",null,"82","0",null);

                p.Div00_00_00.move("0","Static01_00:0",null,"250","0",null);

                p.Static01_00.set_cssclass("sta_WF_GuideArrowM");
                p.Static01_00.move("0","Div00_00:0",null,"82","0",null);

                p.Div00_00.move("0","Static01:0",null,"250","0",null);

                p.Static01.set_cssclass("sta_WF_GuideArrowM");
                p.Static01.move("0","Div00:0",null,"82","0",null);

                p.Div00.move("0","Static00_01:16",null,"250","0",null);

                p.ImageViewer00.set_fittocontents("none");
                p.ImageViewer00.move("0","Static02_00:32",null,"600","0",null);

                p.ImageViewer00_00.move("0","Static02_00_00:32",null,"600","0",null);

                p.ImageViewer00_00_00.move("0","Static02_00_00_00:32",null,"600","0",null);

                p.ImageViewer00_00_00_00.move("0","Static02_00_00_00_00:32",null,"600","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",480,3643,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_00.set_cssclass("sta_WF_GuideInfoM");
                p.Static00_00.move("0","Static00:13",null,"316","0",null);

                p.Div00_00_00_00.move("40","Static01_00_00:0",null,"250","40",null);

                p.Static01_00_00.set_cssclass("sta_WF_GuideArrowM");
                p.Static01_00_00.move("0","Div00_00_00:0",null,"82","0",null);

                p.Div00_00_00.move("40","Static01_00:0",null,"250","40",null);

                p.Static01_00.set_cssclass("sta_WF_GuideArrowM");
                p.Static01_00.move("0","Div00_00:0",null,"82","0",null);

                p.Div00_00.move("40","Static01:0",null,"250","40",null);

                p.Static01.set_cssclass("sta_WF_GuideArrowM");
                p.Static01.move("0","Div00:0",null,"82","0",null);

                p.Div00.move("40","Static00_01:24",null,"250","40",null);

                p.ImageViewer00.set_fittocontents("none");
                p.ImageViewer00.set_cssclass("img_WF_GuideM");
                p.ImageViewer00.move("0","Static02_00:16",null,"300","0",null);

                p.ImageViewer00_00.set_cssclass("img_WF_GuideM");
                p.ImageViewer00_00.move("0","Static02_00_00:16",null,"300","0",null);

                p.ImageViewer00_00_00.set_cssclass("img_WF_GuideM");
                p.ImageViewer00_00_00.move("0","Static02_00_00_00:16",null,"300","0",null);

                p.ImageViewer00_00_00_00.set_cssclass("img_WF_GuideM");
                p.ImageViewer00_00_00_00.move("0","Static02_00_00_00_00:16",null,"300","0",null);

                p.Static00.set_cssclass("sta_WF_Txt18M");
                p.Static00.move("12","30",null,"50","0",null);

                p.Button00.set_text("안내 영상");
                p.Button00.move(null,"Static00_00:24","109","40","0",null);

                p.Static02_00.move("5","Static02:8",null,"78","5",null);

                p.Static02_00_00.move("5","Static02_01:8",null,"78","5",null);

                p.Static02_00_00_00.move("5","Static02_01_00:8",null,"78","5",null);

                p.Static02_00_00_00_00.move("5","Static02_01_00_00:8",null,"78","5",null);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00_00.form.Static01.addEventHandler("onclick",this.Div00_00_Static01_onclick,this);
        };
        this.loadIncludeScript("scr_guide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
