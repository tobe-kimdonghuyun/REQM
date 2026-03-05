(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00");
            this.set_titletext("개인정보수집이용동의(보호구역)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","500",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_03\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집 이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04","78.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","122.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","1113.00","0","166","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01_04\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","850","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","20.00","10","100%","250",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 주관사 회사명, 주관사 부서명 , 주관사관리책임자(정) , 주관사 휴대전화번호(정) , 주관사관리책임자(부) , 주관사 휴대전화번호(부) , 주관사회사번호,\n실제사용자 회사명, 실제사용자 관리책임자(정) , 실제사용자 휴대전화번호(정) , 실제사용자 관리책임자(부) , 실제사용자 휴대전화번호(부) , 실제사용자 회사번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","850","Panel01_03:0","100.00%","260",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_spacing("10px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0.00","0","96.88%","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("raPrvcClctEsntlAgreYn","0.00","46","96.88%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var raPrvcClctEsntlAgreYn_innerdataset = new nexacro.NormalDataset("raPrvcClctEsntlAgreYn_innerdataset", obj);
            raPrvcClctEsntlAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(raPrvcClctEsntlAgreYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","20.00","0","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"raPrvcClctEsntlAgreYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00_00","850","Panel02_03:0","100.00%","97",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","raPrvcClctEsntlAgreYn","value","dsAply","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST011M00_04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_04.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철						최초생성
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
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
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

        //저장
        this.cfnSave = function ()
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
        this.fnInit = function () {

        }


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
        };
        this.loadIncludeScript("CST011M00_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
