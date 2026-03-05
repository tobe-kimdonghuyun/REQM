/**
 * NexacroN의 WebBrowser 연동
 */

var parentNexacro = null;
var bInit = false;

if(!window.NEXACROHTML) {
	window.NEXACROHTML = {};
}

window.NEXACROHTML.Init = function(str) {
	var loopCnt = 0;
	var interval = setInterval(function() {
		parentNexacro = window.NEXACROWEBBROWSER;
		//console.log("ParparentNexacroent:" + loopCnt + ":" + parentNexacro);
		if(loopCnt >= 10 || parentNexacro) {
			bInit = true;
			clearInterval(interval);
			window.NEXACROHTML.FireUserNotify(str);
		}
		loopCnt++;
	}, 10);
};

window.NEXACROHTML.FireUserNotify = function(userdata) {
	var pp = window.NEXACROWEBBROWSER;
	if(pp) {
		pp.on_fire_onusernotify(pp, userdata);

	} else if(typeof nexacro == "undefined") {		// windows runtime
		window.document.title = userdata;

	} else if(nexacro) {							// mobile runtime
		nexacro.fireUserNotify(userdata);
	}
};

if(window.NEXACROWEBBROWSER) {
	fn_userNotify("onload_NEXACROWEBBROWSER");
} else if(window.nexacro) {
	fn_userNotify("onload_nexacro");
} else {
	fn_userNotify("onload");
}

function fn_userNotify(userdata) {
	window.NEXACROHTML.FireUserNotify(userdata);
};
