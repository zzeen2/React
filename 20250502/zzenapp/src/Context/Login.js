import React, {useState} from 'react'
import {LoginStore} from './Store/Store'
import C from "./C"

const Login = () => {
    const [name, setName] = useState("zzeen");
    return (          
        <LoginStore.Provider value = {{name, setName}}>
            <C></C>
        </LoginStore.Provider>
    )
}

export default Login
