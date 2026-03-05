(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide03");
            this.set_titletext("grd, tree, cellclass, lstv");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,4280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lsvt", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BodyTitle","type" : "STRING","size" : "256"},{"id" : "BodyText","type" : "STRING","size" : "256"},{"id" : "BodyProgress","type" : "STRING","size" : "256"},{"id" : "BodyButton","type" : "STRING","size" : "256"},{"id" : "DetailTitle","type" : "STRING","size" : "256"},{"id" : "DetailText","type" : "STRING","size" : "256"},{"id" : "Images","type" : "STRING","size" : "256"}]},"Rows" : [{"BodyTitle" : "아코디언01","DetailText" : "UXPro & KRDS Description 01","DetailTitle" : "UXPro & KRDS","Images" : "theme::NexaKRDS/images/lsvt_WF_img.png","BodyText" : "아코디언 Description","BodyProgress" : "45","BodyButton" : "버튼"},{"BodyTitle" : "아코디언02","DetailText" : "UXPro & KRDS Description 02","DetailTitle" : "UXPro & KRDS","Images" : "theme::NexaKRDS/images/lsvt_WF_img.png","BodyText" : "아코디언 Description","BodyProgress" : "45","BodyButton" : "버튼"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "lev","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"lev" : "0","data" : "1뎁스메뉴"},{"lev" : "1","data" : "2뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "0","data" : "1뎁스메뉴"},{"lev" : "1","data" : "2뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"lev" : "2","data" : "3뎁스메뉴"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "1뎁스메뉴","lev" : "0"},{"data" : "2뎁스메뉴","lev" : "1"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"data" : "3뎁스메뉴","lev" : "2"},{"lev" : "2","data" : "3뎁스메뉴"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign_0","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DoubleHead", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "no","type" : "STRING","size" : "256"},{"id" : "Double","type" : "STRING","size" : "256"},{"id" : "Check","type" : "STRING","size" : "256"},{"id" : "yyMM","type" : "STRING","size" : "256"},{"id" : "yyMMdd","type" : "STRING","size" : "256"},{"id" : "Null","type" : "STRING","size" : "256"},{"id" : "Text","type" : "STRING","size" : "256"},{"id" : "Number","type" : "STRING","size" : "256"}]},"Rows" : [{"no" : "01","Double" : "가나다라마바사아","yyMM" : "2025.12","yyMMdd" : "2025.12.30","Null" : "미정","Text" : "가나다라","Number" : "1,000,000"},{"no" : "02","Double" : "가나다라마바사아","yyMM" : "2025.12","yyMMdd" : "2025.12.30","Null" : "미정","Text" : "가나다라","Number" : "1,000,000"},{"no" : "03","Double" : "가나다라마바사아","yyMM" : "2025.12","yyMMdd" : "2025.12.30","Null" : "미정","Text" : "가나다라","Number" : "1,000,000"},{"no" : "04","Double" : "가나다라마바사아","yyMM" : "2025.12","yyMMdd" : "2025.12.30","Null" : "미정","Text" : "가나다라","Number" : "1,000,000"},{"no" : "05","Double" : "가나다라마바사아","yyMM" : "2025.12","yyMMdd" : "2025.12.30","Null" : "미정","Text" : "가나다라","Number" : "1,000,000"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cellclass", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "셀고정","type" : "STRING","size" : "256"},{"id" : "필수","type" : "STRING","size" : "256"},{"id" : "텍스트정렬","type" : "STRING","size" : "256"},{"id" : "강조텍스트컬러","type" : "STRING","size" : "256"},{"id" : "강조바탕컬러","type" : "STRING","size" : "256"}]},"Rows" : [{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트 04");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("grd, tree, cellclass, lstv");
            obj.set_cssclass("sta_WF_ParaH5");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","0","140",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03","50","133","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01_00_00","756","20","117","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00","54","130","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00_00","1095","124","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Minus");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03_00_00_00","44","120","145","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04_00_00_00","64","140","162","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00_00","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button00_01_01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_03_00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_04_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","0","52","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","94","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_grid");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"60\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"90\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"익스팬드\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"콤보박스\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"캘린더\" cssclass=\"cell_WF_Center\"/><Cell col=\"8\" displaytype=\"normal\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"9\" text=\"버튼\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Expand\" expandshow=\"show\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandsize=\"48\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Cmb\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Cal\"/><Cell col=\"8\" text=\"bind:CenterAlign\" cssclass=\"cell_WF_Center\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"총계\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","156","100%","500",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static10_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","40","99","100%","527",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_00","50","94","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Double Line Head");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","50","236","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_DoubleHead");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"95\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"70\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"두줄 &#13;&#10;헤더 라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"체크\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" displaytype=\"normal\" text=\"라벨\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"bind:Double\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:yyMM\" edittype=\"text\"/><Cell col=\"4\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandsize=\"48\" text=\"bind:yyMMdd\" edittype=\"text\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:Null\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:Text\" maskeditformat=\"bind:Number\"/><Cell col=\"7\" text=\"bind:Number\" cssclass=\"cell_WF_Right\" edittype=\"mask\" maskeditformat=\"bind:Number\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"총계\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","634","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_00_00","50","94","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Multiple Head");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","50","236","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_DoubleHead");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" rowspan=\"2\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" rowspan=\"2\" text=\"체크\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" rowspan=\"2\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" rowspan=\"2\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" colspan=\"2\" text=\"라벨\" cssclass=\"cell_WF_Center,cell_WF_Btline\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"normal\" text=\"라벨\" cssclass=\"cell_WF_Center\"/><Cell row=\"1\" col=\"5\" text=\"라벨\" cssclass=\"cell_WF_Center,cell_WF_Rigline\"/><Cell row=\"1\" col=\"6\" text=\"라벨\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:no\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"bind:Double\" edittype=\"text\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:Check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:yyMM\" edittype=\"text\"/><Cell col=\"4\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandsize=\"48\" text=\"bind:Null\" edittype=\"text\"/><Cell col=\"5\" colspan=\"2\" edittype=\"text\" text=\"bind:Double\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"bind:Number\" cssclass=\"cell_WF_Right\" edittype=\"mask\" maskeditformat=\"bind:Number\"/><Cell row=\"1\" displaytype=\"number\" text=\"bind:no\" cssclass=\"cell_WF_Center\"/><Cell row=\"1\" col=\"1\" edittype=\"text\" text=\"bind:Double\"/><Cell row=\"1\" col=\"3\" text=\"bind:yyMMdd\"/><Cell row=\"1\" col=\"4\" text=\"bind:Null\"/><Cell row=\"1\" col=\"5\" text=\"bind:Text\"/><Cell row=\"1\" col=\"6\" text=\"bind:Text\"/><Cell row=\"1\" col=\"7\" text=\"bind:Number\" edittype=\"mask\" cssclass=\"cell_WF_Right\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"총계\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","50","676","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","staTit:16",null,"1560","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("40");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00_00_00","50","50","100%","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Other");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_01","50","109","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Tree");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","50","99","100%","560",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_tree");
            obj.set_treeuseline("true");
            obj.set_flexgrow("1");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"433\"/></Columns><Rows><Row size=\"57\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","40","93","46%","600",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_01_00","50","109","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("No data");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","10","96","100%","560",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_showcellselection("true");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme::NexaKRDS/images/Nodata.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"150\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:Num\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"총계\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","50","125","46%","600",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","40","98","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_00_00_00","50","94","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Cell 상태값(mouseover/selected)없을 시 | class : grd_WF_NoneS / showcellselection : false");
            obj.set_cssclass("sta_WF_Subtit15");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","10","96","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("ds_grid");
            obj.set_cssclass("grd_WF_NoneS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"90\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" displaytype=\"normal\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:Expand\" expandshow=\"show\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandsize=\"48\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Cmb\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Cal\"/><Cell col=\"8\" text=\"bind:CenterAlign\" cssclass=\"cell_WF_Center\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"총계\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","50","1130","100%","399",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_00_00_00_00","50","94","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("CellClass");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","4440","808","560",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("ds_cellclass");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"99\"/><Column size=\"89\"/><Column size=\"154\"/><Column size=\"290\"/><Column size=\"156\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"셀고정\" cssclass=\"cell_WF_Fixing,cell_WF_Center\"/><Cell col=\"1\" text=\"필수\" cssclass=\"essential,cell_WF_Center\"/><Cell col=\"2\" text=\"텍스트정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"강조 텍스트컬러\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"강조 바탕컬러\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:mask\" edittype=\"normal\"/><Cell col=\"2\" text=\"왼쪽정렬\" displaytype=\"normal\"/><Cell col=\"3\" cssclass=\"cell_WF_Point01,cell_WF_Center\" text=\"cell_WF_Point01_nagative_danger\"/><Cell col=\"4\" text=\"부정\" cssclass=\"cell_WF_NagaBg01\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" edittype=\"normal\"/><Cell row=\"1\" col=\"2\" text=\"Link\" cssclass=\"cell_WF_Link\" displaytype=\"normal\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_WF_Point02,cell_WF_Center\" text=\"cell_WF_Point02_nagative_warning\"/><Cell row=\"1\" col=\"4\" text=\"부정\" cssclass=\"cell_WF_NagaBg02\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" edittype=\"normal\"/><Cell row=\"2\" col=\"2\" text=\"오른쪽정렬\" cssclass=\"cell_WF_Right\" displaytype=\"normal\"/><Cell row=\"2\" col=\"3\" cssclass=\"cell_WF_Point03,cell_WF_Center\" text=\"cell_WF_Point03_Positive_infor\"/><Cell row=\"2\" col=\"4\" text=\"긍정\" cssclass=\"cell_WF_PosiBg01\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\" edittype=\"normal\"/><Cell row=\"3\" col=\"2\" text=\"가운데정렬\" cssclass=\"cell_WF_Center\" displaytype=\"normal\"/><Cell row=\"3\" col=\"3\" cssclass=\"cell_WF_Point04,cell_WF_Center\" text=\"cell_WF_Point04_Positive_success\"/><Cell row=\"3\" col=\"4\" text=\"긍정\" cssclass=\"cell_WF_PosiBg02\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" cssclass=\"cell_WF_Sum01\" text=\"소계01\"/><Cell col=\"4\" cssclass=\"cell_WF_Sum01\" text=\"1,000,000\"/><Cell row=\"1\" colspan=\"4\" cssclass=\"cell_WF_Sum02\" text=\"소계02\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Sum02\" text=\"1,000,000\"/><Cell row=\"2\" colspan=\"4\" cssclass=\"cell_WF_Sum03\" text=\"소계03\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Sum03\" text=\"1,000,000\"/><Cell row=\"3\" colspan=\"4\" text=\"총계\"/><Cell row=\"3\" col=\"4\" text=\"1,000,000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","50","765","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel00:16",null,"1840","0",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_type("vertical");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00","0","Panel03:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("ListView");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00_00","50","50","100%","400",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("ds_lsvt");
            obj.set_bandexpandtype("accordion");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"160\" expandbarsize=\"48 48\" expandbartype=\"true\"><Cell id=\"Cell00\" left=\"132\" top=\"32\" height=\"29\" displaytype=\"normal\" width=\"300\" text=\"bind:BodyTitle\" cssclass=\"cell_WF_Title\"/><Cell id=\"Cell02\" left=\"132\" top=\"Cell00:8\" width=\"217\" height=\"37\" text=\"bind:BodyText\" cssclass=\"cell_WF_Description\"/><Cell id=\"Cell03\" left=\"132\" top=\"Cell02:14\" width=\"200\" height=\"6\" displaytype=\"progressbarcontrol\" progressbardirection=\"forward\" progressbarsmooth=\"true\" text=\"bind:BodyProgress\" cssclass=\"cell_Progress\"/><Cell id=\"Cell01\" left=\"32\" top=\"32\" width=\"80\" height=\"80\" displaytype=\"imagecontrol\" text=\"bind:Images\" imagestretch=\"bind:Images\"/></Band><Band id=\"detail\" width=\"100%\" height=\"260\"><Cell id=\"Cell00\" left=\"24\" top=\"0\" right=\"24\" bottom=\"24\" cssclass=\"cell_WF_Detbg\"/><Cell id=\"Cell01\" left=\"40\" top=\"20\" height=\"28\" right=\"40\" text=\"bind:DetailTitle\" cssclass=\"cell_WF_Title\"/><Cell id=\"Cell02\" left=\"40\" top=\"Cell01:4\" height=\"23\" cssclass=\"cell_WF_Descript\" text=\"bind:DetailText\" right=\"40\"/><Cell id=\"Cell03\" left=\"40\" top=\"Cell02:8\" height=\"48\" right=\"40\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell id=\"Cell04\" left=\"40\" top=\"Cell03:8\" right=\"40\" displaytype=\"textareacontrol\" edittype=\"textarea\" bottom=\"40\"/><Cell id=\"Cell05\" top=\"20\" width=\"80\" height=\"48\" right=\"40\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:BodyButton\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","staTit00:16",null,"506","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"ListView00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,4280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide04.xfdl", function() {


        this.guide03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide03_onload,this);
        };
        this.loadIncludeScript("guide04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
