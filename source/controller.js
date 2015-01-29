/**
 * Created by happy on 29/01/2015.
 */

var controllers = angular.module('ExampleApp.controllers', [])
    .controller('ExampleController', function ($scope, UserdataService) {

        UserdataService.getFirstUsername().then(function(firstUsername) {
            $scope.firstUsername = firstUsername;
        });

    });
