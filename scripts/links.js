const listEl = document.querySelector("#weeks");
const baseURL = "https://yjohnson67.github.io/wdd230/";
const linksURL = "https://yjohnson67.github.io/wdd230/data/links.json";
 
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    let dataList = data['lessons'];
    dataList.forEach(displayLinks);
}
 
function displayLinks(data) {
        //Build Element
        let li = document.createElement("li");
        //Build li
        li.textContent = `${data.lessons}: `;
       
        //Loop the link info so we get them all
        data.links.forEach(link => {
            //Build Element
            let a = document.createElement("a");
            //Set attributes for a element
            a.setAttribute("href", link.url);
            a.textContent = `${link.title}| `;
            li.appendChild(a);    
            });
   
        //Loop back to create a new li
        listEl.appendChild(li);
        };
 
getLinks();