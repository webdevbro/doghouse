import "../styles/styles.css";
import "lazysizes";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

/* lesson example code below this line */
new StickyHeader();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".featureItem"), 75);
// new RevealOnScroll(document.querySelectorAll(".testimonial"), 85);
let modal;

document.querySelectorAll(".open-modal").forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then(x => {
          modal = new x.default();
          setTimeout(() => {
            modal.openTheModal();
          }, 20);
        })
        .catch(() => {
          console.log("There was a problem!");
        });
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
