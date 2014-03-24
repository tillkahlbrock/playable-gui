'use strict';

var playableControllers = angular.module('Playable.controllers', []);

playableControllers.controller('PlaygroundCtrl', function ($scope, Playground) {
    $scope.playgrounds = Playground.query();
    $scope.orderProp = 'latitude'
});