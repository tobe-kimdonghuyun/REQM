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

if (!nexacro.HTMLTextList)
{
    //==============================================================================
    // nexacro.HTMLTextList
    //==============================================================================
    nexacro.HTMLTextList = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.HTMLContentBox.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    
		this._items = [];
		this._scrollSpyObserver = null;
		this._visibleTargets = new Set();
		this._anchor_click_handler = null;
		this._default_contentstyle = `
	.HTMLTextList .html-list-header {
	margin: 0;
	padding: 1.5rem;
	font-size: 1.5rem;
	}

	.HTMLTextList .html-list {
	padding: 0;
	margin: 0;
	}

	.HTMLTextList .html-list > ul,
	.HTMLTextList .html-list li ul,
	.HTMLTextList .html-list li ol {
	list-style: none;
	margin: 0;
	padding-left: 1.5em;
	padding-top: 0;
	padding-bottom: 0;
	}
	
	.HTMLTextList .html-list li {
	counter-increment: section;
	padding : 2px 9px 3px 9px;
	}

	.HTMLTextList .html-list li span {
	display: block;
	}

	.HTMLTextList .html-list li a {
	display: block;
	text-decoration: none;
	color: inherit;
	}

	.HTMLTextList .html-list li a.active {
	color: #0d47a1;
	font-weight: bold;
	}

	.HTMLTextList .html-list ol {
	counter-reset: section;
	}

	.HTMLTextList .html-list > ol {
	padding: 0;
	margin: 0;
	}

	.HTMLTextList .html-list ol > li > a::before,
	.HTMLTextList .html-list ol > li > span::before {
	content: counters(section, ".") ". ";
	display: inline-block;
	width: 2em;
	text-align: right;
	margin-right: 0.5em;
	letter-spacing: normal;
	}
	
	.HTMLTextList summary {
	cursor: pointer;
	}

	.HTMLTextList .html-list details summary > a,
	.HTMLTextList .html-list details summary > span {
	display: inline-block;
	}
	`;
    };

    var _pHTMLTextList = nexacro._createPrototype(nexacro.HTMLContentBox, nexacro.HTMLTextList);
    nexacro.HTMLTextList.prototype = _pHTMLTextList;
    _pHTMLTextList._type_name = "HTMLTextList";
	
    _pHTMLTextList._event_list = {
        ...nexacro.HTMLContentBox.prototype._event_list
    };

    /* default properties */
	_pHTMLTextList._p_header = "";
	_pHTMLTextList._p_textcolumn = "";
	_pHTMLTextList._p_levelcolumn = "";
	_pHTMLTextList._p_anchorcolumn = "";
	_pHTMLTextList._p_listtype = "unordered";
	_pHTMLTextList._p_contentstyle = "";
	_pHTMLTextList._p_usefloating = true;
	_pHTMLTextList._p_usecollapse = false;

    //===============================================================
    // nexacro.HTMLTextList : Create & Update & destroy
    //===============================================================
	
    _pHTMLTextList.on_after_created = function ()
    {
		var control_elem = this.getElement();
		if (control_elem)
			control_elem.setElementOverflow("auto");
		
		this._createTextList();
    };

	_pHTMLTextList.on_destroy_contents = function ()
	{
		this._tearDownScrollSpy();
		this._tearDownAnchorHandlers();
		this._removeEventHandlerToInnerDataset();
		
		this._innerdataset = null;
		this._items = null;
		this._textlist = null;
		this._visibleTargets = null;
		this._anchor_click_handler = null;
	};

    //===============================================================
    // nexacro.HTMLTextList : Override
    //===============================================================
	_pHTMLTextList.on_apply_innerdataset = function ()
	{
		nexacro.HTMLContentBox.prototype.on_apply_innerdataset.call(this);

		if (this._is_created)
		{
			this._createTextList();
		}
	};

    //===============================================================
    // nexacro.HTMLTextList : Properties
    //===============================================================
	_pHTMLTextList.set_header = function (v)
	{
		if (v != this._p_header)
		{
			this._p_header = v;
			this.on_apply_header();
		}
	};

	_pHTMLTextList.on_apply_header = function ()
	{
		if (this._is_created)
		{
            this._createTextList();
		}
	};

	_pHTMLTextList.set_textcolumn = function (v)
	{
		if (v != this._p_textcolumn)
		{
			this._p_textcolumn = v;
			this.on_apply_textcolumn();
		}
	};

	_pHTMLTextList.on_apply_textcolumn = function ()
	{
		if (this._is_created)
		{
            this._createTextList();
		}
	};

    _pHTMLTextList.set_levelcolumn = function (v)
    {
        if (v != this._p_levelcolumn)
        {
            this._p_levelcolumn = v;
            this.on_apply_levelcolumn();
        }
    };

    _pHTMLTextList.on_apply_levelcolumn = function ()
    {
        if (this._is_created)
		{
            this._createTextList();
        }
    };

    _pHTMLTextList.set_anchorcolumn = function (v) 
	{
		if (v != this._p_anchorcolumn)
		{
			this._p_anchorcolumn = v;
			this.on_apply_anchorcolumn();
		}
    };

	_pHTMLTextList.on_apply_anchorcolumn = function ()
	{
		if (this._is_created)
		{
            this._createTextList();
		}
	};
    
	_pHTMLTextList.set_listtype = function (v)
	{
		var val = v.toLowerCase();
		if (val != this._p_listtype && (val == "ordered" || val == "unordered"))
		{
			this._p_listtype = val;
			this.on_apply_listtype();
		}
	};

	_pHTMLTextList.on_apply_listtype = function ()
	{
		if (this._is_created)
		{
			this._createTextList();
		}
	};
    
	_pHTMLTextList.set_contentstyle = function (v)
	{
		if (v != this._p_contentstyle)
		{
			this._p_contentstyle = v;
			this.on_apply_contentstyle();
		}
	};

	_pHTMLTextList.on_apply_contentstyle = function ()
	{
		if (this._is_created)
		{
			this._createTextList();
		}
	};

	_pHTMLTextList.set_usefloating = function (v)
	{
        v = nexacro._toBoolean(v);
		if (v != this._p_usefloating)
		{
			this._p_usefloating = v;
			this.on_apply_usefloating();
		}
	};

	_pHTMLTextList.on_apply_usefloating = function ()
	{
		if (this._is_created)
		{
			this._createTextList();
		}
	};

	_pHTMLTextList.set_usecollapse = function (v)
	{
        v = nexacro._toBoolean(v);
		if (v != this._p_usecollapse)
		{
			this._p_usecollapse = v;
			this.on_apply_usecollapse();
		}
	};

	_pHTMLTextList.on_apply_usecollapse = function ()
	{
		if (this._is_created)
		{
			this._createTextList();
		}
	};

    _pHTMLTextList.set_enable = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_enable != v)
        {
            this._p_enable = v;
			
            if (this._is_created)
            {
                var enable_flag = (this._p_parent._real_enable && v);
                if (this._real_enable != enable_flag)
                {
                    this._real_enable = enable_flag;
                    this._changeStatus("disabled", !enable_flag);
                    this.on_apply_prop_enable(this._real_enable);
                }
            }
        }
    };

	_pHTMLTextList.on_apply_prop_enable = function (enable)
	{
		var target_node = this.querySelector(".html-list");
		var active_node = this.querySelector(".active");
		if (target_node)
		{
            if (enable)
			{
                target_node.classList.remove("is-disabled");
                target_node.setAttribute("aria-disabled", "false");
                this._setupScrollSpy(this._getAnchorElements());
            }
			else
			{
                target_node.classList.add("is-disabled");
                target_node.setAttribute("aria-disabled", "true");
				if (active_node)
				{
					active_node.classList.remove("active");
				}
                this._tearDownScrollSpy();
            }
        }
		nexacro.HTMLContentBox.prototype.on_apply_prop_enable.call(this, enable);
	};

	_pHTMLTextList._properties = [
		{name: "content", readonly : true }, { name: "header"}, { name: "textcolumn" }, { name: "levelcolumn" }, { name: "anchorcolumn" }, { name: "listtype" }, { name: "contentstyle" }, { name: "usefloating" }, { name: "enable" }, { name: "usecollapse" }
	];
    nexacro._defineProperties(_pHTMLTextList, _pHTMLTextList._properties);
	
    //===============================================================
    // nexacro.HTMLTextList : Methods
    //===============================================================
	_pHTMLTextList._createTextList = function ()
	{
		var ds = this._innerdataset;
		if (!ds || !this._p_textcolumn || !this._p_levelcolumn || ds.getRowCount() === 0)
		{
			this._deleteTextList();
			return;
		}

		var style_content = this._default_contentstyle;
		var floating_rule = "";

		if (this._p_contentstyle)
		{
			if (this._p_contentstyle.indexOf("::") > -1 && this._p_contentstyle.endsWith(".css")) // Service css file style
			{
				var env = this._getForm()._getEnvironment();
				var css_url = env?._getServiceLocation(this._p_contentstyle, this._getForm()._getRefFormBaseUrl());        
				style_content = "@import url('" + css_url + "');";
			}
			else
			{
				style_content = this._p_contentstyle; // user style
			}
		}
		else
		{
			style_content = this._default_contentstyle; // default style
		}
		

		if (this._p_usefloating === true)
		{
			var escaped_id = this._unique_id.replace(/\./g, "\\.");
			floating_rule = "#" + escaped_id + " { position: sticky; z-index:100; }";
		}

		var final_style = [style_content, floating_rule].filter(Boolean).join(" ");
		var style_str = final_style ? "<style>" + final_style + "</style>" : "";

        var list = this._buildListFromDataset(ds);
        var final_str = this._createContents(list);
		this.set_content(style_str + final_str);
		
		var anchors = this._getAnchorElements();
		this._setupScrollSpy(anchors);
		this._setupAnchorHandlers(anchors);
	};

    _pHTMLTextList._buildListFromDataset = function (ds)
    {
        var text_col = this._p_textcolumn;
		var level_col = this._p_levelcolumn;
		var anchor_col = this._p_anchorcolumn;
        var row_count = ds.getRowCount();

		// 1. Build node list from dataset
		var nodes = [];
		for (var i = 0; i < row_count; i++)
		{
			nodes.push({
				level: parseInt(ds.getColumn(i, level_col), 10) || 0,
				text: ds.getColumn(i, text_col),
				anchor: anchor_col ? ds.getColumn(i, anchor_col) : null,
				row: i,
				children: []
			});
		}

		// 2. Build node list structure
		var list = [];
		var parents = [];
		for (var i = 0; i < nodes.length; i++)
		{
			var node = nodes[i];
			var level = node.level;

			if (level == 0)
			{
				list.push(node);
			}
			else
			{
				var parent = parents[level - 1];
				if (parent)
				{
					parent.children.push(node);
				}
				else
				{
					// If parent is not found, add to root to prevent loss
					list.push(node);
				}
			}
			parents[level] = node;
		}
        return list;
    };

    _pHTMLTextList._createContents = function (list)
    {
		var css_class = this._p_cssclass || "";

		var formid = this._getForm()._unique_id;
		var render_nodes = function (targetList, is_nested)
		{
			if (!targetList || targetList.length === 0) return "";
			
			var list_type = this._p_listtype || "unordered";
			var tag = (list_type === "ordered") ? "ol" : "ul";
			var list_items_str = "";
			for (var i = 0; i < targetList.length; i++)
			{
				var node = targetList[i];
				var text = node.text ? nexacro._encodeXml(node.text) : "";
				var inner_content;

				if (node.anchor)
				{
					var anchor = nexacro._encodeXml(node.anchor);
					inner_content = this._createContentNode("a", { href: "#" + formid + "." + anchor }, text);
				}
				else
				{
					inner_content = this._createContentNode("span", null, text);
				}

				var children_str = render_nodes.call(this, node.children, true);

				if (this._p_usecollapse && node.children.length > 0)
				{
					var summary_node = this._createContentNode("summary", null, inner_content);
					var details_content = summary_node + children_str;
					inner_content = this._createContentNode("details", { "open": "true" }, details_content);
					list_items_str += this._createContentNode("li", { "data-row": node.row }, inner_content);
				}
				else
				{
					list_items_str += this._createContentNode("li", { "data-row": node.row }, inner_content + children_str);
				}
			}

			var list_attributes = is_nested ? { "class": "nested-list" } : null;
			return this._createContentNode(tag, list_attributes, list_items_str);
		};

		var final_str_body = render_nodes.call(this, list, false);		
        var header_str = "";
        if (this._p_header) 
		{
            header_str = this._createContentNode("h3", { "class": "html-list-header" }, this._p_header);
        }
		
        var class_string = css_class ? "html-list " + css_class : "html-list";
		var list_str = this._createContentNode("div", { "class": class_string }, final_str_body);

		return header_str + list_str;
    };

	_pHTMLTextList._deleteTextList = function ()
	{
		this._items = [];
		if (this.content)
		{
			this.set_content("");
		}
	};

	//===============================================================
    // nexacro.HTMLTextList : Event Handlers
    //===============================================================
	_pHTMLTextList._setupAnchorHandlers = function (anchors)
	{
		this._tearDownAnchorHandlers();

		if (anchors && anchors.length > 0)
		{
			this._anchor_click_handler = function (e)
			{
				e.preventDefault();

				if (nexacro._isTouchInteraction)
					this._on_focus(true);

				anchors.forEach(l => l.classList.remove("active"));

				var current_anchor = e.currentTarget;
				current_anchor.classList.add("active");
				
				var href = current_anchor.getAttribute("href");
				if (href && href.startsWith("#")) 
				{
					var targetId = href.substring(1);
					var target = this._getElementById(targetId);
					if (target)
					{
        				var control_elem = this.getElement();
						control_elem.setElementScrollIntoView(target, { behavior: "smooth" });
					}
				}
			}.bind(this);

			for (var i = 0; i < anchors.length; i++) 
			{
				anchors[i].addEventListener("click", this._anchor_click_handler);
			}
		}
	};

	_pHTMLTextList._tearDownAnchorHandlers = function ()
	{
		if (this._anchor_click_handler)
		{
			var anchors = this._getAnchorElements();
			if (anchors && anchors.length > 0)
			{
				for (var i = 0; i < anchors.length; i++)
				{
					anchors[i].removeEventListener("click", this._anchor_click_handler);
				}
			}
			this._anchor_click_handler = null;
		}
	};
	
	_pHTMLTextList._getDlgCode = function (keycode)
	{
		var _want_arrows = false;
		
		if (keycode === nexacro.Event.KEY_UP || keycode === nexacro.Event.KEY_DOWN)
		{
			_want_arrows = true;
		}
		else if (this._p_usecollapse && (keycode === nexacro.Event.KEY_LEFT || keycode === nexacro.Event.KEY_RIGHT))
		{
			_want_arrows = true;
		}
		
		return {
			want_tab: false,
			want_return: false,
			want_escape: false,
			want_chars: false,
			want_arrows: _want_arrows
		};
	};
	
	_pHTMLTextList.on_fire_sys_onkeydown = function (key_code/*, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key*/)
	{
		if (key_code === nexacro.Event.KEY_UP || key_code === nexacro.Event.KEY_DOWN)
		{
			this._stopEventPropagation();
			this._handleArrowNavigation(key_code === nexacro.Event.KEY_UP ? 'up' : 'down');
			return true;
		}
		else if (this._p_usecollapse && (key_code === nexacro.Event.KEY_LEFT || key_code === nexacro.Event.KEY_RIGHT))
		{
			this._stopEventPropagation();
			this._handleExpandCollapse(key_code === nexacro.Event.KEY_RIGHT);
			return true;
		}

		return false;
	};

	_pHTMLTextList._stopEventPropagation = function ()
	{
		var elem = this.getElement();
		if (elem)
		{
			elem._event_stop = true;
		}
	};

	_pHTMLTextList._handleArrowNavigation = function (direction)
	{
		var focusable_items = this._getFocusableItems();
		if (!focusable_items || focusable_items.length === 0)
		{
			return;
		}

		var current_item = this._getCurrentFocusedItem();
		var current_index = -1;

		if (current_item)
		{
			for (var i = 0; i < focusable_items.length; i++)
			{
				if (focusable_items[i] === current_item)
				{
					current_index = i;
					break;
				}
			}
		}

		var next_index;
		if (direction === 'up')
		{
			next_index = current_index > 0 ? current_index - 1 : 0;
		}
		else
		{
			if (current_index === -1)
			{
				next_index = 0;
			}
			else
			{
				next_index = current_index < focusable_items.length - 1 ? current_index + 1 : current_index;
			}
		}

		if (focusable_items[next_index])
		{
			this._navigateToItem(focusable_items[next_index]);
		}
	};

	_pHTMLTextList._handleExpandCollapse = function (should_expand)
	{
		var current_item = this._getCurrentFocusedItem();
		if (!current_item)
		{
			return;
		}

		var details = this._getParentDetails(current_item);
		if (details)
		{
			this._expandCollapseDetails(details, should_expand);
		}
	};

	_pHTMLTextList._getFocusableItems = function ()
	{
		var list_node = this.querySelector('.html-list');
		if (!list_node)
		{
			return [];
		}

		var items = [];
		var i, len;
		var anchors, summaries, all_items, item;

		if (this._p_usecollapse)
		{
			anchors = list_node.querySelectorAll('a');
			summaries = list_node.querySelectorAll('summary');
			all_items = [];

			// 모든 앵커 추가
			for (i = 0, len = anchors.length; i < len; i++)
			{
				all_items.push(anchors[i]);
			}

			// 앵커를 포함하지 않는 summary만 추가
			for (i = 0, len = summaries.length; i < len; i++)
			{
				if (!summaries[i].querySelector('a'))
				{
					all_items.push(summaries[i]);
				}
			}

			// 축소된 details 내부 항목 필터링
			for (i = 0, len = all_items.length; i < len; i++)
			{
				item = all_items[i];
				if (this._isItemVisible(item))
				{
					items.push(item);
				}
			}
		}
		else
		{
			anchors = list_node.querySelectorAll('a');
			for (i = 0, len = anchors.length; i < len; i++)
			{
				items.push(anchors[i]);
			}
		}

		return items;
	};

	_pHTMLTextList._isItemVisible = function (item)
	{
		var parent = item.parentElement;
		var summary;

		while (parent)
		{
			if (parent.tagName === 'DETAILS' && !parent.hasAttribute('open'))
			{
				// summary 내부 항목은 보이는 것으로 처리
				summary = parent.querySelector('summary');
				if (summary && summary.contains(item))
				{
					return true;
				}
				return false;
			}
			parent = parent.parentElement;
		}
		return true;
	};

	_pHTMLTextList._getCurrentFocusedItem = function ()
	{
		var control_elem = this.getElement();
		var active_element, list_node;

		if (!control_elem)
		{
			return null;
		}

		active_element = document.activeElement;
		if (!active_element)
		{
			return null;
		}

		list_node = this.querySelector('.html-list');
		if (list_node && list_node.contains(active_element))
		{
			return active_element;
		}

		return null;
	};

	_pHTMLTextList._navigateToItem = function (item)
	{
		if (!item)
		{
			return;
		}

		item.focus();
	};

	_pHTMLTextList._getParentDetails = function (element)
	{
		if (!element)
		{
			return null;
		}

		var parent = element.parentElement;
		while (parent)
		{
			if (parent.tagName === 'DETAILS')
			{
				return parent;
			}
			parent = parent.parentElement;
		}
		return null;
	};

	_pHTMLTextList._expandCollapseDetails = function (details, should_expand)
	{
		if (!details)
		{
			return;
		}

		if (should_expand)
		{
			details.setAttribute('open', 'true');
		}
		else
		{
			details.removeAttribute('open');
		}
	};

	//===============================================================
    // nexacro.HTMLTextList : Logical Part
    //===============================================================
	_pHTMLTextList._setupScrollSpy = function (anchors)
	{
		this._tearDownScrollSpy();

		if (!anchors || anchors.length === 0)
		{
			return;
		}

		var targets = [];
		anchors.forEach(anchor => {
			const href = anchor.getAttribute("href");
			if (href && href.startsWith("#"))
			{
				const targetId = href.substring(1);
				const targetElement = this._getElementById(targetId);
				if (targetElement)
				{
					targets.push(targetElement);
				}
			}
		});

		if (targets.length === 0)
		{
			return;
		}

		var observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.4
		};
		
		this._scrollSpyObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting)
				{
					this._visibleTargets.add(entry.target);
				}
				else
				{
					this._visibleTargets.delete(entry.target);
				}
			});

			let bestTarget = null;
			if (this._visibleTargets.size > 0)
			{
				var visibleArray = Array.from(this._visibleTargets);
				visibleArray.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
				bestTarget = visibleArray[0];
			}

			anchors.forEach(anchor => {
				const href = anchor.getAttribute("href");
				const targetId = href ? href.substring(1) : null;
				
				if (bestTarget && targetId === bestTarget.id)
				{
					anchor.classList.add("active");
				}
				else
				{
					anchor.classList.remove("active");
				}
			});

		}, observerOptions);

		targets.forEach(target => {
			this._scrollSpyObserver.observe(target);
		});
	};

	_pHTMLTextList._tearDownScrollSpy = function ()
	{
		if (this._scrollSpyObserver)
		{
			this._scrollSpyObserver.disconnect();
			this._scrollSpyObserver = null;
		}
		if (this._visibleTargets)
		{
			this._visibleTargets.clear();
		}
	};

	//===============================================================
    // nexacro.HTMLTextList : Util Function
    //===============================================================
	_pHTMLTextList._getAnchorElements = function ()
	{
		return this.querySelectorAll("a");
	};

	_pHTMLTextList._getElementById = function (id)
    {
        const control_elem = this.getElement();
        if (!control_elem)
            return;

        return control_elem._getElementById(id);
    };

	_pHTMLTextList.expandAll = function ()
	{
		var details = this.querySelectorAll("details");
		if (details)
		{
			for (var i = 0; i < details.length; i++)
			{
				details[i].setAttribute("open", "true");
			}
		}
	};

	_pHTMLTextList.collapseAll = function ()
	{
		var details = this.querySelectorAll("details");
		if (details)
		{
			for (var i = 0; i < details.length; i++)
			{
				details[i].removeAttribute("open");
			}
		}
	};

	_pHTMLTextList._createContentNode = function (tagname, attributes, innerHTML)
	{
        const control_elem = this.getElement();
        if (!control_elem)
            return;

        return control_elem._createContentNode(tagname, attributes, innerHTML);
	}

	_pHTMLTextList = null;
}