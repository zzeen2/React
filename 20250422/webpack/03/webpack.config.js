const path = require("path")
const { entry } = require("../01/webpack.config")
const htmlwebpack = require("html-webpack-plugin")

module.exports = {
    entry : "./src/index.js",
    mode : "development",

    module : {
        rules : [
            {
                // 파일의 확장자가 js 혹은 jsx 이면
                test : /\.(js|jsx)$/,
                // exclude : 제외할 폴더 정의 
                // 예를들어 node_modules 제외하고 파일을 읽을때 처리하겠다.
                exclude : /node_modules/,
                use : ["babel-loader"]
            }
        ]
    },
    // 기본 html 생성
    // npm i -D html-webpack-plugin
    plugins : [
        new htmlwebpack({
            template : "src/index.html",
            filename : "index.html"
        })
    ],

    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    }
}