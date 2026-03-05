(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST012P08");
            this.set_titletext("투입자재 및 공구류 일괄업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"thldQty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"excelRow\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"thldQty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rstMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"excelRow\" type=\"STRING\" size=\"256\"/><Column id=\"sn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"thldQty\" type=\"STRING\" size=\"256\"/><Column id=\"unitVl\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctVl\" type=\"STRING\" size=\"256\"/><Column id=\"mngPlcCn\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"otptMthdSeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rstMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">LABELTYPE10</Col><Col id=\"name\">스티커출력</Col></Row><Row><Col id=\"code\">LABELTYPE20</Col><Col id=\"name\">레이져마킹</Col></Row></Rows>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"엑셀Row번호\"/><Cell col=\"2\" text=\"업로드 결과\"/><Cell col=\"3\" text=\"순번\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"물품명(장비명)\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"총보유수량(장비 P/N)\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"단위(관리번호)\" cssclass=\"CellE\"/><Cell col=\"7\" text=\"규격\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"보관장소(구체적장소)\" cssclass=\"CellE\"/><Cell col=\"9\" text=\"출력방법\" cssclass=\"CellE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:excelRow\"/><Cell col=\"2\" text=\"bind:rstMsg\" displaytype=\"text\" textAlign=\"left\" color=\"red\" tooltiptext=\"bind:rstMsg\"/><Cell col=\"3\" text=\"bind:sn\"/><Cell col=\"4\" text=\"bind:cmdtyNm\"/><Cell col=\"5\" text=\"bind:thldQty\"/><Cell col=\"6\" text=\"bind:unitVl\"/><Cell col=\"7\" text=\"bind:spcfctVl\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:mngPlcCn\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:otptMthdSeCdNm\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Button("btnSave","774.00","10","50","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdExcelSample","9","818","996","226",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"157\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"7\" text=\"물품목록 엑셀업로드\" font=\"bold 32px/normal &quot;pretendard&quot;\" background=\"#aaaaaa\" border=\"1px solid #dadada 1px solid #dadada 1px solid #dadada 1px solid #dadada\"/><Cell row=\"1\" text=\"순번\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"물품명(장비명)\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"2\" text=\"총보유수량(장비 P/N)\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"3\" text=\"단위(관리번호)\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"4\" text=\"규격\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"5\" text=\"보관장소(구체적장소)\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"6\" text=\"출력방법\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"2\" text=\"숫자(1,2,3..)\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"1\" text=\"제한 100byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"2\" text=\"제한 10byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"3\" text=\"제한 20byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"4\" background=\"#f7e8c9\" text=\"제한 20byte\"/><Cell row=\"2\" col=\"5\" text=\"제한 4000byte\" background=\"#f7e8c9\"/><Cell row=\"2\" col=\"6\" text=\"출력구분코드목록 \" background=\"#f7e8c9\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode","15","1066","205","166",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"출력구분 코드목록\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" text=\"코드값\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/><Cell row=\"1\" col=\"1\" text=\"코드명\" background=\"#b7b7b7\" font=\"bold 14px/normal &quot;pretendard&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
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
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_SmallBlack");
                p.btnSave.set_visible("true");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("774.00","10","50","34",null,null);
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
                p.set_titletext("투입자재 및 공구류 일괄업로드");

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
                p.grdExcelSample.set_visible("false");
                p.grdExcelSample.move("9","818","996","226",null,null);

                p.grdCode.set_taborder("3");
                p.grdCode.set_binddataset("dsCode");
                p.grdCode.set_autofittype("col");
                p.grdCode.set_visible("false");
                p.grdCode.move("15","1066","205","166",null,null);
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
        this.registerScript("CST011P16.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P08.xfdl
        *  @Creator 	이규철
        *  @CreateDate 	2024/09/19
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
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
        	var strSvcUrl   = "cst/sec/selectCmdtyInfoExcelValidate.do";
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

        //메인화면 전달용 리턴정보 생성
        this.fnMakeParam = function () {
        	let arrReturnVal = [];

        	for(let k = 0; k < this.dsSaveList.getRowCount(); k++) {
        		let rtnValue = {};
        		for (let i=0; i<this.dsSaveList.getColCount(); i++) {
        			rtnValue[this.dsSaveList.getColumnInfo(i).id] = new String(this.dsSaveList.getColumn(k, this.dsSaveList.getColumnInfo(i).id));
        		}

        		arrReturnVal.push(rtnValue);
        	}

        	this.gfnClosePopup(JSON.stringify(arrReturnVal));
        }

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

        	else if (this.dsUploadList.findRow("chk", "Y") == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["체크 된 데이터가 없습니다."]);
        		return;
        	}

        	//적용하시겠습니까?
        	this.gfnConfirmMsg("confirmMain", "MSG_007", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) {
        			return false;
        		} else {
        			this.divForm.form.divGrd.form.grdUploadList.enableredraw = false;
        			this.dsUploadList.enableevnet = false;

        			//오류 메시지가 없고 체크박스 체크가 된 데이터만 저장
        			this.dsUploadList.filter("dataset.parent.gfnIsNull(rstMsg) && chk == 'Y'");

        			this.dsSaveList.copyData(this.dsUploadList, true);
        			this.dsUploadList.filter("");

        			this.dsUploadList.enableevnet = true;
        			this.divForm.form.divGrd.form.grdUploadList.enableredraw = true;

        			//메인화면으로 리턴
        			this.fnMakeParam();

        			return true;
        		}

        	}, null, null, null, ["메인화면에 적용하시겠습니까?"]);
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
        	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.grdCode       , "출력구분 코드목록!A1"	, "allband", "allrecord", null, null, "image");
        	this.objExport.set_exportfilename("물품목록업로드샘플");

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
        this.loadIncludeScript("CST011P16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
