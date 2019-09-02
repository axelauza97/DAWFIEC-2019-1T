$(document).ready(function() {
    
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
                var rucc = document.getElementById("rucliente").value;
                console.log("rucc",rucc);
                var nombres = document.getElementById('namecliente').value;
                console.log("nombres",nombres);
                var repre = document.getElementById("rpres").value;
                console.log("repre",repre);
                var correos = document.getElementById("email").value;
                console.log("correo",correos);
                var telefonos = document.getElementById("tel").value;
                console.log("telefono",telefonos);
                var direc = document.getElementById("dir").value;
                console.log("direc",direc);
                var codigoc = (respuesta.Clientes +1).toString();
                var codigop = (respuesta.Clientes).toString();
                console.log("codigoc",codigoc);
                var norma = document.getElementById("codnorma").value;
                var costo = parseFloat(document.getElementById("costo").value);
                console.log("costp",costo);
                var fecha = document.getElementById("fcot").value;
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
                })
                
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/proforma/create',
                    type:'POST',
                    crossDomain: true,
                    headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
                    data: { "cod_proforma": codigop,"cod_cliente":codigoc,"cod_norma":norma,"costo":costo,
                            "fecha_proforma":fecha,"estado_proforma":estado,"cod_usuario":usuario},
                    dataType: "json",
    
                })  
            }    
        })
           // $("#mcorrecto").css("display", "block");
            $("#mcorrecto").slideDown(500).delay(900).fadeIn(500);
            $("#rucliente").val("");
            $("#namecliente").val("");
            $("#rpres").val("");
            $("#email").val();
            $("#tel").val();
            $("#dir").val();
            $("#codnorma").val();
            $("#costo").val();
            $("#fcot").val();
    })
});