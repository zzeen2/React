# Babel webpack

## Babel
> babel은 선택이 아니라 필수 였다.
> 최신문법으로 개발을 하면서 코드 생산성을 높이고, 그 문법을 es5로 변환해서 사용하였다. 
> 왜 공백기가 있었기 때문에 과도기 기술이 너무 빠르게 발전해서 런타임 환경에서 완벽하게 제공하지 못했다.

### ES6의 등장
> 자바스크립트는 표준이 2015년 6월 많은 내용이 업데이트 되었다.
> let, const, 화살표 함수 클래스 등등 개발자의 코드의 생산성과 유지보수성이 증가하게 되었다.
> 자바스크립트의 ES6가 많은 내용이 바뀌면서 레거시한 런타임 환경이 초기에는 동작 하지 못했다.
> 즉, 과도기가 있었다.
> 브라우저가 ES6의 기능을 모두 제공하지는 못했고, 점점 발전하게 되었다.
> 모듈 시스템 import export es6의 문법도 완전히 제공하지 못했다.

### 공백기
> es6의 기능을 런타임환경에서 완벽하게 제공하지 못하다보니 es5로 작성된 모듈 혹은 코드를 사용해야했다.
> es6를 es5로 코드를 변환해서 사용을 해야하는데 개발자가 일일히 다 쓰기가 힘들다. 
> es6에서 es5의 변환작업을 babel이 등장하여 해결 ! >> 파일의 내용을 변환해주는 작업을 제공한다.
> 변환작업은 최신문법을 변환한다. 

## Babel 목적
> 트랜스 파일 즉 코드의 문법을 변환하는게 목적이다. 

## Babel 핵심 기능
1. 트랜스파일링 : 옛날문법(es5)을 최신문법(es6)으로 !
2. JSX -> JS
3. 모듈시스템 변환 (import/export -> require/module.exports)

## webpack
> 여러 개의 파일(JS, CSS, 이미지 등)을 하나로 합쳐서 실행 가능한 파일로 만드는 도구 → 번들러

> 번들링의 작업을 맡아서 제공한다. (실행 환경의 디렉터리 구조를 구성해 준다.)
> 프로젝트를 실행할때 실행에 최적화 되어있는 디렉터리 구조로 정의해준다.
> 단순하게 정적인 라우팅을 하던 html css js를 직접 작성한 내용을 런타임 환경에서 실행하던 때와 달리 
> SPA가 등장을 하게 되면서 SPA의 기능을 라이브러리 혹은 프레임워크로 제공하게 되었다.
> 이 SPA에서는 번들링 작업과 트랜스파일 즉 바벨이 사용되었다. 
> 리엑트는 기술을 제공하게 되었고 우리는 기능을 작성만 하면 된다.
> webpack은 여러개의 모듈을 하나로 합치는 `번들링`

## webpack의 동작
> js의 정적 모듈 번들러

1. Entry : 시작 파일 (index.js 등). 번들링을 시작하는 최초의 파일
2. Output : 번들링을 할 때 결과를 내보낼 경로. 결과물이 나올 경로 (dist/bundle.js)
3. Loader : js의 정적 모듈 번들러이지만 이미지 혹은 스타일 등의 다른 파일을 처리할때 사용 (babel)
4. Plugin : 번들링을 하고 번들된 내용을 런타임환경에서 실행할 때 라이브러리 기능이 필요할 때 작성. 즉 추가 기능 (ex: HTML 자동 생성 등)

## 요약
1. webpack : 모듈 의존성 번들링
2. babel : es6문법을 es5문법으로 트랜스파일

### babel 사용
common.js
```js
//index.js
const text = "hello"

module.exports = {text}

// 다른파일

const {text} = require("./index.js")
```

ES6
```js
//index.js 
const text = "hello"

export {text}; // 여러개의 데이터를 객체로 할당해서 내보낼 수 있다. // 모듈의 의존 결합성이 좀더 강력하다.
export default text ; // 하나의 데이터만 내보낼 수 있다. 

//
// from은 변수에 할당해서 사용할 수 있게 하는것. 
import {text} from "./index.js" // 구조분해할당
import text from "./index.js" // 구조분해 아님
```

*** babel은 기본적으로 자바스트립트로 구성 되어있다. ***

```sh
    # 프로젝트를 빌드 혹은 배포환경에 포함되지 않고, 개발환경에서 사용하는 모듈
    # 개발환경에서 필요한 모니터링 혹은 테스트 라이브러리 등은 개발환경에서만 사용하기 때문에 
    # 개발의존성(devDependency)으로 포함시켜야한다.
    npm i --save-dev
    npm i -D @babel/core @babel/cli @babel/preset-env
```

### babel의 환경 설정
> 변환작업을 할때 원하는 형태로 파일을 변환하기 위해서 설정값이 필요하다. 
> .babelrc 실행할때 필요한 설정 파일. babel 속성값을 정의하는 파일

```json
//.babelrc
{
    "presets" : ["@babel/preset-env"] // 최신 js를 es5로 변환해주는 기본 프리셋
}
```

### babel cli 컴파일

1. 문법 변환
```sh
npx babel "변환시킬 경로" --out-file "변환해서 내보낼 경로"
# 예 ) app.js
npx babel app.js --out-file dist/app.js
```

2. 모듈 문법 변환
```sh
npm i -D @babel/plugin-transform-modules-commonjs
```

3. JSX 문법 변환
```sh
npm i -D @babel/preset-react
npx babel Main.jsx --out-file dist/app.js
```

### 여기까지 babel
> 자바스크립트 컴파일러 es6와 jsx 문법같은 자바스크립트문법으로 트랜스 파일을 해서 브라우저같은 런타임 환경에서 동작할 수 있는 문법으로 변환한다.

### webpack의 목적
> 모듈 번들러의 역할. 여러개의 파일 자바스크립트 혹은 css등 파일을 하나의 파일로 번들링해서 합쳐준다.
> 번들링을 하는 이유는 실행의 속도에 최적화 된 실행파일을 빌드하기 위해서

### 모듈과 번들러
> 웹을 구성할때 다양한 작업파일을 많이 만들어서 웹페이지를 제작하는데 
> 설치한 라이브러리 코드 내용을 모두 사용하는게 아닌 불필요한 내용은 제외하고 최소한의 내용으로만 실행환경을 만드는 것
> 웹페이지의 로딩 속도를 개선
- 모듈 : 프로그램을 구성하는 요소
- 번들러 : 의존성이 있는 모듈 즉 요소들의 코드들을 하나의 파일로 합쳐서 만들어 주는 것

*** webpack.config.js ***

## webpack 사용
```sh
    npm i -D webpack webpack-cli 
    npx webpack
```

## 실전 사용 흐름
1. 코드를 `ES6`, `JSX`, `모듈` 단위로 작성
2. Babel이 문법을 변환
3. Webpack이 모든 파일을 하나로 묶음(bundle.js)
4. 브라우저는 변환된 코드를 실행한다.

## 실습코드 정리
### babel 
#### 01 폴더
> babelrc에서 변환 기본설정 프리셋을 설정 
> 변환할 js 파일 생성
> npx babel "변환시킬 경로" --out-file "변환해서 내보낼 경로"
> dist 폴더에 변환된 파일 생성됨

#### 02 폴더
> 플러그인을 사용해 모듈이 포함된 파일 변환 실습

#### 03 폴더
> babelrc 파일에 프리셋 설정 (문법변환, 모듈 변환)
> src 폴더에 Main.jsx 작성(react)
> dist 폴더에 변환된 js파일 생성

### webpack
#### 01 폴더
> webpack 설정 파일에서 패키징 환경 설정하기 (entry, output ..)
> src 폴더의 Js 파일이 번들되어 dist폴더에 생성됨

#### 02 폴더
> webpack 설정 파일에서 패키징 환경 설정하기 (entry,output ..)
> src 폴더의 Js 파일과 css 파일이 번들링되어 dist 폴더에 생성 

#### 03 폴드
- 바벨과 웹팩 사용
> 작업 폴데어 babelrc와 webpack 환경 설정하기
> src 폴더의 app.jsx, index.html, index.js가 번들되고, 변환되어 dist 파일에 생성
> 이때 plugins으로 html 설정을 해줬기 때문에 index.html 파일도 같이 생성됨 ! 