/**
 * Created by apps-libX on April 28th 2015, 2:53:11 am.
 */

gulpbase.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/gulpbase'
            //})
            .state('gulpbase', {
                url         : '/gulpbase',
                templateUrl : '/gulpbase'
            });
            //.state('gulpbaseDashboard.gulpbase', {
            //    url         : '/dashboard/gulpbase',
            //    templateUrl : '/dashboard/gulpbase'
            //});
    }
]);