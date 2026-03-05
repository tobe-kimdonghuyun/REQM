(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bfrNxtrmSbltDsgnPopup");
            this.set_titletext("전차기소반 지정");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,697);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"wplbkNo\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"upId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdBfrNxtrm","20","20","260","615",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("0");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"140\"/><Column size=\"50\"/><Column size=\"150\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" treestartlevel=\"0\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"expr:lev == &apos;1&apos; ? id +&apos;소반&apos; : id +&apos;임반&apos;\" textAlign=\"left\"/><Cell col=\"2\" edittype=\"expr:lev == &apos;1&apos; ? &apos;checkbox&apos; : &apos;none&apos;\" controlautosizingtype=\"both\" displaytype=\"expr:lev == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;normal&apos;\" textAlign=\"center\" text=\"bind:chk\" expr=\"lev == &apos;1&apos; ? chk : &apos;&apos;\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"grdBfrNxtrm:10","68","32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_yes");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,697,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("bfrNxtrmSbltDsgnPopup.xfdl","lib::lib_nfm.xjs");
        this.registerScript("bfrNxtrmSbltDsgnPopup.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sbltLctnRegPopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	24.09.10
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024-09-10			gmj					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(obj,e); //필수함수
        	this.fnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			var rowCnt = this.dsList.rowcount;
        			//전차기 있으면 체크해주기
        			if(publicArgs.mthrSbltHstry.length > 0){
        				for(var i = 0 ; i < publicArgs.mthrSbltHstry.length; i++){
        					var mthrCmblcId = publicArgs.mthrSbltHstry[i].split("_")[2];

        					for(var k = 0 ; k < rowCnt ; k ++){
        						var location = this.dsList.findRow("wplbkNo", publicArgs.mthrSbltHstry[i]);
        						var len = this.grdBfrNxtrm._treeIndexes.length;
        						for(var j = 0; j < len ; j++){
        							if(this.grdBfrNxtrm._treeIndexes[j] < location && location < this.grdBfrNxtrm._treeIndexes[j+1]){
        								this.grdBfrNxtrm.setTreeStatus(j, 1);
        							}
        						}
        						if(this.dsList.getColumn(k, "wplbkNo") == publicArgs.mthrSbltHstry[i]){
        							this.dsList.setColumn(k, "chk", 1);
        						}
        					}
        				}
        			}

        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        // 지방산림청 목록 조회
        this.fnSearch = function () {
        	if(this.dsSearch.getRowCount() == 0) {
        		this.dsSearch.addRow();
        	}
        	this.dsSearch.setColumn(0, "wplarId", publicArgs.wplarId);
        	this.dsSearch.setColumn(0, "nxtrmNo", publicArgs.nxtrmNo);

        	var strSvcId    = "search";
        	var strSvcUrl   = "nfm/wplbk/selectBfrNxtrmSbltList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=resultList";
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
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnOk_onclick = function(obj,e) {

        	var rowCnt = this.dsList.getRowCount();
        	var cnt = 0;
        	var wplbkNo = [];

        	for(var i = 0 ; i < rowCnt ; i++){
        		if(this.dsList.getColumn(i, "chk") == "1"){
        			wplbkNo.push(this.dsList.getColumn(i, "wplbkNo"));
        			cnt+=1;
        		}

        	}

        	var rtnValue = {
        			 wplbkNo : wplbkNo
        	};
        	this.gfnClosePopup(JSON.stringify(rtnValue));

        };

        this.dsList_cancolumnchange = function(obj,e) {
        	var lev = this.dsList.getColumn(e.row, 'lev');

        	if(lev == 0) {
        		return false;
        	}
        };

        //체크 선택 제한
        this.grdBfrNxtrm_oncellclick = function(obj,e){

        	if(e.col == '2'){
        		var cnt =  0;
        		for(var i = 0 ; i < this.dsList.rowcount; i++){
        			if(this.dsList.getColumn(i, "chk") == "1"){
        				cnt ++;
        			}
        		}
        		if(cnt > 3){
        			this.gfnAlert("소반은 3개까지 선택가능합니다.");
        			this.dsList.setColumn(e.row, "chk", 0);
        			return false;
        		}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdBfrNxtrm.addEventHandler("oncellclick",this.grdBfrNxtrm_oncellclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("bfrNxtrmSbltDsgnPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
