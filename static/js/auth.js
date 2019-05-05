window.onload=function(){
    $(document).ready(function(){
        $('#submit').click(function(){
            let data=new Object()
            data.password=$('#password').val()
            const stringData=JSON.stringify(data)
            $.ajax({
                type:'POST',
                url:'/api/login',
                data:stringData,
                dataType:'JSON',
                contentType:'application/json; charset=utf-8',
                traditional:true,
                processdata:false,
                success:function(result){
                    console.log(result)
                    alert(`${result['message']}`)
                    window.location.href='/views/list'
                },
                error:function(result){
                    alert(`${result['responseJSON']['message']}`)
                    return false
                }
            })
        })
    })
}