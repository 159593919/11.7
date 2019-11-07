const http=require("http")
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==='/txt'){
        res.writeHead(200,{'Content-Type':'text/plain'})//设置响应头
        res.end("text")//buffer字符串
    }else if(req.url==='/json'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({code:1,list:[5,6,7]}))

    }
    else if(req.url==='/jpg'){
res.writeHead(200,{'Content-Type':'image/jpeg'})
let images=fs.readFileSync('./1.jpg')
req.end(images)

    }
})
server.listen(process.env.POPT||8080,()=>{
    console.log(process.pid)
    console.log("服务启动成功")

})