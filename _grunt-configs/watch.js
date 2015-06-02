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
    var _tasks = {

        watch: {

            js : {
                files : [_js.config.srcDir + '**/*.js'],
                tasks : _js.tasks.compileJS.dev.concat(_utilities.tasks.copyStatix.js)
            },

            scss : {
                files : [_css.config.srcDir + '**/*.scss'],
                tasks : _css.tasks.compileCSS.dev.concat(_utilities.tasks.copyStatix.css)
                // options: {
                //     interrupt: true,
                //     spawn: false
                // }
            },

            images : {
                files : [
                    _images.config.srcDir + '**/*.{svg,png,jpg,gif}',
                    '!' + _images.config.grunticonSrcDir + '**/*' // ignore the grunticon directory
                ],
                tasks : _images.tasks.compileImages.dev.concat(_utilities.tasks.copyStatix.img)
                // options: {
                //     interrupt: true
                // }
            },

            grunticon : {
                files : [_images.config.grunticonSrcDir + '**/*.{svg,png,jpg,gif}'],
                tasks : _images.tasks.compileIcons.dev.concat(_utilities.tasks.copyStatix.img),
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
                files : [_server.config.statixTemplatesDir + '**/*.{hbs,md}'],
                tasks : _server.tasks.compileStatix.dev,//.concat(_utilities.tasks.copyStatix.dev),

                options: {
                    livereload: true
                }
            }
        }
    };

    return {
        tasks : _tasks
    };
};