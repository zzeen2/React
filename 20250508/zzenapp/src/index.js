import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // store를 컴포넌트에 주입
    // App 컴포넌트와 하위 자식 모든 컴포넌트 store에 접근할 수 있도록 주입해준다.
    <Provider store = {store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
