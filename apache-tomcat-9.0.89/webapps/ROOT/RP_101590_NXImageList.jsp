<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page import = "java.net.URLDecoder.*" %>
<%@ page import = "java.net.URLEncoder.*" %>
<%@ page import="org.apache.commons.logging.*" %>
<%@ page language="java" import="java.util.*,java.io.*" %>
<%@ page language="java" import="java.util.*,java.net.*" %>
<%@ page contentType="text/xml; charset=utf-8" %>
<%
	// PlatformData ����
	PlatformData o_xpData = new PlatformData();

	int nErrorCode = 0;
	String strErrorMsg = "START";
	String aa = request.getParameter("arg");
//	String args = java.net.URLDecoder.decode(aa,"utf-8");

 
	try
	{
      DataSet RDS = new DataSet("output");
    	RDS.addColumn("img_file", DataTypes.STRING,255);	
    	RDS.addColumn("img_size", DataTypes.INT,255);	
    	RDS.addColumn("img", DataTypes.BLOB,255);	
    	for (int i = 1 ; i <= 3 ; i++ )
    	{
    	  
    
    	  String search;
    		HttpSession ses = request.getSession(true);
    		if(request.getParameter("url") == null)
    			search = "http://172.10.12.45:9090/";
    		else
    			search =request.getParameter("url");
    	
    		InputStream resultInStream = null;
    		
    		int Row = 0;
    	
    		Row = RDS.newRow();
    	
    		try
    		 {
    			//URL url = new URL(search + "date_" + i + ".jpg");
    			URL url = new URL(search + "RP_101590_MiImageView.jpg");
    			//System.out.println("url 1---- " + url);

    			resultInStream = url.openStream();
    			
    			//System.out.println("resultInStream ---- " + resultInStream);
    			
    			byte[] buffer = new byte[4096];
    			int bytes_read;
    			ByteArrayOutputStream ImageData = new ByteArrayOutputStream();
    	
    			while((bytes_read=resultInStream.read(buffer)) != -1)
    			{
    			    ImageData.write(buffer,0,bytes_read);
    			}
    	

    			RDS.set(Row,"img_file", search);
    			RDS.set(Row,"img_size", ImageData.toByteArray().length);
    			RDS.set(Row,"img", ImageData.toByteArray());
    System.out.println("RDS ---- " + RDS.saveXml());
    
    			resultInStream.close();
    	
    			  
    	 	} catch (Exception e) {
    	 	}
    		finally{ 
    			try {  
    				resultInStream.close();  
    			}
    			catch (Exception e) 
    			{
    			}
    		}
    	}
  	// DataSet�� PlatformData�� �߰�
		o_xpData.addDataSet(RDS);

		nErrorCode = 0;
		strErrorMsg = "SUCC";//args;
	} 
	catch (Exception e) {
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}

	// VariableList
	VariableList varList = o_xpData.getVariableList();

	// VariableList
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg", strErrorMsg);
	varList.add("EncodeMsg", aa);

	// HttpServletResponse
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "euc-kr");
	pRes.setData(o_xpData);

	pRes.sendData();
%>