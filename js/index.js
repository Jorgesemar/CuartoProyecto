
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
})
$(function(){
    $('.carousel').carousel({
        interval: 3000
    });
    $("[data-bs-toggle='popover']").popover();
    $('#contacto').on('show.bs.modal', function(e){
        console.log('el modal se está mostrando');
        $('#contactoBtn').removeClass('btn-danger');
        $('#contactoBtn').prop('disabled', true);
    })
    $('#contacto').on('shown.bs.modal', function(e){

    })
    $('#contacto').on('hide.bs.modal', function(e){
    })
    $('#contacto').on('hidden.bs.modal', function(e){
        $('#contactoBtn').addClass('btn-danger');
        $('#contactoBtn').prop('disabled', false);
    })
});
