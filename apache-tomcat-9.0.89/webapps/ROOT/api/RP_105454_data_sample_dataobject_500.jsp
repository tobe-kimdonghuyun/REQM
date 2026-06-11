<%@ page contentType="application/json; charset=UTF-8" %>
<%

response.setStatus(500);

String json =
"{"
+ "\"code\":-555,"
+ "\"message\":\"승인 완료된 차량운행일지내역이 존재하여 추가/수정이 불가합니다.\","
+ "\"errormsg\":\"\""
+ "}";

out.print(json);

%>