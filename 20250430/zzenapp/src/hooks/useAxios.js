import axios from "axios";
import { useState } from "react";

// 요청을 보낼때 로직 axios를 사용해서 
// promise 처럼 상태를가지고 있는 객체를 만들것.
const useAxios = () => {
    const[res,setRes] = useState(null); // 응답에 대한 데이터를 저장할 상태변수
    const[pending, setPending] = useState(null); // 대기중의 상태의 상태변수
    const [rej, setRej] = useState(null);//에러의 상태변수

    // 요청을 보내고 상태에 따른 로직 처리
    // 비동기 처리
    const request = async(config) => {
        // axios 로직
        // 요청을 시작하면 대기중
        setPending(true);

        // try catch문 사용해서 에러 발생 코드는 catch문에
        try {
            const {data} = await axios({...config})
            // axios함수에 전달하는 속성값
            // 주요속성 
            // url : 요청하는 경로
            // method : 요청 메서드
            // baseurl : http://scoop 모든 요청을 할 때 url 앞에 붙는 기본값
            // headers : 요청 헤더의 내용
            // params : 쿼리 문자열 등을 요청메세지
            // data : body에 전달하는 값
            setRes(data);
        } catch (error) {
            setRej(error)
        }
        setPending(false)
    }
    return {res, pending, rej, request};
}

export default useAxios
