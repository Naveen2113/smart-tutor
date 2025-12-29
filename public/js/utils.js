import { userState } from './data.js';

export function showNotification(type, message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

export function updateUserPoints(points) {
    userState.points += points;
    // Update points display in the profile and typically anywhere else it might be shown
    const pointsElements = document.querySelectorAll('.points-amount');
    pointsElements.forEach(element => {
        element.textContent = userState.points.toLocaleString();
    });

    // Also update any header/nav points if they existed, but in this app it seems primarily on profile/games
}
