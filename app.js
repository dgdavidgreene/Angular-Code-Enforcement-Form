
var codeEnforcementComplaintApp = angular.module('codeEnforcementComplaintApp', ['ngRoute', 'ngAnimate']);

codeEnforcementComplaintApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-person.html',
            controller: 'personController'
    	})
    	.when('/about', {
    		templateUrl: 'page-address.html',
            controller: 'addressController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-complaint.html',
            controller: 'complaintController'
    	});

});

codeEnforcementComplaintApp.controller('personController', function($scope) {
    $scope.pageClass = 'page-person';
});

codeEnforcementComplaintApp.controller('addressController', function($scope) {
    $scope.pageClass = 'page-aaddress';
});

codeEnforcementComplaintApp.controller('complaintController', function($scope) {
    $scope.pageClass = 'page-complaint';
});