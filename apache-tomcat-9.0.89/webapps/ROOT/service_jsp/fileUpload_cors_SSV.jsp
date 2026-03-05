<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>


<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>

<%@ page import="com.nexacro.xapi.data.*" %>
<%@ page import="com.nexacro.xapi.tx.*" %>

<%
String chkType = request.getHeader("Content-Type");


if( chkType == null )
	return;


response.setHeader("Access-Control-Allow-Headers", "accept, cache-control, content-type, expires, if-modified-since, pragma, x-requested-with");
response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, HEAD") ;
response.setHeader("Access-Control-Max-Age", "3600");
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");	
String strMethod = request.getMethod() ;
if(strMethod.equals("OPTIONS")){
	System.out.println("CORS preflight Detected.");
	return ;   
}

request.setCharacterEncoding("utf-8");
String contextRealPath = request.getSession().getServletContext().getRealPath("./history");
String PATH = request.getParameter("PATH");
String savePath = contextRealPath;

int maxSize = 1500 * 1024 * 1024; // �ִ� ���ε� ���� ũ�� 500MB(�ް�)�� ����

PlatformData resData = new PlatformData();
VariableList resVarList = resData.getVariableList();
int nCnt = 0;

String sMsg = " A ";
try {

	MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
	Enumeration files = multi.getFileNames(); // ���ϸ� ��� ���


	
	System.out.println(savePath);
	sMsg += "B ";
	DataSet ds = new DataSet("Dataset00");
	
	ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
	ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
	
	sMsg += "C ";

	String fileName="";

	while (files.hasMoreElements()) {
		sMsg += "D ";
		String name = (String)files.nextElement();
		fileName = multi.getFilesystemName(name);
		String type = multi.getContentType(name);
		File f = multi.getFile(name);
		
		System.out.println("fileName:"+fileName);
		int row = ds.newRow();
		ds.set(row, "fileName", fileName);
		ds.set(row, "fileType", type);
		
		if (f != null)
		{
			ds.set(row, "fileSize", f.length());
		}		
		sMsg += row +" ";
	}
	
	resData.addDataSet(ds);
	resVarList.add("ErrorCode", 200);
	resVarList.add("ErrorMsg", savePath+"/"+fileName);		
	
	//resVarList.add("ErrorMsg", savePath+"/"+fileName);		
	
	
	
	//resVarList.add("ErrorMsg", fileName);
} catch (Exception e) {
	resVarList.add("ErrorCode", 500);
	resVarList.add("ErrorMsg", sMsg + " " + e);
}

String ret = resData.saveSsv();
 String result = URLEncoder.encode(ret, "UTF-8");

 //String ret = resData.saveXml();
 //String result = URLEncoder.encode(ret, "UTF-8");

 //HttpPlatformResponse res = new HttpPlatformResponse(response); 
 //res.setData(resData); 
 //res.sendData();
%>

<script type="text/javascript">
    var retValue = "";
    
     window.onload = function() {
     	if (window.addEventListener) {  // all browsers except IE before version 9
			window.addEventListener ("message", OnMessage, false);
        }
        else {
            if (window.attachEvent) {   // IE before version 9
				window.attachEvent("onmessage", OnMessage);     // Internet Explorer from version 8
            }
        }
      }
    

    function OnMessage (event) {
            // Check the location of the caller
            // Opera earlier than version 10
        message = '<%= result %>';
        message = event.data + message;
        event.source.postMessage (message, event.origin);

}
</script>
<body>
</body>

	
