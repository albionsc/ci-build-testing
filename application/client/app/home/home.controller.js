"use strict";

angular.module('appCore')
    .controller('HomeCtrl', function($scope, $filter, ConfigService) {

        $scope.config = ConfigService.get();
        $scope.applicationName = $scope.config[0].applicationName;
        $scope.menuOptions = $scope.config[0].menuOptions;

        $scope.tableAttributes = {
            "minRows": "10",
            "minCols": "6",
            //"colHeaders": [
            //    "A",
            //    "B",
            //    "C",
            //    "D",
            //    "E",
            //    "F"
            //],
            "colHeaders": false,
            "rowHeaders": false,
            "height": "500"
        };

        $scope.initTable = function(id){
            //var record = id;
            var record = $filter('filter')($scope.menuOptions.mappingRules, {id:id})[0];
            console.log(record.columnHeaders.length);
            $scope.tableAttributes.minCols = record.columnHeaders.length;
            $scope.tableAttributes.colHeaders = record.columnHeaders;
        };
    });