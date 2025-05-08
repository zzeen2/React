import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 전역 상태 조회
const UserInfo = () => {
    // combineReducers 컴바인으로 리듀서를 여러가지 사용할때 컴바인에 전달한 키로 조회를 해야한다.
    // 상태의 묶음의 구분은 키로 할당이 되고 
    const userInfo = useSelector(state =>  state.userReducer.userInfo) //8
    return (
        <div>
            유저의 이름 : {userInfo ? userInfo.nick : null} 
        </div>
    )
}

export default UserInfo
