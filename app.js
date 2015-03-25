(function(){

	var app = angular.module('store', []);


	app.controller('StoreController', function(){

		this.products = products;

	});
	// 1. Let's add images to our products
	var products = [{
			name: 'Dodecahedron',
			price: 2,
			description: 'great Dodeca gem!',
			images:[{
				full: 'http://placekitten.com/g/300',
				thumb: 'http://placekitten.com/g/150'
			},{
				full: 'http://placekitten.com/g/310',
				thumb: 'http://placekitten.com/g/140'
			}],
			canPurchase: true, 
			soldOut: false,
		},{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'great Pentagonal gem!',
			images:[{
				full: 'http://placekitten.com/g/300',
				thumb: 'http://placekitten.com/g/150'
			},{
				full: 'http://placekitten.com/g/310',
				thumb: 'http://placekitten.com/g/140'
			}],
			canPurchase: false, 
			soldOut: false,
		},{
			name: 'Diamond',
			price: 10.95,
			description: 'great Diamond gem!',
			images:[{
				full: 'http://placekitten.com/g/300',
				thumb: 'http://placekitten.com/g/150'
			},{
				full: 'http://placekitten.com/g/310',
				thumb: 'http://placekitten.com/g/140'
			}],
			canPurchase: true, 
			soldOut: false,
		}]
		// 2. now go add images to html

})();
