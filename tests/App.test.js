import { App } from '../js/main.js';

describe('App', () => {
    let app;
    let container;

    beforeEach(() => {
        // Setup del DOM
        container = document.createElement('div');
        container.id = 'app';
        document.body.appendChild(container);

        // Setup de la navegación
        const nav = document.createElement('nav');
        nav.innerHTML = `
            <ul>
                <li><a href="#" class="nav-link" data-page="home">Home</a></li>
                <li><a href="#" class="nav-link" data-page="about">About</a></li>
                <li><a href="#" class="nav-link" data-page="projects">Projects</a></li>
            </ul>
        `;
        document.body.appendChild(nav);

        app = new App();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('should initialize with home page', () => {
        expect(app.currentPage).toBe('home');
        expect(container.innerHTML).not.toBe('');
    });

    test('should navigate to about page', () => {
        const aboutLink = document.querySelector('[data-page="about"]');
        aboutLink.click();
        
        expect(app.currentPage).toBe('about');
        expect(aboutLink.classList.contains('active')).toBe(true);
    });

    test('should handle navigation errors gracefully', () => {
        const consoleSpy = jest.spyOn(console, 'error');
        app.navigateTo('nonexistent');
        
        expect(consoleSpy).toHaveBeenCalled();
        expect(app.currentPage).toBe('home'); // Should stay on current page
    });
}); 