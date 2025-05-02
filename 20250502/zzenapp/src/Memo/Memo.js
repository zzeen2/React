import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)
    // 연산을 메모이제이션
    // 갱신을 하는 구간을 정의
    // 연산된 값은 영향을 안주고 어느 순간 값의 갱신이 일어나도록
    const increment = () => {
        setCount((prev => prev + 1));
    }
    // 지하철에 문이 열리기전에 사람들이 대기중
    // 지하철 문이 열리면 지하철에 탑승한 사람들의 인원을 갱신
    // useMemo 
    const value = useMemo(() => {
        return count;
    },[open]) // []의존성 배열 값이 없으면 최초에 한번 
    // [주시할 변수] 의존성 배열에 주시하는 값이 있는경우 변할때마다
    // 주시하는 의존성의 값이 변화하면 재 캐싱
    // 0의 값을 최초에 캐싱을 해놓고 연산을 다시 해야하는 때는 정해서 재연산 다시 캐싱

    return (
        <div>
            <div>줄서있는 사람들 : {count}명</div>
            <button onClick={increment}>지하철 대기중 인원 증가</button>
            <button onClick={() => setOpen(prev => !prev)}>지하철 문 열기</button>
            <div>지하철에 탑승한 사람들 : {value}명 </div>
        </div>
    )
}

export default Memo
