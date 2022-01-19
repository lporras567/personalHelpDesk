function init(){
}

$(document).ready(function() {

});

$(document).on("click", "#btnsoporte", function () {
        if($('#rol_id').val()==1){
            $('#lbltitulo').html("Acceso Soporte");
            $('#btnsoporte').html("Acceso Administrador");
            $('#rol_id').val(2);
            $("#imgtipo").attr("src","public/img/2.jpg");
        }else
        if($('#rol_id').val()==2){
            $('#lbltitulo').html("Acceso Administrador");
            $('#btnsoporte').html("Acceso Usuario");
            $('#rol_id').val(3);
            $("#imgtipo").attr("src","public/img/3.jpg");
        }else
        if($('#rol_id').val()==3){
            $('#lbltitulo').html("Acceso Usuario");
            $('#btnsoporte').html("Acceso Soporte");
            $('#rol_id').val(1);
            $("#imgtipo").attr("src","public/img/1.jpg");
        }else{
            $('#lbltitulo').html("Acceso Denegado");
            $('#btnsoporte').html("Acceso Denegado");
            $('#rol_id').val(1);
            $("#imgtipo").attr("src","public/img/4.jpg");
        }
});

init();