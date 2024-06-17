const listEl = document.querySelector("#weeks");
const baseURL = "https://yjohnson.github.io/wdd230/";
const linksURL = "https://yjohnson.github.io/wdd230/data/links.json";
 
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
   
    weeks= Object.keys(data);
    displayLinks(data,weeks);
}
 
function displayLinks(data,weeks) {
    weeks.forEach(week => {
        //Build Element
        let li = document.createElement("li");
        //Build li
        li.textContent = week + ": ";
       
 
        data[week].forEach(links => {
            //Build Element linkCon/Link Content
            let a = document.createElement("a");
            //Build a
            a.setAttribute("href", links.url);
            a.textContent = links.lesson + " | ";
            //create loop
            li.appendChild(a);
        });
       
 
        listEl.appendChild(li);
    });
}
 
getLinks();