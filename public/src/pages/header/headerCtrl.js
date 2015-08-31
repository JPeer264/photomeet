angular
    .module('pages.header')
    .controller('headerController', headerController);

headerController.$inject = [
    '$scope',
];

function headerController($scope) {

    $scope.test = "test data";

}
