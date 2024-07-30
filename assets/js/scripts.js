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
        hello: "Hola, soy Sergi",
        developer: "Data scientist | Especialista en Power BI, Tableau, Python, SQL, RStudio",
        viewProjects: "Ver Mis Proyectos",
        briefDescription: "Soy un estudiante de Ciencia de Datos en la UOC, apasionado por este campo y la programación en general. Me considero una persona responsable, comprometida y entusiasta, con una gran capacidad para trabajar en equipo. Actualmente, busco una oportunidad para realizar mis prácticas curriculares en una empresa innovadora que me permita seguir aprendiendo y desarrollando mis habilidades.<br><br>Esta web ha sido diseñada y creada por mí para publicar y mostrar los proyectos que realizo. A pesar de no tener un conocimiento profundo ni estar especializado en programación HTML, CSS y JavaScript, considero que el diseño de esta web es un gran proyecto. Refleja no solo mi conocimiento en forma de portafolio, sino también mi capacidad para aprender y adaptarme a nuevas tecnologías y desafíos sin tener experiencia previa.",
        footerText: "Portafolio | Sergi Cózar Badia",
        languageButton: "Idioma"
    },
    en: {
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        submitButton: "Send",
        hello: "Hello, I'm Sergi",
        developer: "Data scientist | Specialist in Power BI, Tableau, Python, SQL, RStudio",
        viewProjects: "View My Projects",
        briefDescription: "I'm a data science student at the UOC with a passion for organizing and analyzing information. My approach to work is characterized by consistency, responsibility, and collaborative team environments. I am currently looking for an internship opportunity at a forward-thinking company to apply for and improve my skills. I am excited to learn and develop my future career in the field of data science.<br><br>This website was designed and created by me to showcase the projects I have worked on. Despite not having an extensive background in HTML, CSS, and JavaScript, I believe the creation of this site itself is a significant project. It reflects not only my knowledge in the form of a portfolio but also my ability to learn and adapt to new technologies and challenges without prior experience.",
        footerText: "Portfolio | Sergi Cózar Badia",
        languageButton: "Language"
    },
    ca: {
        about: "Sobre Mi",
        projects: "Projectes",
        contact: "Contacte",
        namePlaceholder: "Nom",
        emailPlaceholder: "Correu electrònic",
        messagePlaceholder: "Missatge",
        submitButton: "Enviar",
        hello: "Hola, sóc en Sergi.",
        developer: "Data scientist | Especialista en Power BI, Tableau, Python, SQL, RStudio",
        viewProjects: "Veure Els Meus Projectes",
        briefDescription: "Soc un estudiant de Ciència de Dades de la UOC, apassionat per aquest camp i la programació en general. Em considero una persona responsable, compromesa i entusiasta, amb una gran capacitat per a treballar en equip. Actualment, busco una oportunitat per a realitzar les meves pràctiques curriculars en una empresa innovadora que em permeti continuar aprenent i desenvolupant les meves habilitats.<br><br>Aquesta web ha estat dissenyada i creada per mi per publicar i mostrar els projectes que faig. Tot i no tenir un coneixement profund ni estar especialitzat en programació HTML, CSS i JavaScript, considero que el disseny d'aquesta web és un gran projecte. Reflecteix no només el meu coneixement en forma de portafoli, sinó també la meva capacitat per aprendre i adaptar-me a noves tecnologies i reptes sense tenir experiència prèvia.",
        footerText: "Portafoli | Sergi Cózar Badia",
        languageButton: "Idioma"
    }
};

document.querySelectorAll('.lang').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        
        document.getElementById('about').querySelector('h2').textContent = translations[lang].about;
        document.getElementById('about').querySelector('p').innerHTML = translations[lang].briefDescription; // Cambiar a innerHTML
        document.getElementById('projects').querySelector('h2').textContent = translations[lang].projects;
        document.getElementById('contact').querySelector('h2').textContent = translations[lang].contact;
        
        document.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
        document.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
        document.querySelector('textarea[name="message"]').placeholder = translations[lang].messagePlaceholder;
        document.querySelector('button[type="submit"]').textContent = translations[lang].submitButton;
        
        document.querySelector('.hero-content h1').textContent = translations[lang].hello;
        document.querySelector('.hero-content p').textContent = translations[lang].developer;
        document.querySelector('.hero .btn').textContent = translations[lang].viewProjects;
        
        document.querySelector('footer p').textContent = translations[lang].footerText;
        
        document.querySelectorAll('.nav-links li a').forEach((navLink, index) => {
            if (index === 0) navLink.textContent = translations[lang].projects;
            if (index === 1) navLink.textContent = translations[lang].about;
            if (index === 2) navLink.textContent = translations[lang].contact;
        });

        document.getElementById('language-button').textContent = translations[lang].languageButton;
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
    languageButton.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.classList.toggle('show');
        dropdown.style.width = `${languageButton.offsetWidth}px`;
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
