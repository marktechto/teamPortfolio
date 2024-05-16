$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ["Prev", "Next"],
    responsive: {
      0: {
        nav: false,
      },
      700: {
        nav: true,
        dots: true,
      },
    },
  });
});

//  Portfolio
$(document).ready(function () {
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        dots: true,
        center: true,
      },
    },
  });
});
