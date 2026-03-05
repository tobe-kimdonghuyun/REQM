(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST13M00_01");
            this.set_titletext("투입자재 및 공구류");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">니퍼</Col><Col id=\"Column2\">5</Col><Col id=\"Column3\">개</Col><Col id=\"Column4\">30cm</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">페인트</Col><Col id=\"Column2\">5</Col><Col id=\"Column3\">통</Col><Col id=\"Column4\">20L</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00_01","1300","0","100.00%","242",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","145",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("1");
            obj.set_text("투입자재 및 공구류 반입여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","134",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPutMtrlToolKndCrynYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Radio("rdoPutMtrlToolKndCrynYn","171","110","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_form_rdoPutMtrlToolKndCrynYn_innerdataset = new nexacro.NormalDataset("div00_01_form_rdoPutMtrlToolKndCrynYn_innerdataset", obj);
            div00_01_form_rdoPutMtrlToolKndCrynYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_form_rdoPutMtrlToolKndCrynYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static00","290","121","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("4");
            obj.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야 합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("5");
            obj.set_text("항공기 내 반입금지 물품(국토교통부고시)문서 읽음 여부");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01.addChild(obj.name, obj);

            obj = new Radio("rdoArcftInsdCrynPhbtCmdtyDocReadYn","20","191","200","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            var div00_01_form_rdoArcftInsdCrynPhbtCmdtyDocReadYn_innerdataset = new nexacro.NormalDataset("div00_01_form_rdoArcftInsdCrynPhbtCmdtyDocReadYn_innerdataset", obj);
            div00_01_form_rdoArcftInsdCrynPhbtCmdtyDocReadYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">읽음</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">안읽음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_form_rdoArcftInsdCrynPhbtCmdtyDocReadYn_innerdataset);
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","100%","86",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","208","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoArcftInsdCrynPhbtCmdtyDocReadYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Button("Button00","951","213","120","34",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.div00_01.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00_00","1300","395.611","100.00%","540",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","43","55","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("예시 (표 참조)");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel03","75","97","100%","170",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_spacing("10px 10px 10px 10px");
            obj.set_background("#f8f8f8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","10","100%","150",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_background("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격(길이/용량)\"/><Cell col=\"5\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"text\" background=\"#f8f8f8\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"text\" background=\"#f8f8f8\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"text\" background=\"#f8f8f8\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"text\" background=\"#f8f8f8\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"text\" background=\"#f8f8f8\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"CellEnd\" displaytype=\"text\" background=\"#f8f8f8\"/></Band></Format></Formats>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","74",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.\r\nO 위험물의 경우 구격란에 용량(ex. 100ml, 100g) 으로 기재\r\nO 셋트 물품의 경우 최소단위까지의 규격(ex. 10/12/14cm)를 모두 기재");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","46","100.00%","226",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_spacing("0px 20px  10px 20px");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","85",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","194",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","871","20","150","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("물품목록일괄업로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","470","0","100%","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","panGrdBtn:20","100%","140",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"규격(길이/용량)\"/><Cell col=\"6\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:작업일\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"bind:개요\"/><Cell col=\"4\" text=\"bind:작업내역\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00_01","1300","875","100.00%","257",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","68","61","100%","150",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("5");
            obj.set_value("- 보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수\n- 보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능\n- 상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조\n- 보호구역 내 위해물품 및 위험물 방치 및 분식되지 않도록 관리\n\n상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,\n관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
            obj.set_readonly("true");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none default");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","47","100.00%","160",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("4");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","97",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("위해물품사용 준수사항동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoDgadsCmdtyUseCmpanAgreYn\"/></Contents>");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Radio("rdoDgadsCmdtyUseCmpanAgreYn","74","77","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_01.form);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_01_00_00_01_form_rdoDgadsCmdtyUseCmpanAgreYn_innerdataset = new nexacro.NormalDataset("div00_01_01_00_00_01_form_rdoDgadsCmdtyUseCmpanAgreYn_innerdataset", obj);
            div00_01_01_00_00_01_form_rdoDgadsCmdtyUseCmpanAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_01_00_00_01_form_rdoDgadsCmdtyUseCmpanAgreYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_01_00_00_01.addChild(obj.name, obj);

            obj = new Div("div00_02_00","0","1319","100.00%","461",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("0");
            obj.set_text("초소선택");
            obj.set_cssclass("sta_WF_Label");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","20.00","0","300","320",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","824","100%","320",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/></Contents>");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Button("Button00","111","158","137","34",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("10");
            obj.set_text("외곽초소 위치도");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallGray");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Static("Static01","180","153","100%","125",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("11");
            obj.set_text("■ 출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)\r\n■ 출국심사장 내 공사/작업 시 “출국심사장” 선택\r\n■ 부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택\r\n예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","281","100%","60",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("12");
            obj.set_text("입.출시 동일 출입구 이용");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("4");
            obj.set_text("선택사유 및 이용예정초소");
            obj.set_cssclass("sta_WF_Label");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Edit("edtChcRsnUtztnPrnmntChckpntCn","20.00","288","100%","40",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("내용 입력");
            obj.set_text("");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","120",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtChcRsnUtztnPrnmntChckpntCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03\"/></Contents>");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","131",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Static("Static03","118","380","100%","60",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("13");
            obj.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정\r\n■ 외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Combo("cboCrynChckpntCd","75","116","150","40",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsWapWatchBox");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Combo("cboCrynChckpntCd1","221","122","150","40",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsWapWatchBoxDtl");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","46","100%","40",null,null,null,null,null,null,this.div00_02_00.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboCrynChckpntCd\"/><PanelItem id=\"PanelItem01\" componentid=\"cboCrynChckpntCd1\"/></Contents>");
            this.div00_02_00.addChild(obj.name, obj);

            obj = new Panel("panForm","0","0","100.00%","2280",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"div00_01_01_00_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem06\" componentid=\"div00_01_01_00_00_01\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem08\" componentid=\"div00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","205","60","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("투입자재 및 공구류 등(위해물품 및 위험물 포함)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","1275","60","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnClose\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","205","60","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("7");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1160","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen","1172","-6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","570","462","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1640","462","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","570","462","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00","1202","386","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen00","1142","354","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","270","1184","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("보호구역 내 위해물품 사용 관련 준수사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1340","1184","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnClose01\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","270","1184","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("17");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose01","1156","982","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen01","1142","990","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","300","1520","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("반입초소지정");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","1370","1520","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose02\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","300","1520","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("22");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose02","1160","1370","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen02","1110","1366","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","1780","100.00%","420",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttrCn","53","302","100%","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","371","100.00%","166",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"400\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","583","508","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","0","300","376",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttrCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","20","100%","383",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01.form
            obj = new Layout("default","",0,0,this.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","145",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("투입자재 및 공구류 반입여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","134",null,null);

                p.rdoPutMtrlToolKndCrynYn.set_taborder("3");
                p.rdoPutMtrlToolKndCrynYn.set_fittocontents("none");
                p.rdoPutMtrlToolKndCrynYn.set_innerdataset(div00_01_form_rdoPutMtrlToolKndCrynYn_innerdataset);
                p.rdoPutMtrlToolKndCrynYn.set_codecolumn("codecolumn");
                p.rdoPutMtrlToolKndCrynYn.set_datacolumn("datacolumn");
                p.rdoPutMtrlToolKndCrynYn.set_direction("vertical");
                p.rdoPutMtrlToolKndCrynYn.set_columncount("-1");
                p.rdoPutMtrlToolKndCrynYn.set_rowcount("-1");
                p.rdoPutMtrlToolKndCrynYn.set_value("0");
                p.rdoPutMtrlToolKndCrynYn.set_index("0");
                p.rdoPutMtrlToolKndCrynYn.move("171","110","100%","40",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야 합니다.");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.move("290","121","100%","40",null,null);

                p.staLabel00_00.set_taborder("5");
                p.staLabel00_00.set_text("항공기 내 반입금지 물품(국토교통부고시)문서 읽음 여부");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_taborder("6");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_fittocontents("width");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_innerdataset(div00_01_form_rdoArcftInsdCrynPhbtCmdtyDocReadYn_innerdataset);
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_codecolumn("codecolumn");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_datacolumn("datacolumn");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_direction("vertical");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_columncount("0");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_rowcount("0");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_value("0");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.set_index("0");
                p.rdoArcftInsdCrynPhbtCmdtyDocReadYn.move("20","191","200","40",null,null);

                p.Panel00_00_00.set_taborder("7");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","100%","86",null,null);

                p.pan00_00.set_taborder("8");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","97",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","208","100%","40",null,null);

                p.Button00.set_taborder("9");
                p.Button00.set_text("다운로드");
                p.Button00.set_cssclass("btn_WF_GrdDw");
                p.Button00.set_fittocontents("width");
                p.Button00.move("951","213","120","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01.form
            obj = new Layout("mobile","",0,0,this.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01.form
            obj = new Layout("Layout0","",0,0,this.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("4");
                p.Button00.set_text("물품목록일괄업로드");
                p.Button00.set_cssclass("btn_WF_GrdDw");
                p.Button00.set_fittocontents("width");
                p.Button00.move("871","20","150","34",null,null);

                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move("470","0","100%","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("20","panGrdBtn:20","100%","140",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("5");
                p.Static00.set_text("예시 (표 참조)");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("43","55","100%","46",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_spacing("10px 10px 10px 10px");
                p.Panel03.set_background("#f8f8f8");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("75","97","100%","170",null,null);

                p.Grid00.set_taborder("3");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_background("transparent");
                p.Grid00.move("20.00","10","100%","150",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.\r\nO 위험물의 경우 구격란에 용량(ex. 100ml, 100g) 으로 기재\r\nO 셋트 물품의 경우 최소단위까지의 규격(ex. 10/12/14cm)를 모두 기재");
                p.staLabel00.set_cssclass("sta_WF_Des004");
                p.staLabel00.set_fittocontents("height");
                p.staLabel00.move("10","98","100%","74",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.set_spacing("0px 20px  10px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("0","46","100.00%","226",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","85",null,null);

                p.divGrd.set_taborder("4");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","194",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00_00_01.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("5");
                p.TextArea00.set_value("- 보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수\n- 보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능\n- 상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조\n- 보호구역 내 위해물품 및 위험물 방치 및 분식되지 않도록 관리\n\n상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,\n관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.set_scrolltype("vertical");
                p.TextArea00.set_scrollbartype("none default");
                p.TextArea00.move("68","61","100%","150",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","47","100.00%","160",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","97",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("위해물품사용 준수사항동의여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","86",null,null);

                p.rdoDgadsCmdtyUseCmpanAgreYn.set_taborder("3");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_fittocontents("none");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_innerdataset(div00_01_01_00_00_01_form_rdoDgadsCmdtyUseCmpanAgreYn_innerdataset);
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_codecolumn("codecolumn");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_datacolumn("datacolumn");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_direction("vertical");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_columncount("-1");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_rowcount("-1");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_value("0");
                p.rdoDgadsCmdtyUseCmpanAgreYn.set_index("0");
                p.rdoDgadsCmdtyUseCmpanAgreYn.move("74","77","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_01.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_01.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_02_00.form
            obj = new Layout("default","",0,0,this.div00_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel05_00_00.set_taborder("0");
                p.staLabel05_00_00.set_text("초소선택");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00.move("0","0","100%","46",null,null);

                p.pan04_00.set_taborder("2");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.set_verticalgap("4");
                p.pan04_00.move("20.00","0","300","320",null,null);

                p.pan08.set_taborder("3");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_flexcrossaxiswrapalign("start");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_verticalgap("0");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_fittocontents("height");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.move("0","824","100%","320",null,null);

                p.Button00.set_taborder("10");
                p.Button00.set_text("외곽초소 위치도");
                p.Button00.set_fittocontents("width");
                p.Button00.set_cssclass("btn_WF_SmallGray");
                p.Button00.move("111","158","137","34",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("■ 출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)\r\n■ 출국심사장 내 공사/작업 시 “출국심사장” 선택\r\n■ 부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택\r\n예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
                p.Static01.set_cssclass("sta_WF_Des004");
                p.Static01.set_fittocontents("height");
                p.Static01.move("180","153","100%","125",null,null);

                p.Static02.set_taborder("12");
                p.Static02.set_text("입.출시 동일 출입구 이용");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("66","281","100%","60",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("선택사유 및 이용예정초소");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edtChcRsnUtztnPrnmntChckpntCn.set_taborder("5");
                p.edtChcRsnUtztnPrnmntChckpntCn.set_displaynulltext("내용 입력");
                p.edtChcRsnUtztnPrnmntChckpntCn.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.move("20.00","242","300","120",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","131",null,null);

                p.Static03.set_taborder("13");
                p.Static03.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정\r\n■ 외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
                p.Static03.set_cssclass("sta_WF_Des004");
                p.Static03.set_fittocontents("height");
                p.Static03.move("118","380","100%","60",null,null);

                p.cboCrynChckpntCd.set_taborder("8");
                p.cboCrynChckpntCd.set_flexgrow("1");
                p.cboCrynChckpntCd.set_innerdataset("dsWapWatchBox");
                p.cboCrynChckpntCd.set_codecolumn("cdId");
                p.cboCrynChckpntCd.set_datacolumn("cdNm");
                p.cboCrynChckpntCd.set_text("선택");
                p.cboCrynChckpntCd.set_value("선택");
                p.cboCrynChckpntCd.set_index("-1");
                p.cboCrynChckpntCd.move("75","116","150","40",null,null);

                p.cboCrynChckpntCd1.set_taborder("9");
                p.cboCrynChckpntCd1.set_flexgrow("1");
                p.cboCrynChckpntCd1.set_innerdataset("dsWapWatchBoxDtl");
                p.cboCrynChckpntCd1.set_codecolumn("cdId");
                p.cboCrynChckpntCd1.set_datacolumn("cdNm");
                p.cboCrynChckpntCd1.set_text("선택");
                p.cboCrynChckpntCd1.set_value("");
                p.cboCrynChckpntCd1.set_index("-1");
                p.cboCrynChckpntCd1.move("221","122","150","40",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_verticalgap("4");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.move("0","46","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_02_00.form
            obj = new Layout("mobile","",0,0,this.div00_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_02_00.form
            obj = new Layout("Layout0","",0,0,this.div00_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00.set_taborder("0");
                p.staLabel03_00_00.set_text("전달사항");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.txtCnvyMttrCn.set_taborder("1");
                p.txtCnvyMttrCn.set_displaynulltext("내용 입력");
                p.txtCnvyMttrCn.move("53","302","100%","100",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("20.00","371","100.00%","166",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("583","508","100%","40",null,null);

                p.Panel02_00_00.set_taborder("4");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_verticalgap("8");
                p.Panel02_00_00.move("20.00","0","300","376",null,null);

                p.pan02_00.set_taborder("5");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","20","100%","383",null,null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("투입자재 및 공구류");

                p.div00_01.set_taborder("0");
                p.div00_01.set_text("신청자정보");
                p.div00_01.set_cssclass("div_WF_Bg");
                p.div00_01.set_fittocontents("height");
                p.div00_01.set_formscrollbartype("none none");
                p.div00_01.set_formscrolltype("none");
                p.div00_01.move("1300","0","100.00%","242",null,null);

                p.div00_01_01_00_00_00.set_taborder("1");
                p.div00_01_01_00_00_00.set_text("신청자정보");
                p.div00_01_01_00_00_00.set_cssclass("div_WF_Bg");
                p.div00_01_01_00_00_00.set_fittocontents("height");
                p.div00_01_01_00_00_00.set_formscrollbartype("none none");
                p.div00_01_01_00_00_00.set_formscrolltype("none");
                p.div00_01_01_00_00_00.move("1300","395.611","100.00%","540",null,null);

                p.div00_01_01_00_00_01.set_taborder("2");
                p.div00_01_01_00_00_01.set_text("신청자정보");
                p.div00_01_01_00_00_01.set_cssclass("div_WF_Bg");
                p.div00_01_01_00_00_01.set_formscrollbartype("none none");
                p.div00_01_01_00_00_01.set_formscrolltype("none");
                p.div00_01_01_00_00_01.move("1300","875","100.00%","257",null,null);

                p.div00_02_00.set_taborder("3");
                p.div00_02_00.set_text("신청자정보");
                p.div00_02_00.set_cssclass("div_WF_Bg");
                p.div00_02_00.set_fittocontents("height");
                p.div00_02_00.set_formscrollbartype("none none");
                p.div00_02_00.set_formscrolltype("none");
                p.div00_02_00.move("0","1319","100.00%","461",null,null);

                p.panForm.set_taborder("4");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0","100.00%","2280",null,null);

                p.staSubTitle.set_taborder("5");
                p.staSubTitle.set_text("투입자재 및 공구류 등(위해물품 및 위험물 포함)");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("205","60","100%","50",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.move("1275","60","209","50",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_fittocontents("none");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_minheight("70");
                p.Panel02.set_maxheight("");
                p.Panel02.move("205","60","100.00%","70",null,null);

                p.btnClose.set_taborder("8");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move("1160","10","34","34",null,null);

                p.btnOpen.set_taborder("9");
                p.btnOpen.set_cssclass("btn_WF_ACMinus");
                p.btnOpen.move("1172","-6","34","34",null,null);

                p.staSubTitle00.set_taborder("10");
                p.staSubTitle00.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("570","462","100%","50",null,null);

                p.Panel00_00.set_taborder("11");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1640","462","209","50",null,null);

                p.Panel01_00.set_taborder("12");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("570","462","100.00%","70",null,null);

                p.btnClose00.set_taborder("13");
                p.btnClose00.set_cssclass("btn_WF_ACPlus");
                p.btnClose00.set_visible("false");
                p.btnClose00.move("1202","386","34","34",null,null);

                p.btnOpen00.set_taborder("14");
                p.btnOpen00.set_cssclass("btn_WF_ACMinus");
                p.btnOpen00.move("1142","354","34","34",null,null);

                p.staSubTitle01.set_taborder("15");
                p.staSubTitle01.set_text("보호구역 내 위해물품 사용 관련 준수사항");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("270","1184","100%","50",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("1340","1184","209","50",null,null);

                p.Panel01_01.set_taborder("17");
                p.Panel01_01.set_fittocontents("none");
                p.Panel01_01.set_flexcrossaxisalign("end");
                p.Panel01_01.set_minheight("70");
                p.Panel01_01.set_maxheight("");
                p.Panel01_01.move("270","1184","100.00%","70",null,null);

                p.btnClose01.set_taborder("18");
                p.btnClose01.set_cssclass("btn_WF_ACPlus");
                p.btnClose01.set_visible("false");
                p.btnClose01.move("1156","982","34","34",null,null);

                p.btnOpen01.set_taborder("19");
                p.btnOpen01.set_cssclass("btn_WF_ACMinus");
                p.btnOpen01.move("1142","990","34","34",null,null);

                p.staSubTitle02.set_taborder("20");
                p.staSubTitle02.set_text("반입초소지정");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("300","1520","100%","50",null,null);

                p.Panel01_02.set_taborder("21");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.set_spacing("0px 10px 0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.move("1370","1520","209","50",null,null);

                p.Panel02_00.set_taborder("22");
                p.Panel02_00.set_fittocontents("none");
                p.Panel02_00.set_flexcrossaxisalign("end");
                p.Panel02_00.set_minheight("70");
                p.Panel02_00.set_maxheight("");
                p.Panel02_00.move("300","1520","100.00%","70",null,null);

                p.btnClose02.set_taborder("23");
                p.btnClose02.set_cssclass("btn_WF_ACPlus");
                p.btnClose02.set_visible("false");
                p.btnClose02.move("1160","1370","34","34",null,null);

                p.btnOpen02.set_taborder("24");
                p.btnOpen02.set_cssclass("btn_WF_ACMinus");
                p.btnOpen02.move("1110","1366","34","34",null,null);

                p.div00.set_taborder("25");
                p.div00.set_text("div00");
                p.div00.move("0","1780","100.00%","420",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00_01.form.rdoPutMtrlToolKndCrynYn","value","dsCstJobAprv","putMtrlToolKndCrynYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00_01.form.rdoArcftInsdCrynPhbtCmdtyDocReadYn","value","dsCstJobAprv","arcftInsdCrynPhbtCmdtyDocReadYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00_01_01_00_00_01.form.rdoDgadsCmdtyUseCmpanAgreYn","value","dsCstJobAprv","dgadsCmdtyUseCmpanAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00_02_00.form.cboCrynChckpntCd","value","dsCstJobAprv","crynChckpntCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00_02_00.form.cboCrynChckpntCd1","value","dsCstJobAprv","chcRsnUtztnPrnmntChckpntCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00_02_00.form.edtChcRsnUtztnPrnmntChckpntCn","value","dsCstJobAprv","chcRsnUtztnPrnmntChckpntCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST013M05.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST013M05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj);
        	this.dsMvmnRgnMst		= this.lookup("dsMvmnRgnMst");		//이동지역 마스터
        	this.dsCnvyMttrCn 		= this.lookup("dsCnvyMttrCn");		//전달의견
        	this.dsCstJobAprv		= this.lookup("dsCstJobAprv");

        	this.dsWapWatchBox 		= this.lookup("dsWapWatchBox");		//반입초소
        	this.dsWapWatchBoxDtl 	= this.lookup("dsWapWatchBoxDtl");	//반입초소
        	this.div00_02_00.form.cboCrynChckpntCd1.visible = false;
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
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnInit
         * @description : 초기화
         ***************************************************************************/
        this.fnInit = function()
        {



        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "search": //조회

        		break;

        		default :
        		break;
        	}

        };

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetComp = function()
        {
        	var vPutMtrlToolKndCrynYn = this.dsCstJobAprv.getColumn(0, "putMtrlToolKndCrynYn");		//투입자재 및 공구류 반입여부
        	var vLbsvcPbcprtPicExnYn  = this.dsMvmnRgnMst.getColumn(0, "lbsvcPbcprtPicExnYn");		//공항공사 담당자(감독자) 유무

        	if (vPutMtrlToolKndCrynYn == "Y") {

        		this.div00_01.form.pan00_00.visible = true;
        		this.Panel01_00.visible = true;
        		this.div00_01_01_00_00_00.visible = true;
        		this.Panel01_01.visible = true;
        		this.div00_01_01_00_00_01.visible = true;
        		this.Panel02_00.visible = true;
        		this.div00_02_00.visible = true;

        		if (vLbsvcPbcprtPicExnYn != "Y") {
        			this.parent.parent.divBtn.form.CTL00333.visible = true;			//신청-->6115.보안경비팀접수대기
        			this.parent.parent.divBtn.form.CTL00794.visible = false;		//신청-->6117.이동지역접수대기

        			this.parent.parent.divBtn.form.CTL00532.visible = false;		//신청-->6114.용역담당부서확인
        		}
        		this.resetScroll();

        	} else {

        		this.div00_01.form.pan00_00.visible = false;
        		this.Panel01_00.visible = false;
        		this.div00_01_01_00_00_00.visible = false;
        		this.Panel01_01.visible = false;
        		this.div00_01_01_00_00_01.visible = false;
        		this.Panel02_00.visible = false;
        		this.div00_02_00.visible = false;

        		if (vLbsvcPbcprtPicExnYn != "Y") {
        			this.parent.parent.divBtn.form.CTL00333.visible = false;		//신청-->6115.보안경비팀접수대기
        			this.parent.parent.divBtn.form.CTL00794.visible = true;			//신청-->6117.이동지역접수대기

        			this.parent.parent.divBtn.form.CTL00532.visible = false;		//신청-->6114.용역담당부서확인
        		}
        		this.resetScroll();
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnFold1_onclick
         * @description : 작업방법 안내 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01.visible = true;
        	} else {
        		this.div00_01.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_01_00_00_00.visible = true;
        	} else {
        		this.div00_01_01_00_00_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold3_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_01_00_00_01.visible = true;
        	} else {
        		this.div00_01_01_00_00_01.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold4_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_02_00.visible = true;
        	} else {
        		this.div00_02_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        //반입초소 변경시
        this.cboCrynChckpntCd_onitemchanged = function(obj,e)
        {
        	this.dsWapWatchBoxDtl.filter("");
        	this.dsWapWatchBoxDtl.filter("uprCd == '" + obj.value + "' ");
        	if (this.dsWapWatchBoxDtl.getRowCount() == 0) {
        		this.div00_02_00.form.cboCrynChckpntCd1.visible = false;
        	} else {
        		this.div00_02_00.form.cboCrynChckpntCd1.visible = true;
        	}
        };

        //투입자재 및 공구류 반입여부 변경시
        this.rdoPutMtrlToolKndCrynYn_onitemchanged = function(obj,e)
        {
        	this.fnSetComp();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div00_01.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.div00_01.form.rdoPutMtrlToolKndCrynYn.addEventHandler("onitemchanged",this.rdoPutMtrlToolKndCrynYn_onitemchanged,this);
            this.div00_01_01_00_00_00.form.staLabel00.addEventHandler("onclick",this.divForm_div00_01_01_00_00_00_staLabel00_onclick,this);
            this.div00_02_00.form.cboCrynChckpntCd.addEventHandler("onitemchanged",this.cboCrynChckpntCd_onitemchanged,this);
            this.btnOpen.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.btnOpen00.addEventHandler("onclick",this.btnFold2_onclick,this);
            this.btnOpen01.addEventHandler("onclick",this.btnFold3_onclick,this);
            this.btnOpen02.addEventHandler("onclick",this.btnFold4_onclick,this);
        };
        this.loadIncludeScript("CST013M05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
