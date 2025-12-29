export class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="homePage" class="page-content">
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-4 fw-bold mb-4">Master Programming with Interactive Learning</h1>
                            <p class="lead mb-4">Learn to code with hands-on exercises, real-time feedback, and
                                personalized learning paths. From beginner to advanced, we've got you covered.</p>
                            <div class="d-flex flex-column flex-sm-row">
                                <button class="btn btn-light btn-lg me-sm-3 mb-3 mb-sm-0" id="getStartedBtn">Start
                                    Learning</button>
                                <button class="btn btn-outline-light btn-lg" id="exploreBtn">Explore Languages</button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="code-editor">
                                <div class="code-editor-header">
                                    <div class="code-editor-title">main.js</div>
                                    <div class="code-editor-actions">
                                        <button><i class="bi bi-copy"></i></button>
                                        <button><i class="bi bi-play-fill"></i></button>
                                    </div>
                                </div>
                                <div class="code-editor-content">
                                    <pre><code class="language-javascript">// Welcome to Smart Tutor
function greetUser(name) {
  return \`Hello, \${name}! Welcome to Smart Tutor.\`;
}
console.log(greetUser("Developer"));</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Features Section -->
            <section class="py-5">
                <div class="container">
                    <div class="row text-center mb-5">
                        <div class="col-12">
                            <h2 class="fw-bold">Why Choose Smart Tutor?</h2>
                            <p class="lead text-muted">Our platform offers unique features to accelerate your coding
                                journey</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card h-100">
                                <div class="card-body text-center p-4">
                                    <div class="language-icon mb-3">
                                        <i class="bi bi-play-circle"></i>
                                    </div>
                                    <h4 class="card-title">Interactive Videos</h4>
                                    <p class="card-text">Learn with our curated video tutorials from industry experts,
                                        with in-video quizzes and exercises.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100">
                                <div class="card-body text-center p-4">
                                    <div class="language-icon mb-3">
                                        <i class="bi bi-controller"></i>
                                    </div>
                                    <h4 class="card-title">Coding Games</h4>
                                    <p class="card-text">Master programming concepts through fun, interactive games that
                                        challenge and engage you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100">
                                <div class="card-body text-center p-4">
                                    <div class="language-icon mb-3">
                                        <i class="bi bi-trophy"></i>
                                    </div>
                                    <h4 class="card-title">Achievement System</h4>
                                    <p class="card-text">Earn badges and certificates as you progress. Track your
                                        learning journey and celebrate your milestones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Popular Languages Section -->
            <section class="py-5 bg-light">
                <div class="container">
                    <div class="row text-center mb-5">
                        <div class="col-12">
                            <h2 class="fw-bold">Popular Programming Languages</h2>
                            <p class="lead text-muted">Start your coding journey with these in-demand languages</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-3 col-6">
                            <div class="card language-card h-100" data-language="javascript">
                                <div class="language-icon">
                                    <i class="bi bi-filetype-js"></i>
                                </div>
                                <h5>JavaScript</h5>
                                <p class="text-muted">Web Development</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" style="width: 45%"></div>
                                </div>
                                <small>45% Complete</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="card language-card h-100" data-language="python">
                                <div class="language-icon">
                                    <i class="bi bi-filetype-py"></i>
                                </div>
                                <h5>Python</h5>
                                <p class="text-muted">Data Science, AI</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" style="width: 30%"></div>
                                </div>
                                <small>30% Complete</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="card language-card h-100" data-language="java">
                                <div class="language-icon">
                                    <i class="bi bi-cup-hot"></i>
                                </div>
                                <h5>Java</h5>
                                <p class="text-muted">Enterprise, Android</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" style="width: 65%"></div>
                                </div>
                                <small>65% Complete</small>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="card language-card h-100" data-language="cpp">
                                <div class="language-icon">
                                    <i class="bi bi-file-code"></i>
                                </div>
                                <h5>C++</h5>
                                <p class="text-muted">System Programming</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" style="width: 20%"></div>
                                </div>
                                <small>20% Complete</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;

        // Event listeners based on init() logic
        this.querySelector('#getStartedBtn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'languages' }, bubbles: true, composed: true }));
        });
        this.querySelector('#exploreBtn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'languages' }, bubbles: true, composed: true }));
        });
        this.querySelectorAll('.language-card').forEach(card => {
            card.addEventListener('click', () => {
                const language = card.dataset.language;
                // Since this needs to pass data (language), we might need a more robust router or storing state.
                // For now, I'll store it in localStorage or handle it in main.js
                // Let's dispatch a specialized event.
                this.dispatchEvent(new CustomEvent('navigate', {
                    detail: { page: 'lesson', context: { language } },
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
}

customElements.define('app-home-page', HomePage);
