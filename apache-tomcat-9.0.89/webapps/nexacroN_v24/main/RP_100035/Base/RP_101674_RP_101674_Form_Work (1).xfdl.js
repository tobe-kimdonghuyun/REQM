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
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"alert\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"status\">진행</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">A</Col><Col id=\"birth\">19990417</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"status\">접수</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">B</Col><Col id=\"birth\">19000101</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","21","85","266","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대상 가구 조회");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","187","1060","229",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_createrowstype("all");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("대상 가구 조회");
            obj.set_binddataset("ds1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"93\"/><Column size=\"108\"/><Column size=\"186\"/><Column size=\"128\"/><Column size=\"314\"/><Column size=\"237\"/><Column size=\"112\"/><Column size=\"126\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"알림톡\"/><Cell col=\"3\" text=\"가구주명\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"보수한도금액(원)\"/><Cell col=\"7\" text=\"가구주소\"/><Cell col=\"8\" text=\"공사내용\"/><Cell col=\"9\" text=\"수선이력여부\"/><Cell col=\"10\" text=\"도서지역여부\"/><Cell col=\"11\" text=\"본부\"/><Cell col=\"12\" text=\"사업소\"/><Cell col=\"13\" text=\"담당감독관\"/><Cell col=\"14\" text=\"감독관연락처\"/><Cell col=\"15\" text=\"보기\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"발송\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"text\"/><Cell col=\"13\" displaytype=\"text\"/><Cell col=\"14\"/><Cell col=\"15\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상세보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("RP_101674_RP_101674_Form_Work (1).xfdl", function() {

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RP_101674_RP_101674_Form_Work (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
