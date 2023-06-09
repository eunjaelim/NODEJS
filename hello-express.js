const express = require("express");
const app = express()
const port = 3000;

app.get("/",(req,res)=>{ // 요청이 오는 경우 실행됨
    res.set({"Content-Type":"text/html;charset-utf-8"});
    res.end("헬로 Express");
})

app.listen(port,()=>{
    console.log(`START SERVER : use ${port}`); // 서버를 가동해 클라이언트 요청을 기다림

});