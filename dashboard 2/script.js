

const sidebarToggle = document.querySelector('.sidebar-toggle');
const dashboardContainer = document.querySelector('.dashboard-container');
const person = document.querySelector('.person');
const vector = document.querySelector('.vector');
const navLinks = document.querySelector('.nav-links');

sidebarToggle.addEventListener('click', () => {
    dashboardContainer.classList.toggle('toggle-active');
});
