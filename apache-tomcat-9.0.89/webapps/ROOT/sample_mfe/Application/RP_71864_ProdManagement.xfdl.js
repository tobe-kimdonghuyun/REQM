(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("frm_Bg");
            this.set_name("ProdManagement");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1308,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsShop", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "shopCode","size" : "5","type" : "STRING"},{"id" : "shopName","size" : "100","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCatg1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "cId","size" : "256","type" : "STRING"},{"id" : "cName","size" : "256","type" : "STRING"},{"id" : "depth","size" : "256","type" : "STRING"},{"id" : "level1","size" : "256","type" : "STRING"},{"id" : "level2","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCatg2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "cId","size" : "256","type" : "STRING"},{"id" : "cName","size" : "256","type" : "STRING"},{"id" : "depth","size" : "256","type" : "STRING"},{"id" : "level1","size" : "256","type" : "STRING"},{"id" : "level2","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsMain", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "rowNum","size" : "256","type" : "STRING"},{"id" : "prodId","size" : "256","type" : "STRING"},{"id" : "prodCode","size" : "256","type" : "STRING"},{"id" : "prodNameKr","size" : "256","type" : "STRING"},{"id" : "prodInfo","size" : "256","type" : "STRING"},{"id" : "sellerName","size" : "256","type" : "STRING"},{"id" : "prodPriceKr","size" : "256","type" : "STRING"},{"id" : "updateDate","size" : "256","type" : "STRING"},{"id" : "displayInfo","size" : "256","type" : "STRING"},{"id" : "displayYN","size" : "256","type" : "STRING"},{"id" : "dispStartTime","size" : "256","type" : "STRING"},{"id" : "dispEndTime","size" : "256","type" : "STRING"},{"id" : "displayStat","size" : "256","type" : "STRING"},{"id" : "viewCount","size" : "256","type" : "STRING"},{"id" : "zzimCount","size" : "256","type" : "STRING"},{"id" : "dispCount","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCountAll", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "countAll","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "searchCondition","size" : "256","type" : "STRING"},{"id" : "searchKeyword","size" : "256","type" : "STRING"},{"id" : "searchShopCode","size" : "256","type" : "STRING"},{"id" : "searchCatg1","size" : "256","type" : "STRING"},{"id" : "searchCatg2","size" : "256","type" : "STRING"},{"id" : "searchRegStartTime","size" : "256","type" : "STRING"},{"id" : "searchRegEndTime","size" : "256","type" : "STRING"},{"id" : "searchDispStartTime","size" : "256","type" : "STRING"},{"id" : "searchDispEndTime","size" : "256","type" : "STRING"},{"id" : "searchChAll","size" : "256","type" : "STRING"},{"id" : "searchDispY","size" : "256","type" : "STRING"},{"id" : "searchDispEnd","size" : "256","type" : "STRING"},{"id" : "searchDispN","size" : "256","type" : "STRING"},{"id" : "searchMovFile","size" : "256","type" : "STRING"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Div("Div1","0","10",null,"161","0",null,null,null,null,null,this);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("div_WF_SearchBg");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("9");
            obj.set_text("<DesignFormClipBoard version=\"1.0\">\n  <Copydata>\n    <Component>\n      <Static id=\"Static07\" taborder=\"0\" text=\"&#xB4F1;&#xB85D;&#xC0C1;&#xD0DC;\" left=\"29\" top=\"222\" width=\"76\" height=\"30\" right=\"\" bottom=\"\" leftbase=\"\" topbase=\"\" bottombase=\"\" rightbase=\"\" widthbase=\"\" heightbase=\"\"/>\n    </Component>\n  </Copydata>\n</DesignFormClipBoard>");
            obj.getSetter("topbase").set("btnRegProduct.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","25","10","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("검색분류");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbSearchCondition","11","10","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("Static00.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_text("상품명");
            obj.set_value("1");
            obj.set_index("0");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtSearchKeyword","5","10","204","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("white");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("cbSearchCondition.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("2");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","496","10","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("상가명");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbShop","11","10","231","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("shopCode");
            obj.set_datacolumn("shopName");
            obj.getSetter("heightbase").set("");
            obj.set_innerdataset("dsShop");
            obj.getSetter("leftbase").set("Static02.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbCatg1","100","40","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("cId");
            obj.set_datacolumn("cName");
            obj.getSetter("heightbase").set("");
            obj.set_innerdataset("dsCatg1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbCatg2","265","40","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("cId");
            obj.set_datacolumn("cName");
            obj.getSetter("heightbase").set("");
            obj.set_innerdataset("dsCatg2");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","25","40","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("카테고리");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","25","70","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("등록일자");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calRegStartTime","100","70","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calRegEndTime","282","70","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","254","70","30","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.getSetter("topbase").set("");
            obj.set_verticalAlign("middle");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnToday1","447","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("오늘");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek11","491","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("1주일");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth11","535","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("1개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth16","623","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("6개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth13","579","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("3개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnAll1","667","70","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","25","100","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("진열기간");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calDisplayStartTime","100","100","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","254","100","30","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.getSetter("topbase").set("");
            obj.set_verticalAlign("middle");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calDisplayEndTime","282","100","160","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnToday2","447","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("오늘");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek21","491","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("1주일");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth21","535","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("1개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth23","579","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("3개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnMonth26","623","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("6개월");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnAll2","667","100","39","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","25","130","64","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("등록상태");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chAll","100","130","77","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_falsevalue("N");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.getSetter("topbase").set("");
            obj.set_truevalue("Y");
            obj.getSetter("widthbase").set("");
            obj.set_value("false");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chDisplayY","162","130","77","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_falsevalue("N");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("진열중");
            obj.getSetter("topbase").set("");
            obj.set_truevalue("Y");
            obj.getSetter("widthbase").set("");
            obj.set_value("true");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chDisplayEnd","235","130","77","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_falsevalue("N");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("진열마감");
            obj.getSetter("topbase").set("");
            obj.set_truevalue("Y");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chDisplayN","321","130","77","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_falsevalue("N");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("진열안함");
            obj.getSetter("topbase").set("");
            obj.set_truevalue("Y");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","450","127","76","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("상품파일");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdProdMovFile","511","127","428","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("-1");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.getSetter("rightbase").set("");
            obj.set_rowcount("-1");
            obj.set_taborder("9");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("1px");
            obj.set_value("1");
            obj.set_index("0");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearch",null,"123","58","26","3",null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnInit.left");
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnInit",null,"123","58","26","13",null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("btn_WF_Reset");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Grid("GridList","0","251",null,null,"0","36",null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsMain");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("10");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"44\"/><Column size=\"119\"/><Column size=\"302\"/><Column size=\"145\"/><Column size=\"138\"/><Column size=\"131\"/><Column size=\"100\"/><Column size=\"208\"/><Column size=\"135\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품정보\"/><Cell col=\"4\" text=\"매장명\"/><Cell col=\"5\" text=\"가격\"/><Cell col=\"6\" text=\"등록(수정)일\"/><Cell col=\"7\" text=\"진열상태\"/><Cell col=\"8\" text=\"진열기간\"/><Cell col=\"9\" text=\"콘텐츠 통계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:rowNum\"/><Cell col=\"2\" text=\"bind:prodCode\"/><Cell col=\"3\" text=\"bind:prodInfo\"/><Cell col=\"4\" text=\"bind:sellerName\"/><Cell col=\"5\" text=\"bind:prodPriceKr\"/><Cell col=\"6\" text=\"bind:updateDate\"/><Cell col=\"7\" text=\"bind:displayStat\"/><Cell col=\"8\" text=\"bind:displayInfo\"/><Cell col=\"9\" text=\"bind:dispCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stSelectProd",null,null,"74","30","5","0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDisplayY.left");
            obj.set_taborder("3");
            obj.set_text("선택한상품을");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDisplayY",null,null,"63","22","3","5",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDisplayN.left");
            obj.set_taborder("12");
            obj.set_text("진열함");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDisplayN",null,null,"63","22","3","5",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelt.left");
            obj.set_taborder("13");
            obj.set_text("진열안함");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelt",null,null,"39","22","0","5",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegProduct","0","0","156","30",null,null,null,null,null,null,this);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("11");
            obj.set_text("상품등록");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountTotalTitle","5",null,"80","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("2");
            obj.set_text("총 상품건수");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountTotal","65",null,"35","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_textAlign("right");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountTotalK","105",null,"35","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("7");
            obj.set_text("건 | ");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountResultK","129",null,"80","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.set_text("검색결과");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountResult","167",null,"41","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_textAlign("right");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stCountTotalK00","214",null,"35","30",null,"0",null,null,null,null,this);
            obj.getSetter("bottombase").set("GridList.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("건");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("divPaging","419","738","500","24",null,null,null,null,null,null,this);
            obj.set_background("transparent");
            obj.set_border("0px");
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Common::ComPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","788","8","126","40",null,null,null,null,null,null,this);
            obj.getSetter("a").set("b");
            obj.set_taborder("");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div1.form
            obj = new nexacro.Layout("default","",0,0,this.Div1.form,function(p){});
            this.Div1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new nexacro.Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1308,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","Div1.form.cbSearchKey","value","dsSearch","searchCondition");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","Div1.form.edtSearchNm","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","Div1.form.cbShop","value","dsSearch","searchShopCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item3","Div1.form.cbCatg1","value","dsSearch","searchCatg1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","Div1.form.cbCatg2","value","dsSearch","searchCatg2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","Div1.form.calRegStartTime","value","dsSearch","searchRegStartTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item6","Div1.form.calRegEndTime","value","dsSearch","searchRegEndTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item7","Div1.form.calDisplayStartTime","value","dsSearch","searchDispStartTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item8","Div1.form.calDisplayEndTime","value","dsSearch","searchDispEndTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item9","Div1.form.chAll","value","dsSearch","searchChAll");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item10","Div1.form.chDisplayY","value","dsSearch","searchDispY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item11","Div1.form.chDisplayEnd","value","dsSearch","searchDispEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item12","Div1.form.chDisplayN","value","dsSearch","searchDispN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item13","Div1.form.rdProdMovFile","value","dsSearch","searchMovFile");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item14","Div1.form.edtSearchKeyword","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item15","Div1.form.cbSearchCondition","value","dsSearch","searchCondition");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::ComPaging.xfdl");
        };
        
        // User Script
        this.registerScript("RP_71864_ProdManagement.xfdl", function(nexacro, system, trace, environment, application) {
        /***************************************************************
         * System Name	:	ECP
         * Job Name 			:	ProdManagement
         * File Name 			:	ProdManagement.xfdl
         * Creator 			:	TOBESOFT
         * Make Date 		:	2016.10.03
         *
         * Description  		:
         *---------------------------------------------------------------------------------------
         * Modify Date     	Modifier  		Modify Description
         *---------------------------------------------------------------------------------------
         * 2016.10.03  		TOBESOFT 	Initial Make Program
         *
         *---------------------------------------------------------------------------------------
         ***************************************************************/

        //================================================
        // Global Form Variable
        //---------------------------------------------------------------------------------------
        this.gfv_today;

        //================================================
        // Common Function : onload
        //---------------------------------------------------------------------------------------

        this.Form_onload = function(obj,e)
        {
        // 	this.gfv_today = gfnGetToday();
        // 	this.ufInitCodes();
        };

        //================================================
        // Common Function : search
        //--------------------------------------------------------------------------------------

        // init code load
        // 상가code, 카테고리code
        this.ufInitCodes = function ()
        {
        	var strSvcId		= "searchCode";
        	var strUrl 			= "Svc::prodManagementOnload.do";
        	var strInDs 		= "";
        	var strOutDs		= "dsShop=outputShopCode dsCatg1=outputCatgCode1 dsCatg2=outputCatgCode2";
        	var strArg 		= "";
        	var strCallBack	= "cfn_CodeCallback";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };

        // 검색
        this.ufSearch = function ()
        {
        	var strSvcId		= "searchList";
        	var strUrl 			= "Svc::prodMgmtSearch.do";
        	var strInDs 		= "inputDsSearch=dsSearch ";
        	var strOutDs		= "dsMain=outputProdList  dsCountAll=outputCountAll";
        	var strArg 		= "";
        	var strCallBack	= "cfn_CallbackSearch";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };

        // 진열함
        this.ufUdateDisplayY = function ()
        {
        	var strSvcId		= "updateDisplayY";
        	var strUrl 			= "Svc::updateDisplayY.do";
        	var strInDs 		= "inputDsMain=dsMain ";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "cfn_CallbackUpdate";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };

        // 진열안함
        this.ufUpdateDisplayN = function ()
        {
        	var strSvcId		= "updateDisplayN";
        	var strUrl 			= "Svc::updateDisplayN.do";
        	var strInDs 		= "inputDsMain=dsMain ";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "cfn_CallbackUpdate";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };

        // 삭제
        this.ufDeleteProductList = function ()
        {
        	var strSvcId		= "deleteProductList";
        	var strUrl 			= "Svc::deleteProductList.do";
        	var strInDs 		= "inputDsMain=dsMain ";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "cfn_CallbackDelete";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };
        //================================================
        // Common Function : add
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : save
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : export excel
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : close
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : PopUp CallBack
        //--------------------------------------------------------------------------------------

        //================================================
        // Transaction CallBack
        //--------------------------------------------------------------------------------------

        // code set
        this.cfn_CodeCallback = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMsg);
        		return;
        	}
        	// 대분류_카테고리
        	this.dsCatg1.set_filterstr("depth == 0");
        	this.dsCatg1.insertRow(0);
        	this.dsCatg1.setColumn(0, "cId", null);
        	this.dsCatg1.setColumn(0, "cName", "대분류");
        	this.Div1.form.cbCatg1.set_index(0);

        	// 세분류_카테고리
        	this.dsCatg2.insertRow(0);
        	this.dsCatg2.setColumn(0, "cId", null);
        	this.dsCatg2.setColumn(0, "depth", 99); // 임이의 depth
        	this.dsCatg2.setColumn(0, "cName", "세분류");
        	this.Div1.form.cbCatg2.set_index(0);
        	this.dsCatg2.set_filterstr("depth == 99");

        	// 상가명
        	this.dsShop.insertRow(0);
        	this.dsShop.setColumn(0, "shopCode", null);
        	this.dsShop.setColumn(0, "shopName", "전체");
        	this.Div1.form.cbShop.set_index(0);

        	// 초기화
        	this.Div1_btnInit_onclick()
        }

        // search callback
        this.cfn_CallbackSearch = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMsg);
        		return;
        	}
        	//리스트 건수 표시하기
        	var countAll  = this.dsCountAll.getColumn(0,"countAll");
        	this.stCountTotal.set_text(countAll);
        	var countResult = this.dsMain.getRowCount();
        	this.stCountResult.set_text(countResult);
        }

        // 진열함,진열안함
        this.cfn_CallbackUpdate = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMsg);
        		return;
        	}
        	alert("수정되었습니다.");
        	// 재검색
        	this.ufSearch();
        };

        // 삭제 콜백
        this.cfn_CallbackDelete = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMsg);
        		return;
        	}
        	alert("삭제되었습니다.");
        	// 재검색
        	this.ufSearch();
        };

        //
        this.fn_popCallBack = function (strID, rtnVal)
        {
        	var strJason = '({'+rtnVal+'})';
        	var json1 = eval(strJason);
        	if (json1.flg)
        	{
        		// 재검색
        		this.ufSearch();
        	}
        }
        //================================================
        // User Function
        //--------------------------------------------------------------------------------------


        this.uf_dateFormat = function (objDate)
        {
        	var year = (objDate.getFullYear()).toString();
        	var month = objDate.getMonth() + 1 > 9 ?   (objDate.getMonth() + 1).toString() : "0" + (objDate.getMonth() + 1).toString();
        	var day = (objDate.getDate()) > 9 ?   (objDate.getDate()).toString() : "0" + (objDate.getDate());

        	return year + month + day;
        };

        this.uf_addMonth = function (objDate, month)
        {
        	objDate.setMonth(objDate.getMonth() + (month - 1));
        	return objDate;
        };

        /**
        * objDate : Date 형식.
        * week : 주의 값을 입력 예:) 1주 전 -1, 2주후는 2
        **/
        this.uf_addWeek = function (objDate, week)
        {
        	objDate.setDate(objDate.getDate() + (7 * week));
        	return objDate;
        };

        this.uf_dateConvert = function (obj)
        {
        	var year = obj.substring(0, 4);
        	var month = obj.substring(4, 6);
        	var day = obj.substring(6, 8);

        	return new Date(year, month, day);
        };

        this.uf_btnRegDate = function (fromValue, toValue)
        {
        	this.Div1.form.calRegStartTime.set_value(fromValue);
        	this.Div1.form.calRegEndTime.set_value(toValue);
        };

        this.uf_btnDispDate = function (fromValue, toValue)
        {
        	this.Div1.form.calDisplayStartTime.set_value(fromValue);
        	this.Div1.form.calDisplayEndTime.set_value(toValue);
        };

        // showmodal
        this.ufShowmodal = function (kbn ,sArgument)
        {
        	var parentFrame = this.getOwnerFrame();
        	var childFrame = new ChildFrame;

        	childFrame.set_openalign("center middle");
        	childFrame.init("ProdDetailModify","absolute" , -1, -1, 504, 544, null, null, "Application::RP_71864_ProdDetail.xfdl");
        	if (kbn=='1')
        	{
        		childFrame.set_titletext("상품등록");
        	}
        	else
        	{
        		childFrame.set_titletext("상품수정");
        	}

        	childFrame.set_showtitlebar(true);
        //	childFrame.set_autosize(false);
        	childFrame.set_resizable(false);
        	childFrame.showModal(parentFrame, sArgument, this, "fn_popCallBack", false);
        };

        // validation
        this.ufValidation = function ()
        {
        	if(this.Div1.form.calRegStartTime.value > this.Div1.form.calRegEndTime.value)
        	{
        		alert("등록일자(시작일)가 (마감일)보다 클 수 없습니다.");
        		this.Div1.form.calRegStartTime.setFocus();
        		return false;
        	}

        	if(this.Div1.form.calDisplayStartTime.value > this.Div1.form.calDisplayEndTime.value)
        	{
        		alert("진열기간(시작일)이 (마감일)보다 클 수 없습니다.");
        		this.Div1.form.calDisplayStartTime.setFocus();
        		return false;
        	}
        	return true;
        };
        //================================================
        // Component Event
        //--------------------------------------------------------------------------------------

        // 검색버튼 클릭 이벤트
        this.Div1_btnSearch_onclick = function(obj,e)
        {
        	if (this.ufValidation())
        	{
        		this.ufSearch();
        	}
        };

        // 대분류 아이템체인지 이벤트
        this.Div1_cbCatg1_onitemchanged = function(obj,e)
        {
        	// 대분류 변경시 세분류의 아이템 리스트 수정
        	var level1 = this.dsCatg1.getColumn(e.postindex,"level1");
        	this.dsCatg2.set_filterstr("(depth == 1 && level1 == "+level1+") || depth == 99");

        	// 세분류_카테고리
        	this.Div1.form.cbCatg2.set_index(0);
        };

        //====================== 등록기간 ==================================
        // 등록기간 오늘
        this.Div1_btnToday1_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	this.uf_btnRegDate(today, today);
        };

        // 등록기간 일주일
        this.Div1_btnWeek11_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnAddDate(today, -7);
        	this.uf_btnRegDate(objDate, today);
        };

        // 등록기간 한달
        this.Div1_btnMonth11_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -1);
        	this.uf_btnRegDate(objDate, today);
        };

        // 등록기간 세달
        this.Div1_btnMonth13_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -3);
        	this.uf_btnRegDate(objDate, today);
        };

        // 등록기간 여섯달
        this.Div1_btnMonth16_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -6);
        	this.uf_btnRegDate(objDate, today);
        };

        // 전체기간
        this.Div1_btnAll1_onclick = function(obj,e)
        {
        	this.uf_btnRegDate("", "");
        };

        //======================= 진열기간 ==================================
        // 진열기간 오늘
        this.Div1_btnToday2_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	this.uf_btnDispDate(today, today);
        };

        // 진열기간 일주일
        this.Div1_btnWeek21_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnAddDate(today, -7);
        	this.uf_btnDispDate(objDate, today);
        };

        // 진열기간 한달
        this.Div1_btnMonth21_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -1);
        	this.uf_btnDispDate(objDate, today);
        };

        // 진열기간 세달
        this.Div1_btnMonth23_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -3);
        	this.uf_btnDispDate(objDate, today);
        };

        // 진열기간 여섯달
        this.Div1_btnMonth26_onclick = function(obj,e)
        {
        	var today = this.gfv_today;
        	var objDate = gfnGetAddMonth(today, -6);
        	this.uf_btnDispDate(objDate, today);
        };

        // 전체기간
        this.Div1_btnAll2_onclick = function(obj,e)
        {
        	this.uf_btnDispDate("", "");
        };
        //==================== Calendar 끝=====================================

        //  체크박스 전체 클릭
        this.Div1_chAll_onclick = function(obj,e)
        {
        	if (this.Div1.form.chAll.value == 'Y')
        	{
        		this.Div1.form.chDisplayY.set_value('Y');
        		this.Div1.form.chDisplayEnd.set_value('Y');
        		this.Div1.form.chDisplayN.set_value('Y');
        	}
        	else
        	{
        		this.Div1.form.chDisplayY.set_value('N');
        		this.Div1.form.chDisplayEnd.set_value('N');
        		this.Div1.form.chDisplayN.set_value('N');
        	}
        };

        // 초기화 버튼
        this.Div1_btnInit_onclick = function(obj,e)
        {
        	this.Div1.form.cbSearchCondition.set_value('1');
        	this.Div1.form.edtSearchKeyword.set_value("");
        	this.Div1.form.cbShop.set_index(0);
        	this.dsCatg1.set_filterstr("depth == 0");
        	this.Div1.form.cbCatg1.set_index(0);
        	this.dsCatg2.set_filterstr("depth == 99");
        	this.Div1.form.cbCatg2.set_index(0);
        	this.Div1_btnToday1_onclick();
        	this.Div1_btnToday2_onclick();
        	this.Div1.form.chAll.set_value('N');
        	this.Div1.form.chDisplayY.set_value('Y');
        	this.Div1.form.chDisplayEnd.set_value('N');
        	this.Div1.form.chDisplayN.set_value('N');
        	this.Div1.form.rdProdMovFile.set_index(0);
        };

        // 상품상세 수정화면으로 이동
        this.GridList_oncelldblclick = function(obj,e)
        {
        	var productId = this.dsMain.getColumn(e.row,'prodId');
        	var sArgument = {param:productId};
        	this.ufShowmodal('2',sArgument);
        };

        // 상품등록 화면으로 이동
        this.btnRegProduct_onclick = function(obj,e)
        {
        	var sArgument = {param:null};
        	this.ufShowmodal('1',sArgument);
        };

        // 진열함
        this.btnDisplayY_onclick = function(obj,e)
        {
        	this.ufUdateDisplayY();
        };

        // 진열안함
        this.btnDisplayN_onclick = function(obj,e)
        {
        	this.ufUpdateDisplayN();
        };

        //삭제
        this.btnDelt_onclick = function(obj,e)
        {
        	this.ufDeleteProductList();
        };

        // 전체삭제 체크박스 클릭
        this.Div_grd_onheadclick = function(obj,e)
        {
        	gfn_setGridCheckAll(obj, e.cell);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.ufShowmodal('2', '');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Div1.form.cbShop.addEventHandler("onitemchanged",this.Div1_cbShop_onitemchanged,this);
            this.Div1.form.cbCatg1.addEventHandler("onitemchanged",this.Div1_cbCatg1_onitemchanged,this);
            this.Div1.form.btnToday1.addEventHandler("onclick",this.Div1_btnToday1_onclick,this);
            this.Div1.form.btnWeek11.addEventHandler("onclick",this.Div1_btnWeek11_onclick,this);
            this.Div1.form.btnMonth11.addEventHandler("onclick",this.Div1_btnMonth11_onclick,this);
            this.Div1.form.btnMonth16.addEventHandler("onclick",this.Div1_btnMonth16_onclick,this);
            this.Div1.form.btnMonth13.addEventHandler("onclick",this.Div1_btnMonth13_onclick,this);
            this.Div1.form.btnAll1.addEventHandler("onclick",this.Div1_btnAll1_onclick,this);
            this.Div1.form.btnToday2.addEventHandler("onclick",this.Div1_btnToday2_onclick,this);
            this.Div1.form.btnWeek21.addEventHandler("onclick",this.Div1_btnWeek21_onclick,this);
            this.Div1.form.btnMonth21.addEventHandler("onclick",this.Div1_btnMonth21_onclick,this);
            this.Div1.form.btnMonth23.addEventHandler("onclick",this.Div1_btnMonth23_onclick,this);
            this.Div1.form.btnMonth26.addEventHandler("onclick",this.Div1_btnMonth26_onclick,this);
            this.Div1.form.btnAll2.addEventHandler("onclick",this.Div1_btnAll2_onclick,this);
            this.Div1.form.chAll.addEventHandler("onclick",this.Div1_chAll_onclick,this);
            this.Div1.form.btnSearch.addEventHandler("onclick",this.Div1_btnSearch_onclick,this);
            this.Div1.form.btnInit.addEventHandler("onclick",this.Div1_btnInit_onclick,this);
            this.GridList.addEventHandler("oncelldblclick",this.GridList_oncelldblclick,this);
            this.GridList.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.btnDisplayY.addEventHandler("onclick",this.btnDisplayY_onclick,this);
            this.btnDisplayN.addEventHandler("onclick",this.btnDisplayN_onclick,this);
            this.btnDelt.addEventHandler("onclick",this.btnDelt_onclick,this);
            this.btnRegProduct.addEventHandler("onclick",this.btnRegProduct_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("RP_71864_ProdManagement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
