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
const navButton = document.querySelector("button[aria-expanded]");
/*
 * End Global Variables
 * Start Helper Functions
 */
const toggleNav = ({ target }) => {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
  console.log(navButton.textContent);
  if(navButton.textContent === "Close"){
    navButton.textContent = "Open";
  } else {
    navButton.textContent = "Close";
  }
}

const viewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      // if browser doesnt support "innerHeight", then "clientHeight"
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // i got this code block from github
  );
};

const addClassAndScroll = (e) => {
  e.preventDefault();

  // set clicked link as active & keep it until another link is clicked
  let activeElem = document.querySelector(".active-link");
  if (activeElem !== null) {
    activeElem.classList.remove("active-link");
  }
  e.target.classList.add("active-link");

  // Scroll to anchor ID using scrollTO event
  for (section of allSections) {
    if (e.target.id == section.attributes.id.value) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }
};

/*
 * End Helper Functions
 * Begin Main Functions
 */

// Add class 'active' to section when near top of viewport
window.addEventListener(
  "scroll",
  () => {
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
  // build the nav menu
  for (let i = 0; i < landingContainers.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = allSections[i].attributes[1].value;
    a.setAttribute("id", `${allSections[i].id}`);
    a.classList.add("menu__link");

    // Add class "active" & scroll to section on click
    a.addEventListener("click", addClassAndScroll);

    li.appendChild(a);
    fragment.appendChild(li);
  }
  navbarList.appendChild(fragment);
  navButton.addEventListener("click", toggleNav);

};
generateLists();

/**
 * End Main Functions
 */
