const http = require('http');
http.createServer((req,res)=>{
	console.log("hello world");
}).listen(6666,()=>{
	console.log("server running");
})