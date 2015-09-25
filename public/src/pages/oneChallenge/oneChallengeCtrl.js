/**
* pages.oneChallenge Module
*
* Description
*/
angular
	.module('pages.oneChallenge')
	.controller('oneChallengeCtrl', ['$scope', '$stateParams', 'challengeService', 'dateService', 'entryService', 
	function ($scope, $stateParams, challengeService, dateService, entryService) {

		/**
		 * Scope challengeType get from URL
		 *
		 * @scope entries
		 */
		$scope.challengeType = $stateParams.challengeType;

		/**
		 * Receive entries from challenge service
		 *
		 * @return scope.entries
		 *
		 * @scope entryTypes
		 * @scope challenge
		 */
		challengeService.getChallenges($stateParams.challengeType, $stateParams.challengeID).then(function(data) {
			var receivedData = data.data,
				newestEntries,
				trendigEntries;

			// initialize challenge
			$scope.challenge = receivedData;

			if (receivedData.entries.length === 0) {
				$scope.entries = "No entries yet.";
				return;
			} 

			for (var key of receivedData.entries) {
				if (key.img === '') {
					key.img = 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/9/26/1348685374708/Southern-Ocean-011.jpg';
				}

				key.challengeID = $stateParams.challengeID;
			}

			// initialize newest entries
			newestEntries = receivedData.entries;

			// initialize newest entries
			// sort DESC 
			trendigEntries = newestEntries;

			// config for entrytypes
			$scope.entryTypes = [{
				type: 'newest',
				entries: newestEntries,
				orderBy: '-id'
			}, {
				type: 'best',
				entries: trendigEntries,
				orderBy: '-likes'
			}];
		});

		$scope.thisChallengeID = $stateParams.challengeID;

		/** 
		 * define scope upload()
		 *
		 * @scope upload
		 */
		$scope.upload = function() {
			entryService.upload();
		};

		/**
		 * changes scope isUploadShown
		 */
		$scope.toggleUploadBox = function() {
			$scope.isUploadShown = !$scope.isUploadShown;
		};

		/**
		 * moves the slider to the left
		 *
		 * @param obj {Object}
		 */
		$scope.moveLeft = function(obj) {
			var selector,
				index = $scope.entryTypes.indexOf(obj);
			
			selector = $('.main-challenge-container .entry-container:eq(' + index + ')').find('.row');

			if (selector.position().left <= 0) {
				selector.css({
					left: 0
				});			
			} else {
				selector.css({
					left: selector.position().left + ( selector.width() / 2 )
				});
			}
		};

		/**
		 * moves the slider to the right
		 *
		 * @param obj {Object}
		 */
		$scope.moveRight = function(obj) {
			var index = $scope.entryTypes.indexOf(obj);
			var selector = $('.main-challenge-container .entry-container:eq(' + index + ')').find('.row');
			var lastEntry = $('.main-challenge-container .entry-container:eq(' + index + ')').find('.entry:last');
			var lastEntryRight = lastEntry.offset().left + lastEntry.width();

			if (lastEntryRight >= selector.width()) {
				selector.css({
					left: selector.position().left - ( selector.width() / 2 )
				});	
			}
			
		};

		/**
		 * change entryID
		 */
		$scope.entryID = $stateParams.challengeID;

		/**
		 * url
		 */
		$scope.url = $stateParams.challengeType + '/' +  $stateParams.challengeID;
		
		/**
		 * popupEntry
		 */
		$scope.openEntryPopup = function(entryID) {
			var url = $stateParams.challengeType + '/' + $stateParams.challengeID + '/' + entryID;
			entryService.getEntry(url)
				.then(function(data) {
					var entry = data.data;
					$scope.showEntryPopup = true;

					console.log(data);
					// entry.img = 'tmp/assets/img/';
					

					$scope.poppedupEntry = entry;
				});
		};
 
		/**
		 *
		 */
		$scope.closePopupEntry = function() {
			$scope.showEntryPopup = false;
		};
	}]);