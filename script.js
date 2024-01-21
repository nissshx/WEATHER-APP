const api_key = "5d2ee84b1d5d46f593170319242101";
const date = new Date();
const curr_date =  date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate();
console.log(curr_date);
function getloc(){
  const z = document.getElementById("location-input").value;
  console.log(z);
const curr_call_url = "http://api.weatherapi.com/v1/current.json?key=5d2ee84b1d5d46f593170319242101&q="+z+"&aqi=yes";
console.log(curr_call_url);
function loadJSON(path, success, error) {
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
  }
  loadJSON(curr_call_url, myData,'jsonp')
  
  function myData(DATA){
      document.getElementById("location").innerHTML = DATA.location.name + " ,"+DATA.location.region;
      document.getElementById("weather-icon").src=DATA.current.condition.icon;
      document.getElementById("condition").innerHTML=DATA.current.condition.text;
      document.getElementById("temp").innerHTML= DATA.current.temp_c + "deg C / "+DATA.current.temp_f+" deg F" + "/Humidity : "+DATA.current.humidity;
    }
}