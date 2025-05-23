# 생명주기
> 생명주기는 컴포넌트가 생성되고 변화하고 사라지는 일련의 과정을 뜻한다.
> 이런 생명주기를 표현해서 이해를 도운것. 리엑트의 흐름을 쉽게 이해를 돕기 위해서 표현한 것.
> 리엑트로 컴포넌트를 다루는 과정에서 원하는 때에 기능을 호출할 수 있도록 제공.
> 이미 리엑트의 철학적으로 선언적 의미는 기술을 제공해줄테니 기능을 작성해서 사용해라.
> 이미 작성되어있는 기능(리엑트 내부적 동작)에 내가 개발자들이 새로운 기능을 추가하기는 힘들기 때문에
> 생명주기 함수를 제공해서 

## 컴포넌트의 생명 주기
1. 마운트 : 컴포넌트가 최초로 생성될 때 한번만 
    1-1 constructor : 컴포넌트 생성시 최초 한번 호출
    1-2 등등 상태 초기화
    1-3 render : JSX를 변환해서 자바스크립트로 UI를 출력
    1-4 componentDidMount : 컴포넌트가 DOM을 모두 출력 한 이후에 실행되는 메서드 (axios등의 비동기 통신)

2. 업데이트 : props와 state가 변경되면 컴포넌트를 다시 리렌더링 하고 호출된다.
    2-1 상태가 변경되면 상태를 업데이트
    2-2 render : 상태변수가 변경된 내용으로 UI 출력
    2-3 componentDidUpdate : 상태변수가 변경되고 나서 변경된 상태변수를 호출해서 사용할때 

3. 언마운트(componentWillUnmount) : 컴포넌트가 화면 즉 렌더링 하는 요소에서 사라지면 발생

### CRA(create react app) 설치 명령어
```sh
# npx는 실행 npm은 설치
npx create-react-app 리액트 폴더 이름

npx create-react-app zzenapp

# TDD 테스트 코드 작성

# 메모리에 번들링된 내용을 할당해서 3000번 포트에서 페이지를 응답해준다. 개발환경의 포트 하나를 제공해주는것.(like live server)
"start": "react-scripts start",

# 작업 환경에 번들링된 폴더를 생성. 배포를 진행할때 이 파일을 배포 실행에만 최적화
# 정적파일로 번들링됨
"build": "react-scripts build",
```

### CRA의 디렉터리 구조
> 프레임워크의 형태 : 내가 원하는 구조를 정의하는데에 한계가 있다. 
- public : 정적인 파일을 모아두는 폴더 정적인 라우팅 처리를 하는 파일들. 즉 경로가 변화하지않는 파일들 
- src : 소스코드들을 모아두는 폴더, 동적인 파일도 포함 << 동적 라우팅 처리가 가능하다. 소스코드의 보일러플레이트는 여기서 작성
- src/index.js : 진입점의 내용을 가지고있는 스크립트

### CRA로 카운터 만들기

### props와 state
> 부모 컴포넌트의 상태가 변화하면서 자식 컴포넌트는 모두 리렌더링 된다.
> 컴포넌트의 상태가 변화하면 리렌더링 된다.
> 컴포넌트에 전달한 props가 변화해도 리렌더링 된다. ( props 변화했는데 값이 안바뀐다. 부모 컴포넌트도 상태가 변화했다. may key값 )

### 상태를 제어해서 미니 틱텍톡처럼 지뢰찾기

## 실습
> 로그인 폼을 만들어주세요
