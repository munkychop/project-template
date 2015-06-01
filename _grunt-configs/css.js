'use strict';

module.exports =  function (grunt, sharedConfig) {

    var _srcDir = sharedConfig.srcDir + 'scss/';
    var _distDir = sharedConfig.distDir + 'css/';
    // var _tmpDir = sharedConfig.tmpDir;
    var _srcFile = 'kickoff.scss';
    var _distFile = 'kickoff.css';
    var _styleGuideSrcFile = 'styleguide.scss';
    var _styleGuideDistFile = 'styleguide.css';
    var _autoprefixerBrowsers = ['> 5%', 'last 2 versions', 'firefox > 3.6', 'ie > 8'];

    return {
        sass: {

            dev : {
                options: {
                    outputStyle: 'nested',
                    precision : 10,
                    sourceMap : true
                },
                src : _srcDir + _srcFile,
                dest : _distDir + _distFile
                // dest : _tmpDir + _distFile
            },

            dist : {
                options: {
                    outputStyle: 'compressed',
                    precision : 10,
                    sourceMap : false
                },
                src : _srcDir + _srcFile,
                dest : _distDir + _distFile
                // dest : _tmpDir + _distFile
            },

            styleguide: {
                options: {
                    outputStyle: 'compressed',
                    precision : 10
                },
                src : _srcDir + _styleGuideSrcFile,
                dest : _distDir + _styleGuideDistFile
            }
        },


        /**
         * Autoprefixer
         * https://github.com/nDmitry/grunt-autoprefixer
         * https://github.com/ai/autoprefixer
         * Auto prefixes your CSS using caniuse data
         */
        autoprefixer: {
            options: {
                browsers: _autoprefixerBrowsers,
                map: true,
                prev : false,
                inline: false
            },

            kickoff: {
                expand: true,
                flatten: true,
                // src : _tmpDir + '*.css',
                src : _distDir + '*.css',
                dest : _distDir
            }
        },


        /**
         * CSSO
         * https://github.com/t32k/grunt-csso
         * Minify CSS files with CSSO
         */
        csso: {
            dist: {
                options: {
                    restructure: false // turns structural optimisations off as can mess up fallbacks http://bem.info/tools/optimizers/csso/description/
                },
                src : _distDir + _distFile,
                dest : _distDir + _distFile
            }
        }
    };
};