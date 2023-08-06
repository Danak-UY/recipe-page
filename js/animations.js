import { CountUp } from "./countUp.min.js";

const $information = document.querySelector(".information");
const $gallery = document.querySelector(".gallery");

const animateInClasses = ["animate-in", "fade-in", "duration-500"];
const delay = 300;

const startCounterAnimation = () => {
  $information.querySelectorAll("div h2 + span").forEach(($info) => {
    new CountUp($info, $info.getAttribute("data-value")).start();
  });
};

const addGalleryAnimation = () => {
  $gallery.querySelectorAll("img").forEach(($img, index) => {
    setTimeout(
      () => {
        $img.classList.remove("opacity-0");
        $img.classList.add(...animateInClasses);
      },
      delay * (index + 1),
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation();
  addGalleryAnimation();
});
