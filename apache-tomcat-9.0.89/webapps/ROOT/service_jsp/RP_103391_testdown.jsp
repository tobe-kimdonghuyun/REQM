<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpServlet"%>
<%@ page import="jakarta.servlet.http.HttpServletRequest"%>
<%@ page import="jakarta.servlet.http.HttpServletResponse"%>

<%
    // 응답 상태 코드를 400 (Bad Request)로 설정
    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "잘못된 요청입니다.");
%>
<!DOCTYPE html>
<html>
<head>
    <title>400 Bad Request</title>
</head>
<body>
    <h1>400 Bad Request</h1>
    <p>잘못된 요청입니다. 요청을 다시 확인해 주세요.</p>
</body>
</html>