app.controller("Addcars",function($scope,ajax){
    $scope.submit=function(){
        ajax.post("https://localhost:44391/api/Car/create",$scope.post,success,failure);
    function success(response){
        console.log(response);
        $scope.msg = "New Car Added Successfully";
        $scope.post.reset();
    }
    function failure (error){
        $scope.msg = "New Car Add Unsuccessfull";
      console.log(response);
    }

    };   
});
