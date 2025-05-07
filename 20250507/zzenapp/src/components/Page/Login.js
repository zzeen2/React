import React, { useReducer } from 'react'
import useInput from '../../hooks/useInput';
import { LOGIN, LOGOUT } from '../../store/userReducer';

const Login = ({dispatch}) => {
    const uidInput = useInput();
    const upwInput = useInput();

    const login = () => {
        dispatch({type : LOGIN, payload : {uid : uidInput.value, upw : upwInput.value} })
    }
    return (
        <div>
            <label>아이디</label>
            <input {...uidInput} ></input>
            <label>비밀번호</label>
            <input {...upwInput}></input>
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default Login
