(function(){

	var app = angular.module('store', []);


	app.controller('StoreController', function(){

		this.products = gems;

	});

	var gems = [{
			name: 'Dodecahedron',
			price: 2,
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
