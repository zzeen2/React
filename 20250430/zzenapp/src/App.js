import { useEffect } from "react";
import useAxios from "./hooks/useAxios";
import useInput from "./hooks/useInput"
import useLoading from "./hooks/useLoading";

const App2 = () => {
  const {request, res} = useAxios();
  const {loading, handlerEvent} = useLoading(request);
  const userId = useInput();
  const userPw = useInput();

  useEffect(() => {
    if(res) console.log(res);
  },[res])

  const loginHandler = () => {
    handlerEvent({
      url : "http://localhost:4000/login",
      method : "POST",
      data : {uid: userId.value, upw : userPw.value}
    })
  }

  return (
    <div>
      <label>아이디</label>
      <input {...userId}></input>

      <label>비밀번호</label>
      <input {...userPw}></input>

      <button onClick={loginHandler} disabled={loading}>{loading ? "로딩중" : "로그인"}</button>
    </div>
  )
}

export default App2;