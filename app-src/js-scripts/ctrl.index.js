/*
** Angular.js - Index Controller
** IEMKA 1.0
*/

$iemApp.controller('iemIndexCtrl', function($scope) {
	
	$scope.collections = [{
		photo: '1.jpg',
		name: 'Dapur Architecture Design #1'
	},
	{
		photo: '2.jpg',
		name: 'Dapur Architecture Design #2'
	},
	{
		photo: '3.jpg',
		name: 'Dapur Architecture Design #3'
	},
	{
		photo: '4.jpg',
		name: 'Dapur Architecture Design #4'
	}];
	
	$scope.toggleMobileMenu = function() {
		$('.mobile-navigation').slideToggle();
	}

	$scope.enlargeImage = function(img) {
		$.magnificPopup.open({
			items: {
				src: '/dist/img/'+img
			},
			type: 'image'
		});
	}
});