// const key = "79fb9db788305331e87bb3d98e99b774";
// let button = document.getElementById('cl');
// async function Hamza() {
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=${key}`);
//     let data = await response.json();

//     console.log(data);

//     let temp = data.main.temp;

//     let Temproundoff = Math.round(temp);

//     let wiz = document.createElement('p');
//     wiz.innerText = `temperature :   ${Temproundoff}`;

//     document.body.appendChild(wiz);

// }

// Hamza();


const key  = "79fb9db788305331e87bb3d98e99b774"
const searchBtn = document.getElementById('btn');
const tempEl = document.getElementById('temp');
const cityName = document.getElementById('City');


async function Haza() {

    let userInput = document.getElementById('search').value.trim();

   

    let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${key}`);
    data = await response.json();

    console.log(data);

    let hehetemp = data.main.temp;

    let roundoffTemp = Math.round(hehetemp - 273.15);

    tempEl.innerText = "Temperature : " + roundoffTemp;


    //city

    let cityhe = data.name;

    cityName.innerHTML = " City : " + cityhe;


    document.getElementById('search').value = "";
    
    

}








