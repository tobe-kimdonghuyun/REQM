(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp09");
            this.set_titletext("Popup");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","12","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용자 검색");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","sta01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("edi_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn02","sta01:112","12","28","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

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
        this.registerScript("Temp17.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp17.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj); //필수함수
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
        /**
         * @description 팝업 콜백
        */
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;

        		var objRtn = JSON.parse(sRtn);

        		var sId = objRtn.rtnId;
        		var sName = objRtn.rtnName;

        		if (!this.gfnIsNull(sName)) this.divSearch.form.edtSearch.set_value(sName);
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 사용자검색 팝업 호출
        */
        this.fnOpenSearchPop = function()
        {
        	var sSearch = this.divSearch.form.edtSearch.value;
        	if (this.gfnIsNull(sSearch)) sSearch = "";

        	var sTitle = "사용자 검색 팝업";
        	var objArg   = {pvSearch:sSearch};
        	var objOption = {
        		width:700
        		,height:394			//width,height 지정하지 않음 popup form size적용
        		,popuptype:"modal"	//modal,modaless
        		,autosize:false
        		,title:sTitle
        		,resize:false
        		,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("popupSearch", "design::template/Temp17_1.xfdl", objArg, sPopupCallBack, objOption);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 검색 버튼 클릭 이벤트
        */
        this.Div00_Button01_onclick = function(obj,e)
        {
        	// 사용자검색 팝업 호출
        	this.fnOpenSearchPop();
        };

        /**
         * @description 검색 엔터키 이벤트
        */
        this.divSearch_edtSearch_onkeyup = function(obj,e)
        {
        	// 엔터키일 경우
        	if (e.keycode == 13)
        	{
        		// 사용자검색 팝업 호출
        		this.fnOpenSearchPop();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtSearch.addEventHandler("onkeyup",this.divSearch_edtSearch_onkeyup,this);
            this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Temp17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
