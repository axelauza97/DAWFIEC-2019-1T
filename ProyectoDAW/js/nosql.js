$(document).ready(function() {

var representantesNsql = []
var clientessql = []


$.ajax({
    type: 'GET',
    url: "http://127.0.0.1:7000/api/representante/",
    crossDomain: true,

    
    dataType: "json",

    success: function(respuesta) {
          //  console.log(respuesta)
            representantesNsql = respuesta
        
    }
});

    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/cliente/",
        crossDomain: true,

        
        dataType: "json",

        success: function(respuesta) {

                clientessql = respuesta
                $.ajax({
                    type: 'GET',
                    url: "http://127.0.0.1:7000/api/representante/",
                    crossDomain: true,
                
                    
                    dataType: "json",
                
                    success: function(respuesta) {
                          
                            representantesNsql = respuesta

                            for(let i= 0;i<representantesNsql.length;i++){
                                var nombre = (representantesNsql[i].nombre).trim() +" "+ (representantesNsql[i].apellido).trim()
                                //    console.log(nombre)
                               for(let j = 0;j<clientessql.length;j++){
                                  // console.log(clientessql[j].representante)
                                   if(clientessql[j].representante==nombre){
                                       var empresa = clientessql[j].nombre_cliente
                                       var name = representantesNsql[i].nombre
                                       var apellido = representantesNsql[i].apellido
                                       var direccion = representantesNsql[i].direccion
                                       var correo = representantesNsql[i].correo
                                       var telefono = representantesNsql[i].telefono
                                       $("#contenedor_repre").append(
                                        '<tr>' +
                                        '<td>' +
                                        empresa +
                                        '</td>' +
                                        '<td>' +
                                        name +
                                        '</td>' +
                                        '<td>' +
                                        apellido +
                                        '</td>' +
                                        '<td>' +
                                        direccion +
                                        '</td>' +
                                        '<td>' +
                                        telefono +
                                        '</td>' +
                                        '<td>' +
                                        correo +
                                        '</td>' +
                                        '</tr>'
                                    );
                                   }
                               }
                            }
                        
                    }
                });
         

            
        }
    });
   



    $('#pdf').on('click',function(){
        $("#tabla_repre").tableHTMLExport({type:'pdf',filename:'repre.pdf'});
      })

});
