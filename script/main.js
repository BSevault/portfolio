/** Changement d'aspect header quand on scroll depuis l'accueil */
window.addEventListener("scroll", () => {
   var header = document.getElementById("header");
   header.classList.toggle("sticky", window.scrollY > 0);
});

/** Toggle du menu burger mobile */
const toggleMenu = () => {
    const menuToggle = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};

/** Surbrillance navbar en fonction de la section à l'écran */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header ul#menu li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / sections.length) {
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

/** Accordéon de la section réalisations*/
const btns = document.querySelectorAll(".acc-btn");
function accordion() {
    this.classList.toggle("is-open");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));

/** Fixe la hauteur max de la section réalisations */
const workSection = document.getElementById("xpPro");
let maxScrollHeight = workSection.scrollHeight;
const workContent = workSection.children;
for ( const element of workContent) { 
    maxScrollHeight += element.scrollHeight;
}    
workSection.style.height = maxScrollHeight+60 + "px";