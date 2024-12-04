export class Skills {
    constructor() {
        this.skills = [
            'JavaScript', 'React', 'Node.js', 'Python',
            'SQL', 'Git', 'AWS', 'Docker'
        ];
    }

    render() {
        const section = document.createElement('section');
        section.id = 'skills';
        
        section.innerHTML = `
            <h2 class="section-title">Skills</h2>
            <div class="skills">
                ${this.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        `;
        
        return section;
    }
} 