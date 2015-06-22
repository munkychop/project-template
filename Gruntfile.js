module.exports = function (grunt) {

    'use strict';

    var _configs = require('./_grunt-configs/_config')(grunt);
    var _devTasks = ['clean:all', 'shimly', 'js:dev', 'js:testAll', 'css:dev', 'images:dev', 'icons:dev', 'copy:statixAll', 'assemble'];
    var _serveTasks = ['clean:all', 'shimly', 'js:dev', 'js:testAll', 'css:dev', 'images:dev', 'icons:dev', 'copy:statixAll', 'assemble', 'browserSync:serve', 'watch'];
    var _distTasks = ['clean:dist', 'shimly', 'js:dist', 'js:testAll', 'css:dist', 'images:dist', 'icons:dist'];

    // Project configuration.
    grunt.initConfig(_configs);

    grunt.registerTask('default', _devTasks);
    grunt.registerTask('dev', _devTasks);
    grunt.registerTask('serve', _serveTasks);
    grunt.registerTask('dist', _distTasks);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});
};