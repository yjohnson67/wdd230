const cardEl = document.querySelector("#cards");
const contLi = 'https://yjohnson67.github.io/wdd230/chamber/data/members.json';
 
async function getCont() {
    const response = await fetch(contLi);
    const data = await response.json();
    //console.log(data);
    let dataCont = data ['members'];
    dataCont.forEach(displayCont);
}
 
function displayCont(data) {
    //Bild div elements
    let div = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let url = document.createElement('a');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let cPerson = document.createElement('p');
    let mLevel = document.createElement('h3');
 
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
 
getCont();