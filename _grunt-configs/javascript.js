'use strict';

var _alias = require('browserify-alias-grunt');

module.exports =  function (grunt, sharedConfig) {

    var _srcDir = sharedConfig.srcDir + 'js/';
    var _distDir = sharedConfig.distDir + 'js/';
    var _srcFile = 'app.js';
    var _distFile = _srcFile;
    var _shimsDir = _srcDir + 'helpers/';
    var _shimsFile = 'shims.js';

    return {
        browserify: {

            dev : {
                src: [_srcDir + _srcFile],
                dest: _distDir + _distFile,
                options : {
                    alias: _alias.map(grunt, {
                        cwd: _srcDir,
                        src: ['**/*.js'],
                        dest: ''
                    }),
                    browserifyOptions : {
                        debug: true
                    },
                    watch: true
                }
            }
        },

        /**
         * Shimly
         * https://github.com/nicbell/shimly
         * Load in a base set of JS shims for use in a project
         */
        shimly: {
            // things you would like to shim (an array of items from the list above)
            shim: ['Array.forEach', 'Array.filter', 'Array.map', 'Function.bind', 'EventListener'],

            // output location (relative to your grunt.js file location)
            dest: _shimsDir + _shimsFile,

            // minify the output (true or false)
            minify: false
        }
    };
};