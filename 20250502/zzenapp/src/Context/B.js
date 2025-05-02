import React, {useContext} from 'react'
import A from './A'
import {Layout} from './Content.styled'
import { LoginStore } from './Store/Store'

const B = () => {
    const {setName} = useContext(LoginStore)
    const submitHandler = (e) => {
        e.preventDefault();
        // form 데이터를 제출하는데 name의  값이
        // form 데이터에서 요청 객체로 파싱하는 작업을 우리가 직접 만들수는 있을건데
        // name의 값을 전달을 해서 요청 form 객체를 생성
        // const formdata = new FormData(e.target)
        // axios({url : "", method:"POST", data : formdata})
        setName("zzeen1")
    }
  return (
    <Layout>
        <form onSubmit={submitHandler}>
        <label>이름</label>
        <input name='nickname'></input>
        <button>이름 수정</button>
        </form>
      <A></A>
    </Layout>
  )
}

export default B
