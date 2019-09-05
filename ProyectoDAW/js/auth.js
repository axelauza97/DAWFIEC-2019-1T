if(Cookies.get('token')!=undefined && Cookies.get('st')==0){
    $(location).attr('href',"./page_home.html");

}

if(Cookies.get('token')!=undefined && Cookies.get('st')==1){
    $(location).attr('href',"./page_administrador.html");

}
