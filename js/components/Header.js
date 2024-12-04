export class Header {
    constructor() {
        this.data = {
            name: 'Hao Pan',
            role: 'Software Developer at Barcelona',
            salutation: 'Hello!',
            description: `My name is Hao Pan and I am a recent graduate from 
                HNC in Software Development in Barcelona. `
        };
    }

    render() {
        const header = document.createElement('header');
        header.innerHTML = `
            <div class="header-content">
                <h1>${this.data.name}</h1>
                <h2 class="role">${this.data.role}</h2>
                <p class="salutation">${this.data.salutation}</p>
                <p class="description">${this.data.description}</p>
            </div>
        `;
        return header;
    }
} 