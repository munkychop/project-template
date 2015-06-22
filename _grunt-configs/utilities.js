'use strict';

module.exports = function (grunt, sharedConfig) {

    var _images = require('./images')(grunt, sharedConfig);
    var _server = require('./server')(grunt, sharedConfig);
    var _javascript = require('./javascript')(grunt, sharedConfig);
    var _css = require('./css')(grunt, sharedConfig);

    var _statixCopyFiles = {
        js : [{
            expand: true,
            cwd: _javascript.paths.distDir,
            src: ['./**/*.*'],
            dest: _server.paths.statixJsDistDir
        }],

        css : [{
            expand: true,
            cwd: _css.paths.distDir,
            src: ['./**/*.*'],
            dest: _server.paths.statixCssDistDir
        }],

        img : [{
            expand: true,
            cwd: _images.paths.distDir,
            src: ['./**/*.*'],
            dest: _server.paths.statixImageDistDir
        }]
    };

    var _config = {

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

        /**
         * Clean
         * https://github.com/gruntjs/grunt-contrib-clean
         * Clean some files
         */
        clean: {
            img : [_images.paths.distDir],
            dist : [sharedConfig.distDir],
            statix : [_server.paths.statixDistDir],
            all: [sharedConfig.distDir, _server.paths.statixDistDir]
        }
    };

    var _tasks = {
        copy : {
            statix : {
                all : ['copy:statixAll'],
                js : ['copy:statixJs'],
                css : ['copy:statixCss'],
                img : ['copy:statixImg']
            }
        }
    };

    return {
        config : _config,
        tasks : _tasks
    };
};