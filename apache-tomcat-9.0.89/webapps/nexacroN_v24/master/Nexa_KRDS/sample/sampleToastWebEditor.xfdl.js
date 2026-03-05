(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWebEditor");
            this.set_titletext("토스트 웹에디터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0","259","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("웹에디터");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetData",null,"10","135","48","142",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Nexa->Editor");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetData",null,"10","134","48","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Editor->Nexa");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webBrowser","0","63",null,null,"20","150",null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("onloadcompleted").set("webBrowser_onloadcompleted");
            obj.getSetter("onusernotify").set("webBrowser_onusernotify");
            obj.getSetter("enable").set("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtValue","0","webBrowser:50",null,"99","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleToastWebEditor.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleWebEditor.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/22
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/22			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvObjWin;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
         */
        this.form_onload = function(obj, e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 웹브라우저 객체에 Web Editor 생성
        	this.gfnCreateToastWebEditor(this.webBrowser);
        	this.fvObjWin = this.webBrowser;
        };

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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description webBrowser내 웹페이지 load 완료 시 발생 이벤트
        */
        this.webBrowser_onloadcompleted = function(obj, e)
        {

        };

        /**
         * @description webBrowser 페이지에서 nexacro로 값 전달 시 발생 이벤트
        */
        this.webBrowser_onusernotify = function(obj,e)
        {
        	if (e.userdata)
        	{
        		if (e.userdata=="instanceReady"){
        			obj.callMethod("init", obj.getOffsetHeight()-40);
        		}
        	}
        };

        /**
         * @description WebBrowser값을 ckEditor로 전달
         */
        this.btnSetData_onclick = function(obj,e)
        {
        	var sTxtValue = this.txtValue.value;

        	this.fvObjWin.callMethod("setData", sTxtValue);
        };

        /**
         * @description ckEditor값을 WebBrowser로 전달
         */
        this.btnGetData_onclick = function(obj,e)
        {
        	var sRtn = this.fvObjWin.callMethod("getData");

        	this.txtValue.set_value(sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSetData.addEventHandler("onclick",this.btnSetData_onclick,this);
            this.btnGetData.addEventHandler("onclick",this.btnGetData_onclick,this);
        };
        this.loadIncludeScript("sampleToastWebEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
