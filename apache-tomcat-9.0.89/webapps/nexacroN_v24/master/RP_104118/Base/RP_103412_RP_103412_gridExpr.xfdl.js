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
            obj = new Dataset("dsResult", this);
            obj.getSetter("desc").set("Top메뉴-");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "rownum","type" : "INT","size" : "256"},{"id" : "title","type" : "STRING","size" : "256"}]},"Rows" : [{"rownum" : "1","title" : "가나다라마바사"},{"rownum" : "2","title" : "아자차카타파하"},{"rownum" : "3","title" : "ABCDEFG"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","23","43","490","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 expr로 text 적용 시  접근했을 때 text 없어짐.\r\nTAB키 : TAB으로 접근 시 없어졌다가, TAB으로 ");
            this.addChild(obj.name, obj);

            obj = new Grid("grd1","20","120",null,"386","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsResult");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"860\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상담제목\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" displaytype=\"text\"/><Cell col=\"1\" cssclass=\"cell_WF_TxtLink\" accessibilitydescription=\"새창열기\" displaytype=\"buttoncontrol\" edittype=\"button\" accessibilityrole=\"button\" expr=\"comp.parent.fnDisplayText(comp,0,currow,title) \" tooltiptext=\"bind:title\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"12\" band=\"left\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"12\" band=\"right\"/></Columns><Rows><Row size=\"12\"/><Row size=\"35\"/><Row size=\"34\"/><Row size=\"34\"/><Row size=\"40\"/><Row size=\"12\"/><Row size=\"16\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_WF_LeftTop\"/><Cell col=\"1\" cssclass=\"cell_WF_Top\"/><Cell col=\"2\" cssclass=\"cell_WF_Top\"/><Cell col=\"3\" cssclass=\"cell_WF_Top\"/><Cell col=\"4\" cssclass=\"cell_WF_RightTop\"/><Cell row=\"1\" cssclass=\"cell_WF_Left\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" text=\"bind:dscsnAplyTitlNm\" cssclass=\"cell_WF_TxtLinkM\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"2\" cssclass=\"cell_WF_Left\"/><Cell row=\"2\" col=\"1\" text=\"신청일시\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"expr:dscsnAplyDt == null ? &quot;-&quot; : dscsnAplyDt\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" displaytype=\"text\" maskeditformat=\"####.##.## ##:##\" maskedittype=\"string\" cssclass=\"cell_WF_TxtL,cell_WF_Arrange\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"3\" cssclass=\"cell_WF_Left\"/><Cell row=\"3\" col=\"1\" text=\"답변일시\"/><Cell row=\"3\" col=\"2\" text=\"expr:ntfctnDt == null ? &quot;-&quot; : ntfctnDt\" cssclass=\"cell_WF_TxtL,cell_WF_Arrange\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"4\" cssclass=\"cell_WF_Left\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\" cssclass=\"cell_WF_Go\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"바로가기\" accessibilitydescription=\"새창열기\" accessibilityrole=\"button\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"5\" cssclass=\"cell_WF_LeftBottom\"/><Cell row=\"5\" col=\"1\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"3\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"4\" cssclass=\"cell_WF_RightBottom\"/><Cell row=\"6\"/><Cell row=\"6\" col=\"1\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\"/><Cell row=\"6\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","516","106","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd1_00","10","580",null,"386","190",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsResult");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"860\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상담제목\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" displaytype=\"text\"/><Cell col=\"1\" cssclass=\"cell_WF_TxtLink\" accessibilitydescription=\"새창열기\" displaytype=\"buttoncontrol\" edittype=\"button\" accessibilityrole=\"button\" text=\"expr:comp.parent.fnDisplayText(comp,0,currow,title) \"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"12\" band=\"left\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"12\" band=\"right\"/></Columns><Rows><Row size=\"12\"/><Row size=\"35\"/><Row size=\"34\"/><Row size=\"34\"/><Row size=\"40\"/><Row size=\"12\"/><Row size=\"16\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_WF_LeftTop\"/><Cell col=\"1\" cssclass=\"cell_WF_Top\"/><Cell col=\"2\" cssclass=\"cell_WF_Top\"/><Cell col=\"3\" cssclass=\"cell_WF_Top\"/><Cell col=\"4\" cssclass=\"cell_WF_RightTop\"/><Cell row=\"1\" cssclass=\"cell_WF_Left\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" text=\"bind:dscsnAplyTitlNm\" cssclass=\"cell_WF_TxtLinkM\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"2\" cssclass=\"cell_WF_Left\"/><Cell row=\"2\" col=\"1\" text=\"신청일시\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"expr:dscsnAplyDt == null ? &quot;-&quot; : dscsnAplyDt\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" displaytype=\"text\" maskeditformat=\"####.##.## ##:##\" maskedittype=\"string\" cssclass=\"cell_WF_TxtL,cell_WF_Arrange\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"3\" cssclass=\"cell_WF_Left\"/><Cell row=\"3\" col=\"1\" text=\"답변일시\"/><Cell row=\"3\" col=\"2\" text=\"expr:ntfctnDt == null ? &quot;-&quot; : ntfctnDt\" cssclass=\"cell_WF_TxtL,cell_WF_Arrange\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"4\" cssclass=\"cell_WF_Left\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\" cssclass=\"cell_WF_Go\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"바로가기\" accessibilitydescription=\"새창열기\" accessibilityrole=\"button\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"5\" cssclass=\"cell_WF_LeftBottom\"/><Cell row=\"5\" col=\"1\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"3\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"5\" col=\"4\" cssclass=\"cell_WF_RightBottom\"/><Cell row=\"6\"/><Cell row=\"6\" col=\"1\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\"/><Cell row=\"6\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr,Desktop_screen",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("그리드 expr로 text 적용 시  접근했을 때 text 없어짐.\r\nTAB키 : TAB으로 접근 시 없어졌다가, TAB으로 ");
                p.Button00.move("23","43","490","66",null,null);

                p.grd1.set_taborder("1");
                p.grd1.set_binddataset("dsResult");
                p.grd1.set_formatid("default");
                p.grd1.set_autofittype("col");
                p.grd1.set_autoenter("select");
                p.grd1.set_selecttype("cell");
                p.grd1.move("20","120",null,"386","180",null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("Button01");
                p.Button01.move("20","516","106","26",null,null);

                p.grd1_00.set_taborder("3");
                p.grd1_00.set_binddataset("dsResult");
                p.grd1_00.set_formatid("default");
                p.grd1_00.set_autofittype("col");
                p.grd1_00.set_autoenter("select");
                p.grd1_00.set_selecttype("cell");
                p.grd1_00.move("10","580",null,"386","190",null);
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

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
        this.registerScript("RP_103412_RP_103412_gridExpr.xfdl", function() {
        this.fnDisplayText = function(obj,nCell,nRow,sLongText)
        {
        	return sLongText + " expr적용";
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.grd1.addEventHandler("oncellclick",this.fnGrdCellClick,this);
            this.grd1_00.addEventHandler("oncellclick",this.fnGrdCellClick,this);
        };
        this.loadIncludeScript("RP_103412_RP_103412_gridExpr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
