(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstInqButtonList");
            this.set_titletext("신청하기_문의하기 버튼 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,106);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommInq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_InquiryType","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_InquiryType.form
            obj = new Layout("default","",0,0,this.div_InquiryType.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("10");
            obj.set_verticalgap("10");
            this.div_InquiryType.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,106,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prstInqButtonList.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	prstInqButtonList.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/10
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/10			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvDevParam			= "DevPro";		// Dev 파라미터 값
        this.fvUXParam			= "UXPro";		// UX 파라미터 값
        this.fvProGenParam		= "ProGen";		// ProGen 파라미터 값

        this.objBtnCommInq		= [];	// 문의유형
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // btn_WF_MultiS, btn_WF_Multi

        // 문의 유형 버튼 동적 생성
        this.fnCreateCommInqBtn = function(sMenuNm)
        {
        	if(this.objBtnCommInq.length > 0)	this.fnDelCommInqBtn(); // 기존 버튼 삭제

        	var nTop = 0;
        	var nHeight = 45;
        	var nWidth = 130;
         	var nLeft = 10;
         	var nLeftTerm = 10;

        	var objDivInqDetail = this.div_InquiryType; // 문의컨텐츠
        	var nBtnCommTop = "";

        	this.objBtnCommInq = [];

        	var sDevFilter = `HCL_CD == 'PR04' && GRP_CD_1 == '${this.fvDevParam}' || GRP_CD_2 == 'COMMPro'`; // DevPro 문의유형
        	var sUXFilter = `HCL_CD == 'PR04' && GRP_CD_1 == '${this.fvUXParam}' || GRP_CD_2 == 'COMMPro'`;  // UXPro 문의유형
        	var sPRGFilter = `HCL_CD == 'PR04' && GRP_CD_1 == '${this.fvProGenParam}' || GRP_CD_2 == 'COMMPro'`;  // ProGen 문의유형


        	// 공통버튼 데이터 셋
        	this.dsCommInq.copyData(this.objApp.gdsCommCode);

        	var sMenu = this.gfnIsNull(sMenuNm) ? this.objApp.gvIntroType : sMenuNm;
        	var sType = this.fnGetMenuType(sMenu);

        	//objDivInqDetail.resetScroll();

        	// UXPro 문의유형 필터 처리 및 div 사이즈 arrangement 처리
        	if(sType == this.fvUXParam) // UXPro
        	{
        		//objDivInqDetail.resetScroll();
        		this.dsCommInq.filter(sUXFilter);
        	}
        	else if(sType == this.fvDevParam)  // devPro 문의유형 필터 처리 및 div 사이즈 arrangement 처리
        	{
        		//objDivInqDetail.resetScroll();
        		this.dsCommInq.filter(sDevFilter);
        	}
        	else if(sType == this.fvProGenParam)  // ProGen 문의유형 필터 처리 및 div 사이즈 arrangement 처리
        	{
        		//objDivInqDetail.resetScroll();
        		this.dsCommInq.filter(sPRGFilter);
        	}
        	// Main일 경우 devPro 값으로 세팅
        	else
        	{
        		//objDivInqDetail.resetScroll();
        		this.dsCommInq.filter(sDevFilter);
        	}

        	// 버튼 생성
        	for (var i = 0; i < this.dsCommInq.getRowCount(); i++)
        	{
        		var sCommId = this.dsCommInq.getColumn(i, "SSC_CD");
        		var sCommNm = this.dsCommInq.getColumn(i, "SSC_CD_KORN_NM");

        		var sBtnId = this.fvBtnCommPrefix + sCommId;

        		var objBtn = new Button();

        		objBtn.init(sBtnId, nLeft, nTop, nWidth, nHeight, null, null);
        		objDivInqDetail.addChild(objBtn.name, objBtn);

        		this.objBtnCommInq.push(objBtn);

        		objBtn.set_text(sCommNm);

        		objBtn.set_cssclass("btn_WF_Multi");


        		objBtn.menuId = sCommId;
        		objBtn.show();

        		// 버튼 width 셋팅
        		objBtn.set_fittocontents("width");
        		objBtn.setEventHandler("onclick", this.btnCommInq_onclick, this);
        		nLeft += (nWidth) + (nLeftTerm);
        	}
        	objDivInqDetail.set_fittocontents("height");
        	objDivInqDetail.form.resetScroll();
        	this.resetScroll();
        	this.parent.parent.resetScroll();
        };

        // 문의 유형 버튼 삭제
        this.fnDelCommInqBtn = function()
        {
        	var objDiv = this.div_InquiryType;

        	// 관심서비스 유형에 따라 문의유형 다르게 적용
        	for(var i = 0; i < this.objBtnCommInq.length; i++)
        	{
        		objDiv.removeChild(this.objBtnCommInq[i].name);
        		this.objBtnCommInq[i].destroy();
        	}
        };

        // 버튼 아이디에 따른 화면 파라미터 값 반환
        this.fnGetMenuType = function(sId)
        {
        	switch(sId) {
        		case "btnDP" :
        			return this.fvDevParam
        		case "btnUXP" :
        			return this.fvUXParam
        		case "btnPRG" :
        			return this.fvProGenParam
        	}

        	return this.fvDevParam;
        };

        // 문의유형 중 선택된 버튼 object 반환
        this.fnGetSelectedBtns = function()
        {
        	var objBtnCss = [];
        	var nLen = this.objBtnCommInq.length;

        	for(var i = 0; i < nLen; i++)
        	{
        		if(this.objBtnCommInq[i].cssclass.indexOf("btn_WF_MultiS") > -1)
        			objBtnCss.push(this.objBtnCommInq[i]);
        	}

        	return objBtnCss;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnCommInq_onclick = function(obj,e)
        {
        	this.parent.parent.parent.parent.btnCommInq_onclick(obj, e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("prstInqButtonList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
