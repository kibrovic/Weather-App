$(document).ready(function(){
	var units;
	var unit_type="°C";
        var lat;
        var lng;

        // Apixu Weather API 

        function getWeather(){
              
                $.getJSON("https://api.apixu.com/v1/current.json?key=f2334b1c9d3142f3b0a152818171207&q="+lat+","+lng,function(json){
                        if (unit_type=="°C"){
                                units=json.current.temp_c;
                        } else {
                                units=json.current.temp_f;
                        }
                        //$("#location").html(JSON.stringify(json)); //used for testing if api works
                        $("#location").html(json.location.name + "," + json.location.country);
                        $("#weather").html(json.current.condition.text);
                        $("#temperature").html(units+unit_type);
                        $("#icon").html("<img src='https:"+json.current.condition.icon+"' alt='Icon depicting current weather.'>");
                });  
        }

        // Google Maps Geolocation API 

        $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBFxbekNAX5NeO23YcWbL3teg17ZgV4qFQ", function(geo){
                //$("#loc").html(JSON.stringify(geo)); //TEST IF API WORKS
                lat=geo.location.lat;
                lng=geo.location.lng;
                getWeather();
        });

        
        getWeather();

        $("button").click(function(){
                if(unit_type==="°C"){
                        $(this).css("-webkit-transform", "translateY(100%)");
                        unit_type="°F";
                        $("button").html("°F");
                        getWeather();

                } else {
                        $(this).css("-webkit-transform", "translateY(0%)");
                        unit_type="°C";
                        $("button").html("°C");
                        getWeather();
                }
                
        }); 
        
});