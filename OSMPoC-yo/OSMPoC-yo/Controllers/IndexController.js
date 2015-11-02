var App = angular.module('OSMapp', ['ngRoute']);

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

function SetActiveNavItem(sender) {
    $(".NavActive").removeClass("NavActive");
    $(sender).closest("a").addClass("NavActive");
}

