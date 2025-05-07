# react Router
> url이 바뀌어도 새로고침 없이 다른 컴포넌트를 보여주자!

## react router 구성요소
- <BrowserRouter> : 페이지 전체를 감싸서 URL 감지 가능하게
- <Routes> : 여러개의 <Route>를 감싸주는 박스
- <Route path="" element = {<컴포넌트/>}/> : 어떤 경로에 어떤 컴포넌트를 보여줄지 지정
- <Link to = "/경로" > : 새로고침 없이 이동하는 a 태그
- `useNavigate()` : JS 코드로 페이지 이동하기
- `useParams()` : URL에서 :id 같은 파라미터 추출
- <Navigate to="/..." /> : 조건 안 맞으면 강제로 리다이렉트 (ex. 로그인 안했을때)

# useReducer 
> 복잡합 상태를 정리해서 관리

## 기본 개념
- `useState` : 간단한 값 하나를 관리
- `useReducer` : 여러 상태를 묶어서 관리할 수 있게 해줌

### useReducer 구조
- `state` : 현재 상태 객체
- `dispatch()` : 상태를 바꿔달라고 요청하는 함수
- `reducer()` : 상태를 실제로 바꿔주는 함수 ( type 따라 조건 분리)
- `initState` : 초기 상태 