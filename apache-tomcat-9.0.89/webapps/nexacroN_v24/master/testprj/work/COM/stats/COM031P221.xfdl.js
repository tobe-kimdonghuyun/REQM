(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031P221");
            this.set_titletext("보고서 유형");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"단계\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"종료구분\" type=\"STRING\" size=\"256\"/><Column id=\"서비스\" type=\"STRING\" size=\"256\"/><Column id=\"발생일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"업체명\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/><Column id=\"처리자명\" type=\"STRING\" size=\"256\"/><Column id=\"처리완료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청번호\">ptn01</Col><Col id=\"단계\">이동지역</Col><Col id=\"구분\">2024-10-21</Col><Col id=\"종료구분\">전*동</Col><Col id=\"서비스\">0000100001</Col><Col id=\"발생일시\">대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-06-11</Col><Col id=\"업체명\"/><Col id=\"내용\">032-***-0000</Col><Col id=\"처리자명\">010-****-5678</Col><Col id=\"처리완료일시\">○</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">입주자</Col><Col id=\"구분\">2024-10-15</Col><Col id=\"종료구분\">홍*동</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">㈜대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-07-10</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">공사직원</Col><Col id=\"구분\">2024-09-21</Col><Col id=\"종료구분\">오*수</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">인천국제공항공사</Col><Col id=\"작성일시\">123-45-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">9000-12-31</Col><Col id=\"업체명\">터미널건축팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("div00","15","368","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","108","102","120","60",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("보고서1");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","232","82","100%","300",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","500","30","120","60",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("보고서2");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","242","92","100%","300",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02","1081","38","120","60",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("보고서3");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","252","102","100%","300",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","15","368","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","108","102","120","60",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("보고서4");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","232","82","100%","300",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","500","30","120","60",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("보고서5");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","242","92","100%","300",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","1081","38","120","60",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("보고서6");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","252","102","100%","300",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20","divForm:20",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_ACPlus");
                p.btnSchClose.move(null,"10","34","34","10",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("3");
                p.Static00.set_text("보고서1");
                p.Static00.move("108","102","120","60",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.move("232","82","100%","300",null,null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("보고서2");
                p.Static01.move("500","30","120","60",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.move("242","92","100%","300",null,null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("보고서3");
                p.Static02.move("1081","38","120","60",null,null);

                p.Panel00_01.set_taborder("2");
                p.Panel00_01.move("252","102","100%","300",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_horizontalgap("20");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("3");
                p.Static00.set_text("보고서4");
                p.Static00.move("108","102","120","60",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.move("232","82","100%","300",null,null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("보고서5");
                p.Static01.move("500","30","120","60",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.move("242","92","100%","300",null,null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("보고서6");
                p.Static02.move("1081","38","120","60",null,null);

                p.Panel00_01.set_taborder("2");
                p.Panel00_01.move("252","102","100%","300",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("20");
            this.divForm.form.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_horizontalgap("20");
            this.divForm.form.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("1");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.div00.set_taborder("1");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("15","368","100%","300",null,null);

                p.div00_00.set_taborder("2");
                p.div00_00.set_text("div00");
                p.div00_00.set_fittocontents("height");
                p.div00_00.move("15","368","100%","300",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("보고서 유형");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_maxwidth("");
                p.divForm.move("20","10",null,null,"20","70");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20","divForm:20",null,"60","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","10",null,null,"20","80");
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
        this.registerScript("COM031P221.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
        }



        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("45px");
        	this.divForm.form.divSch.fittocontents="none";
        	this.divForm.form.divSch.set_height("145px");
        	this.divForm.form.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
        };
        this.loadIncludeScript("COM031P221.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
