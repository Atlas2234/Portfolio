// Nav-bar Toggle
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
 links.classList.toggle("show-links");
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll(".scroll");
scrollLinks.forEach(link => {
 link.addEventListener("click", e => {
  // prevent default
  e.preventDefault();
  links.classList.remove("show-links");

  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  let position = element.offsetTop - 97.8;

  window.scrollTo ({
   left: 0,
   top: position, 
   behavior: "smooth"
  });
 });
});