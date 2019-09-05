$(document).ready(function() {
    var URL = 'http://localhost:8000/api/'
    var codusuario="";
    var jsonData=localStorage.getItem("proforma");
    jsonData=JSON.parse(jsonData);
    console.log(jsonData.cliente);
    $('[name=namecliente]').val(jsonData.cliente);
    $('[name=rucliente]').val(jsonData.ruc);
    $('[name=rpres]').val(jsonData.representante);
    $('[name=email]').val(jsonData.correo);
    $('[name=tel]').val(jsonData.telefono);
    $('[name=dir]').val(jsonData.direccion);
    $('[name=codnorma]').val(jsonData.norma);
    $('[name=costo]').val(jsonData.costo);
    $('[name=fcot]').val(jsonData.fecha);

    $.ajax({
        type: 'GET',
        url: URL + "tcertificado/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text(this.tipo_certificado);
                tipo.addClass(this.cod_tipo_cer);
                $('#tipo_certificado').append(tipo);
            });
        }
    });

    $.ajax({
        type: 'GET',
        url: URL + "auditor/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text(this.nombres_auditor+" "+this.apellidos_auditor);
                tipo.addClass(this.cod_auditor);
                $('#auditor').append(tipo);
            });
        }
    });
    $.ajax({
        type: 'GET',
        url: URL + "certificado_estado/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text(this.descripcion);
                tipo.addClass(this.cod_tipo_cer);
                $('#estado').append(tipo);
            });
        }
    });
})