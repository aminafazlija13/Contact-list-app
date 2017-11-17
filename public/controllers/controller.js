var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function() {
        $http.get('/contactlist').then(function (response) {
            console.log('I got the requested data');
            $scope.contactlist = response.data;
            $scope.contact = null;﻿
        });
    }

    refresh();

    /* $http.get('/contactlist').then(doneCallbacks, failCallbacks);



     function doneCallbacks(res) {
         console.log("Data received");
         $scope.contactlist = res.data;
     };

     function failCallbacks(err) {
         console.log(err.message);
     };*/



    $scope.addContact = function() {
        console.log($scope.contact);
        $http({method: 'POST', url: '/contactlist', data: $scope.contact}).then(function(response) {
                $scope.contact = ""; //Clear input box
                console.log('POST Response: '+ response.statusText);
                refresh();
            });
    };﻿
    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id);
        refresh();
    };


}]);