const apiKey = '511c983d069772f4c6eb8d0bd44427e0'; // Replace with your OpenWeatherMap API key

const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  getWeatherData(city);
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
      cityName.textContent = 'City not found';
      temperature.textContent = '';
      description.textContent = '';
    } else {
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Description: ${data.weather[0].description}`;
    }
  } catch (error) {
    console.log('Error:', error);
  }
}





//
