$(document).ready(function() {
    var URL = "http://127.0.0.1:8000/api/";
    $.ajax({
        type: 'GET',
        url: URL+"certificado/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $("#contenedor_Datos").empty();
            for (var j = 0; j < respuesta.length; j++) {
                var cc = respuesta[j].cod_certificado;
                var ne = respuesta[j].cod_cliente.nombre_cliente;
                var re = respuesta[j].cod_cliente.representante;
                var tc = "["+respuesta[j].tipo_certificado.tipo_certificado+"]"+
                respuesta[j].tipo_certificado.descripcion;
                var ca = respuesta[j].cod_Auditor.nombres_auditor+" "+
                respuesta[j].cod_Auditor.apellidos_auditor;
                var ob = respuesta[j].observaciones;
                var ct = respuesta[j].costo;
                $("#contenedor_datos").append(
                    '<tr>' +
                    '<td>' +
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
        var id = document.getElementById('id_libro').value;
    });

    btnCerrarPopup.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });

});