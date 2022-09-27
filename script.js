let weather = {
    'apikey': '6102270d2b0957cfcfe47dbcb4c614ad',
    fetchWeather: function (){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=buford&appid=6102270d2b0957cfcfe47dbcb4c614ad'
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};