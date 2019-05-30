console.log("hjdsfkas")
$(document).ready(function () {
    console.log('ready')
    $("#calculate").click(function () {
        //table1
        let L = 0.5
        for (let i = 1; i <= 10; i++) {
            console.log(i)
            let f = Number($(`#f${i}_A`).val())
            console.log(f)
            let lamb = ((2/i)*L).toFixed(5)
            let v = f*lamb
            $(`#l${i}_A`).text(lamb)
            $(`#v${i}_A`).text(v)
        }

         //table2
         L = 1
         for (let i = 1; i <= 10; i++) {
             console.log(i)
             let f = Number($(`#f${i}_B`).val())
             console.log(f)
             let lamb = ((2/i)*L).toFixed(5)
             let v = f*lamb
             $(`#l${i}_B`).text(lamb)
             $(`#v${i}_B`).text(v)
         }
    })
    
    $("#clear").click(function () {

        for (let i = 1; i <= 10; i++) {
            $(`#f${i}_A`).val('')
            $(`#f${i}_B`).val('')
            $(`#l${i}_A`).text('')
            $(`#v${i}_A`).text('')
            $(`#l${i}_B`).text('')
            $(`#v${i}_B`).text('')

        }
    })
})
