(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_btbnt00_m01");
            this.set_titletext("공지사항목록조회_시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSysNtc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">첫번째</Col><Col id=\"rownum\">1</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">두번째</Col><Col id=\"rownum\">2</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">세번째</Col><Col id=\"rownum\">3</Col><Col id=\"regDt\">2025/07/14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNt", this);
            obj._setContents("<ColumnInfo><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">[교육청]시스템 안정화에 따른</Col><Col id=\"regDt\">2025.07.14</Col></Row><Row><Col id=\"ntcMteTitlNm\">[교육청] 2025년 학부모 정책 모니터</Col><Col id=\"regDt\">2025.07.14</Col></Row><Row><Col id=\"ntcMteTitlNm\">[교육청]</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","23","43","260","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSysbtbNt","40","136",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsNt");
            obj.set_autofittype("col");
            obj.set_showcellselection("true");
            obj.set_showselection("true");
            obj.set_formatid("default");
            obj.set_nodatatext("등록된 정보가 없습니다");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("접근성속성라벨");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"105\" band=\"right\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"bind:ntcMteTitlNm\" text=\"bind:ntcMteTitlNm\"/><Cell col=\"1\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:imptYn == &apos;Y&apos; ? (newYn == &apos;Y&apos; ? &apos;cell_MF_TxtLinkNoticeNew&apos; : &apos;cell_MF_TxtLinkNotice&apos;) : (newYn == &apos;Y&apos; ? &apos;cell_MF_TxtLinkNew&apos; : &apos;&apos;)\" expr=\"comp.parent.fnDisplayText(comp,0,currow,ntcMteTitlNm)\" tooltiptext=\"expr:ntcMteTitlNm+&quot;툴팁임&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSysbtbNt00","40","327",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsNt");
            obj.set_autofittype("col");
            obj.set_showcellselection("true");
            obj.set_showselection("true");
            obj.set_formatid("default");
            obj.set_nodatatext("등록된 정보가 없습니다");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_accessibilitylabel("접근성속성라벨");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"105\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"bind:ntcMteTitlNm\" text=\"bind:ntcMteTitlNm\"/><Cell col=\"1\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:imptYn == &apos;Y&apos; ? (newYn == &apos;Y&apos; ? &apos;cell_MF_TxtLinkNoticeNew&apos; : &apos;cell_MF_TxtLinkNotice&apos;) : (newYn == &apos;Y&apos; ? &apos;cell_MF_TxtLinkNew&apos; : &apos;&apos;)\" expr=\"comp.parent.fnDisplayText(comp,0,currow,ntcMteTitlNm)\" tooltiptext=\"expr:ntcMteTitlNm+&quot;툴팁임&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("그리드");
                p.Button00.move("23","43","260","66",null,null);

                p.grdSysbtbNt.set_taborder("1");
                p.grdSysbtbNt.set_cssclass("grd_MF_Notice");
                p.grdSysbtbNt.set_binddataset("dsNt");
                p.grdSysbtbNt.set_autofittype("col");
                p.grdSysbtbNt.set_showcellselection("true");
                p.grdSysbtbNt.set_showselection("true");
                p.grdSysbtbNt.set_formatid("default");
                p.grdSysbtbNt.set_nodatatext("등록된 정보가 없습니다");
                p.grdSysbtbNt.set_autoenter("select");
                p.grdSysbtbNt.set_selecttype("cell");
                p.grdSysbtbNt.set_accessibilitylabel("접근성속성라벨");
                p.grdSysbtbNt.move("40","136",null,"180","20",null);

                p.grdSysbtbNt00.set_taborder("2");
                p.grdSysbtbNt00.set_cssclass("grd_MF_Notice");
                p.grdSysbtbNt00.set_binddataset("dsNt");
                p.grdSysbtbNt00.set_autofittype("col");
                p.grdSysbtbNt00.set_showcellselection("true");
                p.grdSysbtbNt00.set_showselection("true");
                p.grdSysbtbNt00.set_formatid("default");
                p.grdSysbtbNt00.set_nodatatext("등록된 정보가 없습니다");
                p.grdSysbtbNt00.set_autoenter("select");
                p.grdSysbtbNt00.set_selecttype("cell");
                p.grdSysbtbNt00.set_accessibilitylabel("접근성속성라벨");
                p.grdSysbtbNt00.move("40","327",null,"180","20",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",780,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("버튼 accessibilitydesc 읽지 않음");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr,desktopScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSysbtbNt.set_autoenter("select");
                p.grdSysbtbNt.set_selecttype("cell");
            	}
            );
            obj.set_mobileorientation("Landscape");
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.grdSysbtbNt.addEventHandler("oncellclick",this.grdSysbtbNt_oncellclick,this);
            this.grdSysbtbNt00.addEventHandler("oncellclick",this.grdSysbtbNt_oncellclick,this);
        };
        this.loadIncludeScript("rp103186,103187.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
