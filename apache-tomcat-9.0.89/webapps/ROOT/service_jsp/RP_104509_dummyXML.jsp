<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="java.io.*" %>

<%
    out.clear();
    out = pageContext.pushBody();
	
    response.setContentType("text/xml; charset=UTF-8");
    
 
    String fakeJson = "{ \"ErrorCode\": -1, \"ErrorMsg\": \"FAIL: Received JSON instead of XML\" }";
    // String fakeJson ="{\"Parameters\":[{\"id\":\"ErrorCode\",\"type\":\"int\",\"value\":\"-1\"}," +
     //         "{\"id\":\"ErrorMsg\",\"type\":\"string\",\"value\":\"FAIL: Received JSON instead of XML\"}]," +
    //          "\"version\":\"1.0\"}"; 
    try {
        
        OutputStream os = response.getOutputStream();
        os.write(fakeJson.getBytes("UTF-8"));
        os.flush();
        
       
        HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_JSON, "UTF-8");
        res.setData(new PlatformData()); 

        os.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
%>