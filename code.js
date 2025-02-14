document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  const searchText = document.getElementById('searchText')
  const buttonSearch = document.getElementById('buttonSearch')
  const tableData = document.getElementById('tableData')
 

   const fetchData = async (cityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru');
    const responseJSON = await response.json();
    return responseJSON;
  }

  fetchData('Yaroslavl');
  fetchData('Moscow');
  fetchData('Sochi');
});
