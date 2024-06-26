var typed = new Typed(".text", {
    strings: ["Student at ASTU", "Studying Bachelor of Science", "in Software Engineering"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let menuIcon = document.querySelector('#m-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a'); // Corrected selector

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header .navbar a[href="#' + id + '"]').classList.add('active'); // Corrected querySelector
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); // Assuming you want to toggle 'active' class on navbar
};
