(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BMT_01");
            this.set_titletext("화면로딩");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","20","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("6");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","110","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("7");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","470","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("8");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","560","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("9");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03","200","51","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("10");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04","380","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("11");
            obj.set_text("11");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05","290","50","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("12");
            obj.set_text("12");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","740","51","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("13");
            obj.set_text("13");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","830","51","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("14");
            obj.set_text("14");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00","650","51","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("15");
            obj.set_text("15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06","20","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("16");
            obj.set_text("16");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","110","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("17");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","470","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("18");
            obj.set_text("18");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01","560","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("19");
            obj.set_text("19");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00","200","97","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("20");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01","380","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("21");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00","290","96","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("22");
            obj.set_text("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","740","97","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("23");
            obj.set_text("23");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00","830","97","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("24");
            obj.set_text("24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00","650","97","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("25");
            obj.set_text("25");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07","20","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("26");
            obj.set_text("26");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","110","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("27");
            obj.set_text("27");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02","470","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("28");
            obj.set_text("28");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02","560","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_value("29");
            obj.set_text("29");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01","200","144","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("30");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02","380","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_value("31");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01","290","143","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("32");
            obj.set_text("32");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","740","144","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("33");
            obj.set_text("33");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01","830","144","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("34");
            obj.set_text("34");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01","650","144","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("35");
            obj.set_text("35");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00","20","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("36");
            obj.set_text("36");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","110","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("37");
            obj.set_text("37");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00","470","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("38");
            obj.set_text("38");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00","560","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("39");
            obj.set_text("39");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00","200","190","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_value("40");
            obj.set_text("40");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00","380","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_value("41");
            obj.set_text("41");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00","290","189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_value("42");
            obj.set_text("42");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","740","190","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_value("43");
            obj.set_text("43");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00","830","190","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("44");
            obj.set_text("44");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00","650","190","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_value("45");
            obj.set_text("45");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08","20","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("46");
            obj.set_text("46");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02","110","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("47");
            obj.set_text("47");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03","470","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_value("48");
            obj.set_text("48");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03","560","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_value("49");
            obj.set_text("49");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02","200","240","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("50");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03","380","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_value("51");
            obj.set_text("51");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02","290","239","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_value("52");
            obj.set_text("52");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02","740","240","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_value("53");
            obj.set_text("53");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02","830","240","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_value("54");
            obj.set_text("54");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02","650","240","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_value("55");
            obj.set_text("55");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01","20","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_value("56");
            obj.set_text("56");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01","110","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_value("57");
            obj.set_text("57");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01","470","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_value("58");
            obj.set_text("58");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01","560","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_value("59");
            obj.set_text("59");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01","200","286","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_value("60");
            obj.set_text("60");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01","380","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_value("61");
            obj.set_text("61");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01","290","285","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_value("62");
            obj.set_text("62");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","740","286","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("63");
            obj.set_text("63");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01","830","286","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_value("64");
            obj.set_text("64");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01","650","286","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("65");
            obj.set_text("65");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00","20","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_value("66");
            obj.set_text("66");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","110","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_value("67");
            obj.set_text("67");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00","470","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_value("68");
            obj.set_text("68");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00","560","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_value("69");
            obj.set_text("69");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00","200","333","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_value("70");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00","380","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_value("71");
            obj.set_text("71");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00","290","332","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_value("72");
            obj.set_text("72");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","740","333","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_value("73");
            obj.set_text("73");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00","830","333","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_value("74");
            obj.set_text("74");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00","650","333","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_value("75");
            obj.set_text("75");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00","20","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_value("76");
            obj.set_text("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","110","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_value("77");
            obj.set_text("77");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00","470","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_value("78");
            obj.set_text("78");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00","560","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_value("79");
            obj.set_text("79");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00","200","379","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_value("80");
            obj.set_text("80");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00","380","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_value("81");
            obj.set_text("81");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00","290","378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_value("82");
            obj.set_text("82");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","740","379","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_value("83");
            obj.set_text("83");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00","830","379","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_value("84");
            obj.set_text("84");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00","650","379","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_value("85");
            obj.set_text("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09","20","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_value("86");
            obj.set_text("86");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03","110","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_value("87");
            obj.set_text("87");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04","470","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_value("88");
            obj.set_text("88");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04","560","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_value("89");
            obj.set_text("89");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03","200","430","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("90");
            obj.set_text("90");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04","380","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_value("91");
            obj.set_text("91");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03","290","429","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_value("92");
            obj.set_text("92");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03","740","430","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_value("93");
            obj.set_text("93");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03","830","430","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_value("94");
            obj.set_text("94");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03","650","430","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_value("95");
            obj.set_text("95");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02","20","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_value("96");
            obj.set_text("96");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02","110","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_value("97");
            obj.set_text("97");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02","470","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_value("98");
            obj.set_text("98");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02","560","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("99");
            obj.set_text("99");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02","200","476","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_value("100");
            obj.set_text("100");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02","380","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_value("101");
            obj.set_text("101");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02","290","475","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_value("102");
            obj.set_text("102");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02","740","476","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_value("103");
            obj.set_text("103");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02","830","476","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_value("104");
            obj.set_text("104");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02","650","476","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_value("105");
            obj.set_text("105");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01","20","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_value("106");
            obj.set_text("106");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01","110","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_value("107");
            obj.set_text("107");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01","470","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_value("108");
            obj.set_text("108");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01","560","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_value("109");
            obj.set_text("109");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01","200","523","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("110");
            obj.set_text("110");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01","380","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_value("111");
            obj.set_text("111");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01","290","522","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_value("112");
            obj.set_text("112");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","740","523","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_value("113");
            obj.set_text("113");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01","830","523","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_value("114");
            obj.set_text("114");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01","650","523","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_value("115");
            obj.set_text("115");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01","20","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_value("116");
            obj.set_text("116");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01","110","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_value("117");
            obj.set_text("117");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01","470","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_value("118");
            obj.set_text("118");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01","560","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_value("119");
            obj.set_text("119");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01","200","569","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_value("120");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01","380","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_value("121");
            obj.set_text("121");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01","290","568","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_value("122");
            obj.set_text("122");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","740","569","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_value("123");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01","830","569","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_value("124");
            obj.set_text("124");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01","650","569","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_value("125");
            obj.set_text("125");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00","20","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_value("126");
            obj.set_text("126");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00","110","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_value("127");
            obj.set_text("127");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00","470","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_value("128");
            obj.set_text("128");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00","560","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_value("129");
            obj.set_text("129");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00","200","619","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_value("130");
            obj.set_text("130");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00","380","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_value("131");
            obj.set_text("131");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00","290","618","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_value("132");
            obj.set_text("132");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","740","619","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_value("133");
            obj.set_text("133");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00","830","619","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_value("134");
            obj.set_text("134");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00","650","619","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_value("135");
            obj.set_text("135");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00","20","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_value("136");
            obj.set_text("136");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00","110","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_value("137");
            obj.set_text("137");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00","470","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_value("138");
            obj.set_text("138");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00","560","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_value("139");
            obj.set_text("139");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00","200","665","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_value("140");
            obj.set_text("140");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00","380","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_value("141");
            obj.set_text("141");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00","290","664","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_value("142");
            obj.set_text("142");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","740","665","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_value("143");
            obj.set_text("143");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00","830","665","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_value("144");
            obj.set_text("144");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00","650","665","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_value("145");
            obj.set_text("145");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00","20","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_value("146");
            obj.set_text("146");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00","110","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_value("147");
            obj.set_text("147");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00","470","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_value("148");
            obj.set_text("148");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00","560","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_value("149");
            obj.set_text("149");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00","200","712","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_value("150");
            obj.set_text("150");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00","380","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_value("151");
            obj.set_text("151");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00","290","711","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_value("152");
            obj.set_text("152");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","740","712","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_value("153");
            obj.set_text("153");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00","830","712","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_value("154");
            obj.set_text("154");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00","650","712","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_value("155");
            obj.set_text("155");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00","20","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_value("156");
            obj.set_text("156");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","110","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_value("157");
            obj.set_text("157");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00","470","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_value("158");
            obj.set_text("158");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00","560","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_value("159");
            obj.set_text("159");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00","200","758","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_value("160");
            obj.set_text("160");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00","380","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_value("161");
            obj.set_text("161");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00","290","757","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_value("162");
            obj.set_text("162");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","740","758","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_value("163");
            obj.set_text("163");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00","830","758","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_value("164");
            obj.set_text("164");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00","650","758","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_value("165");
            obj.set_text("165");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_10","20","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_value("166");
            obj.set_text("166");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_04","110","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_value("167");
            obj.set_text("167");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_05","470","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_value("168");
            obj.set_text("168");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_05","560","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_value("169");
            obj.set_text("169");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_04","200","810","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_value("170");
            obj.set_text("170");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_05","380","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_value("171");
            obj.set_text("171");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_04","290","809","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_value("172");
            obj.set_text("172");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_04","740","810","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_value("173");
            obj.set_text("173");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_04","830","810","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_value("174");
            obj.set_text("174");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_04","650","810","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_value("175");
            obj.set_text("175");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_03","20","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_value("176");
            obj.set_text("176");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_03","110","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_value("177");
            obj.set_text("177");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_03","470","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_value("178");
            obj.set_text("178");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_03","560","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_value("179");
            obj.set_text("179");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_03","200","856","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_value("180");
            obj.set_text("180");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_03","380","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_value("181");
            obj.set_text("181");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_03","290","855","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_value("182");
            obj.set_text("182");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_03","740","856","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_value("183");
            obj.set_text("183");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_03","830","856","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_value("184");
            obj.set_text("184");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_03","650","856","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_value("185");
            obj.set_text("185");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_02","20","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_value("186");
            obj.set_text("186");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_02","110","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_value("187");
            obj.set_text("187");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_02","470","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_value("188");
            obj.set_text("188");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_02","560","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_value("189");
            obj.set_text("189");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_02","200","903","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_value("190");
            obj.set_text("190");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_02","380","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_value("191");
            obj.set_text("191");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_02","290","902","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_value("192");
            obj.set_text("192");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_02","740","903","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_value("193");
            obj.set_text("193");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_02","830","903","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_value("194");
            obj.set_text("194");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_02","650","903","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_value("195");
            obj.set_text("195");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_02","20","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_value("196");
            obj.set_text("196");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_02","110","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_value("197");
            obj.set_text("197");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_02","470","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_value("198");
            obj.set_text("198");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_02","560","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_value("199");
            obj.set_text("199");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_02","200","949","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_value("200");
            obj.set_text("200");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_02","380","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_value("201");
            obj.set_text("201");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_02","290","948","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_value("202");
            obj.set_text("202");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_02","740","949","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_value("203");
            obj.set_text("203");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_02","830","949","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_value("204");
            obj.set_text("204");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_02","650","949","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_value("205");
            obj.set_text("205");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_01","20","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_value("206");
            obj.set_text("206");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_01","110","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_value("207");
            obj.set_text("207");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_01","470","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_value("208");
            obj.set_text("208");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_01","560","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_value("209");
            obj.set_text("209");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_01","200","999","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_value("210");
            obj.set_text("210");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_01","380","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_value("211");
            obj.set_text("211");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_01","290","998","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_value("212");
            obj.set_text("212");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_01","740","999","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_value("213");
            obj.set_text("213");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_01","830","999","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_value("214");
            obj.set_text("214");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_01","650","999","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_value("215");
            obj.set_text("215");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_01","20","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_value("216");
            obj.set_text("216");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01","110","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_value("217");
            obj.set_text("217");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_01","470","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_value("218");
            obj.set_text("218");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_01","560","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_value("219");
            obj.set_text("219");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_01","200","1045","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_value("220");
            obj.set_text("220");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_01","380","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_value("221");
            obj.set_text("221");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_01","290","1044","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_value("222");
            obj.set_text("222");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_01","740","1045","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_value("223");
            obj.set_text("223");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_01","830","1045","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_value("224");
            obj.set_text("224");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_01","650","1045","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_value("225");
            obj.set_text("225");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_01","20","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_value("226");
            obj.set_text("226");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_01","110","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_value("227");
            obj.set_text("227");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_01","470","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_value("228");
            obj.set_text("228");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_01","560","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_value("229");
            obj.set_text("229");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_01","200","1092","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_value("230");
            obj.set_text("230");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_01","380","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_value("231");
            obj.set_text("231");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_01","290","1091","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_value("232");
            obj.set_text("232");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","740","1092","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_value("233");
            obj.set_text("233");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_01","830","1092","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_value("234");
            obj.set_text("234");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_01","650","1092","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_value("235");
            obj.set_text("235");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_01","20","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_value("236");
            obj.set_text("236");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_01","110","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_value("237");
            obj.set_text("237");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_01","470","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_value("238");
            obj.set_text("238");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_01","560","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_value("239");
            obj.set_text("239");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_01","200","1138","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_value("240");
            obj.set_text("240");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_01","380","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_value("241");
            obj.set_text("241");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_01","290","1137","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_value("242");
            obj.set_text("242");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01","740","1138","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_value("243");
            obj.set_text("243");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_01","830","1138","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_value("244");
            obj.set_text("244");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_01","650","1138","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_value("245");
            obj.set_text("245");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09_00","20","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_value("246");
            obj.set_text("246");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03_00","110","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_value("247");
            obj.set_text("247");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04_00","470","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_value("248");
            obj.set_text("248");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04_00","560","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_value("249");
            obj.set_text("249");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03_00","200","1189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_value("250");
            obj.set_text("250");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04_00","380","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_value("251");
            obj.set_text("251");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03_00","290","1188","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_value("252");
            obj.set_text("252");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03_00","740","1189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("247");
            obj.set_value("253");
            obj.set_text("253");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03_00","830","1189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("248");
            obj.set_value("254");
            obj.set_text("254");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03_00","650","1189","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("249");
            obj.set_value("255");
            obj.set_text("255");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02_00","20","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("250");
            obj.set_value("256");
            obj.set_text("256");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02_00","110","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("251");
            obj.set_value("257");
            obj.set_text("257");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02_00","470","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("252");
            obj.set_value("258");
            obj.set_text("258");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02_00","560","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("253");
            obj.set_value("259");
            obj.set_text("259");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02_00","200","1235","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("254");
            obj.set_value("260");
            obj.set_text("260");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02_00","380","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("255");
            obj.set_value("261");
            obj.set_text("261");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02_00","290","1234","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("256");
            obj.set_value("262");
            obj.set_text("262");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02_00","740","1235","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("257");
            obj.set_value("263");
            obj.set_text("263");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02_00","830","1235","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("258");
            obj.set_value("264");
            obj.set_text("264");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02_00","650","1235","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("259");
            obj.set_value("265");
            obj.set_text("265");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01_00","20","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("260");
            obj.set_value("266");
            obj.set_text("266");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00","110","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("261");
            obj.set_value("267");
            obj.set_text("267");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01_00","470","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("262");
            obj.set_value("268");
            obj.set_text("268");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01_00","560","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("263");
            obj.set_value("269");
            obj.set_text("269");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01_00","200","1282","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("264");
            obj.set_value("270");
            obj.set_text("270");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01_00","380","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("265");
            obj.set_value("271");
            obj.set_text("271");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01_00","290","1281","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("266");
            obj.set_value("272");
            obj.set_text("272");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","740","1282","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("267");
            obj.set_value("273");
            obj.set_text("273");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01_00","830","1282","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("268");
            obj.set_value("274");
            obj.set_text("274");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01_00","650","1282","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("269");
            obj.set_value("275");
            obj.set_text("275");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01_00","20","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("270");
            obj.set_value("276");
            obj.set_text("276");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_00","110","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("271");
            obj.set_value("277");
            obj.set_text("277");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01_00","470","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("272");
            obj.set_value("278");
            obj.set_text("278");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01_00","560","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("273");
            obj.set_value("279");
            obj.set_text("279");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01_00","200","1328","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("274");
            obj.set_value("280");
            obj.set_text("280");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01_00","380","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("275");
            obj.set_value("281");
            obj.set_text("281");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01_00","290","1327","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("276");
            obj.set_value("282");
            obj.set_text("282");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","740","1328","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("277");
            obj.set_value("283");
            obj.set_text("283");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01_00","830","1328","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("278");
            obj.set_value("284");
            obj.set_text("284");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01_00","650","1328","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("279");
            obj.set_value("285");
            obj.set_text("285");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_00","20","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("280");
            obj.set_value("286");
            obj.set_text("286");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_00","110","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("281");
            obj.set_value("287");
            obj.set_text("287");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_00","470","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("282");
            obj.set_value("288");
            obj.set_text("288");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_00","560","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("283");
            obj.set_value("289");
            obj.set_text("289");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_00","200","1378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("284");
            obj.set_value("290");
            obj.set_text("290");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_00","380","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("285");
            obj.set_value("291");
            obj.set_text("291");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_00","290","1377","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("286");
            obj.set_value("292");
            obj.set_text("292");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","740","1378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("287");
            obj.set_value("293");
            obj.set_text("293");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_00","830","1378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("288");
            obj.set_value("294");
            obj.set_text("294");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_00","650","1378","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("289");
            obj.set_value("295");
            obj.set_text("295");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_00","20","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("290");
            obj.set_value("296");
            obj.set_text("296");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_00","110","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("291");
            obj.set_value("297");
            obj.set_text("297");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_00","470","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("292");
            obj.set_value("298");
            obj.set_text("298");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_00","560","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("293");
            obj.set_value("299");
            obj.set_text("299");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_00","200","1424","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("294");
            obj.set_value("300");
            obj.set_text("300");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_00","380","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("295");
            obj.set_value("301");
            obj.set_text("301");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_00","290","1423","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("296");
            obj.set_value("302");
            obj.set_text("302");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_00","740","1424","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("297");
            obj.set_value("303");
            obj.set_text("303");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_00","830","1424","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("298");
            obj.set_value("304");
            obj.set_text("304");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_00","650","1424","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("299");
            obj.set_value("305");
            obj.set_text("305");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_00","20","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("300");
            obj.set_value("306");
            obj.set_text("306");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00","110","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("301");
            obj.set_value("307");
            obj.set_text("307");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_00","470","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("302");
            obj.set_value("308");
            obj.set_text("308");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_00","560","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("303");
            obj.set_value("309");
            obj.set_text("309");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_00","200","1471","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("304");
            obj.set_value("310");
            obj.set_text("310");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_00","380","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("305");
            obj.set_value("311");
            obj.set_text("311");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_00","290","1470","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("306");
            obj.set_value("312");
            obj.set_text("312");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","740","1471","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("307");
            obj.set_value("313");
            obj.set_text("313");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_00","830","1471","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("308");
            obj.set_value("314");
            obj.set_text("314");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_00","650","1471","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("309");
            obj.set_value("315");
            obj.set_text("315");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_00","20","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("310");
            obj.set_value("316");
            obj.set_text("316");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","110","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("311");
            obj.set_value("317");
            obj.set_text("317");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_00","470","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("312");
            obj.set_value("318");
            obj.set_text("318");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_00","560","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("313");
            obj.set_value("319");
            obj.set_text("319");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_00","200","1517","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("314");
            obj.set_value("320");
            obj.set_text("320");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_00","380","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("315");
            obj.set_value("321");
            obj.set_text("321");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_00","290","1516","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("316");
            obj.set_value("322");
            obj.set_text("322");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","740","1517","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("317");
            obj.set_value("323");
            obj.set_text("323");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_00","830","1517","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("318");
            obj.set_value("324");
            obj.set_text("324");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_00","650","1517","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("319");
            obj.set_value("325");
            obj.set_text("325");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_11","20","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("320");
            obj.set_value("326");
            obj.set_text("326");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_05","110","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("321");
            obj.set_value("327");
            obj.set_text("327");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_06","470","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("322");
            obj.set_value("328");
            obj.set_text("328");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_06","560","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("323");
            obj.set_value("329");
            obj.set_text("329");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_05","200","1567","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("324");
            obj.set_value("330");
            obj.set_text("330");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_06","380","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("325");
            obj.set_value("331");
            obj.set_text("331");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_05","290","1566","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("326");
            obj.set_value("332");
            obj.set_text("332");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_05","740","1567","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("327");
            obj.set_value("333");
            obj.set_text("333");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_05","830","1567","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("328");
            obj.set_value("334");
            obj.set_text("334");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_05","650","1567","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("329");
            obj.set_value("335");
            obj.set_text("335");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_04","20","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("330");
            obj.set_value("336");
            obj.set_text("336");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_04","110","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("331");
            obj.set_value("337");
            obj.set_text("337");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_04","470","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("332");
            obj.set_value("338");
            obj.set_text("338");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_04","560","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("333");
            obj.set_value("339");
            obj.set_text("339");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_04","200","1613","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("334");
            obj.set_value("340");
            obj.set_text("340");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_04","380","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("335");
            obj.set_value("341");
            obj.set_text("341");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_04","290","1612","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("336");
            obj.set_value("342");
            obj.set_text("342");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_04","740","1613","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("337");
            obj.set_value("343");
            obj.set_text("343");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_04","830","1613","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("338");
            obj.set_value("344");
            obj.set_text("344");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_04","650","1613","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("339");
            obj.set_value("345");
            obj.set_text("345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_03","20","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("340");
            obj.set_value("346");
            obj.set_text("346");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_03","110","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("341");
            obj.set_value("347");
            obj.set_text("347");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_03","470","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("342");
            obj.set_value("348");
            obj.set_text("348");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_03","560","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("343");
            obj.set_value("349");
            obj.set_text("349");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_03","200","1660","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("344");
            obj.set_value("350");
            obj.set_text("350");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_03","380","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("345");
            obj.set_value("351");
            obj.set_text("351");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_03","290","1659","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("346");
            obj.set_value("352");
            obj.set_text("352");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_03","740","1660","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("347");
            obj.set_value("353");
            obj.set_text("353");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_03","830","1660","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("348");
            obj.set_value("354");
            obj.set_text("354");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_03","650","1660","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("349");
            obj.set_value("355");
            obj.set_text("355");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_03","20","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("350");
            obj.set_value("356");
            obj.set_text("356");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_03","110","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("351");
            obj.set_value("357");
            obj.set_text("357");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_03","470","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("352");
            obj.set_value("358");
            obj.set_text("358");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_03","560","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("353");
            obj.set_value("359");
            obj.set_text("359");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_03","200","1706","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("354");
            obj.set_value("360");
            obj.set_text("360");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_03","380","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("355");
            obj.set_value("361");
            obj.set_text("361");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_03","290","1705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("356");
            obj.set_value("362");
            obj.set_text("362");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_03","740","1706","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("357");
            obj.set_value("363");
            obj.set_text("363");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_03","830","1706","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("358");
            obj.set_value("364");
            obj.set_text("364");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_03","650","1706","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("359");
            obj.set_value("365");
            obj.set_text("365");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_02","20","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("360");
            obj.set_value("366");
            obj.set_text("366");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_02","110","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("361");
            obj.set_value("367");
            obj.set_text("367");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_02","470","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("362");
            obj.set_value("368");
            obj.set_text("368");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_02","560","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("363");
            obj.set_value("369");
            obj.set_text("369");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_02","200","1756","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("364");
            obj.set_value("370");
            obj.set_text("370");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_02","380","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("365");
            obj.set_value("371");
            obj.set_text("371");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_02","290","1755","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("366");
            obj.set_value("372");
            obj.set_text("372");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_02","740","1756","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("367");
            obj.set_value("373");
            obj.set_text("373");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_02","830","1756","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("368");
            obj.set_value("374");
            obj.set_text("374");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_02","650","1756","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("369");
            obj.set_value("375");
            obj.set_text("375");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_02","20","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("370");
            obj.set_value("376");
            obj.set_text("376");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_02","110","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("371");
            obj.set_value("377");
            obj.set_text("377");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_02","470","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("372");
            obj.set_value("378");
            obj.set_text("378");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_02","560","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("373");
            obj.set_value("379");
            obj.set_text("379");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_02","200","1802","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("374");
            obj.set_value("380");
            obj.set_text("380");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_02","380","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("375");
            obj.set_value("381");
            obj.set_text("381");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_02","290","1801","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("376");
            obj.set_value("382");
            obj.set_text("382");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_02","740","1802","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("377");
            obj.set_value("383");
            obj.set_text("383");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_02","830","1802","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("378");
            obj.set_value("384");
            obj.set_text("384");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_02","650","1802","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("379");
            obj.set_value("385");
            obj.set_text("385");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_02","20","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("380");
            obj.set_value("386");
            obj.set_text("386");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_02","110","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("381");
            obj.set_value("387");
            obj.set_text("387");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_02","470","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("382");
            obj.set_value("388");
            obj.set_text("388");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_02","560","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("383");
            obj.set_value("389");
            obj.set_text("389");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_02","200","1849","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("384");
            obj.set_value("390");
            obj.set_text("390");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_02","380","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("385");
            obj.set_value("391");
            obj.set_text("391");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_02","290","1848","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("386");
            obj.set_value("392");
            obj.set_text("392");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_02","740","1849","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("387");
            obj.set_value("393");
            obj.set_text("393");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_02","830","1849","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("388");
            obj.set_value("394");
            obj.set_text("394");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_02","650","1849","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("389");
            obj.set_value("395");
            obj.set_text("395");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_02","20","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("390");
            obj.set_value("396");
            obj.set_text("396");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_02","110","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("391");
            obj.set_value("397");
            obj.set_text("397");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_02","470","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("392");
            obj.set_value("398");
            obj.set_text("398");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_02","560","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("393");
            obj.set_value("399");
            obj.set_text("399");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_02","200","1895","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("394");
            obj.set_value("400");
            obj.set_text("400");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_02","380","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("395");
            obj.set_value("401");
            obj.set_text("401");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_02","290","1894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("396");
            obj.set_value("402");
            obj.set_text("402");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02","740","1895","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("397");
            obj.set_value("403");
            obj.set_text("403");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_02","830","1895","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("398");
            obj.set_value("404");
            obj.set_text("404");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_02","650","1895","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("399");
            obj.set_value("405");
            obj.set_text("405");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09_01","20","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("400");
            obj.set_value("406");
            obj.set_text("406");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03_01","110","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("401");
            obj.set_value("407");
            obj.set_text("407");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04_01","470","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("402");
            obj.set_value("408");
            obj.set_text("408");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04_01","560","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("403");
            obj.set_value("409");
            obj.set_text("409");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03_01","200","1946","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("404");
            obj.set_value("410");
            obj.set_text("410");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04_01","380","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("405");
            obj.set_value("411");
            obj.set_text("411");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03_01","290","1945","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("406");
            obj.set_value("412");
            obj.set_text("412");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03_01","740","1946","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("407");
            obj.set_value("413");
            obj.set_text("413");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03_01","830","1946","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("408");
            obj.set_value("414");
            obj.set_text("414");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03_01","650","1946","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("409");
            obj.set_value("415");
            obj.set_text("415");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02_01","20","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("410");
            obj.set_value("416");
            obj.set_text("416");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02_01","110","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("411");
            obj.set_value("417");
            obj.set_text("417");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02_01","470","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("412");
            obj.set_value("418");
            obj.set_text("418");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02_01","560","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("413");
            obj.set_value("419");
            obj.set_text("419");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02_01","200","1992","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("414");
            obj.set_value("420");
            obj.set_text("420");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02_01","380","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("415");
            obj.set_value("421");
            obj.set_text("421");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02_01","290","1991","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("416");
            obj.set_value("422");
            obj.set_text("422");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02_01","740","1992","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("417");
            obj.set_value("423");
            obj.set_text("423");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02_01","830","1992","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("418");
            obj.set_value("424");
            obj.set_text("424");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02_01","650","1992","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("419");
            obj.set_value("425");
            obj.set_text("425");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01_01","20","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("420");
            obj.set_value("426");
            obj.set_text("426");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_01","110","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("421");
            obj.set_value("427");
            obj.set_text("427");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01_01","470","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("422");
            obj.set_value("428");
            obj.set_text("428");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01_01","560","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("423");
            obj.set_value("429");
            obj.set_text("429");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01_01","200","2039","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("424");
            obj.set_value("430");
            obj.set_text("430");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01_01","380","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("425");
            obj.set_value("431");
            obj.set_text("431");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01_01","290","2038","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("426");
            obj.set_value("432");
            obj.set_text("432");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_01","740","2039","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("427");
            obj.set_value("433");
            obj.set_text("433");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01_01","830","2039","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("428");
            obj.set_value("434");
            obj.set_text("434");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01_01","650","2039","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("429");
            obj.set_value("435");
            obj.set_text("435");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01_01","20","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("430");
            obj.set_value("436");
            obj.set_text("436");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_01","110","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("431");
            obj.set_value("437");
            obj.set_text("437");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01_01","470","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("432");
            obj.set_value("438");
            obj.set_text("438");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01_01","560","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("433");
            obj.set_value("439");
            obj.set_text("439");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01_01","200","2085","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("434");
            obj.set_value("440");
            obj.set_text("440");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01_01","380","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("435");
            obj.set_value("441");
            obj.set_text("441");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01_01","290","2084","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("436");
            obj.set_value("442");
            obj.set_text("442");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","740","2085","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("437");
            obj.set_value("443");
            obj.set_text("443");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01_01","830","2085","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("438");
            obj.set_value("444");
            obj.set_text("444");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01_01","650","2085","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("439");
            obj.set_value("445");
            obj.set_text("445");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_01","20","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("440");
            obj.set_value("446");
            obj.set_text("446");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_01","110","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("441");
            obj.set_value("447");
            obj.set_text("447");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_01","470","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("442");
            obj.set_value("448");
            obj.set_text("448");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_01","560","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("443");
            obj.set_value("449");
            obj.set_text("449");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_01","200","2135","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("444");
            obj.set_value("450");
            obj.set_text("450");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_01","380","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("445");
            obj.set_value("451");
            obj.set_text("451");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_01","290","2134","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("446");
            obj.set_value("452");
            obj.set_text("452");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01","740","2135","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("447");
            obj.set_value("453");
            obj.set_text("453");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_01","830","2135","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("448");
            obj.set_value("454");
            obj.set_text("454");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_01","650","2135","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("449");
            obj.set_value("455");
            obj.set_text("455");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_01","20","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("450");
            obj.set_value("456");
            obj.set_text("456");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_01","110","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("451");
            obj.set_value("457");
            obj.set_text("457");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_01","470","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("452");
            obj.set_value("458");
            obj.set_text("458");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_01","560","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("453");
            obj.set_value("459");
            obj.set_text("459");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_01","200","2181","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("454");
            obj.set_value("460");
            obj.set_text("460");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_01","380","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("455");
            obj.set_value("461");
            obj.set_text("461");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_01","290","2180","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("456");
            obj.set_value("462");
            obj.set_text("462");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_01","740","2181","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("457");
            obj.set_value("463");
            obj.set_text("463");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_01","830","2181","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("458");
            obj.set_value("464");
            obj.set_text("464");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_01","650","2181","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("459");
            obj.set_value("465");
            obj.set_text("465");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_01","20","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("460");
            obj.set_value("466");
            obj.set_text("466");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_01","110","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("461");
            obj.set_value("467");
            obj.set_text("467");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_01","470","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("462");
            obj.set_value("468");
            obj.set_text("468");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_01","560","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("463");
            obj.set_value("469");
            obj.set_text("469");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_01","200","2228","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("464");
            obj.set_value("470");
            obj.set_text("470");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_01","380","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("465");
            obj.set_value("471");
            obj.set_text("471");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_01","290","2227","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("466");
            obj.set_value("472");
            obj.set_text("472");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","740","2228","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("467");
            obj.set_value("473");
            obj.set_text("473");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_01","830","2228","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("468");
            obj.set_value("474");
            obj.set_text("474");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_01","650","2228","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("469");
            obj.set_value("475");
            obj.set_text("475");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_01","20","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("470");
            obj.set_value("476");
            obj.set_text("476");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_01","110","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("471");
            obj.set_value("477");
            obj.set_text("477");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_01","470","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("472");
            obj.set_value("478");
            obj.set_text("478");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_01","560","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("473");
            obj.set_value("479");
            obj.set_text("479");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_01","200","2274","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("474");
            obj.set_value("480");
            obj.set_text("480");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_01","380","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("475");
            obj.set_value("481");
            obj.set_text("481");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_01","290","2273","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("476");
            obj.set_value("482");
            obj.set_text("482");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_01","740","2274","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("477");
            obj.set_value("483");
            obj.set_text("483");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_01","830","2274","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("478");
            obj.set_value("484");
            obj.set_text("484");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_01","650","2274","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("479");
            obj.set_value("485");
            obj.set_text("485");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_10_00","20","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("480");
            obj.set_value("486");
            obj.set_text("486");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_04_00","110","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("481");
            obj.set_value("487");
            obj.set_text("487");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_05_00","470","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("482");
            obj.set_value("488");
            obj.set_text("488");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_05_00","560","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("483");
            obj.set_value("489");
            obj.set_text("489");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_04_00","200","2326","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("484");
            obj.set_value("490");
            obj.set_text("490");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_05_00","380","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("485");
            obj.set_value("491");
            obj.set_text("491");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_04_00","290","2325","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("486");
            obj.set_value("492");
            obj.set_text("492");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_04_00","740","2326","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("487");
            obj.set_value("493");
            obj.set_text("493");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_04_00","830","2326","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("488");
            obj.set_value("494");
            obj.set_text("494");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_04_00","650","2326","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("489");
            obj.set_value("495");
            obj.set_text("495");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_03_00","20","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("490");
            obj.set_value("496");
            obj.set_text("496");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_03_00","110","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("491");
            obj.set_value("497");
            obj.set_text("497");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_03_00","470","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("492");
            obj.set_value("498");
            obj.set_text("498");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_03_00","560","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("493");
            obj.set_value("499");
            obj.set_text("499");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_03_00","200","2372","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("494");
            obj.set_value("500");
            obj.set_text("500");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_03_00","380","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("495");
            obj.set_value("501");
            obj.set_text("501");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_03_00","290","2371","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("496");
            obj.set_value("502");
            obj.set_text("502");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_03_00","740","2372","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("497");
            obj.set_value("503");
            obj.set_text("503");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_03_00","830","2372","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("498");
            obj.set_value("504");
            obj.set_text("504");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_03_00","650","2372","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("499");
            obj.set_value("505");
            obj.set_text("505");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_02_00","20","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("500");
            obj.set_value("506");
            obj.set_text("506");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_02_00","110","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("501");
            obj.set_value("507");
            obj.set_text("507");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_02_00","470","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("502");
            obj.set_value("508");
            obj.set_text("508");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_02_00","560","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("503");
            obj.set_value("509");
            obj.set_text("509");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_02_00","200","2419","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("504");
            obj.set_value("510");
            obj.set_text("510");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_02_00","380","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("505");
            obj.set_value("511");
            obj.set_text("511");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_02_00","290","2418","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("506");
            obj.set_value("512");
            obj.set_text("512");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_02_00","740","2419","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("507");
            obj.set_value("513");
            obj.set_text("513");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_02_00","830","2419","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("508");
            obj.set_value("514");
            obj.set_text("514");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_02_00","650","2419","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("509");
            obj.set_value("515");
            obj.set_text("515");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_02_00","20","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("510");
            obj.set_value("516");
            obj.set_text("516");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_02_00","110","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("511");
            obj.set_value("517");
            obj.set_text("517");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_02_00","470","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("512");
            obj.set_value("518");
            obj.set_text("518");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_02_00","560","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("513");
            obj.set_value("519");
            obj.set_text("519");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_02_00","200","2465","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("514");
            obj.set_value("520");
            obj.set_text("520");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_02_00","380","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("515");
            obj.set_value("521");
            obj.set_text("521");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_02_00","290","2464","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("516");
            obj.set_value("522");
            obj.set_text("522");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_02_00","740","2465","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("517");
            obj.set_value("523");
            obj.set_text("523");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_02_00","830","2465","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("518");
            obj.set_value("524");
            obj.set_text("524");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_02_00","650","2465","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("519");
            obj.set_value("525");
            obj.set_text("525");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_01_00","20","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("520");
            obj.set_value("526");
            obj.set_text("526");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_01_00","110","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("521");
            obj.set_value("527");
            obj.set_text("527");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_01_00","470","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("522");
            obj.set_value("528");
            obj.set_text("528");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_01_00","560","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("523");
            obj.set_value("529");
            obj.set_text("529");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_01_00","200","2515","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("524");
            obj.set_value("530");
            obj.set_text("530");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_01_00","380","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("525");
            obj.set_value("531");
            obj.set_text("531");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_01_00","290","2514","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("526");
            obj.set_value("532");
            obj.set_text("532");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_01_00","740","2515","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("527");
            obj.set_value("533");
            obj.set_text("533");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_01_00","830","2515","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("528");
            obj.set_value("534");
            obj.set_text("534");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_01_00","650","2515","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("529");
            obj.set_value("535");
            obj.set_text("535");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_01_00","20","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("530");
            obj.set_value("536");
            obj.set_text("536");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01_00","110","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("531");
            obj.set_value("537");
            obj.set_text("537");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_01_00","470","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("532");
            obj.set_value("538");
            obj.set_text("538");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_01_00","560","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("533");
            obj.set_value("539");
            obj.set_text("539");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_01_00","200","2561","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("534");
            obj.set_value("540");
            obj.set_text("540");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_01_00","380","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("535");
            obj.set_value("541");
            obj.set_text("541");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_01_00","290","2560","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("536");
            obj.set_value("542");
            obj.set_text("542");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_01_00","740","2561","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("537");
            obj.set_value("543");
            obj.set_text("543");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_01_00","830","2561","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("538");
            obj.set_value("544");
            obj.set_text("544");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_01_00","650","2561","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("539");
            obj.set_value("545");
            obj.set_text("545");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_01_00","20","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("540");
            obj.set_value("546");
            obj.set_text("546");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_01_00","110","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("541");
            obj.set_value("547");
            obj.set_text("547");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_01_00","470","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("542");
            obj.set_value("548");
            obj.set_text("548");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_01_00","560","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("543");
            obj.set_value("549");
            obj.set_text("549");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_01_00","200","2608","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("544");
            obj.set_value("550");
            obj.set_text("550");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_01_00","380","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("545");
            obj.set_value("551");
            obj.set_text("551");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_01_00","290","2607","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("546");
            obj.set_value("552");
            obj.set_text("552");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","740","2608","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("547");
            obj.set_value("553");
            obj.set_text("553");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_01_00","830","2608","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("548");
            obj.set_value("554");
            obj.set_text("554");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_01_00","650","2608","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("549");
            obj.set_value("555");
            obj.set_text("555");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_01_00","20","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("550");
            obj.set_value("556");
            obj.set_text("556");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_01_00","110","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("551");
            obj.set_value("557");
            obj.set_text("557");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_01_00","470","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("552");
            obj.set_value("558");
            obj.set_text("558");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_01_00","560","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("553");
            obj.set_value("559");
            obj.set_text("559");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_01_00","200","2654","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("554");
            obj.set_value("560");
            obj.set_text("560");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_01_00","380","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("555");
            obj.set_value("561");
            obj.set_text("561");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_01_00","290","2653","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("556");
            obj.set_value("562");
            obj.set_text("562");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01_00","740","2654","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("557");
            obj.set_value("563");
            obj.set_text("563");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_01_00","830","2654","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("558");
            obj.set_value("564");
            obj.set_text("564");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_01_00","650","2654","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("559");
            obj.set_value("565");
            obj.set_text("565");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09_00_00","20","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("560");
            obj.set_value("566");
            obj.set_text("566");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03_00_00","110","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("561");
            obj.set_value("567");
            obj.set_text("567");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04_00_00","470","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("562");
            obj.set_value("568");
            obj.set_text("568");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04_00_00","560","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("563");
            obj.set_value("569");
            obj.set_text("569");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03_00_00","200","2705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("564");
            obj.set_value("570");
            obj.set_text("570");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04_00_00","380","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("565");
            obj.set_value("571");
            obj.set_text("571");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03_00_00","290","2704","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("566");
            obj.set_value("572");
            obj.set_text("572");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03_00_00","740","2705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("567");
            obj.set_value("573");
            obj.set_text("573");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03_00_00","830","2705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("568");
            obj.set_value("574");
            obj.set_text("574");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03_00_00","650","2705","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("569");
            obj.set_value("575");
            obj.set_text("575");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02_00_00","20","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("570");
            obj.set_value("576");
            obj.set_text("576");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02_00_00","110","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("571");
            obj.set_value("577");
            obj.set_text("577");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02_00_00","470","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("572");
            obj.set_value("578");
            obj.set_text("578");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02_00_00","560","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("573");
            obj.set_value("579");
            obj.set_text("579");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02_00_00","200","2751","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("574");
            obj.set_value("580");
            obj.set_text("580");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02_00_00","380","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("575");
            obj.set_value("581");
            obj.set_text("581");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02_00_00","290","2750","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("576");
            obj.set_value("582");
            obj.set_text("582");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02_00_00","740","2751","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("577");
            obj.set_value("583");
            obj.set_text("583");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02_00_00","830","2751","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("578");
            obj.set_value("584");
            obj.set_text("584");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02_00_00","650","2751","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("579");
            obj.set_value("585");
            obj.set_text("585");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01_00_00","20","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("580");
            obj.set_value("586");
            obj.set_text("586");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00","110","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("581");
            obj.set_value("587");
            obj.set_text("587");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01_00_00","470","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("582");
            obj.set_value("588");
            obj.set_text("588");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01_00_00","560","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("583");
            obj.set_value("589");
            obj.set_text("589");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01_00_00","200","2798","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("584");
            obj.set_value("590");
            obj.set_text("590");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01_00_00","380","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("585");
            obj.set_value("591");
            obj.set_text("591");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01_00_00","290","2797","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("586");
            obj.set_value("592");
            obj.set_text("592");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","740","2798","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("587");
            obj.set_value("593");
            obj.set_text("593");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01_00_00","830","2798","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("588");
            obj.set_value("594");
            obj.set_text("594");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01_00_00","650","2798","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("589");
            obj.set_value("595");
            obj.set_text("595");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01_00_00","20","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("590");
            obj.set_value("596");
            obj.set_text("596");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_00_00","110","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("591");
            obj.set_value("597");
            obj.set_text("597");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01_00_00","470","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("592");
            obj.set_value("598");
            obj.set_text("598");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01_00_00","560","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("593");
            obj.set_value("599");
            obj.set_text("599");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01_00_00","200","2844","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("594");
            obj.set_value("600");
            obj.set_text("600");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01_00_00","380","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("595");
            obj.set_value("601");
            obj.set_text("601");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01_00_00","290","2843","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("596");
            obj.set_value("602");
            obj.set_text("602");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00","740","2844","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("597");
            obj.set_value("603");
            obj.set_text("603");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01_00_00","830","2844","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("598");
            obj.set_value("604");
            obj.set_text("604");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01_00_00","650","2844","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("599");
            obj.set_value("605");
            obj.set_text("605");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_00_00","20","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("600");
            obj.set_value("606");
            obj.set_text("606");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_00_00","110","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("601");
            obj.set_value("607");
            obj.set_text("607");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_00_00","470","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("602");
            obj.set_value("608");
            obj.set_text("608");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_00_00","560","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("603");
            obj.set_value("609");
            obj.set_text("609");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_00_00","200","2894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("604");
            obj.set_value("610");
            obj.set_text("610");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_00_00","380","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("605");
            obj.set_value("611");
            obj.set_text("611");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_00_00","290","2893","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("606");
            obj.set_value("612");
            obj.set_text("612");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00","740","2894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("607");
            obj.set_value("613");
            obj.set_text("613");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_00_00","830","2894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("608");
            obj.set_value("614");
            obj.set_text("614");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_00_00","650","2894","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("609");
            obj.set_value("615");
            obj.set_text("615");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_00_00","20","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("610");
            obj.set_value("616");
            obj.set_text("616");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_00_00","110","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("611");
            obj.set_value("617");
            obj.set_text("617");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_00_00","470","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("612");
            obj.set_value("618");
            obj.set_text("618");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_00_00","560","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("613");
            obj.set_value("619");
            obj.set_text("619");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_00_00","200","2940","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("614");
            obj.set_value("620");
            obj.set_text("620");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_00_00","380","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("615");
            obj.set_value("621");
            obj.set_text("621");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_00_00","290","2939","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("616");
            obj.set_value("622");
            obj.set_text("622");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_00_00","740","2940","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("617");
            obj.set_value("623");
            obj.set_text("623");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_00_00","830","2940","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("618");
            obj.set_value("624");
            obj.set_text("624");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_00_00","650","2940","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("619");
            obj.set_value("625");
            obj.set_text("625");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_00_00","20","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("620");
            obj.set_value("626");
            obj.set_text("626");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00_00","110","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("621");
            obj.set_value("627");
            obj.set_text("627");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_00_00","470","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("622");
            obj.set_value("628");
            obj.set_text("628");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_00_00","560","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("623");
            obj.set_value("629");
            obj.set_text("629");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_00_00","200","2987","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("624");
            obj.set_value("630");
            obj.set_text("630");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_00_00","380","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("625");
            obj.set_value("631");
            obj.set_text("631");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_00_00","290","2986","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("626");
            obj.set_value("632");
            obj.set_text("632");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","740","2987","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("627");
            obj.set_value("633");
            obj.set_text("633");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_00_00","830","2987","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("628");
            obj.set_value("634");
            obj.set_text("634");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_00_00","650","2987","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("629");
            obj.set_value("635");
            obj.set_text("635");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_00_00","20","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("630");
            obj.set_value("636");
            obj.set_text("636");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","110","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("631");
            obj.set_value("637");
            obj.set_text("637");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_00_00","470","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("632");
            obj.set_value("638");
            obj.set_text("638");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_00_00","560","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("633");
            obj.set_value("639");
            obj.set_text("639");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_00_00","200","3033","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("634");
            obj.set_value("640");
            obj.set_text("640");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_00_00","380","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("635");
            obj.set_value("641");
            obj.set_text("641");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_00_00","290","3032","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("636");
            obj.set_value("642");
            obj.set_text("642");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00_00","740","3033","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("637");
            obj.set_value("643");
            obj.set_text("643");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_00_00","830","3033","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("638");
            obj.set_value("644");
            obj.set_text("644");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_00_00","650","3033","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("639");
            obj.set_value("645");
            obj.set_text("645");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_11_00","20","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("640");
            obj.set_value("646");
            obj.set_text("646");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_05_00","110","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("641");
            obj.set_value("647");
            obj.set_text("647");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_06_00","470","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("642");
            obj.set_value("648");
            obj.set_text("648");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_06_00","560","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("643");
            obj.set_value("649");
            obj.set_text("649");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_05_00","200","3081","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("644");
            obj.set_value("650");
            obj.set_text("650");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_06_00","380","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("645");
            obj.set_value("651");
            obj.set_text("651");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_05_00","290","3080","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("646");
            obj.set_value("652");
            obj.set_text("652");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_05_00","740","3081","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("647");
            obj.set_value("653");
            obj.set_text("653");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_05_00","650","3081","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("648");
            obj.set_value("654");
            obj.set_text("654");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_04_00","20","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("649");
            obj.set_value("655");
            obj.set_text("655");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_04_00","110","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("650");
            obj.set_value("656");
            obj.set_text("656");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_04_00","470","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("651");
            obj.set_value("657");
            obj.set_text("657");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_04_00","560","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("652");
            obj.set_value("658");
            obj.set_text("658");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_04_00","200","3127","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("653");
            obj.set_value("659");
            obj.set_text("659");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_04_00","380","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("654");
            obj.set_value("660");
            obj.set_text("660");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_04_00","290","3126","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("655");
            obj.set_value("661");
            obj.set_text("661");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_04_00","740","3127","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("656");
            obj.set_value("662");
            obj.set_text("662");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_04_00","650","3127","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("657");
            obj.set_value("663");
            obj.set_text("663");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_03_00","20","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("658");
            obj.set_value("664");
            obj.set_text("664");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_03_00","110","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("659");
            obj.set_value("665");
            obj.set_text("665");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_03_00","470","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("660");
            obj.set_value("666");
            obj.set_text("666");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_03_00","560","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("661");
            obj.set_value("667");
            obj.set_text("667");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_03_00","200","3174","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("662");
            obj.set_value("668");
            obj.set_text("668");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_03_00","380","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("663");
            obj.set_value("669");
            obj.set_text("669");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_03_00","290","3173","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("664");
            obj.set_value("670");
            obj.set_text("670");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_03_00","740","3174","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("665");
            obj.set_value("671");
            obj.set_text("671");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_03_00","830","3174","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("666");
            obj.set_value("672");
            obj.set_text("672");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_03_00","650","3174","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("667");
            obj.set_value("673");
            obj.set_text("673");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_03_00","20","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("668");
            obj.set_value("674");
            obj.set_text("674");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_03_00","110","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("669");
            obj.set_value("675");
            obj.set_text("675");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_03_00","470","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("670");
            obj.set_value("676");
            obj.set_text("676");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_03_00","560","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("671");
            obj.set_value("677");
            obj.set_text("677");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_03_00","200","3220","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("672");
            obj.set_value("678");
            obj.set_text("678");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_03_00","380","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("673");
            obj.set_value("679");
            obj.set_text("679");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_03_00","290","3219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("674");
            obj.set_value("680");
            obj.set_text("680");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_03_00","740","3220","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("675");
            obj.set_value("681");
            obj.set_text("681");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_03_00","830","3220","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("676");
            obj.set_value("682");
            obj.set_text("682");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_03_00","650","3220","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("677");
            obj.set_value("683");
            obj.set_text("683");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_02_00","20","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("678");
            obj.set_value("684");
            obj.set_text("684");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_02_00","110","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("679");
            obj.set_value("685");
            obj.set_text("685");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_02_00","470","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("680");
            obj.set_value("686");
            obj.set_text("686");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_02_00","560","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("681");
            obj.set_value("687");
            obj.set_text("687");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_02_00","200","3270","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("682");
            obj.set_value("688");
            obj.set_text("688");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_02_00","380","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("683");
            obj.set_value("689");
            obj.set_text("689");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_02_00","290","3269","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("684");
            obj.set_value("690");
            obj.set_text("690");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_02_00","740","3270","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("685");
            obj.set_value("691");
            obj.set_text("691");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_02_00","830","3270","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("686");
            obj.set_value("692");
            obj.set_text("692");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_02_00","650","3270","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("687");
            obj.set_value("693");
            obj.set_text("693");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_02_00","20","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("688");
            obj.set_value("694");
            obj.set_text("694");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_02_00","110","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("689");
            obj.set_value("695");
            obj.set_text("695");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_02_00","470","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("690");
            obj.set_value("696");
            obj.set_text("696");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_02_00","560","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("691");
            obj.set_value("697");
            obj.set_text("697");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_02_00","200","3316","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("692");
            obj.set_value("698");
            obj.set_text("698");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_02_00","380","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("693");
            obj.set_value("699");
            obj.set_text("699");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_02_00","290","3315","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("694");
            obj.set_value("700");
            obj.set_text("700");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_02_00","740","3316","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("695");
            obj.set_value("701");
            obj.set_text("701");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_02_00","650","3316","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("696");
            obj.set_value("702");
            obj.set_text("702");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_02_00","20","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("697");
            obj.set_value("703");
            obj.set_text("703");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_02_00","110","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("698");
            obj.set_value("704");
            obj.set_text("704");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_02_00","470","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("699");
            obj.set_value("705");
            obj.set_text("705");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_02_00","560","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("700");
            obj.set_value("706");
            obj.set_text("706");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_02_00","200","3363","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("701");
            obj.set_value("707");
            obj.set_text("707");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_02_00","380","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("702");
            obj.set_value("708");
            obj.set_text("708");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_02_00","290","3362","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("703");
            obj.set_value("709");
            obj.set_text("709");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_02_00","740","3363","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("704");
            obj.set_value("710");
            obj.set_text("710");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_02_00","830","3363","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("705");
            obj.set_value("711");
            obj.set_text("711");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_02_00","650","3363","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("706");
            obj.set_value("712");
            obj.set_text("712");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_02_00","20","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("707");
            obj.set_value("713");
            obj.set_text("713");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_02_00","110","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("708");
            obj.set_value("714");
            obj.set_text("714");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_02_00","470","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("709");
            obj.set_value("715");
            obj.set_text("715");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_02_00","560","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("710");
            obj.set_value("716");
            obj.set_text("716");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_02_00","200","3409","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("711");
            obj.set_value("717");
            obj.set_text("717");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_02_00","380","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("712");
            obj.set_value("718");
            obj.set_text("718");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_02_00","290","3408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("713");
            obj.set_value("719");
            obj.set_text("719");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_02_00","740","3409","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("714");
            obj.set_value("720");
            obj.set_text("720");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_02_00","830","3409","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("715");
            obj.set_value("721");
            obj.set_text("721");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_02_00","650","3409","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("716");
            obj.set_value("722");
            obj.set_text("722");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09_01_00","20","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("717");
            obj.set_value("723");
            obj.set_text("723");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03_01_00","110","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("718");
            obj.set_value("724");
            obj.set_text("724");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04_01_00","470","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("719");
            obj.set_value("725");
            obj.set_text("725");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04_01_00","560","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("720");
            obj.set_value("726");
            obj.set_text("726");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03_01_00","200","3460","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("721");
            obj.set_value("727");
            obj.set_text("727");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04_01_00","380","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("722");
            obj.set_value("728");
            obj.set_text("728");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03_01_00","290","3459","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("723");
            obj.set_value("729");
            obj.set_text("729");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03_01_00","740","3460","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("724");
            obj.set_value("730");
            obj.set_text("730");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03_01_00","830","3460","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("725");
            obj.set_value("731");
            obj.set_text("731");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03_01_00","650","3460","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("726");
            obj.set_value("732");
            obj.set_text("732");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02_01_00","20","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("727");
            obj.set_value("733");
            obj.set_text("733");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02_01_00","110","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("728");
            obj.set_value("734");
            obj.set_text("734");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02_01_00","470","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("729");
            obj.set_value("735");
            obj.set_text("735");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02_01_00","560","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("730");
            obj.set_value("736");
            obj.set_text("736");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02_01_00","200","3506","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("731");
            obj.set_value("737");
            obj.set_text("737");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02_01_00","380","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("732");
            obj.set_value("738");
            obj.set_text("738");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02_01_00","290","3505","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("733");
            obj.set_value("739");
            obj.set_text("739");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02_01_00","740","3506","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("734");
            obj.set_value("740");
            obj.set_text("740");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02_01_00","830","3506","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("735");
            obj.set_value("741");
            obj.set_text("741");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02_01_00","650","3506","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("736");
            obj.set_value("742");
            obj.set_text("742");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01_01_00","20","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("737");
            obj.set_value("743");
            obj.set_text("743");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_01_00","110","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("738");
            obj.set_value("744");
            obj.set_text("744");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01_01_00","470","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("739");
            obj.set_value("745");
            obj.set_text("745");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01_01_00","560","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("740");
            obj.set_value("746");
            obj.set_text("746");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01_01_00","200","3553","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("741");
            obj.set_value("747");
            obj.set_text("747");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01_01_00","380","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("742");
            obj.set_value("748");
            obj.set_text("748");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01_01_00","290","3552","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("743");
            obj.set_value("749");
            obj.set_text("749");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_01_00","740","3553","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("744");
            obj.set_value("750");
            obj.set_text("750");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01_01_00","830","3553","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("745");
            obj.set_value("751");
            obj.set_text("751");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01_01_00","650","3553","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("746");
            obj.set_value("752");
            obj.set_text("752");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01_01_00","20","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("747");
            obj.set_value("753");
            obj.set_text("753");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_01_00","110","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("748");
            obj.set_value("754");
            obj.set_text("754");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01_01_00","470","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("749");
            obj.set_value("755");
            obj.set_text("755");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01_01_00","560","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("750");
            obj.set_value("756");
            obj.set_text("756");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01_01_00","200","3599","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("751");
            obj.set_value("757");
            obj.set_text("757");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01_01_00","380","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("752");
            obj.set_value("758");
            obj.set_text("758");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01_01_00","290","3598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("753");
            obj.set_value("759");
            obj.set_text("759");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01_00","740","3599","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("754");
            obj.set_value("760");
            obj.set_text("760");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01_01_00","830","3599","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("755");
            obj.set_value("761");
            obj.set_text("761");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01_01_00","650","3599","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("756");
            obj.set_value("762");
            obj.set_text("762");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_01_00","20","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("757");
            obj.set_value("763");
            obj.set_text("763");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_01_00","110","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("758");
            obj.set_value("764");
            obj.set_text("764");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_01_00","470","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("759");
            obj.set_value("765");
            obj.set_text("765");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_01_00","560","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("760");
            obj.set_value("766");
            obj.set_text("766");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_01_00","200","3649","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("761");
            obj.set_value("767");
            obj.set_text("767");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_01_00","380","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("762");
            obj.set_value("768");
            obj.set_text("768");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_01_00","290","3648","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("763");
            obj.set_value("769");
            obj.set_text("769");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","740","3649","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("764");
            obj.set_value("770");
            obj.set_text("770");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_01_00","830","3649","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("765");
            obj.set_value("771");
            obj.set_text("771");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_01_00","650","3649","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("766");
            obj.set_value("772");
            obj.set_text("772");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_01_00","20","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("767");
            obj.set_value("773");
            obj.set_text("773");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_01_00","110","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("768");
            obj.set_value("774");
            obj.set_text("774");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_01_00","470","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("769");
            obj.set_value("775");
            obj.set_text("775");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_01_00","560","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("770");
            obj.set_value("776");
            obj.set_text("776");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_01_00","200","3695","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("771");
            obj.set_value("777");
            obj.set_text("777");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_01_00","380","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("772");
            obj.set_value("778");
            obj.set_text("778");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_01_00","290","3694","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("773");
            obj.set_value("779");
            obj.set_text("779");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_01_00","740","3695","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("774");
            obj.set_value("780");
            obj.set_text("780");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_01_00","830","3695","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("775");
            obj.set_value("781");
            obj.set_text("781");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_01_00","650","3695","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("776");
            obj.set_value("782");
            obj.set_text("782");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_01_00","20","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("777");
            obj.set_value("783");
            obj.set_text("783");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_01_00","110","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("778");
            obj.set_value("784");
            obj.set_text("784");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_01_00","470","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("779");
            obj.set_value("785");
            obj.set_text("785");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_01_00","560","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("780");
            obj.set_value("786");
            obj.set_text("786");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_01_00","200","3742","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("781");
            obj.set_value("787");
            obj.set_text("787");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_01_00","380","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("782");
            obj.set_value("788");
            obj.set_text("788");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_01_00","290","3741","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("783");
            obj.set_value("789");
            obj.set_text("789");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01_00","740","3742","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("784");
            obj.set_value("790");
            obj.set_text("790");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_01_00","830","3742","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("785");
            obj.set_value("791");
            obj.set_text("791");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_01_00","650","3742","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("786");
            obj.set_value("792");
            obj.set_text("792");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_01_00","20","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("787");
            obj.set_value("793");
            obj.set_text("793");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_01_00","110","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("788");
            obj.set_value("794");
            obj.set_text("794");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_01_00","470","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("789");
            obj.set_value("795");
            obj.set_text("795");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_01_00","560","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("790");
            obj.set_value("796");
            obj.set_text("796");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_01_00","200","3788","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("791");
            obj.set_value("797");
            obj.set_text("797");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_01_00","380","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("792");
            obj.set_value("798");
            obj.set_text("798");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_01_00","290","3787","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("793");
            obj.set_value("799");
            obj.set_text("799");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_01_00","740","3788","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("794");
            obj.set_value("800");
            obj.set_text("800");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_01_00","830","3788","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("795");
            obj.set_value("801");
            obj.set_text("801");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_01_00","650","3788","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("796");
            obj.set_value("802");
            obj.set_text("802");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_10_00_00","20","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("797");
            obj.set_value("803");
            obj.set_text("803");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_04_00_00","110","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("798");
            obj.set_value("804");
            obj.set_text("804");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_05_00_00","470","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("799");
            obj.set_value("805");
            obj.set_text("805");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_05_00_00","560","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("800");
            obj.set_value("806");
            obj.set_text("806");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_04_00_00","200","3840","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("801");
            obj.set_value("807");
            obj.set_text("807");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_05_00_00","380","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("802");
            obj.set_value("808");
            obj.set_text("808");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_04_00_00","290","3839","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("803");
            obj.set_value("809");
            obj.set_text("809");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_04_00_00","740","3840","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("804");
            obj.set_value("810");
            obj.set_text("810");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_04_00_00","830","3840","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("805");
            obj.set_value("811");
            obj.set_text("811");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_04_00_00","650","3840","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("806");
            obj.set_value("812");
            obj.set_text("812");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_03_00_00","20","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("807");
            obj.set_value("813");
            obj.set_text("813");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_03_00_00","110","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("808");
            obj.set_value("814");
            obj.set_text("814");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_03_00_00","470","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("809");
            obj.set_value("815");
            obj.set_text("815");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_03_00_00","560","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("810");
            obj.set_value("816");
            obj.set_text("816");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_03_00_00","200","3886","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("811");
            obj.set_value("817");
            obj.set_text("817");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_03_00_00","380","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("812");
            obj.set_value("818");
            obj.set_text("818");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_03_00_00","290","3885","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("813");
            obj.set_value("819");
            obj.set_text("819");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_03_00_00","740","3886","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("814");
            obj.set_value("820");
            obj.set_text("820");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_03_00_00","830","3886","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("815");
            obj.set_value("821");
            obj.set_text("821");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_03_00_00","650","3886","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("816");
            obj.set_value("822");
            obj.set_text("822");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_02_00_00","20","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("817");
            obj.set_value("823");
            obj.set_text("823");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_02_00_00","110","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("818");
            obj.set_value("824");
            obj.set_text("824");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_02_00_00","470","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("819");
            obj.set_value("825");
            obj.set_text("825");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_02_00_00","560","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("820");
            obj.set_value("826");
            obj.set_text("826");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_02_00_00","200","3933","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("821");
            obj.set_value("827");
            obj.set_text("827");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_02_00_00","380","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("822");
            obj.set_value("828");
            obj.set_text("828");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_02_00_00","290","3932","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("823");
            obj.set_value("829");
            obj.set_text("829");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_02_00_00","740","3933","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("824");
            obj.set_value("830");
            obj.set_text("830");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_02_00_00","830","3933","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("825");
            obj.set_value("831");
            obj.set_text("831");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_02_00_00","650","3933","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("826");
            obj.set_value("832");
            obj.set_text("832");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_02_00_00","20","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("827");
            obj.set_value("833");
            obj.set_text("833");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_02_00_00","110","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("828");
            obj.set_value("834");
            obj.set_text("834");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_02_00_00","470","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("829");
            obj.set_value("835");
            obj.set_text("835");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_02_00_00","560","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("830");
            obj.set_value("836");
            obj.set_text("836");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_02_00_00","200","3979","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("831");
            obj.set_value("837");
            obj.set_text("837");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_02_00_00","380","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("832");
            obj.set_value("838");
            obj.set_text("838");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_02_00_00","290","3978","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("833");
            obj.set_value("839");
            obj.set_text("839");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_02_00_00","740","3979","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("834");
            obj.set_value("840");
            obj.set_text("840");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_02_00_00","830","3979","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("835");
            obj.set_value("841");
            obj.set_text("841");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_02_00_00","650","3979","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("836");
            obj.set_value("842");
            obj.set_text("842");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_01_00_00","20","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("837");
            obj.set_value("843");
            obj.set_text("843");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_01_00_00","110","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("838");
            obj.set_value("844");
            obj.set_text("844");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_01_00_00","470","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("839");
            obj.set_value("845");
            obj.set_text("845");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_01_00_00","560","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("840");
            obj.set_value("846");
            obj.set_text("846");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_01_00_00","200","4029","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("841");
            obj.set_value("847");
            obj.set_text("847");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_01_00_00","380","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("842");
            obj.set_value("848");
            obj.set_text("848");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_01_00_00","290","4028","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("843");
            obj.set_value("849");
            obj.set_text("849");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_01_00_00","740","4029","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("844");
            obj.set_value("850");
            obj.set_text("850");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_01_00_00","650","4029","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("845");
            obj.set_value("851");
            obj.set_text("851");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_01_00_00","20","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("846");
            obj.set_value("852");
            obj.set_text("852");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_01_00_00","110","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("847");
            obj.set_value("853");
            obj.set_text("853");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_01_00_00","470","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("848");
            obj.set_value("854");
            obj.set_text("854");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_01_00_00","560","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("849");
            obj.set_value("855");
            obj.set_text("855");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_01_00_00","200","4075","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("850");
            obj.set_value("856");
            obj.set_text("856");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_01_00_00","380","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("851");
            obj.set_value("857");
            obj.set_text("857");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_01_00_00","290","4074","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("852");
            obj.set_value("858");
            obj.set_text("858");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_01_00_00","740","4075","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("853");
            obj.set_value("859");
            obj.set_text("859");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_01_00_00","830","4075","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("854");
            obj.set_value("860");
            obj.set_text("860");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_01_00_00","650","4075","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("855");
            obj.set_value("861");
            obj.set_text("861");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_01_00_00","20","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("856");
            obj.set_value("862");
            obj.set_text("862");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_01_00_00","110","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("857");
            obj.set_value("863");
            obj.set_text("863");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_01_00_00","470","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("858");
            obj.set_value("864");
            obj.set_text("864");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_01_00_00","560","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("859");
            obj.set_value("865");
            obj.set_text("865");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_01_00_00","200","4122","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("860");
            obj.set_value("866");
            obj.set_text("866");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_01_00_00","380","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("861");
            obj.set_value("867");
            obj.set_text("867");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_01_00_00","290","4121","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("862");
            obj.set_value("868");
            obj.set_text("868");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00_00","740","4122","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("863");
            obj.set_value("869");
            obj.set_text("869");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_01_00_00","830","4122","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("864");
            obj.set_value("870");
            obj.set_text("870");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_01_00_00","650","4122","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("865");
            obj.set_value("871");
            obj.set_text("871");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_01_00_00","20","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("866");
            obj.set_value("872");
            obj.set_text("872");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_01_00_00","110","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("867");
            obj.set_value("873");
            obj.set_text("873");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_01_00_00","470","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("868");
            obj.set_value("874");
            obj.set_text("874");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_01_00_00","560","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("869");
            obj.set_value("875");
            obj.set_text("875");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_01_00_00","200","4168","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("870");
            obj.set_value("876");
            obj.set_text("876");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_01_00_00","380","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("871");
            obj.set_value("877");
            obj.set_text("877");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_01_00_00","290","4167","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("872");
            obj.set_value("878");
            obj.set_text("878");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01_00_00","740","4168","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("873");
            obj.set_value("879");
            obj.set_text("879");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_01_00_00","830","4168","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("874");
            obj.set_value("880");
            obj.set_text("880");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_01_00_00","650","4168","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("875");
            obj.set_value("881");
            obj.set_text("881");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_09_00_00_00","20","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("876");
            obj.set_value("882");
            obj.set_text("882");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_03_00_00_00","110","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("877");
            obj.set_value("883");
            obj.set_text("883");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_04_00_00_00","470","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("878");
            obj.set_value("884");
            obj.set_text("884");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_04_00_00_00","560","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("879");
            obj.set_value("885");
            obj.set_text("885");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_03_00_00_00","200","4219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("880");
            obj.set_value("886");
            obj.set_text("886");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_04_00_00_00","380","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("881");
            obj.set_value("887");
            obj.set_text("887");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_03_00_00_00","290","4218","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("882");
            obj.set_value("888");
            obj.set_text("888");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_03_00_00_00","740","4219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("883");
            obj.set_value("889");
            obj.set_text("889");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_03_00_00_00","830","4219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("884");
            obj.set_value("890");
            obj.set_text("890");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_03_00_00_00","650","4219","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("885");
            obj.set_value("891");
            obj.set_text("891");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_02_00_00_00","20","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("886");
            obj.set_value("892");
            obj.set_text("892");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_02_00_00_00","110","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("887");
            obj.set_value("893");
            obj.set_text("893");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_02_00_00_00","470","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("888");
            obj.set_value("894");
            obj.set_text("894");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_02_00_00_00","560","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("889");
            obj.set_value("895");
            obj.set_text("895");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_02_00_00_00","200","4265","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("890");
            obj.set_value("896");
            obj.set_text("896");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_02_00_00_00","380","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("891");
            obj.set_value("897");
            obj.set_text("897");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_02_00_00_00","290","4264","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("892");
            obj.set_value("898");
            obj.set_text("898");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_02_00_00_00","740","4265","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("893");
            obj.set_value("899");
            obj.set_text("899");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_02_00_00_00","830","4265","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("894");
            obj.set_value("900");
            obj.set_text("900");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_02_00_00_00","650","4265","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("895");
            obj.set_value("901");
            obj.set_text("901");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_01_00_00_00","20","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("896");
            obj.set_value("902");
            obj.set_text("902");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00_00","110","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("897");
            obj.set_value("903");
            obj.set_text("903");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_01_00_00_00","470","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("898");
            obj.set_value("904");
            obj.set_text("904");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_01_00_00_00","560","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("899");
            obj.set_value("905");
            obj.set_text("905");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_01_00_00_00","200","4312","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("900");
            obj.set_value("906");
            obj.set_text("906");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_01_00_00_00","380","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("901");
            obj.set_value("907");
            obj.set_text("907");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_01_00_00_00","290","4311","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("902");
            obj.set_value("908");
            obj.set_text("908");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","740","4312","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("903");
            obj.set_value("909");
            obj.set_text("909");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_01_00_00_00","830","4312","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("904");
            obj.set_value("910");
            obj.set_text("910");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_01_00_00_00","650","4312","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("905");
            obj.set_value("911");
            obj.set_text("911");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_01_00_00_00","20","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("906");
            obj.set_value("912");
            obj.set_text("912");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_00_00_00","110","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("907");
            obj.set_value("913");
            obj.set_text("913");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_01_00_00_00","470","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("908");
            obj.set_value("914");
            obj.set_text("914");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_01_00_00_00","560","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("909");
            obj.set_value("915");
            obj.set_text("915");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_01_00_00_00","200","4358","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("910");
            obj.set_value("916");
            obj.set_text("916");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_01_00_00_00","380","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("911");
            obj.set_value("917");
            obj.set_text("917");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_01_00_00_00","290","4357","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("912");
            obj.set_value("918");
            obj.set_text("918");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00","740","4358","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("913");
            obj.set_value("919");
            obj.set_text("919");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_01_00_00_00","830","4358","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("914");
            obj.set_value("920");
            obj.set_text("920");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_01_00_00_00","650","4358","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("915");
            obj.set_value("921");
            obj.set_text("921");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_00_00_00","20","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("916");
            obj.set_value("922");
            obj.set_text("922");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_00_00_00","110","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("917");
            obj.set_value("923");
            obj.set_text("923");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_00_00_00","470","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("918");
            obj.set_value("924");
            obj.set_text("924");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_00_00_00","560","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("919");
            obj.set_value("925");
            obj.set_text("925");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_00_00_00","200","4408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("920");
            obj.set_value("926");
            obj.set_text("926");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_00_00_00","380","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("921");
            obj.set_value("927");
            obj.set_text("927");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_00_00_00","290","4407","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("922");
            obj.set_value("928");
            obj.set_text("928");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00_00","740","4408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("923");
            obj.set_value("929");
            obj.set_text("929");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_00_00_00","830","4408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("924");
            obj.set_value("930");
            obj.set_text("930");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_00_00_00","650","4408","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("925");
            obj.set_value("931");
            obj.set_text("931");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_00_00_00","20","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("926");
            obj.set_value("932");
            obj.set_text("932");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_00_00_00","110","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("927");
            obj.set_value("933");
            obj.set_text("933");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_00_00_00","470","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("928");
            obj.set_value("934");
            obj.set_text("934");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_00_00_00","560","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("929");
            obj.set_value("935");
            obj.set_text("935");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_00_00_00","200","4454","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("930");
            obj.set_value("936");
            obj.set_text("936");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_00_00_00","380","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("931");
            obj.set_value("937");
            obj.set_text("937");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_00_00_00","290","4453","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("932");
            obj.set_value("938");
            obj.set_text("938");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_00_00_00","740","4454","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("933");
            obj.set_value("939");
            obj.set_text("939");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_00_00_00","830","4454","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("934");
            obj.set_value("940");
            obj.set_text("940");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_00_00_00","650","4454","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("935");
            obj.set_value("941");
            obj.set_text("941");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_00_00_00","20","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("936");
            obj.set_value("942");
            obj.set_text("942");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00_00_00","110","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("937");
            obj.set_value("943");
            obj.set_text("943");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_00_00_00","470","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("938");
            obj.set_value("944");
            obj.set_text("944");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_00_00_00","560","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("939");
            obj.set_value("945");
            obj.set_text("945");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_00_00_00","200","4501","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("940");
            obj.set_value("946");
            obj.set_text("946");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_00_00_00","380","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("941");
            obj.set_value("947");
            obj.set_text("947");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_00_00_00","290","4500","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("942");
            obj.set_value("948");
            obj.set_text("948");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","740","4501","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("943");
            obj.set_value("949");
            obj.set_text("949");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_00_00_00","830","4501","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("944");
            obj.set_value("950");
            obj.set_text("950");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_00_00_00","650","4501","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("945");
            obj.set_value("951");
            obj.set_text("951");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_00_00_00","20","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("946");
            obj.set_value("952");
            obj.set_text("952");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00","110","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("947");
            obj.set_value("953");
            obj.set_text("953");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_00_00_00","470","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("948");
            obj.set_value("954");
            obj.set_text("954");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_00_00_00","560","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("949");
            obj.set_value("955");
            obj.set_text("955");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_00_00_00","200","4547","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("950");
            obj.set_value("956");
            obj.set_text("956");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_00_00_00","380","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("951");
            obj.set_value("957");
            obj.set_text("957");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_00_00_00","290","4546","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("952");
            obj.set_value("958");
            obj.set_text("958");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00_00_00","740","4547","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("953");
            obj.set_value("959");
            obj.set_text("959");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_00_00_00","650","4547","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("954");
            obj.set_value("960");
            obj.set_text("960");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_00_00_00","830","4547","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("955");
            obj.set_value("961");
            obj.set_text("961");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_02_00","830","3316","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("956");
            obj.set_value("962");
            obj.set_text("962");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_01_00_00","830","4029","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("957");
            obj.set_value("963");
            obj.set_text("963");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_04_00","830","3127","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("958");
            obj.set_value("964");
            obj.set_text("964");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_05_00","830","3081","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("959");
            obj.set_value("965");
            obj.set_text("965");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_08_00_00_00_00_00","20","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("960");
            obj.set_value("966");
            obj.set_text("966");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02_00_00_00_00_00","110","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("961");
            obj.set_value("967");
            obj.set_text("967");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_03_00_00_00_00_00","470","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("962");
            obj.set_value("968");
            obj.set_text("968");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_03_00_00_00_00_00","560","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("963");
            obj.set_value("969");
            obj.set_text("969");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_02_00_00_00_00_00","200","4598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("964");
            obj.set_value("970");
            obj.set_text("970");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_03_00_00_00_00_00","380","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("965");
            obj.set_value("971");
            obj.set_text("971");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_02_00_00_00_00_00","290","4597","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("966");
            obj.set_value("972");
            obj.set_text("972");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00_00_00","740","4598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("967");
            obj.set_value("973");
            obj.set_text("973");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_02_00_00_00_00_00","830","4598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("968");
            obj.set_value("974");
            obj.set_text("974");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_02_00_00_00_00_00","650","4598","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("969");
            obj.set_value("975");
            obj.set_text("975");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_01_00_00_00_00_00","20","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("970");
            obj.set_value("976");
            obj.set_text("976");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00_00_00_00_00","110","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("971");
            obj.set_value("977");
            obj.set_text("977");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01_00_00_00_00_00","470","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("972");
            obj.set_value("978");
            obj.set_text("978");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_01_00_00_00_00_00","560","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("973");
            obj.set_value("979");
            obj.set_text("979");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01_00_00_00_00_00","200","4644","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("974");
            obj.set_value("980");
            obj.set_text("980");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_01_00_00_00_00_00","380","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("975");
            obj.set_value("981");
            obj.set_text("981");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_01_00_00_00_00_00","290","4643","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("976");
            obj.set_value("982");
            obj.set_text("982");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00_00_00_00_00","740","4644","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("977");
            obj.set_value("983");
            obj.set_text("983");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_01_00_00_00_00_00","830","4644","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("978");
            obj.set_value("984");
            obj.set_text("984");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_01_00_00_00_00_00","650","4644","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("979");
            obj.set_value("985");
            obj.set_text("985");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_07_00_00_00_00_00_00","20","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("980");
            obj.set_value("986");
            obj.set_text("986");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00_00_00_00","110","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("981");
            obj.set_value("987");
            obj.set_text("987");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00_00_00_00_00_00","470","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("982");
            obj.set_value("988");
            obj.set_text("988");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_02_00_00_00_00_00_00","560","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("983");
            obj.set_value("989");
            obj.set_text("989");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_01_00_00_00_00_00_00","200","4691","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("984");
            obj.set_value("990");
            obj.set_text("990");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_02_00_00_00_00_00_00","380","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("985");
            obj.set_value("991");
            obj.set_text("991");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_01_00_00_00_00_00_00","290","4690","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("986");
            obj.set_value("992");
            obj.set_text("992");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00","740","4691","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("987");
            obj.set_value("993");
            obj.set_text("993");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_01_00_00_00_00_00_00","830","4691","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("988");
            obj.set_value("994");
            obj.set_text("994");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_01_00_00_00_00_00_00","650","4691","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("989");
            obj.set_value("995");
            obj.set_text("995");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_06_00_00_00_00_00_00_00","20","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("990");
            obj.set_value("996");
            obj.set_text("996");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00_00","110","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("991");
            obj.set_value("997");
            obj.set_text("997");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00_00_00_00_00_00_00","470","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("992");
            obj.set_value("998");
            obj.set_text("998");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_01_00_00_00_00_00_00_00","560","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("993");
            obj.set_value("999");
            obj.set_text("999");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00_00_00_00_00_00_00","200","4737","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("994");
            obj.set_value("1000");
            obj.set_text("1000");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_01_00_00_00_00_00_00_00","380","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("995");
            obj.set_value("1001");
            obj.set_text("1001");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_05_00_00_00_00_00_00_00_00","290","4736","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("996");
            obj.set_value("1002");
            obj.set_text("1002");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00_00_00_00","740","4737","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("997");
            obj.set_value("1003");
            obj.set_text("1003");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_04_00_00_00_00_00_00_00_00_00","650","4737","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("998");
            obj.set_value("1004");
            obj.set_text("1004");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00_00_00_00_00_00_00_00_00","830","4737","80","37",null,null,null,null,null,null,this);
            obj.set_taborder("999");
            obj.set_value("1005");
            obj.set_text("1005");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","22","7","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("1000");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,720,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.loadIncludeScript("BMT_01_static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
