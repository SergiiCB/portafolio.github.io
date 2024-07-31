document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        es: {
            mainTitle: "Incendios forestales en España entre 2001 y 2015",
            introText: "A continuación se muestra el primer proyecto que he desarrollado. Este proyecto analiza los incendios forestales en España entre 2001 y 2015. La presentación proporciona una visión detallada de los datos y las tendencias observadas durante este período.",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vQ-CS--c6B8Cuo7cObU3e23Vy09e0jgw51afAgYUV6Y3f9NS_os-jvo8f-xa0cZ8gQ6N0o04WfEIO2i/embed?start=false&loop=false&delayms=3000",
            languageButton: "Idioma",
            footerText: "© Portafolio | Sergi Cózar Badia"
        },
        en: {
            mainTitle: "Forest Fires in Spain between 2001 and 2015",
            introText: "Below is the first project I have developed. This project analyzes forest fires in Spain between 2001 and 2015. The presentation provides a detailed view of the data and trends observed during this period.",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vQropNqLmOOA0spLjFPMOJzDE5FSFTSTza0blueb2ABuy1YS-pR2Xny2Jo3YBy1ve8qQsRDX9YbOben/embed?start=false&loop=false&delayms=3000",
            languageButton: "Language",
            footerText: "© Portfolio | Sergi Cózar Badia"
        },
        ca: {
            mainTitle: "Incendis forestals a Espanya entre 2001 i 2015",
            introText: "A continuació es mostra el primer projecte que he desenvolupat. Aquest projecte analitza els incendis forestals a Espanya entre el 2001 i el 2015. La presentació proporciona una visió detallada de les dades i les tendències observades durant aquest període.",
            slidesSrc: "https://docs.google.com/presentation/d/e/2PACX-1vT7jw5G5OgNZXPOB5azYFU5aESmPJOgvvcxaLG0X9CjwEXkT1yHgwWT5PM5mT8N7PZ7fAb-VIkdeUAU/embed?start=false&loop=false&delayms=3000",
            languageButton: "Idioma",
            footerText: "© Portafoli | Sergi Cózar Badia"
        }
    };

    function updateContent(language) {
        const translation = translations[language];

        document.querySelector('.title-section h1').innerText = translation.mainTitle;
        document.querySelector('.intro-text p').innerText = translation.introText;
        document.querySelector('.presentation-container iframe').src = translation.slidesSrc;

        document.getElementById('language-button').innerText = translation.languageButton;

        document.querySelector('footer p').innerText = translation.footerText;
    }

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
            updateContent(selectedLang);
        });
    });

    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !languageButton.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    updateContent('es');
});
