if (document.querySelector('.home')) {
    const tempCelsius = parseFloat(document.getElementById("temperature").innerText);
    const windSpeed = parseFloat(document.getElementById("wind-speed").innerText);
    const windChillField = document.getElementById('wind-chill');

    let tempFahrenheit = (tempCelsius * 1.8) + 32;
    let windSpeedMph = windSpeed * 0.62137

    if (tempFahrenheit < 50 && windSpeedMph > 3) {
        let windChill = 35.74 + 0.6215 * tempFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempFahrenheit * Math.pow(windSpeedMph, 0.16);
        windChill = windChill.toFixed(1);
        windChillField.textContent = `${windChill} °F`;
    } else {
        windChillField.textContent = "N/A";
    }
}
