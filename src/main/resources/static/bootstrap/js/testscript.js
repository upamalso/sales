var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	$scope.sayHello = function() {
		
		$scope.greeting = 'Hello ' + $scope.name + ', have a nice day';
		
	};
	
});