(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testPanel");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel00","34","16","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_00","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_00","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","44","186","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_01","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_01","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_01","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_01","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_01","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","44","396","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_02","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_02","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_02","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_02","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_02","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","44","576","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_03","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_03","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_03","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_03","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_03","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_03","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","44","786","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_04","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_04","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_04","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_04","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_04","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_04","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_04","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_04","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_04","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","44","936","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","59","34","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","144","44","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00_00","217","42","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00_00","284","46","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_00_00","384","57","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_00_00","421","39","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_00","417","43","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_00","347","35","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_00","262","36","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","208","34","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","125","34","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","54","1106","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_05","49","24","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_05","134","34","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_05","207","32","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_05","274","36","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_05","374","47","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_05","411","29","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_05","407","33","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_05","337","25","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_05","252","26","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_05","198","24","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_05","115","24","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","44","1226","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_05\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","59","34","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_01","144","44","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00_01","217","42","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00_01","284","46","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_00_01","384","57","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_00_01","421","39","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00_01","417","43","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00_01","347","35","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00_01","262","36","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","208","34","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_01","125","34","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","54","1396","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","69","44","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_01_00","154","54","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_01_00","227","52","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_01_00","294","56","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_01_00","394","67","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_01_00","431","49","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_01_00","427","53","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01_00","357","45","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01_00","272","46","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","218","44","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00","135","44","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","54","1606","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02_00","79","54","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02_00","164","64","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_02_00","237","62","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_02_00","304","66","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_02_00","404","77","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_02_00","441","59","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_02_00","437","63","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02_00","367","55","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02_00","282","56","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02_00","228","54","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","145","54","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","54","1786","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_00","89","64","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_03_00","174","74","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_03_00","247","72","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_03_00","314","76","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_03_00","414","87","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_03_00","451","69","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_03_00","447","73","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_03_00","377","65","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_03_00","292","66","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03_00","238","64","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03_00","155","64","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03_00","54","1996","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_04_00","99","74","74","37",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_04_00","184","84","79","34",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_04_00","257","82","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_04_00","324","86","82","41",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04_04_00","424","97","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05_04_00","461","79","77","35",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_04_00","457","83","346","117",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn05_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_04_00","387","75","445","144",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn04_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04_00","302","76","557","162",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_04_00","248","74","664","183",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn02_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_04_00","165","74","766","200",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04_00","54","2146","859","213",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_04_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.loadIncludeScript("testPanel3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
