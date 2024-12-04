import { Header } from '../../js/components/Header.js';

describe('Header Component', () => {
    let header;

    beforeEach(() => {
        header = new Header();
    });

    test('should render all required elements', () => {
        const element = header.render();
        
        expect(element.tagName).toBe('HEADER');
        expect(element.querySelector('h1')).not.toBeNull();
        expect(element.querySelector('.role')).not.toBeNull();
        expect(element.querySelector('.salutation')).not.toBeNull();
        expect(element.querySelector('.description')).not.toBeNull();
    });

    test('should contain correct text content', () => {
        const element = header.render();
        
        expect(element.querySelector('h1').textContent).toBe('Hao Pan');
        expect(element.querySelector('.role').textContent)
            .toBe('Software Developer at Barcelona');
    });
}); 