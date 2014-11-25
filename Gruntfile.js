module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        serve: {
            options: {
                port: 1234
            }
        },

        clean: ['build/'],

        watch: {
            css: {
                options: {
                  livereload: true
                },
                files: ["Gruntfile.js", "src/**"],
                tasks: ['clean', 'copy', 'uglify', 'git:add', 'git:commit']
            },
        },

        copy: {
            js: {
                files: [
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['src/*.js'], 
                        dest: 'build/', 
                        filter: 'isFile'
                    },
                ]
            }
        },

        git: {
            add: {
                options: {
                  all: true
                }
            },
            commit: {
                options: {
                  message: 'Automated commit'
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapIncludeSources: true,
            },

            src: {
                files: {
                    'build/jquery.placement.min.js': ['src/jquery.placement.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-simple-git');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('default', ['clean', 'copy', 'uglify', 'watch', 'notify:server']);

};
