$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/ver_usuario/",
        crossDomain: true,
        headers: { 'Authorization': 'Token '+ Cookies.get('token') },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            for (var j = 0 ; j< respuesta.length;j++){
                var usua = respuesta[j].cod_usuario;
                var fn = respuesta[j].first_name;
                var ln = respuesta[j].last_name;
                var user = respuesta[j].username;
                var ema = respuesta[j].email;
                var act = respuesta[j].is_active;
                $("#contenedor_Datos").append(
                    '<tr>'
                    +'<td>'
                    + usua
                    +'</td>'
                    +'<td>'
                    + fn
                    +'</td>'
                    +'<td>'
                    + ln
                    +'</td>'
                    +'<td>'
                    + user
                    +'</td>'
                    +'<td>'
                    + ema
                    +'</td>'
                    +'<td>'
                    + act
                    +'</td>'
                    +'</tr>'
                );	
            }
            
        }
    });
    $("#eliminar_usuario").click(function(){
        var id = document.getElementById('id_usuario').value;
        $.ajax({           
            url: 'http://127.0.0.1:8000/api/usuario/'+id,
            type: 'DELETE',
            crossDomain: true,
            headers: { 'Authorization': 'Token '+ Cookies.get('token') },
            
        })
        
    });


});


/*
    <script type="text/javascript">
    var URL = "http://127.0.0.1:8000/api/";
    $(document).ready(function() {

        $.ajax({
            type: 'GET',
            url: URL+"ver_usuario/",
            crossDomain: true,
            headers : { 'Authorization' : 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",

            success: function(respuesta) {
                $(respuesta).each(function() {
                    var codigo = $('<td></td>');
                    codigo.text(this.cod_usuario);
                    var nombre = $('<td></td>');
                    nombre.text(this.first_name);
                    var apellido = $('<td></td>');
                    apellido.text(this.last_name);
                    var usuario = $('<td></td>');
                    usuario.text(this.username);
                    var mail = $('<td></td>');
                    mail.text(this.email);
                    var estado = $('<td></td>');
                    estado.text(this.is_active);

                    var tr = $('<tr></tr>');
                    tr.append(codigo);
                    tr.append(nombre);
                    tr.append(apellido);
                    tr.append(usuario);
                    tr.append(mail);
                    tr.append(estado);
                    $('tbody').append(tr);
                });
            }
        });


        

    });
    </script>*/
