//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
//==============================================================================
// Object : nexacro.Multicombo
// Group : Component
//==============================================================================
if (!nexacro.Multicombo)
{
    //==============================================================================
    // nexacro.Multicombo
    //==============================================================================
    nexacro.Multicombo = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Div.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pMulticombo = nexacro._createPrototype(nexacro.Div, nexacro.Multicombo);
    nexacro.Multicombo.prototype = _pMulticombo;
    _pMulticombo._type_name = "Multicombo";

	/* internal variable */
	//bind
	_pMulticombo.innerdataset = "";
	_pMulticombo._innerdataset = "";
	_pMulticombo.codecolumn = "";
	_pMulticombo.datacolumn = "";

	//porp
	_pMulticombo.allcheck = false;
//	_pMulticombo.callbackfunc = "";
// 	_pMulticombo.maxcount = 6;
// 	_pMulticombo.maxdisplay = 5;
	
	//design
	_pMulticombo.fvTerm = 3;
	_pMulticombo.fvBottomTerm = 12;
	_pMulticombo.fvWidth = 0;
	_pMulticombo.fvBtnWidth = 43;
	_pMulticombo.fvBtnHeight = 23;
	_pMulticombo.fvRowHeight = 30;
	
	//value
	_pMulticombo.orgText = "";
	_pMulticombo.orgValue = "";
	
	/* event list */
	_pMulticombo._event_list["onitemchanged"] = 1;

	/* accessibility */
	_pMulticombo.accessibilityrole = "button";
    //===============================================================
    // nexacro.Multicombo : Create & Destroy & Update
    //===============================================================
	
	/*
	 Description : createComponent 실행시 nexacro.ControlElement 를 생성 후 호출됨
	 Todo :
	 control이 있다면 create() & createComponent() 호출
	 return : 없음*/
    _pMulticombo.on_create_contents = function ()
	{
		nexacro.Div.prototype.on_create_contents.call(this);
		
		var obj = null;
		// Object(Dataset, ExcelExportObject) Initialize
		obj = new nexacro.Dataset("_multicombodataset");
		this.addChild("_multicombodataset", obj);
		
		// UI Components Initialize
		obj = new Edit("_multicomboedit","0","0",null,"21","21",null,null,null,null,null);
		obj.set_taborder("0");
		obj.set_enable("true");
		obj.set_readonly("true");
		obj.set_background("white");
		this.form.addChild(obj.name, obj);

		obj = new Button("_multicombobutton",null,"0","21","21","0",null,null,null,null,null);
		obj.set_taborder("1");
		obj.set_cssclass("btn_WF_MultiCombo");
		this.form.addChild(obj.name, obj);

		obj = new PopupDiv("_multicombopopupdiv","0","20",null,"129","0",null,null,null,null,null);
		obj.set_text("");
		obj.set_visible("false");
		obj.set_cssclass("pdiv_WF_MultiCombo");
		obj.form.set_scrolltype("none");
		this.form.addChild(obj.name, obj);
		
		this.form._multicomboedit.createComponent(); //edit
		this.form._multicombobutton.createComponent(); //button
		this.form._multicombopopupdiv.createComponent(); //popup-div
		
		this.form._multicomboedit.addEventHandler("oneditclick",this._edtCombo_oneditclick,this);
		this.form._multicombobutton.addEventHandler("onclick",this._btnCombo_onclick,this);
		this.form._multicombopopupdiv.addEventHandler("oncloseup",this._pdvCombo_oncloseup,this);
	};
	
	
	/*
	 Description : on_created 실행시 호출됨
	               on_created() 는 component의 Element를 Node를 생성하여 실체화한다 
				   동적으로 component를 생성하면 호출됨
	 Todo :
	 control property 설정 및 control.on_created() 호출한다.
	 parameter : win (component 가 속한 nexacro._Window)
	 return : 없음*/
    _pMulticombo.on_created_contents = function (win)
	{		 
	  	//control on_created(win);		
		this.form.on_created(win);
		this.on_apply_innerdataset(this._innerdataset);
	};
	 /*
	  Description : form load시 component를 innerhtml 형태로 string을 리턴함
	   on_created_contents 함수에서 element에서 설정한 코딩과 동일하게 작성함
	   container component가 내부 component를 일괄 생성될때 호출됨
	 Todo :
	 control 의 createCommand() 함수를 호출해 innerhtml 형태의 string을 만든다. 
	 parameter : 없음
	 return : string (control의 innerhtml형태의 string)
	 */
    _pMulticombo.on_create_contents_command = function ()
	{
		this.on_apply_innerdataset(this._innerdataset);
	};
	
    //===============================================================
    // nexacro.Multicombo : Properties
    //===============================================================
	
	/*
	 property 추가 
	*/ 
	_pMulticombo.userprop = true;
	_pMulticombo.set_userprop = function(v)
	{
	};
	
	_pMulticombo.set_innerdataset = function(v)
	{
		if (typeof v != "string")
		{
		  this.setInnerDataset(v);
		  return;
		}

		if (this.innerdataset != v)
		{
		  if (!v)
		  {
			this._innerdataset = null;
			this.innerdataset = "";
			this.form._multicombodataset.clear();
		  }
		  else
		  {
			v = v.replace("@", "");
			this._innerdataset = this._findDataset(v);
			this.innerdataset = v;
		  }
		  this.on_apply_innerdataset(this._innerdataset);
		}
		else if (this.innerdataset && !this._innerdataset)
		{
		  this._setInnerDatasetStr(this.innerdataset);
		  this.on_apply_innerdataset(this._innerdataset);
		}
	};
	
	_pMulticombo.on_apply_innerdataset = function(ds)
	{
		this.copyDataset(ds);
	};
	_pMulticombo.set_codecolumn = function(v)
	{
		this.codecolumn = v;
	};
	_pMulticombo.set_datacolumn = function(v)
	{
		this.datacolumn = v;
	};
	
	_pMulticombo.set_allcheck = function(v)
	{
		this.allcheck = v;
	};
	
// 	_pMulticombo.set_callbackfunc = function(v)
// 	{
// 		this.callbackfunc = v;
// 	};
	
// 	_pMulticombo.set_maxcount = function(v)
// 	{
// 		this.maxcount = v;
// 	};
// 	
// 	_pMulticombo.set_maxdisplay = function (v)
// 	{
// 		this.maxdisplay = v;
// 	};
	
	_pMulticombo.set_init = function ()
	{
		var objBindDs = this.form._multicombodataset;
		for (var i=0; i<objBindDs.rowcount; i++)
		{
			objBindDs.setColumn(i, "_checkcolumn", "0");
		}
		this.form._multicomboedit.set_value("선택");
	};
	
	_pMulticombo.get_value = function ()
	{
		return this.form._multicomboedit.retrunvalue;
	};
	
	_pMulticombo.get_text = function ()
	{
		return this.form._multicomboedit.returntext;
	};
	
	_pMulticombo.set_value = function (v)
	{
	    this.set_init();
		var arrValueList = v.split(",");
		var arrTextList = [];
		var objDs = this.form._multicombodataset;
		var nFindRow;

		for (var i=0; i<arrValueList.length; i++)
		{
			nFindRow = objDs.findRow(this.codecolumn, arrValueList[i]);
			if (nFindRow != -1)
			{
				arrTextList.push(objDs.getColumn(nFindRow, this.datacolumn));
				objDs.setColumn(nFindRow, "_checkcolumn", "1");
			}
		}

		this._setcombotext(arrTextList, arrValueList);
	};
	
    //===============================================================
    // nexacro.Multicombo : Methods
    //===============================================================
    /*
	method 추가
	
	_pMulticombo.usermethod = function ()
    {
		TODO:        
    };
	*/
	
  _pMulticombo.setInnerDataset = function(obj)
  {
	if (!obj)
	{
	  this._innerdataset = null;
	  this.innerdataset = "";
	  this.on_apply_innerdataset(null);
	  this.form._multicombodataset.clear();
	}
	else if (obj instanceof nexacro.Dataset || (typeof obj == "object" && obj._type_name == "Dataset"))
	{
	  this._innerdataset = obj;
	  this.innerdataset = obj.id;
	  this.on_apply_innerdataset(obj);
	}
  };

  _pMulticombo._setInnerDatasetStr = function(str)
  {
    if (str)
    {
      str = str.replace("@", "");
      this._innerdataset = this._findDataset(str);
      this.innerdataset = str;
    }
    else
    {
      this._innerdataset = null;
      this.innerdataset = "";
      this.form._multicombodataset.clear();
    }
  };

	_pMulticombo.copyDataset = function(ds)
	{
		if(this.form._multicombodataset)
		{
			this.form._multicombodataset.copyData(ds);
			
			var colinfo = this.form._multicombodataset.getColumnInfo("_checkcolumn");
			if (colinfo == null || colinfo == "" || colinfo == "undefined"){
				this.form._multicombodataset.addColumn("_checkcolumn", "STRING");
			}

			this.form._multicombodataset.set_enableevent(false);
			
			var len =  this.form._multicombodataset.getRowCount();
			for (var i=0; i < len; i++){
				var chkvalue = this.form._multicombodataset.getColumn(i, "_checkcolumn");
				if (chkvalue == null || chkvalue == "" || chkvalue == "undefined"){
					this.form._multicombodataset.setColumn(i, "_checkcolumn", "0");
				}
			}
			
			this.form._multicombodataset.set_enableevent(true);
			this._makemulticombo();
		}
	};
	
	_pMulticombo._makemulticombo = function ()
	{
		var oCombo = this.form._multicombopopupdiv;
		var nDisplayCount = 5;
		var nRowCount = this.form._multicombodataset.rowcount;
		
		if (nDisplayCount > nRowCount) nDisplayCount = nRowCount;

		var nHeight = this.fvRowHeight  * nDisplayCount + nexacro.toNumber(nDisplayCount) + 1;

		if(this.allcheck)
		{
			var nplusHeigth = this.fvBtnHeight + (this.fvBottomTerm * 2);
			 nHeight += nplusHeigth ;
			 oCombo.form.set_height(nHeight);
			 this._fnMakeAllCheck();
		}else{
			nHeight += this.fvTerm ;
			oCombo.form.set_height(nHeight);

			this._fnMakeCombo(oCombo);
		}
	};
	
	_pMulticombo._fnMakeAllCheck = function ()
	{
		var compDiv = new Div("divComboList", 0, 0, null, null, 0,  this.fvBtnHeight + (this.fvBottomTerm * 2));
		this.form._multicombopopupdiv.addChild(compDiv.name, compDiv);
		compDiv.show();
		
		this.fvWidth = this.form._multicombopopupdiv.getOffsetWidth();
		var nLeft = (nexacro.toNumber(this.fvWidth) - (this.fvBtnWidth*2 + this.fvTerm)) / 2;

		var compBtnAllCheck = new Button("btnAllCheck", nLeft, null, this.fvBtnWidth, this.fvBtnHeight, null, this.fvBottomTerm);
		this.form._multicombopopupdiv.addChild(compBtnAllCheck.name, compBtnAllCheck);
		compBtnAllCheck.addEventHandler("onclick", this._compBtnAllCheck_onclick, this);
		compBtnAllCheck.set_cssclass("btn_POP_Btn");
		compBtnAllCheck.set_text("All");
		compBtnAllCheck.show();
		
		nLeft += this.fvBtnWidth+this.fvTerm;

		var compBtnNonCheck = new Button("btnNonCheck", nLeft, null, this.fvBtnWidth, this.fvBtnHeight, null, this.fvBottomTerm);
		this.form._multicombopopupdiv.addChild(compBtnNonCheck.name, compBtnNonCheck);
		compBtnNonCheck.set_cssclass("btn_POP_Btn");
		compBtnNonCheck.set_text("No");
		compBtnNonCheck.addEventHandler("onclick", this._compBtnNonCheck_onclick, this);
		compBtnNonCheck.show();

		this._fnMakeCombo(compDiv);
	};
	
	_pMulticombo._fnMakeCombo = function (oPdv)
	{
		if(oPdv.form.isValidObject("grdCbo")){
			var oGrid = oPdv.form.components["grdCbo"];
			oPdv.removeChild("grdCbo");

			oGrid.destroy();
			oGrid= null;
		}

		var nBotton = 0;
		if( this.allcheck) nBotton = 0;
		else nBotton = this.fvTerm;

		var oGrd = new Grid("grdCbo", this.fvTerm, this.fvTerm, null, null, this.fvTerm, nBotton);
		oGrd.set_cssclass("grd_WF_Detail");
		oGrd.set_binddataset("_multicombodataset");
		var strFormat = "<Formats>"
					  + "<Format id=\"default\">"
					  + "<Columns>"
					  + "<Column size=\"24\" band=\"left\"/>"
					  + "<Column size=\"48\"/>"
					  + "<Column size=\"48\"/>"
					  + "</Columns>"
					  + "<Rows>"
					  + "<Row size=\"24\"/></Rows>"
					  + "<Band id=\"body\">"
					  + "<Cell text=\"bind:_checkcolumn\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/>"
					  + "<Cell col=\"1\" text=\"bind:"+ this.codecolumn + "\"/> "
					  + "<Cell col=\"2\" text=\"bind:"+ this.datacolumn + "\"/>"
					  + "</Band>"
					  + "</Format>"
					  + "</Formats>";
        oGrd._setContents(strFormat);
		oPdv.addChild(oGrd.name, oGrd);
		
		oGrd.set_autofittype("col");
		oGrd.set_wheelscrollrow(1);
		oGrd.show();

		oGrd.addEventHandler("oncellclick", this._Grid_oncellclick, this);
		this.form._multicomboedit.set_value("선택");
	};
	
	_pMulticombo._showComboList = function ()
	{
		var iLeft = 0;
		var iTop = this.form._multicomboedit.getOffsetHeight()-1;

		this.form._multicombopopupdiv.trackPopupByComponent(this.form._multicomboedit, iLeft, iTop);
		this.form._multicombodataset.set_rowposition(-1);
	};
	
	_pMulticombo._setcombotext = function(arrTextList,arrValueList)
	{
		var sComboText = arrTextList.toString();

		this.form._multicomboedit.retrunvalue = arrValueList.toString();
		this.form._multicomboedit.returntext = sComboText;
		var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
		var nComboTextWidth = objRtn.nx;

		var nWidth = this.form._multicomboedit.getOffsetWidth() - this.form._multicombobutton.width;
		if (nComboTextWidth > nWidth)
		{
			this.form._multicomboedit.set_value(arrTextList.length+"개 선택");
			this.form._multicomboedit.set_tooltiptext(sComboText);
			this.form._multicomboedit.set_tooltiptype("hover");
		}
		else
		{
			this.form._multicomboedit.set_value(sComboText);
		}

		if (arrTextList==null || arrTextList == "" || arrTextList == "undefined") this.form._multicomboedit.set_value("선택");		
	};
    //===============================================================
    // nexacro.Multicombo : Events
    //===============================================================
	_pMulticombo._edtCombo_oneditclick = function (obj, e)
	{
		this._showComboList();
	};
	
	_pMulticombo._btnCombo_onclick = function (obj, e)
	{
		this._showComboList();
	};
	
	_pMulticombo._pdvCombo_oncloseup = function (obj, e)
	{
		//var objDs = this.ds_cbo;
		var arrTextList = [];
		var arrValueList = [];

		for (var i=0; i<this.form._multicombodataset.getRowCount(); i++)
		{
			if (this.form._multicombodataset.getColumn(i, "_checkcolumn") == "1")
			{
				arrTextList.push(this.form._multicombodataset.getColumn(i, this.datacolumn));
				arrValueList.push(this.form._multicombodataset.getColumn(i, this.codecolumn));
			}
		}
		this._setcombotext(arrTextList, arrValueList);	
	};
	
	_pMulticombo._compBtnAllCheck_onclick = function (obj, e)
	{
		for (var i=0; i< this.form._multicombodataset.rowcount; i++)
		{
			this.form._multicombodataset.setColumn(i, "_checkcolumn", "1");
		}
	};
	
	_pMulticombo._compBtnNonCheck_onclick = function (obj, e)
	{
		for (var i=0; i< this.form._multicombodataset.rowcount; i++)
		{
			this.form._multicombodataset.setColumn(i, "_checkcolumn", "0");
		}
	};
	
	_pMulticombo._Grid_oncellclick = function (obj, e)
	{
		var objDs = obj.getBindDataset();

		if (e.col !=0)
		{
			if (objDs.getColumn(e.row, "_checkcolumn") == "1") objDs.setColumn(e.row, "_checkcolumn", "0");
			else objDs.setColumn(e.row, "_checkcolumn", "1");
		}
	};
	
    delete _pMulticombo;
}


