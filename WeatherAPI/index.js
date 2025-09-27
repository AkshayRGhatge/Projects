//Variables
const getButton=document.querySelector('.js-get-weather-btn');
const getCard=document.querySelector('.js-card');
const getform=document.querySelector('.js-weather-form');
const getErrorMesssageField=document.querySelector('.js-error');
const apiKey='312e3a7e74121e447a217d4be1721928';
;

// Form event listner
getform.addEventListener('submit', async function(e)
{
    //By default when click on the btn on form it will reload the screen , prevent it
    e.preventDefault();
    
    //get the city
    const getCity=document.querySelector('.js-city-input').value;
    if(getCity)
    {
        try{
           const weatherInfo= await getWeatherData(getCity);
           displayWeatherInfo(weatherInfo);
        }
        catch(error)
        {
            displayErrorMessage(error);
        }
    }
    else     
    {
        displayErrorMessage('Please Enter City.')
    }

})

//Display error message on card
function displayErrorMessage(message)
{
    getCard.style.display='flex';
    getErrorMesssageField.textContent=message;
}

//call weather api and return the response
async function getWeatherData(city)
{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    return await response.json();
}

//display weather info
function displayWeatherInfo(data)
{
    //Clear the card content and make it visible
    getCard.textContent='';
    getCard.style.display='flex';

    const { name: city,
            main:{temp,humidity},
            weather:[{description,icon}]
          }=data;

    const cityDisplay= document.createElement('h1');
    const tempDisplay= document.createElement('p');
    const humidityDisplay= document.createElement('p');
    const descDisplay= document.createElement('p');
    const weatherEmoji= document.createElement('img');

    //set the content
    cityDisplay.textContent=city;
    tempDisplay.textContent= `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity: ${humidity}%`
    descDisplay.textContent=description;
    weatherEmoji.setAttribute('src',displayWeatherEmoji(icon));

    //add class for the css
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    //append the html
    getCard.appendChild(cityDisplay);
    getCard.appendChild(tempDisplay);
    getCard.appendChild(humidityDisplay);
    getCard.appendChild(descDisplay);
    getCard.appendChild(weatherEmoji);

}

//get weather emoji
function displayWeatherEmoji(icon)
{
    const src=`http://openweathermap.org/img/w/${icon}.png`;
    return src;  
}