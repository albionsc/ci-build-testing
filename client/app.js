"use strict";

var app = angular.module("appCore", [
    "ui.router",
    "ngHandsontable"
]).config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    //$stateProvider
    //    .state('/home', {
    //        url: "/",
    //        templateUrl: "client/app/home/live-view.html"
    //    })
    //    .state('/view2', {
    //        url: "/view2",
    //        templateUrl: "client/view2.html"
    //    });

    $stateProvider
        .state('/home', {
            url: "/",
            views: {
                'header': {
                    templateUrl: "components/controllers/app-header/app-header.html",
                    controller: "AppHeaderCtrl"
                },
                'content': {
                    templateUrl: "app/home/live-view.html",
                    controller: "HomeCtrl"
                },
                'menu': {
                    templateUrl: "components/controllers/app-menu/app-menu.html"
                }
            }
        })
        .state('/preview', {
            url: "/",
            views: {
                'header': {
                    templateUrl: "components/controllers/app-header/app-header.html",
                    controller: "AppHeaderCtrl"
                },
                'content': {
                    templateUrl: "app/home/template-view.html",
                    controller: "HomeCtrl"
                },
                'menu': {
                    templateUrl: "components/controllers/app-menu/app-menu.html"
                }
            }
        });

    $urlRouterProvider.otherwise("/");
});
