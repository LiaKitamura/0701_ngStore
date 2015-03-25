(function(){

	var app = angular.module('store', []);


	app.controller('StoreController', function(){
		this.products = products;
	});
	
	// 1. Let's create a new controller to make Tabs that will show different product information (description, specs, reviews, etc.)
	app.controller('TabController', function(){
		
		// 2. define the default tab
		this.tab = 1;

		// 3. create a function to set the tab.
		this.setTab = function(setTab){
			this.tab = setTab;
		};

		// 4. create a function that checks if a tab is set (it will return a boolean).
		this.isSet = function(tab){
			return tab===this.tab;
		};

		// 5. now go connect your tabs to the HTML
	});


	var products = [
		{
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
		}
		];

})();
