document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ffedd3150ec0466d8fb82414251402';

  try {
    const response = await fetch ('https://api.weatherapi.com/v1/current.json?key=ffedd3150ec0466d8fb82414251402&q=London&aqi=no')
    console.log(response);
  } catch (error) {
    console.log(error)
  }
});
