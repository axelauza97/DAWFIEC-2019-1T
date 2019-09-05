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
                var rc =  respuesta[j].cod_cliente.ruc;
                
                $('#contenedor_datos').append(
                    '<tr>'
                    +'<td>'
                    + id
                    +'</td>'
                    +'<td>'
                    + fecha
                    +'</td>'
                    +'<td>'
                    + rc
                    +'</td>'
                    +'<td>'
                    + cliente
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
                var tipo = $('<option id ="op1"></option>');
                tipo.text(this.cod_es_pro+":"+ this.estado_pro +"->" + this.descripcion);
                tipo.addClass(this.cod_es_pro);
                $('#tipo').append(tipo);
            });
        }
    });
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8000/api/' + 'norma/',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",
        success: function(respuesta) {
            $(respuesta).each(function() {
                var tipo = $('<option id= "op2"></option>');
                tipo.text( this.cod_norma + ":" + this.nombre_norma);
                tipo.addClass(this.cod_norma);
                tipo.attr('value',this.cod_norma);
                $('#tipo2').append(tipo);
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
        url: URL+ $("#id_proforma").val(),
        type:'GET',
        crossDomain: true,
        headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
        data: { get_param: 'value' },
        dataType: "json",   
        success: function(respuesta) {
            $(respuesta).each(function() {
                $(".f_proforma").val(this.fecha_proforma);
                $(".ruc").val(this.cod_cliente.ruc);
                $("#codigo_cliente").val(this.cod_cliente.cod_cliente);
                $(".cliente").val(this.cod_cliente.nombre_cliente);
                $(".repres").val(this.cod_cliente.representante);
                $(".correo").val(this.cod_cliente.correo);
                $(".telefono").val(this.cod_cliente.telefono);
                $(".direccion").val(this.cod_cliente.direccion);
                $(".costo").val(this.costo);            
            });
        }
    })
    return false;
    });
    var optionnorma = "";
    var estadopro = "";
    var select = document.getElementById('tipo2');
        select.addEventListener('change',
        function(){
            var selectedOption = this.options[select.selectedIndex];
            //console.log(selectedOption.text.split(":")[0]);
            optionnorma = selectedOption.text.split(":")[0]
    });
    var select = document.getElementById('tipo');
        select.addEventListener('change',
        function(){
            var selectedOption = this.options[select.selectedIndex];
            //console.log(selectedOption.text.split(":")[0]);
            estadopro = selectedOption.text.split(":")[0]
    });
    function limpiaropopup() {
        $("#mcorrecto").slideDown(500).delay(900).fadeIn(500);
        $(".ruc").val("");
        $(".f_proforma").val("");
        $(".costo").val("");
        $(".cliente").val("");
        $(".repres").val("");
        $(".correo").val("");
        $(".telefono").val("");
        $(".direccion").val("");
    }
    $('#actualizar').click(function() {
    /*    console.log($('.cliente').val());
        console.log("label",document.getElementById("codigo_cliente").value);
        
        console.log('Norma',optionnorma);
        console.log('Estado Proforma',estadopro);
        console.log(parseFloat($(".costo").val()));
        console.log('Norma',optionnorma);
        console.log('Estado Proforma',estadopro);*/
        codigoc = document.getElementById("codigo_cliente").value;
        console.log(codigoc);
        $.ajax({
            url: 'http://127.0.0.1:8000/api/cliente/update/'+ codigoc,
            type:'PUT',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { "cod_cliente": codigoc,"ruc": $(".ruc").val(),"nombre_cliente": $(".cliente").val(),
            "representante": $(".repres").val(),"correo":  $(".correo").val(),"telefono": $(".telefono").val(),
            "direccion": $(".direccion").val(),"cod_usuario": "rios" },
            dataType: "json",
        })
        $.ajax({
            url: URL+'update/'+ $("#id_proforma").val(),
            type:'PUT',
            crossDomain: true,
            headers: { 'Authorization': 'Token ad1f14ec4c59bae7d44504110841a59575ef32be' },
            data: { "cod_proforma":$("#id_proforma").val(),"costo":parseFloat($(".costo").val()),
            "fecha_proforma": $(".f_proforma").val(),"cod_cliente":codigoc,"cod_norma":optionnorma,
            "estado_proforma":estadopro,"cod_usuario":"rios"},
            dataType: "json",   
    
        })
        limpiaropopup();
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
    var tbl = document.getElementById('tabla_pro');
    lastRow = tbl.rows.length - 1;
    for (i = lastRow; i > 0; i--) {     
        tbl.deleteRow(i);
    }
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
                var rc =  respuesta[j].cod_cliente.ruc;
                
                $('#contenedor_datos').append(
                    '<tr>'
                    +'<td>'
                    + id
                    +'</td>'
                    +'<td>'
                    + fecha
                    +'</td>'
                    +'<td>'
                    + rc
                    +'</td>'
                    +'<td>'
                    + cliente
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
    $("#id_proforma").val("");


    });

})