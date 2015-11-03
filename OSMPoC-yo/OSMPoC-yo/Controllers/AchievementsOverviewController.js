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

    $scope.CountryAchievementList2 = null;
    $scope.GetAchievements = function () {
        if ($scope.CountryAchievementList2 == null) {
            $scope.CountryAchievementList2 =  tesjte($scope.CountryPerson);
            return $scope.CountryAchievementList2;
        }
        return $scope.CountryAchievementList2;

    }


}]);

var CountryList = GetCountryList();
var CountryAchievementList = [];




function tesjte(CountryPerson) {
    for (var j = 0; j < CountryPerson.length; j++) {
        for (var i = 0 ; i < CountryList.length; i++) {
            var tempa1 = "";
            var tempa2 = "";
            var tempa3 = "";
            if (CountryList[i] == CountryPerson[j].CName) {
                
                if (CountryPerson[j].A1 == 1) {
                    tempa1 = 'Ja';
                } else {
                    tempa1 = 'Nee';

                }
                if (CountryPerson[j].A2 == 1) {
                    tempa2 = 'Ja';
                } else {
                    tempa2 = 'Nee';
                }
                if (CountryPerson[j].A3 == 1) {
                    tempa3 = 'Ja';
                } else {
                    tempa3 = 'Nee';
                }

                
                CountryAchievementList[i] = { Country: CountryList[i], A1: tempa1, A2: tempa2, A3: tempa3 }

            }
            else {
                CountryAchievementList[i] = { Country: CountryList[i], A1: "nee", A2: 'nee', A3: "nee" }
            }
        }
    }
    return CountryAchievementList;

}
