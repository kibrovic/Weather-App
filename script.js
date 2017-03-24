$(document).ready(function(){

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=3191281&APPID=55b74a747d2c01d818cecf1e258969ee",function(json){
        	$("#data").html(JSON.stringify(json));
        	$("#location").html(json.name);
        	$("#icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        });
	
  
});