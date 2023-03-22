import http from "http"


function htmlBodyInner(imgLink){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${imgLink}</h1>
    </body>
    </html>
    `
}

const apiServer = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(htmlBodyInner("일단 임시글자"))
    res.end()
})
apiServer.listen(2080,(err)=>{
    if(err){
        console.log("안열렸쓰요")
    }else{
        console.log("열렸쓰요")

    }
})