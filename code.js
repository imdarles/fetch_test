document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  const fetchData = (cityName) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
       .then(response => {
         console.log(response)
       })
       .catch(error => {
         console.log('error', error);
       })
  }

  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
