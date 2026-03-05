<%@ page contentType="text/html; charset=utf-8" %>  
<%@ page language="java"%>

<%@ page import="java.io.*" %>
<%@ page import="java.util.Enumeration" %>

<%@ page import="com.tobesoft.platform.*" %>
<%@ page import="com.tobesoft.platform.data.*" %>


<%

	String default_charset = "euc-kr";
	String outDSnm = "output";
	System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&");
	PlatformRequest  greq = null;
	greq = new PlatformRequest(request, default_charset);

	greq.receiveData();	
	// ZLIB_COMP,LZSS_COMP,XML
	int default_encode_method = PlatformRequest.XML;
	
	VariableList in_vl = greq.getVariableList();
	DatasetList in_dl = greq.getDatasetList();
	
	in_vl = greq.getVariableList();
	
	VariableList out_vl = new VariableList();
	DatasetList  out_dl = new DatasetList();
	
	
	try {

		Dataset test =  in_dl .getDataset("input");
  
 
		Dataset outds1 = new Dataset("output1",default_charset);
 
		outds1.addColumn("column0",ColumnInfo.CY_COLINFO_STRING, 256);
		
		String strNull = null;
		//String str2 = undefined;
		int row = outds1.appendRow();

		outds1.setColumn(row, "column0", "");
		
		row = outds1.appendRow();
		outds1.setColumn(row, "column0", strNull);
		
		row = outds1.appendRow();
		outds1.setColumn(row, "column0", "1");
		row = outds1.appendRow();
		
		Dataset outds2 = new Dataset("output2",default_charset);
		outds2.addColumn("column0",ColumnInfo.CY_COLINFO_STRING, 256);

		//String str2 = undefined;
		int row1 = outds2.appendRow();
		outds2.setColumn(row1, "column0", "1");
		
		row1 = outds2.appendRow();
		outds2.setColumn(row1, "column0", "");
		
		row1 = outds2.appendRow();
		outds2.setColumn(row1, "column0", strNull);
		
		row1 = outds2.appendRow();
		
		System.out.println("-------------------------------");
		
		out_dl.addDataset(outds1);
		out_dl.addDataset(outds2);
		out_vl.addStr("ErrorCode", "0");    // 
		out_vl.addStr("ErrorMsg" , "SUCC2");

	  request.setAttribute("variableList", out_vl);
	  request.setAttribute("datasetList", out_dl);

	  VariableList vl = (VariableList)request.getAttribute("variableList");
	  DatasetList  dl = (DatasetList)request.getAttribute("datasetList");
		
	} catch ( Exception e ) {
		System.out.println(e);
			out_vl.addStr("ErrorCode", "-1");    //
			out_vl.addStr("ErrorMsg" , "FAIL");
	}
	
	new PlatformResponse(response, PlatformRequest.XML).sendData(out_vl, out_dl);;

	//PlatformResponse pRes = new PlatformResponse(response, PlatformRequest.ZLIB_COMP);
	//pRes.sendData(out_vl, out_dl);
	
%>

