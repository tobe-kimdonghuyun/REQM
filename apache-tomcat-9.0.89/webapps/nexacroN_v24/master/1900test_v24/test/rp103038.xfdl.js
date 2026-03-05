(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_btbnt00_m01");
            this.set_titletext("공지사항목록조회_시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSysNtc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">첫번째</Col><Col id=\"rownum\">1</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">두번째</Col><Col id=\"rownum\">2</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">세번째</Col><Col id=\"rownum\">3</Col><Col id=\"regDt\">2025/07/14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNt", this);
            obj._setContents("<ColumnInfo><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">[교육청]시스템 안정화에 따른...</Col><Col id=\"regDt\">2025.07.14</Col></Row><Row><Col id=\"ntcMteTitlNm\">[교육청] 2025년 학부모 정책 모니터..</Col><Col id=\"regDt\">2025.07.14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj.getSetter("desc").set("Top메뉴-");
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"INT\" size=\"256\"/><Column id=\"parentMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"useGrade\" type=\"STRING\" size=\"256\"/><Column id=\"isShow\" type=\"STRING\" size=\"256\"/><Column id=\"isNeedLogin\" type=\"STRING\" size=\"256\"/><Column id=\"useHead\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">1000</Col><Col id=\"menuName\">서비스 소개</Col><Col id=\"menuUrl\"/><Col id=\"isShow\">Y</Col><Col id=\"parentMenuId\"/><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">1001</Col><Col id=\"menuName\">서비스 소개</Col><Col id=\"menuUrl\">pa_scr_mpg_mv::scr_mpgmv02_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">1000</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">2000</Col><Col id=\"menuName\">학교상담</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\"/><Col id=\"isNeedLogin\"/><Col id=\"useGrade\"/></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2010</Col><Col id=\"menuName\">상시상담예약</Col><Col id=\"menuUrl\">pa_scr_ctr_cr::scr_ctrcr00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2020</Col><Col id=\"menuName\">집중상담예약</Col><Col id=\"menuUrl\">pa_scr_ctr_ir::scr_ctrir00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2030</Col><Col id=\"menuName\">온라인(서면)상담</Col><Col id=\"menuUrl\">pa_scr_ctr_oc::scr_ctroc00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"parentMenuId\">2000</Col><Col id=\"menuId\">2040</Col><Col id=\"menuName\">공개온라인(서면)상담</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m02.xfdl</Col><Col id=\"lvl\">1</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"parentMenuId\">2040</Col><Col id=\"menuId\">2041</Col><Col id=\"menuName\">온라인(서면)상담신청상세조회</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m01.xfdl</Col><Col id=\"lvl\">1</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">3000</Col><Col id=\"menuName\">나의 신청 결과</Col><Col id=\"parentMenuId\"/><Col id=\"menuUrl\"/><Col id=\"isShow\"/><Col id=\"isNeedLogin\"/><Col id=\"useGrade\"/></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3010</Col><Col id=\"menuName\">상시상담예약결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl00_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3010</Col><Col id=\"menuId\">3011</Col><Col id=\"menuName\">상시상담신청상세</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl00_m01.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3020</Col><Col id=\"menuName\">집중상담예약결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl01_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"menuName\">집중상담신청상세</Col><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3020</Col><Col id=\"menuId\">3021</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl01_m01.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"parentMenuId\">3000</Col><Col id=\"menuId\">3030</Col><Col id=\"menuName\">온라인(서면)상담결과</Col><Col id=\"menuUrl\">pa_scr_mri_cl::scr_mricl02_m00.xfdl</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">Y</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">4000</Col><Col id=\"menuName\">공지사항</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">4001</Col><Col id=\"menuName\">공지사항</Col><Col id=\"menuUrl\">pa_scr_btb_nt::scr_btbnt00_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">4000</Col></Row><Row><Col id=\"parentMenuId\">4000</Col><Col id=\"lvl\">1</Col><Col id=\"menuId\">4010</Col><Col id=\"menuName\">공지사항상세</Col><Col id=\"menuUrl\">pa_scr_btb_nt::scr_btbnt00_m04.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">0</Col><Col id=\"menuId\">5000</Col><Col id=\"menuName\">FAQ</Col><Col id=\"menuUrl\"/><Col id=\"parentMenuId\"/><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useGrade\">N</Col><Col id=\"useHead\">Y</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"menuId\">5001</Col><Col id=\"menuName\">FAQ</Col><Col id=\"menuUrl\">pa_scr_btb_fq::scr_btbfq00_m00.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">Y</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col><Col id=\"parentMenuId\">5000</Col></Row><Row><Col id=\"parentMenuId\">5000</Col><Col id=\"lvl\">1</Col><Col id=\"menuId\">5010</Col><Col id=\"menuName\">FAQ상세</Col><Col id=\"menuUrl\">pa_scr_btb_fq::scr_btbfq00_m03.xfdl</Col><Col id=\"useGrade\">N</Col><Col id=\"isShow\">N</Col><Col id=\"isNeedLogin\">N</Col><Col id=\"useHead\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","23","43","260","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 tree");
            this.addChild(obj.name, obj);

            obj = new Div("divMenuM","20","140","470","999",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","15",null,null,"0","-10",null,null,null,null,this.divMenuM.form);
            obj.set_taborder("1");
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
            obj.set_createrowstype("all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"53\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuName\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lvl\" cssclass=\"expr:lvl==&apos;0&apos;?&quot;cell_MNU_1Depth&quot;:lvl==&apos;1&apos;?&quot;cell_MNU_2Depth&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.divMenuM.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenuM.form
            obj = new Layout("default","",0,0,this.divMenuM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdMenu.set_taborder("1");
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
                p.grdMenu.set_createrowstype("all");
                p.grdMenu.move("0","15",null,null,"0","-10");
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
                p.grdMenu.move("0","25",null,null,"0","0");
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
                p.grdMenu.set_taborder("1");
                p.grdMenu.move("0","15",null,null,"40","0");
            	}
            );
            this.divMenuM.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("그리드 tree");
                p.Button00.move("23","43","260","66",null,null);

                p.divMenuM.set_taborder("1");
                p.divMenuM.set_text("Div01");
                p.divMenuM.set_accessibilityenable("false");
                p.divMenuM.move("20","140","470","999",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",780,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("그리드 tree");

                p.divMenuM.move("20","190","470",null,null,"0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMenuM.move("10","190","450","950",null,null);

                p.Button00.set_text("그리드 tree_m");
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
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.divMenuM.form.grdMenu.addEventHandler("oncellclick",this.divMenuM_grdMenu_oncellclick,this);
        };
        this.loadIncludeScript("rp103038.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
