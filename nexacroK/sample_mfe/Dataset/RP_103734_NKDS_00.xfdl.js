(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"env" : "DEV","id" : "name","label" : "서버","region" : "KR","size" : "300","type" : "STRING"},{"build" : "1.1.9991","date" : "2025-09-29","id" : "version","label" : "버전","size" : "30","type" : "STRING"}],"Column" : [{"category" : "과일","id" : "item","label" : "상품","origin" : "국산","size" : "100","type" : "STRING"},{"currency" : "KRW","id" : "price","label" : "가격","size" : "10","total" : "총합","type" : "INT"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds02", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds03", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds04", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds05", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds06", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [{"id" : "storeId","label" : "매장ID","size" : "10","type" : "INT"}],"Column" : [{"id" : "productName","label" : "제품명","size" : "100","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","20","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("label\r\n초기 값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","20","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("label\r\n초기 값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","280","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("userproperty\r\n초기 값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","280","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("userproperty\r\n초기 값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","540","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("addConstColumn\r\nlabel, userproperty\r\n값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","10","120","30",null,null,null,null,null,null,this);
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_taborder("5");
            obj.set_text("Const Column");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","110","120","30",null,null,null,null,null,null,this);
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_taborder("6");
            obj.set_text("Column");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00","139","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("label\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","139","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("label\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","399","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("userproperty\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03_00","399","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("userproperty\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04_00","659","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("addConstColumn\r\nlabel, userproperty\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","540","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("addColumn\r\nlabel, userproperty\r\n값 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05_00","659","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("addColumn\r\nlabel, userproperty\r\n값 변경 후 확인");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","20","241","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("CSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","139","241","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("SSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","20","290","1030","410",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnClear","930","241","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","258","241","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("XML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","377","241","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("JSON");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button10","800","45","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Button10");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen,mobile,medium,large,desktop",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103734_NKDS_00.xfdl", function(nexacro, system, trace, environment, application) {
        var Col0Info = this.ds00.getColumnInfo(0);
        var priceColInfo = this.ds00.getColumnInfo("price");

        var ds01 = new Dataset();
        ds01.id = "ds01";
        ds01.addColumn("customer", "string", {
                "size": 100,
                "label": "고객",
                "grade": "VIP", "contactable": "Y"
            });

        ds01.addColumn("price", "int", {
                "size": 10,
                "label": "제품",
                "currency": "USD", "discount": "가능"
            });

        ds01.addConstColumn("company", "테스트00", {
        		"type": "string",
        		"size": 20,
        		"label": "회사",
        		"env" : "PROD",
        		"region": "US"
        	});

        ds01.addConstColumn("release", "테스트01", {
        		"type": "string",
        		"size": 30,
        		"label": "릴리즈",
        		"build" : "2.0.1023",
        		"date" : "2025-10-15"
        	});

        this.tracePrint = function (str) {
        	this.TextArea00.insertText(str + "\n");
        }

        this.btnClear_onclick = function(obj,e)
        {
        	this.TextArea00.value = "";

        };

        this.Button00_onclick = function(obj,e)
        {
        	let constlabel0 = this.ds00.getConstColLabel(0);
        	let constlabel1 = this.ds00.getConstColLabel("version");

        	this.tracePrint("name.label : " + constlabel0);
        	this.tracePrint("version.label : " + constlabel1);
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	var result00 = this.ds00.setConstColLabel(0, "서버명");
        	var result01 = this.ds00.setConstColLabel("version", "버전정보");

        	this.tracePrint("name.label : " + this.ds00.getConstColLabel(0));
        	this.tracePrint("version.label : " + this.ds00.getConstColLabel("version"));
        	this.tracePrint("\n결과1: " + result00 + " | 결과2: " + result01);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.tracePrint("item.label : " + Col0Info.label);
        	this.tracePrint("price.label : " + priceColInfo.label);
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	Col0Info.label = "상품명";
        	priceColInfo.label = "비용";

        	this.tracePrint("item.label : " + Col0Info.label);
        	this.tracePrint("price.label : " + priceColInfo.label);
        };

        this.Button02_onclick = function(obj,e)
        {
        	let constuser0 = this.ds00.getConstColProp(0, "env");
        	let constuser1 = this.ds00.getConstColProp("version", "build");

        	this.tracePrint("name.env : " + constuser0);
        	this.tracePrint("version.build : " + constuser1);
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	var result00 = this.ds00.setConstColProp(0, "env", "TEST");
        	var result01 = this.ds00.setConstColProp("version", "build", "1.1.9999");

        	this.tracePrint("name.env : " + this.ds00.getConstColProp(0, "env"));
        	this.tracePrint("version.build : " + this.ds00.getConstColProp("version", "build"));
        	this.tracePrint("\n결과1: " + result00 + " | 결과2: " + result01);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.tracePrint("item.category : " + Col0Info.category);
        	this.tracePrint("item.origin : " + Col0Info.origin);
        	this.tracePrint("price.currency : " + priceColInfo.currency);
        	this.tracePrint("price.total : " + priceColInfo.total);
        };

        this.Button03_00_onclick = function(obj,e)
        {
        	Col0Info.category = "고기";
        	Col0Info.origin = "호주산";
        	priceColInfo.currency = "AUD";
        	priceColInfo.total = "전체";

        	this.tracePrint("item.category : " + Col0Info.category);
        	this.tracePrint("item.origin : " + Col0Info.origin);
        	this.tracePrint("price.currency : " + priceColInfo.currency);
        	this.tracePrint("price.total : " + priceColInfo.total);
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.tracePrint("company.label : " + ds01.getConstColLabel(0));
        	this.tracePrint("company.env : " + ds01.getConstColProp(0, "env"));
        	this.tracePrint("company.region : " + ds01.getConstColProp(0, "region"));

        	this.tracePrint("release.label : " + ds01.getConstColLabel("release"));
        	this.tracePrint("release.currency : " + ds01.getConstColProp("release", "build"));
        	this.tracePrint("release.discount : " + ds01.getConstColProp("release", "date"));
        };

        this.Button04_00_onclick = function(obj,e)
        {
        	var result00 = ds01.setConstColLabel(0, "회사명");
        	var result01 = ds01.setConstColProp(0, "env", "STG");
        	var result02 = ds01.setConstColProp(0, "region", "KR");

        	var result03 = ds01.setConstColLabel("release", "배포");
        	var result04 = ds01.setConstColProp("release", "build", "2.0.9999");
        	var result05 = ds01.setConstColProp("release", "date", "2025-10-20");

        	this.tracePrint("company.label : " + ds01.getConstColLabel(0));
        	this.tracePrint("company.env : " + ds01.getConstColProp(0, "env"));
        	this.tracePrint("company.region : " + ds01.getConstColProp(0, "region"));
        	this.tracePrint("결과: " + result00 + " | " + result01 + " | " + result02);

        	this.tracePrint("release.label : " + ds01.getConstColLabel("release"));
        	this.tracePrint("release.currency : " + ds01.getConstColProp("release", "build"));
        	this.tracePrint("release.discount : " + ds01.getConstColProp("release", "date"));
        	this.tracePrint("결과: " + result03 + " | " + result04 + " | " + result05);
        };

        this.Button05_onclick = function(obj,e)
        {
        	this.tracePrint("customer.label : " + ds01.getColumnInfo(0).label);
        	this.tracePrint("customer.grade : " + ds01.getColumnInfo(0).grade);
        	this.tracePrint("customer.contactable : " + ds01.getColumnInfo(0).contactable);

        	this.tracePrint("price.label : " + ds01.getColumnInfo("price").label);
        	this.tracePrint("price.currency : " + ds01.getColumnInfo("price").currency);
        	this.tracePrint("price.discount : " + ds01.getColumnInfo("price").discount);
        };

        this.Button05_00_onclick = function(obj,e)
        {
        	ds01.getColumnInfo(0).label = "고객명";
        	ds01.getColumnInfo(0).grade = "PRIME";
        	ds01.getColumnInfo(0).contactable = "N";

        	ds01.getColumnInfo("price").label = "제품명";
        	ds01.getColumnInfo("price").currency = "JPY";
        	ds01.getColumnInfo("price").discount = "불가능";

        	this.tracePrint("customer.label : " + ds01.getColumnInfo(0).label);
        	this.tracePrint("customer.grade : " + ds01.getColumnInfo(0).grade);
        	this.tracePrint("customer.contactable : " + ds01.getColumnInfo(0).contactable);

        	this.tracePrint("price.label : " + ds01.getColumnInfo("price").label);
        	this.tracePrint("price.currency : " + ds01.getColumnInfo("price").currency);
        	this.tracePrint("price.discount : " + ds01.getColumnInfo("price").discount);
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.ds02.addColumn("productName", "STRING", {
                "size": 100,
                "label": "제품명"
            });

            var colInfo = this.ds02.getColumnInfo("productName");
            colInfo.category = 1;    // number
            colInfo.origin = true;   // boolean

            var csvOnce = this.ds02.saveCSV();
            this.tracePrint("=== 1차 saveCSV ===");
            this.tracePrint(csvOnce);

            this.tracePrint("1차 productName.category type: " + typeof(colInfo.category));
            this.tracePrint("1차 productName.origin type: " + typeof(colInfo.origin));

            this.ds02.clearData();
            this.ds02.loadCSV(csvOnce);

            var csvTwice = this.ds02.saveCSV();
            colInfo = this.ds02.getColumnInfo("productName");
            this.tracePrint("\n=== 2차 saveCSV ===");
            this.tracePrint(csvTwice);

            this.tracePrint("2차 productName.category type: " + typeof(colInfo.category));
            this.tracePrint("2차 productName.origin type: " + typeof(colInfo.origin));
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.ds03.addConstColumn("storeId", "", {
        		"type": "INT",
        		"size": 10,
        		"label": "매장ID",
        	});

            this.ds03.setConstColProp("storeId", "env", 123);      // number
            this.ds03.setConstColProp("storeId", "region", true);  // boolean

        	this.ds03.addColumn("productName", "string", {
                "size": 100,
                "label": "제품명"
            });
            var ColInfo = this.ds03.getColumnInfo("productName");
            ColInfo.category = 1;    // number
            ColInfo.origin = true;   // boolean

            var ssvOnce = this.ds03.saveSSV();
            this.tracePrint("=== 1차 saveSSV ===");
            this.tracePrint(ssvOnce);

            this.tracePrint("1차 storeId.env type: " + typeof(this.ds03.getConstColProp("storeId", "env")));
            this.tracePrint("1차 storeId.region type: " + typeof(this.ds03.getConstColProp("storeId", "region")));
            this.tracePrint("1차 productName.category type: " + typeof(ColInfo.category));
            this.tracePrint("1차 productName.origin type: " + typeof(ColInfo.origin));

        	this.ds03.clearData();
            this.ds03.loadSSV(ssvOnce);

            var ssvTwice = this.ds03.saveSSV();
            ColInfo = this.ds03.getColumnInfo("productName");
            this.tracePrint("\n=== 2차 saveSSV ===");
            this.tracePrint(ssvTwice);

            this.tracePrint("2차 storeId.env type: " + typeof(this.ds03.getConstColProp("storeId", "env")));
            this.tracePrint("2차 storeId.region type: " + typeof(this.ds03.getConstColProp("storeId", "region")));
            this.tracePrint("2차 productName.category type: " + typeof(ColInfo.category));
            this.tracePrint("2차 productName.origin type: " + typeof(ColInfo.origin));
        };

        this.Button08_onclick = function(obj, e)
        {
            var xmlSample =
                '<ColumnInfo>' +
                '  <ConstColumn id="storeId" type="INT" size="10" label="매장ID"/>' +
                '  <Column id="productName" type="STRING" size="100" label="제품명"/>' +
                '</ColumnInfo>';

            this.ds04.clearData();
            this.ds04.loadXML(xmlSample);

        	var Col0Info = this.ds04.getColumnInfo("productName");

            this.ds04.setConstColProp("storeId", "env", 123);      // number
            this.ds04.setConstColProp("storeId", "region", true);  // boolean
            Col0Info.category = 1;    // number
            Col0Info.origin = true;  // boolean

            var xmlOnce = this.ds04.saveXML();
            this.tracePrint("=== 1차 saveXML ===");
            this.tracePrint(xmlOnce);

            this.tracePrint("1차 storeId.env type: " + typeof(this.ds04.getConstColProp("storeId", "env")));
            this.tracePrint("1차 storeId.region type: " + typeof(this.ds04.getConstColProp("storeId", "region")));
            this.tracePrint("1차 productName.category type: " + typeof(Col0Info.category));
            this.tracePrint("1차 productName.origin type: " + typeof(Col0Info.origin));

            this.ds04.clearData();
            this.ds04.loadXML(xmlOnce);

            var xmlTwice = this.ds04.saveXML();
        	Col0Info = this.ds04.getColumnInfo("productName");
            this.tracePrint("\n=== 2차 saveXML ===");
            this.tracePrint(xmlTwice);

            this.tracePrint("2차 storeId.env type: " + typeof(this.ds04.getConstColProp("storeId", "env")));
            this.tracePrint("2차 storeId.region type: " + typeof(this.ds04.getConstColProp("storeId", "region")));
        	this.tracePrint("2차 productName.category type: " + typeof(Col0Info.category));
        	this.tracePrint("2차 productName.origin type: " + typeof(Col0Info.origin));
        };

        this.Button09_onclick = function(obj, e)
        {
            var oJson = {
                "id": "ds05",
                "ColumnInfo": {
                    "ConstColumn": [
                        {
                            "id": "storeId",
                            "type": "INT",
                            "size": 10,
                            "label": "매장ID",
                            "env": 123,           // number
                            "region": true         // boolean
                        }
                    ],
                    "Column": [
                        {
                            "id": "productName",
                            "type": "STRING",
                            "size": 100,
                            "label": "제품명",
                            "category": 1,        // number
                            "origin": true        // boolean
                        }
                    ]
                },
                "Rows": [
                    { "storeId": 101, "productName": "초코칩쿠키" },
                    { "storeId": 102, "productName": "감자칩" }
                ]
            };

            var nRowCnt = this.ds05.loadJSON(JSON.stringify(oJson));
        	var Col0Info = this.ds05.getColumnInfo("productName");

            var strSavedJSON = this.ds05.saveJSON();
            this.tracePrint("=== 1차 saveJSON 결과 ===");
            this.tracePrint(strSavedJSON);

            this.tracePrint("1차 storeId.env type: " + typeof(this.ds05.getConstColProp("storeId", "env")));
            this.tracePrint("1차 storeId.region type: " + typeof(this.ds05.getConstColProp("storeId", "region")));
        	this.tracePrint("1차 productName.category type: " + typeof(Col0Info.category));
        	this.tracePrint("1차 productName.origin type: " + typeof(Col0Info.origin));

            this.ds05.clearData();
            this.ds05.loadJSON(strSavedJSON);

            var strSavedJSON2 = this.ds05.saveJSON();
        	Col0Info = this.ds05.getColumnInfo("productName");
            this.tracePrint("\n=== 2차 saveJSON 결과 ===");
            this.tracePrint(strSavedJSON2);

            this.tracePrint("2차 storeId.env type: " + typeof(this.ds05.getConstColProp("storeId", "env")));
            this.tracePrint("2차 storeId.region type: " + typeof(this.ds05.getConstColProp("storeId", "region")));
        	this.tracePrint("2차 productName.category type: " + typeof(Col0Info.category));
        	this.tracePrint("2차 productName.origin type: " + typeof(Col0Info.origin));
        };


        this.Button10_onclick = function(obj,e)
        {
        	var Col0Info = this.ds06.getColumnInfo("productName");

            this.ds06.setConstColProp("storeId", "AA", 123);	// number
            this.ds06.setConstColProp("storeId", "BB", false);	// boolean
        	this.ds06.setConstColProp("storeId", "CC", true);	// boolean
            Col0Info.AAA = 1;		// number
            Col0Info.BBB = false;	// boolean
        	Col0Info.CCC = true;	// boolean

        	this.tracePrint(this.ds06.saveXML());
        	this.tracePrint(this.ds06.saveSSV());
        	this.tracePrint(this.ds06.saveJSON());
        	this.tracePrint(this.ds06.saveCSV());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.Button03_00.addEventHandler("onclick",this.Button03_00_onclick,this);
            this.Button04_00.addEventHandler("onclick",this.Button04_00_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button05_00.addEventHandler("onclick",this.Button05_00_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
        };

        this.loadIncludeScript("RP_103734_NKDS_00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
