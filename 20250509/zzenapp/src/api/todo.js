import axios from "axios"

const API_BASE_URL = "http://localhost:4000"

const readTodoList = async() => {
    const {data} = await axios.get(`${API_BASE_URL}/read`)
    // 상태코드에 따라서 오류 메세지
    console.log(data)
    return data;
}

const createTodoList = async(name) => {
    const {data} = await axios.post(`${API_BASE_URL}/create`, {name});
    console.log(data)
    return data;
}

const deleteTodoList = async(id) => {
    const {data} = await axios.post(`${API_BASE_URL}/delete`, {id});
    console.log(data)
    return data;
}

export {readTodoList, createTodoList, deleteTodoList};