let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('  header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)
    // remove toggle icon and navbar when click on navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// scroll reval

ScrollReveal({
    distance: '80px',
    duration: 1500,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.photo,.protfolio-container,.formbox ', { origin: 'bottom' });
ScrollReveal().reveal(' .about-photo, .home-content h1 ', { origin: 'left' });
ScrollReveal().reveal(' .about-content, .home-content p ', { origin: 'right' });


// typed js 
let typed = new Typed(".animation", {
    strings: ["Fronted-devloper "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

