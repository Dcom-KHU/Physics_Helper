$(document).ready(function(){
    $('#calculate').click(function(){
        let balls=['steel','golf','plastic']
        for(let i=0;i<balls.length;i++){
            let timeSum=0
            for(let j=1;j<=5;j++){
                timeSum+=Number($(`#${balls[i]}T${j}`).val())
            }
            let averageTime=(timeSum/5).toFixed(5)
            $(`#${balls[i]}AverageT`).text(`${averageTime}`)
            let G=(2*Number($('#height').val())/(averageTime*averageTime)).toFixed(5)
            $(`#${balls[i]}G`).text(G)
            let difference=(Math.abs(G-9.8)/9.8*100).toFixed(2)
            $(`#${balls[i]}Difference`).text(difference)
        }
    })
    $('#clear').click(function(){
        let balls=['steel','golf','plastic']
        for(let i=0;i<balls.length;i++){
            $('#height').val('')
            $(`#${balls[i]}Weight`).val('')
            $(`#${balls[i]}Radius`).val('')
            for(let j=1;j<=5;j++){
                $(`#${balls[i]}T${j}`).val('')
            }
            $(`#${balls[i]}AverageT`).text('')
            $(`#${balls[i]}G`).text('')
            $(`#${balls[i]}Difference`).text('')
        }
    })
})