(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S03");
            this.set_titletext("담당자정보(시설물설치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","98.44%","4190",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panMvnPic\"/><PanelItem id=\"PanelItem02\" componentid=\"divMvnPic\"/><PanelItem id=\"PanelItem03\" componentid=\"panBstrPic\"/><PanelItem id=\"PanelItem04\" componentid=\"divBstrPic\"/><PanelItem id=\"PanelItem05\" componentid=\"panGrndsAgt\"/><PanelItem id=\"PanelItem06\" componentid=\"divGrndsAgt\"/><PanelItem id=\"PanelItem07\" componentid=\"panSafeMngr\"/><PanelItem id=\"PanelItem08\" componentid=\"divSafeMngr\"/><PanelItem id=\"PanelItem09\" componentid=\"panPrvcWtcs\"/><PanelItem id=\"PanelItem10\" componentid=\"divPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrndsAgt","1540","2364","100.00%","360",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","150.00","2360","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("0");
            obj.set_text("■ 현장대리인은 “상기＂분야별 담당자 중 1인으로 선정합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Static("staLabel00_04","0.00","0","100%","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("1");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_03","20.00","0","300","86",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoGrndsAgt\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_01","10.00","10","100%","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("4");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Radio("rdoGrndsAgtSmFldChcCd","650","2426","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            var divGrndsAgt_form_rdoGrndsAgtSmFldChcCd_innerdataset = new nexacro.NormalDataset("divGrndsAgt_form_rdoGrndsAgtSmFldChcCd_innerdataset", obj);
            divGrndsAgt_form_rdoGrndsAgtSmFldChcCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y06110</Col><Col id=\"datacolumn\">건축</Col></Row><Row><Col id=\"codecolumn\">Y06120</Col><Col id=\"datacolumn\">기계</Col></Row><Row><Col id=\"codecolumn\">Y06140</Col><Col id=\"datacolumn\">전기</Col></Row><Row><Col id=\"codecolumn\">Y06130</Col><Col id=\"datacolumn\">통신</Col></Row><Row><Col id=\"codecolumn\">Y06180</Col><Col id=\"datacolumn\">소방</Col></Row></Rows>");
            obj.set_innerdataset(divGrndsAgt_form_rdoGrndsAgtSmFldChcCd_innerdataset);
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("panGrndsAgtSmFldChc","520.00","0","300","86",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_02\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("pan00_02","0","40","100%","97",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"panGrndsAgtSmFldChc\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_03","0.00","0","100%","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("9");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Edit("edtGrndsAgtCoNm","0.00","46","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_03","30.00","10","300","86",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGrndsAgtCoNm\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_02","10.00","10","100%","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Edit("edtGrndsAgtFlnm","10.00","56","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_02","530.00","10","300","86",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtGrndsAgtFlnm\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("pan02_02","0","137","100%","96",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_02\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_01","0.00","0","490","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("16");
            obj.set_text("현장대리인의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_01","226.00","0","138","34",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_01","490.00","0","490","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_01\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_02","0.00","0","100%","46",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("19");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_01\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Grid("grdGrndsAgtBstrPicSmYn","0.00","50","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:D110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !D110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !D110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !D110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_01","20.00","10","980","111",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"grdGrndsAgtBstrPicSmYn\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("panGrndsAgtPrvcUtztnWtcs","1400","1546","100%","120",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("22");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_01\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","10.00","56","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("6");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoGrndsAgtSmFldChcCd\"/></Contents>");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Radio("rdoGrndsAgt","0.00","46","100%","40",null,null,null,null,null,null,this.divGrndsAgt.form);
            obj.set_taborder("2");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divGrndsAgt_form_rdoGrndsAgt_innerdataset = new nexacro.NormalDataset("divGrndsAgt_form_rdoGrndsAgt_innerdataset", obj);
            divGrndsAgt_form_rdoGrndsAgt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divGrndsAgt_form_rdoGrndsAgt_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divGrndsAgt.addChild(obj.name, obj);

            obj = new Button("btnMvnPic","109","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1126","0","153","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnMvnPic\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","-8","430","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("분야별 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","1101","430","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnBstrPic\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnBstrPic","1195","435","34","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","-5","2210","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("현장대리인(시공사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","1125","2210","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrndsAgt\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrndsAgt","1235","2233","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrndsAgt","1735","2230","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("14");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-75","2613","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("안전관리자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","1071","2613","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSafeMngr\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSafeMngr","2570","2626","34","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panSafeMngr","3050","462","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("18");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","1866","3263","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","3000","3263","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrvcWtcs","3030","3280","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrvcWtcs","3063","1341","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("22");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divSafeMngr","0","2627","99.98%","664",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div02");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.00","0","100.00%","57",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("0");
            obj.set_text("■ 입주자 시설공사 중 발생하는 안전사고에 대한 모든 관리 책임은 입주자에게 있으며,  입주자는 공사 현장 안전을 확보하기  위하여 최선의 노력을 다하여야 합니다.\r\n   다만 전기공사업법에 따라 전기분야 면허는 금액 기준에 상관없이 관련 법에 따라 확인합니다.\r\n");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des004");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","47.58%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("1");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Radio("rdoSafeMngrDay","0","46","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSafeMngr_form_rdoSafeMngrDay_innerdataset = new nexacro.NormalDataset("divSafeMngr_form_rdoSafeMngrDay_innerdataset", obj);
            divSafeMngr_form_rdoSafeMngrDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divSafeMngr_form_rdoSafeMngrDay_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20.00","0","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSafeMngrDay\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("4");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Radio("rdoDaySafeMngrSmFldChcCd","634","103","571","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSafeMngr_form_rdoDaySafeMngrSmFldChcCd_innerdataset = new nexacro.NormalDataset("divSafeMngr_form_rdoDaySafeMngrSmFldChcCd_innerdataset", obj);
            divSafeMngr_form_rdoDaySafeMngrSmFldChcCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y06110</Col><Col id=\"datacolumn\">건축</Col></Row><Row><Col id=\"codecolumn\">Y06120</Col><Col id=\"datacolumn\">기계</Col></Row><Row><Col id=\"codecolumn\">Y06140</Col><Col id=\"datacolumn\">전기</Col></Row><Row><Col id=\"codecolumn\">Y06130</Col><Col id=\"datacolumn\">통신</Col></Row><Row><Col id=\"codecolumn\">Y06180</Col><Col id=\"datacolumn\">소방</Col></Row></Rows>");
            obj.set_innerdataset(divSafeMngr_form_rdoDaySafeMngrSmFldChcCd_innerdataset);
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","10.00","56","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoDaySafeMngrSmFldChcCd\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrDaySmFldChc","649.00","0","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0.00","0","100.00%","97",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panSafeMngrDaySmFldChc\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","0.00","0","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("9");
            obj.set_text("안전관리자(주간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Edit("edtSafeMngrDayCoNm","0.00","46","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_02","30.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSafeMngrDayCoNm\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","10.00","10","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("12");
            obj.set_text("안전관리자(주간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Edit("edtSafeMngrDayFlnm","10.00","56","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_01","530.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSafeMngrDayFlnm\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrDayNmInfo","1337","1754","100.00%","97",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_01\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00","0.00","0","490","46",null,null,null,null,"46",null,this.divSafeMngr.form);
            obj.set_taborder("16");
            obj.set_text("안전관리자(주간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("width");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00","490.00","0","490","46",null,null,null,null,"46",null,this.divSafeMngr.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_01","0.00","0","100%","46",null,null,null,null,"46",null,this.divSafeMngr.form);
            obj.set_taborder("19");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Grid("grdSafeMngrDayBstrPicSmYn","0.00","50","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("20");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:E110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !E110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !E110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !E110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSafeMngrDayBstrPicSmYn\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrDayPrvcUtztnWtcs","1510","1680","100%","111",null,null,null,null,"111",null,this.divSafeMngr.form);
            obj.set_taborder("22");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("23");
            obj.set_text("분야별담당자와 동일여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Radio("rdoSafeMngrNght","0.00","46","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("24");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSafeMngr_form_rdoSafeMngrNght_innerdataset = new nexacro.NormalDataset("divSafeMngr_form_rdoSafeMngrNght_innerdataset", obj);
            divSafeMngr_form_rdoSafeMngrNght_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">분야별담당자와동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">분야별담당자와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divSafeMngr_form_rdoSafeMngrNght_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01_00","30.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoSafeMngrNght\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("26");
            obj.set_text("동일한분야선택");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Radio("rdoNghtSafeMngrSmFldChcCd","1515.00","3306","571","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            var divSafeMngr_form_rdoNghtSafeMngrSmFldChcCd_innerdataset = new nexacro.NormalDataset("divSafeMngr_form_rdoNghtSafeMngrSmFldChcCd_innerdataset", obj);
            divSafeMngr_form_rdoNghtSafeMngrSmFldChcCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y06110</Col><Col id=\"datacolumn\">건축</Col></Row><Row><Col id=\"codecolumn\">Y06120</Col><Col id=\"datacolumn\">기계</Col></Row><Row><Col id=\"codecolumn\">Y06140</Col><Col id=\"datacolumn\">전기</Col></Row><Row><Col id=\"codecolumn\">Y06130</Col><Col id=\"datacolumn\">통신</Col></Row><Row><Col id=\"codecolumn\">Y06180</Col><Col id=\"datacolumn\">소방</Col></Row></Rows>");
            obj.set_innerdataset(divSafeMngr_form_rdoNghtSafeMngrSmFldChcCd_innerdataset);
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","10.00","56","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("28");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoNghtSafeMngrSmFldChcCd\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtSmFldChc","530.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","1569","2089","100%","89",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSafeMngrNghtSmFldChc\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("31");
            obj.set_text("안전관리자(야간) 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Edit("edtSafeMngrNghtCoNm","0.00","46","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("32");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_01","30.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSafeMngrNghtCoNm\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","10.00","10","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("34");
            obj.set_text("안전관리자(야간) 성명");
            obj.set_cssclass("sta_WF_Label");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Edit("edtSafeMngrNghtFlnm","10.00","56","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("35");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_01","530.00","10","300","86",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("36");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSafeMngrNghtFlnm\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("pan02_00_01","1386","2090","100.00%","97",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("37");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_01\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("38");
            obj.set_text("안전관리자(야간)의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_fittocontents("width");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Button("Button03_01_00_00_00_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("39");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("40");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_01_00_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("41");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Grid("grdSafeMngrNghtBstrPicSmYn","0.00","50","100%","40",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("42");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:E120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !E120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !E120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !E120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSafeMngrNghtBstrPicSmYn\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs","1350","2009","100%","111",null,null,null,null,null,null,this.divSafeMngr.form);
            obj.set_taborder("44");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divSafeMngr.addChild(obj.name, obj);

            obj = new Div("divPrvcWtcs","0","3376","99.82%","807",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","71","3301","100.00%","47",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("0");
            obj.set_text("■ 입주자서비스포털은 배정 받은 공간에 대한 시설물 설치(변경) 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집 이용하고자 합니다.\r\n내용을 자세히 읽은신 후 동의여부를 결정하야 주시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static01","20","3286","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집 이용내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","44","100.00%","220",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"414\"/><Column size=\"414\"/><Column size=\"414\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"176\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"1\" text=\"수집목적\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"2\" cssclass=\"CellEnd\" text=\"보유기간\" border=\"1px solid, 0px none\"/><Cell row=\"1\" color=\"blue\" text=\"[필수] 입주담당자 회사명, 입주담당자 성명&#13;&#10;[선택] 현장대리인 회사명, 현장대리인 성명,&#13;&#10;        건축분야 회사명, 건축담당자,&#13;&#10;        기계분야 회사명, 기계담당자,&#13;&#10;        전기분야 회사명, 전기담당자,&#13;&#10;        통신분야 회사명, 통신담당자,&#13;&#10;        소방분야 회사명, 소방담당자,&#13;&#10;        안전관리자(주간) 회사명, 안전관리자(주간)성명,&#13;&#10;        안전관리자(야간) 회사명, 안전관리자(야간)성명\" background=\"#ffffff\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" background=\"#ffffff\" text=\"배정 받은 공간에 대한 시설물 설치(변경)관련 서비스 신청,&#13;&#10;민원처리, 사후관리\"/><Cell row=\"1\" col=\"2\" color=\"blue\" background=\"#ffffff\" text=\"계약종료 후 3년, 회원탈퇴 시까지\" font=\"bold 16px/normal &quot;pretendard&quot;\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel07","20","3346","1100","414",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static04\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","3336","100.00%","425",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("6");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static05","137","3798","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("7");
            obj.set_text("개인정보(필수) 수집이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","87","3847","46","40",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("8");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static06","45","3881","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("9");
            obj.set_text("신청자의 개인정보수집 및 이용동의 여부(필수항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel10","20","3771","300","124",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","3761","100.00%","150",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("11");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static07","93","3950","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("12");
            obj.set_text("개인정보(선택) 수집이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctChcAgreYn","20.00","3878","470","40",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_fittocontents("width");
            var divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset = new nexacro.NormalDataset("divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset", obj);
            divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않으셔도 신청이 가능합니다.)</Col></Row></Rows>");
            obj.set_innerdataset(divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset);
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static08","148","4030","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("14");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static09","48","4062","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("15");
            obj.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다,");
            obj.set_cssclass("sta_WF_Des2");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel12","20","3921","300","158",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static08\"/><PanelItem id=\"PanelItem03\" componentid=\"Static09\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","3911","100.00%","179",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static04","73","3748","100%","60",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("4");
            obj.set_text("필수 항목 수집•이용 동의를 거부하실 경우 시설물 설치(변경) 신청을 하실수 없으시나, 선택 항목 수집 이용•동의를 거부하셔도 시설물 설치(변경) 신청에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static03","113","3670","100%","60",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("3");
            obj.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다.\r\n그러나 필수 항목 수집•이용 동의를 거부할 경우 시설물 설치(변경) 신청을 할 수 없습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_color("red");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입주자 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("panMvnPic","3330","10","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divMvnPic","1670","-10","100.00%","342",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","300","86",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoTatPicSmYn\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("pan00","1335","0","100.00%","96",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100%","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Edit("edtMvnPicCoNm","0.00","46","100%","40",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","300","86",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMvnPicCoNm\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Edit("edtMvnPicNm","10.00","56","100%","40",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","650.00","0","300","86",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMvnPicNm\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("pan02","1335","0","100.00%","96",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("11");
            obj.set_text("입주자담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            obj.set_fittocontents("width");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Button("Button00_00","356.00","0","138","34",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("12");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","620.00","0","490","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("14");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Grid("grdTatPicSmYn","20.00","60","100%","40",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !B110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !B110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !B110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("panTatPicPrvcClctUtztnWtcsDiff","1335","0","100.00%","111",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("16");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"grdTatPicSmYn\"/></Contents>");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Radio("rdoTatPicSmYn","20","96","440","40",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("0");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divMvnPic_form_rdoTatPicSmYn_innerdataset = new nexacro.NormalDataset("divMvnPic_form_rdoTatPicSmYn_innerdataset", obj);
            divMvnPic_form_rdoTatPicSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divMvnPic_form_rdoTatPicSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","96.88%","46",null,null,null,null,null,null,this.divMvnPic.form);
            obj.set_taborder("1");
            obj.set_text("입주자담당자의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divMvnPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPic","1635","292","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divBstrPic","1640","451","100.00%","1647",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","110.00","580","100%","64",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("0");
            obj.set_text("■ 건설산업기본법 시행령 제8조(경미한 건설공사등)에 따라 종합공사 5천만원 미만, 전문공사 1.5천만원 미만의 경우 건설업면허 확인이 불필요하지만 그 외 경우 시공사 면허 보유 여부를 확인합니다\r\n다만 전기공사업법에 따라 전기분야 면허는 금액 기준에 상관없이 관련 법에 따라 확인합니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("1");
            obj.set_text("건축분야 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","0.00","46","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","0","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("4");
            obj.set_text("건축담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","10.00","56","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","520.00","0","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicArchFldNmInfo","0","0","100%","91",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("8");
            obj.set_text("건축담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Button("Button03","226.00","0","138","34",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("9");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("11");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgArchPicPrvcWcts","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgArchPicPrvcWcts\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicArchFldPrvcUtztnWtcs","0","91","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("14");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","10.00","10","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("15");
            obj.set_text("건축분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","500.00","10","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("17");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgArchFldCoLcns","10.00","60","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("18");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgArchFldCoLcns\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicArchFldLcns","0","205","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("21");
            obj.set_text("기계분야 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","30.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("24");
            obj.set_text("기계담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00","530.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicMchnFldNmInfo","0","320","100%","91",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("28");
            obj.set_text("기계담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("29");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("30");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("31");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgMchnPicPrvcWcts","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("32");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgMchnPicPrvcWcts\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicMchnFldPrvcUtztnWtcs","0","411","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("34");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01","10.00","10","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("35");
            obj.set_text("기계분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","500.00","10","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("36");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("37");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgMchnFldCoLcns","10.00","60","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C140\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C140 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C140 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C140 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","40.00","30","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgMchnFldCoLcns\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicMchnFldLcns","0","526","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("40");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("41");
            obj.set_text("전기분야 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("42");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","30.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("44");
            obj.set_text("전기담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("45");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00","530.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicElctyFldNmInfo","0","640","100%","91",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("48");
            obj.set_text("전기담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("49");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("50");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("51");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgElctyPicPrvcWcts","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("52");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C150\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C150 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C150 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C150 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgElctyPicPrvcWcts\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicElctyFldPrvcUtztnWtcs","0","731","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("54");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("55");
            obj.set_text("전기분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("56");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("57");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgElctyFldCoLcns","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("58");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C160\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C160 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C160 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C160 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00","20.00","10","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgElctyFldCoLcns\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicElctyFldLcns","0","846","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("60");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("61");
            obj.set_text("통신분야 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_00_00","0.00","46","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("62");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_00","20.00","0","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("63");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("64");
            obj.set_text("통신담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_00_00","10.00","56","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("65");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_00_00","520.00","0","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicCmnctFldNmInfo","0","960","100%","91",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("67");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("68");
            obj.set_text("통신담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("69");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("70");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("71");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgCmnctPicPrvcWcts","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("72");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C170\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C170 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C170 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C170 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgCmnctPicPrvcWcts\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicCmnctFldPrvcUtztnWtcs","0","1052","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("74");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("75");
            obj.set_text("통신분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("76");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("77");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgCmnctFldCoLcns","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("78");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C180\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C180 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C180 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C180 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgCmnctFldCoLcns\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicCmnctFldLcns","0","1166","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("80");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("81");
            obj.set_text("소방분야 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00_01","0.00","46","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("82");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00_01","30.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("83");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00_00_01\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_00_01","10.00","10","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("84");
            obj.set_text("소방담당자");
            obj.set_cssclass("sta_WF_Label");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00_00_01","10.00","56","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("85");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00_00_01","530.00","10","300","86",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00_00_01\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicFiftFldNmInfo","0","1280","100%","91",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("87");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00_00_01\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("88");
            obj.set_text("소방담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00_00","226.00","0","138","34",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("89");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("90");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button03_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("91");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgFiftPicPrvcWcts","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("92");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C190\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C190 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C190 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C190 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("93");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgFiftPicPrvcWcts\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicFiftFldPrvcUtztnWtcs","0","1372","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("94");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("95");
            obj.set_text("소방분야 회사 면허");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("96");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("97");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Grid("grdFcltyInstlChgFiftFldCoLcns","0.00","50","100%","40",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("98");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C200\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !C200 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C200 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !C200 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("99");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFcltyInstlChgFiftFldCoLcns\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);

            obj = new Panel("panBstrPicFiftFldLcns","0","1486","100%","114",null,null,null,null,null,null,this.divBstrPic.form);
            obj.set_taborder("100");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00\"/></Contents>");
            this.divBstrPic.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrndsAgt.form
            obj = new Layout("default","",0,0,this.divGrndsAgt.form,function(p){});
            obj.set_type("vertical");
            this.divGrndsAgt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSafeMngr.form
            obj = new Layout("default","",0,0,this.divSafeMngr.form,function(p){});
            obj.set_type("vertical");
            this.divSafeMngr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrvcWtcs.form
            obj = new Layout("default","",0,0,this.divPrvcWtcs.form,function(p){});
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMvnPic.form
            obj = new Layout("default","",0,0,this.divMvnPic.form,function(p){});
            obj.set_type("vertical");
            this.divMvnPic.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBstrPic.form
            obj = new Layout("default","",0,0,this.divBstrPic.form,function(p){});
            obj.set_type("vertical");
            this.divBstrPic.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,900,this,function(p){});
            obj.set_type("horizontal");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMvnPic.form.rdoTatPicSmYn","value","dsInstlChg","tatPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMvnPic.form.edtMvnPicCoNm","value","dsInstlChg","mvnPicCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divMvnPic.form.edtMvnPicNm","value","dsInstlChg","mvnPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBstrPic.form.edt00_02_00","value","dsInstlChg","archFldCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBstrPic.form.edt00_03_01_00","value","dsInstlChg","archFldPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBstrPic.form.edt00_02_00_00","value","dsInstlChg","mchnFldCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBstrPic.form.edt00_03_01_00_00","value","dsInstlChg","mchnFldPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBstrPic.form.edt00_02_00_00_00","value","dsInstlChg","elctyFldCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBstrPic.form.edt00_03_01_00_00_00","value","dsInstlChg","elctyFldPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBstrPic.form.edt00_02_00_00_00_00","value","dsInstlChg","cmnctFldCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBstrPic.form.edt00_03_01_00_00_00_00","value","dsInstlChg","cmnctFldPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBstrPic.form.edt00_02_00_00_01","value","dsInstlChg","fiftFldCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divBstrPic.form.edt00_03_01_00_00_01","value","dsInstlChg","fiftFldPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divGrndsAgt.form.rdoGrndsAgt","value","dsInstlChg","grndsAgtBstrPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divGrndsAgt.form.rdoGrndsAgtSmFldChcCd","value","dsInstlChg","grndsAgtSmFldChcCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divGrndsAgt.form.edtGrndsAgtFlnm","value","dsInstlChg","grndsAgtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divGrndsAgt.form.edtGrndsAgtCoNm","value","dsInstlChg","grndsAgtCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divMvnPic.form.staLabel00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divMvnPic.form.staLabel03_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divMvnPic.form.staLabel03_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divMvnPic.form.rdoTatPicSmYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divMvnPic.form.edtMvnPicCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divMvnPic.form.edtMvnPicNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divMvnPic.form.Button00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divBstrPic.form.Button03","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divBstrPic.form.Button03_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divBstrPic.form.Button03_00_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divBstrPic.form.Button03_00_00_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divBstrPic.form.Button03_00_00_00_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divGrndsAgt.form.Button03_01_00_00_00_01","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divGrndsAgt.form.rdoGrndsAgt","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divGrndsAgt.form.rdoGrndsAgtSmFldChcCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divGrndsAgt.form.edtGrndsAgtCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divGrndsAgt.form.edtGrndsAgtFlnm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divBstrPic.form.edt00_02_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divBstrPic.form.edt00_03_01_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divBstrPic.form.edt00_02_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divBstrPic.form.edt00_03_01_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divBstrPic.form.edt00_02_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divBstrPic.form.edt00_03_01_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divBstrPic.form.edt00_02_00_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divBstrPic.form.edt00_03_01_00_00_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divBstrPic.form.edt00_02_00_00_01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divBstrPic.form.edt00_03_01_00_00_01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSafeMngr.form.rdoDaySafeMngrSmFldChcCd","value","dsInstlChg","daySafeMngrSmFldChcCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSafeMngr.form.edtSafeMngrDayFlnm","value","dsInstlChg","safeMngrDayNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSafeMngr.form.rdoSafeMngrNght","value","dsInstlChg","safeMngrNghtBstrPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd","value","dsInstlChg","nghtSafeMngrSmFldChcCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSafeMngr.form.edtSafeMngrNghtFlnm","value","dsInstlChg","safeMngrNghtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSafeMngr.form.edtSafeMngrNghtCoNm","value","dsInstlChg","safeMngrNghtCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSafeMngr.form.rdoSafeMngrDay","value","dsInstlChg","safeMngrDayBstrPicSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSafeMngr.form.Button03_01_00_00_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSafeMngr.form.Button03_01_00_00_00_00_00","visible","dsAtrb","vsAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divSafeMngr.form.edtSafeMngrDayCoNm","value","dsInstlChg","safeMngrDayCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divSafeMngr.form.rdoSafeMngrDay","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divSafeMngr.form.edtSafeMngrDayCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divSafeMngr.form.edtSafeMngrDayFlnm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divSafeMngr.form.rdoSafeMngrNght","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divSafeMngr.form.edtSafeMngrNghtCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divSafeMngr.form.edtSafeMngrNghtFlnm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divSafeMngr.form.chkPrvcClctEsntlAgreYn","value","dsInstlChg","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divSafeMngr.form.rdoPrvcClctChcAgreYn","value","dsInstlChg","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divSafeMngr.form.Static05","cssclass","dsAtrb","ccTAS00233");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divSafeMngr.form.Static07","cssclass","dsAtrb","ccTAS00233");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divSafeMngr.form.chkPrvcClctEsntlAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divSafeMngr.form.rdoPrvcClctChcAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","value","dsInstlChg","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divPrvcWtcs.form.rdoPrvcClctChcAgreYn","value","dsInstlChg","prvcClctChcAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divPrvcWtcs.form.rdoPrvcClctChcAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSafeMngr.form.rdoDaySafeMngrSmFldChcCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divPrvcWtcs.form.Static05","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divPrvcWtcs.form.Static07","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divMvnPic.form.staLabel00_02","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002S03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002S03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/25
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/25			김주화					최초생성
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
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");
        	this.gfnFormOnload(obj);        // 필수함수

            // Master Dataset
            this.dsMst = this.lookup("dsMst");
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 시설물 설치(변경) Dataset
            this.dsInstlChg = this.lookup("dsInstlChg");
        	this.dsInstlChg.addEventHandler("cancolumnchange", this.dsInstlChg_cancolumnchange, this);
        	this.dsInstlChg.addEventHandler("onvaluechanged", this.dsInstlChg_onvaluechanged, this);
        	// 첨부파일 Dataset
            this.dsAtfl = this.lookup("dsAtfl");
        	// 첨부파일 표출용 Dataset
            this.dsFile = this.lookup("dsFile");
        	// 속성 Dataset
            this.dsAtrb = this.lookup("dsAtrb");
        	this.dsAtrb.addEventHandler("onvaluechanged", this.dsAtrb_onvaluechanged, this);
        	// 단계별 속성 값 조회
        	this.cfnGetAtrb = this.lookupFunc("cfnGetAtrb");
        	// 업무처리흐름 정보 유무 확인
        	this.cfnIsExstTaskPrcsFlw = this.lookupFunc("cfnIsExstTaskPrcsFlw");
        	// Raonk Upload
        	this.RaonkUpload = this.lookup("RaonkUpload");
        	// 첨부파일 Dataset
            this.dsAtfl = this.lookup("dsAtfl");
        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");

        	trace(this.name + "CST002S03 : " + this.dsMst.getRowCount());
        	trace(this.name + "CST002S03 : " + this.dsFile.getRowCount());
        	trace(this.name + "CST002S03 : " + this.dsAtfl.getRowCount());
        };

        this.dsMst_onvaluechanged = function(obj,e)
        {
        	// 분야별 담당자
        	if(this.gfnIsNull(e.columnid) || e.columnid == "cstrnJobFldCd") {         // 공사작업분야코드
        	    var cstrnJobFldCd = this.dsMst.getColumn(0, "cstrnJobFldCd") || "";   // 공사작업분야코드
        		this.divBstrPic.visible = !this.gfnIsNull(cstrnJobFldCd);             // 분야별 담당자
        		this.panBstrPic.visible = this.divBstrPic.visible;                    // 분야별 담당자 타이틀

                // 분야별 담당자 첨부파일 삭제
        		// ---------------------------
        		if(this.RaonkUpload.cfnDelAtfl && this.cfnSetAtflInfo) {
        			// 건축분야
        			if(cstrnJobFldCd.indexOf("Y06110") == -1) {
        				this.dsInstlChg.setColumn(0, "archFldCoNm" , "");  // 건축분야 회사명 초기화
        				this.dsInstlChg.setColumn(0, "archFldPicNm", "");  // 건축담당자 초기화
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgArchPicPrvcWcts).cfnDelAtfl();  // 건축담당자의 개인정보수집 및 이용동의서
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgArchFldCoLcns  ).cfnDelAtfl();  // 건축분야 회사 면허
        			}

        			// 건축분야
        			if(cstrnJobFldCd.indexOf("Y06120") == -1) {
        				this.dsInstlChg.setColumn(0, "mchnFldCoNm" , "");  // 기계분야 회사명 초기화
        				this.dsInstlChg.setColumn(0, "mchnFldPicNm", "");  // 기계담당자 초기화
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgMchnPicPrvcWcts).cfnDelAtfl();  // 기계담당자의 개인정보수집 및 이용동의서
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgMchnFldCoLcns  ).cfnDelAtfl();  // 기계분야 회사 면허
        			}

        			// 기계분야
        			if(cstrnJobFldCd.indexOf("Y06140") == -1) {
        				this.dsInstlChg.setColumn(0, "elctyFldCoNm" , "");  // 전기분야 회사명 초기화
        				this.dsInstlChg.setColumn(0, "elctyFldPicNm", "");  // 전기담당자 초기화
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgElctyPicPrvcWcts).cfnDelAtfl();  // 전기담당자의 개인정보수집 및 이용동의서
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgElctyFldCoLcns  ).cfnDelAtfl();  // 전기분야 회사 면허
        			}

        			// 통신분야
        			if(cstrnJobFldCd.indexOf("Y06130") == -1) {
        				this.dsInstlChg.setColumn(0, "cmnctFldCoNm" , "");  // 통신분야 회사명 초기화
        				this.dsInstlChg.setColumn(0, "cmnctFldPicNm", "");  // 통신담당자 초기화
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgCmnctPicPrvcWcts).cfnDelAtfl();  // 통신담당자의 개인정보수집 및 이용동의서
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgCmnctFldCoLcns  ).cfnDelAtfl();  // 통신분야 회사 면허
        			}

        			// 소방분야
        			if(cstrnJobFldCd.indexOf("Y06180") == -1) {
        				this.dsInstlChg.setColumn(0, "fiftFldCoNm" , "");  // 소방분야 회사명 초기화
        				this.dsInstlChg.setColumn(0, "fiftFldPicNm", "");  // 소방담당자 초기화
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgFiftPicPrvcWcts).cfnDelAtfl();  // 소방담당자의 개인정보수집 및 이용동의서
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divBstrPic.form.grdFcltyInstlChgFiftFldCoLcns  ).cfnDelAtfl();  // 소방분야 회사 면허
        			}
        		}

        		// 분야별 담당자
        		if(this.divBstrPic.visible) {
        			// 건축
        			this.divBstrPic.form.panBstrPicArchFldNmInfo.visible         = cstrnJobFldCd.indexOf("Y06110") != -1;  // 건축분야 회사,담당자명
        			this.divBstrPic.form.panBstrPicArchFldPrvcUtztnWtcs.visible  = cstrnJobFldCd.indexOf("Y06110") != -1;  // 건축분야 담당자의 개인정보수집 및 이용동의서
        			this.divBstrPic.form.panBstrPicArchFldLcns.visible           = cstrnJobFldCd.indexOf("Y06110") != -1;  // 건축분야 회사 면허
        			// 기계
        			this.divBstrPic.form.panBstrPicMchnFldNmInfo.visible         = cstrnJobFldCd.indexOf("Y06120") != -1;  // 기계분야 회사,담당자명
        			this.divBstrPic.form.panBstrPicMchnFldPrvcUtztnWtcs.visible  = cstrnJobFldCd.indexOf("Y06120") != -1;  // 기계분야 담당자의 개인정보수집 및 이용동의서
        			this.divBstrPic.form.panBstrPicMchnFldLcns.visible           = cstrnJobFldCd.indexOf("Y06120") != -1;  // 기계분야 회사 면허
        			// 전기
        			this.divBstrPic.form.panBstrPicElctyFldNmInfo.visible        = cstrnJobFldCd.indexOf("Y06140") != -1;  // 전기분야 회사,담당자명
        			this.divBstrPic.form.panBstrPicElctyFldPrvcUtztnWtcs.visible = cstrnJobFldCd.indexOf("Y06140") != -1;  // 전기분야 담당자의 개인정보수집 및 이용동의서
        			this.divBstrPic.form.panBstrPicElctyFldLcns.visible          = cstrnJobFldCd.indexOf("Y06140") != -1;  // 전기분야 회사 면허
        			// 통신
        			this.divBstrPic.form.panBstrPicCmnctFldNmInfo.visible        = cstrnJobFldCd.indexOf("Y06130") != -1;  // 통신분야 회사,담당자명
        			this.divBstrPic.form.panBstrPicCmnctFldPrvcUtztnWtcs.visible = cstrnJobFldCd.indexOf("Y06130") != -1;  // 통신분야 담당자의 개인정보수집 및 이용동의서
        			this.divBstrPic.form.panBstrPicCmnctFldLcns.visible          = cstrnJobFldCd.indexOf("Y06130") != -1;  // 통신분야 회사 면허
        			// 소방
        			this.divBstrPic.form.panBstrPicFiftFldNmInfo.visible         = cstrnJobFldCd.indexOf("Y06180") != -1;  // 소방분야 회사,담당자명
        			this.divBstrPic.form.panBstrPicFiftFldPrvcUtztnWtcs.visible  = cstrnJobFldCd.indexOf("Y06180") != -1;  // 소방분야 담당자의 개인정보수집 및 이용동의서
        			this.divBstrPic.form.panBstrPicFiftFldLcns.visible           = cstrnJobFldCd.indexOf("Y06180") != -1;  // 소방분야 회사 면허
        		}
        	}

        	this.resetScroll();
        };

        this.dsInstlChg_cancolumnchange = function(obj,e)
        {
            // 현장대리인(시공사),안전관리자-동일한분야선택
        	if("grndsAgtSmFldChcCd,daySafeMngrSmFldChcCd,nghtSafeMngrSmFldChcCd".indexOf(e.columnid) != -1) {
        		var cstrnJobFldCd = this.dsMst.getColumn(0, "cstrnJobFldCd") || "";
        		return cstrnJobFldCd.indexOf(e.newvalue) != -1;
        	}
        };

        this.dsInstlChg_onvaluechanged = function(obj,e)
        {
        	// 입주자담당자동일여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "tatPicSmYn") {
        	    var tatPicSmYn = this.dsInstlChg.getColumn(0, "tatPicSmYn");                                            // 입주자담당자의 동일여부
        	    var isSm = !this.gfnIsNull(tatPicSmYn) && tatPicSmYn == "1";                                        // "1": 신청자정보와 동일

        		this.divMvnPic.form.edtMvnPicCoNm.readonly =  this.divMvnPic.form.rdoTatPicSmYn.readonly ? true : isSm;  // 회사명
        		this.divMvnPic.form.edtMvnPicNm.readonly   = this.divMvnPic.form.rdoTatPicSmYn.readonly  ? true : isSm;  // 입주담당자명
                this.divMvnPic.form.panTatPicPrvcClctUtztnWtcsDiff.visible = !this.gfnIsNull(tatPicSmYn) && !isSm;  // 입주자담당자의 개인정보수집 및 이용동의서

        		if(!this.gfnIsNull(e.columnid)) {
        			this.dsInstlChg.setColumn(0, "mvnPicCoNm"         , isSm ? this.objApp.gdsUser.getColumn(0, "coNm"  ) : "");  // 회사명
        			this.dsInstlChg.setColumn(0, "mvnPicNm"           , isSm ? this.objApp.gdsUser.getColumn(0, "userNm") : "");  // 입주담당자명
        			this.dsInstlChg.setColumn(0, "prvcClctEsntlAgreYn", isSm ? this.objApp.gdsUser.getColumn(0, "prvcClctEsntlAgreYn") : null);  // 개인정보(필수) 수집이용 동의 여부
        			this.dsInstlChg.setColumn(0, "prvcClctChcAgreYn"  , isSm ? this.objApp.gdsUser.getColumn(0, "prvcClctChcAgreYn"  ) : null);  // 개인정보(선택) 수집이용 동의 여부
        		}

        		// 시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서
        		this.divPrvcWtcs.visible = isSm;
        		this.panPrvcWtcs.visible = isSm;

        		if(isSm && this.cfnSetAtflInfo && this.RaonkUpload.cfnDelAtfl) {
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divMvnPic.form.grdTatPicSmYn).cfnDelAtfl();
        		}
        	}

            // 분야별 회사,담당자명 참고
        	var grndsAgtCoNm = { Y06110 : { coNm : "archFldCoNm" , picNm : "archFldPicNm"  }  // 건축
        	                   , Y06120 : { coNm : "mchnFldCoNm" , picNm : "mchnFldPicNm"  }  // 기계
        					   , Y06140 : { coNm : "elctyFldCoNm", picNm : "elctyFldPicNm" }  // 전기
        					   , Y06130 : { coNm : "cmnctFldCoNm", picNm : "cmnctFldPicNm" }  // 통신
        					   , Y06180 : { coNm : "fiftFldCoNm" , picNm : "fiftFldPicNm"  }  // 소방
        					   };
        	// 현장대리인(시공사)
        	if(this.gfnIsNull(e.columnid) ||
        	   e.columnid == "grndsAgtBstrPicSmYn" ||                                // 분야별담당자와 동일여부
        	   e.columnid == "grndsAgtSmFldChcCd"  ||                                // 동일한분야선택
        	   e.columnid.endsWith("FldCoNm") || e.columnid.endsWith("FldPicNm")) {  // 분야별회사명, 분야별성명
        	    var grndsAgtBstrPicSmYn = this.dsInstlChg.getColumn(0, "grndsAgtBstrPicSmYn");             // 현장대리인분야별담당자와동일여부
        	    var isSm = !this.gfnIsNull(grndsAgtBstrPicSmYn) && grndsAgtBstrPicSmYn == "1";         // "1": 분야별담당자와 동일
        		this.divGrndsAgt.form.panGrndsAgtSmFldChc.visible      = isSm;                                          // 동일한분야선택
        		this.divGrndsAgt.form.panGrndsAgtPrvcUtztnWtcs.visible = !this.gfnIsNull(grndsAgtBstrPicSmYn) && !isSm; // 현장대리인의 개인정보수집 및 이용동의서
        		this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.index      = isSm ? this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.index : -1;  // 동일한분야선택
        		if(!this.gfnIsNull(e.columnid)) {
        			this.dsInstlChg.setColumn(0, "grndsAgtCoNm", isSm ? this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.value].coNm ) : "");  // 회사명
        			this.dsInstlChg.setColumn(0, "grndsAgtNm"  , isSm ? this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divGrndsAgt.form.rdoGrndsAgtSmFldChcCd.value].picNm) : "");  // 성명
        		}
        		this.divGrndsAgt.form.edtGrndsAgtCoNm.readonly = this.divGrndsAgt.form.rdoGrndsAgt.readonly ? true : isSm;  // 회사명
        		this.divGrndsAgt.form.edtGrndsAgtFlnm.readonly = this.divGrndsAgt.form.rdoGrndsAgt.readonly ? true : isSm;  // 성명
        		if(isSm && this.cfnSetAtflInfo && this.RaonkUpload.cfnDelAtfl) {
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divGrndsAgt.form.grdGrndsAgtBstrPicSmYn).cfnDelAtfl();
        		}
        	}

        	// 안전관리자(주간)
        	if(this.gfnIsNull(e.columnid) ||
        	   e.columnid == "safeMngrDayBstrPicSmYn" ||                             // 안전관리자(주간)분야별담당자와동일여부
        	   e.columnid == "daySafeMngrSmFldChcCd"  ||                             // 동일한분야선택
        	   e.columnid.endsWith("FldCoNm") || e.columnid.endsWith("FldPicNm")) {  // 분야별회사명, 분야별성명
        		var safeMngrDayBstrPicSmYn = this.dsInstlChg.getColumn(0, "safeMngrDayBstrPicSmYn");             // 안전관리자(주간)분야별담당자와동일여부
        	    var isSm = !this.gfnIsNull(safeMngrDayBstrPicSmYn) && safeMngrDayBstrPicSmYn == "1";         // "1": 동일한분야선택
        		this.divSafeMngr.form.panSafeMngrDaySmFldChc.visible      = isSm;                                             // 동일한분야선택("1" : 분야별담당자와동일)
        		this.divSafeMngr.form.panSafeMngrDayPrvcUtztnWtcs.visible = !this.gfnIsNull(safeMngrDayBstrPicSmYn) && !isSm; // 안전관리자(주간)의 개인정보수집 및 이용동의서("0" : 분야별담당자와동일하지않음)
        		this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.index      = isSm ? this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.index : -1;  // 동일한분야선택
        		if(!this.gfnIsNull(e.columnid)) {
        		    this.dsInstlChg.setColumn(0, "safeMngrDayCoNm", isSm ? this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.value].coNm ) : "");  // 회사명
        		    this.dsInstlChg.setColumn(0, "safeMngrDayNm"  , isSm ? this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divSafeMngr.form.rdoDaySafeMngrSmFldChcCd.value].picNm) : "");  // 성명
        		}
        		this.divSafeMngr.form.edtSafeMngrDayCoNm.readonly = this.divSafeMngr.form.rdoSafeMngrDay.readonly ? true : isSm;  // 회사명
        		this.divSafeMngr.form.edtSafeMngrDayFlnm.readonly = this.divSafeMngr.form.rdoSafeMngrDay.readonly ? true : isSm;  // 성명
        		if(isSm && this.cfnSetAtflInfo && this.RaonkUpload.cfnDelAtfl) {
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divSafeMngr.form.grdSafeMngrDayBstrPicSmYn).cfnDelAtfl();
        		}
        	}

        	// 안전관리자(야간)
        	if(this.gfnIsNull(e.columnid) ||
        	   e.columnid == "safeMngrNghtBstrPicSmYn" ||                            // 안전관리자(야간)분야별담당자와동일여부
        	   e.columnid == "nghtSafeMngrSmFldChcCd"  ||                            // 동일한분야선택
        	   e.columnid.endsWith("FldCoNm") || e.columnid.endsWith("FldPicNm")) {  // 분야별회사명, 분야별성명
        		var safeMngrNghtBstrPicSmYn = this.dsInstlChg.getColumn(0, "safeMngrNghtBstrPicSmYn");             // 안전관리자(야간)분야별담당자와동일여부
        	    var isSm = !this.gfnIsNull(safeMngrNghtBstrPicSmYn) && safeMngrNghtBstrPicSmYn == "1";         // "1": 동일한분야선택
        		this.divSafeMngr.form.panSafeMngrNghtSmFldChc.visible      = isSm;                                              // 동일한분야선택("1" : 분야별담당자와동일)
        		this.divSafeMngr.form.panSafeMngrNghtPrvcUtztnWtcs.visible = !this.gfnIsNull(safeMngrNghtBstrPicSmYn) && !isSm; // 안전관리자(야간)의 개인정보수집 및 이용동의서("0" : 분야별담당자와동일하지않음)
        		this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.index      = isSm ? this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.index : -1;  // 동일한분야선택
        		if(!this.gfnIsNull(e.columnid)) {
        			this.dsInstlChg.setColumn(0, "safeMngrNghtCoNm", isSm ? this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.value].coNm ) : "");  // 회사명
        			this.dsInstlChg.setColumn(0, "safeMngrNghtNm"  , isSm ? this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.value && this.dsInstlChg.getColumn(0, grndsAgtCoNm[this.divSafeMngr.form.rdoNghtSafeMngrSmFldChcCd.value].picNm) : "");  // 성명
        		}
        		this.divSafeMngr.form.edtSafeMngrNghtCoNm.readonly = this.divSafeMngr.form.rdoSafeMngrNght.readonly ? true : isSm;  // 회사명
        		this.divSafeMngr.form.edtSafeMngrNghtFlnm.readonly = this.divSafeMngr.form.rdoSafeMngrNght.readonly ? true : isSm;  // 성명
        		if(isSm && this.cfnSetAtflInfo && this.RaonkUpload.cfnDelAtfl) {
        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divSafeMngr.form.grdSafeMngrNghtBstrPicSmYn).cfnDelAtfl();
        		}
        	}

        	this.resetScroll();
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// 그리드 Expr 실행
        	Array.from(this.components).forEach(function(v) {
        		if(v instanceof Div) {
        		    Array.from(v.form.components).forEach(function(vv) {
        			    if(vv instanceof Grid) {
        		            vv.redrawExprCell();
        		        }
        			});
        		}
        	});
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
        this.cfnIsVldDat = function() {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	// 신청서 작성 및 보완 단계만 점검
        	if(!this.cfnGetAtrb.call("isTAS00233")) { return true; }

        	// 입주자담당자의 동일여부
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "tatPicSmYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["입주자담당자의 동일여부"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divMvnPic.form.rdoTatPicSmYn.setFocus();
        		});

        		return false;
        	}

        	// 회사명(입주자담당자의 동일여부)
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "mvnPicCoNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["회사명"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divMvnPic.form.edtMvnPicCoNm.setFocus();
        		});

        		return false;
        	}

        	// 성명(입주자담당자의 동일여부)
        	if(this.gfnIsNull( this.dsInstlChg.getColumn(0, "mvnPicNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["성명"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divMvnPic.form.edtMvnPicNm.setFocus();
        		});

        		return false;
        	}

        	// 입주자담당자의 개인정보수집 및 이용동의서(입주자담당자의 동일여부)
        	if(this.dsAtfl.findRow("colId", "fcltyInstlChgAplyTatPicPrvcClctUtztnWtcs") == -1 && this.divMvnPic.form.panTatPicPrvcClctUtztnWtcsDiff.visible) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["입주자담당자의 개인정보수집 및 이용동의서"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divMvnPic.form.btnFcltyInstlChgTatPicPrvcWtcs.setFocus();
        		});

        		return false;
        	}

        	// 개인정보 수집(필수) 동의여부
        	if(this.divPrvcWtcs.visible && !this.divPrvcWtcs.form.chkPrvcClctEsntlAgreYn.isChecked()) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["개인정보 수집(필수) 동의여부"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divPrvcWtcs.form.chkPrvcClctEsntlAgreYn.setFocus();
        		});

        		return false;
        	}

        	// 개인정보 수집(선택) 동의여부
        	if(this.divPrvcWtcs.visible && this.gfnIsNull(this.dsInstlChg.getColumn(0, "prvcClctChcAgreYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["개인정보 수집(선택) 동의여부"], function() {
        			this.parent.parent.setStepIndex(2);
        			this.divPrvcWtcs.form.rdoPrvcClctChcAgreYn.setFocus();
        		});

        		return false;
        	}

        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Grid_oncellclick = function(obj,e)
        {
            // 그리드 내의 버튼 클릭
            if(e.col == 0) {
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
            } else if(e.col == 1) {
        		if(obj.getCellPropertyValue(0, 1, "edittype") != "none") {
        			if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기
        				// 첨부파일 선택 창 열기
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        			} else {  // 파일삭제
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();
        			}
        		}
        	}
        };

        // 펼침(축소) 버튼 클릭
        this.Button_onclick = function(obj,e)
        {
        	// 접기(펼침)
            this.cfnFold(obj, e.ctrlkey);
        };

        this.Button_ondblclick = function(obj,e)
        {
        	// 접기(펼침)
            this.cfnFold(obj, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrndsAgt.form.grdGrndsAgtBstrPicSmYn.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btnMvnPic.addEventHandler("onclick",this.Button_onclick,this);
            this.btnMvnPic.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnBstrPic.addEventHandler("onclick",this.Button_onclick,this);
            this.btnBstrPic.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnGrndsAgt.addEventHandler("onclick",this.Button_onclick,this);
            this.btnGrndsAgt.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnSafeMngr.addEventHandler("onclick",this.Button_onclick,this);
            this.btnSafeMngr.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnPrvcWtcs.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrvcWtcs.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divSafeMngr.form.grdSafeMngrDayBstrPicSmYn.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divSafeMngr.form.grdSafeMngrNghtBstrPicSmYn.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrvcWtcs.form.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.divMvnPic.form.grdTatPicSmYn.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgArchPicPrvcWcts.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgArchFldCoLcns.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgMchnPicPrvcWcts.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgMchnFldCoLcns.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgElctyPicPrvcWcts.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgElctyFldCoLcns.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgCmnctPicPrvcWcts.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgCmnctFldCoLcns.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgFiftPicPrvcWcts.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBstrPic.form.grdFcltyInstlChgFiftFldCoLcns.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };
        this.loadIncludeScript("CST002S03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
