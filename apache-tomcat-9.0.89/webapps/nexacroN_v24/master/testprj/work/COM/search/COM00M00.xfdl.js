(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000M00");
            this.set_titletext("검색결과목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"안내구분\" type=\"STRING\" size=\"256\"/><Column id=\"등록일자\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"안내시작일시\" type=\"STRING\" size=\"256\"/><Column id=\"안내종료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row><Row><Col id=\"안내구분\">업무용</Col><Col id=\"등록일자\">2024-01-10</Col><Col id=\"등록자\">홍길동</Col><Col id=\"제목\">여객터미널 업무용시설 임대안내</Col><Col id=\"안내시작일시\">2024-01-15 09:00</Col><Col id=\"안내종료일시\">2024-05-19 24:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Sch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","0",null,"50","60",null,null,null,"50",null,this);
            obj.set_taborder("2");
            obj.set_text("통합검색");
            obj.set_cssclass("sta_WF_MainTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","70",null,"146","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","191","125","40","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_cssclass("Sch_txt_bk");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch","20","90","99","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_text("인기검색어");
            obj.set_cssclass("Sch_txt_bk");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01","0","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("#검색어1");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSch0","10","0","500","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSch\"/><PanelItem id=\"PanelItem03\" componentid=\"staSch01\"/><PanelItem id=\"PanelItem02\" componentid=\"staSch01_01\"/><PanelItem id=\"PanelItem04\" componentid=\"staSch01_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"staSch01_01_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"staSch01_01_00_00_00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divEdtPop","0","50","100%","60",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","60",null,null,null,null,null,null,this.divSch.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_BigEdtSch");
            obj.set_value("입주단계");
            obj.set_text("입주단계");
            this.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-60","0","60","60",null,null,null,null,null,null,this.divSch.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_Big_EdtSch");
            obj.set_text("");
            this.divSch.form.divEdtPop.addChild(obj.name, obj);

            obj = new Static("staSch00","10","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("Sch_txt_bk");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01_00","staSch00:0","0","40","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_text("152");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSch0_00","20","90","159","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSch00\"/><PanelItem id=\"PanelItem03\" componentid=\"staSch01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"staSch02_00\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch02_00","staSch01_00:0","0","30","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("");
            obj.set_text("개");
            obj.set_usedecorate("true");
            obj.set_cssclass("Sch_txt_bk");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","90","100%","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_spacing("0px 0px 0px 3px ");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"PanelSch0_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"PanelSch0\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01_01","0","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("#검색어1");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01_01_00","0","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("12");
            obj.set_text("#검색어3");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01_01_00_00","0","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("13");
            obj.set_text("#검색어4");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staSch01_01_00_00_00","0","0","80","34",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("14");
            obj.set_text("#검색어5");
            obj.set_cssclass("Sch_txt_blue");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divForm","0","divSch:20",null,"774","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grid00","0","0","100.00%","674",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Sch");
            obj.set_cssclass("Sch_Line");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"1400\"/></Columns><Rows><Row size=\"40\"/><Row size=\"94\"/><Row size=\"40\"/><Row size=\"40\"/></Rows><Band id=\"body\"><Cell cssclass=\"Title\" text=\" 제1, 제2 여객터미널 업무용시설 임대안내\" verticalAlign=\"bottom\"/><Cell row=\"1\" cssclass=\"DataTxt\" text=\" &lt;b v=&quot;ture&quot;&gt;&lt;fc v=&quot;#1e4ebe&quot;&gt;(입주단계)&lt;/fc&gt;&lt;/b&gt;(정의) 국가기관, 항공사 및 입주업체에서 사무실, 창고, 카운터 등의 용도로 사용하고자 하는 시설&#13;&#10;(해당건물) 제1, 2여객터미널, 탑승동, 제1,2교통센터(운영기획팀 032-741-2401)★부대건물 임차(재무팀, 032-741-2323), 화물터미널 임차((물류운영팀, 032-741-2288) 공항 운영에 필수적 역할 수행 또는 여객서비스 증진에 기여할 수 있는 기관*업체 중 상주 필요성이 인정되는 기관*업체(사용료) 보증금(6개월분), 임대료, 관리비, 유틸리티 비용 부과 ...\" wordWrap=\"char\" displaytype=\"decoratetext\" textAlign=\"left\" controlautosizingtype=\"height\"/><Cell row=\"2\" text=\"조회결과가 없습니다.\" textAlign=\"center\" cssclass=\"Title, Nolink\" verticalAlign=\"bottom\"/><Cell row=\"3\" text=\"검색어를 다시 입력하셔서 조회해 보세요.\" textAlign=\"center\" verticalAlign=\"top\" cssclass=\"DataTxt, Nolink\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("publishing::sample_Test/pagging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_BigEdtSch");
                p.Edit00.set_value("입주단계");
                p.Edit00.move("0","0","100%","60",null,null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_Big_EdtSch");
                p.btnPop.set_text("");
                p.btnPop.move("Edit00:-60","0","60","60",null,null);
            	}
            );
            this.divSch.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form.divEdtPop.form
            obj = new Layout("mobile","",0,0,this.divSch.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSch.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("3");
                p.Static01.set_text("/");
                p.Static01.set_textAlign("center");
                p.Static01.set_cssclass("Sch_txt_bk");
                p.Static01.move("191","125","40","34",null,null);

                p.staSch.set_taborder("4");
                p.staSch.set_text("인기검색어");
                p.staSch.set_cssclass("Sch_txt_bk");
                p.staSch.set_usedecorate("true");
                p.staSch.set_fittocontents("width");
                p.staSch.move("20","90","99","34",null,null);

                p.staSch01.set_taborder("5");
                p.staSch01.set_text("#검색어1");
                p.staSch01.set_cssclass("Sch_txt_blue");
                p.staSch01.set_usedecorate("true");
                p.staSch01.set_fittocontents("width");
                p.staSch01.move("0","0","80","34",null,null);

                p.PanelSch0.set_taborder("0");
                p.PanelSch0.set_fittocontents("width");
                p.PanelSch0.set_horizontalgap("10");
                p.PanelSch0.move("10","0","500","34",null,null);

                p.divEdtPop.set_taborder("1");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.set_fittocontents("height");
                p.divEdtPop.move("0","50","100%","60",null,null);

                p.staSch00.set_taborder("0");
                p.staSch00.set_text("검색결과");
                p.staSch00.set_cssclass("Sch_txt_bk");
                p.staSch00.set_usedecorate("true");
                p.staSch00.set_fittocontents("width");
                p.staSch00.move("10","0","80","34",null,null);

                p.staSch01_00.set_taborder("0");
                p.staSch01_00.set_text("152");
                p.staSch01_00.set_cssclass("Sch_txt_blue");
                p.staSch01_00.set_usedecorate("true");
                p.staSch01_00.set_fittocontents("width");
                p.staSch01_00.move("staSch00:0","0","40","34",null,null);

                p.PanelSch0_00.set_taborder("0");
                p.PanelSch0_00.set_horizontalgap("10");
                p.PanelSch0_00.set_fittocontents("width");
                p.PanelSch0_00.move("20","90","159","34",null,null);

                p.staSch02_00.set_taborder("");
                p.staSch02_00.set_text("개");
                p.staSch02_00.set_usedecorate("true");
                p.staSch02_00.set_cssclass("Sch_txt_bk");
                p.staSch02_00.move("staSch01_00:0","0","30","34",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_spacing("0px 0px 0px 3px ");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","90","100%","34",null,null);

                p.staSch01_01.set_taborder("11");
                p.staSch01_01.set_text("#검색어1");
                p.staSch01_01.set_cssclass("Sch_txt_blue");
                p.staSch01_01.set_usedecorate("true");
                p.staSch01_01.set_fittocontents("width");
                p.staSch01_01.move("0","0","80","34",null,null);

                p.staSch01_01_00.set_taborder("12");
                p.staSch01_01_00.set_text("#검색어3");
                p.staSch01_01_00.set_cssclass("Sch_txt_blue");
                p.staSch01_01_00.set_usedecorate("true");
                p.staSch01_01_00.set_fittocontents("width");
                p.staSch01_01_00.move("0","0","80","34",null,null);

                p.staSch01_01_00_00.set_taborder("13");
                p.staSch01_01_00_00.set_text("#검색어4");
                p.staSch01_01_00_00.set_cssclass("Sch_txt_blue");
                p.staSch01_01_00_00.set_usedecorate("true");
                p.staSch01_01_00_00.set_fittocontents("width");
                p.staSch01_01_00_00.move("0","0","80","34",null,null);

                p.staSch01_01_00_00_00.set_taborder("14");
                p.staSch01_01_00_00_00.set_text("#검색어5");
                p.staSch01_01_00_00_00.set_cssclass("Sch_txt_blue");
                p.staSch01_01_00_00_00.set_usedecorate("true");
                p.staSch01_01_00_00_00.set_fittocontents("width");
                p.staSch01_01_00_00_00.move("0","0","80","34",null,null);
            	}
            );
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_horizontalgap("8");
                p.pan03.set_flexgrow("1");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.Edit00.move("890","24","65%","40",null,null);

                p.Edit01.move("163","80","65%","40",null,null);

                p.pan04.move("1694.00","398","100%","45",null,null);

                p.cmbList.move("130","14","120","40",null,null);

                p.Edit03.move("977","85","65%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.move("20","14","100%","257",null,null);
            	}
            );
            obj.set_spacing("20px 20px 20px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divPage.form,function(p){});
            this.divForm.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grid00.set_taborder("0");
                p.grid00.set_binddataset("ds_Sch");
                p.grid00.set_cssclass("Sch_Line");
                p.grid00.set_autofittype("col");
                p.grid00.move("0","0","100.00%","674",null,null);

                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("publishing::sample_Test/pagging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
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
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검색결과목록");

                p.staTitle.set_taborder("2");
                p.staTitle.set_text("통합검색");
                p.staTitle.set_cssclass("sta_WF_MainTitle");
                p.staTitle.set_usedecorate("true");
                p.staTitle.set_minheight("50");
                p.staTitle.set_maxheight("");
                p.staTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","70",null,"146","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divSch:20",null,"774","60",null);
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
                p.divSch.move("20","70",null,"355","20",null);

                p.divForm.move("20","divSch:20",null,"324","20",null);

                p.staTitle.move("20","0",null,"50","20",null);
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
            this._addPreloadList("fdl","publishing::sample_Test/pagging.xfdl");
        };
        
        // User Script
        this.registerScript("COM00M00.xfdl", function() {
        this.btnGrdRegi_onclick = function(obj,e)
        {
        		var sTitle = "임차의향서(정기) 유상/무상 선택";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 460
        		, height: 210			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupSearch", "publishing::work/REN/REN020/REN022M00POP.xfdl", objArg, sPopupCallBack, objOption);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSch.form.staSch.addEventHandler("onclick",this.divSch_staSch_onclick,this);
            this.divSch.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_divEdtPop_btnPop_onclick,this);
        };
        this.loadIncludeScript("COM00M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
