'use strict';

var _mozjpeg = require('imagemin-mozjpeg');
var _pngquant = require('imagemin-pngquant');
var _gifsicle = require('imagemin-gifsicle');

module.exports =  function (grunt, sharedConfig) {

	var _imageSrcDir = sharedConfig.srcDir + 'img/';
	var _imageDistDir = sharedConfig.distDir + 'img/';
	var _grunticonSrcDir = _imageSrcDir + 'icons/';
	var _grunticonDistDir = _imageDistDir + 'icons/';

	return {
		/**
		 * grunt-contrib-imagemin
		 * https://github.com/gruntjs/grunt-contrib-imagemin
		 * Minify PNG, SVG, gif & JPEG images
		 */
		imagemin: {
			grunticon: {
				options: {
					optimizationLevel: 3,
					progressive : true,
					svgoPlugins: [
						{ removeViewBox: false },
						{ removeUselessStrokeAndFill: false }
					],
					use: [
						_mozjpeg(),
						_pngquant(),
						_gifsicle()
					]
				},
				files: [{
					expand: true,
					cwd: _grunticonSrcDir,
					src: ['**/*.{svg,png,jpg,gif}'],
					dest: _grunticonDistDir
				}]
			},

			images: {
				files: [{
					expand: true,
					cwd: _imageSrcDir,
					src: ['**/*.{svg,png,jpg,gif}'],
					dest: _imageDistDir
				}]
			}
		},


		/**
		 * Grunticon
		 * https://github.com/filamentgroup/grunticon
		 */
		grunticon: {
			all: {
				files: [{
					expand: true,
					cwd   : _grunticonSrcDir,
					src   : ['*.{svg,png,jpg,gif}'],
					dest  : _grunticonDistDir
				}],
				options: {
					// https://github.com/filamentgroup/grunticon#optionscustomselectors
					// customselectors: {
					// 	"arrow": [".icon-arrow:before"]
					// }
				}
			}
		}
	};
};
