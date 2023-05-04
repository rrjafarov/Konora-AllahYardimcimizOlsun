let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.add("active");
});

let xIcon = document.querySelector(".x-icon");
xIcon.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

let iconCat = document.querySelector('.icon-cat');
let iconSubCats = document.querySelectorAll('.icon-sub-cat');
let cat = document.querySelector('.cat');
iconCat.addEventListener("click", () => {
  $(cat).slideToggle();
});
iconSubCats.forEach(iconSubCat => {
  iconSubCat.addEventListener("click", () => {
    $(iconSubCat).next().slideToggle();
  });
});

// Event

// ---------- open

document.querySelector(".eventBtn").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".eventBtn").addEventListener("click", function () {
  document.querySelector(".black-panel").classList.add("active");
});

// --------- close

document.querySelector(".popup-close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector(".popup-close").addEventListener("click", function () {
  document.querySelector(".black-panel").classList.remove("active");
});

// Black Panel close

document.querySelector(".black-panel").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector(".black-panel").addEventListener("click", function () {
  document.querySelector(".black-panel").classList.remove("active");
});


// slider hero
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// slider hero





// swiper partner -js
var swiper = new Swiper(".swiperDoctors", {
  slidesPerView: 4,
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 38,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 38,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 38,
    },
  },
});
