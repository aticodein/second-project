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

//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}