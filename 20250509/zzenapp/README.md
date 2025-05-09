# redux thunk
> redux는 순수함수를 사용하는 철학을 가지고 있어서 
> redux에서 비동기 로직을 직접 작성하지 않고 미들웨어로 외부로 나눠서 작성해서 사용한다. 
> 미들웨어 추가를 thunk를 하게 되면 api로직에 대한 함수 로직은 thunk로 미들웨어 추가가 가능하다.

## redux의 문제점
> action 객체를 전달한다. 
> 비동기 로직을 작성할 때 

```js
dispatch({})
const reducer = () => {
    switch () {
        case :
        return
    }
}

dispatch() // thunk 미들웨어로 추가하면
// dispatch에 전달한 매개변수의 타입에 따라 리듀서 호출인지 액션함수 호출인지
const dispatch =(action) => {
    if(typeof action === "object"){

    }else if(typeof action === "function"){
        action(dispatch, action)
    }
}

// 액션 생성자
const actionFn = (id) => (dispatch, getState)=> { // id : 1
    // getState 현재 상태값
    // dispatch thunk를 미들웨어로 추가하기 이전에 사용하던 dispatch
    // 비동기 처리 로직 
    const data = axios({url : `http://loaclhost:4000/board/${id}`})
    // 상태 전환
    dispatch({type : "", payload : data})
}

// 위에꺼 쉽게 표현한거. 반환값이 함수인것임 ! 
Function actionFn() { 
    return (dispatch, getState)=> {
    // getState 현재 상태값
    // dispatch thunk를 미들웨어로 추가하기 이전에 사용하던 dispatch
    // 비동기 처리 로직 
    const data = axios({url : `http://loaclhost:4000/board/${}`})
    // 상태 전환
    dispatch({type : "", payload : data})
    }
}

// 잠시 지연하는 용도의 래핑
dispatch(actionFn(1))
```

### redux thunk 등장
> redux thunk는 javascript프로그래밍 개념
> thunk는 어떤 로직 즉 표현을 지연한다. 로직을 나중에 실행시키기 위해서
> 함수로 래핑해서 지연시키는 것.

### thunk의 동작
> dispatch에 전달된 매개변수가 함수이면 함수를 실행
> 실행된 함수에 매개변수로 dispatch, getState 두가지를 인자로 전달한다.

```js
// thunk를 사용하기 이전
dispatch({type : "LOGIN"})

// 액션 생성자
dispatch((dispatch, getState)=> {
    // 비동기 로직 처리
    dispatch({type : "LOGIN"})
})

// 상태의 변화를 잠시 뒤로 미룬다. 비동기 로직 처리한 뒤에 실행하기 위해서 지연시키는 것.
// 디스패처 => 액션 생성자 
```

### thunk의 목적
1. api의 로직을 비동기적으로 호출한 이후에 스토어 업데이트 
2. 액션 생성자 함수를 미들웨어로 추가해서 실행
3. 비동기 로직과 동기 로직의 구분을 지어서 관리할 수 있다.

### thunk 문법
```js
// npm i redux-thunk 

// store.js
import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"

// thunk 
// 내부 로직에 미들웨어를 추가하기 위해서 스토어 생성할때 매개변수로 미들웨어를 전달해준다. 
const store = createStore(reducer, applyMiddleware(thunk))

// 중간에 dispatch를 호출하면 실행될 미들웨어 추가 
// applyMiddleware({dispatch, getState} => action => (dispatch, getState) => {}) << 이런식으로 내부 로직이 생겼음

// action create 
import axios from "axios";

// 유저의 프로필 정보를 요청하는 로직
const getUserAction = (nick) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://loaclhost:4000/userinfo?nick=${nick}`)
        // 전역상태 업데이트 
        dispatch({type : "USERINFO", payload : data})

    }
}

// 컴포넌트에서 호출
import {useDispatch} from "react-redux"
import {getUserAction} from "./action/userAction"

const App = () => {
    const dispatch = useDispatch();

    const handler = () => {
        //dispatch({type : "USERINFO"})
        dispatch(getUserAction("zzeen"))

        // const dispatch = (action) => {
        //     if (typeof action === "object") {
        //         // 상태 업데이트. 리듀서 실행
        //         // state에 업데이트
        //     }else if (typeof action === "function") {

        //     }
        // }
    }
    return (<button onclick={handler}>프로필 조회</button>)
}
```

### todo list 만들어보자

```sh
npm i redux react-redux axios redux-thunk styled-components

# server 백엔드 폴더
npm i express cors mysql2 sequelize


src
  -- api # api요청 로직 코드 내용
    -- todo.js
  -- actions # 액션 생성자 함수
    -- todoActions.js
  -- reducers # 리듀서 함수
    -- todoReducer.js
  -- store # redux 스토어 저장소 초기화
    -- index.js
  -- components # 컴포넌트들
    -- atoms 
    
    -- molecules
    -- organisms
    -- pages
app.js
```

### thunk react query 