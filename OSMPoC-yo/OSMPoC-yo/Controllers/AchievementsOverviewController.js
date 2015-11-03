angular.module('OSMapp').controller('AchievementsOverviewController', ['$scope', '$http', function ($scope, $http) {


    $scope.info = 'Troep die je gehaald hebt';

    $scope.Achievements = [
        { name: 'a1', img: '/Content/a1.jpg' },
        { name: 'a2', img: '/Content/a2.jpg' },
        { name: 'a3', img: '/Content/a3.jpg' }
    ];

    //a 0=no and 1 = yes
		//get all countries and achievements where player id = 10  (that is Henk)
    $scope.CountryPerson = [
       { Cid: 1, CName:'nl' , A1: 1, A2: 0, A3: 1 },
       { Cid: 2, CName:'eng' , A1: 1, A2: 1, A3: 1 },
       { Cid: 5, CName:'fr' , A1: 0, A2: 0, A3: 1 },
       { Cid: 4, CName:'be' , A1: 1, A2: 1, A3: 0 },
    ];


    


}]);
