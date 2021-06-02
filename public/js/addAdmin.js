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

    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    $('#adminForm').submit(function(event){
        event.preventDefault()

        var adminInput = {
            name : $('#adminName').val(),
            email : $('#emailId').val(),
            password : $('#passWord').val()
        }

        var apiUrl, method; 

        if(!id) {
            method = 'POST';
            apiUrl = '/api/admin'
        } else {
            method = 'PUT';
            apiUrl = `/api/admin/${id}`
        }

        $.ajax({
            type: method,
            url: apiUrl,
            data: adminInput,
            success: function(res){
                window.location.href='/admin'
            },
            error: function(error){
                console.log(error)
            }
        })
    })

})