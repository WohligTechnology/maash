 // var adminurl = "http://192.168.100.111:1337/"; //local

 var adminurl = "http://104.155.129.33:82/";  //server
 // var imgpath = adminurl + "uploadfile/getupload?file=";
 var imgurl = adminurl + "upload/";
 var imgpath = imgurl + "readFile";
 var uploadurl = imgurl;


 angular.module('starter.services', [])

 .factory('MyServices', function($http) {

   return {

     getHomeContent: function(callback) {
         var data = {
             city: $.jStorage.get("cityid")
         };
         $http({
             url: adminurl + 'exploresmash/getHomeContent',
             method: 'POST',
             withCredentials: true,
             data: data
         }).success(callback);
     },
     getCity: function(callback) {
       $http({
         url: adminurl + 'city/getAllCityByOrder',
         method: 'POST',
         withCredentials: true
       }).success(callback);
     },
     getEvents: function(callback) {
       $http({
         url: adminurl + 'exploresmash/getAllEventsForApp',
         method: 'POST',
         withCredentials: true
       }).success(callback);
     },
     getTournaments: function(callback) {
       $http({
         url: adminurl + 'exploresmash/getAllTournaments',
         method: 'POST',
         withCredentials: true
       }).success(callback);
     },
     getChallenges: function(callback) {
       $http({
         url: adminurl + 'exploresmash/getAllChallenges',
         method: 'POST',
         withCredentials: true
       }).success(callback);
     },

     signUp: function(data, callback) {
       console.log("signup",data);
       $http({
         url: adminurl + 'signup/save',
         method: 'POST',
         withCredentials: true,
         data: data
       }).success(callback);
     },
     assistanceLoginSignup: function(formdata, callback) {

         $http({
             url: adminurl + 'assistance/save',
             method: 'POST',

             data: formdata

         }).success(callback);
     },
     getSlider: function(callback) {
         var data = {
             city: $.jStorage.get("cityid")
         };
         $http({
             url: adminurl + 'slider/getAllSliderByOrder',
             method: 'POST',
             withCredentials: true,
             data: data
         }).success(callback);
     },
     getSingleExploreSmaaash: function(id, callback) {
         var data = {
             _id: id,
             city: $.jStorage.get("cityid")
         };
         $http({
             url: adminurl + 'exploresmash/getSingleExploreSmaaash',
             method: 'POST',
             withCredentials: true,
             data: data

         }).success(callback);
     },
     searchExploreSmaaash: function(filter, callback) {
       if(filter){
         filter.city=$.jStorage.get("cityid");
       }
               $http({
               url: adminurl + 'exploresmash/getSingleExploreSmaaash',
               method: 'POST',
               withCredentials: true,
               data: filter

           }).success(callback);
       },
       addToWishList: function(id, callback) {
           console.log("nAV", id);
           var data = {
               user: $.jStorage.get("loginDetail").data._id,
               wishList: {
                   exploresmash: id,
                   city: $.jStorage.get("cityid")
               }
           };
           $http({
               url: adminurl + 'signup/addToWishList',
               method: 'POST',
               withCredentials: true,
               data: data
           }).success(callback);
       },
       showWishList: function(callback) {
           // console.log("nAV", id);
           var data = {
               user: $.jStorage.get("loginDetail").data._id,
           };
           $http({
               url: adminurl + 'signup/showWishList',
               method: 'POST',
               withCredentials: true,
               data: data
           }).success(callback);
       },
       logout: function(callback) {
           // $.jStorage.flush();
             $.jStorage.set("loginDetail",null);
             $.jStorage.set("loginId",null);
             $.jStorage.set("loggedInUser",null);
             $.jStorage.set("customizeobj",null);
           return $http({
               url: adminurl + 'register/logout',
               method: 'POST',
           }).success(callback);
       },
       removeFromWishList: function(id,callback) {
         console.log("inNav",id);
           var data = {
               user: $.jStorage.get("loginDetail").data._id,
               _id:id
           };
           $http({
               url: adminurl + 'signup/deleteWishList',
               method: 'POST',
               withCredentials: true,
               data: data
           }).success(callback);
       },
       getDetailExploreSmaaash: function(id, callback) {
           var data = {
               _id: id,
               city: $.jStorage.get("cityid")
           };

           $http({
               url: adminurl + 'exploresmash/getDetailExploreSmaaash',
               method: 'POST',
               withCredentials: true,
               data: data

           }).success(callback);
       },
   };
 });
