$("#ingresar").click(function(){
    var username = document.getElementById('user').value;
 
    var pass = document.getElementById('pass').value;
    
    $.ajax({
        url: 'http://127.0.0.1:8000/api/rest-auth/',
        method:'POST',
        data:{
            "username":username,
            "password":pass
        },  success: function(data) {
            
            if(data.isAdmin){
                alert("esAdmin") 
                window.location.replace("./page_administrador.html");
                document.cookie = "token"+"="+data.token + "; expires=Thu, 01 Jan 2020 00:00:00 GMT"
            }else{
                alert("no es admin")
                window.location.replace("./page_home.html");
                document.cookie = "token"+"="+data.token + "; expires=Thu, 01 Jan 2020 00:00:00 GMT"
            }
          }
        
    })
   

});
