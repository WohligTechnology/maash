angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, $ionicScrollDelegate, $ionicSideMenuDelegate) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.getCross = "";
    $scope.whenClose = function() {
        console.log("clickabe");
        if ($scope.getCross == "") {
            $scope.getCross = "m-cross";
        } else {
            $scope.getCross = "";
        }
    };
    $scope.closeAll = function(val) {
        $state.go(val);
        if ($ionicSideMenuDelegate.isOpenLeft()) {
            $ionicSideMenuDelegate.toggleLeft();
            // $scope.whenClose();
        }
        if ($ionicSideMenuDelegate.isOpenRight()) {
            $ionicSideMenuDelegate.toggleRight();
            $scope.whenClose();
        }
    };




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
    // scroll class
    // $(document).ready(function() {
    //   $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    //     if (scroll >= 40) {
    //       $(".bar-light").addClass("darkHeader");
    //     } else {
    //       $(".bar-light").removeClass("darkHeader");
    //     }
    //   });
    // });


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
    $scope.showSignUp = false;
    if ($.jStorage.get("user") || _.isEmpty($.jStorage.get("user"))) {
        $scope.showSignUp = true;
    } else {
        $scope.showSignUp = false;
    }
})

.controller('ProfileCtrl', function($scope, $stateParams) {

})

.controller('BeverageCtrl', function($scope, $stateParams) {

})

.controller('PartyCtrl', function($scope, $stateParams) {

})

.controller('PartyFormCtrl', function($scope, $stateParams) {

})

.controller('CartCtrl', function($scope, $stateParams) {

})

.controller('SCricketCtrl', function($scope, $stateParams) {
 $scope.items = [{
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'timing and pricing',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'technology',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'promotions',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  },{
      title: 'photos',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }
  ];
  $scope.toggleItem= function(item) {
     if ($scope.isItemShown(item)) {
       $scope.shownItem = null;
     } else {
       $scope.shownItem = item;
     }
   };
   $scope.isItemShown = function(item) {
     return $scope.shownItem === item;
   };
})

.controller('CricketCtrl', function($scope, $stateParams) {
//   $scope.groups = [];
// for (var i=0; i<10; i++) {
//   $scope.groups[i] = {
//     name: i,
//     items: []
//   };
//   for (var j=0; j<3; j++) {
//     $scope.groups[i].items.push(i + '-' + j);
//   }
// }

/*
 * if given group is the selected group, deselect it
 * else, select the given group
 */
 $scope.items = [{
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'timing and pricing',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'technology',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'game description',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
    },{
      title: 'promotions',
      text: 'take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...take guard against the greatest...'
  }];
  $scope.toggleItem= function(item) {
     if ($scope.isItemShown(item)) {
       $scope.shownItem = null;
     } else {
       $scope.shownItem = item;
     }
   };
   $scope.isItemShown = function(item) {
     return $scope.shownItem === item;
   };

})


.controller('SelectCityCtrl', function($scope, $stateParams, MyServices, $state) {

    MyServices.getCity(function(data) {
        $scope.getCity = _.chunk(data.data, 2);
        console.log('$scope.getCity', $scope.getCity);
    })
    $scope.selectCity = function(city) {
        $.jStorage.set("mycity", city);
        $state.go("noheader.signup");
    }

    // $scope.getCityName=function(cityName){
    //   $.jStorage.set("city",cityName);
    //   $scope.city=$.jStorage.get("city").name;
    // console.log("  $scope.city",  $scope.city);
    // }
})

.controller('SelectAvatarCtrl', function($scope, $stateParams) {

})

.controller('BuyCtrl', function($scope, $stateParams) {

})

.controller('AttractionsCtrl', function($scope, $stateParams, $ionicPopup) {
  $scope.getPlan = function() {
      $scope.checkPlan = $ionicPopup.show({
          templateUrl: 'templates/modal/choose.html',
          scope: $scope
      });
  };
  $scope.closePopup = function() {
      $scope.checkPlan.close();
  }

})

.controller('EventCtrl', function($scope, $stateParams) {

})

.controller('ExploreSmaaashCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, MyServices) {

        $scope.nextSlide = function(val) {
            console.log($ionicSlideBoxDelegate.$getByHandle(val).slidesCount());
            console.log($ionicSlideBoxDelegate.$getByHandle(val).currentIndex());
            if ($ionicSlideBoxDelegate.$getByHandle(val).slidesCount() - 2 <= $ionicSlideBoxDelegate.$getByHandle(val).currentIndex()) {
                $ionicSlideBoxDelegate.$getByHandle(val).slide(0);
            } else {
                $ionicSlideBoxDelegate.$getByHandle(val).next();
            }
        };
        $scope.options = {
            loop: true
        };
        $scope.disableSwipe = function() {
            $ionicSlideBoxDelegate.enableSlide(false);
        };
        $scope.smaaashAttract = [];
        $scope.smaaashNew = [];

        $scope.smaaashParty = [];

        MyServices.getHomeContent(function(data) {
            if (data.value) {
                $scope.homeContent = data.data;
                $scope.content = _.groupBy($scope.homeContent, "type");

                $scope.smaaashAttract = $scope.content.Attraction;

                $scope.smaaashNew = $scope.content["What's new"];
                console.log(JSON.stringify($scope.content["What's new"]));

                $scope.smaaashParty = $scope.content["Host a Party"];
                console.log("$scope.smaaashParty", $scope.smaaashParty);
                console.log("$scope.smaaashNew ", $scope.smaaashNew);
                console.log("$scope.smaaashAttract", $scope.smaaashAttract);
            }

        });

        // $scope.smaaashNew = [
        //   'img/new.png',
        //   'img/new.png',
        //   'img/new.png',
        //   'img/new.png',
        //   'img/new.png'
        // ];
        // $scope.smaaashAttract = [
        //   'img/attract.png',
        //   'img/attract.png',
        //   'img/attract.png',
        //   'img/attract.png',
        //   'img/attract.png'
        // ];
        // $scope.smaaashParty = [
        //   'img/party.png',
        //   'img/party.png',
        //   'img/party.png',
        //   'img/party.png',
        //   'img/party.png'
        // ];

    })
    .controller('PaymentCtrl', function($scope, $stateParams) {
        $scope.accordion = function(val) {
            console.log($scope.showAccordion);
            console.log(val);
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
            console.log($scope.showAccordion);
            console.log(val);
        }

    })
    .controller('DirectionCtrl', function($scope, $stateParams) {

    })

    .controller('OrderCtrl', function($scope, $stateParams) {

    })

    .controller('DealsCtrl', function($scope, $stateParams) {

    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    })

    .controller('AccountCtrl', function($scope, $stateParams, $ionicPopup) {
        $scope.getPlan = function() {
            $scope.checkPlan = $ionicPopup.show({
                templateUrl: 'templates/modal/headline.html',
                scope: $scope
            });
        };
        $scope.closePopup = function() {
            $scope.checkPlan.close();
        }
    })
    .controller('ConfirmOrderCtrl', function($scope, $stateParams) {

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

.controller('SignupCtrl', function($scope, $stateParams, $ionicPopup, $state, MyServices) {
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

    $scope.userForm = {};
    console.log("$scope.userForm", $scope.userForm);
    // $scope.userSignup =function(formValid){
    //   if (formValid.$valid) {
    //     MyServices.
    //   }
    //
    // }
    $scope.userSignup = function(input) {
        console.log("userSignup");
        MyServices.signUp(input, function(data) {
            console.log(data);
            if (data.value) {

            } else {

            }
            // if()
            //
            // }else {
            //
            // }
        })
    }
})

.controller('NoHeaderCtrl', function($scope, $stateParams,MyServices) {
  MyServices.getCity(function(data) {
      $scope.getCity = _.chunk(data.data, 2);
      console.log('$scope.getCity', $scope.getCity);
  })
  $scope.selectCity = function(city) {
      $.jStorage.set("mycity", city);
      $state.go("noheader.signup");
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});
