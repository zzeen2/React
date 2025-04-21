# Babel과 Webpack

## Babel
> 최신 문법을 옛날 브라우저에서도 돌아가게 변환해주는 도구

### 역할
- 우리가 쓰는 최신 JS(let, const arrow function, class, JSX, async/await)는 옛날 브라우저에서 지원이 안됨
- Babel이 이 코드를 ES5로 바꿔줘서 옛날브라우저에서도 실행되게 해줌

#### ES6 문법
- `let`, `const`

- 화살표 함수 `() => { }`

- 구조 분해 할당 `const { name } = props`

- 템플릿 리터럴 `Hello ${name}`

- 클래스 문법 (`class App extends React.Component`)

- 모듈 문법 (`import`, `export`)

- JSX (React에서 사용하는 HTML 비슷한 문법)

### react에서 왜 중요할까?
```js
// JSX 문법(<div>Hello</div>)은 브라우저가 이해하지 못함 -> babel이 이거를 js코드로 바꿔줌

// JSX
const App = () => <h1>Hello</h1>;

// Babel 변환 후
const App = () => React.createElement('h1',null,'Hello')

```
## Webpack
> 여러 파일(HTML, CSS, JS, 이미지 등)을 하나로 묶어주는 도구 (번들러)

### 역할
- React 프로젝트에는 많은 파일이 생긴다
- 이 파일들을 다 연결해서 하나의 번들 파일로 합쳐서 브라우저에서 실행할 수 있게 해준다.

### react에서 왜 중요할까?
- JSX, SCSS, 이미지 등을 다룰 때 Webpack이 없으면 하나하나 수동으로 처리해아한다.
- webpack은 babel도 같이 사용할 수 있도록 설정할 수 있음

## SPA 와 MPA

### MPA (Multi Page Application)
> 전통적인 웹사이트 방식 (ex. 네이버, 다음 등등)

> 동작방식: 사용자 요청마다 서버가 새로운 HTML 페이지를 응답해준다. 페이지 이동 시 전체 새로고침이 발생하고, 새로 불러온 HTML을 브라우저가 다시 렌더링 한다.
```bash
/index.html   → 홈페이지
/about.html   → 회사 소개 페이지
/contact.html → 연락처 페이지

* 페이지가 바뀔때마다 전체 새로고침되어 느리다. UI 유지가 어렵고, 페이지간 상태 공유가 어렵다. 페이지 끊김이 있다.
```
### SPA (Single Page Application)
> 한 페이지에서 필요한 부분만 바꿔주는 형식(React, Vue, Angular 등 최신 프론트엔드 프레임워크의 기본구조)

> 동작 방식: 초기 한번만 index.html을 로딩 -> js가 브라우저에서 동작해서 필요한 데이터만 받아와서 DOM 일부만 동적으로 업데이트 -> 주소만 바뀌고 전체 새로고침 없이 화면이 전환됨

```jsx
// 예시
// 1. 사용자가 /about으로 이동
// 2. 브라우저는 서버에 새 페이지를 요청하지 않음
// 3. React앱이 js코드로 /about 컴포넌트를 화면에 보여줌

<Route path="/about" element={<About />} />
```
- 빠른 화면 전환, 서버와 통신은 AJAX 또는 fetch, axios등으로 데이터만 가져옴