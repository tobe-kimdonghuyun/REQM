<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>


<%
	out.clear();
	out = pageContext.pushBody();

	HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML); 
	httpPlatformRequest.setStreamLogEnabled(true);

	httpPlatformRequest.receiveData();
	 
	PlatformData pData = httpPlatformRequest.getData();
	
	VariableList    outVariableList  = new VariableList();
	
	//System.out.println();
	outVariableList.add("ErrorCode", 100);
    outVariableList.add("ErrorMsg",  "조회성공 error-code 100");
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML);
    platformResponse.setData(pData);
	platformResponse.sendData();	
%>