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
                Cookies.set('token', data.token, { expires: 7 });
                Cookies.set('idus', data.cod, { expires: 7 });
            }else{
                alert("no es admin")
                window.location.replace("./page_home.html");
                Cookies.set('token', data.token, { expires: 7 });
                Cookies.set('idus', data.cod, { expires: 7 });
            }
          }
        
    })
   

});
