// 유저 관련된 상태를 제어할 순수 함수
import userInfo from "../components/atoms/UserInfo";

// 초기값- 처음에 한번만 사용됨. 가독성때문에 따로 빼서 사용
const initState = { // 2 
    userInfo : null
}

const reducer = (state = initState, action) => { //3
    const {type, payload} = action; //4
    
    switch (type) { //5
        case "LOGIN":
            // api 호출 부분. 비동기 처리 부분은 리듀서에 작성하지 않음
            // redux-thunk 미들웨어 하나 추가해서 비동기 로직 처리
            return {...state,userInfo : {nick : "zzeen"} }; //6

        case "LOGOUT":
            
            return {...state, userInfo : null}; //7
    
        default:
            return state;
    }
}

export default reducer