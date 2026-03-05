/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		'/',
		{ name: 'paragraph', groups: [ 'align', 'list', 'indent', 'blocks', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Scayt,Form,Button,Checkbox,ImageButton,Radio,HiddenField,TextField,Textarea,Select,Anchor,About,CopyFormatting,RemoveFormat,Styles,Format,ShowBlocks,Maximize,EasyImageUpload,Preview,Smiley,SpecialChar,Language';

	
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'codesnippet,youtube,base64image';
	
	config.removePlugins = 'exportpdf,easyimage,cloudservices';
	
	config.codeSnippet_theme = 'github.min';	//tomorrow-night-blue
	// set allow tag content
	config.allowedContent = true;
	
	config.height = 590;//382;
	config.resize_enabled = false;
	//config.resize_minHeight = 200;
	//config.resize_maxHeight = 696;

	//config.resize_dir = 'none';
};
CKEDITOR.config.font_names="굴림체; 바탕체; 돋움체; 궁서체; Arial ;Arial Black ;Bahnschrift ;Calibri ;Cambria ;Cambria Math ;Candara ;Comic Sans MS ;Consolas ;Constantia ;Corbel ;Courier New ;Ebrima ;Franklin Gothic Medium ;Gabriola ;Gadugi ;Georgia ;HoloLens MDL2 Assets ;Impact ;Ink Free ;Javanese Text ;Leelawadee UI ;Lucida Console ;Lucida Sans Unicode ;Malgun Gothic ;Microsoft Himalaya ;Microsoft JhengHei ;Microsoft New Tai Lue ;Microsoft PhagsPa ;Microsoft Sans Serif ;Microsoft Tai Le ;Microsoft YaHei ;Microsoft Yi Baiti ;MingLiU-ExtB ;Mongolian Baiti ;MS Gothic ;MV Boli ;Myanmar Text ;Nirmala UI ;Palatino Linotype ;Segoe MDL2 Assets ;Segoe Print ;Segoe Script ;Segoe UI ;Segoe UI Historic ;Segoe UI Emoji ;Segoe UI Symbol ;SimSun ;Sitka ;Sylfaen ;Symbol ;Tahoma ;Times New Roman ;Trebuchet MS ;Verdana ;Yu Gothic";
//CKEDITOR.config.font_names="나눔고딕; 맑은고딕; 굴림체; 명조체; 바탕체; 돋움체; 궁서체; Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif";