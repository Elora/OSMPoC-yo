angular.module('OSMapp').controller('WorldMapController', ['$scope', '$http', function ($scope, $http) {
    $scope.info = 'Wereld map';

    $scope.dummyData = [];

}]);

angular.module('OSMapp').directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: '/Content/Worldmap-blank.svg',
        link: function (scope, element, attrs) {
            var regions = element[0].querySelectorAll('path');
            angular.forEach(regions, function (path, key) {
                var regionElement = angular.element(path);
                regionElement.attr("region", "");
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