console.log('all-good')
window.addEventListener('load',() => {
    let long;
    let lang;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lang = position.coords.latitude;
        });
    };
});