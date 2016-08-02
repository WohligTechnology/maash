var adminurl = "http://192.168.1.103:1337/";
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





  };
});
