weatherApp.controller('showWeather', function($scope,$http,getData,$timeout){
  $scope.overl = true;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var data  = getData.getWeatherData(position);
      data.then(function(response){
        $scope.resp = response;
        $scope.todayData = response.data.list[0];
        $scope.cityDesc  = response.data.city.name + ","+response.data.city.country;
        $scope.overl = false
      });
    });
    $timeout(function(){
      if($scope.overl){
        var data  = getData.getWeatherData();
        data.then(function(response){
          $scope.resp = response;
          $scope.todayData = response.data.list[0];
          $scope.cityDesc  = response.data.city.name + ","+response.data.city.country;
          $scope.overl = false
        });
      }
    },3000);
  } else {
      $scope.resp = "Geolocation is not supported by this browser.";
  }
  
})