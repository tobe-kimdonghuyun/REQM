(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPopup");
            this.set_titletext("팝업 화면 연결");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose","40%",null,"100","30",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","9",null,"80","33",null,"6",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("modeless");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,394,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPopup.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmPopup.xfdl (공통 팝업페이지)
        *  @FileName 	cmmPopup.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.10.19
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(this);

        	//trace("paramTitle : " + this.getOwnerFrame().paramTitle);
            //trace("paramCode : " + this.getOwnerFrame().paramCode);
            //trace("paramNum : " + this.getOwnerFrame().paramNum);
        	//trace("paramUrl : " + this.getOwnerFrame().paramUrl);
        	//trace("popupType : " + this.getOwnerFrame().popupType);

        	//타이틀세팅
        	//if( !this.gfnIsNull(this.getOwnerFrame().paramTitle)){
        	//	this.set_titletext(this.getOwnerFrame().paramTitle);
        	//}

        	//divForm url 세팅
        	if( !this.gfnIsNull(this.getOwnerFrame().paramUrl)){
        		this.divForm.set_url(this.getOwnerFrame().paramUrl);
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

        /**
        * fnPopupCallback : popup callback
        * @param  : strId		   - [string]popup id
        * @param  : strVal		   - [string]return val
        * @return : N/A
        */
         this.fnPopupCallback = function(strId, strVal)
         {
        	trace(" strId : " + strId + " strVal : " + strVal);
         };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description popup close
        */
        this.btnClose_onclick = function(obj,e)
        {
        	var rtnVal;

        	// 팝업에 url Link시 리턴할 form변수
        	if (this.gfnIsNull(this.getOwnerFrame().paramUrl) == false) {
        		rtnVal = this.divForm.form.fvRtnVal;
        	}
        	else {
        		rtnVal = JSON.stringify({aaa:"tobesoft", bbb:"투비소프트"});
        	}
        	this.gfnClosePopup(rtnVal);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var oArg = {paramCode:"abcd", paramNum:12345, paramDataset:this.dsTest};
        	var oOption = {popuptype:"modeless",title:"모달리스 팝업",width:"512",height:"384"};	//top, left를 지정하지 않으면 가운데정렬 //top:20,left:370
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("modelesspopup2","cmm::cmmPopup.xfdl",oArg,sPopupCallBack,oOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("cmmPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
