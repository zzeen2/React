# React hook Context, Memo 

1. context : 리엑트는 단방향 데이터의 흐름으로 설계가 되어있다. 플럭스 패턴. 부모 컴포넌트에서 자식 컴포넌트로 props의 값을 전달해서 사용한다. 프로젝트의 규모가 커지게 되면 props 드릴링을 해서 개발은 가능하지만, 협업이 불가능하고 가독성에 이슈가 생긴다. props 드릴링을 피하기 위해서 사용할 수 있는 react hook. 자식 컴포넌트에서 상태를 공유할 수 있도록 전달해준다.

```js
// A에는 name이 필요하다. 하지만 B와 C는 불필요하다. age의 값이 또 필요하다. A까지 전달하기 위해서 불필요한 props가 증가될 수 있다.
const A = () => {
    return(<>{props.name}</>)
}
const B = () => {
    return(<A name = {props.name}></A>)
}
const C = () => {
    return(<B name = { props.name}></B>)    
}

const app = () => {
    const [name, setName] = useState("")
    return(<C name = {name} ></C>)
}

```

## context 문법
```js
// 로그인의 자식 컴포넌트에서 상태변수를 공유해야하는 내용
// 3개의 자식 컴포넌트 A B C의 컴포넌트가 있고, A의 컴포넌트에 값을 전달해야해서 props 드릴링이 발생. 이것을 context를 사용해서 방지해보자
// Login -> C -> B -> A (name 상태변수)

import {createContext} from "react"

// 상태변수를 저장할 저장소 공유하기 위한 값을 저장할 공간
// 객체의 저장소를 하나 만들고, 내보내서 다른곳에서 불러와서 사용
export const Store = createContext();
// 저장공간을 만들고 사용하는 영역을 지정
// 플럭스 상태 공유 부모를 기준으로 자식 컴포넌트들에게 저장공간의 주소를 주입

import Store from "./Store.js"

const Login = () => {
    // login 부모 컴포넌트에서 프로바이더로 주소를 주입
    // 공유하고 싶은 값
    // 부모 컴포넌트의 값을 자식들이 props로 전달 받아서 사용하지 않고, 저장소의 주소에 접근해서 사용할 수 있도록 
    const [name, setName] = useState("zzeen")

    const obj = {
        name, setName
    }

    return (
        <Store.Provider value = {obj}>
            </C>
        <Store.Provider/>
    )
}

const C = () => {
    return<B />
}
const B = () => {
    return<A />
}

import {useContext} from "react"
import Store from "./Store.js"
const A = () => {
    const {name, setName} = useContext(Store);
    /*
        {
            name, setName
        }

    */
}

```

2. memo : 리엑트의 상태를 관리할때 혹은 props 부모 컴포넌트의 전달값을 가지고 다시 리렌더링을 할 때 불필요한 리렌더링을 방지하기 위해서 사용되는 hook. 메모이제이션 기법을 사용해서 불필요한 렌더링을 방지하는 hook을 제공한다. props가 바뀌지 않으면 컴포넌트를 다시 렌더링하는 구조를 방지해 준다.

```js
    const Login = (props) => {
        return <div></div>
    }

const App = () => {
    const [name, setName] = useState("zzeen");
    const [count, setCount] = useState(0);
    // Login 자식 컴포넌트가 리렌더링 되는 시기는 
    // name의 값이 변경되었을때 혹은 setCount가 호출돼서 부모의 컴포넌트의 상태변수가 변경될 때 
    // 결론 ! 여러개의 자식 컴포넌트가 존재할때 하나의 자식 요소만 업데이트 되어도 매번 리렌더링 됨  >> memo로 불필요한 리렌더링을 막아주자 
    return <Login name={name}/>
}

```

### memo의 문법 
> 컴포넌트가 리렌더링 되어야하는 때에만 리렌더링
> memo가 내부적으로 조건문을 가지고 렌더링 이전에 검증한 뒤에 렌더링을 호출한다.
> 메모이제이션 기법을 사용하는 hook

```JS
import {memo, useMemo} from "react"

// memo는 전달한 함수의 값에서 사용하는 변수의 값이 변경되었을때만 리렌더링을 호출한다.
// 콜백함수 호출할 시기를 조건문으로 결정해주는 역할을 해준다. 이전 컴포넌트의 내용을 저장하고 값의 변화가 없으면 연산을 한번 더. 즉 렌더링을 하지 않고 이전의 내용을 바로 보여주고 값이 변화해서 리렌더링이 되어야 하면 다시 연산해서 리렌더링을 해주는 것

const Child = memo({name}) => {
    const [ count, setCount] = useState(3);
    const [ coun2, setCount] = useState(2);

    // 연산 기능 최적화
    // 함수가 호출되고 반환된 값을 캐싱 캐싱해둔 데이터는 언제 바뀌느냐?
    // 의존성 배열의 값이 변경되었을때 
    const countValue = useMemo(() => {
        // 연산 최적화
        return count + count2;
    },[count])
    // useMemo 연산된 값이 변화하면 캐싱을 해서 관리
    // 기능 함수의 로직이 변환 useCallback 함수의 기능 함수 값이 변화했는지

    return(
        <>
        {name}
        </>
    )
}

const Parent = () => {
    const [ name, useState ] = useState("zzeen");
    const [count, useCount] = useState(0);
    return (
        <Child name = {name}/>
    )
}

// 추가적으로 메모이제이션 기법을 컴포넌트의 사용을 할 때 memo를 사용해서 리렌더링을 방지

// useMemo 값을 계산하기 위한 용도로 사용되는 hook
// 값을 다시 계산을 할건지

// memo와 useMemo의 둘다 사용할 때 주의점
// 값의 비교를 하고 캐싱을 할지말지 결정을 하기 때문에 주소를 새롭게 생성해서 전달하는 방식을 피해서 사용해야한다.

const a = {};
const b = {};
const c = 1;
const d = 1;
c == d
c === d

console.log(a === b)
console.log(a == b) // 참조타입은 변수에 할당되어있는 값이 주소값

arr.map(el => <Child name = {el.name}/>)
```