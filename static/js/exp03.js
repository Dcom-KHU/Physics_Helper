$(document).ready(function(){
    $("#calculate").click(function(){
        //table1
        let sumT=0;
        for(let i=1;i<=8;i++){
            sumT+=Number($(`#t${i}`).val())
            console.log(sumT)
        }
        let averageT=(sumT/8).toFixed(5)
        console.log(averageT)
        $("#averageT").text(averageT)
        let L=Number($("#L").val())
        let v0=(L/averageT).toFixed(5)
        $("#v0").text(v0)

        //table2
        const degree1=[20,30,40,50,60,70]
        for(let i=0;i<6;i++){
            let xSum=0
            let tSum=0
            for(let j=1;j<=3;j++){
                xSum+=Number($(`#x${j}d${degree1[i]}`).val())
                tSum+=Number($(`#t${j}d${degree1[i]}`).val())
            }
            let averageX=(xSum/3).toFixed(5)
            averageT=(tSum/3).toFixed(5)
            $(`#averageXd${degree1[i]}`).text(averageX)
            $(`#averageTd${degree1[i]}`).text(averageT)
            let idealX=(Math.pow(v0,2)*Math.sin(2*degree1[i]*(Math.PI/180))/9.8).toFixed(5)
            let idealT=(2*v0*Math.sin(degree1[i]*(Math.PI/180))/9.8).toFixed(5)
            $(`#idealXd${degree1[i]}`).text(idealX)
            $(`#idealTd${degree1[i]}`).text(idealT)
            let differenceX=(Math.abs(averageX-idealX)/idealX*100).toFixed(3)
            let differenceT=(Math.abs(averageT-idealT)/idealT*100).toFixed(3)
            $(`#differenceXd${degree1[i]}`).text(differenceX)
            $(`#differenceTd${degree1[i]}`).text(differenceT)
            let maxY=((v0*Math.sin(degree1[i]*(Math.PI/180)))*(v0*Math.sin(degree1[i]*(Math.PI/180)))/(2*9.8)).toFixed(5)
            $(`#maxYd${degree1[i]}`).text(maxY)
        }
        //table3
        const degree2=[41,42,43,44,45,46,47,48,49]
        let maxDegree=0,maxReach=0
        for(let i=0;i<9;i++){
            let reach=Number($(`#reachd${degree2[i]}`).val())
            if(reach>maxReach){
                maxReach=reach
                maxDegree=degree2[i]
            }
        }
        $('#maxDegree').text(maxDegree)
        $('#maxReach').text(maxReach)
    })
    $("#clear").click(function(){
        const degree1=[20,30,40,50,60,70]
        const degree2=[41,42,43,44,45,46,47,48,49]
        for(let i=1;i<=8;i++){
            $(`#t${i}`).val('')
        }
        $('#averageT').text('')
        $('#L').val('')
        $('#v0').text('')
        for(let i=0;i<6;i++){
            for(let j=1;j<=3;j++){
                $(`#x${j}d${degree1[i]}`).val('')
                $(`#t${j}d${degree1[i]}`).val('')
            }
            $(`#averageXd${degree1[i]}`).text('')
            $(`#averageTd${degree1[i]}`).text('')
            $(`#idealXd${degree1[i]}`).val('')
            $(`#idealTd${degree1[i]}`).val('')
            $(`#differenceXd${degree1[i]}`).text('')
            $(`#differenceTd${degree1[i]}`).text('')
            $(`#maxTd${degree1[i]}`).text('')
        }
        for(let i=0;i<degree2.length;i++){
            $(`#reachd${degree2[i]}`).val('')
        }
        $('#maxDegree').text('')
        $('#maxReach').text('')
    })
})