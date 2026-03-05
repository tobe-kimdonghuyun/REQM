(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","23","72","697","338",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_background("#c4e287");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03_00","469","25","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_format("!09999.99");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","14","25","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_format("09999.99");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","14","76","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_format("#9900.0090");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","14","185","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_format("##.#");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","14","134","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_format("9,999.##");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","14","288","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_format("00.0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","14","237","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_format("99.9");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_02","245","76","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_format("-#9900.0090");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","245","185","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_format("-##.#");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","245","134","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_format("-9,999.##");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","245","288","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_format("-00.0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00","245","235","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_format("-99.9");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","245","25","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_format("-09999.99");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_02_00","469","76","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_format("!#9900.0090");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","469","185","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_format("!##.#");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00","469","134","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("!9,999.##");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00","469","288","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_format("!00.0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00_00","469","235","203","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_format("!99.9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","30","30","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("type = number");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","23","465","697","295",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#c4e287");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03_00","469","25","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_format("@@@@-@@-@@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","14","25","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_format("@@@@@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","14","76","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_format("#####");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","14","185","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_format("99999");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","14","134","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_format("*****");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","246","185","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_format("ZZZZZ");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","14","237","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_format("AAAAA");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_02","245","76","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_format("@@-@@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","469","184","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_format("@\\\\@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","245","134","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_format("@@\'A\'@@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","469","129","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_format("999999-{9999999}");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00","469","76","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_format("@\\\\\\\\@");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","245","25","203","41",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_format("zzzzz");
            obj.set_type("string");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","423","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("type = number");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00","783","87","263","119",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            obj.getSetter("labeltext").set("TextField00");
            obj.getSetter("pattern").set("^\\d{6}-\\d{7}$");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,840,this,function(p){});
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

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
