(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTCList");
            this.set_titletext("New Form");
            this.set_scrollbartype("default default");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTC_Temp", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowser", this);
            obj._setContents("<ColumnInfo><Column id=\"browserCode\" type=\"STRING\" size=\"256\"/><Column id=\"browserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"browserCode\">1</Col><Col id=\"browserName\">ALL</Col></Row><Row><Col id=\"browserCode\">2</Col><Col id=\"browserName\">Chrome</Col></Row><Row><Col id=\"browserCode\">3</Col><Col id=\"browserName\">Edge</Col></Row><Row><Col id=\"browserCode\">4</Col><Col id=\"browserName\">Safari</Col></Row><Row><Col id=\"browserCode\">5</Col><Col id=\"browserName\">Opera</Col></Row><Row><Col id=\"browserCode\">6</Col><Col id=\"browserName\">Windows_NRE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAction", this);
            obj._setContents("<ColumnInfo><Column id=\"actionCode\" type=\"STRING\" size=\"256\"/><Column id=\"actionData\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDomList", this);
            obj._setContents("<ColumnInfo><Column id=\"nodeName\" type=\"STRING\" size=\"256\"/><Column id=\"nodeId\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIme", this);
            obj._setContents("<ColumnInfo><Column id=\"imeCode\" type=\"STRING\" size=\"256\"/><Column id=\"imeData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"imeCode\">1</Col><Col id=\"imeData\">KO</Col></Row><Row><Col id=\"imeCode\">2</Col><Col id=\"imeData\">EN</Col></Row><Row><Col id=\"imeCode\">3</Col><Col id=\"imeData\">JP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompare", this);
            obj._setContents("<ColumnInfo><Column id=\"compareCode\" type=\"STRING\" size=\"256\"/><Column id=\"compareData\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("ExcelExportObject00", this);
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","10","150",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsTC");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_formatid("default");
            obj.set_nodatatext("등록된 TC가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"39\"/><Column size=\"273\"/><Column size=\"126\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"318\"/><Column size=\"102\"/><Column size=\"52\"/><Column size=\"47\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"108\"/><Column size=\"149\"/><Column size=\"148\"/><Column size=\"160\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"testscript_no\"/><Cell col=\"2\" text=\"description\"/><Cell col=\"3\" text=\"browser\"/><Cell col=\"4\" text=\"type\"/><Cell col=\"5\" text=\"action\"/><Cell col=\"6\" text=\"element\"/><Cell col=\"7\" text=\"dictionaryKey\"/><Cell col=\"8\" text=\"count\"/><Cell col=\"9\" text=\"time\"/><Cell col=\"10\" text=\"input\"/><Cell col=\"11\" text=\"zoom\"/><Cell col=\"12\" text=\"ime\"/><Cell col=\"13\" text=\"key\"/><Cell col=\"14\" text=\"compareType\"/><Cell col=\"15\" text=\"resultValue\"/><Cell col=\"16\" text=\"expectValue\"/><Cell col=\"17\" text=\"expectUI\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:check\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:testscript_no\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:description\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:browser\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsBrowser\" combocodecol=\"browserCode\" combodatacol=\"browserName\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:type\"/><Cell col=\"5\" text=\"bind:action\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsAction\" combocodecol=\"actionCode\" combodatacol=\"actionData\"/><Cell col=\"6\" text=\"bind:element\" displaytype=\"editcontrol\" edittype=\"text\" tooltiptext=\"bind:element\"/><Cell col=\"7\" text=\"bind:dictionaryKey\" edittype=\"text\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:count\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:time\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:input\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:zoom\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:ime\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsIme\" combocodecol=\"imeCode\" combodatacol=\"imeData\"/><Cell col=\"13\" text=\"bind:key\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:compareType\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsCompare\" combocodecol=\"compareCode\" combodatacol=\"compareData\"/><Cell col=\"15\" text=\"bind:resultValue\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"16\" text=\"bind:expectValue\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:expectUI\" edittype=\"text\"/></Band></Format><Format id=\"exportFormat\"><Columns><Column size=\"56\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"47\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"testscript_no\"/><Cell col=\"1\" text=\"testscript_id\"/><Cell col=\"2\" text=\"description\"/><Cell col=\"3\" text=\"browser\"/><Cell col=\"4\" text=\"type\"/><Cell col=\"5\" text=\"action\"/><Cell col=\"6\" text=\"element\"/><Cell col=\"7\" text=\"dictionaryKey\"/><Cell col=\"8\" text=\"count\"/><Cell col=\"9\" text=\"time\"/><Cell col=\"10\" text=\"input\"/><Cell col=\"11\" text=\"zoom\"/><Cell col=\"12\" text=\"ime\"/><Cell col=\"13\" text=\"key\"/><Cell col=\"14\" text=\"compareType\"/><Cell col=\"15\" text=\"resultValue\"/><Cell col=\"16\" text=\"expectValue\"/></Band><Band id=\"body\"><Cell text=\"bind:testscript_no\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:testscript_id\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:description\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"3\" text=\"bind:browser\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsBrowser\" combocodecol=\"browserCode\" combodatacol=\"browserName\"/><Cell col=\"4\" text=\"bind:type\"/><Cell col=\"5\" text=\"bind:action\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsAction\" combocodecol=\"actionCode\" combodatacol=\"actionData\"/><Cell col=\"6\" text=\"bind:element\" displaytype=\"editcontrol\" edittype=\"text\" tooltiptext=\"bind:element\"/><Cell col=\"7\" text=\"bind:dictionaryKey\"/><Cell col=\"8\" text=\"bind:count\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:time\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:input\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"11\" text=\"bind:zoom\"/><Cell col=\"12\" text=\"bind:ime\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsIme\" combocodecol=\"imeCode\" combodatacol=\"imeData\"/><Cell col=\"13\" text=\"bind:key\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:compareType\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsCompare\" combocodecol=\"compareCode\" combodatacol=\"compareData\"/><Cell col=\"15\" text=\"bind:resultValue\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"16\" text=\"bind:expectValue\" displaytype=\"textareacontrol\" edittype=\"textarea\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","10","11","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("NEW");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("모든 TC 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","btnNew:10","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("+");
            obj.set_font("normal 700 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("TC Item 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:10","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_font("normal 700 20pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("TC Item 삭제 (grid 현재 position 또는 check 된 모든 item)");
            obj.set_hotkey("CTRL+DELETE");
            this.addChild(obj.name, obj);

            obj = new Static("stTarget","btnDel:10","10","80","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Element :");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbList","stTarget:6","10","500","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDomList");
            obj.set_codecolumn("nodeName");
            obj.set_datacolumn("nodeId");
            obj.set_type("filterlike");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","cmbList:10","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("반영");
            obj.set_tooltiptext("element 값에 반영 (grid 현재 position 또는 check 된 모든 item)");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnApply:5","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TC저장");
            obj.set_tooltiptext("작성된 TC 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnRefresh","btnSave:5","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("갱신");
            obj.set_tooltiptext("element 값을 새로 갱신한다.");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","btnRefresh:5","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.set_tooltiptext("TC 작성페이지 닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopyRow","10","100","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Row 복사");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("선택된 TC item을 복사하여 가장 하단에 위치하게 함");
            obj.set_hotkey("CTRL+F1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopySheet","btnCopyRow:10","100","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Sheet 복사");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("Browser ALL 값 기준으로 Browser 별로 복사하기");
            this.addChild(obj.name, obj);

            obj = new Button("btnWindow","btnClose:50","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("창분리");
            obj.set_tooltiptext("창을 분리한다");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","btnWindow:5","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TC Export");
            obj.set_tooltiptext("JEBI 엑셀 Export");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport","btnExport:5","10","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TC Import");
            obj.set_tooltiptext("JEBI 엑셀 Import");
            this.addChild(obj.name, obj);

            obj = new Static("stBrowser","btnCopySheet:90","101","150","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TC Filter(Browser) :");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBrowser","stBrowser:20","100","440","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsBrowser");
            obj.set_codecolumn("browserCode");
            obj.set_datacolumn("browserName");
            obj.set_direction("vertical");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("grid를 Browser 별로 보기");
            obj.set_text("ALL");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBrowser","btnCopySheet:0","btnCopySheet:-10","520","210",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid silver");
            obj.set_background("white");
            obj.set_visible("false");
            obj.set_boxShadow("5px 5px 10px silver");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stBrowser01","10","10","460","40",null,null,null,null,null,null,this.divBrowser.form);
            obj.set_taborder("1");
            obj.set_text("복사 할 Browser를 선택해주세요.");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.divBrowser.addChild(obj.name, obj);

            obj = new CheckBoxSet("chksBrowser","10","stBrowser01:10","500","78",null,null,null,null,null,null,this.divBrowser.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsBrowser");
            obj.set_codecolumn("browserCode");
            obj.set_datacolumn("browserName");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_fittocontents("none");
            obj.set_direction("horizontal");
            obj.set_rowcount("2");
            obj.set_text("");
            obj.set_index("-1");
            this.divBrowser.addChild(obj.name, obj);

            obj = new Button("btnCopy","10","149","120","50",null,null,null,null,null,null,this.divBrowser.form);
            obj.set_taborder("2");
            obj.set_text("sheet 복사");
            this.divBrowser.addChild(obj.name, obj);

            obj = new Button("btnCancel","140","149","120","50",null,null,null,null,null,null,this.divBrowser.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.divBrowser.addChild(obj.name, obj);

            obj = new Div("divExport",null,"btnExport:10","590","580","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("1px solid silver");
            obj.set_boxShadow("5px 5px 10px silver");
            obj.set_background("white");
            obj.set_url("Base::frmExport.xfdl");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("default default");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDescription","241","572","390","116",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_hotkey("ESCAPE");
            this.addChild(obj.name, obj);

            obj = new Div("divDrag","65","453","201","59",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("1px solid black");
            obj.set_background("white");
            obj.set_borderRadius("10px 10px");
            obj.set_boxShadow("5px 5px 10px silver");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.getSetter("dragText").set("");
            this.addChild(obj.name, obj);

            obj = new Div("divImport",null,"btnImport:10","480","520","btnImport:0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_border("1px solid silver");
            obj.set_boxShadow("5px 5px 10px silver");
            obj.set_url("Base::frmImport.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBrowser.form
            obj = new Layout("default","",0,0,this.divBrowser.form,function(p){});
            this.divBrowser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divExport
            obj = new Layout("default","",0,0,this.divExport.form,function(p){});
            this.divExport.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDrag
            obj = new Layout("default","",0,0,this.divDrag.form,function(p){});
            this.divDrag.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divImport
            obj = new Layout("default","",0,0,this.divImport.form,function(p){});
            this.divImport.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::frmExport.xfdl");
            this._addPreloadList("fdl","Base::frmImport.xfdl");
        };
        
        // User Script
        this.registerScript("frmTCList.xfdl", function() {

        //this.exportUrl = "http://172.10.12.8:8080/nexacro-xeni-java/XExportImport" ;	// export URL
        this.importUrl = "http://localhost:8080/nexacro-xeni-java/XImport" ;			// import URL

        //this.exportUrl = "http://localhost:8080/nexacro-xeni-java/XExportImport" ;	// export URL
        //this.importUrl = "http://localhost:8080/nexacro-xeni-java/XImport"

        this.exportUrl = window.location.protocol + "//" + window.location.host + "/nexacro-xeni-java/XExportImport"


        this.isAll = false;
        this.currentBrowser = 2; // chrome
        this.cbsClick_idx; //  checkboxset 선택 인덱스 저장 변수
        this.objTemp = []; // 동적으로 생성한 grid, ds 을 저장하는 변수
        this.grdCellIdx; // text를 따로 띄워 TC를 작성하기 위해 cell index를 저장하는 변수

        // main 에서 현재 폼을 링크한 div을 미리 로드 해놓기 때문에 TC 작성화면 들어오기전에 바로 호출이 된다.
        // 창 분리 할때는 새롭게 onload가 호출이 되므로 창분리에 대한 로직이 필요하다.
        this.frmTCList_onload = function(obj,e)
        {
        	var owner = this.getOwnerFrame();

        	if ( owner.isOpen == true )	// open 창으로 창분리 체크, isOpen은 창분리 할때 전달된 인자값.
        	{
        		this.setDataset(owner.opener);	// 필요한 ds를 부모창에서 가져다 세팅한다.
        		this.btnWindow.text = "창복귀";
        	}
        };

        // TC 작성에 필요한 ds를 세팅한다.
        this.setDataset = function(obj)
        {
        	var objApp = nexacro.getApplication();
        	var ds, nodeId, form;

        	form = objApp.getVariable("workForm");
        	ds = form.dsDomList;
        	nodeId = ds.getColumn(ds.rowposition, "nodeId");

        	objApp.setVariable("workTC", this); // global에 현재 div 정보를 저장한다.

        	this.dsDomList.copyData(ds);
        	this.dsAction.copyData(objApp.gdsActionType);

        	this.dsTC.clearData();
        	this.dsTC.copyData(objApp.gdsTC);

        	this.dsBrowser.clearData();
        	this.dsBrowser.copyData(objApp.gdsBrowserType);

        	this.dsCompare.clearData();
        	this.dsCompare.copyData(objApp.gdsCompareType);

        	this.dsIme.clearData();
        	this.dsIme.copyData(objApp.gdsImeType);

        	this.cmbList.text = nodeId;
        };


        this.dsCopy = function(ds)
        {
        	this.dsTC.copyData(ds);
        }

        this.btnExport_onclick = function(obj,e)
        {
        	//this.grdList.formatid = "exportFormat";
        	//this.fn_exportExcel(this.grdList);
        	if ( this.divExport.visible )
        	{
        		this.divExport.visible = false;
        	}
        	else
        	{
        		this.divExport.visible = true;
        		this.divExport.setFocus();
        		this.divExport.form.initExportBrowser();
        	}
        };

        //-----------------------------------------------------------------------
        // Grid를 Excel 내보내는 함수
        // Entry arrObjGrid:그리드 오브젝트가 들어있는 배열
        //  배열에 담긴 여러 Grid 개체를 하나의 파일의  여러 시트에 걸쳐 출력합니다.
        //-----------------------------------------------------------------------
        this.fn_exportExcel = function (ds, filaName)
        {
        	var len;
        	var	browserName, strSheetName, idx, code, i, grid;

        	this.destroyGrid();	// 동적 생성 grid, dataset 제거
        	this.ExcelExportObject00.clear(); // ExcelExportObject clear

        	this.ExcelExportObject00.set_exporttype(nexacro.ExportTypes.EXCEL2007);	//내보내기 할 엑셀 형식 지정
        	this.ExcelExportObject00.set_exportfilename(filaName);
        	this.ExcelExportObject00.set_exporturl(this.exportUrl);

        	this.dsTC.enableevent = false;


        	//파일명이 입력이 되면 testscript에 파일명 기준으로 order를 부여한다.
        	len = this.dsTC.rowcount;
        	for ( i = 0; i < len; i++ )
        	{
        		this.dsTC.setColumn(i, "testscript_id", filaName + "_" + i);
        	}

        	len = ds.rowcount;
        	for ( i = 0; i < len; i++ )
        	{
        		browserName = ds.getColumn(i, "browserName");
        		strSheetName = ds.getColumn(i, "sheetName");
        		idx = this.dsBrowser.findRow("browserName", browserName);
        		code = this.dsBrowser.getColumn(idx, "browserCode");

        		this.dsTC.filter("browser == '" + code + "'");
        		this.objTemp[i] = this.createGrid("grid_"+browserName, this.grdList, this.dsTC);
        		grid = this.objTemp[i]["grid"];
        		grid.visible = false;
        		this.addChild("grid_"+browserName, grid);

        		grid.show();  // show를 하지 않으면 동적으로 생성한 그리드를 export 할 수 없다.

        		this.ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID, grid, strSheetName+"!A1");
        	}

        	this.ExcelExportObject00.exportDataEx();	// 엑셀 서식이 text로 고정시키기 위함. jebi에서 숫자가 0. 이 붙게 되어 문제가 발생함.

        	this.dsTC.filter("browser == '" + this.rdoBrowser.value + "'");
        	this.dsTC.enableevent = true;
        }

        this.createGrid = function(grdName, orgGrid, ds)
        {
        	var objGrid = new Grid(grdName, orgGrid.getPixelLeft(), orgGrid.getPixelTop(), orgGrid.getPixelWidth(), orgGrid.getPixelHeight(), null, null);

        	objGrid.formats = orgGrid.formats;
        	objGrid.formatid = "exportFormat";

        	var objDs = new Dataset;
        	objDs.copyData(ds, true);
        	objGrid.binddataset = objDs;

        	return {grid:objGrid, dataset:objDs};
        }

        this.destroyGrid = function()
        {
        	for ( i = 0; i < this.objTemp.length; i++ )
        	{
        		this.removeChild(this.objTemp[i]["grid"].name);
        		this.objTemp[i]["grid"].destroy();
        		this.objTemp[i]["grid"] = null;

        		this.objTemp[i]["dataset"].destroy();
        		this.objTemp[i]["dataset"] = null;
        	}

        	this.objTemp = [];
        }

        this.ExcelExportObject00_onerror = function(obj,e)
        {
        	trace(obj.name + ":" + e.eventid);
        	trace("\ne.eventid: " + e.eventid);
        	trace("\ne.fromobject: " + e.fromobject);
        	trace("\ne.fromreferenceobject: " + e.fromreferenceobject);
        	trace("\ne.errorcode: " +  e.errorcode);
        	trace("\ne.errormsg: " + e.errormsg);
        };

        this.ExcelExportObject00_onsuccess = function(obj,e)
        {
        	trace(obj.name + ":" + e.eventid);
        	trace("\ne.eventid/e.fromobject/e.fromreferenceobject/e.url: " + e.eventid+"/"+e.fromobject+"/"+e.fromreferenceobject+"/"+e.url);
        };


        this.nDragCount = 0;
        this.grdList_ondrag = function(obj,e)
        {
        	if ( e.row >= 0 )
        	{
        		e.userdata = e.row;

        		//this.stDragNo.dragText = e.row + 1 + "번 TC";
        		this.divDrag.dragText = e.row + 1 + "번 TC";

        		return true;
        	}
        };

        this.grdList_ondrop = function(obj,e)
        {
        	// row를 바꾼다.
        // 	this.dsTC_Temp.assign(this.dsTC);
        // 	this.dsTC.copyRow(e.userdata, this.dsTC_Temp, e.row);
        // 	this.dsTC.copyRow(e.row, this.dsTC_Temp, e.userdata);

        	this.dsTC.moveRow(e.userdata, e.row);

        	this.divDrag.visible = false;
        	this.divDrag.dragText = "";

        	this.nDragCount = 0;
        };

        this.divDrag_ondrop = function(obj,e)
        {
        	this.divDrag.visible = false;
        	this.nDragCount = 0;
        };

        this.grdList_ondragmove = function(obj,e)
        {
        	this.nDragCount++;

        	if ( e.row < 0 )	// header 영역이나 grid body 영역 중 빈영역 인 경우에는 취소하도록 한다.
        	{
        		this.divDrag.visible = false;
        		this.nDragCount = 0;
        		return;
        	}

        	this.divDrag.text = this.divDrag.dragText + "를 " + (e.row + 1) + "번 위치로 이동";

        	if ( this.nDragCount > 5 )	// 클릭 동작과 drag 동작을 구분하기 위해 클릭 후 move 이벤트가 5번 이상 발생해야 drag로 인정하도록 함.
        	{
        		var left;

        		this.divDrag.visible = true;

        		// divDrag가 오른쪽으로 갔을때 grid를 넘어가는 현상을 보정해주기 위한 로직
        		if ( e.clientx > this.grdList.getOffsetWidth() / 2 )
        		{
        			left = e.clientx - this.divDrag.getOffsetWidth();
        		}
        		else
        		{
        			left = e.clientx + 20;
        		}
        		this.divDrag.setOffsetLeft(left);
        		this.divDrag.setOffsetTop(e.screeny-this.grdList.getOffsetTop()-this.divDrag.getOffsetHeight()/2);
        	}
        };


        //
        // this.chbBrowser_onitemclick = function(obj:nexacro.CheckBoxSet,e:nexacro.ItemClickEventInfo)
        // {
        // 	trace(e.index + " : " + e.itemtext + " : " + e.itemvalue );
        // };
        //
        // this.chbBrowser_onitemchanged = function(obj:nexacro.CheckBoxSet,e:nexacro.ItemChangeEventInfo)
        // {
        // 	trace(e.preindex + " : " + e.pretext + " : " + e.prevalue );
        // 	trace(e.postindex + " : " + e.posttext + " : " + e.postvalue );
        //
        // 	if ( e.posttext == "ALL" )
        // 	{
        // 		this.isAll = true;
        //
        // 		모든 아이템이 다 선택되게 해야 한다.
        // 		obj.value = "1,2,3,4,5,6";
        // 	}
        // };
        //
        // this.chbBrowser_canitemchange = function(obj:nexacro.CheckBoxSet,e:nexacro.ItemChangeEventInfo)
        // {
        //
        // };
        //
        // this.CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        // {
        // 		trace(e.postvalue + " : " + e.prevalue );
        // };
        //
        // this.CheckBox00_onclick = function(obj:nexacro.CheckBox,e:nexacro.ClickEventInfo)
        // {
        // 	trace(e.value);
        // };

        this.btnAdd_onclick = function(obj,e)
        {
        	var idx = this.dsTC.addRow();

        	this.dsTC.setColumn(idx, "browser", "1"); // 모든 값 all browser로 세팅한다.
        	this.dsTC.setColumn(idx, "element", this.cmbList.text); // 현재 선택된 node id를 element에 바로 세팅되게 한다.
        	this.dsTC.setColumn(idx, "type", "id"); // type 값을 무조건 'id'로 세팅하게 한다.

        };

        this.btnDel_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var bOK;

        	if ( this.dsTC.rowposition < 0 || this.dsTC.rowcount == 0 )
        	{
        		alert("삭제 지정된 Row가 없습니다.");
        		return;
        	}

        	bOK = objApp.confirm( "정말 삭제하시겠습니까? " ); // 상세 TC 정보가 표시되도록 해야함.

        	if ( bOK )
        	{
        		var idx = this.dsTC.findRow("check", 1);

        		if ( idx > -1)
        		{
        			// 선택된 row를 모두 지운다.
        			// 맨 아래에서 부터 지운다.
        			var arr = this.dsTC.extractRows("check == 1");
        			this.dsTC.deleteMultiRows(arr);
        		}
        		else
        		{
        			this.dsTC.deleteRow(this.grdList.currentrow);
        		}

        		idx = this.dsTC.findRow("check", 1);
        		if ( this.dsTC.rowcount == 0 || idx == -1 )
        		{
        			this.grdList.setCellProperty("head", 0, "text", 0);
        		}
        	}
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if ( e.fromobject.id == "cellcheckbox" )
        	{
        		var chk = this.dsTC.getColumn(e.row, "check");

        		if ( chk == false )	// 하나라도 해제되면 전체 선택값도 해제한다.
        		{
        			this.dsTC.setColumn(e.row, "check", 0);
        			obj.setCellProperty("head", e.cell, "text", 0);
        		}
        		else // 하나가 선택되면 전체가 선택되어 있는지 비교하여 전체가 다 선택되어 있으면 head 영역도 체크하게 한다.
        		{
        			var sum = this.dsTC.getSum("check");

        			if ( sum == this.dsTC.rowcount )
        			{
        				obj.setCellProperty("head", e.cell, "text", 1);
        			}
        		}
        	}
        	else
        	{
        		// description, input, resultValue, expectValue
        		if ( e.cell == 2 || e.cell == 10 || e.cell == 15 || e.cell == 16 )
        		{
        			this.grdCellIdx = e.cell;

        			var rightPos = obj.getOffsetLeft() + obj.getOffsetWidth();

        			if( e.clientx + this.txtDescription.getOffsetWidth() > (rightPos - 10) )
        			{
        				this.txtDescription.left = e.clientx - this.txtDescription.getOffsetWidth();
        			}
        			else
        			{
        				this.txtDescription.left = e.clientx;
        			}

        			var bottomPos = obj.getOffsetTop() + obj.getOffsetHeight();

        			if ( e.clienty + this.txtDescription.getOffsetHeight() > bottomPos - 30 )
        			{
        				this.txtDescription.top = e.clienty - this.txtDescription.getOffsetHeight();
        			}
        			else
        			{
        				this.txtDescription.top = e.clienty + 30;
        			}

        			var text;
        			if ( e.cell == 2 )
        			{
        				text = this.dsTC.getColumn(this.grdList.currentrow, "description");
        			}
        			else if ( e.cell == 10 )
        			{
        				text = this.dsTC.getColumn(this.grdList.currentrow, "input");
        			}
        			else if ( e.cell == 15 )
        			{
        				text = this.dsTC.getColumn(this.grdList.currentrow, "resultValue");
        			}
        			else if ( e.cell == 16 )
        			{
        				text = this.dsTC.getColumn(this.grdList.currentrow, "expectValue");
        			}

        			this.txtDescription.value = text;
        			this.txtDescription.visible = true;
        			this.txtDescription.setFocus();

        		}
        	}
        };

        this.txtDescription_onkillfocus = function(obj,e)
        {
        	if ( this.grdCellIdx == 2 )
        	{
        		this.dsTC.setColumn(this.grdList.currentrow, "description", obj.value);
        	}
        	else if ( this.grdCellIdx == 10 )
        	{
        		this.dsTC.setColumn(this.grdList.currentrow, "input", obj.value);
        	}
        	else if ( this.grdCellIdx == 15 )
        	{
        		this.dsTC.setColumn(this.grdList.currentrow, "resultValue", obj.value);
        	}
        	else if ( this.grdCellIdx == 16 )
        	{
        		this.dsTC.setColumn(this.grdList.currentrow, "expectValue", obj.value);
        	}

        	obj.visible = false;
        };

        this.grdList_onheadclick = function(obj,e)
        {
        	trace(e.cell + " : " + e.col + " : " + e.row );

        	if ( e.fromobject.id == "cellcheckbox" )
        	{
        		//if ( e.fromobject.checked == false )	// 이전값이 저장되어 있어 false 가 선택되어진 상태이다.
        		if( obj.getCellProperty( "Head", 0, "text" ) != 1 )
        		{
        			for ( var i = 0; i < this.dsTC.rowcount; i++ )
        			{
        				this.dsTC.setColumn(i, "check", 1); // 전체 선택이 선택됐으니 모두 체크한다.
        			}

        			obj.setCellProperty("head", e.cell, "text", 1);
        		}
        		else
        		{
        			for ( var i = 0; i < this.dsTC.rowcount; i++ )
        			{
        				this.dsTC.setColumn(i, "check", 0); // 전체 선택이 해제됐으니 모두 해제한다.
        			}

        			obj.setCellProperty("head", e.cell, "text", 0);
        		}
        	}
        };

        this.btnApply_onclick = function(obj,e)
        {
        	// element 값을 grid에 적용한다.
        	// grid의 check 된 값을 찾는다.

        	var chk = this.dsTC.findRow("check", 1);

        	if ( chk >= 0 )
        	{
        		for ( var i = 0; i < this.dsTC.rowcount; i++ )
        		{
        			if ( this.dsTC.getColumn(i, "check") == 1 ) // 적용 대상
        			{
        				this.dsTC.setColumn(i, "element", this.cmbList.text);
        			}
        		}
        	}
        	else
        	{
        		this.dsTC.setColumn(this.grdList.currentrow, "element", this.cmbList.text);
        	}
        	// 다른 적용값을 grid에 적용한다. todo
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	objApp.gdsTC.clearData();
        	objApp.gdsTC.copyData(this.dsTC);
        };

        this.btnNew_onclick = function(obj,e)
        {
        	this.dsTC.clearData();
        	this.grdList.setCellProperty("head", 0, "text", 0);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workForm");

        	var len = this.dsTC.rowcount;

        	if ( len > 0 )
        	{
        		var bOK = this.confirm( "작성한 TC가 있습니다. 저장하시겠습니까? 저장하지 않고 닫으시려면 취소를 눌러주세요." );

        		if ( bOK )
        		{
        			this.btnSave_onclick();
        		}
        	}

        	var bOpen = objApp.getVariable("bOpen");
        	if ( bOpen == "TRUE" )
        	{
        		form.divTop.form.btnList.visible = true;
        		this.close();
        	}
        	else
        	{
        		form.divTop_btnList_onclick();
        	}
        };

        // checkbox control로 선택된 항목에 대해서 복사하여 가장 하단에 copy 한다.
        // checkbox control이 복수 개은 경우에는 모두 copy한다.
        this.btnCopyRow_onclick = function(obj,e)
        {
        	var rowcount = this.dsTC.rowcount;
        	var i, j

        	this.dsTC_Temp.clearData();

        	for ( i = 0, j = 0; i < rowcount; i++ )
        	{
        		if ( this.dsTC.getColumn(i, "check") )
        		{
        			j = this.dsTC_Temp.addRow();
        			this.dsTC_Temp.copyRow(j, this.dsTC, i);
        			this.dsTC_Temp.setColumn(j, "check", 0);

        			j = this.dsTC.addRow();
        			this.dsTC.copyRow(j, this.dsTC_Temp, i);
        		}
        	}
        };

        // 엑셀 import
        this.btnImport_onclick = function(obj,e)
        {
        // 	this.ExcelImportObject00.importtype = nexacro.ImportTypes.EXCEL2007;
        //     this.ExcelImportObject00.importurl = this.importUrl;
        //     this.ExcelImportObject00.importData("","Head=Sheet01!A1:Q1;Body=Sheet01!A2:Q5","dsTC"); 	//Head 영역 지정시

        	if ( this.divImport.visible == false )
        	{
        		this.divImport.form.dsSheet.clearData();
        		this.divImport.visible = true;
        	}
        	else
        	{
        		this.divImport.visible = false;
        	}
        };

        this.ExcelImportObject00_onerror = function(obj,e)
        {
        	trace(1);
        };

        this.ExcelImportObject00_onsuccess = function(obj,e)
        {
        	trace(2);
        };

        // 선택된 browser 만큼 sheet를 복제한다.
        // dataset에 chrome 기준의 모든 내용을 복제한 후 복제한 data browser 컬럼에 선택된 browser 정보를 넣는다.
        this.btnCopySheet_onclick = function(obj,e)
        {
        	this.divBrowser.visible = true;
        	this.divBrowser.form.chksBrowser.clearSelect(); // 이전에 선택된 내용을 삭제한다

        	this.divBrowser.form.btnCopy.setFocus();
        };

        this.copyDatasetBrowserType = function(strBroswerType)
        {
        	// 원본 dataset (dsTC)에서 All 에 해당하는 값 복제한다.
        	this.dsTC.enableevent = false;
        	this.dsTC.filter("browser == '1'");
        	this.dsTC_Temp.clearData();
        	this.dsTC_Temp.copyData(this.dsTC, true);
        	this.dsTC.filter("");

        	// 복사한 ds를 원본 데이터 밑에 복사한다.
        	// 복사를 할 때 browser 값은 선택한 browser 값이 설정되도록 한다.
        	// type 해당하는 값 세팅하기
        	// type = accessibilityid // nre
        	//      = id // wre
        	var len = this.dsTC_Temp.rowcount;
        	for ( var i = 0; i < len; i++ )
        	{
        		var type = this.dsTC_Temp.getColumn(i, "type");
        		this.dsTC_Temp.setColumn(i, "browser", strBroswerType);

        		if ( strBroswerType == "6" )
        		{
        			if ( type == "id" )	// type이 "id" 값이 있는 경우에는 NRE 전용인 "accessibilityid"로 변경한다. 그외는 그대로 둔다.
        			{
        				this.dsTC_Temp.setColumn(i, "type", "accessibilityid");
        			}

        			var element = this.dsTC_Temp.getColumn(i, "element");
        			var nre_element;


        // 			if ( element && element.indexOf(":input") >= 0 )
        // 			{
        // 				nre_element = element.substring(0, element.indexOf(":input"));
        // 			}
        // 			else if ( element && element.indexOf(":textarea") >= 0 )
        // 			{
        // 				nre_element = element.substring(0, element.indexOf(":textarea"));
        // 			}
        // 			else
        // 			{
        // 				nre_element = element;
        // 			}

        			nre_element = this.nreExeption(element);

        			this.dsTC_Temp.setColumn(i, "element", nre_element);
        		}
        		else
        		{
        			// type이 "id" 값을 row 생성시 넣었기 때문에 id가 기본으로 들어가 있음. 로직 삭제
        //			this.dsTC_Temp.setColumn(i, "type", "id");
        		}

        		var idx = this.dsTC.addRow();
        		this.dsTC.copyRow(idx, this.dsTC_Temp, i);
        	}

        	trace(this.dsTC.saveXML());

        	this.dsTC.enableevent = true;

        };

        // nre id에 필요없는 값을 제거한다.
        this.nreExeption = function(element)
        {
        	var objApp = nexacro.getApplication();
        	var idx, len = objApp.gdsExeption.rowcount;

        	for ( i = 0; i < len; i++ )
        	{
        		var v = objApp.gdsExeption.getColumn(i, "nre_exception");

        		if ( (idx = element.indexOf(v)) >= 0 )
        		{
        			return element.substring(0, idx);
        		}
        	}

        	return element;
        }

        this.divBrowser_chksBrowser_onitemchanged = function(obj,e)
        {
        	var totalItemCnt = obj.getCount();

        	if ( this.cbsClick_idx == 0 )
        	{
        		obj.setSelectRange(1, totalItemCnt-1, obj.getSelect(0));
        	}
        	else
        	{
        		var curSelCnt = obj.getSelectedCount();
        		var fullCnt = obj.getSelect(0) ? totalItemCnt : totalItemCnt-1; // all 이 선택된 상태면 전체 체크박스 개수(itemCnt)로 설정하고, 아니면 all을 제외한 나머지 개수(itemCnt - 1)

        		if (curSelCnt == fullCnt)
        		{
        			obj.setSelectRange(0, totalItemCnt-1, true);
        		}
        		else
        		{
        			obj.setSelect(0, false);
        		}
        	}
        };

        this.divBrowser_chksBrowser_onitemclick = function(obj,e)
        {
        	this.cbsClick_idx = e.index;
        };

        this.divBrowser_btnCancel_onclick = function(obj,e)
        {
        	this.divBrowser.visible = false;
        };

        this.divBrowser_btnCopy_onclick = function(obj,e)
        {
        	// 원본데이터에 복사할 데이터가 있는지 체크한다.
        	if ( this.dsTC.rowcount == 0 )
        	{
        		alert("복사할 데이터가 없습니다.");
        		return;
        	}

        	// checkboxset에서 선택한 아이템을 체크한다.
        	var retValue = this.divBrowser.form.chksBrowser.value;

        	if ( retValue )
        	{
        		var arr;
        		arr = retValue.split(",");

        		if ( arr.length > 0 )
        		{
        			for ( var i = 0; i < arr.length; i++ )
        			{
        				if ( arr[i] == "1" )
        				{
        					continue; // All은 원본이므로 복사하지 않는다.
        				}

        				this.copyDatasetBrowserType(arr[i]);
        			}
        		}
        	}

        	this.divBrowser.visible = false;
        };


        // 아이템 선택에 맞게 filter 하여 grid에 내용을 보여준다.
        this.rdoBrowser_onitemchanged = function(obj,e)
        {
        	if ( e.postvalue != 1 )
        	{
        		this.dsTC.filter("browser == '" + e.postvalue + "'");
        	}
        	else
        	{
        		this.dsTC.filter("");
        	}
        };

        // 창분리 버튼
        // 현재 내용 글로벌에 저장
        this.btnWindow_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workForm");
        	var bOpen = objApp.getVariable("bOpen");

        	if ( bOpen == "FALSE" )	// 창 분리 시도
        	{
        		// 현재 작업된 내용을 gdsTC에 저장한 후 창분리 한다.
        		this.btnSave_onclick();

        		// 창분리
        		var bSucc = nexacro.open("TC_Window", "Base::frmTCList.xfdl",  this.getOwnerFrame(), {isOpen: true, nodeId:this.cmbList.text}, "showtitlebar=true showstatusbar=false", 0, 0);

        		// 부모창의 divList 제거
        		form.divTop_btnList_onclick();
        		form.divTop.form.btnList.visible = false;

        		objApp.setVariable("bOpen", "TRUE");	// 오픈 flag 설정
        	}
        	else // 창분리 된 상태에서 복귀시도
        	{
        		objApp.setVariable("bOpen", "FALSE");	// 오픈 flag 설정

        		// 현재 작업된 내용을 gdsTC에 저장한 후 창분리 한다.
        		this.btnSave_onclick();
        		form.divTop_btnList_onclick();
        		this.close();
        	}

        // 	if ( obj.text == "창분리" )
        // 	{
        // 		var objApp = nexacro.getApplication();
        // 		var form = objApp.getVariable("workForm");
        //
        // 		현재 작업된 내용을 gdsTC에 저장한 후 창분리 한다.
        // 		this.btnSave_onclick();
        //
        // 		form.divTop_btnList_onclick();
        //
        // 		bSucc = nexacro.open("TC_Window", "Base::frmTCList.xfdl",  this.getOwnerFrame(), {isOpen: true, nodeId:this.cmbList.text}, "showtitlebar=true showstatusbar=false", 0, 0);
        // 		this.parent.parent.divTop_btnList_onclick();
        // 		form.divTop.form.btnList.visible = false;
        //
        // 		objApp.setVariable("bOpen", true);	// 오픈 flag 설정
        // 	}
        // 	else
        // 	{
        // 		현재 작성 TC를 gdsTC에 저장한다.
        // 		this.btnSave_onclick();
        //
        // 		this.parent.opener.divTop_btnList_onclick();
        //
        // 		this.close();
        // 	}
        //
        };


        this.btnRefresh_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workForm");

        	this.dsDomList.clearData();
        	this.dsDomList.copyData(form.dsDomList);
        };

        this.setHighlightNode = function(nodeId)
        {
        	this.cmbList.text = nodeId;
        }


        this.frmTCList_onbeforeclose = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workForm");
        	var bOpen = objApp.getVariable("bOpen");

        	if ( bOpen == "TRUE" )	// 부모창
        	{
        		objApp.setVariable("bOpen", "FALSE");	// 오픈 flag 설정

        		// 현재 작업된 내용을 gdsTC에 저장한 후 창분리 한다.
        		this.btnSave_onclick();
        		form.divTop.form.btnList.visible = true;
        		//form.divTop_btnList_onclick();
        	}
        };

        this.divExport_onkillfocus = function(obj,e)
        {
        	this.btnExport_onclick();
        };

        this.txtDescription_oninput = function(obj,e)
        {
        	trace(e);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTCList_onload,this);
            this.addEventHandler("onclose",this.frmTCList_onclose,this);
            this.addEventHandler("onbeforeclose",this.frmTCList_onbeforeclose,this);
            this.grdList.addEventHandler("ondrag",this.grdList_ondrag,this);
            this.grdList.addEventHandler("ondrop",this.grdList_ondrop,this);
            this.grdList.addEventHandler("ondragmove",this.grdList_ondragmove,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("onmouseleave",this.grdList_onmouseleave,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnRefresh.addEventHandler("onclick",this.btnRefresh_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnCopyRow.addEventHandler("onclick",this.btnCopyRow_onclick,this);
            this.btnCopySheet.addEventHandler("onclick",this.btnCopySheet_onclick,this);
            this.btnWindow.addEventHandler("onclick",this.btnWindow_onclick,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.rdoBrowser.addEventHandler("onitemchanged",this.rdoBrowser_onitemchanged,this);
            this.divBrowser.addEventHandler("onkillfocus",this.divBrowser_btnCancel_onclick,this);
            this.divBrowser.form.chksBrowser.addEventHandler("onitemchanged",this.divBrowser_chksBrowser_onitemchanged,this);
            this.divBrowser.form.chksBrowser.addEventHandler("onitemclick",this.divBrowser_chksBrowser_onitemclick,this);
            this.divBrowser.form.btnCopy.addEventHandler("onclick",this.divBrowser_btnCopy_onclick,this);
            this.divBrowser.form.btnCancel.addEventHandler("onclick",this.divBrowser_btnCancel_onclick,this);
            this.divExport.addEventHandler("onkillfocus",this.divExport_onkillfocus,this);
            this.txtDescription.addEventHandler("onkillfocus",this.txtDescription_onkillfocus,this);
            this.txtDescription.addEventHandler("oninput",this.txtDescription_oninput,this);
            this.divDrag.addEventHandler("ondrop",this.divDrag_ondrop,this);
            this.ExcelExportObject00.addEventHandler("onerror",this.ExcelExportObject00_onerror,this);
            this.ExcelExportObject00.addEventHandler("onsuccess",this.ExcelExportObject00_onsuccess,this);
            this.ExcelImportObject00.addEventHandler("onerror",this.ExcelImportObject00_onerror,this);
            this.ExcelImportObject00.addEventHandler("onsuccess",this.ExcelImportObject00_onsuccess,this);
        };
        this.loadIncludeScript("frmTCList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
