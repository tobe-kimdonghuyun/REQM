<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.time.LocalDateTime, java.time.format.DateTimeFormatter" %>
<%
    // CORS 허용 (로컬 개발 환경)
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
        response.setStatus(204);
        return;
    }

    String scenario  = request.getParameter("scenario");
    String delayStr  = request.getParameter("delay");
    String timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    String path      = request.getRequestURI();

    if (scenario == null) scenario = "success";

    // 응답 지연 시뮬레이션
    if (delayStr != null) {
        try {
            long delay = Math.min(Long.parseLong(delayStr), 5000);
            Thread.sleep(delay);
        } catch (Exception ignored) {}
    }

    switch (scenario) {

        // ── 200 성공 ──────────────────────────────────────────────────────────
        case "success":
            response.setStatus(200);
            out.print("{");
            out.print("\"success\": true,");
            out.print("\"errorCode\": null,");
            out.print("\"errorMessage\": null,");
            out.print("\"data\": {");
            out.print("  \"userId\": 1,");
            out.print("  \"userName\": \"홍길동\",");
            out.print("  \"email\": \"hong@example.com\",");
            out.print("  \"role\": \"ADMIN\",");
            out.print("  \"createdAt\": \"" + timestamp + "\"");
            out.print("},");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 400 Bad Request ───────────────────────────────────────────────────
        case "bad_request":
            response.setStatus(400);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_400\",");
            out.print("\"errorMessage\": \"잘못된 요청입니다.\",");
            out.print("\"detail\": \"필수 파라미터 'userId' 가 누락되었습니다.\",");
            out.print("\"fields\": [{\"field\": \"userId\", \"message\": \"필수 입력값입니다.\"}],");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 401 Unauthorized ──────────────────────────────────────────────────
        case "unauthorized":
            response.setStatus(401);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_401\",");
            out.print("\"errorMessage\": \"인증이 필요합니다.\",");
            out.print("\"detail\": \"Authorization 헤더가 없거나 토큰이 만료되었습니다.\",");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 403 Forbidden ─────────────────────────────────────────────────────
        case "forbidden":
            response.setStatus(403);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_403\",");
            out.print("\"errorMessage\": \"접근 권한이 없습니다.\",");
            out.print("\"detail\": \"해당 리소스에 접근할 수 있는 권한이 없습니다. 관리자에게 문의하세요.\",");
            out.print("\"requiredRole\": \"SUPER_ADMIN\",");
            out.print("\"currentRole\": \"USER\",");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 404 Not Found ─────────────────────────────────────────────────────
        case "not_found":
            response.setStatus(404);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_404\",");
            out.print("\"errorMessage\": \"요청한 리소스를 찾을 수 없습니다.\",");
            out.print("\"detail\": \"userId=9999 에 해당하는 사용자가 존재하지 않습니다.\",");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 422 Validation Error ──────────────────────────────────────────────
        case "validation":
            response.setStatus(422);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_422\",");
            out.print("\"errorMessage\": \"입력값 유효성 검사에 실패했습니다.\",");
            out.print("\"detail\": \"요청 본문의 데이터 형식이 올바르지 않습니다.\",");
            out.print("\"fields\": [");
            out.print("  {\"field\": \"email\", \"message\": \"이메일 형식이 올바르지 않습니다.\", \"value\": \"invalid-email\"},");
            out.print("  {\"field\": \"age\",   \"message\": \"나이는 1 이상 150 이하여야 합니다.\", \"value\": \"-5\"}");
            out.print("],");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 500 Internal Server Error ─────────────────────────────────────────
        case "server_error":
            response.setStatus(500);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_500\",");
            out.print("\"errorMessage\": \"서버 내부 오류가 발생했습니다.\",");
            out.print("\"detail\": \"NullPointerException at UserService.java:142\",");
            out.print("\"traceId\": \"abc-1234-xyz\",");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        // ── 503 Service Unavailable ───────────────────────────────────────────
        case "service_unavailable":
            response.setStatus(503);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_503\",");
            out.print("\"errorMessage\": \"서비스를 일시적으로 사용할 수 없습니다.\",");
            out.print("\"detail\": \"데이터베이스 연결에 실패했습니다. 잠시 후 다시 시도해주세요.\",");
            out.print("\"retryAfter\": 30,");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;

        default:
            response.setStatus(400);
            out.print("{");
            out.print("\"success\": false,");
            out.print("\"errorCode\": \"ERR_UNKNOWN\",");
            out.print("\"errorMessage\": \"알 수 없는 시나리오입니다.\",");
            out.print("\"detail\": \"scenario 파라미터를 확인하세요. 허용값: success, bad_request, unauthorized, forbidden, not_found, validation, server_error, service_unavailable\",");
            out.print("\"timestamp\": \"" + timestamp + "\",");
            out.print("\"path\": \"" + path + "\"");
            out.print("}");
            break;
    }
%>
