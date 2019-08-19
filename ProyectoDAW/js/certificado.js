$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/certificado/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            for (var j = 0 ; j< respuesta.length;j++){
                var cc = respuesta[j].cod_certificado;
                var ne = respuesta[j].nombre_empresa;
                var re = respuesta[j].representante;
                var tc= respuesta[j].tipo_certificado;                              
                var ca = respuesta[j].cod_Auditor;               
                var ob = respuesta[j].observaciones; 
                var ct = respuesta[j].costo; 
                $("#contenedor_datos").append(
                    '<tr>'
                    +'<td>'
                    + cc
                    +'</td>'
                    +'<td>'
                    + ne
                    +'</td>'
                    +'<td>'
                    + re
                    +'</td>'
                    +'<td>'
                    + tc
                    +'</td>'
                    +'<td>'
                    + ca
                    +'</td>'
                    +'<td>'
                    + ob
                    +'</td>'
                    +'<td>'
                    + ct
                    +'</td>'
                    +'</tr>'
                );	
            }
            
        }
    });
    $("#eliminar_certificado").click(function(){
        var id = document.getElementById('id_certificado').value;
        $.ajax({           
            url: 'http://127.0.0.1:8000/api/certificado/'+id,
            type: 'DELETE',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            
        })
        
    });
});