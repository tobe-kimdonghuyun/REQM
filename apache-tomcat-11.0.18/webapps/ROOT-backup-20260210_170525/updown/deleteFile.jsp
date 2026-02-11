<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.*" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.io.IOException" %>
<%@ page import="com.nexacro.xapi.data.PlatformData" %>
<%@ page import="com.nexacro.xapi.data.DataSet" %>
<%@ page import="com.nexacro.xapi.data.DataSetList" %>
<%@ page import="com.nexacro.xapi.data.VariableList" %>
<%@ page import="com.nexacro.xapi.tx.PlatformException" %>
<%@ page import="com.nexacro.xapi.tx.PlatformRequest" %>
<%@ page import="com.nexacro.xapi.tx.HttpPlatformRequest" %>
<%@ page import="com.nexacro.xapi.tx.HttpPlatformResponse" %>
<%@ page import="com.nexacro.xapi.tx.PlatformType" %>
<% 
	PlatformData xplatformData = new PlatformData();
	HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);
	
	platformRequest.receiveData();
	PlatformData pData = platformRequest.getData(); 
	
	DataSetList in_dl = new DataSetList();     //input dataset list
	in_dl = pData.getDataSetList();  // dataset list	
	
	DataSet in_ds = in_dl.get("input"); //Dataset
	
	String contextRealPath = request.getSession().getServletContext().getRealPath("/");
	String path = request.getParameter("path");
	String savePath = contextRealPath + path;
	String returnString = "";
	boolean succ = true;
	
	for(int i=0 ; i<in_ds.getRowCount(); i++) 
	{
		//String fileRealNm = in_ds.getString(i, "name");
		String fileRealNm = in_ds.getString(i, "filename");
		//System.out.println("filedelete==>" + fileRealNm);
		
		if (!fileRealNm.equals("")) 
		{
			if ( returnString.length() > 0 ) 
			{
				returnString += "\r\n";
			}
			
			try 
			{
				File f = new File(savePath + File.separator, fileRealNm);
				if (f.exists()) 
				{
					if (f.delete()) 
					{
						returnString += "'" + fileRealNm + "' Delete Success";
					} 
					else 
					{
						//System.out.println("Delete failed");
						succ = false;
						returnString += "'" + fileRealNm + "' Delete failed";
					}
				} 
				else 
				{
					//System.out.println("File not available Or Deleted");
					succ = false;
					returnString += "'" + fileRealNm + "' File not available";
				}
			} 
			catch(Exception e) 
			{
				succ = false;
				returnString += "'" + fileRealNm + "' " + e;
	    	}
		}
	}
	
	//xplatformData.addDataSet(out_ds);
	VariableList varList = xplatformData.getVariableList();
	
	if (succ) 
	{
		varList.add("ErrorCode", "0");
		varList.add("ErrorMsg", "SUCC");
	} 
	else 
	{
		varList.add("ErrorCode", "-1");
		varList.add("ErrorMsg", returnString);
	}
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8"); 
	pRes.setData(xplatformData);
	pRes.sendData();
%>
