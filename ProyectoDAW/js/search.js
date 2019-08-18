var buscador = $("#table").DataTable();

$("#search-input").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#search-input").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})