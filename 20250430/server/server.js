const express = require("express");
const cors = require("cors");

// 포트번호가 다르다. 프론트 3000, 백엔드 4000
const app = express();

// 헤더에 값 추가하고 next 다음 미들웨어 호출
app.use(cors({
    origin : "http://localhost:3009"
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post("/login", (req,res) => {
    const {body} = req;
    console.log(body)
    setTimeout(() => {
        res.json({data : body})

    }, 3000)
})

app.listen(4000, () => {
    console.log("server on")
})