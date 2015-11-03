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
       { Cid: 1, CName: 'Netherlands', A1: 1, A2: 0, A3: 1 },
       { Cid: 2, CName: 'Russia', A1: 1, A2: 1, A3: 1 },
       { Cid: 5, CName: 'France', A1: 0, A2: 0, A3: 1 },
       { Cid: 4, CName: 'Belgium', A1: 1, A2: 1, A3: 0 },
       { Cid: 5, CName: 'USA', A1: 1, A2: 1, A3: 0 },
       { Cid: 6, CName: 'China', A1: 0, A2: 1, A3: 0 },

    ];

    $scope.CountryList = GetCountryList();
    
    $scope.CountryPersonActive = "";

    $scope.CountryAchievementList = [];

    $scope.GetAchievements = function () {
        for (var i = 0 ; i < $scope.CountryList.length; i++) {
            for (var j = 0; j < $scope.CountryPerson.length; j++) {
                var tempa1 = "";
                var tempa2 = "";
                var tempa3 = "";
                if ($scope.CountryList[i] == $scope.CountryPerson[j].CName) {
                    
                    if ($scope.CountryPerson[j].A1 == 1) {
                        tempa1 = 'Ja';
                    } else {
                        tempa1 = 'Nee';
                    }
                    if ($scope.CountryPerson[j].A2 == 1) {
                        tempa2 = 'Ja';
                    } else {
                        tempa2 = 'Nee';
                    }
                    if ($scope.CountryPerson[j].A3 == 1 ) {
                        tempa3 = 'Ja';
                    } else {
                        tempa3 = 'Nee';
                    }
                    
                    $scope.CountryAchievementList[i] = {Country: $scope.CountryList[i], A1: tempa1 , A2: tempa2, A3: tempa3}

                }
                else {
                    $scope.CountryAchievementList[i] = { Country: $scope.CountryList[i], A1: "Nee", A2: 'Nee', A3: "Nee" }
                }
            }
        }
        return $scope.CountryAchievementList;
    }

    $scope.getachievementa1 = function () {
        if ($scope.IsCountyAMatch()) {
            //a 0=no and 1 = yes
            console.log("get a1 match")
            if ($scope.CountryPersonActive.A1 == 1) {
                return 'Ja';
            }
            else {
                return 'nee';
            }
        }
        return 'Nee';
    }


    $scope.getachievementa2 = function () {
        return 'ja';
    }


    $scope.getachievementa3 = function () {
        return 'ja';
    }

}]);
