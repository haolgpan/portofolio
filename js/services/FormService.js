export class FormService {
    static async submitForm(formData) {
        try {
            // Aquí iría la lógica para enviar el formulario
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Error submitting form:', error);
            throw error;
        }
    }
} 