/* ------------------------------------------------ Reset -*/

$('#reset-filters').click(function() {
    dc.filterAll();
    dc.renderAll();
});

$('.hide-content-btn').click(function() {
    $(this).parent().nextAll('.hide-content-toggle').slideToggle(500);
    $(this).parent().parent().parent().toggleClass('eq-column-height');
    $(this).toggleClass('fa-eye');
    $(this).toggleClass('fa-eye-slash');
});