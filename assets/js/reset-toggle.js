/* ------------------------------------------------ Reset button -----------*/

$('#reset-filters').click(function(resetAll) {
    dc.filterAll();
    dc.renderAll();
});
/* ------------------------------------------------ Toggle effect for icons -----------*/
$('.hide-content-btn').click(function(hideContent) {
    $(this).parent().nextAll('.hide-content-toggle').slideToggle(500);
    $(this).parent().parent().toggleClass('toggle');
    $(this).toggleClass('fa-book');
    $(this).toggleClass('fa-book-open');
});
/* ------------------------------------------------ Learn more button popup -----------*/
function learnMore() {
  var x = document.getElementById("buttonSuccess");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

learnMore();
/* ------------------------------------------------ JS footer icon thank you popup -----------*/
function thankYou() {
  var x = document.getElementById("javascript");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

thankYou();
