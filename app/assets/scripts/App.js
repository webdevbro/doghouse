import "../styles/styles.css";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

if (module.hot) {
  module.hot.accept();
}

/* lesson example code below this line */

let mobileMenu = new MobileMenu();
// let revealOnScroll = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll(".featureItem"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 85);
