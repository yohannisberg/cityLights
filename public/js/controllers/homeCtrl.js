angular.module('cityLights').controller('homeCtrl', function ($scope) {

$scope.controlData = function(term){
  var link="https://www.citylightsusa.com/search.php?search_query="+term+"&Search=";
  window.open(link);
  $scope.searchQuery="";
}

});
