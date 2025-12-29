export class ChallengePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="challengePage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Challenges
                </button>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h4 class="mb-0" id="challengeTitle">Two Sum</h4>
                                <div>
                                    <span class="difficulty-badge difficulty-easy me-2">Easy</span>
                                    <button class="btn btn-sm btn-outline-secondary" id="backToChallengesBtn">
                                        <i class="bi bi-arrow-left"></i> Back to Challenges
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="mb-4">
                                    <h5>Problem Description</h5>
                                    <p>Given an array of integers nums and an integer target, return indices of the two
                                        numbers such that they add up to target.</p>
                                    <p>You may assume that each input would have exactly one solution, and you may not
                                        use the same element twice.</p>
                                    <p>You can return the answer in any order.</p>
                                </div>

                                <div class="mb-4">
                                    <h5>Example 1:</h5>
                                    <div class="code-snippet">
                                        <pre><code class="language-javascript">Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-header">
                                <h5 class="mb-0">Solution</h5>
                            </div>
                            <div class="card-body">
                                <div class="code-editor">
                                    <div class="code-editor-header">
                                        <div class="code-editor-title">solution.js</div>
                                        <div class="code-editor-actions">
                                            <button id="runSolutionBtn"><i class="bi bi-play-fill"></i></button>
                                            <button id="submitSolutionBtn"
                                                class="btn btn-sm btn-primary">Submit</button>
                                        </div>
                                    </div>
                                    <div class="code-editor-content">
                                        <textarea id="solutionCode" class="form-control" rows="15"
                                            style="background-color: transparent; border: none; color: #e2e8f0; font-family: 'Consolas', 'Monaco', 'Courier New', monospace;">/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store the numbers and their indices
    const numMap = new Map();
   
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
};</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelectorAll('.back-button, #backToChallengesBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'challenges' }, bubbles: true, composed: true }));
            });
        });

        if (window.Prism) window.Prism.highlightAll();
    }
}

customElements.define('app-challenge-page', ChallengePage);
