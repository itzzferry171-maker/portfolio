const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from refreshing
        alert('Thank you for reaching out! Your message has been sent successfully.');
        this.reset(); // Clears the form fields
    });
}