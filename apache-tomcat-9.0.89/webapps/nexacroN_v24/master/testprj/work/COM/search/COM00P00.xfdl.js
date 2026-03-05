(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P00");
            this.set_titletext("검색레이어팝업");
            this.set_background("#dee2eb");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">01</Col><Col id=\"MENU_NM\">상세메뉴1</Col></Row><Row><Col id=\"MENU_CD\">02</Col><Col id=\"MENU_NM\">상세메뉴2</Col></Row><Row><Col id=\"MENU_CD\">03</Col><Col id=\"MENU_NM\">상세메뉴3</Col></Row><Row><Col id=\"MENU_CD\">04</Col><Col id=\"MENU_NM\">상세메뉴4</Col></Row><Row><Col id=\"MENU_CD\">05</Col><Col id=\"MENU_NM\">상세메뉴5</Col></Row><Row><Col id=\"MENU_CD\">06</Col><Col id=\"MENU_NM\">상세메뉴6</Col></Row><Row><Col id=\"MENU_CD\">07</Col><Col id=\"MENU_NM\">상세메뉴7</Col></Row><Row><Col id=\"MENU_CD\">08</Col><Col id=\"MENU_NM\">상세메뉴8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"안내구분\" type=\"STRING\" size=\"256\"/><Column id=\"등록일자\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"안내시작일시\" type=\"STRING\" size=\"256\"/><Column id=\"안내종료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","44","18","800","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("검색어를 입력해주세요");
            obj.set_cssclass("Bigfont");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","350","12","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn00","970","0","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_X");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","155","41","800","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_horizontalgap("0");
            obj.set_verticalgap("10");
            obj.set_spacing("180px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","60",null,null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-60","0","60","60",null,null,null,null,null,null,this.divForm.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_Big_EdtSch");
            obj.set_text("");
            this.divForm.form.divEdtPop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0","100%","60",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_Big_EdtSch");
                p.btnPop.set_text("");
                p.btnPop.move("Edit00:-60","0","60","60",null,null);
            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("1");
                p.Static00.set_text("검색어를 입력해주세요");
                p.Static00.set_cssclass("Bigfont");
                p.Static00.move("44","18","800","40",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("350","12","100%","40",null,null);

                p.btn00.set_taborder("4");
                p.btn00.set_cssclass("btn_WF_X");
                p.btn00.move("970","0","40","40",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.set_type("vertical");
                p.Panel00.set_horizontalgap("0");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_spacing("180px 0px 0px 0px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("155","41","800","200",null,null);

                p.divEdtPop.set_taborder("2");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","100%","60",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div01.move("0","Div00:50","100%","745",null,null);

                p.Div02.move("0","Div01:50","100%","176",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("0px 0px 0px 0px");
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검색레이어팝업");
                p.set_background("#dee2eb");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","0","100%","100%",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","243",null,"324","20",null);
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
        this.registerScript("COM00P00.xfdl", function() {
        this.btnGrdRegi_onclick = function(obj,e)
        {
        	var sTitle = "";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupSearch", "", objArg, sPopupCallBack, objOption);
        };


        this.divForm_btn00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divForm.form.btn00.addEventHandler("onclick",this.divForm_btn00_onclick,this);
            this.divForm.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_divEdtPop_btnPop_onclick,this);
        };
        this.loadIncludeScript("COM00P00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
