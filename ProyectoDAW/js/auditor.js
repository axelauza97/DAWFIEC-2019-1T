$(document).ready(function() {
    var URL = "http://127.0.0.1:8000/api/"
    $.ajax({
        type: 'GET',
        url: URL + "auditor/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            for (var j = 0; j < respuesta.length; j++) {
                var codigo = respuesta[j].cod_auditor;
                var nombres = respuesta[j].nombres_auditor;
                var apellidos = respuesta[j].apellidos_auditor;
                var ruc = respuesta[j].cedula_auditor;
                var telefono = respuesta[j].telefono;
                var domicilio = respuesta[j].direccion;

                $("#contenedor_Datos").append(
                    '<tr>' +
                    '<td>' +
                    codigo +
                    '</td>' +
                    '<td>' +
                    nombres +
                    '</td>' +
                    '<td>' +
                    apellidos +
                    '</td>' +
                    '<td class"cedula">' +
                    ruc +
                    '</td>' +
                    '<td>' +
                    telefono +
                    '</td>' +
                    '<td>' +
                    domicilio +
                    '</td>' +
                    '</tr>'
                );
            }


        }
    });
    $.ajax({
        type: 'GET',
        url: URL + "tipo_auditor/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text("[" + this.tipo_auditor + "] " + this.descripcion);
                tipo.addClass(this.cod_auditor);
                $('#tipo').append(tipo);
            });
        }
    });


    $('.modificar').click(function() {
        $.ajax({
            type: 'GET',
            url: URL + "auditor/" + $("#id_auditor").val(),
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",

            success: function(respuesta) {
                $(respuesta).each(function() {
                    $(".nombres").val(this.nombres_auditor);
                    $(".cedula_a").val(this.cedula_auditor);
                    $(".apellidos").val(this.apellidos_auditor);
                    $(".telefono").val(this.telefono);
                    $(".correo").val(this.correo);
                    $(".direccion").val(this.direccion);
                });
            }
        });
        return false;
    });

    $('.buscar').click(function() {
        search($('#id_auditor').val());
        return false;
    });

    function search(value) {

        $('tbody tr').each(function() {
            var cedula = $(this).find('.cedula');
            if (cedula.text().indexOf(value.toLowerCase()) >= 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }


    $("#eliminar_auditor").click(function() {
        var id = document.getElementById('id_auditor').value;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/auditor/' + id,
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