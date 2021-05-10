$(document).ready(function(){

    var getUserFromLocal = localStorage.getItem("username"); 
    var getPassFromLocal = localStorage.getItem("password"); 
    var getCheckboxFromLocal = localStorage.getItem("checkbox"); 

    if(getUserFromLocal){
        $("#username").val(getUserFromLocal); 
    }

    if(getPassFromLocal){
        $("#password").val(getPassFromLocal); 
    }

    if(getCheckboxFromLocal){
        $("#rememberMe").prop('checked', true);
    }

    $("#rememberMe").click(function(){
        var userName = $('#username').val(); 
        var password = $('#password').val(); 

        if($("#rememberMe").prop('checked') == true ){
            if(userName != ''){
                localStorage.setItem("username", userName); 
            }

            if(password != ''){
                localStorage.setItem("password", password); 
            } 
            
            localStorage.setItem("checked", checkbox);

        } else {
            localStorage.clear(); 
        }

    })
})