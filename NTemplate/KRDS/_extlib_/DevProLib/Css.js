/**
*  devPro Library
*  @FileName 	Css.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2025.4.4
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2025.4.4				TOBESOFT				Css
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

pForm.gfnInitResize = function(objTargetForm, objReSizeList)
{
	var nCx = objTargetForm.getOffsetWidth();
	var nCy = objTargetForm.getOffsetHeight();
	objTargetForm.resizelist = objReSizeList;
	objTargetForm.addEventHandler("onsize", this.Form_onsize, objTargetForm);
	
	nexacro._OnceCallbackTimer.callonce(this, function () {
		this.fnOnSize(objTargetForm, nCx, nCy);
	}, 100);
}

pForm.Form_onsize = function(obj, e)
{
	this.fnOnSize(obj, e.cx, e.cy);
}

pForm.fnOnSize = function(objTargetForm, nCx, nCy)
{
	//trace("pForm.fnOnSize : " + nCx);
	var objReSizeList = objTargetForm.resizelist;
	var sReSizeId;
	var sReSizeFont;
	var sReSizeSuffix;
	var sReSizeWidth;
	
	for(var i=0;i<objReSizeList.length;i++)
	{	
		sReSizeWidth =objReSizeList[i].width;
		
		if(nCx <objReSizeList[i].width)
		{
			sReSizeId = objReSizeList[i].id;
			sReSizeFont = objReSizeList[i].font;
			sReSizeSuffix = objReSizeList[i].suffix;
			break;
		}
	}
	
	if(!sReSizeId)
	{
		sReSizeId = objReSizeList[objReSizeList.length-1].id;
		sReSizeFont = objReSizeList[objReSizeList.length-1].font;
		sReSizeSuffix = objReSizeList[objReSizeList.length-1].suffix;
	}
	
	if(objTargetForm.resizeid!=sReSizeId)
	{
		this.fnChangeReSize(objTargetForm, sReSizeId, sReSizeFont, sReSizeSuffix);
	}
}

pForm.fnChangeReSize = function(objTargetForm, sReSizeId, sReSizeFont, sReSizeSuffix)
{
	var sSuffix_befor = objTargetForm.resizesuffix;
	if(this.gfnIsNull(sSuffix_befor)){
		if(sReSizeSuffix == "_m"){
			sSuffix_befor = "_pc";
		}else if(sReSizeSuffix == "_pc"){
		    sSuffix_befor = "_m";
		}
	}
	objTargetForm.resizeid = sReSizeId;
	objTargetForm.resizesuffix = sReSizeSuffix;
	
	nexacro.getApplication().mainframe.set_font(sReSizeFont);
	
	this.fnChangeCssClassId(objTargetForm, sSuffix_befor, sReSizeSuffix);
}

pForm.fnChangeCssClassId = function(objTargetForm, sSuffix_befor, sReSizeSuffix)
{
	var objCompList = objTargetForm.components;
	var nCnt = objCompList.length;
	var objComp;
	var sCssClass;
	
	for(var i=0;i<nCnt;i++)
	{
		objComp = objCompList[i];
		
		sCssClass = objComp.cssclass;
		
		if(sCssClass.indexOf(sSuffix_befor)>-1)
		{
			sCssClass = sCssClass.replace(sSuffix_befor, "");
			sCssClass = sCssClass + sReSizeSuffix;
			objComp.set_cssclass(sCssClass);
			//trace(sCssClass);
		}
		
		if(objComp instanceof nexacro.Div||objComp instanceof nexacro.PopupDiv)
		{
			this.fnChangeCssClassId(objComp.form, sSuffix_befor, sReSizeSuffix);
		}else if(objComp instanceof nexacro.Tab)
		{
			for(j=0;j<objComp.tabpages.length;j++)
			{
				
				this.fnChangeCssClassId(objComp.tabpages[j].form, sSuffix_befor, sReSizeSuffix);
			}
		}
	}
}