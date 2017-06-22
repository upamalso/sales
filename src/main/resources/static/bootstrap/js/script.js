var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {
	

var name=$scope.names;
	
	$scope.sayHello = function() {	
		$scope.greeting = 'Hello ' + $scope.name + ', have a nice days';		
	};


/*	$scope.addRowAsyncAsJSON = function(){	
		alert($scope.name);
		
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
		
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		
		$scope.name='';
		$scope.employees='';
		$scope.headoffice='';
	};
	*/
	
	$scope.Items = [];
    $scope.loadData = function(){
    	
         $http.get('http://localhost:4321/api/items').then(function(data){
              $scope.Items = data.data;
         })
    }
    $scope.loadData();
    
	$scope.orders = [];
    $scope.loadOrderData = function(){
    	
         $http.get('http://localhost:4321/api/orders?userid=1').then(function(data){
              $scope.orders = data.data;
         })
    }
    $scope.loadOrderData();
    
    
    
    $scope.cartItems = []; 
    $scope.totalAmount =0.0;
    $scope.cartIndex = 0;
    
    $scope.addToCartAsJson = function($name,$id,$units,$price){
    	
    	$scope.cartItems.push({'id':$id, 'name':$name, 'quantity': $units, 'amount':$units*$price });
    	$scope.unitVal = '';
    	$scope.totalAmount = $scope.totalAmount + ($units*$price); 
    	$scope.cartIndex ++;

    };
    
    $scope.userId = 1;
    $scope.submitCart = function(){  
    	
       $http.post("http://localhost:4321/api/neworder",  {list:$scope.cartItems, total:$scope.totalAmount, userId:$scope.userId}, {headers: {'Content-Type': 'application/json'} })
       .then(function (response) {
    	   $scope.cartItems = []; 
           return response;
       });
       
    };
    
    
    $scope.getUserOrder = function(){  
    	
        $http.get("http://localhost:4321/api/userorder" )
        .then(function (response) {
        	$scope.userOrders = response.data;        	
        });        
     };
     
     
     $scope.createUser = function($name,$username,$password){  
    	 
    	 alert($name+$username+$password);
     	
         $http.post("http://localhost:4321/api/createuser",  {name:$name, username:$username, password:$password}, {headers: {'Content-Type': 'application/json'} })
         .then(function (response) {      	   
             return response;
             
         });         
      };
     
     

	
});
