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
    PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    platformRequest.receiveData();  
    PlatformData inPD = platformRequest.getData();
    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();
   PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
    String row_cnt  =  inVariableList.getString("row_cnt");
    String type  =  inVariableList.getString("type");
    String compress =  inVariableList.getString("compress"); 
	String nStr = "0.000004";
      
    if(row_cnt==null || row_cnt.equals(""))
     row_cnt = "3";
            
    if(type==null || row_cnt.equals(""))
     type = "SSV";
    
    if(compress==null || compress.equals(""))
     compress = "false"; 
    
    PlatformData outPD = platformRequest.getData();
    VariableList    outVariableList  = new VariableList();
    DataSetList     outDataSetList   = new DataSetList();
    GZIPOutputStream gzipOut = null;
   
    DataSet outDataSet = null;
	
	//DataSet ds = inDataSetList.get("input1");
    try {
        outDataSet = new DataSet("output");
        outDataSet.addColumn("chk",    DataTypes.STRING, 100);
        outDataSet.addColumn("Column1",		DataTypes.STRING, 100);
        int nRow;
		

        for(int i = 1; i <= 1; i++) {
            nRow = outDataSet.newRow();
            outDataSet.set(nRow, "chk",     "1");
            outDataSet.set(nRow, "Column1", "aaa");
	
        }
        outDataSetList.add(outDataSet);
		outVariableList.add("rtnServerArgs",  "aaaa");
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  "SUCCESS");
        outVariableList.add("strOutputData", "�� Output Vairable�� ��������, ȭ���� ���������� �����ϸ� �˴ϴ�.");
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