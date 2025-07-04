async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const apiKey = 'aa6655fe687fd0aaba9044128aecf4a8'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const description = data.weather[0].description;

        document.getElementById('result').innerHTML = `
          <strong>City:</strong> ${city} <br>
          <strong>Temperature:</strong> ${temp} °C <br>
          <strong>Weather:</strong> ${weather} <br>
          <strong>Description:</strong> ${description}
        `;
      } else {
        document.getElementById('result').innerHTML = `
          City not found. Please try again.
        `;
      }
    }
      