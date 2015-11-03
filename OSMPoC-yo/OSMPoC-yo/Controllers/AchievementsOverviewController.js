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
            $scope.CountryAchievementList2 = tesjte($scope.CountryPerson);

            return $scope.CountryAchievementList2;
        }
        return $scope.CountryAchievementList2;

    }


}]);

var CountryList = GetCountryList();
var CountryAchievementList = [];




function tesjte(CountryPerson) {
    var k = 0;
    
    for (var i = 0 ; i < CountryList.length; i++) {
        var tempa1 = "Nee";
        var tempa2 = "Nee";
        var tempa3 = "Nee";
        for (var j = 0; j < CountryPerson.length; j++) {          
            if (CountryList[i] == CountryPerson[j].CName) {
                if (CountryPerson[j].A1 == 1) {
                    tempa1 = "Ja";
                }
                //else {
                //    tempa1 = "Nee";
                //}
                if (CountryPerson[j].A2 == 1) {
                    tempa2 = "Ja";
                }
                //else {
                //    tempa2 = "Nee";
                //}
                if (CountryPerson[j].A3 == 1) {
                    tempa3 = "Ja";
                }
                //else {
                //    tempa3 = "Nee";
                //}
            }
        }
        console.log(tempa1);
        CountryAchievementList[k] = { Country: CountryList[i], A1: tempa1, A2: tempa2, A3: tempa3 };
        k++;
        
    }
    return CountryAchievementList;

}
