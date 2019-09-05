$(document).ready(function() {
    var URL = 'http://localhost:8000/api/proforma/'
    $.ajax({
        url: URL,
        type:'GET',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",   
        success: function(respuesta) {
            for (var j = 0 ; j< respuesta.length;j++){
                var id =  respuesta[j].cod_proforma;
                var fecha = respuesta[j].fecha_proforma;
                var cliente = respuesta[j].cod_cliente.nombre_cliente;
                var representante = respuesta[j].cod_cliente.representante;
                var costo = respuesta[j].costo;
                var norma = respuesta[j].cod_norma.nombre_norma;
                var estado = respuesta[j].estado_proforma.descripcion;
                var correo = respuesta[j].cod_cliente.correo;
                var telefono = respuesta[j].cod_cliente.telefono;
                var direccion = respuesta[j].cod_cliente.direccion;
                var ruc =  respuesta[j].cod_cliente.ruc;
                $('#contenedor_datos').append(
                    '<tr>'
                    +'<td>'
                    + id
                    +'</td>'
                    +'<td>'
                    + fecha
                    +'</td>'
                    +'<td>'
                    + cliente
                    +'</td>'
                    +'<td>'
                    + ruc
                    +'</td>'
                    +'<td>'
                    + representante
                    +'</td>'
                    +'<td>'
                    + correo
                    +'</td>'
                    +'<td>'
                    + telefono
                    +'</td>'
                    +'<td>'
                    + direccion
                    +'</td>'
                    +'<td>'
                    + costo
                    +'</td>'
                    +'<td>'
                    + norma
                    +'</td>'
                    +'<td>'
                    + estado
                    +'</td>'
                    +'</tr>'
                )

            }
        }
    })
    $.ajax({
        type: 'GET',
        url: URL + "estado",
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",

        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option></option>');
                tipo.text("[" + this.estado_pro + "] " + this.descripcion);
                tipo.addClass(this.cod_es_pro);
                $('#tipo').append(tipo);
            });
        }
    });
    



    var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    $.ajax({
        url: URL+ $("#Id_proforma").val(),
        type:'GET',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",   
        success: function(respuesta) {
            $(respuesta).each(function() {
                $(".f_proforma").val(this.fecha_proforma);
                $(".ruc").val(this.cod_cliente.ruc);
                $(".cliente").val(this.cod_cliente.nombre_cliente);
                $(".repres").val(this.cod_cliente.representante);
                $(".correo").val(this.cod_cliente.correo);
                $(".telefono").val(this.cod_cliente.telefono);
                $(".direccion").val(this.cod_cliente.direccion);
                $(".costo").val(this.costo);
                //$(".norma").val(this.cod_norma.nombre_norma);
                $(".es_pro").val(this.estado_proforma.descripcion);
                var tipo=this.cod_norma;
                console.log(this.cod_norma);
                $("option").removeClass("selected");
                $("option."+tipo).prop('selected', true);
                $("option."+tipo).addClass("selected");
            });
        }
    })
    return false;
    });

    $('#actualizar').click(function() {
        var id = document.getElementById('Id_proforma').value;
        console.log(id);
        /*$.ajax({
            url: URL+'update/'+ $("#Id_proforma").val(),
            type:'PUT',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { "cod_proforma": 'value',"costo":$(".costo").val(),
            "fecha_proforma": $(".f_proforma").val(),"cod_cliente":,"cod_norma":,
            "estado_proforma":,"cod_usuario": },
            dataType: "json",   
            success: function(respuesta) {
                $(respuesta).each(function() {
                    $(".f_proforma").val(this.fecha_proforma);
                    $(".cliente").val(this.cod_cliente.nombre_cliente);
                    $(".repres").val(this.cod_cliente.representante);
                    $(".costo").val(this.costo);
                    $(".norma").val(this.cod_norma.nombre_norma);
                    $(".es_pro").val(this.estado_proforma.descripcion);
    
                });
    
            }
    
        })*/
    })
    btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    $(".f_proforma").val("");
    $(".cliente").val("");
    $(".repres").val("");
    $(".costo").val("");
    $(".norma").val("");
    $(".es_pro").val("");
    });

})