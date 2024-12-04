import { Header } from './components/Header.js';
import { Projects } from './components/Projects.js';
import { About } from './components/About.js';
import { Home } from './components/Home.js';

class App {
    constructor() {
        this.currentPage = 'home';
        this.pages = {
            home: new Home(),
            about: new About(),
            projects: new Projects()
        };
        this.init();
    }

    init() {
        console.log('Iniciando aplicación...');
        this.setupNavigation();
        this.renderPage(this.currentPage);
    }

    setupNavigation() {
        const links = document.querySelectorAll('.nav-link');
        console.log('Links encontrados:', links.length);

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const page = event.target.dataset.page;
                console.log('Click en link:', page);
                
                if (page && this.pages[page]) {
                    // Actualizar clase active
                    links.forEach(l => l.classList.remove('active'));
                    event.target.classList.add('active');
                    
                    // Navegar a la página
                    this.navigateTo(page);
                } else {
                    console.error('Página no encontrada:', page);
                }
            });
        });
    }

    navigateTo(page) {
        console.log('Navegando a:', page);
        this.currentPage = page;
        this.renderPage(page);
    }

    renderPage(page) {
        console.log('Renderizando página:', page);
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            console.error('Container no encontrado');
            return;
        }

        try {
            appContainer.innerHTML = '';
            const pageComponent = this.pages[page].render();
            appContainer.appendChild(pageComponent);
        } catch (error) {
            console.error('Error al renderizar página:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, iniciando App...');
    new App();
}); 