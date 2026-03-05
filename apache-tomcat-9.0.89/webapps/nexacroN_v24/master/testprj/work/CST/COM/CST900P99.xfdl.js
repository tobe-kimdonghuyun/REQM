(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST900P99");
            this.set_titletext("검토의견등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,790);
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
            obj._setContents("<ColumnInfo><Column id=\"체크\" type=\"STRING\" size=\"256\"/><Column id=\"작업일\" type=\"STRING\" size=\"256\"/><Column id=\"작업시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"작업종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"개요\" type=\"STRING\" size=\"256\"/><Column id=\"작업내역\" type=\"STRING\" size=\"256\"/><Column id=\"작업자회사\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"360","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("div00","20","0","100%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panblank","970.00","270","305","1",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","20.00","146","87.92%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("요청자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","371.00","146","84.59%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("요청일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("협조업무");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_02","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panblank00","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"panblank00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","44","297","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","446","296","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","448","248","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","205","520","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","0","510","100.00%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","146","87.92%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_01","0","510","100.00%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","20.00","146","87.92%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("상위ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","371.00","105","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divForm00","0","divForm:20",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("div00","39.00","0","100%","310",null,null,null,null,null,null,this.divForm00.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("처리정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("승인 및 협의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","100%","86",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Panel("panblank","970.00","270","305","1",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("4");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panblank\"/></Contents>");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","96","371","40",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm00_form_div00_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm00_form_div00_form_Radio00_innerdataset", obj);
            divForm00_form_div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">협의완료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">협의필요</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">해당사항없음</Col></Row></Rows>");
            obj.set_innerdataset(divForm00_form_div00_form_Radio00_innerdataset);
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","53","302","100%","100",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("내용 입력");
            this.divForm00.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","50","96.08%","164",null,null,null,null,null,null,this.divForm00.form.div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divForm00.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.div00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("작업계획");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.panblank.set_taborder("1");
                p.panblank.set_type("vertical");
                p.panblank.set_flexgrow("1");
                p.panblank.move("970.00","270","305","1",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01.set_taborder("3");
                p.staLabel03_00_01.set_text("요청자명");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("20.00","146","87.92%","46",null,null);

                p.Panel02_00_00.set_taborder("4");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_01.set_taborder("5");
                p.staLabel03_01_01.set_text("요청일시");
                p.staLabel03_01_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_01.move("371.00","146","84.59%","46",null,null);

                p.Panel02_01_00.set_taborder("6");
                p.Panel02_01_00.set_type("vertical");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.move("970.00","270","305","86",null,null);

                p.pan02_00.set_taborder("7");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_02.set_taborder("8");
                p.staLabel03_00_00_02.set_text("협조업무");
                p.staLabel03_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_02.move("10","98","100%","46",null,null);

                p.pan_04_00_02.set_taborder("9");
                p.pan_04_00_02.set_type("vertical");
                p.pan_04_00_02.set_flexgrow("1");
                p.pan_04_00_02.move("20.00","242","305","86",null,null);

                p.panblank00.set_taborder("10");
                p.panblank00.set_type("vertical");
                p.panblank00.set_flexgrow("1");
                p.panblank00.move("970.00","270","305","86",null,null);

                p.pan03_01.set_taborder("11");
                p.pan03_01.set_horizontalgap("20");
                p.pan03_01.set_flexcrossaxiswrapalign("start");
                p.pan03_01.set_flexwrap("wrap");
                p.pan03_01.set_fittocontents("height");
                p.pan03_01.set_verticalgap("0");
                p.pan03_01.set_spacing("0px 20px 10px 20px");
                p.pan03_01.set_cssclass("pal_WF_DtlBg");
                p.pan03_01.move("0","242","100.00%","96",null,null);

                p.Edit01.set_taborder("14");
                p.Edit01.set_readonly("true");
                p.Edit01.move("44","297","100%","40",null,null);

                p.Edit00.set_taborder("13");
                p.Edit00.set_readonly("true");
                p.Edit00.move("446","296","100%","40",null,null);

                p.Static00.set_taborder("12");
                p.Static00.set_text("위치정보(룸번호)");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("448","248","100%","46",null,null);

                p.Edit01_00_00_00.set_taborder("16");
                p.Edit01_00_00_00.set_readonly("true");
                p.Edit01_00_00_00.move("205","520","100%","40",null,null);

                p.Edit01_00_00.set_taborder("15");
                p.Edit01_00_00.set_readonly("true");
                p.Edit01_00_00.move("0","510","100.00%","40",null,null);

                p.staLabel03_00_01_00.set_taborder("17");
                p.staLabel03_00_01_00.set_text("신청번호");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00.move("20.00","146","87.92%","46",null,null);

                p.Edit01_00_00_01.set_taborder("18");
                p.Edit01_00_00_01.set_readonly("true");
                p.Edit01_00_00_01.move("0","510","100.00%","40",null,null);

                p.Panel02_00_00_00.set_taborder("19");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_00_01_00_00.set_taborder("20");
                p.staLabel03_00_01_00_00.set_text("상위ID");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00.move("20.00","146","87.92%","46",null,null);

                p.Panel02_00_00_00_00.set_taborder("21");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("20.00","242","305","86",null,null);

                p.divEdtPop01.set_taborder("22");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("371.00","105","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
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
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_fittocontents("height");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.move("20","0","100%","350",null,null);
            	}
            );
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("등록");
                p.Button00_00.set_cssclass("btn_WF_Yes");
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
            //-- Default Layout : this.divForm00.form.div00.form
            obj = new Layout("default","",0,0,this.divForm00.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("처리정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.staLabel03_00_00.set_taborder("1");
                p.staLabel03_00_00.set_text("승인 및 협의여부");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00.set_taborder("2");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","100%","86",null,null);

                p.panblank.set_taborder("3");
                p.panblank.set_type("vertical");
                p.panblank.set_flexgrow("1");
                p.panblank.move("970.00","270","305","1",null,null);

                p.pan03.set_taborder("4");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.Radio00.set_taborder("5");
                p.Radio00.set_innerdataset(divForm00_form_div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.move("20","96","371","40",null,null);

                p.staLabel03_00.set_taborder("6");
                p.staLabel03_00.set_text("검토의견");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("7");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("53","302","100%","100",null,null);

                p.Panel02_00.set_taborder("8");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00.move("20.00","50","96.08%","164",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm00.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm00.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm00.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm00.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm00.form
            obj = new Layout("default","",0,0,this.divForm00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_fittocontents("height");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.move("39.00","0","100%","310",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm00.form
            obj = new Layout("mobile","",0,0,this.divForm00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",800,790,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검토의견등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.move("0","0",null,"360","0",null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");

                p.divForm00.set_taborder("2");
                p.divForm00.set_text("div00");
                p.divForm00.set_visible("true");
                p.divForm00.set_formscrollbartype("auto autoindicator");
                p.divForm00.move("0","divForm:20",null,null,"0","60");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",390,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST900P99.xfdl", function() {

        this.CST900P99_onload = function(obj,e)
        {
        	var arr = [1, 2, 3, 4, 5];
        	arr.unshift(9);

        	trace(arr);

        	arr.map(function(v, i, o) {
        	    trace(o);
        	    o[0] = i;
        		return o[0];
        	});

        	trace(arr[0]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CST900P99_onload,this);
        };
        this.loadIncludeScript("CST900P99.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
