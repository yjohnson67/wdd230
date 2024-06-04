// Get the current date
const currentDate = new Date();

// Extract the current year and weekday
const currentYear = currentDate.getFullYear();
const currentWeekday = currentDate.toLocaleString('en-US', { weekday: 'long' });

// Update the copyright year dynamically
document.getElementById('currentYear').textContent = `${currentWeekday}, ${currentYear}`;

// Update the second paragraph in the footer with the last modified date
document.getElementById('mod').textContent = `Last Modified: ${currentDate}`;


