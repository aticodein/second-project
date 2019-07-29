/* ------------------------------------------------ Reset -*/

$('#reset-filters').click(function(resetAll) {
    dc.filterAll();
    dc.renderAll();
});

$('.hide-content-btn').click(function(hideContent) {
    $(this).parent().nextAll('.hide-content-toggle').slideToggle(500);
    $(this).parent().parent().toggleClass('toggle');
    $(this).toggleClass('fa-book');
    $(this).toggleClass('fa-book-open');
});

function learnMore() {
  var x = document.getElementById("buttonSuccess");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
