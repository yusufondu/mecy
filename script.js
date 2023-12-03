const multipleItemCarousel = document.querySelector("#carouselExample");

if (window.matchMedia("(min-width: 576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}

document.addEventListener("DOMContentLoaded", function () {
  // Button elementini seç
  var scrollButton = document.getElementById("scrollToForm");

  // Scroll işlemini yapacak fonksiyon
  function scrollToSection() {
    var targetSection = document.getElementById("formSection");

    // targetSection'a animasyonlu bir şekilde kaydırma işlemi
    formSection.scrollIntoView({ behavior: "smooth" });
  }

  // Button'a tıklandığında scrollToSection fonksiyonunu çağır
  scrollToForm.addEventListener("click", scrollToSection);
});

document.addEventListener("DOMContentLoaded", function () {
  // Button elementini seç
  var scrollButton = document.getElementById("scrollToFormBigArrow");

  // Scroll işlemini yapacak fonksiyon
  function scrollToSection() {
    var targetSection = document.getElementById("formSection");

    // targetSection'a animasyonlu bir şekilde kaydırma işlemi
    formSection.scrollIntoView({ behavior: "smooth" });
  }

  // Button'a tıklandığında scrollToSection fonksiyonunu çağır
  scrollToFormBigArrow.addEventListener("click", scrollToSection);
});

document.addEventListener("DOMContentLoaded", function () {
  // Button elementini seç
  var scrollButton = document.getElementById("scrollToFormFromHeader");

  // Scroll işlemini yapacak fonksiyon
  function scrollToSection() {
    var targetSection = document.getElementById("formSection");

    // targetSection'a animasyonlu bir şekilde kaydırma işlemi
    formSection.scrollIntoView({ behavior: "smooth" });
  }

  // Button'a tıklandığında scrollToSection fonksiyonunu çağır
  scrollToFormFromHeader.addEventListener("click", scrollToSection);
});
