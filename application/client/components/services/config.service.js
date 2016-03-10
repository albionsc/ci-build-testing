"use strict";

angular.module('appCore')
    .service('ConfigService', function() {
        var pages = [{
            "applicationName": "Ansible Deployed",
            "menuOptions": {
                "titles": [
                    {"name": "Brand"},
                    {"name": "Type"},
                    {"name": "Template"}
                ],
                //    "select1": "Brand",
                //    "select2": "Type",
                //    "select3": "Template"
                //},
                "brands": [{
                    "name": "Standard",
                    "productTypes": [{
                        "name": "Standard",
                        "templates": [{
                            "name": "None",
                            "id": 1,
                            "brand": "Standard",
                            "productType": "Standard"
                        }]
                    }]
                }, {
                    "name": "Fraud",
                    "productTypes": [{
                        "name": "Accident",
                        "templates": [{
                            "name": "None",
                            "id": 2,
                            "brand": "Fraud",
                            "productType": "Accident"
                        }]
                    }, {
                        "name": "Breakage",
                        "templates": [{
                            "name": "Breakage",
                            "id": 3,
                            "brand": "Fraud",
                            "productType": "Breakage"
                        }, {
                            "name": "Summary",
                            "id": 4,
                            "brand": " Fraud",
                            "productType": "Breakage"
                        }]
                    }, {
                        "name": "Claims",
                        "templates": [{
                            "name": "Claims",
                            "id": 5,
                            "brand": " Fraud",
                            "productType": "Claims"
                        }]
                    }]
                }],
                "mappingRules": [{
                    "id": 1,
                    "name": "A",
                    "columnHeaders": [
                        "DateTime",
                        "Claim ID",
                        "Claim Type",
                        "Name",
                        "Address",
                        "Contact Details",
                        "Summary"
                    ]
                },
                {
                    "id": 2,
                    "name": "B",
                    "columnHeaders": [
                        "DateTime",
                        "Claim ID",
                        "Claim Type",
                        "Name",
                        "Address",
                        "Contact Details",
                        "Summary",
                        "Vehicle Make"
                    ]
                }]
            }
        }];

        this.get = function(){
            return pages;
        }
    });
