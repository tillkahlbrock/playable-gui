'use strict';

var playableControllers = angular.module('Playable.controllers', []);

playableControllers.controller('PlaygroundCtrl', function($scope, Playground) {
        $scope.playgrounds = Playground.query();

//    $scope.playgrounds = [
//        {"name": 'Spielplatz Schlosspark', "latitude": "233", "longitude": "34"},
//        {"name": "Blub", "latitude": "12", "longitude": "4"},
//        {"name": "Smup", "latitude": "3", "longitude": "66"},
//        {"name": "fdsf", "latitude": "33", "longitude": "545"}
//    ];

    $scope.orderProp = 'latitude'
});