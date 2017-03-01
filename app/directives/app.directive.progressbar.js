(function() {
    angular
        .module('mainApp')
        .directive('progressBar', progressBar);

})();

/**
 * @name controlls
 * @desc This is a directive definition for build progress bars in our App 
 * @returns 
 */
function progressBar(progressbarsMainservice) {
    return {
        scope: {
            item: '='
        },
        restrict: 'EA',
        template: '<div class="progress-bar progress-bar-success" ng-class="{\'progress-bar-danger\': item > progressbars.getDefaultControls().limit}" role="progressbar" aria-valuenow="30"  ng-style="{\'width\':progressbars.getWidth(item)}"><span>{{item}}%</span></div>',
        controller: function($scope) {
            $scope.progressbars = progressbarsMainservice;
        }
    };
}