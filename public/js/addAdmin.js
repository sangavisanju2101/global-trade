$(document).ready(function(){

    $('#logoutbtn').click(function(){
        window.location.href = 'http://localhost:3000'
    })

    $('#homebtn').click(function(){
        window.location.href = 'http://localhost:3000/home'
    })

    $('#adminbtn').click(function(){
        window.location.href = 'http://localhost:3000/admin'
    })

    $('#vendorbtn').click(function(){
        alert("Working");
    })

    $('#adminForm').submit(function(){
        $.ajax({
            type: 'PUT',
            url: '/api/admin',
            success: function(res){
                alert("Admin added Successfully");
                window.location.href='/admin'
            },
            error: function(error){
                console.log(error)
            }
        })
    })

})