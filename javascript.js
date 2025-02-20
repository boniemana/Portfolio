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

// Mobile menu toggle (show and hide the navbar)
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Toggle the menu icon between hamburger and X
    navbar.classList.toggle('show');    // Add 'show' class to navbar to display it
};

// Add the event listener for closing the navbar when a link is clicked on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Don't hide the navbar on link click (unless clicking the menu icon)
        navLinks.forEach(l => l.classList.remove('active')); // Remove 'active' class from all
        link.classList.add('active'); // Add 'active' class to the clicked link
    });
});
