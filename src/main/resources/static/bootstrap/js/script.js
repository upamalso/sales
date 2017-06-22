var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {
	
//	$scope.varusername = $scope.usernamesss;
//	$scope.employees = $scope.employees;
//	$scope.headoffice =  $scope.headoffice;	
var name=$scope.names;
	
	$scope.sayHello = function() {	
//		alert($scope.names);
		$scope.greeting = 'Hello ' + $scope.name + ', have a nice days';
		
	};

/*	$scope.auth = function() {
		$scope.varusername = $scope.username;		
	};
	$scope.auth2 = function() {
		$scope.employees = $scope.employees;		
	};
	$scope.auth3 = function() {
		$scope.headoffice =  $scope.headoffice;		
	};
	$scope.auth4 = function() {
		$scope.message =  'Clicked';		
	};
*/
	
	
	$scope.addRowAsyncAsJSON = function(){	
		alert($scope.name);

//		$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
		// Writing it to the server
		//		
		var dataObj = {
				name : $scope.name,
				employees : $scope.employees,
				headoffice : $scope.headoffice
		};	
		alert('object : ' + dataObj['employees']);
		var res = $http.post('http://localhost:4321/api/', dataObj);
		$scope.response = res;
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		//alert('Message : ' + $scope.message);
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		// Making the fields empty
		//
		$scope.name='';
		$scope.employees='';
		$scope.headoffice='';
	};

	
});
