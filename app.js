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

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(current){
			this.current = current || 0;
		};
	});

	// 1. 	Let's clean up our code a little by adding a new controller for our Reviews. 
	// 		That way we can define our 'review' var that we used in the HTML.
	app.controller('ReviewController', function(){
		// 1.1 	We'll initialize the review as a blank Object.
		this.review = {};

		// 1.2	Now we can go add this controller to the review form.

		// 3. 	Now we can create a function to add a new review when the form is submitted
		// 3.1 	We'll pass in a product so we know which product Object to add the review to.
		this.addReview = function(product){
			// 3.2 	Then we can simply access the reviews property of that product and .push the review onto the array.
			// 		This works because we bound the form's review model to our ReviewController. So that model is constantly 
			// 		being watched as we input new information.
			product.reviews.push(this.review);

			// 3.3 	Make sure to clear the .review Object after it has been submitted! 
			// 		After it is submitted, we want to be done with it and start a new review. This will also clear the form
			// 		because, again, the Object is bound to that form through ng-model.
			this.review = {};

			// 3.4 	Now go add this function to the form.
		};
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
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
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
			reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837
			}, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837
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
			reviews: [{
				stars: 1,
				body: "This gem is WAY too expensive for its rarity value.",
				author: "turtleguyy@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "BBW: High Shine != High Quality.",
				author: "LouisW407@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "Don't waste your rubles!",
				author: "nat@example.org",
				createdOn: 1397490980837
			}],
			canPurchase: true, 
			soldOut: false,
		}
		];

})();
