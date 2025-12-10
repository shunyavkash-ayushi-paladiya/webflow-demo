import Splide from "@splidejs/splide";
import "@splidejs/splide/css";


export function initSliders(){
document.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(() => {
    // Start arrivals-card-slider------------------------------
    const arrivalsCardSlider = document.querySelector(".arrivals-card-slider.splide");
    if (arrivalsCardSlider) {
      new Splide(arrivalsCardSlider, {
        type: "loop",
        perPage: 4,
        perMove: 1,
        gap: 20,
        pagination: false,
        arrows: false,
        autoplay: true,
        breakpoints: {
          991: {
            perPage: 3,
          },
          767: {
            perPage: 2.5,
            gap: 16,
          },
          575: {
            perPage: 1.5,
          },
        },
      }).mount();

      clearInterval(interval);
    }
    // End arrivals-card-slider------------------------------

    // Start selling-card-slider------------------------------
    const sellingCardSlider = document.querySelector(".selling-card-slider.splide");
    if (sellingCardSlider) {
      new Splide(sellingCardSlider, {
        type: "loop",
        perPage: 4,
        perMove: 1,
        gap: 20,
        pagination: false,
        arrows: false,
        autoplay: true,
        breakpoints: {
          991: {
            perPage: 3,
          },
          767: {
            perPage: 2.5,
            gap: 16,
          },
          575: {
            perPage: 1.5,
          },
        },
      }).mount();

      clearInterval(interval);
    }
    // End selling-card-slider------------------------------
  }, 0);
});

}