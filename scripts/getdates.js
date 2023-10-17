// Populate current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Populate last modified date
const lastModified = Date(document.lastModified);
const lastModElement = document.getElementById('lastModified');
lastModElement.textContent = 'Last modified:' + lastModified.toLocaleString();
