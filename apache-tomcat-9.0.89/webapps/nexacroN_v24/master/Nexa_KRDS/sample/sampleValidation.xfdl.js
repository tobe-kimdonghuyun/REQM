(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleValidation");
            this.set_titletext("정합성 체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "SSN","type" : "STRING","size" : "256"},{"id" : "DATE_FROM","type" : "STRING","size" : "256"},{"id" : "DATE_TO","type" : "STRING","size" : "256"},{"id" : "MAX_NUM","type" : "FLOAT","size" : "256"},{"id" : "DECIMAL","type" : "BIGDECIMAL","size" : "256"},{"id" : "COMPARE_1","type" : "STRING","size" : "256"},{"id" : "COMPARE_2","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "kimyk","DATE_FROM" : "20171201","DATE_TO" : "20171130","MAX_NUM" : "10","DECIMAL" : "1.25","COMPARE_1" : "10","COMPARE_2" : "20"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeatil", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DATE","type" : "STRING","size" : "256"},{"id" : "YYYYMM","type" : "STRING","size" : "6"},{"id" : "MAX_NUM","type" : "INT","size" : "256"},{"id" : "MIN_NUM","type" : "INT","size" : "256"},{"id" : "LENGTH_MIN","type" : "STRING","size" : "256"},{"id" : "RANGE","type" : "STRING","size" : "256"},{"id" : "CAMP","type" : "STRING","size" : "256"},{"id" : "PHONE","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataGrp", this);
            obj.set_keystring("G:Column0");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "row","type" : "FLOAT","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256","prop" : "AVG"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "red","Column3" : "1","row" : "1"},{"Column0" : "color","Column1" : "","Column2" : "yellow","Column3" : "1200","row" : "2"},{"Column0" : "color","Column1" : "cool","Column2" : "blue","Column3" : "3","row" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "navy","Column3" : "4","row" : "4"},{"Column0" : "fruits","Column1" : "acid","Column2" : "lemon","Column3" : "5","row" : "5"},{"Column0" : "fruits","Column1" : "acid","Column2" : "orange","Column3" : "1600","row" : "6"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "test","Column3" : "7","row" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "strawberry","Column3" : "8","row" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "banana","Column3" : "9","row" : "9"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDupl", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "BIGDECIMAL","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "1","Column3" : "1"},{"Column0" : "color","Column1" : "warm","Column2" : "2","Column3" : "2"},{"Column0" : "color","Column1" : "cool","Column2" : "3","Column3" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "4","Column3" : "4"},{"Column0" : "fruits","Column1" : "acid","Column2" : "5","Column3" : "5"},{"Column0" : "color","Column1" : "cool","Column2" : "6","Column3" : "9"},{"Column0" : "fruits","Column1" : "acid","Column2" : "7","Column3" : "1600"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "8","Column3" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "9","Column3" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "10","Column3" : "9"},{"Column0" : "fruits","Column1" : "acid","Column2" : "1","Column3" : "5"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDupl00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "BIGDECIMAL","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "1","Column3" : "1"},{"Column0" : "color","Column1" : "warm","Column2" : "1","Column3" : "1"},{"Column0" : "color","Column1" : "cool","Column2" : "3","Column3" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "4","Column3" : "4"},{"Column0" : "fruits","Column1" : "acid","Column2" : "1","Column3" : "5"},{"Column0" : "color","Column1" : "cool","Column2" : "3","Column3" : "9"},{"Column0" : "fruits","Column1" : "acid","Column2" : "2","Column3" : "1600"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "1","Column3" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "2","Column3" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "3","Column3" : "9"},{"Column0" : "fruits","Column1" : "acid","Column2" : "1","Column3" : "5"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","152","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("정합성 체크");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01_01:15","0","149","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Vlidation");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","0","100",null,"1200","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("1.Validation 공통함수는 아래와 같이 4개의 함수가 제공된다. \n  1) Dataset에 설정된 정합성체크 RuleSet을 Clear한다.\n       this.gfnClearValidation(this.dsList);\n  2) Dataset의 Column별로 정합성체크 Rule을 등록한다.\n       this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,minlength:5\");\n  3) Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.\n       this.gfnRemoveValidation(this.dsList, \"ID\");\n  4) Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\n       this.gfnValidation(this.dsList, \"U\");\n\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\n\n3. Validation 체크 Rule의 종류 \n required - 필수 체크\n length:7 - 길이가 7자리인지 체크\n max:7 - 값이 7 보다 큰지 체크\t\n min:7 - 값이 7 보다 작은지 체크\n maxlength:7 - 길이가 7자 보다 큰지 체크\n maxlengthbyte:7 - byte의 길이가 7보다 보다 큰지 체크\n maxlengthdec:8:4 - Decimal의 값의 길이가 정수 8자리, 소수 4자리 보다 큰지 체크\n minlength:3 - 길이가 3보다 작은지 체크\n minlengthbyte:3 - byte의 길이가 3보다 작은지 체크\n fromto:칼럼명 - 등록된 날짜가 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\n fromtosmall:칼럼명 - 등록된 날짜가 칼럼의 값 보다 작은지 예) this.gfnSetValidation(this.dsList, \"DATE_FROM\", \"시작일자,종료일자\", \"required,date,fromtosmall:DATE_TO\");\n range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\t\n isemail - 이메일 체크\n isssn - 주민번호 체크\n isbzid - 사업자등록번호 체크\n isfirmid - 법인등록번호 체크\t\n istel - 전화번호 체크\n ismobile - 핸드폰번호 체크\n isphone - 전화번호or핸드폰번호 체크\n date - 년월일형태의 날짜가 맞는지 체크\n dateym - 년월형태의 날짜가 맞는지 체크\t\n korean - 한글 여부 체크\n digits - 숫자 여부 체크\n engnum - 영문+숫자 여부 체크\n special - 특수문자 포함 여부 체크\n comparebig:칼럼명 - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparebig:MIN_NUM\");\n comparesmall:칼럼명 - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparesmall:MIN_NUM\");");
            obj.set_cssclass("txt_WF_Nochar");
            obj.set_scrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","txa00:40",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"grdCheck\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","txa00:80","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","0","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Grid Validation Check");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","553","1357","316","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDel\"/><PanelItem id=\"PanelItem01\" componentid=\"btnAdd\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdCheck\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"1357","100","48","256",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Minus");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"1357","100","48","148",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdCheck",null,"0","100","48","40",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCheck","40","112","100%","300",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"89\"/><Column size=\"95\"/><Column size=\"96\"/><Column size=\"136\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"필수,길이(5자)\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" colspan=\"2\" text=\"투입기간(from-to)\"/><Cell col=\"4\" text=\"금액/정수7/소수2\"/><Cell col=\"5\" text=\"숫자/max10\"/><Cell col=\"6\" colspan=\"2\" text=\"비교\"/><Cell row=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"1\" text=\"SSN\"/><Cell row=\"1\" col=\"2\" text=\"DATE_FROM\"/><Cell row=\"1\" col=\"3\" text=\"DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"MAX_NUM\"/><Cell row=\"1\" col=\"5\" text=\"DECIMAL\"/><Cell row=\"1\" col=\"6\" text=\"COMPARE_1\"/><Cell row=\"1\" col=\"7\" text=\"COMPARE_2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel02:40",null,"542","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divDetail\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","40","1877","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDetailCheck\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","40","1877","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Component Validation Check");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnDetailCheck","744","1867","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","40","1925","100%","388",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"calReq\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","100%","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calReq","0","0","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("[@staTitle00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel02","413","1","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTitle00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"mskYM\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","414","0","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM","51.351351351351354%","31","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_format("####-##");
            obj.set_type("string");
            obj.set_accessibilitylabel("[@staTitle00_00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","103","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtMax100\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","103","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("최대값 = 100");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMax100","0","134","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("[@staTitle01]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel04","405","134","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTitle01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtMin10\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","414","103","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("최소값 = 10");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMin10","51.351351351351354%","134","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("[@staTitle01_00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","206","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtLength3to8\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","206","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("최소길이3/최대길이8");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtLength3to8","0","237","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_accessibilitylabel("[@staTitle02]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel06","405","237","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTitle02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtRange1to100\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","414","206","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("범위 1~100");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtRange1to100","51.351351351351354%","237","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("[@staTitle02_00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","309","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCompa\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","309","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("컬럼비교 (최소값=10)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCompa","0","340","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_accessibilitylabel("[@staTitle03]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel08","414","309","48.635235732009924%","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPhone\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","414","309","392","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPhone","0","340","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_accessibilitylabel("[@staTitle03_00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","Panel04:40",null,"504","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"grdDatasetProp\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","46","2500","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","40","2430","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Group 지정시  Validation Check");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","610","2509","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDupDsCheck\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDupCheck\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDupDsCheck",null,"2509","140","48","138",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("데이타셋 체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnDupCheck",null,"2509","100","48","40",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDatasetProp","41","2560","100%","350",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsDataGrp");
            obj.set_selecttype("row");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"rowLevel\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 1 ? &quot;&quot; : row\" text=\"bind:row\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Column0\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow) == 0 ? Column0 : &apos;평균&apos;\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:Column2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow)\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getSum(&apos;Column3&apos;)\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","Panel07:40",null,"475","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem01\" componentid=\"grdDup\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","2976","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrpCheck\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","40","2976","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("중복된 row 검사");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrpCheck",null,"2989","100","48","40",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDup","40","3086","100%","321",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("dsDupl");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" editinputfilter=\"digit\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" edittype=\"mask\" editinputtype=\"digit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0","48.635235732009924%","79",null,null);

                p.staTitle00.set_taborder("1");
                p.staTitle00.set_text("필수(날짜)");
                p.staTitle00.set_cssclass("sta_WF_Label");
                p.staTitle00.move("0","0","100%","23",null,null);

                p.calReq.set_taborder("2");
                p.calReq.set_accessibilitylabel("[@staTitle00]");
                p.calReq.move("0","0","100%","48",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("8");
                p.Panel02.set_flexgrow("1");
                p.Panel02.move("413","1","48.635235732009924%","79",null,null);

                p.staTitle00_00.set_taborder("4");
                p.staTitle00_00.set_text("년월");
                p.staTitle00_00.set_cssclass("sta_WF_Label");
                p.staTitle00_00.move("414","0","392","23",null,null);

                p.mskYM.set_taborder("5");
                p.mskYM.set_format("####-##");
                p.mskYM.set_type("string");
                p.mskYM.set_accessibilitylabel("[@staTitle00_00]");
                p.mskYM.move("51.351351351351354%","31","100%","48",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("8");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("0","103","48.635235732009924%","79",null,null);

                p.staTitle01.set_taborder("7");
                p.staTitle01.set_text("최대값 = 100");
                p.staTitle01.set_cssclass("sta_WF_Label");
                p.staTitle01.move("0","103","392","23",null,null);

                p.edtMax100.set_taborder("8");
                p.edtMax100.set_accessibilitylabel("[@staTitle01]");
                p.edtMax100.move("0","134","100%","48",null,null);

                p.Panel04.set_taborder("9");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("8");
                p.Panel04.set_flexgrow("1");
                p.Panel04.move("405","134","48.635235732009924%","79",null,null);

                p.staTitle01_00.set_taborder("10");
                p.staTitle01_00.set_text("최소값 = 10");
                p.staTitle01_00.set_cssclass("sta_WF_Label");
                p.staTitle01_00.move("414","103","392","23",null,null);

                p.edtMin10.set_taborder("11");
                p.edtMin10.set_accessibilitylabel("[@staTitle01_00]");
                p.edtMin10.move("51.351351351351354%","134","100%","48",null,null);

                p.Panel05.set_taborder("12");
                p.Panel05.set_flexwrap("wrap");
                p.Panel05.set_verticalgap("8");
                p.Panel05.set_flexgrow("1");
                p.Panel05.move("0","206","48.635235732009924%","79",null,null);

                p.staTitle02.set_taborder("13");
                p.staTitle02.set_text("최소길이3/최대길이8");
                p.staTitle02.set_cssclass("sta_WF_Label");
                p.staTitle02.move("0","206","392","23",null,null);

                p.edtLength3to8.set_taborder("14");
                p.edtLength3to8.set_accessibilitylabel("[@staTitle02]");
                p.edtLength3to8.move("0","237","100%","48",null,null);

                p.Panel06.set_taborder("15");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_verticalgap("8");
                p.Panel06.set_flexgrow("1");
                p.Panel06.move("405","237","48.635235732009924%","79",null,null);

                p.staTitle02_00.set_taborder("16");
                p.staTitle02_00.set_text("범위 1~100");
                p.staTitle02_00.set_cssclass("sta_WF_Label");
                p.staTitle02_00.move("414","206","392","23",null,null);

                p.edtRange1to100.set_taborder("17");
                p.edtRange1to100.set_accessibilitylabel("[@staTitle02_00]");
                p.edtRange1to100.move("51.351351351351354%","237","100%","48",null,null);

                p.Panel07.set_taborder("18");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_verticalgap("8");
                p.Panel07.set_flexgrow("1");
                p.Panel07.move("0","309","48.635235732009924%","79",null,null);

                p.staTitle03.set_taborder("19");
                p.staTitle03.set_text("컬럼비교 (최소값=10)");
                p.staTitle03.set_cssclass("sta_WF_Label");
                p.staTitle03.move("0","309","392","23",null,null);

                p.edtCompa.set_taborder("20");
                p.edtCompa.set_accessibilitylabel("[@staTitle03]");
                p.edtCompa.move("0","340","100%","48",null,null);

                p.Panel08.set_taborder("21");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.set_verticalgap("8");
                p.Panel08.set_flexgrow("1");
                p.Panel08.move("414","309","48.635235732009924%","79",null,null);

                p.staTitle03_00.set_taborder("22");
                p.staTitle03_00.set_text("전화번호");
                p.staTitle03_00.set_cssclass("sta_WF_Label");
                p.staTitle03_00.move("414","309","392","23",null,null);

                p.edtPhone.set_taborder("23");
                p.edtPhone.set_accessibilitylabel("[@staTitle03_00]");
                p.edtPhone.move("0","340","100%","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("Layout0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("0","0","100%","79",null,null);

                p.Panel02.move("413","1","100%","79",null,null);

                p.Panel03.move("0","103","100%","79",null,null);

                p.Panel04.move("405","134","100%","79",null,null);

                p.Panel05.move("0","206","100%","79",null,null);

                p.Panel06.move("405","237","100%","79",null,null);

                p.Panel07.move("0","309","100%","79",null,null);

                p.Panel08.move("414","309","100%","79",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,3530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("정합성 체크");

                p.Static00.set_taborder("0");
                p.Static00.set_text("정합성 체크");
                p.Static00.set_cssclass("sta_WF_H3_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","152","60",null,null);

                p.Static01_01.set_taborder("1");
                p.Static01_01.set_cssclass("sta_WF_line");
                p.Static01_01.set_accessibilityenable("false");
                p.Static01_01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Vlidation");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01_01:15","0","149","60",null,null);

                p.txa00.set_taborder("3");
                p.txa00.set_value("1.Validation 공통함수는 아래와 같이 4개의 함수가 제공된다. \n  1) Dataset에 설정된 정합성체크 RuleSet을 Clear한다.\n       this.gfnClearValidation(this.dsList);\n  2) Dataset의 Column별로 정합성체크 Rule을 등록한다.\n       this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,minlength:5\");\n  3) Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.\n       this.gfnRemoveValidation(this.dsList, \"ID\");\n  4) Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\n       this.gfnValidation(this.dsList, \"U\");\n\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\n\n3. Validation 체크 Rule의 종류 \n required - 필수 체크\n length:7 - 길이가 7자리인지 체크\n max:7 - 값이 7 보다 큰지 체크\t\n min:7 - 값이 7 보다 작은지 체크\n maxlength:7 - 길이가 7자 보다 큰지 체크\n maxlengthbyte:7 - byte의 길이가 7보다 보다 큰지 체크\n maxlengthdec:8:4 - Decimal의 값의 길이가 정수 8자리, 소수 4자리 보다 큰지 체크\n minlength:3 - 길이가 3보다 작은지 체크\n minlengthbyte:3 - byte의 길이가 3보다 작은지 체크\n fromto:칼럼명 - 등록된 날짜가 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\n fromtosmall:칼럼명 - 등록된 날짜가 칼럼의 값 보다 작은지 예) this.gfnSetValidation(this.dsList, \"DATE_FROM\", \"시작일자,종료일자\", \"required,date,fromtosmall:DATE_TO\");\n range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\t\n isemail - 이메일 체크\n isssn - 주민번호 체크\n isbzid - 사업자등록번호 체크\n isfirmid - 법인등록번호 체크\t\n istel - 전화번호 체크\n ismobile - 핸드폰번호 체크\n isphone - 전화번호or핸드폰번호 체크\n date - 년월일형태의 날짜가 맞는지 체크\n dateym - 년월형태의 날짜가 맞는지 체크\t\n korean - 한글 여부 체크\n digits - 숫자 여부 체크\n engnum - 영문+숫자 여부 체크\n special - 특수문자 포함 여부 체크\n comparebig:칼럼명 - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparebig:MIN_NUM\");\n comparesmall:칼럼명 - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparesmall:MIN_NUM\");");
                p.txa00.set_cssclass("txt_WF_Nochar");
                p.txa00.set_scrolltype("horizontal");
                p.txa00.move("0","100",null,"1200","0",null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("24");
                p.Panel02.set_spacing("40px");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","txa00:40",null,"500","0",null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("40","txa00:80","100%","48",null,null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("Grid Validation Check");
                p.Static01.set_cssclass("sta_WF_ParaH4_pc");
                p.Static01.set_flexgrow("1");
                p.Static01.set_accessibilityrole("heading4");
                p.Static01.move("40","0","300","48",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("553","1357","316","48",null,null);

                p.btnDel.set_taborder("8");
                p.btnDel.set_text("행삭제");
                p.btnDel.set_cssclass("btn_WF_Minus");
                p.btnDel.move(null,"1357","100","48","256",null);

                p.btnAdd.set_taborder("9");
                p.btnAdd.set_text("행추가");
                p.btnAdd.set_cssclass("btn_WF_Add");
                p.btnAdd.move(null,"1357","100","48","148",null);

                p.btnGrdCheck.set_taborder("10");
                p.btnGrdCheck.set_text("체크");
                p.btnGrdCheck.set_cssclass("btn_WF_Search");
                p.btnGrdCheck.move(null,"0","100","48","40",null);

                p.grdCheck.set_taborder("11");
                p.grdCheck.set_binddataset("dsList");
                p.grdCheck.set_tabstop("false");
                p.grdCheck.move("40","112","100%","300",null,null);

                p.Panel04.set_taborder("12");
                p.Panel04.set_verticalgap("24");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_spacing("40px");
                p.Panel04.set_cssclass("pnl_WF_Detailbox");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","Panel02:40",null,"542","0",null);

                p.Panel03.set_taborder("13");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("24");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.move("40","1877","100%","48",null,null);

                p.Static01_00.set_taborder("14");
                p.Static01_00.set_text("Component Validation Check");
                p.Static01_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static01_00.set_flexgrow("1");
                p.Static01_00.set_accessibilityrole("heading4");
                p.Static01_00.move("40","1877","320","48",null,null);

                p.btnDetailCheck.set_taborder("15");
                p.btnDetailCheck.set_text("체크");
                p.btnDetailCheck.set_cssclass("btn_WF_Search");
                p.btnDetailCheck.move("744","1867","100","48",null,null);

                p.divDetail.set_taborder("16");
                p.divDetail.set_text("div00");
                p.divDetail.set_fittocontents("height");
                p.divDetail.move("40","1925","100%","388",null,null);

                p.Panel07.set_taborder("17");
                p.Panel07.set_flexwrap("wrap");
                p.Panel07.set_spacing("40px");
                p.Panel07.set_verticalgap("24");
                p.Panel07.set_cssclass("pnl_WF_Detailbox");
                p.Panel07.set_fittocontents("height");
                p.Panel07.move("0","Panel04:40",null,"504","0",null);

                p.Panel06.set_taborder("18");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_verticalgap("24");
                p.Panel06.move("46","2500","100%","48",null,null);

                p.Static01_00_00.set_taborder("19");
                p.Static01_00_00.set_text("Group 지정시  Validation Check");
                p.Static01_00_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static01_00_00.set_flexgrow("1");
                p.Static01_00_00.set_accessibilityrole("heading4");
                p.Static01_00_00.move("40","2430","300","48",null,null);

                p.Panel05.set_taborder("20");
                p.Panel05.set_horizontalgap("8");
                p.Panel05.move("610","2509","230","48",null,null);

                p.btnDupDsCheck.set_taborder("21");
                p.btnDupDsCheck.set_text("데이타셋 체크");
                p.btnDupDsCheck.set_cssclass("btn_WF_Search");
                p.btnDupDsCheck.move(null,"2509","140","48","138",null);

                p.btnDupCheck.set_taborder("22");
                p.btnDupCheck.set_text("체크");
                p.btnDupCheck.set_cssclass("btn_WF_Search");
                p.btnDupCheck.move(null,"2509","100","48","40",null);

                p.grdDatasetProp.set_taborder("23");
                p.grdDatasetProp.set_binddataset("dsDataGrp");
                p.grdDatasetProp.set_selecttype("row");
                p.grdDatasetProp.set_tabstop("false");
                p.grdDatasetProp.move("41","2560","100%","350",null,null);

                p.Panel09.set_taborder("24");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_verticalgap("24");
                p.Panel09.set_spacing("40px");
                p.Panel09.set_cssclass("pnl_WF_Detailbox");
                p.Panel09.move("0","Panel07:40",null,"475","0",null);

                p.Panel08.set_taborder("25");
                p.Panel08.set_fittocontents("height");
                p.Panel08.set_flexwrap("wrap");
                p.Panel08.move("0","2976","100%","48",null,null);

                p.Static01_00_00_00.set_taborder("26");
                p.Static01_00_00_00.set_text("중복된 row 검사");
                p.Static01_00_00_00.set_cssclass("sta_WF_ParaH4_pc");
                p.Static01_00_00_00.set_flexgrow("1");
                p.Static01_00_00_00.set_accessibilityrole("heading4");
                p.Static01_00_00_00.move("40","2976","280","48",null,null);

                p.btnGrpCheck.set_taborder("27");
                p.btnGrpCheck.set_text("체크");
                p.btnGrpCheck.set_cssclass("btn_WF_Search");
                p.btnGrpCheck.move(null,"2989","100","48","40",null);

                p.grdDup.set_taborder("28");
                p.grdDup.set_binddataset("dsDupl");
                p.grdDup.set_selecttype("row");
                p.grdDup.set_autoenter("select");
                p.grdDup.move("40","3086","100%","321",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,4200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_spacing("23px");
                p.Panel02.move("0","txa00:40",null,"484","0",null);

                p.Static01.move("40","0","280","48",null,null);

                p.Panel01.set_flexgrow("1");
                p.Panel01.set_verticalgap("16");
                p.Panel01.move("40","23","90.00%","112",null,null);

                p.Panel03.set_flexgrow("1");
                p.Panel03.set_verticalgap("16");
                p.Panel03.move("40","1877","90.00%","112",null,null);

                p.Panel04.set_spacing("23px");
                p.Panel04.move("0","Panel02:40",null,"984","0",null);

                p.divDetail.set_flexgrow("1");
                p.divDetail.move("40","1925","100%","800",null,null);

                p.Panel07.set_spacing("23px");
                p.Panel07.move("0","Panel04:40",null,"534","0",null);

                p.Panel06.set_flexgrow("1");
                p.Panel06.set_verticalgap("16");
                p.Panel06.move("46","2500","100%","112",null,null);

                p.Static01_00_00_00.move("40","2976","360","48",null,null);

                p.Panel08.set_verticalgap("16");
                p.Panel08.set_flexgrow("1");
                p.Panel08.move("0","2976","100%","112",null,null);

                p.Panel09.set_spacing("23px");
                p.Panel09.move("0","Panel07:40",null,"505","0",null);

                p.txa00.move("0","104",null,"1200","0",null);

                p.grdDup.move("40","3086","100%","321",null,null);

                p.Static01_00.move("40","1877","360","48",null,null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.calReq","value","dsDeatil","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtMax100","value","dsDeatil","MAX_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtMin10","value","dsDeatil","MIN_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtLength3to8","value","dsDeatil","LENGTH_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtRange1to100","value","dsDeatil","RANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtCompa","value","dsDeatil","CAMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtPhone","value","dsDeatil","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.mskYM","value","dsDeatil","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleValidation.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleValidation.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/02
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        /*
        == Validation 체크 Rule의 종류 ==
         required 	- 필수 체크
         length:7 	- 길이가 7자리인지 체크
         max:7 		- 값이 7 보다 큰지 체크
         min:7 		- 값이 7 보다 작은지 체크
         maxlength:7 - 길이가 7자 보다 큰지 체크
         maxlengthbyte:7  - byte의 길이가 7보다 보다 큰지 체크
         maxlengthdec:8:4 - Decimal의 값의 길이가 정수 8자리, 소수 4자리 보다 큰지 체크
         minlength:3	  - 길이가 3보다 작은지 체크
         minlengthbyte:3  - byte의 길이가 3보다 작은지 체크
         fromto:칼럼명	  - 등록된 날짜가 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "DATE_TO", "종료일자,시작일자", "required,date,fromto:DATE_FROM");
         fromtosmall:칼럼명 - 등록된 날짜가 칼럼의 값 보다 작은지 예) this.gfnSetValidation(this.dsList, "DATE_FROM", "시작일자,종료일자", "required,date,fromtosmall:DATE_TO");
         range:40:100  	  - 값이 40 ~ 100 사이의 값인지 체크
         isemail 	- 이메일 체크
         isssn 		- 주민번호 체크
         isbzid 	- 사업자등록번호 체크
         isfirmid 	- 법인등록번호 체크
         istel 		- 전화번호 체크
         ismobile 	- 핸드폰번호 체크
         isphone 	- 전화번호or핸드폰번호 체크
         date 		- 년월일형태의 날짜가 맞는지 체크
         dateym 	- 년월형태의 날짜가 맞는지 체크
         korean 	- 한글 여부 체크
         digits 	- 숫자 여부 체크
         engnum 	- 영문+숫자 여부 체크
         special 	- 특수문자 포함 여부 체크
         comparebig:칼럼명 - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList2, "CAMP", "비교,최소값", "required,comparebig:MIN_NUM");
         comparesmall:칼럼명 - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList2, "CAMP", "비교,최소값", "required,comparesmall:MIN_NUM");
        */
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        };

        this.btnDel_onclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;
        	this.dsList.deleteRow(nRow);
        };

        this.btnGrdCheck_onclick = function(obj,e)
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "ID"			, "아이디"				, "required,minlength:3,maxlength:8");
        	this.gfnSetValidation(this.dsList, "SSN"		, "주민번호"			, "required,isssn");
        	this.gfnSetValidation(this.dsList, "DATE_FROM"	, "시작일자,종료일자"	, "required,date");
        	this.gfnSetValidation(this.dsList, "DATE_TO"	, "종료일자,시작일자"	, "required,date,fromto:DATE_FROM");
        	this.gfnSetValidation(this.dsList, "MAX_NUM"	, "금액"				, "required,digits,maxlengthdec:7:2");
        	this.gfnSetValidation(this.dsList, "DECIMAL"	, "최대값"				, "required,digits,max:10");
        	this.gfnSetValidation(this.dsList, "COMPARE_1"	, "COMPARE_1,COMPARE_2"	, "comparebig:COMPARE_2");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdCheck, "U") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDetailCheck_onclick = function(obj,e)
        {
        	if (this.dsDeatil.rowcount == 0) {
        		var nRow = this.dsDeatil.addRow();
        		this.dsDeatil.setColumn(nRow, "DATE", this.gfnGetDate());
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsDeatil);
        	this.gfnSetValidation(this.dsDeatil, "DATE"			, "필수(날짜)"				, "required,date");
        	this.gfnSetValidation(this.dsDeatil, "YYYYMM"		, "년월"					, "required,dateym");
        	this.gfnSetValidation(this.dsDeatil, "MAX_NUM"		, "최대값 = 100"			, "required,digits,max:100");
        	this.gfnSetValidation(this.dsDeatil, "MIN_NUM"		, "최소값 = 10"			, "required,digits,min:10");
        	this.gfnSetValidation(this.dsDeatil, "LENGTH_MIN"	, "최소길이3/최대길이8"	, "required,minlength:3,maxlength:8");
        	this.gfnSetValidation(this.dsDeatil, "RANGE"		, "범위 1~100"				, "required,digits,range:1:100");
        	this.gfnSetValidation(this.dsDeatil, "CAMP"			, "컬럼비교 (최소값=10)"	, "required,comparebig:MIN_NUM");
        	this.gfnSetValidation(this.dsDeatil, "PHONE"		, "전화번호"				, "required,isphone");

        	// 전체 Row Validation check
         	if (this.gfnValidation(this.dsDeatil, "A") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnGrpCheck_onclick = function(obj,e)
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsDataGrp);

        	this.gfnSetValidation(this.dsDataGrp, "Column0", "색상", "required");
        	this.gfnSetValidation(this.dsDataGrp, "Column1", "온도", "required");

        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.grdDatasetProp, "A") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDupCheck_onclick = function(obj,e)
        {
        	var nRow = this.gfnChkDuplicateData(this.dsDupl, "Column0,Column1,Column2", this.dsDupl.rowposition);

        	if (nRow > -1) {
        		this.gfnAlert("msg.err.validator.duplcation",[nRow+"번째 로우"]);
        		this.dsDupl.set_rowposition(nRow);
        		this.grdDup.setCellPos(2);
        		this.grdDup.showEditor(true);
        		return;
        	}

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDupDsCheck_onclick = function(obj,e)
        {
        	var nRow = this.gfnDuplicateData(this.dsDupl, "Column0,Column1,Column2");

        	if (nRow > -1) {
        		this.gfnAlert("msg.err.validator.duplcation",[nRow+"번째 로우"]);
        		this.dsDupl.set_rowposition(nRow);
        		this.grdDup.setCellPos(2);
        		this.grdDup.showEditor(true);
        		return;
        	}
        	trace("Validation이 통과 되었습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnGrdCheck.addEventHandler("onclick",this.btnGrdCheck_onclick,this);
            this.btnDetailCheck.addEventHandler("onclick",this.btnDetailCheck_onclick,this);
            this.btnDupDsCheck.addEventHandler("onclick",this.btnDupDsCheck_onclick,this);
            this.btnDupCheck.addEventHandler("onclick",this.btnDupCheck_onclick,this);
            this.btnGrpCheck.addEventHandler("onclick",this.btnGrpCheck_onclick,this);
            this.dsDataGrp.addEventHandler("onrowposchanged",this.dsSample00_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
