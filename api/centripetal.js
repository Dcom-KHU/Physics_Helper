const fs=require('fs')

exports.Centripetal=(req,res)=>{
    let file=req.file
    //console.log(file)
    const DataCheck=()=>{
        return new Promise((resolve, reject) => {
            if (!file){
                return reject({
                    code:'request_body_error',
                    message:'No file'
                })
            }
            else resolve()
        })
    }

    const ReadText=()=>{
        let data=file.buffer.toString()
        return Promise.resolve(data)
    }
    const ProcessData=(data)=>{
        //console.log(data)
        let stringArr=data.split('\n')
        //console.log(stringArr)
        stringArr.sort()
        //console.log(stringArr)
        let forces=[]
        let velocities=[]
        let count=[]
        let last=-1
        for(let i=1;i<stringArr.length-2;i++){
            //console.log(i-1)
            let velocity=Number(stringArr[i].substring(0,stringArr[i].indexOf('\t')))
            let force=Number(stringArr[i].substring(stringArr[i].indexOf('\t')+1,stringArr[i].indexOf('\r')))
            //console.log(force)
            //console.log(`velocity: ${velocity} & force: ${force}\n`)
            //console.log(forces[last],force,forces[last]==force)
            //console.log(force)
            if (last===-1 || velocities[last]!==velocity){
                last++
                velocities[last]=velocity
                count[last]=1
                forces[last]=force
            }
            else{
                count[last]=count[last]+1
                forces[last]+=force
            }

        }
        for(let i=0;i<last+1;i++){
            //console.log(`${forces[i]}/${count[i]}\n`)
            forces[i]=Number((forces[i]/count[i]).toFixed(3))
        }
        let result=[]
        for (let i=0;i<last+1;i++){
            result.push({velocity:velocities[i],force:forces[i]})
        }
        result.sort((a,b)=>{
            return a.velocity < b.velocity ? 1 : -1
        })
        console.log(result)
        return Promise.resolve(result)
    }

    DataCheck()
        .then(ReadText)
        .then(ProcessData)
        .then((result)=>{
            res.status(200).json({result:result})
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err|err.message)
        })
}