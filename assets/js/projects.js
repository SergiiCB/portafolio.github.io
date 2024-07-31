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
        description: "A continuación, se presentan algunos de los proyectos destacados que he realizado.<br>Próximamente, seguiré incorporando nuevos proyectos y actualizando los existentes para reflejar mi crecimiento profesional y las nuevas competencias adquiridas.",
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
        description: "Here are some of the standout projects I have completed.<br>Soon, I will continue to add new projects and update existing ones to reflect my professional growth and newly acquired competencies.",
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
        description: "A continuació, es presenten alguns dels projectes destacats que he realitzat.<br>Pròximament, continuaré incorporant nous projectes i actualitzant els existents per reflectir el meu creixement professional i les noves competències adquirides.",
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

    document.querySelector('.title-projects h1').innerText = translation.title;
    document.querySelector('.title-projects p').innerHTML = translation.description;

    document.getElementById('language-button').innerText = translation.languageButton;

    document.querySelector('footer p').innerHTML = translation.footerText;

    const detailedProjects = document.querySelector('.detailed-projects');
    detailedProjects.innerHTML = '';

    translation.projects.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.innerText = category.category;
        detailedProjects.appendChild(categoryTitle);

        const projectList = document.createElement('div');
        projectList.classList.add('project-list');

        category.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectImg = document.createElement('img');
            projectImg.classList.add('project-img');
            projectImg.src = project.imgSrc;
            projectImg.alt = project.imgAlt;
            projectImg.setAttribute('data-url', project.url);
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

document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll('.project-img');

    projectImages.forEach(image => {
        image.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
