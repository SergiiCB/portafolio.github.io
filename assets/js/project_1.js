document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        es: {
            mainTitle: "Incendios forestales en España entre 2001 y 2015",
            presentationTitle: "Mi Presentación de Google Slides",
            tableauTitle: "Gráfico de Tableau",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vQ-CS--c6B8Cuo7cObU3e23Vy09e0jgw51afAgYUV6Y3f9NS_os-jvo8f-xa0cZ8gQ6N0o04WfEIO2i/embed?start=false&loop=false&delayms=3000",
            languageButton: "Idioma",
            footerText: "© Portafolio | Sergi Cózar Badia"
        },
        en: {
            mainTitle: "Forest Fires in Spain between 2001 and 2015",
            presentationTitle: "My Google Slides Presentation",
            tableauTitle: "Tableau Chart",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vQropNqLmOOA0spLjFPMOJzDE5FSFTSTza0blueb2ABuy1YS-pR2Xny2Jo3YBy1ve8qQsRDX9YbOben/embed?start=false&loop=false&delayms=3000",
            languageButton: "Language",
            footerText: "© Portfolio | Sergi Cózar Badia"
        },
        ca: {
            mainTitle: "Incendis forestals a Espanya entre 2001 i 2015",
            presentationTitle: "La Meva Presentació de Google Slides",
            tableauTitle: "Gràfic de Tableau",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vT7jw5G5OgNZXPOB5azYFU5aESmPJOgvvcxaLG0X9CjwEXkT1yHgwWT5PM5mT8N7PZ7fAb-VIkdeUAU/embed?start=false&loop=false&delayms=3000",
            languageButton: "Idioma",
            footerText: "© Portafoli | Sergi Cózar Badia"
        }
    };

    function updateContent(language) {
        const translation = translations[language];

        document.querySelector('.title-section h1').innerText = translation.mainTitle;
        document.querySelector('.presentation-container h2').innerText = translation.presentationTitle;
        document.querySelector('.tableau-container h2').innerText = translation.tableauTitle;
        document.querySelector('.presentation-container iframe').src = translation.slidesSrc;

        // Actualizar botón de idioma
        document.getElementById('language-button').innerText = translation.languageButton;

        // Actualizar pie de página
        document.querySelector('footer p').innerText = translation.footerText;
    }

    // Botón Idiomas
    const languageButton = document.getElementById('language-button');
    const dropdown = document.querySelector('.dropdown');
    const languageLinks = document.querySelectorAll('.lang');

    function toggleDropdown() {
        dropdown.classList.toggle('show');
    }

    languageButton.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.classList.toggle('show');
        dropdown.style.width = `${languageButton.offsetWidth}px`; 
    });

    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDropdown();
            const selectedLang = this.getAttribute('data-lang');
            updateContent(selectedLang); // Actualizar contenido según el idioma seleccionado
        });
    });

    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !languageButton.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Inicializar el contenido en español por defecto
    updateContent('es');
});
