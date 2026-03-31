document.addEventListener("DOMContentLoaded", () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Pega o destino do link
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // scroll suave 
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});