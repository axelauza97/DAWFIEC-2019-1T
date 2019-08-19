$("#ig_correo").click(function(){
    var nombres = document.getElementById('nombres').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var descripcion = document.getElementById('mensaje').value;
    $.ajax({
        url: 'http://127.0.0.1:8000/api/sendemail',
        method:'POST',
        data:{
            "name":nombres,
            "mail":email,
            "telefono":telefono,
            "mensaje":descripcion
        }
        
    })
    alert("Mensaje eviado");
    document.getElementById('nombres').value='';
    document.getElementById('telefono').value='';
    document.getElementById('email').value='';
    document.getElementById('mensaje').value='';
});
