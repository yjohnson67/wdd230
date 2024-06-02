const temp= 51
const wSpeed= 4
const nullstr= "Not Applicable";
var windchill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
 
var windchill= Math.round(windchill);
if ((temp<=50)&(wSpeed>=3)) {
    document.getElementById("temp").innerHTML= "Temperture: " + temp + "&deg";
    document.getElementById("wSpeed").innerHTML= "Wind Speed: " + wSpeed + "mph";
    document.getElementById("windchill").innerHTML= "Wind Chill: " + windchill + "&deg";
} else {
    document.getElementById("temp").innerHTML= "Temperture: " + temp + "&deg";
    document.getElementById("wSpeed").innerHTML= "Wind Speed: " + wSpeed + "mph";
    document.getElementById("windchill").innerHTML= "Wind Chill: " + nullstr;
}