'use strict';

var _alias = require('browserify-alias-grunt');

module.exports = function (grunt, sharedConfig) {

    var _srcDir = sharedConfig.srcDir + 'js/';
    var _distDir = sharedConfig.distDir + 'js/';
    var _srcFile = 'app.js';
    var _distFile = _srcFile;
    var _shimsDir = _srcDir + 'helpers/';
    var _shimsFile = 'shims.js';

    var _browserifyAliasArray = _alias.map(grunt, {
        cwd : _srcDir,
        src : ['**/*.js', '!' + _srcFile],
        dest : ''
    });

    var _paths = {
        srcDir : _srcDir,
        distDir : _distDir,
        distFile : _distFile
    };

    var _config = {

        browserify : {

            dev: {
                src : _srcDir + _srcFile,
                dest : _distDir + _distFile,
                options : {
                    alias : _browserifyAliasArray,

                    browserifyOptions : {
                        debug: true
                    },

                    watch: true // use watchify instead of grunt-contrib-watch (much much faster!).
                }
            },

            dist: {
                src : _srcDir + _srcFile,
                dest : _distDir + _distFile,
                options : {
                    alias : _browserifyAliasArray,

                    // transform : ['uglifyify'],
                    browserifyOptions : {
                        debug: false
                    },
                }
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            dev: {
                src : _distDir + _distFile,
                dest : _distDir + _distFile
            }
        },


        /**
         * Shimly
         * https://github.com/nicbell/shimly
         * Load in a base set of JS shims for use in a project
         */
        shimly : {
            // things you would like to shim (an array of items from the list above)
            shim : ['Array.forEach', 'Array.filter', 'Array.map', 'Function.bind', 'EventListener'],

            // output location (relative to your grunt.js file location)
            dest : _shimsDir + _shimsFile,

            // minify the output (true or false)
            minify : false
        }
    };

    var _tasks = {
        compile : {
            dev : [
                'browserify:dev',
            ],
            dist : [
                'browserify:dist',
                'uglify'
            ]
        }
    };

    grunt.registerTask('js:dev', _tasks.compile.dev);
    grunt.registerTask('js:dist', _tasks.compile.dist);

    return {
        paths : _paths,
        config : _config,
        tasks : _tasks
    };
};