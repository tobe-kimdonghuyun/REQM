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
                this._setFormPosition(1300,1700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">이용자 식별</Col><Col id=\"Column1\">회원ID, 성명</Col><Col id=\"Column2\">수집 후 5년</Col></Row><Row><Col id=\"Column0\">원활한 의사소통 및 정확한 제품문의·서비스 상담</Col><Col id=\"Column1\">비밀번호(암호화), 메일주소, 회사명, Country</Col><Col id=\"Column2\">수집 후 5년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01_01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">원활한 의사소통 및 정확한 제품문의·서비스 상담</Col><Col id=\"Column1\">휴대폰, 사무실 전화번호, 소속/부서, 직위</Col><Col id=\"Column2\">수집 후 5년</Col></Row><Row><Col id=\"Column0\">이벤트 및 세미나 정보 안내 마케팅(이메일)</Col><Col id=\"Column1\">휴대폰, 전화번호, 이메일</Col><Col id=\"Column2\">수집 후 5년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TAB으로 이동 시 accessibilityenable=false인 Div에 초점을 받는 컴포넌트가 없는 경우 음성출력 없음.\r\n방향키로 이동시 accessibilityenable=false인 빈Div 음성 출력 없음");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","40","182","1057","333",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div false");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","28","597","214","74",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","26","717","236","78",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","11","853","1046","262",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01 false");
            obj.set_accessibilityenable("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","34","273","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1. 가나다라마바사");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","74","273","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2. 가나다라마바사");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","31","1175","275","47",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","35","1291","202","151",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1700,this,function(p){});
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
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("rp101483.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
