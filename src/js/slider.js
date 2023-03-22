import Swiper, { Autoplay, EffectFade, EffectCards, Pagination, Navigation, Thumbs } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const swiper = new Swiper(".mySwiper", {
  modules: [Autoplay, EffectFade, EffectCards],
  direction: "horizontal",
  slidesPerView: 1.5,
  spaceBetween: 16,
});
const slider = new Swiper(".mySlider", {
  modules: [Autoplay, EffectFade, EffectCards],
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 16,
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 40,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
  },
});

const gallery = new Swiper(".gallery", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const gallerySlides = new Swiper(".gallery-slides", {
  modules: [Pagination, Navigation, Thumbs],
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: gallery,
  },
});
