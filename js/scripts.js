$(document).ready(function() {
  $(".column-4").on("mouseenter", function() {
    $(this).find(".project-details").slideDown();
    });
  $(".column-4").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
