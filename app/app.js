var mainApp = angular.module('mainApp',['ngAnimate']);

mainApp.controller('myController',function($scope){

  $scope.progressbarIndex = "0";

  $scope.controlls = {"buttons":[-25,-10,10,25],"bars":[25,50,75],"limit":100};

  $scope.getWidth = function(width){
  	return width+'%';
  }

  $scope.updateProgress = function(width,index){

        var bar_value = $scope.controlls.bars[index];
        var updated_value = bar_value + width;

        if(updated_value <= 0){
        	$scope.controlls.bars[index] = 0; 
        }else{
        	$scope.controlls.bars[index] = updated_value; 
        }
        
    	
   }

});