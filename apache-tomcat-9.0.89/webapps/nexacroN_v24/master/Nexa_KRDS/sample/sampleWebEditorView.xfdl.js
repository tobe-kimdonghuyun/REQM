(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWebEditorView");
            this.set_titletext("웹에디터상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "sj","type" : "STRING","size" : "256"},{"id" : "wrter","type" : "STRING","size" : "256"},{"id" : "cn","type" : "STRING","size" : "256"}]},"Rows" : [{"sj" : "제목입니다.","wrter" : "홍길동"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContent","0","0",null,null,"0","120",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webCn","0","0",null,null,"0","0",null,null,null,null,this.divContent.form);
            obj.getSetter("taborder").set("1");
            obj.getSetter("onloadcompleted").set("divContent_webCn_onloadcompleted");
            obj.getSetter("border").set("0px none");
            this.divContent.addChild(obj.name, obj);

            obj = new Button("btnGoback",null,"divContent:40","120","48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContent.form
            obj = new Layout("default","",0,0,this.divContent.form,function(p){});
            this.divContent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleWebEditorView.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleWebEditorView.xfdl
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

        	// HTML Viewer를 생성
        	this.gfnCreateHtmlViewer(this.divContent.form.webCn);
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
        this.divContent_webCn_onloadcompleted = function(obj,e)
        {
        	var objArg = this.gfnGetArgument();

        	var sHtml = "";

        	if (!this.gfnIsNull(objArg) && !this.gfnIsNull(objArg["cn"])) {
        		sHtml = objArg.cn;
        	}

        	// 웹브라우저 객체에 HTML을 보여준다
        	this.gfnSetHtmlView(this.divContent.form.webCn, sHtml);
        };

        this.btnGoback_onclick = function(obj,e)
        {
        	this.gfnSetUrl("sample::sampleWebEditor.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGoback.addEventHandler("onclick",this.btnGoback_onclick,this);
        };
        this.loadIncludeScript("sampleWebEditorView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
