$(document).ready(function () {

    var password = $("#password").val();
    var repassword = $("#repassword").val();
    // Register button
    $('#regbtn').click(function () {
        if (password == repassword) {
            alert("Successfully registered")
            window.location.href = "http://localhost:3000/login"
        } else {
            alert("Password didn't match")
        }
    })
});