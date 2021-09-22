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
// document.documentElement.style.scrollBehavior = "smooth";
// console.log(landingContainers);
// console.log(allSections[0].id);
// console.log(navbarList);

/**
 * End Global Variables
 * Start Helper Functions
 */
 window.onscroll = function() {myFunction()};
const generateLists = () => {
  // this.preventDefault();
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < landingContainers.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = allSections[i].attributes[1].value;
    a.setAttribute("href", `#${allSections[i].id}`);
    // a.addEventListener('click', () => window.scrollTo({
    //     top: 900,
    //     behavior: 'smooth',
    //   }));
      a.classList.add("menu__link");
      li.appendChild(a);
      fragment.appendChild(li);

      myFunction = () => {
        const rect = allSections[i].getBoundingClientRect();
        // console.log(rect.top);
        if (rect.top < 80) {
          console.log(rect.top);
          allSections[i].classList.add("active");
        } else {
          allSections[i].classList.remove("active");
        }
      }
  }
  navbarList.appendChild(fragment);
};
generateLists();



// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });



// function myFunction(...allSections) {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     allSections.classList.add("your-active-class");
//   } else {
//     allSections.classList.remove("your-active-class");
//   }
// }

/**
 * End Helper Functions
 *
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
