export class About {
    render() {
        const section = document.createElement('section');
        section.className = 'about-page';
        
        section.innerHTML = `
            <div class="about-content">
                <h2>About Me</h2>
                <div class="about-text">
                    <p>I am a passionate software developer based in Barcelona...</p>
                    <h3>Education</h3>
                    <ul>
                        <li>HNC in Software Development</li>
                    </ul>
                    <h3>Skills</h3>
                    <ul>
                        <li>Frontend: HTML, CSS, JavaScript, React</li>
                        <li>Backend: Node.js, Python</li>
                        <li>Database: MySQL, MongoDB</li>
                    </ul>
                </div>
            </div>
        `;
        
        return section;
    }
} 