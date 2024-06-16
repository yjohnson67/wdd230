//Declare Variables
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://yjohnson67.github.io/wdd230/";
const linksURL = "https://yjohnson67.github.io/wdd230/data/links.json";
// const linksURL = "data/links.json";


// 4. Write an asynchronous function to get the links data in the links.json data file.
// 5. Test the JSON result by writing the data to the console. In order to test your work 
// at this point, you will need to write a line of code in links.js which calls the getLinks() 
// function. Once your are satisfied or producing links, remove the console.log() statement.
// 6. In the getLinks function, add a new line of code at the end that calls a function that 
// will build out the available activity links from the data response. Name the function displayLinks.
// Send the data as an argument.
async function getLinks() {
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }        
    }
    catch (error) {
        console.log(error);
    }
    
}

getLinks();

// 7. Create the displayLinks() function and name the function's single parameter weeks. Remember from the 
// json data that you wrote and tested that the data is an array of objects representing weeks of the term.
const ul = document.querySelector(".left-card");

const displayLinks = (weeks) => {
    weeks.forEach((weeks) => {
        
        const li = document.createElement("li");
        li.innerHTML = `${weeks.week}: ${weeks.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(" | ")}`;
        
        ul.appendChild(li);
    });
}


