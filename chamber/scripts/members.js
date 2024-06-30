const cardEl = document.querySelector("#cards");
const listEl = document.querySelector("#list");
const contLi = 'https://echlarson.github.io/wdd230/chamber/data/members.json';
 
const gridbutton = document.querySelector("#gridview");
const listbutton = document.querySelector("#listview");
const cardsDisplay = document.querySelector("#cards");
const listDisplay = document.querySelector("#list");
 
async function getCont() {
    const response = await fetch(contLi);
    const data = await response.json();
    //console.log(data);
    let dataCont = data ['members'];
    dataCont.forEach(displayGrid);
    dataCont.forEach(displayList);
}
 
//GRID
function displayGrid(data) {
    //Build div elements
    let div = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let url = document.createElement('a');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let cPerson = document.createElement('p');
    let mLevel = document.createElement('h3');
 
    //div
    div.setAttribute('class', 'gridView');
 
    //img
    logo.setAttribute('src', data.logo);
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');
 
    //h2
    name.textContent = `${data.name}`;
 
    //a
    url.setAttribute('href', data.url);
    url.textContent = `${data.url}`;
 
    //p
    address.textContent = `${data.address}`;
    phone.textContent = `${data.phone}`;
    cPerson.textContent = `${data.cPerson} ${data.email}`;
 
    //h3
    mLevel.textContent = `${data.mLevel}`
 
    //loop
    div.appendChild(logo);
    div.appendChild(name);
    div.appendChild(url);
    div.appendChild(address);
    div.appendChild(phone);
    div.appendChild(cPerson);
    div.appendChild(mLevel);
 
    cardEl.appendChild(div);
}
 
//LIST
function displayList(data) {
//Build div elements
    let div = document.createElement('div');
    let name = document.createElement('h2');
    let info = document.createElement('p');
 
    //div
    div.setAttribute('class', 'listView');
 
    //h2
    name.innerHTML = `${data.name} <br> ${data.mLevel}`;
 
    //p
    info.innerHTML = `${data.url} <br> ${data.address} <br> ${data.phone}`;
 
    //loop
    div.appendChild(name);
    div.appendChild(info);
 
    listEl.appendChild(div);
}
 
getCont();
 
//TOOGLE VIEWS
gridbutton.addEventListener("click", () => {
    cardsDisplay.style.display = "grid";
    listDisplay.style.display = "none";
});
 
listbutton.addEventListener("click", showList);
 
function showList() {
    cardsDisplay.style.display = "none";
    listDisplay.style.display = "grid";
}