'use strict';

module.exports = function (grunt, sharedConfig) {

    var _images = require('./images')(grunt, sharedConfig);
    var _server = require('./server')(grunt, sharedConfig);
    var _javascript = require('./javascript')(grunt, sharedConfig);
    var _css = require('./css')(grunt, sharedConfig);

    var _statixCopyFiles = {
        js : [{
            expand: true,
            cwd: _javascript.config.distDir,
            src: ['./**/*.*'],
            dest: _server.config.statixJsDistDir
        }],

        css : [{
            expand: true,
            cwd: _css.config.distDir,
            src: ['./**/*.*'],
            dest: _server.config.statixCssDistDir
        }],

        img : [{
            expand: true,
            cwd: _images.config.distDir,
            src: ['./**/*.*'],
            dest: _server.config.statixImageDistDir
        }]
    };

    var _tasks = {

        /**
         * Copy files
         * https://github.com/gruntjs/grunt-contrib-copy
         */
        copy : {

            statixAll : {
                files : _statixCopyFiles.js.concat(_statixCopyFiles.css).concat(_statixCopyFiles.img)
            },

            statixJs : {
                files : _statixCopyFiles.js
            },

            statixCss : {
                files : _statixCopyFiles.css
            },

            statixImg : {
                files : _statixCopyFiles.img
            }
        },

        copyStatix : {
            all : ['copy:statixAll'],
            js : ['copy:statixJs'],
            css : ['copy:statixCss'],
            img : ['copy:statixImg']
        }
    };

    return {
        tasks : _tasks,
        // config : {
        // }
    };
};