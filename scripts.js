document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const translations = {
    es: {
        about: "Sobre Mí",
        projects: "Proyectos",
        contact: "Contacto",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Email",
        messagePlaceholder: "Mensaje",
        submitButton: "Enviar",
        hello: "Hola, soy [Tu Nombre]",
        developer: "Desarrollador de Software | Especialista en [Tu Especialidad]",
        viewProjects: "Ver Mis Proyectos"
    },
    en: {
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        submitButton: "Send",
        hello: "Hello, I'm [Your Name]",
        developer: "Software Developer | Specialist in [Your Specialty]",
        viewProjects: "View My Projects"
    },
    ca: {
        about: "Sobre Mi",
        projects: "Projectes",
        contact: "Contacte",
        namePlaceholder: "Nom",
        emailPlaceholder: "Correu electrònic",
        messagePlaceholder: "Missatge",
        submitButton: "Enviar",
        hello: "Hola, sóc [El Teu Nom]",
        developer: "Desenvolupador de Programari | Especialista en [La Teva Especialitat]",
        viewProjects: "Veure Els Meus Projectes"
    }
};

document.querySelectorAll('.lang').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        document.getElementById('about').querySelector('h2').textContent = translations[lang].about;
        document.getElementById('projects').querySelector('h2').textContent = translations[lang].projects;
        document.getElementById('contact').querySelector('h2').textContent = translations[lang].contact;
        document.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
        document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
        document.querySelector('textarea[name="message"]').placeholder = translations[lang].messagePlaceholder;
        document.querySelector('button[type="submit"]').textContent = translations[lang].submitButton;
        document.querySelector('.hero-content h1').textContent = translations[lang].hello;
        document.querySelector('.hero-content p').textContent = translations[lang].developer;
        document.querySelector('.hero .btn').textContent = translations[lang].viewProjects;
    });
});

// Boton Idiomas

document.addEventListener("DOMContentLoaded", function() {
    const languageButton = document.getElementById('language-button');
    const dropdown = document.querySelector('.dropdown');
    const languageLinks = document.querySelectorAll('.lang');

    // Función para alternar la visibilidad del menú desplegable
    function toggleDropdown() {
        dropdown.classList.toggle('show');
    }

    // Evento para abrir/cerrar el menú al hacer clic en el botón "Idioma"
    languageButton.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown();
    });

    // Evento para cerrar el menú al seleccionar un idioma
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdown();
            // Aquí también puedes agregar la lógica para cambiar el idioma si aún no está implementada
        });
    });

    // Evento para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !languageButton.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// Carrusel de imagenes

let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const progressBar = document.querySelector(".progress");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    resetProgressBar();
    setTimeout(showSlides, 5000); // Imagen cada 5 segundos
}

function resetProgressBar() {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Reinicia la animación
    progressBar.style.animation = "progress 5s linear infinite";
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

// Redirección web

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las imágenes de proyecto
    const projectImages = document.querySelectorAll('.project-img');

    // Agregar evento de click a cada imagen
    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            // Obtener la URL del atributo data-url
            const url = this.getAttribute('data-url');
            // Redirigir a la URL
            window.location.href = url;
        });
    });
});
