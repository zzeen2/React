import {useState} from 'react'

const useInput = () => {
    const [value, setValue] = useState("");

    // input요소에 입력을 할때마다 상태변수로 저장하는 로직을 추상화
    // 요소 선택자를 쓸 필요가 없다.
    
    const handlerSetValue = (e) => {
        setValue(e.target.value)
    }

    const valueClear = (e) => {
        console.log(e);
    }
    
    return{value, onChange :  handlerSetValue, onkeydown : valueClear}
}

export default useInput