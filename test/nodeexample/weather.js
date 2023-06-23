const axios = require("axios")

// make axos call here
const fetchWeatherData = async() => {
    try{
        const response =await axios(
            "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
        );
        console.log({response: JSON.stringify(response.data)});
        const {latitude, longitude, daily, ...rest} = response.data;
        return {rest, 
            sunrise: moment{response.data.daily.sunrise.toString()}.format("LLL"), 
            sunset: moment(response.data.daily.sunset.toString()).format(L)};


    }catch(error){
        throw new Error("Failed to fetch weather data.");

    }
}

async function getWeather() {
    
        const data = await fetchWeatherData();
        console.log(data)
    

}

getWeather();