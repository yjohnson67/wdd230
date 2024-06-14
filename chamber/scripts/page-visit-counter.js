// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
 
// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");
    var numVisits = localStorage.getItem("numVisits")
}
 
//Declare Variables
const currentDate = new Date();
const lastVisitDate = new Date(lastVisit);
const timeDiff = currentDate - lastVisitDate;
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
 
// Message based on the time difference
if (!lastVisit) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysDiff <= 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!"
} else {
    visitsDisplay.textContent = "Number of Visits: "+ numVisits;
}
 
// Store the new date into localStorage, key=lastVisit
numVisits++;
localStorage.setItem("numVisits", numVisits);
localStorage.setItem("lastVisit", currentDate);
