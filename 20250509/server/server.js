const express = require("express")
const cors = require('cors');
const app = express();
const {Todo} = require("./models/config")

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({origin : "*"}))

// todo 리스트 조회
app.get("/read", async (req,res)=> {
    try {
        const data = await Todo.findAll();
        //console.log("read data" , data)
        setTimeout(() => {
            res.json({data, state : 200})
        }, 1000)
    } catch (error) {
        res.json({error})
    }
})

// todo 리스트 추가
app.post('/create', async(req,res) => {
    try {
        const {name} = req.body;
        await Todo.create({name});
        res.json({message : "글 등록 성공" , state : 200})
        
    } catch (error) {
        res.json(error)
    }
})

// todo 리스트 삭제
app.post('/delete', async(req,res) => {
    try {
        console.log(req.body)
        const {id} = req.body;
        const data = await Todo.destroy({where : { id : id }})
        console.log(data);
        res.json({message : "글 삭제 성공", state : 200})
    } catch (error) {
        
    }
})

app.listen(4000, () => {
console.log("server on")
})