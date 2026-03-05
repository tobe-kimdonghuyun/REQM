<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import = "java.io.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.util.zip.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.data.datatype.*" %>


<%
	HttpPlatformRequest platformRequest = new HttpPlatformRequest(request, PlatformType.CONTENT_TYPE_XML);
	platformRequest.receiveData();
	PlatformData inPD = platformRequest.getData();
	
	VariableList    inVariableList  = inPD.getVariableList();
	PlatformData data = req.getData();
	
	// Binary 형식으로 데이터 송신
	HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_BINARY);
	res.setData(data);
	
	res.sendData();
%>