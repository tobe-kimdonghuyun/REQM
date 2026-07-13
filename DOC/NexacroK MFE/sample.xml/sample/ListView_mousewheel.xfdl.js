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
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_001"},{"Column0" : "2","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_002"},{"Column0" : "3","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_003"},{"Column0" : "4","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_004"},{"Column0" : "5","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_005"},{"Column0" : "6","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_006"},{"Column0" : "7","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_007"},{"Column0" : "8","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_008"},{"Column0" : "9","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_009"},{"Column0" : "10","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_010"},{"Column0" : "11","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_011"},{"Column0" : "12","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_012"},{"Column0" : "13","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_013"},{"Column0" : "14","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_014"},{"Column0" : "15","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_015"},{"Column0" : "16","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_016"},{"Column0" : "17","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_017"},{"Column0" : "18","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_018"},{"Column0" : "19","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_019"},{"Column0" : "20","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_020"},{"Column0" : "21","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_021"},{"Column0" : "22","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_022"},{"Column0" : "23","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_023"},{"Column0" : "24","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_024"},{"Column0" : "25","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_025"},{"Column0" : "26","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_026"},{"Column0" : "27","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_027"},{"Column0" : "28","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_028"},{"Column0" : "29","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_029"},{"Column0" : "30","Column1" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789_가나다라마바사아자차카타파하_This_is_a_long_dummy_text_for_horizontal_scroll_test_row_030"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button99","1970","1310","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button99");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20","300","40",null,null,null,null,null,null,this);
            obj.set_font("bold 32px/normal \"Malgun Gothic\"");
            obj.set_taborder("1");
            obj.set_text("ListView");
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
            obj.set_text("ListView");
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

            obj = new nexacro.ListView("ListView04","20","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView05","333","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView06","646","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView07","959","80","294","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
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
            obj.set_text("ListView");
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

            obj = new nexacro.ListView("ListView08","20","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView09","333","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView10","646","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView11","959","80","294","160",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("8");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
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

            obj = new nexacro.ListView("ListView00","20","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("both");
            obj.set_taborder("14");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView01","333","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("none");
            obj.set_taborder("15");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView02","646","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("vertical");
            obj.set_taborder("16");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListView("ListView03","959","80","294","160",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_scrollpropagation("horizontal");
            obj.set_taborder("17");
            obj._setContents("<Formats><Format id=\"default\"><Band height=\"63\" id=\"body\" width=\"100%\"><Cell height=\"24\" id=\"Cell00\" left=\"10\" text=\"Column0\" top=\"5\" width=\"120\"/><Cell height=\"24\" id=\"Cell01\" left=\"135\" text=\"bind:Column0\" top=\"5\" width=\"180\"/><Cell height=\"24\" id=\"Cell02\" left=\"10\" text=\"Column1\" top=\"34\" width=\"120\"/><Cell height=\"24\" id=\"Cell03\" left=\"135\" text=\"bind:Column1\" top=\"34\" width=\"180\"/></Band></Format></Formats>");
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
        this.registerScript("ListView_mousewheel.xfdl", function(nexacro, system, trace, environment, application) {
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

        this.ListView00_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView00_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView00_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView01_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView01_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView01_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView02_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView02_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView02_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView03_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView03_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.ListView03_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView04_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView04_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView04_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView05_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView05_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView05_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView06_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView06_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView06_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView07_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView07_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div00_ListView07_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView08_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView08_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView08_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView09_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView09_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView09_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView10_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView10_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView10_onvscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView11_onmousewheel = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- button: ' + e.button + '\n- amount: ' + e.amount + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView11_onhscroll = function(obj,e)
        {
        	this.TextAreaResult01.insertText('### ' + obj.id + '_' + e.id + ' ###\n' + '- pos: ' + e.pos + '\n- type: ' + e.type + '\n- fromobject: ' + e.fromobject.name + '\n- fromreferenceobject: ' + e.fromreferenceobject.name + '\n');
        };

        this.Div01_Div02_ListView11_onvscroll = function(obj,e)
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
            this.Div00.form.ListView04.addEventHandler("onmousewheel",this.Div00_ListView04_onmousewheel,this);
            this.Div00.form.ListView04.addEventHandler("onvscroll",this.Div00_ListView04_onvscroll,this);
            this.Div00.form.ListView05.addEventHandler("onmousewheel",this.Div00_ListView05_onmousewheel,this);
            this.Div00.form.ListView05.addEventHandler("onvscroll",this.Div00_ListView05_onvscroll,this);
            this.Div00.form.ListView06.addEventHandler("onmousewheel",this.Div00_ListView06_onmousewheel,this);
            this.Div00.form.ListView06.addEventHandler("onvscroll",this.Div00_ListView06_onvscroll,this);
            this.Div00.form.ListView07.addEventHandler("onmousewheel",this.Div00_ListView07_onmousewheel,this);
            this.Div00.form.ListView07.addEventHandler("onvscroll",this.Div00_ListView07_onvscroll,this);
            this.Div01.addEventHandler("onhscroll",this.Div01_onhscroll,this);
            this.Div01.addEventHandler("onmousewheel",this.Div01_onmousewheel,this);
            this.Div01.addEventHandler("onvscroll",this.Div01_onvscroll,this);
            this.Div01.form.Div02.addEventHandler("onhscroll",this.Div01_Div02_onhscroll,this);
            this.Div01.form.Div02.addEventHandler("onmousewheel",this.Div01_Div02_onmousewheel,this);
            this.Div01.form.Div02.addEventHandler("onvscroll",this.Div01_Div02_onvscroll,this);
            this.Div01.form.Div02.form.Static10.addEventHandler("onclick",this.Div01_Div02_Static10_onclick,this);
            this.Div01.form.Div02.form.ListView08.addEventHandler("onmousewheel",this.Div01_Div02_ListView08_onmousewheel,this);
            this.Div01.form.Div02.form.ListView08.addEventHandler("onvscroll",this.Div01_Div02_ListView08_onvscroll,this);
            this.Div01.form.Div02.form.ListView09.addEventHandler("onmousewheel",this.Div01_Div02_ListView09_onmousewheel,this);
            this.Div01.form.Div02.form.ListView09.addEventHandler("onvscroll",this.Div01_Div02_ListView09_onvscroll,this);
            this.Div01.form.Div02.form.ListView10.addEventHandler("onmousewheel",this.Div01_Div02_ListView10_onmousewheel,this);
            this.Div01.form.Div02.form.ListView10.addEventHandler("onvscroll",this.Div01_Div02_ListView10_onvscroll,this);
            this.Div01.form.Div02.form.ListView11.addEventHandler("onmousewheel",this.Div01_Div02_ListView11_onmousewheel,this);
            this.Div01.form.Div02.form.ListView11.addEventHandler("onvscroll",this.Div01_Div02_ListView11_onvscroll,this);
            this.ButtonClear00.addEventHandler("onclick",this.ButtonClear00_onclick,this);
            this.ButtonClear01.addEventHandler("onclick",this.ButtonClear01_onclick,this);
            this.ButtonClear02.addEventHandler("onclick",this.ButtonClear02_onclick,this);
            this.ListView00.addEventHandler("onmousewheel",this.ListView00_onmousewheel,this);
            this.ListView00.addEventHandler("onvscroll",this.ListView00_onvscroll,this);
            this.ListView01.addEventHandler("onmousewheel",this.ListView01_onmousewheel,this);
            this.ListView01.addEventHandler("onvscroll",this.ListView01_onvscroll,this);
            this.ListView02.addEventHandler("onmousewheel",this.ListView02_onmousewheel,this);
            this.ListView02.addEventHandler("onvscroll",this.ListView02_onvscroll,this);
            this.ListView03.addEventHandler("onmousewheel",this.ListView03_onmousewheel,this);
            this.ListView03.addEventHandler("onvscroll",this.ListView03_onvscroll,this);
        };

        this.loadIncludeScript("ListView_mousewheel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
