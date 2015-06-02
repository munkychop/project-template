'use strict';

module.exports = function (grunt, sharedConfig) {

    var _statixDir = 'statix/';
    var _statixSrcDir = _statixDir + 'src/';
    var _statixDistDir = _statixDir + 'dist/';
    var _statixHelpersDir = _statixSrcDir + 'helpers/';
    var _statixTemplatesDir = _statixSrcDir + 'templates/'; 
    var _statixPartialsDir = _statixTemplatesDir + 'includes/';
    var _statixLayoutsDir = _statixTemplatesDir + 'layouts/';
    var _statixDefaultLayout = 'default.hbs';
    var _statixPagesDir = _statixTemplatesDir + 'pages/';
    var _statixStyleGuideDistDir = _statixDistDir + 'styleguide/';
    var _statixStyleGuideDefaultFile = 'index.html';

    var _tasks = {
        /**
         * browserSync
         * http://www.browsersync.io/docs/options/
         * http://www.browsersync.io/docs/grunt/
         */
        browserSync : {
            serve : {
                bsFiles : {
                    src : [
                        _statixDistDir + '**/*.*',
                        '!' + _statixStyleGuideDistDir
                    ]
                },
                options : {
                    watchTask : true,
                    server : {
                        // baseDir: './<%= config.statix.dir%>/dist'
                        baseDir : _statixDistDir
                    }
                }
            },


            styleguide : {
                bsFiles : {
                    src : [
                        _statixDistDir + '**/*.*',
                        // '!' + _statixStyleGuideDistDir
                    ]
                },
                options : {
                    watchTask : true,
                    server : {
                        baseDir : _statixDistDir,
                        index : _statixStyleGuideDistDir + _statixStyleGuideDefaultFile
                    }
                }
            }
        },


        /**
         * Assemble
         * http://assemble.io/
         * Static site generator used by Statix
         * Find out more at https://github.com/tmwagency/statix
         */
        assemble : {
            options : {
                data : _statixSrcDir + '**/*.{json,yml}',
                assets : _statixDistDir,
                helpers : [
                    // 'helper-moment',
                    // 'handlebars-helper-eachitems',
                    // 'handlebars-helper-aggregate',
                    _statixHelpersDir + 'helper-*.js'
                ],

                partials : [_statixPartialsDir + '**/*.hbs'],
                flatten : false,

                layout : _statixDefaultLayout,
                layoutdir : _statixLayoutsDir
            },

            default : {
                files : [{
                    // cwd: './<%= config.statix.dir%>/src/templates/pages/',
                    cwd : _statixPagesDir,
                    dest : _statixDistDir,
                    expand : true,
                    src : ['**/*.{hbs,md}']
                }]
            }
        },

        compileStatix : {
            dev : [
                'assemble'
            ]
        }
    };

    return {
        tasks : _tasks,
        config : {
            statixTemplatesDir : _statixTemplatesDir
        }
    };
};