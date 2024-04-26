//not used                          
const test ={
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
} ;
const airPollutionApi=
    {
        "coord":[
          50,
          50
        ],
        "list":[
          {
            "dt":1605182400,
            "main":{
              "aqi":1
            },
            "components":{
              "co":201.94053649902344,
              "no":0.01877197064459324,
              "no2":0.7711350917816162,
              "o3":68.66455078125,
              "so2":0.6407499313354492,
              "pm2_5":0.5,
              "pm10":0.540438711643219,
              "nh3":0.12369127571582794
            }
          }
        ]
};                
                          

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=matric`
    );

    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.log(error);
  }
};
// export const getWeatherData = async (lat, lon) => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=matric`
//     );

//     const data = await response.json();
//     return data
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getTemperatureData = async (lat, lon) => {
  console.log(lat, lon);
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await response.json();
    return data?.main;
  } catch (e) {
    console.error(e.message);
  }
};

export const getWindData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        return data?.wind;
    } catch (e) {
        console.error(e.message);
    }
};

//call the air pollution api
export const getAQIData = async (lat, lon) => {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
        );
        const data = await response.json();
        return data?.list[0];
    } catch (e) {
        console.error(e.message);
    }
};
