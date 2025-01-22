import { initExperience } from "./changeExperience.js";
import { textWrite } from "./textWrite.js";
import { initSwiper } from "./swiper.js";
import { initAOS } from "./aos.js";

function init() {
    textWrite(document.querySelector(".textWriter"));
    initExperience();
    initSwiper();
    initAOS();
}

document.addEventListener('DOMContentLoaded', init);