const container = document.getElementById('mainContainer');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

// Función para cambiar de pantalla al hacer clic o tocar la pantalla
function handleInteraction(e) {
    e.stopPropagation();
    
    // Si estamos en la pantalla 1, pasamos a la 2 con estilo de neón
    if (screen1.classList.contains('active')) {
        screen1.classList.remove('active');
        screen2.classList.add('active');
    }
}

container.addEventListener('click', handleInteraction);
container.addEventListener('touchend', (e) => {
    e.preventDefault();
    handleInteraction(e);
});