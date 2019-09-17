var module;
module.exports = function(grunt){
   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       
       concat:{
           
       }
       
   }) ;
    
    grunt.loadNpmTask('grunt-contrib-concat');
    grunt.loadNpmTask('grunt-contrib-uglify');
    grunt.loadNpmTask('grunt-contrib-imagemin');
    
    grunt.registerTask('defult' ,['concat' ,'uglify' ,'imagemin']);
};