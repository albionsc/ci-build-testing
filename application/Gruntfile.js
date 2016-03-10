module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: 'client/lib',
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: true, // Copy Bower packages to target directory.//
                    layout: "byComponent"
                }
            }
        },
        clean:{
            all: ['reports', 'dist', 'client/lib'],
        },
        karma: {
            client: {
                configFile: 'test/client/karma.conf.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                reporter: 'checkstyle',
                force: true
            },
            client: {
                options: {
                    globals: {
                        jQuery: true,
                        angular: true
                    },
                    reporterOutput: "reports/client/jshint",
                }
            }

        },
        copy: {
            client: {
                expand: true,
                src: ['client/**', '!client/lib/**'],
                dest: 'dist'
            },
            server: {
                expand: true,
                src: 'server/*',
                dest: 'dist'
            },
            package: {
                expand:true,
                src: 'package.json',
                dest: 'dist'
            }
        },
        useminPrepare: {
            html: 'client/index.html',
            options: {
                dest: 'dist/client'
            }
        },
        concat: {
            options: {
                stripBanners: true
            }
        },
        cssmin: {

        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            source: {
                files: [{
                    src: [
                        'dist/client/lib/*.js',
                        'dist/client/lib/*.css'
                    ]
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: 'some'
            }
        },
        usemin: {
            html: 'dist/client/index.html',
        }



    })

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('client-minify', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'filerev','usemin'])
    grunt.registerTask('client-build', [ 'bower:install', 'karma:client', 'jshint:client', 'copy:client', 'client-minify']);
    grunt.registerTask('server-build', [ 'copy:server', 'copy:package']);

    grunt.registerTask('default', ['clean:all', 'client-build', 'server-build']);


}