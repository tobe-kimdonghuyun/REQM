(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST005S04");
            this.set_titletext("처리내역(퇴거)");
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


            obj = new Dataset("dsRtosIdntyRvw", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chc\" type=\"INT\" size=\"1\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"souProcsId\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"seCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"aprvYn\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvCd\" type=\"STRING\" size=\"256\"/><Column id=\"acptnHnovAprvNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdMetgStepNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcsRsltCn\" type=\"STRING\" size=\"256\"/><Column id=\"tmprCd\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"isFileAtch\" type=\"INT\" size=\"256\"/><Column id=\"isEdtrPsblty\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtosGdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"절차등확인\" type=\"STRING\" size=\"256\"/><Column id=\"확인사항\" type=\"STRING\" size=\"256\"/><Column id=\"cmptn\" type=\"STRING\" size=\"256\"/><Column id=\"완료\" type=\"STRING\" size=\"256\"/><Column id=\"aftrPrgrs\" type=\"STRING\" size=\"256\"/><Column id=\"추후진행\" type=\"STRING\" size=\"256\"/><Column id=\"rlvtMttrNone\" type=\"STRING\" size=\"256\"/><Column id=\"해당사항없음\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"확인사항\">퇴거신청절차안내</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row><Row><Col id=\"확인사항\">유틸리티 해지신청 안내(전기/통신/수도)</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row><Row><Col id=\"확인사항\">보증금 환불절차(계약종료일로부터 1주일 이내 조치사항 완료 및 퇴거시) 등 퇴거절차 안내</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row><Row><Col id=\"확인사항\">열쇠 반납 안내</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row><Row><Col id=\"확인사항\">디지털도어록 비밀번호 변경 후 퇴실안내</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row><Row><Col id=\"확인사항\">기타 퇴거에 필요한 질문답변</Col><Col id=\"완료\">완료</Col><Col id=\"추후진행\">추후진행</Col><Col id=\"해당사항없음\">해당사항없음</Col><Col id=\"절차등확인\">절차등확인</Col><Col id=\"cmptn\"/><Col id=\"aftrPrgrs\"/><Col id=\"rlvtMttrNone\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","15000",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem15\" componentid=\"panRtosIdntyDmnd\"/><PanelItem id=\"PanelItem16\" componentid=\"divRtosIdntyDmnd\"/><PanelItem id=\"PanelItem21\" componentid=\"panBfhdMetgDsctn\"/><PanelItem id=\"PanelItem22\" componentid=\"divBfhdMetgDsctn\"/><PanelItem id=\"PanelItem25\" componentid=\"panPrcsDsctn\"/><PanelItem id=\"PanelItem26\" componentid=\"divPrcsDsctn\"/><PanelItem id=\"PanelItem27\" componentid=\"panCoprIdnty\"/><PanelItem id=\"PanelItem28\" componentid=\"divCoprIdnty\"/><PanelItem id=\"PanelItem04\" componentid=\"panRtosProcIdnty\"/><PanelItem id=\"PanelItem03\" componentid=\"divRtosProcIdnty\"/><PanelItem id=\"PanelItem01\" componentid=\"panEtc\"/><PanelItem id=\"PanelItem02\" componentid=\"divEtc\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUploadRvw","-1080","630","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00","-26","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("원상회복확인요청");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyDmnd","1210","23","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00","1110","20","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnRtosIdntyDmnd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panRtosIdntyDmnd","10","6430","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divRtosIdntyDmnd","10","6500","100.00%","2050",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100%","70",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("0");
            obj.set_text("- 업로드하는 파일의 크기는 100mb 이하로 제한됩니다.\r\n- 최종 준공도면은 1개 도면당 1개 CAD파일로 모형공간에 작성하셔서 zip 파일로 업로드하시기 바랍니다.\r\n  도면 작성 관련 자세한 사항은  문서접수실(032-741-2350)으로 문의하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("1");
            obj.set_text("원상회복도면(건축)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","60","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F110 ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:F110\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile","0","0","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","10","10","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("6");
            obj.set_text("원상회복도면(기계)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","500","10","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00","30","20","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("8");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","1080.00","756","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","111","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("10");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","20","20","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("11");
            obj.set_text("원상회복도면(전기)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","510","20","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","40","30","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("13");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","30","70","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("14");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","222","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("15");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00","30","30","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("16");
            obj.set_text("원상회복도면(통신)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00","520","30","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("17");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00","50","40","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("18");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00","40","80","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("19");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F140\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F140 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F140 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F140 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00","0","333","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("20");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("21");
            obj.set_text("원상회복도면(소방)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("23");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F150\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F150 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F150 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F150 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00","0","444","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("26");
            obj.set_text("공사 준공 사진첩");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("27");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("28");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("29");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F160\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F160 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F160 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F160 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("30");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("31");
            obj.set_text("(분야별 공사 중, 공사완료 사진)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("32");
            obj.set_text("안전교육 실시자료");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("34");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("35");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F170\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F170 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F170 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F170 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("36");
            obj.set_text("(시설개선공사 관리절차, 안전교육자료)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("37");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("38");
            obj.set_text("폐기물 처리실적 증빙 서류");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("39");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("40");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("41");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F180\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F180 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F180 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F180 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("42");
            obj.set_text("(처리업체 건설폐기물 수집‧운반업 허가증 포함, 5t 이상 중구청, 올바로시스템 신고자료)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("43");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("44");
            obj.set_text("방염필증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("46");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("47");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F190\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F190 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F190 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F190 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("48");
            obj.set_text("(필요시 시험성적서 포함)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("49");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("50");
            obj.set_text("전기안전공사 전기설비 안전진단확인서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("52");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("53");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F200\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F200 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F200 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F200 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("54");
            obj.set_text("(한국전기안전공사, 20kw 이상 입주자)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("55");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_00_00_00_00_00","40","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("56");
            obj.set_text("관련법규 이행 사항");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_00_00_00_00_00","530","40","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_00_00_00_00_00","60","50","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_00_00_00_00_00","50","90","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("59");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F210\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F210 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F210 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F210 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","45","3881","100%","30",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("60");
            obj.set_text("(소방서 안전시설등 완비증명서, 가스안전공사 완성검사증명서, 방화문 등의 시험성적서, 방범/방화셔터 UL인증모터 등)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_00_00_00_00_00","0","625","100.00%","145",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("61");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_00_00_00_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01","80","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("62");
            obj.set_text("기타서류1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01","570","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("63");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01","100","90","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("64");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01","90","130","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("65");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F220\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F220 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F220 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F220 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01","0","930","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("66");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02","90","90","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("67");
            obj.set_text("기타서류2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02","580","90","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("68");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02","110","100","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("69");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02","100","140","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("70");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F230\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F230 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F230 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F230 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02","0","1041","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("71");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_02\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01_00","80","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("72");
            obj.set_text("기타서류3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01_00","570","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("73");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01_00","100","90","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("74");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01_00","90","130","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("75");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F240\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F240 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F240 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F240 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01_00","0","930","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("76");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_02_00","90","90","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("77");
            obj.set_text("기타서류4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_02_00","580","90","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("78");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_02_00","110","100","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("79");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_02_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_02_00","100","140","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("80");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F250\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F250 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F250 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F250 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_02_00","0","1041","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("81");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_02_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00_00_00_00_01_00_00","80","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("82");
            obj.set_text("기타서류5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00_00_00_00_01_00_00","570","80","490","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("83");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00_00_00_00_01_00_00","100","90","100%","46",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("84");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00_00_00_00_01_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00_00_00_00_01_00_00","90","130","100%","40",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("85");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:F260\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) || !F260 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosInspDmnd&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F260 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosInspDmnd&quot;) &amp;&amp; !F260 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Panel("panFile00_00_00_00_00_01_00_00","0","930","100.00%","111",null,null,null,null,null,null,this.divRtosIdntyDmnd.form);
            obj.set_taborder("86");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00_00_00_00_01_00_00\"/></Contents>");
            this.divRtosIdntyDmnd.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00_00_00_00","-26","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사전미팅내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnBfhdMetgDsctn","1210","23","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_00_00_00","1110","20","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnBfhdMetgDsctn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBfhdMetgDsctn","10","9640","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divBfhdMetgDsctn","0","2190","100.00%","338",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","91","100.00%","111",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panFile\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("1");
            obj.set_text("1차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) || !H110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100%","90",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel11_00_00","685","150","305","1",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","0","60","96.88%","1",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel11_00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("8");
            obj.set_text("2차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","34",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("10");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) || !H120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","100%","90",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","91","100.00%","116",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("13");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panFile00\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("14");
            obj.set_text("3차사전미팅");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","34",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:H130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) || !H130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roBfhdMetgDsctnFile&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsBfhdMetgDsctnFile&quot;) &amp;&amp; !H130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100%","90",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Panel("pan00_01","0","674","100.00%","111",null,null,null,null,null,null,this.divBfhdMetgDsctn.form);
            obj.set_taborder("19");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"panFile01\"/></Contents>");
            this.divBfhdMetgDsctn.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00","-26","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("처리내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrcsDsctn","1210","23","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrcsDsctn00","1110","20","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrcsDsctn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrcsDsctn","10","11780","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("15");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panPrcsDsctn00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divPrcsDsctn","10","11850","100.00%","1856.2",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","22","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr","92","64","100%","100",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("1");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("grdAtchCn","20","102","100.00%","346",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsRvwOpnn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:opnnNm\"/><Cell col=\"1\" text=\"bind:opnnCn\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staAtchCn","158","288","100%","60",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panRvwOpnn","20.00","10","100%","400",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttr\"/><PanelItem id=\"PanelItem02\" componentid=\"grdAtchCn\"/><PanelItem id=\"PanelItem03\" componentid=\"staAtchCn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panCnvyMttr","0","0","100.00%","408",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panRvwOpnn\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panRtosInspDsctn","0","408","100%","1448.2",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("74");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00\"/><PanelItem id=\"PanelItem01\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_01\"/><PanelItem id=\"PanelItem04\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_02\"/><PanelItem id=\"PanelItem05\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_03\"/><PanelItem id=\"PanelItem06\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_04\"/><PanelItem id=\"PanelItem07\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_04_00\"/><PanelItem id=\"PanelItem08\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs00_00_04_01\"/><PanelItem id=\"PanelItem09\" componentid=\"pan00\"/><PanelItem id=\"PanelItem10\" componentid=\"panSafeMngrNghtPrvcUtztnWtcs\"/><PanelItem id=\"PanelItem11\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem12\" componentid=\"panDocOtpt\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Edit("edt00","57","508","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("31");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Calendar("cal00","136","478","150","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","490","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("6");
            obj.set_text("원상회복최종확인일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","490.00","0","490","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","0","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("8");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","1240","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"cal00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("30");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("32");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_00","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("43");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_01","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("49");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_02","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("55");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_02\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_03","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("61");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_03\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_04","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("64");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_04\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_04_00","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("68");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_04_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs00_00_04_01","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("73");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFile01_04_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("pan00","0","91","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00","0","0","300","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("12");
            obj.set_text("원상회복확인결과");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("0");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00_00","490.00","0","200","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("13");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("14");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("grdRtosIdntyRslt","0","50","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:G110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosIdntyRslt&quot;) || !G110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosIdntyRslt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roRtosIdntyRslt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosIdntyRslt&quot;) &amp;&amp; !G110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsRtosIdntyRslt&quot;) &amp;&amp; !G110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00","70","60","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdRtosIdntyRslt\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs","0","738","100.00%","111",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("17");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","30.00","30","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("18");
            obj.set_text("원상회복회의내역");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00","50.00","30","300","86",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txtCnvyMttr00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("pan04_01","1350","479","100.00%","93",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttr00_00_00","50","665","100.00%","48",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("26");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","110","1901","96.88%","43",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("21");
            obj.set_text("문서출력");
            obj.set_cssclass("sta_WF_Label");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnAprvAplcfmOtpt","0","50","250","31.21",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("22");
            obj.set_text("임대시설물 원상복구공사 승인신청서 출력");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","223","1981","100%","33",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("23");
            obj.set_text("Windows 7 이상의 OS에서 출력 가능합니다.(Windows XP 출력 불가)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01","210","2053","100%","123.21",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnAprvAplcfmOtpt\"/><PanelItem id=\"PanelItem03\" componentid=\"btnAprvAplcfmOtpt00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static00_04_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt","190","2053","100.00%","134.2",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("25");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Button("btnAprvAplcfmOtpt00","305","1775","250","31",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("75");
            obj.set_text("임대시설물 원상복구 확인신청서/확인서 출력");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00_00","0","0","300","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("27");
            obj.set_text("현장회의내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("0");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("28");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01_00_00_00_00_00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00_00","70","60","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("33");
            obj.set_text("도면사진");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("35");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:K110\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsFlrplnPhoto&quot;) || !K110 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roFlrplnPhoto&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roFlrplnPhoto&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsFlrplnPhoto&quot;) &amp;&amp; !K110 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsFlrplnPhoto&quot;) &amp;&amp; !K110 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("37");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00","0","44","305","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("38");
            obj.set_text("현장관리 계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_00","433","58","305","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("39");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00","0","124","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("40");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","20.00","114","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("41");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:K120\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsGrndsMngWtpl&quot;) || !K120 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roGrndsMngWtpl&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roGrndsMngWtpl&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsGrndsMngWtpl&quot;) &amp;&amp; !K120 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsGrndsMngWtpl&quot;) &amp;&amp; !K120 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_00","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("42");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_01","0","44","305","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("44");
            obj.set_text("기타서류 1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_01","433","58","305","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01_01","0","124","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("46");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_01","20.00","114","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("47");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:K130\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) || !K130 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K130 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K130 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_01","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("48");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_02","0","44","305","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("50");
            obj.set_text("기타서류 2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_02","433","58","305","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01_02","0","124","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("52");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_02\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_02","20.00","114","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("53");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:K140\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) || !K140 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K140 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K140 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_02","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("54");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_02\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Radio("radio00","87","1940","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divPrcsDsctn_form_radio00_innerdataset = new nexacro.NormalDataset("divPrcsDsctn_form_radio00_innerdataset", obj);
            divPrcsDsctn_form_radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divPrcsDsctn_form_radio00_innerdataset);
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Edit("edt01","57","2073","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("69");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_03","0","44","305","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("56");
            obj.set_text("기타서류 3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01_03","433","58","305","34",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("57");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panTitle01_03","0","124","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("58");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01_03\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_03","20.00","114","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("59");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"106\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:K150\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) || !K150 ? &quot;&quot; : &quot;CellFile&quot;\"/><Cell col=\"1\" displaytype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot;  : &quot;buttoncontrol&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb(&quot;roEtcDcmnt&quot;) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K150 ? &quot;파일찾기&quot; : &quot;파일삭제&quot;\" cssclass=\"expr:dataset.parent.cfnGetAtrb(&quot;vsEtcDcmnt&quot;) &amp;&amp; !K150 ? &quot;CellFileUp&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_03","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("60");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01_03\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_04","0","44","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("62");
            obj.set_text("착수회의필요여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_04","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("63");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_04\"/><PanelItem id=\"PanelItem01\" componentid=\"radio00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_04_00","0","44","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("66");
            obj.set_text("착수회의내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_04_00","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("67");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00_02_01_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt01\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_04_01","0","44","100%","46",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("70");
            obj.set_text("공사완료여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Radio("radio00_00","87","1940","100%","40",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divPrcsDsctn_form_radio00_00_innerdataset = new nexacro.NormalDataset("divPrcsDsctn_form_radio00_00_innerdataset", obj);
            divPrcsDsctn_form_radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divPrcsDsctn_form_radio00_00_innerdataset);
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Panel("panFile01_04_01","0","42","100%","90",null,null,null,null,null,null,this.divPrcsDsctn.form);
            obj.set_taborder("72");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"radio00_00\"/></Contents>");
            this.divPrcsDsctn.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00","-26","20","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("협조확인(원상회복)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnCoprIdnty","1210","23","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00","1110","20","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCoprIdnty\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panCoprIdnty","10","10980","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("20");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divCoprIdnty","0","4052","100.00%","712",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.getSetter("updtlprocsetccn").set("FICA");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04","0","0","298","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("0");
            obj.set_text("착공승인검토");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvwBtn","298","0","298","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnBgncstRvwEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnBgncstRvwAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnBgncstRvwDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnBgncstRvwStrg\"/><PanelItem id=\"PanelItem06\" componentid=\"btnBgncstRvwInq\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04","20","10","100%","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("2");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"panBgncstAprvRvwBtn\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panBgncstAprvRvw","40","638","100.00%","356",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdBgncstAprvRvw\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Grid("grdBgncstAprvRvw","20","10","100%","285",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsBgncstAprvRvw");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"524\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;&quot; : &quot;CellEnd, CellLink&quot;\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsBgncstAprvRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsJobGroupCd\" combodatacol=\"jobGroupNm\" combocodecol=\"jobGroupId\" text=\"bind:tmprCd\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roBgncstAprvRvwEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"expr:endDt ? &quot;####-##-## ##:##:##&quot; : &quot;&quot;\" maskedittype=\"string\" maskeditlimitbymask=\"none\"/></Band></Format></Formats>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01_00_00_00_00_00_00_00_00_04_00","0","0","298","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("5");
            obj.set_text("원상회복확인");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panRtosIdntyRvwBtn","298","0","298","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnRtosIdntyRvwEblcAdd\"/><PanelItem id=\"PanelItem03\" componentid=\"btnRtosIdntyRvwAdd\"/><PanelItem id=\"PanelItem05\" componentid=\"btnRtosIdntyRvwStrg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnRtosIdntyRvwDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnRtosIdntyRvwInq\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panTitle01_00_00_00_00_00_00_00_00_04_00","20","10","100%","46",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("7");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01_00_00_00_00_00_00_00_00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panRtosIdntyRvwBtn\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Panel("panRtosIdntyRvw","40","638","100.00%","356",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("8");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01_00_00_00_00_00_00_00_00_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdRtosIdntyRvw\"/></Contents>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Grid("grdRtosIdntyRvw","20","10","100%","262",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsRtosIdntyRvw");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"524\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"165\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"협조업무\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"담당부서(처리그룹)\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"담당자\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;CellE&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"연락처(내선번호)\"/><Cell col=\"6\" text=\"검토의견\"/><Cell col=\"7\" cssclass=\"CellAdd\" displaytype=\"buttoncontrol\"/><Cell col=\"8\" text=\"처리결과&#13;&#10;(승인,불승인)\"/><Cell col=\"9\" text=\"확인일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:chc\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;checkbox&quot; : &quot;none&quot;\" displaytype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;checkboxcontrol&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsDocCd\" combodatacol=\"docNm\" combocodecol=\"docCd\" text=\"bind:cstrnKndCd\" cssclass=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;&quot; : &quot;CellEnd, CellLink&quot;\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.cfnGetAtrb.call(&quot;vsRtosIdntyRvwEdtr&quot;) ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"dsJobGroupCd\" combodatacol=\"jobGroupNm\" combocodecol=\"jobGroupId\" text=\"bind:tmprCd\"/><Cell col=\"4\" displaytype=\"text\" expandshow=\"expr:dataset.parent.cfnGetAtrb.call(&quot;roRtosIdntyRvwEdtr&quot;) ? &quot;hide&quot; : &quot;show&quot;\" expandsize=\"40\" text=\"bind:prcrNm\"/><Cell col=\"5\" text=\"bind:prcrTelno\"/><Cell col=\"6\" text=\"bind:prcsRsltCn\" textareascrolltype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"7\" displaytype=\"expr:isFileAtch ? &quot;buttoncontrol&quot; : &quot;&quot;\" cssclass=\"CellAdd\"/><Cell col=\"8\" text=\"bind:acptnHnovAprvNm\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"expr:endDt ? &quot;####-##-## ##:##:##&quot; : &quot;&quot;\" maskedittype=\"string\" maskeditlimitbymask=\"none\"/></Band></Format></Formats>");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwInq","920","10","75","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("10");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwEblcAdd","1060","10","78","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("11");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwAdd","1070","1","47","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwDel","804.00","10","45","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnBgncstRvwStrg","1234","10","45","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyRvwInq","220","0","75","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("15");
            obj.set_text("조회(숨김)");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyRvwEblcAdd","305","0","78","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("16");
            obj.set_text("일괄추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyRvwAdd","393","0","47","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("17");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyRvwDel","450","0","45","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosIdntyRvwStrg","505","0","45","34",null,null,null,null,null,null,this.divCoprIdnty.form);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divCoprIdnty.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","37","7150","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("원상회복 절차확인");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnRtosProcIdnty","1272","7160","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","1191","7150","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnRtosProcIdnty\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panRtosProcIdnty","37","7130","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("25");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divRtosProcIdnty","0","6359","100.00%","701",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","95","113","96.88%","43",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("0");
            obj.set_text("원상회복 절차 등 확인");
            obj.set_cssclass("sta_WF_Label");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Button("btnRtosProcIdnty","0","50","159","34",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("1");
            obj.set_text("원상회복안내 체크리스트");
            obj.set_fittocontents("width");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt","190","2053","100.00%","414",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01_00\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Edit("edtProcIdntyCsaf","130","156","100%","40",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01_00","20","0","100%","403",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnRtosProcIdnty\"/><PanelItem id=\"PanelItem03\" componentid=\"grdRtosProcIdnty\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","95","113","96.88%","43",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("4");
            obj.set_text("절차 확인 현황");
            obj.set_cssclass("sta_WF_Label");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01_00_00","95","113","100%","82.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtProcIdntyCsaf\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt00","190","2053","100.00%","93.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01_00_00\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Radio("rdoIdntyRsltCd","126","243","100%","40",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divRtosProcIdnty_form_rdoIdntyRsltCd_innerdataset = new nexacro.NormalDataset("divRtosProcIdnty_form_rdoIdntyRsltCd_innerdataset", obj);
            divRtosProcIdnty_form_rdoIdntyRsltCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">INSPECTRST001</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">INSPECTRST002</Col><Col id=\"datacolumn\">조건부승인</Col></Row></Rows>");
            obj.set_innerdataset(divRtosProcIdnty_form_rdoIdntyRsltCd_innerdataset);
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00","95","113","96.88%","43",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("8");
            obj.set_text("확인결과");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01_00_00_00","95","113","100%","82.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoIdntyRsltCd\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt00_00","190","2053","100.00%","93.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01_00_00_00\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_01","95","113","96.88%","43",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("12");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_Label_E");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00_00_01_00_00_01","95","113","100%","82.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"txtRvwOpnnCn\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Panel("panDocOtpt00_01","190","2053","100.00%","93.21",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00_00_01_00_00_01\"/></Contents>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new TextArea("txtRvwOpnnCn","1310","6290","100%","43",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("15");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Grid("grdRtosProcIdnty","0","93","100.00%","310",null,null,null,null,null,null,this.divRtosProcIdnty.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsRtosGdCheckList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"580\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"48\"/><Column size=\"110\"/><Column size=\"48\"/><Column size=\"110\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"확인사항\"/><Cell col=\"2\" colspan=\"6\" cssclass=\"CellEnd\" text=\"확인\"/></Band><Band id=\"body\"><Cell text=\"bind:절차등확인\" cssclass=\"CellHead\" suppressalign=\"middle\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:확인사항\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"2\" cssclass=\"CellMerge\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"TSCINFOITEM000\" text=\"bind:cmptn\"/><Cell col=\"3\" text=\"bind:완료\" cssclass=\"CellMerge\"/><Cell col=\"4\" cssclass=\"CellMerge\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"TSCINFOITEM001\" text=\"bind:aftrPrgrs\"/><Cell col=\"5\" text=\"bind:추후진행\" cssclass=\"CellMerge\"/><Cell col=\"6\" cssclass=\"CellMerge\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"TSCINFOITEM002\" text=\"bind:rlvtMttrNone\"/><Cell col=\"7\" text=\"bind:해당사항없음\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divRtosProcIdnty.addChild(obj.name, obj);

            obj = new Static("staSubTitle00_00_00_00_00_00_00_00_00","11","7370","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnEtc","1247","7380","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00_00_00_00_00","1165","7370","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnEtc\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panEtc","11","7350","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("30");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00_00_00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00_00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divEtc","0","7420","100.00%","171",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01_00_00_00_00_00","0","0","300","46",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("0");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("0");
            obj.set_fittocontents("width");
            this.divEtc.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_00_00_00_00","398","435","200","34",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.divEtc.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00_00_00_00_00","98","428","100%","46",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("2");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_01_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_00_00_00_00\"/></Contents>");
            this.divEtc.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","256","493","100%","100",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("3");
            this.divEtc.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01_00_00_00_00_00","20","382","96.88%","150",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divEtc.addChild(obj.name, obj);

            obj = new Panel("panSafeMngrNghtPrvcUtztnWtcs","0","372","100.00%","171",null,null,null,null,null,null,this.divEtc.form);
            obj.set_taborder("5");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01_00_00_00_00_00\"/></Contents>");
            this.divEtc.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divRtosIdntyDmnd.form
            obj = new Layout("default","",0,0,this.divRtosIdntyDmnd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("- 업로드하는 파일의 크기는 100mb 이하로 제한됩니다.\r\n- 최종 준공도면은 1개 도면당 1개 CAD파일로 모형공간에 작성하셔서 zip 파일로 업로드하시기 바랍니다.\r\n  도면 작성 관련 자세한 사항은  문서접수실(032-741-2350)으로 문의하시기 바랍니다.");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","0","100%","70",null,null);

                p.staLabel00_02.set_taborder("1");
                p.staLabel00_02.set_text("원상회복도면(건축)");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);

                p.panBtnFile.set_taborder("2");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.Grid00.set_taborder("4");
                p.Grid00.set_binddataset("dsFile");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","60","100%","40",null,null);

                p.panFile.set_taborder("5");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","0","100.00%","111",null,null);

                p.staLabel00_02_00.set_taborder("6");
                p.staLabel00_02_00.set_text("원상회복도면(기계)");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("10","10","490","46",null,null);

                p.panBtnFile00.set_taborder("7");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("500","10","490","46",null,null);

                p.panTitle00.set_taborder("8");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("30","20","100%","46",null,null);

                p.Grid00_00.set_taborder("9");
                p.Grid00_00.set_binddataset("dsFile");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("1080.00","756","100%","40",null,null);

                p.panFile00.set_taborder("10");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","111","100.00%","111",null,null);

                p.staLabel00_02_00_00.set_taborder("11");
                p.staLabel00_02_00_00.set_text("원상회복도면(전기)");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00.move("20","20","490","46",null,null);

                p.panBtnFile00_00.set_taborder("12");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("510","20","490","46",null,null);

                p.panTitle00_00.set_taborder("13");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.move("40","30","100%","46",null,null);

                p.Grid00_00_00.set_taborder("14");
                p.Grid00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00.move("30","70","100%","40",null,null);

                p.panFile00_00.set_taborder("15");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.move("0","222","100.00%","111",null,null);

                p.staLabel00_02_00_00_00.set_taborder("16");
                p.staLabel00_02_00_00_00.set_text("원상회복도면(통신)");
                p.staLabel00_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00.move("30","30","490","46",null,null);

                p.panBtnFile00_00_00.set_taborder("17");
                p.panBtnFile00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00.move("520","30","490","46",null,null);

                p.panTitle00_00_00.set_taborder("18");
                p.panTitle00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00.move("50","40","100%","46",null,null);

                p.Grid00_00_00_00.set_taborder("19");
                p.Grid00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00.move("40","80","100%","40",null,null);

                p.panFile00_00_00.set_taborder("20");
                p.panFile00_00_00.set_fittocontents("height");
                p.panFile00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00.set_verticalgap("4");
                p.panFile00_00_00.move("0","333","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00.set_taborder("21");
                p.staLabel00_02_00_00_00_00.set_text("원상회복도면(소방)");
                p.staLabel00_02_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00.set_taborder("22");
                p.panBtnFile00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00.set_taborder("23");
                p.panTitle00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00.set_taborder("24");
                p.Grid00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00.move("50","90","100%","40",null,null);

                p.panFile00_00_00_00.set_taborder("25");
                p.panFile00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00.move("0","444","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00.set_taborder("26");
                p.staLabel00_02_00_00_00_00_00.set_text("공사 준공 사진첩");
                p.staLabel00_02_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00.set_taborder("27");
                p.panBtnFile00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00.set_taborder("28");
                p.panTitle00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00.set_taborder("29");
                p.Grid00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.panFile00_00_00_00_00.set_taborder("30");
                p.panFile00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.Static06.set_taborder("31");
                p.Static06.set_text("(분야별 공사 중, 공사완료 사진)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("45","3881","100%","30",null,null);

                p.staLabel00_02_00_00_00_00_00_00.set_taborder("32");
                p.staLabel00_02_00_00_00_00_00_00.set_text("안전교육 실시자료");
                p.staLabel00_02_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00.set_taborder("33");
                p.panBtnFile00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00_00.set_taborder("34");
                p.panTitle00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00.set_taborder("35");
                p.Grid00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.Static06_00.set_taborder("36");
                p.Static06_00.set_text("(시설개선공사 관리절차, 안전교육자료)");
                p.Static06_00.set_cssclass("sta_WF_Des");
                p.Static06_00.set_fittocontents("height");
                p.Static06_00.move("45","3881","100%","30",null,null);

                p.panFile00_00_00_00_00_00.set_taborder("37");
                p.panFile00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00.set_taborder("38");
                p.staLabel00_02_00_00_00_00_00_00_00.set_text("폐기물 처리실적 증빙 서류");
                p.staLabel00_02_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00_00.set_taborder("39");
                p.panBtnFile00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00_00_00.set_taborder("40");
                p.panTitle00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00_00.set_taborder("41");
                p.Grid00_00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.Static06_00_00.set_taborder("42");
                p.Static06_00_00.set_text("(처리업체 건설폐기물 수집‧운반업 허가증 포함, 5t 이상 중구청, 올바로시스템 신고자료)");
                p.Static06_00_00.set_cssclass("sta_WF_Des");
                p.Static06_00_00.set_fittocontents("height");
                p.Static06_00_00.move("45","3881","100%","30",null,null);

                p.panFile00_00_00_00_00_00_00.set_taborder("43");
                p.panFile00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00_00.set_taborder("44");
                p.staLabel00_02_00_00_00_00_00_00_00_00.set_text("방염필증");
                p.staLabel00_02_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00_00_00.set_taborder("45");
                p.panBtnFile00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00_00_00_00.set_taborder("46");
                p.panTitle00_00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00_00_00.set_taborder("47");
                p.Grid00_00_00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.Static06_00_00_00.set_taborder("48");
                p.Static06_00_00_00.set_text("(필요시 시험성적서 포함)");
                p.Static06_00_00_00.set_cssclass("sta_WF_Des");
                p.Static06_00_00_00.set_fittocontents("height");
                p.Static06_00_00_00.move("45","3881","100%","30",null,null);

                p.panFile00_00_00_00_00_00_00_00.set_taborder("49");
                p.panFile00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00_00_00.set_taborder("50");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00.set_text("전기안전공사 전기설비 안전진단확인서");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00_00_00_00.set_taborder("51");
                p.panBtnFile00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00_00_00_00_00.set_taborder("52");
                p.panTitle00_00_00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00_00_00_00.set_taborder("53");
                p.Grid00_00_00_00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.Static06_00_00_00_00.set_taborder("54");
                p.Static06_00_00_00_00.set_text("(한국전기안전공사, 20kw 이상 입주자)");
                p.Static06_00_00_00_00.set_cssclass("sta_WF_Des");
                p.Static06_00_00_00_00.set_fittocontents("height");
                p.Static06_00_00_00_00.move("45","3881","100%","30",null,null);

                p.panFile00_00_00_00_00_00_00_00_00.set_taborder("55");
                p.panFile00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.staLabel00_02_00_00_00_00_00_00_00_00_00_00.set_taborder("56");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00_00.set_text("관련법규 이행 사항");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_00_00_00_00_00.move("40","40","490","46",null,null);

                p.panBtnFile00_00_00_00_00_00_00_00_00_00.set_taborder("57");
                p.panBtnFile00_00_00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_00_00_00_00_00.move("530","40","490","46",null,null);

                p.panTitle00_00_00_00_00_00_00_00_00_00.set_taborder("58");
                p.panTitle00_00_00_00_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_00_00_00_00_00.move("60","50","100%","46",null,null);

                p.Grid00_00_00_00_00_00_00_00_00_00_00.set_taborder("59");
                p.Grid00_00_00_00_00_00_00_00_00_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_00_00_00_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_00_00_00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_00_00_00_00_00.move("50","90","100%","40",null,null);

                p.Static06_00_00_00_00_00.set_taborder("60");
                p.Static06_00_00_00_00_00.set_text("(소방서 안전시설등 완비증명서, 가스안전공사 완성검사증명서, 방화문 등의 시험성적서, 방범/방화셔터 UL인증모터 등)");
                p.Static06_00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.Static06_00_00_00_00_00.set_fittocontents("height");
                p.Static06_00_00_00_00_00.move("45","3881","100%","30",null,null);

                p.panFile00_00_00_00_00_00_00_00_00_00.set_taborder("61");
                p.panFile00_00_00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_00_00_00_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_00_00_00_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_00_00_00_00_00.move("0","625","100.00%","145",null,null);

                p.staLabel00_02_00_00_00_00_00_01.set_taborder("62");
                p.staLabel00_02_00_00_00_00_00_01.set_text("기타서류1");
                p.staLabel00_02_00_00_00_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_01.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_01.move("80","80","490","46",null,null);

                p.panBtnFile00_00_00_00_00_01.set_taborder("63");
                p.panBtnFile00_00_00_00_00_01.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_01.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_01.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_01.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_01.move("570","80","490","46",null,null);

                p.panTitle00_00_00_00_00_01.set_taborder("64");
                p.panTitle00_00_00_00_00_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_01.move("100","90","100%","46",null,null);

                p.Grid00_00_00_00_00_00_01.set_taborder("65");
                p.Grid00_00_00_00_00_00_01.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_01.set_autofittype("col");
                p.Grid00_00_00_00_00_00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_01.move("90","130","100%","40",null,null);

                p.panFile00_00_00_00_00_01.set_taborder("66");
                p.panFile00_00_00_00_00_01.set_fittocontents("height");
                p.panFile00_00_00_00_00_01.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_01.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_01.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_01.set_verticalgap("4");
                p.panFile00_00_00_00_00_01.move("0","930","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_02.set_taborder("67");
                p.staLabel00_02_00_00_00_00_00_02.set_text("기타서류2");
                p.staLabel00_02_00_00_00_00_00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_02.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_02.move("90","90","490","46",null,null);

                p.panBtnFile00_00_00_00_00_02.set_taborder("68");
                p.panBtnFile00_00_00_00_00_02.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_02.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_02.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_02.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_02.move("580","90","490","46",null,null);

                p.panTitle00_00_00_00_00_02.set_taborder("69");
                p.panTitle00_00_00_00_00_02.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_02.move("110","100","100%","46",null,null);

                p.Grid00_00_00_00_00_00_02.set_taborder("70");
                p.Grid00_00_00_00_00_00_02.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_02.set_autofittype("col");
                p.Grid00_00_00_00_00_00_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_02.move("100","140","100%","40",null,null);

                p.panFile00_00_00_00_00_02.set_taborder("71");
                p.panFile00_00_00_00_00_02.set_fittocontents("height");
                p.panFile00_00_00_00_00_02.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_02.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_02.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_02.set_verticalgap("4");
                p.panFile00_00_00_00_00_02.move("0","1041","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_01_00.set_taborder("72");
                p.staLabel00_02_00_00_00_00_00_01_00.set_text("기타서류3");
                p.staLabel00_02_00_00_00_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_01_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_01_00.move("80","80","490","46",null,null);

                p.panBtnFile00_00_00_00_00_01_00.set_taborder("73");
                p.panBtnFile00_00_00_00_00_01_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_01_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_01_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_01_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_01_00.move("570","80","490","46",null,null);

                p.panTitle00_00_00_00_00_01_00.set_taborder("74");
                p.panTitle00_00_00_00_00_01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_01_00.move("100","90","100%","46",null,null);

                p.Grid00_00_00_00_00_00_01_00.set_taborder("75");
                p.Grid00_00_00_00_00_00_01_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_01_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_01_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_01_00.move("90","130","100%","40",null,null);

                p.panFile00_00_00_00_00_01_00.set_taborder("76");
                p.panFile00_00_00_00_00_01_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_01_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_01_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_01_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_01_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_01_00.move("0","930","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_02_00.set_taborder("77");
                p.staLabel00_02_00_00_00_00_00_02_00.set_text("기타서류4");
                p.staLabel00_02_00_00_00_00_00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_02_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_02_00.move("90","90","490","46",null,null);

                p.panBtnFile00_00_00_00_00_02_00.set_taborder("78");
                p.panBtnFile00_00_00_00_00_02_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_02_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_02_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_02_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_02_00.move("580","90","490","46",null,null);

                p.panTitle00_00_00_00_00_02_00.set_taborder("79");
                p.panTitle00_00_00_00_00_02_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_02_00.move("110","100","100%","46",null,null);

                p.Grid00_00_00_00_00_00_02_00.set_taborder("80");
                p.Grid00_00_00_00_00_00_02_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_02_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_02_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_02_00.move("100","140","100%","40",null,null);

                p.panFile00_00_00_00_00_02_00.set_taborder("81");
                p.panFile00_00_00_00_00_02_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_02_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_02_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_02_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_02_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_02_00.move("0","1041","100.00%","111",null,null);

                p.staLabel00_02_00_00_00_00_00_01_00_00.set_taborder("82");
                p.staLabel00_02_00_00_00_00_00_01_00_00.set_text("기타서류5");
                p.staLabel00_02_00_00_00_00_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00_00_00_00_00_01_00_00.set_flexgrow("1");
                p.staLabel00_02_00_00_00_00_00_01_00_00.move("80","80","490","46",null,null);

                p.panBtnFile00_00_00_00_00_01_00_00.set_taborder("83");
                p.panBtnFile00_00_00_00_00_01_00_00.set_flexgrow("1");
                p.panBtnFile00_00_00_00_00_01_00_00.set_flexcrossaxisalign("start");
                p.panBtnFile00_00_00_00_00_01_00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00_00_00_00_01_00_00.set_horizontalgap("10");
                p.panBtnFile00_00_00_00_00_01_00_00.move("570","80","490","46",null,null);

                p.panTitle00_00_00_00_00_01_00_00.set_taborder("84");
                p.panTitle00_00_00_00_00_01_00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00_00_00_00_01_00_00.move("100","90","100%","46",null,null);

                p.Grid00_00_00_00_00_00_01_00_00.set_taborder("85");
                p.Grid00_00_00_00_00_00_01_00_00.set_binddataset("dsFile");
                p.Grid00_00_00_00_00_00_01_00_00.set_autofittype("col");
                p.Grid00_00_00_00_00_00_01_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00_00_00_00_01_00_00.move("90","130","100%","40",null,null);

                p.panFile00_00_00_00_00_01_00_00.set_taborder("86");
                p.panFile00_00_00_00_00_01_00_00.set_fittocontents("height");
                p.panFile00_00_00_00_00_01_00_00.set_spacing("10px 20px 10px 20px");
                p.panFile00_00_00_00_00_01_00_00.set_flexwrap("wrap");
                p.panFile00_00_00_00_00_01_00_00.set_cssclass("pal_WF_DtlBg");
                p.panFile00_00_00_00_00_01_00_00.set_verticalgap("4");
                p.panFile00_00_00_00_00_01_00_00.move("0","930","100.00%","111",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divRtosIdntyDmnd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRtosIdntyDmnd.form
            obj = new Layout("Layout0","",0,0,this.divRtosIdntyDmnd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divRtosIdntyDmnd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBfhdMetgDsctn.form
            obj = new Layout("default","",0,0,this.divBfhdMetgDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_verticalgap("4");
                p.pan00.move("0","91","100.00%","111",null,null);

                p.staLabel00_02.set_taborder("1");
                p.staLabel00_02.set_text("1차사전미팅");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.panBtnFile.set_taborder("2");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Grid00.set_taborder("4");
                p.Grid00.set_binddataset("dsFile");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.set_readonly("false");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("5");
                p.panFile.set_fittocontents("height");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","42","100%","90",null,null);

                p.Panel11_00_00.set_taborder("6");
                p.Panel11_00_00.set_type("horizontal");
                p.Panel11_00_00.set_horizontalgap("10");
                p.Panel11_00_00.set_flexgrow("1");
                p.Panel11_00_00.set_minwidth("");
                p.Panel11_00_00.move("685","150","305","1",null,null);

                p.pan01_00_00.set_taborder("7");
                p.pan01_00_00.set_horizontalgap("20");
                p.pan01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00_00.set_flexwrap("wrap");
                p.pan01_00_00.set_fittocontents("height");
                p.pan01_00_00.set_verticalgap("0");
                p.pan01_00_00.set_type("horizontal");
                p.pan01_00_00.move("0","60","96.88%","1",null,null);

                p.staLabel00_02_00.set_taborder("8");
                p.staLabel00_02_00.set_text("2차사전미팅");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.panBtnFile00.set_taborder("9");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","34",null,null);

                p.panTitle00.set_taborder("10");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.set_flexcrossaxisalign("center");
                p.panTitle00.set_spacing("0px 0px 10px 0px");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Grid00_00.set_taborder("11");
                p.Grid00_00.set_binddataset("dsFile");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.set_readonly("false");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.panFile00.set_taborder("12");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","42","100%","90",null,null);

                p.pan00_00.set_taborder("13");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_spacing("10px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.set_verticalgap("4");
                p.pan00_00.move("0","91","100.00%","116",null,null);

                p.staLabel00_02_01.set_taborder("14");
                p.staLabel00_02_01.set_text("3차사전미팅");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panBtnFile01.set_taborder("15");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","34",null,null);

                p.panTitle01.set_taborder("16");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_flexcrossaxisalign("center");
                p.panTitle01.set_spacing("0px 0px 10px 0px");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Grid00_01.set_taborder("17");
                p.Grid00_01.set_binddataset("dsFile");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.set_readonly("false");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("18");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100%","90",null,null);

                p.pan00_01.set_taborder("19");
                p.pan00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_01.set_flexwrap("wrap");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_spacing("10px 20px 10px 20px");
                p.pan00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_01.set_verticalgap("4");
                p.pan00_01.move("0","674","100.00%","111",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divBfhdMetgDsctn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBfhdMetgDsctn.form
            obj = new Layout("Layout0","",0,0,this.divBfhdMetgDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divBfhdMetgDsctn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPrcsDsctn.form
            obj = new Layout("default","",0,0,this.divPrcsDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("전달사항");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("20","22","100%","46",null,null);

                p.txtCnvyMttr.set_taborder("1");
                p.txtCnvyMttr.move("92","64","100%","100",null,null);

                p.grdAtchCn.set_taborder("2");
                p.grdAtchCn.set_binddataset("dsRvwOpnn");
                p.grdAtchCn.set_autofittype("col");
                p.grdAtchCn.move("20","102","100.00%","346",null,null);

                p.staAtchCn.set_taborder("3");
                p.staAtchCn.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.staAtchCn.set_cssclass("sta_WF_Des");
                p.staAtchCn.set_fittocontents("height");
                p.staAtchCn.move("158","288","100%","60",null,null);

                p.panRvwOpnn.set_taborder("4");
                p.panRvwOpnn.set_type("vertical");
                p.panRvwOpnn.set_flexgrow("1");
                p.panRvwOpnn.set_verticalgap("4");
                p.panRvwOpnn.set_fittocontents("height");
                p.panRvwOpnn.move("20.00","10","100%","400",null,null);

                p.panCnvyMttr.set_taborder("5");
                p.panCnvyMttr.set_flexcrossaxiswrapalign("start");
                p.panCnvyMttr.set_flexwrap("wrap");
                p.panCnvyMttr.set_fittocontents("height");
                p.panCnvyMttr.set_spacing("0px 20px 10px 20px");
                p.panCnvyMttr.set_cssclass("pal_WF_DtlBg");
                p.panCnvyMttr.set_verticalgap("4");
                p.panCnvyMttr.move("0","0","100.00%","408",null,null);

                p.panRtosInspDsctn.set_taborder("74");
                p.panRtosInspDsctn.set_type("vertical");
                p.panRtosInspDsctn.set_fittocontents("height");
                p.panRtosInspDsctn.move("0","408","100%","1448.2",null,null);

                p.edt00.set_taborder("31");
                p.edt00.move("57","508","100%","40",null,null);

                p.cal00.set_taborder("11");
                p.cal00.set_dateformat("yyyy-MM-dd");
                p.cal00.move("136","478","150","40",null,null);

                p.staLabel03_00_01.set_taborder("6");
                p.staLabel03_00_01.set_text("원상회복최종확인일");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("0","0","490","46",null,null);

                p.Panel01_00.set_taborder("7");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.move("490.00","0","490","46",null,null);

                p.Panel00_01.set_taborder("8");
                p.Panel00_01.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01.set_verticalgap("0");
                p.Panel00_01.move("0","0","100%","46",null,null);

                p.Panel02_00_00_00.set_taborder("9");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","10","1240","90",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00.set_taborder("30");
                p.panSafeMngrNghtPrvcUtztnWtcs00.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_taborder("32");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_taborder("43");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_00.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_taborder("49");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_01.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_taborder("55");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_02.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_taborder("61");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_03.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_taborder("64");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_taborder("68");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00.move("0","738","100.00%","111",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_taborder("73");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01.move("0","738","100.00%","111",null,null);

                p.pan00.set_taborder("10");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_verticalgap("4");
                p.pan00.move("0","91","100.00%","111",null,null);

                p.staLabel03_00_01_01_00_00_00_00_00.set_taborder("12");
                p.staLabel03_00_01_01_00_00_00_00_00.set_text("원상회복확인결과");
                p.staLabel03_00_01_01_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00_00_00_00_00.set_flexgrow("0");
                p.staLabel03_00_01_01_00_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00_00_00_00.move("0","0","300","46",null,null);

                p.Panel01_01_00_00_00_00_00.set_taborder("13");
                p.Panel01_01_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel01_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_00_00_00.move("490.00","0","200","34",null,null);

                p.Panel00_01_00_00_00_00_00.set_taborder("14");
                p.Panel00_01_00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_01_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_01_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_01_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.grdRtosIdntyRslt.set_taborder("15");
                p.grdRtosIdntyRslt.set_binddataset("dsFile");
                p.grdRtosIdntyRslt.set_autofittype("col");
                p.grdRtosIdntyRslt.set_cssclass("grd_WF_FileAdd");
                p.grdRtosIdntyRslt.set_readonly("false");
                p.grdRtosIdntyRslt.move("0","50","100%","40",null,null);

                p.Panel02_00_00_01_00_00_00_00_00.set_taborder("16");
                p.Panel02_00_00_01_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00_00_00_00.move("70","60","100%","90",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs.set_taborder("17");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs.move("0","738","100.00%","111",null,null);

                p.staLabel03_00_01_00.set_taborder("18");
                p.staLabel03_00_01_00.set_text("원상회복회의내역");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_00.move("30.00","30","100%","46",null,null);

                p.Panel02_00_00_00_00.set_taborder("19");
                p.Panel02_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00_00.move("50.00","30","300","86",null,null);

                p.pan04_01.set_taborder("20");
                p.pan04_01.set_horizontalgap("20");
                p.pan04_01.set_flexcrossaxiswrapalign("start");
                p.pan04_01.set_flexwrap("wrap");
                p.pan04_01.set_fittocontents("height");
                p.pan04_01.set_verticalgap("0");
                p.pan04_01.set_spacing("0px 20px 10px 20px");
                p.pan04_01.set_cssclass("pal_WF_DtlBg");
                p.pan04_01.move("1350","479","100.00%","93",null,null);

                p.txtCnvyMttr00_00_00.set_taborder("26");
                p.txtCnvyMttr00_00_00.move("50","665","100.00%","48",null,null);

                p.staLabel03_00_00_01.set_taborder("21");
                p.staLabel03_00_00_01.set_text("문서출력");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("110","1901","96.88%","43",null,null);

                p.btnAprvAplcfmOtpt.set_taborder("22");
                p.btnAprvAplcfmOtpt.set_text("임대시설물 원상복구공사 승인신청서 출력");
                p.btnAprvAplcfmOtpt.set_fittocontents("width");
                p.btnAprvAplcfmOtpt.move("0","50","250","31.21",null,null);

                p.Static00_04_00.set_taborder("23");
                p.Static00_04_00.set_text("Windows 7 이상의 OS에서 출력 가능합니다.(Windows XP 출력 불가)");
                p.Static00_04_00.set_cssclass("sta_WF_Des");
                p.Static00_04_00.set_fittocontents("height");
                p.Static00_04_00.move("223","1981","100%","33",null,null);

                p.Panel02_00_00_00_00_01.set_taborder("24");
                p.Panel02_00_00_00_00_01.set_type("vertical");
                p.Panel02_00_00_00_00_01.set_fittocontents("height");
                p.Panel02_00_00_00_00_01.set_verticalgap("8");
                p.Panel02_00_00_00_00_01.move("210","2053","100%","123.21",null,null);

                p.panDocOtpt.set_taborder("25");
                p.panDocOtpt.set_horizontalgap("20");
                p.panDocOtpt.set_flexcrossaxiswrapalign("start");
                p.panDocOtpt.set_flexwrap("wrap");
                p.panDocOtpt.set_fittocontents("height");
                p.panDocOtpt.set_verticalgap("0");
                p.panDocOtpt.set_spacing("0px 20px 10px 20px");
                p.panDocOtpt.set_cssclass("pal_WF_DtlBg");
                p.panDocOtpt.move("190","2053","100.00%","134.2",null,null);

                p.btnAprvAplcfmOtpt00.set_taborder("75");
                p.btnAprvAplcfmOtpt00.set_text("임대시설물 원상복구 확인신청서/확인서 출력");
                p.btnAprvAplcfmOtpt00.set_fittocontents("width");
                p.btnAprvAplcfmOtpt00.move("305","1775","250","31",null,null);

                p.staLabel03_00_01_01_00_00_00_00_00_00.set_taborder("27");
                p.staLabel03_00_01_01_00_00_00_00_00_00.set_text("현장회의내역");
                p.staLabel03_00_01_01_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00_00_00_00_00_00.set_flexgrow("0");
                p.staLabel03_00_01_01_00_00_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00_00_00_00_00.move("0","0","300","46",null,null);

                p.Panel00_01_00_00_00_00_00_00.set_taborder("28");
                p.Panel00_01_00_00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_01_00_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_01_00_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel00_01_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_01_00_00_00_00_00_00.move("0","0","100%","46",null,null);

                p.Panel02_00_00_01_00_00_00_00_00_00.set_taborder("29");
                p.Panel02_00_00_01_00_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00_00_00_00_00.move("70","60","100%","90",null,null);

                p.staLabel00_02_01.set_taborder("33");
                p.staLabel00_02_01.set_text("도면사진");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.panBtnFile01.set_taborder("34");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","34",null,null);

                p.panTitle01.set_taborder("35");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_flexcrossaxisalign("center");
                p.panTitle01.set_spacing("0px 0px 10px 0px");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Grid00_01.set_taborder("36");
                p.Grid00_01.set_binddataset("dsFile");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.set_readonly("false");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("37");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_00.set_taborder("38");
                p.staLabel00_02_01_00.set_text("현장관리 계획서");
                p.staLabel00_02_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00.set_fittocontents("width");
                p.staLabel00_02_01_00.move("0","44","305","46",null,null);

                p.panBtnFile01_00.set_taborder("39");
                p.panBtnFile01_00.set_flexgrow("1");
                p.panBtnFile01_00.set_flexmainaxisalign("end");
                p.panBtnFile01_00.set_horizontalgap("10");
                p.panBtnFile01_00.move("433","58","305","34",null,null);

                p.panTitle01_00.set_taborder("40");
                p.panTitle01_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00.set_flexwrap("wrap");
                p.panTitle01_00.set_fittocontents("height");
                p.panTitle01_00.set_flexcrossaxisalign("center");
                p.panTitle01_00.set_spacing("0px 0px 10px 0px");
                p.panTitle01_00.move("0","124","100%","46",null,null);

                p.Grid00_01_00.set_taborder("41");
                p.Grid00_01_00.set_binddataset("dsFile");
                p.Grid00_01_00.set_autofittype("col");
                p.Grid00_01_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_00.set_readonly("false");
                p.Grid00_01_00.move("20.00","114","100%","40",null,null);

                p.panFile01_00.set_taborder("42");
                p.panFile01_00.set_fittocontents("height");
                p.panFile01_00.set_flexwrap("wrap");
                p.panFile01_00.set_verticalgap("4");
                p.panFile01_00.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_01.set_taborder("44");
                p.staLabel00_02_01_01.set_text("기타서류 1");
                p.staLabel00_02_01_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_01.set_fittocontents("width");
                p.staLabel00_02_01_01.move("0","44","305","46",null,null);

                p.panBtnFile01_01.set_taborder("45");
                p.panBtnFile01_01.set_flexgrow("1");
                p.panBtnFile01_01.set_flexmainaxisalign("end");
                p.panBtnFile01_01.set_horizontalgap("10");
                p.panBtnFile01_01.move("433","58","305","34",null,null);

                p.panTitle01_01.set_taborder("46");
                p.panTitle01_01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_01.set_flexwrap("wrap");
                p.panTitle01_01.set_fittocontents("height");
                p.panTitle01_01.set_flexcrossaxisalign("center");
                p.panTitle01_01.set_spacing("0px 0px 10px 0px");
                p.panTitle01_01.move("0","124","100%","46",null,null);

                p.Grid00_01_01.set_taborder("47");
                p.Grid00_01_01.set_binddataset("dsFile");
                p.Grid00_01_01.set_autofittype("col");
                p.Grid00_01_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_01.set_readonly("false");
                p.Grid00_01_01.move("20.00","114","100%","40",null,null);

                p.panFile01_01.set_taborder("48");
                p.panFile01_01.set_fittocontents("height");
                p.panFile01_01.set_flexwrap("wrap");
                p.panFile01_01.set_verticalgap("4");
                p.panFile01_01.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_02.set_taborder("50");
                p.staLabel00_02_01_02.set_text("기타서류 2");
                p.staLabel00_02_01_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_02.set_fittocontents("width");
                p.staLabel00_02_01_02.move("0","44","305","46",null,null);

                p.panBtnFile01_02.set_taborder("51");
                p.panBtnFile01_02.set_flexgrow("1");
                p.panBtnFile01_02.set_flexmainaxisalign("end");
                p.panBtnFile01_02.set_horizontalgap("10");
                p.panBtnFile01_02.move("433","58","305","34",null,null);

                p.panTitle01_02.set_taborder("52");
                p.panTitle01_02.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_02.set_flexwrap("wrap");
                p.panTitle01_02.set_fittocontents("height");
                p.panTitle01_02.set_flexcrossaxisalign("center");
                p.panTitle01_02.set_spacing("0px 0px 10px 0px");
                p.panTitle01_02.move("0","124","100%","46",null,null);

                p.Grid00_01_02.set_taborder("53");
                p.Grid00_01_02.set_binddataset("dsFile");
                p.Grid00_01_02.set_autofittype("col");
                p.Grid00_01_02.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_02.set_readonly("false");
                p.Grid00_01_02.move("20.00","114","100%","40",null,null);

                p.panFile01_02.set_taborder("54");
                p.panFile01_02.set_fittocontents("height");
                p.panFile01_02.set_flexwrap("wrap");
                p.panFile01_02.set_verticalgap("4");
                p.panFile01_02.move("0","42","100%","90",null,null);

                p.radio00.set_taborder("65");
                p.radio00.set_innerdataset(divPrcsDsctn_form_radio00_innerdataset);
                p.radio00.set_codecolumn("codecolumn");
                p.radio00.set_datacolumn("datacolumn");
                p.radio00.set_columncount("-1");
                p.radio00.set_rowcount("-1");
                p.radio00.move("87","1940","100%","40",null,null);

                p.edt01.set_taborder("69");
                p.edt01.move("57","2073","100%","40",null,null);

                p.staLabel00_02_01_03.set_taborder("56");
                p.staLabel00_02_01_03.set_text("기타서류 3");
                p.staLabel00_02_01_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_03.set_fittocontents("width");
                p.staLabel00_02_01_03.move("0","44","305","46",null,null);

                p.panBtnFile01_03.set_taborder("57");
                p.panBtnFile01_03.set_flexgrow("1");
                p.panBtnFile01_03.set_flexmainaxisalign("end");
                p.panBtnFile01_03.set_horizontalgap("10");
                p.panBtnFile01_03.move("433","58","305","34",null,null);

                p.panTitle01_03.set_taborder("58");
                p.panTitle01_03.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_03.set_flexwrap("wrap");
                p.panTitle01_03.set_fittocontents("height");
                p.panTitle01_03.set_flexcrossaxisalign("center");
                p.panTitle01_03.set_spacing("0px 0px 10px 0px");
                p.panTitle01_03.move("0","124","100%","46",null,null);

                p.Grid00_01_03.set_taborder("59");
                p.Grid00_01_03.set_binddataset("dsFile");
                p.Grid00_01_03.set_autofittype("col");
                p.Grid00_01_03.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01_03.set_readonly("false");
                p.Grid00_01_03.move("20.00","114","100%","40",null,null);

                p.panFile01_03.set_taborder("60");
                p.panFile01_03.set_fittocontents("height");
                p.panFile01_03.set_flexwrap("wrap");
                p.panFile01_03.set_verticalgap("4");
                p.panFile01_03.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_04.set_taborder("62");
                p.staLabel00_02_01_04.set_text("착수회의필요여부");
                p.staLabel00_02_01_04.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_04.set_fittocontents("width");
                p.staLabel00_02_01_04.move("0","44","100%","46",null,null);

                p.panFile01_04.set_taborder("63");
                p.panFile01_04.set_fittocontents("height");
                p.panFile01_04.set_flexwrap("wrap");
                p.panFile01_04.set_verticalgap("4");
                p.panFile01_04.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_04_00.set_taborder("66");
                p.staLabel00_02_01_04_00.set_text("착수회의내역");
                p.staLabel00_02_01_04_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_04_00.set_fittocontents("width");
                p.staLabel00_02_01_04_00.move("0","44","100%","46",null,null);

                p.panFile01_04_00.set_taborder("67");
                p.panFile01_04_00.set_fittocontents("height");
                p.panFile01_04_00.set_flexwrap("wrap");
                p.panFile01_04_00.set_verticalgap("4");
                p.panFile01_04_00.move("0","42","100%","90",null,null);

                p.staLabel00_02_01_04_01.set_taborder("70");
                p.staLabel00_02_01_04_01.set_text("공사완료여부");
                p.staLabel00_02_01_04_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_04_01.set_fittocontents("width");
                p.staLabel00_02_01_04_01.move("0","44","100%","46",null,null);

                p.radio00_00.set_taborder("71");
                p.radio00_00.set_innerdataset(divPrcsDsctn_form_radio00_00_innerdataset);
                p.radio00_00.set_codecolumn("codecolumn");
                p.radio00_00.set_datacolumn("datacolumn");
                p.radio00_00.set_columncount("-1");
                p.radio00_00.set_rowcount("-1");
                p.radio00_00.move("87","1940","100%","40",null,null);

                p.panFile01_04_01.set_taborder("72");
                p.panFile01_04_01.set_fittocontents("height");
                p.panFile01_04_01.set_flexwrap("wrap");
                p.panFile01_04_01.set_verticalgap("4");
                p.panFile01_04_01.move("0","42","100%","90",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divPrcsDsctn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrcsDsctn.form
            obj = new Layout("Layout0","",0,0,this.divPrcsDsctn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPrcsDsctn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCoprIdnty.form
            obj = new Layout("default","",0,0,this.divCoprIdnty.form,
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
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_text("원상회복확인");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.set_flexgrow("1");
                p.staLabel00_02_01_00_00_00_00_00_00_00_00_04_00.move("0","0","298","46",null,null);

                p.panRtosIdntyRvwBtn.set_taborder("6");
                p.panRtosIdntyRvwBtn.set_flexgrow("1");
                p.panRtosIdntyRvwBtn.set_flexcrossaxisalign("center");
                p.panRtosIdntyRvwBtn.set_flexmainaxisalign("end");
                p.panRtosIdntyRvwBtn.set_horizontalgap("10");
                p.panRtosIdntyRvwBtn.set_flexcrossaxiswrapalign("start");
                p.panRtosIdntyRvwBtn.move("298","0","298","46",null,null);

                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_taborder("7");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_flexwrap("wrap");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.set_flexmainaxisalign("center");
                p.panTitle01_00_00_00_00_00_00_00_00_04_00.move("20","10","100%","46",null,null);

                p.panRtosIdntyRvw.set_taborder("8");
                p.panRtosIdntyRvw.set_fittocontents("height");
                p.panRtosIdntyRvw.set_spacing("10px 20px 10px 20px");
                p.panRtosIdntyRvw.set_flexwrap("wrap");
                p.panRtosIdntyRvw.set_cssclass("pal_WF_DtlBg");
                p.panRtosIdntyRvw.set_verticalgap("4");
                p.panRtosIdntyRvw.move("40","638","100.00%","356",null,null);

                p.grdRtosIdntyRvw.set_taborder("9");
                p.grdRtosIdntyRvw.set_binddataset("dsRtosIdntyRvw");
                p.grdRtosIdntyRvw.set_extendsizetype("row");
                p.grdRtosIdntyRvw.set_autosizingtype("row");
                p.grdRtosIdntyRvw.set_scrollbartype("none none");
                p.grdRtosIdntyRvw.move("20","10","100%","262",null,null);

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

                p.btnRtosIdntyRvwInq.set_taborder("15");
                p.btnRtosIdntyRvwInq.set_text("조회(숨김)");
                p.btnRtosIdntyRvwInq.set_cssclass("btn_WF_Small");
                p.btnRtosIdntyRvwInq.set_visible("false");
                p.btnRtosIdntyRvwInq.set_fittocontents("width");
                p.btnRtosIdntyRvwInq.move("220","0","75","34",null,null);

                p.btnRtosIdntyRvwEblcAdd.set_taborder("16");
                p.btnRtosIdntyRvwEblcAdd.set_text("일괄추가");
                p.btnRtosIdntyRvwEblcAdd.set_cssclass("btn_WF_Small");
                p.btnRtosIdntyRvwEblcAdd.set_visible("true");
                p.btnRtosIdntyRvwEblcAdd.set_fittocontents("width");
                p.btnRtosIdntyRvwEblcAdd.move("305","0","78","34",null,null);

                p.btnRtosIdntyRvwAdd.set_taborder("17");
                p.btnRtosIdntyRvwAdd.set_text("추가");
                p.btnRtosIdntyRvwAdd.set_cssclass("btn_WF_Small");
                p.btnRtosIdntyRvwAdd.set_visible("true");
                p.btnRtosIdntyRvwAdd.set_fittocontents("width");
                p.btnRtosIdntyRvwAdd.move("393","0","47","34",null,null);

                p.btnRtosIdntyRvwDel.set_taborder("18");
                p.btnRtosIdntyRvwDel.set_text("삭제");
                p.btnRtosIdntyRvwDel.set_cssclass("btn_WF_Small");
                p.btnRtosIdntyRvwDel.set_visible("true");
                p.btnRtosIdntyRvwDel.set_fittocontents("width");
                p.btnRtosIdntyRvwDel.move("450","0","45","34",null,null);

                p.btnRtosIdntyRvwStrg.set_taborder("19");
                p.btnRtosIdntyRvwStrg.set_text("저장");
                p.btnRtosIdntyRvwStrg.set_cssclass("btn_WF_Small");
                p.btnRtosIdntyRvwStrg.set_visible("true");
                p.btnRtosIdntyRvwStrg.set_fittocontents("width");
                p.btnRtosIdntyRvwStrg.move("505","0","45","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divCoprIdnty.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCoprIdnty.form
            obj = new Layout("Layout0","",0,0,this.divCoprIdnty.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCoprIdnty.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCoprIdnty.form
            obj = new Layout("Layout0","",0,0,this.divCoprIdnty.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divCoprIdnty.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divRtosProcIdnty.form
            obj = new Layout("default","",0,0,this.divRtosProcIdnty.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_00_01.set_taborder("0");
                p.staLabel03_00_00_01.set_text("원상회복 절차 등 확인");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("95","113","96.88%","43",null,null);

                p.btnRtosProcIdnty.set_taborder("1");
                p.btnRtosProcIdnty.set_text("원상회복안내 체크리스트");
                p.btnRtosProcIdnty.set_fittocontents("width");
                p.btnRtosProcIdnty.move("0","50","159","34",null,null);

                p.panDocOtpt.set_taborder("3");
                p.panDocOtpt.set_horizontalgap("20");
                p.panDocOtpt.set_flexcrossaxiswrapalign("start");
                p.panDocOtpt.set_flexwrap("wrap");
                p.panDocOtpt.set_fittocontents("height");
                p.panDocOtpt.set_verticalgap("0");
                p.panDocOtpt.set_spacing("0px 20px 10px 20px");
                p.panDocOtpt.set_cssclass("pal_WF_DtlBg");
                p.panDocOtpt.move("190","2053","100.00%","414",null,null);

                p.edtProcIdntyCsaf.set_taborder("7");
                p.edtProcIdntyCsaf.set_readonly("true");
                p.edtProcIdntyCsaf.move("130","156","100%","40",null,null);

                p.Panel02_00_00_00_00_01_00.set_taborder("2");
                p.Panel02_00_00_00_00_01_00.set_type("vertical");
                p.Panel02_00_00_00_00_01_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_01_00.set_verticalgap("8");
                p.Panel02_00_00_00_00_01_00.move("20","0","100%","403",null,null);

                p.staLabel03_00_00_01_00.set_taborder("4");
                p.staLabel03_00_00_01_00.set_text("절차 확인 현황");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00.move("95","113","96.88%","43",null,null);

                p.Panel02_00_00_00_00_01_00_00.set_taborder("5");
                p.Panel02_00_00_00_00_01_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_01_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_01_00_00.set_verticalgap("8");
                p.Panel02_00_00_00_00_01_00_00.move("95","113","100%","82.21",null,null);

                p.panDocOtpt00.set_taborder("6");
                p.panDocOtpt00.set_horizontalgap("20");
                p.panDocOtpt00.set_flexcrossaxiswrapalign("start");
                p.panDocOtpt00.set_flexwrap("wrap");
                p.panDocOtpt00.set_fittocontents("height");
                p.panDocOtpt00.set_verticalgap("0");
                p.panDocOtpt00.set_spacing("0px 20px 10px 20px");
                p.panDocOtpt00.set_cssclass("pal_WF_DtlBg");
                p.panDocOtpt00.move("190","2053","100.00%","93.21",null,null);

                p.rdoIdntyRsltCd.set_taborder("11");
                p.rdoIdntyRsltCd.set_innerdataset(divRtosProcIdnty_form_rdoIdntyRsltCd_innerdataset);
                p.rdoIdntyRsltCd.set_codecolumn("codecolumn");
                p.rdoIdntyRsltCd.set_datacolumn("datacolumn");
                p.rdoIdntyRsltCd.set_columncount("-1");
                p.rdoIdntyRsltCd.set_rowcount("-1");
                p.rdoIdntyRsltCd.move("126","243","100%","40",null,null);

                p.staLabel03_00_00_01_00_00.set_taborder("8");
                p.staLabel03_00_00_01_00_00.set_text("확인결과");
                p.staLabel03_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00.move("95","113","96.88%","43",null,null);

                p.Panel02_00_00_00_00_01_00_00_00.set_taborder("9");
                p.Panel02_00_00_00_00_01_00_00_00.set_type("vertical");
                p.Panel02_00_00_00_00_01_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00_00_01_00_00_00.set_verticalgap("8");
                p.Panel02_00_00_00_00_01_00_00_00.move("95","113","100%","82.21",null,null);

                p.panDocOtpt00_00.set_taborder("10");
                p.panDocOtpt00_00.set_horizontalgap("20");
                p.panDocOtpt00_00.set_flexcrossaxiswrapalign("start");
                p.panDocOtpt00_00.set_flexwrap("wrap");
                p.panDocOtpt00_00.set_fittocontents("height");
                p.panDocOtpt00_00.set_verticalgap("0");
                p.panDocOtpt00_00.set_spacing("0px 20px 10px 20px");
                p.panDocOtpt00_00.set_cssclass("pal_WF_DtlBg");
                p.panDocOtpt00_00.move("190","2053","100.00%","93.21",null,null);

                p.staLabel03_00_00_01_00_01.set_taborder("12");
                p.staLabel03_00_00_01_00_01.set_text("검토의견");
                p.staLabel03_00_00_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_01.move("95","113","96.88%","43",null,null);

                p.Panel02_00_00_00_00_01_00_00_01.set_taborder("13");
                p.Panel02_00_00_00_00_01_00_00_01.set_type("vertical");
                p.Panel02_00_00_00_00_01_00_00_01.set_fittocontents("height");
                p.Panel02_00_00_00_00_01_00_00_01.set_verticalgap("8");
                p.Panel02_00_00_00_00_01_00_00_01.move("95","113","100%","82.21",null,null);

                p.panDocOtpt00_01.set_taborder("14");
                p.panDocOtpt00_01.set_horizontalgap("20");
                p.panDocOtpt00_01.set_flexcrossaxiswrapalign("start");
                p.panDocOtpt00_01.set_flexwrap("wrap");
                p.panDocOtpt00_01.set_fittocontents("height");
                p.panDocOtpt00_01.set_verticalgap("0");
                p.panDocOtpt00_01.set_spacing("0px 20px 10px 20px");
                p.panDocOtpt00_01.set_cssclass("pal_WF_DtlBg");
                p.panDocOtpt00_01.move("190","2053","100.00%","93.21",null,null);

                p.txtRvwOpnnCn.set_taborder("15");
                p.txtRvwOpnnCn.move("1310","6290","100%","43",null,null);

                p.grdRtosProcIdnty.set_taborder("16");
                p.grdRtosProcIdnty.set_binddataset("dsRtosGdCheckList");
                p.grdRtosProcIdnty.set_autofittype("col");
                p.grdRtosProcIdnty.set_autosizingtype("none");
                p.grdRtosProcIdnty.set_extendsizetype("none");
                p.grdRtosProcIdnty.move("0","93","100.00%","310",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divRtosProcIdnty.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRtosProcIdnty.form
            obj = new Layout("Layout0","",0,0,this.divRtosProcIdnty.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRtosProcIdnty.set_autofittype("none");
            	}
            );
            obj.set_type("vertical");
            this.divRtosProcIdnty.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divEtc.form
            obj = new Layout("default","",0,0,this.divEtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_01_01_00_00_00_00_00.set_taborder("0");
                p.staLabel03_00_01_01_00_00_00_00_00.set_text("기타");
                p.staLabel03_00_01_01_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_01_01_00_00_00_00_00.set_flexgrow("0");
                p.staLabel03_00_01_01_00_00_00_00_00.set_fittocontents("width");
                p.staLabel03_00_01_01_00_00_00_00_00.move("0","0","300","46",null,null);

                p.Panel01_01_00_00_00_00_00.set_taborder("1");
                p.Panel01_01_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel01_01_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel01_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel01_01_00_00_00_00_00.move("398","435","200","34",null,null);

                p.Panel00_01_00_00_00_00_00.set_taborder("2");
                p.Panel00_01_00_00_00_00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_01_00_00_00_00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_01_00_00_00_00_00.set_flexwrap("wrap");
                p.Panel00_01_00_00_00_00_00.set_verticalgap("0");
                p.Panel00_01_00_00_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_01_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel00_01_00_00_00_00_00.move("98","428","100%","46",null,null);

                p.TextArea00.set_taborder("3");
                p.TextArea00.move("256","493","100%","100",null,null);

                p.Panel02_00_00_01_00_00_00_00_00.set_taborder("4");
                p.Panel02_00_00_01_00_00_00_00_00.set_type("vertical");
                p.Panel02_00_00_01_00_00_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_01_00_00_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_01_00_00_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_01_00_00_00_00_00.move("20","382","96.88%","150",null,null);

                p.panSafeMngrNghtPrvcUtztnWtcs.set_taborder("5");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_flexwrap("wrap");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_fittocontents("height");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_spacing("10px 20px 10px 20px");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_cssclass("pal_WF_DtlBg");
                p.panSafeMngrNghtPrvcUtztnWtcs.set_verticalgap("4");
                p.panSafeMngrNghtPrvcUtztnWtcs.move("0","372","100.00%","171",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divEtc.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divEtc.form
            obj = new Layout("Layout0","",0,0,this.divEtc.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divEtc.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("처리내역(퇴거)");

                p.panForm.set_taborder("0");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","15000",null,null);

                p.RaonkUploadRvw.set_taborder("1");
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

                p.staSubTitle00_00_00_00_00_00_00_00.set_taborder("2");
                p.staSubTitle00_00_00_00_00_00_00_00.set_text("원상회복확인요청");
                p.staSubTitle00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00.move("-26","20","100%","50",null,null);

                p.btnRtosIdntyDmnd.set_taborder("3");
                p.btnRtosIdntyDmnd.set_cssclass("btn_WF_ACMinus");
                p.btnRtosIdntyDmnd.set_text("");
                p.btnRtosIdntyDmnd.move("1210","23","34","30",null,null);

                p.Panel01_00_00_00_00_00_00_00.set_taborder("4");
                p.Panel01_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_00_00_00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00_00_00.move("1110","20","139","50",null,null);

                p.panRtosIdntyDmnd.set_taborder("5");
                p.panRtosIdntyDmnd.set_visible("true");
                p.panRtosIdntyDmnd.set_fittocontents("none");
                p.panRtosIdntyDmnd.set_flexcrossaxisalign("end");
                p.panRtosIdntyDmnd.set_minheight("70");
                p.panRtosIdntyDmnd.set_maxheight("");
                p.panRtosIdntyDmnd.move("10","6430","100.00%","70",null,null);

                p.divRtosIdntyDmnd.set_taborder("6");
                p.divRtosIdntyDmnd.set_text("div00");
                p.divRtosIdntyDmnd.set_fittocontents("height");
                p.divRtosIdntyDmnd.move("10","6500","100.00%","2050",null,null);

                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00.set_taborder("7");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00.set_text("사전미팅내역");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00.move("-26","20","100%","50",null,null);

                p.btnBfhdMetgDsctn.set_taborder("8");
                p.btnBfhdMetgDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnBfhdMetgDsctn.set_text("");
                p.btnBfhdMetgDsctn.move("1210","23","34","30",null,null);

                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_taborder("9");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00_00_00_00_00_00.move("1110","20","139","50",null,null);

                p.panBfhdMetgDsctn.set_taborder("10");
                p.panBfhdMetgDsctn.set_visible("true");
                p.panBfhdMetgDsctn.set_fittocontents("none");
                p.panBfhdMetgDsctn.set_flexcrossaxisalign("end");
                p.panBfhdMetgDsctn.set_minheight("70");
                p.panBfhdMetgDsctn.set_maxheight("");
                p.panBfhdMetgDsctn.move("10","9640","100.00%","70",null,null);

                p.divBfhdMetgDsctn.set_taborder("11");
                p.divBfhdMetgDsctn.set_text("div00");
                p.divBfhdMetgDsctn.set_fittocontents("height");
                p.divBfhdMetgDsctn.move("0","2190","100.00%","338",null,null);

                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("12");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00.set_text("처리내역");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00.move("-26","20","100%","50",null,null);

                p.btnPrcsDsctn.set_taborder("13");
                p.btnPrcsDsctn.set_cssclass("btn_WF_ACMinus");
                p.btnPrcsDsctn.set_text("");
                p.btnPrcsDsctn.move("1210","23","34","30",null,null);

                p.panPrcsDsctn00.set_taborder("14");
                p.panPrcsDsctn00.set_cssclass("pal_WF_TitBtnBg");
                p.panPrcsDsctn00.set_spacing("0px 10px 0px 10px");
                p.panPrcsDsctn00.set_horizontalgap("10");
                p.panPrcsDsctn00.set_flexcrossaxisalign("center");
                p.panPrcsDsctn00.set_flexmainaxisalign("end");
                p.panPrcsDsctn00.move("1110","20","139","50",null,null);

                p.panPrcsDsctn.set_taborder("15");
                p.panPrcsDsctn.set_visible("true");
                p.panPrcsDsctn.set_fittocontents("none");
                p.panPrcsDsctn.set_flexcrossaxisalign("end");
                p.panPrcsDsctn.set_minheight("70");
                p.panPrcsDsctn.set_maxheight("");
                p.panPrcsDsctn.move("10","11780","100.00%","70",null,null);

                p.divPrcsDsctn.set_taborder("16");
                p.divPrcsDsctn.set_text("div00");
                p.divPrcsDsctn.set_fittocontents("height");
                p.divPrcsDsctn.move("10","11850","100.00%","1856.2",null,null);

                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("17");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_text("협조확인(원상회복)");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00.move("-26","20","100%","50",null,null);

                p.btnCoprIdnty.set_taborder("18");
                p.btnCoprIdnty.set_cssclass("btn_WF_ACMinus");
                p.btnCoprIdnty.set_text("");
                p.btnCoprIdnty.move("1210","23","34","30",null,null);

                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("19");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00.move("1110","20","139","50",null,null);

                p.panCoprIdnty.set_taborder("20");
                p.panCoprIdnty.set_visible("true");
                p.panCoprIdnty.set_fittocontents("none");
                p.panCoprIdnty.set_flexcrossaxisalign("end");
                p.panCoprIdnty.set_minheight("70");
                p.panCoprIdnty.set_maxheight("");
                p.panCoprIdnty.move("10","10980","100.00%","70",null,null);

                p.divCoprIdnty.set_taborder("21");
                p.divCoprIdnty.set_text("Div01");
                p.divCoprIdnty.set_formscrollbartype("none none");
                p.divCoprIdnty.set_formscrolltype("none");
                p.divCoprIdnty.set_fittocontents("height");
                p.divCoprIdnty.getSetter("updtlprocsetccn").set("FICA");
                p.divCoprIdnty.move("0","4052","100.00%","712",null,null);

                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("22");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_text("원상회복 절차확인");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.move("37","7150","100%","50",null,null);

                p.btnRtosProcIdnty.set_taborder("23");
                p.btnRtosProcIdnty.set_cssclass("btn_WF_ACMinus");
                p.btnRtosProcIdnty.set_text("");
                p.btnRtosProcIdnty.move("1272","7160","34","30",null,null);

                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_taborder("24");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.move("1191","7150","139","50",null,null);

                p.panRtosProcIdnty.set_taborder("25");
                p.panRtosProcIdnty.set_visible("true");
                p.panRtosProcIdnty.set_fittocontents("none");
                p.panRtosProcIdnty.set_flexcrossaxisalign("end");
                p.panRtosProcIdnty.set_minheight("70");
                p.panRtosProcIdnty.set_maxheight("");
                p.panRtosProcIdnty.move("37","7130","100.00%","70",null,null);

                p.divRtosProcIdnty.set_taborder("26");
                p.divRtosProcIdnty.set_text("div02");
                p.divRtosProcIdnty.set_fittocontents("height");
                p.divRtosProcIdnty.move("0","6359","100.00%","701",null,null);

                p.staSubTitle00_00_00_00_00_00_00_00_00.set_taborder("27");
                p.staSubTitle00_00_00_00_00_00_00_00_00.set_text("기타");
                p.staSubTitle00_00_00_00_00_00_00_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00_00_00_00_00_00_00_00_00.move("11","7370","100%","50",null,null);

                p.btnEtc.set_taborder("28");
                p.btnEtc.set_cssclass("btn_WF_ACMinus");
                p.btnEtc.set_text("");
                p.btnEtc.move("1247","7380","34","30",null,null);

                p.Panel01_00_00_00_00_00_00_00_00.set_taborder("29");
                p.Panel01_00_00_00_00_00_00_00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00_00_00_00_00_00_00_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00_00_00_00_00_00_00_00.set_horizontalgap("10");
                p.Panel01_00_00_00_00_00_00_00_00.set_flexcrossaxisalign("center");
                p.Panel01_00_00_00_00_00_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00_00_00_00_00_00.move("1165","7370","139","50",null,null);

                p.panEtc.set_taborder("30");
                p.panEtc.set_visible("true");
                p.panEtc.set_fittocontents("none");
                p.panEtc.set_flexcrossaxisalign("end");
                p.panEtc.set_minheight("70");
                p.panEtc.set_maxheight("");
                p.panEtc.move("11","7350","100.00%","70",null,null);

                p.divEtc.set_taborder("31");
                p.divEtc.set_text("div00");
                p.divEtc.set_fittocontents("height");
                p.divEtc.move("0","7420","100.00%","171",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
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
            obj = new BindItem("item0","TextArea00","value","dsRtosAplcfm","cstrnOtlnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPrcsDsctn.form.panDocOtpt","visible","dsAtrb","vsDocOtpt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCoprIdnty.form.panBgncstAprvRvw","visible","dsAtrb","vsBgncstAprvRvw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCoprIdnty.form.panBgncstAprvRvwBtn","visible","dsAtrb","vsBgncstAprvRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCoprIdnty.form.panRtosIdntyRvw","visible","dsAtrb","vsRtosIdntyRvw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCoprIdnty.form.panRtosIdntyRvwBtn","visible","dsAtrb","vsRtosIdntyRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPrcsDsctn.form.txtCnvyMttr","value","dsCnvyMttr","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPrcsDsctn.form.cal00","value","dsRtosAplcfm","rtosLastIdntyYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPrcsDsctn.form.txtCnvyMttr00_00_00","value","dsRtosAplcfm","rtosMtgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divRtosProcIdnty.form.rdoIdntyRsltCd","value","dsRtosAplcfm","idntyRsltCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divRtosProcIdnty.form.txtRvwOpnnCn","value","dsRtosAplcfm","rvwOpnnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","panRtosIdntyDmnd","visible","dsAtrb","vsRtosInspDmnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divRtosIdntyDmnd","visible","dsAtrb","vsRtosInspDmnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","panBfhdMetgDsctn","visible","dsAtrb","vsBfhdMetgDsctnFile");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divBfhdMetgDsctn","visible","dsAtrb","vsBfhdMetgDsctnFile");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divBfhdMetgDsctn.form.pan01_00_00","visible","dsAtrb","vsBfhdMetgDsctnYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00","visible","dsAtrb","vsGrndsMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00","visible","dsAtrb","vsFlrplnPhoto");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_00","visible","dsAtrb","vsGrndsMngWtpl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_01","visible","dsAtrb","vsEtcDcmnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_02","visible","dsAtrb","vsEtcDcmnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_03","visible","dsAtrb","vsEtcDcmnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_04","visible","dsAtrb","vsOtstMtgNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_04_00","visible","dsAtrb","vsOtstMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs00_00_04_01","visible","dsAtrb","vsCstrnCmptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divPrcsDsctn.form.pan00","visible","dsAtrb","vsRtosLastIdntyDay");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divPrcsDsctn.form.panSafeMngrNghtPrvcUtztnWtcs","visible","dsAtrb","vsRtosIdntyRslt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divPrcsDsctn.form.pan04_01","visible","dsAtrb","vsRtosMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divPrcsDsctn.form.Panel02_00_00_00_00_01","visible","dsAtrb","vsDocOtpt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","panRtosProcIdnty","visible","dsAtrb","vsRtosProcIdnty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divRtosProcIdnty","visible","dsAtrb","vsRtosProcIdnty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divRtosProcIdnty.form.panDocOtpt00","visible","dsAtrb","vsRtosProcIdnty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divPrcsDsctn.form.panRtosInspDsctn","visible","dsAtrb","vsRtosInspDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divCoprIdnty","visible","dsAtrb","vsCoprPrcs");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divCoprIdnty.form.grdBgncstAprvRvw","readonly","dsAtrb","roBgncstAprvRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divCoprIdnty.form.grdRtosIdntyRvw","readonly","dsAtrb","roRtosIdntyRvwEdtr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divRtosProcIdnty.form.panDocOtpt00_00","visible","dsAtrb","vsIdntyRsltRvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divRtosProcIdnty.form.panDocOtpt00_01","visible","dsAtrb","vsIdntyRsltRvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","divRtosProcIdnty.form.txtRvwOpnnCn","readonly","dsAtrb","roIdntyRsltRvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","divRtosProcIdnty.form.rdoIdntyRsltCd","readonly","dsAtrb","roIdntyRsltRvwOpnn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","divPrcsDsctn.form.grdAtchCn","visible","dsAtrb","vsAtchCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","divPrcsDsctn.form.staAtchCn","visible","dsAtrb","vsAtchCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","divPrcsDsctn.form.txtCnvyMttr","readonly","dsAtrb","roCnvyMttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","divPrcsDsctn.form.cal00","readonly","dsAtrb","roRtosLastIdntyDay");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divPrcsDsctn.form.txtCnvyMttr00_00_00","readonly","dsAtrb","roRtosMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divPrcsDsctn.form.radio00_00","readonly","dsAtrb","roCstrnCmptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divPrcsDsctn.form.edt01","readonly","dsAtrb","roOtstMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divPrcsDsctn.form.radio00_00","value","dsRtosAplcfm","cstrnCmptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","divPrcsDsctn.form.edt01","value","dsRtosAplcfm","otstMtgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","divPrcsDsctn.form.radio00","readonly","dsAtrb","roOtstMtgNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divPrcsDsctn.form.radio00","value","dsRtosAplcfm","otstMtgNeedYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","divPrcsDsctn.form.edt00","readonly","dsAtrb","roGrndsMtgDsctn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divPrcsDsctn.form.edt00","value","dsRtosAplcfm","grndsMtgCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","panCoprIdnty","visible","dsAtrb","vsCoprPrcs");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divEtc.form.TextArea00","readonly","dsAtrb","roEtc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divPrcsDsctn.form.btnAprvAplcfmOtpt","visible","dsAtrb","vsDocOtpt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divPrcsDsctn.form.btnAprvAplcfmOtpt00","visible","dsAtrb","vsDocOtpt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divRtosProcIdnty.form.grdRtosProcIdnty","readonly","dsAtrb","roRtosProcIdnty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divRtosProcIdnty.form.grdRtosProcIdnty","visible","dsAtrb","vsRtosProcIdnty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","panEtc","visible","dsAtrb","vsEtc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","divEtc","visible","dsAtrb","vsEtc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divEtc.form.TextArea00","value","dsRtosAplcfm","etcCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST005S04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST005S04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST005S04.xfdl
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
        this.nowRvw = {};   // 현재검토대상정보
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
        	// 원상회복(퇴거) Dataset
            this.dsRtosAplcfm = this.lookup("dsRtosAplcfm");
        	this.dsRtosAplcfm.addEventHandler("onvaluechanged", this.dsRtosAplcfm_onvaluechanged, this);
        	// 검토의견함
        	this.dsRvwOpnn = this.lookup("dsRvwOpnn");
        	this.dsRvwOpnn.addEventHandler("onload", this.dsRvwOpnn_onload, this);
        	// 원상회복안내 체크리스트
        	this.dsTaskFlwCdInfo = this.lookup("dsTaskFlwCdInfo");
        	this.dsTaskFlwCdInfo.addEventHandler("onload", this.dsTaskFlwCdInfo_onload, this);
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
        };

        this.dsMst_onload = function(obj,e)
        {
        	// 조회(협조확인(원상회복)-착공승인검토,협조확인(원상회복)-원상회복확인)
            this.fnSrvcCall(this.divCoprIdnty.form.btnBgncstRvwInq.name);

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

        this.dsTaskFlwCdInfo_onload = function(obj,e)
        {
            if(this.divRtosProcIdnty.form.grdRtosProcIdnty.visible) {  // 원상회복안내 체크리스트
        	    var map = { TSCINFOITEM000:{ col:"cmptn", cnt:0 }, TSCINFOITEM001:{ col:"aftrPrgrs", cnt:0 }, TSCINFOITEM002:{ col:"rlvtMttrNone", cnt:0 } };
        		this.dsRtosGdCheckList.enableevent = false;
        		for(var i = 0; i < obj.rowcount; i++) {
        			var cdId = obj.getColumn(i, "cdId");
        			if(!this.gfnIsNull(cdId)) {
        				this.dsRtosGdCheckList.setColumn(i, cdId.endsWith("00") ? "cmptn" : (cdId.endsWith("01") ? "aftrPrgrs" : "rlvtMttrNone"), cdId);
        				map[cdId].cnt += 1;
        			}
        		}
        		this.dsRtosGdCheckList.enableevent = true;

        		// 절차 확인 현황
        		this.divRtosProcIdnty.form.edtProcIdntyCsaf.value = "원상회복절차확인 6항목 완료:" + map.TSCINFOITEM000.cnt + ", 추후진행:" + map.TSCINFOITEM001.cnt + ", 해당사항없음:" + map.TSCINFOITEM002.cnt;
        	}
        }

        this.dsMst_onvaluechanged = function(obj,e)
        {
        	// 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(this.divPrcsDsctn.form.grdAtchCn);
        };

        this.dsRtosAplcfm_onvaluechanged = function(obj,e)
        {

            // 원상회복절차확인내용
        	// 원상회복안내 체크리스트 그리드
         	this.divRtosProcIdnty.form.grdRtosProcIdnty.visible = this.getFocus().name == this.divRtosProcIdnty.form.grdRtosProcIdnty.name ? true : !this.cfnGetAtrb.call("roRtosProcIdnty");

        // 	var map = { TSCINFOITEM000:{ col:"cmptn", cnt:0 }, TSCINFOITEM001:{ col:"aftrPrgrs", cnt:0 }, TSCINFOITEM002:{ col:"rlvtMttrNone", cnt:0 } };
        // 	if(this.gfnIsNull(e.columnid)) {
        // 		var rtosProcIdntyCn = this.dsRtosAplcfm.getColumn(0, "rtosProcIdntyCn");
        // 		//var rtosProcIdntyCn = "0:TSCINFOITEM000,1:TSCINFOITEM000,2:TSCINFOITEM001,3:TSCINFOITEM002,4:TSCINFOITEM002,5:";
        // 		if(!this.gfnIsNull(rtosProcIdntyCn)) {
        // 			var ds = this.dsRtosGdCheckList;
        // 			rtosProcIdntyCn.split(",").forEach(function(v) {
        // 				var vv = v.split(":");
        // 				if(!nexacro.main.gfnIsNull(vv[1])) {
        // 					ds.setColumn(vv[0], map[vv[1]].col, vv[1]);
        // 					map[vv[1]].cnt += 1;
        // 				}
        // 			});
        // 		}
        // 	}
        //
        // 	// 절차 확인 현황
        // 	this.divRtosProcIdnty.form.edtProcIdntyCsaf.value = "원상회복절차확인 6항목 완료:" + map.TSCINFOITEM000.cnt + ", 추후진행:" + map.TSCINFOITEM001.cnt + ", 해당사항없음:" + map.TSCINFOITEM002.cnt;

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
        	this.cfnGridResizeHeight(obj.name == "dsBgncstAprvRvw" ? this.divCoprIdnty.form.grdBgncstAprvRvw : this.divCoprIdnty.form.grdRtosIdntyRvw);
        };

        this.dsRvw_onrowposchanged = function(obj,e)
        {
            console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        	// 행의 높이에 따라 그리드의 높이를 재설정
        	this.cfnGridResizeHeight(obj.name == "dsBgncstAprvRvw" ? this.divCoprIdnty.form.grdBgncstAprvRvw : this.divCoprIdnty.form.grdRtosIdntyRvw);
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
        	// 신청서작성,보완,접수 단계면
            // 탭페이지 버튼명
        	this.parent.parent.tabStep.tpgPrcsDsctn.text = !this.cfnGetAtrb.call("roAplcfmWrtRcpt") ? "전달사항" : "처리내역";

        	// 버튼정보 조회
        	if(this.cfnGetAtrb.call("vsBgncstAprvRvwEdtr,vsRtosIdntyRvwEdtr")) {  // 착공승인검토,원상회복확인검토
        		this.cfnBtnCrt({ inqCnd : { jobPrcsPrgrsSeCd: "TAS00616" } });
        	}

        	// 협조확인 - 착공승인검토 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsBgncstAprvRvwEdtr")) {
        	    this.divCoprIdnty.form.grdBgncstAprvRvw.setRealColSize("body", 0, this.divCoprIdnty.form.grdBgncstAprvRvw.upsize);
        	} else {
        		this.divCoprIdnty.form.grdBgncstAprvRvw.upsize = this.divCoprIdnty.form.grdBgncstAprvRvw.upsize
        												       ? this.divCoprIdnty.form.grdBgncstAprvRvw.upsize
        													   : this.divCoprIdnty.form.grdBgncstAprvRvw.getRealColSize(0, "size")
        													   ;
        		this.divCoprIdnty.form.grdBgncstAprvRvw.setRealColSize("body", 0, 0);
        	}

        	// 협조확인 - 원상회복확인 그리드 선택 항목 숨기기
        	if(this.cfnGetAtrb.call("vsRtosIdntyRvwEdtr")) {
        		this.divCoprIdnty.form.grdRtosIdntyRvw.setRealColSize("body", 0, this.divCoprIdnty.form.grdRtosIdntyRvw.upsize);
        	} else {
        		this.divCoprIdnty.form.grdRtosIdntyRvw.upsize = this.divCoprIdnty.form.grdRtosIdntyRvw.upsize
        												      ? this.divCoprIdnty.form.grdRtosIdntyRvw.upsize
        													  : this.divCoprIdnty.form.grdRtosIdntyRvw.getRealColSize(0, "size")
        													  ;
        		this.divCoprIdnty.form.grdRtosIdntyRvw.setRealColSize("body", 0, 0);
        	}

        	// 그리드 Expr 실행
        	// ----------------
        	// 원상회복확인요청
        	Array.from(this.divRtosIdntyDmnd.form.components).forEach(function(v) {
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

        	// 원상회복확인내역
        	Array.from(this.divPrcsDsctn.form.components).forEach(function(v) {
        		if(v instanceof Grid) {
                   v.redrawExprCell();
        		}
        	});

        	// 원상회복확인결과
        	this.divPrcsDsctn.form.grdRtosIdntyRslt.redrawExprCell();

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
        		case this.divCoprIdnty.form.btnBgncstRvwInq.name :     // 조회(협조확인(원상회복)-착공승인검토)
        		case this.divCoprIdnty.form.btnRtosIdntyRvwInq.name :  // 조회(협조확인(원상회복)-원상회복확인)
        			strSvcUrl = "rtosEvct/selectRvw.do";
        			inData    = "dsSearch=dsSearch";                     // 조회조건
        			outData   = "dsBgncstAprvRvw=dsBgncstAprvRvw" + " "  // 협조확인(원상회복)-착공승인검토
        			          + "dsRtosIdntyRvw=dsRtosIdntyRvw"   + " "  // 협조확인(원상회복)-원상회복확인
        			          + "dsRvwAtfl=dsRvwAtfl"
        					  ;
        			break;

        		case this.divCoprIdnty.form.btnBgncstRvwStrg.name :    // 저장(협조확인(원상회복)-착공승인검토)
        		case this.divCoprIdnty.form.btnRtosIdntyRvwStrg.name :  // 저장(협조확인(원상회복)-원상회복확인)
        			strSvcUrl = "rtosEvct/saveRvw.do";
        			inData    = [];
        			outData   = "";
        			if(this.gfnDsIsUpdated(this.dsBgncstAprvRvw)) { inData.push("dsJobDrctn=dsBgncstAprvRvw:U" ); }  // 협조확인(원상회복)-착공승인검토
        			if(this.gfnDsIsUpdated(this.dsRtosIdntyRvw )) { inData.push("dsJobDrctn=dsRtosIdntyRvw:U"  ); }  // 협조확인(원상회복)-원상회복확인
        			if(this.gfnDsIsUpdated(this.dsRvwAtfl      )) { inData.push("dsRvwAtfl=dsRvwAtfl:U"        ); }  // 검토 첨부파일
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
        		case this.divCoprIdnty.form.btnBgncstRvwInq.name :     // 조회(협조확인(원상회복)-착공승인검토)
        		case this.divCoprIdnty.form.btnRtosIdntyRvwInq.name :  // 조회(협조확인(원상회복)-원상회복확인)

        			break;

        		case this.divCoprIdnty.form.btnBgncstRvwStrg.name :     // 저장(협조확인(원상회복)-착공승인검토)
        		case this.divCoprIdnty.form.btnRtosIdntyRvwStrg.name :  // 저장(협조확인(원상회복)-원상회복확인)
        		    // 정상적으로 처리되었습니다.
        			this.gfnAlertMsg("save", "CST_003");
        			// 조회
        			this.dsSearch.setColumn(0, "dtlProcsEtcCn", srvcId == this.divCoprIdnty.form.btnBgncstRvwStrg.name ? "RAA" : "RCA");
        			this.divCoprIdnty.form.btnBgncstRvwInq.click();

        			break;

        		case this.RaonkUploadRvw.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsRvwAtfl.setColumn(this.dsRvwAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}
                    //console.log(this.dsRvwAtfl.saveXML()));

        			// 저장
        			if(this.getFocus().name.startsWith("grdBgncstAprvRvw")) {
        			    this.divCoprIdnty.form.btnBgncstRvwStrg.click();     // 저장(협조확인(원상회복)-착공승인검토)
        		    } else {
        				this.divCoprIdnty.form.btnRtosIdntyRvwStrg.click();  // 저장(협조확인(원상회복)-원상회복확인)
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

        		case this.divCoprIdnty.form.grdBgncstAprvRvw.name :  // 협조확인(원상회복)-착공승인검토
        		case this.divCoprIdnty.form.grdRtosIdntyRvw.name :   // 협조확인(원상회복)-원상회복확인
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
        						    this.divCoprIdnty.form.btnBgncstRvwStrg.click();  // 저장(협조확인(원상회복)-착공승인검토)
        					    } else {
        							this.divCoprIdnty.form.btnCmcnRvwStrg.click();    // 저장(협조확인(원상회복)-원상회복확인)
        						}
        					}
        				}
        			} else {
        			    // 취소시
        				if(this.gfnDsIsUpdated(this.dsRvwAtfl)) {  // 파일추가를 시도했을 경우
        					// 조회
        					if(this.getFocus().name.startsWith("grdBgncst")) {
        					    this.dsSearch.setColumn(0, "dtlProcsEtcCn", "RAA");
        					    this.divCoprIdnty.form.btnBgncstRvwInq.click();  // 조회(협조확인(원상회복)-착공승인검토)
        				    } else {
        						this.dsSearch.setColumn(0, "dtlProcsEtcCn", "RCA");
        						this.divCoprIdnty.form.btnCmcnRvwInq.click();    // 조회(협조확인(원상회복)-원상회복확인)
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
        	// 확인결과
        	if(!this.divRtosProcIdnty.form.rdoIdntyRsltCd.readonly) {  // 확인결과가 읽기 전용이 아니면...
        		// 확인결과
        		if(this.gfnIsNull(this.dsRtosAplcfm.getColumn(0, "idntyRsltCd"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["확인결과"], function() {
        				this.cfnGetTabIndex(this.parent.parent.tabStep, "tpgPrcsDsctn");  // 처리내역
        			    this.divRtosProcIdnty.form.rdoIdntyRsltCd.setFocus();
        			});

        			return false;
        		}

        		// 검토의견
        		if(this.gfnIsNull(this.dsRtosAplcfm.getColumn(0, "rvwOpnnCn"))) {
        			// {0}는(은) 필수 항목입니다!
        			this.gfnAlertMsg("CST_004", "CST_004", ["검토의견"], function() {
        				this.cfnGetTabIndex(this.parent.parent.tabStep, "tpgPrcsDsctn");  // 처리내역
        			    this.divRtosProcIdnty.form.txtRvwOpnnCn.setFocus();
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
        	ds.setColumn(nRow, "dtlProcsEtcCn", ds.name.startsWith("dsBgncst") ? "RAA" : "RCA");  // 상세공정기타내용
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
            var map = { btnBgncst   :{ ds:this.dsBgncstAprvRvw, grd:this.divCoprIdnty.form.grdBgncstAprvRvw, etc:"RAA"  }
        			  , btnRtosIdnty:{ ds:this.dsRtosIdntyRvw , grd:this.divCoprIdnty.form.grdRtosIdntyRvw , etc:"RCA"  }
        			  };
            var key = Object.keys(map).filter(function(v) { return obj.name.startsWith(v); })[0];
        	var ds  = map[key].ds;
        	var grd = map[key].grd;

        	if(obj.name.endsWith("Inq")) {  // 조회
        	    this.dsSearch.setColumn(0, "dtlProcsEtcCn", map[key].etc);
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

        this.grdRvw_oncellposchanged = function(obj,e)
        {
            // 작업그룹코드만 표출
            if(e.col == this.divCoprIdnty.form.grdBgncstAprvRvw.getBindCellIndex("body", "tmprCd")) {
        		this.dsJobGroupCd.filter("jobGroupId.startsWith('WOG')");
        	}
        };

        this.grdRvw_onexpanddown = function(obj,e)
        {
            // 담당자 찾기
        	if(e.col == this.divCoprIdnty.form.grdBgncstAprvRvw.getBindCellIndex("body", "prcrNm")) {
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
        			if(!this.dsMst.isEdtrPsblty || (dtlProcsEtcCn == "RAA" && !this.cfnGetAtrb.call("vsBgncstAprvRvwDeptEdtr")) || (dtlProcsEtcCn == "RCA" && !this.cfnGetAtrb.call("vsRtosIdntyRvwDeptEdtr"))) {
        				ds.setColumn(ds.rowposition, "isEdtrPsblty", false);
        			}

                    ds.applyChange();

        		    var oArg    = { pvObjDsJobDrctn  : ds
        			              , pvObjDsRvwAtfl   : this.dsRvwAtfl
        			              , pvObjRaonkUpload : this.RaonkUploadRvw
        			              };
        			var oOption = { title:"검토의견", titlebar:true, width:800, height:800 };

        			var id = obj.name.startsWith("grdBgncst") ? this.divCoprIdnty.form.grdBgncstAprvRvw.name : this.divCoprIdnty.form.grdRtosIdntyRvw.name;
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

        this.divRtosProcIdnty_btnRtosProcIdnty_onclick = function(obj,e)
        {
            // 원상회복안내 체크리스트 그리드
        	this.divRtosProcIdnty.form.grdRtosProcIdnty.visible = !this.divRtosProcIdnty.form.grdRtosProcIdnty.visible;
        };

        this.dsRtosGdCheckList_oncolumnchanged = function(obj,e)
        {
        	this.dsRtosGdCheckList.setColumn(this.dsRtosGdCheckList.rowposition, "cmptn"       , e.columnid == "cmptn"        ? e.newvalue : "");  // 완료
        	this.dsRtosGdCheckList.setColumn(this.dsRtosGdCheckList.rowposition, "aftrPrgrs"   , e.columnid == "aftrPrgrs"    ? e.newvalue : "");  // 추후진행
        	this.dsRtosGdCheckList.setColumn(this.dsRtosGdCheckList.rowposition, "rlvtMttrNone", e.columnid == "rlvtMttrNone" ? e.newvalue : "");  // 해당사항없음

            this.dsTaskFlwCdInfo.setColumn(e.row, "cdId", e.newvalue);  // 저장용 Dataset
        	var map = { TSCINFOITEM000:{ col:"cmptn", cnt:0 }, TSCINFOITEM001:{ col:"aftrPrgrs", cnt:0 }, TSCINFOITEM002:{ col:"rlvtMttrNone", cnt:0 } };
        	for(var i = 0; i < this.dsRtosGdCheckList.rowcount; i++) {
        		var rtosProcIdnty = this.dsRtosGdCheckList.getColumn(i, "cmptn") || this.dsRtosGdCheckList.getColumn(i, "aftrPrgrs") || this.dsRtosGdCheckList.getColumn(i, "rlvtMttrNone");
        		if(rtosProcIdnty != "0" && !this.gfnIsNull(rtosProcIdnty)) { map[rtosProcIdnty].cnt += 1; }
        	}

        	// 절차 확인 현황
        	this.divRtosProcIdnty.form.edtProcIdntyCsaf.value = "원상회복절차확인 6항목 완료:" + map.TSCINFOITEM000.cnt + ", 추후진행:" + map.TSCINFOITEM001.cnt + ", 해당사항없음:" + map.TSCINFOITEM002.cnt;
        };

        this.Dataset_cancolumnchange = function(obj,e)
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
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUploadRvw_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUploadRvw_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUploadRvw_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUploadRvw_RAONKUPLOAD_OnError,this);
            this.RaonkUploadRvw.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUploadRvw_RAONKUPLOAD_BeforeAddFile,this);
            this.btnRtosIdntyDmnd.addEventHandler("onclick",this.Button_onclick,this);
            this.btnRtosIdntyDmnd.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divRtosIdntyDmnd.form.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_00_00_00_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_01_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_02_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divRtosIdntyDmnd.form.Grid00_00_00_00_00_00_01_00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btnBfhdMetgDsctn.addEventHandler("onclick",this.Button_onclick,this);
            this.btnBfhdMetgDsctn.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divBfhdMetgDsctn.form.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBfhdMetgDsctn.form.Grid00_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divBfhdMetgDsctn.form.Grid00_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btnPrcsDsctn.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrcsDsctn.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divPrcsDsctn.form.grdAtchCn.addEventHandler("oncellclick",this.divPrcsDsctn_grdAtchCn_oncellclick,this);
            this.divPrcsDsctn.form.grdRtosIdntyRslt.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.Grid00_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.Grid00_01_00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.Grid00_01_01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.Grid00_01_02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divPrcsDsctn.form.Grid00_01_03.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btnCoprIdnty.addEventHandler("onclick",this.Button_onclick,this);
            this.btnCoprIdnty.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divCoprIdnty.form.grdBgncstAprvRvw.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.divCoprIdnty.form.grdBgncstAprvRvw.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.divCoprIdnty.form.grdBgncstAprvRvw.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.divCoprIdnty.form.grdRtosIdntyRvw.addEventHandler("oncellposchanged",this.grdRvw_oncellposchanged,this);
            this.divCoprIdnty.form.grdRtosIdntyRvw.addEventHandler("onexpanddown",this.grdRvw_onexpanddown,this);
            this.divCoprIdnty.form.grdRtosIdntyRvw.addEventHandler("oncellclick",this.grdRvw_oncellclick,this);
            this.divCoprIdnty.form.btnBgncstRvwInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnBgncstRvwEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnBgncstRvwAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnBgncstRvwDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnBgncstRvwStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnRtosIdntyRvwInq.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnRtosIdntyRvwEblcAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnRtosIdntyRvwAdd.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnRtosIdntyRvwDel.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.divCoprIdnty.form.btnRtosIdntyRvwStrg.addEventHandler("onclick",this.grdRvw_Button_onclick,this);
            this.btnRtosProcIdnty.addEventHandler("onclick",this.Button_onclick,this);
            this.btnRtosProcIdnty.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divRtosProcIdnty.form.btnRtosProcIdnty.addEventHandler("onclick",this.divRtosProcIdnty_btnRtosProcIdnty_onclick,this);
            this.btnEtc.addEventHandler("onclick",this.Button_onclick,this);
            this.btnEtc.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.dsDocCd.addEventHandler("cancolumnchange",this.dsDocCd_cancolumnchange,this);
            this.dsRvwAtfl.addEventHandler("onload",this.dsRvwAtfl_onload,this);
            this.dsBgncstAprvRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsBgncstAprvRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsBgncstAprvRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
            this.dsBgncstAprvRvw.addEventHandler("cancolumnchange",this.Dataset_cancolumnchange,this);
            this.dsRtosIdntyRvw.addEventHandler("onload",this.dsRvw_onload,this);
            this.dsRtosIdntyRvw.addEventHandler("onrowposchanged",this.dsRvw_onrowposchanged,this);
            this.dsRtosIdntyRvw.addEventHandler("onvaluechanged",this.dsRvw_onvaluechanged,this);
            this.dsRtosIdntyRvw.addEventHandler("cancolumnchange",this.Dataset_cancolumnchange,this);
            this.dsRtosGdCheckList.addEventHandler("oncolumnchanged",this.dsRtosGdCheckList_oncolumnchanged,this);
        };
        this.loadIncludeScript("CST005S04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
