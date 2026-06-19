// Efecto parallax: las imágenes flotantes se mueven un poco
// según la posición del mouse dentro del hero.
//Al final lo quite, por no saber que imagenes colocar, pero ni idea si funcionaba.

const hero = document.querySelector('.hero');
const imagenesFlotantes = document.querySelectorAll('.float-img');

// Si el usuario prefiere menos animaciones, no agregamos el parallax
const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && !prefiereMenosMovimiento) {
    hero.addEventListener('mousemove', (event) => {
        // Centro del hero
        const centroX = hero.clientWidth / 2;
        const centroY = hero.clientHeight / 2;

        // Diferencia entre el mouse y el centro (de -1 a 1)
        const deltaX = (event.clientX - centroX) / centroX;
        const deltaY = (event.clientY - centroY) / centroY;

        imagenesFlotantes.forEach((img) => {
            const velocidad = Number(img.dataset.speed) || 20;

            const moverX = deltaX * velocidad;
            const moverY = deltaY * velocidad;

            img.style.transform = `translate(${moverX}px, ${moverY}px)`;
        });
    });

    // Cuando el mouse sale del hero, las imágenes vuelven a su lugar
    hero.addEventListener('mouseleave', () => {
        imagenesFlotantes.forEach((img) => {
            img.style.transform = 'translate(0px, 0px)';
        });
    });
}
