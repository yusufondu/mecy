// Tarayıcı yenilendiğinde çağrılacak fonksiyon
function restoreScrollPosition() {
  // Eğer tarayıcı yerel depolama özelliğini destekliyorsa
  if (typeof Storage !== "undefined") {
    // Kaydedilmiş scroll pozisyonunu al
    var scrollPosition = localStorage.getItem("scrollPosition");

    // Eğer scroll pozisyonu varsa, sayfayı bu konuma kaydır
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  }
}

// Sayfa yüklenirken scroll pozisyonunu kaydet
window.addEventListener("beforeunload", function () {
  // Eğer tarayıcı yerel depolama özelliğini destekliyorsa
  if (typeof Storage !== "undefined") {
    // Mevcut scroll pozisyonunu al ve yerel depolamaya kaydet
    localStorage.setItem("scrollPosition", window.scrollY);
  }
});

// Sayfa yüklendiğinde scroll pozisyonunu geri yükle
window.addEventListener("load", function () {
  restoreScrollPosition();
});

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
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 400);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 400);
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

//////////////

document.addEventListener("DOMContentLoaded", function () {
  var openModalButton = document.getElementById("openCookieModal");
  var modal = document.getElementById("cookieModal");
  var body = document.body;

  openModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden"; // Kaydırmayı engelle
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "auto"; // Kaydırmayı tekrar etkinleştir
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var openModalButton = document.getElementById("openPrivacyModal");
  var modal = document.getElementById("privacyModal");
  var body = document.body;

  openModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden"; // Kaydırmayı engelle
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "auto"; // Kaydırmayı tekrar etkinleştir
    }
  });
});

//---

document.addEventListener("DOMContentLoaded", function () {
  // Set Consulting as default on page load
  filterProjects("consulting");
});

function filterProjects(category) {
  // Set the checked status of radio buttons based on the category
  document.getElementById("flexRadioDefault1").checked =
    category === "consulting";
  document.getElementById("flexRadioDefault2").checked =
    category === "development";
  document.getElementById("flexRadioDefault3").checked = category === "design";

  const cards = document.querySelectorAll(".card-box");
  cards.forEach((card) => {
    if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
