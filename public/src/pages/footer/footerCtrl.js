angular
    .module('pages.footer')
    .controller('footerController', footerController);

footerController.$inject = [
    '$scope',
    'challenges'
];

function footerController($scope, challenges) {

    $scope.test = challenges;

}
