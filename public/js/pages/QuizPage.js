import { quizData, userState } from '../data.js';

export class QuizPage extends HTMLElement {
    constructor() {
        super();
        this.currentQuestionIndex = 0;
        this.timerInterval = null;
    }

    connectedCallback() {
        this.render();
        this.startQuiz();
    }

    disconnectedCallback() {
        if (this.timerInterval) clearInterval(this.timerInterval);
    }

    render() {
        this.innerHTML = `
        <div id="quizPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Lesson
                </button>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card">
                            <div
                                class="card-header d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                <h4 class="mb-2 mb-sm-0">Quiz: JavaScript Functions</h4>
                                <div class="d-flex align-items-center">
                                    <div class="quiz-timer me-3">
                                        <i class="bi bi-clock"></i>
                                        <span id="quizTimer">05:00</span>
                                    </div>
                                    <span>Question <span id="currentQuestionNum">1</span> of <span
                                            id="totalQuestions">${quizData.length}</span></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="progress mb-4">
                                    <div class="progress-bar" id="quizProgressBar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="quiz-question" id="questionText"></div>

                                <div class="quiz-options-grid" id="quizOptions">
                                    <!-- Options will be injected here -->
                                </div>

                                <div class="quiz-explanation" id="quizExplanation">
                                    <h5>Explanation:</h5>
                                    <p id="explanationText"></p>
                                </div>

                                <div class="d-flex justify-content-between mt-4">
                                    <button class="btn btn-outline-secondary" id="prevQuestionBtn" disabled>
                                        <i class="bi bi-chevron-left"></i> Previous
                                    </button>
                                    <button class="btn btn-primary" id="nextQuestionBtn">
                                        Next <i class="bi bi-chevron-right"></i>
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

        this.prevBtn = this.querySelector('#prevQuestionBtn');
        this.nextBtn = this.querySelector('#nextQuestionBtn');

        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.displayQuestion();
        this.startTimer();
    }

    displayQuestion() {
        const question = quizData[this.currentQuestionIndex];
        this.querySelector('#questionText').textContent = question.question;
        this.querySelector('#currentQuestionNum').textContent = this.currentQuestionIndex + 1;

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / quizData.length) * 100;
        this.querySelector('#quizProgressBar').style.width = `${progress}%`;

        // Render options
        const optionsContainer = this.querySelector('#quizOptions');
        optionsContainer.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
            const letter = letters[index];
            const optionKey = letter.toLowerCase();

            const card = document.createElement('div');
            card.className = 'quiz-option-card';
            card.dataset.option = optionKey;
            card.innerHTML = `
                <div class="quiz-option-letter">${letter}</div>
                <div class="quiz-option-text">${option}</div>
            `;

            // Check if user already answered this question (state persistence could be added here)
            if (userState.selectedAnswers[this.currentQuestionIndex] === optionKey) {
                card.classList.add('selected');
            }

            card.addEventListener('click', () => this.selectOption(optionKey));
            optionsContainer.appendChild(card);
        });

        // Reset explanation
        this.querySelector('#quizExplanation').classList.remove('show');

        // Update buttons
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        if (this.currentQuestionIndex === quizData.length - 1) {
            this.nextBtn.textContent = 'Finish Quiz';
        } else {
            this.nextBtn.innerHTML = 'Next <i class="bi bi-chevron-right"></i>';
        }
    }

    selectOption(optionKey) {
        // Save answer
        userState.selectedAnswers[this.currentQuestionIndex] = optionKey;

        // Update UI
        this.querySelectorAll('.quiz-option-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.option === optionKey) {
                card.classList.add('selected');
            }
        });
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        // Validation: must select an answer
        if (!userState.selectedAnswers[this.currentQuestionIndex]) {
            alert('Please select an answer!');
            return;
        }

        if (this.currentQuestionIndex < quizData.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        // Calculate score
        let score = 0;
        quizData.forEach((q, index) => {
            if (userState.selectedAnswers[index] === q.correctAnswer) {
                score++;
            }
        });

        // Navigate to results
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: {
                page: 'quiz-results',
                context: { score, total: quizData.length }
            },
            bubbles: true,
            composed: true
        }));
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        let time = 300; // 5 mins
        const timerDisplay = this.querySelector('#quizTimer');

        this.timerInterval = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            time--;

            if (time < 0) {
                clearInterval(this.timerInterval);
                this.finishQuiz();
            }
        }, 1000);
    }
}

customElements.define('app-quiz-page', QuizPage);
