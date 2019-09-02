$(document).ready(function() {
    /*$.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/libro/",
        crossDomain: true,
        headers: { 'Authorization': 'Token 382871626b9e30cf488cc5bb3f0481d05e17059d' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            for (var j = 0; j < respuesta.length; j++) {
                var id = respuesta[j].id;
                var titulo = respuesta[j].titulo;
                var isbn = respuesta[j].isbn;
                var autores = respuesta[j].autores;
                autores_n = [];
                for (var x = 0; x < autores.length; x++) {
                    autores_n.push(autores[x].nombres + " " + autores[x].apellidos);
                }
                $("#contenedor_Datos").append(
                    '<tr>' +
                    '<td>' +
                    id +
                    '</td>' +
                    '<td>' +
                    titulo +
                    '</td>' +
                    '<td>' +
                    autores_n +
                    '</td>' +
                    '<td>' +
                    isbn +
                    '</td>' +
                    '</tr>'
                );
            }


        }
    });*/

    $('.ec-stars-wrapper>a').each(function() {
        $(this).click(function() {
            console.log($(this).attr('data-value'));
            return false;
        });

    });
    $('.popup [type=button]').click(function() {
        var id = document.getElementById('id_libro').value;
     /*   $.ajax({
            type: 'POST',
            url: "http://127.0.0.1:8000/api/usuario_libro2/",
            crossDomain: true,
            headers: { 'Authorization': 'Token 382871626b9e30cf488cc5bb3f0481d05e17059d' },
            data: { "usuario": "0955887896", "libro": id,"calificacion": $('.popup [type=text]').val()},
            dataType: "json",
            success: function(respuesta) {
                console.log(respuesta);
            }
        });*/
        return false;
    });


    var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', function() {
        overlay.classList.add('active');
        popup.classList.add('active');
        var id = document.getElementById('id_libro').value;
        /*
        $.ajax({
            type: 'GET',
            url: "http://127.0.0.1:8000/api/libro/" + id,
            crossDomain: true,
            headers: { 'Authorization': 'Token 382871626b9e30cf488cc5bb3f0481d05e17059d' },
            data: { get_param: 'value' },
            dataType: "json",
            success: function(respuesta) {
                console.log(respuesta);
                $("#Nombre_libro").text("");
                $("#Nombre_libro").append(respuesta.titulo);
            }
        });*/

    });

    btnCerrarPopup.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });

});