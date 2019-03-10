$(document).ready(function() {
  $(".column-4").on("mouseenter", function() {
    $(this).find(".project-details").slideDown();
    });
  $(".column-4").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
$(document).ready(function() {
  $(".giulia-photo").on("mouseenter", function() {
    $(this).find(".giulia-hover").slideIn();
    });
});
