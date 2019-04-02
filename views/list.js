const fs=require('fs')

exports.List=(req,res)=>{
    const Render=()=>{
        fs.readFile('./static/html/list.html',(err,data)=>{
            if(err){
                console.log(err)
            }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    Render()
}