'use strict';

var _ = require('underscore');

module.exports = function (grunt) {

    var _sharedConfig = {
        srcDir : 'src/',
        distDir : 'dist/',
        tmpDir : 'tmp/'
    };

    var _jsTasks = require('./javascript')(grunt, _sharedConfig).config;
    var _cssTasks = require('./css')(grunt, _sharedConfig).config;
    var _imageTasks = require('./images')(grunt, _sharedConfig).config;
    var _watchTasks = require('./watch')(grunt, _sharedConfig).config;
    var _serverTasks = require('./server')(grunt, _sharedConfig).config;
    var _utilities = require('./utilities')(grunt, _sharedConfig).config;

    // console.log('_serverTasks:', _serverTasks);
    
    var _mergedTasks = _.extend(_sharedConfig, _jsTasks, _cssTasks, _imageTasks, _watchTasks, _serverTasks, _utilities);

    return _mergedTasks;
};