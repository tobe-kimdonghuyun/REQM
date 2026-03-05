//XJS=treegrid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *  techtip tree grid move sample
        *  @MenuPath	techtip > treegrid
        *  @FileName	treegrid.xjs
        *  @Desction	treegrid level drag&drop sample script library
        *******************************************************************************
        *  2019.04.05		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object and drag & drop addEventHandler (form, grid)
        * @param objDiv	: objForm form, objConfig object
        *		 objConfig : {orgGrid, targetGrid, levelColumn, option}
        * @return
        */
        this.fnInitForm = function(objForm,objConfig)
        {

        	//define config info.
        	objForm.config = objConfig;

        	/* define component List
        	-----------------------------------------------------
        	obj.config ---> form object.config
        	.orgGrid 		---> drag process grid (original tree)
        	.targetGrid		---> drop process grid (target tree)
        	.orgDs			---> orgGrid bind dataset
        	.targetDs		---> targetGrid bind dataset
        	.tempDs			---> drag tree copy dataset (temp data)
        	.stImg			---> move static (drag & drop view)
        	*/

        	var objOrgGrid	  = objForm.config.orgGrid;
        	var objTargetGrid = objForm.config.targetGrid;
        	objOrgGrid.gridFormatInfo = objOrgGrid.formats;

        	var strTargetId	  = objTargetGrid.binddataset;	//target dataset name

        	objForm.config.orgDs    = objForm.all[objOrgGrid.binddataset];
        	objForm.config.targetDs	= objForm.all[strTargetId];

        	if(this.gfnIsNull(objForm.config.targetDs))
        	{
        		//create target dataset
        		objForm.config.targetDs = this.fnCreateTempDataset(objForm,objOrgGrid,"Target");
        	}

        	//create temp dataset
        	objForm.config.tempDs = this.fnCreateTempDataset(objForm,objOrgGrid,"Temp");

        	//create move static
        	objForm.config.staticClass = "";	//css class id
        	objForm.config.stImg	   = this.fnCreateMoveStatic(objForm,"stDragImg");

        	/* addEventHandler List
        	-----------------------------------------------------
        	form		---> ondragmove , ondrop
        	orgGrid		---> ondrag
        	targetGrid	---> ondrop
        	*/
        	objForm.addEventHandler("ondragmove",this.form_ondragmove,objForm);
        	objForm.addEventHandler("ondrop",this.form_ondrop,objForm);
        	objOrgGrid.addEventHandler("ondrag",this.grd_ondrag,objForm);
        	objTargetGrid.addEventHandler("ondrop",this.grd_ondrop,objForm);
        }

        /**
        * @description create static component (visible when use dragmove event)
        * @param obj : form, staticId : static name
        * @return objStatic : static 'stDragImg'
        */
        this.fnCreateMoveStatic = function(obj,staticId)
        {
        	var objStatic = new Static();
        	objStatic.init(staticId,0,0,100,30,null,null);
        	objStatic.set_cssclass(obj.config.staticClass);
        	objStatic.set_visible(false);

        	obj.addChild(staticId,objStatic);
        	objStatic.show();

        	return objStatic;
        }

        /**
        * @description create dataset (temp dataset or target dataset)
        * @param obj : form, objGrid : drag grid, type : 'Temp' or 'Target'
        * @return objTempDs : dataset 'dsTemp' or 'dsTarget'
        */
        this.fnCreateTempDataset = function(obj,objGrid,type)
        {
        	//create dataset name ('ds' + type + random 4 number)
        	var sDatasetId = "ds" + type + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	var objDs	= obj.config.orgDs;
        	var nColCnt = objDs.getColCount();

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);
        	obj.addChild(sDatasetId, objTempDs);

        	objTempDs.set_enableevent(false);
        	var nColId, sColInfo,sColSize,sColType;
        	for(var i=0; i<nColCnt; i++)
        	{
        		nColId	 = objDs.getColID(i);
        		sColInfo = objDs.getColumnInfo(i);
        		sColSize = sColInfo.size;
        		sColType = sColInfo.type;
        		objTempDs.addColumn(nColId,sColType,sColSize);
        	}
        	objTempDs.set_enableevent(true);

        	var objTargetGrid = obj.config.targetGrid;

        	if(type == "Target")
        	{
        		objTargetGrid.set_enableevent(false);
        		objTargetGrid.set_binddataset(sDatasetId);
        		objTargetGrid.set_formats(objGrid.gridFormatInfo);
        		objTargetGrid.set_treeinitstatus("expand,all");
        		objTargetGrid.set_enableevent(true);
        	}else
        	{
        		//targetDs addColumn org level Info :  current level VS original level
        		var sOrgName = "orgLvl";
        		obj.config.targetDs.orgLevel = sOrgName;
        		obj.config.targetDs.addColumn(sOrgName,"String",256);
        	}

        	return objTempDs;
        }

        /**
        * @description tree grid drop --> tree copy to temp dataset
        * @param objGrid : drop grid, eRow : e.row
        * @return
        */
        this.fnCopyDropData = function(objGrid,eRow)
        {
        	console.log(objGrid.parent.parent.parent.parent.parent);

        	var obj		 = objGrid.parent.parent.parent.parent.parent;
        	var dsOrg	 = obj.config.orgDs;
        	var dsTarget = obj.config.targetDs;
        	var dsTemp	 = obj.config.tempDs;
        	var grdTree	 = obj.config.orgGrid;
        	var grdTarget = obj.config.targetGrid;
        	var stDragImg = obj.config.stImg;

        	var i = 0;
        	var nRow = 0, nStart, nEnd = 0;

        	stDragImg.set_visible(false);

        	nStart = nEnd = grdTree.selectedRow;

        	//drop row position
        	grdTarget.targetStartRow	= eRow;

        	var nChildCount = nexacro.toNumber(grdTree.getTreeChildCount(nStart));
        	if (nChildCount > 0)
        	{
        		var sLvl = dsOrg.getColumn(nStart, obj.config.levelColumn);
        		var nSiblingRow = grdTree.getTreeSiblingRow(nStart);		//search the row of the same tree level

        		if (nSiblingRow > -1)
        		{
        			nSiblingRow--;
        		}else
        		{
        			nSiblingRow = dsOrg.getRowCount() - 1;
        		}
        		nEnd = nSiblingRow;
        	}

        	dsTemp.clearData();
        	dsTemp.set_enableevent(false);
        	for (i = nStart; i <= nEnd; i++)
        	{
        		nRow = dsTemp.addRow();
        		dsTemp.copyRow(nRow, dsOrg, i);
        	}
        	dsTemp.set_enableevent(true);

        	this.fnInsertDropData(obj);

        }

        /**
        * @description insert temp data to target grid
        * @param obj : form
        * @return
        */
        this.fnInsertDropData = function(obj)
        {

        	console.log('fnInsertDropData');

        	var dsOrg	  = obj.config.orgDs;
        	var dsTarget  = obj.config.targetDs;
        	var dsTemp	  = obj.config.tempDs;
        	var grdTree	  = obj.config.orgGrid;
        	var grdTarget = obj.config.targetGrid;

        	var nSelectedRow = grdTree.selectedRow;
        	var nTargetStart = grdTarget.targetStartRow;
        	var nTargetEnd	 = 0;

        	var nDeleteRow = 0;

        	//delete original dataset row 'm' : move (delete) , 'c' : copy (not original data remove)
        	if(obj.config.option == "m")
        	{
        		nDeleteRow = this.fnDeleteDropData(obj);
        	}

        	if(nSelectedRow < nTargetStart)
        	{
        		nTargetStart = nTargetStart - nDeleteRow;
        	}

        	//start target row rearrange
        	if(nTargetStart < -2)
        	{	//e.row < -2 : -9
        		if(dsTarget.getRowCount() < 1)
        		{	//row count 0 (no data)
        			nTargetStart = 0;
        		}else
        		{
        			nTargetStart = dsTarget.getRowCount();
        		}
        	}else if(nTargetStart < -2 && nTargetStart >= 0)
        	{	//e.row : -1 or -2
        		return;
        	}

        	nTargetEnd = nTargetStart + dsTemp.getRowCount();

        	var nLvl = dsTemp.getColumn(0,obj.config.levelColumn);						//current node level
        	var nTargetLv = dsTarget.getColumn(nTargetStart, obj.config.levelColumn);	//target node level

        	if(grdTree == grdTarget)
        	{	//same grid
        		if(!grdTarget.isTreeLeafRow(nTargetStart,false))
        		{
        			if(nLvl != nTargetLv)
        			{
        				nTargetLv ++;
        				nTargetStart ++;
        			}
        		}
        	}else
        	{	//other grid
        		var nOrgLvl;

        		if(this.gfnIsNull(nTargetLv))
        		{	//init level
        			nTargetLv = 0;
        			nOrgLvl	  = 0;
        		}else
        		{
        			nOrgLvl = dsTarget.getColumn(nTargetStart, dsTarget.orgLevel);
        		}

        		if(nTargetLv > nOrgLvl)
        		{
        			nTargetLv ++;
        			nTargetStart ++;
        		}
        	}

        	var nLvlGap = nLvl-nTargetLv;	//target level and temp(original) level gap

        	var nRow, nTargetRow;
        	dsTarget.set_enableevent(false);
        	for(var i = 0; i<dsTemp.getRowCount(); i++)
        	{
        		nTargetLv  = dsTemp.getColumn(i,obj.config.levelColumn);

        		nTargetRow = nTargetStart+i;

        		nRow = dsTarget.insertRow(nTargetRow);
        		dsTarget.copyRow(nRow, dsTemp, i);
        		dsTarget.setColumn(nRow, obj.config.levelColumn, nTargetLv - nLvlGap);
        		dsTarget.setColumn(nRow, dsTarget.orgLevel, nTargetLv);
        	}

        	this.menuReOrder(obj);

        	dsTarget.set_enableevent(true);
        }

        /**
        * @description delete drag grid row (selected tree data)
        * @param obj : form
        * @return
        */
        this.fnDeleteDropData = function(obj)
        {
        	console.log('fnDeleteDropData');
        	var dsOrg	  = obj.config.orgDs;
        	var dsTemp	  = obj.config.tempDs;
        	var grdTree	  = obj.config.orgGrid;

        	var nSelectedRow = grdTree.selectedRow;
        	var nRowGap		 = dsTemp.getRowCount();

        	var nDeleteStart = nSelectedRow;
        	var nDeleteEnd	 = nDeleteStart + nRowGap -1;
        	var nCount = 0;
        	for(var i = nDeleteEnd; i >= nDeleteStart; i--)
        	{
        		dsOrg.deleteRow(i);
        		nCount ++;
        	}

        	return nCount;
        }

        this.menuReOrder = function(obj)
        {
        	var dsOrg	  = obj.config.orgDs;
        	var dsTarget  = obj.config.targetDs;
        	var dsTemp	  = obj.config.tempDs;
        	var grdTree	  = obj.config.orgGrid;
        	var grdTarget = obj.config.targetGrid;

        	var nSelectedRow = grdTree.selectedRow;
        	var nTargetStart = grdTarget.targetStartRow;

        // 	console.log(dsOrg);
        // 	console.log(dsTarget);
        // 	console.log(dsTemp);
        // 	console.log(grdTree);
        // 	console.log(grdTarget);
        	console.log(nSelectedRow);
        	console.log(nTargetStart);

        	console.log(dsOrg.getColumn(nSelectedRow, "moduleCd") + ' : ' + dsOrg.getColumn(nSelectedRow, "menuNm"));

        	console.log(dsTarget.getColumn(nTargetStart, "moduleCd") + ' : ' + dsTarget.getColumn(nTargetStart, "menuNm"));


        }
        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description form ondragmove event --> static component move with the mouse movement(position)
        */
        this.form_ondragmove = function(obj,e)
        {
        	obj.config.stImg.move(e.clientx + 55, e.clienty + 55);
        }

        /**
         * @description form ondrop event --> static component visible false
        */
        this.form_ondrop = function(obj,e)
        {
        	console.log('form_ondrop');
        	obj.config.stImg.set_visible(false);
        }

        /**
         * @description grid ondrag event --> save current seleced rowposition (obj.selectedRow)
        */
        this.grd_ondrag = function(obj,e)
        {
        	console.log('grd_ondrag');

        	var objForm = obj.parent.parent.parent.parent.parent;
        	if (e.row > -1)
        	{
        		objForm.config.stImg.bringToFront();
        		objForm.config.stImg.set_text(obj.getCellText(e.row, e.cell));
        		objForm.config.stImg.set_visible(true);
        		obj.selectedRow = nexacro.toNumber(obj.selectstartrow);

        		return true;
        	}
        	return false;
        };

        /**
         * @description target grid ondrop event--> this.fnCopyDropData()
        */
        this.grd_ondrop = function(obj,e)
        {
        	console.log('grd_ondrop');

        	/**	e.row information
        	-----------------------------------------------------
        	-9	: outside body row (empty space)
        	-2	: summary band
        	-1	: head band
        	0 ~	: selected row postion
        	*/

        	this.fnCopyDropData(obj,e.row);
        };


        /**************************************************************************
        *  공통 함수 처리 영역
           해당 함수의 경우 프로젝트 사용 시 프로젝트 공통함수로 전환을 권장 드립니다.
        **************************************************************************/
        /**
        * @description 파리미터 값이 Null 인지 체크하는 함수
        * @param {All} val – 체크할 문자열
        * @return {boolean} Val이 undefined, null, NaN, "", Array.length=0 인 경우 = true
        															  이 외의 경우 = false
        */
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
