function inner(id, value) {
    document.getElementById(id).innerHTML = value;
};

const getWeather = () => {
    let value = document.getElementById('input').value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let apiKey = `fd48bdf8a8b87b3c140f17625f4e2d57`;
    let flag = document.getElementById('CountryId');
    let i = document.getElementById('im');
    let im = document.getElementById('imgi');

    if (value ) {
        // i.style.display = 'block';
        // inner('errorMessage', 'loading' )
        const url = `${apiURL}${value}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                console.log(data);
                inner('errorMessage', '')
                inner('city', data.name)
                inner('country', data.sys.country)
                inner('temp', Math.round(data.main.temp))
                inner('imgi', data.weather[0].icon)
                im.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                flag.src = `https://www.countryflags.io/${data.sys.country}/shiny/64.png`;
                
            })
            .catch((error) => {
                inner('errorMessage', 'Not Found!')
                inner('temp' ,'')
                inner('country', '')
                inner('city', '')
                flag.src = '';
                im.src = '';
            })
    } else {
        inner('errorMessage', 'Please enter city nam...');
    };
};
document.getElementById('input').onkeypress = function(ev){
    if(ev.charCode == 13){
        getWeather();
    };
};