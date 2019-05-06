$(document).ready(function(){
    let distances=[8,11,14,17,20]
    let weights=[30,60,90,120,150]
    $('#r1Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#r1Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('r1Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=distances[0]
                idealData.m=100+Number($('#M1').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'r1 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'r1 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#r2Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#r2Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('r2Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=distances[1]
                idealData.m=100+Number($('#M1').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'r2 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'r2 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#r3Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#r3Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('r3Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=distances[2]
                idealData.m=100+Number($('#M1').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'r3 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'r3 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#r4Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#r4Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('r4Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=distances[3]
                idealData.m=100+Number($('#M1').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'r4 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'r4 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#r5Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#r5Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('r5Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=distances[4]
                idealData.m=100+Number($('#M1').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'r5 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'r5 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#m1Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#m1Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('m1Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=15
                idealData.m=weights[0]+Number($('#M2').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'m1 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'m1 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#m2Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#m2Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('m2Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=15
                idealData.m=weights[1]+Number($('#M2').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'m2 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'m2 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#m3Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#m3Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('m3Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=15
                idealData.m=weights[2]+Number($('#M2').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'m3 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'m3 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#m4Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#m4Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('m4Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=15
                idealData.m=weights[3]+Number($('#M2').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'m4 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'m4 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
    $('#m5Draw').click(function(){
        let formData=new FormData()
        formData.append("file", $("#m5Text")[0].files[0])
        console.log(JSON.stringify(formData))
        $.ajax({
            type:'POST',
            url:'/api/centripetal',
            data:formData,
            enctype:'multipart/form-data',
            processData:false,
            contentType:false,
            cache:false,
            success:function(data){
                //console.log(data['result'])
                let ctx=document.getElementById('m5Result').getContext('2d')
                let forces=[]
                let velocities=[]
                for(let i=0;i<data['result'].length;i++){
                    velocities[i]=Number(data['result'][i]['velocity'])
                    forces[i]=Number(data['result'][i]['force'])
                }
                let maxVelocity=velocities[0]
                let idealData={}
                idealData.r=15
                idealData.m=weights[4]+Number($('#M2').val())
                idealData.maxVelocity=maxVelocity
                const stringIdealData=JSON.stringify(idealData)
                $.ajax({
                    type:'POST',
                    url:'/api/idealcentripetal',
                    data:stringIdealData,
                    dataType:'JSON',
                    contentType:'application/json; charset=utf-8',
                    traditional:true,
                    processdata:false,
                    success:function(idealResult){
                        let idealVelocities=[]
                        let idealForces=[]
                        for(let i=0;i<idealResult['result'].length;i++){
                            idealVelocities[i]=Number(idealResult['result'][i]['velocity'])
                            idealForces[i]=Number(idealResult['result'][i]['force'])
                        }
                        forces.reverse()
                        velocities.reverse()
                        let myChart=new Chart(ctx,{
                            type:'line',
                            data:{
                                labels:velocities,
                                datasets:[{
                                    label:'m5 실험값',
                                    data:forces,
                                    backgroundColor:[
                                        'rgba(255, 99, 132, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                    ]
                                }, {
                                    label:'m5 이론값',
                                    data:idealForces,
                                    backgroundColor:[
                                        'rgba(0,0,255,0.2)'
                                    ],
                                    borderColor:[
                                        'rgba(0,0,255,1)'
                                    ]
                                }
                                ],
                            },
                        })
                    }
                })
            },
            error: function(){
                return false
            },
        })
    })
})

