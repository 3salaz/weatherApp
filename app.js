console.log('all-good')
window.addEventListener('load',() => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(`.temperature-description`);
    let temperatureDegree = document.querySelector(`.temperature-degree`);



    // 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/1dcc572c7fc8c24f63d85e82150a216c/${lat},${long}`;
            fetch(api)
            .then(response => {
                // convert the response from the api in json
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature,summary } = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
            });
        });
    };
});