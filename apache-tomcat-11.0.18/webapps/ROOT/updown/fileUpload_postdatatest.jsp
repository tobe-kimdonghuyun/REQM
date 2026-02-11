<%@ page contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="jakarta.servlet.ServletException"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>

<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>

<%
	request.setCharacterEncoding("UTF-8");

	String contextRealPath	= request.getSession().getServletContext().getRealPath("/");
	String getFolderName	= request.getParameter("filefolder");
	
	//String savePath = csavePathontextRealPath + getFolderName + "\\";
	String savePath = contextRealPath + getFolderName + "\\";
	//System.out.println(savePath);
	
	int maxSize = 1000 * 1024 * 1024;
	
	File extFolder = new File(savePath);
	if(!extFolder.exists())
	{
		extFolder.mkdir();
	}

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	try
	{
		DiskFileItemFactory factory = new DiskFileItemFactory();
		factory.setSizeThreshold(4096);
		factory.setRepository(new File(System.getProperty("java.io.tmpdir")));

		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setHeaderEncoding("utf-8");
		upload.setSizeMax(maxSize);
		upload.setFileSizeMax(maxSize);

		List<FileItem> files = upload.parseRequest(request);
		
		DataSet ds = new DataSet("ds_uploadresult");

		ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
		ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("savePath", DataTypes.STRING));
		
		for (FileItem item : files)
		{
			if (item.isFormField())
			{
				continue;
			}

			String fileName = item.getName();
			String type = item.getContentType();

			if (fileName == null || fileName.equals(""))
			{
				continue;
			}

			File f = new File(savePath, fileName);
			item.write(f);
			item.delete();

			int row = ds.newRow(0);
			ds.set(row, "fileName", fileName);
			ds.set(row, "fileType", type);
			ds.set(row, "savePath", f.getPath());
			ds.set(row, "fileSize", f.length());
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
