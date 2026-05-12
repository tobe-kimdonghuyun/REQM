(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Perf_Work");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1560,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Panel("Panel00","10","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_fittocontents("both");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_00_1\" id=\"PI_00_1\"/><PanelItem componentid=\"Button_00_2\" id=\"PI_00_2\"/><PanelItem componentid=\"Button_00_3\" id=\"PI_00_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_1","10","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널0-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_2","10","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널0-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_3","10","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널0-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel01","140","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_fittocontents("width");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_01_1\" id=\"PI_01_1\"/><PanelItem componentid=\"Button_01_2\" id=\"PI_01_2\"/><PanelItem componentid=\"Button_01_3\" id=\"PI_01_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_01_1","140","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널1-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_01_2","140","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널1-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_01_3","140","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널1-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel02","270","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_02_1\" id=\"PI_02_1\"/><PanelItem componentid=\"Button_02_2\" id=\"PI_02_2\"/><PanelItem componentid=\"Button_02_3\" id=\"PI_02_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_02_1","270","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널2-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_02_2","270","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널2-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_02_3","270","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널2-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel03","400","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_03_1\" id=\"PI_03_1\"/><PanelItem componentid=\"Button_03_2\" id=\"PI_03_2\"/><PanelItem componentid=\"Button_03_3\" id=\"PI_03_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_03_1","400","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널3-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_03_2","400","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널3-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_03_3","400","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널3-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel04","530","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_04_1\" id=\"PI_04_1\"/><PanelItem componentid=\"Button_04_2\" id=\"PI_04_2\"/><PanelItem componentid=\"Button_04_3\" id=\"PI_04_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_04_1","530","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널4-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_04_2","530","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널4-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_04_3","530","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널4-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel05","660","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_05_1\" id=\"PI_05_1\"/><PanelItem componentid=\"Button_05_2\" id=\"PI_05_2\"/><PanelItem componentid=\"Button_05_3\" id=\"PI_05_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_05_1","660","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널5-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_05_2","660","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널5-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_05_3","660","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널5-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel06","790","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_06_1\" id=\"PI_06_1\"/><PanelItem componentid=\"Button_06_2\" id=\"PI_06_2\"/><PanelItem componentid=\"Button_06_3\" id=\"PI_06_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_06_1","790","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널6-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_06_2","790","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널6-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_06_3","790","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널6-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel07","920","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_07_1\" id=\"PI_07_1\"/><PanelItem componentid=\"Button_07_2\" id=\"PI_07_2\"/><PanelItem componentid=\"Button_07_3\" id=\"PI_07_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_07_1","920","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널7-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_07_2","920","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널7-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_07_3","920","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널7-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel08","1050","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_08_1\" id=\"PI_08_1\"/><PanelItem componentid=\"Button_08_2\" id=\"PI_08_2\"/><PanelItem componentid=\"Button_08_3\" id=\"PI_08_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_08_1","1050","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널8-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_08_2","1050","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널8-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_08_3","1050","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널8-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel09","1180","10",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_09_1\" id=\"PI_09_1\"/><PanelItem componentid=\"Button_09_2\" id=\"PI_09_2\"/><PanelItem componentid=\"Button_09_3\" id=\"PI_09_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_09_1","1180","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널9-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_09_2","1180","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널9-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_09_3","1180","10",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널9-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel10","10","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_10_1\" id=\"PI_10_1\"/><PanelItem componentid=\"Button_10_2\" id=\"PI_10_2\"/><PanelItem componentid=\"Button_10_3\" id=\"PI_10_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_10_1","10","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널10-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_10_2","10","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널10-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_10_3","10","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널10-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel11","140","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_11_1\" id=\"PI_11_1\"/><PanelItem componentid=\"Button_11_2\" id=\"PI_11_2\"/><PanelItem componentid=\"Button_11_3\" id=\"PI_11_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_11_1","140","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널11-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_11_2","140","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널11-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_11_3","140","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널11-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel12","270","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_12_1\" id=\"PI_12_1\"/><PanelItem componentid=\"Button_12_2\" id=\"PI_12_2\"/><PanelItem componentid=\"Button_12_3\" id=\"PI_12_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_12_1","270","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널12-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_12_2","270","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널12-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_12_3","270","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널12-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel13","400","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_13_1\" id=\"PI_13_1\"/><PanelItem componentid=\"Button_13_2\" id=\"PI_13_2\"/><PanelItem componentid=\"Button_13_3\" id=\"PI_13_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_13_1","400","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널13-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_13_2","400","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널13-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_13_3","400","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널13-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel14","530","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_14_1\" id=\"PI_14_1\"/><PanelItem componentid=\"Button_14_2\" id=\"PI_14_2\"/><PanelItem componentid=\"Button_14_3\" id=\"PI_14_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_14_1","530","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널14-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_14_2","530","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널14-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_14_3","530","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널14-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel15","660","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_15_1\" id=\"PI_15_1\"/><PanelItem componentid=\"Button_15_2\" id=\"PI_15_2\"/><PanelItem componentid=\"Button_15_3\" id=\"PI_15_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_15_1","660","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널15-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_15_2","660","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널15-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_15_3","660","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널15-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel16","790","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_16_1\" id=\"PI_16_1\"/><PanelItem componentid=\"Button_16_2\" id=\"PI_16_2\"/><PanelItem componentid=\"Button_16_3\" id=\"PI_16_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_16_1","790","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널16-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_16_2","790","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널16-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_16_3","790","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널16-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel17","920","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_17_1\" id=\"PI_17_1\"/><PanelItem componentid=\"Button_17_2\" id=\"PI_17_2\"/><PanelItem componentid=\"Button_17_3\" id=\"PI_17_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_17_1","920","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널17-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_17_2","920","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널17-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_17_3","920","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널17-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel18","1050","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_18_1\" id=\"PI_18_1\"/><PanelItem componentid=\"Button_18_2\" id=\"PI_18_2\"/><PanelItem componentid=\"Button_18_3\" id=\"PI_18_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_18_1","1050","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널18-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_18_2","1050","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널18-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_18_3","1050","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널18-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel19","1180","120",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_19_1\" id=\"PI_19_1\"/><PanelItem componentid=\"Button_19_2\" id=\"PI_19_2\"/><PanelItem componentid=\"Button_19_3\" id=\"PI_19_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_19_1","1180","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널19-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_19_2","1180","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널19-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_19_3","1180","120",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널19-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel20","10","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_20_1\" id=\"PI_20_1\"/><PanelItem componentid=\"Button_20_2\" id=\"PI_20_2\"/><PanelItem componentid=\"Button_20_3\" id=\"PI_20_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_20_1","10","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널20-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_20_2","10","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널20-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_20_3","10","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널20-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel21","140","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_21_1\" id=\"PI_21_1\"/><PanelItem componentid=\"Button_21_2\" id=\"PI_21_2\"/><PanelItem componentid=\"Button_21_3\" id=\"PI_21_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_21_1","140","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널21-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_21_2","140","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널21-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_21_3","140","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널21-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel22","270","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_22_1\" id=\"PI_22_1\"/><PanelItem componentid=\"Button_22_2\" id=\"PI_22_2\"/><PanelItem componentid=\"Button_22_3\" id=\"PI_22_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_22_1","270","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널22-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_22_2","270","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널22-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_22_3","270","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널22-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel23","400","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_23_1\" id=\"PI_23_1\"/><PanelItem componentid=\"Button_23_2\" id=\"PI_23_2\"/><PanelItem componentid=\"Button_23_3\" id=\"PI_23_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_23_1","400","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널23-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_23_2","400","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널23-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_23_3","400","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널23-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel24","530","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_24_1\" id=\"PI_24_1\"/><PanelItem componentid=\"Button_24_2\" id=\"PI_24_2\"/><PanelItem componentid=\"Button_24_3\" id=\"PI_24_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_24_1","530","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널24-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_24_2","530","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널24-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_24_3","530","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널24-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel25","660","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_25_1\" id=\"PI_25_1\"/><PanelItem componentid=\"Button_25_2\" id=\"PI_25_2\"/><PanelItem componentid=\"Button_25_3\" id=\"PI_25_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_25_1","660","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널25-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_25_2","660","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널25-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_25_3","660","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널25-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel26","790","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_26_1\" id=\"PI_26_1\"/><PanelItem componentid=\"Button_26_2\" id=\"PI_26_2\"/><PanelItem componentid=\"Button_26_3\" id=\"PI_26_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_26_1","790","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널26-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_26_2","790","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널26-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_26_3","790","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널26-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel27","920","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_27_1\" id=\"PI_27_1\"/><PanelItem componentid=\"Button_27_2\" id=\"PI_27_2\"/><PanelItem componentid=\"Button_27_3\" id=\"PI_27_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_27_1","920","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널27-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_27_2","920","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널27-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_27_3","920","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널27-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel28","1050","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_28_1\" id=\"PI_28_1\"/><PanelItem componentid=\"Button_28_2\" id=\"PI_28_2\"/><PanelItem componentid=\"Button_28_3\" id=\"PI_28_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_28_1","1050","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널28-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_28_2","1050","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널28-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_28_3","1050","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널28-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel29","1180","230",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_29_1\" id=\"PI_29_1\"/><PanelItem componentid=\"Button_29_2\" id=\"PI_29_2\"/><PanelItem componentid=\"Button_29_3\" id=\"PI_29_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_29_1","1180","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널29-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_29_2","1180","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널29-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_29_3","1180","230",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널29-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel30","10","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_30_1\" id=\"PI_30_1\"/><PanelItem componentid=\"Button_30_2\" id=\"PI_30_2\"/><PanelItem componentid=\"Button_30_3\" id=\"PI_30_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_30_1","10","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널30-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_30_2","10","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널30-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_30_3","10","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널30-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel31","140","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_31_1\" id=\"PI_31_1\"/><PanelItem componentid=\"Button_31_2\" id=\"PI_31_2\"/><PanelItem componentid=\"Button_31_3\" id=\"PI_31_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_31_1","140","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널31-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_31_2","140","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널31-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_31_3","140","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널31-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel32","270","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_32_1\" id=\"PI_32_1\"/><PanelItem componentid=\"Button_32_2\" id=\"PI_32_2\"/><PanelItem componentid=\"Button_32_3\" id=\"PI_32_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_32_1","270","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널32-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_32_2","270","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널32-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_32_3","270","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널32-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel33","400","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_33_1\" id=\"PI_33_1\"/><PanelItem componentid=\"Button_33_2\" id=\"PI_33_2\"/><PanelItem componentid=\"Button_33_3\" id=\"PI_33_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_33_1","400","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널33-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_33_2","400","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널33-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_33_3","400","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널33-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel34","530","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_34_1\" id=\"PI_34_1\"/><PanelItem componentid=\"Button_34_2\" id=\"PI_34_2\"/><PanelItem componentid=\"Button_34_3\" id=\"PI_34_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_34_1","530","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널34-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_34_2","530","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널34-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_34_3","530","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널34-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel35","660","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_35_1\" id=\"PI_35_1\"/><PanelItem componentid=\"Button_35_2\" id=\"PI_35_2\"/><PanelItem componentid=\"Button_35_3\" id=\"PI_35_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_35_1","660","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널35-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_35_2","660","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널35-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_35_3","660","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널35-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel36","790","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_36_1\" id=\"PI_36_1\"/><PanelItem componentid=\"Button_36_2\" id=\"PI_36_2\"/><PanelItem componentid=\"Button_36_3\" id=\"PI_36_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_36_1","790","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널36-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_36_2","790","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널36-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_36_3","790","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널36-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel37","920","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_37_1\" id=\"PI_37_1\"/><PanelItem componentid=\"Button_37_2\" id=\"PI_37_2\"/><PanelItem componentid=\"Button_37_3\" id=\"PI_37_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_37_1","920","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널37-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_37_2","920","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널37-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_37_3","920","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널37-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel38","1050","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_38_1\" id=\"PI_38_1\"/><PanelItem componentid=\"Button_38_2\" id=\"PI_38_2\"/><PanelItem componentid=\"Button_38_3\" id=\"PI_38_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_38_1","1050","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널38-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_38_2","1050","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널38-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_38_3","1050","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널38-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel39","1180","340",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_39_1\" id=\"PI_39_1\"/><PanelItem componentid=\"Button_39_2\" id=\"PI_39_2\"/><PanelItem componentid=\"Button_39_3\" id=\"PI_39_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_39_1","1180","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널39-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_39_2","1180","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널39-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_39_3","1180","340",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널39-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel40","10","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_40_1\" id=\"PI_40_1\"/><PanelItem componentid=\"Button_40_2\" id=\"PI_40_2\"/><PanelItem componentid=\"Button_40_3\" id=\"PI_40_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_40_1","10","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널40-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_40_2","10","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널40-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_40_3","10","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널40-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel41","140","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_41_1\" id=\"PI_41_1\"/><PanelItem componentid=\"Button_41_2\" id=\"PI_41_2\"/><PanelItem componentid=\"Button_41_3\" id=\"PI_41_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_41_1","140","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널41-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_41_2","140","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널41-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_41_3","140","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널41-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel42","270","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_42_1\" id=\"PI_42_1\"/><PanelItem componentid=\"Button_42_2\" id=\"PI_42_2\"/><PanelItem componentid=\"Button_42_3\" id=\"PI_42_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_42_1","270","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널42-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_42_2","270","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널42-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_42_3","270","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널42-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel43","400","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_43_1\" id=\"PI_43_1\"/><PanelItem componentid=\"Button_43_2\" id=\"PI_43_2\"/><PanelItem componentid=\"Button_43_3\" id=\"PI_43_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_43_1","400","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널43-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_43_2","400","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널43-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_43_3","400","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널43-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel44","530","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_44_1\" id=\"PI_44_1\"/><PanelItem componentid=\"Button_44_2\" id=\"PI_44_2\"/><PanelItem componentid=\"Button_44_3\" id=\"PI_44_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_44_1","530","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널44-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_44_2","530","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널44-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_44_3","530","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널44-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel45","660","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_45_1\" id=\"PI_45_1\"/><PanelItem componentid=\"Button_45_2\" id=\"PI_45_2\"/><PanelItem componentid=\"Button_45_3\" id=\"PI_45_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_45_1","660","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널45-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_45_2","660","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널45-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_45_3","660","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널45-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel46","790","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_46_1\" id=\"PI_46_1\"/><PanelItem componentid=\"Button_46_2\" id=\"PI_46_2\"/><PanelItem componentid=\"Button_46_3\" id=\"PI_46_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_46_1","790","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널46-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_46_2","790","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널46-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_46_3","790","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널46-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel47","920","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_47_1\" id=\"PI_47_1\"/><PanelItem componentid=\"Button_47_2\" id=\"PI_47_2\"/><PanelItem componentid=\"Button_47_3\" id=\"PI_47_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_47_1","920","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널47-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_47_2","920","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널47-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_47_3","920","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널47-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel48","1050","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_48_1\" id=\"PI_48_1\"/><PanelItem componentid=\"Button_48_2\" id=\"PI_48_2\"/><PanelItem componentid=\"Button_48_3\" id=\"PI_48_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_48_1","1050","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널48-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_48_2","1050","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널48-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_48_3","1050","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널48-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel49","1180","450",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_49_1\" id=\"PI_49_1\"/><PanelItem componentid=\"Button_49_2\" id=\"PI_49_2\"/><PanelItem componentid=\"Button_49_3\" id=\"PI_49_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_49_1","1180","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널49-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_49_2","1180","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널49-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_49_3","1180","450",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널49-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel50","10","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_50_1\" id=\"PI_50_1\"/><PanelItem componentid=\"Button_50_2\" id=\"PI_50_2\"/><PanelItem componentid=\"Button_50_3\" id=\"PI_50_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_50_1","10","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널50-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_50_2","10","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널50-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_50_3","10","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널50-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel51","140","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_51_1\" id=\"PI_51_1\"/><PanelItem componentid=\"Button_51_2\" id=\"PI_51_2\"/><PanelItem componentid=\"Button_51_3\" id=\"PI_51_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_51_1","140","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널51-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_51_2","140","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널51-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_51_3","140","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널51-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel52","270","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_52_1\" id=\"PI_52_1\"/><PanelItem componentid=\"Button_52_2\" id=\"PI_52_2\"/><PanelItem componentid=\"Button_52_3\" id=\"PI_52_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_52_1","270","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널52-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_52_2","270","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널52-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_52_3","270","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널52-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel53","400","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_53_1\" id=\"PI_53_1\"/><PanelItem componentid=\"Button_53_2\" id=\"PI_53_2\"/><PanelItem componentid=\"Button_53_3\" id=\"PI_53_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_53_1","400","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널53-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_53_2","400","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널53-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_53_3","400","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널53-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel54","530","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_54_1\" id=\"PI_54_1\"/><PanelItem componentid=\"Button_54_2\" id=\"PI_54_2\"/><PanelItem componentid=\"Button_54_3\" id=\"PI_54_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_54_1","530","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널54-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_54_2","530","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널54-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_54_3","530","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널54-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel55","660","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_55_1\" id=\"PI_55_1\"/><PanelItem componentid=\"Button_55_2\" id=\"PI_55_2\"/><PanelItem componentid=\"Button_55_3\" id=\"PI_55_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_55_1","660","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널55-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_55_2","660","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널55-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_55_3","660","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널55-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel56","790","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_56_1\" id=\"PI_56_1\"/><PanelItem componentid=\"Button_56_2\" id=\"PI_56_2\"/><PanelItem componentid=\"Button_56_3\" id=\"PI_56_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_56_1","790","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널56-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_56_2","790","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널56-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_56_3","790","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널56-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel57","920","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_57_1\" id=\"PI_57_1\"/><PanelItem componentid=\"Button_57_2\" id=\"PI_57_2\"/><PanelItem componentid=\"Button_57_3\" id=\"PI_57_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_57_1","920","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널57-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_57_2","920","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널57-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_57_3","920","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널57-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel58","1050","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_58_1\" id=\"PI_58_1\"/><PanelItem componentid=\"Button_58_2\" id=\"PI_58_2\"/><PanelItem componentid=\"Button_58_3\" id=\"PI_58_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_58_1","1050","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널58-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_58_2","1050","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널58-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_58_3","1050","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널58-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel59","1180","560",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_59_1\" id=\"PI_59_1\"/><PanelItem componentid=\"Button_59_2\" id=\"PI_59_2\"/><PanelItem componentid=\"Button_59_3\" id=\"PI_59_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_59_1","1180","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널59-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_59_2","1180","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널59-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_59_3","1180","560",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널59-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel60","10","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_60_1\" id=\"PI_60_1\"/><PanelItem componentid=\"Button_60_2\" id=\"PI_60_2\"/><PanelItem componentid=\"Button_60_3\" id=\"PI_60_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_60_1","10","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널60-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_60_2","10","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널60-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_60_3","10","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널60-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel61","140","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_61_1\" id=\"PI_61_1\"/><PanelItem componentid=\"Button_61_2\" id=\"PI_61_2\"/><PanelItem componentid=\"Button_61_3\" id=\"PI_61_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_61_1","140","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널61-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_61_2","140","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널61-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_61_3","140","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널61-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel62","270","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_62_1\" id=\"PI_62_1\"/><PanelItem componentid=\"Button_62_2\" id=\"PI_62_2\"/><PanelItem componentid=\"Button_62_3\" id=\"PI_62_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_62_1","270","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널62-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_62_2","270","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널62-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_62_3","270","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널62-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel63","400","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_63_1\" id=\"PI_63_1\"/><PanelItem componentid=\"Button_63_2\" id=\"PI_63_2\"/><PanelItem componentid=\"Button_63_3\" id=\"PI_63_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_63_1","400","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널63-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_63_2","400","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널63-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_63_3","400","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널63-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel64","530","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_64_1\" id=\"PI_64_1\"/><PanelItem componentid=\"Button_64_2\" id=\"PI_64_2\"/><PanelItem componentid=\"Button_64_3\" id=\"PI_64_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_64_1","530","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널64-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_64_2","530","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널64-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_64_3","530","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널64-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel65","660","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_65_1\" id=\"PI_65_1\"/><PanelItem componentid=\"Button_65_2\" id=\"PI_65_2\"/><PanelItem componentid=\"Button_65_3\" id=\"PI_65_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_65_1","660","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널65-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_65_2","660","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널65-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_65_3","660","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널65-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel66","790","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_66_1\" id=\"PI_66_1\"/><PanelItem componentid=\"Button_66_2\" id=\"PI_66_2\"/><PanelItem componentid=\"Button_66_3\" id=\"PI_66_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_66_1","790","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널66-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_66_2","790","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널66-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_66_3","790","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널66-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel67","920","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_67_1\" id=\"PI_67_1\"/><PanelItem componentid=\"Button_67_2\" id=\"PI_67_2\"/><PanelItem componentid=\"Button_67_3\" id=\"PI_67_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_67_1","920","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널67-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_67_2","920","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널67-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_67_3","920","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널67-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel68","1050","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_68_1\" id=\"PI_68_1\"/><PanelItem componentid=\"Button_68_2\" id=\"PI_68_2\"/><PanelItem componentid=\"Button_68_3\" id=\"PI_68_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_68_1","1050","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널68-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_68_2","1050","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널68-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_68_3","1050","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널68-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel69","1180","670",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_69_1\" id=\"PI_69_1\"/><PanelItem componentid=\"Button_69_2\" id=\"PI_69_2\"/><PanelItem componentid=\"Button_69_3\" id=\"PI_69_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_69_1","1180","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널69-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_69_2","1180","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널69-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_69_3","1180","670",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널69-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel70","10","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_70_1\" id=\"PI_70_1\"/><PanelItem componentid=\"Button_70_2\" id=\"PI_70_2\"/><PanelItem componentid=\"Button_70_3\" id=\"PI_70_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_70_1","10","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널70-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_70_2","10","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널70-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_70_3","10","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널70-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel71","140","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_71_1\" id=\"PI_71_1\"/><PanelItem componentid=\"Button_71_2\" id=\"PI_71_2\"/><PanelItem componentid=\"Button_71_3\" id=\"PI_71_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_71_1","140","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널71-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_71_2","140","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널71-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_71_3","140","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널71-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel72","270","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_72_1\" id=\"PI_72_1\"/><PanelItem componentid=\"Button_72_2\" id=\"PI_72_2\"/><PanelItem componentid=\"Button_72_3\" id=\"PI_72_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_72_1","270","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널72-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_72_2","270","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널72-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_72_3","270","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널72-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel73","400","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_73_1\" id=\"PI_73_1\"/><PanelItem componentid=\"Button_73_2\" id=\"PI_73_2\"/><PanelItem componentid=\"Button_73_3\" id=\"PI_73_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_73_1","400","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널73-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_73_2","400","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널73-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_73_3","400","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널73-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel74","530","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_74_1\" id=\"PI_74_1\"/><PanelItem componentid=\"Button_74_2\" id=\"PI_74_2\"/><PanelItem componentid=\"Button_74_3\" id=\"PI_74_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_74_1","530","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널74-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_74_2","530","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널74-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_74_3","530","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널74-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel75","660","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_75_1\" id=\"PI_75_1\"/><PanelItem componentid=\"Button_75_2\" id=\"PI_75_2\"/><PanelItem componentid=\"Button_75_3\" id=\"PI_75_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_75_1","660","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널75-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_75_2","660","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널75-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_75_3","660","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널75-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel76","790","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_76_1\" id=\"PI_76_1\"/><PanelItem componentid=\"Button_76_2\" id=\"PI_76_2\"/><PanelItem componentid=\"Button_76_3\" id=\"PI_76_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_76_1","790","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널76-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_76_2","790","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널76-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_76_3","790","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널76-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel77","920","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_77_1\" id=\"PI_77_1\"/><PanelItem componentid=\"Button_77_2\" id=\"PI_77_2\"/><PanelItem componentid=\"Button_77_3\" id=\"PI_77_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_77_1","920","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널77-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_77_2","920","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널77-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_77_3","920","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널77-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel78","1050","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_78_1\" id=\"PI_78_1\"/><PanelItem componentid=\"Button_78_2\" id=\"PI_78_2\"/><PanelItem componentid=\"Button_78_3\" id=\"PI_78_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_78_1","1050","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널78-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_78_2","1050","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널78-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_78_3","1050","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널78-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel79","1180","780",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_79_1\" id=\"PI_79_1\"/><PanelItem componentid=\"Button_79_2\" id=\"PI_79_2\"/><PanelItem componentid=\"Button_79_3\" id=\"PI_79_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_79_1","1180","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널79-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_79_2","1180","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널79-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_79_3","1180","780",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널79-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel80","10","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_80_1\" id=\"PI_80_1\"/><PanelItem componentid=\"Button_80_2\" id=\"PI_80_2\"/><PanelItem componentid=\"Button_80_3\" id=\"PI_80_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_80_1","10","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널80-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_80_2","10","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널80-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_80_3","10","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널80-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel81","140","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_81_1\" id=\"PI_81_1\"/><PanelItem componentid=\"Button_81_2\" id=\"PI_81_2\"/><PanelItem componentid=\"Button_81_3\" id=\"PI_81_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_81_1","140","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널81-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_81_2","140","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널81-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_81_3","140","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널81-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel82","270","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_82_1\" id=\"PI_82_1\"/><PanelItem componentid=\"Button_82_2\" id=\"PI_82_2\"/><PanelItem componentid=\"Button_82_3\" id=\"PI_82_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_82_1","270","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널82-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_82_2","270","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널82-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_82_3","270","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널82-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel83","400","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_83_1\" id=\"PI_83_1\"/><PanelItem componentid=\"Button_83_2\" id=\"PI_83_2\"/><PanelItem componentid=\"Button_83_3\" id=\"PI_83_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_83_1","400","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널83-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_83_2","400","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널83-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_83_3","400","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널83-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel84","530","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_84_1\" id=\"PI_84_1\"/><PanelItem componentid=\"Button_84_2\" id=\"PI_84_2\"/><PanelItem componentid=\"Button_84_3\" id=\"PI_84_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_84_1","530","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널84-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_84_2","530","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널84-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_84_3","530","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널84-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel85","660","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_85_1\" id=\"PI_85_1\"/><PanelItem componentid=\"Button_85_2\" id=\"PI_85_2\"/><PanelItem componentid=\"Button_85_3\" id=\"PI_85_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_85_1","660","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널85-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_85_2","660","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널85-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_85_3","660","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널85-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel86","790","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_86_1\" id=\"PI_86_1\"/><PanelItem componentid=\"Button_86_2\" id=\"PI_86_2\"/><PanelItem componentid=\"Button_86_3\" id=\"PI_86_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_86_1","790","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널86-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_86_2","790","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널86-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_86_3","790","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널86-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel87","920","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_87_1\" id=\"PI_87_1\"/><PanelItem componentid=\"Button_87_2\" id=\"PI_87_2\"/><PanelItem componentid=\"Button_87_3\" id=\"PI_87_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_87_1","920","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널87-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_87_2","920","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널87-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_87_3","920","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널87-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel88","1050","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_88_1\" id=\"PI_88_1\"/><PanelItem componentid=\"Button_88_2\" id=\"PI_88_2\"/><PanelItem componentid=\"Button_88_3\" id=\"PI_88_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_88_1","1050","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널88-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_88_2","1050","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널88-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_88_3","1050","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널88-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel89","1180","890",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_89_1\" id=\"PI_89_1\"/><PanelItem componentid=\"Button_89_2\" id=\"PI_89_2\"/><PanelItem componentid=\"Button_89_3\" id=\"PI_89_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_89_1","1180","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널89-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_89_2","1180","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널89-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_89_3","1180","890",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널89-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel90","10","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_90_1\" id=\"PI_90_1\"/><PanelItem componentid=\"Button_90_2\" id=\"PI_90_2\"/><PanelItem componentid=\"Button_90_3\" id=\"PI_90_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_90_1","10","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널90-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_90_2","10","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널90-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_90_3","10","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널90-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel91","140","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_91_1\" id=\"PI_91_1\"/><PanelItem componentid=\"Button_91_2\" id=\"PI_91_2\"/><PanelItem componentid=\"Button_91_3\" id=\"PI_91_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_91_1","140","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널91-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_91_2","140","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널91-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_91_3","140","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널91-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel92","270","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_92_1\" id=\"PI_92_1\"/><PanelItem componentid=\"Button_92_2\" id=\"PI_92_2\"/><PanelItem componentid=\"Button_92_3\" id=\"PI_92_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_92_1","270","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널92-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_92_2","270","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널92-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_92_3","270","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널92-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel93","400","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_93_1\" id=\"PI_93_1\"/><PanelItem componentid=\"Button_93_2\" id=\"PI_93_2\"/><PanelItem componentid=\"Button_93_3\" id=\"PI_93_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_93_1","400","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널93-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_93_2","400","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널93-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_93_3","400","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널93-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel94","530","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_94_1\" id=\"PI_94_1\"/><PanelItem componentid=\"Button_94_2\" id=\"PI_94_2\"/><PanelItem componentid=\"Button_94_3\" id=\"PI_94_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_94_1","530","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널94-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_94_2","530","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널94-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_94_3","530","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널94-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel95","660","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_95_1\" id=\"PI_95_1\"/><PanelItem componentid=\"Button_95_2\" id=\"PI_95_2\"/><PanelItem componentid=\"Button_95_3\" id=\"PI_95_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_95_1","660","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널95-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_95_2","660","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널95-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_95_3","660","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널95-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel96","790","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_96_1\" id=\"PI_96_1\"/><PanelItem componentid=\"Button_96_2\" id=\"PI_96_2\"/><PanelItem componentid=\"Button_96_3\" id=\"PI_96_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_96_1","790","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널96-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_96_2","790","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널96-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_96_3","790","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널96-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel97","920","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_97_1\" id=\"PI_97_1\"/><PanelItem componentid=\"Button_97_2\" id=\"PI_97_2\"/><PanelItem componentid=\"Button_97_3\" id=\"PI_97_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_97_1","920","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널97-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_97_2","920","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널97-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_97_3","920","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널97-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel98","1050","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_98_1\" id=\"PI_98_1\"/><PanelItem componentid=\"Button_98_2\" id=\"PI_98_2\"/><PanelItem componentid=\"Button_98_3\" id=\"PI_98_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_98_1","1050","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널98-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_98_2","1050","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널98-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_98_3","1050","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널98-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel99","1180","1000",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_99_1\" id=\"PI_99_1\"/><PanelItem componentid=\"Button_99_2\" id=\"PI_99_2\"/><PanelItem componentid=\"Button_99_3\" id=\"PI_99_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_99_1","1180","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널99-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_99_2","1180","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널99-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_99_3","1180","1000",null,null,null,null,null,null,null,null,this);
            obj.set_text("패널99-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","1422","21","118","42",null,null,null,null,null,null,this);
            obj.set_taborder("400");
            obj.set_text("Text 변경");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1560,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Perf_Work - 복사본.xfdl", function(nexacro, system, trace) {

        this.Button00_onclick = function(obj,e)
        {
        	var comps = this.components;
        	for( var i = 0 ; i<comps.length ; i++ )
        	{
        		var comp = comps[i];
        		if(comp.id.startsWith("Button"))
        		{
        			comp.text = comp.text + "#";
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Perf_Work - 복사본.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
