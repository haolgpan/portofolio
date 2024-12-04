import { Projects } from '../../js/components/Projects.js';

describe('Projects Component', () => {
    let projects;

    beforeEach(() => {
        projects = new Projects();
    });

    test('should render all projects', () => {
        const element = projects.render();
        const projectCards = element.querySelectorAll('.project-card');
        
        expect(projectCards.length).toBe(projects.projects.length);
    });

    test('should render project card with all required elements', () => {
        const element = projects.render();
        const firstCard = element.querySelector('.project-card');
        
        expect(firstCard.querySelector('h3')).not.toBeNull();
        expect(firstCard.querySelector('.project-description')).not.toBeNull();
        expect(firstCard.querySelector('.project-technologies')).not.toBeNull();
        expect(firstCard.querySelectorAll('.project-link').length).toBe(2);
    });

    test('should render correct technologies', () => {
        const element = projects.render();
        const firstCard = element.querySelector('.project-card');
        const techTags = firstCard.querySelectorAll('.tech-tag');
        
        expect(techTags.length).toBe(projects.projects[0].technologies.length);
    });
}); 