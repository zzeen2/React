// 저장소 생성
import {createStore} from "redux"
import { reducer } from "../reducer";

// 리듀서 전달
export const store = createStore(reducer); //1 > 리듀서 만들고 오자 

