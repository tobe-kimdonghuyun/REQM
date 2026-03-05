(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0024");
            this.set_titletext("공지사항 게시판 리스트");
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
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","50","194","277","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제목</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("제목");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","Combo00:10","194",null,"60","160",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("검색어를 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"194","100","60","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","Combo00:29",null,null,"50","155",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"600\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"70\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"첨부파일\"/><Cell col=\"3\" text=\"작성일자\"/><Cell col=\"4\" text=\"조회수\" cssclass=\"cell_WF_End\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"text\" cssclass=\"expr:lev==&apos;0&apos;?&apos;cell_WF_Notice&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"공지사항 게시판 제목입니다.\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:lev==&apos;0&apos;?&apos;cell_WF_File&apos;:&apos;&apos;\" accessibilitylabel=\"다운로드\" accessibilityenable=\"expr:lev==&apos;0&apos; ? true : false\"/><Cell col=\"3\" text=\"2024-07-04\" displaytype=\"date\" maskeditformat=\"###-####-####\" maskedittype=\"string\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"3,000\" displaytype=\"mask\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","271","Grid00:29","584","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","46","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageP");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00","46","0","46","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PageL");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_01","92","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_02","132","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_03","172","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_04","212","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_05","252","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_06","292","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_07","332","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_08","372","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_09","412","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_10","452","3","40","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Page");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_11","492","0","46","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PageR");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_11_01","538","0","46","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_PageN");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","323","862","476","77",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01은 버튼 하단 여백을 잡아주기 위함입니다. 높이값 80px");
            obj.set_background("#ffd799");
            obj.set_border("3px solid #ff7f1e");
            obj.set_textAlign("center");
            obj.set_font("bold 15px/normal \"Malgun Gothic\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","481","Div00:0","164","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","50.00%","85.00%","1","66",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_01.addEventHandler("onclick",this.Static00_01_onclick,this);
        };
        this.loadIncludeScript("RP_101562_PS_UI_0024 (3).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
