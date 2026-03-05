(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePostModule");
            this.set_titletext("주소찾기모듈");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_MenuCd","0","170","210","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호(행정안전부)");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","0",null,"160","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("1.컴포넌트 Property 중 jspUrl에 행안부 주소 연동 jsp url을 입력한다 (ex http://127.0.0.1:9093/devPro/thirdParty/post/PostCall.jsp)\n2.찾기버튼 클릭시 행정안전부 팝업을 호출한다.\n3.결과 값으로 넘어온 배열을 화면에 셋팅한다.\n** Window NRE, IE 환경에서는 localhost 로 호출 시 오류가 발생함 \n  127.0.0.1로 변경하여 테스트 가능");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new JusoPostCode("JusoPostCode00","0","sta_MenuCd:0","782","24",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("onclick").set("JusoPostCode00_onclick");
            this.addChild(obj.name, obj);

            obj = new Static("sta_MenuCd00","0","220","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("우편번호(Daum)");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new DaumPostCode("DaumPostCode00","0","248","782","24",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePostModule.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePostModule.xfdl
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var url = this.gfnGetServerUrl()+"thirdParty/post/PostCall.jsp";
        	if (url.indexOf("localhost") > -1)
        	{
        		url = "http://localhost:9093/thirdParty/post/PostCall.jsp";
        	}
        //	trace(url);
        	this.JusoPostCode00.set_jspUrl(url);
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


        this.JusoPostCode00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("samplePostModule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
