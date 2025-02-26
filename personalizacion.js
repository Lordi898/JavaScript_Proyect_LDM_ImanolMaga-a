// Mostrar y ocultar el menú desplegable
document.getElementById('personalizer').addEventListener('click', function(event) {
    const menu = document.getElementById('menu-desplegable');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
});

// Cambiar el color de fondo
document.querySelectorAll('.color[data-color]').forEach(function(element) {
    const color = element.getAttribute('data-color');
    element.style.backgroundColor = color;
    element.addEventListener('click', function() {
        document.body.style.backgroundColor = color;
    });
});

// Cambiar el color del texto
document.querySelectorAll('.color[data-texto]').forEach(function(element) {
    const color = element.getAttribute('data-texto');
    element.style.backgroundColor = color;
    element.addEventListener('click', function() {
        document.querySelector('.contenido').style.color = color;
    });
});

// Cambiar el tamaño del texto
document.querySelectorAll('.tamano').forEach(function(element) {
    element.addEventListener('click', function() {
        const size = element.getAttribute('data-size');
        document.querySelectorAll('.contenido h1, .contenido p').forEach(function(elem) {
            elem.style.fontSize = size;
        });
    });
});

// Cambiar la fuente del texto
document.querySelectorAll('.fuente').forEach(function(element) {
    element.addEventListener('click', function() {
        const font = element.getAttribute('data-font');
        document.querySelector('.contenido').style.fontFamily = font;
    });
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener('click', function() {
    document.getElementById('menu-desplegable').style.display = 'none';
});

// Prevenir que el menú se oculte al hacer clic dentro de él
document.getElementById('menu-desplegable').addEventListener('click', function(event) {
    event.stopPropagation();
});
