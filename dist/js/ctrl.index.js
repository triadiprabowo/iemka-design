/*
** Angular.js - Index Controller
** IEMKA 1.0
*/

$iemApp.controller('iemIndexCtrl', function($scope) {
	
	$scope.collections = [
		{
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
		},
		{
			photo: '5.jpg',
			name: 'Oak Apartment Gading (Studio) #1'
		},
		{
			photo: '6.jpg',
			name: 'Oak Apartment Gading (Studio) #2'
		},
		{
			photo: '7.jpg',
			name: 'Oak Apartment Gading (Studio) #3'
		},
		{
			photo: '8.jpg',
			name: 'Kalibata City Apartment (Gold) #1'
		},
		{
			photo: '9.jpg',
			name: 'Kalibata City Apartment (Gold) #2'
		},
		{
			photo: '10.jpg',
			name: 'Kalibata City Apartment (Gold) #3'
		},
		{
			photo: '11.jpg',
			name: 'Kalibata City Apartment (Gold) #4'
		},
		{
			photo: '12.jpg',
			name: 'Kalibata City Apartment (Gold) #5'
		},
		{
			photo: '13.jpg',
			name: 'Kalibata City Apartment (Gold) #6'
		},
		{
			photo: '14.jpg',
			name: 'Kalibata City Apartment (Gold) #7'
		},
		{
			photo: '15.jpg',
			name: 'Sunter Park View (Studio) #1'
		},
		{
			photo: '16.jpg',
			name: 'Sunter Park View (Studio) #2'
		},
		{
			photo: '17.jpg',
			name: 'Sunter Park View (Studio) #3'
		},
		{
			photo: '18.jpg',
			name: 'Sunter Park View (Studio) #4'
		},
		{
			photo: '19.jpg',
			name: 'Basura Apartment (Platinum) #1'
		},
		{
			photo: '20.jpg',
			name: 'Basura Apartment (Platinum) #2'
		},
		{
			photo: '21.jpg',
			name: 'Basura Apartment (Platinum) #3'
		},
		{
			photo: '22.jpg',
			name: 'Basura Apartment (Platinum) #4'
		}
	];
	
	$scope.toggleMobileMenu = function() {
		$('.mobile-navigation').slideToggle();
	}

	$scope.enlargeImage = function(img) {
		// $.magnificPopup.open({
		// 	items: {
		// 		src: '/dist/img/'+img
		// 	},
		// 	type: 'image'
		// });

		var viewer = new ImageViewer();
		viewer.show('/dist/img/'+img);
	}

	$scope.$activeRoute = window.location.pathname.substr(1, window.location.pathname.length - 1)
});