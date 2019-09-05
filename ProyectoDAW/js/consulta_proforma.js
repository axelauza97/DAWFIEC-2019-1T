$(document).ready(function() {
    var URL = 'http://localhost:8000/api/'
    var codusuario="";
    
    var jsons=[];
    function initateTable() {
        $.ajax({
            url: URL+'proforma/',
            type: 'GET',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",
            success: function(respuesta) {
                $("#contenedor_datos").empty();
                for (var j = 0; j < respuesta.length; j++) {
                    var id = respuesta[j].cod_proforma;
                    var fecha = respuesta[j].fecha_proforma;
                    var cliente = respuesta[j].cod_cliente.nombre_cliente;
                    var representante = respuesta[j].cod_cliente.representante;
                    var costo = respuesta[j].costo;
                    var norma = respuesta[j].cod_norma.nombre_norma;
                    var estado = respuesta[j].estado_proforma.descripcion;
                    var correo = respuesta[j].cod_cliente.correo;
                    var telefono = respuesta[j].cod_cliente.telefono;
                    var direccion = respuesta[j].cod_cliente.direccion;
                    var ruc = respuesta[j].cod_cliente.ruc;
                    var jsonData={"id":id,"fecha":fecha,"cliente":cliente,
                    "representante":representante,"costo":costo,"norma":norma,
                    "estado":estado,"correo":correo,"telefono":telefono,
                    "direccion":direccion,"ruc":ruc};
                    jsons.push(jsonData);
                    $('#contenedor_datos').append(
                        '<tr>' +
                        '<td class="id">' +
                        id +
                        '</td>' +
                        '<td>' +
                        fecha +
                        '</td>' +
                        '<td>' +
                        cliente +
                        '</td>' +
                        '<td>' +
                        ruc +
                        '</td>' +
                        '<td>' +
                        representante +
                        '</td>' +
                        '<td>' +
                        correo +
                        '</td>' +
                        '<td>' +
                        telefono +
                        '</td>' +
                        '<td>' +
                        direccion +
                        '</td>' +
                        '<td>' +
                        costo +
                        '</td>' +
                        '<td>' +
                        norma +
                        '</td>' +
                        '<td>' +
                        estado +
                        '</td>' +
                        '</tr>'
                    )

                }
            }
        })
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
    $.ajax({
        type: 'GET',
        url: URL + "proforma/estado",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var estado = $('<option></option>');
                estado.text('[' + this.estado_pro + ']' + this.descripcion);
                estado.addClass(this.cod_es_pro);
                $('#estado').append(estado);
            });
        }
    });

    $('#actualizar').click(function() {
        var id = document.getElementById('id_proforma').value;
        var norma = $("#norma option:selected").attr('class');
        var cliente = $("#cliente option:selected").attr('class');
        var estado = $("#estado option:selected").attr('class');
        $.ajax({
            url: URL + 'proforma/update/' + id,
            type: 'PUT',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: {
                "cod_proforma": id,
                "costo": $(".costo").val(),
                "fecha_proforma": $(".fecha").val(),
                "cod_cliente": cliente.split(" ")[0],                
                "cod_norma": norma.split(" ")[0],
                "estado_proforma": estado.split(" ")[0],
                "cod_usuario":codusuario
            },
            dataType: "json",

            success: function(respuesta) {
                
                initateTable();
                btnCerrarPopup.click();
            }
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

    btnAbrirPopup.addEventListener('click', function() {
        overlay.classList.add('active');
        popup.classList.add('active');
        $.ajax({
            url: URL +'proforma/'+ $("#id_proforma").val(),
            type: 'GET',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { get_param: 'value' },
            dataType: "json",
            success: function(respuesta) {
                $(respuesta).each(function() {
                    var norma = this.cod_norma.cod_norma;
                    $("#norma option").removeClass("selected");
                    $("#norma option." + norma).prop('selected', true);
                    $("#norma option." + norma).addClass("selected");

                    var cliente = this.cod_cliente.cod_cliente;
                    $("#cliente option").removeClass("selected");
                    $("#cliente option." + cliente).prop('selected', true);
                    $("#cliente option." + cliente).addClass("selected");

                    $(".costo").val(this.costo);
                    $(".fecha").val(this.fecha_proforma);

                    var estado = this.estado_proforma.cod_es_pro;
                    $("#estado option").removeClass("selected");
                    $("#estado option." + estado).prop('selected', true);
                    $("#estado option." + estado).addClass("selected");
                    codusuario=this.cod_usuario.cod_usuario;

                });
            }
        })
        return false;
    });
    $('body').on('click', '.id', function() {
        localStorage.removeItem("proforma");
        for (var j = 0; j < jsons.length; j++) {
            console.log(jsons[j].id);
            if(jsons[j].id==this.innerHTML){
                localStorage.setItem("proforma",JSON.stringify(jsons[j]));
                break;
            }
        }
        window.location.href="./page_certificado.html";
    });
    $("#myInput").on("keyup", function() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tabla_pro");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      });



})