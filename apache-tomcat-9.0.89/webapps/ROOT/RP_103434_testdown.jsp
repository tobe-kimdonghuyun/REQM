<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpServlet"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>
<%@ page import="com.nexacro.java.xapi.data.*"%>
<%@ page import="com.nexacro.java.xapi.tx.*"%>
<!DOCTYPE html>
<html>
<head>
    <%
        // 응답 상태 코드를 200 로 설정
       response.setStatus(500);
       response.setHeader("Cache-Control", "no-store");
       response.setContentType("text/html; charset=UTF-8");
    %>
    <title>400 response</title>
</head>
<body>
     <%
       //body에서 -1리턴
       PlatformData resData = new PlatformData();
       VariableList resVarList = resData.getVariableList();
       resVarList.add("ErrorCode", -1);
       resVarList.add("ErrorMsg", "Invalid Request");

       HttpPlatformResponse res = new HttpPlatformResponse(response);
       res.setData(resData);
       res.sendData();
     %>
    <h1>200</h1>
</body>
</html>