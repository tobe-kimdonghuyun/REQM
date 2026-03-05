(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF079P08");
            this.set_titletext("부가시설물관리대장엑셀업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUploadList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"excelRow\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"rstMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">FACREQTYPE001</Col><Col id=\"name\">신규신청</Col></Row><Row><Col id=\"code\">FACREQTYPE002</Col><Col id=\"name\">연장신청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">FACCOMTYPE001</Col><Col id=\"name\">공항공사</Col></Row><Row><Col id=\"code\">FACCOMTYPE002</Col><Col id=\"name\">자회사</Col></Row><Row><Col id=\"code\">FACCOMTYPE003</Col><Col id=\"name\">항공사</Col></Row><Row><Col id=\"code\">FACCOMTYPE004</Col><Col id=\"name\">호텔</Col></Row><Row><Col id=\"code\">FACCOMTYPE005</Col><Col id=\"name\">기타고객</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">TSPLOCTSC010</Col><Col id=\"name\">제1여객터미널</Col></Row><Row><Col id=\"code\">TSPLOCTSC070</Col><Col id=\"name\">제2여객터미널</Col></Row><Row><Col id=\"code\">TSPLOCTSC020</Col><Col id=\"name\">탑승동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode04", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">TSPWPLARA001</Col><Col id=\"name\">A/S(보호구역)</Col></Row><Row><Col id=\"code\">TSPWPLARA002</Col><Col id=\"name\">L/S(일반지역)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode05", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">FACSVCTYPE001</Col><Col id=\"name\">배너</Col></Row><Row><Col id=\"code\">FACSVCTYPE002</Col><Col id=\"name\">임시안내문</Col></Row><Row><Col id=\"code\">FACSVCTYPE003</Col><Col id=\"name\">웰컴보드</Col></Row><Row><Col id=\"code\">FACSVCTYPE004</Col><Col id=\"name\">중량저울</Col></Row><Row><Col id=\"code\">FACSVCTYPE005</Col><Col id=\"name\">AOC데스크</Col></Row><Row><Col id=\"code\">FACSVCTYPE008</Col><Col id=\"name\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"excelRow\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"zoneSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"instlPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"usgCn\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"wdthVl\" type=\"STRING\" size=\"256\"/><Column id=\"vrtcVl\" type=\"STRING\" size=\"256\"/><Column id=\"hgtVl\" type=\"STRING\" size=\"256\"/><Column id=\"rstMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staState","20.00","10",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("divUpload","39","0","100%","296",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","2",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("4");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Panel("panFile","0","2","100%","294",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem04\" componentid=\"Static03\"/><PanelItem id=\"PanelItem03\" componentid=\"Static04\"/></Contents>");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Static("Static04","57","220","100%","91",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("8");
            obj.set_text("파일편집\r\n  * 헤더는 편집 불가(1~3행은 수정 및 삭제 불가) 이고 업로드 데이터는 B4 항목부터 입력\r\n  * 업로드양식의 제한 byte : 한글은 2byte, 한글이외에는 1byte 로 처리됨\r\n  * 파일의 제일 앞 시트만 업로드 되고 시트명은 \"Sheet1\" 로 입력");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Static("Static03","20","163","100%","34",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("7");
            obj.set_text("파일양식 : 우측의 “업로드 엑셀 양식 다운로드”의 엑셀파일을 이용하시기 바랍니다");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("0");
            obj.set_text("파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnSampleDown\"/><PanelItem id=\"PanelItem00\" componentid=\"btnExcelUpload\"/></Contents>");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload","124","58","116","40",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("2");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Button("btnSampleDown","813","76","166","40",null,null,null,null,null,null,this.divForm.form.divUpload.form);
            obj.set_taborder("6");
            obj.set_text("업로드 엑셀 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.divUpload.addChild(obj.name, obj);

            obj = new Panel("Panel00","109.00","296","100%","431",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","20.00","10","100%","410",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"btnSave\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdUploadList","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUploadList");
            obj.getSetter("uFunction").set("!sort");
            obj.set_nodatatext("데이타가 없습니다");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"67\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"엑셀Row번호\"/><Cell col=\"2\" text=\"업로드처리결과\"/><Cell col=\"3\" text=\"신청번호\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"신청종류코드\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"고객유형코드\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"건물구분코드\" cssclass=\"CellE\"/><Cell col=\"7\" text=\"구역구분코드\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"서비스신청구분코드\" cssclass=\"CellE\"/><Cell col=\"9\" text=\"설치위치명\" cssclass=\"CellE\"/><Cell col=\"10\" text=\"용도명\" cssclass=\"CellE\"/><Cell col=\"11\" text=\"수량값\" cssclass=\"CellE\"/><Cell col=\"12\" text=\"가로값\" cssclass=\"CellE\"/><Cell col=\"13\" text=\"세로값\" cssclass=\"CellE\"/><Cell col=\"14\" text=\"높이값\" cssclass=\"CellE\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:excelRow\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:rstMsg\" tooltiptext=\"bind:rstMsg\"/><Cell col=\"3\" text=\"bind:aplyNo\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:aplyKndCd\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:custTypeCd\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:bldgSeCd\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:zoneSeCd\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:srvcAplySeCd\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:instlPstnCn\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:usgCn\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:qty\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:wdthVl\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:vrtcVl\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:hgtVl\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","99","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("업로드결과");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnSave","774.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdExcelSample","9","818","996","226",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"157\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"12\" text=\"부가시설물관리대장등록 엑셀업로드\" font=\"bold 32px/normal &quot;pretendard&quot;\" background=\"#aaaaaa\" border=\"1px solid #dadada 1px solid #dadada 1px solid #dadada 1px solid #dadada\"/><Cell row=\"1\" text=\"신청번호\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"신청종류코드\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"2\" text=\"고객유형코드\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"3\" text=\"건물구분코드\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"4\" text=\"구역구분코드\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"5\" text=\"서비스신청구분코드\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"6\" text=\"설치위치명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"7\" text=\"용도명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"8\" text=\"수량값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"9\" text=\"가로값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"10\" text=\"세로값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"11\" text=\"높이값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"2\" text=\"제한 20byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"1\" text=\"신청종류코드목록시 &#13;&#10;트확인\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"2\" text=\"고객유형코드목록시트 &#13;&#10;확인\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"3\" text=\"건물구분코드목록시트 &#13;&#10;확인\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"4\" text=\"구역구분코드목록 &#13;&#10;시트확인\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"5\" text=\"서비스신청구분코드목록시트 &#13;&#10;확인\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"6\" text=\"제한 1000byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"7\" text=\"제한 1000byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"8\" text=\"제한 20byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"9\" text=\"제한 20byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"10\" text=\"제한 20byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"11\" text=\"제한 20byte\" background=\"#f7e8c9\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode01","-5","1116","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCode01");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"신청종류 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode02","125","1116","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCode02");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"고객유형 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode03","335","1116","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsCode03");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"건물구분 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode04","545","1116","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsCode04");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구역구분 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode05","765","1116","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsCode05");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"서비스신청구분 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divUpload.form
            obj = new Layout("default","",0,0,this.divForm.form.divUpload.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","2",null,null);

                p.panTitle.set_taborder("4");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.panFile.set_taborder("5");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("0","2","100%","294",null,null);

                p.Static04.set_taborder("8");
                p.Static04.set_text("파일편집\r\n  * 헤더는 편집 불가(1~3행은 수정 및 삭제 불가) 이고 업로드 데이터는 B4 항목부터 입력\r\n  * 업로드양식의 제한 byte : 한글은 2byte, 한글이외에는 1byte 로 처리됨\r\n  * 파일의 제일 앞 시트만 업로드 되고 시트명은 \"Sheet1\" 로 입력");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.move("57","220","100%","91",null,null);

                p.Static03.set_taborder("7");
                p.Static03.set_text("파일양식 : 우측의 “업로드 엑셀 양식 다운로드”의 엑셀파일을 이용하시기 바랍니다");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("20","163","100%","34",null,null);

                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("파일");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.set_visible("false");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.panBtnFile.set_taborder("3");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.btnExcelUpload.set_taborder("2");
                p.btnExcelUpload.set_text("파일선택");
                p.btnExcelUpload.set_cssclass("btn_WF_FileUp");
                p.btnExcelUpload.move("124","58","116","40",null,null);

                p.btnSampleDown.set_taborder("6");
                p.btnSampleDown.set_text("업로드 엑셀 양식 다운로드");
                p.btnSampleDown.set_cssclass("btn_WF_Small");
                p.btnSampleDown.set_fittocontents("width");
                p.btnSampleDown.move("813","76","166","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divUpload.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divUpload.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divUpload.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divUpload.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("2");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.grdUploadList.set_taborder("0");
                p.grdUploadList.set_binddataset("dsUploadList");
                p.grdUploadList.getSetter("uFunction").set("!sort");
                p.grdUploadList.set_nodatatext("데이타가 없습니다");
                p.grdUploadList.set_cellsizingtype("col");
                p.grdUploadList.move("0","44","100.00%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("업로드결과");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","99","34",null,null);

                p.staTotal01.set_taborder("4");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnSave.set_taborder("3");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_SmallBlack");
                p.btnSave.set_visible("true");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("774.00","10","45","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdUploadList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnSave.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divUpload.set_taborder("0");
                p.divUpload.set_text("신청자정보");
                p.divUpload.set_fittocontents("height");
                p.divUpload.set_cssclass("div_WF_Bg");
                p.divUpload.move("39","0","100%","296",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_spacing("10px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("109.00","296","100%","431",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("20.00","10","100%","410",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("부가시설물관리대장엑셀업로드");

                p.staState.set_taborder("0");
                p.staState.set_text("표는 필수 입력 사항입니다.");
                p.staState.set_cssclass("sta_WF_EsentialTxt");
                p.staState.move("20.00","10",null,"30","20",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.move("0","40",null,null,"0","0");

                p.grdExcelSample.set_taborder("2");
                p.grdExcelSample.set_visible("true");
                p.grdExcelSample.move("9","818","996","226",null,null);

                p.grdCode01.set_taborder("3");
                p.grdCode01.set_binddataset("dsCode01");
                p.grdCode01.set_autofittype("col");
                p.grdCode01.set_visible("false");
                p.grdCode01.move("-5","1116","205","166",null,null);

                p.grdCode02.set_taborder("4");
                p.grdCode02.set_binddataset("dsCode02");
                p.grdCode02.set_autofittype("col");
                p.grdCode02.set_visible("false");
                p.grdCode02.move("125","1116","205","166",null,null);

                p.grdCode03.set_taborder("5");
                p.grdCode03.set_binddataset("dsCode03");
                p.grdCode03.set_autofittype("col");
                p.grdCode03.set_visible("false");
                p.grdCode03.move("335","1116","205","166",null,null);

                p.grdCode04.set_taborder("6");
                p.grdCode04.set_binddataset("dsCode04");
                p.grdCode04.set_autofittype("col");
                p.grdCode04.set_visible("false");
                p.grdCode04.move("545","1116","205","166",null,null);

                p.grdCode05.set_taborder("7");
                p.grdCode05.set_binddataset("dsCode05");
                p.grdCode05.set_autofittype("col");
                p.grdCode05.set_visible("false");
                p.grdCode05.move("765","1116","205","166",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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

        };
        
        // User Script
        this.registerScript("LIF079P08.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	LIF079P08.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2025/01/15
        *  @Desction    부가시설물관리대장엑셀업로드 팝업
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/15			김진섭					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnImportValidate = function () {
        	var strSvcId    = "validate";
        	var strSvcUrl   = "addedFclty/selectPolCmdtyInfoExcelValidate.do";
        	var inData      = "dsIn=dsUpload";
        	var outData     = "dsUploadList=dsResult";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        this.fnSave = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "addedFclty/insertPolCmdtyInfoExcelList.do";
        	var inData      = "dsUploadList=dsSaveList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "validate" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsUploadList.getRowCount();
        			break;
        		case "save" :
        			this.gfnAlertMsg("msg", "MSG_011", ["저장되었습니다."]);
        			this.close(true);
        			break;

        		default:
        			break;
        	}
        }

        this.fnImportCallback = function (sImportId) {
        	if (sImportId == "import") {
        		if (this.dsUpload.getRowCount() == 0) {
        			this.gfnAlertMsg("msg", "MSG_011", ["업로드 된 데이터가 없습니다."]);
        			return;
        		}

        		this.fnImportValidate();
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	// 그리드 체크박스 제어
        	const oGrid = this.divForm.form.divGrd.form.grdUploadList;
        	oGrid.setCellProperty("body", 0, "displaytype", "expr:dataset.parent.gfnIsNull(rstMsg) ? 'checkboxcontrol' : 'none'");
        	oGrid.setCellProperty("body", 0, "edittype"	  , "expr:dataset.parent.gfnIsNull(rstMsg) ? 'checkbox' 	   : 'none'");

        	this.divForm.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divForm_divUpload_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfn_excelImport("dsUpload", "Sheet1", "A4", "fnImportCallback", "import", this);
        };

        this.divForm_divGrd_btnSave_onclick = function(obj,e)
        {
        	if (this.dsUploadList.getRowCount() == 0) {
        		this.gfnAlertMsg("msg", "MSG_011", ["업로드 된 데이터가 없습니다."]);
        		return;
        	}

        	else if (this.dsUploadList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["체크 된 데이터가 없습니다."]);
        		return;
        	}

        	/*
        	if (!confirm("저장하시겠습니까?")) return;

        	this.divForm.form.divGrd.form.grdUploadList.enableredraw = false;
        	this.dsUploadList.enableevnet = false;

        	this.dsUploadList.filter("dataset.parent.gfnIsNull(rstMsg)");
        	this.dsSaveList.copyData(this.dsUploadList, true);
        	this.dsUploadList.filter("");

        	this.dsUploadList.enableevnet = true;
        	this.divForm.form.divGrd.form.grdUploadList.enableredraw = true;

        	this.fnSave();
        	*/

        	//저장하시겠습니까?
        	this.gfnConfirmMsg("confirmSave", "MSG_003", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) {
        			return false;
        		} else {
        			this.divForm.form.divGrd.form.grdUploadList.enableredraw = false;
        			this.dsUploadList.enableevnet = false;

        			//오류 메시지가 없고 체크박스 체크가 된 데이터만 저장
        			this.dsUploadList.filter("dataset.parent.gfnIsNull(rstMsg) && chk == '1'");

        			this.dsSaveList.copyData(this.dsUploadList, true);
        			this.dsUploadList.filter("");

        			this.dsUploadList.enableevnet = true;
        			this.divForm.form.divGrd.form.grdUploadList.enableredraw = true;

        			this.fnSave();
        			return true;
        		}

        	}, null, null, null, null);
        };

        // 헤더클릭
        this.divForm_divGrd_grdUploadList_onheadclick = function(obj,e)
        {
        	const oGrid = this.divForm.form.divGrd.form.grdUploadList;
        	const nColIdx = oGrid.getBindCellIndex("body", "chk");
        	if (nColIdx != e.col) return;

        	const sChkVal = oGrid.getCellProperty("head", nColIdx, "value");
        	// const sNewVal = sChkVal == "N" ? "Y" : "N";
        	const oDs = oGrid.getBindDataset();


        	try {
        		oGrid.enableredraw = false;
        		oDs.enableevent = false;

        		for (let i=0; i<oDs.getRowCount(); i++) {
        			if (!this.gfnIsNull(oDs.getColumn(i, "rstMsg"))) continue;
        			oDs.setColumn(i, "chk", sChkVal);
        		}
        	} finally {
        		oGrid.enableredraw = true;
        		oDs.enableevent = true;
        	}
        };

        this.divForm_divUpload_btnSampleDown_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);

        	var svcUrl = "svcUrl::XExportImport.do";
        	this.objExport = null
        	this.objExport = new ExcelExportObject();

        	// this.objExport.objgrid = objGrid_excel;
        	this.objExport.set_exporturl(svcUrl);
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdExcelSample, "Sheet1!A1"      	, "allband", "allrecord", null, null, "image");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode01       , "신청종류 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode02       , "고객유형 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode03       , "건물구분 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode04       , "구역구분 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode05       , "서비스신청구분 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.set_exportfilename("부가시설물관리대장엑셀업로드샘플");

         	this.objExport.set_exporteventtype("itemrecord");
         	this.objExport.set_exportuitype("none");
         	this.objExport.set_exportmessageprocess("");
        	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);
        	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);

        	//objGrid.set_font("9px 'arial'");
        	var result = this.objExport.exportData();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divUpload.form.btnExcelUpload.addEventHandler("onclick",this.divForm_divUpload_btnExcelUpload_onclick,this);
            this.divForm.form.divUpload.form.btnSampleDown.addEventHandler("onclick",this.divForm_divUpload_btnSampleDown_onclick,this);
            this.divForm.form.divGrd.form.grdUploadList.addEventHandler("onheadclick",this.divForm_divGrd_grdUploadList_onheadclick,this);
            this.divForm.form.divGrd.form.btnSave.addEventHandler("onclick",this.divForm_divGrd_btnSave_onclick,this);
        };
        this.loadIncludeScript("LIF079P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
