import http from "http"
import fs from "fs"
import path from "path"
const textInBody = "안녕하세요"



function bodyPage(script) {
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
        <div id="root">${script}</div>
        <script>
        
        </script>
    </body>
    </html>
    `
}

const newServerOnGreen = http.createServer((req,res)=>{
    let url = req.url;
    console.log(url)
    res.writeHead(200,{"Content-Type":"text/html"})
    // res.write(bodyPage(bodyScript))
    // res.write(bodyPage(textInBody))
    if(req.url==='/'){
        url="/index.html"
    }
    if(req.url==='/nextPage'){
        url="/nextPage.html"
    }

    if(req.url==='/favicon.ico'){
        return res.writeHead(404)
    }

    res.end(fs.readFileSync(path.resolve()+url))
})
newServerOnGreen.listen(2080,(err)=>{
    if(err){
        console.log("비정상")
    }else{
        console.log("정상")
    }
})

