const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = `© ${currentYear}`;
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = `Last modified: ${document.lastModified}`;
}

function windChillCalc(temp,windsp) {
    if (temp <= 10 && windsp > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windsp, 0.16) + 0.3965 * temp * Math.pow(windsp, 0.16));
    }
    else {
        return "N/A";
    }
}
function displayWindChill() {
    const tempE = document.getElementById('temp');
    const windspE = document.getElementById('windsp');
    const windChillE = document.getElementById('windchill');
    const temperature = parseFloat(tempE.textContent);
    const windSpeed = parseFloat(windspE.textContent);
    const windChill = windChillCalc(temperature, windSpeed);
    windChillE.textContent = windChill !== "N/A" ? windChill + "°C" : "N/A";
}
window.addEventListener('load', displayWindChill);