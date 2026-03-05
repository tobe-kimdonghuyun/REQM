(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"1\"/><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"comId\" type=\"STRING\" size=\"256\"/><Column id=\"comNm\" type=\"STRING\" size=\"256\"/><Column id=\"comDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"rno\">7</Col><Col id=\"comId\">com7</Col><Col id=\"comNm\">건물명1</Col><Col id=\"comDesc\">comdesc7</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">6</Col><Col id=\"comId\">com6</Col><Col id=\"comNm\">건물명2</Col><Col id=\"comDesc\">comdesc6</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">5</Col><Col id=\"comId\">com5</Col><Col id=\"comNm\">건물명3</Col><Col id=\"comDesc\">comdesc5</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">4</Col><Col id=\"comId\">com4</Col><Col id=\"comNm\">건물명4</Col><Col id=\"comDesc\">comdesc4</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">3</Col><Col id=\"comId\">com3</Col><Col id=\"comNm\">건물명5</Col><Col id=\"comDesc\">comdesc3</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">2</Col><Col id=\"comId\">com2</Col><Col id=\"comNm\">comname2</Col><Col id=\"comDesc\">comdesc2</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"rno\">1</Col><Col id=\"comId\">com1</Col><Col id=\"comNm\">comname1</Col><Col id=\"comDesc\">comdesc1</Col></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","104","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("searchText","sta00:0.00","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","25","70","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업체 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","113",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"292\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:rno\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:comNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:comDesc\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","625","29","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,394,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopup.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	samplePopup.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/09				김완성						최초생성
        *******************************************************************************
        */

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
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

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
        this.btnSearch_onclick = function(obj,e)
        {
        	//필터로 가능하지만 서버와 통신 후 데이터를 가져오는 것을 추천
        	var nm = this.divSearch.form.searchText.value;
        	this.dsList.filter("comNm.toString().indexOf('"+nm+"')>-1");
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	var chk = this.dsList.extractRows("chk == " + 1);
        	if(chk.length > 0) {
        		var arr = [];

        		for(var i=0;i<chk.length;i++) {
        			var sComId = this.dsList.getColumn(chk[i], "comId");
        			var sComNm = this.dsList.getColumn(chk[i], "comNm");

        			var rtnValue = {
        				rComId : sComId,
        				rComNm : sComNm
        			}
        			arr.push(rtnValue);
        		}

        		this.gfnClosePopup(JSON.stringify(arr));
        	} else {
        		this.gfnAlertMsg("MSG_001");
        	}
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;

        	var sComId = this.dsList.getColumn(nRow, "comId");
        	var sComNm = this.dsList.getColumn(nRow, "comNm");

        	var rtnValue = {
        		rComId : sComId,
        		rComNm : sComNm
        	}

        	this.close(JSON.stringify(rtnValue));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.searchText.addEventHandler("onkeyup",this.divSearch_edtName_onkeyup,this);
            this.divSearch.form.searchText.addEventHandler("oninput",this.divSearch_edtName_oninput,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("samplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
