//XJS=event.keyboard.util.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libevent::event.lib.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("libevent::event.lib.xjs"); /*include "libevent::event.lib.xjs"*/

        if (typeof nexacro.test.Event === 'undefined')
        		nexacro.test.Event = {};

        var EVENT = nexacro.test.Event;

        if (typeof EVENT.dispatchKeyboardEvent !== 'undefined')
        	return;

        // based on http://calormen.com/polyfill/keyboard.js
        var LOCATION = {
        	STANDARD:  0x00, /* Default or unknown location */
        	LEFT			: 0x01, 	/* Left Alt key */
        	RIGHT		: 0x02, 	/* Right Alt key */
        	NUMPAD 	: 0x03 	/* Numpad 0 or + */
        };
        //--------------------------------------------------------------------
        //
        // Utilities
        //
        //--------------------------------------------------------------------
        var os = (function() {
        	if (nexacro._SystemType == "win32") { return 'win'; }
        	if (nexacro._SystemType == "mac") { return 'mac'; }
        	if (nexacro._OS == "iOS") { return 'ios'; }
        	if (nexacro._SystemType == "Linux") { return 'linux'; }
        	if (nexacro._SystemType == "win32") { return 'win'; }
        	return '';
        } ());

        var browser = (function() {
        	if (nexacro._Browser == "Chrome") { return 'chrome'; }
        	// chromium edge 용 브라우저 분기 ( 네이밍은 논의 필요 )
        	if (nexacro._Browser == "Edge") {
        		if (nexacro._BrowserType = "WebKit") return 'edge-webkit';
        		else return 'edge';
        	}
        	if (nexacro._Browser == "Safari" || nexacro._BrowserType == "WebKit") { return 'safari'; }
        	if (nexacro._Browser == "IE") { return 'ie'; }
        	if (nexacro._Browser == "Gecko") { return 'moz'; }
        	if (nexacro._Browser == "Opera") { return 'opera'; }
        	return '';
        } ());

        var browser_os = browser + '-' + os;

        function mergeIf(baseTable, select, table) {
        	if (browser_os === select || browser === select || os === select) {
        		Object.keys(table).forEach(function(keyCode) {
        			baseTable[keyCode] = table[keyCode];
        		});
        	}
        }

        function remap(o, key, okey) {
        	var r = {};
        	Object.keys(o).forEach(function(k) {
        		var item = o[k];
        		if (key in item) {
        			if (okey) item[okey] = k;
        			r[item[key]] = item;
        		}
        	});
        	return r;
        }

        function invert(o) {
        	var r = {};
        	Object.keys(o).forEach(function(k) {
        		r[o[k]] = k;
        	});
        	return r;
        }

        //--------------------------------------------------------------------
        //
        // Generic Mappings
        //
        //--------------------------------------------------------------------

        // "keyInfo" is a dictionary:
        //   code: string - name from UI Events KeyboardEvent code Values
        //     https://w3c.github.io/uievents-code/
        //   location (optional): number - one of the DOM_KEY_LOCATION values
        //   keyCap (optional): string - keyboard label in en-US locale
        // USB code Usage ID from page 0x07 unless otherwise noted (Informative)

        // Map of keyCode to keyInfo
        var keyCodeToInfoTable = {
        	// 0x01 - VK_LBUTTON
        	// 0x02 - VK_RBUTTON
        	0x03: { code: 'Cancel' }, // [USB: 0x9b] char \x0018 ??? (Not in D3E)
        	// 0x04 - VK_MBUTTON
        	// 0x05 - VK_XBUTTON1
        	// 0x06 - VK_XBUTTON2
        	0x06: { code: 'Help' }, // [USB: 0x75] ???
        	// 0x07 - undefined
        	0x08: { code: 'Backspace' }, // [USB: 0x2a] Labelled Delete on Macintosh keyboards.
        	0x09: { code: 'Tab' }, // [USB: 0x2b]
        	// 0x0A-0x0B - reserved
        	0X0C: { code: 'Clear' }, // [USB: 0x9c] NumPad Center (Not in D3E)
        	0X0D: { code: 'Enter' }, // [USB: 0x28]
        	// 0x0E-0x0F - undefined

        	0x10: { code: 'Shift' },
        	0x11: { code: 'Control' },
        	0x12: { code: 'Alt' },
        	0x13: { code: 'Pause' }, // [USB: 0x48]
        	0x14: { code: 'CapsLock' }, // [USB: 0x39]
        	0x15: { code: 'KanaMode' }, // [USB: 0x88]
        	0x16: { code: 'Lang1' }, // [USB: 0x90]
        	// 0x17: VK_JUNJA
        	// 0x18: VK_FINAL
        	0x19: { code: 'Lang2' }, // [USB: 0x91]
        	// 0x1A - undefined
        	0x1B: { code: 'Escape' }, // [USB: 0x29]
        	0x1C: { code: 'Convert' }, // [USB: 0x8a]
        	0x1D: { code: 'NonConvert' }, // [USB: 0x8b]
        	0x1E: { code: 'Accept' }, // [USB: ????]
        	0x1F: { code: 'ModeChange' }, // [USB: ????]

        	0x20: { code: 'Space' }, // [USB: 0x2c]
        	0x21: { code: 'PageUp' }, // [USB: 0x4b]
        	0x22: { code: 'PageDown' }, // [USB: 0x4e]
        	0x23: { code: 'End' }, // [USB: 0x4d]
        	0x24: { code: 'Home' }, // [USB: 0x4a]
        	0x25: { code: 'ArrowLeft' }, // [USB: 0x50]
        	0x26: { code: 'ArrowUp' }, // [USB: 0x52]
        	0x27: { code: 'ArrowRight' }, // [USB: 0x4f]
        	0x28: { code: 'ArrowDown' }, // [USB: 0x51]
        	0x29: { code: 'Select' }, // (Not in D3E)
        	0x2A: { code: 'Print' }, // (Not in D3E)
        	0x2B: { code: 'Execute' }, // [USB: 0x74] (Not in D3E)
        	0x2C: { code: 'PrintScreen' }, // [USB: 0x46]
        	0x2D: { code: 'Insert' }, // [USB: 0x49]
        	0x2E: { code: 'Delete' }, // [USB: 0x4c]
        	0x2F: { code: 'Help' }, // [USB: 0x75] ???

        	0x30: { code: 'Digit0', keyCap: '0' }, // [USB: 0x27] 0)
        	0x31: { code: 'Digit1', keyCap: '1' }, // [USB: 0x1e] 1!
        	0x32: { code: 'Digit2', keyCap: '2' }, // [USB: 0x1f] 2@
        	0x33: { code: 'Digit3', keyCap: '3' }, // [USB: 0x20] 3#
        	0x34: { code: 'Digit4', keyCap: '4' }, // [USB: 0x21] 4$
        	0x35: { code: 'Digit5', keyCap: '5' }, // [USB: 0x22] 5%
        	0x36: { code: 'Digit6', keyCap: '6' }, // [USB: 0x23] 6^
        	0x37: { code: 'Digit7', keyCap: '7' }, // [USB: 0x24] 7&
        	0x38: { code: 'Digit8', keyCap: '8' }, // [USB: 0x25] 8*
        	0x39: { code: 'Digit9', keyCap: '9' }, // [USB: 0x26] 9(
        	// 0x3A-0x40 - undefined

        	0x41: { code: 'KeyA', keyCap: 'a' }, // [USB: 0x04]
        	0x42: { code: 'KeyB', keyCap: 'b' }, // [USB: 0x05]
        	0x43: { code: 'KeyC', keyCap: 'c' }, // [USB: 0x06]
        	0x44: { code: 'KeyD', keyCap: 'd' }, // [USB: 0x07]
        	0x45: { code: 'KeyE', keyCap: 'e' }, // [USB: 0x08]
        	0x46: { code: 'KeyF', keyCap: 'f' }, // [USB: 0x09]
        	0x47: { code: 'KeyG', keyCap: 'g' }, // [USB: 0x0a]
        	0x48: { code: 'KeyH', keyCap: 'h' }, // [USB: 0x0b]
        	0x49: { code: 'KeyI', keyCap: 'i' }, // [USB: 0x0c]
        	0x4A: { code: 'KeyJ', keyCap: 'j' }, // [USB: 0x0d]
        	0x4B: { code: 'KeyK', keyCap: 'k' }, // [USB: 0x0e]
        	0x4C: { code: 'KeyL', keyCap: 'l' }, // [USB: 0x0f]
        	0x4D: { code: 'KeyM', keyCap: 'm' }, // [USB: 0x10]
        	0x4E: { code: 'KeyN', keyCap: 'n' }, // [USB: 0x11]
        	0x4F: { code: 'KeyO', keyCap: 'o' }, // [USB: 0x12]

        	0x50: { code: 'KeyP', keyCap: 'p' }, // [USB: 0x13]
        	0x51: { code: 'KeyQ', keyCap: 'q' }, // [USB: 0x14]
        	0x52: { code: 'KeyR', keyCap: 'r' }, // [USB: 0x15]
        	0x53: { code: 'KeyS', keyCap: 's' }, // [USB: 0x16]
        	0x54: { code: 'KeyT', keyCap: 't' }, // [USB: 0x17]
        	0x55: { code: 'KeyU', keyCap: 'u' }, // [USB: 0x18]
        	0x56: { code: 'KeyV', keyCap: 'v' }, // [USB: 0x19]
        	0x57: { code: 'KeyW', keyCap: 'w' }, // [USB: 0x1a]
        	0x58: { code: 'KeyX', keyCap: 'x' }, // [USB: 0x1b]
        	0x59: { code: 'KeyY', keyCap: 'y' }, // [USB: 0x1c]
        	0x5A: { code: 'KeyZ', keyCap: 'z' }, // [USB: 0x1d]
        	0x5B: { code: 'MetaLeft', location: LOCATION.LEFT }, // [USB: 0xe3]
        	0x5C: { code: 'MetaRight', location: LOCATION.RIGHT }, // [USB: 0xe7]
        	0x5D: { code: 'ContextMenu' }, // [USB: 0x65] Context Menu
        	// 0x5E - reserved
        	0x5F: { code: 'Standby' }, // [USB: 0x82] Sleep

        	0x60: { code: 'Numpad0', keyCap: '0', location: LOCATION.NUMPAD }, // [USB: 0x62]
        	0x61: { code: 'Numpad1', keyCap: '1', location: LOCATION.NUMPAD }, // [USB: 0x59]
        	0x62: { code: 'Numpad2', keyCap: '2', location: LOCATION.NUMPAD }, // [USB: 0x5a]
        	0x63: { code: 'Numpad3', keyCap: '3', location: LOCATION.NUMPAD }, // [USB: 0x5b]
        	0x64: { code: 'Numpad4', keyCap: '4', location: LOCATION.NUMPAD }, // [USB: 0x5c]
        	0x65: { code: 'Numpad5', keyCap: '5', location: LOCATION.NUMPAD }, // [USB: 0x5d]
        	0x66: { code: 'Numpad6', keyCap: '6', location: LOCATION.NUMPAD }, // [USB: 0x5e]
        	0x67: { code: 'Numpad7', keyCap: '7', location: LOCATION.NUMPAD }, // [USB: 0x5f]
        	0x68: { code: 'Numpad8', keyCap: '8', location: LOCATION.NUMPAD }, // [USB: 0x60]
        	0x69: { code: 'Numpad9', keyCap: '9', location: LOCATION.NUMPAD }, // [USB: 0x61]
        	0x6A: { code: 'NumpadMultiply', keyCap: '*', location: LOCATION.NUMPAD }, // [USB: 0x55]
        	0x6B: { code: 'NumpadAdd', keyCap: '+', location: LOCATION.NUMPAD }, // [USB: 0x57]
        	0x6C: { code: 'NumpadComma', keyCap: ',', location: LOCATION.NUMPAD }, // [USB: 0x85]
        	0x6D: { code: 'NumpadSubtract', keyCap: '-', location: LOCATION.NUMPAD }, // [USB: 0x56]
        	0x6E: { code: 'NumpadDecimal', keyCap: '.', location: LOCATION.NUMPAD }, // [USB: 0x63]
        	0x6F: { code: 'NumpadDivide', keyCap: '/', location: LOCATION.NUMPAD }, // [USB: 0x54]

        	0x70: { code: 'F1' }, // [USB: 0x3a]
        	0x71: { code: 'F2' }, // [USB: 0x3b]
        	0x72: { code: 'F3' }, // [USB: 0x3c]
        	0x73: { code: 'F4' }, // [USB: 0x3d]
        	0x74: { code: 'F5' }, // [USB: 0x3e]
        	0x75: { code: 'F6' }, // [USB: 0x3f]
        	0x76: { code: 'F7' }, // [USB: 0x40]
        	0x77: { code: 'F8' }, // [USB: 0x41]
        	0x78: { code: 'F9' }, // [USB: 0x42]
        	0x79: { code: 'F10' }, // [USB: 0x43]
        	0x7A: { code: 'F11' }, // [USB: 0x44]
        	0x7B: { code: 'F12' }, // [USB: 0x45]
        	0x7C: { code: 'F13' }, // [USB: 0x68]
        	0x7D: { code: 'F14' }, // [USB: 0x69]
        	0x7E: { code: 'F15' }, // [USB: 0x6a]
        	0x7F: { code: 'F16' }, // [USB: 0x6b]

        	0x80: { code: 'F17' }, // [USB: 0x6c]
        	0x81: { code: 'F18' }, // [USB: 0x6d]
        	0x82: { code: 'F19' }, // [USB: 0x6e]
        	0x83: { code: 'F20' }, // [USB: 0x6f]
        	0x84: { code: 'F21' }, // [USB: 0x70]
        	0x85: { code: 'F22' }, // [USB: 0x71]
        	0x86: { code: 'F23' }, // [USB: 0x72]
        	0x87: { code: 'F24' }, // [USB: 0x73]
        	// 0x88-0x8F - unassigned

        	0x90: { code: 'NumLock', location: LOCATION.NUMPAD }, // [USB: 0x53]
        	0x91: { code: 'ScrollLock' }, // [USB: 0x47]
        	// 0x92-0x96 - OEM specific
        	// 0x97-0x9F - unassigned

        	// NOTE: 0xA0-0xA5 usually mapped to 0x10-0x12 in browsers
        	0xA0: { code: 'ShiftLeft', location: LOCATION.LEFT }, // [USB: 0xe1]
        	0xA1: { code: 'ShiftRight', location: LOCATION.RIGHT }, // [USB: 0xe5]
        	0xA2: { code: 'ControlLeft', location: LOCATION.LEFT }, // [USB: 0xe0]
        	0xA3: { code: 'ControlRight', location: LOCATION.RIGHT }, // [USB: 0xe4]
        	0xA4: { code: 'AltLeft', location: LOCATION.LEFT }, // [USB: 0xe2]
        	0xA5: { code: 'AltRight', location: LOCATION.RIGHT }, // [USB: 0xe6]

        	0xA6: { code: 'BrowserBack' }, // [USB: 0x0c/0x0224]
        	0xA7: { code: 'BrowserForward' }, // [USB: 0x0c/0x0225]
        	0xA8: { code: 'BrowserRefresh' }, // [USB: 0x0c/0x0227]
        	0xA9: { code: 'BrowserStop' }, // [USB: 0x0c/0x0226]
        	0xAA: { code: 'BrowserSearch' }, // [USB: 0x0c/0x0221]
        	0xAB: { code: 'BrowserFavorites' }, // [USB: 0x0c/0x0228]
        	0xAC: { code: 'BrowserHome' }, // [USB: 0x0c/0x0222]
        	0xAD: { code: 'AudioVolumeMute' }, // [USB: 0x7f]
        	0xAE: { code: 'AudioVolumeDown' }, // [USB: 0x81]
        	0xAF: { code: 'AudioVolumeUp' }, // [USB: 0x80]

        	0xB0: { code: 'MediaTrackNext' }, // [USB: 0x0c/0x00b5]
        	0xB1: { code: 'MediaTrackPrevious' }, // [USB: 0x0c/0x00b6]
        	0xB2: { code: 'MediaStop' }, // [USB: 0x0c/0x00b7]
        	0xB3: { code: 'MediaPlayPause' }, // [USB: 0x0c/0x00cd]
        	0xB4: { code: 'LaunchMail' }, // [USB: 0x0c/0x018a]
        	0xB5: { code: 'MediaSelect' },
        	0xB6: { code: 'LaunchApp1' },
        	0xB7: { code: 'LaunchApp2' },
        	// 0xB8-0xB9 - reserved
        	0xBA: { code: 'Semicolon',  keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
        	0xBB: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
        	0xBC: { code: 'Comma', keyCap: ',' }, // [USB: 0x36] ,<
        	0xBD: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
        	0xBE: { code: 'Period', keyCap: '.' }, // [USB: 0x37] .>
        	0xBF: { code: 'Slash', keyCap: '/' }, // [USB: 0x38] /? (US Standard 101)

        	0xC0: { code: 'Backquote', keyCap: '`' }, // [USB: 0x35] `~ (US Standard 101)
        	// 0xC1-0xCF - reserved

        	// 0xD0-0xD7 - reserved
        	// 0xD8-0xDA - unassigned
        	0xDB: { code: 'BracketLeft', keyCap: '[' }, // [USB: 0x2f] [{ (US Standard 101)
        	0xDC: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
        	0xDD: { code: 'BracketRight', keyCap: ']' }, // [USB: 0x30] ]} (US Standard 101)
        	0xDE: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
        	// 0xDF - miscellaneous/varies

        	// 0xE0 - reserved
        	// 0xE1 - OEM specific
        	// 0xE2: { code: 'IntlBackslash',  keyCap: '\\' }, // [USB: 0x64] \| (UK Standard 102)
        	// 0xE3-0xE4 - OEM specific
        	0xE5: { code: 'Process' }, // (Not in D3E)
        	// 0xE6 - OEM specific
        	// 0xE7 - VK_PACKET
        	// 0xE8 - unassigned
        	// 0xE9-0xEF - OEM specific

        	// 0xF0-0xF5 - OEM specific
        	0xF6: { code: 'Attn' }, // [USB: 0x9a] (Not in D3E)
        	0xF7: { code: 'CrSel' }, // [USB: 0xa3] (Not in D3E)
        	0xF8: { code: 'ExSel' }, // [USB: 0xa4] (Not in D3E)
        	0xF9: { code: 'EraseEof' }, // (Not in D3E)
        	0xFA: { code: 'Play' }, // (Not in D3E)
        	0xFB: { code: 'ZoomToggle' }, // (Not in D3E)
        	// 0xFC - VK_NONAME - reserved
        	// 0xFD - VK_PA1
        	0xFE: { code: 'Clear' } // [USB: 0x9c] (Not in D3E)
        };

        // No legacy keyCode, but listed in D3E:

        // code: usb
        // 'IntlHash': 0x070032,
        // 'IntlRo': 0x070087,
        // 'IntlYen': 0x070089,
        // 'NumpadBackspace': 0x0700bb,
        // 'NumpadClear': 0x0700d8,
        // 'NumpadClearEntry': 0x0700d9,
        // 'NumpadMemoryAdd': 0x0700d3,
        // 'NumpadMemoryClear': 0x0700d2,
        // 'NumpadMemoryRecall': 0x0700d1,
        // 'NumpadMemoryStore': 0x0700d0,
        // 'NumpadMemorySubtract': 0x0700d4,
        // 'NumpadParenLeft': 0x0700b6,
        // 'NumpadParenRight': 0x0700b7,

        //--------------------------------------------------------------------
        //
        // Browser/OS Specific Mappings
        //
        //--------------------------------------------------------------------

        mergeIf(keyCodeToInfoTable,
        	'moz', {
        		0x3B: { code: 'Semicolon', keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
        		0x3D: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
        		0x6B: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
        		0x6D: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
        		0xBB: { code: 'NumpadAdd', keyCap: '+', location: LOCATION.NUMPAD }, // [USB: 0x57]
        		0xBD: { code: 'NumpadSubtract', keyCap: '-', location: LOCATION.NUMPAD } // [USB: 0x56]
        });

        mergeIf(keyCodeToInfoTable,
        	'moz-mac', {
        		0x0C: { code: 'NumLock', location: LOCATION.NUMPAD }, // [USB: 0x53]
        		0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
        });

        mergeIf(keyCodeToInfoTable,
        	'moz-win', {
        		0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
        });

        mergeIf(keyCodeToInfoTable,
        	'chrome-mac', {
        		0x5D: { code: 'MetaRight', location: LOCATION.RIGHT } // [USB: 0xe7]
        });

        // Windows via Bootcamp (!)
        if (0)
        {
        	mergeIf(keyCodeToInfoTable,
        			'chrome-win', {
        				0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
        				0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
        				0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
        	});

        	mergeIf(keyCodeToInfoTable,
        			'ie', {
        				0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
        				0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
        				0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
        	});
        }

        mergeIf(keyCodeToInfoTable,
        	'safari', {
        		0x03: { code: 'Enter' }, // [USB: 0x28] old Safari
        		0x19: { code: 'Tab' } // [USB: 0x2b] old Safari for Shift+Tab
        });

        mergeIf(keyCodeToInfoTable,
        	'ios', {
        		0x0A: { code: 'Enter', location: LOCATION.STANDARD } // [USB: 0x28]
        });

        mergeIf(keyCodeToInfoTable,
        	'safari-mac', {
        		0x5B: { code: 'MetaLeft', location: LOCATION.LEFT }, // [USB: 0xe3]
        		0x5D: { code: 'MetaRight', location: LOCATION.RIGHT }, // [USB: 0xe7]
        		0xE5: { code: 'KeyQ', keyCap: 'Q' } // [USB: 0x14] On alternate presses, Ctrl+Q sends this
        });

        //--------------------------------------------------------------------
        //
        // Identifier Mappings
        //
        //--------------------------------------------------------------------

        // Cases where newer-ish browsers send keyIdentifier which can be
        // used to disambiguate keys.

        // keyIdentifierTable[keyIdentifier] -> keyInfo

        var keyIdentifierTable = {};
        if ('cros' === os) {
        	keyIdentifierTable['U+00A0'] = { code: 'ShiftLeft', location: LOCATION.LEFT };
        	keyIdentifierTable['U+00A1'] = { code: 'ShiftRight', location: LOCATION.RIGHT };
        	keyIdentifierTable['U+00A2'] = { code: 'ControlLeft', location: LOCATION.LEFT };
        	keyIdentifierTable['U+00A3'] = { code: 'ControlRight', location: LOCATION.RIGHT };
        	keyIdentifierTable['U+00A4'] = { code: 'AltLeft', location: LOCATION.LEFT };
        	keyIdentifierTable['U+00A5'] = { code: 'AltRight', location: LOCATION.RIGHT };
        }
        if ('chrome-mac' === browser_os) {
        	keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
        }
        if ('safari-mac' === browser_os) {
        	keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
        }
        if ('ios' === os) {
        	// These only generate keyup events
        	keyIdentifierTable['U+0010'] = { code: 'Function' };

        	keyIdentifierTable['U+001C'] = { code: 'ArrowLeft' };
        	keyIdentifierTable['U+001D'] = { code: 'ArrowRight' };
        	keyIdentifierTable['U+001E'] = { code: 'ArrowUp' };
        	keyIdentifierTable['U+001F'] = { code: 'ArrowDown' };

        	keyIdentifierTable['U+0001'] = { code: 'Home' }; // [USB: 0x4a] Fn + ArrowLeft
        	keyIdentifierTable['U+0004'] = { code: 'End' }; // [USB: 0x4d] Fn + ArrowRight
        	keyIdentifierTable['U+000B'] = { code: 'PageUp' }; // [USB: 0x4b] Fn + ArrowUp
        	keyIdentifierTable['U+000C'] = { code: 'PageDown' }; // [USB: 0x4e] Fn + ArrowDown
        }

        //--------------------------------------------------------------------
        //
        // Location Mappings
        //
        //--------------------------------------------------------------------

        // Cases where newer-ish browsers send location/keyLocation which
        // can be used to disambiguate keys.

        // locationTable[location][keyCode] -> keyInfo
        var locationTable = [];
        locationTable[LOCATION.LEFT] = {
        	0x10: { code: 'ShiftLeft', location: LOCATION.LEFT }, // [USB: 0xe1]
        	0x11: { code: 'ControlLeft', location: LOCATION.LEFT }, // [USB: 0xe0]
        	0x12: { code: 'AltLeft', location: LOCATION.LEFT } // [USB: 0xe2]
        };
        locationTable[LOCATION.RIGHT] = {
        	0x10: { code: 'ShiftRight', location: LOCATION.RIGHT }, // [USB: 0xe5]
        	0x11: { code: 'ControlRight', location: LOCATION.RIGHT }, // [USB: 0xe4]
        	0x12: { code: 'AltRight', location: LOCATION.RIGHT } // [USB: 0xe6]
        };
        locationTable[LOCATION.NUMPAD] = {
        	0x0D: { code: 'NumpadEnter', location: LOCATION.NUMPAD } // [USB: 0x58]
        };

        mergeIf(locationTable[LOCATION.NUMPAD],
        	'moz', {
        		0x6D: { code: 'NumpadSubtract', location: LOCATION.NUMPAD }, // [USB: 0x56]
        		0x6B: { code: 'NumpadAdd', location: LOCATION.NUMPAD } // [USB: 0x57]
        });
        mergeIf(locationTable[LOCATION.LEFT],
        	'moz-mac', {
        		0xE0: { code: 'MetaLeft', location: LOCATION.LEFT } // [USB: 0xe3]
        });
        mergeIf(locationTable[LOCATION.RIGHT],
        	'moz-mac', {
        		0xE0: { code: 'MetaRight', location: LOCATION.RIGHT } // [USB: 0xe7]
        });
        mergeIf(locationTable[LOCATION.RIGHT],
        	'moz-win', {
        		0x5B: { code: 'MetaRight', location: LOCATION.RIGHT } // [USB: 0xe7]
        });


        mergeIf(locationTable[LOCATION.RIGHT],
        	'mac', {
        		0x5D: { code: 'MetaRight', location: LOCATION.RIGHT } // [USB: 0xe7]
        });

        mergeIf(locationTable[LOCATION.NUMPAD],
        	'chrome-mac', {
        		0x0C: { code: 'NumLock', location: LOCATION.NUMPAD } // [USB: 0x53]
        });

        mergeIf(locationTable[LOCATION.NUMPAD],
        	'safari-mac', {
        		0x0C: { code: 'NumLock', location: LOCATION.NUMPAD }, // [USB: 0x53]
        		0xBB: { code: 'NumpadAdd', location: LOCATION.NUMPAD }, // [USB: 0x57]
        		0xBD: { code: 'NumpadSubtract', location: LOCATION.NUMPAD }, // [USB: 0x56]
        		0xBE: { code: 'NumpadDecimal', location: LOCATION.NUMPAD }, // [USB: 0x63]
        		0xBF: { code: 'NumpadDivide', location: LOCATION.NUMPAD } // [USB: 0x54]
        });


        //--------------------------------------------------------------------
        //
        // Key Values
        //
        //--------------------------------------------------------------------

        // Mapping from `code` values to `key` values. Values defined at:
        // https://w3c.github.io/uievents-key/
        // Entries are only provided when `key` differs from `code`. If
        // printable, `shiftKey` has the shifted printable character. This
        // assumes US Standard 101 layout

        var codeToKeyTable = {
        	// Modifier Keys
        	ShiftLeft: { key: 'Shift', location: LOCATION.LEFT },
        	ShiftRight: { key: 'Shift', location: LOCATION.RIGHT },
        	ControlLeft: { key: 'Control', location: LOCATION.LEFT },
        	ControlRight: { key: 'Control', location: LOCATION.RIGHT },
        	AltLeft: { key: 'Alt', location: LOCATION.LEFT },
        	AltRight: { key: 'Alt', location: LOCATION.RIGHT },
        	MetaLeft: { key: 'Meta', location: LOCATION.LEFT },
        	MetaRight: { key: 'Meta', location: LOCATION.RIGHT },

        	// Whitespace Keys
        	NumpadEnter: { key: 'Enter', location: LOCATION.NUMPAD },
        	Space: { key: ' ' },

        	// Printable Keys
        	Digit0: { key: '0', shiftKey: ')' },
        	Digit1: { key: '1', shiftKey: '!' },
        	Digit2: { key: '2', shiftKey: '@' },
        	Digit3: { key: '3', shiftKey: '#' },
        	Digit4: { key: '4', shiftKey: '$' },
        	Digit5: { key: '5', shiftKey: '%' },
        	Digit6: { key: '6', shiftKey: '^' },
        	Digit7: { key: '7', shiftKey: '&' },
        	Digit8: { key: '8', shiftKey: '*' },
        	Digit9: { key: '9', shiftKey: '(' },
        	KeyA: { key: 'a', shiftKey: 'A' },
        	KeyB: { key: 'b', shiftKey: 'B' },
        	KeyC: { key: 'c', shiftKey: 'C' },
        	KeyD: { key: 'd', shiftKey: 'D' },
        	KeyE: { key: 'e', shiftKey: 'E' },
        	KeyF: { key: 'f', shiftKey: 'F' },
        	KeyG: { key: 'g', shiftKey: 'G' },
        	KeyH: { key: 'h', shiftKey: 'H' },
        	KeyI: { key: 'i', shiftKey: 'I' },
        	KeyJ: { key: 'j', shiftKey: 'J' },
        	KeyK: { key: 'k', shiftKey: 'K' },
        	KeyL: { key: 'l', shiftKey: 'L' },
        	KeyM: { key: 'm', shiftKey: 'M' },
        	KeyN: { key: 'n', shiftKey: 'N' },
        	KeyO: { key: 'o', shiftKey: 'O' },
        	KeyP: { key: 'p', shiftKey: 'P' },
        	KeyQ: { key: 'q', shiftKey: 'Q' },
        	KeyR: { key: 'r', shiftKey: 'R' },
        	KeyS: { key: 's', shiftKey: 'S' },
        	KeyT: { key: 't', shiftKey: 'T' },
        	KeyU: { key: 'u', shiftKey: 'U' },
        	KeyV: { key: 'v', shiftKey: 'V' },
        	KeyW: { key: 'w', shiftKey: 'W' },
        	KeyX: { key: 'x', shiftKey: 'X' },
        	KeyY: { key: 'y', shiftKey: 'Y' },
        	KeyZ: { key: 'z', shiftKey: 'Z' },
        	/*
        	Numpad0: { key: '0', location: LOCATION.NUMPAD },
        	Numpad1: { key: '1', location: LOCATION.NUMPAD },
        	Numpad2: { key: '2', location: LOCATION.NUMPAD },
        	Numpad3: { key: '3', location: LOCATION.NUMPAD },
        	Numpad4: { key: '4', location: LOCATION.NUMPAD },
        	Numpad5: { key: '5', location: LOCATION.NUMPAD },
        	Numpad6: { key: '6', location: LOCATION.NUMPAD },
        	Numpad7: { key: '7', location: LOCATION.NUMPAD },
        	Numpad8: { key: '8', location: LOCATION.NUMPAD },
        	Numpad9: { key: '9', location: LOCATION.NUMPAD },
        	*/
        	NumpadMultiply: { key: '*', location: LOCATION.NUMPAD },
        	NumpadAdd: { key: '+', location: LOCATION.NUMPAD },
        	NumpadComma: { key: ',', location: LOCATION.NUMPAD },
        	NumpadSubtract: { key: '-', location: LOCATION.NUMPAD },
        	NumpadDecimal: { key: '.', location: LOCATION.NUMPAD },
        	NumpadDivide: { key: '/', location: LOCATION.NUMPAD },
        	Semicolon: { key: ';', shiftKey: ':' },
        	Equal: { key: '=', shiftKey: '+' },
        	Comma: { key: ',', shiftKey: '<' },
        	Minus: { key: '-', shiftKey: '_' },
        	Period: { key: '.', shiftKey: '>' },
        	Slash: { key: '/', shiftKey: '?' },
        	Backquote: { key: '`', shiftKey: '~' },
	BracketLeft: { key: '[', shiftKey: '{' },
        	Backslash: { key: '\\', shiftKey: '|' },
        	BracketRight: { key: ']', shiftKey: '}' },
        	Quote: { key: '\'', shiftKey: '"' }
        	//IntlBackslash: { key: '\\', shiftKey: '|' }
        };

        mergeIf(codeToKeyTable,
        	'mac', {
        		MetaLeft: { key: 'Meta' },
        		MetaRight: { key: 'Meta' }
        });

        // Corrections for 'key' names in older browsers (e.g. FF36-, IE9, etc)
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.key#Key_values
        var keyFixTable = {
        	Add: '+',
        	Decimal: '.',
        	Divide: '/',
        	Subtract: '-',
        	Multiply: '*',
        	Spacebar: ' ',
        	Esc: 'Escape',
        	Nonconvert: 'NonConvert',
        	Left: 'ArrowLeft',
        	Up: 'ArrowUp',
        	Right: 'ArrowRight',
        	Down: 'ArrowDown',
        	Del: 'Delete',
        	Menu: 'ContextMenu',
        	MediaNextTrack: 'MediaTrackNext',
        	MediaPreviousTrack: 'MediaTrackPrevious',
        	SelectMedia: 'MediaSelect',
        	HalfWidth: 'Hankaku',
        	FullWidth: 'Zenkaku',
        	RomanCharacters: 'Romaji',
        	Crsel: 'CrSel',
        	Exsel: 'ExSel',
        	Zoom: 'ZoomToggle'
        };

        //--------------------------------------------------------------------
        //
        // Exported Functions
        //
        //--------------------------------------------------------------------

        //var codeTable = remap(keyCodeToInfoTable, 'code', 'keyCode');

        var codeTable = (function () {
        	var newMap = {}, keys = Object.keys(keyCodeToInfoTable);

        	keys.forEach(function(key) {
        		var item = keyCodeToInfoTable[key],
        			  code = item['code'];

        		item['keyCode'] = parseInt(key);
        		newMap[code] = item;
        	});
        	return newMap;
        })();

        var keyToCodeTable = (function () {
        	var newMap = {}, keys = Object.keys(codeToKeyTable);

        	keys.forEach(function(code) {
        		var item = codeToKeyTable[code], location, key, infos;

        		item['code'] = code;
        		location = 'location' in item ? item.location : 0;

        		key = item['key'];
        		infos = newMap[key] = new Array(4);
        		infos[location] = item;

        		if ('shiftKey' in item)
        		{
        			key = item['shiftKey'];
        			infos = newMap[key] = new Array(4);
        			infos[location] = item;
        		}
        	});
        	return newMap;
        })();

        // conv : code --> key
        var getKeyStringByCodeString = function (codeString, shiftKey)
        {
        	if (codeString)
        	{
        		var entry = codeToKeyTable[codeString];
        		if (!entry)
        		{
        			var keyInfo = codeTable[codeString];
        			if (keyInfo) return codeString;
        		}
        		else
        		{
        			return (shiftKey && 'shiftKey' in entry) ? entry.shiftKey : entry.key;
        		}
        	}
        	return "";
        };

        // conv : code --> keyCode
        function getKeyCodeByCodeString(codeString)
        {
        	if (!codeString || !codeTable.hasOwnProperty(codeString))
        		return 0;

        	var keyInfo = codeTable[codeString];
        	return keyInfo.keyCode || 0;
        }

        // conv : code --> char
        function getCharByCodeString(codeString, shiftKey)
        {
        	if (!codeString || !codeTable.hasOwnProperty(codeString))
        		return '';

        	var keyInfo = codeTable[codeString];
        	if (keyInfo.keyCap && shiftKey)
        	{
        		var entry = codeToKeyTable[codeString];
        		if (entry && 'shiftKey' in entry)
        			return entry.shiftKey;
        	}
        	return keyInfo.keyCap || '';
        }

        var getFixedKeyString = function (keyString)
        {
        	if (keyString)
        	{
        		if (keyFixTable.hasOwnProperty(keyString))
        			keyString = keyFixTable[keyString];
        	}
        	return keyString;
        };

        // conv : key --> code, return { code, shiftKey }
        var getCodeInfoByKeyString = function (keyString, location)
        {
        	var codeString, location = location | 0, shiftKey;
        	if (keyString)
        	{
        		if (keyString in keyToCodeTable)
        		{
        			var keyInfo = keyToCodeTable[keyString][location];
        			if (keyInfo)
        			{
        				codeString = keyInfo.code;
        				if (keyInfo.shiftKey == keyString)
        					shiftKey = true;
        			}
        		}

        		if (!codeString && keyString in keyIdentifierTable)
        		{
        			var keyInfo = keyIdentifierTable[keyString];
        			if (keyInfo && keyInfo.location == location)
        			{
        				codeString = keyInfo.code;
        			}
        		}

        		if (!codeString && keyString in codeTable)
        		{
        			codeString = keyString;
        		}
        	}
        	return { code: (codeString || ''), shiftKey: shiftKey || false };
        };

        // conv : key --> keyCode, return { keyCode, shiftKey }
        var getKeyCodeInfoByKeyString = function (keyString, location)
        {
        	var location = location | 0,
        		  codeInfo = getCodeInfoByKeyString(keyString),
        		  keyCode,
        		  shiftKey;

        	if (codeInfo && codeInfo.code)
        	{
        		keyCode = getKeyCodeByCodeString(codeInfo.code);
        		shiftKey = codeInfo.shftKey;
        	}
        	return { keyCode: (keyCode || 0), shiftKey: shiftKey || false };
        };

        // get : code--> keyInfo Object
        var getKeyInfoByCodeString = function (codeString, location, shiftKey)
        {
        	var keyString, keyCode, ch;

        	if (codeString)
        	{
        		if (codeString in codeTable)
        		{
        			var keyInfo = codeTable[codeString];
        			keyCode = keyInfo.keyCode || 0;

        			if (location && keyCode in locationTable[location])
        			{
        				var locInfo = locationTable[location][keyCode]; // { code, location }
        				codeString = locInfo.code;

        				if (codeString && codeString in codeTable)
        				{
        					var codeInfo = codeTable[codeString];
        					keyCode = codeInfo.keyCode || 0;
        				}
        			}
        			else
        			{
        				location = keyInfo.location || location;
        			}
        		}

        		keyString = getKeyStringByCodeString(codeString, shiftKey);
        		ch = getCharByCodeString(codeString, shiftKey);
        	}

        	return {
        		'key': keyString || '',
        		'code': codeString || '',
        		'keyCode': keyCode || '',
        		'char': ch || '',
        		'charCode': ch && ch.charCodeAt(0) || 0,
        		'location': location || LOCATION.STANDARD,
        		'shiftKey': shiftKey || false
        	};
        };

        // get : keyCode --> keyInfo Object
        var getKeyInfoByKeyCode = function (keyCode, location, shiftKey)
        {
        	var keyString, codeString, keyCode, ch;

        	if (keyCode)
        	{
        		if (location && keyCode in locationTable[location])
        		{
        			var codeInfo = locationTable[location][keyCode]; // { code, location }
        			codeString = codeInfo.code;

        			if (codeString && codeString in codeTable)
        			{
        				var keyInfo = codeTable[codeString];
        				keyCode = keyInfo.keyCode || 0;
        			}

        			keyString = getKeyStringByCodeString(codeString, shiftKey);
        			ch = getCharByCodeString(codeString, shiftKey);
        		}
        		else if (keyCode in keyCodeToInfoTable)
        		{
        			var keyInfo = keyCodeToInfoTable[keyCode]; // { code, location, keyCap, keyCode }

        			codeString = keyInfo.code;
        			location = keyInfo.location || LOCATION.STANDARD;
        			ch = keyInfo.keyCap || '';

        			keyString = getKeyStringByCodeString(codeString, shiftKey);
        		}
        	}
        	return {
        		'key': keyString || '',
        		'code': codeString || '',
        		'keyCode': keyCode || '',
        		'char': ch || '',
        		'charCode': ch && ch.charCodeAt(0) || 0,
        		'location': location || LOCATION.STANDARD,
        		'shiftKey': shiftKey || false
        	};
        };

        // get : key--> keyInfo Object
        var getKeyInfoByKeyString = function (keyString, location)
        {
        	var codeString, keyCode, shiftKey, ch;

        	location = location || LOCATION.STANDARD;
        	if (keyString)
        	{
        		keyString = getFixedKeyString(keyString);
        		var codeInfo = getCodeInfoByKeyString(keyString, location);

        		if (codeInfo && codeInfo.code)
        		{
        			codeString = codeInfo.code;
        			if (codeString in codeTable)
        			{
        				var keyInfo = codeTable[codeString];
        				keyCode = keyInfo.keyCode || 0;
        			}
        			shiftKey = codeInfo.shftKey;

        			ch = getCharByCodeString(codeString, shiftKey);
        		}
        	}

        	return {
        		'key': keyString || '',
        		'code': codeString || '',
        		'keyCode': keyCode || '',
        		'char': ch || '',
        		'charCode': ch && ch.charCodeAt(0) || 0,
        		'location': location || LOCATION.STANDARD
        	};
        };

        //////////////////////////////////////////////////////////////////////////
        // keyboard event
        if (nexacro._Browser == "Runtime")
        {
        	var eventInfoToArguments = function (event_name, eventInfo)
        	{
        		var argList = [];
        		argList.push(eventInfo.keyCode);
        		argList.push(eventInfo.altKey);
        		argList.push(eventInfo.ctrlKey);
        		argList.push(eventInfo.shiftKey);
        		return argList;
        	};

        	var createSysKeyboardEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var event_type = EVENT.getEventTypeByName(event_name),
        			  initDic = {
        				'ctrlKey': false,			/* boolean */
        				'shiftKey': false,			/* boolean */
        				'altKey': false,			/* boolean */
        				'keyCode': 0,

        				toArguments: function () {
        					return eventInfoToArguments(event_name, this);
        				}
        			},
        			evt = options || {};

        		if (event_type != "KeyboardEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}
        		return evt;
        	};

        	var dispatchKeyboardEvent = function (elem, name, key, location /* = 0 */, ctrlKey /* = false */, shiftKey /* = false */, altKey /* = false */)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        					keyCode: 0,
        					ctrlKey: ctrlKey || false,
        					shiftKey: shiftKey || false,
        					altKey: altKey || false
        				};

        		var keyInfo = getKeyInfoByKeyString(key, location);
        		if (keyInfo)
        		{
        			opt.keyCode = keyInfo.keyCode;
        		}

        		var evt = createSysKeyboardEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};

        	var dispatchKeyboardEventEx = function (comp, name, key, location /* = 0 */, ctrlKey , shiftKey , altKey , clientX, clientY)
        	{
        		if (!comp) return;

        		var elem = null;
        		if (comp._is_component)
        			elem = EVENT.getElementInComp(comp, clientX, clientY);

        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        					keyCode: 0,
        					ctrlKey: ctrlKey || false,
        					shiftKey: shiftKey || false,
        					altKey: altKey || false
        				};

        		var keyInfo = getKeyInfoByKeyString(key, location);
        		if (keyInfo)
        		{
        			opt.keyCode = keyInfo.keyCode;
        		}

        		var evt = createSysKeyboardEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }
        else
        {
        	var _keyboardInitEventType = -1,
        		  _isSupportKeyboardEventConstructor = (function () {  try { var evt = new KeyboardEvent('keyup');  } catch (ex) { return false; } return true; })();
        	var detectInitKeyboardEventType = function ()
        	{
        		if (_keyboardInitEventType > -1)
        			return;

        		// <w3c>
        		// [02] old w3c(deprecated, 20030331)
        		// 						: initKeyboardEvent(type,  canBubble, cancelable, view, 					keyIdentifier, keyLocation, 	ctrlKey, 		shiftKey, 		altKey, 		metaKey, 	altGraphKey);
        		// [05] w3c(deprecated) : modern browsers is support "KeyboardEvent" constructor
        		// 						: initKeyboardEvent(type,  canBubble, cancelable, view, 					key, 				location, 		modifiersList, repeat, 			locale );

        		// <ie>
        		// [15] ie 				: initKeyboardEvent(type,  canBubble, cancelable, view, 					key, 				location, 		modifiersList, repeat, 			locale );

        		// <firefox>
        		// [21] firefox 		: initKeyEvent		(type,  canBubble, cancelable, view, 					ctrlKey, 		altKey, 			shiftKey, 		metaKey, 		keyCode, 	charCode );
        		// [24] firefox 		: initKeyboardEvent(type,  canBubble, cancelable, view, 					char, 			key, 				location, 		modifiersList, repeat, 		locale );

        		// <webkit>
        		// [31] old webkit 	: initKeyboardEvent(type, canBubble, cancelable, view/* must null */, ctrlKey, 		altKey, 			shiftKey, 		metaKey, 		keyCode, 	charCode);
        		// [32] Webkit-based browsers (Safari/Chrome)
        		// 						: initKeyboardEvent(type, canBubble, cancelable, view, 					keyIdentifier, keyLocation, 	ctrlKey, 		shiftKey, 		altKey, 		metaKey, 	altGraphKey);
        		// [33] webkit 		: initKeyboardEvent(type, canBubble, cancelable, view, 					keyIdentifier, keyLocation, 	ctrlKey, 		altKey, 			shiftKey, 	metaKey, 	altGraphKey);

        		// <type>
        		// 0: unsupport
        		// 1:  initKeyboardEvent(type, canBubble, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode,	charCode)
        		// 2:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, shiftKey, altKey, metaKey, altGraphKey)
        		// 3:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey)
        		// 4:  initKeyboardEvent(type,  canBubble, cancelable, view, char, keyIdentifier, keyLocation, modifiersList, repeat, locale)
        		// 5:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, modifiersList, repeat, locale)

        		try {
        			var evt = document.createEvent( "KeyboardEvent" );

        			if (nexacro._Browser == "Gecko" && 'initKeyEvent' in evt)
        			{
        				_keyboardInitEventType = 1;
        				return;
        			}

        			evt.initKeyboardEvent(
        				"keyup",
        				false, 	/* bubbles */
        				false, 	/* cancelable */
        				window, /* view */
        				"+",  	/* keyIdentifier | webkit keyIdentifier | IE key | old webkit ctrlKey */
        				3,			/* keyLocation | webkit location | IE location | old webkit altKey */
        				true, 	/* ctrlKey | old webkit shiftKey |  webkit ctrlKey | IE modifiersList */
        				false, 	/* webkit shiftKey | webkit altKey | IE repeat */
        				true, 	/* webkit altKey | webkit shiftKey | IE locale */
        				false,	/* webkit metaKey */
        				false 	/* webkit altGraphKey */
        			);

        			if ((evt["keyIdentifier"] || evt["key"]) == "+" || (evt["keyLocation"] || evt["location"]) == 3)
        			{
        				_keyboardInitEventType = evt.ctrlKey ? (evt.altKey ?  2 : 3) : (evt.shiftKey ? 1  : 5);
        			}
        			else if (evt['char'] == "+" && evt['repeat'] == true)
        			{
        				_keyboardInitEventType = 4;
        			}
        			else
        			{
        				_keyboardInitEventType = 0;
        			}
        		}
        		catch (ex)
        		{
        			_keyboardInitEventType = 0;
        		}
        		return;
        	};

        	if (!_isSupportKeyboardEventConstructor)
        	{
        		detectInitKeyboardEventType();

        		if (_keyboardInitEventType == 1)
        		{
        			// 1:  initKeyboardEvent(type, canBubble, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode,	charCode)
        			if (nexacro._Browser == "Gecko")
        			{
        				var initSysKeyboardEvent = function (evt, event_name, option)
        				{
        					evt.initKeyEvent(event_name, option.bubbles, option.cancelable, option.view,
        							option.ctrlKey, option.altKey, option.shiftKey, option.metaKey, option.keyCode, option.charCode);
        				}
        			}
        			else
        			{
        				var initSysKeyboardEvent = function (evt, event_name, option)
        				{
        					evt.initKeyboardEvent(event_name, option.bubbles, option.cancelable, null,
        								option.ctrlKey, option.altKey, option.shiftKey, option.metaKey, option.keyCode, option.charCode);
        				}
        			}
        		}
        		else if (_keyboardInitEventType == 2)
        		{
        			// 2:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, shiftKey, altKey, metaKey, altGraphKey)
        			var initSysKeyboardEvent = function (evt, event_name, option)
        			{
        				evt.initKeyboardEvent(event_name, option.bubbles, option.cancelable, option.view,
        							option.key, option.location, option.ctrlKey, option.shiftKey, option.altKey, option.metaKey, option.altGraphKey);
        			}
        		}
        		else if (_keyboardInitEventType == 3)
        		{
        			// 3:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey)
        			var initSysKeyboardEvent = function (evt, event_name, option)
        			{
        				evt.initKeyboardEvent(event_name, option.bubbles, option.cancelable, option.view,
        							option.key, option.location, option.ctrlKey, option.altKey, option.shiftKey, option.metaKey, option.altGraphKey);
        			}
        		}
        		else if (_keyboardInitEventType == 4)
        		{
        			// 4:  initKeyboardEvent(type,  canBubble, cancelable, view, char, keyIdentifier, keyLocation, modifiersList, repeat, locale)
        			var initSysKeyboardEvent = function (evt, event_name, option)
        			{
        				evt.initKeyboardEvent(event_name, option.bubbles, option.cancelable, option.view,
        							option.char, option.key, option.location, option.modifiersList, option.repeat, option.locale);
        			}
        		}
        		else if (_keyboardInitEventType == 5)
        		{
        			// 5:  initKeyboardEvent(type,  canBubble, cancelable, view, keyIdentifier, keyLocation, modifiersList, repeat, locale)
        			var initSysKeyboardEvent = function (evt, event_name, option)
        			{
        				evt.initKeyboardEvent(event_name, option.bubbles, option.cancelable, option.view,
        							option.key, option.location, option.modifiersList, option.repeat, option.locale);
        			}
        		}
        		else
        		{
        			var initSysKeyboardEvent = function (evt, event_name, option)
        			{
        				evt.initEvent(event_name, option.bubbles, option.cancelable);
        				for (var key in option)
        				{
        					if (option.hasOwnProperty(key))
        						evt[key] = option[key];
        				}
        			}
        		}
        	}

        	var createSysKeyboardEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var evt,
        			options = options || {},
        			event_type = EVENT.getEventTypeByName(event_name),
        			node = elem.handle,
        			cur_doc = node.ownerDocument || node.document,
        			cur_win = cur_doc.defaultView || cur_doc.parentWindow,
        			initDic = {
        				'bubbles': true,
        				'cancelable': true,
        				'view': cur_win,

        				'char': '',					/* string: unicode string. if not printable, empty string */
        				'key': '',					/* string: key identifier. ["Alt", "ArrowDown",  "Backspace", "a", ...] */
        				'code': '',					/* string: code string. ["AltLeft", "Digit1",  "KeyA", ...] */
        				'location': 0,				/* standard:0, ;eft:1, right:2, numpad:3*/

        				'ctrlKey': false,			/* boolean */
        				'shiftKey': false,			/* boolean */
        				'altKey': false,			/* boolean */
        				'metaKey': false,		/* boolean */
        				'altGraphKey': false,	/* boolean */

        				'charCode': 0,
        				'keyCode': 0,
        				'repeat': false,			/* boolean */
        				'locale': '',					/* string */
        				'composed': true	/* boolean */
        			},
        			initOpt = {}
        		;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}
        		var which = initOpt['which'] = initOpt['keyCode'];

        		if (event_type != "KeyboardEvent")
        			return null;

        		if (_isSupportKeyboardEventConstructor)
        		{
        			evt = new KeyboardEvent(event_name, initOpt);
        		}
        		else if (cur_doc.createEvent)
        		{
        			var modifiersList = [], sModifiersList;
        			if (initOpt.ctrlKey) modifiersList.push('Control');
        			if (initOpt.shiftKey) modifiersList.push('Shift');
        			if (initOpt.altKey) modifiersList.push('Alt');
        			if (initOpt.metaKey) modifiersList.push('Meta');
        			if (initOpt.altGraphKey) modifiersList.push('altGraphKey');
        			sModifiersList = modifiersList.join(' ');

        			initOpt['modifiersList'] = sModifiersList;

        			evt = cur_doc.createEvent(event_type);
        			initSysKeyboardEvent(evt, event_name, initOpt);
        		}
        		else if (cur_doc.createEventObject)
        		{
        			evt = cur_doc.createEventObject();
        			for (var key in initOpt)
        			{
        				if (initOpt.hasOwnProperty(key))
        					evt[key] = initOpt[key];
        			}
        		}

        		return evt;
        	};

        	var dispatchKeyboardEvent = function (elem, name, key, location /* = 0 */, ctrlKey /* = false */, shiftKey /* = false */, altKey /* = false */)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        					key: key,
        					keyCode: key,
        					location: location || 0,
        					ctrlKey: ctrlKey || false,
        					shiftKey: shiftKey || false,
        					altKey: altKey || false
        				};

        		var keyInfo = getKeyInfoByKeyString(key, location);
        		if (keyInfo)
        		{
        			for (var k in keyInfo)
        			{
        				if (keyInfo.hasOwnProperty(k))
        					opt[k] = keyInfo[k];
        			}
        		}

        		//if (!opt.keyCode && !opt.charCode && (typeof opt.key == "number"))
        		//	opt.keyCode = opt.charCode = opt.key;

        		var evt = createSysKeyboardEvent(elem, event_type, opt);
        		if (evt)
        		{
        			// this code is designed to work in chrome.
        			if (evt.keyCode != opt.keyCode && 'defineProperty' in Object)
        			{
        				Object.defineProperty(evt, 'keyCode', {
        							'get' : function() {
        								return this.keyCodeVal;
        							}
        				});
        				Object.defineProperty(evt, 'which', {
        							'get' : function() {
        								return this.keyCodeVal;
        							}
        				});
        				evt.keyCodeVal = opt.keyCode;
        			}

        			EVENT.dispatchSysEvent(elem, event_name, evt);

        			if (name == "keydown")
        			{
        				if (nexacro._Browser == "IE")
        				{
        					if (ctrlKey)
        					{
        						if (key == 'v')
        						{
        							document.execCommand('Paste');
        						}
        					}
        				}

        				if (ctrlKey && key == 'c')
        				{
        					document.execCommand('Copy');
        				}
        				else if (ctrlKey && key == 'x')
        				{
        					document.execCommand('Cut');
        				}
        			}
        		}
        		return evt;
        	};

        	var dispatchKeyboardEventEx = function (comp, name, key, location /* = 0 */, ctrlKey , shiftKey , altKey , clientX, clientY)
        	{
        		if (!comp) return;

        		var elem = null;
        		if (comp._is_component)
        			elem = EVENT.getElementInComp(comp, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        					key: key,
        					location: location || 0,
        					ctrlKey: ctrlKey || false,
        					shiftKey: shiftKey || false,
        					altKey: altKey || false
        				};

        		var keyInfo = getKeyInfoByKeyString(key, location);
        		if (keyInfo)
        		{
        			for (var k in keyInfo)
        			{
        				if (keyInfo.hasOwnProperty(k))
        					opt[k] = keyInfo[k];
        			}
        		}

        		var evt = createSysKeyboardEvent(elem, event_type, opt);
        		if (evt)
        		{
        			// this code is designed to work in chrome.
        			if (evt.keyCode != opt.keyCode && 'defineProperty' in Object)
        			{
        				Object.defineProperty(evt, 'keyCode', {
        							'get' : function() {
        								return this.keyCodeVal;
        							}
        				});
        				Object.defineProperty(evt, 'which', {
        							'get' : function() {
        								return this.keyCodeVal;
        							}
        				});
        				evt.keyCodeVal = opt.keyCode;
        			}

        			EVENT.dispatchSysEvent(elem, event_name, evt);

        			if (name == "keydown")
        			{
        				if (nexacro._Browser == "IE")
        				{
        					if (ctrlKey)
        					{
        						if (key == 'v')
        						{
        							document.execCommand('Paste');
        						}
        					}
        				}

        				if (ctrlKey && key == 'c')
        				{
        					document.execCommand('Copy');
        				}
        				else if (ctrlKey && key == 'x')
        				{
        					document.execCommand('Cut');
        				}
        			}
        		}
        		return evt;
        	};
        }

        EVENT.dispatchKeyboardEvent = dispatchKeyboardEvent;
        EVENT.dispatchKeyboardEventEx = dispatchKeyboardEventEx;

        //////////////////////////////////////////////////////////////////////////
        // input event
        if (typeof EVENT.dispatchInputEvent !== 'undefined')
        	return;

        if (nexacro._Browser == "Runtime")
        {
        	var createSysInputEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var event_type = EVENT.getEventTypeByName(event_name),
        			initDic = {
        			},
        			evt = options || {};

        		if (event_type != "InputEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}
        		return evt;
        	};

        	var dispatchInputEvent = function (elem, name, key, location /* = 0 */, ctrlKey /* = false */, shiftKey /* = false */, altKey /* = false */)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			event_type = sysEventInfo.type || event_name,
        			opt = {};

        		var keyInfo = getKeyInfoByKeyString(key, location);
        		if (keyInfo)
        		{
        			opt.keyCode = keyInfo.keyCode;
        		}

        		var evt = createSysInputEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }
        else
        {
        	var createSysInputEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var evt,
        			options = options || {},
        			event_type = EVENT.getEventTypeByName(event_name),
        			node = elem.handle,
        			cur_doc = node.ownerDocument || node.document,
        			cur_win = cur_doc.defaultView || cur_doc.parentWindow,
        			initDic = {
        				'bubbles': true,
        				'cancelable': undefined,
        				'view': cur_win
        			},
        			initOpt = {}
        		;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}

        		if (event_type != "InputEvent")
        			return null;

        		if (cur_doc.createEvent)
        		{
        			// framework내부에서 input이벤트를 발생 시키고 있음.
        			// 내부에서 해주지 않게 되면 아래 주석 코드를 써야 input발생
        			// 현재 CustromEvent는 아무런 역할을 안하는듯...
        			evt = cur_doc.createEvent('CustomEvent');
        			evt.initCustomEvent('CustomEvent', initOpt.bubbles, initOpt.cancelable);
        			//evt = cur_doc.createEvent('Event');
        			//evt.initEvent('input', initOpt.bubbles, initOpt.cancelable);

        		}
        		else if (cur_doc.createEventObject)
        		{
        			evt = cur_doc.createEventObject();
        			for (var key in initOpt)
        			{
        				if (initOpt.hasOwnProperty(key))
        					evt[key] = initOpt[key];
        			}
        		}

        		return evt;
        	};

        	var dispatchInputEvent = function (elem, name)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {};

        		var evt = createSysInputEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }

        EVENT.dispatchInputEvent = dispatchInputEvent;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
