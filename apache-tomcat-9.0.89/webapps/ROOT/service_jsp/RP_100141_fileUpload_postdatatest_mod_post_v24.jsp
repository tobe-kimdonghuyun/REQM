<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>

<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="com.nexacro.java.xapi.data.*"%>
<%@ page import="com.nexacro.java.xapi.tx.*"%>

<%
	String chkType = request.getHeader("Content-Type");
	if( chkType == null )
		return;

	request.setCharacterEncoding("UTF-8");

	String contextRealPath = request.getSession().getServletContext().getRealPath("/");
	System.out.println("contextRealPath :" + contextRealPath);

	String savePath = contextRealPath + "file\\";
	int maxSize = 1000 * 1024 * 1024;

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	String sRtn = "";
	try
	{
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());

		Enumeration files = multi.getFileNames();

		// MultiPart 占쏙옙占쏙옙 占쏙옙占쎌�곤옙占쎄�占쏙옙 MultipartRequest.getParamter 占쎈��占썩�븝옙��占쎌�놂옙占�
		String Path = multi.getParameter("PATH");
		System.out.println("Path :" + Path);

		String filepath1 = multi.getParameter("filepath");
		String filename = multi.getParameter("filename");
		System.out.println("filepath1 :" + filepath1);
		System.out.println("filename :" + filename);

		DataSet ds = new DataSet("ds_uploadresult");

		ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("savePath", DataTypes.STRING));

		int j=0;
		while (files.hasMoreElements())
		{
			System.out.println("j count:" + j);
			sRtn = sRtn + "Row(" + (j++) + ")";
			String name = (String)files.nextElement();

			sRtn = sRtn + name + "  ";
			String fileName = multi.getFilesystemName(name);
			String type = multi.getContentType(name);
			System.out.println("fileName :" + fileName);
			System.out.println("type :" + type);

			File f = multi.getFile(name);
			int row = ds.newRow();
			ds.set(row, "fileName", fileName);
			ds.set(row, "fileType", type);
			if (Path != null)
			{
				ds.set(row, "savePath", Path);
			}

			if (f != null)
			{
				ds.set(row, "fileSize", f.length());
			}
		}

		resData.addDataSet(ds);
		int nErrorCode = -1;
		resVarList.add("ErrorCode", nErrorCode);
		resVarList.add("ErrorMsg", "議고���깃났 -1 return" );
	}
	catch (Exception e)
	{
		System.out.println(e.getMessage());
		DataSet dsError = new DataSet("ds_error");
		dsError.addColumn(new ColumnHeader("ErrorMsg", DataTypes.STRING));
		dsError.addColumn(new ColumnHeader("ErrorCode", DataTypes.LONG));
		int nErrorCode = -1;
		dsError.set(dsError.newRow(), "ErrorCode", nErrorCode);
		dsError.set(dsError.newRow(), "ErrorMsg", e.getMessage());

		resData.addDataSet(dsError);
	}
	
	response.setHeader("Access-Control-Allow-origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    response.setHeader("Access-Control-Allow-Credentials", "true");
	
	String ret = resData.saveXml();
	String result = null;
	result = URLEncoder.encode(ret, "UTF-8");

	//HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	//res.setContentType(PlatformType.CONTENT_TYPE_XML);
	//res.setCharset("UTF-8");
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
			/*
        if ('domain' in event) {
            if (event.domain != "http://172.10.12.33:8080") {
                return;
            }
        }
            // Firefox, Safari, Google Chrome, Internet Explorer from version 8 and Opera from version 10
        if ('origin' in event) {
            if (event.origin != "http://172.10.12.33:8080") {
                return;
            }
        }
		*/
        
        message = '<%= result %>';
        message = event.data + message;
        event.source.postMessage (message, event.origin);

}
</script>
<body>
</body>