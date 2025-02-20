document.addEventListener("DOMContentLoaded", function () {
    const personalizerMenu = document.getElementById("personalizerMenu");
    const openPersonalizer = document.getElementById("openPersonalizer");
    const bgColors = document.getElementById("bgColors");
    const textColors = document.getElementById("textColors");
    const textSizes = document.getElementById("textSizes");
    const textFonts = document.getElementById("textFonts");

    // Colores disponibles
    const colors = ["pink", "green", "blue", "gray", "white"];
    
    // Crear botones de colores de fondo y texto
    colors.forEach(color => {
        let bgColorBtn = document.createElement("div");
        bgColorBtn.style.background = color;
        bgColorBtn.addEventListener("click", () => document.body.style.background = color);
        bgColors.appendChild(bgColorBtn);

        let textColorBtn = document.createElement("div");
        textColorBtn.style.background = color;
        textColorBtn.addEventListener("click", () => document.body.style.color = color);
        textColors.appendChild(textColorBtn);
    });

    // Cambio de tamaño de letra
    textSizes.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            document.body.style.fontSize = e.target.getAttribute("data-size");
        }
    });

    // Cambio de tipo de fuente
    textFonts.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            document.body.style.fontFamily = e.target.getAttribute("data-font");
        }
    });

    // Mostrar/Ocultar el menú
    openPersonalizer.addEventListener("click", function (e) {
        e.preventDefault();
        personalizerMenu.style.display = (personalizerMenu.style.display === "block") ? "none" : "block";
    });

    // Ocultar si se hace clic fuera del menú
    document.addEventListener("click", function (e) {
        if (!personalizerMenu.contains(e.target) && e.target !== openPersonalizer) {
            personalizerMenu.style.display = "none";
        }
    });
});
