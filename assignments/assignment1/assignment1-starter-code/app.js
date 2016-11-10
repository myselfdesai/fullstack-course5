(function () {
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.message = "";
    $scope.btnCheckto = function(){


      if (angular.isDefined($scope.lunchmenu)) {
        var lunchmenu_data = $scope.lunchmenu;
        lunchmenu_data =  lunchmenu_data.split(",");  // NOT consider and empty item, i.e. , ,

        if(lunchmenu_data.length > 3){
          $scope.message = "Too much!";
          $scope.messageStyle = {color: "green"};
          $scope.inputStyle = {border: "1px solid green"};
        }else{
          $scope.message = "enjoy";
          $scope.messageStyle = {color: "green"};
          $scope.inputStyle = {border: "1px solid green"};
        }
      }else{
          $scope.message = "Please enter data first";
          $scope.messageStyle = {color: "red"};
          $scope.inputStyle = {border:"2px solid red"};
      }

    };
  };

})();
