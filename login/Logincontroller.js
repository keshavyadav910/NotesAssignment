MyApp.controller('LoginController', function($scope,$rootScope,$state, LoginService) {  
    $scope.submit = function() {  
        var UserData = {  
            Email: $scope.Email,  
            Password: $scope.Password,  
        }  
        let isLogedIn=LoginService.LoginValidate(UserData);
        if(isLogedIn){
            $rootScope.isLogedIn=true;
                $state.go('/notes')
        }else{
            $rootScope.isLogedIn=false;

        }
        // .then(function(pl) {  
        //     //result data  
        //     alert(pl.data); 
        //     $state.go('/notes')
        // });  
    }
}); 