<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>


<%
	out.clear();
	out = pageContext.pushBody();

	HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML); 
	httpPlatformRequest.setStreamLogEnabled(true);

	httpPlatformRequest.receiveData();
	 
	PlatformData pData = httpPlatformRequest.getData();
	VariableList    outVariableList  = new VariableList();
	
	outVariableList.add("errorCode", -1);
    outVariableList.add("errorMsg",  "조회 실패---123");
	//System.out.println();
	
    PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_XML);
    platformResponse.setData(pData);
	platformResponse.sendData();	
%>