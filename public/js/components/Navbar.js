export class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#"><i class="bi bi-code-slash"></i> Smart Tutor</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" data-page="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="languages">Languages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="challenges">Challenges</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="games">Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="profile">Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown">
                                <i class="bi bi-person-circle"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Help</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

        this.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const page = link.getAttribute('data-page');
                if (page) {
                    e.preventDefault();
                    this.setActiveLink(page);
                    this.dispatchEvent(new CustomEvent('navigate', {
                        detail: { page },
                        bubbles: true,
                        composed: true
                    }));
                }
            });
        });
    }

    setActiveLink(pageName) {
        this.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('app-navbar', Navbar);
