$(document).ready(function(){

    $('#logoutbtn').click(function(){
        window.location.href = 'http://localhost:3000'
    })

    $('#homebtn').click(function(){
        window.location.href = 'http://localhost:3000/home'

    })

    $("#deletebtn").click(function(){
        var checked = $("input[type=checkbox]:checked").length; 
        if(!checked || checked >1){
            alert("Please select only one checkbox to delete");
            return;
        }
 
         var conf = confirm("Are you sure you want to delete?");
 
         if(conf){
             var all = $("input:checkbox");
             var checked = all.filter(":checked");
 
             var checkedIds = checked.map(function(){
                 return this.id;
             })
 
             $.ajax({
                 type: 'DELETE',
                 url: `/api/admin/${checkedIds[0]}`,
                 success: function(res){
                     alert("Deleted successfully");
                     window.location.href='/admin'
                 },
                 error: function(error){
                     console.log(error)
                 }
             })
         }
     })

     $('#addadminbtn').click(function(){
        window.location.href = 'http://localhost:3000/admin/add'
    })

    $("#editbtn").click(function(){
        var checked = $("input[type=checkbox]:checked").length; 
        if(!checked || checked >1){
            alert("Please select only one checkbox to edit");
            return;
        }

        var all = $("input:checkbox");
            var checked = all.filter(":checked");

            var checkedIds = checked.map(function(){
                return this.id;
            })
            window.location.href=`/admin/edit/${checkedIds[0]}`;
    })
})