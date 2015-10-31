// create the module and name it
var App = angular.module('OSMapp', ['ngRoute']);

// routes
App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'MapPartial.html',
            controller: 'WorldMapController'
        })
        .when('/FriendList', {
            templateUrl: 'FriendListPartial.html',
            controller: 'FriendListController'
        })
        .when('/Achievements', {
            templateUrl: 'AchievementsPartial.html',
            controller: 'AchievementsOverviewController'
        });
});


App.controller('IndexController', function ($scope) {
    $scope.test = "Test";
});

// create the controller and inject Angular's $scope
App.controller('WorldMapController', function ($scope) {
    $scope.info = 'Wereld map';
});

App.controller('FriendListController', function ($scope) {
    $scope.info = 'vriendjes';
});

App.controller('AchievementsOverviewController', function ($scope) {
    $scope.info = 'Troep die je gehaald hebt';
});