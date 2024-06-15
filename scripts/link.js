//Declare Variables
const baseURL = "https://yjohnson67.github.io/wdd230/";
const linksURL = "https://yjohnson67.github.io/wdd230/data/links.json";

//async function to fetch data fromthe JSON
async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json(linksURL);
    console.log(data.links);
}

getLinks(linksURL);