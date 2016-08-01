var app = angular.module("main", []);
    app.directive('navBar', function(){
        return {
            restrict: 'E',
            templateUrl: '../nav-bar.html'
        };
    });