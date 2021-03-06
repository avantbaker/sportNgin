var sportNgin = angular.module("sportNgin", ["ngResource", "ui.router", "ngAnimate", "ngCookies"]);

sportNgin.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	'$httpProvider',
	function ( $stateProvider, $urlRouterProvider, $httpProvider ) {
		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('info', {
				url: '/home',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-yourInfo.html'
			})
			
			.state('templateSelect', {
				url: '/template',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-selectTemplate.html'
			})
			
			.state('tournamentInfo', {
				url: '/tournamentInfo',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentInfo.html'
			})
			
			.state('tournamentDescription', {
				url: '/tournamentDescription',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentDes.html'
			})

			.state('tournamentContact', {
				url: '/tournamentContact',
				controller: 'homeCntrl',
				templateUrl: 'steps/home-tournamentContact.html'
			});

			

		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}	
]);

sportNgin.service('sportNginModel', 
	function(){

	var service = this;

	formFields = { 	
					firstName 			: "",
					lastName 			: "",
					tournamentName 		: "",
				 	city				: "",
				 	state				: "",
				 	startDate			: new Date(2016, 4, 15),
				 	endDate				: new Date(2016, 4, 18),
				 	description 		: "",
				 	numOfTeams  		: "",
				 	gameMin				: "",
				 	registerBy			: new Date(2016, 0, 6),
				 	entryFee 			: "",
				 	tphone 				: "",
				 	dirFirstName 		: "",
				 	dirLastName 		: "",
				 	tEmail 				: "",
				 	twebsiteName		: "",
				 	personalEmail       : "",
				 	personalPhone       : "",
				 	hostOrg   			: "",
				 	excludeFee  		: false,
				 	excludeDeadline 	: false,
				 	excludeGames  		: false,
				 	excludeFirst 		: false,
				 	excludeLast 		: false,
				 	excludeEmail 		: false,
				 	excludePhone 		: false,
				 	excludeWebsite 		: false,
				 	excludeNumOfTeams 	: false,
				 	template 			: "one",
				 	orgType				: "",
				 	role				: ""
			   };

	service.getFormFields = function () {
		return formFields;
	};

});

sportNgin.factory('formStack', [
	'$rootScope', 
	'$http', 
	'$log', 
	'$cookies',
	function($rootScope, $http, $log, $cookies){

	var service = this;
	
	service.data = {
		first_name: '',
		last_name: '',
		personal_phone: '',
		personal_email: '',
		host_organization: '',
		organization_type: '',
		organization_role: '',
		tournament_name: '',
		tournament_description: '',
		register_date: '',
		city: '',
		state: '',
		start_time: '',
		end_time: '',
		number_of_teams: '',
		game_minimum: '',
		entry_fee: '',
		director_first_name: '',
		director_last_name: '',
		tournament_email: '',
		tournament_phone_number: '',
		tournament_website_name: ''
	};
	
	/**
	 * Push to Form formStack
	 * sends http request to formstack PHP Api to be processed
	 * @param  {object} service.Data is the user filled data from the form
	 * @return form submission
	 */
	service.pushToFormStack = function() {
        
        $http.post('formstack/fs-sportNgin.php', service.data)
	        .success(function(data, status, headers, config)
	        {
	            $log.log(status);
	            $log.log(headers);
	            $log.log(data);
	        })
	        .error(function(data, status, headers, config)
	        {
	            $log.log('error');
	        });
        
    };

    service.populateFormStack = function(formdata) {
    	service.data.first_name = formdata.firstName;
		service.data.last_name = formdata.lastName;
		service.data.tournament_name = formdata.tournamentName;
	 	service.data.city = formdata.city;
	 	service.data.state = formdata.state;
	 	service.data.start_time = formdata.startDate;
	 	service.data.end_time = formdata.endDate;
	 	service.data.tournament_description = formdata.description;
	 	service.data.number_of_teams = formdata.numOfTeams;
	 	service.data.game_minimum = formdata.gameMin;
	 	service.data.register_date = formdata.registerBy;
	 	service.data.entry_fee = formdata.entryFee;
	 	service.data.tournament_phone_number = formdata.tphone;
	 	service.data.director_first_name = formdata.dirFirstName;
	 	service.data.director_last_name = formdata.dirLastName;
	 	service.data.tournament_email = formdata.tEmail;
	 	service.data.tournament_website_name = formdata.twebsiteName;
	 	service.data.personal_email = formdata.personalEmail;
	 	service.data.personal_phone = formdata.personalPhone;
	 	service.data.host_organization = formdata.hostOrg;
	 	service.data.organization_type = formdata.orgType;
	 	service.data.organization_role = formdata.role;				
    };

    service.logData = function(){
    	$log.log(service.data);
    };

    return service;
}]);

sportNgin.factory('html2pdf', [
	'$rootScope', 
	'$http', 
	'$log', 
	'$cookies',
	function($rootScope, $http, $log, $cookies){

	var service = this;
	
	var templates = {
		template1		: ['pdf_templates/poster-letter.php', 'pdf_templates/poster-tabloid.php'],
		template2		: ['pdf_templates/poster-letter2.php', 'pdf_templates/poster-tabloid2.php']
	};

	/**
	 * PDF conversion
	 * sends http request to selected PHP files to be converted
	 * @param  {object} formData is the user filled data from the form
	 * @return {PDF}          [description]
	 */
	service.convert = function(formData) {
        var data = formData;

        var templateArr = selectTemplateArr( data, templates );
        
        for ( var i = 0; i < templateArr.length; i++ ) {
        	$http.post( templateArr[i], data )
	        .success(function(data, status, headers, config)
	        {
	            $log.log(status);
	            $log.log(headers);
	            $log.log(data);
	        })
	        .error(function(data, status, headers, config)
	        {
	            $log.log('error');
	        });
        }
        
    }

    /**
     * Template Array Selection Helper Function
     * Selects the template array based on user input.
     * @param  {object} formData    user submitted data
     * @param  {object} templateObj object contaning two arrays. One for each specified Template 
     * @return {array}              The Arrays contain the links for the pdf processng files
     *                              that will be placed into the $http request
     */
    function selectTemplateArr (formData, templateObj) {
		var template = formData.template;
		
		if (template === "one" && template !== '') {
			return templateObj.template1;
		} else {
			return templateObj.template2;
		}
	}

    return service;
}]);

sportNgin.factory('SNjquery', function(){
	var snJquery = this;

	snJquery.init = function(){
		angular.element(document).ready(function () {
			
			// Slide in toggle nav on scroll (mobile-only)
			$(window).scroll(function () {
				if ($(this).scrollTop() > 250) {
					$( ".poster-preview-toggle" ).addClass("viewable");
				} else {
					$( ".poster-preview-toggle" ).removeClass("viewable");
				}
			});
			
			var windowWidth = $(window).width();
			if(windowWidth < 900){
				// setTimeout(function(){
					$( ".poster-canvas" ).appendTo(".approval-inner");
				// }, 3600);
			}
			
			$(window).resize(function(){
		    	var windowWidth = $(window).width();
				if(windowWidth < 900){
					$( ".poster-canvas" ).appendTo(".approval-inner");
				}
			});

			var windowWidth = $(window).width();
			if(windowWidth > 900){
				$( '#approval-close' ).on('click', function(e) {
				    e.preventDefault();
				    var x = $('body').css('top');
				    var y = x.replace(/-/gi, '');
				    var pagePos = y.replace(/px/gi, '');
				    $( "body, html" ).removeClass("no-scroll");
				    $( "body" ).removeClass("approval-state");
				    $( ".poster-canvas").css("width", ""); 
				    $(window).scrollTop(pagePos);
				});
			} else {
				$( '#approval-close' ).on('click', function(e) {
				    e.preventDefault();
				    var x = $('body').css('top');
				    var y = x.replace(/-/gi, '');
				    var pagePos = y.replace(/px/gi, '');
				    $( "body, html" ).removeClass("no-scroll");
				    $(window).scrollTop(pagePos);
				    $( "body" ).removeClass("approval-state");
				     setTimeout(function(){
					   $( ".poster-preview-toggle" ).removeClass("stuck");
				    }, 100);
				});	
			}
			
			//Highlight poster element on associated input hover
			var allElements = $('.template-wrapper');
			var tourneyName = $('#tournament-name');
			var tourneyHost = $('#host_organization');
			var tourneyCity = $('#tournament_city');
			var tourneyState = $('#tournament_state');
			var tourneyStart = $('#start_date');
			var tourneyEnd = $('#end_date');
			var tourneyDescription = $('#tournament_description');
			var tourneyTeams = $('#team_number');
			var tourneyGames = $('#minimum_games');
			var tourneyFee = $('#entry_fee');
			var tourneyDeadline = $('#entry_deadline');
			var tourneyDirectorFirst = $('#director_first');
			var tourneyDirectorLast = $('#director_last');
			var tourneyEmail = $('#tournament_email');
			var tourneyPhone = $('#tournament_phone');
			var tourneyWebsite = $('#tournament_website');
						
			tourneyName.hover(function() {
				$( '.poster-canvas .tournament-name span' ).toggleClass("highlight");
			});
			
			tourneyHost.hover(function() {
				$( '.poster-canvas .host-name span' ).toggleClass("highlight");
			});
			
			tourneyCity.hover(function() {
				$( '.poster-canvas .tournament-city' ).toggleClass("highlight");
			});
			
			tourneyState.hover(function() {
				$( '.poster-canvas .tournament-state' ).toggleClass("highlight");
			});
			
			tourneyStart.hover(function() {
				$( '.poster-canvas .start-date' ).toggleClass("highlight");
			});
			
			tourneyEnd.hover(function() {
				$( '.poster-canvas .end-date' ).toggleClass("highlight");
			});
			
			tourneyDescription.hover(function() {
				$( '.poster-canvas .tournament-description' ).toggleClass("highlight");
			});
			
			tourneyTeams.hover(function() {
				$( '.poster-canvas .tournament-teams' ).toggleClass("highlight");
			});
			
			tourneyGames.hover(function() {
				$( '.poster-canvas .tournament-minimum-games' ).toggleClass("highlight");
			});
			
			tourneyFee.hover(function() {
				$( '.poster-canvas .tournament-fee' ).toggleClass("highlight");
			});
			
			tourneyDeadline.hover(function() {
				$( '.poster-canvas .tournament-deadline' ).toggleClass("highlight");
			});
			
			tourneyDirectorFirst.hover(function() {
				$( '.poster-canvas .director-first' ).toggleClass("highlight");
			});
			
			tourneyDirectorLast.hover(function() {
				$( '.poster-canvas .director-last' ).toggleClass("highlight");
			});
			
			tourneyEmail.hover(function() {
				$( '.poster-canvas .director-email' ).toggleClass("highlight");
			});
			
			tourneyPhone.hover(function() {
				$( '.poster-canvas .director-phone' ).toggleClass("highlight");
			});
			
			tourneyWebsite.hover(function() {
				$( '.poster-canvas .tournament-website' ).toggleClass("highlight");
				
			});


		});
	};

	snJquery.launchModal = function(){
					
			var windowWidth = $(window).width();
			
		    if( windowWidth > 900) {
			    var offsetY = window.pageYOffset
			    var posterWidth = $( '.poster-canvas' ).outerWidth();
				$( "body" ).css({'top': -offsetY + 'px'});
			    $( "body, html" ).addClass("no-scroll");
			    $( ".poster-canvas").css('width', posterWidth + "px");
			    setTimeout(function(){
				   $( "body" ).addClass("approval-state"); 
			    }, 100);
			    setTimeout(function(){
				   var posterHeight = $( '.poster-canvas' ).outerHeight();
				   $( ".approval-inner").css('min-height', posterHeight + "px");
				}, 400);
			} else {
				var offsetY = window.pageYOffset
			    $( ".poster-preview-toggle" ).addClass("stuck");
			    $( "body" ).css({'top': -offsetY + 'px'});
			    $( "body, html" ).addClass("no-scroll");
			    setTimeout(function(){
				   $( "body" ).addClass("approval-state"); 
			    }, 100);
			}

	}

	return snJquery;
});

sportNgin.factory('changeTemplate', [
	'$rootScope',
	'$log',
	'SNjquery', 
	function($rootScope, $log, SNjquery){

	var service = this;
	
	/**
	 * Objective of this service is to share the template variables between the
	 * pdf controller and the home controller. It should live update the variable in both controllers.
	 * essentially when a template is selected it changes the value of that template variable to true.
	 * 
	 * @return
	 */
	service.props = {
		template1			: true,
		template2			: false,
		activeTemplate		: 'one',
		excludeFee  		: false,
	 	excludeDeadline 	: false,
	 	excludeGames  		: false,
	 	excludeFirst 		: false,
	 	excludeLast 		: false,
	 	excludeEmail 		: false,
	 	excludePhone 		: false,
	 	excludeWebsite 		: false,
	 	excludeNumOfTeams 	: false
	};

	service.prepForBroadcast = function() {
		if( service.props.template1 === true) {
			service.props.template1 = true;
			service.props.template2 = false;
			service.props.activeTemplate = 'one';
			service.changeTemplate();
		} else if (service.props.template1 === false ) {
			service.props.template1 = true;
			service.props.template2 = false;
			service.props.activeTemplate = 'one';
			service.changeTemplate();
		}
	};

	service.prepForBroadcast2 = function() {
		if( service.props.template2 === true) {
			service.props.template1 = false;
			service.props.template2 = true;
			service.props.activeTemplate = 'two';
			service.changeTemplate();
		} else if ( service.props.template2 === false ) {
			service.props.template1 = false;
			service.props.template2 = true;
			service.props.activeTemplate = 'two';
			service.changeTemplate();
		}
	};

	service.prepForBroadcast_FeeDisplay = function() {
		if( service.props.excludeFee === false) {
			service.props.excludeFee = true;
			service.toggle_include();
		} else {
			service.props.excludeFee = false;
			service.toggle_include();
		}
	};


	service.prepForBroadcast_DeadlineDisplay = function() {
		if( service.props.excludeDeadline === false) {
			service.props.excludeDeadline = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeDeadline = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_GamesDisplay = function() {
		if( service.props.excludeGames === false) {
			service.props.excludeGames = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeGames = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_FirstNameDisplay = function() {
		if( service.props.excludeFirst === false) {
			service.props.excludeFirst = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeFirst = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_LastNameDisplay = function() {
		if( service.props.excludeLast === false) {
			service.props.excludeLast = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeLast = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_EmailDisplay = function() {
		if( service.props.excludeEmail === false) {
			service.props.excludeEmail = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeEmail = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_PhoneDisplay = function() {
		if( service.props.excludePhone === false) {
			service.props.excludePhone = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludePhone = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_SiteDisplay = function() {
		if( service.props.excludeWebsite === false) {
			service.props.excludeWebsite = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeWebsite = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.prepForBroadcast_NumberOfTeamsDisplay = function() {
		if( service.props.excludeNumOfTeams === false) {
			service.props.excludeNumOfTeams = true;
			$rootScope.$broadcast('toggleInclude');
		} else {
			service.props.excludeNumOfTeams = false;
			$rootScope.$broadcast('toggleInclude');
		}
	};

	service.changeTemplate = function() {
		$rootScope.$broadcast('templateChange');
	};

	service.toggle_include = function() {
		$rootScope.$broadcast('toggleInclude');
	};

    return service;
}]);

sportNgin.controller('pdfCntrl', [ 
	"$scope", 
	"$log", 
	"$rootScope", 
	"sportNginModel", 
	"html2pdf",
	"$stateParams",
	"$state",
	"$timeout",
	"SNjquery",
	"changeTemplate", 
	function($scope, $log, $rootScope, sportNginModel, html2pdf, $stateParams, $state, $timeout, SNjquery, changeTemplate){
		/**
		 * Initial values for all scope Variables
		 */
		$scope.Model = $scope.Model || sportNginModel.getFormFields();
		$scope.template1 = true;
		$scope.template2 = false;
		$scope.excludeFee = false; 		
	 	$scope.excludeDeadline = false; 	
	 	$scope.excludeGames = false; 	 		
	 	$scope.excludeFirst = false; 			
	 	$scope.excludeLast = false; 			
	 	$scope.excludeEmail = false; 			
	 	$scope.excludePhone = false; 			
	 	$scope.excludeWebsite = false;
	 	$scope.excludeNumOfTeams = false;

	 	/**
	 	 * Template Change Event Response to update Variables Cross Controller
	 	 * @return {[type]}   updates the variables on this scope based on the values of the corresponding
	 	 *                    values is the changeTemplate Service;
	 	 */
		$scope.$on('templateChange', function(){
			$scope.template1 = changeTemplate.props.template1;
			$scope.template2 = changeTemplate.props.template2;
			$scope.Model.template = changeTemplate.props.activeTemplate;
		});
		/**
	 	 * Toggle Event Response to update Variables Cross Controller
	 	 * @return {[type]}   updates the variables on this scope based on the values of the corresponding
	 	 *                    values is the changeTemplate Service;
	 	 */
		$scope.$on('toggleInclude', function(){
	    	$scope.template1 = changeTemplate.props.template1;
			$scope.template2 = changeTemplate.props.template2;
			$scope.activeTemplate = changeTemplate.props.activeTemplate;
			$scope.excludeFee = changeTemplate.props.excludeFee; 		
		 	$scope.excludeDeadline = changeTemplate.props.excludeDeadline; 	
		 	$scope.excludeGames = changeTemplate.props.excludeGames; 	 		
		 	$scope.excludeFirst = changeTemplate.props.excludeFirst; 			
		 	$scope.excludeLast = changeTemplate.props.excludeLast; 			
		 	$scope.excludeEmail = changeTemplate.props.excludeEmail; 			
		 	$scope.excludePhone = changeTemplate.props.excludePhone; 			
		 	$scope.excludeWebsite = changeTemplate.props.excludeWebsite;
		 	$scope.excludeNumOfTeams = changeTemplate.props.excludeNumOfTeams;
	    });
}]);

sportNgin.controller('homeCntrl', [ 
	"$scope", 
	"$log", 
	"$rootScope", 
	"sportNginModel", 
	"html2pdf",
	"$stateParams",
	"$state",
	"$timeout",
	"SNjquery",
	"changeTemplate",
	"$cookies",
	"formStack",  
	function($scope, $log, $rootScope, sportNginModel, html2pdf, $stateParams, $state, $timeout, SNjquery, changeTemplate, $cookies, formStack ){
	
	/**
	 * Initial values for all scope Variables
	 */
	$scope.Model = $scope.Model || sportNginModel.getFormFields();
	$scope.template1 = true;
	$scope.template2 = false;
	$scope.activeTemplate = '';
	$scope.excludeFee = false; 		
 	$scope.excludeDeadline = false; 	
 	$scope.excludeGames = false; 	 		
 	$scope.excludeFirst = false; 			
 	$scope.excludeLast = false; 			
 	$scope.excludeEmail = false; 			
 	$scope.excludePhone = false; 			
 	$scope.excludeWebsite = false; 
 	$scope.excludeNumOfTeams = false;	
 	
 	/**
 	 * Template Change Event Response to update Variables Cross Controller
 	 * @return {[type]}   updates the variables on this scope based on the values of the corresponding
 	 *                    values is the changeTemplate Service;
 	 */
	$scope.$on('templateChange', function() {
        $scope.template1 = changeTemplate.props.template1;
        $scope.template2 = changeTemplate.props.template2;
        $scope.Model.template = changeTemplate.props.activeTemplate;
    });
	
	/**
 	 * Toggle Event Response to update Variables Cross Controller
 	 * @return {[type]}   updates the variables on this scope based on the values of the corresponding
 	 *                    values is the changeTemplate Service;
 	 */
    $scope.$on('toggleInclude', function(){
    	$scope.template1 = changeTemplate.props.template1;
		$scope.template2 = changeTemplate.props.template2;
		$scope.activeTemplate = changeTemplate.props.activeTemplate;
		$scope.excludeFee = changeTemplate.props.excludeFee; 		
	 	$scope.excludeDeadline = changeTemplate.props.excludeDeadline; 	
	 	$scope.excludeGames = changeTemplate.props.excludeGames; 	 		
	 	$scope.excludeFirst = changeTemplate.props.excludeFirst; 			
	 	$scope.excludeLast = changeTemplate.props.excludeLast; 			
	 	$scope.excludeEmail = changeTemplate.props.excludeEmail; 			
	 	$scope.excludePhone = changeTemplate.props.excludePhone; 			
	 	$scope.excludeWebsite = changeTemplate.props.excludeWebsite; 
	 	$scope.excludeNumOfTeams = changeTemplate.props.excludeNumOfTeams;
	 	$scope.Model.excludeFee = changeTemplate.props.excludeFee
	 	$scope.Model.excludeDeadline = changeTemplate.props.excludeDeadline
	 	$scope.Model.excludeGames = changeTemplate.props.excludeGames
	 	$scope.Model.excludeFirst = changeTemplate.props.excludeFirst
	 	$scope.Model.excludeLast = changeTemplate.props.excludeLast
	 	$scope.Model.excludeEmail =	changeTemplate.props.excludeEmail	
	 	$scope.Model.excludePhone =	changeTemplate.props.excludePhone
	 	$scope.Model.excludeWebsite = changeTemplate.props.excludeWebsite
	 	$scope.Model.excludeNumOfTeams = changeTemplate.props.excludeNumOfTeams
    });

	/**
	 * Initalize custom SportNgin Jquery
	 */
	SNjquery.init();

	/**
	 * nextStep function
	 * 
	 * instead of sending having the state change from a ui-sref on the next step
	 * elements, i just set it in here with one function that checks the current state,
	 * and passes the chosen template as a param.
	 */

	$scope.nextStep = function(){
		var current = $state.current.name;

		if (current == 'templateSelect') {
			$state.go('tournamentInfo', {template: $scope.activeTemplate}, true);
			
			angular.element(document).find('#nav-info').addClass('previous');
			angular.element(document).find('#nav-tempSelect').addClass('previous');
			angular.element(document).find('#nav-tournInfo').addClass('active');
			
		} else if ( current == 'tournamentInfo') {
			var fieldValues = _.values($scope.updated3IF);
			if ( _.contains(fieldValues, false) ) {
				$scope.invalid3 = $scope.updated3IF;
			} else {
				$state.go('tournamentDescription', {template: $scope.activeTemplate}, true);
				angular.element(document).find('#nav-info').addClass('previous');
				angular.element(document).find('#nav-tempSelect').addClass('previous');
				angular.element(document).find('#nav-tournInfo').addClass('previous');
				angular.element(document).find('#nav-tournDes').addClass('active');
			}
		} else if ( current == 'tournamentDescription') {
			var fieldValues = _.values($scope.updated4IF);
			if ( _.contains(fieldValues, false) ) {
				$scope.invalid4 = $scope.updated4IF;
			} else {
				$state.go('tournamentContact', {template: $scope.activeTemplate}, true);
				angular.element(document).find('#nav-info').addClass('previous');
				angular.element(document).find('#nav-tempSelect').addClass('previous');
				angular.element(document).find('#nav-tournInfo').addClass('previous');
				angular.element(document).find('#nav-tournDes').addClass('previous');
				angular.element(document).find('#nav-tournCon').addClass('active');
			}
		} else if ( current == 'info') {
			var fieldValues = _.values($scope.updated1IF);
			if ( _.contains(fieldValues, false) ) {
				$scope.invalid1 = $scope.updated1IF;
			} else {
				$state.go('templateSelect', {template: $scope.activeTemplate}, true);
				angular.element(document).find('#nav-info').addClass('previous');
				angular.element(document).find('#nav-tempSelect').addClass('active');
			}
		} else if (current == 'tournamentContact') {
			var fieldValues = _.values($scope.updated5IF);
			if ( _.contains(fieldValues, false) ) {
				$scope.invalid5 = $scope.updated5IF;
			} else {
				SNjquery.launchModal();
			}
		}
	};

	$scope.navStep1 = function() {
		$state.go('info', {template: $scope.activeTemplate}, true);
		
		angular.element(document).find('.gen-pagi > a.active').removeClass('active');
		angular.element(document).find('.gen-pagi > a.previous').removeClass('previous');

		angular.element(document).find('#nav-info').addClass('active');
	};

	$scope.navStep2 = function() {
		var fieldValues = _.values($scope.updated1IF);
		if ( _.contains(fieldValues, false) ) {
			$scope.invalid1 = $scope.updated1IF;
		} else {
			$state.go('templateSelect', {template: $scope.activeTemplate}, true);
			
			angular.element(document).find('.gen-pagi > a.active').removeClass('active');
			angular.element(document).find('.gen-pagi > a.previous').removeClass('previous');

			angular.element(document).find('#nav-info').addClass('previous');
			angular.element(document).find('#nav-tempSelect').addClass('active');
		}
	};

	$scope.navStep3 = function() {
		var fieldValues = _.values($scope.updated1IF);
		if ( _.contains(fieldValues, false) ) {
			$scope.invalid1 = $scope.updated1IF;
		} else {
			$state.go('tournamentInfo', {template: $scope.activeTemplate}, true);
			
			angular.element(document).find('.gen-pagi > a.active').removeClass('active');
			angular.element(document).find('.gen-pagi > a.previous').removeClass('previous');

			angular.element(document).find('#nav-info').addClass('previous');
			angular.element(document).find('#nav-tempSelect').addClass('previous');
			angular.element(document).find('#nav-tournInfo').addClass('active');
		}
	};

	$scope.navStep4 = function() {
		var fieldValues = _.values($scope.updated3IF);
		if ( _.contains(fieldValues, false) ) {
			$scope.invalid3 = $scope.updated3IF;
		} else {
			$state.go('tournamentDescription', {template: $scope.activeTemplate}, true);
			
			angular.element(document).find('.gen-pagi > a.active').removeClass('active');
			angular.element(document).find('.gen-pagi > a.previous').removeClass('previous');

			angular.element(document).find('#nav-info').addClass('previous');
			angular.element(document).find('#nav-tempSelect').addClass('previous');
			angular.element(document).find('#nav-tournInfo').addClass('previous');
			angular.element(document).find('#nav-tournDes').addClass('active');
		}
	};

	$scope.navStep5 = function() {
		var fieldValues = _.values($scope.updated4IF);
		if ( _.contains(fieldValues, false) ) {
			$scope.invalid4 = $scope.updated4IF;
		} else {
			$state.go('tournamentContact', {template: $scope.activeTemplate}, true);
			
			angular.element(document).find('.gen-pagi > a.active').removeClass('active');
			angular.element(document).find('.gen-pagi > a.previous').removeClass('previous');

			angular.element(document).find('#nav-info').addClass('previous');
			angular.element(document).find('#nav-tempSelect').addClass('previous');
			angular.element(document).find('#nav-tournInfo').addClass('previous');
			angular.element(document).find('#nav-tournDes').addClass('previous');
			angular.element(document).find('#nav-tournCon').addClass('active');
		}
	};

	/**
	 * Template selection function
	 * 
	 * Doesnt return anything. All it does is check for the 
	 * current template variable and set the active template to the appropriate
	 * one based on the user selection. As of right now this doesnt really work.
	 * @return {none}
	 */
	$scope.activeButton = function() {
		changeTemplate.prepForBroadcast();
	}

	$scope.activeButton2 = function() {
		changeTemplate.prepForBroadcast2();
	}

	/**
	 * generatePdf function
	 *
	 * calls the convert method from the injected html to pdf service.
	 * it pretty much just sends the user data collected fromt the form
	 * and sends it to be processed and downloaded by the actual PDF templates
	 * @return {php stdClass object} the return doesnt matter as the data is only being used one way
	 */
	$scope.generatePdf = function() {
		formStack.populateFormStack($scope.Model);
		formStack.pushToFormStack();
		$scope.Model.userID = randomString( 10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		$cookies.put('userID', $scope.Model.userID );
		angular.element(document).ready(function() {
			$( ".preloader-overlay" ).fadeIn("600");
			setTimeout(function(){
			 document.location='../sportNgin/download';
			}, 600);
		});
		return html2pdf.convert($scope.Model);
	}

	$scope.test = function() {
		$log.log($scope.Model);
	}
	/**
	 * Random String Helper Function
	 * @param  {integer} length Number of Characters you want the output string to be
	 * @param  {string} chars  The string that containes the characters that the string will be generated from
	 * @return {string}        randomized mixed string to help link the pdf and user
	 */
	function randomString(length, chars) {
	    var result = '';
	    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	    return result;
	}

	/**
	 * Poster Field Toggle Functions	
	 * @return {eventBroadcast} These functions are placed on the display checkboxes next to their
	 *                          corresponding fields. When they are clicked they broadcast an event
	 *                          from the changeTemplate Service, which updates it in poth the pdf scope
	 *                          and the home scope.
	 */
	
	/**
	 * Fee Toggle
	 */
	$scope.feeToggle = function() {
		changeTemplate.prepForBroadcast_FeeDisplay();
	};
	/**
	 * Number of Games Toggle
	 */
	$scope.gamesToggle = function() {
		changeTemplate.prepForBroadcast_GamesDisplay();
	};
	/**
	 * Host First Name Toggle
	 */
	$scope.firstNameToggle = function() {
		changeTemplate.prepForBroadcast_FirstNameDisplay();
	};
	/**
	 * Host Last Name Toggle
	 */
	$scope.lastNameToggle = function() {
		changeTemplate.prepForBroadcast_LastNameDisplay();
	};
	/**
	 * Deadline Date Toggle
	 */
	$scope.deadlineToggle = function() {
		changeTemplate.prepForBroadcast_DeadlineDisplay();
	};
	/**
	 * Email Toggle
	 */
	$scope.emailToggle = function() {
		changeTemplate.prepForBroadcast_EmailDisplay();
	};
	/**
	 * Phone Toggle
	 */
	$scope.phoneToggle = function() {
		changeTemplate.prepForBroadcast_PhoneDisplay();
	};
	/**
	 * Website Toggle
	 */
	$scope.websiteToggle = function() {
		changeTemplate.prepForBroadcast_SiteDisplay();
	};
	/**
	 * Number of Teams Toggle
	 */
	$scope.numberOfTeamsToggle = function() {
		changeTemplate.prepForBroadcast_NumberOfTeamsDisplay();
	};


	/**
	 * Validation For each Individual State
	 * @param  {string} newVal is the scope variable that is referenced in the watch group ie. Model.*
	 * @return {boolean}        true or false based on the requirements set in the validation function
	 *                          for that particular step.
	 */
	

    $scope.invalid1 = {};
    $scope.invalid3 = {};
    $scope.invalid4 = {};
    $scope.invalid5 = {};
    $scope.step1Fields = [
    	'firstName', 
    	'lastName', 
    	'personalEmail', 
    	'orgType', 
    	'role'];
    $scope.step3Fields = [
    	'tournamentName', 
    	'hostOrg', 
    	'city',
    	'state', 
    	"startDate", 
    	"endDate" ];
    $scope.step4Fields =  [
    	'description', 
    	'numOfTeams', 
    	'gameMin', 
    	'entryFee', 
    	'registerBy'];
    $scope.step5Fields =  [
    	'dirFirstName', 
    	'dirLastName', 
    	'tEmail', 
    	'tphone', 
    	'twebsiteName'];
	/**
	 * Your Info State Validation Check and Corresponding Watch Group
	 */
	var validateStep1 = function (newVal) {
    	var invalidFields = [];
    	
        if (newVal.length > 0) {
            for (var i = 0, l = newVal.length; i < l; i++) {
                if (newVal[i] === undefined || newVal[i] === '') {
                	invalidFields.push($scope.step1Fields[i]);
                }
            }
            if (invalidFields.length >= 0) {
            	$scope.step1IF = invalidFields;
            	return false;
            }
            return true;
        }
        return false;
    };

    $scope.$watchGroup([
    	'Model.firstName', 
    	'Model.lastName', 
    	'Model.personalEmail', 
    	'Model.orgType', 
    	'Model.role'], function(newVal) {

    	$scope.step1Valid = validateStep1(newVal);

    	for (var key in $scope.Model) {
    		if($scope.Model.hasOwnProperty(key)){
				for (var i = 0; i < $scope.step1IF.length + 1; i++) {
    				if( key == $scope.step1IF[i]){
    					$scope.invalid1[key] = undefined;
    				} 
    			}
    		}
    	}

	    var difference = _.difference($scope.step1Fields, $scope.step1IF);

	    $scope.updated1IF = _.mapObject($scope.invalid1, function(val, key){
	    	return _.contains(difference, key);
    	});
    });


    /**
	 * Tournament Info State Validation Check and Corresponding Watch Group
	 */
    var validateStep3 = function (newVal) {
        var invalidFields = [];
    	
        if (newVal.length > 0) {
            for (var i = 0, l = newVal.length; i < l; i++) {
                if (newVal[i] === undefined || newVal[i] === '') {
                	invalidFields.push($scope.step3Fields[i]);
                }
            }
            if (invalidFields.length >= 0) {
            	$scope.step3IF = invalidFields;
            	return false;
            }
            return true;
        }
        return false;
    };

    $scope.$watchGroup([
    	'Model.tournamentName', 
    	'Model.hostOrg', 
    	'Model.city',
    	'Model.state', 
    	"Model.startDate", 
    	"Model.endDate" ], function(newVal) {
    	$scope.step3Valid = validateStep3(newVal);

    	for (var key in $scope.Model) {
    		if($scope.Model.hasOwnProperty(key)){
				for (var i = 0; i < $scope.step3IF.length + 1; i++) {
    				if( key == $scope.step3IF[i]){
    					$scope.invalid3[key] = undefined;
    				} 
    			}
    		}
    	}

	    var difference = _.difference($scope.step3Fields, $scope.step3IF);

	    $scope.updated3IF = _.mapObject($scope.invalid3, function(val, key){
	    	return _.contains(difference, key);
    	});

    	$log.log($scope.updated3IF);
    });

    /**
	 * Tournament Description State Validation Check and Corresponding Watch Group
	 */
    var validateStep4 = function (newVal) {
        var invalidFields = [];
    	
        if (newVal.length > 0) {
            for (var i = 0, l = newVal.length; i < l; i++) {
                if (newVal[i] === undefined || newVal[i] === '') {
                	invalidFields.push($scope.step4Fields[i]);
                }
            }
            if (invalidFields.length >= 0) {
            	$scope.step4IF = invalidFields;
            	return false;
            }
            return true;
        }
        return false;
    };

    $scope.$watchGroup([
    	'Model.description', 
    	'Model.numOfTeams', 
    	'Model.gameMin', 
    	'Model.entryFee', 
    	'Model.registerBy'], function(newVal) {
    	
    	$scope.step4Valid = validateStep4(newVal);

    	for (var key in $scope.Model) {
    		if($scope.Model.hasOwnProperty(key)){
				for (var i = 0; i < $scope.step4IF.length + 1; i++) {
    				if( key == $scope.step4IF[i]){
    					$scope.invalid4[key] = undefined;
    				} 
    			}
    		}
    	}

	    var difference = _.difference($scope.step4Fields, $scope.step4IF);

	    $scope.updated4IF = _.mapObject($scope.invalid4, function(val, key){
	    	return _.contains(difference, key);
    	});

    });

    /**
	 * Tournament Contact State Validation Check and Corresponding Watch Group
	 */
    var validateStep5 = function (newVal) {
        var invalidFields = [];
    	
        if (newVal.length > 0) {
            for (var i = 0, l = newVal.length; i < l; i++) {
                if (newVal[i] === undefined || newVal[i] === '') {
                	invalidFields.push($scope.step5Fields[i]);
                }
            }
            if (invalidFields.length >= 0) {
            	$scope.step5IF = invalidFields;
            	return false;
            }
            return true;
        }
        return false;
    };

    $scope.$watchGroup([
    	'Model.dirFirstName', 
    	'Model.dirLastName', 
    	'Model.tEmail', 
    	'Model.tphone', 
    	'Model.twebsiteName'], function(newVal) {
    	$scope.step5Valid = validateStep5(newVal);

    	for (var key in $scope.Model) {
    		if($scope.Model.hasOwnProperty(key)){
				for (var i = 0; i < $scope.step5IF.length + 1; i++) {
    				if( key == $scope.step5IF[i]){
    					$scope.invalid5[key] = undefined;
    				} 
    			}
    		}
    	}

	    var difference = _.difference($scope.step5Fields, $scope.step5IF);

	    $scope.updated5IF = _.mapObject($scope.invalid5, function(val, key){
	    	return _.contains(difference, key);
    	});
    	$log.log($scope.updated5IF)
    });

}]);

sportNgin.run([
	'$rootScope', 
	'$state', 
	'$stateParams',
    function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
]);


