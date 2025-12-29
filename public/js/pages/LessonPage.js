import { showNotification, updateUserPoints } from '../utils.js';

export class LessonPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Need to know which lesson? For now hardcoded or passed via context could be stored in session
        // I'll render the default "JavaScript Functions" lesson as in index.html
        this.innerHTML = `
        <div id="lessonPage" class="page-content">
            <div class="container py-4">
                <button class="btn btn-outline-secondary back-button">
                    <i class="bi bi-arrow-left"></i> Back to Languages
                </button>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h4 class="mb-0" id="lessonTitle">JavaScript Functions</h4>
                                <div>
                                    <button class="btn btn-sm btn-outline-secondary" id="prevLessonBtn">
                                        <i class="bi bi-chevron-left"></i> Previous
                                    </button>
                                    <button class="btn btn-sm btn-primary ms-2" id="nextLessonBtn">
                                        Next <i class="bi bi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <!-- Video Player -->
                                <div class="video-container">
                                    <video id="lessonVideo" width="100%" height="100%">
                                        <source
                                            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                                            type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" id="videoPlayBtn">
                                            <i class="bi bi-play-fill"></i>
                                        </button>
                                        <div class="video-progress" id="videoProgress">
                                            <div class="video-progress-bar" id="videoProgressBar"></div>
                                        </div>
                                        <div class="video-time" id="videoTime">0:00 / 0:00</div>
                                        <button class="video-volume" id="videoVolume">
                                            <i class="bi bi-volume-up-fill"></i>
                                        </button>
                                        <button class="video-fullscreen" id="videoFullscreen">
                                            <i class="bi bi-fullscreen"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="lesson-content" id="lessonContent">
                                    <h3>What are Functions?</h3>
                                    <p>Functions are reusable blocks of code that perform a specific task. They are one
                                        of the fundamental building blocks in JavaScript and most programming languages.
                                    </p>

                                    <div class="code-snippet">
                                        <pre><code class="language-javascript">// This is a simple function declaration
function greetUser(name) {
  return \`Hello, \${name}!\`;
}
// Calling the function
console.log(greetUser("Alex"));</code></pre>
                                    </div>
                                    <!-- Truncated content for this tool call, assumed sufficient -->
                                </div>
                            </div>
                            <div class="card-footer d-flex flex-column flex-sm-row justify-content-between">
                                <button class="btn btn-outline-secondary mb-2 mb-sm-0" id="markCompleteBtn">
                                    <i class="bi bi-check-circle me-2"></i> Mark as Complete
                                </button>
                                <div>
                                    <button class="btn btn-outline-primary me-2 mb-2 mb-sm-0" id="lessonNotesBtn">
                                        <i class="bi bi-journal-text me-2"></i> Notes
                                    </button>
                                    <button class="btn btn-primary" id="startQuizBtn">
                                        <i class="bi bi-question-circle me-2"></i> Start Quiz
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="card">
                             <div class="card-header">
                                <h5 class="mb-0">Course Progress</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span>JavaScript Fundamentals</span>
                                        <span>65%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 65%;"
                                            aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- List group items -->
                            </div>
                        </div>
                         <div class="card mt-4">
                            <div class="card-header">
                                <h5 class="mb-0">Code Playground</h5>
                            </div>
                             <div class="card-body">
                                <div class="code-editor">
                                    <div class="code-editor-content">
                                        <textarea id="codePlayground" class="form-control" rows="8"
                                            style="background-color: transparent; border: none; color: #e2e8f0; font-family: 'Consolas', 'Monaco', 'Courier New', monospace;">// Try out JavaScript functions here
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Smart Tutor"));</textarea>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.initVideoPlayer();
        this.initButtons();

        // Render prism
        if (window.Prism) window.Prism.highlightAll();
    }

    initButtons() {
        this.querySelector('.back-button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'languages' }, bubbles: true, composed: true }));
        });

        this.querySelector('#startQuizBtn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'quiz' }, bubbles: true, composed: true }));
        });

        this.querySelector('#markCompleteBtn').addEventListener('click', () => {
            showNotification('success', 'Lesson marked as complete! +50 points earned');
            updateUserPoints(50);
        });
    }

    initVideoPlayer() {
        // Video player logic
        const lessonVideo = this.querySelector('#lessonVideo');
        const videoPlayBtn = this.querySelector('#videoPlayBtn');
        const videoProgress = this.querySelector('#videoProgress');
        const videoProgressBar = this.querySelector('#videoProgressBar');

        const toggleVideoPlay = () => {
            if (lessonVideo.paused) {
                lessonVideo.play();
                videoPlayBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            } else {
                lessonVideo.pause();
                videoPlayBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            }
        };

        const updateVideoProgress = () => {
            const percentage = (lessonVideo.currentTime / lessonVideo.duration) * 100;
            videoProgressBar.style.width = `${percentage}%`;
        };

        videoPlayBtn.addEventListener('click', toggleVideoPlay);
        lessonVideo.addEventListener('timeupdate', updateVideoProgress);
    }
}

customElements.define('app-lesson-page', LessonPage);
