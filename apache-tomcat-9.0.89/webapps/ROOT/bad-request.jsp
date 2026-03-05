<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
  // 현재 응답을 400 Bad Request로 설정
  response.setStatus(400);
  response.setHeader("Cache-Control", "no-store");
  response.setContentType("text/html; charset=UTF-8");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>400 Bad Request 샘플</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; color: #333; margin: 40px; }
    .container { max-width: 720px; }
    h1 { color: #d9534f; }
    .desc { margin-top: 12px; line-height: 1.6; }
    .meta { margin-top: 24px; color: #777; font-size: 14px; }
  </style>
  <meta http-equiv="Cache-Control" content="no-store" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <!-- 이 페이지는 항상 HTTP 상태코드 400을 반환합니다. -->
  <!-- 필요 시 response.sendError(400, "메시지")로 대체하여 톰캣 기본 에러 페이지를 사용할 수도 있습니다. -->
  <!-- 예: response.sendError(400, "잘못된 요청입니다."); -->
</head>
<body>
  <div class="container">
    <h1>400 Bad Request</h1>
    <div class="desc">
      잘못된 요청입니다. 요청 파라미터나 형식을 확인해 주세요.
    </div>
    <div class="meta">
      이 페이지는 예시용으로, 응답 상태가 400으로 설정되어 있습니다.
    </div>
  </div>
</body>
</html>


