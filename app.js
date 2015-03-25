(function(){

	var app = angular.module('store', []);


	app.controller('StoreController', function(){
		this.products = products;
	});
	
	app.controller('TabController', function(){
		this.tab = 1;
		this.setTab = function(setTab){
			this.tab = setTab;
		};

		this.isSet = function(tab){
			return tab===this.tab;
		};

	});

	// 1. Now let's create a Gallery controller that will control our thumbnails.
	// This will be a lot like our TabController.
	app.controller('GalleryController', function(){
		// 2. let's store the value of the current image from the image array (remember, we're using an array so the first image index is 0).
		this.current = 0;
		// 3. create a function that will let us set the current photo (like we set the Tabs).
		this.setCurrent = function(current){
			this.current = current || 0;
		};

		// Now we can hook up our gallery in our HTML.
	});


	var products = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'great Dodeca gem!',
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			canPurchase: true, 
			soldOut: false,
		},{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'great Pentagonal gem!',
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			canPurchase: false, 
			soldOut: false,
		},{
			name: 'Diamond',
			price: 10.95,
			description: 'great Diamond gem!',
			images:[{
				full: 'http://placekitten.com/g/300/300',
				thumb: 'http://placekitten.com/g/300/300'
			},{
				full: 'http://placekitten.com/g/302',
				thumb: 'http://placekitten.com/g/302'
			},{
				full: 'http://placekitten.com/g/304',
				thumb: 'http://placekitten.com/g/304'
			}],
			canPurchase: true, 
			soldOut: false,
		}
		];

})();
