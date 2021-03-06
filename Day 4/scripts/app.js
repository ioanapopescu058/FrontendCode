var app = angular.module('app', ['ngRoute']);

// TODO #3 add default route for main page
app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/colors', {
                templateUrl: '../views/colors.html',
                controller: 'ColorsController'
        })
            .when('/forms', {
                templateUrl: '../views/form.html',
                controller: 'FormsController'
        })

    .otherwise({
            redirectTo: '/'
        });
    }]);
