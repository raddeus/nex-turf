// Smooth scrolling, flash effect, and modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle service areas link click
    const serviceAreasLinks = document.querySelectorAll('a[href="#service-areas"]');
    
    serviceAreasLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.getElementById('service-areas');
            if (!targetElement) return;
            
            // Smooth scroll to the service areas section
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            
            // Flash effect after scrolling
            setTimeout(() => {
                // Add flash class
                targetElement.classList.add('flash-highlight');
                
                // Remove flash class after animation completes
                setTimeout(() => {
                    targetElement.classList.remove('flash-highlight');
                }, 2000); // Remove after 2 seconds
                
            }, 800); // Delay to let scroll animation finish
        });
    });
    
    // Enhanced smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        // Skip if we already handled service areas links
        if (link.getAttribute('href') === '#service-areas') return;
        
        // Skip if this is a modal trigger button (they handle their own preventDefault)
        if (link.id === 'contact-modal-trigger' || link.id === 'contact-modal-trigger-nav') return;
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty hashes or just '#'
            if (!href || href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (!targetElement) return;
            
            e.preventDefault();
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });
    });
    
    // ================= CONTACT MODAL ================= 
    const modal = document.getElementById('contact-modal');
    const modalTrigger = document.getElementById('contact-modal-trigger');
    const modalTriggerNav = document.getElementById('contact-modal-trigger-nav');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalScrollToForm = document.querySelector('.modal-scroll-to-form');
    const body = document.body;
    
    // Open modal
    function openModal() {
        modal.classList.add('modal-open');
        modal.setAttribute('aria-hidden', 'false');
        body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus trap - focus the close button
        setTimeout(() => {
            modalClose.focus();
        }, 300);
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('modal-open');
        modal.setAttribute('aria-hidden', 'true');
        body.style.overflow = ''; // Restore scrolling
        
        // Don't return focus to avoid unwanted scrolling
        // The user can navigate normally after closing
    }
    
    // Event listeners for opening modal
    if (modalTrigger) {
        modalTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    if (modalTriggerNav) {
        modalTriggerNav.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    // Event listeners for closing modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('modal-open')) {
            closeModal();
        }
    });
    
    // Handle "Go to Quote Form" button in modal
    if (modalScrollToForm) {
        modalScrollToForm.addEventListener('click', function() {
            closeModal();
            
            // Scroll to contact form after modal closes
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            }, 300);
        });
    }
});
