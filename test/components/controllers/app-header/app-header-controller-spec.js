"use strict";


describe('MainCtrl', function() {
    var scope,  controller;


        beforeEach(function () {
            module('appCore');
        });


        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('AppHeaderCtrl', {
                '$scope': scope
            });
        }));



    it('should set the name to Test', function() {
        //
        //// Triggering the AngularJS digest cycle in order to resolve all promises
        scope.$apply();
        //
        //// We expect the controller to put the right value onto the scope
        expect(scope.name).toEqual('Test');

    });

});