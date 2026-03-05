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
                this._setFormPosition(1126,2090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds1", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"alert\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"status\">진행</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">A</Col><Col id=\"birth\">19990417</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"status\">접수</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">B</Col><Col id=\"birth\">19000101</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSe", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"txt\">미공사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"txt\">부분공사</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"txt\">전체보수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"docName\" type=\"STRING\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col></Row><Row><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","26","77","1064","173",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10",null,"120","390",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아동복지시설, 공동생활가정 등에서 보호를 받다가 만 18세가 되어 퇴소예정이거나 퇴소한 지 5년 이내에 해당하는 청년의 안정적인 자립을 위한 주거지원 제도입니다.");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_border("1px solid red");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","719","27","277","91",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","33","240",null,"120","439",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("아동복지시설, 공동생활가정 등에서 보호를 받다가 만 18세가 되어 퇴소예정이거나 퇴소한 지 5년 이내에 해당하는 청년의 안정적인 자립을 위한 주거지원 제도입니다.");
            obj.set_wordWrap("char");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1126,2090,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101634_RP_101634_Form_Work (1).xfdl", function() {

        this.Grid00_oncellclick = function(obj,e)
        {
        	alert("그리드 셀클릭 이벤트");
        };

        this.Div00_MaskEdit00_oneditclick = function(obj,e)
        {
        	this.Div00.form.Button00.text = "●";
        };

        this.Button00_onclick = function(obj,e)
        {
        	//팝업 호출
        	var newChild = new nexacro.ChildFrame;
        	newChild.init("alertPopup", 50, 200, 450, 210, null, null, "FrameBase::cmmAlert.xfdl");

        	newChild._modaltype = "center";
        	newChild.set_dragmovetype("all");
        	newChild.set_showcascadetitletext(false);
        	newChild.set_showtitlebar(true);      //titlebar는 안보임
        	newChild.set_autosize(true);
        	newChild.set_resizable(false);         //resizable 안됨

        	newChild.set_showstatusbar(false);    //statusbar는 안보임
        	newChild.set_openalign("center middle");
        	newChild.set_layered(false);
        	newChild.set_titlebarheight(40);

        	var objParentFrame = this.getOwnerFrame();
        	newChild.showModal(objParentFrame);
        };


        //검색 눌렀을 때 트랜잭션 -> 초점 이상한 곳으로 튐.


        //그리드 헤더에 접근하지 못함 (checkbox)
        this.Div00_Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("RP_101634_RP_101634_Form_Work (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
