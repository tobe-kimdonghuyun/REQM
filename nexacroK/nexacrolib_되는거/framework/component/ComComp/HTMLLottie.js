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

if (!nexacro.HTMLLottie)
{
	//==============================================================================
    // nexacro.HTMLLottieEventInfo
    //==============================================================================
    nexacro.HTMLLottieStatusEventInfo = function (obj, id, status, currentFrame, totalFrame, direction)
    {
        this.id = this.eventid = id || "onstatuschanged";
        this.fromobject = this.fromreferenceobject = obj;

        this.lottieStatus = status;

        this.currentFrame = currentFrame;
        this.totalFrame = totalFrame;

        this.direction = direction;
    };

    var _pHTMLLottieStatusEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.HTMLLottieStatusEventInfo);
    nexacro.HTMLLottieStatusEventInfo.prototype = _pHTMLLottieStatusEventInfo;
    _pHTMLLottieStatusEventInfo._type_name = "HTMLLottieStatusEventInfo";

    _pHTMLLottieStatusEventInfo = null;
	//==============================================================================
    // nexacro.HTMLLottie
    //==============================================================================
    nexacro.HTMLLottie = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {        
        nexacro.HTMLContentBox.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pHTMLLottie = nexacro._createPrototype(nexacro.HTMLContentBox, nexacro.HTMLLottie);
    nexacro.HTMLLottie.prototype = _pHTMLLottie;
    _pHTMLLottie._type_name = "HTMLLottie";	
	
    _pHTMLLottie._event_list = {
        // "onlottiecomplete": 1,
        // "onlottieloopcomplete": 1,
        // "onlottieenterframe": 1,
        // "onlottiesegmentstart": 1,
        // "onlottieconfigready": 1,
        // "onlottiedataready": 1,
        // "onlottiedomloaded": 1,
        // "onlottiedestroy": 1,
        // "onlottieerror": 1,
		"oncomplete": 1,
		"onstatuschanged": 1,
        ...nexacro.HTMLContentBox.prototype._event_list
    };

    /* default properties */
	_pHTMLLottie._p_url = "";
	_pHTMLLottie._p_renderer = "svg";
	_pHTMLLottie._p_loop = true;
	_pHTMLLottie._p_autoplay = true;
	_pHTMLLottie._p_direction = "forward";
	_pHTMLLottie._p_speed = 1;

	_pHTMLLottie._lottie = null;
	_pHTMLLottie._is_lottie_created = false;
	_pHTMLLottie.lottieStatus = "";
	_pHTMLLottie._lottiePlayerId = "";

    //===============================================================
    // nexacro.HTMLLottie : Create & Update & destroy
    //===============================================================
	_pHTMLLottie.on_after_created = function ()
    {
		nexacro.HTMLContentBox.prototype.on_after_created.call(this);

		this._lottiePlayerId = (this._unique_id || this.id) + ".lottie-player";
		this._p_content = 
		`
		<div id='${this._lottiePlayerId}' style='width: 100%; height: 100%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;'>
		</div>
		`;
		// Fallback UI 방안 결정시 lottie-player애 추가 부탁드립니다.
		//<div id='lottie-loading' style='z-index:100;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:block;'>로딩중</div>
		//<div id='lottie-error' style='z-index:100;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:none;'>에러</div>
		this.on_apply_content();

		this.on_apply_lottie_properties();
		this._createLottie();
    };

	_pHTMLLottie.on_apply_lottie_properties = function ()
	{
		if (!this._lottie) return;
		
		this.on_apply_loop();
		this.on_apply_speed();
		this.on_apply_direction();

		this.on_apply_autoplay();
	};	

	_pHTMLLottie.on_destroy_contents = function ()
	{
		nexacro.HTMLContentBox.prototype.on_destroy_contents.call(this);

		if (this._lottie)
		{
			this._lottie.destroy();
			this._lottie = null;
			this._is_lottie_created = false;
		}
	};

    //===============================================================
    // nexacro.HTMLLottie : Override
    //===============================================================
	_pHTMLLottie.on_apply_innerdataset = function ()
	{
		nexacro.HTMLContentBox.prototype.on_apply_innerdataset.call(this);
	};

    //===============================================================
    // nexacro.HTMLLottie : Properties
    //===============================================================

	_pHTMLLottie.set_content = function (v)
	{
		if (v != this._p_content)
		{
			this._p_content = v;
			this.on_apply_content();	
		}
	};
	
	_pHTMLLottie.on_apply_content = function ()
	{
		nexacro.HTMLContentBox.prototype.on_apply_content.call(this);
	};
	
	_pHTMLLottie.set_url = function (v)
	{
		if (v != this._p_url)
		{
			this._p_url = v;
			this.on_apply_url();
		}
	};

	_pHTMLLottie.on_apply_url = function ()
	{
		if (!this._lottie) return;

		this._createLottie();
	};

    _pHTMLLottie.set_renderer = function (v)
    {
        if (v != this._p_renderer)
        {
            this._p_renderer = v;
            this.on_apply_renderer();
        }
    };

    _pHTMLLottie.on_apply_renderer = function ()
    {
		if (!this._lottie) return;

		this.on_destroy_contents();
		this._createLottie();
    };

    _pHTMLLottie.set_loop = function (v) 
	{
		v = nexacro._toBoolean(v);
		if (v != this._p_loop)
		{
			this._p_loop = v;
			this.on_apply_loop();
		}
    };

	_pHTMLLottie.on_apply_loop = function ()
	{
		if (!this._lottie) return;
		this._lottie.setLoop(this._p_loop);
	};
    
	_pHTMLLottie.set_autoplay = function (v)
	{
		v = nexacro._toBoolean(v);
		if (v != this._p_autoplay)
		{
			this._p_autoplay = v;
			this.on_apply_autoplay();
		}
	};

	_pHTMLLottie.on_apply_autoplay = function ()
	{
		if (!this._lottie) return;
		
		// lottie-web에서 setAutoplay를 API가 존재하지 않음
		this.on_destroy_contents();
		this._createLottie();
	};

	_pHTMLLottie.set_speed = function (v)
	{
		if (v != this._p_speed)
		{
			this._p_speed = v;
			this.on_apply_speed();
		}
	};

	_pHTMLLottie.on_apply_speed = function ()
	{
		if (!this._lottie) return;
		this._lottie.setSpeed(this._p_speed);
	};

	_pHTMLLottie.set_direction = function (v)
	{
		const DIRECTION_ENUM = ["forward", "reverse"];

		if (DIRECTION_ENUM.indexOf(v) == -1) return;
		if (v != this._p_direction)
		{
			this._p_direction = v;
			this.on_apply_direction();
		}
	};

	_pHTMLLottie.on_apply_direction = function ()
	{
		if (!this._lottie) return;
		
		let _direction = 1;
		if (this._p_direction == "reverse") _direction = -1;

		this._lottie.setDirection(_direction);
	};

	_pHTMLLottie._setEventHandlerToLottie = function ()
	{
		var _lottie = this._lottie;
		if (!_lottie) return;
		
		_lottie.addEventListener("complete", this._on_lottie_complete.bind(this));
		_lottie.addEventListener("loopComplete", this._on_lottie_loopcomplete.bind(this));
		// _lottie.addEventListener("enterFrame", this._on_lottie_enterframe.bind(this));
		// _lottie.addEventListener("segmentStart", this._on_lottie_segmentstart.bind(this));
		// _lottie.addEventListener("config_ready", this._on_lottie_configready.bind(this));
		// _lottie.addEventListener("data_ready", this._on_lottie_dataready.bind(this));
		_lottie.addEventListener("DOMLoaded", this._on_lottie_domloaded.bind(this));
		// _lottie.addEventListener("destroy", this._on_lottie_destroy.bind(this));
		_lottie.addEventListener("data_failed", this._on_lottie_datafailed.bind(this));

		/* status Listener event */
		_lottie.addEventListener("_play", this._on_lottie_play.bind(this));
		_lottie.addEventListener("_active", this._on_lottie_active.bind(this));
		_lottie.addEventListener("_pause", this._on_lottie_pause.bind(this));
		_lottie.addEventListener("_idle", this._on_lottie_idle.bind(this));
	};
    
	_pHTMLLottie._properties = [
		{name: "content", readonly : true }, 
		{ name: "url" }, 
		{ name: "renderer" }, 
		{ name: "loop" }, 
		{ name: "autoplay" },
		{ name: "speed" },
		{ name: "direction" }
	];
    nexacro._defineProperties(_pHTMLLottie, _pHTMLLottie._properties);
	
    //===============================================================
    // nexacro.HTMLLottie : Methods
    //===============================================================
	_pHTMLLottie._createLottie = function ()
	{
		if (!nexacro.Lottie) return;

		if (this._p_url)
		{
			if (this._p_url.indexOf("::") > -1 && this._p_url.endsWith(".json")) // Service css file style
			{
				var env = this._getForm()._getEnvironment();
				var json_url = env?._getServiceLocation(this._p_url, this._getForm()._getRefFormBaseUrl());        
				this._p_url = json_url;
			}
		}

		var control_elem = this.getElement();
		var container = control_elem ? control_elem : null;

		if (!container) return;
		if (this._lottie) this.on_destroy_contents();

		// 자신의 요소 컨텍스트 내에서 플레이어를 찾음
		let player = this._getElementById(this._lottiePlayerId);
		if (!player) return;

		/////////////////////////////
		// __TEST__ error occur
		// let _url = this._p_url;
		// this._p_url = _url + "x";
		/////////////////////////////
		
		this._lottie = nexacro.Lottie.loadAnimation({
			container: player,
			path: this._p_url,
			renderer: this._p_renderer,
			loop: this._p_loop,
			autoplay: this._p_autoplay,
		});

		this._setEventHandlerToLottie();
		this._is_lottie_created = true;

		this.on_apply_direction();
		this.on_apply_speed();
	};

	// PRIVATE LOTTIE-WEB EVENT STATUS CHANGE
	_pHTMLLottie._on_lottie_play = function (e)
	{
		if(!this._lottie.isPaused)
		{
			this._lottie_status = "play";
			this.on_fire_onstatuschanged(this, e);
		}
	};

	_pHTMLLottie._on_lottie_active = function (e)
	{
		if(!this._lottie._idle)
		{
			this._lottie_status = "active";
			this.on_fire_onstatuschanged(this, e);
		}
	};

	_pHTMLLottie._on_lottie_pause = function (e)
	{	
		if (this._lottie.isPaused)
		{
			this._lottie_status = "pause";
			this.on_fire_onstatuschanged(this, e);
		}
	};

	_pHTMLLottie._on_lottie_idle = function (e)
	{
		if (this._lottie._idle)
		{
			this._lottie_status = "idle";
			this.on_fire_onstatuschanged(this, e);
		}
	};

	_pHTMLLottie.on_fire_onstatuschanged = function (obj, e)
	{
		if (this.onstatuschanged && this.onstatuschanged._has_handlers)
		{
			const _lottie = this._lottie;
			var evt = new nexacro.HTMLLottieStatusEventInfo(obj, "onstatuschanged", this._lottie_status, _lottie.currentFrame, _lottie.totalFrames, _lottie.playDirection);
			this.onstatuschanged._fireEvent(this, evt);
		}
	};

	_pHTMLLottie._on_lottie_complete = function (e)
	{
		this.on_fire_oncomplete(this, e);	
	};

	_pHTMLLottie._on_lottie_loopcomplete = function (e)
	{
		this.on_fire_oncomplete(this, e);	
	};

	_pHTMLLottie.on_fire_oncomplete = function (obj, e)
	{
		if (this.oncomplete && this.oncomplete._has_handlers)
		{
			const _lottie = this._lottie;
			var evt = new nexacro.HTMLLottieStatusEventInfo(obj, "oncomplete", this._lottie_status, _lottie.currentFrame, _lottie.totalFrames, _lottie.playDirection);
            //evt.eventid = "onlottiecomplete";
			this.oncomplete._fireEvent(this, evt);
		}
	};


	// _pHTMLLottie._on_lottie_enterframe = function (e)
	// {
	// 	this.on_fire_onlottieenterframe(this, e);
	// };

    // _pHTMLLottie.on_fire_onlottieenterframe = function (obj, e)
	// {
	// 	if (this.onlottieenterframe && this.onlottieenterframe._has_handlers)
	// 	{
	// 		var evt = new nexacro.EventInfo(obj, "onlottieenterframe");
    //         //evt.eventid = "onlottieenterframe";
    //         evt.currentTime = e.currentTime;
    //         evt.direction = e.direction;
    //         evt.totalTime = e.totalTime;
	// 		this.onlottieenterframe._fireEvent(this, evt);
	// 	}
	// };

	// _pHTMLLottie._on_lottie_segmentstart = function (e)
	// {
	// 	this.on_fire_onlottiesegmentstart(this, e);
	// };

    // _pHTMLLottie.on_fire_onlottiesegmentstart = function (obj, e)
	// {
	// 	if (this.onlottiesegmentstart && this.onlottiesegmentstart._has_handlers)
	// 	{
	// 		var evt = new nexacro.EventInfo(obj, "onlottiesegmentstart");
    //         //evt.eventid = "onlottiesegmentstart";
	// 		this.onlottiesegmentstart._fireEvent(this, evt);
	// 	}
	// };

	// _pHTMLLottie._on_lottie_configready = function (e)
	// {
	// 	this.on_fire_onlottieconfigready(this, e);
	// };

    // _pHTMLLottie.on_fire_onlottieconfigready = function (obj, e)
	// {
	// 	if (this.onlottieconfigready && this.onlottieconfigready._has_handlers)
	// 	{
	// 		var evt = new nexacro.EventInfo(obj, "onlottieconfigready");
    //         //evt.eventid = "onlottieconfigready";
	// 		this.onlottieconfigready._fireEvent(this, evt);
	// 	}
	// };

	// _pHTMLLottie._on_lottie_dataready = function (e)
	// {
	// 	this.on_fire_onlottiedataready(this, e);
	// };

    // _pHTMLLottie.on_fire_onlottiedataready = function (obj, e)
	// {
	// 	if (this.onlottiedataready && this.onlottiedataready._has_handlers)
	// 	{
	// 		var evt = new nexacro.EventInfo(obj, "onlottiedataready");
    //         //evt.eventid = "onlottiedataready";
	// 		this.onlottiedataready._fireEvent(this, evt);
	// 	}
	// };

	_pHTMLLottie._on_lottie_domloaded = function (e)
	{
		// var loading = document.getElementById("lottie-loading");
		// var error = document.getElementById("lottie-error");
		// if (loading)
		// {
		// 	loading.style.display = "none";
		// }
		// if (error)
		// {
		// 	error.style.display = "none";
		// }
		this.on_fire_oncontentloaded(this, e);
	};

	_pHTMLLottie.on_fire_oncontentloaded = function (obj)
    {
        let _lottie = this._lottie;
		if (this.oncontentloaded && this.oncontentloaded._has_handlers)
        {
            var evt = new nexacro.HTMLLottieStatusEventInfo(obj, "oncontentloaded", this._lottie_status, _lottie.currentFrame, _lottie.totalFrames, _lottie.playDirection);
            var ret = this.oncontentloaded._fireEvent(this, evt);
            return ret;
        }
        return true;
    };

    // _pHTMLLottie.on_fire_onlottiedomloaded = function (obj, e)
	// {
	// 	if (this.onlottiedomloaded && this.onlottiedomloaded._has_handlers)
	// 	{
	// 		var evt = new nexacro.EventInfo(obj, "onlottiedomloaded");
    //         //evt.eventid = "onlottiedomloaded";
	// 		this.onlottiedomloaded._fireEvent(this, evt);
	// 	}
	// };

	// _pHTMLLottie._on_lottie_destroy = function (e)
	// {
	// 	this.on_fire_onlottiedestroy(this, e);
	// };

    // _pHTMLLottie.on_fire_onlottiedestroy = function (obj, e)
	// {
	// 	if (this.ondestroy && this.ondestroy._has_handlers)
	// 	{
	// 		var evt = new nexacro.HtmlLottieStatusEventInfo(obj, "ondestroy", "destroyed", e.currentFrame, e.totalFrames, e.playDirection);
	// 		this.ondestroy._fireEvent(this, evt);
	// 	}
	// };

	_pHTMLLottie._on_lottie_datafailed = function (e)
	{
		// var loading = document.getElementById("lottie-loading");
		// var error = document.getElementById("lottie-error");
		// if (loading)
		// {
		// 	loading.style.display = "none";
		// }
		// if (error)
		// {
		// 	error.style.display = "block";
		// }
		this.on_fire_onerror(this, e);
	};

    _pHTMLLottie.on_fire_onerror = function (obj, e)
	{
		if (this.onerror && this.onerror._has_handlers)
		{
			var evt = new nexacro.ContentErrorEventInfo(obj, "onerror", "Lottie ObjectError", "ScriptLoadError");
			this.onerror._fireEvent(this, evt);
		}
	};

	//===============================================================
    // nexacro.HTMLLottie : Event Handlers
    //===============================================================


	//===============================================================
    // nexacro.HTMLLottie : Logical Part
    //===============================================================

	//===============================================================
    // nexacro.HTMLLottie : Util Function
    //===============================================================
	_pHTMLLottie.getLottie = function ()
	{
		return this._lottie;
	};
	
	_pHTMLLottie._getElementById = function (id)
    {
        const control_elem = this.getElement();
        if (!control_elem)
            return;

        return control_elem._getElementById(id);
    };

	_pHTMLLottie._createContentNode = function (tagname, attributes, innerHTML)
	{
        const control_elem = this.getElement();
        if (!control_elem)
            return;

        return control_elem._createContentNode(tagname, attributes, innerHTML);
	};

	_pHTMLLottie._getLoop = function ()
	{
		return this._loop;
	};

	_pHTMLLottie._getAutoplay = function ()
	{
		return this._autoplay;
	};

	_pHTMLLottie.getLottiePlayerId = function ()
	{
		return this._lottiePlayerId;
	};

    //===============================================================
    // nexacro.HTMLLottie : Playback Control
    //===============================================================
    _pHTMLLottie.play = function () 
    {
        if (this._lottie) this._lottie.play();
    };

    _pHTMLLottie.stop = function () 
    {
        if (this._lottie) this._lottie.stop();
    };

    _pHTMLLottie.pause = function () 
    {
        if (this._lottie) this._lottie.pause();
    };

    _pHTMLLottie.togglePause = function () 
    {
        if (this._lottie) this._lottie.togglePause();
    };

	_pHTMLLottie.reverse = function () 
    {
        if (this._lottie) this._lottie.setDirection(-1);
    };


    //===============================================================
    // nexacro.HTMLLottie : Seek & Navigation
    //===============================================================
    _pHTMLLottie.goToAndStop = function (value, isFrame) 
    {
        if (this._lottie) this._lottie.goToAndStop(value, isFrame);
    };

    _pHTMLLottie.goToAndPlay = function (value, isFrame) 
    {
        if (this._lottie) this._lottie.goToAndPlay(value, isFrame);
    };

    //===============================================================
    // nexacro.HTMLLottie : Segment Control
    //===============================================================
    _pHTMLLottie.playSegments = function (segments, forceFlag) 
    {
        if (this._lottie) this._lottie.playSegments(segments, forceFlag);
    };

    _pHTMLLottie.resetSegments = function (forceFlag) 
    {
        if (this._lottie) this._lottie.resetSegments(forceFlag);
    };

    //===============================================================
    // nexacro.HTMLLottie : Inspection & Configuration
    //===============================================================
    _pHTMLLottie.getDuration = function (inFrames) 
    {
        if (this._lottie) return this._lottie.getDuration(inFrames);
        return 0;
    };

    _pHTMLLottie.setSubframe = function (useSubFrames) 
    {
        if (this._lottie) this._lottie.setSubframe(useSubFrames);
    };

	_pHTMLLottie = null;
}