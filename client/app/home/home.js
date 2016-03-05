"use strict";

angular.module("appCore")
    .config(function($stateProvider){
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home.html"
                //views: {
                //    "header" : { templateUrl: "/client/app/components/controllers/app-header/app-header.html" },
                //    "content" : { templateUrl: "/client/app/home/live-view.html" }
                //}

                //views: {
                //    "header" : {
                //        templateUrl: "client/app/components/controllers/app-header/app-header.html",
                //        controller: "TigerHeaderCtrl"
                //    },
                //    "content" : {
                //        templateUrl: "live-view.html",
                //        controller: "HomeCtrl"
                //    }
                //}
            });
    });