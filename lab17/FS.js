const fs = require('fs')

fs.exists('hiii.txt',(data)=>{
	console.log(data);
});

fs.stat('hiii.txt',(err,data)=>{
	console.log(data);
});

fs.readFile('demo.txt',(err,data)=>{
	console.log(data.toString());
})

fs.writeFile('demo.txt','hii muskan!!!',(err,data)=>{
	console.log(data);
})

fs.appendFile('demo.txt',' how are you??',(err,data)=>{
	console.log(data);
})

fs.open('demo.txt',(data)=>{
	console.log(data);
})

// fs.close('demo.txt',(data)=>{
//     console.log(data);
// })