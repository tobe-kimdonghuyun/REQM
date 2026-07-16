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
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"},{"id" : "Column4","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_001","Column2" : "0123456789_ROW_001","Column3" : "가나다라마바사아자차카타파하_ROW_001","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_001"},{"Column0" : "2","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_002","Column2" : "0123456789_ROW_002","Column3" : "가나다라마바사아자차카타파하_ROW_002","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_002"},{"Column0" : "3","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_003","Column2" : "0123456789_ROW_003","Column3" : "가나다라마바사아자차카타파하_ROW_003","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_003"},{"Column0" : "4","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_004","Column2" : "0123456789_ROW_004","Column3" : "가나다라마바사아자차카타파하_ROW_004","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_004"},{"Column0" : "5","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_005","Column2" : "0123456789_ROW_005","Column3" : "가나다라마바사아자차카타파하_ROW_005","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_005"},{"Column0" : "6","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_006","Column2" : "0123456789_ROW_006","Column3" : "가나다라마바사아자차카타파하_ROW_006","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_006"},{"Column0" : "7","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_007","Column2" : "0123456789_ROW_007","Column3" : "가나다라마바사아자차카타파하_ROW_007","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_007"},{"Column0" : "8","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_008","Column2" : "0123456789_ROW_008","Column3" : "가나다라마바사아자차카타파하_ROW_008","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_008"},{"Column0" : "9","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_009","Column2" : "0123456789_ROW_009","Column3" : "가나다라마바사아자차카타파하_ROW_009","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_009"},{"Column0" : "10","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_010","Column2" : "0123456789_ROW_010","Column3" : "가나다라마바사아자차카타파하_ROW_010","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_010"},{"Column0" : "11","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_011","Column2" : "0123456789_ROW_011","Column3" : "가나다라마바사아자차카타파하_ROW_011","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_011"},{"Column0" : "12","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_012","Column2" : "0123456789_ROW_012","Column3" : "가나다라마바사아자차카타파하_ROW_012","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_012"},{"Column0" : "13","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_013","Column2" : "0123456789_ROW_013","Column3" : "가나다라마바사아자차카타파하_ROW_013","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_013"},{"Column0" : "14","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_014","Column2" : "0123456789_ROW_014","Column3" : "가나다라마바사아자차카타파하_ROW_014","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_014"},{"Column0" : "15","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_015","Column2" : "0123456789_ROW_015","Column3" : "가나다라마바사아자차카타파하_ROW_015","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_015"},{"Column0" : "16","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_016","Column2" : "0123456789_ROW_016","Column3" : "가나다라마바사아자차카타파하_ROW_016","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_016"},{"Column0" : "17","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_017","Column2" : "0123456789_ROW_017","Column3" : "가나다라마바사아자차카타파하_ROW_017","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_017"},{"Column0" : "18","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_018","Column2" : "0123456789_ROW_018","Column3" : "가나다라마바사아자차카타파하_ROW_018","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_018"},{"Column0" : "19","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_019","Column2" : "0123456789_ROW_019","Column3" : "가나다라마바사아자차카타파하_ROW_019","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_019"},{"Column0" : "20","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_020","Column2" : "0123456789_ROW_020","Column3" : "가나다라마바사아자차카타파하_ROW_020","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_020"},{"Column0" : "21","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_021","Column2" : "0123456789_ROW_021","Column3" : "가나다라마바사아자차카타파하_ROW_021","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_021"},{"Column0" : "22","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_022","Column2" : "0123456789_ROW_022","Column3" : "가나다라마바사아자차카타파하_ROW_022","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_022"},{"Column0" : "23","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_023","Column2" : "0123456789_ROW_023","Column3" : "가나다라마바사아자차카타파하_ROW_023","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_023"},{"Column0" : "24","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_024","Column2" : "0123456789_ROW_024","Column3" : "가나다라마바사아자차카타파하_ROW_024","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_024"},{"Column0" : "25","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_025","Column2" : "0123456789_ROW_025","Column3" : "가나다라마바사아자차카타파하_ROW_025","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_025"},{"Column0" : "26","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_026","Column2" : "0123456789_ROW_026","Column3" : "가나다라마바사아자차카타파하_ROW_026","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_026"},{"Column0" : "27","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_027","Column2" : "0123456789_ROW_027","Column3" : "가나다라마바사아자차카타파하_ROW_027","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_027"},{"Column0" : "28","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_028","Column2" : "0123456789_ROW_028","Column3" : "가나다라마바사아자차카타파하_ROW_028","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_028"},{"Column0" : "29","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_029","Column2" : "0123456789_ROW_029","Column3" : "가나다라마바사아자차카타파하_ROW_029","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_029"},{"Column0" : "30","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_ROW_030","Column2" : "0123456789_ROW_030","Column3" : "가나다라마바사아자차카타파하_ROW_030","Column4" : "This_is_a_long_dummy_text_for_horizontal_scroll_test_row_030"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button99","1970","1310","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button99");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20","300","40",null,null,null,null,null,null,this);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("2");
            obj.set_text("scrollpropagation=both");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","333","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("3");
            obj.set_text("scrollpropagation=none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","646","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("4");
            obj.set_text("scrollpropagation=vertical");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","959","240","294","40",null,null,null,null,null,null,this);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("5");
            obj.set_text("scrollpropagation=horizontal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","20","300","335","223",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","20","20","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("0");
            obj.set_text("Grid");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","20","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("scrollpropagation=both");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","333","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("2");
            obj.set_text("scrollpropagation=none");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","646","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("3");
            obj.set_text("scrollpropagation=vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static09","959","240","294","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("4");
            obj.set_text("scrollpropagation=horizontal");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid04","20","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid05","333","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid06","646","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid07","959","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01","374","300","335","223",null,null,null,null,null,null,this);
            obj.set_border("1px solid black");
            obj.set_taborder("7");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div02","44","40","335","223",null,null,null,null,null,null,this.Div01.form);
            obj.set_border("1px solid black");
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.Div01.addChild(obj.name, obj);

            obj = new nexacro.Static("Static10","20","20","300","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("0");
            obj.set_text("Grid");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static11","20","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("scrollpropagation=both");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static12","333","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("2");
            obj.set_text("scrollpropagation=none");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static13","646","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("3");
            obj.set_text("scrollpropagation=vertical");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Static("Static14","959","240","294","40",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_taborder("4");
            obj.set_text("scrollpropagation=horizontal");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid08","20","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid09","333","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid10","646","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid11","959","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult00","20","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear00","20","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("9");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear01","375","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("11");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("ButtonClear02","730","570","111","40",null,null,null,null,null,null,this);
            obj.set_font("bold 18px/normal \"Malgun Gothic\"");
            obj.set_taborder("13");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult01","375","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextAreaResult02","730","620","335","284",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","20","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("14");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","333","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid02","646","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("16");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid03","959","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("17");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","774","304","245","231",null,null,null,null,null,null,this);
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_innerdataset("Dataset00");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form.Div02.form,function(p){});
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Grid_mousewheel.xfdl", function(nexacro, system, trace, environment, application) {
        var app = nexacro.getApplication();
        var env = nexacro.getEnvironment();

        this.Form_Work_onload = function(obj,e)
        {
            this.TextAreaResult00.insertText("### Environment.scrollpropagation : " + env.scrollpropagation + " ###\n");
        };

        this.ButtonClear00_onclick = function(obj,e)
        {
        	this.TextAreaResult00.value = "";
        };

        this.ButtonClear01_onclick = function(obj,e)
        {
        	this.TextAreaResult01.value = "";
        };

        this.ButtonClear02_onclick = function(obj,e)
        {
        	this.TextAreaResult02.value = "";
        };

        this.Form_Work_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Form_Work_onhscroll = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Form_Work_onvscroll = function(obj,e)
        {
        	this.TextAreaResult00.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid00_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid00_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid00_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid01_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid01_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid01_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid02_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid02_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid02_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid03_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid03_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Grid03_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid04_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid04_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid04_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid05_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid05_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid05_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid06_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid06_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid06_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid07_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid07_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_Grid07_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid08_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid08_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid08_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid09_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid09_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid09_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid10_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid10_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid10_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid11_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid11_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_Grid11_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onhscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_onvscroll = function(obj,e)
        {
        	this.TextAreaResult02.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onhscroll",this.Form_Work_onhscroll,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onmousewheel",this.Form_Work_onmousewheel,this);
            this.addEventHandler("onvscroll",this.Form_Work_onvscroll,this);
            this.Div00.addEventHandler("onhscroll",this.Div00_onhscroll,this);
            this.Div00.addEventHandler("onmousewheel",this.Div00_onmousewheel,this);
            this.Div00.addEventHandler("onvscroll",this.Div00_onvscroll,this);
            this.Div00.form.Grid04.addEventHandler("onhscroll",this.Div00_Grid04_onhscroll,this);
            this.Div00.form.Grid04.addEventHandler("onmousewheel",this.Div00_Grid04_onmousewheel,this);
            this.Div00.form.Grid04.addEventHandler("onvscroll",this.Div00_Grid04_onvscroll,this);
            this.Div00.form.Grid05.addEventHandler("onhscroll",this.Div00_Grid05_onhscroll,this);
            this.Div00.form.Grid05.addEventHandler("onmousewheel",this.Div00_Grid05_onmousewheel,this);
            this.Div00.form.Grid05.addEventHandler("onvscroll",this.Div00_Grid05_onvscroll,this);
            this.Div00.form.Grid06.addEventHandler("onhscroll",this.Div00_Grid06_onhscroll,this);
            this.Div00.form.Grid06.addEventHandler("onmousewheel",this.Div00_Grid06_onmousewheel,this);
            this.Div00.form.Grid06.addEventHandler("onvscroll",this.Div00_Grid06_onvscroll,this);
            this.Div00.form.Grid07.addEventHandler("onhscroll",this.Div00_Grid07_onhscroll,this);
            this.Div00.form.Grid07.addEventHandler("onmousewheel",this.Div00_Grid07_onmousewheel,this);
            this.Div00.form.Grid07.addEventHandler("onvscroll",this.Div00_Grid07_onvscroll,this);
            this.Div01.addEventHandler("onhscroll",this.Div01_onhscroll,this);
            this.Div01.addEventHandler("onmousewheel",this.Div01_onmousewheel,this);
            this.Div01.addEventHandler("onvscroll",this.Div01_onvscroll,this);
            this.Div01.form.Div02.addEventHandler("onhscroll",this.Div01_Div02_onhscroll,this);
            this.Div01.form.Div02.addEventHandler("onmousewheel",this.Div01_Div02_onmousewheel,this);
            this.Div01.form.Div02.addEventHandler("onvscroll",this.Div01_Div02_onvscroll,this);
            this.Div01.form.Div02.form.Static10.addEventHandler("onclick",this.Div01_Div02_Static10_onclick,this);
            this.Div01.form.Div02.form.Grid08.addEventHandler("onhscroll",this.Div01_Div02_Grid08_onhscroll,this);
            this.Div01.form.Div02.form.Grid08.addEventHandler("onmousewheel",this.Div01_Div02_Grid08_onmousewheel,this);
            this.Div01.form.Div02.form.Grid08.addEventHandler("onvscroll",this.Div01_Div02_Grid08_onvscroll,this);
            this.Div01.form.Div02.form.Grid09.addEventHandler("onhscroll",this.Div01_Div02_Grid09_onhscroll,this);
            this.Div01.form.Div02.form.Grid09.addEventHandler("onmousewheel",this.Div01_Div02_Grid09_onmousewheel,this);
            this.Div01.form.Div02.form.Grid09.addEventHandler("onvscroll",this.Div01_Div02_Grid09_onvscroll,this);
            this.Div01.form.Div02.form.Grid10.addEventHandler("onhscroll",this.Div01_Div02_Grid10_onhscroll,this);
            this.Div01.form.Div02.form.Grid10.addEventHandler("onmousewheel",this.Div01_Div02_Grid10_onmousewheel,this);
            this.Div01.form.Div02.form.Grid10.addEventHandler("onvscroll",this.Div01_Div02_Grid10_onvscroll,this);
            this.Div01.form.Div02.form.Grid11.addEventHandler("onhscroll",this.Div01_Div02_Grid11_onhscroll,this);
            this.Div01.form.Div02.form.Grid11.addEventHandler("onmousewheel",this.Div01_Div02_Grid11_onmousewheel,this);
            this.Div01.form.Div02.form.Grid11.addEventHandler("onvscroll",this.Div01_Div02_Grid11_onvscroll,this);
            this.ButtonClear00.addEventHandler("onclick",this.ButtonClear00_onclick,this);
            this.ButtonClear01.addEventHandler("onclick",this.ButtonClear01_onclick,this);
            this.ButtonClear02.addEventHandler("onclick",this.ButtonClear02_onclick,this);
            this.Grid00.addEventHandler("onhscroll",this.Grid00_onhscroll,this);
            this.Grid00.addEventHandler("onmousewheel",this.Grid00_onmousewheel,this);
            this.Grid00.addEventHandler("onvscroll",this.Grid00_onvscroll,this);
            this.Grid01.addEventHandler("onhscroll",this.Grid01_onhscroll,this);
            this.Grid01.addEventHandler("onmousewheel",this.Grid01_onmousewheel,this);
            this.Grid01.addEventHandler("onvscroll",this.Grid01_onvscroll,this);
            this.Grid02.addEventHandler("onhscroll",this.Grid02_onhscroll,this);
            this.Grid02.addEventHandler("onmousewheel",this.Grid02_onmousewheel,this);
            this.Grid02.addEventHandler("onvscroll",this.Grid02_onvscroll,this);
            this.Grid03.addEventHandler("onhscroll",this.Grid03_onhscroll,this);
            this.Grid03.addEventHandler("onmousewheel",this.Grid03_onmousewheel,this);
            this.Grid03.addEventHandler("onvscroll",this.Grid03_onvscroll,this);
        };

        this.loadIncludeScript("Grid_mousewheel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
