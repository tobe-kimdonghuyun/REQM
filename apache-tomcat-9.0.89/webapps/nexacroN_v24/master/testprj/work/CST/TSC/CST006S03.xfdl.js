(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006S03");
            this.set_titletext("투입자재및공구류등(작업신고서)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCrynChckpntUpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrynChckpntCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUld", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRltnDeptStng", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"upDocCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\">Y06110</Col><Col id=\"docNm\">건축</Col></Row><Row><Col id=\"docCd\">Y06120</Col><Col id=\"docNm\">기계</Col></Row><Row><Col id=\"docCd\">Y06140</Col><Col id=\"docNm\">전기</Col></Row><Row><Col id=\"docCd\">Y06130</Col><Col id=\"docNm\">통신</Col></Row><Row><Col id=\"docCd\">Y06180</Col><Col id=\"docNm\">소방</Col></Row><Row><Col id=\"docCd\">Y06160</Col><Col id=\"docNm\">보안</Col></Row><Row><Col id=\"docCd\">Y06150</Col><Col id=\"docNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"upJobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"jobGroupId\">WOGCOPM130</Col><Col id=\"jobGroupNm\">터미널건축팀</Col><Col id=\"prcrTelno\">000-1234-0130</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM140</Col><Col id=\"jobGroupNm\">건축지원팀</Col><Col id=\"prcrTelno\">000-1234-0140</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM150</Col><Col id=\"jobGroupNm\">T1 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0150</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM160</Col><Col id=\"jobGroupNm\">T2 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0160</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM170</Col><Col id=\"jobGroupNm\">플랜트시설팀</Col><Col id=\"prcrTelno\">000-1234-0170</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM180</Col><Col id=\"jobGroupNm\">T1 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0180</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM190</Col><Col id=\"jobGroupNm\">T2 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0190</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM200</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0200</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM210</Col><Col id=\"jobGroupNm\">통신그룹</Col><Col id=\"prcrTelno\">000-1234-0210</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM220</Col><Col id=\"jobGroupNm\">T1 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0220</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM230</Col><Col id=\"jobGroupNm\">T2 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0230</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM240</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0240</Col></Row><Row><Col id=\"jobGroupId\">WOGSECWS0010</Col><Col id=\"jobGroupNm\">보안그룹</Col><Col id=\"prcrTelno\">000-1234-0010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","5000",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPutMtrlTool\"/><PanelItem id=\"PanelItem05\" componentid=\"divPutMtrlTool\"/><PanelItem id=\"PanelItem03\" componentid=\"panPutMtrlToolList\"/><PanelItem id=\"PanelItem06\" componentid=\"divPutMtrlToolList\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02\"/><PanelItem id=\"PanelItem07\" componentid=\"panRltnDeptStng\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","40","3210","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("투입자재 및 공구류 등(위해물품 및 위험물 포함)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","860","3210","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPutMtrlTool\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPutMtrlTool","40","3210","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnPutMtrlTool","740","3176","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("divPutMtrlTool","1400","331","100.00%","240",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","120",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("1");
            obj.set_text("투입자재 및 공구류 반입여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","110",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPutMtrlToolKndCrynYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Radio("rdoPutMtrlToolKndCrynYn","74","77","100%","40",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divPutMtrlTool_form_rdoPutMtrlToolKndCrynYn_innerdataset = new nexacro.NormalDataset("divPutMtrlTool_form_rdoPutMtrlToolKndCrynYn_innerdataset", obj);
            divPutMtrlTool_form_rdoPutMtrlToolKndCrynYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divPutMtrlTool_form_rdoPutMtrlToolKndCrynYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Static("Static00","758","127","100%","40",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("4");
            obj.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("5");
            obj.set_text("항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","300","110",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Panel("panArcftInsdCrynPhbtCmdtyDocReadYn","0","60","100.00%","120",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Button("Button00","210","231","69","34",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_fittocontents("width");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new CheckBox("chkArcftInsdCrynPhbtCmdtyDocReadYn","80","240","74","40",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("8");
            obj.set_text("읽음");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","240","270","40",null,null,null,null,null,null,this.divPutMtrlTool.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chkArcftInsdCrynPhbtCmdtyDocReadYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.divPutMtrlTool.addChild(obj.name, obj);

            obj = new Div("divPutMtrlToolList","0","380","100.00%","1676",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","327",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("예시 (표 참조)");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","980","316",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","72","100.00%","136",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("4");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"318\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"333\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격(길이/용량)\"/><Cell col=\"5\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"1\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell col=\"1\" text=\"니퍼\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell col=\"2\" text=\"5\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell col=\"3\" text=\"개\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell col=\"4\" text=\"30cm\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell col=\"5\" text=\"bind:작업내역\" cssclass=\"CellEnd\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" text=\"2\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" col=\"1\" text=\"페인트\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" col=\"2\" text=\"5\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" col=\"3\" text=\"통\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" col=\"4\" text=\"20L\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/><Cell row=\"1\" col=\"5\" textAlign=\"center\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\"/></Band></Format></Formats>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static02","70","262","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("6");
            obj.set_text("위험물의 경우 규격란에 용량(ex. 100ml, 100g) 으로 기재");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static00","758","127","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("3");
            obj.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static01","141","261","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("5");
            obj.set_text("셋트 물품의 경우 최소단위부터 최대단위까지의 규격(ex. 10/12/14cm)을 모두 기재");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("투입자재 및 공구류 목록 기재");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","96.08%","260",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"divPutMtrlToolList\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("panPutMtrlToolList","0","60","100.00%","271",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","726","100%","172",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Des");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static04","62","766","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("15");
            obj.set_text("보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Div("divPutMtrlToolList","0","30","100%","210",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("panPutMtrlToolList",null,"0","550","34","0",null,null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFormDwnld\"/><PanelItem id=\"PanelItem01\" componentid=\"btnUld\"/><PanelItem id=\"PanelItem03\" componentid=\"btnAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnDel\"/></Contents>");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Grid("grdPutMtrlToolList","0","panPutMtrlToolList:10",null,null,"0","0",null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMtrlToolList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"65\"/><Column size=\"235\"/><Column size=\"95\"/><Column size=\"99\"/><Column size=\"271\"/><Column size=\"439\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"물품명\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"수량\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"단위\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"규격(길이/용량)\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsAplcfmWrt&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chc\"/><Cell col=\"1\" text=\"bind:no\" edittype=\"normal\" editmaxlength=\"10\" editinputtype=\"digit\"/><Cell col=\"2\" text=\"bind:cmdtyNm\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:qty\" displaytype=\"number\" edittype=\"mask\" editinputtype=\"number\" maskedittrimtype=\"both\" maskeditformat=\"#.###\"/><Cell col=\"4\" text=\"bind:unitVl\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:spcfctVl\" edittype=\"normal\"/><Cell col=\"6\" cssclass=\"CellEnd\" text=\"bind:rmrkCn\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Button("btnAdd","774.00","10","47","34",null,null,null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Button("btnDel","804.00","10","45","34",null,null,null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Button("btnUld","458.00","10","148","34",null,null,null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("4");
            obj.set_text("물품목록일괄업로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Button("btnFormDwnld","104","0","176","34",null,null,null,null,null,null,this.divPutMtrlToolList.form.divPutMtrlToolList.form);
            obj.set_taborder("5");
            obj.set_text("업로드엑셀양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divPutMtrlToolList.form.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("보호구역 내 위해물품 사용 관련 준수사항");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","20.00","648","96.08%","308",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/><PanelItem id=\"PanelItem03\" componentid=\"Static08\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","648","100.00%","328",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new CheckBox("chkDgadsCmdtyUseCmpanAgreYn","102","1055","150","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("24");
            obj.set_text("동의");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("1");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static08","140","927","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("20");
            obj.set_text("관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static07","111","885","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("19");
            obj.set_text("상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static06","86","855","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("17");
            obj.set_text("보호구역 내 위해물품 및 위험물 방치 및 분실되지 않도록 관리");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static05","121","852","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("16");
            obj.set_text("상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static03","80","897","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("14");
            obj.set_text("보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("위해물품사용 준수사항동의여부");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20.00","648","300","90",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"chkDgadsCmdtyUseCmpanAgreYn\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("panDgadsCmdtyUseCmpanAgreYn","0","648","100.00%","101",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Button("Button00","95","1210","120","34",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("33");
            obj.set_text("외곽초소 위치도");
            obj.set_cssclass("btn_WF_SmallGray");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("반입초소지정");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","20.00","1077","300","90",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("panCrynChckpntCd","0","1077","100.00%","380",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02Blank\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","1167","100%","279",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_spacing("5px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static09\"/><PanelItem id=\"PanelItem02\" componentid=\"Static10\"/><PanelItem id=\"PanelItem03\" componentid=\"Static11\"/><PanelItem id=\"PanelItem04\" componentid=\"Static12\"/><PanelItem id=\"PanelItem05\" componentid=\"Static13\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static13","195","1412","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("38");
            obj.set_text("입.출시 동일 출입구 이용");
            obj.set_cssclass("sta_WF_Des3");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static12","138","1421","100%","57",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("37");
            obj.set_text("* 예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n* 예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static11","147","1365","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("36");
            obj.set_text("부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static10","127","1275","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("35");
            obj.set_text("출국심사장 내 공사/작업 시 “출국심사장” 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static09","92","1225","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("34");
            obj.set_text("출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("pan02Blank","520","1077","300","1",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Combo("cmbCrynChckpntCd","131","1132","150","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCrynChckpntCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Combo("cmbCrynChckpntUpCd","217","1146","150","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCrynChckpntUpCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("");
            obj.set_index("-1");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","1140","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbCrynChckpntUpCd\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbCrynChckpntCd\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("선택사유 및 이용예정초소");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","20.00","1077","980","170",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txtChcRsnUsePrnmntChckpntCn\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("panWholChckpntChcRsnUtztnPrnmntChckpnt","0","1077","100.00%","269",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static15","252","1757","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("44");
            obj.set_text("외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("Static14","80","1715","100%","40",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("43");
            obj.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Panel("Panel03","20","1661","100%","90",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("5px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15\"/></Contents>");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new TextArea("txtChcRsnUsePrnmntChckpntCn","84","1558","100%","120",null,null,null,null,null,null,this.divPutMtrlToolList.form);
            obj.set_taborder("42");
            obj.set_displaynulltext("내용 입력");
            this.divPutMtrlToolList.addChild(obj.name, obj);

            obj = new Static("staSubTitle03_00","10","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnPutMtrlToolList","138","16","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1117","30","172","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnPutMtrlToolList\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPutMtrlToolList","10","386","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("10");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","40","2432","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","40","2477","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_displaynulltext("내용 입력");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","40","2432","100%","381",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdAtchCn\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","20","2432","100.00%","438",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","62","2156","100.00%","301",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdPrcsCsaf\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPrcsCsaf","252","2296","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPrcsCsaf");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"116\"/><Column size=\"104\"/><Column size=\"185\"/><Column size=\"82\"/><Column size=\"124\"/><Column size=\"400\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"처리일시\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"처리현황\"/><Cell col=\"3\" text=\"담당부서&#13;&#10;(담당그룹)\"/><Cell col=\"4\" text=\"담당자\"/><Cell col=\"5\" text=\"연락처&#13;&#10;(내선번호)\"/><Cell col=\"6\" text=\"협의필요 사유\"/></Band><Band id=\"body\"><Cell text=\"bind:prcsDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:jobNm\"/><Cell col=\"2\" text=\"bind:prcsSttsNm\"/><Cell col=\"3\" text=\"bind:deptNm\"/><Cell col=\"4\" text=\"bind:emplNm\"/><Cell col=\"5\" text=\"bind:userTelno\"/><Cell col=\"6\" text=\"bind:prcsDsctn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","2396","100%","64",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","110","2442","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[<fc v=\"#1e4ebe\">관련부서처리</fc>] 단계에서 각 부서별 담당자가 모두 [<fc v=\"#1e4ebe\">협의완료</fc>]해야 <fc v=\"#1e4ebe\">작업신고서</fc>를 출력하실 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","70","2496","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("<fc v=\'#f00000\'>처리가 지연될 경우</fc> 처리중인 부서 담당자에게 연락바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04","0","0","87","46",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexgrow("0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnRltnDeptStngEblcAdd","1060","10","78","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnRltnDeptStngAdd","1070","1","47","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnRltnDeptStngDel","804.00","10","45","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnRltnDeptStngStrg","1234","10","45","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnRltnDeptStngInq","920","10","75","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("panRltnDeptStngBtn","298","0","298","46",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnRcmdtnCoprAltmnt\"/><PanelItem id=\"PanelItem02\" componentid=\"btnRltnDeptStngEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnRltnDeptStngAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnRltnDeptStngDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnRltnDeptStngStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnRltnDeptStngInq\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04","20","10","100.00%","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panRltnDeptStngBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRltnDeptStng","20","10","100.00%","285",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("dsRltnDeptStng");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"524\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서&#13;&#10;(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처&#13;&#10;(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRltnDeptStngEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRltnDeptStngEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRltnDeptStngEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRltnDeptStngEdtr&quot;) ? &quot;&quot; : &quot;CellEnd, CellLink&quot;\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRltnDeptStngEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsJobGroupCd\" combodatacol=\"jobGroupNm\" combocodecol=\"jobGroupId\" text=\"bind:tmprCd\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roRltnDeptStngEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"expr:endDt ? &quot;####-##-## ##:##:##&quot; : &quot;&quot;\" maskedittype=\"string\" maskeditlimitbymask=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("panRltnDeptStng","0","0","100.00%","581",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdRltnDeptStng\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","988","2994","100%","221",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02\"/><PanelItem id=\"PanelItem04\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static03\"/><PanelItem id=\"PanelItem03\" componentid=\"Static04\"/><PanelItem id=\"PanelItem05\" componentid=\"Static05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","470","2937","111","34",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("작업신고서 출력");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","474","3047","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("보안 협조 담당자가 [해당사항없음] 처리를 진행 시 투입자재 리스트 및 스티커를 출력하실 수 없습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","100%","34",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","135","3025","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("투입자재 및 공구류를 파일첨부한 경우 첨부한 파일을 출력하여 초소제출 및 작업장 비치");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","10","112","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("일반용지 외에 라벨지에 출력가능(라벨지 품명 및 규격 : 세모네모 C-3033 (30칸))");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","112","3135","100%","47",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("단기/임시 출입증 소지자가 보호구역에 위해물품 등을 반입할 경우 작업신고서의 신청번호를 공구함 등에 부착하여야 합니다.\r\n(단, 공구함 미소지 시에는 개별 공구로 부착)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","78","3125","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("※ window 7 이상의 OS에서 출력 가능합니다. (Windows XP 출력 불가) ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAtchCn","1304","2662","100%","228",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("dsRvwOpnn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:opnnNm\"/><Cell col=\"1\" text=\"bind:opnnCn\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1304","2625","100%","37",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUploadRvw","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRcmdtnCoprAltmnt","1360","2883","78","34",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("협조자추천");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPutMtrlTool.form
            obj = new Layout("default","",0,0,this.divPutMtrlTool.form,
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
                p.pan00.move("0","60","100.00%","120",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("투입자재 및 공구류 반입여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","110",null,null);

                p.rdoPutMtrlToolKndCrynYn.set_taborder("3");
                p.rdoPutMtrlToolKndCrynYn.set_fittocontents("width");
                p.rdoPutMtrlToolKndCrynYn.set_innerdataset(divPutMtrlTool_form_rdoPutMtrlToolKndCrynYn_innerdataset);
                p.rdoPutMtrlToolKndCrynYn.set_codecolumn("codecolumn");
                p.rdoPutMtrlToolKndCrynYn.set_datacolumn("datacolumn");
                p.rdoPutMtrlToolKndCrynYn.set_direction("vertical");
                p.rdoPutMtrlToolKndCrynYn.set_value("0");
                p.rdoPutMtrlToolKndCrynYn.set_index("0");
                p.rdoPutMtrlToolKndCrynYn.move("74","77","100%","40",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("758","127","100%","40",null,null);

                p.staLabel00_00.set_taborder("5");
                p.staLabel00_00.set_text("항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","300","110",null,null);

                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_taborder("7");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_horizontalgap("20");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_flexcrossaxiswrapalign("start");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_flexwrap("wrap");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_fittocontents("height");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_verticalgap("0");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_spacing("0px 20px 10px 20px");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.set_cssclass("pal_WF_DtlBg");
                p.panArcftInsdCrynPhbtCmdtyDocReadYn.move("0","60","100.00%","120",null,null);

                p.Button00.set_taborder("9");
                p.Button00.set_text("다운로드");
                p.Button00.set_cssclass("btn_WF_SmallGray");
                p.Button00.set_fittocontents("width");
                p.Button00.move("210","231","69","34",null,null);

                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.set_taborder("8");
                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.set_text("읽음");
                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.set_truevalue("1");
                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.set_falsevalue("0");
                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.set_value("0");
                p.chkArcftInsdCrynPhbtCmdtyDocReadYn.move("80","240","74","40",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20","240","270","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divPutMtrlTool.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlTool.form
            obj = new Layout("mobile","",0,0,this.divPutMtrlTool.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPutMtrlTool.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlTool.form
            obj = new Layout("Layout0","",0,0,this.divPutMtrlTool.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPutMtrlTool.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPutMtrlToolList.form.divPutMtrlToolList.form
            obj = new Layout("default","",0,0,this.divPutMtrlToolList.form.divPutMtrlToolList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panPutMtrlToolList.set_taborder("1");
                p.panPutMtrlToolList.set_flexcrossaxisalign("start");
                p.panPutMtrlToolList.set_flexcrossaxiswrapalign("start");
                p.panPutMtrlToolList.set_flexmainaxisalign("end");
                p.panPutMtrlToolList.set_horizontalgap("10");
                p.panPutMtrlToolList.move(null,"0","550","34","0",null);

                p.grdPutMtrlToolList.set_taborder("0");
                p.grdPutMtrlToolList.set_binddataset("dsMtrlToolList");
                p.grdPutMtrlToolList.move("0","panPutMtrlToolList:10",null,null,"0","0");

                p.btnAdd.set_taborder("2");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_cssclass("btn_WF_Small");
                p.btnAdd.set_visible("true");
                p.btnAdd.set_fittocontents("width");
                p.btnAdd.move("774.00","10","47","34",null,null);

                p.btnDel.set_taborder("3");
                p.btnDel.set_text("삭제");
                p.btnDel.set_cssclass("btn_WF_SmallRed");
                p.btnDel.set_visible("true");
                p.btnDel.set_fittocontents("width");
                p.btnDel.move("804.00","10","45","34",null,null);

                p.btnUld.set_taborder("4");
                p.btnUld.set_text("물품목록일괄업로드");
                p.btnUld.set_cssclass("btn_WF_Small");
                p.btnUld.set_visible("true");
                p.btnUld.set_fittocontents("width");
                p.btnUld.move("458.00","10","148","34",null,null);

                p.btnFormDwnld.set_taborder("5");
                p.btnFormDwnld.set_text("업로드엑셀양식다운로드");
                p.btnFormDwnld.set_cssclass("btn_WF_Small");
                p.btnFormDwnld.set_fittocontents("width");
                p.btnFormDwnld.move("104","0","176","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlToolList.form.divPutMtrlToolList.form
            obj = new Layout("Layout0","",0,0,this.divPutMtrlToolList.form.divPutMtrlToolList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlToolList.form.divPutMtrlToolList.form
            obj = new Layout("Layout0","",0,0,this.divPutMtrlToolList.form.divPutMtrlToolList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPutMtrlToolList.form
            obj = new Layout("default","",0,0,this.divPutMtrlToolList.form,
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
                p.pan00.move("0","60","100.00%","327",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.set_text("예시 (표 참조)");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","980","316",null,null);

                p.Grid00.set_taborder("4");
                p.Grid00.set_fillareatype("allrow");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("20","72","100.00%","136",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("위험물의 경우 규격란에 용량(ex. 100ml, 100g) 으로 기재");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("70","262","100%","40",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("758","127","100%","40",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("셋트 물품의 경우 최소단위부터 최대단위까지의 규격(ex. 10/12/14cm)을 모두 기재");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.set_fittocontents("height");
                p.Static01.move("141","261","100%","40",null,null);

                p.staLabel00_00.set_taborder("7");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.set_text("투입자재 및 공구류 목록 기재");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("8");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","96.08%","260",null,null);

                p.panPutMtrlToolList.set_taborder("9");
                p.panPutMtrlToolList.set_horizontalgap("20");
                p.panPutMtrlToolList.set_flexcrossaxiswrapalign("start");
                p.panPutMtrlToolList.set_flexwrap("wrap");
                p.panPutMtrlToolList.set_fittocontents("height");
                p.panPutMtrlToolList.set_verticalgap("0");
                p.panPutMtrlToolList.set_spacing("0px 20px 10px 20px");
                p.panPutMtrlToolList.set_cssclass("pal_WF_DtlBg");
                p.panPutMtrlToolList.move("0","60","100.00%","271",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_cssclass("sta_WF_Des");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("4");
                p.Panel00.move("20","726","100%","172",null,null);

                p.Static04.set_taborder("15");
                p.Static04.set_text("보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.move("62","766","100%","40",null,null);

                p.divPutMtrlToolList.set_taborder("10");
                p.divPutMtrlToolList.set_text("Div01");
                p.divPutMtrlToolList.set_formscrollbartype("none none");
                p.divPutMtrlToolList.set_formscrolltype("none");
                p.divPutMtrlToolList.set_fittocontents("height");
                p.divPutMtrlToolList.move("0","30","100%","210",null,null);

                p.staLabel00_00_00.set_taborder("11");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.set_text("보호구역 내 위해물품 사용 관련 준수사항");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00.set_taborder("12");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("20.00","648","96.08%","308",null,null);

                p.pan00_00_00.set_taborder("13");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","648","100.00%","328",null,null);

                p.chkDgadsCmdtyUseCmpanAgreYn.set_taborder("24");
                p.chkDgadsCmdtyUseCmpanAgreYn.set_text("동의");
                p.chkDgadsCmdtyUseCmpanAgreYn.set_truevalue("1");
                p.chkDgadsCmdtyUseCmpanAgreYn.set_falsevalue("0");
                p.chkDgadsCmdtyUseCmpanAgreYn.set_value("1");
                p.chkDgadsCmdtyUseCmpanAgreYn.move("102","1055","150","40",null,null);

                p.Static08.set_taborder("20");
                p.Static08.set_text("관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
                p.Static08.set_fittocontents("height");
                p.Static08.move("140","927","100%","40",null,null);

                p.Static07.set_taborder("19");
                p.Static07.set_text("상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,");
                p.Static07.set_fittocontents("height");
                p.Static07.move("111","885","100%","40",null,null);

                p.Static06.set_taborder("17");
                p.Static06.set_text("보호구역 내 위해물품 및 위험물 방치 및 분실되지 않도록 관리");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("86","855","100%","40",null,null);

                p.Static05.set_taborder("16");
                p.Static05.set_text("상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.set_fittocontents("height");
                p.Static05.move("121","852","100%","40",null,null);

                p.Static03.set_taborder("14");
                p.Static03.set_text("보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("80","897","100%","40",null,null);

                p.staLabel00_00_00_00.set_taborder("21");
                p.staLabel00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00.set_text("위해물품사용 준수사항동의여부");
                p.staLabel00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00.set_taborder("22");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00.move("20.00","648","300","90",null,null);

                p.panDgadsCmdtyUseCmpanAgreYn.set_taborder("23");
                p.panDgadsCmdtyUseCmpanAgreYn.set_horizontalgap("20");
                p.panDgadsCmdtyUseCmpanAgreYn.set_flexcrossaxiswrapalign("start");
                p.panDgadsCmdtyUseCmpanAgreYn.set_flexwrap("wrap");
                p.panDgadsCmdtyUseCmpanAgreYn.set_fittocontents("height");
                p.panDgadsCmdtyUseCmpanAgreYn.set_verticalgap("0");
                p.panDgadsCmdtyUseCmpanAgreYn.set_spacing("0px 20px 10px 20px");
                p.panDgadsCmdtyUseCmpanAgreYn.set_cssclass("pal_WF_DtlBg");
                p.panDgadsCmdtyUseCmpanAgreYn.move("0","648","100.00%","101",null,null);

                p.Button00.set_taborder("33");
                p.Button00.set_text("외곽초소 위치도");
                p.Button00.set_cssclass("btn_WF_SmallGray");
                p.Button00.move("95","1210","120","34",null,null);

                p.staLabel00_00_00_00_00.set_taborder("25");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_00.set_text("반입초소지정");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00.set_taborder("26");
                p.Panel00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00.move("20.00","1077","300","90",null,null);

                p.panCrynChckpntCd.set_taborder("27");
                p.panCrynChckpntCd.set_horizontalgap("20");
                p.panCrynChckpntCd.set_flexcrossaxiswrapalign("start");
                p.panCrynChckpntCd.set_flexwrap("wrap");
                p.panCrynChckpntCd.set_fittocontents("height");
                p.panCrynChckpntCd.set_verticalgap("0");
                p.panCrynChckpntCd.set_spacing("0px 20px 10px 20px");
                p.panCrynChckpntCd.set_cssclass("pal_WF_DtlBg");
                p.panCrynChckpntCd.move("0","1077","100.00%","380",null,null);

                p.Panel02.set_taborder("32");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("4");
                p.Panel02.set_spacing("5px 0px 0px 0px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("20","1167","100%","279",null,null);

                p.Static13.set_taborder("38");
                p.Static13.set_text("입.출시 동일 출입구 이용");
                p.Static13.set_cssclass("sta_WF_Des3");
                p.Static13.set_fittocontents("height");
                p.Static13.move("195","1412","100%","40",null,null);

                p.Static12.set_taborder("37");
                p.Static12.set_text("* 예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n* 예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
                p.Static12.set_cssclass("sta_WF_Des2");
                p.Static12.set_fittocontents("height");
                p.Static12.move("138","1421","100%","57",null,null);

                p.Static11.set_taborder("36");
                p.Static11.set_text("부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택");
                p.Static11.set_cssclass("sta_WF_Des");
                p.Static11.set_fittocontents("height");
                p.Static11.move("147","1365","100%","40",null,null);

                p.Static10.set_taborder("35");
                p.Static10.set_text("출국심사장 내 공사/작업 시 “출국심사장” 선택");
                p.Static10.set_cssclass("sta_WF_Des");
                p.Static10.set_fittocontents("height");
                p.Static10.move("127","1275","100%","40",null,null);

                p.Static09.set_taborder("34");
                p.Static09.set_text("출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)");
                p.Static09.set_cssclass("sta_WF_Des");
                p.Static09.set_fittocontents("height");
                p.Static09.move("92","1225","100%","40",null,null);

                p.pan02Blank.set_taborder("31");
                p.pan02Blank.set_flexgrow("1");
                p.pan02Blank.move("520","1077","300","1",null,null);

                p.cmbCrynChckpntCd.set_taborder("28");
                p.cmbCrynChckpntCd.set_flexgrow("1");
                p.cmbCrynChckpntCd.set_innerdataset("dsCrynChckpntCd");
                p.cmbCrynChckpntCd.set_codecolumn("cdId");
                p.cmbCrynChckpntCd.set_datacolumn("cdNm");
                p.cmbCrynChckpntCd.set_text("선택");
                p.cmbCrynChckpntCd.set_value("선택");
                p.cmbCrynChckpntCd.set_index("-1");
                p.cmbCrynChckpntCd.move("131","1132","150","40",null,null);

                p.cmbCrynChckpntUpCd.set_taborder("29");
                p.cmbCrynChckpntUpCd.set_flexgrow("1");
                p.cmbCrynChckpntUpCd.set_innerdataset("dsCrynChckpntUpCd");
                p.cmbCrynChckpntUpCd.set_codecolumn("cdId");
                p.cmbCrynChckpntUpCd.set_datacolumn("cdNm");
                p.cmbCrynChckpntUpCd.set_text("");
                p.cmbCrynChckpntUpCd.set_index("-1");
                p.cmbCrynChckpntUpCd.move("217","1146","150","40",null,null);

                p.Panel01.set_taborder("30");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("20","1140","100%","40",null,null);

                p.staLabel00_00_00_00_00_00.set_taborder("39");
                p.staLabel00_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00_00_00.set_text("선택사유 및 이용예정초소");
                p.staLabel00_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00_00.set_taborder("40");
                p.Panel00_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00_00.move("20.00","1077","980","170",null,null);

                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_taborder("41");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_horizontalgap("20");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_flexcrossaxiswrapalign("start");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_flexwrap("wrap");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_fittocontents("height");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_spacing("0px 20px 10px 20px");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.set_cssclass("pal_WF_DtlBg");
                p.panWholChckpntChcRsnUtztnPrnmntChckpnt.move("0","1077","100.00%","269",null,null);

                p.Static15.set_taborder("44");
                p.Static15.set_text("외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
                p.Static15.set_cssclass("sta_WF_Des");
                p.Static15.set_fittocontents("height");
                p.Static15.move("252","1757","100%","40",null,null);

                p.Static14.set_taborder("43");
                p.Static14.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정");
                p.Static14.set_cssclass("sta_WF_Des2");
                p.Static14.set_fittocontents("height");
                p.Static14.move("80","1715","100%","40",null,null);

                p.Panel03.set_taborder("45");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("4");
                p.Panel03.set_spacing("5px 0px 0px 0px");
                p.Panel03.move("20","1661","100%","90",null,null);

                p.txtChcRsnUsePrnmntChckpntCn.set_taborder("42");
                p.txtChcRsnUsePrnmntChckpntCn.set_displaynulltext("내용 입력");
                p.txtChcRsnUsePrnmntChckpntCn.move("84","1558","100%","120",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPutMtrlToolList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlToolList.form
            obj = new Layout("mobile","",0,0,this.divPutMtrlToolList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPutMtrlToolList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPutMtrlToolList.form
            obj = new Layout("Layout0","",0,0,this.divPutMtrlToolList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPutMtrlToolList.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("투입자재및공구류등(작업신고서)");

                p.panForm.set_taborder("0");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.set_verticalgap("0");
                p.panForm.move("0","0","100.00%","5000",null,null);

                p.staSubTitle03.set_taborder("1");
                p.staSubTitle03.set_text("투입자재 및 공구류 등(위해물품 및 위험물 포함)");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("40","3210","100%","50",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("860","3210","200","50",null,null);

                p.panPutMtrlTool.set_taborder("3");
                p.panPutMtrlTool.set_fittocontents("none");
                p.panPutMtrlTool.set_flexcrossaxisalign("end");
                p.panPutMtrlTool.set_minheight("70");
                p.panPutMtrlTool.set_maxheight("");
                p.panPutMtrlTool.move("40","3210","100%","70",null,null);

                p.btnPutMtrlTool.set_taborder("4");
                p.btnPutMtrlTool.set_cssclass("btn_WF_ACMinus");
                p.btnPutMtrlTool.move("740","3176","34","34",null,null);

                p.divPutMtrlTool.set_taborder("5");
                p.divPutMtrlTool.set_text("신청자정보");
                p.divPutMtrlTool.set_cssclass("div_WF_Bg");
                p.divPutMtrlTool.set_fittocontents("height");
                p.divPutMtrlTool.move("1400","331","100.00%","240",null,null);

                p.divPutMtrlToolList.set_taborder("6");
                p.divPutMtrlToolList.set_text("신청자정보");
                p.divPutMtrlToolList.set_cssclass("div_WF_Bg");
                p.divPutMtrlToolList.set_fittocontents("height");
                p.divPutMtrlToolList.move("0","380","100.00%","1676",null,null);

                p.staSubTitle03_00.set_taborder("7");
                p.staSubTitle03_00.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
                p.staSubTitle03_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03_00.move("10","30","100%","50",null,null);

                p.btnPutMtrlToolList.set_taborder("8");
                p.btnPutMtrlToolList.set_cssclass("btn_WF_ACMinus");
                p.btnPutMtrlToolList.move("138","16","34","34",null,null);

                p.Panel00_00.set_taborder("9");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1117","30","172","50",null,null);

                p.panPutMtrlToolList.set_taborder("10");
                p.panPutMtrlToolList.set_fittocontents("none");
                p.panPutMtrlToolList.set_flexcrossaxisalign("end");
                p.panPutMtrlToolList.set_minheight("70");
                p.panPutMtrlToolList.set_maxheight("");
                p.panPutMtrlToolList.move("10","386","100.00%","70",null,null);

                p.staLabel03_00.set_taborder("11");
                p.staLabel03_00.set_text("전달사항");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("40","2432","100%","46",null,null);

                p.TextArea01.set_taborder("12");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("40","2477","100%","100",null,null);

                p.Panel02_00.set_taborder("13");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.move("40","2432","100%","381",null,null);

                p.pan02.set_taborder("14");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("20","2432","100.00%","438",null,null);

                p.Panel01.set_taborder("15");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("62","2156","100.00%","301",null,null);

                p.grdPrcsCsaf.set_taborder("16");
                p.grdPrcsCsaf.set_autofittype("col");
                p.grdPrcsCsaf.set_binddataset("dsPrcsCsaf");
                p.grdPrcsCsaf.move("252","2296","100%","200",null,null);

                p.Panel02.set_taborder("17");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("4");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("20","2396","100%","64",null,null);

                p.Static00.set_taborder("18");
                p.Static00.set_text("[<fc v=\"#1e4ebe\">관련부서처리</fc>] 단계에서 각 부서별 담당자가 모두 [<fc v=\"#1e4ebe\">협의완료</fc>]해야 <fc v=\"#1e4ebe\">작업신고서</fc>를 출력하실 수 있습니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.set_usedecorate("true");
                p.Static00.move("110","2442","100%","30",null,null);

                p.Static01.set_taborder("19");
                p.Static01.set_text("<fc v=\'#f00000\'>처리가 지연될 경우</fc> 처리중인 부서 담당자에게 연락바랍니다.");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.set_fittocontents("height");
                p.Static01.set_usedecorate("true");
                p.Static01.move("70","2496","100%","30",null,null);

                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_taborder("20");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_flexgrow("0");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_fittocontents("width");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.move("0","0","87","46",null,null);

                p.btnRltnDeptStngEblcAdd.set_taborder("21");
                p.btnRltnDeptStngEblcAdd.set_text("일괄추가");
                p.btnRltnDeptStngEblcAdd.set_cssclass("btn_WF_Small");
                p.btnRltnDeptStngEblcAdd.set_visible("true");
                p.btnRltnDeptStngEblcAdd.set_fittocontents("width");
                p.btnRltnDeptStngEblcAdd.move("1060","10","78","34",null,null);

                p.btnRltnDeptStngAdd.set_taborder("22");
                p.btnRltnDeptStngAdd.set_text("추가");
                p.btnRltnDeptStngAdd.set_cssclass("btn_WF_Small");
                p.btnRltnDeptStngAdd.set_visible("true");
                p.btnRltnDeptStngAdd.set_fittocontents("width");
                p.btnRltnDeptStngAdd.move("1070","1","47","34",null,null);

                p.btnRltnDeptStngDel.set_taborder("23");
                p.btnRltnDeptStngDel.set_text("삭제");
                p.btnRltnDeptStngDel.set_cssclass("btn_WF_Small");
                p.btnRltnDeptStngDel.set_visible("true");
                p.btnRltnDeptStngDel.set_fittocontents("width");
                p.btnRltnDeptStngDel.move("804.00","10","45","34",null,null);

                p.btnRltnDeptStngStrg.set_taborder("24");
                p.btnRltnDeptStngStrg.set_text("저장");
                p.btnRltnDeptStngStrg.set_cssclass("btn_WF_Small");
                p.btnRltnDeptStngStrg.set_visible("true");
                p.btnRltnDeptStngStrg.set_fittocontents("width");
                p.btnRltnDeptStngStrg.move("1234","10","45","34",null,null);

                p.btnRltnDeptStngInq.set_taborder("25");
                p.btnRltnDeptStngInq.set_text("조회(숨김)");
                p.btnRltnDeptStngInq.set_cssclass("btn_WF_Small");
                p.btnRltnDeptStngInq.set_visible("false");
                p.btnRltnDeptStngInq.set_fittocontents("width");
                p.btnRltnDeptStngInq.move("920","10","75","34",null,null);

                p.panRltnDeptStngBtn.set_taborder("26");
                p.panRltnDeptStngBtn.set_flexgrow("1");
                p.panRltnDeptStngBtn.set_flexcrossaxisalign("center");
                p.panRltnDeptStngBtn.set_flexmainaxisalign("end");
                p.panRltnDeptStngBtn.set_horizontalgap("10");
                p.panRltnDeptStngBtn.set_flexcrossaxiswrapalign("center");
                p.panRltnDeptStngBtn.set_fittocontents("height");
                p.panRltnDeptStngBtn.set_flexwrap("wrap");
                p.panRltnDeptStngBtn.move("298","0","298","46",null,null);

                p.panTitle01_00_00_00_00_00_00_00_00_04.set_taborder("27");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_flexwrap("wrap");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_flexcrossaxisalign("center");
                p.panTitle01_00_00_00_00_00_00_00_00_04.move("20","10","100.00%","46",null,null);

                p.grdRltnDeptStng.set_taborder("28");
                p.grdRltnDeptStng.set_binddataset("dsRltnDeptStng");
                p.grdRltnDeptStng.set_extendsizetype("row");
                p.grdRltnDeptStng.set_autosizingtype("row");
                p.grdRltnDeptStng.set_scrollbartype("none none");
                p.grdRltnDeptStng.move("20","10","100.00%","285",null,null);

                p.panRltnDeptStng.set_taborder("29");
                p.panRltnDeptStng.set_fittocontents("height");
                p.panRltnDeptStng.set_spacing("10px 20px 10px 20px");
                p.panRltnDeptStng.set_flexwrap("wrap");
                p.panRltnDeptStng.set_cssclass("pal_WF_DtlBg");
                p.panRltnDeptStng.set_verticalgap("4");
                p.panRltnDeptStng.set_type("vertical");
                p.panRltnDeptStng.move("0","0","100.00%","581",null,null);

                p.Panel03.set_taborder("30");
                p.Panel03.set_type("vertical");
                p.Panel03.set_verticalgap("4");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("988","2994","100%","221",null,null);

                p.btn00.set_taborder("31");
                p.btn00.set_text("작업신고서 출력");
                p.btn00.set_cssclass("btn_WF_Small");
                p.btn00.move("470","2937","111","34",null,null);

                p.Static02.set_taborder("33");
                p.Static02.set_text("보안 협조 담당자가 [해당사항없음] 처리를 진행 시 투입자재 리스트 및 스티커를 출력하실 수 없습니다.");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("474","3047","100%","30",null,null);

                p.Panel04.set_taborder("32");
                p.Panel04.set_flexmainaxisalign("end");
                p.Panel04.move("0","0","100%","34",null,null);

                p.Static03.set_taborder("34");
                p.Static03.set_text("투입자재 및 공구류를 파일첨부한 경우 첨부한 파일을 출력하여 초소제출 및 작업장 비치");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("135","3025","100%","30",null,null);

                p.Static03_00.set_taborder("35");
                p.Static03_00.set_text("일반용지 외에 라벨지에 출력가능(라벨지 품명 및 규격 : 세모네모 C-3033 (30칸))");
                p.Static03_00.set_cssclass("sta_WF_Des");
                p.Static03_00.set_fittocontents("height");
                p.Static03_00.move("10","112","100%","30",null,null);

                p.Static04.set_taborder("36");
                p.Static04.set_text("단기/임시 출입증 소지자가 보호구역에 위해물품 등을 반입할 경우 작업신고서의 신청번호를 공구함 등에 부착하여야 합니다.\r\n(단, 공구함 미소지 시에는 개별 공구로 부착)");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.move("112","3135","100%","47",null,null);

                p.Static05.set_taborder("37");
                p.Static05.set_text("※ window 7 이상의 OS에서 출력 가능합니다. (Windows XP 출력 불가) ");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.set_fittocontents("height");
                p.Static05.move("78","3125","100%","30",null,null);

                p.grdAtchCn.set_taborder("38");
                p.grdAtchCn.set_binddataset("dsRvwOpnn");
                p.grdAtchCn.set_autofittype("col");
                p.grdAtchCn.move("1304","2662","100%","228",null,null);

                p.Static00_00.set_taborder("39");
                p.Static00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("1304","2625","100%","37",null,null);

                p.RaonkUploadRvw.set_taborder("40");
                p.RaonkUploadRvw.set_DevelopLangage("JAVA");
                p.RaonkUploadRvw.set_ExtensionAllowOrLimit("1");
                p.RaonkUploadRvw.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUploadRvw.set_RunTimes("html5");
                p.RaonkUploadRvw.set_ButtonBarView("0");
                p.RaonkUploadRvw.set_AllowDuplicationFile("1");
                p.RaonkUploadRvw.set_text("");
                p.RaonkUploadRvw.set_DisableDeleteConfirm("1");
                p.RaonkUploadRvw.set_positionstep("0");
                p.RaonkUploadRvw.set_visible("false");
                p.RaonkUploadRvw.move("-1080","630","1020","200",null,null);

                p.btnRcmdtnCoprAltmnt.set_taborder("41");
                p.btnRcmdtnCoprAltmnt.set_text("협조자추천");
                p.btnRcmdtnCoprAltmnt.set_cssclass("btn_WF_Small");
                p.btnRcmdtnCoprAltmnt.set_visible("true");
                p.btnRcmdtnCoprAltmnt.set_fittocontents("width");
                p.btnRcmdtnCoprAltmnt.move("1360","2883","78","34",null,null);
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

                p.grdPrcsCsaf.set_autofittype("none");

                p.grdRltnDeptStng.set_autofittype("none");
                p.grdRltnDeptStng.set_scrollbartype("default default");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPutMtrlTool.form.rdoPutMtrlToolKndCrynYn","value","dsJobWtpl","putMtrlToolKndCrynYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPutMtrlTool.form.chkArcftInsdCrynPhbtCmdtyDocReadYn","value","dsJobWtpl","arcftInsdCrynPhbtCmdtyDocReadYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPutMtrlToolList.form.cmbCrynChckpntCd","value","dsJobWtpl","crynChckpntCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPutMtrlToolList.form.txtChcRsnUsePrnmntChckpntCn","value","dsJobWtpl","chcRsnUsePrnmntChckpntCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","panRltnDeptStng","visible","dsAtrb","vsRltnDeptStng");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","grdRltnDeptStng","readonly","dsAtrb","roRltnDeptStngEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPutMtrlTool.form.rdoPutMtrlToolKndCrynYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPutMtrlTool.form.chkArcftInsdCrynPhbtCmdtyDocReadYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPutMtrlToolList.form.chkDgadsCmdtyUseCmpanAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPutMtrlToolList.form.cmbCrynChckpntUpCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPutMtrlToolList.form.cmbCrynChckpntCd","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPutMtrlToolList.form.txtChcRsnUsePrnmntChckpntCn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Panel01","visible","dsAtrb","vsPrcsCsaf");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Panel02","visible","dsAtrb","vsPrcsCsafGd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","TextArea01","readonly","dsAtrb","roCnvyMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","grdAtchCn","visible","dsAtrb","vsAtchCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divPutMtrlToolList.form.divPutMtrlToolList.form.panPutMtrlToolList","visible","dsAtrb","vsAplcfmWrt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","panRltnDeptStngBtn","visible","dsAtrb","vsRltnDeptStngEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Panel03","visible","dsAtrb","vsDocOtpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divPutMtrlToolList.form.chkDgadsCmdtyUseCmpanAgreYn","value","dsJobWtpl","dgadsCmdtyUseCmpanAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divPutMtrlToolList.form.panDgadsCmdtyUseCmpanAgreYn","value","dsJobWtpl","dgadsCmdtyUseCmpanAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPutMtrlTool.form.staLabel00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divPutMtrlTool.form.staLabel00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divPutMtrlToolList.form.cmbCrynChckpntUpCd","value","dsJobWtpl","crynChckpntUpCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPutMtrlToolList.form.staLabel00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divPutMtrlToolList.form.staLabel00_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divPutMtrlToolList.form.staLabel00_00_00_00_00_00","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST006S03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006S03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST006S03.xfdl
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

            // 조회 및 처리 Dataset
            this.dsSearch = this.lookup("dsSearch");
        	// Master Dataset
            this.dsMst = this.lookup("dsMst");
        	this.dsMst.addEventHandler("onload", this.dsMst_onload, this);
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 작업계획서 Dataset
            this.dsJobWtpl = this.lookup("dsJobWtpl");
        	this.dsJobWtpl.addEventHandler("onvaluechanged", this.dsJobWtpl_onvaluechanged, this);
        	// 투입자재 및 공구류 목록 Dataset
            this.dsMtrlToolList = this.lookup("dsMtrlToolList");
        	this.dsMtrlToolList.addEventHandler("onvaluechanged", this.dsMtrlToolList_onvaluechanged, this);
        	// 처리현황 Dataset
            this.dsPrcsCsaf = this.lookup("dsPrcsCsaf");
        	this.dsPrcsCsaf.addEventHandler("onvaluechanged", this.dsPrcsCsaf_onvaluechanged, this);
        	// 속성 Dataset
            this.dsAtrb = this.lookup("dsAtrb");
        	this.dsAtrb.addEventHandler("onvaluechanged", this.dsAtrb_onvaluechanged, this);
        	// 단계별 속성 값 조회
        	this.cfnGetAtrb = this.lookupFunc("cfnGetAtrb");
        	// 업무처리흐름 정보 유무 확인
        	this.cfnIsExstTaskPrcsFlw = this.lookupFunc("cfnIsExstTaskPrcsFlw");

        	// 작업계획서 DS onvaluechanged 이벤트 호출
        	this.dsJobWtpl_onvaluechanged(this.dsJobWtpl, { columnid:"" });

        	// 공통코드 불러오기
        	this.cfnComCdLoad({ id:this.dsCrynChckpntUpCd.name, cbf:"fnCallback", dsCrynChckpntUpCd:"WPLWATCHBOX:S", dsCrynChckpntCd:"WPLWATCHBOX:S" });  // 반입초소
        	// Raonk Upload
        	this.RaonkUpload = this.lookup("RaonkUpload");
        	// 기타코드(협조업무코드, 처리그룹코드) 조회
        	//this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack"
            //                  , dsJobGroupCd:"{id:'selectjobGroupCdList', opt:'S:jobGroupNm', cnd:{jobGroupId:'WOGSECWS0010', upJobGroupId:'WOGCOPM'}}"  // 처리그룹코드
        	//				  , dsDocCd     :"{id:'selectDocCdList'     , opt:'S:docNm'}"                                                                // 협조업무코드
        	//                 });
        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");
        };

        this.dsMst_onload = function(obj,e)
        {
        	// 조회(관련부서설정)
            this.fnSrvcCall(this.btnRltnDeptStngInq.name);

        	this.resetScroll();
        };

        this.dsMst_onvaluechanged= function(obj,e)
        {
        	this.resetScroll();
        };

        this.dsJobWtpl_onvaluechanged = function(obj,e)
        {
            // 보안구역여부
        	// ------------
        	// 투입자재 및 공구류 등(위해물품 및 위험물 포함)
        	var jobZoneCd = this.dsJobWtpl.getColumn(0, "jobZoneCd") || " ";  // 작업구역코드
        	this.panPutMtrlTool.visible = jobZoneCd.indexOf("TSCWPLARA001") != -1;  // TSCWPLARA001:A/S(보호구역)
        	this.divPutMtrlTool.visible = this.panPutMtrlTool.visible;

        	// 투입자재 및 공구류 반입여부
        	if(this.gfnIsNull(e.columnid) || e.columnid == "putMtrlToolKndCrynYn" || e.columnid == "jobZoneCd") {
        		// 항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부
                this.divPutMtrlTool.form.panArcftInsdCrynPhbtCmdtyDocReadYn.visible = obj.getColumn(0, "putMtrlToolKndCrynYn") == "1" && this.divPutMtrlTool.visible;
        	    // 투입자재 미치 공구류 등(위해물품 및 위험물 포함)
        	    this.panPutMtrlToolList.visible = this.divPutMtrlTool.form.panArcftInsdCrynPhbtCmdtyDocReadYn.visible;
        		this.divPutMtrlToolList.visible = this.divPutMtrlTool.form.panArcftInsdCrynPhbtCmdtyDocReadYn.visible;
        	}

        	// 반입초소지정
        	if(this.gfnIsNull(e.columnid)) {
        		this.divPutMtrlToolList_cmbCrynChckpntUpCd_onitemchanged(this.divPutMtrlToolList.form.cmbCrynChckpntUpCd, { "isInit":true });
        		this.divPutMtrlToolList_cmbCrynChckpntCd_onitemchanged  (this.divPutMtrlToolList.form.cmbCrynChckpntCd  , { "isInit":true });
        	}

        	this.resetScroll();
        };

        this.dsMtrlToolList_onvaluechanged = function(obj,e)
        {
            var oGrd = this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList;
        	oGrd.height = oGrd.getRealRowFullSize() + 20;
        	oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 50;
        	oGrd.parent.parent.parent.parent.height = oGrd.parent.parent.parent.parent.height;

        	this.resetScroll();
         };

        this.dsPrcsCsaf_onvaluechanged = function(obj,e)
        {
        	var oGrd = this.grdPrcsCsaf;
        	oGrd.height = oGrd.getRealRowFullSize() + 20;

        	//oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 50;
        	//oGrd.parent.parent.parent.parent.height = oGrd.parent.parent.parent.parent.height;

        	this.resetScroll();
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// 버튼정보 조회
        	if(this.cfnGetAtrb.call("vsRltnDeptStngEdtr")) {  // 관련부서설정
        		this.cfnBtnCrt({ inqCnd : { jobPrcsPrgrsSeCd: "TAS00616" } });
        	}

        	// 그리드 Expr 실행
        	this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.redrawExprCell();

        	// 투입자재 및 공구류 목록 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsAplcfmWrt")) {
        		this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.setRealColSize("body", 0, this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.upsize);
        	} else {
        		this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.upsize = this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.upsize
        												                                       ? this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.upsize
        													                                   : this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.getRealColSize(0, "size")
        													                                   ;
        		this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList.setRealColSize("body", 0, 0);
        	}

        	// 관련부서설정 목록 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsRltnDeptStngEdtr")) {
        		this.grdRltnDeptStng.setRealColSize("body", 0, this.grdRltnDeptStng.upsize);
        	} else {
        		this.grdRltnDeptStng.upsize = this.grdRltnDeptStng.upsize
        							        ? this.grdRltnDeptStng.upsize
        							        : this.grdRltnDeptStng.getRealColSize(0, "size")
        							        ;
        		this.grdRltnDeptStng.setRealColSize("body", 0, 0);
        	}
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.btnRltnDeptStngInq.name :     // 조회(관련부서설정)
        			strSvcUrl = "jobWtpl/selectRvw.do";
        			inData    = "dsSearch=dsSearch";                   // 조회조건
        			outData   = "dsRltnDeptStng=dsRltnDeptStng" + " "  // 관련부서설정
        			          + "dsRvwAtfl=dsRvwAtfl"
        					  ;
        			break;

        		case this.btnRltnDeptStngStrg.name :    // 저장(관련부서설정)
        			strSvcUrl = "jobWtpl/saveRvw.do";
        			inData    = [];
        			outData   = "";
        			if(this.gfnDsIsUpdated(this.dsRltnDeptStng)) { inData.push("dsJobDrctn=dsRltnDeptStng:U" ); }  // 관련부서설정
        			if(this.gfnDsIsUpdated(this.dsRvwAtfl     )) { inData.push("dsRvwAtfl=dsRvwAtfl:U"       ); }  // 검토 첨부파일
        			inData = inData.join(" ");

        			break;

        		case this.btnRcmdtnCoprAltmnt.name :     // 추천협조자배정
        			strSvcUrl = "jobWtpl/insertRcmdtnCoprEmplAltmnt.do";
        			inData    = "dsSearch=dsSearch";                   // 조회조건
        			outData   = "";

        			break;

        		case this.RaonkUploadRvw.name :   // 첨부파일 저장
        			var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        			          , "bsnsSeCd" : "TSPTSC"   // 업무구분코드(입주자서비스)
        				      , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        			};

        			this.RaonkUploadRvw.AddFormData('params', JSON.stringify(obj));
        			this.RaonkUploadRvw.Transfer();

        			return;

        			break;

        		default :

        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.btnRltnDeptStngInq.name :     // 조회(관련부서설정)

        			break;

        		case this.btnRltnDeptStngStrg.name :     // 저장(관련부서설정)
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");
        			// 조회
        			this.dsSearch.setColumn(0, "dtlProcsEtcCn", "WORPL");
        			this.btnRltnDeptStngInq.click();

        			break;

        		case this.btnRcmdtnCoprAltmnt.name :     // 추천협조자배정
        			// CST_003:정상적으로 처리되었습니다.
        			// CST_010:추천 받을 공종 협조자가 존재하지 않습니다.
        			this.gfnAlertMsg("save", errMsg);

        			break;

        		case this.RaonkUploadRvw.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsRvwAtfl.setColumn(this.dsRvwAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}
        			// 저장
        		    this.btnRltnDeptStngStrg.click();     // 저장(관련부서설정)

        			break;

        		case this.dsCrynChckpntUpCd.name :   // 반입초소
        			this.dsCrynChckpntUpCd.filter("!uprCd");
        			this.divPutMtrlToolList.form.cmbCrynChckpntUpCd.index = 0;

        			break;

        		default :
        			break;
        	}
        };

        // 팝업 관련 콜백 함수
        this.fnPopupCallback = function(sPopupId, oRtn)
        {
        	switch(sPopupId) {
        		case "picSch" :  // 담당자 찾기
        		    if(this.gfnIsNull(oRtn)) { return; }
        			oRtn = JSON.parse(oRtn);

        			var ds = this[this.getFocus().parent.parent.parent.parent.binddataset];
        			ds.setColumn(ds.rowposition, "prcrId"    , oRtn.userId   );  // 담당자ID
        		    ds.setColumn(ds.rowposition, "prcrNm"    , oRtn.userNm   );  // 담당자명
        			ds.setColumn(ds.rowposition, "prcrTelno" , oRtn.userTelno);  // 담당자전화번호
        			ds.setColumn(ds.rowposition, "prcrInstCd", oRtn.coId     );  // 회사ID
        			ds.setColumn(ds.rowposition, "prcrDeptCd", oRtn.deptId   );  // 부서ID

                    // 담당부서 표시를 위한 처리
        			if(this.dsJobGroupCd.findRow("jobGroupId", oRtn.userId) == -1) {
        				var nRow = this.dsJobGroupCd.addRow();
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupId", oRtn.userId);
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupNm", oRtn.deptNm);
        				ds.setColumn(ds.rowposition, "tmprCd", oRtn.userId);
        			}

        			break;

        		case this.grdRltnDeptStng.name :  // 관련부서설정
        		    var ds = this[this.getFocus().binddataset];
        			if(!this.gfnIsNull(oRtn)) {
        			    if(oRtn) {
        				    var rtnVal = JSON.parse(oRtn);
        					if(rtnVal.hasOwnProperty("acptnHnovAprvCd")) {
        						ds.setColumn(ds.rowposition, "acptnHnovAprvCd", rtnVal.acptnHnovAprvCd);  // 검토결과코드
        						ds.setColumn(ds.rowposition, "prcsRsltCn"     , rtnVal.prcsRsltCn);       // 검토결과내용
        					}

        					// 첨부파일 변경시 첨부파일부터 저장
        					if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 첨부파일 변경시
        						// 첨부파일 저장
        						this.fnSrvcCall(this.RaonkUploadRvw.name);
        					} else {
        						// 저장
        					    this.btnRltnDeptStngStrg.click();  // 저장(관련부서설정)
        					}
        				}
        			} else {
        			    // 취소시
        				if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 파일추가를 시도했을 경우
        					// 조회
        				    this.dsSearch.setColumn(0, "dtlProcsEtcCn", "WORPL");
        				    this.btnRltnDeptStngInq.click();  // 조회(관련부서설정)
        				}
        			}

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

        	// 투입자재 및 공구류 반입여부
        	if(this.divPutMtrlTool.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "putMtrlToolKndCrynYn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["투입자재 및 공구류 반입여부"], function() {
        				this.parent.parent.setStepIndex(2);
        				this.divPutMtrlTool.form.rdoPutMtrlToolKndCrynYn.setFocus();
        			});

        			return false;
        		}
        	}

        	// 항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부
        	if(this.divPutMtrlTool.form.panArcftInsdCrynPhbtCmdtyDocReadYn.visible) {
        		if(this.dsJobWtpl.getColumn(0, "arcftInsdCrynPhbtCmdtyDocReadYn") != "1") {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부"], function() {
        				this.parent.parent.setStepIndex(2);
        				this.divPutMtrlTool.form.chkArcftInsdCrynPhbtCmdtyDocReadYn.setFocus();
        			});

        			return false;
        		}
        	}

        	// 투입자재 및 공구류 목록
        	var grd = this.divPutMtrlToolList.form.divPutMtrlToolList.form.grdPutMtrlToolList;
        	for(var i = 0; i < this.dsMtrlToolList.rowcount; i++) {
        		if(this.gfnIsNull(this.dsMtrlToolList.getColumn(i, "cmdtyNm"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.parent.parent.setStepIndex(2);
        			this.gfnAlertMsg("CST_004", "CST_004", ["물품명"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "cmdtyNm"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}

        		if(this.gfnIsNull(this.dsMtrlToolList.getColumn(i, "qty"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.parent.parent.setStepIndex(2);
        			this.gfnAlertMsg("CST_004", "CST_004", ["수량"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "qty"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}

        		if(this.gfnIsNull(this.dsMtrlToolList.getColumn(i, "unitVl"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.parent.parent.setStepIndex(2);
        			this.gfnAlertMsg("CST_004", "CST_004", ["단위"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "unitVl"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}

        		if(this.gfnIsNull(this.dsMtrlToolList.getColumn(i, "spcfctVl"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.parent.parent.setStepIndex(2);
        			this.gfnAlertMsg("CST_004", "CST_004", ["규격(길이/용량)"], function() {
        				grd.setFocus();
        				grd.setCellPos(grd.getBindCellIndex("body", "spcfctVl"), i);
        				grd.showEditor(true);
        			});

        			return false;
        		}
        	}

        	// 위해물품사용 준수사항동의여부
        	if(this.divPutMtrlToolList.form.panDgadsCmdtyUseCmpanAgreYn.visible) {
        		if(this.dsJobWtpl.getColumn(0, "dgadsCmdtyUseCmpanAgreYn") != '1') {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["위해물품사용 준수사항동의여부"], function() {
        				this.parent.parent.setStepIndex(2);
        				this.divPutMtrlToolList.form.chkDgadsCmdtyUseCmpanAgreYn.setFocus();
        			});

        			return false;
        		}
        	}

        	// 반입초소지정
        	if(this.divPutMtrlToolList.form.panCrynChckpntCd.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "crynChckpntCd"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["반입초소지정"], function() {
        				this.parent.parent.setStepIndex(2);
        				this.divPutMtrlToolList.form.cmbCrynChckpntCd.setFocus();
        			});

        			return false;
        		}
        	}

            // 선택사유 및 이용예정초소
            if(this.divPutMtrlToolList.form.panWholChckpntChcRsnUtztnPrnmntChckpnt.visible) {
        		if(this.gfnIsNull( this.dsJobWtpl.getColumn(0, "chcRsnUsePrnmntChckpntCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["선택사유 및 이용예정초소"], function() {
        				this.parent.parent.setStepIndex(2);
        				this.divPutMtrlToolList.form.txtChcRsnUsePrnmntChckpntCn.setFocus();
        			});

        			return false;
        		}
        	}

        	return true;
        };

        this.cfnRvwAdd = function(ds, wfInfo) {
            // Rvw_Button_onclick
            var nRow = ds.findRow("cstrnKndCd", wfInfo.docCd);
        	    nRow = nRow == -1 ? ds.rowcount : (nRow + 1);
            ds.insertRow(nRow);
        	ds.setColumn(nRow, "souId"        , this.dsMst.getColumn(0, "aplyNo")         );  // 원천ID(신청서번호)
        	ds.setColumn(nRow, "jobCd"        , wfInfo.jobPrcsPrgrsSeCd                   );  // 단계코드
        	ds.setColumn(nRow, "jobNm"        , wfInfo.jobPrcsPrgrsSeCdNm                 );  // 단계명
        	ds.setColumn(nRow, "cstrnKndCd"   , wfInfo.docCd                              );  // 협조업무코드
        	// -----------------
        	ds.setColumn(nRow, "dtlProcsEtcCn", "WORPL"                                   );  // 상세공정기타내용
        	ds.setColumn(nRow, "souProcsId"   , "TSC"                                     );  // 원천공정ID
        	ds.setColumn(nRow, "aplcntId"     , this.objApp.gdsUser.getColumn(0, "userId"));  // 신청자ID
        	ds.setColumn(nRow, "aplcntInstCd" , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 신청자기관코드
        	ds.setColumn(nRow, "aplcntDeptCd" , this.objApp.gdsUser.getColumn(0, "deptId"));  // 신청자부서코드
        	ds.setColumn(nRow, "rgtrId"       , this.objApp.gdsUser.getColumn(0, "userId"));  // 등록자ID
        	ds.setColumn(nRow, "rgtrInstCd"   , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 등록자기관코드
        	ds.setColumn(nRow, "rgtrDeptCd"   , this.objApp.gdsUser.getColumn(0, "deptId"));  // 등록자부서코드
        };

        // 행의 높이에 따라 그리드의 높이를 재설정
        this.cfnGridResizeHeight = function(oGrd) {
        	oGrd.height = oGrd.getRealRowFullSize() + 20;
        	//oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 80;
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

        this.divPutMtrlToolList_divPutMtrlToolList_Button_onclick = function(obj,e)
        {
        	if(obj.name == this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnFormDwnld.name) {   // 업로드엑셀양식다운로드

        	} else if(obj.name == this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnUld.name) {  // 물품목록일괄업로드
        		var objImport      = this.gfnCreateImportObject();
        		var sImportCommand = "[Command=getsheetdata;Output=output1; Body=Sheet1!A4]";
        		var sDatasetList   = "dsUld=output1";
        		objImport.importData("", sImportCommand, sDatasetList);
        	} else if(obj.name == this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnAdd.name) {  // 추가
        		this.dsMtrlToolList.addRow();
        	} else if(obj.name == this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnDel.name) {  // 삭제
        		for(var i = this.dsMtrlToolList.rowcount - 1; i >= 0; i--) {
        			if(this.dsMtrlToolList.getColumn(i, "chc") == "1") {
        				this.dsMtrlToolList.deleteRow(i);
        			}
        		}
        	}
        };

        // 엑셀 임포트를 위한 공통 함수
        this.gfnCreateImportObject = function() {
        	var sImportId = "objExcelImport";

        	var objImport = this.objects[sImportId];

        	if(!this.gfnIsNull(objImport)) {
        		return objImport;
        	}

        	objImport = new ExcelImportObject(sImportId, this);
        	this.addChild(sImportId, objImport);

        	objImport.set_importurl("svcUrl::/XExportImport.do");

        	objImport.set_importtype(nexacro.ImportTypes.EXCEL);

        	// 엑셀 임포트시 성공 이벤트
        	objImport.addEventHandler("onsuccess", this.Import_onsuccess, this);
        	// 엑셀 임포트시 오류 이벤트
        	//objImport.addEventHandler("onerror", this.Import_onerror, this);

        	return objImport;
        }

        // 엑셀 임포트시 성공 이벤트
        this.Import_onsuccess = function(obj, e) {
        	var map = { "0":"no", "1":"cmdtyNm", "2":"qty", "3":"unitVl", "4":"spcfctVl", "5":"rmrkCn" };
        	for(var i = 0; i < this.dsUld.rowcount; i++) {
        	    var nRow = this.dsMtrlToolList.addRow();
        		this.dsMtrlToolList.setColumn(nRow, "aplyNo", this.dsMst.getColumn(0, "aplyNo"));
        		for(key in map) {
        			this.dsMtrlToolList.setColumn(nRow, map[key], this.dsUld.getColumn(i, "Column" + key));
        		}
        	}
        }

        // 착공승인검토,준공검사 그리드 버튼 클릭
        this.grdRvw_Button_onclick = function(obj,e)
        {
        	var grd = this.grdRltnDeptStng;
        	var ds  = this[grd.binddataset];

        	if(obj.name.endsWith("Inq")) {  // 조회
        	    this.dsSearch.setColumn(0, "dtlProcsEtcCn", "WORPL");
        		this.fnSrvcCall(obj.name);
        	} else if(obj.name.endsWith("Strg")) {  // 저장
        	    // 데이터 점검
        	    //if(this.cfnIsVldRvwDat(grd)) {
        			this.fnSrvcCall(obj.name);
        		//}
        	} else if(obj.name == "btnRcmdtnCoprAltmnt") {  // 협조자추천
        	    // 추천된 각 공종 협조자를 배정하시겠습니까?
        		this.gfnConfirmMsg("CST_009", "CST_009", function(sPopupId, sRtn) {
        		    if(JSON.parse(sRtn).result == "Y") {
        				// 추천협조자배정
        				this.dsSearch.setColumn(0, "dtlProcsEtcCn", "WORPL");  // 상세공정기타내용
        				this.dsSearch.setColumn(0, "souProcsId"   , "TSC"  );  // 원천공정ID

        				this.fnSrvcCall(obj.name);
        			}
        		}, ["확인", "취소"], ["Y", "N"], "", ["협조자추천"]);
        	} else {
        		var wfInfo = this.cfnGetWfInfo("CTL01625");  // 등록버튼(협조요청준비)
        		if(obj.name.endsWith("EblcAdd")) {      // 일괄추가
        			for(var i = 0; i < this.dsDocCd.rowcount; i++) {
        				wfInfo.docCd = this.dsDocCd.getColumn(i, "docCd");  // 협조업무코드
        				this.cfnRvwAdd(ds, wfInfo);
        			}
        		} else if(obj.name.endsWith("Add")) {  // 추가
        			this.cfnRvwAdd(ds, wfInfo);
        		} else if(obj.name.endsWith("Del")) {  // 삭제
        			for(var i = ds.rowcount - 1; i >= 0; i--) {
        				if(ds.getColumn(i, "chc")) {
        					ds.deleteRow(i);
        				}
        			}
        		}

        		// 행의 높이에 따라 그리드의 높이를 재설정
        		this.cfnGridResizeHeight(grd);
        	}
        };

        this.grdRvw_oncellclick = function(obj,e)
        {
            // 업무협조 셀
        	if(e.cell == obj.getBindCellIndex("body", "cstrnKndCd")) {
        	    if(obj.getCellPropertyValue(0, e.cell, "cssclass").indexOf("CellLink") != -1) {
        		    var ds = this[obj.binddataset];
        		    // 협조업무명
        		    ds.setColumn(ds.rowposition, "cstrnKndNm" , this.dsDocCd.getColumn(this.dsDocCd.findRow("docCd", ds.getColumn(ds.rowposition, "cstrnKndCd")), "docNm"));
        		    // 위치정보룸번호
        			ds.setColumn(ds.rowposition, "pstnInfoRnb", this.dsMst.getColumn(0, "ctrtChcYn") == 0 ? this.dsMst.getColumn(0, "hwrtInptPstnInfoCn") : this.dsMst.getColumn(0, "pstnInfoRnb"));
        			// 편집권한
        			ds.setColumn(ds.rowposition, "isEdtrPsblty", ds.getColumn(ds.rowposition, "isEdtrPsblty")  // 편집권한여부
        													  && this.dsMst.isEdtrPsblty                       // Main 편집권한여부
        						 ); // 편집가능여부
        			// 첨부파일 정보
        			this.RaonkUploadRvw.upatflinfo = { aplyNo : ds.getColumn(ds.rowposition, "aplyNo")
        			                                 , colid  : ds.getColumn(ds.rowposition, "colId")
        										     };
        			// 데이터 편짐 권한이 없으면...
        			var dtlProcsEtcCn = ds.getColumn(ds.rowposition, "dtlProcsEtcCn");  // 상세공정기타내용
        			if(!this.dsMst.isEdtrPsblty || !this.cfnGetAtrb.call("RltnDeptStngDeptEdtr")) {
        				ds.setColumn(ds.rowposition, "isEdtrPsblty", false);
        			}

                    ds.applyChange();

        		    var oArg    = { pvObjDsJobDrctn  : ds
        			              , pvObjDsRvwAtfl   : this.dsRvwAtfl
        			              , pvObjRaonkUpload : this.RaonkUploadRvw
        			              };
        			var oOption = { title:"검토의견", titlebar:true, width:800, height:800 };

        			this.gfnOpenPopup(this.grdRltnDeptStng.name, "work::CST/TSC/CST002P31.xfdl", oArg, "fnPopupCallback", oOption);
        		}
        	}
        };

        this.grdRvw_oncellposchanged = function(obj,e)
        {
        	// 작업그룹코드만 표출
            if(e.col == this.grdRltnDeptStng.getBindCellIndex("body", "tmprCd")) {
        		this.dsJobGroupCd.filter("jobGroupId.startsWith('WOG')");
        	}
        };

        this.grdRvw_onexpanddown = function(obj,e)
        {
        	// 담당자 찾기
        	if(e.col == this.grdRltnDeptStng.getBindCellIndex("body", "prcrNm")) {
        	    var oOption = { title:"담당자 찾기", titlebar:true, width:900, height:700 };
        		this.gfnOpenPopup("picSch", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        	}
        };


        this.RaonkUploadRvw_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	obj.SetConfig('FolderNameRule', '/CST/TSC/YYYY/MM/DD/');

        	// 첨부 파일 추가 함수
            obj.cfnAddAtfl = function(oFile) {
        		// 첨부파일 DS에 추가
        		var nRow = this.parent.dsRvwAtfl.findRow("colId", this.upatflinfo.colid);
        		    nRow = Math.max(nRow, 0) ? nRow : this.parent.dsRvwAtfl.addRow();

        		var ds = this.parent[this.getFocus().binddataset];  // 검토목록 DS
        		this.parent.dsRvwAtfl.setColumn(nRow, "aplyNo", ds.getColumn(ds.rowposition, "aplyNo"));  // 컬럼ID
        		this.parent.dsRvwAtfl.setColumn(nRow, "colId" , this.upatflinfo.colid                 );  // 컬럼ID
        	};

        	// 첨부 파일 삭제
            obj.cfnDelAtfl = function() {
        	    // 존재하지 않으면 돌아감
        		var nRow = this.parent.dsRvwAtfl.findRow("colId", this.upatflinfo.colid);
        		if(nRow == -1) { return; }

        		// RaonkUpload mergeFile 삭제
        		if(this.GetListInfo().mergeFile) {
                    var RaonkUploadRvw = this;  // RaonkUpload 착공승인검토용
        			var cfnGetCustomValue        = this.parent.cfnGetCustomValue;
        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        				if(cfnGetCustomValue(v.customValue) == RaonkUploadRvw.upatflinfo.colid) {
        					RaonkUploadRvw.SetSelectFile(i, '0');
        					RaonkUploadRvw.DeleteSelectedFile();
        				}
        			});
        		}

        		// 첨부파일 삭제
        		this.parent.dsRvwAtfl.deleteRow(this.parent.dsRvwAtfl.findRow("colId", this.upatflinfo.colid));
        	};
        };

        this.RaonkUploadRvw_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	return true;
        };

        this.RaonkUploadRvw_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {

        	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        	obj.cfnDelAtfl();
            // RaonkUpload에 컬럼ID 설정
        	obj.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : obj.upatflinfo.colid }));
        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
        };

        this.RaonkUploadRvw_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUploadRvw.name, "CST_002", [paramObj.userdata.strMessage]);
        };

        this.RaonkUploadRvw_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	var allListArray = obj.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        };

        this.dsRltnDeptStng_onload = function(obj,e)
        {
        	// 담당부서 표시를 위한 처리
        	if(this.dsAtrb) {
        		for(var i = 0; i < obj.rowcount; i++) {
        			if(obj.findRow("jobGroupId", obj.getColumn(i, "prcrId") == -1)) {
        				var nRow = this.dsJobGroupCd.addRow();
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupId", obj.getColumn(i , "prcrId"    ));
        				this.dsJobGroupCd.setColumn(nRow, "jobGroupNm", obj.getColumn(i , "prcrDeptNm"));
        				obj.setColumn(obj.rowposition   , "tmprCd"    , obj.getColumn(i , "prcrId"    ));
        			}
        		}
        	}
        };

        this.dsRltnDeptStng_onvaluechanged = function(obj,e)
        {
            // 담당부서(처리그룹)
        	if(e.columnid == "tmprCd") {
        		if(e.newvalue && e.newvalue.startsWith("WOG")) {
        			obj.setColumn(obj.rowposition, "prcrJobGroupCd", e.newvalue);  // 담당그룹코드
        			obj.setColumn(obj.rowposition, "prcrId"        , ""        );  // 담당자ID
        			obj.setColumn(obj.rowposition, "prcrNm"        , ""        );  // 처리자명
        			obj.setColumn(obj.rowposition, "prcrTelno"     , ""        );  // 처리자전화번호
        			obj.setColumn(obj.rowposition, "prcrDeptCd"    , ""        );  // 처리자부서코드
        			obj.setColumn(obj.rowposition, "prcrInstCd"    , ""        );  // 처리자기관코드
        			obj.setColumn(obj.rowposition, "prcrTelno"     , this.dsJobGroupCd.getColumn(this.dsJobGroupCd.findRow("jobGroupId", e.newvalue), "prcrTelno"));  // 전화번호
        		} else {
        			obj.setColumn(obj.rowposition, "prcrJobGroupCd", ""        );  // 담당그룹코드
        		}
            // 협조업무코드
        	} else if(e.columnid == "cstrnKndCd") {
        		this.dsRltnDeptStng.setColumn(obj.rowposition, "seCd", e.newvalue);  // 구분코드
        	}

        	if(!e.columnid) {
        	    // 행의 높이에 따라 그리드의 높이를 재설정
        		this.cfnGridResizeHeight(this.grdRltnDeptStng);
        	}
        };

        this.dsRvwAtfl_onload = function(obj,e)
        {
        	// 데이터 조회 후 첨부파일 파일리스트에 셋팅
        	if(this.RaonkUploadRvw) {
        		if(this.dsRvwAtfl.rowcount > 0) {
        			// RaonkUpload 초기화
        			this.RaonkUploadRvw.ResetUpload();
        			this.gfnDownloadSetting(this.RaonkUploadRvw, this.dsRvwAtfl);
        		}
        	}

        	this.resetScroll();
        };

        this.divPutMtrlToolList_cmbCrynChckpntUpCd_onitemchanged = function(obj,e)
        {
        	if(obj.value == "WPLWATCHBOX0004") {  // 선택 또는 전 초소(외곽/터미널) 선택시
        		this.dsJobWtpl.setColumn(0, "crynChckpntCd", "");  // 반입초소
        		this.divPutMtrlToolList.form.cmbCrynChckpntCd.visible = false;  // 반입초소
        		this.divPutMtrlToolList.form.panWholChckpntChcRsnUtztnPrnmntChckpnt.visible = true;
        	} else {
        		this.divPutMtrlToolList.form.cmbCrynChckpntCd.visible = true;  // 반입초소
        		this.divPutMtrlToolList.form.panWholChckpntChcRsnUtztnPrnmntChckpnt.visible = false;
        		this.dsCrynChckpntCd.filter("!cdId || uprCd == '" + (obj.value || " ") + "'");
        		if(!e.isInit) {
        			this.divPutMtrlToolList.form.cmbCrynChckpntCd.value = "";
        		}
        	}
        };

        this.divPutMtrlToolList_cmbCrynChckpntCd_onitemchanged = function(obj,e)
        {
            if(obj.visible) {
        		if(!this.gfnIsNull(obj.value) && "WPLWATCHBOX022,WPLWATCHBOX023,WPLWATCHBOX032".indexOf(obj.value) != -1) {  // 전 초소
        			this.divPutMtrlToolList.form.panWholChckpntChcRsnUtztnPrnmntChckpnt.visible = true;
        		} else {
        			this.divPutMtrlToolList.form.panWholChckpntChcRsnUtztnPrnmntChckpnt.visible = false;
        		}
        	}
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

        this.dsRltnDeptStng_cancolumnchange = function(obj,e)
        {
            var expr = "jobNm      == '" + obj.getColumn(obj.rowposition, "jobNm") + "' && "
        	         + "cstrnKndCd == '" + (e.columnid == "cstrnKndCd" ? e.newvalue : obj.getColumn(obj.rowposition, "cstrnKndCd")) + "' && "
        			 + "tmprCd     == '" + (e.columnid == "tmprCd"     ? e.newvalue : obj.getColumn(obj.rowposition, "tmprCd"    )) + "' && "
        			 + "currow     !=  "  + obj.rowposition
                ;
        	if(obj.findRowExpr(expr) != -1) {
        	    // 이미 등록(추가)된 {0}입니다.
        		this.gfnAlertMsg("CST_005", "CST_005", ["데이터"]);

        		return false;
        	}

        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staSubTitle03.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
            this.btnPutMtrlTool.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPutMtrlTool.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnAdd.addEventHandler("onclick",this.divPutMtrlToolList_divPutMtrlToolList_Button_onclick,this);
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnDel.addEventHandler("onclick",this.divPutMtrlToolList_divPutMtrlToolList_Button_onclick,this);
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnUld.addEventHandler("onclick",this.divPutMtrlToolList_divPutMtrlToolList_Button_onclick,this);
            this.divPutMtrlToolList.form.divPutMtrlToolList.form.btnFormDwnld.addEventHandler("onclick",this.divPutMtrlToolList_divPutMtrlToolList_Button00_00_onclick,this);
            this.divPutMtrlToolList.form.cmbCrynChckpntCd.addEventHandler("onitemchanged",this.divPutMtrlToolList_cmbCrynChckpntCd_onitemchanged,this);
            this.divPutMtrlToolList.form.cmbCrynChckpntUpCd.addEventHandler("onitemchanged",this.divPutMtrlToolList_cmbCrynChckpntUpCd_onitemchanged,this);
            this.staSubTitle03_00.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
            this.btnPutMtrlToolList.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnPutMtrlToolList.addEventHandler("onclick",this.Button_onclick,this);
            this.btnRltnDeptStngEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.btnRltnDeptStngAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.btnRltnDeptStngDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.btnRltnDeptStngStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.btnRltnDeptStngInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.grdRltnDeptStng.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.grdRltnDeptStng.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.grdRltnDeptStng.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.grdAtchCn.addEventHandler("oncellclick",this.divPrcsDsctn_grdAtchCn_oncellclick,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUploadRvw_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUploadRvw_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUploadRvw_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUploadRvw_RAONKUPLOAD_OnError,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUploadRvw_RAONKUPLOAD_BeforeAddFile,this);
            this.btnRcmdtnCoprAltmnt.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.dsRltnDeptStng.addEventHandler("onload",this.dsRltnDeptStng_onload,this);
            this.dsRltnDeptStng.addEventHandler("onvaluechanged",this.dsRltnDeptStng_onvaluechanged,this);
            this.dsRltnDeptStng.addEventHandler("cancolumnchange",this.dsRltnDeptStng_cancolumnchange,this);
            this.dsDocCd.addEventHandler("cancolumnchange",this.dsDocCd_cancolumnchange,this);
            this.dsRvwAtfl.addEventHandler("onload",this.dsRvwAtfl_onload,this);
        };
        this.loadIncludeScript("CST006S03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
