import {useReducer} from "react";

// useReducer.js
export const initState = {uid: '', nick: '', isLogin: false};
    
    export const LOGIN = 'LOGIN';
    export const LOGOUT = 'LOGOUT';
    
    export const reducer = (state, action) => {
        const { type, payload } = action;
    
        switch (type) {
        case LOGIN: {
            const { uid, upw } = payload;
            const nick = "zzeen"
            console.log(uid, upw, nick)
            return {...state,uid,upw,nick,isLogin: true};
        }
    
        case LOGOUT:
            return { ...initState };
    
        default:
            return state;
        }
    };