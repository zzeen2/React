import React, {useReducer} from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Molecules/Header';
import Main from '../components/Page/Main'
import Board from '../components/Page/Board'
import Mypage from '../components/Page/Mypage'
import Login from '../components/Page/Login'
import { initState, reducer } from './userReducer';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const MypageRoute = (Page) => {
        if (state.isLogin)
        return (<Page />) //아래에서 컴포넌트를 함수로 전달받음
        return (<Navigate to= "/" />) // 리다이렉트 히스토리 가져와서 이전페이지로 리다이렉트
    }

    return (
        <BrowserRouter>
        {/* 항상 페이지에 남아있어야하는 컴포넌트 */}
        <Header userInfo = {state}></Header>
        {/* Routes컴포넌트의 조건부의 부분 */}
        {/*  자바스크립트가 경로에 따라서 동적으로 요소를 렌더링 해주는 구조 */}
        {/*  MPA 페이지 새로고침 되어서 자바스크립트가 처음부터 동작하는 구조 */}

        <Routes>
            <Route path = '/' element={<Main></Main>}></Route>
            <Route path = '/board' element={<Board></Board>}></Route>
            <Route path = '/mypage' element={MypageRoute(Mypage)}></Route>
            <Route path = '/login' element={<Login dispatch = {dispatch}></Login>}></Route>
        </Routes>
        {/* 푸터 */}
    </BrowserRouter>
    )
}

export default App
