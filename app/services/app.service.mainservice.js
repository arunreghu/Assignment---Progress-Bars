(function() {
    angular
        .module('mainApp')
        .service('progressbarsMainservice', progressbarsMainservice);

})();

/**
 * @name progressbarsMainservice
 * @desc service function to do all tasks 
 * @returns 
 */
function progressbarsMainservice() {
    var mainService = {};
    var endpoint = {
        "buttons": [-25, -10, 10, 25],
        "bars": [25, 50, 75],
        "limit": 100
    };
    mainService.getDefaultControls = getDefaultControls;
    mainService.getWidth = getWidth;
    mainService.progressBarUpdate = progressBarUpdate;

    function getDefaultControls() {
        return endpoint;
    }

    function getWidth(width) {
        return width + '%';
    }

    /**
     * @name progressBarUpdate
     * @desc This function will update the width of current progress
     * @returns 
     */
    function progressBarUpdate(width, index) {

        var currentBar_value = endpoint.bars[index];
        var updated_value = currentBar_value + width;
        if (updated_value <= 0) {
            endpoint.bars[index] = 0;
        } else {
            endpoint.bars[index] = updated_value;
        }
    }


    return mainService;
}