vremenskaPrognoza.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'strani/pocetna.htm',
		controller: 'pocetnaController'
	})

	.when('/prognoza', {
		templateUrl: 'strani/prognoza.htm',
		controller: 'prognozaController'
	})

	.when('/prognoza/:denovi', {
		templateUrl: 'strani/prognoza.htm',
		controller: 'prognozaController'
	})
});