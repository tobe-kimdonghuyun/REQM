<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="java.io.*" %>

<%
    out.clear();
    out = pageContext.pushBody();
    response.reset();
    //response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	response.setContentType("text/xml; charset=UTF-8");
	String fakeJson =
			"{ \"Parameters\": [ " +
			"{ \"id\": \"ErrorCode\", \"type\": \"int\", \"value\": \"-11\" }, " +
			"{ \"id\": \"ErrorMsg\", \"type\": \"string\", \"value\": \"조회 실패1111111\" } " +
			"] }";
			
			
    //String fakeJson = "{ \"ErrorCode\": -1, \"ErrorMsg\": \"FAIL: Received JSON instead of XML\" }";
    try {
        OutputStream os = response.getOutputStream();
        os.write(fakeJson.getBytes("UTF-8"));
        os.flush();
        HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
       	res.setData(new PlatformData()); 
        os.close();
        return;
    } catch (Exception e) {
        e.printStackTrace();
    }
%>