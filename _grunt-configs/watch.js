'use strict';

module.exports = function (grunt, sharedConfig) {

    var _utilities = require('./utilities')(grunt, sharedConfig);
    var _js = require('./javascript')(grunt, sharedConfig);
    var _css = require('./css')(grunt, sharedConfig);
    var _images = require('./images')(grunt, sharedConfig);
    var _server = require('./server')(grunt, sharedConfig);

    /**
    * Watch
    * https://github.com/gruntjs/grunt-contrib-watch
    * Watches your scss, js etc for changes and compiles them
    */
    var _config = {

        watch: {

            js : {
                files : [_js.paths.distDir + _js.paths.distFile],
                tasks : _utilities.tasks.copy.statix.js
            },

            scss : {
                files : [_css.paths.srcDir + '**/*.scss'],
                tasks : _css.tasks.compile.dev.concat(_utilities.tasks.copy.statix.css)
                // options: {
                //     interrupt: true,
                //     spawn: false
                // }
            },

            images : {
                files : [
                    _images.paths.srcDir + '**/*.{svg,png,jpg,gif}',
                    '!' + _images.paths.grunticonSrcDir + '**/*' // ignore the grunticon directory
                ],
                tasks : _images.tasks.compile.images.dev.concat(_utilities.tasks.copy.statix.img)
                // options: {
                //     interrupt: true
                // }
            },

            grunticon : {
                files : [_images.paths.grunticonSrcDir + '**/*.{svg,png,jpg,gif}'],
                tasks : _images.tasks.compile.icons.dev.concat(_utilities.tasks.copy.statix.img),
                // options: {
                //     interrupt: true
                // }
            },

            grunt : {
                files : ['_grunt-configs/*.js', 'Gruntfile.js'],
                options: {
                    reload: true
                }
            },

            assemble : {
                files : [_server.paths.statixTemplatesDir + '**/*.{hbs,md}'],
                tasks : _server.tasks.compile.statix.dev,//.concat(_utilities.tasks.copy.statix.dev),

                options: {
                    livereload: true
                }
            }
        }
    };

    return {
        config : _config
    };
};