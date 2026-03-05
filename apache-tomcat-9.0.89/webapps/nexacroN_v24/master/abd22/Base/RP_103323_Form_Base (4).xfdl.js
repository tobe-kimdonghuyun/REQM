(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Base");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsApiShlFaq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"shlFaqScNm\" type=\"STRING\" size=\"256\"/><Column id=\"faqTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rownum\">1</Col><Col id=\"faqTitlNm\">제목1111</Col></Row><Row><Col id=\"rownum\">2</Col><Col id=\"faqTitlNm\">제목2222</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiShlFaq2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"shlFaqScNm\" type=\"STRING\" size=\"256\"/><Column id=\"faqTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiShlFaq3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"shlFaqScNm\" type=\"STRING\" size=\"256\"/><Column id=\"faqTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","36","457","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid  데이터가 있는데 nodatatext 읽음");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","-3","204",null,"196","206",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsApiShlFaq");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_Original");
            obj.set_nodatatext("조회된 데이터가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"450\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:faqTitlNm\" tooltiptext=\"bind:faqTitlNm\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"12\" band=\"left\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"12\" band=\"right\"/></Columns><Rows><Row size=\"12\"/><Row size=\"35\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"12\"/><Row size=\"16\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_WF_LeftTop\"/><Cell col=\"1\" cssclass=\"cell_WF_Top\"/><Cell col=\"2\" cssclass=\"cell_WF_Top\"/><Cell col=\"3\" cssclass=\"cell_WF_Top\"/><Cell col=\"4\" cssclass=\"cell_WF_RightTop\"/><Cell row=\"1\" cssclass=\"cell_WF_Left\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" cssclass=\"expr:newYn == 'Y' ? 'cell_WF_TxtLinkNewM': 'cell_WF_TxtLink'\" tooltiptext=\"expr:&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:comp.parent.fnDisplayText(comp,1,currow,(&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm)) \"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"2\" cssclass=\"cell_WF_Left\"/><Cell row=\"2\" col=\"1\" text=\"유형\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"bind:shlFaqScNm\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"3\" cssclass=\"cell_WF_Left\"/><Cell row=\"3\" col=\"1\" text=\"작성일자\"/><Cell row=\"3\" col=\"2\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" cssclass=\"cell_WF_TxtL\"/><Cell row=\"3\" col=\"3\" accessibilitydescription=\"새창열기\" accessibilityrole=\"button\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"4\" cssclass=\"cell_WF_LeftBottom\"/><Cell row=\"4\" col=\"1\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"3\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_WF_RightBottom\"/><Cell row=\"5\"/><Cell row=\"5\" col=\"1\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\"/><Cell row=\"5\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","13","443","163","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("데이터조회(copy)");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain00_00","13","510",null,"246","190",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsApiShlFaq3");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_Original");
            obj.set_nodatatext("조회된 데이터가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"450\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:faqTitlNm\" tooltiptext=\"bind:faqTitlNm\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"12\" band=\"left\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"12\" band=\"right\"/></Columns><Rows><Row size=\"12\"/><Row size=\"35\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"12\"/><Row size=\"16\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_WF_LeftTop\"/><Cell col=\"1\" cssclass=\"cell_WF_Top\"/><Cell col=\"2\" cssclass=\"cell_WF_Top\"/><Cell col=\"3\" cssclass=\"cell_WF_Top\"/><Cell col=\"4\" cssclass=\"cell_WF_RightTop\"/><Cell row=\"1\" cssclass=\"cell_WF_Left\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" cssclass=\"expr:newYn == 'Y' ? 'cell_WF_TxtLinkNewM': 'cell_WF_TxtLink'\" tooltiptext=\"expr:&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:comp.parent.fnDisplayText(comp,1,currow,(&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm)) \"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"2\" cssclass=\"cell_WF_Left\"/><Cell row=\"2\" col=\"1\" text=\"유형\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"bind:shlFaqScNm\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"3\" cssclass=\"cell_WF_Left\"/><Cell row=\"3\" col=\"1\" text=\"작성일자\"/><Cell row=\"3\" col=\"2\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" cssclass=\"cell_WF_TxtL\"/><Cell row=\"3\" col=\"3\" accessibilitydescription=\"새창열기\" accessibilityrole=\"button\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"4\" cssclass=\"cell_WF_LeftBottom\"/><Cell row=\"4\" col=\"1\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"3\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_WF_RightBottom\"/><Cell row=\"5\"/><Cell row=\"5\" col=\"1\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\"/><Cell row=\"5\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00","6","810","169","40",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("4");
            obj.set_text("onload시 copy");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain00","6","860",null,"246","197",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsApiShlFaq2");
            obj.set_formatid("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_Original");
            obj.set_nodatatext("조회된 데이터가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"450\"/></Columns><Rows><Row size=\"60\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:faqTitlNm\" tooltiptext=\"bind:faqTitlNm\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"12\" band=\"left\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"12\" band=\"right\"/></Columns><Rows><Row size=\"12\"/><Row size=\"35\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"12\"/><Row size=\"16\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_WF_LeftTop\"/><Cell col=\"1\" cssclass=\"cell_WF_Top\"/><Cell col=\"2\" cssclass=\"cell_WF_Top\"/><Cell col=\"3\" cssclass=\"cell_WF_Top\"/><Cell col=\"4\" cssclass=\"cell_WF_RightTop\"/><Cell row=\"1\" cssclass=\"cell_WF_Left\"/><Cell row=\"1\" col=\"1\" colspan=\"3\" cssclass=\"expr:newYn == 'Y' ? 'cell_WF_TxtLinkNewM': 'cell_WF_TxtLink'\" tooltiptext=\"expr:&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:comp.parent.fnDisplayText(comp,1,currow,(&quot;[&quot;+regInstScNm+&quot;] &quot;+faqTitlNm)) \"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"2\" cssclass=\"cell_WF_Left\"/><Cell row=\"2\" col=\"1\" text=\"유형\"/><Cell row=\"2\" col=\"2\" colspan=\"2\" text=\"bind:shlFaqScNm\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"3\" cssclass=\"cell_WF_Left\"/><Cell row=\"3\" col=\"1\" text=\"작성일자\"/><Cell row=\"3\" col=\"2\" text=\"bind:regDt\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\" cssclass=\"cell_WF_TxtL\"/><Cell row=\"3\" col=\"3\" accessibilitydescription=\"새창열기\" accessibilityrole=\"button\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_WF_Right\"/><Cell row=\"4\" cssclass=\"cell_WF_LeftBottom\"/><Cell row=\"4\" col=\"1\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"3\" cssclass=\"cell_WF_Bottom\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_WF_RightBottom\"/><Cell row=\"5\"/><Cell row=\"5\" col=\"1\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\"/><Cell row=\"5\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr,Desktop_screen",1280,1360,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Grid  데이터가 있는데 nodatatext 읽음");
                p.Button00.move("50","36","457","113",null,null);

                p.grdMain.set_taborder("1");
                p.grdMain.set_binddataset("dsApiShlFaq");
                p.grdMain.set_formatid("default");
                p.grdMain.set_autofittype("col");
                p.grdMain.set_cssclass("grd_WF_Original");
                p.grdMain.set_nodatatext("조회된 데이터가 없습니다");
                p.grdMain.move("-3","204",null,"196","206",null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("데이터조회(copy)");
                p.Button01.move("13","443","163","56",null,null);

                p.grdMain00_00.set_taborder("3");
                p.grdMain00_00.set_binddataset("dsApiShlFaq3");
                p.grdMain00_00.set_formatid("default");
                p.grdMain00_00.set_autofittype("col");
                p.grdMain00_00.set_cssclass("grd_WF_Original");
                p.grdMain00_00.set_nodatatext("조회된 데이터가 없습니다");
                p.grdMain00_00.move("13","510",null,"246","190",null);

                p.btnSearch00.set_taborder("4");
                p.btnSearch00.set_text("onload시 copy");
                p.btnSearch00.move("6","810","169","40",null,null);

                p.grdMain00.set_taborder("5");
                p.grdMain00.set_binddataset("dsApiShlFaq2");
                p.grdMain00.set_formatid("default");
                p.grdMain00.set_autofittype("col");
                p.grdMain00.set_cssclass("grd_WF_Original");
                p.grdMain00.set_nodatatext("조회된 데이터가 없습니다");
                p.grdMain00.move("6","860",null,"246","197",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr,desktopScr,tableScr",480,678,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("모바일 Tab");
                p.Button00.move("13","34","457","113",null,null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103323_Form_Base (4).xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.dsApiShlFaq2.copyData(this.dsApiShlFaq);
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.dsApiShlFaq3.copyData(this.dsApiShlFaq);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.grdMain.addEventHandler("oncellclick",this.grdMain_oncellclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.grdMain00_00.addEventHandler("oncellclick",this.grdMain_oncellclick,this);
            this.btnSearch00.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.grdMain00.addEventHandler("oncellclick",this.grdMain_oncellclick,this);
        };
        this.loadIncludeScript("RP_103323_Form_Base (4).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
