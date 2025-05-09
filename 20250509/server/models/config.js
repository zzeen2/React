const Sequelize = require("sequelize");
const {Todo} = require('./todo');

const sequelize = new Sequelize(
    "todo",
    "root",
    "issue0012",
    {
        host : "127.0.0.1",
        port : 3306,
        dialect : "mysql"
    }
)

const db = {
    Todo : Todo.init(sequelize),
}

module.exports = db

sequelize.sync({force : false}).then(()=> {
    console.log("연결 성공")
})