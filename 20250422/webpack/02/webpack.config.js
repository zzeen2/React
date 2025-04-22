const path = require("path");
const { entry } = require("../01/webpack.config");

module.exports = {
    entry : "./src/index.js",
    mode : "development",
    // 모듈을 가져올때 규칙 정의
    module : {
        rules : [
            {
                // 파일의 이름을 검사
                test : /\.css$/,
                // css 확장자가 붙은 파일인지 검사
                // 어떤 로더로 이 파일을 읽을 건지
                // npm i style-loader
                // npm i css-loader
                use : ["style-loader", "css-loader"] // 사용하고싶은 로더를 작성 
                //"style-loader", "css-loader" : html 문서의 헤드에 style 태그를 추가하고 css 코드를 추가
                // css in javascript
            },
            {}
        ]
    },
    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    }
}