document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  const fetchData = async (cityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru');
       console.log(response);
  }

  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
