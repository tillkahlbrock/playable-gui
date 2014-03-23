var playableServices = angular.module('Playable.services', ['ngResource']);

playableServices.factory('Playground', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8000/playground', {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    }]);