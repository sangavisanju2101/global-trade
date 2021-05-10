
$(document).ready(function () {
 
    var password1 = $("#password").val();
    var password2 = $("#confirmpwd").val();

    $("#btn").click(function(){
        if(password1 != password2){
            alert("Password didn't match")
        } else {
            alert("Password changed successfully");
            window.location.href = "/login"
        }
    })
})