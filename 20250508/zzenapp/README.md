# react Redux 전역 상태
> react는 컴포넌트 즉 UI의 단위로 개발을 하면서 상태를 관리하게 되는데 
> Flux 단방향 데이터의 흐름을 가지고 있고
> 상태가 여러개의 컴포넌트에서 사용이 되는 경우 상태간의 의존성이 생기는 경우가 많아지면 복잡도가 올라간다.
> props drilling이 발생. 이것을 극복하기 위해서 사용하는것이 전역 상태
> 이런 드릴링의 문제를 해결하기 위해서 전역 상태로 redux를 사용하는 것
> 중앙 집중식 데이터의 저장소를 만들어서 상태를 관리하는 것.

## redux
> 페이스북(메타) flux 아키텍처를 보고 만든것.
> 단방향 데이터 흐름
> 디스패처 -> 스토어 -> 뷰 
> 모든 상태를 하나의 저장공간에 저장을 하고,
> 상태변환은 디스패처를 호출해서 액션을 발생시키고 리듀서가 캐치 리듀서가 액션을 가지고 로직을 호출해서 반환값을 가지고 스토어 즉 상태 업데이트
> 리듀서는 순수 함수 외부에 있는 값의 의존성이 없는 함수 전달받은 값을 함수 내부에서 연산을 목적으로 반환값을 반환
> 목적은 전역상태의 관리의 목적을 가지고 있다. 

## react-redux
> redux는 많은 곳에서 사용을 했는데 react와 사용할때 가장 효과적이었다. 
> react-redux 라이브러리가 탄생
> redux를 사용할때 react에서 유용한 hook과 함수
> 저장소 생성 등 react에서 redux를 사용할때 함수를 제공해준다. 

### redux의 주요 속성
1. 액션
2. 디스패치
3. 리듀서
4. 스토어

디스패치 -> 리듀서(액션) -> 스토어 상태 업데이트

### redux 문법
```sh
npm i redux react-redux
```
```js
// redux : 저장소를 만드는 내용에 사용되는 라이브러리
// react-redux : 생성한 저장소를 관리할때 최적화, 효과적인 hook을 제공하는 라이브러리 
// Redux는 상태를 하나의 공간에 저장한다. store라는 객체 안에 데이터를 모두 저장한다. 

// 저장소 생성(전역 상태를 저장할 공간)
import { createStore } from 'redux';
// createStore : 저장소를 생성하는 함수 ===> 리듀서 함수가 필요하다.
// 리듀서 함수를 매개변수로 전달 
const store = createStore(reducer);

const initState = {count : 0}
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// 리듀서
const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case INCREMENT : return {...state, count : state.count + 1}
    }
}

// 디스패처
import {useDispatch, useSelector} from "react-redux"
// useDispatch 액션으로 디스패치 즉 스토어의 상태 업데이터
// useSelector 전역상태를 조회 접근. 상태를 주시하는 값이 변했을때 컴포넌트 리렌더링

const App = () => {
    const dispatch = useDispatch(); // 초기화된 저장소의 상태를 업데이트할 수 있는 함수를 반환 
    const count = useSelector(state => state.count); // 콜백으로 전달한 함수의 반환값을 useSelector 내부적으로 반환을 해서 count 변수에 할당
    // 전달한 콜백함수의 매개변수로 상태를 할당해주고 콜백함수에서 반환한 값을 useSelector 반환을 한다. count 변수에 상태값에 있는 count 할당. => 이후부터는 count를 주시하게 된다.
    return (<div>
        <button onClick = {()=>dispatch({type : INCREMENT})}>증가</button>
    </div>)
}
```

