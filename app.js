// Wrap app in an anonymous function just as a good practice.
(function(){

	// angular.module( 'applicationName', [ dependencies, commaSeparated, list ])
	var app = angular.module('store', []);

	// 1. add a controller to store the gem info
	app.controller('StoreController', function(){
		// 2. add the gem as a *property* of the StoreController
		this.product = gem;

		// 3. now go add the StoreController to the HTML
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'great Dodeca gem!',
		
		// 2. we'll add our canPurchase Boolean to the gem.
		canPurchase: true, // if this property didn't exist, Angular would assume it is false. That's what we call a 'falsey' value.
		soldOut: true,
	}

})();
