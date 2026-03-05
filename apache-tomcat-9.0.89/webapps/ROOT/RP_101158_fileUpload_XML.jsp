<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
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
<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>
<%@ page import="org.apache.commons.logging.*" %>
<%
	String chkType = request.getHeader("Content-Type"); 
	if( chkType == null ) 
		return;

	request.setCharacterEncoding("UTF-8");

	String contextRealPath = request.getSession().getServletContext().getRealPath("");
	//String savePath = contextRealPath+"FileTransfer\\FileTransfer\\FileSample";
	String savePath = contextRealPath+"testuploadfile";
	
	
	int maxSize = 1000 * 1024 * 1024;

	System.out.println("savePath:"+savePath);
	
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	String sRtn = "";
	try
	{
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
		
		Enumeration files = multi.getFileNames();
		
		// MultiPart ���� ���쇰��곕�� MultipartRequest.getParamter �댁�⑺�댁�쇳��
		String Path = multi.getParameter("PATH");
		 
		DataSet ds = new DataSet("ds_uploadresult");
	
		ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));	
		ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("savePath", DataTypes.STRING));

		int j=0;
		while (files.hasMoreElements())
		{	
			
	
			sRtn = sRtn + "Row(" + (j++) + ")";
			String name = (String)files.nextElement();
			
			System.out.println("name:"+name);

			sRtn = sRtn + name + "  ";
			String fileName = multi.getFilesystemName(name);
			
			System.out.println("fileName:"+fileName);
			
			String type = multi.getContentType(name);

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
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "Success" );
	}
	catch (Exception e)
	{	
		System.out.println(e.getMessage());
		DataSet dsError = new DataSet("ds_error");
		dsError.addColumn(new ColumnHeader("ErrorMsg", DataTypes.STRING));	
		dsError.addColumn(new ColumnHeader("ErrorCode", DataTypes.LONG));
	
		dsError.set(dsError.newRow(), "ErrorCode", -1);
		dsError.set(dsError.newRow(), "ErrorMsg", e.getMessage());
		
		resData.addDataSet(dsError);
	}

	HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setCharset("UTF-8");
	res.setData(resData);
	res.sendData();
%>