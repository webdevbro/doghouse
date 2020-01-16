import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header");
    this.pageSections = document.querySelectorAll(".page-section");
    this.pageSections[0].isFirstSection = true;
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  runOnScroll() {
    this.determineScrollDirection();
    /* Sticky Header */
    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark");
    } else {
      this.siteHeader.classList.remove("site-header--dark");
    }
    /* Page Scroll to Section */
    this.pageSections.forEach(el => {
      this.calcSection(el);
    });
    this.pageSections.forEach(el => this.calcSection(el));
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previousScrollY = window.scrollY;
  }

  calcSection(el) {
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (
        el.isFirstSection &&
        scrollPercent > 20 &&
        this.scrollDirection == "up"
      ) {
        let matchingLink = el.getAttribute("data-matching-link");
        document
          .querySelector(matchingLink)
          .classList.remove("is-current-link");
      } else if (
        (scrollPercent < 25 &&
          scrollPercent > 0.1 &&
          this.scrollDirection == "down") ||
        (scrollPercent < 33 && this.scrollDirection == "up")
      ) {
        let matchingLink = el.getAttribute("data-matching-link");
        document
          .querySelectorAll(
            `.site-header__container--nav a:not(${matchingLink})`
          )
          .forEach(el => {
            el.classList.remove("is-current-link");
          });
        document.querySelector(matchingLink).classList.add("is-current-link");
      }
    }
  }
} /* class StickyHeader */

export default StickyHeader;
