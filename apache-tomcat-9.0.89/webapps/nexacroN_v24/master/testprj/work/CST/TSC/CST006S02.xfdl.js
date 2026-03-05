(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006S02");
            this.set_titletext("협의/신청정보(작업신고서)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDayNght", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\"/><Col id=\"cdNm\">선택</Col></Row><Row><Col id=\"cdId\">1</Col><Col id=\"cdNm\">주간(09시~19시)</Col></Row><Row><Col id=\"cdId\">2</Col><Col id=\"cdNm\">야간(18시~익일09시)</Col></Row><Row><Col id=\"cdId\">3</Col><Col id=\"cdNm\">종일(00시~24시)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","10000",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panCnsltnInfo\"/><PanelItem id=\"PanelItem01\" componentid=\"divCnsltnInfo\"/><PanelItem id=\"PanelItem03\" componentid=\"panSprvsnCo\"/><PanelItem id=\"PanelItem04\" componentid=\"divSprvsnCo\"/><PanelItem id=\"PanelItem05\" componentid=\"panCnstrCo\"/><PanelItem id=\"PanelItem06\" componentid=\"divCnstrCo\"/><PanelItem id=\"PanelItem07\" componentid=\"panJobPlan\"/><PanelItem id=\"PanelItem08\" componentid=\"divJobPlan\"/><PanelItem id=\"PanelItem09\" componentid=\"panJobYmdJobCnList\"/><PanelItem id=\"PanelItem10\" componentid=\"divJobYmdJobCnList\"/><PanelItem id=\"PanelItem11\" componentid=\"panPrvcWtcs\"/><PanelItem id=\"PanelItem12\" componentid=\"divPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","100","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협의정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","917","30","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCnsltnInfo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCnsltnInfo","765","30","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panCnsltnInfo","1357","451","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divCnsltnInfo","1710","288","100.00%","549",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","141","-25","100.00%","98",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("33");
            obj.set_text("■ 시설물설치(변경) 원상회복 관련 작업 연결\r\n - 시설물설치(변경) : 원상회복 관련 작업은 각 서비스별 작업 기능 단계에 진입한 상태에서 <b v=\'true\'><fc v=\'#1e4ebe\'>착공 및 준공예정일 사이 기간 내</fc></b>에만 신청이 가능합니다.\r\n - 착공 및 준공예정일 변경이 필요한 경우 입주자서비스센터에 문의하시길 바랍니다.\r\n - 시설물설치(변경) 원상회복과 관련된 작업에대해서 관련작업 <b v=\'true\'>[아니오]</b> 선택 후 작업신고서 신청 후 적발<b v=\'true\'>(사전 협의 건 제외)</b>시<b v=\'true\'><fc v=\'#f00000\'> 반려 및 불이익 </fc></b>을 받을 수 있습니다.\r\n - <b v=\'true\'>[연결 불가 및 미 신청]</b>시설물 및 원상회복 관련 작업 중 업주자서비스센터 및 시설관리 자회사와 <b v=\'ture\'>가 협의된 건</b>에 대해서는 (아니오)선택 후 작성 가능합니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Radio("rdoFcltyInstlChcRtosRltnJobYn","290","73","160","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("24");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            var divCnsltnInfo_form_rdoFcltyInstlChcRtosRltnJobYn_innerdataset = new nexacro.NormalDataset("divCnsltnInfo_form_rdoFcltyInstlChcRtosRltnJobYn_innerdataset", obj);
            divCnsltnInfo_form_rdoFcltyInstlChcRtosRltnJobYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divCnsltnInfo_form_rdoFcltyInstlChcRtosRltnJobYn_innerdataset);
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Button("btnLnkgPsbltyStepIdnty","658","76","243","34",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("25");
            obj.set_text("서비스별 작업신고서 연결 가능 단계 확인");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel03","290","28","300","86",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicChcYn00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","290","73","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoFcltyInstlChcRtosRltnJobYn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnLnkgPsbltyStepIdnty\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("panBasctAplcfmInfo","290","28","300","86",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicChcYn00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel05","290","73","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("30");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop01\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","658","76","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("0");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divCnsltnInfo.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divCnsltnInfo.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnBasctAplcfmInfo","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divCnsltnInfo.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divCnsltnInfo.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","270","28","100.00%","97",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBasctAplcfmInfo\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicChcYn00_00","290","73","100%","46",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("28");
            obj.set_text("연관신청서 정보");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicChcYn00","290","28","100%","46",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("23");
            obj.set_text("시설물설치(변경), 원상회복(퇴거) 관련 작업여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100.00%","64",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("0");
            obj.set_text("■ 공항공사 담당자(감독자) : 입주자 시설 공사 및 개선공사 등의 작업은 공항공사 담당자(감독자) 필히 지정 (공항공사 담당자가 없는 단순 물품반입 및 단순작업 제외)\r\n · 입주자 시설공사 : 해당부서 담당자(식음, 면세, 상업시설, 여객시설 등)\r\n · 공항공사 및 자회사 발주공사 : 발주부서 자회사 감독자");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","155",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panArptCstrnPic\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","142","265","74","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("20");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06120");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("chkArch","180","267","74","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("19");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06110");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","192","272","74","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("18");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06140");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","227","257","74","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("17");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06180");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicChcYn","10","98","100%","46",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("2");
            obj.set_text("공항공사 담당자(감독자)");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","259","300","144",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Radio("rdoArptPbcprtPicChcYn","20.00","91","132","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("1");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divCnsltnInfo_form_rdoArptPbcprtPicChcYn_innerdataset = new nexacro.NormalDataset("divCnsltnInfo_form_rdoArptPbcprtPicChcYn_innerdataset", obj);
            divCnsltnInfo_form_rdoArptPbcprtPicChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(divCnsltnInfo_form_rdoArptPbcprtPicChcYn_innerdataset);
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","113","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnTatFcltTkcgDeptCsaf\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Button("btnTatFcltTkcgDeptCsaf","200.00","0","193","34",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("10");
            obj.set_text("입주자 시설 담당부서 현황");
            obj.set_cssclass("btn_WF_SmallGray");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00","50","196","100%","50",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("Static03","81","238","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("9");
            obj.set_text("도면 신청진행현황 공유 할 공항공사 담당자 유/무 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicSpvsrId","974.00","151","100%","46",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("5");
            obj.set_text("공항공사 담당자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Div("divArptCstrnPic","974.00","197","100%","74",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("0");
            obj.set_fittocontents("height");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Grid("grdArptCstrnPic","0","0","100.00%","72",null,null,null,null,null,null,this.divCnsltnInfo.form.divArptCstrnPic.form);
            obj.set_taborder("1");
            obj.set_fillareatype("linerow");
            obj.set_binddataset("dsArptCstrnPic");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"26\"/><Column size=\"560\"/><Column size=\"26\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell expandshow=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"24\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? (currow == (dataset.rowcount - 1) ? &quot;cell_WF_Create&quot; : &quot;cell_WF_Delete&quot;) : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:picNm\"/><Cell col=\"2\" expandshow=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"24\"/></Band></Format></Formats>");
            this.divCnsltnInfo.form.divArptCstrnPic.addChild(obj.name, obj);

            obj = new Panel("panArptCstrnPic","650","259","300","124",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicSpvsrId\"/><PanelItem id=\"PanelItem01\" componentid=\"divArptCstrnPic\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staDstrtnPrnmntDt","10","98","100%","46",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("12");
            obj.set_text("공사(작업) 분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","300","124",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDstrtnPrnmntDt\"/><PanelItem id=\"PanelItem01\" componentid=\"panCstrnJobFld\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","135",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Panel("panCstrnJobFld","20","224","100%","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("22");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkArch\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox04\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox00\"/></Contents>");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","157","308","74","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("21");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06130");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","107","237","129","40",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("16");
            obj.set_text("해당사항없음");
            obj.set_fittocontents("width");
            obj.set_truevalue("Y06190");
            obj.set_value("false");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("Static03_00","30.00","325","100%","30",null,null,null,null,null,null,this.divCnsltnInfo.form);
            obj.set_taborder("15");
            obj.set_text("공종별 협의자 지정 : 해당 클릭시 공종별 담당자 협의");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCnsltnInfo.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","-5","582","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주관사");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1220","582","213","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnSprvsnCo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panSprvsnCo","-5","582","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSprvsnCo","1285","477","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("divSprvsnCo","1420","779","100.00%","620",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSprvsnCoCstrnEmpYn\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panSprvsnCoCstrnEmp","0","242","100.00%","97",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("Panel03","1336","891","300","0",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("0");
            obj.set_text("주관사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoSprvsnCoSmYn\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Radio("rdoSprvsnCoSmYn","124","145","100%","31",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSprvsnCo_form_rdoSprvsnCoSmYn_innerdataset = new nexacro.NormalDataset("divSprvsnCo_form_rdoSprvsnCoSmYn_innerdataset", obj);
            divSprvsnCo_form_rdoSprvsnCoSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divSprvsnCo_form_rdoSprvsnCoSmYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("3");
            obj.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panSprvsnCoCstrnEmpYn","1182","96","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoSprvsnCoPbcprtEmpYn\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Radio("rdoSprvsnCoPbcprtEmpYn","1182","142","100%","31",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSprvsnCo_form_rdoSprvsnCoPbcprtEmpYn_innerdataset = new nexacro.NormalDataset("divSprvsnCo_form_rdoSprvsnCoPbcprtEmpYn_innerdataset", obj);
            divSprvsnCo_form_rdoSprvsnCoPbcprtEmpYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divSprvsnCo_form_rdoSprvsnCoPbcprtEmpYn_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","1182","96","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("23");
            obj.set_text("주관사 공사직원여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("6");
            obj.set_text("주관사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","84","247","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("7");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panSprvsnCoPicNm","10.00","98","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoPicNm\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","0","60","100%","96",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSprvsnCoPicNm\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new MaskEdit("medSprvsnCoCtinfoNo","0","31","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("31");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoPicNm","651","246","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("12");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("Static01","563","211","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("11");
            obj.set_text("주관사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("13");
            obj.set_text("주관사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"medSprvsnCoCtinfoNo\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panBlank00","10.00","98","300","1",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank00\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("17");
            obj.set_text("주관사 개인정보 수집•이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Button("Button00_00","244.00","0","131","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("18");
            obj.set_text("동의서양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("19");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("20");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Grid("grdSprvsnCoPrvcClctUtztnWtcs","20.00","110","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("21");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/><Column size=\"88\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\"/><Cell col=\"2\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;&quot;  : &quot;보관함&quot;\" expandsize=\"80\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;&quot;  : &quot;CellFileSearch&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\"/></Band></Format></Formats>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Panel("panFile","1456","2096","100%","161",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("22");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSprvsnCoPrvcClctUtztnWtcs\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("26");
            obj.set_text("주관사 공사직원");
            obj.set_cssclass("sta_WF_Label_E");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Div("divSprvsnCoPbcprtEmpNm","20.00","715","100%","40",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoPbcprtEmpNm","0","0",null,"40","0",null,null,null,null,null,this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.addChild(obj.name, obj);

            obj = new Button("btnPop","edtSprvsnCoPbcprtEmpNm:-40","0","40","40",null,null,null,null,null,null,this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.addChild(obj.name, obj);

            obj = new Panel("pan05_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divSprvsnCo.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divSprvsnCoPbcprtEmpNm\"/></Contents>");
            this.divSprvsnCo.addChild(obj.name, obj);

            obj = new Div("divCnstrCo","1850","573","100%","487",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("0");
            obj.set_text("시공사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCnstrSmYn\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Radio("rdoCnstrSmYn","124","145","100%","31",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divCnstrCo_form_rdoCnstrSmYn_innerdataset = new nexacro.NormalDataset("divCnstrCo_form_rdoCnstrSmYn_innerdataset", obj);
            divCnstrCo_form_rdoCnstrSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(divCnstrCo_form_rdoCnstrSmYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan08","0","570","100.00%","96",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("4");
            obj.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사(실제 현장에 상주하는 공사책임자 연락처 1인 기재)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("7");
            obj.set_text("시공사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"medCnstrCoCtinfoNo\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("panBlank","10.00","98","300","1",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan08_00","0","570","100.00%","107",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_00_00\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new MaskEdit("medCnstrCoCtinfoNo","-5","271","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("25");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("Static00","83","444","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("12");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("13");
            obj.set_text("시공사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Edit("edtCnstrCoNm","84","247","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("14");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","300","86",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCnstrCoNm\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("16");
            obj.set_text("시공사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Edit("edtCnstrCoPicNm","568","251","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("17");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCnstrCoPicNm\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("19");
            obj.set_text("시공사 개인정보 수집•이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Button("Button00_00","244.00","0","131","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("20");
            obj.set_text("동의서양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Grid("grdCnstrPrvcClctUtztnWtcs","20.00","110","100%","40",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/><Column size=\"88\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) || !A120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrtRcpt&quot;) &amp;&amp; !A120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/><Cell col=\"2\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;&quot;  : &quot;CellFileSearch&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;&quot;  : &quot;보관함&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roAplcfmWrtRcpt&quot;) ? &quot;none&quot; : &quot;button&quot;\"/></Band></Format></Formats>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Panel("panFile","1456","2096","100%","161",null,null,null,null,null,null,this.divCnstrCo.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"grdCnstrPrvcClctUtztnWtcs\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.divCnstrCo.addChild(obj.name, obj);

            obj = new Div("divJobPlan","0","1588","100.00%","1822",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panTmnlRgn","0","46","100%","120",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("72");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTmnlRgn01\"/><PanelItem id=\"PanelItem01\" componentid=\"panTmnlRgn02\"/><PanelItem id=\"PanelItem02\" componentid=\"panTmnlRgn03\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCstrnJobSeCd\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","137",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panLbsvcCstrnPic\"/><PanelItem id=\"PanelItem03\" componentid=\"Static01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Radio("rdoCstrnJobSeCd","124","145","100%","31",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divJobPlan_form_rdoCstrnJobSeCd_innerdataset = new nexacro.NormalDataset("divJobPlan_form_rdoCstrnJobSeCd_innerdataset", obj);
            divJobPlan_form_rdoCstrnJobSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반작업</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아웃소싱용역업무</Col></Row></Rows>");
            obj.set_innerdataset(divJobPlan_form_rdoCstrnJobSeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08","0","187","100.00%","146",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01_00_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","10.00","2820","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("12");
            obj.set_text("일반터미널 지역 및 화물터미널 지역이 분리되어 두 지역 모두에서 작업을 진행 할 경우 각 1건씩 작업신고서를 따로 신청해주셔야합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static01","72","238","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("8");
            obj.set_text("아웃소싱용역업무”는 공항공사와 아웃소싱용역 체결된 건으로 작업신고서 신청시 해당 감독자에게 자동으로 협의완료요청됩니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("5");
            obj.set_text("용역/공사 담당자");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panLbsvcCstrnPic","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divLbsvcPbcprtPicNm\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Div("divLbsvcPbcprtPicNm","20.00","715","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Edit("edtLbsvcPbcprtPicNm","0","0",null,"40","0",null,null,null,null,null,this.divJobPlan.form.divLbsvcPbcprtPicNm.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divJobPlan.form.divLbsvcPbcprtPicNm.addChild(obj.name, obj);

            obj = new Button("btnPop","edtLbsvcPbcprtPicNm:-40","0","40","40",null,null,null,null,null,null,this.divJobPlan.form.divLbsvcPbcprtPicNm.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divJobPlan.form.divLbsvcPbcprtPicNm.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("9");
            obj.set_text("지역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Radio("rdoRgnSeCd","142","235","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divJobPlan_form_rdoRgnSeCd_innerdataset = new nexacro.NormalDataset("divJobPlan_form_rdoRgnSeCd_innerdataset", obj);
            divJobPlan_form_rdoRgnSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">제1,2터미널지역/기타그외지역</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">화물터미널지역/물류단지</Col></Row></Rows>");
            obj.set_innerdataset(divJobPlan_form_rdoRgnSeCd_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoRgnSeCd\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("13");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","20.00","205","96.88%","326",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panTmnlRgn\"/><PanelItem id=\"PanelItem03\" componentid=\"panCgoTmnlRgn\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_00","0","253","100.00%","378",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panCgoTmnlRgn","20","384","96.88%","160",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("87");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panCgoTmnlRgn01\"/><PanelItem id=\"PanelItem01\" componentid=\"panCgoTmnlRgn02\"/><PanelItem id=\"PanelItem02\" componentid=\"panCgoTmnlRgn03\"/><PanelItem id=\"PanelItem04\" componentid=\"panCgoTmnlRgn04\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panCgoTmnlRgn04","26","543","93.83%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("92");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04_00_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04_00_01","263","543","174","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("91");
            obj.set_text("제1물류단지(기타지역)");
            obj.set_truevalue("TSCWPLBLD021");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03_00_00","126","543","177","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("90");
            obj.set_text("사업/행정지원센터");
            obj.set_truevalue("TSCWPLBLD014");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","26","543","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("89");
            obj.set_text("[제1물류단지]");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panCgoTmnlRgn03","277","410","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("86");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox05_00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox06_00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox08_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08_00","177","450","232","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("85");
            obj.set_text("화물터미널지역(기타지역)");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCWPLBLD020");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06_00","177","450","174","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("84");
            obj.set_text("북측항공화물창고");
            obj.set_truevalue("TSCWPLBLD006");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05_00","537","410","177","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("83");
            obj.set_text("항공화물창고2(북)");
            obj.set_truevalue("TSCWPLBLD019");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static03_01","414","410","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("82");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panCgoTmnlRgn02","177","410","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("81");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04_00\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox04_00_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04_00","537","410","174","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("80");
            obj.set_text("C동 운송대리점");
            obj.set_truevalue("TSCWPLBLD011");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03_00","414","410","177","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("79");
            obj.set_text("A동 운송대리점");
            obj.set_truevalue("TSCWPLBLD017");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static02_00","277","410","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("78");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04_00_00","525","471","177","36",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("88");
            obj.set_text("항공화물창고1(남)");
            obj.set_truevalue("TSCWPLBLD018");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panCgoTmnlRgn01","177","410","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("77");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"chkCgoTmnl\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox02_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02_00","537","410","156","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("76");
            obj.set_text("화물터미널 E동");
            obj.set_truevalue("TSCWPLBLD022");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","414","410","174","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("75");
            obj.set_text("화물터미널 C동");
            obj.set_truevalue("TSCWPLBLD005");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("chkCgoTmnl","277","410","177","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("74");
            obj.set_text("화물터미널 A동");
            obj.set_truevalue("TSCWPLBLD016");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static00_00","177","410","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("73");
            obj.set_text("[화물터미널역]");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panTmnlRgn03","180","469","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox06\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox08\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox09\"/><PanelItem id=\"PanelItem06\" componentid=\"CheckBox07\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","236.00","0","135","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("28");
            obj.set_text("제2합동청사");
            obj.set_truevalue("TSCWPLBLD015");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panTmnlRgn02","219","444","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static02","102","441","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("22");
            obj.set_text("[제2터미널역]");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static00","631","390","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("20");
            obj.set_text("[제1터미널역]");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","338","389","88","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("19");
            obj.set_text("탑승동");
            obj.set_truevalue("TSCWPLBLD002");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","60","397","135","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("16");
            obj.set_text("제1교통센터");
            obj.set_truevalue("TSCWPLBLD003");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("chkPsgTmnl","223","399","151","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("17");
            obj.set_text("제1여객터미널");
            obj.set_truevalue("TSCWPLBLD001");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panTmnlRgn01","20","394","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("18");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"chkPsgTmnl\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox02\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","100.00","0","151","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("23");
            obj.set_text("제2여객터미널");
            obj.set_truevalue("TSCWPLBLD007");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","236.00","0","135","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("24");
            obj.set_text("제2교통센터");
            obj.set_truevalue("TSCWPLBLD009");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09","757","468","116","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("31");
            obj.set_text("인재개발원");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCWPLBLD013");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08","359.00","0","88","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("30");
            obj.set_text("AICC");
            obj.set_fittocontents("width");
            obj.set_truevalue("TSCWPLBLD012");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","359.00","0","129","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("29");
            obj.set_text("기타부대건물");
            obj.set_truevalue("TSCWPLBLD008");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","100.00","0","151","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("27");
            obj.set_text("제1청사동");
            obj.set_truevalue("TSCWPLBLD010");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static03","89","473","100","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("26");
            obj.set_text("[기타그외지역]");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("32");
            obj.set_text("보안구역여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("chkPrtcZone","223","399","136","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("33");
            obj.set_text("A/S(보호구역)");
            obj.set_truevalue("TSCWPLARA001");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","60","397","123","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("34");
            obj.set_text("L/S(일반지역)");
            obj.set_truevalue("TSCWPLARA002");
            obj.set_value("false");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panJobZoneCd","20","394","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"chkPrtcZone\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static03_00","20.00","607","305","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("36");
            obj.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","180","469","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("37");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","20.00","326","300","126",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panJobZoneCd\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_00_00","0","333","100.00%","137",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("39");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static04","488","628","302","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("40");
            obj.set_text("항공기 이동지역(계류장, E구역)에서 작업할 경우 작업신고서와는 별도로 이동지역 작업신고서를 반드시 신청 및 승인 받아야 합니다. (필수사항)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("41");
            obj.set_text("작업장위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Edit("edtWrsPstnCn","84","247","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("42");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtWrsPstnCn\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("44");
            obj.set_text("총 작업인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Edit("edtTotalJobNope","568","251","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("45");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTotalJobNope\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_01","0","570","100.00%","96",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("47");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("48");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Calendar("calJobBgngYmd","67","623","145","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("49");
            obj.set_dateformat("yyyy-MM-dd");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_01","10.00","98","300","130",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"calJobBgngYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"Static05\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("51");
            obj.set_text("작업종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Calendar("calJobEndYmd","570","621","145","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan05_01_01","10.00","98","300","130",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"calJobEndYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan05_00","0","60","100.00%","140",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static06","732","792","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("56");
            obj.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static05","382","802","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("55");
            obj.set_text("작업전 24시간 이전에 등록하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("57");
            obj.set_text("작업목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Radio("rdoJobPrpsCd","142","235","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divJobPlan_form_rdoJobPrpsCd_innerdataset = new nexacro.NormalDataset("divJobPlan_form_rdoJobPrpsCd_innerdataset", obj);
            divJobPlan_form_rdoJobPrpsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TSCWPLOBJ001</Col><Col id=\"datacolumn\">유지보수</Col></Row><Row><Col id=\"codecolumn\">TSCWPLOBJ002</Col><Col id=\"datacolumn\">시설물점검</Col></Row><Row><Col id=\"datacolumn\">하자보수</Col><Col id=\"codecolumn\">TSCWPLOBJ003</Col></Row><Row><Col id=\"datacolumn\">개선공사</Col><Col id=\"codecolumn\">TSCWPLOBJ004</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">TSCWPLOBJ005</Col></Row></Rows>");
            obj.set_innerdataset(divJobPlan_form_rdoJobPrpsCd_innerdataset);
            obj.set_text("일반작업");
            obj.set_value("0");
            obj.set_index("0");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoJobPrpsCd\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_02","0","187","100%","97",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("60");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panJobPrpsEtcCn","15","1017","100%","97",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("93");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01_00_01\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01_00_01","20","-1587","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("94");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobPrpsEtcCn\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01_00_01","0","-1587","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("95");
            obj.set_text("작업목적 기타내용");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Edit("edtJobPrpsEtcCn","0","-1540","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("96");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("61");
            obj.set_text("공사작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnJobNm\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_02_00","0","187","100%","97",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("63");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01_00\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Edit("edtCstrnJobNm","78","1058","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("64");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("65");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01_00_00","10.00","98","300","220",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtJobCn\"/><PanelItem id=\"PanelItem04\" componentid=\"Static08\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("pan08_02_00_00","0","1088","100%","483",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("67");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divMultiJobList\"/></Contents>");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static07","982","1204","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("69");
            obj.set_text("원활한 작업신고서 출력을 위해 [작업내용] 및 [다중 작업내용]은 전체 1300자 내로 작성해주시길 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Static("Static08","201","1198","100%","40",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("70");
            obj.set_text("다중작업인 경우 아래 표 기재");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new TextArea("txtJobCn","67","1157","100%","80",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("68");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Div("divMultiJobList","0","30","100%","290",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("71");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divJobPlan.form.divMultiJobList.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.divJobPlan.form.divMultiJobList.addChild(obj.name, obj);

            obj = new Grid("grdMultiJobList","0","panGrdBtn:10","100.00%","200",null,null,null,null,null,null,this.divJobPlan.form.divMultiJobList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsJobList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"86\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"600\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"시공사명\"/><Cell col=\"3\" text=\"위치정보(룸번호)\"/><Cell col=\"4\" text=\"작업내용\"/><Cell col=\"5\" text=\"작업일자\"/><Cell col=\"6\" text=\"작업인원\"/><Cell col=\"7\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:no\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"#####\" editmaxlength=\"5\" maskeditclipmode=\"excludespace\" maskeditlimitbymask=\"integer\"/><Cell col=\"2\" text=\"bind:cnstrNm\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:rnb\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:jobNm\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:jobYmd\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:jobNope\" displaytype=\"normal\" edittype=\"mask\" maskeditlimitbymask=\"integer\" maskeditformat=\"99999\"/><Cell col=\"7\" cssclass=\"CellEnd\" text=\"bind:rmrkCn\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divJobPlan.form.divMultiJobList.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.divJobPlan.form.divMultiJobList.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divJobPlan.form.divMultiJobList.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divJobPlan.form.divMultiJobList.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divJobPlan.form.divMultiJobList.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divJobPlan.form);
            obj.set_taborder("0");
            obj.set_text("공사(작업)구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.divJobPlan.addChild(obj.name, obj);

            obj = new Div("divJobYmdJobCnList","1390","3115","100.00%","537",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","497",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divJobYmdJobCnList\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02\"/><PanelItem id=\"PanelItem05\" componentid=\"Static02_00\"/></Contents>");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("Static00","91","411","100%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("4");
            obj.set_text("화기작업(용접/그라인딩(불꽃발생), 신나사용 페인팅작업, 가연성원료 사용작업) 전 반드시 SMIS(안전관리정보시스템) 작업허가서 등록  ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("Static01","206","410","100%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("5");
            obj.set_text("SMIS 작업허가서 : 1일(주/야간) 단위로 등록");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("Static02","321","410","100%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("6");
            obj.set_text("공항소방대는 SMIS 작업허가서 등록 화기작업장 대하여 안전조치 점검 후 “허가증” 발급");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Div("divJobYmdJobCnList","0","30","100%","300",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Grid("grdJobYmdJobCnList","0","0","100.00%","300",null,null,null,null,null,null,this.divJobYmdJobCnList.form.divJobYmdJobCnList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsArtclList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"115\"/><Column size=\"160\"/><Column size=\"128\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"작업일\"/><Cell col=\"1\" rowspan=\"2\" text=\"시작&#13;&#10;시간\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"종료&#13;&#10;시간\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"용접기/&#13;&#10;그라인더사용\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"용접기/&#13;&#10;그라인더사용&#13;&#10;주간/야간/종일\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"인화성/유독성/&#13;&#10;악취발생\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"6\" colspan=\"8\" text=\"기존시설물해체\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"14\" text=\"소음/진동/&#13;&#10;분진발생\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"15\" text=\"고소작업\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"배관작업\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"17\" text=\"옥상작업\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"5\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"6\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" cssclass=\"CellEnd\" text=\"0\" checkboxtruevalue=\"TSCWPLMAT001\" checkboxfalsevalue=\"\"/><Cell row=\"1\" col=\"7\" text=\"벽\" textAlign=\"left\"/><Cell row=\"1\" col=\"8\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" cssclass=\"CellEnd\" text=\"0\" checkboxtruevalue=\"TSCWPLMAT002\" checkboxfalsevalue=\"\"/><Cell row=\"1\" col=\"9\" text=\"바닥\" textAlign=\"left\"/><Cell row=\"1\" col=\"10\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" cssclass=\"CellEnd\" text=\"0\" checkboxtruevalue=\"TSCWPLMAT003\" checkboxfalsevalue=\"\"/><Cell row=\"1\" col=\"11\" text=\"천장\" textAlign=\"left\"/><Cell row=\"1\" col=\"12\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" cssclass=\"CellEnd\" text=\"0\" checkboxtruevalue=\"TSCWPLMAT004\" checkboxfalsevalue=\"\"/><Cell row=\"1\" col=\"13\" text=\"없음\" textAlign=\"left\"/><Cell row=\"1\" col=\"14\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"15\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"16\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"17\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/></Band><Band id=\"body\"><Cell text=\"bind:jobYmd\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:bgngTm\" textAlign=\"center\" maskeditformat=\"##\" maskedittype=\"string\" maskeditclipmode=\"excludespace\" maskedittrimtype=\"both\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:endTm\" textAlign=\"center\" maskeditformat=\"##\" maskedittype=\"string\" maskeditclipmode=\"excludespace\" maskedittrimtype=\"both\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:wdmchnGrdrUseYn\" checkboxtruevalue=\"1\"/><Cell col=\"4\" text=\"bind:wdmchnDayNghtSeCd\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsDayNght\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:flmatyTicBdsmlOcrnYn\" checkboxtruevalue=\"1\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\" checkboxtruevalue=\"TSCWPLMAT001\" text=\"bind:fcltyCdWil\"/><Cell col=\"7\" text=\"벽\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\" checkboxtruevalue=\"TSCWPLMAT002\" text=\"bind:fcltyCdFlof\"/><Cell col=\"9\" text=\"바닥\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\" checkboxtruevalue=\"TSCWPLMAT003\" text=\"bind:fcltyCdCilin\"/><Cell col=\"11\" text=\"천장\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\" checkboxtruevalue=\"TSCWPLMAT004\" text=\"bind:fcltyCdNone\"/><Cell col=\"13\" text=\"없음\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:noiseVbrnOcrnYn\" checkboxtruevalue=\"1\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:hpwYn\" checkboxtruevalue=\"1\"/><Cell col=\"16\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:pipJobYn\" checkboxtruevalue=\"1\"/><Cell col=\"17\" cssclass=\"CellEnd\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rftJobYn\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.divJobYmdJobCnList.form.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100.00%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("1");
            obj.set_text("■ 중요필드 일자별 입력 \"용접기/그라인더 사용\" 작업 변경 시 작업일자 1일전까지 반드시 변경사항 입력(위치 : My Page → 나의할일)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("Static02_00","321","410","100%","40",null,null,null,null,null,null,this.divJobYmdJobCnList.form);
            obj.set_taborder("7");
            obj.set_text("불시점검 중 SMIS 미등록 작업 / 안전조치 미흡 작업은 허가증 발급된 경우라도 작업 중단");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divJobYmdJobCnList.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","100","1160","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("시공사");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","916","1160","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCnstrCo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCnstrCo","100","1160","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("16");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCnstrCo","773","970","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","213","1690","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","1033","1690","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnJobPlan\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panJobPlan","213","1690","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("20");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnJobPlan","1150","1520","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","40","3210","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("중요필드 일자별 입력");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","860","3210","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnJobYmdJobCnList\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panJobYmdJobCnList","40","3210","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("24");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnJobYmdJobCnList","740","3176","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1866","3263","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrvcWtcs","3030","3280","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","3000","3263","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrvcWtcs","0","3293","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("29");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divPrvcWtcs","0","4087","100.00%","393",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
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

            obj = new Grid("Grid00","20","123","100.00%","100",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"414\"/><Column size=\"414\"/><Column size=\"414\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"1\" text=\"수집목적\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"2\" cssclass=\"CellEnd\" text=\"보유기간\" border=\"1px solid, 0px none\"/><Cell row=\"1\" color=\"blue\" text=\"주관사 회사명, 주관사 담당자명, 주관사 연락처&#13;&#10;시공사 회사명, 시공사 담당자명, 시공사 연락처\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" background=\"#ffffff\" text=\"공항 내•외부 작업에 대한 서비스 신청,&#13;&#10;민원처리, 사후관리\"/><Cell row=\"1\" col=\"2\" color=\"blue\" background=\"#ffffff\" text=\"계약종료 후 3년, 회원탈퇴 시까지\" font=\"bold 16px/normal &quot;pretendard&quot;\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel07","20","3346","1100","200",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","3336","100.00%","221",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("5");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static05","137","3798","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("6");
            obj.set_text("개인정보 수집•이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","87","3847","46","40",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("7");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel10","20","3771","1240","90",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","268","100.00%","115",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("9");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static03","113","3670","100%","60",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("3");
            obj.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다.\r\n그러나 동의를 거부할 경우 작업신고서 신청을 할 수 없습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_color("red");
            this.divPrvcWtcs.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCnsltnInfo.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.divCnsltnInfo.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnBasctAplcfmInfo.set_taborder("1");
                p.btnBasctAplcfmInfo.set_cssclass("btn_WF_EdtSch");
                p.btnBasctAplcfmInfo.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divCnsltnInfo.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.divCnsltnInfo.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCnsltnInfo.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.divCnsltnInfo.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCnsltnInfo.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCnsltnInfo.form.divArptCstrnPic.form
            obj = new Layout("default","",0,0,this.divCnsltnInfo.form.divArptCstrnPic.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdArptCstrnPic.set_taborder("1");
                p.grdArptCstrnPic.set_fillareatype("linerow");
                p.grdArptCstrnPic.set_binddataset("dsArptCstrnPic");
                p.grdArptCstrnPic.set_autofittype("col");
                p.grdArptCstrnPic.move("0","0","100.00%","72",null,null);
            	}
            );
            this.divCnsltnInfo.form.divArptCstrnPic.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form.divArptCstrnPic.form
            obj = new Layout("mobile","",0,0,this.divCnsltnInfo.form.divArptCstrnPic.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCnsltnInfo.form.divArptCstrnPic.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form.divArptCstrnPic.form
            obj = new Layout("Layout0","",0,0,this.divCnsltnInfo.form.divArptCstrnPic.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCnsltnInfo.form.divArptCstrnPic.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCnsltnInfo.form
            obj = new Layout("default","",0,0,this.divCnsltnInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00_00.set_taborder("33");
                p.sta00_00.set_text("■ 시설물설치(변경) 원상회복 관련 작업 연결\r\n - 시설물설치(변경) : 원상회복 관련 작업은 각 서비스별 작업 기능 단계에 진입한 상태에서 <b v=\'true\'><fc v=\'#1e4ebe\'>착공 및 준공예정일 사이 기간 내</fc></b>에만 신청이 가능합니다.\r\n - 착공 및 준공예정일 변경이 필요한 경우 입주자서비스센터에 문의하시길 바랍니다.\r\n - 시설물설치(변경) 원상회복과 관련된 작업에대해서 관련작업 <b v=\'true\'>[아니오]</b> 선택 후 작업신고서 신청 후 적발<b v=\'true\'>(사전 협의 건 제외)</b>시<b v=\'true\'><fc v=\'#f00000\'> 반려 및 불이익 </fc></b>을 받을 수 있습니다.\r\n - <b v=\'true\'>[연결 불가 및 미 신청]</b>시설물 및 원상회복 관련 작업 중 업주자서비스센터 및 시설관리 자회사와 <b v=\'ture\'>가 협의된 건</b>에 대해서는 (아니오)선택 후 작성 가능합니다.");
                p.sta00_00.set_cssclass("sta_WF_Des004");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.set_usedecorate("true");
                p.sta00_00.move("141","-25","100.00%","98",null,null);

                p.rdoFcltyInstlChcRtosRltnJobYn.set_taborder("24");
                p.rdoFcltyInstlChcRtosRltnJobYn.set_rowcount("-1");
                p.rdoFcltyInstlChcRtosRltnJobYn.set_columncount("-1");
                p.rdoFcltyInstlChcRtosRltnJobYn.set_innerdataset(divCnsltnInfo_form_rdoFcltyInstlChcRtosRltnJobYn_innerdataset);
                p.rdoFcltyInstlChcRtosRltnJobYn.set_codecolumn("codecolumn");
                p.rdoFcltyInstlChcRtosRltnJobYn.set_datacolumn("datacolumn");
                p.rdoFcltyInstlChcRtosRltnJobYn.set_flexgrow("1");
                p.rdoFcltyInstlChcRtosRltnJobYn.move("290","73","160","40",null,null);

                p.btnLnkgPsbltyStepIdnty.set_taborder("25");
                p.btnLnkgPsbltyStepIdnty.set_text("서비스별 작업신고서 연결 가능 단계 확인");
                p.btnLnkgPsbltyStepIdnty.set_cssclass("btn_WF_Small");
                p.btnLnkgPsbltyStepIdnty.set_fittocontents("width");
                p.btnLnkgPsbltyStepIdnty.move("658","76","243","34",null,null);

                p.Panel03.set_taborder("27");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("290","28","300","86",null,null);

                p.Panel04_00.set_taborder("26");
                p.Panel04_00.set_fittocontents("height");
                p.Panel04_00.set_flexcrossaxisalign("center");
                p.Panel04_00.set_flexwrap("wrap");
                p.Panel04_00.move("290","73","100%","40",null,null);

                p.panBasctAplcfmInfo.set_taborder("31");
                p.panBasctAplcfmInfo.set_flexgrow("1");
                p.panBasctAplcfmInfo.set_type("vertical");
                p.panBasctAplcfmInfo.set_fittocontents("height");
                p.panBasctAplcfmInfo.move("290","28","300","86",null,null);

                p.Panel05.set_taborder("30");
                p.Panel05.set_fittocontents("height");
                p.Panel05.move("290","73","100%","40",null,null);

                p.divEdtPop01.set_taborder("29");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("0");
                p.divEdtPop01.move("658","76","100%","40",null,null);

                p.Panel01_01.set_taborder("32");
                p.Panel01_01.set_cssclass("pal_WF_DtlBg");
                p.Panel01_01.set_spacing("0px 20px 10px 20px");
                p.Panel01_01.set_horizontalgap("20");
                p.Panel01_01.set_fittocontents("height");
                p.Panel01_01.set_flexwrap("wrap");
                p.Panel01_01.move("270","28","100.00%","97",null,null);

                p.staArptPbcprtPicChcYn00_00.set_taborder("28");
                p.staArptPbcprtPicChcYn00_00.set_text("연관신청서 정보");
                p.staArptPbcprtPicChcYn00_00.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicChcYn00_00.move("290","73","100%","46",null,null);

                p.staArptPbcprtPicChcYn00.set_taborder("23");
                p.staArptPbcprtPicChcYn00.set_text("시설물설치(변경), 원상회복(퇴거) 관련 작업여부");
                p.staArptPbcprtPicChcYn00.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicChcYn00.move("290","28","100%","46",null,null);

                p.sta00.set_taborder("0");
                p.sta00.set_text("■ 공항공사 담당자(감독자) : 입주자 시설 공사 및 개선공사 등의 작업은 공항공사 담당자(감독자) 필히 지정 (공항공사 담당자가 없는 단순 물품반입 및 단순작업 제외)\r\n · 입주자 시설공사 : 해당부서 담당자(식음, 면세, 상업시설, 여객시설 등)\r\n · 공항공사 및 자회사 발주공사 : 발주부서 자회사 감독자");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","0","100.00%","64",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","155",null,null);

                p.CheckBox04.set_taborder("20");
                p.CheckBox04.set_text("기계");
                p.CheckBox04.set_fittocontents("width");
                p.CheckBox04.set_truevalue("Y06120");
                p.CheckBox04.set_value("false");
                p.CheckBox04.move("142","265","74","40",null,null);

                p.chkArch.set_taborder("19");
                p.chkArch.set_text("건축");
                p.chkArch.set_fittocontents("width");
                p.chkArch.set_truevalue("Y06110");
                p.chkArch.set_value("false");
                p.chkArch.move("180","267","74","40",null,null);

                p.CheckBox02.set_taborder("18");
                p.CheckBox02.set_text("전기");
                p.CheckBox02.set_fittocontents("width");
                p.CheckBox02.set_truevalue("Y06140");
                p.CheckBox02.set_value("false");
                p.CheckBox02.move("192","272","74","40",null,null);

                p.CheckBox01.set_taborder("17");
                p.CheckBox01.set_text("소방");
                p.CheckBox01.set_fittocontents("width");
                p.CheckBox01.set_truevalue("Y06180");
                p.CheckBox01.set_value("false");
                p.CheckBox01.move("227","257","74","40",null,null);

                p.staArptPbcprtPicChcYn.set_taborder("2");
                p.staArptPbcprtPicChcYn.set_text("공항공사 담당자(감독자)");
                p.staArptPbcprtPicChcYn.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicChcYn.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","259","300","144",null,null);

                p.rdoArptPbcprtPicChcYn.set_taborder("4");
                p.rdoArptPbcprtPicChcYn.set_fittocontents("none");
                p.rdoArptPbcprtPicChcYn.set_innerdataset(divCnsltnInfo_form_rdoArptPbcprtPicChcYn_innerdataset);
                p.rdoArptPbcprtPicChcYn.set_codecolumn("codecolumn");
                p.rdoArptPbcprtPicChcYn.set_datacolumn("datacolumn");
                p.rdoArptPbcprtPicChcYn.set_direction("vertical");
                p.rdoArptPbcprtPicChcYn.set_flexgrow("1");
                p.rdoArptPbcprtPicChcYn.set_columncount("-1");
                p.rdoArptPbcprtPicChcYn.set_rowcount("-1");
                p.rdoArptPbcprtPicChcYn.set_value("-1");
                p.rdoArptPbcprtPicChcYn.set_index("-1");
                p.rdoArptPbcprtPicChcYn.move("20.00","91","132","40",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("20","113","100%","40",null,null);

                p.btnTatFcltTkcgDeptCsaf.set_taborder("10");
                p.btnTatFcltTkcgDeptCsaf.set_text("입주자 시설 담당부서 현황");
                p.btnTatFcltTkcgDeptCsaf.set_cssclass("btn_WF_SmallGray");
                p.btnTatFcltTkcgDeptCsaf.move("200.00","0","193","34",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("50","196","100%","50",null,null);

                p.Static03.set_taborder("9");
                p.Static03.set_text("도면 신청진행현황 공유 할 공항공사 담당자 유/무 선택");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("81","238","100%","40",null,null);

                p.staArptPbcprtPicSpvsrId.set_taborder("5");
                p.staArptPbcprtPicSpvsrId.set_text("공항공사 담당자");
                p.staArptPbcprtPicSpvsrId.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicSpvsrId.move("974.00","151","100%","46",null,null);

                p.divArptCstrnPic.set_taborder("6");
                p.divArptCstrnPic.set_text("Div00");
                p.divArptCstrnPic.set_formscrollbartype("none none");
                p.divArptCstrnPic.set_formscrolltype("none");
                p.divArptCstrnPic.set_flexgrow("0");
                p.divArptCstrnPic.set_fittocontents("height");
                p.divArptCstrnPic.move("974.00","197","100%","74",null,null);

                p.panArptCstrnPic.set_taborder("7");
                p.panArptCstrnPic.set_type("vertical");
                p.panArptCstrnPic.set_flexgrow("1");
                p.panArptCstrnPic.set_fittocontents("height");
                p.panArptCstrnPic.set_verticalgap("4");
                p.panArptCstrnPic.set_visible("true");
                p.panArptCstrnPic.move("650","259","300","124",null,null);

                p.staDstrtnPrnmntDt.set_taborder("12");
                p.staDstrtnPrnmntDt.set_text("공사(작업) 분야");
                p.staDstrtnPrnmntDt.set_cssclass("sta_WF_Label_E");
                p.staDstrtnPrnmntDt.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("13");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","300","124",null,null);

                p.pan00_00.set_taborder("14");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","135",null,null);

                p.panCstrnJobFld.set_taborder("22");
                p.panCstrnJobFld.set_flexwrap("wrap");
                p.panCstrnJobFld.set_fittocontents("height");
                p.panCstrnJobFld.set_horizontalgap("10");
                p.panCstrnJobFld.move("20","224","100%","40",null,null);

                p.CheckBox05.set_taborder("21");
                p.CheckBox05.set_text("통신");
                p.CheckBox05.set_fittocontents("width");
                p.CheckBox05.set_truevalue("Y06130");
                p.CheckBox05.set_value("false");
                p.CheckBox05.move("157","308","74","40",null,null);

                p.CheckBox00.set_taborder("16");
                p.CheckBox00.set_text("해당사항없음");
                p.CheckBox00.set_fittocontents("width");
                p.CheckBox00.set_truevalue("Y06190");
                p.CheckBox00.set_value("false");
                p.CheckBox00.move("107","237","129","40",null,null);

                p.Static03_00.set_taborder("15");
                p.Static03_00.set_text("공종별 협의자 지정 : 해당 클릭시 공종별 담당자 협의");
                p.Static03_00.set_cssclass("sta_WF_Des");
                p.Static03_00.set_fittocontents("height");
                p.Static03_00.move("30.00","325","100%","30",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divCnsltnInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form
            obj = new Layout("mobile","",0,0,this.divCnsltnInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCnsltnInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnsltnInfo.form
            obj = new Layout("Layout0","",0,0,this.divCnsltnInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCnsltnInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form
            obj = new Layout("default","",0,0,this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtSprvsnCoPbcprtEmpNm.set_taborder("0");
                p.edtSprvsnCoPbcprtEmpNm.set_cssclass("edt_WF_EdtSch");
                p.edtSprvsnCoPbcprtEmpNm.set_readonly("true");
                p.edtSprvsnCoPbcprtEmpNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtSprvsnCoPbcprtEmpNm:-40","0","40","40",null,null);
            	}
            );
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form
            obj = new Layout("mobile","",0,0,this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form
            obj = new Layout("Layout0","",0,0,this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSprvsnCo.form
            obj = new Layout("default","",0,0,this.divSprvsnCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("4");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.panSprvsnCoCstrnEmp.set_taborder("29");
                p.panSprvsnCoCstrnEmp.set_horizontalgap("20");
                p.panSprvsnCoCstrnEmp.set_flexcrossaxiswrapalign("start");
                p.panSprvsnCoCstrnEmp.set_flexwrap("wrap");
                p.panSprvsnCoCstrnEmp.set_fittocontents("height");
                p.panSprvsnCoCstrnEmp.set_verticalgap("4");
                p.panSprvsnCoCstrnEmp.set_spacing("0px 20px 10px 20px");
                p.panSprvsnCoCstrnEmp.set_cssclass("pal_WF_DtlBg");
                p.panSprvsnCoCstrnEmp.move("0","242","100.00%","97",null,null);

                p.Panel03.set_taborder("30");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("1336","891","300","0",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("주관사의 동일여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.rdoSprvsnCoSmYn.set_taborder("5");
                p.rdoSprvsnCoSmYn.set_innerdataset(divSprvsnCo_form_rdoSprvsnCoSmYn_innerdataset);
                p.rdoSprvsnCoSmYn.set_codecolumn("codecolumn");
                p.rdoSprvsnCoSmYn.set_datacolumn("datacolumn");
                p.rdoSprvsnCoSmYn.set_direction("vertical");
                p.rdoSprvsnCoSmYn.set_fittocontents("width");
                p.rdoSprvsnCoSmYn.set_index("-1");
                p.rdoSprvsnCoSmYn.move("124","145","100%","31",null,null);

                p.sta00_00_01.set_taborder("3");
                p.sta00_00_01.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100%","40",null,null);

                p.panSprvsnCoCstrnEmpYn.set_taborder("25");
                p.panSprvsnCoCstrnEmpYn.set_type("vertical");
                p.panSprvsnCoCstrnEmpYn.set_flexgrow("1");
                p.panSprvsnCoCstrnEmpYn.move("1182","96","300","86",null,null);

                p.rdoSprvsnCoPbcprtEmpYn.set_taborder("24");
                p.rdoSprvsnCoPbcprtEmpYn.set_innerdataset(divSprvsnCo_form_rdoSprvsnCoPbcprtEmpYn_innerdataset);
                p.rdoSprvsnCoPbcprtEmpYn.set_codecolumn("codecolumn");
                p.rdoSprvsnCoPbcprtEmpYn.set_datacolumn("datacolumn");
                p.rdoSprvsnCoPbcprtEmpYn.set_direction("vertical");
                p.rdoSprvsnCoPbcprtEmpYn.set_fittocontents("width");
                p.rdoSprvsnCoPbcprtEmpYn.set_index("-1");
                p.rdoSprvsnCoPbcprtEmpYn.move("1182","142","100%","31",null,null);

                p.staLabel03_00_00.set_taborder("23");
                p.staLabel03_00_00.set_text("주관사 공사직원여부");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("1182","96","100%","46",null,null);

                p.staLabel05_00_00_00.set_taborder("6");
                p.staLabel05_00_00_00.set_text("주관사 회사명");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.edtSprvsnCoNm.set_taborder("7");
                p.edtSprvsnCoNm.move("84","247","100%","40",null,null);

                p.pan04_00_00.set_taborder("8");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.panSprvsnCoPicNm.set_taborder("9");
                p.panSprvsnCoPicNm.set_type("vertical");
                p.panSprvsnCoPicNm.set_flexgrow("1");
                p.panSprvsnCoPicNm.move("10.00","98","300","86",null,null);

                p.pan05_00_00.set_taborder("10");
                p.pan05_00_00.set_horizontalgap("20");
                p.pan05_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00.set_flexwrap("wrap");
                p.pan05_00_00.set_verticalgap("0");
                p.pan05_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00.set_fittocontents("height");
                p.pan05_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00.move("0","60","100%","96",null,null);

                p.medSprvsnCoCtinfoNo.set_taborder("31");
                p.medSprvsnCoCtinfoNo.set_format("###-####-####");
                p.medSprvsnCoCtinfoNo.set_type("string");
                p.medSprvsnCoCtinfoNo.set_maskchar(" ");
                p.medSprvsnCoCtinfoNo.move("0","31","100%","40",null,null);

                p.edtSprvsnCoPicNm.set_taborder("12");
                p.edtSprvsnCoPicNm.move("651","246","100%","40",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("주관사 담당자명");
                p.Static01.set_cssclass("sta_WF_Label_E");
                p.Static01.move("563","211","100%","46",null,null);

                p.staLabel05_00_00_00_00.set_taborder("13");
                p.staLabel05_00_00_00_00.set_text("주관사 연락처");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_00.set_taborder("14");
                p.pan04_00_00_00.set_type("vertical");
                p.pan04_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00.move("10.00","98","300","86",null,null);

                p.panBlank00.set_taborder("15");
                p.panBlank00.set_type("vertical");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.move("10.00","98","300","1",null,null);

                p.pan05_00_00_00.set_taborder("16");
                p.pan05_00_00_00.set_horizontalgap("20");
                p.pan05_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00_00.set_flexwrap("wrap");
                p.pan05_00_00_00.set_verticalgap("0");
                p.pan05_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00_00.set_fittocontents("height");
                p.pan05_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("17");
                p.staLabel00_02.set_text("주관사 개인정보 수집•이용동의서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);

                p.Button00_00.set_taborder("18");
                p.Button00_00.set_text("동의서양식다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("244.00","0","131","40",null,null);

                p.panBtnFile.set_taborder("19");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.panTitle.set_taborder("20");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.grdSprvsnCoPrvcClctUtztnWtcs.set_taborder("21");
                p.grdSprvsnCoPrvcClctUtztnWtcs.set_binddataset("dsFile");
                p.grdSprvsnCoPrvcClctUtztnWtcs.set_autofittype("col");
                p.grdSprvsnCoPrvcClctUtztnWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdSprvsnCoPrvcClctUtztnWtcs.move("20.00","110","100%","40",null,null);

                p.panFile.set_taborder("22");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("1456","2096","100%","161",null,null);

                p.staLabel05_01_00_00.set_taborder("26");
                p.staLabel05_01_00_00.set_text("주관사 공사직원");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_00.move("10","98","100%","46",null,null);

                p.divSprvsnCoPbcprtEmpNm.set_taborder("27");
                p.divSprvsnCoPbcprtEmpNm.set_text("Div00");
                p.divSprvsnCoPbcprtEmpNm.set_formscrollbartype("none none");
                p.divSprvsnCoPbcprtEmpNm.set_formscrolltype("none");
                p.divSprvsnCoPbcprtEmpNm.set_flexgrow("1");
                p.divSprvsnCoPbcprtEmpNm.move("20.00","715","100%","40",null,null);

                p.pan05_01_00.set_taborder("28");
                p.pan05_01_00.set_type("vertical");
                p.pan05_01_00.set_flexgrow("1");
                p.pan05_01_00.move("10.00","98","300","86",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divSprvsnCo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSprvsnCo.form
            obj = new Layout("mobile","",0,0,this.divSprvsnCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divSprvsnCo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSprvsnCo.form
            obj = new Layout("Layout0","",0,0,this.divSprvsnCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divSprvsnCo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCnstrCo.form
            obj = new Layout("default","",0,0,this.divCnstrCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("5");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("시공사의 동일여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.rdoCnstrSmYn.set_taborder("6");
                p.rdoCnstrSmYn.set_innerdataset(divCnstrCo_form_rdoCnstrSmYn_innerdataset);
                p.rdoCnstrSmYn.set_codecolumn("codecolumn");
                p.rdoCnstrSmYn.set_datacolumn("datacolumn");
                p.rdoCnstrSmYn.set_direction("vertical");
                p.rdoCnstrSmYn.set_fittocontents("width");
                p.rdoCnstrSmYn.set_value("0");
                p.rdoCnstrSmYn.set_index("0");
                p.rdoCnstrSmYn.move("124","145","100%","31",null,null);

                p.pan08.set_taborder("3");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_fittocontents("height");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_horizontalgap("20");
                p.pan08.move("0","570","100.00%","96",null,null);

                p.sta00_00_01.set_taborder("4");
                p.sta00_00_01.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사(실제 현장에 상주하는 공사책임자 연락처 1인 기재)");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100%","40",null,null);

                p.staLabel05_00_00_00.set_taborder("7");
                p.staLabel05_00_00_00.set_text("시공사 연락처");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00.set_taborder("8");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.panBlank.set_taborder("9");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("10.00","98","300","1",null,null);

                p.pan05_00_00.set_taborder("10");
                p.pan05_00_00.set_horizontalgap("20");
                p.pan05_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00.set_flexwrap("wrap");
                p.pan05_00_00.set_verticalgap("0");
                p.pan05_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00.set_fittocontents("height");
                p.pan05_00_00.move("0","60","100.00%","96",null,null);

                p.pan08_00.set_taborder("11");
                p.pan08_00.set_type("vertical");
                p.pan08_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00.set_fittocontents("height");
                p.pan08_00.set_spacing("0px 0px 10px 0px ");
                p.pan08_00.move("0","570","100.00%","107",null,null);

                p.medCnstrCoCtinfoNo.set_taborder("25");
                p.medCnstrCoCtinfoNo.set_format("###-####-####");
                p.medCnstrCoCtinfoNo.set_type("string");
                p.medCnstrCoCtinfoNo.set_maskchar(" ");
                p.medCnstrCoCtinfoNo.move("-5","271","100%","40",null,null);

                p.Static00.set_taborder("12");
                p.Static00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("83","444","100%","40",null,null);

                p.staLabel05_00_00.set_taborder("13");
                p.staLabel05_00_00.set_text("시공사 회사명");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.edtCnstrCoNm.set_taborder("14");
                p.edtCnstrCoNm.move("84","247","100%","40",null,null);

                p.pan04_00.set_taborder("15");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("10.00","98","300","86",null,null);

                p.staLabel05_01_00.set_taborder("16");
                p.staLabel05_01_00.set_text("시공사 담당자명");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.edtCnstrCoPicNm.set_taborder("17");
                p.edtCnstrCoPicNm.move("568","251","100%","40",null,null);

                p.pan05_01.set_taborder("18");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.staLabel00_02.set_taborder("19");
                p.staLabel00_02.set_text("시공사 개인정보 수집•이용동의서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);

                p.Button00_00.set_taborder("20");
                p.Button00_00.set_text("동의서양식다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("244.00","0","131","40",null,null);

                p.panBtnFile.set_taborder("21");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.panTitle.set_taborder("22");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.grdCnstrPrvcClctUtztnWtcs.set_taborder("23");
                p.grdCnstrPrvcClctUtztnWtcs.set_binddataset("dsFile");
                p.grdCnstrPrvcClctUtztnWtcs.set_autofittype("col");
                p.grdCnstrPrvcClctUtztnWtcs.set_cssclass("grd_WF_FileAdd");
                p.grdCnstrPrvcClctUtztnWtcs.move("20.00","110","100%","40",null,null);

                p.panFile.set_taborder("24");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("1456","2096","100%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divCnstrCo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnstrCo.form
            obj = new Layout("mobile","",0,0,this.divCnstrCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCnstrCo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCnstrCo.form
            obj = new Layout("Layout0","",0,0,this.divCnstrCo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCnstrCo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divJobPlan.form.divLbsvcPbcprtPicNm.form
            obj = new Layout("default","",0,0,this.divJobPlan.form.divLbsvcPbcprtPicNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtLbsvcPbcprtPicNm.set_taborder("0");
                p.edtLbsvcPbcprtPicNm.set_cssclass("edt_WF_EdtSch");
                p.edtLbsvcPbcprtPicNm.set_readonly("true");
                p.edtLbsvcPbcprtPicNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtLbsvcPbcprtPicNm:-40","0","40","40",null,null);
            	}
            );
            this.divJobPlan.form.divLbsvcPbcprtPicNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form.divLbsvcPbcprtPicNm.form
            obj = new Layout("mobile","",0,0,this.divJobPlan.form.divLbsvcPbcprtPicNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divJobPlan.form.divLbsvcPbcprtPicNm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form.divLbsvcPbcprtPicNm.form
            obj = new Layout("Layout0","",0,0,this.divJobPlan.form.divLbsvcPbcprtPicNm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divJobPlan.form.divLbsvcPbcprtPicNm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divJobPlan.form.divMultiJobList.form
            obj = new Layout("default","",0,0,this.divJobPlan.form.divMultiJobList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.grdMultiJobList.set_taborder("0");
                p.grdMultiJobList.set_binddataset("dsJobList");
                p.grdMultiJobList.move("0","panGrdBtn:10","100.00%","200",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divJobPlan.form.divMultiJobList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form.divMultiJobList.form
            obj = new Layout("Layout0","",0,0,this.divJobPlan.form.divMultiJobList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divJobPlan.form.divMultiJobList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form.divMultiJobList.form
            obj = new Layout("Layout0","",0,0,this.divJobPlan.form.divMultiJobList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divJobPlan.form.divMultiJobList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divJobPlan.form
            obj = new Layout("default","",0,0,this.divJobPlan.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panTmnlRgn.set_taborder("72");
                p.panTmnlRgn.set_type("vertical");
                p.panTmnlRgn.move("0","46","100%","120",null,null);

                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("4");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","137",null,null);

                p.rdoCstrnJobSeCd.set_taborder("4");
                p.rdoCstrnJobSeCd.set_innerdataset(divJobPlan_form_rdoCstrnJobSeCd_innerdataset);
                p.rdoCstrnJobSeCd.set_codecolumn("codecolumn");
                p.rdoCstrnJobSeCd.set_datacolumn("datacolumn");
                p.rdoCstrnJobSeCd.set_direction("vertical");
                p.rdoCstrnJobSeCd.set_fittocontents("width");
                p.rdoCstrnJobSeCd.set_index("-1");
                p.rdoCstrnJobSeCd.move("124","145","100%","31",null,null);

                p.pan08.set_taborder("3");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_fittocontents("height");
                p.pan08.move("0","187","100.00%","146",null,null);

                p.Static01_00_00.set_taborder("12");
                p.Static01_00_00.set_text("일반터미널 지역 및 화물터미널 지역이 분리되어 두 지역 모두에서 작업을 진행 할 경우 각 1건씩 작업신고서를 따로 신청해주셔야합니다.");
                p.Static01_00_00.set_fittocontents("height");
                p.Static01_00_00.set_cssclass("sta_WF_Des");
                p.Static01_00_00.move("10.00","2820","100%","40",null,null);

                p.Static01.set_taborder("8");
                p.Static01.set_text("아웃소싱용역업무”는 공항공사와 아웃소싱용역 체결된 건으로 작업신고서 신청시 해당 감독자에게 자동으로 협의완료요청됩니다.");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.move("72","238","100%","40",null,null);

                p.staLabel05_01_00_00.set_taborder("5");
                p.staLabel05_01_00_00.set_text("용역/공사 담당자");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_00.move("10","98","100%","46",null,null);

                p.panLbsvcCstrnPic.set_taborder("6");
                p.panLbsvcCstrnPic.set_type("vertical");
                p.panLbsvcCstrnPic.set_flexgrow("1");
                p.panLbsvcCstrnPic.move("10.00","98","300","86",null,null);

                p.divLbsvcPbcprtPicNm.set_taborder("7");
                p.divLbsvcPbcprtPicNm.set_text("Div00");
                p.divLbsvcPbcprtPicNm.set_formscrollbartype("none none");
                p.divLbsvcPbcprtPicNm.set_formscrolltype("none");
                p.divLbsvcPbcprtPicNm.set_flexgrow("1");
                p.divLbsvcPbcprtPicNm.move("20.00","715","100%","40",null,null);

                p.staLabel05_00_00_00.set_taborder("9");
                p.staLabel05_00_00_00.set_text("지역구분");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.rdoRgnSeCd.set_taborder("10");
                p.rdoRgnSeCd.set_innerdataset(divJobPlan_form_rdoRgnSeCd_innerdataset);
                p.rdoRgnSeCd.set_codecolumn("codecolumn");
                p.rdoRgnSeCd.set_datacolumn("datacolumn");
                p.rdoRgnSeCd.set_direction("vertical");
                p.rdoRgnSeCd.set_fittocontents("width");
                p.rdoRgnSeCd.set_index("-1");
                p.rdoRgnSeCd.move("142","235","100%","40",null,null);

                p.pan04_00_00.set_taborder("11");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.set_fittocontents("height");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.staLabel05_00_00_00_00.set_taborder("13");
                p.staLabel05_00_00_00_00.set_text("건물구분");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_00.set_taborder("14");
                p.pan04_00_00_00.set_type("vertical");
                p.pan04_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00.move("20.00","205","96.88%","326",null,null);

                p.pan08_00.set_taborder("15");
                p.pan08_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00.set_spacing("0px 20px 10px 20px");
                p.pan08_00.set_flexwrap("wrap");
                p.pan08_00.set_horizontalgap("20");
                p.pan08_00.set_fittocontents("height");
                p.pan08_00.move("0","253","100.00%","378",null,null);

                p.panCgoTmnlRgn.set_taborder("87");
                p.panCgoTmnlRgn.set_type("vertical");
                p.panCgoTmnlRgn.move("20","384","96.88%","160",null,null);

                p.panCgoTmnlRgn04.set_taborder("92");
                p.panCgoTmnlRgn04.set_fittocontents("height");
                p.panCgoTmnlRgn04.set_flexwrap("wrap");
                p.panCgoTmnlRgn04.move("26","543","93.83%","40",null,null);

                p.CheckBox04_00_01.set_taborder("91");
                p.CheckBox04_00_01.set_text("제1물류단지(기타지역)");
                p.CheckBox04_00_01.set_truevalue("TSCWPLBLD021");
                p.CheckBox04_00_01.set_value("false");
                p.CheckBox04_00_01.move("263","543","174","40",null,null);

                p.CheckBox03_00_00.set_taborder("90");
                p.CheckBox03_00_00.set_text("사업/행정지원센터");
                p.CheckBox03_00_00.set_truevalue("TSCWPLBLD014");
                p.CheckBox03_00_00.set_value("false");
                p.CheckBox03_00_00.move("126","543","177","40",null,null);

                p.Static02_00_00.set_taborder("89");
                p.Static02_00_00.set_text("[제1물류단지]");
                p.Static02_00_00.move("26","543","100","40",null,null);

                p.panCgoTmnlRgn03.set_taborder("86");
                p.panCgoTmnlRgn03.set_fittocontents("height");
                p.panCgoTmnlRgn03.set_flexwrap("wrap");
                p.panCgoTmnlRgn03.move("277","410","100%","40",null,null);

                p.CheckBox08_00.set_taborder("85");
                p.CheckBox08_00.set_text("화물터미널지역(기타지역)");
                p.CheckBox08_00.set_fittocontents("width");
                p.CheckBox08_00.set_truevalue("TSCWPLBLD020");
                p.CheckBox08_00.set_value("false");
                p.CheckBox08_00.move("177","450","232","40",null,null);

                p.CheckBox06_00.set_taborder("84");
                p.CheckBox06_00.set_text("북측항공화물창고");
                p.CheckBox06_00.set_truevalue("TSCWPLBLD006");
                p.CheckBox06_00.set_value("false");
                p.CheckBox06_00.move("177","450","174","40",null,null);

                p.CheckBox05_00.set_taborder("83");
                p.CheckBox05_00.set_text("항공화물창고2(북)");
                p.CheckBox05_00.set_truevalue("TSCWPLBLD019");
                p.CheckBox05_00.move("537","410","177","40",null,null);

                p.Static03_01.set_taborder("82");
                p.Static03_01.move("414","410","100","40",null,null);

                p.panCgoTmnlRgn02.set_taborder("81");
                p.panCgoTmnlRgn02.set_fittocontents("height");
                p.panCgoTmnlRgn02.set_flexwrap("wrap");
                p.panCgoTmnlRgn02.move("177","410","100%","40",null,null);

                p.CheckBox04_00.set_taborder("80");
                p.CheckBox04_00.set_text("C동 운송대리점");
                p.CheckBox04_00.set_truevalue("TSCWPLBLD011");
                p.CheckBox04_00.set_value("false");
                p.CheckBox04_00.move("537","410","174","40",null,null);

                p.CheckBox03_00.set_taborder("79");
                p.CheckBox03_00.set_text("A동 운송대리점");
                p.CheckBox03_00.set_truevalue("TSCWPLBLD017");
                p.CheckBox03_00.set_value("false");
                p.CheckBox03_00.move("414","410","177","40",null,null);

                p.Static02_00.set_taborder("78");
                p.Static02_00.move("277","410","100","40",null,null);

                p.CheckBox04_00_00.set_taborder("88");
                p.CheckBox04_00_00.set_text("항공화물창고1(남)");
                p.CheckBox04_00_00.set_truevalue("TSCWPLBLD018");
                p.CheckBox04_00_00.set_value("false");
                p.CheckBox04_00_00.move("525","471","177","36",null,null);

                p.panCgoTmnlRgn01.set_taborder("77");
                p.panCgoTmnlRgn01.set_flexwrap("wrap");
                p.panCgoTmnlRgn01.set_fittocontents("height");
                p.panCgoTmnlRgn01.move("177","410","100%","40",null,null);

                p.CheckBox02_00.set_taborder("76");
                p.CheckBox02_00.set_text("화물터미널 E동");
                p.CheckBox02_00.set_truevalue("TSCWPLBLD022");
                p.CheckBox02_00.set_value("false");
                p.CheckBox02_00.move("537","410","156","40",null,null);

                p.CheckBox00_01.set_taborder("75");
                p.CheckBox00_01.set_text("화물터미널 C동");
                p.CheckBox00_01.set_truevalue("TSCWPLBLD005");
                p.CheckBox00_01.set_value("false");
                p.CheckBox00_01.move("414","410","174","40",null,null);

                p.chkCgoTmnl.set_taborder("74");
                p.chkCgoTmnl.set_text("화물터미널 A동");
                p.chkCgoTmnl.set_truevalue("TSCWPLBLD016");
                p.chkCgoTmnl.set_value("false");
                p.chkCgoTmnl.move("277","410","177","40",null,null);

                p.Static00_00.set_taborder("73");
                p.Static00_00.set_text("[화물터미널역]");
                p.Static00_00.move("177","410","100","40",null,null);

                p.panTmnlRgn03.set_taborder("25");
                p.panTmnlRgn03.set_fittocontents("height");
                p.panTmnlRgn03.set_flexwrap("wrap");
                p.panTmnlRgn03.move("180","469","100%","40",null,null);

                p.CheckBox06.set_taborder("28");
                p.CheckBox06.set_text("제2합동청사");
                p.CheckBox06.set_truevalue("TSCWPLBLD015");
                p.CheckBox06.set_value("false");
                p.CheckBox06.move("236.00","0","135","40",null,null);

                p.panTmnlRgn02.set_taborder("21");
                p.panTmnlRgn02.set_fittocontents("height");
                p.panTmnlRgn02.set_flexwrap("wrap");
                p.panTmnlRgn02.move("219","444","100%","40",null,null);

                p.Static02.set_taborder("22");
                p.Static02.set_text("[제2터미널역]");
                p.Static02.move("102","441","100","40",null,null);

                p.Static00.set_taborder("20");
                p.Static00.set_text("[제1터미널역]");
                p.Static00.move("631","390","100","40",null,null);

                p.CheckBox02.set_taborder("19");
                p.CheckBox02.set_text("탑승동");
                p.CheckBox02.set_truevalue("TSCWPLBLD002");
                p.CheckBox02.move("338","389","88","40",null,null);

                p.CheckBox00.set_taborder("16");
                p.CheckBox00.set_text("제1교통센터");
                p.CheckBox00.set_truevalue("TSCWPLBLD003");
                p.CheckBox00.move("60","397","135","40",null,null);

                p.chkPsgTmnl.set_taborder("17");
                p.chkPsgTmnl.set_text("제1여객터미널");
                p.chkPsgTmnl.set_truevalue("TSCWPLBLD001");
                p.chkPsgTmnl.move("223","399","151","40",null,null);

                p.panTmnlRgn01.set_taborder("18");
                p.panTmnlRgn01.set_flexwrap("wrap");
                p.panTmnlRgn01.set_fittocontents("height");
                p.panTmnlRgn01.move("20","394","100%","40",null,null);

                p.CheckBox03.set_taborder("23");
                p.CheckBox03.set_text("제2여객터미널");
                p.CheckBox03.set_truevalue("TSCWPLBLD007");
                p.CheckBox03.move("100.00","0","151","40",null,null);

                p.CheckBox04.set_taborder("24");
                p.CheckBox04.set_text("제2교통센터");
                p.CheckBox04.set_truevalue("TSCWPLBLD009");
                p.CheckBox04.move("236.00","0","135","40",null,null);

                p.CheckBox09.set_taborder("31");
                p.CheckBox09.set_text("인재개발원");
                p.CheckBox09.set_fittocontents("width");
                p.CheckBox09.set_truevalue("TSCWPLBLD013");
                p.CheckBox09.set_value("false");
                p.CheckBox09.move("757","468","116","40",null,null);

                p.CheckBox08.set_taborder("30");
                p.CheckBox08.set_text("AICC");
                p.CheckBox08.set_fittocontents("width");
                p.CheckBox08.set_truevalue("TSCWPLBLD012");
                p.CheckBox08.set_value("false");
                p.CheckBox08.move("359.00","0","88","40",null,null);

                p.CheckBox07.set_taborder("29");
                p.CheckBox07.set_text("기타부대건물");
                p.CheckBox07.set_truevalue("TSCWPLBLD008");
                p.CheckBox07.set_value("false");
                p.CheckBox07.move("359.00","0","129","40",null,null);

                p.CheckBox05.set_taborder("27");
                p.CheckBox05.set_text("제1청사동");
                p.CheckBox05.set_truevalue("TSCWPLBLD010");
                p.CheckBox05.set_value("false");
                p.CheckBox05.move("100.00","0","151","40",null,null);

                p.Static03.set_taborder("26");
                p.Static03.set_text("[기타그외지역]");
                p.Static03.move("89","473","100","40",null,null);

                p.staLabel05_00_00_00_00_00.set_taborder("32");
                p.staLabel05_00_00_00_00_00.set_text("보안구역여부");
                p.staLabel05_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.chkPrtcZone.set_taborder("33");
                p.chkPrtcZone.set_text("A/S(보호구역)");
                p.chkPrtcZone.set_truevalue("TSCWPLARA001");
                p.chkPrtcZone.set_value("false");
                p.chkPrtcZone.move("223","399","136","40",null,null);

                p.CheckBox00_00.set_taborder("34");
                p.CheckBox00_00.set_text("L/S(일반지역)");
                p.CheckBox00_00.set_truevalue("TSCWPLARA002");
                p.CheckBox00_00.set_value("false");
                p.CheckBox00_00.move("60","397","123","40",null,null);

                p.panJobZoneCd.set_taborder("35");
                p.panJobZoneCd.set_flexwrap("wrap");
                p.panJobZoneCd.set_fittocontents("height");
                p.panJobZoneCd.move("20","394","100%","40",null,null);

                p.Static03_00.set_taborder("36");
                p.Static03_00.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)");
                p.Static03_00.set_cssclass("sta_WF_Des");
                p.Static03_00.set_fittocontents("height");
                p.Static03_00.set_flexgrow("1");
                p.Static03_00.move("20.00","607","305","40",null,null);

                p.Panel02_01.set_taborder("37");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_horizontalgap("20");
                p.Panel02_01.set_verticalgap("4");
                p.Panel02_01.move("180","469","100%","40",null,null);

                p.pan04_00_00_00_00.set_taborder("38");
                p.pan04_00_00_00_00.set_type("vertical");
                p.pan04_00_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00_00.move("20.00","326","300","126",null,null);

                p.pan08_00_00.set_taborder("39");
                p.pan08_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00_00.set_spacing("0px 20px 10px 20px");
                p.pan08_00_00.set_flexwrap("wrap");
                p.pan08_00_00.set_horizontalgap("20");
                p.pan08_00_00.set_fittocontents("height");
                p.pan08_00_00.move("0","333","100.00%","137",null,null);

                p.Static04.set_taborder("40");
                p.Static04.set_text("항공기 이동지역(계류장, E구역)에서 작업할 경우 작업신고서와는 별도로 이동지역 작업신고서를 반드시 신청 및 승인 받아야 합니다. (필수사항)");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.set_flexgrow("1");
                p.Static04.move("488","628","302","40",null,null);

                p.staLabel05_00_00.set_taborder("41");
                p.staLabel05_00_00.set_text("작업장위치");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.edtWrsPstnCn.set_taborder("42");
                p.edtWrsPstnCn.move("84","247","100%","40",null,null);

                p.pan04_00.set_taborder("43");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("10.00","98","300","86",null,null);

                p.staLabel05_01_00.set_taborder("44");
                p.staLabel05_01_00.set_text("총 작업인원");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.edtTotalJobNope.set_taborder("45");
                p.edtTotalJobNope.move("568","251","100%","40",null,null);

                p.pan05_01.set_taborder("46");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.pan08_01.set_taborder("47");
                p.pan08_01.set_cssclass("pal_WF_DtlBg");
                p.pan08_01.set_fittocontents("height");
                p.pan08_01.set_spacing("0px 20px 10px 20px");
                p.pan08_01.set_flexwrap("wrap");
                p.pan08_01.set_horizontalgap("20");
                p.pan08_01.move("0","570","100.00%","96",null,null);

                p.staLabel05_00_00_01.set_taborder("48");
                p.staLabel05_00_00_01.set_text("작업시작일");
                p.staLabel05_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_01.move("10","98","100%","46",null,null);

                p.calJobBgngYmd.set_taborder("49");
                p.calJobBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calJobBgngYmd.move("67","623","145","40",null,null);

                p.pan04_00_01.set_taborder("50");
                p.pan04_00_01.set_type("vertical");
                p.pan04_00_01.set_flexgrow("1");
                p.pan04_00_01.set_fittocontents("height");
                p.pan04_00_01.set_verticalgap("4");
                p.pan04_00_01.move("10.00","98","300","130",null,null);

                p.staLabel05_01_00_01.set_taborder("51");
                p.staLabel05_01_00_01.set_text("작업종료일");
                p.staLabel05_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_01.move("10","98","100%","46",null,null);

                p.calJobEndYmd.set_taborder("52");
                p.calJobEndYmd.set_dateformat("yyyy-MM-dd");
                p.calJobEndYmd.move("570","621","145","40",null,null);

                p.pan05_01_01.set_taborder("53");
                p.pan05_01_01.set_type("vertical");
                p.pan05_01_01.set_flexgrow("1");
                p.pan05_01_01.set_fittocontents("height");
                p.pan05_01_01.set_verticalgap("4");
                p.pan05_01_01.move("10.00","98","300","130",null,null);

                p.pan05_00.set_taborder("54");
                p.pan05_00.set_horizontalgap("20");
                p.pan05_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00.set_flexwrap("wrap");
                p.pan05_00.set_verticalgap("0");
                p.pan05_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00.set_fittocontents("height");
                p.pan05_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00.move("0","60","100.00%","140",null,null);

                p.Static06.set_taborder("56");
                p.Static06.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("732","792","100%","40",null,null);

                p.Static05.set_taborder("55");
                p.Static05.set_text("작업전 24시간 이전에 등록하시기 바랍니다.");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.set_fittocontents("height");
                p.Static05.move("382","802","100%","40",null,null);

                p.staLabel05_00_00_00_01.set_taborder("57");
                p.staLabel05_00_00_00_01.set_text("작업목적");
                p.staLabel05_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01.move("10","98","100%","46",null,null);

                p.rdoJobPrpsCd.set_taborder("58");
                p.rdoJobPrpsCd.set_innerdataset(divJobPlan_form_rdoJobPrpsCd_innerdataset);
                p.rdoJobPrpsCd.set_codecolumn("codecolumn");
                p.rdoJobPrpsCd.set_datacolumn("datacolumn");
                p.rdoJobPrpsCd.set_direction("vertical");
                p.rdoJobPrpsCd.set_fittocontents("width");
                p.rdoJobPrpsCd.set_value("0");
                p.rdoJobPrpsCd.set_index("0");
                p.rdoJobPrpsCd.move("142","235","100%","40",null,null);

                p.pan04_00_00_01.set_taborder("59");
                p.pan04_00_00_01.set_type("vertical");
                p.pan04_00_00_01.set_flexgrow("1");
                p.pan04_00_00_01.set_fittocontents("height");
                p.pan04_00_00_01.move("10.00","98","300","86",null,null);

                p.pan08_02.set_taborder("60");
                p.pan08_02.set_cssclass("pal_WF_DtlBg");
                p.pan08_02.set_spacing("0px 20px 10px 20px");
                p.pan08_02.set_flexwrap("wrap");
                p.pan08_02.set_horizontalgap("20");
                p.pan08_02.set_fittocontents("height");
                p.pan08_02.move("0","187","100%","97",null,null);

                p.panJobPrpsEtcCn.set_taborder("93");
                p.panJobPrpsEtcCn.set_cssclass("pal_WF_DtlBg");
                p.panJobPrpsEtcCn.set_spacing("0px 20px 10px 20px");
                p.panJobPrpsEtcCn.set_flexwrap("wrap");
                p.panJobPrpsEtcCn.set_horizontalgap("20");
                p.panJobPrpsEtcCn.set_fittocontents("height");
                p.panJobPrpsEtcCn.move("15","1017","100%","97",null,null);

                p.pan04_00_00_01_00_01.set_taborder("94");
                p.pan04_00_00_01_00_01.set_type("vertical");
                p.pan04_00_00_01_00_01.set_flexgrow("1");
                p.pan04_00_00_01_00_01.set_fittocontents("height");
                p.pan04_00_00_01_00_01.move("20","-1587","300","86",null,null);

                p.staLabel05_00_00_00_01_00_01.set_taborder("95");
                p.staLabel05_00_00_00_01_00_01.set_text("작업목적 기타내용");
                p.staLabel05_00_00_00_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01_00_01.move("0","-1587","100%","46",null,null);

                p.edtJobPrpsEtcCn.set_taborder("96");
                p.edtJobPrpsEtcCn.move("0","-1540","100%","40",null,null);

                p.staLabel05_00_00_00_01_00.set_taborder("61");
                p.staLabel05_00_00_00_01_00.set_text("공사작업명");
                p.staLabel05_00_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_01_00.set_taborder("62");
                p.pan04_00_00_01_00.set_type("vertical");
                p.pan04_00_00_01_00.set_flexgrow("1");
                p.pan04_00_00_01_00.set_fittocontents("height");
                p.pan04_00_00_01_00.move("10.00","98","300","86",null,null);

                p.pan08_02_00.set_taborder("63");
                p.pan08_02_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_02_00.set_spacing("0px 20px 10px 20px");
                p.pan08_02_00.set_flexwrap("wrap");
                p.pan08_02_00.set_horizontalgap("20");
                p.pan08_02_00.set_fittocontents("height");
                p.pan08_02_00.move("0","187","100%","97",null,null);

                p.edtCstrnJobNm.set_taborder("64");
                p.edtCstrnJobNm.move("78","1058","100%","40",null,null);

                p.staLabel05_00_00_00_01_00_00.set_taborder("65");
                p.staLabel05_00_00_00_01_00_00.set_text("작업내용");
                p.staLabel05_00_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01_00_00.set_flexgrow("1");
                p.staLabel05_00_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_01_00_00.set_taborder("66");
                p.pan04_00_00_01_00_00.set_type("vertical");
                p.pan04_00_00_01_00_00.set_flexgrow("1");
                p.pan04_00_00_01_00_00.set_fittocontents("height");
                p.pan04_00_00_01_00_00.set_verticalgap("4");
                p.pan04_00_00_01_00_00.move("10.00","98","300","220",null,null);

                p.pan08_02_00_00.set_taborder("67");
                p.pan08_02_00_00.set_spacing("0px 20px 10px 20px");
                p.pan08_02_00_00.set_flexwrap("wrap");
                p.pan08_02_00_00.set_horizontalgap("20");
                p.pan08_02_00_00.set_fittocontents("height");
                p.pan08_02_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_02_00_00.set_verticalgap("8");
                p.pan08_02_00_00.move("0","1088","100%","483",null,null);

                p.Static07.set_taborder("69");
                p.Static07.set_text("원활한 작업신고서 출력을 위해 [작업내용] 및 [다중 작업내용]은 전체 1300자 내로 작성해주시길 바랍니다.");
                p.Static07.set_fittocontents("height");
                p.Static07.set_cssclass("sta_WF_Des");
                p.Static07.move("982","1204","100%","40",null,null);

                p.Static08.set_taborder("70");
                p.Static08.set_text("다중작업인 경우 아래 표 기재");
                p.Static08.set_fittocontents("height");
                p.Static08.set_cssclass("sta_WF_Des");
                p.Static08.move("201","1198","100%","40",null,null);

                p.txtJobCn.set_taborder("68");
                p.txtJobCn.move("67","1157","100%","80",null,null);

                p.divMultiJobList.set_taborder("71");
                p.divMultiJobList.set_text("Div01");
                p.divMultiJobList.set_formscrollbartype("none none");
                p.divMultiJobList.set_formscrolltype("none");
                p.divMultiJobList.set_fittocontents("height");
                p.divMultiJobList.move("0","30","100%","290",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("공사(작업)구분");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divJobPlan.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form
            obj = new Layout("mobile","",0,0,this.divJobPlan.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divJobPlan.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobPlan.form
            obj = new Layout("Layout0","",0,0,this.divJobPlan.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divJobPlan.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divJobYmdJobCnList.form.divJobYmdJobCnList.form
            obj = new Layout("default","",0,0,this.divJobYmdJobCnList.form.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdJobYmdJobCnList.set_taborder("1");
                p.grdJobYmdJobCnList.set_binddataset("dsArtclList");
                p.grdJobYmdJobCnList.move("0","0","100.00%","300",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobYmdJobCnList.form.divJobYmdJobCnList.form
            obj = new Layout("Layout0","",0,0,this.divJobYmdJobCnList.form.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobYmdJobCnList.form.divJobYmdJobCnList.form
            obj = new Layout("Layout0","",0,0,this.divJobYmdJobCnList.form.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divJobYmdJobCnList.form
            obj = new Layout("default","",0,0,this.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("2");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.pan02.set_taborder("0");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_verticalgap("4");
                p.pan02.move("0","242","100.00%","497",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("화기작업(용접/그라인딩(불꽃발생), 신나사용 페인팅작업, 가연성원료 사용작업) 전 반드시 SMIS(안전관리정보시스템) 작업허가서 등록  ");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("91","411","100%","40",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("SMIS 작업허가서 : 1일(주/야간) 단위로 등록");
                p.Static01.set_cssclass("sta_WF_Des2");
                p.Static01.set_fittocontents("height");
                p.Static01.move("206","410","100%","40",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("공항소방대는 SMIS 작업허가서 등록 화기작업장 대하여 안전조치 점검 후 “허가증” 발급");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("321","410","100%","40",null,null);

                p.divJobYmdJobCnList.set_taborder("3");
                p.divJobYmdJobCnList.set_text("Div01");
                p.divJobYmdJobCnList.set_formscrollbartype("none none");
                p.divJobYmdJobCnList.set_formscrolltype("none");
                p.divJobYmdJobCnList.set_fittocontents("height");
                p.divJobYmdJobCnList.move("0","30","100%","300",null,null);

                p.sta00_00_01.set_taborder("1");
                p.sta00_00_01.set_text("■ 중요필드 일자별 입력 \"용접기/그라인더 사용\" 작업 변경 시 작업일자 1일전까지 반드시 변경사항 입력(위치 : My Page → 나의할일)");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100.00%","40",null,null);

                p.Static02_00.set_taborder("7");
                p.Static02_00.set_text("불시점검 중 SMIS 미등록 작업 / 안전조치 미흡 작업은 허가증 발급된 경우라도 작업 중단");
                p.Static02_00.set_cssclass("sta_WF_Des");
                p.Static02_00.set_fittocontents("height");
                p.Static02_00.move("321","410","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divJobYmdJobCnList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobYmdJobCnList.form
            obj = new Layout("mobile","",0,0,this.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divJobYmdJobCnList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJobYmdJobCnList.form
            obj = new Layout("Layout0","",0,0,this.divJobYmdJobCnList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divJobYmdJobCnList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPrvcWtcs.form
            obj = new Layout("default","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("■ 입주자서비스포털은 배정 받은 공간에 대한 시설물 설치(변경) 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집 이용하고자 합니다.\r\n내용을 자세히 읽은신 후 동의여부를 결정하야 주시길 바랍니다.");
                p.Static02.set_cssclass("sta_WF_Des004");
                p.Static02.set_fittocontents("height");
                p.Static02.move("71","3301","100.00%","47",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("개인정보 수집 이용내역");
                p.Static01.set_cssclass("sta_WF_Label");
                p.Static01.set_flexgrow("1");
                p.Static01.move("20","3286","100%","46",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("20","123","100.00%","100",null,null);

                p.Panel07.set_taborder("4");
                p.Panel07.set_flexgrow("1");
                p.Panel07.set_type("vertical");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("4");
                p.Panel07.move("20","3346","1100","200",null,null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","3336","100.00%","221",null,null);

                p.Static05.set_taborder("6");
                p.Static05.set_text("개인정보 수집•이용 동의 여부");
                p.Static05.set_cssclass("sta_WF_Label_E");
                p.Static05.move("137","3798","100%","46",null,null);

                p.chkPrvcClctEsntlAgreYn.set_taborder("7");
                p.chkPrvcClctEsntlAgreYn.set_truevalue("1");
                p.chkPrvcClctEsntlAgreYn.set_falsevalue("0");
                p.chkPrvcClctEsntlAgreYn.set_value("0");
                p.chkPrvcClctEsntlAgreYn.move("87","3847","46","40",null,null);

                p.Panel10.set_taborder("8");
                p.Panel10.set_type("vertical");
                p.Panel10.set_verticalgap("4");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("20","3771","1240","90",null,null);

                p.Panel09.set_taborder("9");
                p.Panel09.set_spacing("10px 20px 10px 20px");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_fittocontents("height");
                p.Panel09.move("0","268","100.00%","115",null,null);

                p.Static03.set_taborder("3");
                p.Static03.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다.\r\n그러나 동의를 거부할 경우 작업신고서 신청을 할 수 없습니다.");
                p.Static03.set_fittocontents("height");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_color("red");
                p.Static03.move("113","3670","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrvcWtcs.form
            obj = new Layout("Layout0","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrvcWtcs.form
            obj = new Layout("Layout0","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("협의/신청정보(작업신고서)");

                p.panForm.set_taborder("0");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0","100.00%","10000",null,null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("협의정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("100","30","100%","50",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.move("917","30","200","50",null,null);

                p.btnCnsltnInfo.set_taborder("4");
                p.btnCnsltnInfo.set_cssclass("btn_WF_ACMinus");
                p.btnCnsltnInfo.move("765","30","34","34",null,null);

                p.panCnsltnInfo.set_taborder("3");
                p.panCnsltnInfo.set_fittocontents("none");
                p.panCnsltnInfo.set_flexcrossaxisalign("end");
                p.panCnsltnInfo.set_minheight("70");
                p.panCnsltnInfo.set_maxheight("");
                p.panCnsltnInfo.move("1357","451","100.00%","70",null,null);

                p.divCnsltnInfo.set_taborder("5");
                p.divCnsltnInfo.set_text("신청자정보");
                p.divCnsltnInfo.set_cssclass("div_WF_Bg");
                p.divCnsltnInfo.set_fittocontents("height");
                p.divCnsltnInfo.move("1710","288","100.00%","549",null,null);

                p.staSubTitle00.set_taborder("6");
                p.staSubTitle00.set_text("주관사");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("-5","582","100%","50",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 10px 0px 10px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("1220","582","213","50",null,null);

                p.panSprvsnCo.set_taborder("8");
                p.panSprvsnCo.set_fittocontents("none");
                p.panSprvsnCo.set_flexcrossaxisalign("end");
                p.panSprvsnCo.set_minheight("70");
                p.panSprvsnCo.set_maxheight("");
                p.panSprvsnCo.move("-5","582","100%","70",null,null);

                p.btnSprvsnCo.set_taborder("9");
                p.btnSprvsnCo.set_cssclass("btn_WF_ACMinus");
                p.btnSprvsnCo.move("1285","477","34","34",null,null);

                p.divSprvsnCo.set_taborder("10");
                p.divSprvsnCo.set_text("신청정보");
                p.divSprvsnCo.set_cssclass("div_WF_Bg");
                p.divSprvsnCo.set_fittocontents("height");
                p.divSprvsnCo.move("1420","779","100.00%","620",null,null);

                p.divCnstrCo.set_taborder("11");
                p.divCnstrCo.set_text("신청정보");
                p.divCnstrCo.set_cssclass("div_WF_Bg");
                p.divCnstrCo.set_fittocontents("height");
                p.divCnstrCo.move("1850","573","100%","487",null,null);

                p.divJobPlan.set_taborder("12");
                p.divJobPlan.set_text("신청정보");
                p.divJobPlan.set_cssclass("div_WF_Bg");
                p.divJobPlan.set_fittocontents("height");
                p.divJobPlan.move("0","1588","100.00%","1822",null,null);

                p.divJobYmdJobCnList.set_taborder("13");
                p.divJobYmdJobCnList.set_text("신청정보");
                p.divJobYmdJobCnList.set_cssclass("div_WF_Bg");
                p.divJobYmdJobCnList.set_fittocontents("height");
                p.divJobYmdJobCnList.move("1390","3115","100.00%","537",null,null);

                p.staSubTitle01.set_taborder("14");
                p.staSubTitle01.set_text("시공사");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("100","1160","100%","50",null,null);

                p.Panel02_00.set_taborder("15");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_spacing("0px 10px 0px 10px");
                p.Panel02_00.move("916","1160","200","50",null,null);

                p.panCnstrCo.set_taborder("16");
                p.panCnstrCo.set_fittocontents("none");
                p.panCnstrCo.set_flexcrossaxisalign("end");
                p.panCnstrCo.set_minheight("70");
                p.panCnstrCo.set_maxheight("");
                p.panCnstrCo.move("100","1160","100%","70",null,null);

                p.btnCnstrCo.set_taborder("17");
                p.btnCnstrCo.set_cssclass("btn_WF_ACMinus");
                p.btnCnstrCo.move("773","970","34","34",null,null);

                p.staSubTitle02.set_taborder("18");
                p.staSubTitle02.set_text("작업계획");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.set_maxheight("");
                p.staSubTitle02.move("213","1690","100%","50",null,null);

                p.Panel03_00.set_taborder("19");
                p.Panel03_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("end");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_spacing("0px 10px 0px 10px");
                p.Panel03_00.move("1033","1690","200","50",null,null);

                p.panJobPlan.set_taborder("20");
                p.panJobPlan.set_fittocontents("none");
                p.panJobPlan.set_flexcrossaxisalign("end");
                p.panJobPlan.set_minheight("70");
                p.panJobPlan.set_maxheight("");
                p.panJobPlan.move("213","1690","100%","70",null,null);

                p.btnJobPlan.set_taborder("21");
                p.btnJobPlan.set_cssclass("btn_WF_ACMinus");
                p.btnJobPlan.move("1150","1520","34","34",null,null);

                p.staSubTitle03.set_taborder("22");
                p.staSubTitle03.set_text("중요필드 일자별 입력");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("40","3210","100%","50",null,null);

                p.Panel00.set_taborder("23");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("860","3210","200","50",null,null);

                p.panJobYmdJobCnList.set_taborder("24");
                p.panJobYmdJobCnList.set_fittocontents("none");
                p.panJobYmdJobCnList.set_flexcrossaxisalign("end");
                p.panJobYmdJobCnList.set_minheight("70");
                p.panJobYmdJobCnList.set_maxheight("");
                p.panJobYmdJobCnList.move("40","3210","100%","70",null,null);

                p.btnJobYmdJobCnList.set_taborder("25");
                p.btnJobYmdJobCnList.set_cssclass("btn_WF_ACMinus");
                p.btnJobYmdJobCnList.move("740","3176","34","34",null,null);

                p.staSubTitle02_00.set_taborder("26");
                p.staSubTitle02_00.set_text("시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1866","3263","100%","50",null,null);

                p.btnPrvcWtcs.set_taborder("27");
                p.btnPrvcWtcs.set_cssclass("btn_WF_ACMinus");
                p.btnPrvcWtcs.set_visible("true");
                p.btnPrvcWtcs.move("3030","3280","34","34",null,null);

                p.Panel00_02.set_taborder("28");
                p.Panel00_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_02.set_spacing("0px 10px 0px 10px");
                p.Panel00_02.set_flexcrossaxisalign("center");
                p.Panel00_02.set_flexmainaxisalign("end");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.move("3000","3263","136","50",null,null);

                p.panPrvcWtcs.set_taborder("29");
                p.panPrvcWtcs.set_flexcrossaxisalign("end");
                p.panPrvcWtcs.set_fittocontents("none");
                p.panPrvcWtcs.set_minheight("70");
                p.panPrvcWtcs.set_maxheight("");
                p.panPrvcWtcs.move("0","3293","100%","70",null,null);

                p.divPrvcWtcs.set_taborder("30");
                p.divPrvcWtcs.set_text("Div03");
                p.divPrvcWtcs.set_formscrollbartype("none none");
                p.divPrvcWtcs.set_formscrolltype("none");
                p.divPrvcWtcs.set_fittocontents("height");
                p.divPrvcWtcs.move("0","4087","100.00%","393",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCnsltnInfo.form.rdoArptPbcprtPicChcYn","value","dsJobWtpl","arptPbcprtPicExnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","value","dsJobWtpl","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPrvcWtcs.form.Static05","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSprvsnCo.form.rdoSprvsnCoSmYn","value","dsJobWtpl","sprvsnCoSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSprvsnCo.form.edtSprvsnCoNm","value","dsJobWtpl","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSprvsnCo.form.edtSprvsnCoPicNm","value","dsJobWtpl","sprvsnCoPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divCnstrCo.form.rdoCnstrSmYn","value","dsJobWtpl","cnstrSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divCnstrCo.form.edtCnstrCoNm","value","dsJobWtpl","cnstrCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divCnstrCo.form.edtCnstrCoPicNm","value","dsJobWtpl","cnstrPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divJobPlan.form.rdoCstrnJobSeCd","value","dsJobWtpl","cstrnJobSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divJobPlan.form.divLbsvcPbcprtPicNm.form.edtLbsvcPbcprtPicNm","value","dsMst","lbsvcPbcprtPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divJobPlan.form.rdoRgnSeCd","value","dsJobWtpl","rgnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divJobPlan.form.edtWrsPstnCn","value","dsJobWtpl","wrsPstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divJobPlan.form.edtTotalJobNope","value","dsJobWtpl","totalJobNope");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divJobPlan.form.calJobBgngYmd","value","dsJobWtpl","jobBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divJobPlan.form.calJobEndYmd","value","dsJobWtpl","jobEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divJobPlan.form.rdoJobPrpsCd","value","dsJobWtpl","jobPrpsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divJobPlan.form.edtJobPrpsEtcCn","value","dsJobWtpl","jobPrpsEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divJobPlan.form.edtCstrnJobNm","value","dsJobWtpl","cstrnJobNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divJobPlan.form.txtJobCn","value","dsJobWtpl","jobCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCnsltnInfo.form.rdoFcltyInstlChcRtosRltnJobYn","value","dsJobWtpl","fcltyInstlChcRtosRltnJobYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCnsltnInfo.form.divEdtPop01.form.Edit00","value","dsJobWtpl","basctAplcfmInfoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSprvsnCo.form.rdoSprvsnCoPbcprtEmpYn","value","dsJobWtpl","sprvsnCoPbcprtEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.edtSprvsnCoPbcprtEmpNm","value","dsJobWtpl","sprvsnCoPbcprtEmpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSprvsnCo.form.medSprvsnCoCtinfoNo","value","dsJobWtpl","sprvsnCoCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divCnstrCo.form.medCnstrCoCtinfoNo","value","dsJobWtpl","cnstrCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divCnsltnInfo.form.divEdtPop01.form.Edit00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divCnsltnInfo.form.rdoFcltyInstlChcRtosRltnJobYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divCnsltnInfo.form.rdoArptPbcprtPicChcYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divCnsltnInfo.form.chkArch","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divCnsltnInfo.form.CheckBox04","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divCnsltnInfo.form.CheckBox02","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divCnsltnInfo.form.CheckBox05","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divCnsltnInfo.form.CheckBox01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divCnsltnInfo.form.CheckBox00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSprvsnCo.form.rdoSprvsnCoSmYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSprvsnCo.form.rdoSprvsnCoPbcprtEmpYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.edtSprvsnCoPbcprtEmpNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSprvsnCo.form.edtSprvsnCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSprvsnCo.form.edtSprvsnCoPicNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSprvsnCo.form.medSprvsnCoCtinfoNo","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divCnstrCo.form.edtCnstrCoNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divCnstrCo.form.edtCnstrCoPicNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divCnstrCo.form.medCnstrCoCtinfoNo","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divCnstrCo.form.rdoCnstrSmYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divJobPlan.form.rdoCstrnJobSeCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divJobPlan.form.rdoRgnSeCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divJobPlan.form.chkPsgTmnl","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divJobPlan.form.CheckBox00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divJobPlan.form.CheckBox02","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divJobPlan.form.CheckBox03","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divJobPlan.form.CheckBox04","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divJobPlan.form.CheckBox05","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divJobPlan.form.CheckBox06","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divJobPlan.form.CheckBox08","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divJobPlan.form.CheckBox09","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divJobPlan.form.CheckBox07","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divJobPlan.form.chkCgoTmnl","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divJobPlan.form.CheckBox00_01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divJobPlan.form.CheckBox02_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divJobPlan.form.CheckBox03_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divJobPlan.form.CheckBox04_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divJobPlan.form.CheckBox04_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divJobPlan.form.CheckBox05_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divJobPlan.form.CheckBox06_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divJobPlan.form.CheckBox08_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divJobPlan.form.CheckBox03_00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divJobPlan.form.CheckBox04_00_01","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divJobPlan.form.CheckBox00_00","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","divJobPlan.form.chkPrtcZone","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divJobPlan.form.edtWrsPstnCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divJobPlan.form.edtTotalJobNope","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divJobPlan.form.calJobBgngYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divJobPlan.form.calJobEndYmd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divJobPlan.form.rdoJobPrpsCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divJobPlan.form.edtJobPrpsEtcCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divJobPlan.form.edtCstrnJobNm","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","divJobPlan.form.txtJobCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divJobPlan.form.divMultiJobList.form.grdMultiJobList","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","divCnsltnInfo.form.divEdtPop01.form.btnBasctAplcfmInfo","visible","dsAtrb","vsAplcfmWrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","divCnsltnInfo.form.staArptPbcprtPicChcYn00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","divCnsltnInfo.form.staArptPbcprtPicChcYn00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","divCnsltnInfo.form.staArptPbcprtPicChcYn","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","divCnsltnInfo.form.staArptPbcprtPicSpvsrId","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","divCnsltnInfo.form.staDstrtnPrnmntDt","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","divSprvsnCo.form.staLabel03_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","divSprvsnCo.form.staLabel03_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","divSprvsnCo.form.staLabel05_01_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","divSprvsnCo.form.staLabel05_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","divSprvsnCo.form.Static01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divSprvsnCo.form.staLabel05_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","divSprvsnCo.form.staLabel00_02","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divCnstrCo.form.staLabel03_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divCnstrCo.form.staLabel05_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divCnstrCo.form.staLabel05_01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divCnstrCo.form.staLabel05_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divCnstrCo.form.staLabel00_02","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divJobPlan.form.staLabel03_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divJobPlan.form.staLabel05_01_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divJobPlan.form.staLabel05_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","divJobPlan.form.staLabel05_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","divJobPlan.form.staLabel05_00_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","divJobPlan.form.staLabel05_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","divJobPlan.form.staLabel05_01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","divJobPlan.form.staLabel05_00_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","divJobPlan.form.staLabel05_01_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","divJobPlan.form.staLabel05_00_00_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","divJobPlan.form.staLabel05_00_00_00_01_00_01","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","divJobPlan.form.staLabel05_00_00_00_01_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","divJobPlan.form.staLabel05_00_00_00_01_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.btnPop","visible","dsAtrb","vsAplcfmWrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","divJobPlan.form.divLbsvcPbcprtPicNm.form.btnPop","visible","dsAtrb","vsAplcfmWrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","divJobPlan.form.divMultiJobList.form.panGrdBtn","visible","dsAtrb","vsAplcfmWrt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST006S02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006S02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST006S02.xfdl
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
        	this.dsMst.addEventHandler("onload", this.dsMst_onload, this);
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 작업계획서 Dataset
            this.dsJobWtpl = this.lookup("dsJobWtpl");
        	this.dsJobWtpl.addEventHandler("onvaluechanged", this.dsJobWtpl_onvaluechanged, this);
        	this.dsJobWtpl.addEventHandler("cancolumnchange", this.dsJobWtpl_cancolumnchange, this);
        	// 공항공사담당자 Dataset
            this.dsArptCstrnPic = this.lookup("dsArptCstrnPic");
        	// 다중작업목록 Dataset
            this.dsJobList = this.lookup("dsJobList");
        	this.dsJobList.addEventHandler("onvaluechanged", this.dsJobList_onvaluechanged, this);
        	this.dsJobList.addEventHandler("cancolumnchange", this.dsJobList_cancolumnchange, this);
        	// 일별중요항목목록 Dataset
            this.dsArtclList = this.lookup("dsArtclList");
        	this.dsArtclList.addEventHandler("onvaluechanged", this.dsArtclList_onvaluechanged, this);
        	this.dsArtclList.addEventHandler("cancolumnchange", this.dsArtclList_cancolumnchange, this);
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
        	// 공통코드 불러오기
        	this.cfnComCdLoad({ dsTpbizCd:"RAAPTYPE" });  // 업종

        	// 작업계획서 DS onvaluechanged 이벤트 호출
        	this.dsJobWtpl_onvaluechanged(this.dsJobWtpl, { columnid:"" });
        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");
        };

        this.dsMst_onload = function(obj,e)
        {
        	this.resetScroll();
        };

        this.dsMst_onvaluechanged= function(obj,e)
        {
        	// 공사(작업)분야
        	if(this.gfnIsNull(e.columnid) || e.columnid == "cstrnJobFldCd") {
        	    // 조회시 값 설정
        		if(this.gfnIsNull(e.columnid)) {
        		    var cstrnJobFldCd = this.dsMst.getColumn(0, "cstrnJobFldCd") || "";
        			this.cfnToArray(this.divCnsltnInfo.form.panCstrnJobFld).forEach(function(v) {
        			    v.value = cstrnJobFldCd.indexOf(v.truevalue) == -1 ? v.falsevalue : v.truevalue;
        			});
        		}
        	}

        	this.resetScroll();
        };

        this.dsJobWtpl_onvaluechanged = function(obj,e)
        {
        	// 신규 건 시 처리
        //     if(this.gfnIsNull(e.columnid) && this.gfnIsNull(this.dsJobWtpl.getColumn(0, "aplcntNm"))) {
        // 		this.dsJobWtpl.setColumn(0, "aplcntJbpsNm"  , this.objApp.gdsUser.getColumn(0, "userJbpsNm"  ));  // 신청자 직위
        // 		this.dsJobWtpl.setColumn(0, "aplcntMblTelno", this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 신청자 휴대폰 번호
        // 		this.dsJobWtpl.setColumn(0, "aplcntNm"      , this.objApp.gdsUser.getColumn(0, "userNm"      ));  // 신청자 명
        // 		this.dsJobWtpl.setColumn(0, "aplcntOgdpNm"  , this.objApp.gdsUser.getColumn(0, "coNm"        ));  // 신청자 소속
        // 	}

        	// 시설물설치(변경), 원상회복(퇴거) 관련 작업여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "fcltyInstlChcRtosRltnJobYn") {
        		this.divCnsltnInfo.form.panBasctAplcfmInfo.visible =  obj.getColumn(0, "fcltyInstlChcRtosRltnJobYn") == "1";  // 연관신청서정보
        		if(e.columnid) {
        		    this.dsMst.setColumn    (0, "basctAplcfmInfoId", "");  // 연관신청서정보ID
        			this.dsJobWtpl.setColumn(0, "basctAplcfmInfoNm", "");  // 연관신청서정보명
        		}
        	}

        	// 공항공사 담당자(감독자)
        	if(this.gfnIsNull(e.columnid) || e.columnid == "arptPbcprtPicExnCd") {
        	    // 공항공사 담당자
        	    this.divCnsltnInfo.form.panArptCstrnPic.visible = obj.getColumn(0, "arptPbcprtPicExnCd") == "1";
        		if(this.divCnsltnInfo.form.panArptCstrnPic.visible) {
        		    if(this.dsArptCstrnPic.rowcount == 0) {
        				this.dsArptCstrnPic.addRow();
        				this.dsArptCstrnPic.rowposition = -1;
        			}
        		} else {
        			this.dsArptCstrnPic.clearData();
        		}
        	}

        	// 주관사의 동일여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "sprvsnCoSmYn") {
        	    // 주관사 공사직원여부
        		this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible = obj.getColumn(0, "sprvsnCoSmYn") == "0";
        		// 신청자정보와동일 시
        		if(!this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible) {
        			obj.setColumn(0, "sprvsnCoPbcprtEmpYn", "");  // 주관사 공사직원여부
        		}

        		// 신청자정보와동일 시
        		if(!this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible) {
        			// 사용자 정보로 설정
        			obj.setColumn(0, "sprvsnCoNm"      , this.objApp.gdsUser.getColumn(0, "coNm"        ));  // 주관사 회사명
        			obj.setColumn(0, "sprvsnCoPicNm"   , this.objApp.gdsUser.getColumn(0, "userNm"      ));  // 주관사 담당자명
        			obj.setColumn(0, "sprvsnCoCtinfoNo", this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 주관사 연락처
        		} else if(e.columnid) {
        			obj.setColumn(0, "sprvsnCoNm"      , "");  // 주관사 회사명
        			obj.setColumn(0, "sprvsnCoPicNm"   , "");  // 주관사 담당자명
        			obj.setColumn(0, "sprvsnCoCtinfoNo", "");  // 주관사 연락처
        		}

        		this.divSprvsnCo.form.edtSprvsnCoNm.readonly       = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible;  // 주관사 회사명
        		this.divSprvsnCo.form.edtSprvsnCoPicNm.readonly    = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible;  // 주관사 담당자명
        		this.divSprvsnCo.form.medSprvsnCoCtinfoNo.readonly = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible;  // 주관사 연락처
        	}

        	// 주관사 공사직원
        	if(this.gfnIsNull(e.columnid) || e.columnid == "sprvsnCoPbcprtEmpYn") {
        		// 주관사 담당자명
        		this.divSprvsnCo.form.panSprvsnCoPicNm.visible    = obj.getColumn(0, "sprvsnCoPbcprtEmpYn") == "0" || obj.getColumn(0, "sprvsnCoSmYn") == "1";
        		// 주관사 공사직원
        		this.divSprvsnCo.form.panSprvsnCoCstrnEmp.visible = obj.getColumn(0, "sprvsnCoPbcprtEmpYn") == "1";
        	    // 주관사 개인정보 수집•이용동의서
        		this.divSprvsnCo.form.panFile.visible             = obj.getColumn(0, "sprvsnCoPbcprtEmpYn") == "0";

        		// 주관사 담당자명
        		if(!this.divSprvsnCo.form.panSprvsnCoPicNm.visible) {
        			obj.setColumn(0, "sprvsnCoPicNm", "");
        		}

        		// 주관사 공사직원
        		if(!this.divSprvsnCo.form.panSprvsnCoCstrnEmp.visible) {
        			obj.setColumn(0, "sprvsnCoPbcprtEmpId", "");
        			obj.setColumn(0, "sprvsnCoPbcprtEmpNm", "");
        		}

        		// 주관사 개인정보 수집•이용동의서
        		if(!this.divSprvsnCo.form.panFile.visible) {
        			// 주관사 개인정보 수집•이용동의서 초기화
        			// 첨부 파일 삭제
        			if(this.RaonkUpload.cfnDelAtfl) {
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs).cfnDelAtfl();
        				this.dsFile.setColumn(0, "A110", "");  // 첨부파일명
        			}
        		}
        	}

        	// 시공사의 동일여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "cnstrSmYn") {
        	    // 시공사 개인정보 수집•이용동의서
        		this.divCnstrCo.form.panFile.visible = obj.getColumn(0, "cnstrSmYn") == "0";

        		// 신청자정보와동일 시
        		if(!this.divCnstrCo.form.panFile.visible) {
        			// 사용자 정보로 설정
        			obj.setColumn(0, "cnstrCoNm"    , this.objApp.gdsUser.getColumn(0, "coNm"        ));  // 시공사 회사명
        			obj.setColumn(0, "cnstrPicNm"   , this.objApp.gdsUser.getColumn(0, "userNm"      ));  // 시공사 담당자명
        			obj.setColumn(0, "cnstrCtinfoNo", this.objApp.gdsUser.getColumn(0, "userMblTelno"));  // 시공사 연락처

        			// 시공사 개인정보 수집•이용동의서 초기화
        			// 첨부 파일 삭제
        			if(this.RaonkUpload.cfnDelAtfl) {
        				this.cfnSetAtflInfo(this.RaonkUpload, this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs).cfnDelAtfl();
        				this.dsFile.setColumn(0, "A120", "");  // 첨부파일명
        			}
                } else if(e.columnid) {
        			obj.setColumn(0, "cnstrCoNm"    , "");  // 시공사 회사명
        			obj.setColumn(0, "cnstrPicNm"   , "");  // 시공사 담당자명
        			obj.setColumn(0, "cnstrCtinfoNo", "");  // 시공사 연락처
        			// 시공사 개인정보 수집•이용동의서 동의여부
        			obj.setColumn(0, "prvcClctEsntlAgreYn", "0");
        		}

        		this.divCnstrCo.form.edtCnstrCoNm.readonly       = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divCnstrCo.form.panFile.visible;  // 주관사 회사명
        		this.divCnstrCo.form.edtCnstrCoPicNm.readonly    = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divCnstrCo.form.panFile.visible;  // 주관사 담당자명
        		this.divCnstrCo.form.medCnstrCoCtinfoNo.readonly = this.cfnGetAtrb.call("roAplcfmWrt") || !this.divCnstrCo.form.panFile.visible;  // 주관사 연락처
        	}

        	// 공사(작업) 구분
        	if(this.gfnIsNull(e.columnid) || e.columnid == "cstrnJobSeCd") {
        		var cstrnJobSeCd = obj.getColumn(0, "cstrnJobSeCd");    // 공사(작업) 구분
        		this.divJobPlan.form.panLbsvcCstrnPic.visible = cstrnJobSeCd == "0";  // 용역/공사 담당자(성명기입)
        	}

        	// 지역구분
        	if(this.gfnIsNull(e.columnid) || e.columnid == "rgnSeCd") {
        		var rgnSeCd = obj.getColumn(0, "rgnSeCd");    // 지역구분
        		this.divJobPlan.form.panTmnlRgn.visible    = rgnSeCd == "1";  // 제1,2터미널지역/기타그외지역
        		this.divJobPlan.form.panCgoTmnlRgn.visible = rgnSeCd == "0";  // 화물터미널지역/물류단지
        	    // 건물구분코드 초기화
        		var bldgSeCds = "panTmnlRgn01,panTmnlRgn02,panTmnlRgn03,panCgoTmnlRgn01,panCgoTmnlRgn02,panCgoTmnlRgn03,panCgoTmnlRgn04".split(",");
        		var bldgSeCd = this.dsJobWtpl.getColumn(0, "bldgSeCd");
        		var div = this.divJobPlan.form;
        		var cfnToArray = this.cfnToArray;
        		bldgSeCds.forEach(function(v) { cfnToArray(div[v]).forEach(function(c) { c.value = (c instanceof CheckBox && bldgSeCd && bldgSeCd.indexOf(c.truevalue) != -1) ? c.truevalue : c.falsevalue; });});
        	}

        	// 건물구분
        // 	if(this.gfnIsNull(e.columnid)) {
        // 	    var rgnSeCd = obj.getColumn(0, "rgnSeCd");  // 지역구분
        // 		if(!this.gfnIsNull(rgnSeCd)) {
        // 		    var bldgSeCd = obj.getColumn(0, "bldgSeCd");  // 건물구분코드
        // 			var bldgSeCds = (rgnSeCd == "1" ? "panTmnlRgn01,panTmnlRgn02,panTmnlRgn03" : "panCgoTmnlRgn01,panCgoTmnlRgn02,panCgoTmnlRgn03,panCgoTmnlRgn04").split(",");
        // 			var div = this.divJobPlan.form;
        // 			var cfnToArray = this.cfnToArray;
        // 			bldgSeCds.forEach(function(v) {
        // 				cfnToArray(div[v]).forEach(function(c) {
        // 				    if(c instanceof CheckBox) {
        // 						c.value = bldgSeCd && bldgSeCd.indexOf(c.truevalue) != -1 ? c.truevalue : c.falsevalue;
        // 					}
        // 				});
        // 			});
        // 		}
        // 	}

        	// 보안구역여부
        	if(this.gfnIsNull(e.columnid)) {
        	    var jobZoneCd = obj.getColumn(0, "jobZoneCd");  // 작업구역코드

                console.log("jobZoneCd===" + jobZoneCd);

        		if(!this.gfnIsNull(jobZoneCd)) {
        			this.cfnToArray(this.divJobPlan.form.panJobZoneCd).forEach(function(v) {
        				v.value = v instanceof CheckBox && jobZoneCd && jobZoneCd.indexOf(v.truevalue) != -1 ? v.truevalue : v.falsevalue;
        			});
        		}
        	}

        	// 작업목적
        	if(this.gfnIsNull(e.columnid) || e.columnid == "jobPrpsCd") {
        	    var jobPrpsCd = obj.getColumn(0, "jobPrpsCd");  // 작업목적코드
        		// 작업목적 기타내용
        		this.divJobPlan.form.panJobPrpsEtcCn.visible = jobPrpsCd && jobPrpsCd.indexOf("TSCWPLOBJ005") != -1;
        	}

        	// 시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서
        	this.panPrvcWtcs.visible = (obj.getColumn(0, "sprvsnCoSmYn") == "1" || obj.getColumn(0, "cnstrSmYn") == "1");
            this.divPrvcWtcs.visible = this.panPrvcWtcs.visible;

            // 중요필드 일자별 목록 조회
            if(e.columnid == "jobBgngYmd" || e.columnid == "jobEndYmd") {
        		if(!this.gfnIsNull(obj.getColumn(0, "jobBgngYmd")) && !this.gfnIsNull(obj.getColumn(0, "jobEndYmd"))) {
        			this.cfnSrvcCall(this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.name);
        		}
        	}

        	this.resetScroll();
        };

        this.dsJobWtpl_cancolumnchange = function(obj,e)
        {
            // 작업시작일,작업종료일
        	if("jobBgngYmd,jobEndYmd".indexOf(e.columnid) != -1) {
        	    var jobBgngYmd = e.columnid == "jobBgngYmd" ? e.newvalue : this.dsJobWtpl.getColumn(0, "jobBgngYmd");  // 작업시작일
        		var jobEndYmd  = e.columnid == "jobEndYmd"  ? e.newvalue : this.dsJobWtpl.getColumn(0, "jobEndYmd" );  // 작업종료일

        		if(!this.gfnIsNull(jobBgngYmd) && !this.gfnIsNull(jobEndYmd)) {
        			if(jobBgngYmd > jobEndYmd) {
        				// {0} 시작일자가 종료일자보다 큽니다.
        				this.gfnAlertMsg("MSG_012", "MSG_012", ["작업 "]);
        				return false;
        			} else if(jobEndYmd > this.gfnAddDate(jobBgngYmd, 6)) {
        				// 작업 시작일과 종료일은 1주일 이내만 가능합니다.
        				this.gfnAlertMsg("CST_006", "CST_006");
        				return false;
        			}
        		}
        	}

        	return true;
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// 그리드 Expr 실행
        	// ----------------
        	// 공항공사 담당자
        	this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.redrawExprCell();
        	// 주관사 개인정보 수집•이용동의서
        	this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs.redrawExprCell();
        	// 시공사 개인정보 수집•이용동의서
        	this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs.redrawExprCell();
        	// 다중작업목록
        	this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.redrawExprCell();
        	// 중요필드 일자별 입력
        	this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.redrawExprCell();

        	// 다중작업목록 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsAplcfmWrt")) {
        		this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.setRealColSize("body", 0, this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.upsize);
        	} else {
        		this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.upsize = this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.upsize
        												                         ? this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.upsize
        													                     : this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.getRealColSize(0, "size")
        													                     ;
        		this.divJobPlan.form.divMultiJobList.form.grdMultiJobList.setRealColSize("body", 0, 0);
        	}
        };

        this.dsJobList_onvaluechanged = function(obj,e)
        {
        	if(!e.columnid) {
        		this.cfnGridResizeHeight(this.divJobPlan.form.divMultiJobList.form.grdMultiJobList);
        	}

        	this.resetScroll();
        };

        this.dsJobList_cancolumnchange = function(obj,e)
        {
        console.log(e.columnid);

        // 	if(e.columnid == "no") {
        // 		if(this.dsJobList.findRowExpr("no == '" + e.newvalue + "' && currow != " + obj.rowposition) != -1) {
        // 		    // 이미 등록(추가)된 {0}입니다.
        // 			this.gfnAlertMsg("CST_005", "CST_005", ["순번"]);
        // 			return false;
        // 		}
        // 	}

        	return true;
        };

        this.dsArtclList_onvaluechanged = function(obj,e)
        {
        	if(!e.columnid) {
        		this.cfnGridResizeHeight(this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList);
        	}

        	// 중요필드 일자별 편집 가능 시
        // 	if(!this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.readonly && !e.columnid) {
        // 	    this.dsArtclList.updatecontrol = false;
        // 		for(var i = 0; i < this.dsArtclList.rowcount; i++) {
        // 			this.dsArtclList.setRowType(i, Dataset.ROWTYPE_INSERT);
        // 		}
        // 		this.dsArtclList.updatecontrol = true;
        // 	}

        	// 용접기그라인더사용여부,시작시간,종료시간
        	if("wdmchnGrdrUseYn,bgngTm,endTm".indexOf(e.columnid) != -1) {
        	    this.dsDayNght.filterstr = "'''.indexOf(cdId) != -1";
        		if(obj.getColumn(obj.rowposition, "wdmchnGrdrUseYn") == "1") {  // 용접기그라인더사용여부(여)
        		    obj.setColumn(obj.rowposition, "wdmchnDayNghtSeCd", "");  // 용접기주야간구분코드
        			var bgngTm = obj.getColumn(obj.rowposition, "bgngTm");  // 시작시간
        			var endTm  = obj.getColumn(obj.rowposition, "endTm" );  // 종료시간
        			if(!this.gfnIsNull(bgngTm) || !this.gfnIsNull(endTm)) {
        				bgngTm = parseInt(bgngTm);  // 시작시간
        				endTm  = parseInt(endTm );  // 종료시간
        				var wdmchnDayNghtSeCd = [];
        				// 주간확인
        				if((bgngTm >= 9 && bgngTm < 18) || (endTm > 9 && endTm <= 18) || (bgngTm < 9 && endTm > 9)) {
        					wdmchnDayNghtSeCd.push("1");   // 주간
        				}
        				// 야간확인
        				if(bgngTm < 9 || bgngTm >= 18 || endTm <= 9 || endTm > 18) {
        					wdmchnDayNghtSeCd.push("2");   // 야간
        				}
        				// 종일확인
        				if(wdmchnDayNghtSeCd.indexOf("1") != -1 && wdmchnDayNghtSeCd.indexOf("2") != -1) {
        					wdmchnDayNghtSeCd.push("3");   // 종일
        				}

        				this.dsDayNght.filterstr = "'" + wdmchnDayNghtSeCd.join(",") + "'.indexOf(cdId) != -1";
        			}
        		} else {
        			obj.setColumn(obj.rowposition, "wdmchnDayNghtSeCd", " ");  // 용접기주야간구분코드
        		}
        	}

        	// 해체기존시설물코드
        	if(!e.columnid) {
        		if(this.getFocus(),name != this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.name) {
        			for(var i = 0; i < obj.rowcount; i++) {
        				var dsolvExsFcltyCdCn = obj.getColumn(i, "dsolvExsFcltyCdCn");  // 해체기존시설물코드내용
        				var grd = this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList;
        				"fcltyCdWil,fcltyCdFlof,fcltyCdCilin,fcltyCdNone".split(",").forEach(function(v) {
        				    var col = grd.getBindCellIndex("body", v);
        					var val = grd.getCellPropertyValue(i, col, "checkboxtruevalue");
        					if(dsolvExsFcltyCdCn && dsolvExsFcltyCdCn.indexOf(val) != -1) {
        						obj.setColumn(i, v, val);
        					}
        				});
        			}
        		}
        	// 벽,바닥,천장,없음
        	} else if(e.columnid.startsWith("fcltyCd") && this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.name == this.getFocus().name) {
        		var col = this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.getBindCellIndex("body", "fcltyCdNone");  // 없음
        		if(col == this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.getCellPos() && e.newvalue) {
        			obj.setColumn(obj.rowposition, "fcltyCdWil"  , "");  // 벽
        			obj.setColumn(obj.rowposition, "fcltyCdFlof" , "");  // 바닥
        			obj.setColumn(obj.rowposition, "fcltyCdCilin", "");  // 천장
        		} else if(col != this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.getCellPos() && e.newvalue) {
        			obj.setColumn(obj.rowposition, "fcltyCdNone" , "");  // 없음
        		}

        		var dsolvExsFcltyCdCn = [];
        		"fcltyCdWil,fcltyCdFlof,fcltyCdCilin,fcltyCdNone".split(",").forEach(function(v) {
        		    var dsolvExsFcltyCd = obj.getColumn(obj.rowposition, v);
        			if(!nexacro.main.gfnIsNull(dsolvExsFcltyCd) && dsolvExsFcltyCd != "0") {
        			    dsolvExsFcltyCdCn.push(dsolvExsFcltyCd);
        			}
        		});
        		obj.setColumn(obj.rowposition, "dsolvExsFcltyCdCn", dsolvExsFcltyCdCn.join(","));  // 해체기존시설물코드내용
        	}
        };

        this.dsArtclList_cancolumnchange = function(obj,e)
        {
            // 시작시간,종료시간
        	if(e.columnid == "bgngTm" || e.columnid == "endTm") {
        	    var bgngTm = e.columnid == "bgngTm" ? e.newvalue : obj.getColumn(obj.rowposition, "bgngTm");  // 시작시간
        		var endTm  = e.columnid == "endTm"  ? e.newvalue : obj.getColumn(obj.rowposition, "endTm" );  // 종료시간
        	    if(this.gfnIsNull(bgngTm) || this.gfnIsNull(endTm)) { return; }
        		if(e.newvalue.length != 2 || parseInt(e.newvalue) > 24) {
        			// 시간 형식(00~24)을 확인하세요!
        			this.gfnAlertMsg("CST_007", "CST_007");
        			return false;
        		} else if(bgngTm >= endTm){
        			// 시작 시간은 종료 시간보다 작아야합니다.
        			this.gfnAlertMsg("CST_008", "CST_008");
        			return false;
        		}
        	}

        	return true;
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.name :  // 조회
        			strSvcUrl = "jobWtpl/selectArtclList.do";
        			inData    = "dsSearch=dsJobWtpl";
        			outData   = "dsArtclList=dsArtclList";
        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // 팝업 관련 콜백 함수
        this.fnPopupCallback = function(sPopupId, oRtn)
        {
            if(this.gfnIsNull(oRtn)) { return; }

        	switch(sPopupId) {
        		case "picSch" :  // 담당자 찾기
        			oRtn = JSON.parse(oRtn);
        			// 공항공사담당자 Dataset
        			if(this.dsArptCstrnPic.findRow("picId", oRtn.userId) != -1) {
        				// 이미 등록(추가)된 {0}입니다.
        				this.gfnAlertMsg("CST_005", "CST_005", ["담당자"]);
        			} else {
        				var nRow = this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.getCellPos() == 0 ? this.dsArptCstrnPic.addRow() : this.dsArptCstrnPic.rowposition;
        				this.dsArptCstrnPic.setColumn(nRow, "aplyNo", this.dsMst.getColumn(0, "aplyNo"));  // 신청번호
        				this.dsArptCstrnPic.setColumn(nRow, "picId" , oRtn.userId                      );  // 담당자ID
        				this.dsArptCstrnPic.setColumn(nRow, "picNm" , oRtn.userNm                      );  // 담당자명
        				this.dsArptCstrnPic.setColumn(nRow, "jobCd" , this.dsMst.getColumn(0, "taskCd"));  // 신청번호
        			}

        			break;

        		case "cnsltnInfo" :  // 연관신청서 찾기
        			oRtn = JSON.parse(oRtn);

        			// 작업계획서 Dataset
        			this.dsMst.setColumn    (0, "basctAplcfmInfoId", oRtn.aplyNo);                                    // 신청번호
        			this.dsJobWtpl.setColumn(0, "basctAplcfmInfoNm", "[" + oRtn.aplyNo + "]" + oRtn.chgFcltCstrnCn);  // 신청번호 + 변경시설공사내용

        			break;

        		case "sprvsnCoCstrnEmp" :  // 주관사 공사직원 찾기
        			oRtn = JSON.parse(oRtn);

        			// 작업계획서 Dataset
        			this.dsJobWtpl.setColumn(0, "sprvsnCoPbcprtEmpId", oRtn.userId);  // 공사직원ID
        			this.dsJobWtpl.setColumn(0, "sprvsnCoPbcprtEmpNm", oRtn.userNm);  // 공사직원명

        			break;

        		case "lbsvcCstrnPic" :  // 용역/공사 담당자 찾기
        			oRtn = JSON.parse(oRtn);

        			// 작업계획서 Dataset
        			this.dsMst.setColumn(0, "lbsvcPbcprtPicId", oRtn.userId);  // 용역/공사 담당자ID
        			this.dsMst.setColumn(0, "lbsvcPbcprtPicNm", oRtn.userNm);  // 용역/공사 담당자명

        			break;

        		case this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs.name :  // 주관사개인정보수집이용동의서
        			oRtn = JSON.parse(oRtn);

        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs).cfnDelAtfl();
        			this.dsJobWtpl.setColumn(0, "sprvsnCoPrvcClctUtztnWtcsAtflMngNo", oRtn.atflMngNo);  // 첨부파일관리번호
        			this.dsFile.setColumn   (0, "A110", oRtn.orgnlFileNm);  // 첨부파일명

        		    break;

        		case this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs.name :      // 시공사개인정보수집이용동의서
        			oRtn = JSON.parse(oRtn);

        			// 첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs).cfnDelAtfl();
        			this.dsJobWtpl.setColumn(0, "cnstCoPrvcClctUtztnWtcsAtflMngNo", oRtn.atflMngNo);  // 첨부파일관리번호
        			this.dsFile.setColumn   (0, "A120", oRtn.orgnlFileNm);  // 첨부파일명

        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.cfnIsVldDat = function() {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	// 신청서 작성 및 보완 단계만 점검
        	if(!this.cfnGetAtrb.call("vsAplcfmWrt")) { return true; }

        	// 시설물설치(변경), 원상회복(퇴거) 관련 작업여부
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "fcltyInstlChcRtosRltnJobYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시설물설치(변경), 원상회복(퇴거) 관련 작업여부"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnsltnInfo.form.rdoFcltyInstlChcRtosRltnJobYn.setFocus();
        		});

        		return false;
        	}

        	// 연관신청서 정보
        	if(this.divCnsltnInfo.form.panBasctAplcfmInfo.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "basctAplcfmInfoNm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["연관신청서 정보"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divCnsltnInfo.form.divEdtPop01.form.btnBasctAplcfmInfo.setFocus();
        			});

        			return false;
        		}
        	}

        	// 공항공사 담당자(감독자)
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "arptPbcprtPicExnCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["공항공사 담당자(감독자)"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnsltnInfo.form.rdoArptPbcprtPicChcYn.setFocus();
        		});

        		return false;
        	}

        	// 공항공사 담당자
        	if(this.divCnsltnInfo.form.panArptCstrnPic.visible) {
        	    if(this.dsArptCstrnPic.rowcount == 0) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["공항공사 담당자"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.setFocus();
        			});
        		} else {
        			for(var i = 0; i < this.dsArptCstrnPic.rowcount; i++) {
        				// 공항공사 담당자
        				if(this.gfnIsNull(this.dsArptCstrnPic.getColumn(i, "picNm"))) {
        					// {0}는(은) 필수 항목입니다!
        					this.gfnAlertMsg("CST_004", "CST_004", ["공항공사 담당자"], function() {
        						this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.setFocus();
        						this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.setCellPos(2, i);
        						this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.showEditor(true);
        					});

        					return false;
        				}
        			}
        		}
        	}

        	// 공사(작업) 분야
        	if(this.gfnIsNull( this.dsMst.getColumn(0, "cstrnJobFldCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["공사(작업) 분야"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnsltnInfo.form.chkArch.setFocus();
        		});

        		return false;
        	}

        	// 주관사의 동일여부
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoSmYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["주관사의 동일여부"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divSprvsnCo.form.rdoSprvsnCoSmYn.setFocus();
        		});

        		return false;
        	}

        	// 주관사 공사직원여부
        	if(this.divSprvsnCo.form.panSprvsnCoCstrnEmpYn.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoPbcprtEmpYn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["주관사 공사직원여부"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divSprvsnCo.form.rdoSprvsnCoPbcprtEmpYn.setFocus();
        			});

        			return false;
        		}
        	}

        	// 주관사 공사직원
        	if(this.divSprvsnCo.form.panSprvsnCoCstrnEmp.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoPbcprtEmpNm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["주관사 공사직원"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.edtSprvsnCoPbcprtEmpNm.setFocus();
        			});

        			return false;
        		}
        	}

        	// 주관사 회사명
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["주관사 회사명"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divSprvsnCo.form.edtSprvsnCoNm.setFocus();
        		});

        		return false;
        	}

        	// 주관사 담당자명
        	if(this.divSprvsnCo.form.panSprvsnCoPicNm.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoPicNm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["주관사 담당자명"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divSprvsnCo.form.edtSprvsnCoPicNm.setFocus();
        			});

        			return false;
        		}
        	}

        	// 주관사 연락처
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "sprvsnCoCtinfoNo"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["주관사 연락처"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divSprvsnCo.form.medSprvsnCoCtinfoNo.setFocus();
        		});

        		return false;
        	}

        	// 주관사 개인정보 수집•이용동의서
        	if(this.divSprvsnCo.form.panFile.visible) {
        	    if(this.gfnIsNull(this.dsFile.getColumn(0, "A110"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["주관사 개인정보 수집•이용동의서"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs.setFocus();
        			});

        			return false;
        		}
        	}

        	// 시공사의 동일여부
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cnstrSmYn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시공사의 동일여부"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnstrCo.form.rdoCnstrSmYn.setFocus();
        		});

        		return false;
        	}

        	// 시공사 회사명
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cnstrCoNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시공사 회사명"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnstrCo.form.edtCnstrCoNm.setFocus();
        		});

        		return false;
        	}

        	// 시공사 담당자명
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cnstrPicNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시공사 담당자명"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnstrCo.form.edtCnstrCoPicNm.setFocus();
        		});

        		return false;
        	}

        	// 시공사 연락처
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cnstrCtinfoNo"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["시공사 연락처"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divCnstrCo.form.medCnstrCoCtinfoNo.setFocus();
        		});

        		return false;
        	}

        	// 시공사 개인정보 수집•이용동의서
        	if(this.divCnstrCo.form.panFile.visible) {
        	    if(this.gfnIsNull(this.dsFile.getColumn(0, "A120"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["시공사 개인정보 수집•이용동의서"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs.setFocus();
        			});

        			return false;
        		}
        	}

        	// 공사(작업)구분
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cstrnJobSeCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["공사(작업)구분"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.rdoCstrnJobSeCd.setFocus();
        		});

        		return false;
        	}

        	// 용역/공사 담당자
        	if(this.divJobPlan.form.panLbsvcCstrnPic.visible) {
        		if(this.gfnIsNull( this.dsMst.getColumn(0, "lbsvcPbcprtPicNm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["용역/공사 담당자"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divJobPlan.form.divLbsvcPbcprtPicNm.form.edtLbsvcPbcprtPicNm.setFocus();
        			});

        			return false;
        		}
        	}

        	// 지역구분
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "rgnSeCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["지역구분"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.rdoRgnSeCd.setFocus();
        		});

        		return false;
        	}

        	// 건물구분
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "bldgSeCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["건물구분"], function() {
        			this.parent.parent.setStepIndex(1);
        			if(this.divJobPlan.form.panTmnlRgn01.visible) {
        				this.divJobPlan.form.chkPsgTmnl.setFocus();
        			} else {
        				this.divJobPlan.form.chkCgoTmnl.setFocus();
        			}
        		});

        		return false;
        	}

        	// 보안구역여부
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobZoneCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["보안구역여부"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.chkPrtcZone.setFocus();
        		});

        		return false;
        	}

        	// 작업장위치
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "wrsPstnCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["작업장위치"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.edtWrsPstnCn.setFocus();
        		});

        		return false;
        	}

        	// 총 작업인원
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "totalJobNope"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["총 작업인원"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.edtTotalJobNope.setFocus();
        		});

        		return false;
        	}

        	// 작업시작일
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobBgngYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["작업시작일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.calJobBgngYmd.setFocus();
        		});

        		return false;
        	}

        	// 작업종료일
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobEndYmd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["작업종료일"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.calJobEndYmd.setFocus();
        		});

        		return false;
        	}

        	// 작업목적
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobPrpsCd"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["작업목적"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.rdoJobPrpsCd.setFocus();
        		});

        		return false;
        	}

        	// 작업목적 기타내용
        	if(this.divJobPlan.form.panJobPrpsEtcCn.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobPrpsEtcCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["작업목적 기타내용"], function() {
        				this.parent.parent.setStepIndex(1);
        				this.divJobPlan.form.edtJobPrpsEtcCn.setFocus();
        			});

        			return false;
        		}
        	}

            // 공사작업명
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "cstrnJobNm"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["공사작업명"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.edtCstrnJobNm.setFocus();
        		});

        		return false;
        	}

            // 작업내용
        	if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "jobCn"))) {
        		// {0}는(은) 필수 항목입니다!
        		this.gfnAlertMsg("CST_004", "CST_004", ["작업내용"], function() {
        			this.parent.parent.setStepIndex(1);
        			this.divJobPlan.form.txtJobCn.setFocus();
        		});

        		return false;
        	}

        	// 중요필드 일자별 입력
        	var grd = this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList;
        	for(var i = 0; i < this.dsArtclList.rowcount; i++) {
        		if(this.gfnIsNull(this.dsArtclList.getColumn(i, "bgngTm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["시작시간"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "bgngTm"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}

        		if(this.gfnIsNull(this.dsArtclList.getColumn(i, "endTm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["종료시간"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "endTm"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}

        		if(this.gfnIsNull(this.dsArtclList.getColumn(i, "dsolvExsFcltyCdCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["기존시설물해체"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "fcltyCdWil"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}
        	}

        	return true;
        };

        // 행의 높이에 따라 그리드의 높이를 재설정
        this.cfnGridResizeHeight = function(oGrd) {
        	oGrd.height = oGrd.getRealRowFullSize() + 20;
        	oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 50;
        	oGrd.parent.parent.parent.parent.height = oGrd.parent.parent.parent.parent.height;
        	this.resetScroll();
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
        	} else if(e.col == 2) {
        	    // 주관사 공사직원
        		var oOption = { title:(obj.name == "grdSprvsnCoPrvcClctUtztnWtcs" ? "주관사" : "시공사") + " 개인정보 수집•이용 동의서 찾기", titlebar:true, width:900, height:700 };
        		this.gfnOpenPopup(obj.name, "work::CST/TSC/CST006P17.xfdl", "", "fnPopupCallback", oOption);
        	}
        };

        // 공사(작업)분야
        this.CheckBox_onchanged = function(obj,e)
        {
            // 공사(작업)분야
        	var panName = this.getPanel(obj).name;
            if(panName == this.divCnsltnInfo.form.panCstrnJobFld.name) {
        	    // 해당없음 선택 시 처리
                this.cfnToArray(this.divCnsltnInfo.form.panCstrnJobFld).forEach(function(v, i, c) {
        			v.value = obj.name == c[5].name && i < 5 ? v.falsevalue : (obj.name != c[5].name && i == 5 ? v.falsevalue : e.postvalue);
        		});

                // 공사(작업)분야 항목 조합
        		this.dsMst.setColumn(0, "cstrnJobFldCd", this.cfnToArray(this.divCnsltnInfo.form.panCstrnJobFld).filter(function(v) { return v.isChecked(); } ).map(function(v) { return v.truevalue; }).join(","));
        	// 건물구분
        	} else if(panName.indexOf("TmnlRgn") != -1) {
        	    var cfnToArray = this.cfnToArray;
        		var div = this.divJobPlan.form;
        		var arrBldgSeCd = [];
        	    var rgnSeCd = this.dsJobWtpl.getColumn(0, "rgnSeCd");  // 지역구분
        		var bldgSeCds = (rgnSeCd == "1" ? "panTmnlRgn01,panTmnlRgn02,panTmnlRgn03" : "panCgoTmnlRgn01,panCgoTmnlRgn02,panCgoTmnlRgn03,panCgoTmnlRgn04").split(",");
                bldgSeCds.forEach(function(v) {
        			cfnToArray(div[v]).forEach(function(c) { if(c instanceof CheckBox && c.isChecked()) { arrBldgSeCd.push(c.truevalue); } });
        		});

        		// 건물구분코드
        		this.dsJobWtpl.setColumn(0, "bldgSeCd", arrBldgSeCd.join(","));
        	// 보안구역여부
        	} else if(panName == this.divJobPlan.form.panJobZoneCd.name) {
        		var arrJobZoneCd = [];
        		this.cfnToArray(this.divJobPlan.form.panJobZoneCd).forEach(function(v) {
        			if(v.isChecked()) { arrJobZoneCd.push(v.truevalue); }
        		});

        		// 작업구역코드
        		this.dsJobWtpl.setColumn(0, "jobZoneCd", arrJobZoneCd.join(","));
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

        this.divCnsltnInfo_divArptCstrnPic_grdArptCstrnPic_onexpanddown = function(obj,e)
        {
        	if(e.col != 1) {
        	    if(this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.getCellPropertyValue(e.row, e.col, "cssclass") == "cell_WF_Delete") {
        			// 공항공사담당자
        			this.dsArptCstrnPic.deleteRow(e.row);
        		} else {
        			// 공항공사담당자
        			var oOption = { title:"담당자 찾기", titlebar:true, width:900, height:700 };
        			this.gfnOpenPopup("picSch", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        		}
        	}
        };

        this.divCnsltnInfo_divEdtPop01_btnBasctAplcfmInfo_onclick = function(obj,e)
        {
        	// 연관신청서 정보
        	var oOption = { title:"연관신청서 찾기", titlebar:true, width:900, height:840 };
        	this.gfnOpenPopup("cnsltnInfo", "work::CST/TSC/CST006P20.xfdl", "", "fnPopupCallback", oOption);
        };

        this.divSprvsnCo_divEdtPop01_btnPop_onclick = function(obj,e)
        {
        	// 주관사 공사직원
        	var oOption = { title:"주관사 공사직원 찾기", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup("sprvsnCoCstrnEmp", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        };

        this.divJobPlan_divEdtPop01_btnPop_onclick = function(obj,e)
        {
        	// 주관사 공사직원
        	var oOption = { title:"용역/공사 담당자 찾기", titlebar:true, width:900, height:700 };
        	this.gfnOpenPopup("lbsvcCstrnPic", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        };

        this.divJobPlan_divMultiJobList_Button_onclick = function(obj,e)
        {
        	if(obj.name == this.divJobPlan.form.divMultiJobList.form.btnGrdAdd.name) {  // 추가
        		var nRow = this.dsJobList.addRow();
        		this.dsJobList.setColumn(nRow, "aplyNo", this.dsMst.getColumn(0, "aplyNo"));  // 신청번호
        	} else if(obj.name == this.divJobPlan.form.divMultiJobList.form.btnGrdDel.name) {  // 삭제
        		for(var i = this.dsJobList.rowcount - 1; i > -1; i--) {
        			if(this.dsJobList.getColumn(i, "chc") == "1") {
        				this.dsJobList.deleteRow(i);
        			}
        		}
        	}
        };

        this.divJobYmdJobCnList_divJobYmdJobCnList_grdJobYmdJobCnList_oncellposchanged = function(obj,e)
        {
        //     if(e.col == obj.getBindCellIndex("body", "wdmchnGrdrUseYn")) {    // 용접기그라인더사용여부(여)
        // 		if(obj.binddataset.getColumn(0, "wdmchnGrdrUseYn") == "0") {  // 용접기그라인더사용여부(부)
        // 			obj.binddataset.setColumn(0, "wdmchnDayNghtSeCd", "");   // 용접기주야간구분코드
        // 		} else {
        // 			if(obj.getBindCellIndex("body", "bgngTm") || e.col == obj.getBindCellIndex("body", "endTm")) {
        // 		}
        // 	}
        // 	if(e.col == obj.getBindCellIndex("body", "bgngTm") || e.col == obj.getBindCellIndex("body", "endTm")) {
        // 	    if(obj.binddataset.getColumn(0, "wdmchnGrdrUseYn") == "1") {  // 용접기그라인더사용여부(여)
        //
        // 		} else {
        // 			obj.binddataset.setColumn(0, "wdmchnDayNghtSeCd", "");  // 용접기주야간구분코드
        // 		}
        // 	}
        };

        this.divCnsltnInfo_btnLnkgPsbltyStepIdnty_onclick = function(obj,e)
        {
        	// 서비스별 작업신고서 연결 가능 단계 확인
        	var oOption = { title:"서비스별 작업신고서 연결 가능 단계 확인", titlebar:true, width:1000, height:644};
        	this.gfnOpenPopup("lbsvcCstrnPic", "work::CST/TSC/CST006P22.xfdl", "", "fnPopupCallback", oOption);
        };

        this.divCnsltnInfo_btnTatFcltTkcgDeptCsaf_onclick = function(obj,e)
        {
        	// 입주자 시설 담당부서 현황
        	var oOption = { title:"입주자 시설 담당부서 현황", titlebar:true, width:1150, height:674};
        	this.gfnOpenPopup("lbsvcCstrnPic", "work::CST/TSC/CST006P15.xfdl", "", "fnPopupCallback", oOption);
        };

        // 펼침(축소) 버튼 클릭
        this.Button_onclick = function(obj,e)
        {
        	// 펼침(축소)
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
            this.btnCnsltnInfo.addEventHandler("onclick",this.Button_onclick,this);
            this.btnCnsltnInfo.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divCnsltnInfo.form.btnLnkgPsbltyStepIdnty.addEventHandler("onclick",this.divCnsltnInfo_btnLnkgPsbltyStepIdnty_onclick,this);
            this.divCnsltnInfo.form.divEdtPop01.form.btnBasctAplcfmInfo.addEventHandler("onclick",this.divCnsltnInfo_divEdtPop01_btnBasctAplcfmInfo_onclick,this);
            this.divCnsltnInfo.form.CheckBox04.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divCnsltnInfo.form.chkArch.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divCnsltnInfo.form.CheckBox02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divCnsltnInfo.form.CheckBox01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divCnsltnInfo.form.rdoArptPbcprtPicChcYn.addEventHandler("onitemchanged",this.divForm_div00_01_02_rdoArptPbcprtPicChcYn_onitemchanged,this);
            this.divCnsltnInfo.form.btnTatFcltTkcgDeptCsaf.addEventHandler("onclick",this.divCnsltnInfo_btnTatFcltTkcgDeptCsaf_onclick,this);
            this.divCnsltnInfo.form.divArptCstrnPic.form.grdArptCstrnPic.addEventHandler("onexpanddown",this.divCnsltnInfo_divArptCstrnPic_grdArptCstrnPic_onexpanddown,this);
            this.divCnsltnInfo.form.CheckBox05.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divCnsltnInfo.form.CheckBox00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnSprvsnCo.addEventHandler("onclick",this.Button_onclick,this);
            this.btnSprvsnCo.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divSprvsnCo.form.grdSprvsnCoPrvcClctUtztnWtcs.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divSprvsnCo.form.divSprvsnCoPbcprtEmpNm.form.btnPop.addEventHandler("onclick",this.divSprvsnCo_divEdtPop01_btnPop_onclick,this);
            this.divCnstrCo.form.grdCnstrPrvcClctUtztnWtcs.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divJobPlan.form.divLbsvcPbcprtPicNm.form.btnPop.addEventHandler("onclick",this.divJobPlan_divEdtPop01_btnPop_onclick,this);
            this.divJobPlan.form.CheckBox04_00_01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox03_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox08_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox06_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox05_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox04_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox03_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox04_00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox02_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox00_01.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.chkCgoTmnl.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox06.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox02.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.chkPsgTmnl.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox03.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox04.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox09.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox08.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox07.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox05.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.chkPrtcZone.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.CheckBox00_00.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.divJobPlan.form.divMultiJobList.form.btnGrdAdd.addEventHandler("onclick",this.divJobPlan_divMultiJobList_Button_onclick,this);
            this.divJobPlan.form.divMultiJobList.form.btnGrdDel.addEventHandler("onclick",this.divJobPlan_divMultiJobList_Button_onclick,this);
            this.divJobYmdJobCnList.form.divJobYmdJobCnList.form.grdJobYmdJobCnList.addEventHandler("oncellposchanged",this.divJobYmdJobCnList_divJobYmdJobCnList_grdJobYmdJobCnList_oncellposchanged,this);
            this.btnCnstrCo.addEventHandler("onclick",this.Button_onclick,this);
            this.btnCnstrCo.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnJobPlan.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnJobPlan.addEventHandler("onclick",this.Button_onclick,this);
            this.staSubTitle03.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
            this.btnJobYmdJobCnList.addEventHandler("onclick",this.Button_onclick,this);
            this.btnJobYmdJobCnList.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnPrvcWtcs.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrvcWtcs.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divPrvcWtcs.form.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("CST006S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
