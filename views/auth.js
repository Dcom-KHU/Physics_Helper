const fs=require('fs')

exports.Auth=(req,res)=>{
    const Render=()=>{
        fs.readFile('./static/html/auth.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    Render()
}