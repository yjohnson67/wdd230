const chart = document.querySelector("#vInfo");
const list = 'https://yjohnson67.github.io/wdd230/scoots/data/vehicle.json';
 
async function getCont() {
    try {
        const response = await fetch(list);
        const data = await response.json();
        console.log(data);
        //Access the right array
        let dataCont = data ['vehicles'][0]['vehicles'];
        //Clear existing rows
        chart.innerHTML ='';
 
        dataCont.forEach(displayGrid);
    } catch (error) {
    console.error('Error fetching data:', error)
    }
}
 
function displayGrid(data) {
    //build chart
    let tr = document.createElement('tr');
    let rentalType = document.createElement('td');
    let maxPersons = document.createElement('td');
    let reservationsHalf = document.createElement('td');
    let reservationsFull = document.createElement('td');
    let walkInHalf= document.createElement('td');
    let walkInFull= document.createElement('td');
 
    rentalType.textContent = data.rentalType;
    maxPersons.textContent = data.maxPersons;
    reservationsHalf.textContent = data.reservationsHalf;
    reservationsFull.textContent = data.reservationsFull;
    walkInHalf.textContent = data.walkInHalf;
    walkInFull.textContent = data.walkInFull;
 
    tr.appendChild(rentalType);
    tr.appendChild(maxPersons);
    tr.appendChild(reservationsHalf);
    tr.appendChild(reservationsFull);
    tr.appendChild(walkInHalf);
    tr.appendChild(walkInFull);
    chart.appendChild(tr);
}
 
 
getCont();