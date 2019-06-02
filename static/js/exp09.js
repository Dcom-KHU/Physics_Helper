$(document).ready(function(){
    $('#calculate').click(function(){
        let ds=[10,20,30,40,50,60,70,80]
        let ls=[20,30,40,50,60,70]
        let ms=[]
        // table 1
        console.log('table1')
        let table1_l = Number($('#table1_l').val())
        let table1_m = Number($('#table1_m').val())
        for(let i=0;i<8;i++){
            let table1_Tsum=0
            for(let j=1;j<=8;j++){
                table1_Tsum += Number($(`#table1_d${ds[i]}_T${j}`).val())
            }
            let table1_Tavg_ideal = (2*Math.PI*Math.sqrt(table1_l/9.8)).toFixed(4)
            let table1_Tavg_exp = (table1_Tsum / 8).toFixed(2)
            $(`#table1_d${ds[i]}_Tavg_ideal`).text(table1_Tavg_ideal)
            $(`#table1_d${ds[i]}_Tavg_exp`).text(table1_Tavg_exp)
            let table1_Tavg_diff = (Math.abs(table1_Tavg_ideal-table1_Tavg_exp)/table1_Tavg_ideal*100).toFixed(2)
            $(`#table1_d${ds[i]}_Tavg_diff`).text(table1_Tavg_diff)
            let table1_g_ideal = 9.8
            let table1_g_exp = (4*Math.PI*Math.PI*table1_l/table1_Tavg_exp/table1_Tavg_exp).toFixed(4)
            $(`#table1_d${ds[i]}_g_ideal`).text(table1_g_ideal)
            $(`#table1_d${ds[i]}_g_exp`).text(table1_g_exp)
            let table1_g_diff = (Math.abs(table1_g_ideal-table1_g_exp)/table1_g_ideal*100).toFixed(2)
            $(`#table1_d${ds[i]}_g_diff`).text(table1_g_diff)
        }

        // table 2
        console.log('table2')
        let table2_d = Number($('#table2_d').val())
        let table2_m = Number($('#table2_m').val())
        for(let i=0;i<6;i++){
            let table2_Tsum=0
            for(let j=1;j<=8;j++){
                table2_Tsum += Number($(`#table2_l${ls[i]}_T${j}`).val())
            }
            let table2_Tavg_ideal = (2*Math.PI*Math.sqrt(0.01*ls[i]/9.8)).toFixed(2)
            let table2_Tavg_exp = (table2_Tsum / 8).toFixed(2)
            $(`#table2_l${ls[i]}_Tavg_ideal`).text(table2_Tavg_ideal)
            $(`#table2_l${ls[i]}_Tavg_exp`).text(table2_Tavg_exp)
            let table2_Tavg_diff = (Math.abs(table2_Tavg_ideal-table2_Tavg_exp)/table2_Tavg_ideal*100).toFixed(2)
            $(`#table2_l${ls[i]}_Tavg_diff`).text(table2_Tavg_diff)
            let table2_g_ideal = 9.8
            let table2_g_exp = (4*Math.PI*Math.PI*0.01*ls[i]/table2_Tavg_exp/table2_Tavg_exp).toFixed(4)
            $(`#table2_l${ls[i]}_g_ideal`).text(table2_g_ideal)
            $(`#table2_l${ls[i]}_g_exp`).text(table2_g_exp)
            let table2_g_diff = (Math.abs(table2_g_ideal-table2_g_exp)/table2_g_ideal*100).toFixed(2)
            $(`#table2_l${ls[i]}_g_diff`).text(table2_g_diff)
        }
        // table 3
        console.log('table3')
        let table3_l = Number($('#table3_l').val())
        let table3_d = Number($('#table3_d').val())
        for(let i=1;i<=3;i++){
            ms[i-1]=Number($(`#table3_m${i}`).val())
            let table3_Tsum=0
            for(let j=1;j<=8;j++){
                table3_Tsum += Number($(`#table3_m${i}_T${j}`).val())
            }
            $(`#table3_m${i}_show`).text(ms[i-1])
            let table3_Tavg_ideal = (2*Math.PI*Math.sqrt(table3_l/9.8)).toFixed(2)
            let table3_Tavg_exp = (table3_Tsum / 8).toFixed(2)
            $(`#table3_m${i}_Tavg_ideal`).text(table3_Tavg_ideal)
            $(`#table3_m${i}_Tavg_exp`).text(table3_Tavg_exp)
            let table3_Tavg_diff = (Math.abs(table3_Tavg_ideal-table3_Tavg_exp)/table3_Tavg_ideal*100).toFixed(2)
            $(`#table3_m${i}_Tavg_diff`).text(table3_Tavg_diff)
            let table3_g_ideal = 9.8
            let table3_g_exp = (4*Math.PI*Math.PI*table3_l/table3_Tavg_exp/table3_Tavg_exp).toFixed(4)
            $(`#table3_m${i}_g_ideal`).text(table3_g_ideal)
            $(`#table3_m${i}_g_exp`).text(table3_g_exp)
            let table3_g_diff = (Math.abs(table3_g_ideal-table3_g_exp)/table3_g_ideal*100).toFixed(2)
            $(`#table3_m${i}_g_diff`).text(table3_g_diff)
        }
    })
    $('#clear').click(function(){
        location.reload()
    })
})