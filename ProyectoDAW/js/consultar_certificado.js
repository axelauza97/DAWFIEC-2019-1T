$(document).ready(function() {
    var URL = "http://localhost:8000/api/"
    $.ajax({
        url: URL+'certificado/',
        type:'GET',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",   
        success: function(respuesta) {
            for (var j = 0 ; j< respuesta.length;j++){
                console.log(respuesta[j].cod_norma.nombre_norma);
                var certi = respuesta[j].cod_certificado;
                var norm = respuesta[j].cod_norma.nombre_norma;
                var tcerti = respuesta[j].tipo_certificado.tipo_certificado;
                var caudi = respuesta[j].cod_Auditor.nombres_auditor+" "+respuesta[j].cod_Auditor.apellidos_auditor;
                var cnome = respuesta[j].cod_cliente.nombre_cliente;
                var crepre = respuesta[j].cod_cliente.representante;
                var cfei = respuesta[j].fecha_inicio;
                var dcerti = respuesta[j].dias_certificacion;
                var cfeh = respuesta[j].fecha_fin;
                var costo = respuesta[j].costo;
                var estado = respuesta[j].estado_certificado.estado_cer;
                var obse = respuesta[j].observaciones;

                $("#contenedor_Datos").append(
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

    $.ajax({
        type: 'GET',
        url: URL + "norma/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text(this.nombre_norma);
                tipo.addClass(this.cod_norma);
                $('#norma').append(tipo);
            });
        }
    });
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
        url: URL + "cliente/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text(this.nombre_cliente);
                tipo.addClass(this.cod_cliente);
                $('#empresa').append(tipo);
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

    $('.modificar').click(function() {
        $.ajax({
            type: 'GET',
            url: URL + "certificado/" + $("#id_certificado").val(),
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",
            success: function(respuesta) {
                $(respuesta).each(function() {
                    $(".f_inicio").val(this.fecha_inicio);
                    $(".d_certificacion").val(this.dias_certificacion);
                    $(".f_fin").val(this.fecha_fin);
                    $(".costo").val(this.costo);
                    $(".obs").val(this.observaciones);
                    var norma = this.cod_norma.nombre_norma;
                    $(".option").removeClass("selected");
                    $("option."+norma).prop('selected', true);
                    $("option."+norma).addClass("selected");
                })
            }
        })


    })


    var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    });
})

