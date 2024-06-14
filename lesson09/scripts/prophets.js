//Declare Variables//
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json.";
const cards = document.querySelector('#cards');

//async function to fetch the data fromt he JSON source url//
async function getProphetData(){
    //Store the response fromt he fetch() method ina const variable
    const repsonse = await fetch(url);
    //convert the response to a JSON object
    const data = await Response.json();

    //temporary testing of data retreival
    console.table(data.prophets);
}

getProphetData();