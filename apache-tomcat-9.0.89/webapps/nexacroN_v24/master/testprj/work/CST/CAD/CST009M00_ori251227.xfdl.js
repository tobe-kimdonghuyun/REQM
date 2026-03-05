(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("서비스처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,2410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">01</Col><Col id=\"MENU_NM\">상세메뉴1</Col></Row><Row><Col id=\"MENU_CD\">02</Col><Col id=\"MENU_NM\">상세메뉴2</Col></Row><Row><Col id=\"MENU_CD\">03</Col><Col id=\"MENU_NM\">상세메뉴3</Col></Row><Row><Col id=\"MENU_CD\">04</Col><Col id=\"MENU_NM\">상세메뉴4</Col></Row><Row><Col id=\"MENU_CD\">05</Col><Col id=\"MENU_NM\">상세메뉴5</Col></Row><Row><Col id=\"MENU_CD\">06</Col><Col id=\"MENU_NM\">상세메뉴6</Col></Row><Row><Col id=\"MENU_CD\">07</Col><Col id=\"MENU_NM\">상세메뉴7</Col></Row><Row><Col id=\"MENU_CD\">08</Col><Col id=\"MENU_NM\">상세메뉴8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"업무분류\" type=\"STRING\" size=\"256\"/><Column id=\"업체기관명\" type=\"STRING\" size=\"256\"/><Column id=\"건물명\" type=\"STRING\" size=\"256\"/><Column id=\"크기\" type=\"STRING\" size=\"256\"/><Column id=\"용도\" type=\"STRING\" size=\"256\"/><Column id=\"제출일\" type=\"STRING\" size=\"256\"/><Column id=\"진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"2410","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divMnCk","98","75","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","208","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("0");
            obj.set_text("WorkFlowMap");
            obj.set_cssclass("sta_WF_SchLabel, sta_WF_Txt50022");
            obj.set_flexshrink("0");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Panel("palCkWrap","285","24","271","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("1");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ck01\"/><PanelItem id=\"PanelItem06\" componentid=\"ck02\"/><PanelItem id=\"PanelItem01\" componentid=\"ck03\"/><PanelItem id=\"PanelItem02\" componentid=\"ck04\"/><PanelItem id=\"PanelItem03\" componentid=\"ck05\"/><PanelItem id=\"PanelItem04\" componentid=\"ck06\"/></Contents>");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","560","40",null,null,null,null,"45",null,this.divForm.form.divMnCk.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"palCkWrap\"/></Contents>");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck02","149.00","0","102","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("4");
            obj.set_text("이동지역");
            obj.set_fittocontents("width");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck01","0","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("3");
            obj.set_text("입주자서비스");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck03","271.00","0","157","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("5");
            obj.set_text("보호구역위해물품");
            obj.set_fittocontents("width");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck04","448.00","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("6");
            obj.set_text("전기신청해지");
            obj.set_fittocontents("width");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck05","597.00","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("7");
            obj.set_text("수도신청해지");
            obj.set_fittocontents("width");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck06","150.00","0","127","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("8");
            obj.set_text("ICT신청해지");
            obj.set_fittocontents("width");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Div("divStep","1665","29","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStepUse\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("palStepGroup","216.00","100","100%","110",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검침 및 급전검침 및 급전");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP02","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD02","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCountP02\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCountD02\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("검침 및 급전");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP03","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD03","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP03\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD03\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","660.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit04","50.00","30","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP04","30.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls04","85.00","30","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD04","97.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon04","50.00","84","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP04\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls04\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD04\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","670.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit04\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon04\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("2");
            obj.set_text("협조처리");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepUse","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("1");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("3");
            obj.set_text("협조처리");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("4");
            obj.set_text("나 / 부서 / 전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","340",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","70","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("협조처리");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","180",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","54","100.00%","120",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"상위신청번호\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"협조업무\"/><Cell col=\"4\" text=\"업무구분\"/><Cell col=\"5\" text=\"위치정보(룸번호)\"/><Cell col=\"6\" text=\"건물구분\"/><Cell col=\"7\" text=\"작업장위치\"/><Cell col=\"8\" text=\"작업시작일\"/><Cell col=\"9\" text=\"요청자회사\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"요청일시\"/><Cell col=\"12\" text=\"처리자\"/><Cell col=\"13\" cssclass=\"CellEnd\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:업체기관명\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:크기\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:용도\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"6\" text=\"bind:제출일\" displaytype=\"text\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divStep00","1665","29","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStepUse\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("2");
            obj.set_text("입주자서비스");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Button("btnStepUse","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("1");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("3");
            obj.set_text("인계인수(입주)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("4");
            obj.set_text("나 / 작업 그룹 / 전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Div("palStepGroup","216.00","100","100%","110",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청및접수");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("인계인수수행");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP02","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD02","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCountP02\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCountD02\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP03","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD03","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP03\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD03\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","660.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit04","50.00","30","100%","49",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP04","30.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls04","85.00","30","7","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD04","97.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon04","50.00","84","100%","33",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP04\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls04\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD04\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","670.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit04\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon04\"/></Contents>");
            this.divForm.form.divStep00.form.palStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","340",null,null,null,null,null,null,this.divForm.form.divStep00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            this.divForm.form.divStep00.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep00.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","104","60",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("인계인수(입주)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","13","60",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("나");
            obj.set_fittocontents("width");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","180",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep00.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","54","100.00%","120",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"위치정보(룸번호)\"/><Cell col=\"5\" text=\"총괄책임자\"/><Cell col=\"6\" text=\"신청자회사\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:업체기관명\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:크기\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:용도\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"6\" text=\"bind:제출일\" displaytype=\"text\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divStep01","1665","29","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStepUse\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("2");
            obj.set_text("부가시설물");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Button("btnStepUse","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("1");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("3");
            obj.set_text("부가시설물신청");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("4");
            obj.set_text("나 / 작업 그룹 / 전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Div("palStepGroup","216.00","100","100%","110",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("접수");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검토및승인");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP02","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD02","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCountP02\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCountD02\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("검침 및 급전");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP03","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD03","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP03\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD03\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","660.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit04","50.00","30","100%","49",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP04","30.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls04","85.00","30","7","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD04","97.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon04","50.00","84","100%","33",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP04\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls04\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD04\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","670.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit04\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon04\"/></Contents>");
            this.divForm.form.divStep01.form.palStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","340",null,null,null,null,null,null,this.divForm.form.divStep01.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            this.divForm.form.divStep01.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep01.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","108","60",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("부가시설물신청");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("접수");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","180",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep01.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","54","100.00%","120",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"신청종류\"/><Cell col=\"4\" text=\"고객유형\"/><Cell col=\"5\" text=\"지역구분\"/><Cell col=\"6\" text=\"설치서비스유형\"/><Cell col=\"7\" text=\"신청자회사\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청일시\"/><Cell col=\"10\" text=\"처리자\"/><Cell col=\"11\" text=\"연락처\"/><Cell col=\"12\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:업체기관명\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:크기\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:용도\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"6\" text=\"bind:제출일\" displaytype=\"text\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divStep02","1665","29","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem05\" componentid=\"btnStepUse\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Div("palStepGroup","216.00","100","100%","110",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("접수");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검토및승인");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP02","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD02","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCountP02\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCountD02\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("검침 및 급전");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP03","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD03","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP03\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD03\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","660.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("false");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit04","50.00","30","100%","49",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP04","30.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls04","85.00","30","7","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD04","97.00","30","50","30",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon04","50.00","84","100%","33",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP04\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls04\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD04\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","670.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit04\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon04\"/></Contents>");
            this.divForm.form.divStep02.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("2");
            obj.set_text("전동차허가신청");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Button("btnStepUse","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("1");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("3");
            obj.set_text("전동차신청");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("4");
            obj.set_text("나 / 작업 그룹 / 전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","340",null,null,null,null,null,null,this.divForm.form.divStep02.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            this.divForm.form.divStep02.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep02.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","83","60",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전동차신청");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("접수");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.set_fittocontents("width");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","180",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep02.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","54","100.00%","120",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"신청종류\"/><Cell col=\"4\" text=\"고객유형\"/><Cell col=\"5\" text=\"지역구분\"/><Cell col=\"6\" text=\"신청자회사\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:업무분류\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:업체기관명\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:크기\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:용도\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"6\" text=\"bind:제출일\" displaytype=\"text\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divMnCk.form
            obj = new Layout("default","",0,0,this.divForm.form.divMnCk.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("WorkFlowMap");
                p.staLabel00.set_cssclass("sta_WF_SchLabel, sta_WF_Txt50022");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","208","40",null,null);

                p.palCkWrap.set_taborder("1");
                p.palCkWrap.set_flexgrow("2");
                p.palCkWrap.set_horizontalgap("20");
                p.palCkWrap.set_flexwrap("nowrap");
                p.palCkWrap.set_verticalgap("8");
                p.palCkWrap.set_fittocontents("height");
                p.palCkWrap.move("285","24","271","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minheight("45");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","560","40",null,null);

                p.ck02.set_taborder("4");
                p.ck02.set_text("이동지역");
                p.ck02.set_fittocontents("width");
                p.ck02.move("149.00","0","102","40",null,null);

                p.ck01.set_taborder("3");
                p.ck01.set_text("입주자서비스");
                p.ck01.set_fittocontents("width");
                p.ck01.set_value("true");
                p.ck01.move("0","0","129","40",null,null);

                p.ck03.set_taborder("5");
                p.ck03.set_text("보호구역위해물품");
                p.ck03.set_fittocontents("width");
                p.ck03.move("271.00","0","157","40",null,null);

                p.ck04.set_taborder("6");
                p.ck04.set_text("전기신청해지");
                p.ck04.set_fittocontents("width");
                p.ck04.move("448.00","0","129","40",null,null);

                p.ck05.set_taborder("7");
                p.ck05.set_text("수도신청해지");
                p.ck05.set_fittocontents("width");
                p.ck05.move("597.00","0","129","40",null,null);

                p.ck06.set_taborder("8");
                p.ck06.set_text("ICT신청해지");
                p.ck06.set_fittocontents("width");
                p.ck06.move("150.00","0","127","40",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("14px 20px 12px 20px");
            this.divForm.form.divMnCk.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divMnCk.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divMnCk.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("14px 20px 12px 20px");
            this.divForm.form.divMnCk.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("확인");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("false");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("검침 및 급전검침 및 급전");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnCountP02.set_taborder("8");
                p.btnCountP02.set_text("1");
                p.btnCountP02.set_cssclass("btn_WF_CountP");
                p.btnCountP02.set_fittocontents("width");
                p.btnCountP02.set_textAlign("right");
                p.btnCountP02.set_letterSpacing("0px");
                p.btnCountP02.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnCountD02.set_taborder("10");
                p.btnCountD02.set_text("10");
                p.btnCountD02.set_cssclass("btn_WF_CountD");
                p.btnCountD02.set_fittocontents("width");
                p.btnCountD02.set_textAlign("left");
                p.btnCountD02.set_letterSpacing("0px");
                p.btnCountD02.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("false");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("false");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("검침 및 급전");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnCountP03.set_taborder("15");
                p.btnCountP03.set_text("1");
                p.btnCountP03.set_cssclass("btn_WF_CountP");
                p.btnCountP03.set_fittocontents("width");
                p.btnCountP03.set_textAlign("right");
                p.btnCountP03.set_letterSpacing("0px");
                p.btnCountP03.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnCountD03.set_taborder("17");
                p.btnCountD03.set_text("10");
                p.btnCountD03.set_cssclass("btn_WF_CountD");
                p.btnCountD03.set_fittocontents("width");
                p.btnCountD03.set_textAlign("left");
                p.btnCountD03.set_letterSpacing("0px");
                p.btnCountD03.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("false");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("false");
                p.BoxArw03.move("660.00","-3","40","40",null,null);

                p.staStepTit04.set_taborder("21");
                p.staStepTit04.set_text("완료처리");
                p.staStepTit04.set_cssclass("sta_WF_Boxtit");
                p.staStepTit04.move("50.00","30","100%","49",null,null);

                p.btnCountP04.set_taborder("22");
                p.btnCountP04.set_text("1");
                p.btnCountP04.set_cssclass("btn_WF_CountP");
                p.btnCountP04.set_fittocontents("width");
                p.btnCountP04.set_textAlign("right");
                p.btnCountP04.set_letterSpacing("0px");
                p.btnCountP04.move("30.00","30","50","30",null,null);

                p.StepSls04.set_taborder("23");
                p.StepSls04.set_text("/");
                p.StepSls04.set_textAlign("center");
                p.StepSls04.move("85.00","30","7","30",null,null);

                p.btnCountD04.set_taborder("24");
                p.btnCountD04.set_text("10");
                p.btnCountD04.set_cssclass("btn_WF_CountD");
                p.btnCountD04.set_fittocontents("width");
                p.btnCountD04.set_textAlign("left");
                p.btnCountD04.set_letterSpacing("0px");
                p.btnCountD04.move("97.00","30","50","30",null,null);

                p.palStepBoxCon04.set_taborder("25");
                p.palStepBoxCon04.set_fittocontents("width");
                p.palStepBoxCon04.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon04.set_flexmainaxisalign("center");
                p.palStepBoxCon04.set_horizontalgap("5");
                p.palStepBoxCon04.move("50.00","84","100%","33",null,null);

                p.palStepBox04.set_taborder("26");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("false");
                p.palStepBox04.move("670.00","7","160","90",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("1");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_fittocontents("width");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("0");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_fittocontents("width");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("67.00","0","50","30",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("협조처리");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","70","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("확인");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","26","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("전체");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","26","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","54","100.00%","120",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divStep.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.palStepGroup.set_taborder("6");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("216.00","100","100%","110",null,null);

                p.btnStepService.set_taborder("2");
                p.btnStepService.set_text("협조처리");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepUse.set_taborder("1");
                p.btnStepUse.set_text("전기사용(공사건물)");
                p.btnStepUse.set_cssclass("btn_WF_StepSub");
                p.btnStepUse.set_visible("false");
                p.btnStepUse.set_fittocontents("width");
                p.btnStepUse.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("3");
                p.btnStepNew.set_text("협조처리");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("4");
                p.staStepEx.set_text("나 / 부서 / 전체");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepConGroup.set_taborder("5");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.move("20","199","100%","340",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepUse.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep00.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep00.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청및접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("1");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_fittocontents("width");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("0");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_fittocontents("width");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("인계인수수행");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnCountP02.set_taborder("8");
                p.btnCountP02.set_text("1");
                p.btnCountP02.set_cssclass("btn_WF_CountP");
                p.btnCountP02.set_fittocontents("width");
                p.btnCountP02.set_textAlign("right");
                p.btnCountP02.set_letterSpacing("0px");
                p.btnCountP02.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnCountD02.set_taborder("10");
                p.btnCountD02.set_text("10");
                p.btnCountD02.set_cssclass("btn_WF_CountD");
                p.btnCountD02.set_fittocontents("width");
                p.btnCountD02.set_textAlign("left");
                p.btnCountD02.set_letterSpacing("0px");
                p.btnCountD02.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("완료처리");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnCountP03.set_taborder("15");
                p.btnCountP03.set_text("1");
                p.btnCountP03.set_cssclass("btn_WF_CountP");
                p.btnCountP03.set_fittocontents("width");
                p.btnCountP03.set_textAlign("right");
                p.btnCountP03.set_letterSpacing("0px");
                p.btnCountP03.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnCountD03.set_taborder("17");
                p.btnCountD03.set_text("10");
                p.btnCountD03.set_cssclass("btn_WF_CountD");
                p.btnCountD03.set_fittocontents("width");
                p.btnCountD03.set_textAlign("left");
                p.btnCountD03.set_letterSpacing("0px");
                p.btnCountD03.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("true");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("false");
                p.BoxArw03.move("660.00","-3","40","40",null,null);

                p.staStepTit04.set_taborder("21");
                p.staStepTit04.set_text("완료처리");
                p.staStepTit04.set_cssclass("sta_WF_Boxtit");
                p.staStepTit04.move("50.00","30","100%","49",null,null);

                p.btnCountP04.set_taborder("22");
                p.btnCountP04.set_text("1");
                p.btnCountP04.set_cssclass("btn_WF_CountP");
                p.btnCountP04.set_fittocontents("width");
                p.btnCountP04.set_textAlign("right");
                p.btnCountP04.set_letterSpacing("0px");
                p.btnCountP04.move("30.00","30","50","30",null,null);

                p.StepSls04.set_taborder("23");
                p.StepSls04.set_text("/");
                p.StepSls04.set_textAlign("center");
                p.StepSls04.move("85.00","30","7","30",null,null);

                p.btnCountD04.set_taborder("24");
                p.btnCountD04.set_text("10");
                p.btnCountD04.set_cssclass("btn_WF_CountD");
                p.btnCountD04.set_fittocontents("width");
                p.btnCountD04.set_textAlign("left");
                p.btnCountD04.set_letterSpacing("0px");
                p.btnCountD04.move("97.00","30","50","30",null,null);

                p.palStepBoxCon04.set_taborder("25");
                p.palStepBoxCon04.set_fittocontents("width");
                p.palStepBoxCon04.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon04.set_flexmainaxisalign("center");
                p.palStepBoxCon04.set_horizontalgap("5");
                p.palStepBoxCon04.move("50.00","84","100%","33",null,null);

                p.palStepBox04.set_taborder("26");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("false");
                p.palStepBox04.move("670.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep00.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep00.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep00.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep00.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("인계인수(입주)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","104","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("나");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","13","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","54","100.00%","120",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep00.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep00.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep00.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divStep00.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep00.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("2");
                p.btnStepService.set_text("입주자서비스");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepUse.set_taborder("1");
                p.btnStepUse.set_text("전기사용(공사건물)");
                p.btnStepUse.set_cssclass("btn_WF_StepSub");
                p.btnStepUse.set_visible("false");
                p.btnStepUse.set_fittocontents("width");
                p.btnStepUse.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("3");
                p.btnStepNew.set_text("인계인수(입주)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("4");
                p.staStepEx.set_text("나 / 작업 그룹 / 전체");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepGroup.set_taborder("6");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("216.00","100","100%","110",null,null);

                p.palStepConGroup.set_taborder("5");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.move("20","199","100%","340",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepUse.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep01.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep01.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("1");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_fittocontents("width");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("0");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_fittocontents("width");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("검토및승인");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnCountP02.set_taborder("8");
                p.btnCountP02.set_text("1");
                p.btnCountP02.set_cssclass("btn_WF_CountP");
                p.btnCountP02.set_fittocontents("width");
                p.btnCountP02.set_textAlign("right");
                p.btnCountP02.set_letterSpacing("0px");
                p.btnCountP02.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnCountD02.set_taborder("10");
                p.btnCountD02.set_text("10");
                p.btnCountD02.set_cssclass("btn_WF_CountD");
                p.btnCountD02.set_fittocontents("width");
                p.btnCountD02.set_textAlign("left");
                p.btnCountD02.set_letterSpacing("0px");
                p.btnCountD02.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("false");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("검침 및 급전");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnCountP03.set_taborder("15");
                p.btnCountP03.set_text("1");
                p.btnCountP03.set_cssclass("btn_WF_CountP");
                p.btnCountP03.set_fittocontents("width");
                p.btnCountP03.set_textAlign("right");
                p.btnCountP03.set_letterSpacing("0px");
                p.btnCountP03.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnCountD03.set_taborder("17");
                p.btnCountD03.set_text("10");
                p.btnCountD03.set_cssclass("btn_WF_CountD");
                p.btnCountD03.set_fittocontents("width");
                p.btnCountD03.set_textAlign("left");
                p.btnCountD03.set_letterSpacing("0px");
                p.btnCountD03.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("false");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("false");
                p.BoxArw03.move("660.00","-3","40","40",null,null);

                p.staStepTit04.set_taborder("21");
                p.staStepTit04.set_text("완료처리");
                p.staStepTit04.set_cssclass("sta_WF_Boxtit");
                p.staStepTit04.move("50.00","30","100%","49",null,null);

                p.btnCountP04.set_taborder("22");
                p.btnCountP04.set_text("1");
                p.btnCountP04.set_cssclass("btn_WF_CountP");
                p.btnCountP04.set_fittocontents("width");
                p.btnCountP04.set_textAlign("right");
                p.btnCountP04.set_letterSpacing("0px");
                p.btnCountP04.move("30.00","30","50","30",null,null);

                p.StepSls04.set_taborder("23");
                p.StepSls04.set_text("/");
                p.StepSls04.set_textAlign("center");
                p.StepSls04.move("85.00","30","7","30",null,null);

                p.btnCountD04.set_taborder("24");
                p.btnCountD04.set_text("10");
                p.btnCountD04.set_cssclass("btn_WF_CountD");
                p.btnCountD04.set_fittocontents("width");
                p.btnCountD04.set_textAlign("left");
                p.btnCountD04.set_letterSpacing("0px");
                p.btnCountD04.move("97.00","30","50","30",null,null);

                p.palStepBoxCon04.set_taborder("25");
                p.palStepBoxCon04.set_fittocontents("width");
                p.palStepBoxCon04.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon04.set_flexmainaxisalign("center");
                p.palStepBoxCon04.set_horizontalgap("5");
                p.palStepBoxCon04.move("50.00","84","100%","33",null,null);

                p.palStepBox04.set_taborder("26");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("false");
                p.palStepBox04.move("670.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep01.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep01.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep01.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep01.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("부가시설물신청");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","108","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","26","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("전체");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","26","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","54","100.00%","120",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep01.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep01.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep01.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divStep01.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep01.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("2");
                p.btnStepService.set_text("부가시설물");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepUse.set_taborder("1");
                p.btnStepUse.set_text("전기사용(공사건물)");
                p.btnStepUse.set_cssclass("btn_WF_StepSub");
                p.btnStepUse.set_visible("false");
                p.btnStepUse.set_fittocontents("width");
                p.btnStepUse.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("3");
                p.btnStepNew.set_text("부가시설물신청");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("4");
                p.staStepEx.set_text("나 / 작업 그룹 / 전체");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepGroup.set_taborder("6");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("216.00","100","100%","110",null,null);

                p.palStepConGroup.set_taborder("5");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.move("20","199","100%","340",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepUse.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep02.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep02.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("1");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_fittocontents("width");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("0");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_fittocontents("width");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("검토및승인");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnCountP02.set_taborder("8");
                p.btnCountP02.set_text("1");
                p.btnCountP02.set_cssclass("btn_WF_CountP");
                p.btnCountP02.set_fittocontents("width");
                p.btnCountP02.set_textAlign("right");
                p.btnCountP02.set_letterSpacing("0px");
                p.btnCountP02.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnCountD02.set_taborder("10");
                p.btnCountD02.set_text("10");
                p.btnCountD02.set_cssclass("btn_WF_CountD");
                p.btnCountD02.set_fittocontents("width");
                p.btnCountD02.set_textAlign("left");
                p.btnCountD02.set_letterSpacing("0px");
                p.btnCountD02.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("false");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("검침 및 급전");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnCountP03.set_taborder("15");
                p.btnCountP03.set_text("1");
                p.btnCountP03.set_cssclass("btn_WF_CountP");
                p.btnCountP03.set_fittocontents("width");
                p.btnCountP03.set_textAlign("right");
                p.btnCountP03.set_letterSpacing("0px");
                p.btnCountP03.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnCountD03.set_taborder("17");
                p.btnCountD03.set_text("10");
                p.btnCountD03.set_cssclass("btn_WF_CountD");
                p.btnCountD03.set_fittocontents("width");
                p.btnCountD03.set_textAlign("left");
                p.btnCountD03.set_letterSpacing("0px");
                p.btnCountD03.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("false");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("false");
                p.BoxArw03.move("660.00","-3","40","40",null,null);

                p.staStepTit04.set_taborder("21");
                p.staStepTit04.set_text("완료처리");
                p.staStepTit04.set_cssclass("sta_WF_Boxtit");
                p.staStepTit04.move("50.00","30","100%","49",null,null);

                p.btnCountP04.set_taborder("22");
                p.btnCountP04.set_text("1");
                p.btnCountP04.set_cssclass("btn_WF_CountP");
                p.btnCountP04.set_fittocontents("width");
                p.btnCountP04.set_textAlign("right");
                p.btnCountP04.set_letterSpacing("0px");
                p.btnCountP04.move("30.00","30","50","30",null,null);

                p.StepSls04.set_taborder("23");
                p.StepSls04.set_text("/");
                p.StepSls04.set_textAlign("center");
                p.StepSls04.move("85.00","30","7","30",null,null);

                p.btnCountD04.set_taborder("24");
                p.btnCountD04.set_text("10");
                p.btnCountD04.set_cssclass("btn_WF_CountD");
                p.btnCountD04.set_fittocontents("width");
                p.btnCountD04.set_textAlign("left");
                p.btnCountD04.set_letterSpacing("0px");
                p.btnCountD04.move("97.00","30","50","30",null,null);

                p.palStepBoxCon04.set_taborder("25");
                p.palStepBoxCon04.set_fittocontents("width");
                p.palStepBoxCon04.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon04.set_flexmainaxisalign("center");
                p.palStepBoxCon04.set_horizontalgap("5");
                p.palStepBoxCon04.move("50.00","84","100%","33",null,null);

                p.palStepBox04.set_taborder("26");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("false");
                p.palStepBox04.move("670.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep02.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep02.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep02.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep02.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전동차신청");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","83","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","26","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("전체");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","26","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.set_autofittype("none");
                p.Grid00.move("0","54","100.00%","120",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep02.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep02.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep02.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divStep02.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep02.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.palStepGroup.set_taborder("6");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("216.00","100","100%","110",null,null);

                p.btnStepService.set_taborder("2");
                p.btnStepService.set_text("전동차허가신청");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepUse.set_taborder("1");
                p.btnStepUse.set_text("전기사용(공사건물)");
                p.btnStepUse.set_cssclass("btn_WF_StepSub");
                p.btnStepUse.set_visible("false");
                p.btnStepUse.set_fittocontents("width");
                p.btnStepUse.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("3");
                p.btnStepNew.set_text("전동차신청");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("4");
                p.staStepEx.set_text("나 / 작업 그룹 / 전체");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepConGroup.set_taborder("5");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.move("20","199","100%","340",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep02.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepUse.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMnCk.set_taborder("0");
                p.divMnCk.set_text("Div00");
                p.divMnCk.set_cssclass("div_WF_CkBg");
                p.divMnCk.set_fittocontents("height");
                p.divMnCk.set_formscrollbartype("none none");
                p.divMnCk.set_formscrolltype("none");
                p.divMnCk.move("98","75","100%","80",null,null);

                p.divStep.set_taborder("1");
                p.divStep.set_text("Div01");
                p.divStep.set_fittocontents("height");
                p.divStep.set_formscrollbartype("none none");
                p.divStep.set_formscrolltype("none");
                p.divStep.set_cssclass("div_WF_Step");
                p.divStep.move("1665","29","100%","500",null,null);

                p.divStep00.set_taborder("2");
                p.divStep00.set_text("Div01");
                p.divStep00.set_fittocontents("height");
                p.divStep00.set_formscrollbartype("none none");
                p.divStep00.set_formscrolltype("none");
                p.divStep00.set_cssclass("div_WF_Step");
                p.divStep00.move("1665","29","100%","500",null,null);

                p.divStep01.set_taborder("3");
                p.divStep01.set_text("Div01");
                p.divStep01.set_fittocontents("height");
                p.divStep01.set_formscrollbartype("none none");
                p.divStep01.set_formscrolltype("none");
                p.divStep01.set_cssclass("div_WF_Step");
                p.divStep01.move("1665","29","100%","500",null,null);

                p.divStep02.set_taborder("4");
                p.divStep02.set_text("Div01");
                p.divStep02.set_fittocontents("height");
                p.divStep02.set_formscrollbartype("none none");
                p.divStep02.set_formscrolltype("none");
                p.divStep02.set_cssclass("div_WF_Step");
                p.divStep02.move("1665","29","100%","500",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,2410,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스처리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"2410","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divMnCk.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep00.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep01.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep02.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
        };
        this.loadIncludeScript("CST009M00_ori251227.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
