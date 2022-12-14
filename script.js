let weather = {
    'apikey': '6102270d2b0957cfcfe47dbcb4c614ad',
    fetchWeather: function (city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&units=imperial&appid='
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        //.then((data) => console.log(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = 'Weather in '+ name;
        document.querySelector('.country').innerText = ', '+country;
        document.querySelector('.icon').src =
        'https://openweathermap.org/img/wn/'+ icon +'.png';
        document.querySelector('.temp').innerText = temp +'°F' 
        document.querySelector('.description').innerText = description
        document.querySelector('.humidity').innerText = 'Humidity: '+ humidity +' %'
        document.querySelector('.wind').innerText = 'Wind speed: '+ speed + "mph"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ description +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
};

document
    .querySelector('.search button')
    .addEventListener('click', function(){
    weather.search();
    });

document
    .querySelector('.search-bar')
    .addEventListener('keypress', function(e){
        if(e.key === 'Enter') weather.search();
    });

weather.fetchWeather('Tampa');