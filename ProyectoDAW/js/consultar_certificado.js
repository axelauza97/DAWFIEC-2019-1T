$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8000/api/certificado/',
        type:'GET',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",   
        success: function(respuesta) {
            for (var j = 0 ; j< respuesta.length;j++){
                var certi = respuesta[j].cod_certificado;
                var norm = respuesta[j].cod_norma;
                var tcerti = respuesta[j].tipo_certificado;
                var caudi = respuesta[j].cod_Auditor;
                var cnome = respuesta[j].nombre_empresa;
                var crepre = respuesta[j].representante;
                var cfei = respuesta[j].fecha_inicio;
                var dcerti = respuesta[j].dias_certificacion;
                var cfeh = respuesta[j].fecha_fin;
                var costo = respuesta[j].costo;
                var estado = respuesta[j].estado_certificado.slice(7,14);
                var obse = respuesta[j].observaciones;

                $("#contenedor_datos_certificado").append(
                    '<tr>'
                    +'<td>'
                    + certi
                    +'</td>'
                    +'<td>'
                    + norm
                    +'</td>'
                    +'<td>'
                    + tcerti
                    +'</td>'
                    +'<td>'
                    + caudi
                    +'</td>'
                    +'<td>'
                    + cnome
                    +'</td>'
                    +'<td>'
                    + crepre
                    +'</td>'
                    +'<td>'
                    + cfei
                    +'</td>'
                    +'<td>'
                    + dcerti
                    +'</td>'
                    +'<td>'
                    + cfeh
                    +'</td>'
                    +'<td>'
                    + costo
                    +'</td>'
                    +'<td>'
                    + estado
                    +'</td>'
                    +'<td>'
                    + obse
                    +'</td>'
                    +'</tr>'
                );	
            }
        }
    })
})