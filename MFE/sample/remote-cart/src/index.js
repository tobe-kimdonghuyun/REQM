// 공유 의존성(react 등) 버전 협상이 비동기이기 때문에,
// 진입점에서 바로 React를 import하면 "Shared module is not available for eager consumption" 에러가 난다.
// 그래서 실제 앱 코드는 동적 import로 분리된 bootstrap.js에 둔다.
import('./bootstrap');
