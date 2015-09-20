/**
* services.date Module
*
* Description
*/
angular
	.module('services.date', [])
	.service('dateService', [function () {
		
		this.getFormatedDate = function(date) {

			var today = date === undefined ? new Date() : new Date(date);

			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!

			var yyyy = today.getFullYear();
			
			if (dd < 10) {
				dd = '0' + dd;
			} 
			
			if (mm < 10) {
				mm = '0' + mm;
			} 
			
			return dd+'.'+mm+'.'+yyyy;
		};

	}]);