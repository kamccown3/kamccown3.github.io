 function doInputOutput() {    
  var temperature = parseFloat(document.getElementById('temperatureBox').value);
    var windspeed = parseFloat(document.getElementById('windSpeedBox').value);
    var chill = windChill(temperature, windspeed);
    
        
        document.getElementById('outputDiv').innerHTML = "Wind chill factor is: " + chill;
    }
function windChill(t, s) {
    var chill2 = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return chill2;
}