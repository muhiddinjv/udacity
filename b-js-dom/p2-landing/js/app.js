/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 */

/**
 * Define Global Variables
 */
const landingContainers = document.querySelectorAll(".landing__container");
const allSections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
document.documentElement.style.scrollBehavior = "smooth";
/*
 * End Global Variables
 * Start Helper Functions
 */
const viewport = (elem) => {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= 
    // if browser doesnt support "innerHeight", then "clientHeight" 
    (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
};
/*
 * End Helper Functions
 * Begin Main Functions
 */
// Add class 'active' to section when near top of viewport
window.addEventListener(
  "scroll", () => {
    for (section of allSections) {
      if (viewport(section)) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    }
  },
  false
);

const generateLists = () => {
  const fragment = document.createDocumentFragment();
  // build the nav
  for (let i = 0; i < landingContainers.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = allSections[i].attributes[1].value;

    // Scroll to section on link click
    a.setAttribute("href", `#${allSections[i].id}`);

    a.classList.add("menu__link");
    li.appendChild(a);
    fragment.appendChild(li);
  }
  navbarList.appendChild(fragment);
};
generateLists();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to anchor ID using scrollTO event

// Build menu

// Set sections as active
