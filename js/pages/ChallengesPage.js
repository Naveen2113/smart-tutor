export class ChallengesPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="challengesPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Home
                </button>
                <h2 class="mb-4">Coding Challenges</h2>

                <!-- Challenge Filters -->
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-md-3 col-6">
                                <select class="form-select" id="languageFilter">
                                    <option value="all">All Languages</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="java">Java</option>
                                    <option value="cpp">C++</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-6">
                                <select class="form-select" id="difficultyFilter">
                                    <option value="all">All Difficulties</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-6">
                                <select class="form-select" id="categoryFilter">
                                    <option value="all">All Categories</option>
                                    <option value="algorithms">Algorithms</option>
                                    <option value="data-structures">Data Structures</option>
                                    <option value="strings">Strings</option>
                                    <option value="math">Mathematics</option>
                                </select>
                            </div>
                            <div class="col-md-3 col-6">
                                <button class="btn btn-primary w-100" id="applyFiltersBtn">Apply Filters</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Challenge Cards -->
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card challenge-card h-100">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Two Sum</h5>
                                <span class="difficulty-badge difficulty-easy">Easy</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Given an array of integers nums and an integer target, return
                                    indices of the two numbers such that they add up to target.</p>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="badge bg-primary">Algorithms</span>
                                    <span class="badge bg-secondary">Array</span>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span><i class="bi bi-check-circle-fill text-success"></i> 89% Success Rate</span>
                                    <span><i class="bi bi-people"></i> 1.2M Attempts</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary w-100">Solve Challenge</button>
                            </div>
                        </div>
                    </div>
                    <!-- Other cards would be here -->
                </div>
            </div>
        </div>
        `;

        this.querySelector('.back-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' }, bubbles: true, composed: true }));
        });

        this.querySelectorAll('.challenge-card .btn-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // In case it was a link, though it's a button
                // Identify the challenge, e.g. from the card title
                const title = e.target.closest('.challenge-card').querySelector('h5').textContent;
                this.dispatchEvent(new CustomEvent('navigate', {
                    detail: { page: 'challenge', context: { title } },
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}

customElements.define('app-challenges-page', ChallengesPage);
