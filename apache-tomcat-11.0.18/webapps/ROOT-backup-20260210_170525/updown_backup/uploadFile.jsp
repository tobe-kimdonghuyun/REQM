<%
/*
Copyright [2013] [EcoSystem of TOBESOFT]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
%>
 
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>

<%@ page import="jakarta.servlet.http.HttpServlet"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>
<%@ page import="jakarta.servlet.ServletException"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Iterator"%>

<%@ page import="com.nexacro.xapi.data.PlatformData" %>
<%@ page import="com.nexacro.xapi.data.ColumnHeader" %>
<%@ page import="com.nexacro.xapi.data.DataTypes" %>
<%@ page import="com.nexacro.xapi.data.DataSet" %>
<%@ page import="com.nexacro.xapi.data.DataSetList" %>
<%@ page import="com.nexacro.xapi.data.VariableList" %>
<%@ page import="com.nexacro.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro.xapi.tx.PlatformRequest" %>
<%@ page import="com.nexacro.xapi.tx.HttpPlatformRequest" %>
<%@ page import="com.nexacro.xapi.tx.HttpPlatformResponse" %>
<%@ page import="com.nexacro.xapi.tx.PlatformType" %>

<%
	//Check that we have a file upload request
	boolean isMultipart = ServletFileUpload.isMultipartContent(request);
	
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	if (isMultipart)
	{
		String contextRealPath = request.getSession().getServletContext().getRealPath("/");
		String path = request.getParameter("path");
		String savePath = contextRealPath + path;
		//String returnMsg = "";
	
		// Create a factory for disk-based file items
		DiskFileItemFactory factory = new DiskFileItemFactory();
		
		// Sets the size threshold beyond which files are written directly to disk
		factory.setSizeThreshold(4096);
		
		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);
		
		// Specifies the character encoding to be used when reading the headers of individual part
		upload.setHeaderEncoding("utf-8");
	
		// Set overall request size constraint
		upload.setSizeMax(500 * 1024 * 1024); 
		
		// Sets the maximum allowed size of a single uploaded file
		upload.setFileSizeMax(500 * 1024 * 1024);
		
		try 
		{
			File filePath = new File(savePath); 
			if (!filePath.exists()) 
			{
				filePath.mkdirs();
			}
	
			// Sets the directory used to temporarily store files that are larger than the configured size threshold
			factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
			//System.out.println("---> getRepository:"+factory.getRepository());
	
			// Parse the request
			List items = upload.parseRequest(request);
			Iterator iter = items.iterator();
			
			
			DataSet ds = new DataSet("ds_output");
			ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
			
			
			// Parse the request
			while (iter.hasNext()) 
			{
				FileItem item = (FileItem) iter.next();
				
				// Process a file upload
				if (!item.isFormField()) 
				{
					// filename on the client
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					long fileSize = item.getSize();
					//System.out.println(">>>>> fileName:"+fileName + "   fieldName:" + fieldName + "   fileSize:" + fileSize);
					
					if (fileName == null || fileName.equals(""))
					{
						continue;
					}
					else
					{
						fileName = FilenameUtils.getName(fileName);
				    	//System.out.println("--->fileName:"+fileName);
				        
						//File uploadedFile = new File(filePath + File.separator + fileName);
						File uploadedFile = new File(filePath + File.separator, fileName);
						//System.out.println(uploadedFile.getAbsolutePath());
						
						item.write(uploadedFile);
						item.delete(); 
						
						int row = ds.newRow();
						ds.set(row, "filename", fileName);
						ds.set(row, "filesize", fileSize);
						
						//if (returnMsg.length() > 0) 
						//{
						//	returnMsg += "\r\n";
						//}
						//returnMsg += fileName;
					}
				}
			}
			
			resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");
			//resVarList.add("ErrorMsg", returnMsg);
		} 
		catch (FileUploadException e) 
		{
			resVarList.add("ErrorCode", -1);
			//resVarList.add("ErrorMsg", returnMsg + " " + e);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		} 
		catch (Exception e) 
		{
			resVarList.add("ErrorCode", -1);
			//resVarList.add("ErrorMsg", returnMsg + " " + e);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		}
	}
	else
	{
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", "Invalid Request");
	}
	
	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();

%>

