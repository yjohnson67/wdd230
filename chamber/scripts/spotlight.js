const spotContainer = document.querySelector('spotContainer');
const contli = 'https://yjohnson67.github.io/wdd230/chamber/data/members.json';

async function getSpot() {
    const response = await fetch(contLi);
    const data = await response.json();
    console.log(data);
    let dataCont = data ['members'];
    displaySpot(dataCont);
}
 
function displaySpot(data) {
 
    for (let i=0; i<3; i++) {
        if (i<3) {
 
            //Filter to find Silver or Gold status
            const filteredMemb = data.filter(members => (members.mLevel === "Gold Member") || (members.mLevel === "Silver Member"));
 
            //Randomly Select One
            const randomIndex = Math.floor(Math.random()*filteredMemb.length);
            const selectedMember = filteredMemb[randomIndex];
 
            //Display
            let div = document.createElement('div');
            let logo = document.createElement('img');
            let name = document.createElement('h2');
            let url = document.createElement('a');
            let mLevel = document.createElement('h3');
 
            //img
            logo.setAttribute('src', selectedMember.logo);
            logo.setAttribute('alt', 'logo');
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '150');
 
            //h2
            name.textContent = `${selectedMember.name}`;
 
            //a
            url.setAttribute('href', selectedMember.url);
            url.textContent = `${selectedMember.url}`;
 
            //h3
            mLevel.textContent = `${selectedMember.mLevel}`
 
            div.appendChild(logo);
            div.appendChild(name);
            div.appendChild(url);
            div.appendChild(mLevel);
            spotContainer.appendChild(div);
        }
    }
}
 
getSpot();