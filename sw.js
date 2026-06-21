// COMAE 서비스워커 — "홈 화면에 추가"(PWA 설치) 조건 충족용 최소 구성.
// 캐시를 적극적으로 하지 않고(항상 최신 페이지를 보여주기 위해) 네트워크로 통과시킨다.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  // 네트워크 우선. 실패(오프라인)할 때만 캐시가 있으면 사용.
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
