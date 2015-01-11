module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'src/*.js'
      ],
      specs: ['test/*.js'],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-summary')
      }
    },

    umd: {
      wrap: {
        src: 'src/ignore-argument.js',
        dest: 'index.js',
        objectToExport: 'ignoreArgument',
        amdModuleId: 'ignoreArgument',
        index: 2
      }
    },

    'clean-console': {
      all: {
        options: {
          url: 'test/index.html',
          timeout: 1 // seconds to wait for any errors
        }
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      all: {
        files: ['*.js', 'test/*.js', 'package.json'],
        tasks: ['jshint', 'test']
      }
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['clean-console']);
  grunt.registerTask('default',
    ['nice-package', 'sync', 'deps-ok', 'jshint', 'umd', 'test']);
};
