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

// Ensure mobile navbar works on page load and navigation
window.onload = () => {
    // Reset the state of the menu if it was active when the page was loaded
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active'); // Hide navbar on load
        menuIcon.classList.remove('bx-x'); // Close the icon
    }

    // Reinitialize the navbar toggle functionality after the page has loaded
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active'); // Hide navbar on link click
            menuIcon.classList.remove('bx-x'); // Close the menu icon
        });
    });
};

// Reapply event listeners if the page content changes dynamically (for SPA routing)
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the menu is closed when new content is loaded
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
});
