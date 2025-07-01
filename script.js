// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.exp-item, .edu-item, .project-item, .skill-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.exp-item, .edu-item, .project-item, .skill-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
    });
    
    // Trigger initial animation
    setTimeout(animateOnScroll, 300);
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Add print functionality
const addPrintButton = () => {
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.className = 'print-button no-print';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '20px';
    printButton.style.right = '20px';
    printButton.style.padding = '10px 20px';
    printButton.style.backgroundColor = '#3498db';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '4px';
    printButton.style.cursor = 'pointer';
    printButton.style.zIndex = '1000';
    printButton.onclick = () => window.print();
    
    document.body.appendChild(printButton);
};

// Initialize print button when DOM is loaded
document.addEventListener('DOMContentLoaded', addPrintButton);
