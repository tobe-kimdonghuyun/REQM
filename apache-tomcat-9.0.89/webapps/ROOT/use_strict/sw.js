// sw.js - 모든 JS 요청을 가로채서 "use strict"; 를 주입하는 서비스 워커
self.addEventListener('install', (event) => {
    self.skipWaiting(); // 즉시 활성화
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // 즉시 제어권 확보
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const request = event.request;

    // .js 파일 또는 .html 파일 요청 처리
    if (url.pathname.endsWith('.js') || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (!response.ok) return response;

                    const contentType = response.headers.get('content-type');
                    
                    if (contentType && contentType.includes('javascript')) {
                        return response.text().then(text => {
                            if (text.trim().startsWith('"use strict"') || text.trim().startsWith("'use strict'")) {
                                return new Response(text, { headers: response.headers });
                            }
                            return new Response(`"use strict";\n\n${text}`, { headers: response.headers });
                        });
                    } else if (contentType && contentType.includes('html')) {
                        return response.text().then(text => {
                            // <script> 태그 바로 뒤에 "use strict"; 삽입 (매우 단순한 방식)
                            // 실제로는 정규표현식이나 파서를 써야 정확하지만, 
                            // 여기서는 <script> 문자열을 찾아 치환합니다.
                            const injectedText = text.replace(/<script>/gi, '<script>"use strict"; ');
                            return new Response(injectedText, { headers: response.headers });
                        });
                    }

                    return response;
                })
                .catch(() => fetch(request))
        );
    }
});
