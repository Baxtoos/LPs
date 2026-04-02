document.addEventListener("DOMContentLoaded", () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');    

    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Previne falha de query se href for apenas "#"
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);     
            
            // Força a rolagem via window
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});