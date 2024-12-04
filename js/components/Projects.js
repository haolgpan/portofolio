export class Projects {
    constructor() {
        this.projects = [
            {
                title: 'E-commerce Platform',
                description: 'A full-stack e-commerce solution built with React and Node.js',
                technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
                image: 'path/to/project1.jpg',
                link: '#',
                github: '#'
            },
            {
                title: 'Portfolio Website',
                description: 'Personal portfolio website built with vanilla JavaScript and CSS',
                technologies: ['JavaScript', 'HTML', 'CSS'],
                image: 'path/to/project2.jpg',
                link: '#',
                github: '#'
            }
            // Puedes agregar más proyectos aquí
        ];
    }

    render() {
        const section = document.createElement('section');
        section.className = 'projects-page';
        
        section.innerHTML = `
            <div class="projects-content">
                <h2 class="section-title">My Projects</h2>
                <div class="projects-grid">
                    ${this.projects.map(project => this.createProjectCard(project)).join('')}
                </div>
            </div>
        `;
        return section;
    }

    createProjectCard(project) {
        return `
            <div class="project-card">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.link}" class="project-link" target="_blank">View Live</a>
                        <a href="${project.github}" class="project-link github" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        `;
    }
} 