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

// ---------

document.getElementById("file").addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  const fileList = event.target.files;

  if (fileList.length > 0) {
    const fileName = fileList[0].name;
    alert("File added: " + fileName);
  } else {
    alert("No file selected.");
  }
}

////

// Yeni seçenekleri eklemek için bir dizi oluştur
var newOptions = [
  { value: "1", text: "Turkey" },
  { value: "2", text: "Albania" },
  { value: "3", text: "Andorra" },
  { value: "4", text: "Australia" },
  { value: "5", text: "Austria" },
  { value: "6", text: "Belarus" },
  { value: "7", text: "Belgium" },
  { value: "8", text: "Bulgaria" },
  { value: "9", text: "Canada" },
  { value: "10", text: "China" },
  { value: "11", text: "Croatia" },
  { value: "12", text: "Czech Republic" },
  { value: "13", text: "Denmark" },
  { value: "14", text: "Estonia" },
  { value: "15", text: "Finland" },
  { value: "16", text: "France" },
  { value: "17", text: "Germany" },
  { value: "18", text: "Greece" },
  { value: "19", text: "Hong Kong" },
  { value: "20", text: "Hungary" },
  { value: "21", text: "Iceland" },
  { value: "22", text: "India" },
  { value: "23", text: "Ireland" },
  { value: "24", text: "Italy" },
  { value: "25", text: "Latvia" },
  { value: "26", text: "Liechtenstein" },
  { value: "27", text: "Lithuania" },
  { value: "28", text: "Luxemborg" },
  { value: "29", text: "Macedonia" },
  { value: "30", text: "Malta" },
  { value: "31", text: "Moldova" },
  { value: "32", text: "Monaco" },
  { value: "33", text: "Netherlands" },
  { value: "34", text: "New Zealand" },
  { value: "35", text: "Northern Ireland" },
  { value: "36", text: "Norway" },
  { value: "37", text: "Poland" },
  { value: "38", text: "Portugal" },
  { value: "39", text: "Romania" },
  { value: "40", text: "Serbia" },
  { value: "41", text: "Singapure" },
  { value: "42", text: "Slovakia" },
  { value: "43", text: "Slovenia" },
  { value: "44", text: "Spain" },
  { value: "45", text: "Sweden" },
  { value: "46", text: "Switzerland" },
  { value: "47", text: "UAE" },
  { value: "48", text: "Ukraine" },
  { value: "49", text: "United Kingdom" },
  { value: "50", text: "United States" },
  { value: "51", text: "Vatican City" },
  { value: "52", text: "APAC - Other" },
  { value: "53", text: "Europe - Other" },
  { value: "54", text: "GM/EME" },
];

// Select elementini seç
var selectElement = document.getElementById("selDepApt");

// Dizideki her seçeneği döngü içinde ekleyin
newOptions.forEach(function (option) {
  var optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  selectElement.add(optionElement);
});

////// TRIPLE /////

const bigTriple = document.querySelector(".big-triple");
const bigTripleTexts = document.querySelectorAll(".triple-description-text");

bigTriple.addEventListener("click", () => {
  bigTripleTexts.forEach((element) => {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// console.log("bigTripleTexts", bigTripleTexts);
