(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fed01");
            this.set_titletext("피드백_단계 표시기");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("단계 표시기");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Step indicator");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("단계 표시기는 서비스 이용을 위해 사용자가 거쳐야 하는 일련의 단계를 시각화하여 표현한 것으로 진행 상태에 대한 피드백을 사용자에게 전달한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("BtnStep1","0","Static00_01_00_02:80","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_accessibilitylabel("1단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep01","2","BtnStep1:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit01","2","StaStep01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("BtnStep2","BtnStep1:0","Static00_01_00_02:80","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_StepOn");
            obj.set_accessibilitylabel("2단계 단계 제목 진행중");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep02","StaStep01:0","BtnStep1:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("2단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit02","StaTit01:0","StaStep01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("BtnStep3","BtnStep2:0","Static00_01_00_02:80","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Step");
            obj.set_accessibilitylabel("3단계 단계 제목");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep03","StaStep02:0","BtnStep1:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("3단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit03","StaTit02:0","StaStep01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("BtnStep4","BtnStep3:0","Static00_01_00_02:80","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Step");
            obj.set_accessibilitylabel("4단계 단계 제목");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep04","StaStep03:0","BtnStep1:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("4단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit04","StaTit03:0","StaStep01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("BtnStep5","BtnStep4:0","Static00_01_00_02:80","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_StepEnd");
            obj.set_accessibilitylabel("5단계 단계 제목");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep05","StaStep04:0","BtnStep1:8","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit05","StaTit04:0","StaStep01:2","78","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","StaTit01:97","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("1단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep01_01","2","Button00_00:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit01_01","2","StaStep01_01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","170","StaTit01:97","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("2단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep02_01","172","Button00_00:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("2단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit02_01","172","StaStep01_01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","340","StaTit01:97","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("3단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep03_01","342","Button00_00:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("3단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit03_01","342","StaStep01_01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","510","StaTit01:97","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilitylabel("4단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep04_01","512","Button00_00:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit04_01","512","StaStep01_01:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","680","StaTit01:97","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_StepEOn");
            obj.set_visible("true");
            obj.set_accessibilitylabel("5단계 단계 제목 진행중");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep05_01","682","Button00_00:8","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("5단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit05_01","682","StaStep01_01:2","78","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","0","StaTit01_01:89","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("[@StaStep01_02][@StaTit01_02]");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep01_02","2","Button05:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            obj.set_accessibilitylabel("1단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit01_02","2","StaStep01_02:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","170","StaTit01_01:89","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("2단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep02_02","172","Button05:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("2단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StatTit02_02","172","StaStep01_02:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","340","StaTit01_01:89","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("3단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep03_02","342","Button05:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("3단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit03_02","342","StaStep01_02:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","510","StaTit01_01:89","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_StepOff");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilitylabel("4단계 단계 제목 완료");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep04_02","512","Button05:8","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("4단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit04_02","512","StaStep01_02:2","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","680","StaTit01_01:89","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_StepEOff");
            obj.set_visible("true");
            obj.set_accessibilitylabel("[@StaStep05_02][@StaTit05_02]");
            this.addChild(obj.name, obj);

            obj = new Static("StaStep05_02","682","Button05:8","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("5단계");
            obj.set_cssclass("sta_WF_infor13");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaTit05_02","682","StaStep01_02:2","78","23",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("단계 제목");
            obj.set_cssclass("sta_WF_15B");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,830,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("피드백_단계 표시기");

                p.staH2.set_taborder("0");
                p.staH2.set_text("단계 표시기");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","190","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Step indicator");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","15","220","30",null,null);

                p.Static00_01_00_02.set_taborder("3");
                p.Static00_01_00_02.set_text("단계 표시기는 서비스 이용을 위해 사용자가 거쳐야 하는 일련의 단계를 시각화하여 표현한 것으로 진행 상태에 대한 피드백을 사용자에게 전달한다.");
                p.Static00_01_00_02.set_cssclass("sta_WF_Descript");
                p.Static00_01_00_02.set_fittocontents("height");
                p.Static00_01_00_02.move("0","85",null,"100","0",null);

                p.BtnStep1.set_taborder("4");
                p.BtnStep1.set_cssclass("btn_WF_StepOff");
                p.BtnStep1.set_accessibilitylabel("1단계 단계 제목 완료");
                p.BtnStep1.move("0","Static00_01_00_02:80","170","20",null,null);

                p.StaStep01.set_taborder("5");
                p.StaStep01.set_text("1단계");
                p.StaStep01.set_cssclass("sta_WF_infor13");
                p.StaStep01.set_visible("true");
                p.StaStep01.move("2","BtnStep1:8","170","20",null,null);

                p.StaTit01.set_taborder("6");
                p.StaTit01.set_text("단계 제목");
                p.StaTit01.set_cssclass("sta_WF_15B");
                p.StaTit01.set_visible("true");
                p.StaTit01.move("2","StaStep01:2","170","23",null,null);

                p.BtnStep2.set_taborder("7");
                p.BtnStep2.set_cssclass("btn_WF_StepOn");
                p.BtnStep2.set_accessibilitylabel("2단계 단계 제목 진행중");
                p.BtnStep2.move("BtnStep1:0","Static00_01_00_02:80","170","20",null,null);

                p.StaStep02.set_taborder("8");
                p.StaStep02.set_text("2단계");
                p.StaStep02.set_cssclass("sta_WF_infor13");
                p.StaStep02.set_visible("true");
                p.StaStep02.move("StaStep01:0","BtnStep1:8","170","20",null,null);

                p.StaTit02.set_taborder("9");
                p.StaTit02.set_text("단계 제목");
                p.StaTit02.set_cssclass("sta_WF_15B");
                p.StaTit02.set_visible("true");
                p.StaTit02.move("StaTit01:0","StaStep01:2","170","23",null,null);

                p.BtnStep3.set_taborder("10");
                p.BtnStep3.set_cssclass("btn_WF_Step");
                p.BtnStep3.set_accessibilitylabel("3단계 단계 제목");
                p.BtnStep3.move("BtnStep2:0","Static00_01_00_02:80","170","20",null,null);

                p.StaStep03.set_taborder("11");
                p.StaStep03.set_text("3단계");
                p.StaStep03.set_cssclass("sta_WF_infor13");
                p.StaStep03.set_visible("true");
                p.StaStep03.move("StaStep02:0","BtnStep1:8","170","20",null,null);

                p.StaTit03.set_taborder("12");
                p.StaTit03.set_text("단계 제목");
                p.StaTit03.set_cssclass("sta_WF_15B");
                p.StaTit03.set_visible("true");
                p.StaTit03.move("StaTit02:0","StaStep01:2","170","23",null,null);

                p.BtnStep4.set_taborder("13");
                p.BtnStep4.set_cssclass("btn_WF_Step");
                p.BtnStep4.set_accessibilitylabel("4단계 단계 제목");
                p.BtnStep4.move("BtnStep3:0","Static00_01_00_02:80","170","20",null,null);

                p.StaStep04.set_taborder("14");
                p.StaStep04.set_text("4단계");
                p.StaStep04.set_cssclass("sta_WF_infor13");
                p.StaStep04.set_visible("true");
                p.StaStep04.move("StaStep03:0","BtnStep1:8","170","20",null,null);

                p.StaTit04.set_taborder("15");
                p.StaTit04.set_text("단계 제목");
                p.StaTit04.set_cssclass("sta_WF_15B");
                p.StaTit04.set_visible("true");
                p.StaTit04.move("StaTit03:0","StaStep01:2","170","23",null,null);

                p.BtnStep5.set_taborder("16");
                p.BtnStep5.set_cssclass("btn_WF_StepEnd");
                p.BtnStep5.set_accessibilitylabel("5단계 단계 제목");
                p.BtnStep5.move("BtnStep4:0","Static00_01_00_02:80","20","20",null,null);

                p.StaStep05.set_taborder("17");
                p.StaStep05.set_text("5단계");
                p.StaStep05.set_cssclass("sta_WF_infor13");
                p.StaStep05.set_visible("true");
                p.StaStep05.move("StaStep04:0","BtnStep1:8","78","20",null,null);

                p.StaTit05.set_taborder("18");
                p.StaTit05.set_text("단계 제목");
                p.StaTit05.set_cssclass("sta_WF_15B");
                p.StaTit05.set_visible("true");
                p.StaTit05.move("StaTit04:0","StaStep01:2","78","23",null,null);

                p.Button00_00.set_taborder("19");
                p.Button00_00.set_cssclass("btn_WF_StepOff");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_accessibilitylabel("1단계 단계 제목 완료");
                p.Button00_00.move("0","StaTit01:97","170","20",null,null);

                p.StaStep01_01.set_taborder("20");
                p.StaStep01_01.set_text("1단계");
                p.StaStep01_01.set_cssclass("sta_WF_infor13");
                p.StaStep01_01.set_visible("true");
                p.StaStep01_01.move("2","Button00_00:8","170","20",null,null);

                p.StaTit01_01.set_taborder("21");
                p.StaTit01_01.set_text("단계 제목");
                p.StaTit01_01.set_cssclass("sta_WF_15B");
                p.StaTit01_01.set_visible("true");
                p.StaTit01_01.move("2","StaStep01_01:2","170","23",null,null);

                p.Button01_00.set_taborder("22");
                p.Button01_00.set_cssclass("btn_WF_StepOff");
                p.Button01_00.set_visible("true");
                p.Button01_00.set_accessibilitylabel("2단계 단계 제목 완료");
                p.Button01_00.move("170","StaTit01:97","170","20",null,null);

                p.StaStep02_01.set_taborder("23");
                p.StaStep02_01.set_text("2단계");
                p.StaStep02_01.set_cssclass("sta_WF_infor13");
                p.StaStep02_01.set_visible("true");
                p.StaStep02_01.move("172","Button00_00:8","170","20",null,null);

                p.StaTit02_01.set_taborder("24");
                p.StaTit02_01.set_text("단계 제목");
                p.StaTit02_01.set_cssclass("sta_WF_15B");
                p.StaTit02_01.set_visible("true");
                p.StaTit02_01.move("172","StaStep01_01:2","170","23",null,null);

                p.Button02_00.set_taborder("25");
                p.Button02_00.set_cssclass("btn_WF_StepOff");
                p.Button02_00.set_visible("true");
                p.Button02_00.set_accessibilitylabel("3단계 단계 제목 완료");
                p.Button02_00.move("340","StaTit01:97","170","20",null,null);

                p.StaStep03_01.set_taborder("26");
                p.StaStep03_01.set_text("3단계");
                p.StaStep03_01.set_cssclass("sta_WF_infor13");
                p.StaStep03_01.set_visible("true");
                p.StaStep03_01.move("342","Button00_00:8","170","20",null,null);

                p.StaTit03_01.set_taborder("27");
                p.StaTit03_01.set_text("단계 제목");
                p.StaTit03_01.set_cssclass("sta_WF_15B");
                p.StaTit03_01.set_visible("true");
                p.StaTit03_01.move("342","StaStep01_01:2","170","23",null,null);

                p.Button03_00.set_taborder("28");
                p.Button03_00.set_cssclass("btn_WF_StepOff");
                p.Button03_00.set_text("");
                p.Button03_00.set_visible("true");
                p.Button03_00.set_accessibilitylabel("4단계 단계 제목 완료");
                p.Button03_00.move("510","StaTit01:97","170","20",null,null);

                p.StaStep04_01.set_taborder("29");
                p.StaStep04_01.set_text("4단계");
                p.StaStep04_01.set_cssclass("sta_WF_infor13");
                p.StaStep04_01.set_visible("true");
                p.StaStep04_01.move("512","Button00_00:8","170","20",null,null);

                p.StaTit04_01.set_taborder("30");
                p.StaTit04_01.set_text("단계 제목");
                p.StaTit04_01.set_cssclass("sta_WF_15B");
                p.StaTit04_01.set_visible("true");
                p.StaTit04_01.move("512","StaStep01_01:2","170","23",null,null);

                p.Button04_00.set_taborder("31");
                p.Button04_00.set_cssclass("btn_WF_StepEOn");
                p.Button04_00.set_visible("true");
                p.Button04_00.set_accessibilitylabel("5단계 단계 제목 진행중");
                p.Button04_00.move("680","StaTit01:97","20","20",null,null);

                p.StaStep05_01.set_taborder("32");
                p.StaStep05_01.set_text("5단계");
                p.StaStep05_01.set_cssclass("sta_WF_infor13");
                p.StaStep05_01.set_visible("true");
                p.StaStep05_01.move("682","Button00_00:8","78","20",null,null);

                p.StaTit05_01.set_taborder("33");
                p.StaTit05_01.set_text("단계 제목");
                p.StaTit05_01.set_cssclass("sta_WF_15B");
                p.StaTit05_01.set_visible("true");
                p.StaTit05_01.move("682","StaStep01_01:2","78","23",null,null);

                p.Button05.set_taborder("34");
                p.Button05.set_cssclass("btn_WF_StepOff");
                p.Button05.set_visible("true");
                p.Button05.set_accessibilitylabel("[@StaStep01_02][@StaTit01_02]");
                p.Button05.move("0","StaTit01_01:89","170","20",null,null);

                p.StaStep01_02.set_taborder("35");
                p.StaStep01_02.set_text("1단계");
                p.StaStep01_02.set_cssclass("sta_WF_infor13");
                p.StaStep01_02.set_visible("true");
                p.StaStep01_02.set_accessibilitylabel("1단계 단계 제목 완료");
                p.StaStep01_02.move("2","Button05:8","170","20",null,null);

                p.StaTit01_02.set_taborder("36");
                p.StaTit01_02.set_text("단계 제목");
                p.StaTit01_02.set_cssclass("sta_WF_15B");
                p.StaTit01_02.set_visible("true");
                p.StaTit01_02.move("2","StaStep01_02:2","170","23",null,null);

                p.Button06.set_taborder("37");
                p.Button06.set_cssclass("btn_WF_StepOff");
                p.Button06.set_visible("true");
                p.Button06.set_accessibilitylabel("2단계 단계 제목 완료");
                p.Button06.move("170","StaTit01_01:89","170","20",null,null);

                p.StaStep02_02.set_taborder("38");
                p.StaStep02_02.set_text("2단계");
                p.StaStep02_02.set_cssclass("sta_WF_infor13");
                p.StaStep02_02.set_visible("true");
                p.StaStep02_02.move("172","Button05:8","170","20",null,null);

                p.StatTit02_02.set_taborder("39");
                p.StatTit02_02.set_text("단계 제목");
                p.StatTit02_02.set_cssclass("sta_WF_15B");
                p.StatTit02_02.set_visible("true");
                p.StatTit02_02.move("172","StaStep01_02:2","170","23",null,null);

                p.Button07.set_taborder("40");
                p.Button07.set_cssclass("btn_WF_StepOff");
                p.Button07.set_visible("true");
                p.Button07.set_accessibilitylabel("3단계 단계 제목 완료");
                p.Button07.move("340","StaTit01_01:89","170","20",null,null);

                p.StaStep03_02.set_taborder("41");
                p.StaStep03_02.set_text("3단계");
                p.StaStep03_02.set_cssclass("sta_WF_infor13");
                p.StaStep03_02.set_visible("true");
                p.StaStep03_02.move("342","Button05:8","170","20",null,null);

                p.StaTit03_02.set_taborder("42");
                p.StaTit03_02.set_text("단계 제목");
                p.StaTit03_02.set_cssclass("sta_WF_15B");
                p.StaTit03_02.set_visible("true");
                p.StaTit03_02.move("342","StaStep01_02:2","170","23",null,null);

                p.Button08.set_taborder("43");
                p.Button08.set_cssclass("btn_WF_StepOff");
                p.Button08.set_text("");
                p.Button08.set_visible("true");
                p.Button08.set_accessibilitylabel("4단계 단계 제목 완료");
                p.Button08.move("510","StaTit01_01:89","170","20",null,null);

                p.StaStep04_02.set_taborder("44");
                p.StaStep04_02.set_text("4단계");
                p.StaStep04_02.set_cssclass("sta_WF_infor13");
                p.StaStep04_02.set_visible("true");
                p.StaStep04_02.move("512","Button05:8","170","20",null,null);

                p.StaTit04_02.set_taborder("45");
                p.StaTit04_02.set_text("단계 제목");
                p.StaTit04_02.set_cssclass("sta_WF_15B");
                p.StaTit04_02.set_visible("true");
                p.StaTit04_02.move("512","StaStep01_02:2","170","23",null,null);

                p.Button09.set_taborder("46");
                p.Button09.set_cssclass("btn_WF_StepEOff");
                p.Button09.set_visible("true");
                p.Button09.set_accessibilitylabel("[@StaStep05_02][@StaTit05_02]");
                p.Button09.move("680","StaTit01_01:89","20","20",null,null);

                p.StaStep05_02.set_taborder("47");
                p.StaStep05_02.set_text("5단계");
                p.StaStep05_02.set_cssclass("sta_WF_infor13");
                p.StaStep05_02.set_visible("true");
                p.StaStep05_02.move("682","Button05:8","78","20",null,null);

                p.StaTit05_02.set_taborder("48");
                p.StaTit05_02.set_text("단계 제목");
                p.StaTit05_02.set_cssclass("sta_WF_15B");
                p.StaTit05_02.set_visible("true");
                p.StaTit05_02.move("682","StaStep01_02:2","78","23",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,830,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StaStep01.set_visible("false");

                p.StaTit01.set_visible("false");

                p.StaStep02.set_visible("false");

                p.StaTit02.set_visible("false");

                p.StaStep03.set_visible("false");

                p.StaTit03.set_visible("false");

                p.StaStep04.set_visible("false");

                p.StaTit04.set_visible("false");

                p.StaStep05.set_visible("false");

                p.StaTit05.set_visible("false");

                p.Button00_00.set_visible("false");

                p.StaStep01_01.set_visible("false");

                p.StaTit01_01.set_visible("false");

                p.Button01_00.set_visible("false");

                p.StaStep02_01.set_visible("false");

                p.StaTit02_01.set_visible("false");

                p.Button02_00.set_visible("false");

                p.StaStep03_01.set_visible("false");

                p.StaTit03_01.set_visible("false");

                p.Button03_00.set_visible("false");

                p.StaStep04_01.set_visible("false");

                p.StaTit04_01.set_visible("false");

                p.Button04_00.set_visible("false");

                p.StaStep05_01.set_visible("false");

                p.StaTit05_01.set_visible("false");

                p.Button05.set_visible("false");

                p.StaStep01_02.set_visible("false");

                p.StaTit01_02.set_visible("false");

                p.Button06.set_visible("false");

                p.StaStep02_02.set_visible("false");

                p.StatTit02_02.set_visible("false");

                p.Button07.set_visible("false");

                p.StaStep03_02.set_visible("false");

                p.StaTit03_02.set_visible("false");

                p.Button08.set_visible("false");

                p.StaStep04_02.set_visible("false");

                p.StaTit04_02.set_visible("false");

                p.Button09.set_visible("false");

                p.StaStep05_02.set_visible("false");

                p.StaTit05_02.set_visible("false");

                p.BtnStep4.move("153","Static00_01_00_02:80","51","20",null,null);

                p.BtnStep3.move("102","Static00_01_00_02:80","51","20",null,null);

                p.BtnStep2.move("51","Static00_01_00_02:80","51","20",null,null);

                p.BtnStep1.move("0","Static00_01_00_02:80","51","20",null,null);

                p.BtnStep5.move("204","Static00_01_00_02:80","20","20",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp06_Fed01.xfdl", function() {

        this.fed01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fed01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp06_Fed01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
