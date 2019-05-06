$(document).ready(function(){
    $('#calculate').click(function(){
        let timeSum = 0
        for(let i=1;i<=5;i++){
            timeSum+=Number($(`#T${i}`).val())
        }
        let averageTime = (timeSum/5).toFixed(5)
        $(`#AverageT`).text(`${averageTime}`)
        let G = (2/((averageTime*averageTime)*(Number($('#height').val())))).toFixed(5)
        $(`#G`).text(G)
        let difference=(Math.abs(G-9.8)/9.8*100).toFixed(2)
        $(`#Difference`).text(difference)
    })

    $('#clear').click(function(){
        $('#height').val('')
        for(let i=1;i<=5;i++){
            $(`#T${i}`).val('')
        }
        $(`#AverageT`).text('')
        $(`#G`).text('')
        $(`#Difference`).text('')

    })
})
