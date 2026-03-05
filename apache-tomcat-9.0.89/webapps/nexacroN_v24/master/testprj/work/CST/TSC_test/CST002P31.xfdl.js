(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002P31");
            this.set_titletext("검토의견등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobDrctn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/><Column id=\"isReadonly\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","17","20","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div00","20","0","100%","288",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
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
            obj.set_taborder("1");
            obj.set_text("요청자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","371.00","146","84.59%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("요청일시");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","970.00","270","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"mEdt00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mEdt00","475","140","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_format("####-##-## ##:##:##");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("협조업무");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_02","20.00","242","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("panblank00","970.00","270","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03_01","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
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
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","446","296","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","448","248","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("위치정보(룸번호)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","0","510","100.00%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","146","87.92%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_01","0","510","100.00%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit01_00_00_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","20.00","146","87.92%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("상위ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","20.00","242","300","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","371.00","105","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
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

            obj = new Button("btnAplyInfoPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","-20","409","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("처리정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","51","436","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("div00_00","430","435","100%","310",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("승인 및 협의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","100%","86",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","96","371","40",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_div00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_div00_00_form_Radio00_innerdataset", obj);
            divForm_form_div00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">WORFT010</Col><Col id=\"datacolumn\">협의완료</Col></Row><Row><Col id=\"codecolumn\">WORFT030</Col><Col id=\"datacolumn\">협의필요</Col></Row><Row><Col id=\"codecolumn\">WORFT040</Col><Col id=\"datacolumn\">해당사항없음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_00_form_Radio00_innerdataset);
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","53","302","100%","100",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","50","100%","164",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","300","46",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","490.00","0","300","46",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("8");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("9");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj.set_flexcrossaxiswrapalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Grid("grdFile00","0.00","50","100%","40",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsRvwAtfl");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("fcltyInstlChgArchPicPrvcWcts");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:orgnlFileNm\" cssclass=\"expr:dataset.parent.dsJobDrctn.getColumn(0, &quot;isEdtrPsblty&quot;) || !orgnlFileNm  ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:!dataset.parent.dsJobDrctn.getColumn(0,  &quot;isEdtrPsblty&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:!dataset.parent.dsJobDrctn.getColumn(0,  &quot;isEdtrPsblty&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.dsJobDrctn.getColumn(0, &quot;isEdtrPsblty&quot;) &amp;&amp; !orgnlFileNm ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.dsJobDrctn.getColumn(0, &quot;isEdtrPsblty&quot;) &amp;&amp; !orgnlFileNm ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","980","111",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFile00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","91","100%","114",null,null,null,null,null,null,this.divForm.form.div00_00.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divForm.form.div00_00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnReg","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
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

                p.btnAplyInfoPop.set_taborder("1");
                p.btnAplyInfoPop.set_cssclass("btn_WF_EdtSch");
                p.btnAplyInfoPop.move("Edit00:-40","0","40","40",null,null);
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
                p.pan03.set_taborder("0");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_01.set_taborder("1");
                p.staLabel03_00_01.set_text("요청자명");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.move("20.00","146","87.92%","46",null,null);

                p.Panel02_00_00.set_taborder("2");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("20.00","242","300","86",null,null);

                p.staLabel03_01_01.set_taborder("3");
                p.staLabel03_01_01.set_text("요청일시");
                p.staLabel03_01_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_01.move("371.00","146","84.59%","46",null,null);

                p.Panel02_01_00.set_taborder("4");
                p.Panel02_01_00.set_type("vertical");
                p.Panel02_01_00.set_flexgrow("1");
                p.Panel02_01_00.move("970.00","270","300","86",null,null);

                p.pan02_00.set_taborder("5");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","242","100.00%","96",null,null);

                p.mEdt00.set_taborder("20");
                p.mEdt00.set_readonly("true");
                p.mEdt00.set_format("####-##-## ##:##:##");
                p.mEdt00.set_type("string");
                p.mEdt00.set_maskchar(" ");
                p.mEdt00.move("475","140","100%","40",null,null);

                p.staLabel03_00_00_02.set_taborder("6");
                p.staLabel03_00_00_02.set_text("협조업무");
                p.staLabel03_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_02.move("10","98","100%","46",null,null);

                p.pan_04_00_02.set_taborder("7");
                p.pan_04_00_02.set_type("vertical");
                p.pan_04_00_02.set_flexgrow("1");
                p.pan_04_00_02.move("20.00","242","300","86",null,null);

                p.panblank00.set_taborder("8");
                p.panblank00.set_type("vertical");
                p.panblank00.set_flexgrow("1");
                p.panblank00.move("970.00","270","300","86",null,null);

                p.pan03_01.set_taborder("9");
                p.pan03_01.set_horizontalgap("20");
                p.pan03_01.set_flexcrossaxiswrapalign("start");
                p.pan03_01.set_flexwrap("wrap");
                p.pan03_01.set_fittocontents("height");
                p.pan03_01.set_verticalgap("0");
                p.pan03_01.set_spacing("0px 20px 10px 20px");
                p.pan03_01.set_cssclass("pal_WF_DtlBg");
                p.pan03_01.move("0","242","100.00%","96",null,null);

                p.Edit01.set_taborder("12");
                p.Edit01.set_readonly("true");
                p.Edit01.move("44","297","100%","40",null,null);

                p.Edit00.set_taborder("11");
                p.Edit00.set_readonly("true");
                p.Edit00.move("446","296","100%","40",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_text("위치정보(룸번호)");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("448","248","100%","46",null,null);

                p.Edit01_00_00.set_taborder("13");
                p.Edit01_00_00.set_readonly("true");
                p.Edit01_00_00.move("0","510","100.00%","40",null,null);

                p.staLabel03_00_01_00.set_taborder("14");
                p.staLabel03_00_01_00.set_text("신청번호");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00.move("20.00","146","87.92%","46",null,null);

                p.Edit01_00_00_01.set_taborder("15");
                p.Edit01_00_00_01.set_readonly("true");
                p.Edit01_00_00_01.move("0","510","100.00%","40",null,null);

                p.Panel02_00_00_00.set_taborder("16");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.move("20.00","242","300","86",null,null);

                p.staLabel03_00_01_00_00.set_taborder("17");
                p.staLabel03_00_01_00_00.set_text("상위ID");
                p.staLabel03_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00_00.move("20.00","146","87.92%","46",null,null);

                p.Panel02_00_00_00_00.set_taborder("18");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("20.00","242","300","86",null,null);

                p.divEdtPop01.set_taborder("19");
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
            //-- Default Layout : this.divForm.form.div00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00.set_taborder("0");
                p.staLabel03_00_00.set_text("승인 및 협의여부");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.pan_04_00.set_taborder("1");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","100%","86",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.Radio00.set_taborder("3");
                p.Radio00.set_innerdataset(divForm_form_div00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.move("20","96","371","40",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("검토의견");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("5");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("53","302","100%","100",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.set_cssclass("pal_WF_DtlBg");
                p.Panel02_00.set_spacing("0px 20px 10px 20px");
                p.Panel02_00.move("20.00","50","100%","164",null,null);

                p.staLabel03_00_01.set_taborder("7");
                p.staLabel03_00_01.set_text("파일첨부");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("0","0","300","46",null,null);

                p.Panel01_00.set_taborder("8");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("490.00","0","300","46",null,null);

                p.Panel00_01.set_taborder("9");
                p.Panel00_01.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.set_flexcrossaxiswrapalign("spacebetween");
                p.Panel00_01.move("0.00","0","100%","46",null,null);

                p.grdFile00.set_taborder("10");
                p.grdFile00.set_binddataset("dsRvwAtfl");
                p.grdFile00.set_autofittype("col");
                p.grdFile00.set_cssclass("grd_WF_FileAdd");
                p.grdFile00.getSetter("upcolid").set("fcltyInstlChgArchPicPrvcWcts");
                p.grdFile00.set_readonly("true");
                p.grdFile00.move("0.00","50","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("11");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","10","980","111",null,null);

                p.pan00.set_taborder("12");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_verticalgap("4");
                p.pan00.move("0","91","100%","114",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
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
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panTitle.set_taborder("4");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("17","20","100%","70",null,null);

                p.staSubTitle.set_taborder("2");
                p.staSubTitle.set_text("작업계획");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_fittocontents("height");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.move("20","0","100%","288",null,null);

                p.staSubTitle00.set_taborder("3");
                p.staSubTitle00.set_text("처리정보");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("-20","409","100%","50",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("end");
                p.Panel00.set_fittocontents("none");
                p.Panel00.set_minheight("70");
                p.Panel00.set_maxheight("");
                p.Panel00.move("51","436","100%","70",null,null);

                p.div00_00.set_taborder("1");
                p.div00_00.set_text("신청자정보");
                p.div00_00.set_fittocontents("height");
                p.div00_00.set_cssclass("div_WF_Bg");
                p.div00_00.move("430","435","100%","310",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
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
            obj.set_spacing("0px 20px 10px 20px");
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
                p.btnReg.set_taborder("1");
                p.btnReg.set_text("등록");
                p.btnReg.set_cssclass("btn_WF_Yes");
                p.btnReg.move("457.00","30","100","40",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검토의견등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("0","0",null,null,"0","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,650,this,
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
            obj = new BindItem("item0","divForm.form.div00.form.Edit01_00_00_01","value","dsJobDrctn","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.div00.form.divEdtPop01.form.Edit00","value","dsJobDrctn","souId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.div00.form.Edit01_00_00","value","dsJobDrctn","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.div00.form.mEdt00","value","dsJobDrctn","dmndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div00.form.Edit01","value","dsJobDrctn","cstrnKndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.div00.form.Edit00","value","dsJobDrctn","pstnInfoRnb");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.div00_00.form.Radio00","value","dsJobDrctn","acptnHnovAprvCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.div00_00.form.TextArea01","value","dsJobDrctn","prcsRsltCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.div00_00.form.Radio00","readonly","dsJobDrctn","isReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPopBtn","visible","dsJobDrctn","isEdtrPsblty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.div00_00.form.TextArea01","readonly","dsJobDrctn","isReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.div00.form.divEdtPop01.form.btnAplyInfoPop","visible","dsJobDrctn","isEdtrPsblty");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002P31.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002P31.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002P31.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/24
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/24			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 인수 확인
        	this.pvObjDsJobDrctn  = this.getOwnerFrame().pvObjDsJobDrctn;
        	this.pvObjDsRvwAtfl   = this.getOwnerFrame().pvObjDsRvwAtfl;
        	this.pvObjRaonkUpload = this.getOwnerFrame().pvObjRaonkUpload;

        	// RaonkUpload RAONKUPLOAD_AfterAddFile
        	this.pvObjRaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile", this.RaonkUpload_RAONKUPLOAD_AfterAddFile, this);

        	// 현재행을 복사
        	// -------------
        	// 착공승인검토
        	this.dsJobDrctn.copyRow(this.dsJobDrctn.addRow(), this.pvObjDsJobDrctn, this.pvObjDsJobDrctn.rowposition);
        	this.dsJobDrctn.applyChange();
        	// 첨부파일
        	this.dsRvwAtfl.copyRow(this.dsRvwAtfl.addRow(), this.pvObjDsRvwAtfl, this.pvObjDsRvwAtfl.findRow("colId", this.pvObjRaonkUpload.upatflinfo.colid));
        	this.dsRvwAtfl.applyChange();
            // 편집 가능 여부에 따른 높이 조절
        	this.divForm.bottom = this.dsJobDrctn.getColumn(0, "isEdtrPsblty") ? 60 : 10;
        	this.dsJobDrctn.setColumn(0, "isReadonly", !this.dsJobDrctn.getColumn(0, "isEdtrPsblty"));  // 읽기전용여부
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_btnIdnty_onclick = function(obj,e)
        {
        	//this.gfnClosePopup(this.gfnDsToJson(this.dsList)[0]);
        };

        this.Grid_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
            if(e.col == 1) {
        		if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기
        			// 첨부파일 선택 창 열기
        			this.pvObjRaonkUpload.OpenFileDialog();
        		} else {  // 파일삭제
        			// 첨부 파일 삭제
        			this.pvObjRaonkUpload.cfnDelAtfl();
        			this.dsRvwAtfl.setColumn(0, "orgnlFileNm", "");  // 첨부파일명
        		}
        	}
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	// 첨부 파일
        	this.dsRvwAtfl.setColumn(0, "orgnlFileNm", e.userdata.strName);  // 첨부파일명
        };

        this.divPopBtn_btnReg_onclick = function(obj,e)
        {
            if(this.dsJobDrctn.getRowType(0) == Dataset.ROWTYPE_NORMAL &&
        	   this.dsRvwAtfl.getRowType(0)     == Dataset.ROWTYPE_NORMAL) {
        	    // 변경된 내용이 없습니다.
        		this.gfnAlertMsg("MSG_004", "MSG_004");

        		return;
        	}

            // 변경 데이터 리턴
        	this.close(JSON.stringify(this.gfnDsIsUpdated(this.dsJobDrctn) ? this.cfnGetToJson(this.dsJobDrctn) : {}));
        };

        this.form_onclose = function(obj,e)
        {
            // this.pvObjRaonkUpload 이벤트 제거
        	this.pvObjRaonkUpload.removeEventHandler("RAONKUPLOAD_AfterAddFile", this.RaonkUpload_RAONKUPLOAD_AfterAddFile, this);
        };

        this.divForm_div00_divEdtPop01_btnAplyInfoPop_onclick = function(obj,e)
        {
        	var oArg    = { pvAplyNo:this.dsJobDrctn.getColumn(0, "souId") };
        	var oOption = { title:"신청서 내역", titlebar:true, width:900, height:800 };
        	this.gfnOpenPopup("popupFcltyInstlChgPopup", "work::CST/TSC/CST002M00.xfdl", oArg, "", oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divForm.form.div00.form.divEdtPop01.form.btnAplyInfoPop.addEventHandler("onclick",this.divForm_div00_divEdtPop01_btnAplyInfoPop_onclick,this);
            this.divForm.form.div00_00.form.grdFile00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPopBtn.form.btnReg.addEventHandler("onclick",this.divPopBtn_btnReg_onclick,this);
            this.dsRvwAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST002P31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
