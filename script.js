$(document).ready(function(){
	var units="metric";
	var unit_type="°C";
        var lat;
        var lng;

        // Open Weather Maps API Key: 55b74a747d2c01d818cecf1e258969ee

        function getWeather(){
                $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&units="+units+"&APPID=55b74a747d2c01d818cecf1e258969ee",function(json){
                        //$("#location").html(JSON.stringify(json)); //used for testing if api works
                        $("#location").html(json.name + "," + json.sys.country);
                        $("#weather").html(json.weather[0].main);
                        $("#temperature").html(json.main.temp + unit_type);
                        $("#icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
                });
        }

        // Google Maps Geolocation API key: AIzaSyBFxbekNAX5NeO23YcWbL3teg17ZgV4qFQ

        $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBFxbekNAX5NeO23YcWbL3teg17ZgV4qFQ", function(geo){
                //$("#loc").html(JSON.stringify(geo)); TEST IF API WORKS
                lat=geo.location.lat;
                lng=geo.location.lng;
                //$("#loc").html("lat= "+lat+" lng= "+lng); ANOTHER TEST
                getWeather();
        });

        
        getWeather();

        $("button").click(function(){
                if(units=="metric"){
                        $(this).css("-webkit-transform", "translateY(100%)");
                        units="imperial";
                        unit_type="°F";
                        $("button").html("°F");
                        getWeather();

                } else {
                        $(this).css("-webkit-transform", "translateY(0%)");
                        units="metric";
                        unit_type="°C";
                        $("button").html("°C");
                        getWeather();
                }
                
        });
        
});