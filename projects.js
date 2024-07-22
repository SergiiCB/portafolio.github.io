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
        title: "Proyectos",
        description: "Estos son algunos de mis proyectos",
        toolsTitle: "Herramientas",
        languageButton: "Idioma",
        footerText: "&copy; Portafolio | Sergi Cózar Badia",
        projects: [
            {
                category: "Tableau",
                projects: [
                    {
                        title: "Incendios forestales en España",
                        description: "Entre el 2001 y 2015",
                        imgAlt: "Proyecto 1"
                    },
                    {
                        title: "Proyecto 2",
                        description: "Descripción del proyecto 2",
                        imgAlt: "Proyecto 2"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Proyecto 1",
                        description: "Descripción del proyecto 1",
                        imgAlt: "Proyecto 1"
                    },
                    {
                        title: "Proyecto 2",
                        description: "Descripción del proyecto 2",
                        imgAlt: "Proyecto 2"
                    }
                ]
            }
        ]
    },
    en: {
        title: "Projects",
        description: "Here are some of my projects",
        toolsTitle: "Tools",
        languageButton: "Language",
        footerText: "&copy; Portfolio | Sergi Cózar Badia",
        projects: [
            {
                category: "Tableau",
                projects: [
                    {
                        title: "Forest Fires in Spain",
                        description: "Between 2001 and 2015",
                        imgAlt: "Project 1"
                    },
                    {
                        title: "Project 2",
                        description: "Project 2 description",
                        imgAlt: "Project 2"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Project 1",
                        description: "Project 1 description",
                        imgAlt: "Project 1"
                    },
                    {
                        title: "Project 2",
                        description: "Project 2 description",
                        imgAlt: "Project 2"
                    }
                ]
            }
        ]
    },
    ca: {
        title: "Projectes",
        description: "Aquests són alguns dels meus projectes",
        toolsTitle: "Eines",
        languageButton: "Idioma",
        footerText: "&copy; Portafoli | Sergi Cózar Badia",
        projects: [
            {
                category: "Tableau",
                projects: [
                    {
                        title: "Incendis forestals a Espanya",
                        description: "Entre el 2001 i 2015",
                        imgAlt: "Projecte 1"
                    },
                    {
                        title: "Projecte 2",
                        description: "Descripció del projecte 2",
                        imgAlt: "Projecte 2"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Projecte 1",
                        description: "Descripció del projecte 1",
                        imgAlt: "Projecte 1"
                    },
                    {
                        title: "Projecte 2",
                        description: "Descripció del projecte 2",
                        imgAlt: "Projecte 2"
                    }
                ]
            }
        ]
    }
};

function updateContent(language) {
    const translation = translations[language];

    // Actualizar títulos y descripciones generales
    document.querySelector('.title-projects h1').innerText = translation.title;
    document.querySelector('.title-projects p').innerText = translation.description;

    // Actualizar botón de idioma
    document.getElementById('language-button').innerText = translation.languageButton;

    // Actualizar pie de página
    document.querySelector('footer p').innerHTML = translation.footerText;

    // Actualizar secciones de proyectos
    const detailedProjects = document.querySelector('.detailed-projects');
    detailedProjects.innerHTML = ''; // Limpiar contenido actual
}

// Botón Idiomas

document.addEventListener("DOMContentLoaded", function() {
    const languageButton = document.getElementById('language-button');
    const dropdown = document.querySelector('.dropdown');
    const languageLinks = document.querySelectorAll('.lang');

    function toggleDropdown() {
        dropdown.classList.toggle('show');
    }

    languageButton.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown();
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
