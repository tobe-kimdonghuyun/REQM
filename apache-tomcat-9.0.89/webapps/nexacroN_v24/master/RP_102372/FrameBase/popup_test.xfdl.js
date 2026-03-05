(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup_test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01","70","73","137","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업호출");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popup_test.xfdl", function() {

        var pForm = nexacro.Form.prototype;



        this.Button01_onclick = function(obj,e)
        {
        	var searchType = "excelUpload";
        	var popupUrl   = "FrameBase::BP2SP0020_P01.xfdl";

        	var strArgument = {};
        	var	rtnSearchYN = this.gfn_dialog(this, searchType, popupUrl, 0,0,0,0, false, "-1", strArgument, false, false, "" ,function(sPopupId, rtnArray) { // [X-LOG] 처리결과는 function 내부에서 처리합니다 (rtnArray:결과)
        			rtnArray = JSON.parse(rtnArray);

        		});

        };


        pForm.gfn_dialog = function(objForm, strId, strURL, nTop, nLeft, nWidth, nHeight, bShowTitle, strAlign, objArgument, isModeless, isLayered, bAutoSize, strCallBack, sOverlaycolor, bResizable, bUseTitle)
        {
        	trace("Start gf_Dialog strURL == " + strURL);
        	let newChild = null;
        	let objParentFrame = objForm.getOwnerFrame();

        	if(this.gfn_isNull(nTop))    nTop    = -1;
        	if(this.gfn_isNull(nLeft))   nLeft   = -1;
        	if(this.gfn_isNull(nWidth))  nWidth  = -1;
        	if(this.gfn_isNull(nHeight)) nHeight = -1;
        	if(this.gfn_isNull(bResizable)) bResizable = false;

        	let nRight = 0;
        	let nBottom = 0;

        	let strScreenRes, nCenterX, nCenterY, nMarginX, nMoniterIndex;

        	const nCursorX = system.getCursorX();
        	const nCursorY = system.getCursorY();

        	if (strAlign == "Bottom Left") {
        		nLeft = nCursorX;
        		nBottom = nCursorY - 5;
        		nTop = nBottom - nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "Top Left") {
        		nTop = nCursorY - 5;
        		nLeft = nCursorX;
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "Bottom Right") {
        		nRight = nCursorX;
        		nBottom = nCursorY - 5;
        		nTop = nBottom - nHeight;
        		nLeft = nRight - nWidth;
        	} else if (strAlign == "Top Right") {
        		nTop = nCursorY - 5;
        		nRight = nCursorX;
        		nBottom = nTop + nHeight;
        		nLeft = nRight - nWidth;
        	} else if (strAlign == "-1") {
        		strScreenRes = system.getScreenResolution(1);
        		nCenterX = new nexacro.toNumber(strScreenRes.split(" ")[0]);
        		nCenterY = new nexacro.toNumber(strScreenRes.split(" ")[1]);

        		nMarginX = 0;
        		nMoniterIndex = system.getMonitorIndex(nCursorX, nCursorY);
        		if (nMoniterIndex == 2) {
        			let strMarginRes = system.getScreenResolution(2);
        			nMarginX = new nexacro.toNumber(strMarginRes.split(" ")[0]);
        		}
        		nTop = Math.round(nexacro.getApplication().mainframe.getOffsetHeight() / 2) - Math.round(nHeight / 2) + nexacro.getApplication().mainframe.getOffsetTop();
        		nLeft = Math.round(nexacro.getApplication().mainframe.getOffsetWidth() / 2) - Math.round(nWidth / 2) + nexacro.getApplication().mainframe.getOffsetLeft();
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "offset") {
        		nTop += nCursorY;
        		nLeft += nCursorX;
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "absolute") {
        		nBottom = nTop + nHeight;
        		nRight = nLeft + nWidth;
        	} else if (strAlign == "default") {
        		nBottom = nHeight;
        		nRight  = nWidth;

        	} else {
        		//nTop   += mainframe.position.top;
        		//nLeft  += mainframe.position.left;
        		nBottom = nTop + nHeight;
        		nRight  = nLeft + nWidth;
        	}

        	//autosize default : true
        	if(this.gfn_isNull(bAutoSize)) bAutoSize = true;
        	if(this.gfn_isNull(bUseTitle)) bUseTitle = true;

        	if(this.gfn_isNull(objArgument)) objArgument = {};

        	if (isModeless == true) {

        	} else {

        		newChild = new ChildFrame();
        		newChild.init(strId, nLeft, nTop, nRight, nBottom, "", "", strURL);
        		if (strAlign != "" && strAlign != "default") {
        			newChild.set_openalign("center middle");
        		}

        		//Runtime 전용 속성
        		if (isLayered) {
        			newChild.set_layered(true);
        		} else {
        			newChild.set_layered(false);
        		}

        		if (this.gfn_isNotNull(sOverlaycolor)) {
        			newChild.set_overlaycolor(sOverlaycolor);
        		}

        		newChild.autosize = bAutoSize;

        		newChild.set_showstatusbar(false);

        		newChild.set_showtitlebar(bUseTitle);
        		newChild.set_titlebarheight(30);
        		newChild.set_showcascadetitletext(false);

        		newChild.set_resizable(bResizable);
        		if(bResizable==true) newChild.set_border("1px solid #3c5161");

        		let rtn = newChild.showModal(strId, objParentFrame, objArgument, this, strCallBack);

        		return rtn;
        	}
        };

        /**
        * 기능 :  NULL 여부 체크
        * @param : sValue String
        * @return : boolean
        */
        pForm.gfn_isNull = function(sValue)
        {
            if (typeof sValue =="undefined") return true;
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;
            if (sValue == "null") return true;
            if (sValue == "NaN") return true;
            if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) ) return true;

            let v_ChkStr = new String(sValue);
            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0 ) return true;

            return false;
        };


        pForm.gfn_isNotNull = function(sValue)
        {
           return !this.gfn_isNull(sValue);
        };



        pForm.gfn_alert = function(strMsg, strStyle, strTitle, callback, arrArg, sPopId) {
        	this.alert(strMsg);
        };


        pForm.gfn_transaction = function(strMsg, strStyle, strTitle, callback, arrArg, sPopId) {

        };

        /**
         * @class 프레임 parameter 가져오기
         * @param {String} 	sName - parameter 키값
         * @return {Object|String|Number|Boolean} parameter 결과값
         */
        pForm.gfn_getArgument = function(sName)
        {
        	const objFrame = this.getOwnerFrame();

        	let retVal ;
        	if(typeof objFrame[sName] !== "undefined"){
        		retVal = objFrame[sName];
        	}else{
        		//trace('"요청한 gfn_getArgument('+sName+')" 값은 정의되지 않는 변수입니다.');
        	}

        	return retVal;
        };



        pForm.gfn_searchArgAdd = function(sName, sValue, bClear) {


        };



        /**
         * 폼 onload 기본 함수
         * @public
         * @param {Form} obj nexacro.Form 컴퍼넌트
         * @return {N/A}
         * @example
         *
         * @memberOf this
         */
        pForm.gfn_init = function(obj) {

        	const objApp = nexacro.getApplication();

        	const objOwnerFrame = this.getOwnerFrame();
        	const objPForm = objOwnerFrame.getForm();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("popup_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
