export class ProfilePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="profilePage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Home
                </button>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <img src="https://via.placeholder.com/150" alt="Profile" class="profile-avatar">
                                <h4>Alex Developer</h4>
                                <p class="text-muted">Full Stack Developer</p>
                                <p class="mb-4">Joined: January 2023</p>

                                <button class="btn btn-primary w-100 mb-3">Edit Profile</button>
                                <button class="btn btn-outline-secondary w-100">Settings</button>
                            </div>
                        </div>
                        <!-- Skills Card -->
                        <div class="card mt-4">
                            <div class="card-header">
                                <h5 class="mb-0">Skills</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span>JavaScript</span>
                                        <span>Advanced</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 85%;"
                                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- More skills... -->
                                 <div class="mb-3">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span>Python</span>
                                        <span>Intermediate</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 65%;"
                                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <button class="btn btn-sm btn-outline-primary w-100">Add Skill</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <ul class="nav nav-tabs mb-4" id="profileTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="achievements-tab" data-bs-toggle="tab"
                                    data-bs-target="#achievements" type="button" role="tab">Achievements</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="certificates-tab" data-bs-toggle="tab"
                                    data-bs-target="#certificates" type="button" role="tab">Certificates</button>
                            </li>
                             <li class="nav-item" role="presentation">
                                <button class="nav-link" id="activity-tab" data-bs-toggle="tab"
                                    data-bs-target="#activity" type="button" role="tab">Activity</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="roadmap-tab" data-bs-toggle="tab" data-bs-target="#roadmap"
                                    type="button" role="tab">Learning Roadmap</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="profileTabsContent">
                             <!-- Achievements Tab -->
                            <div class="tab-pane fade show active" id="achievements" role="tabpanel">
                                <div class="row g-4">
                                    <div class="col-md-4 col-6">
                                        <div class="card text-center">
                                            <div class="card-body">
                                                <div class="achievement-badge mx-auto mb-3">
                                                    <i class="bi bi-star-fill"></i>
                                                </div>
                                                <h5>Code Ninja</h5>
                                                <p class="text-muted">Solved 10 challenges in one day</p>
                                                <small class="text-muted">Earned: 2 days ago</small>
                                                <div class="mt-2">
                                                    <span class="badge bg-warning">+100 pts</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- More achievements -->
                                </div>
                            </div>
                            <!-- Placeholder for other tabs -->
                            <div class="tab-pane fade" id="certificates" role="tabpanel"><p>Certificates content</p></div>
                            <div class="tab-pane fade" id="activity" role="tabpanel"><p>Activity content</p></div>
                            <div class="tab-pane fade" id="roadmap" role="tabpanel"><p>Roadmap content</p></div>
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

customElements.define('app-profile-page', ProfilePage);
