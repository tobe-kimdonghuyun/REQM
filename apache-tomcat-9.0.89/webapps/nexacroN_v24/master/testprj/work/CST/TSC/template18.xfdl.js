(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template18");
            this.set_titletext("히스토리맵");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Start\" type=\"STRING\" size=\"256\"/><Column id=\"Map1\" type=\"STRING\" size=\"256\"/><Column id=\"Map2\" type=\"STRING\" size=\"256\"/><Column id=\"Map3\" type=\"STRING\" size=\"256\"/><Column id=\"Map4\" type=\"STRING\" size=\"256\"/><Column id=\"Map5\" type=\"STRING\" size=\"256\"/><Column id=\"End\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Start\">이미지</Col></Row><Row><Col id=\"Start\">번호</Col></Row><Row><Col id=\"Start\">등록</Col></Row><Row><Col id=\"Start\">이미지</Col></Row><Row><Col id=\"Start\">팀</Col></Row><Row><Col id=\"Start\">이름</Col></Row><Row><Col id=\"Start\">날짜</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"240","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_HistoryMapBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panMapStart","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapStartN");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_HistoryMapImgStart");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_HistoryMapNum");
            obj.set_text("12111");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","152","162","100%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","115","134","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","155","178","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus00","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStart00","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapN");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_HistoryMapNum");
            obj.set_text("1211");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("센터접수");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01","152","162","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01","115","134","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01","155","178","100%","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus01","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04_01\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStart01","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapN");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_verticalgap("5");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus01\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","152","162","100%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","115","134","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","155","178","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_HistoryMapNum");
            obj.set_text("1211");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_03_01","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("센터접수");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01_03_01","152","162","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01_03_01","115","134","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_03_01","155","178","100%","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus01_03_01","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05_01_03_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03_01_03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04_01_03_01\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStart01_03_01","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapN");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_verticalgap("5");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus01_03_01\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_HistoryMapNum");
            obj.set_text("1211");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_03_02","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("센터접수");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01_03_02","152","162","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01_03_02","115","134","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_03_02","155","178","100%","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus01_03_02","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05_01_03_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03_01_03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04_01_03_02\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStart01_03_02","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_cssclass("pan_WF_MapN");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus01_03_02\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02_00","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_HistoryMapNum");
            obj.set_text("1211");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_03_02_00","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("센터접수");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01_03_02_00","152","162","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("운영기획팀");
            obj.set_cssclass("sta_WF_MapTeam");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01_03_02_00","115","134","100%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("홍길동");
            obj.set_cssclass("sta_WF_MapName");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_03_02_00","155","178","100%","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("2024-00-00 00:00");
            obj.set_cssclass("sta_WF_MapTime");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStatus01_03_02_00","116","122","100%","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_MapStatus");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static05_01_03_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03_01_03_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04_01_03_02_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapStart01_03_02_00","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapS");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01_03_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01_03_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"panMapStatus01_03_02_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","109.00","39","100%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_HistoryMapImgEnd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","127","80","100%","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("종료");
            obj.set_cssclass("sta_WF_HistoryMapTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("panMapEnd","105","20","160","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pan_WF_MapEndD");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_verticalgap("5");
            obj.set_fittocontents("none");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_04_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_spacing("10px 10px 10px 10px");
            obj.set_horizontalgap("0");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,230,this,function(p){});
            obj.set_tabletemplate("1* / 1*");
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
        this.loadIncludeScript("template18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
