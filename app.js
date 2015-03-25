// Wrap app in an anonymous function just as a good practice.
(function(){

	// angular.module( 'applicationName', [ dependencies, commaSeparated, list ])
	var app = angular.module('store', []);

	// 1. add a controller to store the product info
	app.controller('StoreController', function(){
		// 2. add the product as a *property* of the StoreController
		this.product = product;

		// 3. now go add the StoreController to the HTML
	});

	var product = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'great Dodeca gem!',
	}

})();
