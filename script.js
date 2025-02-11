let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Desplazamiento automático del carrusel cada 3 segundos
setInterval(() => moveSlide(1), 3000);

// Confeti automático
function autoConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

setInterval(autoConfetti, 3000); // Confeti cada 10 segundos
