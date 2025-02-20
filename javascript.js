var typed = new Typed(".text", {
    strings: ["Student at ASTU", "Studying Bachelor of Science", "in Software Engineering"],
    typeSpeed: 80,
    backSpeed: 59,
    backDelay: 50,
    loop: true
});

// Mobile navbar toggle
let menuIcon = document.querySelector('#m-icon'); // Updated ID for mobile icon
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// Scroll animation for active navbar link
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
            document.querySelector('header .navbar a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// Mobile menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Add the event listener for closing the navbar when a link is clicked on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Hide navbar on link click
        menuIcon.classList.remove('bx-x'); // Close the menu icon
    });
});
