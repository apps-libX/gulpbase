/**
 * Created by apps-libX on April 28th 2015, 2:53:11 am.
 *
 * @module test.appsLibX.gulpbase
 * @name GulpbaseController
 *
 * @description
 * Tests for GulpbaseController under appsLibX.gulpbase
 * _Test description._
 */


describe('Controller: appsLibX.gulpbase.GulpbaseController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('appsLibX.gulpbase'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('GulpbaseController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
