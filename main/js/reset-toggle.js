/* ------------------------------------------------ Reset -*/

$('#reset-filters').click(function() {
    dc.filterAll();
    dc.renderAll();
});


/* ------------------------------------------------ Toggle -*/

$('.hide-content-btn').click(function() {
    $(this).parent().nextAll('.hide-content-toggle').slideToggle();
    $(this).parent().parent().parent().toggleClass('eq-column-height');
    $(this).toggleClass('fa-angle-double-up');
    $(this).toggleClass('fa-angle-double-down');
});