document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log('error', error);
    }
  }

  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
