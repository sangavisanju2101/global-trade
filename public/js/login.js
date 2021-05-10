$(document).ready(function(){
    var username = $("#username").val(); 
    var password = $("#password").val(); 
    var showpwd = $("#showpwd"); 
    var forgot = $("#forgot"); 

    $(showpwd).click(function(){
        if($(this).is(":checked")){
            $(password).attr("type","text")
        } else {
            $(password).attr("type","password")
        }
    })

    $(forgot).click(function(){
        window.location.href = "http://localhost:3000/forgotpwd"
    })

    $("#registration").click(function(){
        window.location.href = "http://localhost:3000/registration"
    })
})