(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWebBrowser");
            this.set_titletext("웹브라우저 사용샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "1","Column1" : "메뉴1"},{"Column0" : "2","Column1" : "메뉴2"},{"Column0" : "3","Column1" : "메뉴3"},{"Column0" : "4","Column1" : "메뉴4"},{"Column0" : "5","Column1" : "메뉴5"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle00","0","0",null,"43","826",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("웹브라우저");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webSample","0","staTitle00:0","62.5%",null,null,"0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("onusernotify").set("webSample_onusernotify");
            obj.getSetter("onloadcompleted").set("webSample_onloadcompleted");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","webSample:20","0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("html에서 넘겨받은 내용");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaRtn","webSample:19","staTitle:77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallHtml",null,null,"209","48","0","txaRtn:16",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("HTML로 데이터셋 전송");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("sampleWebBrowser.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleWebBrowser.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
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

        	var sUrl = nexacro.getEnvironment().services['svcUrl'].url + "sampleHtml/webBrowserSample.html";
        	this.webSample.set_url(sUrl);
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
        this.webSample_onusernotify = function(obj,e)
        {
        	if(e.userdata.indexOf("toValue:")>-1){
        		var sValue = this.txaRtn.value;
        		if(this.gfnIsNull(sValue)) sValue = "";
        		var sRtnValue = e.userdata.replace("toValue:","");
        		if(this.gfnIsNull(sRtnValue)) return;

        		this.txaRtn.set_value(sValue + e.userdata.replace("toValue:","")+"\n");
        	}
        };

        this.webSample_onloadcompleted = function(obj,e)
        {
        	trace("webSample_onloadcompleted");
        };

        this.btnCallHtml_onclick = function(obj,e)
        {
        	var sData = this.ds00.saveXML();
        	this.webSample.callMethod("fnFromNexacro",sData);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCallHtml.addEventHandler("onclick",this.btnCallHtml_onclick,this);
        };
        this.loadIncludeScript("sampleWebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
