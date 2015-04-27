/**
 * Created by apps-libX on April 28th 2015, 2:53:11 am.
 *
 * @module test.appsLibX.gulpbase
 * @name gulpbaseService
 *
 * @description
 * Tests for gulpbaseService under appsLibX.gulpbase
 * _Test description._
 */


describe('Service: appsLibX.gulpbase.gulpbaseService', function () {

    'use strict';

    // load the service's module
    beforeEach(module('appsLibX.gulpbase'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (gulpbaseService) {
        service = gulpbaseService;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
