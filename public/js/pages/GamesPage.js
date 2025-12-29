export class GamesPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="gamesPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Home
                </button>
                <h2 class="mb-4">Coding Games</h2>
                <p class="lead mb-4">Learn programming concepts through fun and interactive games. Earn achievements as
                    you play!</p>

                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="game-container">
                            <div class="game-header">
                                <h3 class="game-title">Code Blocks Puzzle</h3>
                                <div class="game-score">
                                    <i class="bi bi-star-fill"></i>
                                    <span>0 pts</span>
                                </div>
                            </div>
                            <div class="game-board" id="codeBlocksGame">
                                <div class="mb-3">
                                    <h5>Arrange the code blocks in the correct order to create a function that adds two
                                        numbers:</h5>
                                </div>

                                <div class="drop-zone" data-order="1">
                                    Drop code block here
                                </div>
                                <div class="drop-zone" data-order="2">
                                    Drop code block here
                                </div>
                                <div class="drop-zone" data-order="3">
                                    Drop code block here
                                </div>
                                <div class="drop-zone" data-order="4">
                                    Drop code block here
                                </div>

                                <div class="mt-4">
                                    <h5>Available Code Blocks:</h5>
                                    <div class="code-block" draggable="true" data-id="1">
                                        function add(a, b) {
                                    </div>
                                    <div class="code-block" draggable="true" data-id="2">
                                        return a + b;
                                    </div>
                                    <div class="code-block" draggable="true" data-id="3">
                                        }
                                    </div>
                                    <div class="code-block" draggable="true" data-id="4">
                                        console.log(add(5, 3));
                                    </div>
                                </div>

                                <div class="game-feedback" id="codeBlocksFeedback">
                                    <p id="feedbackMessage"></p>
                                </div>

                                <div class="game-controls">
                                    <button class="btn btn-outline-primary game-btn" id="resetCodeBlocks">Reset</button>
                                    <button class="btn btn-primary game-btn" id="checkCodeBlocks">Check
                                        Solution</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Other games ... -->
                </div>
            </div>
        </div>
        `;

        this.querySelector('.back-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' }, bubbles: true, composed: true }));
        });

        this.initCodeBlocksGame();

        this.querySelector('#resetCodeBlocks').addEventListener('click', () => this.resetCodeBlocksGame());
        this.querySelector('#checkCodeBlocks').addEventListener('click', () => this.checkCodeBlocksSolution());
    }

    initCodeBlocksGame() {
        const codeBlocks = this.querySelectorAll('.code-block');
        const dropZones = this.querySelectorAll('.drop-zone');

        codeBlocks.forEach(block => {
            block.addEventListener('dragstart', (e) => {
                block.classList.add('dragging');
                e.dataTransfer.setData('text/plain', block.dataset.id);
            });

            block.addEventListener('dragend', () => {
                block.classList.remove('dragging');
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('active');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('active');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('active');
                const id = e.dataTransfer.getData('text/plain');
                const draggable = this.querySelector(`.code-block[data-id="${id}"]`);

                // Only allow one block per zone
                if (zone.children.length === 0 || (zone.children.length === 1 && zone.innerText.includes('Drop code block'))) {
                    zone.innerHTML = '';
                    zone.appendChild(draggable);
                }
            });
        });
    }

    resetCodeBlocksGame() {
        // Simple reload or reconstruction for now, can be optimized
        // For simplicity, just clearing drop zones and moving blocks back is complex without state.
        // I will re-render the component content or just dispatch a 'refresh' logic.
        // Let's implement a simple DOM reset.
        const gameBoard = this.querySelector('#codeBlocksGame');
        const availableArea = gameBoard.querySelector('.mt-4');
        const blocks = gameBoard.querySelectorAll('.code-block');
        const dropZones = gameBoard.querySelectorAll('.drop-zone');

        // Reset feedback
        this.querySelector('#codeBlocksFeedback').className = 'game-feedback';

        // Restore drop zones text
        dropZones.forEach(zone => {
            // Move any block inside back to available
            if (zone.querySelector('.code-block')) {
                availableArea.appendChild(zone.querySelector('.code-block'));
            }
            zone.innerHTML = 'Drop code block here';
        });

        // Sort blocks by ID to reset order in available area
        const sortedBlocks = Array.from(blocks).sort((a, b) => a.dataset.id - b.dataset.id);
        sortedBlocks.forEach(block => availableArea.appendChild(block));
    }

    checkCodeBlocksSolution() {
        const dropZones = this.querySelectorAll('.drop-zone');
        let correct = true;
        let filledCount = 0;

        // Correct order: 1, 2, 3, 4
        // Logic: zone 1 needs ID 1, zone 2 needs ID 2, etc.
        // Wait, the order in codeBlocksGame HTML structure:
        // Zone 1, 2, 3, 4.
        // Correct logic:
        // 1. function add... (id=1)
        // 2. return a + b (id=2)
        // 3. } (id=3)
        // 4. console.log... (id=4)

        dropZones.forEach(zone => {
            const block = zone.querySelector('.code-block');
            if (block) {
                filledCount++;
                if (block.dataset.id !== zone.dataset.order) {
                    correct = false;
                }
            } else {
                correct = false; // All zones must be filled
            }
        });

        const feedback = this.querySelector('#codeBlocksFeedback');
        const feedbackMsg = this.querySelector('#feedbackMessage');

        if (filledCount < 4) {
            feedback.className = 'game-feedback show error';
            feedbackMsg.textContent = 'Please place all code blocks!';
            return;
        }

        if (correct) {
            feedback.className = 'game-feedback show success';
            feedbackMsg.textContent = 'Correct! You constructed the function perfectly. +50 points!';
            // Here we would update points via global util or event
            // console.log("Updating points...");
        } else {
            feedback.className = 'game-feedback show error';
            feedbackMsg.textContent = 'Incorrect order. Try again!';
        }
    }
}

customElements.define('app-games-page', GamesPage);
