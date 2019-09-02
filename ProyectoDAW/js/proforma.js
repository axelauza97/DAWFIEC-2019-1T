$(document).ready(function() {
    //cliente-datos
    $('#guardar').click(function() {
        $.ajax({
            url: 'http://localhost:8000/api/cantidadcp/',
            type:'GET',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",   
            success: function(respuesta) {
                console.log(respuesta.Clientes);
                var rucc = document.getElementsByName("rucliente").value;
                var nombres = document.getElementsByName('namecliente').value;
                var repre = document.getElementsByName("rpres").value;
                var correos = document.getElementsByName("email").value;
                var telefonos = document.getElementsByName("tel").value;
                var direc = document.getElementsByName("Dirección").value;
                var codigoc = (respuesta.Clientes);
                var norma = document.getElementsByName("codnorma").value;
                var costo = parseFloat(document.getElementsByName("costo").value);
                var fecha = document.getElementsByName("fcot").value;
                var estado = "1";
                var usuario = "rios";
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/cliente/create',
                    type:'POST',
                    crossDomain: true,
                    headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
                    data: { "cod_cliente": codigoc,"ruc": rucc,"nombre_cliente": nombres,"representante": repre,"correo": correos,"telefono": telefonos,"direccion": direc
                    ,"cod_usuario": usuario },
                    dataType: "json",
                })/*
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/proforma/create',
                    type:'POST',
                    crossDomain: true,
                    headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
                    data: { "cod_proforma": codigop,"cod_cliente":codigoc,"cod_norma":norma,"costo":costo,
                            "fecha_proforma":fecha,"estado_proforma":estado,"cod_usuario":usuario},
                    dataType: "json",
    
                })*/
            }    
        })

    
    })

});