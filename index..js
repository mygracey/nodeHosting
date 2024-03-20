let http=require('http')

let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hi very on this is just a test')
})


let PORT=process.env.PORT=2000

server.listen(PORT,(()=>{
    console.log('server is running at ' + PORT)
}))