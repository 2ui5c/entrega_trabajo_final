const navSlide = () => {
const hamburguesa = document.querySelector ('.hamburguesa');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
    
hamburguesa.addEventListener("click", () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
    //animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // animacion hamburguesa
        hamburguesa.classList.toggle('toggle');
});

}

navSlide();