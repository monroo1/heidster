window.addEventListener("scroll", function () {
  if (window.pageYOffset != 0) {
    document.querySelector(".header").style.background = "#d9d9f7";
    if (window.pageYOffset > 500) {
      document.querySelector(".sroll-up").style.display = "block";
    } else {
      document.querySelector(".sroll-up").style.display = "none";
    }
  } else {
    document.querySelector(".header").style.background = "transparent";
  }
});

const btn = document.querySelector(".sroll-up");
btn.addEventListener("click", () =>
  window.scrollBy({
    top: -window.pageYOffset,
    left: 0,
    behavior: "smooth",
  })
);
