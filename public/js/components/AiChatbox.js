export class AiChatbox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="ai-chatbox" id="aiChatbox">
            <div class="ai-chatbox-header" id="aiChatboxHeader">
                <h5>Smart AI Tutor</h5>
                <i class="bi bi-x-lg" id="aiChatboxToggleIcon"></i>
            </div>
            <div class="ai-chatbox-body" id="aiChatboxBody">
                <div class="ai-chat-message ai">
                    Hello! I'm your Smart AI tutor. How can I help you with your programming journey today?
                </div>
            </div>
            <div class="ai-chatbox-footer">
                <input type="text" class="ai-chatbox-input" id="aiChatboxInput" placeholder="Ask a question...">
                <button class="ai-chatbox-send" id="aiChatboxSend">
                    <i class="bi bi-send"></i>
                </button>
            </div>
        </div>

        <div class="ai-chatbox-toggle" id="aiChatboxToggle">
            <i class="bi bi-chat-dots"></i>
        </div>
        `;

        this.initChatbox();
    }

    initChatbox() {
        const aiChatbox = this.querySelector('#aiChatbox');
        const aiChatboxToggle = this.querySelector('#aiChatboxToggle');
        const aiChatboxHeader = this.querySelector('#aiChatboxHeader');
        const aiChatboxBody = this.querySelector('#aiChatboxBody');
        const aiChatboxInput = this.querySelector('#aiChatboxInput');
        const aiChatboxSend = this.querySelector('#aiChatboxSend');
        const aiChatboxToggleIcon = this.querySelector('#aiChatboxToggleIcon');

        const toggleChatbox = () => {
            aiChatbox.classList.toggle('active');

            if (aiChatbox.classList.contains('active')) {
                aiChatboxToggle.classList.add('active');
                aiChatboxToggleIcon.classList.remove('bi-chat-dots');
                aiChatboxToggleIcon.classList.add('bi-x-lg');
            } else {
                aiChatboxToggle.classList.remove('active');
                aiChatboxToggleIcon.classList.remove('bi-x-lg');
                aiChatboxToggleIcon.classList.add('bi-chat-dots');
            }
        };

        const sendAiMessage = () => {
            const message = aiChatboxInput.value.trim();
            if (message === '') return;

            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'ai-chat-message user';
            userMessage.textContent = message;
            aiChatboxBody.appendChild(userMessage);

            // Clear input
            aiChatboxInput.value = '';

            // Scroll to bottom
            aiChatboxBody.scrollTop = aiChatboxBody.scrollHeight;

            // Simulate AI response
            setTimeout(() => {
                const aiMessage = document.createElement('div');
                aiMessage.className = 'ai-chat-message ai';

                // Simple response logic based on keywords
                let response = "I'm here to help with your programming questions. Could you please provide more details?";

                if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) {
                    response = "JavaScript is a versatile programming language primarily used for web development. It allows you to create interactive effects within web browsers.";
                } else if (message.toLowerCase().includes('function')) {
                    response = "In programming, a function is a reusable block of code that performs a specific task. Functions help in organizing code and avoiding repetition.";
                } else if (message.toLowerCase().includes('python')) {
                    response = "Python is a high-level, interpreted programming language known for its readability and simplicity. It's widely used in web development, data analysis, artificial intelligence, and more.";
                } else if (message.toLowerCase().includes('help')) {
                    response = "I can help you with programming concepts, code examples, debugging tips, and learning resources. What specific topic would you like assistance with?";
                } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                    response = "Hello! I'm your AI programming tutor. Feel free to ask me any questions about programming languages, concepts, or best practices.";
                } else if (message.toLowerCase().includes('game') || message.toLowerCase().includes('play')) {
                    response = "We have several interactive coding games that can help you learn programming concepts in a fun way. Check out the Games section to try them out!";
                }

                aiMessage.textContent = response;
                aiChatboxBody.appendChild(aiMessage);

                // Scroll to bottom
                aiChatboxBody.scrollTop = aiChatboxBody.scrollHeight;
            }, 1000);
        };

        aiChatboxToggle.addEventListener('click', toggleChatbox);
        aiChatboxToggleIcon.addEventListener('click', toggleChatbox);
        aiChatboxSend.addEventListener('click', sendAiMessage);
        aiChatboxInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendAiMessage();
            }
        });
    }
}

customElements.define('app-ai-chatbox', AiChatbox);
