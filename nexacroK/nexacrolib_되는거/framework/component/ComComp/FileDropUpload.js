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

if (!nexacro.FileDropUpload)
{
    //==============================================================================
    // nexacro.FileDropUploadItemEventInfo
    //==============================================================================
    nexacro.FileDropUploadItemEventInfo = function (obj, id, idx, filename, filesize)
    {
        this.id = this.eventid = id || "onfiledropuploaditem";
        this.fromobject = this.fromreferenceobject = obj;

        this.index = idx;
        this.filename = filename;
        this.filesize = filesize;
    };

    var _pFileDropUploadItemEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadItemEventInfo);
    nexacro.FileDropUploadItemEventInfo.prototype = _pFileDropUploadItemEventInfo;
    _pFileDropUploadItemEventInfo._type_name = "FileDropUploadItemEventInfo";

    _pFileDropUploadItemEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadEventInfo
    //==============================================================================
    nexacro.FileDropUploadEventInfo = function (obj, id, dsArray, code, msg, url)
    {
        this.id = this.eventid = id || "onsuccess";
        this.fromobject = this.fromreferenceobject = obj;

        this.datasets = dsArray;
        this.errorcode = code;
        this.errormsg = msg;
        this.url = url;
    };

    var _pFileDropUploadEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadEventInfo);
    nexacro.FileDropUploadEventInfo.prototype = _pFileDropUploadEventInfo;
    _pFileDropUploadEventInfo._type_name = "FileDropUploadEventInfo";

    _pFileDropUploadEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadErrorEventInfo
    //==============================================================================
    nexacro.FileDropUploadErrorEventInfo = function (obj, id, errortype, errormsg, errorobj, statuscode, requesturi, locationuri, index)
    {
        nexacro.ErrorEventInfo.call(this, obj, id, errortype, errormsg, errorobj, statuscode, requesturi, locationuri);
        this.errorcode = errortype;  // alias: 폼 핸들러에서 e.errorcode로 접근 가능
        this.index = index;
    };

    var _pFileDropUploadErrorEventInfo = nexacro._createPrototype(nexacro.ErrorEventInfo, nexacro.FileDropUploadErrorEventInfo);
    nexacro.FileDropUploadErrorEventInfo.prototype = _pFileDropUploadErrorEventInfo;
    _pFileDropUploadErrorEventInfo._type_name = "FileDropUploadErrorEventInfo";

    _pFileDropUploadErrorEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadDropEventInfo
    //==============================================================================
    nexacro.FileDropUploadDropEventInfo = function (obj, id, files, count)
    {
        this.id = this.eventid = id || "ondrop";
        this.fromobject = this.fromreferenceobject = obj;

        this.files = files;      // 드롭된 파일 목록 (FileList)
        this.count = count;      // 드롭된 파일 수
    };

    var _pFileDropUploadDropEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadDropEventInfo);
    nexacro.FileDropUploadDropEventInfo.prototype = _pFileDropUploadDropEventInfo;
    _pFileDropUploadDropEventInfo._type_name = "FileDropUploadDropEventInfo";

    _pFileDropUploadDropEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadProgressEventInfo
    //==============================================================================
    nexacro.FileDropUploadProgressEventInfo = function (obj, id, index, loaded, total, percent)
    {
        this.id = this.eventid = id || "onitemprogress";
        this.fromobject = this.fromreferenceobject = obj;

        this.index = index;      // 파일 인덱스 (-1이면 전체)
        this.loaded = loaded;    // 업로드된 바이트
        this.total = total;      // 전체 바이트
        this.percent = percent;  // 진행률 (0-100)
    };

    var _pFileDropUploadProgressEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadProgressEventInfo);
    nexacro.FileDropUploadProgressEventInfo.prototype = _pFileDropUploadProgressEventInfo;
    _pFileDropUploadProgressEventInfo._type_name = "FileDropUploadProgressEventInfo";

    _pFileDropUploadProgressEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadItemSuccessEventInfo
    //==============================================================================
    nexacro.FileDropUploadItemSuccessEventInfo = function (obj, id, index, filename, filesize)
    {
        this.id = this.eventid = id || "onitemsuccess";
        this.fromobject = this.fromreferenceobject = obj;

        this.index = index;          // 파일 인덱스
        this.filename = filename;    // 파일명
        this.filesize = filesize;    // 파일 크기 (bytes)
    };

    var _pFileDropUploadItemSuccessEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadItemSuccessEventInfo);
    nexacro.FileDropUploadItemSuccessEventInfo.prototype = _pFileDropUploadItemSuccessEventInfo;
    _pFileDropUploadItemSuccessEventInfo._type_name = "FileDropUploadItemSuccessEventInfo";

    _pFileDropUploadItemSuccessEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUploadItemErrorEventInfo
    //==============================================================================
    nexacro.FileDropUploadItemErrorEventInfo = function (obj, id, index, filename, errorcode, errormsg)
    {
        this.id = this.eventid = id || "onitemerror";
        this.fromobject = this.fromreferenceobject = obj;

        this.index = index;          // 파일 인덱스
        this.filename = filename;    // 파일명
        this.errorcode = errorcode;  // 에러 코드
        this.errormsg = errormsg;    // 에러 메시지
    };

    var _pFileDropUploadItemErrorEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.FileDropUploadItemErrorEventInfo);
    nexacro.FileDropUploadItemErrorEventInfo.prototype = _pFileDropUploadItemErrorEventInfo;
    _pFileDropUploadItemErrorEventInfo._type_name = "FileDropUploadItemErrorEventInfo";

    _pFileDropUploadItemErrorEventInfo = null;

    //==============================================================================
    // nexacro.FileDropUpload
    //==============================================================================
    nexacro.FileDropUpload = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._fileitems = [];
        this.context = this._refform;
    };

    var _pFileDropUpload = nexacro._createPrototype(nexacro.Component, nexacro.FileDropUpload);
    nexacro.FileDropUpload.prototype = _pFileDropUpload;
    _pFileDropUpload._type_name = "FileDropUpload";


    /* ==========================================================================
       Default Properties
       ========================================================================== */

    _pFileDropUpload._p_uploadurl = "";               // 업로드 서버 URL

    _pFileDropUpload._p_filefilter = "";              // 허용 파일 형식 필터
    _pFileDropUpload._p_multiselect = true;           // 다중 파일 선택 허용
    _pFileDropUpload._filedialog = null;              // nexacro.FileDialog 인스턴스

    _pFileDropUpload._p_maxfilecount = 0;             // 0 = 무제한
    _pFileDropUpload._p_maxfilesize = 0;              // 0 = 무제한 (bytes)
    _pFileDropUpload._p_maxtotalfilesize = 0;         // 0 = 무제한 (bytes, 전체 합산)

    _pFileDropUpload._p_showdropzone = true;          // Dropzone 영역 표시
    _pFileDropUpload._p_showdropzonebutton = true;    // Dropzone 내 버튼 표시
    _pFileDropUpload._p_showdeletebutton = true;      // 개별 삭제 버튼
    _pFileDropUpload._p_showaddbutton = true;         // 툴바 추가 버튼
    _pFileDropUpload._p_showdeleteallbutton = true;   // 툴바 전체 삭제 버튼
    _pFileDropUpload._p_showuploadbutton = true;      // 툴바 업로드 버튼
    _pFileDropUpload._p_showcounter = true;           // 파일 카운터 표시
    _pFileDropUpload._p_showfilesize = true;          // 파일 크기 표시
    _pFileDropUpload._p_showhelpmessage = false;      // 도움말 메시지 표시
    _pFileDropUpload._p_showtoolbar = true;           // 툴바 표시

    // toolbar
    _pFileDropUpload._p_addbuttontext = "Add";
    _pFileDropUpload._p_deleteallbuttontext = "Delete All";
    _pFileDropUpload._p_uploadbuttontext = "Upload";

    // dropzone
    _pFileDropUpload._p_dropzonetext = "Drag and drop files here or click";
    _pFileDropUpload._p_dropzonebuttontext = "Select Files";
    _pFileDropUpload._p_helpmessage = "";             // 도움말 메시지 텍스트
    _pFileDropUpload._p_helpmessagealign = "left";    // 도움말 정렬 (left/center/right)
    _pFileDropUpload._p_counterformat = "";           // 카운터 포맷 (빈 값 = 기본값)

    _pFileDropUpload._p_dropzoneheight = undefined;   
    _pFileDropUpload._p_toolbarheight = undefined;
    _pFileDropUpload._p_itemheight = undefined;
    _pFileDropUpload._itemheight = undefined;
    _pFileDropUpload._p_itemgap = undefined;
    _pFileDropUpload._p_counteralign = "right";
    _pFileDropUpload._p_counterheight = undefined;

    _pFileDropUpload._p_progressdisplaytype = "progressbar";  // "spinner" | "percent" | "progressbar"

    _pFileDropUpload._p_preventduplicatefile = true;  // 중복 파일 검증 여부 (기본 활성화)

    _pFileDropUpload._filetypemap =
    {
        "pdf"  : "pdf",
        "doc"  : "doc",
        "docx" : "doc",
        "hwp"  : "doc",
        "txt"  : "doc",
        "rtf"  : "doc",
        "ppt"  : "doc",
        "pptx" : "doc",
        "xls"  : "xls",
        "xlsx" : "xls",
        "csv"  : "xls",
        "jpg"  : "img",
        "jpeg" : "img",
        "png"  : "img",
        "gif"  : "img",
        "bmp"  : "img",
        "webp" : "img",
        "svg"  : "img"
    };

    // Empty State (showdropzone이 false일 때 파일 추가 안내 메시지)
    _pFileDropUpload._p_emptymessage = "Drag files here to add";

    /* control */
    _pFileDropUpload._dropzone = null;
    _pFileDropUpload._toolbar = null;
    _pFileDropUpload._filelist_control = null;
    _pFileDropUpload._helpmessage = null;
    _pFileDropUpload._counter = null;
    _pFileDropUpload._counter_prev_status = "";
    _pFileDropUpload._is_uploading = false;
    /* upload */
    _pFileDropUpload._upload_active = 0;
    _pFileDropUpload._upload_success = 0;
    _pFileDropUpload._upload_error = 0;
    _pFileDropUpload._uploadurl_current = "";

    _pFileDropUpload._emptytext = null;        // Empty State 안내 텍스트 서브컨트롤

    /* status */
    _pFileDropUpload._is_scrollable = false;  // 자체 스크롤 비활성화 (ListControl이 담당)

    /* accessibility */
    _pFileDropUpload._p_accessibilityaction = "";
    _pFileDropUpload._p_accessibilityrole = "filedropupload";
    _pFileDropUpload._p_accessibilitydesclevel = "all";
    _pFileDropUpload._p_accessibilitydescription = "";
    _pFileDropUpload._p_accessibilityenable = true;
    _pFileDropUpload._p_accessibilitylabel = "";

    _pFileDropUpload._want_tab = true;
    _pFileDropUpload._want_arrow = false;

    /* event list */
    _pFileDropUpload._event_list =
    {
        "ondblclick": 1,
        "onkeypress": 1, "onkeydown": 1, "onkeyup": 1,
        "onkillfocus": 1, "onsetfocus": 1,
        "ondrag": 1, "ondrop": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1, "onmousedown": 1, "onmouseup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1, "onmove": 1, "onsize": 1,
        "onsuccess": 1, "onerror": 1,
        "oncontextmenu": 1,
        "onappenditem": 1, "ondeleteitem": 1, "ondeleteallitems": 1, "onitemclick": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
        "onitemprogress": 1, "onitemsuccess": 1, "onitemerror": 1
    };

    //==============================================================================
    // nexacro.FileDropUpload : Create & Destroy & Update
    //==============================================================================

    _pFileDropUpload.on_create_contents = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            if (this._p_showdropzone)
            {
                this._createDropzone();
            }

            if (this._p_showtoolbar && (this._p_showaddbutton || this._p_showdeleteallbutton || this._p_showuploadbutton))
            {
                this._createToolbar();
            }

            if (this._p_showhelpmessage)
            {
                this._createHelpMessage();
            }

            if (this._p_showcounter)
            {
                this._createCounter();
            }

            // Empty State 또는 드랍존이 없을 때 D&D 드롭 FileList가 해당 역할이므로 항상 생성
            this._createFileListControl();
        }
    };

    // createComponent() 경로 — 서브컨트롤 초기화
    _pFileDropUpload.on_created_contents = function (win)
    {
        if (!this.context)
            this.context = this._refform;

        this.on_apply_prop_enable(this._isEnable());
        this._applyProperties();
        this._recalcLayout();

        if (this._dropzone)
        {
            this._dropzone.on_created(win);
            this._setEventHandlerToDropzone();
        }

        if (this._toolbar)
        {
            this._toolbar.on_created(win);
            this._setEventHandlerToToolbar();
        }

        if (this._helpmessage)
        {
            this._helpmessage.on_created(win);
        }

        if (this._counter)
        {
            this._counter.on_created(win);
        }

        if (this._filelist_control)
        {
            this._filelist_control.on_created(win);
        }

        this._createEmptyText();
        this._updateEmptyState();
    };

    // 폼 로드 경로 — 서브컨트롤 HTML 문자열 생성
    _pFileDropUpload.on_create_contents_command = function ()
    {
        this.on_apply_prop_enable(this._isEnable());
        this._applyProperties();
        this._recalcLayout();

        var str = "";

        if (this._dropzone)
        {
            str += this._dropzone.createCommand();
        }

        if (this._toolbar)
        {
            str += this._toolbar.createCommand();
        }

        if (this._helpmessage)
        {
            str += this._helpmessage.createCommand();
        }

        if (this._counter)
        {
            str += this._counter.createCommand();
        }

        if (this._filelist_control)
        {
            str += this._filelist_control.createCommand();
        }

        return str;
    };

    // 서브컨트롤 DOM 핸들 연결 + 이벤트 바인딩
    _pFileDropUpload.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (!this.context)
            this.context = this._refform;

        if (this._dropzone)
        {
            this._dropzone.attachHandle(win);
            this._setEventHandlerToDropzone();
        }

        if (this._toolbar)
        {
            this._toolbar.attachHandle(win);
            this._setEventHandlerToToolbar();
        }

        if (this._helpmessage)
        {
            this._helpmessage.attachHandle(win);
        }

        if (this._counter)
        {
            this._counter.attachHandle(win);
        }

        if (this._filelist_control)
        {
            this._filelist_control.attachHandle(win);
        }

        this._createEmptyText();
        this._updateEmptyState();
    };

    //==============================================================================
    // nexacro.FileDropUpload : Override
    //==============================================================================

    _pFileDropUpload._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        var want_tab = this._want_tab;
        this._want_tab = true;
        return { want_tab: want_tab, want_return: true, want_escape: false, want_chars: false, want_arrows: false };
    };

    _pFileDropUpload._setTabFocusObj = function (focusobj)
    {
        this._focusobj = focusobj;
    };

    _pFileDropUpload._on_focus = function (self_flag, evt_name)
    {
        nexacro.Component.prototype._on_focus.call(this, self_flag, evt_name);
        this._want_tab = true;

        if (!this._focusobj)
        {
            var dropbtn = (this._dropzone && this._p_showdropzone && this._p_showdropzonebutton) ? this._dropzone._button : null;
            var addbtn = (this._toolbar && this._p_showtoolbar && this._p_showaddbutton) ? this._toolbar._addbutton : null;
            var delbtn = (this._toolbar && this._p_showtoolbar && this._p_showdeleteallbutton) ? this._toolbar._deleteallbutton : null;
            var uplbtn = (this._toolbar && this._p_showtoolbar && this._p_showuploadbutton) ? this._toolbar._uploadbutton : null;

            var first = null;
            if (dropbtn && dropbtn._isEnable()) first = dropbtn;
            else if (addbtn && addbtn._isEnable()) first = addbtn;
            else if (delbtn && delbtn._isEnable()) first = delbtn;
            else if (uplbtn && uplbtn._isEnable()) first = uplbtn;

            if (first)
            {
                first._changeStatus("focused", true);
                this._setTabFocusObj(first);
            }
        }
    };

    _pFileDropUpload.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        if (this._focusobj && this._focusobj._changeStatus)
        {
            this._focusobj._changeStatus("focused", false);
        }
        this._focusobj = null;
        return nexacro.Component.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);
    };

    _pFileDropUpload.on_fire_user_onkeydown = function (keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp, meta_key)
    {
        var E = nexacro.Event;
        var _win = this._getWindow();
        var _win_keydown_elem = (_win && _win._keydown_element) ? _win._keydown_element : null;

        if (keycode == E.KEY_TAB)
        {
            var focusobj = this._focusobj;
            var dropbtn = (this._dropzone && this._p_showdropzone && this._p_showdropzonebutton) ? this._dropzone._button : null;
            var addbtn = (this._toolbar && this._p_showtoolbar && this._p_showaddbutton) ? this._toolbar._addbutton : null;
            var delbtn = (this._toolbar && this._p_showtoolbar && this._p_showdeleteallbutton) ? this._toolbar._deleteallbutton : null;
            var uplbtn = (this._toolbar && this._p_showtoolbar && this._p_showuploadbutton) ? this._toolbar._uploadbutton : null;

            if (dropbtn && !dropbtn._isEnable()) dropbtn = null;
            if (addbtn && !addbtn._isEnable()) addbtn = null;
            if (delbtn && !delbtn._isEnable()) delbtn = null;
            if (uplbtn && !uplbtn._isEnable()) uplbtn = null;

            var order = [dropbtn, addbtn, delbtn, uplbtn];
            var curidx = -1;
            var i;

            for (i = 0; i < order.length; i++)
            {
                if (order[i] && order[i] === focusobj)
                {
                    curidx = i;
                    break;
                }
            }

            var next = null;
            if (shift_key)
            {
                for (i = curidx - 1; i >= 0; i--)
                {
                    if (order[i]) { next = order[i]; break; }
                }
            }
            else
            {
                for (i = curidx + 1; i < order.length; i++)
                {
                    if (order[i]) { next = order[i]; break; }
                }
            }

            if (focusobj && focusobj._changeStatus)
            {
                focusobj._changeStatus("focused", false);
            }

            if (!next)
            {
                this._want_tab = false;
                this._focusobj = null;
            }
            else
            {
                next._changeStatus("focused", true);
                this._setTabFocusObj(next);
            }

            if (_win_keydown_elem)
            {
                _win_keydown_elem._event_stop = true;
            }
        }
        else if (keycode == E.KEY_ENTER || keycode == E.KEY_SPACE)
        {
            if (this._focusobj && this._focusobj instanceof nexacro.Button)
            {
                this._focusobj.click();
            }
        }

        return nexacro.Component.prototype.on_fire_user_onkeydown.call(this, keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp, meta_key);
    };

    //==============================================================================
    // nexacro.FileDropUpload : Properties
    //==============================================================================

    _pFileDropUpload._applyProperties = function ()
    {
        this.on_apply_dropzonetext(this._p_dropzonetext);
        this.on_apply_dropzonebuttontext(this._p_dropzonebuttontext);
        this.on_apply_helpmessage(this._p_helpmessage);
        this.on_apply_addbuttontext(this._p_addbuttontext);
        this.on_apply_deleteallbuttontext(this._p_deleteallbuttontext);
        this.on_apply_uploadbuttontext(this._p_uploadbuttontext);

        this.on_apply_showcounter(this._p_showcounter);
        this.on_apply_showdropzone(this._p_showdropzone);
        this.on_apply_showtoolbar(this._p_showtoolbar);
        this.on_apply_showdropzonebutton(this._p_showdropzonebutton);
        this.on_apply_showaddbutton(this._p_showaddbutton);
        this.on_apply_showdeleteallbutton(this._p_showdeleteallbutton);
        this.on_apply_showuploadbutton(this._p_showuploadbutton);
        this.on_apply_showdeletebutton(this._p_showdeletebutton);
        this.on_apply_showfilesize(this._p_showfilesize);
        this.on_apply_showhelpmessage(this._p_showhelpmessage);

        this.on_apply_maxfilecount(this._p_maxfilecount);
        this.on_apply_dropzoneheight(this._p_dropzoneheight);
        this.on_apply_toolbarheight(this._p_toolbarheight);
        this.on_apply_counterheight(this._p_counterheight);
        this.on_apply_itemheight(this._p_itemheight);
        this.on_apply_itemgap(this._p_itemgap);
    };

    _pFileDropUpload.on_destroy_contents = function ()
    {
        // 업로드 상태 초기화
        if (this._is_uploading)
        {
            this._is_uploading = false;
            this._upload_active = 0;
        }

        if (this._filedialog)
        {
            this._filedialog.destroy();
            this._filedialog = null;
        }

        var items = this._fileitems;
        if (items)
        {
            for (var i = 0; i < items.length; i++)
            {
                if (items[i] && items[i]._transfer)
                {
                    items[i]._transfer.destroy();
                    items[i]._transfer = null;
                }
            }
        }

        if (this._dropzone)
        {
            this._dropzone.destroy();
            this._dropzone = null;
        }

        if (this._toolbar)
        {
            this._toolbar.destroy();
            this._toolbar = null;
        }

        if (this._helpmessage)
        {
            this._helpmessage.destroy();
            this._helpmessage = null;
        }

        if (this._counter)
        {
            this._counter.destroy();
            this._counter = null;
        }

        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                if (items[i])
                {
                    items[i].destroy();
                }
            }
        }

        this._fileitems = null;
        this._emptytext = null;

        if (this._filelist_control)
        {
            this._filelist_control.destroy();
            this._filelist_control = null;
        }
    };

    _pFileDropUpload.on_change_containerRect = function (width, height)
    {
        if (this._is_created_contents)
        {
            this._recalcLayout();
        }
    };

    //==============================================================================
    // nexacro.FileDropUpload : Properties
    //==============================================================================

    _pFileDropUpload.on_apply_prop_cssclass = function ()
    {
        if (this._dropzone)
        {
            this._dropzone.on_apply_cssclass();
        }

        if (this._toolbar)
        {
            this._toolbar.on_apply_cssclass();
        }

        if (this._counter)
        {
            this._counter.on_apply_cssclass();
        }

        if (this._helpmessage)
        {
            this._helpmessage.on_apply_cssclass();
        }

        if (this._filelist_control)
        {
            this._filelist_control.on_apply_cssclass();
        }

        var items = this._fileitems;
        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                if (items[i])
                {
                    items[i].on_apply_cssclass();
                }
            }
        }
    };

    _pFileDropUpload.on_apply_prop_enable = function (enable)
    {
        nexacro.Component.prototype.on_apply_prop_enable.call(this, enable);

        if (this._env && this._env._p_enableaccessibility)
        {
            this._setAccessibilityStatDisabled(!enable);
        }

        if (this._dropzone)
        {
            this._dropzone._setEnable(enable);
        }

        if (this._toolbar)
        {
            this._toolbar._setEnable(enable);
        }

        var items = this._fileitems;
        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                if (items[i])
                {
                    items[i]._setEnable(enable);
                }
            }
        }
    };

    _pFileDropUpload.on_apply_prop_stringresource = function ()
    {
        if (!nexacro._StringResource) return;

        nexacro.Component.prototype.on_apply_prop_stringresource.call(this);

        this.on_apply_addbuttontext(this._getStringResourceProperty(this._p_addbuttontext));
        this.on_apply_deleteallbuttontext(this._getStringResourceProperty(this._p_deleteallbuttontext));
        this.on_apply_uploadbuttontext(this._getStringResourceProperty(this._p_uploadbuttontext));
        this.on_apply_dropzonetext(this._getStringResourceProperty(this._p_dropzonetext));
        this.on_apply_dropzonebuttontext(this._getStringResourceProperty(this._p_dropzonebuttontext));
        this.on_apply_helpmessage(this._getStringResourceProperty(this._p_helpmessage));
        this.on_apply_emptymessage(this._getStringResourceProperty(this._p_emptymessage));
    };

    //==============================================================================
    // nexacro.FileDropUpload : Properties
    //==============================================================================

    _pFileDropUpload.set_uploadurl = function (v)
    {
        if (this._p_uploadurl != v)
        {
            this._p_uploadurl = v;
        }
    };

    _pFileDropUpload.set_filefilter = function (v)
    {
        if (this._p_filefilter != v)
        {
            this._p_filefilter = v;
        }
    };

    _pFileDropUpload.set_maxfilecount = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_maxfilecount != v)
        {
            this._p_maxfilecount = v;
            this.on_apply_maxfilecount(v);
        }
    };

    _pFileDropUpload.set_maxfilesize = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_maxfilesize != v)
        {
            this._p_maxfilesize = v;
        }
    };

    _pFileDropUpload.set_dropzonetext = function (v)
    {
        if (this._p_dropzonetext != v)
        {
            this._p_dropzonetext = v;
            this.on_apply_dropzonetext(v);
        }
    };

    _pFileDropUpload.set_dropzonebuttontext = function (v)
    {
        if (this._p_dropzonebuttontext != v)
        {
            this._p_dropzonebuttontext = v;
            this.on_apply_dropzonebuttontext(v);
        }
    };

    _pFileDropUpload.set_helpmessage = function (v)
    {
        if (this._p_helpmessage != v)
        {
            this._p_helpmessage = v;
            this.on_apply_helpmessage(v);
            if (this._is_created) this._recalcLayout();
        }
    };

    _pFileDropUpload.set_helpmessagealign = function (v)
    {
        if (this._p_helpmessagealign != v)
        {
            this._p_helpmessagealign = v;
            this.on_apply_helpmessagealign(v);
        }
    };


    _pFileDropUpload.set_showcounter = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showcounter != v)
        {
            this._p_showcounter = v;
            this.on_apply_showcounter(v);
        }
    };

    _pFileDropUpload.set_showdropzone = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showdropzone != v)
        {
            this._p_showdropzone = v;
            this.on_apply_showdropzone(v);
        }
    };

    _pFileDropUpload.set_emptymessage = function (v)
    {
        if (this._p_emptymessage != v)
        {
            this._p_emptymessage = v;
            this.on_apply_emptymessage(v);
        }
    };

    _pFileDropUpload.set_showdropzonebutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showdropzonebutton != v)
        {
            this._p_showdropzonebutton = v;
            this.on_apply_showdropzonebutton(v);
        }
    };

    _pFileDropUpload.set_showtoolbar = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showtoolbar != v)
        {
            this._p_showtoolbar = v;
            this.on_apply_showtoolbar(v);
        }
    };

    _pFileDropUpload.set_showhelpmessage = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showhelpmessage != v)
        {
            this._p_showhelpmessage = v;
            this.on_apply_showhelpmessage(v);
        }
    };

    _pFileDropUpload.set_showdeletebutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showdeletebutton != v)
        {
            this._p_showdeletebutton = v;
            this.on_apply_showdeletebutton(v);
        }
    };

    _pFileDropUpload.set_showfilesize = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showfilesize != v)
        {
            this._p_showfilesize = v;
            this.on_apply_showfilesize(v);
        }
    };

    _pFileDropUpload.set_showaddbutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showaddbutton != v)
        {
            this._p_showaddbutton = v;
            this.on_apply_showaddbutton(v);
        }
    };

    _pFileDropUpload.set_showdeleteallbutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showdeleteallbutton != v)
        {
            this._p_showdeleteallbutton = v;
            this.on_apply_showdeleteallbutton(v);
        }
    };

    _pFileDropUpload.set_showuploadbutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_showuploadbutton != v)
        {
            this._p_showuploadbutton = v;
            this.on_apply_showuploadbutton(v);
        }
    };


    _pFileDropUpload.set_multiselect = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_multiselect != v)
        {
            this._p_multiselect = v;
        }
    };

    _pFileDropUpload.set_preventduplicatefile = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_preventduplicatefile != v)
        {
            this._p_preventduplicatefile = v;
        }
    };


    _pFileDropUpload.set_counterformat = function (v)
    {
        if (this._p_counterformat != v)
        {
            this._p_counterformat = v;
            this.on_apply_counterformat(v);
        }
    };

    _pFileDropUpload.set_counteralign = function (v)
    {
        if (this._p_counteralign != v)
        {
            this._p_counteralign = v;
            this.on_apply_counteralign(v);
        }
    };

    _pFileDropUpload.set_counterheight = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_counterheight != v)
        {
            this._p_counterheight = v;
            this.on_apply_counterheight(v);
        }
    };

    _pFileDropUpload.set_dropzoneheight = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_dropzoneheight != v)
        {
            this._p_dropzoneheight = v;
            this.on_apply_dropzoneheight(v);
        }
    };

    _pFileDropUpload.set_toolbarheight = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_toolbarheight != v)
        {
            this._p_toolbarheight = v;
            this.on_apply_toolbarheight(v);
        }
    };

    _pFileDropUpload.set_itemheight = function (v)
    {
        if (v !== undefined && !nexacro._isEmRemUnit(v))
        {
            v = nexacro._toInt(v);
        }
        if (this._p_itemheight != v)
        {
            this._p_itemheight = v;
            this.on_apply_itemheight(v);
        }
    };

    _pFileDropUpload.set_itemgap = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_itemgap != v)
        {
            this._p_itemgap = v;
            this.on_apply_itemgap(v);
        }
    };

    _pFileDropUpload.set_progressdisplaytype = function (v)
    {
        if (this._p_progressdisplaytype != v)
        {
            this._p_progressdisplaytype = v;
        }
    };

    _pFileDropUpload.set_addbuttontext = function (v)
    {
        if (this._p_addbuttontext != v)
        {
            this._p_addbuttontext = v;
            this.on_apply_addbuttontext(v);
        }
    };

    _pFileDropUpload.set_deleteallbuttontext = function (v)
    {
        if (this._p_deleteallbuttontext != v)
        {
            this._p_deleteallbuttontext = v;
            this.on_apply_deleteallbuttontext(v);
        }
    };

    _pFileDropUpload.set_uploadbuttontext = function (v)
    {
        if (this._p_uploadbuttontext != v)
        {
            this._p_uploadbuttontext = v;
            this.on_apply_uploadbuttontext(v);
        }
    };

    _pFileDropUpload.set_maxtotalfilesize = function (v)
    {
        v = nexacro._toInt(v);
        if (this._p_maxtotalfilesize != v)
        {
            this._p_maxtotalfilesize = v;
        }
    };

    _pFileDropUpload._properties = [{ name: "uploadurl" }, { name: "filefilter" }, { name: "maxfilecount" }, { name: "maxfilesize" }, { name: "maxtotalfilesize" }, { name: "multiselect" }, { name: "preventduplicatefile" }, { name: "dropzonetext" }, { name: "dropzonebuttontext" }, { name: "helpmessage" }, { name: "helpmessagealign" }, { name: "emptymessage" }, { name: "counterformat" }, { name: "counteralign" }, { name: "counterheight" }, { name: "dropzoneheight" }, { name: "toolbarheight" }, { name: "itemheight" }, { name: "itemgap" }, { name: "progressdisplaytype" }, { name: "addbuttontext" }, { name: "deleteallbuttontext" }, { name: "uploadbuttontext" }, { name: "showdropzone" }, { name: "showdropzonebutton" }, { name: "showtoolbar" }, { name: "showcounter" }, { name: "showhelpmessage" }, { name: "showdeletebutton" }, { name: "showfilesize" }, { name: "showaddbutton" }, { name: "showdeleteallbutton" }, { name: "showuploadbutton" }];
    nexacro._defineProperties(_pFileDropUpload, _pFileDropUpload._properties);

    //==============================================================================
    // nexacro.FileDropUpload : Properties
    //==============================================================================


    _pFileDropUpload.on_apply_dropzonetext = function (v)
    {
        if (this._dropzone)
        {
            this._dropzone.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_dropzonebuttontext = function (v)
    {
        if (this._dropzone && this._dropzone._button)
        {
            this._dropzone._button.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_helpmessage = function (v)
    {
        if (this._helpmessage)
        {
            this._helpmessage.set_text(v);
        }
        else if (this._is_created && v && this._p_showhelpmessage)
        {
            this._createHelpMessage();
            this._helpmessage.on_created();
            this._helpmessage.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_helpmessagealign = function (v)
    {
        if (this._helpmessage)
        {
            this._helpmessage.set_textAlign(v || "left");
        }
    };

    _pFileDropUpload.on_apply_emptymessage = function (v)
    {
        if (this._emptytext)
        {
            this._emptytext.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_addbuttontext = function (v)
    {
        if (this._toolbar && this._toolbar._addbutton)
        {
            this._toolbar._addbutton.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_deleteallbuttontext = function (v)
    {
        if (this._toolbar && this._toolbar._deleteallbutton)
        {
            this._toolbar._deleteallbutton.set_text(v);
        }
    };

    _pFileDropUpload.on_apply_uploadbuttontext = function (v)
    {
        if (this._toolbar && this._toolbar._uploadbutton)
        {
            this._toolbar._uploadbutton.set_text(v);
        }
    };


    _pFileDropUpload.on_apply_showcounter = function (v)
    {
        if (this._is_created)
        {
            if (v && !this._counter)
            {
                this._createCounter();
                this._counter.on_created();
            }
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showdropzone = function (v)
    {
        if (this._is_created)
        {
            if (v && !this._dropzone)
            {
                this._createDropzone();
                this._dropzone.on_created();
            }
            this._recalcLayout();
            this._updateEmptyState();
        }
    };

    _pFileDropUpload.on_apply_showdropzonebutton = function (v)
    {
        if (this._dropzone && this._dropzone._button)
        {
            this._dropzone._button.set_visible(v);
        }
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showtoolbar = function (v)
    {
        if (this._toolbar)
        {
            this._toolbar.set_visible(v);
        }
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showhelpmessage = function (v)
    {
        if (this._is_created)
        {
            if (v && !this._helpmessage)
            {
                this._createHelpMessage();
                this._helpmessage.on_created();
            }
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showdeletebutton = function (v)
    {
        var items = this._fileitems;
        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                if (items[i]._deletebutton)
                {
                    items[i]._deletebutton.set_visible(v);
                }
            }
        }
        if (this._is_created)
        {
            this._recalcFileItemsLayout();
        }
    };

    _pFileDropUpload.on_apply_showfilesize = function (v)
    {
        var items = this._fileitems;
        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                if (items[i]._filesize)
                {
                    items[i]._filesize.set_visible(v);
                }
            }
        }
        if (this._is_created)
        {
            this._recalcFileItemsLayout();
        }
    };

    _pFileDropUpload.on_apply_showaddbutton = function (v)
    {
        if (this._toolbar && this._toolbar._addbutton)
        {
            this._toolbar._addbutton.set_visible(v);
        }
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showdeleteallbutton = function (v)
    {
        if (this._toolbar && this._toolbar._deleteallbutton)
        {
            this._toolbar._deleteallbutton.set_visible(v);
        }
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_showuploadbutton = function (v)
    {
        if (this._toolbar && this._toolbar._uploadbutton)
        {
            this._toolbar._uploadbutton.set_visible(v);
        }
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };


    _pFileDropUpload.on_apply_maxfilecount = function (v)
    {
        this._updateCounter();
    };

    _pFileDropUpload.on_apply_counterformat = function (v)
    {
        this._updateCounter();
    };

    _pFileDropUpload.on_apply_counteralign = function (v)
    {
        if (this._counter)
        {
            this._counter.set_textAlign(v || "right");
        }
    };


    _pFileDropUpload.on_apply_dropzoneheight = function (v)
    {
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_toolbarheight = function (v)
    {
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_counterheight = function (v)
    {
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUpload.on_apply_itemheight = function (/*v*/)
    {
        var pv = this._p_itemheight;
        if (nexacro._isEmRemUnit(pv))
            this._itemheight = this._resolveEmPx(pv);
        else
            this._itemheight = (pv !== undefined) ? nexacro._toInt(pv) : undefined;
        if (this._is_created)
        {
            this._recalcFileItemsLayout();
        }
    };

    _pFileDropUpload.on_apply_itemgap = function (v)
    {
        if (this._is_created)
        {
            this._recalcLayout();
        }
    };

    //==============================================================================
    // nexacro.FileDropUpload : Methods
    // addFile, deleteItem, deleteAllItems, upload, getFileCount, getFileList
    //==============================================================================

    // nexacro.FileDialog 파일 다이얼로그
    _pFileDropUpload._openFileDialog = function ()
    {
        // 최초 한번만..
        if (!this._filedialog)
        {
            this._filedialog = new nexacro.FileDialog(this._unique_id + "_filedialog");
            this._filedialog._setEventHandler("onclose", this._on_filedialog_onclose, this);
        }

        if (this._p_filefilter)
        {
            this._filedialog.set_accept(this._p_filefilter);
        }

        var openMode = this._p_multiselect ? nexacro.FileDialog.MULTILOAD : nexacro.FileDialog.LOAD;
        this._filedialog.open("FileDropUpload", openMode);
    };

    // VirtualFile에서 원본 File 가져와야함.
    _pFileDropUpload._on_filedialog_onclose = function (obj, e)
    {
        var vfiles = e.virtualfiles;
        if (!vfiles || vfiles.length === 0) return;

        var files = [];
        for (var i = 0; i < vfiles.length; i++)
        {
            var f = vfiles[i]._handle || vfiles[i];
            if (f) files.push(f);
        }

        if (files.length > 0)
        {
            this._processSelectedFiles(files);
        }
    };

    _pFileDropUpload._processSelectedFiles = function (files)
    {
        if (!files || files.length === 0) return;

        var addedCount = 0;
        for (var i = 0; i < files.length; i++)
        {
            if (this.addFile(files[i]))
            {
                addedCount++;
            }
        }

        if (addedCount > 0)
        {
            this._recalcLayout();
            this._updateCounter();
        }
    };

    _pFileDropUpload.addFile = function (file)
    {
        if (!this._isEnable()) return false;
        if (!file) return false;

        var result = this._validateFile(file);

        if (!result.valid && result.hardReject)
        {
            var errorobj = nexacro.MakeError("ObjectError", this, result.errorCode, file.name);
            this.on_fire_onerror(result.errorCode, errorobj.message || result.errorCode);
            return false;
        }

        var index = this._fileitems ? this._fileitems.length : 0;
        var item = this._createFileItem(index);

        if (!item) return false;

        item.setFileInfo(file);
        item._p_index = index;

        this._fileitems.push(item);

        // Soft Reject: 에러 아이템으로 추가
        if (!result.valid)
        {
            item._isValidationError = true;
            item._validationErrorCode = result.errorCode;
            item._validationErrorMsg = result.errorMsg;
            item.setUploadStatus("error");
            if (item._statusicon)
            {
                var errorobj = nexacro.MakeError("ObjectError", this, result.errorCode);
                item._statusicon.set_tooltiptext(errorobj.message || result.errorCode);
            }
            this.on_fire_onerror(result.errorCode, result.errorMsg);
        }

        this._recalcFileItemsLayout();
        this._updateCounter();
        this._updateEmptyState();

        this.on_fire_onappenditem(index, file.name || "", file.size || 0);

        return true;
    };

    _pFileDropUpload._createFileItem = function (index)
    {
        var parent = this._filelist_control || this;
        var item = new nexacro._FileDropUploadItemControl(
            "fileitem" + index, 0, 0, 100, 48, null, null, null, null, null, null, parent
        );
        item._p_index = index;
        item._filedropupload = this; // 중간에 ListControl이 있어서 _p_parent로 직접 접근 안됨
        item.set_cssclass("filedropuploaditem");
        item.createComponent(true);
        item.on_created();

        return item;
    };

    _pFileDropUpload.deleteItem = function (index)
    {
        var items = this._fileitems;
        if (!items || index < 0 || index >= items.length)
        {
            return false;
        }

        var item = items[index];
        if (!item) return false;

        var f = item._originalFile;
        var filename = f ? f.name : "";
        var filesize = f ? f.size : 0;

        item.destroy();
        items.splice(index, 1);

        var len = items.length;
        for (var i = index; i < len; i++)
        {
            items[i]._p_index = i;
            items[i].name = "fileitem" + i;
        }

        this.on_fire_ondeleteitem(index, filename, filesize);

        this._recalcLayout();
        this._updateCounter();
        this._updateEmptyState();

        return true;
    };

    _pFileDropUpload.deleteAllItems = function ()
    {
        var items = this._fileitems;
        if (!items || items.length === 0) return;

        // 역순으로 삭제
        var len = items.length;
        for (var i = len - 1; i >= 0; i--)
        {
            if (items[i])
            {
                items[i].destroy();
            }
        }

        this._fileitems = [];

        this.on_fire_ondeleteallitems();

        this._recalcLayout();
        this._updateCounter();
        this._updateEmptyState();
    };

    _pFileDropUpload._setUploadingState = function (isUploading)
    {
        if (this._toolbar)
        {
            if (this._toolbar._uploadbutton)
            {
                this._toolbar._uploadbutton._setEnable(!isUploading);
            }
            if (this._toolbar._addbutton)
            {
                this._toolbar._addbutton._setEnable(!isUploading);
            }
            if (this._toolbar._deleteallbutton)
            {
                this._toolbar._deleteallbutton._setEnable(!isUploading);
            }
        }
        if (this._dropzone && this._dropzone._button)
        {
            this._dropzone._button._setEnable(!isUploading);
        }
    };

    _pFileDropUpload.upload = function (url)
    {
        var uploadUrl = url || this._p_uploadurl;
        if (!uploadUrl)
        {
            this.on_fire_onerror("comp_filedropupload_no_url", "");
            return;
        }

        var items = this._fileitems;
        if (!items || items.length === 0)
        {
            this.on_fire_onerror("comp_filedropupload_no_file", "");
            return;
        }

        if (this._is_uploading) return;

        this._is_uploading = true;
        this._setUploadingState(true);
        this._upload_active = 0;
        this._upload_success = 0;
        this._upload_error = 0;
        this._uploadurl_current = uploadUrl;

        var pthis = this;
        var started = 0;

        for (var i = 0; i < items.length; i++)
        {
            var item = items[i];
            if (!item || !item._originalFile || item._isValidationError) continue;

            (function (itemIndex)
            {
                var curItem = pthis._fileitems[itemIndex];
                var transfer = new nexacro.FileUpTransfer("_fut" + itemIndex, pthis);

                transfer.on_load = function (data, tUrl)
                {
                    pthis._on_item_onload(itemIndex, transfer, data, tUrl);
                };
                transfer.on_error = function (errorcode, errormsg, httpcode, tUrl)
                {
                    pthis._on_item_onerror(itemIndex, transfer, errorcode, errormsg);
                };
                transfer.on_progress = function (loaded, total)
                {
                    pthis._on_item_onprogress(itemIndex, loaded, total);
                };

                curItem.setUploadStatus("uploading");
                curItem.setProgress(0);
                curItem._transfer = transfer;

                transfer.clearFileList();
                var vFile = pthis._createVirtualFile(curItem._originalFile, 0);
                transfer.addFile("upfile0", vFile);

                pthis._upload_active++;
                transfer.upload(uploadUrl);
            })(i);

            started++;
        }

        if (started === 0)
        {
            this._is_uploading = false;
            this._setUploadingState(false);
            this.on_fire_onerror("comp_filedropupload_no_files", "");
        }
    };

    _pFileDropUpload._onUploadComplete = function ()
    {
        this._is_uploading = false;
        this._setUploadingState(false);
        this._updateAddButtonState();

        if (this._upload_error > 0 && this._upload_success === 0)
        {
            this.on_fire_onerror("comp_filedropupload_upload_failed", "");
        }
        else
        {
            this.on_fire_onsuccess(null, this._upload_error > 0 ? -1 : 0, "", this._uploadurl_current);
        }
    };

    _pFileDropUpload._createVirtualFile = function (file, index)
    {
        var vFile = new nexacro.VirtualFile("upfile" + index, "");
        vFile._setHandle(file);
        vFile._setFullPath("");
        vFile._setPath("");
        vFile._setFileName(file.name || "");
        return vFile;
    };

    _pFileDropUpload.getFileCount = function ()
    {
        return this._fileitems ? this._fileitems.length : 0;
    };

    _pFileDropUpload.getFileList = function ()
    {
        var items = this._fileitems;
        if (!items) return [];
        var result = [];
        for (var i = 0, len = items.length; i < len; i++)
        {
            var f = items[i]._originalFile;
            result[i] = {
                filename: f ? f.name : "",
                filesize: f ? f.size : 0,
                filetype: f ? f.type : ""
            };
        }
        return result;
    };

    _pFileDropUpload._updateCounter = function ()
    {
        if (!this._counter) return;

        var count = this.getFileCount();
        var maxCount = this._p_maxfilecount;

        if (count === 0)
        {
            this._counter.set_text("");
            this._counter.set_visible(false);
            this._updateCounterStatus("empty");
            this._updateAddButtonState();
            return;
        }

        this._counter.set_visible(true);

        var format = this._p_counterformat;
        if (!format)
        {
            format = (maxCount > 0) ? "{count}/{max}" : "{count}";
        }

        var text = format.replace(/\{count\}/g, count).replace(/\{max\}/g, maxCount);
        this._counter.set_text(text);

        var newStatus = (maxCount > 0 && count >= maxCount) ? "full" : "normal";

        this._updateCounterStatus(newStatus);
        this._updateAddButtonState();
    };

    _pFileDropUpload._updateAddButtonState = function ()
    {
        if (this._is_uploading) return;

        var count = this._fileitems ? this._fileitems.length : 0;
        var maxCount = this._p_maxfilecount;
        var isFull = (maxCount > 0 && count >= maxCount);

        if (this._toolbar && this._toolbar._addbutton)
        {
            this._toolbar._addbutton._setEnable(!isFull);
        }
        if (this._dropzone && this._dropzone._button)
        {
            this._dropzone._button._setEnable(!isFull);
        }
    };

    _pFileDropUpload._updateCounterStatus = function (newStatus)
    {
        if (!this._counter) return;
        if (this._counter_prev_status === newStatus) return;

        if (this._counter_prev_status)
        {
            this._counter._changeUserStatus(this._counter_prev_status, false);
        }

        this._counter._changeUserStatus(newStatus, true);

        var elem = this._counter.getElement();
        if (elem) elem.setElementUserStatus(newStatus);

        this._counter_prev_status = newStatus;
    };

    //==============================================================================
    // nexacro.FileDropUpload : Event Handlers
    //==============================================================================

    _pFileDropUpload._setEventHandlerToDropzone = function ()
    {
        var dropzone = this._dropzone;
        if (dropzone && dropzone._button)
        {
            dropzone._button._setEventHandler("onclick", this._on_dropzone_onbuttonclick, this);
        }
    };

    _pFileDropUpload._setEventHandlerToToolbar = function ()
    {
        var toolbar = this._toolbar;
        if (toolbar)
        {
            if (toolbar._addbutton)
            {
                toolbar._addbutton._setEventHandler("onclick", this._on_toolbar_onaddclick, this);
            }
            if (toolbar._deleteallbutton)
            {
                toolbar._deleteallbutton._setEventHandler("onclick", this._on_toolbar_ondeleteallclick, this);
            }
            if (toolbar._uploadbutton)
            {
                toolbar._uploadbutton._setEventHandler("onclick", this._on_toolbar_onuploadclick, this);
            }
        }
    };

    _pFileDropUpload._on_dropzone_onbuttonclick = function (obj, e)
    {
        this._openFileDialog();
    };

    _pFileDropUpload._on_toolbar_onaddclick = function (obj, e)
    {
        this._openFileDialog();
    };

    _pFileDropUpload._on_toolbar_ondeleteallclick = function (obj, e)
    {
        this.deleteAllItems();
    };

    _pFileDropUpload._on_toolbar_onuploadclick = function (obj, e)
    {
        this.upload();
    };


    //----------------------------------------------------------------------
    // D&D로 드롭된 파일/폴더 처리
    //
    // 호출 경로:
    //   DropzoneControl.on_fire_user_ondrop (CompEventBase.js)
    //   ListControl.on_fire_user_ondrop     ( showdropzone=false일 때)
    //
    // filelist 파라미터:
    //   Platform_HTML5.js _syshandler_ondrop
    //     -SystemBase_HTML5.js _getVirtualFileList (폴더 재귀 탐색도 있었네...)
    //     -VirtualFile 배열로 변환되서 CompEventBase.js on_fire_user_ondrop에 전달
    //   VirtualFile._handle에 원본 File 객체가 저장되어 있었음.
    //----------------------------------------------------------------------
    _pFileDropUpload._processDroppedData = function (filelist)
    {
        if (!filelist || filelist.length === 0) return;

        var files = [];
        for (var i = 0; i < filelist.length; i++)
        {
            var f = filelist[i]._handle || filelist[i];
            if (f) files.push(f);
        }

        // 드롭된게 있으면 처리
        if (files.length > 0)
        {
            this._processDroppedFiles(files);
        }
    };

    _pFileDropUpload._processDroppedFiles = function (files)
    {
        if (!files || files.length === 0) return;

        var bContinue = this.on_fire_ondrop(files);
        if (bContinue === false)
        {
            return;  // 이벤트 핸들러에서 취소
        }

        var addedCount = 0;
        for (var i = 0; i < files.length; i++)
        {
            if (this.addFile(files[i]))
            {
                addedCount++;
            }
        }

        if (addedCount > 0)
        {
            this._recalcLayout();
            this._updateCounter();
        }
    };


    _pFileDropUpload._on_item_onload = function (itemIndex, transfer, data, url)
    {
        var item = this._fileitems[itemIndex];
        this._upload_active--;

        var responseData = this._parseServerResponse(data);
        var errorCode = responseData.errorCode || 0;
        var errorMsg = responseData.errorMsg || "";

        if (errorCode < 0)
        {
            if (item)
            {
                item.setUploadStatus("error");
                this.on_fire_onitemerror(itemIndex, item._originalFile ? item._originalFile.name : "", errorCode, errorMsg);
            }
            this._upload_error++;
        }
        else
        {
            if (item)
            {
                item.setUploadStatus("complete");
                item.setProgress(100);
                var f = item._originalFile;
                this.on_fire_onitemsuccess(itemIndex, f ? f.name : "", f ? f.size : 0);
            }
            this._upload_success++;
        }

        transfer.destroy();
        if (item) item._transfer = null;

        if (this._upload_active <= 0)
        {
            this._onUploadComplete();
        }
    };

    // 서버 응답 파싱
    _pFileDropUpload._parseServerResponse = function (data)
    {
        var result = {
            errorCode: 0,
            errorMsg: "",
            datasets: null
        };

        if (!data) return result;

        try
        {
            // FileUpTransfer deserialize 결과: [info, datasets] 배열
            if (Array.isArray(data))
            {
                var info = data[0];
                if (info)
                {
                    result.errorCode = parseInt(info["ErrorCode"], 10) || 0;
                    result.errorMsg = info["ErrorMsg"] || "";
                }
                result.datasets = data[1] || null;
            }
            // JSON 문자열 (직접 호출 시)
            else if (typeof data === "string")
            {
                var parsed = JSON.parse(data);
                if (parsed.Parameters)
                {
                    for (var i = 0; i < parsed.Parameters.length; i++)
                    {
                        var param = parsed.Parameters[i];
                        if (param.id === "ErrorCode")
                        {
                            result.errorCode = parseInt(param.value, 10);
                        }
                        else if (param.id === "ErrorMsg")
                        {
                            result.errorMsg = param.value;
                        }
                    }
                }
                result.datasets = parsed.Datasets || null;
            }
        }
        catch (ex)
        {
        }

        return result;
    };

    _pFileDropUpload._on_item_onerror = function (itemIndex, transfer, errorcode, errormsg)
    {
        var item = this._fileitems[itemIndex];
        this._upload_active--;

        if (item)
        {
            item.setUploadStatus("error");
            this.on_fire_onitemerror(itemIndex, item._originalFile ? item._originalFile.name : "", errorcode, errormsg);
        }

        this._upload_error++;

        transfer.destroy();
        if (item) item._transfer = null;

        if (this._upload_active <= 0)
        {
            this._onUploadComplete();
        }
    };

    _pFileDropUpload._on_item_onprogress = function (itemIndex, loaded, total)
    {
        var item = this._fileitems[itemIndex];

        if (item)
        {
            var percent = total > 0 ? Math.round((loaded / total) * 100) : 0;
            item.setProgress(percent);
            this.on_fire_onitemprogress(itemIndex, loaded, total, percent);
        }
    };


    _pFileDropUpload.on_fire_onerror = function (errortype, errormsg, statuscode, requesturi, locationuri, index)
    {
        if (this.onerror && this.onerror._has_handlers)
        {
            var evt = new nexacro.FileDropUploadErrorEventInfo(this, "onerror", errortype, errormsg, null, statuscode, requesturi, locationuri, index);
            return this.onerror._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onsuccess = function (datasets, errorcode, errormsg, url)
    {
        if (this.onsuccess && this.onsuccess._has_handlers)
        {
            var evt = new nexacro.FileDropUploadEventInfo(this, "onsuccess", datasets, errorcode, errormsg, url);
            return this.onsuccess._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onitemsuccess = function (index, filename, filesize)
    {
        if (this.onitemsuccess && this.onitemsuccess._has_handlers)
        {
            var evt = new nexacro.FileDropUploadItemSuccessEventInfo(this, "onitemsuccess", index, filename, filesize);
            return this.onitemsuccess._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onitemerror = function (index, filename, errorcode, errormsg)
    {
        if (this.onitemerror && this.onitemerror._has_handlers)
        {
            var evt = new nexacro.FileDropUploadItemErrorEventInfo(this, "onitemerror", index, filename, errorcode, errormsg);
            return this.onitemerror._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onitemprogress = function (index, loaded, total, percent)
    {
        if (this.onitemprogress && this.onitemprogress._has_handlers)
        {
            var evt = new nexacro.FileDropUploadProgressEventInfo(this, "onitemprogress", index, loaded, total, percent);
            return this.onitemprogress._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onappenditem = function (index, filename, filesize)
    {
        if (this.onappenditem && this.onappenditem._has_handlers)
        {
            var evt = new nexacro.FileDropUploadItemEventInfo(this, "onappenditem", index, filename, filesize);
            return this.onappenditem._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_ondeleteitem = function (index, filename, filesize)
    {
        if (this.ondeleteitem && this.ondeleteitem._has_handlers)
        {
            var evt = new nexacro.FileDropUploadItemEventInfo(this, "ondeleteitem", index, filename, filesize);
            return this.ondeleteitem._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_ondeleteallitems = function ()
    {
        if (this.ondeleteallitems && this.ondeleteallitems._has_handlers)
        {
            var evt = new nexacro.EventInfo(this, "ondeleteallitems");
            return this.ondeleteallitems._fireEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_ondrop = function (files)
    {
        if (this.ondrop && this.ondrop._has_handlers)
        {
            var evt = new nexacro.FileDropUploadDropEventInfo(this, "ondrop", files, files ? files.length : 0);
            return this.ondrop._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pFileDropUpload.on_fire_onitemclick = function (index, filename, filesize)
    {
        if (this.onitemclick && this.onitemclick._has_handlers)
        {
            var evt = new nexacro.FileDropUploadItemEventInfo(this, "onitemclick", index, filename, filesize);
            return this.onitemclick._fireEvent(this, evt);
        }
        return true;
    };

    //==============================================================================
    // nexacro.FileDropUpload : Logical Part
    //==============================================================================

    _pFileDropUpload._recalcLayout = function ()
    {
        var control_elem = this.getElement();
        if (!control_elem) return;

        var client_left = this._getClientLeft();
        var client_top = this._getClientTop();
        var client_width = this._getClientWidth();
        var client_height = this._getClientHeight();

        var padding = this._getCurrentStylePadding();
        var pad_left = padding ? padding.left : 0;
        var pad_top = padding ? padding.top : 0;
        var pad_right = padding ? padding.right : 0;
        var pad_bottom = padding ? padding.bottom : 0;

        var section_gap = this._p_itemgap;
        if (section_gap == null)
        {
            section_gap = 8;
        }

        var content_left = client_left + pad_left;
        var content_top = client_top + pad_top;
        var content_width = client_width - (pad_left + pad_right);
        var content_bottom = client_height - pad_bottom;  // 콘텐츠 하단 경계

        var current_top = content_top;

        // 1. Dropzone 배치
        if (this._dropzone && this._p_showdropzone)
        {
            var dropzone_height = this._p_dropzoneheight;
            if (dropzone_height == undefined && this._dropzone)
            {
                dropzone_height = this._dropzone._on_getFitSize()[1];
            }
            var dropzone_avail = content_bottom - current_top;
            if (dropzone_height > dropzone_avail) dropzone_height = dropzone_avail;
            if (dropzone_height < 0) dropzone_height = 0;
            this._dropzone.set_visible(true);
            this._dropzone.move(content_left, current_top, content_width, dropzone_height);
            this._dropzone._recalcLayout();
            if (dropzone_height > 0) current_top += dropzone_height + section_gap;
        }
        else if (this._dropzone)
        {
            this._dropzone.set_visible(false);
        }

        // 2. 도움말 메시지 배치
        if (this._helpmessage && this._p_showhelpmessage)
        {
            var helpmessage_height = this._helpmessage._on_getFitSize()[1];
            var helpmessage_avail = content_bottom - current_top;
            if (helpmessage_height > helpmessage_avail) helpmessage_height = helpmessage_avail;
            if (helpmessage_height < 0) helpmessage_height = 0;
            this._helpmessage.set_visible(true);
            this._helpmessage.move(content_left, current_top, content_width, helpmessage_height);
            this.on_apply_helpmessagealign(this._p_helpmessagealign);
            if (helpmessage_height > 0) current_top += helpmessage_height + section_gap;
        }
        else if (this._helpmessage)
        {
            this._helpmessage.set_visible(false);
        }

        // 3. Toolbar 배치
        if (this._toolbar && this._p_showtoolbar)
        {
            var toolbar_height = this._p_toolbarheight;
            if (toolbar_height == undefined && this._toolbar)
            {
                toolbar_height = this._toolbar._on_getFitSize()[1];
            }
            
            var toolbar_avail = content_bottom - current_top;
            if (toolbar_height > toolbar_avail) toolbar_height = toolbar_avail;
            if (toolbar_height < 0) toolbar_height = 0;
            this._toolbar.set_visible(true);
            this._toolbar.move(content_left, current_top, content_width, toolbar_height);
            this._toolbar._recalcLayout();
            if (toolbar_height > 0) current_top += toolbar_height + section_gap;
        }
        else if (this._toolbar)
        {
            this._toolbar.set_visible(false);
        }

        // 4. 카운터 배치 (독립 행, 전체 너비)
        var counter_count = this._fileitems ? this._fileitems.length : 0;
        if (this._counter && this._p_showcounter && counter_count > 0)
        {
            var counter_height = this._p_counterheight;
            if (counter_height == undefined && this._counter)
            {
                counter_height = this._counter._on_getFitSize()[1];
            }
            var counter_avail = content_bottom - current_top;
            if (counter_height > counter_avail) counter_height = counter_avail;
            if (counter_height < 0) counter_height = 0;
            this._counter.set_visible(true);
            this._counter.move(content_left, current_top, content_width, counter_height);
            this.on_apply_counteralign(this._p_counteralign);
            if (counter_height > 0) current_top += counter_height + section_gap;
        }
        else if (this._counter)
        {
            this._counter.set_visible(false);
        }

        // 5. 파일 리스트 영역 배치
        var file_area_height = client_height - current_top - pad_bottom;
        if (file_area_height < 0) file_area_height = 0;

        if (this._filelist_control)
        {
            this._filelist_control.move(content_left, current_top, content_width, file_area_height);
            this._recalcFileItemsLayout();

            if (this._emptytext)
            {
                this._emptytext.move(0, 0, content_width, file_area_height);
            }
        }
    };

    _pFileDropUpload._recalcFileItemsLayout = function ()
    {
        var items = this._fileitems;
        if (!items || items.length === 0)
        {
            if (this._filelist_control)
            {
                this._filelist_control._onRecalcScrollSize();
            }
            return;
        }

        var item_height = this._getItemHeight();
        var item_gap = this._p_itemgap;
        if (item_gap == null)
        {
            item_gap = 8;
        }
        var item_width = this._filelist_control ? this._filelist_control._getClientWidth() : this._getClientWidth();
        var current_top = 0;
        var len = items.length;

        for (var i = 0; i < len; i++)
        {
            var item = items[i];
            if (item)
            {
                item.move(0, current_top, item_width, item_height);
                item._recalcLayout();
                current_top += item_height + (i < len - 1 ? item_gap : 0);
            }
        }

        if (this._filelist_control)
        {
            this._filelist_control._onRecalcScrollSize();
        }
    };

    _pFileDropUpload._getItemHeight = function ()
    {
        var itemheight = (this._itemheight !== undefined) ? this._itemheight : this._p_itemheight;
        if (itemheight == null)
        {
            itemheight = 48;
        }
        return itemheight;
    };

    _pFileDropUpload.on_apply_font = function (font)
    {
        nexacro.Component.prototype.on_apply_font.call(this, font);
        if (nexacro._isEmRemUnit(this._p_itemheight))
            this.on_apply_itemheight(this._p_itemheight);
    };

    _pFileDropUpload._createDropzone = function ()
    {
        var dropzone = new nexacro._FileDropUploadDropzoneControl("dropzone", 0, 0, 0, 0, null, null, null, null, null, null, this);
        dropzone.createComponent(true);
        this._dropzone = dropzone;
    };

    _pFileDropUpload._createToolbar = function ()
    {
        var toolbar = new nexacro._FileDropUploadToolbarControl("toolbar", 0, 0, 0, 36, null, null, null, null, null, null, this);
        toolbar.createComponent(true);
        this._toolbar = toolbar;
    };

    _pFileDropUpload._createHelpMessage = function ()
    {
        var helpmessage = new nexacro.Static("helpmessage", 0, 0, 0, 0, null, null, null, null, null, null, this);
        helpmessage._setControl();
        helpmessage.set_text(this._p_helpmessage);
        helpmessage.createComponent(true);

        this._helpmessage = helpmessage;
    };

    _pFileDropUpload._createCounter = function ()
    {
        var counter = new nexacro._FileDropUploadCounterControl("counter", 0, 0, 0, 0, null, null, null, null, null, null, this);
        counter._setControl();
        counter.createComponent(true);

        this._counter = counter;
    };

    _pFileDropUpload._createFileListControl = function ()
    {
        var filelist = new nexacro._FileDropUploadListControl("filelist", 0, 0, 0, 0, null, null, null, null, null, null, this);
        filelist.createComponent(true);
        this._filelist_control = filelist;
    };

    //==============================================================================
    // nexacro.FileDropUpload : Validation
    //==============================================================================

    _pFileDropUpload._validateFile = function (file)
    {
        if (!file)
        {
            return { valid: false, errorCode: "comp_filedropupload_file_null", errorMsg: "", hardReject: true };
        }

        // 최대 파일 수 — Hard Reject
        var currentCount = this._fileitems ? this._fileitems.length : 0;
        if (this._p_maxfilecount > 0 && currentCount >= this._p_maxfilecount)
        {
            return { valid: false, errorCode: "comp_filedropupload_count_exceeded", errorMsg: "", hardReject: true };
        }

        // 중복 파일 — Hard Reject
        if (this._p_preventduplicatefile)
        {
            var newName = file.name || "";
            var newSize = file.size || 0;
            var existingItems = this._fileitems;
            if (existingItems)
            {
                for (var di = 0; di < existingItems.length; di++)
                {
                    var existingFile = existingItems[di]._originalFile;
                    if (existingFile && existingFile.name === newName && existingFile.size === newSize)
                    {
                        return { valid: false, errorCode: "comp_filedropupload_duplicate_file", errorMsg: "", hardReject: true };
                    }
                }
            }
        }

        // 전체 파일 합산 크기 — Soft Reject
        if (this._p_maxtotalfilesize > 0)
        {
            var totalSize = this._getTotalFileSize() + (file.size || 0);
            if (totalSize > this._p_maxtotalfilesize)
            {
                return { valid: false, errorCode: "comp_filedropupload_totalsize_exceeded", errorMsg: "", hardReject: false };
            }
        }

        // 파일 크기 — Soft Reject
        var filesize = file.size || 0;
        if (this._p_maxfilesize > 0 && filesize > this._p_maxfilesize)
        {
            return { valid: false, errorCode: "comp_filedropupload_size_exceeded", errorMsg: "", hardReject: false };
        }

        // 빈 파일 — Hard Reject (0바이트는 업로드 불가)
        if (filesize === 0)
        {
            return { valid: false, errorCode: "comp_filedropupload_file_empty", errorMsg: "", hardReject: true };
        }

        // 파일 형식 — Hard Reject
        if (this._p_filefilter)
        {
            var ext = this._getFileExtension((file.name || "").toLowerCase());
            if (!this._isAllowedExtension(ext))
            {
                return { valid: false, errorCode: "comp_filedropupload_type_notallowed", errorMsg: "", hardReject: true };
            }
        }

        return { valid: true, errorCode: "", errorMsg: "", hardReject: false };
    };

    _pFileDropUpload._getTotalFileSize = function ()
    {
        var total = 0;
        var items = this._fileitems;
        if (items)
        {
            var len = items.length;
            for (var i = 0; i < len; i++)
            {
                var f = items[i]._originalFile;
                if (f)
                    total += f.size || 0;
            }
        }
        return total;
    };

    _pFileDropUpload._getFileExtension = function (filename)
    {
        if (!filename) return "";
        var dotIndex = filename.lastIndexOf(".");
        if (dotIndex === -1 || dotIndex === filename.length - 1) return "";
        return filename.substring(dotIndex + 1).toLowerCase();
    };

    _pFileDropUpload._createEmptyText = function ()
    {
        if (!this._filelist_control) return;
        if (this._emptytext) return;

        var emptytext = new nexacro.Static(
            "emptytext", 0, 0, "100%", "100%",
            null, null, null, null, null, null,
            this._filelist_control
        );
        emptytext.set_text(this._p_emptymessage);
        emptytext.set_textAlign("center");
        emptytext.set_visible(false);
        emptytext.createComponent(true);
        emptytext.on_created();
        this._emptytext = emptytext;
    };

    _pFileDropUpload._updateEmptyState = function ()
    {
        if (!this._emptytext) return;
        var show = (!this._p_showdropzone) && (this.getFileCount() === 0);
        this._emptytext.set_visible(show);
    };

    _pFileDropUpload._isAllowedExtension = function (ext)
    {
        if (!ext || !this._p_filefilter) return true;

        var allowed = this._p_filefilter.toLowerCase().split(",");

        // 동의어 확장자 인라인 매핑 (jpg↔jpeg, tif↔tiff)
        var check_exts = [ext];
        if (ext === "jpg")
        {
            check_exts.push("jpeg");
        }
        else if (ext === "jpeg")
        {
            check_exts.push("jpg");
        }
        else if (ext === "tif")
        {
            check_exts.push("tiff");
        }
        else if (ext === "tiff")
        {
            check_exts.push("tif");
        }

        for (var i = 0; i < allowed.length; i++)
        {
            var filter = allowed[i].trim();
            if (filter === "*" || filter === "*.*") return true;
            filter = filter.replace("*.", ".").replace("*", "");

            for (var s = 0; s < check_exts.length; s++)
            {
                if (filter === "." + check_exts[s] || filter === check_exts[s]) return true;
            }
        }
        return false;
    };

    //==============================================================================
    // nexacro.FileDropUpload : Drag & Drop
    //==============================================================================



    _pFileDropUpload = null;


    //==============================================================================
    //==============================================================================
    //
    //  SUB CONTROLS
    //
    //==============================================================================
    //==============================================================================

    //==============================================================================
    // nexacro._FileDropUploadDropzoneControl
    //==============================================================================
    nexacro._FileDropUploadDropzoneControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._text = null;      // 안내 문구 Static
        this._button = null;    // 파일 선택 버튼

        this._is_dragover = false;
    };

    var _pFileDropUploadDropzoneControl = nexacro._createPrototype(nexacro.Component, nexacro._FileDropUploadDropzoneControl);
    nexacro._FileDropUploadDropzoneControl.prototype = _pFileDropUploadDropzoneControl;
    _pFileDropUploadDropzoneControl._type_name = "FileDropUploadDropzoneControl";
    _pFileDropUploadDropzoneControl._is_subcontrol = true;

    _pFileDropUploadDropzoneControl.on_getIDCSSSelector = function ()
    {
        return "dropzone";
    };

    // dragover 상태일 때 CSS 상태를 "dragover"로 강제 반환
    _pFileDropUploadDropzoneControl.on_changeStatus = function (changestatus, value, applystatus, currentstatus, currentuserstatus)
    {
        if (this._statusmap.dragover && applystatus !== "disabled")
        {
            return "dragover";
        }
        return applystatus;
    };

    _pFileDropUploadDropzoneControl.on_create_contents = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            var parent = this._p_parent;
            var dropzoneText = parent._p_dropzonetext;

            var text = new nexacro.Static("text", 0, 0, 0, 0, null, null, null, null, null, null, this);
            text._setControl();
            text.set_text(dropzoneText);
            text.set_textAlign("center");
            text.createComponent(true);
            this._text = text;

            if (parent && parent._p_showdropzonebutton)
            {
                var button = new nexacro.Button("button", 0, 0, 100, 32, null, null, null, null, null, null, this);
                button._setControl();
                button.set_text(parent._p_dropzonebuttontext || parent._p_dropzonetext);
                button.createComponent(true);
                this._button = button;

                if (this._env && this._env._p_enableaccessibility)
                {
                    button._setAccessibilityLabel(parent._p_dropzonebuttontext || parent._p_dropzonetext);
                }
            }
        }
    };

    _pFileDropUploadDropzoneControl.on_created_contents = function (win)
    {
        if (this._text)
        {
            this._text.on_created(win);
        }
        if (this._button)
        {
            this._button.on_created(win);
        }
    };

    // 컨트롤 문자열 생성
    _pFileDropUploadDropzoneControl.on_create_contents_command = function ()
    {
        var str = "";
        if (this._text)
        {
            str += this._text.createCommand();
        }
        if (this._button)
        {
            str += this._button.createCommand();
        }
        return str;
    };

    // 컨트롤 문자열 생성 후 DOM에 붙이는 시점
    _pFileDropUploadDropzoneControl.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (this._text)
        {
            this._text.attachHandle(win);
        }
        if (this._button)
        {
            this._button.attachHandle(win);
        }
    };

    _pFileDropUploadDropzoneControl.on_destroy_contents = function ()
    {
        if (this._text)
        {
            this._text.destroy();
            this._text = null;
        }
        if (this._button)
        {
            this._button.destroy();
            this._button = null;
        }
    };

    _pFileDropUploadDropzoneControl.set_text = function (v)
    {
        if (this._text)
        {
            this._text.set_text(v);
        }
    };

    _pFileDropUploadDropzoneControl._recalcLayout = function ()
    {
        var width = this._getClientWidth();
        var height = this._getClientHeight();

        if (this._text)
        {
            if (this._button && this._button._p_visible)
            {
                var btn_size = this._button._on_getFitSize();
                var btn_w = btn_size[0];
                var btn_h = btn_size[1];
                var gap = this._p_parent ? this._p_parent._p_itemgap : null;
                if (gap == null) gap = 8;

                this._text.move(0, 0, width, height - btn_h - gap);
                this._button.move((width - btn_w) / 2, height - btn_h, btn_w, btn_h);
            }
            else
            {
                this._text.move(0, 0, width, height);
            }
        }
    };

    _pFileDropUploadDropzoneControl.on_change_containerRect = function (width, height)
    {
        if (this._is_created_contents)
        {
            this._recalcLayout();
        }
    };

    //==============================================================================
    // DropzoneControl : Drag & Drop (Grid 참고) 
    //==============================================================================

    _pFileDropUploadDropzoneControl.on_fire_user_ondragenter = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        //_pComponent.on_dragenter_basic_action 에서 mouseover만 함.
        // mouseover와 dragover 구분
        this._is_dragover = true;
        this._changeStatus("dragover", true);
        var elem = this.getElement();
        if (elem) elem.setElementStatus("dragover");

        return nexacro.Component.prototype.on_fire_user_ondragenter.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    _pFileDropUploadDropzoneControl.on_fire_user_ondragleave = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        //on_fire_user_ondragleave 벗어날때..
        this._is_dragover = false;
        this._changeStatus("dragover", false);
        var elem = this.getElement();
        if (elem) elem.setElementStatus("");

        return nexacro.Component.prototype.on_fire_user_ondragleave.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    // CompEventBase.js on_fire_user_ondrop으로 drop 수신 — Platform_HTML5.js에서 dataTransfer.items를 filelist로 전달
    // drop 파일 리스트 수신, _pGrid.on_fire_user_ondragenter 방식 return call
    _pFileDropUploadDropzoneControl.on_fire_user_ondrop = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        this._is_dragover = false;
        this._changeStatus("dragover", false); // 드래그 오버 상태 해제
        var elem = this.getElement();
        if (elem) elem.setElementStatus("");

        var parent = this._p_parent;
        if (parent)
        {
            parent._processDroppedData(filelist);
        }

        return nexacro.Component.prototype.on_fire_user_ondrop.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    _pFileDropUploadDropzoneControl._on_getFitSize = function ()
    {
        var total_w = 0;
        var total_h = 0;

        var border = this._getCurrentStyleBorder();
        if (border)
        {
            total_w += border._getBorderWidth();
            total_h += border._getBorderHeight();
        }

        var padding = this._getCurrentStylePadding();
        if (padding)
        {
            total_w += padding.left + padding.right;
            total_h += padding.top + padding.bottom;
        }

        if (this._text)
        {
            var text_size = this._text._on_getFitSize();
            total_h += text_size[1];
        }

        if (this._button && this._button._p_visible)
        {
            if (this._text)
            {
                var gap = this._p_parent ? this._p_parent._p_itemgap : null;
                if (gap == null) gap = 8;
                total_h += gap;
            }
            var btn_size = this._button._on_getFitSize();
            total_h += btn_size[1];
        }

        return [total_w, total_h];
    };

    _pFileDropUploadDropzoneControl = null;

    //==============================================================================
    // nexacro._FileDropUploadToolbarControl
    //==============================================================================
    nexacro._FileDropUploadToolbarControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._addbutton = null;
        this._deleteallbutton = null;
        this._uploadbutton = null;
    };

    var _pFileDropUploadToolbarControl = nexacro._createPrototype(nexacro.Component, nexacro._FileDropUploadToolbarControl);
    nexacro._FileDropUploadToolbarControl.prototype = _pFileDropUploadToolbarControl;
    _pFileDropUploadToolbarControl._type_name = "FileDropUploadToolbarControl";
    _pFileDropUploadToolbarControl._is_subcontrol = true;

    _pFileDropUploadToolbarControl.on_getIDCSSSelector = function ()
    {
        return "toolbar";
    };

    _pFileDropUploadToolbarControl.on_create_contents = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            var parent = this._p_parent;

            if (parent && parent._p_showaddbutton)
            {
                var addbutton = new nexacro.Button("addbutton", 0, 0, 60, 28, null, null, null, null, null, null, this);
                addbutton._setControl();
                addbutton.set_text(parent._p_addbuttontext);
                addbutton.createComponent(true);
                this._addbutton = addbutton;
            }

            if (parent && parent._p_showdeleteallbutton)
            {
                var deleteallbutton = new nexacro.Button("deleteallbutton", 0, 0, 80, 28, null, null, null, null, null, null, this);
                deleteallbutton._setControl();
                deleteallbutton.set_text(parent._p_deleteallbuttontext);
                deleteallbutton.createComponent(true);
                this._deleteallbutton = deleteallbutton;
            }

            if (parent && parent._p_showuploadbutton)
            {
                var uploadbutton = new nexacro.Button("uploadbutton", 0, 0, 80, 28, null, null, null, null, null, null, this);
                uploadbutton._setControl();
                uploadbutton.set_text(parent._p_uploadbuttontext);
                uploadbutton.createComponent(true);
                this._uploadbutton = uploadbutton;
            }
        }
    };

    _pFileDropUploadToolbarControl.on_created_contents = function (win)
    {
        if (this._addbutton)
        {
            this._addbutton.on_created(win);
        }
        if (this._deleteallbutton)
        {
            this._deleteallbutton.on_created(win);
        }
        if (this._uploadbutton)
        {
            this._uploadbutton.on_created(win);
        }
    };

    // 컨트롤 문자열 생성
    _pFileDropUploadToolbarControl.on_create_contents_command = function ()
    {
        var str = "";
        if (this._addbutton)
        {
            str += this._addbutton.createCommand();
        }
        if (this._deleteallbutton)
        {
            str += this._deleteallbutton.createCommand();
        }
        if (this._uploadbutton)
        {
            str += this._uploadbutton.createCommand();
        }
        return str;
    };

    // 컨트롤 문자열 생성 후 DOM에 붙이는 시점
    _pFileDropUploadToolbarControl.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (this._addbutton)
        {
            this._addbutton.attachHandle(win);
        }
        if (this._deleteallbutton)
        {
            this._deleteallbutton.attachHandle(win);
        }
        if (this._uploadbutton)
        {
            this._uploadbutton.attachHandle(win);
        }
    };

    _pFileDropUploadToolbarControl.on_destroy_contents = function ()
    {
        if (this._addbutton)
        {
            this._addbutton.destroy();
            this._addbutton = null;
        }
        if (this._deleteallbutton)
        {
            this._deleteallbutton.destroy();
            this._deleteallbutton = null;
        }
        if (this._uploadbutton)
        {
            this._uploadbutton.destroy();
            this._uploadbutton = null;
        }
    };

    _pFileDropUploadToolbarControl._recalcLayout = function ()
    {
        var width = this._getClientWidth();
        var height = this._getClientHeight();
        var gap = this._p_parent ? this._p_parent._p_itemgap : null;
        if (gap == null) gap = 8;

        var x = gap;

        if (this._addbutton && this._addbutton._p_visible)
        {
            var add_size = this._addbutton._on_getFitSize();
            var add_h = add_size[1];
            var add_y = Math.max(0, Math.floor((height - add_h) / 2));
            this._addbutton.move(x, add_y, add_size[0], add_h);
            x += add_size[0] + gap;
        }

        if (this._deleteallbutton && this._deleteallbutton._p_visible)
        {
            var del_size = this._deleteallbutton._on_getFitSize();
            var del_h = del_size[1];
            var del_y = Math.max(0, Math.floor((height - del_h) / 2));
            this._deleteallbutton.move(x, del_y, del_size[0], del_h);
            x += del_size[0] + gap;
        }

        if (this._uploadbutton && this._uploadbutton._p_visible)
        {
            var up_size = this._uploadbutton._on_getFitSize();
            var up_h = up_size[1];
            var up_y = Math.max(0, Math.floor((height - up_h) / 2));
            var up_x = Math.max(x, width - up_size[0] - gap);
            this._uploadbutton.move(up_x, up_y, up_size[0], up_h);
        }
    };

    _pFileDropUploadToolbarControl.on_change_containerRect = function (width, height)
    {
        if (this._is_created_contents)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUploadToolbarControl._on_getFitSize = function ()
    {
        var total_w = 0;
        var total_h = 0;

        var border = this._getCurrentStyleBorder();
        if (border)
        {
            total_w += border._getBorderWidth();
            total_h += border._getBorderHeight();
        }

        var padding = this._getCurrentStylePadding();
        if (padding)
        {
            total_w += padding.left + padding.right;
            total_h += padding.top + padding.bottom;
        }

        var max_btn_h = 0;
        var buttons = [this._addbutton, this._deleteallbutton, this._uploadbutton];
        for (var i = 0; i < buttons.length; i++)
        {
            if (buttons[i])
            {
                var btn_h = buttons[i]._on_getFitSize()[1];
                if (btn_h > max_btn_h) max_btn_h = btn_h;
            }
        }
        total_h += max_btn_h;

        return [total_w, total_h];
    };

    _pFileDropUploadToolbarControl = null;

    //==============================================================================
    // nexacro._FileDropUploadCounterControl
    //==============================================================================
    nexacro._FileDropUploadCounterControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Static.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pFileDropUploadCounterControl = nexacro._createPrototype(nexacro.Static, nexacro._FileDropUploadCounterControl);
    nexacro._FileDropUploadCounterControl.prototype = _pFileDropUploadCounterControl;
    _pFileDropUploadCounterControl._type_name = "FileDropUploadCounterControl";
    _pFileDropUploadCounterControl._is_subcontrol = true;

    _pFileDropUploadCounterControl.on_getIDCSSSelector = function ()
    {
        return "counter";
    };

    _pFileDropUploadCounterControl = null;

    //==============================================================================
    // nexacro._FileDropUploadListControl
    //==============================================================================
    nexacro._FileDropUploadListControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pFileDropUploadListControl = nexacro._createPrototype(nexacro.Component, nexacro._FileDropUploadListControl);
    nexacro._FileDropUploadListControl.prototype = _pFileDropUploadListControl;
    _pFileDropUploadListControl._type_name = "FileDropUploadListControl";
    _pFileDropUploadListControl._is_subcontrol = true;

    _pFileDropUploadListControl.on_getIDCSSSelector = function ()
    {
        return "filelist";
    };

    /* status */
    _pFileDropUploadListControl._is_scrollable = true;
    _pFileDropUploadListControl._use_native_scroll = true;

    _pFileDropUploadListControl._onRecalcScrollSize = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            var parent = this._p_parent;
            if (!parent) return;

            var items = parent._fileitems;
            var itemHeight = parent._getItemHeight();
            var itemGap = parent._p_itemgap;
            if (itemGap == null)
            {
                itemGap = 8;
            }
            var itemCount = items ? items.length : 0;
            var scrollHeight = itemCount > 0
                ? itemCount * itemHeight + (itemCount - 1) * itemGap
                : 0;
            var scrollWidth = this._getClientWidth();

            control_elem.setElementScrollMaxSize(scrollWidth, scrollHeight);
            this._onResetScrollBar();
        }
    };

    _pFileDropUploadListControl._getScrollType = function ()
    {
        return "vertical";
    };

    _pFileDropUploadListControl._getHScrollBarType = function ()
    {
        return "none";
    };

    // showdropzone=false일 때 FileList 영역에서 D&D 수신 (CompEventBase.js on_fire_user_ondragenter/ondragleave/ondrop)
    _pFileDropUploadListControl.on_fire_user_ondragenter = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        var parent = this._p_parent;
        if (!parent || parent._p_showdropzone) return true;

        this._changeStatus("dragover", true);
        var elem = this.getElement();
        if (elem) elem.setElementStatus("dragover");

        return nexacro.Component.prototype.on_fire_user_ondragenter.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    _pFileDropUploadListControl.on_fire_user_ondragleave = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        var parent = this._p_parent;
        if (!parent || parent._p_showdropzone) return true;

        this._changeStatus("dragover", false);
        var elem = this.getElement();
        if (elem) elem.setElementStatus("");

        return nexacro.Component.prototype.on_fire_user_ondragleave.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    _pFileDropUploadListControl.on_fire_user_ondrop = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
        from_comp, from_refer_comp, meta_key)
    {
        var parent = this._p_parent;
        if (!parent || parent._p_showdropzone) return true;

        this._changeStatus("dragover", false);
        var elem = this.getElement();
        if (elem) elem.setElementStatus("");

        parent._processDroppedData(filelist);

        return nexacro.Component.prototype.on_fire_user_ondrop.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY,
            from_comp, from_refer_comp, meta_key);
    };

    _pFileDropUploadListControl = null;

    //==============================================================================
    // nexacro._FileDropUploadItemControl (TabBar 방식: Component + _IconText 서브컨트롤)
    //==============================================================================
    nexacro._FileDropUploadItemControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._fileicon = null;
        this._filename = null;
        this._filesize = null;
        this._statusicon = null;
        this._progressbar = null;
        this._deletebutton = null;

        this._uploadStatus = "idle";  // "idle" | "uploading" | "complete" | "error"
        this._progress = 0;
        this._isValidationError = false;       // 검증 에러 여부 (Soft Reject)
        this._validationErrorCode = "";        // 검증 에러 코드
        this._validationErrorMsg = "";         // 검증 에러 메시지

        this._originalFile = null;
        this._filedropupload = null;           // ListControl 이 있어서 부모 컴포넌트 참조용 
        this._p_index = 0;
    };

    var _pFileDropUploadItemControl = nexacro._createPrototype(nexacro.Component, nexacro._FileDropUploadItemControl);
    nexacro._FileDropUploadItemControl.prototype = _pFileDropUploadItemControl;
    _pFileDropUploadItemControl._type_name = "FileDropUploadItemControl";
    _pFileDropUploadItemControl._is_subcontrol = true;
    _pFileDropUploadItemControl._p_accessibilityrole = "filedropuploaditem";
    _pFileDropUploadItemControl._p_tabstop = false;
    _pFileDropUploadItemControl._is_focus_accept = false;

    _pFileDropUploadItemControl.on_getIDCSSSelector = function ()
    {
        return "filedropuploaditem";
    };

    // userstatus 우선순위: error > uploading > complete
    _pFileDropUploadItemControl.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        if (value) return changestatus;

        var map = this._userstatusmap;
        if (map.error) return "error";
        if (map.uploading) return "uploading";
        if (map.complete) return "complete";
        return "";
    };

    _pFileDropUploadItemControl.on_create_contents = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            var fileicon = new nexacro._IconText("fileicon", 0, 0, 24, 24, null, null, null, null, null, null, this);
            fileicon._setControl();
            fileicon.on_changeUserStatus = function (changestatus, value) { return value ? changestatus : ""; };
            fileicon.createComponent(true);
            this._fileicon = fileicon;

            var filename = new nexacro._IconText("filename", 0, 0, 0, 0, null, null, null, null, null, null, this);
            filename._setControl();
            filename.set_textOverflow("ellipsis");
            filename.set_wordWrap("none");
            filename.createComponent(true);
            this._filename = filename;

            var filesize = new nexacro._IconText("filesize", 0, 0, 80, 24, null, null, null, null, null, null, this);
            filesize._setControl();
            filesize.set_text("");
            filesize.set_textAlign("right");
            filesize.createComponent(true);
            this._filesize = filesize;

            var statusicon = new nexacro._IconText("statusicon", 0, 0, 24, 24, null, null, null, null, null, null, this);
            statusicon._setControl();
            statusicon.on_changeUserStatus = function (changestatus, value)
            {
                if (value) return changestatus;
                var map = this._userstatusmap;
                if (map && map.error) return "error";
                if (map && map.uploading) return "uploading";
                if (map && map.complete) return "complete";
                return "";
            };
            statusicon.set_visible(false);
            statusicon.createComponent(true);
            this._statusicon = statusicon;

            var comp = this._getFileDropUpload();
            var displaytype = comp ? comp._p_progressdisplaytype : "progressbar";

            if (displaytype === "progressbar")
            {
                var progressbar = new nexacro.ProgressBar("progressbar", 0, 0, 100, 4, null, null, null, null, null, null, this);
                progressbar._setControl();
                progressbar.set_pos(0);
                progressbar.set_visible(false);
                progressbar.createComponent(true);
                this._progressbar = progressbar;
            }

            var deletebutton = new nexacro.Button("deletebutton", 0, 0, 24, 24, null, null, null, null, null, null, this);
            deletebutton._setControl();
            deletebutton.createComponent(true);
            this._deletebutton = deletebutton;
        }
    };

    _pFileDropUploadItemControl.on_created_contents = function (win)
    {
        if (this._fileicon) this._fileicon.on_created(win);
        if (this._filename) this._filename.on_created(win);
        if (this._filesize) this._filesize.on_created(win);
        if (this._statusicon) this._statusicon.on_created(win);
        if (this._progressbar) this._progressbar.on_created(win);
        if (this._deletebutton)
        {
            // deletebutton도 on_notify_itemclick을 등록하면,
            // 삭제 버튼을 눌렀을 때 onitemclick 이벤트와 onclick 이벤트가 발생 하는 문제 .
            // 그래서 deletebutton은 별도 이벤트 핸들러 등록.
            this._deletebutton.on_created(win);
            this._deletebutton._setEventHandler("onclick", this._on_deletebutton_onclick, this);
        }

        // PopupMenu 참고 notify_itemclick 이벤트 발생 위해서 item 전체에 onclick 이벤트 핸들러 등록.
        this._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._fileicon) this._fileicon._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._filename) this._filename._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._filesize) this._filesize._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._statusicon) this._statusicon._setEventHandler("onclick", this.on_notify_itemclick, this);
    };

    _pFileDropUploadItemControl.on_create_contents_command = function ()
    {
        var str = "";

        if (this._fileicon) str += this._fileicon.createCommand();
        if (this._filename) str += this._filename.createCommand();
        if (this._filesize) str += this._filesize.createCommand();
        if (this._statusicon) str += this._statusicon.createCommand();
        if (this._progressbar) str += this._progressbar.createCommand();
        if (this._deletebutton) str += this._deletebutton.createCommand();

        return str;
    };

    _pFileDropUploadItemControl.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (this._fileicon) this._fileicon.attachHandle(win);
        if (this._filename) this._filename.attachHandle(win);
        if (this._filesize) this._filesize.attachHandle(win);
        if (this._statusicon) this._statusicon.attachHandle(win);
        if (this._progressbar) this._progressbar.attachHandle(win);
        if (this._deletebutton)
        {
            // deletebutton도 on_notify_itemclick을 등록하면,
            // 삭제 버튼을 눌렀을 때 onitemclick 이벤트와 onclick 이벤트가 발생 하는 문제 .
            // 그래서 deletebutton은 별도 이벤트 핸들러 등록.
            this._deletebutton.attachHandle(win);
            this._deletebutton._setEventHandler("onclick", this._on_deletebutton_onclick, this);
        }

        // PopupMenu 참고 notify_itemclick 이벤트 발생 위해서 item 전체에 onclick 이벤트 핸들러 등록.
        this._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._fileicon) this._fileicon._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._filename) this._filename._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._filesize) this._filesize._setEventHandler("onclick", this.on_notify_itemclick, this);
        if (this._statusicon) this._statusicon._setEventHandler("onclick", this.on_notify_itemclick, this);
    };

    _pFileDropUploadItemControl.on_destroy_contents = function ()
    {
        if (this._fileicon) { this._fileicon.destroy(); this._fileicon = null; }
        if (this._filename) { this._filename.destroy(); this._filename = null; }
        if (this._filesize) { this._filesize.destroy(); this._filesize = null; }
        if (this._statusicon) { this._statusicon.destroy(); this._statusicon = null; }
        if (this._progressbar) { this._progressbar.destroy(); this._progressbar = null; }
        if (this._deletebutton) { this._deletebutton.destroy(); this._deletebutton = null; }

        this._originalFile = null;
        this._filedropupload = null;
    };

    _pFileDropUploadItemControl._recalcLayout = function ()
    {
        var width = this._getClientWidth();
        var height = this._getClientHeight();

        var parent = this._p_parent ? this._p_parent._p_parent : null;
        var gap = parent ? parent._p_itemgap : null;
        if (gap == null) gap = 8;

        var dim = Math.floor(height * 0.5);
        var x = gap;
        var right_x = width - gap;

        if (this._deletebutton)
        {
            this._deletebutton.move(right_x - dim, (height - dim) / 2, dim, dim);
            right_x -= dim + gap;
        }

        if (this._statusicon)
        {
            this._statusicon.move(right_x - dim, (height - dim) / 2, dim, dim);
            right_x -= dim + gap;
        }

        if (this._filesize)
        {
            var size_size = this._filesize._on_getFitSize();
            var size_w = size_size[0];
            this._filesize.move(right_x - size_w, 0, size_w, height);
            right_x -= size_w + gap;
        }

        if (this._fileicon)
        {
            this._fileicon.move(x, (height - dim) / 2, dim, dim);
            x += dim + gap;
        }

        if (this._filename)
        {
            var area_w = right_x - x;
            this._filename.move(x, 0, area_w, height);
        }

        if (this._progressbar)
        {
            var prog_size = this._progressbar._on_getFitSize();
            var prog_h = prog_size[1] > 0 ? prog_size[1] : 4;
            this._progressbar.move(0, height - prog_h, width, prog_h);
        }
    };

    _pFileDropUploadItemControl.on_change_containerRect = function (width, height)
    {
        if (this._is_created_contents)
        {
            this._recalcLayout();
        }
    };

    _pFileDropUploadItemControl.on_notify_itemclick = function (obj, e)
    {
        var comp = this._getFileDropUpload();
        if (comp && comp.on_fire_onitemclick)
        {
            var f = this._originalFile;
            comp.on_fire_onitemclick(this._p_index, f ? f.name : "", f ? f.size : 0);
        }
    };

    _pFileDropUploadItemControl._on_deletebutton_onclick = function ()
    {
        var comp = this._getFileDropUpload();
        if (comp && comp.deleteItem)
        {
            comp.deleteItem(this._p_index);
        }
    };

    _pFileDropUploadItemControl.setFileInfo = function (file)
    {
        this._originalFile = file;

        if (this._filename && file)
        {
            this._filename.set_text(file.name || "");
        }

        if (this._fileicon && file)
        {
            var fname = file.name || "";
            var dotIdx = fname.lastIndexOf(".");
            var ext = (dotIdx > 0 && dotIdx < fname.length - 1) ? fname.substring(dotIdx + 1).toLowerCase() : "";
            var comp = this._getFileDropUpload();
            var filetype_map = comp ? comp._filetypemap : null;
            var filetype = (filetype_map && filetype_map[ext]) ? filetype_map[ext] : "file";
            this._fileicon._changeUserStatus(filetype, true);
            if (this._fileicon._cssselector) this._fileicon._cssselector[filetype] = {};
            var fileicon_elem = this._fileicon.getElement();
            if (fileicon_elem) fileicon_elem.setElementUserStatus(filetype);
        }

        if (this._filesize && file)
        {
            this._filesize.set_text(this._formatBytes(file.size || 0));
        }

        if (this._deletebutton && file)
        {
            var comp = this._getFileDropUpload();
            if (comp && comp._env && comp._env._p_enableaccessibility)
            {
                this._deletebutton._setAccessibilityLabel(file.name + " delete");
            }
        }
    };

    _pFileDropUploadItemControl.setUploadStatus = function (status)
    {
        var oldStatus = this._uploadStatus;
        if (oldStatus === status) return;

        this._uploadStatus = status;

        this._userstatusmap.uploading = false;
        this._userstatusmap.complete = false;
        this._userstatusmap.error = false;

        var elem = this.getElement();

        if (status === "uploading" || status === "complete" || status === "error")
        {
            this._changeUserStatus(status, true);
            if (this._cssselector) this._cssselector[status] = {};
            if (elem) elem.setElementUserStatus(status);
        }
        else
        {
            this._changeUserStatus(oldStatus || "uploading", false);
            if (elem) elem.setElementUserStatus("");
        }

        this._onStatusChanged(status);
    };

    // statusicon userstatus 변경 → xcss background로 아이콘 표시
    _pFileDropUploadItemControl._setStatusIconUserStatus = function (status)
    {
        if (!this._statusicon) return;

        this._statusicon._changeUserStatus(status || "", !!status);
        if (status && this._statusicon._cssselector) this._statusicon._cssselector[status] = {};
        var elem = this._statusicon.getElement();
        if (elem) elem.setElementUserStatus(status || "");
    };

    // 상태 변경 UI 업데이트 (아이콘은 xcss에서 userstatus 기반으로 처리)
    _pFileDropUploadItemControl._onStatusChanged = function (status)
    {
        if (!this._statusicon && !this._progressbar) return;

        this._setStatusIconUserStatus(status === "idle" ? "" : status);

        if (status === "uploading")
        {
            var displayType = this._getProgressDisplayType();
            switch (displayType)
            {
                case "spinner":
                    if (this._progressbar) this._progressbar.set_visible(false);
                    this._statusicon.set_visible(true);
                    break;
                case "percent":
                    if (this._progressbar) this._progressbar.set_visible(false);
                    this._statusicon.set_text("0%");
                    this._statusicon.set_textAlign("center");
                    this._statusicon.set_visible(true);
                    break;
                case "progressbar":
                default:
                    this._statusicon.set_visible(false);
                    if (this._progressbar)
                    {
                        this._progressbar.set_visible(true);
                        this._progressbar.set_pos(this._progress || 0);
                    }
                    break;
            }
        }
        else if (status === "complete" || status === "error")
        {
            this._statusicon.set_text("");
            this._statusicon.set_visible(true);
            if (this._progressbar) this._progressbar.set_visible(false);
        }
        else  // idle
        {
            this._statusicon.set_visible(false);
            if (this._progressbar) this._progressbar.set_visible(false);
        }
    };

    _pFileDropUploadItemControl._getFileDropUpload = function ()
    {
        // 부모 체인 방식에서 ListControl이 있어서 직접 부모 참조는 안되고, 생성 시점에 컴포넌트 참조를 받아서 처리.
        return this._filedropupload;
    };

    _pFileDropUploadItemControl._getProgressDisplayType = function ()
    {
        var uploader = this._getFileDropUpload();
        if (uploader && uploader._p_progressdisplaytype !== undefined)
        {
            return uploader._p_progressdisplaytype || "progressbar";
        }
        return "progressbar";
    };


    _pFileDropUploadItemControl.setProgress = function (percent)
    {
        this._progress = percent;

        if (this._uploadStatus === "uploading")
        {
            var displayType = this._getProgressDisplayType();
            if (displayType === "progressbar" && this._progressbar)
            {
                this._progressbar.set_visible(true);
                this._progressbar.set_pos(percent);
            }
            else if (displayType === "percent")
            {
                if (this._statusicon)
                {
                    this._statusicon.set_text(Math.round(percent) + "%");
                }
            }
        }
    };

    _pFileDropUploadItemControl._formatBytes = function (bytes)
    {
        if (bytes === 0) return "0 B";
        var k = 1024;
        var sizes = ["B", "KB", "MB", "GB", "TB"];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        if (i >= sizes.length) i = sizes.length - 1;
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
    };

    _pFileDropUploadItemControl._on_getFitSize = function ()
    {
        var total_w = 0;
        var total_h = 0;

        var border = this._getCurrentStyleBorder();
        if (border)
        {
            total_w += border._getBorderWidth();
            total_h += border._getBorderHeight();
        }

        var padding = this._getCurrentStylePadding();
        if (padding)
        {
            total_w += padding.left + padding.right;
            total_h += padding.top + padding.bottom;
        }

        var max_child_h = 0;
        var children = [this._fileicon, this._filename, this._filesize, this._deletebutton];
        for (var i = 0; i < children.length; i++)
        {
            if (children[i])
            {
                var child_h = children[i]._on_getFitSize()[1];
                if (child_h > max_child_h) max_child_h = child_h;
            }
        }
        total_h += max_child_h;

        return [total_w, total_h];
    };

    _pFileDropUploadItemControl = null;
}