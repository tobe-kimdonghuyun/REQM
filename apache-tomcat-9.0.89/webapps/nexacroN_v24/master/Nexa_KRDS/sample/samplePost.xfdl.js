(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePost");
            this.set_titletext("주소찾기(행정안전부)");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_MenuCd","0","400","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DeatilLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","254","400","448","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_cssclass("readonly");
            obj.set_displaynulltext("도로명주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","710","400",null,"48","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("200");
            obj.set_displaynulltext("상세주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","98","400","92","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("우편번호");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPost","198","400","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","0",null,"340","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("1.화면에 행정안전부의 페이지를 호출 할 수 있도록 WebBrowser를 올려 놓는다.(본 화면에서는 webPost라는 아이디로 올려놓음 visible false)\n2.찾기버튼 클릭시 행정안전부 팝업을 호출한다. (this.gfnPostSearch(버튼);)\n3.fnPostCallBack에서 넘어온 배열을 화면에 셋팅한다.\nthis.fnPostCallBack = function(sName, aAddr)\narray[1]=>주소1\narray[2]=>주소2\narray[3]=>상세주소\narray[4]=>우편번호\n4. this.fnPostCallBack = function(sName, aAddr) 으로 리턴값 처리\n** Window NRE, IE 환경에서는 localhost 로 호출 시 오류가 발생함 \n  127.0.0.1로 변경하여 테스트 가능");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item17","edtDetailAddr","value","ds_list","DETL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePost.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePost.xfdl
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
         * @description 우편번호 찾기 팝업 호출
        */
        this.btn_searchPost_onclick = function(obj,e)
        {
        	this.gfnPostSearch(obj);
        };

        /**
         * @description 우편번호 CallBack 함수(선택)
        */
        this.fnPostCallback = function(sName, aAddr)
        {
        	if (sName == "btnSearchPost") {
        		trace("onusernotify ----------------------------");
        		trace("array[1]=>주소1          ==> " +	aAddr[1] );
        		trace("array[2]=>주소2          ==> " +	aAddr[2] );
        		trace("array[3]=>상세주소      ==> " + aAddr[3] );
        		trace("array[4]=>우편번호      ==> " +	aAddr[4] );
        		trace("-----------------------------------------");

        		this.edtSculZip.set_value(aAddr[4]);	        // 우편번호
        		this.edtBasAddr.set_value(aAddr[1]+aAddr[2]);	// 주소
        		this.edtDetailAddr.set_value(aAddr[3]);	    	// 상세 주소
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("samplePost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
