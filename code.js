document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  const searchText = document.getElementById('searchText');
  const buttonSearch = document.getElementById('buttonSearch');
  const tableData = document.getElementById('tableData').querySelector('tbody');
 

   const fetchData = async (cityName) => {
     try {
       const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
       const responseJSON = await response.json();
       return responseJSON;
     } catch (error) {
       console.log('error', error);
     }
   }

  buttonSearch.addEventListener('click', async () => {
     const name = searchText.value;
     if (!name) {
       alert('Введите название города');
     } else {
       const data = await fetchData(name);
       const tr = document.createElement('tr');
       const tdName = document.createElement('td');
       tdName.innerText = name;
       tr.appendChild(tdName);
       const tdTemp = document.createElement('td');
       tdTemp.innerText = data.current.temp_c;
       tr.appendChild(tdTemp);
       const tdWeather = document.createElement('td');
       tdWeather.innerText = data.current.condition.text;
       tr.appendChild(tdWeather);
       const tdIcon = document.createElement('td');
       const img = document.createElement('img');
       img.src = data.current.condition.icon;
       img.alt = 'Иконка';
       tdIcon.innerText = data.current.condition.icon;
       tdIcon.appendChild(img);
       tableData.appendChild(tr);
       
     }
  }) 
});
