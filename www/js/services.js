 // var adminurl = "http://192.168.0.123:1337/"; //local
 var adminurl = "http://104.197.84.255/";  //server
 // var imgpath = adminurl + "uploadfile/getupload?file=";
 var imgurl = adminurl + "upload/";
 var imgpath = imgurl + "readFile";
 var uploadurl = imgurl;


 angular.module('starter.services', [])

 .factory('MyServices', function($http) {

   return {

     getHomeContent: function(callback) {

       return $http({
         url: adminurl + 'exploresmash/getHomeContent',
         method: "POST",
         withCredentials: true
       }).success(callback);
     },
     getCity: function(callback) {
       $http({
         url: adminurl + 'city/getAllCityByOrder',
         method: 'POST',
         withCredentials: true
       }).success(callback);
     },
     signUp: function(data, callback) {
       console.log("signUp");
       $http({
         url: adminurl + 'user/signup',
         method: 'POST',
         withCredentials: true,
         data: data
       }).success(callback);
     }
   };
 });
