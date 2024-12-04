import { Header } from './Header.js';

export class Home {
    render() {
        const section = document.createElement('section');
        section.className = 'home-page';
        
        // Crear el header manualmente en lugar de usar outerHTML
        const header = new Header().render();
        section.appendChild(header);
        
        return section;
    }
} 