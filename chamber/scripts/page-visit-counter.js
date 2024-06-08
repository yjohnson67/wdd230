// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
 
//Todays Date
const tDate = new Date().toDateString();
//Get Dates from Storage (if none, return 0)
let pDate = Number(window.localStorage.getItem("pDate")) || 0;
//Get Number of Visits from Storage (if none, return 0)
let numVisits = Number(window.localStorage.getItem("numVisits-ls"));
 
//Does todays date and the date in local storage match?
const matchResults = tDate.matchAll(pDate);
 
//Determine what message to display
if (matchResults && (numVisits !== 1)) {
    visitsDisplay.textContent = "Back so soon! Awesome!"
} else if (numVisits = 1) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    visitsDisplay.textContent = "Number of Visits: "+ numVisits;
}
 
// Store the new date into localStorage, key=pDate
localStorage.setItem("pDate", tDate);
// Store the new visit total into localStorage, key=numVisits-ls
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);