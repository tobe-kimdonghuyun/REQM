(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S31");
            this.set_titletext("입주자담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입주자 담당자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01","0","staSubTitle:0","100.00%","303",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("1");
            obj.set_text("입주자담당자의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","86",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Radio("Radio01","74","77","393","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("10");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_01_form_Radio01_innerdataset = new nexacro.NormalDataset("div00_01_form_Radio01_innerdataset", obj);
            div00_01_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_form_Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("3");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("회사명");
            obj.set_text("");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01","970","315","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("성명");
            obj.set_text("");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","305","86",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("11");
            obj.set_text("입주자담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div00_01.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","138","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("12");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_01.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("13");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","46",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("15");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("16");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_01.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","100.00%","111",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.div00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01.form
            obj = new Layout("default","",0,0,this.div00_01.form,
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
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("입주자담당자의 동일여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","86",null,null);

                p.Radio01.set_taborder("10");
                p.Radio01.set_fittocontents("width");
                p.Radio01.set_innerdataset(div00_01_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("74","77","393","40",null,null);

                p.staLabel03_00.set_taborder("3");
                p.staLabel03_00.set_text("회사명");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("4");
                p.edt00_02.set_displaynulltext("회사명");
                p.edt00_02.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_01.set_taborder("7");
                p.staLabel03_01.set_text("성명");
                p.staLabel03_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edt00_03_01.set_taborder("8");
                p.edt00_03_01.set_displaynulltext("성명");
                p.edt00_03_01.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("9");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","305","86",null,null);

                p.staLabel00_02.set_taborder("11");
                p.staLabel00_02.set_text("입주자담당자의 개인정보수집 및 이용동의서");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("동의서 양식 다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("813","76","138","40",null,null);

                p.btn_file_1.set_taborder("13");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile.set_taborder("14");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","46",null,null);

                p.panTitle.set_taborder("15");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("0","124","100%","46",null,null);

                p.Grid00.set_taborder("16");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.panFile.set_taborder("17");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","100.00%","111",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01.form
            obj = new Layout("mobile","",0,0,this.div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00_01.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_01.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_01.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("CST002S31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
