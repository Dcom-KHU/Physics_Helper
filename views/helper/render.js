const fs=require('fs')

exports.Render=(req,res)=>{
    let expNo=Number(req.params.expNo)
    if(expNo/10<1){
        expNo='0'+expNo
    }
    fs.readFile('./static/html/exp'+expNo+'.html',(err,data)=>{
        if(err){
            console.log(err)
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    })
}