'use strict';

var _ = require('underscore');

module.exports = function (grunt) {

    var _sharedConfig = {
        srcDir : 'src/',
        distDir : 'dist/',
        tmpDir : 'tmp/'
    };

    var _configJS = require('./javascript')(grunt, _sharedConfig);
    var _configCSS = require('./css')(grunt, _sharedConfig);
    var _configImages = require('./images')(grunt, _sharedConfig);
    
    var _mergedConfigs = _.extend(_sharedConfig, _configJS, _configCSS, _configImages);

    return _mergedConfigs;
};