weatherApp.factory('getData', function($http){
  return {
    getWeatherData : function(position){
      var lat = position.coords.latitude;
      var longt= position.coords.longitude;
      return $http({
        method:'GET',
        url:'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+longt+'&cnt=6&mode=json&units=metric&appid=7746d133b7916f6b02456928a15e5490'
      })
    }
  }
})