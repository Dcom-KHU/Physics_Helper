console.log("hjdsfkas")
$(document).ready(function () {
    console.log('ready')
    $("#calculate").click(function () {
        //table1
        let L1 = Number($("#l1_A").val())
        console.log(L1)
        let L2 = Number($("#l2_A").val())
        let M1 = Number($("#m1_A").val())
        let M2 = Number($("#m2_A").val())
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let T1i = Number($(`#t1i_A${i}`).val())
            let T1f = Number($(`#t1f_A${i}`).val())
            let T2f = Number($(`#t2f_A${i}`).val())
            let V1i = (L1 / T1i).toFixed(4)
            let V1f = (L1 / T1f).toFixed(4)
            let V2f = (L2 / T2f).toFixed(4)
            let P1i = (M1 * V1i).toFixed(4)
            let P1f = (M1 * V1f).toFixed(4)
            let P2f = (M2 * V2f).toFixed(4)
            let K1i = ((1/2)*(M1*(V1i)*(V1i))).toFixed(4)
            let K1f = ((1/2)*(M1*(V1f)*(V1f))).toFixed(4)
            let K2f = ((1/2)*(M2*(V2f)*(V2f))).toFixed(4)
            let Ki = K1i
            let Kf = Number(K1f) + Number(K2f)
            let Pi = P1i
            let Pf = (Number(P2f) + Number(P1f)).toFixed(4)
            let difference_p=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
            let difference_k=(Math.abs(Ki-Kf)/Ki*100).toFixed(2)
            $(`#v1i_A${i}`).text(V1i)
            $(`#v1f_A${i}`).text(V1f)
            $(`#v2f_A${i}`).text (V2f)
            $(`#pi_A${i}`).text(Pi)
            $(`#pf_A${i}`).text(Pf)
            $(`#ki_A${i}`).text(Ki)
            $(`#kf_A${i}`).text(Kf)
            $(`#diff_p_A${i}`).text(difference_p)
            $(`#diff_k_A${i}`).text(difference_k)
        }
        //table2
        L1 = Number($("#l1_B").val())
        console.log(L1)
        L2 = Number($("#l2_B").val())
        M1 = Number($("#m1_B").val())
        M2 = Number($("#m2_B").val())
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let T1i = Number($(`#t1i_B${i}`).val())
            let T1f = Number($(`#t1f_B${i}`).val())
            let T2f = Number($(`#t2f_B${i}`).val())
            let V1i = (L1 / T1i).toFixed(4)
            let V1f = (L1 / T1f).toFixed(4)
            let V2f = (L2 / T2f).toFixed(4)
            let P1i = (M1 * V1i).toFixed(4)
            let P1f = (M1 * V1f).toFixed(4)
            let P2f = (M2 * V2f).toFixed(4)
            let K1i = ((1/2)*(M1*(V1i)*(V1i))).toFixed(4)
            let K1f = ((1/2)*(M1*(V1f)*(V1f))).toFixed(4)
            let K2f = ((1/2)*(M2*(V2f)*(V2f))).toFixed(4)
            let Ki = K1i
            let Kf = Number(K1f) + Number(K2f)
            let Pi = P1i
            let Pf = (Number(P2f) + Number(P1f)).toFixed(4)
            let difference_p=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
            let difference_k=(Math.abs(Ki-Kf)/Ki*100).toFixed(2)
            $(`#v1i_B${i}`).text(V1i)
            $(`#v1f_B${i}`).text(V1f)
            $(`#v2f_B${i}`).text(V2f)
            $(`#pi_B${i}`).text(Pi)
            $(`#pf_B${i}`).text(Pf)
            $(`#ki_B${i}`).text(Ki)
            $(`#kf_B${i}`).text(Kf)
            $(`#diff_p_B${i}`).text(difference_p)
            $(`#diff_k_B${i}`).text(difference_k)
        }
        //table3
        L1 = Number($("#l1_C").val())
        L2 = Number($("#l2_C").val())
        M1 = Number($("#m1_C").val())
        M2 = Number($("#m2_C").val())
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let T1i = Number($(`#t1i_C${i}`).val())
            let Tf = Number($(`#tf_C${i}`).val())
            let V1i = (L1 / T1i).toFixed(4)
            let Vf_A = ((M1*V1i)/(M1+M2)).toFixed(4)
            let Vf_E = (L1 / Tf).toFixed(4)
            let P1i = (M1 * V1i).toFixed(4)
            let Pf_A = (M1 * Vf_A).toFixed(4)
            let Pf_E = (M1 * Vf_E).toFixed(4)
            let Pi = P1i
            let difference_p=(Math.abs(Pi-Pf_E)/Pf_A*100).toFixed(2)
            let Ki = ((1/2)*(M1*(V1i)*(V1i))).toFixed(4)
            let Kf_A = ((1/2)*((M1+M2)*(Vf_A)*(Vf_A))).toFixed(4)
            let Kf_E = ((1/2)*((M1+M2)*(Vf_E)*(Vf_E))).toFixed(4)
            let delta_kA = Number(Kf_A) - Number(Ki)
            console.log(delta_kA)
            let delta_kE = Number(Kf_E) - Number(Ki)
            console.log(delta_kE)
            let difference_k=(Math.abs(delta_kA-delta_kE)/Math.abs(delta_kA)*100).toFixed(2)
            $(`#v1i_C${i}`).text(V1i)
            $(`#vf_AC${i}`).text(Vf_A)
            $(`#vf_EC${i}`).text(Vf_E)
            $(`#pi_C${i}`).text(Pi)
            $(`#pf_AC${i}`).text(Pf_A)
            $(`#pf_EC${i}`).text(Pf_E)
            $(`#diff_p_C${i}`).text(difference_p)
            $(`#ki_C${i}`).text(Ki)
            $(`#ki_AC${i}`).text(Kf_A)
            $(`#ki_EC${i}`).text(Kf_E)
            $(`#diff_k_C${i}`).text(difference_k)
        }
        //table4
        L1 = Number($("#l1_D").val())
        L2 = Number($("#l2_D").val())
        M1 = Number($("#m1_D").val())
        M2 = Number($("#m2_D").val())
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let T1i = Number($(`#t1i_D${i}`).val())
            let Tf = Number($(`#tf_D${i}`).val())
            let V1i = (L1 / T1i).toFixed(4)
            let Vf_A = ((M1*V1i)/(M1+M2)).toFixed(4)
            let Vf_E = (L1 / Tf).toFixed(4)
            let P1i = (M1 * V1i).toFixed(4)
            let Pf_A = (M1 * Vf_A).toFixed(4)
            let Pf_E = (M1 * Vf_E).toFixed(4)
            let Pi = P1i
            let difference_p=(Math.abs(Pi-Pf_E)/Pf_A*100).toFixed(2)
            let Ki = ((1/2)*(M1*(V1i)*(V1i))).toFixed(4)
            let Kf_A = ((1/2)*((M1+M2)*(Vf_A)*(Vf_A))).toFixed(4)
            let Kf_E = ((1/2)*((M1+M2)*(Vf_E)*(Vf_E))).toFixed(4)
            let delta_kA = Number(Kf_A) - Number(Ki)
            let delta_kE = Number(Kf_E) - Number(Ki)
            let difference_k=(Math.abs(delta_kA-delta_kE)/Math.abs(delta_kA)*100).toFixed(2)
            $(`#v1i_D${i}`).text(V1i)
            $(`#vf_AD${i}`).text(Vf_A)
            $(`#vf_ED${i}`).text(Vf_E)
            $(`#pi_D${i}`).text(Pi)
            $(`#pf_AD${i}`).text(Pf_A)
            $(`#pf_ED${i}`).text(Pf_E)
            $(`#diff_p_D${i}`).text(difference_p)
            $(`#ki_D${i}`).text(Ki)
            $(`#ki_AD${i}`).text(Kf_A)
            $(`#ki_ED${i}`).text(Kf_E)
            $(`#diff_k_D${i}`).text(difference_k)
        }
        //table5
        L1 = Number($("#l1_E").val())
        L2 = Number($("#l2_E").val())
        M1 = Number($("#m1_E").val())
        M2 = Number($("#m2_E").val())
        for (let i = 1; i <= 5; i++) {
            console.log(i)
            let T1i = Number($(`#t1i_E${i}`).val())
            let Tf = Number($(`#tf_E${i}`).val())
            let V1i = (L1 / T1i).toFixed(4)
            let Vf_A = ((M1*V1i)/(M1+M2)).toFixed(4)
            let Vf_E = (L1 / Tf).toFixed(4)
            let P1i = (M1 * V1i).toFixed(4)
            let Pf_A = (M1 * Vf_A).toFixed(4)
            let Pf_E = (M1 * Vf_E).toFixed(4)
            let Pi = P1i
            let difference_p=(Math.abs(Pi-Pf_E)/Pf_A*100).toFixed(2)
            let Ki = ((1/2)*(M1*(V1i)*(V1i))).toFixed(4)
            let Kf_A = ((1/2)*((M1+M2)*(Vf_A)*(Vf_A))).toFixed(4)
            let Kf_E = ((1/2)*((M1+M2)*(Vf_E)*(Vf_E))).toFixed(4)
            let delta_kA = Number(Kf_A) - Number(Ki)
            let delta_kE = Number(Kf_E) - Number(Ki)
            let difference_k=(Math.abs(delta_kA-delta_kE)/Math.abs(delta_kA)*100).toFixed(2)
            $(`#v1i_E${i}`).text(V1i)
            $(`#vf_AE${i}`).text(Vf_A)
            $(`#vf_EE${i}`).text(Vf_E)
            $(`#pi_E${i}`).text(Pi)
            $(`#pf_AE${i}`).text(Pf_A)
            $(`#pf_EE${i}`).text(Pf_E)
            $(`#diff_p_E${i}`).text(difference_p)
            $(`#ki_E${i}`).text(Ki)
            $(`#ki_AE${i}`).text(Kf_A)
            $(`#ki_EE${i}`).text(Kf_E)
            $(`#diff_k_E${i}`).text(difference_k)
        }
    })
    $("#clear").click(function () {
        $("#l1_A").val('')
        $("#l2_A").val('')
        $("#m1_A").val('')
        $("#m2_A").val('')
        $("#l1_B").val('')
        $("#l2_B").val('')
        $("#m1_B").val('')
        $("#m2_B").val('')
        $("#l1_C").val('')
        $("#l2_C").val('')
        $("#m1_C").val('')
        $("#m2_C").val('')
        $("#l1_D").val('')
        $("#l2_D").val('')
        $("#m1_D").val('')
        $("#m2_D").val('')
        $("#l1_E").val('')
        $("#l2_E").val('')
        $("#m1_E").val('')
        $("#m2_E").val('')

        for (let i = 1; i <= 5; i++) {
            $(`#t1i_A${i}`).val('')
            $(`#t1f_A${i}`).val('')
            $(`#t2f_A${i}`).val('')
            $(`#t1i_B${i}`).val('')
            $(`#t1f_B${i}`).val('')
            $(`#t2f_B${i}`).val('')
            $(`#t1i_C${i}`).val('')
            $(`#tf_C${i}`).val('')
            $(`#t1i_D${i}`).val('')
            $(`#tf_D${i}`).val('')
            $(`#t1i_E${i}`).val('')
            $(`#tf_E${i}`).val('')
            $(`#v1i_A${i}`).text('')
            $(`#v1f_A${i}`).text('')
            $(`#v2f_A${i}`).text('')
            $(`#pi_A${i}`).text('')
            $(`#pf_A${i}`).text('')
            $(`#v1i_B${i}`).text('')
            $(`#v1f_B${i}`).text('')
            $(`#v2f_B${i}`).text('')
            $(`#p1i_B${i}`).text('')
            $(`#p1f_B${i}`).text('')
            $(`#p2f_B${i}`).text('')
            $(`#pi_B${i}`).text('')
            $(`#pf_B${i}`).text('')
            $(`#diff_B${i}`).text('')
            $(`#v1i_C${i}`).text('')
            $(`#v1f_C${i}`).text('')
            $(`#v2f_C${i}`).text('')
            $(`#p1i_C${i}`).text('')
            $(`#p1f_C${i}`).text('')
            $(`#p2f_C${i}`).text('')
            $(`#pi_C${i}`).text('')
            $(`#pf_C${i}`).text('')
            $(`#diff_C${i}`).text('')
            $(`#v1i_D${i}`).text('')
            $(`#v1f_D${i}`).text('')
            $(`#v2i_D${i}`).text('')
            $(`#v2f_D${i}`).text('')
            $(`#p1i_D${i}`).text('')
            $(`#p1f_D${i}`).text('')
            $(`#p2i_D${i}`).text('')
            $(`#p2f_D${i}`).text('')
            $(`#pi_D${i}`).text('')
            $(`#pf_D${i}`).text('')
            $(`#diff_D${i}`).text('')
            $(`#v1i_E${i}`).text('')
            $(`#v1f_E${i}`).text('')
            $(`#v2i_E${i}`).text('')
            $(`#v2f_E${i}`).text('')
            $(`#p1i_E${i}`).text('')
            $(`#p1f_E${i}`).text('')
            $(`#p2i_E${i}`).text('')
            $(`#p2f_E${i}`).text('')
            $(`#pi_E${i}`).text('')
            $(`#pf_E${i}`).text('')
            $(`#diff_E${i}`).text('')
        }
    })
})