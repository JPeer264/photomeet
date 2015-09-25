angular
    .module('pages.header')
    .controller('headerController', headerController);

headerController.$inject = [
    '$scope',
    'authService',
    'challengeService'
];

function headerController($scope, authService, challengeService) {
    
    // todo get all images from /uploads/weekly und /uploads/monthly
    challengeService.getChallenges('monthly').then(function(data) {
        var challenges = data.data;
        var defaultImage = 'http://www.doliwa-naturfoto.de/Bilder-Galerie/Tiere/Katzen/Katze4/wd_2101.jpg';
        var imgArray = new Array();

        for (var index in challenges) {
            if (!challenges[index].img) {
                imgArray.push(defaultImage);
            } else {
                imgArray.push(challenges[index].img);
            }
        }

        $scope.images = imgArray;
    });

    /**
     * Change the $scope clicked
     *
     * @param boo {Boolean}
     */
    $scope.popupLogin = function(boo) {
        $scope.clicked = boo;
    };
    $scope.clicked = false;


    (function(){
        var leftVal = parseInt($('#images').css('left'));

        leftVal = leftVal - 20;
        $('#images').css({
            'left': leftVal
        });

        setInterval(function() {
            
            leftVal = leftVal - 20;
            // console.log(leftVal);
            $('#images').css({
                'left': leftVal
            });
        }, 999);

    })();
}
