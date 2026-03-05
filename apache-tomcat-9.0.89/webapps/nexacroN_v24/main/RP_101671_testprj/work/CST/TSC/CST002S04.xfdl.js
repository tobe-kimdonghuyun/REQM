(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S04");
            this.set_titletext("처리내역(시설물설치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInstlRsnCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">TSCFICINS001</Col><Col id=\"cdNm\">신규조성</Col></Row><Row><Col id=\"cdId\">TSCFICINS002</Col><Col id=\"cdNm\">리노베이션</Col></Row><Row><Col id=\"cdId\">TSCFICINS003</Col><Col id=\"cdNm\">레이아웃변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS004</Col><Col id=\"cdNm\">파사드변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS005</Col><Col id=\"cdNm\">칸막이변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS006</Col><Col id=\"cdNm\">장비변경</Col></Row><Row><Col id=\"cdId\">TSCFICINS007</Col><Col id=\"cdNm\">간판교체</Col></Row><Row><Col id=\"cdId\">TSCFICINS008</Col><Col id=\"cdNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"upDocCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docCd\">Y06110</Col><Col id=\"docNm\">건축</Col></Row><Row><Col id=\"docCd\">Y06120</Col><Col id=\"docNm\">기계</Col></Row><Row><Col id=\"docCd\">Y06140</Col><Col id=\"docNm\">전기</Col></Row><Row><Col id=\"docCd\">Y06130</Col><Col id=\"docNm\">통신</Col></Row><Row><Col id=\"docCd\">Y06180</Col><Col id=\"docNm\">소방</Col></Row><Row><Col id=\"docCd\">Y06160</Col><Col id=\"docNm\">보안</Col></Row><Row><Col id=\"docCd\">Y06150</Col><Col id=\"docNm\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"upJobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"jobGroupId\">WOGCOPM130</Col><Col id=\"jobGroupNm\">터미널건축팀</Col><Col id=\"prcrTelno\">000-1234-0130</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM140</Col><Col id=\"jobGroupNm\">건축지원팀</Col><Col id=\"prcrTelno\">000-1234-0140</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM150</Col><Col id=\"jobGroupNm\">T1 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0150</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM160</Col><Col id=\"jobGroupNm\">T2 기계그룹</Col><Col id=\"prcrTelno\">000-1234-0160</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM170</Col><Col id=\"jobGroupNm\">플랜트시설팀</Col><Col id=\"prcrTelno\">000-1234-0170</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM180</Col><Col id=\"jobGroupNm\">T1 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0180</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM190</Col><Col id=\"jobGroupNm\">T2 전기그룹</Col><Col id=\"prcrTelno\">000-1234-0190</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM200</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0200</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM210</Col><Col id=\"jobGroupNm\">통신그룹</Col><Col id=\"prcrTelno\">000-1234-0210</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM220</Col><Col id=\"jobGroupNm\">T1 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0220</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM230</Col><Col id=\"jobGroupNm\">T2 소방그룹</Col><Col id=\"prcrTelno\">000-1234-0230</Col></Row><Row><Col id=\"jobGroupId\">WOGCOPM240</Col><Col id=\"jobGroupNm\">부대건물그룹</Col><Col id=\"prcrTelno\">000-1234-0240</Col></Row><Row><Col id=\"jobGroupId\">WOGSECWS0010</Col><Col id=\"jobGroupNm\">보안그룹</Col><Col id=\"prcrTelno\">000-1234-0010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRvwAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBgncstAprvRvw", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmcnInspRvw", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","4764",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panCmcnInspDmnd\"/><PanelItem id=\"PanelItem04\" componentid=\"divCmcnInspDmnd\"/><PanelItem id=\"PanelItem01\" componentid=\"panBfhdMetgDsctn\"/><PanelItem id=\"PanelItem02\" componentid=\"divBfhdMetgDsctn\"/><PanelItem id=\"PanelItem05\" componentid=\"panPrcsDsctn\"/><PanelItem id=\"PanelItem06\" componentid=\"divPrcsDsctn\"/><PanelItem id=\"PanelItem09\" componentid=\"panCoprPrcs\"/><PanelItem id=\"PanelItem08\" componentid=\"divCoprPrcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","60","1085","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("준공검사요청");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1190","1085","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCmcnInspDmnd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspDmnd","60","1085","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCmcnInspDmnd","1220","1085","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("divCmcnInspDmnd","0","70","100.00%","2186",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","100.00%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("0");
            obj.set_text("업로드하는 파일의 크기는 100mb 이하로 제한됩니다");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","50","100.00%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("1");
            obj.set_text("최종 준공도면은 1개 도면당 1개 CAD파일로 모형공간에 작성하셔서 zip   파일로 업로드하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","90","100.00%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("2");
            obj.set_text("도면 작성 관련 자세한 사항은  문서접수실(032-741-2350)으로 문의하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","90",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("4");
            obj.set_text("준공도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("6");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("8");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("9");
            obj.set_text("준공도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("11");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("13");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("14");
            obj.set_text("준공도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F130? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("19");
            obj.set_text("준공도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("21");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F140\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F140 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F140 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F140 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("23");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("24");
            obj.set_text("준공도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("26");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("27");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F150\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F150? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F150 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F150 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("28");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("39");
            obj.set_text("(분야별 공사 중, 공사완료 사진)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("29");
            obj.set_text("시공검사서(ITP)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("30");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("31");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("32");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F160\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F160? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F160 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F160 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("33");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("34");
            obj.set_text("공사 준공 사진첩");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("36");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("37");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F170\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F170? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F170 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F170 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("38");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("40");
            obj.set_text("안전교육 실시자료");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("41");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("42");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("43");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F180\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F180 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F180 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F180 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_01","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("44");
            obj.set_text("(시설개선공사 관리절차, 안전교육자료)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("45");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_01\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("46");
            obj.set_text("폐기물 처리실적 증빙 서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("47");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("48");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("49");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F190\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F190 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F190 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F190 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("50");
            obj.set_text("(처리업체 건설폐기물 수집‧운반업 허가증 포함, 5t 이상 중구청, 올바로시스템 신고자료)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("51");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_01_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("52");
            obj.set_text("방염필증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("53");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("54");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("55");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F200\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F200 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F200 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F200 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("56");
            obj.set_text("(필요시 시험성적서 포함)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("57");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_01_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("58");
            obj.set_text("전기안전공사 전기설비 안전진단 확인서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("59");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("60");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("61");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F210\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F210 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F210 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F210 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("62");
            obj.set_text("(한국전기안전공사, 20kw 이상 입주자)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("63");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_01_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("64");
            obj.set_text("관련법규 이행 사항");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("65");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("66");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("67");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F220\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F220 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F220 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F220 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","1274","837","100%","30",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("68");
            obj.set_text("(소방서 안전시설등 완비증명서, 가스안전공사 완성검사증명서, 방화문 등의 시험성적서, 방범/방화셔터 UL인증모터 등)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","40","638","100.00%","145",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("69");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static00_01_00_00_00_00\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_01","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("70");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_01","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("71");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_01","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("72");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_01\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_01","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("73");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F230\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F230 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F230 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F230 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_01","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("74");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_01\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_02","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("75");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_02","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("76");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_02","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("77");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_02\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_02","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("78");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F240\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F240 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F240 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F240 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_02","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("79");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_02\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_03","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("80");
            obj.set_text("기타서류3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_03","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("81");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_03","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("82");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_03\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_03","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("83");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F250\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F250 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F250 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F250 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_03","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("84");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_03\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("85");
            obj.set_text("기타서류4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_04","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("86");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("87");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_04\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_04","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("88");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F260\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F260 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F260 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F260 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_04","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("89");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_04\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_05","0","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("90");
            obj.set_text("기타서류5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00_00_00_00_00_00_00_00_05","298","0","298","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("91");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_05","20","10","100%","46",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("92");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00_00_00_00_00_00_00_00_05\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00_00_00_00_00_00_00_00_05","20.00","60","100%","40",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("93");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F270\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) || !F270 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F270 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspDmnd&quot;) &amp;&amp; !F270 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile01_00_00_00_00_00_00_00_00_05","40","638","100%","111",null,null,null,null,null,null,this.divCmcnInspDmnd.form);
            obj.set_taborder("94");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01_00_00_00_00_00_00_00_00_05\"/></Contents>");
            this.divCmcnInspDmnd.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1334","1927","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사전미팅내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","2465","1927","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnBfhdMetgDsctn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBfhdMetgDsctn","1334","1907","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divBfhdMetgDsctn","1328","2021","100.00%","330",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("0");
            obj.set_text("1차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","490.00","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("2");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("grdFstBfhdMetg","0.00","50","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) || !H110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","980","111",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdFstBfhdMetg\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan00","0","91","100%","114",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("6");
            obj.set_text("2차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("8");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("grdSecdBfhdMetg","0.00","50","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) || !H120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSecdBfhdMetg\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan01","0","411","100%","114",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("11");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","0.00","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("12");
            obj.set_text("3차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","490.00","0","490","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("13");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("14");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("grdThrBfhdMetg","0.00","50","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) || !H130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctn&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctn&quot;) &amp;&amp; !H130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","30.00","20","980","111",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdThrBfhdMetg\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan02","0","731","100%","114",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("17");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staCnvyMttrTtl","1320","2370","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02_00","2451","2370","148","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrcsDsctn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrcsDsctn","1320","2350","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCnvyMttrTtl\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divPrcsDsctn","0","2721","100.00%","1256",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("panCnvyMttr","0","0","100.00%","408",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRvwOpnn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","20.00","10","100%","400",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"grdAtchCn\"/><PanelItem id=\"PanelItem03\" componentid=\"staAtchCn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00","60","1272","100%","86",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCmcnInspYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"calCmcnInspYmd\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","92","64","100%","100",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("3");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staAtchCn","158","288","100%","60",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("5");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panPrcsDsctn","0","408","100.00%","848",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panCmcnInspYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"panCmcnInspRslt\"/><PanelItem id=\"PanelItem04\" componentid=\"panCmcnInspMtgDsctn\"/><PanelItem id=\"PanelItem05\" componentid=\"panFlrplnAplcnYn\"/><PanelItem id=\"PanelItem06\" componentid=\"panNaplyRsn\"/><PanelItem id=\"PanelItem07\" componentid=\"panDocOtpt\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspRslt","88","1438","100%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","76","1423","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("17");
            obj.set_text("준공검사회의내역");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("grdCmcnInspRslt","28","1367","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:G110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspRslt&quot;) || !G110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspRslt&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roCmcnInspRslt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspRslt&quot;) &amp;&amp; !G110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsCmcnInspRslt&quot;) &amp;&amp; !G110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00_00_00","72","1322","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("13");
            obj.set_text("준공검사결과");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_00_00_01","110","1448","100%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdCmcnInspRslt\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("grdAtchCn","20","102","100.00%","346",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsRvwOpnn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:opnnNm\"/><Cell col=\"1\" text=\"bind:opnnCn\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("Static00","20","22","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("2");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspYmd","40","1272","100%","97",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("8");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Calendar("calCmcnInspYmd","30","428","140","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displayinvalidtext("value");
            obj.set_displaynulltext(" ");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staCmcnInspYmd","0","-70","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("9");
            obj.set_text("준공검사날짜");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_01_00_00","200","1525","100%","145",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txtCmcnInspMtgDsctn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspMtgDsctn","180","1525","100%","156",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("16");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_01_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new TextArea("txtCmcnInspMtgDsctn","73","1475","100%","95",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("18");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_01_00_00_00","145","1703","93.75%","86",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFlrplnAplcnYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFlrplnAplcnYn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFlrplnAplcnYn","125","1703","100%","97",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_01_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Radio("rdoFlrplnAplcnYn","110","1615","96.88%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("22");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divPrcsDsctn_form_rdoFlrplnAplcnYn_innerdataset = new nexacro.NormalDataset("divPrcsDsctn_form_rdoFlrplnAplcnYn_innerdataset", obj);
            divPrcsDsctn_form_rdoFlrplnAplcnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">적용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미적용</Col></Row></Rows>");
            obj.set_innerdataset(divPrcsDsctn_form_rdoFlrplnAplcnYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staFlrplnAplcnYn","110","1553","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("21");
            obj.set_text("도면적용여부");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staNaplyRsn","76","1423","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("23");
            obj.set_text("미적용사유");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new TextArea("txtNaplyRsnCn","73","1475","100%","95",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("24");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panNaplyRsn00","200","1525","100%","145",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNaplyRsn\"/><PanelItem id=\"PanelItem02\" componentid=\"txtNaplyRsnCn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panNaplyRsn","180","1525","100%","156",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("26");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panNaplyRsn00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","110","1901","96.88%","43",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("29");
            obj.set_text("문서출력");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01","210","2053","100%","193",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnAprvAplcfmOtpt\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCmcnExtrpOtpt\"/><PanelItem id=\"PanelItem05\" componentid=\"btnAprvInfoOtpt\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_04_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt","190","2053","100%","200",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnAprvInfoOtpt","0","50","240","30.36",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("33");
            obj.set_text("시설물 설치(변경) 감독자 승인정보 출력");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","223","1981","100%","33",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("32");
            obj.set_text("Windows 7 이상의 OS에서 출력 가능합니다.(Windows XP 출력 불가)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnCmcnExtrpOtpt","0","50","262","30.82",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("31");
            obj.set_text("여객터미널 입주자시설공사 준공검사서 출력");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnAprvAplcfmOtpt","0","50","212","31.21",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("30");
            obj.set_text("시설물 설치(변경) 승인신청서 출력");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnBfhdMetgDsctn","1443","2240","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrcsDsctn","1383","2620","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("divCoprPrcs","0","3987","100.00%","712",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.getSetter("updtlprocsetccn").set("FICA");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04","0","0","298","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("0");
            obj.set_text("착공승인검토");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvwBtn","298","0","298","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBgncstRvwEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBgncstRvwAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBgncstRvwDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnBgncstRvwStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnBgncstRvwInq\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04","20","10","100%","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBgncstAprvRvwBtn\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvw","40","638","100.00%","356",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdBgncstAprvRvw\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Grid("grdBgncstAprvRvw","20","10","100%","285",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsBgncstAprvRvw");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"524\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00336&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00336&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;&quot; : &quot;CellEnd, CellLink&quot;\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsJobGroupCd\" combodatacol=\"jobGroupNm\" combocodecol=\"jobGroupId\" text=\"bind:tmprCd\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roBgncstAprvRvwEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"expr:endDt ? &quot;####-##-## ##:##:##&quot; : &quot;&quot;\" maskedittype=\"string\" maskeditlimitbymask=\"none\"/></Band></Format></Formats>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04_00","0","0","298","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("5");
            obj.set_text("준공검사");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspRvwBtn","298","0","298","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCmcnRvwEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCmcnRvwAdd\"/><PanelItem id=\"PanelItem05\" componentid=\"btnCmcnRvwStrg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnCmcnRvwDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnCmcnRvwInq\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04_00","20","10","100%","46",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("7");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panCmcnInspRvwBtn\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Panel("panCmcnInspRvw","40","638","100.00%","356",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("8");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdCmcnInspRvw\"/></Contents>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Grid("grdCmcnInspRvw","20","10","100%","262",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsCmcnInspRvw");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"524\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00340&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;isTAS00340&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;&quot; : &quot;CellEnd, CellLink&quot;\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsCmcnInspRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsJobGroupCd\" combodatacol=\"jobGroupNm\" combocodecol=\"jobGroupId\" text=\"bind:tmprCd\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roCmcnInspRvwEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"expr:endDt ? &quot;####-##-## ##:##:##&quot; : &quot;&quot;\" maskedittype=\"string\" maskeditlimitbymask=\"none\"/></Band></Format></Formats>");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwInq","920","10","75","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("10");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwEblcAdd","1060","10","78","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("11");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwAdd","1070","1","47","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwDel","804.00","10","45","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwStrg","1234","10","45","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnCmcnRvwInq","220","0","75","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("15");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnCmcnRvwEblcAdd","305","0","78","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("16");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnCmcnRvwAdd","393","0","47","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("17");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnCmcnRvwDel","450","0","45","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new Button("btnCmcnRvwStrg","505","0","45","34",null,null,null,null,null,null,this.divCoprPrcs.form);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprPrcs.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUploadRvw","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("http://10.180.1.229:8080/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","10","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("협조처리");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnCoprPrcs","98","16","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02_01","1157","30","132","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCoprPrcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCoprPrcs","1353","4405","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("21");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCmcnInspDmnd.form
            obj = new Layout("default","",0,0,this.divCmcnInspDmnd.form,function(p){});
            obj.set_type("vertical");
            this.divCmcnInspDmnd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBfhdMetgDsctn.form
            obj = new Layout("default","",0,0,this.divBfhdMetgDsctn.form,function(p){});
            obj.set_type("vertical");
            this.divBfhdMetgDsctn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPrcsDsctn.form
            obj = new Layout("default","",0,0,this.divPrcsDsctn.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            this.divPrcsDsctn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCoprPrcs.form
            obj = new Layout("default","",0,0,this.divCoprPrcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_taborder("0");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_text("착공승인검토");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.set_flexgrow("1");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04.move("0","0","298","46",null,null);

                p.panBgncstAprvRvwBtn.set_taborder("1");
                p.panBgncstAprvRvwBtn.set_flexgrow("1");
                p.panBgncstAprvRvwBtn.set_flexcrossaxisalign("center");
                p.panBgncstAprvRvwBtn.set_flexmainaxisalign("end");
                p.panBgncstAprvRvwBtn.set_horizontalgap("10");
                p.panBgncstAprvRvwBtn.set_flexcrossaxiswrapalign("start");
                p.panBgncstAprvRvwBtn.move("298","0","298","46",null,null);

                p.panTitle01_00_00_00_00_00_00_00_00_04.set_taborder("2");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00_00_00_00_00_00_00_04.set_flexwrap("wrap");
                p.panTitle01_00_00_00_00_00_00_00_00_04.move("20","10","100%","46",null,null);

                p.panBgncstAprvRvw.set_taborder("3");
                p.panBgncstAprvRvw.set_fittocontents("height");
                p.panBgncstAprvRvw.set_spacing("10px 20px 10px 20px");
                p.panBgncstAprvRvw.set_flexwrap("wrap");
                p.panBgncstAprvRvw.set_cssclass("pal_WF_DtlBg");
                p.panBgncstAprvRvw.set_verticalgap("4");
                p.panBgncstAprvRvw.move("40","638","100.00%","356",null,null);

                p.grdBgncstAprvRvw.set_taborder("4");
                p.grdBgncstAprvRvw.set_binddataset("dsBgncstAprvRvw");
                p.grdBgncstAprvRvw.set_extendsizetype("row");
                p.grdBgncstAprvRvw.set_autosizingtype("row");
                p.grdBgncstAprvRvw.set_scrollbartype("none none");
                p.grdBgncstAprvRvw.move("20","10","100%","285",null,null);

                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_taborder("5");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_text("준공검사");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_flexgrow("1");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.move("0","0","298","46",null,null);

                p.panCmcnInspRvwBtn.set_taborder("6");
                p.panCmcnInspRvwBtn.set_flexgrow("1");
                p.panCmcnInspRvwBtn.set_flexcrossaxisalign("center");
                p.panCmcnInspRvwBtn.set_flexmainaxisalign("end");
                p.panCmcnInspRvwBtn.set_horizontalgap("10");
                p.panCmcnInspRvwBtn.set_flexcrossaxiswrapalign("start");
                p.panCmcnInspRvwBtn.move("298","0","298","46",null,null);

                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_taborder("7");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_flexwrap("wrap");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_flexmainaxisalign("center");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.move("20","10","100%","46",null,null);

                p.panCmcnInspRvw.set_taborder("8");
                p.panCmcnInspRvw.set_fittocontents("height");
                p.panCmcnInspRvw.set_spacing("10px 20px 10px 20px");
                p.panCmcnInspRvw.set_flexwrap("wrap");
                p.panCmcnInspRvw.set_cssclass("pal_WF_DtlBg");
                p.panCmcnInspRvw.set_verticalgap("4");
                p.panCmcnInspRvw.move("40","638","100.00%","356",null,null);

                p.grdCmcnInspRvw.set_taborder("9");
                p.grdCmcnInspRvw.set_binddataset("dsCmcnInspRvw");
                p.grdCmcnInspRvw.set_extendsizetype("row");
                p.grdCmcnInspRvw.set_autosizingtype("row");
                p.grdCmcnInspRvw.set_scrollbartype("none none");
                p.grdCmcnInspRvw.move("20","10","100%","262",null,null);

                p.btnBgncstRvwInq.set_taborder("10");
                p.btnBgncstRvwInq.set_text("조회(숨김)");
                p.btnBgncstRvwInq.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwInq.set_visible("false");
                p.btnBgncstRvwInq.set_fittocontents("width");
                p.btnBgncstRvwInq.move("920","10","75","34",null,null);

                p.btnBgncstRvwEblcAdd.set_taborder("11");
                p.btnBgncstRvwEblcAdd.set_text("일괄추가");
                p.btnBgncstRvwEblcAdd.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwEblcAdd.set_visible("true");
                p.btnBgncstRvwEblcAdd.set_fittocontents("width");
                p.btnBgncstRvwEblcAdd.move("1060","10","78","34",null,null);

                p.btnBgncstRvwAdd.set_taborder("12");
                p.btnBgncstRvwAdd.set_text("추가");
                p.btnBgncstRvwAdd.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwAdd.set_visible("true");
                p.btnBgncstRvwAdd.set_fittocontents("width");
                p.btnBgncstRvwAdd.move("1070","1","47","34",null,null);

                p.btnBgncstRvwDel.set_taborder("13");
                p.btnBgncstRvwDel.set_text("삭제");
                p.btnBgncstRvwDel.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwDel.set_visible("true");
                p.btnBgncstRvwDel.set_fittocontents("width");
                p.btnBgncstRvwDel.move("804.00","10","45","34",null,null);

                p.btnBgncstRvwStrg.set_taborder("14");
                p.btnBgncstRvwStrg.set_text("저장");
                p.btnBgncstRvwStrg.set_cssclass("btn_WF_Small");
                p.btnBgncstRvwStrg.set_visible("true");
                p.btnBgncstRvwStrg.set_fittocontents("width");
                p.btnBgncstRvwStrg.move("1234","10","45","34",null,null);

                p.btnCmcnRvwInq.set_taborder("15");
                p.btnCmcnRvwInq.set_text("조회(숨김)");
                p.btnCmcnRvwInq.set_cssclass("btn_WF_Small");
                p.btnCmcnRvwInq.set_visible("false");
                p.btnCmcnRvwInq.set_fittocontents("width");
                p.btnCmcnRvwInq.move("220","0","75","34",null,null);

                p.btnCmcnRvwEblcAdd.set_taborder("16");
                p.btnCmcnRvwEblcAdd.set_text("일괄추가");
                p.btnCmcnRvwEblcAdd.set_cssclass("btn_WF_Small");
                p.btnCmcnRvwEblcAdd.set_visible("true");
                p.btnCmcnRvwEblcAdd.set_fittocontents("width");
                p.btnCmcnRvwEblcAdd.move("305","0","78","34",null,null);

                p.btnCmcnRvwAdd.set_taborder("17");
                p.btnCmcnRvwAdd.set_text("추가");
                p.btnCmcnRvwAdd.set_cssclass("btn_WF_Small");
                p.btnCmcnRvwAdd.set_visible("true");
                p.btnCmcnRvwAdd.set_fittocontents("width");
                p.btnCmcnRvwAdd.move("393","0","47","34",null,null);

                p.btnCmcnRvwDel.set_taborder("18");
                p.btnCmcnRvwDel.set_text("삭제");
                p.btnCmcnRvwDel.set_cssclass("btn_WF_Small");
                p.btnCmcnRvwDel.set_visible("true");
                p.btnCmcnRvwDel.set_fittocontents("width");
                p.btnCmcnRvwDel.move("450","0","45","34",null,null);

                p.btnCmcnRvwStrg.set_taborder("19");
                p.btnCmcnRvwStrg.set_text("저장");
                p.btnCmcnRvwStrg.set_cssclass("btn_WF_Small");
                p.btnCmcnRvwStrg.set_visible("true");
                p.btnCmcnRvwStrg.set_fittocontents("width");
                p.btnCmcnRvwStrg.move("505","0","45","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divCoprPrcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCoprPrcs.form
            obj = new Layout("Layout0","",0,0,this.divCoprPrcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdBgncstAprvRvw.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnBgncstRvwDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_type("vertical");
            this.divCoprPrcs.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","dsInstlChg","cstrnOtlnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divPrcsDsctn.form.txtCnvyMttr","value","dsCnvyMttr","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPrcsDsctn.form.calCmcnInspYmd","value","dsInstlChg","cmcnInspYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPrcsDsctn.form.txtCmcnInspMtgDsctn","value","dsInstlChg","cmcnInspMtgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPrcsDsctn.form.rdoFlrplnAplcnYn","value","dsInstlChg","flrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPrcsDsctn.form.txtNaplyRsnCn","value","dsInstlChg","naplyRsnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPrcsDsctn.form.staFlrplnAplcnYn","cssclass","dsAtrb","ccFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPrcsDsctn.form.staNaplyRsn","cssclass","dsAtrb","ccFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","panCmcnInspDmnd","visible","dsAtrb","vsCmcnInspDmnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divCmcnInspDmnd","visible","dsAtrb","vsCmcnInspDmnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","panBfhdMetgDsctn","visible","dsAtrb","vsBfhdMetgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBfhdMetgDsctn","visible","dsAtrb","vsBfhdMetgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","panPrcsDsctn","visible","dsAtrb","vsPrcsDsctnTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPrcsDsctn.form.panPrcsDsctn","visible","dsAtrb","vsCmcnInspDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPrcsDsctn.form.panCmcnInspYmd","visible","dsAtrb","vsCmcnInspYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPrcsDsctn.form.calCmcnInspYmd","readonly","dsAtrb","roCmcnInspYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divPrcsDsctn.form.panCmcnInspRslt","visible","dsAtrb","vsCmcnInspRslt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divPrcsDsctn.form.txtCmcnInspMtgDsctn","readonly","dsAtrb","roCmcnInspRslt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divPrcsDsctn.form.panCmcnInspMtgDsctn","visible","dsAtrb","vsCmcnInspRslt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divPrcsDsctn.form.panDocOtpt","visible","dsAtrb","vsDocOtpt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divPrcsDsctn.form.btnAprvAplcfmOtpt","visible","dsAtrb","vsDocOtpt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divPrcsDsctn.form.btnCmcnExtrpOtpt","visible","dsAtrb","vsDocOtpt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPrcsDsctn.form.btnAprvInfoOtpt","visible","dsAtrb","vsDocOtpt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divPrcsDsctn.form.panFlrplnAplcnYn","visible","dsAtrb","vsFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divPrcsDsctn.form.panNaplyRsn","visible","dsAtrb","vsFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPrcsDsctn.form.txtNaplyRsnCn","readonly","dsAtrb","roFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divPrcsDsctn.form.rdoFlrplnAplcnYn","readonly","dsAtrb","roFlrplnAplcnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","panCoprPrcs","visible","dsAtrb","vsCoprPrcs");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divCoprPrcs.form.panBgncstAprvRvw","visible","dsAtrb","vsBgncstAprvRvw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divCoprPrcs.form.panBgncstAprvRvwBtn","visible","dsAtrb","vsBgncstAprvRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divCoprPrcs.form.panCmcnInspRvw","visible","dsAtrb","vsCmcnInspRvw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divCoprPrcs.form.panCmcnInspRvwBtn","visible","dsAtrb","vsCmcnInspRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divPrcsDsctn.form.txtCnvyMttr","readonly","dsAtrb","roCnvyMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divPrcsDsctn.form.grdAtchCn","visible","dsAtrb","vsAtchCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divPrcsDsctn.form.staAtchCn","visible","dsAtrb","vsAtchCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divPrcsDsctn.form.staCmcnInspYmd","cssclass","dsAtrb","ccCmcnInspYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002S04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002S04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S04.xfdl
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

            // 조회조건 Dataset
            this.dsSearch = this.lookup("dsSearch");
            // Master Dataset
            this.dsMst = this.lookup("dsMst");
        	this.dsMst.addEventHandler("onload", this.dsMst_onload, this);
        	this.dsMst.addEventHandler("onvaluechanged", this.dsMst_onvaluechanged, this);
        	// 시설물 설치(변경) Dataset
            this.dsInstlChg = this.lookup("dsInstlChg");
        	this.dsInstlChg.addEventHandler("onvaluechanged", this.dsInstlChg_onvaluechanged, this);
        	// 검토의견함
        	this.dsRvwOpnn = this.lookup("dsRvwOpnn");
        	this.dsRvwOpnn.addEventHandler("onload", this.dsRvwOpnn_onload, this);
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
        	// 기타코드(협조업무코드, 처리그룹코드) 조회
        	//this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack"
            //                  , dsJobGroupCd:"{id:'selectjobGroupCdList', opt:'S:jobGroupNm', cnd:{jobGroupId:'WOGSECWS0010', upJobGroupId:'WOGCOPM'}}"  // 처리그룹코드
        	//				  , dsDocCd     :"{id:'selectDocCdList'     , opt:'S:docNm'}"                                                                // 협조업무코드
        	//                 });

        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");


        	trace(this.name + "CST002S04 : " + this.dsAtfl.getRowCount());
        	trace(this.name + "CST002S04 : " + this.dsFile.getRowCount());
        	trace(this.name + "CST002S04 : " + this.dsMst.getRowCount());
        };

        this.dsMst_onload = function(obj,e)
        {
        	// 조회(착공승인검토,준공검사)
            this.fnSrvcCall(this.divCoprPrcs.form.btnBgncstRvwInq.name);

        // 	// 준공검사요청 (미)첨부파일 숨김 처리
        // 	var form = this;
        // 	// TAS10404:준공검사요청,TAS00340:준공검사
        // 	var isVisible = this.cfnGetAtrb.call("isTAS10404,isTAS00340");
        // 	Array.from(this.divCmcnInspDmnd.form.components).forEach(function(v) {
        // 		if(v instanceof Grid) {
        // 			if(nexacro.main.gfnIsNull(nexacro.main.dsFile.getColumn(0, v.getCellProperty("body", 0, "text").substr(5)))) {
        // 				form.getPanel(v).visible = isVisible;
        // 			}
        // 		}
        // 	});

        	this.resetScroll();
        };

        this.dsRvwOpnn_onload = function(obj,e)
        {

        }

        this.dsMst_onvaluechanged = function(obj,e)
        {
        	// 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(this.divPrcsDsctn.form.grdAtchCn);
        };

        this.dsInstlChg_onvaluechanged = function(obj,e)
        {
            // 도면적용여부
        	if(e.columnid == "flrplnAplcnYn") {
        	    // 미적용사유
        		this.divPrcsDsctn.form.panNaplyRsn.visible = e.newvalue == "0";
        		this.divPrcsDsctn.form.txtNaplyRsnCn.value = e.newvalue == "0" ? this.divPrcsDsctn.form.txtNaplyRsnCn.value : "";
        	}

        	this.resetScroll();
        };

        this.dsRvw_onload = function(obj,e)
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

            // 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(obj.name == "dsBgncstAprvRvw" ? this.divCoprPrcs.form.grdBgncstAprvRvw : this.divCoprPrcs.form.grdCmcnInspRvw);
        };

        this.dsRvw_onrowposchanged = function(obj,e)
        {
            console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        	// 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(obj.name == "dsBgncstAprvRvw" ? this.divCoprPrcs.form.grdBgncstAprvRvw : this.divCoprPrcs.form.grdCmcnInspRvw);
        };

        this.dsRvw_onvaluechanged = function(obj,e)
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
        		this.dsBgncstAprvRvw.setColumn(obj.rowposition, "seCd", e.newvalue);  // 구분코드
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

        //        if(this.RaonkUploadRvw.GetListInfo() && this.RaonkUploadRvw.GetListInfo().mergeFile) {
        // 			console.log("LLLLLLLLL_RaonkUploadRvw.GetListInfo().mergeFile========" + this.RaonkUploadRvw.GetListInfo().mergeFile);
        // 			if(this.RaonkUploadRvw.GetListInfo().mergeFile) {
        // 				console.log("LLLLLLLLL_RaonkUploadRvw.GetListInfo().mergeFile.length=" + this.RaonkUploadRvw.GetListInfo().mergeFile.length);
        // 			}
        // 		}
        	}

        	this.resetScroll();
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	trace("test 04 dsAtrb_onvaluechanged : ");
        	// 신청서작성보완접수 단계면
            // 탭페이지 버튼명
        	this.parent.parent.tabStep.tpgPrcsDsctn.text = this.cfnGetAtrb.call("vsAplcfmWrtRcpt") ? "전달사항" : "처리내역";

        	// 버튼정보 조회
        	var taskCd = this.dsMst.getColumn(0, "taskCd");  // 업무코드
        	if("TAS00336,TAS00340".indexOf(taskCd) != -1) {  // TAS00336:착공승인검토, TAS00340:준공검사
        		this.cfnBtnCrt({ inqCnd : { jobPrcsPrgrsSeCd: "TAS00616" } });
        	}

        	// 협조처리 - 착공승인검토 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsBgncstAprvRvwEdtr")) {
        	    this.divCoprPrcs.form.grdBgncstAprvRvw.setRealColSize("body", 0, this.divCoprPrcs.form.grdBgncstAprvRvw.upsize);
        	} else {
        		this.divCoprPrcs.form.grdBgncstAprvRvw.upsize = this.divCoprPrcs.form.grdBgncstAprvRvw.upsize
        												      ? this.divCoprPrcs.form.grdBgncstAprvRvw.upsize
        													  : this.divCoprPrcs.form.grdBgncstAprvRvw.getRealColSize(0, "size")
        													  ;
        		this.divCoprPrcs.form.grdBgncstAprvRvw.setRealColSize("body", 0, 0);
        	}

        	// 협조처리 - 준공검사검토 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsCmcnInspRvwEdtr")) {
        		this.divCoprPrcs.form.grdCmcnInspRvw.setRealColSize("body", 0, this.divCoprPrcs.form.grdCmcnInspRvw.upsize);
        	} else {
        		this.divCoprPrcs.form.grdCmcnInspRvw.upsize = this.divCoprPrcs.form.grdCmcnInspRvw.upsize
        													? this.divCoprPrcs.form.grdCmcnInspRvw.upsize
        													: this.divCoprPrcs.form.grdCmcnInspRvw.getRealColSize(0, "size")
        													;
        		this.divCoprPrcs.form.grdCmcnInspRvw.setRealColSize("body", 0, 0);
        	}

        	// 그리드 Expr 실행
        	// ----------------
        	// 준공검사요청
        	Array.from(this.divCmcnInspDmnd.form.components).forEach(function(v) {
        	    if(v instanceof Grid) {
                    v.redrawExprCell();
                }
        	});

            // 사전미팅내역
        	Array.from(this.divBfhdMetgDsctn.form.components).forEach(function(v) {
        		if(v instanceof Grid) {
                   v.redrawExprCell();
        		}
        	});

        	// 준공검사결과
        	this.divPrcsDsctn.form.grdCmcnInspRslt.redrawExprCell();

        	this.resetScroll();
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
        		case this.divCoprPrcs.form.btnBgncstRvwInq.name :  // 조회(착공승인검토)
        		case this.divCoprPrcs.form.btnCmcnRvwInq.name :    // 조회(준공검사)
        			strSvcUrl = "fcltyInstlChg/selectRvw.do";
        			inData    = "dsSearch=dsSearch";                     // 조회조건
        			outData   = "dsBgncstAprvRvw=dsBgncstAprvRvw" + " "  // 착공승인검토
        			          + "dsCmcnInspRvw=dsCmcnInspRvw"     + " "  // 준공검사
        			          + "dsRvwAtfl=dsRvwAtfl"
        					  ;
        			break;

        		case this.divCoprPrcs.form.btnBgncstRvwStrg.name :  // 저장(착공승인검토)
        		case this.divCoprPrcs.form.btnCmcnRvwStrg.name :    // 저장(준공검사)
        			strSvcUrl = "fcltyInstlChg/saveRvw.do";
        			inData    = [];
        			outData   = "";
        			if(this.gfnDsIsUpdated(this.dsBgncstAprvRvw)) { inData.push("dsJobDrctn=dsBgncstAprvRvw:U"); }  // 착공승인검토 내역
        			if(this.gfnDsIsUpdated(this.dsCmcnInspRvw  )) { inData.push("dsJobDrctn=dsCmcnInspRvw:U"  ); }  // 준공검사검토 내역
        			if(this.gfnDsIsUpdated(this.dsRvwAtfl      )) { inData.push("dsRvwAtfl=dsRvwAtfl:U"       ); }  // 검토 첨부파일
        			inData = inData.join(" ");

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
        		case this.divCoprPrcs.form.btnBgncstRvwInq.name :     // 조회(착공승인검토)
        		case this.divCoprPrcs.form.btnCmcnRvwInq.name :       // 조회(준공검사)

        			break;

        		case this.divCoprPrcs.form.btnBgncstRvwStrg.name :     // 저장(착공승인검토)
        		case this.divCoprPrcs.form.btnCmcnRvwStrg.name :       // 저장(준공검사)
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");
        			// 조회
        			this.dsSearch.setColumn(0, "dtlProcsEtcCn", srvcId == this.divCoprPrcs.form.btnBgncstRvwStrg.name ? "FICA" : "COMA");
        			this.divCoprPrcs.form.btnBgncstRvwInq.click();

        			break;

        		case this.RaonkUploadRvw.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsRvwAtfl.setColumn(this.dsRvwAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}
                    //console.log(this.dsRvwAtfl.saveXML()));

        			// 저장
        			if(this.getFocus().name.startsWith("grdBgncst")) {
        			    this.divCoprPrcs.form.btnBgncstRvwStrg.click();  // 저장(착공승인검토)
        		    } else {
        				this.divCoprPrcs.form.btnCmcnRvwStrg.click();    // 저장(준공검사)
        			}

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

        		case this.divCoprPrcs.form.grdBgncstAprvRvw.name :  // 검착공승인검토
        		case this.divCoprPrcs.form.grdCmcnInspRvw.name :    // 준공검사
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
        						if(this.getFocus().name.startsWith("grdBgncst")) {
        						    this.divCoprPrcs.form.btnBgncstRvwStrg.click();  // 저장(착공승인검토)
        					    } else {
        							this.divCoprPrcs.form.btnCmcnRvwStrg.click();    // 저장(준공검사)
        						}
        					}
        				}
        			} else {
        			    // 취소시
        				if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 파일추가를 시도했을 경우
        					// 조회
        					if(this.getFocus().name.startsWith("grdBgncst")) {
        					    this.dsSearch.setColumn(0, "dtlProcsEtcCn", "FICA");
        					    this.divCoprPrcs.form.btnBgncstRvwInq.click();  // 조회(착공승인검토)
        				    } else {
        						this.dsSearch.setColumn(0, "dtlProcsEtcCn", "COMA");
        						this.divCoprPrcs.form.btnCmcnRvwInq.click();    // 조회(준공검사)
        					}
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
            // TAS00340:준공검사,TAS10453:조건부완료,TAS00489:도면및서류최종검토
            if(this.cfnGetAtrb.call("isTAS00340,isTAS10453,isTAS00489")) {
        		// 준공검사일자
        		if(this.gfnIsNull(this.dsInstlChg.getColumn(0, "cmcnInspYmd"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["준공검사날짜"], function() {
        				this.cfnGetTabIndex(this.parent.parent.tabStep, "tpgPrcsDsctn");  // 처리내역
        			    this.divPrcsDsctn.form.calCmcnInspYmd.setFocus();
        			});

        			return false;
        		}
        	}

        	// TAS00489:도면및서류최종검토
        	if(this.cfnGetAtrb.call("isTAS00489")) {
        		// 도면적용여부
        		if(this.gfnIsNull(this.dsInstlChg.getColumn(0, "flrplnAplcnYn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["도면적용여부"], function() {
        				this.cfnGetTabIndex(this.parent.parent.tabStep, "tpgPrcsDsctn");  // 처리내역
        			    this.divPrcsDsctn.form.rdoFlrplnAplcnYn.setFocus();
        			});

        			return false;
        		}

        		// 미적용사유
        		if(this.dsInstlChg.getColumn(0, "flrplnAplcnYn") == "0" && this.gfnIsNull(this.dsInstlChg.getColumn(0, "naplyRsnCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["미적용사유"], function() {
        				this.cfnGetTabIndex(this.parent.parent.tabStep, "tpgPrcsDsctn");  // 처리내역
        			    this.divPrcsDsctn.form.txtNaplyRsnCn.setFocus();
        			});

        			return false;
        		}
        	}

        	return true;
        };

        this.cfndsBgncstAprvRvwAdd = function(ds, wfInfo) {
            // Rvw_Button_onclick
            var nRow = ds.findRow("cstrnKndCd", wfInfo.docCd);
        	    nRow = nRow == -1 ? ds.rowcount : (nRow + 1);
            ds.insertRow(nRow);
        	ds.setColumn(nRow, "souId"        , this.dsMst.getColumn(0, "aplyNo")         );  // 원천ID(신청서번호)
        	ds.setColumn(nRow, "jobCd"        , wfInfo.jobPrcsPrgrsSeCd                   );  // 단계코드
        	ds.setColumn(nRow, "jobNm"        , wfInfo.jobPrcsPrgrsSeCdNm                 );  // 단계명
        	ds.setColumn(nRow, "cstrnKndCd"   , wfInfo.docCd                              );  // 협조업무코드
        	// -----------------
        	ds.setColumn(nRow, "dtlProcsEtcCn", ds.name.startsWith("dsBgncst") ? "FICA" : "COMA");  // 상세공정기타내용
        	ds.setColumn(nRow, "souProcsId"   , "TSC"                                     );  // 원천공정ID
        	ds.setColumn(nRow, "aplcntId"     , this.objApp.gdsUser.getColumn(0, "userId"));  // 신청자ID
        	ds.setColumn(nRow, "aplcntInstCd" , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 신청자기관코드
        	ds.setColumn(nRow, "aplcntDeptCd" , this.objApp.gdsUser.getColumn(0, "deptId"));  // 신청자부서코드
        	ds.setColumn(nRow, "rgtrId"       , this.objApp.gdsUser.getColumn(0, "userId"));  // 등록자ID
        	ds.setColumn(nRow, "rgtrInstCd"   , this.objApp.gdsUser.getColumn(0, "coId"  ));  // 등록자기관코드
        	ds.setColumn(nRow, "rgtrDeptCd"   , this.objApp.gdsUser.getColumn(0, "deptId"));  // 등록자부서코드
        };

        this.cfnIsVldRvwDat = function(grdRvw) {
            console.log(this.name + "_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");

        	var dsRvw = this[grdRvw.binddataset];
        	// 검토내역 데이터 점검
        	for(var i = 0; i < dsRvw.rowcount; i++) {
        		// 업무협조 코드
        		if(this.gfnIsNull(dsRvw.getColumn(i, "cstrnKndCd"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["업무협조 코드"], function() {
        				grdRvw.setFocus();
        				grdRvw.setCellPos(grdRvw.getBindCellIndex("body", "cstrnKndCd"), i);
        				grdRvw.showEditor(true);
        			});

        			return false;
        		}

        		// 처리그룹 또는 담당자
        		if(this.gfnIsNull(dsRvw.getColumn(i, "prcrJobGroupCd")) && this.gfnIsNull(dsRvw.getColumn(i, "prcrId"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["처리그룹 또는 담당자"], function() {
        				grdRvw.setFocus();
        				grdRvw.setCellPos(grdRvw.getBindCellIndex("body", "tmprCd"), i);
        				grdRvw.showEditor(true);
        			});

        			return false;
        		}
        	}

        	return true;
        };

        // 행의 높이에 따라 그리드의 높이를 재설정
        this.cfnGridResizeHeight = function(oGrd) {
        	oGrd.height = oGrd.getRealRowFullSize() + 20;
        	oGrd.parent.parent.height = oGrd.getRealRowFullSize() + 80;
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

        // 착공승인검토,준공검사 그리드 버튼 클릭
        this.grdRvw_Button_onclick = function(obj,e)
        {
            var isBgncst = obj.name.startsWith("btnBgncst");
        	var ds       = isBgncst ? this.dsBgncstAprvRvw : this.dsCmcnInspRvw;
        	var grd      = isBgncst ? this.divCoprPrcs.form.grdBgncstAprvRvw : this.divCoprPrcs.form.grdCmcnInspRvw;

        	if(obj.name.endsWith("Inq")) {  // 조회
        	    this.dsSearch.setColumn(0, "dtlProcsEtcCn", isBgncst ? "FICA" : "COMA");
        		this.fnSrvcCall(obj.name);
        	} else if(obj.name.endsWith("Strg")) {  // 저장
        	    // 데이터 점검
        	    if(this.cfnIsVldRvwDat(grd)) {
        			this.fnSrvcCall(obj.name);
        		}
        	} else {
        		var wfInfo = this.cfnGetWfInfo("CTL01625");  // 등록버튼(협조요청준비)
        		if(obj.name.endsWith("EblcAdd")) {      // 일괄추가
        			for(var i = 0; i < this.dsDocCd.rowcount; i++) {
        				wfInfo.docCd = this.dsDocCd.getColumn(i, "docCd");  // 협조업무코드
        				this.cfndsBgncstAprvRvwAdd(ds, wfInfo);
        			}
        		} else if(obj.name.endsWith("Add")) {  // 추가
        			this.cfndsBgncstAprvRvwAdd(ds, wfInfo);
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

        this.grdRvw_oncellposchanged = function(obj,e)
        {
            // 작업그룹코드만 표출
            if(e.col == this.divCoprPrcs.form.grdBgncstAprvRvw.getBindCellIndex("body", "tmprCd")) {
        		this.dsJobGroupCd.filter("jobGroupId.startsWith('WOG')");
        	}
        };

        this.grdRvw_onexpanddown = function(obj,e)
        {
            // 담당자 찾기
        	if(e.col == this.divCoprPrcs.form.grdBgncstAprvRvw.getBindCellIndex("body", "prcrNm")) {
        	    var oOption = { title:"담당자 찾기", titlebar:true, width:900, height:700 };
        		this.gfnOpenPopup("picSch", "work::CST/TSC/CST002P27.xfdl", "", "fnPopupCallback", oOption);
        	}
        };

        this.grdRvw_oncellclick = function(obj,e)
        {
            // 업무협조 셀
        	if(e.cell == obj.getBindCellIndex("body", "cstrnKndCd")) {
        	    if(obj.getCellPropertyValue(0, e.cell, "cssclass").indexOf("CellLink") != -1) {
        		    var ds = this[obj.binddataset];
        		    // 협조업무명

        			console.log(this.dsDocCd.getColumn(this.dsDocCd.findRow("docCd", ds.getColumn(ds.rowposition, "cstrnKndCd")), "docNm"));
        			console.log(this.dsMst.getColumn(0, "ctrtChcYn") == 0 ? this.dsMst.getColumn(0, "hwrtInptPstnInfoCn") : this.dsMst.getColumn(0, "pstnInfoRnb"));

        			//return;

        		    ds.setColumn(ds.rowposition, "cstrnKndNm" , this.dsDocCd.getColumn(this.dsDocCd.findRow("docCd", ds.getColumn(ds.rowposition, "cstrnKndCd")), "docNm"));
        		    // 위치정보룸번호
        			ds.setColumn(ds.rowposition, "pstnInfoRnb", this.dsMst.getColumn(0, "ctrtChcYn") == 0 ? this.dsMst.getColumn(0, "hwrtInptPstnInfoCn") : this.dsMst.getColumn(0, "pstnInfoRnb"));
        			// 편집권한
        			ds.setColumn(ds.rowposition, "isEdtrPsblty", ds.getColumn(ds.rowposition, "isEdtrPsblty")  // 편집권한여부
                                                              && !obj.readonly                                 // 그리드 편집가능
        													  && this.dsMst.isEdtrPsblty                       // Main 편집권한여부
        						 ); // 편집가능여부
        			// 첨부파일 정보
        			this.RaonkUploadRvw.upatflinfo = { aplyNo : ds.getColumn(ds.rowposition, "aplyNo")
        			                                 , colid  : ds.getColumn(ds.rowposition, "colId")
        										     };
        			// 데이터 편짐 권한이 없으면...
        			var dtlProcsEtcCn = ds.getColumn(ds.rowposition, "dtlProcsEtcCn");  // 상세공정기타내용
        			if(!this.dsMst.isEdtrPsblty || (dtlProcsEtcCn == "FICA" && !this.cfnGetAtrb.call("vsBgncstAprvRvwDeptEdtr")) || (dtlProcsEtcCn == "COMA" && !this.cfnGetAtrb.call("vsCmcnInspRvwDeptEdtr"))) {
        				ds.setColumn(ds.rowposition, "isEdtrPsblty", false);
        			}

                    ds.applyChange();

        		    var oArg    = { pvObjDsJobDrctn  : ds
        			              , pvObjDsRvwAtfl   : this.dsRvwAtfl
        			              , pvObjRaonkUpload : this.RaonkUploadRvw
        			              };
        			var oOption = { title:"검토의견", titlebar:true, width:800, height:800 };

        			var id = obj.name.startsWith("grdBgncst") ? this.divCoprPrcs.form.grdBgncstAprvRvw.name : this.divCoprPrcs.form.grdCmcnInspRvw.name;
        			this.gfnOpenPopup(id, "work::CST/TSC/CST002P31.xfdl", oArg, "fnPopupCallback", oOption);
        		}
        	} else if(e.cell == 7) {  // 첨부파일
        		if(obj.getCellPropertyValue(0, 7, "displaytype") == "buttoncontrol") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUploadRvw, this.dsRvwAtfl, this[obj.binddataset].getColumn(e.row, "colId"), e);
        		}
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

        		console.log("DDDDD_RaonkUploadRvw.GetListInfo().mergeFile========" + this.GetListInfo().mergeFile);
        		if(this.GetListInfo().mergeFile) {
        			console.log("DDDDD_RaonkUploadRvw.GetListInfo().mergeFile.length=" + this.GetListInfo().mergeFile.length);
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

        this.divPrcsDsctn_grdAtchCn_oncellclick = function(obj,e)
        {
        	this.divPrcsDsctn.form.txtCnvyMttr.value = this.dsRvwOpnn.getColumn(e.row, "opnnCn");  // 내용
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCmcnInspDmnd.addEventHandler("onclick",this.Button_onclick,this);
            this.btnCmcnInspDmnd.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_03.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_04.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divCmcnInspDmnd.form.Grid00_01_00_00_00_00_00_00_00_00_05.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBfhdMetgDsctn.form.grdFstBfhdMetg.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBfhdMetgDsctn.form.grdSecdBfhdMetg.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBfhdMetgDsctn.form.grdThrBfhdMetg.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.grdCmcnInspRslt.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.grdAtchCn.addEventHandler("oncellclick",this.divPrcsDsctn_grdAtchCn_oncellclick,this);
            this.btnBfhdMetgDsctn.addEventHandler("onclick",this.Button_onclick,this);
            this.btnBfhdMetgDsctn.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.btnPrcsDsctn.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrcsDsctn.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.divCoprPrcs.form.grdBgncstAprvRvw.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.divCoprPrcs.form.grdCmcnInspRvw.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.divCoprPrcs.form.grdCmcnInspRvw.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.divCoprPrcs.form.grdCmcnInspRvw.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.divCoprPrcs.form.btnBgncstRvwInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnBgncstRvwEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnBgncstRvwAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnBgncstRvwDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnBgncstRvwStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnCmcnRvwInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnCmcnRvwEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnCmcnRvwAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnCmcnRvwDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprPrcs.form.btnCmcnRvwStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUploadRvw_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUploadRvw_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUploadRvw_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUploadRvw_RAONKUPLOAD_OnError,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUploadRvw_RAONKUPLOAD_BeforeAddFile,this);
            this.btnCoprPrcs.addEventHandler("onclick",this.Button_onclick,this);
            this.btnCoprPrcs.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.dsDocCd.addEventHandler("cancolumnchange",this.dsDocCd_cancolumnchange,this);
            this.dsRvwAtfl.addEventHandler("onload",this.dsRvwAtfl_onload,this);
            this.dsBgncstAprvRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsBgncstAprvRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsBgncstAprvRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
            this.dsCmcnInspRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsCmcnInspRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsCmcnInspRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
        };
        this.loadIncludeScript("CST002S04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
