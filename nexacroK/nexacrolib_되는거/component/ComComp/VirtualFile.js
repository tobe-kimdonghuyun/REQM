//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.VirtualFile)
{
	//==============================================================================
	// nexacro.Event.VirtualFileEventInfo
	// 가상파일에 요청된 작업이 성공했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
	//==============================================================================
	nexacro.VirtualFileEventInfo = function (strEventId, nReason, strTextdata, strBinarydata, strFilelist, strFilesize, strExist)
	{
		this.eventid = strEventId;												// 이벤트ID
		this.reason = nReason;												    // 이벤트 발생분류 코드
		this.textdata = strTextdata;											// 읽어들인 텍스트 데이터
		this.binarydata = strBinarydata;										// 읽어들인 바이너리 데이터
		this.fileattributelist = nexacro._getFileAttributeList(strFilelist);	// 지정된 경로의 파일목록
		this.filesize = strFilesize;											// 오픈한 파일의 크기 또는 없으면 setterfullpath 값의 사이즈 
		this.fileisexist = strExist;
	};
	var _pVirtualFileEventInfo = nexacro.VirtualFileEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileEventInfo);
	_pVirtualFileEventInfo._type_name = "VirtualFileEventInfo";

	_pVirtualFileEventInfo = null;

	//==============================================================================
	// nexacro.VirtualFileErrorEventInfo
	// 가상파일에 요청된 작업이 실패했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
	//==============================================================================
	nexacro.VirtualFileErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg)
	{
		this.id = this.eventid = strEventId;									// 이벤트ID            
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;											// 오류코드 : integer 로 된 errorcode 
		this.errormsg = strErrorMsg;											// 오류메세지 : string으로 된 errormsg 
	};

	var _pVirtualFileErrorEventInfo = nexacro.VirtualFileErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileErrorEventInfo);
	_pVirtualFileErrorEventInfo._type_name = "VirtualFileErrorEventInfo";

	_pVirtualFileErrorEventInfo = null;

	//==============================================================================
	// nexacro.FileAttribute
	// 파일을 읽거나 쓰기위해 사용되는 가상파일 Object
	//==============================================================================
	nexacro._FileAttribute = function (jsonObj)
	{
		this.accesstime = jsonObj.accesstime;										// 파일 또는 디렉토리의 마지막 엑세스 시간을 반환합니다.
		this.createtime = jsonObj.createtime;										// 파일 또는 디렉토리의 생성 시간을 반환합니다.
		this.filename = jsonObj.filename;											// 파일 또는 디렉토리의 이름을 반환합니다.
		this.groupid = jsonObj.groupid;												// 파일 또는 디렉토리의 소유자 그룹정보를 문자열로 반환합니다.
		this.modifytime = jsonObj.modifytime;										// 파일 또는 디렉토리의 마지막으로 수정된 시간을 반환합니다.
		this.size = jsonObj.size;													// 파일 크기를 byte 단위로 반환합니다.
		this.userid = jsonObj.userid;												// 파일 또는 디렉토리의 소유자 ID를 문자열로 반환합니다.
		this.isdirectory = jsonObj.isdirectory;										// 디렉토리인지 여부를 반환합니다.
		this.isreadonly = jsonObj.isreadonly;										// 파일 또는 디렉토리가 읽기전용인지 여부를 반환합니다.
	};
	var _pFileAttribute = nexacro._FileAttribute.prototype = nexacro._createPrototype(nexacro.Object, nexacro._FileAttribute);

	_pFileAttribute._type_name = "_FileAttribute";

	_pFileAttribute.isDirectory = function ()
	{
		return this.isdirectory;
	};

	_pFileAttribute.isHidden = function ()
	{
		// TODO
	};

	_pFileAttribute.isLink = function ()
	{
		// TODO
	};

	_pFileAttribute.isReadOnly = function ()
	{
		return this.isreadonly;
	};

	_pFileAttribute = null;

	//==============================================================================
	// nexacro.VirtualFile
	//==============================================================================
	nexacro.VirtualFile = function (id, parent)
	{
		nexacro._EventSinkObject.call(this, id, parent);

		//세번째 값에 핸들 넘어와 적용되는 부분은 생성자 호출 예시에 맞지 않아 막음
		//VirtualFile._setHandle로 바꿈;
		this._handle = nexacro._createVirtualFileHandle(this);
	};

	var _pVirtualFile = nexacro.VirtualFile.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.VirtualFile);
	_pVirtualFile._type_name = "VirtualFile";

	/* default properties */
	_pVirtualFile._p_filename = "";
	_pVirtualFile._p_fullpath = "";
	_pVirtualFile._p_path = "";
	_pVirtualFile._p_async = "true";
	_pVirtualFile._p_lastModified = 0;

	/* internal variable */
	_pVirtualFile._isopen = false;
	_pVirtualFile._nConstOptions = 0x0000;
	_pVirtualFile._utilTimeout = 180000;	// Promise timeout (ms). Set 0 to disable. Override in _createVirtualFileHandle per browser.

	/* event list */
	_pVirtualFile._event_list = {
		"onsuccess": 1, "onerror": 1
	};

	/* VirtualFile Constant */
	//- Open Option Flags
	nexacro.VirtualFile.openRead = 0x0001;
	nexacro.VirtualFile.openWrite = 0x0002;
	nexacro.VirtualFile.openAppend = 0x0010;
	nexacro.VirtualFile.openCreate = 0x1000;
	nexacro.VirtualFile.openText = 0x0100;
	nexacro.VirtualFile.openBinary = 0x0200;

	//- Seek Option Flags
	nexacro.VirtualFile.seekBegin = 0x0000;
	nexacro.VirtualFile.seekCurrent = 0x0001;
	nexacro.VirtualFile.seekEnd = 0x0002;

	//- Find File Options Flags
	nexacro.VirtualFile.findAll = 0x0001;
	nexacro.VirtualFile.findFileOnly = 0x0002;
	nexacro.VirtualFile.findDirectoryOnly = 0x0004;
	nexacro.VirtualFile.findRecursive = 0x0008;
	nexacro.VirtualFile.findCaseless = 0x0010;


	//===============================================================
	// nexacro.VirtualFile : Create & Destroy & Update
	//===============================================================
	_pVirtualFile.destroy = function ()
	{
		nexacro._destroyVirtualFileHandle(this);
		this._isopen = false;
		return true;
	};

	//===============================================================
	// nexacro.VirtualFile : Properties
	//===============================================================
	_pVirtualFile.set_filename = nexacro._emptyFn;
	_pVirtualFile.set_fullpath = nexacro._emptyFn;
	_pVirtualFile.set_path = nexacro._emptyFn;
	_pVirtualFile.set_lastModified = nexacro._emptyFn;

	_pVirtualFile.set_async = function (v)
	{
		v = nexacro._toBoolean(v);
		if (this._p_async != v)
		{
			this._p_async = v;
			this.on_apply_async();
		}
	};

	_pVirtualFile.on_apply_async = function ()
	{
		nexacro._setVirtualFileHandleAsync(this, this._p_async);
	};

	_pVirtualFile._properties = [{ name: "filename" }, { name: "fullpath" }, { name: "path" }, { name: "async" }, { name: "lastModified" }];
	nexacro._defineProperties(_pVirtualFile, _pVirtualFile._properties);

	//===============================================================
	// nexacro.VirtualFile : Methods
	//===============================================================
	_pVirtualFile.open = function (strFileName, nConstOptions)
	{
		if (this._isopen === true)
			return false;

		// 매개변수 생략은 허용 안함.
		if (arguments.length < 2)
			return false;

		var bIsValid = this._IsValidConstOptions(nConstOptions);
		if (!bIsValid)
			return false;

		this._nConstOptions = nConstOptions;

		if (!strFileName)
		{
			// 내부적으로 제공하는 VirtualFile은 fullpath, path, filename이 설정되어있다. (HTML은 filenname만 제공)
			if (this._p_fullpath || this._p_path || this._p_filename)
			{
				return nexacro._openVirtualFileHandle(this, this._p_fullpath, nConstOptions);
			}
		}
		else
		{
			var strFullPath = strFileName.split("\\").join("/");

			this._setFullPath(strFullPath);
			this._setPath(this._getPath(strFullPath));
			this._setFileName(this._getFileName(strFullPath));
			return nexacro._openVirtualFileHandle(this, strFileName, nConstOptions);
		}

		return false;
	};

	_pVirtualFile.close = function ()
	{
		if (this._isopen !== true) return;

		this._isopen = false;
		this._handle = null;

		nexacro._closeVirtualFileHandle(this);
	};

	_pVirtualFile.valueOf = function ()
	{
		var fileObj = this._getFileObject();
		if (fileObj)
			return fileObj;

		if (this._isopen !== true) return;

		//없는 플랫폼은 아래 함수 내부에서 직접 _handle 생성해야 함;
		nexacro._valueOfVirtualFileHandle(this);
		//정상적인 경우라면 sync로 동작하므로 on_fire_onsuccess에서 _handle 생성;
		return this._handle;
	};

	_pVirtualFile.isOpen = function ()
	{
		return this._isopen;
	};

	_pVirtualFile.read = function (nLength, strCharset)
	{
		if (this._isopen !== true) return false;

		nLength = nLength || -1;
		strCharset = strCharset || "utf-8";

		if (isNaN(nLength) == false) 
		{
			nLength = nexacro._toInt(nLength);
		}

		if (typeof nLength != "number" ||
			typeof strCharset != "string") 
		{
			return false;
		}

		return nexacro._readVirtualFileHandle(this, nLength, strCharset);
	};

	_pVirtualFile.readLine = function (strDelimeter, strCharset)
	{
		if (this._isopen !== true) return false;

		strDelimeter = strDelimeter || "\n";
		strCharset = strCharset || "utf-8";

		return nexacro._readlineVirtualFileHandle(this, strDelimeter, strCharset);
	};

	_pVirtualFile.seek = function (nOffset, nConstOptions)
	{
		if (this._isopen !== true) return false;

		if (isNaN(nOffset = +nOffset))
			return false;

		if (arguments.length == 1)
			nConstOptions = nexacro.VirtualFile.seekCurrent;

		// 생략 가능한 매개변수여서 after 체크
		if (isNaN(nConstOptions = +nConstOptions))
			return false;

		return nexacro._seekVirtualFileHandle(this, nOffset, nConstOptions);
	};

	_pVirtualFile.write = function (varData, strCharset)
	{
		if (this._isopen !== true) return false;

		var _varData = varData;		// 필수
		var _strCharset = "utf-8";	// 옵션

		if (arguments.length == 2)
		{
			_strCharset = strCharset;
		}

		return nexacro._writeVirtualFileHandle(this, _varData, _strCharset);
	};

	_pVirtualFile.remove = function (strFilePath)
	{
		if (this._isopen !== true) return false;

		if (!strFilePath)
			return false;

		if (strFilePath instanceof nexacro.VirtualFile)
			strFilePath = strFilePath._p_fullpath;

		return nexacro._removeVirtualFileHandle(this, strFilePath);
	};

	_pVirtualFile.copy = function (strSrc, strDest)
	{
		if (this._isopen !== true) return false;

		if (!strSrc || !strDest)
			return false;

		return nexacro._copyVirtualFileHandle(this, strSrc, strDest);
	};

	_pVirtualFile.rename = function (strOldname, strNewname)
	{
		if (this._isopen !== true) return false;

		if (!strOldname || !strNewname)
			return false;

		if (typeof strOldname != 'string')
			return false;

		if (typeof strNewname != 'string')
			return false;

		return nexacro._renameVirtualFileHandle(this, strOldname, strNewname);
	};

	_pVirtualFile.getFileList = function (strPath, strSearchExpr, nConstOptions)
	{
		if (this._isopen !== true) return false;

		if (!strPath || !strSearchExpr)
			return false;

		if (arguments.length <= 2)
			nConstOptions = nexacro.VirtualFile.findAll;

		if (!(nConstOptions & nexacro.VirtualFile.findAll) && !(nConstOptions & nexacro.VirtualFile.findFileOnly) &&
			!(nConstOptions & nexacro.VirtualFile.findDirectoryOnly) && !(nConstOptions & nexacro.VirtualFile.findRecursive) &&
			!(nConstOptions & nexacro.VirtualFile.findCaseless))
		{
			return false;
		}

		return nexacro._getFileListVirtualFileHandle(this, strPath, strSearchExpr, nConstOptions);
	};

	_pVirtualFile.getFileSize = function ()
	{
		if (this._isopen !== true) return false;

		const fileObj = this._getFileObject();
		if (fileObj)
		{
			this.on_success(9, "", "", null, fileObj.size, true);
			return true;
		}
		return nexacro._getFileSizeVirtualFileHandle(this, this._p_fullpath);
	};

	_pVirtualFile.isExist = function (strPath)
	{
		if (this._isopen !== true) return false;

		if (!strPath)
			return false;

		return nexacro._isExistVirtualFileHandle(this, strPath);
	};

	_pVirtualFile.createDirectory = function (strPath, bAllCreate)
	{
		if (this._isopen !== true) return false;

		if (!strPath)
			return false;

		if (arguments.length == 1)
		{
			bAllCreate = false;
		}
		else if (arguments.length == 2)
		{
			// nexacro._toBoolean is default value true
			// _pVirtualFile.createDirectory bAllCreate is default value false 
			if (typeof bAllCreate != 'boolean')
			{
				if (typeof bAllCreate == 'number')
				{
					if (bAllCreate >= 1)
						bAllCreate = true;
				}
				else
				{
					bAllCreate = false;
				}
			}
		}

		return nexacro._createDirectoryVirtualFileHandle(this, strPath, bAllCreate);
	};

	_pVirtualFile.deleteDirectory = function (strPath, bAllChild)
	{
		if (this._isopen !== true) return false;

		if (!strPath)
			return false;

		if (arguments.length == 1)
		{
			bAllChild = false;
		}
		else if (arguments.length == 2)
		{
			// nexacro._toBoolean is default value true
			// _pVirtualFile.deleteDirectory bAllChild is default value false 
			if (typeof bAllChild != 'boolean')
			{
				if (typeof bAllChild == 'number')
				{
					if (bAllChild >= 1)
						bAllChild = true;
					else
						bAllChild = false;
				}
				else if (typeof bAllChild == 'string')
				{
					if (bAllChild == "true")
						bAllChild = true;
					else
						bAllChild = false;
				}
				else
				{
					bAllChild = false;
				}
			}
		}

		return nexacro._deleteDirectoryVirtualFileHandle(this, strPath, bAllChild);
	};

	_pVirtualFile.renameDirectory = function (strPath, strNewName)
	{
		if (this._isopen !== true) return false;

		if (!strPath || !strNewName)
			return false;

		if (strNewName.match(/["/:*?<>|]/))
		{
			return false;
		}

		return nexacro._renameDirectoryVirtualFileHandle(this, strPath, strNewName);
	};

	//===============================================================
	// nexacro.VirtualFile : Event Handlers
	//===============================================================
	_pVirtualFile.on_success = function (reason, textdata, bindata, fileattributelist, filesize, fileisexist)
	{
		textdata = this._replaceEntity(textdata, ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;", "&#32;", "&#13;", "&#10;", "&#9;"]) || "";
		bindata = this._replaceEntity(bindata, ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;", "&#32;", "&#13;", "&#10;", "&#9;"]) || "";

		return this.on_fire_onsuccess(reason, textdata, bindata, fileattributelist, filesize, fileisexist);
	};

	_pVirtualFile._onsuccess = function (objData)  //iOS
	{
		var textdata = nexacro.base64Decode(objData.textdata);
		var bindata = this._replaceEntity(objData.binarydata, ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;", "&#32;", "&#13;", "&#10;", "&#9;"]) || "";

		if (this._utilCallback)
		{
			return this._utilCallback(this, objData);
		}

		this.on_fire_onsuccess(objData.reason, textdata, bindata, objData.fileattributelist, objData.filesize, objData.fileisexist);
	};

	_pVirtualFile.on_fire_onsuccess = function (reason, textdata, bindata, fileattributelist, filesize, fileisexist)
	{
		var ret;
		if (reason == 1) //open
		{
			if (fileattributelist != null && fileattributelist[0] != null && fileattributelist[0].lastModified)
			{
				this._p_lastModified = fileattributelist[0].lastModified; //nre windows;
				fileattributelist = "";
			}

			this._isopen = true;
		}
		else if (reason == 2) //close
		{
			this._isopen = false;
			this._handle = null;
		}
		else if (reason == 99) //valueOf
		{
			var rawData = textdata;
			if (this._nConstOptions & nexacro.VirtualFile.openBinary)
			{
				rawData = bindata;
			}
			if (rawData)
			{
				var fileName = this._p_filename || "tempfile";
				var mimeType = "application/octet-stream";
				if (fileattributelist !== null && fileattributelist[0] !== null && fileattributelist[0].type)
				{
					mimeType = fileattributelist[0].type; //nre windows;
					fileattributelist = "";
				}
				var options = { type: mimeType, lastModified: this._p_lastModified || Date.now() };

				this._handle = new File([rawData], fileName, options);
			}

			ret = true;
        }

		if (!ret && this.onsuccess && this.onsuccess._has_handlers)
		{
			var evt = new nexacro.VirtualFileEventInfo("onsuccess", reason, textdata, bindata, fileattributelist, filesize, fileisexist)
			this.onsuccess._fireEvent(this, evt);
		}
		return true;
	};

	_pVirtualFile.on_error = function (errorcode, errormsg)
	{
		this.on_fire_onerror(errorcode, errormsg);
	};

	_pVirtualFile._onerror = function (objData)
	{
		if (this._utilCallback)
		{
			return this._utilCallback(this, objData);
		}

		this.on_fire_onerror(objData.errorcode, objData.errormsg);
	};

	_pVirtualFile.on_fire_onerror = function (errorcode, errormsg)
	{
		if (this.onerror && this.onerror._has_handlers)
		{
			var evt = new nexacro.VirtualFileErrorEventInfo("onerror", errorcode, errormsg);
			this.onerror._fireEvent(this, evt);
		}
		return true;
	};

	//===============================================================
	// nexacro.VirtualFile : Logical Part
	//===============================================================
	_pVirtualFile._createVirtualFileHandle = function (target)
	{
		this._handle = nexacro._createVirtualFileHandle(target);
	};

	//===============================================================
	// nexacro.VirtualFile : Util Function
	//===============================================================
	_pVirtualFile._setPath = function (v)
	{
		this._p_path = v;
	};

	_pVirtualFile._setFullPath = function (v)
	{
		this._p_fullpath = v;
	};

	_pVirtualFile._setFileName = function (v)
	{
		this._p_filename = v;
	};

	_pVirtualFile._setLastModified = function (v)
	{
		this._p_lastModified = v;
	};

	_pVirtualFile._setHandle = function (v)
	{
		this._handle = v;
	};

	_pVirtualFile._getPath = function (strFullpath)
	{
		if (!strFullpath)
			return strFullpath;

		strFullpath = strFullpath.split("\\").join("/");

		var path_idx = strFullpath.lastIndexOf("/");
		if (path_idx == -1)
			path_idx = strFullpath.lastIndexOf("%");

		return strFullpath.substring(0, path_idx + 1);
	};

	_pVirtualFile._getFileName = function (strFullpath)
	{
		if (!strFullpath)
			return strFullpath;

		strFullpath = strFullpath.split("\\").join("/");

		var name_idx = strFullpath.lastIndexOf("/");
		if (name_idx == -1)
			name_idx = strFullpath.lastIndexOf("%");

		return strFullpath.substring(name_idx + 1, strFullpath.length);
	};

	_pVirtualFile._replaceEntity = function (strText, entitylist)
	{
		if (!strText)
			return strText;

		var _map = {"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&#32;":" ","&#13;":"\r","&#10;":"\n","&#9;":"\t"};

		if (entitylist.length)
		{
			var entity = entitylist.pop();
			return this._replaceEntity(strText.replace(new RegExp(entity, "g"), _map[entity]), entitylist);
		}

		return strText;
	}

	_pVirtualFile._IsValidConstOptions = function (nConstOptions)
	{
		if (nConstOptions == 1 || nConstOptions == 2 || nConstOptions == 16 || nConstOptions == 4096 || nConstOptions == 256 || nConstOptions == 512 ||
			nConstOptions == 3 || nConstOptions == 17 || nConstOptions == 4097 || nConstOptions == 257 || nConstOptions == 513 || nConstOptions == 18 ||
			nConstOptions == 4098 || nConstOptions == 258 || nConstOptions == 514 || nConstOptions == 4112 || nConstOptions == 528 || nConstOptions == 4352 ||
			nConstOptions == 4608 || nConstOptions == 768 || nConstOptions == 19 || nConstOptions == 4099 || nConstOptions == 259 || nConstOptions == 515 ||
			nConstOptions == 4114 || nConstOptions == 274 || nConstOptions == 530 || nConstOptions == 4368 || nConstOptions == 4624 || nConstOptions == 4864 ||
			nConstOptions == 4115 || nConstOptions == 275 || nConstOptions == 531 || nConstOptions == 4370 || nConstOptions == 4626 || nConstOptions == 4880 ||
			nConstOptions == 4371 || nConstOptions == 4627 || nConstOptions == 4882 || nConstOptions == 4883)
			return true;

		return false;
	}

	_pVirtualFile._getFileObject = function ()
	{
		//firefox,safari 등에서는 this._handle instanceof File로 안되므로 File의 구성을 체크
		//if (typeof (this._handle) == "object" && (this._handle instanceof File))
		if (this._handle && typeof this._handle === 'object' &&
			typeof this._handle.name === 'string' && typeof this._handle.lastModified === 'number')
		{
			return this._handle;
		}

		return null;
	}

	_pVirtualFile = null;

	//===============================================================
	// nexacro.VirtualFile : static Util Function
	//===============================================================
	nexacro.VirtualFile.copy = function (strSrc, strDest)
	{
		return new Promise(function (resolve, reject)
		{
			if (!strSrc || !strDest)
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._copyVirtualFileHandle(vfile, strSrc, strDest);
		});
	};

	nexacro.VirtualFile.remove = function (strFilePath)
	{
		return new Promise(function (resolve, reject)
		{
			if (!strFilePath)
				return resolve(false);

			if (strFilePath instanceof nexacro.VirtualFile)
				strFilePath = strFilePath._p_fullpath;

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._removeVirtualFileHandle(vfile, strFilePath);
		});
	};

	nexacro.VirtualFile.rename = function (strOldname, strNewname)
	{
		return new Promise(function (resolve, reject)
		{
			if (!strOldname || !strNewname || (typeof strOldname != 'string') || (typeof strNewname != 'string'))
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._renameVirtualFileHandle(vfile, strOldname, strNewname);
		});
	};

	nexacro.VirtualFile.getFileList = function (strPath, strSearchExpr, nConstOptions)
	{
		if (arguments.length <= 2)
			nConstOptions = nexacro.VirtualFile.findAll;

		return new Promise(function (resolve, reject)
		{
			if (!strPath || !strSearchExpr ||
				(!(nConstOptions & nexacro.VirtualFile.findAll) && !(nConstOptions & nexacro.VirtualFile.findFileOnly) &&
				!(nConstOptions & nexacro.VirtualFile.findDirectoryOnly) && !(nConstOptions & nexacro.VirtualFile.findRecursive) &&
				!(nConstOptions & nexacro.VirtualFile.findCaseless)) )
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._getFileListVirtualFileHandle(vfile, strPath, strSearchExpr, nConstOptions);
		});
	};

	nexacro.VirtualFile.isExist = function (strPath)
	{
		return new Promise(function (resolve, reject)
		{
			if (!strPath)
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._isExistVirtualFileHandle(vfile, strPath);
		});
	};

	nexacro.VirtualFile.createDirectory = function (strPath, bAllCreate)
	{
		if (arguments.length == 1)
		{
			bAllCreate = false;
		}
		else if (arguments.length >= 2)
		{
			// nexacro._toBoolean is default value true
			// _pVirtualFile.createDirectory bAllCreate is default value false
			if (typeof bAllCreate != 'boolean')
			{
				if (typeof bAllCreate == 'number')
				{
					if (bAllCreate >= 1)
						bAllCreate = true;
				}
				else
				{
					bAllCreate = false;
				}
			}
		}

		return new Promise(function (resolve, reject)
		{
			if (!strPath)
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._createDirectoryVirtualFileHandle(vfile, strPath, bAllCreate);
		});
	};

	nexacro.VirtualFile.deleteDirectory = function (strPath, bAllChild)
	{
		if (arguments.length == 1)
		{
			bAllChild = false;
		}
		else if (arguments.length >= 2)
		{
			// nexacro._toBoolean is default value true
			// _pVirtualFile.deleteDirectory bAllChild is default value false
			if (typeof bAllChild != 'boolean')
			{
				if (typeof bAllChild == 'number')
				{
					if (bAllChild >= 1)
						bAllChild = true;
					else
						bAllChild = false;
				}
				else if (typeof bAllChild == 'string')
				{
					if (bAllChild == "true")
						bAllChild = true;
					else
						bAllChild = false;
				}
				else
				{
					bAllChild = false;
				}
			}
		}

		return new Promise(function (resolve, reject)
		{
			if (!strPath)
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._deleteDirectoryVirtualFileHandle(vfile, strPath, bAllChild);
		});
	};

	nexacro.VirtualFile.renameDirectory = function (strPath, strNewName)
	{
		return new Promise(function (resolve, reject)
		{
			if (!strPath || !strNewName || strNewName.match(/["/:*?<>|]/g))
				return resolve(false);

			var vfile = nexacro.VirtualFile._createUtilVFile(resolve, reject);
			nexacro._renameDirectoryVirtualFileHandle(vfile, strPath, strNewName);
		});
	};

	nexacro.VirtualFile._createUtilVFile = function (resolve, reject)
	{
		var vfile = new nexacro.VirtualFile("vfile_util_" + (new Date().valueOf().toString()), "");

		vfile._utilResolve = resolve;
		vfile._utilReject = reject;
		vfile._utilCallback = nexacro.VirtualFile.utilCallback;

		var timeout = vfile._utilTimeout;
		if (timeout > 0)
		{
			vfile._utilTimer = setTimeout(function ()
			{
				vfile._utilResolve = null;
				vfile._utilReject = null;
				vfile._utilTimer = null;
				vfile.destroy();
				reject({ errorcode: -2, errormsg: "VirtualFile operation timed out" });
			}, timeout);
		}

		return vfile;
	};

	nexacro.VirtualFile.utilCallback = function (vfile, objData)
	{
		var resolve = vfile._utilResolve;
		var reject = vfile._utilReject;

		if (vfile._utilTimer)
		{
			clearTimeout(vfile._utilTimer);
			vfile._utilTimer = null;
		}

		vfile.destroy();

		if (objData && objData.reason)
		{
			if (resolve)
			{
				if (objData.reason == 8)
					resolve(objData.fileattributelist);
				else
					resolve((objData && objData.fileisexist) ? objData.fileisexist : false);
			}
		}
		else
		{
			if (reject)
			{
				if (objData && objData.errorcode)
					reject({ errorcode: objData.errorcode, errormsg: objData.errormsg });
				else
					reject({ errorcode: -1, errormsg: 'error' });
			}
		}
	};
}