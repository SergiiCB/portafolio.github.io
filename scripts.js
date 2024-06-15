// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Translations
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

// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});
