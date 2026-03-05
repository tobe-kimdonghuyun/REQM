(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePdfViewer");
            this.set_titletext("PDF 뷰어");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "TOBESOFT-CONSULTING.pdf"},{"Column0" : "nexacro17_en.pdf"},{"Column0" : "nexacro17_ko.pdf"},{"Column0" : "Conversion-Service.pdf"},{"Column0" : "X-PUSH-v28.pdf"},{"Column0" : "RPA Connector.pdf"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebPdfShow","0","50",null,null,"20","30",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPdfFile","99",null,"263","48",null,"WebPdfShow:2",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_itemheight("40");
            obj.set_text("TOBESOFT-CONSULTING.pdf");
            obj.set_value("TOBESOFT-CONSULTING.pdf");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","99","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("PDF File");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnPdf","370","0","134","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("새창에서보기");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webPdf","479","17","95","47",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            obj.getSetter("visible").set("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePdfViewer.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePdfViewer.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2022/05/13
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2022/05/13			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.webPdf.set_url(nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/pdf/view.html");
        	this.loadPdfViewer(this.cboPdfFile.value);
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
        /**
         * @description Pdf View
         */
        this.loadPdfViewer = function(filename)
        {
        	//var webrootUrl = nexacro.getProjectPath();
        	//this.WebBrowser00.set_url(webrootUrl + "../pdfjs-dist/web/viewer.html?file=" + filename);

        	var sUrl = nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/pdfjs-dist/web/viewer.html?file=" + filename;
        	this.WebPdfShow.set_url(sUrl);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description webBrowser내 웹페이지 load 완료 시 발생 이벤트
        */
        this.cboPdfFile_onitemchanged = function(obj,e)
        {
        	this.loadPdfViewer(e.postvalue);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var strURL = nexacro.getEnvironment().services["svcUrl"].url;
        	var objParam = {"url" : strURL + "downloadPdfFile.do?file=" + this.cboPdfFile.value};
        	var objWeb = this.webPdf.getProperty("window");
        	objWeb.callMethod("fnCall", objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboPdfFile.addEventHandler("onitemchanged",this.cboPdfFile_onitemchanged,this);
            this.btnPdf.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("samplePdfViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
