/**
* services.entry Module
*
* Description
*/
angular
	.module('services.entry', ['ngFileUpload'])
	.service('entryService', ['$rootScope', '$http', 'authService', 'Upload', '$timeout', function ($rootScope, $http, authService, Upload, $timeout) {

		/**
		 * Upload entries
		 *
		 * @param data {Object}
		 */
		this.upload = function(form) {

			if (!$rootScope.isLoggedIn) {
				console.log('false');
				return false;
			} 

			form = new Object();

			form.name = 'The beauty and the beast';
			form.desc = 'Some description of this entry';
			form.url = 'challenge/monthly/49';
			form.img = 'lalala.jpg';

			this.saveEntry(form).then(function(err, data) {
				if (err) {
					console.log('Error:');
					console.log(err);
					return;
				}
			});
		};

		/**
		 * saveEntry promise
		 *
		 * @return promise {Object}
		 * @return url {String}
		 */
		$rootScope.saveEntry = function(data, url) {
			var token, promise, hex, height, width;

			token = authService.getToken();

			if (data.img === '' || data.img === undefined) {
				hex = Math.floor(Math.random()*16777215).toString(16);
				height = Math.floor(Math.random() * (1000 - 600) + 600);
				width = Math.floor(Math.random() * (600 - 400) + 400);

				data.img = 'http://dummyimage.com/' + height + 'x' + width + '/' + hex + '/fff.jpg';
			}
			
			$http({
				method: 'POST',
				url: 'http://picstar.dev/api/challenge/' + url + '/new',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				data: data
			}).success(function() {
				location.reload();
			});
		};

		/** 
		 * get specific entry
		 *
		 * @param url {String}
		 */
		this.getEntry = function(url) {
			return $http({
				method: 'GET',
				url: 'http://picstar.dev/api/challenge/' + url,
				headers: {
					'Accept': 'application/json',
				}
			});
		};

		/**
		 * picture upload
		 *
		 * @param data {Object}
		 * @param url  {String}
		 */
		$rootScope.uploadPic = function(data, url) {
			var token = authService.getToken();

			data.file.upload = Upload.upload({
				url: 'http://picstar.dev/api/challenge/' + url,
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				file: data.file,
				fileFormDataName: 'myFile'
			});

			data.file.upload.then(function (response) {
				$timeout(function () {
					data.file.result = response.data;
				});
			}, function (response) {
				if (response.status > 0) {
					$rootScope.errorMsg = response.status + ': ' + response.data;
				}
			});
		}

		/**
		 * save like into entry
		 */
		$rootScope.like = function(entryID) {
			if (!$rootScope.isLoggedIn) {
				return false;
			}
			var token = authService.getToken();

			$http({
				method: 'POST',
				url: 'http://picstar.dev/api/like/' + entryID,
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + token
				}
			}).error(function(err, code) {
				if (code === 403) {
					$http({
						method: 'POST',
						url: 'http://picstar.dev/api/deletelike/' + entryID,
						headers: {
							'Accept': 'application/json',
							'Authorization': 'Bearer ' + token
						}
					})	
				}
			});
		};






















		









		









		









		









		










	}]);