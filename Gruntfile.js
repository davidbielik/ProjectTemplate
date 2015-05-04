module.exports = function(grunt) {
    var banner = '/*\n';
    banner += ' *\t<%= pkg.name %> <%= pkg.version %>\n';
    banner += ' *\t-- <%= pkg.description %>\n';
    banner += ' *\t<%= pkg.repository.url %>\n';
    banner += ' *\tBuilt on <%= grunt.template.today("yyyy-mm-dd") %>\n */\n';

    require('time-grunt')(grunt);

    grunt.initConfig({
        jsDir: 'src/',
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n',
                banner: banner
            },
            dist: {
                src: ['<%=jsDir%>*.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', '<%=jsDir%>*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                maxlen: 120,
                quotmark: 'single',

                globals: {
                    // AMD
                    module: true,
                    require: true,
                    requirejs: true,
                    define: true,

                    // Environments
                    console: true,

                    // General Purpose Libraries
                    $: true,
                    jQuery: true,

                    // Testing
                    sinon: true,
                    describe: true,
                    it: true,
                    expect: true,
                    beforeEach: true,
                    afterEach: true
                }
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
        },
        watch: {
            files: ['spec/**/*-spec.js','<%=jsDir%>*.js'],
            tasks: ['jshint', 'concat', 'uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify','watch']);
};