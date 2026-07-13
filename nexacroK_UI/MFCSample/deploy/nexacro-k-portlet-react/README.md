# 🧩 nexacro-k-portlet-react


MFE sample project 입니다.


1) nexacro-k-portlet 은 nexacro k mdi 프로젝트이며 특별한 것은 없습니다.

2) nexacro에 대한 MFE 실행 방식의 변경점을 알리기 위한 것으로, MFE는 OSS frontend, 다른 제품과 iframe 이 아닌 방식으로
   결합하여 쓸 수 있고, div를 container 화 하여, 내부에 nexacro 요소를 결합할 수 있습니다.(mainframe,form)
   - style 해싱을 통해 nexacro conents자체의 style 격리가 보장
   - esm 방식으로 nexacro module의 격리
   - 하나의 docunemt에 multi project load
   - form 구성 요소를 별도의 섹션 기능으로 운용할 수 있음 

3) nexacro-k-portlet-react 은 기본적인 reactApp 프로젝트 입니다.

4) nexacro-k-portlet-react 디렉토리의 public 경로로 generator 결과를 추가합니다. (generator.js)

5) index.html에 해당 프로젝트 산출물인 index.mjs를 추가하여 nexacro를 load 합니다.

   <script type="module" src="./public/nexacro-k-portlet/nexacro.js"></script>
   <script type="module" src="./public/nexacro-k-portlet/app.js"></script>

   * multi project load를 위해서는 역시 public 경로에 해당 project generate 결과를 추가하고 index.html에 해당 project의 index.mjs를 load

   <script type="module" src="./public/nexacro-k-portlet/nexacro.js"></script>
   <script type="module" src="./public/nexacro-k-portlet/app.js"></script>

   <script type="module" src="./public/GroupAutoSelector/nexacro.js"></script>
   <script type="module" src="./public/GroupAutoSelector/app.js"></script>

6) nexacro에 form 또는 application을 load할 container Component를 제작

   Portlet.jsx

7) appkey 와 fdl 경로등을 관리 하기 위한 상태관리 기능

   store.js

8) layout section이나 drga&drop 기능은 표준 style 이나, react의 추가 module 의 기능 구현이므로, nexacro와는 상관없습니다.


* 핵심은 Portlet.jsx 의 render 함수를 통해 div를 만드는 것입니다.
  - container의 id 필수 지정  
    - data-appkey 에 로드할 구분 프로젝트 appkey 값 지정
  - data-fdl에 로드할 rootform 경로 지정
  - 경로지정을 하지 않으면 application loading 방식으로 mainframe이 존재하는 구조가 됩니다.(하나의 document에 하나만 존재)

<div id={contentId} className={`portlet-content `} data-fdl={boxData.fdl}  data-appkey={boxData.appkey}>


9) 버튼으로 레이아웃을 바꾸게 되면 dom이 유지가 되지만, 드래그앤드롭을 하거나 Custom 버튼의 경우 contents를 다시 로드하고 있습니다.
   Custom 은 App.jsx에서 Dom의 구성이 분기되기 때문에 의도한 동작이나, 드래그앤드롭은 개선의 여지가 있습니다.(component가 unmount되지 않고 유지되어야 함)

