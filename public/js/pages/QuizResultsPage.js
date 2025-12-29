export class QuizResultsPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // In a real app we would get these from props/attributes.
        // For now, I'll default them. Main.js can set them before appending the element
        const score = this.score || 0;
        const total = this.total || 5;
        const percentage = Math.round((score / total) * 100);

        this.innerHTML = `
        <div id="quizResultsPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Lesson
                </button>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card text-center">
                            <div class="card-body py-5">
                                <div class="mb-4">
                                    <i class="bi bi-trophy-fill text-warning" style="font-size: 4rem;"></i>
                                </div>
                                <h2 class="mb-3">Quiz Completed!</h2>
                                <h3 class="mb-4">Your Score: <span id="quizScore">${score}</span> out of <span
                                        id="quizTotalQuestions">${total}</span></h3>
                                <div class="progress mb-4 mx-auto" style="width: 300px;">
                                    <div class="progress-bar" role="progressbar" style="width: ${percentage}%;" aria-valuenow="${percentage}"
                                        aria-valuemin="0" aria-valuemax="100">${percentage}%</div>
                                </div>
                                <p class="lead mb-4">Great job! You've successfully completed the quiz.</p>

                                <div class="row mb-4">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5>Correct Answers</h5>
                                                <h3 class="text-success">${score}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5>Incorrect Answers</h5>
                                                <h3 class="text-danger">${total - score}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5>Points Earned</h5>
                                                <h3 class="text-warning">+${score * 25}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-column flex-sm-row justify-content-center">
                                    <button class="btn btn-outline-primary me-sm-3 mb-2 mb-sm-0" id="retakeQuizBtn">
                                        <i class="bi bi-arrow-clockwise me-2"></i> Retake Quiz
                                    </button>
                                    <button class="btn btn-success" id="continueCourseBtn">
                                        <i class="bi bi-arrow-right me-2"></i> Continue Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelector('.back-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'lesson' }, bubbles: true, composed: true }));
        });

        this.querySelector('#retakeQuizBtn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'quiz' }, bubbles: true, composed: true }));
        });

        this.querySelector('#continueCourseBtn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'lesson' }, bubbles: true, composed: true }));
        });
    }
}

customElements.define('app-quiz-results-page', QuizResultsPage);
