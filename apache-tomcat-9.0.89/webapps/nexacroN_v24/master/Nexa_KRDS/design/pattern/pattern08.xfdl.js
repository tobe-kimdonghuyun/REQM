(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern08");
            this.set_titletext("입력 폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입력 폼");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Input Form");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("입력폼은 사용자가 데이터를 입력하여 서버로 전송하는 데 사용하는 콘텐츠 섹션으로 하나 이상의 입력 컨트롤로 구성된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","staDescript:85","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:24","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구조");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static02:24",null,"822","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","39",null,"48","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("전입신고");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","Static02_00:40",null,"90","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Div03\"/><PanelItem id=\"PanelItem04\" componentid=\"Div03_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","29","98","20%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","100%","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_accessibilitylabel("1단계 유의사항 확인");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaStep1","0","Button00:8","100%","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaStnm1","0","StaStep1:2","100%","23",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("유의사항 확인");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","199","98","20%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","100%","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_StepOn");
            obj.set_text("");
            obj.set_accessibilitylabel("2단계 신청인 정보");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("StaStep2","0","Button00:8","100%","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("StaStnm2","0","StaStep2:2","100%","23",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("신청인 정보");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","368","98","20%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","100%","20",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Step");
            obj.set_accessibilitylabel("3단계 이사 전 살던 곳");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("StaStep3","0","Button00:8","100%","20",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("3단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("StaStnm3","0","StaStep3:2","100%","23",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("이사 전 살던 곳");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div03","538","98","20%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","100%","20",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Step");
            obj.set_accessibilitylabel("4단계 이사 온 곳");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Static("StaStep4","0","Button00:8","100%","20",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("4단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Static("StaStnm4","0","StaStep4:2","100%","23",null,null,null,null,null,null,this.Div00.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("이사 온 곳");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.Div00.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div03_00","708","98","20%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","20","20",null,null,null,null,null,null,this.Div00.form.Div03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_StepEnd");
            obj.set_accessibilitylabel("5단계 추가신청(제목)");
            this.Div00.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("StaStep5","0","Button00:8","100%","20",null,null,null,null,null,null,this.Div00.form.Div03_00.form);
            obj.set_taborder("1");
            obj.set_text("5단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.Div00.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("StaStnm5","0","StaStep5:2","100%","23",null,null,null,null,null,null,this.Div00.form.Div03_00.form);
            obj.set_taborder("2");
            obj.set_text("추가 신청(제목)");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.Div00.form.Div03_00.addChild(obj.name, obj);

            obj = new Static("Static01","39","Panel00:48","42","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_Point17B");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:6","Panel00:48","57","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("/ 4단계");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","39","Static01_00:8",null,"48","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("유의사항 확인");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","39","Static02_00_00:40",null,"394","39",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_StartInfor");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","39","39","194","36",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("시작하기 전에");
            obj.set_cssclass("sta_WF_Before");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","39","99",null,"87","39",null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("주민등록 관련 신고는 행정청이 수리한 때부터 신고의 효력이 발생합니다. \r\n근무시간(18:00) 이후나 토요일, 공휴일에 신청하는 경우 다음 근무일(세대주 확인이 필요한 경우 세대주 확인 완료일)에 신청이 접수되어 담당자 확인 후 신고가 수리 또는 반려됩니다.");
            obj.set_cssclass("sta_WF_Para19RTop");
            obj.set_fittocontents("height");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Static01:48","149","29",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("본인확인 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","Static02:16","149","29",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("인증서 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","39","Static02_00:16",null,"29","39",null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("세대주 정보(이름, 주민등록번호, 휴대전화번호) 필요");
            obj.set_cssclass("sta_WF_Para19RChk");
            obj.set_fittocontents("height");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03","40","Static02_00_00:0","119","39",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","269","Div00_00:0","120","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div00:40",null,"1493","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","39","40","42","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("4단계");
            obj.set_cssclass("sta_WF_Point17B");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:6","40","57","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("/ 5단계");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","Static01:20",null,"48","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("이사 온 곳");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","39","Static02_00:8","306","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("전체 항목 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_Para19RChk");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div02","39","Static02_01:30",null,"703","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","39",null,"38","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("이사 온 곳 주소입력");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","39","Static02_00:24",null,"29","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("기본주소");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","Static02_00_00:24",null,"109","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"StaAdd\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd","39","142","100%","23",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","31","100%","78",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","39","173","84.8314606741573%","78",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("검색 버튼을 눌러주세요");
            obj.set_accessibilitylabel("주소");
            obj.set_text("");
            this.Div02.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","48","100%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","705","178","78","50",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("주소");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","39","Panel00:24",null,"109","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Div00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Div00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Div00_00_01\"/></Contents>");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div00_00","39","173","218","109",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd01","0","0","100%","23",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("건축물 구분");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","StaAdd01:8","99.81684981684981%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("지상");
            obj.set_accessibilitylabel("건축물구분");
            obj.set_value("");
            obj.set_index("-1");
            this.Div02.form.Div02.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","79","100%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","10","41","218","109",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd02","0","0","99.81684981684981%","23",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("본번");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","30","99.81684981684981%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_displaynulltext("본번");
            obj.set_accessibilitylabel("본번");
            obj.set_text("");
            this.Div02.form.Div02.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","78","99.81684981684981%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01","0","31","218","109",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd03","0","0","84.10493827160494%","23",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("부번");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","30","99.92283950617285%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("부번");
            obj.set_accessibilitylabel("부번");
            obj.set_text("");
            this.Div02.form.Div02.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","78","99.92283950617285%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","39","Panel00_00:24",null,"109","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"StaAdd04\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_01\"/></Contents>");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd04","39","142","100%","23",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("12");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div00_01","39","173","75%","78",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("상세주소를 입력해주세요");
            obj.set_cssclass("error");
            obj.set_accessibilitylabel("상세주소");
            obj.set_text("");
            this.Div02.form.Div02.form.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","48","100%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("상세주소를 반드시 확인하시기 바랍니다. 예) 101동 101호(인사동, 무궁화 아파트)");
            obj.set_cssclass("sta_WF_helpinvaild");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.Div02.form.Div02.form.Div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","39","Panel00_01:24",null,"109","39",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Div00_00_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Div00_00_00_00\"/></Contents>");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div00_00_02","39","173","356","109",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("StaAdd05","0","0","100%","23",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_02.form);
            obj.set_taborder("0");
            obj.set_text("다가구 주택여부");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div02.form.Div02.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","StaAdd05:8","99.81684981684981%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_02.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("다가구 주택여부");
            obj.set_text("모름");
            obj.set_value("");
            obj.set_index("-1");
            this.Div02.form.Div02.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","79","100%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_02.form);
            obj.set_taborder("2");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00_00_02.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","10","41","356","109",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","0","0","99.81684981684981%","23",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_text("");
            obj.set_visible("true");
            this.Div02.form.Div02.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","31","99.81684981684981%","48",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_value("예) 무궁화빌라 1층 2호");
            obj.set_enable("false");
            obj.set_text("예) 무궁화빌라 1층 2호");
            this.Div02.form.Div02.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","Edit00:0","99.81684981684981%","28",null,null,null,null,null,null,this.Div02.form.Div02.form.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            obj.set_visible("false");
            this.Div02.form.Div02.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Panel00_00_00:0","120","39",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("17");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00","39","Div02:40",null,"420","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","39",null,"38","39",null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("0");
            obj.set_text("부가 정보");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","39","Static02_00:24",null,"29","39",null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("1");
            obj.set_text("다음 중에서 해당하는 것을 선택해 주세요");
            obj.set_cssclass("sta_WF_H5");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading5");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","39","Static02_00_00:24","260","30",null,null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div02_form_Div02_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div02_form_Div02_00_form_Radio00_innerdataset", obj);
            Div02_form_Div02_00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "세대주 유지"}]});
            obj.set_innerdataset(Div02_form_Div02_00_form_Radio00_innerdataset);
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00","39","Radio00:3",null,"26","39",null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("3");
            obj.set_text("빈집으로 이사하여 세대주를 \"홍길동\"으로 유지하고 이사 온 사람끼지 세대를 구성합니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_fittocontents("height");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","39","Static00:24","260","30",null,null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div02_form_Div02_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div02_form_Div02_00_form_Radio00_00_innerdataset", obj);
            Div02_form_Div02_00_form_Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "세대주 변경"}]});
            obj.set_innerdataset(Div02_form_Div02_00_form_Radio00_00_innerdataset);
            obj.set_text("라디오버튼");
            obj.set_value("0");
            obj.set_index("0");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","39","Radio00_00:3",null,"26","39",null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("5");
            obj.set_text("빈집으로 이사하여 새로운 세대주로 변경하고 이사 온 사람까지 세대를 구성합니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_fittocontents("height");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","39","Static00_00:24","260","30",null,null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div02_form_Div02_00_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("Div02_form_Div02_00_form_Radio00_00_00_innerdataset", obj);
            Div02_form_Div02_00_form_Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "이사온 곳 세대주 유지"}]});
            obj.set_innerdataset(Div02_form_Div02_00_form_Radio00_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","39","Radio00_00_00:3",null,"26","39",null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("7");
            obj.set_text("이사온 곳에 기존에 살고 있는 세대주로 세대를 구성합니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_fittocontents("height");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Static00_00_00:0","120","39",null,null,null,null,null,null,this.Div02.form.Div02_00.form);
            obj.set_taborder("8");
            this.Div02.form.Div02_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","Div02:500",null,"48","39",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","39","Panel01:0","120","39",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","39","0","112","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("이전으로");
            this.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","169","1403","240","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03\"/></Contents>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","169","1403","112","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("임시저장");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","279","1403","112","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("다음으로");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div02:40",null,"521","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","39","39",null,"441","39",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","39","39",null,"38","39",null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("발급 유형 선택");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Stah5","39","101","78","29",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("발급 유형");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","Stah5:0","100","30","30",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Tooltip");
            obj.set_text("");
            obj.set_accessibilitylabel("[@Stah5]");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","39","Stah5:24","218","246",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Div03_form_Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div03_form_Div00_form_Radio00_innerdataset", obj);
            Div03_form_Div00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "온라인 발급 - 본인 출력"},{"codecolumn" : "1","datacolumn" : "온라인 발급 - 전자지갑"},{"codecolumn" : "2","datacolumn" : "온라인 발급 - 제3자 제출"},{"codecolumn" : "3","datacolumn" : "등기우편"},{"codecolumn" : "4","datacolumn" : "일반우편"}]});
            obj.set_innerdataset(Div03_form_Div00_form_Radio00_innerdataset);
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Radio00:0","120","39",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("4");
            obj.set_accessibilityenable("false");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","39","Div00:0","120","39",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_StepOff");
                p.Button00.set_accessibilitylabel("1단계 유의사항 확인");
                p.Button00.move("0","0","100%","20",null,null);

                p.StaStep1.set_taborder("1");
                p.StaStep1.set_text("1단계");
                p.StaStep1.set_cssclass("sta_WF_infor13");
                p.StaStep1.set_visible("true");
                p.StaStep1.move("0","Button00:8","100%","20",null,null);

                p.StaStnm1.set_taborder("2");
                p.StaStnm1.set_text("유의사항 확인");
                p.StaStnm1.set_cssclass("sta_WF_15B");
                p.StaStnm1.set_visible("true");
                p.StaStnm1.move("0","StaStep1:2","100%","23",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStnm1.set_visible("false");

                p.StaStep1.set_visible("false");
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_StepOn");
                p.Button00.set_text("");
                p.Button00.set_accessibilitylabel("2단계 신청인 정보");
                p.Button00.move("0","0","100%","20",null,null);

                p.StaStep2.set_taborder("1");
                p.StaStep2.set_text("2단계");
                p.StaStep2.set_cssclass("sta_WF_infor13");
                p.StaStep2.set_visible("true");
                p.StaStep2.move("0","Button00:8","100%","20",null,null);

                p.StaStnm2.set_taborder("2");
                p.StaStnm2.set_text("신청인 정보");
                p.StaStnm2.set_cssclass("sta_WF_15B");
                p.StaStnm2.set_visible("true");
                p.StaStnm2.move("0","StaStep2:2","100%","23",null,null);
            	}
            );
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStnm2.set_visible("false");

                p.StaStep2.set_visible("false");
            	}
            );
            this.Div00.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_Step");
                p.Button00.set_accessibilitylabel("3단계 이사 전 살던 곳");
                p.Button00.move("0","0","100%","20",null,null);

                p.StaStep3.set_taborder("1");
                p.StaStep3.set_text("3단계");
                p.StaStep3.set_cssclass("sta_WF_infor13");
                p.StaStep3.set_visible("true");
                p.StaStep3.move("0","Button00:8","100%","20",null,null);

                p.StaStnm3.set_taborder("2");
                p.StaStnm3.set_text("이사 전 살던 곳");
                p.StaStnm3.set_cssclass("sta_WF_15B");
                p.StaStnm3.set_visible("true");
                p.StaStnm3.move("0","StaStep3:2","100%","23",null,null);
            	}
            );
            this.Div00.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div01_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStnm3.set_visible("false");

                p.StaStep3.set_visible("false");
            	}
            );
            this.Div00.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_Step");
                p.Button00.set_accessibilitylabel("4단계 이사 온 곳");
                p.Button00.move("0","0","100%","20",null,null);

                p.StaStep4.set_taborder("1");
                p.StaStep4.set_text("4단계");
                p.StaStep4.set_cssclass("sta_WF_infor13");
                p.StaStep4.set_visible("true");
                p.StaStep4.move("0","Button00:8","100%","20",null,null);

                p.StaStnm4.set_taborder("2");
                p.StaStnm4.set_text("이사 온 곳");
                p.StaStnm4.set_cssclass("sta_WF_15B");
                p.StaStnm4.set_visible("true");
                p.StaStnm4.move("0","StaStep4:2","100%","23",null,null);
            	}
            );
            this.Div00.form.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStnm4.set_visible("false");

                p.StaStep4.set_visible("false");
            	}
            );
            this.Div00.form.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div03_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_cssclass("btn_WF_StepEnd");
                p.Button00.set_accessibilitylabel("5단계 추가신청(제목)");
                p.Button00.move("0","0","20","20",null,null);

                p.StaStep5.set_taborder("1");
                p.StaStep5.set_text("5단계");
                p.StaStep5.set_cssclass("sta_WF_infor13");
                p.StaStep5.set_visible("true");
                p.StaStep5.move("0","Button00:8","100%","20",null,null);

                p.StaStnm5.set_taborder("2");
                p.StaStnm5.set_text("추가 신청(제목)");
                p.StaStnm5.set_cssclass("sta_WF_15B");
                p.StaStnm5.set_visible("true");
                p.StaStnm5.move("0","StaStep5:2","100%","23",null,null);
            	}
            );
            this.Div00.form.Div03_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div03_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStnm5.set_visible("false");

                p.StaStep5.set_visible("false");
            	}
            );
            this.Div00.form.Div03_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("시작하기 전에");
                p.Static00.set_cssclass("sta_WF_Before");
                p.Static00.set_accessibilityrole("heading4");
                p.Static00.move("39","39","194","36",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("주민등록 관련 신고는 행정청이 수리한 때부터 신고의 효력이 발생합니다. \r\n근무시간(18:00) 이후나 토요일, 공휴일에 신청하는 경우 다음 근무일(세대주 확인이 필요한 경우 세대주 확인 완료일)에 신청이 접수되어 담당자 확인 후 신고가 수리 또는 반려됩니다.");
                p.Static01.set_cssclass("sta_WF_Para19RTop");
                p.Static01.set_fittocontents("height");
                p.Static01.move("39","99",null,"87","39",null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("본인확인 필요");
                p.Static02.set_cssclass("sta_WF_Para19RChk");
                p.Static02.move("39","Static01:48","149","29",null,null);

                p.Static02_00.set_taborder("3");
                p.Static02_00.set_text("인증서 필요");
                p.Static02_00.set_cssclass("sta_WF_Para19RChk");
                p.Static02_00.move("39","Static02:16","149","29",null,null);

                p.Static02_00_00.set_taborder("4");
                p.Static02_00_00.set_text("세대주 정보(이름, 주민등록번호, 휴대전화번호) 필요");
                p.Static02_00_00.set_cssclass("sta_WF_Para19RChk");
                p.Static02_00_00.set_fittocontents("height");
                p.Static02_00_00.move("39","Static02_00:16",null,"29","39",null);

                p.Static03.set_taborder("5");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Static02_00_00:0","119","39",null,null);
            	}
            );
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00_00.move("39","Static02_00:16",null,"58","39",null);
            	}
            );
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("전입신고");
                p.Static02_00.set_cssclass("sta_WF_H3_pc");
                p.Static02_00.set_accessibilityrole("heading3");
                p.Static02_00.move("39","39",null,"48","39",null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("39","Static02_00:40",null,"90","39",null);

                p.Div00.set_taborder("2");
                p.Div00.set_text("Div00");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("29","98","20%","90",null,null);

                p.Div01.set_taborder("3");
                p.Div01.set_text("Div00");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("199","98","20%","90",null,null);

                p.Div01_00.set_taborder("4");
                p.Div01_00.set_text("Div00");
                p.Div01_00.set_accessibilityenable("false");
                p.Div01_00.move("368","98","20%","90",null,null);

                p.Div03.set_taborder("5");
                p.Div03.set_text("Div00");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("538","98","20%","90",null,null);

                p.Div03_00.set_taborder("6");
                p.Div03_00.set_text("Div00");
                p.Div03_00.set_accessibilityenable("false");
                p.Div03_00.move("708","98","20%","90",null,null);

                p.Static01.set_taborder("7");
                p.Static01.set_text("1단계");
                p.Static01.set_cssclass("sta_WF_Point17B");
                p.Static01.move("39","Panel00:48","42","26",null,null);

                p.Static01_00.set_taborder("8");
                p.Static01_00.set_text("/ 4단계");
                p.Static01_00.move("Static01:6","Panel00:48","57","26",null,null);

                p.Static02_00_00.set_taborder("9");
                p.Static02_00_00.set_text("유의사항 확인");
                p.Static02_00_00.set_cssclass("sta_WF_H4_pc");
                p.Static02_00_00.set_accessibilityrole("heading4");
                p.Static02_00_00.move("39","Static01_00:8",null,"48","39",null);

                p.Div00_00.set_taborder("10");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_WF_StartInfor");
                p.Div00_00.set_fittocontents("height");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.move("39","Static02_00_00:40",null,"394","39",null);

                p.Static02.set_taborder("11");
                p.Static02.move("269","Div00_00:0","120","39",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_fittocontents("height");

                p.Div01.set_fittocontents("height");

                p.Div01_00.set_fittocontents("height");

                p.Div03.set_fittocontents("height");

                p.Div03_00.set_fittocontents("height");

                p.Panel00.set_fittocontents("height");

                p.Static02_00.move("23","23",null,"48","23",null);

                p.Static01.move("23","Panel00:48","44","26",null,null);

                p.Static02_00_00.move("23","Static01_00:8",null,"48","23",null);

                p.Div00_00.move("23","Static02_00_00:34",null,"423","23",null);

                p.Static02.move("23","Div00_00:0","120","23",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_displaynulltext("검색 버튼을 눌러주세요");
                p.Edit00.set_accessibilitylabel("주소");
                p.Edit00.move("0","0","100%","48",null,null);

                p.Static02_02.set_taborder("1");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","48","100%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div02.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaAdd01.set_taborder("0");
                p.StaAdd01.set_text("건축물 구분");
                p.StaAdd01.set_cssclass("sta_WF_Lable15R");
                p.StaAdd01.move("0","0","100%","23",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_displaynulltext("지상");
                p.Combo00.set_accessibilitylabel("건축물구분");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("0","StaAdd01:8","99.81684981684981%","48",null,null);

                p.Static02_02.set_taborder("2");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","79","100%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div02.form.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaAdd02.set_taborder("0");
                p.StaAdd02.set_text("본번");
                p.StaAdd02.set_cssclass("sta_WF_Lable15R");
                p.StaAdd02.move("0","0","99.81684981684981%","23",null,null);

                p.Edit00.set_taborder("1");
                p.Edit00.set_enable("true");
                p.Edit00.set_displaynulltext("본번");
                p.Edit00.set_accessibilitylabel("본번");
                p.Edit00.move("0","30","99.81684981684981%","48",null,null);

                p.Static02_02.set_taborder("2");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","78","99.81684981684981%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div02.form.Div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_00_01.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaAdd03.set_taborder("0");
                p.StaAdd03.set_text("부번");
                p.StaAdd03.set_cssclass("sta_WF_Lable15R");
                p.StaAdd03.move("0","0","84.10493827160494%","23",null,null);

                p.Edit00.set_taborder("1");
                p.Edit00.set_displaynulltext("부번");
                p.Edit00.set_accessibilitylabel("부번");
                p.Edit00.move("0","30","99.92283950617285%","48",null,null);

                p.Static02_02.set_taborder("2");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","78","99.92283950617285%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_00_01.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div02.form.Div00_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_displaynulltext("상세주소를 입력해주세요");
                p.Edit00.set_cssclass("error");
                p.Edit00.set_accessibilitylabel("상세주소");
                p.Edit00.move("0","0","100%","48",null,null);

                p.Static02_02.set_taborder("1");
                p.Static02_02.set_text("상세주소를 반드시 확인하시기 바랍니다. 예) 101동 101호(인사동, 무궁화 아파트)");
                p.Static02_02.set_cssclass("sta_WF_helpinvaild");
                p.Static02_02.set_visible("true");
                p.Static02_02.set_fittocontents("height");
                p.Static02_02.move("0","48","100%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_02.move("0","48","100%","52",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_00_02.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaAdd05.set_taborder("0");
                p.StaAdd05.set_text("다가구 주택여부");
                p.StaAdd05.set_cssclass("sta_WF_Lable15R");
                p.StaAdd05.move("0","0","100%","23",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_accessibilitylabel("다가구 주택여부");
                p.Combo00.set_text("모름");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("0","StaAdd05:8","99.81684981684981%","48",null,null);

                p.Static02_02.set_taborder("2");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","79","100%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_00_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_00_02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_00_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.Div02.form.Div00_00_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00_01_00.set_taborder("0");
                p.Static02_00_01_00.set_cssclass("sta_WF_Lable15R");
                p.Static02_00_01_00.set_text("");
                p.Static02_00_01_00.set_visible("true");
                p.Static02_00_01_00.move("0","0","99.81684981684981%","23",null,null);

                p.Edit00.set_taborder("1");
                p.Edit00.set_value("예) 무궁화빌라 1층 2호");
                p.Edit00.set_enable("false");
                p.Edit00.move("0","31","99.81684981684981%","48",null,null);

                p.Static02_02.set_taborder("2");
                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
                p.Static02_02.set_cssclass("sta_WF_help");
                p.Static02_02.set_visible("false");
                p.Static02_02.move("0","Edit00:0","99.81684981684981%","28",null,null);
            	}
            );
            this.Div02.form.Div02.form.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form.Div00_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form.Div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00_01_00.set_visible("false");
                p.Static02_00_01_00.move("0","0","99.81684981684981%","23",null,null);

                p.Edit00.move("0","0","99.81684981684981%","48",null,null);

                p.Static02_02.set_text("입력시 필요한 정보를 입력해 주세요");
            	}
            );
            this.Div02.form.Div02.form.Div00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("이사 온 곳 주소입력");
                p.Static02_00.set_cssclass("sta_WF_H4_pc");
                p.Static02_00.set_accessibilityrole("heading4");
                p.Static02_00.move("39","39",null,"38","39",null);

                p.Static02_00_00.set_taborder("1");
                p.Static02_00_00.set_text("기본주소");
                p.Static02_00_00.set_cssclass("sta_WF_H5");
                p.Static02_00_00.set_accessibilityrole("heading5");
                p.Static02_00_00.move("39","Static02_00:24",null,"29","39",null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("39","Static02_00_00:24",null,"109","39",null);

                p.StaAdd.set_taborder("3");
                p.StaAdd.set_text("주소");
                p.StaAdd.set_cssclass("sta_WF_Lable15R");
                p.StaAdd.move("39","142","100%","23",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_horizontalgap("16");
                p.Panel01.set_verticalgap("16");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","31","100%","78",null,null);

                p.Div00.set_taborder("5");
                p.Div00.set_text("Div00");
                p.Div00.set_fittocontents("height");
                p.Div00.set_flexgrow("1");
                p.Div00.move("39","173","84.8314606741573%","78",null,null);

                p.Button00.set_taborder("6");
                p.Button00.set_text("검색");
                p.Button00.set_cssclass("btn_WF_Custom");
                p.Button00.set_flexgrow("1");
                p.Button00.set_accessibilitylabel("주소");
                p.Button00.move("705","178","78","50",null,null);

                p.Panel00_00.set_taborder("7");
                p.Panel00_00.set_type("horizontal");
                p.Panel00_00.set_verticalgap("16");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_horizontalgap("16");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("39","Panel00:24",null,"109","39",null);

                p.Div00_00.set_taborder("8");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_fittocontents("height");
                p.Div00_00.set_flexgrow("1");
                p.Div00_00.move("39","173","218","109",null,null);

                p.Div00_00_00.set_taborder("9");
                p.Div00_00_00.set_text("Div00");
                p.Div00_00_00.set_fittocontents("height");
                p.Div00_00_00.set_flexgrow("1");
                p.Div00_00_00.move("10","41","218","109",null,null);

                p.Div00_00_01.set_taborder("10");
                p.Div00_00_01.set_text("Div00");
                p.Div00_00_01.set_fittocontents("height");
                p.Div00_00_01.set_flexgrow("1");
                p.Div00_00_01.move("0","31","218","109",null,null);

                p.Panel00_01.set_taborder("11");
                p.Panel00_01.set_type("horizontal");
                p.Panel00_01.set_verticalgap("8");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_horizontalgap("16");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("39","Panel00_00:24",null,"109","39",null);

                p.StaAdd04.set_taborder("12");
                p.StaAdd04.set_text("상세주소");
                p.StaAdd04.set_cssclass("sta_WF_Lable15R");
                p.StaAdd04.move("39","142","100%","23",null,null);

                p.Div00_01.set_taborder("13");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_fittocontents("height");
                p.Div00_01.set_flexgrow("1");
                p.Div00_01.move("39","173","75%","78",null,null);

                p.Panel00_00_00.set_taborder("14");
                p.Panel00_00_00.set_type("horizontal");
                p.Panel00_00_00.set_verticalgap("8");
                p.Panel00_00_00.set_flexwrap("wrap");
                p.Panel00_00_00.set_horizontalgap("16");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.move("39","Panel00_01:24",null,"109","39",null);

                p.Div00_00_02.set_taborder("15");
                p.Div00_00_02.set_text("Div00");
                p.Div00_00_02.set_fittocontents("height");
                p.Div00_00_02.set_flexgrow("1");
                p.Div00_00_02.move("39","173","356","109",null,null);

                p.Div00_00_00_00.set_taborder("16");
                p.Div00_00_00_00.set_text("Div00");
                p.Div00_00_00_00.set_fittocontents("height");
                p.Div00_00_00_00.set_flexgrow("1");
                p.Div00_00_00_00.move("10","41","356","109",null,null);

                p.Static02.set_taborder("17");
                p.Static02.move("39","Panel00_00_00:0","120","39",null,null);
            	}
            );
            this.Div02.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00_00.move("23","Static02_00:24",null,"29","23",null);

                p.Static02_00.move("23","23",null,"38","23",null);

                p.Panel00.move("23","Static02_00_00:24",null,"109","23",null);

                p.Panel00_00.move("23","Panel00:24",null,"109","23",null);

                p.Panel00_01.move("23","Panel00_00:24",null,"135","23",null);

                p.Div00_01.move("39","173","75%","102",null,null);

                p.Panel00_00_00.move("23","Panel00_01:24",null,"196","23",null);

                p.Div00_00_02.set_text("Div00");
                p.Div00_00_02.move("39","173","356","109",null,null);

                p.Div00_00_00_00.move("10","41","356","79",null,null);
            	}
            );
            this.Div02.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form.Div02_00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("부가 정보");
                p.Static02_00.set_cssclass("sta_WF_H4_pc");
                p.Static02_00.set_accessibilityrole("heading4");
                p.Static02_00.move("39","39",null,"38","39",null);

                p.Static02_00_00.set_taborder("1");
                p.Static02_00_00.set_text("다음 중에서 해당하는 것을 선택해 주세요");
                p.Static02_00_00.set_cssclass("sta_WF_H5");
                p.Static02_00_00.set_fittocontents("height");
                p.Static02_00_00.set_accessibilityrole("heading5");
                p.Static02_00_00.move("39","Static02_00:24",null,"29","39",null);

                p.Radio00.set_taborder("2");
                p.Radio00.set_innerdataset(Div02_form_Div02_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("horizontal");
                p.Radio00.move("39","Static02_00_00:24","260","30",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("빈집으로 이사하여 세대주를 \"홍길동\"으로 유지하고 이사 온 사람끼지 세대를 구성합니다.");
                p.Static00.set_cssclass("sta_WF_Infor15");
                p.Static00.set_fittocontents("height");
                p.Static00.move("39","Radio00:3",null,"26","39",null);

                p.Radio00_00.set_taborder("4");
                p.Radio00_00.set_innerdataset(Div02_form_Div02_00_form_Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_direction("horizontal");
                p.Radio00_00.set_value("0");
                p.Radio00_00.set_index("0");
                p.Radio00_00.move("39","Static00:24","260","30",null,null);

                p.Static00_00.set_taborder("5");
                p.Static00_00.set_text("빈집으로 이사하여 새로운 세대주로 변경하고 이사 온 사람까지 세대를 구성합니다.");
                p.Static00_00.set_cssclass("sta_WF_Infor15");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("39","Radio00_00:3",null,"26","39",null);

                p.Radio00_00_00.set_taborder("6");
                p.Radio00_00_00.set_innerdataset(Div02_form_Div02_00_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_direction("horizontal");
                p.Radio00_00_00.set_index("-1");
                p.Radio00_00_00.move("39","Static00_00:24","260","30",null,null);

                p.Static00_00_00.set_taborder("7");
                p.Static00_00_00.set_text("이사온 곳에 기존에 살고 있는 세대주로 세대를 구성합니다.");
                p.Static00_00_00.set_cssclass("sta_WF_Infor15");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.move("39","Radio00_00_00:3",null,"26","39",null);

                p.Static02.set_taborder("8");
                p.Static02.move("39","Static00_00_00:0","120","39",null,null);
            	}
            );
            this.Div02.form.Div02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form.Div02_00.form
            obj = new Layout("Layout0","",0,0,this.Div02.form.Div02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.move("23","39",null,"38","23",null);

                p.Static02_00_00.move("23","Static02_00:24",null,"29","23",null);

                p.Radio00.move("23","Static02_00_00:24","260","30",null,null);

                p.Static00.move("23","Radio00:3",null,"52","23",null);

                p.Radio00_00.move("23","Static00:24","260","30",null,null);

                p.Static00_00.move("23","Radio00_00:3",null,"52","23",null);

                p.Radio00_00_00.move("23","Static00_00:24","260","30",null,null);

                p.Static00_00_00.move("23","Radio00_00_00:3",null,"52","23",null);

                p.Static02.move("23","Static00_00_00:0","120","23",null,null);
            	}
            );
            this.Div02.form.Div02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_text("4단계");
                p.Static01.set_cssclass("sta_WF_Point17B");
                p.Static01.move("39","40","42","26",null,null);

                p.Static01_00.set_taborder("1");
                p.Static01_00.set_text("/ 5단계");
                p.Static01_00.move("Static01:6","40","57","26",null,null);

                p.Static02_00.set_taborder("2");
                p.Static02_00.set_text("이사 온 곳");
                p.Static02_00.set_cssclass("sta_WF_H3_pc");
                p.Static02_00.set_accessibilityrole("heading3");
                p.Static02_00.move("39","Static01:20",null,"48","39",null);

                p.Static02_01.set_taborder("3");
                p.Static02_01.set_text("전체 항목 필수 입력 사항입니다.");
                p.Static02_01.set_cssclass("sta_WF_Para19RChk");
                p.Static02_01.move("39","Static02_00:8","306","29",null,null);

                p.Div02.set_taborder("4");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Detailbox");
                p.Div02.set_fittocontents("height");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("39","Static02_01:30",null,"703","39",null);

                p.Div02_00.set_taborder("7");
                p.Div02_00.set_text("Div00");
                p.Div02_00.set_cssclass("div_WF_Detailbox");
                p.Div02_00.set_fittocontents("height");
                p.Div02_00.set_accessibilityenable("false");
                p.Div02_00.move("39","Div02:40",null,"420","39",null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_verticalgap("24");
                p.Panel01.move("39","Div02:500",null,"48","39",null);

                p.Static02.set_taborder("6");
                p.Static02.move("39","Panel01:0","120","39",null,null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("이전으로");
                p.Button00.move("39","0","112","48",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_horizontalgap("16");
                p.Panel00.move("169","1403","240","48",null,null);

                p.Button00_00.set_taborder("10");
                p.Button00_00.set_text("임시저장");
                p.Button00_00.move("169","1403","112","48",null,null);

                p.Button03.set_taborder("11");
                p.Button03.set_text("다음으로");
                p.Button03.set_cssclass("btn_WF_Crud01");
                p.Button03.move("279","1403","112","48",null,null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.move("23","23","44","26",null,null);

                p.Static01_00.move("Static01:7","23","57","26",null,null);

                p.Static02_00.move("23","Static01:20",null,"48","39",null);

                p.Static02_01.move("23","Static02_00:8","306","29",null,null);

                p.Div02.move("23","Static02_01:30",null,"800","23",null);

                p.Div02_00.move("23","Div02:40",null,"482","23",null);

                p.Panel01.move("23","1530",null,"48","23",null);

                p.Static02.move("23","Panel01:0","120","23",null,null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form.Div00.form
            obj = new Layout("default","",0,0,this.Div03.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.set_taborder("0");
                p.Static02_00.set_text("발급 유형 선택");
                p.Static02_00.set_cssclass("sta_WF_H4_pc");
                p.Static02_00.set_accessibilityrole("heading4");
                p.Static02_00.move("39","39",null,"38","39",null);

                p.Stah5.set_taborder("1");
                p.Stah5.set_text("발급 유형");
                p.Stah5.set_cssclass("sta_WF_H5");
                p.Stah5.set_accessibilityrole("heading5");
                p.Stah5.move("39","101","78","29",null,null);

                p.Button01_01_00.set_taborder("2");
                p.Button01_01_00.set_cssclass("btn_WF_Tooltip");
                p.Button01_01_00.set_text("");
                p.Button01_01_00.set_accessibilitylabel("[@Stah5]");
                p.Button01_01_00.move("Stah5:0","100","30","30",null,null);

                p.Radio00.set_taborder("3");
                p.Radio00.set_innerdataset(Div03_form_Div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("horizontal");
                p.Radio00.move("39","Stah5:24","218","246",null,null);

                p.Static02.set_taborder("4");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","Radio00:0","120","39",null,null);
            	}
            );
            this.Div03.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div03.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02_00.move("24","39",null,"38","39",null);

                p.Stah5.move("24","101","78","29",null,null);

                p.Radio00.move("23","Stah5:24","218","246",null,null);

                p.Static02.move("23","Radio00:0","120","23",null,null);
            	}
            );
            this.Div03.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("39","39",null,"441","39",null);

                p.Static02.set_taborder("1");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("39","Div00:0","120","39",null,null);
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("23","23",null,"425","23",null);

                p.Static02.move("39","Div00:0","120","23",null,null);
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,3380,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("입력 폼");

                p.staH2.set_taborder("0");
                p.staH2.set_text("입력 폼");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","120","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Input Form");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","15","220","30",null,null);

                p.staDescript.set_taborder("3");
                p.staDescript.set_text("입력폼은 사용자가 데이터를 입력하여 서버로 전송하는 데 사용하는 콘텐츠 섹션으로 하나 이상의 입력 컨트롤로 구성된다.");
                p.staDescript.set_cssclass("sta_WF_Descript");
                p.staDescript.set_fittocontents("height");
                p.staDescript.move("0","85",null,"74","0",null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("유형");
                p.Static01.set_cssclass("sta_WF_H2_pc");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","staDescript:85","300","60",null,null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("구조");
                p.Static02.set_cssclass("sta_WF_H5");
                p.Static02.set_accessibilityrole("heading4");
                p.Static02.move("0","Static01:24","300","24",null,null);

                p.Div00.set_taborder("6");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("0","Static02:24",null,"822","0",null);

                p.Div02.set_taborder("7");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Detailbox");
                p.Div02.set_fittocontents("height");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("0","Div00:40",null,"1493","0",null);

                p.Div03.set_taborder("8");
                p.Div03.set_text("Div03");
                p.Div03.set_cssclass("div_WF_Detailbox");
                p.Div03.set_accessibilityenable("false");
                p.Div03.move("0","Div02:40",null,"521","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,3560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("Div00");
                p.Div00.move("0","Static02:24",null,"813","0",null);

                p.Div02.set_text("Div00");
                p.Div02.move("0","Div00:40",null,"1633","0",null);

                p.Div03.move("0","Div02:40",null,"473","0",null);

                p.Static01.move("0","staDescript:80","300","60",null,null);
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
        this.registerScript("pattern08.xfdl", function() {

        this.pattern08_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern08_onload,this);
            this.Div00.form.Div00.form.StaStnm1.addEventHandler("onclick",this.Div00_Div00_Static00_00_onclick,this);
            this.Div00.form.Div01.form.StaStnm2.addEventHandler("onclick",this.Div00_Div00_Static00_00_onclick,this);
            this.Div00.form.Div01_00.form.StaStnm3.addEventHandler("onclick",this.Div00_Div00_Static00_00_onclick,this);
            this.Div00.form.Div03.form.StaStnm4.addEventHandler("onclick",this.Div00_Div00_Static00_00_onclick,this);
            this.Div00.form.Div03_00.form.StaStnm5.addEventHandler("onclick",this.Div00_Div00_Static00_00_onclick,this);
        };
        this.loadIncludeScript("pattern08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
