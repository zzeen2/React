import React, { memo } from 'react'

// memo를 사용한 컴포넌트의 리렌더링 조건
// 주시하고싶은 props를 구분해서 전달. 본인의 상태변수가 변했을때 리렌더링
// HOC 고차 컴포넌트. 컴포넌트를 전달하면 컴포넌트를 조건부에 따라서 어떤 컴포넌트를 보여줄지 
// 메모이제이션 값이 변화가 있는지를 판단하는 기준을 세우고 이 기준에 따라서 리렌더링한다.
const Child = memo(({count, name}) => {
    console.log(name + "나 렌더링이 되었어")
    return (
        <div>
            {count}
        </div>
    )
})

export default Child
