const axios = require("axios");
const moment = require("moment");

// make axios call here
const fetchWeatherData = async () => {
  try {
    const response = await axios(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );

    // My customization
    const customizedWeatherReport = {
      date: moment().format("LLLL"),
      temperature: String(
        JSON.stringify(
          response.data.hourly.temperature_2m[new Date().getHours()]
        ).concat(" C")
      ),
      sunrise: moment(response.data.daily.sunrise.toString()).format("LLL"),
      sunset: moment(response.data.daily.sunset.toString()).format("LLL"),
    };
    // My Customization
    return { weather: customizedWeatherReport };
  } catch (error) {
    throw new Error("Failed to fetch weather data.");
  }
};

// Usage example (inside an async function):
async function getWeather() {
  const data = await fetchWeatherData();
  console.log(data);
}

// Call the async function to fetch and display the weather data
getWeather();