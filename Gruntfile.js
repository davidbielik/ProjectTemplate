module.exports = function(grunt) {
    var banner = '/*\n\n\t<%= pkg.name %> <%= pkg.version %>\n';
    banner += '\t-- <%= pkg.description %>';
    banner += '\n\t<%= pkg.repository.url %>\n';
    banner += '\tBuilt on <%= grunt.template.today("yyyy-mm-dd") %>\n\n*/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js'],
            options: {
                maxlen: 120,
                quotmark: 'single'
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['spec/']
        },
        concat: {
            options: {
                separator: ';n',
                banner: banner
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: banner,
            },
            build: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['build/<%= pkg.name %>.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jasmine-node');


    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'jasmine_node']);
};