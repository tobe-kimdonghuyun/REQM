(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sbltLctnRegPopup");
            this.set_titletext("소반 소재지 지정");
            if (Form == this.constructor)
            {
                this._setFormPosition(846,187);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPunCdList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSido", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSigungu", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmd", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRi", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPnuSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"emd_cd\" type=\"STRING\" size=\"256\"/><Column id=\"ri_cd\" type=\"STRING\" size=\"256\"/><Column id=\"san_cd\" type=\"STRING\" size=\"256\"/><Column id=\"bonbun\" type=\"STRING\" size=\"256\"/><Column id=\"bubun\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"95","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","0","0",null,null,"0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_rowAll");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","100",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("주소입력");
            obj.set_cssclass("sta_DA_label_L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSido","Static30:20","10","160","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSido");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("시/도");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbSigungu","cmbSido:10","10","160","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSigungu");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("시/군/구");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbEmd","cmbSigungu:10","10","130","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsEmd");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("읍/면/동");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmbRi","cmbEmd:10","10","130","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsRi");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("리");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkMtn","Static30:20","55","40","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("산");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("edtBonbun","chkMtn:20","55","70","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_format("!####.");
            obj.set_limitbymask("both");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUnit00","edtBonbun:0","55","28","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("edtBubun","staUnit00:0","55","70","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_limitbymask("both");
            obj.set_format("!###.");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"divSearch:20","68","32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_yes");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",846,187,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cmbEmd","value","dsPnuSearch","emd_cd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cmbRi","value","dsPnuSearch","ri_cd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtBonbun","value","dsPnuSearch","bonbun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtBubun","value","dsPnuSearch","bubun");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("sbltLctnRegPopup.xfdl","lib::lib_nfm.xjs");
        this.registerScript("sbltLctnRegPopup.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sbltLctnRegPopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	24.08.08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024-08-08		KDS					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(obj,e); //필수함수

        	this.nfmCmmnSearch("SIDO", null);	// 산림경영 공통(시도 조회)
        	this.nfmCmmnSearch("SIGUNGU", null);

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg){
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0){
        		return;
        	}
        	switch(svcID){
        		case "search":
        			if(this.dsPunCdList.getRowCount() == 0) {
        				this.gfnAlert("잘못된 주소입니다. 다시 입력해주세요 ");
        				return false;
        			}else{

        				var bonbun = this.divSearch.form.edtBonbun.text;
        				var juso = "";
        				if(this.gfnIsEmpty(this.divSearch.form.edtBubun.text) || this.divSearch.form.edtBubun.text.length < 1){
        					bubun = "";
        				}else{
        					bubun = "-"+this.divSearch.form.edtBubun.text;
        				}
        				var san = this.divSearch.form.chkMtn.isChecked()?"산":"";

        				if(san != "산"){
        					if(this.divSearch.form.cmbRi.value != undefined){
        						juso = this.divSearch.form.cmbSido.text+" "+this.divSearch.form.cmbSigungu.text+" "+this.divSearch.form.cmbEmd.text+" "+
        						this.divSearch.form.cmbRi.text+" "+bonbun+bubun;
        					}else{
        						juso = this.divSearch.form.cmbSido.text+" "+this.divSearch.form.cmbSigungu.text+" "+this.divSearch.form.cmbEmd.text+" "+
        						+bonbun+bubun;
        					}
        				}else {
        					if(this.divSearch.form.cmbRi.value != undefined){
        						juso = this.divSearch.form.cmbSido.text+" "+this.divSearch.form.cmbSigungu.text+" "+this.divSearch.form.cmbEmd.text+" "+
        						this.divSearch.form.cmbRi.text+" "+san+bonbun+bubun;
        					}else{
        						juso = this.divSearch.form.cmbSido.text+" "+this.divSearch.form.cmbSigungu.text+" "+this.divSearch.form.cmbEmd.text+" "
        						+san+bonbun+bubun;
        					}

        				}
        				//console.log("juso: "+juso);
        				var rtnValue = {
        					  pnuCd: this.dsPunCdList.getColumn(0, "value")
        					, lctnDaddr: juso
        				}
        				this.gfnClosePopup(JSON.stringify(rtnValue));
        			}
        		break;
        	}
        };


        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.fnSearch = function(){
        	var sanYn = this.divSearch.form.chkMtn.isChecked()?"2":"0";
        	this.dsPnuSearch.setColumn(0, "dsName", "PNU");
        	this.dsPnuSearch.setColumn(0, "emd_cd", this.divSearch.form.cmbEmd.value);
        	this.dsPnuSearch.setColumn(0, "ri_cd", this.divSearch.form.cmbRi.value);
        	this.dsPnuSearch.setColumn(0, "san_cd", sanYn);
        	this.dsPnuSearch.setColumn(0, "bonbun", this.divSearch.form.edtBonbun.text);
        	if(this.gfnIsEmpty(this.divSearch.form.edtBubun.text)){
        		this.dsPnuSearch.setColumn(0, "bubun", "0");
        	}else {
        		this.dsPnuSearch.setColumn(0, "bubun", this.divSearch.form.edtBubun.text);
        	}


        	var strSvcId    = "search";
        	var strSvcUrl   = "nfmCmmn/selectNfmCmmnSearch.do";
        	var inData      = "dsSearch=dsPnuSearch";
        	var outData     = "dsPunCdList=resultList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)

        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnOk_onclick = function(obj,e){
        	if(this.gfnIsNull(this.divSearch.form.cmbSido.value)||this.gfnIsEmpty(this.divSearch.form.cmbSido.text)){
        		this.gfnAlert("시도는 필수 값입니다. ");
        		return false;
        	}
        	if(this.gfnIsNull(this.divSearch.form.cmbSigungu.value)||this.gfnIsEmpty(this.divSearch.form.cmbSigungu.text)){
        		this.gfnAlert("시군구는 필수 값입니다. ");
        		return false;
        	}
        	if(this.gfnIsNull(this.divSearch.form.cmbEmd.value)||this.gfnIsEmpty(this.divSearch.form.cmbEmd.text)){
        		this.gfnAlert("읍면동은 필수 값입니다. ");
        		return false;
        	}
        	if(this.gfnIsNull( this.dsRi.rowcount !== 0 && (this.divSearch.form.cmbRi.value)||this.gfnIsEmpty(this.divSearch.form.cmbRi.text))){
        		this.gfnAlert("리는 필수 값입니다. ");
        		return false;
        	}
        	// 본번 필수값
        	if(this.gfnIsEmpty(this.divSearch.form.edtBonbun.text)|| this.divSearch.form.edtBonbun.text.length < 1){
        		this.gfnAlert("본번은 필수 값입니다. ");
        		return false;
        	}

        	this.fnSearch();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cmbSido.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbSido.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cmbSigungu.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbSigungu.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cmbEmd.addEventHandler("onitemchanged",this.nfmCmmndivSearch_onitemchanged,this);
            this.divSearch.form.cmbEmd.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cmbRi.addEventHandler("onitemchanged",this.divSearch_sadRi_onitemchanged,this);
            this.divSearch.form.cmbRi.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("sbltLctnRegPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
