(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0025");
            this.set_titletext("공지사항 게시판 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1126,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"본부\" type=\"STRING\" size=\"256\"/><Column id=\"사업소\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">공지</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/><Col id=\"lev\">0</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/></Row><Row><Col id=\"NO\">2</Col></Row><Row><Col id=\"NO\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","56","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주거급여정보포털");
            obj.set_cssclass("sta_WF_Navi");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static00:10","56","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_NaviEnd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","50.00","80",null,"64","46",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공지사항6");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","194",null,null,"50","198",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"118","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_NoticeBox");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","26",null,"30","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("공지사항 상단에 고정 게시글입니다.");
            obj.set_cssclass("sta_WF_NoticeTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","30","71","74","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_SendDateTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","114","71","87","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("<fc v=\'#000000\'>2024.06.04</fc>");
            obj.set_cssclass("sta_WF_SendDate");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Static01_01:20","71","57","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_SendDateTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","Static01_00_00:10","71","53","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("<fc v=\'#000000\'>30,000</fc>");
            obj.set_cssclass("sta_WF_SendDate");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","Static01_01_00:20","71","57","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("게시일");
            obj.set_cssclass("sta_WF_SendDateTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","Static01_00_00_00:10","71","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("2024.07.04 ~ 2024.07.10");
            obj.set_cssclass("sta_WF_SendDate");
            obj.set_fittocontents("width");
            this.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","0","Static00:0",null,null,"0","70",null,null,null,null,this.Div00.form);
            obj.getSetter("taborder").set("8");
            obj.getSetter("url").set("http://172.10.11.92:8080/np24/RPIS/html/tag.html");
            obj.getSetter("accessibilitylabel").set("공지사항  상세 내용 시작");
            obj.getSetter("accessibilityleavemessage").set("공지사항  상세 내용 끝");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"70","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","5",null,"170","70",null,"7",null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Detail");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","190",null,"156","43",null,"13",null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("폐기물처리계획서");
            obj.set_cssclass("btn_WF_FileView");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02","0",null,null,"1","0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_background("#000000");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","364",null,"186","43",null,"13",null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("폐기물처리계획서.pdf");
            obj.set_cssclass("btn_WF_FileView");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","490","Div00:50","146","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","323","862","476","77",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static01은 버튼 하단 여백을 잡아주기 위함입니다. 높이값 80px");
            obj.set_background("#ffd799");
            obj.set_border("3px solid #ff7f1e");
            obj.set_textAlign("center");
            obj.set_font("bold 15px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","481","Button00_00_01:0","164","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","50.00%","82.50%","1","90",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("RED");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1126,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101564_PS_UI_0025 (3).xfdl", function() {

        this.Div00_Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button01_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("RP_101564_PS_UI_0025 (3).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
