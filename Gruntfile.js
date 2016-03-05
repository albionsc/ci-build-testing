module.exports = function (grunt) {
    grunt.initConfig({

        bower: {
            pkg: grunt.file.readJSON('package.json'),
            install: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: true, // Copy Bower packages to target directory.//
                    layout: "byComponent"
                }
            }
        },
        karma: {
            client: {
                configFile: 'client-karma.conf.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    angular: true
                },
                reporter: 'checkstyle',
                reporterOutput: "build/client/jshint",
                force: true
            },
            client: {
                src: ['Gruntfile.js', 'client/**/*.js', 'test/**/*.js'],

            }
        },
        clean:{
            client: ["build/client", "path/to/dir/two"],
        }


    })

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('client-analysis', ['clean:client','karma:client', 'jshint:client']);
    grunt.registerTask('client', ['bower', 'client-analysis']);
    grunt.registerTask('default', ['client']);
}