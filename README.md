# better-than-yesterday

### React Testing Library 주요 API

React Testing Library는 유저입장에서 보는 행위 주도 테스트기반 방식

- render
  - DOM에 컴포넌트를 랜더링하는 함수(인자는 랜더링할 React 컴포넌트)
- screen
  - render 후에 쿼리를 적용할 때 사용됨
  - 단순히 render를 호출한 결과에서 Destructuring 문법으로 원하는 쿼리 함수를 가져올 수 있음
  - 하지만, 사용해야 할 쿼리가 많을수록 복잡해질 가능성이 있기 때문에 이것을 활용하는 것도 방법
- 쿼리함수
  - 페이지에서 요소를 찾기 위해 제공하는 방법
  - 크게 get, find, query가 있음
  - get은 쿼리에 대해 일치하는 노드를 반환, 일치하는 요소가 없으면 오류발생
  - find는 쿼리에 대해 일치하는 노드를 반환, 일치하는 요소가 없으면 null 반환
  - query는 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환, 일치하는 요소가 없으면 오류발생
- fireEvent
  - 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용
  - 하지만 사용자에 입장에서 더 좋은 상호작용을 제공하기 위해 [userEvent](https://testing-library.com/docs/ecosystem-user-event) 사용권장
  - fireEvent 기반으로 작성됐으며, 엘리먼트의 타입에 따라서 클릭했을 때 타입에 따라 더욱 적절한 반응을 보여줌

### testing-library과 jest-dom

- jest는 expect와 matchers의 조합으로 구성
- 다양한 custom matchers는 [custom-matchers](https://github.com/testing-library/jest-dom#custom-matchers)에서 확인가능

### testing library의 Query 사용 우선 순위

구성 요소, 페이지 등)와 상호 작용하는 사용자를 기준으로 많은 사람들의 접근성을 기준으로 우선순위 결정

- [공식문서 권장 우선순위](https://testing-library.com/docs/queries/about/#priority)
