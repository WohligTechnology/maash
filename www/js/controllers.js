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
    // $scope.groups = [];
    // for (var i = 0; i < 4; i++) {
    //   $scope.groups[i] = {
    //     name: i,
    //     items: []
    //   };
    //   for (var j = 0; j < 3; j++) {
    //     $scope.groups[i].items.push(i + '-' + j);
    //   }
    // }
    // $scope.toggleGroup = function(group) {
    //   if ($scope.isGroupShown(group)) {
    //     $scope.shownGroup = null;
    //   } else {
    //     $scope.shownGroup = group;
    //   }
    // };
    // $scope.isGroupShown = function(group) {
    //   return $scope.shownGroup === group;
    // };
    $scope.showAccordion = false;
    $scope.accordionOne = function() {
      $scope.showAccordionsec = false;
      $scope.showAccordionthr = false;
      $scope.showAccordionfor = false;
      if($scope.showAccordion == true) {
        $scope.showAccordion = false;
        $scope.showAccordionsec = false;
        $scope.showAccordionthr = false;
        $scope.showAccordionfor = false;
      }else {
          $scope.showAccordion = true;
      }
    };
    $scope.showAccordionsec = false;
    $scope.accordionTwo = function() {
      $scope.showAccordion = false;
      $scope.showAccordionthr = false;
      $scope.showAccordionfor = false;
      if($scope.showAccordionsec == true) {
        $scope.showAccordionsec = false;
        $scope.showAccordionfor = false;
      }else {
          $scope.showAccordionsec = true;
      }
    };
    $scope.showAccordionthr = false;
    $scope.accordionThree = function() {
      $scope.showAccordion = false;
      $scope.showAccordionsec = false;
      $scope.showAccordionfor = false;
      if($scope.showAccordionthr == true) {
        $scope.showAccordionthr = false;
      }else {
          $scope.showAccordionthr = true;
      }
    };
    $scope.showAccordionfor = false;
    $scope.accordionFour = function() {
      $scope.showAccordion = false;
      $scope.showAccordionsec = false;
      $scope.showAccordionthr = false;
      if($scope.showAccordionfor == true) {
        $scope.showAccordionfor = false;
      }else {
          $scope.showAccordionfor = true;
      }
    };

  })
  .controller('DirectionCtrl', function($scope, $stateParams) {

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
