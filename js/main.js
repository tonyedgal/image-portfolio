$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});

$("#landingBtn").on("click", function () {
  const imageGallery = $("#imageGallery").position().top;

  $("html, body").animate(
    {
      scrollTop: imageGallery,
    },
    3000
  );
});
