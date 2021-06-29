$( document ).ready(function() {
    var data = {
        'assistance': $('input[name=contact_asistencia]:checked').val(),
        'postal': $("#contact_cp").val(),
        'email': $("#contact_email").val(),
        'state':$("#contact_estado").find("option:selected").val(),
        'message':$("#contact_mensaje").val(),
        'name':$("#contact_nombre").val(),
        'phone':$("#telefono_cp").val(),
    }

    $('.button_principal').click(function(){
    	console.log('Datos del cliente: ',data);
    	alert('Datos ingresados');
    });
});