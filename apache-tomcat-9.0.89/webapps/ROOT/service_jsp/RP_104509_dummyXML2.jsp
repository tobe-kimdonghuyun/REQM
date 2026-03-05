<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="java.io.*" %>

<%
    out.clear();
    out = pageContext.pushBody();
	
   // response.setContentType("text/xml; charset=UTF-8");
    
    //
    
   //String fakeJson = "{ \"ErrorCode\": -1, \"ErrorMsg\": \"FAIL: Received JSON instead of XML\" }";
    //  String fakeJson ="{\"Parameters\":[{\"id\":\"ErrorCode\",\"type\":\"int\",\"value\":\"-1\"}," +
   //           "{\"id\":\"ErrorMsg\",\"type\":\"string\",\"value\":\"FAIL: Received JSON instead of XML\"}]," +
    //          "\"version\":\"1.0\"}";
    try {
        HttpPlatformRequest req = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML);
        //OutputStream os = response.getOutputStream();

        HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_JSON, "UTF-8");   
        req.receiveData();
        PlatformData outPD = new PlatformData();

        VariableList    outVariableList  = new VariableList();
        DataSetList     outDataSetList   = new DataSetList();
       
        outVariableList.add("ErrorCode", -1);
        outVariableList.add("ErrorMsg",  "FAIL: Received JSON instead of XML");

        outPD.setVariableList(outVariableList);
        res.setData(outPD); 
        res.sendData();
        //os.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
%>