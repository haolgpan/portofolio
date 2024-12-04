import { FormService } from '../services/FormService.js';

export class Contact {
    constructor() {
        this.formData = {};
    }

    render() {
        const section = document.createElement('section');
        section.id = 'contact';
        
        section.innerHTML = `
            <h2 class="section-title">Contact Me</h2>
            <form class="contact-form" id="contactForm">
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        `;

        // Agregamos el event listener después de crear el formulario
        setTimeout(() => {
            const form = section.querySelector('#contactForm');
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }, 0);
        
        return section;
    }

    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            await FormService.submitForm(data);
            alert('Message sent successfully!');
            event.target.reset();
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    }
} 