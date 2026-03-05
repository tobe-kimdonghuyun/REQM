(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp06");
            this.set_titletext("Master-Detail-V(n:n)");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div02","669","565","322","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","88",null,"37.91%","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","5",null,null,"0","9.016999999999996",null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","572","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"0","107","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","btnExcelUp:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","238","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","324","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal01","98","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04","467","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("edi_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn02","579","10","28","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div00","0","div01:4.3%",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00",null,"5","467","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00","348","0","119","28",null,null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00","238","0","107","28",null,null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btn36","164","0","71","28",null,null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btn35","89","0","72","28",null,null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("false");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Button("btn48","0","0","86","28",null,null,null,null,null,null,this.div00.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("커스텀버튼");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00.form.div00_00.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","342","43",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("상세리스트");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd01","0","38",null,null,"0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div02
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div00_00.form
            obj = new Layout("default","",0,0,this.div00.form.div00_00.form,function(p){});
            this.div00.form.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp06.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp06.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Temp06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
