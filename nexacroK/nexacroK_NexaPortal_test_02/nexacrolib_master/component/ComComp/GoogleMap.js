//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.0.html	
//
//==============================================================================

if (!nexacro.GoogleMap)
{
	nexacro.GoogleMapEventInfo = function (obj, id, centerlocation, coordinates, viewmode, zoomlevel, addresses)
	{
		this.id = this.eventid = id;
		this.fromobject = this.fromreferenceobject = obj;
		this.centerlatitude = centerlocation.latitude;
		this.centerlongitude = centerlocation.longitude;
		this.latitude = coordinates.latitude;
		this.longitude = coordinates.longitude;
		this.viewmode = viewmode;
		this.zoomlevel = zoomlevel;
		this.addresses = addresses;
	};

	var _pGoogleMapEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.GoogleMapEventInfo);
	nexacro.GoogleMapEventInfo.prototype = _pGoogleMapEventInfo;
	_pGoogleMapEventInfo._type_name = "GoogleMapEventInfo";

	_pGoogleMapEventInfo = null;

	nexacro.GoogleMapErrorEventInfo = function (obj, id, errorcode, errormsg)
	{
		this.id = this.eventid = id;
		this.fromobject = this.fromreferenceobject = obj;
		this.errortype = "ObjectError";
		this.statuscode = errorcode;
		this.errormsg = errormsg;
	};

	var _pGoogleMapErrorEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.GoogleMapErrorEventInfo);
	nexacro.GoogleMapErrorEventInfo.prototype = _pGoogleMapErrorEventInfo;
	_pGoogleMapErrorEventInfo._type_name = "GoogleMapErrorEventInfo";

	_pGoogleMapErrorEventInfo = null;

	nexacro.GoogleMapClickEventInfo = function (obj, id, location)
	{
		this.id = this.eventid = id;
		this.fromobject = this.fromreferenceobject = obj;
		this.latitude = location.latitude;
		this.longitude = location.longitude;
	};

	var _pGoogleMapClickEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.GoogleMapClickEventInfo);
	nexacro.GoogleMapClickEventInfo.prototype = _pGoogleMapClickEventInfo;
	_pGoogleMapClickEventInfo._type_name = "GoogleMapClickEventInfo";

	_pGoogleMapClickEventInfo = null;

	nexacro.GoogleMapDragEventInfo = function (obj, id, location)
	{
		this.id = this.eventid = id;
		this.fromobject = this.fromreferenceobject = obj;
		this.latitude = location.latitude;
		this.longitude = location.longitude;
	};

	var _pGoogleMapDragEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.GoogleMapDragEventInfo);
	nexacro.GoogleMapDragEventInfo.prototype = _pGoogleMapDragEventInfo;
	_pGoogleMapDragEventInfo._type_name = "GoogleMapDragEventInfo";

	_pGoogleMapDragEventInfo = null;

	if ((nexacro.Device && nexacro._OS != "Windows") || !(nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8)) // iOS && HTML5
	{
		// googlemap global utils
		nexacro.googlemaps_loaded = false;
		nexacro.googlemaps_callback = function ()
		{
			nexacro.googlemaps_loaded = true;
		};

		nexacro.load_googlemaps = function (googleapikey, language, region)
		{
			if (nexacro.googlemaps_loaded) return;

			var script = document.createElement("script");
			var params = "";
			script.type = "text/javascript";

			if (googleapikey)
				params += "key=" + googleapikey + "&";
			if (language)
				params += "language=" + language + "&";
			if (region)
				params += "region=" + region + "&";

			params += "callback=nexacro.googlemaps_callback";

			script.src = "https://maps.googleapis.com/maps/api/js?" + params;

			document.body.appendChild(script);
		};

		//==============================================================================
		// nexacro.GoogleMap
		//==============================================================================
		nexacro.GoogleMap = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
		{
			nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this._p_name = id || "";

			this._p_latitude = 0;
			this._p_longitude = 0;
			this.centerlocation = {
				latitude: 0,
				longitude: 0
			};

			this.location = {
				latitude: 0,
				longitude: 0
			};

			this.coordinates = {
				latitude: 0,
				longitude: 0
			};

			this._map_elem = null;
			this._google_map = null;
			this.maptype = 0;
			this._p_viewmode = 0;
			// 지도 표시모드 [0],1,2,3
			this._p_zoomlevel = 15;
			// zoom level 0~19, [17]
			this.zoomalign_halign = "left";
			this.zoomalign_valign = "middle";
			this.showmode = false;
			// 지도 표시모드 컨트롤 출력 여부
			this._p_showzoom = false;
			// 지도 줌 컨트롤 출력 여부
			this.shownavigator = false;
			// 지도 내비게이터 컨트롤 출력 여부
			this.showmapscale = false;
			// 지도 축척 컨트롤 출력 여부
			this._p_enableevent = true;

			// google api key
			this._p_apikey = null;

			this._p_language = undefined;
			this._p_region = undefined;

			this._p_items = [];
			// 지도위에 표시할 아이템(GoogleMapMarker/GoogleMapPolyline/GoogleMapPolygon)
			this.itemsname = [];

			this._itemsname = [];
			this._items = [];
			this._infowindowname = [];
			this._infowindow = [];

			this.bSensor = false;

			this.bLoaded = false;
			this._p_enable = true;
			//지도 Marker의 Drag&Drop 활성 여부
			this.draggable = false;
			this.googleloaded = null;

			this._event_list = {
				"onclick": 1,
				"ondblclick": 1,
				"onkeypress": 1,
				"onkeydown": 1,
				"onkeyup": 1,
				"onkillfocus": 1,
				"onsetfocus": 1,
				"ondragstart": 1,
				"ondrag": 1,
				"ondragenter": 1,
				"ondragleave": 1,
				"ondragmove": 1,
				"ondragend": 1,
				"ondrop": 1,
				"onlbuttondown": 1,
				"onlbuttonup": 1,
				"onmouseenter": 1,
				"onmouseleave": 1,
				"onmousemove": 1,
				"onmove": 1,
				"onsize": 1,
				"onrbuttondown": 1,
				"onrbuttonup": 1,
				// added event
				"onload": 1,
				"onrecvsuccess": 1,
				"onoverlayclick": 1,
				"oncenterchanged": 1,
				"onviewmodechanged": 1,
				"onzoomchanged": 1,
				"onmapdragstart": 1,
				"onmapdrag": 1,
				"onmapdragend": 1,
				"onerror": 1,
				"ondevicebuttonup": 1
			};
			//nexacro.load_googlemaps();
		};

		var _pGoogleMap = nexacro._createPrototype(nexacro.Component, nexacro.GoogleMap);
		nexacro.GoogleMap.prototype = _pGoogleMap;
		_pGoogleMap._type_name = "GoogleMap";

		var _itemsname = [];
		var _items = [];
		var _infowindowname = [];
		var _infowindow = [];

		//===============================================================
		// nexacro.GoogleMap : Create & Destroy & Update
		//===============================================================
		_pGoogleMap.on_create_contents = function ()
		{
			var control_elem = this.getElement();
			if (control_elem)
			{
				this._map_elem = new nexacro.Element(control_elem);
				this._map_elem.setElementSize(this._getClientWidth(), this._getClientHeight());
			}
		};

		_pGoogleMap.on_create_contents_command = function ()
		{
			var control_elem = this.getElement();
			if (control_elem)
			{
				this._map_elem = new nexacro.Element(control_elem);
				this._map_elem.setElementSize(this._getClientWidth(), this._getClientHeight());
				this._map_elem.setElementTypeCSSSelector("nexamap");

				return this._map_elem.createCommand();
			}
			return "";
		};

		_pGoogleMap.on_attach_contents_handle = function (win, enablea11y)
		{
			if (this._map_elem)
				this._map_elem.attachHandle(win);
		};

		_pGoogleMap.on_created_contents = function (win)
		{
			var map_elem = this._map_elem;
			if (map_elem)
			{
				map_elem.setElementTypeCSSSelector("nexamap");
				map_elem.create(win);

				this.document = map_elem._document;
				this.window = map_elem._winodw;
			}
		};

		_pGoogleMap.on_destroy_contents = function ()
		{
			var map_elem = this._map_elem;
			if (map_elem)
			{
				map_elem.destroy();
				this._map_elem = null;
			}
		};

		_pGoogleMap.on_change_containerRect = function (width, height)
		{
			var map_elem = this._map_elem;
			if (map_elem)
			{
				map_elem.setElementSize(width, height);
			}
		};

		//===============================================================
		// nexacro.GoogleMap : Override
		//===============================================================

		//===============================================================
		// nexacro.GoogleMap : Properties
		//===============================================================
		_pGoogleMap.set_draggable = function (v)
		{
			if (v == null)
			{
				return false;
			}
			else if (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.draggable = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.draggable = false;
				}
			}
			else
			{
				return false;
			}
		};

		_pGoogleMap.set_zoomalign = function (name, val)
		{
			if (name == "halign")
			{
				this.zoomalign_halign = val;
			}
			else if (name == "valign")
			{
				this.zoomalign_valign = val;
			}
			else
			{
				return false;
			}

			this.zoomalign = this._getalign(this.zoomalign_halign,
				this.zoomalign_valign);

			this._google_map_option_test = {
				zoomControlOptions: {
					position: this.zoomalign,
					style: google.maps.ZoomControlStyle.DEFAULT
				}
			};

			return true;
		};

		_pGoogleMap.set_enableevent = function (v)
		{
			this._p_enableevent = nexacro._toBoolean(v);
			return v;
		};

		_pGoogleMap.set_viewmode = function (v)
		{
			if (v != null)
			{
				this._p_viewmode = v;
				if (this.bLoaded)
				{
					this._google_map_option = {
						mapTypeId: this._getMapType(this._p_viewmode)
					};
					this._google_map
						.setOptions(this._google_map_option);
				}
				return true;
			}
			else
			{
				return false;
			}
		};

		_pGoogleMap.set_showmode = function (v)
		{
			if (v != null)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.showmode = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.showmode = false;
				}
				else
				{
					return false;
				}

				if (this.bLoaded)
				{
					//var myLatlng = new google.maps.LatLng(37.5640, 126.9751);
					this._google_map_option_test = {
						mapTypeControl: this.showmode,
						mapTypeControlOptions: {
							style: google.maps.MapTypeControlStyle.DEFAULT,
							position: this.modealign
						}
					};

					this._google_map
						.setOptions(this._google_map_option_test);
				}
				return true;
			}
		};


		_pGoogleMap.set_showmapscale = function (v)
		{
			if (v != null)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.showmapscale = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.showmapscale = false;
				}
				else
				{
					return false;
				}

				if (this.bLoaded)
				{
					this._google_map_option_test = {
						scaleControl: this.showmapscale
					};
					this._google_map
						.setOptions(this._google_map_option_test);
				}
				return true;
			}
		};

		_pGoogleMap.set_shownavigator = function (v)
		{
			if (v != null)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.shownavigator = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.shownavigator = false;
				}
				else
				{
					return false;
				}

				if (this.bLoaded)
				{
					//var myLatlng = new google.maps.LatLng(37.5640, 126.9751);
					this._google_map_option_test = {
						panControl: this.shownavigator
					};
					this._google_map
						.setOptions(this._google_map_option_test);
				}
				return true;
			}
		};

		_pGoogleMap.set_apikey = function (v)
		{
			if (v == null)
				return false;

			this._p_apikey = v;
		};

		_pGoogleMap.set_language = function (v)
		{
			v = nexacro._toString(v);
			this._p_language = v;
		};

		_pGoogleMap.set_region = function (v)
		{
			v = nexacro._toString(v);
			this._p_region = v;
		};

		_pGoogleMap.set_zoomlevel = function (v)
		{
			this._p_zoomlevel = Number(v.toString());
		};

		_pGoogleMap.set_enable = function (v)
		{
			if (v == null)
			{
				return false;
			}
			else if (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this._p_enable = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this._p_enable = false;
				}
				if (this.bLoaded)
				{
					this._google_map_option = {
						draggable: this.enable
					};
					this._google_map
						.setOptions(this._google_map_option);
				}
				return true;
			}
			else
			{
				return false;
			}
		};

		_pGoogleMap.set_showzoom = function (v)
		{
			if (v == null)
				return false;

			if (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this._p_showzoom = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this._p_showzoom = false;
				}
				else
				{
					return false;
				}

				if (this.bLoaded)
				{
					//var myLatlng = new google.maps.LatLng(37.5640, 126.9751);
					this._google_map_option_test = {
						center: new google.maps.LatLng(
							this.centerlocation.latitude,
							this.centerlocation.longitude),
						zoomControl: this._p_showzoom
					};
					this._google_map
						.setOptions(this._google_map_option_test);
				}
				return true;
			}
		};

		_pGoogleMap._properties = [
			{ name: "apikey" }, { name: "items", readonly: true }, { name: "language" },
			{ name: "latitude", readonly: true }, { name: "longitude", readonly: true }, { name: "region" },
			{ name: "showzoom" }, { name: "viewmode" }, { name: "zoomlevel" }, { name: "enable" }, { name: "enableevent" }
		];

		nexacro._defineProperties(_pGoogleMap, _pGoogleMap._properties);

		//===============================================================
		// nexacro.GoogleMap : Methods
		//===============================================================
		_pGoogleMap.load = function (bUseSensor, nLatitude, nLongitude, constViewMode, nZoomLevel, retry)
		{
			var google_map = this._google_map;
			if (nexacro.googlemaps_loaded == false)
			{
				if (!retry)
					nexacro.load_googlemaps(this._p_apikey, this._p_language, this._p_region);

				var target = this;
				//setTimeout(function ()
				nexacro._OnceCallbackTimer.callonce(target, function ()
				{
					target.load(bUseSensor, nLatitude, nLongitude, constViewMode, nZoomLevel, true);
				}, 500);

				return;
			}

			this._id = nexacro.Device.makeID();
			var parentMap = nexacro.Device._userCreatedObj[this._id] = this;

			var strlength = 0;
			var myLatlng;

			if (nZoomLevel)
			{
				try
				{
					strlength = nZoomLevel.toString().split(" ").join("");
				}
				catch (e)
				{
					return false;
				}

				if (nZoomLevel.length == 0)
				{
					return false;
				}

				var nzoom = 0;
				try
				{
					nzoom = Number(nZoomLevel.toString());
				}
				catch (e)
				{
					return false;
				}

				if (nzoom >= 0)
				{
					this._p_zoomlevel = nzoom;
				}
				else
				{
					return false;
				}
			}

			if (constViewMode)
			{
				if (constViewMode == 0 || (typeof (constViewMode) == "string" && constViewMode == "0"))
				{
					this._p_viewmode = 0;
				}
				else if (constViewMode == 1 || (typeof (constViewMode) == "string" && constViewMode == "1"))
				{
					this._p_viewmode = 1;
				}
				else if (constViewMode == 2 || (typeof (constViewMode) == "string" && constViewMode == "2"))
				{
					this._p_viewmode = 2;
				}
				else if (constViewMode == 3 || (typeof (constViewMode) == "string" && constViewMode == "3"))
				{
					this._p_viewmode = 3;
				}
				else
				{
					return false;
				}
			}
			else
			{
				this._p_viewmode = 0;
			}

			if (nLatitude && nLongitude)
			{

				strlength = 0;
				try
				{
					strlength = nLatitude.toString().split(" ").join("");
				}
				catch (e)
				{
					return false;
				}
				if (strlength.length == 0)
				{
					return false;
				}
				try
				{
					strlength = nLongitude.toString().split(" ").join("");
				}
				catch (e)
				{
					return false;
				}
				if (strlength.length == 0)
				{
					return false;
				}

				var nlat = 0;
				var nlon = 0;
				try
				{
					nlat = Number(nLatitude.toString());

				}
				catch (e)
				{
					return false;
				}

				if (nlat != nlat)
				{
					return false;
				}
				try
				{
					nlon = Number(nLongitude.toString());
				}
				catch (e)
				{
					return false;
				}

				if (nlon != nlon)
				{
					return false;
				}
				this.centerlocation.latitude = nlat;
				this.centerlocation.longitude = nlon;
				this._p_latitude = nlat;
				this._p_longitude = nlon;

				this.centerlocation = {
					latitude: nlat,
					longitude: nlon
				};
			}

			if (bUseSensor)
			{
				// set bUseSensor
				if (bUseSensor == true || (typeof (bUseSensor) == "string" && bUseSensor == "true"))
				{
					this.bSensor = true;
				}
				else
				{
					this.bSensor = false;
				}

				if (constViewMode == null)
				{
					this._p_viewmode = 0;
				}
			}
			else
			{
				this.bSensor = false;
			}

			var map_elem = this._map_elem;
			if (map_elem)
			{
				map_elem.create();
			}

			if (this.bSensor)
			{
				if (navigator.geolocation)
				{
					//browserSupportFlag = true;
					navigator.geolocation.getCurrentPosition(function (position)
					{
						var initialLocation = new google.maps.LatLng(position.coords._p_latitude,
							position.coords._p_longitude);
						google_map.setCenter(initialLocation);

					}, function ()
					{
						parentMap._apply_onerror({ errorcode: "1503", errormsg: "Device provider disable" });
					});
					// Try Google Gears Geolocation
				}
				else if (google.gears)
				{
					var geo = google.gears.factory.create('beta.geolocation');
					geo.getCurrentPosition(function (position)
					{
						var initialLocation = new google.maps.LatLng(position._p_latitude,
							position._p_longitude);

						myLatlng = new google.maps.LatLng(position._p_latitude,
							position._p_longitude);
						google_map.setCenter(initialLocation);

					}, function ()
					{
						parentMap._apply_onerror({ errorcode: "1503", errormsg: "Device provider disable" });
					});
					// Browser doesn't support Geolocation
					return false;
				}
			}
			else
			{
				myLatlng = new google.maps.LatLng(this.centerlocation.latitude, this.centerlocation.longitude);
			}

			this._google_map_option = {
				center: myLatlng, //좌표
				panControl: this.shownavigator, //컨트롤 (위아래좌우 이동 표시기)
				zoomControl: this._p_showzoom,
				zoomControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				mapTypeControl: this.showmode,
				scaleControl: this.showmapscale,
				zoom: this._p_zoomlevel,
				disableDefaultUI: false,
				draggable: this.enable,
				mapTypeId: this._getMapType(this._p_viewmode)
			};

			google_map = new google.maps.Map(map_elem.handle, this._google_map_option);
			this._google_map = google_map;

			for (var i = 0; i < this.itemsname.length; i++)
			{
				if (this._p_items[this.itemsname[i]]._type == 0 || this._p_items[this.itemsname[i]]._type == 1)
				{
					this.addMarker(this.itemsname[i], this._p_items[this.itemsname[i]]);
				}
				else if (this._p_items[this.itemsname[i]]._type == 2)
				{
					this.addPolyline(this.itemsname[i], this._p_items[this.itemsname[i]]);
				}
				else if (this._p_items[this.itemsname[i]]._type == 3)
				{
					this.addPolygon(this.itemsname[i], this._p_items[this.itemsname[i]]);
				}
				else if (this._p_items[this.itemsname[i]]._type == 4)
				{
					this.addCircle(this.itemsname[i], this._p_items[this.itemsname[i]]);
				}
			}

			google.maps.event.addListener(google_map, 'click', function (e)
			{
				if (parentMap.onclick && parentMap.onclick._has_handlers && parentMap.enableevent)
				{
					parentMap.location.latitude = e.latLng.lat();
					parentMap.location.longitude = e.latLng.lng();

					var evt = new nexacro.GoogleMapClickEventInfo(parentMap, "onclick", parentMap.location);

					parentMap.onclick._fireEvent(this, evt);
				}
				return true;
			});

			//[RP 89052, 44966] iOS 에서 GPS/무선네트워크를 비활성화시킨 상태에서 map load 시 onload, onerror 이벤트 모두 발생합니다.
			google.maps.event.addListenerOnce(google_map, 'tilesloaded', function ()
			{
				//full onloaded, onload event call
				parentMap.bLoaded = true;
				parentMap._apply_onload();

				google.maps.event.addListenerOnce(google_map, 'tilesloaded', function ()
				{
					//this part runs when the mapobject shown for the first time
				});
			});

			google.maps.event.addListener(google_map, 'dragstart', function (e)
			{
			});

			google.maps.event.addListener(google_map, 'mouseout', function (e)
			{
			});

			google.maps.event.addListener(google_map, 'dragenter', function (e)
			{
			});

			google.maps.event.addListener(google_map, 'drag', function (e)
			{
			});

			google.maps.event.addListener(google_map, 'dragend', function (e)
			{
			});

			google.maps.event.addListener(google_map, 'center_changed', function (e)
			{
				var center_lat = google_map.getCenter().lat();
				var center_lng = google_map.getCenter().lng();

				parentMap.centerlocation.latitude = center_lat;
				parentMap.centerlocation.longitude = center_lng;
				parentMap._p_latitude = center_lat;
				parentMap._p_longitude = center_lng;

				if (parentMap.oncenterchanged && parentMap.oncenterchanged._has_handlers && parentMap.enableevent)
				{
					var evt = new nexacro.GoogleMapEventInfo(parentMap, "oncenterchanged", parentMap.centerlocation, parentMap.coordinates, parentMap._p_viewmode, parentMap._p_zoomlevel, parentMap.addresses);

					parentMap.oncenterchanged._fireEvent(this, evt);
				}
				return true;
			});

			google.maps.event.addListener(google_map, 'maptypeid_changed', function (e)
			{
				if (parentMap.onviewmodechanged && parentMap.onviewmodechanged._has_handlers && parentMap.enableevent)
				{
					var evt = new nexacro.GoogleMapEventInfo(parentMap, "onviewmodechanged", parentMap.centerlocation, parentMap.coordinates, parentMap._p_viewmode, parentMap._p_zoomlevel, parentMap.addresses);

					parentMap.onviewmodechanged._fireEvent(this, evt);
				}
				return true;
			});

			google.maps.event.addListener(google_map, 'zoom_changed', function (e)
			{
				if (parentMap.onzoomchanged && parentMap.onzoomchanged._has_handlers && parentMap.enableevent)
				{
					parentMap._p_zoomlevel = google_map.getZoom();

					var evt = new nexacro.GoogleMapEventInfo(parentMap, "onzoomchanged", parentMap.centerlocation, parentMap.coordinates, parentMap._p_viewmode, parentMap._p_zoomlevel, parentMap.addresses);

					parentMap.onzoomchanged._fireEvent(this, evt);
				}
				return true;
			});

			return true;
		};

		_pGoogleMap.setMarkerLoc = function (strItemID, lat, lng)
		{
			//console.log("MOVE:::id=>" + strItemID + " lat=>" + lat
			//		+ " lng=>" + lng);
			this._p_items[strItemID].location.latitude = lat;

			//console.log(this._p_items[strItemID].location.latitude);
			this._p_items[strItemID].location.longitude = lng;
		};

		_pGoogleMap.getAddress = function (nLatitude, nLongitude, nMaxResultCount, strLocale)
		{
			if (nLatitude == null || nLongitude == null || nMaxResultCount < 0)
				return false;


			if (nMaxResultCount == null)
				nMaxResultCount = 1;

			var params = {
				nLatitude: nLatitude,
				nLongitude: nLongitude,
				nMaxResultCount: nMaxResultCount,
				strLocale: strLocale
			};

			var json = {
				id: this._id,
				div: "NexacroMap",
				method: "getAddress",
				params: params
			};

			var jsonstr = JSON.stringify(json);
			nexacro.Device.exec(jsonstr);

			return true;
		};

		_pGoogleMap.getCoordinates = function (strAddress)
		{
			if (strAddress == null || strAddress == "")
				return false;

			var params = {
				straddress: strAddress
			};

			var json = {
				id: this._id,
				div: "NexacroMap",
				method: "getCoordinates",
				params: params
			};

			var jsonstr = JSON.stringify(json);
			nexacro.Device.exec(jsonstr);

			return true;
		};

		_pGoogleMap.addItem = function (strItemID, objItem)
		{
			this._id = nexacro.Device.makeID();
			var parentMap = nexacro.Device._userCreatedObj[this._id] = this;

			if (strItemID == null || objItem == null)
			{
				return false;
			}

			if (strItemID == "" || objItem == "" || objItem == "undefined" || strItemID.trim() == "")
			{
				return false;
			}

			if (typeof (this._p_items[strItemID]) != "undefined")
			{
				this._apply_onerror({
					errorcode: "1501",
					errormsg: "item is already exist."
				});
				return false;
			}

			if (objItem instanceof nexacro.GoogleMapMarker || objItem instanceof nexacro.GoogleMapPolyline || objItem instanceof nexacro.GoogleMapPolygon || objItem instanceof nexacro.GoogleMapCircle)
			{
				this._p_items[strItemID] = objItem;
				this._p_items.push(strItemID);

				if (this.bLoaded)
				{
					if (objItem._type == 0 || objItem._type == 1)
					{
						this.addMarker(strItemID, objItem, parentMap, this);
					}
					else if (objItem._type == 2)
					{
						this.addPolyline(strItemID, objItem);
					}
					else if (objItem._type == 3)
					{
						this.addPolygon(strItemID, objItem);
					}
					else if (objItem._type == 4)
					{
						this.addCircle(strItemID, objItem);
					}
				}
				return true;
			}
			else
			{
				return false;
			}
		};

		_pGoogleMap.setMarkerOptions = function (markName, markObj)
		{
			if (typeof (_infowindow[markName]) == "undefined")
			{
				var temp_infowindow = new google.maps.InfoWindow({
					content: ""
				});
				_infowindowname.push(markName);
				_infowindow[markName] = temp_infowindow;
			}

			var markerOpt;
			if (markObj.imageurl.length > 0)
			{
				var _v = markObj.imageurl.toString().split(" ").join("");
				var img_path = "";

				if (_v.substring(0, 9).toLowerCase() == "%userapp%")
				{
					img_path = "../" + _v.substring(9, _v.length);
				}
				else
				{
					img_path = _v;
				}

				markerOpt = {
					position: new google.maps.LatLng(markObj._location.latitude, markObj._location.longitude),
					title: markObj.text,
					visible: markObj.visible,
					icon: img_path,
					draggable: markObj.draggable
				};
			}
			else
			{
				markerOpt = {
					position: new google.maps.LatLng(markObj._location.latitude, markObj._location.longitude),
					title: markObj.text,
					visible: markObj.visible,
					draggable: markObj.draggable
				};
			}

			var contentString = "<div title=\"\" style='width:100%;height:100%;'><div title=\"\" style='vertical-align:" + markObj.style.align.valign + ";text-align:" + markObj.style.align.halign + ";'>" + markObj.text + "</div></div>";
			_infowindow[markName].setContent(contentString);

			google.maps.event.addListener(_items[markName], 'click', function (e)
			{
				if (_items[markName].title.length > 0)
				{
					_infowindow[markName].open(this._google_map, _items[markName]);
				}
			});

			google.maps.event.addListener(_items[markName], 'drag', function (e)
			{

			});

			google.maps.event.addListener(this._google_map, 'click', function (e)
			{
				_infowindow[markName].close();
			});

			if (!markerOpt.visible && _infowindow[markName] != null)
				_infowindow[markName].close();

			_items[markName].setOptions(markerOpt);
		};

		_pGoogleMap.addMarker = function (markName, markObj, parentMap, obj)
		{
			if (typeof (_infowindow[markName]) == "undefined")
			{
				var temp_infowindow = new google.maps.InfoWindow({
					content: ""
				});
				_infowindowname.push(markName);
				_infowindow[markName] = temp_infowindow;
			}

			var contentString = "<div title=\"\" style='width:100%;height:100%;'><div title=\"\" style='vertical-align:" + markObj.style.align.valign + ";text-align:" + markObj.style.align.halign + ";'>" + markObj.text + "</div></div>";
			_infowindow[markName].setContent(contentString);

			var marker;
			if (markObj.imageurl.length > 0)
			{
				var _v = markObj.imageurl.toString().split(" ").join("");
				var img_path = "";

				if (_v.substring(0, 9).toLowerCase() == "%userapp%")
				{
					img_path = _v.substring(9, _v.length);
					if (img_path.charAt(0) != "/")
						img_path = "/" + img_path;
					img_path = nexacro.System.userapppath + img_path;
				}
				else
				{
					img_path = _v;
				}

				marker = new google.maps.Marker({
					position: new google.maps.LatLng(
						markObj._location.latitude,
						markObj._location.longitude),
					title: markObj.text,
					visible: markObj.visible,
					icon: img_path,
					draggable: markObj.draggable
				});
			}
			else
			{
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(
						markObj._location.latitude,
						markObj._location.longitude),
					title: markObj.text,
					visible: markObj.visible,
					draggable: markObj.draggable
				});
			}

			google.maps.event.addListener(marker, 'dragstart', function (e)
			{
				if (parentMap.onmapdragstart && parentMap.onmapdragstart._has_handlers && parentMap.enableevent)
				{
					markObj._location.latitude = marker.getPosition().lat();
					markObj._location.longitude = marker.getPosition().lng();

					var evt = new nexacro.GoogleMapDragEventInfo(parentMap, "onmapdragstart", markObj._location);
					parentMap.onmapdragstart._fireEvent(obj, evt);
				}
			});

			google.maps.event.addListener(marker, 'drag', function (e)
			{
				if (parentMap.onmapdrag && parentMap.onmapdrag._has_handlers && parentMap.enableevent)
				{
					markObj._location.latitude = marker.getPosition().lat();
					markObj._location.longitude = marker.getPosition().lng();

					var evt = new nexacro.GoogleMapDragEventInfo(parentMap, "onmapdrag", markObj._location);
					parentMap.onmapdrag._fireEvent(obj, evt);
				}
			});

			google.maps.event.addListener(marker, 'dragend', function (e)
			{
				if (parentMap.onmapdragend && parentMap.onmapdragend._has_handlers && parentMap.enableevent)
				{
					markObj._location.latitude = marker.getPosition().lat();
					markObj._location.longitude = marker.getPosition().lng();

					var evt = new nexacro.GoogleMapDragEventInfo(parentMap, "onmapdragend", markObj._location);
					parentMap.onmapdragend._fireEvent(obj, evt);
				}
			});

			google.maps.event.addListener(marker, 'click', function (e)
			{
				if (marker.title.length > 0)
				{
					_infowindow[markName].open(this._google_map, marker);
				}
				// overlayclick call..
				this.gmap_onoverlayclick(markObj/* marker */, e.latLng
					.lat(), e.latLng.lng(), e.pixel.x, e.pixel.y);
			});

			google.maps.event.addListener(marker, 'drag', function (e)
			{
				//console.log("marker drag!!! " + marker + ":" + markName);
			});

			marker.setMap(this._google_map);
			this._google_map.setCenter(marker.getPosition());
			_itemsname.push(markName);
			_items[markName] = marker;
			markObj._map = this;
			markObj._name = markName;
		};

		_pGoogleMap.setPolygonOptions = function (polygonName, polygonObj)
		{
			var _path = [];
			var _lat_lng_arr, _lat, _lng, i;

			_lat_lng_arr = polygonObj.locationdata.toString().split("]");
			for (i = 0; i < (_lat_lng_arr.length - 1); i++)
			{
				_lat = _lat_lng_arr[i].toString().split(",")[0].split(" ").join().substring(1);
				_lng = _lat_lng_arr[i].toString().split(",")[1].split(" ").join().substring(1);
				if (_lat.length > 0 && _lng.length > 0)
				{
					_path.push(new google.maps.LatLng(Number(_lat), Number(_lng)));
				}
			}
			var _color_stroke;
			if (typeof (this._p_parent.nexacro._xreNamedColorList[polygonObj.linecolor]) != "undefined")
			{
				_color_stroke = this._p_parent.nexacro._xreNamedColorList[polygonObj.linecolor] + "FF";
			}
			else
			{
				_color_stroke = polygonObj.linecolor;
			}

			var _color_fill;
			if (typeof (this._p_parent.nexacro._xreNamedColorList[polygonObj.fillbrushcolor]) != "undefined")
			{
				_color_fill = this._p_parent.nexacro._xreNamedColorList[polygonObj.fillbrushcolor] + "FF";
			}
			else
			{
				_color_fill = polygonObj.fillbrushcolor;
			}

			var _alpha_stroke_1;
			var _alpha_stroke = 1.0;
			if (_color_stroke.length > 7)
			{
				_alpha_stroke_1 = parseInt(_color_stroke.substring(7), 16);
				_alpha_stroke = _alpha_stroke_1 / 255.0;
			}
			var _alpha_fill_1;
			var _alpha_fill = 1.0;
			if (_color_fill.length > 7)
			{
				_alpha_fill_1 = parseInt(_color_fill.substring(7), 16);
				_alpha_fill = _alpha_fill_1 / 255.0;
			}

			var polygonOpt = {
				paths: _path,
				strokeColor: _color_stroke.substring(0, 7),
				strokeOpacity: _alpha_stroke,
				strokeWeight: polygonObj.linewidth,
				fillColor: _color_fill.substring(0, 7),
				fillOpacity: _alpha_fill,
				visible: polygonObj.visible
			};

			google.maps.event.addListener(_items[polygonName], 'click',
				function (e)
				{
					this.gmap_onoverlayclick(_items[polygonName],
						e.latLng.lat(), e.latLng.lng(), 0, 0);
				});
			_items[polygonName].setOptions(polygonOpt);
		};

		_pGoogleMap.addPolygon = function (polygonName, polygonObj)
		{
			var _path = [];
			var _lat_lng_arr, _lat, _lng;

			_lat_lng_arr = polygonObj.locationdata.toString().split("]");
			for (var i = 0; i < (_lat_lng_arr.length - 1); i++)
			{
				_lat = _lat_lng_arr[i].toString().split(",")[0].split(" ")
					.join().substring(1);
				_lng = _lat_lng_arr[i].toString().split(",")[1].split(" ")
					.join().substring(1);
				if (_lat.length > 0 && _lng.length > 0)
				{
					_path.push(new google.maps.LatLng(Number(_lat),
						Number(_lng)));
				}
			}

			var _color_stroke;
			if (typeof (nexacro._xreNamedColorList[polygonObj.linecolor]) != "undefined")
			{
				_color_stroke = nexacro._xreNamedColorList[polygonObj.linecolor] + "FF";
			}
			else
			{
				_color_stroke = polygonObj.linecolor;
			}

			var _color_fill;
			if (typeof (nexacro._xreNamedColorList[polygonObj.fillbrushcolor]) != "undefined")
			{
				_color_fill = nexacro._xreNamedColorList[polygonObj.fillbrushcolor] + "FF";
			}
			else
			{
				_color_fill = polygonObj.fillbrushcolor;
			}

			var _alpha_stroke_1;
			var _alpha_stroke = 1.0;
			if (_color_stroke.length > 7)
			{
				_alpha_stroke_1 = parseInt(_color_stroke.substring(7), 16);
				_alpha_stroke = _alpha_stroke_1 / 255.0;
			}
			var _alpha_fill_1;
			var _alpha_fill = 1.0;
			if (_color_fill.length > 7)
			{
				_alpha_fill_1 = parseInt(_color_fill.substring(7), 16);
				_alpha_fill = _alpha_fill_1 / 255.0;
			}

			var polygonPath = new google.maps.Polygon({
				paths: _path,
				strokeColor: _color_stroke.substring(0, 7),
				strokeOpacity: _alpha_stroke,
				strokeWeight: polygonObj.linewidth,
				fillColor: _color_fill.substring(0, 7),
				fillOpacity: _alpha_fill,
				visible: polygonObj.visible
			});

			polygonPath.setMap(this._google_map);

			_itemsname.push(polygonName);
			_items[polygonName] = polygonPath;

			polygonObj._map = this;
			polygonObj._name = polygonName;

			google.maps.event.addListener(_items[polygonName], 'click',
				function (e)
				{
					this.gmap_onoverlayclick(polygonObj/* _items[polygonName] */,
						e.latLng.lat(), e.latLng.lng(), 0, 0);
				});
		};

		_pGoogleMap.setPolylineOptions = function (polylineName, polylineObj)
		{
			var _path = [];
			var _lat_lng_arr, _lat, _lng;

			_lat_lng_arr = polylineObj.locationdata.toString().split("]");
			for (var i = 0; i < (_lat_lng_arr.length - 1); i++)
			{
				_lat = _lat_lng_arr[i].toString().split(",")[0].split(" ").join().substring(1);
				_lng = _lat_lng_arr[i].toString().split(",")[1].split(" ").join().substring(1);
				if (_lat.length > 0 && _lng.length > 0)
				{
					_path.push(new google.maps.LatLng(Number(_lat), Number(_lng)));
				}
			}

			var _color;
			if (typeof (this._p_parent.nexacro._xreNamedColorList[polylineObj.linecolor]) != "undefined")
			{
				_color = this._p_parent.nexacro._xreNamedColorList[polylineObj.linecolor] + "FF";
			}
			else
			{
				_color = polylineObj.linecolor;
			}

			var _alpha_1;
			var _alpha = 1.0;
			if (_color.length > 7)
			{
				_alpha_1 = parseInt(_color.substring(7), 16);
				_alpha = _alpha_1 / 255.0;
			}
			var polyLineOpt = {
				path: _path,
				strokeColor: _color.substring(0, 7),
				strokeOpacity: _alpha,
				strokeWeight: polylineObj.linewidth,
				visible: polylineObj.visible
			};

			google.maps.event.addListener(_items[polylineName], 'click',
				function (e)
				{
					this.gmap_onoverlayclick(_items[polylineName],
						e.latLng.lat(), e.latLng.lng(), 0, 0);
				});

			_items[polylineName].setOptions(polyLineOpt);
		};

		_pGoogleMap.addPolyline = function (polylineName, polylineObj)
		{
			var _path = [];
			var _lat_lng_arr, _lat, _lng;

			_lat_lng_arr = polylineObj.locationdata.toString().split("]");
			for (var i = 0; i < (_lat_lng_arr.length - 1); i++)
			{
				_lat = _lat_lng_arr[i].toString().split(",")[0].split(" ").join().substring(1);
				_lng = _lat_lng_arr[i].toString().split(",")[1].split(" ").join().substring(1);
				if (_lat.length > 0 && _lng.length > 0)
				{
					_path.push(new google.maps.LatLng(Number(_lat), Number(_lng)));
				}
			}

			var _color;
			if (typeof (nexacro._xreNamedColorList[polylineObj.linecolor]) != "undefined")
			{
				_color = nexacro._xreNamedColorList[polylineObj.linecolor] + "FF";
			}
			else
			{
				_color = polylineObj.linecolor;
			}

			var _alpha_1;
			var _alpha = 1.0;
			if (_color.length > 7)
			{
				_alpha_1 = parseInt(_color.substring(7), 16);
				_alpha = _alpha_1 / 255.0;
			}
			var polyLinePath = new google.maps.Polyline({
				path: _path,
				strokeColor: _color.substring(0, 7),
				strokeOpacity: _alpha,
				strokeWeight: polylineObj.linewidth,
				visible: polylineObj.visible
			});

			polyLinePath.setMap(this._google_map);

			_itemsname.push(polylineName);
			_items[polylineName] = polyLinePath;

			polylineObj._map = this;
			polylineObj._name = polylineName;

			google.maps.event.addListener(_items[polylineName], 'click',
				function (e)
				{
					this.gmap_onoverlayclick(polylineObj/* _items[polylineName] */,
						e.latLng.lat(), e.latLng.lng(), 0, 0);
				});
		};

		_pGoogleMap.setCircleOptions = function (circleName, ciecleObj)
		{
			/*
			var circleOpt = {
				fillOpacity: 0,
				strokeWeight: 1.5,
				center: new google.maps.LatLng(
							ciecleObj._p_latitude,
							ciecleObj._p_longitude),
				radius: ciecleObj.radius,
				visible: ciecleObj.visible
			};
			*/
			_items[circleName].setOptions(ciecleObj);
		};

		_pGoogleMap.addCircle = function (circleName, ciecleObj)
		{
			var circle = new google.maps.Circle({
				fillOpacity: 0,
				strokeWeight: 1.5,
				center: new google.maps.LatLng(
					ciecleObj._p_latitude,
					ciecleObj._p_longitude),
				radius: ciecleObj.radius,
				visible: ciecleObj.visible
			});

			circle.setMap(this._google_map);

			_itemsname.push(circleName);
			_items[circleName] = circle;

			ciecleObj._map = this;
			ciecleObj._name = circleName;
		};

		_pGoogleMap.removeItem = function (strItemID)
		{
			if (strItemID == null)
			{
				return false;
			}
			if (strItemID == "")
			{
				return false;
			}

			if (typeof (this._p_items[strItemID]) == "undefined")
			{
				this._apply_onerror({
					errorcode: "1502",
					errormsg: "item is not exist."
				});
				return false;
			}
			else
			{
				delete this._p_items[strItemID];

				for (var i = 0; i < this._p_items.length; i++)
				{
					if (this._p_items[i] == strItemID)
					{
						var position = this._p_items.indexOf(this._p_items[i]);
						this._p_items.splice(position, i + 1);
					}
				}

				if (this.bLoaded)
				{
					this._removeItem(strItemID);
				}

				return true;
			}
		};

		//===============================================================
		// nexacro.GoogleMap : Event Handlers
		//===============================================================
		_pGoogleMap.gmap_ondrag = function (lat, lng)
		{
			this.on_fire_ondragstart(this, new nexacro.GoogleMapDragEventInfo("ondrag"));
		};

		_pGoogleMap.gmap_ondragenter = function (objData)
		{
			this._fire_ondragenter(this, new nexacro.GoogleMapDragEventInfo("ondragenter"));
		};

		_pGoogleMap.gmap_ondragmove = function (lat, lng)
		{
			this._location.latitude = lat;
			this._location.longitude = lng;

			// 사용자에게 위도/경도를 넘겨주고 이후에 객체의 위도/경도를 갱신한다.
			this.centerlocation.latitude = this._location.latitude;
			this.centerlocation.longitude = this._location.longitude;
			this._p_latitude = this._location.latitude;
			this._p_longitude = this._location.longitude;
		};

		_pGoogleMap.gmap_ondragleave = function (objData)
		{
			this._fire_ondragleave(this, new nexacro.GoogleMapDragEventInfo("ondragleave"));
		};

		_pGoogleMap.gmap_dragend = function (lat, lng)
		{
			this._location.latitude = lat;
			this._location.longitude = lng;
		};

		_pGoogleMap.gmap_onclick = function (lat, lng, x, y)
		{
			this._location.latitude = lat;
			this._location.longitude = lng;
			this._pixel.x = x;
			this._pixel.y = y;
			this.kindClick = "normalclick";
		};

		_pGoogleMap.gmap_onoverlayclick = function (fromobj, lat, lng, x, y)
		{
			this._location.latitude = lat;
			this._location.longitude = lng;
			this._pixel.x = x;
			this._pixel.y = y;
			this.overlayfromobj = fromobj;
			this.kindClick = "overlayclick";
		};

		_pGoogleMap._on_click = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, meta_key)
		{
		};

		_pGoogleMap._on_sys_click = function (node, e, bubble)
		{
			var event = e.changedTouches ? e.changedTouches[0] : e;
			nexacro.ajaxlog("_on_sys_click" + event.screenx + "," + event.screeny + ":" + node + ":" + event + ":" + bubble + "]");

			if (this.$IsReadyFireEvent() && this.$isEnable() && this.enableevent)
			{
				if (this.kindClick == "normalclick")
				{
					this._fire_onclick(node._comp, event);
				}
				else
				{
					if (this.kindClick == "overlayclick" && typeof (this.overlayfromobj) != "undefined")
					{
						this._fire_onoverlayclick(node._comp, event);
					}
				}
			}
			return true;
		};

		_pGoogleMap._fire_onclick = function (obj, e)
		{
			if (this.onclick._has_handlers && this.enableevent)
			{
				this.bClicked = false;
				var evt = new nexacro.GoogleMapClickEventInfo(this, obj, "onclick", e, this._location, this._pixel);
				return this.onclick._fireEvent(this, evt);
			}
			else
			{
				this.bClicked = true;
			}

			return false;
		};

		_pGoogleMap._fire_onoverlayclick = function (obj, e)
		{
			if (this.onoverlayclick && this.onoverlayclick._has_handlers && this.enableevent)
			{
				var evt = new nexacro.GoogleMapClickEventInfo(this, this.overlayfromobj, "onoverlayclick", e, this._location, this._pixel);
				return this.onoverlayclick._fireEvent(this, evt);
			}
		};

		_pGoogleMap._apply_onload = function ()
		{
			// load 이전에 enable 속성을 지정한 경우가 있을수 있으므로 enable을 로드 마지막에 체크한다.
			if (this._p_enable == false)
			{
				// 구글맵을 활성화 시키는 경우 : div element를 제거한다.
				//           this._google_map.showBlock();
			}
			else if (this._p_enable == true)
			{
				// 구글맵을 비활성화 시키는 경우 : div element로 구글맵을 덮는다.
				//          this.__map().hideBlock();
			}

			this.on_fire_onload(this);
		};

		_pGoogleMap.on_fire_onload = function (obj)
		{
			if (this.onload && this.onload._has_handlers && this.enableevent)
			{
				var evt = new nexacro.GoogleMapEventInfo(obj, "onload", this.centerlocation, this.coordinates, this._p_viewmode, this._p_zoomlevel, this.addresses);
				return this.onload._fireEvent(this, evt);
			}
		};

		_pGoogleMap._onrecvsuccess = function (objData)
		{
			if (this.enableevent)
			{
				if (objData._p_latitude == undefined || objData._p_latitude == null || objData._p_latitude == "" || objData._p_longitude == undefined || objData._p_longitude == null || objData._p_longitude == "")
				{
					this.on_fire_onrecvsuccess(this, objData.eventid, objData.addresses, this.coordinates);
				}
				else
				{
					this.coordinates.latitude = objData._p_latitude;
					this.coordinates.longitude = objData._p_longitude;

					this.on_fire_onrecvsuccess(this, objData.eventid, objData.addresses, this.coordinates);
				}
			}
		};

		_pGoogleMap.on_fire_onrecvsuccess = function (obj, id, addresses, coordinates)
		{
			if (this.enableevent)
			{
				var evt = new nexacro.GoogleMapEventInfo(obj, id, this.centerlocation, this.coordinates, this._p_viewmode, this._p_zoomlevel, addresses);
				return this.onrecvsuccess._fireEvent(this, evt);
			}
		};

		_pGoogleMap._apply_onerror = function (objData)
		{
			if (this.enableevent)
			{
				this.on_fire_onerror(this, objData);
			}
		};

		_pGoogleMap.on_fire_onerror = function (obj, e)
		{
			if (this.enableevent)
			{
				var evt = new nexacro.GoogleMapErrorEventInfo(this, "onerror", e.errorcode, e.errormsg);
				return this.onerror._fireEvent(this, evt);
			}

		};

		_pGoogleMap.__onDragEnter = function (obj, e)
		{
			//console.debug("__ondragEnter");
		};

		//===============================================================
		// nexacro.GoogleMap : Logical Part
		//===============================================================

		//===============================================================
		// nexacro.GoogleMap : Util Function
		//===============================================================
		_pGoogleMap._getalign = function (h, v)
		{
			if (h == "left")
			{
				if (v == "top")
				{
					return google.maps.ControlPosition.TOP_LEFT;
				}
				else if (v == "middle")
				{
					return google.maps.ControlPosition.LEFT_CENTER;
				}
				else if (v == "bottom")
				{
					return google.maps.ControlPosition.LEFT_BOTTOM;
				}
			}
			else if (h == "center")
			{
				if (v == "top")
				{
					return google.maps.ControlPosition.TOP;
				}
				else if (v == "bottom")
				{
					return google.maps.ControlPosition.BOTTOM;
				}
			}
			else if (h == "right")
			{
				if (v == "top")
				{
					return google.maps.ControlPosition.TOP_LEFT;
				}
				else if (v == "middle")
				{
					return google.maps.ControlPosition.RIGHT_CENTER;
				}
				else if (v == "bottom")
				{
					return google.maps.ControlPosition.RIGHT_BOTTOM;
				}
			}
		};

		_pGoogleMap._getMapType = function (v)
		{
			var __maptype;

			switch (v)
			{
				default:
				case 0:
					__maptype = google.maps.MapTypeId.ROADMAP;
					break;
				case 1:
					__maptype = google.maps.MapTypeId.SATELLITE;
					break;
				case 2:
					__maptype = google.maps.MapTypeId.HYBRID;
					break;
				case 3:
					__maptype = google.maps.MapTypeId.TERRAIN;
					break;
			}
			return __maptype;
		};

		_pGoogleMap.__map = function ()
		{
			var obj = document.getElementById(this._id);
			var objDoc = obj.contentWindow || obj.contentDocument;
			return objDoc;
		};

		_pGoogleMap._set_option = function ()
		{
			var _mapType = this._getMapType();

			return {
				center: new google.maps.LatLng(
					this.centerlocation.latitude,
					this.centerlocation.longitude),
				mapTypeId: _mapType,
				zoom: this._p_zoomlevel,
				disableDefaultUI: true,
				mapTypeControl: this.showmode,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DEFAULT,
					position: this.modealign
				},
				scaleControl: this.showmapscale,
				scaleControlOptions: {
					position: this.mapscalealign
				},
				panControl: this.shownavigator,
				panControlOptions: {
					position: this.navigatoralign
				},
				zoomControl: this._p_showzoom,
				zoomControlOptions: {
					position: this.zoomalign,
					style: google.maps.ZoomControlStyle.SMALL
				}
			};
		};

		_pGoogleMap.map_starter = function (v)
		{
			//var map_type = this._getMapType();
			this._google_map.setOptions(this.setOptions());
		};

		_pGoogleMap.__onTextchanged = function (/*obj, e*/)
		{
		};

		_pGoogleMap._removeItem = function (itemname)
		{
			_items[itemname].setMap(null);
			var i;
			if (typeof (_items[itemname].title) != "undefined")
			{
				// marker인경우 infowindow도 remove 한다.
				delete _infowindow[itemname];
				for (i = 0; i < _infowindow.length; i++)
				{
					if (_infowindowname[i] == itemname)
					{
						_infowindowname.splice(i + 1, i + 1);
					}
				}
			}
			delete _items[itemname];

			for (i = 0; i < _itemsname.length; i++)
			{
				if (_itemsname[i] == itemname)
				{
					_itemsname.splice(i + 1, i + 1);
				}
			}
			return true;
		};

		if (!nexacro.GoogleMapMarker)
		{
			//==============================================================================
			// nexacro.GoogleMapMarker
			//==============================================================================
			nexacro.GoogleMapMarker = function (name, obj)
			{
				this._id = nexacro.Device.makeID();
				nexacro.Device._userCreatedObj[this._id] = this;
				this.name = name || "";
				this._type = 0;
				// 0:marker 1:icon
				this.enableevent = true;
				this.longitude = 0;
				this.latitude = 0;

				this._location = {
					latitude: 0,
					longitude: 0
				};

				this.text = "";
				this.visible = true;
				this.draggable = false;
				this.imageurl = "";

				this.style = {
					_GoogleMapMarkerID: 0,
					set_parentID: function (_id)
					{
						this._GoogleMapMarkerID = _id;

					},
					// property
					align: {
						_GoogleMapMarkerID: 0,
						set_parentID: function (_id)
						{
							this._GoogleMapMarkerID = _id;
						},
						halign: "center",
						valign: "middle",
						// set method
						set_halign: function (v)
						{
							var _v = v.toString().split(" ").join("")
								.toLowerCase();
							if (_v == "left" || _v == "center" || _v == "right")
							{
								this.halign = _v;
								var __parent = nexacro.Device._userCreatedObj[this._GoogleMapMarkerID];

								if (__parent._map != null)
								{
									__parent._map.setMarkerOptions(__parent._name, __parent);
								}
								return true;
							}
							else
							{
								return false;
							}
						},
						set_valign: function (v)
						{
							var _v = v.toString().split(" ").join("")
								.toLowerCase();
							if (_v == "top" || _v == "middle" || _v == "bottom")
							{
								this.valign = _v;
								var __parent = nexacro.Device._userCreatedObj[this._GoogleMapMarkerID];
								if (__parent._map != null)
								{
									__parent._map.setMarkerOptions(__parent._name, __parent);
								}
								return true;
							}
							else
							{
								return false;
							}
						},
						$s: function (targetName, fnname, val)
						{
							var fn = this[fnname];
							if (fn)
								return fn.call(this, val);

							return (this[targetName] = val);
						}
					},
					image: "",

					// set method
					set_align: function (v)
					{
						var v_arr = v.split(" ");
						var ret = true;
						if (v_arr.length != 2)
						{
							return false;
						}
						ret = this.align.set_halign(v_arr[0]);
						if (!ret)
						{
							return ret;
						}
						ret = this.align.set_valign(v_arr[1]);
						var __parent = nexacro.Device._userCreatedObj[this._GoogleMapMarkerID];
						if (__parent._map != null)
						{
							__parent._map.setMarkerOptions(__parent._name, __parent);
						}
						return ret;
					},
					$s: function (targetName, fnname, val)
					{
						var fn = this[fnname];
						if (fn)
							return fn.call(this, val);

						return (this[targetName] = val);
					}
				};

				this._map = null;
				this._name = null;

				this.style.set_parentID(this._id);
				this.style.align.set_parentID(this._id);
			};
			var _pGoogleMapMarker = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapMarker);
			nexacro.GoogleMapMarker.prototype = _pGoogleMapMarker;
			_pGoogleMapMarker._type_name = "GoogleMapMarker";

			_pGoogleMapMarker.set_longitude = function (v)
			{
				try
				{
					this.longitude = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (isNaN(this.longitude))
				{
					return false;
				}

				this._location.longitude = this.longitude;

				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}

				return true;
			};

			_pGoogleMapMarker.set_latitude = function (v)
			{
				try
				{
					this.latitude = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (isNaN(this.latitude))
				{
					return false;
				}

				this._location.latitude = this.latitude;

				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}

				return true;
			};

			_pGoogleMapMarker.set_text = function (v)
			{
				this.text = v;
				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapMarker.set_draggable = function (v)
			{
				if (v == null)
				{
					return false;
				}
				else if (v)
				{
					if (v == true || (typeof (v) == "string" && v == "true"))
					{
						this.draggable = true;
					}
					else if (v == false || (typeof (v) == "string" && v == "false"))
					{
						this.draggable = false;
					}
				}
				else
				{
					return false;
				}
			};

			_pGoogleMapMarker.set_visible = function (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.visible = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.visible = false;
				}
				else
				{
					return false;
				}
				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapMarker.set_imageurl = function (v)
			{
				this._type = 1;
				this.imageurl = v;

				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}

				return true;
			};

			_pGoogleMapMarker.set_style = function (v)
			{
				var v_arr = v.split(";");
				var i;
				var _v_arr;
				var ret = true;
				for (i = 0; i < v_arr.length; i++)
				{
					_v_arr = v_arr[i].split(":");
					if (_v_arr.length != 2)
					{
						return false;
					}
					else if (_v_arr[0].split(" ").join("").toLowerCase() == "align")
					{
						ret = this.style.set_align(_v_arr[1]);
					}
					else
					{
						ret = false;
					}

					if (!ret)
					{
						return ret;
					}
				}
				if (this._map != null)
				{
					this._map.setMarkerOptions(this._name, this);
				}
				return ret;
			};
		}

		if (!nexacro.GoogleMapPolyline)
		{
			//==============================================================================
			// nexacro.GoogleMapPolyline
			//==============================================================================
			nexacro.GoogleMapPolyline = function (name, obj)
			{
				this._id = nexacro.Device.makeID();
				nexacro.Device._userCreatedObj[this._id] = this;
				this.name = name || "";

				this._type = 2;
				// 2:polyline
				this.locationdata = "";
				this.visible = true;
				this.linewidth = "";
				this.linecolor = "";
				this.enableevent = true;

				this._map = null;
				this._name = null;
			};

			var _pGoogleMapPolyline = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapPolyline);
			nexacro.GoogleMapPolyline.prototype = _pGoogleMapPolyline;
			_pGoogleMapPolyline._type_name = "GoogleMapPolyline";

			_pGoogleMapPolyline.set_locationdata = function (v)
			{
				var _lat_lng_arr;

				_lat_lng_arr = v.toString().split("]");

				if (_lat_lng_arr.length < 2)
				{
					return false;
				}

				this.locationdata = v;

				if (this._map != null)
				{
					this._map.setPolylineOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapPolyline.set_visible = function (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.visible = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.visible = false;
				}
				else
				{
					return false;
				}

				if (this._map != null)
				{
					this._map.setPolylineOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapPolyline.set_linewidth = function (v)
			{
				var nWidth = 0;
				try
				{
					nWidth = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (nWidth != nWidth)
				{
					return false;
				}
				this.linewidth = nWidth;

				if (this._map != null)
				{
					this._map.setPolylineOptions(this._name, this);
				}

				return true;
			};

			_pGoogleMapPolyline.set_linecolor = function (v)
			{
				this.linecolor = v;
				return true;
			};
		}

		if (!nexacro.GoogleMapPolygon)
		{
			//==============================================================================
			// nexacro.GoogleMapPolygon
			//==============================================================================
			nexacro.GoogleMapPolygon = function (name, obj)
			{
				this._id = nexacro.Device.makeID();
				nexacro.Device._userCreatedObj[this._id] = this;
				this.name = name || "";

				this._type = 3;
				// 3:polygon
				this.locationdata = "";
				this.visible = true;
				this.linewidth = "";
				this.linecolor = "";
				this.fillbrushcolor = "";
				this.enableevent = true;

				this._map = null;
				this._name = null;
			};

			var _pGoogleMapPolygon = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapPolygon);
			nexacro.GoogleMapPolygon.prototype = _pGoogleMapPolygon;
			_pGoogleMapPolygon._type_name = "GoogleMapPolygon";

			_pGoogleMapPolygon.set_locationdata = function (v)
			{
				var _lat_lng_arr;

				_lat_lng_arr = v.toString().split("]");

				if (_lat_lng_arr.length < 2)
				{
					return false;
				}

				this.locationdata = v;
				if (this._map != null)
				{
					this._map.setPolygonOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapPolygon.set_visible = function (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.visible = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.visible = false;
				}
				else
				{
					return false;
				}

				if (this._map != null)
				{
					this._map.setPolygonOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapPolygon.set_linewidth = function (v)
			{
				var nWidth = 0;
				try
				{
					nWidth = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (nWidth != nWidth)
				{
					return false;
				}
				this.linewidth = nWidth;

				if (this._map != null)
				{
					this._map.setPolygonOptions(this._name, this);
				}

				return true;
			};

			_pGoogleMapPolygon.set_linecolor = function (v)
			{
				this.linecolor = v;
				return true;
			};

			_pGoogleMapPolygon.set_fillbrushcolor = function (v)
			{
				this.fillbrushcolor = v;
				return true;
			};
		}

		if (!nexacro.GoogleMapCircle)
		{
			//==============================================================================
			// nexacro.GoogleMapCircle
			//==============================================================================
			nexacro.GoogleMapCircle = function (name, obj)
			{
				this._id = nexacro.Device.makeID();
				nexacro.Device._userCreatedObj[this._id] = this;
				this.name = name || "";
				this._type = 4;
				this.longitude = 0;
				this.latitude = 0;
				this.enableevent = true;
				this.visible = true;

				this._map = null;
				this._name = null;
				this.radius = 100;
			};
			var _pGoogleMapCircle = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapCircle);
			nexacro.GoogleMapCircle.prototype = _pGoogleMapCircle;
			_pGoogleMapCircle._type_name = "GoogleCircle";

			_pGoogleMapCircle.set_longitude = function (v)
			{
				try
				{
					this.longitude = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (isNaN(this.longitude))
				{
					return false;
				}

				if (this._map != null)
				{
					this._map.setCircleOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapCircle.set_latitude = function (v)
			{
				try
				{
					this.latitude = Number(v.toString());
				}
				catch (e)
				{
					return false;
				}

				if (isNaN(this.latitude))
				{
					return false;
				}

				if (this._map != null)
				{
					this._map.setCircleOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapCircle.set_visible = function (v)
			{
				if (v == true || (typeof (v) == "string" && v == "true"))
				{
					this.visible = true;
				}
				else if (v == false || (typeof (v) == "string" && v == "false"))
				{
					this.visible = false;
				}
				else
				{
					return false;
				}

				if (this._map != null)
				{
					this._map.setCircleOptions(this._name, this);
				}
				return true;
			};

			_pGoogleMapCircle.set_radius = function (v)
			{
				if (v == null)
				{
					this.radius = 100;
				}
				else
				{
					this.radius = Number(v.toString());
				}
			};
		}
	}
	else
	{
		//==============================================================================
		// nexacro.GoogleMap
		//==============================================================================
		nexacro.GoogleMap = function (id, left, top, width, height, right, bottom, parent)
		{
			nexacro.Component.call(this, id, left, top, width, height, right, bottom, parent);
		};

		var _pGoogleMap = nexacro._createPrototype(nexacro.Component, nexacro.GoogleMap);
		nexacro.GoogleMap.prototype = _pGoogleMap;
		_pGoogleMap._type_name = "GoogleMap";

		/* default properties */
		_pGoogleMap._p_showzoom = false;
		_pGoogleMap._p_language = undefined;
		_pGoogleMap._p_region = undefined;

		//===============================================================
		// nexacro.GoogleMap : Create & Destroy & Update
		//===============================================================

		//===============================================================
		// nexacro.GoogleMap : Properties
		//===============================================================
		_pGoogleMap.set_viewmode = function (v) { };
		_pGoogleMap.set_zoomlevel = function (v) { };
		_pGoogleMap.set_showzoom = function (v) 
		{
			v = nexacro._toBoolean(v);
			this._p_showzoom = v;
		};

		_pGoogleMap.set_shownavigator = function (v) { };
		_pGoogleMap.set_showcompass = function (v) { };
		_pGoogleMap.set_showmapscale = function (v) { };
		_pGoogleMap.set_centerlocation = function (v) { };
		_pGoogleMap.set_showmode = function (v) { };
		_pGoogleMap.set_zoomalign = function (v) { };
		_pGoogleMap.set_navigatoralign = function (v) { };
		_pGoogleMap.set_mapscalealign = function (v) { };
		_pGoogleMap.set_draggable = function (v) { };
		_pGoogleMap.set_apikey = function (v) 
		{
			this._p_apikey = v;
		};

		_pGoogleMap.set_language = nexacro._emptyFn;
		_pGoogleMap.set_region = nexacro._emptyFn;

		_pGoogleMap._properties = [
			{ name: "apikey" }, { name: "items", readonly: true }, { name: "language" },
			{ name: "latitude", readonly: true }, { name: "longitude", readonly: true }, { name: "region" },
			{ name: "showzoom" }, { name: "viewmode" }, { name: "zoomlevel" }
		];

		nexacro._defineProperties(_pGoogleMap, _pGoogleMap._properties);
		//===============================================================
		// nexacro.GoogleMap : Methods
		//===============================================================
		_pGoogleMap.load = function (bUseSensor, nLatitude, nLongitude, constViewMode, nZoomLevel) { };
		_pGoogleMap.setMarkerLoc = function (strItemID, lat, lng) { };
		_pGoogleMap.getAddress = function (nLatitude, nLongitude, nMaxResultCount, strLocale) { };
		_pGoogleMap.getCoordinates = function (straddress) { };
		_pGoogleMap.addItem = function (strItemID, objComponent) { };
		_pGoogleMap.setMarkerOptions = function (markName, markObj) { };
		_pGoogleMap.addMarker = function (elem, markName, markObj) { };
		_pGoogleMap.addPolyline = function (elem, polylineName, polylineObj) { };
		_pGoogleMap.removeItem = function (strItemID) { };

		//===============================================================
		// nexacro.GoogleMap : Event Handlers
		//===============================================================
		_pGoogleMap.on_fire_onclick = function () { };

		//===============================================================
		// nexacro.GoogleMap : Logical Part
		//===============================================================

		//===============================================================
		// nexacro.GoogleMap : Util Function
		//===============================================================
		_pGoogleMap._removeItem = function (elem, itemname) { };

		if (!nexacro.GoogleMapMarker)
		{
			//==============================================================================
			// nexacro.GoogleMapMarker
			//==============================================================================
			nexacro.GoogleMapMarker = function (name, obj) { };

			var _pGoogleMapMarker = nexacro.GoogleMapMarker.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapMarker);
			_pGoogleMapMarker._type_name = "GoogleMapMarker";

			_pGoogleMapMarker.set_latitude = function (v) { };
			_pGoogleMapMarker.set_longitude = function (v) { };
			_pGoogleMapMarker.set_text = function (v) { };
			_pGoogleMapMarker.set_draggable = function (v) { };
			_pGoogleMapMarker.set_visible = function (v) { };
			_pGoogleMapMarker.set_style = function (v) { };
		}

		if (!nexacro.GoogleMapPolyline)
		{
			//==============================================================================
			// nexacro.GoogleMapPolyline
			//==============================================================================
			nexacro.GoogleMapPolyline = function (name, obj) { };

			var _pGoogleMapPolyline = nexacro.GoogleMapPolyline.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapPolyline);
			_pGoogleMapPolyline._type_name = "GoogleMapPolyline";

			_pGoogleMapPolyline.set_locationdata = function (v) { };
			_pGoogleMapPolyline.set_linewidth = function (v) { };
			_pGoogleMapPolyline.set_linecolor = function (v) { };
			_pGoogleMapPolyline.set_visible = function (v) { };
		}

		if (!nexacro.GoogleMapPolygon)
		{
			//==============================================================================
			// nexacro.GoogleMapPolygon
			//==============================================================================
			nexacro.GoogleMapPolygon = function (name, obj) { };

			var _pGoogleMapPolygon = nexacro.GoogleMapPolygon.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapPolygon);
			_pGoogleMapPolygon._type_name = "GoogleMapPolygon";

			_pGoogleMapPolygon.set_locationdata = function (v) { };
			_pGoogleMapPolygon.set_linewidth = function (v) { };
			_pGoogleMapPolygon.set_linecolor = function (v) { };
			_pGoogleMapPolygon.set_fillbrushcolor = function (v) { };
			_pGoogleMapPolygon.set_visible = function (v) { };
		}

		if (!nexacro.GoogleMapCircle)
		{
			//==============================================================================
			// nexacro.GoogleMapCircle
			//==============================================================================
			nexacro.GoogleMapCircle = function (name, obj) { };

			var _pGoogleMapCircle = nexacro.GoogleMapCircle.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.GoogleMapCircle);
			_pGoogleMapCircle._type_name = "GoogleMapCircle";

			_pGoogleMapCircle.set_latitude = function (v) { };
			_pGoogleMapCircle.set_longitude = function (v) { };
			_pGoogleMapCircle.set_radius = function (v) { };
			_pGoogleMapCircle.set_visible = function (v) { };
		}
	}

	_pGoogleMap = null;
	_pGoogleMapMarker = null;
	_pGoogleMapPolyline = null;
	_pGoogleMapPolygon = null;
	_pGoogleMapCircle = null;
}