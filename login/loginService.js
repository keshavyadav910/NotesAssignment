MyApp.service('LoginService', function($http) {  
    var user={Email:'keshav',Password:'yadav'}
    this.LoginValidate = function(UserData) {
        if(UserData.Email===user.Email&&UserData.Password===user.Password){

            return {isLogedIn:true};  
        }else{
            
        return {isLogedIn:false};  
        }
        // var result = $http({  
        //     method: "Post",  
        //     url:'', //pass UserData values to class file  
        //     data: UserData  
        // });  
    }  
});