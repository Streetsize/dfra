document.addEventListener("DOMContentLoaded", function() {
    
    // --- ANIMACIÓN DE TARJETAS ---
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    }); // <-- Acá termina correctamente la animación de las tarjetas

    // --- CÓDIGO DEL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // 1. Abrir/Cerrar menú al tocar las 3 rayitas
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 2. Cerrar el menú automáticamente cuando se hace clic en un link (ej: "Sobre mí")
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
}); // <-- Acá termina el "DOMContentLoaded" principal