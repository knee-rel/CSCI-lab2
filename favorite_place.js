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

// same source as index.js
// blog write up animation
const writeUpOnAnimation = new IntersectionObserver((items) => {
  items.forEach((item) => {
    const webForm = item.target.querySelector(".blog-text");

    if (item.isIntersecting) {
      webForm.classList.add("heading-1-animation");
      return;
    }

    webForm.classList.remove("heading-1-animation");
  });
});

writeUpOnAnimation.observe(document.querySelector("#blog-content"));
