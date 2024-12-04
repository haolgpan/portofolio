import { About } from '../../js/components/About.js';

describe('About Component', () => {
    let about;

    beforeEach(() => {
        about = new About();
    });

    test('should render about section with required elements', () => {
        const element = about.render();
        
        expect(element.querySelector('h2')).not.toBeNull();
        expect(element.querySelector('.about-text')).not.toBeNull();
        expect(element.querySelectorAll('h3').length).toBe(2); // Education & Skills
    });

    test('should contain education and skills sections', () => {
        const element = about.render();
        const sections = element.querySelectorAll('h3');
        
        const sectionTitles = Array.from(sections).map(section => section.textContent);
        expect(sectionTitles).toContain('Education');
        expect(sectionTitles).toContain('Skills');
    });
}); 