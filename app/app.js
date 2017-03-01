/* Angular App Document */
(function() {

    angular
        .module('mainApp', [])
        .controller('progressBarController', progressBarController);
})();

/**
 * @name progressBarController
 * @desc progress bar controller function
 * @param {progressbarsMainservice}  Service to do main functions
 * @returns 
 */
function progressBarController(progressbarsMainservice) {

    var vm = this;
    vm.progressbarIndex = "0";
    vm.controlls = progressbarsMainservice.getDefaultControls();
    vm.updateProgress = updateProgress;
    vm.getWidth = progressbarsMainservice.getWidth();

    /**
     * @name updateProgress
     * @desc update process bar with given width
     * @param {width} width to change in progress bar
     * @param {index} index of current progress bar
     * @returns 
     */
    function updateProgress(width, index) {
        progressbarsMainservice.progressBarUpdate(width, index);
    }

}