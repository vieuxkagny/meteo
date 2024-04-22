// gestionnaire d'évenement pour récupérer les données météologique
const apikey = "ae9aab83dd4d1a9c067fee7707e1b779";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkweather(ville) {
    const response = await fetch(apiUrl + ville +`&appid=${apikey}` );
 var data = await response.json()
 console.log(data)
 document.querySelector(".ville").innerHTML=data.name;
 document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
 document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
 document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
checkweather();
 



