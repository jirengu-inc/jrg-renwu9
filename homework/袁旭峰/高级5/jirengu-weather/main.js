#!/usr/bin/env node

var axios = require('axios')
var data = {}
if (process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
} else {
    return 0
}
axios.get('http://api.jirengu.com/weather.php', data)
    .then(function(response) {
        var todayWeather = response.data.results[0].weather_data[0]
        var city = data.params.city,
            date = todayWeather.date,
            wind = todayWeather.wind,
            weather = todayWeather.weather,
            temperature = todayWeather.temperature
        console.log(`
        城市： ${city}
        日期： ${date}
        天气： ${weather}
        温度： ${temperature}
        风速： ${wind}
        `);
    })
    .catch(function(error) {
        console.log(error);
    });