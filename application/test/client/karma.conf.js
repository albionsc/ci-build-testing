module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        files: [
            'test/client/polyfills.js',

            'client/lib/jquery/jquery.js',
            'client/lib/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'client/lib/angular-ui-router/angular-ui-router.js',
            'client/lib/materialize/js/materialize.js',
            'client/lib/zeroclipboard/ZeroClipboard.js',
            'client/lib/pikaday/pikaday.js',
            'client/lib/moment/moment.js',
            'client/lib/handsontable/handsontable.js',
            'client/lib/ngHandsontable/ngHandsontable.js',


            'client/app.js',
            'client/components/**/*.js',
            'client/app/**/*.js',


            'test/client/components/controllers/app-header/*spec.js'
        ],

        // list of files to exclude
        exclude: [

        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'client/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'reports/client/test/test-results.xml',
        },

        coverageReporter: {
            reporters:[
                {type: 'html', dir:'reports/client/coverage/'},
                {type: 'cobertura', dir:'reports/client/coverage'}
            ]
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        //autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
	
	browserNoActivityTimeout: 20000
    });
};
