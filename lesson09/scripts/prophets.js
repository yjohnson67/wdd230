//Declare Variables//
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
 
//async function to fetch data from the JSON source url//
async function getProphetData(url) {
    //Store the response from the fetch() method in a const variable
    const response = await fetch(url);
    //Convert the response to a JSON object
    const data = await response.json(url);
   
    //Temporary testing of data retreival
    //console.table(data.prophets);
 
    //Reference the prophets array of the JSON data object, not just the object
    displayProphets(data.prophets);
  }
 
  getProphetData(url);
 
  //Define a function expression that handles a single parameter
  const displayProphets = (prophets) => {
    //Building cards for each prophet
    prophets.forEach((prophet) => {
      // Build div .cards elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
 
        // Build the h2
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
 
        //Build the img
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
 
        // Append the section(card)
        card.appendChild(fullName);
        card.appendChild(portrait);
 
        cards.appendChild(card);
    });
  }