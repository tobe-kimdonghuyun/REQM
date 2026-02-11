<%@page import="sun.misc.*"%>
<%@page import="java.io.*" %>
<%@page import="java.util.Enumeration"%>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@page import="java.net.URLEncoder"%>
<%@page language="java" contentType="image/png;"%>
<%
System.out.println("-----start MOBILE JSP-----");
	HttpPlatformRequest req  = new HttpPlatformRequest(request);
	req.receiveData();
	PlatformData pdt =  req.getData();

	DataSet dsx = pdt.getDataSet("input");
	BASE64Decoder enc = new BASE64Decoder();
	int nrow = dsx.getRowCount();
	DataSet ds = new DataSet("output");
	ds.addColumn("URL"		, DataTypes.STRING);
	ds.addColumn("ERRCD"	, DataTypes.STRING);

    long fsize = 0;
	for (int i = 0; i < nrow; i++)
	{
		String filename = dsx.getString(i,"FILENAME");
		String content 	= dsx.getString(i,"CONTENT");		
		byte[] b64val 	= enc.decodeBuffer(content);	//base64 디코더를 이용하여 byte 코드로 변환 
	//or
	//	byte[] b64val2 	= dsx.getBlob(i,"CONTENT2");	

		try {
			String sRealPath = request.getSession().getServletContext().getRealPath("/");
			String sPath     = request.getParameter("PATH");
			String serverFileName   = sRealPath + sPath + "/" +filename;		
		//	String serverFileName = "C:/Tomcat7/webapps/np17/upload/aaa.png";

			File savedFile = new File(serverFileName);
			FileOutputStream fos = new FileOutputStream(savedFile);
			fos.write(b64val);
	//or	
	//		fos.write(b64val2);
			fsize = savedFile.length();
			fos.close();

			String sSize = Long.toString(fsize);


			int idx = ds.newRow();
			ds.set(idx, "URL", serverFileName);
			ds.set(idx, "ERRCD", 0);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}

	VariableList vl  = new VariableList();

	vl.add("ErrorCode", 0);
	vl.add("ErrorMsg", "OK");

	DataSetList dl = new DataSetList();
	dl.add(ds);
	PlatformData rdt = new PlatformData();
	rdt.setVariableList(vl);
	rdt.setDataSetList(dl);

	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");

	res.setData(rdt);
	res.sendData();

System.out.println("-----end-----\n"+rdt.saveXml());
%>
