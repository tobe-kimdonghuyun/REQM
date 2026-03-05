(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelList", this);
            obj._setContents("<ColumnInfo><Column id=\"item\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"def\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEctList", this);
            obj._setContents("<ColumnInfo><Column id=\"item\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"def\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25.00","83","50%","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("보여질 항목");
            obj.set_cssclass("sta_WF_Txt50022");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSelList","25.00","270","50%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSelList");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:item\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","435","472","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","322","472","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEctList","265.00","280","50%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsEctList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:item\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","265.00","83","50%","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("숨겨질 항목");
            obj.set_cssclass("sta_WF_Txt50022");
            this.addChild(obj.name, obj);

            obj = new Button("btnDefault","130","446","96","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본값으로");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnStrg","382","472","54","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","5","10",null,"43","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","5","Panel01:0",null,"354","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSelList\"/><PanelItem id=\"PanelItem02\" componentid=\"grdEctList\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","5.00","480",null,"33","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnDefault\"/><PanelItem id=\"PanelItem02\" componentid=\"btnApply\"/><PanelItem id=\"PanelItem03\" componentid=\"btnStrg\"/><PanelItem id=\"PanelItem04\" componentid=\"btnClose\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","5.00","412",null,"58","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","5.00","412","99.80%","58",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("좌우의 항목을 양방향으로 마우스로 끌어다 놓습니다.\r\n보여질 항목은 상하로 마우스로 끌어다 놓아 순서를 바꿀 수 있습니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("setGridFormat.xfdl","xjs::TaskCom.xjs");
        this.registerScript("setGridFormat.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	setGridFormat.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/06/05
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/06/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 초기화
        	this.fnInit();

        	// 그리드 항목명 목록 초기화
        	this.fnInitGrid();

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
         * @description 초기화
        */
        this.fnInit = function()
        {
            this.pvObjtId = this.getOwnerFrame().pvObjtId;
        	this.pvGrid   = this.pvObjtId.indexOf(".") == -1 ? this.opener[this.pvObjtId] : eval("this.opener." + this.pvObjtId);
        	this.pvGrid.orgnlFrm = this.pvGrid.orgnlFrm ? this.pvGrid.orgnlFrm : this.pvGrid.getFormatString();  // 원본 형식을 저장

        	if (this.gfnIsNull(this.pvObjtId)) {
        	    this.btnClose.click();

        		return;
        	}
        }

        /**
         * @description 그리드 항목명 목록 초기화
        */
        this.fnInitGrid = function()
        {
            var xmlDoc = (new nexacro.DomParser()).parseFromString(this.pvGrid.getFormatString(), "text/xml");
            this.fvXML = { "doc" : { "all" : xmlDoc
        	                       , "cur" : xmlDoc.querySelector("Format#default")
        	                       , "org" : (new nexacro.DomParser()).parseFromString(this.pvGrid.orgnlFrm, "text/xml")
        						   }
        	             , "nod" : { "Columns" : [], "Band#head" : [], "Band#body" : [] }
        				 };

        	for(key in this.fvXML.nod) {
        		this.fvXML.nod[key] = Array.prototype.slice.call(this.fvXML.doc.org.querySelector(key).cloneNode(true).children);
        	}

        	for(cell of this.fvXML.nod["Band#head"]) {
        		var row = this.dsEctList.addRow();
        		this.dsEctList.setColumn(row, 0, cell.getAttribute("text"));
        		this.dsEctList.setColumn(row, 1, row);
        		this.dsEctList.setColumn(row, 2, cell.getAttribute("upIsDefault"));
        	}

        	for(cell of Array.prototype.slice.call(this.fvXML.doc.cur.querySelector("Band#head").children)) {
        	    var text = cell.getAttribute("text");
        		var row  = this.dsEctList.findRow("item", text);
        	    if(row != -1) {
        			this.dsSelList.copyRow(this.dsSelList.addRow(), this.dsEctList, row);
        			this.dsEctList.deleteRow(row);
        		}
        	}

        	this.dsSelList.set_rowposition(0);
        	this.dsEctList.set_rowposition(0);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 적용 버튼 클릭 이벤트
        */
        this.btnApply_onclick = function(obj,e)
        {
        	for(key in this.fvXML.nod) {
        	    var node = this.fvXML.doc.cur.querySelector(key);
        		while(node.hasChildNodes()) {
        			node.removeChild(node.lastChild);
        		}
        	}

        	for(var i = 0; i < this.dsSelList.rowcount; i++) {
        		for(key in this.fvXML.nod) {
        			var node = this.fvXML.doc.cur.querySelector(key);
        			var cellObj = this.fvXML.nod[key][this.dsSelList.getColumn(i, 1)];
        			if(cellObj.tagName == "Cell") {
        			    cellObj.setAttribute("col", i);
        			}
        			node.appendChild(cellObj);
        		}
        	}

        	this.fvXML.doc.all.querySelector("Formats").replaceChild(this.fvXML.doc.cur, this.fvXML.doc.all.querySelector("Format#default"));
        	var xml = (new nexacro.XmlSerializer()).serializeToString(this.fvXML.doc.all);

        	if(obj.name == this.btnApply.name) {   // 적용
        		this.pvGrid.set_formats(xml);
        	} else {  // 저장
        		this.cfnStrgGrdPrztInfo({ scrnId:this.opener.name, objtId:"this." + this.pvObjtId, prztInfo:xml });
        	}

        	this.gfnClosePopup();
        };

        /**
         * @description 오른쪽 그리드 드래그 시작 이벤트
        */
        this.grdEctList_ondrag = function(obj,e)
        {
        	return true;
        };

        /**
         * @description 오른쪽 그리드 드랍 이벤트
        */
        this.grdEctList_ondrop = function(obj,e)
        {
        	if(e.row == -1) return;

        	// 왼쪽 그리드에서 이동 확인
        	if(e.fromobject.id !== e.sourceobject.id) {
        	    this.dsEctList.copyRow(this.dsEctList.insertRow(e.row == -9 ? this.dsEctList.rowcount : e.row), this.dsSelList, this.dsSelList.rowposition);
        		this.dsSelList.deleteRow(this.dsSelList.rowposition);
        	}
        };

        /**
         * @description 왼쪽 그리드 드래그 시작 이벤트
        */
        this.grdSelList_ondrag = function(obj,e)
        {
        	return true;
        };

        /**
         * @description 왼쪽 그리드 드랍 이벤트
        */
        this.grdSelList_ondrop = function(obj,e)
        {
            if(e.row == -1) return;

        	// 그리드(왼쪽) 내부에서의 이동 확인
        	if(e.fromobject.id === e.sourceobject.id) {
        	    this.dsSelList.moveRow(e.fromobject.selectstartrow[0], e.row);
        	} else if(e.fromobject.id !== e.sourceobject.id) {
        	    this.dsSelList.copyRow(this.dsSelList.insertRow(e.row == -9 ? this.dsSelList.rowcount : e.row), this.dsEctList, this.dsEctList.rowposition);
        		this.dsEctList.deleteRow(this.dsEctList.rowposition);
        	}
        };

        this.btnDefault_onclick = function(obj,e)
        {
            this.dsSelList.deleteAll();
        	this.dsEctList.deleteAll();

            var isDefault = false;
        	for(cell of this.fvXML.nod["Band#head"]) {
        	    isDefault = isDefault || eval(cell.getAttribute("upIsDefault") || "false");
        		var dsObj = isDefault && !eval(cell.getAttribute("upIsDefault") || "false") ? this.dsEctList : this.dsSelList;

        	    var row = dsObj.addRow();
        		dsObj.setColumn(row, 0, cell.getAttribute("text"));
        		dsObj.setColumn(row, 1, cell.getAttribute("col") || "0");
        	    dsObj.setColumn(row, 2, cell.getAttribute("upIsDefault"));
        	}

        	this.dsSelList.set_rowposition(0);
        	this.dsEctList.set_rowposition(0);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.grdSelList.addEventHandler("ondrag",this.grdSelList_ondrag,this);
            this.grdSelList.addEventHandler("ondrop",this.grdSelList_ondrop,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
            this.grdEctList.addEventHandler("ondrag",this.grdEctList_ondrag,this);
            this.grdEctList.addEventHandler("ondrop",this.grdEctList_ondrop,this);
            this.sta00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnDefault.addEventHandler("onclick",this.btnDefault_onclick,this);
            this.btnStrg.addEventHandler("onclick",this.btnApply_onclick,this);
        };
        this.loadIncludeScript("setGridFormat.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
