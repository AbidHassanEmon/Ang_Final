app.controller("Cars",function($scope,$http,ajax){
    ajax.get("https://localhost:44391/api/cars/all",success,error);
    function success(response){
        console.log(response);
      $scope.Cars=response.data;
    }
    function error(error){
      $scope.msg = "data not showing";
    }

});
