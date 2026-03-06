/**
*  devPro Library
*  @FileName 	File.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				File Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class 템플릿파일 다운로드 (webapp\fileUpload)
* @param {String} sFileId - 파일명
* @return N/A
* @example this.gfnDownTempate("devPro_개발표준및개발가이드.pdf");
*/ 
pForm.gfnDownTempate = function (sFileId)
{
	var sFileId 	= sFileId;
	var sFileNm 	= sFileId;
	var sSaveFileNm = sFileId;
	
	var sFdt = "fdtCmmTemplate";
	var oFdt = this.objects[sFdt]; 
	if( this.gfnIsNull(oFdt)){
		oFdt = new nexacro.FileDownTransfer(sFdt, this);
		this.addChild(sFdt, oFdt);
	}
	oFdt.addEventHandler("onerror", this.fdtCmmTemplate_onerror, this);
	oFdt.addEventHandler("onsuccess", this.fdtCmmTemplate_onsuccess, this);
	
	
	if( !this.gfnIsNull(sFileId)){
		oFdt.setPostData("saveFileName"	, sSaveFileNm);
		oFdt.setPostData("orgFileName"	, sFileNm);
		
		oFdt.set_downloadfilename(sFileNm)
		oFdt.download("svcUrl::downloadFile.do");
	}else{
		this.gfnAlert("msg.err.nofile");
		return;
	}
};

/**
* @class 파일다운로드 에러  <br>
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example oFdt.addEventHandler("onerror", this.fdtCmmTemplate_onerror, this);
*/
pForm.fdtCmmTemplate_onerror = function(obj,e)
{
	var oFdt = this.removeChild(obj.name);
	oFdt.destroy();
	oFdt = null;
	
	this.gfnAlert("msg.action.fail");	
};
		
/**
* @class 파일다운로드 성공  <br>
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example oFdt.addEventHandler("onsuccess", this.fdtCmmTemplate_onsuccess, this);
*/
pForm.fdtCmmTemplate_onsuccess = function(obj,e)
{
	var oFdt = this.removeChild(obj.name);
	oFdt.destroy();
	oFdt = null;
};


pForm = null;