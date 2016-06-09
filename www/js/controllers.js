angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $ionicScrollDelegate.scrollTop();
  });


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [{
    title: 'Reggae',
    id: 1
  }, {
    title: 'Chill',
    id: 2
  }, {
    title: 'Dubstep',
    id: 3
  }, {
    title: 'Indie',
    id: 4
  }, {
    title: 'Rap',
    id: 5
  }, {
    title: 'Cowbell',
    id: 6
  }];
})

.controller('HomeCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate) {
  $scope.homeslider = [
    'img/banners/banner.jpg',
    'img/banners/banner.jpg',
    'img/banners/banner.jpg',
    'img/banners/banner.jpg'
  ];
})

.controller('SelectCityCtrl', function($scope, $stateParams) {

  })
  .controller('SelectAvatarCtrl', function($scope, $stateParams) {

  })
  .controller('BuyCtrl', function($scope, $stateParams) {

  })
  .controller('EventCtrl', function($scope, $stateParams) {

  })
  .controller('PaymentCtrl', function($scope, $stateParams) {
    $scope.accordion = function(val) {
        if (val == $scope.showAccordion) {
          $scope.showAccordion = 0;
        } else {
          if (val == 1) {
            $scope.showAccordion = 1;
          } else if (val == 2) {
            $scope.showAccordion = 2;
          } else if (val == 3) {
            $scope.showAccordion = 3;
          } else if (val == 4) {
            $scope.showAccordion = 4;
          } else if (val == 5) {
            $scope.showAccordion = 5;
          } else {
            $scope.showAccordion = 0;
          }
        }
      }

  })
  .controller('DirectionCtrl', function($scope, $stateParams) {

  })
  .controller('AccountCtrl', function($scope, $stateParams) {

  })
  .controller('RechargeCtrl', function($scope, $stateParams, $ionicPopup) {
    $scope.popHeadline = function() {
      $scope.headlienPop = $ionicPopup.show({
        templateUrl: 'templates/modal/headline.html',
        scope: $scope
      });
    }
    $scope.closePopup = function() {
      $scope.headlienPop.close();
    }
  })

.controller('SignupCtrl', function($scope, $stateParams, $ionicPopup, $state) {
    var ionicpop = "";
    $scope.oneTimepswd = function() {
      ionicpop = $ionicPopup.show({
        templateUrl: 'templates/modal/otp.html',
        scope: $scope
      });
    }
    $scope.toAvatar = function() {
      ionicpop.close();
      $state.go("noheader.avatar")
    };

  })
  .controller('NoHeaderCtrl', function($scope, $stateParams) {

  })

.controller('PlaylistCtrl', function($scope, $stateParams) {});
