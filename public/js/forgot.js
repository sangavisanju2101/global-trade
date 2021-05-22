$(document).ready(function () {
    $('#showpwd').click(function(){
        if ($(this).is(":checked")) {
            $('#password').attr('type', 'text');
            $('#confirmpwd').attr('type', 'text');

        } else {
            $('#password').attr('type', 'password');
            $('#confirmpwd').attr('type', 'password');

        }
    });

    $('#resetBtn').click(function(){
        var password1 = $('#password').val();
        var password2 = $('#confirmpwd').val();

        if(password1 == password2){
            alert("Password changed successfully")
            window.location.href = 'http://localhost:3000/'
        } else {
            alert("Password didn't match")
        }
    })
})