(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTopMenu");
            this.set_titletext("전체메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1430,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mnu", this);
            obj._setContents("<ColumnInfo><Column id=\"mnu\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mnu\">서비스소개</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">서비스소개</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">학교상담</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">상시상담신청</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">집중상담신청 </Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">온라인(서면)상담 신청</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">공개 온라인(서면) 상담 현황</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">나의신청결과</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">상시상담예약결과</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">집중상담예약결과</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">온라인(서면)상담결과</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">공지사항</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">공지사항</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">FAQ</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">FAQ</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">이용가이드</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">상시상담</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">집중상담</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">온라인(서면)상담결과</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">홈페이지 운영 정책</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"mnu\">개인정보처리방침</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">저작권보호정책</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">웹접근성정책</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"mnu\">이용약관</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj.getSetter("desc").set("Top메뉴-");
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"INT\" size=\"256\"/><Column id=\"parentMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"useGrade\" type=\"STRING\" size=\"256\"/><Column id=\"isShow\" type=\"STRING\" size=\"256\"/><Column id=\"isNeedLogin\" type=\"STRING\" size=\"256\"/><Column id=\"useHead\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">1000</Col><Col id=\"menuName\">서비스 소개</Col><Col id=\"menuUrl\"/><Col id=\"isShow\">Y</Col><Col id=\"parentMenuId\"/><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">1001</Col><Col id=\"menuName\">서비스 소개</Col><Col id=\"menuUrl\">pa_scr_mpg_mv::scr_mpgmv02_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">1000</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">2000</Col><Col id=\"menuName\">학교상담</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\"/><Col id=\"isNeedLogin\"/><Col id=\"useGrade\"/></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2010</Col><Col id=\"menuName\">상시상담예약</Col><Col id=\"menuUrl\">pa_scr_ctr_cr::scr_ctrcr00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2020</Col><Col id=\"menuName\">집중상담예약</Col><Col id=\"menuUrl\">pa_scr_ctr_ir::scr_ctrir00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2030</Col><Col id=\"menuName\">온라인(서면)상담</Col><Col id=\"menuUrl\">pa_scr_ctr_oc::scr_ctroc00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2040</Col><Col id=\"menuName\">공개온라인(서면)상담</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m02.xfdl</Col><Col id=\"lvl\">1</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"parentMenuId\">2040</Col><Col id=\"menuId\">2041</Col><Col id=\"menuName\">온라인(서면)상담신청상세조회</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m01.xfdl</Col><Col id=\"lvl\">1</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">3000</Col><Col id=\"menuName\">나의 신청 결과</Col><Col id=\"parentMenuId\"/><Col id=\"menuUrl\"/><Col id=\"isShow\"/><Col id=\"isNeedLogin\"/><Col id=\"useGrade\"/></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3010</Col><Col id=\"menuName\">상시상담예약결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3010</Col><Col id=\"menuId\">3011</Col><Col id=\"menuName\">상시상담신청상세</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl00_m01.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3020</Col><Col id=\"menuName\">집중상담예약결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl01_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"menuName\">집중상담신청상세</Col><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3020</Col><Col id=\"menuId\">3021</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl01_m01.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3030</Col><Col id=\"menuName\">온라인(서면)상담결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">4000</Col><Col id=\"menuName\">공지사항</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">4001</Col><Col id=\"menuName\">공지사항</Col><Col id=\"menuUrl\">pa_scr_btb_nt::scr_btbnt00_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">4000</Col></Row><Row><Col id=\"parentMenuId\">4000</Col><Col id=\"lvl\">1</Col><Col id=\"menuId\">4010</Col><Col id=\"menuName\">공지사항상세</Col><Col id=\"menuUrl\">pa_scr_btb_nt::scr_btbnt00_m04.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">5000</Col><Col id=\"menuName\">FAQ</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">5001</Col><Col id=\"menuName\">FAQ</Col><Col id=\"menuUrl\">pa_scr_btb_fq::scr_btbfq00_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">5000</Col></Row><Row><Col id=\"parentMenuId\">5000</Col><Col id=\"lvl\">1</Col><Col id=\"menuId\">5010</Col><Col id=\"menuName\">FAQ상세</Col><Col id=\"menuUrl\">pa_scr_btb_fq::scr_btbfq00_m03.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuExpand", this);
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"INT\" size=\"256\"/><Column id=\"parentMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"useGrade\" type=\"STRING\" size=\"256\"/><Column id=\"isShow\" type=\"STRING\" size=\"256\"/><Column id=\"isNeedLogin\" type=\"STRING\" size=\"256\"/><Column id=\"useHead\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">T000</Col><Col id=\"menuName\">이용가이드</Col><Col id=\"menuUrl\"/><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">N</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">T000</Col><Col id=\"menuId\">T001</Col><Col id=\"menuName\">상시상담안내</Col><Col id=\"menuUrl\">btnCrI</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">N</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">T000</Col><Col id=\"menuId\">T002</Col><Col id=\"menuName\">집중상담안내</Col><Col id=\"menuUrl\">btnIrI</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">N</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">T000</Col><Col id=\"menuId\">T003</Col><Col id=\"menuName\">온라인(서면)상담안내</Col><Col id=\"menuUrl\">btnOrI</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">N</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">B000</Col><Col id=\"menuName\">홈페이지 운영정책</Col><Col id=\"menuUrl\"/><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">N</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">B001</Col><Col id=\"menuUrl\">frame::commom/framePolicyScr01.xfdl</Col><Col id=\"menuName\">개인정보처리방침</Col><Col id=\"isShow\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"parentMenuId\">B000</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">B003</Col><Col id=\"menuUrl\">frame::commom/framePolicyScr02.xfdl</Col><Col id=\"menuName\">저작권보호정책</Col><Col id=\"isShow\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"parentMenuId\">B000</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">B004</Col><Col id=\"menuUrl\">frame::commom/framePolicyScr03.xfdl</Col><Col id=\"menuName\">웹접근성정책</Col><Col id=\"isShow\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"parentMenuId\">B000</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">B002</Col><Col id=\"menuUrl\">frame::commom/framePolicyScr04.xfdl</Col><Col id=\"menuName\">이용약관</Col><Col id=\"isShow\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"parentMenuId\">B000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","0",null,null,"720",null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_PopBg");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","11%","173",null,null,"11%","35",null,null,"512",null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuBg01","0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MNU_Bg01");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg02","staMenuBg01:0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg03","staMenuBg02:0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg04","staMenuBg03:0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg05","staMenuBg04:0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg06","staMenuBg05:0","55","14.24%",null,null,"0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuBg07","staMenuBg06:0","55",null,null,"0","0",null,null,"457",null,this.divMenu.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MNU_Bg02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu01","0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("7");
            obj.set_text("서비스소개");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu01_01","0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("8");
            obj.set_text("서비스소개");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("서비스소개");
            obj.getSetter("menuLinkUrl").set("pa_scr_mpg_mv::scr_mpgmv02_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu02","staTMenu01:0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("9");
            obj.set_text("학교상담");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu02_01","staMenuBg01:0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("10");
            obj.set_text("상시상담예약");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("학교상담");
            obj.getSetter("menuLinkUrl").set("pa_scr_ctr_cr::scr_ctrcr00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu02_02","staMenuBg01:0","125","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("11");
            obj.set_text("집중상담예약");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("학교상담");
            obj.getSetter("menuLinkUrl").set("pa_scr_ctr_ir::scr_ctrir00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu02_03","staMenuBg01:0","177","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("12");
            obj.set_text("온라인(서면)상담");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("학교상담");
            obj.getSetter("menuLinkUrl").set("pa_scr_ctr_oc::scr_ctroc00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu02_04","staMenuBg01:0","229","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("13");
            obj.set_text("공개 온라인(서면) 상담");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("학교상담");
            obj.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl02_m02.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu03","staTMenu02:0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("14");
            obj.set_text("나의신청결과");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu03_01","staMenuBg02:0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("15");
            obj.set_text("상시상담예약결과");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("나의신청결과");
            obj.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu03_02","staMenuBg02:0","125","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("16");
            obj.set_text("집중상담예약결과");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("나의신청결과");
            obj.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl01_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu03_03","staMenuBg02:0","177","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("17");
            obj.set_text("온라인(서면)상담결과");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("나의신청결과");
            obj.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl02_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu04","staTMenu03:0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("18");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu04_01","staMenuBg03:0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("19");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("공지사항");
            obj.getSetter("menuLinkUrl").set("pa_scr_btb_nt::scr_btbnt00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu05","staTMenu04:0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("20");
            obj.set_text("FAQ");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu05_01","staMenuBg04:0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("21");
            obj.set_text("FAQ");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("FAQ");
            obj.getSetter("menuLinkUrl").set("pa_scr_btb_fq::scr_btbfq00_m00.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu06","staTMenu05:0","0","14.24%","55",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("22");
            obj.set_text("이용가이드");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu06_01","staMenuBg05:0","73","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("23");
            obj.set_text("상시상담안내");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("이용가이드");
            obj.getSetter("menuLinkUrl").set("btnCrI");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu06_02","staMenuBg05:0","125","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("24");
            obj.set_text("집중상담안내");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("이용가이드");
            obj.getSetter("menuLinkUrl").set("btnIrI");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu06_03","staMenuBg05:0","177","14.17%","52",null,null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("25");
            obj.set_text("온라인(서면)상담안내");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("이용가이드");
            obj.getSetter("menuLinkUrl").set("btnOrI");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTMenu07","staTMenu06:0","0",null,"55","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("26");
            obj.set_text("홈페이지 운영 정책");
            obj.set_cssclass("sta_MNU_Title");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu07_01","staMenuBg06:0","73",null,"52","1",null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("27");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("홈페이지운영정책");
            obj.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr01.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu07_02","staMenuBg06:0","125",null,"52","1",null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("28");
            obj.set_text("저작권보호정책");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("홈페이지운영정책");
            obj.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr02.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu07_03","staMenuBg06:0","177",null,"52","1",null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("29");
            obj.set_text("웹접근성정책");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("홈페이지운영정책");
            obj.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr03.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnMenu07_04","staMenuBg06:0","229",null,"52","1",null,null,null,null,null,this.divMenu.form);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("30");
            obj.set_text("이용약관");
            obj.set_cssclass("btn_MNU_Item");
            obj.set_accessibilitylabel("홈페이지운영정책");
            obj.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr04.xfdl");
            this.divMenu.addChild(obj.name, obj);

            obj = new Div("divMenuM","0","0","0","549",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTFBg","0","0",null,"76","0",null,null,null,null,null,this.divMenuM.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_accessibilityenable("false");
            this.divMenuM.addChild(obj.name, obj);

            obj = new Button("btnLogo","0","13","138","50",null,null,null,null,null,null,this.divMenuM.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("나이스 대국민 학부모 소통 서비스");
            obj.set_cssclass("btn_TF_LogoM");
            obj.set_accessibilityrole("heading");
            obj.set_accessibilitydescription("메인으로 바로가기 링크");
            this.divMenuM.addChild(obj.name, obj);

            obj = new Button("btnGuide","10","85",null,"50","10",null,null,null,null,null,this.divMenuM.form);
            obj.set_taborder("2");
            obj.set_text("이용가이드");
            obj.set_cssclass("btn_MNU_Guide");
            this.divMenuM.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","145",null,null,"0","0",null,null,null,null,this.divMenuM.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_MNU_Menu");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("expand,null");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"53\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuName\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lvl\" cssclass=\"expr:lvl==&apos;0&apos;?&quot;cell_MNU_1Depth&quot;:lvl==&apos;1&apos;?&quot;cell_MNU_2Depth&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.divMenuM.addChild(obj.name, obj);

            obj = new Static("staSample1","40","200","303","71",null,null,null,null,null,null,this.divMenuM.form);
            obj.set_taborder("4");
            obj.set_text("하위메뉴가 없을 때, 1depth class명\r\ncell_MNU_1Depth");
            obj.set_cssclass("sta_WF_GBg02");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.divMenuM.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"60","40","40","11%",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Button");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Close");
            obj.set_accessibilitylabel("창 닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSample1","1487","145","328","403",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_MNU_Menu");
            obj.set_binddataset("ds_mnu");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("expand,null");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"53\"/></Rows><Band id=\"body\"><Cell text=\"bind:mnu\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" cssclass=\"EXPR(lev==&apos;0&apos;?&quot;cell_MNU_1DepthO&quot;:lev==&apos;1&apos;?&quot;cell_MNU_2Depth&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSample2","1843","145","328","403",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("grd_MNU_Menu");
            obj.set_binddataset("ds_mnu");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("collapse,all");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"53\"/></Rows><Band id=\"body\"><Cell text=\"bind:mnu\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" cssclass=\"EXPR(lev==&apos;0&apos;?&quot;cell_MNU_1DepthC&quot;:lev==&apos;1&apos;?&quot;cell_MNU_2Depth&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staSample1","1545","246","270","71",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메뉴가 열려 있을 때, class명\r\ncell_MNU_1DepthO");
            obj.set_cssclass("sta_WF_GBg02");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSample2","1901","246","270","71",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메뉴가 닫혀 있을 때, class명\r\ncell_MNU_1DepthC");
            obj.set_cssclass("sta_WF_GBg02");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","455","31","265","64",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staMenuBg01.set_taborder("0");
                p.staMenuBg01.set_cssclass("sta_MNU_Bg01");
                p.staMenuBg01.set_minheight("457");
                p.staMenuBg01.set_maxheight("");
                p.staMenuBg01.move("0","55","14.24%",null,null,"0");

                p.staMenuBg02.set_taborder("1");
                p.staMenuBg02.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg02.set_minheight("457");
                p.staMenuBg02.set_maxheight("");
                p.staMenuBg02.move("staMenuBg01:0","55","14.24%",null,null,"0");

                p.staMenuBg03.set_taborder("2");
                p.staMenuBg03.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg03.set_minheight("457");
                p.staMenuBg03.set_maxheight("");
                p.staMenuBg03.move("staMenuBg02:0","55","14.24%",null,null,"0");

                p.staMenuBg04.set_taborder("3");
                p.staMenuBg04.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg04.set_minheight("457");
                p.staMenuBg04.set_maxheight("");
                p.staMenuBg04.move("staMenuBg03:0","55","14.24%",null,null,"0");

                p.staMenuBg05.set_taborder("4");
                p.staMenuBg05.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg05.set_minheight("457");
                p.staMenuBg05.set_maxheight("");
                p.staMenuBg05.move("staMenuBg04:0","55","14.24%",null,null,"0");

                p.staMenuBg06.set_taborder("5");
                p.staMenuBg06.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg06.set_minheight("457");
                p.staMenuBg06.set_maxheight("");
                p.staMenuBg06.move("staMenuBg05:0","55","14.24%",null,null,"0");

                p.staMenuBg07.set_taborder("6");
                p.staMenuBg07.set_cssclass("sta_MNU_Bg02");
                p.staMenuBg07.set_minheight("457");
                p.staMenuBg07.set_maxheight("");
                p.staMenuBg07.move("staMenuBg06:0","55",null,null,"0","0");

                p.staTMenu01.set_taborder("7");
                p.staTMenu01.set_text("서비스소개");
                p.staTMenu01.set_cssclass("sta_MNU_Title");
                p.staTMenu01.move("0","0","14.24%","55",null,null);

                p.btnMenu01_01.set_taborder("8");
                p.btnMenu01_01.set_text("서비스소개");
                p.btnMenu01_01.set_cssclass("btn_MNU_Item");
                p.btnMenu01_01.set_accessibilitylabel("서비스소개");
                p.btnMenu01_01.getSetter("menuLinkUrl").set("pa_scr_mpg_mv::scr_mpgmv02_m00.xfdl");
                p.btnMenu01_01.move("0","73","14.17%","52",null,null);

                p.staTMenu02.set_taborder("9");
                p.staTMenu02.set_text("학교상담");
                p.staTMenu02.set_cssclass("sta_MNU_Title");
                p.staTMenu02.move("staTMenu01:0","0","14.24%","55",null,null);

                p.btnMenu02_01.set_taborder("10");
                p.btnMenu02_01.set_text("상시상담예약");
                p.btnMenu02_01.set_cssclass("btn_MNU_Item");
                p.btnMenu02_01.set_accessibilitylabel("학교상담");
                p.btnMenu02_01.getSetter("menuLinkUrl").set("pa_scr_ctr_cr::scr_ctrcr00_m00.xfdl");
                p.btnMenu02_01.move("staMenuBg01:0","73","14.17%","52",null,null);

                p.btnMenu02_02.set_taborder("11");
                p.btnMenu02_02.set_text("집중상담예약");
                p.btnMenu02_02.set_cssclass("btn_MNU_Item");
                p.btnMenu02_02.set_accessibilitylabel("학교상담");
                p.btnMenu02_02.getSetter("menuLinkUrl").set("pa_scr_ctr_ir::scr_ctrir00_m00.xfdl");
                p.btnMenu02_02.move("staMenuBg01:0","125","14.17%","52",null,null);

                p.btnMenu02_03.set_taborder("12");
                p.btnMenu02_03.set_text("온라인(서면)상담");
                p.btnMenu02_03.set_cssclass("btn_MNU_Item");
                p.btnMenu02_03.set_accessibilitylabel("학교상담");
                p.btnMenu02_03.getSetter("menuLinkUrl").set("pa_scr_ctr_oc::scr_ctroc00_m00.xfdl");
                p.btnMenu02_03.move("staMenuBg01:0","177","14.17%","52",null,null);

                p.btnMenu02_04.set_taborder("13");
                p.btnMenu02_04.set_text("공개 온라인(서면) 상담");
                p.btnMenu02_04.set_cssclass("btn_MNU_Item");
                p.btnMenu02_04.set_accessibilitylabel("학교상담");
                p.btnMenu02_04.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl02_m02.xfdl");
                p.btnMenu02_04.move("staMenuBg01:0","229","14.17%","52",null,null);

                p.staTMenu03.set_taborder("14");
                p.staTMenu03.set_text("나의신청결과");
                p.staTMenu03.set_cssclass("sta_MNU_Title");
                p.staTMenu03.move("staTMenu02:0","0","14.24%","55",null,null);

                p.btnMenu03_01.set_taborder("15");
                p.btnMenu03_01.set_text("상시상담예약결과");
                p.btnMenu03_01.set_cssclass("btn_MNU_Item");
                p.btnMenu03_01.set_accessibilitylabel("나의신청결과");
                p.btnMenu03_01.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl00_m00.xfdl");
                p.btnMenu03_01.move("staMenuBg02:0","73","14.17%","52",null,null);

                p.btnMenu03_02.set_taborder("16");
                p.btnMenu03_02.set_text("집중상담예약결과");
                p.btnMenu03_02.set_cssclass("btn_MNU_Item");
                p.btnMenu03_02.set_accessibilitylabel("나의신청결과");
                p.btnMenu03_02.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl01_m00.xfdl");
                p.btnMenu03_02.move("staMenuBg02:0","125","14.17%","52",null,null);

                p.btnMenu03_03.set_taborder("17");
                p.btnMenu03_03.set_text("온라인(서면)상담결과");
                p.btnMenu03_03.set_cssclass("btn_MNU_Item");
                p.btnMenu03_03.set_accessibilitylabel("나의신청결과");
                p.btnMenu03_03.getSetter("menuLinkUrl").set("pa_scr_mri_cl::scr_mricl02_m00.xfdl");
                p.btnMenu03_03.move("staMenuBg02:0","177","14.17%","52",null,null);

                p.staTMenu04.set_taborder("18");
                p.staTMenu04.set_text("공지사항");
                p.staTMenu04.set_cssclass("sta_MNU_Title");
                p.staTMenu04.move("staTMenu03:0","0","14.24%","55",null,null);

                p.btnMenu04_01.set_taborder("19");
                p.btnMenu04_01.set_text("공지사항");
                p.btnMenu04_01.set_cssclass("btn_MNU_Item");
                p.btnMenu04_01.set_accessibilitylabel("공지사항");
                p.btnMenu04_01.getSetter("menuLinkUrl").set("pa_scr_btb_nt::scr_btbnt00_m00.xfdl");
                p.btnMenu04_01.move("staMenuBg03:0","73","14.17%","52",null,null);

                p.staTMenu05.set_taborder("20");
                p.staTMenu05.set_text("FAQ");
                p.staTMenu05.set_cssclass("sta_MNU_Title");
                p.staTMenu05.move("staTMenu04:0","0","14.24%","55",null,null);

                p.btnMenu05_01.set_taborder("21");
                p.btnMenu05_01.set_text("FAQ");
                p.btnMenu05_01.set_cssclass("btn_MNU_Item");
                p.btnMenu05_01.set_accessibilitylabel("FAQ");
                p.btnMenu05_01.getSetter("menuLinkUrl").set("pa_scr_btb_fq::scr_btbfq00_m00.xfdl");
                p.btnMenu05_01.move("staMenuBg04:0","73","14.17%","52",null,null);

                p.staTMenu06.set_taborder("22");
                p.staTMenu06.set_text("이용가이드");
                p.staTMenu06.set_cssclass("sta_MNU_Title");
                p.staTMenu06.move("staTMenu05:0","0","14.24%","55",null,null);

                p.btnMenu06_01.set_taborder("23");
                p.btnMenu06_01.set_text("상시상담안내");
                p.btnMenu06_01.set_cssclass("btn_MNU_Item");
                p.btnMenu06_01.set_accessibilitylabel("이용가이드");
                p.btnMenu06_01.getSetter("menuLinkUrl").set("btnCrI");
                p.btnMenu06_01.move("staMenuBg05:0","73","14.17%","52",null,null);

                p.btnMenu06_02.set_taborder("24");
                p.btnMenu06_02.set_text("집중상담안내");
                p.btnMenu06_02.set_cssclass("btn_MNU_Item");
                p.btnMenu06_02.set_accessibilitylabel("이용가이드");
                p.btnMenu06_02.getSetter("menuLinkUrl").set("btnIrI");
                p.btnMenu06_02.move("staMenuBg05:0","125","14.17%","52",null,null);

                p.btnMenu06_03.set_taborder("25");
                p.btnMenu06_03.set_text("온라인(서면)상담안내");
                p.btnMenu06_03.set_cssclass("btn_MNU_Item");
                p.btnMenu06_03.set_accessibilitylabel("이용가이드");
                p.btnMenu06_03.getSetter("menuLinkUrl").set("btnOrI");
                p.btnMenu06_03.move("staMenuBg05:0","177","14.17%","52",null,null);

                p.staTMenu07.set_taborder("26");
                p.staTMenu07.set_text("홈페이지 운영 정책");
                p.staTMenu07.set_cssclass("sta_MNU_Title");
                p.staTMenu07.move("staTMenu06:0","0",null,"55","0",null);

                p.btnMenu07_01.set_taborder("27");
                p.btnMenu07_01.set_text("개인정보처리방침");
                p.btnMenu07_01.set_cssclass("btn_MNU_Item");
                p.btnMenu07_01.set_accessibilitylabel("홈페이지운영정책");
                p.btnMenu07_01.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr01.xfdl");
                p.btnMenu07_01.move("staMenuBg06:0","73",null,"52","1",null);

                p.btnMenu07_02.set_taborder("28");
                p.btnMenu07_02.set_text("저작권보호정책");
                p.btnMenu07_02.set_cssclass("btn_MNU_Item");
                p.btnMenu07_02.set_accessibilitylabel("홈페이지운영정책");
                p.btnMenu07_02.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr02.xfdl");
                p.btnMenu07_02.move("staMenuBg06:0","125",null,"52","1",null);

                p.btnMenu07_03.set_taborder("29");
                p.btnMenu07_03.set_text("웹접근성정책");
                p.btnMenu07_03.set_cssclass("btn_MNU_Item");
                p.btnMenu07_03.set_accessibilitylabel("홈페이지운영정책");
                p.btnMenu07_03.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr03.xfdl");
                p.btnMenu07_03.move("staMenuBg06:0","177",null,"52","1",null);

                p.btnMenu07_04.set_taborder("30");
                p.btnMenu07_04.set_text("이용약관");
                p.btnMenu07_04.set_cssclass("btn_MNU_Item");
                p.btnMenu07_04.set_accessibilitylabel("홈페이지운영정책");
                p.btnMenu07_04.getSetter("menuLinkUrl").set("frame::commom/framePolicyScr04.xfdl");
                p.btnMenu07_04.move("staMenuBg06:0","229",null,"52","1",null);
            	}
            );
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form
            obj = new Layout("tablet","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staMenuBg07.set_minheight("260");
                p.staMenuBg07.set_maxheight("");
                p.staMenuBg07.move("staMenuBg06:0","428","24.86%","260",null,null);

                p.staMenuBg06.set_minheight("260");
                p.staMenuBg06.set_maxheight("");
                p.staMenuBg06.move("staMenuBg05:0","428","24.86%","260",null,null);

                p.staMenuBg05.set_minheight("260");
                p.staMenuBg05.set_maxheight("");
                p.staMenuBg05.move("0","428","24.86%","260",null,null);

                p.staMenuBg04.set_minheight("260");
                p.staMenuBg04.set_maxheight("");
                p.staMenuBg04.move("staMenuBg03:0","55",null,"260","0",null);

                p.staMenuBg03.set_minheight("260");
                p.staMenuBg03.set_maxheight("");
                p.staMenuBg03.move("staMenuBg02:0","55","24.86%","260",null,null);

                p.staMenuBg02.set_minheight("260");
                p.staMenuBg02.set_maxheight("");
                p.staMenuBg02.move("staMenuBg01:0","55","24.86%","260",null,null);

                p.staMenuBg01.set_minheight("260");
                p.staMenuBg01.set_maxheight("");
                p.staMenuBg01.move("0","55","24.86%","260",null,null);

                p.staTMenu05.move("0","373","24.86%","55",null,null);

                p.staTMenu07.move("staTMenu06:0","373","24.86%","55",null,null);

                p.btnMenu06_03.move("staMenuBg05:0","550","24.86%","52",null,null);

                p.staTMenu06.move("staTMenu05:0","373","24.86%","55",null,null);

                p.btnMenu06_02.move("staMenuBg05:0","498","24.86%","52",null,null);

                p.btnMenu06_01.move("staMenuBg05:0","446","24.86%","52",null,null);

                p.btnMenu07_04.move("staMenuBg06:0","602","24.86%","52",null,null);

                p.btnMenu07_03.move("staMenuBg06:0","550","24.86%","52",null,null);

                p.btnMenu07_02.move("staMenuBg06:0","498","24.86%","52",null,null);

                p.btnMenu07_01.move("staMenuBg06:0","446","24.86%","52",null,null);

                p.staTMenu01.move("0","0","24.86%","55",null,null);

                p.staTMenu02.move("staTMenu01:0","0","24.86%","55",null,null);

                p.staTMenu03.move("staTMenu02:0","0","24.86%","55",null,null);

                p.staTMenu04.move("staTMenu03:0","0",null,"55","0",null);

                p.btnMenu02_01.move("staMenuBg01:0","73","24.86%","52",null,null);

                p.btnMenu02_02.move("staMenuBg01:0","125","24.86%","52",null,null);

                p.btnMenu02_03.move("staMenuBg01:0","177","24.86%","52",null,null);

                p.btnMenu02_04.move("staMenuBg01:0","229","24.86%","52",null,null);

                p.btnMenu03_01.move("staMenuBg02:0","73","24.86%","52",null,null);

                p.btnMenu03_02.move("staMenuBg02:0","125","24.86%","52",null,null);

                p.btnMenu03_03.move("staMenuBg02:0","177","24.86%","52",null,null);

                p.btnMenu05_01.move("0","446","24.86%","52",null,null);

                p.btnMenu01_01.move("0","73","24.86%","52",null,null);

                p.btnMenu04_01.move("staMenuBg03:0","73","24.86%","52",null,null);
            	}
            );
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form
            obj = new Layout("mobile","",0,0,this.divMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMenuM.form
            obj = new Layout("default","",0,0,this.divMenuM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTFBg.set_taborder("0");
                p.staTFBg.set_cssclass("sta_TF_Bg");
                p.staTFBg.set_accessibilityenable("false");
                p.staTFBg.move("0","0",null,"76","0",null);

                p.btnLogo.set_taborder("1");
                p.btnLogo.set_accessibilitylabel("나이스 대국민 학부모 소통 서비스");
                p.btnLogo.set_cssclass("btn_TF_LogoM");
                p.btnLogo.set_accessibilityrole("heading");
                p.btnLogo.set_accessibilitydescription("메인으로 바로가기 링크");
                p.btnLogo.move("0","13","138","50",null,null);

                p.btnGuide.set_taborder("2");
                p.btnGuide.set_text("이용가이드");
                p.btnGuide.set_cssclass("btn_MNU_Guide");
                p.btnGuide.move("10","85",null,"50","10",null);

                p.grdMenu.set_taborder("3");
                p.grdMenu.set_cssclass("grd_MNU_Menu");
                p.grdMenu.set_binddataset("dsMenu");
                p.grdMenu.set_autofittype("col");
                p.grdMenu.set_treeuseline("false");
                p.grdMenu.set_treeuseimage("false");
                p.grdMenu.set_treeuseexpandkey("false");
                p.grdMenu.set_treeusecheckbox("false");
                p.grdMenu.set_treeusebutton("no");
                p.grdMenu.set_treeinitstatus("expand,null");
                p.grdMenu.set_scrollbartype("autoindicator autoindicator");
                p.grdMenu.set_autoenter("select");
                p.grdMenu.set_selecttype("cell");
                p.grdMenu.move("0","145",null,null,"0","0");

                p.staSample1.set_taborder("4");
                p.staSample1.set_text("하위메뉴가 없을 때, 1depth class명\r\ncell_MNU_1Depth");
                p.staSample1.set_cssclass("sta_WF_GBg02");
                p.staSample1.set_visible("false");
                p.staSample1.set_accessibilityenable("false");
                p.staSample1.move("40","200","303","71",null,null);
            	}
            );
            this.divMenuM.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenuM.form
            obj = new Layout("tablet","",0,0,this.divMenuM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMenuM.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenuM.form
            obj = new Layout("mobile","",0,0,this.divMenuM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSample1.set_taborder("4");
                p.staSample1.move("147","200","303","71",null,null);

                p.btnGuide.set_taborder("2");
                p.btnGuide.set_text("사용자 매뉴얼");
                p.btnGuide.move("10","90",null,"50","10",null);

                p.staTFBg.set_taborder("0");

                p.btnLogo.set_taborder("1");

                p.grdMenu.set_taborder("3");
            	}
            );
            this.divMenuM.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1430,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전체메뉴");

                p.staBg.set_taborder("0");
                p.staBg.set_cssclass("sta_WF_PopBg");
                p.staBg.set_accessibilityenable("false");
                p.staBg.set_minheight("720");
                p.staBg.set_maxheight("");
                p.staBg.set_maxwidth("");
                p.staBg.move("0","0",null,null,"0","0");

                p.divMenu.set_taborder("1");
                p.divMenu.set_text("Div00");
                p.divMenu.set_minheight("512");
                p.divMenu.set_maxheight("");
                p.divMenu.set_maxwidth("");
                p.divMenu.move("11%","173",null,null,"11%","35");

                p.divMenuM.set_taborder("2");
                p.divMenuM.set_text("Div01");
                p.divMenuM.set_accessibilityenable("false");
                p.divMenuM.move("0","0","0","549",null,null);

                p.btnClose.set_taborder("3");
                p.btnClose.set_cssclass("btn_WF_Close");
                p.btnClose.set_accessibilitylabel("창 닫기");
                p.btnClose.move(null,"60","40","40","11%",null);

                p.grdSample1.set_taborder("4");
                p.grdSample1.set_cssclass("grd_MNU_Menu");
                p.grdSample1.set_binddataset("ds_mnu");
                p.grdSample1.set_autofittype("col");
                p.grdSample1.set_treeuseline("false");
                p.grdSample1.set_treeuseimage("false");
                p.grdSample1.set_treeuseexpandkey("false");
                p.grdSample1.set_treeusecheckbox("false");
                p.grdSample1.set_treeusebutton("no");
                p.grdSample1.set_treeinitstatus("expand,null");
                p.grdSample1.set_scrollbartype("autoindicator autoindicator");
                p.grdSample1.set_visible("false");
                p.grdSample1.set_accessibilityenable("false");
                p.grdSample1.move("1487","145","328","403",null,null);

                p.grdSample2.set_taborder("5");
                p.grdSample2.set_cssclass("grd_MNU_Menu");
                p.grdSample2.set_binddataset("ds_mnu");
                p.grdSample2.set_autofittype("col");
                p.grdSample2.set_treeuseline("false");
                p.grdSample2.set_treeuseimage("false");
                p.grdSample2.set_treeuseexpandkey("false");
                p.grdSample2.set_treeusecheckbox("false");
                p.grdSample2.set_treeusebutton("no");
                p.grdSample2.set_treeinitstatus("collapse,all");
                p.grdSample2.set_scrollbartype("autoindicator autoindicator");
                p.grdSample2.set_visible("false");
                p.grdSample2.set_accessibilityenable("false");
                p.grdSample2.move("1843","145","328","403",null,null);

                p.staSample1.set_taborder("6");
                p.staSample1.set_text("메뉴가 열려 있을 때, class명\r\ncell_MNU_1DepthO");
                p.staSample1.set_cssclass("sta_WF_GBg02");
                p.staSample1.set_visible("false");
                p.staSample1.set_accessibilityenable("false");
                p.staSample1.move("1545","246","270","71",null,null);

                p.staSample2.set_taborder("7");
                p.staSample2.set_text("메뉴가 닫혀 있을 때, class명\r\ncell_MNU_1DepthC");
                p.staSample2.set_cssclass("sta_WF_GBg02");
                p.staSample2.set_visible("false");
                p.staSample2.set_accessibilityenable("false");
                p.staSample2.move("1901","246","270","71",null,null);

                p.btn00.set_taborder("8");
                p.btn00.set_text("btn00");
                p.btn00.move("455","31","265","64",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","tabletScr,desktopScr",800,1025,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMenu.set_minheight("703");
                p.divMenu.set_maxheight("");
                p.divMenu.move("30","173",null,"703","30",null);

                p.btnClose.move(null,"60","40","40","30",null);

                p.staBg.set_minheight("1025");
                p.staBg.set_maxheight("");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr,desktopScr",480,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnClose.set_cssclass("btn_WF_CloseM");
                p.btnClose.move(null,"18","40","40","15",null);

                p.divMenu.set_accessibilityenable("false");
                p.divMenu.set_minheight("0");
                p.divMenu.set_maxheight("");
                p.divMenu.move("3.85%","173","0%","0",null,null);

                p.divMenuM.set_accessibilityenable("true");
                p.divMenuM.move("15","0",null,null,"15","0");

                p.staBg.set_accessibilityenable("false");
                p.staBg.set_minheight("0");
                p.staBg.set_maxheight("");
                p.staBg.move("0","0","0","0",null,null);

                p.grdSample1.move("515","145","328","403",null,null);

                p.grdSample2.move("871","145","328","403",null,null);

                p.staSample1.move("573","246","270","71",null,null);

                p.staSample2.move("929","246","270","71",null,null);
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
            this.divMenu.form.staTMenu01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu01_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu02.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu02_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu02_02.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu02_03.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu02_04.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu03.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu03_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu03_02.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu03_03.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu04.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu04_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu05.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu05_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu06.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu06_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu06_02.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu06_03.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.staTMenu07.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu07_01.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu07_02.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu07_03.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenu.form.btnMenu07_04.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divMenuM.form.btnGuide.addEventHandler("onclick",this.divMenuM_btnGuide_onclick,this);
            this.divMenuM.form.grdMenu.addEventHandler("oncellclick",this.divMenuM_grdMenu_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("topmenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
