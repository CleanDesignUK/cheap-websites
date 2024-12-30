// scripts.js

// Toggle Navbar Menu on Mobile
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Live Chat Button Functionality
const liveChatBtn = document.getElementById('liveChatBtn');

if (liveChatBtn) {
    liveChatBtn.addEventListener('click', () => {
        alert('Live Chat feature coming soon!');
    });
}

// Form Submission Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple alert for demonstration. Replace with actual form handling.
        alert('Thank you for contacting websitedesignercheap.com! We will get back to you soon.');
        contactForm.reset();
    });
}
