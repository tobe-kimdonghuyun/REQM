<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<html>
<head>
<script type="text/javascript">
	
</script>
</head>
<body>
<script>
<%
	String sReq = request.getParameter("bSeq");
	
%>
	var strBNo = <%=sReq%>;
	if( strBNo!=null && !( String(strBNo) == "null" ) )
		sessionStorage.setItem("strBNo", strBNo);
	
	location.replace("./index.html");
</script>
</body>
</html>

