//환경변수가 로컬환경이라면 
if(process.env.NODE_ENV === 'production'){
    //prod.js 에서 실행
    module.exports = require('./prod');
} else {
    //dev.js 에서 실행
    module.exports = require('./dev')
}