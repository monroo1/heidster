let offset = 0;
const sliderLine = document.querySelector(".swiper-wrapper");

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  offset += 600;
  if (offset > sliderLine.scrollWidth - 600) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".swiper-button-prev").addEventListener("click", () => {
  offset -= 600;
  if (offset < 0) {
    offset = sliderLine.scrollWidth - 600;
  }
  sliderLine.style.left = -offset + "px";
});
