$(document).ready(function() {
    //cliente-datos
    $('#guardar').click(function() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/cliente/',
            type:'GET',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",
    
            success: function(respuesta) {
                //codigo del cliente
                var rucc = document.getElementsByName("rucliente").value;
                var nombres = document.getElementsByName('namecliente').value;
                var repre = document.getElementsByName("rpres").value;
                var correos = document.getElementsByName("email").value;
                var telefonos = document.getElementsByName("tel").value;
                var direc = document.getElementsByName("Dirección").value;
                var codigo = toString(respuesta.length+1);
                var norma = document.getElementsByName("codnorma").value;
                var costo = document.getElementsByName("costo").value;
                var fecha = document.getElementsByName("fcot").value;
                var estado = "1";
                var usuario = "patricio tovar";
                console.log(respuesta);
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/cliente/',
                    type:'POST',
                    crossDomain: true,
                    headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
                    data: { "cod_cliente": codigo,"cod_usuario": usuario,"correo": correos,"direccion": direc,"nombre_cliente": nombres
                    ,"representante": repre,"ruc": rucc,"telefono": telefonos },
                    dataType: "json",
                })
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/proforma/',
                    type:'POST',
                    crossDomain: true,
                    headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
                    data: { cod_proforma: codigo,cod_cliente:codigo,cod_norma:norma,costo:costo,
                            fecha_proforma:fecha,estado_proforma:estado,cod_usuario:usuario},
                    dataType: "json",
    
                })
            }    
        })

    
    })

});