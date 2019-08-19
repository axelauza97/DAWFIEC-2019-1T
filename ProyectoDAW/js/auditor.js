$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/auditor/",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            for (var j = 0; j < respuesta.length; j++) {
                var nombres = respuesta[j].nombres_auditor;
                var apellidos = respuesta[j].apellidos_auditor;
                var ruc = respuesta[j].cedula_auditor;
                var telefono = respuesta[j].telefono;
                var domicilio = respuesta[j].direccion;
                $("#contenedor_Datos").append(
                    '<tr>' +
                    '<td>' +
                    nombres +
                    '</td>' +
                    '<td>' +
                    apellidos +
                    '</td>' +
                    '<td class="cedula">' +
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
    $('button').click(function() {
        search($('#cedula').val());
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


});