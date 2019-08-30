var http=require('http');
var fs=require('fs');
var url=require('url');
const PORT=process.env.PORT || 50000


http.createServer(function (req,res) {
	var q=url.parse(req.url,true);
	var filename='.'+q.pathname;
	if(filename=='./'){filename='index';}

	filename=filename+".html";
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'content-Type': 'text/html'});
			return res.end('<strong>404 Not Found</strong>');
		}
	res.writeHead(200,{'content-Type': 'text/html'});
	return res.end(data);
})
	// body...
}).listen(PORT);
