/**
 * Created by apps-libX on April 28th 2015, 2:53:11 am.
 *
 * @module test.appsLibX.gulpbase
 * @name gulpbase

 * @description
 * Tests for gulpbase under appsLibX.gulpbase
 * _Test description._
 */


describe('Directive: appsLibX.gulpbase.gulpbase', function () {

    'use strict';

    var ele, scope;

    beforeEach(module('appsLibX.gulpbase'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update the line below!
        ele = angular.element('<Replace with directive>');
        //update the above line if you haven't!
        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function () {
        scope.$apply(function () {

            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
