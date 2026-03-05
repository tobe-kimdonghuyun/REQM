(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmImport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTC_Temp", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSheet", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"sheetKey\" type=\"STRING\" size=\"256\"/><Column id=\"sheetData\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowser", this);
            obj._setContents("<ColumnInfo><Column id=\"browserCode\" type=\"STRING\" size=\"256\"/><Column id=\"browserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"browserCode\">1</Col><Col id=\"browserName\">ALL</Col></Row><Row><Col id=\"browserCode\">2</Col><Col id=\"browserName\">Chrome</Col></Row><Row><Col id=\"browserCode\">3</Col><Col id=\"browserName\">Edge</Col></Row><Row><Col id=\"browserCode\">4</Col><Col id=\"browserName\">Safari</Col></Row><Row><Col id=\"browserCode\">5</Col><Col id=\"browserName\">Opera</Col></Row><Row><Col id=\"browserCode\">6</Col><Col id=\"browserName\">Windows_NRE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnDialog","10","20","186","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("JEBI 엑셀파일 가져오기");
            this.addChild(obj.name, obj);

            obj = new Div("divDrop","10","74",null,"116","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("여기에 파일 넣기 (엑셀 파일 1개만 가능함)");
            obj.set_background("white");
            obj.set_border("2px dashed silver");
            obj.set_color("silver");
            this.addChild(obj.name, obj);

            obj = new Static("stExplain","10","205","345","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Import 할 Sheet를 아래에서 선택 후 버튼을 눌러주세요.");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_wordWrap("char");
            obj.set_wordSpacing("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnImportSheet","365","210",null,"41","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Data 변환");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSheet","15","261",null,"229","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSheet");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"234\"/><Column size=\"152\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"Sheet 명\"/><Cell col=\"2\" text=\"대상 브라우저\"/></Band><Band id=\"body\"><Cell text=\"bind:check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:sheetKey\"/><Cell col=\"2\" combodataset=\"dsBrowser\" combocodecol=\"browserName\" combodatacol=\"browserName\" edittype=\"combo\" displaytype=\"combocontrol\" text=\"bind:browser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDrop
            obj = new Layout("default","",0,0,this.divDrop.form,function(p){});
            this.divDrop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",460,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmImport.xfdl", function() {
        this.sheetData;

        this.frmImport_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	this.dsBrowser.clearData();
        	this.dsBrowser.copyData(objApp.gdsBrowserType);
        };

        this.btnDialog_onclick = function(obj,e)
        {
        	this.FileDialog.open( "FileOpen", FileDialog.LOAD );

        };

        this.FileDialog_onclose = function(obj,e)
        {
        	this.fnReadFile(e.virtualfiles);
        };

        this.fnReadFile = function(filelist)
        {
        	var pThis = this;

        	this.divDrop.text = "excel 파일 읽는 중 ...";

        	if(filelist)
        	{
        		if ( /\.(xlsx|XLSX)$/i.test(filelist[0].filename) ) {
        		  var reader = new FileReader();

        		  reader.targetForm = this;

        		  reader.addEventListener("load", function (e) {
        			//reader.targetForm.setXmltoDs();

        				const data = new Uint8Array(e.target.result);
        				const workbook = XLSX.read(data, { type: 'array' });
        				const sheetObjects = {};

        				workbook.SheetNames.forEach(sheetName => {
        					const worksheet = workbook.Sheets[sheetName];
        					const json = XLSX.utils.sheet_to_json(worksheet);
        					const xml = jsonToXml(json, sheetName);

        					// 각 시트의 이름을 키로 하고, 데이터를 구조적으로 저장
        					sheetObjects[sheetName] = {
        						jsonData: json,
        						xmlData: xml
        					};
        				});


        				//reader.targetForm.setXmltoDs(sheetObjects);
        				pThis.sheetData = sheetObjects;
        				reader.targetForm.setSheetInfo(sheetObjects);


        				pThis.divDrop.text = "여기에 파일 넣기 (엑셀 파일 1개만 가능함)";

        				function jsonToXml(json, sheetName) {
        					let xml = `<${sheetName}>\n`;
        					json.forEach(row => {
        						xml += '  <row>\n';

        						for (let key in row) {
        							xml += `    <${key}>${row[key]}</${key}>\n`;
        						}

        						xml += '  </row>\n';
        					});

        					xml += `</${sheetName}>`;
        					return xml;
        				}
        		  }, false);

        		  reader.readAsArrayBuffer(filelist[0]._handle);
        		}
        	}
        }

        this.setSheetInfo = function(sheetObjects)
        {
        	var objApp = nexacro.getApplication();
        	var keys = Object.keys(sheetObjects);
        	var i, idx;

        	this.dsSheet.clearData();

        	for (i = 0; i < keys.length; i++)
        	{
        		var sheetKey = keys[i];
        		var jsonData = sheetObjects[sheetKey].jsonData;

        		idx = this.dsSheet.addRow();
        		this.dsSheet.setColumn(idx, "sheetKey", sheetKey);
        		//this.dsSheet.setColumn(idx, "sheetData", jsonData);
        	}
        }

        this.setXmltoDs = function(sheetObjects)
        {
        	var objApp = nexacro.getApplication();
        	var keys = Object.keys(sheetObjects);
        	var len = keys.length;
        	var nIdx, i, j, k, m;

        	this.dsTC.clearData();

        	len = this.dsSheet.getCaseCount("check == 1");

        	if ( len == 0 )
        	{
        		alert("선택한 sheet가 없습니다. 확인해주세요");
        		return;
        	}

        	for ( i = 0; i < this.dsSheet.rowcount; i++ )
        	{
        		var chk = this.dsSheet.getColumn(i, "check");

        		if( chk == 1 )
        		{
        			var browser = this.dsSheet.getColumn(i, "browser");
        			var sheetKey = keys[i];	// 엑셀 sheet 명
        			var jsonData = sheetObjects[sheetKey].jsonData; // 엑셀 sheet의 org data

        			if ( browser === undefined )
        			{
        				browser = 1;
        			}

        			for (j = 0; j < jsonData.length; j++)
        			{
        				var columnIds = Object.keys(jsonData[j]); // 엑셀 sheet의 column data

        				nIdx = this.dsTC.addRow();

        				for (k = 0; k < columnIds.length; k++)
        				{
        					var columnId = columnIds[k];
        					var columnValue = jsonData[j][columnId];

        					if ( columnId == "browser" )
        					{
        						this.dsTC.setColumn(nIdx, columnId, browser);
        					}
        					else
        					{
        						this.dsTC.setColumn(nIdx, columnId, columnValue);
        					}
        				}
        			}
        		}
        	}


        	// TC를 작성할때는 browser == all 값이 있어야 한다.
        	// chrome 기준으로 all 을 만든다. chrome 없으면 다른 브라우저로 복사하도록 한다.
        	len = this.dsTC.rowcount;

        	var cols = ["browser", "action", "ime", "compareType"];
        	for (i = 0; i < len; i++)
        	{
        		for ( j = 0; j < cols.length; j++ )
        		{
        			var key = this.dsTC.getColumn(i, cols[j]);
        			var value = this.convertCode(cols[j], key);

        			this.dsTC.setColumn(i, cols[j], value);
        		}
        	}

        	//trace(this.dsTC.saveXML());
        	if ( len > 0 )
        	{
        		// 크롬기준으로 all 데이터를 만든다.
        		nIdx = objApp.gdsBrowserType.findRow("browserName", "Chrome");
        		var code = objApp.gdsBrowserType.getColumn(nIdx, "browserCode");

        		this.dsTC.filter("browser == " + code);

        		if ( this.dsTC.rowcount > 0 )	// 크롬이 있다.
        		{
        			this.dsTC_Temp.clearData();
        			this.dsTC_Temp.copyData(this.dsTC, true);
        		}

        		this.dsTC.filter("");

        		for ( i = 0; i < this.dsTC_Temp.rowcount; i++ )
        		{
        			nIdx = this.dsTC.addRow();
        			this.dsTC.copyRow(nIdx, this.dsTC_Temp, i);
        			this.dsTC.setColumn(nIdx, "browser", "1");
        		}
        	}
        	objApp.workTC.dsCopy(this.dsTC);
        	objApp.workTC.btnImport_onclick();
        };

        this.convertCode = function(id, value)
        {
        	var objApp = nexacro.getApplication();
        	var nIdx;

        	switch ( id )
        	{
        	case "browser" :
        		value = objApp.getBrowserName(value);
        		nIdx = objApp.gdsBrowserType.findRow("browserName", value);

        		return objApp.gdsBrowserType.getColumn(nIdx, "browserCode");

        	case "action" :
        		nIdx = objApp.gdsActionType.findRow("actionData", value);

        		return objApp.gdsActionType.getColumn(nIdx, "actionCode");

        	case "ime" :
        		nIdx = objApp.gdsImeType.findRow("imeData", value);

        		return objApp.gdsImeType.getColumn(nIdx, "imeCode");

        	case "compareType" :
        		nIdx = objApp.gdsCompareType.findRow("compareData", value);

        		return objApp.gdsCompareType.getColumn(nIdx, "compareCode");
        	}

        	return "";
        }


        this.divDrop_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnReadFile(e.filelist);
        	}
        };

        this.btnImportSheet_onclick = function(obj,e)
        {
        	var i, arr = [];

        	this.setXmltoDs(this.sheetData);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmImport_onload,this);
            this.btnDialog.addEventHandler("onclick",this.btnDialog_onclick,this);
            this.divDrop.addEventHandler("ondrop",this.divDrop_ondrop,this);
            this.btnImportSheet.addEventHandler("onclick",this.btnImportSheet_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("frmImport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
