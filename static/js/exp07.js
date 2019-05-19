$(document).ready(function(){
    $('#calculate').click(function(){
        let m = Number($('#table1m').val()) | Number($('#table2m').val())
        let r = Number($('#table1r').val()) | Number($('#table2r').val())
        for(let i=1;i<=2;i++){
            let hs=0
            let ts=0
            let accs=0
            let Tes=0
            for(let j=1;j<=5;j++){
                let h = Number($(`#table${i}h${j}`).val())
                let t = Number($(`#table${i}t${j}`).val())
                hs += h
                ts += t
                let a = (2*h)/(t*t)
                $(`#table${i}a${j}`).text(a)
                let Te = m*(9.8-a)
                $(`#table${i}Te${j}`).text(Te)
                Tes+=Te
                accs += a
            }
            let hAvr=hs/5
            let tAvr=ts/5
            let aAvr=accs/5
            let TeAvr=Tes/5
            $(`#table${i}hAvr`).text(hAvr)
            $(`#table${i}tAvr`).text(tAvr)
            $(`#table${i}aAvr`).text(aAvr)
            $(`#table${i}TeAvr`).text(TeAvr)
            $(`#table${i}I`).text(m*r*r*(9.8/aAvr-1))
        }
        let If=Number($('#table1I').text())
        let Ii=Number($('#table2I').text())
        $(`#table3Ii`).text(Ii)
        $(`#table3If`).text(If)
        for(let j=3;j<=4;j++){
            for(let i=1;i<=5;i++){
                let wi,wf
                if($(`#table${j}w${i}i`).val()===""){
                    let ti = Number($(`#table${j}t${i}i`).val())
                    wi = (2*Math.PI)/(5*ti)
                    $(`#table${j}w${i}i`).val(wi)
                }
                else{
                    wi=Number($(`#table${j}w${i}i`).val())
                }
                if($(`#table${j}w${i}f`).val()===""){
                    let tf = Number($(`#table${j}t${i}f`).val())
                    wf = (2*Math.PI)/(5*tf)
                    $(`#table${j}w${i}f`).val(wf)
                }
                else{
                    wf=Number($(`#table${j}wf${i}`).val())
                }
                let li=Ii*wi
                $(`#table${j}l${i}i`).text(li)
                let lf=If*wf
                $(`#table${j}l${i}f`).text(lf)
                let ldiff=Math.abs(lf-li)/li*100
                $(`#table${j}l${i}diff`).text(ldiff)
                let Ki=0.5*Ii*wi*wi
                $(`#table${j}K${i}i`).text(Ki)
                let Kf=0.5*If*wf*wf
                $(`#table${j}K${i}f`).text(Kf)
                let Kfth=0.5*Ii*wi*wi*Ii/If
                $(`#table${j}K${i}fth`).text(Kfth)
                let Kdiff=Math.abs(Kfth*Kf)/Kfth*100
                $(`#table${j}K${i}diff`).text(Kdiff)
            }
            let Md=Number($(`#table4Md`).val())
            let R=Number($(`#table4R`).val())
            let Mr=Number($(`#table4Mr`).val())
            let R1=Number($(`#table4R1`).val())
            let R2=Number($(`#tableR2`).val())
            Ii = 0.5*Md*R*R
            If = 0.5*(Md+Mr)*R*R
            $(`#table4Ii1`).text(Ii)
            $(`#table4If1`).text(If)
            $(`#table4Ii2`).text(Ii)
            $(`#table4If2`).text(If)
        }

    })
})