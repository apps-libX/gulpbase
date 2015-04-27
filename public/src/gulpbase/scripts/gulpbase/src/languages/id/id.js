/**
 * Created by apps-libX on April 28th 2015, 2:53:11 am.
 */

// gulpbase
angular.module('appsLibX.gulpbase').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('id', {
        TITLE : 'Hallo',
        FOO   : 'Ini adalah paragraf.'
    });
    // $translateProvider.preferredLanguage('id');
}]);

//gulpbase
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>