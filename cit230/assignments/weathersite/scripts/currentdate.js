var d = new Date();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var dayName = days[d.getDay()];
var monthName = months[d.getMonth()];
var year = d.getFullYear();
var day = d.getDay();

var dateformat = dayName + ' ' + day + ', ' + monthName + ' ' + year;

document.getElementById("currentdate").innerHTML = dateformat;
