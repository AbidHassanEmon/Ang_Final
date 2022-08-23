app.controller("departments",function($scope,ajax){
      function success(response){
          $scope.departments = response.data;
          
      }
      function failure (error){
        $scope.msg = "data not showing";
      }
      ajax.get("https://localhost:44387/api/Department/GetAll",success,failure);
});
