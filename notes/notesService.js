angular.module('MyApp').service('notesService', function($http) {  
    this.LoginValidate = function(UserData) {  
        var result = $http({  
            method: "Post",  
            url:'', //pass UserData values to class file  
            data: UserData  
        });  
        return result;  
    }  
});