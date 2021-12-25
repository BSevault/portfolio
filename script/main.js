/** Changement d'aspect navbar quand on scroll depuis l'accueil */
window.addEventListener('scroll', () =>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/** Toggle du menu burger mobile */
let toggleMenu = () => {
    let menuToggle = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};


/** Surbrillance navbar en fonction de la section à l'écran */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header ul.menu li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / sections.length ) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach( li => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
