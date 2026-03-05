//XJS=Lib_Util.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        * @class DS에서 가져온 max를 이용해 다음 아이디 번호 반환
        * @param {Object} objDs - append할 데이터셋
        * @return {Number} nbNo - 다음 아이디 번호
        * @example
        * this.lfnNextMax(this.dsNo);
        */
        this.lfnNextMax = function(objDs)
        {
        	var nbNo = parseInt(objDs.getColumn(0, "b_no")) + 1;
        	objDs.setColumn(0, "b_no", nbNo);

        	return nbNo;
        }

        /**
        * @class  콤보의 첫번째 row에 전체 추가 & 전달된 데이터셋 append
        * @param {Object} objDs - append할 데이터셋
        * @param {Object} objCombo - Combo Object
        * @return
        * @example
        * this.gfnSetCombo(this.dataset, this.combo);
        */
        this.lfnSetSearchCombo = function(objDs, objCombo)
        {
        	var objDataset = objCombo.getInnerDataset();

        	objDataset.set_enableevent(false);
        	// 전체 옵션 추가
        	objDataset.setColumn(0, "codecolumn", "");
        	objDataset.setColumn(0, "datacolumn", "전체");

        	// 공통코드 데이터셋 추가
        	objDataset.appendData(objDs);
        	objDataset.set_enableevent(true);
        }

        /**
        * @class  콤보의 첫번째 row에 전체 추가 & 전달된 데이터셋 append
        * @return N/A
        * @example
        * this.lfnOpenFrmCount();
        */
        this.lfnOpenFrmCount = function()
        {
        	if(system.navigatorname == "nexacro")
        	{
        		return;
        	}

        	var objApp = nexacro.getApplication();

        	objApp.gvOpenFrmCount++;

        	if(objApp.gvOpenFrmCount == 3)
        	{
        		var strBNo = sessionStorage.getItem("strBNo");

        		if(!this.gfnIsNull(strBNo))
        		{
        			var strMenuID = objApp.gvBackerIndividualMenuId;	// 후원금등록(개인별) 메뉴ID
        			var sWinId = objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, strMenuID, this.FRAME_MENUCOLUMNS.winId);
        			var objParam = { bNo : strBNo};

        			// 후원금등록(개인별) 화면이 열려있을경우
        			if(!this.gfnIsNull(sWinId))
        			{
        				objApp.gvFrsWork.frames[sWinId].form.fvDivWork.form.fnInit();
        			}
        			objApp.gvFrmLeft.form.fnFormOpen(strMenuID, objParam);
        		}
        		sessionStorage.removeItem("strBNo");

        		objApp.gvOpenFrmCount = 0;
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
