var dDash = angular.module('dDash', ['ngRoute']);

dDash.config(function ($routeProvider) {
    $routeProvider
        .when('/dDash', {
            templateUrl: 'view/templates/dashboard.html',
            controller: 'dDashController'
        })
        .when('/aggregator', {
            templateUrl: 'sample.html',
            controller: 'dDashController'
        })
        .otherwise({
            redirectTo: '/dDash'
        })
});


