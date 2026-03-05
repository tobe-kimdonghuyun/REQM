(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("formExport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBrowser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "browserCode","type" : "STRING","size" : "256"},{"id" : "browserName","type" : "STRING","size" : "256"}]},"Rows" : [{"browserCode" : "1","browserName" : "ALL"},{"browserCode" : "2","browserName" : "Chrome"},{"browserCode" : "3","browserName" : "Edge"},{"browserCode" : "4","browserName" : "Safari"},{"browserCode" : "5","browserName" : "Opera"},{"browserCode" : "6","browserName" : "Windows_NRE"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelBrowser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "browserName","type" : "STRING","size" : "256"},{"id" : "sheetName","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stTarget","10","10","60","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일명 :");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilename","stTarget:10","10",null,"40","110",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("파일명을 입력해주세요");
            obj.set_value("TestCase_");
            obj.set_text("TestCase_");
            this.addChild(obj.name, obj);

            obj = new Static("stExplain","20","edtFilename:10","500","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Export 할 Browser를 선택해주세요. \r\n바로 Export를 하면 Browser type이 \"ALL\" 인 데이터를 Sheet01에 Export 됩니다.\r\n선택한 Browser의 기본 sheet 명은 [Sheet(Browser Name)]이름입니다.");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_wordWrap("char");
            obj.set_wordSpacing("0px");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chksBrowser","20","stExplain:15","500","78",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBrowser");
            obj.set_codecolumn("browserCode");
            obj.set_datacolumn("browserName");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_fittocontents("none");
            obj.set_direction("horizontal");
            obj.set_rowcount("2");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBrowser","20","chksBrowser:10",null,"253","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSelBrowser");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/><Column size=\"333\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"45\"/></Rows><Band id=\"head\"><Cell text=\"선택 Browser\"/><Cell col=\"1\" text=\"Sheet 명\"/></Band><Band id=\"body\"><Cell text=\"bind:browserName\"/><Cell col=\"1\" text=\"bind:sheetName\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","15","grdBrowser:10",null,"42","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("JEBI TC Export");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","15","btnExport:10",null,"40","15",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnTempSave","edtFilename:15","10","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TC 임시저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmExport.xfdl", function() {
        this.cbsClick_idx;

        // this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.Dataset00.filter("Column0 == 'chrome'");
        //
        // 	trace(this.Dataset00.saveXML("Dataset00", "view"));
        //
        // 	obj.visible = false;
        //
        //
        // // 	var idx = this.Dataset00.addRow();
        // // 	this.Dataset00.setColumn(idx, "Column0", "firefox");
        // //
        // // 	trace(this.Dataset00.saveXML());
        // // 	trace(this.Dataset00.saveXML("Dataset00", "view"));
        // //
        // //
        // // 	var idx = this.Dataset00.deleteRow(1);
        // //
        // // 	trace(this.Dataset00.saveXML());
        // // 	trace(this.Dataset00.saveXML("Dataset00", "view"));
        // };
        //
        // this.Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // // 	var idx = this.Grid00.currentrow;
        // // 	this.Dataset00.insertRow(idx);
        // // 	this.Dataset00.setColumn(idx, "Column0", "firefox");
        // //
        // // 	trace(this.Dataset00.saveXML("Dataset00", "view"));
        // // 	trace(this.Dataset00.saveXML());
        // this.Button00.visible = false;
        // };
        //
        // this.Button02_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var idx = this.Grid00.currentrow;
        // 	this.Dataset00.deleteRow(idx);
        //
        // 	trace(this.Dataset00.saveXML("Dataset00", "view"));
        // 	trace(this.Dataset00.saveXML());
        //
        // };

        this.initExportBrowser = function()
        {
        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workTC");
        	var i, idx, v = [];

        	for ( i = 2; i <= objApp.gdsBrowserType.rowcount; i++ )
        	{
        		idx = form.dsTC.findRow("browser", i);

        		if ( idx > -1 )
        		{
        			v.push(i-1);
        		}
        	}

        	this.chksBrowser.setSelectItems(v, true);
        	this.selectedBrowserCheck(v);
        }

        this.chksBrowser_onitemclick = function(obj,e)
        {
        	this.cbsClick_idx = e.index;
        };

        this.chksBrowser_onitemchanged = function(obj,e)
        {
        	var curSelCnt, fullCnt
        	var totalItemCnt = obj.getCount();

        	if ( this.cbsClick_idx == 0 )
        	{
        		obj.setSelectRange(1, totalItemCnt-1, obj.getSelect(0));
        	}
        	else
        	{
        		curSelCnt = obj.getSelectedCount();
        		fullCnt = obj.getSelect(0) ? totalItemCnt : totalItemCnt-1; // all 이 선택된 상태면 전체 체크박스 개수(itemCnt)로 설정하고, 아니면 all을 제외한 나머지 개수(itemCnt - 1)

        		if (curSelCnt == fullCnt)
        		{
        			obj.setSelectRange(0, totalItemCnt-1, true);
        		}
        		else
        		{
        			obj.setSelect(0, false);
        		}
        	}

        	this.selectedBrowserCheck(obj.getSelectedItems());
        };

        this.selectedBrowserCheck = function(indexs)
        {
        	// 현재 ds하여 선택된 browser가 이미 있는지 비교한다.
        	var nIdx = indexs ? indexs.length : 0;

        	if( nIdx == 0 )	// 모든 선택을 해제했으므로 초기화 한다.
        	{
        		this.dsSelBrowser.clearData();
        		return;
        	}

        	for ( var i = 0; i < nIdx; i++ )
        	{
        		var browserName = this.dsBrowser.getColumn(indexs[i], "browserName");
        		var idx = this.dsSelBrowser.findRow("browserName", browserName);

        		if ( idx >= 0 || browserName == "ALL" ) // 기존에 등록된 브라우저가 있으므로 skip
        		{
        			continue;
        		}
        		else
        		{
        			var rowIdx = this.dsSelBrowser.addRow();

        			this.dsSelBrowser.setColumn(rowIdx, "browserName", browserName);
        			this.dsSelBrowser.setColumn(rowIdx, "sheetName", "sheet_"+browserName);
        		}
        	}
        }

        this.btnExport_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	if ( !this.edtFilename.value )
        	{
        		alert("생성할 파일명을 입력해주세요");
        		return;
        	}

        	objApp.workTC.fn_exportExcel(this.dsSelBrowser, this.edtFilename.value);

        // 	// 아무것도 선택하지 않으면 all 인 데이터만 exprot 한다.
        // 	if ( this.dsSelBrowser.rowcount == 0 )
        // 	{
        // 		objApp.workTC.fn_exportExcel(["1","Sheet01"]);
        // 	}
        // 	else
        // 	{
        // 		objApp.workTC.fn_exportExcel(["1","Sheet01"]);
        // 	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	//this.parent.visble = false; // 자신에 대한 visible을 변경 할 수 없음
        	this.parent.parent.destroyGrid();
        	this.parent.parent.btnExport_onclick();
        };

        this.btnTempSave_onclick = function(obj,e)
        {
        	if ( !this.edtFilename.value )
        	{
        		alert("생성할 파일명을 입력해주세요");
        		return;
        	}

        	var objApp = nexacro.getApplication();
        	var form = objApp.getVariable("workTC");

        	form.btnSave_onclick();

        	var strDs = objApp.gdsTC.saveXML();
        	const blob = new Blob([strDs], { type: "application/xml" });
        	const url = URL.createObjectURL(blob);

        	// a 태그 생성 및 클릭 이벤트 트리거
        	const a = document.createElement('a');
        	a.href = url;
        	a.download = this.edtFilename.value + ".xml";
        	a.click();

        	// URL 해제
        	URL.revokeObjectURL(url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chksBrowser.addEventHandler("onitemclick",this.chksBrowser_onitemclick,this);
            this.chksBrowser.addEventHandler("onitemchanged",this.chksBrowser_onitemchanged,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnTempSave.addEventHandler("onclick",this.btnTempSave_onclick,this);
        };
        this.loadIncludeScript("frmExport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
