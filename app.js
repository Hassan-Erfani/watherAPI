var api = "https://api.openweathermap.org/data/2.5/find?q=";
// var city = document.getElementById("city").value;
var apiKey = "&appid=8a433d1d428086cbe1a5820009096093";
var units = "&units=metric";

  function weatherAsk(){
    var city = document.getElementById("inputCity").value;
    var URL = `${api}${city}${apiKey}${units}`;
    $.getJSON(URL, function(data){
      console.log(data.list[0].weather[0].icon);
      updateDOM(data);
    })
  }


  function updateDOM(data){
    var city = data.list[0].name;
    var temp = Math.round(data.list[0].main.temp);
    var desc = data.list[0].weather.description;
    var icon = data.list[0].weather[0].icon;


// IDEA: Das auf plain JS machen WICHTIG !

    var iconString = "http://openweathermap.org/img/w/";
    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src",  `${iconString}${icon}.png`);


}
