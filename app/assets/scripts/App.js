import "../styles/styles.css";
import Person from "./modules/Person";
import MobileMenu from "./modules/MobileMenu";

if (module.hot) {
  module.hot.accept();
}

/* lesson example code below this line */

let mobileMenu = new MobileMenu();
