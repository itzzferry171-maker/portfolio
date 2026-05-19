const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // We do NOT block event submission default behavior with e.preventDefault() 
        // to let the dynamic multi-language Web3Forms handler complete processing pipeline seamlessly.
        
        // Pull the active site translation string from local browser memory
        const currentLanguage = localStorage.getItem('selected-language') || 'en';
        
        // Render localized confirmation notifications depending on language selection
        if (currentLanguage === 'en') {
            alert('Forwarding your message route to email delivery service...');
        } else {
            alert('Uw bericht wordt doorgestuurd naar de e-maildienst...');
        }
    });
}