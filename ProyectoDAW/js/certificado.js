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
});
/*
    <script type="text/javascript">
    var URL = "http://127.0.0.1:8000/api/";
    $(document).ready(function() {

        $.ajax({
            type: 'GET',
            url: URL+"estado_certificado/",
            crossDomain: true,
            headers : { 'Authorization' : 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",

            success: function(respuesta) {
                $(respuesta).each(function() {
                    var estado = $('<option></option>');
                    estado.text(this.estado_cer);
                    
                    $('select[name=trabajo]').append(estado);
                });
            }
        });

        $.ajax({
            type: 'GET',
            url: URL+"certificado/",
            crossDomain: true,
            headers : { 'Authorization' : 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",

            success: function(respuesta) {
                $(respuesta).each(function() {
                    var nombre = $('<td></td>');
                    nombre.text(this.nombre_empresa);
                    var nrepresentante = $('<td></td>');
                    nrepresentante.text(this.representante);
                    var tipo = $('<td></td>');

                    var texto_tipo=this.tipo_certificado;
                    texto_tipo=texto_tipo.split(":")[1];
                    tipo.text(texto_tipo);

                    var auditor = $('<td></td>');

                    var texto_auditor=this.cod_Auditor;
                    texto_auditor=texto_auditor.split(":")[1];
                    auditor.text(texto_auditor);
                    
                    var oobservaciones = $('<td></td>');
                    oobservaciones.text(this.observaciones);
                    
                    var ccosto = $('<td></td>');
                    ccosto.text(this.costo);

                    var tr = $('<tr></tr>');
                    tr.append(nombre);
                    tr.append(nrepresentante);
                    tr.append(tipo);
                    tr.append(auditor);
                    tr.append(oobservaciones);
                    tr.append(ccosto);
                    $('tbody').append(tr);
                });
            }
        });


        

    });
    </script>*/