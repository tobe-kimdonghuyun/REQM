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

//==============================================================================
// nexacro Platform Objects
//==============================================================================

if (!nexacro._bInitPlatform)
{
    "use strict";

    var _process = true;
    var _global_context = this ? this : globalThis;


    nexacro._bInitPlatform = true;

    nexacro.isDesignMode = false;
    nexacro.isPluginMode = nexacro._isPluginMode();
    //for RTL IMPLEMENTATION;    
    nexacro._SupportRTL = true;

    nexacro._isTouchInteraction = (nexacro._Browser == "MobileSafari" || nexacro._OS == "Android" || nexacro._OS == "iOS" || nexacro._OS == "Windows Phone" || nexacro._AndroidDesktopMode); //nexacro._OS == "wp7"
	nexacro._SupportOrientation = ((typeof window.orientation != 'undefined') && ('onorientationchange' in window));
	nexacro._SupportTouch = ("ontouchstart" in window || ((window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (window.navigator.maxTouchPoints > 0) ? true : false));
	nexacro._SupportTouchEvent = (nexacro._SupportTouch || typeof TouchEvent !== 'undefined'); // for event test
	nexacro._SupportAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) ? true : false;
	nexacro._resize_popup_inbound = true;
	nexacro._is_first_touch = true;
	nexacro._last_eventname = "";

    nexacro.HTMLSysEvent = function (container = undefined)
	{
		this.container = container;
		this._cur_over_elem = null;
		this._win = undefined;
		// (Higher-Order Function, HOF) 중복 코드 제거

		this._containerChanged = (win, evt) => 
		{

			if (win.handle)
			{
				let target = (win.handle == evt.target || win.handle.contains(evt.target));
				let related = target;
				if (evt.relatedTarget)
					related = (win.handle == evt.relatedTarget || win.handle.contains(evt.relatedTarget));
				else
				{
					// 내 컨테이너 내의 focus를 blur 처리 했다는 것(유지)
					if (win._doc.activeElement == win._doc.body)
						related = target;
					else
						related = !target;
				}

				if (target == true && target !== related)
				{
					return target;
				}
			}
			else
			{
				return win._is_active_window;
			}

			return false;


		}

		this._syshandler_onpopstate_forward = this.createSafeEventHandler((evt) => 
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onpopstate(this, evt, context);
		});

		this._syshandler_onmessage_forward = this.createSafeEventHandler((evt) => 
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onmessage(this, evt, context);
		});
		this._syshandler_onmousedown_forward = this.createSafeEventHandler((evt) => 
		{
			const { win, elem, context } = this.GetEventContext(evt);
			if (nexacro._isTouchInteraction)
			{
				// TODO Android에서 Input Caret이동을 원할 경우 mouse이벤트도
				// preventDefault 하지 않아야 한다. 아래 주석처리하고 return만 해야 함.
				// -> mousedown, mouseup, mousemove		
				const last_focused_elem = win._last_focused_elem;

				if (elem instanceof nexacro.HTMLControlElement) 
				{
					const target = evt.target;
					const isHTMLFocusable = (element) => 
					{
						if (!element) return false;

						if (element.matches("INPUT, TEXTAREA, SELECT, BUTTON, A[href], IFRAME"))
							return true;

						if (element.hasAttribute("contenteditable") && element.getAttribute("contenteditable") !== "false")
							return true;

						return false;
					};

					if (isHTMLFocusable(target)) 
					{
						target.focus();
						return;
					}
				}
				if (nexacro._OS == "Android")
				{
					// 대상이 Input이면 Caret 이동 등 처리를 위해 Pass.
					// 대상이 Input이 아니면 preventDefault (node가 포커스를 가져가선 안됨)
					if (elem)
					{
						if (elem.isInputElement() && elem.enable)
						{
							//
						}
						else
						{
							if (!last_focused_elem || !(last_focused_elem.isInputElement() && last_focused_elem.enable))
							{
								if ((elem instanceof nexacro.HTMLControlElement ||
									nexacro._isWebTypeElement(last_focused_elem) ||
									elem instanceof nexacro.IconTextControlElement) == false)
								evt.preventDefault();
							}
						}
					}
					// if (nexacro._Browser != "Chrome" || nexacro._BrowserVersion < 58 || nexacro._is_touch_flag)
					// {
					// 	nexacro._is_touch_flag = false;
					// 	//return false;
					// }
				}
				else 
				{
					if (nexacro._SystemTypeEx == "ProforMouseEvent")
					{
						if (elem._is_accept_touch && !elem._is_accept_touch(win))
						{
							nexacro._stopSysEvent(evt);
							//return false;
						}
						else if (elem.parent)
						{
							if (nexacro._ListViewCellControl && elem.parent instanceof nexacro._ListViewCellControl && elem.parent._subComp && elem.parent._subComp._isEditableComponent && elem.parent._subComp._isEditableComponent() && elem.parent._subComp._input_element && elem.parent._subComp._input_element._is_accept_touch)
							{
								if (!elem.parent._subComp._input_element._is_accept_touch(win))
								{
									nexacro._stopSysEvent(evt);
									//return false;
								}
							}
							else if (elem.parent._isEditableComponent && elem.parent._isEditableComponent() && elem.parent._input_element && elem.parent._input_element._is_accept_touch)
							{
								if (!elem.parent._input_element._is_accept_touch(win))
								{
									nexacro._stopSysEvent(evt);
									//return false;
								}
							}
						}
					}

					let prevent = true;
					if (nexacro._OS == "iOS" && nexacro._SystemType == "ipad" && nexacro._SystemTypeEx == "ProforMouseEvent")  // ipad os 13.4 부터 mouse event가 지원됨.
					{
						if (evt.buttons > 0)    // 손가락 터치시에도 mouseevent가 같이 들어와 onclick이 두번 타는 문제로 체크 필수
						{
							if (last_focused_elem && last_focused_elem.isInputElement() && last_focused_elem.isComposing())
								prevent = true;
							else
								prevent = false;
						}
					}

					if (prevent)
					{
						if (elem && !elem.isInputElement())
						{
							if ((elem instanceof nexacro.HTMLControlElement ||
								nexacro._isWebTypeElement(last_focused_elem) ||
								elem instanceof nexacro.IconTextControlElement) == false)
							{
								evt.stopPropagation();
								evt.preventDefault();
							}
						}
						//return false;
					}


				}
			}
			return nexacro._syshandler_onmousedown(this, evt, context);
		});

		this._syshandler_onmouseup_forward = this.createSafeEventHandler((evt) =>
		{

			const { win, elem, context } = this.GetEventContext(evt);

			if (nexacro._isTouchInteraction)
			{
				if (nexacro._OS != "Android")
				{
					nexacro._stopSysEvent(evt);
				}
			}

			return nexacro._syshandler_onmouseup(this, evt, context);
		});

		this._syshandler_lock_onmouseup_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_lock_onmouseup(this, evt, context);
		}

		this._syshandler_onclick_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onclick(this, evt, context);
		});

		this._syshandler_onmousemove_forward = this.createSafeEventHandler((evt) =>
		{
			const { win, elem, context } = this.GetEventContext(evt);

			if (nexacro._isTouchInteraction)
			{
				if (nexacro._OS != "Android")
				{
					if (nexacro._SystemTypeEx == "ProforMouseEvent")
					{
						if (elem._is_accept_touch)
						{
							if (!elem._is_accept_touch(win))
							{
								nexacro._stopSysEvent(evt);
								//return false;
							}
						}
						else if (elem.parent)
						{
							if (nexacro._ListViewCellControl && elem.parent instanceof nexacro._ListViewCellControl && elem.parent._subComp && elem.parent._subComp._isEditableComponent && elem.parent._subComp._isEditableComponent() && elem.parent._subComp._input_element && elem.parent._subComp._input_element._is_accept_touch)
							{
								if (!elem.parent._subComp._input_element._is_accept_touch(win))
								{
									nexacro._stopSysEvent(evt);
									//return false;
								}
							}
							else if (elem.parent._isEditableComponent && elem.parent._isEditableComponent() && elem.parent._input_element && elem.parent._input_element._is_accept_touch)
							{
								if (!elem.parent._input_element._is_accept_touch(win))
								{
									nexacro._stopSysEvent(evt);
									//return false;
								}
							}
						}
					}
					evt.stopPropagation();
					//  evt.preventDefault();
				}
				// if (nexacro._OS == "iOS" && nexacro._SystemType == "ipad" && nexacro._SystemTypeEx == "ProforMouseEvent")  // ipad os 13.4 부터 mouse event가 지원됨.
				// 	return nexacro._syshandler_onmousemove(this, evt, context);
				//	else
				//	return false;
			}
			return nexacro._syshandler_onmousemove(this, evt, context);

		});

		this._syshandler_lock_onmousemove_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);

			return nexacro._syshandler_lock_onmousemove(this, evt, context);
		};

		this._checkTouchPrevent = (win, elem, evt) =>
		{
			if (elem._is_accept_touch)
			{
				if ((!(elem instanceof nexacro.TextBoxElement) || (elem instanceof nexacro.TextBoxElement && elem.parent.parent._isEditableComponent && elem.parent.parent._isEditableComponent())) && !elem._is_accept_touch(win))                        
				{
					const comp1 = win.findComponent(elem);
					const comp2 = win._last_focused_elem ? win.findComponent(win._last_focused_elem) : null;

					if (!(elem instanceof nexacro.TextBoxElement && comp1._getRootComponent(comp1) instanceof nexacro.Combo && comp2 && comp2._getRootComponent(comp2) instanceof nexacro.Combo))
					{
						nexacro._stopSysEvent(evt);
						return false;
					}
				}
			}
			else if (elem.parent)                    
			{
				if (nexacro._ListViewCellControl && elem.parent instanceof nexacro._ListViewCellControl && elem.parent._subComp && elem.parent._subComp._isEditableComponent && elem.parent._subComp._isEditableComponent() && elem.parent._subComp._input_element && elem.parent._subComp._input_element._is_accept_touch)
				{
					if (!elem.parent._subComp._input_element._is_accept_touch(win))
					{
						nexacro._stopSysEvent(evt);
						return false;
					}
				}
				else if (elem.parent._isEditableComponent && elem.parent._isEditableComponent() && elem.parent._input_element && elem.parent._input_element._is_accept_touch)
				{
					if (!elem.parent._input_element._is_accept_touch(win))
					{
						nexacro._stopSysEvent(evt);
						return false;
					}
				}
			}
		};

		this._syshandler_ontouchstart_forward = (evt) =>
		{
			const { win, elem, context } = this.GetEventContext(evt);

			//nexacro._is_touch_flag = true;
			const ret = this._checkTouchPrevent(win, elem, evt);
			if (ret === false) return ret;

			// if (elem.isInputElement() && elem.enable)
			// {
			// 	elem._is_input_touchstart = true;
			// 	elem._on_sys_touchstart(evt);
			// }

			return nexacro._syshandler_ontouchstart(this, evt, context);


		};

		this._syshandler_ontouchend_forward = (evt) =>
		{
			const { win, elem, context } = this.GetEventContext(evt);

			const ret = this._checkTouchPrevent(win, elem, evt);
			if (ret === false) return ret;

			// if (elem.isInputElement() && elem.enable)
			// {
			// 	elem._on_sys_touchend(evt);
			// }
			return nexacro._syshandler_ontouchend(this, evt, context);

		};


		this._syshandler_ontouchmove_forward = (evt) =>
		{
			const { win, elem, context } = this.GetEventContext(evt);

			const ret = this._checkTouchPrevent(win, elem, evt);
			if (ret === false) return ret;

			// if (elem.isInputElement() && elem.enable)
			// {
			// 	elem._on_sys_touchmove(evt);
			// }

			// disable pull-down to refresh for iOS Chrome
			if (nexacro._OS == "iOS" && nexacro._Browser == "Chrome")
			{
				const env = win._getEnvironment();
				if (!env || !env._allow_default_pinchzoom)
					evt.preventDefault();
			}

			if (elem instanceof nexacro.CanvasElement)
				evt.preventDefault();

			return nexacro._syshandler_ontouchmove(this, evt, context);

		};

		this._syshandler_ontouchcancel_forward = (evt) =>
		{
			const { elem, context } = this.GetEventContext(evt);
			if (elem.isInputElement() && elem.enable)
			{
				return;
				//nexacro._stopSysEvent(evt);
				//return;
			}
			return nexacro._syshandler_ontouchcancel(this, evt, context);

		};

		this._syshandler_ondblclick_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			if (nexacro._isTouchInteraction)
			{
				if (nexacro._OS != "Android")
				{
					nexacro._stopSysEvent(evt);
				}
				//return false;
			}
			return nexacro._syshandler_ondblclick(this, evt, context);

		});

		this._syshandler_onmouseover_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onmouseover(this, evt, context);
		};
		this._syshandler_onmouseout_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onmouseout(this, evt, context);
		};
		this._syshandler_onkeydown_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onkeydown(this, evt, context);
		});

		this._syshandler_onkeypress_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onkeypress(this, evt, context);
		});

		this._syshandler_onkeyup_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onkeyup(this, evt, context);
		});

		this._syshandler_onmousewheel_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onmousewheel(this, evt, context);
		});

		this._syshandler_oncontextmenu_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_oncontextmenu(this, evt, context);
		}

		this._syshandler_ondragstart_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);

			evt = window.event || evt;
			return nexacro._syshandler_ondragstart(this, evt, context);
		};

		this._syshandler_ondragenter_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			evt = window.event || evt;
			return nexacro._syshandler_ondragenter(this, evt, context);
		};

		this._syshandler_ondragover_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			evt = window.event || evt;
			return nexacro._syshandler_ondragover(this, evt, context);

		};

		this._syshandler_ondragleave_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			evt = window.event || evt;
			return nexacro._syshandler_ondragleave(this, evt, context);
		};

		this._syshandler_ondrop_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			evt = window.event || evt;
			return nexacro._syshandler_ondrop(this, evt, context);
		};

		this._syshandler_onanimationstart_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onanimationstart(this, evt, context);
		});

		this._syshandler_onanimationend_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onanimationend(this, evt, context);
		});

		this._syshandler_onanimationiteration_forward = this.createSafeEventHandler((evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onanimationiteration(this, evt, context);
		});

		this._syshandler_onselectstart_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onselectstart(this, evt, context);
		};

		this._syshandler_onfocusin_forward = (evt) =>
		{
			this._is_fire_sys_touchstart = false; // init
			const { win, elem, release_elem } = this.GetEventContext(evt);
			const env = win._getEnvironment();
			if (env && env._p_enableaccessibility)
			{
				// 모바일웹은 초점 이동 notify 해주는 용도로만 사용, focus 처리 안함
				// 데스크탑웹은 keydown 이벤트 발생 없이 발생한 focusin에 대해서 focus 처리
				
				if (win)
				{
					// PC Accessibility focusin process
					var is_desktop_focusin_process = (env._a11ytype < 4 && win._is_fire_sys_keydown === false);

					if (elem)
					{
						let refer_comp = null, related_comp = null;
						refer_comp = win.findComponent(elem);
						if (refer_comp)
						{
							let comp = refer_comp._getRootComponent(refer_comp);
							if (!comp || comp._is_window || comp._is_frame || !comp._is_component)
							{
								comp = win.findComponent(win._last_focused_elem);
							}

							if (comp)
							{
								let comp_focus = false;  // component focus
								let reset_scroll = true; // form resetscroll

								if (release_elem)
								{
									related_comp = win.findComponent(release_elem);
									related_comp = comp._getRootComponent(related_comp);
								}

								// 마우스 동작이거나 onload, activate는 스크롤 동작 안함
								if (is_desktop_focusin_process)
								{
									if (related_comp == null || win._cur_ldown_elem)
									{
										reset_scroll = false;
									}
									comp_focus = true;
								}
								else if (env._a11ytype == 5)
								{
									// RP 101556 수정을 여기에 반영, element 상태를 focused로 처리
									if (comp._has_inputElement && elem instanceof nexacro.InputElement)
									{
										elem.setElementFocus();
									}
								}
								comp._accessibility_focusin(refer_comp, related_comp, reset_scroll, comp_focus, win);
							}
						}
					}
					
					if (is_desktop_focusin_process)
					{
						// elemenmt간 focus 이동에만 check / activeelement랑 겹치는 경우도 센스리더의 mouse 이벤트 차단
						if (evt.relatedTarget !== null || evt.target === document.activeElement)
						{
							win._is_fire_sys_focusin = true;
						}
					}

					evt.stopPropagation();
				}
			}
		};
		this._syshandler_onfocusout_forward = (evt) =>
		{
			const { win, elem, release_elem } = this.GetEventContext(evt);

			const env = win._getEnvironment();
			if (env && env._p_enableaccessibility)
			{
				// 모바일웹은 초점 벗어나는 시점 notify 해주는 용도, 별도의 초기화 처리 없음
				// 데스크탑웹은 keydown 이벤트 발생 없이 발생한 focusout에 대해서 초기화 처리
				if (win)
				{
					// PC Accessibility focusin process
					var is_desktop_focusin_process = (env._a11ytype < 4 && win._is_fire_sys_keydown === false);

					if (elem)
					{
						let refer_comp = null, related_comp = null;
						refer_comp = win.findComponent(elem);
						if (refer_comp)
						{
							let comp = refer_comp._getRootComponent(refer_comp);
							if (comp && !comp._is_window && !comp._is_frame && comp._is_component)
							{
								let comp_init = false;
								if (release_elem)
								{
									related_comp = win.findComponent(release_elem);
									related_comp = comp._getRootComponent(related_comp);
								}

								if (is_desktop_focusin_process)
								{
									comp_init = true;
								}

								comp._accessibility_focusout(refer_comp, related_comp, comp_init);
							}
						}
					}
					evt.stopPropagation();
				}
			}
		};
		this._syshandler_onactivate_forward = (evt) =>
		{

			const { win, context } = this.GetEventContext(evt);
			if (!nexacro.isglobalmodule)
			{

				if (this._containerChanged(win, evt))
					return nexacro._syshandler_onactivate(this, evt, context);
			}
			else
				return nexacro._syshandler_onactivate(this, evt, context);
		};
		this._syshandler_ondeactivate_forward = (evt) =>
		{
			const { win, context } = this.GetEventContext(evt);
			if (!nexacro.isglobalmodule)
			{

				if (this._containerChanged(win, evt))
					nexacro._syshandler_ondeactivate(this, evt, context);

			}
			else
				return nexacro._syshandler_ondeactivate(this, evt, context);

		};
		this._syshandler_onbeforeclose_forward = (evt) =>
		{

			const isDownloadOpeningSymbol = Symbol.for('isDownloadOpening');


			if (
				isDownloadOpeningSymbol in window &&
				window[isDownloadOpeningSymbol] === true
			)
			{
				// export 동작이므로 동작을 건너뜁니다.
				return;
			}

			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onbeforeclose(this, evt, context);
		};		
		this._syshandler_onclose_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onclose(this, evt, context);
		};
		this._syshandler_onclosecontainer_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onclose(this, evt, context);
		}
		this._syshandler_onresize_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onresize(this, evt, context);
		};
		this._syshandler_onorientationchange_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onorientationchange(this, evt, context);
		};
		nexacro.HTMLSysEvent.observerevent.on("onorientationchange", this._syshandler_onorientationchange_forward);

		this._syshandler_onmove_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onmove(this, evt, context);
		};
		nexacro.HTMLSysEvent.observerevent.on("onmove", this._syshandler_onmove_forward);

		this._syshandler_onload_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
			return nexacro._syshandler_onload(this, evt, context);
		};
		this._syshandler_ongesturestart_forward = (evt) =>
		{
			const { win } = this.GetEventContext(evt);
			const env = win._getEnvironment();
			if (!env || !env._allow_default_pinchzoom)
				evt.preventDefault();
		};
	    // For Network Status Change Detection Event
		this._syshandler_onnetworkstatuschange_forward = (evt) =>
		{
			const { context } = this.GetEventContext(evt);
		    return nexacro._syshandler_onnetworkstatuschange(this, evt, context);
		};

		/* proto type을 쓰게되면 classfield 참조가 불가능하므로, 항상 자신의 scope를 바인딩하도록  생성자 내에서 초기화 */
		/* 인스턴스별로 메서드가 생성되므로, 많은 인스턴스를 생성할 경우 메모리 사용량이 증가하지만, container, 즉 app 별로 만드는것이므로 상관없음*/
	};

	nexacro.HTMLSysEvent._getSysEvent = function (handle)
	{
		const evt = nexacro.__MFEAPI._getSysEvent(handle);
		return evt ? evt : nexacro.nexacro_HTMLSysEvent;
	};

    // static 
    nexacro.HTMLSysEvent.hasPositionChanged = function ()
	{
		return nexacro.HTMLSysEvent._old_screenx !== window.screenX || nexacro.HTMLSysEvent._old_screeny !== window.screenY;
	};

	nexacro.HTMLSysEvent.screenXYChange = function ()
	{
		Object.assign(nexacro.HTMLSysEvent, {
			_old_screenx: window.screenX ? window.screenX : window.screenLeft,
			_old_screeny: window.screenY ? window.screenY : window.screenTop
		});
	};

	nexacro.HTMLSysEvent.changePosition = function ()
	{
		if (nexacro.HTMLSysEvent.hasPositionChanged()) 
		{
			nexacro.HTMLSysEvent.screenXYChange();
			return true;
		}
		return false;
	};

    nexacro.HTMLSysEvent.ObserverWithEvents = class
	{
		// 한번만 처리되어서, 각 sysevent에 분산되어야 하는 case 추가 "onorientationchange",
		// move와 resize 가 브라우저 윈도우 기준으로 움직이는 case
		constructor()
		{
			this.listeners = new Map();
			this._move_detect_timer = null;
			this._move_debounce = 500;
			this._swap_debounce = 100;

			// document 종료시에 clear
			//window.addEventListener("unload", this.clear, { once: true });
			if (nexacro._SupportOrientation)
				nexacro._observeSysEvent(window, "orientationchange", "onorientationchange", this._syshandler_onorientationchange_forward);

			this.start_move_timer(true);
		}
		on(event, listener)
		{
			if (!this.listeners.has(event))
				this.listeners.set(event, new Set());

			this.listeners.get(event).add(listener);
		}
		off(event, listener)
		{
			if (this.listeners.has(event)) 
			{
				this.listeners.get(event).delete(listener);

				if (this.listeners.get(event).size === 0)
					this.listeners.delete(event);
			}
		}
		emit(event, ...args)
		{
			if (this.listeners.has(event))
				this.listeners.get(event).forEach((listener) => listener(...args));
		}
		stop_move_timer()
		{
			if (this._move_detect_timer)
			{
				clearTimeout(this._move_detect_timer);
				this._move_detect_timer = null;
			}
		}
		start_move_timer(first = false)
		{
			if (first)
				nexacro.HTMLSysEvent.screenXYChange()
			this._move_detect_timer = setTimeout(this._syshandler_onmove_forward, this._move_debounce);
		}
		/*
		stop_screen_timer(_tester)
		{
			if (_tester.swap_screen_timer)
			{
				clearInterval(_tester.swap_screen_timer);
				_tester.swap_screen_timer = null;
			}
		}
		screen_task_retcallback(_tester)
		{
			const delayed_swap_screen = (_tester.delayed_swap_screen === undefined) ? nexacro._searchDeviceExceptionValue("delayed_swap_screen") : _tester.delayed_swap_screen;
			if (delayed_swap_screen === true || (nexacro._BrowserExtra == "SamsungBrowser" && nexacro._OSVersion > 9))
			{
				nexacro._is_reseting_viewport = true;
				return function ()
				{
					const p_w = _tester.portrait_screen_width;
					const l_w = _tester.landscape_screen_width;
					const s_w = nexacro._getScreenWidth();
					if (nexacro._isPortrait())
					{
						if ((l_w && l_w != s_w) || (p_w && p_w == s_w))
						{
							this.stop_screen_timer(_tester)
							nexacro.__setViewportScale();
							nexacro._is_reseting_viewport = false;
						}
					}
					else
					{
						if ((p_w && p_w != s_w) || (l_w && l_w == s_w))
						{
							this.stop_screen_timer(_tester)
							nexacro.__setViewportScale();
							nexacro._is_reseting_viewport = false;
						}
					}
				}.bind(this)
			}
			else
			{
				const reset_viewport_delay = nexacro._searchDeviceExceptionValue("reset_viewport_delay");
				if (reset_viewport_delay == 0)
					nexacro.__setViewportScale();
				else
					setTimeout(function () { nexacro.__setViewportScale(); }, reset_viewport_delay);

				if (_tester.swap_screen === false && _tester.delayed_swap_screen_checked === false)
				{
					_tester.delayed_swap_screen_check_cnt = 0;
					this.stop_screen_timer(_tester);

					return function ()
					{
						const p_w = _tester.portrait_screen_width;
						const l_w = _tester.landscape_screen_width;
						let is_changed = false;
						if (nexacro._isPortrait())
						{
							if ((l_w && l_w != nexacro._getScreenWidth()) || (p_w && p_w == nexacro._getScreenWidth()))
								is_changed = true;
						}
						else
						{
							if ((p_w && p_w != nexacro._getScreenWidth()) || (l_w && l_w == nexacro._getScreenWidth()))
								is_changed = true;
						}
						if (is_changed || _tester.delayed_swap_screen_check_cnt == 10)
						{
							this.stop_screen_timer(_tester);
							_tester.delayed_swap_screen = is_changed;
							_tester.delayed_swap_screen_checked = true;

							// screen 값이 늦게 swap되는 이상한 환경이다!
							if (is_changed)
								nexacro.__setViewportScale();
							return;
						}

						_tester.delayed_swap_screen_check_cnt++;

					}.bind(this)
				}
			}
			return undefined;

		}
		start_screen_timer(_tester)
		{
			const callback = this.screen_task_retcallback(_tester);
			if (callback)
				_tester.swap_screen_timer = setInterval(callback, this._swap_debounce);
		}
		*/
		_syshandler_onorientationchange_forward = (evt) =>
		{
			/*
			const reset_viewport = nexacro._searchDeviceExceptionValue("orientationchange_reset_viewport");
			if (reset_viewport)
			{
				const _tester = nexacro._device_exception_tester;
				if (_tester.screen_checked && _tester.screen_swap_checked === false)
				{
					if (_tester.is_init_screen_portrait != nexacro._isPortrait())
					{
						_tester.swap_screen = (_tester.init_screen_width == nexacro._getScreenWidth()) ? false : true;
						_tester.screen_swap_checked = true;
					}
				}
				this.start_screen_timer(_tester);
			}
			*/
			evt = window.event || evt;
			this.emit("onorientationchange", evt ? evt : {});
		}
		_syshandler_onmove_forward = (evt) =>
		{
			this.stop_move_timer();
			let result = undefined;
			try
			{
				if (nexacro.HTMLSysEvent.changePosition())
					this.emit("onmove", evt ? evt : {});
			}
			catch (e) { result = false; }
			finally
			{
				this.start_move_timer();
			}
			return result;

		}
		clear = () =>
		{
			this.stop_move_timer();
			//this.stop_screen_timer(nexacro._device_exception_tester);
			this.listeners.clear()


			this._move_debounce = null;
			this._swap_debounce = null;
			this.listeners = null;
			if (nexacro._SupportOrientation)
				nexacro._stopSysObserving(window, "orientationchange", "onorientationchange", this._syshandler_onorientationchange_forward);
		}
	}

	nexacro.HTMLSysEvent.observerevent = new nexacro.HTMLSysEvent.ObserverWithEvents();

	const _pHTMLSysEvent = nexacro.HTMLSysEvent.prototype;

	_pHTMLSysEvent.KEY_BACKSPACE = 8;
	_pHTMLSysEvent.KEY_TAB = 9;
	_pHTMLSysEvent.KEY_RETURN = 13;
	_pHTMLSysEvent.KEY_ESC = 27;
	_pHTMLSysEvent.KEY_SPACE = 32;
	_pHTMLSysEvent.KEY_LEFT = 37;
	_pHTMLSysEvent.KEY_UP = 38;
	_pHTMLSysEvent.KEY_RIGHT = 39;
	_pHTMLSysEvent.KEY_DOWN = 40;
	_pHTMLSysEvent.KEY_DELETE = 46;
	_pHTMLSysEvent.KEY_HOME = 36;
	_pHTMLSysEvent.KEY_END = 35;
	_pHTMLSysEvent.KEY_PAGEUP = 33;
	_pHTMLSysEvent.KEY_PAGEDOWN = 34;
	_pHTMLSysEvent.KEY_INSERT = 45;
	_pHTMLSysEvent.MOUSE_LBUTTON = 0;
	_pHTMLSysEvent.MOUSE_MBUTTON = 1;
	_pHTMLSysEvent.MOUSE_RBUTTON = 2;

    _pHTMLSysEvent.createSafeEventHandler = function (handler)
	{
		return (evt) => 
		{
			if (!nexacro.__getWindowHandleEnable(this.container ? this.container : window)) 
			{
				nexacro._stopSysEvent(evt);
				return;
			}
			handler(evt);
		};
	};

	_pHTMLSysEvent.GetEventContext = function (evt)
	{
		const win = this._win ? this._win : nexacro._findWindow(this.container ? this.container : window);
		const elem = evt ? nexacro._getSysEventElement(evt) : undefined;
		const release_elem = evt ? nexacro._getSysReleaseEventElement(evt) : undefined;
		const lastfocus_elem = evt ? nexacro.__findParentElementForKeyEvent(evt.target, win) : undefined;
		const keycode = evt ? nexacro._getSysEventKeyCode(evt) : undefined;

		if (nexacro._Browser == "Gecko" && (evt instanceof DragEvent || evt instanceof MouseEvent))
			window.event = evt;


		if (win)
		{

			if (evt && evt.screenX)
			{
				win._event_positions.screenX = evt.screenX;
				win._event_positions.screenY = evt.screenY;
				win._event_positions.clientX = evt.clientX;
				win._event_positions.clientY = evt.clientY;
			}

		}
		const result = { win, elem, release_elem, lastfocus_elem, keycode };


		return {
			...result,
			context: result
		};
	};

	_pHTMLSysEvent._initDocEventHandler = function ()
	{
		const target = this.container ? this.container : document.body;
		const winbubbletarget = this.container ? this.container : window;
		// key event = 반드시 자신에서만 발생하고 상위로 버블되지 않음

		// 내부 messagequque 나, iframe 통신용 (대체기술 사용)
		nexacro._observeSysEvent(window, "popstate", "onpopstate", this._syshandler_onpopstate_forward);
		nexacro._observeSysEvent(window, "message", "onmessage", this._syshandler_onmessage_forward);
		nexacro._observeSysEvent(target, "mousedown", "onmousedown", this._syshandler_onmousedown_forward);
		nexacro._observeSysEvent(target, "mouseup", "onmouseup", this._syshandler_onmouseup_forward);
		nexacro._observeSysEvent(target, "mousemove", "onmousemove", this._syshandler_onmousemove_forward);
		nexacro._observeSysEvent(target, "mouseover", "onmouseover", this._syshandler_onmouseover_forward);
		nexacro._observeSysEvent(target, "mouseout", "onmouseout", this._syshandler_onmouseout_forward);
		nexacro._observeSysEvent(target, "mousewheel", "onmousewheel", this._syshandler_onmousewheel_forward);

		if (nexacro._SupportTouchEvent)
		{
			nexacro._observeSysEvent(target, "touchstart", "ontouchstart", this._syshandler_ontouchstart_forward);
			nexacro._observeSysEvent(target, "touchend", "ontouchend", this._syshandler_ontouchend_forward);
			nexacro._observeSysEvent(target, "touchmove", "ontouchmove", this._syshandler_ontouchmove_forward);
			nexacro._observeSysEvent(target, "touchcancel", "ontouchcancel", this._syshandler_ontouchcancel_forward);


			if (nexacro._Browser == "MobileSafari")
			{
				nexacro._observeSysEvent(target, "gesturestart", "ongesturestart", this._syshandler_ongesturestart_forward);
			}
		}

		nexacro._observeSysEvent(target, "click", "onclick", this._syshandler_onclick_forward);
		nexacro._observeSysEvent(target, "dblclick", "ondblclick", this._syshandler_ondblclick_forward);
		nexacro._observeSysEvent(target, "keydown", "onkeydown", this._syshandler_onkeydown_forward);
		nexacro._observeSysEvent(target, "keypress", "onkeypress", this._syshandler_onkeypress_forward);
		nexacro._observeSysEvent(target, "keyup", "onkeyup", this._syshandler_onkeyup_forward);
		nexacro._observeSysEvent(target, "contextmenu", "oncontextmenu", this._syshandler_oncontextmenu_forward);
		nexacro._observeSysEvent(target, "select", "onselect", this._syshandler_onselectstart_forward);
		nexacro._observeSysEvent(target, "selectstart", "onselectstart", this._syshandler_onselectstart_forward);
		nexacro._observeSysEvent(target, "load", "onload", this._syshandler_onload_forward);
		nexacro._observeSysEvent(target, "dragstart", "ondragstart", this._syshandler_ondragstart_forward);
		nexacro._observeSysEvent(target, "dragenter", "ondragenter", this._syshandler_ondragenter_forward);
		nexacro._observeSysEvent(target, "dragover", "ondragover", this._syshandler_ondragover_forward);
		nexacro._observeSysEvent(target, "dragleave", "ondragleave", this._syshandler_ondragleave_forward);
		nexacro._observeSysEvent(target, "drop", "ondrop", this._syshandler_ondrop_forward);
		nexacro._observeSysEvent(target, "animationstart", "onanimationstart", this._syshandler_onanimationstart_forward);
		nexacro._observeSysEvent(target, "animationend", "onanimationend", this._syshandler_onanimationend_forward);
		nexacro._observeSysEvent(target, "animationiteration", "onanimationiteration", this._syshandler_onanimationiteration_forward);		

		//이건 또 왜 반대인가
		if (nexacro._Browser == "Gecko" && nexacro._BrowserVersion >= 57)
			nexacro._observeSysEvent(target, "DOMMouseScroll", "onDOMMouseScroll", this._syshandler_onmousewheel_forward);
		else
			nexacro._observeSysEvent(target, "wheel", "onwheel", this._syshandler_onmousewheel_forward);

		// 가상커서 동작지원			
		nexacro._observeSysEvent(winbubbletarget, "focusin", "onfocusin", this._syshandler_onfocusin_forward);
		nexacro._observeSysEvent(winbubbletarget, "focusout", "onfocusout", this._syshandler_onfocusout_forward);


		if (winbubbletarget !== window)
			nexacro._observeSysEvent(winbubbletarget, "focusin", "onfocusin", this._syshandler_onactivate_forward);
		else
			nexacro._observeSysEvent(winbubbletarget, "focus", "onfocus", this._syshandler_onactivate_forward);

		if (winbubbletarget !== window)
			nexacro._observeSysEvent(winbubbletarget, "focusout", "onfocusout", this._syshandler_ondeactivate_forward);
		else
			nexacro._observeSysEvent(winbubbletarget, "blur", "onblur", this._syshandler_ondeactivate_forward);

		nexacro._observeSysEvent(winbubbletarget, "resize", "onresize", this._syshandler_onresize_forward);
		nexacro._observeSysEvent(window, "pagehide", "onpagehide", this._syshandler_onclose_forward);
		nexacro._observeSysEvent(target, "unloadcontainer", "onunloadcontainer", this._syshandler_onclosecontainer_forward);
		nexacro._observeSysEvent(window, "beforeunload", "onbeforeunload", this._syshandler_onbeforeclose_forward);
		// For Network Status Change Detection Event
		nexacro._observeSysEvent(window, "online", "onnetworkstatuschange", this._syshandler_onnetworkstatuschange_forward);
		nexacro._observeSysEvent(window, "offline", "onnetworkstatuschange", this._syshandler_onnetworkstatuschange_forward);

	};
	_pHTMLSysEvent._stopDocEventHandler = function ()
	{
		const target = this.container ? this.container : document.body;
		const winbubbletarget = this.container ? this.container : window;

		nexacro._stopSysObserving(target, "mousedown", "onmousedown", this._syshandler_onmousedown_forward);
		nexacro._stopSysObserving(target, "mouseup", "onmouseup", this._syshandler_onmouseup_forward);
		nexacro._stopSysObserving(target, "mousemove", "onmousemove", this._syshandler_onmousemove_forward);
		nexacro._stopSysObserving(target, "mouseover", "onmouseover", this._syshandler_onmouseover_forward);
		nexacro._stopSysObserving(target, "mouseout", "onmouseout", this._syshandler_onmouseout_forward);
		nexacro._stopSysObserving(target, "mousewheel", "onmousewheel", this._syshandler_onmousewheel_forward);
		if (nexacro._SupportTouchEvent)
		{
			nexacro._stopSysObserving(target, "touchstart", "ontouchstart", this._syshandler_ontouchstart_forward);
			nexacro._stopSysObserving(target, "touchend", "ontouchend", this._syshandler_ontouchend_forward);
			nexacro._stopSysObserving(target, "touchmove", "ontouchmove", this._syshandler_ontouchmove_forward);
			nexacro._stopSysObserving(target, "touchcancel", "ontouchcancel", this._syshandler_ontouchcancel_forward);

			if (nexacro._Browser == "MobileSafari")
			{
				nexacro._stopSysObserving(target, "gesturestart", "ongesturestart", this._syshandler_ongesturestart_forward);
			}
		}
		nexacro._stopSysObserving(target, "click", "onclick", this._syshandler_onclick_forward);
		nexacro._stopSysObserving(target, "dblclick", "ondblclick", this._syshandler_ondblclick_forward);
		nexacro._stopSysObserving(target, "keydown", "onkeydown", this._syshandler_onkeydown_forward);
		nexacro._stopSysObserving(target, "keypress", "onkeypress", this._syshandler_onkeypress_forward);
		nexacro._stopSysObserving(target, "keyup", "onkeyup", this._syshandler_onkeyup_forward);

		if (nexacro._Browser == "Gecko" && nexacro._BrowserVersion >= 57)
			nexacro._stopSysObserving(target, "DOMMouseScroll", "onDOMMouseScroll", this._syshandler_onmousewheel_forward);
		else
			nexacro._stopSysObserving(document.body, "wheel", "onwheel", this._syshandler_onmousewheel_forward);

		nexacro._stopSysObserving(target, "contextmenu", "oncontextmenu", this._syshandler_oncontextmenu_forward);
		nexacro._stopSysObserving(target, "dragstart", "ondragstart", this._syshandler_dragstart_forward);
		nexacro._stopSysObserving(target, "select", "onselect", this._syshandler_onselectstart_forward);
		nexacro._stopSysObserving(target, "selectstart", "onselectstart", this._syshandler_onselectstart_forward);

		nexacro._stopSysObserving(target, "dragstart", "ondragstart", this._syshandler_ondragstart_forward);
		nexacro._stopSysObserving(target, "dragenter", "ondragenter", this._syshandler_ondragenter_forward);
		nexacro._stopSysObserving(target, "dragover", "ondragover", this._syshandler_ondragover_forward);
		nexacro._stopSysObserving(target, "dragleave", "ondragleave", this._syshandler_ondragleave_forward);
		nexacro._stopSysObserving(target, "drop", "ondrop", this._syshandler_ondrop_forward);
		nexacro._stopSysObserving(target, "animationstart", "onanimationstart", this._syshandler_onanimationstart_forward);
		nexacro._stopSysObserving(target, "animationend", "onanimationend", this._syshandler_onanimationend_forward);
		nexacro._stopSysObserving(target, "animationiteration", "onanimationiteration", this._syshandler_onanimationiteration_forward);

		nexacro._stopSysObserving(winbubbletarget, "focusin", "onfocusin", this._syshandler_onfocusin_forward);
		nexacro._stopSysObserving(winbubbletarget, "focusout", "onfocusout", this._syshandler_onfocusout_forward);


		if (winbubbletarget !== window)
			nexacro._stopSysObserving(winbubbletarget, "focusin", "onfocusin", this._syshandler_onactivate_forward);
		else
			nexacro._stopSysObserving(winbubbletarget, "focus", "onfocus", this._syshandler_onactivate_forward);


		if (winbubbletarget !== window)
			nexacro._stopSysObserving(winbubbletarget, "focusout", "onfocusout", this._syshandler_ondeactivate_forward);
		else
			nexacro._stopSysObserving(window, "blur", "onblur", this._syshandler_ondeactivate_forward);

		nexacro._stopSysObserving(winbubbletarget, "resize", "onresize", this._syshandler_onresize_forward);
		nexacro._stopSysObserving(window, "load", "onload", this._syshandler_onload_forward);
		nexacro._stopSysObserving(window, "pagehide", "onpagehide", this._syshandler_onclose_forward);
		nexacro._stopSysObserving(target, "unloadcontainer", "onunloadcontainer", this._syshandler_onclosecontainer_forward);
		nexacro._stopSysObserving(window, "beforeunload", "onbeforeunload", this._syshandler_onbeforeclose_forward);
		nexacro._stopSysObserving(window, "message", "onmessage", this._syshandler_onmessage_forward);
		nexacro._stopSysObserving(window, "popstate", "onpopstate", this._syshandler_onpopstate_forward);
		// For Network Status Change Detection Event
		nexacro._stopSysObserving(window, "online", "onnetworkstatuschange", this._syshandler_onnetworkstatuschange_forward);
		nexacro._stopSysObserving(window, "offline", "onnetworkstatuschange", this._syshandler_onnetworkstatuschange_forward);

		nexacro.HTMLSysEvent.observerevent.off("onmove", this._syshandler_onmove_forward);
		nexacro.HTMLSysEvent.observerevent.off("onorientationchange", this._syshandler_onorientationchange_forward);
	};

	_pHTMLSysEvent.lockMouseMove = function (/*node*/)
	{
		const target = this.container ? this.container : document.body;

		nexacro._stopSysObserving(target, "mousemove", "onmousemove", this._syshandler_onmousemove_forward);
		nexacro._stopSysObserving(target, "mouseup", "onmouseup", this._syshandler_onmouseup_forward);
		nexacro._observeSysEvent(window, "mousemove", "onmousemove", this._syshandler_lock_onmousemove_forward, true);
		nexacro._observeSysEvent(window, "mouseup", "onmouseup", this._syshandler_lock_onmouseup_forward, true);
	};
	_pHTMLSysEvent.unlockMouseMove = function (/*node*/)
	{
		const target = this.container ? this.container : document.body;

		nexacro._stopSysObserving(window, "mousemove", "onmousemove", this._syshandler_lock_onmousemove_forward, true);
		nexacro._stopSysObserving(window, "mouseup", "onmouseup", this._syshandler_lock_onmouseup_forward, true);
		nexacro._observeSysEvent(target, "mousemove", "onmousemove", this._syshandler_onmousemove_forward);
		nexacro._observeSysEvent(target, "mouseup", "onmouseup", this._syshandler_onmouseup_forward);
	};

    _pHTMLSysEvent.clearAll = function (browserexit = false)
	{
		if (browserexit)
		{
			nexacro.HTMLSysEvent.observerevent.clear();
			nexacro.HTMLSysEvent.observerevent = null;
		}
		this.container = null
		this._cur_over_elem = null;

		this._syshandler_onpopstate_forward = null;
		this._syshandler_onmessage_forward = null;
		this._syshandler_onmousedown_forward = null;
		this._syshandler_onmouseup_forward = null;
		this._syshandler_lock_onmouseup_forward = null;
		this._syshandler_onmousemove_forward = null;
		this._syshandler_lock_onmousemove_forward = null;
		this._syshandler_ontouchstart_forward = null;
		this._syshandler_ontouchend_forward = null;
		this._syshandler_ontouchmove_forward = null;
		this._syshandler_ontouchcancel_forward = null;
		this._syshandler_onclick_forward = null;
		this._syshandler_ondblclick_forward = null;
		this._syshandler_onmouseover_forward = null;
		this._syshandler_onmouseout_forward = null;
		this._syshandler_onkeydown_forward = null;
		this._syshandler_onkeypress_forward = null;
		this._syshandler_onkeyup_forward = null;
		this._syshandler_onmousewheel_forward = null;
		this._syshandler_oncontextmenu_forward = null;
		this._syshandler_ondragstart_forward = null;
		this._syshandler_ondragenter_forward = null;
		this._syshandler_ondragover_forward = null;
		this._syshandler_ondragleave_forward = null;
		this._syshandler_ondrop_forward = null;
		this._syshandler_onanimationstart_forward = null;
		this._syshandler_onanimationend_forward = null;
		this._syshandler_onanimationiteration_forward = null;
		this._syshandler_onselectstart_forward = null;
		this._syshandler_onactivate_forward = null;
		this._syshandler_ondeactivate_forward = null;
		this._syshandler_onbeforeclose_forward = null;
		this._syshandler_onclose_forward = null;
		this._syshandler_onresize_forward = null;
		this._syshandler_onorientationchange_forward = null;
		this._syshandler_onmove_forward = null;
		this._syshandler_onload_forward = null;
		this._syshandler_onnetworkstatuschange_forward = null
	};

    //==============================================================================
    // nexacro_SysEvent
    // Basic System Event Utils
    //==============================================================================
    nexacro._initializeGlobalObjects = function (_jsContext)
    {
        if (!nexacro.isglobalmodule) return;
        //==============================================================================
        // _emptyFn
        _jsContext.emptyFn = nexacro._emptyFn;

        // global API's for script
        // isNumber, isString, isUndefined, isArray, isFunction, isObject

        // Basic Util Functions
        _jsContext.isNumber = nexacro._isNumber;
        _jsContext.isString = nexacro._isString;
        _jsContext.isUndefined = nexacro._isUndefined;
        _jsContext.isObject = nexacro._isObject;
        _jsContext.isArray = nexacro._isArray;
        _jsContext.isFunction = nexacro._isFunction;


        //==============================================================================
        // nexacro Object Register for HTML Documents
        //==============================================================================
        _jsContext.MainFrame = nexacro.MainFrame;
        _jsContext.ChildFrame = nexacro.ChildFrame;
        _jsContext.FrameSet = nexacro.FrameSet;
        _jsContext.VFrameSet = nexacro.VFrameSet;
        _jsContext.HFrameSet = nexacro.HFrameSet;
        _jsContext.TileFrameSet = nexacro.TileFrameSet;
        _jsContext.Form = nexacro.Form;
        _jsContext.Layout = nexacro.Layout;
        _jsContext.BindItem = nexacro.BindItem;
        _jsContext.FlashPlayer = nexacro.FlashPlayer;
        _jsContext.Button = nexacro.Button;
        _jsContext.Calendar = nexacro.Calendar;
        _jsContext.Combo = nexacro.Combo;
        _jsContext.CheckBox = nexacro.CheckBox;
        _jsContext.Div = nexacro.Div;
        _jsContext.Dataset = nexacro.NormalDataset;
        _jsContext.Edit = nexacro.Edit;
        _jsContext.FileDownload = nexacro.FileDownload;
        _jsContext.FileUpload = nexacro.FileUpload;
        _jsContext.Grid = nexacro.Grid;
        _jsContext.GroupBox = nexacro.GroupBox;
        _jsContext.ImageViewer = nexacro.ImageViewer;
        _jsContext.ExcelImportObject = nexacro.ExcelImportObject;
        _jsContext.ListBox = nexacro.ListBox;
        _jsContext.MaskEdit = nexacro.MaskEdit;
        _jsContext.TextArea = nexacro.TextArea;
        _jsContext.Radio = nexacro.Radio;
        _jsContext.Spin = nexacro.Spin;
        _jsContext.Static = nexacro.Static;
        _jsContext.ExcelExportObject = nexacro.ExcelExportObject;
        _jsContext.ExportItem = nexacro.ExportItem;
        _jsContext.ExportProgress = nexacro.ExportProgress;
        _jsContext.Menu = nexacro.Menu;
        _jsContext.PopupMenu = nexacro.PopupMenu;
        _jsContext.Tab = nexacro.Tab;
        _jsContext.Tabpage = nexacro.Tabpage;
        _jsContext.ProgressBar = nexacro.ProgressBar;
        _jsContext.PopupDiv = nexacro.PopupDiv;
        _jsContext.WebBrowser = nexacro.WebBrowser;
        _jsContext.WebView = nexacro.WebView;
        _jsContext.FileDialog = nexacro.FileDialog;
        _jsContext.VirtualFile = nexacro.VirtualFile;
        _jsContext.View = nexacro.View;
        _jsContext.Action = nexacro.Action;

        _jsContext.DomParser = nexacro.DomParser;
        _jsContext.Sketch = nexacro.Sketch;
        _jsContext.ColumnInfo = nexacro.DSColumnInfo;
        _jsContext.Plugin = nexacro.Plugin;

        _jsContext.TCPClientSocket = nexacro.TCPClientSocket;

        _jsContext.DragDataFormats = nexacro.DragDataFormats;
        _jsContext.DragDataObject = nexacro.DragDataObject;

        _jsContext.DataObject = nexacro.DataObject;
        _jsContext.Panel = nexacro.Panel;
        _jsContext.PanelItem = nexacro.PanelItem;
    };

    // IE6,7 에서 window urlchange 시 leak.
    nexacro._finalizeGlobalObjects = function (_jsContext)
    {
        //==============================================================================
        // _emptyFn
        _jsContext.emptyFn = null;

        // global API's for script
        // isNumber, isString, isUndefined, isArray, isFunction, isObject

        // Basic Util Functions
        _jsContext.isNumber = null;
        _jsContext.isString = null;
        _jsContext.isUndefined = null;
        _jsContext.isObject = null;
        _jsContext.isArray = null;
        _jsContext.isFunction = null;


        //==============================================================================
        // nexacro Object Register for HTML Documents
        //==============================================================================
        _jsContext.MainFrame = null;
        _jsContext.ChildFrame = null;
        _jsContext.FrameSet = null;
        _jsContext.VFrameSet = null;
        _jsContext.HFrameSet = null;
        _jsContext.TileFrameSet = null;
        _jsContext.Form = null;
        _jsContext.Layout = null;
        _jsContext.BindItem = null;
        _jsContext.FlashPlayer = null;
        _jsContext.Button = null;
        _jsContext.Calendar = null;
        _jsContext.Combo = null;
        _jsContext.CheckBox = null;
        _jsContext.Div = null;
        _jsContext.Dataset = null;
        _jsContext.Edit = null;
        _jsContext.FileDownload = null;
        _jsContext.FileUpload = null;
        _jsContext.Grid = null;
        _jsContext.GroupBox = null;
        _jsContext.ImageViewer = null;
        _jsContext.ExcelImportObject = null;
        _jsContext.ListBox = null;
        _jsContext.MaskEdit = null;
        _jsContext.TextArea = null;
        _jsContext.Radio = null;
        _jsContext.Spin = null;
        _jsContext.Static = null;
        _jsContext.ExcelExportObject = null;
        _jsContext.ExportItem = null;
        _jsContext.ExportProgress = null;
        _jsContext.Menu = null;
        _jsContext.PopupMenu = null;
        _jsContext.Tab = null;
        _jsContext.Tabpage = null;
        _jsContext.ProgressBar = null;
        _jsContext.PopupDiv = null;
        _jsContext.WebBrowser = null;
        _jsContext.WebView = null;
        _jsContext.FileDialog = null;
        _jsContext.VirtualFile = null;
        _jsContext.DomParser = null;
        _jsContext.Sketch = null;
        _jsContext.ColumnInfo = null;
        _jsContext.Plugin = null;
        _jsContext.TCPClientSocket = null;
        _jsContext.DragDataFormats = null;
        _jsContext.DragDataObject = null;
        _jsContext.DataObject = null;
        _jsContext.Panel = null;
        _jsContext.PanelItem = null;
    };

    //---------------------------------------------------------------------------------------
    // System Object : Object Type. --> application.system = nexacro.System;
    //---------------------------------------------------------------------------------------

    nexacro.System.screenToClientX = function (comp, posX, round)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element, round);
            var value = (posX - p.x) / nexacro._getDevicePixelRatio(comp._control_element);

            return (round === false) ? value : Math.round(value);
        }
    };

    nexacro.System.screenToClientY = function (comp, posY, round)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element, round);
            var value = (posY - p.y) / nexacro._getDevicePixelRatio(comp._control_element);

            return (round === false) ? value : Math.round(value);
        }
    };

    nexacro.System.clientToScreenX = function (comp, posX, round)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element, round);
            var value = posX * nexacro._getDevicePixelRatio(comp._control_element);

            return ((round === false) ? value : Math.round(value)) + p.x;
        }
    };

    nexacro.System.clientToScreenY = function (comp, posY, round)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element, round);
            var value = posY * nexacro._getDevicePixelRatio(comp._control_element);

            return ((round === false) ? value : Math.round(value)) + p.y;
        }
    };

    nexacro.System.getScreenPosition = function (comp)
    {
        if (comp._control_element)
        {
            return nexacro._getElementScreenPosition(comp._control_element);
        }
    };

    nexacro.System.getPackageVersion = function ()
    {
    };

    //******************************************************************************
    //  Methods
    //******************************************************************************
    nexacro.System.convertRealPath = function (path)
    {
        return nexacro._convertRealPath(path);
    };

    nexacro.System.execBrowser = function (url)
    {
        nexacro._execBrowser(url);
    };

    nexacro.System.execDefaultBrowser = function (url, newwindow)
    {
        nexacro._execDefaultBrowser(url, newwindow);
    };

    nexacro.System.execShell = function (exeUrl)
    {
        nexacro._execShell(exeUrl);
    };

    nexacro.System.execNexacro = function (command)
    {
        nexacro._execNexacro(command);
    };

    nexacro.System.setClipboard = function (format, data)
    {
        return nexacro._setClipboard(format, data);
    };

    nexacro.System.getClipboard = function (format, callback, target)
    {
        return nexacro._getClipboard(format, callback, target);
    };

    nexacro.System.clearClipboard = function ()
    {
        nexacro._clearClipboard();
    };

    nexacro.System.getScreenResolution = function (monitor_index)
    {
        var ret_val = "";
        if (monitor_index)
        {
            var screenwidth = nexacro._getScreenWidth(monitor_index);
            var screenheight = nexacro._getScreenHeight(monitor_index);
            ret_val = screenwidth + " " + screenheight;
            return ret_val;
        }
    };

    nexacro.System.getScreenRect = function (monitor_index)
    {
        if (monitor_index)
        {
            return nexacro._getScreenRect(monitor_index);
        }
    };

    nexacro.System.showModalSync = function (childframe, str_id, _parent_frame, arr_arg, opener)
    {
        return nexacro._showModalSync(childframe, str_id, _parent_frame, arr_arg, opener);
    };

    nexacro.System.showModalWindow = function (childframe, str_id, parent_frame, arr_arg, opener)
    {
        return nexacro._showModalWindow(childframe, str_id, parent_frame, arr_arg, opener);
    };

    nexacro.System.isPrimaryMonitor = function (monitor_index)
    {
        if (monitor_index)
        {
            return nexacro._isPrimaryMonitor(monitor_index);
        }
    };

    nexacro.System.getMonitorIndex = function (cursorX, cursorY)
    {
        return nexacro._getMonitorIndex(cursorX, cursorY);
    };

    nexacro.System.getCursorX = function ()
    {
        return nexacro._getCursorX();
    };

    nexacro.System.getCursorY = function ()
    {
        return nexacro._getCursorY();
    };

    nexacro.System.getScreenHeight = function (monitor_index)
    {
        return nexacro._getScreenHeight(monitor_index);
    };

    nexacro.System.getScreenWidth = function (monitor_index)
    {
        return nexacro._getScreenWidth(monitor_index);
    };

    nexacro.System.checkDevicePermission = function (permission_types)
    {
        nexacro._checkDevicePermission(permission_types);
    };

    nexacro.System.requestDevicePermission = function (permission_types, description)
    {
        nexacro._requestDevicePermission(permission_types, description);
    };

    nexacro.System.computername = nexacro._getComputerName();
    nexacro.System.cpuarchitecture = nexacro._getCPUArchitecture();
    nexacro.System.cpucount = nexacro._getCPUCount();
    nexacro.System.cputype = nexacro._getCPUType();
    nexacro.System.locale = nexacro._getLocale();
    nexacro.System.loginuser = nexacro._getLoginUser();
    nexacro.System.mobileorientation = nexacro._getMobileOrientation();
    nexacro.System.mobilephonenumber = nexacro._getMobilePhoneNumber();
    nexacro.System.mobileproducttype = nexacro._getMobileProductType();
    nexacro.System.mobileuniqueid = nexacro._getMobileUniqueID();
    nexacro.System.monitorcount = nexacro._getMonitorCount();
    nexacro.System.navigatorname = nexacro._getNavigatorName();
    nexacro.System.navigatorfullname = nexacro._getNavigatorFullName();
    nexacro.System.navigatorversion = nexacro._BrowserVersion;
    nexacro.System.osversion = nexacro._getOSVersion();
    nexacro.System.taskbarsize = nexacro._getTaskbarSize();
    nexacro.System.notificationtoken = null;

    nexacro.System.print = function (comp, defaultprint, valign, halign, fitonepage, strOrientation)
    {
        try
        {
            if (comp)
                return nexacro._beforePrintCheckPlugin(comp, comp._refform, defaultprint, valign, halign, fitonepage, strOrientation);
        }
        catch (e)
        {
            return false;
        }
        return false;
    };

    nexacro.System.getScreenPrintString = function (comp)
    {
        try
        {
            if (comp)
            {
                return nexacro._getScreenPrintString(comp);
            }
        }
        catch (e)
        {
            return "";
        }
        return "";
    };

    nexacro.System.cancelExportPDF = function (cancelId)
    {
        //ExportPDF 용도상 과도한 기능이라 판단하여 보류(timeout, retry 등을 적절히 사용하여 해소하면 충분);
        //트랜잭션처럼 데이터를 받아 추가 기능과 연관되지도 않고, 데이터 처리 시간이 길지도 않음;
        //차후 구현한다면 cancelId 보관(관리)부터 고민해야 함;
        return false; 

        if (!cancelId) { return false; }
        var fn = nexacro.System._exportPDFCancels[cancelId];
        if (typeof fn !== "function") { return false; }
        fn();
        return true;
    };

    nexacro.System.exportPDF = function (comp, strFileName, strUrl, strFontType, pdfOption, extraOpt)
    {
        try
        {
            if (comp && strFileName.length > 0 && strUrl.length > 0)
            {
                //ExportPDF 용도상 과도한 기능이라 판단하여 보류(timeout, retry 등을 적절히 사용하여 해소하면 충분);
                //트랜잭션처럼 데이터 처리 시간이 길지않으며, 비동기라 다른 작업 방해도 하지 않는 단순 api임
                //차후 구현해야 한다면 화면이 하얗게 되는 부분을 최종 검토한 후 적용해야 함(오버레이창 연동 필요)
                return nexacro._exportPDF(comp, strFileName, strUrl, strFontType, pdfOption, extraOpt);
                // usewaitcursor 환경 설정값을 extraOpt 에 담아 이후 로직에서 활용
                var env  = nexacro.getEnvironment();
                var _eOpt = {};
                if (extraOpt && typeof extraOpt === "object")
                {
                    var _keys = Object.keys(extraOpt);
                    for (var _i = 0; _i < _keys.length; _i++)
                    {
                        _eOpt[_keys[_i]] = extraOpt[_keys[_i]];
                    }
                }
                _eOpt._usewaitcursor = !!(env && env._p_usewaitcursor);

                return nexacro._exportPDF(comp, strFileName, strUrl, strFontType, pdfOption, _eOpt);
            }                
        }
        catch (e)
        {
            return Promise.reject({errorcode: -1, errormsg: "error"});
        }
        return Promise.reject({errorcode: -1, errormsg: "error"});
    };

    nexacro.System._setNotificationToken = function (notificationtoken)
    {
        nexacro.System.notificationtoken = notificationtoken;
    };

    nexacro.System.saveToImageFile = function (comp, fileName, fileType, compressOption, bIsOverflowClip)
    {
        if (comp)
        {
            return nexacro._saveToImageFile(comp, fileName, fileType, compressOption, bIsOverflowClip, false);
        }
        return false;
    };

    nexacro.System.saveToImageObject = function (comp)
    {
        if (comp)
        {
            var control_elem = comp.getElement();
            if (control_elem)
                return control_elem.saveToImageObject();
        }
    };

    nexacro.System.saveToImageBase64String = function (comp, bIsOverflowClip, imgType, compressOption)
    {
        if (comp)
        {

            return nexacro._saveToImageBase64StringM2(comp, bIsOverflowClip, imgType, compressOption);

        }
        return "";
    };
    //==============================================================================
    // MFE API
    //==============================================================================
    if (!nexacro.__MFEAPI)
        nexacro.__MFEAPI = {};

    nexacro.__MFEAPI._emptyFn = function (args = undefined)
    {
    };

    nexacro.__MFEAPI._loadAppContainer = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._unloadAppContainer = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getSysEvent = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getRootApp = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getRootApps = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getContainerInfo = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getContainer = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getLinkedWindow = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._getApplication = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI.initApplicationCallback = nexacro.__MFEAPI._emptyFn;
    nexacro.__MFEAPI._setLoadExternals = nexacro.__MFEAPI._emptyFn;



    //==============================================================================
    // Timer & Timer Manager
    //==============================================================================
    nexacro._TimerManager = function (context)
    {
        this.context = context;
        this.status = 0;
        this.timerList = [];
    };
    var __pTimerManager = nexacro._createPrototype(nexacro.Object, nexacro._TimerManager);
    nexacro._TimerManager.prototype = __pTimerManager;

    __pTimerManager.addTimer = function (timer)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tmitem = timers[i];
            if (tmitem.id == timer.id)
            {
                tmitem.destroy();
                timers.splice(i, 1);
                break;
            }
        }
        timers.push(timer);
    };
    __pTimerManager.stopTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tmitem = timers[i];
            if (tmitem.id == id)
            {
                tmitem.stop();
                return true;
            }
        }
        return false;
    };
    __pTimerManager.startTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm.id == id)
            {
                tm.start();
                return true;
            }
        }
        return false;
    };
    __pTimerManager.deleteTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm.id == id)
            {
                tm.destroy();
                timers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    __pTimerManager.deleteTimerItem = function (item)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm == item)
            {
                tm.destroy();
                timers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    __pTimerManager.clearAll = function ()
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            tm.destroy();
        }
        timers.splice(0, len);
    };

    __pTimerManager.destroy = function ()
    {
        this.clearAll();
        this.context = null;
    };

    //---------------------------------------------------------------------------------------
    // EventTimer
    //---------------------------------------------------------------------------------------
    nexacro._on_bindEventTimerHandler = function (pthis, timerid)
    {
        return function ()
        {
            var context = pthis;
            if (context && context._is_alive && context.ontimer && context.ontimer._has_handlers)
            {
                var evt = new nexacro.TimerEventInfo(context, "ontimer", timerid);
                const env = context._getEnvironment();
                nexacro._pushCurrentEnvironment(env);
                try
                {
                    context.ontimer._fireEvent(context, evt);
                }
                finally
                {
                    nexacro._popCurrentEnvironment(env);
                }   
            }
        };
    };

    //event timer 
    nexacro._EventTimer = function (target, id, interval)
    {
        // event target must be context
        this.id = id;
        this.context = target._getReferenceContext(); //refcontext is  selfcontext
        this.interval = (interval | 0);

        //------------ internal variable ------------------//
        this.handle = null;
        this._ontimer = nexacro._on_bindEventTimerHandler(this.context, id); // bind  
        this.context._timerManager.addTimer(this);
    };

    var __pEventTimer = nexacro._createPrototype(nexacro.Object, nexacro._EventTimer);
    nexacro._EventTimer.prototype = __pEventTimer;

    __pEventTimer.setInterval = function (interval)
    {
        if (this.handle) this.stop();
        this.interval = interval;
    };
    __pEventTimer.start = function ()
    {
        if (this.handle) this.stop();
        this.handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    __pEventTimer.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this.handle);
            this.handle = null;
        }
    };
    __pEventTimer.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._ontimer = null;
    };


    //---------------------------------------------------------------------------------------
    // delay for Scroll track, wheel 
    //---------------------------------------------------------------------------------------
    nexacro._DelayTask = function (target, fn, interval)
    {
        this.context = target._getReferenceContext(); //refcontext is  selfcontext
        this.handle = null;
        var handle_window = this.context._getWindowHandle();
        this._call = this.createDelayFunc(fn, interval, target, handle_window, this);
    };

    var __pDelayTask = nexacro._createPrototype(nexacro.Object, nexacro._DelayTask);
    nexacro._DelayTask.prototype = __pDelayTask;

    __pDelayTask.createDelayFunc = function (fn, interval, scope, win_handle, pthis)
    {
        var lastCallTime, elapsed, lastArgs,
            execute = function ()
            {
                pthis.stop();
                fn.apply(scope, lastArgs);
                lastCallTime = new Date().getTime();
            };

        return function ()
        {
            lastArgs = arguments;
            elapsed = new Date().getTime() - lastCallTime;
            if (pthis.handle)
            {
                nexacro._clearSystemTimer(win_handle, pthis.handle);
                pthis.handle = null;
            }
            if (!lastCallTime || (elapsed >= interval))
            {
                execute();
            }
            else
            {
                pthis.handle = nexacro._setSystemTimer(win_handle, execute, interval - elapsed);
            }
        };
    };

    __pDelayTask.run = function ()
    {
        this._call.apply(null, arguments);
    };

    __pDelayTask.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this.handle);
            this.handle = null;
        }
    };

    __pDelayTask.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._call = null;
    };


    //---------------------------------------------------------------------------------------
    // CallbackTimer
    //---------------------------------------------------------------------------------------
    nexacro._CallbackTimerIdNo = 1000;
    nexacro._on_bindCallbackTimerHandler = function (pthis)
    {
        return function ()
        {
            var target = pthis.target;
            if (target && target._is_alive)
                pthis.callback.call(target, pthis.id);
        };
    };

    nexacro._CallbackTimer = function (target, callback, interval)
    {
        var id = nexacro._CallbackTimerIdNo;
        nexacro._CallbackTimerIdNo++;
        this.id = id;
        this.target = target;
        this.context = target._getReferenceContext();
        this.callback = callback;
        this.interval = (interval | 0);

        // ------------ internal variable -------------- //
        this.handle = null;
        this._ontimer = nexacro._on_bindCallbackTimerHandler(this, callback);
        this.context._timerManager.addTimer(this);
    };

    var __pCallbackTimer = nexacro._createPrototype(nexacro.Object, nexacro._CallbackTimer);
    nexacro._CallbackTimer.prototype = __pCallbackTimer;

    __pCallbackTimer.setInterval = function (interval)
    {
        if (this.handle) this.stop();
        this.interval = interval;
    };
    __pCallbackTimer.start = function ()
    {
        if (this.handle) this.stop();
        this.handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    __pCallbackTimer.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this.handle);
            this.handle = null;
        }
    };
    __pCallbackTimer.destroy = function ()
    {
        this.stop();
        this.target = null;
        this.context = null;
        this._ontimer = null;
    };


    //---------------------------------------------------------------------------------------
    // OnceCallbackTimer
    //---------------------------------------------------------------------------------------
    nexacro._on_bindOnceCallbackTimerHandler = function (pthis)
    {
        return function ()
        {
            if (pthis)
            {
                pthis.stop();

                var target = pthis.target;
                if (target && target._is_alive)
                    pthis.callback.call(target, pthis.id);
                if (pthis.context && pthis.context._timerManager && !pthis.context._timerManager.deleteTimerItem(pthis))
                    pthis.destroy();
                pthis = null;
            }
        };
    };

    nexacro._OnceCallbackTimer = function (target, callback, interval)
    {
        var id = nexacro._CallbackTimerIdNo;
        nexacro._CallbackTimerIdNo++;
        this.id = id;
        this.target = target;
        this.context = target._getReferenceContext();
        this.callback = callback;
        this.interval = (interval | 0);

        // ----------- internal variable ------------- //
        this.handle = null;
        this._ontimer = nexacro._on_bindOnceCallbackTimerHandler(this);

        if (this.context._timerManager)
            this.context._timerManager.addTimer(this);
    };

    var __pOnceCallbackTimer = nexacro._createPrototype(nexacro.Object, nexacro._OnceCallbackTimer);
    nexacro._OnceCallbackTimer.prototype = __pOnceCallbackTimer;


    __pOnceCallbackTimer.setInterval = function (interval)
    {
        if (this.handle) this.stop();
        this.interval = interval;
    };
    __pOnceCallbackTimer.start = function ()
    {
        if (this.handle)
            this.stop();
        this.handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    __pOnceCallbackTimer.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this.handle);
            this.handle = null;
        }
    };
    __pOnceCallbackTimer.destroy = function ()
    {
        this.stop();
        this.target = null;
        this.context = null;
        this._ontimer = null;
    };

    nexacro._OnceCallbackTimer.callonce = function (target, callback, interval)
    {
        var timer = new nexacro._OnceCallbackTimer(target, callback, interval);
        timer.start();
        return timer;
    };

    nexacro._Debounce = function (target, fn, delay) 
    {
        var timerId = null;
        return function () 
        {
            var args = arguments;
            var self = this;

            if (timerId)
                timerId.stop();

            timerId = nexacro.setTimeout(target, function () 
            {
                fn.apply(self, args);
                timerId = null;
            }, delay);
        };
    };
    //---------------------------------------------------------------------------------------
    // SysOnceCallbackTimer 
    // nexacro._OnceCallbackTimer를 사용할 수 없는 대상
    //---------------------------------------------------------------------------------------
    nexacro._on_no_bindOnceCallbackTimerHandler = function (pthis)
    {
        return function ()
        {
            if (pthis)
            {
                pthis.stop();

                var target = pthis.target;
                if (target && target._is_alive)
                {
                    pthis.callback.call(target, pthis.id);
                }

                pthis.destroy();
                pthis = null;
            }
        };
    };

    nexacro._SysOnceCallbackTimer = function (target, callback, interval)
    {
        var id = nexacro._CallbackTimerIdNo;
        nexacro._CallbackTimerIdNo++;
        this.id = id;
        this.target = target;
        this.callback = callback;
        this.interval = (interval | 0);

        // ----------- internal variable ------------- //
        this.handle = null;
        this._ontimer = nexacro._on_no_bindOnceCallbackTimerHandler(this);


    };

    var __pSysOnceCallbackTimer = nexacro._createPrototype(nexacro.Object, nexacro._SysOnceCallbackTimer);
    nexacro._SysOnceCallbackTimer.prototype = __pSysOnceCallbackTimer;


    __pSysOnceCallbackTimer.setInterval = function (interval)
    {
        if (this.handle) this.stop();
        this.interval = interval;
    };
    __pSysOnceCallbackTimer.start = function ()
    {

        if (this.handle)
            this.stop();
        this.handle = nexacro._setSystemTimer(nexacro._getWindowHandle(this.target.handle), this._ontimer, this.interval);
    };
    __pSysOnceCallbackTimer.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(nexacro._getWindowHandle(this.target.handle), this.handle);
            this.handle = null;
        }
    };
    __pSysOnceCallbackTimer.destroy = function ()
    {
        this.stop();
        this.target = null;
        this._ontimer = null;
    };

    nexacro._SysOnceCallbackTimer.callonce = function (target, callback, interval)
    {
        var timer = new nexacro._SysOnceCallbackTimer(target, callback, interval);
        timer.start();
        return timer;
    };

    //---------------------------------------------------------------------------------------
    // AnimationFrame Object
    //---------------------------------------------------------------------------------------
    nexacro.AnimationFrame = function (comp, callback)
    {
        // 다음 Rendering frame에 Callback을 1회 수행한다.
        this._comp = comp;
        this._window = comp._getWindow();
        this.callback = callback;
        this._timer_interval = 1;
        this._timer = null;
    };

    var _pAnimationFrame = nexacro._createPrototype(nexacro.Object, nexacro.AnimationFrame);
    nexacro.AnimationFrame.prototype = _pAnimationFrame;


    _pAnimationFrame.start = function ()
    {
        if (nexacro._SupportAnimationFrame)
            this.id = nexacro._requestAnimationFrame(this._window, this.callback);
        else
        {
            this._timer = new nexacro._OnceCallbackTimer(this._comp, this.callback, this._timer_interval);
            this._timer.start();
        }
    };

    _pAnimationFrame.stop = function ()
    {
        if (nexacro._SupportAnimationFrame)
            nexacro._cancelAnimationFrame(this._window, this.id);
        else
        {
            if (this._timer)
                this._timer.stop();
        }
    };

    _pAnimationFrame.destroy = function ()
    {
        this.stop();
        this._comp = null;
        this._window = null;
        this.callback = null;
    };

    _pAnimationFrame._setCallback = function (callback)
    {
        this.callback = callback;
    };

    //---------------------------------------------------------------------------------------
    // AnimationFrame Object
    //---------------------------------------------------------------------------------------
    nexacro._ResizeManager = function (animationframe)
    {
        this._animationframe = animationframe;
        this._last_time = null;
        this._interval = 300;
    };

    var _pResizeManager = nexacro._createPrototype(nexacro.Object, nexacro._ResizeManager);
    nexacro._ResizeManager.prototype = _pResizeManager;

    _pResizeManager.setLastTime = function (v)
    {
        this._last_time = v;
    };

    _pResizeManager.start = function ()
    {
        if (this._animationframe)
        {
            this._animationframe.start();
        }
    };

    _pResizeManager.stop = function ()
    {
        if (this._animationframe)
        {
            this._animationframe.stop();
            this._animationframe = null;
        }
    };

    //---------------------------------------------------------------------------------------
    // LoadItem Object
    //---------------------------------------------------------------------------------------
    nexacro._LoadItem = function (url, type)
    {
        this.url = url;
        this.type = type;
        this.errorcode = 0;
        this.module = null;
        this.data = null;
        this.targets = [];

        // -------------- internal variable ----------------- //
        this.handle = null;
        this._bLoaded = false;
        this._context_callback = null;
        this._requrl = url;    // for transaction : url is transaction service id, _requrl is request url
        this._is_cancel = false;
        this._is_process = false;
    };
    var __pLoadItem = nexacro._createPrototype(nexacro.Object, nexacro._LoadItem);
    nexacro._LoadItem.prototype = __pLoadItem;

    __pLoadItem.addTarget = function (target)
    {
        var targets = this.targets;
        if (targets && nexacro._indexOf(targets, target) < 0)
        {
            targets.push(target);
            return true;
        }
        return false;
    };
    __pLoadItem.deleteTarget = function (target)
    {
        var targets = this.targets;
        var idx = nexacro._indexOf(targets, target);
        if (idx >= 0)
        {
            targets.splice(idx, 1);
            return true;
        }
        return false;
    };
    __pLoadItem.destroy = function ()
    {
        this.targets = null;
        this.handle = null;
        this._context_callback = null;
    };


    //---------------------------------------------------------------------------------------
    // LoadManager
    //---------------------------------------------------------------------------------------
    //
    // load Manager status
    //   0 : not init
    //   1 : loading main
    //   2 : end load main --> loading mandatory module : global, include, css
    //   3 : end loading mandatory : start init --> wait for preload list
    //   4 : end loading : on_load start
    //   preload는 component에 preload 옵션이 있는 component에 해당됨 (div, tabpage, dataset)
    nexacro._LoadManager = function (context)
    {
        this.context = context;
        this.status = 0;
        this.main_url = "";
        this.globalCnt = 0;
        this.globalList = [];
        this.localCnt = 0;
        this.localList = [];
        this.preloadCnt = 0;
        this.preloadList = [];
        this.dataCnt = 0;
        this.dataList = [];
        this.childlocalCnt = 0;
        this.transactionList = [];

        // ---------- internal variable ------------ //
        this._main_handle = null;
        this._is_mainloaded = false;
        this._use_transition_effect = false;
    };

    var __pLoadManager = nexacro._createPrototype(nexacro.Object, nexacro._LoadManager);
    nexacro._LoadManager.prototype = __pLoadManager;


    __pLoadManager.hasLoadItem = function (url)
    {
        return (this.globalCnt + this.localCnt + this.preloadCnt + this.dataCnt + this.childlocalCnt) > 0;
    };


    __pLoadManager.getGlobalItem = function (url)
    {
        var globals = this.globalList;
        var cnt = globals.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = globals[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    __pLoadManager.getLocalItem = function (url)
    {
        var locals = this.localList;
        var cnt = locals.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = locals[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    __pLoadManager.getDataItem = function (url)
    {
        var datas = this.dataList;
        var cnt = datas.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = datas[i];
            if (item.url == url)
                return item;
        }
        return null;
    };

    __pLoadManager.getTransactionItem = function (url)
    {
        var transactions = this.transactionList;
        var cnt = transactions.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = transactions[i];
            if (item.path == url)
                return item;
        }
        return null;
    };
    __pLoadManager.removeTransactionItem = function (url)
    {
        var transactions = this.transactionList;
        var cnt = transactions.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = transactions[i];
            if (item.svcid == url)
            {
                for (var key in item.parameters)
                {
                    item.parameters[key].rval = ""; // check osm
                }

                transactions.splice(i, 1);
                break;
            }
        }
    };
    __pLoadManager.removeDataItem = function (url)
    {
        var datas = this.dataList;
        var cnt = datas.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = datas[i];
            if (item.url == url)
            {
                datas.splice(i, 1);
                break;
            }
        }
    };
    __pLoadManager.getPreloadItem = function (type, url)
    {
        var preloads = this.preloadList;
        var cnt = preloads.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = preloads[i];
            if (item.type == type && item.url == url)
                return item;
        }
        return null;
    };

    __pLoadManager.addPreloadItem = function (type, url, target, args, service)
    {
        var svcid = "";
        if (type == "data")
        {
            svcid = "__preload_" + ((typeof target) == "string" ? target : target.id);
            this.loadPreloadDataModule(url, target, false, false, svcid, args, service);
        }
        else if (type == "dataobject")
        {
            svcid = "__preload_" + ((typeof target) == "string" ? target : target.id);
            //this.loadPreloadDataModule(url, target, false, false, svcid, args, service);
            this.loadPreloadDataObjectModule(url, target, false, false, svcid, args, service);
        }
        else
        {
            this.loadPreloadJSModule(url, target, true, null, service);
        }
    };

    __pLoadManager.loadMainModule = function (url, cache, async, reload, service)
    {
        if (cache == null)
            cache = false;
        if (async == null)
            async = true;
        if (reload == null)
            reload = false;

        if (reload === true || this.main_url != url)
        {
            if (this._main_handle)
            {
                nexacro._cancelLoad(this._main_handle);
                this._main_handle = null;
            }
            this.main_url = url;
            this.status = 1;

            var parent_context = this.context.getParentContext();
            var ret = 0;
            while (parent_context)
            {
                //form/div content/div url 이 붙는 경우 preloadlist가 form에 있어서 검색 필요

                ret = parent_context._load_manager.getPreloadJSModule(url, this.context);
                if (ret === 0)
                {
                    parent_context = parent_context.getParentContext();
                }
                else
                    break;
            }

            if (ret === 0)
            {
                var handle = nexacro._loadModule("module", url, this, this.on_load_main, cache, service, async);
                if (async || this.status > 1) this._main_handle = handle;
            }
            else
            {
                return ret;  //preload
            }
        }
    };

    __pLoadManager.loadGlobalModule = function (url, cache, async, service)
    {
        if (async == null)
            async = true;
        if (this.status < 7)
        {
            var load_item = this.getGlobalItem(url);
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "globalmodule");
                this.globalList.push(load_item);
                this.globalCnt++;
                load_item.handle = nexacro._loadModule("module", url, this, this.on_load_globalmodule, cache, service, async);
            }
        }
    };

    __pLoadManager.loadGlobalJsonResource = function (url, cache, async, service)
    {
        if (async == null)
            async = true;
        if (this.status < 7)
        {
            var load_item = this.getGlobalItem(url);
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "json");
                this.globalList.push(load_item);
                this.globalCnt++;
                load_item.handle = nexacro._loadModule("json", url, this, this.on_load_globalmodule, cache, service, async);
            }
        }
    };


    __pLoadManager.loadIncludeModule = function (url, cache, async, service)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        if (this.status <= 7)
        {
            var load_item = this.getLocalItem(url);
            var parent_context;
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "include");
                this.localList.push(load_item);
            }

            this.localCnt++;
            load_item.handle = nexacro._loadModule("module", url, this, this.on_load_localmodule, cache, service, async);

            // IE7 : cache로부터 load 할 경우 sync로 동작한다.
            if (!load_item._bLoaded)
            {
                parent_context = this.context.getParentContext();
                while (parent_context && parent_context._load_manager.status != 7)
                {
                    parent_context._load_manager.childlocalCnt++;
                    parent_context._load_manager.preloadCnt++;

                    parent_context = parent_context.getParentContext();
                }
            }
        }
    };

    // csstype - true : browser css (html/runtime)
    //          false : css js 
    // cssreq  - 0:themecss, 1:appcss
    __pLoadManager.loadCssModule = function (url, cache, async, service, csstype, cssreq)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        if (this.status < 7)
        {
            var load_item = this.getLocalItem(url);
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "css");
                this.localList.push(load_item);

                this.localCnt++;

                if (csstype)
                    load_item.handle = nexacro._loadModule("css", url, this, this.on_load_localmodule, cache, service, async, cssreq);
                else
                    load_item.handle = nexacro._loadModule("module", url, this, this.on_load_localmodule, cache, service, async);
            }
        }
    };

    __pLoadManager.loadJSModule = function (url, cache, async, service)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        if (this.status <= 7)
        {
            var load_item = this.getLocalItem(url);
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "text");
                this.localList.push(load_item);

                this.localCnt++;
                load_item.handle = nexacro._loadModule("module", url, this, this.on_load_localmodule, cache, service, async);
            }
        }
    };


    __pLoadManager.loadPreloadJSModule = function (url, target, cache, async, service)
    {
        if (cache == null)
            cache = false;
        if (async == null)
            async = true;

        if (this.status < 6)
        {
            var load_item = this.getPreloadItem("fdl", url);
            var parent_context;
            let newitem = false;
            if (!load_item)
            {
                load_item = new nexacro._LoadItem(url, "fdl");
                newitem = true;
            }

            if (target && load_item && load_item.addTarget(target) && !load_item._bLoaded)
            {
                this.preloadCnt++;
                parent_context = this.context.getParentContext();
                while (parent_context)
                {
                    if (!parent_context._is_created)
                        parent_context._load_manager.preloadCnt++;
                    parent_context = parent_context.getParentContext();
                }
            }

            if (newitem)
            {
                this.preloadList.push(load_item);
                load_item.handle = nexacro._loadModule("module", url, this, this.on_load_preloadjsmodule, cache, service, async);
            }
        }
    };

    __pLoadManager.loadPreloadDataModule = function (url, target, cache, async, svcid, args, service)
    {
        if (nexacro.isDesignMode) return;

        if (this.status < 6)
        {
            var load_item = this.getPreloadItem("data", svcid);
            if (load_item && target)
            {
                if (load_item.addTarget(target))
                {
                    this.preloadCnt++;
                }
            }
            else
            {
                var referer = "";
                if (this.context) referer = this.context._url;

                load_item = new nexacro._LoadItem(svcid, "data");
                load_item._requrl = url;

                if (target && load_item.addTarget(target))
                {
                    this.preloadCnt++;

                    this.preloadList.push(load_item);
                    load_item.handle = nexacro._preloadData(url, this, this.on_load_preloaddatamodule, service, svcid, referer, args, async, 0, false);
                }
            }
        }
    };

    __pLoadManager.loadPreloadDataObjectModule = function (url, target, cache, async, svcid, args, service)
    {
        if (nexacro.isDesignMode || nexacro._isDesignMode()) return;

        if (this.status < 6)
        {
            var load_item = this.getPreloadItem("dataobject", svcid);
            if (load_item && target)
            {
                if (load_item.addTarget(target))
                {
                    this.preloadCnt++;
                }
            }
            else
            {
                var referer = "";
                if (this.context) referer = this.context._url;

                load_item = new nexacro._LoadItem(svcid, "dataobject");
                load_item._requrl = url;

                if (target && load_item.addTarget(target))
                {
                    this.preloadCnt++;

                    this.preloadList.push(load_item);
                    load_item.handle = nexacro._preloadDataObject(url, this, this.on_load_preloaddataobjectmodule, service, svcid, referer, args, async, 0, false);
                }
            }
        }
    };

    __pLoadManager.loadDataModule = function (url, svcid, indatasets, outdatasets, parameters, callback, async, datatype, compress, service)
    {
        if (async == null)
            async = true;
        var load_item = this.getDataItem(svcid);
        if (!load_item)
        {
            load_item = new nexacro._LoadItem(svcid, "data");
            load_item._requrl = url;

            this.dataList.push(load_item);
            this.dataCnt++;
            load_item._context_callback = callback;
            load_item.handle = nexacro._loadData(url, this, this.on_load_datamodule, service, this.context, svcid, indatasets, outdatasets, parameters, async, datatype, compress);
        }
        else
        {
            // 비동기통신일때 동일한id로 여러번 transaction시 callback이 한번만 호출되는 현상
            this.context._onHttpTransactionError(this.context, true, this.context, "comm_fail_duplication_svcid", url, 10405, url, null, undefined, svcid);
        }
    };

    __pLoadManager.loadDataObjectModule = function (url, svcid, method, outdataobj, parameters, async, datatype, compress, service)
    {
        if (async == null)
            async = true;
        var load_item = this.getDataItem(svcid);
        if (!load_item)
        {
            load_item = new nexacro._LoadItem(svcid, "dataobject");
            load_item._requrl = url;

            this.dataList.push(load_item);
            this.dataCnt++;
            //load_item._context_callback = callback;
            load_item.handle = nexacro._loadDataObject(url, this, this.on_load_dataobjectmodule, service, this.context, svcid, method, outdataobj, parameters, async, datatype, compress);
        }
        else if (outdataobj)
        {
            // 비동기통신일때 동일한id로 여러번 transaction시 callback이 한번만 호출되는 현상
            outdataobj._onDataObjectRequestError(outdataobj, true, this.context, "comm_fail_duplication_svcid", url, 10405, url, null, undefined, "");
        }
    };

    __pLoadManager.reloadCssModule = function (url, cache, async, service, csstype, cssreq)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        return new Promise((resolve, reject) =>
        {
            var load_item = this.getLocalItem(url);
            if (!load_item) 
            {
                load_item = new nexacro._LoadItem(url, "css");
                this.localList.push(load_item);
            }

            this.localCnt++;

            const onReload = (targetUrl, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg) =>
            {
                this.on_reload_localmodule(targetUrl, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg);
                resolve();
            };

            if (csstype)
                load_item.handle = nexacro._loadModule("css", url, this, onReload, cache, service, async, cssreq);
            else
                load_item.handle = nexacro._loadModule("module", url, this, onReload, cache, service, async);
        });
    };

    __pLoadManager.reloadJsonResource = function (url, cache, async, service)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        let load_item = this.getLocalItem(url);
        if (!load_item)
        {
            load_item = new nexacro._LoadItem(url, "json");
            this.localList.push(load_item);
        }

        this.localCnt++;
        load_item.handle = nexacro._loadModule("json", url, this, this.on_load_json, cache, service, async);
    };

    //------------------------------------------------
    // load handlers
    //for error : errstatus, null, errormsgcode, returncode, requesturi, locationuri
    __pLoadManager.on_load_main = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        if (url == this.main_url)
        {
            this.status = 2;
            this._main_handle = null;
            this._is_mainloaded = false;
            if (errstatus === 0 && module && typeof (module) == "function")
            {
                // sync 일때는 preload를 하지 않는다.
                // NP17 Div는 InnerForm을 context로 가지므로 parent 객체 접근 
                if (this.context.parent && this.context.parent.async === false && this.context.parent._type_name == "Div")
                {
                    this.context._addPreloadList = nexacro._emptyFn;
                }
                module.call(this.context, ...nexacro.__getProcessExportArgs(this.context));
            }
            else
            {
                // adl 
                const application = this.context._getApplication ? this.context._getApplication() : undefined;
                if (application)
                {
                    if (this.context == application)
                    {
                        nexacro._onHttpSystemError(this.context, true, this.context, "comm_fail_loadinvalidurl", url, returncode, requesturi, locationuri, extramsg);
                        return;
                    }
                    else
                    {
                        // if (this.context && this.context.parent && this.context.parent._is_frame)
                        //{
                        // main form
                        //  var child_frame = this.context.parent;
                        //  child_frame._is_loadform_failed = true;                    	
                        if (this.context)
                            this.context._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
                        //}
                        nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
                    }
                }
                else
                    nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);

            }

            this._is_mainloaded = true;
            this._check_fire_oninit();
        }
        return this.context;
    };

    __pLoadManager.on_load_localmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        var load_Item = this.getLocalItem(url);
        if (load_Item)
        {
            //var handle = load_Item.handle;
            load_Item.handle = null;
            if (errstatus === 0)
            {
                if (module)
                {
                    if (typeof (module) == "function")
                    {
                        if (load_Item.type == "include")
                        {
                            load_Item._bLoaded = true;

                            if (load_Item.type == "css")
                                module.call(this.context, ...nexacro.__getProcessExportArgs(this.context));
                            else
                                module.call(this.context, load_Item.url, ...nexacro.__getProcessExportArgs(this.context));
                            load_Item.module = null;
                        }
                        else
                        {
                            load_Item.module = module;
                        }
                    }
                    else 
                    {
                        load_Item._bLoaded = true;
                        load_Item.module = module;
                    }
                }
                else if (load_Item.type == "css")
                {
                    load_Item._bLoaded = true;
                }
                else
                {
                    load_Item.errcode = errstatus;
                    nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
            }

            this.localCnt--;
            this._check_fire_oninit();  // _check_fire_oninit()
            nexacro._log_tr = "";
            // sync 인 경우 handle 이 없다.
            if (this.context)
            {
                var parent_context = this.context.getParentContext();
                while (parent_context && parent_context._load_manager.childlocalCnt > 0)
                {

                    parent_context._load_manager.childlocalCnt--;
                    parent_context._load_manager.preloadCnt--;
                    parent_context._load_manager._check_fire_onload();
                    parent_context = parent_context.getParentContext();
                }
            }
            return;
        }
    };

    __pLoadManager.on_load_globalmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        var load_Item = this.getGlobalItem(url);
        if (!load_Item) return;

        load_Item.handle = null;
        let type = load_Item.type;

        if (errstatus === 0)
        {
            if (module && type == "json")
            {
                try
                {
                    load_Item._bLoaded = true;
                    // load_Item.data = module;  //?? check!!
                    var env = this.context._getEnvironment();
                    if (module[env._stringrc_lang])
                        env._stringrc = module[env._stringrc_lang];
                    else if (url && url.indexOf("_resource_/_stringrc_/") > -1)
                    {
                        env._stringrc_lang = "en";
                        if (module[env._stringrc_lang])
                            env._stringrc = module[env._stringrc_lang];
                        else
                            nexacro._onHttpSystemError(this.context, true, this.context, "comm_fail_loaddetail_stringresource", url, 10598, requesturi, locationuri/*, extramsg*/);
                    }
                    else
                        nexacro._onHttpSystemError(this.context, true, this.context, "comm_fail_loaddetail_stringresource", url, 10598, requesturi, locationuri/*, extramsg*/);

                }
                catch (e)
                {
                    this.globalCnt--;
                    // .data가 내용이 할당 되는 경우는 type 이 globalmodule일 경우에만 내용이 있고 나머지는 모두 load_Item.data는 null값임. 
                    // nexacro._executeScript(null, load_Item.url); 해당 동작은 의미가 없는 호출임. 
                    //nexacro._executeScript(load_Item.data, load_Item.url);
                }
            }
            else if (type == "globalmodule" && module !== "")
            {
                load_Item.data = module;
            }
        }
        else
        {
            load_Item.errcode = errstatus;
            nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
        }
        this.globalCnt--;
        this._check_fire_oninit();
    };

    __pLoadManager.on_load_json = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        if (errstatus === 0)
        {
            if (module)
            {
                try
                {
                    var env = this.context._getEnvironment();
                    if (module[env._stringrc_lang])
                    {
                        env._stringrc = module[env._stringrc_lang];
                    }
                    else if (url && url.indexOf("_resource_/_stringrc_/") > -1)
                    {
                        env._stringrc_lang = "en";
                        if (module[env._stringrc_lang])
                            env._stringrc = module[env._stringrc_lang];
                        else
                        {
                            nexacro._onHttpSystemError(this.context, true, this.context, "comm_fail_loaddetail_stringresource", url, 10598, requesturi, locationuri/*, extramsg*/);
                        }
                    }
                    else
                    {
                        nexacro._onHttpSystemError(this.context, true, this.context, "comm_fail_loaddetail_stringresource", url, 10598, requesturi, locationuri/*, extramsg*/);
                    }
                }
                catch (e)
                {
                    (new Function("return " + module))();
                }
            }
        }
        else
        {
            nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
        }
        this.localCnt--;
    };

    __pLoadManager.on_reload_localmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        var load_Item = this.getLocalItem(url);
        if (load_Item)
        {
            load_Item.handle = null;
            if (errstatus === 0)
            {
                if (module)
                {
                    if (typeof (module) == "function")
                    {
                        load_Item._bLoaded = true;

                        if (load_Item.type == "css")
                            module.call(this.context, ...nexacro.__getProcessExportArgs(this.context));
                        else
                            module.call(this.context, load_Item.url, ...nexacro.__getProcessExportArgs(this.context));
                        load_Item.module = null;
                    }
                    else
                    {
                        load_Item._bLoaded = true;
                        load_Item.module = module;
                    }
                }
                else if (load_Item.type == "css")
                {
                    load_Item._bLoaded = true;
                }
                else
                {
                    load_Item.errcode = errstatus;
                    nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                nexacro._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri, extramsg);
            }

            this.localCnt--;
            this._check_fire_oninit();  // _check_fire_oninit()
            nexacro._log_tr = "";
            // sync 인 경우 handle 이 없다.
            // childlocalCnt++, preloadCnt++ 코딩이 없어 삭제
            // var parent_context = this.context.getParentContext();
            // while (parent_context && parent_context._load_manager.childlocalCnt > 0)
            // {

            //     parent_context._load_manager.childlocalCnt--;
            //     parent_context._load_manager.preloadCnt--;
            //     parent_context._load_manager._check_fire_onload();

            //     parent_context = parent_context.getParentContext();
            // }            
        }
    };

    __pLoadManager.on_load_preloadjsmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        var load_Item = this.getPreloadItem("fdl", url);
        if (load_Item)
        {
            load_Item.errcode = errstatus;
            load_Item.module = module;
            load_Item.handle = null;
            load_Item._bLoaded = true;
            var targets = load_Item.targets;
            var target_len = targets.length;
            if (target_len > 0)
            {
                for (var i = 0; i < target_len; i++)
                {
                    if (this.context._p_components)
                    {
                        var target = targets[i];
                        if ((typeof target) == "string")
                        {
                            target = this.context._p_components[target];
                        }
                        if (target)
                        {
                            target._load_manager.on_load_main(url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri, extramsg);
                        }
                    }
                }

                targets.splice(0, target_len);
                this.preloadCnt -= target_len;
                this._check_fire_onload();

                var parent_context = this.context.getParentContext();
                while (parent_context && parent_context._load_manager.preloadCnt > 0)
                {
                    parent_context._load_manager.preloadCnt -= target_len;
                    parent_context._load_manager._check_fire_onload();
                    parent_context = parent_context.getParentContext();
                }
            }
        }
    };

    __pLoadManager.on_load_preloaddatamodule = function (url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        this.on_load_preloaddata_module(1, url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri, extramsg);
    };

    __pLoadManager.on_load_preloaddataobjectmodule = function (url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        this.on_load_preloaddata_module(2, url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri, extramsg);
    };

    //type 1 : "data", 2 : "dataobject"
    __pLoadManager.on_load_preloaddata_module = function (type, url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        let fn = (type == 1 ? "on_preload_data" : "on_preload_dataobject");
        let itemtype = (type == 1 ? "data" : "dataobject");

        var load_Item = this.getPreloadItem(itemtype, url);
        if (load_Item)
        {
            load_Item.errcode = errstatus;
            load_Item.data = data;
            load_Item.handle = null;
            load_Item._bLoaded = true;
            var targets = load_Item.targets;
            var target_len = targets.length;

            if (target_len > 0)
            {
                for (var i = 0; i < target_len; i++)
                {
                    if (this.context._p_all)
                    {
                        var target = targets[i];
                        if ((typeof target) == "string")
                        {
                            target = this.context._p_all[target];
                        }
                        if (target && target[fn])
                        {
                            target[fn](load_Item._requrl, errstatus, data, fireerrorcode, returncode, load_Item._requrl, locationuri, extramsg);
                        }
                    }
                }

                targets.splice(0, target_len);
                this.preloadCnt -= target_len;
            }
            this._check_fire_onload();
        }
    };

    __pLoadManager.on_load_datamodule = function (svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri, extramsg)
    {
        this.on_load_data_module(1, svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri, extramsg);
    };

    __pLoadManager.on_load_dataobjectmodule = function (svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri, extramsg, dataobj, response, responseheaders)
    {
        this.on_load_data_module(2, svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri, extramsg, dataobj, response, responseheaders);
    };

    //type 1 : "data", 2 : "dataobject"
    __pLoadManager.on_load_data_module = function (type, svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri, extramsg, dataobj, response, responseheaders)
    {
        var load_Item = this.getDataItem(svcid);
        if (load_Item)
        {
            var callback_id = load_Item._context_callback;
            var callback_func = this.context[callback_id];

            //받은 데이타가 아무것도 없을때는 callback만 호출됨
            var ret = false;
            if (errstatus < 0 && fireerrorcode)
            {
                load_Item.errcode = errstatus;
                if (fireerrorcode != "comm_cancel_byuser" || fireerrorcode != "comm_stop_transaction_byesc" ||
                    load_Item._is_cancel || !load_Item.handle || (load_Item.handle && !load_Item.handle._user_aborted && load_Item.handle._user_aborted !== undefined))
                {
                    if (dataobj && type == 2)
                        ret = dataobj._onDataObjectRequestError(dataobj, true, dataobj, fireerrorcode, requesturi, returncode, requesturi, locationuri, extramsg, svcid, response, responseheaders);
                    else
                        ret = this.context._onHttpTransactionError(this.context, true, this.context, fireerrorcode, requesturi, returncode, requesturi, locationuri, extramsg, svcid);

                    if (fireerrorcode != "comm_cancel_byuser" && fireerrorcode != "comm_stop_transaction_byesc")
                        ret = false;

                    if (ret) return true;
                }
            }

            if (fireerrorcode == "comm_cancel_byuser" || fireerrorcode == "comm_stop_transaction_byesc")
            {
                // handle이 없는경우는 async=false일때
                //            	if (ret && load_Item.handle && !load_Item.handle._user_aborted && load_Item.handle._user_aborted !== undefined)
                //                    return ret;
                if (load_Item._is_cancel !== undefined && !load_Item._is_cancel)
                    return ret;
            }

            //callback 함수내에서 같은 service 호출하는 경우
            this.removeDataItem(svcid);
            this.removeTransactionItem(svcid);
            this.dataCnt--;

            if (callback_func && typeof (callback_func) == "function")
            {
                callback_func.call(this.context, svcid, errstatus, message);
                if (errstatus === 0)
                {
                    load_Item.handle = null;
                }
            }

            return ret;
        }
    };

    __pLoadManager.getPreloadJSModule = function (url, child)
    {
        var load_Item = this.getPreloadItem("fdl", url);
        if (load_Item)
        {
            if (load_Item._bLoaded)
            {
                child._load_manager.on_load_main(url, load_Item.errcode, load_Item.module);
                return 2;
            }
            else
            {
                if (load_Item.addTarget(child))
                {
                    this.preloadCnt++;
                    var parent_context = this.context.getParentContext();
                    while (parent_context && parent_context._load_manager.status < 6)
                    {
                        parent_context._load_manager.preloadCnt++;
                        parent_context = parent_context.getParentContext();
                    }
                }
                return 1;
            }
        }
        return 0;
    };
    __pLoadManager.getPreloadDataModule = function (id)
    {
        var svcid = "__preload_" + id;
        var load_Item = this.getPreloadItem("data", svcid);
        if (load_Item && load_Item._bLoaded)
        {
            return load_Item.data;
        }
    };

    __pLoadManager.getPreloadDataObjectModule = function (id)
    {
        var svcid = "__preload_" + id;
        var load_Item = this.getPreloadItem("dataobject", svcid);
        if (load_Item && load_Item._bLoaded)
        {
            return load_Item.data;
        }
    };

    __pLoadManager._check_fire_oninit = function ()
    {
        if (this.status < 2 || !this._is_mainloaded)
            return false;

        var cnt, i, item;
        if (this.status == 2)
        {
            //deleted unused updateList            
            this.status = 3;
        }

        if (this.status == 3)
        {
            if (this.globalCnt > 0)
                return false;
            else
            {
                cnt = this.globalList.length;
                for (i = 0; i < cnt; i++)
                {
                    item = this.globalList[i];
                    if (item._bLoaded === false)
                    {
                        item._bLoaded = true;
                        if (item.errorcode >= 0 && item.type != "json")
                        {
                            if (item.data && typeof (item.data) == "function")
                                item.data.call(this.context, ...nexacro.__getProcessExportArgs(this.context));
                            else
                                nexacro._executeScript(item.data, item.url);
                            item.data = null;
                        }
                    }
                }
                this.status = 4;
            }
        }

        if (this.status == 4)
        {
            if (this.localCnt > 0)
                return false;
            else
            {
                cnt = this.localList.length;
                for (i = 0; i < cnt; i++)
                {
                    item = this.localList[i];
                    if (item._bLoaded === false)
                    {
                        item._bLoaded = true;
                        if (item.errorcode >= 0)
                        {
                            if (item.type != "include" && item.module)
                            {
                                item.module.call(this.context, ...nexacro.__getProcessExportArgs(this.context));
                            }

                            item.module = null;
                        }

                    }
                }
                this.status = 5;
            }
        }


        // fire oninit & _check_fire_obload
        if (this.status == 5 && this.context)
        {
            // this function defined by compiler for ADL/FDL
            // create child Objects & Components
            this.context._on_init();
            this._check_fire_onload();
        }
    };

    __pLoadManager._check_fire_onload = function ()
    {
        if (this.status < 5 || !this._is_mainloaded)
            return;

        if (this.status == 5)
        {
            if (this.preloadCnt > 0)
                return false;
            else
            {
                //preload load               
                this.status = 6;
            }
        }

        if (this.status == 6)
        {
            //preload의 include count를 누적해서 가지고 있다.
            if (this.childlocalCnt > 0)
                return false;
            else
                this.status = 7;
        }

        //this.status = 5;
        // fire onload
        if (this.status == 7 && this.context)
        {
            var context = this.context;
            if (!context.parent || !context.parent._is_component) // application
                context._on_load(context, this.main_url);
            else
            {
                if (!context.parent._is_frame || context.parent._is_created)
                    context._on_load(context, this.main_url);

                // frame을 init만 한 상태에서 form이 로딩 f완료 될 경우, 
                // frame이 created 처리 될 때 form onload도 같이 처리한다.
            }

            // clear preload datamodule
            this.clearPreload("data");
        }
    };

    __pLoadManager.clearAllLoad = function ()
    {
        if (this._main_handle)
        {
            nexacro._cancelLoad(this._main_handle, this.main_url);
            this._main_handle = null;
        }
        var cache, module, refs;

        this._is_mainloaded = false;

        var globals = this.globalList;
        var gcnt = globals.length;
        for (let i = 0; i < gcnt; i++)
        {
            var globalitem = globals[i];
            if (globalitem.handle)
                nexacro._cancelLoad(globalitem.handle);
            globalitem.destroy();
        }
        globals.splice(0, gcnt);

        var locals = this.localList;
        var lcnt = locals.length;
        for (let i = 0; i < lcnt; i++)
        {
            var localitem = locals[i];
            if (localitem.handle)
                nexacro._cancelLoad(localitem.handle, localitem.url);

            localitem.destroy();
        }
        locals.splice(0, lcnt);

        var preloads = this.preloadList;
        var pcnt = preloads.length;
        for (let i = 0; i < pcnt; i++)
        {
            var preloaditem = preloads[i];
            if (preloaditem.handle)
                nexacro._cancelLoad(preloaditem.handle);
            preloaditem.destroy();
        }
        preloads.splice(0, pcnt);

        var datas = this.dataList;
        var dcnt = datas.length;
        for (let i = 0; i < dcnt; i++)
        {
            var dataitem = datas[i];
            if (dataitem.handle)
                nexacro._cancelLoad(dataitem.handle);
            dataitem.destroy();
        }
        datas.splice(0, dcnt);

        var trs = this.transactionList;
        var tcnt = trs.length;
        for (let i = 0; i < tcnt; i++)
        {
            var titem = trs[i];
            if (titem)
                titem._hideWaitCursor(this.context);

        }
        trs.splice(0, tcnt);

    };

    __pLoadManager.clearPreload = function (type)
    {
        var preloads = this.preloadList;
        var pcnt = preloads.length;
        for (var i = pcnt - 1; i > 0; i--)
        {
            var preloaditem = preloads[i];
            if (preloaditem.handle && (!type || type == preloaditem.type))
            {
                nexacro._cancelLoad(preloaditem.handle);
                if (type)
                {
                    preloads.splice(i, 1);
                }
                preloaditem.destroy();
            }
        }

        if (!type)
        {
            preloads.splice(0, pcnt);
        }
    };

    __pLoadManager.destroy = function ()
    {
        this.clearAllLoad();
        this.context = null;
    };



    //---------------------------------------------------------------------------------------
    // ComponentItem Object
    //---------------------------------------------------------------------------------------
    nexacro._ComponentItem = function (name, type, classname, moduleurl, version)
    {
        this.name = name;
        this.type = type;
        this.classname = classname;
        this.moduleurl = moduleurl;
        this.version = version | "0.0";
    };
    var __pComponentItem = nexacro._createPrototype(nexacro.Object, nexacro._ComponentItem);
    nexacro._ComponentItem.prototype = __pComponentItem;


    //---------------------------------------------------------------------------------------
    // UpdateItem Object
    //---------------------------------------------------------------------------------------
    nexacro._UpdateItem = function (type, moduleurl, targetpath, ref, version, desc, failpass)
    {
        // this.id = id;
        this.type = type;
        this.file = moduleurl;
        this.targetpath = targetpath;
        this.ref = ref;
        this.version = version;
        this.desc = desc;
        this.failpass = failpass;

    };
    var __pUpdateItem = nexacro._createPrototype(nexacro.Object, nexacro._UpdateItem);
    nexacro._UpdateItem.prototype = __pUpdateItem;

    //---------------------------------------------------------------------------------------
    // Layout Object
    //---------------------------------------------------------------------------------------
    nexacro.Layout = function (name, screenid, w, h, obj, changefn) //, recoverfn)
    {
        this._p_name = name;
        this._p_screenid = screenid;
        this._p_width = w;
        this._p_height = h;
        this._form = obj;
        this.change_fn = changefn;
        //this.recover_fn = recoverfn;

        this._contents_max_rect = [0, 0];
    };

    var _pLayout = nexacro._createPrototype(nexacro.Object, nexacro.Layout);
    nexacro.Layout.prototype = _pLayout;
    _pLayout._type_name = "Layout";
    _pLayout._p_stepcount = 0;
    _pLayout._p_stepindex = 0;
    _pLayout._p_mobileorientation = ""; //설정값이 없으면 모든 경우에 선택대상   'portrait', 'landscape', ""

    // Fluid Layout
    _pLayout._p_type = "default";
    _pLayout._p_spacing = "";
    _pLayout._p_horizontalgap = undefined;
    _pLayout._p_verticalgap = undefined;

    _pLayout._p_flexwrap = "nowrap";
    _pLayout._p_flexmainaxisalign = "start";
    _pLayout._p_flexcrossaxisalign = "start";
    _pLayout._p_flexcrossaxiswrapalign = "start";

    _pLayout._p_tabletemplate = "1* / 1*";
    _pLayout._p_tabletemplatearea = "";
    _pLayout._p_tabledirection = "horizontal";
    _pLayout._p_tablecellalign = "start start";
    _pLayout._p_tablecellincompalign = "start start";
    _pLayout._p_tablecellmovingtype = "autofill";
    _pLayout._is_created = false;
    _pLayout._max_contents_width = 0;
    _pLayout._max_contents_height = 0;

    _pLayout._prop_map_layoutalign_basic = ["start", "center", "end"];
    _pLayout._prop_map_layoutalign_space = ["spacebetween", "spacearound", "spaceevenly"];

    _pLayout.destroy = function ()
    {
        this._p_name = "";
        this._p_screenid = "";
        this._p_description = "";
        this.context = null;
        this._p_width = 0;
        this._p_height = 0;
        this._form = null;
        this.change_fn = null;
        //this.recover_fn = null;
        this._p_stepcount = 0;
        this._p_stepindex = 0;
        this._p_mobileorientation = undefined;

        // Fluid Layout
        this._p_type = "";
        this._p_spacing = "";
        this._p_horizontalgap = undefined;
        this._p_verticalgap = undefined;

        this._p_flexwrap = "";
        this._p_flexmainaxisalign = "";
        this._p_flexcrossaxisalign = "";
        this._p_flexcrossaxiswrapalign = "";

        this._p_tabletemplate = "";
        this._p_tabletemplatearea = "";
        this._p_tabledirection = "";
        this._p_tablecellalign = "";
        this._p_tablecellincompalign = "";
        this._p_tablecellmovingtype = "autofill";

        this._prop_map_layoutalign_basic = null;
        this._prop_map_layoutalign_space = null;
    };

    _pLayout.set_initvalueid = function (initvalueid)
    {
        if (!this._is_created)
        {
            this._p_initvalueid = initvalueid;

            const fn = this._type_name + initvalueid;
            const nexacro_init = this._form._getEnvironment()?._getInitValues();
            if (nexacro_init && nexacro_init[fn])
                nexacro_init[fn].call(this, this);
        }
    };


    _pLayout.set_name = function (v)
    {
        this._p_name = v;
    };

    _pLayout.set_screenid = function (v)
    {
        this._p_screenid = v;
    };

    _pLayout.set_description = function (v)
    {
        this._p_description = v;
    };

    _pLayout.set_width = function (v)
    {
        this._p_width = v;
    };

    _pLayout.set_height = function (v)
    {
        this._p_height = v;
    };

    _pLayout.set_stepcount = function (v)
    {
        if (this._p_type != "default")
            return;

        v = parseInt(v) | 0;
        if (v !== this._p_stepcount)
        {
            this._p_stepcount = v;
        }
    };

    _pLayout.set_stepindex = function (v)
    {
        v = parseInt(v) | 0;
        if (v != this._p_stepindex && v < this._p_stepcount)
        {
            this._p_stepindex = v;
        }
    };

    _pLayout.set_mobileorientation = function (v)
    {
        this._p_mobileorientation = v;
    };

    // Fluid Layout Setter
    _pLayout.set_type = function (v)
    {
        if (this._p_stepcount > 0)
        {
            this._p_type = "default";
            return;
        }

        var type_enum = ["default", "horizontal", "vertical", "table"];
        if (type_enum.indexOf(v) == -1)
        {
            v = "default";
        }

        if (this._p_type != v)
        {
            this._p_type = v;
        }
    };

    _pLayout.set_spacing = function (v)
    {
        this._p_spacing = v;
        this._spacing = new nexacro.PaddingObject(v);
    };

    _pLayout.set_horizontalgap = function (v)
    {
        if (v !== undefined && v !== null && v !== "")
        {
            if (typeof v == "number")
            {
                if (isNaN(v) || v < 0)
                    return;
            }
            else
            {
                v = nexacro._toString(v).trim();
                if (!v)
                    return;

                if (/^[-+]?\d*\.?\d+$/.test(v))
                {
                    v = +v;
                    if (isNaN(v) || v < 0)
                        return;
                }
                else if (!/^\d*\.?\d+(px|em|rem)$/i.test(v))
                {
                    return;
                }
            }
        }

        if (this._p_horizontalgap != v)
        {
            this._p_horizontalgap = v;
        }
    };

    _pLayout.set_verticalgap = function (v)
    {
        if (v !== undefined && v !== null && v !== "")
        {
            if (typeof v == "number")
            {
                if (isNaN(v) || v < 0)
                    return;
            }
            else
            {
                v = nexacro._toString(v).trim();
                if (!v)
                    return;

                if (/^[-+]?\d*\.?\d+$/.test(v))
                {
                    v = +v;
                    if (isNaN(v) || v < 0)
                        return;
                }
                else if (!/^\d*\.?\d+(px|em|rem)$/i.test(v))
                {
                    return;
                }
            }
        }

        if (this._p_verticalgap != v)
        {
            this._p_verticalgap = v;
        }
    };

    _pLayout.set_flexwrap = function (v)
    {
        var wrap_enum = ["nowrap", "wrap"];
        if (wrap_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_flexwrap != v)
        {
            this._p_flexwrap = v;
        }
    };

    _pLayout.set_flexmainaxisalign = function (v)
    {
        var align_enum = this._prop_map_layoutalign_basic.concat(this._prop_map_layoutalign_space);
        if (align_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_flexmainaxisalign != v)
        {
            this._p_flexmainaxisalign = v;
        }
    };

    _pLayout.set_flexcrossaxisalign = function (v)
    {
        var align_enum = this._prop_map_layoutalign_basic;
        if (align_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_flexcrossaxisalign != v)
        {
            this._p_flexcrossaxisalign = v;
        }
    };

    _pLayout.set_flexcrossaxiswrapalign = function (v)
    {
        var align_enum = this._prop_map_layoutalign_basic.concat(this._prop_map_layoutalign_space);
        if (align_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_flexcrossaxiswrapalign != v)
        {
            this._p_flexcrossaxiswrapalign = v;
        }
    };


    _pLayout.set_tabletemplate = function (v)
    {
        if (v && this._p_tabletemplate != v)
        {
            this._p_tabletemplate = v;
            this.on_apply_tabletemplate(v);
        }
    };
    _pLayout._setDefaultTabletemplate = function (v)
    {
        this._tabletemplate = v;
    };

    _pLayout.on_apply_tabletemplate = function (v)
    {
        v = v ? v : this._p_tabletemplate;
        if (!this._tabletemplate)
            this._tabletemplate = v;
        if (nexacro._isDesignMode())
            return;
        if (v)// && this.tablecellmovingtype && this.tablecellmovingtype != "none")
        {
            const env = this._form._getEnvironment();
            var manager = env._getLayoutManager();
            if (manager)
            {
                var current_layout = manager.getCurrentLayout(this._form);
                if (!current_layout) return;
                var current_layout_name = current_layout._p_name;
                if (current_layout_name != this._p_name)
                    return;

                var fluidLayoutmanager = manager._fluidlayoutmanager;
                if (fluidLayoutmanager)
                {
                    var _form = this._form;
                    if (_form)
                    {
                        //check
                        if (nexacro._isDesignMode())
                        {
                            fluidLayoutmanager._prev_tabletemplate = this._tabletemplate;
                        }
                        else
                        {
                            var control_element = _form.getElement();
                            if (control_element)
                                control_element.setElementTableTemplate(v);
                            fluidLayoutmanager._prev_tabletemplate = this._tabletemplate; //this._prev_tabletemplate ? this._prev_tabletemplate : this._tabletemplate;
                        }
                        _form._is_changed_tabletemplate = true;
                        manager.calcFluidLayoutContents(_form);
                        _form._is_changed_tabletemplate = false;
                        //if (!nexacro._isDesignMode())// && current_layout_name ==this.name)
                        //    this._tabletemplate = v;
                    }
                }
            }
        }
    };

    _pLayout.set_tabletemplatearea = function (v)
    {
        this._p_tabletemplatearea = v;
    };

    _pLayout.set_tablecellmovingtype = function (v)
    {
        var type_enum = ["none", "autofit", "autofill"];
        if (type_enum.indexOf(v) == -1)
        {
            return;
        }
        this._p_tablecellmovingtype = v;
        //this.on_apply_tablecellmovingtype();
    };
    /*
    _pLayout.on_apply_tablecellmovingtype = function (v)
    {
        if (this.tablecellmovingtype && this.tablecellmovingtype != "none" && nexacro._isDesignMode())
        {
            this.on_apply_tabletemplate();
        }
    };
    */
    _pLayout.set_tabledirection = function (v)
    {
        var direction_enum = ["horizontal", "vertical"];
        if (direction_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_tabledirection != v)
        {
            this._p_tabledirection = v;
        }
    };


    _pLayout.set_tablecellalign = function (v)
    {
        this._p_tablecellalign = v;
    };

    _pLayout.set_tablecellincompalign = function (v)
    {
        this._p_tablecellincompalign = v;
    };

    _pLayout._setLayoutContentsMaxRect = function (w, h)
    {
        this._contents_max_rect = [w, h];
    };

    _pLayout._getLayoutContentsMaxRect = function ()
    {
        return this._contents_max_rect;
    };

    _pLayout._setLayoutFitContentsMaxRect = function (w, h)
    {
        this._fit_contents_max_rect = [w, h];
    };
    _pLayout._getLayoutFitContentsMaxRect = function ()
    {
        return this._fit_contents_max_rect;
    };

    _pLayout._properties = [{ name: "description" }, { name: "flexcrossaxisalign" }, { name: "flexcrossaxiswrapalign" }, { name: "flexmainaxisalign" }, { name: "flexwrap" }, { name: "height" }, { name: "horizontalgap" }, { name: "initvalueid" }, { name: "mobileorientation" }, { name: "name" }, { name: "screenid" }, { name: "spacing" }, { name: "stepcount" }, { name: "stepindex" }, { name: "tablecellalign" }, { name: "tablecellincompalign" }, { name: "tablecellmovingtype" }, { name: "tabledirection" }, { name: "tabletemplate" }, { name: "tabletemplatearea" }, { name: "type" }, { name: "verticalgap" }, { name: "width" }];
    nexacro._defineProperties(_pLayout, _pLayout._properties);

    // TODO LAYOUT 신규 매니저 작업
    //==============================================================================
    // nexacro._LayoutManager
    //==============================================================================
    nexacro._LayoutManager = function (useMulti, useStep, useFluid)
    {
        if (useMulti)
            this.initMultiLayoutManager();

        if (useStep)
            this.initStepLayoutManager();

        if (useFluid)
            this.initFluidLayoutManager();

        this.container_info = [];
    };
    var __pLayoutManager = nexacro._createPrototype(nexacro.Object, nexacro._LayoutManager);
    nexacro._LayoutManager.prototype = __pLayoutManager;
    __pLayoutManager._type_name = "LayoutManager";

    // common layout API
    __pLayoutManager.addLayoutList = function (objContainer, objLayout)
    {
        // screenid과 통일한것만 추가할지는 추적검토
        var layout_list = this.getLayoutList(objContainer);
        if (layout_list)
        {
            var item = layout_list.get_item(objLayout._p_name);
            if (item && objLayout._p_width < 11) //timing problem //DesignForm
                return;
            layout_list.add_item(objLayout._p_name, objLayout);
        }
    };
    __pLayoutManager.updateLayoutList = function (objContainer, layoutname, propval)
    {
        var layout_list = this.getLayoutList(objContainer);
        if (layout_list)
        {
            var idx = layout_list.indexOf(layoutname);
            layout_list.update_id(idx, propval);
        }
    }
    __pLayoutManager.getLayoutList = function (objContainer)
    {
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            return container_info.layout_list;
        }
    };

    __pLayoutManager.getLayout = function (objContainer, strLayoutName)
    {
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            if (!strLayoutName || strLayoutName == "")
                strLayoutName = "default";

            return container_info.layout_list[strLayoutName];
        }
    };
    __pLayoutManager.getCurrentLayout = function (objContainer)
    {
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            var layout = this._getLayoutObject(container_info.current_layout_name, container_info.layout_list);
            if (!layout)
            {
                layout = this._getLayoutObject("default", container_info.layout_list);
            }
            return layout;
        }
    };
    __pLayoutManager.getCurrentLayoutName = function (objContainer)
    {
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            return container_info.current_layout_name;
        }
        return "default";
    }

    __pLayoutManager.setLayoutProperty = function (objContainer, strLayoutName, strPropName, PropValue)
    {
        var layout = this.getLayout(objContainer, strLayoutName);
        if (layout)
        {
            layout["set_" + strPropName].call(layout, PropValue);
        }
    }
    __pLayoutManager.getLayoutProperty = function (objContainer, strPropName, strLayoutName)
    {
        // 레이아웃이 지정된게 없으면 Current
        if (!strLayoutName)
        {
            strLayoutName = this.getCurrentLayoutName(objContainer);
        }

        var layout = this.getLayout(objContainer, strLayoutName);
        if (layout)
        {
            return layout[strPropName];
        }

        return;
    };
    __pLayoutManager.getLayoutProperties = function (objContainer, arrPropName, strLayoutName)
    {
        // 레이아웃이 지정된게 없으면 Current
        if (!strLayoutName)
        {
            strLayoutName = this.getCurrentLayoutName(objContainer);
        }

        var layout = this.getLayout(objContainer, strLayoutName);
        if (layout)
        {
            var ret = {};
            arrPropName.forEach(function (strPropName)
            {
                ret[strPropName] = layout[strPropName];
            }, this);

            return ret;
        }

        return;
    };

    __pLayoutManager.acceptMultiLayoutManager = function ()
    {
        return !!this._multilayoutmanager;
    };
    __pLayoutManager.acceptFluidLayoutManager = function ()
    {
        return !!this._fluidlayoutmanager;
    };

    // multilayout
    __pLayoutManager.initMultiLayoutManager = function ()
    {
        // manager init
        this._multilayoutmanager = new nexacro._MultiLayoutManager();
    };

    __pLayoutManager.selectLayout = function (objContainer)
    {
        if (nexacro._isDesignMode()) return true;
        if (!this.acceptMultiLayoutManager()) return false;
        if (!objContainer._orgurl) return false;

        var manager_multi = this._multilayoutmanager;
        //var manager_fluid = this._fluidlayoutmanager;

        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            // Form, url이 설정된 Div 의 경우 사이즈기반 판단.
            var def_layout = this._getLayoutObject("default", container_info.layout_list);
            var cur_layout = this._getLayoutObject(container_info.current_layout_name, container_info.layout_list);
            var new_layout = manager_multi.getValidLayoutObject(container_info, objContainer._adjust_width, objContainer._adjust_height);

            if (cur_layout != new_layout)
            {
                var old_layoutname = cur_layout ? cur_layout._p_name : "";
                var old_layoutwidth = cur_layout ? cur_layout._p_name : 0;
                var old_layoutheight = cur_layout ? cur_layout._p_name : 0;
                var is_defaultload = old_layoutname == "" && new_layout._p_name == "default";
                old_layoutname = old_layoutname == "" ? "default" : old_layoutname;
                var ret;
                if (!is_defaultload)
                    ret = objContainer.on_fire_canlayoutchange(objContainer, "canlayoutchange", old_layoutname, new_layout._p_name, old_layoutwidth, new_layout._p_width, old_layoutheight, new_layout._p_height);
                if (ret === true || ret === undefined)
                {
                    manager_multi.changeLayout(objContainer, container_info, new_layout, def_layout);
                    // div의 레이아웃이 분리되면서 url 폼 갱신시 컨텐츠 컨테이너 갱신이 별도로 필요함
                    this._changeChildContainerLayout(objContainer, this._getContainerLevel(objContainer), container_info.current_layout_name);
                    if (!is_defaultload)
                        objContainer.on_fire_onlayoutchanged(objContainer, "onlayoutchanged", old_layoutname, new_layout._p_name, old_layoutwidth, new_layout._p_width, old_layoutheight, new_layout._p_height);
                    objContainer._setInnerFlexibleFlag(this.isFluidLayoutType(objContainer));//, manager_fluid.getLayoutArrangeType());
                    //this.calcFluidLayoutContents(objContainer);
                    return true;
                }
            }
            else if (!cur_layout) // || cur_layout != new_layout)      
            {
                objContainer._setInnerFlexibleFlag(this.isFluidLayoutType(objContainer));//, manager_fluid.getLayoutArrangeType());
                this._changeChildContainerLayout(objContainer, this._getContainerLevel(objContainer), container_info.current_layout_name);
            }
        }

        return false;
    };
    __pLayoutManager.selectLayoutForDesign = function (objContainer)
    {
        if (!this.acceptMultiLayoutManager()) return;

        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            var manager_multi = this._multilayoutmanager;
            var new_layout = manager_multi.getValidLayoutObject(container_info, objContainer._adjust_width, objContainer._adjust_height);

            manager_multi.changeLayout(objContainer, container_info, new_layout);

            return new_layout;
        }
    };
    __pLayoutManager.selectLayoutAllContainer = function ()
    {
        if (!this.acceptMultiLayoutManager()) return;

        // div이 url과 컨텐츠 생성을 분리
        // 레이아웃 이름 및 사이즈로 판단
    };
    __pLayoutManager._changeChildContainerLayout = function (objContainer, nContainerLevel, changeLayoutName)
    {
        var manager_multi = this._multilayoutmanager;

        // 받아온 컨테이너 기준으로 아래 레빌을 검색
        var infos = this.container_info;
        var next_level = nContainerLevel + 1;
        var next_level_info = infos[next_level];
        if (next_level_info)
        {
            next_level_info.forEach(function (info)
            {
                var parent_context = info.parentContext;
                var self_context = info.selfContext;
                if (!self_context._orgurl)
                {
                    var is_same = this._equalContainer(objContainer, parent_context);
                    if (is_same)
                    {
                        var def_layout = this._getLayoutObject("default", info.layout_list);
                        var new_layout = info.layout_list[changeLayoutName];

                        // 바뀔 레이아웃의 정보가 없으면 해당 컨테이너는 굳이 변경을 시도하지 않음

                        if (new_layout)
                        {
                            manager_multi.changeLayout(self_context, info, new_layout, def_layout);
                        }
                        this.applyFluid(self_context);
                        self_context._setInnerFlexibleFlag(this.isFluidLayoutType(self_context));//, this._fluidlayoutmanager.getLayoutArrangeType())
                        if (self_context._is_created_contents)
                            this.calcFluidLayoutContents(self_context);
                        this._changeChildContainerLayout(self_context, next_level, changeLayoutName);
                    }
                }
            }, this);
        }
    };
    __pLayoutManager.setLayoutChangeFlag = function (v)
    {
        if (!this.acceptMultiLayoutManager()) return;

        this._multilayoutmanager.setLayoutChangeFlag(v);
    };
    __pLayoutManager.getLayoutChangeFlag = function ()
    {
        if (!this.acceptMultiLayoutManager()) return;

        this._multilayoutmanager.getLayoutChangeFlag();
    }
    __pLayoutManager.getValidLayout = function (objContainer)
    {
        if (!this.acceptMultiLayoutManager()) return;

        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            return this._multilayoutmanager.getValidLayoutObject(container_info, objContainer._adjust_width, objContainer._adjust_height);
        }
    };

    // steplayout
    __pLayoutManager.initStepLayoutManager = function ()
    {
        // define

        // bind
        this._steplayoutmanager = {};
        this._steplayoutmanager[""];
    };
    __pLayoutManager.applyStep = function (objContainer)
    {
        // 레이아웃 변경후 Step설정 적용
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            if (nexacro.isDesignMode && !container_info.current_layout_name)
                container_info.current_layout_name = container_info.default_layout_name;


            var layout = this._getLayoutObject(container_info.current_layout_name, container_info.layout_list);
            if (layout)
            {
                var stepcount = layout._p_stepcount;
                var stepindex = layout._p_stepindex;

                objContainer._on_prepare_stepcontents(stepcount, stepindex);
                objContainer._on_refresh_stepcontents(stepcount, stepindex);
            }
        }
    };
    __pLayoutManager.applyFluid = function (objContainer)
    {
        // 레이아웃 변경후 Layout설정 적용
        if (!this.acceptFluidLayoutManager()) return;
        if (!objContainer) return;

        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        switch (this.getLayoutType(objContainer))
        {
            case 0: //LAYOUT_TYPE_ABSOLUTE
                break;
            case 1: //LAYOUT_TYPE_FLUIDHORIZONTAL
            case 2: //LAYOUT_TYPE_FLUIDVERTICAL
            case 3: //LAYOUT_TYPE_FLUIDTABLE
                var layout = this.getCurrentLayout(objContainer);
                if (layout)
                {
                    objContainer._setLayoutContainerProps();
                }
                break;
        }
    };

    // fluidlayout
    __pLayoutManager.calcLayout = function (objContainer)
    {
        switch (this.getLayoutType(objContainer))
        {
            case 0: //LAYOUT_TYPE_ABSOLUTE
                this.calcAbsoluteLayoutContents(objContainer);
                break;
            case 1: //LAYOUT_TYPE_ABSOLUTE
            case 2: //LAYOUT_TYPE_ABSOLUTE
            case 3: //LAYOUT_TYPE_ABSOLUTE
                this.calcFluidLayoutContents(objContainer);
                break;
        }
    };

    __pLayoutManager.initFluidLayoutManager = function ()
    {
        // manager init
        this._fluidlayoutmanager = new nexacro._FluidLayoutManager();
    };
    __pLayoutManager.calcFluidLayoutContents = function (objContainer)
    {
        //trace("calcFluidLayoutContents");
        //nexacro._traceV8CallStack();
        if (!this.acceptFluidLayoutManager()) return;

        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            var fittype = container_info.container_fittype;
        }
        if (objContainer)
        {
            //if (objContainer.getOffsetWidth() <= 0 || objContainer.getOffsetHeight() <= 0) return;
            if ((fittype == 0 && (objContainer.getOffsetWidth() <= 0 || objContainer.getOffsetHeight() <= 0))
                || (fittype == 1 && objContainer.getOffsetHeight() <= 0) || (fittype == 2 && objContainer.getOffsetWidth() <= 0)) return;

            this._calcFluidLayoutTargetContainer(objContainer);
        }
        else
        {
            this._calcFluidLayoutAllContainer();
        }
    };
    __pLayoutManager.calcAbsoluteLayoutContents = function (objContainer)
    {
        if (objContainer)
        {
            //if (objContainer.getOffsetWidth() <= 0 || objContainer.getOffsetHeight() <= 0) return;

            this._calcAbsoluteLayoutTargetContainer(objContainer);
        }
        else
        {
            this._calcAbsoluteLayoutAllContainer();
        }
    };

    __pLayoutManager.applyFluidLayoutContentsProeprty = function (objContents, propname)
    {
        if (!this.acceptFluidLayoutManager())
            return;

        var manager = this._fluidlayoutmanager;
        if (!objContents || !manager)
            return;

        var objContainer = objContents._is_group ? objContents._group_panel : objContents._getForm();
        if (!objContainer)
            return;

        if (this.isFluidLayoutType(objContainer))
        {
            if (nexacro._is_native_fluidlayout)
            {
                var control_elem = objContents.getElement();
                if (control_elem)
                {
                    switch (propname)
                    {
                        case "flexgrow": control_elem.setElementFlexGrow(objContents._p_flexgrow); break;
                        case "flexshrink": control_elem.setElementFlexShrink(objContents._p_flexshrink); break;
                        case "layoutorder": control_elem.setElementLayoutOrder(objContents._p_layoutorder); break;
                        case "tablecellarea": control_elem.setElementTableCellArea(objContents._p_tablecellarea); break;
                    }
                }
                if (!objContainer._is_changed_tabletemplate)
                {
                    this._calcFluidLayoutTargetContainer(objContainer);
                }
            }
            else
            {
                if (!objContainer._is_changed_tabletemplate)
                    this._calcFluidLayoutTargetContainer(objContainer);
            }
        }
    };

    __pLayoutManager.setLayoutScrollType = function (objContainer)
    {
        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        var is_fluidlayout = this.isFluidLayoutType(objContainer);
        if (!is_fluidlayout && !(objContainer instanceof nexacro._InnerForm))
            return;
        objContainer._use_translate_scroll = !nexacro._is_native_fluidlayout;
    };

    __pLayoutManager.getLayoutType = function (objContainer)
    {
        var ret = this._fluidlayoutmanager._FLUIDLAYOUT_CONST["LAYOUT_TYPE_ABSOLUTE"];

        if (!this.acceptFluidLayoutManager()) return ret;

        var manager = this._fluidlayoutmanager;
        if (!manager) return ret;

        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            var layout = this.getCurrentLayout(objContainer);
            ret = manager.getLayoutContainerType(layout);
        }

        return ret;
    };
    __pLayoutManager.getContentsMaxRect = function (objContainer)
    {
        var layout = this.getCurrentLayout(objContainer);
        if (layout)
        {
            return layout._getLayoutContentsMaxRect();
        }

        return [0, 0];
    };

    __pLayoutManager.isFluidLayoutType = function (objContainer)
    {
        var ret = false;

        if (!this.acceptFluidLayoutManager()) return ret;

        var manager = this._fluidlayoutmanager;
        if (!manager) return ret;

        var layout = this.getCurrentLayout(objContainer);
        if (layout)
        {
            var container_type = manager.getLayoutContainerType(layout);
            switch (container_type)
            {
                case 1: //LAYOUT_TYPE_FLUIDHORIZONTAL
                case 2: //LAYOUT_TYPE_FLUIDVERTICAL
                case 3: //LAYOUT_TYPE_FLUIDTABLE
                    ret = true;
                    break;
                case 0: //LAYOUT_TYPE_ABSOLUTE
                default:
                    break;
            }
        }

        return ret;
    };

    __pLayoutManager._calcFluidLayoutTargetContainer = function (objContainer)
    {
        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        var layout = this.getCurrentLayout(objContainer);
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            var contents_info;
            switch (this.getLayoutType(objContainer))
            {
                case 0: //LAYOUT_TYPE_ABSOLUTE
                    break;
                case 1: //LAYOUT_TYPE_FLUIDHORIZONTAL
                    contents_info = this.createFlexLayoutContentsInfo(container_info);
                    if (contents_info.length == 0) 
                    {
                        if (container_info.container_fittype == 0)
                            return;
                    }

                    manager.initFluidFlexProps(layout._form || objContainer, layout, contents_info, container_info);
                    manager.calcFluidHorizontalContents(layout);
                    if (manager.calcContainer(container_info, layout))
                    {
                        this.calcLayout(container_info.parentContext);
                    }
                    break;
                case 2: //LAYOUT_TYPE_FLUIDVERTICAL
                    contents_info = this.createFlexLayoutContentsInfo(container_info);
                    if (contents_info.length == 0) 
                    {
                        if (container_info.container_fittype == 0)
                            return;
                    }

                    manager.initFluidFlexProps(layout._form || objContainer, layout, contents_info, container_info);
                    manager.calcFluidVerticalContents(layout);
                    if (manager.calcContainer(container_info, layout))
                    {
                        this.calcLayout(container_info.parentContext);
                    }
                    break;
                case 3: //LAYOUT_TYPE_FLUIDTABLE
                    contents_info = this.createTableLayoutContentsInfo(container_info);
                    manager.initFluidTableProps(layout._form || objContainer, layout, contents_info, this.getLayout(objContainer, "default"), container_info);
                    manager.calcFluidTableContents(layout._form || objContainer);
                    layout._setLayoutContentsMaxRect(manager._max_contents_right, manager._max_contents_bottom);
                    layout._setLayoutFitContentsMaxRect(manager._max_fit_contents_right, manager._max_fit_contents_bottom);
                    if (manager.calcContainer(container_info, layout))
                    {
                        this.calcLayout(container_info.parentContext);
                    }
                    break;
                default:
                    break;
            }
        }
    };
    __pLayoutManager._calcFluidLayoutAllContainer = function ()
    {
        this.container_info.forEach(function (infos)
        {
            infos.forEach(function (info)
            {
                var layout = this._getLayoutObject(info.current_layout_name, info.layout_list);
                if (!layout)
                {
                    layout = this._getLayoutObject("default", info.layout_list);
                }

                if (layout && layout._form)
                {
                    if (layout._form.getOffsetWidth() <= 0 || layout._form.getOffsetHeight() <= 0) return;

                    this._calcFluidLayoutTargetContainer(layout._form);
                }
            }, this);
        }, this);
    };

    __pLayoutManager._calcAbsoluteLayoutTargetContainer = function (objContainer)
    {
        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        var layout = this.getCurrentLayout(objContainer);
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            container_info.__calc_container = true;

            switch (this.getLayoutType(objContainer))
            {
                case 0: //LAYOUT_TYPE_ABSOLUTE
                    if (layout)
                    {
                        var rect = objContainer._calcScrollMaxSize();
                        var fittype = objContainer._getFittocontents();
                        var use_w = (fittype === "width" || fittype === "both") ? rect.cw : rect.w;
                        var use_h = (fittype === "height" || fittype === "both") ? rect.ch : rect.h;
                        layout._setLayoutContentsMaxRect(use_w, use_h);
                        if (manager.calcContainer(container_info, layout))
                        {
                            this.calcLayout(container_info.parentContext);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };

    __pLayoutManager._calcAbsoluteLayoutAllContainer = function ()
    {
        this.container_info.forEach(function (infos)
        {
            infos.forEach(function (info)
            {
                var layout = this._getLayoutObject(info.current_layout_name, info.layout_list);
                if (!layout)
                {
                    layout = this._getLayoutObject("default", info.layout_list);
                }

                if (layout && layout._form)
                {
                    if (layout._form.getOffsetWidth() <= 0 || layout._form.getOffsetHeight() <= 0) return;

                    this._calcAbsoluteLayoutTargetContainer(layout._form);
                }
            }, this);
        }, this);
    };

    __pLayoutManager._getTemplateRectInfo = function (objContainer)
    {
        var ret = [];

        if (!this.acceptFluidLayoutManager()) return ret;

        var manager = this._fluidlayoutmanager;
        if (!manager) return ret;

        if (nexacro._is_native_fluidlayout)
        {
            return ret;
        }

        var container_type = this.getLayoutType(objContainer);
        switch (container_type)
        {
            case 0: //LAYOUT_TYPE_ABSOLUTE
            case 1: //LAYOUT_TYPE_FLUIDHORIZONTAL
            case 2: //LAYOUT_TYPE_FLUIDVERTICAL
                break;
            case 3: //LAYOUT_TYPE_FLUIDTABLE
                ret = manager._getTemplateRectInfo();
                break;
            default:
                break;
        }

        return ret;
    };

    // containerinfo
    __pLayoutManager.createLayoutContainerInfo = function (objContext)
    {
        // container_info = [
        //  [{Form}],
        //  [{Div1.form}, {Tab.Tabpage.form}]
        //  [{Div1.form.Div1.form}]
        //]

        // 중복체크
        var container_info = this._findContainerInfo(objContext);
        if (container_info) return;

        var level = this._getContainerLevel(objContext);
        if (!this.container_info[level])
        {
            this.container_info[level] = [];
        }

        this.container_info[level].push(this._makeContainerInfo(objContext));
    };

    __pLayoutManager.updateLayoutContainerInfo = function (objContainer)
    {
        var container_info = this._findContainerInfo(objContainer);
        if (container_info)
        {
            container_info.parentContext = objContainer._is_group ? objContainer._group_panel : objContainer._p_parent._is_form ? objContainer._p_parent : objContainer._p_parent._getParentForm();
            //나머지는 필요하면
        }
    };

    __pLayoutManager.destroyLayoutContainerInfo = function (objContext)
    {
        var nLevel = this._getContainerLevelContainerInfoBase(objContext);
        if (nLevel == 0 && this.container_info[nLevel] && this.container_info[nLevel].length == 1)
        {
            var container_info = this.container_info[nLevel] ? this.container_info[nLevel][0] : null;
            if (container_info)
            {
                // layout 날리고
                var layouts = container_info.layout_list;
                for (var i = layouts.length - 1; i >= 0; i--)
                {
                    var layout = layouts.get_id(i);
                    if (layout)
                    {
                        if (layouts[layout].destroy)
                            layouts[layout].destroy();
                        layouts.delete_item(layout);
                    }
                }

                this.container_info[nLevel].pop();
            }
        }
        else if (nLevel >= 0)
        {
            var infos = this.container_info[nLevel];
            if (!infos) return null;

            var i;
            var is_find = false
            for (i = 0; i < infos.length; i++)
            {
                var container_info = infos[i];
                var container_context = container_info.selfContext;
                var is_same = this._equalContainer(objContext, container_context);
                if (is_same)
                {
                    is_find = true;
                    break;
                }
            }

            if (is_find)
            {
                this.container_info[nLevel].splice(i, 1);
            }
        }
    };
    __pLayoutManager.getContainerInfo = function (objContext)
    {
        return this._findContainerInfo(objContext);
    };

    __pLayoutManager.setContainerFitType = function (objContainer, type)
    {
        if (!objContainer) return;

        var manager = this._fluidlayoutmanager;
        if (!manager) return;

        var container_info = this._findContainerInfo(objContainer);
        if (!container_info) return;

        container_info["container_fittype"] = manager.getLayoutContainerFitType(type);
    };

    __pLayoutManager._makeContainerInfo = function (objContainer)
    {
        var ret = {
            container_name: objContainer._p_name,

            selfContext: objContainer,
            parentContext: objContainer._is_group ? objContainer._group_panel : objContainer._p_parent ? (objContainer._p_parent._is_form ? objContainer._p_parent : objContainer._p_parent._getParentForm()) : null,
            default_layout_name: "default",
            current_layout_name: "",
            layout_list: new nexacro.Collection(),

            container_fittype: nexacro._FluidLayoutManager.prototype._FLUIDLAYOUT_CONST.LAYOUT_CONTAINER_FITTYPE_CONV["none"],
        };

        return ret;
    };
    __pLayoutManager._removeSelfContainerInfo = function (objContainer)
    {
        var ret = -1;
        var container_level = this._getContainerLevelContainerInfoBase(objContainer);

        var infos = this.container_info[container_level];
        if (!infos)
            return;

        for (var i = 0; i < infos.length; i++)
        {
            var container_info = infos[i];
            var container_context = container_info.selfContext;
            var is_same = this._equalContainer(objContainer, container_context);
            if (is_same)
            {
                ret = container_level;
                var layouts = container_info.layout_list;
                for (var j = layouts.length - 1; j >= 0; j--)
                {
                    var layout = layouts.get_id(j);
                    if (layout)
                    {
                        if (layouts[layout].destroy)
                            layouts[layout].destroy();
                        layouts.delete_item(layout);
                    }
                }
                this.container_info[container_level].splice(i, 1);
                break;
            }
        }

        return ret;
    };
    __pLayoutManager._removeSubContainerInfo = function (objContainer, target_level)
    {
        var next_level = target_level + 1;

        var infos = this.container_info[next_level];
        if (!infos) return null;
        var remove_info_idx = [];
        for (var i = 0, is_child = false; i < infos.length; i++)
        {
            var container_info = infos[i];
            var container_context = container_info.parentContext;
            var is_child = this._equalContainer(objContainer, container_context);
            if (is_child)
            {
                // 자식중에 부모가 일치하는걸 찾았음...
                // 얠 기준으로 다시 아래 레벨에서 탐색...
                // 재귀를 돌다보면 부모가 일치하지 않는 시점이 나옴. 이때는 아무것도 안함
                remove_info_idx.push(i);

                this._removeSubContainerInfo(container_info, next_level);

            }
        }

        // 마지막부터 삭제
        remove_info_idx.reverse();
        remove_info_idx.forEach(function (info_idx)
        {
            var _info = infos[info_idx];
            var layouts = _info.layout_list;
            for (var j = layouts.length - 1; j >= 0; j--)
            {
                var layout = layouts.get_id(j);
                if (layout)
                {
                    if (layouts[layout].destroy)
                        layouts[layout].destroy();
                    layouts.delete_item(layout);
                }
            }
            this.container_info[next_level].splice(info_idx, 1);
        }, this);
    };
    __pLayoutManager._findContainerInfo = function (objContainer)
    {
        if (!objContainer) return null;

        var nLevel = this._getContainerLevel(objContainer);
        var infos = this.container_info[nLevel];

        if (!infos) return null;

        return infos.find(info => this._equalContainer(objContainer, info.selfContext)) || null;
    };
    __pLayoutManager._getContainerLevel = function (objContainer)
    {
        var level = 0;

        var objParent = objContainer._p_parent;

        if (!objParent)
            return level;

        while (objParent && !objParent._is_frame)
        {
            if (objParent instanceof nexacro.Form)// && !(objContainer instanceof nexacro.Panel))
            {
                level++;
            }
            objParent = objParent._p_parent ? objParent._p_parent : null;
        }

        return level;
    };
    __pLayoutManager._getContainerLevelContainerInfoBase = function (objContainer)
    {
        // 컨테이너 트리가 완성형태일때 사용가능
        // 컨테이너가 컨테이너인포에 반드시 존재함
        var level = 0;
        var infos = this.container_info;
        if (objContainer._unique_id == "form")
        {
            // url 사용
            for (var level = 0, is_find = false; level < infos.length; level++)
            {
                var info = infos[level];
                for (var i = 0; i < info.length; i++)
                {
                    if (objContainer._orgurl == info[i].selfContext._orgurl)
                    {
                        is_find = true;
                        break;
                    }
                }
                if (is_find) break;
            }
        }
        else
        {
            // contents 사용. uniqueid로 비교
            for (var level = 0, is_find = false; level < infos.length; level++)
            {
                var info = infos[level];
                if (!info) continue;
                for (var i = 0; i < info.length; i++)
                {
                    //if (objContainer._unique_id == info[i].selfContext._unique_id)
                    if (this._equalContainer(objContainer, info[i].selfContext))
                    {
                        is_find = true;
                        break;
                    }
                }
                if (is_find) break;
            }
        }

        return level;
    };
    __pLayoutManager._equalContainer = function (pThis, target)
    {
        if (Object.is)
        {
            return Object.is(pThis, target);
        }
        else
        {
            var check_fn = function (v1, v2)
            {
                if (v1 === v2)
                {
                    return v1 !== 0 || 1 / v1 === 1 / v2;
                }
                else
                {
                    return v1 !== v1 && v2 !== v2;
                }
            };

            return check_fn(pThis, target);
        }
    };

    // contentsinfo
    __pLayoutManager.createFlexLayoutContentsInfo = function (objContainerInfo)
    {
        // 수평 수직 레이아웃에서 사용할 컨텐츠 집합
        var i;
        var contents_info = [];
        var is_panel = false;
        var comps = objContainerInfo.selfContext._p_components;
        if (objContainerInfo.selfContext._is_panel)
        {
            is_panel = true;
            comps = objContainerInfo.selfContext._getComponents();
        }

        for (i = 0; i < comps.length; i++)
        {
            var comp = comps[i];

            if (!this._isContentsVisible(comp) || (!is_panel && comp._is_group))
                continue;

            var comp_info = this._makeContentsInfo(comp, 1);

            if (!contents_info[comp_info.order])
                contents_info[comp_info.order] = new Array();

            contents_info[comp_info.order].push(comp_info);
        }
        return contents_info;
    };
    __pLayoutManager.createTableLayoutContentsInfo = function (objContainerInfo)
    {
        // 테이블 레이아웃에서 사용할 컨텐츠 집합
        var i;
        var is_panel = false;
        var contents_info = {
            coordinate_contents: [],
            ordering_contents: [],
        };
        var comps = objContainerInfo.selfContext._p_components;
        if (objContainerInfo.selfContext._is_panel)
        {
            is_panel = true;
            comps = objContainerInfo.selfContext._getComponents();
        }

        for (i = 0; i < comps.length; i++)
        {
            var comp = comps[i];

            if (!this._isContentsVisible(comp) || (!is_panel && comp._is_group))
                continue;

            var comp_info = this._makeContentsInfo(comp, 2);

            if (comp_info.coordinate)
            {
                contents_info.coordinate_contents.push(comp_info);
            }
            else
            {
                if (!contents_info.ordering_contents[comp_info.order])
                    contents_info.ordering_contents[comp_info.order] = new Array();

                contents_info.ordering_contents[comp_info.order].push(comp_info);
            }
        }

        return contents_info;
    };
    __pLayoutManager._isContentsVisible = function (objComponent)
    {
        return objComponent._p_visible;
    };
    __pLayoutManager._makeContentsInfo = function (objComponent, dimension)
    {
        // FluidLayout 컴포넌트 스펙 변경시 참조 수정

        // common info
        //var size = [0, 0];

        var sizeinfo = objComponent._getSizeInfo();
        var minwidth = sizeinfo[2]
        var minheight = sizeinfo[3];

        const withUnit = (val, unit = "px") => // val이 숫자이거나 단위가 없는 문자열인 경우에만 px 단위를 붙여서 반환, 그렇지 않으면 원래 값 반환
        {
            return (val !== null && val !== '' && !isNaN(parseFloat(val))) 
                ? val + unit 
                : val; 
        };

        var setted_minwidth = objComponent._getComputedPropMinWidth();
        var setted_maxwidth = objComponent._getComputedPropMaxWidth();
        var setted_minheight = objComponent._getComputedPropMinHeight();
        var setted_maxheight = objComponent._getComputedPropMaxHeight();

        var ret = {
            visible: objComponent._p_visible,
            order: (objComponent._p_layoutorder > 0 ? objComponent._p_layoutorder : 0),

            size: [sizeinfo[0], sizeinfo[1]],
            min_size: [minwidth ? minwidth : (setted_minwidth ? setted_minwidth : null), minheight ? minheight : (setted_minheight ? setted_minheight : null)],
            max_size: [setted_maxwidth ? setted_maxwidth : null, setted_maxheight ? setted_maxheight : null],
            fittocontents: objComponent._p_fittocontents,
            _adjust_pos: [0, 0, 0, 0],
            _target: objComponent,
        };

        // fluid 타입별 추가 info
        switch (dimension)
        {
            case 1:
                ret["grow"] = objComponent._p_flexgrow !== undefined ? objComponent._p_flexgrow : 0;
                ret["shrink"] = objComponent._flexshrink !== undefined ? objComponent._flexshrink : 1;
                ret["_is_flex"] = ret["grow"] > 0 || ret["shrink"] > 0;
                break;
            case 2:
                ret["coordinate"] = objComponent._getCurrentLayoutTablecellarea();
                ret["org_coordinate"] = objComponent._p_tablecellarea;
                break;
        }

        return ret;
    };

    // manager Util
    __pLayoutManager._getLayoutObject = function (layout_name, layout_list)
    {
        if (layout_list)
        {
            return layout_list[layout_name];
        }
    };


    // global util
    /*nexacro._initLayoutManager = function (useMulti, useStep, useFluid)
    {
        if (!nexacro._layout_manager)
            nexacro._layout_manager = new nexacro._LayoutManager(useMulti, useStep, useFluid);
    };*/

    // for tool
    nexacro._getLayoutManager = function (env)
    {
        if (!env)
            env = nexacro.getEnvironment();
        return env._layout_manager;
    };

    //==============================================================================
    // nexacro._MultiLayoutManager
    //==============================================================================
    nexacro._MultiLayoutManager = function ()
    {

    };
    var __pMultiLayoutManager = nexacro._createPrototype(nexacro.Object, nexacro._MultiLayoutManager);
    nexacro._MultiLayoutManager.prototype = __pMultiLayoutManager;
    __pMultiLayoutManager._type_name = "MultiLayoutManager";

    __pMultiLayoutManager.setLayoutChangeFlag = function (v)
    {
        this._cancelChangeLayout = v;
    }
    __pMultiLayoutManager.getLayoutChangeFlag = function ()
    {
        return this._cancelChangeLayout;
    }

    __pMultiLayoutManager.getValidLayoutObject = function (objContainerInfo, container_width, container_height)
    {
        var abs_gap_min_x = 5000;
        var abs_gap_min_y = 5000;
        var gap_min_x = 5000;
        //var gap_min_y = 2000;
        var abs_gap_x = -1;
        var abs_gap_y = -1;
        var gap_x = 0;

        const env = objContainerInfo.selfContext._getEnvironment();
        var curscreen_id = env._getCurrentScreenID();
        var curscreen_type = env._getCurrentScreenType();

        //        var curscreen_id = nexacro._getCurrentScreenID();
        //        var curscreen_type = nexacro._getCurrentScreenType();

        var layout;
        var checked_list = [];
        var layout_list = objContainerInfo.layout_list;
        for (var i = 0; i < layout_list.length; i++)
        {
            layout = layout_list[i];
            if (!layout.screenid || layout.screenid == "")
            {
                checked_list.push(layout);
                continue;
            }

            var screenid_list = layout.screenid.split(',');
            for (var j = 0; j < screenid_list.length; j++)
            {
                if (curscreen_id == screenid_list[j])
                {
                    checked_list.push(layout);
                    continue;
                }
            }
        }
        var layout_len = checked_list.length;
        var optimal_layout_num = -1;

        var is_portrait = container_width < container_height ? true : false;
        var mobileorientation = is_portrait ? "portrait" : "landscape";

        var correct_type = -1;
        var checkScreenSize = function (idx)
        {
            //if (container_width == 0 && container_height == 0)
            //    return;
            gap_x = container_width - layout._p_width;
            abs_gap_x = Math.abs(gap_x);

            //figure out
            if (abs_gap_min_x > abs_gap_x)
            {
                gap_min_x = gap_x;
                abs_gap_min_x = abs_gap_x;
                abs_gap_min_y = Math.abs(container_height - layout._p_height);
                optimal_layout_num = idx;
            }
            else if (abs_gap_min_x == abs_gap_x)
            {
                if (gap_min_x == abs_gap_x)
                {
                    abs_gap_y = Math.abs(container_height - layout._p_height);
                    if (abs_gap_min_y > abs_gap_y)
                    {
                        optimal_layout_num = idx;
                    }
                }
            }
        };

        for (var i = 0; i < layout_len; i++)
        {
            layout = checked_list[i];

            var screenid_list = layout._p_screenid.split(",");
            if (layout._p_screenid != "" && screenid_list.indexOf(curscreen_id) < 0)
            {
                continue;
            }

            correct_type = 1;

            if (!nexacro._isDesktop())
            {
                if (curscreen_type != "desktop" && layout._p_mobileorientation && layout._p_mobileorientation.toLowerCase() != mobileorientation)
                {
                    continue;
                }
            }

            correct_type = 2;
            checkScreenSize(i);
        }

        if (optimal_layout_num < 0)
        {
            if (correct_type < 0)
            {
                for (i = 0; i < layout_len; i++)
                {
                    layout = checked_list[i];
                    if (!nexacro._isDesktop())
                    {
                        if (curscreen_type != "desktop" && layout._p_mobileorientation && layout._p_mobileorientation.toLowerCase() != mobileorientation)
                        {
                            continue;
                        }
                    }

                    checkScreenSize(i);
                }
            }
            else if (correct_type == 1)
            {
                for (i = 0; i < layout_len; i++)
                {
                    layout = checked_list[i];
                    checkScreenSize(i);
                }
            }
        }
        // 스크린아이디도 있고, 오리엔테이션도 같아. 그러면 추가로직없이 크기 검색
        // 레이아웃중에 매칭되는 스크린아이디가 없어, 그럼 레이아웃리스트중에 오리엔테이션이 같은걸 검색
        // 레이아웃중에 매칭되는 스크린아이디는 있는데, 오리엔테이션 값이 전부 다를때. 레이아웃리스트를 전부 검색

        if (optimal_layout_num < 0) optimal_layout_num = 0;

        return checked_list[optimal_layout_num];
    };

    __pMultiLayoutManager.changeLayout = function (objContainer, container_info, target_layout, default_layout)
    {
        var prev_layout_name = container_info.current_layout_name;
        if (target_layout)
            container_info.current_layout_name = target_layout._p_name;

        if (default_layout && default_layout.change_fn)// && prev_layout_name != "default" && default_layout != target_layout)
        {
            default_layout.change_fn.call(this, objContainer);
        }
        if (target_layout && target_layout.change_fn)
        {
            target_layout.change_fn.call(this, objContainer);
        }
    };

    //==============================================================================
    // nexacro._StepLayoutManager
    //==============================================================================

    //==============================================================================
    // nexacro._FluidLayoutManager
    //==============================================================================
    nexacro._FluidLayoutManager = function ()
    {
    };
    var __pFluidLayoutManager = nexacro._createPrototype(nexacro.Object, nexacro._FluidLayoutManager);
    nexacro._FluidLayoutManager.prototype = __pFluidLayoutManager;
    __pFluidLayoutManager._type_name = "FluidLayoutManager";

    // manager CONST
    __pFluidLayoutManager._FLUIDLAYOUT_CONST = {
        LAYOUT_ARRANGE_NATIVE: 0,
        LAYOUT_ARRANGE_ADJUST: 1,

        LAYOUT_TYPE_ABSOLUTE: 0,
        LAYOUT_TYPE_FLUIDHORIZONTAL: 1,
        LAYOUT_TYPE_FLUIDVERTICAL: 2,
        LAYOUT_TYPE_FLUIDTABLE: 3,
        LAYOUT_TYPE_CONV: {
            default: 0,
            horizontal: 1,
            vertical: 2,
            table: 3,
        },

        LAYOUT_CONTAINER_FITTYPE_NONE: 0,
        LAYOUT_CONTAINER_FITTYPE_WIDTH: 1,
        LAYOUT_CONTAINER_FITTYPE_HEIGHT: 2,
        LAYOUT_CONTAINER_FITTYPE_BOTH: 3,
        LAYOUT_CONTAINER_FITTYPE_CONV: {
            none: 0,
            width: 1,
            height: 2,
            both: 3,
        },

        LAYOUT_CONTENT_ALIGN_START: 0,
        LAYOUT_CONTENT_ALIGN_END: 1,
        LAYOUT_CONTENT_ALIGN_CENTER: 2,
        LAYOUT_CONTENT_ALIGN_SPACEBETWEEN: 3,
        LAYOUT_CONTENT_ALIGN_SPACEAROUND: 4,
        LAYOUT_CONTENT_ALIGN_SPACEEVENLY: 5,
        LAYOUT_CONTENT_ALIGN_CONV: {
            start: 0,
            end: 1,
            center: 2,
            spacebetween: 3,
            spacearound: 4,
            spaceevenly: 5,
        },

        LAYOUT_WRAP_NONE: 0,
        LAYOUT_WRAP_WRAP: 1,
        LAYOUT_WRAP_CONV: {
            nowrap: 0,
            wrap: 1,
        },

        LAYOUT_DIRECTION_HORIZONTAL: 0,
        LAYOUT_DIRECTION_VERTICAL: 1,
        LAYOUT_DIRECTION_CONV: {
            horizontal: 0,
            vertical: 1,
        },
    };

    // Prop Getter : layout property를 manager에서 쓰기 쉽게 가공해서 반환
    // FluidLayout 레이아웃 Proeprty스펙 변경시 수정
    __pFluidLayoutManager.getLayoutArrangeType = function ()
    {
        var ret;
        var browser = nexacro._Browser;
        switch (browser)
        {
            case "MobileSafari":
                if (nexacro._BrowserVersion > 14.4)
                    ret = this._FLUIDLAYOUT_CONST.LAYOUT_ARRANGE_NATIVE;
                else
                    ret = this._FLUIDLAYOUT_CONST.LAYOUT_ARRANGE_ADJUST;
                break;
            default:
                // WRE : CSS
                ret = this._FLUIDLAYOUT_CONST.LAYOUT_ARRANGE_NATIVE;
                break;
        }

        return ret;
    };
    __pFluidLayoutManager.getLayoutContainerFitType = function (type)
    {
        var const_convert = this._FLUIDLAYOUT_CONST.LAYOUT_CONTAINER_FITTYPE_CONV;
        return const_convert[type] || const_convert["none"];
    };

    __pFluidLayoutManager.getLayoutContainerType = function (layout)
    {
        // 해당 안되면 default
        if (layout)
        {
            var const_convert = this._FLUIDLAYOUT_CONST.LAYOUT_TYPE_CONV;
            return const_convert[layout.type] || const_convert["default"];
        }
        else
        {
            return 0;
        }
    };
    __pFluidLayoutManager.getFlexWrapType = function (layout)
    {
        // 해당 안되면 nowrap

        if (layout)
        {
            var const_convert = this._FLUIDLAYOUT_CONST.LAYOUT_WRAP_CONV;
            return const_convert[layout.flexwrap] || const_convert["nowrap"];
        }
        else
        {
            return 0;
        }
    };

    __pFluidLayoutManager.getLayoutContainerPadding = function (layout)
    {
        if (layout)
        {
            return layout._spacing || new nexacro.PaddingObject("0px");
        }
        else
        {
            return new nexacro.PaddingObject("0px");
        }
    };
    __pFluidLayoutManager.getLayoutContentsGap = function (layout)
    {
        if (layout)
        {
            return [layout._p_horizontalgap || 0, layout._p_verticalgap || 0];
        }
        else
        {
            return 0;
        }
    };

    __pFluidLayoutManager.getLayoutAlign = function (layout)
    {
        var ret;
        var const_convert = this._FLUIDLAYOUT_CONST.LAYOUT_CONTENT_ALIGN_CONV;
        switch (this.getLayoutContainerType(layout))
        {
            case 0: //LAYOUT_TYPE_ABSOLUTE
                break;
            case 1: //LAYOUT_TYPE_FLUIDHORIZONTAL
                var horz_align = const_convert[layout._p_flexmainaxisalign] || const_convert["start"];
                var vert_align = const_convert[layout._p_flexcrossaxisalign] || const_convert["start"];
                var wrap_align = const_convert[layout._p_flexcrossaxiswrapalign] || const_convert["start"];

                ret = [horz_align, vert_align, wrap_align];
                break;
            case 2: //LAYOUT_TYPE_FLUIDVERTICAL
                var horz_align = const_convert[layout._p_flexmainaxisalign] || const_convert["start"];
                var vert_align = const_convert[layout._p_flexcrossaxisalign] || const_convert["start"];
                var wrap_align = const_convert[layout._p_flexcrossaxiswrapalign] || const_convert["start"];

                ret = [horz_align, vert_align, wrap_align];
                break;
            case 3: //LAYOUT_TYPE_FLUIDTABLE
                var cell_h = "start";
                var cell_v = "start";
                var comp_h = "start";
                var comp_v = "start";

                var cell_align = layout._p_tablecellalign;
                if (cell_align)
                {
                    cell_align = cell_align.split(" ");
                    if (cell_align.length)
                    {
                        cell_h = const_convert[cell_align[0]] || const_convert["start"];

                        if (cell_align.length == 1) cell_v = const_convert["start"];
                        if (cell_align.length == 2) cell_v = const_convert[cell_align[1]] || const_convert["start"];
                    }
                    else
                    {
                        cell_h = const_convert["start"];
                        cell_v = const_convert["start"];
                    }
                }
                else
                {
                    cell_h = const_convert["start"];
                    cell_v = const_convert["start"];
                }

                var comp_align = layout._p_tablecellincompalign;
                if (comp_align)
                {
                    comp_align = comp_align.split(" ");
                    if (comp_align.length)
                    {
                        comp_h = const_convert[comp_align[0]] || const_convert["start"];

                        if (comp_align.length == 1) comp_v = const_convert["start"];
                        if (comp_align.length == 2) comp_v = const_convert[comp_align[1]] || const_convert["start"];
                    }
                    else
                    {
                        comp_h = const_convert["start"];
                        comp_v = const_convert["start"];
                    }
                }
                else
                {
                    comp_h = const_convert["start"];
                    comp_v = const_convert["start"];
                }

                ret = [cell_h, cell_v, comp_h, comp_v];
                break;
            default:
                break;
        }

        return ret;
    };

    __pFluidLayoutManager.getLayoutTemplate = function (layout)
    {
        var ret;

        switch (this.getLayoutContainerType(layout))
        {
            case 0:
            case 1:
            case 2:
                break;
            case 3:
                ret = layout._p_tabletemplate;
                break;

        }

        return ret;
    };
    __pFluidLayoutManager.getLayoutTemplateArea = function (layout)
    {
        var ret;

        switch (this.getLayoutContainerType(layout))
        {
            case 0:
            case 1:
            case 2:
                break;
            case 3:
                ret = layout._p_tabletemplatearea;
                break;
        }

        return ret;
    };
    __pFluidLayoutManager.getLayoutDirection = function (layout)
    {
        var ret;
        var const_convert = this._FLUIDLAYOUT_CONST.LAYOUT_DIRECTION_CONV;
        switch (this.getLayoutContainerType(layout))
        {
            case 0:
                break;
            case 1:
                ret = const_convert["horizontal"];
                break;
            case 2:
                ret = const_convert["vertical"];
                break;
            case 3:
                ret = const_convert[layout._p_tabledirection] || const_convert["horizontal"];
                break;

        }

        return ret;
    };

    __pFluidLayoutManager.getLayoutTablecellmovingtype = function (layout)
    {
        var ret;

        switch (this.getLayoutContainerType(layout))
        {
            case 0:
            case 1:
            case 2:
                break;
            case 3:
                ret = layout._p_tablecellmovingtype;
                break;

        }
        return ret;
    };

    // init Fluid
    __pFluidLayoutManager.initFluidCommonProps = function (context, objLayout, defaultLayout)
    {
        var context_border = context._getCurrentStyleBorder();
        var context_border_parent = (context._p_parent && context._p_parent._is_container) ? context._p_parent._getCurrentStyleBorder() : null;

        // uninit
        this.uninitFluidCommonProps();

        // common
        var container_size = this._getContainerSize(context);
        this._container_width = container_size[0];
        this._container_height = container_size[1];

        this._container_padding = this.getLayoutContainerPadding(objLayout);
        this._container_hscroll_size = 0;
        this._container_vscroll_size = 0;
        this._is_apply_hscrollbar_size = false;
        this._is_apply_vscrollbar_size = false;
        var is_panel = context._is_panel;
        if (is_panel != true)
        {
            var h_scrollbartype = context._getHScrollBarType();
            var v_scrollbartype = context._getVScrollBarType();

            this._container_hscroll_size = (h_scrollbartype == "none" || h_scrollbartype == "autoindicator" || h_scrollbartype == "indicator") ? 0 : context._getHScrollBarSize();
            this._container_vscroll_size = (v_scrollbartype == "none" || v_scrollbartype == "autoindicator" || v_scrollbartype == "indicator") ? 0 : context._getVScrollBarSize();
        }

        this._contents_width = this._container_width - (this._container_padding.left + this._container_padding.right);
        this._contents_height = this._container_height - (this._container_padding.top + this._container_padding.bottom);

        this._contents_width -= context_border ? context_border._getBorderWidth() : 0;
        this._contents_height -= context_border ? context_border._getBorderHeight() : 0;

        this._contents_width -= context_border_parent ? context_border_parent._getBorderWidth() : 0;
        this._contents_height -= context_border_parent ? context_border_parent._getBorderHeight() : 0;

        this._align = this.getLayoutAlign(objLayout);
        this._gap = this.getLayoutContentsGap(objLayout);
        this._direction = this.getLayoutDirection(objLayout);

        this._max_contents_right = 0;
        this._max_contents_bottom = 0;

        this._tablecellmovingtype = this.getLayoutTablecellmovingtype(objLayout);
        if (defaultLayout)
        {
            this._default_tabletemplate = defaultLayout._tabletemplate;
            this._default_tablecellmovingtype = this.getLayoutTablecellmovingtype(defaultLayout);
        }
    };
    __pFluidLayoutManager.initFluidFlexProps = function (context, objLayout, objContentsInfo, objContainerInfo)
    {
        // init common
        this.initFluidCommonProps(context, objLayout);

        // uninit flex
        this.uninitFluidFlexProps();

        // init flex
        this._fluidcontents = objContentsInfo.reduce(function (acc, val) { return acc.concat(val) }, []);
        if (objContentsInfo && objContentsInfo.length > 1)
            context._setFluidcontents(this._fluidcontents);
        this._flexwrap = this.getFlexWrapType(objLayout);

        this._fittocontents = objContainerInfo.container_fittype;

        this._is_flexible = this._fluidcontents.some(function (content) { return content._is_flex === true; });

        this._contents_width_remain = this._contents_width;
        this._contents_height_remain = this._contents_height;

        this._current_main_spacing = 0;
        this._current_cross_spacing = 0;
        this._is_panel = context && context._is_panel ? true : false;
    };

    __pFluidLayoutManager._parseMergePosition = function (coord_str)
    {
        var merge_pos = [];
        var coords = coord_str.split("/");

        coords.forEach(function (cell_pos)
        {
            cell_pos = cell_pos.trim();
            var tmp = cell_pos.split(" ");

            if (tmp.length === 1)
            {
                merge_pos.push(+cell_pos);
                merge_pos.push(+cell_pos);
            }
            else if (tmp.length === 2)
            {
                if (+tmp[0] > +tmp[1])
                {
                    tmp.push(tmp.shift());
                }
                tmp.forEach(function (pos)
                {
                    merge_pos.push(+pos);
                });
            }
        });

        return merge_pos;
    };

    __pFluidLayoutManager._isValidMergePosition = function (merge_pos)
    {
        if (merge_pos.length !== 4) return false;

        return merge_pos.every(function (pos)
        {
            return !isNaN(pos) && pos >= 0;
        });
    };

    __pFluidLayoutManager._markUsedCells = function (rowstart, rowend, colstart, colend)
    {
        for (var i = rowstart; i <= rowend; i++)
        {
            for (var j = colstart; j <= colend; j++)
            {
                this._used_cell.add_item("use" + i + j, [i, j]);
            }
        }
    };

    __pFluidLayoutManager._updateMaxSizes = function (row_idx, col_idx, content_w, content_h)
    {
        this._max_row_sizes[row_idx] = this._max_row_sizes[row_idx]
            ? Math.max(this._max_row_sizes[row_idx], content_h)
            : content_h;
        this._max_col_sizes[col_idx] = this._max_col_sizes[col_idx]
            ? Math.max(this._max_col_sizes[col_idx], content_w)
            : content_w;
    };

    __pFluidLayoutManager._getContentSizeAsNumber = function (content)
    {
        var content_w = isNaN(+content.size[0]) ? 0 : +content.size[0];
        var content_h = isNaN(+content.size[1]) ? 0 : +content.size[1];
        return [content_w, content_h];
    };

    __pFluidLayoutManager._processAreaContent = function (content, area)
    {
        this._tablecontents_area.push(content);
        area.forEach(function (coordinate)
        {
            this._used_cell.add_item("use" + coordinate[0] + coordinate[1], [coordinate[0], coordinate[1]]);
        }, this);
    };

    __pFluidLayoutManager._processCoordinateContent = function (content, merge_pos, org_merge_pos)
    {
        content.rowstart = merge_pos[0];
        content.colstart = merge_pos[2];
        content.rowend = merge_pos[1];
        content.colend = merge_pos[3];

        if (org_merge_pos && org_merge_pos.length)
        {
            content.org_rowstart = org_merge_pos[0];
            content.org_colstart = org_merge_pos[2];
            content.org_rowend = org_merge_pos[1];
            content.org_colend = org_merge_pos[3];
        }

        this._tablecontents_coordinate.push(content);
        this._markUsedCells(content.rowstart, content.rowend, content.colstart, content.colend);
    };

    __pFluidLayoutManager._processUnidentificationContent = function (content, template_max_row, template_max_col)
    {
        var row_cnt = template_max_row + 2;
        var col_cnt = template_max_col + 2;
        var row_idx = row_cnt - 1;
        var col_idx = col_cnt - 1;

        content.rowstart = content.rowend = row_idx;
        content.colstart = content.colend = col_idx;

        this._tablecontents_unidentification.push(content);
        this._used_cell.add_item("use" + row_idx + col_idx, [row_idx, col_idx]);

        return {
            row_cnt: row_cnt,
            col_cnt: col_cnt,
            row_idx: row_idx,
            col_idx: col_idx
        };
    };

    __pFluidLayoutManager._processCoordinateContents = function (coordinate_contents, template_max_row, template_max_col)
    {
        var result = {
            coordinate_max_row: 0,
            coordinate_max_col: 0,
            unidentification_max_row: 0,
            unidentification_max_col: 0
        };

        coordinate_contents.forEach(function (content)
        {
            var sizes = this._getContentSizeAsNumber(content);
            var content_w = sizes[0];
            var content_h = sizes[1];

            var coord = content.coordinate;
            var area = this._tabletemplatearea_coordinate[coord];

            if (area)
            {
                this._processAreaContent(content, area);
                return;
            }

            var merge_pos = this._parseMergePosition(coord);
            var org_merge_pos = (content.org_coordinate && content.org_coordinate.length)
                ? this._parseMergePosition(content.org_coordinate)
                : [];

            var row_idx, col_idx;

            if (this._isValidMergePosition(merge_pos))
            {
                this._processCoordinateContent(content, merge_pos, org_merge_pos);

                result.coordinate_max_row = Math.max(result.coordinate_max_row, content.rowend);
                result.coordinate_max_col = Math.max(result.coordinate_max_col, content.colend);

                row_idx = content.rowstart;
                col_idx = content.colstart;
            }
            else
            {
                var unident = this._processUnidentificationContent(content, template_max_row, template_max_col);

                result.unidentification_max_row = unident.row_cnt;
                result.unidentification_max_col = unident.col_cnt;

                row_idx = unident.row_idx;
                col_idx = unident.col_idx;
            }

            this._updateMaxSizes(row_idx, col_idx, content_w, content_h);
        }, this);

        return result;
    };

    __pFluidLayoutManager._assignOrderContentsToEmptyCells = function ()
    {
        this._tablecontents_order.forEach(function (contents)
        {
            contents.forEach(function (content)
            {
                var sizes = this._getContentSizeAsNumber(content);
                var content_w = sizes[0];
                var content_h = sizes[1];

                var assigned = false;
                for (var i = 0; i < this._tabletemplate_parse[0].length && !assigned; i++)
                {
                    for (var j = 0; j < this._tabletemplate_parse[1].length && !assigned; j++)
                    {
                        var coord_name = "use" + i + j;
                        if (!this._used_cell[coord_name])
                        {
                            content.rowstart = content.rowend = i;
                            content.colstart = content.colend = j;

                            this._used_cell.add_item(coord_name, [i, j]);
                            this._updateMaxSizes(i, j, content_w, content_h);

                            assigned = true;
                        }
                    }
                }
            }, this);
        }, this);
    };

    __pFluidLayoutManager._expandTableTemplateIfNeeded = function (template_max_row, template_max_col, maxInfo)
    {
        var max_row = Math.max(
            template_max_row,
            maxInfo.area_max_row,
            maxInfo.coordinate_max_row + 1,
            maxInfo.unidentification_max_row
        );
        var max_col = Math.max(
            template_max_col,
            maxInfo.area_max_col,
            maxInfo.coordinate_max_col + 1,
            maxInfo.unidentification_max_col
        );

        var add_row_cnt = max_row - template_max_row;
        var add_col_cnt = max_col - template_max_col;

        this._addTableTemplateMatrix(add_row_cnt, "1&", 0);
        this._addTableTemplateMatrix(add_col_cnt, "1&", 1);
    };

    __pFluidLayoutManager.initFluidTableProps = function (context, objLayout, objContentsInfo, defaultLayout, objContainerInfo)
    {
        this.initFluidCommonProps(context, objLayout, defaultLayout);
        this.uninitFluidTableProps();

        this._container_horizontal_spacing = 0;
        this._container_vertical_spacing = 0;
        this._max_fit_contents_right = 0;
        this._max_fit_contents_bottom = 0;
        this._fittocontents = objContainerInfo.container_fittype;

        var order_contents_length = objContentsInfo.ordering_contents.reduce(function (length, contents)
        {
            return length += contents.length;
        }, 0);

        this._tabletemplate = this.getLayoutTemplate(objLayout);
        this._tabletemplatearea = this.getLayoutTemplateArea(objLayout);

        var parse = this._parseTableTemplate(this._tabletemplate);
        this._tabletemplate_parse = parse.parse;
        this._tabletemplate_matrix = parse.matrix;

        parse = this._parseTableTemplateArea(this._tabletemplatearea);
        this._tabletemplatearea_matrix = parse.area_matrix;
        this._tabletemplatearea_coordinate = parse.area_coordinate;

        this._max_row_sizes = [];
        this._max_col_sizes = [];

        var template_max_row = this._tabletemplate_parse[0].length;
        var template_max_col = this._tabletemplate_parse[1].length;

        var area_max_row = this._tabletemplatearea_matrix.length;
        var area_max_col = this._tabletemplatearea_matrix.length ? this._tabletemplatearea_matrix[0].length : 0;

        var coordResult = this._processCoordinateContents(
            objContentsInfo.coordinate_contents,
            template_max_row,
            template_max_col
        );

        this._tablecontents_order = objContentsInfo.ordering_contents;
        this._tablecontents_length = this._tablecontents_area.length
            + this._tablecontents_coordinate.length
            + this._tablecontents_unidentification.length
            + order_contents_length;

        if (context && !context._is_changed_tabletemplate)
        {
            var maxInfo = {
                area_max_row: area_max_row,
                area_max_col: area_max_col,
                coordinate_max_row: coordResult.coordinate_max_row,
                coordinate_max_col: coordResult.coordinate_max_col,
                unidentification_max_row: coordResult.unidentification_max_row,
                unidentification_max_col: coordResult.unidentification_max_col
            };

            this._expandTableTemplateIfNeeded(template_max_row, template_max_col, maxInfo);

            this._assignOrderContentsToEmptyCells();
        }
    };

    __pFluidLayoutManager.uninitFluidCommonProps = function ()
    {
        this._fluidcontents = [];

        this._container_padding = null;
    };
    __pFluidLayoutManager.uninitFluidFlexProps = function ()
    {

    };
    __pFluidLayoutManager.uninitFluidTableProps = function ()
    {
        this._tablecontents_area = [];
        this._tablecontents_coordinate = [];
        this._tablecontents_order = [];
        this._tablecontents_unidentification = [];

        this._used_cell = new nexacro.Collection();

        this._tabletemplate_rect = [];
        this._tabletemplatearea_rect = {};
    };

    // Fluid Calculator API
    __pFluidLayoutManager.calcFluidHorizontalContents = function (layout)
    {
        // [컨텐츠 총합, 여백, 컨텐츠갯수] * wrap_line 정보 생성
        var layout_info = this._getContentsInfo();

        // 계산된 컨텐츠 정보로 컴포넌트에 적용
        this._adjustHorizontalContent(layout_info);
        layout._setLayoutContentsMaxRect(this._max_contents_right, this._max_contents_bottom);
        this._applyContent();
    };
    __pFluidLayoutManager.calcFluidVerticalContents = function (layout)
    {
        // [컨텐츠 총합, 여백, 컨텐츠갯수] * wrap_line 정보 생성
        var layout_info = this._getContentsInfo();

        // 계산된 컨텐츠 정보로 컴포넌트에 적용
        this._adjustVerticalContent(layout_info);
        layout._setLayoutContentsMaxRect(this._max_contents_right, this._max_contents_bottom);
        this._applyContent();
    };
    __pFluidLayoutManager.calcFluidTableContents = function (context)
    {
        // template 기반 계산
        var layout_info = this._getTableInfo();

        if (this._tablecontents_length > 0)
        {
            // template 과 컨텐츠 를 결합한 계산
            this._fluidcontents = this._calcTableContentAdjust(layout_info, context);

            // 계산결과를 Apply
            this._applyContent();
        }
    };

    __pFluidLayoutManager.calcContainer = function (containerInfo, layout)
    {
        // 계산된 컨텐츠 최대 크기를 가지고 컨테이너 크기를 옵션별로 조절함
        // Div나 Tabpage만 계산
        // Form은 리사이징 없음

        if (!containerInfo.parentContext)
            return;

        var ret = false;
        var context = containerInfo.selfContext;

        if (!(context instanceof nexacro._InnerForm) && !context._is_panel)
            return;

        var container_comp = context._is_panel ? context : context._p_parent;
        var container_size = [0, 0];

        var layout_type = this.getLayoutContainerType(layout);
        switch (layout_type)
        {
            case 0: //LAYOUT_TYPE_ABSOLUTE
                //container_comp._parseArrangeInfo(container_comp._p_left, container_comp._p_top, container_comp._p_right, container_comp._p_bottom, container_comp._p_width, container_comp._p_height);
                //container_comp._update_position_static();
                container_comp._restorePosition();
                container_size = container_comp._on_getAbsoluteContainerSize(layout._contents_max_rect);
                ret = this._applyAbsoluteContainer(context, container_size);
                break;
            case 1: //LAYOUT_TYPE_HORIZONTAL
                container_size = container_comp._on_getFluidHorizontalContainerSize(layout._contents_max_rect);
                ret = this._applyFluidContainer(context, container_size);
                break;
            case 2: //LAYOUT_TYPE_VERTICAL
                container_size = container_comp._on_getFluidVerticalContainerSize(layout._contents_max_rect);
                ret = this._applyFluidContainer(context, container_size);
                break;
            case 3: //LAYOUT_TYPE_TABLE
                container_size = container_comp._on_getFluidTableContainerSize(layout._fit_contents_max_rect, layout._contents_max_rect);
                ret = this._applyFluidContainer(context, container_size);
                break;
        }

        return ret;
    };

    // Flex Common
    __pFluidLayoutManager._getContentsInfo = function ()
    {
        var ret;

        if (this._is_flexible)
        {
            ret = this._getFluidContentSizeInfo();
        }
        else
        {
            ret = this._getContentSizeInfo();
        }

        if (this._checkRecalcLayout(ret)) ret = this._getContentsInfo();

        return ret;
    };
    __pFluidLayoutManager._getFluidContentSizeInfo = function ()
    {
        // direction, wrap 에 따른 분기
        var ret;

        switch (this._direction)
        {
            case 0: // Horizontal
                switch (this._flexwrap)
                {
                    case 0: // NOWRAP
                        ret = this._getFluidHorizontalContentSizeInfoNoWrap();
                        break;
                    case 1: // WRAP
                        ret = this._getFluidHorizontalContentSizeInfoWrap();
                        break;
                }
                break;
            case 1: // Vertical
                switch (this._flexwrap)
                {
                    case 0: // NOWRAP
                        ret = this._getFluidVerticalContentSizeInfoNoWrap();
                        break;
                    case 1: // WRAP
                        ret = this._getFluidVerticalContentSizeInfoWrap();
                        break;
                }
                break;
        }

        return ret;
    };
    __pFluidLayoutManager._getContentSizeInfo = function ()
    {
        // direction, wrap 에 따른 분기
        var ret;

        switch (this._direction)
        {
            case 0: // Horizontal
                switch (this._flexwrap)
                {
                    case 0: // NOWRAP
                        ret = this._getHorizontalContentSizeInfoNoWrap();
                        break;
                    case 1: // WRAP
                        ret = this._getHorizontalContentSizeInfoWrap();
                        break;
                }
                break;
            case 1: // Vertical
                switch (this._flexwrap)
                {
                    case 0: // NOWRAP
                        ret = this._getVerticalContentSizeInfoNoWrap();
                        break;
                    case 1: // WRAP
                        ret = this._getVerticalContentSizeInfoWrap();
                        break;
                }
                break;
        }

        return ret;
    };
    __pFluidLayoutManager._getContainerSize = function (context)
    {
        var container_comp = context._is_panel ? context : context._p_parent;
        var form = container_comp ? (container_comp._is_group ? container_comp._group_panel : container_comp._getForm()) : null;
        var info = container_comp ? container_comp._arrange_info : null;
        var comp, obj, distance, refer_font;

        var container_width = context._adjust_width;
        var container_height = context._adjust_height;
        var form_width, form_height;
        var context_fittype_parent = 0;
        var minwidth = context._getComputedPropMinWidth();
        var maxwidth = context._getComputedPropMaxWidth();
        var minheight = context._getComputedPropMinHeight();
        var maxheight = context._getComputedPropMaxHeight();

        if (container_comp && container_comp._is_container)
        {
            container_width = container_comp._adjust_width;
            container_height = container_comp._adjust_height;
            context_fittype_parent = this.getLayoutContainerFitType(container_comp._p_fittocontents);
        }

        //여기 수정        
        if (context_fittype_parent == 1 || context_fittype_parent == 3)
        {
            container_width = context._isWidthUnset() ? context._adjust_width : context._width;
            if (info && (obj = info.width))
            {
                comp = container_comp._findComponentForArrange(obj.compid);
                if (!comp)
                {
                    distance = obj.distance;
                    form_width = form._adjust_width;

                    if (distance.indexOf("em") > -1)
                    {
                        comp = container_comp;
                        if (distance.indexOf("rem") > -1)
                        {
                            comp = comp._getRootObject();
                        }

                        refer_font = comp._getReferenceAbsoluteFont();
                        form_width = this._getFontRefSize(refer_font);
                    }

                    container_width = this._parseContentSize(distance, form_width);
                }
            }
        }
        if (context_fittype_parent == 2 || context_fittype_parent == 3)
        {
            container_height = context._isHeightUnset() ? context._adjust_height : context._height;
            if (info && (obj = info.height))
            {
                comp = container_comp._findComponentForArrange(obj.compid);
                if (!comp)
                {
                    distance = obj.distance;
                    form_height = form._adjust_height;

                    if (distance.indexOf("em") > -1)
                    {
                        comp = container_comp;
                        if (distance.indexOf("rem") > -1)
                        {
                            comp = comp._getRootObject();
                        }

                        refer_font = comp._getReferenceAbsoluteFont();
                        form_height = this._getFontRefSize(refer_font);
                    }

                    container_height = this._parseContentSize(distance, form_height);
                }
            }
        }

        if (container_comp)
        {
            minwidth = container_comp._getComputedPropMinWidth();
            maxwidth = container_comp._getComputedPropMaxWidth();
            minheight = container_comp._getComputedPropMinHeight();
            maxheight = container_comp._getComputedPropMaxHeight();
        }

        if (minwidth != null && (container_width < minwidth))
            container_width = (minwidth < 0) ? 0 : minwidth;
        else if (maxwidth != null && (container_width > maxwidth))
            container_width = (maxwidth < 0) ? 0 : maxwidth;

        if (minheight != null && (container_height < minheight))
            container_height = (minheight < 0) ? 0 : minheight;
        else if (maxheight != null && (container_height > maxheight))
            container_height = (maxheight < 0) ? 0 : maxheight;

        return [container_width, container_height];
    };

    __pFluidLayoutManager._isTargetSizeParentDependent = function (content, axis)
   {
       if (!content || !content._target) return false;
       var target = content._target;

       // fittocontents가 해당 축을 포함하면 부모 의존이 아님
       var fittocontents = target._p_fittocontents;
       if (fittocontents)
       {
           if (axis === "width" && (fittocontents === "width" || fittocontents === "both"))
               return false;
           if (axis === "height" && (fittocontents === "height" || fittocontents === "both"))
               return false;
       }

       var prop_size = (axis === "width") ? target._p_width : target._p_height;
       if (prop_size == null)
       {
           if (axis === "width")
               return (target._p_left != null && target._p_right != null);
           else
               return (target._p_top != null && target._p_bottom != null);
       }
       return (typeof prop_size === "string" && prop_size.indexOf("%") > -1);
   };
   
   __pFluidLayoutManager._calcTableContentsSize = function (templateInfo)
   {
       var templateinfo_tmp = (typeof structuredClone === "function")
           ? structuredClone(templateInfo)
           : JSON.parse(JSON.stringify(templateInfo));

       var contents_area = this._tablecontents_area;
       var contents_coordinate = this._tablecontents_coordinate;
       var contents_order = this._tablecontents_order;

       var row_gap = this._gap[1];
       var col_gap = this._gap[0];

       var fr_w = 0;
       var fr_h = 0;

       var self = this;

       // ── coordinate ────────────────────────────────────────────────────────
       if (contents_coordinate.length)
       {
           contents_coordinate.forEach(function (content)
           {
               var row_start = content.rowstart, col_start = content.colstart;
               var row_end = content.rowend, col_end = content.colend;

               var template_rect = self._getTemplateRect(row_start, row_end, col_start, col_end);

               var content_w = self._parseContentSize(content.size[0], template_rect[2]);
               var content_h = self._parseContentSize(content.size[1], template_rect[3]);
               content_w = self._getContentMinMaxSize(content_w, content.min_size[0], content.max_size[0]);
               content_h = self._getContentMinMaxSize(content_h, content.min_size[1], content.max_size[1]);

               // % 자식은 content.size 덮어쓰기 제외
               var dep_w = (self._fittocontents == 1 || self._fittocontents == 3)
                   && self._isTargetSizeParentDependent(content, "width");
               var dep_h = (self._fittocontents == 2 || self._fittocontents == 3)
                   && self._isTargetSizeParentDependent(content, "height");

               if ((self._fittocontents == 1 || self._fittocontents == 3) && !dep_w) content.size[0] = content_w;
               if ((self._fittocontents == 2 || self._fittocontents == 3) && !dep_h) content.size[1] = content_h;

               var c_w = content_w, c_h = content_h;
               var col_flex_sum = 0, row_flex_sum = 0;
               var i, cell_info;

               for (i = col_start; i <= col_end; i++)
               {
                   cell_info = templateInfo[0][i];
                   if (cell_info._is_flexible_col) col_flex_sum += cell_info._col_flexible_length;
                   else
                   {
                       c_w -= self._parseContentSize(cell_info._inner_col, self._contents_width);
                       if (cell_info._org_col.indexOf("%") > -1) cell_info._inner_col = template_rect[2];
                   }
               }
               for (i = row_start; i <= row_end; i++)
               {
                   cell_info = templateInfo[i][0];
                   if (cell_info._is_flexible_row) row_flex_sum += cell_info._row_flexible_length;
                   else
                   {
                       c_h -= self._parseContentSize(cell_info._inner_row, self._contents_height);
                       if (cell_info._org_row.indexOf("%") > -1) cell_info._inner_row = template_rect[3];
                   }
               }

               c_w -= (col_end - col_start) * col_gap;
               c_h -= (row_end - row_start) * row_gap;

               //  % 자식은 fr 계산 제외
               if (!dep_w && col_flex_sum > 0 && fr_w < c_w / col_flex_sum) fr_w = c_w / col_flex_sum;
               if (!dep_h && row_flex_sum > 0 && fr_h < c_h / row_flex_sum) fr_h = c_h / row_flex_sum;

               self._removeTableTemplateInfo(templateinfo_tmp, row_start, row_end, col_start, col_end);
           });
       }

       // ── area ──────────────────────────────────────────────────────────────
       if (contents_area.length)
       {
           contents_area.forEach(function (content)
           {
               var prop_area = content.coordinate;
               var area = self._tabletemplatearea_coordinate[prop_area];
               if (!area) return;

               var row_start, row_end, col_start, col_end;
               area.forEach(function (area_coord)
               {
                   var row = area_coord[0], col = area_coord[1];
                   if (row_start == undefined || row_start > row) row_start = row;
                   if (row_end == undefined || row_end < row) row_end = row;
                   if (col_start == undefined || col_start > col) col_start = col;
                   if (col_end == undefined || col_end < col) col_end = col;
               });

               var template_rect = self._getTemplateRect(row_start, row_end, col_start, col_end);

               var content_w = self._parseContentSize(content.size[0], template_rect[2]);
               var content_h = self._parseContentSize(content.size[1], template_rect[3]);
               content_w = self._getContentMinMaxSize(content_w, content.min_size[0], content.max_size[0]);
               content_h = self._getContentMinMaxSize(content_h, content.min_size[1], content.max_size[1]);

               var dep_w = (self._fittocontents == 1 || self._fittocontents == 3)
                   && self._isTargetSizeParentDependent(content, "width");
               var dep_h = (self._fittocontents == 2 || self._fittocontents == 3)
                   && self._isTargetSizeParentDependent(content, "height");

               if ((self._fittocontents == 1 || self._fittocontents == 3) && !dep_w) content.size[0] = content_w;
               if ((self._fittocontents == 2 || self._fittocontents == 3) && !dep_h) content.size[1] = content_h;

               var c_w = content_w, c_h = content_h;
               var col_flex_sum = 0, row_flex_sum = 0;
               var i, cell_info;

               for (i = col_start; i <= col_end; i++)
               {
                   cell_info = templateInfo[0][i];
                   if (cell_info._is_flexible_col) col_flex_sum += cell_info._col_flexible_length;
                   else
                   {
                       c_w -= self._parseContentSize(cell_info._inner_col, self._contents_width);
                       if (cell_info._org_col.indexOf("%") > -1) cell_info._inner_col = template_rect[2];
                   }
               }
               for (i = row_start; i <= row_end; i++)
               {
                   cell_info = templateInfo[i][0];
                   if (cell_info._is_flexible_row) row_flex_sum += cell_info._row_flexible_length;
                   else
                   {
                       c_h -= self._parseContentSize(cell_info._inner_row, self._contents_height);
                       if (cell_info._org_row.indexOf("%") > -1) cell_info._inner_row = template_rect[3];
                   }
               }

               c_w -= (col_end - col_start) * col_gap;
               c_h -= (row_end - row_start) * row_gap;

               if (!dep_w && col_flex_sum > 0 && fr_w < c_w / col_flex_sum) fr_w = c_w / col_flex_sum;
               if (!dep_h && row_flex_sum > 0 && fr_h < c_h / row_flex_sum) fr_h = c_h / row_flex_sum;

               self._removeTableTemplateInfo(templateinfo_tmp, row_start, row_end, col_start, col_end);
           });
       }

       // ── order ─────────────────────────────────────────────────────────────
       if (contents_order.length)
       {
           contents_order.forEach(function (contents)
           {
               for (var i = 0; i < contents.length; i++)
               {
                   var content = contents[i];
                   var cell_info = self._findUsableCell(templateinfo_tmp);
                   if (!cell_info) continue;

                   var template_rect = self._getTemplateRect(
                       cell_info._idx_row, cell_info._idx_row,
                       cell_info._idx_col, cell_info._idx_col);

                   var content_w = self._parseContentSize(content.size[0], template_rect[2]);
                   var content_h = self._parseContentSize(content.size[1], template_rect[3]);
                   content_w = self._getContentMinMaxSize(content_w, content.min_size[0], content.max_size[0]);
                   content_h = self._getContentMinMaxSize(content_h, content.min_size[1], content.max_size[1]);

                   var dep_w = (self._fittocontents == 1 || self._fittocontents == 3)
                       && self._isTargetSizeParentDependent(content, "width");
                   var dep_h = (self._fittocontents == 2 || self._fittocontents == 3)
                       && self._isTargetSizeParentDependent(content, "height");

                   if ((self._fittocontents == 1 || self._fittocontents == 3) && !dep_w) content.size[0] = content_w;
                   if ((self._fittocontents == 2 || self._fittocontents == 3) && !dep_h) content.size[1] = content_h;

                   if (!dep_w && cell_info._is_flexible_col)
                   {
                       var cw = content_w / cell_info._col_flexible_length;
                       if (fr_w < cw) fr_w = cw;
                   }
                   if (!dep_h && cell_info._is_flexible_row)
                   {
                       var ch = content_h / cell_info._row_flexible_length;
                       if (fr_h < ch) fr_h = ch;
                   }
               }
           });
       }

       // ── contents size 반영 ────────────────────────────────────────────────
       if (this._fittocontents == 1 || this._fittocontents == 3)
       {
           var contents_w = 0, col_len = 0;
           templateInfo[0].forEach(function (col_info)
           {
               contents_w += col_info._is_flexible_col
                   ? fr_w * col_info._col_flexible_length
                   : self._parseContentSize(col_info._inner_col, self._contents_width);
               col_len++;
           });
           this._contents_width = contents_w + (col_len - 1) * col_gap;
       }

       if (this._fittocontents == 2 || this._fittocontents == 3)
       {
           var contents_h = 0, row_len = 0;
           templateInfo.forEach(function (row_info)
           {
               contents_h += row_info[0]._is_flexible_row
                   ? fr_h * row_info[0]._row_flexible_length
                   : self._parseContentSize(row_info[0]._inner_row, self._contents_height);
               row_len++;
           });
           this._contents_height = contents_h + (row_len - 1) * row_gap;
       }
   };

    __pFluidLayoutManager._checkRecalcLayout = function (layoutInfo)
    {
        var ret = false;

        if (!ret) ret = this._checkScrollVisible(layoutInfo);

        return ret;
    };
    __pFluidLayoutManager._checkScrollVisible = function (layoutInfo)
    {
        var ret = false;
        if (this._is_panel) return ret;
        var last_info = layoutInfo[layoutInfo.length - 1];
        if (last_info)
        {
            var main_align = this._align[0];
            var cross_align = this._flexwrap ? this._align[2] : this._align[1];

            var safe_contents_width = 0;
            var safe_contents_height = 0;
            switch (this._direction)
            {
                case 0: // Horizontal
                    switch (main_align)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                            safe_contents_width = this._container_width - this._container_padding.left;
                            break;
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                            safe_contents_width = this._container_width - this._container_padding.right;
                            this._is_apply_hscrollbar_size = true;
                            break;
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            safe_contents_width = this._container_width;
                            break;
                    }

                    switch (cross_align)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                            safe_contents_height = this._container_height - this._container_padding.top;
                            break;
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                            safe_contents_height = this._container_height - this._container_padding.bottom;
                            this._is_apply_vscrollbar_size = true;
                            break;
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            safe_contents_height = this._container_height;
                            break;
                    }
                    if (last_info[0] > safe_contents_width)
                    {
                        if (!this._is_apply_hscrollbar_size)
                        {
                            if (this._fittocontents != 1 && this._fittocontents != 3)
                            {
                                this._is_apply_hscrollbar_size = true;
                                this._contents_height -= this._container_hscroll_size;
                                this._contents_height_remain = this._contents_height;
                                ret = true;
                            }
                        }
                        if (last_info[2] < 0)
                        {
                            if (!this._is_apply_vscrollbar_size)
                            {
                                this._is_apply_vscrollbar_size = true;
                                this._contents_width -= this._container_vscroll_size;
                                this._contents_width_remain = this._contents_width;
                                ret = true;
                            }
                        }
                    }
                    else if ((this._contents_height - last_info[2]) > safe_contents_height)
                    {
                        if (!this._is_apply_vscrollbar_size)
                        {
                            this._is_apply_vscrollbar_size = true;
                            this._contents_width -= this._container_vscroll_size;
                            this._contents_width_remain = this._contents_width;
                            ret = true;
                        }
                    }
                    break;
                case 1: // Vertical
                    switch (main_align)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                            safe_contents_height = this._container_height - this._container_padding.top;
                            break;
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                            safe_contents_height = this._container_height - this._container_padding.bottom;
                            this._is_apply_vscrollbar_size = true;
                            break;
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            safe_contents_height = this._container_height;
                            break;
                    }

                    switch (cross_align)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                            safe_contents_width = this._container_width - this._container_padding.left;
                            break;
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                            safe_contents_width = this._container_width - this._container_padding.right;
                            this._is_apply_hscrollbar_size = true;
                            break;
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            safe_contents_width = this._container_width;
                            break;
                    }
                    if (last_info[0] > safe_contents_height)
                    {
                        if (!this._is_apply_vscrollbar_size)
                        {
                            if (this._fittocontents != 2 && this._fittocontents != 3)
                            {
                                this._is_apply_vscrollbar_size = true;
                                this._contents_width -= this._container_vscroll_size;
                                this._contents_width_remain = this._contents_width;
                                ret = true;
                            }
                        }
                        if (last_info[2] < 0)
                        {
                            if (!this._is_apply_hscrollbar_size)
                            {
                                this._is_apply_hscrollbar_size = true;
                                this._contents_height -= this._container_hscroll_size;
                                this._contents_height_remain = this._contents_height;
                                ret = true;
                            }
                        }
                    }
                    else if ((this._contents_width - last_info[2]) > safe_contents_width)
                    {
                        if (!this._is_apply_hscrollbar_size)
                        {
                            this._is_apply_hscrollbar_size = true;
                            this._contents_height -= this._container_hscroll_size;
                            this._contents_height_remain = this._contents_height;
                            ret = true;
                        }
                    }
                    break;
            }
        }

        return ret;
    };

    // Flex Horizontal
    __pFluidLayoutManager._getHorizontalContentSizeInfoNoWrap = function ()
    {
        return [this._calcFluidHorizontalContentSize()];
    };
    __pFluidLayoutManager._getHorizontalContentSizeInfoWrap = function ()
    {
        var ret = [];
        var contents = this._fluidcontents;

        var c_cnt = 0;

        var c_m_sum = 0;    // contents_main_sum
        var c_c_max = 0;    // contents_cross_max

        var c_m_space = 0   // container_main_spae
        var c_c_space = 0;  // container_cross_space

        var gap = this._gap;

        var contents_w = this._contents_width;
        var contents_h = this._contents_height;

        contents.forEach(function (content, idx, orgArr)
        {
            var is_last = idx == (orgArr.length - 1);

            var c_w = content.size[0];
            var c_h = content.size[1];

            var comp_width = this._contents_width;
            var comp_height = this._contents_height;

            // position base
            var info = content._target._arrange_info;
            if (info)
            {
                var obj, comp, distance, refer_font;
                if (obj = info.width)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_w = distance;
                        comp_width = comp._width;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_w = distance;
                            comp_width = this._getFontRefSize(refer_font);
                        }
                    }
                }

                if (obj = info.height)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_h = distance;
                        comp_height = comp._height;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_h = distance;
                            comp_height = this._getFontRefSize(refer_font);
                        }
                    }
                }
            }

            // width / height 정수변환
            c_w = this._parseContentSize(c_w, comp_width);
            c_h = this._parseContentSize(c_h, comp_height);

            content._size = [c_w, c_h];

            // min / max 보정
            c_w = this._getContentMinMaxSize(c_w, content.min_size[0], content.max_size[0]);
            c_h = this._getContentMinMaxSize(c_h, content.min_size[1], content.max_size[1]);

            var is_over;
            switch (this._fittocontents)
            {
                case 0: // none
                case 2: // height
                    is_over = nexacro._isAlmostGreater((c_m_sum + c_w), contents_w);
                    break;
                case 1: // width
                case 3: // both
                    is_over = false;
                    break;
            }

            // 총합계 계산
            if (is_last)
            {
                // 마지막 컨텐츠
                if (is_over)
                {
                    // 나를 배치 불가능
                    // 이전에 더하고 온 갭 제외
                    // 현재 정보까지를 저장하고 다음라인 변경.

                    c_m_sum -= gap[0];
                    c_m_space = contents_w - c_m_sum;
                    c_c_space = contents_h - c_c_max - gap[1];

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);

                    c_cnt = 1;
                    c_m_sum = c_w;
                    c_m_space = contents_w - c_m_sum;
                    c_c_space -= c_h;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);
                }
                else
                {
                    // 나를 배치 가능
                    // 전체 컨텐츠 더하고. 카운팅 넣고.

                    c_cnt++;
                    c_m_sum += c_w;
                    c_c_max = c_h > c_c_max ? c_h : c_c_max;

                    c_m_space = contents_w - c_m_sum;
                    c_c_space = contents_h - c_c_max;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);
                }
            }
            else
            {
                // 다음 컨텐츠가 있음
                if (is_over)
                {
                    // 컨텐츠 배치 불가능함. 다음라인에 배치될거임
                    // 이전에 더하고 온 갭 제외
                    // 현재 정보까지를 저장하고 라인 변경을 위한 초기화.

                    c_m_sum -= gap[0];
                    c_m_space = contents_w - c_m_sum;
                    c_c_space = contents_h - c_c_max - gap[1];
                    contents_h = c_c_space;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);

                    c_cnt = 1;
                    c_m_sum = c_w;
                    c_m_sum += gap[0];
                    c_c_max = c_h;
                }
                else
                {
                    // 현재 컨텐츠 배치 가능함.
                    // 전체 컨텐츠에 더하고. 갭넣고. 카운팅 더하고.

                    c_cnt++;
                    c_m_sum += c_w;
                    c_m_sum += gap[0];

                    c_c_max = c_h > c_c_max ? c_h : c_c_max;
                }
            }

            // 컨텐츠 크기 설정
            // 컨텐츠 위치는 나중에 지정
            this._setContentAdjustSize(content, 0, 0, c_w, c_h);
        }, this);

        return ret;
    };

    __pFluidLayoutManager._getFluidHorizontalContentSizeInfoNoWrap = function ()
    {
        var ret = [];

        ret = this._calcFluidHorizontalContentSize();
        ret = this._growFluidHorizontalContent(ret);
        ret = this._shrinkFluidHorizontalContent(ret);

        return [ret];
    };
    __pFluidLayoutManager._getFluidHorizontalContentSizeInfoWrap = function ()
    {
        // wrap은 shrink를 무시하고 줄바꿈처리
        var ret = [];

        ret = this._calcFluidHorizontalContentSize();

        if (nexacro._isAlmostGreaterOrEqual(ret[1], 0))
        {
            // 여백이 있으면 wrap을 하지 않음
            ret = [this._growFluidHorizontalContent(ret)];
        }
        else
        {
            // 여백이 없을때만 wrap 계산
            ret = this._wrapFluidHorizontalContent(ret);
        }

        return ret;
    };

    __pFluidLayoutManager._calcFluidHorizontalContentSize = function (contentsList)
    {
        var contents = contentsList ? contentsList : this._fluidcontents;

        var c_cnt = 0;          // contents_count

        var c_sum = 0;          // contents_sum
        var c_m_sum = 0;        // contents_main_sum
        var g_sum = this._gap[0] * (contents.length - 1);   // gap_sum

        var c_c_max = 0;        // contents_cross_max

        var c_m_space = 0;    // container_main_space
        var c_c_space = 0;    // container_cross_space

        contents.forEach(function (content)
        {
            var c_w = content.size[0];
            var c_h = content.size[1];

            var comp_width = this._contents_width;
            var comp_height = this._contents_height;

            // position base
            var info = content._target._arrange_info;
            if (info)
            {
                var obj, comp, distance, refer_font;
                if (obj = info.width)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_w = distance;
                        comp_width = comp._width;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_w = distance;
                            comp_width = this._getFontRefSize(refer_font);
                        }
                    }
                }

                if (obj = info.height)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_h = distance;
                        comp_height = comp._height;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_h = distance;
                            comp_height = this._getFontRefSize(refer_font);
                        }
                    }
                }
            }

            c_cnt++;

            // width / height 정수변환
            c_w = this._parseContentSize(c_w, comp_width);
            c_h = this._parseContentSize(c_h, comp_height);

            content._size = [c_w, c_h];

            // min / max 보정
            c_w = this._getContentMinMaxSize(c_w, content.min_size[0], content.max_size[0]);
            c_h = this._getContentMinMaxSize(c_h, content.min_size[1], content.max_size[1]);

            c_sum += c_w;
            c_c_max = c_h > c_c_max ? c_h : c_c_max;

            this._setContentAdjustSize(content, 0, 0, c_w, c_h);
        }, this);

        c_m_sum = c_sum + g_sum;

        switch (this._fittocontents)
        {
            case 0: // none
                c_m_space = this._contents_width_remain - c_m_sum;
                c_c_space = this._contents_height_remain - c_c_max;
                break;
            case 1: // width
                c_m_space = 0;
                c_c_space = this._contents_height_remain - c_c_max;
                break;
            case 2: // height
                c_m_space = this._contents_width_remain - c_m_sum;
                c_c_space = 0;
                break;
            case 3: // both
                c_m_space = 0;
                c_c_space = 0;
                break;
        }

        // [contents_main_sum, container_main_spacing, container_cross_spacing, content_count, content_cross_maxsize]
        return [c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max];
    };

    __pFluidLayoutManager._growFluidHorizontalContent = function (sizeInfo, contentsList)
    {
        // 여백이 있을때만 grow 계산
        if (nexacro._isAlmostLesserOrEqual(sizeInfo[1], 0))
            return sizeInfo;

        var contents = contentsList ? contentsList : this._fluidcontents;
        var no_limited_contents = [];
        var grow_total = 0;
        var grow_info = contents.reduce(function (acc, content)
        {
            if (content.grow > 0 && content._adjust_pos[2] > 0)
            {
                acc[1].push(content);
                acc[0] += content.grow;
            }
            return acc;
        }, [0, []]);

        grow_info[1].forEach(function (content)
        {
            if (!(content.fittocontents == "width" || content.fittocontents == "both"))
            {
                var content_width = this._getContentAdjustWidth(content);

                var grow_rate = content.grow / grow_info[0];
                var grow_size = grow_rate * sizeInfo[1];
                var grow_width = content_width + grow_size;

                var adjsut_width = this._getContentMinMaxSize(grow_width, content.min_size[0], content.max_size[0]);
                if (grow_width == adjsut_width)
                {
                    no_limited_contents.push(content);
                }

                grow_total += adjsut_width - content_width;

                this._setContentAdjustWidth(content, adjsut_width);
            }

        }, this);

        sizeInfo[0] = sizeInfo[0] + grow_total; // 변경된 차이만큼 컨텐츠 총합에 더해야함
        sizeInfo[1] = sizeInfo[1] - grow_total; // 변경된 차이만큼 여백에서 빼야함

        // 오차범위 포함한 재귀
        if (no_limited_contents.length && grow_total != 0)
        {
            sizeInfo = this._growFluidHorizontalContent(sizeInfo, no_limited_contents)
        }

        return sizeInfo;
    };
    __pFluidLayoutManager._shrinkFluidHorizontalContent = function (sizeInfo, contentsList)
    {
        // 여백이 없을때만 shrink 계산
        if (nexacro._isAlmostGreaterOrEqual(sizeInfo[1], 0))
            return sizeInfo;

        var contents = contentsList ? contentsList : this._fluidcontents;
        var brecalc = true;
        // shrink가 있을때 보정할 기준 계산
        var shrink_total = 0;
        var shrink_info = contents.reduce(function (acc, content)
        {
            if (content.shrink > 0 && content._adjust_pos[2] > 0)
            {
                acc[0].push(content._adjust_pos[2]);
                acc[1].push(content);
                acc[2] += content._adjust_pos[2] * content.shrink;
            }
            return acc;
        }, [[], [], 0]);

        shrink_info[1].forEach(function (content, idx)
        {
            var adjsut_width = 0;
            var content_width = this._getContentAdjustWidth(content);
            var fittocontents = content.fittocontents;
            if (fittocontents != "both" && fittocontents != "width")
            {
                var basis_width = shrink_info[0][idx] * content.shrink;

                var shrink_rate = basis_width / shrink_info[2];
                var shrink_size = shrink_rate * sizeInfo[1];
                var shrink_width = content_width + shrink_size;

                adjsut_width = this._getContentMinMaxSize(shrink_width, content.min_size[0], content.max_size[0]);
                if (adjsut_width == content.min_size[0] || adjsut_width == content.max_size[0])
                    brecalc = false;
                this._setContentAdjustWidth(content, adjsut_width);
            }
            shrink_total += content_width - adjsut_width;

        }, this);

        sizeInfo[0] = sizeInfo[0] - shrink_total; // 변경된 차이만큼 컨텐츠 총합에서 빼야함
        sizeInfo[1] = sizeInfo[1] + shrink_total; // 변경된 차이만큼 여백에선 더해야함

        // 컨텐츠 과분이 있으면 보이는 컨텐츠들을 계속 줄여나가야함
        if (shrink_info[1].length && brecalc)
        {
            sizeInfo = this._shrinkFluidHorizontalContent(sizeInfo);
        }

        return sizeInfo;
    };
    __pFluidLayoutManager._wrapFluidHorizontalContent = function (sizeInfo, contentsList, isRecursive)
    {
        var contents = contentsList ? contentsList : this._fluidcontents;
        var curr_content = contents.slice(); // 복사해서 사용
        var wrap_content = [];

        var content_width = 0;
        var content_main_gap = this._gap[0];
        var content_cross_gap = this._gap[1];
        var main_spacing = sizeInfo[1];     // 음수임

        for (var i = contents.length - 1; i >= 0; i--)
        {
            var content = contents[i];

            if (nexacro._isAlmostGreaterOrEqual(main_spacing, 0))
            {
                // 여백이 양수가 된순간 curr와 wrap을 각각 계산
                // wrap 결과는 또다시 여백이 음수일수 있음
                var curr_info = this._calcFluidHorizontalContentSize(curr_content);

                this._contents_height_remain = curr_info[2] - content_cross_gap;

                var wrap_info = this._calcFluidHorizontalContentSize(wrap_content);

                // wrap 계산에서 음수가 안나올때까지 계산해야함
                if (wrap_info[1] < 0)
                {
                    // wrap_contents가 2개 이상일때만 추가로 wrap을 할수가 있음
                    if (wrap_content.length > 1)
                    {
                        sizeInfo = this._wrapFluidHorizontalContent(wrap_info, wrap_content, true);
                        curr_info = this._growFluidHorizontalContent(curr_info, curr_content);

                        sizeInfo.splice(0, 0, curr_info);
                    }
                    else
                    {
                        // wrap된게 한개면 계산 끝냄. 여백이 마이너스 여도 shrink 적용은 하지 않음
                        curr_info = this._growFluidHorizontalContent(curr_info, curr_content);
                        wrap_info = this._shrinkFluidHorizontalContent(wrap_info, wrap_content);

                        sizeInfo = [curr_info];
                        sizeInfo.push(wrap_info);
                    }

                    break;
                }
                else
                {
                    // 줄나누기가 끝났으면 각 라인에 grow 적용
                    curr_info = this._growFluidHorizontalContent(curr_info, curr_content);
                    wrap_info = this._growFluidHorizontalContent(wrap_info, wrap_content);

                    if (isRecursive)
                    {
                        // 재귀로 사용시 바로 반환
                        return [curr_info, wrap_info];
                    }
                    else
                    {
                        // 두줄로 끝나는 wrap임
                        sizeInfo = [curr_info, wrap_info];
                        break;
                    }
                }
            }
            else
            {
                // 공백이 음수. 컨텐츠를 나눠야함
                if (curr_content.length > 1)
                {
                    content_width = this._getContentAdjustWidth(content);

                    wrap_content.splice(0, 0, curr_content.pop());  // 다음줄로 보내고
                    main_spacing += content_width;                  // 공백 줄여보고
                    main_spacing += content_main_gap;               // 컨텐츠 하나 빠졌으니 갭도 하나 뺌
                }
                else
                {
                    // 공백이 음수지만 현재 컨텐츠가 한개밖에 없음. 더빼면 안됨. 현시점 기준으로 계산을 끝냄
                    var curr_info = this._calcFluidHorizontalContentSize(curr_content);

                    this._contents_height_remain = curr_info[2] - content_cross_gap;

                    var wrap_info = this._calcFluidHorizontalContentSize(wrap_content);
                    if (wrap_info[1] < 0)
                    {
                        if (wrap_content.length > 1)
                        {
                            sizeInfo = this._wrapFluidHorizontalContent(wrap_info, wrap_content, true);
                            curr_info = this._growFluidHorizontalContent(curr_info, curr_content);
                            curr_info = this._shrinkFluidHorizontalContent(curr_info, curr_content);

                            sizeInfo.splice(0, 0, curr_info);
                        }
                        else
                        {
                            curr_info = this._growFluidHorizontalContent(curr_info, curr_content);
                            curr_info = this._shrinkFluidHorizontalContent(curr_info, curr_content);
                            wrap_info = this._shrinkFluidHorizontalContent(wrap_info, wrap_content);

                            sizeInfo = [curr_info];
                            sizeInfo.push(wrap_info);
                        }

                        break;
                    }
                    else
                    {
                        curr_info = this._growFluidHorizontalContent(curr_info, curr_content);
                        curr_info = this._shrinkFluidHorizontalContent(curr_info, curr_content);
                        wrap_info = this._growFluidHorizontalContent(wrap_info, wrap_content);

                        if (isRecursive)
                        {
                            return [curr_info, wrap_info];
                        }
                        else
                        {
                            sizeInfo = [curr_info, wrap_info];
                            break;
                        }
                    }
                    //sizeInfo = [curr_info];
                }
            }
        }
        return sizeInfo;
    };

    __pFluidLayoutManager._adjustHorizontalContent = function (layoutInfo)
    {
        // 인포가 없을상황이면 안됨..
        if (layoutInfo.length == 0)
            return;

        switch (this._flexwrap)
        {
            case 0: // NOWRAP
                this._adjustHorizontalContentSingleLine(layoutInfo);
                break;
            case 1: // WRAP
                this._adjustHorizontalContentMultiLine(layoutInfo);
                break;
        }
    };
    __pFluidLayoutManager._adjustHorizontalContentSingleLine = function (layoutInfo)
    {
        var info = layoutInfo[0];

        var m_space = 0;

        var pad_l = this._container_padding.left;
        var pad_t = this._container_padding.top;
        var pad_r = this._container_padding.right;
        var pad_b = this._container_padding.bottom;

        var gap = this._gap;

        var main_align = this._align[0];
        var cross_align = this._align[1];

        var main_spacing = info[1];
        var cross_spacing = info[2];
        var content_len = info[3];
        var cross_max = info[4];

        var l = 0;
        var t = 0;

        // Main 보정
        switch (main_align)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                l += pad_l;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                m_space = main_spacing;
                l += pad_l + m_space;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                m_space = main_spacing / 2;
                l += pad_l + m_space;
                break;
            case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                m_space = (main_spacing > 0) ? main_spacing / (content_len - 1) : 0;
                l += pad_l;
                break;
            case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                m_space = (main_spacing > 0) ? main_spacing / (content_len * 2) : main_spacing / 2;
                l += pad_l + m_space;
                break;
            case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                m_space = (main_spacing > 0) ? main_spacing / (content_len + 1) : main_spacing / 2;
                l += pad_l + m_space;
                break;
        }

        // Cross 여백 보정
        switch (cross_align)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                t += pad_t;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                t += pad_t + cross_spacing;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                t += pad_t + (cross_spacing / 2);
                break;
        }

        // Adjust 계산
        this._fluidcontents.forEach(function (content)
        {
            var pos = content._adjust_pos;

            pos[0] = l;

            l += gap[0];
            l += pos[2];
            if (l < 0) l = 0;

            // 다음 content 간격
            switch (main_align)
            {
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    l += (main_spacing > 0) ? m_space : 0;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    l += (main_spacing > 0) ? (m_space * 2) : 0;
                    break;
            }

            // content 개별 top 높이 조절
            switch (cross_align)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                    pos[1] = t;
                    break;
                case 1: //LAYOUT_CONTENT_ALIGN_END
                    pos[1] = t + (cross_max - pos[3]);
                    break;
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                    pos[1] = t + ((cross_max - pos[3]) / 2);
                    break;
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    // 동작 없음. 이쪽으로 들어올때 버그의심
                    break;
            }

            // 최대 rect 저장
            var curr_right = 0;
            if (pos[2] > 0)
                curr_right = pos[0] + pos[2] + pad_r;
            var curr_bottom = 0;
            if (pos[3] > 0)
                curr_bottom = pos[1] + pos[3] + pad_b;

            if (curr_right > this._getContentMaxRight()) this._setContentMaxRight(curr_right);
            if (curr_bottom > this._getContentMaxBottom()) this._setContentMaxBottom(curr_bottom);
        }, this);
    };
    __pFluidLayoutManager._adjustHorizontalContentMultiLine = function (layoutInfo)
    {
        var info;
        var info_len = layoutInfo.length;

        var pos;
        var content;
        var m_space = 0;
        var c_space = 0;

        var pad_l = this._container_padding.left;
        var pad_t = this._container_padding.top;
        var pad_r = this._container_padding.right;
        var pad_b = this._container_padding.bottom;

        var gap = this._gap;

        var main_align = this._align[0];
        var cross_align = this._align[1];
        var cross_wrapalign = this._align[2];

        var main_spacing = 0;
        var cross_spacing = layoutInfo[info_len - 1][2];

        var l = 0;
        var t = 0;

        // Container cross 여백 보정
        switch (cross_wrapalign)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                t += pad_t;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                t += pad_t + cross_spacing;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                t += pad_t + (cross_spacing / 2);
                break;
            case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len - 1) : 0;
                t += pad_t;
                break;
            case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len * 2) : cross_spacing / 2;
                t += pad_t + c_space;
                break;
            case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len + 1) : cross_spacing / 2;
                t += pad_t + c_space;
                break;
        }

        var i = 0;
        var j = 0;
        for (; i < info_len; i++)
        {
            info = layoutInfo[i];

            main_spacing = info[1];
            var content_len = info[3];
            var cross_max = info[4];

            // 시작위치 결정
            l = 0;

            // Main 보정
            switch (main_align)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                    l += pad_l;
                    break;
                case 1: //LAYOUT_CONTENT_ALIGN_END
                    m_space = main_spacing;
                    l += pad_l + m_space;
                    break;
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                    m_space = main_spacing / 2;
                    l += pad_l + m_space;
                    break;
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    m_space = (main_spacing > 0) ? main_spacing / (content_len - 1) : 0;
                    l += pad_l;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    m_space = (main_spacing > 0) ? main_spacing / (content_len * 2) : main_spacing / 2;
                    l += pad_l + m_space;
                    break;
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    m_space = (main_spacing > 0) ? main_spacing / (content_len + 1) : main_spacing / 2;
                    l += pad_l + m_space;
                    break;
            }

            // adjust 계산
            while (content_len)
            {
                content = this._fluidcontents[j];
                pos = content._adjust_pos;

                pos[0] = l;

                l += gap[0];
                l += pos[2];
                if (l < 0) l = 0;

                switch (main_align)
                {
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        l += (main_spacing > 0) ? m_space : 0;
                        break;
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        l += (main_spacing > 0) ? (m_space * 2) : 0;
                        break;
                }
                switch (cross_align)
                {
                    case 0: //LAYOUT_CONTENT_ALIGN_START
                        pos[1] = t;
                        break;
                    case 1: //LAYOUT_CONTENT_ALIGN_END
                        pos[1] = t + (cross_max - pos[3]);
                        break;
                    case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        pos[1] = t + ((cross_max - pos[3]) / 2);
                        break;
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        // 동작 없음. 이쪽으로 들어올때 버그의심
                        break;
                }
                // 최대 rect 저장
                var max_right = this._getContentMaxRight();
                var max_bottom = this._getContentMaxBottom();

                if ((pos[0] + pos[2] + pad_r) > max_right)
                {
                    this._setContentMaxRight(pos[0] + pos[2] + pad_r);
                }
                if ((pos[1] + pos[3] + pad_b) > max_bottom)
                {
                    this._setContentMaxBottom(pos[1] + pos[3] + pad_b);
                }

                j++
                content_len--;
            }

            // next top pos
            if (info[3])
            {
                t += cross_max;
                t += gap[1];
            }

            switch (cross_wrapalign)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                case 1: //LAYOUT_CONTENT_ALIGN_END
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    t += (cross_spacing > 0) ? c_space : 0;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    t += (cross_spacing > 0) ? (c_space * 2) : 0;
                    break;
            }
        }
    };

    // Flex Vertical
    __pFluidLayoutManager._getVerticalContentSizeInfoNoWrap = function ()
    {
        return [this._calcFluidVerticalContentSize()];
    };
    __pFluidLayoutManager._getVerticalContentSizeInfoWrap = function ()
    {
        var ret = [];
        var contents = this._fluidcontents;

        var c_cnt = 0;

        var c_m_sum = 0;    // contents_main_sum
        var c_c_max = 0;    // contents_cross_max

        var c_m_space = 0   // container_main_spae
        var c_c_space = 0;  // container_cross_space

        var gap = this._gap;

        var contents_w = this._contents_width;
        var contents_h = this._contents_height;

        contents.forEach(function (content, idx, orgArr)
        {
            var is_last = idx == (orgArr.length - 1);

            var c_w = content.size[0];
            var c_h = content.size[1];

            var comp_width = this._contents_width;
            var comp_height = this._contents_height;

            // position base
            var info = content._target._arrange_info;
            if (info)
            {
                var obj, comp, distance, refer_font;
                if (obj = info.width)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_w = distance;
                        comp_width = comp._width;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_w = distance;
                            comp_width = this._getFontRefSize(refer_font);
                        }
                    }
                }

                if (obj = info.height)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_h = distance;
                        comp_height = comp._height;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_h = distance;
                            comp_height = this._getFontRefSize(refer_font);
                        }
                    }
                }
            }

            // width / height 정수변환
            c_w = this._parseContentSize(c_w, comp_width);
            c_h = this._parseContentSize(c_h, comp_height);

            content._size = [c_w, c_h];

            // min / max 보정
            c_w = this._getContentMinMaxSize(c_w, content.min_size[0], content.max_size[0]);
            c_h = this._getContentMinMaxSize(c_h, content.min_size[1], content.max_size[1]);


            var is_over;
            switch (this._fittocontents)
            {
                case 0: // none
                case 1: // width
                    is_over = nexacro._isAlmostGreater((c_m_sum + c_h), contents_h);
                    break;
                case 2: // height
                case 3: // both
                    is_over = false;
                    break;
            }

            // 총합계 계산
            if (is_last)
            {
                // 마지막 컨텐츠
                if (is_over)
                {
                    // 나를 배치 불가능
                    // 이전에 더하고 온 갭 제외
                    // 현재 정보까지를 저장하고 다음라인 변경.

                    c_m_sum -= gap[1];
                    c_m_space = contents_h - c_m_sum;
                    c_c_space = contents_w - c_c_max - gap[0];

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);
                    c_cnt = 1;
                    c_m_sum = c_h;
                    c_m_space = contents_h - c_m_sum;
                    c_c_space -= c_w;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);
                }
                else
                {
                    // 나를 배치 가능
                    // 전체 컨텐츠 더하고. 카운팅 넣고.

                    c_cnt++;
                    c_m_sum += c_h;
                    c_c_max = c_w > c_c_max ? c_w : c_c_max;

                    c_m_space = contents_h - c_m_sum;
                    c_c_space = contents_w - c_c_max;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);
                }
            }
            else
            {
                // 다음 컨텐츠가 있음
                if (is_over)
                {
                    // 컨텐츠 배치 불가능함. 다음라인에 배치될거임
                    // 이전에 더하고 온 갭 제외
                    // 현재 정보까지를 저장하고 라인 변경을 위한 초기화.

                    c_m_sum -= gap[1];
                    c_m_space = contents_h - c_m_sum;
                    c_c_space = contents_w - c_c_max - gap[0];
                    contents_w = c_c_space;

                    ret.push([c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max]);

                    c_cnt = 1;
                    c_m_sum = c_h;
                    c_m_sum += gap[1];
                    c_c_max = c_w;
                }
                else
                {
                    // 현재 컨텐츠 배치 가능함.
                    // 전체 컨텐츠에 더하고. 갭넣고. 카운팅 더하고.

                    c_cnt++;
                    c_m_sum += c_h;
                    c_m_sum += gap[1];

                    c_c_max = c_w > c_c_max ? c_w : c_c_max;
                }
            }

            // 컨텐츠 크기 설정
            // 컨텐츠 위치는 나중에 지정
            this._setContentAdjustSize(content, 0, 0, c_w, c_h);
        }, this);

        return ret;
    };

    __pFluidLayoutManager._getFluidVerticalContentSizeInfoNoWrap = function ()
    {
        var ret = [];

        ret = this._calcFluidVerticalContentSize();
        ret = this._growFluidVerticalContent(ret);
        ret = this._shrinkFluidVerticalContent(ret);

        return [ret];
    };
    __pFluidLayoutManager._getFluidVerticalContentSizeInfoWrap = function ()
    {
        // wrap은 shrink를 무시하고 줄바꿈처리
        var ret = [];

        ret = this._calcFluidVerticalContentSize();

        if (nexacro._isAlmostGreaterOrEqual(ret[1], 0))
        {
            // 여백이 있으면 wrap을 하지 않음
            ret = [this._growFluidVerticalContent(ret)];
        }
        else
        {
            // 여백이 없을때만 wrap 계산
            ret = this._wrapFluidVerticalContent(ret);
        }

        return ret;
    };

    __pFluidLayoutManager._calcFluidVerticalContentSize = function (contentsList)
    {
        var contents = contentsList ? contentsList : this._fluidcontents;

        var c_cnt = 0;          // contents_count

        var c_sum = 0;          // contents_sum
        var c_m_sum = 0;        // contents_main_sum
        var g_sum = this._gap[1] * (contents.length - 1);   // gap_sum

        var c_c_max = 0;        // contents_cross_max

        var c_m_space = 0;    // container_main_space
        var c_c_space = 0;    // container_cross_space

        contents.forEach(function (content)
        {
            var c_w = content.size[0];
            var c_h = content.size[1];

            var comp_width = this._contents_width;
            var comp_height = this._contents_height;

            // position base
            var info = content._target._arrange_info;
            if (info)
            {
                var obj, comp, distance, refer_font;
                if (obj = info.width)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_w = distance;
                        comp_width = comp._width;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_w = distance;
                            comp_width = this._getFontRefSize(refer_font);
                        }
                    }
                }

                if (obj = info.height)
                {
                    distance = obj.distance;
                    comp = content._target._findComponentForArrange(obj.compid);
                    if (comp)
                    {
                        c_h = distance;
                        comp_height = comp._height;
                    }
                    else
                    {
                        if (distance.indexOf("em") > -1)
                        {
                            comp = content._target;
                            if (distance.indexOf("rem") > -1)
                            {
                                comp = comp._getRootObject();
                            }

                            refer_font = comp._getReferenceAbsoluteFont();

                            c_h = distance;
                            comp_height = this._getFontRefSize(refer_font);
                        }
                    }
                }
            }

            c_cnt++;

            // width / height 정수변환
            c_w = this._parseContentSize(c_w, comp_width);
            c_h = this._parseContentSize(c_h, comp_height);

            content._size = [c_w, c_h];

            // min / max 보정
            c_w = this._getContentMinMaxSize(c_w, content.min_size[0], content.max_size[0]);
            c_h = this._getContentMinMaxSize(c_h, content.min_size[1], content.max_size[1]);

            c_sum += c_h;
            c_c_max = c_w > c_c_max ? c_w : c_c_max;

            this._setContentAdjustSize(content, 0, 0, c_w, c_h);
        }, this);

        c_m_sum = c_sum + g_sum;

        switch (this._fittocontents)
        {
            case 0: // none
                c_m_space = this._contents_height_remain - c_m_sum;
                c_c_space = this._contents_width_remain - c_c_max;
                break;
            case 1: // width
                c_m_space = this._contents_height_remain - c_m_sum;
                c_c_space = 0;
                break;
            case 2: // height
                c_m_space = 0;
                c_c_space = this._contents_width_remain - c_c_max;
                break;
            case 3: // both
                c_m_space = 0;
                c_c_space = 0;
                break;
        }

        // [contents_main_sum, container_main_spacing, container_cross_spacing, content_count, content_cross_maxsize]
        return [c_m_sum, c_m_space, c_c_space, c_cnt, c_c_max];
    };

    __pFluidLayoutManager._growFluidVerticalContent = function (sizeInfo, contentsList)
    {
        // 여백이 있을때만 grow 계산
        if (nexacro._isAlmostLesserOrEqual(sizeInfo[1], 0))
            return sizeInfo;

        var contents = contentsList ? contentsList : this._fluidcontents;
        var no_limited_contents = [];

        var grow_total = 0;
        var grow_info = contents.reduce(function (acc, content)
        {
            if (content.grow > 0 && content._adjust_pos[3] > 0)
            {
                acc[0] += content.grow;
                acc[1].push(content);
            }
            return acc;
        }, [0, []]);

        grow_info[1].forEach(function (content)
        {
            if (!(content.fittocontents == "height" || content.fittocontents == "both"))
            {
                var content_height = this._getContentAdjustHeight(content);

                var grow_rate = content.grow / grow_info[0];
                var grow_size = grow_rate * sizeInfo[1];
                var grow_height = content_height + grow_size;

                var adjsut_height = this._getContentMinMaxSize(grow_height, content.min_size[1], content.max_size[1]);
                if (grow_height == adjsut_height)
                {
                    no_limited_contents.push(content);
                }

                grow_total += adjsut_height - content_height;

                this._setContentAdjustHeight(content, adjsut_height);
            }
        }, this);

        sizeInfo[0] = sizeInfo[0] + grow_total; // 변경된 차이만큼 컨텐츠 총합에 더해야함
        sizeInfo[1] = sizeInfo[1] - grow_total; // 변경된 차이만큼 여백에서 빼야함

        // 오차범위 포함한 재귀
        if (no_limited_contents.length && grow_total != 0)
        {
            sizeInfo = this._growFluidVerticalContent(sizeInfo, no_limited_contents)
        }

        return sizeInfo;
    };
    __pFluidLayoutManager._shrinkFluidVerticalContent = function (sizeInfo, contentsList)
    {
        // 여백이 없을때만 shrink 계산
        if (nexacro._isAlmostGreaterOrEqual(sizeInfo[1], 0))
            return sizeInfo;

        var contents = contentsList ? contentsList : this._fluidcontents;
        var brecalc = true;
        // shrink가 있을때 보정할 기준 계산
        var shrink_total = 0;
        var shrink_info = contents.reduce(function (acc, content)
        {
            if (content.shrink > 0 && content._adjust_pos[3] > 0)
            {
                acc[0].push(content._adjust_pos[3]);
                acc[1].push(content);
                acc[2] += content._adjust_pos[3] * content.shrink;
            }
            return acc;
        }, [[], [], 0]);

        shrink_info[1].forEach(function (content, idx)
        {
            var adjsut_height = 0;
            var content_height = this._getContentAdjustHeight(content);
            var fittocontents = content.fittocontents;
            if (fittocontents != "both" && fittocontents != "height")
            {
                var basis_height = shrink_info[0][idx] * content.shrink;
                var shrink_rate = basis_height / shrink_info[2];
                var shrink_size = shrink_rate * sizeInfo[1];
                var shrink_height = content_height + shrink_size;

                adjsut_height = this._getContentMinMaxSize(shrink_height, content.min_size[1], content.max_size[1]);
                if (adjsut_height == content.min_size[1] || adjsut_height == content.max_size[1])
                    brecalc = false;
                this._setContentAdjustHeight(content, adjsut_height);
            }
            shrink_total += content_height - adjsut_height;
        }, this);

        sizeInfo[0] = sizeInfo[0] - shrink_total; // 변경된 차이만큼 컨텐츠 총합에서 빼야함
        sizeInfo[1] = sizeInfo[1] + shrink_total; // 변경된 차이만큼 여백에선 더해야함

        // 컨텐츠 과분이 있으면 보이는 컨텐츠들을 계속 줄여나가야함
        if (shrink_info[1].length && brecalc)
        {
            sizeInfo = this._shrinkFluidVerticalContent(sizeInfo);
        }

        return sizeInfo;
    };
    __pFluidLayoutManager._wrapFluidVerticalContent = function (sizeInfo, contentsList, isRecursive)
    {
        var contents = contentsList ? contentsList : this._fluidcontents;
        var curr_content = contents.slice(); // 복사해서 사용
        var wrap_content = [];

        var content_height = 0;
        var content_main_gap = this._gap[1];
        var content_cross_gap = this._gap[0];
        var main_spacing = sizeInfo[1];     // 음수임

        for (var i = contents.length - 1; i >= 0; i--)
        {
            var content = contents[i];

            if (nexacro._isAlmostGreaterOrEqual(main_spacing, 0))
            {
                // 여백이 양수가 된순간 curr와 wrap을 각각 계산
                // wrap 결과는 또다시 여백이 음수일수 있음
                var curr_info = this._calcFluidVerticalContentSize(curr_content);

                this._contents_width_remain = curr_info[2] - content_cross_gap;

                var wrap_info = this._calcFluidVerticalContentSize(wrap_content);

                // wrap 계산에서 음수가 안나올때까지 계산해야함
                if (wrap_info[1] < 0)
                {
                    // wrap_contents가 2개 이상일때만 추가로 wrap을 할수가 있음
                    if (wrap_content.length > 1)
                    {
                        sizeInfo = this._wrapFluidVerticalContent(wrap_info, wrap_content, true);
                        curr_info = this._growFluidVerticalContent(curr_info, curr_content);

                        sizeInfo.splice(0, 0, curr_info);
                    }
                    else
                    {
                        // wrap된게 한개면 계산 끝냄. 여백이 마이너스 여도 shrink 적용은 하지 않음
                        curr_info = this._growFluidVerticalContent(curr_info, curr_content);

                        sizeInfo = [curr_info];
                        sizeInfo.push(wrap_info);
                    }

                    break;
                }
                else
                {
                    // 줄나누기가 끝났으면 각 라인에 grow 적용
                    curr_info = this._growFluidVerticalContent(curr_info, curr_content);
                    wrap_info = this._growFluidVerticalContent(wrap_info, wrap_content);

                    if (isRecursive)
                    {
                        // 재귀로 사용시 바로 반환
                        return [curr_info, wrap_info];
                    }
                    else
                    {
                        // 두줄로 끝나는 wrap임
                        sizeInfo = [curr_info, wrap_info];
                        break;
                    }
                }
            }
            else
            {
                // 공백이 음수. 컨텐츠를 나눠야함
                if (curr_content.length > 1)
                {
                    content_height = this._getContentAdjustHeight(content);

                    wrap_content.splice(0, 0, curr_content.pop());  // 다음줄로 보내고
                    main_spacing += content_height;                  // 공백 줄여보고
                    main_spacing += content_main_gap;               // 컨텐츠 하나 빠졌으니 갭도 하나 뺌
                }
                else
                {
                    // 공백이 음수지만 현재 컨텐츠가 한개밖에 없음. 더빼면 안됨. 현시점 기준으로 계산을 끝냄
                    var curr_info = this._calcFluidVerticalContentSize(curr_content);

                    this._contents_width_remain = curr_info[2] - content_cross_gap;

                    var wrap_info = this._calcFluidVerticalContentSize(wrap_content);
                    if (wrap_info[1] < 0)
                    {
                        if (wrap_content.length > 1)
                        {
                            sizeInfo = this._wrapFluidVerticalContent(wrap_info, wrap_content, true);
                            curr_info = this._growFluidVerticalContent(curr_info, curr_content);
                            curr_info = this._shrinkFluidVerticalContent(curr_info, curr_content);

                            sizeInfo.splice(0, 0, curr_info);
                        }
                        else
                        {
                            curr_info = this._growFluidVerticalContent(curr_info, curr_content);
                            curr_info = this._shrinkFluidVerticalContent(curr_info, curr_content);
                            wrap_info = this._shrinkFluidVerticalContent(wrap_info, wrap_content);

                            sizeInfo = [curr_info];
                            sizeInfo.push(wrap_info);
                        }

                        break;
                    }
                    else
                    {
                        curr_info = this._growFluidVerticalContent(curr_info, curr_content);
                        curr_info = this._shrinkFluidVerticalContent(curr_info, curr_content);
                        wrap_info = this._growFluidVerticalContent(wrap_info, wrap_content);

                        if (isRecursive)
                        {
                            return [curr_info, wrap_info];
                        }
                        else
                        {
                            sizeInfo = [curr_info, wrap_info];
                            break;
                        }
                    }
                    //sizeInfo = [curr_info];
                }
            }
        }
        return sizeInfo;
    };

    __pFluidLayoutManager._adjustVerticalContent = function (layoutInfo)
    {
        // 인포가 없을상황이면 안됨..
        if (layoutInfo.length == 0)
            return;

        switch (this._flexwrap)
        {
            case 0: // NOWRAP
                this._adjustVerticalContentSingleLine(layoutInfo);
                break;
            case 1: // WRAP
                this._adjustVerticalContentMultiLine(layoutInfo);
                break;
        }
    };
    __pFluidLayoutManager._adjustVerticalContentSingleLine = function (layoutInfo)
    {
        var info = layoutInfo[0];

        var m_space = 0;

        var pad_l = this._container_padding.left;
        var pad_t = this._container_padding.top;
        var pad_r = this._container_padding.right;
        var pad_b = this._container_padding.bottom;

        var gap = this._gap;

        var main_align = this._align[0];
        var cross_align = this._align[1];

        var main_spacing = info[1];
        var cross_spacing = info[2];
        var content_len = info[3];
        var cross_max = info[4];

        var l = 0;
        var t = 0;

        // Main 보정
        switch (main_align)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                t += pad_t;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                m_space = main_spacing;
                t += pad_t + m_space;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                m_space = main_spacing / 2;
                t += pad_t + m_space;
                break;
            case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                m_space = (main_spacing > 0) ? main_spacing / (content_len - 1) : 0;
                t += pad_t;
                break;
            case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                m_space = (main_spacing > 0) ? main_spacing / (content_len * 2) : main_spacing / 2;
                t += pad_t + m_space;
                break;
            case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                m_space = (main_spacing > 0) ? main_spacing / (content_len + 1) : main_spacing / 2;
                t += pad_t + m_space;
                break;
        }

        // Cross 여백 보정
        switch (cross_align)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                l += pad_l;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                l += pad_l + cross_spacing;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                l += pad_l + (cross_spacing / 2);
                break;
        }

        // Adjust 계산
        this._fluidcontents.forEach(function (content)
        {
            var pos = content._adjust_pos;

            pos[1] = t;

            t += gap[1];
            t += pos[3];
            if (t < 0) t = 0;

            // 다음 content 간격
            switch (main_align)
            {
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    t += (main_spacing > 0) ? m_space : 0;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    t += (main_spacing > 0) ? (m_space * 2) : 0;
                    break;
            }

            // content 개별 top 높이 조절
            switch (cross_align)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                    pos[0] = l;
                    break;
                case 1: //LAYOUT_CONTENT_ALIGN_END
                    pos[0] = l + (cross_max - pos[2]);
                    break;
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                    pos[0] = l + ((cross_max - pos[2]) / 2);
                    break;
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    break;
            }

            // 최대 rect 저장
            var curr_right = 0;
            if (pos[2] > 0)
                curr_right = pos[0] + pos[2] + pad_r;
            var curr_bottom = 0;
            if (pos[3] > 0)
                curr_bottom = pos[1] + pos[3] + pad_b;

            if (curr_right > this._getContentMaxRight()) this._setContentMaxRight(curr_right);
            if (curr_bottom > this._getContentMaxBottom()) this._setContentMaxBottom(curr_bottom);
        }, this);
    };
    __pFluidLayoutManager._adjustVerticalContentMultiLine = function (layoutInfo)
    {
        var info;
        var info_len = layoutInfo.length;

        var pos;
        var content;
        var m_space = 0;
        var c_space = 0;

        var pad_l = this._container_padding.left;
        var pad_t = this._container_padding.top;
        var pad_r = this._container_padding.right;
        var pad_b = this._container_padding.bottom;

        var gap = this._gap;

        var main_align = this._align[0];
        var cross_align = this._align[1];
        var cross_wrapalign = this._align[2];

        var main_spacing = 0;
        var cross_spacing = layoutInfo[info_len - 1][2];

        var l = 0;
        var t = 0;

        // Container cross 여백 보정
        switch (cross_wrapalign)
        {
            case 0: //LAYOUT_CONTENT_ALIGN_START
                l += pad_l;
                break;
            case 1: //LAYOUT_CONTENT_ALIGN_END
                l += pad_l + cross_spacing;
                break;
            case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                l += pad_l + (cross_spacing / 2);
                break;
            case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len - 1) : 0;
                l += pad_l;
                break;
            case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len * 2) : cross_spacing / 2;
                l += pad_l + c_space;
                break;
            case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                c_space = (cross_spacing > 0) ? cross_spacing / (info_len + 1) : cross_spacing / 2;
                l += pad_l + c_space;
                break;
        }

        var i = 0;
        var j = 0;
        for (; i < info_len; i++)
        {
            info = layoutInfo[i];

            main_spacing = info[1];
            var content_len = info[3];
            var cross_max = info[4];

            // 시작위치 결정
            t = 0;

            // Main 보정
            switch (main_align)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                    t += pad_t;
                    break;
                case 1: //LAYOUT_CONTENT_ALIGN_END
                    m_space = main_spacing;
                    t += pad_t + m_space;
                    break;
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                    m_space = main_spacing / 2;
                    t += pad_t + m_space;
                    break;
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    m_space = (main_spacing > 0) ? main_spacing / (content_len - 1) : 0;
                    t += pad_t;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    m_space = (main_spacing > 0) ? main_spacing / (content_len * 2) : main_spacing / 2;
                    t += pad_t + m_space;
                    break;
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    m_space = (main_spacing > 0) ? main_spacing / (content_len + 1) : main_spacing / 2;
                    t += pad_t + m_space;
                    break;
            }

            // adjust 계산
            while (content_len)
            {
                content = this._fluidcontents[j];
                pos = content._adjust_pos;

                pos[1] = t;

                t += gap[1];
                t += pos[3];
                if (t < 0) t = 0;

                switch (main_align)
                {
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        t += (main_spacing > 0) ? m_space : 0;
                        break;
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        t += (main_spacing > 0) ? (m_space * 2) : 0;
                        break;
                }

                switch (cross_align)
                {
                    case 0: //LAYOUT_CONTENT_ALIGN_START
                        pos[0] = l;
                        break;
                    case 1: //LAYOUT_CONTENT_ALIGN_END
                        pos[0] = l + (cross_max - pos[2]);
                        break;
                    case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        pos[0] = l + ((cross_max - pos[2]) / 2);
                        break;
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        break;
                }
                // 최대 rect 저장

                var curr_right = pos[0] + pos[2] + pad_r;
                var curr_bottom = pos[1] + pos[3] + pad_b;

                if (curr_right > this._getContentMaxRight()) this._setContentMaxRight(curr_right);
                if (curr_bottom > this._getContentMaxBottom()) this._setContentMaxBottom(curr_bottom);

                j++
                content_len--;
            }

            // next left pos
            if (info[3])
            {
                l += cross_max;
                l += gap[0];
            }

            switch (cross_wrapalign)
            {
                case 0: //LAYOUT_CONTENT_ALIGN_START
                case 1: //LAYOUT_CONTENT_ALIGN_END
                case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                    l += (cross_spacing > 0) ? c_space : 0;
                    break;
                case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                    l += (cross_spacing > 0) ? (c_space * 2) : 0;
                    break;
            }
        }
    };

    // Table Template Calc
    __pFluidLayoutManager._getTableInfo = function ()
    {
        var info = this._getTableTemplateInfo();

        if (this._fittocontents != 0)
        {
            this._calcTableTemplateRect(info);
            this._calcTableContentsSize(info);
        }

        // 컨터이너의 템플릿만의 순수한 좌표 계산
        this._calcTableTemplateRect(info);

        return info;
    };
    __pFluidLayoutManager._calcTableTemplateRect = function (templateInfo)
    {
        var contents_w = this._contents_width;
        var contents_h = this._contents_height;

        var l = 0;
        var t = 0;

        var pad_l = this._container_padding.left;
        var pad_t = this._container_padding.top;

        var row_gap = this._gap[1];
        var col_gap = this._gap[0];
        var row_len = 0;
        var col_len = 0;
        var row_auto_len = 0;
        var col_auto_len = 0;
        var row_flex_sum = 0;
        var col_flex_sum = 0;
        var row_fixed_sum = 0;
        var col_fixed_sum = 0;
        var row_auto_sum = 0;
        var col_auto_sum = 0;

        var cell_align_h = this._align[0];
        var cell_align_v = this._align[1];

        // 템플릿에서 flex영역과 fix, auto영역 구분
        templateInfo.forEach(function (row_info, row_idx)
        {
            // row계산은 0번째 컬럼을 강제로 끌어와서 함
            // row의 합계이기때문에 루프를 다돌아야함
            if (row_info[0]._is_flexible_row)
                row_flex_sum += row_info[0]._row_flexible_length;
            else if (row_info[0]._is_auto_row)
            {
                row_auto_len++;
                row_auto_sum += this._max_row_sizes[row_idx] ? this._max_row_sizes[row_idx] : 0;
            }

            else
                row_fixed_sum += this._parseContentSize(row_info[0]._inner_row, contents_h);

            // Column계산은 처음만 하면 됨. 템플릿을 row마다 다른 column을 설정할수가 없음
            if (row_idx == 0)
            {
                row_info.forEach(function (col_info, col_idx)
                {
                    if (col_info._is_flexible_col)
                        col_flex_sum += col_info._col_flexible_length;
                    else if (col_info._is_auto_col)
                    {
                        col_auto_len++;
                        col_auto_sum += this._max_col_sizes[col_idx] ? this._max_col_sizes[col_idx] : 0;
                    }
                    else
                        col_fixed_sum += this._parseContentSize(col_info._inner_col, contents_w);

                    col_len++;
                }, this);
            }

            row_len++;
        }, this);

        var gap_sum_h = (col_len - 1) * col_gap;
        var gap_sum_v = (row_len - 1) * row_gap;

        var spacing_w = contents_w - col_fixed_sum - col_auto_sum - gap_sum_h;
        var spacing_h = contents_h - row_fixed_sum - row_auto_sum - gap_sum_v;

        spacing_w = spacing_w < 0 ? 0 : spacing_w;
        spacing_h = spacing_h < 0 ? 0 : spacing_h;

        // autocell 영역을 고적픽셀화
        templateInfo.forEach(function (row_info, row_idx)
        {
            if (row_info[0]._is_auto_row)
            {
                var change_val = (this._max_row_sizes[row_idx] ? this._max_row_sizes[row_idx] : 0) + "";
                this._changeTableTemplate(templateInfo, "row", row_idx, change_val);
            }

            if (row_idx == 0)
            {
                row_info.forEach(function (col_info, col_idx)
                {
                    if (col_info._is_auto_col)
                    {
                        var _val = (this._max_col_sizes[col_idx] ? this._max_col_sizes[col_idx] : 0) + "";
                        this._changeTableTemplate(templateInfo, "col", col_idx, _val);
                    }

                }, this);
            }
        }, this);

        this._container_horizontal_spacing = (col_flex_sum > 0 || col_auto_sum > 0) ? 0 : spacing_w;
        this._container_vertical_spacing = (row_flex_sum > 0 || row_auto_sum > 0) ? 0 : spacing_h;

        // 순수하게 컨테이너 영역을 분할
        // 템플릿상의 계산은 중간계산으로 앞에게 변할일이 없다
        templateInfo.forEach(function (row_info, idx)
        {
            var is_last_row = (row_len - 1 == idx);
            // padding 보정
            l = pad_l;
            t = idx == 0 ? pad_t : t;

            // row 앞 보정
            if (row_flex_sum === 0 || (row_flex_sum === 0 && row_auto_sum === 0))
            {
                switch (cell_align_v)
                {
                    case 0: //LAYOUT_CONTENT_ALIGN_START
                        break;
                    case 1: //LAYOUT_CONTENT_ALIGN_END
                        if (idx === 0)
                            t += spacing_h;
                        break;
                    case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        if (idx === 0)
                            t += spacing_h / 2;
                        break;
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                        if (idx !== 0)
                        {
                            if (row_len > 1)
                            {
                                t += spacing_h / (row_len - 1);
                            }
                        }
                        break;
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        t += spacing_h / (row_len * 2);
                        break;
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        t += spacing_h / (row_len + 1);
                        break;
                }
            }

            row_info.forEach(function (col_info, target_idx)
            {
                var col_w = 0;
                var col_h = 0;
                var is_last_col = (col_len - 1 == target_idx);
                // column 앞 보정
                if (col_flex_sum === 0 || (col_flex_sum === 0 && col_auto_sum === 0))
                {
                    switch (cell_align_h)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                            break;
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                            // flexible 여부 check? flexible일때 space가 0이긴 할거임...
                            if (target_idx === 0)
                                l += spacing_w;
                            break;
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                            if (target_idx === 0)
                                l += spacing_w / 2;
                            break;
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                            if (target_idx !== 0)
                            {
                                if (col_len > 1)
                                {
                                    l += spacing_w / (col_len - 1);
                                }
                            }
                            break;
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                            l += spacing_w / (col_len * 2);
                            break;
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            l += spacing_w / (col_len + 1);
                            break;
                    }
                }

                // column 사이즈 계산
                if (col_info._is_flexible_col)
                    col_w = (col_info._col_flexible_length / col_flex_sum) * spacing_w;
                else if (col_info._is_auto_col)
                    col_w = this._parseContentSize(col_info._inner_col, contents_w);
                else
                    col_w = this._parseContentSize(col_info._inner_col, contents_w);

                if (col_info._is_flexible_row)
                    col_h = (col_info._row_flexible_length / row_flex_sum) * spacing_h;
                else if (col_info._is_auto_row)
                    col_h = this._parseContentSize(col_info._inner_row, contents_h);
                else
                    col_h = this._parseContentSize(col_info._inner_row, contents_h);

                // set column templatesize
                this._setTemplatAdjustSize(col_info, l, t, col_w, col_h);

                // column 뒷 보정
                if (col_flex_sum === 0 || (col_flex_sum === 0 && col_auto_sum === 0))
                {
                    switch (cell_align_h)
                    {
                        case 0: //LAYOUT_CONTENT_ALIGN_START
                        case 1: //LAYOUT_CONTENT_ALIGN_END
                        case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                        case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                        case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                            break;
                        case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                            l += spacing_w / (col_len * 2);
                            break;
                    }
                }
                l += col_gap;
                l += this._getTemplateAdjustWidth(col_info);


            }, this);

            // row 뒷 보정
            if (row_flex_sum === 0 || (row_flex_sum === 0 && row_auto_sum === 0))
            {
                switch (cell_align_v)
                {
                    case 0: //LAYOUT_CONTENT_ALIGN_START
                    case 1: //LAYOUT_CONTENT_ALIGN_END
                    case 2: //LAYOUT_CONTENT_ALIGN_CENTER
                    case 3: //LAYOUT_CONTENT_ALIGN_SPACEBETWEEN
                    case 5: //LAYOUT_CONTENT_ALIGN_SPACEEVENLY
                        break;
                    case 4: //LAYOUT_CONTENT_ALIGN_SPACEAROUND
                        t += spacing_h / (row_len * 2);
                        break;
                }
            }

            t += row_gap;
            t += this._getTemplateAdjustHeight(row_info[0]);
        }, this);

        // set info
        this._setTemplateRectInfo(templateInfo);
    };

   __pFluidLayoutManager._resolveArrangeInfo = function (content, defaultCompWidth, defaultCompHeight)
   {
       var content_w = content.size[0];
       var content_h = content.size[1];
       var comp_width = defaultCompWidth;
       var comp_height = defaultCompHeight;

       var info = content._target._arrange_info;
       if (!info)
       {
           return [content_w, content_h, comp_width, comp_height];
       }

       var resolved_w = this._resolveArrangeAxis(content._target, info.width, content_w, comp_width);
       var resolved_h = this._resolveArrangeAxis(content._target, info.height, content_h, comp_height);

       return [resolved_w[0], resolved_h[0], resolved_w[1], resolved_h[1]];
   };

   __pFluidLayoutManager._resolveArrangeAxis = function (target, axisInfo, defaultContent, defaultComp)
   {
       if (!axisInfo) return [defaultContent, defaultComp];

       var distance = axisInfo.distance;
       var comp = target._findComponentForArrange(axisInfo.compid);

       if (comp)
       {
           return [distance, axisInfo === target._arrange_info.width ? comp._width : comp._height];
       }

       if (distance.indexOf("em") > -1)
       {
           var referComp = (distance.indexOf("rem") > -1) ? target._getMainFrame() : target;
           var refer_font = referComp._getReferenceAbsoluteFont();
           return [distance, this._getFontRefSize(refer_font)];
       }

       return [defaultContent, defaultComp];
   };

   __pFluidLayoutManager._applyAlignment = function (basePos, spacing, alignType, useFloor)
   {
       var LAYOUT_ALIGN = {
           START: 0,
           END: 1,
           CENTER: 2
       };

       switch (alignType)
       {
           case LAYOUT_ALIGN.START:
               return basePos;
           case LAYOUT_ALIGN.END:
               return basePos + spacing;
           case LAYOUT_ALIGN.CENTER:
               return basePos + (useFloor ? Math.floor(spacing / 2) : spacing / 2);
           default:
               return basePos;
       }
   };

   __pFluidLayoutManager._computeContentSize = function (content, cell_w, cell_h)
   {
       var target = content._target;

       var use_cell_w = cell_w > 0
           && target
           && typeof target._p_width === "string"
           && target._p_width.indexOf("%") > -1;
       var use_cell_h = cell_h > 0
           && target
           && typeof target._p_height === "string"
           && target._p_height.indexOf("%") > -1;

       var content_w, content_h, effective_comp_w, effective_comp_h;

       if (use_cell_w || use_cell_h)
       {
           content_w = use_cell_w ? target._p_width : content.size[0];
           content_h = use_cell_h ? target._p_height : content.size[1];
           effective_comp_w = cell_w;
           effective_comp_h = cell_h;

           if (!use_cell_w || !use_cell_h)
           {
               var resolved = this._resolveArrangeInfo(content, cell_w, cell_h);
               if (!use_cell_w) { content_w = resolved[0]; effective_comp_w = resolved[2]; }
               if (!use_cell_h) { content_h = resolved[1]; effective_comp_h = resolved[3]; }
           }
       }
       else
       {
           var resolved = this._resolveArrangeInfo(content, cell_w, cell_h);
           content_w = resolved[0];
           content_h = resolved[1];
           effective_comp_w = resolved[2];
           effective_comp_h = resolved[3];
       }

       // ★ content._size에는 원본 % 문자열 유지 (CSS 렌더링용)
       content._size = [
           use_cell_w ? target._p_width : content_w,
           use_cell_h ? target._p_height : content_h
       ];

       // ret(adjust 계산용)은 절대값으로 변환
       var ret_w = this._parseContentSize(content_w, effective_comp_w);
       var ret_h = this._parseContentSize(content_h, effective_comp_h);

       // ★ % 자식은 min_size 무시
       var min_w = use_cell_w ? null : content.min_size[0];
       var min_h = use_cell_h ? null : content.min_size[1];

       ret_w = this._getContentMinMaxSize(ret_w, min_w, content.max_size[0]);
       ret_h = this._getContentMinMaxSize(ret_h, min_h, content.max_size[1]);

       return [ret_w, ret_h];
   };


   __pFluidLayoutManager._updateMaxRect = function (left, top, content_w, content_h, pad_r, pad_b, content)
   {
       var curr_right = left + content_w + pad_r;
       var curr_bottom = top + content_h + pad_b;

       //fittocontents 축의 % 자식은 max_right / max_bottom 갱신 제외
       var skip_w = content
           ? ((this._fittocontents == 1 || this._fittocontents == 3)
               && this._isTargetSizeParentDependent(content, "width"))
           : false;
       var skip_h = content
           ? ((this._fittocontents == 2 || this._fittocontents == 3)
               && this._isTargetSizeParentDependent(content, "height"))
           : false;

       if (!skip_w && curr_right > this._getContentMaxRight()) this._setContentMaxRight(curr_right);
       if (!skip_h && curr_bottom > this._getContentMaxBottom()) this._setContentMaxBottom(curr_bottom);
   };


   __pFluidLayoutManager._updateFitMaxRect = function (left, top, cell_w, cell_h, pad_r, pad_b)
   {
       var fit_right = left + cell_w + pad_r;
       var fit_bottom = top + cell_h + pad_b;

       if (fit_right > this._getFitContentMaxRight()) this._setFitContentMaxRight(fit_right);
       if (fit_bottom > this._getFitContentMaxBottom()) this._setFitContentMaxBottom(fit_bottom);
   };

   __pFluidLayoutManager._sortContentsCoordinate = function (contents_coordinate)
   {
       var DIRECTION = {
           VERTICAL: 0,
           HORIZONTAL: 1
       };

       var isVertical = (this._direction === DIRECTION.VERTICAL);

       contents_coordinate.sort(function (a, b)
       {
           if (isVertical)
           {
               if (a.rowstart !== b.rowstart) return a.rowstart - b.rowstart;
               return a.colstart - b.colstart;
           }
           else
           {
               if (a.colstart !== b.colstart) return a.colstart - b.colstart;
               return a.rowstart - b.rowstart;
           }
       });
   };

   __pFluidLayoutManager._getPrevTemplateMax = function (axis)
   {
       var prev_tabletemplate = this._prev_tabletemplate;
       if (!prev_tabletemplate || nexacro._isDesignMode())
           prev_tabletemplate = this._default_tabletemplate;

       if (!prev_tabletemplate) return 0;

       var parsed = this._parseTableTemplate(prev_tabletemplate).parse;
       if (!parsed) return 0;

       return axis === "col" ? parsed[1].length : parsed[0].length;
   };

   __pFluidLayoutManager._updateContentCoordinate = function (content, row_start, row_end, col_start, col_end)
   {
       var ret_coordinate = row_start + " " + row_end + "/" + col_start + " " + col_end;
       var comp = content._target;
       if (comp)
       {
           content.coordinate = ret_coordinate;
           content.colstart = col_start;
           content.colend = col_end;
           content.rowstart = row_start;
           content.rowend = row_end;
           comp._setTablecellarea(ret_coordinate);
       }
   };

   __pFluidLayoutManager._reArrangeAutofitVertical = function (content, cur_max_col, prev_col_max, accAdjust)
   {
       if (prev_col_max <= cur_max_col) return accAdjust;

       var row_cnt = parseInt(prev_col_max / cur_max_col);
       if (prev_col_max % cur_max_col) row_cnt++;

       var cur_adjust_row = 0;
       var contents_length = content.colend - content.colstart;
       var col_start = content.colstart % cur_max_col;
       var col_end = col_start + contents_length;

       if (contents_length >= cur_max_col)
       {
           col_end = cur_max_col;
           accAdjust.acc_adjust_row -= (row_cnt - 1);
           if (col_end === cur_max_col && cur_max_col === 1)
               accAdjust.acc_adjust_row++;
       }
       else if (col_end >= cur_max_col)
       {
           col_start = 0;
           col_end = contents_length;
           accAdjust.acc_adjust_row += parseInt(content.colstart / cur_max_col) | 1;
       }

       if (content.colstart >= cur_max_col)
           cur_adjust_row = parseInt(content.colstart / cur_max_col);

       var row_start = Math.max((content.rowstart * row_cnt) + accAdjust.acc_adjust_row, 0) + cur_adjust_row;
       var row_end = Math.max((content.rowend * row_cnt) + accAdjust.acc_adjust_row, 0) + cur_adjust_row;

       this._updateContentCoordinate(content, row_start, row_end, col_start, col_end);
       return accAdjust;
   };

   __pFluidLayoutManager._reArrangeAutofillVertical = function (content, cur_max_col, prev_col_max, accAdjust)
   {
       var row_start = content.org_rowstart !== undefined ? content.org_rowstart : content.rowstart;
       var col_start = content.org_colstart !== undefined ? content.org_colstart : content.colstart;
       var row_end = content.org_rowend !== undefined ? content.org_rowend : content.rowend;
       var col_end = content.org_colend !== undefined ? content.org_colend : content.colend;

       var content_length = col_end - col_start + 1;
       var content_height = row_end - row_start;
       var total_start_cnt = ((row_start * prev_col_max) + col_start) + accAdjust.acc_adjust_col;
       var total_end_cnt = ((row_end * prev_col_max) + col_end) + accAdjust.acc_adjust_col;

       col_start = total_start_cnt % cur_max_col;
       row_start = Math.floor(total_start_cnt / cur_max_col) + accAdjust.acc_adjust_row;
       col_end = col_start + content_length - 1;
       row_end = Math.floor(total_end_cnt / cur_max_col) + accAdjust.acc_adjust_row;

       if (col_start + content_length >= cur_max_col)
       {
           accAdjust.acc_adjust_col -= (col_end - cur_max_col + 1);
           col_end = cur_max_col - 1;
           row_end = row_start + content_height;
       }

       this._updateContentCoordinate(content, row_start, row_end, col_start, col_end);
       return accAdjust;
   };

   __pFluidLayoutManager._reArrangeAutofitHorizontal = function (content, cur_max_row, prev_row_max, accAdjust)
   {
       if (prev_row_max <= cur_max_row) return accAdjust;

       var col_cnt = parseInt(prev_row_max / cur_max_row);
       if (prev_row_max % cur_max_row) col_cnt++;

       var cur_adjust_row = 0;
       var contents_height = content.rowend - content.rowstart;
       var row_start = content.rowstart % cur_max_row;
       var row_end = row_start + contents_height;

       if (contents_height >= cur_max_row)
       {
           row_end = cur_max_row;
           accAdjust.acc_adjust_row -= (col_cnt - 1);
           if (row_end === cur_max_row && cur_max_row === 1)
               accAdjust.acc_adjust_row++;
       }
       else if (row_end >= cur_max_row)
       {
           row_start = 0;
           row_end = contents_height;
           accAdjust.acc_adjust_row += parseInt(content.rowstart / cur_max_row) | 1;
       }

       if (content.rowstart >= cur_max_row)
           cur_adjust_row = parseInt(content.rowstart / cur_max_row);

       var col_start = Math.max((content.colstart * col_cnt) + accAdjust.acc_adjust_row, 0) + cur_adjust_row;
       var col_end = Math.max((content.colend * col_cnt) + accAdjust.acc_adjust_row, 0) + cur_adjust_row;

       this._updateContentCoordinate(content, row_start, row_end, col_start, col_end);
       return accAdjust;
   };

   __pFluidLayoutManager._reArrangeAutofillHorizontal = function (content, cur_max_row, prev_row_max, accAdjust)
   {
       var row_start = content.org_rowstart !== undefined ? content.org_rowstart : content.rowstart;
       var col_start = content.org_colstart !== undefined ? content.org_colstart : content.colstart;
       var row_end = content.org_rowend !== undefined ? content.org_rowend : content.rowend;
       var col_end = content.org_colend !== undefined ? content.org_colend : content.colend;

       var content_length = col_end - col_start;
       var content_height = row_end - row_start;
       var total_start_cnt = ((col_start * prev_row_max) + row_start);
       var total_end_cnt = ((col_end * prev_row_max) + row_end);

       row_start = total_start_cnt % cur_max_row;
       col_start = parseInt(total_start_cnt / cur_max_row) + accAdjust.acc_adjust_row;
       row_end = row_start + content_height;
       col_end = parseInt(total_end_cnt / cur_max_row) + accAdjust.acc_adjust_row;

       if (content_height >= cur_max_row)
       {
           row_end = cur_max_row - 1;
           col_end = col_start + content_length;
       }
       else if (row_start + content_height >= cur_max_row)
       {
           row_start = 0;
           row_end = cur_max_row - 1;
           col_start++;
           col_end = col_start + content_length;
       }

       this._updateContentCoordinate(content, row_start, row_end, col_start, col_end);
       return accAdjust;
   };

   __pFluidLayoutManager._rearrangeTableCells = function (contents_coordinate, templateInfo, context)
   {
       var DIRECTION = {
           VERTICAL: 0,
           HORIZONTAL: 1
       };

       var tablecellmovingtype = this._tablecellmovingtype || this._default_tablecellmovingtype;
       if (tablecellmovingtype === "none") return;

       var prev_template_max_col = this._getPrevTemplateMax("col");

       if (!contents_coordinate.length) return;

       this._sortContentsCoordinate(contents_coordinate);

       if (!context || !context._is_changed_tabletemplate || !prev_template_max_col) return;

       var cur_max_col = templateInfo.length > 0 ? templateInfo[0].length : 0;
       var cur_max_row = templateInfo.length;
       var accAdjust = { acc_adjust_row: 0, acc_adjust_col: 0 };

       var isVertical = (this._direction === DIRECTION.VERTICAL);

       contents_coordinate.forEach(function (content)
       {
           if (isVertical)
           {
               if (tablecellmovingtype === "autofit")
                   this._reArrangeAutofitVertical(content, cur_max_col, prev_template_max_col, accAdjust);
               else if (tablecellmovingtype === "autofill")
                   this._reArrangeAutofillVertical(content, cur_max_col, prev_template_max_col, accAdjust);
           }
           else
           {
               var prev_template_max_row = this._getPrevTemplateMax("row");
               if (tablecellmovingtype === "autofit")
                   this._reArrangeAutofitHorizontal(content, cur_max_row, prev_template_max_row, accAdjust);
               else if (tablecellmovingtype === "autofill")
                   this._reArrangeAutofillHorizontal(content, cur_max_row, prev_template_max_row, accAdjust);
           }
       }, this);
   };

   __pFluidLayoutManager._processContentsArea = function (contents_area, templateInfo, templateinfo_tmp, ret, pad_r, pad_b, cont_align_h, cont_align_v)
   {
       contents_area.forEach(function (content)
       {
           var prop_area = content.coordinate;
           var area = this._tabletemplatearea_coordinate[prop_area];
           if (!area) return;

           var cellRect = this._calculateAreaCellRect(area, templateInfo, templateinfo_tmp);
           if (!cellRect) return;

           var cell_l = cellRect.left;
           var cell_t = cellRect.top;
           var cell_w = cellRect.width;
           var cell_h = cellRect.height;

           var sizes = this._computeContentSize(content, cell_w, cell_h);
           var content_w = sizes[0];
           var content_h = sizes[1];

           cell_l = this._applyAlignment(cell_l, cell_w - content_w, cont_align_h, false);
           cell_t = this._applyAlignment(cell_t, cell_h - content_h, cont_align_v, false);

           this._setContentAdjustSize(content, cell_l, cell_t, content_w, content_h);

           this._updateMaxRect(cell_l, cell_t, content_w, content_h, pad_r, pad_b);
           this._updateFitMaxRect(cell_l, cell_t, content_w, content_h, pad_r, pad_b);

           ret.push(content);
       }, this);
   };

   __pFluidLayoutManager._calculateAreaCellRect = function (area, templateInfo, templateinfo_tmp)
   {
       var cell_l, cell_t;
       var cell_w = 0, cell_h = 0;

       area.forEach(function (area_coord)
       {
           var row = area_coord[0];
           var col = area_coord[1];
           var cell_info = templateInfo[row][col];

           if (cell_info)
           {
               var temp_l = this._getTemplateAdjustLeft(cell_info);
               var temp_t = this._getTemplateAdjustTop(cell_info);
               var temp_w = this._getTemplateAdjustWidth(cell_info);
               var temp_h = this._getTemplateAdjustHeight(cell_info);
               var temp_r = temp_l + temp_w;
               var temp_b = temp_t + temp_h;

               cell_l = (cell_l === undefined) ? temp_l : Math.min(cell_l, temp_l);
               cell_t = (cell_t === undefined) ? temp_t : Math.min(cell_t, temp_t);
               cell_w = Math.max(cell_w, temp_r);
               cell_h = Math.max(cell_h, temp_b);
           }
           this._removeTableTemplateInfo(templateinfo_tmp, row, row, col, col);
       }, this);

       if (cell_l === undefined) return null;

       return {
           left: cell_l,
           top: cell_t,
           width: cell_w - cell_l,
           height: cell_h - cell_t
       };
   };

   __pFluidLayoutManager._processContentsCoordinate = function (contents_coordinate, templateInfo, templateinfo_tmp, ret, pad_r, pad_b, cont_align_h, cont_align_v)
   {
       for (var i = 0; i < contents_coordinate.length; i++)
       {
           var content = contents_coordinate[i];
           var template_rect = this._getTemplateRect(content.rowstart, content.rowend, content.colstart, content.colend);

           var sizes = this._computeContentSize(content, template_rect[2], template_rect[3]);
           var content_w = sizes[0];
           var content_h = sizes[1];

           var spacing_w = template_rect[2] - content_w;
           if (nexacro._isAlmostLesser(spacing_w, 0) &&
               (nexacro._isNumber(content.size[0]) || content.size[0].indexOf("%") === -1))
           {
               if (this._changeTableTemplates(templateInfo, "col", content.colstart, content.colend, content_w))
               {
                   this._calcTableTemplateRect(templateInfo);
                   return this._calcTableContentAdjust(templateInfo);
               }
           }
           else
           {
               template_rect[0] = this._applyAlignment(template_rect[0], spacing_w, cont_align_h, false);
           }

           var spacing_h = template_rect[3] - content_h;
           if (nexacro._isAlmostLesser(spacing_h, 0) &&
               (nexacro._isNumber(content.size[1]) || content.size[1].indexOf("%") === -1))
           {
               if (this._changeTableTemplates(templateInfo, "row", content.rowstart, content.rowend, content_h))
               {
                   this._calcTableTemplateRect(templateInfo);
                   return this._calcTableContentAdjust(templateInfo);
               }
           }
           else
           {
               template_rect[1] = this._applyAlignment(template_rect[1], spacing_h, cont_align_v, true);
           }

           this._setContentAdjustSize(content, template_rect[0], template_rect[1], content_w, content_h);
           this._removeTableTemplateInfo(templateinfo_tmp, content.rowstart, content.rowend, content.colstart, content.colend);

           this._updateMaxRect(template_rect[0], template_rect[1], content_w, content_h, pad_r, pad_b);
           this._updateFitMaxRect(template_rect[0], template_rect[1], content_w, content_h, pad_r, pad_b);

           ret.push(content);
       }

       return null;
   };

   __pFluidLayoutManager._processContentsUnidentification = function (contents_unidentification, templateinfo_tmp, ret, pad_r, pad_b, cont_align_h, cont_align_v)
   {
       contents_unidentification.forEach(function (content)
       {
           var template_rect = this._getTemplateRect(content.rowstart, content.rowend, content.colstart, content.colend);

           var sizes = this._computeContentSize(content, template_rect[2], template_rect[3]);
           var content_w = sizes[0];
           var content_h = sizes[1];

           template_rect[0] = this._applyAlignment(template_rect[0], template_rect[2] - content_w, cont_align_h, false);
           template_rect[1] = this._applyAlignment(template_rect[1], template_rect[3] - content_h, cont_align_v, false);

           this._setContentAdjustSize(content, template_rect[0], template_rect[1], content_w, content_h);
           this._removeTableTemplateInfo(templateinfo_tmp, content.rowstart, content.rowend, content.colstart, content.colend);

           this._updateMaxRect(template_rect[0], template_rect[1], content_w, content_h, pad_r, pad_b);

           ret.push(content);
       }, this);
   };

   __pFluidLayoutManager._processContentsOrder = function (contents_order, templateInfo, templateinfo_tmp, ret, pad_r, pad_b, cont_align_h, cont_align_v)
   {
       var recursiveResult = null;

       contents_order.forEach(function (contents)
       {
           if (recursiveResult) return;

           for (var i = 0; i < contents.length; i++)
           {
               var content = contents[i];
               var cell_info = this._findUsableCell(templateinfo_tmp);

               if (cell_info)
               {
                   var result = this._processSingleOrderContent(content, cell_info, templateInfo, ret, pad_r, pad_b, cont_align_h, cont_align_v);
                   if (result)
                   {
                       recursiveResult = result;
                       return;
                   }
               }
               else
               {
                   this._processOverflowOrderContent(content, templateInfo, templateinfo_tmp, ret);
               }
           }
       }, this);

       return recursiveResult;
   };

   __pFluidLayoutManager._processSingleOrderContent = function (content, cell_info, templateInfo, ret, pad_r, pad_b, cont_align_h, cont_align_v)
   {
       var template_rect = this._getTemplateRect(cell_info._idx_row, cell_info._idx_row, cell_info._idx_col, cell_info._idx_col);

       var sizes = this._computeContentSize(content, template_rect[2], template_rect[3]);
       var content_w = sizes[0];
       var content_h = sizes[1];

       var spacing_w = template_rect[2] - content_w;
       if (nexacro._isAlmostLesser(spacing_w, 0))
       {
           if (cell_info._is_flexible_col)
           {
               this._changeTableTemplate(templateInfo, "col", cell_info._idx_col, content_w + "px");
               this._calcTableTemplateRect(templateInfo);
               return this._calcTableContentAdjust(templateInfo);
           }
       }
       else
       {
           template_rect[0] = this._applyAlignment(template_rect[0], spacing_w, cont_align_h, false);
       }

       var spacing_h = template_rect[3] - content_h;
       if (nexacro._isAlmostLesser(spacing_h, 0))
       {
           if (cell_info._is_flexible_row)
           {
               this._changeTableTemplate(templateInfo, "row", cell_info._idx_row, content_h + "px");
               this._calcTableTemplateRect(templateInfo);
               return this._calcTableContentAdjust(templateInfo);
           }
       }
       else
       {
           template_rect[1] = this._applyAlignment(template_rect[1], spacing_h, cont_align_v, false);
       }

       this._setContentAdjustSize(content, template_rect[0], template_rect[1], content_w, content_h);
       this._updateMaxRect(template_rect[0], template_rect[1], content_w, content_h, pad_r, pad_b);
       this._updateFitMaxRect(template_rect[0], template_rect[1], template_rect[2], template_rect[3], pad_r, pad_b);

       if (nexacro._isDesignMode())
           content._target._setTablecellareacoordinate(cell_info._idx_row + "/" + cell_info._idx_col);

       ret.push(content);
       return null;
   };

   __pFluidLayoutManager._processOverflowOrderContent = function (content, templateInfo, templateinfo_tmp, ret)
   {
       var left = 0, top = 0;
       var col_len = templateinfo_tmp ? templateinfo_tmp[0].length : 0;
       var row_len = templateinfo_tmp ? templateinfo_tmp.length : 0;

       var content_w = +content.size[0];
       var content_h = +content.size[1];
       if (isNaN(content_w)) content_w = 0;
       if (isNaN(content_h)) content_h = 0;

       if (templateInfo)
       {
           var _size = templateInfo[0][0]._template_pos;
           if (this._direction)
               left = _size[2] * col_len;
           else
               top = _size[3] * row_len;
       }

       this._setContentAdjustSize(content, left, top, content_w, content_h);
       content._size = [content_w, content_h];
       ret.push(content);
   };

   __pFluidLayoutManager._calcTableContentAdjust = function (templateInfo, context)
   {
       var ret = [];
       var templateinfo_tmp = JSON.parse(JSON.stringify(templateInfo));

       var pad_r = this._container_padding.right;
       var pad_b = this._container_padding.bottom;
       var cont_align_h = this._align[2];
       var cont_align_v = this._align[3];

       var contents_area = this._tablecontents_area;
       var contents_coordinate = this._tablecontents_coordinate;
       var contents_order = this._tablecontents_order;
       var contents_unidentification = this._tablecontents_unidentification;

       if (contents_area.length)
       {
           this._processContentsArea(contents_area, templateInfo, templateinfo_tmp, ret,
               pad_r, pad_b, cont_align_h, cont_align_v);
       }

       this._rearrangeTableCells(contents_coordinate, templateInfo, context);

       if (contents_coordinate.length)
       {
           var recursiveResult = this._processContentsCoordinate(
               contents_coordinate, templateInfo, templateinfo_tmp, ret,
               pad_r, pad_b, cont_align_h, cont_align_v);
           if (recursiveResult) return recursiveResult;
       }

       if (contents_unidentification.length)
       {
           this._processContentsUnidentification(
               contents_unidentification, templateinfo_tmp, ret,
               pad_r, pad_b, cont_align_h, cont_align_v);
       }

       if (contents_order.length)
       {
           var orderResult = this._processContentsOrder(
               contents_order, templateInfo, templateinfo_tmp, ret,
               pad_r, pad_b, cont_align_h, cont_align_v);
           if (orderResult) return orderResult;
       }

       return ret;
   };

    // TableInfo Handling
    __pFluidLayoutManager._makeTableTemplateInfo = function (nRow, nColumn, unitRow, unitColumn, strAreaName)
    {
        var ret = {
            _org_row: unitRow,  // original
            _org_col: unitColumn,  // original
            _inner_row: unitRow,       // logical value
            _inner_col: unitColumn,       // logical value

            _row_flexible_length: 0,
            _col_flexible_length: 0,
            _row_auto_length: 0,
            _col_auto_length: 0,

            _idx_row: nRow,
            _idx_col: nColumn,
            _area_name: strAreaName,

            _is_flexible_row: false,   // 오리지널 템플릿기준
            _is_flexible_col: false,   // 오리지널 템플릿기준
            _is_auto_row: false,   // 셀크기를 자의적으로 판단
            _is_auto_col: false,   // 셀크기를 자의적으로 판단

            _template_pos: [0, 0, 0, 0],
        };

        if (unitRow.indexOf("*") > -1)
        {
            ret._is_flexible_row = true;
            ret._row_flexible_length = +unitRow.substring(0, unitRow.indexOf("*"));
        }
        else if (unitRow.indexOf("&") > -1)
        {
            ret._is_auto_row = true;
            ret._row_auto_length = +unitRow.substring(0, unitRow.indexOf("&"));
        }

        if (unitColumn.indexOf("*") > -1)
        {
            ret._is_flexible_col = true;
            ret._col_flexible_length = +unitColumn.substring(0, unitColumn.indexOf("*"));
        }
        else if (unitColumn.indexOf("&") > -1)
        {
            ret._is_auto_col = true;
            ret._col_auto_length = +unitColumn.substring(0, unitColumn.indexOf("&"));
        }

        return ret;
    };
    __pFluidLayoutManager._changeTableTemplate = function (templateInfo, changeType, changeIdx, changeVal)
    {
        // row, col에 따라서 템플릿 인포를 일괄 변경
        switch (changeType)
        {
            case "row":
                var target = templateInfo[changeIdx];
                for (var i in target)
                {
                    target[i]._inner_row = changeVal;
                    target[i]._is_flexible_row = (changeVal.indexOf("*") > -1) ? true : false;
                    target[i]._row_flexible_length = (changeVal.indexOf("*") > -1) ? 1 : 0;

                }
                break;
            case "col":
                for (var i in templateInfo)
                {
                    templateInfo[i][changeIdx]._inner_col = changeVal;
                    templateInfo[i][changeIdx]._is_flexible_col = (changeVal.indexOf("*") > -1) ? true : false;
                    templateInfo[i][changeIdx]._col_flexible_length = (changeVal.indexOf("*") > -1) ? 1 : 0;
                }
                break;
        }
        return templateInfo;
    };

    __pFluidLayoutManager._changeTableTemplates = function (templateInfo, changeType, startIdx, endIdx, changeVal)
    {
        var i, cell_info, targets = [];
        if (changeType == "row")
        {
            var row_flex_sum = 0;
            var row_gap = this._gap[1];

            for (i = startIdx; i <= endIdx; i++)
            {
                cell_info = templateInfo[i][0];
                if (cell_info._is_flexible_row)
                {
                    row_flex_sum += cell_info._row_flexible_length;
                    targets.push(cell_info);
                }
                else
                {
                    changeVal -= cell_info._template_pos[3];
                }
            }
            changeVal -= (endIdx - startIdx) * row_gap;

            for (i = 0; i < targets.length; i++)
            {
                var c_h = (targets[i]._row_flexible_length / row_flex_sum) * changeVal;
                this._changeTableTemplate(templateInfo, "row", targets[i]._idx_row, c_h + "px");
            }
        }
        else if (changeType == "col")
        {
            var col_flex_sum = 0;
            var col_gap = this._gap[0];

            for (i = startIdx; i <= endIdx; i++)
            {
                cell_info = templateInfo[0][i];
                if (cell_info._is_flexible_col)
                {
                    col_flex_sum += cell_info._col_flexible_length;
                    targets.push(cell_info);
                }
                else
                {
                    changeVal -= cell_info._template_pos[2];
                }
            }
            changeVal -= (endIdx - startIdx) * col_gap;

            for (i = 0; i < targets.length; i++)
            {
                var c_w = (targets[i]._col_flexible_length / col_flex_sum) * changeVal;
                this._changeTableTemplate(templateInfo, "col", targets[i]._idx_col, c_w + "px");
            }
        }

        if (targets.length == 0)
            return false;
        else
            return true;
    };

    // TableMatrix Handling
    __pFluidLayoutManager._addTableTemplateMatrix = function (addCount, val, direction)
    {
        var target;
        direction = (direction === undefined) ? this._direction : direction;

        switch (direction)
        {
            case 0:
                target = this._tabletemplate_parse[0];
                break;
            case 1:
                target = this._tabletemplate_parse[1];
                break;
        }

        while (addCount)
        {
            addCount--;
            target.push(val);
        }
    };

    // Table Util
    __pFluidLayoutManager._getTableTemplateInfo = function ()
    {
        var ret = [];
        var area_matrix = this._tabletemplatearea_matrix;

        var rows = this._tabletemplate_parse[0];
        var cols = this._tabletemplate_parse[1];

        rows.forEach(function (row, row_idx)
        {
            if (!ret[row_idx]) ret[row_idx] = [];
            cols.forEach(function (col, col_idx)
            {
                if (area_matrix.length)
                {
                    var name = area_matrix[row_idx] ? area_matrix[row_idx][col_idx] : undefined;
                    var info = this._makeTableTemplateInfo(row_idx, col_idx, row, col, name);
                }
                else
                {
                    var info = this._makeTableTemplateInfo(row_idx, col_idx, row, col);
                }
                ret[row_idx].push(info);
            }, this);
        }, this);


        return ret;
    };
    __pFluidLayoutManager._removeTableTemplateInfo = function (info, row_start, row_end, col_start, col_end)
    {
        var row_diff = row_end - row_start;
        var col_diff = col_end - col_start;
        if (row_diff > 0)
        {
            if (col_diff > 0)
            {
                var del_row_idx = row_start;
                while (del_row_idx <= row_end)
                {
                    var del_col_idx = col_start;
                    while (del_col_idx <= col_end)
                    {
                        info[del_row_idx][del_col_idx] = null;
                        del_col_idx++;
                        //col_diff--;
                    }
                    del_row_idx++;
                    //row_diff--;
                }
            }
            else
            {
                var del_row_idx = row_start;
                while (row_diff >= 0)
                {
                    info[del_row_idx][col_start] = null;
                    del_row_idx++;
                    row_diff--;
                }
            }
        }
        else
        {
            if (col_diff > 0)
            {
                var del_col_idx = col_start;
                while (col_diff >= 0)
                {
                    if (info[row_start])
                        info[row_start][del_col_idx] = null;
                    del_col_idx++;
                    col_diff--;
                }
            }
            else
            {
                var row_start = info[row_start];
                if (row_start)
                    row_start[col_start] = null;
            }
        }
    };

    __pFluidLayoutManager._findUsableCell = function (templateInfo)
    {
        var cell;
        var row_idx = -1;
        var col_idx = -1;
        var row_len = 0;
        var col_len = 0;
        var a = 0;
        switch (this._direction)
        {
            case 0:
                row_len = templateInfo.length;
                for (var i = 0; i < row_len; i++)
                {
                    var row_info = templateInfo[i];
                    col_len = row_info.length;
                    for (var j = 0; j < col_len; j++)
                    {
                        var col_info = row_info[j];
                        if (col_info)
                        {
                            row_idx = i;
                            col_idx = j;
                            break;
                        }
                    }
                    if (row_idx > -1 && col_idx > -1)
                    {
                        break;
                    }
                }
                break;
            case 1:
                row_len = templateInfo.length;
                col_len = templateInfo && templateInfo[0] ? templateInfo[0].length : 0;
                for (var i = 0; i < col_len; i++)
                {
                    for (var j = 0; j < row_len; j++)
                    {
                        if (templateInfo[j][i])
                        {
                            row_idx = j;
                            col_idx = i;
                            break;
                        }
                    }

                    if (row_idx > -1 && col_idx > -1)
                        break;
                }
                break;
        }

        if (row_idx > -1 && col_idx > -1)
        {
            cell = templateInfo[row_idx][col_idx];
            templateInfo[row_idx][col_idx] = null;
        }

        return cell;
    };

    __pFluidLayoutManager._parseTableTemplate = function (strTemplate)
    {
        var ret = {
            parse: [[], []],
            matrix: [],
        };
        var parse = [[], []];

        if (!strTemplate)
        {
            return ret;
        }

        var info = strTemplate.split("/");
        if (info.length != 2)
        {
            return ret;
        }

        var i, j;
        for (i = 0; i < info.length; i++)
        {
            parse[i] = info[i].trim();
            parse[i] = parse[i].split(" ");

            for (j = 0; j < parse[i].length; j++)
            {
                if (!(parse[i][j].indexOf("px") > -1 || parse[i][j].indexOf("%") > -1 || parse[i][j].indexOf("*") > -1))
                {
                    return ret;
                }
            }
        }

        ret.parse = parse;

        return ret;
    };

    __pFluidLayoutManager._extractAreaRowsFromString = function (strTemplateArea)
    {
        var rows = [];
        var expected_col_count;

        var start_quat_idx = 0;
        var next_quat_idx = 0;

        do
        {
            start_quat_idx = strTemplateArea.indexOf("\"", next_quat_idx);
            if (start_quat_idx > -1)
            {
                next_quat_idx = strTemplateArea.indexOf("\"", start_quat_idx + 1);
                var row_str = strTemplateArea.substring(start_quat_idx + 1, next_quat_idx);
                var cells = row_str.split(" ");

                if (expected_col_count === undefined)
                {
                    expected_col_count = cells.length;
                }
                else if (expected_col_count !== cells.length)
                {
                    return null;
                }

                rows.push(cells);
            }
            next_quat_idx += 1;
        }
        while (start_quat_idx > -1);

        return rows;
    };

    __pFluidLayoutManager._findAreaHorizontalRange = function (objTemplatearea, row, start_col)
    {
        var area_name = objTemplatearea[row][start_col];
        var coords = [];
        var end_col = start_col;

        for (var j = start_col; j < objTemplatearea[row].length; j++)
        {
            if (objTemplatearea[row][j] !== area_name) break;

            coords.push([row, j]);
            end_col = j;
        }

        return {
            area_name: area_name,
            start_col: start_col,
            end_col: end_col,
            coords: coords
        };
    };

    __pFluidLayoutManager._checkAreaRowMatch = function (objTemplatearea, row, start_col, end_col, area_name)
    {
        if (!objTemplatearea[row]) return { is_match: false, is_invalid: false };

        var match_count = 0;
        var mismatch_count = 0;
        var new_coords = [];

        for (var j = start_col; j <= end_col; j++)
        {
            if (objTemplatearea[row][j] === area_name)
            {
                match_count++;
                new_coords.push([row, j]);
            }
            else
            {
                mismatch_count++;
            }
        }

        if (match_count > 0 && mismatch_count > 0)
        {
            return { is_match: false, is_invalid: true };
        }

        return {
            is_match: match_count > 0,
            is_invalid: false,
            coords: new_coords
        };
    };

    __pFluidLayoutManager._verifyAreaIsRectangular = function (objTemplatearea, start_row, start_col)
    {
        var horizontal = this._findAreaHorizontalRange(objTemplatearea, start_row, start_col);
        var area_name = horizontal.area_name;
        var end_col = horizontal.end_col;
        var all_coords = horizontal.coords.slice();

        for (var row = start_row + 1; row < objTemplatearea.length; row++)
        {
            var check_result = this._checkAreaRowMatch(objTemplatearea, row, start_col, end_col, area_name);

            if (check_result.is_invalid)
            {
                return { is_invalid: true };
            }

            if (!check_result.is_match)
            {
                break;
            }

            all_coords = all_coords.concat(check_result.coords);
        }

        return {
            is_invalid: false,
            area_name: area_name,
            start_row: start_row,
            end_col: end_col,
            coords: all_coords
        };
    };

    __pFluidLayoutManager._isCoordCached = function (cached_area, row, col)
    {
        for (var len = cached_area.length; len > 0; len--)
        {
            if (cached_area[len - 1][0] === row && cached_area[len - 1][1] === col)
            {
                return true;
            }
        }
        return false;
    };

    __pFluidLayoutManager._validateAreaMatrix = function (objTemplatearea)
    {
        var cache_area = {};

        for (var i = 0; i < objTemplatearea.length; i++)
        {
            for (var j = 0; j < objTemplatearea[i].length; j++)
            {
                var curr_area = objTemplatearea[i][j];

                if (curr_area === ".") continue;

                var cached = cache_area[curr_area];
                if (cached)
                {
                    if (!this._isCoordCached(cached, i, j))
                    {
                        return null;
                    }
                    continue;
                }

                var verification = this._verifyAreaIsRectangular(objTemplatearea, i, j);

                if (verification.is_invalid)
                {
                    return null;
                }

                cache_area[verification.area_name] = verification.coords;
            }
        }

        return cache_area;
    };

    __pFluidLayoutManager._parseTableTemplateArea = function (strTemplateArea)
    {
        var ret = {
            area_matrix: [],
            area_coordinate: {},
            area_rect: {}
        };

        if (!strTemplateArea) return ret;

        var objTemplatearea = this._extractAreaRowsFromString(strTemplateArea);

        if (!objTemplatearea || objTemplatearea.length === 0)
        {
            return ret;
        }

        var cache_area = this._validateAreaMatrix(objTemplatearea);

        if (cache_area === null)
        {
            return ret;
        }

        ret.area_matrix = objTemplatearea;
        ret.area_coordinate = cache_area;

        return ret;
    };

    __pFluidLayoutManager._getTablecellareaByTabletemplatearea = function (templatearea)
    {
        var info = this._tabletemplatearea_coordinate[templatearea];
        if (info)
        {
            var start_col = -1, start_row = -1, end_col = -1, end_row = -1;
            for (var i = 0, len = info.length; i < len; i++)
            {
                var coord = info[i];
                if (coord)
                {
                    var row_idx = coord[0];
                    var col_idx = coord[1];
                    if (i == 0)
                    {
                        start_row = end_row = row_idx;
                        start_col = end_col = col_idx;
                    }
                    else
                    {
                        if (row_idx < start_row)
                            start_row = row_idx;
                        if (col_idx < start_col)
                            start_col = col_idx;
                        if (row_idx > end_row)
                            end_row = row_idx;
                        if (col_idx > end_col)
                            end_col = col_idx;
                    }
                }
            }
            if (start_row == end_row && start_col == end_col)
                return start_row + "/" + start_col;
            else
                return start_row + " " + end_row + "/" + start_col + " " + end_col;
            //trace("_getTableTemplateInfo1",(start_row == end_row ? start_row : start_row + " " + end_row) + "/" +(start_col == end_col ? start_col : start_col + " " + end_col));
            //return (start_row == end_row ? start_row : start_row + " " + end_row) + "/" + (start_col == end_col ? start_col : start_col + " " + end_col);
        }
        return;
    };

    __pFluidLayoutManager._applyContent = function ()
    {
        var contents = this._fluidcontents;
        var content, target;

        if (nexacro._is_native_fluidlayout)
        {
            for (var i = 0; i < contents.length; i++)
            {
                content = contents[i];
                target = content._target;
                target._setContentInfo(content);
            }
        }
        else
        {
            for (var i = 0; i < contents.length; i++)
            {
                content = contents[i];
                target = content._target;
                // set adjust prop
                var is_move = target._adjust_left != content._adjust_pos[0] || target._adjust_top != content._adjust_pos[1];
                var is_resize = target._adjust_width != content._adjust_pos[2] || target._adjust_height != content._adjust_pos[3];
                //trace("targetid", contents.length,target.id, is_resize, is_move, content._adjust_pos[0], content._adjust_pos[1]);
                // set adjust prop
                target._setContentSize(content._size[0], content._size[1]);
                target._setAdjustProps(content._adjust_pos[0], content._adjust_pos[1], content._adjust_pos[2], content._adjust_pos[3]);
                // set control update
                target.on_update_position(is_resize, is_move);
            }
        }
    };
    __pFluidLayoutManager._applyAbsoluteContainer = function (objContainer, containerSize)
    {
        var container_comp = objContainer._p_parent;
        //var parent_comp = container_comp._p_parent;
        var is_resize = container_comp._adjust_width != containerSize[0] || container_comp._adjust_height != containerSize[1];

        container_comp._setAdjustSize(containerSize[0], containerSize[1]);
        if (container_comp.parent._is_flexible_container)
        {
            container_comp._update_layoutbasis();
        }
        else
            container_comp.on_update_position(true, false);

        return is_resize;
    };
    __pFluidLayoutManager._applyFluidContainer = function (objContainer, containerSize)
    {
        var container_comp = objContainer._is_panel ? objContainer : objContainer._p_parent;
        var is_resize = container_comp._adjust_width != containerSize[0] || container_comp._adjust_height != containerSize[1];

        if (nexacro._is_native_fluidlayout)
        {

            if (is_resize)
            {
                container_comp._setAdjustSize(containerSize[0], containerSize[1]);
                objContainer._setAdjustSize(containerSize[0], containerSize[1]);
                // set control update
                var target_elem = container_comp.getElement();
                if (target_elem)
                {
                    if (container_comp._isFluidContainer())
                    {
                        target_elem._updateInnerElement(containerSize[0], containerSize[1]);
                        container_comp._update_layoutbasis(true);
                    }
                    else
                        target_elem.setElementSize(containerSize[0], containerSize[1]);
                }
                container_comp.on_fire_onsize(containerSize[0], containerSize[1]);
            }
        }
        else
        {
            container_comp._setAdjustSize(containerSize[0], containerSize[1]);
            objContainer._setAdjustSize(containerSize[0], containerSize[1]);
            container_comp.on_update_position(true, false);
        }
        return is_resize;
    };

    __pFluidLayoutManager._setContentAdjustSize = function (content, l, t, w, h)
    {
        content._adjust_pos = [l, t, w, h];
    };
    __pFluidLayoutManager._setContentAdjustLeft = function (content, l)
    {
        content._adjust_pos[0] = l;
    };
    __pFluidLayoutManager._setContentAdjustTop = function (content, t)
    {
        content._adjust_pos[1] = t;
    };
    __pFluidLayoutManager._setContentAdjustWidth = function (content, w)
    {
        content._adjust_pos[2] = w;
    };
    __pFluidLayoutManager._setContentAdjustHeight = function (content, h)
    {
        content._adjust_pos[3] = h;
    };

    __pFluidLayoutManager._getContentAdjustWidth = function (content)
    {
        return content._adjust_pos[2];
    };
    __pFluidLayoutManager._getContentAdjustHeight = function (content)
    {
        return content._adjust_pos[3];
    };
    __pFluidLayoutManager._getContentAdjustLeft = function (content)
    {
        return content._adjust_pos[0];
    };
    __pFluidLayoutManager._getContentAdjustTop = function (content)
    {
        return content._adjust_pos[1];
    };
    __pFluidLayoutManager._getContentAdjustRight = function (content)
    {
        return content._adjust_pos[0] + content._adjust_pos[2];
    };
    __pFluidLayoutManager._getContentAdjustBottom = function (content)
    {
        return content._adjust_pos[1] + content._adjust_pos[3];
    };
    __pFluidLayoutManager._setTemplatAdjustSize = function (content, l, t, w, h)
    {
        content._template_pos = [l, t, w, h];
    };

    __pFluidLayoutManager._getTemplateAdjustLeft = function (content)
    {
        return content._template_pos[0];
    };
    __pFluidLayoutManager._getTemplateAdjustTop = function (content)
    {
        return content._template_pos[1];
    };
    __pFluidLayoutManager._getTemplateAdjustWidth = function (content)
    {
        return content._template_pos[2];
    };
    __pFluidLayoutManager._getTemplateAdjustHeight = function (content)
    {
        return content._template_pos[3];
    };

    __pFluidLayoutManager._setTemplateRectInfo = function (info)
    {
        // auto-cell 포함되서 계속 갱신됨
        var rect = [];

        info.forEach(function (row, row_idx)
        {
            if (!rect[row_idx]) rect[row_idx] = [];

            row.forEach(function (col, col_idx) { rect[row_idx].push(col._template_pos); }, this);
        }, this);

        this._tabletemplate_rect = rect;
    };
    __pFluidLayoutManager._getTemplateRectInfo = function ()
    {
        return this._tabletemplate_rect;
    };
    __pFluidLayoutManager._getTemplateRect = function (row_start, row_end, col_start, col_end)
    {
        var templateInfo = this._tabletemplate_rect;
        var start_cell_l = 0;
        var start_cell_t = 0;
        var end_cell_l = 0;
        var end_cell_t = 0;
        var end_cell_w = 0;
        var end_cell_h = 0;
        var templateInfo_row = templateInfo[row_start];
        if (templateInfo_row)
        {
            var start_cell_info = templateInfo_row[col_start];
            if (start_cell_info)
            {
                start_cell_l = start_cell_info[0];
                start_cell_t = start_cell_info[1];
            }
        }
        templateInfo_row = templateInfo[row_end];
        if (templateInfo_row)
        {
            var end_cell_info = templateInfo_row[col_end];
            if (end_cell_info)
            {
                end_cell_l = end_cell_info[0];
                end_cell_t = end_cell_info[1];
                end_cell_w = end_cell_info[2];
                end_cell_h = end_cell_info[3];
            }
        }

        var cell_w = end_cell_l + end_cell_w - start_cell_l;
        var cell_h = end_cell_t + end_cell_h - start_cell_t;

        return [start_cell_l, start_cell_t, cell_w, cell_h];
    };
    __pFluidLayoutManager._getFontRefSize = function (refer_font)
    {
        if (!refer_font) return 1;
        var size = refer_font._size;
        if (refer_font._unit == "pt")
        {
            size = size * (100 / 75);
        }
        return size;
    };
    __pFluidLayoutManager._parseContentSize = function (content_size, container_size)
    {
        switch (typeof content_size)
        {
            case "string":
                if (typeof content_size == "string")
                {
                    if (content_size.indexOf("%") > -1 || content_size.indexOf("em") > -1)
                    {
                        var _content_size = parseFloat(content_size);
                        if (content_size.indexOf("%") > -1)
                        {
                            _content_size *= 0.01;
                        }
                        content_size = _content_size * container_size;
                    }
                    else
                    {
                        content_size = parseFloat(content_size);
                    }
                }
                break;
            case "number":
            default:
                break;
        }

        return content_size;
    };

    __pFluidLayoutManager._getContentMinMaxSize = function (content_size, min, max)
    {
        if (min && min >= 0)
            if (min > content_size)
                content_size = min;

        if (max && max >= 0)
            if (max < content_size)
                content_size = max;

        return content_size;
    };

    __pFluidLayoutManager._setContentMaxRight = function (r)
    {
        this._max_contents_right = r;
    };
    __pFluidLayoutManager._setContentMaxBottom = function (b)
    {
        this._max_contents_bottom = b;
    };
    __pFluidLayoutManager._getContentMaxRight = function ()
    {
        return this._max_contents_right;
    };
    __pFluidLayoutManager._getContentMaxBottom = function ()
    {
        return this._max_contents_bottom;
    };

    __pFluidLayoutManager._setFitContentMaxRight = function (r)
    {
        this._max_fit_contents_right = r;
    };
    __pFluidLayoutManager._setFitContentMaxBottom = function (b)
    {
        this._max_fit_contents_bottom = b;
    };
    __pFluidLayoutManager._getFitContentMaxRight = function ()
    {
        return this._max_fit_contents_right;
    };
    __pFluidLayoutManager._getFitContentMaxBottom = function ()
    {
        return this._max_fit_contents_bottom;
    };

    //==============================================================================
    // nexacro._ComponentSizeManager
    //==============================================================================
    nexacro._ComponentSizeManager = function ()
    {
        // components
        this._dirty_components = new Set();

        // flush scheduling
        this._rafScheduled = false;
        this._flushPromise = null;
        this._resolveFlush = null;
    };

    var __pComponentSizeManager = nexacro._createPrototype(nexacro.Object, nexacro._ComponentSizeManager);
    nexacro._ComponentSizeManager.prototype = __pComponentSizeManager;
    __pComponentSizeManager._type_name = "_ComponentSizeManager";

    __pComponentSizeManager.markDirty = function (component)
    {
        if (!component)
            return;

        this._markDirty(component);
        this._scheduleFlush();
    };

    __pComponentSizeManager.afterFlush = function (callback) 
    {
        if (!this._rafScheduled)
            return Promise.resolve();

        const promise = this._flushPromise;

        if (typeof callback === 'function')
            promise.then(callback);

        return promise;
    };

    __pComponentSizeManager.teardown = function ()
    {
        this._dirty_components.clear();
    }

    __pComponentSizeManager._markDirty = function (component)
    {
        this._dirty_components.add(component);
    };

    __pComponentSizeManager._scheduleFlush = function ()
    {
        if (this._rafScheduled)
            return;

        this._rafScheduled = true;
        this._flushPromise = new Promise(resolve => 
        {
            this._resolveFlush = resolve;
            requestAnimationFrame(() => 
            {
                this._flush();
            });
        });
    };

    __pComponentSizeManager._flush = function ()
    {
        this._rafScheduled = false;

        if (this._dirty_components.size === 0)
        {
            this._resolveFlush?.();
            return;
        }

        const dirtyComponents = Array.from(this._dirty_components);
        this._dirty_components.clear();

        const forms = new Set();
        for (const comp of dirtyComponents)
        {
            const ow = comp.getOffsetWidth(), oh = comp.getOffsetHeight(), 
                ol = comp.getOffsetLeft(), ot = comp.getOffsetTop();

            comp._update_position();

            if (ow === comp.getOffsetWidth() && oh === comp.getOffsetHeight() 
                && ol === comp.getOffsetLeft() && ot === comp.getOffsetTop())
                continue;

            const form = comp._getForm();
            if (form && form.resetScroll && typeof form.resetScroll === 'function')
                forms.add(form);
        }
        for (const form of forms)
        {
            form.resetScroll();

            // console.log("Form resetScroll : " + form.name);
        }
        this._resolveFlush?.();
    };

    //==============================================================================
    // nexacro._XCSSGroupAutoSelector
    //==============================================================================
    class CheckerBase
    {
        constructor(condition)
        {
            this._listener = null;
            this._condition = condition;
        }

        _notifyChange()
        {
            if (this._listener)
                this._listener();
        }

        onChange(callback)
        {
            this._listener = callback;
        }

        dispose()
        {
            this._listener = null;
        }

        isMatch()
        {
            return false;
        }
    }
    class MediaQueryChecker extends CheckerBase
    {
        constructor(condition)
        {
            super(condition);

            this._onChange = this._notifyChange.bind(this);

            this._media = window.matchMedia(this._condition);
            this._media.addEventListener('change', this._onChange);
        }

        isMatch()
        {
            return this._media.matches;
        }

        dispose()
        {
            super.dispose();

            this._media.removeEventListener('change', this._onChange);
            this._media = null;
        }
    }
    class ScreenTypeChecker extends CheckerBase
    {
        constructor(condition, env)
        {
            super(condition);
            
            this._env = env;
        }
     
        isMatch()
        {
            return this._env?._curscreentype === this._condition;
        }

        dispose()
        {
            super.dispose();
        }
    }

    class LanguageTypeChecker extends CheckerBase
    {
        constructor(condition, env)
        {
            super(condition);

            this._env = env;
            this._onChange = this._notifyChange.bind(this);

            window.addEventListener('nexacro-locale-change', this._onChange);
            window.addEventListener('languagechange', this._onChange);
        }

        _notifyChange(event)
        {
            if (event.type === 'nexacro-locale-change' &&
                event.detail?.source !== this._env)
                return;

            super._notifyChange();
        }

        isMatch()
        {
            return (this._env?._p_locale?.substr(0, 2) || nexacro._getLanguage()) === this._condition;
        }

        dispose()
        {
            super.dispose();

            window.removeEventListener('nexacro-locale-change', this._onChange);
            window.removeEventListener('languagechange', this._onChange);
        }
    }

    nexacro._XCSSGroupAutoSelector = function (window)
    {
        this.info = {};
        this.checkers = {}; // { XCSSGroupId : [checker1, checker2, ...] }

        this._window = window;
        this._selectedClassSet = new Set();
        this._unselectedClassSet = new Set();
    };
    var __pXCSSGroupAutoSelector = nexacro._createPrototype(nexacro.Object, nexacro._XCSSGroupAutoSelector);
    nexacro._XCSSGroupAutoSelector.prototype = __pXCSSGroupAutoSelector;
    __pXCSSGroupAutoSelector._type_name = "_XCSSGroupAutoSelector";

    __pXCSSGroupAutoSelector.CHECKER = {
        VIEWPORT: { type: 'mediaquery-viewport', enabled: true },
        RESOLUTION: { type: 'mediaquery-resolution', enabled: true },
        COLORSCHEME: { type: 'mediaquery-colorscheme', enabled: true },
        REDUCEDMOTION: { type: 'mediaquery-reducedmotion', enabled: true },
        CONTRAST: { type: 'mediaquery-contrast', enabled: true },
        SCREEN: { type: 'nexacro-screen', enabled: true },
        LANGUAGE: { type: 'nexacro-language', enabled: true }
    };

    __pXCSSGroupAutoSelector.CONDITION_PROP_TO_CHECKER = {
        'viewport-maxwidth': __pXCSSGroupAutoSelector.CHECKER.VIEWPORT,
        'viewport-minwidth': __pXCSSGroupAutoSelector.CHECKER.VIEWPORT,
        'viewport-maxheight': __pXCSSGroupAutoSelector.CHECKER.VIEWPORT,
        'viewport-minheight': __pXCSSGroupAutoSelector.CHECKER.VIEWPORT,
        'resolution-maxdpr': __pXCSSGroupAutoSelector.CHECKER.RESOLUTION,
        'resolution-mindpr': __pXCSSGroupAutoSelector.CHECKER.RESOLUTION,
        'colorscheme-mode': __pXCSSGroupAutoSelector.CHECKER.COLORSCHEME,
        'reducedmotion-mode': __pXCSSGroupAutoSelector.CHECKER.REDUCEDMOTION,
        'contrast-mode': __pXCSSGroupAutoSelector.CHECKER.CONTRAST,
        'screen-type': __pXCSSGroupAutoSelector.CHECKER.SCREEN,
        'language-type': __pXCSSGroupAutoSelector.CHECKER.LANGUAGE
    };

    __pXCSSGroupAutoSelector._checkerFactory = {};
    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.VIEWPORT.type] = function (condition)
    {
        let queries = [];

        const queryMap = {
            'viewport-maxwidth': val => `(max-width: ${val})`,
            'viewport-minwidth': val => `(min-width: ${val})`,
            'viewport-maxheight': val => `(max-height: ${val})`,
            'viewport-minheight': val => `(min-height: ${val})`
        };

        const minMaxPairs = [
            ['viewport-minwidth', 'viewport-maxwidth'],
            ['viewport-minheight', 'viewport-maxheight']
        ];

        const fixMinMax = (minKey, maxKey, obj) => // min > max 이면 max=min 으로 변경
        {
            const minRaw = obj[minKey];
            const maxRaw = obj[maxKey];

            if (minRaw != null && maxRaw != null)
            {
                const minVal = parseFloat(minRaw);
                const maxVal = parseFloat(maxRaw);

                if (minVal > maxVal) // 단, min, max 의 단위가 다르면 안됨. 단위 체크를 여기서 할지 툴에서 할지 향후 검토 필요
                {
                    obj[maxKey] = typeof maxRaw === 'string' ? minRaw : minVal;
                }
            }
        };
        minMaxPairs.forEach(([minKey, maxKey]) => fixMinMax(minKey, maxKey, condition));

        for (const key in queryMap)
        {
            const value = condition[key];
            const query = value != null ? queryMap[key](value) : null;
            if (query)
            {
                queries.push(query);
            }
        }

        if (!queries.length)
            return null;

        return new MediaQueryChecker(queries.join(' and '));
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.RESOLUTION.type] = function (condition)
    {
        let queries = [];

        const queryMap = {
            'resolution-maxdpr': val => `(max-resolution: ${val}dppx)`,
            'resolution-mindpr': val => `(min-resolution: ${val}dppx)`
        };

        const minMaxPairs = [
            ['resolution-mindpr', 'resolution-maxdpr']
        ];

        const fixMinMax = (minKey, maxKey, obj) => // min > max 이면 max=min 으로 변경
        {
            const minRaw = obj[minKey];
            const maxRaw = obj[maxKey];

            if (minRaw != null && maxRaw != null)
            {
                const minVal = parseFloat(minRaw);
                const maxVal = parseFloat(maxRaw);

                if (minVal > maxVal)
                {
                    obj[maxKey] = typeof maxRaw === 'string' ? minRaw : minVal;
                }
            }
        };
        minMaxPairs.forEach(([minKey, maxKey]) => fixMinMax(minKey, maxKey, condition));

        for (const key in queryMap)
        {
            const value = condition[key];
            const query = value != null ? queryMap[key](value) : null;
            if (query)
            {
                queries.push(query);
            }
        }

        if (!queries.length)
            return null;

        return new MediaQueryChecker(queries.join(' and '));
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.COLORSCHEME.type] = function (condition)
    {
        let queries = [];

        const queryMap = {
            'colorscheme-mode': val => `(prefers-color-scheme: ${val})`
        };

        for (const key in queryMap)
        {
            const value = condition[key];
            const query = value != null ? queryMap[key](value) : null;
            if (query)
            {
                queries.push(query);
            }
        }

        if (!queries.length)
            return null;

        return new MediaQueryChecker(queries.join(' and '));
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.REDUCEDMOTION.type] = function (condition)
    {
        let queries = [];

        const queryMap = {
            'reducedmotion-mode': val => `(prefers-reduced-motion: ${val})`
        };

        for (const key in queryMap)
        {
            const value = condition[key];
            const query = value != null ? queryMap[key](value) : null;
            if (query)
            {
                queries.push(query);
            }
        }

        if (!queries.length)
            return null;

        return new MediaQueryChecker(queries.join(' and '));
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.CONTRAST.type] = function (condition)
    {
        let queries = [];

        const queryMap = {
            'contrast-mode': val =>
            {
                const contrastModeMap = { high: 'more', low: 'less' };
                const mapped = contrastModeMap[val];
                return mapped ? `(prefers-contrast: ${mapped})` : null;
            }
        };

        for (const key in queryMap)
        {
            const value = condition[key];
            const query = value != null ? queryMap[key](value) : null;
            if (query)
            {
                queries.push(query);
            }
        }

        if (!queries.length)
            return null;

        return new MediaQueryChecker(queries.join(' and '));
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.SCREEN.type] = function (condition)
    {
        return new ScreenTypeChecker(condition['screen-type'], this._window._getEnvironment());
    };

    __pXCSSGroupAutoSelector._checkerFactory[__pXCSSGroupAutoSelector.CHECKER.LANGUAGE.type] = function (condition)
    {
        return new LanguageTypeChecker(condition['language-type'], this._window._getEnvironment());
    };

    __pXCSSGroupAutoSelector.setInfo = function (info)
    {
        this._dispose();
        this._applyFilter();

        this.info = info;
        this.checkers = {};

        if (!info)
            return;

        const self = this;
        for (const key of Object.keys(info))  // key is XCSS predefine Group Id
        {
            let condition = info[key];
            let checkers = [];
            let usedCheckerTypes = {};

            for (const prop of Object.keys(condition)) 
            {
                let checker_info = this.CONDITION_PROP_TO_CHECKER[prop];
                if (checker_info && checker_info.enabled && !usedCheckerTypes[checker_info.type])
                {
                    var checker = this._checkerFactory[checker_info.type].call(this, condition);
                    if (checker)
                    {
                        (function (_key, _checker)
                        {
                            _checker.onChange(function ()
                            {
                                self._evaluate(_key); // 동적 변경 시점에 개별 평가
                            });
                        })(key, checker);
                        checkers.push(checker);
                        usedCheckerTypes[checker_info.type] = true;
                    }
                }
            }
            this.checkers[key] = checkers;
        }
        this.evaluateAll(); // 초기화 시점에 전체 평가
    };

    __pXCSSGroupAutoSelector.applyTo = function (classset)
    {
        if (!classset || !(classset instanceof Set))
            return;

        for (const key of this._unselectedClassSet)
        {
            classset.delete(key);
        }
        for (const key of this._selectedClassSet)
        {
            classset.add(key);
        }
    };

    __pXCSSGroupAutoSelector.evaluateAll = function ()
    {
        for (const key of Object.keys(this.checkers))
        {
            this._evaluate(key);
        }
    };

    __pXCSSGroupAutoSelector.reset = function ()
    {
        this.setInfo(this.info);
    };

    __pXCSSGroupAutoSelector._applyFilter = function ()
    {
        const env = this._window._getEnvironment();
        const app = env?._getApplication();
        if (!app)
            return;

        const checker = this.CHECKER;
        for (const key in checker)
        {
            if (Object.prototype.hasOwnProperty.call(checker, key))
            {
                checker[key].enabled = true;
            }
        }

        const filterlist = app._xcssgroupfilterlist;
        if (filterlist && Array.isArray(filterlist))
        {
            filterlist.forEach(key =>
            {
                const upperKey = key.toUpperCase();
                if (checker[upperKey])
                {
                    checker[upperKey].enabled = false;
                }
            });
        }
    };

    __pXCSSGroupAutoSelector._evaluate = function (key)
    {
        const checkers = this.checkers[key];
        if (!checkers || checkers.length === 0)
        {
            this._scheduleRootCssClassUpdate();
            return;
        }
        this._updateRootCssClass(key, checkers.every(chk => chk.isMatch()));
    };

    __pXCSSGroupAutoSelector._dispose = function ()
    {
        for (const key of Object.keys(this.checkers))
        {
            this.checkers[key].forEach(chk => chk.dispose());
        }
        this.checkers = {};
        this.info = {};

        this._selectedClassSet.clear();
        this._unselectedClassSet.clear();
    };

    nexacro._throttleAnimationFrame = function (callback)
	{
		// 동일한 frame내에서는 한번만 실행되도록 함, 여러번 호출되면 무시
		let scheduled = false;

		return function (...args)
		{
			if (scheduled)
				return;

			scheduled = true;

			requestAnimationFrame(() =>
			{
				scheduled = false;
				callback.apply(this, args);
			});
		};
	};

    __pXCSSGroupAutoSelector._scheduleRootCssClassUpdate = nexacro._throttleAnimationFrame(function () { this._window._setRootCSSClass(); });
    __pXCSSGroupAutoSelector._updateRootCssClass = function (key, selected) 
    {
        if (selected)
        {
            this._unselectedClassSet.delete(key);
            this._selectedClassSet.add(key);
        }
        else
        {
            this._selectedClassSet.delete(key);
            this._unselectedClassSet.add(key);
        }
        this._scheduleRootCssClassUpdate();
    };

    //==============================================================================
    // nexacro.Window
    //==============================================================================
    nexacro._Window = function (id, parent, is_main)
    {
        this.id = id;
        this.parent = parent;
        this.frame = null;
        this.root = null;
        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;
        this.clientWidth = 0;
        this.clientHeight = 0;
        this._wheelZoom = 100;
        this._enableWheelZoom = true;

        //------------ internal variable --------------//
        this.handle = null;
        this._doc = null;
        this._dest_doc = null;
        this.dest_handle = null;
        this._is_window = true;
        this._is_alive = true;
        this._is_main = (is_main || false);
        this._Init_sysevent_flag = false;
        this._prepared_flag = false;

        this._offset_client_width = -1;
        this._offset_client_height = -1;

        this._gap_client_width = 0;
        this._gap_client_height = 0;
        this._is_killfocusing = false;

        this._focus_list = null;
        this._child_list = new nexacro.Collection(); // child nexacro.Window list (for modeless,modalAsync)
        this._lock_list = [];   // locked parent list
        this._locker_list = []; // window list that locked me
        this._disable_ref = 0;  // locked refcount (for modalAsync)
        this._capture_complist = []; // event capturing component list (stack) [comp, capturelevel]


        this._last_focused_elem = null; // for Forwarding KeyEvent 
        this._accessibility_last_focused_comp = null; // for accessibility Android runtime
        /* for accessibility sensereader virtual cursor mode */
        this._is_fire_sys_keydown = false; // checking fire the keydown event
        this._is_fire_sys_touchstart = false; // checking fire the touchstart event
        this._is_fire_sys_focusin = false; // checking fire the focusin event
        this._is_fire_virtual_mousedown = false; // checking fire mousedown from sensereader

        this._cur_screen_pos = { "x": undefined, "y": undefined }; // for Checking mousemove event
        this._cur_wheel_pos = { "x": undefined, "y": undefined }; // for Checking mousewheel event
        this._event_positions = { "screenX": undefined, "screenY": undefined, "clientX": undefined, "clientY": undefined };
        this._cur_touch_elem = null;
        this._cur_ldown_elem = null; // for current lbuttondown element
        this._cur_rdown_elem = null; // for current rbuttondown element
        this._cur_mdown_elem = null; // for current mousedown element except for lbutton and rbutton
        this._curWindowX = null; //save x at lbuttondown for track
        this._curWindowY = null; //save x at lbuttondown for track
        this._currentTouchEvents = [];

        this._modal_frame_stack = []; // stack of ModalFrameInfo
        this._ignore_close_confirm = false; // [I'm closing by parent] flag
        this._postmsg_data_que = []; // que postmessage

        this._settedCSSClass = new Set();
        this._xcssgroup_autoselector = new nexacro._XCSSGroupAutoSelector(this);
        this._gesture_manager = new nexacro._TouchGestureManager();
        this._component_size_manager = new nexacro._ComponentSizeManager();

        this._env = null;   
        // init initial event handler
        // changed by capture element -> restore by release capture
        let useglobalnexacro = nexacro.isglobalmodule;        
        this._on_sys_popstate = useglobalnexacro ? this._on_default_sys_popstate : this._wrapSysHandler(this._on_default_sys_popstate);
        this._on_sys_message = useglobalnexacro ? this._on_default_sys_message : this._wrapSysHandler(this._on_default_sys_message);
        this._on_sys_lbuttondown = useglobalnexacro ? this._on_default_sys_lbuttondown : this._wrapSysHandler(this._on_default_sys_lbuttondown);
        this._on_sys_rbuttondown = useglobalnexacro ? this._on_default_sys_rbuttondown : this._wrapSysHandler(this._on_default_sys_rbuttondown);
        this._on_sys_lbuttonup = useglobalnexacro ? this._on_default_sys_lbuttonup : this._wrapSysHandler(this._on_default_sys_lbuttonup);
        this._on_sys_rbuttonup = useglobalnexacro ? this._on_default_sys_rbuttonup : this._wrapSysHandler(this._on_default_sys_rbuttonup);
        this._on_sys_mouseup = useglobalnexacro ? this._on_default_sys_mouseup : this._wrapSysHandler(this._on_default_sys_mouseup);
        this._on_sys_mousedown = useglobalnexacro ? this._on_default_sys_mousedown : this._wrapSysHandler(this._on_default_sys_mousedown);
        this._on_sys_mouseenter = useglobalnexacro ? this._on_default_sys_mouseenter : this._wrapSysHandler(this._on_default_sys_mouseenter);
        this._on_sys_mouseleave = useglobalnexacro ? this._on_default_sys_mouseleave : this._wrapSysHandler(this._on_default_sys_mouseleave);
        this._on_sys_mousemove = useglobalnexacro ? this._on_default_sys_mousemove : this._wrapSysHandler(this._on_default_sys_mousemove);
        this._on_sys_mousewheel = useglobalnexacro ? this._on_default_sys_mousewheel : this._wrapSysHandler(this._on_default_sys_mousewheel);
        this._on_sys_dragenter = useglobalnexacro ? this._on_default_sys_dragenter : this._wrapSysHandler(this._on_default_sys_dragenter);
        this._on_sys_dragover = useglobalnexacro ? this._on_default_sys_dragover : this._wrapSysHandler(this._on_default_sys_dragover);
        this._on_sys_dragleave = useglobalnexacro ? this._on_default_sys_dragleave : this._wrapSysHandler(this._on_default_sys_dragleave);
        this._on_sys_drop = useglobalnexacro ? this._on_default_sys_drop : this._wrapSysHandler(this._on_default_sys_drop);
        this._on_sys_animationstart = useglobalnexacro ? this._on_default_sys_animationstart : this._wrapSysHandler(this._on_default_sys_animationstart);
        this._on_sys_animationend = useglobalnexacro ? this._on_default_sys_animationend : this._wrapSysHandler(this._on_default_sys_animationend);
        this._on_sys_animationiteration = useglobalnexacro ? this._on_default_sys_animationiteration : this._wrapSysHandler(this._on_default_sys_animationiteration);
        this._on_sys_keydown = useglobalnexacro ? this._on_default_sys_keydown : this._wrapSysHandler(this._on_default_sys_keydown);
        this._on_sys_keypress = useglobalnexacro ? this._on_default_sys_keypress : this._wrapSysHandler(this._on_default_sys_keypress);
        this._on_sys_keyup = useglobalnexacro ? this._on_default_sys_keyup : this._wrapSysHandler(this._on_default_sys_keyup);
        this._on_sys_click = useglobalnexacro ? this._on_default_sys_click : this._wrapSysHandler(this._on_default_sys_click);
        this._on_sys_dblclick = useglobalnexacro ? this._on_default_sys_dblclick : this._wrapSysHandler(this._on_default_sys_dblclick);
        this._on_sys_contextmenu = useglobalnexacro ? this._on_default_sys_contextmenu : this._wrapSysHandler(this._on_default_sys_contextmenu);

        this._on_sys_resize = useglobalnexacro ? this._on_default_sys_resize : this._wrapSysHandler(this._on_default_sys_resize);
        this._on_sys_move = useglobalnexacro ? this._on_default_sys_move : this._wrapSysHandler(this._on_default_sys_move);
        this._on_sys_getminmaxinfo = useglobalnexacro ? this._on_default_sys_getminmaxinfo : this._wrapSysHandler(this._on_default_sys_getminmaxinfo);
        this._on_sys_activate = useglobalnexacro ? this._on_default_sys_activate : this._wrapSysHandler(this._on_default_sys_activate);
        this._on_sys_deactivate = useglobalnexacro ? this._on_default_sys_deactivate : this._wrapSysHandler(this._on_default_sys_deactivate);
        this._on_sys_beforeclose = useglobalnexacro ? this._on_default_sys_beforeclose : this._wrapSysHandler(this._on_default_sys_beforeclose);
        this._on_sys_close = useglobalnexacro ? this._on_default_sys_close : this._wrapSysHandler(this._on_default_sys_close);

        this._on_sys_reload = useglobalnexacro ? this._on_default_sys_reload : this._wrapSysHandler(this._on_default_sys_reload);
        this._on_sys_syscommand = useglobalnexacro ? this._on_default_sys_syscommand : this._wrapSysHandler(this._on_default_sys_syscommand);

        this._on_sys_load = useglobalnexacro ? this._on_default_sys_load : this._wrapSysHandler(this._on_default_sys_load);
        this._on_sys_orientationchange = useglobalnexacro ? this._on_default_sys_orientationchange : this._wrapSysHandler(this._on_default_sys_orientationchange);

        this._on_sys_accessibilitygesture = useglobalnexacro ? this._on_default_sys_accessibilitygesture : this._wrapSysHandler(this._on_default_sys_accessibilitygesture);
        this._on_sys_accessibilityhover = useglobalnexacro ? this._on_default_sys_accessibilityhover : this._wrapSysHandler(this._on_default_sys_accessibilityhover);
        // ExtensionAPIv2
        this._on_sys_onextmodule = useglobalnexacro ? this._on_default_sys_onextmodule : this._wrapSysHandler(this._on_default_sys_onextmodule);
        this._on_sys_onextendedcommand = useglobalnexacro ? this._on_default_sys_onextendedcommand : this._wrapSysHandler(this._on_default_sys_onextendedcommand);
        // For Network Status Change Detection Event
        this._on_sys_onnetworkstatuschange = useglobalnexacro ? this._on_default_sys_onnetworkstatuschange : this._wrapSysHandler(this._on_default_sys_onnetworkstatuschange);
    };

    var __pWindow = nexacro._createPrototype(nexacro.Object, nexacro._Window);
    nexacro._Window.prototype = __pWindow;
    __pWindow._type_name = "Window";

    __pWindow._wrapSysHandler = function (handler)
    {
        var win = this;
        return function wrapped_sys_env_handler()
        {
            var env = win._getEnvironment && win._getEnvironment();
            if (!env)
                return handler.apply(win, arguments);

            nexacro._pushCurrentEnvironment(env);
            try
            {
                return handler.apply(win, arguments);
            }
            finally
            {
                nexacro._popCurrentEnvironment(env);
            }
        };
    };

    __pWindow._gesture_manager = null;
    __pWindow.__contaienr_rect = null;
    __pWindow._getBoundingClientRect = function ()
    {
        return this.__contaienr_rect.get();
    }
    __pWindow.__createRectManager = function (handle)
    {
        return (function ()
        {

            let state = { x: 0, y: 0, left: 0, top: 0, clientWidth: 0, clientHeight: 0, offsetWidth: 0, offsetHeight: 0 };
            let win_handle = handle;
            return {
                set: ({ left, top, width, height }) =>
                {
                    if (!nexacro._ishandleWindow(win_handle))
                    {
                        if (left !== undefined) state.left = left;
                        if (left !== undefined) state.top = top;
                        if (width !== undefined) state.clientWidth = width;
                        if (height !== undefined) state.clientHeight = height;
                    }
                },
                get: () => 
                {
                    let x = nexacro._getWindowHandlePosX(win_handle);
                    let y = nexacro._getWindowHandlePosY(win_handle);

                    state.x = x + state.left;
                    state.y = y + state.top;
                    if (!nexacro._ishandleWindow(win_handle))
                    {
                        state.x = x + state.left;
                        state.y = y + state.top;

                    }
                    else
                    {
                        state.x = state.left = x;
                        state.y = y + state.top;
                    }

                    // state를 유지해야 하기 때문에 copy return;
                    return { ...state }
                }
            };
        })();
    };

    __pWindow.getRootInstance = function () // MainFrame | Form
    {
        const findapp = () =>
        {
            let app = this.handle ? nexacro.__MFEAPI._getRootApp(this.handle) : null;
            if (!app)
            {
                const env = this._getEnvironment();
                if (env)
                {
                    const app = env._getApplication();
                    if (app)
                        return app.mainframe;
                }
            }

            return app;
        }
        return findapp();
    };

    __pWindow.updateClientRect = function (clientRect)
    {
        const { x, y, width, height } = clientRect;
        const elem = this.handle;
        /// getBoundingClientRect 좌표 계산 캐시용
    };

    __pWindow.getOffsetClientPos = function (handle)
    {
        const pos = { x: undefined, y: undefined };
        const win = nexacro._handletoWindow(handle);
        if (this._event_positions.screenX)
        {
            const ratio = nexacro._getDevicePixelRatio()
            pos.x = (this._event_positions.screenX - (this._event_positions.clientX * ratio));
            pos.y = (this._event_positions.screenY - (this._event_positions.clientY * ratio));
        }
        else
        {

            const outH = nexacro._getWindowHandleOuterHeight(handle);
            const inH = nexacro._getWindowHandleClientHeight(handle);

            pos.x = 0;
            pos.y = (outH - inH);

        }

        return pos;
    }
    //------------------------------------------------------------------------------
    __pWindow.attachHandle = function (handle)
    {
        if (!this.handle)
        {
            this.handle = handle;
            this._doc = this._dest_doc = nexacro._getWindowDocumentHandle(handle);
            this.dest_handle = nexacro._getWindowDestinationHandle(handle);

            this.left = nexacro._getContainerHandlePosX(handle);
            this.top = nexacro._getContainerHandlePosY(handle);
            this.width = nexacro._getWindowHandleOuterWidth(handle);
            this.height = nexacro._getWindowHandleOuterHeight(handle);
            var clientWidth = nexacro._getContainerHandleClientWidth(handle);
            var clientHeight = nexacro._getContainerHandleClientHeight(handle);
            this.clientWidth = (clientWidth === 0) ? this.width : clientWidth;
            this.clientHeight = (clientHeight === 0) ? this.height : clientHeight;
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;

            this._xcssgroup_autoselector.setInfo(this._getEnvironment()?._css_group_autoselect_info);
        }
    };


    __pWindow.attachRoot = function (rootcomp, refresh_flag, createcallback)
    {
        this.root = this.frame = rootcomp; // 임시 
        this._env = this.root._getEnvironment();
        if (createcallback)
        {
            if (refresh_flag)
                return createcallback()._onPrepareWindowHandle();
            else
                return createcallback();
        }
        else
        {
            if (refresh_flag)
                this._onPrepareWindowHandle();
        }

    };

    __pWindow.attachFrame = function (frame, refresh_flag)
    {
        this.frame = frame;
        if (this.attachRoot) // 임시 처리
            return this.attachRoot(frame, refresh_flag)
        if (refresh_flag)
            this._onPrepareWindowHandle();
    };

    __pWindow._getEnvironment = function ()
    {
        return this._env;
    };

    __pWindow._setSystemMenuResizable = function (resizable)
    {
        nexacro._setSystemMenuResizable(this.handle, resizable);
    };

    __pWindow._procSysCommand = function (command)
    {
        nexacro._procSysCommand(this.handle, command);
    };

    __pWindow._postMessage = function (target_comp, id, func, userdata)
    {
        var data = { id: id, userdata: userdata, target: target_comp, func: func };
        this._postmsg_data_que.push(data);
        nexacro._postMessage(id, this, target_comp, '*');
    };

    __pWindow._onPrepareWindowHandle = function ()
    {
        if (!this._prepared_flag)
        {
            this._prepared_flag = true;

            if (this.root)
                this.root.on_created();

        }
    };
    __pWindow._onPrepareModalWindowHandle = function ()
    {
        if (!this._prepared_flag)
        {
            this._prepared_flag = true;
            if (this.root)
            {
                this.root.createComponent();
                this.root.on_created();
            }
        }
    };

    __pWindow.refresh = function ()
    {
        if (this.handle && this._prepared_flag && this.root)
        {
            this.root.on_refresh();
        }
    };

    __pWindow.setLinkedWindow = function (handle)
    {
        nexacro._setLinkedWindow(handle, this);
        this.attachHandle(handle);
    };

    __pWindow.addChild = function (childwin)
    {
        this._child_list.add_item(childwin.id, childwin);
    };

    __pWindow.create = function (_parent, name, width, height, left, top, resizable, layered, taskbar)
    {
        if (_parent)
        {
            _parent._child_list.add_item(name, this);
        }
        nexacro._createWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, taskbar, this._is_main, this._getEnvironment());

        return this;
    };


    __pWindow.createModal = function (_parent, name, width, height, left, top, resizable, layered, lockmode)
    {
        if (_parent)
        {
            _parent._child_list.add_item(name, this);
        }
        return nexacro._createModalWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, lockmode, this._getEnvironment());
    };

    __pWindow.createModalAsync = function (_parent, name, width, height, left, top, resizable, layered, lockmode)
    {
        if (_parent)
        {
            _parent._child_list.add_item(name, this);
        }

        // lock windows
        var root_win = this; // 생성될 window의 root
        while (root_win.parent)
            root_win = root_win.parent;

        // parent=null인 경우 runbase를 parent로..
        if (_parent)
            this._lock_list[0] = root_win;
        else
            this._lock_list[0] = this.root._runbase_window;

        if (lockmode == 1) // lock=all
        {
            var popupframes = nexacro.getPopupFrames();
            if (popupframes)
            {
                for (var i = 0, len = popupframes.length; i < len; i++)
                {
                    var popup_frame = popupframes[i];
                    var popup_win = popup_frame._window;
                    if (popup_win == this)
                        continue;
                    var popup_root = popup_win;
                    while (popup_root.parent)
                        popup_root = popup_root.parent;
                    if (popup_root == root_win)
                        continue;
                    if (nexacro._indexOf(this._lock_list, popup_root) < 0)
                        this._lock_list.push(popup_root);
                }
            }
        }

        // create handle (for except from locklist)
        nexacro._createModalAsyncWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, lockmode, this._getEnvironment());

    };

    __pWindow.destroy = function ()
    {
        // ModalAsync callback처리시 IE에서 문제가 있어서 2개 파트로 나눔
        if (!this._is_alive)
            return;

        this._destroyVisiblePart();
        this._destroyInternalPart();
        if (this.handle)
        {
            nexacro._closeWindowHandle(this.handle);
        }
        this._env = null;
    };

    __pWindow._destroyVisiblePart = function ()
    {
        if (!this._is_alive)
            return;

        this._is_alive = false;

        // destroy childs
        this._closeChildWindows();

        // unlock if modalAsync
        if (this._lock_list.length > 0)
        {
            const locklen = this._lock_list.length;
            for (let i = locklen - 1; i >= 0; i--)
            {
                const locked_window = this._lock_list[i];
                if (!locked_window || !locked_window.root)
                    continue;
                nexacro._setWindowHandleLock(locked_window.handle, false, this.handle, true);
            }
        }

        // close handle
        if (this.handle)
        {
            
            const repeatInfo = nexacro._cur_repeat_info;
            if (repeatInfo && repeatInfo.targetwin == this)
            {
                if (repeatInfo._timer)
                {
                    nexacro._clearSystemTimer(this.handle, repeatInfo._timer);
                }
            }

        }

    };

    __pWindow._destroyInternalPart = function ()
    {
                // destroy component size manager
        this._component_size_manager.teardown();
        this._component_size_manager = null;
        if (this.root)
        {
            let env = this._getEnvironment();
            if (env)
            {
                env._removeProtocols();
                env._removeDeviceAdaptors();

                if (env.appkey)
                {
                    const doc = typeof document !== "undefined" ? document : undefined;
                    const rootNode = nexacro.isglobalmodule ? doc?.documentElement : this.handle;
                    
                    rootNode.classList.remove(env.appkey);
                }
            }                
        }
     
        if (this.parent)
            this.parent._child_list.delete_item(this.id);

        // destroy modal frames
        const modal_frame_stack = this._modal_frame_stack;
        const modal_frame_stack_len = modal_frame_stack.length;
        for (let i = modal_frame_stack_len - 1; i >= 0; i--)
        {
            const modal_frame_info = modal_frame_stack[i];
            const frame = modal_frame_info[0];
            if (frame._is_alive)
                frame._destroy();
        }

        // destroy Self
        if (this.root)
        {
            nexacro._unregisterPopupFrame(this.root.id);
            if (!this.root._isMain() && this.root._is_window && this.root._window_type != 5)
                this.root._on_close();

            if (this.root._is_alive)
                this.root._destroy();
            this.root = null;
        }
        
        nexacro._destroyPopupFrameInfo(this);
        nexacro._destroyManagerFrame(this.handle);
        nexacro._destroyManagerShadow(this.handle);
        this._doc = this._dest_doc = null;
        this.dest_handle = null;
        this.parent = null;
        this._postmsg_data_que = null;

        //////////////////////////////////////////////////////////////////////////
        // clear event handlers
        this._on_sys_popstate = null;
        this._on_sys_message = null;
        this._on_sys_lbuttondown = null;
        this._on_sys_rbuttondown = null;
        this._on_sys_lbuttonup = null;

        this._on_sys_drag_lbuttonup = null;

        this._on_sys_rbuttonup = null;
        this._on_sys_mouseup = null;
        this._on_sys_mousedown = null;
        this._on_sys_mouseenter = null;
        this._on_sys_mouseleave = null;
        this._on_sys_mousemove = null;

        this._on_sys_drag_mousemove = null;

        this._on_sys_mousewheel = null;

        this._on_sys_dragenter = null;
        this._on_sys_dragmove = null;
        this._on_sys_dragleave = null;
        this._on_sys_drop = null;
        this._on_sys_animationstart = null;
        this._on_sys_animationend = null;
        this._on_sys_animationiteration = null;

        this._on_sys_keydown = null;
        this._on_sys_keypress = null;
        this._on_sys_keyup = null;
        this._on_sys_click = null;
        this._on_sys_dblclick = null;
        this._on_sys_contextmenu = null;
        this._on_sys_resize = null;
        this._on_sys_move = null;
        this._on_sys_activate = null;
        this._on_sys_deactivate = null;

        this._on_sys_getminmaxinfo = null;
        this._on_sys_reload = null;
        this._on_sys_syscommand = null;
        this._on_sys_load = null;
        this._on_sys_orientationchange = null;

        this._on_sys_accessibilitygesture = null;
        this._on_sys_accessibilityhover = null;
        // ExtensionAPIv2
        this._on_sys_onextmodule = null;

    };

    //------------------------------------------------------------------------------
    __pWindow.moveBy = function (dx, dy)
    {
        if (this.handle && dx && dy)
        {
            var l = this.left + (dx | 0);
            var t = this.top + (dy | 0);
            nexacro._setWindowHandlePos(this.handle, l, t);
            this.left = nexacro._getContainerHandlePosX(this.handle);
            this.top = nexacro._getContainerHandlePosY(this.handle);
        }
    };

    __pWindow.moveTo = function (l, t)
    {
        if (this.handle)
        {
            if (l === undefined || l === null) l = this.left;
            if (t === undefined || t === null) t = this.top;
            nexacro._setWindowHandlePos(this.handle, l, t);
            this.left = nexacro._getContainerHandlePosX(this.handle);
            this.top = nexacro._getContainerHandlePosY(this.handle);
        }
    };

    __pWindow.setArea = function (l, t, w, h)
    {
        if (this.handle)
        {
            l = (l || this.left);
            t = (t || this.top);
            w = (w || this.width);
            h = (h || this.height);
            nexacro._setWindowHandleArea(this.handle, l, t, w, h);

            this.left = nexacro._getContainerHandlePosX(this.handle);
            this.top = nexacro._getContainerHandlePosY(this.handle);

            this.width = nexacro._getWindowHandleOuterWidth(this.handle);
            this.height = nexacro._getWindowHandleOuterHeight(this.handle);
            this.clientWidth = nexacro._getContainerHandleClientWidth(this.handle);
            this.clientHeight = nexacro._getContainerHandleClientHeight(this.handle);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };
    __pWindow.setSize = function (w, h)
    {
        if (this.handle)
        {
            w = (w || this.width);
            h = (h || this.height);
            nexacro._setWindowHandleSize(this.handle, w, h);
            this.width = nexacro._getWindowHandleOuterWidth(this.handle);
            this.height = nexacro._getWindowHandleOuterHeight(this.handle);
            this.clientWidth = nexacro._getContainerHandleClientWidth(this.handle);
            this.clientHeight = nexacro._getContainerHandleClientHeight(this.handle);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };

    __pWindow.setZIndex = function (zindex)
    {
        if (this.zindex != zindex)
        {
            this.zindex = zindex;
            var handle = this.handle;
            if (handle)
            {
                nexacro._setWindowHandleZIndex(handle, zindex);
            }
        }
    };

    __pWindow.getLeft = function ()
    {
        if (this.handle)
            this.left = nexacro._getContainerHandlePosX(this.handle);
        return this.left;
    };
    __pWindow.getTop = function ()
    {
        if (this.handle)
            this.top = nexacro._getContainerHandlePosY(this.handle);
        return this.top;
    };
    __pWindow.getWidth = function ()
    {
        return this.width;
    };
    __pWindow.getHeight = function ()
    {
        return this.height;
    };

    __pWindow.getClientWidth = function ()
    {
        return this.clientWidth;
    };
    __pWindow.getClientHeight = function ()
    {
        return this.clientHeight;
    };

    __pWindow.setVisible = function (/*visible*/)
    {

    };



    __pWindow.getActiveFrame = function ()
    {
        let frame = this._getLastModalFrame();
        if (frame)
            return frame;

        frame = this.root;
        while (frame && frame.getActiveFrame)
        {
            frame = frame.getActiveFrame();
        }
        return frame;
    };

    __pWindow.getCurrentFocusPaths = function ()
    {
        return this._focus_list;
    };

    __pWindow.addCurrentFocusPaths = function (obj)
    {
        if (this._focus_list == null)
            this._focus_list = [];
        this._focus_list.push(obj);
    };
    __pWindow.clearCurrentFocusPaths = function ()
    {
        if (this._focus_list)
        {
            var obj = this._focus_list.pop();
            while (obj)
            {
                obj = this._focus_list.pop();
            }
            this._focus_list.length = 0;
        }
    };

    // FocusPath에서 obj포함 그 이하를 모두 제거한다.
    __pWindow._removeFromCurrentFocusPath = function (obj, clear_last_focus, new_focus, new_refer_focus)
    {
        if (clear_last_focus === undefined)
            clear_last_focus = true;
        var idx = this._indexOfCurrentFocusPaths(obj);
        if (idx > -1 || (idx == -1 && obj == null))
        {
            // KillFocus처리까지
            var min_idx = (idx > -1) ? idx : 0;
            var focuspath_len = this._getCurrentFocusPathsLength() - 1;
            for (var i = focuspath_len; i >= min_idx; i--)
            {
                var comp = this._focus_list[i];
                if (comp)
                {
                    if (comp._is_alive)
                    {
                        if (comp._is_subcontrol)
                        {
                            var tmp_comp = comp;
                            var alive = true;

                            while (tmp_comp)
                            {
                                if (tmp_comp._is_alive === false)
                                {
                                    alive = false;
                                    break;
                                }
                                tmp_comp = tmp_comp.parent;
                            }

                            if (alive)
                            {
                                comp._changeStatus("focused", false);
                            }
                        }
                        else
                        {
                            comp._changeStatus("focused", false);
                        }
                    }
                    if (idx > -1)
                        --this._focus_list.length;

                    if (comp._is_alive && comp._on_killfocus)
                        comp._on_killfocus(new_focus, new_refer_focus);

                    if (comp.parent && clear_last_focus === true)
                    {
                        // showmodal의 경우 parent를 지정하게 되면 showmodal이 close될때 parent의 _last_focused를 지우게 됨.
                        // 이에 focusPath의 최상단의 경우 물려있는 _last_focused가 focuspath상에서 제거하려는 component와 동일한지 비교하여 같은 경우에만 제거
                        if (i > min_idx || comp.parent._last_focused == comp)
                        {
                            comp.parent._last_focused = null;
                        }
                    }
                }
            }

        }
    };

    __pWindow._indexOfCurrentFocusPaths = function (obj)
    {
        if (this._focus_list)
        {
            return nexacro._indexOf(this._focus_list, obj);
        }

        return -1;
    };

    __pWindow._getCurrentFocusPathsLength = function ()
    {
        if (this._focus_list)
            return this._focus_list.length;
        return 0;
    };

    // visible, enable, enableevent를 무시하고 component를 찾아냄.
    __pWindow.findComponent = function (elem, x, y)
    {
        var tmp;
        if (x === undefined && y === undefined)
        {
            tmp = elem;
            while (tmp && !tmp._is_component)
            {
                tmp = tmp.parent;
            }
            return tmp;
        }
        else
        {
            if (!elem) return [elem, x, y];
            tmp = elem;
            while (tmp && !tmp._is_component)
            {
                x += tmp.left;
                y += tmp.top;
                x -= tmp._scroll_left || 0;
                y -= tmp._scroll_top || 0;
                tmp = tmp.parent;
            }
            if (!tmp) return [tmp, x, y];
            var control_elem = tmp._control_element;
            if (control_elem)
            {
                x -= control_elem.left;
                y -= control_elem.top;
            }
            return [tmp, x, y];
        }
    };

    // 실제 이벤트가 발생할 수 있는 컴포넌트를 찾아냄.
    __pWindow._findComponentForEvent = function (elem, x, y)
    {
        var tmp;
        if (x === undefined && y === undefined)
        {
            tmp = elem;
            while (tmp)
            {
                if (tmp._is_component)
                {
                    if (tmp.visible && tmp._isEnable() && tmp.enableevent)
                        break;
                }
                tmp = tmp.parent;
            }
            return tmp;
        }
        else
        {
            if (!elem) return [elem, x, y];
            tmp = elem;
            var is_passed = false;
            while (tmp)
            {
                if (!tmp._is_component)
                {
                    x += tmp.left;
                    y += tmp.top;
                    x -= tmp._scroll_left || 0;
                    y -= tmp._scroll_top || 0;

                    tmp = tmp.parent;
                }
                else
                {
                    if (tmp.visible && tmp._isEnable() && tmp.enableevent)
                        break;
                    else
                        is_passed = true;
                    x = y = 0;
                    tmp = tmp._control_element.parent_elem;
                }
            }
            if (!tmp) return [tmp, x, y];
            var control_elem = tmp._control_element;
            if (control_elem)
            {
                x -= control_elem.left;
                y -= control_elem.top;
            }
            if (is_passed)
                return [tmp, x, y, true];
            return [tmp, x, y];
        }
    };

    // 공통 parent component를 찾아냄.
    __pWindow.findCommonParentComponent = function (comp1, comp2)
    {
        var comm1 = comp1;
        var comm2 = comp2;

        if (!comm1 || !comm2)
            return null;

        while (comm2 && !comm2._contains(comm1))
        {
            comm2 = comm2.parent;
        }
        return comm2;
    };

    __pWindow._findCommonParentElement = function (elem1, elem2)
    {
        var comm1 = elem1;
        var comm2 = elem2;

        if (!comm1 || !comm2)
            return null;

        while (comm2 && !comm2._contains(comm1))
        {
            comm2 = comm2.parent_elem;
        }
        return comm2;
    };

    __pWindow._findRootElement = function ()
    {
        if (this.root)
            return this.root._control_element;
        return null;
    };

    __pWindow._findPopupElement = function (elem)
    {
        var popup = elem;

        while (popup && !popup._is_popup)
        {
            popup = popup.parent_elem;
        }
        if (popup)
            return popup.linkedcontrol.parent._control_element;
        return popup;
    };

    __pWindow._flashWindow = function (type, count, interval)
    {
        return nexacro._flashWindow(this.handle, type, count, interval);
    };



    __pWindow._closeChildWindows = function (is_close_all)
    {
        let child, child_len, i;
        if (is_close_all)
        {
            const popupframes = nexacro._getPopupFrames(this);
            if (popupframes)
            {
                child_len = popupframes.length;
                for (i = child_len - 1; i >= 0; i--)
                {
                    child = popupframes[i]._window;
                    if (child && child.root && child.root._is_alive)
                    {
                        child._ignore_close_confirm = true;
                        child.root._destroy();
                    }
                }
            }
            // no parent window
            if (!nexacro.isglobalmodule && nexacro._popupframes)
            {
                const _popupframes = nexacro._popupframes;
                if (_popupframes)
                {
                    child_len = _popupframes.length;
                    for (i = child_len - 1; i >= 0; i--)
                    {
                        child = _popupframes[i]._window;
                        if (child && child.root && child.root._is_alive)
                        {
                            child._ignore_close_confirm = true;
                            child.root._destroy();
                        }
                    }
                }

            }
        }
        else
        {
            // destroy My Child window..
            child_len = this._child_list.length;
            for (i = child_len - 1; i >= 0; i--)
            {
                child = this._child_list[i];
                if (!child || child.parent != this) // possible?
                    continue;

                if (child.root && child.root._is_alive)
                {
                    child._ignore_close_confirm = true;
                    child.root._destroy();
                }
            }
        }
    };

    __pWindow._setTitleText = function (titletext)
    {
        if (this.handle)
        {
            return nexacro._setWindowHandleText(this.handle, titletext);
        }
    };

    __pWindow._setStatusText = function (statustext)
    {
        if (this.handle)
        {
            return nexacro._setWindowHandleStatusText(this.handle, statustext);
        }
    };

    __pWindow._resetScroll = function (accessibilityFocusId)
    {
        const app = this.getRootInstance() // chk
        if (app)
        {
            let form;
            if (app.getActiveForm)
                form = app.getActiveForm();
            else
            {
                const env = this._getEnvironment();
                if (env)
                    form = env._getApplication().getActiveForm();
            }

            if (form)
            {
                let focus_comp;
                if (accessibilityFocusId == undefined)
                {
                    focus_comp = form.getFocus();
                }
                else
                {
                    const _window = form._getWindow();
                    focus_comp = _window._accessibility_last_focused_comp;
                }

                if (focus_comp)
                {
                    focus_comp._resetScrollPos(
                        focus_comp,
                        focus_comp._adjust_left,
                        focus_comp._adjust_top,
                        focus_comp._adjust_left + focus_comp._adjust_width,
                        focus_comp._adjust_top + focus_comp._adjust_height
                    );

                    if (focus_comp._getEnvironment()?._p_enableaccessibility)
                    {
                        if (focus_comp._getEnvironment()?._a11ytype == 5)
                            focus_comp._setAccessibilityNotifyEvent();
                    }
                }
            }
        }
    };

    __pWindow._setCaptureLock = function (comp, capture_mouse, capture_key)
    {
        var ar = this._capture_complist;
        if (ar.length > 0)
        {
            var last_capture_info = ar[ar.length - 1];

            // WaitCursor가 나와있는데 Popup이 뜨는 경우
            if (last_capture_info[0] instanceof nexacro._WaitControl)
            {
                // insert
                ar.length = ar.length + 1;
                ar[ar.length - 1] = ar[ar.length - 2];
                ar[ar.length - 2] = [comp, capture_mouse, capture_key];
                return;
            }
        }

        ar.push([comp, capture_mouse, capture_key]);
    };

    __pWindow._releaseCaptureLock = function (comp)
    {
        var ar = this._capture_complist;
        var len = ar.length;
        for (var i = len - 1; i >= 0; i--)
        {
            if (ar[i][0] == comp)
            {
                ar[i][0] = null;
                // pop
                ar.splice(i, 1);
                break;
            }
        }
    };

    __pWindow._getCaptureComp = function (capture_mouse, capture_key, event_target_comp)
    {
        var ar = this._capture_complist;
        var len = ar.length;
        var comp;
        for (var i = len - 1; i >= 0; i--)
        {
            var info = ar[i];
            if (capture_mouse === true && info[1] === true)
            {
                comp = info[0];
                break;
            }
            if (capture_key === true && info[2] === true)
            {
                comp = info[0];
                break;
            }
        }

        if (comp)
        {
            // 이벤트 대상이 캡쳐 컴포넌트의 child인 경우, 그냥 이벤트 대상을 리턴. 직접 처리
            if (comp._contains(event_target_comp))
                return event_target_comp;
            return comp;
        }

        return null;
    };

    __pWindow._isContainsComp = function (capture_mouse, capture_key, event_target_comp)
    {
        var ar = this._capture_complist;
        var len = ar.length;

        for (var i = len - 1; i >= 0; i--)
        {
            var info = ar[i];
            if ((capture_mouse === info[1]) && (capture_key === info[2]) && (event_target_comp == info[0]))
            {
                return true;
            }
        }

        return false;
    };

    __pWindow._getLastModalFrame = function ()
    {
        if (this._modal_frame_stack.length > 0)
        {
            var modal_info = this._modal_frame_stack[this._modal_frame_stack.length - 1];
            return modal_info[0];
        }

        return null;
    };

    __pWindow._getComponentLayerInfo = function (comp)
    {
        var form = comp ? comp._refform : null;
        var frame = form ? form.getOwnerFrame() : null;
        if (!frame)
            return null;

        frame = frame._getRootLayerFrame();
        var is_modal = (frame._window_type == 1 || frame._window_type == 4);

        var layer_info = {};
        layer_info.frame = frame;
        layer_info.is_modal = is_modal;
        layer_info.popup_zindex = nexacro._zindex_popup;

        var win = this;
        if (win._getRootWindow)
            win = win._getRootWindow();

        var modal_frame_stack = win._modal_frame_stack;
        layer_info.ref_first_modal_frame = (modal_frame_stack.length > 0) ? modal_frame_stack[0][0] : null;
        if (is_modal)
        {
            for (var i = 0; i < modal_frame_stack.length; i++)
            {
                if (modal_frame_stack[i][0] == frame)
                {
                    layer_info.popup_zindex = modal_frame_stack[i][1];
                    break;
                }
            }
        }

        return layer_info;
    };

    // 활성화된 Layer에 속한 컴포넌트인지 판단한다.
    __pWindow._isActiveLayerComponent = function (comp)
    {
        var form = comp ? comp._refform : null;
        var frame = form ? form.getOwnerFrame() : null;
        if (!frame)
            return false;

        var win = this;
        if (win._getRootWindow)
            win = win._getRootWindow();

        frame = frame._getRootLayerFrame();
        //  var is_modal = (frame._window_type == 1 || frame._window_type == 4);

        // modal이 없다고 판단.
        var modal_frame_stack = win._modal_frame_stack;
        if (modal_frame_stack.length === 0)
            return true;

        // modal이 있으면
        if (frame == win._getLastModalFrame())
            return true;

        return false;
    };

    __pWindow._getPopupFrames = function ()
    {
        return nexacro._getPopupFrames(this);
    };

    // 접근성 환경에서 keydown 체크하는 함수 (104763)
    // 조합키와 IME 상태에서 상/하방향키 입력은 체크 제외(alt, ctrl, shift, meta, ArrowUp(IME), ArrowDown(IME))
    __pWindow._isFireSysKeydown = function (keycode, code)
    {
        var ret = (keycode != nexacro.Event.KEY_ALT && keycode != nexacro.Event.KEY_CTRL && keycode != nexacro.Event.KEY_SHIFT && keycode != nexacro.Event.KEY_META);
        if (ret && keycode == nexacro.KeyCode_ImeInput)
        {
            ret = (code != "ArrowUp" && code != "ArrowDown");
        }
        return ret;
    };

    //------------------------------------------------------------------------------
    // for xcss group
    __pWindow._refreshRootCSSVariables = function ()
    {
        const env = this._getEnvironment();
        if (!env)
            return;

        const convert_map = env._css_predefine_special_convert_map;
        if (!convert_map)
            return;

        const doc = typeof document !== "undefined" ? document : undefined;
        const rootNode = nexacro.isglobalmodule ? doc?.documentElement : this.handle;
        if (!rootNode)
            return;

        for (const id of convert_map.keys())
        {
            const convertInfo = convert_map.get(id);
            if (convertInfo)
            {
                const value = env._getCSSPredefineValue(id);
                if (value)
                {
                    nexacro._updateRootCSSVariable(rootNode.style, id, convertInfo.type, value);
                }
            }
        };
    };

    __pWindow._setRootCSSClass = function ()
    {
        const env = this._getEnvironment();
        const app = env._getApplication();
        if (!env || !app)
            return;

        const doc = typeof document !== "undefined" ? document : undefined;
        const rootNode = nexacro.isglobalmodule ? doc?.documentElement : this.handle;
        if (!rootNode)
            return;

        if (env.appkey)
            rootNode.classList.toggle(env.appkey, true);

        const prevCSSClassSet = this._settedCSSClass;
        const postCSSClassSet = new Set([...app._xcssgrouplist]);
        this._xcssgroup_autoselector.applyTo(postCSSClassSet);

        const changed = prevCSSClassSet.size !== postCSSClassSet.size || [...prevCSSClassSet].some(v => !postCSSClassSet.has(v));
        if (changed)
        {
            for (const cls of postCSSClassSet) 
            {
                if (!prevCSSClassSet.has(cls)) rootNode.classList.add(cls);
            }
            for (const cls of prevCSSClassSet) 
            {
                if (!postCSSClassSet.has(cls)) rootNode.classList.remove(cls);
            }
            this._settedCSSClass = postCSSClassSet;

            this._refreshRootCSSVariables();
            nexacro._notifyRootCssClassUpdated([...prevCSSClassSet].join(","), [...postCSSClassSet].join(","));
        }
    };

    __pWindow._resetXcssGroupAutoSelector = function ()
    {
        this._xcssgroup_autoselector.reset();
    };

    __pWindow._onBroadcast = function ()
    {
        const messageHandler = (e) =>
        {
            if (e.data?.cmd === 'XcssGroupUpdate')
            {
                this._setRootCSSClass();
            }
            else if (e.data?.cmd === 'XcssGroupFilterUpdate')
            {
                this._resetXcssGroupAutoSelector();
            }
        };

        const env = this._getEnvironment();
        const app = env?._getApplication();
        const channel = nexacro._getBroadcastChannel(env, app);
        if (channel)
            channel.addEventListener('message', messageHandler);
    };

    //------------------------------------------------------------------------------
    // for Event Handlers
    nexacro._use_offset = 1;
    __pWindow._lbuttondown_wx = 0;
    __pWindow._lbuttondown_wy = 0;
    __pWindow._click_cancel = false;
    __pWindow._keydown_element = null;
    __pWindow._keydown_element_list = new nexacro.Collection();
    __pWindow._is_hotkey = false;



    __pWindow._on_default_sys_popstate = function (state)
    {
        const env = this._getEnvironment();
        env._firePopStateEvent(state);
    };

    __pWindow._on_default_sys_message = function (id)
    {
        if (typeof (id) != "string")
            return;

        var e, data;
        var id_arr = id.split("--boundary--");
        if (id_arr.length > 1)
        {
            // cors message
            data = this._postmsg_data_que.shift();
            if (data)
            {
                e = { id: data.id, message: id_arr[1], data: data.userdata };

                data.func.call(data.target, e);
            }
        }
        else
        {
            // standard message
            data = this._postmsg_data_que.shift();
            if (data)
            {
                e = { id: data.id, data: data.userdata };

                data.func.call(data.target, e);
            }
        }
    };

    __pWindow._on_default_sys_lbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        if (this._getEnvironment()?._p_enabletouchevent && strButton == "touch") return;

        this._cur_ldown_elem = elem; //save elem at lbuttondown.

        var ret, is_capture, popup_len;
        var comp = this.findComponent(elem);
        if (elem && elem._is_track)
        {
            popup_len = nexacro._current_popups.length;
            if (popup_len > 0)
            {
                is_capture = nexacro._current_popups[0]._track_capture;
                nexacro._checkClosePopupComponent(comp, false);

                if (!is_capture)
                {
                    this._click_cancel = false;
                }
                else
                {
                    if (popup_len != nexacro._current_popups.length)
                    {
                        this._click_cancel = true;
                        return false;
                    }
                }
            }
            else
            {
                this._click_cancel = false;
            }

            nexacro._setTrackInfo(this, elem, windowX, windowY, screenX, screenY);
        }
        else
        {
            if (comp)
            {
                popup_len = nexacro._current_popups.length;
                if (popup_len > 0)
                {
                    is_capture = nexacro._current_popups[0]._track_capture;
                    nexacro._checkClosePopupComponent(comp, true);

                    if (!is_capture)
                    {
                        this._click_cancel = false;
                    }
                    else
                    {
                        if (popup_len != nexacro._current_popups.length)
                        {
                            this._click_cancel = true;
                            return false;
                        }
                    }
                }
                else
                {
                    this._click_cancel = false;
                }

                var _win = comp._getWindow();
                _win._curWindowX = windowX; //save x at lbuttondown for track
                _win._curWindowY = windowY; //save x at lbuttondown for track
                _win._testX = screenX; //save x at lbuttondown for track
                _win._testY = screenY; //save x at lbuttondown for track

                var elem_pos, canvasX, canvasY;
                if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                    elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }

                var capture_comp = this._getCaptureComp(true, false, comp);
                var firecur_comp = capture_comp ? capture_comp : comp;

                ret = firecur_comp._on_lbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            }
        }

        return ret;
    };

    __pWindow._on_touch_to_lbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        this._cur_ldown_elem = elem; //save elem at lbuttondown.

        var is_capture, popup_len;
        var comp = this.findComponent(elem);
        if (elem && elem._is_track)
        {
            popup_len = nexacro._current_popups.length;
            if (popup_len > 0)
            {
                is_capture = nexacro._current_popups[0]._track_capture;
                nexacro._checkClosePopupComponent(comp, false);

                if (!is_capture)
                {
                    this._click_cancel = false;
                }
                else
                {
                    if (popup_len != nexacro._current_popups.length)
                    {
                        this._click_cancel = true;
                        return false;
                    }
                }
            }
            else
            {
                this._click_cancel = false;
            }

            nexacro._setTrackInfo(this, elem, windowX, windowY);
        }
        else
        {
            if (comp)
            {
                popup_len = nexacro._current_popups.length;
                if (popup_len > 0)
                {
                    is_capture = nexacro._current_popups[0]._track_capture;
                    nexacro._checkClosePopupComponent(comp, true);

                    if (!is_capture)
                    {
                        this._click_cancel = false;
                    }
                    else
                    {
                        if (popup_len != nexacro._current_popups.length)
                        {
                            this._click_cancel = true;
                            return false;
                        }
                    }
                }
                else
                {
                    this._click_cancel = false;
                }

                var _win = comp._getWindow();
                _win._curWindowX = windowX; //save x at lbuttondown for track
                _win._curWindowY = windowY; //save x at lbuttondown for track

                var elem_pos, canvasX, canvasY;
                if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                    elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }

                var capture_comp = this._getCaptureComp(true, false, comp);
                var firecur_comp = capture_comp ? capture_comp : comp;

                firecur_comp._on_touch_lbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);

                return { cp: comp, cX: canvasX, cY: canvasY };
            }
        }
    };

    __pWindow._on_lbuttondown = function (/*elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_rbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        this._cur_rdown_elem = elem; //save elem at lbuttondown.

        var ret;
        var comp = this.findComponent(elem);
        if (comp)
        {
            var popup_len = nexacro._current_popups.length;
            if (popup_len > 0)
            {
                var is_capture = nexacro._current_popups[0]._track_capture;
                nexacro._checkClosePopupComponent(comp);

                if (!is_capture)
                {
                    this._click_cancel = false;
                }
                else
                {
                    if (popup_len != nexacro._current_popups.length)
                    {
                        this._click_cancel = true;
                        return false;
                    }
                }
            }
            else
            {
                this._click_cancel = false;
            }

            var elem_pos, canvasX, canvasY;
            if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            ret = firecur_comp._on_rbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
        }

        return ret;
    };

    __pWindow._on_rbuttondown = function (/*elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_lbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        if (this._click_cancel) return;

        if (this._getEnvironment()?._p_enabletouchevent && strButton == "touch") return;

        var ret;
        var dragInfo = nexacro._cur_drag_info;
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;
        var extratrackInfo = nexacro._cur_extra_track_info;
        var comp, elem_pos, canvasX, canvasY;

        if (elem && dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem);
            var ischild = false;
            if (dragInfo.target && dragInfo.target._contains)
                ischild = dragInfo.target._contains(comp);
            if ((comp && !dragInfo.isSelfAction) || comp && (ischild && dragInfo.isSelfAction))
            {
                if (nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                    elem_pos = nexacro._getElementXYInWindow(elem.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }

                comp._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            }
        }

        if (repeatInfo && repeatInfo.targetwin == this)
        {
            if (repeatInfo._timer)
            {
                var handle = nexacro._getWindowHandle(this.handle);
                nexacro._clearSystemTimer(handle, repeatInfo._timer);
            }
            repeatInfo.distX = windowX - repeatInfo.startX;
            repeatInfo.distY = windowY - repeatInfo.startY;
            repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
            nexacro._cur_repeat_info = null;
        }

        if (trackInfo && trackInfo.targetwin == this)
        {
            trackInfo.distX = windowX - trackInfo.startX;
            trackInfo.distY = windowY - trackInfo.startY;
            trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);

            nexacro._initTrackInfo();
        }

        if (extratrackInfo)
        {
            extratrackInfo.distX = windowX - extratrackInfo.startX;
            extratrackInfo.distY = windowY - extratrackInfo.startY;

            if (extratrackInfo.target._is_alive)
                extratrackInfo.target._on_end_extratrack(extratrackInfo.distX, extratrackInfo.distY, extratrackInfo.data);

            nexacro._cur_extra_track_info = null;
        }

        var upelem = elem;
        elem = this._cur_ldown_elem;
        comp = this.findComponent(elem);
        if (comp)
        {
            if (comp._control_element == upelem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;
            var firecur_rootcomp = firecur_comp._getRootComponent(firecur_comp);

            // Logical onclick Event 
            // defaultprevented 처리 하면 default action인 click을 제어한다.
            var checkup_comp = firecur_comp;
            if (checkup_comp._is_subcontrol)
            {
                checkup_comp = checkup_comp._getFromComponent(checkup_comp);
            }

            ret = firecur_comp._on_lbuttonup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, upelem, metaKey);
            // _on_click -> browser native onclick  
            if (firecur_comp._is_alive)
                firecur_comp._on_last_lbuttonup();
            else if (firecur_comp._is_subcontrol && firecur_rootcomp)
                firecur_rootcomp._on_last_lbuttonup();
        }

        nexacro._initDragInfo();

        // this._cur_ldown_elem = null; //clear elem at lbuttondown. -> move to onclick        
        this._curWindowX = null;
        this._curWindowY = null;

        return ret;
    };

    __pWindow._on_default_sys_click = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        let ret;
        let comp = this.findComponent(elem);
        let downelem = this._cur_ldown_elem || this._cur_touch_elem;

        var downcomp = this.findComponent(downelem);
        if ((downcomp && downcomp._is_track) || (comp !== downcomp && !comp._is_subcontrol))
        {
            this._cur_ldown_elem = null;
            return false;
        }


        var elem_pos, canvasX, canvasY;
        if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
        {
            canvasX = offsetX;
            canvasY = offsetY;
        }
        else
        {
            // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
            elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
            canvasX = windowX - elem_pos[0];
            canvasY = windowY - elem_pos[1];
        }

        var capture_comp = this._getCaptureComp(true, false, comp);
        var firecur_comp = capture_comp ? capture_comp : comp;

        if (!firecur_comp.onlbuttonup || (firecur_comp.onlbuttonup && !firecur_comp.onlbuttonup.defaultprevented))
            ret = firecur_comp._on_click(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);//, downcomp);

        this._cur_ldown_elem = null;

        return ret;
    };

    __pWindow._on_click = function (/*elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_rbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        var comp = this.findComponent(elem);
        if (comp)
        {
            var elem_pos, canvasX, canvasY;
            if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            firecur_comp._on_rbuttonup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, elem, metaKey);
        }

        this._cur_rdown_elem = null;
    };

    __pWindow._on_rbuttonup = function (/*elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_mouseup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;
        var comp = this.findComponent(elem);
        if (comp)
        {
            var elem_pos, canvasX, canvasY;
            if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            ret = firecur_comp._on_mouseup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, elem, metaKey);
        }
        this._cur_mdown_elem = null;

        return ret;
    };

    __pWindow._on_default_sys_mousedown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;
        this._cur_mdown_elem = elem; //save elem at lbuttondown.

        var comp = this.findComponent(elem);
        if (comp)
        {
            var elem_pos, canvasX, canvasY;
            if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            ret = firecur_comp._on_mousedown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
        }

        return ret;
    };

    __pWindow._on_default_sys_mousemove = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        //nexacro._gap_client_height = screenY - (windowY * nexacro._getDevicePixelRatio(elem));
        //nexacro._gap_client_width = screenX - (windowX * nexacro._getDevicePixelRatio(elem));


        var ret, track_comp, extratrack_comp;
        var dragInfo = nexacro._cur_drag_info;
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;
        var extratrackInfo = nexacro._cur_extra_track_info;
        var comp, evt_elem = elem;
        var elem_pos, canvasX, canvasY;
        var useelemhandle = true;
        var is_ext_contents = false;

        if (dragInfo && dragInfo.targetwin == this)
        {
            var xdeltavalue = windowX - dragInfo.startX;
            var ydeltavalue = windowY - dragInfo.startY;
            if (!dragInfo.isDragging)
            {
                if (windowX != dragInfo.startX || windowY != dragInfo.startY)
                {
                    elem = dragInfo.target_elem;
                    comp = this.findComponent(elem);
                    is_ext_contents = comp instanceof nexacro.HTMLComponent;

                    if (!elem.handle)
                    {
                        canvasX = windowX;
                        canvasY = windowY;
                        useelemhandle = false;
                    }


                    if (comp)
                    {
                        if (useelemhandle)
                        {
                            if (comp._control_element == evt_elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined && !is_ext_contents)
                            {
                                canvasX = offsetX;
                                canvasY = offsetY;
                            }
                            else
                            {
                                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                                canvasX = windowX - elem_pos[0];
                                canvasY = windowY - elem_pos[1];
                            }
                        }
                        ret = comp._on_drag(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                        if (ret && ret[0] === true && nexacro._cur_drag_info)
                        {
                            dragInfo.isDragging = ret[0];
                            dragInfo.target = ret[1];
                            dragInfo.referTarget = ret[2];
                            dragInfo.data = ret[3];
                            dragInfo.userdata = ret[4];
                            if (trackInfo && trackInfo.targetwin == this && trackInfo.target && trackInfo.target._is_tracking == true)
                            {
                                if (trackInfo.target._getRootComponent)
                                    track_comp = trackInfo.target._getRootComponent(trackInfo.target);
                                else
                                    track_comp = comp;

                                if (track_comp._isRtl())
                                {
                                    trackInfo.distX = trackInfo.startX - windowX;
                                    trackInfo.distY = windowY - trackInfo.startY;
                                }
                                else
                                {
                                    trackInfo.distX = windowX - trackInfo.startX;
                                    trackInfo.distY = windowY - trackInfo.startY;
                                }

                            }
                            comp._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, xdeltavalue, ydeltavalue, metaKey);
                            var c = comp;
                            var is_scroll = false;

                            while (c)
                            {
                                if (c instanceof nexacro.ScrollBarControl)
                                {
                                    is_scroll = true;
                                    break;
                                }
                                c = c.parent;
                            }

                            if (!is_scroll)
                                return;
                        }
                    }
                    nexacro._initDragInfo();
                }
            }
            else // (!dragInfo.isDragging)
            {
                comp = this.findComponent(elem);
                is_ext_contents = comp instanceof nexacro.HTMLComponent;
                var ischild = false;
                if (dragInfo.target && dragInfo.target._contains)
                    ischild = dragInfo.target._contains(comp);
                if ((comp && !dragInfo.isSelfAction) || comp && (ischild && dragInfo.isSelfAction))
                {
                    if (comp._control_element == evt_elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined && !is_ext_contents)
                    {
                        canvasX = offsetX;
                        canvasY = offsetY;
                    }
                    else
                    {
                        // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                        elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                        canvasX = windowX - elem_pos[0];
                        canvasY = windowY - elem_pos[1];
                    }
                    if (trackInfo && trackInfo.targetwin == this && trackInfo.target && trackInfo.target._is_tracking == true)
                    {
                        if (trackInfo.target._getRootComponent)
                            track_comp = trackInfo.target._getRootComponent(trackInfo.target);
                        else
                            track_comp = comp;

                        if (track_comp._isRtl())
                        {
                            trackInfo.distX = trackInfo.startX - windowX;
                            trackInfo.distY = windowY - trackInfo.startY;
                        }
                        else
                        {
                            trackInfo.distX = windowX - trackInfo.startX;
                            trackInfo.distY = windowY - trackInfo.startY;
                        }

                    }
                    comp._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, xdeltavalue, ydeltavalue, metaKey);
                }
            }
            if (!trackInfo || !trackInfo.use_drag_track)
                return;
        }

        if (repeatInfo && repeatInfo.targetwin == this)
        {
            repeatInfo.distX = windowX - repeatInfo.startX;
            repeatInfo.distY = windowY - repeatInfo.startY;
            repeatInfo.canvasX = repeatInfo.startCanvasX + repeatInfo.distX;
            repeatInfo.canvasY = repeatInfo.startCanvasY + repeatInfo.distY;
        }

        comp = this.findComponent(elem);
        is_ext_contents = comp instanceof nexacro.HTMLComponent;

        if (trackInfo && trackInfo.targetwin == this)
        {
            if (trackInfo.target && trackInfo.target._getRootComponent)
                track_comp = trackInfo.target._getRootComponent(trackInfo.target);
            else
                track_comp = comp;

            if (track_comp && track_comp._isRtl())
            {
                trackInfo.distX = trackInfo.startX - windowX;
                trackInfo.distY = windowY - trackInfo.startY;
            }
            else
            {
                var target = trackInfo.target;
                if (nexacro._macOSWebView && target instanceof nexacro.TitleBarControl && target.parent._window_type != 1)
                {
                    trackInfo.distX = screenX - trackInfo.screenX;
                    trackInfo.distY = screenY - trackInfo.screenY;
                }
                else
                {
                    trackInfo.distX = windowX - trackInfo.startX;
                    trackInfo.distY = windowY - trackInfo.startY;
                }
            }

            trackInfo.target._on_movetrack(trackInfo.distX, trackInfo.distY, trackInfo.data, windowX, windowY);
        }

        if (extratrackInfo)
        {
            if (extratrackInfo.target && extratrackInfo.target._getRootComponent)
                extratrack_comp = extratrackInfo.target._getRootComponent(extratrackInfo.target);
            else
                extratrack_comp = comp;

            if (extratrack_comp && extratrack_comp._isRtl())
            {
                extratrackInfo.distX = extratrackInfo.startX - windowX;
                extratrackInfo.distY = windowY - extratrackInfo.startY;
            }
            else
            {
                extratrackInfo.distX = windowX - extratrackInfo.startX;
                extratrackInfo.distY = windowY - extratrackInfo.startY;
            }

            if (extratrackInfo.target._is_alive)
                extratrackInfo.target._on_move_extratrack(comp, windowX, windowY, extratrackInfo.distX, extratrackInfo.distY, screenX, screenY);
        }

        if (trackInfo && trackInfo.use_drag_track)
            return;

        if (comp && comp._is_alive)
        {
            if (comp._control_element == evt_elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined && !is_ext_contents)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            // for waitcomponent
            var form = firecur_comp.parent;
            while (form)
            {
                if (form._is_form)
                    break;

                form = form._last_focused;
            }
            if (form)
                form._obj_mousemove = firecur_comp;

            ret = firecur_comp._on_mousemove(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);

            if (form)
                form._obj_mousemove = null;
        }
        return ret;
    };

    __pWindow._on_mousemove = function (/*elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_sys_repeat = function ()
    {
        var handle = nexacro._getWindowHandle(this.handle);
        var repeatInfo = nexacro._cur_repeat_info;
        if (repeatInfo && repeatInfo.targetwin == this)
        {
            var refer_comp, comp;
            if (repeatInfo.step == "first")
            {
                if (repeatInfo._timer)
                {
                    nexacro._clearSystemTimer(handle, repeatInfo._timer);
                }
                repeatInfo.step = "";
                refer_comp = repeatInfo.refer_comp;
                comp = repeatInfo.target;
                if (refer_comp === comp || comp._contains(refer_comp))
                {
                    comp._on_repeat(refer_comp, repeatInfo.canvasX, repeatInfo.canvasY, repeatInfo.data);
                }
                repeatInfo._timer = nexacro._setSystemTimer(handle, nexacro._cur_repeat_info._repeatfunc, 75);
            }
            else
            {
                refer_comp = repeatInfo.refer_comp;
                comp = repeatInfo.target;
                if (refer_comp === comp || comp._contains(refer_comp))
                {
                    comp._on_repeat(refer_comp, repeatInfo.canvasX, repeatInfo.canvasY, repeatInfo.data);
                }
            }
        }
    };

    __pWindow._on_default_sys_dblclick = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;

        var firecur_comp = this._findComponentForEvent(elem);
        var capture_comp = this._getCaptureComp(true, false, firecur_comp);

        if (firecur_comp && (strButton == "lbutton" || strButton == "none"))
        {
            var elem_pos, canvasX, canvasY;
            if (firecur_comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(firecur_comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            if (capture_comp)
                ret = capture_comp._on_dblclick(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            else
                ret = firecur_comp._on_dblclick(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
        }
        return ret;
    };

    __pWindow._on_dblclick = function (/*elem, strButton, altKey, ctrlKey, shiftKey, screenX, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_mouseenter = function (elem, from_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;
        var dragInfo = nexacro._cur_drag_info;
        var comp, from_comp;

        comp = this.findComponent(elem);
        from_comp = this.findComponent(from_elem);

        if (comp && comp != from_comp)
        {
            /* mouse leave와 동작 맞춤 */
            //var capture_comp = this._getCaptureComp(true, false, comp);
            //var firecur_comp = capture_comp ? capture_comp : comp;
            var firecur_comp = comp;
            var canvasX = 0;
            var canvasY = 0;
            var elem_pos;

            var cur_elem = firecur_comp._control_element;
            if (cur_elem && cur_elem.handle)
            {
                if (cur_elem == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                    elem_pos = nexacro._getElementXYInWindow(cur_elem.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }
                var isdragaction = true;
                var ischild = false;
                if (dragInfo && dragInfo.isDragging)
                {
                    if (dragInfo.target && dragInfo.target._contains)
                        ischild = dragInfo.target._contains(firecur_comp);
                    isdragaction = ((!dragInfo.isSelfAction) || (ischild && dragInfo.isSelfAction));
                }

                if (dragInfo && dragInfo.isDragging && dragInfo.targetwin == this && isdragaction)
                    ret = firecur_comp._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                else
                    ret = firecur_comp._on_mouseenter(elem, from_comp, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            }
        }
        return ret;
    };

    __pWindow._on_mouseenter = function (/*elem, from_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_mouseleave = function (elem, to_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;
        var dragInfo = nexacro._cur_drag_info;
        var comp, to_comp;

        comp = this.findComponent(elem);
        to_comp = this.findComponent(to_elem);

        if (comp && comp != to_comp)
        {
            //var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = comp;
            // var firecur_comp = capture_comp ? capture_comp : comp;
            var canvasX = 0;
            var canvasY = 0;
            var elem_pos;

            var cur_elem = firecur_comp._control_element;
            if (cur_elem && cur_elem.handle)
            {
                if (cur_elem == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                    elem_pos = nexacro._getElementXYInWindow(cur_elem.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }
                var isdragaction = true;
                var ischild = false;
                if (dragInfo && dragInfo.isDragging)
                {
                    if (dragInfo.target && dragInfo.target._contains)
                        ischild = dragInfo.target._contains(firecur_comp);
                    isdragaction = ((!dragInfo.isSelfAction) || (ischild && dragInfo.isSelfAction));
                }
                if (dragInfo && dragInfo.isDragging && dragInfo.targetwin == this && isdragaction)
                    ret = firecur_comp._on_dragleave(elem, to_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                else
                    ret = firecur_comp._on_mouseleave(elem, to_comp, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            }
        }
        return ret;
    };

    __pWindow._on_mouseleave = function (/*elem, toelem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_mousewheel = function (elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret;

        var firecur_comp = this._findComponentForEvent(elem);
        var capture_comp = this._getCaptureComp(true, false, firecur_comp);

        if (firecur_comp)
        {
            var elem_pos, canvasX, canvasY;
            if (firecur_comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
            {
                canvasX = offsetX;
                canvasY = offsetY;
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                elem_pos = nexacro._getElementXYInWindow(firecur_comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1];
            }

            if (capture_comp)
                ret = capture_comp._on_mousewheel(elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
            else
                ret = firecur_comp._on_mousewheel(elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
        }

        return ret;
    };


    __pWindow._on_mousewheel = function (/*elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_dragenter = function (elem, fromElem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, filelist, metaKey)
    {
        var ret;

        if (elem)
        {
            var comp = this.findComponent(elem);
            var from_comp = this.findComponent(fromElem);
            if (comp && comp != from_comp)
            {
                var _win = comp._getWindow();

                var elem_pos, canvasX, canvasY;
                if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                {
                    canvasX = offsetX;
                    canvasY = offsetY;
                }
                else
                {
                    elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                    canvasX = windowX - elem_pos[0];
                    canvasY = windowY - elem_pos[1];
                }

                if (comp._isRtl())
                {
                    canvasX = elem.width - canvasX;
                }

                var dragInfo = nexacro._cur_drag_info;
                if (dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
                {
                    dragInfo.isDragover = false;

                    if (!dragInfo.filelist)
                        dragInfo.filelist = nexacro._convertVirtualFileList(filelist);

                    ret = comp._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                }
                else
                {
                    nexacro._setDragInfo(_win, elem, windowX, windowY, windowX, windowY, null, null, nexacro._convertVirtualFileList(filelist), "file");

                    dragInfo = nexacro._cur_drag_info;
                    dragInfo.isDragging = true;

                    ret = comp._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                }
            }
        }

        return ret;
    };

    __pWindow._on_dragenter = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_dragleave = function (elem, toElem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, filelist, metaKey)
    {
        var ret;

        if (elem)
        {
            var comp = this.findComponent(elem);
            var to_comp = this.findComponent(toElem);
            var dragInfo = nexacro._cur_drag_info;

            if (comp && comp != to_comp && (dragInfo && dragInfo.targetwin == this))
            {
                dragInfo.isDragover = false;

                var cur_elem = comp._control_element;
                if (cur_elem && cur_elem.handle)
                {
                    var elem_pos, canvasX, canvasY;
                    if (cur_elem == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                    {
                        canvasX = offsetX;
                        canvasY = offsetY;
                    }
                    else
                    {
                        elem_pos = nexacro._getElementXYInWindow(cur_elem.handle);
                        canvasX = windowX - elem_pos[0];
                        canvasY = windowY - elem_pos[1];
                    }

                    if (dragInfo.filelist)
                    {
                        for (var i = 0; i < dragInfo.filelist.length; i++)
                        {
                            var file = dragInfo.filelist[i];
                            file.close();
                        }
                        dragInfo.filelist = null;
                    }

                    ret = comp._on_dragleave(elem, to_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                }
            }
        }

        return ret;
    };

    __pWindow._on_dragleave = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_dragover = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, filelist, metaKey)
    {
        if (elem)
        {
            var comp = this.findComponent(elem);
            if (comp)
            {
                var dragInfo = nexacro._cur_drag_info;
                if (dragInfo && dragInfo.targetwin == this)
                {
                    dragInfo.isDragover = true;

                    // 좌표 비교후 dragmove
                    var elem_pos, canvasX, canvasY;
                    if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                    {
                        canvasX = offsetX;
                        canvasY = offsetY;
                    }
                    else
                    {
                        // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                        elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                        canvasX = windowX - elem_pos[0];
                        canvasY = windowY - elem_pos[1];
                    }

                    if (comp._isRtl())
                    {
                        canvasX = elem.width - canvasX;
                    }

                    if (dragInfo.currX != windowX || dragInfo.currY != windowY)
                    {
                        dragInfo.currX = windowX;
                        dragInfo.currY = windowY;

                        if (!dragInfo.filelist)
                            dragInfo.filelist = nexacro._convertVirtualFileList(filelist);

                        comp._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                    }
                }
            }
        }

        return false;
    };

    __pWindow._on_dragmove = function ()
    {
        // dragmove == dragover
        return true;
    };

    __pWindow._on_default_sys_drop = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, filelist, metaKey)
    {
        var ret;
        var is_promise = false;
        if (elem)
        {
            var comp = this.findComponent(elem);
            if (comp)
            {
                var dragInfo = nexacro._cur_drag_info;
                if (dragInfo && dragInfo.targetwin == this)
                {
                    var elem_pos, canvasX, canvasY;
                    if (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined)
                    {
                        canvasX = offsetX;
                        canvasY = offsetY;
                    }
                    else
                    {
                        elem_pos = nexacro._getElementXYInWindow(elem.handle);
                        canvasX = windowX - elem_pos[0];
                        canvasY = windowY - elem_pos[1];
                    }

                    // DataTransferItemList/FileList 구분: 'items' 객체에만 존재하는 add, remove, clear와 같은 메서드의 존재 여부
                    if (filelist && (typeof filelist.add === 'function' && typeof filelist.clear === 'function'))
                    {
                        is_promise = true;
                        nexacro._getVirtualFileList(filelist)
                            .then(virtualFiles =>
                            {
                                dragInfo.filelist = virtualFiles;

                            })
                            .catch(error =>
                            {
                                dragInfo.filelist = null;
                            })
                            .finally(() =>
                            {
                                ret = comp._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);
                                nexacro._initDragInfo();

                                return ret;

                            });
                    }
                    else 
                    {
                        if (!dragInfo.filelist)
                            dragInfo.filelist = nexacro._convertVirtualFileList(filelist);

                        ret = comp._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, metaKey);

                        nexacro._initDragInfo();
                    }
                }
            }
        }
        if (is_promise)
            return;
        return ret;
    };

    __pWindow._on_drop = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_animationstart = function (elem, animationName, elapsedTime)
    {
        var comp = this.findComponent(elem);
        if (comp)
        {
            return comp._on_animationstart(elem, animationName, elapsedTime);
        }
        return undefined;
    };

    __pWindow._on_animationstart = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_animationend = function (elem, animationName, elapsedTime)
    {
        var comp = this.findComponent(elem);
        if (comp)
        {
            return comp._on_animationend(elem, animationName, elapsedTime);
        }
        return undefined;
    };

    __pWindow._on_animationend = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_animationiteration = function (elem, animationName, elapsedTime)
    {
        var comp = this.findComponent(elem);
        if (comp)
        {
            return comp._on_animationiteration(elem, animationName, elapsedTime);
        }
        return undefined;
    };

    __pWindow._on_animationiteration = function ()
    {
        return true;
    };

    __pWindow._on_default_sys_keydown = function (elem, keycode, altKey, ctrlKey, shiftKey, metaKey)
    {
        // TODO tab키처리 등. RT버젼의 Pretranslate처리를 분리해야함.
        //      tab키 이동시에도 컴포넌트 onkeydown을 거친 후 form의 onkeydown에서 처리가 됨.
        //      호출순서가 하->상 인지 상->하 인지 확인 필요.
        //
        //      참고로 Pretranslate는 Keydown만 처리하면 됨. 
        // var ret = this._on_pretranslate_keydown()

        var ret;

        // IME 체크 위해 Platfotm_HTML5.js 이동(104763)
        // 조합키는 체크 제외 (alt, ctrl, shift, meta)
        // this._is_fire_sys_keydown = (keycode != nexacro.Event.KEY_ALT && keycode != nexacro.Event.KEY_CTRL && keycode != nexacro.Event.KEY_SHIFT && keycode != nexacro.Event.KEY_META)
        var comp = this.findComponent(elem);

        var capture_comp;
        if (comp) capture_comp = this._getCaptureComp(false, true, comp);

        if (capture_comp && capture_comp != comp)
            comp = capture_comp;

        var env = this._getEnvironment();

        if (nexacro._isPageReloadKey(ctrlKey, keycode))        
        {
            const browserreloadkey = env.browserreloadkey;
            if (browserreloadkey == "custom")
            {
                if (env.on_fire_onpressedreloadkey(keycode, altKey, ctrlKey, shiftKey, comp, comp, metaKey))
                {
                    elem._event_stop = true;
                    return;
                }

            }
            else
            {
                if (browserreloadkey == "reloadactiveform")
                {
                    const app = this.getRootInstance(); // chk
                    if (app)
                    {
                        let activeform;
                        if (app.getActiveForm)
                            activeform = app.getActiveForm();
                        else
                            activeform = env._getApplication().getActiveForm();                                

                        if (activeform)
                            activeform.reload();
                    }
                }

                elem._event_stop = true;
                return;
            }
        }

        if (env._processUserHotkey(keycode, altKey, ctrlKey, shiftKey, metaKey))
        {
            elem._event_stop = true;
            return;
        }

        if (env._p_enableaccessibility)
        {
            ret = env.on_fire_onaccessibilitykey(keycode, altKey, ctrlKey, shiftKey, comp, comp);
            if (ret)
            {
                elem._event_stop = true;
                return;
            }
            env._processHotkey(keycode, altKey, ctrlKey, shiftKey, comp);
        }

        if (comp)
        {
            var _form = comp._getForm();
            if (comp._processHotkey(keycode, altKey, ctrlKey, shiftKey))
            {
                var keyinput_elem = elem;
                if (_form)
                {
                    var cur_focus_comp = _form.getFocus();
                    if (cur_focus_comp != comp)
                    {
                        if (cur_focus_comp == null) // ?
                            return;

                        comp = cur_focus_comp;
                        elem = cur_focus_comp._control_element;
                    }
                }
                keyinput_elem._event_stop = true;
                comp._processing_autoskip = true;
                comp._is_hotkey = true;
            }

            if (keycode == nexacro.Event.KEY_TAB)
            {
                // TODO check tabpage가 현재 subcontrol로 분류되어있어 문제가됨.
                if (comp._is_subcontrol)
                {
                    comp = comp._getAllowTabComp(comp);

                    if (comp._is_subcontrol && comp._use_subcontrol_tabkey)
                        _form = comp._getFromComponent(comp);
                }
                if (!comp._getDlgCode(keycode, altKey, ctrlKey, shiftKey).want_tab && _form)
                {
                    comp = _form;
                }
            }
            //for test - If this annotation makes a bug, you should roll back.
            else if ((keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN) && !altKey && !ctrlKey && !shiftKey)
            {
                // 탐색 키(상/하 방향키) 제어를 nexacro가 하는 경우
                if (env._p_enableaccessibility && env._p_accessibilitycontentsearchkey)
                {
                    if (comp._is_subcontrol)
                    {
                        comp = comp._getFromComponent(comp);
                    }
                    if (!comp._getDlgCode(keycode, altKey, ctrlKey, shiftKey).want_arrows && _form)
                    {
                        comp = _form;
                    }
                }
            }

            this._keydown_element = elem;
            this._keydown_element_list.setItem(keycode, this._keydown_element);

            ret = comp._on_keydown(elem, keycode, altKey, ctrlKey, shiftKey, metaKey);
        }
        return ret;
    };

    __pWindow._on_keydown = function (/*elem, keycode, altKey, ctrlKey, shiftKey, eventBubbles*/)
    {
        return true;
    };

    __pWindow._on_default_sys_keypress = function (elem, keycode, charcode, altKey, ctrlKey, shiftKey, metaKey)
    {
        var ret;
        var comp = this.findComponent(elem);

        var capture_comp = this._getCaptureComp(false, true, comp);
        if (capture_comp && capture_comp != comp)
            comp = capture_comp;

        if (comp)
        {
            ret = comp._on_keypress(elem, keycode, charcode, altKey, ctrlKey, shiftKey, metaKey);
        }

        return ret;
    };

    __pWindow._on_keypress = function (/*elem, keycode, charcode, altKey, ctrlKey, shiftKey*/)
    {
        return true;
    };

    __pWindow._on_default_sys_keyup = function (elem, keycode, altKey, ctrlKey, shiftKey, metaKey)
    {
        var ret;
        var comp = this.findComponent(elem);
        var keydown_elem = this._keydown_element;

        var use_system_key = altKey || ctrlKey || shiftKey || metaKey;
        var is_accept_imeaction = false;


        if (comp)
        {
            var root_comp = comp._getFromComponent(comp);

            if (keydown_elem)
            {
                var keydown_elem_comp = null;
                if (keydown_elem.owner_elem)
                    keydown_elem_comp = keydown_elem.owner_elem.parent;
                var capture_comp = this._getCaptureComp(false, true, comp);
                if (capture_comp && capture_comp != comp)
                {
                    comp = capture_comp;
                }

                if (elem._event_stop)
                {
                    elem._event_stop = false;
                }
                else
                {
                    ret = comp._on_keyup(elem, keycode, altKey, ctrlKey, shiftKey, metaKey);
                }

                if (!use_system_key)
                {
                    if (keycode)
                    {
                        if (keycode == 229)
                        {
                            if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                            {
                                var _win = this.handle;
                                var evt = _win.event;
                                var trigger_code = evt ? evt.code : "";
                                var exception_codes = ["NumpadEnter", "Enter", "Escape", "Delete", "ShiftLeft", "ShiftRight",
                                    "ControlLeft", "ControlRight", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "End", "PageUp", "PageDown",
                                    "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "Backquote"];

                                if (exception_codes.indexOf(trigger_code) < 0)
                                    this._keydown_element = null;
                            }
                            else
                            {
                                this._keydown_element = null;
                            }
                        }
                        else
                        {
                            this._keydown_element_list.delete_item(keycode.toString());

                            if (this._keydown_element_list.length == 0)
                            {
                                this._keydown_element = null;
                            }
                        }
                    }
                }

                if (comp._is_alive)
                {
                    comp._on_last_keyup();
                }

                if (nexacro._OS == "Android")
                {
                    if (!use_system_key && keydown_elem instanceof nexacro.InputElement)
                    {
                        if (comp._is_subcontrol)
                        {
                            if (root_comp instanceof nexacro.Grid || root_comp instanceof nexacro.ListView)
                            {
                                if (keydown_elem_comp instanceof nexacro._CellEditControl || keydown_elem_comp instanceof nexacro._CellMaskEditControl)
                                {
                                    is_accept_imeaction = true;
                                }
                            }
                        }
                        else
                        {
                            is_accept_imeaction = true;
                        }
                    }

                    if (is_accept_imeaction)
                    {
                        if (keycode == nexacro.Event.KEY_RETURN)
                        {
                            comp._on_imeaction(elem, keycode, altKey, ctrlKey, shiftKey, metaKey);
                        }
                    }
                }
            }
            else
            {
                if (comp._is_alive)
                {
                    comp._on_last_keyup();
                }
            }
        }

        // accessibility flag init
        this._is_fire_sys_focusin = false;
        // IME 체크 위해 Platfotm_HTML5.js 이동 (104763)
        // if (keycode != nexacro.Event.KEY_ALT && keycode != nexacro.Event.KEY_CTRL && keycode != nexacro.Event.KEY_SHIFT && keycode != nexacro.Event.KEY_META)
        //     this._is_fire_sys_keydown = false;

        return ret;
    };

    __pWindow._on_keyup = function (/*elem, keycode, altKey, ctrlKey, shiftKey, fireComp*/)
    {
        return true;
    };

    __pWindow._on_default_sys_contextmenu = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, offsetX, offsetY, metaKey)
    {
        var ret, canvasX, canvasY, clientXY, clientX, clientY;

        var comp = this.findComponent(elem);
        if (comp)
        {
            var capture_comp = this._getCaptureComp(true, false, comp);
            var firecur_comp = capture_comp ? capture_comp : comp;

            if (nexacro._OS == "iOS" ||
                (comp._control_element == elem && nexacro._use_offset && offsetX != undefined && offsetY != undefined))
            {
                canvasX = offsetX;
                canvasY = offsetY;

                clientXY = firecur_comp._getClientXY(canvasX, canvasY);
                clientX = clientXY[0];
                clientY = clientXY[1];
            }
            else
            {
                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                var elem_pos;
                elem_pos = nexacro._getElementXYInWindow(comp._control_element.handle);
                canvasX = windowX - elem_pos[0];
                canvasY = windowY - elem_pos[1]; //?

                clientX = offsetX;
                clientY = offsetY;
            }

            while (firecur_comp._is_subcontrol) // complex component
            {
                var canvas = firecur_comp._getRecalcCanvasXY(elem, canvasX, canvasY);
                canvasX = canvas[0];
                canvasY = canvas[1];

                firecur_comp = firecur_comp.parent;
                if (!firecur_comp._is_subcontrol)
                {
                    clientXY = firecur_comp._getClientXY(canvasX, canvasY);
                    clientX = clientXY[0];
                    clientY = clientXY[1];
                }
            }
            ret = comp._on_contextmenu(strButton, altKey, ctrlKey, shiftKey, clientX, clientY, screenX, screenY, canvasX, canvasY, metaKey);
        }

        return ret;
    };

    __pWindow._on_contextmenu = function ()
    {
        return false;
    };

    __pWindow._on_default_sys_resize = function (width, height, wparam)
    {
        const handle = this.handle;
        if (handle)
        {
            this.width = nexacro._getWindowHandleOuterWidth(handle);
            this.height = nexacro._getWindowHandleOuterHeight(handle);
            this.left = nexacro._getContainerHandlePosX(handle);
            this.top = nexacro._getContainerHandlePosY(handle);
            let ret;

            nexacro._checkClosePopupComponent(null);
            // HTML의 경우 지정된 크기로 바꿔도 문제가 없었지만
            // Autozoom 처리시 싸이즈 sync가 맞지 않아 handle로 부터 얻은 값을 우선하도록함.
            this.clientWidth = nexacro._getContainerHandleClientWidth(handle) || width;
            this.clientHeight = nexacro._getContainerHandleClientHeight(handle) || height;

            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;

            // => 써서 this context 유지
            const resize_func = () =>
            {
                return () =>
                {
                    //nexacro._calculateZoomLevel();

                    const frame_width = this.clientWidth;
                    const frame_height = this.clientHeight;

                    const overlay_width = this.width;
                    const overlay_height = this.height;
                    if (this.root)
                    {
                        nexacro._setDeactivate(wparam);
                        this.root._setSize(frame_width, frame_height);

                        if (nexacro._resize_popup_inbound === true)
                        {
                            const len = nexacro._current_popups.length;
                            for (let i = len - 1; i >= 0; i--)
                            {
                                const cur_popup_comp = nexacro._current_popups[i];
                                if (cur_popup_comp)
                                    cur_popup_comp._resizePopupInbound(frame_width, frame_height);
                            }
                        }
                    }

                    const modal_stack = this._modal_frame_stack;
                    for (let j = 0; j < modal_stack.length; j++)
                    {
                        const modal_info = modal_stack[j];
                        const modal_frame = modal_info[0];
                        modal_frame._setModalOverlaySize(overlay_width, overlay_height);
                    }

                    if (this._resizemanager)
                    {
                        const curtime = new Date().getTime();
                        const lasttime = this._resizemanager._last_time;
                        const stop_interval = this._resizemanager._interval;

                        if ((curtime - lasttime) > stop_interval)
                        {
                            this._resizemanager.stop();
                            this._resizemanager = null;
                        }
                        else
                            this._resizemanager.start();
                    }

                    //iphone 5 orientation bug
                    //iPad mini orientation bug

                    const env = this._getEnvironment();
                    if (nexacro._OS == "iOS" && (!env || !env._allow_default_pinchzoom) && !nexacro._isHybrid())
                    {
                        // K 에서 필요한 내용인가?
                        setTimeout(function ()
                        {
                            if (this.handle instanceof Window)
                            {
                                window.scrollTo(0, 0);
                                this.root._setSize(frame_width, frame_width > frame_height ? frame_height : window.innerHeight);
                            }
                            else
                            {
                                this.root._setSize(frame_width, frame_height);
                            }

                        }.bind(this), 500);
                    }
                };
            };

            if (!nexacro._isDesktop())
                resize_func(this)();
            else
            {
                if (this.root)
                {
                    if (!this._resizemanager)
                    {
                        this._resizemanager = new nexacro._ResizeManager(new nexacro.AnimationFrame(this.root, resize_func(this)));
                        this._resizemanager.start();
                    }
                    this._resizemanager.setLastTime(new Date().getTime());
                }

            }

        }
    };

    __pWindow._on_default_sys_move = function (x, y)
    {
        const handle = this.handle;
        if (handle)
        {
            this.left = x;
            this.top = y;

            /*
            this.width = nexacro._getWindowHandleOuterWidth(handle);
            this.height = nexacro._getWindowHandleOuterHeight(handle);
            this.clientWidth = clientWidth ? clientWidth : this.width;
            this.clientHeight = clientHeight ? clientHeight : this.height;
            */
        }

        // frame.move는 openstatus=normal일때만 작동함

        if (this.root && this.root._is_window)
            this.root._move(x, y);
    };


    __pWindow._on_default_sys_activate = function (_sysevt = null, evt = null)
    {
        // Google Chrome에서 activate 이벤트가 2번씩 나오는 문제로 validation한다.
        let _is_active_window = this._is_active_window
        let _focuskeep = true;
        if (_sysevt && !nexacro.isglobalmodule)
        {
            let isfocus = this._is_active_window;
            if (evt && evt.type == "mousedown")
            {
                _focuskeep = isfocus = (this.handle == this._doc.activeElement || this.handle.contains(this._doc.activeElement));
                if (evt.target !== this._doc.activeElement)
                {
                    if (this._is_active_window)
                        isfocus = false;
                    _focuskeep = false;
                }
            }
            if (evt && evt.type == "focusin")
                isfocus = (this._doc.activeElement == evt.target && (evt.relatedTarget == null && this._is_active_window));
            _is_active_window = isfocus;

        }
        if (_is_active_window !== true)
        {
            // Pseudo change : Focused
            const cur_focus_paths = this.getCurrentFocusPaths();
            const cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
            for (let i = 0; i < cur_focus_paths_len; i++)
            {
                const _comp = cur_focus_paths[i];
                if (!_comp)
                    continue;

                if (_comp._is_frame)
                    _comp._changeStatus("deactivate", false);
                else if (!_comp._is_form || _comp._isMainForm())
                    _comp._on_activate();
            }

            let frame = this._getLastModalFrame();
            if (!frame)
                frame = this.getActiveFrame();
            if (!frame)
                frame = this.root;

            if (frame)
            {
                if (frame._is_frame)
                    frame._changeStatus("deactivate", false);
                else
                    frame._on_activate();
                this._is_active_window = true;

                if (!nexacro.isglobalmodule && !_focuskeep)
                {
                    if (this._last_focused_elem)
                        this._last_focused_elem.setElementFocus(true);
                }
            }
            if (nexacro._called_msg_window)
                nexacro._called_msg_window = false;
        }
    };


    __pWindow._on_default_sys_deactivate = function ()
    {

        var cur_focus_paths, cur_focus_paths_len;
        // Google Chrome에서 activate 이벤트가 2번씩 나오는 문제로 validation한다.
        if (this._is_active_window !== false)
        {
            nexacro._cur_repeat_info = null;
            nexacro._initDragInfo();
            nexacro._initTrackInfo();

            var frame = this._getLastModalFrame();
            if (!frame)
                frame = this.root;
            if (frame)
            {
                if (frame._is_frame)
                    frame._changeStatus("deactivate", true);
                else
                    frame._on_deactivate();
                this._is_active_window = false;
            }

            // Pseudo change : Non-Focused
            cur_focus_paths = this.getCurrentFocusPaths();
            cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
            for (var i = 0; i < cur_focus_paths_len; i++)
            {
                var _comp = cur_focus_paths[i];
                if (_comp)
                {

                    if (_comp._is_frame)
                        _comp._changeStatus("deactivate", true);
                    else if (!_comp._is_form || _comp._isMainForm())
                        _comp._on_deactivate();
                }
            }
        }

        // Popup 된 것 close 처리
        // focus된 Comp killfoucs 하는데 이벤트 Fire하지 않음.
        if (this._is_alive)
        {
            if (nexacro._Browser == "Gecko")
            {
                cur_focus_paths = this.getCurrentFocusPaths();
                var comp = cur_focus_paths[cur_focus_paths.length - 1];
                nexacro._checkClosePopupComponent(comp ? comp : null, true);
            }
            else
                nexacro._checkClosePopupComponent(null);
        }
        this._isEmbeddedWindow();
    };

    __pWindow._isEmbeddedWindow = function ()
    {
        if (window)
        {
            var is_embedded = window.parent.document != window.document;
            if (is_embedded)
            {
                this._last_focused_elem = null;
                return true;
            }
        }
    };


    __pWindow._on_default_sys_beforeclose = function ()
    {
        // Safari는 팝업을 X버튼으로 닫으면 beforeunload 이벤트가 발생하지 않음

        // 여기에서는 닫힐지 말지 알 수가 없다. 취소가 가능함
        // 리소스를 내리는 작업은 정말 닫힐때 (close에서) 처리

        // Parent에 의해 같이 닫히는 경우 Parent에서 한꺼번에 Confirm함
        if (!this._ignore_close_confirm)
            return this.root._on_beforeclose();
    };

    __pWindow._on_default_sys_close = function (allclose)
    {


        const app = this.getRootInstance(); // chk

        if (this._is_alive)
        {
            if (allclose)
            {
                nexacro._checkClosePopupComponent(null);
                nexacro._removePopupComponent(null);
            }
        }

        if (this._is_main)
        {
            const env = this._getEnvironment();
            const application = env._getApplication();
            if (allclose)
            {
                application._containerforms = [];
            }
            else
            {
                if (application._p_mainframe == app)
                {
                    application.all.delete_item(app.id);
                    application[app.id] = application.mainframe = null;
                }
               // app._on_close();
                app.destroy();
            }

            if (allclose)
            {
                nexacro._clearLocalStorage();
            }
            this._closeChildWindows(allclose ? true : undefined);
            this._destoryNexacroPortalLibrary();
           
        }
        else if (this._is_alive)
            this.destroy();

        // IE는 window.close를 호출해도 window가 즉시 사라지지 않는 경우가 있기때문에
        // closed 속성이 true로 바뀔때까지 기다렸다가 콜백을 수행한다. 
        // 다행히 closed는 모든 브라우저에서 정확한 값을 보여주고 있다.

        if (!this._is_main && this.root)
        {
            nexacro._createModalAsyncCallbackHandler(this.handle, this.root);
        }

        return true;
    };

    __pWindow._destoryNexacroPortalLibrary = function ()
    {
        let global = (typeof globalThis !== "undefined") ? globalThis : window;        
        if (global.NEXACRO_PORTALLIB_SYMBOL)   
        {
            globalThis[globalThis.NEXACRO_PORTALLIB_SYMBOL] = undefined;
        }
    };

    __pWindow._on_default_sys_load = function (win_handle)
    {
        if (!this.handle && win_handle)
        {
            this.attachHandle(win_handle);
        }

        if (this.handle)
        {
            for (let i = 0; i < this._lock_list.length; i++)
                nexacro._setWindowHandleLock(this._lock_list[i] ? this._lock_list[i].handle : null, true, this.handle, true);

            if (this.root)
            {
                this.root._on_window_loaded();
            }
        }
    };

    __pWindow._on_default_sys_reload = function (elem)
    {
        if (elem)
        {
            const comp = this.findComponent(elem);
            if (comp)
            {
                const ref_form = comp._getForm();
                if (ref_form)
                {
                    const frame = ref_form.getOwnerFrame();
                    if (frame && frame._p_form)
                    {
                        frame._p_form.reload();
                    }
                    else
                        ref_form.reload();
                }
            }
        }
    };

    __pWindow._on_default_sys_syscommand = function (command)
    {
        
        if (this.root)
        {
            const f = this.root;
            f._on_syscommand(f._control_element, command, true, f, null);
        }
    };

    __pWindow._on_default_sys_getminmaxinfo = function ()
    {
        if (this.root)
        {
            const minmaxinfo = this.root._getMinMaxInfo();
            return [minmaxinfo.cx, minmaxinfo.cy];
        }

        return null;
    };

    __pWindow._on_gesture_sys_touchstart = function (elem, touches, changedTouches, time)
    {
        var manager = this._gesture_manager;
        if (!manager) return;

        this._cur_touch_elem = elem;

        var popup_len = nexacro._current_popups.length;
        if (popup_len > 0)
        {
            var is_capture = nexacro._current_popups[0]._track_capture;
            nexacro._checkClosePopupComponent(this.findComponent(elem), false);

            if (!is_capture)
            {
                this._click_cancel = false;
            }
            else
            {
                if (popup_len != nexacro._current_popups.length)
                {
                    this._click_cancel = true;
                    return false;
                }
            }
        }
        else
        {
            this._click_cancel = false;
        }

        var ret = manager.ontouchstart(this, elem, touches, changedTouches, time);

        return ret;
    };

    __pWindow._on_gesture_sys_touchmove = function (elem, touches, changedTouches, time)
    {
        var manager = this._gesture_manager;
        if (!manager) return;

        var ret = manager.ontouchmove(this, elem, touches, changedTouches, time);

        return ret;
    };

    __pWindow._on_gesture_sys_touchend = function (elem, touches, changedTouches, time)
    {
        var manager = this._gesture_manager;
        if (!manager) return;

        if (this._click_cancel)
        {
            this._click_cancel = false;
            return true;
        }
        var ret = manager.ontouchend(this, elem, touches, changedTouches, time);

        return ret;
    };

    __pWindow._on_gesture_sys_touchcancel = function (elem, touches, changedTouches, time)
    {
        var manager = this._gesture_manager;
        if (!manager) return;

        var ret = manager.ontouchcancel(this, elem, touches, changedTouches, time);

        return ret;
    };

    __pWindow._setFocus = function ()
    {
        nexacro._setWindowHandleFocus(this.handle);
    };

    __pWindow._on_default_sys_orientationchange = function (orientation)
    {
        nexacro._checkClosePopupComponent(null);

        if (this.root)
            this.root._on_orientationchange(orientation);

    };

    __pWindow._on_default_sys_accessibilitygesture = function (direction)
    {
        // direction (0: left , 1: right)

        var keycode = direction ? nexacro.Event.KEY_DOWN : nexacro.Event.KEY_UP;

        var comp = this._accessibility_last_focused_comp;
        if (comp)
        {
            if (!(comp._is_alive && comp._getForm()))
            {
                comp = null;
            }
        }

        if (!comp)
        {
            var cur_focus_paths = this.getCurrentFocusPaths();
            this._accessibility_last_focused_comp = comp = cur_focus_paths[cur_focus_paths.length - 1];

        }

        if (comp)
        {
            var _form = comp._getForm();

            if (comp._is_subcontrol)
            {
                comp = comp._getRootComponent(comp);
            }

            if (!comp._getDlgCode(keycode, false, false, false).want_arrows && _form)
            {
                comp = _form;
            }

            comp._on_accessibilitygesture(direction);
        }

        return;
    };

    __pWindow._on_default_sys_accessibilityhover = function (elem/*, clientX, clientY, screenX, screenY*/)
    {
        // elem: hit control node

        var comp;
        var control;
        var ret = false;
        if (elem instanceof nexacro.ModalOverlayElement) return ret;
        var old_comp = this._accessibility_last_focused_comp;

        comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            comp = comp[0];

            if (comp._is_subcontrol)
            {
                control = comp;
                comp = comp._getRootComponent(comp);
            }

            if (!comp._is_form)	// touch component
            {
                ret = comp._setAccessibilityInfoByHover(control);
                if (ret)
                {
                    if (old_comp)
                    {
                        old_comp._clearAccessibilityInfoByHover();
                    }

                    this._accessibility_last_focused_comp = comp._getRootComponent(comp);
                }
            }
            else  // when touched div or form.
            {
                var my_tapstop_childs = comp._searchNextTabFocus(comp, undefined, true);
                var my_tapstop_childs_cnt = my_tapstop_childs ? my_tapstop_childs.length : 0;

                if (my_tapstop_childs_cnt == 0) // TODO : 무조건 1로 나옴, 확인 필요
                {
                    ret = comp._setAccessibilityInfoByHover(control);
                }
            }
        }
        return ret;
    };

    // ExtensionAPIv2
    __pWindow._on_default_sys_onextmodule = function (handle, eventinfoarray)//(eventinfoarray)
    {
        var env = this._getEnvironment();
        if (env)
        {
            var eventid = eventinfoarray[0];
            var eventtype = eventinfoarray[1];
            var data = eventinfoarray[2];
            return env._on_onextmodule(handle, eventid, eventtype, data);
        }
    };

    __pWindow._on_default_sys_onextendedcommand = function (eventid, eventtype, deviceid, data)	
    {
        var ret;
        var app = this.getRootInstance(); //chk
        if (app)						
        {
            let active_form;
            if (app.getActiveForm)
                active_form = app.getActiveForm();
            else
            {
                const env = this._getEnvironment();
                if (env)
                    active_form = env._getApplication().getActiveForm();
            }

            if (active_form)
                ret = active_form._on_extendedcommand(eventid, eventtype, deviceid, data, true);
        }
        return ret;
    };

    // For Network Status Change Detection Event
    __pWindow._on_default_sys_onnetworkstatuschange = function (handle, eventid, isonline)
    {
        var env = this._getEnvironment();
        if (env)
        {
            return env.on_fire_onnetworkstatuschange(handle, eventid, isonline);
        }
    };

    __pWindow._clearDownEventFlag = function (comp, comp_org_)
    {
        if (comp)
        {
            var comp_org = comp_org_;
            if (!comp_org) comp_org = comp._getRootComponent(comp);
            if (comp_org)
                comp_org._cancelEvent(comp);
        }
        nexacro._cur_repeat_info = null;
        nexacro._cur_extra_track_info = null;
        nexacro._initDragInfo();
        nexacro._initTrackInfo();

        this._cur_ldown_elem = null;
        this._lbuttondown_wx = null;
        this._lbuttondown_wy = null;
        this._curWindowX = null;
        this._curWindowY = null;
        this._keydown_element = null;
        this._keydown_element_list.clear();
    };

    __pWindow._cancelEvent = function () 
    {
        var repeatInfo = nexacro._cur_repeat_info;

        if (repeatInfo && repeatInfo._timer)
        {
            var handle = nexacro._getWindowHandle(this.handle);
            nexacro._clearSystemTimer(handle, repeatInfo._timer);
        }

        var elem = this._cur_ldown_elem || this._keydown_element;
        var comp = this.findComponent(elem);
        var win = this;
        var comp_org;
        if (comp)
            comp_org = comp._getRootComponent(comp);

        if (comp_org && comp_org._cancelingEvent)
            comp_org._cancelingEvent();

        if (elem)
        {
            nexacro._SysOnceCallbackTimer.callonce(win, function ()
            {
                win._clearDownEventFlag(comp, comp_org);
            }
            );

        }
        else
            win._clearDownEventFlag(comp, comp_org);
    };


    __pWindow._getEnableWheelZoom = function ()
    {
        return this._enableWheelZoom;
    };

    __pWindow._setEnableWheelZoom = function (newEnableWheelZoom)
    {
        this._enableWheelZoom = newEnableWheelZoom;
    };

    __pWindow._getWheelZoom = function ()
    {
        return this._wheelZoom;
    };
    __pWindow._setWheelZoom = function (newWheelZoom) //only runtime
    {
        if ((50 <= newWheelZoom) && (newWheelZoom <= 200) && (newWheelZoom % 10 == 0))
        {
            this._wheelZoom = newWheelZoom;
            const zoomframeElement = this.root._is_popup_frame != true ? this.root.frame.getElement() : this.frame.getElement();    // _window.frame : mainframe
            zoomframeElement.setElementZoom(newWheelZoom);
            zoomframeElement.setElementSize(zoomframeElement._unscaledwidth, zoomframeElement._unscaledheight);
            if (this._modal_frame_stack.length > 0)
            {
                const modalCount = this._modal_frame_stack.length;
                let modalFrameElement;
                for (let loopI = 0; loopI < modalCount; loopI++)
                {
                    modalFrameElement = this._modal_frame_stack[loopI][0].getElement();
                    modalFrameElement.setElementZoom(newWheelZoom);
                    modalFrameElement.setElementSize(modalFrameElement._unscaledwidth, modalFrameElement._unscaledheight, false, true);
                    modalFrameElement._updateBorderElementsPosition();
                }
            }
        }
    };


    //==============================================================================
    // nexacro Application
    //==============================================================================
    nexacro.Application = function (environment)
    {
        this._load_manager = new nexacro._LoadManager(this);

        this._xcssgrouplist = [];
        this._xcssgroupfilterlist = [];
        this._env = environment;
    };

    var _pApplication = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.Application);

    nexacro.Application.prototype = _pApplication;
    _pApplication._type_name = "Application";

    _pApplication.id = "application";
    _pApplication._p_name = "application";

    // Application Collections
    // all is special Collection - direct access not allowed
    _pApplication._p_all = new nexacro.Collection();
    _pApplication._p_trays = new nexacro.Collection();
    _pApplication._p_components = new nexacro.Collection();

    //property
    _pApplication._p_mainframe = null;
    _pApplication.key = "";
    _pApplication.xadl = "";
    _pApplication.componentpath = "";
    _pApplication.commthreadcount = 3;
    _pApplication.commthreadwaittime = 0;
    _pApplication.cachedir = "";
    _pApplication.errorfile = "";
    _pApplication.onlyone = false;
    _pApplication._p_licenseurl = "";
    _pApplication._p_version = "";

    _pApplication.engineversion = "";
    _pApplication.enginesetupkey = "";

    _pApplication.mousehovertime = 500;
    _pApplication.mousewheeltype = 0;

    _pApplication.errorlevel = 0;
    _pApplication.cookiecachetype = "cache";

    _pApplication._p_xcssgroup = "";
    _pApplication._p_xcssgroupfilter = "";


    //------------- internal variable --------------//
    _pApplication._is_application = true;

    _pApplication._need_init = true;

    _pApplication._variables = [];
    _pApplication._header_variables = [];
    _pApplication._datasets = [];
    _pApplication._dataobjects = [];

    _pApplication._active_window = null; //not use
    _pApplication._global_context = this ? this : globalThis;// lookup topmost


    _pApplication._is_loaded = false;
    _pApplication._is_hybrid = false;
    _pApplication._is_loadforms = false;

    //_pApplication._loglevel = 4;

    //--------------------------------------
    // Managers
    // CSS containers
    //_pApplication._css_selectors = { _is_selector: true, _has_items: false, _has_attr_items: false };
    //_pApplication._cssfinder_cache = {};

    _pApplication._touch_manager = null;
    _pApplication._aliaslist = [];  //typedefinition에 등록된 alias 처리
    _pApplication._extensionmodules = [];

    _pApplication._globalvar_uri = "";
    _pApplication._includescriptlist = [];
    _pApplication._entered = null;
    _pApplication._is_attach_childframe = false;

    _pApplication._navidmap = undefined;
    _pApplication._env = null;

    //  _pApplication._closedmodalasync_list = []; // window handle까지 close처리된 frame,window_handle 리스트. callback처리 후 리스트에서 제거된다.

    //==============================================================================
    // nexacro.Application : Event Area
    //==============================================================================
    // Application's event list
    _pApplication._event_list = {
        "onload": 1, "onerror": 1, "onbeforeexit": 1, "onexit": 1, "onusernotify": 1,
        "onloadtypedefinition": 1, "onloadingappvariables": 1,
        "ondownloadactivex": 1, "oncopydata": 1, "onquickviewmenuclick": 1, "onbeforeuserconfirm": 1, "onafteruserconfirm": 1,

        "onloadforms": 1, "onduplicateexecution": 1,
        "onnotification": 1 // for Mobile PUSH/Notification
    };

    _pApplication._isEnable = function ()
    {
        return true;
    };

    _pApplication._isLoaded = function ()
    {
        return this._is_loaded;//nexacro._is_loaded_application;
    };

    //_pApplication._on_load = 
    _pApplication.on_fire_onload = function (obj, url)
    {
        if (this.onload && this.onload._has_handlers)
        {
            var evt = new nexacro.LoadEventInfo(obj, "onload", url);
            return this.onload._fireEvent(this, evt);
        }
    };

    //ie6 에서 cache되어 있는 화면을 가져올때 sync 처럼 동작하는 현상이 있어
    //application의 onload event 후에 form의 onload event를 발생시키기 위해 
    //application에 onload event 후에 호출할 form callbacklist를 달아놓는다.

    _pApplication._on_load = function (obj, url)
    {
        const env = this._env;
        if (env && env._p_preventbrowserbackbutton)
        {
            nexacro._preventBackNavigation();
        }

        if (!nexacro.isglobalmodule)
            nexacro.__MFEAPI.initApplicationCallback(this);

        this.on_fire_onload(obj, url);

        //var callbacklist = nexacro._load_callbacklist;
        var callbacklist = this._load_callbacklist;
        var n = callbacklist ? callbacklist.length : 0;
        if (n > 0)
        {
            for (var i = 0; i < n; i++)
            {
                var item = callbacklist[i];
                var target = item.target;
                var _url = item.url;
                if (target._is_alive !== false)
                    item.callback.call(target, target, _url, true);
            }
            callbacklist.splice(0, n);
        }


        return true;
    };

    _pApplication._getEnvironment = function ()
    {
        return this._env;
    };

    _pApplication._getApplication = function ()
    {
        return this;
    };


    _pApplication._registerLoadforms = function (obj)
    {
        if (this._is_loadforms)
            return;

        if (!this._loadforms)
            this._loadforms = [];
        this._loadforms.push(obj);
    };

    _pApplication._notifyLoadforms = function (obj)
    {
        if (this._is_loadforms)
            return;

        var loadforms = this._loadforms;
        if (!loadforms) return false;
        var n = loadforms.length;
        for (var i = 0; i < n; i++)
        {
            var item = loadforms[i];
            if (obj == item)
            {
                loadforms.splice(i, 1);
            }
        }

        if (loadforms.length === 0)
        {
            this._is_loadforms = true;
            this.on_fire_onloadforms(this, this.xadl);
        }

        return false;
    };


    _pApplication.on_fire_onloadforms = function (obj, url)
    {
        if (this.onloadforms && this.onloadforms._has_handlers)
        {
            var evt = new nexacro.LoadEventInfo(obj, "onloadforms", url);
            return this.onloadforms._fireEvent(this, evt);
        }
    };

    _pApplication.on_fire_onloadtypedefinition = function (obj, url)
    {
        if (this.onloadtypedefinition && this.onloadtypedefinition._has_handlers)
        {
            var evt = new nexacro.LoadEventInfo(obj, "onloadtypedefinition", url);
            return this.onloadtypedefinition._fireEvent(this, evt);
        }
        return true;
    };

    _pApplication.on_fire_onloadingappvariables = function (obj, url)
    {
        if (this.onloadingappvariables && this.onloadingappvariables._has_handlers)
        {
            var evt = new nexacro.LoadEventInfo(obj, "onloadingappvariables", url);
            return this.onloadingappvariables._fireEvent(this, evt);
        }
        return true;
    };

    _pApplication.on_fire_onerror = function (obj, errortype, errormsg, errorobj, statuscode, requesturi, locationuri, errordata)
    {
        if (this.onerror && this.onerror._has_handlers)
        {
            var evt = new nexacro.ErrorEventInfo(obj, "onerror", errortype, errormsg, errorobj, statuscode, requesturi, locationuri, errordata);
            return this.onerror._fireEvent(this, evt);
        }
        return false;
    };

    _pApplication.on_fire_onbeforeexit = function (obj)
    {
        if (this.onbeforeexit && this.onbeforeexit._has_handlers)
        {
            var evt = new nexacro.ExitEventInfo(obj, "onbeforeexit");
            return this.onbeforeexit._fireEvent(this, evt);
        }
    };

    _pApplication.on_fire_onexit = function (obj)
    {
        if (this.onexit && this.onexit._has_handlers)
        {
            var evt = new nexacro.ExitEventInfo(obj, "onexit");
            return this.onexit._fireEvent(this, evt);
        }
        return true;
    };

    _pApplication.on_fire_onusernotify = function (obj, notifyid, message)
    {
        if (this.onusernotify && this.onusernotify._has_handlers)
        {
            var evt = new nexacro.UserNotify(obj, "onusernotify", notifyid, message);
            return this.onusernotify._fireEvent(this, evt);
        }
        return true;
    };

    _pApplication.on_fire_onaddlog = function (obj, message)
    {
        if (this.onaddlog && this.onaddlog._has_handlers)
        {
            var evt = new nexacro.AddLog(obj, "onaddlog", message);
            return this.onaddlog._fireEvent(this, evt);
        }
        return true;
    };



    _pApplication._on_callback_beforeuserconfirm = function ()
    {
        return this.on_fire_onbeforeuserconfirm();
    };

    _pApplication._on_callback_afteruserconfirm = function ()
    {
        return this.on_fire_onafteruserconfirm();
    };

    _pApplication.on_fire_onbeforeuserconfirm = function ()
    {
        if (this.onbeforeuserconfirm && this.onbeforeuserconfirm._has_handlers)
        {
            var evt = new nexacro.EventInfo(this, "onbeforeuserconfirm");
            return this.onbeforeuserconfirm._fireEvent(this, evt);
        }
        return false;
    };

    _pApplication.on_fire_onafteruserconfirm = function ()
    {
        if (this.onafteruserconfirm && this.onafteruserconfirm._has_handlers)
        {
            var evt = new nexacro.EventInfo(this, "onafteruserconfirm");
            return this.onafteruserconfirm._fireEvent(this, evt);
        }
        return false;
    };

    _pApplication.on_fire_onnotification = function (v)
    {
        var parameters = JSON.parse(v);

        if (parameters.token != undefined)
            nexacro.System._setNotificationToken(parameters.token);

        if (this.onnotification && this.onnotification._has_handlers)
        {
            var evt = new nexacro.NotificationEventInfo(this, "onnotification", parameters.reason, parameters.messages);
            return this.onnotification._fireEvent(this, evt);
        }

        return false;
    };

    // _globalvalue = "val1:ev=EnvVal,val2:ec=EnvCook,val3:av=AppVal,val2=AppVal2"    
    _pApplication.on_fire_onduplicateexecution = function (_globalvalue)
    {
        if (this.onduplicateexecution && this.onduplicateexecution._has_handlers)
        {
            var _arguments = [];
            var apparguments = new nexacro.Collection();
            var envarguments = new nexacro.Collection();
            var cookiearguments = new nexacro.Collection();

            // Comma Separated, Quote 사용가능. 2013.04.03 neoarc
            var search_regexpr = /([a-z0-9_]*)(=|:ev=|:ec=|:av=)(([^,'"]+)|('[^']*')|("[^"]*"))(,|$)/ig;
            var matched;
            while (matched = search_regexpr.exec(_globalvalue))
            {
                var globalvalue = matched[0]; // a=A, ?먮뒗 a=A
                if (globalvalue.charAt(globalvalue.length - 1) == ',')
                    globalvalue = globalvalue.substr(0, globalvalue.length - 1);

                var equal_idx = globalvalue.indexOf("=");
                var variable_name = globalvalue.substr(0, equal_idx);

                // 숫자로 시작하는 변수명인 경우 걸러냄
                if (variable_name[0] >= '0' && variable_name.charAt(0) <= '9')
                    continue;
                var variable_value = globalvalue.substr(equal_idx + 1, globalvalue.length - equal_idx);

                // Type 지정여부 체크
                var variable_type = null;
                var colon_idx = variable_name.indexOf(":");
                if (colon_idx > 0)
                {
                    variable_type = variable_name.substr(colon_idx + 1, 2);
                    variable_name = variable_name.substr(0, colon_idx);
                }

                // Quote 처리 된 경우 Quote 제거
                if (variable_value.length > 2 &&
                    ((variable_value.charAt(0) == '\'' && variable_value.charAt(variable_value.length - 1) == '\'') ||
                        (variable_value.charAt(0) == '"' && variable_value.charAt(variable_value.length - 1) == '"')))
                {
                    variable_value = variable_value.substr(1, variable_value.length - 2);
                }

                //ev	Environment.Variable
                //ec	Environment.CookieVariable
                //av	Application.Variable (default)
                switch (variable_type)
                {
                    case "ev":
                        _arguments.push({ name: variable_name, value: variable_value, usecookie: false });
                        envarguments.add_item(variable_name, variable_value);
                        break;
                    case "ec": // cookie
                        _arguments.push({ name: variable_name, value: variable_value, usecookie: true });
                        cookiearguments.add_item(variable_name, variable_value);
                        break;
                    case "av":
                    default: // global(default)
                        _arguments.push({ name: variable_name, value: variable_value, usecookie: false });
                        apparguments.add_item(variable_name, variable_value);
                        break;
                }
            }

            var evt = new nexacro.DuplicateExecutionEventInfo(this, "onduplicateexecution", _arguments, apparguments, envarguments, cookiearguments);
            return this.onduplicateexecution._fireEvent(this, evt);
        }
        return false;
    };

    //==============================================================================
    // nexacro.Application : Application's default system event handlers
    //==============================================================================
    _pApplication._on_sys_focus = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_lbuttondown = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_lbuttonup = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_rbuttondown = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_rbuttonup = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mouseup = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mousedown = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mouseenter = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mouseleave = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mousemove = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_mousewheel = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_keydown = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_keypress = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_keyup = function (/*node, e, bubble*/)
    {
        return false;
    };

    _pApplication._on_sys_dblclick = function (/*node, e, bubble*/)
    {
        return false;
    };
    _pApplication._on_sys_touch = function (/*node, e, bubble*/)
    {
        return false;
    };

    _pApplication._getClientWidth = nexacro._emptyFn;
    _pApplication._getClientHeight = nexacro._emptyFn;

    //==============================================================================
    // nexacro.Application : System Utility Functions
    //==============================================================================
    _pApplication._onHttpTransactionError = function (obj, bfireevent, errorobj, errortype, url, returncode, requesturi, locationuri, extramsg, svcid)
    {
        var ret = false;
        var commerrorobj = nexacro.MakeCommunicationError(this, errortype, url, returncode, requesturi, locationuri, extramsg);
        if (bfireevent)
        {
            ret = this.on_fire_onerror(obj, commerrorobj.name, commerrorobj.message, errorobj, returncode, requesturi, locationuri, svcid);
            if (!ret)
            {
                var environment = this._env; 
                if (environment)
                {
                    ret = environment.on_fire_onerror(obj, commerrorobj.name, commerrorobj.message, errorobj, returncode, requesturi, locationuri, svcid);
                }
            }
        }


        //   this._onFireSystemError(obj, false, commerrorobj.name, 1, commerrorobj.message, true);                                      
        if (commerrorobj.message)
        {
            const _environment = this._env;
            if (_environment)
            {
                nexacro._writeTraceLog(1, commerrorobj.message, true, _environment._loglevel, _environment._p_traceduration, _environment._p_tracemode);
            }
            else
                nexacro._writeTraceLog(1, commerrorobj.message, true);
        }
        return ret;
    };

    _pApplication._loadGlobalValueData = function (/*key, url*/)
    {
    };

    _pApplication._addInitialVariable = function ()
    {
        var variables, variable;

        if (nexacro._initappvar)
        {
            variables = nexacro._initappvar;

            for (variable in variables)
            {
                if (Object.prototype.hasOwnProperty.call(variables, variable))
                {
                    this.setVariable(variable, variables[variable]);
                }
            }
            nexacro._initappvar = null;
            delete nexacro._initappvar;
        }
    };

    _pApplication._addGlobalVariableFromGlobalValue = function ()
    {
        const env = this._env;
        if (globalThis.chrome && globalThis.chrome.webview)
        {
            var params = {};
            var globalvalues = nexacro._messageToNative("0000", "nexacroset", "_addGlobalVariable", params, true, true);
        }
        else
            var globalvalues = nexacro._getGlobalValueData(this.key, this.xadl);

        if (!globalvalues)
            return;

        // nexacro._globalvalue 예:
        // nexacro._globalvalue = "a=A,b=B,c=씨,d='D,D',e=\"E=mc2,U+=LG\"";

        // Comma Separated, Quote 사용가능. 2013.04.03 neoarc
        var search_regexpr = /([a-z0-9_]*)(=|:ev=|:ec=|:av=)(([^,'"]+)|('[^']*')|("[^"]*"))(,|$)/ig;
        var matched;
        while (matched = search_regexpr.exec(globalvalues))
        {
            var globalvalue = matched[0]; // a=A, ?먮뒗 a=A
            if (globalvalue.charAt(globalvalue.length - 1) == ',')
                globalvalue = globalvalue.substr(0, globalvalue.length - 1);

            var equal_idx = globalvalue.indexOf("=");
            var variable_name = globalvalue.substr(0, equal_idx);

            // 숫자로 시작하는 변수명인 경우 걸러냄
            if (variable_name[0] >= '0' && variable_name.charAt(0) <= '9')
                continue;
            var variable_value = globalvalue.substr(equal_idx + 1, globalvalue.length - equal_idx);

            // Type 지정여부 체크
            var variable_type = null;
            var colon_idx = variable_name.indexOf(":");
            if (colon_idx > 0)
            {
                variable_type = variable_name.substr(colon_idx + 1, 2);
                variable_name = variable_name.substr(0, colon_idx);
            }

            // Quote 처리 된 경우 Quote 제거
            if (variable_value.length > 2 &&
                ((variable_value.charAt(0) == '\'' && variable_value.charAt(variable_value.length - 1) == '\'') ||
                    (variable_value.charAt(0) == '"' && variable_value.charAt(variable_value.length - 1) == '"')))
            {
                variable_value = variable_value.substr(1, variable_value.length - 2);
            }

            // Add to GlobalVariable
            //ev	Environment.Variable
            //ec	Environment.CookieVariable
            //av	Application.Variable (default)
            switch (variable_type)
            {
                case "ev":
                    // environment variable
                    env._setEnvironmentVariable(variable_name, variable_value);
                    break;
                case "ec":
                    // cookie
                    // [sung 2018.07.31] non-secure cookie 로 취급. secure cookie로 할 방법은?
                    env._setCookieVariable(variable_name, variable_value, false);
                    break;
                case "av":
                default:
                    this.setVariable(variable_name, variable_value);
                    break;
            }
        }
    };

    //==============================================================================
    // nexacro.Application : Layout control Methods
    //==============================================================================   
    _pApplication._addExtensionModules = function (modules)
    {
        this._extensionmodules = modules;
        var extensionmodules = this._extensionmodules;
        if (extensionmodules)
        {
            var len = extensionmodules.length;
            if (len > 0)
            {
                for (var i = 0; i < len; i++)
                {
                    var item = extensionmodules[i];
                    if (item)
                    {
                        nexacro._addExtensionModule(item);
                    }
                }
            }
        }
    };

    _pApplication._loadInclude = function (mainurl, url, asyncmode, service_url)
    {
        nexacro._loadInclude(this, mainurl, url, asyncmode, service_url);
    };

    //Base::test.xcss 
    //theme::Base_test.xcss 이렇게 바꿔서...  : // 2018.01.16 2월 정기 반영전 

    // xcss:: 로 고정경로로 변경 2018.01.16 2월 정기에 변경됨
    _pApplication.loadCss = function (url)
    {
        if (!this._cssurls)
            this._cssurls = [];

        this._cssurls.push(url);

        var loadurl = url.replace("::", "_");
        //경로 설정하는 api 필요
        const env = this._env;
        let cssurl = env._getXCSSRCURL(url);

        var cssmapurl = cssurl;
        var pos = cssurl.lastIndexOf('/');
        cssurl = cssurl.substring(0, pos + 1) + nexacro._getCSSFileName(cssurl.substring(pos + 1, cssurl.length - 5));

        var service = env._getServiceObject(url);
        pos = cssmapurl.lastIndexOf('.');
        cssmapurl = nexacro._getMapFileName(cssmapurl.substring(0, pos));

        var checkversion = env.checkversion;

        if (checkversion)
        {
            var version = service.version;
            if (!nexacro._isNull(version) && version !== "")
            {
                cssurl += nexacro._getVersionQueryString(cssurl, version);
                cssmapurl += nexacro._getVersionQueryString(cssmapurl, version);
            }
        }
        this._load_manager.loadCssModule(cssmapurl, null, null, service);  //map
        this._load_manager.loadCssModule(cssurl, null, null, service, true, 1); //css

    };

    _pApplication._getTextSize = function (text, font, width, wordwrap, refobj, wordspacing, letterspacing)
    {
        if (font)
            font = nexacro.FontObject(font);

        if (typeof (wordwrap) == "string")
            wordwrap = wordwrap.toLowerCase();

        if (wordwrap === true || wordwrap == "true")
            wordwrap = "char";
        else if (wordwrap === false || wordwrap == "false" || wordwrap == undefined)
            wordwrap = "none";

        var line = true;

        if (wordwrap == "none")
            line = false;
        else if (wordwrap == "line")
            wordwrap = null;

        // 입력된 font가 em, rem 인경우 refobj의 font를 취득하여 기준 font-size로 활용 (refobj 없으면 mainframe)
        var unit = font._unit, refer_font;
        if (unit.indexOf("em") > -1)
        {
            if (width instanceof nexacro.Component)
            {
                refobj = width;
            }

            if (!refobj || unit == "rem")
            {
                // refobj 없으면 application을 찾을 수 없을 수도 있다.
                const app = this;
                if (app)
                    refobj = app.mainframe;
            }

            if (refobj)
            {
                refer_font = refobj._getCurrentStyleInheritValue("font");
            }
        }

        var retn = nexacro._getTextSize(text, font, line, width, wordwrap, wordspacing, letterspacing, undefined, undefined, undefined, refer_font);
        var obj = { nx: retn[0], ny: retn[1] };

        return obj;
    };

    _pApplication._generateBroadcastChannelName = function (env)
    {
        if (!env) env = this._env;

        // BroadCastChannel은 동일 출처 정책(SOP)에 따라 브라우저의 모든 탭에 메시지를 전송하므로 Application 객체 공유 기준 고유명 생성
        if (!this._broadcast_channel_name)
            this._broadcast_channel_name = `${env?.appkey}_${Math.floor(Math.random() * 10000000).toString(36)}`;
    };

    _pApplication.createMainFrame = function (id, left, top, width, height, right, bottom, parent)
    {
        var mainframe = new nexacro.MainFrame(id, left, top, width, height, right, bottom, parent);
        this[id] = this._p_mainframe = mainframe;
        this._p_all.add_item(id, mainframe);

        if (nexacro._macOSWebView)
        {
            var params = {
                left: left,
                top: top,
                width: width,
                height: height
            };

            var json = {
                id: "0000",
                div: "NexacroWindow",
                method: "_initMainFrame",
                params: params
            };

            var jsonstr = JSON.stringify(json);
            nexacro.Device.exec(jsonstr, true);
        }
        else if (globalThis.chrome && globalThis.chrome.webview)
        {
            var params = { left: left, top: top, width: width, height: height };
            var sizeinfo = nexacro._messageToNative("0000", "NexacroWindow", "_initMainFrame", params, true, true);
            //sizeinfo는 실제 적용된 값; left,top,width,height 로 된 숫자값이니 필요시 가공해서 사용;
        }

        return mainframe;
    };

    _pApplication.createWidget = function (/*id, left, top, width, height, right, bottom, parent*/)
    {
        var widget;
        return widget;
    };

    _pApplication.createTray = function (id, parent)
    {
        var tray = new nexacro.Tray(id, parent);
        this._p_trays.add_item(id, tray);
        this._p_all.add_item(id, tray);
        return tray;
    };

    _pApplication.addTray = function (id, obj)
    {
        if (obj._type_name != "Tray")
            return -1;

        if (this._p_trays.indexOf(id) > -1)
            return -1;

        var idx = this._p_trays.add_item(id, obj);
        this._p_all.add_item(id, obj);
        return idx;
    };

    _pApplication.removeTray = function (id)
    {
        if (typeof (id) == "string")
        {
            if (this._p_trays[id])
            {
                this._p_trays[id]._destroy();
            }
        }
        else
        {
            // remove all
            var cnt = this._p_trays.length;
            for (var i = cnt - 1; i >= 0; i--)
            {
                if (this._p_trays[i])
                {
                    this._p_trays[i]._destroy();
                }
            }
        }
    };

    _pApplication._addPreloadList = function (type, url, id, args)
    {
        nexacro._addPreloadList(this, type, url, id, args);
    };

    //CHECK
    _pApplication.getParentContext = function ()
    {
        return null;
    };

    _pApplication._addVariable = function (id, val/*, usecookie, defaultval, expire*/)
    {
        //runtime과 spec 조정 globalvars.js에 있는 variable의 default값은 ""
        //addvariable을 통해서 들어올때는 val 변수 그대로 처리
        if (arguments.length == 3 && val == null)
        {
            val = "";
        }

        this[id] = val;
        this._variables.push(id);

        this._p_all.add_item(id, val);

        return true;
    };

    _pApplication._getVariable = function (id)
    {
        return this[id];
    };

    _pApplication._existVariable = function (id)
    {
        var vars = this._variables;
        var len = vars.length;
        for (var i = 0; i < len; i++)
        {
            if (vars[i] == id) return true;
        }

        return false;
    };

    _pApplication._addDataset = function (id, obj)
    {
        this._addObject(id, obj);
        this._datasets.push(obj);
    };

    _pApplication._addDataObject = function (id, obj)
    {
        this._addObject(id, obj);
        this._dataobjects.push(obj);
    };

    _pApplication._addObject = function (id, obj)
    {
        this[id] = obj;
        this._p_all.add_item(id, obj);
    };

    _pApplication._getDatasetObject = function (datasetid)
    {
        var _ds;
        if (datasetid.indexOf(".") > 0)
        {
            _ds = nexacro._resolveTypeByPath(this, datasetid);
        }
        else
        {
            //return this[datasetid];
            _ds = datasetid ? this[datasetid] : null;
        }

        return _ds;
    };

    _pApplication._getDataObject = function (dataobjid)
    {
        return this[dataobjid];
    };

    _pApplication._waitCursor = function (wait_flag, context)
    {
        var mainframe = this._p_mainframe;
        if (mainframe)
        {
            mainframe._waitCursor(wait_flag, context);
        }
    };

    _pApplication._stopTransaction = function (is_cancel)
    {
        return nexacro.Form.prototype._stopTransaction.call(this, is_cancel);
    };

    _pApplication._registerNavid = function (navid, obj)
    {
        if (!this._navidmap)
            this._navidmap = {};
        if (this._navidmap[navid])
            return false;
        this._navidmap[navid] = obj;
        return true;
    };

    _pApplication._unRegisterNavid = function (navid, obj)
    {
        if (this._navidmap)
            delete this._navidmap[navid];
    };

    _pApplication._getNavidObject = function (navid)
    {
        if (!this._navidmap) return null;
        return this._navidmap[navid] || null;
    };


    //==============================================================================
    // nexacro.Application : Methods
    //==============================================================================        
    _pApplication.addChild = function (id, obj)
    {
        if (id && id.length <= 0)
        {
            return -1;
        }

        if (!obj)
        {
            throw nexacro.MakeReferenceError(this, "reference_not_define", id);
        }

        if (this[id])
        {
            throw nexacro.MakeNativeError(this, "native_exist_id", id);
        }

        if (obj._is_component)
        {
            throw nexacro.MakeNativeError(this, "type_invalid", id);
        }

        if (!obj.id)
        {
            obj.id = obj._p_name = id;
        }
        else
            obj.id = id;

        this[id] = obj;
        obj._p_parent = this;
        obj._env = this._env;

        if (obj._type_name == "DataObject")
            this._dataobjects.push(obj);
        else if (obj._isDataset && obj._isDataset())
            this._datasets.push(obj);
        else 
        {
            if (!this._objects)
                this._objects = [];
            this._objects.push(obj);
        }

        return this._p_all.add_item(id, obj);

    };

    _pApplication.removeChild = function (id)
    {
        if (!id || id.length <= 0)
        {
            return null;
        }

        var obj = this[id];
        if (!obj)
            return null;

        obj._p_parent = null;
        delete this[id];
        if (obj._type_name == "DataObject")
            this._dataobjects = this._dataobjects.filter((e) => e !== obj);
        else if (obj._isDataset && obj._isDataset())
            this._datasets = this._datasets.filter((e) => e !== obj);
        else if (this._objects)
            this._objects = this._objects.filter((e) => e !== obj);

        this._p_all.delete_item(id);

        return obj;
    };

    _pApplication.getActiveFrame = function ()
    {
        var frame = this._p_mainframe;
        var _window = frame._getWindow();
        if (_window && _window._is_active_window)
            return _window.getActiveFrame();

        var popupframes = nexacro.getPopupFrames(frame);
        if (popupframes && popupframes.length > 0)
        {
            return this._getActiveFrame(popupframes);
        }
        return null;
    };

    _pApplication._getActiveFrame = function (frames)
    {
        var finder;
        var _window;
        for (var i = 0, len = frames.length; i < len; i++)
        {
            var frame = frames[i];
            if (frame)
            {
                _window = frame._getWindow();
                if (_window && _window._is_active_window)
                {
                    finder = _window.getActiveFrame();
                    return finder;
                }
                var popupframes = nexacro.getPopupFrames(frame);
                if (popupframes == frames)
                {
                    finder = frame;
                    continue;
                }
                else
                {
                    if (popupframes && popupframes.length > 0)
                    {
                        return this._getActiveFrame(popupframes);
                    }
                }
            }
        }
        if (finder)
        {
            _window = finder._getWindow();
            if (_window && _window._is_active_window)
            {
                finder = _window.getActiveFrame();
                return finder;
            }
            else
            {
                finder = null;
            }
        }
        return finder;
    };

    _pApplication.getActiveForm = function ()
    {
        var frame = this.getActiveFrame();
        if (frame)
            return frame._p_form;
        else
            return null;
    };

    _pApplication._getActiveWindow = function ()
    {
        var frame = this._p_mainframe;
        var _window = frame._getWindow();
        if (_window && _window._is_active_window)
            return _window;

        var popupframes = nexacro.getPopupFrames(frame);
        if (popupframes && popupframes.length > 0)
        {
            return this._getActivePopupWindow(popupframes);
        }
        return null;
    };

    _pApplication._getActivePopupWindow = function (frames)
    {
        var _window;
        for (var i = 0, len = frames.length; i < len; i++)
        {
            var frame = frames[i];
            if (frame)
            {
                _window = frame._getWindow();
                if (_window && _window._is_active_window)
                {
                    return _window;
                }
                var popupframes = nexacro.getPopupFrames(frame);
                if (popupframes && popupframes.length > 0)
                {
                    return this._getActivePopupWindow(popupframes);
                }
            }
        }
    };

    _pApplication.userNotify = function (notifyid, message)
    {
        return this.on_fire_onusernotify(this, notifyid, message);
    };

    /** NP14에서 사용하던 코드로 추정. 현재 사용없음 제거
     *_pApplication.callScript = function (expr) { ... } 
     */

    _pApplication.trace = function (log, level)
    {
        // var loglevel = 4; // debug
        if (level)
            trace(level);
        else
            trace(log);

    };

    _pApplication.addVariable = function (id, value, type, expire)
    {
        if (this[id]) return -1;

        var use_cookie = false;

        //if (type)
        //{
        //    if (type == "share")
        //    {
        //        use_cookie = true;
        //    }
        //    else if (type == "header")
        //    {
        //        this._header_variables.push(id);
        //    }
        //}

        return this._addVariable(id, value, use_cookie, null, expire) === true ? 1 : 0;
    };

    //variable이 존재하면 set
    //variable이 없으면 add 
    _pApplication.setVariable = function (id, value, type, expire)
    {
        var vars = this._variables;
        var len = vars.length;
        for (var i = 0; i < len; i++)
        {
            if (vars[i] == id)
            {
                this[id] = value;
                return -1;
            }
        }

        return this.addVariable(id, value, type, expire);
    };

    _pApplication.getVariable = function (id)
    {
        var vars = this._variables;
        var len = vars.length;
        for (var i = 0; i < len; i++)
        {
            if (vars[i] == id)
            {
                return this[id];
            }
        }

        return null;
    };

    // mainwindow contents의 활성화된 form 객체를 return;
    // modal,modalasync,modeless,open과 같은 형태는 미지원
    // childframe windowtype = 0 이거나 form 자체가 main 인 경우만 취급
    _pApplication.getForms = function (bcontaineronly)
    {

        function isContainer(f) 
        {
            if (bcontaineronly)
            {
                return (f._is_main == true)
            }
            return true;
        }

        return this._containerforms.filter(isContainer);

    };

    _pApplication._pushContentsForm = function (form)
    {
        if (!this._containerforms)
        {
            this._containerforms = [];
        }

        // destroy된 대상이 있으면 filter 한다.
        this._getContentsForm();
        this._containerforms.push(form);
    }
    _pApplication._getContentsForm = function ()
    {
        const isAlive = function (f)
        {
            return (!f._closing && f._is_alive);
        };

        const keepMatchingItems = function (array, predicate)
        {
            for (let i = array.length - 1; i >= 0; i--)
            {
                if (!predicate(array[i], i, array))
                {
                    array.splice(i, 1); // 원본에서 제거
                }
            };

            return array.slice();
        }

        let ret = keepMatchingItems(this._containerforms, isAlive);

        return ret;
    };

    _pApplication.removeVariable = function (id)
    {
        var vars = this._variables;
        if (vars)
        {
            var len = vars.length;
            for (var i = 0; i < len; i++)
            {
                if (vars[i] == id)
                {
                    vars.splice(i, 1);
                    this[id] = null;
                    this._p_all.delete_item(id);
                    return;
                }
            }
        }
    };

    _pApplication.isExistVariable = function (id)
    {
        var vars = this._variables;
        var len = vars.length;
        for (var i = 0; i < len; i++)
        {
            if (vars[i] == id) return true;
        }

        return false;
    };

    _pApplication.lookup = function (name)
    {
        if (name in this)
            return this[name];

        return this._global_context[name];
    };

    _pApplication.lookupSetter = function (name, fnname)
    {
        if (!fnname) fnname = "set_" + name;

        var fn = this[fnname];
        if (fn)
        {
            return new nexacro.SetterBinder(this, name, fn);
        }
        if (name in this)
        {
            return new nexacro.PropBinder(this, name);
        }
        return new nexacro.PropBinder(this._global_context, name);
    };

    _pApplication.lookupFunc = function (name)
    {
        var fn = this[name];
        if (fn && fn instanceof Function)
        {
            return new nexacro.FuncBinder(this, fn);
        }
        fn = this._global_context[name];
        if (fn && fn instanceof Function)
        {
            return new nexacro.FuncBinder(this._global_context, fn);
        }
        return null;
    };

    //==============================================================================
    // nexacro.Application : Properties
    //==============================================================================
    // Application Object's properties

    _pApplication.set_version = function (v)
    {
        this._p_version = v;
    };

    _pApplication.set_licenseurl = function (v)
    {
        // this._p_licenseurl = v;            
        nexacro._onSystemWarning(this, "native_deprecate", "licenseurl");
    };

    _pApplication.set_screenid = function (screenid)
    {
        this._p_screenid = screenid;
    };

    _pApplication.set_xcssgroup = function (v) 
    {
        if (this._p_xcssgroup != v)
        {
            const xcssgroup = this._p_xcssgroup = nexacro._toString(v);
            if (xcssgroup)
                this._xcssgrouplist = xcssgroup.trim().split(",");
            else
                this._xcssgrouplist = [];

            this.on_apply_xcssgroup();
        }
    };

    _pApplication.on_apply_xcssgroup = nexacro._throttleAnimationFrame(function ()
    {
        const rootApps = nexacro.__MFEAPI._getRootApps();
        if (rootApps) // rootApps is MFE MainFrame or Form
        {
            rootApps.forEach(function (app)
            {
                const _window = app._getWindow();

                if (_window)
                    _window._setRootCSSClass();
            });
        }
        else // SPA
        {
            const frame = this._p_mainframe;
            const _window = frame._getWindow();

            _window._setRootCSSClass();
        }
        nexacro._broadcastXcssGroupUpdate(this._env, this);
    });

    _pApplication.set_xcssgroupfilter = function (v)
    {
        if (this._p_xcssgroupfilter != v)
        {
            const xcssgroupfilter = this._p_xcssgroupfilter = nexacro._toString(v);
            if (xcssgroupfilter)
                this._xcssgroupfilterlist = xcssgroupfilter.trim().split(",");
            else
                this._xcssgroupfilterlist = [];

            this.on_apply_xcssgroupfilter();
        }
    };

    _pApplication.on_apply_xcssgroupfilter = nexacro._throttleAnimationFrame(function ()
    {
       const rootApps = nexacro.__MFEAPI._getRootApps();
        if (rootApps) // rootApps is MFE MainFrame or Form
        {
            rootApps.forEach(function (app)
            {
                const _window = app._getWindow();

                if (_window)
                    _window._resetXcssGroupAutoSelector();
            });
        }
        else // SPA
        {
            const frame = this._p_mainframe;
            const _window = frame._getWindow();

            _window._resetXcssGroupAutoSelector();
        }
        nexacro._broadcastXcssGroupFilterUpdate(this._env, this);
    });

    _pApplication.reload_theme = function (/*form, url*/)
    {
    };

    _pApplication.reload = function ()
    {
        window.location.reload();
    };

    //------------------------------------------------
    // init
    //------------------------------------------------
    /*
     *  function name : init
     *  description : application init. 
     *     arguments  
        return : result 
     */
    _pApplication.init = function ()
    {
        nexacro._setBrowserErrorMsg();
        return;
    };

    _pApplication._checkLicense = function (strlicenseurl)
    {
        if (strlicenseurl == undefined || strlicenseurl.length <= 0)
            return;

        const env = this._env;
        var real_url = env._getServiceLocation(strlicenseurl);
        return nexacro._checkLicense(real_url, this.xadl);
    };



    // transaction Method
    //===============================================================================================================================================
    _pApplication.transaction = function (id, url, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress)
    {
        //bAsync,bBinary,bCompress -- option
        const env = this._env;
        var realurl = env._getServiceLocation(url);
        var service = env._getServiceObject(url, true);
        if (!callbackFn)
        {
            return new Promise((resolve, reject) =>
            {
                this._load_manager.loadDataModule(realurl, id, inDatasetsParam, outDatasetsParam, argsParam,
                    (resId, code, msg) =>
                    {
                        if (code >= 0)
                        {
                            resolve([code, msg]);
                        }
                        else
                        {
                            reject([code, msg]);
                        }
                    }, isAsync, datatype, isCompress, service);
            });
        }
        else
        {
            this._load_manager.loadDataModule(realurl, id, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress, service);
        }
    };
    //===============================================================================================================================================

    _pApplication.cancelTransaction = function (id)
    {
        if (!this._load_manager)
            return -1;
        nexacro._cancelTransaction(this, id);
    };

    //------------------------------------------------
    // exit
    //------------------------------------------------
    /*
     *  function name : beforeExit
     *  description : exit 할지 여부를 결정한다. 이벤트 처리
     *     arguments
     *  return : cancle 여부
     */
    _pApplication.beforeExit = function ()
    {
        return false;
    };

    /*
     *  function name : exit
     *  description : mainframe 이하의 모든 form과 widget의 form을 close 할지 확인(canclose) 후 close 시나리오 진행한다. 
     *                Modal 창에 대한 처리가 필요함
     *     arguments
     *  return : void
     */
    _pApplication._exit = function ()
    {
        // application.onbeforeexit는 mainframe beforeclose에서 통합호출

        // mainframe BeforeClose, Close process
        var mainframe = this._p_mainframe;
        var msg = mainframe._on_beforeclose();
            
        if (mainframe._checkAndConfirmClose(msg) === false)
            return false;

        // destroy tray
        this.removeTray();

        // 모든 창이 닫힘 확정 상태이므로 close confirm 무시
        var i;
        var popupframes = nexacro.getPopupFrames();
        if (popupframes)
        {
            var len = popupframes.length;
            for (i = len - 1; i >= 0; i--)
            {
                if (popupframes[i]._window)
                    popupframes[i]._window._ignore_close_confirm = true;
            }
        }

        mainframe._on_close();

        this.on_fire_onexit();

        this._env._removeProtocols();
        popupframes = nexacro.getPopupFrames();
        if (popupframes)
        {
            var popup_frame_len = popupframes.length;
            for (i = popup_frame_len - 1; i >= 0; i--)
            {
                var chframe = popupframes[i];
                if (chframe && chframe._p_form)
                {
                    chframe._p_form.close();
                }
            }
        }
        this._p_mainframe._destroy();

        this._global_context = null;   // lookup topmost
        //this._localecollator_list = null; // localecompare collator list
        nexacro._applicationExit();
    };

    _pApplication.exit = function ()
    {
        // 사용자 호출시 window.close를 같이 수행함.
        const app = nexacro.__MFEAPI?._getApplication();
        if (app)
            return; // MFE로 띄운 application은 exit를 호출하여, 창을 닫거나 할 수 없음
        if (this._exit() === false)
            return false;
        nexacro._applicationExit(true);
    };


    /*
      *  function name : alert
      *  description : alert를 띄우기 위해 필요하다.  Async 지원에 대한 논의가 필요
      *                구현 방법 논의 필요
      *     arguments
      *  return : 
      */
    _pApplication.alert = function (strText, strCaption, strType)
    {
        nexacro._skipDragEventAfterMsgBox = true;
        nexacro._alert(this, strText, strCaption, strType);
    };

    /*
     *  function name : confirm
     *  description : confirm를 띄우기 위해 필요하다. Async 지원에 대한 논의가 필요
     *                   구현 방법 논의 필요
     *     arguments
     *  return : 
     */
    _pApplication.confirm = function (strText, strCaption, strType)
    {
        nexacro._skipDragEventAfterMsgBox = true;
        return nexacro._confirm(this, strText, strCaption, strType);
    };

    /*
     *  function name : userconfirm
     *  description :  작업대상 아님
     *     arguments
     *  return : 
     */
    _pApplication.userconfirm = function (/*strCaption, strText, strType*/)
    {
        return true;
    };



    _pApplication.checkLicense = function (licenseurl)
    {
        this._checkLicense(licenseurl);
    };

    _pApplication.loadTypeDefinition = nexacro._emptyFn;
    _pApplication.on_initApplication = nexacro._emptyFn;
    _pApplication.on_loadAppVariables = nexacro._emptyFn;
    _pApplication.on_initEvent = nexacro._emptyFn;
    _pApplication.on_createBodyFrame = nexacro._emptyFn;

    _pApplication.initApplication = function ()
    {
        nexacro._initApplication();  //-> NRE for hide splash 
      //  nexacro._initLayoutManager(true, true, true);
        this.on_initApplication();
        //nexacro._initInformation(); -> env 로 이동
    };

    _pApplication.loadGlobalVariables = function ()
    {
        this.on_loadAppVariables();

        this._addInitialVariable();
        // 미리 저장해둔 globalvalue 값 -> global variable로
        this._addGlobalVariableFromGlobalValue();
    };

    _pApplication.initEvent = function ()
    {
        this.on_initEvent();
    };
    _pApplication.createBodyFrame = function (mainframe)
    {
        this.on_createBodyFrame(mainframe);
    };
    //loadinclude 호출시 
    //adl 
    // include A 
    // include B
    // adl-script    
    //A
    //include A-1
    //include A-2
    //A-script    
    //B
    //include B-1
    //include B-2
    //B-script

    //[0]A-1
    //[1]A-2
    //[2]A-script
    //[3]B-1
    //[4]B-2
    //[5]B-script    
    //[6]adl-script 
    //
    // index 0 번 script 처리됨

    //executescript를 generate 코드에서 직접 호출로 변경 
    _pApplication.executeIncludeScript = function (url)
    {
        nexacro._executeIncludeScript(this, url);
    };

    _pApplication._executeScript = function (context)
    {
        nexacro._executeMainScript(context);
    };

    _pApplication.registerScript = function (filename, fn)
    {
        nexacro._registerScript(this, filename, fn);
    };

    _pApplication.addIncludeScript = function (mainurl, url)
    {
        nexacro._addIncludeScript(this, mainurl, url);
    };


    _pApplication.loadIncludeScript = function (mainurl)
    {
        nexacro._loadIncludeScript(this, mainurl);
    };



    _pApplication._on_init = function ()
    {
        // globalvars 오류시 project load되지 않는 문제
        try
        {
            nexacro._observeGlobalEvent(null, "beforeuserconfirm", "onbeforeuserconfirm", this._on_callback_beforeuserconfirm);
            nexacro._observeGlobalEvent(null, "afteruserconfirm", "onafteruserconfirm", this._on_callback_afteruserconfirm);

            this.initApplication();

            if (this._p_mainframe)
                this._p_mainframe.createBodyFrame();

            this._executeScript(this);
            this.initEvent();

            this.loadGlobalVariables();
            this.on_fire_onloadingappvariables(this, this._globalvar_uri);

            var cnt, i;

            if (this._objects)
            {
                cnt = this._objects.length;
                for (i = 0; i < cnt; i++)
                {
                    this._objects[i].on_created();
                }
            }

            cnt = this._datasets.length;
            for (i = 0; i < cnt; i++)
            {
                this._datasets[i].on_created();
            }

            cnt = this._dataobjects.length;
            for (i = 0; i < cnt; i++)
            {
                this._dataobjects[i].on_created();
            }

            if (this._p_mainframe)
            {
                this._p_mainframe.createComponent();
                this._p_mainframe.on_created();
            }

            cnt = this._p_trays.length;
            for (i = 0; i < cnt; i++)
            {
                this._p_trays[i].on_created();
            }

            //nexacro._is_loaded_application = true;
            this._is_loaded = true;

        }
        catch (e)
        {
            if (e.obj)
            {
                nexacro._onSystemError(e.obj, e.name, e.message);
            }
            else
            {
                var msg = nexacro._getExceptionMessage(e);

                const env = this._env;
                if (env)
                {
                    nexacro._onSystemError(env, e.name, msg);
                }
            }
        }
    };

    // TODO check nexacro API로 옮기는게 맞을런지?? ..
    _pApplication._beginCommProgress = function ()
    {
        var mainframe = this._p_mainframe;
        var statusbar = mainframe ? mainframe._p_statusbar : null;
        if (statusbar)
        {
            statusbar._beginCommProgress();
        }
    };

    _pApplication._stepCommProgress = function (current, overall)
    {
        var mainframe = this._p_mainframe;
        var statusbar = mainframe ? mainframe._p_statusbar : null;
        if (statusbar)
        {
            statusbar._stepCommProgress(current, overall);
        }
    };

    _pApplication._endCommProgress = function ()
    {
        var mainframe = this._p_mainframe;
        var statusbar = mainframe ? mainframe._p_statusbar : null;
        if (statusbar)
        {
            statusbar._endCommProgress();
        }
    };

    _pApplication.enableAutoUpdate = function ()
    {
        // only mobile runtime
        this._id = nexacro.Device.makeID();
        nexacro.Device._userCreatedObj[this._id] = this;

        var jsonstr = '{"id":' + this._id + ', "div":"Update",  "method":"enableAutoUpdate"}';
        nexacro.Device.exec(jsonstr);
    };

    _pApplication.set_mainframe = function (mainframe)
    {
        this._p_mainframe = mainframe;
    };

    _pApplication._addLoadCallbacklist = function (item)
    {
        if (!this._is_loaded)
        {
            if (!this._load_callbacklist)
                this._load_callbacklist = [];
            this._load_callbacklist.push(item);
            return true;
        }
        return false;
    };

    _pApplication._load = function (key, url)
    {
        this.key = key;
        //load theme

        this.xadl = url;
        //load adl
        const env = this._env;
        var service = env._getServiceObject(url);
        this._load_manager.loadMainModule(url, false, true, false, service);

        this._generateBroadcastChannelName();
    };

    _pApplication._on_rootcssclasschange = function (precssclass, postcssclass)
    {
        const mainframe = this._p_mainframe;
        if (mainframe)
            mainframe._on_rootcssclasschange(precssclass, postcssclass);
    };

    _pApplication._properties = [{ name: "version" }, { name: "licenseurl" }, { name: "screenid" }, { name: "mainframe" }, { name: "all", readonly: true }, { name: "trays", readonly: true }, { name: "xcssgroup" }, { name: "xcssgroupfilter" }];
    nexacro._defineProperties(_pApplication, _pApplication._properties);

    _pApplication = null;

    //---------------------------------------------------------------------------------------
    // Touch & Gesture Manager
    //---------------------------------------------------------------------------------------
    nexacro._TouchGestureManager = function ()
    {
    };

    var _pTouchGestureManager = nexacro._TouchGestureManager.prototype;

    // Internal Variables
    _pTouchGestureManager._touch_session = null;
    _pTouchGestureManager._start_win = null;
    _pTouchGestureManager._start_elem = null;

    _pTouchGestureManager._first_touch = null;

    /*
    _pTouchGestureManager._allow_default = false; // <-> preventDefault touch events
    _pTouchGestureManager._slide_lock_horz = false;
    _pTouchGestureManager._slide_lock_vert = false;
    */

    _pTouchGestureManager._is_pressed = false;
    _pTouchGestureManager._is_fling = false;
    _pTouchGestureManager._is_tap = false;
    _pTouchGestureManager._is_ondrag = false;

    _pTouchGestureManager._scroll_end = true;
    _pTouchGestureManager._scroll_comp = null;
    _pTouchGestureManager._scroll_mode = -1;
    // 로직문제를 변수추가로 해결하지 말 것.


    //==== RawTouchEvent Handling ==========================================//
    _pTouchGestureManager.ontouchstart = function (win, elem, touches, changedTouches, time)
    {
        var session = this._touch_session;

        var ret = true;
        var touch_len = touches.length;
        var change_len = changedTouches.length;

        var is_first = (touch_len == change_len);
        if (is_first)
        {
            this._start_win = win;
            this._start_elem = elem;
            this._is_pressed = false;
            this._is_tap = false;
            this._is_ondrag = false;
        }

        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_compinfo = win.findComponent(target_elem, 0, 0);
        var target_elem_pos = target_elem._getPositionInWindow();

        // set TouchInput
        var touch_input = new nexacro.TouchInput(elem, "touchstart", time);

        var touch, touchTarget;
        var compinfo, elem_pos, client_pos, comp;
        for (var i = 0; i < touch_len; i++)
        {
            touch = touches[i];
            touchTarget = touch.target || elem;

            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (is_first && i == 0);
            touch_input.addTouchInfo(touch);
        }

        if (is_first)
        {
            win._curWindowX = touch_input.touches[0].windowx; //save x at lbuttondown for track
            win._curWindowY = touch_input.touches[0].windowy; //save x at lbuttondown for track
        }

        // fire ontouchstart event
        this.on_fire_ontouch(win, target_compinfo[0], target_elem, touch_input);

        if (is_first)
        {
            if (session && this._is_fling)
            {
                session.stop(); // for cur_detector(slide) fix
                session.init();

                this._touch_session = new nexacro.TouchSession(this, win, target_elem, session);
                session = this._touch_session;
            }
            else
            {
                this._touch_session = new nexacro.TouchSession(this, win, target_elem, session);
                if (session)
                {
                    session.destroy(); // stop fling
                }

                session = this._touch_session;
                this._is_fling = false;
            }
        }

        session.ontouch(target_elem, touch_input);

        if (!touch_input.prevented)// && this.checkPreventDefault(elem, 0))
        {
            ret = false;
        }

        return ret;
    };

    _pTouchGestureManager.ontouchmove = function (win, elem, touches, changedTouches, time)
    {
        var session = this._touch_session;
        if (!session)
            return;
        var trackInfo;
        const env = win._getEnvironment();
        const enabletouchevent = env._p_enabletouchevent;
        if (enabletouchevent)        
        {
            trackInfo = nexacro._cur_track_info;
        }
        var ret = true;
        var touch_len = touches.length;

        var target_elem = elem ? elem : this._start_elem;
        var target_compinfo = win.findComponent(target_elem, 0, 0);
        var target_elem_pos = target_elem._getPositionInWindow();

        // set TouchInput
        var touch_input = new nexacro.TouchInput(elem, "touchmove", time);

        var first_touch_id = session.getFirstTouchId();
        var touch, touchTarget;
        var compinfo, elem_pos, client_pos, comp, canvasX, canvasY;
        for (var i = 0; i < touch_len; i++)
        {
            touch = touches[i];

            if (!touch.target && !elem) return;
            touchTarget = touch.target || elem;

            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (first_touch_id == touch.id);
            touch_input.addTouchInfo(touch);
        }

        var prev_elem = session._cur_elem;
        if (touch_len == 1)
        {
            var dragInfo = nexacro._cur_drag_info;
            // var is_drag_return = false;
            if (dragInfo)
            {
                this._is_ondrag = true;
                touch = touches[0];
                var windowX = touch.windowx, windowY = touch.windowy;
                var screenX = touch.screenx, screenY = touch.screeny;
                var xdeltavalue = windowX - dragInfo.startX;
                var ydeltavalue = windowY - dragInfo.startY;
                if (!dragInfo.isDragging)
                {
                    if (windowX != dragInfo.startX || windowY != dragInfo.startY)
                    {
                        var drag_elem = dragInfo.target_elem;
                        comp = win.findComponent(drag_elem);
                        elem_pos = drag_elem._getPositionInWindow();
                        canvasX = windowX - elem_pos[0];
                        canvasY = windowY - elem_pos[1];
                        var retDrag = comp._on_drag(drag_elem, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                        if (retDrag && retDrag[0] === true)
                        {
                            dragInfo.isDragging = true;
                            dragInfo.target = retDrag[1];
                            dragInfo.referTarget = retDrag[2];
                            dragInfo.data = retDrag[3];
                            dragInfo.userdata = retDrag[4];
                            if (enabletouchevent)
                            {
                                if (trackInfo && trackInfo.target && trackInfo.target._is_tracking == true)
                                {
                                    trackInfo.distX = windowX - trackInfo.startX;
                                    trackInfo.distY = windowY - trackInfo.startY;
                                }
                            }
                            comp._on_dragmove(drag_elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, "touch", false, false, false, canvasX, canvasY, screenX, screenY, xdeltavalue, ydeltavalue);

                            // TODO Fire Enter & Leave ?

                            session.stop();

                            if (!trackInfo || !trackInfo.use_drag_track)
                                return true;
                        }
                    }
                    nexacro._initDragInfo();
                }
                else
                {
                    elem = (touch.target || elem);
                    comp = win.findComponent(elem);
                    var ischild = false;
                    if (dragInfo.target && dragInfo.target._contains)
                        ischild = dragInfo.target._contains(comp);
                    if ((comp && !dragInfo.isSelfAction) || comp && (ischild && dragInfo.isSelfAction))
                    {
                        if (prev_elem == elem)
                        {
                            elem_pos = comp.getElement()._getPositionInWindow();
                            canvasX = windowX - elem_pos[0];
                            canvasY = windowY - elem_pos[1];
                            if (enabletouchevent)
                            {
                                if (trackInfo && trackInfo.target && trackInfo.target._is_tracking == true)
                                {
                                    trackInfo.distX = windowX - trackInfo.startX;
                                    trackInfo.distY = windowY - trackInfo.startY;
                                }
                            }
                            comp._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, "touch", false, false, false, canvasX, canvasY, screenX, screenY, xdeltavalue, ydeltavalue);
                        }
                        else
                        {
                            var from_comp;
                            if (prev_elem && prev_elem.handle)
                            {
                                from_comp = win.findComponent(prev_elem);
                                elem_pos = from_comp.getElement()._getPositionInWindow();
                                canvasX = windowX - elem_pos[0];
                                canvasY = windowY - elem_pos[1];
                                from_comp._on_dragleave(prev_elem, comp, dragInfo.target, dragInfo.referTarget, dragInfo.data,
                                    dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                            }
                            if (elem && elem.handle)
                            {
                                from_comp = win.findComponent(prev_elem);
                                elem_pos = comp.getElement()._getPositionInWindow();
                                canvasX = windowX - elem_pos[0];
                                canvasY = windowY - elem_pos[1];
                                comp._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data,
                                    dragInfo.userdata, dragInfo.datatype, dragInfo.filelist, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                            }
                        }
                    }

                    session.update(target_elem, touch_input);

                    if (!trackInfo || !trackInfo.use_drag_track)
                        return true;
                }
            }

            if (enabletouchevent)
            {

                var repeatInfo = nexacro._cur_repeat_info;
                touch = touches[0];
                var windowx = touch.windowx;
                var windowy = touch.windowy;
                if (repeatInfo)
                {
                    repeatInfo.distX = windowx - repeatInfo.startX;
                    repeatInfo.distY = windowy - repeatInfo.startY;
                    repeatInfo.canvasX = repeatInfo.startCanvasX + repeatInfo.distX;
                    repeatInfo.canvasY = repeatInfo.startCanvasY + repeatInfo.distY;
                }

                if (trackInfo)
                {
                    trackInfo.distX = windowx - trackInfo.startX;
                    trackInfo.distY = windowy - trackInfo.startY;
                    trackInfo.target._on_movetrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
                }
            }
        }

        this.on_fire_ontouch(win, target_compinfo[0], target_elem, touch_input);

        session.ontouch(target_elem, touch_input);

        if (!touch_input.prevented)// && this.checkPreventDefault(elem, 1))
        {
            ret = false;
        }

        return ret;
    };

    _pTouchGestureManager.ontouchend = function (win, elem, touches, changedTouches, time)
    {
        var session = this._touch_session;
        if (!session)
            return;

        var ret = true;
        var touch_len = touches.length;
        var change_len = changedTouches.length;

        var is_last = touch_len == 0;
        if (is_last)
        {
            this._is_pressed = false;
        }

        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_compinfo = win.findComponent(target_elem, 0, 0);
        var target_elem_pos = target_elem._getPositionInWindow();

        // set TouchInput
        var touch_input = new nexacro.TouchInput(elem, "touchend", time);

        var first_touch_id = session.getFirstTouchId();
        var touch, touchTarget, i;
        var compinfo, elem_pos, client_pos, comp = null;
        for (i = 0; i < change_len; i++)
        {
            touch = changedTouches[i];

            if (!touch.target && !elem) return;
            touchTarget = touch.target || elem;

            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (first_touch_id == touch.id);
            touch_input.addTouchInfo(touch);
        }
        for (i = 0; i < touch_len; i++)
        {
            touch = touches[i];
            touchTarget = touch.target || elem;

            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (first_touch_id == touch.id);
            touch_input.addTouchInfo(touch);
        }

        if (is_last)
        {
            var up_touch = changedTouches[change_len - 1];
            var up_elem = up_touch.target || elem;

            // Drag & Drop (drop)
            var dragInfo = nexacro._cur_drag_info;
            if (up_elem && dragInfo && dragInfo.isDragging)
            {
                comp = win.findComponent(up_elem);
                var ischild = false;
                if (dragInfo.target && dragInfo.target._contains)
                    ischild = dragInfo.target._contains(comp);
                if ((comp && !dragInfo.isSelfAction) || comp && (ischild && dragInfo.isSelfAction))
                {
                    comp._on_drop(up_elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, dragInfo.datatype, dragInfo.filelist,
                        "touch", false, false, false, up_touch.canvasx, up_touch.canvasy, up_touch.screenx, up_touch.screeny);

                    session.stop();
                }
            }

            var windowX = up_touch.windowx;
            var windowY = up_touch.windowy;

            var repeatInfo = nexacro._cur_repeat_info;
            if (repeatInfo)
            {
                if (repeatInfo._timer)
                {
                    var handle = nexacro._getWindowHandle(win.handle);
                    nexacro._clearSystemTimer(handle, repeatInfo._timer);
                }
                repeatInfo.distX = windowX - repeatInfo.startX;
                repeatInfo.distY = windowY - repeatInfo.startY;
                repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
                nexacro._cur_repeat_info = null;
            }

            var trackInfo = nexacro._cur_track_info;
            if (trackInfo)
            {
                trackInfo.distX = windowX - trackInfo.startX;
                trackInfo.distY = windowY - trackInfo.startY;
                trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
                nexacro._initTrackInfo();
            }
        }
        nexacro._initDragInfo();

        var target_comp = target_compinfo[0];
        // fire ontouchend event
        this.on_fire_ontouch(win, target_comp, target_elem, touch_input);
        this._is_ondrag = false;

        const env = win._getEnvironment();
        if (env._p_enabletouchevent)
        {
            // grid용 제거하면 좋겠는데...
            if (target_comp && target_comp._is_alive)
                target_comp._on_last_lbuttonup();
        }

        session.ontouch(target_elem, touch_input);

        if (!touch_input.prevented)// && this.checkPreventDefault(elem, 2))
        {
            ret = false;
        }

        return ret;
    };

    _pTouchGestureManager.ontouchcancel = function (win, elem, touches, changedTouches, time)
    {
        var touch_len = touches.length;
        var change_len = changedTouches.length;

        var session = this._touch_session;
        if (!session)
            return;

        var is_last = touch_len == 0;
        if (is_last)
        {
            this._touch_session = null;
            this._is_fling = false;
            this._is_pressed = false;
        }

        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_compinfo = win.findComponent(target_elem, 0, 0);
        var target_elem_pos = target_elem._getPositionInWindow();

        // set TouchInput
        var touch_input = new nexacro.TouchInput(elem, "touchcancel", time);
        var compinfo, elem_pos, client_pos, comp = null, i;
        var touch, touchTarget, first_touch_id = session.getFirstTouchId();
        for (i = 0; i < change_len; i++)
        {
            touch = changedTouches[i];
            touchTarget = touch.target || elem;
            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (first_touch_id == touch.id);
            touch_input.addTouchInfo(touch);
        }
        for (i = 0; i < touch_len; i++)
        {
            touch = touches[i];
            touchTarget = touch.target || elem;
            if (touchTarget != target_elem)
            {
                compinfo = win.findComponent(touchTarget, 0, 0);
                elem_pos = touchTarget._getPositionInWindow();
            }
            else
            {
                compinfo = target_compinfo;
                elem_pos = target_elem_pos;
            }

            if (compinfo && compinfo[0] && elem_pos)
            {
                touch._canvasx = touch.canvasx = touch.windowx - elem_pos[0] + compinfo[1];
                touch._canvasy = touch.canvasy = touch.windowy - elem_pos[1] + compinfo[2];

                comp = compinfo[0];
                client_pos = comp._getClientXY(touch.canvasx, touch.canvasy);
                touch.clientx = client_pos[0];
                touch.clienty = client_pos[1];
            }

            touch.isfirst = (first_touch_id == touch.id);
            touch_input.addTouchInfo(touch);
        }

        session.ontouchcancel(target_elem, touch_input);

        if (this._touch_session == null)
        {
            session.destroy();
        }
        return true;
    };

    _pTouchGestureManager.onactioncanceled = function (/*elem, data, touches, changedTouches*/)
    {
        this._is_pressed = false;
        this._is_fling = false;
    };

    _pTouchGestureManager.onslidestart = function (elem, data, touches, changedTouches)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            var prevented = compinfo[0]._on_slidestart(target_elem, this, touches, data.distanceX, data.distanceY, data.deltaDistanceX, data.deltaDistanceY);
            if (prevented)
            {
                this._touch_session._cur_input.prevented = true;
            }
        }
    };
    _pTouchGestureManager.onslide = function (elem, data, touches, changedTouches)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            var prevented = compinfo[0]._on_slide(target_elem, this, touches, data.distanceX, data.distanceY, data.deltaDistanceX, data.deltaDistanceY);
            if (prevented)
            {
                this._touch_session._cur_input.prevented = true;
            }
        }
    };

    _pTouchGestureManager.onslideend = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            this._is_next_fire_fling = !!data.is_next_fire_fling;

            var prevented = compinfo[0]._on_slideend(target_elem, this, touches, data.distanceX, data.distanceY, data.deltaDistanceX, data.deltaDistanceY);
            if (prevented)
            {
                this._touch_session._cur_input.prevented = true;
            }
        }

        this._scroll_end = true;
        this._scroll_comp = null;
        this._scroll_mode = -1;
    };

    _pTouchGestureManager.onpinchstart = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var session = this._touch_session;
        if (!session) return;

        var first_spacing = session._first_pointer_spacing;
        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_pinchstart(target_elem, touches, data.accDeltaSpacing, data.deltaSpacing, first_spacing, data.spacing);
        }
    };
    _pTouchGestureManager.onpinch = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var session = this._touch_session;
        if (!session) return;

        var first_spacing = session._first_pointer_spacing;
        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_pinch(target_elem, touches, data.accDeltaSpacing, data.deltaSpacing, first_spacing, data.spacing);
        }
    };
    _pTouchGestureManager.onpinchend = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var session = this._touch_session;
        if (!session) return;

        var first_spacing = session._first_pointer_spacing;
        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_pinchend(target_elem, touches, data.accDeltaSpacing, data.deltaSpacing, first_spacing, data.spacing);
        }
    };
    _pTouchGestureManager.onlongpress = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var touch;
        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            const env = target_win._getEnvironment();
            if (env._p_enabletouchevent)
            {
                compinfo[0]._on_longpress(target_elem, touches);
            }
            else
            {
                touch = this.getFirstTouchInputInfo(touches);
                compinfo[0]._on_rbuttondown(target_elem, "touch", false, false, false, touch._canvasx, touch._canvasy, touch.screenx, touch.screeny);
                this._is_ondrag = false;
            }
            if (nexacro._OS == "iOS")
            {
                //ios 브라우저에서 지원되지 않으므로 여기서 넣어준다.
                //추후에 sys_event로 처리가 가능하다면 2번 발생하므로 삭제
                //on_fire_user_onlongpress에 iOS분기는 삭제
                touch = this.getFirstTouchInputInfo(touches);
                target_win._on_default_sys_contextmenu(target_elem, "touch", false, false, false, touch.windowx, touch.windowy, touch.screenx, touch.screeny, touch._canvasx, touch._canvasy, false);
            }
        }
        this._is_pressed = true;
    };
    _pTouchGestureManager.onlongpressup = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            if (target_elem != elem)
            {
                var up_comp = nexacro._findParentComponent(elem);
                if (compinfo[0] != up_comp) return;
            }
            const env = target_win._getEnvironment();
            if (!env._p_enabletouchevent)            
            {
                var touch = this.getFirstTouchInputInfo(touches);
                compinfo[0]._on_rbuttonup(target_elem, "touch", false, false, false, touch._canvasx, touch._canvasy, touch.screenx, touch.screeny);
            }
        }
        this._is_pressed = false;
    };
    _pTouchGestureManager.ontap = function (elem, data, touches/*, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            if (target_elem != elem)
            {
                var up_comp = nexacro._findParentComponent(elem);
                if (compinfo[0] != up_comp) return;
            }

            var touch = this.getFirstTouchInputInfo(touches);
            const env = target_win._getEnvironment();
            if (env._p_enabletouchevent)            
            {
                compinfo[0]._on_tap(target_elem, touch._canvasx, touch._canvasy, touch.screenx, touch.screeny);
            }
            // delete call _on_sys_mousemove, _on_lbuttondown, _on_sys_lbuttonup -> browser native event

        }
        this._is_tap = true;
    };
    _pTouchGestureManager.ondbltap = function (elem, data, touches/*, changedTouches*/)
    {
        return;
        // delete call on_dbltap -> browser native event        
    };

    _pTouchGestureManager.onflingstart = function (elem, data/*, touches, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_flingstart(target_elem, this, data.centerX, data.centerY, data.deltaDistanceX, data.deltaDistanceY, data.touchPointers);

            this._is_fling = true;
        }
    };

    _pTouchGestureManager.onfling = function (elem, data/*, touches, changedTouches*/)
    {
        var target_elem = this._start_elem ? this._start_elem : elem;
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_fling(target_elem, this, data.centerX, data.centerY, data.deltaDistanceX, data.deltaDistanceY, data.touchPointers);
        }
    };

    _pTouchGestureManager.onflingend = function (elem, data/*, touches, changedTouches*/)
    {
        var target_elem = this._cur_elem ? this._cur_elem : elem;   // 다른 컴포넌트의 touchstart로 fling이 stop되는 경우 때문에 this._start_elem대신 cur_elem으로 사용해야 된다. 
        var target_win = this._start_win ? this._start_win : target_elem._getWindow();
        if (!target_elem || !target_win) return;

        var compinfo = target_win.findComponent(target_elem, 0, 0);
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_flingend(target_elem, this, data.centerX, data.centerY, data.deltaDistanceX, data.deltaDistanceY, data.touchPointers);
        }

        this._scroll_end = true;
        this._scroll_comp = null;
        this._scroll_mode = -1;

        this._is_fling = false;
    };

    //==== Fire Touch & Gesture Event functions ==========================================//
    _pTouchGestureManager.on_fire_ontouch = function (win, comp, elem, input)
    {
        if (!win || !elem || !input) return;
        if (!comp)
        {
            comp = win.findComponent(elem);
            if (!comp) return;
        }

        var evttype = input.type;
        var touches = input.touches;

        var changedTouches = input.changedTouches;
        var firstTouch = this.getFirstTouchInputInfo(touches);

        // fire
        const env = win._getEnvironment();
        if (env._p_enabletouchevent)
        {
            var ret;
            switch (evttype)
            {
                case nexacro.Touch._TOUCH_START:
                    if (firstTouch && firstTouch.target)
                        win._cur_ldown_elem = firstTouch.target;
                    comp._on_touchstart(this, touches, changedTouches);
                    break;
                case nexacro.Touch._TOUCH_MOVE:
                    comp._on_touchmove(this, touches, changedTouches);
                    break;
                case nexacro.Touch._TOUCH_END:
                    ret = comp._on_touchend(this, touches, changedTouches);
                    // if (this._is_ondrag && this._scroll_mode == -1) //check
                    // {
                    //     if (win._cur_ldown_elem == null)
                    //     {
                    //         var touch = this.getFirstTouchInputInfo(touches);
                    //         if (touch && elem == touch.target)
                    //             comp._on_tap(elem, touch._canvasx, touch._canvasy, touch.screenx, touch.screeny);
                    //     }
                    // }
                    if (ret == true)
                    {
                        input.preventAction();
                    }
                    win._cur_ldown_elem = null;
                    break;
            }
        }
        else if (firstTouch)
        {
            var target = firstTouch.target;
            // EnableTouchEvent = false인 경우 적절한 MouseEvent로 변환하여 Fire
            switch (evttype)
            {
                case nexacro.Touch._TOUCH_START:

                    win._on_touch_to_lbuttondown(target, "touch", false, false, false, firstTouch.windowx, firstTouch.windowy, firstTouch.screenx, firstTouch.screeny);
                    break;
                case nexacro.Touch._TOUCH_MOVE:

                    // if (win._cur_ldown_elem == null) // tap이 아닐때 lbuttondown 발생해야 하는데....
                    // {
                    //     win._on_sys_lbuttondown(target, "touch", false, false, false, firstTouch.windowx, firstTouch.windowy, firstTouch.screenx, firstTouch.screeny);
                    // }
                    win._on_sys_mousemove(target, "touch", false, false, false, firstTouch.windowx, firstTouch.windowy, firstTouch.screenx, firstTouch.screeny);
                    // 
                    break;
                case nexacro.Touch._TOUCH_END:
                    //if (!this._is_pressed && !this._is_tap)// && this._tap_blocked)
                    // if (this._is_ondrag == true && this._scroll_mode == -1)
                    // {
                    //     if (win._cur_ldown_elem == null) // tap이 아닐때 lbuttondown 발생해야 하는데....
                    //     {
                    //         win._on_sys_lbuttondown(this._start_elem, "touch", false, false, false, firstTouch.windowx, firstTouch.windowy, firstTouch.screenx, firstTouch.screeny);
                    //         win._on_sys_lbuttonup(target, "touch", false, false, false, firstTouch.windowx, firstTouch.windowy, firstTouch.screenx, firstTouch.screeny, undefined, undefined, undefined, elem);                        
                    //     }
                    // }

                    break;
            }
        }

    };

    _pTouchGestureManager.checkPreventDefault = function (elem, type)
    {
        /* 2017.04.25
            input에 mouseup/mousedown이 발생하면 무조건 focus가 갈수밖에 없음.
            Touch 리팩토링으로 인해 nexacro14의 validation이 전부 검증이 안된상태.
            touch 로인한 동작중 input과 focus가 연관된 동작은 이쪽에서 확인해야함. 6월 정기 전에 주석 삭제
        */
        var focused_comp;
        var linkedcontrol = elem ? elem.linkedcontrol : null;
        if (!linkedcontrol && elem && elem.parent)
        {
            linkedcontrol = elem.parent.linkedcontrol;

            if ((elem instanceof nexacro.InputElement) && linkedcontrol._is_subcontrol)
            {
                linkedcontrol = linkedcontrol._getRootComponent(linkedcontrol);
            }
        }

        while (linkedcontrol && !linkedcontrol._is_focus_accept)
        {
            linkedcontrol = linkedcontrol.parent;
        }

        if (linkedcontrol && linkedcontrol._refform)
        {
            if (linkedcontrol._refform.getFocus)
            {
                focused_comp = linkedcontrol._refform.getFocus();
            }
            else if (linkedcontrol._refform._p_form && linkedcontrol._refform._p_form.getFocus)
            {
                focused_comp = linkedcontrol._refform._p_form.getFocus();
            }
        }

        if (!elem || !linkedcontrol)
            return;

        const env = linkedcontrol._getEnvironment();
        var is_plugin_elem, is_webbrowser;
        if (nexacro._OS == "iOS")
        {
            switch (type)
            {
                case 0: // touchstart
                    break;
                case 1: // touchmove
                    if (this._scroll_end)
                    {
                        var _comp = linkedcontrol;
                        if (_comp)
                        {
                            var _dragscrolltype = _comp._p_dragscrolltype;
                            var _scrolltype = _comp._scrolltype || _comp._p_scrolltype;
                            if (_scrolltype == "none" || _dragscrolltype == "none")
                            {
                                break;
                            }
                        }
                        return true;
                    }
                    break;
                case 2: // touchend
                    return true;
                // if (focused_comp == linkedcontrol && nexacro._BrowserVersion < 13)
                //     return true;

                // var is_focused_input = elem instanceof nexacro.InputElement;
                // if (is_focused_input)
                //     return true;

                // if (elem._use_decoration)
                //     return true;

                // if (env._p_enableaccessibility)
                //     return true;

                // is_plugin_elem = elem instanceof nexacro.PluginElement;
                // if (is_plugin_elem)
                //     return true;

                // is_webbrowser = nexacro._isWebTypeComponent(focused_comp);
                // if (is_webbrowser)
                //     return true;
                // // TODO Focus되지 않은 Input에 Tap 하는 경우, Tap위치에 바로 Caret 이동 How to??
                // break;
            }
        }
        else if (nexacro._OS == "Android" || nexacro._AndroidDesktopMode)
        {
            switch (type)
            {
                case 0: // touchstart
                    return true;
                case 1: // touchmove
                    if (this._scroll_end)
                        return true;
                    break;
                case 2: // touchend
                    return true;
                // var focused_comp_type = "normal";
                // if (focused_comp)
                // {
                //     if (focused_comp._has_inputElement == true)
                //     {
                //         if (!(focused_comp instanceof nexacro.Combo) || focused_comp.type != "dropdown")
                //             focused_comp_type = "edit";
                //     }
                // }

                // //var is_focused_input = (focused_comp == linkedcontrol);
                // //if (is_focused_input)
                // //    return true;
                // if (focused_comp_type == "edit")
                // {
                //     if (!(elem instanceof nexacro.InputElement))
                //     {
                //         if (linkedcontrol instanceof nexacro.Form)
                //             return true;
                //         if (focused_comp._has_inputElement)
                //             return true;
                //     }
                //     else
                //         return true;
                // }

                // if (elem._use_decoration)
                //     return true;

                // if (env._p_enableaccessibility)
                //     return true;

                // is_plugin_elem = elem instanceof nexacro.PluginElement;
                // if (is_plugin_elem)
                //     return true;

                // is_webbrowser = nexacro._isWebTypeComponent(focused_comp);
                // if (is_webbrowser)
                //     return true;

                // break;
            }
        }
        else if (nexacro._OS == "Windows" && nexacro._SupportTouchEvent)
        {
            // Window도 터치 환경이 존재하여 focus를 직접 받는 컴포넌트는 이벤트를 차단하지 않도록 추가
            // 다른 모바일 OS의 일부분은 기본으로 가져옴( plugin, webbrowser, decoration, input, accessibility)
            switch (type)
            {
                case 0: // touchstart
                case 1: // touchmove
                    break;
                case 2: // touchend
                    return true;
                // if (elem._use_decoration)
                //     return true;

                // if (env._p_enableaccessibility)
                //     return true;

                // is_plugin_elem = elem instanceof nexacro.PluginElement;
                // if (is_plugin_elem)
                //     return true;

                // if (focused_comp)
                // {
                //     if (focused_comp._has_inputElement == true)
                //         return true;

                //     is_webbrowser = nexacro._isWebTypeComponent(focused_comp);
                //     if (is_webbrowser)
                //         return true;
                // }

                // break;
            }
            return false;
        };
    };

    _pTouchGestureManager.updateTouchInputInfosCanvasXY = function (touchinputinfos, offsetX, offsetY)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            touchinputinfo.canvasx += offsetX;
            touchinputinfo.canvasy += offsetY;
        }
    };

    _pTouchGestureManager.updateTouchInputInfosClientXY = function (touchinputinfos, comp)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            var clientXY = comp._getClientXY(touchinputinfo.canvasx, touchinputinfo.canvasy);
            touchinputinfo.clientx = clientXY[0];
            touchinputinfo.clienty = clientXY[1];
        }
    };


    _pTouchGestureManager.getFirstTouchInputInfo = function (touchinputinfos)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            if (touchinputinfo.isfirst)
                return touchinputinfo;
        }

        return null;
    };

    //---------------------------------------------------------------------------------------
    // FlingHandler (TouchManager[1]---[0..n]FlingHandler)
    //---------------------------------------------------------------------------------------
    nexacro._FlingHandler = function (id, win, elem, scroll_comp, scroll_mode, touchinfos, totalx, totaly, speedx, speedy, duration, touchlen, touch_manager)
    {
        this._id = id;
        this._touch_manager = touch_manager;

        // totalx,totaly = Scroll처리시 총 이동해야 할 양
        var compinfo = win.findComponent(elem, 0, 0);
        if (compinfo && compinfo[0] && (totalx || totaly))
        {
            this._target_comp = compinfo[0];
            this.totalx = totalx;
            this.totaly = totaly;
            this.speedx = speedx;
            this.speedy = speedy;
            this.duration = duration;
            this.touchlen = touchlen;

            this._target_window = win;
            this._target_elem = elem;
            this._starttime = (new Date()).getTime();
            this._compinfo = compinfo;
            this._scroll_comp = scroll_comp;
            this._scroll_mode = scroll_mode;
            this._oldspeedx = this._oldspeedy = this._oldcurvevalue = 0.0;

            this._is_alive = true;
        }
        else
        {
            this._is_alive = false;
        }

        if (!nexacro._FlingHandler.prototype._fling_bezier)
        {
            nexacro._FlingHandler.prototype._fling_bezier = new nexacro._CubicBezier(0.1, 0.4, 0.3, 1);
        }
    };

    var __pFlingHandler = nexacro._FlingHandler.prototype;
    //__pFlingHandler._scroll_mode_tts = 0; // 0: timer 1:CSS transform
    __pFlingHandler._fling_interval = 20;
    __pFlingHandler._fling_bezier = null;

    __pFlingHandler.start = function ()
    {
        // flingstart Event
        var touch_manager = this._touch_manager;
        var ret = touch_manager.on_fire_onflingstart(
            this._target_elem, this._compinfo, this,
            this.speedx, this.speedy,
            this.speedx, this.speedy,
            this.touchlen);
        if (ret == true)
        {
            // dead end
            this._touch_manager.onflingend(this._id);
            return;
        }

        // fling Event
        this._flingend_timer = new nexacro._TouchTimer(this._target_window, this._on_flingend_timer, this, this.duration);

        var pThis = this;
        this._fling_timer = new nexacro.AnimationFrame(this._target_comp, function () { pThis._on_fling_frame(); });
        this._fling_timer.start();
    };

    __pFlingHandler.stop = function ()
    {
        // Fling과 Scroll 모두 중단
        if (this._flingend_timer && this._flingend_timer.isWait())
        {
            this._fling_timer.stop();
            this._flingend_timer.stop();

            // flingend Event
            this.on_fire_onflingend();

            // dead
            this._touch_manager.onflingend(this._id);
        }
    };

    __pFlingHandler._on_fling_timer = function ()
    {
        // Interpolation
        var t = (new Date()).getTime() - this._starttime;
        if (!this._is_alive)
            return t;

        // Bezier곡선에서 현재 X에 해당하는 Y값 얻기
        var fling_bezier = this._fling_bezier;
        var epsilon = 1.0 / (200.0 * this.duration); // ?
        var solvedX = fling_bezier._getTForCoordinate(t / this.duration, fling_bezier._p1.x, fling_bezier._p2.x, epsilon);
        var c = fling_bezier._getCoordinateForT(solvedX, fling_bezier._p1.y, fling_bezier._p2.y);

        var offset_c = c - this._oldcurvevalue;
        var xdelta = (offset_c * this.speedx);
        var ydelta = (offset_c * this.speedy);

        this._proc_scroll = false; // 각 틱에 해당하는 스크롤을 처리 할 지 여부
        this._touch_manager.on_fire_onfling(this._target_elem, this._compinfo, this, this.speedx, this.speedy, xdelta, ydelta, this.touchlen);

        var scroll_comp = this._scroll_comp;
        if (scroll_comp && this._proc_scroll)
        {
            // Perform Scroll
            var scrolldeltax = (offset_c * this.totalx);
            var scrolldeltay = (offset_c * this.totaly);

            var scroll_mode = this._scroll_mode;
            var hscroll_pos = scroll_comp._hscroll_pos;
            var vscroll_pos = scroll_comp._vscroll_pos;

            if ((scroll_mode == 3 || scroll_mode == 2) && scrolldeltax)
            {
                hscroll_pos -= scrolldeltax;
            }

            if ((scroll_mode == 3 || scroll_mode == 1) && scrolldeltay)
            {
                vscroll_pos -= scrolldeltay;
            }

            if (scroll_comp._getHScrollBarType() == "autoindicator")
            {
                var hscrollbar = scroll_comp.hscrollbar;
                if (hscrollbar && hscrollbar.enable && !hscrollbar.visible)
                    hscrollbar.set_visible(true);
            }

            if (scroll_comp._getVScrollBarType() == "autoindicator")
            {
                var vscrollbar = scroll_comp.vscrollbar;
                if (vscrollbar && vscrollbar.enable && !vscrollbar.visible)
                    vscrollbar.set_visible(true);
            }

            scroll_comp._scrollTo(hscroll_pos, vscroll_pos, true, false, undefined, "fling");
        }

        this._oldcurvevalue = c;
        return (t / this.duration);
    };

    __pFlingHandler._on_fling_frame = function ()
    {
        var ret = this._on_fling_timer();
        if (ret < 1.0)
        {
            this._fling_timer.start();
        }
    };

    __pFlingHandler.on_fire_onflingend = function ()
    {
        this._touch_manager.on_fire_onflingend(this._target_elem, this._compinfo, this, this.speedx, this.speedy, 0, 0, this.touchlen);
        this._is_alive = false;
    };

    __pFlingHandler._setScrollComp = function (comp)
    {
        if (this._scroll_comp || !comp)
            return;
        this._scroll_comp = comp;
    };

    __pFlingHandler._on_flingend_timer = function ()
    {
        if (this._fling_timer)
        {
            this._fling_timer.stop();
            this._fling_timer.destroy();
        }
        this._flingend_timer.destroy();

        // flingend Event
        this.on_fire_onflingend();

        // dead
        this._touch_manager.onflingend(this._id);
    };


    //---------------------------------------------------------------------------------------
    // Touch Timer
    //---------------------------------------------------------------------------------------
    nexacro._TouchTimer = function (target, callbackfunc, scope, interval)
    {
        var pThis = this;
        this._callbackfunc = function ()
        {
            pThis.stop();
            callbackfunc.call(scope);
        };
        if (target._getReferenceContext)
        {
            this.context = target._getReferenceContext(); //refcontext는 자기 자신의 context
            this._win_handle = this.context._getWindowHandle();
        }
        else
        {
            this._win_handle = target.handle;
        }

        this.handle = null;

        if (interval != undefined)
        {
            this.start(interval);
        }
    };
    var __pTouchTimer = nexacro._TouchTimer.prototype;

    __pTouchTimer.start = function (interval)
    {
        if (this.handle) this.stop();
        this.handle = nexacro._setSystemTimer(this._win_handle, this._callbackfunc, interval);
    };

    __pTouchTimer.stop = function ()
    {
        if (this.handle)
        {
            nexacro._clearSystemTimer(this._win_handle, this.handle);
            this.handle = null;
        }
    };

    __pTouchTimer.isWait = function ()
    {
        return !!this.handle;
    };

    __pTouchTimer.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._callbackfunc = null;
        this.scope = null;
    };


    //---------------------------------------------------------------------------------------
    // Cubic Bezier (4point bezier curve): Apple license
    //---------------------------------------------------------------------------------------
    nexacro._CubicBezier = function (p1x, p1y, p2x, p2y)
    {
        // Control Point 좌표값 Validation 삭제 (0 ~ 1 사이값이어야 함)

        // Control points
        this._p1 = { x: p1x, y: p1y };
        this._p2 = { x: p2x, y: p2y };
    };

    var __pCubicBezier = nexacro._CubicBezier.prototype;
    __pCubicBezier._getCoordinateForT = function (t, p1, p2)
    {
        var c = 3 * p1, b = 3 * (p2 - p1) - c, a = 1 - c - b;
        return ((a * t + b) * t + c) * t;
    };

    __pCubicBezier._getCoordinateDerivateForT = function (t, p1, p2)
    {
        var c = 3 * p1, b = 3 * (p2 - p1) - c, a = 1 - c - b;
        return (3 * a * t + 2 * b) * t + c;
    };

    __pCubicBezier._getTForCoordinate = function (c, p1, p2, epsilon)
    {
        if (!isFinite(epsilon) || epsilon <= 0)
        {
            throw new RangeError('"epsilon" must be a number greater than 0.');
        }
        var t2, i, c2, d2;

        // First try a few iterations of Newton's method -- normally very fast.
        for (t2 = c, i = 0; i < 8; i = i + 1)
        {
            c2 = this._getCoordinateForT(t2, p1, p2) - c;
            if (Math.abs(c2) < epsilon)
            {
                return t2;
            }
            d2 = this._getCoordinateDerivateForT(t2, p1, p2);
            if (Math.abs(d2) < 1e-6)
            {
                break;
            }
            t2 = t2 - c2 / d2;
        }

        // Fall back to the bisection method for reliability.
        t2 = c;
        var t0 = 0, t1 = 1;
        if (t2 < t0)
        {
            return t0;
        }
        if (t2 > t1)
        {
            return t1;
        }

        while (t0 < t1)
        {
            c2 = this._getCoordinateForT(t2, p1, p2);
            if (Math.abs(c2 - c) < epsilon)
            {
                return t2;
            }
            if (c > c2)
            {
                t0 = t2;
            }
            else
            {
                t1 = t2;
            }
            t2 = (t1 - t0) * 0.5 + t0;
        }

        // Failure.
        return t2;
    };

    __pCubicBezier.getPointForT = function (t)
    {
        // Special cases: starting and ending points
        if (t === 0 || t === 1)
        {
            return { x: t, y: t };
        }

        // Check for correct t value (must be between 0 and 1)
        if (t < 0 || t > 1)
        {
            throw new RangeError('"t" must be a number between 0 and 1' + 'Got ' + t + ' instead.');
        }

        return {
            x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
            y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
        };
    };

    __pCubicBezier.getTForX = function (x, epsilon)
    {
        return this._getTForCoordinate(x, this._p1.x, this._p2.x, epsilon);
    };

    __pCubicBezier.getTForY = function (y, epsilon)
    {
        return this._getTForCoordinate(y, this._p1.y, this._p2.y, epsilon);
    };

    __pCubicBezier._getAuxPoints = function (t)
    {
        if (t <= 0 || t >= 1)
        {
            throw new RangeError('"t" must be greater than 0 and lower than 1');
        }

        // First series of auxiliary points
        // First control point of the left curve
        var i0 = { x: t * this._p1.x, y: t * this._p1.y },
            i1 = { x: this._p1.x + t * (this._p2.x - this._p1.x), y: this._p1.y + t * (this._p2.y - this._p1.y) },
            // Second control point of the right curve
            i2 = { x: this._p2.x + t * (1 - this._p2.x), y: this._p2.y + t * (1 - this._p2.y) };

        // Second series of auxiliary points
        // Second control point of the left curve
        var j0 = { x: i0.x + t * (i1.x - i0.x), y: i0.y + t * (i1.y - i0.y) },
            // First control point of the right curve
            j1 = { x: i1.x + t * (i2.x - i1.x), y: i1.y + t * (i2.y - i1.y) };

        // The division point (ending point of left curve, starting point of right curve)
        var k = { x: j0.x + t * (j1.x - j0.x), y: j0.y + t * (j1.y - j0.y) };

        return { i0: i0, i1: i1, i2: i2, j0: j0, j1: j1, k: k };
    };

    __pCubicBezier.divideAtT = function (t)
    {
        if (t < 0 || t > 1)
        {
            throw new RangeError('"t" must be a number between 0 and 1. ' + 'Got ' + t + ' instead.');
        }

        // Special cases t = 0, t = 1: Curve can be cloned for one side, the other
        // side is a linear curve (with duration 0)
        if (t === 0 || t === 1)
        {
            var curves = [];
            curves[t] = this.linear();
            curves[1 - t] = this.clone();
            return curves;
        }

        var left = {}, right = {}, points = this._getAuxPoints(t);
        var i0 = points.i0, i2 = points.i2, j0 = points.j0, j1 = points.j1, k = points.k;

        // Normalize derived points, so that the new curves starting/ending point
        // coordinates are (0, 0) respectively (1, 1)
        var factorX = k.x, factorY = k.y;
        left.p1 = { x: i0.x / factorX, y: i0.y / factorY };
        left.p2 = { x: j0.x / factorX, y: j0.y / factorY };
        right.p1 = { x: (j1.x - factorX) / (1 - factorX), y: (j1.y - factorY) / (1 - factorY) };
        right.p2 = { x: (i2.x - factorX) / (1 - factorX), y: (i2.y - factorY) / (1 - factorY) };

        return [
            new nexacro._CubicBezier(left.p1.x, left.p1.y, left.p2.x, left.p2.y),
            new nexacro._CubicBezier(right.p1.x, right.p1.y, right.p2.x, right.p2.y)
        ];
    };

    __pCubicBezier.divideAtX = function (x, epsilon)
    {
        if (x < 0 || x > 1)
        {
            throw new RangeError('"x" must be a number between 0 and 1. ' + 'Got ' + x + ' instead.');
        }

        var t = this.getTForX(x, epsilon);
        return this.divideAtT(t);
    };

    __pCubicBezier.divideAtY = function (y, epsilon)
    {
        if (y < 0 || y > 1)
        {
            throw new RangeError('"y" must be a number between 0 and 1. ' + 'Got ' + y + ' instead.');
        }

        var t = this.getTForY(y, epsilon);
        return this.divideAtT(t);
    };

    __pCubicBezier.clone = function ()
    {
        return new nexacro._CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
    };

    __pCubicBezier.toString = function ()
    {
        return "cubic-bezier(" + [this._p1.x, this._p1.y, this._p2.x, this._p2.y].join(", ") + ")";
    };

    __pCubicBezier.linear = function ()
    {
        return new nexacro._CubicBezier();
    };

    __pCubicBezier.ease = function ()
    {
        return new nexacro._CubicBezier(0.25, 0.1, 0.25, 1.0);
    };
    __pCubicBezier.linear = function ()
    {
        return new nexacro._CubicBezier(0.0, 0.0, 1.0, 1.0);
    };
    __pCubicBezier.easeIn = function ()
    {
        return new nexacro._CubicBezier(0.42, 0, 1.0, 1.0);
    };
    __pCubicBezier.easeOut = function ()
    {
        return new nexacro._CubicBezier(0, 0, 0.58, 1.0);
    };
    __pCubicBezier.easeInOut = function ()
    {
        return new nexacro._CubicBezier(0.42, 0, 0.58, 1.0);
    };

    //---------------------------------------------------------------------------------------
    // Environment 
    //---------------------------------------------------------------------------------------
    nexacro.EnvironmentUserHotkeyEventInfo = function (obj, id, alt_key, ctrl_key, shift_key, key_code, from_comp, from_refer_comp, meta_key, key_id)
    {
        this.id = this.eventid = id || "onenvironmentuserhotkeyevent";

        this.fromobject = from_comp;
        this.fromreferenceobject = from_refer_comp;
        this.altkey = alt_key;
        this.ctrlkey = ctrl_key;
        this.shiftkey = shift_key;
        this.metakey = meta_key || false;
        this.keycode = key_code;
        this.keyid = key_id;
    };
    var _pEnvironmentUserHotkeyEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.EnvironmentUserHotkeyEventInfo);
    nexacro.EnvironmentUserHotkeyEventInfo.prototype = _pEnvironmentUserHotkeyEventInfo;
    _pEnvironmentUserHotkeyEventInfo._type_name = "EnvrionmentUserHotkeyEventInfo";

    nexacro.Environment = function ()
    {
        this._hotkey_list = []; // Hotkey 사용하는 Component와 Hotkey정보 리스트
        /* nexacro namespace로 이동해야됨. 연관된 작업이 많아 임시로 env에 저장 */

        this._load_manager = new nexacro._LoadManager(this);
        this._p_all = new nexacro.Collection();
        this._includescriptlist = [];        

        this._localstorage_manager = new nexacro._LocalStorageManager(this); //window.localStorage 대신 사용
        this._layout_manager = new nexacro._LayoutManager(true, true, true);

        if (nexacro.isglobalmodule)
              nexacro._environment = this;
        
        this._datautils = nexacro.DataUtilsSet["1.0"]; //datatyperule 1.0 기본값
    };

    var _pEnvironment = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.Environment);
    nexacro.Environment.prototype = _pEnvironment;
    _pEnvironment._type_name = "Environment";

    /* property */
    _pEnvironment._p_addcookietovariable = true;
    _pEnvironment._p_codepage = "";
    _pEnvironment._p_checkversion = false;
    _pEnvironment._p_version = "";

    _pEnvironment._p_enableevent = true;

    //accessibility Property
    _pEnvironment._p_enableaccessibility = false;
    _pEnvironment._p_accessibilitytype = "standard"; //standard/sensereader/jaws
    _pEnvironment._p_accessibilityreplayhotkey = "";
    _pEnvironment._p_accessibilitybackwardkey = "";
    _pEnvironment._p_accessibilityforwardkey = "";
    _pEnvironment._p_accessibilityhistorycount = 5;
    _pEnvironment._p_accessibilitywholereadhotkey = "";
    //_pEnvironment._p_accessibilityreplayhotkey = "";
    _pEnvironment._p_accessibilitywholereadtype = "none"; // none/load/change/loadchange
    _pEnvironment._p_accessibilitydescreadtype = "label"; //multienum - label/action/description
    _pEnvironment._p_accessibilityfirstovermessage = ""; //
    _pEnvironment._p_accessibilitylastovermessage = "";
    _pEnvironment._p_accessibilityheadingnexthotkey = "";
    _pEnvironment._p_accessibilityheadingprevhotkey = "";
    _pEnvironment._p_accessibilitycontentsearchkey = false; // component searching by nexacro

    _pEnvironment._p_tabkeycirculation = "form,cycle";


    _pEnvironment._p_enabletouchevent = nexacro._enabletouchevent = false;
    _pEnvironment._p_enableinspector = false;
    _pEnvironment._p_filesecurelevel = "private";    //  all, private (default)
    _pEnvironment._p_highcontrastthemeid = "";
    _pEnvironment._p_httpretry = 0;
    _pEnvironment._p_httptimeout = 60;
    _pEnvironment._p_imepastemode = 0;
    _pEnvironment._p_initvaluefileid = "";
    _pEnvironment._p_key = "";
    _pEnvironment._p_language = "";   //미구현
    _pEnvironment._p_usestringresource = false;
    _pEnvironment._p_layoutselecttype = "";  //미구현
    _pEnvironment._p_loadingimage = "";
    _pEnvironment._p_locale = "";
    _pEnvironment._p_loglevel = "debug";
    _pEnvironment._p_mousewheeltype = 0;
    _pEnvironment._p_networksecurelevel = "private";      //  0:all, 1:private (default)
    _pEnvironment._p_popuptype = ""; //미구현
    _pEnvironment._p_proxyretry = 0;
    _pEnvironment._p_proxytimeout = 30;
    _pEnvironment._p_services = new nexacro.Collection();
    _pEnvironment._p_externals = new nexacro.Collection();
    _pEnvironment._p_templates = new nexacro.Collection();
    _pEnvironment._p_themeid = "";
    _pEnvironment._p_traceduration = -1;
    _pEnvironment._p_tracemode = "none";
    _pEnvironment._p_datasetloadtype = "onsuccess";

    _pEnvironment.updates = null;
    _pEnvironment._p_usecontextmenu = "edit";
    _pEnvironment._p_usehttpkeepalive = false;
    _pEnvironment._p_useproxykeepalive = false;
    _pEnvironment._p_usewaitcursor = true;
    _pEnvironment._p_scrollbarsize = undefined;
    _pEnvironment._p_scrollbartype = undefined;
    _pEnvironment._p_scrollindicatorsize = undefined;

    _pEnvironment._p_rtl = undefined;	// true/false
    _pEnvironment._p_enablescreencapture = true;
    _pEnvironment._p_enablecookie = true;
    _pEnvironment._p_enablecache = true;
    _pEnvironment._p_enableclipboard = true;
    _pEnvironment._p_name = "environment";
    _pEnvironment.id = "environment";
    _pEnvironment._p_mousehovertime = 500;

    _pEnvironment._p_datatyperule = "1.0";

    _pEnvironment._p_datasetsavenan = nexacro._datasetsavenan = "exclude";               // include/exclude
    _pEnvironment._p_datasetsaveinfinity = nexacro._datasetsaveinfinity = "include";          // include/exclude
    _pEnvironment._p_datasetsaveinvaliddate = nexacro._datasetsaveinvaliddate = "exclude";       // include/exclude
    _pEnvironment._p_datasetnullsorttype = nexacro._datasetnullsorttype = "max";    // max/min

    _pEnvironment._p_ssvunitseparator = "";                    //default 0x1f
    _pEnvironment._p_ssvrecordseparator = "";                  //default 0x1e
    // ssv invalid pattern
    //0x00(00) - NUL(Null char.)
    //0x03(03) - ETX(End of Text)
    //0x1D(29) - GS(Group Separator)
    //0x28(40) - ((left opening parenthesis)
    //0x29(41) - ) (right closing parenthesis)
    //0x3A(58) - : (colon)
    //0x3D(61) - = (equal sign)
    //out of range (0~127)
    _pEnvironment._invalid_ssvpattern = /^(0|3|29|40|41|58|61)$/g;

    _pEnvironment._p_userhotkey = "";

    _pEnvironment._p_multivalueseparator = "";
    _pEnvironment._p_stringresourceserviceurl = "";

    _pEnvironment._p_usesoftkeyboard = true;
    _pEnvironment._p_enabletouchsoftkeyboard = nexacro._enabletouchsoftkeyboard = false;

    _pEnvironment._p_licenseurl = "";
    _pEnvironment._p_preventbrowserbackbutton = false;
    _pEnvironment._p_browserreloadkey = "custom";  //prevent, reloadactiveform, custom (default)

    _pEnvironment._p_usesanitizer = false;
    _pEnvironment._p_allowtags = "initial";
    _pEnvironment._p_blocktags = "";
    _pEnvironment._p_allowattributes = "initial";
    _pEnvironment._p_blockattributes = "";
    _pEnvironment._p_webviewallowedsandbox = "";
    _pEnvironment._p_webviewusesandbox = false;

    _pEnvironment._p_scrollpropagation = "both"; //none, both, vertical, horizontal
    _pEnvironment._p_appkey = "";

    //internal     
    nexacro._default_loadingimage = "./images/waitimage.gif";
    nexacro._httptimeout = 60;  //-> 초기값
    //nexacro._quickview_mode = false;
    nexacro._viewtoollog = false;

    /* init internal prop */
    _pEnvironment._resource_path = "";      // nexacro._resource_path 삭제    
    _pEnvironment._device_adaptor_list = {};
    _pEnvironment._device_adaptor_handlelist = {};
    _pEnvironment._userhotkey_list = {};
    _pEnvironment._userhotkeylist = {};
    _pEnvironment._cssobject_caches = {};
    _pEnvironment._protocols = undefined;

    _pEnvironment._tabkeycirculation = 0;    // nexacro._tabkeycirculation 삭제
    _pEnvironment._loglevel = 4;             //nexacro._loglevel 삭제    
    _pEnvironment._a11ytype = 0;   //1:standard, 2:sensereader, 3:jaws, 4:voiceover(ios), 5:talkback(android)
    _pEnvironment._a11ydescreadtype = 0x01;  // _p_accessibilitydescreadtype
    _pEnvironment._a11ywholereadtype = 0;    //_p_accessibilitywholereadhotkey
    _pEnvironment._a11yHistoryList = undefined;
    _pEnvironment._a11yHistoryCursor = -1;
    _pEnvironment._curthemeid = "";          //nexacro._curthemeid 삭제
    _pEnvironment._initvaluefileid = "";     //nexacro._initvaluefileid 삭제
    _pEnvironment._stringrcfileid = "";      //nexacro._stringrcfileid 삭제 
    _pEnvironment._localcache_path = "";     //nexacro._localcache_path 삭제
    _pEnvironment._localcaches= undefined;    
 
    _pEnvironment._zoom_factor = 0;
    _pEnvironment._allow_default_pinchzoom = false;
    _pEnvironment._desktopscreenwidth = 1280;
    _pEnvironment._registerclass = undefined;   //from nexacro._registerclass 
    _pEnvironment._rtl = undefined;          //nexacro._rtl 삭제 , locale 도 반영

    _pEnvironment._typedefinition_url = "";   
    _pEnvironment._project_url = "";  
    _pEnvironment._project_absolutepath = "";    
 
    _pEnvironment._stringrc_lang = "";
    _pEnvironment._stringrc = undefined;  
    _pEnvironment._dimension_maps = undefined;
    _pEnvironment._include_status_map = false;
    _pEnvironment._has_listview_expand_status = false;
    _pEnvironment._apply_markup_validation = false;
    _pEnvironment._css_predefine_maps = undefined;
    _pEnvironment._css_predefine_special_convert_map = undefined;
    _pEnvironment._css_group_autoselect_info = undefined;
    
    _pEnvironment._module_cache_list = {};         //for module cache
    _pEnvironment._module_cache_list["module"] = {};
    _pEnvironment._module_cache_list["dataobject"] = {};

    _pEnvironment._application = undefined; 
    _pEnvironment._communication_waiting = false;  
    _pEnvironment._datautils = undefined;     //datatyperule 1.0 기본값
    _pEnvironment._nexacro_init = undefined;  //for initvaluefileid
    _pEnvironment._defaultservice = undefined;
   // _pEnvironment._CSS_STATUS = "data-status";
  //  _pEnvironment._CSS_USERSTATUS = "data-userstatus";

    /* event list */
    _pEnvironment._event_list =
    {
        "onerror": 1,
        "onaccessibilitykey": 1,
        "onload": 1,
        "onextendedcommand": 1,
        "ondevicepermission": 1,
        "onuserhotkey": 1,
        "onbeforepopstate": 1,
        "onpopstate": 1,
        "onpressedreloadkey": 1,
        "onnetworkstatuschange": 1
    };

    //===============================================================
    // nexacro.Environment : Create & Update
    //===============================================================
    _pEnvironment.create = function ()
    {

    };

    _pEnvironment._getModuleCacheList = function (path, type="module")
    {
        if (this._module_cache_list[type] && this._module_cache_list[type][path])
        {
            return this._module_cache_list[type][path];
        }
        return null;
    };

    _pEnvironment._addModuleCacheList = function (path, data, type="module")
    {
        if (!this._module_cache_list[type])
        {
            this._module_cache_list[type] = {};
        }
        return this._module_cache_list[type][path] = data;
    };


    _pEnvironment._removeModuleCacheList = function (path, type="module")
    {
        if (this._module_cache_list[type])
        {
            delete this._module_cache_list[type][path];
        }
    };

    _pEnvironment._getInitValues = function ()
    {
        return this._nexacro_init ?? (this._nexacro_init = {});
    };

    _pEnvironment._setInitValues = function (initvalues)
    {
        this._nexacro_init = initvalues;
    };

    _pEnvironment.set_tabkeycirculation = function (v)
    {
        if (this._p_tabkeycirculation != v)
        {
            switch (v)
            {
                case "form,nocycle":
                    this._tabkeycirculation = 1;
                    this._p_tabkeycirculation = v;
                    break;
                case "frame,cycle":
                    this._tabkeycirculation = 2;
                    this._p_tabkeycirculation = v;
                    break;
                case "frame,nocycle":
                    this._tabkeycirculation = 3;
                    this._p_tabkeycirculation = v;
                    break;
                default:
                    this._tabkeycirculation = 0;
                    this._p_tabkeycirculation = "form,cycle";
                    break;
            }
        }
    };

    _pEnvironment.set_rtl = function (v) 
    {
        this._p_rtl = v;
        this._rtl = nexacro._toBoolean(v);
    };

    _pEnvironment.set_webviewallowedsandbox = function (v)
    {
        this._p_webviewallowedsandbox = nexacro._toString(v).replace(/,/g, " "); //Tool에서 입력받는 경우 콤마로 구분되어 들어옴.
    };

    _pEnvironment.set_webviewusesandbox = function (v)
    {
        this._p_webviewusesandbox = nexacro._toBoolean(v);
    };

    _pEnvironment.set_enableinspector = function (v)
    {
        this._p_enableinspector = nexacro._toBoolean(v);
        nexacro._setEnableInspector(v);
    };

    _pEnvironment.set_enablescreencapture = function (v)
    {
        this._p_enablescreencapture = nexacro._toBoolean(v);
        nexacro._setEnableScreenCapture(v);
    };

    _pEnvironment.set_enablecookie = function (v)
    {
        this._p_enablecookie = nexacro._toBoolean(v);
        nexacro._setEnableCookie(v);
    };

    _pEnvironment.set_enablecache = function (v)
    {
        this._p_enablecache = nexacro._toBoolean(v);
        nexacro._setEnableCache(v);
    };

    _pEnvironment.set_enableclipboard = function (v)
    {
        this._p_enableclipboard = nexacro._toBoolean(v);
        nexacro._setEnableClipboard(v);
    };

    _pEnvironment.set_addcookietovariable = function (v)
    {
        v = nexacro._toBoolean(v);
        this._p_addcookietovariable = v;
        //nexacro._addcookietovariable = v;
    };

    _pEnvironment.set_codepage = function (v)
    {

    };

    _pEnvironment.set_enableevent = function (v)
    {
        this._p_enableevent = nexacro._toBoolean(v);
    };

    _pEnvironment.set_enabletouchevent = function (v)
    {
        this._p_enabletouchevent = nexacro._toBoolean(v);        
    };

    _pEnvironment.set_filesecurelevel = function (v)
    {
        this._p_filesecurelevel = v;
        nexacro._setFileSecureLevel(v);
    };

    _pEnvironment.set_highcontrastthemeid = function (v)
    {
        this._p_highcontrastthemeid = v;
    };

    _pEnvironment.set_httpretry = function (v)
    {
        var httpretry = nexacro._parseInt(v);
        this._p_httpretry = (httpretry > 0) ? httpretry : 0;
    };

    _pEnvironment.set_httptimeout = function (v)
    {
        var timeout = nexacro._parseInt(v);
        this._p_httptimeout = (timeout >= 0) ? timeout : 60;
        nexacro._setHttpTimeout(this._p_httptimeout);
    };

    _pEnvironment.set_imepastemode = function (v)
    {
        this._p_imepastemode = v;
    };

    _pEnvironment.set_initvaluefileid = function (v)
    {
        // generation 시에 index.html popup.html, start.json 안에 포함함
        this._p_initvaluefileid = v;
    };

    _pEnvironment.set_key = function (v)
    {
        //Load 시 
        this._p_key = v;
    };

    _pEnvironment.set_mousehovertime = function (v)
    {
        this._p_mousehovertime = v;
        nexacro._setMouseHovertime(this._p_mousehovertime);
    };

    _pEnvironment.set_xadl = function (v)
    {               
        this._p_xadl = v;
    };

    _pEnvironment.set_language = function (/*v*/)
    {

    };

    _pEnvironment.set_usestringresource = function (v)
    {
        v = nexacro._toBoolean(v);
        this._p_usestringresource = v;
    };

    _pEnvironment.set_stringresourceserviceurl = function (v)
    {
        this._p_stringresourceserviceurl = v;
    };


    _pEnvironment.set_layoutselecttype = function (v)
    {
        this._p_layoutselecttype = v;
    };


    _pEnvironment.set_loadingimage = function (v)
    {
        this._p_loadingimage = v;
    };

    _pEnvironment._on_loadwaitimage = function ()
    {
    };

    _pEnvironment.set_locale = function (v)
    {
        if (v != this._p_locale)
        {
            this._p_locale = v;
            
            window.dispatchEvent(new CustomEvent('nexacro-locale-change', { detail: { source: this } }));
        }
    };



    //"fatal" : 치명적이 에러인 경우 - 0 
    //"error" : 일반적인 에러인 경우 - 1
    //"warn" : 경고인 경우          - 2
    //"info" : 일반 정보인 경우     - 3
    //"debug" : 디버그 정보인 경우  - 4
    _pEnvironment.set_loglevel = function (v)
    {
        if (v == "fatal")
            this._loglevel = 0;
        else if (v == "error")
            this._loglevel = 1;
        else if (v == "warn")
            this._loglevel = 2;
        else if (v == "info")
            this._loglevel = 3;
        else
            this._loglevel = 4;

        this._p_loglevel = v;

        nexacro._setLogLevel(this._loglevel);
    };

    _pEnvironment.set_mousewheeltype = function (v)
    {
        this._p_mousewheeltype = v;
    };

    _pEnvironment.set_networksecurelevel = function (v)
    {
        this._p_networksecurelevel = v;
        nexacro._setNetworkSecureLevel(v);
    };

    _pEnvironment.set_popuptype = function (v)
    {
        this._p_popuptype = v;
    };

    _pEnvironment.set_proxyretry = function (v)
    {
        this._p_proxyretry = nexacro._parseInt(v);
    };

    _pEnvironment.set_proxytimeout = function (v)
    {
        this._p_proxytimeout = nexacro._parseInt(v);
    };

    //논의 필요
    _pEnvironment.set_services = function (/*v*/)
    {

    };

    _pEnvironment.set_externals = function (/*v*/)
    {

    };

    _pEnvironment.set_themeid = function (v)
    {
        this._p_themeid = v;
    };

    _pEnvironment.set_traceduration = function (v)
    {
        var traceduration = this._p_traceduration;
        var val = nexacro._parseInt(v);

        if (traceduration != val)
        {
            this._p_traceduration = val;
            if (this._p_tracemode == "append" && val < 1)
            {
                nexacro._deleteTraceLogFile();
            }
        }
        nexacro._setTraceDuration(val);
    };

    //"none" : 로그 파일을 만들지 않습니다.
    //"new" : Application이 시작할때마다 로그 파일을 새로 만듭니다.
    //"append" : 기존에 있는 로그 파일에 추가합니다.
    _pEnvironment.set_tracemode = function (v)
    {
        var tracemode = this._p_tracemode;

        if (tracemode != v)
        {
            this._p_tracemode = v;
            // nexacro._tracemode = v;
            if (this._p_tracemode != "append")
            {
                //nexacro._deleteTraceLogFile();
            }
        }
        nexacro._setTraceMode(v);
    };

    //논의 필요
    _pEnvironment.set_updates = function (/*v*/)
    {

    };

    _pEnvironment.set_usecontextmenu = function (v)
    {
        this._p_usecontextmenu = v;
    };

    _pEnvironment.set_usehttpkeepalive = function (v)
    {
        v = nexacro._toBoolean(v);
        this._p_usehttpkeepalive = v;
        nexacro._setUseHttpKeepAlive(v);
    };

    _pEnvironment.set_useproxykeepalive = function (v)
    {
        this._p_useproxykeepalive = nexacro._toBoolean(v);
    };

    _pEnvironment.set_usewaitcursor = function (v)
    {
        this._p_usewaitcursor = nexacro._toBoolean(v);
    };

    _pEnvironment.set_scrollbarsize = function (v)
    {
        this._p_scrollbarsize = parseInt(v);
    };

    _pEnvironment.set_scrollindicatorsize = function (v)
    {
        this._p_scrollindicatorsize = parseInt(v);
    };

    _pEnvironment.set_scrollbartype = function (v)
    {
        this._p_scrollbartype = v;
    };

    _pEnvironment.set_userfontid = function (v)
    {
        if (!this._request_mainurl)
            this._p_userfontid = v;
    };

    //favicon for supported
    _pEnvironment.set_icon = function (v)
    {
        this._p_icon = v;
    };

    _pEnvironment.set_checkversion = function (v)
    {
        this._p_checkversion = nexacro._toBoolean(v);
    };

    _pEnvironment.set_appkey = function (v)
    {
        this._p_appkey = v;
    };

    _pEnvironment.set_version = function (v)
    {
        this._p_version = v;
    };

    _pEnvironment.set_datasetloadtype = function (v)
    {
        var type_enum = ["onsuccess", "errorallow"];

        if (v)
            v = v.toString().toLowerCase();

        if (type_enum.indexOf(v) >= 0)
            this._p_datasetloadtype = v;
    };

    /* 클로저를 통해 running 시에 1회만 setting 되도록 수정 */
    _pEnvironment.set_datatyperule = (function ()
    {
        let isSet = false;
        return function (v)
        {
            if (isSet && !nexacro._isDesignMode() && !nexacro._isTestMode())
                return;
            if (v)
            {
                var type_enum = ["1.0", "2.0"];
                if (type_enum.indexOf(v) >= 0)
                {
                    nexacro._datatyperule = this._p_datatyperule = nexacro._toString(v);  //mexacro shared 모드시 마지막 값으로 설정

                    this.on_apply_datatyperule();

                    if (!nexacro._isDesignMode())
                    {
                        isSet = true; // 디자인 모드가 아닐 때만 설정 완료로 상태 업데이트
                    }
                }

            }
        };
    })();

    _pEnvironment.on_apply_datatyperule = function ()
    {
        var v = this._p_datatyperule;
        switch (v)
        {
            case "2.0":
                this._datautils = nexacro.DataUtilsSet["2.0"];
               // nexacro.DataUtils = nexacro.DataUtilsSet["2.0"];
                break;
            default:
                this._datautils = nexacro.DataUtilsSet["1.0"];
              //  nexacro.DataUtils = nexacro.DataUtilsSet["1.0"];
                break;
        }
    };

    _pEnvironment._getDataUtils = function ()
    {
        return this._datautils;
    };

    _pEnvironment.set_datasetsavenan = function (v)
    {
        if (!v) return;

        var type_enum = ["exclude", "include"];

        v = v.toString().toLowerCase();

        if (type_enum.indexOf(v) >= 0)
            this._p_datasetsavenan = v;

    };

    _pEnvironment.set_datasetsaveinfinity = function (v)
    {
        if (!v) return;

        var type_enum = ["exclude", "include"];

        v = v.toString().toLowerCase();

        if (type_enum.indexOf(v) >= 0)
            this._p_datasetsaveinfinity = v;
    };

    _pEnvironment.set_datasetsaveinvaliddate = function (v)
    {
        if (!v) return;

        var type_enum = ["exclude", "include"];

        v = v.toString().toLowerCase();

        if (type_enum.indexOf(v) >= 0)
            this._p_datasetsaveinvaliddate = v;
    };

    _pEnvironment.set_datasetnullsorttype = function (v)
    {
        if (!v) return;

        var type_enum = ["max", "min", "first", "last"];

        v = v.toString().toLowerCase();

        if (type_enum.indexOf(v) >= 0)
            this._p_datasetnullsorttype = v;
    };

    _pEnvironment.set_ssvunitseparator = function (v)
    {
        if (!v) return;

        var ar = v.split(",");
        var arlen = ar.length;
        var n, j;

        if (nexacro._isArray(ar))
        {
            for (j = 0; j < arlen; j++)
            {
                n = parseInt(ar[j].trim());
                // 조합시 0x80(128) 이상 또는 0x00(00 - NULL) 문자는 설정 안됨
                if (n >= 0x80 || n < 0)
                {
                    return nexacro._onSystemWarning(this, "range_invalide");
                }
            }
        }
        else
        {
            var _invalid_pattern = this._invalid_ssvpattern;

            n = parseInt(ar);
            // 단일 문자는 사용불가능 문자 포함하는지도 체크
            if (_invalid_pattern.test(n) || n >= 0x80 || n < 0)
            {
                return nexacro._onSystemWarning(this, "range_invalide");
            }
        }

        this._p_ssvunitseparator = v;    
        nexacro._setSSVUnitTokenSeparator(nexacro.fromCharCode(v).substr(0, 5)); // runtime only
    };

    _pEnvironment.set_ssvrecordseparator = function (v)
    {
        if (!v) return;

        var ar = v.split(",");
        var arlen = ar.length;
        var n, j;

        if (nexacro._isArray(ar))
        {
            for (j = 0; j < arlen; j++)
            {
                n = parseInt(ar[j].trim());
                // 조합시 0x80(128) 이상 또는 0x00(00 - NULL) 문자는 설정 안됨
                if (n >= 0x80 || n < 0) 
                {
                    return nexacro._onSystemWarning(this, "range_invalide");
                }
            }
        }
        else
        {
            var _invalid_pattern = this._invalid_ssvpattern;

            n = parseInt(ar);
            // 단일 문자는 사용불가능 문자 포함하는지도 체크
            if (_invalid_pattern.test(n) || n >= 0x80 || n < 0) 
            {
                return nexacro._onSystemWarning(this, "range_invalide");
            }
        }

        this._p_ssvrecordseparator = v;
        nexacro._setSSVRecordTokenSeparator(nexacro.fromCharCode(v).substr(0, 5)); // runtime only
    };

    _pEnvironment.set_userhotkey = function (v)
    {
        this._unregisterUserHotkey();

        if (v)
        {
            var ar_temp = [];

            v = v.toString();
            var ar = v.split(",");
            for (var i = 0; i < ar.length; i++)
            {
                var ar_iduserhotkey = ar[i].split("=");
                if (ar_iduserhotkey.length < 2)
                    continue;

                var propid = ar_iduserhotkey[0].trim();
                var propuserhotkey = ar_iduserhotkey[1].trim();

                var userhotkey = new nexacro._HotKey(propuserhotkey);

                if (propid && !userhotkey._isEmpty())
                    this._registerUserHotkey(propid, userhotkey);
            }

            for (var id in this._userhotkeylist)
            {
                var str_userhotkey = this._userhotkeylist[id]._toString();
                ar_temp.push(id + "=" + str_userhotkey);
            }

            this._p_userhotkey = ar_temp.join();
        }
    };

    _pEnvironment.set_usesoftkeyboard = function (v)
    {
        v = nexacro._toBoolean(v);
        if (v != this._p_usesoftkeyboard)
        {
            this._p_usesoftkeyboard = v;
        }
    };

    _pEnvironment.set_enabletouchsoftkeyboard = function (v)
    {
        v = nexacro._toBoolean(v);
        if (v != this._p_enabletouchsoftkeyboard)
        {
            this._p_enabletouchsoftkeyboard = v;
        }
    };

    _pEnvironment.set_licenseurl = function (v)
    {
        this._p_licenseurl = v;
    };


    _pEnvironment.set_preventbrowserbackbutton = function (v)
    {
        v = nexacro._toBoolean(v);
        if (v != this._p_preventbrowserbackbutton)
            this._p_preventbrowserbackbutton = v;
    };

    _pEnvironment.set_browserreloadkey = function (v)
    {
        if (!v) return;

        var type_enum = ["prevent", "reloadactiveform", "custom"];

        v = v.toString().toLowerCase();
        if (type_enum.indexOf(v) >= 0)
            this._p_browserreloadkey = v;
    };
    _pEnvironment.set_usesanitizer = function (v)
    {
        if (!v) return;
        v = nexacro._toBoolean(v);
        this._p_usesanitizer = v;
    };
    _pEnvironment.set_allowtags = function (v)
    {
        if (!v) return;
        v = v.toString().toLowerCase();
        this._p_allowtags = v;

    };
    _pEnvironment.set_blocktags = function (v)
    {
        if (!v) return;
        v = v.toString().toLowerCase();
        this._p_blocktags = v;
    };

    _pEnvironment.set_allowattributes = function (v)
    {
        if (!v) return;
        v = v.toString().toLowerCase();
        this._p_allowattributes = v;
    };
    _pEnvironment.set_blockattributes = function (v)
    {
        if (!v) return;
        v = v.toString().toLowerCase();
        this._p_blockattributes = v;
    };


    _pEnvironment._registerUserHotkey = function (id, userhotkey)
    {
        if (!id || !userhotkey || userhotkey._is_registered)
            return;

        for (var _id in this._userhotkeylist)
        {
            var _userhotkey = this._userhotkeylist[_id];
            if (id == _id || (userhotkey._keycode == _userhotkey._keycode && userhotkey._modifierkey == _userhotkey._modifierkey))
                return;
        }

        var userhotkeyinfo = {
            keycode: userhotkey._keycode,
            altkey: (userhotkey._modifierkey & 0x02) == 0x02,
            ctrlkey: (userhotkey._modifierkey & 0x01) == 0x01,
            shiftkey: (userhotkey._modifierkey & 0x04) == 0x04
        };

        this._userhotkey_list[id] = userhotkeyinfo;
        this._userhotkeylist[id] = userhotkey;

        userhotkey._is_registered = true;
    };

    _pEnvironment._unregisterUserHotkey = function ()
    {
        var userhotkey_list = this._userhotkey_list;
        var userhotkeylist = this._userhotkeylist;

        for (var propid in userhotkey_list)
        {
            delete userhotkey_list[propid];
            delete userhotkeylist[propid];
        }

        this._p_userhotkey = "";
    };

    _pEnvironment._processUserHotkey = function (keycode, altKey, ctrlKey, shiftKey, metaKey)
    {
        var userhotkeylist = this._userhotkey_list;
        for (var propid in userhotkeylist)
        {
            var userhotkeyinfo = userhotkeylist[propid];
            if (userhotkeyinfo.keycode == keycode &&
                userhotkeyinfo.altkey == altKey &&
                userhotkeyinfo.ctrlkey == ctrlKey &&
                userhotkeyinfo.shiftkey == shiftKey)
            {
                this.on_fire_onuserhotkey(keycode, altKey, ctrlKey, shiftKey, this, this, metaKey, propid);
                return true;
            }
        }
    };

    _pEnvironment.set_multivalueseparator = function (v)
    {
        this._p_multivalueseparator = v;
    };

    //// 호출 시점에 대한 논의가 필요함
    ////현재는 mainwindow 생성시에 등록하도록 함
    // nexacro._applyRegisterClassesToContext 함수로 변경
    // _pEnvironment._registerClass = function (_jsContext, _nexacro)
    // {
    //     if (!_nexacro)
    //         _nexacro = nexacro;

    //     var registerclass = this._registerclass;
    //     var len = registerclass.length;
    //     for (var i = 0; i < len; i++)
    //     {
    //         var item = registerclass[i];
    //         if (item && !_jsContext[item.id])
    //         {
    //             _jsContext[item.id] = _nexacro._executeGlobalEvalStr(item.classname);
    //         }
    //     }
    // };

    _pEnvironment._getRegisterClassList = function ()
    {
        return this._registerclass;
    };

    _pEnvironment._setCurrentScreen = function (screeninfo)
    {
        this._curscreen = screeninfo;
    };

    _pEnvironment._calcZoomfactor = function ()
    {
        const cur_zoomfactortype = this._curscreenzoomfactortype;
        const curscreentype = this._curscreentype;
        const env = this;

        const _getTypeScreenSize = function (screentype)
        {            
            let width = -1
            let height = -1;
            
            if (screentype == "mobile_large")
            {
                width = 800;
                height = 1280;
            }
            else if (screentype == "mobile_medium")
            {
                width = 640;
                height = 1024;
            }
            else if (screentype == "mobile_small")
            {                    
                width = 480;
                height = 768;
            }
            return { width: width, height: height };
        }
        
        const screen_size = _getTypeScreenSize(curscreentype);
        //const userzoom = this._allow_default_pinchzoom;
        const screen_width = screen_size.width;
        const screen_height = screen_size.height;
        //const zoom_fitting_width = Math.abs(parseInt(curscreen._screen_width));
        // screeninfo의 width를 실제 device width에 맞춘다.
        //const zoom_fitting_height = Math.abs(parseInt(curscreen._screen_height));

        //var zoom_fitting_val, device_val;
        if (screen_width == -1)
        {
            this._zoom_factor = 100;
            return;
        }

        switch (cur_zoomfactortype)
        {
            case "portrait":
                this._zoom_factor = nexacro._getScreenAvailWidth() * 100 / screen_width;
                break;
            case "landscape":
                this._zoom_factor = nexacro._getScreenAvailHeight() * 100 / screen_height;
                break;
            case "auto":
                this._zoom_factor = nexacro._getScreenAvailWidth() * 100 / screen_width;
                this._landscape_zoom_factor = nexacro._getScreenAvailHeight() * 100 / screen_height;
                break;
        }
    };

    _pEnvironment._applyScreenProp = function ()
    {
        var screeninfo = this._curscreen;

        //nexacro.open 에서 사용하기 위해 this._curscreen 를 삭제하지 않음
        //selectedscreeninfo to environment internal variable
        if (screeninfo)
        {
            this._curscreenid = screeninfo.id ? screeninfo.id : "";
            this._curscreentype = screeninfo.type;
            this._curscreenzoomfactortype = screeninfo.zoomfactortype ? screeninfo.zoomfactortype : "portrait";
            this._allow_default_pinchzoom = screeninfo._allow_default_pinchzoom;
            this._zoom_factor = screeninfo._zoom_factor;
            this._landscape_zoom_factor = screeninfo._landscape_zoom_factor;
        }

        // screeninfo 내의 env property는 env 로 적용한다. 
        for (var prop in screeninfo)
        {
            if (Object.prototype.hasOwnProperty.call(screeninfo, prop))
            {
                if (prop == "id")
                    continue;
                if (this["set_" + prop])
                    this["set_" + prop](screeninfo[prop]);
            }
        }

        if (this._rtl === undefined)
        {
            var _locale_info = nexacro.Locale.getLocaleInfo(this._p_locale);
            this._rtl = _locale_info.direction == "rtl";
        }
        else if (!this._rtl)
        {
            this._rtl = false;
        }
    };

    _pEnvironment.init = function ()
    {
        /*if (nexacro.__APPLOADER_BASE_PATH__)
        {
            nexacro._component_uri = nexacro._component_uri.replace("./", nexacro.__APPLOADER_BASE_PATH__);
            nexacro._theme_uri = nexacro._theme_uri.replace("./", nexacro.__APPLOADER_BASE_PATH__);
        }*/
        nexacro._initializeGlobalObjects(_global_context);

        var component_uri = this._component_uri;
        if (component_uri)
            this._resource_path = nexacro._transfullurl(component_uri, "../resources/", this._p_checkversion, this._p_version);
        else
        {
            let service = this._p_services["nexacrolib"];
            let nexacroliburi = service.getURL();
            if (nexacroliburi)
            {
                if (nexacroliburi == "%nexacrolib%")
                    nexacroliburi = "./nexacrolib/";
                this._resource_path = nexacro._transfullurl(nexacroliburi, "./resources/");
            }
        }

        this.on_init();
        this._applyScreenProp();

        //nexacro._screenInfoToInternal(this);

    };

    _pEnvironment._getZoomFactor = function ()
    {
        if (this._curscreenzoomfactortype == "auto")
        {
            var is_portrait = nexacro._isPortrait();
            return is_portrait ? this._zoom_factor : this._landscape_zoom_factor;
        }
        return this._zoom_factor;
    };

    ///////////////////////////////// Start accessibility //////////////////////////////////

    _pEnvironment.set_enableaccessibility = function (v)
    {
        var enablea11y = nexacro._toBoolean(v);
        if (enablea11y == this._p_enableaccessibility)
            return;
        this._p_enableaccessibility = enablea11y;
        if (this._p_enableaccessibility === true)
        {
            if (this._a11yHistoryList == null)
                this._a11yHistoryList = [];

            this.on_fire_onaccessibility("", this, this);
        }
        else
        {
            this._a11yHistoryList = null;
        }

        nexacro._setEnableAccessibility(this, v);


        if (enablea11y && !nexacro._a11y_module_loaded)
        {
            nexacro._onSystemWarning(this, "native_require_add_module_accessibility");
        }
    };

    _pEnvironment.set_accessibilitytype = function (v)
    { //standard/sensereader/jaws
        this._p_accessibilitytype = v;
        nexacro._setAccessibilityType(this, v);
    };

    _pEnvironment.set_accessibilityreplayhotkey = function (v)
    {
        var cur_a11yreplayhotkey = this._a11yreplayhotkey;
        if (cur_a11yreplayhotkey)
            this._unregisterHotkey(cur_a11yreplayhotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilityreplayhotkey = "";
            this._a11yreplayhotkey = null;
        }
        else
        {
            this._p_accessibilityreplayhotkey = hotkey._toString();
            this._a11yreplayhotkey = hotkey;

            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilitybackwardkey = function (v)
    {
        var cur_a11ybackwardkey = this._a11ybackwardkey;
        if (cur_a11ybackwardkey)
            this._unregisterHotkey(cur_a11ybackwardkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilitybackwardkey = null;
            this._a11ybackwardkey = null;
        }
        else
        {
            this._p_accessibilitybackwardkey = hotkey._toString();
            this._a11ybackwardkey = hotkey;

            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilityforwardkey = function (v)
    {
        var cur_a11yforwardkey = this._a11yforwardkey;
        if (cur_a11yforwardkey)
            this._unregisterHotkey(cur_a11yforwardkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilityforwardkey = null;
            this._a11yforwardkey = null;
        }
        else
        {
            this._p_accessibilityforwardkey = hotkey._toString();
            this._a11yforwardkey = hotkey;
            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilityhistorycount = function (v)
    {
        v = parseInt(v);
        if (isNaN(v) || v < 0)
            v = 0;

        this._p_accessibilityhistorycount = v;
        var historylist = this._a11yHistoryList;
        if (historylist)
        {
            var len = historylist.length;
            if (len > v)
            {
                while (len-- > v)
                    historylist.shift();

                this._a11yHistoryCursor = v - 1;
            }
        }
    };

    _pEnvironment.set_accessibilitywholereadhotkey = function (v)
    {
        var cur_a11ywholereadhotkey = this._a11ywholereadtype;
        if (cur_a11ywholereadhotkey)
            this._unregisterHotkey(cur_a11ywholereadhotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilitywholereadhotkey = "";
            this._a11ywholereadtype = null;
        }
        else
        {
            this._p_accessibilitywholereadhotkey = hotkey._toString();
            this._a11ywholereadtype = hotkey;

            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilitywholereadtype = function (v)
    {
        this._p_accessibilitywholereadtype = v;
        nexacro._setAccessibilityWholeReadType(this, v);
    };

    _pEnvironment.set_accessibilitycontentsearchkey = function (v)
    {
        this._p_accessibilitycontentsearchkey = v;
        nexacro._setAccessibilityContentSearchKey(v);
    };

    _pEnvironment.set_accessibilitydescreadtype = function (v)
    {
        this._p_accessibilitydescreadtype = v;
        nexacro._setAccessibilityDescReadType(this, v);
    };

    _pEnvironment.set_accessibilityfirstovermessage = function (v)
    {
        this._p_accessibilityfirstovermessage = v;
    };

    _pEnvironment.set_accessibilitylastovermessage = function (v)
    {
        this._p_accessibilitylastovermessage = v;
    };

    _pEnvironment.set_accessibilityheadingnexthotkey = function (v)
    {
        var cur_a11yheadingnexthotkey = this._a11yheadingnexthotkey;
        if (cur_a11yheadingnexthotkey)
            this._unregisterHotkey(cur_a11yheadingnexthotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilityheadingnexthotkey = "";
            this._a11yheadingnexthotkey = null;
        }
        else
        {
            this._p_accessibilityheadingnexthotkey = hotkey._toString();
            this._a11yheadingnexthotkey = hotkey;
            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilityheadingprevhotkey = function (v)
    {
        var cur_a11yheadingprevhotkey = this._a11yheadingprevhotkey;
        if (cur_a11yheadingprevhotkey)
            this._unregisterHotkey(cur_a11yheadingprevhotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilityheadingprevhotkey = "";
            this._a11yheadingprevhotkey = null;
        }
        else
        {
            this._p_accessibilityheadingprevhotkey = hotkey._toString();
            this._a11yheadingprevhotkey = hotkey;
            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilitycomponentnexthotkey = function (v)
    {
        var cur_a11ycomponentnexthotkey = this._a11ycomponentnexthotkey;
        if (cur_a11ycomponentnexthotkey)
            this._unregisterHotkey(cur_a11ycomponentnexthotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilitycomponentnexthotkey = "";
            this._a11ycomponentnexthotkey = null;
        }
        else
        {
            this._p_accessibilitycomponentnexthotkey = hotkey._toString();
            this._a11ycomponentnexthotkey = hotkey;
            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment.set_accessibilitycomponentprevhotkey = function (v)
    {
        var cur_a11ycomponentprevhotkey = this._a11ycomponentprevhotkey;
        if (cur_a11ycomponentprevhotkey)
            this._unregisterHotkey(cur_a11ycomponentprevhotkey);
        var hotkey = new nexacro._HotKey(v);
        if (hotkey._isEmpty())
        {
            this._p_accessibilitycomponentprevhotkey = "";
            this._a11ycomponentprevhotkey = null;
        }
        else
        {
            this._p_accessibilitycomponentprevhotkey = hotkey._toString();
            this._a11ycomponentprevhotkey = hotkey;
            this._registerHotkey(hotkey);
        }
    };

    _pEnvironment._registerHotkey = function (v)
    {
        if (!v || v._is_registered)
            return;

        nexacro._registerHotkeyComp(this, this, v);
    };

    _pEnvironment._unregisterHotkey = function (v)
    {
        if (!v || !v._is_registered)
            return;
        nexacro._unregisterHotkeyComp(this, this, v);
    };

    _pEnvironment._processHotkey = function (keycode, altKey, ctrlKey, shiftKey, comp)
    {
        var hotkeylist = this._hotkey_list;
        for (var i = 0; i < hotkeylist.length; i++)
        {
            var hotkeyinfo = hotkeylist[i];
            if (hotkeyinfo[1] == keycode &&
                hotkeyinfo[2] == altKey &&
                hotkeyinfo[3] == ctrlKey &&
                hotkeyinfo[4] == shiftKey)
            {
                this._on_hotkey(keycode, altKey, ctrlKey, shiftKey, comp);
                return true;
            }
        }
    };

    _pEnvironment._on_hotkey = function (keycode, altKey, ctrlKey, shiftKey, curcomp)
    {
        if (this._p_enableaccessibility)
        {
            var forwardkey = this._a11yforwardkey;
            var backwardkey = this._a11ybackwardkey;
            var replayhotkey = this._a11yreplayhotkey;
            var wholereadhotkey = this._a11ywholereadhotkey;
            var headingnexthotkey = this._a11yheadingnexthotkey;
            var headingprevhotkey = this._a11yheadingprevhotkey;
            var componentnexthotkey = this._a11ycomponentnexthotkey;
            var componentprevhotkey = this._a11ycomponentprevhotkey;

            var comp, readcursor, form, lastfocus_comp, last_comp;
            if (forwardkey && keycode == forwardkey._keycode &&
                altKey == ((forwardkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((forwardkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((forwardkey._modifierkey & 0x04) == 0x04))
            {
                readcursor = this._a11yHistoryCursor + 1;
                if (readcursor >= this._a11yHistoryList.length)
                    readcursor = this._a11yHistoryCursor = this._a11yHistoryList.length - 1;
                else
                    this._a11yHistoryCursor = readcursor;

                comp = this._get_accessibility_history(readcursor);
                if (comp)
                    this.playAccessibility(comp);
            }
            else if (backwardkey && keycode == backwardkey._keycode &&
                altKey == ((backwardkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((backwardkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((backwardkey._modifierkey & 0x04) == 0x04))
            {


                readcursor = this._a11yHistoryCursor - 1;
                if (readcursor < 0)
                    readcursor = this._a11yHistoryCursor = 0;
                else
                    this._a11yHistoryCursor = readcursor;

                comp = this._get_accessibility_history(readcursor);
                if (comp)
                    this.playAccessibility(comp);

            }
            else if (replayhotkey && keycode == replayhotkey._keycode &&
                altKey == ((replayhotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((replayhotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((replayhotkey._modifierkey & 0x04) == 0x04))
            {
                comp = this._get_accessibility_history(this._a11yHistoryCursor);
                if (comp)
                    this.playAccessibility(comp);
            }
            else if (wholereadhotkey && keycode == wholereadhotkey._keycode &&
                altKey == ((wholereadhotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((wholereadhotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((wholereadhotkey._modifierkey & 0x04) == 0x04))
            {
                //todo whole read hotkey 
                if (this._a11ywholereadtype !== 0)
                {
                    //var ar = this._a11yHistoryList;
                    lastfocus_comp = this._get_accessibility_history(this._a11yHistoryList.length - 1);
                    form = lastfocus_comp._getForm();
                    form._playAccessibilityWholeReadLabel("wholeread");
                }
            }
            else if (headingnexthotkey && keycode == headingnexthotkey._keycode &&
                altKey == ((headingnexthotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((headingnexthotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((headingnexthotkey._modifierkey & 0x04) == 0x04))
            {
                form = curcomp._getForm();
                lastfocus_comp = form._last_focused;
                comp = form._getNextHeadingComponent(lastfocus_comp);
                if (comp)
                    comp._setFocus(true, 2, true);
            }
            else if (headingprevhotkey && keycode == headingprevhotkey._keycode &&
                altKey == ((headingprevhotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((headingprevhotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((headingprevhotkey._modifierkey & 0x04) == 0x04))
            {
                form = curcomp._getForm();
                lastfocus_comp = form._last_focused;
                comp = form._getPrevHeadingComponent(lastfocus_comp);
                if (comp)
                    comp._setFocus(true, 3, true);
            }
            else if (componentnexthotkey && keycode == componentnexthotkey._keycode &&
                altKey == ((componentnexthotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((componentnexthotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((componentnexthotkey._modifierkey & 0x04) == 0x04))
            {
                form = curcomp._getForm();
                if (form instanceof nexacro.Tab)
                    form = form._getForm();
                last_comp = form._getLastFocused();
                comp = form._searchNextTabFocus(last_comp ? last_comp : form, undefined, undefined, 2);
                if (comp && comp[0])
                    form._processArrowKey(true, comp);
            }
            else if (componentprevhotkey && keycode == componentprevhotkey._keycode &&
                altKey == ((componentprevhotkey._modifierkey & 0x02) == 0x02) &&
                ctrlKey == ((componentprevhotkey._modifierkey & 0x01) == 0x01) &&
                shiftKey == ((componentprevhotkey._modifierkey & 0x04) == 0x04))
            {
                form = curcomp._getForm();
                if (form instanceof nexacro.Tab)
                    form = form._getForm();
                last_comp = form._getLastFocused();
                comp = form._searchPrevTabFocus(last_comp ? last_comp : form, undefined, undefined, 2);
                if (comp && comp[0])
                    form._processArrowKey(false, comp);
            }
        }
    };

    _pEnvironment._set_accessibility_history = function (comp, evt_name)
    {
        if (!comp)
            return;

        if (comp._is_frame || comp._is_form)
            return;

        var historyList = this._a11yHistoryList;
        var historyCount, currentCount, lasthistorycomp;
        if (historyList)
        {
            historyCount = this._p_accessibilityhistorycount;
            currentCount = historyList.length;

            if (currentCount > 0)
            {
                lasthistorycomp = historyList[currentCount - 1];
                if (lasthistorycomp == comp)
                    return;
            }

            if (evt_name == "tabkey" || evt_name === "focus" || evt_name === undefined)
            {
                if (lasthistorycomp == comp.parent)
                {
                    historyList.splice(currentCount - 1, 1);
                    historyList.push(comp);

                    this._a11yHistoryCursor = currentCount;

                    return;
                }
            }

            if (currentCount < historyCount)
            {
                historyList.push(comp);
            }
            else
            {
                historyList.shift();
                historyList.push(comp);
                currentCount = historyList.length - 1;
            }

            this._a11yHistoryCursor = currentCount;
        }
    };

    _pEnvironment._get_accessibility_history = function (n, replay)
    {
        var historyList = this._a11yHistoryList;
        if (historyList)
        {
            var historyCount = this._p_accessibilityhistorycount;
            if (n > -1 && n <= historyCount)
            {
                return historyList[n];
            }
            else if (replay)
            {
                return historyList[n];
            }
        }
    };

    _pEnvironment._remove_accessibility_history = function (comp)
    {
        var historyList = this._a11yHistoryList;
        for (var i = 0, len = historyList.length; i < len; i++)
        {
            if (historyList[i] == comp)
            {
                historyList.splice(i, 1);
                if (i <= this._a11yHistoryCursor)
                    this._a11yHistoryCursor--;
            }
        }
    };


    _pEnvironment.playAccessibility = function (/*v*/)
    {//need to modify

        if (!nexacro._isDesktop())
            return;

        var len = arguments.length;

        if (len <= 0)
            return false;

        if (arguments[0] instanceof nexacro.Component)
        {
            var comp = arguments[0];
            comp._notifyAccessibility();
            return true;
        }
        else if ((typeof arguments[0]) == "string")
        {
            //var strLable = arguments[0];
            //var strDescript = arguments[1] ? arguments[1] : "";
            //var strValue = arguments[2] ? arguments[2] : "";

            //TODO

            return true;
        }

        return false;
    };

    /*
       comp 	       : 지정한 component 부터 하위로 검색 (MainFrame/ChildFrame/Form/Component 지정가능)		
       startcomp 	   : 지정한 component 부터 다음검색 (미지정시 처음부터)		
       findtext 	   : 찾고자 하는 text		
       label/desc/all : 검색대상 Accessilibity Object의 Property (label:lable, desc:description, all:label+description) 		
       next/prev	   : 지정한 startcomp로부터 검색방향 (next:동일 level next, prev:동일 level prev) 	
                        startcomp가 미지정이면, 지정한 component의 child 기준으로 next면 First Child, prev면 Last Child 부터 검색됨	
       child/all	   : 지정한 comp로부터 검색범위 (child:직속 하위 component/control, all:모든 하위 component/control) 	
                        지정한 component가 form 계열일 경우 child 검색은 component 단위까지로 제한됨	
       result	       : 검색된 Component, 복수일경우 첫번째를 리턴, 없으면 null		
       */
    _pEnvironment.findAccessibility = function (comp, startcomp, value, type, dir, depth)
    {
        if (!comp || !value) //|| !type  || !dir || !depth)
            return null;

        // combo,calendar,spin,chart는 하위 control검색
        // grid는 band/cell단위 검색
        // list,radio는 item단위 검색
        if (comp._findAccessibility)
            return comp._findAccessibility(comp, startcomp, value, type, dir, depth);

        if (depth == "child")
            depth = 2;
        else
            depth = -1; // infinite

        return this._findAccessibility(comp, startcomp, value, type, dir, depth);
    };

    // findAccessibility의 실제 검색 메소드
    // comp의 Child 레벨 부터 검색한다.
    _pEnvironment._findAccessibility = function (comp, startcomp, value, type, dir, depth, findfrom)
    {
        // Validation
        // 1:true / 0:false / -1:startcomp matched
        var _validation = function (obj, start_comp)
        {
            if (!obj._isVisible())
                return 0;
            if (obj == start_comp)
                return -1;
            //if (start_comp != null) // start_comp 지정시 start_comp 이전 검색대상은 모두 무시
            //    return 0;
            var label = obj.accessibilitylabel;
            var desc = obj.accessibilitydescription;
            if ((type == undefined || type == "all") && (label.toLowerCase().match(value) || desc.toLowerCase().match(value)))
                return 1;
            else if ((type == "label") && label.toLowerCase().match(value))
                return 1;
            else if ((type == "desc") && desc.toLowerCase().match(value))
                return 1;
            return 0;
        };

        // child로 검색한 경우 검색종료
        if (depth === 0)
            return null;
        depth = depth - 1;

        if (!findfrom)
            findfrom = comp;

        value = value.toLowerCase();

        // Find 로직을 각각의 컴포넌트에 코딩 할 필요가 있을지??
        var ret, index, child, child_list, child_length, i;
        if (comp instanceof nexacro.Mainframe)
        {
            ret = _validation(comp.frame, startcomp);
            if (ret == 1)
                return comp.frame;
            if (ret == -1)
                startcomp = null;

            return this._findAccessibility(comp.frame, startcomp, value, type, dir, depth);
        }
        else if (comp instanceof nexacro.FrameSet)
        {
            // TODO check 무슨 순서대로 검색해야 할지?
            child_list = comp.frames;
            if (!child_list)
                return null;

            child_length = child_list.length;
            i = 0;
            if (startcomp)
            {
                index = nexacro._indexOf(child_list, startcomp) + 1;
                if (index > 0)
                    i = index;
            }
            for (; i < child_length; i++)
            {
                child = (dir == "prev") ? child_list[child_length - 1 - i] : child_list[i];
                ret = _validation(child, startcomp);
                if (ret == 1)
                    return child;
                if (ret == -1)
                    startcomp = null;

                if (depth != 1)
                {
                    ret = this._findAccessibility(child, startcomp, value, type, dir, depth);
                    if (ret)
                        return ret;
                }
            }
        }
        else if (comp instanceof nexacro.ChildFrame)
        {
            ret = _validation(comp._p_form, startcomp);
            if (ret == 1)
                return comp._p_form;
            if (ret == -1)
                startcomp = null;

            return this._findAccessibility(comp._p_form, startcomp, value, type, dir, depth, findfrom);
        }
        else if (comp._hasContainer()) // form, div, Tab, tabpage, popupdiv?
        {
            // Form은 taborder순으로 검색함
            //var child_list = comp._child_list;
            child_list = comp._getComponentsByTaborder(comp, true);
            if (!child_list)
                return null;

            child_length = child_list.length;
            i = 0;
            if (startcomp)
            {
                index = nexacro._indexOf(child_list, startcomp) + 1;
                if (index > 0)
                    i = index;
            }
            for (; i < child_length; i++)
            {
                child = (dir == "prev") ? child_list[child_length - 1 - i] : child_list[i];
                ret = _validation(child, startcomp);
                if (ret == 1)
                    return child;
                //if (ret == -1)
                //    startcomp = null;

                if (depth != 1 && child._hasContainer())
                {
                    ret = this._findAccessibility(child, startcomp, value, type, dir, depth, findfrom);
                    if (ret)
                        return ret;
                }
            }
        }
        //else if (findfrom == comp)
        //{
        //    ;
        //    // TODO Component자신에서 시작된 경우 Control까지 검색
        //    // Control을 내부적으로 관리하는 기능 구현이 우선임.
        //}

        return null;
    };
    ///////////////////////////////// End accessibility //////////////////////////////////

    _pEnvironment.initEvent = function ()
    {
        this.on_initEvent();
    };

    _pEnvironment.loadVariables = function ()
    {
        this.on_loadVariables();
        this._addInitialVariable();   //nexacro.setInitialVariable ("environment", "cookie", "httpheader") 처리 
    };

    _pEnvironment._addInitialVariable = function ()
    {
        var variables, variable;
        if (nexacro._initenvvar)
        {
            variables = nexacro._initenvvar;
            for (variable in variables)
            {
                if (Object.prototype.hasOwnProperty.call(variables, variable))
                {
                    this._setEnvironmentVariable(variable, variables[variable]);
                }
            }

            nexacro._initenvvar = null;
            delete nexacro._initenvvar;
        }

        if (nexacro._initcookievar)
        {
            variables = nexacro._initcookievar;

            var expire;
            for (variable in variables)
            {
                if (Object.prototype.hasOwnProperty.call(variables, variable))
                {
                    this._setCookieVariable(variable, variables[variable], expire);
                }
            }
            nexacro._initcookievar = null;
            delete nexacro._initcookievar;
        }
        if (nexacro._inithttpvar)
        {
            variables = nexacro._inithttpvar;

            for (variable in variables)
            {
                if (Object.prototype.hasOwnProperty.call(variables, variable))
                {
                    this._setHTTPHeaderVariable(variable, variables[variable]);
                }
            }
            nexacro._inithttpvar = null;
            delete nexacro._inithttpvar;
        }

    };


    _pEnvironment._loadLoadingImage = function ()
    {
        var loadingimage = this._getLoadingImageUrl();
        loadingimage = this._getImageLocation(loadingimage);
        nexacro._getImageSize_extended(loadingimage, this._on_loadwaitimage, this);
    };

    _pEnvironment.getDeviceAdaptor = function (deviceid)	
    {
        // deviceid에 해당하는 device object를 반환
        return this._device_adaptor_list[deviceid];     
    };

    // Return Network Status
    _pEnvironment.getNetworkStatus = function ()
    {
        // 현재 Network 상태 반환(String: "online", "offline")
        return nexacro.getNetworkStatus();
    }

    _pEnvironment._loadDeviceAdaptors = function ()
    {
        //_deviceList에 있는 device들의 library를 로드함.
        this.on_loadDeviceAdaptors();
    };

    _pEnvironment.on_loadDeviceAdaptors = nexacro._emptyFn;
    _pEnvironment._loadExternals = async function ()
    {

        const itemtask = async (item) =>
        {
            return new Promise((resolve, reject) =>
            {
                (async () => 
                {
                    let result;
                    try
                    {
                        if (item.loadtype == "prefetch")
                            result = await nexacro._fetchExtResource(item);
                        else
                        {
                            switch (item.type)
                            {
                                case "js":
                                    result = await nexacro._loadExtJs(item);
                                    break;
                                case "module":
                                    result = await nexacro._loadExtModule(item);
                                    break;
                                case "style":
                                    result = await nexacro._loadExtCss(item);
                                    break;
                                //case "template":
                                //    result = await nexacro._loadExtTemplate(item);
                                //    break;
                                default:
                                    throw new Error(`Unknown type: ${item.type}`);

                            }
                        }
                        resolve(result);
                    }
                    catch (e)
                    {
                        reject(new Error(`Unexpected error while loading externals: ${e.message}`));
                    }
                })();
            }).catch(err =>
            {
                return err;
            });
        };

        const results = [];


        for (const id of this._p_externals._idArray)
        {
            const item = this._p_externals[id];
            if (item.status == "success") return;
            const result = await Promise.allSettled([itemtask(item)]);
            results.push(result[0]);
        };
        /*  // 초기화 할 필요없음
        for (const id of this._p_templates._idArray)
        {
            const item = this._p_templates[id];
            if (item.status == "success") return;
            const result = await Promise.allSettled([itemtask(item)]);
            results.push(result[0]);
        };
        */
        return results;

    };



    /*----------------------------------------------
     * NexacroK
    ------------------------------------------------- */
    _pEnvironment.set_scrollpropagation = function (v)
    {
        if (!v) return;

        var type_enum = ["none", "both", "vertical", "horizontal"];

        v = v.toString().toLowerCase();
        if (type_enum.indexOf(v) >= 0)
            this._p_scrollpropagation = v;
    };

    _pEnvironment._load = function (project_path)
    {
        this._load_manager._is_mainloaded = true;
        this._load_manager.status = 2;
       
        if (!this._popuporigin)  //popup
        {
            this._application = new nexacro.Application(this);            
        }            
        //this.loadTypeDefinition(); -> environment.xml.js 에서 처리
        this._loadDeviceAdaptors();
        this.init();

        this._makeProjectPathinfo(this._p_xadl, this._typedefinition_url, project_path);
        this._makeDesignPathinfo(this._p_themeid, this._p_highcontrastthemeid, this._p_initvaluefileid);
        this._makeStringResourcePathinfo(this._p_usestringresource, this._p_stringresourceserviceurl);

        if (!this._popuporigin)
        {
            nexacro._initInformation(this);  //license

            if (this._p_icon)
                nexacro._setApplicationIcon(this._p_icon);
        }

        this._loadTheme(this._curthemeid);

        //load initvalue
        this._loadInitValueFile(this._initvaluefileid);

        //load stringresource
        this._loadStringResource(this._stringrcfileid);

        if (!this._load_manager.hasLoadItem())
            this._load_manager._check_fire_oninit();  //case check?? 

    };

    _pEnvironment._addPreloadList = function (type, url, id, args)
    {
        nexacro._addPreloadList(this, type, url, id, args);
    };

    _pEnvironment._executeScript = function (context)
    {
        nexacro._executeMainScript(context);
    };

    _pEnvironment.registerScript = function (filename, fn)
    {
        nexacro._registerScript(this, filename, fn);
    };

    //executescript를 generate 코드에서 직접 호출로 변경 
    _pEnvironment.executeIncludeScript = function (url)
    {
        nexacro._executeIncludeScript(this, url);
    };

    _pEnvironment.addIncludeScript = function (mainurl, url)
    {
        nexacro._addIncludeScript(this, mainurl, url);
    };

    _pEnvironment.loadIncludeScript = function (mainurl)
    {
        nexacro._loadIncludeScript(this, mainurl);
    };

    _pEnvironment._loadInclude = function (mainurl, url, asyncmode, service_url)
    {
        nexacro._loadInclude(this, mainurl, url, asyncmode, service_url);
    };


    _pEnvironment._loadTheme = function (themeid)
    {
        nexacro._loadTheme(this, themeid);
    };

    _pEnvironment._loadInitValueFile = function (initvaluefile)
    {           
        if (!initvaluefile)
            return;

        //initvaluefile			
        if (initvaluefile.length > 5)
        {
            var ext = initvaluefile.substring(initvaluefile.length - 4);
            if (ext == ".xml" || ext == ".xiv")
                initvaluefile = initvaluefile + ".js";
        }

        nexacro._loadGlobalModule(this, initvaluefile);
    };

    //_pApplication._loadStringResource = _pApplication._loadInitValueFile;
    _pEnvironment._loadStringResource = function (stringrc)
    {
        if (!stringrc)
            return;
        //default

        //this._clearLocalThemeCache();
        var url, base_url;
        var localcachetype = false;
        var service;
        if (this._localcache_path && this._hasLocalCacheUrl(stringrc))
        {
            url = this._getLocalCacheUrl(stringrc);
            if (url)
            {
                service = this._getServiceObject(stringrc);
                this._load_manager.loadGlobalJsonResource(stringrc, null, null, service);
                return;
            }

            localcachetype = true;
            base_url = this._localcache_path;
        }

        url = this._getServiceLocation(stringrc, base_url);

        if (localcachetype)
        {
            this._addLocalCacheUrl(stringrc, url);
        }

        service = this._getServiceObject(stringrc);
        this._load_manager.loadGlobalJsonResource(url, null, null, service);
    };

    _pEnvironment._on_init = function ()
    {
        if (!this._popuporigin)
            this.loadVariables();

        nexacro.__MFEAPI._setLoadExternals(this);
        
        // externals를 직접 호출하지 여부 설정 
        if (this._is_loadexternals_directcall)
            this._loadExternals();  // default 는 bootstrap 에서 처리, NexacroPortal 에서 load시 direct call 되는 경우 처리
    
        this._executeScript(this);
        this.initEvent();

    };

    _pEnvironment._setLoadExternals = function (value)
    {
        this._is_loadexternals_directcall = value;
    };

    _pEnvironment._on_load = function (obj, url)
    {
        this.on_fire_onload(obj, url);

        if (this._loadedexternalcallback) this._loadedexternalcallback.call();
        this._loadedexternalcallback = null;
        delete this._loadedexternalcallback;

    };


    _pEnvironment.getParentContext = function ()
    {
        return null;
    };


    



    /*----------------------------------------------
     * End NexacroK
    ------------------------------------------------- */

    _pEnvironment.setDesktopScreenWidth = function (v)
    {
        var app = this._application;
        if (app && app._isLoaded())
            return;

        this._desktopscreenwidth = v;   //모바일 환경에서 선택된 screen이 desktop인 & userzoom = true
    };


    _pEnvironment.on_fire_onload = function (obj, url)
    {
        if (this.onload && this.onload._has_handlers)
        {
            //var url = nexacro._transfullurl(nexacro._project_absolutepath, "environment.xml.js");
            var evt = new nexacro.LoadEventInfo(obj, "onload", url);
            return this.onload._fireEvent(this, evt);
        }
        return false;
    };


    _pEnvironment.on_fire_onaccessibility = function (text, from_comp, from_refer_comp)
    {
        if (this.onaccessibility && this.onaccessibility._has_handlers)
        {
            var evt = new nexacro.AccessibilityEventInfo(this, "onaccessibility", text, from_comp, from_refer_comp);
            return this.onaccessibility._fireEvent(this, evt);
        }
        return false;
    };

    _pEnvironment.on_fire_onaccessibilitykey = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp)
    {
        if (this.onaccessibilitykey && this.onaccessibilitykey._has_handlers)
        {
            var evt = new nexacro.KeyEventInfo(this, "onaccessibilitykey", alt_key, ctrl_key, shift_key, key_code, from_comp, from_refer_comp);
            return this.onaccessibilitykey._fireEvent(this, evt);
        }
        return false;
    };


    _pEnvironment.on_fire_onerror = function (obj, errortype, errormsg, errorobj, statuscode, requesturi, locationuri, errordata)
    {
        if (this.onerror && this.onerror._has_handlers)
        {
            var evt = new nexacro.ErrorEventInfo(obj, "onerror", errortype, errormsg, errorobj, statuscode, requesturi, locationuri, errordata);
            return this.onerror._fireEvent(this, evt);
        }
        return false;
    };

    //_on_default_sys_onextmodule
    _pEnvironment._on_onextmodule = function (handle, eventid, eventtype, data)
    {
        var ret;
        if (this._device_adaptor_handlelist[handle])
        {
            ret = this._device_adaptor_handlelist[handle].processEvent(eventid, eventtype, data);
        }
        return ret;
    };

    _pEnvironment.on_fire_user_onextendedcommand = function (evt, refer_comp)
    {
        if (this.onextendedcommand && this.onextendedcommand._has_handlers)
        {
            var e = new nexacro.ExtendedCommandEventInfo(this, "onextendedcommand", evt, refer_comp);
            return this.onextendedcommand._fireEvent(this, e);
        }
        return false;
    };

    _pEnvironment.on_fire_sys_onextendedcommand = function (evt, refer_comp)
    {
        return false;
    };

    _pEnvironment.on_fire_onuserhotkey = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key, key_id)
    {
        if (this.onuserhotkey && this.onuserhotkey._has_handlers)
        {
            var evt = new nexacro.EnvironmentUserHotkeyEventInfo(this, "onuserhotkey", alt_key, ctrl_key, shift_key, key_code, from_comp, from_refer_comp, meta_key, key_id);
            return this.onuserhotkey._fireEvent(this, evt);
        }
    };

    // For Network Status Change Detection Event
    _pEnvironment.on_fire_onnetworkstatuschange = function (obj, eventid, is_online)
    {
        if (this.onnetworkstatuschange && this.onnetworkstatuschange._has_handlers)
        {
            var evt = new nexacro.NetworkStatusChangeEventInfo(this, eventid, is_online); // (obj, id, is_online)
            return this.onnetworkstatuschange._fireEvent(this, evt);
        }
        return false;
    };

    _pEnvironment.on_fire_onpressedreloadkey = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key)
    {
        if (this.onpressedreloadkey && this.onpressedreloadkey._has_handlers)
        {
            var evt = new nexacro.KeyEventInfo(this, "onpressedreloadkey", alt_key, ctrl_key, shift_key, key_code, from_comp, from_refer_comp, meta_key);
            return this.onpressedreloadkey._fireEvent(this, evt);
        }
    };

    _pEnvironment.on_init = _pEnvironment.on_initEvent = nexacro._emptyFn;
    _pEnvironment._makeProjectPathinfo = function (xadl, typedefinition_url, project_path)
    {
        //_project_url
        //nexacro._typedefinition_url
        //_localcache_path
        //_theme_uri    
        var request_url;
        if (xadl)
        {
            request_url = xadl;
            if (request_url.length > 5 && request_url.substring(request_url.length - 5) == ".xadl")
            {
                request_url = request_url + ".js";
            }

            //  archive adl을 사용하는 경우 외부에서 지정		
            if (project_path || ((nexacro._OS == "Android" || nexacro._OS == "iOS") && nexacro._isHybrid && nexacro._isHybrid()) || nexacro._macOSWebView)
            {
                var base_url = nexacro._getProjectBaseURL(xadl);
                this._setProjectURL(project_path);

                if (!nexacro._isAbsolutePath(request_url))
                    request_url = nexacro._transfullurl(this._project_absolutepath, request_url, this._p_checkversion, this._p_version);

                if (this._project_absolutepath != base_url)
                {
                    this._localcache_path = base_url;
                    var cache_url = xadl;
                    if (cache_url.substring(cache_url.length - 3) == ".js")
                    {
                        cache_url = cache_url.substring(0, cache_url.length - 3);
                    }
                    if (this._hasLocalCacheUrl(cache_url))
                    {
                        request_url = nexacro._transfullurl(this._localcache_path, xadl, this._p_checkversion, this._p_version);
                    }
                }
            }
            else
            {
                if (nexacro._isAbsolutePath(request_url))
                {
                    request_url = nexacro._getBaseUrl(request_url)
                }
               // this._setProjectURL(request_url);                

                request_url = nexacro._transfullurl(this._project_absolutepath, request_url, this._p_checkversion, this._p_version);
            }
        }
        else
        {
            request_url = "";
            this._setProjectURL(project_path);

            if (nexacro._macOSWebView && window.location.href.indexOf("file://") === 0)
            {
                this._localcache_path = nexacro._getProjectBaseURL();
            }
        }

        this._typedefinition_url = nexacro._transfullurl(this._project_absolutepath, this._typedefinition_url, this._p_checkversion, this._p_version);
        this._request_mainurl = request_url;
    };

    //resource service 에는 executeurl 을 지원하지 않음
    _pEnvironment._getThemeURL = function ()
    {
        let themeuri = this._theme_uri;
        if (!this._theme_uri)
            themeuri = this._p_services["theme"]._getURL();

        let themename = this._curthemeid;
        let idx = themename.indexOf("::");
        if (idx >= 0)
            themename = themename.substring(idx + 2);

        return themeuri + themename;
    };

    _pEnvironment._getXCSSRCURL = function (url)
    {
        /*let service =this._p_services["xcssrc"];
        if (!service)
            return url;
        let executeurl = service._p_executeurl;
        if (nexacro._use_service_executeurl || !executeurl)
        {    
            url = url.replace("::", "_");        
            url = this._getServiceLocation("theme://" + url, this._project_absolutepath, null, false);
        }
        else*/
        {
            let executeurl = this._getThemeURL();
            url = url.replace("::", "_");  
            /*let themename = this._curthemeid;
            let idx = themename.indexOf("::");
            if (idx >= 0)
                themename = themename.substring(idx + 2);
            */
            if (executeurl.lastIndexOf("/") != executeurl.length - 1)
                executeurl = executeurl + "/";
            executeurl = executeurl + url;
            url = nexacro._transfullurl(this._project_absolutepath, executeurl, false);
        }       

        if (this._localcache_path)
        {            
            let base_url = url.substring( this._project_absolutepath.length, url.length);
            url = this._localcache_path + base_url;
        }

        return url;
    };

    _pEnvironment._makeDesignPathinfo = function (themeid, highcontrastthemeid, initvaluefileid)
    {
        //theme path
        var curthemeid = themeid;

        if (curthemeid)
        {
            var themename;
            var idx = curthemeid.indexOf(".xtheme");
            if (idx < 0)
                themename = curthemeid;
            else if (idx > 0)
                themename = curthemeid.substring(0, idx);
            /*
            if (themename)
            {
                this._theme_uri = this._p_services["theme"]._getURL();
                if (!this._theme_uri)
                {
                    this._theme_uri = "./_theme_/";
                }

                idx = themename.indexOf("::");

                if (idx >= 0)
                {
                    themename = themename.substring(idx + 2);
                    this._theme_uri = this._theme_uri + themename;
                }
                else
                {
                    this._theme_uri = this._theme_uri + themename;
                }
            }*/
            
            this._curthemeid = curthemeid;
            //nexacro._curthemeid = curthemeid;
        }

        if (initvaluefileid)
        {
            //initvaluefile			
            if (initvaluefileid.length > 5)
            {
                var ext = initvaluefileid.substring(initvaluefileid.length - 4);
                if (ext == ".xml" || ext == ".xiv")
                    initvaluefileid = initvaluefileid + ".js";
            }
            this._initvaluefileid = initvaluefileid;
        }

    };

    _pEnvironment._makeStringResourcePathinfo = function (usestringresource, stringresourceserviceurl)
    {
        const stringrc_service = "stringrc::/";
        var stringresourceurl = nexacro._stringresourceurl;

        const _getStringResourceLanguage = () =>
        {
            const env = this;
            if (!env._p_usestringresource)
                return;

            if (!env.on_getResourceLanguageInfo)   // 제너레이션된 소스가 없을 경우
                return;

            var langinfo = env.on_getResourceLanguageInfo();
            if (env.on_getStringResourceFileExt)
            {
                var ext = stringresourceurl.slice(-3);
                if (ext == ".js")
                    stringresourceurl = stringresourceurl.replace(ext, "." + env.on_getStringResourceFileExt());
            }

            var locale = env._p_locale ? env._p_locale : nexacro._getLocale();  //environment.locale 일 적용된 후에 nexacro._locale 가 업데이트됨 
            var curlang = locale.substring(0, 2);

            if (langinfo[curlang] == true)
                env._stringrc_lang = curlang;
            else
                env._stringrc_lang = curlang = "en";

            return curlang;
        };

        var curlang;
        if (usestringresource)
        {
            curlang = _getStringResourceLanguage();  // 내부변수 nexacro._StringResourceLang 에 값 설정
            if (curlang)
                this._stringrcfileid = stringrc_service + curlang + stringresourceurl;
        }
        else
        {
            if (nexacro._isDesignMode())
                return;

            var len = stringresourceserviceurl.length;
            if (len <= 0)
                return;

            var locale = this._p_locale ? this._p_locale : nexacro._getLocale();  //environment.locale 일 적용된 후에 nexacro._locale 가 업데이트됨 
            curlang = locale.substring(0, 2);
            this._stringrc_lang = curlang;

            if (stringresourceserviceurl.indexOf('?') > 0)
                stringresourceserviceurl += "&";
            else
                stringresourceserviceurl += "?";

            this._stringrcfileid = stringrc_service + stringresourceserviceurl + "lang=" + curlang;
        }
    };

    //ExtensionAPIV2
    _pEnvironment._addDeviceAdaptor = function (deviceid, deviceclass, configs)		
    {
        // devicename에 해당되는 device object를 찾아 configs 값으로 초기화해준다.	

        if (!deviceclass)
            return;

        var device_obj = new deviceclass(deviceid);
        device_obj.initialize(configs);
        var handle = device_obj.getDeviceHandle();
        if (handle)  // handle 중복체크 필요
        {
            if (!this._device_adaptor_handlelist[handle])
            {
                this._device_adaptor_list[deviceid] = device_obj;   //getDeviceAdaptor 에서 사용하기 위한 내부 정보
                this._device_adaptor_handlelist[handle] = device_obj;  //event 처리를 위한 내부 정보
            }
        }
    };
    
    _pEnvironment._removeDeviceAdaptor = function (name)																
    {
        var device_obj = this._device_adaptor_list[name];
        if (device_obj)															
        {
            device_obj.finalize();
            this._device_adaptor_list[name] = null;
        }
    };

    _pEnvironment._removeDeviceAdaptors = function ()																
    {
        for (var name in this._device_adaptor_list)															
        {
            var device_obj = this._device_adaptor_list[name];
            if (device_obj)														
            {
                device_obj.finalize();
                this._device_adaptor_list[name] = null;
            }
        }
    };

    _pEnvironment.on_fire_ondevicepermission = function (v)
    {
        var parameters = JSON.parse(v);

        if (this.ondevicepermission && this.ondevicepermission._has_handlers)
        {
            var evt = new nexacro.DevicePermissionEventInfo(this, "ondevicepermission", parameters.reason, parameters.status);
            return this.ondevicepermission._fireEvent(this, evt);
        }

        return false;
    };

    //onbeforepopstate, onpopstate, 
    _pEnvironment._firePopStateEvent = function (state)
    {
        if (this._p_preventbrowserbackbutton) return;

        let beforestate = nexacro.History._currentstate;
        if (!beforestate && !state) return;

        let statedata;
        let event = this.onbeforepopstate;
        if (event && event._has_handlers)
        {
            statedata = nexacro.History.getCurrentState();

            let evt = new nexacro.PopStateEventInfo(this, "onbeforepopstate", beforestate, statedata?.data, statedata?.url, location.href);
            event._fireEvent(this, evt);
        }

        nexacro.History._currentstate = state;
        event = this.onpopstate;
        if (event && event._has_handlers)
        {
            statedata = nexacro.History.getCurrentState();
            let evt = new nexacro.PopStateEventInfo(this, "onpopstate", state, statedata?.data, statedata?.url, location.href);
            event._fireEvent(this, evt);

            if (event && event.defaultprevented) return;
        }


        let sysdata = nexacro.History._getCurrentState_internal();
        if (sysdata)
        {
            let navtarget = sysdata.navtarget;
            let navurl = sysdata.navurl;
            let navtargetproperties = sysdata.navtargetproperties;

            if (navtarget && navurl)
            {
                const app = this._application;
                if (!app) return;

                let navidobj = app._getNavidObject(navtarget);
                if (!navidobj) return;

                navidobj.on_click_navigate(navurl, navtargetproperties);
            }
        }
    };


    _pEnvironment.userNotify = function (notifyid, message)
    {
        nexacro._userNotify(notifyid, message);
    };

    //_pEnvironment.loadStringResource ("en")  -> usestringresourcce = true 동작
    //_pEnvironment.loadStringResource ("Service::test")  -> full 경로로 호출 
    //_pEnvironment.loadStringResource ("en", "Service::test") -> Service::test?lang=en 으로 호출
    _pEnvironment._loadStringRC = function (lang, url)
    {
        let stringrc_service = "stringrc::/";
        let stringresourceurl = nexacro._stringresourceurl;

        var base_url;        
        let stringrcfileid;
        if (arguments.length == 1)
        {
            if (lang.length <= 2)
            {
                if (!this._p_usestringresource)
                    return;

                var langinfo = this.on_getResourceLanguageInfo();
                if (this.on_getStringResourceFileExt)
                {
                    var ext = stringresourceurl.slice(- 3);
                    if (ext == ".js")
                        stringresourceurl = stringresourceurl.replace(ext, "." + this.on_getStringResourceFileExt());
                }
                if (langinfo[lang] == true)
                {
                    this._stringrc_lang = lang;
                    stringrcfileid = stringrc_service + lang + stringresourceurl;
                }
                else
                    return;
            }
            else
                stringrcfileid = lang;
        }
        else if (arguments.length == 2)
        {
            if (typeof url == "string")
            {
                if (url.indexOf('?') > 0)
                    url += "&";
                else
                    url += "?";

                this._stringrc_lang = lang;
                stringrcfileid = stringrc_service + url + "lang=" + lang;
            }
        }

        var stringrc_url = this._getServiceLocation(stringrcfileid, base_url);
        const service = this._getServiceObject(stringrc_url);

        this._load_manager.reloadJsonResource(stringrc_url, null, false, service);

        let app = this._application;
        if (app)
        {
            if (app._p_mainframe)
                app._p_mainframe.on_apply_prop_stringresource();
        }
        else
        {
            if (!nexacro.isglobalmodule)
            {
                const apps = nexacro.__MFEAPI._getRootApps();
                if (apps)
                {
                    for (const _app of apps)
                    {
                        _app.on_apply_prop_stringresource();
                    }
                }
            }
        }
    };

    _pEnvironment._getStringResourceValue = function (key)
    {
        var str;
        if (this._stringrc)
            str = this._stringrc[key];
        else
            return;

        return str;
    };

    _pEnvironment._isExistStringResource = function ()
    {
        return this._stringrc ? true : false
    };

    _pEnvironment._getEnvironmentVariable = function (name)
    {
        return this._localstorage_manager.getVariable(name, 3);
    };

    _pEnvironment._setEnvironmentVariable = function (name, value)
    {
        if (name)
        {
            this._localstorage_manager.setVariable(name, value, 3);
        }
    };
    _pEnvironment.setEnvironmentVariable = _pEnvironment._setEnvironmentVariable;
     
    _pEnvironment._removeEnvironmentVariable = function (name)
    {
        this._localstorage_manager.removeVariable(name, 3);
    };

    _pEnvironment._getHTTPHeaderVariable = function (name)
    {
        return this._localstorage_manager.getVariable(name, 5);
    };

    _pEnvironment._setHTTPHeaderVariable = function (name, value)
    {
        /* setHTTPHeaderVariable은 name, value 모두 필수 매개변수 */
        if (name && value)
        {
            this._localstorage_manager.setVariable(name, value, 5);
        }
    };
    _pEnvironment.setHTTPHeaderVariable = _pEnvironment._setHTTPHeaderVariable;

    _pEnvironment._removeHTTPHeaderVariable = function (name)
    {
        this._localstorage_manager.removeVariable(name, 5);
    };

    _pEnvironment._getPrivateProfile = function (name)
    {
        return this._localstorage_manager.getVariable(name, 1);
    };

    _pEnvironment._setPrivateProfile = function (name, value)
    {
        /* setHTTPHeaderVariable은 name, value 모두 필수 매개변수 */
        if (name && value)
        {
            this._localstorage_manager.setVariable(name, value, 1);
        }
    };

    _pEnvironment._removePrivateProfile = function (name)
    {
        this._localstorage_manager.removeVariable(name, 1);
    };

    _pEnvironment._getCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)
        var ret;
        // localstorage 에서 값을 가져온다.
        if (bsecure !== true)
            ret = this._localstorage_manager.getVariable(name, 4);

        if (!ret && bsecure !== false)
            ret = this._localstorage_manager.getVariable(name, 6);

        return ret;
    };

    _pEnvironment._setCookieVariable = function (name, value, bsecure/*,expires*/)
    {
        if (name)
        {
            bsecure = nexacro._toBoolean(bsecure);
            var type = bsecure ? 6 : 4;
            var remove_type = bsecure ? 4 : 6;

            if (this._localstorage_manager.getVariable(name, remove_type))
                this._localstorage_manager.removeVariable(name, remove_type);

            //변수가 없으면 추가하고 설정

            this._localstorage_manager.setVariable(name, value, type);
            nexacro._setCookie(name, value, null, bsecure);
        }

        // 통신시 cookie로 적용될 변수.. 
        // 바로 cookie로 넣어야되나?? 아니면 localstorage에도 넣고 cookie로도 넣어야 되나?
    };
    _pEnvironment.setCookieVariable = _pEnvironment._setCookieVariable;
    _pEnvironment._removeCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)

        if (bsecure !== true)
            this._localstorage_manager.removeVariable(name, 4);

        if (bsecure !== false)
            this._localstorage_manager.removeVariable(name, 6);
    };

    _pEnvironment._isExistCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)
        var ret;

        if (bsecure !== true)
            ret = this._localstorage_manager.hasVariable(name, 4);

        if (!ret)
        {
            if (bsecure !== false)
                ret = this._localstorage_manager.hasVariable(name, 6);
        }

        return ret;
    };

    _pEnvironment._addProtocol = function (name, protocoladp)
    {
        var protocols = this._protocols;
        if (!protocols)
            protocols = this._protocols = {};

        protocols[name] = protocoladp;
    };

    _pEnvironment._isProtocol = function (name)
    {       
        var registerclass = this._registerclass;
        var len = registerclass.length;
        for (var i = 0; i < len; i++)
        {
            var item = registerclass[i];
            if (item && item.id == name && nexacro._isRuntimeProtocol(name) === false)
            {
                return true;
            }
        }
        return false;
    };

    _pEnvironment._getProtocol = function (name)
    {
        if (!this._protocols)
            this._protocols = {};

        let adp = this._protocols[name];
        if (!adp && this._isProtocol(name))
        {
            const construct = nexacro._resolveTypeByPath(null, name);
            if (typeof construct === "function")
            {
                adp = new construct();
                adp.initialize();
                this._protocols[name] = adp;
            }
        }
        return adp;
    };

    _pEnvironment._removeProtocols = function ()
    {
        var item;
        var protocols = this._protocols;
        for (item in protocols)
        {
            if (protocols[item].finalize)
                protocols[item].finalize();
        }

        this._protocols = {};
    };

     //xcssrc::url.xcss -> theme::xcssrc_url.xcss 로 처리 
    //xcssrc 에 executeurl 이 설정된 경우 executeurl는 executeurl/themeid(blue)/xcssrc_url.css, map.js 로 처리
    _pEnvironment._loadStyle = function (url) 
    {
        return new Promise((resolve, reject) =>
        {
            var styleurl = url;
            if (!this._cssurls)
                this._cssurls = [];

            var idx = this._cssurls.indexOf(url);
            if (idx != -1)
                this._cssurls.splice(idx, 1);
            this._cssurls.push(url);
  
            let cssurl = this._getXCSSRCURL(url);
            //cssurl = env._getServiceLocation("theme://" + url, projecturl, null, false);
            // xcss -> (map.js,css)확장자 변환을 밑에서 처리 - version정보는 확장자 뒤에 붙음            
            var cssmapurl = cssurl;
            var pos = cssurl.lastIndexOf('/');
            cssurl = cssurl.substring(0, pos + 1) + nexacro._getCSSFileName(cssurl.substring(pos + 1, cssurl.length - 5));
            
            pos = cssmapurl.lastIndexOf('.');
            cssmapurl = nexacro._getMapFileName(cssmapurl.substring(0, pos));

            // checkversion 처리를 다시
            var checkversion = this.checkversion;
            if (checkversion)
            {
                var svc = this._getServiceObject("theme::");
                cssmapurl += nexacro._getVersionQueryString(cssmapurl, svc._p_version);
                cssurl += nexacro._getVersionQueryString(cssurl, svc._p_version);
            }

  
            var xcssrcservice = this._getServiceObject(styleurl);
            this._load_manager.reloadCssModule(cssmapurl, null, false, xcssrcservice)
                .then(async () => await this._load_manager.reloadCssModule(cssurl, false, false, xcssrcservice, true, 1)
                    .then(() =>
                    {
                        nexacro._refreshCssAll();
                        resolve();
                    })
                )
                .catch(err =>
                {
                    reject(err);
                });
        
        });
    };

    //////////////////////////////////////
    // internal function
    //////////////////////////////////////
    _pEnvironment._getStringRCValue = function (key, defaultvalue)
    {
        var v = this._getStringResourceValue(key);
        if (v == undefined)
        {
            if (defaultvalue)
                v = defaultvalue;
            else
                v = key;
        }
        return v;
    };

    _pEnvironment._getTextTemplateValue = function (v)
    {
        var key = "";
        var alter_str = "";
        if (v && v.indexOf && v.indexOf("TEXT(") > -1)
        {
            var params_str = v.slice(5, -1).trim();

            var key_quote = params_str[0];
            var alter_quote = params_str[params_str.length - 1];
            var pattern = key_quote + "\\s*,\\s*" + alter_quote;
            var regex = new RegExp(pattern, "g");

            var arrParam = params_str.split(regex);
            if (arrParam.length == 2)
            {
                key = arrParam[0] = arrParam[0].trim().slice(1);
                alter_str = arrParam[1] = arrParam[1].slice(0, -1);
            }
            else if (arrParam.length == 1)
            {
                key = arrParam[0] = arrParam[0].trim().slice(1, -1);
            }

            v = this._getStringResourceValue(key);
            if (v == undefined)
            {
                if (alter_str)
                    v = alter_str;
                else
                    v = key;
            }
        }
        return v;
    };

    _pEnvironment._setTypeDefinitionURL = function (url)
    {
        this._typedefinition_url = url;

        // for include , _request_mainurl 은 environment init 에서 
       // this._makeProjectPathinfo("", this._typedefinition_url);
       this._setProjectURL(this._importurl);           //why
       this._typedefinition_url = nexacro._transfullurl(this._project_absolutepath, this._typedefinition_url);
       this._request_mainurl = "";
    };

    _pEnvironment._setProjectURL = function (url)
    {
        var projecturl = nexacro._getProjectBaseURL(url);

        if (nexacro._iOSprojecturl)
        {
            projecturl = nexacro._iOSprojecturl;
        }
        else if (nexacro._AndroidProjecturl)
        {
            projecturl = nexacro._AndroidProjecturl;
        }
        else if (nexacro._macOSprojecturl)
        {
            projecturl = nexacro._macOSprojecturl;
        }

        if (nexacro._OS == "iOS" && nexacro._isHybrid && nexacro._isHybrid())            
        {
            if (projecturl.indexOf('file:///') === 0)
            {
                projecturl = projecturl.replace('file:///', '');
            }
        }

        this._project_absolutepath = projecturl; //nexacro._project_url 는 이전 버전에서 사용했던 변수
        return projecturl;
    };

    _pEnvironment.getProjectPath = function ()
    {
       return this._project_absolutepath;
    };

    _pEnvironment._getRefFormBaseUrl = _pEnvironment.getProjectPath; //nexacro.UrlObject의 target에 사용되는 함수

    _pEnvironment._getServiceLocation = function (url, baseurl, typedefinition_url, checkversion, iskeepfilename)
    {
        if (!url || url.length === 0)
            return "";

        if (!typedefinition_url)
            typedefinition_url = this._typedefinition_url;

        if (!baseurl)
        {
            baseurl = this._project_absolutepath;
        }

        return this._transurl(baseurl, typedefinition_url, url, checkversion, iskeepfilename);
    };
    
    _pEnvironment._getImageLocation = _pEnvironment._getServiceLocation;
    
    _pEnvironment._getSupportedImageUrl = function (url, baseurl)
    {
        const ret = nexacro._getSupportedImageUrl(url);
        if (ret) return ret;

        return this._getServiceLocation(nexacro._getURIValue(url), baseurl);
    };      

    _pEnvironment._getServiceObject = function (url, bDefaultNone)
    {
        var serviceprefix = url.split("::");

        if (serviceprefix.length >= 2)
        {
            var service = this._p_services[serviceprefix[0]]; 
            if (service)
            {
                return service;
            }
        }

        if (!this._defaultservice)
        {
            this._defaultservice = new nexacro._ServiceItem();
            this._defaultservice._env = this;
        }

        if (url.toLowerCase().indexOf("file://") >= 0 || bDefaultNone || nexacro._viewtoollog)
            this._defaultservice._p_cachelevel = "none";
        else
            this._defaultservice._p_cachelevel = "session";

        return this._defaultservice;
    };

    _pEnvironment._getFDLLocation = function (fdlurl, baseurl)
    {
        if (!fdlurl || fdlurl.length <= 0) return fdlurl;

        var url = this._getServiceLocation(fdlurl, baseurl);
        if (url.length > 5)
        {
            if (url.substring(url.length - 5) == ".xfdl")
            {
                url = url + ".js";
            }
        }

        return url;
    };

    _pEnvironment._transurl = function (baseurl, typedefintionurl, url, checkversion, iskeepfilename)
    {
        var exturl = url;
        if (checkversion !== false)
            checkversion = true;        
        checkversion = this._p_checkversion && checkversion;

        //theme://
        var bLocalCacheType, local_url, strA, suburl;
        if (exturl.indexOf("theme://") >= 0)
        { // _localthemecaches
            bLocalCacheType = false;
            if (this._hasLocalCacheUrl(url))
            {
                local_url = this._getLocalCacheUrl(url);
                if (local_url) return local_url;

                bLocalCacheType = true;
            }

            strA = exturl.split("://");            
            suburl = strA[1];

            var realpath = [];
            var separator = "/";
            var theme_uri = this._getThemeURL();
            realpath.push(theme_uri);

            if (theme_uri.charAt(theme_uri.length - 1) == "/")
                separator = "";
            
            realpath.push(suburl);
            exturl = realpath.join(separator).replace(/\\/g, "/");
            if (nexacro._isAbsolutePath(exturl) !== true)
            {
                if (bLocalCacheType)
                {
                    exturl = nexacro._transfullurl(this._localcache_path, exturl);
                }
                else
                {
                    exturl = nexacro._transfullurl(this._project_absolutepath, exturl);
                }
            }

            if (checkversion)
            {
                let service = this._p_services["theme"];                
                exturl += nexacro._getVersionQueryString(exturl, service._p_version);
            }

            if (bLocalCacheType)
            {
                this._addLocalCacheUrl(url, exturl);
            }
        }
        else
        {
            bLocalCacheType = false;
            if (this._hasLocalCacheUrl(url))
            {
                local_url = this._getLocalCacheUrl(url);
                if (local_url) return local_url;

                bLocalCacheType = true;
            }

            if (exturl.indexOf("::") < 0)
            {
                if (bLocalCacheType)
                {
                    baseurl = this._localcache_path;
                    exturl = nexacro._transfullurl(baseurl, exturl, this._p_checkversion, this._p_version);
                }
                else if (nexacro._isAbsolutePath(exturl) !== true)
                {
                    exturl = exturl.replace(/\\/g, "/");
                    exturl = nexacro._transfullurl(baseurl, exturl, this._p_checkversion, this._p_version);
                }
            }
            else
            {
                //service
                strA = exturl.split("::");
                suburl = strA[1];

                var prefix = strA[0];
                var service = this._p_services[prefix];
                if (service != null)
                {
                    //var serviceurl = service.url;
                    var serviceurl = service._getURL();
                    if (serviceurl.charAt(serviceurl.length - 1) != "/")
                        serviceurl = serviceurl + "/";
                    if (suburl.charAt(0) == "/")
                        suburl = suburl.substring(1);

                    suburl = suburl.replace(/\\/g, "/");

                    if (nexacro._isAbsolutePath(serviceurl) === true)
                    {
                        exturl = nexacro._transfullurl(serviceurl, suburl);
                    }
                    else
                    {
                        var basepath;
                        if (bLocalCacheType)
                        {
                            basepath = nexacro._transfullurl(this._localcache_path, serviceurl);
                        }
                        else
                        {
                            basepath = nexacro._transfullurl(typedefintionurl, serviceurl);
                        }
                        exturl = nexacro._transfullurl(basepath, suburl);
                    }
                }
                else
                {
                    exturl = exturl.replace(/\\/g, "/");
                }

                if (exturl.match(/\.xfdl$|\.xjs$/) && !iskeepfilename)
                    exturl += ".js";

                if (checkversion)
                {
                    var svc = this._getServiceObject(url);
                    exturl += nexacro._getVersionQueryString(url, svc._p_version);
                }
            }

            if (bLocalCacheType)
            {
                this._addLocalCacheUrl(url, exturl);
            }
        }

        return exturl;
    };

    _pEnvironment._getLoadingImageUrl = function ()
    {       
        if (this._p_loadingimage)
        {
            return this._p_loadingimage;
        }
        return nexacro._transfullurl(this._resource_path, nexacro._default_loadingimage, this._p_checkversion, this._p_version);
    };


    _pEnvironment._addLocalCacheUrl = function (url, localurl)
    {
        if (url.indexOf("initvalue::") == 0)
        {
            if (url.length > 5)
            {
                var ext = url.substring(url.length - 4);
                if (ext == ".xml" || ext == ".xiv")
                    url = url + ".js";
            }
        }

        if (localurl) localurl = localurl.replace(/\\/g, "/");
        if (!this._localcaches)
            this._localcaches = {};
        this._localcaches[url] = localurl;
    };


    _pEnvironment._hasLocalCacheUrl = function (url)
    {
        if (!this._localcaches)
            return false;

        return (url in this._localcaches);
    };

    _pEnvironment._getLocalCacheUrl = function (url)
    {
        return this._localcaches[url];
    };

    _pEnvironment._getRegisterClass = function (objid)
    {
        var registerclass = this._registerclass;
        if (!registerclass) return;
        
        var len = registerclass.length;
        for (var i = 0; i < len; i++)
        {
            var item = registerclass[i];
            if (item && objid == item.id)
            {
                return item.classname;
            }
        }        
    };

    _pEnvironment._getRegisterClassWidth = function (objid)
    {
        var registerclass = this._registerclass;
        var len = registerclass.length;
        for (var i = 0; i < len; i++)
        {
            var item = registerclass[i];
            if (item && objid == item.id)
            {
                return item.width;
            }
        }
    };

    _pEnvironment._getRegisterClassHeight = function (objid)
    {
        var registerclass = this._registerclass;
        var len = registerclass.length;
        for (var i = 0; i < len; i++)
        {
            var item = registerclass[i];
            if (item && objid == item.id)
            {
                return item.height;
            }
        }
    };

    _pEnvironment._getRegisterClassConstruct = function (objid)
    {
        const registerclass = this._registerclass;
        if (!registerclass) 
        {
            return null;
        }
        
        for (const item of registerclass)
        {
            if (item.id === objid)
            {
                return item.construct;
            }
        }
        return null;
    };

    _pEnvironment._getSSVUnitSeparator = function ()
    {        
        var str = nexacro.fromCharCode(this._p_ssvunitseparator ? this._p_ssvunitseparator : 0x1f);
        str = str.substr(0, 5);
        return str;
    };

    _pEnvironment._getSSVRecordSeparator = function ()
    {
        var str = nexacro.fromCharCode(this._p_ssvrecordseparator ? this._p_ssvrecordseparator : 0x1e);
        str = str.substring(0, 5);
        return str;
    };

    //type = 1 : UrlObject, 2 : BackgroundObject, 3 : EdgeImageObject
    _pEnvironment._getCacheCSSObject = function (type, val)
    {
        if (!this._cssobject_caches[type])
            return null;
        return this._cssobject_caches[type][val];
    };

    _pEnvironment._setCacheCSSObject = function (type, val, obj)
    {
        if (!this._cssobject_caches[type]) 
            this._cssobject_caches[type] = {};
        this._cssobject_caches[type][val] = obj;
    };

    _pEnvironment._getLayoutManager = function ()
    {
        return this._layout_manager;
    };


    // -------------------------------------------------
    // Environment-scoped helpers (moved from nexacro.*)
    // NOTE: legacy environment.xml.js that calls nexacro._addService/_addExternal/_addClasses
    // will break by design per project requirement.
    _pEnvironment._addService = function (prefixid, type, url, cachelevel, codepage, language, version, communication)
    {
        var service = new nexacro._ServiceItem(prefixid, type, url, cachelevel, codepage, language, version, communication, this);
        if (this._p_services)
            this._p_services.add(prefixid, service);
    };


    _pEnvironment._removeService = function (prefixid)
    {        
        if (this._p_services)
        {
            var service = this._p_services[prefixid];
            if (service)
            {
                this._p_services.delete_item(prefixid);
            }
        }
    };

    _pEnvironment._addExternal = function (externalid, url, type, loadtype, crossorigin, integrity, template_src)
    {
        const external = new nexacro._ExternalItem(externalid, url, type, loadtype, crossorigin, integrity, template_src);
        if (type == "template")
        {
            if (this._p_templates) this._p_templates.add(externalid, external);
        }
        else
        {
            if (this._p_externals) this._p_externals.add(externalid, external);
        }
    };

    _pEnvironment._removeExternal = function (externalid, type)
    {
        if (type == "template")
        {
            if (this._p_templates)
            {
                const external = this._p_templates[externalid];
                if (external)
                {
                    this._p_templates.delete_item(externalid);
                }
            }
        }
        else
        {
            if (this._p_externals)
            {
                const external = this._p_externals[externalid];
                if (external)
                {
                    this._p_externals.delete_item(externalid);
                }
            }
        }
    };

    _pEnvironment._addClasses = function (registerclass)
    {
        let appendItems = [];

        // Application 설정 우선
        if (Array.isArray(registerclass) && registerclass.length > 0)
        {
            appendItems = registerclass;
        }

        // Environment load 이전에 저장된 정보를 포함
        if (nexacro._registerclass?.length > 0)
        {
            appendItems = appendItems.concat(nexacro._registerclass);
            delete nexacro._registerclass;
        }
        
        if (appendItems.length > 0)
        {
            const curItems = this._registerclass;
            if (curItems?.length > 0)
            {
                const registeredNames = new Set(curItems.map(item => item.id));
                const filtered = appendItems.filter(item => !registeredNames.has(item.id));

                if (filtered)
                {
                    this._registerclass = [...curItems, ...filtered];
                }
            }
            else
            {
                this._registerclass = appendItems;
            }            
        }

        this._updateClassInfo();
    };

    _pEnvironment._updateClassInfo = function ()
    {
        const registry = this._registerclass;
        for (const item of registry)
        {
            if (!item?.construct)
            {
                const construct = nexacro._resolveTypeByPath(null, item.classname);
                if (typeof construct === "function")
                {
                    item.construct = construct;

                    if (nexacro.isglobalmodule && _global_context)
                    {
                        _global_context[item.id] = item.construct;
                    }
                }
            }
        }
    };
    
    _pEnvironment._initLocalStorage = function (uniquestoragevalue = null)
    {
        this._localstorage_manager.initLocalStorage(uniquestoragevalue);
    };

    _pEnvironment._getUniqueLocalStorageValue = function ()
    {
        return this._localstorage_manager.getUniqueStorageValue();
    };

    _pEnvironment._getCookieVariables = function (type)
    {
        return this._localstorage_manager.getVariableAll(type);
    };

    _pEnvironment._hasEnvironmentVariable = function (name)
    {
        return this._localstorage_manager.hasVariable(name, 3);
    };
    
    _pEnvironment._addCookieFromCookieVariables = function ()
    {
        //Env 에 있는 cookie variable 을 가져온다..        
        var envcookies = this._getCookieVariables(4);
        var prop;
        if (envcookies)
        {
            for (prop in envcookies)
            {
                nexacro._setCookie(prop, envcookies[prop].value, null, false);
            }
        }

        var envsecurecookies = this._getCookieVariables(6);
        if (envsecurecookies)
        {
            for (prop in envsecurecookies)
            {
                nexacro._setCookie(prop, envsecurecookies[prop].value, null, true);
            }
        }
    };

    _pEnvironment._addCookieToCookieVariable = function (cookieStr)
    {
        // addcookie to cookievariable
        //for cookie
        if (cookieStr)
        {
            var cookielist = cookieStr.split("; ");
            var cookievarCnt = cookielist.length;
            var sep_pos;
            var cookieid, cookievalue;
            for (var i = 0; i < cookievarCnt; i++)
            {
                sep_pos = cookielist[i].indexOf("=");
                if (sep_pos <= 0)
                {
                    cookieid = cookielist[i];
                }
                else
                {
                    cookieid = cookielist[i].substr(0, sep_pos);
                    cookievalue = cookielist[i].substr(sep_pos + 1);
                }
                
                if (this._p_addcookietovariable)
                {
                    this._setOnlyCookieVariable(cookieid, cookievalue, false);  // 변수로만 생성, cookie 값은 갱신하지 않는다.
                }
            }
        }
    };

    // 변수로만 생성, cookie 값은 갱신하지 않는다.
    _pEnvironment._setOnlyCookieVariable = function (name, value, bsecure/*,expires*/)
    {
        if (name)
        {
            bsecure = nexacro._toBoolean(bsecure);
            var type = bsecure ? 6 : 4;
            var remove_type = bsecure ? 4 : 6;

            if (this._localstorage_manager.getVariable(name, remove_type))
                this._localstorage_manager.removeVariable(name, remove_type);

            //변수가 없으면 추가하고 설정
            this._localstorage_manager.setVariable(name, value, type);
        }
    };

    _pEnvironment._hasCookieVariables = function ()
    {
        return (this._getCookieVariables(4) || this._getCookieVariables(6)) ? true : false;
    };

    _pEnvironment._getSharedVariable = function (name)
    {
       return this._localstorage_manager.getVariable(name, 2);
    };

    _pEnvironment._setSharedVariable = function (name, value)
    {        
       this._localstorage_manager.setVariable(name, value, 2);
    };

    _pEnvironment._getHttpVariableAll = function ()
    {
       return this._localstorage_manager.getVariableAll(5);
    };

    _pEnvironment._getCurrentScreenID = function ()
    {        
        return this._curscreenid;
    };

    //  추후 삭제할 예정이었으나 
    // 제너레이션 N24에서 xcss extenstion filename 에 사용함 
    _pEnvironment._getCurrentScreenType = function ()
    {
        return this._curscreentype;
    };   

    const updateCSSMapObject = (target, source) =>
    {        
        const safeSetProperty = (target, key, value) =>
        {
            const desc = Object.getOwnPropertyDescriptor(target, key);
            if (desc && typeof desc.get === 'function' && !desc.set)
            {
                if (desc.configurable)
                    Object.defineProperty(target, key, { value, writable: true, enumerable: true, configurable: true });
            }
            else
            {
                target[key] = value;
            }
        };

        for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(source)))
        {
            if (typeof descriptor.get === 'function')
            {
                Object.defineProperty(target, key, descriptor);
                continue;
            }

            const sourceValue = descriptor.value;

            if (Array.isArray(sourceValue))
            {
                if (!Array.isArray(target[key])) 
                    safeSetProperty(target, key, []);
                
                const targetArray = target[key];

                sourceValue.forEach(sourceItem =>
                {
                    const sourceKey = Object.keys(sourceItem)[0];
                    const targetItem = targetArray.find(item => Object.keys(item)[0] === sourceKey);
                    if (targetItem)
                    {
                        updateCSSMapObject(targetItem, sourceItem);
                    }
                    else
                    {
                        targetArray.push(sourceItem);
                    }
                });
            }
            else if (typeof sourceValue === 'object' && sourceValue !== null)
            {
                if (typeof sourceValue.value === 'string' && typeof sourceValue.valueOf === 'function' && typeof sourceValue.toString === 'function')
                {
                    safeSetProperty(target, key, sourceValue);
                }
                else
                {
                    if (typeof target[key] !== 'object' || target[key] === null || Array.isArray(target[key]))
                    {
                        safeSetProperty(target, key, {});
                    }
                    updateCSSMapObject(target[key], sourceValue);
                }
            }
            else
            {
                safeSetProperty(target, key, sourceValue);
            }
        }
    };

    _pEnvironment._setCSSPredefineMaps = function (map)
    {
        if (!this._css_predefine_maps)
        {
            this._css_predefine_maps = map;
        }
        else
        {
            updateCSSMapObject(this._css_predefine_maps, map);
        }

        // map 설정 후 root CSS Variables 갱신 (wordwrap, edge 등 특수 변환 대상이 있을 수 있으므로)
        this._refreshAllRootCSSVariables();
    };

    _pEnvironment._updateImageCacheMaps = function (arr)
    {
        if (!arr) return;

        const imgcache = nexacro._getImageCacheMaps();
        var pthis = this;
        arr.forEach(function (item)
        {
            const path = pthis._getImageLocation(item[0]);
            const width = item[1];
            const height = item[2];

            imgcache[path] = { width: width, height: height };
        });
    };

    _pEnvironment._getCSSMaps = function ()
    {
        this._dimension_maps = {};
        return this._dimension_maps;
    };

    _pEnvironment._setCSSPredefineGroupAutoSelectInfo = function (obj)
    {
        if (!obj)
            return;

        if (!this._css_group_autoselect_info)
            this._css_group_autoselect_info = obj;
        else
            Object.assign(this._css_group_autoselect_info, obj);
    };

    _pEnvironment._setCSSPredefineSpecialConvInfo = function (id, type, value)
    {
        if (value === undefined)
            return;

        if (type != "wordwrap" && type != "edge") // 특수 변환 대상인 wordwrap, edge 이외의 타입은 처리하지 않음
            return;

        let rafScheduled = false;

        if (!this._css_predefine_special_convert_map)
            this._css_predefine_special_convert_map = new Map();

        const convert_map = this._css_predefine_special_convert_map;
        const convertInfo = convert_map.get(id);
        if (!convertInfo)
        {
            convert_map.set(id, { type });

            if (!rafScheduled)
            {
                rafScheduled = true;
                requestAnimationFrame(() =>
                {
                    document.querySelectorAll(`.${this.appkey}`)
                        .forEach(rootNode =>
                        {
                            nexacro._updateRootCSSVariable(rootNode.style, id, type, value);
                        });
                    rafScheduled = false;
                });
            }
        }
    };
   

    _pEnvironment._refreshAllRootCSSVariables = function ()
    {        
        const convert_map = this._css_predefine_special_convert_map;
        if (!convert_map)
            return;

        document.querySelectorAll(`.${this.appkey}`).forEach(rootNode =>
        {
            for (const id of convert_map.keys())
            {
                const convertInfo = convert_map.get(id);
                if (convertInfo)
                {
                    const value = this._getCSSPredefineValue(id);
                    if (value)
                    {
                        nexacro._updateRootCSSVariable(rootNode.style, id, convertInfo.type, value);
                    }
                }
            };
        });
    };

    _pEnvironment._getCSSPredefineValue = function (id, type)
    {
        let value = undefined;

        const css_predefine_map = this._css_predefine_maps;
        if (!css_predefine_map)
            return value;

        const rootcssclasslist = nexacro._getRootCSSClass(this, this._application);
        const reverse_keys = Object.keys(css_predefine_map).reverse();
        for (const key of reverse_keys)
        {
            if (rootcssclasslist.includes(key) && Object.prototype.hasOwnProperty.call(css_predefine_map[key], id))
            {
                value = css_predefine_map[key][id];
                break;
            }
        }

        if (!value)
            value = css_predefine_map["root"]?.[id];

        this._setCSSPredefineSpecialConvInfo(id, type, value);

        return value;
    };

    //for map.js 에서 screen 별 값 통합
    _pEnvironment._getScreenCSSMapValue = function (styleobject, commonvalue, smallvalue, mediumvalue, largevalue, desktopvalue)
    {
        let screentype = this._curscreentype;
        let screenvalue;
        switch (screentype)    
        {
            case "mobile_small": screenvalue = smallvalue; break;
            case "mobile_medium": screenvalue = mediumvalue; break;
            case "mobile_large": screenvalue = largevalue; break;
            case "desktop": screenvalue = desktopvalue; break;
            default: break;
        }

        if (!screenvalue)
            screenvalue = commonvalue;

        if (screenvalue)
            return styleobject(screenvalue, this);
        return null;
    };

    _pEnvironment._setCSSMaps = function (map, extra)
    {
        if (!this._dimension_maps)
        {
            this._dimension_maps = map;
            this._include_status_map = false;
        }
        else
        {
            updateCSSMapObject(this._dimension_maps, map);
        }

        if (extra)
        {
            this._include_status_map = extra.includeStatusMap;
            if (extra.hasListViewExpandStatus !== undefined)
               this._has_listview_expand_status = extra.hasListViewExpandStatus;
            this._apply_markup_validation = extra.applyMarkupValidation;
        }

        if (this._apply_markup_validation)
        {
            nexacro._CSS_STATUS = "data-status";
            nexacro._CSS_USERSTATUS = "data-userstatus";
        }
        else
        {
            nexacro._CSS_STATUS = "status";
            nexacro._CSS_USERSTATUS = "userstatus";
        }
    };

    _pEnvironment._clearCSSMaps = function ()
    {
        this._dimension_maps = null;
    };


    _pEnvironment._getEnvironment = function ()
    {
        return this;
    };

    _pEnvironment._getApplication = function ()
    {
        return this._application;
    };

    _pEnvironment._open = function (id, formurl, parent_frame, arr_arg, openstyles, left, top, width, height, opener, ext_openstyles, returntype)
    {
        var _returntype = (typeof returntype === "string") ? returntype.toLowerCase() : returntype;
        var _ext_openstyles = (typeof ext_openstyles === "string") ? ext_openstyles.toLowerCase() : ext_openstyles;
        var isPromise = _returntype === "promise" ? true : false;
        var parentframe = parent_frame;

        nexacro._cleanupPopupFrame(id, parentframe);

        if (parentframe && parentframe[id])
        {
            throw nexacro.MakeNativeError(this, "native_exist_id", id);
        }

        //popupframe에 있는지 먼저 체크 
        if (nexacro._isPopupFrame(id, parentframe))
        {
            throw nexacro.MakeNativeError(this, "native_exist_id", id);
        }

        if (parent_frame)
        {
            if (!parent_frame._is_frame && !parent_frame._is_main)
            {
                throw nexacro.MakeTypeError(this, "type_mismatch", parent_frame);
            }
        }


        var parent_window = parentframe ? parentframe._getWindow() : null;//this.getMainObject()._getWindow(); // this 는 proxy
        var resizable = false;
        var layered = false;
        var showontaskbar = false;
        var openstatus = "normal";
        var showstatusbar = true;
        var topmost = null;     // Runtime 전용 option
        var noactivate = null;  // Runtime 전용 option

        var ext_options = "";   // Runtime 전용 options
        if (!parent_window)
            showontaskbar = true;

        var i;
        if (openstyles)
        {
            var openstyle = openstyles.split(" ");
            for (i = 0; i < openstyle.length; i++)
            {
                var style = openstyle[i].split("=");
                if (style[0] == "resizable")
                    resizable = nexacro._toBoolean(style[1]);
                if (style[0] == "layered")
                    layered = nexacro._toBoolean(style[1]);
                if (style[0] == "showontaskbar")
                    showontaskbar = nexacro._toBoolean(style[1]);
                if (style[0] == "openstatus")
                    openstatus = style[1];
                if (style[0] == "showstatusbar")
                    showstatusbar = nexacro._toBoolean(style[1]);
                if (style[0] == "topmost")
                    topmost = nexacro._toBoolean(style[1]);
            }
        }

        if (_ext_openstyles && _ext_openstyles !== "promise")
        {
            var btoolbar = false,
                bmenubar = false,
                blocation = false;

            var ext_opt = _ext_openstyles.split(" ");
            for (i = 0; i < ext_opt.length; i++)
            {
                var opt = ext_opt[i].split("=");
                if (opt[0] == "toolbar")
                    btoolbar = nexacro._toBoolean(opt[1]);
                else if (opt[0] == "menubar")
                    bmenubar = nexacro._toBoolean(opt[1]);
                else if (opt[0] == "location")
                    blocation = nexacro._toBoolean(opt[1]);
                else if (opt[0] == "noactivate")
                    noactivate = nexacro._toBoolean(opt[1]);
            }
            ext_options += "toolbar=" + (btoolbar ? "yes" : "no");
            ext_options += ",menubar=" + (bmenubar ? "yes" : "no");
            ext_options += ",location=" + (blocation ? "yes" : "no");
        }
        else
        {
            if (_ext_openstyles == "promise")
                isPromise = true;

            ext_options += "toolbar=no,menubar=no,location=no";
        }
        ext_options += showstatusbar ? ",status=yes" : ",status=no";

        if (openstatus)
        {
            openstatus = openstatus.toLowerCase();
            if (openstatus == "maximize")
                ext_options += ",fullscreen=yes";
        }

        // runtime 전용 추가
        ext_options += topmost ? ",topmost=true" : ",topmost=false";
        ext_options += noactivate ? ",noactivate=true" : ",noactivate=false";

        var frameopener = opener;
        if (typeof opener === "string" && opener.toLowerCase() == "promise")
        {
            isPromise = true;
            frameopener = parentframe?._is_form ? parentframe : (parentframe ? parentframe._p_form : null);
        }
        else if (opener === null || opener == undefined)
        {
            if (parentframe?._is_form)
            {
                frameopener = parentframe
            }
            else
                frameopener = parentframe ? parentframe._p_form : null;
        }

        //if (!nexacro._popupframeoption)
        //    nexacro._popupframeoption = {};

        if (width == undefined || width < 0)
            width = 0;
        else if (typeof width === "string" && width.toLowerCase() == "promise")
            isPromise = true;

        if (height == undefined || height < 0)
            height = 0;
        else if (typeof height === "string" && height.toLowerCase() == "promise")
            isPromise = true;

        const env = frameopener?._getEnvironment() || parentframe?._getEnvironment() || nexacro.getEnvironment() || this;
        if (isPromise)
        {
            return new Promise((resolve, reject) =>
            {
                try
                {
                    var close_callback = function (name, returnvalue)
                    {
                        resolve(returnvalue);
                    };

                    let handle = nexacro._createOpenWindowHandle(parent_window, id, formurl, left, top, width, height, resizable, layered, showontaskbar, false, parentframe, frameopener, arr_arg, ext_options, undefined, close_callback, env);
                    if (!handle)
                        reject(new Error("failed to open popup window"));
                }
                catch (err)
                {
                    reject(err);
                }
            });
        }
        var handle = nexacro._createOpenWindowHandle(parent_window, id, formurl, left, top, width, height, resizable, layered, showontaskbar, false, parentframe, frameopener, arr_arg, ext_options, undefined, undefined, env);
        if (handle)
            return true;
        return false;
    };

 /**
 * @param {(  string  |  [  string  ,  string|null  ,  string|unll  ]  |  {url: string, crossorigin?: string|undefined, integrity?: string|undefined})}  args
 */
    _pEnvironment.loadExternalJS = async function (args)
    {
        const promise = new Promise((resolve, reject) =>
        {
            (async () => 
            {
                let externalid, url, crossorigin, integrity = undefined;
                let type = "js";
                let loadtype = "preload";
                let module = undefined;
                if (typeof args === "string") 
                {
                    externalid = args;
                }
                else
                {
                    if (Array.isArray(args)) 
                    {
                        url = args[0];
                        crossorigin = args[1] || undefined;
                        integrity = args[2] || undefined;
                    }
                    else if (typeof args === "object" && args !== null) 
                    {
                        url = args.url;
                        crossorigin = args?.crossorigin;
                        integrity = args?.integrity;

                    }
                }

                if (externalid)
                {                    
                    const external = this._p_externals[externalid];
                    if (external && external.type == type)
                    {
                        if (external.hasValue())
                        {
                            module = external.value;
                        }
                        else
                        {
                            let ret = await nexacro._loadExtJs(external);
                            module = (ret !== external.value) ? ret : external.value;
                        }
                    }
                }
                else
                {
                    if (url && !nexacro.__checkNodeDuplication(type, url))
                    {
                        const external = new nexacro._ExternalItem("#dynamic", url, type, loadtype, crossorigin, integrity, /*template_src = */undefined);
                        let ret = await nexacro._loadExtJs(external);
                        module = (ret !== external.value) ? ret : external.value;
                    }
                }

                resolve(module);
            })();
        });

        let ret = await promise;
        return ret;

    };

    /**
     * @param {(  string  |  [  string  ,  string|null  ,  string|unll  ]  |  {url: string, crossorigin?: string|undefined, integrity?: string|undefined})}  args
     */
    _pEnvironment.loadExternalModule = async function (args)
    {
        const promise = new Promise((resolve, reject) =>
        {
            (async () => 
            {
                let externalid, url, crossorigin, integrity = undefined;
                let type = "module";
                let loadtype = "preload";
                let module = undefined;
                if (typeof args === "string") 
                {
                    externalid = args;
                }
                else
                {
                    if (Array.isArray(args)) 
                    {
                        url = args[0];
                        crossorigin = args[1] || undefined;
                        integrity = args[2] || undefined;
                    }
                    else if (typeof args === "object" && args !== null) 
                    {
                        url = args.url;
                        crossorigin = args?.crossorigin;
                        integrity = args?.integrity;

                    }
                }

                if (externalid)
                {                    
                    const external = this._p_externals[externalid];
                    if (external && external.type == type)
                    {
                        if (external.hasValue())
                        {
                            module = external.value;
                        }
                        else
                        {
                            let ret = await nexacro._loadExtModule(external);
                            module = (ret !== external.value) ? ret : external.value;
                        }
                    }
                }
                else
                {
                    if (url && !nexacro.__checkNodeDuplication(type, url))
                    {
                        const external = new nexacro._ExternalItem("dynamic", url, type, loadtype, crossorigin, integrity, /*template_src = */undefined);
                        let ret = await nexacro._loadExtModule(external);
                        module = (ret !== external.value) ? ret : external.value;
                    }
                }

                resolve(module);
            })();
        });

        let ret = await promise;
        return ret;
    };


    /**
     * @param {(  string  |  [  string  ,  string|null  ,  string|unll  ]  |  {url: string, crossorigin?: string|undefined, integrity?: string|undefined})}  args
     */

    _pEnvironment.loadExternalStyle = async function (args)
    {
        const promise = new Promise((resolve, reject) =>
        {
            (async () => 
            {
                let externalid, url, crossorigin, integrity = undefined;
                let type = "style";
                let loadtype = "preload";
                let module = false;
                if (typeof args === "string") 
                {
                    externalid = args;
                }
                else
                {
                    if (Array.isArray(args)) 
                    {
                        url = args[0];
                        crossorigin = args[1] || undefined;
                        integrity = args[2] || undefined;
                    }
                    else if (typeof args === "object" && args !== null) 
                    {
                        url = args.url;
                        crossorigin = args?.crossorigin;
                        integrity = args?.integrity;

                    }
                }

                if (externalid)
                {                    
                    const external = this._p_externals[externalid];
                    if (external && external.type == type)
                    {
                        // 
                        if (external.hasValue())
                        {
                            module = true;
                        }
                        else
                        {
                            await nexacro._loadExtCss(external);
                            if (external.hasValue())
                            {
                                module = true;
                            }
                        }
                    }
                }
                else
                {
                    if (url && nexacro.__checkNodeDuplication(type, url))
                    {
                        module = true;
                    }
                    else
                    {
                        const external = new nexacro._ExternalItem("#dynamic", url, type, loadtype, crossorigin, integrity, /*template_src = */undefined);
                        await nexacro._loadExtCss(external);
                        if (external.hasValue())
                        {
                            module = true;
                        }
                    }
                }

                resolve(module);
            })();
        });

        let ret = await promise;
        return ret;
    };

    /**
     * @param {(  string  )}  args
     */

    _pEnvironment.loadHTMLTemplate = function (args)
    {
        const externalid = args;
        if (externalid)
        {            
            const external = this._p_templates[externalid];
            if (external)
            {
                return external.template_src;
            }
            else // bypass
            {
                return externalid;
            }
        }
    };

    _pEnvironment._properties = [
        { name: "accessibilitybackwardkey" }, { name: "accessibilitycomponentnexthotkey" }, { name: "accessibilitycomponentprevhotkey" },
        { name: "accessibilitydescreadtype" }, { name: "accessibilityfirstovermessage" }, { name: "accessibilityforwardkey" },
        { name: "accessibilityheadingnexthotkey" }, { name: "accessibilityheadingprevhotkey" }, { name: "accessibilityhistorycount" },
        { name: "accessibilitylastovermessage" }, { name: "accessibilityreplayhotkey" }, { name: "accessibilitytype" },
        { name: "accessibilitywholereadhotkey" }, { name: "accessibilitywholereadtype" }, { name: "addcokietovariable" },
        { name: "checkversion" }, { name: "codepage" }, { name: "datasetloadtype" }, { name: "datasetsaveinfinity" },
        { name: "datasetsaveinvaliddate" }, { name: "datasetsavenan" }, { name: "datatyperule" }, { name: "enablecache" },
        { name: "enableclipboard" }, { name: "enablecookie" }, { name: "enableevent" }, { name: "enableinspector" }, { name: "enablescreencapture" },
        { name: "enabletouchevent" }, { name: "enableaccessibility" }, { name: "filesecurelevel" }, { name: "highcontrastthemeid" },
        { name: "httpretry" }, { name: "httptimeout" }, { name: "icon" }, { name: "imepastemode" }, { name: "initvaluefield" },
        { name: "key" }, { name: "language" }, { name: "layoutsecttype" }, { name: "loadingimage" }, { name: "locale" },
        { name: "loglevel" }, { name: "mouseovertime" }, { name: "mousewheeltype" }, { name: "multivalueseparator" },
        { name: "networksecurelevel" }, { name: "popuptype" }, { name: "proxyretry" }, { name: "proxytimeout" }, { name: "rtl" },
        { name: "scrollbarsize" }, { name: "scrollbartype" }, { name: "scrollindicatorsize" }, { name: "services", readonly: true },
        { name: "externals", readonly: true }, { name: "ssvrecordseparator" }, { name: "ssvunitseparator" },
        { name: "stringresourceserviceurl" }, { name: "tabkeycirculation" }, { name: "themeid" }, { name: "traceduration" },
        { name: "tracemode" }, { name: "usecontextmenu" }, { name: "usehttpkeepalive" }, { name: "useproxykeepalive" },
        { name: "userfontid" }, { name: "userhotkey" }, { name: "usestringresource" }, { name: "usewaitcursor" },
        { name: "version" }, { name: "xadl" }, { name: "usesoftkeyboard" }, { name: "enabletouchsoftkeyboard" },
        { name: "licenseurl" }, { name: "preventbrowserbackbutton" }, { name: "browserreloadkey" }, { name: "usesanitizer" },
        { name: "allowtags" }, { name: "blocktags" }, { name: "allowattributes" }, { name: "blockattributes" },
        { name: "webviewallowedsandbox" }, { name: "webviewusesandbox" }, { name: "scrollpropagation" }, { name: "appkey" }, { name: "datasetnullsorttype" }
    ];
    nexacro._defineProperties(_pEnvironment, _pEnvironment._properties);

    nexacro._sanitize = function (contents) { return contents; };

    nexacro.registerEnvironment = function (id, env)
    {
        if (!id || !env) return;
        nexacro._environments[id] = env;
        env._registry_id = id;
        // First registered environment becomes the default (backwards compatibility)
        if (!nexacro._environment)
            nexacro._environment = env;
    };
 
    nexacro.getEnvironmentVariable = function (name)
    {
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                return env._getEnvironmentVariable(name);           
        }           
    };   
 
    nexacro.setEnvironmentVariable = function (name, value)
    {
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                env._setEnvironmentVariable(name, value);
        }   
    };

    nexacro.removeEnvironmentVariable = function (name)
    {
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                env._removeEnvironmentVariable(name);
        }               
    };

    nexacro.getHTTPHeaderVariable = function (name)
    {        
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                return env._getHTTPHeaderVariable(name);
        }          
    };

    nexacro.setHTTPHeaderVariable = function (name, value)
    {
        /* setHTTPHeaderVariable은 name, value 모두 필수 매개변수 */
        if (name && value)
        {
            const env = nexacro.getEnvironment();
            if (env)
                env._setHTTPHeaderVariable(name, value);
        }
    };

    nexacro.removeHTTPHeaderVariable = function (name)
    {
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                env._removeHTTPHeaderVariable(name);
        }
    };
    
    nexacro.getCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                return env._getCookieVariable(name, bsecure);
        }            
    };

    nexacro.setCookieVariable = function (name, value, bsecure/*,expires*/)
    {
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
                return env._setCookieVariable(name, value, bsecure);
        }            
    };   

    nexacro.removeCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
            {
                return env._removeCookieVariable(name, bsecure);
            }
        }     
    };

    nexacro.isExistCookieVariable = function (name, bsecure)
    {
        // bsecure : undefined/false/true (all/non-secure/secure)
        if (name)
        {
            const env = nexacro.getEnvironment();
            if (env)
            {
                return env._isExistCookieVariable(name, bsecure);
            }
        }     
    };

    nexacro.getEnvironment = function ()
    {
        if (nexacro.isglobalmodule)
            return nexacro._environment;
        else        
            return nexacro._peekCurrentEnvironment();
    };
    
    nexacro.getApplication = function ()
    {
        if (!nexacro.isglobalmodule)
        {
            return nexacro.__MFEAPI._getApplication();
        }
        else
        {
            var env = nexacro.getEnvironment();
            return env._getApplication();

            if (nexacro._application) return nexacro._application;
            if (_global_context._application) return _global_context._application; // global context에 붙이는 행위는 추후금지
        }
    };

    nexacro.setProtocolVar = function (name, key, val)
    {
        nexacro._setProtocolVar(name, key, val, this);
    };
    
    nexacro.loadStyle = function (url) 
    {
        var env = nexacro.getEnvironment();
        if (env)
        {
            return env._loadStyle(url);
        }
    };

    nexacro.setPrivateProfile = function (key, varValue, common_flag)
    {
        var env = nexacro.getEnvironment();
        if (env)
        {
            return env._setPrivateProfile(key, varValue, common_flag);
        }
    };
   
    nexacro.getPrivateProfile = function (key, common_flag)
    {
        var env = nexacro.getEnvironment();
        if (env)
        {
            return env._getPrivateProfile(key, common_flag);
        }
    };

    nexacro.removePrivateProfile = function (key)
    {
        var env = nexacro.getEnvironment();
        if (env)
        {
            return env._removePrivateProfile(key);
        }
    };

    nexacro.open = function (id, formurl, parent_frame, arr_arg, openstyles, left, top, width, height, opener, ext_openstyles, returntype)
    {
        let env = nexacro.getEnvironment();
        if (!env)
        {
            const base = parent_frame || opener;
           if (base && base._getEnvironment)
                env = base._getEnvironment();
        }
        if (env)
            return env._open(...arguments);
    };

    nexacro.getProjectPath = function ()
    {
        const env = nexacro.getEnvironment();
        if (env)
        {
            return env.getProjectPath();
        }
        return "";
    };

    //nexacro.loadStringResource ("en")  -> usestringresourcce = true 동작
    //nexacro.loadStringResource ("Service::test")  -> full 경로로 호출 
    //nexacro.loadStringResource ("en", "Service::test") -> Service::test?lang=en 으로 호출
    //deprecated
    nexacro.loadStringResource = function (lang, url)
    {
        var base_url;
        //const stringresourceurl = nexacro._stringresourceurl;
        //const stringrc_service = "stringrc::/";

        const env = nexacro.getEnvironment();
        if (!env) return;

       return env._loadStringRC(lang, url);
    };

    //deprecated
    nexacro.getStringResourceValue = function (key)
    {
        var str;
        const env = nexacro.getEnvironment();
        if (!env) return;

        return env._getStringResourceValue(key)            
    };

    nexacro.__getActiveObject = function (context, bform)
    {
        if (bform)
        {
            if (context.getActiveForm)
                return context.getActiveForm();
        }
        else
        {
            if (context.getActiveFrame)
                return context.getActiveFrame();
        }
        return null;
    };

    nexacro.deleteCacheDB = function ()
    {
        return nexacro._deleteCacheDB();
    };

    nexacro.getLogFilePath = function ()
    {
        return nexacro._getLogFilePath();
    };

    //environment 의 screen 정보를 nexacro 변수로 설정
    nexacro._screenInfoToInternal = function (env)
    {
        if (env)
        {
            nexacro._allow_default_pinchzoom = env._allow_default_pinchzoom;
        }
    };

    // 스크린타입별 사용자 CSS 적용 파일명 생성
    // 제너레이션 N24에서 xcss extenstion filename 에 사용하기 위해 추가 nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType
    // 제너레이션 K26에서는 화일을 통합하여 nexacro._getExtUserCssScreenType = nexacro._echoFn 로 변경하여 제너레이션함
    nexacro._getExtUserCssScreenType = function ()
    {
        return "";
    };

    nexacro._getMapFileName = function (mapfile)
    {
        var ext_type = nexacro._getExtUserCssScreenType(mapfile);
        if (ext_type == mapfile) return mapfile + ".map.js";

        if (nexacro._isUndefined(ext_type))
        {
            mapfile = mapfile + ".desktop";
        }
        else
        {
            if (ext_type && ext_type.length > 0)
            {
                mapfile += ("." + ext_type);
            }
        }
        mapfile += ".map.js";
        return mapfile;
    };

   // nexacro._com_waiting = false;
    nexacro._skipDragEventAfterMsgBox = false;

    //application 환경
    nexacro._loadADL = async function (env, project_path, key, url)
    {
        let application = null;      
        if (nexacro.isglobalmodule)
        {
            if (!env)
                env = nexacro.getEnvironment();
            application = env._getApplication();        
        }
        else
        {
            application = env._getApplication();            
            application._is_attach_childframe = true;            
        }

        application.init();

        if (project_path)
            env?._setProjectURL(project_path);

        //env._load(project_path);  // 이때 xadl 값은 설정되어 있어야 한다. 
        key = key ? key : env?.key;
        url = url ? url : env?._request_mainurl;

        application._load(key, url);

        return application;
    };

    nexacro._loadDynamicMainframe = async function (env)
    {
        if (nexacro.isglobalmodule) return;
        // MFE 방식에서 frame을 동적으로 load 하기 위한 api
        const app = env._getApplication();
        if (app)
        {
            if (!app._p_mainframe && app._is_attach_childframe == true)
            {
                app._is_attach_childframe = false;
                app.on_initApplication();
                if (app._p_mainframe)
                {
                    app._p_mainframe.createBodyFrame();
                    app.initEvent();
                }
                app._is_attach_childframe = true;

                return app._p_mainframe;
            }
            else
            {
                //trace("Containers with a MainFrame can only be loaded once.");
                //nexacro._trace("Containers with a MainFrame can only be loaded once.");
            }
        }

        return undefined;
    }
    //form 환경
    nexacro._loadFDL = async function (env, project_path, formurl)
    {

        let form = null;

        if(nexacro.isDesignMode && !nexacro._is_preview)
            form = new nexacro.DesignForm("form", 0, 0, 0, 0, null, null, null, null, null, null, null, true);
        else
            form = new nexacro.Form("form", 0, 0, 0, 0, null, null, null, null, null, null, null, true);
        
        form._env = env;

        nexacro._setBrowserErrorMsg();

        if (project_path)
            env._setProjectURL(project_path);

        
        form._load(formurl);

        return form;
    };

    nexacro._getErrorMessge = function (errorcode)
    {
        if (nexacro._errortable)
        {
            var lang = "en";
            var _lang = nexacro._getLanguage();
            if (nexacro._errortable[_lang])
                lang = _lang;

            var errmsg = nexacro._errortable[lang][errorcode];

            if (!errmsg) return "";
            var args = Array.prototype.slice.call(arguments, 1);

            var result = "";
            var argnum = 0;
            var errormsgcount = errmsg.length;
            var argscount = args.length;
            for (var i = 0; i < errormsgcount; i++)
            {
                var str = errmsg[i];
                if (argscount > 0 && str.length == 2 && str.charCodeAt(0) == 0x25)
                {
                    argnum = (str.charCodeAt(1) - 0x30) >>> 0;
                    if (argnum < errormsgcount)
                    {
                        str = args[argnum];
                    }
                }
                result += str;
            }
            return result;
        }
    };

    nexacro.addErrorMessage = function (lang, code, msg)
    {
        if (!nexacro._errortable)
            nexacro._errortable = {};

        var args_len = arguments.length;
        if (args_len == 1)
        {
            var errortable = lang;
            var locale;
            for (locale in errortable)
            {
                var errortable_locale = errortable[locale];
                for (code in errortable_locale)
                {
                    var message = errortable_locale[code];
                    if (!nexacro._errortable[locale])
                        nexacro._errortable[locale] = {};

                    nexacro._errortable[locale][code] = message;
                }
            }
        }
        else
        {
            if (nexacro._errortable[lang] == null)
            {
                nexacro._errortable[lang] = nexacro._errortable['en'];
            }

            if (nexacro._errortable[lang])
                nexacro._errortable[lang][code] = msg;
        }
    };


    

    nexacro.getPopupFrames = function (context)
    {
        if (context === null)
            return;

        if (context && context._getWindow)
        {
            var win = context._getWindow();
            if (win)
            {
                return win._getPopupFrames();
            }
        }
        return nexacro._getPopupFrames();
    };

    nexacro.userNotify = function ()
    {

    };

    nexacro.flashWindow = function (type, count, interval)
    {
        if (globalThis.chrome && globalThis.chrome.webview)
        {
            var params = { type: type, count: count, interval: interval };
            nexacro._messageToNative("0000", "nexacroapi", "_flashWindow", params, true, true);
            return;
        }
    };

    nexacro.setInitialVariable = function (type, name, value)
    {
        type = type.toLowerCase();
        switch (type)
        {
            case "environment":
                {
                    if (!nexacro._initenvvar)
                        nexacro._initenvvar = {};

                    nexacro._initenvvar[name] = value;
                    break;
                }
            case "cookie":
                {
                    if (!nexacro._initcookievar)
                        nexacro._initcookievar = {};

                    nexacro._initcookievar[name] = value;
                    break;
                }
            case "httpheader":
                {
                    if (!nexacro._inithttpvar)
                        nexacro._inithttpvar = {};

                    nexacro._inithttpvar[name] = value;
                    break;
                }
            case "application":
            default:
                {
                    if (!nexacro._initappvar)
                        nexacro._initappvar = {};

                    nexacro._initappvar[name] = value;
                    break;
                }
        }
    };

    //CHECK LKE Framework init 부분은 Docinit 이전에 수행되어야 함, 추후 별도의 파일로 분리해야 하지 않을까 판단됨

    nexacro._ServiceItem = function (prefixid, type, url, cachelevel, codepage, language, version, communicationversion, env)
    {
        this._p_prefixid = prefixid;
        this._p_type = type;
        this._p_executeurl = undefined;  

        if (typeof url === "string")
        {            
            this._p_url = url;                      
        }
        else if (url)
        {           
            this._p_url = url[0];
            if (type != "resource")
                this._p_executeurl = url[1];
        }
        
        if (nexacro._viewtoollog)
            this._p_cachelevel = "none";
        else
            this._p_cachelevel = cachelevel ? cachelevel : "session";

        this.codepage = codepage;
        this.language = language;
        this._p_version = version;
        this._p_communicationversion = communicationversion;

        this._env = env;
    };

    var __pServiceItem = nexacro._createPrototype(nexacro.Object, nexacro._ServiceItem);
    nexacro._ServiceItem.prototype = __pServiceItem;

    __pServiceItem.set_cachelevel = function (v)
    {
        if (nexacro._viewtoollog)
            this._p_cachelevel = "none";
        else if (v == "none" || v == "static" || v == "session" || v == "dynamic")
            this._p_cachelevel = v;

        this._env._setSharedVariable("service:" + this._p_prefixid, JSON.stringify({ url: this._p_url, cachelevel: this._p_cachelevel }));      
    };

    __pServiceItem.get_cachelevel = function (v)
    {
        let servicestr = this._env._getSharedVariable("service:" + this._p_prefixid);
        if (servicestr)
        {
            const service = JSON.parse(servicestr);
            return service ? service.cachelevel : this._p_cachelevel;
        }
        return this._p_cachelevel;
    };

    __pServiceItem.set_version = function (v)
    {
        this._p_version = v;
    };

    __pServiceItem.set_url = function (v)
    {
        this._p_url = v;
        this._env._setSharedVariable("service:" + this._p_prefixid, JSON.stringify({ url: this._p_url, cachelevel: this._p_cachelevel, executeurl: this._p_executeurl }));
    };

    __pServiceItem.get_url = function (v)
    {
        let servicestr = this._env._getSharedVariable("service:" + this._p_prefixid);
        if (servicestr)
        {
            const service = JSON.parse(servicestr);
            return service ? service.url : this._p_url;
        }
        return this._p_url;
    };

    __pServiceItem.get_executeurl = function (v)
    {
        let servicestr = this._env._getSharedVariable("service:" + this._p_prefixid);
        if (servicestr)
        {
            const service = JSON.parse(servicestr);
            return service ? service.executeurl : this._p_executeurl;
        }
        return this._p_executeurl;
    };

    //__pServiceItem.set_codepage = function (v)
    //{
    //    this._p_codepage = v;
    //};

    //__pServiceItem.set_language = function (v)
    //{
    //    this._p_language = v;
    //};

    __pServiceItem.set_communicationversion = function (v)
    {
        this._p_communicationversion = v;  //check
    };
    
    __pServiceItem._getEnvironment = function (v)
    {
        return this._env;
    };
    
    __pServiceItem._getURL = function (v)
    {
        if (nexacro._use_service_executeurl == false)
            return this._p_url;

        if (this._p_executeurl)       
            return this._p_executeurl;
       
        return this._p_url;
    };

    __pServiceItem._properties = [
        { name: "prefixid", readonly: true }, { name: "type", readonly: true },
        { name: "url", getter: __pServiceItem.get_url }, { name: "cachelevel", getter: __pServiceItem.get_cachelevel },
        { name: "communicationversion" }, { name: "version" }
    ];
    nexacro._defineProperties(__pServiceItem, __pServiceItem._properties);


    nexacro._ExternalItem = function (externalid, url, type, loadtype, crossorigin, integrity, template_src)
    {
        this._p_externalid = externalid;
        this._p_url = url;
        this._p_type = type;
        this._p_loadtype = loadtype;
        this._p_crossorigin = crossorigin;
        this._p_integrity = integrity;
        this._p_template_src = template_src;

        this._p_value = { isolateVal: new WeakMap(), shareVal: undefined };
        this._p_status = { isolateVal: new WeakMap(), shareVal: undefined };
        this.status = "init";
    };

    const __pExternalItem = nexacro._createPrototype(nexacro.Object, nexacro._ExternalItem);
    nexacro._ExternalItem.prototype = __pExternalItem;

    __pExternalItem._p_value = undefined;
    __pExternalItem._p_status = undefined;
    __pExternalItem._p_externalid = "";
    __pExternalItem._p_url = "";
    __pExternalItem._p_type = "";
    __pExternalItem._p_loadtype = "";
    __pExternalItem._p_crossorigin = "";
    __pExternalItem._p_integrity = "";
    __pExternalItem._p_template_src = "";


    __pExternalItem.set_value = function (v)
    {
        if (this.type == "module" || this.type == "js")
        {
            const context = globalThis;
            this._p_value.isolateVal.set(context, v);
        }
        else if (this.type == "template")
        {
            this._p_value.shareVal = v;
        }
        // style은 mapping 없음
    };
    __pExternalItem.get_value = function ()
    {
        if (this.type == "module" || this.type == "js")
        {
            const context = globalThis;
            return this._p_value.isolateVal.get(context);
        }
        return undefined;

    };
    __pExternalItem.hasValue = function ()
    {
        if (this.type == "module" || this.type == "js")
        {
            const context = globalThis;
            return this._p_value.isolateVal.has(context);
        }
        else if (this.type == "style")
        {
            return nexacro.__checkNodeDuplication("stylesheet", this.url);
        }

        return false;
    };
    __pExternalItem.set_status = function (v)
    {
        if (v == "init" || v == "error" || v == "success" || v == "prefetch")
        {
            if (this.type == "template")
            {
                this._p_status.shareVal = v;
            }
            else
            {
                const context = globalThis;
                this._p_status.isolateVal.set(context, v);
            }
        }

    };
    __pExternalItem.get_status = function (v)
    {
        if (this.type == "template")
        {
            return this._p_value.shareVal;
        }
        else
        {
            const context = globalThis;
            return this._p_value.isolateVal.get(context);
        }
    };

    __pExternalItem._properties = [{ name: "externalid", readonly: true },
    { name: "url", readonly: true },
    { name: "type", readonly: true },
    { name: "loadtype", readonly: true },
    { name: "crossorigin", readonly: true },
    { name: "integrity", readonly: true },
    { name: "template_src", readonly: true },
    { name: "status", getter: __pExternalItem.get_status },
    { name: "value", getter: __pExternalItem.get_value }];

    nexacro._defineProperties(__pExternalItem, __pExternalItem._properties);

    // deprecated. for compatible
    nexacro._addRegisterClass = function () {};

    //themeid = theme::### (exclude '.xtheme') = this._curthemeid
    nexacro._loadTheme = function (context, themeid, excludemapfile)
    {
        if (!themeid || !context)
            return;

        const env = context._getEnvironment();
        let localcache_path = env?._localcache_path;
        let idx = themeid.indexOf("theme::");
        if (localcache_path && idx >= 0)
            themeid = themeid.substring(idx + 7);

        //default
        //this._clearLocalThemeCache();
        let cssurl, cssmapurl, base_url;
        let service = env._getServiceObject(themeid);
        let localcachetype = false;
        if (localcache_path && env._hasLocalCacheUrl(themeid))
        {
            //localcache
            cssurl = env._getLocalCacheUrl(themeid);
            cssmapurl = env._getLocalCacheUrl(themeid + "map");
            if (cssurl && cssmapurl)            
            {
                context._load_manager.loadCssModule(cssurl, null, null, service, true, 0);
                context._load_manager.loadCssModule(cssmapurl, null, null, service);
                return;
            }
            localcachetype = true;
            base_url = localcache_path;
        }

        //html
        cssurl = env._getThemeURL() + nexacro._getCSSFileName("/theme");
        //cssurl = themeid + "/" + nexacro._getCSSFileName("theme")
        cssurl = env._getServiceLocation(cssurl, base_url, null, false);

        // cssurl += ".js";                    

        //for info
        cssmapurl = nexacro._getMapFileName(env._getThemeURL() + "/theme");
        //cssurl = themeid + "/theme.map";
        cssmapurl = env._getServiceLocation(cssmapurl, base_url, null, false);

        if (localcachetype)
        {
            env._addLocalCacheUrl(themeid, cssurl);
            env._addLocalCacheUrl(themeid + "map", cssmapurl);
        }

        let checkversion = env?._p_checkversion;
        if (checkversion)
        {
            var version = service.version;
            if (!nexacro._isNull(version) && version !== "")
            {
                cssurl += nexacro._getVersionQueryString(cssurl, version);
                cssmapurl += nexacro._getVersionQueryString(cssmapurl, version);
            }
        }

        context._load_manager.loadCssModule(cssurl, null, null, service, true, 0);
        if (!excludemapfile)
            context._load_manager.loadCssModule(cssmapurl, null, null, service);
    };

    nexacro._loadGlobalModule = function (context, path)
    {
        if (!path || !context)
            return;

        let url, base_url;
        var localcachetype = false;
        var service;
        const env = context._getEnvironment();
        if (env?._localcache_path && env._hasLocalCacheUrl(path))
        {
            url = env._getLocalCacheUrl(path);
            if (url)
            {
                service = env._getServiceObject(path);
                context._load_manager.loadGlobalModule(path, null, null, service);
                return;
            }

            localcachetype = true;
            base_url = env?._localcache_path;
        }

        url = env._getServiceLocation(path, base_url);

        if (localcachetype)
        {
            env._addLocalCacheUrl(path, url);
        }

        service = env._getServiceObject(url);
        context._load_manager.loadGlobalModule(url, null, null, service);
    };

    nexacro._addPreloadList = function (context, type, url, id, args)
    {
        if (!url || !context) return;

        const env = context._getEnvironment();
        let service = env._getServiceObject(url);
        if (type == "data" || type == "dataobject")
        {
            var fullurl = env._getServiceLocation(url);
            context._load_manager.addPreloadItem(type, fullurl, id, args, service);
        }
        else
        {
            context._load_manager.addPreloadItem(type, url, (id ? id : this), null, service);
        }
    };

    nexacro._addIncludeScript = function (context, mainurl, url)
    {
        if (url && context)
        {
            const env = context._getEnvironment();
            let _svcurl = url;
            let suburl = env._getServiceLocation(url);
            let includescript;
            let len = context._includescriptlist.length;
            let i = 0;
            for (i = 0; i < len; i++)
            {
                includescript = context._includescriptlist[i];
                if (includescript.url == suburl)
                {
                    return;
                }
            }

            context._includescriptlist.push({ target: mainurl, url: suburl, fn: nexacro._emptyFn, isload: false, isexecuted: false, service_url: _svcurl });
        }
    };

    nexacro._loadIncludeScript = function (context, mainurl)
    {
        if (!context) return;

        var includescript;
        var len = context._includescriptlist.length;
        for (var i = 0; i < len; i++)
        {
            includescript = context._includescriptlist[i];
            if (includescript.isload == false)
            {
                includescript.isload = true;
                context._loadInclude.call(context, mainurl, includescript.url, true, includescript.service_url);
            }
        }
    };

    nexacro._loadInclude = function (context, mainurl, url, asyncmode, service_url)
    {
        if (!context) return;

        const env = context._getEnvironment();
        let service;
        if (service_url && service_url.length > 0)
            service = env._getServiceObject(service_url);
        else
            service = env._getServiceObject(url);

        context._load_manager.loadIncludeModule(url, null, asyncmode, service);
    };

    nexacro._registerScript = function (context, filename, fn)
    {
        if (!context) return;

        var scriptlist = context._includescriptlist;
        var len = scriptlist.length;

        for (var i = 0; i < len; i++)
        {
            if (scriptlist[i].url == filename)
            {
                scriptlist[i].fn = fn;
                return;
            }
        }

        context._registerscriptfn = fn;   //xfdl 의 registerScript Function
    };

    nexacro._executeIncludeScript = function (context, url)
    {
        if (!context) return;

        const env = context._getEnvironment();
        var suburl = env._getServiceLocation(url);
        var scriptlist = context._includescriptlist;
        var len = scriptlist.length;
        var item;
        for (var i = 0; i < len; i++)
        {
            item = scriptlist[i];
            if (item.url == suburl && !item.isexecuted)
            {
                item.isexecuted = true;
                item.fn.call(context, ...nexacro.__getProcessExportArgs(context));
                break;
            }
        }
    };

    nexacro._executeMainScript = function (context)
    {
        if (context && context._registerscriptfn)
        {
            context._registerscriptfn.call(context, ...nexacro.__getProcessExportArgs(context));
        }
    };


    nexacro._cancelTransaction = function (context, id)
    {
        if (!context) return;

        let datalist = context._load_manager.dataList;
        if (!datalist)
            return -1;
        let canceledCnt = 0, j;

        if (id != undefined)
        {
            let datalistid = (typeof id == "string") ? id.split(",") : id;
            if (datalistid.length > 0)
            {
                let datalistfilter = [];
                for (let k = 0; k < datalist.length; k++)
                {
                    datalistfilter[k] = datalist[k].url;
                }

                var datalistfiltered = [], i;
                for (j = 0; datalistfilter.length > j; j++)
                {
                    let datalistfound = false;
                    for (i = 0; datalistid.length > i; i++)
                    {
                        if (datalistid[i] == datalistfilter[j])
                        {
                            datalistfound = true;
                            break;
                        }
                    }
                    if (!datalistfound)
                    {
                        datalistfiltered.push(datalistfilter[j]);
                    }
                }

                for (j = datalistfiltered.length - 1; j >= 0; j--)
                {
                    for (i = datalist.length - 1; i >= 0; i--)
                    {
                        if (datalist[i].url == datalistfiltered[j])
                        {
                            datalist = nexacro._removedatalist(datalist, i);
                        }
                    }
                }
            }
        }

        let datalen = datalist.length;
        for (j = 0; j < datalen; j++)
        {
            let dataitem = datalist[j];
            let dataitem_handle = dataitem.handle;
            dataitem_handle._user_aborted = true;
            dataitem._is_cancel = true;
            nexacro._cancelLoad(dataitem_handle);
            canceledCnt++;
        }
        return canceledCnt;
    };

    //
    //Error 
    nexacro._onHttpSystemError = function (obj, bfireevent, errorobj, errortype, url, returncode, requesturi, locationuri, extramsg)
    {
        var ret = false;
        var commerrorobj = nexacro.MakeCommunicationError(obj, errortype, url, returncode, requesturi, locationuri, extramsg);
        if (bfireevent)
        {
            var environment = obj._getEnvironment() || nexacro.getEnvironment();
            if (environment)
            {
                ret = environment.on_fire_onerror(obj, commerrorobj.name, commerrorobj.message, errorobj, returncode, requesturi, locationuri);
            }
        }

        nexacro._onFireSystemError(obj, false, commerrorobj.name, 1, commerrorobj.message, true);

        return ret;
    };

    nexacro._onSystemWarning = function (obj, errorcode)
    {
        var args = Array.prototype.slice.call(arguments, 1);
        var errormsg = nexacro._getErrorMessge.apply(this, args);

        this._onFireSystemError(obj, false, errorcode, 2, errormsg, true);
    };

    nexacro._onSystemError = function (obj, errortype, errormsg)
    {
        nexacro._onFireSystemError(obj, true, errortype, 1, errormsg, true);
    };

    //"fatal" : 치명적이 에러인 경우 - 0 
    //"error" : 일반적인 에러인 경우 - 1
    //"warn" : 경고인 경우          - 2
    //"info" : 일반 정보인 경우     - 3
    //"debug" : 디버그 정보인 경우  - 4

    //bsystemlog : 1(systemlog) 2(userlog) 
    //msglevel : 받은 메세지가 warinig 인지 error인지 2(warn) 1(error) 
    nexacro._onFireSystemError = function (errorobj, bfireevent, errortype, msglevel, message, bsystemlog)
    {
        var environment = errorobj._getEnvironment ? errorobj._getEnvironment() : nexacro.getEnvironment();

        if (bfireevent)
        {
            if (environment)
            {
                environment.on_fire_onerror(environment, errortype, message, errorobj);
            }
        }

        // ignore trace log when without message
        if (message)
        {
            if (environment)
            {
                nexacro._writeTraceLog(msglevel, message, bsystemlog, environment._loglevel, environment._p_traceduration, environment._p_tracemode);
            }
            else
                nexacro._writeTraceLog(msglevel, message, bsystemlog);
        }
    };

    nexacro.__getRealWindowHandle = function (_cur_win)
	{
		var _cur_nexacro = _cur_win.nexacro;
		var p = _cur_win;
		try
		{
			while (true)
			{
				// nexacro root으로 제한.
				if (p.parent && p != p.parent && p.parent.nexacro && p.parent.nexacro == _cur_nexacro)
					p = p.parent;
				else
					break;
			}
		}
		catch (e)
		{
			// nexacro on iframe - cross origin problem
			//return _cur_win;
			//if (e && e.message)
			//	trace(e.message);
			nexacro._settracemsg(e);
		}

		return p;
	};

	nexacro._initHTMLSysEvent = function (/*_cur_win, _cur_doc*/)
	{
		// root window 를 찾아나가는 구조 삭제 
		//var _win_win = nexacro.__getRealWindowHandle(_cur_win);
		//var _win_doc = _win_win ? _win_win.document : document;		
		nexacro.__setDOMStyle_DisablePulldownRefresh(nexacro._getWindowDestinationHandle(window).style);

		// init forward functions
		//nexacro._createSysEvent_ForwardFuncs(_cur_win);


		//const _sysEvent = nexacro.nexacro_HTMLSysEvent = new nexacro.HTMLSysEvent(/*_win_win, _win_doc, _cur_win, _cur_doc*/window);
		const _sysEvent = nexacro.nexacro_HTMLSysEvent = new nexacro.HTMLSysEvent(/*_win_win, _win_doc, _cur_win, _cur_doc*/);
		// init handlers
		_sysEvent._initDocEventHandler();
	};

    nexacro._preparePopupFrame = function (_cur_win, _cur_doc, urlparams, fontface_info)
	{
		if (arguments.length >= 4)
		{
			const arg1 = arguments[3];
			if (typeof arg1 == "object") fontface_info = arg1;
		}

	
		function onloadpopupframe()
		{
			nexacro._createPopupFrame(_cur_win, urlparams);
		}

		nexacro._initHTMLSysEvent(_cur_win, _cur_doc);

		// 제너레이션 작업 완료후 삭제
		if (urlparams)
		{
			const env = nexacro.getEnvironment();
			fontface_info = env && env.on_getUserFontInfo ? env.on_getUserFontInfo() : null;
			nexacro._prepareManagerFrame(onloadpopupframe, fontface_info);
		}
		else
			nexacro._prepareManagerFrame();
	};

	nexacro._createPopupFrame = function (_cur_win, urlparams)
	{
		var name = urlparams.framename;
	
		var pNexacro;
		var parent_handle = _cur_win.opener || parent;
		var parent_win = nexacro._findWindow(_cur_win.opener || parent);
		if (!parent_win && nexacro._opener_ref)
		{
			parent_win = nexacro._opener_ref._getWindow();
		}
		var _win = new nexacro._Window(name, parent_win);
		_win.setLinkedWindow(_cur_win);

		if (parent_win)
		{
			parent_win.addChild(_win);
		}

		let popupframeoption;
		if (parent_handle._nexacro_popupframeoption)
		{
			popupframeoption = parent_handle._nexacro_popupframeoption[name];
			if (popupframeoption)
			{
				parent_handle._nexacro_popupframeoption[name] = null;
				delete parent_handle._nexacro_popupframeoption[name];
			}
		}

		var env = nexacro.getEnvironment();		
		env._popuporigin = true;
		env._application = window._application;
		window._application = null;
		env._setCurrentScreen(popupframeoption._screeninfo);
		env._initLocalStorage(urlparams.loadtime); //nexacro.open 수행시 environment가 늦게 로딩되어 nexacro._uniquestoragevalue 값을 localstorage에서 얻어올수 없어 param으로 처리
		env._cssurls = popupframeoption._cssurls;

		//env onload 발생 후 호출됨
		env._loadedexternalcallback = function ()
		{
			var childframe = new nexacro.ChildFrame(name);
			if (parent_handle.nexacro)
			{
				pNexacro = parent_handle.nexacro;

			}
			else
			{
				pNexacro = nexacro._parent_nexacro;

				nexacro._parent_nexacro = null;
			}
			pNexacro._registerPopupFrame(name, childframe, parent_win);

			childframe._popupframeoption = popupframeoption;
			childframe._env = env;
			childframe._showModeless(name, _win);

			// for XCSS Predefine
			_win._xcssgroup_autoselector.setInfo(env?._css_group_autoselect_info);
			_win._onBroadcast();
			_win._setRootCSSClass();
		};

		env._load();
	};

	nexacro._getPopupFrames = function (winobj)
	{
		var context = nexacro;

		if (winobj)
			context = winobj.handle;

		if (context._popupframes)
			return context._popupframes;
		else
			return context._popupframes = new nexacro.Collection();

	};

	nexacro._isPopupFrame = function (id, parentframe)
	{

		let popupframes;
		if (!parentframe)
		{
			popupframes = nexacro?._popupframes;
		}
		else
		{
			let win = parentframe._getWindow();
			if (win && win.handle)
				popupframes = win.handle._popupframes;
		}

		if (popupframes && popupframes.get_item(id) != null)
			return true;
		return false;
	};

	nexacro._isClosePopupFrame = function (popup)
	{
		try
		{
			if (popup.closed)
				return true;

			// Edge 대응: 팝업 document에 접근을 시도해 보고 실패하면 닫힌 것으로 판정
			popup.document; // 접근 시 에러나면 닫힌 상태
		} 
		catch
		{
			return true;
		}
		return false;
	}

	nexacro._registerPopupFrame = function (id, frame, winobj)
	{
		var context = nexacro;
		if (winobj)
			context = winobj.handle;

		if (!context._popupframes)
			context._popupframes = new nexacro.Collection();

		if (context._popupframes.get_item(id) != null)
			return -1;

		return context._popupframes.add_item(id, frame);

	};

	nexacro._unregisterPopupFrame = function (id, winobj, isparentnull)
	{
		var context;
		if (winobj && winobj.parent && isparentnull)
		{
			//popupframe의 parent 가 null 인 경우 처리 
			context = winobj.parent.handle;
			context.nexacro._unregisterPopupFrame(id);
		}
		else
		{
			context = nexacro;
			if (winobj)
				context = winobj.handle;
			if (context._popupframes)
			{
				context._popupframes.delete_item(id);
				if (context._popupframes.length == 0)
					context._popupframes = null;
			}
		}

		// TODO check 필요한 코드인지?
		//this._activeform = null; 사용하는 곳이 없음
	};

	nexacro._cleanupPopupFrame = function (id, parentframe)
	{
		let target, win;
		var _type = 0;
		if (parentframe && parentframe[id])
		{
			target = parentframe[id];
			_type = 1;

		}
		else 
		{
			if (!parentframe)
			{

				target = nexacro?._popupframes?.get_item(id);
				if (target)
					_type = 2;
			}
			else
			{
				let winobj = parentframe._getWindow();
				if (winobj)
				{
					var popupframes = winobj.handle?._popupframes;
					target = popupframes?.get_item(id);
					_type = 2;
				}
			}
		}
		if (target)
		{
			try
			{
				const wnd = target._getWindow();
				if (wnd)
				{
					var handle = wnd.handle;
					if (handle && handle.closed)
					{
						nexacro._unregisterPopupFrame(id);
						target._is_alive = true;
						wnd._is_alive = true;
						wnd.destroy();
					}
				}
			}
			catch (e)
			{
				switch (_type)
				{
					case 1:
						parentframe.removeChild(id);
						break;
					case 2:
						nexacro._unregisterPopupFrame(id);
						break;

				}
			}
		}
	};

	nexacro._setLastEventName = function (evtName)
	{
		nexacro._last_eventname = evtName;
	};

	nexacro._getLastEventName = function ()
	{
		return nexacro._last_eventname;
	};

    nexacro._compositionComplete = function (win, elem)
	{
		var last_focused = win._last_focused_elem;
		if (last_focused != elem)
		{
			if (nexacro._OS == "iOS" || nexacro._OS == "Mac OS")
			{
				if (elem.isInputElement())
				{
					var input_handle = last_focused.handle;
					input_handle.blur();
					return;
				}
			}
		}
	};

	nexacro._syshandler_onpopstate = function (_sysEvent, evt, context)
	{
		const { win } = context;
		win._on_sys_popstate(evt.state);
	};

	nexacro._syshandler_onmessage = function (_sysEvent, evt, context)
	{
		const { win } = context;
		win._on_sys_message(evt.data);
	};

	nexacro._syshandler_onmousedown = function (_sysEvent, evt, context)
	{
		let ret = false;

		const { win, elem } = context;
		if (!win || !elem)
			return ret;

		// Window 터치 환경에서, tocustart에서 input에 focus를 prevented 시키지 않는 경우 mousedown event 발생 (enabletouchevent == true 인 경우)
		// touchstart한 위치와 mousedown 하려는 element가 동일하면 처리 안하도록 수정 (103256)
		const env = win._getEnvironment();
		if (nexacro._OS == "Windows" && env._p_enabletouchevent && nexacro._SupportTouchEvent)
		{
			if (win && win._cur_touch_elem == elem)
			{
				return ret;
			}
		}
		const last_focused_elem = win._last_focused_elem;
		const last_focused_elem_composing = (last_focused_elem && last_focused_elem.isInputElement() && last_focused_elem.isComposing()) ? true : false;


		win._on_sys_activate(_sysEvent, evt);


		if (evt.button == nexacro.HTMLSysEvent.prototype.MOUSE_LBUTTON)
		{
			/* mouse event check from virtual cursor in sensereader */
			win._is_fire_virtual_mousedown = false; //init
			if (nexacro._getAccessibilityVirtualCursorMouseEvent(evt, win))
			{
				win._is_fire_virtual_mousedown = true;
			}
			ret = win._on_sys_lbuttondown(elem, nexacro._SupportTouch ? "touch" : "lbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			_sysEvent.lockMouseMove(evt.target);

			// 브라우저에 의해 클릭된 Element가 Focus를 가져가기때문에 Default동작을 막아야 함.
			// TODO check 임시방편 현재 preventDefault 처리하면 Input만 문제가 됨
			// Google Chrome에서 Disable된 input클릭시 focus가 옮겨가는 문제 수정 2013.08.28 neoarc
			if (!(elem.isInputElement() && elem.enable))
			{
				if (last_focused_elem_composing)
					last_focused_elem.on_complete_composition_value();
				
				if ((elem instanceof nexacro.HTMLControlElement ||
					nexacro._isWebTypeElement(last_focused_elem) ||
					elem instanceof nexacro.IconTextControlElement) == false)
					nexacro._stopSysEvent(evt);
			}

			if (ret === false)
				nexacro._stopSysEvent(evt);

			nexacro._compositionComplete(win, elem);
		}
		else if (evt.button == nexacro.HTMLSysEvent.prototype.MOUSE_RBUTTON)
		{
			ret = win._on_sys_rbuttondown(elem, "rbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

			if (!(elem.isInputElement() && elem.enable))
			{
				if (last_focused_elem_composing)
					last_focused_elem.on_complete_composition_value();

				nexacro._stopSysEvent(evt);
			}

			if (ret === false)
				nexacro._stopSysEvent(evt);

			nexacro._compositionComplete(win, elem);
		}
		else
		{
			ret = win._on_sys_mousedown(elem, "mbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			if (!(elem.isInputElement() && elem.enable))
			{
				if (last_focused_elem_composing)
					last_focused_elem.on_complete_composition_value();

				nexacro._stopSysEvent(evt);
			}

			if (ret === false)
				nexacro._stopSysEvent(evt);


			nexacro._compositionComplete(win, elem);
		}

		return ret;
	};

	nexacro._syshandler_onmouseup = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;

		let ret = false;
		if (win && elem)
		{
			win._is_fire_sys_focusin = false; // focusin flag init

			// e.clientX, e.clientY는 win ClientArea left,top 0을 기준으로 측정된 값임				
			if (evt.button == nexacro.HTMLSysEvent.prototype.MOUSE_RBUTTON)
				ret = win._on_sys_rbuttonup(elem, "rbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			else
				ret = win._on_sys_mouseup(elem, "mbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

			win._is_block_event_process = false; //init
			return ret;
		}
		return false;
	};

	nexacro._syshandler_lock_onmouseup = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		_sysEvent.unlockMouseMove(evt.target);
		let ret = false;

		if (win)
		{
			win._is_fire_sys_focusin = false; //init

			if (evt.button == nexacro.HTMLSysEvent.prototype.MOUSE_LBUTTON)
			{
				/* mouse event check from virtual cursor in sensereader */
				if (!nexacro._getAccessibilityVirtualCursorMouseEvent(evt, win))
				{
					win._is_fire_virtual_mousedown = false;
				}
				ret = win._on_sys_lbuttonup(elem, nexacro._SupportTouch ? "touch" : "lbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

				win._is_fire_virtual_mousedown = false; //init
			}
		}
		return ret;
	};

	nexacro._syshandler_onclick = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (win && elem)
			return win._on_sys_click(elem, evt.pointerType == "touch" ? "touch" : nexacro._getSysEventBtnString({ button: 1, which: 1 }), evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

		return false;
	};

	nexacro._syshandler_onmousemove = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;

		if (!win)
			return false;


		if (win._cur_screen_pos.x == evt.screenX && win._cur_screen_pos.y == evt.screenY)
			return false;

		else 
		{
			win._cur_screen_pos.x = evt.screenX;
			win._cur_screen_pos.y = evt.screenY;
		}
		const button = (win._cur_rdown_elem ? "rbutton" : (win._cur_mdown_elem ? "mbutton" : "none"));

		if (elem)
		{
			win._on_sys_mousemove(elem, button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			return true;
		}
		return false;
	};

	nexacro._syshandler_lock_onmousemove = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (!win)
			return false;

		const dp = nexacro._getDevicePixelRatio();
		// TitleBar는 전체 browser 영역기준으로 x,y
		const w_x = nexacro._getWindowHandlePosX(win.handle);
		const w_y = nexacro._getWindowHandlePosY(win.handle);

		const w_width = nexacro._getWindowHandleClientWidth(win.handle) * dp;
		const w_height = nexacro._getWindowHandleClientHeight(win.handle) * dp;

		if (win._cur_screen_pos.x == evt.screenX && win._cur_screen_pos.y == evt.screenY)
			return false;

		else if (evt.screenX < w_x || evt.screenX > (w_x + w_width) || evt.screenY < w_y || evt.screenY > (w_y + w_height))
		{
			if (nexacro._cur_track_info && nexacro._cur_track_info.target instanceof nexacro.TitleBarControl)
			{
				// 타이틀바가 클라이언트영역을 벗어나면 트랙이 끊어지는 문제가 있어서 처리
				if (!nexacro._macOSWebView)
				{
					return false;
				}
			}
		}

		win._cur_screen_pos.x = evt.screenX;
		win._cur_screen_pos.y = evt.screenY;

		if (elem)
		{
			// e.clientX, e.clientY는 win ClientArea left,top 0을 기준으로 측정된 값임
			win._on_sys_mousemove(elem, nexacro._SupportTouch ? "touch" : "lbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			return true;
		}
		else
		{
			win._on_sys_mousemove(null, nexacro._SupportTouch ? "touch" : "lbutton", evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
		}
		return false;
	};

	//---------------------------------------------------------------------------------------
	// 비네이티브 휠 스크롤 제스처 throttle
	//---------------------------------------------------------------------------------------
	nexacro._wheel_gesture_comp = null;   // 현재 제스처의 스크롤 owner 컴포넌트
	nexacro._wheel_gesture_time = 0;      // 마지막으로 wheel 이벤트를 처리한 시각(ms)
	nexacro._wheel_gesture_gap = 200;     // 이 시간(ms) 이상 wheel 이 없으면 제스처 종료로 간주
	nexacro._wheel_limitover_fired = false; // 이번 DOM 휠 이벤트에서 wheellastover/wheelfirstover 가 이미 발생했는지(이벤트당 1회 제한)

	// 시계 함수: 가용하면 performance.now, 아니면 Date 기반. (로드 시 1회 결정)
	nexacro._getWheelNow = (typeof performance !== "undefined" && performance.now) ? performance.now.bind(performance) : function () { return (new Date()).getTime(); };

	// 진행 중인 제스처의 살아있는 owner 를 반환(없으면 null).
	nexacro._getWheelGestureOwner = function ()
	{
		var comp = nexacro._wheel_gesture_comp;
		if (comp && !comp._is_alive)
		{
			nexacro._resetWheelGesture();
			return null;
		}
		return comp;
	};

	// 스크롤이 발생한 컴포넌트를 제스처 owner 로 지정.
	// 만료 시각(_wheel_gesture_time)은 이벤트 진입 시 _touchWheelGesture 가 이미 갱신했으므로
	// 여기서는 클럭을 다시 읽지 않는다(이벤트당 클럭 read 1회 유지).
	nexacro._setWheelGestureOwner = function (comp)
	{
		nexacro._wheel_gesture_comp = comp;
	};

	nexacro._resetWheelGesture = function ()
	{
		var comp = nexacro._wheel_gesture_comp;
		if (comp)
			comp._isscrolllast = false;
		nexacro._wheel_gesture_comp = null;
	};

	// wheel 이벤트 진입 시 이벤트당 1회 호출. 직전 wheel 과의 간격이 gap 을 넘으면 제스처를 종료한다.
	nexacro._touchWheelGesture = function ()
	{
		var now = nexacro._getWheelNow();

		if (nexacro._wheel_gesture_comp && (now - nexacro._wheel_gesture_time > nexacro._wheel_gesture_gap))
			nexacro._resetWheelGesture();
		nexacro._wheel_gesture_time = now;

		nexacro._wheel_limitover_fired = false;
	};

	nexacro._syshandler_onmousewheel = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		let ret;
		if (win && elem)
		{
			if (evt.ctrlKey)
				win._keydown_element = null;

			// 제스처 throttle: 직전 wheel 과의 간격으로 제스처 만료 처리(이벤트당 1회)
			nexacro._touchWheelGesture();

			// e.clientX, e.clientY는 win ClientArea left,top 0을 기준으로 측정된 값임
			ret = win._on_sys_mousewheel(elem, nexacro.__getWheelDeltaX(evt), nexacro.__getWheelDeltaY(evt), nexacro._getSysEventBtnString({ button: 1, which: 2 }), evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			if (ret === false)
			{
				nexacro._stopSysEvent(evt);
			}
			return;
		}
		return false;
	};

	nexacro._syshandler_ontouchstart = function (_sysEvent, evt, context)
	{
		let { win, elem } = context;
		let node = elem;
		if (evt.stopped === true)
			return;

		if (!win || win._isFrozen)
			return;

		// init or orientationchange 시점에 이벤트 중지
		win._is_active_window = true;
		win._is_fire_sys_touchstart = true; // checking fire touchstart

		let touch, touchid, screenX, screenY, curTime, i;
		if (elem)
		{
			const last_focused_elem = win._last_focused_elem;
			const _doc = elem._getRootWindowHandle();
			const active_dom = _doc.activeElement;

			if (nexacro._Browser == "MobileSafari")
			{
				if (nexacro._isHybrid && nexacro._isHybrid())
				{
					if (win._is_active_window === false)
						win._on_sys_activate();
				}

				if (last_focused_elem && last_focused_elem != elem)
				{
					if (!(elem.isInputElement() || elem instanceof nexacro.TextAreaElement) &&
						(active_dom && (active_dom.tagName == "INPUT" || active_dom.tagName == "TEXTAREA")))
					{
						if (!nexacro._isSameComponent(last_focused_elem, elem))
						{
							let start = 0, end = 0;
							if (last_focused_elem.isInputElement())
							{
								const pos = last_focused_elem.getElementCaretPos();
								if (pos !== -1)
								{
									start = pos.begin;
									end = pos.end;
								}
							}
							const input_handle = last_focused_elem.handle;
							nexacro.__setInputDOMNode_SetSelect(_doc, input_handle, start, end);
							//input_handle.blur();
						}
					}
				}
			}

			curTime = (evt.timeStamp || (new Date()).getTime());

			const touches = evt.touches, changedTouches = evt.changedTouches;
			const touch_len = touches.length, change_len = changedTouches.length;
			const type = evt.type || "touchstart";
			//var is_first = (touch_len == change_len);

			let touch_node, touch_elem, touch_info, windowX, windowY, changed;
			let changed_ids = {}, touch_infos = [], changed_touch_infos = [];

			for (i = 0; i < change_len; i++)
			{
				touch = changedTouches[i];
				changed_ids[touch.identifier] = true;
			}

			for (i = 0; i < touch_len; i++)
			{
				touch = touches[i];
				touch_node = touch.target;
				if (touch_node && touch_node != node)
					touch_elem = nexacro.__findParentElement(touch_node);
				else
					touch_elem = elem;


				touchid = touch.identifier;
				changed = changed_ids[touchid];
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, changed, windowX, windowY, screenX, screenY);
				touch_infos.push(touch_info);
				if (changed)
					changed_touch_infos.push(touch_info);

			}

			win._on_gesture_sys_touchstart(elem, touch_infos, changed_touch_infos, curTime);
		}

		return false;
	};

	nexacro._syshandler_ontouchend = function (_sysEvent, evt, context)
	{
		let { win, elem } = context;
		// init or orientationchange 시점에 이벤트 중지
		if (this._is_first_touch)
			this._is_first_touch = false;

		if (!win || win._isFrozen)
			return;


		let ret = false;
		let touch, touchid, screenX, screenY, curTime, i;
		if (elem)
		{
			curTime = (evt.timeStamp || (new Date()).getTime());
			if (nexacro._OS == "iOS" && parseFloat(nexacro._OSVersion) >= 9)
			{
				// prevent double tap zooming
				if (nexacro._last_touchend_time && (curTime - nexacro._last_touchend_time) < 400)
				{
					evt.preventDefault();
					if (evt.srcElement instanceof HTMLInputElement)
					{
						// preventDefault로 keypad 가 올라오지 않는 문제가 있어서 input에 포커스를 줌
						if (!evt.srcElement.readOnly)
							evt.srcElement.focus();
					}
				}

				nexacro._last_touchend_doc = document;
				nexacro._last_touchend_time = curTime;
			}
			const touches = evt.touches, changedTouches = evt.changedTouches;
			const touch_len = touches.length, change_len = changedTouches.length;

			let touch_elem, touch_info;
			let windowX, windowY;
			let type = evt.type || "touchend";

			const touch_infos = [], changed_touch_infos = [];

			for (i = 0; i < change_len; i++)
			{
				touch = changedTouches[i];

				touchid = touch.identifier;
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);

				touch_elem = nexacro.__getElementFromPoint(win.handle, windowX, windowY);

				if (elem.windowed)
				{
					if (elem.linkedcontrol && nexacro._isWebTypeComponent(elem.linkedcontrol))
					{
						if (elem.linkedcontrol._ifrm_elem && elem.linkedcontrol._ifrm_elem._window)
							touch_elem = nexacro.__getElementFromPoint(elem.linkedcontrol._ifrm_elem._window, windowX, windowY);
					}
				}

				if (touch_elem)
					elem = touch_elem;

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, true, windowX, windowY, screenX, screenY);
				changed_touch_infos.push(touch_info);
			}

			for (i = 0; i < touch_len; i++)
			{
				touch = touches[i];

				touchid = touch.identifier;
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);

				touch_elem = nexacro.__getElementFromPoint(win.handle, windowX, windowY);

				if (elem.windowed)
				{
					if (elem.linkedcontrol && nexacro._isWebTypeComponent(elem.linkedcontrol))
					{
						if (elem.linkedcontrol._ifrm_elem && elem.linkedcontrol._ifrm_elem._window)
							touch_elem = nexacro.__getElementFromPoint(elem.linkedcontrol._ifrm_elem._window, windowX, windowY);
					}
				}

				if (touch_elem)
					elem = touch_elem;

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, false, windowX, windowY, screenX, screenY);
				touch_infos.push(touch_info);
			}

			nexacro._setLastEventName("touchend");
			ret = win._on_gesture_sys_touchend(elem, touch_infos, changed_touch_infos, curTime);
			win._is_fire_sys_touchstart = false; // init			
			if (ret)
			{
				nexacro._stopSysEvent(evt);
				return true;
			}
			else
				return;
		}
		// 터치를 preventDefault 할 경우 모바일 자체 Zoom이 되지 않는다고함. 참고
	};

	nexacro._syshandler_ontouchmove = function (_sysEvent, evt, context)
	{
		let { win, elem } = context;

		// init or orientationchange 시점에 이벤트 중지
		let ret = false;

		if (!win && win._isFrozen)
			return;

		let touch, touchid, screenX, screenY, curTime, i;
		if (elem)
		{
			curTime = (evt.timeStamp || Date.now());
			/*
			if (nexacro._Browser == "MobileSafari")
			{
				//iOS에서 키패드가 올라왔을 때 window사이즈가 줄어들지 않아 
				//resize가 발생하지 않고, 보여지는 화면이 밀리는 현상 발생
				var _doc = elem._getRootWindowHandle();
				var last_focused_elem = win._last_focused_elem;
				if (last_focused_elem)
				{
					var input_handle = last_focused_elem.handle;
					if (input_handle && input_handle.blur)
						input_handle.blur();
				}
			}
			*/

			// Touch는 touchstart된 node에 touchmove, touchend를 fire하기때문에
			// 실제 손 밑에 있는 node는 HitTest를 통해 알아내야 한다.
			//var pageXOffset = (window.pageXOffset > 0 ? window.pageXOffset : 0);
			// var pageYOffset = (window.pageYOffset > 0 ? window.pageYOffset : 0);

			const touches = evt.touches, changedTouches = evt.changedTouches;
			const touch_len = touches.length, change_len = changedTouches.length;

			let touch_elem, touch_info;
			let changed, windowX, windowY;
			let type = evt.type || "touchmove";

			let changed_ids = {}, touch_infos = [], changed_touch_infos = [];

			for (i = 0; i < change_len; i++)
			{
				touch = changedTouches[i];
				changed_ids[touch.identifier] = true;
			}

			for (i = 0; i < touch_len; i++)
			{
				touch = touches[i];
				/*
				touch_node = touch.target;
				if (touch_node && touch_node != node)
				{
					touch_elem = nexacro.__findParentElement(touch_node);
				}
				else
				{
					touch_elem = elem;
				}
				*/

				touchid = touch.identifier;
				changed = changed_ids[touchid];
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);
				touch_elem = nexacro.__getElementFromPoint(win.handle, windowX, windowY);
				if (touch_elem)
					elem = touch_elem;

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, changed, windowX, windowY, screenX, screenY);
				touch_infos.push(touch_info);
				if (changed)
				{
					changed_touch_infos.push(touch_info);
				}
			}

			ret = win._on_gesture_sys_touchmove(elem, touch_infos, changed_touch_infos, curTime);
			//return;
		}


		if (ret)
		{
			nexacro._stopSysEvent(evt);
			return true;
		}
		return false;
	};

	nexacro._syshandler_ontouchcancel = function (_sysEvent, evt, context)
	{
		let { win, elem } = context;
		let node = elem;
		if (!win || win._isFrozen)
			return;


		let touch, touchid, screenX, screenY, curTime, i;
		if (elem)
		{
			evt.preventDefault();
			curTime = (evt.timeStamp || new Date().getTime());

			const touches = evt.touches, changedTouches = evt.changedTouches;
			const touch_len = touches.length, change_len = changedTouches.length;

			let touch_node, touch_elem, touch_info;
			let windowX, windowY;
			let type = evt.type || "touchcancel";
			let touch_infos = [], changed_touch_infos = [];

			for (i = 0; i < change_len; i++)
			{
				touch = changedTouches[i];
				touch_node = touch.target;
				if (touch_node && touch_node != node)
					touch_elem = nexacro.__findParentElement(touch_node);
				else
					touch_elem = elem;


				touchid = touch.identifier;
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, true, windowX, windowY, screenX, screenY);
				changed_touch_infos.push(touch_info);
			}

			for (i = 0; i < touch_len; i++)
			{
				touch = touches[i];
				touch_node = touch.target;
				if (touch_node && touch_node != node)
					touch_elem = nexacro.__findParentElement(touch_node);

				else
					touch_elem = elem;


				touchid = touch.identifier;
				windowX = nexacro.__getWindowX(touch);
				windowY = nexacro.__getWindowY(touch);
				screenX = nexacro.__getScreenX(touch);
				screenY = nexacro.__getScreenY(touch);

				touch_info = new nexacro.Touch(touchid, type, curTime, touch_elem, false, windowX, windowY, screenX, screenY);
				touch_infos.push(touch_info);
			}

			win._on_gesture_sys_touchcancel(elem, touch_infos, changed_touch_infos, curTime);
			return;
		}

	};

	nexacro._syshandler_ondblclick = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (win && elem)
			return win._on_sys_dblclick(elem, nexacro._getSysEventBtnString({ button: 1, which: 1 }), evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

		return false;
	};

	nexacro._syshandler_onmouseover = function (_sysEvent, evt, context) //mouseenter
	{
		/*  if (!application)
		  return false;
		  */

		let { win, elem, release_elem } = context;
		const from_elem = release_elem;
		let end_elem;

		if (!from_elem)
		{
			const dragInfo = nexacro._cur_drag_info;
			if (dragInfo && !dragInfo.isDragover)
				nexacro._initDragInfo();

		}

		if (win && elem && elem != from_elem)
		{
			const button = (win._cur_ldown_elem ? "lbutton" : (win._cur_rdown_elem ? "rbutton" : (win._cur_mdown_elem ? "mbutton" : "none"))); //button info
			let ret;

			// check mouseenter
			if (from_elem)
				end_elem = win._findCommonParentElement(elem, from_elem);
			else
				end_elem = win._findRootElement();

			// check popup
			if (!end_elem)
				end_elem = win._findPopupElement(elem);
			if (!end_elem)
				end_elem = win._findRootElement();

			if (end_elem)
			{
				let fire_elem = [];

				// get mouseenter
				for (; elem && elem != end_elem; elem = elem.parent_elem)
				{
					if (elem.linkedcontrol)
						fire_elem.push(elem);
				}
				// fire mouseenter
				for (let i = fire_elem.length - 1; i >= 0; i--)
					ret = win._on_sys_mouseenter(fire_elem[i], from_elem, button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

			}
			return ret;
		}
		return false;
	};

	nexacro._syshandler_onmouseout = function (_sysEvent, evt, context) //mouseleave
	{
		let { win, elem, release_elem } = context;
		const to_elem = release_elem;
		let end_elem;

		if (win && elem && elem != to_elem)
		{
			const button = (win._cur_ldown_elem ? "lbutton" : (win._cur_rdown_elem ? "rbutton" : (win._cur_mdown_elem ? "mbutton" : "none"))); //button info
			let ret;

			// check mouseleave
			if (to_elem)
				end_elem = win._findCommonParentElement(elem, to_elem);
			else
				end_elem = win._findRootElement();

			// check popup
			if (!end_elem)
				end_elem = win._findPopupElement(elem);
			if (!end_elem)
				end_elem = win._findRootElement();

			// fire mouseleave

			if (end_elem) 
			{
				for (; elem && elem != end_elem; elem = elem.parent_elem)//when popup is closed
				{
					if (elem.linkedcontrol)
						ret = win._on_sys_mouseleave(elem, to_elem, button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);

				}
			}
			return ret;
		}
		return false;
	};

	nexacro._syshandler_onkeydown = function (_sysEvent, evt, context)
	{
		let { win, lastfocus_elem, keycode } = context;
		const elem = lastfocus_elem
		if (win && elem)
		{
			nexacro._setKeydownInfo(evt);

			if (nexacro._OS == "Mac OS" && keycode == 229 && evt.key == "Enter")
				keycode = nexacro.Event.KEY_RETURN;

			// IME 입력 체크위해 위치 이동 (RP 104763)
			win._is_fire_sys_keydown = win._isFireSysKeydown(keycode, evt.code);
			win._on_sys_keydown(elem, keycode, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.metaKey);

			if (elem._event_stop)
			{
				// form에서 tab키가 처리되면 preventDefault
				nexacro._stopSysEvent(evt);
				elem._event_stop = false;
				return true;
			}

			return true; // keypress, input 이벤트 발생을 위해
		}
		return false;
	};

	nexacro._syshandler_onkeypress = function (_sysEvent, evt, context)
	{
		const { win, lastfocus_elem } = context;
		const elem = lastfocus_elem
		if (win && elem)
		{
			let ret = win._on_sys_keypress(elem, evt.keyCode, evt.charCode, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.metaKey);
			if (elem._event_stop)
			{
				// form에서 tab키가 처리되면 preventDefault
				nexacro._stopSysEvent(evt);
				elem._event_stop = false;
				return true;
			}
			return ret;
		}
		return false;
	};
	
	nexacro._syshandler_onkeyup = function (_sysEvent, evt, context)
	{
		const { win, elem, lastfocus_elem, keycode } = context;
		const up_elem = elem;
		let keyCode = keycode;

		if (win && lastfocus_elem)
		{
			const env = win._getEnvironment();
			if (env && env._p_enableaccessibility && env._a11ytype < 4)
			{
				//trace(`keyup event / code : ${evt.code} / node : ${node} / keydown : ${win._is_fire_sys_keydown}`);

				const refer_comp = win.findComponent(up_elem);
				const up_comp = refer_comp._getRootComponent(refer_comp);

				if (up_comp._isMainFrameBody() && up_comp._is_top_frame)
				{
					// mainframe 초점이동된 키액션은 전부 예외처리
					win._is_fire_sys_focusin = true;
					win._is_fire_sys_keydown = false;

					// 문서 끝에서는 다시 활성
					if (keyCode == nexacro.Event.KEY_DOWN)
						nexacro._notifyAccessibilityInputElement("", env._a11ytype);

					return nexacro._stopSysEvent(evt);
				}
				else if (win._is_fire_sys_keydown === false)
				{
					win._keydown_element = null; // keydown 발생 안함

					if (up_comp._is_alive)
					{
						// 가상커서 상태 에서 keydown 없이 발생한 keyup event의 컴포넌트 별 keydown (탭, 상하 방향키 포함) 처리가 필요한 경우 사용
						const accesibility_keyaction = up_comp._isFireAccessibilityKeydown(keyCode, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.metaKey);
						if (accesibility_keyaction)
							up_comp._accessibility_keydown(up_elem, refer_comp, keyCode, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.metaKey);


						// 마지막 컴포넌트에 발생된 방향키 액션인지 확인하여 notify라벨 초점이동 방지
						if (keyCode == nexacro.Event.KEY_DOWN)
						{
							const _form = up_comp._getRootForm();
							if (_form && _form._getTabOrderLast(15) == up_comp)
								nexacro._notifyAccessibilityInputElement(null, env._a11ytype);
						}
					}
				}
			}

			if (keyCode === 0)// && evt.keyIdentifier == "Unidentified")
			{
				const keydown_info = nexacro._getKeydownInfo();
				if (keydown_info)
					keyCode = nexacro._getSysEventKeyCode(keydown_info);
			}
			var ret = win._on_sys_keyup(lastfocus_elem, keyCode, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.metaKey);
			// IME 입력 체크위해 위치 이동 (RP 104763)
			if (win._isFireSysKeydown(keycode, evt.code))
				win._is_fire_sys_keydown = false;
			return ret;
		}
		return false;
	};

    nexacro._syshandler_onactivate = function (_sysEvent, evt, context)
	{
		const { win } = context;
		if (win && win._on_sys_activate)
		{
			// 이미 window가 active 되고 last focused가 nexacro의 web 컴포넌트인 경우 컴포넌트간 이동으로 판단
			// last focused를 초기화 하여 focus 이동된 element로 설정되도록 함
			if (win._is_active_window && nexacro._isWebTypeElement(win._last_focused_elem))
			{
				win._last_focused_elem = null;
			}
			const ret = win._on_sys_activate(_sysEvent, evt);
			win._fire_activate = true;
			return ret;
		}
		return false;
	};

	nexacro._syshandler_ondeactivate = function (_sysEvent, evt, context)
	{
		const { win } = context;
		if (!win) return false;

		win._fire_activate = true;

		if (win && win._fire_activate)
		{
			win._fire_activate = false;
			const doc = win._dest_doc;
			if (doc)
			{
				const active_node = win._dest_doc.activeElement;

				if (active_node)
				{
					const active_elem = active_node._linked_element;
					if (active_elem && /*active_elem instanceof nexacro._WebBrowserPluginElement*/nexacro._isWebTypeElement(active_elem))
					{
						if (win._is_alive)
						{
							const comp = active_elem.component ? active_elem.component : active_elem.owner_elem ? active_elem.owner_elem.linkedcontrol : null;
							nexacro._checkClosePopupComponent(comp, true);
							nexacro.__setLastFocusedElement(active_elem);
						}
						return false;
					}
				}
			}

			if (win._on_sys_deactivate)
				return win._on_sys_deactivate();

		}
		return false;
	};

    nexacro.__isCustomEvent = function (evt)
	{
		if (evt && evt instanceof CustomEvent)
			return true;
		return false;
	};

	nexacro.__getCustomEventDetail = function (evt)
	{
		return evt.detail ? evt.detail : {}
	};

	nexacro._syshandler_onbeforeclose = function (_sysEvent, evt, context)
	{
		const { win } = context;
		let confirm_message;

		if (win && win._on_sys_beforeclose)
			confirm_message = win._on_sys_beforeclose();

		if (confirm_message !== undefined && confirm_message !== "" && confirm_message !== null)
		{
			if (evt)
				evt.preventDefault();
			return confirm_message;
		}
	};

	nexacro._syshandler_onclose = function (_sysEvent, evt, context)
	{
		const { win } = context;
		let ret = false;
		if (win)
		{
			_sysEvent._stopDocEventHandler();
			const isallclose = !nexacro.__isCustomEvent(evt)

			if (win._on_sys_close)
			{

				const app = win.getRootInstance(); // chk
				if (isallclose)
				{
					const env = win._getEnvironment();
					if (env)
					{
						env._getApplication()?.on_fire_onexit();
					}					
				}
				else
				{
					app.on_fire_onclose();
				}



				ret = win._on_sys_close(isallclose);
			}
			if (isallclose)
				nexacro._finalizeGlobalObjects(window);
			_sysEvent.clearAll(isallclose);

			return ret;
		}

		return false;
	};

	nexacro._syshandler_onresize = function (_sysEvent, evt, context) //window resize
	{
		const { win } = context;
		let ret = false;
		let h, w;
		if (win)
		{
			if (this._is_reseting_viewport)
			{
				nexacro._is_reseting_viewport = false;
				return;
			}


			if (nexacro.__isCustomEvent(evt))
			{
				const { left, top, x, y, width, height, paddingLeft, paddingTop, contentsWidth, contentsHeight } = evt.detail.rect;
				w = contentsWidth;
				h = contentsHeight;
				// %%%
			}
			else
			{
				w = nexacro._getContainerHandleClientWidth(win.handle);
				h = nexacro._getContainerHandleClientHeight(win.handle);
			}

			const env = win._getEnvironment();
			if (w != win.clientWidth || h != win.clientHeight)
			{	
				const last_focused_elem = win._last_focused_elem;

				const is_active = win._is_active_window;
				const is_web_elem = win._doc ? nexacro._isWebTypeElement(win._doc.activeElement._linked_element) : false;

				// onresize_before
				if (is_active || is_web_elem)
				{
					const layout_manger = env._getLayoutManager();
					const addressbar_height = 100;	//Temporary
					let is_keypad_switch = false;		// keypad가 열릴상황판단
					let do_scrollintoview = true;	// 대상이 보이도록 스크롤할지 여부
					const is_input_focused = last_focused_elem && last_focused_elem.isInputElement() ? true : false;

					if (nexacro._OS == "Android" || nexacro._AndroidDesktopMode == true)
					{
						is_keypad_switch = (is_input_focused || is_web_elem) && (w == win.clientWidth && h < win.clientHeight - addressbar_height);
						layout_manger.setLayoutChangeFlag(is_keypad_switch ? true : undefined);

						if (is_keypad_switch)
						{
							if (nexacro._BrowserExtra == "SamsungBrowser")
							{
								if (win._previous_client_height && (win._previous_client_height <= h || win._previous_client_height - h < addressbar_height))
									do_scrollintoview = false;

							}
							if (last_focused_elem instanceof nexacro.TextAreaElement)
							{
								if (win.clientHeight < last_focused_elem.height)
									do_scrollintoview = false;
							}

							if (do_scrollintoview)
							{
								const handle = last_focused_elem.handle;
								if (handle)
									nexacro._requestAnimationFrame(win, function () { nexacro.__setDOMNode_ScrollintoView(handle, false); });

							}
						}

					}
					else if (nexacro._OS == "iOS")
					{
						if (nexacro._Browser == "MobileSafari")
						{
							if (nexacro._SystemType == "ipad" && (parseFloat(nexacro._OSVersion) >= 13) || nexacro._MobileDesktopMode)
							{
								const is_touchend_reason = nexacro._getLastEventName() == "touchend" ? true : false;
								if (is_input_focused || is_web_elem || is_touchend_reason)
								{
									nexacro._setLastEventName("");
									// 키패드 변경으로 발생한 resize인지를 판단
									if (w == win.clientWidth)
									{
										if (h < win.clientHeight)
											is_keypad_switch = true;

										else if (h != win.clientHeight && win._previous_client_height == win.clientHeight)
											is_keypad_switch = true;

									}
								}
							}
							else
								is_keypad_switch = (is_input_focused || is_web_elem) && (w == win.clientWidth && h < win.clientHeight - addressbar_height);

							layout_manger.setLayoutChangeFlag(is_keypad_switch ? true : undefined);
						}
					}
					if (is_keypad_switch)
					{
						win._previous_client_height = h;
						return false;
					}

				}

				ret = win._on_sys_resize(w, h);
				if (nexacro._OS == "iOS" && parseFloat(nexacro._OSVersion) >= 8)
				{
					// iOS8 에서 화면 회전 직후 resize하면, body가 이상하게 스크롤되는 버그가 있음
					// 화면이 핀치줌으로 확대되지 않은 상태일 경우 보정처리
					if (window.innerWidth == nexacro._getContainerHandleClientWidth(win.handle) &&
						window.innerHeight == nexacro._getContainerHandleClientHeight(win.handle))
					{
						// 확대되지 않았다.
						document.body.scrollLeft = 0;
					}
				}
			}
			nexacro._checkInformation(env?._init_info);
			win._previous_client_height = h;

		}
		return ret;
	};

	nexacro._syshandler_onmove = function (_sysEvent, evt, context) //window move
	{
		const { win } = context;

		if (win)
		{
			const _win_handle = win.handle;
			const old_x = win.left, old_y = win.top;
			let x = nexacro._getContainerHandlePosX(_win_handle);
			let y = nexacro._getContainerHandlePosY(_win_handle);

			if (nexacro._Browser != "Gecko" && x == old_x && y == old_y)
			{
				// current window 좌표 반영
				const _win_left = _win_handle.screenX ? _win_handle.screenX : _win_handle.screenLeft;
				const _win_top = _win_handle.screenY ? _win_handle.screenY : _win_handle.screenTop;

				if (nexacro._isNull(x) || x != _win_left)
				{
					x = _win_left;
				}

				if (nexacro._isNull(y) || y != _win_top)
				{
					y = _win_top;
				}
			}

			if (x != old_x || y != old_y)
			{
				//nexacro._gap_client_width = x;
				//nexacro._gap_client_height = y;
				return win._on_sys_move(x, y);
			}
		}
		return false;
	};

	nexacro._syshandler_onload = function (_sysEvent, evt, context)
	{
		const { win } = context;
		if (win)
		{
			if (win._on_sys_load)
				return win._on_sys_load(_sysEvent.container ? _sysEvent.container : window);
		}
		return false;
	};

	nexacro._syshandler_onnetworkstatuschange = function (_sysEvent, evt, context)
	{
	    const { win } = context;
	    if (win)
	    {
	        var _is_online = evt.type === 'online' ? true : false;
	        if (win._on_sys_onnetworkstatuschange)
	            return win._on_sys_onnetworkstatuschange(_sysEvent.container ? _sysEvent.container : window, "onnetworkstatuschange", _is_online); // handle, eventid, isonline
	    }
	    return false;
	};

	nexacro._syshandler_oncontextmenu = function (_sysEvent, evt, context)     
	{
		let ret = true;
		const { win, elem } = context;
		if (win && elem)
		{
			ret = win._on_sys_contextmenu(elem, nexacro._getContextButton(evt.button), evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, evt.metaKey);
			if (!ret || (win.root._is_popup_frame && elem.tagName != "TEXTAREA" && elem.tagName != "INPUT" && elem.tagName != "IMG"))
				ret = nexacro._stopSysEvent(evt);
			else
				ret = true;
		}
		return ret;
	};

	nexacro._syshandler_ondragstart = function (_sysEvent, evt, context)
	{
		return nexacro._stopSysEvent(evt);
	};

	nexacro._syshandler_ondragenter = function (_sysEvent, evt, context)
	{
		let { win, elem, release_elem } = context;
		const from_elem = release_elem;

		let ret = true;
		if (win && elem)
		{
			let end_elem = from_elem ? win._findCommonParentElement(elem, from_elem) : win._findRootElement();
			if (!end_elem && !(end_elem = win._findPopupElement(elem)))
				end_elem = win._findRootElement();

			const fire_elem = [];

			while (elem && elem !== end_elem)
			{
				if (elem.linkedcontrol)
				{
					fire_elem.push(elem);
				}
				elem = elem.parent_elem; // 다음 부모로 이동
			}


			const filelist = evt.dataTransfer ? evt.dataTransfer.files : null;
			for (let i = fire_elem.length - 1; i >= 0; i--)
			{
				ret = win._on_sys_dragenter(fire_elem[i], from_elem, evt.button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, filelist, evt.metaKey);
			}
		}
		return ret;
	};

	nexacro._syshandler_ondragleave = function (_sysEvent, evt, context)
	{
		let ret = true;
		let { win, elem, release_elem } = context;
		const to_elem = release_elem;

		if (win && elem)
		{
			let end_elem = to_elem ? win._findCommonParentElement(elem, to_elem) : win._findRootElement();
			if (!end_elem && !(end_elem = win._findPopupElement(elem)))
				end_elem = win._findRootElement();

			const filelist = evt.dataTransfer ? evt.dataTransfer.files : null;
			for (; elem && elem != end_elem; elem = elem.parent_elem)
			{
				if (elem.linkedcontrol)
					ret = win._on_sys_dragleave(elem, to_elem, evt.button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, filelist, evt.metaKey);
			}
		}

		return ret;
	};

	nexacro._syshandler_ondragover = function (_sysEvent, evt, context)
	{
		evt.stopPropagation();
		evt.preventDefault();
		const { win, elem } = context;
		if (win && elem)
		{
			const filelist = evt.dataTransfer ? evt.dataTransfer.files : null;
			return win._on_sys_dragover(elem, evt.button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, filelist, evt.metaKey);
		}
		return true;
	};

	nexacro._syshandler_ondrop = function (_sysEvent, evt, context)
	{
		evt.stopPropagation();
		evt.preventDefault();
		const { win, elem } = context;

		if (win && elem)
		{
			//const filelist = evt.dataTransfer ? evt.dataTransfer.files : null;
			const filelist = evt.dataTransfer ? (evt.dataTransfer.items ? evt.dataTransfer.items : evt.dataTransfer.files) : null;
			return win._on_sys_drop(elem, evt.button, evt.altKey, evt.ctrlKey, evt.shiftKey, evt.clientX, evt.clientY, evt.screenX, evt.screenY, evt.offsetX, evt.offsetY, filelist, evt.metaKey);
		}
		return true;
	};

	nexacro._syshandler_onanimationstart = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (win && elem)
			return win._on_sys_animationstart(elem, evt.animationName, evt.elapsedTime); // , evt.pseudoElement);
		return false;
	};

	nexacro._syshandler_onanimationend = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (win && elem)
			return win._on_sys_animationend(elem, evt.animationName, evt.elapsedTime); // , evt.pseudoElement);
		return false;
	};

	nexacro._syshandler_onanimationiteration = function (_sysEvent, evt, context)
	{
		const { win, elem } = context;
		if (win && elem)
			return win._on_sys_animationiteration(elem, evt.animationName, evt.elapsedTime); // , evt.pseudoElement);
		return false;
	}

	nexacro._syshandler_onorientationchange = function (_sysEvent, evt, context)
	{
		const { win } = context;
		if (win)
		{
			const mobileorientation = nexacro._getMobileOrientation();
			nexacro.System.mobileorientation = mobileorientation;

			const env = win._getEnvironment();
			const zoomfactortype = env?._curscreenzoomfactortype;
			if (zoomfactortype == "auto")
				nexacro.__setViewportScale(env);			
			win._on_sys_orientationchange(mobileorientation);
		}
	};

	nexacro._syshandler_onselectstart = function (_sysEvent, evt, context)
	{
		//const { win, elem } = context;
		const node = evt.target;
		if (node &&
			((node.tagName == "INPUT" && (node.type == "text" || node.type == "password" || node.id.indexOf("simpleinput") >= 0)) ||
				node.tagName == "TEXTAREA")) 
		{
			return true;
		}
	};

    if (nexacro._isTouchInteraction)
    {
        nexacro._doc_init_html = "<html lang=\"" + nexacro._BrowserLang.substr(0, 2) + "\">\n"
            + "<head>\n"
            + "<style>\n"
            + "div {\n"
            + "-moz-user-select:none;\n"
            + "-webkit-user-select:none;\n"
            + "-webkit-touch-callout:none;\n"
            + "-webkit-appearance:none;\n"
            + "-webkit-tap-highlight-color:rgba(0,0,0,0);\n"
            + "outline: none;\n"
            + "}\n"
            + "</style>\n"
            + "</head>\n"
            + "<body style='margin:0;border:none;'>\n"
            + "<script type='text/javascript'>\n"
            + "nexacro = parent.nexacro;"
            + "nexacro.nexacro_HTMLSysEvent={};\n"
            + "nexacro._initHTMLSysEvent(window, document);"
            + "</script>\n"
            + "</body>\n"
            + "</html>";
    }
    else
    {
        nexacro._doc_init_html = "<html lang=\"" + nexacro._BrowserLang.substr(0, 2) + "\">\n"
            + "<head>\n"
            + "<style>\n"
            + "div {\n"
            + "outline: none;\n"
            + "}\n"
            + "</style>\n"
            + "</head>\n"
            + "<body style='margin:0;border:none;'>\n"
            + "<script type='text/javascript'>\n"
            + "nexacro = parent.nexacro; if (!nexacro) nexacro = window.nexacro; if (!nexacro) nexacro = window.opener.nexacro;"
            + "nexacro.nexacro_HTMLSysEvent={};\n"
            + "nexacro._initHTMLSysEvent(window, document);"
            + "nexacro._preparePopupManagerFrame(window);"
            + "</script>\n"
            + "</body>\n"
            + "</html>";
    }

    nexacro._createWindowHandle = function (parent_win, target_win, name, left, top, width, height, resizable, layered, taskbar, is_main, env)
	{
		/*parent_win : nexacro._Window*/
		const _rootwindow = nexacro._getMainWindowHandle(); /*browser window*/
		let _win_handle = null;

		if (is_main == true)
		{
			// container를 찾는 부분
			const _handle = nexacro._getAppContainerDivHandle(target_win);
			_win_handle = _handle ? _handle : _rootwindow;
		}
		else
		{
			var parent_handle = null;
			if (parent_win) parent_handle = parent_win.root._control_element.handle;
			_win_handle = nexacro.__createWindowHandle(parent_handle, target_win, name, left, top, width, height, resizable, layered, taskbar);

			// IE6에서 POPUP창이 차단되어 있으면 handle이 null나옴 (Popup 창 관련 사용자 에러발생해줘야 함.)
			if (!_win_handle) return;
		}

		//const env = nexacro.getEnvironment();
		if (env && env._allow_default_pinchzoom)
		{
			if (nexacro._isDesktop())
			{
				env._zoom_factor = (nexacro._getDeviceWidth() * 100) / Math.abs(parseInt(env._desktopscreenwidth));  //? 필요한가??
				//nexacro._applyDesktopScreenWidth();
			}
			else if (nexacro._Browser == "MobileSafari")
			{
				if (_win_handle == _rootwindow)
				{
					var node_style = nexacro._getWindowDocumentHandle(_win_handle).documentElement.style;
					nexacro.__setDOMStyle_OverscrollBehavior(node_style, "none");
					if (nexacro._BrowserVersion <= 16 || nexacro._Browser == "Chrome")
						nexacro.__setDOMStyle_Overflow(node_style, "hidden");
				}
			}
		}

		if (env)
			env._calcZoomfactor();

		nexacro.__setViewportScale(env);
		nexacro.__insertInputtypeDateCSSStyle();

		nexacro._setLinkedWindow(_win_handle, target_win)
		target_win.attachHandle(_win_handle);
		if (!is_main)
		{
			_rootwindow.setTimeout(function () { nexacro.__fireHTMLEvent(_win_handle.document.body, 'load', 'onload'); }, 10);
		}

		nexacro.__refreshWindowSize(_rootwindow); //iOS refresh 버튼 클릭시 사이즈 작아지는 현상
	};

    nexacro._clearLinkedWindow = function (handle)
	{
		if (nexacro._ishandleWindow(handle) && handle._linked_window)
		{
			delete handle._linked_window;
		}
	};

	nexacro._getLinkedWindow = function (handle)
	{
		let win = nexacro.__MFEAPI._getLinkedWindow(handle);
		return win ? win : handle._linked_window;
	};
	
	nexacro._setLinkedWindow = function (handle, target_win)
	{
		if (nexacro._ishandleWindow(handle))
		{
			handle._linked_window = target_win;
		}

	};

	nexacro._createOpenWindowHandle = function (parent_win, name, formurl, left, top, width, height, resizable, layered, taskbar, is_main, parentframe, frameopener, arr_arg, ext_openstyles, openstyles, close_callback, env)
	{
		//var _win_handle = null;
		var parent_handle = null;
		if (parent_win) parent_handle = parent_win.root._control_element.handle;
		return nexacro.__createOpenWindowHandle(parent_handle, name, formurl, left, top, width, height, resizable, layered, taskbar, parent_win, parentframe, frameopener, arr_arg, ext_openstyles, openstyles, close_callback, env);
	};

	nexacro.__createOpenWindowHandle = function (_handleParent, name, formurl, left, top, width, height, resizable, /*[nouse]*/layered, /*[nouse]*/taskbar, parentwin, parentframe, frameopener, arrarg, ext_openstyles, openstyles, close_callback, env)
	{
		//screeninfo, cssurl 전달
		let screeninfo = env?._curscreen;
		let cssurls = env?._cssurls;
		let popupframeoptions = {
			"_parentframe": parentframe,
			"_opener": frameopener,
			"_args": arrarg,
			"_close_callback": close_callback,
			"_openstyles": openstyles,
			"_formurl": formurl,
			"_left": left,
			"_top": top,
			"_width": width,
			"_height": height,
			"_screeninfo": screeninfo,
			"_cssurls": cssurls
		};

		let uniquestoragevalue = env?._getUniqueLocalStorageValue();
		if (left == null)
			left = Math.floor((screen.availWidth - width) / 2);

		if (top == null)
			top = Math.floor((screen.availHeight - height) / 2);

		const dochandle = _handleParent ? _handleParent.ownerDocument : null;
		let _parent_win = dochandle ? (dochandle.defaultView || dochandle.parentWindow) : null;
		let _window;
		if (!_parent_win)
		{
			//const handle = nexacro._getMainWindowHandle();
			//_parent_win = handle ? handle : window;
			_window = nexacro._findWindow(nexacro._getMainWindowHandle());
			_parent_win = _window ? _window.handle : window;
		}
		else
		{
			_window = nexacro._findWindow(_parent_win);
		}
		if (!_window && !nexacro.isglobalmodule)
		{
			_window = parentwin;
		}


		let _win_handle;
		let opt = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ","
			+ "directories=no,scrollbars=no,"
			+ "resizable=" + (resizable ? "yes" : "no");

		opt += "," + ext_openstyles;

		let popupurl = "./popup.html";
		let localCacheUrlCheck = false;   // hybrid이고 localcacheurl이 존재할 때만 true

		if ((nexacro._isHybrid && nexacro._isHybrid() || nexacro._macOSWebView) && env?._hasLocalCacheUrl(popupurl))
			localCacheUrlCheck = true;

		if (globalThis.chrome && globalThis.chrome.webview)
		{
			//function (_handleParent, name, formurl, left, top, width, height, resizable, /*[nouse]*/layered, /*[nouse]*/taskbar, parentwin, parentframe, frameopener, arr_arg, ext_openstyles)
			var params = {
				type: "open",
				left: left, top: top, width: width, height: height,
				resizable: resizable, layered: layered, taskbar: taskbar, noactivate: false
			};

			var hybridHandle = nexacro._messageToNative(_parent_win._hybridHandle, "NexacroWindow", "_createWindow", params, true, true);
		}

		if (formurl)
		{
			popupurl += "?formname=" + encodeURIComponent(formurl);
			popupurl += "&framename=" + name;
			popupurl += "&loadtime=" + uniquestoragevalue; // open 창에서도 localstorage uniquekey 유지하기 위해 
			if (globalThis.chrome && globalThis.chrome.webview || nexacro._macOSWebView)
			{
				popupurl += "&handle=" + hybridHandle; //
				popupurl += "&type=open"; //
			}
		}


		//popupframe info 
		if (!_parent_win._nexacro_popupframeoption)
			_parent_win._nexacro_popupframeoption = {};

		_parent_win._nexacro_popupframeoption[name] = popupframeoptions;

		let url;		
		if (localCacheUrlCheck)
		{			
			url = nexacro._transfullurl(env?._localcache_path, popupurl, env?._p_checkversion, env?._p_version);
		}
		else
			url = nexacro._transfullurl(env?.getProjectPath(), popupurl, env?._p_checkversion, env?._p_version);


		_parent_win.__getopenerinstance = () =>
		{
			try
			{
				return {
					nexacro, system, "application": env?._getApplication(), "opener_ref": !nexacro.isglobalmodule ? parentframe : null
				}
			}
			finally
			{
				// 호출과 즉시 delete 
				delete _parent_win.__getopenerinstance;
			}
		};
		// 같은 이름을 가질 확률이 존재하기 때문에 별도로 띄움
		let realname = name + !nexacro.isglobalmodule ? new Date().getTime().toString() : "";
		_win_handle = _parent_win.open(url, realname, opt);

		if (globalThis.chrome && globalThis.chrome.webview)
		{
			//smilekkr's wv;hybridHandle 이름 및 전체적인 구성은 js 머지 후 반드시 결정/변경 해야 함;
			_win_handle._hybridHandle = hybridHandle; //
		}

		if (!_win_handle)
			return null;

		nexacro.__createOpenWindowHandleAfter(_win_handle);

		return _win_handle;
	};

    if (nexacro._OS == "iOS")
    {
        nexacro.__createOpenWindowHandleAfter = function (_win)
        {
            if (!_win)
            {
                return;
            }

            const callback_load = function ()
            {
                const timeout = 5000;
                const open_doc = _win.document;
                const open_frame = nexacro._getLinkedWindow(_win);

                if (open_doc && open_frame && open_frame._is_active_window !== true)
                {
                    const start_time = new Date().getTime();
                    const start_node = open_doc.all.length;

                    const timer_id = setInterval(function ()
                    {
                        const end_time = new Date().getTime();
                        const end_node = open_doc.all.length;
                        if (start_node != end_node)
                        {
                            clearInterval(timer_id);
                            open_frame._on_sys_activate();
                            open_frame.setFocus();
                        }
                        else
                        {
                            // Timeout
                            if ((end_time - start_time) > timeout)
                            {
                                clearInterval(timer_id);
                            }
                        }
                    }, 100);
                }
            }

            _win.addEventListener("load", callback_load);
        };
    }
    else
    {
        nexacro.__createOpenWindowHandleAfter = nexacro._emptyFn;
    }

    nexacro.__createWindowHandle = function (_handleParent, target_win, name, left, top, width, height, resizable, /*[nouse]*/layered, /*[nouse]*/taskbar)
	{
		if (left == null)
			left = Math.floor((screen.availWidth - width) / 2);

		if (top == null)
			top = Math.floor((screen.availHeight - height) / 2);

		const dochandle = _handleParent ? _handleParent.ownerDocument : null;
		const _parent_win = dochandle ? (dochandle.defaultView || dochandle.parentWindow) : window;
		let _win_handle, opt;
		/*if (false && _parent_win.showModelessDialog)
		{
			// TODO showModeless
			// window_handle에 접근하려하면 Access Denied가 발생함.
			// -> 동일 domain으로 오픈해야 한다.
			opt = "dialogHeight:" + height + "px" + "; dialogLeft:" + left + "px" + "; dialogTop:" + top + "px" + "; dialogWidth:" + width + "px"
					+ "; center:no" + (resizable ? "; resizable:yes" : "")
					+ "; status:no";
			_win_handle = _parent_win.showModelessDialog(document.URL + "empty.html", { nexacro: _parent_win.nexacro, parent: _parent_win }, opt);
		}
		else*/
		{
			opt = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ","
				+ "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,"
				+ "resizable=" + (resizable ? "yes" : "no");
			_win_handle = _parent_win.open("", name, opt);
		}

		// IE6에서 POPUP창이 차단되어 있으면 handle이 null나옴 (Popup 창 관련 사용자 에러발생해줘야 함.)
		if (!_win_handle)
			return null;

		// Initialized nexacro Object
		if (!_parent_win.nexacro && !nexacro.isglobalmodule)
		{
			_win_handle.nexacro = nexacro;
			_win_handle.system = system;
			_win_handle._application = nexacro.getApplication();
		}
		else
		{
			_win_handle.nexacro = _parent_win.nexacro;
			_win_handle.system = _parent_win.system;
			_win_handle._application = _parent_win.nexacro.getApplication();
		}


		nexacro._setLinkedWindow(_win_handle, target_win);
		// clear all document -- set as about:blank && remain domain as nexacro._open_window_url
		_win_handle.document.open();

		// _win_handle에 설정한 GlobalVariable(nexacro,system, ..)이 IE8에서는 제대로 설정되지 않음. 2013.05.31 neoarc
		// document같은 다른 곳에 담아 넘겨야 할 듯.

		_win_handle.document.write(nexacro._doc_init_html);
		_win_handle.document.close();

		return _win_handle;
	};

	nexacro._createModalWindowHandle = function (parent_win, name, formurl, left, top, width, height, resizable, layered, parentframe, frameopener, arrarg, ext_openstyles, openstyles, env)
	{
		let popupframeoptions = {
			"_parentframe": parentframe,
			"_opener": frameopener,
			"_args": arrarg,
			"_openstyles": openstyles,
			"_formurl": formurl,
			"_left": left,
			"_top": top,
			"_width": width,
			"_height": height
		};

		if (left == null)
			left = Math.floor((nexacro.System.availWidth - width) / 2);
		if (top == null)
			top = Math.floor((nexacro.System.availHeight - height) / 2);

		let dochandle = null;
		if (parent_win)
		{
			dochandle = parent_win.root._control_element.handle ? parent_win.root._control_element.handle.ownerDocument : null;
		}

		let _parent_win = dochandle ? (dochandle.defaultView || dochandle.parentWindow) : null;
		let _window;
		if (!_parent_win)
		{
			_window = nexacro._findWindow(nexacro._getMainWindowHandle());
			_parent_win = _window ? _window.handle : window;
		}
		else
		{
			_window = nexacro._findWindow(_parent_win);
		}

		let _win_handle;
		let opt = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ","
			+ "directories=no,scrollbars=no,"
			+ "resizable=" + (resizable ? "yes" : "no");

		opt += "," + ext_openstyles;

		let popupurl = "./popup.html";
		let localCacheUrlCheck = env?._hasLocalCacheUrl(popupurl);
		
		var params = {
			type: "modal",
			left: left, top: top, width: width, height: height,
			resizable: resizable, layered: layered, taskbar: false, noactivate: false
		};

		var hybridHandle = nexacro._messageToNative(dochandle ? _parent_win._hybridHandle : "", "NexacroWindow", "_createWindow", params, true, true);

		if (formurl)
		{
			let uniquestoragevalue = env?._getUniqueLocalStorageValue();
			popupurl += "?formname=" + encodeURIComponent(formurl);
			popupurl += "&framename=" + name;
			popupurl += "&loadtime=" + uniquestoragevalue; // open 창에서도 localstorage uniquekey 유지하기 위해 
			popupurl += "&handle=" + hybridHandle; //
			popupurl += "&type=modal"; //
		}

		//popupframe info 
		if (!_parent_win._nexacro_popupframeoption)
			_parent_win._nexacro_popupframeoption = {};

		_parent_win._nexacro_popupframeoption[name] = popupframeoptions;

		let url;
		if (localCacheUrlCheck)
		{			
			url = nexacro._transfullurl(env?._localcache_path, popupurl, env?._p_checkversion, env?._p_version);
		}
		else
			url = nexacro._transfullurl(env?.getProjectPath(), popupurl, env?._p_checkversion, env?._p_version);


		_parent_win.__getopenerinstance = () =>
		{
			try
			{
				return {
					nexacro, system, "application": env?._getApplication(), "opener_ref": !nexacro.isglobalmodule ? parentframe : null
				}
			}
			finally
			{
				// 호출과 즉시 delete 
				delete _parent_win.__getopenerinstance;
			}
		};

		let realname = name + !nexacro.isglobalmodule ? new Date().getTime().toString() : "";
		_win_handle = _parent_win.open(url, realname, opt);

		nexacro._messageToNative(hybridHandle, "NexacroWindow", "_modalWindow", params, true, true);

		//console.log("after modal\n");

		//smilekkr's wv;hybridHandle 이름 및 전체적인 구성은 js 머지 후 반드시 결정/변경 해야 함;
		_win_handle._hybridHandle = hybridHandle; //

		if (!_win_handle)
			return null;

		return _win_handle.returnValue;
	};

	nexacro._createModalAsyncWindowHandle = function (parent_win, target_win, name, left, top, width, height, resizable, layered, lockmode, env)
	{
		let parent_handle = null;
		if (parent_win)
			parent_handle = parent_win.root._control_element.handle;
		const _win_handle = nexacro.__createModalAsyncWindowHandle(parent_handle, target_win, name, left, top, width, height, resizable, layered, lockmode, env);

		// IE6에서 POPUP창이 차단되어 있으면 handle이 null나옴 (Popup 창 관련 사용자 에러발생해줘야 함.)
		if (!_win_handle) return;

		_win_handle.document.body.style.overflow = "visible";
		nexacro._setLinkedWindow(_win_handle, target_win);

		// [RP_33521] by ODH :  IE 8이하의 경우, main window에서 Open Window의 DOM을 create 하면 속도가 많이 느림.
		//                      때문에 Open Window의 Event를 fire하여 Open Window가 DOM Create 하도록 함.
		//  nexacro._window = target_win;

		target_win.attachHandle(_win_handle);
		setTimeout(function () { nexacro.__fireHTMLEvent(_win_handle.document.body, 'load', 'onload'); }, 10);
	};

	nexacro.__createModalAsyncWindowHandle = function (_handleParent, target_win, name, left, top, width, height, resizable, layered, lockmode, env)
	{
		if (left == null)
			left = Math.floor((screen.availWidth - width) / 2);
		if (top == null)
			top = Math.floor((screen.availHeight - height) / 2);

		const opt = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ","
			+ "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,"
			+ "resizable=" + (resizable ? "yes" : "no");

		const dochandle = _handleParent ? _handleParent.ownerDocument : null;
		const _parent_win = dochandle ? (dochandle.defaultView || dochandle.parentWindow) : window;
		const _win_handle = _parent_win.open("", name, opt);

		// IE6에서 POPUP창이 차단되어 있으면 handle이 null나옴 (Popup 창 관련 사용자 에러발생해줘야 함.)
		if (!_win_handle) return null;

		// Initialized nexacro Object

		if (_parent_win)
		{
			if (!_parent_win.nexacro && !nexacro.isglobalmodule)
			{
				_win_handle.nexacro = nexacro;
				_win_handle.system = system;
				_win_handle._application = env?._getApplication();
			}
			else
			{
				_win_handle.nexacro = _parent_win.nexacro;
				_win_handle.system = _parent_win.system;
				_win_handle._application = env?._getApplication();
			}
		}



		nexacro._setLinkedWindow(_win_handle, target_win);

		// clear all document -- set as about:blank && remain domain as nexacro._open_window_url
		_win_handle.document.open();
		_win_handle.document.write(nexacro._doc_init_html);
		_win_handle.document.close();

		return _win_handle;

	};

    nexacro._createModalAsyncCallbackHandler = function (_win_handle, frame)
	{
		if (frame._window_type != 3)
			return;

		// modal async window를 감시하고 완전히 닫힌 후에 callback을 실행한다.
		const main_handle = nexacro._getMainWindowHandle();

		// clearinterval 해줘야 하기때문에 frame object를 key로 사용
		const timer_handle = main_handle.setInterval(function ()
		{
			if (_win_handle && _win_handle.closed)
			{
				frame._runCallback();

				// Safari,Opera는 clearInterval시 수행중이던 함수도 중단되는것 같다.
				nexacro._removeModalAsyncCallbackHandler(frame);
			}
		}, 100);

		if (!nexacro._closedmodalasync_list)
			nexacro._closedmodalasync_list = [];

		nexacro._closedmodalasync_list.push([frame, timer_handle]);

	};

	nexacro._removeModalAsyncCallbackHandler = function (frame)
	{
		if (!nexacro._closedmodalasync_list)
			return;

		const list = nexacro._closedmodalasync_list;
		const list_length = list.length;
		for (let i = 0; i < list_length; i++)
		{
			const list_item = list[i];
			if (list_item[0] == frame)
			{
				const main_handle = nexacro._getMainWindowHandle();
				main_handle.clearInterval(list_item[1]);

				for (let j = i; j < list_length - 1; j++)
				{
					list[j] = list[j + 1];
				}
				list.pop();
				break;
			}
		}
	};

	nexacro._isWindowHandlePrepared = function (_win_handle)
	{
		const _win = nexacro._handletoWindow(_win_handle);
		return (_win.document.body !== null);
	};

	nexacro._closeWindowHandle = function (_win_handle)
	{
		if (_win_handle)
		{
			if (nexacro._ishandleWindow(_win_handle))
			{
				//nexacro._destroyManagerFrame() 이동 - popup과 따로 존재하므로 window별 매번 삭제
				if (nexacro._getMainWindowHandle() != _win_handle)
				{
					const _win = nexacro._handletoWindow(_win_handle);
					_win.open('', '_self');
					_win.close();
				}
			}
		}
	};

    nexacro._getMainWindowHandle = function ()
	{
		let win = window;
		while (win._popup === true)
		{
			win = win.opener || win.parent;
		}

		return win;
	};

    nexacro._getAppContainerDivHandle = function (target)
	{
		const root = target instanceof nexacro._Window ? target.root : target;

		if (Object.prototype.hasOwnProperty.call(root, "__containerhandle"))
		{
			return root.__containerhandle ? root.__containerhandle : nexacro.__MFEAPI._getContainer(root);
		}

		return null;
	};

	nexacro._isPopupWindowApp = function ()
	{
		return (window.opener) ? true : false;
	};

	nexacro._isWindowObject = function (_win)
	{
		return (_win instanceof nexacro._Window)
	};

    nexacro._ishandleWindow = function (_handle)
	{
		if (_handle && typeof _handle.document === "object" && _handle.document.defaultView)
			return true;

		return false;
	};

	nexacro._handletoWindow = function (_win_handle)
	{
		if (nexacro._ishandleWindow(_win_handle))
			return _win_handle;
		else
			return _win_handle.ownerDocument.defaultView;


	};
	
	nexacro._getWindowHandle = function (_win_handle)
	{
		const link_window = nexacro._getLinkedWindow(_win_handle);
		if (link_window && link_window._is_main)
			return nexacro._handletoWindow(_win_handle);

		return window;
	};

	nexacro._getWindowDocumentHandle = function (_win_handle)
	{
		const win = nexacro._handletoWindow(_win_handle);
		return win.document;
	};

	nexacro._getWindowDestinationHandle = function (_win_handle)
	{
		if (nexacro._ishandleWindow(_win_handle))
			return _win_handle.document.body;
		else
			return _win_handle;
	};

    nexacro._getWindowHandlePosX = function (_win_handle)
	{
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;


		if (nexacro._Browser == "Gecko") 
		{
			return win.mozInnerScreenX;
		}
		else
		{
			const link_window = nexacro._getLinkedWindow(_win_handle);
			return link_window.getOffsetClientPos(_win_handle).x;
		}

	};

    nexacro._getWindowHandlePosY = function (_win_handle)
	{
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		if (nexacro._Browser == "Gecko")
		{
			return win.mozInnerScreenY;
		}
		else
		{
			const link_window = nexacro._getLinkedWindow(_win_handle);
			return link_window.getOffsetClientPos(_win_handle).y;

		}

	};

    nexacro._getContainerHandlePosX = function (_win_handle)
	{
		const container = nexacro._isWindowObject(_win_handle) ? _win_handle.handle : _win_handle;
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		const winx = nexacro._getWindowHandlePosX(container);
		if (nexacro._ishandleWindow(container))
			return winx;
		else
		{
			const rect = nexacro._getContentRect(container);//container.getBoundingClientRect(); // nexacro._Window에 cache 되었으면 대체
			return winx + rect.x;
		}

	};

	nexacro._getContainerHandlePosY = function (_win_handle)
	{
		const container = nexacro._isWindowObject(_win_handle) ? _win_handle.handle : _win_handle;
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		const winy = nexacro._getWindowHandlePosY(container);
		if (nexacro._ishandleWindow(container))
			return winy;
		else
		{
			const rect = nexacro._getContentRect(container);//container.getBoundingClientRect(); // nexacro._Window에 cache 되었으면 대체
			return winy + rect.y;
		}
	};

    nexacro._getWindowHandleOuterWidth = function (_win_handle)
	{
		const win = nexacro._handletoWindow(_win_handle);
		if (nexacro._OS == "iOS" && parseFloat(nexacro._OSVersion) >= 8)
		{
			return win.document.documentElement.offsetWidth;
		}
		else if (nexacro._macOSWebView)
		{
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_getWindowWidth",
				params: {}
			};
			var jsonstr = JSON.stringify(json);
			var widthResult = nexacro.Device.exec(jsonstr, true);
			var width = parseInt(widthResult, 10);
			return width;
		}
		else
		{
			return win.outerWidth;
		}

	};

	nexacro._getWindowHandleOuterHeight = function (_win_handle)
	{
		const win = nexacro._handletoWindow(_win_handle);
		if (nexacro._OS == "iOS" && parseFloat(nexacro._OSVersion) >= 8)
		{
			return win.document.documentElement.offsetHeight;
		}
		else if (nexacro._macOSWebView)
		{
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_getWindowHeight",
				params: {}
			};
			var jsonstr = JSON.stringify(json);
			var heightResult = nexacro.Device.exec(jsonstr, true);
			var height = parseInt(heightResult, 10);
			return height;
		}
		else
		{
			return win.outerHeight;
		}
	};

	nexacro._getContainerHandleOuterWidth = function (_win_handle)
	{
		if (nexacro._ishandleWindow(_win_handle))
			return nexacro._getWindowHandleOuterWidth(_win_handle)
		else
			return _win_handle.offsetWidth;

	};

	nexacro._getContainerHandleOuterHeight = function (_win_handle)
	{
		if (nexacro._ishandleWindow(_win_handle))
			return nexacro._getWindowHandleOuterHeight(_win_handle)
		else
			return _win_handle.offsetHeight;
	};

	nexacro.__windowClientDimension = function (_win_handle, dimension, isHeight)
	{
		//const _tester = nexacro._device_exception_tester || nexacro._searchDeviceExceptionTable();
		const clientSize = _win_handle.document.documentElement[dimension];
		const innerSize = isHeight ? _win_handle.innerHeight : _win_handle.innerWidth;	

		if (nexacro._OS === "iOS" && (nexacro._Browser === "MobileSafari" || nexacro._Browser === "Chrome")) 
		{			
			if (nexacro._BrowserVersion > 11.2 || nexacro._MobileDesktopMode)
				return clientSize;

			else if (nexacro._SystemType === "ipad" && nexacro._isHybrid())
				return clientSize;

			else if (!nexacro._isHybrid())
			{
				const win = nexacro._findWindow(_win_handle);
				const env = win._getEnvironment();
				if (env._allow_default_pinchzoom /*|| (_tester && _tester.use_windowsize_as_bodysize)*/)
					return clientSize;
				else
					return innerSize;
			}
			else
				return innerSize;

		}
		else if (nexacro._BrowserExtra === "SamsungBrowser") 
		{
			const win = nexacro._findWindow(_win_handle);
			const env = win._getEnvironment();			
			if (env._allow_default_pinchzoom)
				return _win_handle.document.body[dimension];
			/*
			else if (_tester && _tester.use_windowsize_as_bodysize)
				return _win_handle.document.body[dimension];
			*/
			else
				return innerSize;

		}
		else 
		{
			return clientSize;
			/*
			if (nexacro._allow_default_pinchzoom) 
			{
				const bodySize = _win_handle.document.body[dimension];
				return bodySize > innerSize ? bodySize : innerSize;
			}
			//else if (_tester && _tester.use_windowsize_as_bodysize)
			//	return _win_handle.document.body[dimension];
			
			else
				return innerSize;
			*/
		}
	};

	nexacro._getWindowHandleClientWidth = function (_win_handle)
	{
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		return nexacro.__windowClientDimension(win, "clientWidth", false);
	};

	nexacro._getWindowHandleClientHeight = function (_win_handle)
	{
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		return nexacro.__windowClientDimension(win, "clientHeight", true);
	};

	nexacro._getWindowOverlayWidth = function (w)
	{
		const width_ = Math.max(
			document.body.scrollWidth,
			document.documentElement.scrollWidth
		);

		return Math.max(w, width_);
	};

	nexacro._getWindowOverlayHeight = function (h)
	{

		const height_ = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight
		);


		return Math.max(h, height_);
	};

    nexacro._getContainerHandleClientWidth = function (_win_handle)
	{
		const container = nexacro._isWindowObject(_win_handle) ? _win_handle.handle : _win_handle;
		if (nexacro._ishandleWindow(container))
			return nexacro._getWindowHandleClientWidth(container);
		else
		{
			const rect = nexacro._getContentRect(container);//container.getBoundingClientRect(); // nexacro._Window에 cache 되었으면 대체
			return rect.contentsWidth;
		}
	};

	nexacro._getContainerHandleClientHeight = function (_win_handle)
	{
		const container = nexacro._isWindowObject(_win_handle) ? _win_handle.handle : _win_handle;
		if (nexacro._ishandleWindow(container))
			return nexacro._getWindowHandleClientHeight(container);
		else
		{
			const rect = nexacro._getContentRect(container);//container.getBoundingClientRect(); // nexacro._Window에 cache 되었으면 대체
			return rect.contentsHeight;
		}
	};

	nexacro._getWindowHandleText = function (_win_handle)
	{
		var doc = _win_handle.document;
		return doc ? doc.title : "";
	};

	nexacro._setWindowHandleArea = function (_win_handle, x, y, w, h)
	{
		_win_handle.moveTo(x, y);
		_win_handle.resizeTo(w, h);
	};

	nexacro._setWindowHandlePos = function (_win_handle, x, y)
	{
		_win_handle.moveTo(x, y);

		if (globalThis.chrome && globalThis.chrome.webview)
		{
			var params = { x: x, y: y };
			nexacro._messageToNative("0000", "NexacroWindow", "_setWindowHandlePos", params, true);
		}
		else if (nexacro._macOSWebView)
		{
			var params = {
				x: x,
				y: y
			};
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_setWindowHandlePos",
				params: params
			};
			var jsonstr = JSON.stringify(json);
			nexacro.Device.exec(jsonstr);
		}
	};

	nexacro._setWindowHandleSize = function (_win_handle, w, h)
	{
		_win_handle.resizeTo(w, h);

		if (nexacro._macOSWebView)
		{
			var params = {
				width: w,
				height: h
			};
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_setWindowHandleSize",
				params: params
			};
			var jsonstr = JSON.stringify(json);
			nexacro.Device.exec(jsonstr);
		}
	};

	nexacro._setWindowHandleZIndex = function (_win_handle, zindex)
	{
		if (_win_handle.style)
			_win_handle.style.zIndex = zindex;
	};

	nexacro._findWindow = function (_win_handle)
	{
		return nexacro._getLinkedWindow(_win_handle);
	};

	nexacro._findContainerWindow = function (node)
	{
		try
		{
			const linked_element = nexacro.__findParentElement(node);

			if (linked_element)
			{
				const control = nexacro._findParentComponent(linked_element);
				const root = control._getRootObject(); // chk
				const handle = nexacro.__MFEAPI._getContainer(root);
				return nexacro._getLinkedWindow(handle);
			}
		}
		catch (e)
		{
			return null;
		}
	};

	nexacro._findDocumentWindow = function (_doc, node)
	{
		var _win_handle = (_doc.defaultView || _doc.parentWindow);
		let _win = nexacro._getLinkedWindow(_win_handle);
		if (!_win && node)
		{
			_win = nexacro._findContainerWindow(node);
		}

		return _win;

	};

	nexacro._isContainerDiv = function (handle)
	{
		if (handle && handle instanceof HTMLElement)
			return true;
		return false;
	};

	nexacro._isEmbeddedWindow = function (win)
	{
		let _win_handle = win.handle;

		let is_embedded;
		if (_win_handle)
		{
			if (nexacro._isContainerDiv(_win_handle))
			{
				_win_handle = _win_handle.ownerDocument.defaultView;
				is_embedded = _win_handle.parent.document != _win_handle.document;
			}
			else
				is_embedded = _win_handle.parent.document != _win_handle.document;

			if (is_embedded)
			{
				win._last_focused_elem = null;
				return true;
			}
		}

		return false;
	};

	nexacro._flashWindow = function (/*_win_handle, type, count, interval*/)
	{
	};

	nexacro._setMouseHovertime = function (/*mousehovertime*/)
	{
	};

	nexacro._setWindowHandleText = function (_win_handle, titletext)
	{
		var doc = _win_handle.document;

		if (doc)
		{
			return doc.title = titletext;
		}
	};

	nexacro._setWindowHandleStatusText = function (_win_handle, statustext)
	{
		if (window)
		{
			return window.status = statustext;
		}
	};

	nexacro._decodeBuffer = function (input)
	{
		let inBuf;
		if (input instanceof ArrayBuffer)
			inBuf = new Uint8Array(input);

		if (inBuf[0] != 0xff || inBuf[1] != 0xac) return null;

		const uint8ArrayToBase64 = function (uint8Array)
		{
			const CHUNK_SIZE = 8192;
			let result = '';

			for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE)
			{
				const chunk = uint8Array.subarray(i, i + CHUNK_SIZE);
				result += String.fromCharCode.apply(null, chunk);
			}

			return btoa(result);
		};

		var params = { input: uint8ArrayToBase64(inBuf) };
		if (globalThis.chrome && globalThis.chrome.webview)
		{
			return nexacro._messageToNative("0000", "nexacroapi", "_decodeBuffer", params, true, true);
		}
		else if (nexacro._macOSWebView)
		{
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_decodeBuffer",
				params: params
			};
			var jsonStr = JSON.stringify(json);
			return nexacro.Device.exec(jsonStr, true);
		}

		return null;
	};

	nexacro._setWindowHandleIconObject = function (_win_handle, icon)
	{
		var params = { value: icon.value, url: icon.url, sysbaseurl: icon._sysbaseurl, sysurl: icon._sysurl };
		if (globalThis.chrome && globalThis.chrome.webview)
		{
			nexacro._messageToNative("0000", "nexacroapi", "_setWindowHandleIconObject", params, true);
		}
		else if (nexacro._macOSWebView)
		{
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_setWindowHandleIconObject",
				params: params
			};
			var jsonStr = JSON.stringify(json);
			nexacro.Device.exec(jsonStr);
		}
	};

    nexacro._getMainWindowWidth = function (_win)
	{
		if (!nexacro._isTouchInteraction)
			return _win.clientWidth;
		else
		{
			const client_width = nexacro._getContainerHandleClientWidth(_win.handle);
			if (client_width !== 0)
				return client_width;

			const doc = _win._doc;
			if (nexacro._ishandleWindow(_win.handle) && doc)
			{
				const doc_elem = doc.documentElement;
				let width = 0;
				if (nexacro._OS == "iOS")
				{
					if (doc_elem.clientWidth)
						width = doc_elem.clientWidth;

					else if (_win.innerWidth)
						width = doc.body.clientWidth;

					else if (doc.body.clientWidth > 0)
						width = _win.innerWidth;
				}
				else
				{
					let w1 = _win.innerWidth ? _win.innerWidth : 0;
					let w2;
					let w3 = doc.body.clientWidth ? doc.body.clientWidth : 0;

					if (doc_elem && doc_elem.clientWidth)
						w2 = doc_elem.clientWidth ? doc_elem.clientWidth : 0;

					if (w1 < w2)
					{
						if (w2 < w3)
							width = doc.body.clientWidth;
						else
							width = doc_elem.clientWidth;
					}
					else
					{
						if (w1 < w3)
							width = doc.body.clientWidth;
						else
							width = _win.innerWidth;
					}
				}
				return width;
			}

			return _win.clientWidth;

		}
	};

	nexacro._getMainWindowHeight = function (_win)
	{
		if (!nexacro._isTouchInteraction)
			return _win.clientHeight;
		else
		{
			const client_height = nexacro._getContainerHandleClientHeight(_win.handle);
			if (client_height !== 0)
				return client_height;

			const doc = _win._doc;
			if (nexacro._ishandleWindow(_win.handle) && doc)
			{
				const doc_elem = doc.documentElement;
				let height = 0;
				if (nexacro._OS == "iOS")
				{
					if (doc_elem.clientHeight)
						height = doc_elem.clientHeight;

					else if (_win.innerHeight)
						height = doc.body.clientHeight;

					else if (doc.body.clientHeight > 0)
						height = _win.innerHeight;

				}
				else
				{
					let w1 = _win.innerWidth ? _win.innerWidth : 0;
					let w2;
					let w3 = doc.body.clientWidth ? doc.body.clientWidth : 0;

					if (doc_elem && doc_elem.clientWidth)
						w2 = doc_elem.clientWidth ? doc_elem.clientWidth : 0;

					if (w1 < w2)
					{
						if (w2 < w3)
							height = doc.body.clientHeight;
						else
							height = doc_elem.clientHeight;
					}
					else
					{
						if (w1 < w3)
							height = doc.body.clientHeight;
						else
							height = _win.innerHeight;
					}
				}
				return height;

			}

			return _win.clientHeight;

		}
	};

    nexacro._LocalStorageManager = class 
	{
		#projectpath = "";
		#uniquestoragevalue = undefined;
		#env = undefined;
		#localstorage = undefined;

		constructor(env)
		{
			this.#env = env;			
		}

		initLocalStorage(uniquestoragevalue = null)
		{	
			this.#uniquestoragevalue = uniquestoragevalue ? uniquestoragevalue : new Date().getTime();
			this.#localstorage = this._initLocalStorageObject();

			const env = this.#env;	
			const projecturl = env.getProjectPath();
			const projectpath = projecturl ? projecturl : env._getProjectBaseURL();
			this.#projectpath = projectpath;

			const storage = this.#localstorage;
			if (storage && storage.length > 0)
			{
				let pos = -1, key, type;

				for (let i = storage.length - 1; 0 <= i; i--)
				{
					key = storage.key(i);
					pos = key.indexOf(projectpath);
					if (pos >= 0)
					{
						type = key.substr(pos + projectpath.length);
						//type = 1: user, 2: engine, 3: envvar 4: envcookie 5:envhttp 6:envsecurecookie
						if (type != "user")
						{
							if (key.charAt(0) == "0")
							{
								this._toggleDuplicateKey(key, true);
							}
							else
							{
								const new_day = new Date(this.#uniquestoragevalue).getDate();
								const old_day = new Date(parseInt(key.substr(1, pos - 1))).getDate();
								if (new_day != old_day)
								{
									// day가 넘어가면 해당 stat이 1인 key 값들을 지운다
									storage.removeItem(key);
								}
							}
						}
					}
				}
			}

			return this.#uniquestoragevalue;
		}

		getUniqueStorageValue()
		{
			return this.#uniquestoragevalue;
		}

		// type = 1: user, 2: engine, 3: envvar 4: envcookie 5:envhttp 6:envsecurecookie
		getVariable(key, type, global)
		{
			const localstorage = this.#localstorage;
			if (localstorage)
			{
				const localstoragekey = this._getLocalStorageKey(type, global);

				if (localstoragekey)
				{
					let localstoragedata = localstorage.getItem(localstoragekey);
					let jsondata = {};
					if (localstoragedata)
					{
						if (nexacro._OS == "iOS" && nexacro._isHybrid && nexacro._isHybrid())
						{
							nexacro._setPreferencesValue(localstoragekey, localstoragedata);
						}
						jsondata = JSON.parse(localstoragedata);
					}

					const findkey = jsondata[key];
					if (findkey)
					{
						const vartype = findkey.type;
						const value = findkey.value;
						if (value && vartype)
						{
							if (vartype == "number")
								return Number(value);
							else if (vartype == "boolean")
								return (value == "true") ? true : false;
							else if (vartype == "nexacrodate")
							{
								const year = value.substring(0, 4);
								const month = value.substring(4, 6);
								const date = value.substring(6, 8);
								const hour = value.substring(8, 10);
								const minute = value.substring(10, 12);
								const second = value.substring(12, 14);
								const millisecond = value.substring(14, 16);
								return new nexacro.Date(year, month, date, hour, minute, second, millisecond);
							}
							else if (vartype == "date")
								return new Date(value);
							else if (vartype == "decimal")
								return new nexacro.Decimal(value);
							else if (vartype == "undefined")
								return "undefined";
							return value;
						}
					}
				}
			}
		}

		setVariable(key, value, type, global)
		{
			const localstorage = this.#localstorage;
			if (localstorage)
			{
				const localstoragekey = this._getLocalStorageKey(type, global);

				if (localstoragekey)
				{
					let localstoragedata = localstorage.getItem(localstoragekey);
					let jsondata = {};
					if (localstoragedata)
					{
						jsondata = JSON.parse(localstoragedata);
					}

					let vartype, findkey = jsondata[key];
					if (findkey)
					{
						vartype = (typeof value);
						if (vartype == "object")
						{
							if (value instanceof nexacro.Date)
								vartype = "nexacrodate";
							else if (value instanceof Date)
								vartype = "date";
						}
						if (findkey.type == vartype && findkey.value == value)
							return true;
						findkey.type = vartype;
						findkey.value = value + "";
					}
					else
					{
						vartype = (typeof value);
						if (vartype == "object")
						{
							if (value instanceof nexacro.Date)
								vartype = "nexacrodate";
							else if (value instanceof Date)
								vartype = "date";
							else if (value instanceof nexacro.Decimal)
								vartype = "decimal";
						}
						jsondata[key] = { "type": vartype, "value": value + "" };
					}

					if (nexacro._OS == "iOS" && nexacro._isHybrid && nexacro._isHybrid())
					{
						nexacro._setPreferencesValue(localstoragekey, JSON.stringify(jsondata));
					}

					localstorage.setItem(localstoragekey, JSON.stringify(jsondata));
					return true;
				}
			}
			return false;
		}

		removeVariable(key, type, global)
		{
			const localstorage = this.#localstorage;
			if (localstorage)
			{
				const localstoragekey = this._getLocalStorageKey(type, global);

				if (localstoragekey)
				{
					const localstoragedata = localstorage.getItem(localstoragekey);

					let jsondata = {};
					if (localstoragedata)
					{
						jsondata = JSON.parse(localstoragedata);
					}

					const findkey = jsondata[key];
					if (findkey)
					{
						delete jsondata[key];
					}
					localstorage.setItem(localstoragekey, JSON.stringify(jsondata));
				}
			}
		}

		getVariableAll(type)
		{
			const localstorage = this.#localstorage;
			if (localstorage)
			{
				const localstoragekey = this._getLocalStorageKey(type, false);

				if (localstoragekey)
				{
					const localstoragedata = localstorage.getItem(localstoragekey);
					if (localstoragedata)
						return JSON.parse(localstoragedata);
				}
			}
		}

		hasVariable(key, type, global)
		{
			const localstorage = this._localstorage;
			if (localstorage)
			{
				const localstoragekey = this._getLocalStorageKey(type, global);

				if (localstoragekey)
				{
					const localstoragedata = localstorage.getItem(localstoragekey);
					let jsondata = {};
					if (localstoragedata)
						jsondata = JSON.parse(localstoragedata);

					const findkey = jsondata[key];
					if (findkey)
						return true;
				}
			}
			return false;
		}

		clearLocalStorage()
		{
			const localstorage = this.#localstorage;

			const deleteLocalStorage = (type) =>
			{
				const localstoragekey = this._getLocalStorageKey(type);
				if (localstoragekey)
				{
					const localstoragedata = localstorage.getItem(localstoragekey);
					if (localstoragedata)
						localstorage.removeItem(localstoragekey);
				}
			}

			deleteLocalStorage(2);
			deleteLocalStorage(3);
			deleteLocalStorage(4);
			deleteLocalStorage(5);
			deleteLocalStorage(6);
		}
		// 내부에서 로컬스토리지 객체를 한번만 초기화 해서 캐싱
		_initLocalStorageObject()
		{
			if (nexacro._isLocalStorageSupport())
			{
				return window.localStorage;
			}
			else
			{
				const env = this.#env;
				if (env)
				{
					if (!env._userprivateprofile)
					{
						env._userprivateprofile = new nexacro.Collection();
						env._userprivateprofile.removeItem = function (key) { return this.remove_item(key); };
					}
					return env._userprivateprofile;
				}
			}
			return null;
		}

		_getLocalStorageKey(type, global)
		{
			// application을 기반으로 한 environment의 localstorage key값은 개별로 관리됨 , 여러개의 창이 뜰경우 개별로 관리됨
			// nexacro.getPrivateProfile을 통해서 호출된 값은 key + projectpath 가 같으면 공동 제어

			if (!this.#uniquestoragevalue)
			{
				this.#uniquestoragevalue = new Date().getTime();
			}

			let localstoragekey = "";			
			const projectpath = this.#projectpath;

			if (global)
			{
				localstoragekey = window.location.href;
			}
			else
			{
				const stat = "0";
				if (type < 2)
					localstoragekey = this.#env._p_key + projectpath;
				else
					localstoragekey = stat + this.#uniquestoragevalue + this.#env._p_key + projectpath;
			}

			switch (type)
			{
				case 1: localstoragekey = localstoragekey + "user"; break;
				case 2: localstoragekey = "0" + this.#uniquestoragevalue + projectpath + "engine"; break;
				case 3: localstoragekey = localstoragekey + "envvar"; break;
				case 4: localstoragekey = localstoragekey + "envcookie"; break;
				case 5: localstoragekey = localstoragekey + "envhttp"; break;
				case 6: localstoragekey = localstoragekey + "envsecurecookie"; break;
			}
			if (type > 1)
			{
				this._toggleDuplicateKey(localstoragekey, false);
			}
			return localstoragekey;
		}

		// 기존 함수에서 localstorage를 캐싱된 값으로 바로 사용하도록 수정
		_toggleDuplicateKey(key, duplicated)
		{
			const localstorage = this.#localstorage;
			if (!localstorage) return;

			let localstoragedata = localstorage.getItem(key);
			let stat;
			if (!localstoragedata)
			{
				key = key.substr(1);
				stat = "1";
				key = stat.concat(key);
				localstoragedata = localstorage.getItem(key);
			}
			if (localstoragedata)
			{
				localstorage.removeItem(key);
				key = key.substr(1);
				if (duplicated)
				{
					stat = "1";
					key = stat.concat(key);
				}
				else
				{
					stat = "0";
					key = stat.concat(key);
				}
				localstorage.setItem(key, localstoragedata);
			}
		}		
	};
	
	if (!window.postMessage)
	{
		nexacro._postMessage = function (id, win, target_comp/*, targetorigin*/)
		{
			nexacro._OnceCallbackTimer.callonce(target_comp, function ()
			{
				win._on_sys_message(id);
			}, 10);
		};
	}
	else
	{
		nexacro._postMessage = function (id, win, target_comp, targetorigin)
		{
			if (win && win.postMessage)
			{
				win.postMessage(id, targetorigin);
			}
			else 
			{
				window.postMessage(id, targetorigin);
			}
		};
	}

    nexacro._getGlobalValueData = function (key, url)
	{
		if (nexacro._globalvalue)
		{
			return nexacro._globalvalue;
		}

		if (window.name && key && url)
		{
			var globalvars = "";
			var items = window.name.split(',');
			if (items.length)
			{
				var fields = items[0].split(':');
				if (fields[0] == key && unescape(fields[1]) == url)
				{
					globalvars = items.splice(1, items.length - 1).join(',');
				}
			}
			nexacro._globalvalue = globalvars;
			return globalvars;
		}
	};

	nexacro._getSystemFont = function ()
	{
		return new nexacro._FontObject("12pt Verdana");
	};

    if (globalThis.chrome && globalThis.chrome.webview)
    {
        nexacro._createVirtualWindowHandle = function (_handle)
        {
            var params = {};

            return nexacro._messageToNative(_handle, "NexacroWindow", "_createVirtualWindow", params, true, true);
        };
        //unused
        nexacro._closeVirtualWindowHandle = function (_handle)
        {
            var params = { handle: _handle };

            return nexacro._messageToNative(_handle, "NexacroWindow", "_closeVirtualWindow", params, true);
        };

        nexacro._blockScript = function (handle, _virtual_handle)
        {
            var params = { handle: _virtual_handle };

            return nexacro._messageToNative(handle, "NexacroWindow", "_blockScript", params, true);
        };

        nexacro._unblockScript = function (handle, _virtual_handle)
        {
            var params = { handle: _virtual_handle };

            return nexacro._messageToNative(handle, "NexacroWindow", "_unblockScript", params, true);
        };
    }
    else
    {
        nexacro._blockScript = nexacro._emptyFn;    
        nexacro._unblockScript = nexacro._emptyFn;
    }
    
    nexacro._setPopupWindowHandleVisible = function (handle, visible_flag)
	{
		if (handle)
		{
			var handle_style = handle.style;
			if (handle_style)
			{
				handle_style.visibility = (visible_flag === true) ? "" : "hidden";
			}
		}
	};

    nexacro._procSysCommand = function (handle, command) 
	{
		if (nexacro._macOSWebView)
		{
			var params = {
				command: command
			};
			var json = {
				id: "0000",
				div: "NexacroWindow",
				method: "_procSysCommand",
				params: params
			};
			var jsonstr = JSON.stringify(json);
			nexacro.Device.exec(jsonstr);
		}
		else
		{
			var params = { command: command };
			var method = "_procSysCommand";
			var div = "NexacroWindow";
			nexacro._messageToNative(handle ? handle._hybridHandle : "0000", div, method, params, false);
		}
	};

	nexacro._setWindowHandleLock = function (handle, is_lock, _except_handle, is_modal_async)
	{
		nexacro.__setWindowHandleLock(handle, is_lock, _except_handle, is_modal_async);
	};

	nexacro.__setWindowHandleLock = function (handle, is_lock, _except_handle/*, is_modal_async*/)
	{
		// HTML5는 ModalAsync로만 사용된다.
		var __handle = handle;
		if (__handle == null)
		{
			__handle = window; // TODO check
		}

		var _window = nexacro._getLinkedWindow(__handle);
		while (_window)
		{
			if (_window.parent)
				_window = _window.parent;
			else
				break;
		}

		if (_window == null)
		{
			// assert
			return;
		}

		var _except_window = _except_handle ? nexacro._getLinkedWindow(_except_handle) : null;
		nexacro.__setWindowHandleEnableByRef(_window, !is_lock, _except_window, true, true);
	};

    nexacro.__setWindowHandleEnableByRef = function (_window, is_enable, _except_window, is_recursive /*,is_modal_async*/)
	{
		// HTML5는 ModalAsync로만 사용된다.
		if (_window != _except_window)
		{
			if (is_enable)
			{
				_window._disable_ref--;
				if (_window._disable_ref === 0)
					_window._coverUnlock(_except_window);
			}
			else
			{
				if (_window._disable_ref === 0)
					_window._coverLock(_except_window);
				_window._disable_ref++;
			}
		}

		if (is_recursive)
		{
			for (var i = 0; i < _window._child_list.length; i++)
			{
				var child = _window._child_list[i];
				if (child.root)
					nexacro.__setWindowHandleEnableByRef(child, is_enable, _except_window, true, true);
			}
		}
	};

	nexacro._queueAnimationFrame = function (callback)
	{
		// 반드시 다음 frame에 실행되도록 함, 여러번 호출되면 queue에 쌓아서 순차 실행
		let scheduled = false;
		const queue = [];

		function run()
		{
			if (queue.length === 0)
			{
				scheduled = false;
				return;
			}

			const { ctx, args } = queue.shift();

			callback.apply(ctx, args);

			requestAnimationFrame(run);
		}

		return function (...args)
		{
			queue.push({ ctx: this, args });

			if (scheduled)
				return;

			scheduled = true;
			requestAnimationFrame(run);
		};
	};

	nexacro._requestAnimationFrame = function (_window, callback)
	{
		if (!_window)
			return;
		var win_handle = _window.handle;
		if (!win_handle)
			return;

		win_handle = nexacro._handletoWindow(win_handle);
		var requestAnimationFrame = win_handle.requestAnimationFrame || win_handle.mozRequestAnimationFrame || win_handle.webkitRequestAnimationFrame || win_handle.msRequestAnimationFrame;
		if (!requestAnimationFrame)
			return;
		var requestid = requestAnimationFrame.call(win_handle, callback);
		return requestid;
	};

	nexacro._cancelAnimationFrame = function (_window, requestid)
	{
		if (!_window)
			return;
		var win_handle = _window.handle;
		if (!win_handle)
			return;

		win_handle = nexacro._handletoWindow(win_handle);
		var cancelAnimationFrame = win_handle.cancelAnimationFrame || win_handle.mozCancelAnimationFrame || win_handle.webkitCancelAnimationFrame;
		if (cancelAnimationFrame)
			cancelAnimationFrame.call(win_handle, requestid);
	};

    nexacro.__setViewportScale = function (env)
	{
		//mfe 일 경우 body의 viewport 를 변경하지 않음
		if (!env || !nexacro.isglobalmodule || nexacro._isTestMode())
			return;

		// 지정된 값으로 설정하지 않고 nexacro proprerty를 기준으로 자동으로 설정하도록 새로 만듬
		// 모바일 환경 기기별 예외처리를 위해서 직접 테스트를 수행함
		// 1. 최초 viewport 설정시
		// 2. 최초 orientationchange 시
		
		var ratio = env._getZoomFactor() / 100;
		const zoomfactortype = env._curscreenzoomfactortype;
		var scalable_val = env._allow_default_pinchzoom ? "1" : "0";
		var elems = document.getElementsByName("viewport");
		var viewport = elems.length ? elems[0] : null;
		if (!viewport)
		{
			viewport = document.createElement("meta");
			viewport.name = "viewport";
			document.querySelector("head").appendChild(viewport);
		}

		var contents = viewport.content.split(",");

		function __set_attribute(attr_name, attr_value)
		{
			var content = attr_value ? attr_name + "=" + attr_value : null;
			var is_found = false;

			for (var i = 0; i < contents.length; i++)
			{
				var name = nexacro.trim(contents[i].split("=")[0]);
				if (name == attr_name)
				{
					is_found = true;
					if (content)
					{
						contents[i] = content;
					}
					else
					{
						contents.splice(i, 1);
					}
					break;
				}
			}

			if (!is_found && content)
			{
				contents.push(content);
			}
		}
		__set_attribute("user-scalable", scalable_val);
		if (zoomfactortype == "devicewidth")
		{
			__set_attribute("initial-scale", "");
			__set_attribute("minimum-scale", "");
			__set_attribute("maximum-scale", "");
			__set_attribute("width", "device-width");
		}
		else
		{
			__set_attribute("initial-scale", ratio);

			if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
			{
				__set_attribute("minimum-scale", ratio);
			}

			if (nexacro._getDeviceName() == "iOS")
			{
				var _contents;
				if (env._allow_default_pinchzoom)
				{
					_contents = JSON.parse(JSON.stringify(contents));
				}
				//화면이 작게 로딩되는 현상
				__set_attribute("minimum-scale", ratio);
				__set_attribute("maximum-scale", ratio);
				if (_contents)
					setTimeout(() =>
					{
						viewport.setAttribute('content', _contents.toString());;//비동기로  "minimum-scale" "maximum-scale" 빼기
						_contents = null;
					}, 100);
			}
		}

		viewport.setAttribute('content', contents.toString());
		window.scrollTo(0, 0);
	};

    nexacro._device_regular_expression =
		[[

			/\((ipad|playbook);[\w\s);-]+(rim|apple)/i                         // iPad/PlayBook
		], ['model', 'vendor', ['type', 'tablet']], [

			/applecoremedia\/[\w.]+ \((ipad)/                                  // iPad
		], ['model', ['vendor', 'Apple'], ['type', 'tablet']], [

			/(apple\s{0,1}tv)/i                                                 // Apple TV
		], [['model', 'Apple TV'], ['vendor', 'Apple']], [

			/(archos)\s(gamepad2?)/i,                                           // Archos
			/(hp).+(touchpad)/i,                                                // HP TouchPad
			/(kindle)\/([\w.]+)/i,                                              // Kindle
			/\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
			/(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
		], ['vendor', 'model', ['type', 'tablet']], [

			/(kf[A-Za-z]+)\sbuild\/[\w.]+.*silk\//i                               // Kindle Fire HD
		], ['model', ['vendor', 'Amazon'], ['type', 'tablet']], [
			/(sd|kf)[0349hijorstuw]+\sbuild\/[\w.]+.*silk\//i                  // Fire Phone
		], [['model', "", { 'Fire Phone': ['SD', 'KF'] }], ['vendor', 'Amazon'], ['type', 'mobile']], [

			/\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
		], ['model', 'vendor', ['type', 'mobile']], [
			/\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
		], ['model', ['vendor', 'Apple'], ['type', 'mobile']], [

			/(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
			/(blackberry|benq|palm(?=-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
			// BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
			/(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
			/(asus)-?(\w+)/i                                                    // Asus
		], ['vendor', 'model', ['type', 'mobile']], [
			/\(bb10;\s(\w+)/i                                                   // BlackBerry 10
		], ['model', ['vendor', 'BlackBerry'], ['type', 'mobile']], [
			// Asus 'tablet's
			/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
		], ['model', ['vendor', 'Asus'], ['type', 'tablet']], [

			/(sony)\s('tablet'\s[ps])\sbuild\//i,                                  // Sony
			/(sony)?(?:sgp.+)\sbuild\//i
		], [['vendor', 'Sony'], ['model', 'Xperia tablet'], ['type', 'tablet']],
		[
			/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
		], [['vendor', 'Sony'], ['model', 'Xperia Phone'], ['type', 'mobile']], [

			/\s(ouya)\s/i,                                                      // Ouya
			/(nintendo)\s([wids3u]+)/i                                          // Nintendo
		], ['vendor', 'model', ['type', 'console']], [

			/android.+;\s(shield)\sbuild/i                                      // Nvidia
		], ['model', ['vendor', 'Nvidia'], ['type', 'console']], [

			/(playstation\s[34portablevi]+)/i                                   // Playstation
		], ['model', ['vendor', 'Sony'], ['type', 'console']], [

			/(sprint\s(\w+))/i                                                  // Sprint Phones
		], [['vendor', "", { 'HTC': 'APA', 'Sprint': 'Sprint' }], ['model', "", { 'Evo Shift 4G': '7373KT' }], ['type', 'mobile']], [

			/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo 'tablet's
		], ['vendor', 'model', ['type', 'tablet']], [

			/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
			/(zte)-(\w+)*/i,                                                    // ZTE
			/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
			// Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
		], ['vendor', ['model', /_/g, ' '], ['type', 'mobile']], [

			/(nexus\s9)/i                                                       // HTC Nexus 9
		], ['model', ['vendor', 'HTC'], ['type', 'tablet']], [

			/[\s(;](xbox(?:\sone)?)[\s);]/i                                   // Microsoft Xbox
		], ['model', ['vendor', 'Microsoft'], ['type', 'console']], [
			/(kin\.[onetw]{3})/i                                                // Microsoft Kin
		], [['model', /\./g, ' '], ['vendor', 'Microsoft'], ['type', 'mobile']], [

			// Motorola
			/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
			/mot[\s-]?(\w+)*/i,
			/(XT\d{3,4}) build\//i,
			/(nexus\s[6])/i
		], ['model', ['vendor', 'Motorola'], ['type', 'mobile']], [
			/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
		], ['model', ['vendor', 'Motorola'], ['type', 'tablet']], [

			/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
			/((SM-T\w+))/i
		], [['vendor', 'Samsung'], 'model', ['type', 'tablet']], [                  // Samsung
			/((s[cgp]h-\w+|SHW-\w+|SHV-\w+|gt-\w+|galaxy\snexus|sm-\w+))/i,
			/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
			/sec-((sgh\w+))/i
		], [['vendor', 'Samsung'], 'model', ['type', 'mobile']], [
			/(samsung);'smarttv'/i
		], ['vendor', 'model', ['type', 'smarttv']], [

			/\(dtv[);].+(aquos)/i                                              // Sharp
		], ['model', ['vendor', 'Sharp'], ['type', 'smarttv']], [
			/sie-(\w+)*/i                                                       // Siemens
		], ['model', ['vendor', 'Siemens'], ['type', 'mobile']], [

			/(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
			/(nokia)[\s_-]?([\w-]+)*/i
		], [['vendor', 'Nokia'], 'model', ['type', 'mobile']], [

			/android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
		], ['model', ['vendor', 'Acer'], ['type', 'tablet']], [

			/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG 'tablet'
		], [['vendor', 'LG'], 'model', ['type', 'tablet']], [
			/(lg) netcast\.tv/i                                                 // LG 'smarttv'
		], ['vendor', 'model', ['type', 'smarttv']], [
			/(nexus\s[45])/i,                                                   // LG
			/lg[e;\s/-]+(\w+)*/i,
			/(IM-\w+)/i
		], ['model', ['vendor', 'LG'], ['type', 'mobile']], [

			/android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
		], ['model', ['vendor', 'Lenovo'], ['type', 'tablet']], [

			/linux;.+((jolla));/i                                               // Jolla
		], ['vendor', 'model', ['type', 'mobile']], [

			/((pebble))app\/[\d.]+\s/i                                         // Pebble
		], ['vendor', 'model', ['type', 'wearable']], [

			/android.+;\s(glass)\s\d/i                                          // Google Glass
		], ['model', ['vendor', 'Google'], ['type', 'wearable']], [

			/android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' 'model's
			/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
			/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
		], [['model', /_/g, ' '], ['vendor', 'Xiaomi'], ['type', 'mobile']], [

			/\s('tablet')[;/]/i,                                                 // Unidentifiable 'tablet'
			/\s('mobile')[;/]/i                                                  // Unidentifiable 'mobile'
		], [['type', ""], 'vendor', 'model']
		];

    if ((globalThis.chrome && globalThis.chrome.webview) || nexacro._macOSWebView)
    {
        nexacro._setLogLevel = function (v)
        {
            var div = nexacro._macOSWebView ? "NexacroLogger" : "nexacroset";
            var params = { method: "_setLogLevel", loglevel: v };
            nexacro._messageToNative("0000", div, "_setTraceLog", params, true);
        };

        nexacro._setTraceMode = function (v)
        {
            var div = nexacro._macOSWebView ? "NexacroLogger" : "nexacroset";
            var params = { method: "_setTraceMode", tracemode: v };
            nexacro._messageToNative("0000", div, "_setTraceLog", params, true);
        };

        nexacro._setTraceDuration = function (v)
        {
            var div = nexacro._macOSWebView ? "NexacroLogger" : "nexacroset";
            var params = { method: "_setTraceDuration", traceduration: v };
            nexacro._messageToNative("0000", div, "_setTraceLog", params, true);
        };

        nexacro._deleteTraceLogFile = function ()
        {
            var params = {};
            nexacro._messageToNative("0000", "nexacroapi", "_deleteTraceLogFile", params, true);
        };
        
        nexacro._getLogFilePath = function ()
        {
            var div = nexacro._macOSWebView ? "NexacroLogger" : "nexacroapi";
            var params = {};
            return nexacro._messageToNative("0000", div, "_getLogFilePath", params, true, true);
        };
    }
    else
    {
        nexacro._setLogLevel = nexacro._emptyFn;
        nexacro._setTraceMode = nexacro._emptyFn;
        nexacro._setTraceDuration = nexacro._emptyFn;
        nexacro._deleteTraceLogFile = nexacro._emptyFn;
        nexacro._getLogFilePath = nexacro._emptyFn;
    }

    nexacro._writeTraceLog = function (msglevel, message, bsystemlog, loglevel, traceduration, tracemode)
    {
        var data;
        data = (bsystemlog === true) ? "S" : "U";

        if (msglevel === 0)
            data += "F";
        else if (msglevel == 1)
            data += "E";
        else if (msglevel == 2)
            data += "W";
        else if (msglevel == 3)
            data += "I";
        else
            data += "D";

        var curdate = new nexacro.Date();
        var millisec = curdate.getMilliseconds();

        data = data + " " + curdate.getHours() + ":" + curdate.getMinutes() + ":" + curdate.getSeconds() + ":" + curdate.toZeroDigitString(millisec, 3) + " ";
        data += message;

        if (globalThis.chrome && globalThis.chrome.webview)
        {
            var traceduration = nexacro._traceduration || -1;
            var tracemode = nexacro._tracemode || "none";
            var tracelevel = loglevel || 4;

            //nexacro.__writeTraceLog(data, loglevel, tracemode, traceduration, msglevel);
            var params = { data: data, loglevel: tracelevel, tracemode: tracemode, traceduration: traceduration, msglevel: msglevel };
            nexacro._messageToNative("0000", "nexacroapi", "_writeTraceLog", params, true);

        }
        else if (nexacro._macOSWebView)
        {
            var params = {
                msglevel: msglevel,
                message: message,
                bsystemlog: bsystemlog,
                loglevel: loglevel || 4,
                traceduration: traceduration || -1,
                tracemode: tracemode || "none"
            };
            var json = {
                id: "0000",
                div: "NexacroLogger",
                method: "_writeTraceLog",
                params: params
            };
            var jsonStr = JSON.stringify(json);
            nexacro.Device.exec(jsonStr);
        }

        // IE8에서 console을 만나면 에러발생 (window.console = OK)
        if (window.console)
            window.console.log(data);
    };

    nexacro._applicationExit = function (is_close_window)
	{
		if (nexacro.isglobalmodule)
		{
			window.system = null;
			window.trace = null;
			window.nexacro = null;
			window._application = null;
		}

		nexacro._localecollator_list = null; // localecompare collator list
		nexacro._textDecoder = null; //

		if (is_close_window === true && !nexacro._isTestMode())
		{
			// 사용자가 exit 호출시 창을 닫음
			window.open('', '_self');
			window.close();
		}

		// Android, iOS, macOS를 위한 exit()
		if (nexacro.Device)
		{
			nexacro.Device.exit();
		}

		if (!nexacro._isTestMode()) 
		{
			var params = {};
			var method = "_closeWindow";
			var div = "NexacroWindow";
			nexacro._messageToNative(window.handle ? window.handle._hybridHandle : "0000", div, method, params, false);
		}
	};

    nexacro.__getWindowHandleEnable = function (win_handle)
	{
		if (!win_handle)
			return false;

		var _window = nexacro._getLinkedWindow(win_handle);

		if (!_window)
			return false;

		if (_window._disable_ref > 0)
			return false;

		return true;
	};

    nexacro.__calcElementFromPoint = function (_win_handle, x, y) 
	{
		const doc = _win_handle.document;

		if (nexacro._BrowserExtra == "SamsungBrowser" && !nexacro._isDesktop() && nexacro._BrowserVersion < 43)
		{
			x -= _win_handle.scrollX;
			y -= _win_handle.scrollY;
		}
		else if (nexacro._BrowserExtra !== "SamsungBrowser" && !nexacro._isDesktop()) 
		{
			x -= _win_handle.scrollX;
			y -= _win_handle.scrollY;
		}

		const elem_handle = doc.elementFromPoint(x, y);
		return elem_handle ? nexacro.__findParentElement(elem_handle) : null;
	};

    nexacro.__getElementFromPoint = function (_win_handle, x, y)
	{
		const win = nexacro._isWindowObject(_win_handle) ? nexacro._handletoWindow(_win_handle.handle) : nexacro._handletoWindow(_win_handle) || window;
		return nexacro.__calcElementFromPoint(win, x, y);
	};

    if (globalThis.chrome && globalThis.chrome.webview)
    {
        nexacro._createTrayHandle = function (icon, tooltip)
        {
            var params = { icon: icon, tooltip: tooltip };
            var ret = nexacro._messageToNative("cy_tray", "tray", "_createTray", params, true, true);
            return ret ? nexacro._toInt(ret) : null;
        };

        nexacro._removeTrayHandle = function (tray_handle)
        {
            var params = { tray_handle: tray_handle };
            return nexacro._messageToNative("cy_tray", "tray", "_removeTray", params, true);
        };

        nexacro._setTrayIconHandle = function (tray_handle, icon)
        {
            var params = { tray_handle: tray_handle, icon: icon };
            return nexacro._messageToNative("cy_tray", "tray", "_setTrayIcon", params, true);
        };

        nexacro._setTrayTooltipHandle = function (tray_handle, tooltip)
        {
            var params = { tray_handle: tray_handle, tooltip: tooltip };
            return nexacro._messageToNative("cy_tray", "tray", "_setTrayTooltip", params, true);
        };

        nexacro._showTrayBalloonTipHandle = function (tray_handle, titleicon, title, text, timeout, nosound)
        {
            var params = { tray_handle: tray_handle, titleicon: titleicon, title: title, text: text, timeout: timeout, nosound: nosound };
            return nexacro._messageToNative("cy_tray", "tray", "_showTrayBalloonTip", params, true);
        };

        nexacro._hideTrayBalloonTipHandle = function (tray_handle)
        {
            var params = { tray_handle: tray_handle };
            return nexacro._messageToNative("cy_tray", "tray", "_hideTrayBalloonTip", params, true);
        };

        nexacro._createTrayPopupMenuHandle = function (tray_handle)
        {
            var params = { tray_handle: tray_handle };
            var ret = nexacro._messageToNative("cy_tray", "tray", "_createTrayPopupMenu", params, true, true);
            return ret ? nexacro._toInt(ret) : null;
        };

        nexacro._destroyTrayPopupMenuHandle = function (tray_handle, menu_handle)
        {
            var params = { tray_handle: tray_handle, menu_handle: menu_handle };
            return nexacro._messageToNative("cy_tray", "tray", "_destroyTrayPopupMenu", params, true);
        };

        nexacro._setTrayPopupMenuItemHandle = function (tray_handle, menu_handle, flags, id, caption, icon)
        {
            var params = { tray_handle: tray_handle, menu_handle: menu_handle, flags: flags, id: id, caption: caption, icon: icon };
            return nexacro._messageToNative("cy_tray", "tray", "_setTrayPopupMenuItem", params, true);
        };

        nexacro._displayTrayPopupMenuHandle = function (tray_handle, menu_handle)
        {
            var params = { tray_handle: tray_handle, menu_handle: menu_handle };
            return nexacro._messageToNative("cy_tray", "tray", "_displayTrayPopupMenu", params, true);
        };

        nexacro._syshandler_ontray_forward = function (_window, type, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key, hidereason)
        {
            // ondblclick, onlbuttonup, onrbuttonup 
            var application, tray;
            if (type == "lbuttonup") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray) tray.on_fire_onlbuttonup(button, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key);
                }
            }
            else if (type == "rbuttonup") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray)
                        tray.on_fire_onrbuttonup(button, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key);
                }
            }
            else if (type == "dblclick") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray)
                        tray.on_fire_ondblclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key);
                }
            }
            else if (type == "menuclick") 
            {
                if (nexacro._current_tray_popup) 
                {
                    var traypopup = nexacro._current_tray_popup;
                    if (traypopup)
                        traypopup.on_fire_onmenuclick(id);
                }
            }
            else if (type == "balloontipshow") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray)
                        tray.on_fire_onballoontipshow();
                }
            }
            else if (type == "balloontiphide") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray)
                        tray.on_fire_onballoontiphide(hidereason);
                }
            }
            else if (type == "balloontipclick") 
            {
                application = nexacro.getApplication();
                if (application) 
                {
                    tray = application._p_trays[id];
                    if (tray)
                        tray.on_fire_onballoontipclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key);
                }
            }
            
            nexacro._deleteCacheDB = function()
            {
                var params = {};
                nexacro._messageToNative("0000", "nexacroapi", "_deleteCacheDB", params, true, true);
                return;
            };  
        };
    }
    else
    {
        // Runtime Tray 관련
        nexacro._createTrayHandle = nexacro._emptyFn;
        nexacro._removeTrayHandle = nexacro._emptyFn;
        nexacro._setTrayIconHandle = nexacro._emptyFn;
        nexacro._setTrayTooltipHandle = nexacro._emptyFn;
        nexacro._showTrayBalloonTipHandle = nexacro._emptyFn;
        nexacro._hideTrayBalloonTipHandle = nexacro._emptyFn;
        nexacro._createTrayPopupMenuHandle = nexacro._emptyFn;
        nexacro._destroyTrayPopupMenuHandle = nexacro._emptyFn;
        nexacro._setTrayPopupMenuItemHandle = nexacro._emptyFn;
        nexacro._displayTrayPopupMenuHandle = nexacro._emptyFn;
        nexacro._syshandler_ontray_forward = nexacro._emptyFn;

        // Runtime deleteCacheDB 관련
        nexacro._deleteCacheDB = nexacro._emptyFn;
    }

    nexacro._setWindowHandleFocus = function (win_handle)
	{
		return;  //browser active 동작이 정상적으로 처리되지 않아 막음, runtime 고유 기능
	};

    nexacro._getCSSFileName = function (cssfile)
	{
		var ext_type = nexacro._getExtUserCssScreenType(cssfile);
		if (ext_type == cssfile) return cssfile + ".css";

		if (nexacro._isUndefined(ext_type))
		{
			cssfile = cssfile + "_desktop";
		}
		else
		{
			if (ext_type && ext_type.length > 0)
			{
				cssfile = cssfile + "_" + ext_type;
			}
		}

		if (nexacro._Browser == "Gecko")
		{
			cssfile += "_firefox";
		}
		else if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
		{
			cssfile += "_chrome";
		}
		else
		{
			if (nexacro._BrowserType == "WebKit")
			{
				cssfile += "_safari";
			}
			else
			{
				cssfile += "_" + nexacro._Browser.toLowerCase();
			}
		}
		return cssfile + ".css";
	};

    nexacro._getWindowRectforOpenAlign = function (/*halign, valign, parentleft, parenttop, left, top, width, height*/)
	{
		return null;
	};

	nexacro._setApplicationIcon = function (v)
	{
		var favicon = nexacro.UrlObject(v);
		if (favicon)
		{
			var handle = document.createElement("link");
			handle.rel = "shortcut icon";
			handle.href = favicon._sysurl;
			var headnode = document.getElementsByTagName('head')[0];
			headnode.appendChild(handle);
		}
	};

	nexacro._preventBackNavigation = function ()
	{
		if (window.history)																		
		{
			// 백스페이스 및 툴바의 뒤로가기 방지																				
			window.history.pushState(null, null, location.href);
			window.onpopstate = function (event)
			{
				history.go(1);
			};
		}
	};

	nexacro._isPageReloadKey = function (ctrlKey, keycode)
	{
		return (ctrlKey == true && (keycode == 78 || keycode == 82)) || (keycode == 116)
	};

    // external api
	nexacro._loadExtCss = async function (item)
	{
		const promise = new Promise((resolve, reject) =>
		{
			try
			{
				const link = document.createElement('link');
				if (item.externalid !== "#dynamic")
					link.id = item.externalid;
				//link.as = "style";
				link.rel = "stylesheet";
				link.href = item.url;
				// explicit default behavior
				if (item.crossorigin && item.crossorigin !== "")
				{
					link.setAttribute("crossorigin", (item.crossorigin == "anonymous") ? "" : item.crossorigin);
				}

				if (item.integrity)
					link.integrity = item.integrity;

				link.onload = () =>
				{
					item.status = "success";
					return resolve();
				}
				link.onerror = (e) =>
				{
					item.status = "error";
					return reject({ err: new Error(`Failed to load stylesheet: ${item.url}`), node: link });
				}
				document.head.appendChild(link);

			}
			catch (e)
			{
				item.status = "error";
				return reject({ err: new Error(`Unexpected error while loading stylesheet: ${e.message}`), node: undefined });

			}


		}).catch(reject =>
		{
			if (reject && reject.node && reject.node.parentNode)
				reject.node.remove();

			return reject.err;
		});
		let ret = await promise;
		return ret;

	};

	nexacro._fetchExtResource = async function (item)
	{
		const promise = new Promise((resolve, reject) =>
		{
			const link = document.createElement('link');
			try
			{
				if (item.externalid !== "#dynamic")
					link.id = item.externalid;
				link.as = (item.type == "style") ? "style" : "script";
				link.href = item.url
				link.rel = "prefetch";
				// explicit default behavior
				if (item.crossorigin && item.crossorigin !== "")
				{
					link.setAttribute("crossorigin", (item.crossorigin == "anonymous") ? "" : item.crossorigin);
				}

				if (item.integrity)
					link.integrity = item.integrity;

				document.head.appendChild(link);
				item.status = "fetching";
				return resolve();
			}
			catch (e)
			{
				item.status = "error";
				return reject({ err: new Error(`Unexpected error while loading resource: ${e.message}`), node: link });
			}


		}).catch(reject =>
		{
			if (reject && reject.node && reject.node.parentNode)
				reject.node.remove();

			return reject.err;
		});

		let ret = await promise;
		return ret;
	};

	nexacro._loadExtJs = async function (item)
	{
		const isEmptyObject = function (obj) 
		{
			return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
		}
		const promise = new Promise((resolve, reject) =>
		{
			(async () => 
			{
				const env = nexacro.getEnvironment();
				const fullurl = nexacro._transfullurl(env.getProjectPath(), item.url, env._p_checkversion, env._p_version);
				const preloadscripts = performance.getEntriesByType('resource')
						.filter(r => r.initiatorType === 'script' && r.name == fullurl);
				
				if (preloadscripts.length == 1 && preloadscripts[0].responseEnd > 0)
				{	
					item.status = "success";
					return resolve(item);
				}

				const script = document.createElement('script');
				try
				{
					if (item.externalid !== "#dynamic")
						script.id = item.externalid;
					script.async = true;
					script.src = item.url;

					// explicit default behavior

					if (item.crossorigin && item.crossorigin !== "")
					{
						script.setAttribute("crossorigin", (item.crossorigin == "anonymous") ? "" : item.crossorigin);
					}



					if (item.integrity)
						script.integrity = item.integrity;

					// 일반적으로 IIFE 방식이나 , UMD type일 경우 전역 네임스페이스로 저장하므로 비교해서 찾을 수 있다.

					const pre_snapshot = new Set(Object.keys(globalThis));
					script.onload = async () =>
					{
						const post_snapshot = new Set(Object.keys(globalThis));
						const moduleskey = [...post_snapshot].filter(key => !pre_snapshot.has(key));
						const loadmodules = {};

						moduleskey.forEach(key =>
						{

							loadmodules[key] = globalThis[key];
						});
						if (isEmptyObject(loadmodules))
						{
							item.status = "error";
							reject({ err: new Error(`Failed to inject js module: ${item.url} `), node: script });
						}
						else
						{
							item.value = loadmodules;
							item.status = "success";
							resolve(loadmodules);
						}
					};

					script.onerror = async (evt) =>
					{

						item.status = "error";
						reject({ err: new Error(`Failed to load script: ${item.url}`), node: script });
					};


					document.head.appendChild(script);
				}
				catch (e)
				{
					item.status = "error";
					reject({ err: new Error(`Unexpected error while loading module: ${e.message}`), node: script });
				}
			})();
		}).catch(reject =>
		{
			if (reject && reject.node && reject.node.parentNode)
				reject.node.remove();

			return reject.err;
		});

		let ret = await promise;
		return ret;
	};

	nexacro._loadExtModule = async function (item)
	{

		const promise = new Promise((resolve, reject) =>
		{
			(async () => 
			{
				const script = document.createElement('script');
				try
				{

					if (item.externalid !== "#dynamic")
						script.id = item.externalid;
					script.type = "module";
					script.src = item.url;

					// explicit default behavior
					if (item.crossorigin && item.crossorigin !== "")
					{
						script.setAttribute("crossorigin", (item.crossorigin == "anonymous") ? "" : item.crossorigin);
					}

					if (item.integrity)
						script.integrity = item.integrity;

					// module은 import를 사용한다.
					script.onload = () =>
					{
						import(item.url).then((module) =>
						{
							item.value = (module && module.default) ? module.default : module;;
							item.status = "success";
							return resolve(item.value);
						}).catch((e) =>
						{
							item.status = "error";
							return reject({ err: new Error(`Failed to import module: ${item.url} - ${e.message}`), node: script });
						})
					}

					script.onerror = (e) =>
					{
						item.status = "error";
						return reject({ err: new Error(`Failed to load script: ${item.url}`), node: script });
					}

					document.head.appendChild(script);
				}
				catch (e)
				{
					item.status = "error";
					return reject({ err: new Error(`Unexpected error while loading module: ${e.message}`), node: script });
				}
			})();
		}).catch(reject =>
		{
			if (reject && reject.node && reject.node.parentNode)
				reject.node.remove();

			return reject.err;
		});

		let ret = await promise;
		return ret;
	};

    nexacro._loadExtTemplate = async function (item)
	{
		const promise = new Promise((resolve, reject) =>
		{
			try
			{
				if (item.template_src && item.template_src.length > 0)
				{

					let template_dest = nexacro._sanitize(item.template_src)
					//item.value = template_dest;
					//item.status = "success";
					return resolve(template_dest);
				}
			}
			catch (e)
			{
				//item.status = "error";
				return reject({ err: new Error(`Unexpected error while loading templaet: ${e.message}`) });
			}

		}).catch(reject =>
		{
			return reject.err;
		});

		let ret = await promise;
		return ret;
	};

    nexacro.__checkNodeDuplication = function (type, url)
	{
		if (!type || !url) return false;

		let selector;

		if (type === "script")
		{
			selector = `script[src="${url}"]`;
		}
		else if (type === "stylesheet")
		{
			selector = `link[rel="stylesheet"][href="${url}"]`;
		}
		else if (type === "prefetch")
		{
			selector = `link[rel="prefetch"][href="${url}"]`;
		}
		else
		{
			return false;
		}

		return !!document.head.querySelector(selector);
	};

	nexacro.History = (function ()
	{
		const historymodule = {};
		historymodule._currentstate = undefined;

		historymodule._pushState_internal = function (key, url, sysdata)
		{
			if (window.history)
			{
				if (historymodule._currentstate != key)
					window.history.pushState(key, "", url);

				let statedata = { "sysdata": sysdata, "url": url };
				window.sessionStorage?.setItem(key, JSON.stringify(statedata));
			}

			historymodule._currentstate = window.history.state;
		};

		historymodule.pushState = function (key, url, data)
		{
			if (window.history)
			{
				if (historymodule._currentstate != key)
					window.history.pushState(key, "", url);

				let statedata = { "data": data, "url": url };
				window.sessionStorage?.setItem(key, JSON.stringify(statedata));
			}

			historymodule._currentstate = window.history.state;
		};

		historymodule.replaceCurrentState = function (data, url)
		{
			const key = historymodule._currentstate;

			if (window.sessionStorage && key)
			{
				let statedata = window.sessionStorage.getItem(key);
				if (statedata)
				{
					let pushdata = JSON.parse(statedata);
					if (pushdata)
					{
						pushdata.data = data;
						pushdata.url = url;
						window.sessionStorage.setItem(key, JSON.stringify(pushdata));
					}
				}
			}

			if (window.history && key)
				window.history.replaceState(key, "", url);
		};

		historymodule._getCurrentState_internal = function ()
		{
			//if (window.history)
			//    return historymodule._currentstate;

			let key = historymodule._currentstate;
			if (window.sessionStorage && key)
			{
				let statedata = window.sessionStorage.getItem(key);
				if (statedata)
				{					
					statedata = JSON.parse(statedata);
					return statedata.sysdata;						
				}
			}
		};

		historymodule.getCurrentState = function ()
		{
			//if (window.history)
			//    return historymodule._currentstate;

			let key = historymodule._currentstate;
			if (window.sessionStorage && key)
			{
				let statedata = window.sessionStorage.getItem(key);
				if (statedata)
				{
					statedata = JSON.parse(statedata);
					if (statedata?.sysdata)
						delete statedata.sysdata;
					return statedata;
				}
			}
		};

		historymodule.setCurrentStateData = function (varid, varvalue)
		{
			let key = historymodule._currentstate;
			if (window.sessionStorage && key)
			{
				let statedata = window.sessionStorage.getItem(key);
				if (statedata)
				{
					let pushdata = JSON.parse(statedata);
					if (pushdata)
					{
						if (!pushdata.data)
							pushdata.data = {};
						pushdata.data[varid] = varvalue;
						window.sessionStorage.setItem(key, JSON.stringify(pushdata));
					}
				}
			}
		};

		historymodule.getCurrentStateData = function (varid)
		{
			let key = historymodule._currentstate;
			if (window.sessionStorage && key)
			{
				let statedata = window.sessionStorage.getItem(key);
				if (statedata)
				{
					let pushdata = JSON.parse(statedata);
					if (pushdata?.data)
						return pushdata.data[varid];
				}
			}
		};

		historymodule.back = function ()
		{
			if (window.history)
				return window.history.back();
		};

		historymodule.forward = function ()
		{
			if (window.history)
				return window.history.forward();
		};

		return historymodule;
	})();

    nexacro._getWindowHwndHandle = nexacro._emptyFn; //for nre only
    nexacro._showQuickviewMenu = function (/*comp, sx, sy*/) { };
	nexacro._setSystemMenuResizable = function (/*handle, resizable*/) { };
    
	
    nexacro._setUseHttpKeepAlive = nexacro._emptyFn;
	nexacro._setHttpTimeout = nexacro._emptyFn;
	nexacro._setHttpRetry = nexacro._emptyFn;

    nexacro._addExtensionModule = nexacro._emptyFn;
	nexacro._loadExtensionModules = nexacro._emptyFn;
	
	nexacro._on_apply_layered = nexacro._emptyFn;
	nexacro._setWindowTopmost = nexacro._emptyFn;

    if (!system)
        system = nexacro.System;



} // end of (!nexacro._bInitPlatform)

if (_process)
{
    _process = null;
    __pTimerManager = null;
    __pEventTimer = null;
    __pDelayTask = null;
    __pCallbackTimer = null;
    __pOnceCallbackTimer = null;
    _pAnimationFrame = null;
    __pLoadItem = null;
    __pLoadManager = null;
    __pServiceItem = null;
    __pComponentItem = null;
    __pUpdateItem = null;
    _pLayout = null;
    __pLayoutManager = null;
    __pWindow = null;
    __pFlingHandler = null;
    __pTouchTimer = null;
    __pCubicBezier = null;
    _pEnvironment = null;
    _pResizeManager = null;
    __pXCSSGroupAutoSelector = null;
}
