vremenskaPrognoza.controller('pocetnaController', ['$scope', 'gradServis', function($scope, gradServis){

	$scope.grad = gradServis.grad;

	$scope.$watch('grad', function(){
		gradServis.grad = $scope.grad;
	});

}]);

vremenskaPrognoza.controller('prognozaController', ['$scope', '$resource', '$routeParams', 'gradServis', function($scope, $resource, $routeParams, gradServis){

	$scope.grad = gradServis.grad;

	$scope.denovi = $routeParams.denovi || '2';

	$scope.prognozaAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
		callback: "JSON_CALLBACK"}, { 
			get: {
				method: "JSONP"
			}});

	$scope.prognozaIshod = $scope.prognozaAPI.get({
		q: $scope.grad, 
		cnt: $scope.denovi,
		appid: '6cb3264b5d41a2a0157d5fcaaa0c14e7'
	});

	$scope.pretvoriCelzius = function(stepeni) {
		return Math.round(stepeni - 273);
	}

	$scope.pretvoriDatum = function(dt) {
		return new Date(dt * 1000);
	}

}]);