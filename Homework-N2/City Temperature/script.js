const ById = (id, value) => {
    document.getElementById(id).innerHTML = value;
    //create getElementById constructor
  }
  
  const gettingWeather = () => {
    const inputValue = document.getElementById('input').value; //we take input value
    const flagCountry = document.getElementById('CountryId'); //<img src="" id="CountryId">
    const iconTemp = document.getElementById('tempIcon')
    
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='; 
    // link take this addres https://openweathermap.org/
    const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57'; 
    const state = {
        temperatura:null,
        city: null,
        country:null,
        icon: null,
    }//create state Object
    
    if(inputValue) { // if input was written city name then run that code
        fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)//we accept city information 
        .then(response => response.json()) //{}{}{}{}{}
        .then(data => {
            console.log(data.weather[0].icon)
            state.temperatura = data.main.temp;
            state.city = data.name;
            state.country = data.sys.country
            
            document.getElementById('temp').innerHTML = `${state.temperatura} C`;
            document.getElementById('city').innerHTML = state.city;
            document.getElementById('country').innerHTML = state.country;
            
            //install value state object proporty;
            ById('city', state.city);
            ById('country', state.country);
            ById('temp', `${state.temperatura} C`);
           
             //install flag img src
            flagCountry.src = `https://www.countryflags.io/${state.country}/flat/64.png`;
            iconTemp.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
            //--------------------
            ById('errorMessage', '');
        })
        .catch(err => {
            ById('errorMessage', 'The requested URL/error was not found this server');
            flagCountry.src = ""
            //error message url to cleanse <li></li> content
            ById('temp', '');
            ById('city', '');
            ById('country', '');
        })
     }else {
         ById('errorMessage', 'Please enter the city name');
         flagCountry.src = "";
         iconTemp.src= '';
        //error message / empty /  
         ById('temp', '');
         ById('city', '');
         ById('country', '');
         //to cleanse <li></li> content
     }
  }
  
  const whichButton = (event) => {
    if(event.keyCode == 13) {
         gettingWeather()
    }
  }
  