import userReducer from "./userReducer"
import orderReducer from "./orderReducer"
import { combineReducers } from "redux" // 여러개의 리듀서를 하나로 키 값으로 구분해서 객체로 생성

export const reducer = combineReducers({userReducer , orderReducer})