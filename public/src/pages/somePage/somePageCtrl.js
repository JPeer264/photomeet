angular
    .module('pages.somePage')
    .controller('someController', someController);

someController.$inject = [
    '$scope',
];

function someController($scope) {

    $scope.test = "test data";

}
