angular.module('sportsStore', ['customFilters'])
.controller('sportsStoreCtrl', function ($scope) {
	$scope.data = 
	{
		products: 
		[
			{ name: "Product A", description: "A product", category: "Category #1", price: 100 },
			{ name: "Product B", description: "A product", category: "Category #2", price: 150 },
			{ name: "Product C", description: "A product", category: "Category #2", price: 200 }
		]
	};
});