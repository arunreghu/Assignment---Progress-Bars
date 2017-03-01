(function() {
    angular
        .module('mainApp')
        .directive('controlls', controlls);

})();

/**
 * @name controlls
 * @desc This is a directive definition for control buttons in our App 
 * @returns 
 */
function controlls(progressbarsMainservice) {
    return {
        scope: {
            item: '=',
            barindex: '='
        },
        replace: true,
        restrict: 'EA',
        template: '<button ng-click="mainService.progressBarUpdate(item,barindex)" type="button" class="btn btn-primary ">{{item}}</button>',
        controller: function($scope) {
            $scope.mainService = progressbarsMainservice;
        },
        link: function(scope, element, attrs) {
            console.log(scope.barindex, scope.item);
        }
    };
}