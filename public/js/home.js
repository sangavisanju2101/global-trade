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
    
})