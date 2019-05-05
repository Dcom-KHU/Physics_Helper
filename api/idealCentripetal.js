const bodyParser=require('body-parser')
exports.IdealCentripetal=(req,res)=>{
    const r=Number(req.body.r)*0.01
    const m=Number(req.body.m)*0.001
    const maxVelocity=req.body.maxVelocity
    console.log(req.body)
    const DataCheck=()=>{
        return new Promise((resolve,reject)=>{
            if(!r || !m || !maxVelocity){
                return reject({
                    code:'request_body_error',
                    message:'Request body error'
                })
            }
            else resolve()
        })
    }
    const Calculate=()=>{
        let result=[]
        for(let i=0;i<maxVelocity;i+=0.1){
            let force=(m*r*i*i).toFixed(3)
            result.push({velocity: i,force:force})
        }
        return Promise.resolve(result)
    }
    DataCheck()
        .then(Calculate)
        .then((result)=>{
            res.status(200).json({result:result})
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err|err.message)
        })
}