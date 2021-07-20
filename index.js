/*
  Nirel Marie M. IBarra
  ID #192468
	June 28, 2021

	I have not discussed the JavaScript language code in my program 
	with anyone other than my instructor or the teaching assistants 
	assigned to this course.

	I have not used JavaScript language code obtained from another 
	student, or any other unauthorized source, either modified or unmodified.

	If any JavaScript language code or documentation used in my program
	was obtained from another source, such as a textbook or website, 
	that has been clearly noted with a proper citation in the comments 
	of my program.
*/

// source: https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// contact form animation
const scrollOnAnimation = new IntersectionObserver((items) => {
  items.forEach((item) => {
    const webForm = item.target.querySelector(".contact-container");

    if (item.isIntersecting) {
      webForm.classList.add("btn-animated");
      return;
    }

    webForm.classList.remove("btn-animated");
  });
});

scrollOnAnimation.observe(document.querySelector("#contact"));

// blog cards animation
const cardsOnAnimation = new IntersectionObserver((items) => {
  items.forEach((item) => {
    const webForm = item.target.querySelector(".blog-articles");

    if (item.isIntersecting) {
      webForm.classList.add("heading-1-animation");
      return;
    }

    webForm.classList.remove("heading-1-animation");
  });
});

cardsOnAnimation.observe(document.querySelector("#blog-container"));
