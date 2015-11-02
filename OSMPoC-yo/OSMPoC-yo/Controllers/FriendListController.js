angular.module('OSMapp').controller('FriendListController', ['$scope', '$http', function ($scope, $http) {
    $scope.info = 'vriendjes';

    //Henk his friends from the database
    $scope.Friends = [
            { name: 'Kelly', id: 1, mnpt: 200 },
            { name: 'Rimmert', id: 2, mnpt: 650 },
            { name: 'Freek', id: 3, mnpt: 20 },
            { name: 'Rick', id: 4, mnpt: 25 },
            { name: 'Samantha', id: 5, mnpt: 0 }
    ];

}]);