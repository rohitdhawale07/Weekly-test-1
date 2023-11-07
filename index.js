const apiKey = "c16181903fmsh1033d4b795f17b4p107622jsnfd086ec0495b";
const baseUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json";

document.addEventListener("DOMContentLoaded", function () {
  const locationInput = document.getElementById("locationInput");
  const searchButton = document.getElementById("searchButton");
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("windSpeed");
  const conditions = document.getElementById("conditions");
  const dropdown = document.getElementById("dropdown");
  const dropdown2 = document.getElementById("dropdown2");

  // Function to fetch weather data
  async function fetchWeatherData(location) {
    const url = `${baseUrl}?q=${location}&days=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      temperature.textContent = data.current.feelslike_f;
      humidity.textContent = data.current.humidity;
      windSpeed.textContent = data.current.wind_kph;
      conditions.textContent = data.current.condition.text;
      const x = data.forecast.forecastday[0].hour;
      for(const hour of x){
        const y = document.createElement("option")
        y.textContent = `${hour.time.slice(11)} ${hour.temp_c}`
        dropdown.appendChild(y);
      }
      //avgtemp_c
      const a = data.forecast.forecastday.map((ele)=>{
        const d = document.createElement("option");
        d.textContent = `${ele.date} ${ele.day.avgtemp_c}`;
        dropdown2.appendChild(d);
      })
      
        
    } catch (error) {
      console.error(error);
      alert(error.error.message);
    }
  }

  searchButton.addEventListener("click", function () {
    const location = locationInput.value;
    fetchWeatherData(location);
  });
});
