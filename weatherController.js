weatherApp.controller('showWeather', function($scope,$http,getData){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var data  = getData.getWeatherData(position);
      data.then(function(response){
        $scope.resp = response;
        $scope.todayData = response.data.list[0];
        $scope.cityDesc  = response.data.city.name + ","+response.data.city.country;
        console.log($scope.resp.data);
      });
    });
  } else {
      $scope.resp = "Geolocation is not supported by this browser.";
  }
  
})