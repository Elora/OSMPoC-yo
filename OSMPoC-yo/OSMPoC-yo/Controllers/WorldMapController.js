angular.module('OSMapp').controller('WorldMapController', ['$scope', '$http', function ($scope, $http) {
    $scope.info = 'Wereld map';

    $scope.dummyData = [];

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

}]);

angular.module('OSMapp').directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: '/Content/World_Map.svg',
        link: function (scope, element, attrs) {
            var regions = element[0].querySelectorAll('path');
            angular.forEach(regions, function (path, key) {
                var regionElement = angular.element(path);
                regionElement.attr("region", "");

                //
                
                var elementId = regionElement.attr("id");
               // console.log(regionElement.attr("id"));
                for (var i = 0; i < scope.CountryPerson.length; i++) {
                    if (elementId == scope.CountryPerson[i].CName) {
                        var color = 0;

                        if (scope.CountryPerson[i].A1 == 1)
                        {
                            color++;
                        }
                        if (scope.CountryPerson[i].A2 == 1) {
                            color++;
                        }
                        if (scope.CountryPerson[i].A3 == 1) {
                            color++;
                        }

                        if (color == 1) {
                            regionElement.attr("fill", "rgba(255, 255 , 0 ,1)");
                        } else if (color == 2) {
                            regionElement.attr("fill", "rgba(255, 150 , 0 ,1)");
                        } else if (color == 3) {
                            regionElement.attr("fill", "rgba(255, 0 , 0 ,1)");
                        }
                        //regionElement.attr("fill", "rgba(255, 255 , 255 ,1)");
                        //console.log(regionElement.attr("id"));
                    }

                }
                //
                $compile(regionElement)(scope);
            })
        }
    }
}]);

angular.module('OSMapp').directive('region', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.regionClick = function () {
                alert(scope.elementId);
            };
            element.attr("ng-click", "regionClick()");
            element.removeAttr("region");
            $compile(element)(scope);
        }
    }
}]);