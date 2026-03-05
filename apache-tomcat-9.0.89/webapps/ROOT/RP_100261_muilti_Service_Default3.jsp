<%@ page contentType="text/html; charset=euc-kr" %><%@ 
page language="java"%><%@ 
page import = "java.io.*" %><%@
page import = "java.util.*" %><%@
page import = "java.util.zip.*" %><%@ 
page import="com.nexacro.java.xapi.tx.*" %><%@ 
page import="com.nexacro.java.xapi.data.*" %><%@ 
page import="com.nexacro.java.xapi.data.datatype.*" %>
<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%
 out.clear();       
 	response.setHeader("X-CSRF-TOKEN","testHeaderToken");

    String strCharset = "utf-8";    
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);
    platformRequest.receiveData();  
    
    PlatformData inPD = platformRequest.getData();
    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();
   PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_SSV, strCharset);

 
    
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    GZIPOutputStream gzipOut = null;
   
    DataSet outDataSet = null;
    DataSet outDataSet1 = null;
	//DataSet ds = inDataSetList.get("input1");
    try {
        outDataSet = new DataSet("output1");
        outDataSet.addColumn("Column0",    DataTypes.STRING, 100);
  		
        int nRow;
		String strNull = null;
       
        
		for(int  i = 0 ; i< 10 ; i++)
		{
			 nRow = outDataSet.newRow();
			if(i == 0)
				outDataSet.set(nRow, "Column0",     strNull);
			else
				outDataSet.set(nRow, "Column0",     i);
		}
		 outDataSetList.add(outDataSet);
		outDataSet1 = new DataSet("output2");
		outDataSet1.addColumn("Column0",    DataTypes.STRING, 100);
        int nRow1;
      
            
        for(int  i = 0 ; i < 10 ; i++)
		{
        	  nRow1 = outDataSet1.newRow();
			if(i == 1)
				outDataSet1.set(nRow1, "Column0",     strNull);
			else
				outDataSet1.set(nRow1, "Column0",     i);
		}
        
        outDataSetList.add(outDataSet1);
		outVariableList.add("rtnServerArgs",  "aaaa");
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "SUCCESS");
        outVariableList.add("strOutputData", "11");
		outVariableList.add("rtnServerArgs111",  "bbbb");
    } catch(Exception e) {
        outVariableList.add("ErrorCode", -1);
        outVariableList.add("ErrorMsg",  e.toString()); 
    } finally {
        outPD.setDataSetList(outDataSetList);
        outPD.setVariableList(outVariableList);
     
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }	

%>