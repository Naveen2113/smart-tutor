import './utils.js';
import './data.js';

// Components
import './components/Navbar.js';
import './components/Footer.js';
import './components/AiChatbox.js';

// Pages
import './pages/HomePage.js';
import './pages/DashboardPage.js';
import './pages/LanguagesPage.js';
import './pages/ChallengesPage.js';
import './pages/GamesPage.js';
import './pages/ProfilePage.js';
import './pages/LessonPage.js';
import './pages/ChallengePage.js';
import './pages/QuizPage.js';
import './pages/QuizResultsPage.js';

const mainContent = document.getElementById('mainContent');

// Map page names to tag names
const pageMap = {
    'home': 'app-home-page',
    'dashboard': 'app-dashboard-page',
    'languages': 'app-languages-page',
    'challenges': 'app-challenges-page',
    'games': 'app-games-page',
    'profile': 'app-profile-page',
    'lesson': 'app-lesson-page',
    'challenge': 'app-challenge-page',
    'quiz': 'app-quiz-page',
    'quiz-results': 'app-quiz-results-page'
};

function loadPage(pageName, context = {}) {
    const tagName = pageMap[pageName] || 'app-home-page';
    mainContent.innerHTML = '';
    const pageElement = document.createElement(tagName);

    // Pass context if any (for results page or lesson details)
    if (context) {
        Object.keys(context).forEach(key => {
            pageElement[key] = context[key];
        });
    }

    mainContent.appendChild(pageElement);
    window.scrollTo(0, 0);
}

// Listen for navigation events
document.addEventListener('navigate', (e) => {
    const { page, context } = e.detail;
    loadPage(page, context);
});

// Initial load
loadPage('home');
