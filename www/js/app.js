// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('noheader', {
      url: '/no-header',
      abstract: true,
      templateUrl: 'templates/no-header.html',
      controller: 'NoHeaderCtrl'
    })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.cricket', {
      url: '/cricket/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/cricket.html',
          controller: 'CricketCtrl'
        }
      }
    })

   .state('app.contact', {
      url: '/contact-us',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactCtrl'
        }
      }
    })

       .state('app.beverage', {
      url: '/beverage',
      views: {
        'menuContent': {
          templateUrl: 'templates/beverage.html',
          controller: 'BeverageCtrl'
        }
      }
    })

          .state('app.party', {
      url: '/party/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/party.html',
          controller: 'PartyCtrl'
        }
      }
    })

    .state('app.partyform', {
      url: '/partyform',
      views: {
        'menuContent': {
          templateUrl: 'templates/partyform.html',
          controller: 'PartyFormCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.buy', {
      url: '/buy',
      views: {
        'menuContent': {
          templateUrl: 'templates/buy.html',
          controller: 'BuyCtrl'
        }
      }
    })
    .state('app.event', {
      url: '/event',
      views: {
        'menuContent': {
          templateUrl: 'templates/event.html',
          controller: 'EventCtrl'
        }
      }
    })

       .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })


    .state('app.attraction', {
      url: '/attractions/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/attractions.html',
          controller: 'AttractionsCtrl'
        }
      }
    })

  .state('app.whatsnew', {
      url: '/whats-new/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/whats-new.html',
          controller: 'NewCtrl'
        }
      }
    })

    .state('app.exploresmaash', {
      url: '/exploresmaash',
      views: {
        'menuContent': {
          templateUrl: 'templates/exploresmaash.html',
          controller: 'ExploreSmaaashCtrl'
        }
      }
    })
    .state('app.direction', {
      url: '/direction',
      views: {
        'menuContent': {
          templateUrl: 'templates/direction.html',
          controller: 'DirectionCtrl'
        }
      }
    })
    .state('app.order', {
      url: '/order',
      views: {
        'menuContent': {
          templateUrl: 'templates/order.html',
          controller: 'OrderCtrl'
        }
      }
    })

    .state('app.deals', {
      url: '/deals',
      views: {
        'menuContent': {
          templateUrl: 'templates/deals.html',
          controller: 'DealsCtrl'
        }
      }
    })

     .state('app.game', {
      url: '/game',
      views: {
        'menuContent': {
          templateUrl: 'templates/game.html',
          controller: 'GpurchaseCtrl'
        }
      }
    })

         .state('app.merchandise', {
      url: '/merchandise',
      views: {
        'menuContent': {
          templateUrl: 'templates/merchandise.html',
          controller: 'MerchandiseCtrl'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })

    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
          controller: 'CartCtrl'
        }
      }
    })

      .state('app.earn', {
      url: '/earn',
      views: {
        'menuContent': {
          templateUrl: 'templates/earn.html',
          controller: 'EarnCtrl'
        }
      }
    })


    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })


    .state('app.confirmorder', {
      url: '/confirmorder',
      views: {
        'menuContent': {
          templateUrl: 'templates/confirmorder.html',
          controller: 'ConfirmOrderCtrl'
        }
      }
    })
    .state('app.payment', {
      url: '/payment',
      views: {
        'menuContent': {
          templateUrl: 'templates/payment.html',
          controller: 'PaymentCtrl'
        }
      }
    })
    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('app.offers', {
      url: '/offers',
      views: {
        'menuContent': {
          templateUrl: 'templates/offers.html',
          controller: 'OffersCtrl'
        }
      }
    })

     .state('app.tournaments', {
      url: '/tournaments',
      views: {
        'menuContent': {
          templateUrl: 'templates/tournament.html',
          controller: 'TournamentCtrl'
        }
      }
    })

       .state('app.challenges', {
      url: '/challenges',
      views: {
        'menuContent': {
          templateUrl: 'templates/challenges.html',
          controller: 'ChallengesCtrl'
        }
      }
    })



    .state('app.wishlist', {
      url: '/wishlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/wishlist.html',
          controller: 'WishlistCtrl'
        }
      }
    })

    .state('app.recharge', {
      url: '/recharge',
      views: {
        'menuContent': {
          templateUrl: 'templates/recharge.html',
          controller: 'RechargeCtrl'
        }
      }
    })
    .state('noheader.selectcity', {
      url: '/select-city',
      views: {
        'content': {
          templateUrl: 'templates/select-city.html',
          controller: 'SelectCityCtrl'
          }
        }
    })
    .state('noheader.signup', {
      url: '/signup',
      views: {
        'content': {
          templateUrl: 'templates/signup.html',
          controller: 'SignupCtrl'
        }
      }
    })

      .state('noheader.landing', {
      url: '/landing',
      views: {
        'content': {
          templateUrl: 'templates/landing.html',
          controller: 'LandingCtrl'
        }
      }
    })

         .state('noheader.login', {
      url: '/login',
      views: {
        'content': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

        .state('noheader.bonus', {
      url: '/bonus',
      views: {
        'content': {
          templateUrl: 'templates/bonus.html',
          controller: 'BonusCtrl'
        }
      }
    })
    // .state('noheader.signup', {
    //   url: '/signup',
    //   views: {
    //     'content': {
    //       templateUrl: 'templates/signup.html',
    //       controller: 'SignupCtrl'
    //     }
    //   }
    // })
    .state('noheader.avatar', {
      url: '/avatar',
      views: {
        'content': {
          templateUrl: 'templates/avatar.html',
          controller: 'SelectAvatarCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/no-header/select-city');
})

.directive('scrollDetector', function($window) {
  return {
    restrict : 'A',

    link: function(scope, element, attrs) {
      element.on('scroll', function() {
        console.log('Scrolled');
        console.log(element.prop( 'offsetTop' ));
      });
    }
  };
})




.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;

            } else {
                return input;
            }
        }
    };
})
.filter('htmlToPlaintext', function () {
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
})
.filter('youtubethumb', function () {
    return function (input, onlyid) {
        if (input) {
            return "http://img.youtube.com/vi/" + input + "/hqdefault.jpg";
        }
    };
})
.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});
