// Page navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe week tiles for animation
    document.querySelectorAll('.week-tile').forEach((tile, index) => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(20px)';
        tile.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(tile);
    });
    
    // Observe assignment cards for animation
    document.querySelectorAll('.assignment-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe resource sections for animation
    document.querySelectorAll('.resource-section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });
    
    // Observe contact cards for animation
    document.querySelectorAll('.contact-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add click effects to resource links
    document.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link is placeholder (#)
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification('Resource not yet available');
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            const tabs = document.querySelectorAll('.nav-tab');
            let currentIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
            
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    tabs[0].click();
                    break;
                case '2':
                    e.preventDefault();
                    tabs[1].click();
                    break;
                case '3':
                    e.preventDefault();
                    tabs[2].click();
                    break;
                case '4':
                    e.preventDefault();
                    tabs[3].click();
                    break;
                case '5':
                    e.preventDefault();
                    tabs[4].click();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    if (currentIndex > 0) {
                        tabs[currentIndex - 1].click();
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (currentIndex < tabs.length - 1) {
                        tabs[currentIndex + 1].click();
                    }
                    break;
            }
        }
    });
    
    // Add search functionality (future enhancement)
    addSearchFunctionality();
    
    // Add print functionality
    addPrintFunctionality();
    
    // Add theme toggle (future enhancement)
    addThemeToggle();
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1e3c72;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function addSearchFunctionality() {
    // This can be enhanced to search through course content
    // For now, it's a placeholder for future implementation
}

// Print functionality
function addPrintFunctionality() {
    // Add print styles and functionality
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'p') {
            window.print();
        }
    });
}

// Theme toggle (future enhancement)
function addThemeToggle() {
    // This can be enhanced to add dark/light theme switching
    // For now, it's a placeholder for future implementation
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navTabs = document.querySelector('.nav-tabs');
    navTabs.classList.toggle('mobile-active');
}

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Export functions for potential use in other scripts
window.CourseWebsite = {
    showPage,
    showNotification,
    toggleMobileMenu
};