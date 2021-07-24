var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    if(req.url==='/home' || req.url==='/')
    {
        res.writeHead(200,{'Content-Typee':'text/html'});
        fs.createReadStream('index.html').pipe(res)

    }
    else if(req.url==='/api'){
        res.writeHead(200,{'Content-Type':'application/json'});
        var jsonobj={
            name:'shubham',
            surname:'kumar',
            age:20
        };
    res.end(JSON.stringify(jsonobj));
    }
}).listen(3000);
console.log('server is running');