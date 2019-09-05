let user = Cookies.get('idus')
$.ajax({
    url: 'http://127.0.0.1:8000/api/usuario/'+user,
    method:'GET',
success: function(data) {
      
        $('#staticName').attr('value',data.first_name)
        $('#staticApe').attr('value',data.last_name)
        $('#staticEmail').attr('value',data.email)
        $('#staticUser').attr('value',data.cod_usuario)
      }
    
})
