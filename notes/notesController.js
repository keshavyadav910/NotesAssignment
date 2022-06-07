MyApp.controller('notesController', ['$scope', 'LoginService',function($scope, LoginService) {  
    $scope.cards = [];
    $scope.newNote={title:'',body:'',Color: "red"}      
    $scope.setCards = function() {
      $scope.cards = [
      {
          title: "Manny",
          body: "Code Monkey",
          Color: "red"
      }];
  }
    $scope.setCards();
    $scope.saveRecord=function(){
        $scope.cards.push(angular.copy($scope.newNote));
    }
    
}]); 