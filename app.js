// Wrap app in an anonymous function just as a good practice.
(function(){

	// angular.module( 'applicationName', [ dependencies, commaSeparated, list ])
	var app = angular.module('store', []);


	app.controller('StoreController', function(){

		// 2. update 'products'
		this.products = products;

		// 3. now go add your repeat directive
	});

	// 1. Add multiple products to our products array
	var products = [{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'great Dodeca gem!',
			canPurchase: true, 
			soldOut: false,
		},{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'great Pentagonal gem!',
			canPurchase: false, 
			soldOut: false,
		},{
			name: 'Diamond',
			price: 10.95,
			description: 'great Diamond gem!',
			canPurchase: true, 
			soldOut: false,
		}]

})();
