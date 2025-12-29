export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-copyright">
                        &copy; 2023 Smart Tutor. All rights reserved.
                    </div>
                    <div class="footer-links">
                        <a href="#" data-page="home">Home</a>
                        <a href="#" data-page="dashboard">Dashboard</a>
                        <a href="#" data-page="languages">Languages</a>
                        <a href="#" data-page="challenges">Challenges</a>
                        <a href="#" data-page="games">Games</a>
                    </div>
                </div>
            </div>
        </footer>
        `;

        this.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                if (page) {
                    this.dispatchEvent(new CustomEvent('navigate', {
                        detail: { page },
                        bubbles: true,
                        composed: true
                    }));
                }
            });
        });
    }
}

customElements.define('app-footer', Footer);
