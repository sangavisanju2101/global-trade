$(document).ready(function(){
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    var checkbox = localStorage.getItem('checkbox');

    //remember me function
    $('#rememberme').click(function(){
        var username = $('#userName').val();
        var password = $('#password').val();

        if ($('#rememberMe').prop('checked')==true){
            if(username != ''){
                localStorage.setItem('username' ,username)            
            }
            if(password != ''){
                localStorage.setItem('password' ,password)            
            }
            localStorage.setItem('checked', checkbox)
        }else{
            localStorage.clear();
        }   
    })

    //show password function
    $('#showpwd').click(function(){
        $(this).is(':checked') ? $('#password').attr('type', 'text') : $('#password').attr('type', 'password');
    });

    //login button action
    $('#loginBtn').click(function(){
        window.location.href = 'http://localhost:3000/home'
    })
});