// Modo oscuro
const modoBtn = document.getElementById("modoOscuroBtn");
modoBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); // <html> recibe la clase dark
});

// Mostrar detalles proyecto
function mostrarProyecto(id) {
    const detalles = {
        proyecto1: {
            titulo: "Sitio informativo",
            descripcion:
                "Un sitio con HTML y CSS sobre temas de salud mental, con diseño adaptable y enfoque educativo.",
        },
        proyecto2: {
            titulo: "App de tareas",
            descripcion:
                "Aplicación interactiva para organizar tareas, usando JavaScript, localStorage y validación en tiempo real.",
        },
        proyecto3: {
            titulo: "Mini juego web",
            descripcion:
                "Un juego simple en el navegador que utiliza lógica en JavaScript para interactuar con el usuario.",
        },
    };

    const detalle = detalles[id];
    if (detalle) {
        document.getElementById("tituloDetalle").innerText = detalle.titulo;
        document.getElementById("descripcionDetalle").innerText =
            detalle.descripcion;
        document.getElementById("detalleProyecto").classList.remove("hidden");
        // Scroll suave a detalle proyecto
        document
            .getElementById("detalleProyecto")
            .scrollIntoView({ behavior: "smooth" });
    }
}

// Enviar formulario simulado
document
    .getElementById("formularioContacto")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Te responderé pronto.");
        this.reset();
    });

// Animación scroll - efecto reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ------------------------------
// Menú hamburguesa (responsive)
// ------------------------------
const menuBtn = document.getElementById("menuBtn");
const menuNav = document.getElementById("menuNav");

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("hidden");
});





