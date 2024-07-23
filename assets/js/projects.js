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
                        imgSrc: "assets/images/projects/project_1.png",
                        imgAlt: "Proyecto 1",
                        url: "project_1.html"
                    },
                    {
                        title: "Proyecto 2",
                        description: "Descripción del proyecto 2",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Proyecto 2",
                        url: "proyecto2.html"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Proyecto 1",
                        description: "Descripción del proyecto 1",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Proyecto 1",
                        url: "proyecto1.html"
                    },
                    {
                        title: "Proyecto 2",
                        description: "Descripción del proyecto 2",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Proyecto 2",
                        url: "proyecto2.html"
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
                        imgSrc: "assets/images/projects/project_1.png",
                        imgAlt: "Project 1",
                        url: "project_1.html"
                    },
                    {
                        title: "Project 2",
                        description: "Project 2 description",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Project 2",
                        url: "project2.html"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Project 1",
                        description: "Project 1 description",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Project 1",
                        url: "project1.html"
                    },
                    {
                        title: "Project 2",
                        description: "Project 2 description",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Project 2",
                        url: "project2.html"
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
                        imgSrc: "assets/images/projects/project_1.png",
                        imgAlt: "Projecte 1",
                        url: "project_1.html"
                    },
                    {
                        title: "Projecte 2",
                        description: "Descripció del projecte 2",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Projecte 2",
                        url: "projecte2.html"
                    }
                ]
            },
            {
                category: "Python",
                projects: [
                    {
                        title: "Projecte 1",
                        description: "Descripció del projecte 1",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Projecte 1",
                        url: "projecte1.html"
                    },
                    {
                        title: "Projecte 2",
                        description: "Descripció del projecte 2",
                        imgSrc: "assets/images/projects/comingsoon.png",
                        imgAlt: "Projecte 2",
                        url: "projecte2.html"
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

    translation.projects.forEach(category => {
        // Crear y añadir la categoría del proyecto
        const categoryTitle = document.createElement('h2');
        categoryTitle.innerText = category.category;
        detailedProjects.appendChild(categoryTitle);

        const projectList = document.createElement('div');
        projectList.classList.add('project-list');

        category.projects.forEach(project => {
            // Crear y añadir cada proyecto
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectImg = document.createElement('img');
            projectImg.classList.add('project-img');
            projectImg.src = project.imgSrc;
            projectImg.alt = project.imgAlt;
            projectImg.setAttribute('data-url', project.url); // Añadir atributo data-url
            projectItem.appendChild(projectImg);

            const projectTitle = document.createElement('h3');
            projectTitle.innerText = project.title;
            projectItem.appendChild(projectTitle);

            const projectDesc = document.createElement('p');
            projectDesc.innerText = project.description;
            projectItem.appendChild(projectDesc);

            projectList.appendChild(projectItem);
        });

        detailedProjects.appendChild(projectList);
    });

    // Agregar eventos de click a las imágenes de los proyectos para redirección
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
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
