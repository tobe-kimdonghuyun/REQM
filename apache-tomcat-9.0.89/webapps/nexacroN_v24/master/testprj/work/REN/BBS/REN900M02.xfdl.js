(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN900M02");
            this.set_titletext("공지사항 및 게시내용 댓글등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsSe\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTtl\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">10</Col><Col id=\"cdNm\">공지사항</Col></Row><Row><Col id=\"cdId\">20</Col><Col id=\"cdNm\">자유게시판</Col></Row><Row><Col id=\"cdId\">31</Col><Col id=\"cdNm\">공통기능(API)</Col></Row><Row><Col id=\"cdId\">32</Col><Col id=\"cdNm\">공통화면</Col></Row><Row><Col id=\"cdId\">33</Col><Col id=\"cdNm\">표준문서</Col></Row><Row><Col id=\"cdId\">34</Col><Col id=\"cdNm\">참고문서</Col></Row><Row><Col id=\"cdId\">40</Col><Col id=\"cdNm\">테이블</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bbsNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","35.00","55","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00","35.00","175","375","105",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn00_00","35.00","115","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divForm","20","30",null,"1100","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","1050",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel","0","0","800","800",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel05\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","12","293","100%","70",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","112","100%","300",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel05\"/><PanelItem id=\"PanelItem00\" componentid=\"TextAreaBbsCn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","129","450","215","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel04","10","98","100","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","74","100%","70",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem01\" componentid=\"EditBbsTtl\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("EditBbsTtl","10.00","158","400","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05","10","98","100","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextAreaBbsCn","0","220","700","250",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel06","0.00","274","100","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","74","100%","70",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem03\" componentid=\"ComboBbsSe\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("ComboBbsSe","351.00","86","150","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCombo");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0.00","482","100.00%","80",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnReg","457.00","30","100","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.Div00.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","200.00","365","100","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.Div00.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","100","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.Div00.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staLabel05_00","10","98","100","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextAreaCmmtCn","0","220","700","250",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","112","100%","300",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel05_00\"/><PanelItem id=\"PanelItem00\" componentid=\"TextAreaCmmtCn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staState","0","42","100.00%",null,null,"divForm:20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("35.00","55","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("35.00","175","375","105",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("35.00","115","262","45",null,null);
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
            //-- Default Layout : this.divForm.form.Div00.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnReg.set_taborder("0");
                p.btnReg.set_text("저장");
                p.btnReg.set_cssclass("btn_WF_Yes");
                p.btnReg.move("457.00","30","100","40",null,null);

                p.btnDel.set_taborder("1");
                p.btnDel.set_text("삭제");
                p.btnDel.set_cssclass("btn_WF_No");
                p.btnDel.move("200.00","365","100","40",null,null);

                p.btnCancel.set_taborder("2");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("200.00","365","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.Div00.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divPopBtn.form,
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
            this.divForm.form.Div00.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel.set_taborder("6");
                p.Panel.set_type("vertical");
                p.Panel.move("0","0","800","800",null,null);

                p.Panel04.set_taborder("11");
                p.Panel04.move("12","293","100%","70",null,null);

                p.Panel03.set_taborder("10");
                p.Panel03.move("0","112","100%","300",null,null);

                p.Edit00.set_taborder("13");
                p.Edit00.set_readonly("true");
                p.Edit00.move("129","450","215","46",null,null);

                p.staLabel04.set_taborder("0");
                p.staLabel04.set_text("제목");
                p.staLabel04.set_cssclass("sta_WF_Label");
                p.staLabel04.move("10","98","100","46",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.move("20","74","100%","70",null,null);

                p.EditBbsTtl.set_taborder("1");
                p.EditBbsTtl.set_readonly("true");
                p.EditBbsTtl.move("10.00","158","400","46",null,null);

                p.staLabel05.set_taborder("2");
                p.staLabel05.set_text("내용");
                p.staLabel05.set_cssclass("sta_WF_Label");
                p.staLabel05.move("10","98","100","46",null,null);

                p.TextAreaBbsCn.set_taborder("3");
                p.TextAreaBbsCn.set_readonly("true");
                p.TextAreaBbsCn.move("0","220","700","250",null,null);

                p.staLabel06.set_taborder("4");
                p.staLabel06.set_text("첨부파일");
                p.staLabel06.set_cssclass("sta_WF_Label");
                p.staLabel06.move("0.00","274","100","46",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.move("20","74","100%","70",null,null);

                p.staLabel03.set_taborder("8");
                p.staLabel03.set_text("구분");
                p.staLabel03.set_cssclass("sta_WF_Label");
                p.staLabel03.move("0","0","100","46",null,null);

                p.ComboBbsSe.set_taborder("9");
                p.ComboBbsSe.set_innerdataset("dsCombo");
                p.ComboBbsSe.set_datacolumn("cdNm");
                p.ComboBbsSe.set_codecolumn("cdId");
                p.ComboBbsSe.set_readonly("true");
                p.ComboBbsSe.set_value("");
                p.ComboBbsSe.set_index("-1");
                p.ComboBbsSe.move("351.00","86","150","46",null,null);

                p.divPopBtn.set_taborder("12");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0.00","482","100.00%","80",null,null);

                p.staLabel05_00.set_taborder("14");
                p.staLabel05_00.set_text("댓글");
                p.staLabel05_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00.move("10","98","100","46",null,null);

                p.TextAreaCmmtCn.set_taborder("15");
                p.TextAreaCmmtCn.move("0","220","700","250",null,null);

                p.Panel05.set_taborder("16");
                p.Panel05.move("0","112","100%","300",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("1");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","1050",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
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
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항 및 게시내용 댓글등록");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.move("20","30",null,"1100","40",null);

                p.staState.set_taborder("2");
                p.staState.set_text("표는 필수 입력 사항입니다.");
                p.staState.set_cssclass("sta_WF_EsentialTxt");
                p.staState.move("0","42","100.00%",null,null,"divForm:20");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staState.move("20","50",null,"30","0",null);

                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","170",null,null,"0","80");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divForm.form.Div00.form.EditBbsTtl","value","dsGet","bbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div00.form.TextAreaBbsCn","value","dsGet","bbsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt00_01_00","value","dsGet","bbsTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.ComboBbsSe","value","dsGet","bbsSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","TextAreaBbsCn","value","dsGet","bbsCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.TextAreaCmmtCn","value","dsGet","cmntCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("REN900M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN900M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/10
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/25			박영수						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	this.param = this.getOwnerFrame().form.fvObjArgs;

        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	this.gfnConfirmMsg("delete_confirm", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        //저장
        this.cfnSave = function (param)
        {

        	if (this.gfnIsNull(this.dsGet.getColumn(0,"cmntCn"))) {
        		this.alert("내용을 입력하세요");
        		return;
        	}

        	if (this.gfnDsIsUpdated(this.dsGet) == false) {
         		this.alert("변경된 내역이 없습니다.");
         		return;
        	} else if (this.gfnDsIsUpdated(this.dsGet) == true) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/
        //게시글 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "renBbs/selectRenBbs.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "bbsNo=" + this.param.bbsNo;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 댓글 데이터 조회
        this.detailTransaction = function()
        {
        	var strSvcId    = "detail";
        	var strSvcUrl   = "renBbs/selectRenBbsCmnt.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "" ;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "renBbs/saveRenBbsCmnt.do";
        	var inData      = "dsGet=dsGet:U dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "select":
        			break;

        		case "detail":
        			break;

        		case "save":
        			this.alert(this.objApp.getVariable("gvRetMsg"));
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			break;

        	}
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {
        		if (this.param.status == "reg" && this.param.bbsNo == "" && this.param.cmntNo == "" ) {
        			this.dsGet.setColumn(0, "rowSttsCd", "I");
        		} else {
        			this.dsGet.setColumn(0, "rowSttsCd", "U");
        		}
        		this.saveTransaction();
        	}

        	if (sPopupId == "delete_confirm" && oRtn.result == "Y") {
        		this.dsGet.setColumn(0, "rowSttsCd", "D");
        		this.saveTransaction();
        	}

        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if (!this.gfnIsNull(this.param.bbsNo) && this.gfnIsNull(this.param.cmntNo)) {
        		this.dsSearch.setColumn(0, "bbsNo", this.param.bbsNo);
         		this.selectTransaction();
        	} else if (!this.gfnIsNull(this.param.bbsNo) && !this.gfnIsNull(this.param.cmntNo)){
        		this.dsSearch.setColumn(0, "bbsNo", this.param.bbsNo);
        		this.dsSearch.setColumn(0, "cmntNo", this.param.cmntNo);
         		this.detailTransaction();
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.divPopBtn.form.btnReg.addEventHandler("onclick",this.cfnSave,this);
            this.divForm.form.Div00.form.divPopBtn.form.btnDel.addEventHandler("onclick",this.cfnDel,this);
            this.divForm.form.Div00.form.divPopBtn.form.btnCancel.addEventHandler("onclick",this.divForm_divPopBtn_btnCancel_onclick,this);
        };
        this.loadIncludeScript("REN900M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
