export class DashboardPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="dashboardPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Home
                </button>
                <h2 class="mb-4">Learning Dashboard</h2>

                <!-- Stats Cards -->
                <div class="row mb-4">
                    <div class="col-md-3 col-6">
                        <div class="stats-card">
                            <i class="bi bi-code-slash text-primary fs-1 mb-3"></i>
                            <div class="stats-number">8</div>
                            <p class="mb-0">Languages</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stats-card">
                            <i class="bi bi-clock-history text-success fs-1 mb-3"></i>
                            <div class="stats-number">124</div>
                            <p class="mb-0">Hours</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stats-card">
                            <i class="bi bi-trophy text-warning fs-1 mb-3"></i>
                            <div class="stats-number">42</div>
                            <p class="mb-0">Challenges</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="stats-card">
                            <i class="bi bi-fire text-danger fs-1 mb-3"></i>
                            <div class="stats-number">15</div>
                            <p class="mb-0">Day Streak</p>
                        </div>
                    </div>
                </div>
                <!-- Continue Learning Section -->
                <div class="row mb-4">
                    <div class="col-lg-8">
                        <div class="dashboard-card">
                            <h4 class="mb-4">Continue Learning</h4>
                            <div class="list-group list-group-flush">
                                <div class="list-group-item px-0">
                                    <div
                                        class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                        <div class="mb-2 mb-sm-0">
                                            <h5 class="mb-1">JavaScript Fundamentals</h5>
                                            <p class="mb-1 text-muted">Last accessed: Yesterday</p>
                                        </div>
                                        <div class="text-center mb-2 mb-sm-0">
                                            <div class="mb-1">65%</div>
                                            <div class="progress" style="width: 150px;">
                                                <div class="progress-bar" role="progressbar" style="width: 65%;"
                                                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary btn-sm">Continue</button>
                                    </div>
                                </div>
                                <div class="list-group-item px-0">
                                    <div
                                        class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                        <div class="mb-2 mb-sm-0">
                                            <h5 class="mb-1">Python for Data Science</h5>
                                            <p class="mb-1 text-muted">Last accessed: 3 days ago</p>
                                        </div>
                                        <div class="text-center mb-2 mb-sm-0">
                                            <div class="mb-1">40%</div>
                                            <div class="progress" style="width: 150px;">
                                                <div class="progress-bar" role="progressbar" style="width: 40%;"
                                                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary btn-sm">Continue</button>
                                    </div>
                                </div>
                                <div class="list-group-item px-0">
                                    <div
                                        class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                        <div class="mb-2 mb-sm-0">
                                            <h5 class="mb-1">React Development</h5>
                                            <p class="mb-1 text-muted">Last accessed: 1 week ago</p>
                                        </div>
                                        <div class="text-center mb-2 mb-sm-0">
                                            <div class="mb-1">85%</div>
                                            <div class="progress" style="width: 150px;">
                                                <div class="progress-bar" role="progressbar" style="width: 85%;"
                                                    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary btn-sm">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="dashboard-card">
                            <h4 class="mb-4">Recent Achievements</h4>
                            <div class="d-flex flex-column align-items-center">
                                <div class="achievement-badge mb-3">
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <h5>Code Ninja</h5>
                                <p class="text-center text-muted">Solved 10 challenges in one day</p>
                                <small class="text-muted">2 days ago</small>
                            </div>
                            <hr>
                            <div class="d-flex flex-column align-items-center">
                                <div class="achievement-badge mb-3">
                                    <i class="bi bi-lightning-fill"></i>
                                </div>
                                <h5>Speed Coder</h5>
                                <p class="text-center text-muted">Completed a challenge in record time</p>
                                <small class="text-muted">1 week ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelector('.back-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' }, bubbles: true, composed: true }));
        });
    }
}

customElements.define('app-dashboard-page', DashboardPage);
