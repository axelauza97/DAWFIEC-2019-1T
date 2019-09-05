$(document).ready(function() {
    var URL = "http://127.0.0.1:8000/api/";

    function initateTable() {
        $.ajax({
            type: 'GET',
            url: URL + "certificado/",
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",

            success: function(respuesta) {
                $("#contenedor_datos").empty();
                for (var j = 0; j < respuesta.length; j++) {
                    var cc = respuesta[j].cod_certificado;
                    var ne = respuesta[j].cod_cliente.nombre_cliente;
                    var re = respuesta[j].cod_cliente.representante;
                    var tc = "[" + respuesta[j].tipo_certificado.tipo_certificado + "]" +
                        respuesta[j].tipo_certificado.descripcion;
                    var ca = respuesta[j].cod_Auditor.nombres_auditor + " " +
                        respuesta[j].cod_Auditor.apellidos_auditor;
                    var ob = respuesta[j].observaciones;
                    var ct = respuesta[j].costo;
                    $("#contenedor_datos").append(
                        '<tr>' +
                        '<td>'+
                        cc +
                        '</td>' +
                        '<td>' +
                        ne +
                        '</td>' +
                        '<td>' +
                        re +
                        '</td>' +
                        '<td>' +
                        tc +
                        '</td>' +
                        '<td>' +
                        ca +
                        '</td>' +
                        '<td>' +
                        ob +
                        '</td>' +
                        '<td>' +
                        ct +
                        '</td>' +
                        '</tr>'
                    );
                }

            }
        });
    }
    initateTable();
    $.ajax({
        type: 'GET',
        url: URL + "norma/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var norma = $('<option></option>');
                norma.text(this.nombre_norma);
                norma.addClass(this.cod_norma);
                $('#norma').append(norma);
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
                tipo.text('[' + this.tipo_certificado + ']' + this.descripcion);
                tipo.addClass(this.cod_tipo_cer);
                $('#tcertificado').append(tipo);
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
                tipo.text('[' + this.tipo_auditor.tipo_auditor + ']' + this.nombres_auditor + this.apellidos_auditor);
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
                var cliente = $('<option></option>');
                cliente.text('[' + this.ruc + ']' + this.nombre_cliente);
                cliente.addClass(this.cod_cliente);
                $('#cliente').append(cliente);
            });
        }
    });
    var codusuario="";
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
                    $(".inicio").val(this.fecha_inicio);
                    $(".dias").val(this.dias_certificacion);
                    $(".fin").val(this.fecha_fin);
                    $(".costo").val(this.costo);
                    $(".observacion").val(this.observaciones);

                    var norma = this.cod_norma.cod_norma;
                    $("#norma option").removeClass("selected");
                    $("#norma option." + norma).prop('selected', true);
                    $("#norma option." + norma).addClass("selected");

                    var tcertificado = this.tipo_certificado.cod_tipo_cer;
                    $("#tcertificado option").removeClass("selected");
                    $("#tcertificado option." + tcertificado).prop('selected', true);
                    $("#tcertificado option." + tcertificado).addClass("selected");

                    var auditor = this.cod_Auditor.cod_auditor;
                    $("#auditor option").removeClass("selected");
                    $("#auditor option." + auditor).prop('selected', true);
                    $("#auditor option." + auditor).addClass("selected");

                    var cliente = this.cod_cliente.cod_cliente;
                    $("#cliente option").removeClass("selected");
                    $("#cliente option." + cliente).prop('selected', true);
                    $("#cliente option." + cliente).addClass("selected");

                    var estado = this.estado_certificado.cod_es_cer;
                    $("#estado option").removeClass("selected");
                    $("#estado option." + estado).prop('selected', true);
                    $("#estado option." + estado).addClass("selected");
                    codusuario=this.cod_usuario.cod_usuario;

                });
            }
        });
        return false;
    });
    $("#actualizar").click(function() {
        var id = document.getElementById('id_certificado').value;
        var norma = $("#norma option:selected").attr('class');
        var tcertificado = $("#tcertificado option:selected").attr('class');
        var auditor = $("#auditor option:selected").attr('class');
        var cliente = $("#cliente option:selected").attr('class');
        var estado = $("#estado option:selected").attr('class');
        $.ajax({
            url: URL + 'certificado/update/' + id,
            type: 'PUT',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: {
                "cod_certificado": id,
                "cod_norma": norma.split(" ")[0],
                "tipo_certificado": tcertificado.split(" ")[0],
                "cod_Auditor": auditor.split(" ")[0],
                "cod_cliente": cliente.split(" ")[0],
                "fecha_inicio": $(".inicio").val(),
                "dias_certificacion": $(".dias").val(),
                "fecha_fin": $(".fin").val(),
                "costo": $(".costo").val(),
                "estado_certificado": estado.split(" ")[0],
                "cod_usuario":codusuario,
                "observaciones": $(".observacion").val()
            },
            dataType: "json",

            success: function(respuesta) {
                initateTable();
                btnCerrarPopup.click();
            }
        })

    });

    $("#eliminar_certificado").click(function() {
        var id = document.getElementById('id_certificado').value;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/certificado/delete/' + id,
            type: 'DELETE',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },

        })

    });
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

});