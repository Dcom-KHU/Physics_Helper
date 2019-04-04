const bodyParser=require('body-parser')
require('dotenv').config()

exports.Login=(req,res)=>{
    const password=req.body.password

    const DataCheck=()=>{
        return new Promise((resolve,reject)=>{
            if(!password){
                return reject({
                    code:'NO_PASSWORD',
                    message:'No Password'
                })
            }
            else resolve()
        })
    }

    const PWCheck=()=>{
        if(password!==process.env.PASSWORD){
            return Promise.reject({
                code:'PW_WRONG',
                message:'Password is wrong'
            })
        }
        else{
            req.session.verified=true
            req.session.save(()=>{
                res.status(200).json({message:'login completed'})
            })
        }
    }

    DataCheck()
        .then(PWCheck)
        .catch((err)=>{
            console.log(err)
            res.status(500).json({message:err['message']})
        })
}