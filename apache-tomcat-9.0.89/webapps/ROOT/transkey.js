/*
 * Transkey
 * (C) 2013. RAONSECURE,Inc. All rights reserved.
 * Version 4.6.13.2
 * 2020-02-19
 */


//config
var transkey_url = '/transkey';
var transkey_surl ='/transkeyServlet';

var useToBe = true;


var tk_useButton = true;
var tk_useTranskey = false;
var tk_useTalkBack = true;
var transkey_isMultiCursor = true;
var transkey_isDraggable = true;
var tk_blankEvent = "onmouseover";
var useCheckTranskey = true;
var transkey_encDelimiter = ',';
var transkey_delimiter='$';
var keyboardLayouts = ["qwerty", "number"];
var useCORS=false;
var tk_origin="";
var use_form_id = false;
//show license config
var showLicense = true; //ture : show | false : not show
var licenseType ="";
var licExpiredDate = "";
var onKeyboard_allocate=false;
//config


//document.write('<script type="text/javascript" src="'+transkey_url+'/Random.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/BigInt.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/Barrett.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/RSA.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/seed.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/TranskeyLibPack_op.js"></script>');

//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/sha1.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/aes-enc.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/hmac-sha1.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/js_hmac-sha1.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/rsa_oaep_files/rsa_oaep-min.js"></script>');

//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/base64.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/ec.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn2.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/prng4.js"></script>');
//
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsa.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsa2.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sec.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/asn1hex-1.1.js"></script>');
//
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sha256.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/sha512.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/ripemd160.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsapem.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rsasign.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/x509.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/core-min.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/genkey.js"></script>');
//document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/rng.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/jsbn/jsbn-min2.js"></script>');

document.write('<script type="text/javascript" src="'+transkey_url+'/typedarray.js"></script>');
document.write('<script type="text/javascript" src="'+transkey_surl+'?op=getToken&'+new Date().getTime()+tk_origin+'"></script>');
document.write('<script type="text/javascript" src="'+transkey_surl+'?op=getInitTime'+tk_origin+'"></script>');

var transkey=[];

var tk=null;

var tk_btn_arr=[];

function initTranskey(){
	try{
		setMaxDigits(131);	
		if(tk==null){
			transkey.objs= new Array();
			tk = new Transkey();
			tk.getPublicKey(transkey_surl);
			
			if(useCheckTranskey){
				if (document.addEventListener) {
				    document.addEventListener("mousedown", checkTransKey, false);
				} else if (document.attachEvent) {
				    document.attachEvent("onmousedown", checkTransKey);
				}
			}
		}

		var inputs = document.getElementsByTagName("input");
		for(var i = 0; i < inputs.length; i++){
			var input = inputs.item(i);
			if(input.getAttribute("data-tk-kbdType")!=null&&transkey[input.id]==null)
				tk.setKeyboard(inputs.item(i), transkey_isMultiCursor, tk_useButton, tk_useTranskey);
		}
	}catch(e){
		console.error("transkey error : "+e.message);
		return false;
	}
	
	return true;


}
