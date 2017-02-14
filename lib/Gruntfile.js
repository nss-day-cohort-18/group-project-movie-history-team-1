module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            '../dist/js/app.js': ['../js/main.js'],
            options: {
              browserifyOptions: {
                paths: ["./node_modules"]
              }
            }
        },
        jshint: {
            files: ['../js/**/*.js'], //location of javascript files
            options: {
                predef: ["document", "console", "$", "this", "XMLHttpRequest", "window", "target"], //allows for predefined things not found in js
                esnext: true, //allows for ES6
                globalstrict: true,
                globals: {"Acme": true}, //name value pairs, allows to define global vars used in many files.
                browserify: true
            }
        },
        sass: { //setup sass compilation
            dist: {
                files: {
                    '../dist/css/style.css': '../sass/styles.scss'
                }
            }
        },
        watch: { //automatically watch for changes
            javascripts: {
                files: ['../js/**/*.js'],
                tasks: ['jshint', 'browserify']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            },
            browserify: ['../js/*.js'],
            tasks: ['browserify']

        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'sass', 'watch']);
};