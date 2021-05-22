$(document).ready(function () {
    $('#showpwd').click(function(){
        if ($(this).is(":checked")) {
            $('#password').attr('type', 'text');
            $('#repassword').attr('type', 'text');

        } else {
            $('#password').attr('type', 'password');
            $('#repassword').attr('type', 'password');

        }
    });

    $('#regBtn').click(function(){
        var password1 = $('#password').val();
        var password2 = $('#repassword').val();

        if(password1 == password2){
            alert("Registered Successfully")
            window.location.href = 'http://localhost:3000/'
        } else {
            alert("Password didn't match")
        }
    })
})