import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const childCountIncrement = () => {
        setCount2(prev => prev + 1)
    }

    return (
        <div>
            <div>count : {count}</div>
            <button onClick={increment}>증가</button>
            <button onClick = {childCountIncrement}>첫번째 자식 컴포넌트 카운트 증가</button>
            <Child count = {count2} name = {"첫번째"}></Child>
            <Child count = {0} name = {"두번째"}></Child>
            <Child count = {0} name = {"세번째"}></Child>
        </div>
    )
}

export default Parent
